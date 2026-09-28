a.d(t, { Gy: () => E, k7: () => u.k });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    s = a.n(r),
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
function R(e) {
    var t;
    let r,
        s,
        i,
        u,
        { currentAnimationType: c, ...d } = e,
        { Component: f, ...x } =
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
                    (0, n.jsx)(o.P, {
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
        A({ currentAnimationType: c, ...d, ...x }),
        (0, n.jsx)(f, { ...j, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function g(e) {
    var t;
    let r,
        s,
        i,
        u,
        { currentAnimationType: c, ...m } = e,
        { Component: f, ...x } =
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
                    (0, n.jsx)(o.P, {
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
        A({ currentAnimationType: c, ...m, ...x }),
        (0, n.jsx)(f, { ...j, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let k = function (e) {
    let t = (0, x.Ay)();
    return (0, f.q)(t) ? (0, n.jsx)(g, { ...e }) : (0, n.jsx)(R, { ...e });
};
var v = a(375708);
function C() {
    return (0, n.jsx)("div", { className: h.V8, "aria-hidden": !0 });
}
let E = (0, l.forwardRef)(function (e, t) {
    let {
            id: a,
            balance: r,
            balanceWidgetMode: o = u.k.DEFAULT,
            showNotificationBadge: d,
            onClick: m,
            onMouseDown: f,
            disabled: x,
            isInModalOverlay: j,
            ariaExpanded: A,
            clickableRef: R,
            className: g,
        } = e,
        [E, p] = (0, l.useState)(!1),
        N = (0, l.useMemo)(() => (o === u.k.SELECTED ? h.wH : E ? h.mr : h.Ay), [o, E]),
        [b, O] = (0, l.useState)(!1),
        [L, _] = (0, l.useState)(!1),
        [y, T] = (0, l.useState)(2700),
        S = null === r;
    ((0, l.useEffect)(() => {
        S &&
            !b &&
            (O(!0),
            setTimeout(() => {
                _(!0);
            }, 500));
    }, [S, O, b]),
        (0, l.useEffect)(() => {
            L && !S && O(!1);
        }, [S, L]));
    let M = S || b,
        D = b ? null : r,
        [w, P] = (0, l.useState)(null),
        B = (0, l.useRef)(null),
        U = (0, l.useCallback)(() => {
            ((B.current = null), P(null));
        }, []),
        F = (0, l.useCallback)(
            (e) => {
                let t = w === B.current;
                e > 0 && ("earn" !== w || !t) && P("earn");
            },
            [P, w],
        );
    return (0, n.jsx)(i.D, {
        innerRef: R,
        onClick: M ? void 0 : m,
        "aria-expanded": A,
        "aria-haspopup": null != A ? "dialog" : void 0,
        "aria-label": (function (e) {
            let { loading: t, balance: a, hasUnread: n } = e;
            return t
                ? v.intl.string(v.t.y0WGqP)
                : n
                  ? v.intl.formatToPlainString(v.t.AgMngw, { balance: a })
                  : v.intl.formatToPlainString(v.t.zPaLL9, { balance: a });
        })({ loading: M, balance: D ?? 0, hasUnread: !0 === d }),
        "aria-busy": M,
        className: s()(h.vk, { [h.r9]: x }),
        id: a ?? "balance-widget-pill",
        children: (0, n.jsxs)("span", {
            onMouseDown: f,
            onMouseEnter: x ? void 0 : () => p(!0),
            onMouseLeave: x ? void 0 : () => p(!1),
            ref: t,
            className: s()(h.kL, N, g, { [h.En]: M, [h.dA]: j, [h.r9]: x }),
            children: [
                (0, n.jsx)("div", {
                    className: s()(h.hr, M ? h.nr : void 0),
                    children: (0, n.jsx)(k, {
                        currentAnimationType: w,
                        animationTypeRef: B,
                        onSetAnimationDurationMS: T,
                    }),
                }),
                (0, n.jsx)(c.A, {
                    value: D,
                    onValueChange: F,
                    onValueReached: U,
                    targetTotalCounterTime: y,
                    className: M ? h.F : void 0,
                }),
                d && (0, n.jsx)(C, {}),
            ],
        }),
    });
});
