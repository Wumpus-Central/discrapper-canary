t.d(n, { Z: () => x });
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(372460),
    l = t(320582),
    s = t(699516),
    c = t(5192),
    a = t(111361),
    d = t(648052),
    u = t(537006),
    f = t(681837),
    p = t(91433),
    m = t(944043),
    I = t(502762),
    b = t(530),
    g = t(740628),
    v = t(643518),
    y = t(228168),
    j = t(981631),
    h = t(608685);
function x(e) {
    var n;
    let { user: t, currentUser: x, guildId: O, channelId: _, displayProfile: Z, initialSection: N, initialSubsection: P, friendToken: E, onClose: S } = e,
        { relationshipType: T, originApplicationId: C } = (0, o.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        L = (0, l.vh)(t.id),
        w = (0, i.wn)({ location: 'UserProfileModalBody' }),
        A = t.id === x.id,
        M = (0, a.I5)(x),
        R = c.ZP.useName(null == Z ? void 0 : Z.guildId, _, t),
        U = (0, v.Z)({
            user: t,
            currentUser: x,
            guildId: O,
            initialSubsection: P
        });
    return (0, r.jsxs)('div', {
        className: h.body,
        children: [
            (0, r.jsx)(b.Z, {
                user: t,
                profileType: y.y0.FULL_SIZE,
                nickname: R,
                pronouns: null == Z ? void 0 : Z.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, r.jsx)(f.Z, { userId: t.id }),
                tags: (0, r.jsx)(d.Z, {
                    displayProfile: Z,
                    profileType: y.y0.FULL_SIZE,
                    onClose: S
                })
            }),
            T === j.OGo.PENDING_INCOMING &&
                (0, r.jsx)(I.Z.Overlay, {
                    className: h.friendRequestBannerOverlay,
                    children: (0, r.jsx)(p.Z, {
                        user: t,
                        applicationId: w ? C : void 0,
                        guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
                        channelId: _,
                        friendToken: E,
                        className: h.friendRequestBanner
                    })
                }),
            w &&
                L.map((e) =>
                    (0, r.jsx)(
                        I.Z.Overlay,
                        {
                            className: h.friendRequestBannerOverlay,
                            children: (0, r.jsx)(p.Z, {
                                user: t,
                                channelId: _,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: h.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, r.jsx)(m.Z, {
                user: t,
                source: m.t.MODAL
            }),
            A &&
                (0, r.jsx)(u.Z, {
                    isPremiumUser: M,
                    onInteraction: S
                }),
            (0, r.jsx)(I.Z.Overlay, {
                className: h.overlay,
                children: (0, r.jsx)(g.Z, {
                    user: t,
                    currentUser: x,
                    displayProfile: Z,
                    guildId: O,
                    items: U,
                    initialSection: N,
                    initialSubsection: P,
                    onClose: S
                })
            })
        ]
    });
}
