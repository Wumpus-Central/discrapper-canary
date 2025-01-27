n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(372460),
    s = n(91896),
    o = n(189156),
    c = n(699516),
    d = n(246946),
    u = n(5192),
    h = n(621853),
    p = n(513236),
    m = n(172351),
    f = n(648052),
    g = n(280885),
    C = n(483424),
    x = n(681837),
    v = n(78806),
    _ = n(91433),
    I = n(900927),
    E = n(944043),
    b = n(678738),
    Z = n(502762),
    N = n(530),
    S = n(827313),
    T = n(228168),
    j = n(981631),
    A = n(388032),
    y = n(866669);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, channel: M, isHovering: R, onOpenProfile: L } = e,
        { relationshipType: k, originApplicationId: O } = (0, r.cj)([c.Z], () => ({
            relationshipType: c.Z.getRelationshipType(t.id),
            originApplicationId: c.Z.getOriginApplicationId(t.id)
        })),
        D = (0, r.Wu)([s.Z], () => s.Z.getGameRelationshipsForUser(t.id, j.OGo.PENDING_INCOMING)),
        w = (0, r.Wu)([s.Z], () => s.Z.getGameFriendsForUser(t.id)),
        B = l.useMemo(() => w.map((e) => e.applicationId), [w]),
        U = (0, a.wn)({ location: 'UserProfilePanelBody' }),
        H = (0, p.P)({
            userId: t.id,
            relationshipType: k,
            gameFriends: w,
            pendingIncomingGameRelationships: D
        }),
        G = H && w.length > 0,
        F = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        V = (0, r.e7)([h.Z], () => {
            var e;
            return null === (e = h.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: y.body,
        children: [
            (0, i.jsx)(N.Z, {
                user: t,
                profileType: T.y0.PANEL,
                nickname: u.ZP.getName(null, M.id, t),
                pronouns: null == P ? void 0 : P.pronouns,
                onOpenProfile: L,
                tags: (0, i.jsx)(f.Z, {
                    displayProfile: P,
                    profileType: T.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(x.Z, { userId: t.id }),
                        !F &&
                            (0, i.jsx)(S.Z, {
                                userId: t.id,
                                isHovering: R,
                                onOpenProfile: L
                            })
                    ]
                }),
                hideIdentityInfo: H
            }),
            k === j.OGo.PENDING_INCOMING &&
                (0, i.jsx)(Z.Z.Overlay, {
                    children: (0, i.jsx)(_.Z, {
                        user: t,
                        channelId: M.id,
                        applicationId: U ? O : void 0
                    })
                }),
            U &&
                D.map((e) =>
                    (0, i.jsx)(
                        Z.Z.Overlay,
                        {
                            children: (0, i.jsx)(_.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: M.id
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(E.Z, {
                user: t,
                source: E.t.PANEL
            }),
            t.isProvisional && (0, i.jsx)(o.Z, { look: 'profile' }),
            (0, i.jsx)(C.Z, {
                user: t,
                currentUser: n,
                className: y.activity
            }),
            (0, i.jsxs)(Z.Z.Overlay, {
                className: y.overlay,
                children: [
                    !F &&
                        !H &&
                        (null == P ? void 0 : P.bio) != null &&
                        (null == P ? void 0 : P.bio) !== '' &&
                        (0, i.jsx)(b.Z, {
                            heading: A.intl.string(A.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(g.Z, {
                                userBio: P.bio,
                                animateOnHover: !0,
                                isHovering: R,
                                userId: t.id
                            })
                        }),
                    (null == V ? void 0 : V.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(m.Z, {
                            applicationId: V.id,
                            commandIds: V.popularApplicationCommandIds,
                            channel: M
                        }),
                    G &&
                        (0, i.jsx)(b.Z, {
                            heading: A.intl.string(A.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(v.Z, { applicationIds: B })
                        }),
                    (0, i.jsx)(b.Z, {
                        heading: t.bot ? A.intl.string(A.t['A//N4u']) : A.intl.string(A.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(I.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
