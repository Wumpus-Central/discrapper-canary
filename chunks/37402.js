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
function x(e) {
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
    return (0, f.q)(n ?? r) ? (0, a.jsx)(x, { ...t }) : (0, a.jsx)(h, { ...t });
};
var k = t(105292);
function j() {
    return (0, a.jsx)("div", { className: p.V8, "aria-hidden": !0 });
}
function y(e) {
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
            isInModalOverlay: C,
            className: g,
            ref: h,
            loading: x,
            isInteractive: k,
        } = e,
        [y, D] = (0, r.useState)(!1),
        E = (0, r.useMemo)(() => (d === i.k.SELECTED ? p.wH : y ? p.mr : p.Ay), [d, y]),
        A = k && !0 !== v,
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
        ref: h,
        className: u()(p.kL, E, g, {
            [p.Wf]: "round" === l,
            [p.D0]: "overlay-secondary" === t,
            [p.En]: x,
            [p.dA]: C,
            [p.r9]: v,
        }),
        children: [
            (0, a.jsx)("div", {
                className: u()(p.hr, x ? p.nr : void 0),
                children: (0, a.jsx)(b, {
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
                className: x ? p.F : void 0,
                textVariant: "sm" === s ? "text-sm/semibold" : "text-md/semibold",
                textColor: "overlay-secondary" === t ? "text-overlay-light" : void 0,
            }),
            m && (0, a.jsx)(j, {}),
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
    let x = h || f,
        b = f ? null : t,
        j = null != i,
        D = (function (e) {
            let { loading: n, balance: t, hasUnread: a } = e;
            return n
                ? k.intl.string(k.t.y0WGqP)
                : a
                  ? k.intl.formatToPlainString(k.t.AgMngw, { balance: t })
                  : k.intl.formatToPlainString(k.t.zPaLL9, { balance: t });
        })({ loading: x, balance: b ?? 0, hasUnread: !0 === l }),
        E = { ...m, balance: b, showNotificationBadge: l, disabled: o, loading: x, isInteractive: j };
    return j
        ? (0, a.jsx)(s.D, {
              innerRef: d,
              onClick: x ? void 0 : i,
              "aria-expanded": c,
              "aria-haspopup": null != c ? "dialog" : void 0,
              "aria-label": D,
              "aria-busy": x,
              className: u()(p.vk, { [p.r9]: o }),
              id: n ?? "balance-widget-pill",
              children: (0, a.jsx)(y, { ...E }),
          })
        : (0, a.jsx)("div", {
              role: "img",
              "aria-label": D,
              "aria-busy": x,
              className: p.Kc,
              id: n,
              children: (0, a.jsx)(y, { ...E }),
          });
}
let E = 588245 != t.j ? D : null;
