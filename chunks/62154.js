t.d(n, { Z: () => E });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(372460),
    s = t(320582),
    r = t(699516),
    a = t(5192),
    d = t(111361),
    c = t(816988),
    u = t(648052),
    m = t(537006),
    x = t(681837),
    p = t(91433),
    I = t(944043),
    f = t(502762),
    h = t(530),
    v = t(740628),
    Z = t(643518),
    g = t(228168),
    _ = t(981631),
    j = t(171865);
function E(e) {
    var n;
    let { user: t, currentUser: E, guildId: N, channelId: y, displayProfile: T, initialSection: P, initialSubsection: S, friendToken: b, onClose: L } = e,
        { relationshipType: C, originApplicationId: A } = (0, l.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        O = (0, s.vh)(t.id),
        M = (0, o.wn)({ location: 'UserProfileModalBody' }),
        R = t.id === E.id,
        U = (0, d.I5)(E),
        B = a.ZP.useName(null == T ? void 0 : T.guildId, y, t),
        F = (0, Z.Z)({
            user: t,
            currentUser: E,
            guildId: N,
            initialSubsection: S
        }),
        { dimissibleUpsellsEnabled: D } = (0, c.u)({ location: 'UserProfileModalBody' });
    return (0, i.jsxs)('div', {
        className: j.body,
        children: [
            (0, i.jsx)(h.Z, {
                user: t,
                profileType: g.y0.FULL_SIZE,
                nickname: B,
                pronouns: null == T ? void 0 : T.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(x.Z, { userId: t.id }),
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: T,
                    profileType: g.y0.FULL_SIZE,
                    onClose: L
                })
            }),
            C === _.OGo.PENDING_INCOMING &&
                (0, i.jsx)(f.Z.Overlay, {
                    className: j.friendRequestBannerOverlay,
                    children: (0, i.jsx)(p.Z, {
                        user: t,
                        applicationId: M ? A : void 0,
                        guildId: null !== (n = null == T ? void 0 : T.guildId) && void 0 !== n ? n : void 0,
                        channelId: y,
                        friendToken: b,
                        className: j.friendRequestBanner
                    })
                }),
            M &&
                O.map((e) =>
                    (0, i.jsx)(
                        f.Z.Overlay,
                        {
                            className: j.friendRequestBannerOverlay,
                            children: (0, i.jsx)(p.Z, {
                                user: t,
                                channelId: y,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: j.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(I.Z, {
                user: t,
                source: I.t.MODAL
            }),
            D &&
                R &&
                (0, i.jsx)(m.Z, {
                    isPremiumUser: U,
                    onInteraction: L
                }),
            (0, i.jsx)(f.Z.Overlay, {
                className: j.overlay,
                children: (0, i.jsx)(v.Z, {
                    user: t,
                    currentUser: E,
                    displayProfile: T,
                    guildId: N,
                    items: F,
                    initialSection: P,
                    initialSubsection: S,
                    onClose: L
                })
            })
        ]
    });
}
