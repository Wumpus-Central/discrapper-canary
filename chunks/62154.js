t.d(n, { Z: () => y });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(320582),
    o = t(699516),
    s = t(5192),
    u = t(111361),
    a = t(648052),
    c = t(537006),
    d = t(681837),
    f = t(91433),
    p = t(944043),
    g = t(502762),
    b = t(530),
    v = t(740628),
    h = t(643518),
    j = t(228168),
    m = t(981631),
    O = t(405666);
function y(e) {
    var n;
    let { user: t, currentUser: y, guildId: Z, channelId: I, displayProfile: x, initialSection: P, initialSubsection: E, friendToken: T, onClose: N } = e,
        { relationshipType: S, originApplicationId: C } = (0, r.cj)([o.Z], () => ({
            relationshipType: o.Z.getRelationshipType(t.id),
            originApplicationId: o.Z.getOriginApplicationId(t.id)
        })),
        w = (0, i.vh)(t.id),
        A = t.id === y.id,
        R = (0, u.I5)(y),
        _ = s.ZP.useName(null == x ? void 0 : x.guildId, I, t),
        M = (0, h.Z)({
            user: t,
            currentUser: y,
            guildId: Z,
            initialSubsection: E
        });
    return (0, l.jsxs)('div', {
        className: O.body,
        children: [
            (0, l.jsx)(b.Z, {
                className: O.username,
                user: t,
                nickname: _,
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, l.jsx)(d.Z, { userId: t.id }),
                tags: (0, l.jsx)(a.Z, {
                    displayProfile: x,
                    themeType: j.lY.MODAL,
                    onClose: N
                })
            }),
            S === m.OGo.PENDING_INCOMING &&
                (0, l.jsx)(g.Z.Overlay, {
                    className: O.bannerContainer,
                    children: (0, l.jsx)(f.Z, {
                        user: t,
                        applicationId: C,
                        guildId: null != (n = null == x ? void 0 : x.guildId) ? n : void 0,
                        channelId: I,
                        friendToken: T,
                        className: O.friendRequestBanner
                    })
                }),
            w.map((e) =>
                (0, l.jsx)(
                    g.Z.Overlay,
                    {
                        className: O.bannerContainer,
                        children: (0, l.jsx)(f.Z, {
                            user: t,
                            channelId: I,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: O.friendRequestBanner
                        })
                    },
                    e.applicationId
                )
            ),
            (0, l.jsx)(p.Z, {
                user: t,
                className: O.bannerContainer
            }),
            A &&
                (0, l.jsx)(c.Z, {
                    className: O.bannerContainer,
                    isPremiumUser: R,
                    onInteraction: N
                }),
            (0, l.jsx)(v.Z, {
                user: t,
                currentUser: y,
                displayProfile: x,
                guildId: Z,
                items: M,
                initialSection: P,
                initialSubsection: E,
                onClose: N
            })
        ]
    });
}
