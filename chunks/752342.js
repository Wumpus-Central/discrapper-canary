i.d(n, { Z: () => b }), i(47120);
var t = i(200651);
i(192379);
var l = i(481060),
    o = i(100527),
    s = i(906732),
    r = i(5192),
    a = i(785717),
    d = i(687158),
    c = i(899007),
    u = i(648052),
    m = i(867176),
    x = i(681837),
    p = i(502762),
    f = i(530),
    I = i(871604),
    h = i(952124),
    v = i(53558),
    Z = i(544989),
    g = i(934861),
    _ = i(4517),
    j = i(740628),
    E = i(398145),
    N = i(228168),
    y = i(981631),
    T = i(388032),
    S = i(171865);
function b(e) {
    let { user: n, currentUser: i, guildId: b, channelId: P, messageId: L, roleId: C, sessionId: A, initialSection: O, initialSubsection: M, transitionState: R, onClose: U, sourceAnalyticsLocations: F = [] } = e,
        B = b === y.ME ? void 0 : b,
        D = (0, d.ZP)(n.id, B),
        { analyticsLocations: w } = (0, s.ZP)([...F, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        G = (0, a.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: B,
            channelId: P,
            messageId: L,
            roleId: C
        }),
        k = (0, E.Z)(n);
    return (0, t.jsx)(s.Gt, {
        value: w,
        children: (0, t.jsx)(a.Mt, {
            value: G,
            children: (0, t.jsx)(l.Y0X, {
                transitionState: R,
                className: S.root,
                hideShadow: !0,
                'aria-label': T.intl.string(T.t['3N/J2t']),
                children: (0, t.jsxs)(p.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: N.y0.FULL_SIZE,
                    children: [
                        (0, t.jsx)(Z.Z, {
                            profileType: N.y0.FULL_SIZE,
                            children: (0, t.jsx)(h.Z, {
                                user: n,
                                guildId: B
                            })
                        }),
                        (0, t.jsxs)('header', {
                            children: [
                                (0, t.jsx)(m.Z, {
                                    user: n,
                                    displayProfile: D,
                                    profileType: N.y0.FULL_SIZE
                                }),
                                (0, t.jsxs)('div', {
                                    className: S.headerInner,
                                    children: [
                                        (0, t.jsx)(c.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: B,
                                            channelId: P,
                                            profileType: N.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(_.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: N.y0.FULL_SIZE,
                                            hasEntered: R === l.Dvm.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: S.headerButtons,
                                            children: [
                                                (0, t.jsx)(g.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: S.messageTextButton
                                                }),
                                                (0, t.jsx)(g.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: S.messageIconButton
                                                }),
                                                (0, t.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, t.jsx)(I.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            className: S.body,
                            children: [
                                (0, t.jsx)(f.Z, {
                                    user: n,
                                    profileType: N.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(B, P, n),
                                    pronouns: null == D ? void 0 : D.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, t.jsx)(x.Z, { userId: n.id }),
                                    tags: (0, t.jsx)(u.Z, {
                                        displayProfile: D,
                                        profileType: N.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, t.jsx)(p.Z.Overlay, {
                                    className: S.overlay,
                                    children: (0, t.jsx)(j.Z, {
                                        user: n,
                                        currentUser: i,
                                        displayProfile: D,
                                        guildId: B,
                                        items: k,
                                        initialSection: null != O ? O : N.oh.BOT_INFO,
                                        initialSubsection: M,
                                        onClose: U
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
