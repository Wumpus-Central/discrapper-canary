t.d(n, { Z: () => g });
var o = t(200651);
t(192379);
var i = t(442837),
    c = t(320582),
    r = t(699516),
    a = t(5192),
    l = t(111361),
    d = t(648052),
    s = t(537006),
    u = t(681837),
    f = t(91433),
    p = t(944043),
    _ = t(502762),
    b = t(530),
    m = t(740628),
    I = t(643518),
    h = t(228168),
    y = t(981631),
    x = t(405666);
function g(e) {
    var n;
    let { user: t, currentUser: g, guildId: v, channelId: j, displayProfile: A, initialSection: Z, initialSubsection: O, friendToken: N, onClose: P } = e,
        { relationshipType: C, originApplicationId: T } = (0, i.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        w = (0, c.vh)(t.id),
        S = t.id === g.id,
        M = (0, l.I5)(g),
        E = a.ZP.useName(null == A ? void 0 : A.guildId, j, t),
        k = (0, I.Z)({
            user: t,
            currentUser: g,
            guildId: v,
            initialSubsection: O
        });
    return (0, o.jsxs)('div', {
        className: x.body,
        children: [
            (0, o.jsx)(b.Z, {
                className: x.username,
                user: t,
                nickname: E,
                pronouns: null == A ? void 0 : A.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, { userId: t.id }),
                tags: (0, o.jsx)(d.Z, {
                    displayProfile: A,
                    themeType: h.lY.MODAL,
                    onClose: P
                })
            }),
            C === y.OGo.PENDING_INCOMING &&
                (0, o.jsx)(_.Z.Overlay, {
                    className: x.bannerContainer,
                    children: (0, o.jsx)(f.Z, {
                        user: t,
                        applicationId: T,
                        guildId: null != (n = null == A ? void 0 : A.guildId) ? n : void 0,
                        channelId: j,
                        friendToken: N,
                        className: x.friendRequestBanner
                    })
                }),
            w.map((e) =>
                (0, o.jsx)(
                    _.Z.Overlay,
                    {
                        className: x.bannerContainer,
                        children: (0, o.jsx)(f.Z, {
                            user: t,
                            channelId: j,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: x.friendRequestBanner
                        })
                    },
                    e.applicationId
                )
            ),
            (0, o.jsx)(p.Z, {
                user: t,
                className: x.bannerContainer
            }),
            S &&
                (0, o.jsx)(s.Z, {
                    className: x.bannerContainer,
                    isPremiumUser: M,
                    onInteraction: P
                }),
            (0, o.jsx)(m.Z, {
                user: t,
                currentUser: g,
                displayProfile: A,
                guildId: v,
                items: k,
                initialSection: Z,
                initialSubsection: O,
                onClose: P
            })
        ]
    });
}
