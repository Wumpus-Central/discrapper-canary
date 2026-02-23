"use strict";
n.d(t, { Ay: () => m, ti: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(990078),
    l = n(732955),
    u = n(999784),
    c = n(985018),
    d = n(208555),
    _ = (function (e) {
        return (
            (e[(e.CONTINUE = 0)] = "CONTINUE"), (e[(e.UPGRADE = 1)] = "UPGRADE"), (e[(e.PURCHASE = 2)] = "PURCHASE"), e
        );
    })({});
let f = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    p = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: i,
                primaryText: s,
                primaryDisabled: a,
                primarySubmitting: o,
                onPrimary: u,
            } = e,
            c = {
                type: i,
                disabled: a,
                onClick: u,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: d.C4 }),
                loading: o,
                text: s,
            };
        return 2 === n ? (0, r.jsx)(l.$nd, { variant: f(n), ...c }) : (0, r.jsx)(l.$nd, { ...c, variant: f(n) });
    },
    h = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: i,
                primaryCTA: _,
                primaryType: f,
                primaryText: h,
                primaryTooltip: m,
                primaryDisabled: E,
                primarySubmitting: g,
                onPrimary: A,
            } = e,
            I = () => {
                if (null == _ || null == h) return null;
                let e = {
                    primaryIcon: i,
                    primaryCTA: _,
                    primaryType: f,
                    primaryText: h,
                    primaryDisabled: E,
                    primarySubmitting: g,
                    onPrimary: A,
                };
                return null != m
                    ? (0, r.jsx)(o.m, { text: m, asContainer: !0, children: (0, r.jsx)(p, { ...e }) })
                    : (0, r.jsx)(p, { ...e, onPrimary: A });
            },
            T =
                null == t
                    ? null
                    : (0, r.jsx)(l.QWc, { text: n ?? c.intl.string(c.t["13/7kX"]), onClick: t, variant: "secondary" }),
            S = (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [(0, r.jsx)(u.A, {}), I()],
            });
        return (0, r.jsx)(l.jlY, {
            children: (0, r.jsxs)("div", { className: s()(d.eT, { [d.T$]: null == T }), children: [T, S] }),
        });
    };
h.CTAType = _;
let m = h;
