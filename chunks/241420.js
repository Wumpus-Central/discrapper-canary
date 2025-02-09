n.d(t, { default: () => E });
var a = n(200651);
n(192379);
var i = n(481060),
    r = n(546957),
    o = n(190014),
    _ = n(301812),
    l = n(988043),
    c = n(919539),
    u = n(526761),
    s = n(388032),
    d = n(337396);
function h(e) {
    let { guildId: t } = e;
    return (0, a.jsxs)(r.Z, {
        children: [
            (0, a.jsx)(l.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(_.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(o.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: s.intl.format(s.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function E(e) {
    let { guild: t, transitionState: n, onClose: r } = e,
        o = ''.concat(s.intl.string(s.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
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
                className: d.content,
                children: (0, a.jsx)(h, { guildId: t.id })
            }),
            (0, a.jsx)(i.mzw, {
                children: (0, a.jsx)(i.zxk, {
                    onClick: () => r(),
                    children: s.intl.string(s.t.i4jeWV)
                })
            })
        ]
    });
}
