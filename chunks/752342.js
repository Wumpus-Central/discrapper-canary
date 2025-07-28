(t.d(n, { Z: () => A }), t(388685));
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(572691),
    o = t(100527),
    s = t(906732),
    c = t(313201),
    a = t(5192),
    u = t(785717),
    d = t(687158),
    f = t(899007),
    p = t(648052),
    g = t(867176),
    j = t(681837),
    v = t(502762),
    h = t(530),
    m = t(871604),
    b = t(952124),
    x = t(53558),
    y = t(544989),
    O = t(30556),
    Z = t(4517),
    I = t(740628),
    P = t(398145),
    E = t(228168),
    T = t(981631),
    S = t(388032),
    N = t(405666);
function A(e) {
    let { user: n, currentUser: t, guildId: A, channelId: C, messageId: w, roleId: _, sessionId: R, initialSection: M, initialSubsection: U, transitionState: D, openedAt: L, onClose: B, sourceAnalyticsLocations: k = [] } = e,
        G = A === T.ME ? void 0 : A,
        Y = (0, d.ZP)(n.id, G),
        V = a.ZP.getName(G, C, n),
        F = (0, c.Dt)(),
        { analyticsLocations: z } = (0, s.ZP)([...k, o.Z.USER_PROFILE_MODAL]),
        W = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: G,
            channelId: C,
            messageId: w,
            roleId: _
        }),
        K = (0, P.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: z,
        children: (0, l.jsx)(u.Mt, {
            value: W,
            openedAt: L,
            fetchStartedAt: null == Y ? void 0 : Y.fetchStartedAt,
            fetchEndedAt: null == Y ? void 0 : Y.fetchEndedAt,
            isLoaded: null == Y ? void 0 : Y.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                transitionState: D,
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
                            (0, l.jsx)(y.Z, {
                                children: (0, l.jsx)(b.Z, {
                                    user: n,
                                    guildId: G,
                                    onCloseProfile: B
                                })
                            }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(g.Z, {
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
                                                guildId: G,
                                                channelId: C,
                                                themeType: E.lY.MODAL
                                            }),
                                            (0, l.jsx)(Z.Z, {
                                                location: 'BotUserProfileModal',
                                                user: n,
                                                themeType: E.lY.MODAL,
                                                hasEntered: D === r.Dvm.ENTERED,
                                                onCloseProfile: B,
                                                disableToolbar: !0
                                            }),
                                            (0, l.jsxs)('div', {
                                                className: N.headerButtons,
                                                children: [
                                                    (0, l.jsx)(O.Z, {
                                                        type: 'text',
                                                        userId: n.id,
                                                        onClose: i.Z.popAll,
                                                        className: N.messageTextButton
                                                    }),
                                                    (0, l.jsx)(O.Z, {
                                                        type: 'icon',
                                                        userId: n.id,
                                                        onClose: i.Z.popAll,
                                                        tooltipContainerClassName: N.messageIconButton
                                                    }),
                                                    (0, l.jsx)(x.Z, {
                                                        user: n,
                                                        guildId: G
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
                                    (0, l.jsx)(h.Z, {
                                        className: N.username,
                                        user: n,
                                        nickname: V,
                                        pronouns: null == Y ? void 0 : Y.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        nicknameIcons: (0, l.jsx)(j.Z, {
                                            size: 'sm',
                                            userId: n.id
                                        }),
                                        tags: (0, l.jsx)(p.Z, {
                                            displayProfile: Y,
                                            themeType: E.lY.MODAL,
                                            onClose: B
                                        })
                                    }),
                                    (0, l.jsx)(I.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: Y,
                                        guildId: G,
                                        items: K,
                                        initialSection: null != M ? M : E.oh.BOT_INFO,
                                        initialSubsection: U,
                                        onClose: B
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
