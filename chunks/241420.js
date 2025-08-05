t.d(n, { default: () => p });
var o = t(255367);
t(73800);
var r = t(481060),
    i = t(546957),
    a = t(190014),
    c = t(301812),
    l = t(988043),
    s = t(919539),
    d = t(526761),
    _ = t(388032),
    u = t(671364);
function f(e) {
    let { guildId: n } = e;
    return (0, o.jsxs)(i.Z, {
        children: [
            (0, o.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(a.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: _.intl.format(_.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function p(e) {
    let { guild: n, transitionState: t, onClose: i } = e,
        a = ''.concat(_.intl.string(_.t.BayiAg), '\u2014').concat(null != n ? n.name : '??');
    return (0, o.jsxs)(r.Y0X, {
        transitionState: t,
        size: r.CgR.SMALL,
        'aria-label': a,
        parentComponent: 'PrivacySettings',
        children: [
            (0, o.jsx)(r.xBx, {
                children: (0, o.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a
                })
            }),
            (0, o.jsx)(r.hzk, {
                className: u.content,
                children: (0, o.jsx)(f, { guildId: n.id })
            }),
            (0, o.jsx)(r.mzw, {
                children: (0, o.jsx)(r.zxk, {
                    variant: 'primary',
                    text: _.intl.string(_.t.i4jeWV),
                    onClick: () => i()
                })
            })
        ]
    });
}
