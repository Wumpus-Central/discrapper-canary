n.d(t, { Ay: () => E, ti: () => x });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(331322),
    o = n(990078),
    c = n(821609),
    d = n(123292),
    u = n(364840),
    m = n(999784),
    h = n(375708),
    g = n(613676),
    x =
        (((i = {})[(i.CONTINUE = 0)] = "CONTINUE"),
        (i[(i.UPGRADE = 1)] = "UPGRADE"),
        (i[(i.PURCHASE = 2)] = "PURCHASE"),
        i);
let f = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    p = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: i,
                primaryText: s,
                primaryDisabled: r,
                primarySubmitting: a,
                onPrimary: o,
            } = e,
            d = {
                type: i,
                disabled: r,
                onClick: o,
                icon: null == t ? void 0 : () => (0, l.jsx)(t, { color: "currentColor", className: g.C4 }),
                loading: a,
                text: s,
            };
        return 2 === n ? (0, l.jsx)(c.$, { variant: f(n), ...d }) : (0, l.jsx)(c.$, { ...d, variant: f(n) });
    },
    A = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: i,
                primaryCTA: s,
                primaryType: c,
                primaryText: x,
                primaryTooltip: f,
                primaryDisabled: A,
                primarySubmitting: E,
                onPrimary: _,
            } = e,
            j =
                null == t
                    ? null
                    : (0, l.jsx)(d.Q, { text: n ?? h.intl.string(h.t["13/7kX"]), onClick: t, variant: "secondary" }),
            N = (0, l.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(m.A, {}),
                    (() => {
                        if (null == s || null == x) return null;
                        let e = {
                            primaryIcon: i,
                            primaryCTA: s,
                            primaryType: c,
                            primaryText: x,
                            primaryDisabled: A,
                            primarySubmitting: E,
                            onPrimary: _,
                        };
                        return null != f
                            ? (0, l.jsx)(o.m, { text: f, asContainer: !0, children: (0, l.jsx)(p, { ...e }) })
                            : (0, l.jsx)(p, { ...e, onPrimary: _ });
                    })(),
                ],
            });
        return (0, l.jsx)(u.j, {
            children: (0, l.jsxs)("div", { className: r()(g.eT, { [g.T$]: null == j }), children: [j, N] }),
        });
    };
A.CTAType = x;
let E = A;
