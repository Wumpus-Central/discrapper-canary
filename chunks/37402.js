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
    x = l(802814);
let g = { width: 60, height: 60 };
function f(e) {
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
        f({ currentAnimationType: o, ...d, ...C }),
        (0, n.jsx)(m, { ...g, size: "custom", className: x.E$, useLottieDefaultColors: !0 })
    );
}
function j(e) {
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
        f({ currentAnimationType: o, ...h, ...C }),
        (0, n.jsx)(m, { ...g, size: "custom", className: x.E$, useLottieDefaultColors: !0 })
    );
}
let b = function (e) {
    let t = (0, C.Ay)();
    return (0, m.q)(t) ? (0, n.jsx)(j, { ...e }) : (0, n.jsx)(E, { ...e });
};
var N = l(375708);
function v() {
    return (0, n.jsx)("img", { className: x.V8, src: l(324292), alt: "" });
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
            isInModalOverlay: g,
            className: f,
        } = e,
        [E, j] = (0, a.useState)(!1),
        A = (0, a.useMemo)(() => (u === c.k.SELECTED ? x.wH : E ? x.mr : x.Ay), [u, E]),
        [p, S] = (0, a.useState)(!1),
        [R, L] = (0, a.useState)(!1),
        [_, O] = (0, a.useState)(2700),
        y = null === s;
    (0, a.useEffect)(() => {
        y &&
            !p &&
            (S(!0),
            setTimeout(() => {
                L(!0);
            }, 500));
    }, [y, S, p]),
        (0, a.useEffect)(() => {
            R && !y && S(!1);
        }, [y, R]);
    let T = y || p,
        k = p ? null : s,
        [M, F] = (0, a.useState)(null),
        I = (0, a.useRef)(null),
        D = (0, a.useCallback)(() => {
            (I.current = null), F(null);
        }, []),
        w = (0, a.useCallback)(
            (e) => {
                let t = M === I.current;
                e > 0 && ("earn" !== M || !t) && F("earn");
            },
            [F, M],
        );
    return (0, n.jsx)(i.D, {
        onClick: T ? void 0 : h,
        "aria-label": T ? N.intl.string(N.t.y0WGqP) : N.intl.formatToPlainString(N.t.zPaLL9, { balance: k ?? 0 }),
        "aria-busy": T,
        className: r()(x.vk, { [x.r9]: C }),
        id: l ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: m,
            onMouseEnter: C ? void 0 : () => j(!0),
            onMouseLeave: C ? void 0 : () => j(!1),
            ref: t,
            className: r()(x.kL, A, f, { [x.En]: T, [x.dA]: g, [x.r9]: C }),
            children: [
                (0, n.jsx)("div", {
                    className: r()(x.hr, T ? x.nr : void 0),
                    children: (0, n.jsx)(b, {
                        currentAnimationType: M,
                        animationTypeRef: I,
                        onSetAnimationDurationMS: O,
                    }),
                }),
                (0, n.jsx)(o.A, {
                    value: k,
                    onValueChange: w,
                    onValueReached: D,
                    targetTotalCounterTime: _,
                    className: T ? x.F : void 0,
                }),
                d && (0, n.jsx)(v, {}),
            ],
        }),
    });
});
