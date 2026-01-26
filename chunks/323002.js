r.d(t, {
    default: () => p,
});
var n = r(627968);
r(64700);
var o = r(397927),
    l = r(442433),
    i = r(793574),
    c = r(688810),
    a = r(585171),
    u = r(374426),
    s = r(985018);

function b(e) {
    let { guildId: t, onSelect: r, onPickerClose: i, onInteraction: c } = e,
        b = (0, u.A)(t, i),
        p = (0, a.A)();
    return (0, n.jsx)(o.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: l.Z_,
        "aria-label": s.intl.string(s.t.liqwPJ),
        onSelect: r,
        onInteraction: c,
        children: (0, n.jsxs)(o.rXV, {
            children: [p, b],
        }),
    });
}

function p(e) {
    let { analyticsLocations: t } = (0, c.Ay)(e.sourceAnalyticsLocations, i.A.SOUNDBOARD_CONTEXT_MENU);
    return (0, n.jsx)(c.f5, {
        value: t,
        children: (0, n.jsx)(
            b,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
