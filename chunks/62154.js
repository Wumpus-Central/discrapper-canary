t.d(n, { Z: () => v });
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
    x = t(228168),
    b = t(981631),
    y = t(405666);
function v(e) {
    var n;
    let { user: t, currentUser: v, guildId: j, channelId: Z, displayProfile: g, initialSection: A, initialSubsection: O, onClose: N } = e,
        { relationshipType: C, originApplicationId: P } = (0, c.cj)([a.Z], () => ({
            relationshipType: a.Z.getRelationshipType(t.id),
            originApplicationId: a.Z.getOriginApplicationId(t.id)
        })),
        T = (0, i.vh)(t.id),
        w = t.id === v.id,
        E = (0, d.I5)(v),
        S = r.ZP.useName(null == g ? void 0 : g.guildId, Z, t),
        M = (0, h.Z)({
            user: t,
            currentUser: v,
            guildId: j,
            initialSubsection: O
        });
    return (0, o.jsxs)('div', {
        className: y.body,
        children: [
            (0, o.jsx)(m.Z, {
                className: y.username,
                user: t,
                nickname: S,
                pronouns: null == g ? void 0 : g.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, {
                    size: 'sm',
                    userId: t.id
                }),
                tags: (0, o.jsx)(l.Z, {
                    displayProfile: g,
                    themeType: x.lY.MODAL,
                    onClose: N
                })
            }),
            C === b.OGo.PENDING_INCOMING &&
                (0, o.jsx)(p.Z.Overlay, {
                    className: y.bannerContainer,
                    children: (0, o.jsx)(_.Z, {
                        user: t,
                        applicationId: P,
                        guildId: null != (n = null == g ? void 0 : g.guildId) ? n : void 0,
                        channelId: Z,
                        className: y.friendRequestBanner
                    })
                }),
            T.map((e) => {
                var n;
                return (0, o.jsx)(
                    p.Z.Overlay,
                    {
                        className: y.bannerContainer,
                        children: (0, o.jsx)(_.Z, {
                            user: t,
                            guildId: null != (n = null == g ? void 0 : g.guildId) ? n : void 0,
                            channelId: Z,
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
                    onInteraction: N
                }),
            (0, o.jsx)(I.Z, {
                user: t,
                currentUser: v,
                displayProfile: g,
                guildId: j,
                channelId: Z,
                items: M,
                initialSection: A,
                initialSubsection: O,
                onClose: N
            })
        ]
    });
}
