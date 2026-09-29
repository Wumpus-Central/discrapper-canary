a.d(t, { Gy: () => E, k7: () => u.k });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    s = a.n(r),
    i = a(939249);
a(14115);
var u = a(305003),
    o = a(626031),
    c = a(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    f = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var m = a(462887),
    x = a(736653),
    h = a(802814);
let v = { width: 60, height: 60 };
function g(e) {
    let { currentAnimationType: t, animationTypeRef: a, onSetAnimationDurationMS: n, play: r, getDuration: s } = e,
        i = s(),
        u = null != i ? 1e3 * i : 3e3;
    ((0, l.useEffect)(() => {
        null !== t && t !== a.current && ((a.current = t), r());
    }, [t, r, a]),
        (0, l.useEffect)(() => {
            n(u);
        }, [n, u]));
}
function p(e) {
    var t;
    let r,
        s,
        i,
        u,
        { currentAnimationType: o, ...d } = e,
        { Component: m, ...x } =
            ((t = o ?? "earn"),
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
                    (0, n.jsx)(c.P, {
                        ...e,
                        src: () => a.e("278611").then(a.t.bind(a, 433886, 19)),
                        ref: r,
                        initialAnimation: s.current,
                        markers: f,
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
        g({ currentAnimationType: o, ...d, ...x }),
        (0, n.jsx)(m, { ...v, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function j(e) {
    var t;
    let r,
        s,
        i,
        u,
        { currentAnimationType: o, ...f } = e,
        { Component: m, ...x } =
            ((t = o ?? "earn"),
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
                    (0, n.jsx)(c.P, {
                        ...e,
                        src: () => a.e("245492").then(a.t.bind(a, 653727, 19)),
                        ref: r,
                        initialAnimation: s.current,
                        markers: d,
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
        g({ currentAnimationType: o, ...f, ...x }),
        (0, n.jsx)(m, { ...v, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let k = function (e) {
    let t = (0, x.Ay)();
    return (0, m.q)(t) ? (0, n.jsx)(j, { ...e }) : (0, n.jsx)(p, { ...e });
};
var A = a(375708);
function C() {
    return (0, n.jsx)("div", { className: h.V8, "aria-hidden": !0 });
}
let E = (0, l.forwardRef)(function (e, t) {
    let {
            id: a,
            balance: r,
            variant: c = "default",
            balanceWidgetMode: d = u.k.DEFAULT,
            showNotificationBadge: f,
            onClick: m,
            onMouseDown: x,
            disabled: v,
            isInModalOverlay: g,
            ariaExpanded: p,
            clickableRef: j,
            className: E,
        } = e,
        [R, b] = (0, l.useState)(!1),
        N = (0, l.useMemo)(() => (d === u.k.SELECTED ? h.wH : R ? h.mr : h.Ay), [d, R]),
        [y, L] = (0, l.useState)(!1),
        [O, S] = (0, l.useState)(!1),
        [_, T] = (0, l.useState)(2700),
        D = null === r;
    ((0, l.useEffect)(() => {
        D &&
            !y &&
            (L(!0),
            setTimeout(() => {
                S(!0);
            }, 500));
    }, [D, L, y]),
        (0, l.useEffect)(() => {
            O && !D && L(!1);
        }, [D, O]));
    let M = D || y,
        w = y ? null : r,
        [P, B] = (0, l.useState)(null),
        F = (0, l.useRef)(null),
        U = (0, l.useCallback)(() => {
            ((F.current = null), B(null));
        }, []),
        I = (0, l.useCallback)(
            (e) => {
                let t = P === F.current;
                e > 0 && ("earn" !== P || !t) && B("earn");
            },
            [B, P],
        );
    return (0, n.jsx)(i.D, {
        innerRef: j,
        onClick: M ? void 0 : m,
        "aria-expanded": p,
        "aria-haspopup": null != p ? "dialog" : void 0,
        "aria-label": (function (e) {
            let { loading: t, balance: a, hasUnread: n } = e;
            return t
                ? A.intl.string(A.t.y0WGqP)
                : n
                  ? A.intl.formatToPlainString(A.t.AgMngw, { balance: a })
                  : A.intl.formatToPlainString(A.t.zPaLL9, { balance: a });
        })({ loading: M, balance: w ?? 0, hasUnread: !0 === f }),
        "aria-busy": M,
        className: s()(h.vk, { [h.r9]: v }),
        id: a ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: x,
            onMouseEnter: v ? void 0 : () => b(!0),
            onMouseLeave: v ? void 0 : () => b(!1),
            ref: t,
            className: s()(h.kL, N, E, { [h.D0]: "overlay-secondary" === c, [h.En]: M, [h.dA]: g, [h.r9]: v }),
            children: [
                (0, n.jsx)("div", {
                    className: s()(h.hr, M ? h.nr : void 0),
                    children: (0, n.jsx)(k, {
                        currentAnimationType: P,
                        animationTypeRef: F,
                        onSetAnimationDurationMS: T,
                    }),
                }),
                (0, n.jsx)(o.A, {
                    value: w,
                    onValueChange: I,
                    onValueReached: U,
                    targetTotalCounterTime: _,
                    className: M ? h.F : void 0,
                    textColor: "overlay-secondary" === c ? "text-overlay-light" : void 0,
                }),
                f && (0, n.jsx)(C, {}),
            ],
        }),
    });
});
