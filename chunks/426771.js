n.d(t, { Z: () => m }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(28664),
    a = n(481060),
    s = n(607070),
    u = n(992046),
    c = n(838968),
    d = n(707541),
    p = n(857666),
    f = n(639560);
function m(e) {
    var t, n, m;
    let { guildId: g, group: v, powerups: x } = e,
        [_, b] = i.useState(!1),
        h = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        j = (0, p.Z)(v, g),
        C =
            !h && _
                ? null == j || null == (t = j.image)
                    ? void 0
                    : t.animatedUrl
                : null == j || null == (n = j.image)
                  ? void 0
                  : n.staticUrl,
        Z = (0, u.Z)({
            guildId: g,
            powerups: x,
        }),
        { textColor: w } = (0, d.Z)(null != (m = null == Z ? void 0 : Z.isActive) && m);
    if (null == Z || null == j) return null;
    let { status: I, cost: E, costDecorator: P } = Z;
    return (0, r.jsxs)(c.aB, {
        label: j.title,
        isActive: (null == I ? void 0 : I.type) === "active",
        isWarning: (null == I ? void 0 : I.type) === "expiring",
        badge: j.badge,
        onClick: () => j.openModal(x),
        onMouseOver: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: C,
                className: f.image,
            }),
            (0, r.jsx)(c.Q9, {
                title: j.title,
                textColor: w,
                footer: (0, r.jsx)(c.uf, {
                    status: I,
                    cost: E,
                    costDecorator: P,
                }),
                children: (0, r.jsx)(a.Text, {
                    className: f.description,
                    color: w,
                    variant: "text-sm/medium",
                    children: j.description,
                }),
            }),
            (0, r.jsx)(c.N4, {
                children:
                    (null == j ? void 0 : j.viewCtaTooltip) != null
                        ? (0, r.jsx)(o.u, {
                              asContainer: !0,
                              text: j.viewCtaTooltip,
                              delay: 100,
                              children: (0, r.jsx)(a.Button, {
                                  text: j.viewCta,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(a.Button, {
                              text: j.viewCta,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
