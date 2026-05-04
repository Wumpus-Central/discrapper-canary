n.d(t, { Ay: () => N, ti: () => E });
var l,
    r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    u = n(331322),
    o = n(990078),
    s = n(821609),
    d = n(123292),
    c = n(364840),
    A = n(999784),
    f = n(375708),
    m = n(613676),
    E =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let h = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    C = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: i,
                primaryDisabled: a,
                primarySubmitting: u,
                onPrimary: o,
            } = e,
            d = {
                type: l,
                disabled: a,
                onClick: o,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: m.C4 }),
                loading: u,
                text: i,
            };
        return 2 === n ? (0, r.jsx)(s.$, { variant: h(n), ...d }) : (0, r.jsx)(s.$, { ...d, variant: h(n) });
    },
    T = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: i,
                primaryType: s,
                primaryText: E,
                primaryTooltip: h,
                primaryDisabled: T,
                primarySubmitting: N,
                onPrimary: g,
            } = e,
            p =
                null == t
                    ? null
                    : (0, r.jsx)(d.Q, { text: n ?? f.intl.string(f.t["13/7kX"]), onClick: t, variant: "secondary" }),
            I = (0, r.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, r.jsx)(A.A, {}),
                    (() => {
                        if (null == i || null == E) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: i,
                            primaryType: s,
                            primaryText: E,
                            primaryDisabled: T,
                            primarySubmitting: N,
                            onPrimary: g,
                        };
                        return null != h
                            ? (0, r.jsx)(o.m, { text: h, asContainer: !0, children: (0, r.jsx)(C, { ...e }) })
                            : (0, r.jsx)(C, { ...e, onPrimary: g });
                    })(),
                ],
            });
        return (0, r.jsx)(c.j, {
            children: (0, r.jsxs)("div", { className: a()(m.eT, { [m.T$]: null == p }), children: [p, I] }),
        });
    };
T.CTAType = E;
let N = T;
