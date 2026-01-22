n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(837381),
    c = n(158954),
    u = n(688810),
    d = n(657331),
    f = n(331011);

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

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
    let { userId: t, children: n, isLast: a, className: p } = e,
        h = 1,
        [g, E] = i.useState(!1),
        { analyticsLocations: b } = (0, u.Ay)(),
        y = i.useCallback(() => {
            (0, d.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: b,
            });
        }, [t, b]),
        O = () => {
            E(!0);
        },
        A = () => {
            E(!1);
        };
    return (0, r.jsx)(l.tG, {
        id: t,
        children: (e) =>
            (0, r.jsx)(c.vN3, {
                offset: {
                    left: -8,
                    right: -8,
                },
                children: (0, r.jsx)(
                    o.A.div,
                    m(
                        _(
                            {
                                style: {
                                    opacity: h,
                                },
                                className: s()(f.KG, p, {
                                    [f.HV]: a,
                                    [f.vu]: g,
                                }),
                                onMouseEnter: O,
                                onMouseLeave: A,
                                onClick: y,
                            },
                            e,
                        ),
                        {
                            children: n(g),
                        },
                    ),
                ),
            }),
    });
};
