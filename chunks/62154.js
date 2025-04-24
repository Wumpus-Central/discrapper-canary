t.d(n, { Z: () => v });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(320582),
    r = t(699516),
    s = t(5192),
    c = t(111361),
    a = t(648052),
    d = t(537006),
    u = t(681837),
    f = t(91433),
    p = t(944043),
    m = t(502762),
    h = t(530),
    I = t(740628),
    x = t(643518),
    b = t(228168),
    _ = t(981631),
    j = t(405666);
function v(e) {
    var n;
    let { user: t, currentUser: v, guildId: g, channelId: Z, displayProfile: y, initialSection: A, initialSubsection: T, friendToken: O, onClose: N } = e,
        { relationshipType: E, originApplicationId: C } = (0, o.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        P = (0, l.vh)(t.id),
        S = t.id === v.id,
        M = (0, c.I5)(v),
        w = s.ZP.useName(null == y ? void 0 : y.guildId, Z, t),
        L = (0, x.Z)({
            user: t,
            currentUser: v,
            guildId: g,
            initialSubsection: T
        });
    return (0, i.jsxs)('div', {
        className: j.body,
        children: [
            (0, i.jsx)(h.Z, {
                className: j.username,
                user: t,
                nickname: w,
                pronouns: null == y ? void 0 : y.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
                tags: (0, i.jsx)(a.Z, {
                    displayProfile: y,
                    themeType: b.lY.MODAL,
                    onClose: N
                })
            }),
            E === _.OGo.PENDING_INCOMING &&
                (0, i.jsx)(m.Z.Overlay, {
                    className: j.bannerContainer,
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        applicationId: C,
                        guildId: null != (n = null == y ? void 0 : y.guildId) ? n : void 0,
                        channelId: Z,
                        friendToken: O,
                        className: j.friendRequestBanner
                    })
                }),
            P.map((e) =>
                (0, i.jsx)(
                    m.Z.Overlay,
                    {
                        className: j.bannerContainer,
                        children: (0, i.jsx)(f.Z, {
                            user: t,
                            channelId: Z,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: j.friendRequestBanner
                        })
                    },
                    e.applicationId
                )
            ),
            (0, i.jsx)(p.Z, {
                user: t,
                className: j.bannerContainer
            }),
            S &&
                (0, i.jsx)(d.Z, {
                    className: j.bannerContainer,
                    isPremiumUser: M,
                    onInteraction: N
                }),
            (0, i.jsx)(I.Z, {
                user: t,
                currentUser: v,
                displayProfile: y,
                guildId: g,
                items: L,
                initialSection: A,
                initialSubsection: T,
                onClose: N
            })
        ]
    });
}
