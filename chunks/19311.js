l.d(a, { Ay: () => C, ti: () => p });
var t,
    n = l(627968);
l(64700);
var s = l(503698),
    i = l.n(s),
    r = l(331322),
    o = l(990078),
    c = l(821609),
    d = l(123292),
    u = l(364840),
    x = l(999784),
    j = l(375708),
    m = l(613676),
    p =
        (((t = {})[(t.CONTINUE = 0)] = "CONTINUE"),
        (t[(t.UPGRADE = 1)] = "UPGRADE"),
        (t[(t.PURCHASE = 2)] = "PURCHASE"),
        t);
let v = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    h = (e) => {
        let {
                primaryIcon: a,
                primaryCTA: l,
                primaryType: t,
                primaryText: s,
                primaryDisabled: i,
                primarySubmitting: r,
                onPrimary: o,
            } = e,
            d = {
                type: t,
                disabled: i,
                onClick: o,
                icon: null == a ? void 0 : () => (0, n.jsx)(a, { color: "currentColor", className: m.C4 }),
                loading: r,
                text: s,
            };
        return 2 === l ? (0, n.jsx)(c.$, { variant: v(l), ...d }) : (0, n.jsx)(c.$, { ...d, variant: v(l) });
    },
    y = (e) => {
        let {
                onBack: a,
                backText: l,
                primaryIcon: t,
                primaryCTA: s,
                primaryType: c,
                primaryText: p,
                primaryTooltip: v,
                primaryDisabled: y,
                primarySubmitting: C,
                onPrimary: N,
            } = e,
            g =
                null == a
                    ? null
                    : (0, n.jsx)(d.Q, { text: l ?? j.intl.string(j.t["13/7kX"]), onClick: a, variant: "secondary" }),
            S = (0, n.jsxs)(r.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, n.jsx)(x.A, {}),
                    (() => {
                        if (null == s || null == p) return null;
                        let e = {
                            primaryIcon: t,
                            primaryCTA: s,
                            primaryType: c,
                            primaryText: p,
                            primaryDisabled: y,
                            primarySubmitting: C,
                            onPrimary: N,
                        };
                        return null != v
                            ? (0, n.jsx)(o.m, { text: v, asContainer: !0, children: (0, n.jsx)(h, { ...e }) })
                            : (0, n.jsx)(h, { ...e, onPrimary: N });
                    })(),
                ],
            });
        return (0, n.jsx)(u.j, {
            children: (0, n.jsxs)("div", { className: i()(m.eT, { [m.T$]: null == g }), children: [g, S] }),
        });
    };
y.CTAType = p;
let C = y;
