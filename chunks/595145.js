t.d(n, { Z: () => X }), t(388685);
var o = t(200651),
    i = t(192379),
    c = t(272573),
    r = t(442837),
    a = t(481060),
    l = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    p = t(368326),
    m = t(429467),
    h = t(680295),
    _ = t(189156),
    b = t(706454),
    g = t(430824),
    y = t(699516),
    x = t(246946),
    j = t(5192),
    I = t(785717),
    v = t(221292),
    A = t(687158),
    N = t(250822),
    T = t(771362),
    O = t(510659),
    C = t(113557),
    Z = t(648052),
    P = t(867176),
    S = t(819602),
    w = t(681837),
    M = t(451834),
    U = t(900927),
    E = t(678738),
    V = t(502762),
    D = t(530),
    L = t(705556),
    k = t(4517),
    B = t(412317),
    R = t(179828),
    F = t(420654),
    G = t(661462),
    H = t(228168),
    Y = t(388032),
    W = t(517603);
function X(e) {
    let { user: n, currentUser: t, guildId: X, channelId: K, messageId: q, roleId: z, sessionId: J, friendToken: Q, initialSection: $, initialSubsection: ee, transitionState: en, customStatusPrompt: et, openedAt: eo, onClose: ei, sourceAnalyticsLocations: ec = [] } = e,
        { analyticsLocations: er } = (0, f.ZP)([...ec, u.Z.USER_PROFILE_MODAL_V2]),
        ea = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: J,
            showGuildProfile: !0,
            guildId: X,
            channelId: K,
            messageId: q,
            roleId: z
        }),
        el = i.createRef(),
        es = (0, s.Z)(el),
        ed = (0, O.$m)(),
        eu = (0, a.q_F)({
            opacity: +(null != ed.interactionType),
            config: { duration: 150 }
        }),
        ef = (0, r.e7)([g.Z], () => (null != X ? g.Z.getGuild(X) : null)),
        ep = i.useMemo(() => (null != X ? { [X]: [n.id] } : {}), [X, n.id]);
    (0, d.$)(ep);
    let em = (0, A.ZP)(n.id, X),
        eh = (0, r.e7)([y.Z], () => y.Z.getRelationshipType(n.id)),
        e_ = (0, r.e7)([x.Z], () => x.Z.hidePersonalInformation),
        eb = (0, p.p)({ location: 'UserProfileModalV2' }),
        eg = i.useMemo(() => (null != et ? et : (0, m.Z)()), [et]),
        ey = (0, r.e7)([b.default], () => b.default.locale),
        ex = (0, T.Z)(n.id),
        ej = (0, N.Z)(n.id);
    return (0, o.jsx)(f.Gt, {
        value: er,
        children: (0, o.jsx)(I.Mt, {
            value: ea,
            openedAt: eo,
            fetchStartedAt: null == em ? void 0 : em.fetchStartedAt,
            fetchEndedAt: null == em ? void 0 : em.fetchEndedAt,
            isLoaded: null == em ? void 0 : em.isLoaded,
            children: (0, o.jsx)(O.NJ, {
                value: ed,
                children: (0, o.jsx)(a.Y0X, {
                    hideShadow: !0,
                    className: W.root,
                    transitionState: en,
                    'aria-label': Y.intl.string(Y.t['3N/J2t']),
                    children: (0, o.jsxs)(V.Z, {
                        ref: el,
                        user: n,
                        displayProfile: em,
                        themeType: H.lY.MODAL_V2,
                        children: [
                            (0, o.jsxs)('div', {
                                className: W.profile,
                                children: [
                                    null != ed.interactionType &&
                                        (0, o.jsx)(c.animated.div, {
                                            style: eu,
                                            className: W.backdrop
                                        }),
                                    (0, o.jsxs)('header', {
                                        className: W.profileHeader,
                                        children: [
                                            (0, o.jsx)(P.Z, {
                                                user: n,
                                                displayProfile: em,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                userId: n.id,
                                                onClose: ei,
                                                className: W.toast
                                            }),
                                            (0, o.jsx)(C.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: em,
                                                guildId: X,
                                                channelId: K,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(k.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: X,
                                                channelId: K,
                                                themeType: H.lY.MODAL_V2,
                                                hasEntered: en === a.Dvm.ENTERED,
                                                prompt: eb && n.id === t.id ? eg : null,
                                                onCloseProfile: ei
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: W.profileBody,
                                        children: [
                                            (0, o.jsx)(D.Z, {
                                                user: n,
                                                onClose: ei,
                                                className: W.profileUsername,
                                                nickname: j.ZP.useName(null == ef ? void 0 : ef.id, K, n),
                                                nicknameIcons: (0, o.jsx)(w.Z, { userId: n.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == em ? void 0 : em.pronouns,
                                                tagClassName: W.profileUsernameTag,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: em,
                                                    themeType: H.lY.MODAL_V2,
                                                    onClose: ei
                                                })
                                            }),
                                            (0, o.jsxs)('div', {
                                                className: W.profileButtons,
                                                children: [
                                                    (0, o.jsx)(B.Z, {
                                                        isCurrentUser: n.id === t.id,
                                                        user: n,
                                                        relationshipType: eh,
                                                        friendToken: Q,
                                                        onClose: ei,
                                                        autoFocus: null == ee
                                                    }),
                                                    (0, o.jsx)(L.Z, {
                                                        user: n,
                                                        guildId: X,
                                                        onClose: ei
                                                    })
                                                ]
                                            }),
                                            (0, o.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: W.profileScroller,
                                                children: [
                                                    (0, o.jsx)(F.Z, {
                                                        user: n,
                                                        bio: null == em ? void 0 : em.bio,
                                                        hidePersonalInformation: e_,
                                                        onClose: ei
                                                    }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(_.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(E.Z, {
                                                        heading: Y.intl.string(Y.t.a6XYDw),
                                                        headingClassName: W.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        children: (0, o.jsx)(U.Z, {
                                                            userId: n.id,
                                                            guildId: null == em ? void 0 : em.guildId,
                                                            tooltipDelay: H.vB
                                                        })
                                                    }),
                                                    null != ef &&
                                                        (0, o.jsx)(R.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guild: ef,
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === H.Tb.ROLES
                                                        }),
                                                    ex.length > 0 &&
                                                        (0, o.jsx)(E.Z, {
                                                            heading: Y.intl.string(Y.t['3fe7U1']),
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === H.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: ex,
                                                                className: W.profileConnections,
                                                                userId: n.id,
                                                                locale: ey
                                                            })
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(E.Z, {
                                                            heading: Y.intl.string(Y.t.PHjkRE),
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            children: ej.map((e) =>
                                                                (0, o.jsx)(
                                                                    S.tH,
                                                                    {
                                                                        className: W.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: X,
                                                                        locale: ey,
                                                                        onApplicationClicked: () => {
                                                                            (0, v.pQ)({ action: 'PRESS_APP_CONNECTION' }), ei();
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
                                                            userId: n.id,
                                                            className: W.profileNote,
                                                            autoFocus: ee === H.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, v.pQ)(
                                                                    (function (e) {
                                                                        for (var n = 1; n < arguments.length; n++) {
                                                                            var t = null != arguments[n] ? arguments[n] : {},
                                                                                o = Object.keys(t);
                                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                                (o = o.concat(
                                                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                                    })
                                                                                )),
                                                                                o.forEach(function (n) {
                                                                                    var o;
                                                                                    (o = t[n]),
                                                                                        n in e
                                                                                            ? Object.defineProperty(e, n, {
                                                                                                  value: o,
                                                                                                  enumerable: !0,
                                                                                                  configurable: !0,
                                                                                                  writable: !0
                                                                                              })
                                                                                            : (e[n] = o);
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
                                        (0, o.jsx)(h.Z, {
                                            profileEffectId: null == em ? void 0 : em.profileEffectId,
                                            isHovering: es
                                        })
                                ]
                            }),
                            (0, o.jsx)(G.Z, {
                                user: n,
                                currentUser: t,
                                displayProfile: em,
                                guildId: X,
                                initialSection: $,
                                initialSubsection: ee,
                                onClose: ei
                            })
                        ]
                    })
                })
            })
        })
    });
}
