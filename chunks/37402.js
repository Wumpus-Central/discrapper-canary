n.d(t, { Gy: () => p, k7: () => c.k });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(939249);
n(14115);
var c = n(305003),
    o = n(626031),
    u = n(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    h = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var m = n(462887),
    C = n(736653),
    x = n(802814);
let f = { width: 60, height: 60 };
function g(e) {
    let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: a, play: s, getDuration: r } = e,
        i = r(),
        c = null != i ? 1e3 * i : 3e3;
    (0, l.useEffect)(() => {
        null !== t && t !== n.current && ((n.current = t), s());
    }, [t, s, n]),
        (0, l.useEffect)(() => {
            a(c);
        }, [a, c]);
}
function E(e) {
    var t;
    let s,
        r,
        i,
        c,
        { currentAnimationType: o, ...d } = e,
        { Component: m, ...C } =
            ((t = o ?? "earn"),
            (s = l.useRef(null)),
            ((r = l.useRef(t)).current = t),
            (i = l.useMemo(
                () => () => {
                    null != s.current && s.current.play(t);
                },
                [t],
            )),
            (c = l.useCallback(
                (e) =>
                    (0, a.jsx)(u.P, {
                        ...e,
                        src: () => n.e("278611").then(n.t.bind(n, 433886, 19)),
                        ref: s,
                        initialAnimation: r.current,
                        markers: h,
                    }),
                [],
            )),
            {
                events: {},
                play: i,
                getDuration: l.useCallback(() => s.current?.getDuration(), []),
                getCurrentFrame: l.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                Component: c,
            });
    return (
        g({ currentAnimationType: o, ...d, ...C }),
        (0, a.jsx)(m, { ...f, size: "custom", className: x.E$, useLottieDefaultColors: !0 })
    );
}
function A(e) {
    var t;
    let s,
        r,
        i,
        c,
        { currentAnimationType: o, ...h } = e,
        { Component: m, ...C } =
            ((t = o ?? "earn"),
            (s = l.useRef(null)),
            ((r = l.useRef(t)).current = t),
            (i = l.useMemo(
                () => () => {
                    null != s.current && s.current.play(t);
                },
                [t],
            )),
            (c = l.useCallback(
                (e) =>
                    (0, a.jsx)(u.P, {
                        ...e,
                        src: () => n.e("245492").then(n.t.bind(n, 653727, 19)),
                        ref: s,
                        initialAnimation: r.current,
                        markers: d,
                    }),
                [],
            )),
            {
                events: {},
                play: i,
                getDuration: l.useCallback(() => s.current?.getDuration(), []),
                getCurrentFrame: l.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                Component: c,
            });
    return (
        g({ currentAnimationType: o, ...h, ...C }),
        (0, a.jsx)(m, { ...f, size: "custom", className: x.E$, useLottieDefaultColors: !0 })
    );
}
let v = function (e) {
    let t = (0, C.Ay)();
    return (0, m.q)(t) ? (0, a.jsx)(A, { ...e }) : (0, a.jsx)(E, { ...e });
};
var b = n(375708);
function _() {
    return (0, a.jsx)("div", { className: x.V8 });
}
let p = (0, l.forwardRef)(function (e, t) {
    let {
            id: n,
            balance: s,
            balanceWidgetMode: u = c.k.DEFAULT,
            showNotificationBadge: d,
            onClick: h,
            onMouseDown: m,
            disabled: C,
            isInModalOverlay: f,
            className: g,
        } = e,
        [E, A] = (0, l.useState)(!1),
        p = (0, l.useMemo)(() => (u === c.k.SELECTED ? x.wH : E ? x.mr : x.Ay), [u, E]),
        [N, j] = (0, l.useState)(!1),
        [S, L] = (0, l.useState)(!1),
        [R, O] = (0, l.useState)(2700),
        y = null === s;
    (0, l.useEffect)(() => {
        y &&
            !N &&
            (j(!0),
            setTimeout(() => {
                L(!0);
            }, 500));
    }, [y, j, N]),
        (0, l.useEffect)(() => {
            S && !y && j(!1);
        }, [y, S]);
    let T = y || N,
        U = N ? null : s,
        [M, k] = (0, l.useState)(null),
        I = (0, l.useRef)(null),
        F = (0, l.useCallback)(() => {
            (I.current = null), k(null);
        }, []),
        D = (0, l.useCallback)(
            (e) => {
                let t = M === I.current;
                e > 0 && ("earn" !== M || !t) && k("earn");
            },
            [k, M],
        );
    return (0, a.jsx)(i.D, {
        onClick: T ? void 0 : h,
        "aria-label": T ? b.intl.string(b.t.y0WGqP) : b.intl.formatToPlainString(b.t.zPaLL9, { balance: U ?? 0 }),
        "aria-busy": T,
        className: r()(x.vk, { [x.r9]: C }),
        id: n ?? "balance-widget-pill",
        children: (0, a.jsxs)("span", {
            onMouseDown: m,
            onMouseEnter: C ? void 0 : () => A(!0),
            onMouseLeave: C ? void 0 : () => A(!1),
            ref: t,
            className: r()(x.kL, p, g, { [x.En]: T, [x.dA]: f, [x.r9]: C }),
            children: [
                (0, a.jsx)("div", {
                    className: r()(x.hr, T ? x.nr : void 0),
                    children: (0, a.jsx)(v, {
                        currentAnimationType: M,
                        animationTypeRef: I,
                        onSetAnimationDurationMS: O,
                    }),
                }),
                (0, a.jsx)(o.A, {
                    value: U,
                    onValueChange: D,
                    onValueReached: F,
                    targetTotalCounterTime: R,
                    className: T ? x.F : void 0,
                }),
                d && (0, a.jsx)(_, {}),
            ],
        }),
    });
});
