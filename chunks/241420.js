t.d(s, { default: () => p });
var n = t(951288);
t(647438);
var e = t(793030),
    r = t(481060),
    a = t(546957),
    d = t(190014),
    l = t(301812),
    o = t(988043),
    c = t(919539),
    u = t(526761),
    g = t(388032);
function R(i) {
    let { guildId: s } = i;
    return (0, n.jsxs)(a.Z, {
        children: [
            (0, n.jsx)(o.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(l.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(d.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: g.intl.format(g.t.LNsV09, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function p(i) {
    let { guild: s, transitionState: t, onClose: r } = i,
        a = "".concat(g.intl.string(g.t.BayiAg), "\u2014").concat(null != s ? s.name : "??");
    return (0, n.jsx)(e.Modal, {
        transitionState: t,
        size: "sm",
        title: a,
        actions: [
            {
                onClick: () => r(),
                variant: "primary",
                text: g.intl.string(g.t.i4jeWV),
            },
        ],
        onClose: () => Promise.resolve(r()),
        children: (0, n.jsx)(R, { guildId: s.id }),
    });
}
