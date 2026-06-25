"use strict";
n.d(t, { Ay: () => A, ti: () => p });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(331322),
    l = n(990078),
    u = n(821609),
    c = n(123292),
    d = n(364840),
    _ = n(999784),
    h = n(375708),
    f = n(503020),
    p =
        (((i = {})[(i.CONTINUE = 0)] = "CONTINUE"),
        (i[(i.UPGRADE = 1)] = "UPGRADE"),
        (i[(i.PURCHASE = 2)] = "PURCHASE"),
        i);
function E(e) {
    return 2 === e ? "expressive" : 0 === e ? "primary" : "active";
}
function m(e) {
    let {
            primaryIcon: t,
            primaryCTA: n,
            primaryType: i,
            primaryText: s,
            primaryDisabled: a,
            primarySubmitting: o,
            onPrimary: l,
        } = e,
        c = {
            type: i,
            disabled: a,
            onClick: l,
            icon: null == t ? void 0 : () => (0, r.jsx)(t, { color: "currentColor", className: f.C4 }),
            loading: o,
            text: s,
        };
    return 2 === n ? (0, r.jsx)(u.$, { variant: E(n), ...c }) : (0, r.jsx)(u.$, { ...c, variant: E(n) });
}
function g(e) {
    let {
            onBack: t,
            backText: n,
            primaryIcon: i,
            primaryCTA: s,
            primaryType: u,
            primaryText: p,
            primaryTooltip: E,
            primaryDisabled: g,
            primarySubmitting: A,
            onPrimary: I,
        } = e,
        T =
            null == t
                ? null
                : (0, r.jsx)(c.Q, { text: n ?? h.intl.string(h.t["13/7kX"]), onClick: t, variant: "secondary" }),
        S = (0, r.jsxs)(o.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            padding: 0,
            fullWidth: !1,
            children: [
                (0, r.jsx)(_.A, {}),
                (() => {
                    if (null == s || null == p) return null;
                    let e = {
                        primaryIcon: i,
                        primaryCTA: s,
                        primaryType: u,
                        primaryText: p,
                        primaryDisabled: g,
                        primarySubmitting: A,
                        onPrimary: I,
                    };
                    return null != E
                        ? (0, r.jsx)(l.m, { text: E, asContainer: !0, children: (0, r.jsx)(m, { ...e }) })
                        : (0, r.jsx)(m, { ...e, onPrimary: I });
                })(),
            ],
        });
    return (0, r.jsx)(d.j, {
        children: (0, r.jsxs)("div", { className: a()(f.eT, { [f.T$]: null == T }), children: [T, S] }),
    });
}
g.CTAType = p;
let A = g;
