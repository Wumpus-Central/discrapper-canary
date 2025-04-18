t.d(n, { Z: () => v });
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(320582),
    l = t(699516),
    s = t(5192),
    c = t(111361),
    a = t(648052),
    d = t(537006),
    u = t(681837),
    f = t(91433),
    p = t(944043),
    b = t(502762),
    m = t(530),
    h = t(740628),
    I = t(643518),
    g = t(228168),
    y = t(981631),
    j = t(191902);
function v(e) {
    var n;
    let { user: t, currentUser: v, guildId: x, channelId: _, displayProfile: Z, initialSection: O, initialSubsection: N, friendToken: P, onClose: E } = e,
        { relationshipType: S, originApplicationId: T } = (0, o.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id)
        })),
        A = (0, i.vh)(t.id),
        C = t.id === v.id,
        L = (0, c.I5)(v),
        w = s.ZP.useName(null == Z ? void 0 : Z.guildId, _, t),
        R = (0, I.Z)({
            user: t,
            currentUser: v,
            guildId: x,
            initialSubsection: N
        });
    return (0, r.jsxs)('div', {
        className: j.body,
        children: [
            (0, r.jsx)(m.Z, {
                className: j.username,
                user: t,
                profileType: g.y0.FULL_SIZE,
                nickname: w,
                pronouns: null == Z ? void 0 : Z.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, r.jsx)(u.Z, { userId: t.id }),
                tags: (0, r.jsx)(a.Z, {
                    displayProfile: Z,
                    profileType: g.y0.FULL_SIZE,
                    onClose: E
                })
            }),
            S === y.OGo.PENDING_INCOMING &&
                (0, r.jsx)(b.Z.Overlay, {
                    className: j.bannerContainer,
                    children: (0, r.jsx)(f.Z, {
                        user: t,
                        applicationId: T,
                        guildId: null != (n = null == Z ? void 0 : Z.guildId) ? n : void 0,
                        channelId: _,
                        friendToken: P,
                        className: j.friendRequestBanner
                    })
                }),
            A.map((e) =>
                (0, r.jsx)(
                    b.Z.Overlay,
                    {
                        className: j.bannerContainer,
                        children: (0, r.jsx)(f.Z, {
                            user: t,
                            channelId: _,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: j.friendRequestBanner
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(p.Z, {
                user: t,
                className: j.bannerContainer
            }),
            C &&
                (0, r.jsx)(d.Z, {
                    className: j.bannerContainer,
                    isPremiumUser: L,
                    onInteraction: E
                }),
            (0, r.jsx)(h.Z, {
                user: t,
                currentUser: v,
                displayProfile: Z,
                guildId: x,
                items: R,
                initialSection: O,
                initialSubsection: N,
                onClose: E
            })
        ]
    });
}
