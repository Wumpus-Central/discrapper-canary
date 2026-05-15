n.d(t, { Ay: () => p, ti: () => S });
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
    m = n(613676),
    S =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let N = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    T = (e) => {
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
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: m.C4 }),
                loading: u,
                text: a,
            };
        return 2 === n ? (0, r.jsx)(s.$, { variant: N(n), ...d }) : (0, r.jsx)(s.$, { ...d, variant: N(n) });
    },
    I = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: a,
                primaryType: s,
                primaryText: S,
                primaryTooltip: N,
                primaryDisabled: I,
                primarySubmitting: p,
                onPrimary: f,
            } = e,
            h =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? E.intl.string(E.t["13/7kX"]), onClick: t, variant: "secondary" }),
            C = (0, r.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(A.A, {}),
                    (() => {
                        if (null == a || null == S) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: a,
                            primaryType: s,
                            primaryText: S,
                            primaryDisabled: I,
                            primarySubmitting: p,
                            onPrimary: f,
                        };
                        return null != N
                            ? (0, r.jsx)(o.m, { text: N, asContainer: !0, children: (0, r.jsx)(T, { ...e }) })
                            : (0, r.jsx)(T, { ...e, onPrimary: f });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: i()(m.eT, { [m.T$]: null == h }), children: [h, C] }),
        });
    };
I.CTAType = S;
let p = I;
