n.d(t, { default: () => f });
var o = n(200651);
n(192379);
var a = n(481060),
    i = n(546957),
    r = n(190014),
    l = n(301812),
    c = n(988043),
    s = n(919539),
    _ = n(526761),
    d = n(388032),
    u = n(67137);
function b(e) {
    let { guildId: t } = e;
    return (0, o.jsxs)(i.Z, {
        children: [
            (0, o.jsx)(c.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(s.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(l.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(r.Z, {
                ingress: _.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, o.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.NW.format(d.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function f(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        r = ''.concat(d.NW.string(d.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, o.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.SMALL,
        'aria-label': r,
        children: [
            (0, o.jsx)(a.xBx, {
                children: (0, o.jsx)(a.X6q, {
                    variant: 'heading-lg/semibold',
                    children: r
                })
            }),
            (0, o.jsx)(a.hzk, {
                className: u.content,
                children: (0, o.jsx)(b, { guildId: t.id })
            }),
            (0, o.jsx)(a.mzw, {
                children: (0, o.jsx)(a.zxk, {
                    onClick: () => i(),
                    children: d.NW.string(d.t.i4jeWV)
                })
            })
        ]
    });
}
