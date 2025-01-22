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
    x = t(91433),
    I = t(944043),
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
        C = (0, l.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        A = (0, l.Wu)([r.Z], () => r.Z.getGameRelationshipsForUser(t.id, j.OGo.PENDING_INCOMING)),
        L = (0, o.wn)({ location: 'UserProfileModalBody' }),
        M = (0, Z.Z)({
            user: t,
            currentUser: b,
            initialSubsection: S
        }),
        R = c.ZP.useName(null == N ? void 0 : N.guildId, E, t),
        O = t.id === b.id,
        { dimissibleUpsellsEnabled: U } = (0, d.u)({ location: 'UserProfileModalBody' }),
        B = (0, a.I5)(b);
    return (0, i.jsxs)('div', {
        className: _.body,
        children: [
            (0, i.jsx)(h.Z, {
                user: t,
                profileType: g.y0.FULL_SIZE,
                nickname: R,
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
                    children: (0, i.jsx)(x.Z, {
                        user: t,
                        guildId: null !== (n = null == N ? void 0 : N.guildId) && void 0 !== n ? n : void 0,
                        channelId: E,
                        friendToken: T,
                        className: _.friendRequestBanner
                    })
                }),
            L &&
                A.map((e) =>
                    (0, i.jsx)(
                        p.Z.Overlay,
                        {
                            className: _.friendRequestBannerOverlay,
                            children: (0, i.jsx)(x.Z, {
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
            (0, i.jsx)(I.Z, {
                user: t,
                source: I.t.MODAL
            }),
            U &&
                O &&
                (0, i.jsx)(f.Z, {
                    isPremiumUser: B,
                    onInteraction: P
                }),
            (0, i.jsx)(p.Z.Overlay, {
                className: _.overlay,
                children: (0, i.jsx)(v.Z, {
                    user: t,
                    currentUser: b,
                    displayProfile: N,
                    items: M,
                    initialSection: y,
                    initialSubsection: S,
                    onClose: P
                })
            })
        ]
    });
}
