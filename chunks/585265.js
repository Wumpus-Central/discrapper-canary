i.d(t, { default: () => p });
var _ = i(627968);
i(64700);
var n = i(158954),
    r = i(397927),
    a = i(744479),
    o = i(772538),
    s = i(61610),
    c = i(751461),
    d = i(638324),
    l = i(355097),
    b = i(985018);
function f(e) {
    let { guildId: t } = e;
    return (0, _.jsxs)(a.A, {
        children: [
            (0, _.jsx)(c.A, { ingress: l.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, _.jsx)(d.A, { ingress: l.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, _.jsx)(s.A, { ingress: l.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, _.jsx)(o.A, { ingress: l.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, _.jsx)(r.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: b.intl.format(b.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function p(e) {
    let { guild: t, transitionState: i, onClose: r } = e,
        a = `${b.intl.string(b.t.BayiAo)}—${null != t ? t.name : "??"}`;
    return (0, _.jsx)(n.Modal, {
        transitionState: i,
        size: "sm",
        title: a,
        actions: [{ onClick: () => r(), variant: "primary", text: b.intl.string(b.t.i4jeWR) }],
        onClose: () => Promise.resolve(r()),
        children: (0, _.jsx)(f, { guildId: t.id }),
    });
}
