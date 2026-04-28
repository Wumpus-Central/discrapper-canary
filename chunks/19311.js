e.d(n, { Ay: () => A, ti: () => j });
var l,
    i = e(627968);
e(64700);
var t = e(503698),
    s = e.n(t),
    a = e(331322),
    c = e(990078),
    d = e(821609),
    o = e(123292),
    u = e(364840),
    x = e(999784),
    v = e(985018),
    h = e(613676),
    j =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let m = (r) => (2 === r ? "expressive" : 0 === r ? "primary" : "active"),
    C = (r) => {
        let {
                primaryIcon: n,
                primaryCTA: e,
                primaryType: l,
                primaryText: t,
                primaryDisabled: s,
                primarySubmitting: a,
                onPrimary: c,
            } = r,
            o = {
                type: l,
                disabled: s,
                onClick: c,
                icon: null == n ? void 0 : () => (0, i.jsx)(n, { color: "currentColor", className: h.C4 }),
                loading: a,
                text: t,
            };
        return 2 === e ? (0, i.jsx)(d.$, { variant: m(e), ...o }) : (0, i.jsx)(d.$, { ...o, variant: m(e) });
    },
    p = (r) => {
        let {
                onBack: n,
                backText: e,
                primaryIcon: l,
                primaryCTA: t,
                primaryType: d,
                primaryText: j,
                primaryTooltip: m,
                primaryDisabled: p,
                primarySubmitting: A,
                onPrimary: E,
            } = r,
            N =
                null == n
                    ? null
                    : (0, i.jsx)(o.Q, { text: e ?? v.intl.string(v.t["13/7kX"]), onClick: n, variant: "secondary" }),
            k = (0, i.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(x.A, {}),
                    (() => {
                        if (null == t || null == j) return null;
                        let r = {
                            primaryIcon: l,
                            primaryCTA: t,
                            primaryType: d,
                            primaryText: j,
                            primaryDisabled: p,
                            primarySubmitting: A,
                            onPrimary: E,
                        };
                        return null != m
                            ? (0, i.jsx)(c.m, { text: m, asContainer: !0, children: (0, i.jsx)(C, { ...r }) })
                            : (0, i.jsx)(C, { ...r, onPrimary: E });
                    })(),
                ],
            });
        return (0, i.jsx)(u.j, {
            children: (0, i.jsxs)("div", { className: s()(h.eT, { [h.T$]: null == N }), children: [N, k] }),
        });
    };
p.CTAType = j;
let A = p;
