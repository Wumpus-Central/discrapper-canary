n.d(e, { default: () => f });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(546957),
    a = n(190014),
    s = n(301812),
    o = n(988043),
    u = n(919539),
    c = n(526761),
    d = n(388032),
    g = n(671364);
function _(t) {
    let { guildId: e } = t;
    return (0, i.jsxs)(r.Z, {
        children: [
            (0, i.jsx)(o.Z, {
                ingress: c.f4.SERVER_PRIVACY_MODAL,
                guildId: e
            }),
            (0, i.jsx)(u.Z, {
                ingress: c.f4.SERVER_PRIVACY_MODAL,
                guildId: e
            }),
            (0, i.jsx)(s.Z, {
                ingress: c.f4.SERVER_PRIVACY_MODAL,
                guildId: e
            }),
            (0, i.jsx)(a.Z, {
                ingress: c.f4.SERVER_PRIVACY_MODAL,
                guildId: e
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function f(t) {
    let { guild: e, transitionState: n, onClose: r } = t,
        a = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != e ? e.name : '??');
    return (0, i.jsxs)(l.Y0X, {
        transitionState: n,
        size: l.CgR.SMALL,
        'aria-label': a,
        parentComponent: 'PrivacySettings',
        children: [
            (0, i.jsx)(l.xBx, {
                children: (0, i.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a
                })
            }),
            (0, i.jsx)(l.hzk, {
                className: g.content,
                children: (0, i.jsx)(_, { guildId: e.id })
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsx)(l.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.i4jeWV),
                    onClick: () => r()
                })
            })
        ]
    });
}
