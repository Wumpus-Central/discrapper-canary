n.d(t, { Ay: () => y, CY: () => E, ti: () => h });
var l,
    i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(331322),
    o = n(821609),
    u = n(123292),
    c = n(364840),
    d = n(866665),
    p = n(999784),
    m = n(375708),
    C = n(613676),
    h =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
function E(e) {
    return 2 === e ? "expressive" : 0 === e ? "primary" : "active";
}
function f(e) {
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
            icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: C.C4 }),
            loading: s,
            text: r,
        };
    return 2 === n ? (0, i.jsx)(o.$, { variant: E(n), ...c }) : (0, i.jsx)(o.$, { ...c, variant: E(n) });
}
function A(e) {
    let {
            onBack: t,
            backText: n,
            primaryIcon: l,
            primaryCTA: r,
            primaryType: o,
            primaryText: h,
            primaryTooltip: E,
            primaryDisabled: A,
            primarySubmitting: y,
            onPrimary: S,
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
                    if (null == r || null == h) return null;
                    let e = {
                        primaryIcon: l,
                        primaryCTA: r,
                        primaryType: o,
                        primaryText: h,
                        primaryDisabled: A,
                        primarySubmitting: y,
                        onPrimary: S,
                    };
                    return null != E
                        ? (0, i.jsx)(d.m, { text: E, asContainer: !0, children: (0, i.jsx)(f, { ...e }) })
                        : (0, i.jsx)(f, { ...e, onPrimary: S });
                })(),
            ],
        });
    return (0, i.jsx)(c.j, {
        children: (0, i.jsxs)("div", { className: a()(C.eT, { [C.T$]: null == P }), children: [P, I] }),
    });
}
A.CTAType = h;
let y = A;
