t.d(n, { Z: () => O }), t(388685);
var i = t(200651);
t(192379);
var o = t(481060),
    l = t(100527),
    r = t(906732),
    s = t(5192),
    a = t(785717),
    c = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    m = t(681837),
    p = t(502762),
    h = t(530),
    x = t(871604),
    I = t(952124),
    v = t(53558),
    b = t(544989),
    j = t(934861),
    _ = t(4517),
    g = t(740628),
    Z = t(398145),
    y = t(228168),
    N = t(981631),
    A = t(388032),
    T = t(405666);
function O(e) {
    let { user: n, currentUser: t, guildId: O, channelId: C, messageId: E, roleId: P, sessionId: S, initialSection: M, initialSubsection: L, transitionState: w, openedAt: B, onClose: D, sourceAnalyticsLocations: U = [] } = e,
        R = O === N.ME ? void 0 : O,
        k = (0, c.ZP)(n.id, R),
        { analyticsLocations: G } = (0, r.ZP)([...U, l.Z.USER_PROFILE_MODAL]),
        Y = (0, a.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: S,
            guildId: R,
            channelId: C,
            messageId: E,
            roleId: P
        }),
        F = (0, Z.Z)(n);
    return (0, i.jsx)(r.Gt, {
        value: G,
        children: (0, i.jsx)(a.Mt, {
            value: Y,
            openedAt: B,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, i.jsx)(o.Y0X, {
                transitionState: w,
                className: T.root,
                hideShadow: !0,
                'aria-label': A.intl.string(A.t['3N/J2t']),
                children: (0, i.jsxs)(p.Z, {
                    user: n,
                    displayProfile: k,
                    themeType: y.lY.MODAL,
                    children: [
                        (0, i.jsx)(b.Z, {
                            children: (0, i.jsx)(I.Z, {
                                user: n,
                                guildId: R,
                                onCloseProfile: D
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: k,
                                    themeType: y.lY.MODAL
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: k,
                                            guildId: R,
                                            channelId: C,
                                            themeType: y.lY.MODAL
                                        }),
                                        (0, i.jsx)(_.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: y.lY.MODAL,
                                            hasEntered: w === o.Dvm.ENTERED,
                                            onCloseProfile: D
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: T.headerButtons,
                                            children: [
                                                (0, i.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: D,
                                                    className: T.messageTextButton
                                                }),
                                                (0, i.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: D,
                                                    tooltipContainerClassName: T.messageIconButton
                                                }),
                                                (0, i.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: R
                                                }),
                                                (0, i.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: T.body,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    className: T.username,
                                    user: n,
                                    nickname: s.ZP.getName(R, C, n),
                                    pronouns: null == k ? void 0 : k.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(m.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: k,
                                        themeType: y.lY.MODAL,
                                        onClose: D
                                    })
                                }),
                                (0, i.jsx)(g.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: k,
                                    guildId: R,
                                    items: F,
                                    initialSection: null != M ? M : y.oh.BOT_INFO,
                                    initialSubsection: L,
                                    onClose: D
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
