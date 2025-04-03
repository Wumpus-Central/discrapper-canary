n.d(t, { Z: () => Z });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(372460),
    o = n(320582),
    a = n(246016),
    s = n(189156),
    c = n(699516),
    u = n(246946),
    d = n(5192),
    p = n(621853),
    h = n(172351),
    f = n(648052),
    m = n(280885),
    g = n(483424),
    b = n(681837),
    _ = n(78806),
    C = n(91433),
    y = n(900927),
    x = n(944043),
    v = n(678738),
    j = n(502762),
    O = n(530),
    E = n(827313),
    N = n(228168),
    I = n(981631),
    P = n(388032),
    S = n(969627);
function Z(e) {
    let { user: t, currentUser: n, displayProfile: Z, channel: T, isHovering: A, onOpenProfile: w } = e,
        { relationshipType: R, originApplicationId: M } = (0, i.cj)([c.Z], () => ({
            relationshipType: c.Z.getRelationshipType(t.id),
            originApplicationId: c.Z.getOriginApplicationId(t.id)
        })),
        k = (0, o.vh)(t.id),
        L = (0, a.Y)({
            userId: t.id,
            location: 'UserProfilePanelBody'
        }),
        D = (0, l.wn)({ location: 'UserProfilePanelBody' }),
        W = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        U = (0, i.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getUserProfile(t.id)) ? void 0 : e.application;
        });
    return (0, r.jsxs)('div', {
        className: S.body,
        children: [
            (0, r.jsx)(O.Z, {
                user: t,
                profileType: N.y0.PANEL,
                nickname: d.ZP.getName(null, T.id, t),
                pronouns: null == Z ? void 0 : Z.pronouns,
                onOpenProfile: w,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: Z,
                    profileType: N.y0.PANEL
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.Z, { userId: t.id }),
                        !W &&
                            (0, r.jsx)(E.Z, {
                                userId: t.id,
                                isHovering: A,
                                onOpenProfile: w
                            })
                    ]
                })
            }),
            R === I.OGo.PENDING_INCOMING &&
                (0, r.jsx)(j.Z.Overlay, {
                    children: (0, r.jsx)(C.Z, {
                        user: t,
                        channelId: T.id,
                        applicationId: D ? M : void 0
                    })
                }),
            D &&
                k.map((e) =>
                    (0, r.jsx)(
                        j.Z.Overlay,
                        {
                            children: (0, r.jsx)(C.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: T.id
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, r.jsx)(x.Z, {
                user: t,
                source: x.t.PANEL
            }),
            t.isProvisional &&
                (0, r.jsx)(s.wQ, {
                    userId: t.id,
                    headingColor: 'header-primary'
                }),
            (0, r.jsx)(g.Z, {
                user: t,
                currentUser: n,
                displayProfile: Z,
                className: S.activity
            }),
            (0, r.jsxs)(j.Z.Overlay, {
                className: S.overlay,
                children: [
                    !W &&
                        (null == Z ? void 0 : Z.bio) != null &&
                        (null == Z ? void 0 : Z.bio) !== '' &&
                        (0, r.jsx)(v.Z, {
                            heading: P.NW.string(P.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(m.Z, {
                                userBio: Z.bio,
                                animateOnHover: !0,
                                isHovering: A,
                                userId: t.id
                            })
                        }),
                    (null == U ? void 0 : U.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(h.Z, {
                            applicationId: U.id,
                            commandIds: U.popularApplicationCommandIds,
                            channel: T
                        }),
                    L.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            heading: P.NW.string(P.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(_.Z, { applicationIds: L })
                        }),
                    (0, r.jsx)(v.Z, {
                        heading: t.bot ? P.NW.string(P.t['A//N4u']) : P.NW.string(P.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(y.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
