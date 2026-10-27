t.d(n, { Ay: () => D, Gy: () => y, k7: () => i.k });
var a = t(477900),
    r = t(582128),
    l = t(503698),
    u = t.n(l),
    s = t(939249);
t(14115);
var i = t(305003),
    o = t(626031),
    c = t(744682);
let d = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    m = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } };
var f = t(462887),
    v = t(736653),
    C = t(802814);
let h = { width: 60, height: 60 };
function g(e) {
    let { currentAnimationType: n, animationTypeRef: t, onSetAnimationDurationMS: a, play: l, getDuration: u } = e,
        s = u(),
        i = null != s ? 1e3 * s : 3e3;
    ((0, r.useEffect)(() => {
        null !== n && n !== t.current && ((t.current = n), l());
    }, [n, l, t]),
        (0, r.useEffect)(() => {
            a(i);
        }, [a, i]));
}
function k(e) {
    var n;
    let l,
        u,
        s,
        i,
        { currentAnimationType: o, ...d } = e,
        { Component: f, ...v } =
            ((n = o ?? "earn"),
            (l = r.useRef(null)),
            ((u = r.useRef(n)).current = n),
            (s = r.useMemo(
                () => () => {
                    null != l.current && l.current.play(n);
                },
                [n],
            )),
            (i = r.useCallback(
                (e) =>
                    (0, a.jsx)(c.P, {
                        ...e,
                        src: () => t.e("278611").then(t.t.bind(t, 433886, 19)),
                        ref: l,
                        initialAnimation: u.current,
                        markers: m,
                    }),
                [],
            )),
            {
                events: {},
                play: s,
                getDuration: r.useCallback(() => l.current?.getDuration(), []),
                getCurrentFrame: r.useCallback(() => l.current?.getCurrentFrame() ?? null, []),
                Component: i,
            });
    return (
        g({ currentAnimationType: o, ...d, ...v }),
        (0, a.jsx)(f, { ...h, size: "custom", className: C.E$, useLottieDefaultColors: !0 })
    );
}
function p(e) {
    var n;
    let l,
        u,
        s,
        i,
        { currentAnimationType: o, ...m } = e,
        { Component: f, ...v } =
            ((n = o ?? "earn"),
            (l = r.useRef(null)),
            ((u = r.useRef(n)).current = n),
            (s = r.useMemo(
                () => () => {
                    null != l.current && l.current.play(n);
                },
                [n],
            )),
            (i = r.useCallback(
                (e) =>
                    (0, a.jsx)(c.P, {
                        ...e,
                        src: () => t.e("245492").then(t.t.bind(t, 653727, 19)),
                        ref: l,
                        initialAnimation: u.current,
                        markers: d,
                    }),
                [],
            )),
            {
                events: {},
                play: s,
                getDuration: r.useCallback(() => l.current?.getDuration(), []),
                getCurrentFrame: r.useCallback(() => l.current?.getCurrentFrame() ?? null, []),
                Component: i,
            });
    return (
        g({ currentAnimationType: o, ...m, ...v }),
        (0, a.jsx)(f, { ...h, size: "custom", className: C.E$, useLottieDefaultColors: !0 })
    );
}
let b = function (e) {
    let { themeOverride: n, ...t } = e,
        r = (0, v.Ay)();
    return (0, f.q)(n ?? r) ? (0, a.jsx)(p, { ...t }) : (0, a.jsx)(k, { ...t });
};
var x = t(105292);
function j() {
    return (0, a.jsx)("div", { className: C.V8, "aria-hidden": !0 });
}
function y(e) {
    let {
            id: n,
            balance: t,
            variant: l = "default",
            themeOverride: c,
            balanceWidgetMode: d = i.k.DEFAULT,
            showNotificationBadge: m,
            onClick: f,
            onMouseDown: v,
            disabled: h,
            isInModalOverlay: g,
            ariaExpanded: k,
            clickableRef: p,
            className: y,
            ref: D,
        } = e,
        [E, A] = (0, r.useState)(!1),
        S = (0, r.useMemo)(() => (d === i.k.SELECTED ? C.wH : E ? C.mr : C.Ay), [d, E]),
        [L, M] = (0, r.useState)(!1),
        [N, w] = (0, r.useState)(!1),
        [R, T] = (0, r.useState)(2700),
        F = null === t;
    ((0, r.useEffect)(() => {
        F &&
            !L &&
            (M(!0),
            setTimeout(() => {
                w(!0);
            }, 500));
    }, [F, M, L]),
        (0, r.useEffect)(() => {
            N && !F && M(!1);
        }, [F, N]));
    let P = F || L,
        z = L ? null : t,
        [V, q] = (0, r.useState)(null),
        G = (0, r.useRef)(null),
        U = (0, r.useCallback)(() => {
            ((G.current = null), q(null));
        }, []),
        $ = (0, r.useCallback)(
            (e) => {
                let n = V === G.current;
                e > 0 && ("earn" !== V || !n) && q("earn");
            },
            [q, V],
        ),
        _ = null != f,
        H = _ && !0 !== h,
        K = (function (e) {
            let { loading: n, balance: t, hasUnread: a } = e;
            return n
                ? x.intl.string(x.t.y0WGqP)
                : a
                  ? x.intl.formatToPlainString(x.t.AgMngw, { balance: t })
                  : x.intl.formatToPlainString(x.t.zPaLL9, { balance: t });
        })({ loading: P, balance: z ?? 0, hasUnread: !0 === m }),
        O = (0, a.jsxs)("span", {
            onMouseDown: v,
            onMouseEnter: H ? () => A(!0) : void 0,
            onMouseLeave: H ? () => A(!1) : void 0,
            ref: D,
            className: u()(C.kL, S, y, { [C.D0]: "overlay-secondary" === l, [C.En]: P, [C.dA]: g, [C.r9]: h }),
            children: [
                (0, a.jsx)("div", {
                    className: u()(C.hr, P ? C.nr : void 0),
                    children: (0, a.jsx)(b, {
                        currentAnimationType: V,
                        animationTypeRef: G,
                        onSetAnimationDurationMS: T,
                        themeOverride: c,
                    }),
                }),
                (0, a.jsx)(o.A, {
                    value: z,
                    onValueChange: $,
                    onValueReached: U,
                    targetTotalCounterTime: R,
                    className: P ? C.F : void 0,
                    textColor: "overlay-secondary" === l ? "text-overlay-light" : void 0,
                }),
                m && (0, a.jsx)(j, {}),
            ],
        });
    return _
        ? (0, a.jsx)(s.D, {
              innerRef: p,
              onClick: P ? void 0 : f,
              "aria-expanded": k,
              "aria-haspopup": null != k ? "dialog" : void 0,
              "aria-label": K,
              "aria-busy": P,
              className: u()(C.vk, { [C.r9]: h }),
              id: n ?? "balance-widget-pill",
              children: O,
          })
        : (0, a.jsx)("div", { role: "img", "aria-label": K, "aria-busy": P, className: C.Kc, id: n, children: O });
}
let D = y;
