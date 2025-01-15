t.r(n),
    t.d(n, {
        PrivacySettings: function () {
            return b;
        },
        default: function () {
            return _;
        }
    });
var i = t(200651);
t(192379);
var o = t(481060),
    a = t(546957),
    r = t(190014),
    l = t(301812),
    c = t(988043),
    s = t(919539),
    d = t(526761),
    u = t(388032),
    f = t(857064);
function b(e) {
    let { guildId: n } = e;
    return (0, i.jsxs)(a.Z, {
        children: [
            (0, i.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(r.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: u.intl.format(u.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function _(e) {
    let { guild: n, transitionState: t, onClose: a } = e,
        r = ''.concat(u.intl.string(u.t.BayiAg), '\u2014').concat(null != n ? n.toString() : '??');
    return (0, i.jsxs)(o.ModalRoot, {
        transitionState: t,
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
                className: f.content,
                children: (0, i.jsx)(b, { guildId: n.id })
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
