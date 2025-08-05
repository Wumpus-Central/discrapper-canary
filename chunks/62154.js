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
    p = t(91433),
    f = t(944043),
    _ = t(502762),
    m = t(530),
    I = t(740628),
    h = t(643518),
    x = t(228168),
    y = t(981631),
    b = t(405666);
function v(e) {
    var n;
    let { user: t, currentUser: v, guildId: j, channelId: Z, displayProfile: A, initialSection: g, initialSubsection: O, onClose: N } = e,
        { relationshipType: C, originApplicationId: P } = (0, c.cj)([a.Z], () => ({
            relationshipType: a.Z.getRelationshipType(t.id),
            originApplicationId: a.Z.getOriginApplicationId(t.id)
        })),
        T = (0, i.vh)(t.id),
        E = t.id === v.id,
        S = (0, d.I5)(v),
        M = r.ZP.useName(null == A ? void 0 : A.guildId, Z, t),
        w = (0, h.Z)({
            user: t,
            currentUser: v,
            guildId: j,
            initialSubsection: O
        });
    return (0, o.jsxs)('div', {
        className: b.body,
        children: [
            (0, o.jsx)(m.Z, {
                className: b.username,
                user: t,
                nickname: M,
                pronouns: null == A ? void 0 : A.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, {
                    size: 'sm',
                    userId: t.id
                }),
                tags: (0, o.jsx)(l.Z, {
                    displayProfile: A,
                    themeType: x.lY.MODAL,
                    onClose: N
                })
            }),
            C === y.OGo.PENDING_INCOMING &&
                (0, o.jsx)(_.Z.Overlay, {
                    className: b.bannerContainer,
                    children: (0, o.jsx)(p.Z, {
                        user: t,
                        applicationId: P,
                        guildId: null != (n = null == A ? void 0 : A.guildId) ? n : void 0,
                        channelId: Z,
                        className: b.friendRequestBanner
                    })
                }),
            T.map((e) => {
                var n;
                return (0, o.jsx)(
                    _.Z.Overlay,
                    {
                        className: b.bannerContainer,
                        children: (0, o.jsx)(p.Z, {
                            user: t,
                            guildId: null != (n = null == A ? void 0 : A.guildId) ? n : void 0,
                            channelId: Z,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            className: b.friendRequestBanner
                        })
                    },
                    e.applicationId
                );
            }),
            (0, o.jsx)(f.Z, {
                user: t,
                className: b.bannerContainer
            }),
            E &&
                (0, o.jsx)(s.Z, {
                    className: b.bannerContainer,
                    isPremiumUser: S,
                    onInteraction: N
                }),
            (0, o.jsx)(I.Z, {
                user: t,
                currentUser: v,
                displayProfile: A,
                guildId: j,
                channelId: Z,
                items: w,
                initialSection: g,
                initialSubsection: O,
                onClose: N
            })
        ]
    });
}
