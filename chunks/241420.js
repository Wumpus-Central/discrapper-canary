n.d(t, { default: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(546957),
    l = n(190014),
    a = n(301812),
    c = n(988043),
    u = n(919539),
    s = n(526761),
    d = n(388032),
    _ = n(671364);
function b(e) {
    let { guildId: t } = e;
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(c.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(u.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(a.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(l.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function g(e) {
    let { guild: t, transitionState: n, onClose: o } = e,
        l = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, r.jsxs)(i.Y0X, {
        transitionState: n,
        size: i.CgR.SMALL,
        'aria-label': l,
        children: [
            (0, r.jsx)(i.xBx, {
                children: (0, r.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: l
                })
            }),
            (0, r.jsx)(i.hzk, {
                className: _.content,
                children: (0, r.jsx)(b, { guildId: t.id })
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsx)(i.zxk, {
                    onClick: () => o(),
                    children: d.intl.string(d.t.i4jeWV)
                })
            })
        ]
    });
}
