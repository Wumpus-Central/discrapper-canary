l.d(t, { Gy: () => m, k7: () => o.k });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(397927);
l(14115);
var o = l(305003),
    u = l(626031),
    c = l(339763),
    d = l(796688);
let p = () => (0, a.jsx)("img", { className: d.V8, src: l(324292), alt: "" }),
    m = (0, n.forwardRef)(function (e, t) {
        let {
                id: l,
                balance: r,
                balanceWidgetMode: m = o.k.DEFAULT,
                showNotificationBadge: h,
                onClick: x,
                onMouseDown: b,
                disabled: g,
                isInModalOverlay: y,
                className: E,
            } = e,
            [f, v] = (0, n.useState)(!1),
            S = (0, n.useMemo)(() => (m === o.k.SELECTED ? d.wH : f ? d.mr : d.Ay), [m, f]),
            [j, T] = (0, n.useState)(!1),
            [C, P] = (0, n.useState)(!1),
            [R, A] = (0, n.useState)(2700),
            _ = null === r;
        (0, n.useEffect)(() => {
            _ &&
                !j &&
                (T(!0),
                setTimeout(() => {
                    P(!0);
                }, 500));
        }, [_, T, j]),
            (0, n.useEffect)(() => {
                C && !_ && T(!1);
            }, [_, C]);
        let N = _ || j,
            I = j ? null : r,
            [k, D] = (0, n.useState)(null),
            M = (0, n.useRef)(null),
            O = (0, n.useCallback)(() => {
                (M.current = null), D(null);
            }, []),
            B = (0, n.useCallback)(
                (e) => {
                    let t = k === M.current;
                    e > 0 && ("earn" !== k || !t) && D("earn");
                },
                [D, k],
            );
        return (0, a.jsx)(s.DUT, {
            onClick: N ? void 0 : x,
            className: i()(d.vk, { [d.r9]: g }),
            id: l ?? "balance-widget-pill",
            children: (0, a.jsxs)("span", {
                onMouseDown: b,
                onMouseEnter: g ? void 0 : () => v(!0),
                onMouseLeave: g ? void 0 : () => v(!1),
                ref: t,
                className: i()(d.kL, S, E, { [d.En]: N, [d.dA]: y, [d.r9]: g }),
                children: [
                    (0, a.jsx)("div", {
                        className: i()(d.hr, N ? d.nr : void 0),
                        children: (0, a.jsx)(c.Ay, {
                            currentAnimationType: k,
                            animationTypeRef: M,
                            onSetAnimationDurationMS: A,
                        }),
                    }),
                    (0, a.jsx)(u.A, {
                        value: I,
                        onValueChange: B,
                        onValueReached: O,
                        targetTotalCounterTime: R,
                        className: N ? d.F : void 0,
                    }),
                    h && (0, a.jsx)(p, {}),
                ],
            }),
        });
    });
