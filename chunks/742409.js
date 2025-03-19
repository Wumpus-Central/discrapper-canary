n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(957537),
    o = n(737770),
    c = n(839008),
    A = n(685184),
    d = n(979264),
    u = n(550271),
    g = n(308083),
    f = n(502936),
    m = n(388032),
    p = n(179493);
function h(e) {
    return (0, r.jsxs)('div', {
        className: s()(p.messageContainer, e.className),
        children: [
            (0, r.jsx)('div', {
                className: p.avatarContainer,
                children: (0, r.jsx)('img', {
                    src: e.avatar,
                    alt: ''.concat(e.username, ' avatar'),
                    width: 40,
                    height: 40
                })
            }),
            (0, r.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.usernameContainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                style: e.usernameStyle,
                                children: e.username
                            }),
                            void 0 !== e.decorations &&
                                (0, r.jsx)('div', {
                                    className: p.decorationsContainer,
                                    children: e.decorations
                                })
                        ]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        children: e.message
                    })
                ]
            })
        ]
    });
}
let C = function (e) {
    let t = null === e.tag || 0 === e.tag.length ? 'WUMP' : e.tag;
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsx)(h, {
                className: p.unfocusedMessage,
                avatar: l.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: m.NW.string(f.Z.bpghV1)
            }),
            (0, r.jsx)(h, {
                className: p.unfocusedMessage,
                avatar: o.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: m.NW.string(f.Z['rnpv7+'])
            }),
            (0, r.jsx)(h, {
                avatar: c.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: m.NW.string(f.Z.u7tjsr),
                decorations: (0, r.jsx)('div', {
                    className: p.badgeContainer,
                    children: (0, r.jsx)(d.aG, {
                        guildId: e.guildId,
                        textClassName: p.tagText,
                        clanTag: t,
                        clanBadge: (0, r.jsx)(u.A, {
                            className: p.badgePreview,
                            badge: e.badge,
                            width: g.NC.SIZE_12,
                            height: g.NC.SIZE_12,
                            primaryTintColor: e.primaryColor,
                            secondaryTintColor: e.secondaryColor
                        })
                    })
                })
            }),
            (0, r.jsx)(h, {
                className: p.unfocusedMessage,
                avatar: A.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: m.NW.string(f.Z.GlWVJC)
            }),
            (0, r.jsx)(h, {
                className: p.unfocusedMessage,
                avatar: c.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: m.NW.string(f.Z.AIp9ho)
            })
        ]
    });
};
