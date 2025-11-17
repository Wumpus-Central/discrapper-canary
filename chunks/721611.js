n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    c = n.n(a),
    s = n(636606),
    u = n(91192),
    d = n(481060),
    f = n(996435),
    b = n(910557);
function p(e) {
    var t;
    let { category: n, onClick: l, active: i } = e,
        { useTitle: a, useNavigationTitle: s, key: f } = n,
        p = null == a ? void 0 : a(),
        y = null != (t = null == s ? void 0 : s()) ? t : p;
    return (
        c()(null != y, "[SettingsSubnavigationCategory] Category must have a title"),
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
                            className: o()({ [b.active]: i }),
                        },
                        e,
                    )),
                    (n = n = { children: y }),
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
function y(e) {
    let { categories: t } = e,
        [n, i] = l.useState(t[0].key),
        o = l.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        a = (0, d.q_F)({
            y: 36 * o,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        });
    return (0, r.jsxs)("div", {
        className: b.subnav,
        children: [
            (0, r.jsx)("div", {
                className: b.track,
                children: (0, r.jsx)(s.animated.div, {
                    className: b.thumb,
                    style: a,
                }),
            }),
            (0, r.jsx)("ul", {
                children: t.map((e) =>
                    (0, r.jsx)(
                        p,
                        {
                            onClick: () => {
                                var t;
                                i((t = e.key)),
                                    f.Z.setState({
                                        targetKey: t,
                                        showNavigationMobile: !1,
                                    });
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
