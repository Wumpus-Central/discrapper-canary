t.d(n, {
    Z: function () {
        return b;
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
    u = t(648052),
    f = t(537006),
    m = t(681837),
    I = t(91433),
    x = t(944043),
    p = t(502762),
    h = t(530),
    v = t(740628),
    Z = t(643518),
    g = t(228168),
    j = t(981631),
    _ = t(171865);
function b(e) {
    var n;
    let { user: t, currentUser: b, channelId: E, displayProfile: N, initialSection: y, initialSubsection: S, friendToken: T, onClose: P } = e,
        { relationshipType: C, originApplicationId: A } = (0, l.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        L = (0, l.Wu)([r.Z], () => r.Z.getGameRelationshipsForUser(t.id, j.OGo.PENDING_INCOMING)),
        M = (0, o.wn)({ location: 'UserProfileModalBody' }),
        R = (0, Z.Z)({
            user: t,
            currentUser: b,
            initialSubsection: S
        }),
        O = c.ZP.useName(null == N ? void 0 : N.guildId, E, t),
        U = t.id === b.id,
        { dimissibleUpsellsEnabled: B } = (0, d.u)({ location: 'UserProfileModalBody' }),
        D = (0, a.I5)(b);
    return (0, i.jsxs)('div', {
        className: _.body,
        children: [
            (0, i.jsx)(h.Z, {
                user: t,
                profileType: g.y0.FULL_SIZE,
                nickname: O,
                pronouns: null == N ? void 0 : N.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(m.Z, { userId: t.id }),
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: N,
                    profileType: g.y0.FULL_SIZE,
                    onClose: P
                })
            }),
            C === j.OGo.PENDING_INCOMING &&
                (0, i.jsx)(p.Z.Overlay, {
                    className: _.friendRequestBannerOverlay,
                    children: (0, i.jsx)(I.Z, {
                        user: t,
                        applicationId: M ? A : void 0,
                        guildId: null !== (n = null == N ? void 0 : N.guildId) && void 0 !== n ? n : void 0,
                        channelId: E,
                        friendToken: T,
                        className: _.friendRequestBanner
                    })
                }),
            M &&
                L.map((e) =>
                    (0, i.jsx)(
                        p.Z.Overlay,
                        {
                            className: _.friendRequestBannerOverlay,
                            children: (0, i.jsx)(I.Z, {
                                user: t,
                                channelId: E,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: _.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(x.Z, {
                user: t,
                source: x.t.MODAL
            }),
            B &&
                U &&
                (0, i.jsx)(f.Z, {
                    isPremiumUser: D,
                    onInteraction: P
                }),
            (0, i.jsx)(p.Z.Overlay, {
                className: _.overlay,
                children: (0, i.jsx)(v.Z, {
                    user: t,
                    currentUser: b,
                    displayProfile: N,
                    items: R,
                    initialSection: y,
                    initialSubsection: S,
                    onClose: P
                })
            })
        ]
    });
}
