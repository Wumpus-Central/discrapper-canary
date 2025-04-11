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
    y = t(530),
    I = t(871604),
    g = t(952124),
    m = t(53558),
    j = t(544989),
    v = t(934861),
    h = t(4517),
    x = t(740628),
    O = t(398145),
    _ = t(228168),
    Z = t(981631),
    N = t(388032),
    P = t(405666);
function E(e) {
    let { user: n, currentUser: t, guildId: E, channelId: S, messageId: T, roleId: C, sessionId: A, initialSection: w, initialSubsection: L, transitionState: R, onClose: M, sourceAnalyticsLocations: U = [] } = e,
        B = E === Z.ME ? void 0 : E,
        D = (0, a.ZP)(n.id, B),
        { analyticsLocations: W } = (0, l.ZP)([...U, i.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: B,
            channelId: S,
            messageId: T,
            roleId: C
        }),
        k = (0, O.Z)(n);
    return (0, r.jsx)(l.Gt, {
        value: W,
        children: (0, r.jsx)(c.Mt, {
            value: F,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: R,
                className: P.root,
                hideShadow: !0,
                'aria-label': N.NW.string(N.t['3N/J2t']),
                children: (0, r.jsxs)(b.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: _.y0.FULL_SIZE,
                    children: [
                        (0, r.jsx)(j.Z, {
                            profileType: _.y0.FULL_SIZE,
                            children: (0, r.jsx)(g.Z, {
                                user: n,
                                guildId: B,
                                onCloseProfile: M
                            })
                        }),
                        (0, r.jsxs)('header', {
                            children: [
                                (0, r.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: D,
                                    profileType: _.y0.FULL_SIZE
                                }),
                                (0, r.jsxs)('div', {
                                    className: P.headerInner,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: B,
                                            channelId: S,
                                            profileType: _.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: _.y0.FULL_SIZE,
                                            hasEntered: R === o.Dvm.ENTERED,
                                            onCloseProfile: M
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: P.headerButtons,
                                            children: [
                                                (0, r.jsx)(v.c, {
                                                    userId: n.id,
                                                    onClose: M,
                                                    className: P.messageTextButton
                                                }),
                                                (0, r.jsx)(v.v, {
                                                    userId: n.id,
                                                    onClose: M,
                                                    tooltipContainerClassName: P.messageIconButton
                                                }),
                                                (0, r.jsx)(m.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, r.jsx)(I.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: P.body,
                            children: [
                                (0, r.jsx)(y.Z, {
                                    user: n,
                                    profileType: _.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(B, S, n),
                                    pronouns: null == D ? void 0 : D.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, r.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, r.jsx)(u.Z, {
                                        displayProfile: D,
                                        profileType: _.y0.FULL_SIZE,
                                        onClose: M
                                    })
                                }),
                                (0, r.jsx)(b.Z.Overlay, {
                                    className: P.overlay,
                                    children: (0, r.jsx)(x.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: D,
                                        guildId: B,
                                        items: k,
                                        initialSection: null != w ? w : _.oh.BOT_INFO,
                                        initialSubsection: L,
                                        onClose: M
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
