n.d(t, { Gy: () => f, k7: () => u.k });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(939249);
n(14115);
var u = n(305003),
    c = n(626031),
    o = n(339763),
    d = n(743383);
let m = () => (0, l.jsx)("img", { className: d.V8, src: n(324292), alt: "" }),
    f = (0, a.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: r,
                balanceWidgetMode: f = u.k.DEFAULT,
                showNotificationBadge: x,
                onClick: h,
                onMouseDown: A,
                disabled: j,
                isInModalOverlay: v,
                className: N,
            } = e,
            [b, g] = (0, a.useState)(!1),
            C = (0, a.useMemo)(() => (f === u.k.SELECTED ? d.wH : b ? d.mr : d.Ay), [f, b]),
            [R, E] = (0, a.useState)(!1),
            [k, p] = (0, a.useState)(!1),
            [S, O] = (0, a.useState)(2700),
            y = null === r;
        (0, a.useEffect)(() => {
            y &&
                !R &&
                (E(!0),
                setTimeout(() => {
                    p(!0);
                }, 500));
        }, [y, E, R]),
            (0, a.useEffect)(() => {
                k && !y && E(!1);
            }, [y, k]);
        let _ = y || R,
            D = R ? null : r,
            [T, M] = (0, a.useState)(null),
            L = (0, a.useRef)(null),
            w = (0, a.useCallback)(() => {
                (L.current = null), M(null);
            }, []),
            B = (0, a.useCallback)(
                (e) => {
                    let t = T === L.current;
                    e > 0 && ("earn" !== T || !t) && M("earn");
                },
                [M, T],
            );
        return (0, l.jsx)(i.D, {
            onClick: _ ? void 0 : h,
            className: s()(d.vk, { [d.r9]: j }),
            id: n ?? "balance-widget-pill",
            children: (0, l.jsxs)("span", {
                onMouseDown: A,
                onMouseEnter: j ? void 0 : () => g(!0),
                onMouseLeave: j ? void 0 : () => g(!1),
                ref: t,
                className: s()(d.kL, C, N, { [d.En]: _, [d.dA]: v, [d.r9]: j }),
                children: [
                    (0, l.jsx)("div", {
                        className: s()(d.hr, _ ? d.nr : void 0),
                        children: (0, l.jsx)(o.Ay, {
                            currentAnimationType: T,
                            animationTypeRef: L,
                            onSetAnimationDurationMS: O,
                        }),
                    }),
                    (0, l.jsx)(c.A, {
                        value: D,
                        onValueChange: B,
                        onValueReached: w,
                        targetTotalCounterTime: S,
                        className: _ ? d.F : void 0,
                    }),
                    x && (0, l.jsx)(m, {}),
                ],
            }),
        });
    });
