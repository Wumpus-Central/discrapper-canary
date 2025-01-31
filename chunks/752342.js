t.d(n, { Z: () => b }), t(47120);
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(100527),
    s = t(906732),
    r = t(5192),
    a = t(785717),
    c = t(687158),
    d = t(899007),
    u = t(648052),
    m = t(867176),
    x = t(681837),
    p = t(502762),
    f = t(530),
    I = t(871604),
    h = t(952124),
    v = t(53558),
    Z = t(544989),
    _ = t(934861),
    g = t(4517),
    j = t(740628),
    E = t(398145),
    N = t(228168),
    y = t(981631),
    T = t(388032),
    P = t(171865);
function b(e) {
    let { user: n, currentUser: t, guildId: b, channelId: S, messageId: L, roleId: C, sessionId: A, initialSection: O, initialSubsection: M, transitionState: R, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        F = b === y.ME ? void 0 : b,
        D = (0, c.ZP)(n.id, F),
        { analyticsLocations: G } = (0, s.ZP)([...B, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, a.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: F,
            channelId: S,
            messageId: L,
            roleId: C
        }),
        k = (0, E.Z)(n);
    return (0, i.jsx)(s.Gt, {
        value: G,
        children: (0, i.jsx)(a.Mt, {
            value: w,
            children: (0, i.jsx)(l.Y0X, {
                transitionState: R,
                className: P.root,
                hideShadow: !0,
                'aria-label': T.intl.string(T.t['3N/J2t']),
                children: (0, i.jsxs)(p.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: N.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            profileType: N.y0.FULL_SIZE,
                            children: (0, i.jsx)(h.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(m.Z, {
                                    user: n,
                                    displayProfile: D,
                                    profileType: N.y0.FULL_SIZE
                                }),
                                (0, i.jsxs)('div', {
                                    className: P.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: F,
                                            channelId: S,
                                            profileType: N.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: N.y0.FULL_SIZE,
                                            hasEntered: R === l.Dvm.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: P.headerButtons,
                                            children: [
                                                (0, i.jsx)(_.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: P.messageTextButton
                                                }),
                                                (0, i.jsx)(_.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: P.messageIconButton
                                                }),
                                                (0, i.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, i.jsx)(I.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: P.body,
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    profileType: N.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, S, n),
                                    pronouns: null == D ? void 0 : D.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(x.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: D,
                                        profileType: N.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(p.Z.Overlay, {
                                    className: P.overlay,
                                    children: (0, i.jsx)(j.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: D,
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
