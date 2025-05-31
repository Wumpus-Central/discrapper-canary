t.d(n, { Z: () => Z });
var o = t(255367);
t(73800);
var c = t(442837),
    i = t(320582),
    a = t(699516),
    r = t(5192),
    d = t(111361),
    l = t(648052),
    s = t(537006),
    u = t(681837),
    _ = t(91433),
    f = t(944043),
    p = t(502762),
    m = t(530),
    I = t(740628),
    h = t(643518),
    b = t(228168),
    x = t(981631),
    y = t(405666);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, guildId: j, channelId: g, displayProfile: v, initialSection: A, initialSubsection: N, onClose: O } = e,
        { relationshipType: C, originApplicationId: T } = (0, c.cj)([a.Z], () => ({
            relationshipType: a.Z.getRelationshipType(t.id),
            originApplicationId: a.Z.getOriginApplicationId(t.id)
        })),
        P = (0, i.vh)(t.id),
        w = t.id === Z.id,
        E = (0, d.I5)(Z),
        S = r.ZP.useName(null == v ? void 0 : v.guildId, g, t),
        M = (0, h.Z)({
            user: t,
            currentUser: Z,
            guildId: j,
            initialSubsection: N
        });
    return (0, o.jsxs)('div', {
        className: y.body,
        children: [
            (0, o.jsx)(m.Z, {
                className: y.username,
                user: t,
                nickname: S,
                pronouns: null == v ? void 0 : v.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, {
                    size: 'sm',
                    userId: t.id
                }),
                tags: (0, o.jsx)(l.Z, {
                    displayProfile: v,
                    themeType: b.lY.MODAL,
                    onClose: O
                })
            }),
            C === x.OGo.PENDING_INCOMING &&
                (0, o.jsx)(p.Z.Overlay, {
                    className: y.bannerContainer,
                    children: (0, o.jsx)(_.Z, {
                        user: t,
                        applicationId: T,
                        guildId: null != (n = null == v ? void 0 : v.guildId) ? n : void 0,
                        channelId: g,
                        className: y.friendRequestBanner
                    })
                }),
            P.map((e) => {
                var n;
                return (0, o.jsx)(
                    p.Z.Overlay,
                    {
                        className: y.bannerContainer,
                        children: (0, o.jsx)(_.Z, {
                            user: t,
                            guildId: null != (n = null == v ? void 0 : v.guildId) ? n : void 0,
                            channelId: g,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: y.friendRequestBanner
                        })
                    },
                    e.applicationId
                );
            }),
            (0, o.jsx)(f.Z, {
                user: t,
                className: y.bannerContainer
            }),
            w &&
                (0, o.jsx)(s.Z, {
                    className: y.bannerContainer,
                    isPremiumUser: E,
                    onInteraction: O
                }),
            (0, o.jsx)(I.Z, {
                user: t,
                currentUser: Z,
                displayProfile: v,
                guildId: j,
                channelId: g,
                items: M,
                initialSection: A,
                initialSubsection: N,
                onClose: O
            })
        ]
    });
}
