n.d(t, { Z: () => S });
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
    p = n(172351),
    h = n(648052),
    f = n(280885),
    m = n(483424),
    g = n(681837),
    b = n(78806),
    _ = n(91433),
    y = n(900927),
    C = n(944043),
    x = n(678738),
    v = n(502762),
    j = n(530),
    O = n(827313),
    E = n(228168),
    N = n(981631),
    I = n(388032),
    P = n(969627);
function S(e) {
    let { user: t, currentUser: n, displayProfile: S, channel: Z, isHovering: T, onOpenProfile: A } = e,
        { relationshipType: w, originApplicationId: R } = (0, i.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        k = (0, l.vh)(t.id),
        M = (0, o.Y)({ userId: t.id }),
        L = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        D = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        });
    return (0, r.jsxs)('div', {
        className: P.body,
        children: [
            (0, r.jsx)(j.Z, {
                user: t,
                profileType: E.y0.PANEL,
                nickname: u.ZP.getName(null, Z.id, t),
                pronouns: null == S ? void 0 : S.pronouns,
                onOpenProfile: A,
                tags: (0, r.jsx)(h.Z, {
                    displayProfile: S,
                    profileType: E.y0.PANEL
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Z, { userId: t.id }),
                        !L &&
                            (0, r.jsx)(O.Z, {
                                userId: t.id,
                                isHovering: T,
                                onOpenProfile: A
                            })
                    ]
                })
            }),
            w === N.OGo.PENDING_INCOMING &&
                (0, r.jsx)(v.Z.Overlay, {
                    children: (0, r.jsx)(_.Z, {
                        user: t,
                        channelId: Z.id,
                        applicationId: R
                    })
                }),
            k.map((e) =>
                (0, r.jsx)(
                    v.Z.Overlay,
                    {
                        children: (0, r.jsx)(_.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: Z.id
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(C.Z, {
                user: t,
                className: P.card
            }),
            t.isProvisional &&
                (0, r.jsx)(a.wQ, {
                    userId: t.id,
                    headingColor: 'header-primary'
                }),
            (0, r.jsx)(m.Z, {
                user: t,
                currentUser: n,
                displayProfile: S,
                className: P.card
            }),
            (0, r.jsxs)(v.Z.Overlay, {
                className: P.overlay,
                children: [
                    !L &&
                        (null == S ? void 0 : S.bio) != null &&
                        (null == S ? void 0 : S.bio) !== '' &&
                        (0, r.jsx)(x.Z, {
                            heading: I.NW.string(I.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(f.Z, {
                                userBio: S.bio,
                                animateOnHover: !0,
                                isHovering: T,
                                userId: t.id
                            })
                        }),
                    (null == D ? void 0 : D.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(p.Z, {
                            applicationId: D.id,
                            commandIds: D.popularApplicationCommandIds,
                            channel: Z
                        }),
                    M.length > 0 &&
                        (0, r.jsx)(x.Z, {
                            heading: I.NW.string(I.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(b.Z, { applicationIds: M })
                        }),
                    (0, r.jsx)(x.Z, {
                        heading: t.bot ? I.NW.string(I.t['A//N4u']) : I.NW.string(I.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(y.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
