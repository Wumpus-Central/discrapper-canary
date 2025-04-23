t.d(n, { Z: () => C }), t(388685);
var o = t(200651);
t(192379);
var c = t(481060),
    r = t(100527),
    a = t(906732),
    i = t(5192),
    d = t(785717),
    s = t(687158),
    l = t(899007),
    u = t(648052),
    f = t(867176),
    _ = t(681837),
    m = t(502762),
    x = t(530),
    h = t(871604),
    b = t(952124),
    p = t(53558),
    I = t(544989),
    j = t(934861),
    y = t(4517),
    A = t(740628),
    v = t(398145),
    g = t(228168),
    O = t(981631),
    N = t(388032),
    Z = t(405666);
function C(e) {
    let { user: n, currentUser: t, guildId: C, channelId: P, messageId: T, roleId: w, sessionId: L, initialSection: S, initialSubsection: M, transitionState: B, openedAt: E, onClose: D, sourceAnalyticsLocations: k = [] } = e,
        R = C === O.ME ? void 0 : C,
        G = (0, s.ZP)(n.id, R),
        { analyticsLocations: F } = (0, a.ZP)([...k, r.Z.USER_PROFILE_MODAL]),
        V = (0, d.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: R,
            channelId: P,
            messageId: T,
            roleId: w
        }),
        Y = (0, v.Z)(n);
    return (0, o.jsx)(a.Gt, {
        value: F,
        children: (0, o.jsx)(d.Mt, {
            value: V,
            openedAt: E,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, o.jsx)(c.Y0X, {
                transitionState: B,
                className: Z.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: (0, o.jsxs)(m.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: g.lY.MODAL,
                    children: [
                        (0, o.jsx)(I.Z, {
                            children: (0, o.jsx)(b.Z, {
                                user: n,
                                guildId: R,
                                onCloseProfile: D
                            })
                        }),
                        (0, o.jsxs)('header', {
                            children: [
                                (0, o.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: G,
                                    themeType: g.lY.MODAL
                                }),
                                (0, o.jsxs)('div', {
                                    className: Z.headerInner,
                                    children: [
                                        (0, o.jsx)(l.Z, {
                                            user: n,
                                            displayProfile: G,
                                            guildId: R,
                                            channelId: P,
                                            themeType: g.lY.MODAL
                                        }),
                                        (0, o.jsx)(y.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: g.lY.MODAL,
                                            hasEntered: B === c.Dvm.ENTERED,
                                            onCloseProfile: D
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: Z.headerButtons,
                                            children: [
                                                (0, o.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: D,
                                                    className: Z.messageTextButton
                                                }),
                                                (0, o.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: D,
                                                    tooltipContainerClassName: Z.messageIconButton
                                                }),
                                                (0, o.jsx)(p.Z, {
                                                    user: n,
                                                    guildId: R
                                                }),
                                                (0, o.jsx)(h.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, o.jsxs)('div', {
                            className: Z.body,
                            children: [
                                (0, o.jsx)(x.Z, {
                                    className: Z.username,
                                    user: n,
                                    nickname: i.ZP.getName(R, P, n),
                                    pronouns: null == G ? void 0 : G.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, o.jsx)(_.Z, { userId: n.id }),
                                    tags: (0, o.jsx)(u.Z, {
                                        displayProfile: G,
                                        themeType: g.lY.MODAL,
                                        onClose: D
                                    })
                                }),
                                (0, o.jsx)(A.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: G,
                                    guildId: R,
                                    items: Y,
                                    initialSection: null != S ? S : g.oh.BOT_INFO,
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
