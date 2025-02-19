t.d(n, { Z: () => E }), t(47120);
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
    m = t(502762),
    I = t(530),
    b = t(871604),
    g = t(952124),
    v = t(53558),
    y = t(544989),
    j = t(934861),
    h = t(4517),
    x = t(740628),
    O = t(398145),
    _ = t(228168),
    Z = t(981631),
    N = t(388032),
    P = t(608685);
function E(e) {
    let { user: n, currentUser: t, guildId: E, channelId: S, messageId: T, roleId: C, sessionId: L, initialSection: w, initialSubsection: A, transitionState: M, onClose: R, sourceAnalyticsLocations: U = [] } = e,
        D = E === Z.ME ? void 0 : E,
        B = (0, a.ZP)(n.id, D),
        { analyticsLocations: W } = (0, l.ZP)([...U, i.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: D,
            channelId: S,
            messageId: T,
            roleId: C
        }),
        G = (0, O.Z)(n);
    return (0, r.jsx)(l.Gt, {
        value: W,
        children: (0, r.jsx)(c.Mt, {
            value: F,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: M,
                className: P.root,
                hideShadow: !0,
                'aria-label': N.NW.string(N.t['3N/J2t']),
                children: (0, r.jsxs)(m.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: _.y0.FULL_SIZE,
                    children: [
                        (0, r.jsx)(y.Z, {
                            profileType: _.y0.FULL_SIZE,
                            children: (0, r.jsx)(g.Z, {
                                user: n,
                                guildId: D,
                                onCloseProfile: R
                            })
                        }),
                        (0, r.jsxs)('header', {
                            children: [
                                (0, r.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: B,
                                    profileType: _.y0.FULL_SIZE
                                }),
                                (0, r.jsxs)('div', {
                                    className: P.headerInner,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: D,
                                            channelId: S,
                                            profileType: _.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: _.y0.FULL_SIZE,
                                            hasEntered: M === o.Dvm.ENTERED,
                                            onCloseProfile: R
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: P.headerButtons,
                                            children: [
                                                (0, r.jsx)(j.c, {
                                                    userId: n.id,
                                                    onClose: R,
                                                    className: P.messageTextButton
                                                }),
                                                (0, r.jsx)(j.v, {
                                                    userId: n.id,
                                                    onClose: R,
                                                    tooltipContainerClassName: P.messageIconButton
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: D
                                                }),
                                                (0, r.jsx)(b.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: P.body,
                            children: [
                                (0, r.jsx)(I.Z, {
                                    user: n,
                                    profileType: _.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(D, S, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, r.jsx)(p.Z, { userId: n.id }),
                                    tags: (0, r.jsx)(u.Z, {
                                        displayProfile: B,
                                        profileType: _.y0.FULL_SIZE,
                                        onClose: R
                                    })
                                }),
                                (0, r.jsx)(m.Z.Overlay, {
                                    className: P.overlay,
                                    children: (0, r.jsx)(x.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: B,
                                        guildId: D,
                                        items: G,
                                        initialSection: null != w ? w : _.oh.BOT_INFO,
                                        initialSubsection: A,
                                        onClose: R
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
