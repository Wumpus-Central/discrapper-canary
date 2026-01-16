n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(120356),
    a = n.n(i),
    l = n(512722),
    c = n.n(l),
    s = n(81239),
    u = n(91192),
    f = n(481060),
    d = n(493773),
    b = n(996435),
    y = n(700425),
    p = n(183794);
function g(e) {
    let { category: t, onClick: n, active: o } = e,
        { useTitle: i, useSubnavLabel: l, key: s } = t,
        d = null == i ? void 0 : i(),
        b = null == l ? void 0 : l(),
        y = null != b ? b : d;
    return (
        c()(null != y, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.mh, {
            id: s,
            children: (e) => {
                var t, i;
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
                            className: a()(p.item, { [p.active]: o }),
                        },
                        e,
                    )),
                    (i = i = { children: y }),
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
                    t),
                    s,
                );
            },
        })
    );
}
function m(e) {
    let { categories: t } = e,
        n = b.Z.useField("currentCategoryKey");
    (0, d.ZP)(() => {
        t.some((e) => e.key === n) || b.Z.setState({ currentCategoryKey: t[0].key });
    });
    let i = o.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        {
            thumbRef: a,
            trackRef: l,
            thumbAnchorRef: c,
            springs: u,
        } = (function (e) {
            let t = o.useRef(null),
                n = o.useRef(null),
                r = o.useRef(null),
                i = o.useRef(!0),
                [a, l] = (0, f.q_F)(() => ({
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
                    let [e, o] = [t.current.getBoundingClientRect(), r.current.getBoundingClientRect()];
                    if (i.current) {
                        (i.current = !1), a.y.set(o.y - e.y), a.height.set(o.height);
                        return;
                    }
                    l({
                        y: o.y - e.y,
                        height: o.height,
                    });
                }, [e, l, a.y, a.height]),
                {
                    thumbRef: n,
                    trackRef: t,
                    thumbAnchorRef: r,
                    springs: a,
                }
            );
        })(i);
    return (
        (0, y.l)(),
        (0, r.jsxs)("div", {
            className: p.subnav,
            role: "list",
            style: {
                "--custom-nav-count": t.length,
                "--custom-nav-index": i,
            },
            children: [
                (0, r.jsx)("div", {
                    className: p.track,
                    "aria-hidden": "true",
                    ref: l,
                    children: (0, r.jsx)(s.animated.div, {
                        className: p.thumb,
                        style: u,
                        ref: a,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: p.thumbAnchor,
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
            ],
        })
    );
}
