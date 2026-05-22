n.d(t, { Ay: () => p, CY: () => T, ti: () => N });
var l,
    r = n(627968);
n(64700);
var u = n(503698),
    i = n.n(u),
    a = n(331322),
    s = n(990078),
    o = n(821609),
    d = n(123292),
    c = n(364840),
    A = n(999784),
    E = n(375708),
    m = n(613676),
    N =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let T = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    S = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: u,
                primaryDisabled: i,
                primarySubmitting: a,
                onPrimary: s,
            } = e,
            d = {
                type: l,
                disabled: i,
                onClick: s,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: m.C4 }),
                loading: a,
                text: u,
            };
        return 2 === n ? (0, r.jsx)(o.$, { variant: T(n), ...d }) : (0, r.jsx)(o.$, { ...d, variant: T(n) });
    },
    I = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: u,
                primaryType: o,
                primaryText: N,
                primaryTooltip: T,
                primaryDisabled: I,
                primarySubmitting: p,
                onPrimary: f,
            } = e,
            _ =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? E.intl.string(E.t["13/7kX"]), onClick: t, variant: "secondary" }),
            h = (0, r.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(A.A, {}),
                    (() => {
                        if (null == u || null == N) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: u,
                            primaryType: o,
                            primaryText: N,
                            primaryDisabled: I,
                            primarySubmitting: p,
                            onPrimary: f,
                        };
                        return null != T
                            ? (0, r.jsx)(s.m, { text: T, asContainer: !0, children: (0, r.jsx)(S, { ...e }) })
                            : (0, r.jsx)(S, { ...e, onPrimary: f });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: i()(m.eT, { [m.T$]: null == _ }), children: [_, h] }),
        });
    };
I.CTAType = N;
let p = I;
