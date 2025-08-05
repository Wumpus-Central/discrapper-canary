(t.d(n, { Z: () => A }), t(388685));
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(572691),
    o = t(100527),
    s = t(906732),
    d = t(313201),
    a = t(5192),
    c = t(785717),
    u = t(687158),
    f = t(899007),
    p = t(648052),
    h = t(867176),
    g = t(681837),
    v = t(502762),
    j = t(530),
    m = t(871604),
    b = t(952124),
    x = t(53558),
    Z = t(544989),
    y = t(30556),
    O = t(4517),
    I = t(740628),
    P = t(398145),
    E = t(228168),
    T = t(981631),
    S = t(388032),
    N = t(405666);
function A(e) {
    let { user: n, currentUser: t, guildId: A, channelId: C, messageId: _, roleId: M, sessionId: R, initialSection: w, initialSubsection: U, transitionState: L, openedAt: D, onClose: G, sourceAnalyticsLocations: B = [] } = e,
        k = A === T.ME ? void 0 : A,
        Y = (0, u.ZP)(n.id, k),
        V = a.ZP.getName(k, C, n),
        F = (0, d.Dt)(),
        { analyticsLocations: W } = (0, s.ZP)([...B, o.Z.USER_PROFILE_MODAL]),
        z = (0, c.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: k,
            channelId: C,
            messageId: _,
            roleId: M
        }),
        K = (0, P.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: W,
        children: (0, l.jsx)(c.Mt, {
            value: z,
            openedAt: D,
            fetchStartedAt: null == Y ? void 0 : Y.fetchStartedAt,
            fetchEndedAt: null == Y ? void 0 : Y.fetchEndedAt,
            isLoaded: null == Y ? void 0 : Y.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: L,
                className: N.root,
                hideShadow: !0,
                'aria-labelledby': F,
                parentComponent: 'BotUserProfileModal',
                children: (0, l.jsx)(r.y5t, {
                    component: (0, l.jsx)(r.nn4, {
                        children: (0, l.jsx)(r.H, {
                            id: F,
                            children: S.intl.format(S.t.KRe1Fh, { name: V })
                        })
                    }),
                    children: (0, l.jsxs)(v.Z, {
                        user: n,
                        displayProfile: Y,
                        themeType: E.lY.MODAL,
                        children: [
                            (0, l.jsx)(Z.Z, {
                                children: (0, l.jsx)(b.Z, {
                                    user: n,
                                    guildId: k,
                                    onCloseProfile: G
                                })
                            }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(h.Z, {
                                        user: n,
                                        displayProfile: Y,
                                        themeType: E.lY.MODAL
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: N.headerInner,
                                        children: [
                                            (0, l.jsx)(f.Z, {
                                                user: n,
                                                displayProfile: Y,
                                                guildId: k,
                                                channelId: C,
                                                themeType: E.lY.MODAL
                                            }),
                                            (0, l.jsx)(O.Z, {
                                                location: 'BotUserProfileModal',
                                                user: n,
                                                themeType: E.lY.MODAL,
                                                hasEntered: L === r.Dvm.ENTERED,
                                                onCloseProfile: G,
                                                disableToolbar: !0
                                            }),
                                            (0, l.jsxs)('div', {
                                                className: N.headerButtons,
                                                children: [
                                                    (0, l.jsx)(y.Z, {
                                                        type: 'text',
                                                        userId: n.id,
                                                        onClose: i.Z.popAll,
                                                        className: N.messageTextButton
                                                    }),
                                                    (0, l.jsx)(y.Z, {
                                                        type: 'icon',
                                                        userId: n.id,
                                                        onClose: i.Z.popAll,
                                                        tooltipContainerClassName: N.messageIconButton
                                                    }),
                                                    (0, l.jsx)(x.Z, {
                                                        user: n,
                                                        guildId: k
                                                    }),
                                                    (0, l.jsx)(m.Z, { user: n })
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
                                        user: n,
                                        nickname: V,
                                        pronouns: null == Y ? void 0 : Y.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        nicknameIcons: (0, l.jsx)(g.Z, {
                                            size: 'sm',
                                            userId: n.id
                                        }),
                                        tags: (0, l.jsx)(p.Z, {
                                            displayProfile: Y,
                                            themeType: E.lY.MODAL,
                                            onClose: G
                                        })
                                    }),
                                    (0, l.jsx)(I.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: Y,
                                        guildId: k,
                                        items: K,
                                        initialSection: null != w ? w : E.oh.BOT_INFO,
                                        initialSubsection: U,
                                        onClose: G
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
