t.d(n, { default: () => p });
var i = t(255367);
t(73800);
var o = t(481060),
    l = t(546957),
    r = t(190014),
    a = t(301812),
    c = t(988043),
    u = t(919539),
    _ = t(526761),
    d = t(388032),
    s = t(671364);
function b(e) {
    let { guildId: n } = e;
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(c.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(u.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(a.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(r.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
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
function p(e) {
    let { guild: n, transitionState: t, onClose: l } = e,
        r = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != n ? n.toString() : '??');
    return (0, i.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        'aria-label': r,
        children: [
            (0, i.jsx)(o.xBx, {
                children: (0, i.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: r
                })
            }),
            (0, i.jsx)(o.hzk, {
                className: s.content,
                children: (0, i.jsx)(b, { guildId: n.id })
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
