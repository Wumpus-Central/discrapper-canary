"use strict";
n.d(t, { QU: () => c, kX: () => u });
var r = n(988506),
    i = n(315069);
let s = Object.freeze({
    0: r.ob.SUNDAY,
    1: r.ob.MONDAY,
    2: r.ob.TUESDAY,
    3: r.ob.WEDNESDAY,
    4: r.ob.THURSDAY,
    5: r.ob.FRIDAY,
    6: r.ob.SATURDAY,
});
function a(e) {
    return 60 * e.hours + e.minutes;
}
function o(e) {
    return e === r.ob.MONDAY ? r.ob.SUNDAY : e - 1;
}
class l extends i.A {
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
        let n = a(this.startTime),
            r = a(this.endTime),
            i = n > r;
        if (this.days.includes(e)) {
            if (i) {
                if (t >= n) return !0;
            } else if (t >= n && t < r) return !0;
        }
        if (i) {
            let n = o(e);
            if (this.days.includes(n) && t < r) return !0;
        }
        return !1;
    }
    getEndMinutes() {
        return null == this.endTime ? null : a(this.endTime);
    }
    getStartMinutes() {
        return null == this.startTime ? null : a(this.startTime);
    }
}
class u extends i.A {
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
    getNextEndTime() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (0 === this.rules.length) return null;
        let t = s[e.getDay()],
            n = 60 * e.getHours() + e.getMinutes();
        for (let r of this.rules.filter((e) => e.isActiveAt(t, n))) {
            let t = r.getEndMinutes(),
                i = r.getStartMinutes();
            if (null == t || null == i) continue;
            let s = i > t,
                a = new Date(e),
                o = Math.floor(t / 60),
                l = t % 60;
            return s && n >= i && a.setDate(a.getDate() + 1), a.setHours(o, l, 0, 0), a;
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
