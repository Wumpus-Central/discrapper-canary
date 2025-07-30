a.d(t, { default: () => g });
var n = a(255367);
a(73800);
var r = a(481060),
    i = a(546957),
    o = a(190014),
    c = a(301812),
    s = a(988043),
    l = a(919539),
    u = a(526761),
    d = a(388032),
    p = a(671364);
function _(e) {
    let { guildId: t } = e;
    return (0, n.jsxs)(i.Z, {
        children: [
            (0, n.jsx)(s.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, n.jsx)(l.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, n.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, n.jsx)(o.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, n.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function g(e) {
    let { guild: t, transitionState: a, onClose: i } = e,
        o = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != t ? t.name : '??');
    return (0, n.jsxs)(r.Y0X, {
        transitionState: a,
        size: r.CgR.SMALL,
        'aria-label': o,
        parentComponent: 'PrivacySettings',
        children: [
            (0, n.jsx)(r.xBx, {
                children: (0, n.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o
                })
            }),
            (0, n.jsx)(r.hzk, {
                className: p.content,
                children: (0, n.jsx)(_, { guildId: t.id })
            }),
            (0, n.jsx)(r.mzw, {
                children: (0, n.jsx)(r.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.i4jeWV),
                    onClick: () => i()
                })
            })
        ]
    });
}
