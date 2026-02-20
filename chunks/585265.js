s.d(i, { default: () => A });
var e = s(627968);
s(64700);
var n = s(158954),
    r = s(397927),
    a = s(744479),
    o = s(772538),
    l = s(61610),
    c = s(751461),
    d = s(638324),
    _ = s(355097),
    u = s(985018);
function x(t) {
    let { guildId: i } = t;
    return (0, e.jsxs)(a.A, {
        children: [
            (0, e.jsx)(c.A, { ingress: _.bf.SERVER_PRIVACY_MODAL, guildId: i }),
            (0, e.jsx)(d.A, { ingress: _.bf.SERVER_PRIVACY_MODAL, guildId: i }),
            (0, e.jsx)(l.A, { ingress: _.bf.SERVER_PRIVACY_MODAL, guildId: i }),
            (0, e.jsx)(o.A, { ingress: _.bf.SERVER_PRIVACY_MODAL, guildId: i }),
            (0, e.jsx)(r.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: u.intl.format(u.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function A(t) {
    let { guild: i, transitionState: s, onClose: r } = t,
        a = `${u.intl.string(u.t.BayiAo)}—${null != i ? i.name : "??"}`;
    return (0, e.jsx)(n.Modal, {
        transitionState: s,
        size: "sm",
        title: a,
        actions: [{ onClick: () => r(), variant: "primary", text: u.intl.string(u.t.i4jeWR) }],
        onClose: () => Promise.resolve(r()),
        children: (0, e.jsx)(x, { guildId: i.id }),
    });
}
