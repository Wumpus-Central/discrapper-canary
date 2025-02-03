i.d(n, { Z: () => E });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(372460),
    s = i(320582),
    r = i(699516),
    a = i(5192),
    d = i(111361),
    c = i(816988),
    u = i(648052),
    m = i(537006),
    x = i(681837),
    p = i(91433),
    f = i(944043),
    I = i(502762),
    h = i(530),
    v = i(740628),
    g = i(643518),
    Z = i(228168),
    _ = i(981631),
    j = i(171865);
function E(e) {
    var n;
    let { user: i, currentUser: E, guildId: N, channelId: y, displayProfile: T, initialSection: P, initialSubsection: b, friendToken: S, onClose: L } = e,
        { relationshipType: C, originApplicationId: A } = (0, l.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(i.id),
            originApplicationId: r.Z.getOriginApplicationId(i.id)
        })),
        M = (0, s.vh)(i.id),
        O = (0, o.wn)({ location: 'UserProfileModalBody' }),
        R = i.id === E.id,
        U = (0, d.I5)(E),
        B = a.ZP.useName(null == T ? void 0 : T.guildId, y, i),
        F = (0, g.Z)({
            user: i,
            currentUser: E,
            guildId: N,
            initialSubsection: b
        }),
        { dimissibleUpsellsEnabled: D } = (0, c.u)({ location: 'UserProfileModalBody' });
    return (0, t.jsxs)('div', {
        className: j.body,
        children: [
            (0, t.jsx)(h.Z, {
                user: i,
                profileType: Z.y0.FULL_SIZE,
                nickname: B,
                pronouns: null == T ? void 0 : T.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, t.jsx)(x.Z, { userId: i.id }),
                tags: (0, t.jsx)(u.Z, {
                    displayProfile: T,
                    profileType: Z.y0.FULL_SIZE,
                    onClose: L
                })
            }),
            C === _.OGo.PENDING_INCOMING &&
                (0, t.jsx)(I.Z.Overlay, {
                    className: j.friendRequestBannerOverlay,
                    children: (0, t.jsx)(p.Z, {
                        user: i,
                        applicationId: O ? A : void 0,
                        guildId: null !== (n = null == T ? void 0 : T.guildId) && void 0 !== n ? n : void 0,
                        channelId: y,
                        friendToken: S,
                        className: j.friendRequestBanner
                    })
                }),
            O &&
                M.map((e) =>
                    (0, t.jsx)(
                        I.Z.Overlay,
                        {
                            className: j.friendRequestBannerOverlay,
                            children: (0, t.jsx)(p.Z, {
                                user: i,
                                channelId: y,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: j.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, t.jsx)(f.Z, {
                user: i,
                source: f.t.MODAL
            }),
            D &&
                R &&
                (0, t.jsx)(m.Z, {
                    isPremiumUser: U,
                    onInteraction: L
                }),
            (0, t.jsx)(I.Z.Overlay, {
                className: j.overlay,
                children: (0, t.jsx)(v.Z, {
                    user: i,
                    currentUser: E,
                    displayProfile: T,
                    guildId: N,
                    items: F,
                    initialSection: P,
                    initialSubsection: b,
                    onClose: L
                })
            })
        ]
    });
}
