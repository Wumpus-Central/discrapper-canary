n.d(t, { default: () => b });
var i = n(200651);
n(192379);
var a = n(481060),
    o = n(546957),
    r = n(190014),
    l = n(301812),
    c = n(988043),
    s = n(919539),
    _ = n(526761),
    d = n(388032),
    u = n(803547);
function p(e) {
    let { guildId: t } = e;
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(c.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(s.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(l.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(r.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function b(e) {
    let { guild: t, transitionState: n, onClose: o } = e,
        r = ''.concat(d.intl.string(d.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, i.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.SMALL,
        'aria-label': r,
        children: [
            (0, i.jsx)(a.xBx, {
                children: (0, i.jsx)(a.X6q, {
                    variant: 'heading-lg/semibold',
                    children: r
                })
            }),
            (0, i.jsx)(a.hzk, {
                className: u.content,
                children: (0, i.jsx)(p, { guildId: t.id })
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    onClick: () => o(),
                    children: d.intl.string(d.t.i4jeWV)
                })
            })
        ]
    });
}
