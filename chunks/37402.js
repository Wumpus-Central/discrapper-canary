l.d(t, { Gy: () => A, k7: () => c.k });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    i = l(939249);
l(14115);
var c = l(305003),
    o = l(626031),
    u = l(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    h = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var m = l(462887),
    C = l(736653),
    f = l(802814);
let x = { width: 60, height: 60 };
function g(e) {
    let { currentAnimationType: t, animationTypeRef: l, onSetAnimationDurationMS: n, play: s, getDuration: r } = e,
        i = r(),
        c = null != i ? 1e3 * i : 3e3;
    (0, a.useEffect)(() => {
        null !== t && t !== l.current && ((l.current = t), s());
    }, [t, s, l]),
        (0, a.useEffect)(() => {
            n(c);
        }, [n, c]);
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
            (s = a.useRef(null)),
            ((r = a.useRef(t)).current = t),
            (i = a.useMemo(
                () => () => {
                    null != s.current && s.current.play(t);
                },
                [t],
            )),
            (c = a.useCallback(
                (e) =>
                    (0, n.jsx)(u.P, {
                        ...e,
                        src: () => l.e("278611").then(l.t.bind(l, 433886, 19)),
                        ref: s,
                        initialAnimation: r.current,
                        markers: h,
                    }),
                [],
            )),
            {
                events: {},
                play: i,
                getDuration: a.useCallback(() => s.current?.getDuration(), []),
                getCurrentFrame: a.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                Component: c,
            });
    return (
        g({ currentAnimationType: o, ...d, ...C }),
        (0, n.jsx)(m, { ...x, size: "custom", className: f.E$, useLottieDefaultColors: !0 })
    );
}
function b(e) {
    var t;
    let s,
        r,
        i,
        c,
        { currentAnimationType: o, ...h } = e,
        { Component: m, ...C } =
            ((t = o ?? "earn"),
            (s = a.useRef(null)),
            ((r = a.useRef(t)).current = t),
            (i = a.useMemo(
                () => () => {
                    null != s.current && s.current.play(t);
                },
                [t],
            )),
            (c = a.useCallback(
                (e) =>
                    (0, n.jsx)(u.P, {
                        ...e,
                        src: () => l.e("245492").then(l.t.bind(l, 653727, 19)),
                        ref: s,
                        initialAnimation: r.current,
                        markers: d,
                    }),
                [],
            )),
            {
                events: {},
                play: i,
                getDuration: a.useCallback(() => s.current?.getDuration(), []),
                getCurrentFrame: a.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                Component: c,
            });
    return (
        g({ currentAnimationType: o, ...h, ...C }),
        (0, n.jsx)(m, { ...x, size: "custom", className: f.E$, useLottieDefaultColors: !0 })
    );
}
let j = function (e) {
    let t = (0, C.Ay)();
    return (0, m.q)(t) ? (0, n.jsx)(b, { ...e }) : (0, n.jsx)(E, { ...e });
};
var v = l(375708);
function N() {
    return (0, n.jsx)("img", { className: f.V8, src: l(324292), alt: "" });
}
let A = (0, a.forwardRef)(function (e, t) {
    let {
            id: l,
            balance: s,
            balanceWidgetMode: u = c.k.DEFAULT,
            showNotificationBadge: d,
            onClick: h,
            onMouseDown: m,
            disabled: C,
            isInModalOverlay: x,
            className: g,
        } = e,
        [E, b] = (0, a.useState)(!1),
        A = (0, a.useMemo)(() => (u === c.k.SELECTED ? f.wH : E ? f.mr : f.Ay), [u, E]),
        [p, S] = (0, a.useState)(!1),
        [L, R] = (0, a.useState)(!1),
        [_, O] = (0, a.useState)(2700),
        y = null === s;
    (0, a.useEffect)(() => {
        y &&
            !p &&
            (S(!0),
            setTimeout(() => {
                R(!0);
            }, 500));
    }, [y, S, p]),
        (0, a.useEffect)(() => {
            L && !y && S(!1);
        }, [y, L]);
    let T = y || p,
        k = p ? null : s,
        [M, F] = (0, a.useState)(null),
        I = (0, a.useRef)(null),
        w = (0, a.useCallback)(() => {
            (I.current = null), F(null);
        }, []),
        D = (0, a.useCallback)(
            (e) => {
                let t = M === I.current;
                e > 0 && ("earn" !== M || !t) && F("earn");
            },
            [F, M],
        );
    return (0, n.jsx)(i.D, {
        onClick: T ? void 0 : h,
        "aria-label": T ? v.intl.string(v.t.y0WGqP) : v.intl.formatToPlainString(v.t.zPaLL9, { balance: k ?? 0 }),
        "aria-busy": T,
        className: r()(f.vk, { [f.r9]: C }),
        id: l ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: m,
            onMouseEnter: C ? void 0 : () => b(!0),
            onMouseLeave: C ? void 0 : () => b(!1),
            ref: t,
            className: r()(f.kL, A, g, { [f.En]: T, [f.dA]: x, [f.r9]: C }),
            children: [
                (0, n.jsx)("div", {
                    className: r()(f.hr, T ? f.nr : void 0),
                    children: (0, n.jsx)(j, {
                        currentAnimationType: M,
                        animationTypeRef: I,
                        onSetAnimationDurationMS: O,
                    }),
                }),
                (0, n.jsx)(o.A, {
                    value: k,
                    onValueChange: D,
                    onValueReached: w,
                    targetTotalCounterTime: _,
                    className: T ? f.F : void 0,
                }),
                d && (0, n.jsx)(N, {}),
            ],
        }),
    });
});
