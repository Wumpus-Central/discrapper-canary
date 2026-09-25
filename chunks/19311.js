n.d(t, { Ay: () => y, CY: () => f, ti: () => h });
var l,
    i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(821609),
    o = n(123292),
    u = n(364840),
    c = n(866665),
    d = n(331322),
    m = n(999784),
    p = n(375708),
    C = n(88045),
    h =
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
            primarySubmitting: o,
            onPrimary: u,
        } = e,
        c = {
            type: l,
            disabled: a,
            onClick: u,
            icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: C.C4 }),
            loading: o,
            text: r,
        };
    return 2 === n ? (0, i.jsx)(s.$, { variant: f(n), ...c }) : (0, i.jsx)(s.$, { ...c, variant: f(n) });
}
function S(e) {
    let {
            onBack: t,
            backText: n,
            primaryIcon: l,
            primaryCTA: r,
            primaryType: s,
            primaryText: h,
            primaryTooltip: f,
            primaryDisabled: S,
            primarySubmitting: y,
            onPrimary: I,
        } = e,
        g =
            null == t
                ? null
                : (0, i.jsx)(o.Q, { text: n ?? p.intl.string(p.t["13/7kX"]), onClick: t, variant: "secondary" }),
        A = (0, i.jsxs)(d.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            padding: 0,
            fullWidth: !1,
            children: [
                (0, i.jsx)(m.A, {}),
                (function () {
                    if (null == r || null == h) return null;
                    let e = {
                        primaryIcon: l,
                        primaryCTA: r,
                        primaryType: s,
                        primaryText: h,
                        primaryDisabled: S,
                        primarySubmitting: y,
                        onPrimary: I,
                    };
                    return null != f
                        ? (0, i.jsx)(c.m, { text: f, asContainer: !0, children: (0, i.jsx)(E, { ...e }) })
                        : (0, i.jsx)(E, { ...e, onPrimary: I });
                })(),
            ],
        });
    return (0, i.jsx)(u.j, {
        children: (0, i.jsxs)("div", { className: a()(C.eT, { [C.T$]: null == g }), children: [g, A] }),
    });
}
S.CTAType = h;
let y = S;
