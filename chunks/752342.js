t.d(n, { Z: () => S }), t(388685);
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(100527),
    o = t(906732),
    s = t(5192),
    c = t(785717),
    u = t(687158),
    a = t(899007),
    d = t(648052),
    f = t(867176),
    p = t(681837),
    g = t(502762),
    v = t(530),
    h = t(871604),
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
    T = t(405666);
function S(e) {
    let { user: n, currentUser: t, guildId: S, channelId: N, messageId: C, roleId: A, sessionId: _, initialSection: w, initialSubsection: M, transitionState: R, openedAt: U, onClose: L, sourceAnalyticsLocations: D = [] } = e,
        B = S === P.ME ? void 0 : S,
        G = (0, u.ZP)(n.id, B),
        { analyticsLocations: k } = (0, o.ZP)([...D, i.Z.USER_PROFILE_MODAL]),
        Y = (0, c.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: B,
            channelId: N,
            messageId: C,
            roleId: A
        }),
        V = (0, y.Z)(n);
    return (0, l.jsx)(o.Gt, {
        value: k,
        children: (0, l.jsx)(c.Mt, {
            value: Y,
            openedAt: U,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: R,
                className: T.root,
                hideShadow: !0,
                'aria-label': E.intl.string(E.t['3N/J2t']),
                children: (0, l.jsxs)(g.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: I.lY.MODAL,
                    children: [
                        (0, l.jsx)(b.Z, {
                            children: (0, l.jsx)(j.Z, {
                                user: n,
                                guildId: B,
                                onCloseProfile: L
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: G,
                                    themeType: I.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: T.headerInner,
                                    children: [
                                        (0, l.jsx)(a.Z, {
                                            user: n,
                                            displayProfile: G,
                                            guildId: B,
                                            channelId: N,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)(Z.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: I.lY.MODAL,
                                            hasEntered: R === r.Dvm.ENTERED,
                                            onCloseProfile: L
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: T.headerButtons,
                                            children: [
                                                (0, l.jsx)(x.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: L,
                                                    className: T.messageTextButton
                                                }),
                                                (0, l.jsx)(x.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: L,
                                                    tooltipContainerClassName: T.messageIconButton
                                                }),
                                                (0, l.jsx)(m.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, l.jsx)(h.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: T.body,
                            children: [
                                (0, l.jsx)(v.Z, {
                                    className: T.username,
                                    user: n,
                                    nickname: s.ZP.getName(B, N, n),
                                    pronouns: null == G ? void 0 : G.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, l.jsx)(d.Z, {
                                        displayProfile: G,
                                        themeType: I.lY.MODAL,
                                        onClose: L
                                    })
                                }),
                                (0, l.jsx)(O.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: G,
                                    guildId: B,
                                    items: V,
                                    initialSection: null != w ? w : I.oh.BOT_INFO,
                                    initialSubsection: M,
                                    onClose: L
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
