n.d(t, { Gy: () => N, k7: () => u.k });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(939249);
n(14115);
var u = n(305003),
    c = n(626031),
    o = n(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    m = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var f = n(462887),
    x = n(736653),
    h = n(802814);
let j = { width: 60, height: 60 };
function k(e) {
    let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: a, play: s, getDuration: r } = e,
        i = r(),
        u = null != i ? 1e3 * i : 3e3;
    (0, l.useEffect)(() => {
        null !== t && t !== n.current && ((n.current = t), s());
    }, [t, s, n]),
        (0, l.useEffect)(() => {
            a(u);
        }, [a, u]);
}
function v(e) {
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
                    (0, a.jsx)(o.P, {
                        ...e,
                        src: () => n.e("278611").then(n.t.bind(n, 433886, 19)),
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
        k({ currentAnimationType: c, ...d, ...x }),
        (0, a.jsx)(f, { ...j, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function g(e) {
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
                    (0, a.jsx)(o.P, {
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
                Component: u,
            });
    return (
        k({ currentAnimationType: c, ...m, ...x }),
        (0, a.jsx)(f, { ...j, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let A = function (e) {
    let t = (0, x.Ay)();
    return (0, f.q)(t) ? (0, a.jsx)(g, { ...e }) : (0, a.jsx)(v, { ...e });
};
var C = n(375708);
function R() {
    return (0, a.jsx)("div", { className: h.V8 });
}
let N = (0, l.forwardRef)(function (e, t) {
    let {
            id: n,
            balance: s,
            balanceWidgetMode: o = u.k.DEFAULT,
            showNotificationBadge: d,
            onClick: m,
            onMouseDown: f,
            disabled: x,
            isInModalOverlay: j,
            className: k,
        } = e,
        [v, g] = (0, l.useState)(!1),
        N = (0, l.useMemo)(() => (o === u.k.SELECTED ? h.wH : v ? h.mr : h.Ay), [o, v]),
        [E, b] = (0, l.useState)(!1),
        [p, y] = (0, l.useState)(!1),
        [O, S] = (0, l.useState)(2700),
        T = null === s;
    (0, l.useEffect)(() => {
        T &&
            !E &&
            (b(!0),
            setTimeout(() => {
                y(!0);
            }, 500));
    }, [T, b, E]),
        (0, l.useEffect)(() => {
            p && !T && b(!1);
        }, [T, p]);
    let _ = T || E,
        L = E ? null : s,
        [M, D] = (0, l.useState)(null),
        w = (0, l.useRef)(null),
        B = (0, l.useCallback)(() => {
            (w.current = null), D(null);
        }, []),
        P = (0, l.useCallback)(
            (e) => {
                let t = M === w.current;
                e > 0 && ("earn" !== M || !t) && D("earn");
            },
            [D, M],
        );
    return (0, a.jsx)(i.D, {
        onClick: _ ? void 0 : m,
        "aria-label": _ ? C.intl.string(C.t.y0WGqP) : C.intl.formatToPlainString(C.t.zPaLL9, { balance: L ?? 0 }),
        "aria-busy": _,
        className: r()(h.vk, { [h.r9]: x }),
        id: n ?? "balance-widget-pill",
        children: (0, a.jsxs)("span", {
            onMouseDown: f,
            onMouseEnter: x ? void 0 : () => g(!0),
            onMouseLeave: x ? void 0 : () => g(!1),
            ref: t,
            className: r()(h.kL, N, k, { [h.En]: _, [h.dA]: j, [h.r9]: x }),
            children: [
                (0, a.jsx)("div", {
                    className: r()(h.hr, _ ? h.nr : void 0),
                    children: (0, a.jsx)(A, {
                        currentAnimationType: M,
                        animationTypeRef: w,
                        onSetAnimationDurationMS: S,
                    }),
                }),
                (0, a.jsx)(c.A, {
                    value: L,
                    onValueChange: P,
                    onValueReached: B,
                    targetTotalCounterTime: O,
                    className: _ ? h.F : void 0,
                }),
                d && (0, a.jsx)(R, {}),
            ],
        }),
    });
});
