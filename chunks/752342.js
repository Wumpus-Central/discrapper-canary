t.d(n, { Z: () => O }), t(388685);
var i = t(200651);
t(192379);
var o = t(481060),
    l = t(100527),
    r = t(906732),
    s = t(5192),
    a = t(785717),
    c = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    p = t(681837),
    m = t(502762),
    h = t(530),
    x = t(871604),
    I = t(952124),
    j = t(53558),
    v = t(544989),
    b = t(30556),
    _ = t(4517),
    g = t(740628),
    Z = t(398145),
    y = t(228168),
    N = t(981631),
    A = t(388032),
    T = t(405666);
function O(e) {
    let { user: n, currentUser: t, guildId: O, channelId: C, messageId: E, roleId: P, sessionId: S, initialSection: L, initialSubsection: M, transitionState: w, openedAt: D, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        G = O === N.ME ? void 0 : O,
        R = (0, c.ZP)(n.id, G),
        { analyticsLocations: k } = (0, r.ZP)([...B, l.Z.USER_PROFILE_MODAL]),
        F = (0, a.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: S,
            guildId: G,
            channelId: C,
            messageId: E,
            roleId: P
        }),
        Y = (0, Z.Z)(n);
    return (0, i.jsx)(r.Gt, {
        value: k,
        children: (0, i.jsx)(a.Mt, {
            value: F,
            openedAt: D,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, i.jsx)(o.Y0X, {
                transitionState: w,
                className: T.root,
                hideShadow: !0,
                'aria-label': A.intl.string(A.t['3N/J2t']),
                children: (0, i.jsxs)(m.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: y.lY.MODAL,
                    children: [
                        (0, i.jsx)(v.Z, {
                            children: (0, i.jsx)(I.Z, {
                                user: n,
                                guildId: G,
                                onCloseProfile: U
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: R,
                                    themeType: y.lY.MODAL
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: R,
                                            guildId: G,
                                            channelId: C,
                                            themeType: y.lY.MODAL
                                        }),
                                        (0, i.jsx)(_.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            themeType: y.lY.MODAL,
                                            hasEntered: w === o.Dvm.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: T.headerButtons,
                                            children: [
                                                (0, i.jsx)(b.Z, {
                                                    type: 'text',
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: T.messageTextButton
                                                }),
                                                (0, i.jsx)(b.Z, {
                                                    type: 'icon',
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: T.messageIconButton
                                                }),
                                                (0, i.jsx)(j.Z, {
                                                    user: n,
                                                    guildId: G
                                                }),
                                                (0, i.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: T.body,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    className: T.username,
                                    user: n,
                                    nickname: s.ZP.getName(G, C, n),
                                    pronouns: null == R ? void 0 : R.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: R,
                                        themeType: y.lY.MODAL,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(g.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: R,
                                    guildId: G,
                                    items: Y,
                                    initialSection: null != L ? L : y.oh.BOT_INFO,
                                    initialSubsection: M,
                                    onClose: U
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
