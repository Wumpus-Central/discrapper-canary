n.d(t, {
    Gy: () => g,
    k7: () => l.k,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927);
n(14115);
var l = n(305003),
    c = n(626031),
    u = n(339763),
    d = n(796688);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = () =>
        (0, r.jsx)("img", {
            className: d.V8,
            src: n(324292),
            alt: "",
        }),
    h = "balance-widget-pill",
    m = (e, t) => (e === l.k.SELECTED ? d.wH : t ? d.mr : d.Ay),
    g = (0, i.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: a,
                balanceWidgetMode: f = l.k.DEFAULT,
                showNotificationBadge: g,
                onClick: E,
                onMouseDown: b,
                disabled: y,
                isInModalOverlay: O,
                className: A,
            } = e,
            [v, S] = (0, i.useState)(!1),
            I = (0, i.useMemo)(() => m(f, v), [f, v]),
            [T, C] = (0, i.useState)(!1),
            [N, R] = (0, i.useState)(!1),
            [w, P] = (0, i.useState)(2700),
            D = null === a;
        (0, i.useEffect)(() => {
            D &&
                !T &&
                (C(!0),
                setTimeout(() => {
                    R(!0);
                }, 500));
        }, [D, C, T]),
            (0, i.useEffect)(() => {
                N && !D && C(!1);
            }, [D, N]);
        let x = D || T,
            L = T ? null : a,
            [j, M] = (0, i.useState)(null),
            k = (0, i.useRef)(null),
            U = (0, i.useCallback)(() => {
                (k.current = null), M(null);
            }, []),
            G = (0, i.useCallback)(
                (e) => {
                    let t = j === k.current;
                    e > 0 && ("earn" !== j || !t) && M("earn");
                },
                [M, j],
            ),
            V = {
                currentAnimationType: j,
                animationTypeRef: k,
                onSetAnimationDurationMS: P,
            };
        return (0, r.jsx)(o.DUT, {
            onClick: x ? void 0 : E,
            className: s()(d.vk, {
                [d.r9]: y,
            }),
            id: null != n ? n : h,
            children: (0, r.jsxs)("span", {
                onMouseDown: b,
                onMouseEnter: y ? void 0 : () => S(!0),
                onMouseLeave: y ? void 0 : () => S(!1),
                ref: t,
                className: s()(d.kL, I, A, {
                    [d.En]: x,
                    [d.dA]: O,
                    [d.r9]: y,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(d.hr, x ? d.nr : void 0),
                        children: (0, r.jsx)(u.Ay, p({}, V)),
                    }),
                    (0, r.jsx)(c.A, {
                        value: L,
                        onValueChange: G,
                        onValueReached: U,
                        targetTotalCounterTime: w,
                        className: x ? d.F : void 0,
                    }),
                    g && (0, r.jsx)(_, {}),
                ],
            }),
        });
    });
