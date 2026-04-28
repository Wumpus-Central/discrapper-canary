n.d(r, { Ay: () => C, CY: () => m, ti: () => j });
var l,
    t = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(331322),
    c = n(990078),
    d = n(821609),
    o = n(123292),
    u = n(364840),
    x = n(999784),
    h = n(985018),
    p = n(613676),
    j =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let m = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    v = (e) => {
        let {
                primaryIcon: r,
                primaryCTA: n,
                primaryType: l,
                primaryText: s,
                primaryDisabled: i,
                primarySubmitting: a,
                onPrimary: c,
            } = e,
            o = {
                type: l,
                disabled: i,
                onClick: c,
                icon: null == r ? void 0 : () => (0, t.jsx)(r, { color: "currentColor", className: p.C4 }),
                loading: a,
                text: s,
            };
        return 2 === n ? (0, t.jsx)(d.$, { variant: m(n), ...o }) : (0, t.jsx)(d.$, { ...o, variant: m(n) });
    },
    A = (e) => {
        let {
                onBack: r,
                backText: n,
                primaryIcon: l,
                primaryCTA: s,
                primaryType: d,
                primaryText: j,
                primaryTooltip: m,
                primaryDisabled: A,
                primarySubmitting: C,
                onPrimary: E,
            } = e,
            N =
                null == r
                    ? null
                    : (0, t.jsx)(o.Q, { text: n ?? h.intl.string(h.t["13/7kX"]), onClick: r, variant: "secondary" }),
            k = (0, t.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, t.jsx)(x.A, {}),
                    (() => {
                        if (null == s || null == j) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: s,
                            primaryType: d,
                            primaryText: j,
                            primaryDisabled: A,
                            primarySubmitting: C,
                            onPrimary: E,
                        };
                        return null != m
                            ? (0, t.jsx)(c.m, { text: m, asContainer: !0, children: (0, t.jsx)(v, { ...e }) })
                            : (0, t.jsx)(v, { ...e, onPrimary: E });
                    })(),
                ],
            });
        return (0, t.jsx)(u.j, {
            children: (0, t.jsxs)("div", { className: i()(p.eT, { [p.T$]: null == N }), children: [N, k] }),
        });
    };
A.CTAType = j;
let C = A;
