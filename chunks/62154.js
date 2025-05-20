t.d(n, { Z: () => j });
var o = t(255367);
t(73800);
var c = t(442837),
    i = t(320582),
    r = t(699516),
    a = t(5192),
    l = t(111361),
    d = t(648052),
    s = t(537006),
    u = t(681837),
    f = t(91433),
    p = t(944043),
    _ = t(502762),
    m = t(530),
    b = t(740628),
    I = t(643518),
    h = t(228168),
    y = t(981631),
    x = t(405666);
function j(e) {
    var n;
    let { user: t, currentUser: j, guildId: g, channelId: O, displayProfile: v, initialSection: Z, initialSubsection: A, onClose: N } = e,
        { relationshipType: P, originApplicationId: C } = (0, c.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        w = (0, i.vh)(t.id),
        T = t.id === j.id,
        S = (0, l.I5)(j),
        E = a.ZP.useName(null == v ? void 0 : v.guildId, O, t),
        M = (0, I.Z)({
            user: t,
            currentUser: j,
            guildId: g,
            initialSubsection: A
        });
    return (0, o.jsxs)('div', {
        className: x.body,
        children: [
            (0, o.jsx)(m.Z, {
                className: x.username,
                user: t,
                nickname: E,
                pronouns: null == v ? void 0 : v.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, { userId: t.id }),
                tags: (0, o.jsx)(d.Z, {
                    displayProfile: v,
                    themeType: h.lY.MODAL,
                    onClose: N
                })
            }),
            P === y.OGo.PENDING_INCOMING &&
                (0, o.jsx)(_.Z.Overlay, {
                    className: x.bannerContainer,
                    children: (0, o.jsx)(f.Z, {
                        user: t,
                        applicationId: C,
                        guildId: null != (n = null == v ? void 0 : v.guildId) ? n : void 0,
                        channelId: O,
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
                            channelId: O,
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
            T &&
                (0, o.jsx)(s.Z, {
                    className: x.bannerContainer,
                    isPremiumUser: S,
                    onInteraction: N
                }),
            (0, o.jsx)(b.Z, {
                user: t,
                currentUser: j,
                displayProfile: v,
                guildId: g,
                channelId: O,
                items: M,
                initialSection: Z,
                initialSubsection: A,
                onClose: N
            })
        ]
    });
}
