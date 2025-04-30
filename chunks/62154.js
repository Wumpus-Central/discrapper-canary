t.d(n, { Z: () => g });
var o = t(200651);
t(192379);
var c = t(442837),
    i = t(320582),
    r = t(699516),
    a = t(5192),
    d = t(111361),
    s = t(648052),
    l = t(537006),
    u = t(681837),
    f = t(91433),
    _ = t(944043),
    p = t(502762),
    b = t(530),
    m = t(740628),
    I = t(643518),
    y = t(228168),
    h = t(981631),
    x = t(405666);
function g(e) {
    var n;
    let { user: t, currentUser: g, guildId: j, channelId: O, displayProfile: v, initialSection: A, initialSubsection: Z, friendToken: N, onClose: P } = e,
        { relationshipType: T, originApplicationId: C } = (0, c.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        w = (0, i.vh)(t.id),
        S = t.id === g.id,
        E = (0, d.I5)(g),
        M = a.ZP.useName(null == v ? void 0 : v.guildId, O, t),
        k = (0, I.Z)({
            user: t,
            currentUser: g,
            guildId: j,
            initialSubsection: Z
        });
    return (0, o.jsxs)('div', {
        className: x.body,
        children: [
            (0, o.jsx)(b.Z, {
                className: x.username,
                user: t,
                nickname: M,
                pronouns: null == v ? void 0 : v.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, { userId: t.id }),
                tags: (0, o.jsx)(s.Z, {
                    displayProfile: v,
                    themeType: y.lY.MODAL,
                    onClose: P
                })
            }),
            T === h.OGo.PENDING_INCOMING &&
                (0, o.jsx)(p.Z.Overlay, {
                    className: x.bannerContainer,
                    children: (0, o.jsx)(f.Z, {
                        user: t,
                        applicationId: C,
                        guildId: null != (n = null == v ? void 0 : v.guildId) ? n : void 0,
                        channelId: O,
                        friendToken: N,
                        className: x.friendRequestBanner
                    })
                }),
            w.map((e) =>
                (0, o.jsx)(
                    p.Z.Overlay,
                    {
                        className: x.bannerContainer,
                        children: (0, o.jsx)(f.Z, {
                            user: t,
                            channelId: O,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: x.friendRequestBanner
                        })
                    },
                    e.applicationId
                )
            ),
            (0, o.jsx)(_.Z, {
                user: t,
                className: x.bannerContainer
            }),
            S &&
                (0, o.jsx)(l.Z, {
                    className: x.bannerContainer,
                    isPremiumUser: E,
                    onInteraction: P
                }),
            (0, o.jsx)(m.Z, {
                user: t,
                currentUser: g,
                displayProfile: v,
                guildId: j,
                channelId: O,
                items: k,
                initialSection: A,
                initialSubsection: Z,
                onClose: P
            })
        ]
    });
}
