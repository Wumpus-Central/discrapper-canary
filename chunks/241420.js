n.r(t),
    n.d(t, {
        PrivacySettings: function () {
            return f;
        },
        default: function () {
            return g;
        }
    });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(546957),
    a = n(190014),
    o = n(301812),
    u = n(988043),
    s = n(919539),
    d = n(526761),
    h = n(388032),
    c = n(916442);
function f(e) {
    let { guildId: t } = e;
    return (0, i.jsxs)(r.Z, {
        children: [
            (0, i.jsx)(u.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(o.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(a.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: h.intl.format(h.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
            })
        ]
    });
}
function g(e) {
    let { guild: t, transitionState: n, onClose: r } = e,
        a = ''.concat(h.intl.string(h.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: n,
        size: l.ModalSize.SMALL,
        'aria-label': a,
        children: [
            (0, i.jsx)(l.ModalHeader, {
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/semibold',
                    children: a
                })
            }),
            (0, i.jsx)(l.ModalContent, {
                className: c.content,
                children: (0, i.jsx)(f, { guildId: t.id })
            }),
            (0, i.jsx)(l.ModalFooter, {
                children: (0, i.jsx)(l.Button, {
                    onClick: () => r(),
                    children: h.intl.string(h.t.i4jeWV)
                })
            })
        ]
    });
}
