n.d(t, { Z: () => m }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(992046),
    u = n(838968),
    d = n(707541),
    f = n(857666),
    p = n(699261);
function m(e) {
    var t, n, m;
    let { guildId: g, group: v, powerups: x } = e,
        [b, h] = i.useState(!1),
        j = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        _ = (0, f.Z)(v, g),
        C =
            !j && b
                ? null == _ || null == (t = _.image)
                    ? void 0
                    : t.animatedUrl
                : null == _ || null == (n = _.image)
                  ? void 0
                  : n.staticUrl,
        Z = (0, c.Z)({
            guildId: g,
            powerups: x,
        }),
        { textColor: w } = (0, d.Z)(null != (m = null == Z ? void 0 : Z.isActive) && m);
    if (null == Z || null == _) return null;
    let { status: I, cost: E, costDecorator: P } = Z;
    return (0, r.jsxs)(u.aB, {
        label: _.title,
        isActive: (null == I ? void 0 : I.type) === "active",
        isWarning: (null == I ? void 0 : I.type) === "expiring",
        badge: _.badge,
        onClick: () => _.openModal(x),
        onMouseOver: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: C,
                className: p.image,
            }),
            (0, r.jsx)(u.Q9, {
                title: _.title,
                textColor: w,
                footer: (0, r.jsx)(u.uf, {
                    status: I,
                    cost: E,
                    costDecorator: P,
                }),
                children: (0, r.jsx)(a.Text, {
                    className: p.description,
                    color: w,
                    variant: "text-sm/medium",
                    children: _.description,
                }),
            }),
            (0, r.jsx)(u.N4, {
                children:
                    (null == _ ? void 0 : _.viewCtaTooltip) != null
                        ? (0, r.jsx)(o.u, {
                              asContainer: !0,
                              text: _.viewCtaTooltip,
                              delay: 100,
                              children: (0, r.jsx)(a.Button, {
                                  text: _.viewCta,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(a.Button, {
                              text: _.viewCta,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
