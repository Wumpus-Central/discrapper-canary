t.d(s, { default: () => p });
var n = t(54381);
t(473749);
var e = t(793030),
    r = t(481060),
    o = t(546957),
    a = t(190014),
    d = t(301812),
    l = t(988043),
    c = t(919539),
    u = t(526761),
    R = t(388032);
function g(i) {
    let { guildId: s } = i;
    return (0, n.jsxs)(o.Z, {
        children: [
            (0, n.jsx)(l.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(d.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(a.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: s,
            }),
            (0, n.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: R.intl.format(R.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function p(i) {
    let { guild: s, transitionState: t, onClose: r } = i,
        o = "".concat(R.intl.string(R.t.BayiAo), "\u2014").concat(null != s ? s.name : "??");
    return (0, n.jsx)(e.Modal, {
        transitionState: t,
        size: "sm",
        title: o,
        actions: [
            {
                onClick: () => r(),
                variant: "primary",
                text: R.intl.string(R.t.i4jeWR),
            },
        ],
        onClose: () => Promise.resolve(r()),
        children: (0, n.jsx)(g, { guildId: s.id }),
    });
}
