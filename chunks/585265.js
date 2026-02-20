s.d(t, { default: () => x });
var e = s(627968);
s(64700);
var n = s(158954),
    r = s(397927),
    l = s(744479),
    d = s(772538),
    a = s(61610),
    o = s(751461),
    c = s(638324),
    u = s(355097),
    A = s(985018);
function R(i) {
    let { guildId: t } = i;
    return (0, e.jsxs)(l.A, {
        children: [
            (0, e.jsx)(o.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(c.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(a.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(d.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, e.jsx)(r.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: A.intl.format(A.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function x(i) {
    let { guild: t, transitionState: s, onClose: r } = i,
        l = `${A.intl.string(A.t.BayiAo)}—${null != t ? t.name : "??"}`;
    return (0, e.jsx)(n.Modal, {
        transitionState: s,
        size: "sm",
        title: l,
        actions: [{ onClick: () => r(), variant: "primary", text: A.intl.string(A.t.i4jeWR) }],
        onClose: () => Promise.resolve(r()),
        children: (0, e.jsx)(R, { guildId: t.id }),
    });
}
