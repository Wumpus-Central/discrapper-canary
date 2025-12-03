s.d(t, { default: () => f });
var n = s(54381);
s(473749);
var e = s(793030),
    r = s(481060),
    l = s(546957),
    o = s(190014),
    a = s(301812),
    d = s(988043),
    c = s(919539),
    u = s(526761),
    R = s(388032);
function x(i) {
    let { guildId: t } = i;
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsx)(d.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(a.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(o.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(r.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: R.intl.format(R.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function f(i) {
    let { guild: t, transitionState: s, onClose: r } = i,
        l = "".concat(R.intl.string(R.t.BayiAo), "\u2014").concat(null != t ? t.name : "??");
    return (0, n.jsx)(e.Modal, {
        transitionState: s,
        size: "sm",
        title: l,
        actions: [
            {
                onClick: () => r(),
                variant: "primary",
                text: R.intl.string(R.t.i4jeWR),
            },
        ],
        onClose: () => Promise.resolve(r()),
        children: (0, n.jsx)(x, { guildId: t.id }),
    });
}
