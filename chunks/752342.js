t.d(n, { Z: () => C }), t(388685);
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(572691),
    s = t(100527),
    a = t(906732),
    c = t(706454),
    u = t(5192),
    d = t(785717),
    f = t(687158),
    p = t(899007),
    g = t(648052),
    v = t(867176),
    j = t(681837),
    h = t(502762),
    m = t(530),
    b = t(871604),
    x = t(952124),
    O = t(53558),
    y = t(544989),
    Z = t(30556),
    I = t(4517),
    P = t(740628),
    E = t(398145),
    S = t(228168),
    T = t(981631),
    N = t(388032),
    A = t(405666);
function C(e) {
    let { user: n, currentUser: t, guildId: C, channelId: w, messageId: _, roleId: R, sessionId: M, initialSection: U, initialSubsection: L, transitionState: D, openedAt: B, onClose: G, sourceAnalyticsLocations: k = [] } = e,
        Y = C === T.ME ? void 0 : C,
        V = (0, f.ZP)(n.id, Y),
        F = u.ZP.getName(Y, w, n),
        { analyticsLocations: W } = (0, a.ZP)([...k, s.Z.USER_PROFILE_MODAL]),
        z = (0, d.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: Y,
            channelId: w,
            messageId: _,
            roleId: R
        }),
        J = (0, E.Z)(n),
        K = (0, r.e7)([c.default], () => ['en-US', 'en-GB'].includes(c.default.locale)) ? N.intl.formatToPlainString(N.t.KRe1Fh, { name: F }) : N.intl.string(N.t['3N/J2t']);
    return (0, l.jsx)(a.Gt, {
        value: W,
        children: (0, l.jsx)(d.Mt, {
            value: z,
            openedAt: B,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, l.jsx)(i.Y0X, {
                transitionState: D,
                className: A.root,
                hideShadow: !0,
                'aria-label': K,
                parentComponent: 'BotUserProfileModal',
                children: (0, l.jsxs)(h.Z, {
                    user: n,
                    displayProfile: V,
                    themeType: S.lY.MODAL,
                    children: [
                        (0, l.jsx)(y.Z, {
                            children: (0, l.jsx)(x.Z, {
                                user: n,
                                guildId: Y,
                                onCloseProfile: G
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(v.Z, {
                                    user: n,
                                    displayProfile: V,
                                    themeType: S.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: A.headerInner,
                                    children: [
                                        (0, l.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: V,
                                            guildId: Y,
                                            channelId: w,
                                            themeType: S.lY.MODAL
                                        }),
                                        (0, l.jsx)(I.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: S.lY.MODAL,
                                            hasEntered: D === i.Dvm.ENTERED,
                                            onCloseProfile: G,
                                            disableToolbar: !0
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: A.headerButtons,
                                            children: [
                                                (0, l.jsx)(Z.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: o.Z.popAll,
                                                    className: A.messageTextButton
                                                }),
                                                (0, l.jsx)(Z.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: o.Z.popAll,
                                                    tooltipContainerClassName: A.messageIconButton
                                                }),
                                                (0, l.jsx)(O.Z, {
                                                    user: n,
                                                    guildId: Y
                                                }),
                                                (0, l.jsx)(b.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: A.body,
                            children: [
                                (0, l.jsx)(m.Z, {
                                    className: A.username,
                                    user: n,
                                    nickname: F,
                                    pronouns: null == V ? void 0 : V.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(j.Z, {
                                        size: 'sm',
                                        userId: n.id
                                    }),
                                    tags: (0, l.jsx)(g.Z, {
                                        displayProfile: V,
                                        themeType: S.lY.MODAL,
                                        onClose: G
                                    })
                                }),
                                (0, l.jsx)(P.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: V,
                                    guildId: Y,
                                    items: J,
                                    initialSection: null != U ? U : S.oh.BOT_INFO,
                                    initialSubsection: L,
                                    onClose: G
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
