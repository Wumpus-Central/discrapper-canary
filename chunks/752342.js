t.d(n, { Z: () => E }), t(388685);
var r = t(200651);
t(192379);
var o = t(481060),
    i = t(100527),
    l = t(906732),
    s = t(5192),
    c = t(785717),
    a = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    p = t(681837),
    b = t(502762),
    m = t(530),
    h = t(871604),
    I = t(952124),
    g = t(53558),
    y = t(544989),
    j = t(934861),
    v = t(4517),
    x = t(740628),
    _ = t(398145),
    Z = t(228168),
    O = t(981631),
    N = t(388032),
    P = t(191902);
function E(e) {
    let { user: n, currentUser: t, guildId: E, channelId: S, messageId: T, roleId: A, sessionId: C, initialSection: L, initialSubsection: w, transitionState: R, openedAt: M, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        B = E === O.ME ? void 0 : E,
        W = (0, a.ZP)(n.id, B),
        { analyticsLocations: G } = (0, l.ZP)([...D, i.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: C,
            guildId: B,
            channelId: S,
            messageId: T,
            roleId: A
        }),
        k = (0, _.Z)(n);
    return (0, r.jsx)(l.Gt, {
        value: G,
        children: (0, r.jsx)(c.Mt, {
            value: F,
            openedAt: M,
            fetchStartedAt: null == W ? void 0 : W.fetchStartedAt,
            fetchEndedAt: null == W ? void 0 : W.fetchEndedAt,
            isLoaded: null == W ? void 0 : W.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: R,
                className: P.root,
                hideShadow: !0,
                'aria-label': N.NW.string(N.t['3N/J2t']),
                children: (0, r.jsxs)(b.Z, {
                    user: n,
                    displayProfile: W,
                    profileType: Z.y0.FULL_SIZE,
                    children: [
                        (0, r.jsx)(y.Z, {
                            profileType: Z.y0.FULL_SIZE,
                            children: (0, r.jsx)(I.Z, {
                                user: n,
                                guildId: B,
                                onCloseProfile: U
                            })
                        }),
                        (0, r.jsxs)('header', {
                            children: [
                                (0, r.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: W,
                                    profileType: Z.y0.FULL_SIZE
                                }),
                                (0, r.jsxs)('div', {
                                    className: P.headerInner,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: W,
                                            guildId: B,
                                            channelId: S,
                                            profileType: Z.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: Z.y0.FULL_SIZE,
                                            hasEntered: R === o.Dvm.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: P.headerButtons,
                                            children: [
                                                (0, r.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: P.messageTextButton
                                                }),
                                                (0, r.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: P.messageIconButton
                                                }),
                                                (0, r.jsx)(g.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, r.jsx)(h.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: P.body,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    className: P.username,
                                    user: n,
                                    profileType: Z.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(B, S, n),
                                    pronouns: null == W ? void 0 : W.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, r.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, r.jsx)(u.Z, {
                                        displayProfile: W,
                                        profileType: Z.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: W,
                                    guildId: B,
                                    items: k,
                                    initialSection: null != L ? L : Z.oh.BOT_INFO,
                                    initialSubsection: w,
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
