n.d(t, { Ay: () => p, ti: () => N });
var l,
    a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(331322),
    u = n(990078),
    o = n(821609),
    d = n(123292),
    c = n(364840),
    A = n(999784),
    m = n(375708),
    E = n(503020),
    N =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let S = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    T = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: r,
                primaryDisabled: i,
                primarySubmitting: s,
                onPrimary: u,
            } = e,
            d = {
                type: l,
                disabled: i,
                onClick: u,
                icon: null == t ? void 0 : () => (0, a.jsx)(t, { color: "currentColor", className: E.C4 }),
                loading: s,
                text: r,
            };
        return 2 === n ? (0, a.jsx)(o.$, { variant: S(n), ...d }) : (0, a.jsx)(o.$, { ...d, variant: S(n) });
    },
    I = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: r,
                primaryType: o,
                primaryText: N,
                primaryTooltip: S,
                primaryDisabled: I,
                primarySubmitting: p,
                onPrimary: h,
            } = e,
            f =
                null == t
                    ? null
                    : (0, a.jsx)(d.Q, { text: n ?? m.intl.string(m.t["13/7kX"]), onClick: t, variant: "secondary" }),
            y = (0, a.jsxs)(s.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, a.jsx)(A.A, {}),
                    (() => {
                        if (null == r || null == N) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: r,
                            primaryType: o,
                            primaryText: N,
                            primaryDisabled: I,
                            primarySubmitting: p,
                            onPrimary: h,
                        };
                        return null != S
                            ? (0, a.jsx)(u.m, { text: S, asContainer: !0, children: (0, a.jsx)(T, { ...e }) })
                            : (0, a.jsx)(T, { ...e, onPrimary: h });
                    })(),
                ],
            });
        return (0, a.jsx)(c.j, {
            children: (0, a.jsxs)("div", { className: i()(E.eT, { [E.T$]: null == f }), children: [f, y] }),
        });
    };
I.CTAType = N;
let p = I;
