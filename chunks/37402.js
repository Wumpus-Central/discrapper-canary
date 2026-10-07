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
    m = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var f = a(462887),
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
        { Component: f, ...x } =
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
                        markers: m,
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
        (0, n.jsx)(f, { ...v, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function C(e) {
    var t;
    let r,
        s,
        i,
        u,
        { currentAnimationType: o, ...m } = e,
        { Component: f, ...x } =
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
        g({ currentAnimationType: o, ...m, ...x }),
        (0, n.jsx)(f, { ...v, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let j = function (e) {
    let { themeOverride: t, ...a } = e,
        l = (0, x.Ay)();
    return (0, f.q)(t ?? l) ? (0, n.jsx)(C, { ...a }) : (0, n.jsx)(k, { ...a });
};
var p = a(375708);
function A() {
    return (0, n.jsx)("div", { className: h.V8, "aria-hidden": !0 });
}
function E(e) {
    let {
            id: t,
            balance: a,
            variant: r = "default",
            themeOverride: c,
            balanceWidgetMode: d = u.k.DEFAULT,
            showNotificationBadge: m,
            onClick: f,
            onMouseDown: x,
            disabled: v,
            isInModalOverlay: g,
            ariaExpanded: k,
            clickableRef: C,
            className: E,
            ref: b,
        } = e,
        [R, N] = (0, l.useState)(!1),
        y = (0, l.useMemo)(() => (d === u.k.SELECTED ? h.wH : R ? h.mr : h.Ay), [d, R]),
        [L, O] = (0, l.useState)(!1),
        [S, _] = (0, l.useState)(!1),
        [T, D] = (0, l.useState)(2700),
        M = null === a;
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
        P = L ? null : a,
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
        innerRef: C,
        onClick: w ? void 0 : f,
        "aria-expanded": k,
        "aria-haspopup": null != k ? "dialog" : void 0,
        "aria-label": (function (e) {
            let { loading: t, balance: a, hasUnread: n } = e;
            return t
                ? p.intl.string(p.t.y0WGqP)
                : n
                  ? p.intl.formatToPlainString(p.t.AgMngw, { balance: a })
                  : p.intl.formatToPlainString(p.t.zPaLL9, { balance: a });
        })({ loading: w, balance: P ?? 0, hasUnread: !0 === m }),
        "aria-busy": w,
        className: s()(h.vk, { [h.r9]: v }),
        id: t ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: x,
            onMouseEnter: v ? void 0 : () => N(!0),
            onMouseLeave: v ? void 0 : () => N(!1),
            ref: b,
            className: s()(h.kL, y, E, { [h.D0]: "overlay-secondary" === r, [h.En]: w, [h.dA]: g, [h.r9]: v }),
            children: [
                (0, n.jsx)("div", {
                    className: s()(h.hr, w ? h.nr : void 0),
                    children: (0, n.jsx)(j, {
                        currentAnimationType: B,
                        animationTypeRef: U,
                        onSetAnimationDurationMS: D,
                        themeOverride: c,
                    }),
                }),
                (0, n.jsx)(o.A, {
                    value: P,
                    onValueChange: W,
                    onValueReached: I,
                    targetTotalCounterTime: T,
                    className: w ? h.F : void 0,
                    textColor: "overlay-secondary" === r ? "text-overlay-light" : void 0,
                }),
                m && (0, n.jsx)(A, {}),
            ],
        }),
    });
}
