t.d(n, {
    Z: function () {
        return j;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(699516),
    r = t(5192),
    s = t(111361),
    c = t(816988),
    a = t(648052),
    d = t(537006),
    u = t(681837),
    f = t(91433),
    m = t(944043),
    x = t(502762),
    I = t(530),
    p = t(740628),
    h = t(643518),
    v = t(228168),
    Z = t(981631),
    g = t(171865);
function j(e) {
    var n;
    let { user: t, currentUser: j, channelId: _, displayProfile: b, initialSection: E, initialSubsection: N, friendToken: S, onClose: y } = e,
        T = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        P = (0, h.Z)({
            user: t,
            currentUser: j,
            initialSubsection: N
        }),
        C = r.ZP.useName(null == b ? void 0 : b.guildId, _, t),
        A = t.id === j.id,
        { dimissibleUpsellsEnabled: L } = (0, c.u)({ location: 'UserProfileModalBody' }),
        M = (0, s.I5)(j);
    return (0, i.jsxs)('div', {
        className: g.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: t,
                profileType: v.y0.FULL_SIZE,
                nickname: C,
                pronouns: null == b ? void 0 : b.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
                tags: (0, i.jsx)(a.Z, {
                    displayProfile: b,
                    profileType: v.y0.FULL_SIZE,
                    onClose: y
                })
            }),
            T === Z.OGo.PENDING_INCOMING &&
                (0, i.jsx)(x.Z.Overlay, {
                    className: g.friendRequestBannerOverlay,
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        guildId: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : void 0,
                        channelId: _,
                        friendToken: S,
                        className: g.friendRequestBanner
                    })
                }),
            (0, i.jsx)(m.Z, {
                user: t,
                source: m.t.MODAL
            }),
            L &&
                A &&
                (0, i.jsx)(d.Z, {
                    isPremiumUser: M,
                    onInteraction: y
                }),
            (0, i.jsx)(x.Z.Overlay, {
                className: g.overlay,
                children: (0, i.jsx)(p.Z, {
                    user: t,
                    currentUser: j,
                    displayProfile: b,
                    items: P,
                    initialSection: E,
                    initialSubsection: N,
                    onClose: y
                })
            })
        ]
    });
}
