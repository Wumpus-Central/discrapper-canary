t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(100527),
    r = t(906732),
    s = t(5192),
    c = t(785717),
    a = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    m = t(681837),
    p = t(502762),
    I = t(530),
    x = t(871604),
    h = t(952124),
    v = t(53558),
    g = t(544989),
    Z = t(934861),
    j = t(4517),
    _ = t(740628),
    b = t(398145),
    E = t(228168),
    N = t(981631),
    y = t(388032),
    S = t(171865);
function T(e) {
    let { user: n, currentUser: t, guildId: T, channelId: P, messageId: C, roleId: A, sessionId: L, initialSection: M, initialSubsection: R, transitionState: O, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        F = T === N.ME ? void 0 : T,
        D = (0, a.ZP)(n.id, F),
        { analyticsLocations: G } = (0, r.ZP)([...B, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: F,
            channelId: P,
            messageId: C,
            roleId: A
        }),
        k = (0, b.Z)(n);
    return (0, i.jsx)(r.Gt, {
        value: G,
        children: (0, i.jsx)(c.Mt, {
            value: w,
            children: (0, i.jsx)(l.ModalRoot, {
                transitionState: O,
                className: S.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: (0, i.jsxs)(p.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: E.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(g.Z, {
                            profileType: E.y0.FULL_SIZE,
                            children: (0, i.jsx)(h.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: D,
                                    profileType: E.y0.FULL_SIZE
                                }),
                                (0, i.jsxs)('div', {
                                    className: S.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: F,
                                            channelId: P,
                                            profileType: E.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(j.Z, {
                                            location: 'BotUserProfileModal',
                                            user: n,
                                            profileType: E.y0.FULL_SIZE,
                                            hasEntered: O === l.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: S.headerButtons,
                                            children: [
                                                (0, i.jsx)(Z.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: S.messageTextButton
                                                }),
                                                (0, i.jsx)(Z.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: S.messageIconButton
                                                }),
                                                (0, i.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, i.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: S.body,
                            children: [
                                (0, i.jsx)(I.Z, {
                                    user: n,
                                    profileType: E.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(F, P, n),
                                    pronouns: null == D ? void 0 : D.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(m.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: D,
                                        profileType: E.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(p.Z.Overlay, {
                                    className: S.overlay,
                                    children: (0, i.jsx)(_.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: D,
                                        items: k,
                                        initialSection: null != M ? M : E.oh.BOT_INFO,
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
