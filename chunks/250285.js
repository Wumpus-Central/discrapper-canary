n.d(t, { Z: () => g }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(928873),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    m = n(772599);
let g = (e) => {
    let { userId: t, children: n, isLast: s, className: g } = e,
        [p, h] = r.useState(!1),
        { analyticsLocations: f } = (0, d.ZP)(),
        b = r.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: f
            });
        }, [t, f]),
        _ = () => {
            h(!0);
        },
        x = () => {
            h(!1);
        };
    return (0, i.jsx)(c.mh, {
        id: t,
        children: (e) => {
            var t, r;
            return (0, i.jsx)(a.tE, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(
                    o.Z.div,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            style: { opacity: 1 },
                            className: l()(m.rowItem, g, {
                                [m.last]: s,
                                [m.active]: p
                            }),
                            onMouseEnter: _,
                            onMouseLeave: x,
                            onClick: b
                        },
                        e
                    )),
                    (r = r = { children: n(p) }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                )
            });
        }
    });
};
