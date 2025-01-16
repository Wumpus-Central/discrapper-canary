n.r(t),
    n.d(t, {
        PrivacySettings: function () {
            return h;
        },
        default: function () {
            return m;
        }
    });
var i = n(200651);
n(192379);
var o = n(481060),
    a = n(546957),
    r = n(190014),
    c = n(301812),
    l = n(988043),
    s = n(919539),
    d = n(526761),
    u = n(388032),
    g = n(916442);
function h(e) {
    let { guildId: t } = e;
    return (0, i.jsxs)(a.Z, {
        children: [
            (0, i.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(r.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: u.intl.format(u.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function m(e) {
    let { guild: t, transitionState: n, onClose: a } = e,
        r = ''.concat(u.intl.string(u.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, i.jsxs)(o.ModalRoot, {
        transitionState: n,
        size: o.ModalSize.SMALL,
        'aria-label': r,
        children: [
            (0, i.jsx)(o.ModalHeader, {
                children: (0, i.jsx)(o.Heading, {
                    variant: 'heading-lg/semibold',
                    children: r
                })
            }),
            (0, i.jsx)(o.ModalContent, {
                className: g.content,
                children: (0, i.jsx)(h, { guildId: t.id })
            }),
            (0, i.jsx)(o.ModalFooter, {
                children: (0, i.jsx)(o.Button, {
                    onClick: () => a(),
                    children: u.intl.string(u.t.i4jeWV)
                })
            })
        ]
    });
}
