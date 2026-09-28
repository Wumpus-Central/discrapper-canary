n.d(t, { Gy: () => C, k7: () => u.k });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(939249);
n(14115);
var u = n(305003),
    o = n(626031),
    c = n(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    f = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var m = n(462887),
    x = n(736653),
    h = n(802814);
let g = { width: 60, height: 60 };
function p(e) {
    let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: a, play: r, getDuration: s } = e,
        i = s(),
        u = null != i ? 1e3 * i : 3e3;
    ((0, l.useEffect)(() => {
        null !== t && t !== n.current && ((n.current = t), r());
    }, [t, r, n]),
        (0, l.useEffect)(() => {
            a(u);
        }, [a, u]));
}
function j(e) {
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
                    (0, a.jsx)(c.P, {
                        ...e,
                        src: () => n.e("278611").then(n.t.bind(n, 433886, 19)),
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
        p({ currentAnimationType: o, ...d, ...x }),
        (0, a.jsx)(m, { ...g, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function k(e) {
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
                    (0, a.jsx)(c.P, {
                        ...e,
                        src: () => n.e("245492").then(n.t.bind(n, 653727, 19)),
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
        p({ currentAnimationType: o, ...f, ...x }),
        (0, a.jsx)(m, { ...g, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let A = function (e) {
    let t = (0, x.Ay)();
    return (0, m.q)(t) ? (0, a.jsx)(k, { ...e }) : (0, a.jsx)(j, { ...e });
};
var E = n(375708);
function v() {
    return (0, a.jsx)("div", { className: h.V8, "aria-hidden": !0 });
}
let C = (0, l.forwardRef)(function (e, t) {
    let {
            id: n,
            balance: r,
            balanceWidgetMode: c = u.k.DEFAULT,
            showNotificationBadge: d,
            onClick: f,
            onMouseDown: m,
            disabled: x,
            isInModalOverlay: g,
            ariaExpanded: p,
            clickableRef: j,
            className: k,
        } = e,
        [C, R] = (0, l.useState)(!1),
        b = (0, l.useMemo)(() => (c === u.k.SELECTED ? h.wH : C ? h.mr : h.Ay), [c, C]),
        [N, L] = (0, l.useState)(!1),
        [O, S] = (0, l.useState)(!1),
        [_, y] = (0, l.useState)(2700),
        T = null === r;
    ((0, l.useEffect)(() => {
        T &&
            !N &&
            (L(!0),
            setTimeout(() => {
                S(!0);
            }, 500));
    }, [T, L, N]),
        (0, l.useEffect)(() => {
            O && !T && L(!1);
        }, [T, O]));
    let D = T || N,
        M = N ? null : r,
        [w, P] = (0, l.useState)(null),
        B = (0, l.useRef)(null),
        F = (0, l.useCallback)(() => {
            ((B.current = null), P(null));
        }, []),
        U = (0, l.useCallback)(
            (e) => {
                let t = w === B.current;
                e > 0 && ("earn" !== w || !t) && P("earn");
            },
            [P, w],
        );
    return (0, a.jsx)(i.D, {
        innerRef: j,
        onClick: D ? void 0 : f,
        "aria-expanded": p,
        "aria-haspopup": null != p ? "dialog" : void 0,
        "aria-label": (function (e) {
            let { loading: t, balance: n, hasUnread: a } = e;
            return t
                ? E.intl.string(E.t.y0WGqP)
                : a
                  ? E.intl.formatToPlainString(E.t.AgMngw, { balance: n })
                  : E.intl.formatToPlainString(E.t.zPaLL9, { balance: n });
        })({ loading: D, balance: M ?? 0, hasUnread: !0 === d }),
        "aria-busy": D,
        className: s()(h.vk, { [h.r9]: x }),
        id: n ?? "balance-widget-pill",
        children: (0, a.jsxs)("span", {
            onMouseDown: m,
            onMouseEnter: x ? void 0 : () => R(!0),
            onMouseLeave: x ? void 0 : () => R(!1),
            ref: t,
            className: s()(h.kL, b, k, { [h.En]: D, [h.dA]: g, [h.r9]: x }),
            children: [
                (0, a.jsx)("div", {
                    className: s()(h.hr, D ? h.nr : void 0),
                    children: (0, a.jsx)(A, {
                        currentAnimationType: w,
                        animationTypeRef: B,
                        onSetAnimationDurationMS: y,
                    }),
                }),
                (0, a.jsx)(o.A, {
                    value: M,
                    onValueChange: U,
                    onValueReached: F,
                    targetTotalCounterTime: _,
                    className: D ? h.F : void 0,
                }),
                d && (0, a.jsx)(v, {}),
            ],
        }),
    });
});
