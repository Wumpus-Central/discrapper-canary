n.d(t, { default: () => p });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(546957),
    a = n(190014),
    c = n(301812),
    l = n(988043),
    u = n(919539),
    s = n(526761),
    _ = n(388032),
    d = n(671364);
function b(e) {
    let { guildId: t } = e;
    return (0, r.jsxs)(i.Z, {
        children: [
            (0, r.jsx)(l.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(u.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(c.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(a.Z, {
                ingress: s.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, r.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: _.intl.format(_.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function p(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        a = ''.concat(_.intl.string(_.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, r.jsxs)(o.Y0X, {
        transitionState: n,
        size: o.CgR.SMALL,
        'aria-label': a,
        children: [
            (0, r.jsx)(o.xBx, {
                children: (0, r.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a
                })
            }),
            (0, r.jsx)(o.hzk, {
                className: d.content,
                children: (0, r.jsx)(b, { guildId: t.id })
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsx)(o.zxk, {
                    onClick: () => i(),
                    children: _.intl.string(_.t.i4jeWV)
                })
            })
        ]
    });
}
