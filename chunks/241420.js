t.d(n, { default: () => b });
var i = t(200651);
t(192379);
var o = t(481060),
    l = t(546957),
    a = t(190014),
    c = t(301812),
    r = t(988043),
    _ = t(919539),
    u = t(526761),
    d = t(388032),
    s = t(671364);
function p(e) {
    let { guildId: n } = e;
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(r.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(_.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(a.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function b(e) {
    let { guild: n, transitionState: t, onClose: l } = e,
        a = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != n ? n.toString() : '??');
    return (0, i.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        'aria-label': a,
        children: [
            (0, i.jsx)(o.xBx, {
                children: (0, i.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a
                })
            }),
            (0, i.jsx)(o.hzk, {
                className: s.content,
                children: (0, i.jsx)(p, { guildId: n.id })
            }),
            (0, i.jsx)(o.mzw, {
                children: (0, i.jsx)(o.zxk, {
                    onClick: () => l(),
                    children: d.intl.string(d.t.i4jeWV)
                })
            })
        ]
    });
}
