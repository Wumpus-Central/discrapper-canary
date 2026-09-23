a.d(t, { Gy: () => E, k7: () => u.k });
var n = a(477900),
    l = a(582128),
    s = a(503698),
    r = a.n(s),
    i = a(939249);
a(14115);
var u = a(305003),
    c = a(626031),
    o = a(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    m = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var f = a(462887),
    x = a(736653),
    h = a(802814);
let j = { width: 60, height: 60 };
function A(e) {
    let { currentAnimationType: t, animationTypeRef: a, onSetAnimationDurationMS: n, play: s, getDuration: r } = e,
        i = r(),
        u = null != i ? 1e3 * i : 3e3;
    ((0, l.useEffect)(() => {
        null !== t && t !== a.current && ((a.current = t), s());
    }, [t, s, a]),
        (0, l.useEffect)(() => {
            n(u);
        }, [n, u]));
}
function k(e) {
    var t;
    let s,
        r,
        i,
        u,
        { currentAnimationType: c, ...d } = e,
        { Component: f, ...x } =
            ((t = c ?? "earn"),
            (s = l.useRef(null)),
            ((r = l.useRef(t)).current = t),
            (i = l.useMemo(
                () => () => {
                    null != s.current && s.current.play(t);
                },
                [t],
            )),
            (u = l.useCallback(
                (e) =>
                    (0, n.jsx)(o.P, {
                        ...e,
                        src: () => a.e("278611").then(a.t.bind(a, 433886, 19)),
                        ref: s,
                        initialAnimation: r.current,
                        markers: m,
                    }),
                [],
            )),
            {
                events: {},
                play: i,
                getDuration: l.useCallback(() => s.current?.getDuration(), []),
                getCurrentFrame: l.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                Component: u,
            });
    return (
        A({ currentAnimationType: c, ...d, ...x }),
        (0, n.jsx)(f, { ...j, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function v(e) {
    var t;
    let s,
        r,
        i,
        u,
        { currentAnimationType: c, ...m } = e,
        { Component: f, ...x } =
            ((t = c ?? "earn"),
            (s = l.useRef(null)),
            ((r = l.useRef(t)).current = t),
            (i = l.useMemo(
                () => () => {
                    null != s.current && s.current.play(t);
                },
                [t],
            )),
            (u = l.useCallback(
                (e) =>
                    (0, n.jsx)(o.P, {
                        ...e,
                        src: () => a.e("245492").then(a.t.bind(a, 653727, 19)),
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
                Component: u,
            });
    return (
        A({ currentAnimationType: c, ...m, ...x }),
        (0, n.jsx)(f, { ...j, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let C = function (e) {
    let t = (0, x.Ay)();
    return (0, f.q)(t) ? (0, n.jsx)(v, { ...e }) : (0, n.jsx)(k, { ...e });
};
var R = a(375708);
function g() {
    return (0, n.jsx)("div", { className: h.V8 });
}
let E = (0, l.forwardRef)(function (e, t) {
    let {
            id: a,
            balance: s,
            balanceWidgetMode: o = u.k.DEFAULT,
            showNotificationBadge: d,
            onClick: m,
            onMouseDown: f,
            disabled: x,
            isInModalOverlay: j,
            className: A,
        } = e,
        [k, v] = (0, l.useState)(!1),
        E = (0, l.useMemo)(() => (o === u.k.SELECTED ? h.wH : k ? h.mr : h.Ay), [o, k]),
        [N, b] = (0, l.useState)(!1),
        [p, O] = (0, l.useState)(!1),
        [L, _] = (0, l.useState)(2700),
        y = null === s;
    ((0, l.useEffect)(() => {
        y &&
            !N &&
            (b(!0),
            setTimeout(() => {
                O(!0);
            }, 500));
    }, [y, b, N]),
        (0, l.useEffect)(() => {
            p && !y && b(!1);
        }, [y, p]));
    let T = y || N,
        S = N ? null : s,
        [M, D] = (0, l.useState)(null),
        w = (0, l.useRef)(null),
        B = (0, l.useCallback)(() => {
            ((w.current = null), D(null));
        }, []),
        P = (0, l.useCallback)(
            (e) => {
                let t = M === w.current;
                e > 0 && ("earn" !== M || !t) && D("earn");
            },
            [D, M],
        );
    return (0, n.jsx)(i.D, {
        onClick: T ? void 0 : m,
        "aria-label": T ? R.intl.string(R.t.y0WGqP) : R.intl.formatToPlainString(R.t.zPaLL9, { balance: S ?? 0 }),
        "aria-busy": T,
        className: r()(h.vk, { [h.r9]: x }),
        id: a ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: f,
            onMouseEnter: x ? void 0 : () => v(!0),
            onMouseLeave: x ? void 0 : () => v(!1),
            ref: t,
            className: r()(h.kL, E, A, { [h.En]: T, [h.dA]: j, [h.r9]: x }),
            children: [
                (0, n.jsx)("div", {
                    className: r()(h.hr, T ? h.nr : void 0),
                    children: (0, n.jsx)(C, {
                        currentAnimationType: M,
                        animationTypeRef: w,
                        onSetAnimationDurationMS: _,
                    }),
                }),
                (0, n.jsx)(c.A, {
                    value: S,
                    onValueChange: P,
                    onValueReached: B,
                    targetTotalCounterTime: L,
                    className: T ? h.F : void 0,
                }),
                d && (0, n.jsx)(g, {}),
            ],
        }),
    });
});
