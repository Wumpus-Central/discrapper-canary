t.d(n, { default: () => m }), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(442837),
    l = t(100527),
    s = t(695346),
    c = t(699516),
    a = t(787018),
    d = t(752342),
    u = t(886794),
    f = t(910364);
function p(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
let b = [l.Z.BITE_SIZE_PROFILE_POPOUT, l.Z.PROFILE_PANEL];
function m(e) {
    let { user: n, sourceAnalyticsLocations: t } = e,
        { isBlocked: l, isIgnored: m } = (0, i.cj)([c.Z], () => ({
            isBlocked: c.Z.isBlocked(n.id),
            isIgnored: c.Z.isIgnored(n.id)
        })),
        [I, h] = r.useState(l || m),
        g = s.Rt.useSetting(),
        y = null != t && !b.some((e) => t.includes(e));
    return (r.useEffect(() => {
        h(l || m);
    }, [l, m]),
    I && y && !(m && g))
        ? (0, o.jsx)(a.W, p({ onViewBlockedProfileClick: () => h(!1) }, e))
        : n.isNonUserBot()
          ? (0, o.jsx)(u.Z, p({}, e))
          : n.bot
            ? (0, o.jsx)(d.Z, p({}, e))
            : (0, o.jsx)(f.Z, p({}, e));
}
