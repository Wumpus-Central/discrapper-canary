n.d(t, {
    Cv: () => l,
    DZ: () => _,
    D_: () => b,
    Lg: () => s,
    MQ: () => u,
    Ro: () => c,
    _$: () => f,
    f$: () => p,
    jB: () => E,
    jN: () => h,
    o1: () => d,
    o4: () => m,
    ut: () => g,
    zO: () => o,
});
var r = n(86465),
    i = n(424046),
    a = n(894186);
function o(e) {
    let t = e.getDateWithAdjustedTimezone(),
        n = new r.L(e, {});
    return (
        (0, i.cz)(n, t),
        (0, i.rv)(n, t),
        n.assign("timezoneOffset", e.getTimezoneOffset()),
        n.addTag("casualReference/now"),
        n
    );
}
function s(e) {
    let t = e.getDateWithAdjustedTimezone(),
        n = new r.L(e, {});
    return (0, i.cz)(n, t), (0, i.hO)(n, t), n.delete("meridiem"), n.addTag("casualReference/today"), n;
}
function l(e) {
    return u(e, 1).addTag("casualReference/yesterday");
}
function c(e) {
    return d(e, 1).addTag("casualReference/tomorrow");
}
function u(e, t) {
    return d(e, -t);
}
function d(e, t) {
    let n = e.getDateWithAdjustedTimezone(),
        a = new r.L(e, {}),
        o = new Date(n.getTime());
    return o.setDate(o.getDate() + t), (0, i.cz)(a, o), (0, i.hO)(a, o), a.delete("meridiem"), a;
}
function f(e, t = 22) {
    let n = e.getDateWithAdjustedTimezone(),
        o = new r.L(e, {});
    return (0, i.cz)(o, n), o.imply("hour", t), o.imply("meridiem", a.GG.PM), o.addTag("casualReference/tonight"), o;
}
function p(e, t = 0) {
    let n = e.getDateWithAdjustedTimezone(),
        a = new r.L(e, {});
    return 6 > n.getHours() && (n = new Date(n.getTime() - 86400000)), (0, i.cz)(a, n), a.imply("hour", t), a;
}
function _(e, t = 20) {
    let n = new r.L(e, {});
    return n.imply("meridiem", a.GG.PM), n.imply("hour", t), n.addTag("casualReference/evening"), n;
}
function m(e, t = 20) {
    let n = e.getDateWithAdjustedTimezone(),
        o = new r.L(e, {});
    return (
        (n = new Date(n.getTime() - 86400000)),
        (0, i.cz)(o, n),
        o.imply("hour", t),
        o.imply("meridiem", a.GG.PM),
        o.addTag("casualReference/yesterday"),
        o.addTag("casualReference/evening"),
        o
    );
}
function h(e) {
    let t = new r.L(e, {});
    return (
        e.getDateWithAdjustedTimezone().getHours() > 2 && t.addDurationAsImplied({ day: 1 }),
        t.assign("hour", 0),
        t.imply("minute", 0),
        t.imply("second", 0),
        t.imply("millisecond", 0),
        t.addTag("casualReference/midnight"),
        t
    );
}
function g(e, t = 6) {
    let n = new r.L(e, {});
    return (
        n.imply("meridiem", a.GG.AM),
        n.imply("hour", t),
        n.imply("minute", 0),
        n.imply("second", 0),
        n.imply("millisecond", 0),
        n.addTag("casualReference/morning"),
        n
    );
}
function E(e, t = 15) {
    let n = new r.L(e, {});
    return (
        n.imply("meridiem", a.GG.PM),
        n.imply("hour", t),
        n.imply("minute", 0),
        n.imply("second", 0),
        n.imply("millisecond", 0),
        n.addTag("casualReference/afternoon"),
        n
    );
}
function b(e) {
    let t = new r.L(e, {});
    return (
        t.imply("meridiem", a.GG.AM),
        t.assign("hour", 12),
        t.imply("minute", 0),
        t.imply("second", 0),
        t.imply("millisecond", 0),
        t.addTag("casualReference/noon"),
        t
    );
}
