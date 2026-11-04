t.d(n, { k7: () => i.k, Gy: () => D, Ay: () => E });
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
    b = t(802814);
let p = { width: 60, height: 60 };
function C(e) {
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
function g(e) {
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
                        src: () => t.e(278611).then(t.t.bind(t, 433886, 19)),
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
        C({ currentAnimationType: o, ...d, ...v }),
        (0, a.jsx)(f, { ...p, size: "custom", className: b.E$, useLottieDefaultColors: !0 })
    );
}
function h(e) {
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
                        src: () => t.e(245492).then(t.t.bind(t, 653727, 19)),
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
        C({ currentAnimationType: o, ...m, ...v }),
        (0, a.jsx)(f, { ...p, size: "custom", className: b.E$, useLottieDefaultColors: !0 })
    );
}
let k = function (e) {
    let { themeOverride: n, ...t } = e,
        r = (0, v.Ay)();
    return (0, f.q)(n ?? r) ? (0, a.jsx)(h, { ...t }) : (0, a.jsx)(g, { ...t });
};
var x = t(792996);
function y() {
    return (0, a.jsx)("div", { className: b.V8, "aria-hidden": !0 });
}
function j(e) {
    let {
            balance: n,
            variant: t = "default",
            borderRadius: l = "sm",
            textSize: s = "md",
            themeOverride: c,
            balanceWidgetMode: d = i.k.DEFAULT,
            showNotificationBadge: m,
            onMouseDown: f,
            disabled: v,
            isInModalOverlay: p,
            className: C,
            ref: g,
            loading: h,
            isInteractive: x,
        } = e,
        [j, D] = (0, r.useState)(!1),
        E = (0, r.useMemo)(() => (d === i.k.SELECTED ? b.wH : j ? b.mr : b.Ay), [d, j]),
        A = x && !0 !== v,
        [S, T] = (0, r.useState)(2700),
        [L, M] = (0, r.useState)(null),
        N = (0, r.useRef)(null),
        R = (0, r.useCallback)(() => {
            ((N.current = null), M(null));
        }, []),
        w = (0, r.useCallback)(
            (e) => {
                let n = L === N.current;
                e > 0 && ("earn" !== L || !n) && M("earn");
            },
            [M, L],
        );
    return (0, a.jsxs)("span", {
        onMouseDown: f,
        onMouseEnter: A ? () => D(!0) : void 0,
        onMouseLeave: A ? () => D(!1) : void 0,
        ref: g,
        className: u()(b.kL, E, C, {
            [b.Wf]: "round" === l,
            [b.D0]: "overlay-secondary" === t,
            [b.En]: h,
            [b.dA]: p,
            [b.r9]: v,
        }),
        children: [
            (0, a.jsx)("div", {
                className: u()(b.hr, h ? b.nr : void 0),
                children: (0, a.jsx)(k, {
                    currentAnimationType: L,
                    animationTypeRef: N,
                    onSetAnimationDurationMS: T,
                    themeOverride: c,
                }),
            }),
            (0, a.jsx)(o.A, {
                value: n,
                onValueChange: w,
                onValueReached: R,
                targetTotalCounterTime: S,
                className: h ? b.F : void 0,
                textVariant: "sm" === s ? "body-sm/semibold" : "body-md/semibold",
                textColor: "overlay-secondary" === t ? "text-overlay-light" : void 0,
            }),
            m && (0, a.jsx)(y, {}),
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
        [p, C] = (0, r.useState)(!1),
        g = null === t;
    ((0, r.useEffect)(() => {
        g &&
            !f &&
            (v(!0),
            setTimeout(() => {
                C(!0);
            }, 500));
    }, [g, v, f]),
        (0, r.useEffect)(() => {
            p && !g && v(!1);
        }, [g, p]));
    let h = g || f,
        k = f ? null : t,
        y = null != i,
        D = (function (e) {
            let { loading: n, balance: t, hasUnread: a } = e;
            return n
                ? x.intl.string(x.t.y0WGqP)
                : a
                  ? x.intl.formatToPlainString(x.t.AgMngw, { balance: t })
                  : x.intl.formatToPlainString(x.t.zPaLL9, { balance: t });
        })({ loading: h, balance: k ?? 0, hasUnread: !0 === l }),
        E = { ...m, balance: k, showNotificationBadge: l, disabled: o, loading: h, isInteractive: y };
    return y
        ? (0, a.jsx)(s.D, {
              innerRef: d,
              onClick: h ? void 0 : i,
              "aria-expanded": c,
              "aria-haspopup": null != c ? "dialog" : void 0,
              "aria-label": D,
              "aria-busy": h,
              className: u()(b.vk, { [b.r9]: o }),
              id: n ?? "balance-widget-pill",
              children: (0, a.jsx)(j, { ...E }),
          })
        : (0, a.jsx)("div", {
              role: "img",
              "aria-label": D,
              "aria-busy": h,
              className: b.Kc,
              id: n,
              children: (0, a.jsx)(j, { ...E }),
          });
}
let E = 588245 != t.j ? D : null;
