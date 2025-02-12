n.d(t, { default: () => E });
var a = n(200651);
n(192379);
var r = n(481060),
    i = n(546957),
    o = n(190014),
    _ = n(301812),
    l = n(988043),
    c = n(919539),
    u = n(526761),
    d = n(388032),
    s = n(337396);
function h(e) {
    let { guildId: t } = e;
    return (0, a.jsxs)(i.Z, {
        children: [
            (0, a.jsx)(l.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(c.Z, {
                ingress: u.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, a.jsx)(_.Z, {
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
function E(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        o = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, a.jsxs)(r.Y0X, {
        transitionState: n,
        size: r.CgR.SMALL,
        'aria-label': o,
        children: [
            (0, a.jsx)(r.xBx, {
                children: (0, a.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o
                })
            }),
            (0, a.jsx)(r.hzk, {
                className: s.content,
                children: (0, a.jsx)(h, { guildId: t.id })
            }),
            (0, a.jsx)(r.mzw, {
                children: (0, a.jsx)(r.zxk, {
                    onClick: () => i(),
                    children: d.intl.string(d.t.i4jeWV)
                })
            })
        ]
    });
}
