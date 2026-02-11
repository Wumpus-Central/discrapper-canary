n.d(_, { default: () => u });
var a = n(627968);
n(64700);
var r = n(158954),
    o = n(397927),
    t = n(744479),
    c = n(772538),
    i = n(61610),
    s = n(751461),
    l = n(638324),
    d = n(355097),
    b = n(985018);
function p(e) {
    let { guildId: _ } = e;
    return (0, a.jsxs)(t.A, {
        children: [
            (0, a.jsx)(s.A, { ingress: d.bf.SERVER_PRIVACY_MODAL, guildId: _ }),
            (0, a.jsx)(l.A, { ingress: d.bf.SERVER_PRIVACY_MODAL, guildId: _ }),
            (0, a.jsx)(i.A, { ingress: d.bf.SERVER_PRIVACY_MODAL, guildId: _ }),
            (0, a.jsx)(c.A, { ingress: d.bf.SERVER_PRIVACY_MODAL, guildId: _ }),
            (0, a.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: b.intl.format(b.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function u(e) {
    let { guild: _, transitionState: n, onClose: o } = e,
        t = `${b.intl.string(b.t.BayiAo)}—${null != _ ? _.name : "??"}`;
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        size: "sm",
        title: t,
        actions: [{ onClick: () => o(), variant: "primary", text: b.intl.string(b.t.i4jeWR) }],
        onClose: () => Promise.resolve(o()),
        children: (0, a.jsx)(p, { guildId: _.id }),
    });
}
