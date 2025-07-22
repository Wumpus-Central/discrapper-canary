t.d(i, { default: () => h });
var s = t(255367);
t(73800);
var e = t(481060),
    r = t(546957),
    a = t(190014),
    c = t(301812),
    d = t(988043),
    l = t(919539),
    o = t(526761),
    x = t(388032),
    u = t(671364);
function g(n) {
    let { guildId: i } = n;
    return (0, s.jsxs)(r.Z, {
        children: [
            (0, s.jsx)(d.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: i
            }),
            (0, s.jsx)(l.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: i
            }),
            (0, s.jsx)(c.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: i
            }),
            (0, s.jsx)(a.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: i
            }),
            (0, s.jsx)(e.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: x.intl.format(x.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function h(n) {
    let { guild: i, transitionState: t, onClose: r } = n,
        a = ''.concat(x.intl.string(x.t.BayiAg), '\u2014').concat(null != i ? i.name : '??');
    return (0, s.jsxs)(e.Y0X, {
        transitionState: t,
        size: e.CgR.SMALL,
        'aria-label': a,
        parentComponent: 'PrivacySettings',
        children: [
            (0, s.jsx)(e.xBx, {
                children: (0, s.jsx)(e.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a
                })
            }),
            (0, s.jsx)(e.hzk, {
                className: u.content,
                children: (0, s.jsx)(g, { guildId: i.id })
            }),
            (0, s.jsx)(e.mzw, {
                children: (0, s.jsx)(e.zxk, {
                    variant: 'primary',
                    text: x.intl.string(x.t.i4jeWV),
                    onClick: () => r()
                })
            })
        ]
    });
}
