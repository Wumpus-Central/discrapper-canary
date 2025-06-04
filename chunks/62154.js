t.d(n, { Z: () => g });
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
    f = t(91433),
    _ = t(944043),
    p = t(502762),
    m = t(530),
    I = t(740628),
    h = t(643518),
    b = t(228168),
    x = t(981631),
    y = t(405666);
function g(e) {
    var n;
    let { user: t, currentUser: g, guildId: Z, channelId: v, displayProfile: j, initialSection: A, initialSubsection: N, onClose: O } = e,
        { relationshipType: C, originApplicationId: T } = (0, c.cj)([a.Z], () => ({
            relationshipType: a.Z.getRelationshipType(t.id),
            originApplicationId: a.Z.getOriginApplicationId(t.id)
        })),
        P = (0, i.vh)(t.id),
        w = t.id === g.id,
        S = (0, d.I5)(g),
        E = r.ZP.useName(null == j ? void 0 : j.guildId, v, t),
        M = (0, h.Z)({
            user: t,
            currentUser: g,
            guildId: Z,
            initialSubsection: N
        });
    return (0, o.jsxs)('div', {
        className: y.body,
        children: [
            (0, o.jsx)(m.Z, {
                className: y.username,
                user: t,
                nickname: E,
                pronouns: null == j ? void 0 : j.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, {
                    size: 'sm',
                    userId: t.id
                }),
                tags: (0, o.jsx)(l.Z, {
                    displayProfile: j,
                    themeType: b.lY.MODAL,
                    onClose: O
                })
            }),
            C === x.OGo.PENDING_INCOMING &&
                (0, o.jsx)(p.Z.Overlay, {
                    className: y.bannerContainer,
                    children: (0, o.jsx)(f.Z, {
                        user: t,
                        applicationId: T,
                        guildId: null != (n = null == j ? void 0 : j.guildId) ? n : void 0,
                        channelId: v,
                        className: y.friendRequestBanner
                    })
                }),
            P.map((e) => {
                var n;
                return (0, o.jsx)(
                    p.Z.Overlay,
                    {
                        className: y.bannerContainer,
                        children: (0, o.jsx)(f.Z, {
                            user: t,
                            guildId: null != (n = null == j ? void 0 : j.guildId) ? n : void 0,
                            channelId: v,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: y.friendRequestBanner
                        })
                    },
                    e.applicationId
                );
            }),
            (0, o.jsx)(_.Z, {
                user: t,
                className: y.bannerContainer
            }),
            w &&
                (0, o.jsx)(s.Z, {
                    className: y.bannerContainer,
                    isPremiumUser: S,
                    onInteraction: O
                }),
            (0, o.jsx)(I.Z, {
                user: t,
                currentUser: g,
                displayProfile: j,
                guildId: Z,
                channelId: v,
                items: M,
                initialSection: A,
                initialSubsection: N,
                onClose: O
            })
        ]
    });
}
