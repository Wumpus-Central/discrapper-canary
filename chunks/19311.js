t.d(a, { Ay: () => T, ti: () => C });
var l,
    i = t(627968);
t(64700);
var s = t(503698),
    n = t.n(s),
    r = t(331322),
    c = t(990078),
    o = t(821609),
    d = t(123292),
    E = t(364840),
    I = t(999784),
    u = t(375708),
    S = t(613676),
    C =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let N = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    _ = (e) => {
        let {
                primaryIcon: a,
                primaryCTA: t,
                primaryType: l,
                primaryText: s,
                primaryDisabled: n,
                primarySubmitting: r,
                onPrimary: c,
            } = e,
            d = {
                type: l,
                disabled: n,
                onClick: c,
                icon: null == a ? void 0 : () => (0, i.jsx)(a, { color: "currentColor", className: S.C4 }),
                loading: r,
                text: s,
            };
        return 2 === t ? (0, i.jsx)(o.$, { variant: N(t), ...d }) : (0, i.jsx)(o.$, { ...d, variant: N(t) });
    },
    x = (e) => {
        let {
                onBack: a,
                backText: t,
                primaryIcon: l,
                primaryCTA: s,
                primaryType: o,
                primaryText: C,
                primaryTooltip: N,
                primaryDisabled: x,
                primarySubmitting: T,
                onPrimary: R,
            } = e,
            j =
                null == a
                    ? null
                    : (0, i.jsx)(d.Q, { text: t ?? u.intl.string(u.t["13/7kX"]), onClick: a, variant: "secondary" }),
            m = (0, i.jsxs)(r.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(I.A, {}),
                    (() => {
                        if (null == s || null == C) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: s,
                            primaryType: o,
                            primaryText: C,
                            primaryDisabled: x,
                            primarySubmitting: T,
                            onPrimary: R,
                        };
                        return null != N
                            ? (0, i.jsx)(c.m, { text: N, asContainer: !0, children: (0, i.jsx)(_, { ...e }) })
                            : (0, i.jsx)(_, { ...e, onPrimary: R });
                    })(),
                ],
            });
        return (0, i.jsx)(E.j, {
            children: (0, i.jsxs)("div", { className: n()(S.eT, { [S.T$]: null == j }), children: [j, m] }),
        });
    };
x.CTAType = C;
let T = x;
