"use strict";
n.d(t, { Ay: () => A, ti: () => h });
var r,
    i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(331322),
    l = n(990078),
    u = n(821609),
    c = n(123292),
    d = n(364840),
    _ = n(999784),
    f = n(985018),
    p = n(613676),
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
                primaryText: s,
                primaryDisabled: a,
                primarySubmitting: o,
                onPrimary: l,
            } = e,
            c = {
                type: r,
                disabled: a,
                onClick: l,
                icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: p.C4 }),
                loading: o,
                text: s,
            };
        return 2 === n ? (0, i.jsx)(u.$, { variant: E(n), ...c }) : (0, i.jsx)(u.$, { ...c, variant: E(n) });
    },
    g = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: r,
                primaryCTA: s,
                primaryType: u,
                primaryText: h,
                primaryTooltip: E,
                primaryDisabled: g,
                primarySubmitting: A,
                onPrimary: I,
            } = e,
            T =
                null == t
                    ? null
                    : (0, i.jsx)(c.Q, { text: n ?? f.intl.string(f.t["13/7kX"]), onClick: t, variant: "secondary" }),
            S = (0, i.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(_.A, {}),
                    (() => {
                        if (null == s || null == h) return null;
                        let e = {
                            primaryIcon: r,
                            primaryCTA: s,
                            primaryType: u,
                            primaryText: h,
                            primaryDisabled: g,
                            primarySubmitting: A,
                            onPrimary: I,
                        };
                        return null != E
                            ? (0, i.jsx)(l.m, { text: E, asContainer: !0, children: (0, i.jsx)(m, { ...e }) })
                            : (0, i.jsx)(m, { ...e, onPrimary: I });
                    })(),
                ],
            });
        return (0, i.jsx)(d.j, {
            children: (0, i.jsxs)("div", { className: a()(p.eT, { [p.T$]: null == T }), children: [T, S] }),
        });
    };
g.CTAType = h;
let A = g;
