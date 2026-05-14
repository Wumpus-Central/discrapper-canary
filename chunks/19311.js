n.d(t, { Ay: () => N, ti: () => h });
var l,
    r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(331322),
    u = n(990078),
    s = n(821609),
    d = n(123292),
    c = n(364840),
    A = n(999784),
    m = n(375708),
    E = n(613676),
    h =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let C = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    T = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: i,
                primaryDisabled: a,
                primarySubmitting: o,
                onPrimary: u,
            } = e,
            d = {
                type: l,
                disabled: a,
                onClick: u,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: E.C4 }),
                loading: o,
                text: i,
            };
        return 2 === n ? (0, r.jsx)(s.$, { variant: C(n), ...d }) : (0, r.jsx)(s.$, { ...d, variant: C(n) });
    },
    p = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: i,
                primaryType: s,
                primaryText: h,
                primaryTooltip: C,
                primaryDisabled: p,
                primarySubmitting: N,
                onPrimary: f,
            } = e,
            g =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? m.intl.string(m.t["13/7kX"]), onClick: t, variant: "secondary" }),
            I = (0, r.jsxs)(o.B, {
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
                            primaryType: s,
                            primaryText: h,
                            primaryDisabled: p,
                            primarySubmitting: N,
                            onPrimary: f,
                        };
                        return null != C
                            ? (0, r.jsx)(u.m, { text: C, asContainer: !0, children: (0, r.jsx)(T, { ...e }) })
                            : (0, r.jsx)(T, { ...e, onPrimary: f });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: a()(E.eT, { [E.T$]: null == g }), children: [g, I] }),
        });
    };
p.CTAType = h;
let N = p;
