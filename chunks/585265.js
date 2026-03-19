n.d(e, { default: () => f });
var i = n(627968);
n(64700);
var d = n(158954),
    l = n(397927),
    a = n(772538),
    r = n(61610),
    s = n(751461),
    u = n(638324),
    o = n(505653),
    h = n(355097),
    b = n(985018);
function c(t) {
    let { guildId: e } = t;
    return (0, i.jsxs)(o.A, {
        children: [
            (0, i.jsx)(s.A, { ingress: h.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(u.A, { ingress: h.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(r.A, { ingress: h.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(a.A, { ingress: h.bf.SERVER_PRIVACY_MODAL, guildId: e }),
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
function f(t) {
    let { guild: e, transitionState: n, onClose: l } = t,
        a = `${b.intl.string(b.t.BayiAo)}—${null != e ? e.name : "??"}`;
    return (0, i.jsx)(d.Modal, {
        transitionState: n,
        size: "sm",
        title: a,
        actions: [{ onClick: () => l(), variant: "primary", text: b.intl.string(b.t.i4jeWR) }],
        onClose: () => Promise.resolve(l()),
        children: (0, i.jsx)(c, { guildId: e.id }),
    });
}
