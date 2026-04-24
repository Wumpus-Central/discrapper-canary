"use strict";
r.d(t, { Ay: () => v, CY: () => h, ti: () => m });
var i,
    a = r(627968);
r(64700);
var n = r(503698),
    s = r.n(n),
    l = r(331322),
    o = r(990078),
    c = r(821609),
    d = r(123292),
    u = r(364840),
    _ = r(999784),
    p = r(985018),
    f = r(613676),
    m =
        (((i = {})[(i.CONTINUE = 0)] = "CONTINUE"),
        (i[(i.UPGRADE = 1)] = "UPGRADE"),
        (i[(i.PURCHASE = 2)] = "PURCHASE"),
        i);
let h = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    b = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: r,
                primaryType: i,
                primaryText: n,
                primaryDisabled: s,
                primarySubmitting: l,
                onPrimary: o,
            } = e,
            d = {
                type: i,
                disabled: s,
                onClick: o,
                icon: null == t ? void 0 : () => (0, a.jsx)(t, { color: "currentColor", className: f.C4 }),
                loading: l,
                text: n,
            };
        return 2 === r ? (0, a.jsx)(c.$, { variant: h(r), ...d }) : (0, a.jsx)(c.$, { ...d, variant: h(r) });
    },
    g = (e) => {
        let {
                onBack: t,
                backText: r,
                primaryIcon: i,
                primaryCTA: n,
                primaryType: c,
                primaryText: m,
                primaryTooltip: h,
                primaryDisabled: g,
                primarySubmitting: v,
                onPrimary: A,
            } = e,
            E =
                null == t
                    ? null
                    : (0, a.jsx)(d.Q, { text: r ?? p.intl.string(p.t["13/7kX"]), onClick: t, variant: "secondary" }),
            I = (0, a.jsxs)(l.B, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [
                    (0, a.jsx)(_.A, {}),
                    (() => {
                        if (null == n || null == m) return null;
                        let e = {
                            primaryIcon: i,
                            primaryCTA: n,
                            primaryType: c,
                            primaryText: m,
                            primaryDisabled: g,
                            primarySubmitting: v,
                            onPrimary: A,
                        };
                        return null != h
                            ? (0, a.jsx)(o.m, { text: h, asContainer: !0, children: (0, a.jsx)(b, { ...e }) })
                            : (0, a.jsx)(b, { ...e, onPrimary: A });
                    })(),
                ],
            });
        return (0, a.jsx)(u.j, {
            children: (0, a.jsxs)("div", { className: s()(f.eT, { [f.T$]: null == E }), children: [E, I] }),
        });
    };
g.CTAType = m;
let v = g;
