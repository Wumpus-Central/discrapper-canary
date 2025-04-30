t.d(n, { Z: () => T }), t(388685);
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(100527),
    s = t(906732),
    o = t(5192),
    a = t(785717),
    c = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    p = t(681837),
    h = t(502762),
    v = t(530),
    g = t(871604),
    j = t(952124),
    m = t(53558),
    b = t(544989),
    x = t(30556),
    Z = t(4517),
    O = t(740628),
    y = t(398145),
    I = t(228168),
    P = t(981631),
    E = t(388032),
    N = t(405666);
function T(e) {
    let { user: n, currentUser: t, guildId: T, channelId: S, messageId: A, roleId: C, sessionId: _, initialSection: w, initialSubsection: R, transitionState: M, openedAt: L, onClose: D, sourceAnalyticsLocations: U = [] } = e,
        k = T === P.ME ? void 0 : T,
        B = (0, c.ZP)(n.id, k),
        { analyticsLocations: G } = (0, s.ZP)([...U, i.Z.USER_PROFILE_MODAL]),
        Y = (0, a.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: k,
            channelId: S,
            messageId: A,
            roleId: C
        }),
        F = (0, y.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: G,
        children: (0, l.jsx)(a.Mt, {
            value: Y,
            openedAt: L,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: M,
                className: N.root,
                hideShadow: !0,
                'aria-label': E.intl.string(E.t['3N/J2t']),
                children: (0, l.jsxs)(h.Z, {
                    user: n,
                    displayProfile: B,
                    themeType: I.lY.MODAL,
                    children: [
                        (0, l.jsx)(b.Z, {
                            children: (0, l.jsx)(j.Z, {
                                user: n,
                                guildId: k,
                                onCloseProfile: D
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: B,
                                    themeType: I.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: N.headerInner,
                                    children: [
                                        (0, l.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: k,
                                            channelId: S,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)(Z.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: I.lY.MODAL,
                                            hasEntered: M === r.Dvm.ENTERED,
                                            onCloseProfile: D
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: N.headerButtons,
                                            children: [
                                                (0, l.jsx)(x.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: D,
                                                    className: N.messageTextButton
                                                }),
                                                (0, l.jsx)(x.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: D,
                                                    tooltipContainerClassName: N.messageIconButton
                                                }),
                                                (0, l.jsx)(m.Z, {
                                                    user: n,
                                                    guildId: k
                                                }),
                                                (0, l.jsx)(g.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: N.body,
                            children: [
                                (0, l.jsx)(v.Z, {
                                    className: N.username,
                                    user: n,
                                    nickname: o.ZP.getName(k, S, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, l.jsx)(u.Z, {
                                        displayProfile: B,
                                        themeType: I.lY.MODAL,
                                        onClose: D
                                    })
                                }),
                                (0, l.jsx)(O.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: B,
                                    guildId: k,
                                    items: F,
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
