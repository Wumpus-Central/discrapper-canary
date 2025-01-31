n.d(t, {
    A: () => j,
    Z: () => S
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(597312),
    o = n(442837),
    c = n(481060),
    d = n(410030),
    u = n(100527),
    h = n(906732),
    p = n(699516),
    m = n(5192),
    f = n(785717),
    g = n(221292),
    _ = n(687158),
    C = n(471879),
    x = n(502762),
    v = n(848780),
    E = n(907179),
    I = n(475413),
    b = n(228168),
    Z = n(388032),
    N = n(562296),
    T = n(321975);
function S(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: a } = e,
        r = (0, _.ZP)(t.id),
        o = (0, d.ZP)(),
        { analyticsLocations: p } = (0, h.ZP)(u.Z.BLOCKED_PROFILE_PANEL),
        m = (0, f.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        v = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: p,
        children: (0, i.jsx)(f.Mt, {
            value: m,
            children: (0, i.jsx)(x.Z, {
                ref: v,
                user: t,
                displayProfile: r,
                profileType: b.y0.PANEL,
                themeOverride: o,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, i.jsx)(C.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, i.jsx)(c.X6q, {
                                        variant: 'heading-lg/bold',
                                        className: N.header,
                                        children: Z.intl.string(Z.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: Z.intl.format(Z.t.LXbngo, { username: t.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: Z.intl.string(Z.t['20WzZ2'])
                                    }),
                                    (0, i.jsx)(I.tG, {
                                        className: N.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: Z.intl.string(Z.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == a || a(),
                                                (0, g.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: p,
                                                    ...m
                                                });
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
function j(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: a } = e,
        I = (0, _.ZP)(t.id),
        S = (0, d.ZP)(),
        j = (0, o.e7)([p.Z], () => p.Z.isBlocked(t.id)),
        { analyticsLocations: A } = (0, h.ZP)(j ? u.Z.BLOCKED_PROFILE_PANEL : u.Z.IGNORED_PROFILE_PANEL),
        y = (0, f.ZB)({
            layout: j ? 'BLOCKED_PROFILE_PANEL' : 'IGNORED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        P = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: A,
        children: (0, i.jsx)(f.Mt, {
            value: y,
            children: (0, i.jsx)(x.Z, {
                ref: P,
                user: t,
                displayProfile: I,
                profileType: b.y0.PANEL,
                themeOverride: S,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(N.body, N.bodySpacing),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: N.headerContainer,
                                        children: [
                                            (0, i.jsx)(C.i, { user: t }),
                                            (0, i.jsx)(c.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: Z.intl.string(Z.t.b33pLC)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: Z.intl.format(j ? Z.t['8F+WNz'] : Z.t['/cZp5u'], { username: m.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(c.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(E.Z, {
                                                isBlocked: j,
                                                onClick: () => {
                                                    null == a || a(),
                                                        (0, g.pQ)({
                                                            action: j ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: A,
                                                            ...y
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(v.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == a || a(),
                                                        (0, g.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: A,
                                                            ...y
                                                        });
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
