t.d(n, { Z: () => K }), t(388685);
var o = t(200651),
    r = t(192379),
    c = t(272573),
    i = t(442837),
    a = t(481060),
    l = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    p = t(368326),
    m = t(429467),
    b = t(680295),
    _ = t(189156),
    y = t(706454),
    h = t(430824),
    j = t(699516),
    x = t(246946),
    g = t(5192),
    I = t(785717),
    O = t(221292),
    v = t(687158),
    Z = t(250822),
    P = t(771362),
    C = t(510659),
    N = t(113557),
    w = t(648052),
    A = t(867176),
    T = t(280885),
    S = t(819602),
    E = t(681837),
    U = t(451834),
    k = t(900927),
    B = t(502762),
    D = t(530),
    M = t(4517),
    V = t(179828),
    L = t(993160),
    R = t(693408),
    F = t(661462),
    G = t(768111),
    H = t(228168),
    Y = t(388032),
    z = t(517603);
function K(e) {
    let { user: n, currentUser: t, guildId: K, channelId: W, messageId: X, roleId: q, sessionId: J, friendToken: Q, initialSection: $, initialSubsection: ee, transitionState: en, customStatusPrompt: et, openedAt: eo, onClose: er, sourceAnalyticsLocations: ec = [] } = e,
        { analyticsLocations: ei } = (0, f.ZP)([...ec, u.Z.USER_PROFILE_MODAL_V2]),
        ea = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: J,
            showGuildProfile: !0,
            guildId: K,
            channelId: W,
            messageId: X,
            roleId: q
        }),
        el = r.createRef(),
        es = (0, s.Z)(el),
        ed = (0, C.$m)(),
        eu = (0, a.q_F)({
            opacity: +(null != ed.interactionType),
            config: { duration: 150 }
        }),
        ef = (0, i.e7)([h.Z], () => (null != K ? h.Z.getGuild(K) : null)),
        ep = r.useMemo(() => (null != K ? { [K]: [n.id] } : {}), [K, n.id]);
    (0, d.$)(ep);
    let em = (0, v.ZP)(n.id, K),
        eb = (0, i.e7)([j.Z], () => j.Z.getRelationshipType(n.id)),
        e_ = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        ey = (0, p.p)({ location: 'UserProfileModalV2' }),
        eh = r.useMemo(() => (null != et ? et : (0, m.Z)()), [et]),
        ej = (0, G.Z)({
            user: n,
            currentUser: t
        }),
        ex = (0, i.e7)([y.default], () => y.default.locale),
        eg = (0, P.Z)(n.id),
        eI = (0, Z.Z)(n.id);
    return (0, o.jsx)(f.Gt, {
        value: ei,
        children: (0, o.jsx)(I.Mt, {
            value: ea,
            openedAt: eo,
            fetchStartedAt: null == em ? void 0 : em.fetchStartedAt,
            fetchEndedAt: null == em ? void 0 : em.fetchEndedAt,
            isLoaded: null == em ? void 0 : em.isLoaded,
            children: (0, o.jsx)(C.NJ, {
                value: ed,
                children: (0, o.jsx)(a.Y0X, {
                    hideShadow: !0,
                    className: z.root,
                    transitionState: en,
                    'aria-label': Y.intl.string(Y.t['3N/J2t']),
                    children: (0, o.jsxs)(B.Z, {
                        ref: el,
                        user: n,
                        displayProfile: em,
                        themeType: H.lY.MODAL_V2,
                        children: [
                            (0, o.jsxs)('div', {
                                className: z.profile,
                                children: [
                                    null != ed.interactionType &&
                                        (0, o.jsx)(c.animated.div, {
                                            style: eu,
                                            className: z.backdrop
                                        }),
                                    (0, o.jsxs)('header', {
                                        className: z.profileHeader,
                                        children: [
                                            (0, o.jsx)(A.Z, {
                                                user: n,
                                                displayProfile: em,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(U.Z, {
                                                userId: n.id,
                                                onClose: er,
                                                className: z.toast
                                            }),
                                            (0, o.jsx)(N.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: em,
                                                guildId: K,
                                                channelId: W,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: K,
                                                channelId: W,
                                                themeType: H.lY.MODAL_V2,
                                                hasEntered: en === a.Dvm.ENTERED,
                                                prompt: ey && n.id === t.id ? eh : null,
                                                onCloseProfile: er
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: z.profileBody,
                                        children: [
                                            (0, o.jsx)(D.Z, {
                                                user: n,
                                                onClose: er,
                                                className: z.profileUsername,
                                                nickname: g.ZP.useName(null == ef ? void 0 : ef.id, W, n),
                                                nicknameIcons: (0, o.jsx)(E.Z, { userId: n.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == em ? void 0 : em.pronouns,
                                                tagClassName: z.profileUsernameTag,
                                                tags: (0, o.jsx)(w.Z, {
                                                    displayProfile: em,
                                                    themeType: H.lY.MODAL_V2,
                                                    onClose: er
                                                })
                                            }),
                                            (0, o.jsx)('div', {
                                                className: z.profileButtons,
                                                children: (0, o.jsx)(L.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    guildId: K,
                                                    relationshipType: eb,
                                                    friendToken: Q,
                                                    onClose: er
                                                })
                                            }),
                                            (0, o.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: z.profileScroller,
                                                children: [
                                                    (null == em ? void 0 : em.bio) != null &&
                                                        (null == em ? void 0 : em.bio) !== '' &&
                                                        !e_ &&
                                                        (0, o.jsx)(T.Z, {
                                                            userBio: em.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(_.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(R.Z, {
                                                        heading: Y.intl.string(Y.t.a6XYDw),
                                                        children: (0, o.jsx)(k.Z, {
                                                            userId: n.id,
                                                            guildId: null == em ? void 0 : em.guildId,
                                                            tooltipDelay: H.vB
                                                        })
                                                    }),
                                                    null != ef &&
                                                        (0, o.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guild: ef,
                                                            headingClassName: z.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === H.Tb.ROLES
                                                        }),
                                                    eg.length > 0 &&
                                                        (0, o.jsx)(R.Z, {
                                                            heading: Y.intl.string(Y.t['3fe7U1']),
                                                            scrollIntoView: ee === H.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: eg,
                                                                className: z.profileConnections,
                                                                userId: n.id,
                                                                locale: ex
                                                            })
                                                        }),
                                                    eI.length > 0 &&
                                                        (0, o.jsx)(R.Z, {
                                                            heading: Y.intl.string(Y.t.PHjkRE),
                                                            children: eI.map((e) =>
                                                                (0, o.jsx)(
                                                                    S.tH,
                                                                    {
                                                                        className: z.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: K,
                                                                        locale: ex,
                                                                        onApplicationClicked: () => {
                                                                            (0, O.pQ)({ action: 'PRESS_APP_CONNECTION' }), er();
                                                                        }
                                                                    },
                                                                    e.application.id
                                                                )
                                                            )
                                                        }),
                                                    (0, o.jsx)(R.Z, {
                                                        heading: Y.intl.string(Y.t['mQKv+v']),
                                                        scrollIntoView: ee === H.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: n.id,
                                                            className: z.profileNote,
                                                            autoFocus: ee === H.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, O.pQ)(
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
                                        (0, o.jsx)(b.Z, {
                                            profileEffectId: null == em ? void 0 : em.profileEffectId,
                                            isHovering: es
                                        })
                                ]
                            }),
                            (0, o.jsx)(F.Z, {
                                user: n,
                                currentUser: t,
                                displayProfile: em,
                                guildId: K,
                                channelId: W,
                                items: ej,
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
