n.d(t, { Gy: () => w, k7: () => c.k });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(939249);
let u = { EARN: 0.25, SPEND: 0.3 };
var c = n(305003),
    o = n(419354),
    d = n(834730),
    m = n(717421),
    f = n(475743),
    x = n(626584),
    h = n(572009),
    j = n(115093),
    v = n(745926);
let A = new x.A("BalanceCounter"),
    b = (0, h._$)(void 0) === j.B.PRODUCTION,
    g = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    C = (e) => {
        let t,
            n,
            { value: r, onSetDigitCount: s, onValueChange: i, onValueReached: c, targetTotalCounterTime: d = 3e3 } = e,
            [f, x] = (0, l.useState)(0),
            h = (0, l.useRef)(null),
            j = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            if (null === r) return;
            if (null === h.current) {
                h.current = r;
                return;
            }
            let e = null !== h.current ? r - h.current : r;
            0 !== e && null !== h.current && i(e), (j.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [r, i]);
        let v = r ?? 0,
            C = h.current ?? v,
            { duration: R, delay: E } = {
                duration: (n = d * u[(t = v - C > 0) ? "EARN" : "SPEND"]),
                delay: t ? d - n : 0,
            },
            { number: N } = (0, m.z)({
                from: { number: h.current ?? v },
                number: v,
                config: { mass: 1, tension: 20, friction: 10, duration: R },
                delay: E,
                onStart: () => {
                    s(g(C));
                },
                onRest: () => {
                    if ((x(f + 1), c(), !b && null !== j.current && null !== h.current)) {
                        let e = Date.now();
                        A.log("Balance Counter finished updating: ", {
                            time: e - j.current.lastChangedAt,
                            delta: v - h.current,
                        });
                    }
                    s(g(v)), (h.current = v);
                },
            }),
            k = g(Math.max(r ?? 0, N.get()));
        return (0, a.jsx)(o.animated.div, {
            style: { width: `calc(${k}ch)` },
            children: N.to((e) => `${e.toFixed(0)}`),
        });
    },
    R = (e) => {
        let { value: t, className: n, ...r } = e,
            i = null === t,
            [u, c] = (0, l.useState)(null),
            o = (0, l.useMemo)(() => g(t), [t]),
            m = (0, f.A)(o) ?? 0,
            x = (0, l.useMemo)(() => (null === u ? Math.max(m, o) : Math.max(o, u)), [m, o, u]),
            h = `${i ? 0 : x}ch`;
        return (0, a.jsx)(d.E, {
            variant: "text-md/semibold",
            className: s()(v.S, i ? void 0 : v.r, n),
            style: { width: h, opacity: i ? "0" : 1 },
            children: i
                ? null
                : (0, a.jsx)(C, {
                      onSetDigitCount: (e) => {
                          e !== u && c(e);
                      },
                      value: t,
                      ...r,
                  }),
        });
    };
var E = n(744682);
let N = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    k = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var p = n(462887),
    S = n(736653),
    O = n(743383);
