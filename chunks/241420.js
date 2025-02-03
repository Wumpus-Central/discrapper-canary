t.d(n, { default: () => I });
var i = t(200651);
t(192379);
var o = t(481060),
    a = t(546957),
    l = t(190014),
    r = t(301812),
    c = t(988043),
    _ = t(919539),
    d = t(526761),
    u = t(388032),
    s = t(916442);
function E(e) {
    let { guildId: n } = e;
    return (0, i.jsxs)(a.Z, {
        children: [
            (0, i.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(_.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(r.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: u.intl.format(u.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function I(e) {
    let { guild: n, transitionState: t, onClose: a } = e,
        l = ''.concat(u.intl.string(u.t.BayiAg), '\u2014').concat(null != n ? n.toString() : '??');
    return (0, i.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        'aria-label': l,
        children: [
            (0, i.jsx)(o.xBx, {
                children: (0, i.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: l
                })
            }),
            (0, i.jsx)(o.hzk, {
                className: s.content,
                children: (0, i.jsx)(E, { guildId: n.id })
            }),
            (0, i.jsx)(o.mzw, {
                children: (0, i.jsx)(o.zxk, {
                    onClick: () => a(),
                    children: u.intl.string(u.t.i4jeWV)
                })
            })
        ]
    });
}
