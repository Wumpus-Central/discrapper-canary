"use strict";
n.d(t, { A: () => m, t: () => f });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(990078),
    s = n(732955),
    o = n(397927),
    l = n(235986),
    u = n(156312),
    c = n(999784),
    d = n(985018),
    _ = n(208555),
    f = (function (e) {
        return (
            (e[(e.CONTINUE = 0)] = "CONTINUE"), (e[(e.UPGRADE = 1)] = "UPGRADE"), (e[(e.PURCHASE = 2)] = "PURCHASE"), e
        );
    })({});
let p = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: i,
                primaryText: a,
                primaryDisabled: o,
                primarySubmitting: l,
                onPrimary: u,
            } = e,
            c = {
                type: i,
                disabled: o,
                onClick: u,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: _.C }),
                loading: l,
                text: a,
            };
        return 2 === n
            ? (0, r.jsx)(s.$nd, { variant: "expressive", ...c })
            : (0, r.jsx)(s.$nd, { ...c, variant: 0 === n ? "primary" : "active" });
    },
    h = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: _,
                primaryCTA: f,
                primaryType: h,
                primaryText: m,
                primaryTooltip: g,
                primaryDisabled: E,
                primarySubmitting: A,
                onPrimary: I,
            } = e,
            { premiumBrandRefreshBackgroundClassName: T } = (0, u.P5)(),
            y = () => {
                if (null == f || null == m) return null;
                let e = {
                    primaryIcon: _,
                    primaryCTA: f,
                    primaryType: h,
                    primaryText: m,
                    primaryDisabled: E,
                    primarySubmitting: A,
                    onPrimary: I,
                };
                return null != g
                    ? (0, r.jsx)(a.m, { text: g, asContainer: !0, children: (0, r.jsx)(p, { ...e }) })
                    : (0, r.jsx)(p, { ...e, onPrimary: I });
            },
            S = () =>
                null == t
                    ? null
                    : (0, r.jsx)(s.QWc, { text: n ?? d.intl.string(d.t["13/7kX"]), onClick: t, variant: "secondary" });
        return (0, r.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            justify: l.A.Justify.BETWEEN,
            align: l.A.Align.CENTER,
            className: T,
            children: [
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal-reverse",
                    align: "center",
                    gap: 0,
                    padding: 0,
                    children: [y(), (0, r.jsx)(c.A, {})],
                }),
                S(),
            ],
        });
    };
h.CTAType = f;
let m = h;
