n.d(t, { Z: () => y });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(372460),
    s = n(320582),
    o = n(189156),
    c = n(699516),
    d = n(246946),
    u = n(5192),
    h = n(621853),
    p = n(172351),
    m = n(648052),
    f = n(280885),
    g = n(483424),
    _ = n(681837),
    C = n(78806),
    x = n(91433),
    v = n(900927),
    E = n(944043),
    I = n(678738),
    b = n(502762),
    Z = n(530),
    N = n(827313),
    T = n(228168),
    S = n(981631),
    j = n(388032),
    A = n(866669);
function y(e) {
    let { user: t, currentUser: n, displayProfile: y, channel: P, isHovering: R, onOpenProfile: M } = e,
        { relationshipType: L, originApplicationId: k } = (0, a.cj)([c.Z], () => ({
            relationshipType: c.Z.getRelationshipType(t.id),
            originApplicationId: c.Z.getOriginApplicationId(t.id)
        })),
        O = (0, s.vh)(t.id),
        D = (0, s.ML)(t.id),
        w = l.useMemo(() => D.map((e) => e.applicationId), [D]),
        U = (0, r.wn)({ location: 'UserProfilePanelBody' }),
        B = U && D.length > 0,
        F = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
        H = (0, a.e7)([h.Z], () => {
            var e;
            return null === (e = h.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: A.body,
        children: [
            (0, i.jsx)(Z.Z, {
                user: t,
                profileType: T.y0.PANEL,
                nickname: u.ZP.getName(null, P.id, t),
                pronouns: null == y ? void 0 : y.pronouns,
                onOpenProfile: M,
                tags: (0, i.jsx)(m.Z, {
                    displayProfile: y,
                    profileType: T.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(_.Z, { userId: t.id }),
                        !F &&
                            (0, i.jsx)(N.Z, {
                                userId: t.id,
                                isHovering: R,
                                onOpenProfile: M
                            })
                    ]
                })
            }),
            L === S.OGo.PENDING_INCOMING &&
                (0, i.jsx)(b.Z.Overlay, {
                    children: (0, i.jsx)(x.Z, {
                        user: t,
                        channelId: P.id,
                        applicationId: U ? k : void 0
                    })
                }),
            U &&
                O.map((e) =>
                    (0, i.jsx)(
                        b.Z.Overlay,
                        {
                            children: (0, i.jsx)(x.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: P.id
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(E.Z, {
                user: t,
                source: E.t.PANEL
            }),
            t.isProvisional &&
                (0, i.jsx)(o.Z, {
                    look: 'profile',
                    userId: t.id
                }),
            (0, i.jsx)(g.Z, {
                user: t,
                currentUser: n,
                displayProfile: y,
                className: A.activity
            }),
            (0, i.jsxs)(b.Z.Overlay, {
                className: A.overlay,
                children: [
                    !F &&
                        (null == y ? void 0 : y.bio) != null &&
                        (null == y ? void 0 : y.bio) !== '' &&
                        (0, i.jsx)(I.Z, {
                            heading: j.intl.string(j.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(f.Z, {
                                userBio: y.bio,
                                animateOnHover: !0,
                                isHovering: R,
                                userId: t.id
                            })
                        }),
                    (null == H ? void 0 : H.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(p.Z, {
                            applicationId: H.id,
                            commandIds: H.popularApplicationCommandIds,
                            channel: P
                        }),
                    B &&
                        (0, i.jsx)(I.Z, {
                            heading: j.intl.string(j.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(C.Z, { applicationIds: w })
                        }),
                    (0, i.jsx)(I.Z, {
                        heading: t.bot ? j.intl.string(j.t['A//N4u']) : j.intl.string(j.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(v.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
