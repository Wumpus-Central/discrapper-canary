n.d(t, { default: () => p });
var o = n(200651);
n(192379);
var r = n(481060),
    a = n(546957),
    i = n(190014),
    c = n(301812),
    l = n(988043),
    s = n(919539),
    _ = n(526761),
    d = n(388032),
    u = n(671364);
function b(e) {
    let { guildId: t } = e;
    return (0, o.jsxs)(a.Z, {
        children: [
            (0, o.jsx)(l.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(s.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(c.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(i.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.NW.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function p(e) {
    let { guild: t, transitionState: n, onClose: a } = e,
        i = ''.concat(d.NW.string(d.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, o.jsxs)(r.Y0X, {
        transitionState: n,
        size: r.CgR.SMALL,
        'aria-label': i,
        children: [
            (0, o.jsx)(r.xBx, {
                children: (0, o.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: i
                })
            }),
            (0, o.jsx)(r.hzk, {
                className: u.content,
                children: (0, o.jsx)(b, { guildId: t.id })
            }),
            (0, o.jsx)(r.mzw, {
                children: (0, o.jsx)(r.zxk, {
                    onClick: () => a(),
                    children: d.NW.string(d.t.i4jeWV)
                })
            })
        ]
    });
}
