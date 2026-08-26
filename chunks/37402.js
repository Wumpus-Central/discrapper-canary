n.d(t, { Gy: () => E, k7: () => u.k });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
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
let g = { width: 60, height: 60 };
function j(e) {
    let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: a, play: r, getDuration: s } = e,
        i = s(),
        u = null != i ? 1e3 * i : 3e3;
    (0, l.useEffect)(() => {
        null !== t && t !== n.current && ((n.current = t), r());
    }, [t, r, n]),
        (0, l.useEffect)(() => {
            a(u);
        }, [a, u]);
}
function v(e) {
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
                    (0, a.jsx)(o.P, {
                        ...e,
                        src: () => n.e("278611").then(n.t.bind(n, 433886, 19)),
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
        j({ currentAnimationType: c, ...d, ...x }),
        (0, a.jsx)(f, { ...g, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
function C(e) {
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
                    (0, a.jsx)(o.P, {
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
        j({ currentAnimationType: c, ...m, ...x }),
        (0, a.jsx)(f, { ...g, size: "custom", className: h.E$, useLottieDefaultColors: !0 })
    );
}
let A = function (e) {
    let t = (0, x.Ay)();
    return (0, f.q)(t) ? (0, a.jsx)(C, { ...e }) : (0, a.jsx)(v, { ...e });
};
var N = n(375708);
function b() {
    return (0, a.jsx)("img", { className: h.V8, src: n(324292), alt: "" });
}
let E = (0, l.forwardRef)(function (e, t) {
    let {
            id: n,
            balance: r,
            balanceWidgetMode: o = u.k.DEFAULT,
            showNotificationBadge: d,
            onClick: m,
            onMouseDown: f,
            disabled: x,
            isInModalOverlay: g,
            className: j,
        } = e,
        [v, C] = (0, l.useState)(!1),
        E = (0, l.useMemo)(() => (o === u.k.SELECTED ? h.wH : v ? h.mr : h.Ay), [o, v]),
        [R, k] = (0, l.useState)(!1),
        [p, y] = (0, l.useState)(!1),
        [S, O] = (0, l.useState)(2700),
        D = null === r;
    (0, l.useEffect)(() => {
        D &&
            !R &&
            (k(!0),
            setTimeout(() => {
                y(!0);
            }, 500));
    }, [D, k, R]),
        (0, l.useEffect)(() => {
            p && !D && k(!1);
        }, [D, p]);
    let M = D || R,
        T = R ? null : r,
        [_, L] = (0, l.useState)(null),
        w = (0, l.useRef)(null),
        P = (0, l.useCallback)(() => {
            (w.current = null), L(null);
        }, []),
        B = (0, l.useCallback)(
            (e) => {
                let t = _ === w.current;
                e > 0 && ("earn" !== _ || !t) && L("earn");
            },
            [L, _],
        );
    return (0, a.jsx)(i.D, {
        onClick: M ? void 0 : m,
        "aria-label": M ? N.intl.string(N.t.y0WGqP) : N.intl.formatToPlainString(N.t.zPaLL9, { balance: T ?? 0 }),
        "aria-busy": M,
        className: s()(h.vk, { [h.r9]: x }),
        id: n ?? "balance-widget-pill",
        children: (0, a.jsxs)("span", {
            onMouseDown: f,
            onMouseEnter: x ? void 0 : () => C(!0),
            onMouseLeave: x ? void 0 : () => C(!1),
            ref: t,
            className: s()(h.kL, E, j, { [h.En]: M, [h.dA]: g, [h.r9]: x }),
            children: [
                (0, a.jsx)("div", {
                    className: s()(h.hr, M ? h.nr : void 0),
                    children: (0, a.jsx)(A, {
                        currentAnimationType: _,
                        animationTypeRef: w,
                        onSetAnimationDurationMS: O,
                    }),
                }),
                (0, a.jsx)(c.A, {
                    value: T,
                    onValueChange: B,
                    onValueReached: P,
                    targetTotalCounterTime: S,
                    className: M ? h.F : void 0,
                }),
                d && (0, a.jsx)(b, {}),
            ],
        }),
    });
});
