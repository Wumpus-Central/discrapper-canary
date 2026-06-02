n.d(e, { Ay: () => N, CY: () => U, ti: () => C });
var r,
    E = n(627968);
n(64700);
var l = n(503698),
    _ = n.n(l),
    i = n(331322),
    A = n(990078),
    s = n(821609),
    a = n(123292),
    I = n(364840),
    T = n(999784),
    u = n(375708),
    S = n(613676),
    C =
        (((r = {})[(r.CONTINUE = 0)] = "CONTINUE"),
        (r[(r.UPGRADE = 1)] = "UPGRADE"),
        (r[(r.PURCHASE = 2)] = "PURCHASE"),
        r);
let U = (t) => (2 === t ? "expressive" : 0 === t ? "primary" : "active"),
    o = (t) => {
        let {
                primaryIcon: e,
                primaryCTA: n,
                primaryType: r,
                primaryText: l,
                primaryDisabled: _,
                primarySubmitting: i,
                onPrimary: A,
            } = t,
            a = {
                type: r,
                disabled: _,
                onClick: A,
                icon: null == e ? void 0 : () => (0, E.jsx)(e, { color: "currentColor", className: S.C4 }),
                loading: i,
                text: l,
            };
        return 2 === n ? (0, E.jsx)(s.$, { variant: U(n), ...a }) : (0, E.jsx)(s.$, { ...a, variant: U(n) });
    },
    R = (t) => {
        let {
                onBack: e,
                backText: n,
                primaryIcon: r,
                primaryCTA: l,
                primaryType: s,
                primaryText: C,
                primaryTooltip: U,
                primaryDisabled: R,
                primarySubmitting: N,
                onPrimary: P,
            } = t,
            d =
                null == e
                    ? null
                    : (0, E.jsx)(a.Q, { text: n ?? u.intl.string(u.t["13/7kX"]), onClick: e, variant: "secondary" }),
            c = (0, E.jsxs)(i.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(T.A, {}),
                    (() => {
                        if (null == l || null == C) return null;
                        let t = {
                            primaryIcon: r,
                            primaryCTA: l,
                            primaryType: s,
                            primaryText: C,
                            primaryDisabled: R,
                            primarySubmitting: N,
                            onPrimary: P,
                        };
                        return null != U
                            ? (0, E.jsx)(A.m, { text: U, asContainer: !0, children: (0, E.jsx)(o, { ...t }) })
                            : (0, E.jsx)(o, { ...t, onPrimary: P });
                    })(),
                ],
            });
        return (0, E.jsx)(I.j, {
            children: (0, E.jsxs)("div", { className: _()(S.eT, { [S.T$]: null == d }), children: [d, c] }),
        });
    };
R.CTAType = C;
let N = R;
