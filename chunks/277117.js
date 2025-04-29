n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(320582),
    o = n(246016),
    a = n(189156),
    s = n(699516),
    c = n(246946),
    u = n(5192),
    d = n(621853),
    p = n(209698),
    h = n(172351),
    f = n(648052),
    m = n(280885),
    g = n(483424),
    b = n(681837),
    _ = n(78806),
    y = n(91433),
    C = n(900927),
    x = n(944043),
    v = n(678738),
    j = n(638970),
    O = n(502762),
    E = n(530),
    I = n(827313),
    P = n(228168),
    S = n(981631),
    Z = n(388032),
    N = n(283189);
function T(e) {
    let { user: t, currentUser: n, displayProfile: T, channel: A, isHovering: w, onOpenProfile: R } = e,
        { relationshipType: k, originApplicationId: M } = (0, i.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        L = (0, l.vh)(t.id),
        D = (0, o.Y)({ userId: t.id }),
        U = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        B = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        G = (0, p.b)({ location: 'UserProfileSidebarBody' });
    return (0, r.jsxs)('div', {
        className: N.body,
        children: [
            (0, r.jsx)(E.Z, {
                user: t,
                nickname: u.ZP.getName(null, A.id, t),
                pronouns: null == T ? void 0 : T.pronouns,
                onOpenProfile: R,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: T,
                    themeType: P.lY.SIDEBAR
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.Z, { userId: t.id }),
                        !U &&
                            (0, r.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: w,
                                onOpenProfile: R
                            })
                    ]
                })
            }),
            k === S.OGo.PENDING_INCOMING &&
                (0, r.jsx)(O.Z.Overlay, {
                    children: (0, r.jsx)(y.Z, {
                        user: t,
                        channelId: A.id,
                        applicationId: M
                    })
                }),
            L.map((e) =>
                (0, r.jsx)(
                    O.Z.Overlay,
                    {
                        children: (0, r.jsx)(y.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: A.id
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(x.Z, {
                user: t,
                className: N.card
            }),
            t.isProvisional &&
                (0, r.jsx)(a.wQ, {
                    userId: t.id,
                    headingColor: 'header-primary'
                }),
            G
                ? (0, r.jsx)(j.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: T,
                      onOpenUserProfileModal: R
                  })
                : (0, r.jsx)(g.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: T,
                      className: N.card
                  }),
            (0, r.jsxs)(O.Z.Overlay, {
                className: N.overlay,
                children: [
                    !U &&
                        (null == T ? void 0 : T.bio) != null &&
                        (null == T ? void 0 : T.bio) !== '' &&
                        (0, r.jsx)(v.Z, {
                            heading: Z.intl.string(Z.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(m.Z, {
                                userBio: T.bio,
                                animateOnHover: !0,
                                isHovering: w,
                                userId: t.id
                            })
                        }),
                    (null == B ? void 0 : B.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(h.Z, {
                            applicationId: B.id,
                            commandIds: B.popularApplicationCommandIds,
                            channel: A
                        }),
                    D.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            heading: Z.intl.string(Z.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(_.Z, { applicationIds: D })
                        }),
                    (0, r.jsx)(v.Z, {
                        heading: t.bot ? Z.intl.string(Z.t['A//N4u']) : Z.intl.string(Z.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(C.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
