t.d(n, { Z: () => S }), t(388685);
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
    g = t(952124),
    y = t(53558),
    I = t(544989),
    j = t(934861),
    v = t(4517),
    x = t(740628),
    _ = t(398145),
    Z = t(228168),
    O = t(981631),
    P = t(388032),
    E = t(405666);
function S(e) {
    let { user: n, currentUser: t, guildId: S, channelId: N, messageId: T, roleId: A, sessionId: C, initialSection: L, initialSubsection: w, transitionState: R, openedAt: M, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        D = S === O.ME ? void 0 : S,
        G = (0, a.ZP)(n.id, D),
        { analyticsLocations: k } = (0, l.ZP)([...B, i.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, c.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: C,
            guildId: D,
            channelId: N,
            messageId: T,
            roleId: A
        }),
        V = (0, _.Z)(n);
    return (0, r.jsx)(l.Gt, {
        value: k,
        children: (0, r.jsx)(c.Mt, {
            value: F,
            openedAt: M,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: R,
                className: E.root,
                hideShadow: !0,
                'aria-label': P.intl.string(P.t['3N/J2t']),
                children: (0, r.jsxs)(b.Z, {
                    user: n,
                    displayProfile: G,
                    profileType: Z.y0.FULL_SIZE,
                    children: [
                        (0, r.jsx)(I.Z, {
                            profileType: Z.y0.FULL_SIZE,
                            children: (0, r.jsx)(g.Z, {
                                user: n,
                                guildId: D,
                                onCloseProfile: U
                            })
                        }),
                        (0, r.jsxs)('header', {
                            children: [
                                (0, r.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: G,
                                    profileType: Z.y0.FULL_SIZE
                                }),
                                (0, r.jsxs)('div', {
                                    className: E.headerInner,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: G,
                                            guildId: D,
                                            channelId: N,
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
                                            className: E.headerButtons,
                                            children: [
                                                (0, r.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: E.messageTextButton
                                                }),
                                                (0, r.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: E.messageIconButton
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    user: n,
                                                    guildId: D
                                                }),
                                                (0, r.jsx)(h.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: E.body,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    className: E.username,
                                    user: n,
                                    profileType: Z.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(D, N, n),
                                    pronouns: null == G ? void 0 : G.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, r.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, r.jsx)(u.Z, {
                                        displayProfile: G,
                                        profileType: Z.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: G,
                                    guildId: D,
                                    items: V,
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
