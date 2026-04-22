i.d(e, { default: () => E });
var n = i(627968);
i(64700);
var l = i(189213),
    r = i(834730),
    s = i(505653),
    d = i(688716),
    a = i(691172),
    u = i(606319),
    _ = i(65010),
    S = i(355097),
    o = i(985018);
function g(t) {
    let { guildId: e } = t;
    return (0, n.jsxs)(s.A, {
        children: [
            (0, n.jsx)(u.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(_.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(a.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(d.A, { ingress: S.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(r.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: o.intl.format(o.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function E(t) {
    let { guild: e, transitionState: i, onClose: r } = t,
        s = `${o.intl.string(o.t.BayiAo)}—${null != e ? e.name : "??"}`;
    return (0, n.jsx)(l.Modal, {
        transitionState: i,
        size: "sm",
        title: s,
        actions: [{ onClick: () => r(), variant: "primary", text: o.intl.string(o.t.i4jeWR) }],
        onClose: () => Promise.resolve(r()),
        children: (0, n.jsx)(g, { guildId: e.id }),
    });
}
