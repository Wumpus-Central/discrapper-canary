i.d(e, { default: () => _ });
var n = i(627968);
i(64700);
var l = i(158954),
    r = i(397927),
    s = i(505653),
    d = i(688716),
    a = i(691172),
    u = i(606319),
    o = i(65010),
    S = i(355097),
    A = i(985018);
function g(t) {
    let { guildId: e } = t;
    return (0, n.jsxs)(s.A, {
        children: [
            (0, n.jsx)(u.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(o.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(a.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(d.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(r.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: A.intl.format(A.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function _(t) {
    let { guild: e, transitionState: i, onClose: r } = t,
        s = `${A.intl.string(A.t.BayiAo)}—${null != e ? e.name : "??"}`;
    return (0, n.jsx)(l.Modal, {
        transitionState: i,
        size: "sm",
        title: s,
        actions: [{ onClick: () => r(), variant: "primary", text: A.intl.string(A.t.i4jeWR) }],
        onClose: () => Promise.resolve(r()),
        children: (0, n.jsx)(g, { guildId: e.id }),
    });
}
