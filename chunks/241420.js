n.d(t, { default: () => E });
var a = n(200651);
n(192379);
var i = n(481060),
    r = n(546957),
    o = n(190014),
    _ = n(301812),
    l = n(988043),
    c = n(919539),
    d = n(526761),
    u = n(388032),
    s = n(337396);
function h(e) {
    let { guildId: t } = e;
    return (0, a.jsxs)(r.Z, {
        children: [
            (0, a.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(_.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(o.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: u.intl.format(u.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function E(e) {
    let { guild: t, transitionState: n, onClose: r } = e,
        o = ''.concat(u.intl.string(u.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, a.jsxs)(i.Y0X, {
        transitionState: n,
        size: i.CgR.SMALL,
        'aria-label': o,
        children: [
            (0, a.jsx)(i.xBx, {
                children: (0, a.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o
                })
            }),
            (0, a.jsx)(i.hzk, {
                className: s.content,
                children: (0, a.jsx)(h, { guildId: t.id })
            }),
            (0, a.jsx)(i.mzw, {
                children: (0, a.jsx)(i.zxk, {
                    onClick: () => r(),
                    children: u.intl.string(u.t.i4jeWV)
                })
            })
        ]
    });
}
