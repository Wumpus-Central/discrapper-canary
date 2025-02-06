n.d(t, { default: () => f });
var o = n(200651);
n(192379);
var i = n(481060),
    a = n(546957),
    r = n(190014),
    l = n(301812),
    c = n(988043),
    _ = n(919539),
    d = n(526761),
    s = n(388032),
    u = n(916442);
function b(e) {
    let { guildId: t } = e;
    return (0, o.jsxs)(a.Z, {
        children: [
            (0, o.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(_.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(r.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: s.intl.format(s.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function f(e) {
    let { guild: t, transitionState: n, onClose: a } = e,
        r = ''.concat(s.intl.string(s.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, o.jsxs)(i.Y0X, {
        transitionState: n,
        size: i.CgR.SMALL,
        'aria-label': r,
        children: [
            (0, o.jsx)(i.xBx, {
                children: (0, o.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: r
                })
            }),
            (0, o.jsx)(i.hzk, {
                className: u.content,
                children: (0, o.jsx)(b, { guildId: t.id })
            }),
            (0, o.jsx)(i.mzw, {
                children: (0, o.jsx)(i.zxk, {
                    onClick: () => a(),
                    children: s.intl.string(s.t.i4jeWV)
                })
            })
        ]
    });
}
