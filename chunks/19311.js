"use strict";
a.d(t, { Ay: () => x, CY: () => b, ti: () => m });
var r,
    l = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    s = a(331322),
    o = a(990078),
    d = a(821609),
    c = a(123292),
    u = a(364840),
    h = a(999784),
    p = a(985018),
    _ = a(613676),
    m =
        (((r = {})[(r.CONTINUE = 0)] = "CONTINUE"),
        (r[(r.UPGRADE = 1)] = "UPGRADE"),
        (r[(r.PURCHASE = 2)] = "PURCHASE"),
        r);
let b = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    g = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: a,
                primaryType: r,
                primaryText: n,
                primaryDisabled: i,
                primarySubmitting: s,
                onPrimary: o,
            } = e,
            c = {
                type: r,
                disabled: i,
                onClick: o,
                icon: null == t ? void 0 : () => (0, l.jsx)(t, { color: "currentColor", className: _.C4 }),
                loading: s,
                text: n,
            };
        return 2 === a ? (0, l.jsx)(d.$, { variant: b(a), ...c }) : (0, l.jsx)(d.$, { ...c, variant: b(a) });
    },
    f = (e) => {
        let {
                onBack: t,
                backText: a,
                primaryIcon: r,
                primaryCTA: n,
                primaryType: d,
                primaryText: m,
                primaryTooltip: b,
                primaryDisabled: f,
                primarySubmitting: x,
                onPrimary: v,
            } = e,
            A =
                null == t
                    ? null
                    : (0, l.jsx)(c.Q, { text: a ?? p.intl.string(p.t["13/7kX"]), onClick: t, variant: "secondary" }),
            E = (0, l.jsxs)(s.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(h.A, {}),
                    (() => {
                        if (null == n || null == m) return null;
                        let e = {
                            primaryIcon: r,
                            primaryCTA: n,
                            primaryType: d,
                            primaryText: m,
                            primaryDisabled: f,
                            primarySubmitting: x,
                            onPrimary: v,
                        };
                        return null != b
                            ? (0, l.jsx)(o.m, { text: b, asContainer: !0, children: (0, l.jsx)(g, { ...e }) })
                            : (0, l.jsx)(g, { ...e, onPrimary: v });
                    })(),
                ],
            });
        return (0, l.jsx)(u.j, {
            children: (0, l.jsxs)("div", { className: i()(_.eT, { [_.T$]: null == A }), children: [A, E] }),
        });
    };
f.CTAType = m;
let x = f;
