t.d(n, { Z: () => E });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(372460),
    s = t(91896),
    r = t(699516),
    a = t(5192),
    c = t(111361),
    d = t(816988),
    u = t(648052),
    m = t(537006),
    x = t(681837),
    p = t(91433),
    f = t(944043),
    I = t(502762),
    h = t(530),
    v = t(740628),
    Z = t(643518),
    _ = t(228168),
    g = t(981631),
    j = t(171865);
function E(e) {
    var n;
    let { user: t, currentUser: E, channelId: N, displayProfile: y, initialSection: T, initialSubsection: P, friendToken: b, onClose: S } = e,
        { relationshipType: L, originApplicationId: C } = (0, l.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        A = (0, l.Wu)([s.Z], () => s.Z.getGameRelationshipsForUserOfType(t.id, g.OGo.PENDING_INCOMING)),
        O = (0, o.wn)({ location: 'UserProfileModalBody' }),
        M = (0, Z.Z)({
            user: t,
            currentUser: E,
            initialSubsection: P
        }),
        R = a.ZP.useName(null == y ? void 0 : y.guildId, N, t),
        U = t.id === E.id,
        { dimissibleUpsellsEnabled: B } = (0, d.u)({ location: 'UserProfileModalBody' }),
        F = (0, c.I5)(E);
    return (0, i.jsxs)('div', {
        className: j.body,
        children: [
            (0, i.jsx)(h.Z, {
                user: t,
                profileType: _.y0.FULL_SIZE,
                nickname: R,
                pronouns: null == y ? void 0 : y.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(x.Z, { userId: t.id }),
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: y,
                    profileType: _.y0.FULL_SIZE,
                    onClose: S
                })
            }),
            L === g.OGo.PENDING_INCOMING &&
                (0, i.jsx)(I.Z.Overlay, {
                    className: j.friendRequestBannerOverlay,
                    children: (0, i.jsx)(p.Z, {
                        user: t,
                        applicationId: O ? C : void 0,
                        guildId: null !== (n = null == y ? void 0 : y.guildId) && void 0 !== n ? n : void 0,
                        channelId: N,
                        friendToken: b,
                        className: j.friendRequestBanner
                    })
                }),
            O &&
                A.map((e) =>
                    (0, i.jsx)(
                        I.Z.Overlay,
                        {
                            className: j.friendRequestBannerOverlay,
                            children: (0, i.jsx)(p.Z, {
                                user: t,
                                channelId: N,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: j.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(f.Z, {
                user: t,
                source: f.t.MODAL
            }),
            B &&
                U &&
                (0, i.jsx)(m.Z, {
                    isPremiumUser: F,
                    onInteraction: S
                }),
            (0, i.jsx)(I.Z.Overlay, {
                className: j.overlay,
                children: (0, i.jsx)(v.Z, {
                    user: t,
                    currentUser: E,
                    displayProfile: y,
                    items: M,
                    initialSection: T,
                    initialSubsection: P,
                    onClose: S
                })
            })
        ]
    });
}
