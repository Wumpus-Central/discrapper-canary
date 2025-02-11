t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(372460),
    s = t(320582),
    r = t(699516),
    a = t(5192),
    d = t(111361),
    c = t(648052),
    u = t(537006),
    I = t(681837),
    f = t(91433),
    p = t(944043),
    x = t(502762),
    m = t(530),
    _ = t(740628),
    h = t(643518),
    Z = t(228168),
    v = t(981631),
    g = t(757672);
function j(e) {
    var n;
    let { user: t, currentUser: j, guildId: E, channelId: y, displayProfile: N, initialSection: T, initialSubsection: b, friendToken: P, onClose: S } = e,
        { relationshipType: L, originApplicationId: C } = (0, l.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        A = (0, s.vh)(t.id),
        O = (0, o.wn)({ location: 'UserProfileModalBody' }),
        R = t.id === j.id,
        M = (0, d.I5)(j),
        U = a.ZP.useName(null == N ? void 0 : N.guildId, y, t),
        B = (0, h.Z)({
            user: t,
            currentUser: j,
            guildId: E,
            initialSubsection: b
        });
    return (0, i.jsxs)('div', {
        className: g.body,
        children: [
            (0, i.jsx)(m.Z, {
                user: t,
                profileType: Z.y0.FULL_SIZE,
                nickname: U,
                pronouns: null == N ? void 0 : N.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(I.Z, { userId: t.id }),
                tags: (0, i.jsx)(c.Z, {
                    displayProfile: N,
                    profileType: Z.y0.FULL_SIZE,
                    onClose: S
                })
            }),
            L === v.OGo.PENDING_INCOMING &&
                (0, i.jsx)(x.Z.Overlay, {
                    className: g.friendRequestBannerOverlay,
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        applicationId: O ? C : void 0,
                        guildId: null !== (n = null == N ? void 0 : N.guildId) && void 0 !== n ? n : void 0,
                        channelId: y,
                        friendToken: P,
                        className: g.friendRequestBanner
                    })
                }),
            O &&
                A.map((e) =>
                    (0, i.jsx)(
                        x.Z.Overlay,
                        {
                            className: g.friendRequestBannerOverlay,
                            children: (0, i.jsx)(f.Z, {
                                user: t,
                                channelId: y,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: g.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(p.Z, {
                user: t,
                source: p.t.MODAL
            }),
            R &&
                (0, i.jsx)(u.Z, {
                    isPremiumUser: M,
                    onInteraction: S
                }),
            (0, i.jsx)(x.Z.Overlay, {
                className: g.overlay,
                children: (0, i.jsx)(_.Z, {
                    user: t,
                    currentUser: j,
                    displayProfile: N,
                    guildId: E,
                    items: B,
                    initialSection: T,
                    initialSubsection: b,
                    onClose: S
                })
            })
        ]
    });
}
