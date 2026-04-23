n.d(t, { Ay: () => I, ti: () => h });
var r,
    a = n(627968);
n(64700);
var i = n(503698),
    o = n.n(i),
    l = n(331322),
    s = n(990078),
    d = n(821609),
    u = n(123292),
    c = n(364840),
    _ = n(999784),
    p = n(985018),
    C = n(613676),
    h =
        (((r = {})[(r.CONTINUE = 0)] = "CONTINUE"),
        (r[(r.UPGRADE = 1)] = "UPGRADE"),
        (r[(r.PURCHASE = 2)] = "PURCHASE"),
        r);
let E = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    m = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: r,
                primaryText: i,
                primaryDisabled: o,
                primarySubmitting: l,
                onPrimary: s,
            } = e,
            u = {
                type: r,
                disabled: o,
                onClick: s,
                icon: null == t ? void 0 : () => (0, a.jsx)(t, { color: "currentColor", className: C.C4 }),
                loading: l,
                text: i,
            };
        return 2 === n ? (0, a.jsx)(d.$, { variant: E(n), ...u }) : (0, a.jsx)(d.$, { ...u, variant: E(n) });
    },
    A = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: r,
                primaryCTA: i,
                primaryType: d,
                primaryText: h,
                primaryTooltip: E,
                primaryDisabled: A,
                primarySubmitting: I,
                onPrimary: T,
            } = e,
            y =
                null == t
                    ? null
                    : (0, a.jsx)(u.Q, { text: n ?? p.intl.string(p.t["13/7kX"]), onClick: t, variant: "secondary" }),
            g = (0, a.jsxs)(l.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, a.jsx)(_.A, {}),
                    (() => {
                        if (null == i || null == h) return null;
                        let e = {
                            primaryIcon: r,
                            primaryCTA: i,
                            primaryType: d,
                            primaryText: h,
                            primaryDisabled: A,
                            primarySubmitting: I,
                            onPrimary: T,
                        };
                        return null != E
                            ? (0, a.jsx)(s.m, { text: E, asContainer: !0, children: (0, a.jsx)(m, { ...e }) })
                            : (0, a.jsx)(m, { ...e, onPrimary: T });
                    })(),
                ],
            });
        return (0, a.jsx)(c.j, {
            children: (0, a.jsxs)("div", { className: o()(C.eT, { [C.T$]: null == y }), children: [y, g] }),
        });
    };
A.CTAType = h;
let I = A;
