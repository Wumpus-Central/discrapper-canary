n.d(t, { Z: () => A });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(372460),
    r = n(320582),
    s = n(246016),
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
    y = n(430282);
function A(e) {
    let { user: t, currentUser: n, displayProfile: A, channel: P, isHovering: R, onOpenProfile: M } = e,
        { relationshipType: L, originApplicationId: k } = (0, l.cj)([c.Z], () => ({
            relationshipType: c.Z.getRelationshipType(t.id),
            originApplicationId: c.Z.getOriginApplicationId(t.id)
        })),
        O = (0, r.vh)(t.id),
        D = (0, s.Y)({
            userId: t.id,
            location: 'UserProfilePanelBody'
        }),
        w = (0, a.wn)({ location: 'UserProfilePanelBody' }),
        U = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation),
        B = (0, l.e7)([h.Z], () => {
            var e;
            return null === (e = h.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: y.body,
        children: [
            (0, i.jsx)(Z.Z, {
                user: t,
                profileType: T.y0.PANEL,
                nickname: u.ZP.getName(null, P.id, t),
                pronouns: null == A ? void 0 : A.pronouns,
                onOpenProfile: M,
                tags: (0, i.jsx)(m.Z, {
                    displayProfile: A,
                    profileType: T.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(_.Z, { userId: t.id }),
                        !U &&
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
                        applicationId: w ? k : void 0
                    })
                }),
            w &&
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
                (0, i.jsx)(o.wQ, {
                    userId: t.id,
                    headingColor: 'header-primary'
                }),
            (0, i.jsx)(g.Z, {
                user: t,
                currentUser: n,
                displayProfile: A,
                className: y.activity
            }),
            (0, i.jsxs)(b.Z.Overlay, {
                className: y.overlay,
                children: [
                    !U &&
                        (null == A ? void 0 : A.bio) != null &&
                        (null == A ? void 0 : A.bio) !== '' &&
                        (0, i.jsx)(I.Z, {
                            heading: j.intl.string(j.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(f.Z, {
                                userBio: A.bio,
                                animateOnHover: !0,
                                isHovering: R,
                                userId: t.id
                            })
                        }),
                    (null == B ? void 0 : B.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(p.Z, {
                            applicationId: B.id,
                            commandIds: B.popularApplicationCommandIds,
                            channel: P
                        }),
                    D.length > 0 &&
                        (0, i.jsx)(I.Z, {
                            heading: j.intl.string(j.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(C.Z, { applicationIds: D })
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
