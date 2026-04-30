n.d(t, { Ay: () => h, CY: () => m, ti: () => T });
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
    f = n(613676),
    T =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let m = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    p = (e) => {
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
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: f.C4 }),
                loading: a,
                text: u,
            };
        return 2 === n ? (0, r.jsx)(o.$, { variant: m(n), ...d }) : (0, r.jsx)(o.$, { ...d, variant: m(n) });
    },
    N = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: u,
                primaryType: o,
                primaryText: T,
                primaryTooltip: m,
                primaryDisabled: N,
                primarySubmitting: h,
                onPrimary: I,
            } = e,
            C =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? E.intl.string(E.t["13/7kX"]), onClick: t, variant: "secondary" }),
            S = (0, r.jsxs)(a.B, {
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
                            primaryDisabled: N,
                            primarySubmitting: h,
                            onPrimary: I,
                        };
                        return null != m
                            ? (0, r.jsx)(s.m, { text: m, asContainer: !0, children: (0, r.jsx)(p, { ...e }) })
                            : (0, r.jsx)(p, { ...e, onPrimary: I });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: i()(f.eT, { [f.T$]: null == C }), children: [C, S] }),
        });
    };
N.CTAType = T;
let h = N;
