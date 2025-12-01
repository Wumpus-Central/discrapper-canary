n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    l = n(91192),
    c = n(793030),
    u = n(906732),
    d = n(892001),
    f = n(326218);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
    let { userId: t, children: n, isLast: a, className: p } = e,
        m = 1,
        [g, E] = i.useState(!1),
        { analyticsLocations: b } = (0, u.ZP)(),
        y = i.useCallback(() => {
            (0, d.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: b,
            });
        }, [t, b]),
        O = () => {
            E(!0);
        },
        v = () => {
            E(!1);
        };
    return (0, r.jsx)(l.mh, {
        id: t,
        children: (e) =>
            (0, r.jsx)(c.tEY, {
                offset: {
                    left: -8,
                    right: -8,
                },
                children: (0, r.jsx)(
                    s.Z.div,
                    h(
                        _(
                            {
                                style: { opacity: m },
                                className: o()(f.rowItem, p, {
                                    [f.last]: a,
                                    [f.active]: g,
                                }),
                                onMouseEnter: O,
                                onMouseLeave: v,
                                onClick: y,
                            },
                            e,
                        ),
                        { children: n(g) },
                    ),
                ),
            }),
    });
};
