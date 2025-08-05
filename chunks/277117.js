n.d(t, { Z: () => R });
var r = n(255367);
n(73800);
var i = n(657707),
    l = n(442837),
    a = n(692547),
    s = n(320582),
    o = n(246016),
    c = n(189156),
    d = n(699516),
    u = n(246946),
    h = n(5192),
    p = n(621853),
    f = n(209698),
    g = n(172351),
    m = n(648052),
    b = n(280885),
    _ = n(483424),
    y = n(681837),
    j = n(78806),
    O = n(91433),
    x = n(900927),
    v = n(944043),
    C = n(678738),
    E = n(638970),
    Z = n(502762),
    I = n(530),
    S = n(827313),
    P = n(228168),
    T = n(981631),
    N = n(388032),
    w = n(283189);
function R(e) {
    let { user: t, currentUser: n, displayProfile: R, channel: A, isHovering: D, onOpenProfile: L } = e,
        { relationshipType: M, originApplicationId: k } = (0, l.cj)([d.Z], () => ({
            relationshipType: d.Z.getRelationshipType(t.id),
            originApplicationId: d.Z.getOriginApplicationId(t.id)
        })),
        U = (0, s.vh)(t.id),
        G = (0, o.Y)({ userId: t.id }),
        F = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        B = (0, l.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        H = (0, f.b)({ location: 'UserProfileSidebarBody' });
    return (0, r.jsxs)('div', {
        className: w.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                nickname: h.ZP.getName(null, A.id, t),
                pronouns: null == R ? void 0 : R.pronouns,
                onOpenProfile: L,
                tags: (0, r.jsx)(m.Z, {
                    displayProfile: R,
                    themeType: P.lY.SIDEBAR
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(y.Z, { userId: t.id }),
                        !F &&
                            (0, r.jsx)(S.Z, {
                                userId: t.id,
                                isHovering: D,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            M === T.OGo.PENDING_INCOMING &&
                (0, r.jsx)(Z.Z.Overlay, {
                    children: (0, r.jsx)(O.Z, {
                        user: t,
                        channelId: A.id,
                        applicationId: k
                    })
                }),
            U.map((e) =>
                (0, r.jsx)(
                    Z.Z.Overlay,
                    {
                        children: (0, r.jsx)(O.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: A.id
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(v.Z, {
                user: t,
                className: w.card
            }),
            t.isProvisional &&
                (0, r.jsx)(Z.Z.Overlay, {
                    className: w.card,
                    children: (0, r.jsx)(C.Z, {
                        heading: N.intl.string(N.t.Iyka0d),
                        headingIcon: (0, r.jsx)(i.Mgn, {
                            size: 'xxs',
                            color: a.Z.colors.HEADER_PRIMARY
                        }),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(c.n, { userId: t.id })
                    })
                }),
            H
                ? (0, r.jsx)(E.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: R,
                      onOpenUserProfileModal: L
                  })
                : (0, r.jsx)(_.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: R,
                      className: w.card
                  }),
            (0, r.jsxs)(Z.Z.Overlay, {
                className: w.overlay,
                children: [
                    !F &&
                        (null == R ? void 0 : R.bio) != null &&
                        (null == R ? void 0 : R.bio) !== '' &&
                        (0, r.jsx)(C.Z, {
                            heading: N.intl.string(N.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(b.Z, {
                                userBio: R.bio,
                                animateOnHover: !0,
                                isHovering: D,
                                userId: t.id
                            })
                        }),
                    (null == B ? void 0 : B.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(g.Z, {
                            applicationId: B.id,
                            commandIds: B.popularApplicationCommandIds,
                            channel: A
                        }),
                    G.length > 0 &&
                        (0, r.jsx)(C.Z, {
                            heading: N.intl.string(N.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(j.Z, { applicationIds: G })
                        }),
                    (0, r.jsx)(C.Z, {
                        heading: t.bot ? N.intl.string(N.t['A//N4u']) : N.intl.string(N.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(x.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
