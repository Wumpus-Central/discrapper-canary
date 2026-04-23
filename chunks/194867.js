n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    a = n(834730),
    o = n(821609),
    d = n(775602),
    u = n(600941),
    c = n(890942),
    _ = n(744201),
    m = n(271484),
    p = n(401996);
function A(e) {
    let { guildId: t, group: n, powerups: A } = e,
        [x, g] = i.useState(!1),
        f = (0, l.bG)([d.A], () => d.A.useReducedMotion),
        h = (0, m.A)(n, t),
        v = !f && x ? h?.image?.animatedUrl : h?.image?.staticUrl,
        E = (0, u.A)({ guildId: t, powerups: A }),
        { textColor: S } = (0, _.A)(E?.isActive ?? !1);
    if (null == E || null == h) return null;
    let { status: I, cost: b, costDecorator: j } = E;
    return (0, r.jsxs)(c.NI, {
        label: h.title,
        isActive: I?.type === "active",
        isWarning: I?.type === "expiring",
        badge: h.badge,
        onClick: () => h.openModal(A),
        onMouseOver: () => g(!0),
        onMouseLeave: () => g(!1),
        children: [
            (0, r.jsx)("img", { alt: "", src: v, className: p.S }),
            (0, r.jsx)(c.Ft, {
                title: h.title,
                textColor: S,
                footer: (0, r.jsx)(c.$L, { status: I, cost: b, costDecorator: j }),
                children: (0, r.jsx)(a.E, {
                    className: p.h,
                    color: S,
                    variant: "text-sm/medium",
                    children: h.description,
                }),
            }),
            (0, r.jsx)(c.kd, {
                children:
                    h?.viewCtaTooltip != null
                        ? (0, r.jsx)(s.m, {
                              asContainer: !0,
                              text: h.viewCtaTooltip,
                              delay: 100,
                              children: (0, r.jsx)(o.$, { text: h.viewCta, fullWidth: !0 }),
                          })
                        : (0, r.jsx)(o.$, { text: h.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
