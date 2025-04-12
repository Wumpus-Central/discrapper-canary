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
    b = t(944043),
    m = t(502762),
    I = t(530),
    g = t(740628),
    y = t(643518),
    h = t(228168),
    j = t(981631),
    v = t(405666);
function x(e) {
    var n;
    let { user: t, currentUser: x, guildId: _, channelId: O, displayProfile: Z, initialSection: N, initialSubsection: P, friendToken: E, onClose: S } = e,
        { relationshipType: T, originApplicationId: C } = (0, o.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        A = (0, l.vh)(t.id),
        L = (0, i.wn)({ location: 'UserProfileModalBody' }),
        w = t.id === x.id,
        R = (0, a.I5)(x),
        M = c.ZP.useName(null == Z ? void 0 : Z.guildId, O, t),
        U = (0, y.Z)({
            user: t,
            currentUser: x,
            guildId: _,
            initialSubsection: P
        });
    return (0, r.jsxs)('div', {
        className: v.body,
        children: [
            (0, r.jsx)(I.Z, {
                className: v.username,
                user: t,
                profileType: h.y0.FULL_SIZE,
                nickname: M,
                pronouns: null == Z ? void 0 : Z.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, r.jsx)(f.Z, { userId: t.id }),
                tags: (0, r.jsx)(d.Z, {
                    displayProfile: Z,
                    profileType: h.y0.FULL_SIZE,
                    onClose: S
                })
            }),
            T === j.OGo.PENDING_INCOMING &&
                (0, r.jsx)(m.Z.Overlay, {
                    className: v.bannerContainer,
                    children: (0, r.jsx)(p.Z, {
                        user: t,
                        applicationId: L ? C : void 0,
                        guildId: null != (n = null == Z ? void 0 : Z.guildId) ? n : void 0,
                        channelId: O,
                        friendToken: E,
                        className: v.friendRequestBanner
                    })
                }),
            L &&
                A.map((e) =>
                    (0, r.jsx)(
                        m.Z.Overlay,
                        {
                            className: v.bannerContainer,
                            children: (0, r.jsx)(p.Z, {
                                user: t,
                                channelId: O,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                className: v.friendRequestBanner
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, r.jsx)(b.Z, {
                user: t,
                className: v.bannerContainer
            }),
            w &&
                (0, r.jsx)(u.Z, {
                    className: v.bannerContainer,
                    isPremiumUser: R,
                    onInteraction: S
                }),
            (0, r.jsx)(g.Z, {
                user: t,
                currentUser: x,
                displayProfile: Z,
                guildId: _,
                items: U,
                initialSection: N,
                initialSubsection: P,
                onClose: S
            })
        ]
    });
}
