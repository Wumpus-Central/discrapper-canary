n.d(t, { Ay: () => C, ti: () => T });
var l,
    a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(331322),
    E = n(990078),
    _ = n(821609),
    o = n(123292),
    A = n(364840),
    I = n(999784),
    c = n(375708),
    d = n(613676),
    T =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let S = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    N = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: r,
                primaryDisabled: i,
                primarySubmitting: s,
                onPrimary: E,
            } = e,
            o = {
                type: l,
                disabled: i,
                onClick: E,
                icon: null == t ? void 0 : () => (0, a.jsx)(t, { color: "currentColor", className: d.C4 }),
                loading: s,
                text: r,
            };
        return 2 === n ? (0, a.jsx)(_.$, { variant: S(n), ...o }) : (0, a.jsx)(_.$, { ...o, variant: S(n) });
    },
    u = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: r,
                primaryType: _,
                primaryText: T,
                primaryTooltip: S,
                primaryDisabled: u,
                primarySubmitting: C,
                onPrimary: R,
            } = e,
            U =
                null == t
                    ? null
                    : (0, a.jsx)(o.Q, { text: n ?? c.intl.string(c.t["13/7kX"]), onClick: t, variant: "secondary" }),
            P = (0, a.jsxs)(s.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, a.jsx)(I.A, {}),
                    (() => {
                        if (null == r || null == T) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: r,
                            primaryType: _,
                            primaryText: T,
                            primaryDisabled: u,
                            primarySubmitting: C,
                            onPrimary: R,
                        };
                        return null != S
                            ? (0, a.jsx)(E.m, { text: S, asContainer: !0, children: (0, a.jsx)(N, { ...e }) })
                            : (0, a.jsx)(N, { ...e, onPrimary: R });
                    })(),
                ],
            });
        return (0, a.jsx)(A.j, {
            children: (0, a.jsxs)("div", { className: i()(d.eT, { [d.T$]: null == U }), children: [U, P] }),
        });
    };
u.CTAType = T;
let C = u;
