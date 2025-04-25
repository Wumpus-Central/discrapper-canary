t.d(n, { Z: () => _ });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(320582),
    r = t(699516),
    s = t(5192),
    a = t(111361),
    c = t(648052),
    d = t(537006),
    u = t(681837),
    f = t(91433),
    m = t(944043),
    p = t(502762),
    h = t(530),
    x = t(740628),
    I = t(643518),
    v = t(228168),
    b = t(981631),
    j = t(405666);
function _(e) {
    var n;
    let { user: t, currentUser: _, guildId: g, channelId: Z, displayProfile: y, initialSection: N, initialSubsection: A, friendToken: T, onClose: O } = e,
        { relationshipType: C, originApplicationId: E } = (0, o.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        P = (0, l.vh)(t.id),
        S = t.id === _.id,
        M = (0, a.I5)(_),
        L = s.ZP.useName(null == y ? void 0 : y.guildId, Z, t),
        w = (0, I.Z)({
            user: t,
            currentUser: _,
            guildId: g,
            initialSubsection: A
        });
    return (0, i.jsxs)('div', {
        className: j.body,
        children: [
            (0, i.jsx)(h.Z, {
                className: j.username,
                user: t,
                nickname: L,
                pronouns: null == y ? void 0 : y.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
                tags: (0, i.jsx)(c.Z, {
                    displayProfile: y,
                    themeType: v.lY.MODAL,
                    onClose: O
                })
            }),
            C === b.OGo.PENDING_INCOMING &&
                (0, i.jsx)(p.Z.Overlay, {
                    className: j.bannerContainer,
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        applicationId: E,
                        guildId: null != (n = null == y ? void 0 : y.guildId) ? n : void 0,
                        channelId: Z,
                        friendToken: T,
                        className: j.friendRequestBanner
                    })
                }),
            P.map((e) =>
                (0, i.jsx)(
                    p.Z.Overlay,
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
            (0, i.jsx)(m.Z, {
                user: t,
                className: j.bannerContainer
            }),
            S &&
                (0, i.jsx)(d.Z, {
                    className: j.bannerContainer,
                    isPremiumUser: M,
                    onInteraction: O
                }),
            (0, i.jsx)(x.Z, {
                user: t,
                currentUser: _,
                displayProfile: y,
                guildId: g,
                items: w,
                initialSection: N,
                initialSubsection: A,
                onClose: O
            })
        ]
    });
}
