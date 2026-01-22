n.d(t, {
    A: () => _,
    h: () => f,
}),
    n(228524);
var r = n(417597),
    i = n(253932),
    a = n(351906),
    s = n(287809),
    o = n(985018);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = "quest_completed",
    p = "legacy_username";
function _(e, t) {
    var n;
    let l = i.m$.useSetting(),
        u = void 0 !== t ? t : l,
        f = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        _ = (0, r.bG)([a.A], () => a.A.hidePersonalInformation);
    if (null == e) return [];
    let h = null != (n = null == e ? void 0 : e.getBadges()) ? n : [];
    return (
        null != f && f.id === e.userId && u && (h = h.filter((e) => e.id !== p)),
        _ && (h = h.map((e) => d(c({}, e), { description: e.id === p ? o.intl.string(o.t.Br1ls3) : e.description }))),
        h
    );
}
