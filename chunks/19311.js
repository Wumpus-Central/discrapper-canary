n.d(t, { Ay: () => d, ti: () => T });
var l,
    r = n(627968);
n(64700);
var E = n(503698),
    a = n.n(E),
    i = n(331322),
    _ = n(990078),
    s = n(821609),
    I = n(123292),
    o = n(364840),
    S = n(999784),
    A = n(375708),
    N = n(613676),
    T =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let c = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    C = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: E,
                primaryDisabled: a,
                primarySubmitting: i,
                onPrimary: _,
            } = e,
            I = {
                type: l,
                disabled: a,
                onClick: _,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: N.C4 }),
                loading: i,
                text: E,
            };
        return 2 === n ? (0, r.jsx)(s.$, { variant: c(n), ...I }) : (0, r.jsx)(s.$, { ...I, variant: c(n) });
    },
    R = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: E,
                primaryType: s,
                primaryText: T,
                primaryTooltip: c,
                primaryDisabled: R,
                primarySubmitting: d,
                onPrimary: u,
            } = e,
            U =
                null == t
                    ? null
                    : (0, r.jsx)(I.Q, { text: n ?? A.intl.string(A.t["13/7kX"]), onClick: t, variant: "secondary" }),
            P = (0, r.jsxs)(i.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(S.A, {}),
                    (() => {
                        if (null == E || null == T) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: E,
                            primaryType: s,
                            primaryText: T,
                            primaryDisabled: R,
                            primarySubmitting: d,
                            onPrimary: u,
                        };
                        return null != c
                            ? (0, r.jsx)(_.m, { text: c, asContainer: !0, children: (0, r.jsx)(C, { ...e }) })
                            : (0, r.jsx)(C, { ...e, onPrimary: u });
                    })(),
                ],
            });
        return (0, r.jsx)(o.j, {
            children: (0, r.jsxs)("div", { className: a()(N.eT, { [N.T$]: null == U }), children: [U, P] }),
        });
    };
R.CTAType = T;
let d = R;