let _ = { width: 60, height: 60 },
    D = (e) => {
        let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: a, play: r, getDuration: s } = e,
            i = s(),
            u = null != i ? 1e3 * i : 3e3;
        (0, l.useEffect)(() => {
            null !== t && t !== n.current && ((n.current = t), r());
        }, [t, r, n]),
            (0, l.useEffect)(() => {
                a(u);
            }, [a, u]);
    },
    T = (e) => {
        var t;
        let r,
            s,
            i,
            u,
            { currentAnimationType: c, ...o } = e,
            { Component: d, ...m } =
                ((t = c ?? "earn"),
                (r = l.useRef(null)),
                ((s = l.useRef(t)).current = t),
                (i = l.useMemo(
                    () => () => {
                        null != r.current && r.current.play(t);
                    },
                    [t],
                )),
                (u = l.useCallback(
                    (e) =>
                        (0, a.jsx)(E.P, {
                            ...e,
                            src: () => n.e("78611").then(n.t.bind(n, 433886, 19)),
                            ref: r,
                            initialAnimation: s.current,
                            markers: k,
                        }),
                    [],
                )),
                {
                    events: {},
                    play: i,
                    getDuration: l.useCallback(() => r.current?.getDuration(), []),
                    getCurrentFrame: l.useCallback(() => r.current?.getCurrentFrame() ?? null, []),
                    Component: u,
                });
        return (
            D({ currentAnimationType: c, ...o, ...m }),
            (0, a.jsx)(d, { ..._, size: "custom", className: O.E$, useLottieDefaultColors: !0 })
        );
    },
    y = (e) => {
        var t;
        let r,
            s,
            i,
            u,
            { currentAnimationType: c, ...o } = e,
            { Component: d, ...m } =
                ((t = c ?? "earn"),
                (r = l.useRef(null)),
                ((s = l.useRef(t)).current = t),
                (i = l.useMemo(
                    () => () => {
                        null != r.current && r.current.play(t);
                    },
                    [t],
                )),
                (u = l.useCallback(
                    (e) =>
                        (0, a.jsx)(E.P, {
                            ...e,
                            src: () => n.e("45492").then(n.t.bind(n, 653727, 19)),
                            ref: r,
                            initialAnimation: s.current,
                            markers: N,
                        }),
                    [],
                )),
                {
                    events: {},
                    play: i,
                    getDuration: l.useCallback(() => r.current?.getDuration(), []),
                    getCurrentFrame: l.useCallback(() => r.current?.getCurrentFrame() ?? null, []),
                    Component: u,
                });
        return (
            D({ currentAnimationType: c, ...o, ...m }),
            (0, a.jsx)(d, { ..._, size: "custom", className: O.E$, useLottieDefaultColors: !0 })
        );
    },
    M = (e) => {
        let t = (0, S.Ay)();
        return (0, p.q)(t) ? (0, a.jsx)(y, { ...e }) : (0, a.jsx)(T, { ...e });
    },
    L = () => (0, a.jsx)("img", { className: O.V8, src: n(324292), alt: "" }),
    w = (0, l.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: r,
                balanceWidgetMode: u = c.k.DEFAULT,
                showNotificationBadge: o,
                onClick: d,
                onMouseDown: m,
                disabled: f,
                isInModalOverlay: x,
                className: h,
            } = e,
            [j, v] = (0, l.useState)(!1),
            A = (0, l.useMemo)(() => (u === c.k.SELECTED ? O.wH : j ? O.mr : O.Ay), [u, j]),
            [b, g] = (0, l.useState)(!1),
            [C, E] = (0, l.useState)(!1),
            [N, k] = (0, l.useState)(2700),
            p = null === r;
        (0, l.useEffect)(() => {
            p &&
                !b &&
                (g(!0),
                setTimeout(() => {
                    E(!0);
                }, 500));
        }, [p, g, b]),
            (0, l.useEffect)(() => {
                C && !p && g(!1);
            }, [p, C]);
        let S = p || b,
            _ = b ? null : r,
            [D, T] = (0, l.useState)(null),
            y = (0, l.useRef)(null),
            w = (0, l.useCallback)(() => {
                (y.current = null), T(null);
            }, []),
            B = (0, l.useCallback)(
                (e) => {
                    let t = D === y.current;
                    e > 0 && ("earn" !== D || !t) && T("earn");
                },
                [T, D],
            );
        return (0, a.jsx)(i.D, {
            onClick: S ? void 0 : d,
            className: s()(O.vk, { [O.r9]: f }),
            id: n ?? "balance-widget-pill",
            children: (0, a.jsxs)("span", {
                onMouseDown: m,
                onMouseEnter: f ? void 0 : () => v(!0),
                onMouseLeave: f ? void 0 : () => v(!1),
                ref: t,
                className: s()(O.kL, A, h, { [O.En]: S, [O.dA]: x, [O.r9]: f }),
                children: [
                    (0, a.jsx)("div", {
                        className: s()(O.hr, S ? O.nr : void 0),
                        children: (0, a.jsx)(M, {
                            currentAnimationType: D,
                            animationTypeRef: y,
                            onSetAnimationDurationMS: k,
                        }),
                    }),
                    (0, a.jsx)(R, {
                        value: _,
                        onValueChange: B,
                        onValueReached: w,
                        targetTotalCounterTime: N,
                        className: S ? O.F : void 0,
                    }),
                    o && (0, a.jsx)(L, {}),
                ],
            }),
        });
    });
