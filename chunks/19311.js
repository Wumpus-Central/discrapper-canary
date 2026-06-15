n.d(t, { Ay: () => f, ti: () => C });
var r,
    l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(331322),
    o = n(990078),
    c = n(821609),
    d = n(123292),
    u = n(364840),
    E = n(999784),
    m = n(375708),
    A = n(613676),
    C =
        (((r = {})[(r.CONTINUE = 0)] = "CONTINUE"),
        (r[(r.UPGRADE = 1)] = "UPGRADE"),
        (r[(r.PURCHASE = 2)] = "PURCHASE"),
        r);
let h = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    N = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: r,
                primaryText: a,
                primaryDisabled: i,
                primarySubmitting: s,
                onPrimary: o,
            } = e,
            d = {
                type: r,
                disabled: i,
                onClick: o,
                icon: null == t ? void 0 : () => (0, l.jsx)(t, { color: "currentColor", className: A.C4 }),
                loading: s,
                text: a,
            };
        return 2 === n ? (0, l.jsx)(c.$, { variant: h(n), ...d }) : (0, l.jsx)(c.$, { ...d, variant: h(n) });
    },
    _ = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: r,
                primaryCTA: a,
                primaryType: c,
                primaryText: C,
                primaryTooltip: h,
                primaryDisabled: _,
                primarySubmitting: f,
                onPrimary: x,
            } = e,
            y =
                null == t
                    ? null
                    : (0, l.jsx)(d.Q, { text: n ?? m.intl.string(m.t["13/7kX"]), onClick: t, variant: "secondary" }),
            v = (0, l.jsxs)(s.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(E.A, {}),
                    (() => {
                        if (null == a || null == C) return null;
                        let e = {
                            primaryIcon: r,
                            primaryCTA: a,
                            primaryType: c,
                            primaryText: C,
                            primaryDisabled: _,
                            primarySubmitting: f,
                            onPrimary: x,
                        };
                        return null != h
                            ? (0, l.jsx)(o.m, { text: h, asContainer: !0, children: (0, l.jsx)(N, { ...e }) })
                            : (0, l.jsx)(N, { ...e, onPrimary: x });
                    })(),
                ],
            });
        return (0, l.jsx)(u.j, {
            children: (0, l.jsxs)("div", { className: i()(A.eT, { [A.T$]: null == y }), children: [y, v] }),
        });
    };
_.CTAType = C;
let f = _;
