n.d(t, { Z: () => v });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    c = n(666917),
    u = n(91192),
    d = n(481060),
    f = n(493773),
    p = n(996435),
    b = n(700425),
    y = n(910557);
function g(e) {
    var t;
    let { category: n, onClick: l, active: i } = e,
        { useTitle: a, useNavigationTitle: c, key: f } = n,
        p = null == a ? void 0 : a(),
        b = null != (t = null == c ? void 0 : c()) ? t : p;
    return (
        s()(null != b, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.mh, {
            id: f,
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    d.P3F,
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
                            onClick: l,
                            tag: "li",
                            className: o()({ [y.active]: i }),
                        },
                        e,
                    )),
                    (n = n = { children: b }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                    f,
                );
            },
        })
    );
}
function v(e) {
    let { categories: t } = e,
        n = p.Z.useField("currentCategoryKey");
    (0, f.ZP)(() => {
        t.some((e) => e.key === n) || p.Z.setState({ currentCategoryKey: t[0].key });
    }),
        l.useEffect(
            () => () => {
                p.Z.setState({ currentCategoryKey: void 0 });
            },
            [],
        );
    let i = l.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        o = (0, d.q_F)({
            y: 36 * i,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        });
    return (
        (0, b.l)(),
        (0, r.jsxs)("div", {
            className: y.subnav,
            children: [
                (0, r.jsx)("div", {
                    className: y.track,
                    children: (0, r.jsx)(c.animated.div, {
                        className: y.thumb,
                        style: o,
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
                                        void p.Z.setState({
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
