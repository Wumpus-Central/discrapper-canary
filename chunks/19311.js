n.d(t, { Ay: () => y, CY: () => f, ti: () => C });
var l,
    i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(331322),
    o = n(821609),
    u = n(123292),
    c = n(364840),
    d = n(866665),
    p = n(999784),
    m = n(375708),
    h = n(88045),
    C =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
function f(e) {
    return 2 === e ? "expressive" : 0 === e ? "primary" : "active";
}
function E(e) {
    let {
            primaryIcon: t,
            primaryCTA: n,
            primaryType: l,
            primaryText: r,
            primaryDisabled: a,
            primarySubmitting: s,
            onPrimary: u,
        } = e,
        c = {
            type: l,
            disabled: a,
            onClick: u,
            icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: h.C4 }),
            loading: s,
            text: r,
        };
    return 2 === n ? (0, i.jsx)(o.$, { variant: f(n), ...c }) : (0, i.jsx)(o.$, { ...c, variant: f(n) });
}
function S(e) {
    let {
            onBack: t,
            backText: n,
            primaryIcon: l,
            primaryCTA: r,
            primaryType: o,
            primaryText: C,
            primaryTooltip: f,
            primaryDisabled: S,
            primarySubmitting: y,
            onPrimary: A,
        } = e,
        P =
            null == t
                ? null
                : (0, i.jsx)(u.Q, { text: n ?? m.intl.string(m.t["13/7kX"]), onClick: t, variant: "secondary" }),
        I = (0, i.jsxs)(s.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            padding: 0,
            fullWidth: !1,
            children: [
                (0, i.jsx)(p.A, {}),
                (function () {
                    if (null == r || null == C) return null;
                    let e = {
                        primaryIcon: l,
                        primaryCTA: r,
                        primaryType: o,
                        primaryText: C,
                        primaryDisabled: S,
                        primarySubmitting: y,
                        onPrimary: A,
                    };
                    return null != f
                        ? (0, i.jsx)(d.m, { text: f, asContainer: !0, children: (0, i.jsx)(E, { ...e }) })
                        : (0, i.jsx)(E, { ...e, onPrimary: A });
                })(),
            ],
        });
    return (0, i.jsx)(c.j, {
        children: (0, i.jsxs)("div", { className: a()(h.eT, { [h.T$]: null == P }), children: [P, I] }),
    });
}
S.CTAType = C;
let y = S;
