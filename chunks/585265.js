"use strict";
n.d(t, { default: () => b });
var o = n(627968);
n(64700);
var r = n(158954),
    i = n(397927),
    a = n(744479),
    c = n(772538),
    s = n(61610),
    l = n(751461),
    d = n(638324),
    u = n(355097),
    _ = n(985018);
function f(e) {
    let { guildId: t } = e;
    return (0, o.jsxs)(a.A, {
        children: [
            (0, o.jsx)(l.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, o.jsx)(d.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, o.jsx)(s.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, o.jsx)(c.A, { ingress: u.bf.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, o.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.format(_.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function b(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        a = `${_.intl.string(_.t.BayiAo)}—${null != t ? t.name : "??"}`;
    return (0, o.jsx)(r.Modal, {
        transitionState: n,
        size: "sm",
        title: a,
        actions: [{ onClick: () => i(), variant: "primary", text: _.intl.string(_.t.i4jeWR) }],
        onClose: () => Promise.resolve(i()),
        children: (0, o.jsx)(f, { guildId: t.id }),
    });
}
