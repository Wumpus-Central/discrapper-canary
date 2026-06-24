n.d(t, { Ay: () => E, ti: () => f });
var l,
    i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(331322),
    o = n(990078),
    u = n(821609),
    c = n(123292),
    d = n(364840),
    m = n(999784),
    h = n(375708),
    g = n(613676),
    f =
        (((l = {})[(l.CONTINUE = 0)] = "CONTINUE"),
        (l[(l.UPGRADE = 1)] = "UPGRADE"),
        (l[(l.PURCHASE = 2)] = "PURCHASE"),
        l);
function x(e) {
    return 2 === e ? "expressive" : 0 === e ? "primary" : "active";
}
function p(e) {
    let {
            primaryIcon: t,
            primaryCTA: n,
            primaryType: l,
            primaryText: s,
            primaryDisabled: r,
            primarySubmitting: a,
            onPrimary: o,
        } = e,
        c = {
            type: l,
            disabled: r,
            onClick: o,
            icon: null == t ? void 0 : () => (0, i.jsx)(t, { color: "currentColor", className: g.C4 }),
            loading: a,
            text: s,
        };
    return 2 === n ? (0, i.jsx)(u.$, { variant: x(n), ...c }) : (0, i.jsx)(u.$, { ...c, variant: x(n) });
}
function A(e) {
    let {
            onBack: t,
            backText: n,
            primaryIcon: l,
            primaryCTA: s,
            primaryType: u,
            primaryText: f,
            primaryTooltip: x,
            primaryDisabled: A,
            primarySubmitting: E,
            onPrimary: _,
        } = e,
        N =
            null == t
                ? null
                : (0, i.jsx)(c.Q, { text: n ?? h.intl.string(h.t["13/7kX"]), onClick: t, variant: "secondary" }),
        j = (0, i.jsxs)(a.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            padding: 0,
            fullWidth: !1,
            children: [
                (0, i.jsx)(m.A, {}),
                (() => {
                    if (null == s || null == f) return null;
                    let e = {
                        primaryIcon: l,
                        primaryCTA: s,
                        primaryType: u,
                        primaryText: f,
                        primaryDisabled: A,
                        primarySubmitting: E,
                        onPrimary: _,
                    };
                    return null != x
                        ? (0, i.jsx)(o.m, { text: x, asContainer: !0, children: (0, i.jsx)(p, { ...e }) })
                        : (0, i.jsx)(p, { ...e, onPrimary: _ });
                })(),
            ],
        });
    return (0, i.jsx)(d.j, {
        children: (0, i.jsxs)("div", { className: r()(g.eT, { [g.T$]: null == N }), children: [N, j] }),
    });
}
A.CTAType = f;
let E = A;
