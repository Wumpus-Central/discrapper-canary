r.d(n, { Ay: () => C, CY: () => E, ti: () => j });
var l,
    t = r(627968);
r(64700);
var s = r(503698),
    i = r.n(s),
    a = r(331322),
    d = r(990078),
    o = r(821609),
    c = r(123292),
    u = r(364840),
    p = r(999784),
    x = r(375708),
    h = r(613676),
    j =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let E = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    v = (e) => {
        let {
                primaryIcon: n,
                primaryCTA: r,
                primaryType: l,
                primaryText: s,
                primaryDisabled: i,
                primarySubmitting: a,
                onPrimary: d,
            } = e,
            c = {
                type: l,
                disabled: i,
                onClick: d,
                icon: null == n ? void 0 : () => (0, t.jsx)(n, { color: "currentColor", className: h.C4 }),
                loading: a,
                text: s,
            };
        return 2 === r ? (0, t.jsx)(o.$, { variant: E(r), ...c }) : (0, t.jsx)(o.$, { ...c, variant: E(r) });
    },
    A = (e) => {
        let {
                onBack: n,
                backText: r,
                primaryIcon: l,
                primaryCTA: s,
                primaryType: o,
                primaryText: j,
                primaryTooltip: E,
                primaryDisabled: A,
                primarySubmitting: C,
                onPrimary: m,
            } = e,
            y =
                null == n
                    ? null
                    : (0, t.jsx)(c.Q, { text: r ?? x.intl.string(x.t["13/7kX"]), onClick: n, variant: "secondary" }),
            T = (0, t.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, t.jsx)(p.A, {}),
                    (() => {
                        if (null == s || null == j) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: s,
                            primaryType: o,
                            primaryText: j,
                            primaryDisabled: A,
                            primarySubmitting: C,
                            onPrimary: m,
                        };
                        return null != E
                            ? (0, t.jsx)(d.m, { text: E, asContainer: !0, children: (0, t.jsx)(v, { ...e }) })
                            : (0, t.jsx)(v, { ...e, onPrimary: m });
                    })(),
                ],
            });
        return (0, t.jsx)(u.j, {
            children: (0, t.jsxs)("div", { className: i()(h.eT, { [h.T$]: null == y }), children: [y, T] }),
        });
    };
A.CTAType = j;
let C = A;
