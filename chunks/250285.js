n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(928873),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    m = n(981631),
    g = n(772599);
let p = (e) => {
    let { userId: t, children: n, isLast: s, className: p } = e,
        [h, f] = i.useState(!1),
        { analyticsLocations: b } = (0, d.ZP)(),
        N = i.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: b,
                analyticsLocation: { section: m.jXE.FAMILY_CENTER }
            });
        }, [t, b]),
        x = () => {
            f(!0);
        },
        _ = () => {
            f(!1);
        };
    return (0, r.jsx)(c.mh, {
        id: t,
        children: (e) => {
            var t, i;
            return (0, r.jsx)(l.tE, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, r.jsx)(
                    o.Z.div,
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            style: { opacity: 1 },
                            className: a()(g.rowItem, p, {
                                [g.last]: s,
                                [g.active]: h
                            }),
                            onMouseEnter: x,
                            onMouseLeave: _,
                            onClick: N
                        },
                        e
                    )),
                    (i = i = { children: n(h) }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t)
                )
            });
        }
    });
};
