n.d(e, { default: () => c });
var i = n(627968);
n(64700);
var d = n(158954),
    l = n(397927),
    s = n(744479),
    a = n(772538),
    r = n(61610),
    u = n(751461),
    h = n(638324),
    o = n(355097),
    b = n(985018);
function _(t) {
    let { guildId: e } = t;
    return (0, i.jsxs)(s.A, {
        children: [
            (0, i.jsx)(u.A, { ingress: o.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(h.A, { ingress: o.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(r.A, { ingress: o.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(a.A, { ingress: o.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: b.intl.format(b.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function c(t) {
    let { guild: e, transitionState: n, onClose: l } = t,
        s = `${b.intl.string(b.t.BayiAo)}—${null != e ? e.name : "??"}`;
    return (0, i.jsx)(d.Modal, {
        transitionState: n,
        size: "sm",
        title: s,
        actions: [{ onClick: () => l(), variant: "primary", text: b.intl.string(b.t.i4jeWR) }],
        onClose: () => Promise.resolve(l()),
        children: (0, i.jsx)(_, { guildId: e.id }),
    });
}
