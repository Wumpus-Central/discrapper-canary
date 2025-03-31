r.d(t, { default: () => p });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(239091),
    l = r(100527),
    i = r(906732),
    a = r(714447),
    u = r(439827),
    s = r(388032);
function b(e) {
    let { guildId: t, onSelect: r, onPickerClose: l, onInteraction: i } = e,
        b = (0, u.Z)(t, l),
        p = (0, a.Z)();
    return (0, n.jsx)(o.v2r, {
        navId: 'user-context',
        onClose: c.Zy,
        'aria-label': s.NW.string(s.t.liqwPD),
        onSelect: r,
        onInteraction: i,
        children: (0, n.jsxs)(o.kSQ, {
            children: [p, b]
        })
    });
}
function p(e) {
    let { analyticsLocations: t } = (0, i.ZP)(e.sourceAnalyticsLocations, l.Z.SOUNDBOARD_CONTEXT_MENU);
    return (0, n.jsx)(i.Gt, {
        value: t,
        children: (0, n.jsx)(
            b,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, e)
        )
    });
}
