"use strict";
n.d(t, { A: () => E, t: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(990078),
    l = n(732955),
    u = n(397927),
    c = n(235986),
    d = n(156312),
    _ = n(999784),
    f = n(985018),
    p = n(208555),
    h = (function (e) {
        return (
            (e[(e.CONTINUE = 0)] = "CONTINUE"), (e[(e.UPGRADE = 1)] = "UPGRADE"), (e[(e.PURCHASE = 2)] = "PURCHASE"), e
        );
    })({});
let m = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: i,
                primaryText: a,
                primaryDisabled: s,
                primarySubmitting: o,
                onPrimary: u,
            } = e,
            c = {
                type: i,
                disabled: s,
                onClick: u,
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: p.C4 }),
                loading: o,
                text: a,
            };
        return 2 === n
            ? (0, r.jsx)(l.$nd, { variant: "expressive", ...c })
            : (0, r.jsx)(l.$nd, { ...c, variant: 0 === n ? "primary" : "active" });
    },
    g = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: i,
                primaryCTA: h,
                primaryType: g,
                primaryText: E,
                primaryTooltip: A,
                primaryDisabled: I,
                primarySubmitting: T,
                onPrimary: S,
                shouldUseManaModal: y = !1,
            } = e,
            { premiumBrandRefreshBackgroundClassName: v } = (0, d.P5)(),
            C = () => {
                if (null == h || null == E) return null;
                let e = {
                    primaryIcon: i,
                    primaryCTA: h,
                    primaryType: g,
                    primaryText: E,
                    primaryDisabled: I,
                    primarySubmitting: T,
                    onPrimary: S,
                };
                return null != A
                    ? (0, r.jsx)(o.m, { text: A, asContainer: !0, children: (0, r.jsx)(m, { ...e }) })
                    : (0, r.jsx)(m, { ...e, onPrimary: S });
            },
            N =
                null == t
                    ? null
                    : (0, r.jsx)(l.QWc, { text: n ?? f.intl.string(f.t["13/7kX"]), onClick: t, variant: "secondary" }),
            b = (0, r.jsxs)(s.BJc, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [(0, r.jsx)(_.A, {}), C()],
            });
        return y
            ? (0, r.jsx)(l.jlY, {
                  children: (0, r.jsxs)("div", { className: a()(p.eT, { [p.T$]: null == N }), children: [N, b] }),
              })
            : (0, r.jsxs)(u.jlY, {
                  "data-migration-pending": !0,
                  justify: c.A.Justify.BETWEEN,
                  align: c.A.Align.CENTER,
                  className: v,
                  children: [b, N],
              });
    };
g.CTAType = h;
let E = g;
