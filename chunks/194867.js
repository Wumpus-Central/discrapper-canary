l.d(t, {
    A: () => m,
}),
    l(896048),
    l(228524);
var r = l(627968),
    n = l(64700),
    i = l(311907),
    s = l(990078),
    o = l(397927),
    a = l(775602),
    u = l(600941),
    d = l(890942),
    c = l(744201),
    f = l(271484),
    p = l(628743);

function m(e) {
    var t, l, m;
    let { guildId: v, group: A, powerups: g } = e,
        [x, b] = n.useState(!1),
        h = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        j = (0, f.A)(A, v),
        _ =
            !h && x
                ? null == j || null == (l = j.image)
                    ? void 0
                    : l.animatedUrl
                : null == j || null == (m = j.image)
                  ? void 0
                  : m.staticUrl,
        E = (0, u.A)({
            guildId: v,
            powerups: g,
        }),
        { textColor: y } = (0, c.A)(null != (t = null == E ? void 0 : E.isActive) && t);
    if (null == E || null == j) return null;
    let { status: I, cost: S, costDecorator: w } = E;
    return (0, r.jsxs)(d.NI, {
        label: j.title,
        isActive: (null == I ? void 0 : I.type) === "active",
        isWarning: (null == I ? void 0 : I.type) === "expiring",
        badge: j.badge,
        onClick: () => j.openModal(g),
        onMouseOver: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: _,
                className: p.S,
            }),
            (0, r.jsx)(d.Ft, {
                title: j.title,
                textColor: y,
                footer: (0, r.jsx)(d.$L, {
                    status: I,
                    cost: S,
                    costDecorator: w,
                }),
                children: (0, r.jsx)(o.Text, {
                    className: p.h,
                    color: y,
                    variant: "text-sm/medium",
                    children: j.description,
                }),
            }),
            (0, r.jsx)(d.kd, {
                children:
                    (null == j ? void 0 : j.viewCtaTooltip) != null
                        ? (0, r.jsx)(s.m, {
                              asContainer: !0,
                              text: j.viewCtaTooltip,
                              delay: 100,
                              children: (0, r.jsx)(o.Button, {
                                  text: j.viewCta,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(o.Button, {
                              text: j.viewCta,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
