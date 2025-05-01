n.d(t, {
    Z: () => p,
    i: () => f
}),
    n(953529);
var r = n(399606),
    i = n(695346),
    o = n(246946),
    a = n(594174),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let f = 'quest_completed',
    _ = 'legacy_username';
function p(e, t) {
    var n;
    let l = i.R_.useSetting(),
        u = void 0 !== t ? t : l,
        f = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        p = (0, r.e7)([o.Z], () => o.Z.hidePersonalInformation);
    if (null == e) return [];
    let h = null != (n = null == e ? void 0 : e.getBadges()) ? n : [];
    return null != f && f.id === e.userId && u && (h = h.filter((e) => e.id !== _)), p && (h = h.map((e) => d(c({}, e), { description: e.id === _ ? s.intl.string(s.t.Br1ls7) : e.description }))), h;
}
