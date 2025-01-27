n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    l = n(442837),
    r = n(372460),
    a = n(91896),
    s = n(189156),
    o = n(699516),
    c = n(246946),
    d = n(5192),
    u = n(621853),
    h = n(172351),
    p = n(648052),
    m = n(280885),
    f = n(483424),
    g = n(681837),
    C = n(91433),
    x = n(900927),
    v = n(944043),
    _ = n(678738),
    I = n(502762),
    E = n(530),
    b = n(827313),
    Z = n(228168),
    N = n(981631),
    S = n(388032),
    T = n(866669);
function j(e) {
    let { user: t, currentUser: n, displayProfile: j, channel: A, isHovering: y, onOpenProfile: P } = e,
        { relationshipType: M, originApplicationId: R } = (0, l.cj)([o.Z], () => ({
            relationshipType: o.Z.getRelationshipType(t.id),
            originApplicationId: o.Z.getOriginApplicationId(t.id)
        })),
        L = (0, l.Wu)([a.Z], () => a.Z.getGameRelationshipsForUser(t.id, N.OGo.PENDING_INCOMING)),
        k = (0, r.wn)({ location: 'UserProfilePanelBody' }),
        O = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation),
        D = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: T.body,
        children: [
            (0, i.jsx)(E.Z, {
                user: t,
                profileType: Z.y0.PANEL,
                nickname: d.ZP.getName(null, A.id, t),
                pronouns: null == j ? void 0 : j.pronouns,
                onOpenProfile: P,
                tags: (0, i.jsx)(p.Z, {
                    displayProfile: j,
                    profileType: Z.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.Z, { userId: t.id }),
                        !O &&
                            (0, i.jsx)(b.Z, {
                                userId: t.id,
                                isHovering: y,
                                onOpenProfile: P
                            })
                    ]
                })
            }),
            M === N.OGo.PENDING_INCOMING &&
                (0, i.jsx)(I.Z.Overlay, {
                    children: (0, i.jsx)(C.Z, {
                        user: t,
                        channelId: A.id,
                        applicationId: k ? R : void 0
                    })
                }),
            k &&
                L.map((e) =>
                    (0, i.jsx)(
                        I.Z.Overlay,
                        {
                            children: (0, i.jsx)(C.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: A.id
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(v.Z, {
                user: t,
                source: v.t.PANEL
            }),
            t.isProvisional && (0, i.jsx)(s.Z, { look: 'profile' }),
            (0, i.jsx)(f.Z, {
                user: t,
                currentUser: n,
                className: T.activity
            }),
            (0, i.jsxs)(I.Z.Overlay, {
                className: T.overlay,
                children: [
                    !O &&
                        (null == j ? void 0 : j.bio) != null &&
                        (null == j ? void 0 : j.bio) !== '' &&
                        (0, i.jsx)(_.Z, {
                            heading: S.intl.string(S.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(m.Z, {
                                userBio: j.bio,
                                animateOnHover: !0,
                                isHovering: y,
                                userId: t.id
                            })
                        }),
                    (null == D ? void 0 : D.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(h.Z, {
                            applicationId: D.id,
                            commandIds: D.popularApplicationCommandIds,
                            channel: A
                        }),
                    (0, i.jsx)(_.Z, {
                        heading: t.bot ? S.intl.string(S.t['A//N4u']) : S.intl.string(S.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(x.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
