t.d(n, { Z: () => C }), t(388685);
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(572691),
    s = t(100527),
    a = t(906732),
    u = t(706454),
    c = t(5192),
    d = t(785717),
    f = t(687158),
    p = t(899007),
    g = t(648052),
    v = t(867176),
    m = t(681837),
    h = t(502762),
    j = t(530),
    b = t(871604),
    x = t(952124),
    O = t(53558),
    Z = t(544989),
    y = t(30556),
    P = t(4517),
    I = t(740628),
    E = t(398145),
    S = t(228168),
    T = t(981631),
    N = t(388032),
    A = t(405666);
function C(e) {
    let { user: n, currentUser: t, guildId: C, channelId: _, messageId: w, roleId: M, sessionId: R, initialSection: U, initialSubsection: D, transitionState: L, openedAt: B, onClose: G, sourceAnalyticsLocations: k = [] } = e,
        V = C === T.ME ? void 0 : C,
        Y = (0, f.ZP)(n.id, V),
        F = c.ZP.getName(V, _, n),
        { analyticsLocations: z } = (0, a.ZP)([...k, s.Z.USER_PROFILE_MODAL]),
        W = (0, d.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: V,
            channelId: _,
            messageId: w,
            roleId: M
        }),
        K = (0, E.Z)(n),
        J = (0, r.e7)([u.default], () => ['en-US', 'en-GB'].includes(u.default.locale)) ? N.intl.formatToPlainString(N.t.KRe1Fh, { name: F }) : N.intl.string(N.t['3N/J2t']);
    return (0, l.jsx)(a.Gt, {
        value: z,
        children: (0, l.jsx)(d.Mt, {
            value: W,
            openedAt: B,
            fetchStartedAt: null == Y ? void 0 : Y.fetchStartedAt,
            fetchEndedAt: null == Y ? void 0 : Y.fetchEndedAt,
            isLoaded: null == Y ? void 0 : Y.isLoaded,
            children: (0, l.jsx)(i.Y0X, {
                transitionState: L,
                className: A.root,
                hideShadow: !0,
                'aria-label': J,
                parentComponent: 'BotUserProfileModal',
                children: (0, l.jsxs)(h.Z, {
                    user: n,
                    displayProfile: Y,
                    themeType: S.lY.MODAL,
                    children: [
                        (0, l.jsx)(Z.Z, {
                            children: (0, l.jsx)(x.Z, {
                                user: n,
                                guildId: V,
                                onCloseProfile: G
                            })
                        }),
                        (0, l.jsxs)('header', {
                            children: [
                                (0, l.jsx)(v.Z, {
                                    user: n,
                                    displayProfile: Y,
                                    themeType: S.lY.MODAL
                                }),
                                (0, l.jsxs)('div', {
                                    className: A.headerInner,
                                    children: [
                                        (0, l.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: Y,
                                            guildId: V,
                                            channelId: _,
                                            themeType: S.lY.MODAL
                                        }),
                                        (0, l.jsx)(P.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: S.lY.MODAL,
                                            hasEntered: L === i.Dvm.ENTERED,
                                            onCloseProfile: G,
                                            disableToolbar: !0
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: A.headerButtons,
                                            children: [
                                                (0, l.jsx)(y.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: o.Z.popAll,
                                                    className: A.messageTextButton
                                                }),
                                                (0, l.jsx)(y.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: o.Z.popAll,
                                                    tooltipContainerClassName: A.messageIconButton
                                                }),
                                                (0, l.jsx)(O.Z, {
                                                    user: n,
                                                    guildId: V
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
                                (0, l.jsx)(j.Z, {
                                    className: A.username,
                                    user: n,
                                    nickname: F,
                                    pronouns: null == Y ? void 0 : Y.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(m.Z, {
                                        size: 'sm',
                                        userId: n.id
                                    }),
                                    tags: (0, l.jsx)(g.Z, {
                                        displayProfile: Y,
                                        themeType: S.lY.MODAL,
                                        onClose: G
                                    })
                                }),
                                (0, l.jsx)(I.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: Y,
                                    guildId: V,
                                    items: K,
                                    initialSection: null != U ? U : S.oh.BOT_INFO,
                                    initialSubsection: D,
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
