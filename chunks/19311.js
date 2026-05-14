n.d(t, { Ay: () => N, CY: () => T, ti: () => h });
var l,
    r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    u = n(331322),
    s = n(990078),
    o = n(821609),
    d = n(123292),
    c = n(364840),
    A = n(999784),
    E = n(375708),
    m = n(613676),
    h =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let T = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    f = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: i,
                primaryDisabled: a,
                primarySubmitting: u,
                onPrimary: s,
            } = e,
            d = {
                type: l,
                disabled: a,
                onClick: s,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: m.C4 }),
                loading: u,
                text: i,
            };
        return 2 === n ? (0, r.jsx)(o.$, { variant: T(n), ...d }) : (0, r.jsx)(o.$, { ...d, variant: T(n) });
    },
    p = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: i,
                primaryType: o,
                primaryText: h,
                primaryTooltip: T,
                primaryDisabled: p,
                primarySubmitting: N,
                onPrimary: C,
            } = e,
            I =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? E.intl.string(E.t["13/7kX"]), onClick: t, variant: "secondary" }),
            S = (0, r.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(A.A, {}),
                    (() => {
                        if (null == i || null == h) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: i,
                            primaryType: o,
                            primaryText: h,
                            primaryDisabled: p,
                            primarySubmitting: N,
                            onPrimary: C,
                        };
                        return null != T
                            ? (0, r.jsx)(s.m, { text: T, asContainer: !0, children: (0, r.jsx)(f, { ...e }) })
                            : (0, r.jsx)(f, { ...e, onPrimary: C });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: a()(m.eT, { [m.T$]: null == I }), children: [I, S] }),
        });
    };
p.CTAType = h;
let N = p;
