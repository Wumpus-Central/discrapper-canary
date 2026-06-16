"use strict";
n.d(t, { QU: () => c, bV: () => s, kX: () => u });
var i = n(441574),
    r = n(315069);
let s = Object.freeze({
        0: i.ob.SUNDAY,
        1: i.ob.MONDAY,
        2: i.ob.TUESDAY,
        3: i.ob.WEDNESDAY,
        4: i.ob.THURSDAY,
        5: i.ob.FRIDAY,
        6: i.ob.SATURDAY,
    }),
    a = Object.freeze({
        [i.ob.DAY_OF_WEEK_UNSPECIFIED]: 0,
        [i.ob.MONDAY]: 1,
        [i.ob.TUESDAY]: 2,
        [i.ob.WEDNESDAY]: 3,
        [i.ob.THURSDAY]: 4,
        [i.ob.FRIDAY]: 5,
        [i.ob.SATURDAY]: 6,
        [i.ob.SUNDAY]: 0,
    });
function o(e) {
    return 60 * e.hours + e.minutes;
}
class l extends r.A {
    ruleId;
    label;
    startTime;
    endTime;
    days;
    enabled;
    static fromServer(e) {
        return new l({
            ruleId: e.rule_id,
            label: e.label,
            startTime: e.start_time ?? void 0,
            endTime: e.end_time ?? void 0,
            days: e.days,
            enabled: e.enabled,
        });
    }
    static fromCache(e) {
        return new l(e);
    }
    constructor(e) {
        super(),
            (this.ruleId = e.ruleId),
            (this.label = e.label),
            (this.startTime = e.startTime),
            (this.endTime = e.endTime),
            (this.days = e.days),
            (this.enabled = e.enabled);
    }
    isActiveAt(e, t) {
        if (null == this.startTime || null == this.endTime || 0 === this.days.length || !this.enabled) return !1;
        let n = o(this.startTime),
            r = o(this.endTime),
            s = n > r;
        if (this.days.includes(e)) {
            if (s) {
                if (t >= n) return !0;
            } else if (t >= n && t < r) return !0;
        }
        if (s) {
            let n = e === i.ob.MONDAY ? i.ob.SUNDAY : e - 1;
            if (this.days.includes(n) && t < r) return !0;
        }
        return !1;
    }
    getEndMinutes() {
        return null == this.endTime ? null : o(this.endTime);
    }
    getStartMinutes() {
        return null == this.startTime ? null : o(this.startTime);
    }
}
class u extends r.A {
    rules;
    static fromServer(e) {
        return null == e ? null : new u({ rules: e.rules.map(l.fromServer) });
    }
    static fromCache(e) {
        return null == e ? null : new u({ rules: e.rules.map(l.fromCache) });
    }
    constructor(e) {
        super(), (this.rules = e.rules);
    }
    isInRestrictedHours() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (0 === this.rules.length) return !1;
        let t = s[e.getDay()],
            n = 60 * e.getHours() + e.getMinutes();
        return this.rules.some((e) => e.isActiveAt(t, n));
    }
    getNextStartInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (0 === this.rules.length || this.isInRestrictedHours(e)) return null;
        let t = e.getDay(),
            n = 60 * e.getHours() + e.getMinutes(),
            i = null;
        for (let e of this.rules.filter((e) => e.enabled)) {
            let r = e.getStartMinutes();
            if (null != r && 0 !== e.days.length)
                for (let s of e.days) {
                    let o = (a[s] - t + 7) % 7;
                    0 === o && r <= n && (o = 7);
                    let l = 24 * o * 60 - n + r;
                    (null == i || l < i.minutesUntil) && (i = { minutesUntil: l, rule: e });
                }
        }
        return i;
    }
    getNextEndTime() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (0 === this.rules.length) return null;
        let t = s[e.getDay()],
            n = 60 * e.getHours() + e.getMinutes();
        for (let i of this.rules.filter((e) => e.isActiveAt(t, n))) {
            let t = i.getEndMinutes(),
                r = i.getStartMinutes();
            if (null == t || null == r) continue;
            let s = r > t,
                a = new Date(e),
                o = Math.floor(t / 60),
                l = t % 60;
            return s && n >= r && a.setDate(a.getDate() + 1), a.setHours(o, l, 0, 0), a;
        }
        return null;
    }
}
function c(e) {
    return null == e
        ? null
        : e instanceof u
          ? e
          : 0 === e.rules.length
            ? new u({ rules: [] })
            : "ruleId" in e.rules[0]
              ? u.fromCache(e)
              : u.fromServer(e);
}
