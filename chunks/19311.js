n.d(t, { Ay: () => I, CY: () => m, ti: () => T });
var l,
    r = n(627968);
n(64700);
var u = n(503698),
    i = n.n(u),
    a = n(331322),
    s = n(990078),
    o = n(821609),
    c = n(123292),
    d = n(364840),
    A = n(999784),
    E = n(375708),
    N = n(613676),
    T =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let m = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
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
            c = {
                type: l,
                disabled: i,
                onClick: s,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: N.C4 }),
                loading: a,
                text: u,
            };
        return 2 === n ? (0, r.jsx)(o.$, { variant: m(n), ...c }) : (0, r.jsx)(o.$, { ...c, variant: m(n) });
    },
    f = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: u,
                primaryType: o,
                primaryText: T,
                primaryTooltip: m,
                primaryDisabled: f,
                primarySubmitting: I,
                onPrimary: _,
            } = e,
            p =
                null == t
                    ? null
                    : (0, r.jsx)(c.Q, { text: n ?? E.intl.string(E.t["13/7kX"]), onClick: t, variant: "secondary" }),
            h = (0, r.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(A.A, {}),
                    (() => {
                        if (null == u || null == T) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: u,
                            primaryType: o,
                            primaryText: T,
                            primaryDisabled: f,
                            primarySubmitting: I,
                            onPrimary: _,
                        };
                        return null != m
                            ? (0, r.jsx)(s.m, { text: m, asContainer: !0, children: (0, r.jsx)(S, { ...e }) })
                            : (0, r.jsx)(S, { ...e, onPrimary: _ });
                    })(),
                ],
            });
        return (0, r.jsx)(d.j, {
            children: (0, r.jsxs)("div", { className: i()(N.eT, { [N.T$]: null == p }), children: [p, h] }),
        });
    };
f.CTAType = T;
let I = f;
