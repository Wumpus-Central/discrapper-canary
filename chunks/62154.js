t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(372460),
    r = t(91896),
    s = t(699516),
    c = t(5192),
    a = t(111361),
    d = t(816988),
    u = t(513236),
    f = t(648052),
    m = t(537006),
    p = t(681837),
    I = t(91433),
    x = t(944043),
    h = t(502762),
    v = t(530),
    g = t(740628),
    Z = t(643518),
    j = t(228168),
    _ = t(981631),
    b = t(171865);
function E(e) {
    var n;
    let { user: t, currentUser: E, channelId: N, displayProfile: y, initialSection: S, initialSubsection: T, friendToken: P, onClose: C } = e,
        { relationshipType: A, originApplicationId: L } = (0, l.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        M = (0, l.Wu)([r.Z], () => r.Z.getGameRelationshipsForUser(t.id, _.OGo.PENDING_INCOMING)),
        R = (0, l.Wu)([r.Z], () => r.Z.getGameFriendsForUser(t.id)),
        O = (0, o.wn)({ location: 'UserProfileModalBody' }),
        U = (0, u.P)({
            userId: t.id,
            relationshipType: A,
            gameFriends: R,
            pendingIncomingGameRelationships: M
        }),
        B = (0, Z.Z)({
            user: t,
            currentUser: E,
            initialSubsection: T
        }),
        F = c.ZP.useName(null == y ? void 0 : y.guildId, N, t),
        D = t.id === E.id,
        { dimissibleUpsellsEnabled: G } = (0, d.u)({ location: 'UserProfileModalBody' }),
        w = (0, a.I5)(E);
    return (0, i.jsxs)('div', {
        className: b.body,
        children: [
            (0, i.jsx)(v.Z, {
                user: t,
                profileType: j.y0.FULL_SIZE,
                nickname: F,
                pronouns: null == y ? void 0 : y.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(p.Z, { userId: t.id }),
                tags: (0, i.jsx)(f.Z, {
                    displayProfile: y,
                    profileType: j.y0.FULL_SIZE,
                    onClose: C
                }),
                hideIdentityInfo: U
            }),
            A === _.OGo.PENDING_INCOMING &&
                (0, i.jsx)(h.Z.Overlay, {
                    className: b.friendRequestBannerOverlay,
                    children: (0, i.jsx)(I.Z, {
                        user: t,
                        applicationId: O ? L : void 0,
                        guildId: null !== (n = null == y ? void 0 : y.guildId) && void 0 !== n ? n : void 0,
                        channelId: N,
                        friendToken: P,
                        className: b.friendRequestBanner
                    })
                }),
            O &&
                M.map((e) =>
                    (0, i.jsx)(
                        h.Z.Overlay,
                        {
                            className: b.friendRequestBannerOverlay,
                            children: (0, i.jsx)(I.Z, {
                                user: t,
                                channelId: N,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: b.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(x.Z, {
                user: t,
                source: x.t.MODAL
            }),
            G &&
                D &&
                (0, i.jsx)(m.Z, {
                    isPremiumUser: w,
                    onInteraction: C
                }),
            (0, i.jsx)(h.Z.Overlay, {
                className: b.overlay,
                children: (0, i.jsx)(g.Z, {
                    user: t,
                    currentUser: E,
                    displayProfile: y,
                    items: B,
                    initialSection: S,
                    initialSubsection: T,
                    onClose: C,
                    hideIdentityInfo: U
                })
            })
        ]
    });
}
