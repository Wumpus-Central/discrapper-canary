n.d(t, {
    QU: () => d,
    kX: () => u,
});
var r = n(988506),
    i = n(315069);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = Object.freeze({
    0: r.ob.SUNDAY,
    1: r.ob.MONDAY,
    2: r.ob.TUESDAY,
    3: r.ob.WEDNESDAY,
    4: r.ob.THURSDAY,
    5: r.ob.FRIDAY,
    6: r.ob.SATURDAY,
});

function s(e) {
    return 60 * e.hours + e.minutes;
}

function l(e) {
    return e === r.ob.MONDAY ? r.ob.SUNDAY : e - 1;
}
class c extends i.A {
    static fromServer(e) {
        var t, n;
        return new c({
            ruleId: e.rule_id,
            label: e.label,
            startTime: null != (t = e.start_time) ? t : void 0,
            endTime: null != (n = e.end_time) ? n : void 0,
            days: e.days,
        });
    }
    static fromCache(e) {
        return new c(e);
    }
    isActiveAt(e, t) {
        if (null == this.startTime || null == this.endTime || 0 === this.days.length) return !1;
        let n = s(this.startTime),
            r = s(this.endTime),
            i = n > r;
        if (this.days.includes(e)) {
            if (i) {
                if (t >= n) return !0;
            } else if (t >= n && t < r) return !0;
        }
        if (i) {
            let n = l(e);
            if (this.days.includes(n) && t < r) return !0;
        }
        return !1;
    }
    constructor(e) {
        super(),
            a(this, "ruleId", void 0),
            a(this, "label", void 0),
            a(this, "startTime", void 0),
            a(this, "endTime", void 0),
            a(this, "days", void 0),
            (this.ruleId = e.ruleId),
            (this.label = e.label),
            (this.startTime = e.startTime),
            (this.endTime = e.endTime),
            (this.days = e.days);
    }
}
class u extends i.A {
    static fromServer(e) {
        return null == e
            ? null
            : new u({
                  rules: e.rules.map(c.fromServer),
              });
    }
    static fromCache(e) {
        return null == e
            ? null
            : new u({
                  rules: e.rules.map(c.fromCache),
              });
    }
    isInRestrictedHours() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (0 === this.rules.length) return !1;
        let t = o[e.getDay()],
            n = 60 * e.getHours() + e.getMinutes();
        return this.rules.some((e) => e.isActiveAt(t, n));
    }
    constructor(e) {
        super(), a(this, "rules", void 0), (this.rules = e.rules);
    }
}

function d(e) {
    return null == e
        ? null
        : e instanceof u
          ? e
          : 0 === e.rules.length
            ? new u({
                  rules: [],
              })
            : "ruleId" in e.rules[0]
              ? u.fromCache(e)
              : u.fromServer(e);
}
