n.d(t, { Ay: () => S, CY: () => E, ti: () => C });
var l,
    i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(331322),
    o = n(990078),
    u = n(821609),
    c = n(123292),
    d = n(364840),
    p = n(999784),
    m = n(375708),
    h = n(613676),
    C =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
function E(e) {
    return 2 === e ? "expressive" : 0 === e ? "primary" : "active";
}
function A(e) {
    let {
            primaryIcon: t,
            primaryCTA: n,
            primaryType: l,
            primaryText: r,
            primaryDisabled: a,
            primarySubmitting: s,
            onPrimary: o,
        } = e,
        c = {
            type: l,
            disabled: a,
            onClick: o,
            icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: h.C4 }),
            loading: s,
            text: r,
        };
    return 2 === n ? (0, i.jsx)(u.$, { variant: E(n), ...c }) : (0, i.jsx)(u.$, { ...c, variant: E(n) });
}
function f(e) {
    let {
            onBack: t,
            backText: n,
            primaryIcon: l,
            primaryCTA: r,
            primaryType: u,
            primaryText: C,
            primaryTooltip: E,
            primaryDisabled: f,
            primarySubmitting: S,
            onPrimary: y,
        } = e,
        P =
            null == t
                ? null
                : (0, i.jsx)(c.Q, { text: n ?? m.intl.string(m.t["13/7kX"]), onClick: t, variant: "secondary" }),
        I = (0, i.jsxs)(s.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            padding: 0,
            fullWidth: !1,
            children: [
                (0, i.jsx)(p.A, {}),
                (() => {
                    if (null == r || null == C) return null;
                    let e = {
                        primaryIcon: l,
                        primaryCTA: r,
                        primaryType: u,
                        primaryText: C,
                        primaryDisabled: f,
                        primarySubmitting: S,
                        onPrimary: y,
                    };
                    return null != E
                        ? (0, i.jsx)(o.m, { text: E, asContainer: !0, children: (0, i.jsx)(A, { ...e }) })
                        : (0, i.jsx)(A, { ...e, onPrimary: y });
                })(),
            ],
        });
    return (0, i.jsx)(d.j, {
        children: (0, i.jsxs)("div", { className: a()(h.eT, { [h.T$]: null == P }), children: [P, I] }),
    });
}
f.CTAType = C;
let S = f;
