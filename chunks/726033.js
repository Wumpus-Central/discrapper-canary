n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(695346),
    s = n(699516),
    l = n(614417),
    c = n(601665),
    u = n(103113),
    d = n(738953);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { user: t } = e,
        { isBlocked: n, isIgnored: f } = (0, o.cj)([s.Z], () => ({
            isBlocked: s.Z.isBlocked(t.id),
            isIgnored: s.Z.isIgnored(t.id)
        })),
        [p, m] = i.useState(n || f),
        g = a.Rt.useSetting();
    return p && !(f && g) ? (0, r.jsx)(l.Z, h(_({}, e), { onViewBlockedProfileClick: () => m(!1) })) : t.isNonUserBot() ? (0, r.jsx)(u.Z, _({}, e)) : t.bot ? (0, r.jsx)(c.Z, _({}, e)) : (0, r.jsx)(d.Z, _({}, e));
}
