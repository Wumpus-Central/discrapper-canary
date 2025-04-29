t.d(n, { Z: () => N }), t(388685);
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(100527),
    o = t(906732),
    s = t(5192),
    a = t(785717),
    d = t(687158),
    c = t(899007),
    u = t(648052),
    f = t(867176),
    h = t(681837),
    p = t(502762),
    g = t(530),
    j = t(871604),
    m = t(952124),
    v = t(53558),
    x = t(544989),
    Z = t(30556),
    b = t(4517),
    O = t(740628),
    y = t(398145),
    I = t(228168),
    E = t(981631),
    P = t(388032),
    T = t(405666);
function N(e) {
    let { user: n, currentUser: t, guildId: N, channelId: A, messageId: S, roleId: C, sessionId: _, initialSection: R, initialSubsection: w, transitionState: M, openedAt: L, onClose: D, sourceAnalyticsLocations: U = [] } = e,
        G = N === E.ME ? void 0 : N,
        B = (0, d.ZP)(n.id, G),
        { analyticsLocations: k } = (0, o.ZP)([...U, i.Z.USER_PROFILE_MODAL]),
        Y = (0, a.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: G,
            channelId: A,
            messageId: S,
            roleId: C
        }),
        V = (0, y.Z)(n);
    return (0, l.jsx)(o.Gt, {
        value: k,
        children: (0, l.jsx)(a.Mt, {
            value: Y,
            openedAt: L,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: M,
                className: T.root,
                hideShadow: !0,
                'aria-label': P.intl.string(P.t['3N/J2t']),
                children: (0, l.jsxs)(p.Z, {
                    user: n,
                    displayProfile: B,
                    themeType: I.lY.MODAL,
                    children: [
                        (0, l.jsx)(x.Z, {
                            children: (0, l.jsx)(m.Z, {
                                user: n,
                                guildId: G,
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
                                    className: T.headerInner,
                                    children: [
                                        (0, l.jsx)(c.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: G,
                                            channelId: A,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)(b.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: I.lY.MODAL,
                                            hasEntered: M === r.Dvm.ENTERED,
                                            onCloseProfile: D
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: T.headerButtons,
                                            children: [
                                                (0, l.jsx)(Z.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: D,
                                                    className: T.messageTextButton
                                                }),
                                                (0, l.jsx)(Z.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: D,
                                                    tooltipContainerClassName: T.messageIconButton
                                                }),
                                                (0, l.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: G
                                                }),
                                                (0, l.jsx)(j.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: T.body,
                            children: [
                                (0, l.jsx)(g.Z, {
                                    className: T.username,
                                    user: n,
                                    nickname: s.ZP.getName(G, A, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(h.Z, { userId: n.id }),
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
                                    guildId: G,
                                    items: V,
                                    initialSection: null != R ? R : I.oh.BOT_INFO,
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
