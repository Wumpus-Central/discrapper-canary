n.d(t, { Ay: () => p, ti: () => m });
var l,
    r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    u = n(331322),
    o = n(990078),
    s = n(821609),
    d = n(123292),
    c = n(364840),
    A = n(999784),
    E = n(375708),
    f = n(613676),
    m =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let T = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    N = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: a,
                primaryDisabled: i,
                primarySubmitting: u,
                onPrimary: o,
            } = e,
            d = {
                type: l,
                disabled: i,
                onClick: o,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: f.C4 }),
                loading: u,
                text: a,
            };
        return 2 === n ? (0, r.jsx)(s.$, { variant: T(n), ...d }) : (0, r.jsx)(s.$, { ...d, variant: T(n) });
    },
    g = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: a,
                primaryType: s,
                primaryText: m,
                primaryTooltip: T,
                primaryDisabled: g,
                primarySubmitting: p,
                onPrimary: C,
            } = e,
            I =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? E.intl.string(E.t["13/7kX"]), onClick: t, variant: "secondary" }),
            h = (0, r.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(A.A, {}),
                    (() => {
                        if (null == a || null == m) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: a,
                            primaryType: s,
                            primaryText: m,
                            primaryDisabled: g,
                            primarySubmitting: p,
                            onPrimary: C,
                        };
                        return null != T
                            ? (0, r.jsx)(o.m, { text: T, asContainer: !0, children: (0, r.jsx)(N, { ...e }) })
                            : (0, r.jsx)(N, { ...e, onPrimary: C });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: i()(f.eT, { [f.T$]: null == I }), children: [I, h] }),
        });
    };
g.CTAType = m;
let p = g;
