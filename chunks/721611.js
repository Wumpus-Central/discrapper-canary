n.d(t, { Z: () => O });
var r = n(54381),
    o = n(473749),
    a = n(120356),
    i = n.n(a),
    l = n(512722),
    c = n.n(l),
    s = n(620792),
    u = n(91192),
    f = n(481060),
    d = n(493773),
    b = n(996435),
    y = n(700425),
    p = n(183794);
function g(e) {
    let { category: t, onClick: n, active: o } = e,
        { useTitle: a, useSubnavLabel: l, key: s } = t,
        d = null == a ? void 0 : a(),
        b = null == l ? void 0 : l(),
        y = null != b ? b : d;
    return (
        c()(null != y, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.mh, {
            id: s,
            children: (e) => {
                var t, a;
                return (0, r.jsx)(
                    f.P3F,
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            onClick: n,
                            tag: "li",
                            className: i()({ [p.active]: o }),
                        },
                        e,
                    )),
                    (a = a = { children: y }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    t),
                    s,
                );
            },
        })
    );
}
function O(e) {
    let { categories: t } = e,
        n = b.Z.useField("currentCategoryKey");
    (0, d.ZP)(() => {
        t.some((e) => e.key === n) || b.Z.setState({ currentCategoryKey: t[0].key });
    }),
        o.useEffect(
            () => () => {
                b.Z.setState({ currentCategoryKey: void 0 });
            },
            [],
        );
    let a = o.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        i = (0, f.q_F)({
            y: 36 * a,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        });
    return (
        (0, y.l)(),
        (0, r.jsxs)("div", {
            className: p.subnav,
            children: [
                (0, r.jsx)("div", {
                    className: p.track,
                    children: (0, r.jsx)(s.animated.div, {
                        className: p.thumb,
                        style: i,
                    }),
                }),
                (0, r.jsx)("ul", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            g,
                            {
                                onClick: () => {
                                    var t;
                                    return (
                                        (t = e.key),
                                        void b.Z.setState({
                                            requestedTargetKey: t,
                                            showNavigationMobile: !1,
                                        })
                                    );
                                },
                                active: e.key === n,
                                category: e,
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        })
    );
}
