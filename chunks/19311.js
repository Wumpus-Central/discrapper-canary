n.d(t, { Ay: () => m, ti: () => h });
var l,
    i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(331322),
    u = n(990078),
    o = n(821609),
    c = n(123292),
    d = n(364840),
    E = n(999784),
    f = n(375708),
    A = n(613676),
    h =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
let p = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    S = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: l,
                primaryText: r,
                primaryDisabled: a,
                primarySubmitting: s,
                onPrimary: u,
            } = e,
            c = {
                type: l,
                disabled: a,
                onClick: u,
                icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: A.C4 }),
                loading: s,
                text: r,
            };
        return 2 === n ? (0, i.jsx)(o.$, { variant: p(n), ...c }) : (0, i.jsx)(o.$, { ...c, variant: p(n) });
    },
    g = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: l,
                primaryCTA: r,
                primaryType: o,
                primaryText: h,
                primaryTooltip: p,
                primaryDisabled: g,
                primarySubmitting: m,
                onPrimary: C,
            } = e,
            y =
                null == t
                    ? null
                    : (0, i.jsx)(c.Q, { text: n ?? f.intl.string(f.t["13/7kX"]), onClick: t, variant: "secondary" }),
            _ = (0, i.jsxs)(s.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(E.A, {}),
                    (() => {
                        if (null == r || null == h) return null;
                        let e = {
                            primaryIcon: l,
                            primaryCTA: r,
                            primaryType: o,
                            primaryText: h,
                            primaryDisabled: g,
                            primarySubmitting: m,
                            onPrimary: C,
                        };
                        return null != p
                            ? (0, i.jsx)(u.m, { text: p, asContainer: !0, children: (0, i.jsx)(S, { ...e }) })
                            : (0, i.jsx)(S, { ...e, onPrimary: C });
                    })(),
                ],
            });
        return (0, i.jsx)(d.j, {
            children: (0, i.jsxs)("div", { className: a()(A.eT, { [A.T$]: null == y }), children: [y, _] }),
        });
    };
g.CTAType = h;
let m = g;
