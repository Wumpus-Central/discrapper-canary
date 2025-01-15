n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    l = n(442837),
    r = n(189156),
    a = n(699516),
    s = n(246946),
    o = n(5192),
    c = n(621853),
    d = n(172351),
    u = n(648052),
    h = n(280885),
    p = n(483424),
    m = n(681837),
    f = n(91433),
    g = n(900927),
    C = n(944043),
    x = n(678738),
    v = n(502762),
    _ = n(530),
    I = n(827313),
    E = n(228168),
    b = n(981631),
    Z = n(388032),
    S = n(763248);
function N(e) {
    let { user: t, currentUser: n, displayProfile: N, channel: T, isHovering: j, onOpenProfile: A } = e,
        y = (0, l.e7)([a.Z], () => a.Z.getRelationshipType(t.id)),
        P = (0, l.e7)([s.Z], () => s.Z.hidePersonalInformation),
        M = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: S.body,
        children: [
            (0, i.jsx)(_.Z, {
                user: t,
                profileType: E.y0.PANEL,
                nickname: o.ZP.getName(null, T.id, t),
                pronouns: null == N ? void 0 : N.pronouns,
                onOpenProfile: A,
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: N,
                    profileType: E.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: t.id }),
                        !P &&
                            (0, i.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: j,
                                onOpenProfile: A
                            })
                    ]
                })
            }),
            y === b.OGo.PENDING_INCOMING &&
                (0, i.jsx)(v.Z.Overlay, {
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        channelId: T.id
                    })
                }),
            (0, i.jsx)(C.Z, {
                user: t,
                source: C.t.PANEL
            }),
            t.isProvisional && (0, i.jsx)(r.Z, { look: 'profile' }),
            (0, i.jsx)(p.Z, {
                user: t,
                currentUser: n,
                className: S.activity
            }),
            (0, i.jsxs)(v.Z.Overlay, {
                className: S.overlay,
                children: [
                    !P &&
                        (null == N ? void 0 : N.bio) != null &&
                        (null == N ? void 0 : N.bio) !== '' &&
                        (0, i.jsx)(x.Z, {
                            heading: Z.intl.string(Z.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(h.Z, {
                                userBio: N.bio,
                                animateOnHover: !0,
                                isHovering: j,
                                userId: t.id
                            })
                        }),
                    (null == M ? void 0 : M.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(d.Z, {
                            applicationId: M.id,
                            commandIds: M.popularApplicationCommandIds,
                            channel: T
                        }),
                    (0, i.jsx)(x.Z, {
                        heading: t.bot ? Z.intl.string(Z.t['A//N4u']) : Z.intl.string(Z.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(g.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
