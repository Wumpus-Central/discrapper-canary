"use strict";
n.d(t, {
    U_: () => f,
    we: () => T,
    e4: () => S,
    jv: () => h,
    A9: () => I,
    dR: () => N,
    lF: () => m,
    lA: () => p,
    oG: () => g,
});
var i = n(284009),
    r = n.n(i),
    a = n(945810),
    s = n(17928),
    l = n(287809),
    o = n(474090),
    d = n(202541);
function c() {
    let e = l.default.getCurrentUser();
    return (0, o.ki)(e, d.PremiumTypes.TIER_2);
}
function u() {
    return (0, s.bG)([l.default], () => (0, o.ki)(l.default.getCurrentUser(), d.PremiumTypes.TIER_2));
}
n(811233);
let _ = (0, a.mj)({
    name: "2026-03-message-bookmarks",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
});
class E {
    enabled = !1;
    bookmarkLimit = 0;
    reminderLimit = 0;
    constructor(e, t) {
        r()(null != t.b, "Config is missing bookmark limit"),
            r()(null != t.r, "Config is missing reminder limit"),
            (this.enabled = e),
            (this.bookmarkLimit = t.b),
            (this.reminderLimit = t.r);
    }
}
let A = (0, a.mj)({
    name: "2026-07-message-bookmarks-v2",
    kind: "user",
    defaultConfig: new E(!1, { b: 0, r: 0 }),
    variations: { 1: (e) => new E(!0, JSON.parse(e)), 2: (e) => new E(!0, JSON.parse(e)) },
});
function h(e) {
    let { enabled: t } = A.useConfig({ location: e }),
        { enabled: n } = _.useConfig({ location: e });
    return t || n;
}
function I(e) {
    return A.getConfig({ location: e }).enabled || _.getConfig({ location: e }).enabled;
}
function f(e) {
    return A.getConfig({ location: e }).enabled;
}
function p(e) {
    let { enabled: t } = A.useConfig({ location: e }),
        { enabled: n } = _.useConfig({ location: e });
    return (function (e, t) {
        return !!e || (!!t && c());
    })(t, n);
}
function T(e) {
    return (function (e, t) {
        return !!e || (!!t && c());
    })(A.getConfig({ location: e }).enabled, _.getConfig({ location: e }).enabled);
}
function m(e, t) {
    return C(A.getConfig({ location: e }), _.getConfig({ location: e }).enabled, c(), t);
}
function g(e, t) {
    let n = A.useConfig({ location: e }),
        i = _.useConfig({ location: e }),
        r = u();
    return C(n, i.enabled, r, t);
}
function S(e) {
    return A.getConfig({ location: e }).enabled && !c();
}
function N(e) {
    let { enabled: t } = A.useConfig({ location: e }),
        n = u();
    return t && !n;
}
function C(e, t, n, i) {
    if (e.enabled)
        if (n) return i ? 50 : 200;
        else return i ? e.reminderLimit : e.bookmarkLimit;
    return t && n ? (i ? 50 : 200) : 0;
}
