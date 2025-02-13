t.d(n, { default: () => m });
var o = t(200651);
t(192379);
var i = t(481060),
    a = t(546957),
    r = t(190014),
    _ = t(301812),
    c = t(988043),
    l = t(919539),
    d = t(526761),
    s = t(388032),
    u = t(803547);
function g(e) {
    let { guildId: n } = e;
    return (0, o.jsxs)(a.Z, {
        children: [
            (0, o.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(_.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(r.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, o.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: s.intl.format(s.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function m(e) {
    let { guild: n, transitionState: t, onClose: a } = e,
        r = ''.concat(s.intl.string(s.t.BayiAg), '\u2014').concat(null != n ? n.toString() : '??');
    return (0, o.jsxs)(i.Y0X, {
        transitionState: t,
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
                children: (0, o.jsx)(g, { guildId: n.id })
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
