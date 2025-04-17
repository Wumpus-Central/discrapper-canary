t.d(n, { Z: () => P }), t(388685);
var o = t(200651);
t(192379);
var r = t(481060),
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
    I = t(871604),
    h = t(952124),
    g = t(53558),
    y = t(544989),
    j = t(934861),
    v = t(4517),
    x = t(740628),
    _ = t(398145),
    Z = t(228168),
    O = t(981631),
    N = t(388032),
    E = t(405666);
function P(e) {
    let { user: n, currentUser: t, guildId: P, channelId: S, messageId: T, roleId: C, sessionId: A, initialSection: L, initialSubsection: w, transitionState: R, openedAt: M, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        B = P === O.ME ? void 0 : P,
        W = (0, a.ZP)(n.id, B),
        { analyticsLocations: F } = (0, l.ZP)([...D, i.Z.SIMPLIFIED_PROFILE_MODAL]),
        k = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: B,
            channelId: S,
            messageId: T,
            roleId: C
        }),
        G = (0, _.Z)(n);
    return (0, o.jsx)(l.Gt, {
        value: F,
        children: (0, o.jsx)(c.Mt, {
            value: k,
            openedAt: M,
            fetchStartedAt: null == W ? void 0 : W.fetchStartedAt,
            fetchEndedAt: null == W ? void 0 : W.fetchEndedAt,
            isLoaded: null == W ? void 0 : W.isLoaded,
            children: (0, o.jsx)(r.Y0X, {
                transitionState: R,
                className: E.root,
                hideShadow: !0,
                'aria-label': N.NW.string(N.t['3N/J2t']),
                children: (0, o.jsxs)(b.Z, {
                    user: n,
                    displayProfile: W,
                    profileType: Z.y0.FULL_SIZE,
                    children: [
                        (0, o.jsx)(y.Z, {
                            profileType: Z.y0.FULL_SIZE,
                            children: (0, o.jsx)(h.Z, {
                                user: n,
                                guildId: B,
                                onCloseProfile: U
                            })
                        }),
                        (0, o.jsxs)('header', {
                            children: [
                                (0, o.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: W,
                                    profileType: Z.y0.FULL_SIZE
                                }),
                                (0, o.jsxs)('div', {
                                    className: E.headerInner,
                                    children: [
                                        (0, o.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: W,
                                            guildId: B,
                                            channelId: S,
                                            profileType: Z.y0.FULL_SIZE
                                        }),
                                        (0, o.jsx)(v.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: Z.y0.FULL_SIZE,
                                            hasEntered: R === r.Dvm.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: E.headerButtons,
                                            children: [
                                                (0, o.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: E.messageTextButton
                                                }),
                                                (0, o.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: E.messageIconButton
                                                }),
                                                (0, o.jsx)(g.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, o.jsx)(I.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, o.jsxs)('div', {
                            className: E.body,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    className: E.username,
                                    user: n,
                                    profileType: Z.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(B, S, n),
                                    pronouns: null == W ? void 0 : W.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, o.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, o.jsx)(u.Z, {
                                        displayProfile: W,
                                        profileType: Z.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, o.jsx)(x.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: W,
                                    guildId: B,
                                    items: G,
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
