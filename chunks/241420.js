n.d(t, { default: () => b });
var a = n(200651);
n(192379);
var o = n(481060),
    i = n(546957),
    _ = n(190014),
    c = n(301812),
    l = n(988043),
    r = n(919539),
    d = n(526761),
    u = n(388032),
    s = n(916442);
function p(e) {
    let { guildId: t } = e;
    return (0, a.jsxs)(i.Z, {
        children: [
            (0, a.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(r.Z, {
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
            (0, a.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: u.intl.format(u.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function b(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        _ = ''.concat(u.intl.string(u.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, a.jsxs)(o.Y0X, {
        transitionState: n,
        size: o.CgR.SMALL,
        'aria-label': _,
        children: [
            (0, a.jsx)(o.xBx, {
                children: (0, a.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: _
                })
            }),
            (0, a.jsx)(o.hzk, {
                className: s.content,
                children: (0, a.jsx)(p, { guildId: t.id })
            }),
            (0, a.jsx)(o.mzw, {
                children: (0, a.jsx)(o.zxk, {
                    onClick: () => i(),
                    children: u.intl.string(u.t.i4jeWV)
                })
            })
        ]
    });
}
