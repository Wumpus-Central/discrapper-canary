"use strict";
n.d(t, { Gy: () => h, k7: () => l.k });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927);
n(14115);
var l = n(305003),
    u = n(626031),
    c = n(339763),
    d = n(796688);
let _ = () => (0, r.jsx)("img", { className: d.V8, src: n(324292), alt: "" }),
    f = "balance-widget-pill",
    p = (e, t) => (e === l.k.SELECTED ? d.wH : t ? d.mr : d.Ay),
    h = (0, i.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: a,
                balanceWidgetMode: h = l.k.DEFAULT,
                showNotificationBadge: m,
                onClick: g,
                onMouseDown: E,
                disabled: A,
                isInModalOverlay: I,
                className: T,
            } = e,
            [y, S] = (0, i.useState)(!1),
            v = (0, i.useMemo)(() => p(h, y), [h, y]),
            [C, b] = (0, i.useState)(!1),
            [N, R] = (0, i.useState)(!1),
            [O, D] = (0, i.useState)(2700),
            L = null === a;
        (0, i.useEffect)(() => {
            L &&
                !C &&
                (b(!0),
                setTimeout(() => {
                    R(!0);
                }, 500));
        }, [L, b, C]),
            (0, i.useEffect)(() => {
                N && !L && b(!1);
            }, [L, N]);
        let w = L || C,
            x = C ? null : a,
            [P, M] = (0, i.useState)(null),
            k = (0, i.useRef)(null),
            U = (0, i.useCallback)(() => {
                (k.current = null), M(null);
            }, []),
            G = (0, i.useCallback)(
                (e) => {
                    let t = P === k.current;
                    e > 0 && ("earn" !== P || !t) && M("earn");
                },
                [M, P],
            ),
            V = { currentAnimationType: P, animationTypeRef: k, onSetAnimationDurationMS: D };
        return (0, r.jsx)(o.DUT, {
            onClick: w ? void 0 : g,
            className: s()(d.vk, { [d.r9]: A }),
            id: n ?? f,
            children: (0, r.jsxs)("span", {
                onMouseDown: E,
                onMouseEnter: A ? void 0 : () => S(!0),
                onMouseLeave: A ? void 0 : () => S(!1),
                ref: t,
                className: s()(d.kL, v, T, { [d.En]: w, [d.dA]: I, [d.r9]: A }),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(d.hr, w ? d.nr : void 0),
                        children: (0, r.jsx)(c.Ay, { ...V }),
                    }),
                    (0, r.jsx)(u.A, {
                        value: x,
                        onValueChange: G,
                        onValueReached: U,
                        targetTotalCounterTime: O,
                        className: w ? d.F : void 0,
                    }),
                    m && (0, r.jsx)(_, {}),
                ],
            }),
        });
    });
