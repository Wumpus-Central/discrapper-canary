t.d(n, { Z: () => g });
var o = t(255367);
t(73800);
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
    m = t(530),
    b = t(740628),
    I = t(643518),
    h = t(228168),
    y = t(981631),
    x = t(405666);
function g(e) {
    var n;
    let { user: t, currentUser: g, guildId: j, channelId: v, displayProfile: O, initialSection: Z, initialSubsection: P, onClose: A } = e,
        { relationshipType: N, originApplicationId: w } = (0, i.cj)([r.Z], () => ({
            relationshipType: r.Z.getRelationshipType(t.id),
            originApplicationId: r.Z.getOriginApplicationId(t.id)
        })),
        C = (0, c.vh)(t.id),
        E = t.id === g.id,
        T = (0, l.I5)(g),
        S = a.ZP.useName(null == O ? void 0 : O.guildId, v, t),
        M = (0, I.Z)({
            user: t,
            currentUser: g,
            guildId: j,
            initialSubsection: P
        });
    return (0, o.jsxs)('div', {
        className: x.body,
        children: [
            (0, o.jsx)(m.Z, {
                className: x.username,
                user: t,
                nickname: S,
                pronouns: null == O ? void 0 : O.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(u.Z, { userId: t.id }),
                tags: (0, o.jsx)(d.Z, {
                    displayProfile: O,
                    themeType: h.lY.MODAL,
                    onClose: A
                })
            }),
            N === y.OGo.PENDING_INCOMING &&
                (0, o.jsx)(_.Z.Overlay, {
                    className: x.bannerContainer,
                    children: (0, o.jsx)(f.Z, {
                        user: t,
                        applicationId: w,
                        guildId: null != (n = null == O ? void 0 : O.guildId) ? n : void 0,
                        channelId: v,
                        className: x.friendRequestBanner
                    })
                }),
            C.map((e) =>
                (0, o.jsx)(
                    _.Z.Overlay,
                    {
                        className: x.bannerContainer,
                        children: (0, o.jsx)(f.Z, {
                            user: t,
                            channelId: v,
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
            E &&
                (0, o.jsx)(s.Z, {
                    className: x.bannerContainer,
                    isPremiumUser: T,
                    onInteraction: A
                }),
            (0, o.jsx)(b.Z, {
                user: t,
                currentUser: g,
                displayProfile: O,
                guildId: j,
                channelId: v,
                items: M,
                initialSection: Z,
                initialSubsection: P,
                onClose: A
            })
        ]
    });
}
