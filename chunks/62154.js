i.d(n, { Z: () => j });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(372460),
    s = i(320582),
    r = i(699516),
    a = i(5192),
    d = i(111361),
    c = i(648052),
    u = i(537006),
    m = i(681837),
    x = i(91433),
    p = i(944043),
    f = i(502762),
    I = i(530),
    h = i(740628),
    v = i(643518),
    Z = i(228168),
    g = i(981631),
    _ = i(171865);
function j(e) {
    var n;
    let { user: i, currentUser: j, guildId: E, channelId: N, displayProfile: y, initialSection: T, initialSubsection: b, friendToken: S, onClose: P } = e,
        { relationshipType: L, originApplicationId: C } = (0, l.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(i.id),
            originApplicationId: r.Z.getOriginApplicationId(i.id)
        })),
        A = (0, s.vh)(i.id),
        O = (0, o.wn)({ location: 'UserProfileModalBody' }),
        M = i.id === j.id,
        R = (0, d.I5)(j),
        U = a.ZP.useName(null == y ? void 0 : y.guildId, N, i),
        F = (0, v.Z)({
            user: i,
            currentUser: j,
            guildId: E,
            initialSubsection: b
        });
    return (0, t.jsxs)('div', {
        className: _.body,
        children: [
            (0, t.jsx)(I.Z, {
                user: i,
                profileType: Z.y0.FULL_SIZE,
                nickname: U,
                pronouns: null == y ? void 0 : y.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, t.jsx)(m.Z, { userId: i.id }),
                tags: (0, t.jsx)(c.Z, {
                    displayProfile: y,
                    profileType: Z.y0.FULL_SIZE,
                    onClose: P
                })
            }),
            L === g.OGo.PENDING_INCOMING &&
                (0, t.jsx)(f.Z.Overlay, {
                    className: _.friendRequestBannerOverlay,
                    children: (0, t.jsx)(x.Z, {
                        user: i,
                        applicationId: O ? C : void 0,
                        guildId: null !== (n = null == y ? void 0 : y.guildId) && void 0 !== n ? n : void 0,
                        channelId: N,
                        friendToken: S,
                        className: _.friendRequestBanner
                    })
                }),
            O &&
                A.map((e) =>
                    (0, t.jsx)(
                        f.Z.Overlay,
                        {
                            className: _.friendRequestBannerOverlay,
                            children: (0, t.jsx)(x.Z, {
                                user: i,
                                channelId: N,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: _.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, t.jsx)(p.Z, {
                user: i,
                source: p.t.MODAL
            }),
            M &&
                (0, t.jsx)(u.Z, {
                    isPremiumUser: R,
                    onInteraction: P
                }),
            (0, t.jsx)(f.Z.Overlay, {
                className: _.overlay,
                children: (0, t.jsx)(h.Z, {
                    user: i,
                    currentUser: j,
                    displayProfile: y,
                    guildId: E,
                    items: F,
                    initialSection: T,
                    initialSubsection: b,
                    onClose: P
                })
            })
        ]
    });
}
