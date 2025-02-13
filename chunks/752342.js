t.d(n, { Z: () => P }), t(47120);
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(100527),
    s = t(906732),
    r = t(5192),
    a = t(785717),
    d = t(687158),
    c = t(899007),
    u = t(648052),
    I = t(867176),
    f = t(681837),
    p = t(502762),
    x = t(530),
    h = t(871604),
    m = t(952124),
    _ = t(53558),
    Z = t(544989),
    v = t(934861),
    g = t(4517),
    j = t(740628),
    E = t(398145),
    y = t(228168),
    N = t(981631),
    T = t(388032),
    b = t(736656);
function P(e) {
    let { user: n, currentUser: t, guildId: P, channelId: S, messageId: L, roleId: C, sessionId: A, initialSection: O, initialSubsection: R, transitionState: M, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        F = P === N.ME ? void 0 : P,
        D = (0, d.ZP)(n.id, F),
        { analyticsLocations: w } = (0, s.ZP)([...B, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        G = (0, a.ZB)({
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
        value: w,
        children: (0, i.jsx)(a.Mt, {
            value: G,
            children: (0, i.jsx)(l.Y0X, {
                transitionState: M,
                className: b.root,
                hideShadow: !0,
                'aria-label': T.intl.string(T.t['3N/J2t']),
                children: (0, i.jsxs)(p.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: y.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            profileType: y.y0.FULL_SIZE,
                            children: (0, i.jsx)(m.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(I.Z, {
                                    user: n,
                                    displayProfile: D,
                                    profileType: y.y0.FULL_SIZE
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.headerInner,
                                    children: [
                                        (0, i.jsx)(c.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: F,
                                            channelId: S,
                                            profileType: y.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: y.y0.FULL_SIZE,
                                            hasEntered: M === l.Dvm.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: b.headerButtons,
                                            children: [
                                                (0, i.jsx)(v.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: b.messageTextButton
                                                }),
                                                (0, i.jsx)(v.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: b.messageIconButton
                                                }),
                                                (0, i.jsx)(_.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, i.jsx)(h.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: b.body,
                            children: [
                                (0, i.jsx)(x.Z, {
                                    user: n,
                                    profileType: y.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, S, n),
                                    pronouns: null == D ? void 0 : D.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(f.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: D,
                                        profileType: y.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(p.Z.Overlay, {
                                    className: b.overlay,
                                    children: (0, i.jsx)(j.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: D,
                                        guildId: F,
                                        items: k,
                                        initialSection: null != O ? O : y.oh.BOT_INFO,
                                        initialSubsection: R,
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
