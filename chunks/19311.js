"use strict";
n.d(t, { Ay: () => I, ti: () => p });
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
    h = n(208555),
    p = (function (e) {
        return (
            (e[(e.CONTINUE = 0)] = "CONTINUE"), (e[(e.UPGRADE = 1)] = "UPGRADE"), (e[(e.PURCHASE = 2)] = "PURCHASE"), e
        );
    })({});
let g = (e) => (2 === e ? "expressive" : 0 === e ? "primary" : "active"),
    E = (e) => {
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
                icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: h.C4 }),
                loading: o,
                text: a,
            };
        return 2 === n ? (0, r.jsx)(l.$nd, { variant: g(n), ...c }) : (0, r.jsx)(l.$nd, { ...c, variant: g(n) });
    },
    A = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: i,
                primaryCTA: p,
                primaryType: g,
                primaryText: A,
                primaryTooltip: I,
                primaryDisabled: T,
                primarySubmitting: y,
                onPrimary: S,
                shouldUseManaModal: v = !0,
            } = e,
            { premiumBrandRefreshBackgroundClassName: C } = (0, d.P5)(),
            b = () => {
                if (null == p || null == A) return null;
                let e = {
                    primaryIcon: i,
                    primaryCTA: p,
                    primaryType: g,
                    primaryText: A,
                    primaryDisabled: T,
                    primarySubmitting: y,
                    onPrimary: S,
                };
                return null != I
                    ? (0, r.jsx)(o.m, { text: I, asContainer: !0, children: (0, r.jsx)(E, { ...e }) })
                    : (0, r.jsx)(E, { ...e, onPrimary: S });
            },
            N =
                null == t
                    ? null
                    : (0, r.jsx)(l.QWc, { text: n ?? f.intl.string(f.t["13/7kX"]), onClick: t, variant: "secondary" }),
            R = (0, r.jsxs)(s.BJc, {
                direction: "horizontal",
                align: "center",
                gap: 0,
                padding: 0,
                fullWidth: !1,
                children: [(0, r.jsx)(_.A, {}), b()],
            });
        return v
            ? (0, r.jsx)(l.jlY, {
                  children: (0, r.jsxs)("div", { className: a()(h.eT, { [h.T$]: null == N }), children: [N, R] }),
              })
            : (0, r.jsxs)(u.jlY, {
                  "data-migration-pending": !0,
                  justify: c.A.Justify.BETWEEN,
                  align: c.A.Align.CENTER,
                  className: C,
                  children: [R, N],
              });
    };
A.CTAType = p;
let I = A;
