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
    x = t(502762),
    I = t(530),
    p = t(871604),
    h = t(952124),
    v = t(53558),
    Z = t(544989),
    g = t(934861),
    j = t(495804),
    _ = t(740628),
    b = t(398145),
    E = t(228168),
    N = t(981631),
    S = t(388032),
    y = t(171865);
function T(e) {
    let { user: n, currentUser: t, guildId: T, channelId: P, messageId: C, roleId: A, sessionId: L, initialSection: M, initialSubsection: R, transitionState: O, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        D = T === N.ME ? void 0 : T,
        F = (0, a.ZP)(n.id, D),
        { analyticsLocations: G } = (0, r.ZP)([...B, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: D,
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
                className: y.root,
                hideShadow: !0,
                'aria-label': S.intl.string(S.t['3N/J2t']),
                children: (0, i.jsxs)(x.Z, {
                    user: n,
                    displayProfile: F,
                    profileType: E.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            profileType: E.y0.FULL_SIZE,
                            children: (0, i.jsx)(h.Z, {
                                user: n,
                                guildId: D
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: F,
                                    profileType: E.y0.FULL_SIZE
                                }),
                                (0, i.jsxs)('div', {
                                    className: y.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: F,
                                            guildId: D,
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
                                            className: y.headerButtons,
                                            children: [
                                                (0, i.jsx)(g.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: y.messageTextButton
                                                }),
                                                (0, i.jsx)(g.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: y.messageIconButton
                                                }),
                                                (0, i.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: D
                                                }),
                                                (0, i.jsx)(p.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: y.body,
                            children: [
                                (0, i.jsx)(I.Z, {
                                    user: n,
                                    profileType: E.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(D, P, n),
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(m.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: F,
                                        profileType: E.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(x.Z.Overlay, {
                                    className: y.overlay,
                                    children: (0, i.jsx)(_.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: F,
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
