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
function k(e) {
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
function C(e) {
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
let j = function (e) {
    let { themeOverride: t, ...a } = e,
        l = (0, x.Ay)();
    return (0, m.q)(t ?? l) ? (0, n.jsx)(C, { ...a }) : (0, n.jsx)(k, { ...a });
};
var p = a(375708);
function A() {
    return (0, n.jsx)("div", { className: h.V8, "aria-hidden": !0 });
}
let E = (0, l.forwardRef)(function (e, t) {
    let {
            id: a,
            balance: r,
            variant: c = "default",
            themeOverride: d,
            balanceWidgetMode: f = u.k.DEFAULT,
            showNotificationBadge: m,
            onClick: x,
            onMouseDown: v,
            disabled: g,
            isInModalOverlay: k,
            ariaExpanded: C,
            clickableRef: E,
            className: R,
        } = e,
        [b, N] = (0, l.useState)(!1),
        y = (0, l.useMemo)(() => (f === u.k.SELECTED ? h.wH : b ? h.mr : h.Ay), [f, b]),
        [L, O] = (0, l.useState)(!1),
        [S, _] = (0, l.useState)(!1),
        [T, D] = (0, l.useState)(2700),
        M = null === r;
    ((0, l.useEffect)(() => {
        M &&
            !L &&
            (O(!0),
            setTimeout(() => {
                _(!0);
            }, 500));
    }, [M, O, L]),
        (0, l.useEffect)(() => {
            S && !M && O(!1);
        }, [M, S]));
    let w = M || L,
        P = L ? null : r,
        [B, F] = (0, l.useState)(null),
        U = (0, l.useRef)(null),
        I = (0, l.useCallback)(() => {
            ((U.current = null), F(null));
        }, []),
        W = (0, l.useCallback)(
            (e) => {
                let t = B === U.current;
                e > 0 && ("earn" !== B || !t) && F("earn");
            },
            [F, B],
        );
    return (0, n.jsx)(i.D, {
        innerRef: E,
        onClick: w ? void 0 : x,
        "aria-expanded": C,
        "aria-haspopup": null != C ? "dialog" : void 0,
        "aria-label": (function (e) {
            let { loading: t, balance: a, hasUnread: n } = e;
            return t
                ? p.intl.string(p.t.y0WGqP)
                : n
                  ? p.intl.formatToPlainString(p.t.AgMngw, { balance: a })
                  : p.intl.formatToPlainString(p.t.zPaLL9, { balance: a });
        })({ loading: w, balance: P ?? 0, hasUnread: !0 === m }),
        "aria-busy": w,
        className: s()(h.vk, { [h.r9]: g }),
        id: a ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: v,
            onMouseEnter: g ? void 0 : () => N(!0),
            onMouseLeave: g ? void 0 : () => N(!1),
            ref: t,
            className: s()(h.kL, y, R, { [h.D0]: "overlay-secondary" === c, [h.En]: w, [h.dA]: k, [h.r9]: g }),
            children: [
                (0, n.jsx)("div", {
                    className: s()(h.hr, w ? h.nr : void 0),
                    children: (0, n.jsx)(j, {
                        currentAnimationType: B,
                        animationTypeRef: U,
                        onSetAnimationDurationMS: D,
                        themeOverride: d,
                    }),
                }),
                (0, n.jsx)(o.A, {
                    value: P,
                    onValueChange: W,
                    onValueReached: I,
                    targetTotalCounterTime: T,
                    className: w ? h.F : void 0,
                    textColor: "overlay-secondary" === c ? "text-overlay-light" : void 0,
                }),
                m && (0, n.jsx)(A, {}),
            ],
        }),
    });
});
