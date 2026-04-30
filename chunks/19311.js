l.d(n, { Ay: () => A, ti: () => j });
var e,
    i = l(627968);
l(64700);
var t = l(503698),
    a = l.n(t),
    s = l(331322),
    d = l(990078),
    c = l(821609),
    o = l(123292),
    u = l(364840),
    x = l(999784),
    v = l(985018),
    h = l(613676),
    j =
        (((e = {})[(e.CONTINUE = 0)] = "CONTINUE"),
        (e[(e.UPGRADE = 1)] = "UPGRADE"),
        (e[(e.PURCHASE = 2)] = "PURCHASE"),
        e);
let p = (r) => (2 === r ? "expressive" : 0 === r ? "primary" : "active"),
    C = (r) => {
        let {
                primaryIcon: n,
                primaryCTA: l,
                primaryType: e,
                primaryText: t,
                primaryDisabled: a,
                primarySubmitting: s,
                onPrimary: d,
            } = r,
            o = {
                type: e,
                disabled: a,
                onClick: d,
                icon: null == n ? void 0 : () => (0, i.jsx)(n, { color: "currentColor", className: h.C4 }),
                loading: s,
                text: t,
            };
        return 2 === l ? (0, i.jsx)(c.$, { variant: p(l), ...o }) : (0, i.jsx)(c.$, { ...o, variant: p(l) });
    },
    E = (r) => {
        let {
                onBack: n,
                backText: l,
                primaryIcon: e,
                primaryCTA: t,
                primaryType: c,
                primaryText: j,
                primaryTooltip: p,
                primaryDisabled: E,
                primarySubmitting: A,
                onPrimary: T,
            } = r,
            m =
                null == n
                    ? null
                    : (0, i.jsx)(o.Q, { text: l ?? v.intl.string(v.t["13/7kX"]), onClick: n, variant: "secondary" }),
            k = (0, i.jsxs)(s.B, {
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
                            primaryIcon: e,
                            primaryCTA: t,
                            primaryType: c,
                            primaryText: j,
                            primaryDisabled: E,
                            primarySubmitting: A,
                            onPrimary: T,
                        };
                        return null != p
                            ? (0, i.jsx)(d.m, { text: p, asContainer: !0, children: (0, i.jsx)(C, { ...r }) })
                            : (0, i.jsx)(C, { ...r, onPrimary: T });
                    })(),
                ],
            });
        return (0, i.jsx)(u.j, {
            children: (0, i.jsxs)("div", { className: a()(h.eT, { [h.T$]: null == m }), children: [m, k] }),
        });
    };
E.CTAType = j;
let A = E;
