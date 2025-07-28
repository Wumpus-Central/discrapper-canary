n.d(t, { default: () => g });
var a = n(255367);
n(73800);
var r = n(481060),
    i = n(546957),
    o = n(190014),
    c = n(301812),
    s = n(988043),
    l = n(919539),
    u = n(526761),
    d = n(388032),
    p = n(671364);
function _(e) {
    let { guildId: t } = e;
    return (0, a.jsxs)(i.Z, {
        children: [
            (0, a.jsx)(s.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(l.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(o.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function g(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        o = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != t ? t.name : '??');
    return (0, a.jsxs)(r.Y0X, {
        transitionState: n,
        size: r.CgR.SMALL,
        'aria-label': o,
        parentComponent: 'PrivacySettings',
        children: [
            (0, a.jsx)(r.xBx, {
                children: (0, a.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o
                })
            }),
            (0, a.jsx)(r.hzk, {
                className: p.content,
                children: (0, a.jsx)(_, { guildId: t.id })
            }),
            (0, a.jsx)(r.mzw, {
                children: (0, a.jsx)(r.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.i4jeWV),
                    onClick: () => i()
                })
            })
        ]
    });
}
