n.d(t, { Z: () => w });
var r = n(255367);
n(73800);
var i = n(657707),
    l = n(442837),
    a = n(692547),
    o = n(320582),
    s = n(246016),
    c = n(189156),
    u = n(699516),
    d = n(246946),
    p = n(5192),
    h = n(621853),
    f = n(209698),
    m = n(172351),
    g = n(648052),
    b = n(280885),
    _ = n(483424),
    y = n(681837),
    C = n(78806),
    x = n(91433),
    v = n(900927),
    O = n(944043),
    j = n(678738),
    E = n(638970),
    S = n(502762),
    I = n(530),
    P = n(827313),
    Z = n(228168),
    T = n(981631),
    N = n(388032),
    A = n(283189);
function w(e) {
    let { user: t, currentUser: n, displayProfile: w, channel: R, isHovering: M, onOpenProfile: D } = e,
        { relationshipType: k, originApplicationId: L } = (0, l.cj)([u.Z], () => ({
            relationshipType: u.Z.getRelationshipType(t.id),
            originApplicationId: u.Z.getOriginApplicationId(t.id)
        })),
        U = (0, o.vh)(t.id),
        B = (0, s.Y)({ userId: t.id }),
        F = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation),
        H = (0, l.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        G = (0, f.b)({ location: 'UserProfileSidebarBody' });
    return (0, r.jsxs)('div', {
        className: A.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                nickname: p.ZP.getName(null, R.id, t),
                pronouns: null == w ? void 0 : w.pronouns,
                onOpenProfile: D,
                tags: (0, r.jsx)(g.Z, {
                    displayProfile: w,
                    themeType: Z.lY.SIDEBAR
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(y.Z, { userId: t.id }),
                        !F &&
                            (0, r.jsx)(P.Z, {
                                userId: t.id,
                                isHovering: M,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            k === T.OGo.PENDING_INCOMING &&
                (0, r.jsx)(S.Z.Overlay, {
                    children: (0, r.jsx)(x.Z, {
                        user: t,
                        channelId: R.id,
                        applicationId: L
                    })
                }),
            U.map((e) =>
                (0, r.jsx)(
                    S.Z.Overlay,
                    {
                        children: (0, r.jsx)(x.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: R.id
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(O.Z, {
                user: t,
                className: A.card
            }),
            t.isProvisional &&
                (0, r.jsx)(S.Z.Overlay, {
                    className: A.card,
                    children: (0, r.jsx)(j.Z, {
                        heading: N.intl.string(N.t.Iyka0d),
                        headingIcon: (0, r.jsx)(i.P4T, {
                            size: 'xxs',
                            color: a.Z.colors.HEADER_PRIMARY
                        }),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(c.n, { userId: t.id })
                    })
                }),
            G
                ? (0, r.jsx)(E.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: w,
                      onOpenUserProfileModal: D
                  })
                : (0, r.jsx)(_.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: w,
                      className: A.card
                  }),
            (0, r.jsxs)(S.Z.Overlay, {
                className: A.overlay,
                children: [
                    !F &&
                        (null == w ? void 0 : w.bio) != null &&
                        (null == w ? void 0 : w.bio) !== '' &&
                        (0, r.jsx)(j.Z, {
                            heading: N.intl.string(N.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(b.Z, {
                                userBio: w.bio,
                                animateOnHover: !0,
                                isHovering: M,
                                userId: t.id
                            })
                        }),
                    (null == H ? void 0 : H.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(m.Z, {
                            applicationId: H.id,
                            commandIds: H.popularApplicationCommandIds,
                            channel: R
                        }),
                    B.length > 0 &&
                        (0, r.jsx)(j.Z, {
                            heading: N.intl.string(N.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(C.Z, { applicationIds: B })
                        }),
                    (0, r.jsx)(j.Z, {
                        heading: t.bot ? N.intl.string(N.t['A//N4u']) : N.intl.string(N.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(v.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
