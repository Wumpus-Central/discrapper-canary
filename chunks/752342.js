t.d(n, { Z: () => N }), t(388685);
var i = t(200651);
t(192379);
var o = t(481060),
    l = t(100527),
    r = t(906732),
    s = t(5192),
    c = t(785717),
    a = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    p = t(681837),
    m = t(502762),
    h = t(530),
    I = t(871604),
    x = t(952124),
    b = t(53558),
    _ = t(544989),
    j = t(934861),
    v = t(4517),
    g = t(740628),
    Z = t(398145),
    y = t(228168),
    A = t(981631),
    T = t(388032),
    O = t(405666);
function N(e) {
    let { user: n, currentUser: t, guildId: N, channelId: E, messageId: C, roleId: P, sessionId: S, initialSection: M, initialSubsection: w, transitionState: L, openedAt: R, onClose: D, sourceAnalyticsLocations: B = [] } = e,
        U = N === A.ME ? void 0 : N,
        G = (0, a.ZP)(n.id, U),
        { analyticsLocations: k } = (0, r.ZP)([...B, l.Z.USER_PROFILE_MODAL]),
        V = (0, c.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: S,
            guildId: U,
            channelId: E,
            messageId: C,
            roleId: P
        }),
        Y = (0, Z.Z)(n);
    return (0, i.jsx)(r.Gt, {
        value: k,
        children: (0, i.jsx)(c.Mt, {
            value: V,
            openedAt: R,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, i.jsx)(o.Y0X, {
                transitionState: L,
                className: O.root,
                hideShadow: !0,
                'aria-label': T.intl.string(T.t['3N/J2t']),
                children: (0, i.jsxs)(m.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: y.lY.MODAL,
                    children: [
                        (0, i.jsx)(_.Z, {
                            children: (0, i.jsx)(x.Z, {
                                user: n,
                                guildId: U,
                                onCloseProfile: D
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: G,
                                    themeType: y.lY.MODAL
                                }),
                                (0, i.jsxs)('div', {
                                    className: O.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: G,
                                            guildId: U,
                                            channelId: E,
                                            themeType: y.lY.MODAL
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: y.lY.MODAL,
                                            hasEntered: L === o.Dvm.ENTERED,
                                            onCloseProfile: D
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: O.headerButtons,
                                            children: [
                                                (0, i.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: D,
                                                    className: O.messageTextButton
                                                }),
                                                (0, i.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: D,
                                                    tooltipContainerClassName: O.messageIconButton
                                                }),
                                                (0, i.jsx)(b.Z, {
                                                    user: n,
                                                    guildId: U
                                                }),
                                                (0, i.jsx)(I.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: O.body,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    className: O.username,
                                    user: n,
                                    nickname: s.ZP.getName(U, E, n),
                                    pronouns: null == G ? void 0 : G.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: G,
                                        themeType: y.lY.MODAL,
                                        onClose: D
                                    })
                                }),
                                (0, i.jsx)(g.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: G,
                                    guildId: U,
                                    items: Y,
                                    initialSection: null != M ? M : y.oh.BOT_INFO,
                                    initialSubsection: w,
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
