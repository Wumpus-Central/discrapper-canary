n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    o = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(284009),
    c = n.n(i),
    s = n(92674),
    u = n(837381),
    d = n(397927),
    _ = n(964486),
    b = n(775602),
    p = n(894858),
    f = n(890690),
    y = n(637577);

function g(e) {
    let { category: t, onClick: n, active: o } = e,
        { useTitle: a, useSubnavLabel: i, key: s } = t,
        _ = null == a ? void 0 : a(),
        b = null == i ? void 0 : i(),
        p = null != b ? b : _;
    return (
        c()(null != p, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.tG, {
            id: s,
            children: (e) => {
                var t, a;
                return (0, r.jsx)(
                    d.DUT,
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
                            className: l()(y.AS, {
                                [y.vu]: o,
                            }),
                        },
                        e,
                    )),
                    (a = a =
                        {
                            children: p,
                        }),
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

function m(e) {
    let { categories: t } = e,
        n = p.A.useField("currentCategoryKey");
    (0, _.Ay)(() => {
        t.some((e) => e.key === n) ||
            p.A.setState({
                currentCategoryKey: t[0].key,
            });
    });
    let a = o.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        {
            thumbRef: l,
            trackRef: i,
            thumbAnchorRef: c,
            springs: u,
        } = (function (e) {
            let t = o.useRef(null),
                n = o.useRef(null),
                r = o.useRef(null),
                a = o.useRef(!0),
                [l, i] = (0, d.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: 0.1,
                        friction: 20,
                        tension: 300,
                    },
                }));
            return (
                o.useLayoutEffect(() => {
                    if (null == t.current || null == n.current || null == r.current) return;
                    let [e, o] = [t.current.getBoundingClientRect(), r.current.getBoundingClientRect()],
                        l = e.width / 2;
                    i({
                        y: (o.y - e.y) / l,
                        height: o.height / l,
                        immediate: b.A.useReducedMotion || a.current,
                    }),
                        (a.current = !1);
                }, [e, i, l.y, l.height]),
                {
                    thumbRef: n,
                    trackRef: t,
                    thumbAnchorRef: r,
                    springs: l,
                }
            );
        })(a);
    return (
        (0, f.u)(t),
        (0, r.jsxs)("div", {
            className: y.o8,
            role: "list",
            style: {
                "--custom-nav-count": t.length,
                "--custom-nav-index": a,
                "--custom-nav-width": "".concat(2, "px"),
            },
            children: [
                (0, r.jsx)("div", {
                    className: y.u4,
                    "aria-hidden": "true",
                    ref: i,
                    children: (0, r.jsx)(s.animated.div, {
                        className: y.FF,
                        style: u,
                        ref: l,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: y.gu,
                    "aria-hidden": "true",
                    ref: c,
                }),
                t.map((e) =>
                    (0, r.jsx)(
                        g,
                        {
                            onClick: () => {
                                var t;
                                return (
                                    (t = e.key),
                                    void p.A.setState({
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
            ],
        })
    );
}
