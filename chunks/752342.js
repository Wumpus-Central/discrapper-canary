t.d(n, { Z: () => N }), t(388685);
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(572691),
    o = t(100527),
    s = t(906732),
    c = t(5192),
    a = t(785717),
    u = t(687158),
    d = t(899007),
    f = t(648052),
    p = t(867176),
    g = t(681837),
    h = t(502762),
    v = t(530),
    j = t(871604),
    m = t(952124),
    b = t(53558),
    x = t(544989),
    Z = t(30556),
    y = t(4517),
    O = t(740628),
    I = t(398145),
    P = t(228168),
    E = t(981631),
    T = t(388032),
    S = t(405666);
function N(e) {
    let { user: n, currentUser: t, guildId: N, channelId: A, messageId: C, roleId: _, sessionId: w, initialSection: R, initialSubsection: M, transitionState: U, openedAt: L, onClose: D, sourceAnalyticsLocations: B = [] } = e,
        k = N === E.ME ? void 0 : N,
        G = (0, u.ZP)(n.id, k),
        { analyticsLocations: Y } = (0, s.ZP)([...B, o.Z.USER_PROFILE_MODAL]),
        V = (0, a.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: w,
            guildId: k,
            channelId: A,
            messageId: C,
            roleId: _
        }),
        F = (0, I.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: Y,
        children: (0, l.jsx)(a.Mt, {
            value: V,
            openedAt: L,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: U,
                className: S.root,
                hideShadow: !0,
                'aria-label': T.intl.string(T.t['3N/J2t']),
                children: (0, l.jsxs)(h.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: P.lY.MODAL,
                    children: [
                        (0, l.jsx)(x.Z, {
                            children: (0, l.jsx)(m.Z, {
                                user: n,
                                guildId: k,
                                onCloseProfile: D
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(p.Z, {
                                    user: n,
                                    displayProfile: G,
                                    themeType: P.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: S.headerInner,
                                    children: [
                                        (0, l.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: G,
                                            guildId: k,
                                            channelId: A,
                                            themeType: P.lY.MODAL
                                        }),
                                        (0, l.jsx)(y.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: P.lY.MODAL,
                                            hasEntered: U === r.Dvm.ENTERED,
                                            onCloseProfile: D,
                                            disableToolbar: !0
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: S.headerButtons,
                                            children: [
                                                (0, l.jsx)(Z.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: i.Z.popAll,
                                                    className: S.messageTextButton
                                                }),
                                                (0, l.jsx)(Z.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: i.Z.popAll,
                                                    tooltipContainerClassName: S.messageIconButton
                                                }),
                                                (0, l.jsx)(b.Z, {
                                                    user: n,
                                                    guildId: k
                                                }),
                                                (0, l.jsx)(j.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: S.body,
                            children: [
                                (0, l.jsx)(v.Z, {
                                    className: S.username,
                                    user: n,
                                    nickname: c.ZP.getName(k, A, n),
                                    pronouns: null == G ? void 0 : G.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(g.Z, {
                                        size: 'sm',
                                        userId: n.id
                                    }),
                                    tags: (0, l.jsx)(f.Z, {
                                        displayProfile: G,
                                        themeType: P.lY.MODAL,
                                        onClose: D
                                    })
                                }),
                                (0, l.jsx)(O.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: G,
                                    guildId: k,
                                    items: F,
                                    initialSection: null != R ? R : P.oh.BOT_INFO,
                                    initialSubsection: M,
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
