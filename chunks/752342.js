n.d(t, { Z: () => T }), n(388685);
var l = n(255367);
n(73800);
var r = n(481060),
    i = n(100527),
    s = n(906732),
    o = n(5192),
    c = n(785717),
    a = n(687158),
    d = n(899007),
    u = n(648052),
    f = n(867176),
    p = n(681837),
    h = n(502762),
    j = n(530),
    g = n(871604),
    v = n(952124),
    m = n(53558),
    x = n(544989),
    b = n(30556),
    O = n(4517),
    Z = n(740628),
    y = n(398145),
    I = n(228168),
    P = n(981631),
    E = n(388032),
    N = n(405666);
function T(e) {
    let { user: t, currentUser: n, guildId: T, channelId: S, messageId: A, roleId: C, sessionId: _, initialSection: w, initialSubsection: R, transitionState: L, openedAt: M, onClose: D, sourceAnalyticsLocations: U = [] } = e,
        G = T === P.ME ? void 0 : T,
        B = (0, a.ZP)(t.id, G),
        { analyticsLocations: k } = (0, s.ZP)([...U, i.Z.USER_PROFILE_MODAL]),
        Y = (0, c.ZB)({
            layout: 'MODAL',
            userId: t.id,
            sourceSessionId: _,
            guildId: G,
            channelId: S,
            messageId: A,
            roleId: C
        }),
        V = (0, y.Z)(t);
    return (0, l.jsx)(s.Gt, {
        value: k,
        children: (0, l.jsx)(c.Mt, {
            value: Y,
            openedAt: M,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: L,
                className: N.root,
                hideShadow: !0,
                'aria-label': E.intl.string(E.t['3N/J2t']),
                children: (0, l.jsxs)(h.Z, {
                    user: t,
                    displayProfile: B,
                    themeType: I.lY.MODAL,
                    children: [
                        (0, l.jsx)(x.Z, {
                            children: (0, l.jsx)(v.Z, {
                                user: t,
                                guildId: G,
                                onCloseProfile: D
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: t,
                                    displayProfile: B,
                                    themeType: I.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: N.headerInner,
                                    children: [
                                        (0, l.jsx)(d.Z, {
                                            user: t,
                                            displayProfile: B,
                                            guildId: G,
                                            channelId: S,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)(O.Z, {
                                            location: 'BotUserProfileModal',
                                            user: t,
                                            themeType: I.lY.MODAL,
                                            hasEntered: L === r.Dvm.ENTERED,
                                            onCloseProfile: D
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: N.headerButtons,
                                            children: [
                                                (0, l.jsx)(b.Z, {
                                                    type: 'text',
                                                    userId: t.id,
                                                    onClose: D,
                                                    className: N.messageTextButton
                                                }),
                                                (0, l.jsx)(b.Z, {
                                                    type: 'icon',
                                                    userId: t.id,
                                                    onClose: D,
                                                    tooltipContainerClassName: N.messageIconButton
                                                }),
                                                (0, l.jsx)(m.Z, {
                                                    user: t,
                                                    guildId: G
                                                }),
                                                (0, l.jsx)(g.Z, { user: t })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: N.body,
                            children: [
                                (0, l.jsx)(j.Z, {
                                    className: N.username,
                                    user: t,
                                    nickname: o.ZP.getName(G, S, t),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(p.Z, { userId: t.id }),
                                    tags: (0, l.jsx)(u.Z, {
                                        displayProfile: B,
                                        themeType: I.lY.MODAL,
                                        onClose: D
                                    })
                                }),
                                (0, l.jsx)(Z.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: B,
                                    guildId: G,
                                    items: V,
                                    initialSection: null != w ? w : I.oh.BOT_INFO,
                                    initialSubsection: R,
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
