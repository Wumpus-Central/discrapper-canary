n.d(t, { Z: () => X }), n(388685);
var o = n(200651),
    r = n(192379),
    i = n(272573),
    c = n(442837),
    a = n(481060),
    l = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(368326),
    m = n(429467),
    b = n(680295),
    h = n(189156),
    _ = n(706454),
    y = n(430824),
    g = n(699516),
    j = n(246946),
    x = n(5192),
    v = n(785717),
    I = n(221292),
    O = n(687158),
    A = n(250822),
    N = n(771362),
    P = n(510659),
    T = n(113557),
    C = n(648052),
    S = n(867176),
    Z = n(819602),
    w = n(681837),
    M = n(451834),
    U = n(900927),
    E = n(678738),
    V = n(502762),
    D = n(530),
    B = n(705556),
    k = n(4517),
    L = n(412317),
    R = n(179828),
    F = n(420654),
    G = n(661462),
    H = n(228168),
    Y = n(388032),
    W = n(517603);
function X(e) {
    let { user: t, currentUser: n, guildId: X, channelId: K, messageId: q, roleId: z, sessionId: J, friendToken: Q, initialSection: $, initialSubsection: ee, transitionState: et, customStatusPrompt: en, openedAt: eo, onClose: er, sourceAnalyticsLocations: ei = [] } = e,
        { analyticsLocations: ec } = (0, f.ZP)([...ei, u.Z.USER_PROFILE_MODAL_V2]),
        ea = (0, v.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            sourceSessionId: J,
            showGuildProfile: !0,
            guildId: X,
            channelId: K,
            messageId: q,
            roleId: z
        }),
        el = r.createRef(),
        es = (0, s.Z)(el),
        ed = (0, P.$m)(),
        eu = (0, a.q_F)({
            opacity: +(null != ed.interactionType),
            config: { duration: 150 }
        }),
        ef = (0, c.e7)([y.Z], () => (null != X ? y.Z.getGuild(X) : null)),
        ep = r.useMemo(() => (null != X ? { [X]: [t.id] } : {}), [X, t.id]);
    (0, d.$)(ep);
    let em = (0, O.ZP)(t.id, X),
        eb = (0, c.e7)([g.Z], () => g.Z.getRelationshipType(t.id)),
        eh = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        e_ = (0, p.p)({ location: 'UserProfileModalV2' }),
        ey = r.useMemo(() => (null != en ? en : (0, m.Z)()), [en]),
        eg = (0, c.e7)([_.default], () => _.default.locale),
        ej = (0, N.Z)(t.id),
        ex = (0, A.Z)(t.id);
    return (0, o.jsx)(f.Gt, {
        value: ec,
        children: (0, o.jsx)(v.Mt, {
            value: ea,
            openedAt: eo,
            fetchStartedAt: null == em ? void 0 : em.fetchStartedAt,
            fetchEndedAt: null == em ? void 0 : em.fetchEndedAt,
            isLoaded: null == em ? void 0 : em.isLoaded,
            children: (0, o.jsx)(P.NJ, {
                value: ed,
                children: (0, o.jsx)(a.Y0X, {
                    hideShadow: !0,
                    className: W.root,
                    transitionState: et,
                    'aria-label': Y.intl.string(Y.t['3N/J2t']),
                    children: (0, o.jsxs)(V.Z, {
                        ref: el,
                        user: t,
                        displayProfile: em,
                        themeType: H.lY.MODAL_V2,
                        children: [
                            (0, o.jsxs)('div', {
                                className: W.profile,
                                children: [
                                    null != ed.interactionType &&
                                        (0, o.jsx)(i.animated.div, {
                                            style: eu,
                                            className: W.backdrop
                                        }),
                                    (0, o.jsxs)('header', {
                                        className: W.profileHeader,
                                        children: [
                                            (0, o.jsx)(S.Z, {
                                                user: t,
                                                displayProfile: em,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                userId: t.id,
                                                onClose: er,
                                                className: W.toast
                                            }),
                                            (0, o.jsx)(T.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                displayProfile: em,
                                                guildId: X,
                                                channelId: K,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(k.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                guildId: X,
                                                channelId: K,
                                                themeType: H.lY.MODAL_V2,
                                                hasEntered: et === a.Dvm.ENTERED,
                                                prompt: e_ && t.id === n.id ? ey : null,
                                                onCloseProfile: er
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: W.profileBody,
                                        children: [
                                            (0, o.jsx)(D.Z, {
                                                user: t,
                                                onClose: er,
                                                className: W.profileUsername,
                                                nickname: x.ZP.useName(null == ef ? void 0 : ef.id, K, t),
                                                nicknameIcons: (0, o.jsx)(w.Z, { userId: t.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == em ? void 0 : em.pronouns,
                                                tagClassName: W.profileUsernameTag,
                                                tags: (0, o.jsx)(C.Z, {
                                                    displayProfile: em,
                                                    themeType: H.lY.MODAL_V2,
                                                    onClose: er
                                                })
                                            }),
                                            (0, o.jsxs)('div', {
                                                className: W.profileButtons,
                                                children: [
                                                    (0, o.jsx)(L.Z, {
                                                        isCurrentUser: t.id === n.id,
                                                        user: t,
                                                        relationshipType: eb,
                                                        friendToken: Q,
                                                        onClose: er,
                                                        autoFocus: null == ee
                                                    }),
                                                    (0, o.jsx)(B.Z, {
                                                        user: t,
                                                        guildId: X,
                                                        onClose: er
                                                    })
                                                ]
                                            }),
                                            (0, o.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: W.profileScroller,
                                                children: [
                                                    (0, o.jsx)(F.Z, {
                                                        user: t,
                                                        bio: null == em ? void 0 : em.bio,
                                                        hidePersonalInformation: eh,
                                                        onClose: er
                                                    }),
                                                    t.isProvisional &&
                                                        (0, o.jsx)(h.WR, {
                                                            userId: t.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(E.Z, {
                                                        heading: Y.intl.string(Y.t.a6XYDw),
                                                        headingClassName: W.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        children: (0, o.jsx)(U.Z, {
                                                            userId: t.id,
                                                            guildId: null == em ? void 0 : em.guildId,
                                                            tooltipDelay: H.vB
                                                        })
                                                    }),
                                                    null != ef &&
                                                        (0, o.jsx)(R.Z, {
                                                            user: t,
                                                            currentUser: n,
                                                            guild: ef,
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === H.Tb.ROLES
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(E.Z, {
                                                            heading: Y.intl.string(Y.t['3fe7U1']),
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === H.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(Z.ZP, {
                                                                connectedAccounts: ej,
                                                                className: W.profileConnections,
                                                                userId: t.id,
                                                                locale: eg
                                                            })
                                                        }),
                                                    ex.length > 0 &&
                                                        (0, o.jsx)(E.Z, {
                                                            heading: Y.intl.string(Y.t.PHjkRE),
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            children: ex.map((e) =>
                                                                (0, o.jsx)(
                                                                    Z.tH,
                                                                    {
                                                                        className: W.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: X,
                                                                        locale: eg,
                                                                        onApplicationClicked: () => {
                                                                            (0, I.pQ)({ action: 'PRESS_APP_CONNECTION' }), er();
                                                                        }
                                                                    },
                                                                    e.application.id
                                                                )
                                                            )
                                                        }),
                                                    (0, o.jsx)(E.Z, {
                                                        heading: Y.intl.string(Y.t['mQKv+v']),
                                                        headingClassName: W.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        scrollIntoView: ee === H.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: t.id,
                                                            className: W.profileNote,
                                                            autoFocus: ee === H.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, I.pQ)(
                                                                    (function (e) {
                                                                        for (var t = 1; t < arguments.length; t++) {
                                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                                o = Object.keys(n);
                                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                                (o = o.concat(
                                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                    })
                                                                                )),
                                                                                o.forEach(function (t) {
                                                                                    var o;
                                                                                    (o = n[t]),
                                                                                        t in e
                                                                                            ? Object.defineProperty(e, t, {
                                                                                                  value: o,
                                                                                                  enumerable: !0,
                                                                                                  configurable: !0,
                                                                                                  writable: !0
                                                                                              })
                                                                                            : (e[t] = o);
                                                                                });
                                                                        }
                                                                        return e;
                                                                    })({ action: 'SET_NOTE' }, ea)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == em ? void 0 : em.profileEffectId) != null &&
                                        (0, o.jsx)(b.Z, {
                                            profileEffectId: null == em ? void 0 : em.profileEffectId,
                                            isHovering: es
                                        })
                                ]
                            }),
                            (0, o.jsx)(G.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: em,
                                guildId: X,
                                initialSection: $,
                                initialSubsection: ee,
                                onClose: er
                            })
                        ]
                    })
                })
            })
        })
    });
}
