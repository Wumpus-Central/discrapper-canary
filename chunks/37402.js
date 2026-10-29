t.d(n, { Ay: () => E, Gy: () => D, k7: () => i.k });
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
    p = t(802814);
let C = { width: 60, height: 60 };
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
function h(e) {
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
        (0, a.jsx)(f, { ...C, size: "custom", className: p.E$, useLottieDefaultColors: !0 })
    );
}
function k(e) {
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
        (0, a.jsx)(f, { ...C, size: "custom", className: p.E$, useLottieDefaultColors: !0 })
    );
}
let b = function (e) {
    let { themeOverride: n, ...t } = e,
        r = (0, v.Ay)();
    return (0, f.q)(n ?? r) ? (0, a.jsx)(k, { ...t }) : (0, a.jsx)(h, { ...t });
};
var x = t(105292);
function j() {
    return (0, a.jsx)("div", { className: p.V8, "aria-hidden": !0 });
}
function y(e) {
    let {
            balance: n,
            variant: t = "default",
            themeOverride: l,
            balanceWidgetMode: s = i.k.DEFAULT,
            showNotificationBadge: c,
            onMouseDown: d,
            disabled: m,
            isInModalOverlay: f,
            className: v,
            ref: C,
            loading: g,
            isInteractive: h,
        } = e,
        [k, x] = (0, r.useState)(!1),
        y = (0, r.useMemo)(() => (s === i.k.SELECTED ? p.wH : k ? p.mr : p.Ay), [s, k]),
        D = h && !0 !== m,
        [E, A] = (0, r.useState)(2700),
        [S, T] = (0, r.useState)(null),
        L = (0, r.useRef)(null),
        M = (0, r.useCallback)(() => {
            ((L.current = null), T(null));
        }, []),
        N = (0, r.useCallback)(
            (e) => {
                let n = S === L.current;
                e > 0 && ("earn" !== S || !n) && T("earn");
            },
            [T, S],
        );
    return (0, a.jsxs)("span", {
        onMouseDown: d,
        onMouseEnter: D ? () => x(!0) : void 0,
        onMouseLeave: D ? () => x(!1) : void 0,
        ref: C,
        className: u()(p.kL, y, v, { [p.D0]: "overlay-secondary" === t, [p.En]: g, [p.dA]: f, [p.r9]: m }),
        children: [
            (0, a.jsx)("div", {
                className: u()(p.hr, g ? p.nr : void 0),
                children: (0, a.jsx)(b, {
                    currentAnimationType: S,
                    animationTypeRef: L,
                    onSetAnimationDurationMS: A,
                    themeOverride: l,
                }),
            }),
            (0, a.jsx)(o.A, {
                value: n,
                onValueChange: N,
                onValueReached: M,
                targetTotalCounterTime: E,
                className: g ? p.F : void 0,
                textColor: "overlay-secondary" === t ? "text-overlay-light" : void 0,
            }),
            c && (0, a.jsx)(j, {}),
        ],
    });
}
function D(e) {
    let {
            id: n,
            balance: t,
            showNotificationBadge: l,
            onClick: i,
            disabled: o,
            ariaExpanded: c,
            clickableRef: d,
            ...m
        } = e,
        [f, v] = (0, r.useState)(!1),
        [C, g] = (0, r.useState)(!1),
        h = null === t;
    ((0, r.useEffect)(() => {
        h &&
            !f &&
            (v(!0),
            setTimeout(() => {
                g(!0);
            }, 500));
    }, [h, v, f]),
        (0, r.useEffect)(() => {
            C && !h && v(!1);
        }, [h, C]));
    let k = h || f,
        b = f ? null : t,
        j = null != i,
        D = (function (e) {
            let { loading: n, balance: t, hasUnread: a } = e;
            return n
                ? x.intl.string(x.t.y0WGqP)
                : a
                  ? x.intl.formatToPlainString(x.t.AgMngw, { balance: t })
                  : x.intl.formatToPlainString(x.t.zPaLL9, { balance: t });
        })({ loading: k, balance: b ?? 0, hasUnread: !0 === l }),
        E = { ...m, balance: b, showNotificationBadge: l, disabled: o, loading: k, isInteractive: j };
    return j
        ? (0, a.jsx)(s.D, {
              innerRef: d,
              onClick: k ? void 0 : i,
              "aria-expanded": c,
              "aria-haspopup": null != c ? "dialog" : void 0,
              "aria-label": D,
              "aria-busy": k,
              className: u()(p.vk, { [p.r9]: o }),
              id: n ?? "balance-widget-pill",
              children: (0, a.jsx)(y, { ...E }),
          })
        : (0, a.jsx)("div", {
              role: "img",
              "aria-label": D,
              "aria-busy": k,
              className: p.Kc,
              id: n,
              children: (0, a.jsx)(y, { ...E }),
          });
}
let E = 588245 != t.j ? D : null;
