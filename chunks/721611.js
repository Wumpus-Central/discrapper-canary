n.d(t, { Z: () => v });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    c = n.n(a),
    s = n(790519),
    u = n(91192),
    d = n(481060),
    f = n(493773),
    b = n(996435),
    y = n(910557);
function p(e) {
    var t;
    let { category: n, onClick: l, active: i } = e,
        { useTitle: a, useNavigationTitle: s, key: f } = n,
        b = null == a ? void 0 : a(),
        p = null != (t = null == s ? void 0 : s()) ? t : b;
    return (
        c()(null != p, "[SettingsSubnavigationCategory] Category must have a title"),
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
                    (n = n = { children: p }),
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
        n = b.Z.useField("activeCategoryKey");
    (0, f.ZP)(() => {
        b.Z.setState({ activeCategoryKey: t[0].key });
    });
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
    return (0, r.jsxs)("div", {
        className: y.subnav,
        children: [
            (0, r.jsx)("div", {
                className: y.track,
                children: (0, r.jsx)(s.animated.div, {
                    className: y.thumb,
                    style: o,
                }),
            }),
            (0, r.jsx)("ul", {
                children: t.map((e) =>
                    (0, r.jsx)(
                        p,
                        {
                            onClick: () => {
                                var t;
                                return (
                                    (t = e.key),
                                    void b.Z.setState({
                                        activeCategoryKey: t,
                                        targetKey: t,
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
    });
}
