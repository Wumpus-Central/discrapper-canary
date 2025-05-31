t.d(n, { Z: () => N }), t(388685);
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(572691),
    o = t(100527),
    s = t(906732),
    a = t(5192),
    c = t(785717),
    u = t(687158),
    d = t(899007),
    f = t(648052),
    p = t(867176),
    g = t(681837),
    v = t(502762),
    j = t(530),
    b = t(871604),
    h = t(952124),
    m = t(53558),
    x = t(544989),
    O = t(30556),
    Z = t(4517),
    y = t(740628),
    P = t(398145),
    I = t(228168),
    E = t(981631),
    T = t(388032),
    S = t(405666);
function N(e) {
    let { user: n, currentUser: t, guildId: N, channelId: A, messageId: C, roleId: _, sessionId: w, initialSection: M, initialSubsection: R, transitionState: U, openedAt: D, onClose: L, sourceAnalyticsLocations: k = [] } = e,
        G = N === E.ME ? void 0 : N,
        B = (0, u.ZP)(n.id, G),
        { analyticsLocations: V } = (0, s.ZP)([...k, o.Z.USER_PROFILE_MODAL]),
        Y = (0, c.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: w,
            guildId: G,
            channelId: A,
            messageId: C,
            roleId: _
        }),
        F = (0, P.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: V,
        children: (0, l.jsx)(c.Mt, {
            value: Y,
            openedAt: D,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: U,
                className: S.root,
                hideShadow: !0,
                'aria-label': T.intl.string(T.t['3N/J2t']),
                children: (0, l.jsxs)(v.Z, {
                    user: n,
                    displayProfile: B,
                    themeType: I.lY.MODAL,
                    children: [
                        (0, l.jsx)(x.Z, {
                            children: (0, l.jsx)(h.Z, {
                                user: n,
                                guildId: G,
                                onCloseProfile: L
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(p.Z, {
                                    user: n,
                                    displayProfile: B,
                                    themeType: I.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: S.headerInner,
                                    children: [
                                        (0, l.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: G,
                                            channelId: A,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)(Z.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: I.lY.MODAL,
                                            hasEntered: U === r.Dvm.ENTERED,
                                            onCloseProfile: L,
                                            disableToolbar: !0
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: S.headerButtons,
                                            children: [
                                                (0, l.jsx)(O.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: i.Z.popAll,
                                                    className: S.messageTextButton
                                                }),
                                                (0, l.jsx)(O.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: i.Z.popAll,
                                                    tooltipContainerClassName: S.messageIconButton
                                                }),
                                                (0, l.jsx)(m.Z, {
                                                    user: n,
                                                    guildId: G
                                                }),
                                                (0, l.jsx)(b.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: S.body,
                            children: [
                                (0, l.jsx)(j.Z, {
                                    className: S.username,
                                    user: n,
                                    nickname: a.ZP.getName(G, A, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(g.Z, {
                                        size: 'sm',
                                        userId: n.id
                                    }),
                                    tags: (0, l.jsx)(f.Z, {
                                        displayProfile: B,
                                        themeType: I.lY.MODAL,
                                        onClose: L
                                    })
                                }),
                                (0, l.jsx)(y.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: B,
                                    guildId: G,
                                    items: F,
                                    initialSection: null != M ? M : I.oh.BOT_INFO,
                                    initialSubsection: R,
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
