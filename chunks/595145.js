n.d(t, { Z: () => K }), n(388685);
var o = n(255367),
    r = n(73800),
    i = n(230986),
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
    _ = n(189156),
    g = n(706454),
    h = n(430824),
    y = n(699516),
    x = n(246946),
    j = n(5192),
    I = n(785717),
    O = n(221292),
    v = n(687158),
    C = n(250822),
    P = n(771362),
    A = n(510659),
    T = n(113557),
    N = n(648052),
    Z = n(867176),
    w = n(280885),
    S = n(819602),
    E = n(681837),
    B = n(451834),
    k = n(900927),
    L = n(502762),
    U = n(530),
    D = n(4517),
    M = n(179828),
    R = n(993160),
    G = n(693408),
    V = n(661462),
    F = n(768111),
    H = n(228168),
    Y = n(388032),
    W = n(517603);
function K(e) {
    let { user: t, currentUser: n, guildId: K, channelId: X, messageId: q, roleId: z, sessionId: J, initialSection: Q, initialSubsection: $, transitionState: ee, customStatusPrompt: et, openedAt: en, onClose: eo, sourceAnalyticsLocations: er = [] } = e,
        { analyticsLocations: ei } = (0, f.ZP)([...er, u.Z.USER_PROFILE_MODAL_V2]),
        ec = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            sourceSessionId: J,
            showGuildProfile: !0,
            guildId: K,
            channelId: X,
            messageId: q,
            roleId: z
        }),
        ea = r.useRef(null),
        el = (0, s.Z)(ea),
        es = (0, A.$m)(),
        ed = (0, a.q_F)({
            opacity: +(null != es.interactionType),
            config: { duration: 150 }
        }),
        eu = (0, c.e7)([h.Z], () => (null != K ? h.Z.getGuild(K) : null)),
        ef = r.useMemo(() => (null != K ? { [K]: [t.id] } : {}), [K, t.id]);
    (0, d.$)(ef);
    let ep = (0, v.ZP)(t.id, K),
        em = (0, c.e7)([y.Z], () => y.Z.getRelationshipType(t.id)),
        eb = (0, c.e7)([x.Z], () => x.Z.hidePersonalInformation),
        e_ =
            null == ep
                ? void 0
                : ep.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eg = (0, p.p)({ location: 'UserProfileModalV2' }),
        eh = r.useMemo(() => (null != et ? et : (0, m.Z)()), [et]),
        ey = (0, F.Z)({
            user: t,
            currentUser: n
        }),
        ex = (0, c.e7)([g.default], () => g.default.locale),
        ej = (0, P.Z)(t.id),
        eI = (0, C.Z)(t.id);
    return (0, o.jsx)(f.Gt, {
        value: ei,
        children: (0, o.jsx)(I.Mt, {
            value: ec,
            openedAt: en,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, o.jsx)(A.NJ, {
                value: es,
                children: (0, o.jsx)(a.Y0X, {
                    hideShadow: !0,
                    className: W.root,
                    transitionState: ee,
                    'aria-label': Y.intl.string(Y.t['3N/J2t']),
                    children: (0, o.jsxs)(L.Z, {
                        ref: ea,
                        user: t,
                        displayProfile: ep,
                        themeType: H.lY.MODAL_V2,
                        children: [
                            null != e_ &&
                                (0, o.jsx)('div', {
                                    className: W.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(e_, ')') }
                                }),
                            null != es.interactionType &&
                                (0, o.jsx)(i.animated.div, {
                                    style: ed,
                                    className: W.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: W.profile,
                                children: [
                                    (0, o.jsxs)('header', {
                                        className: W.profileHeader,
                                        children: [
                                            (0, o.jsx)(Z.Z, {
                                                user: t,
                                                displayProfile: ep,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(B.Z, {
                                                userId: t.id,
                                                onClose: eo,
                                                className: W.toast
                                            }),
                                            (0, o.jsx)(T.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                displayProfile: ep,
                                                guildId: K,
                                                channelId: X,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(D.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                guildId: K,
                                                channelId: X,
                                                themeType: H.lY.MODAL_V2,
                                                hasEntered: ee === a.Dvm.ENTERED,
                                                prompt: eg && t.id === n.id ? eh : null,
                                                onCloseProfile: eo
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: W.profileBody,
                                        children: [
                                            (0, o.jsx)(U.Z, {
                                                user: t,
                                                onClose: eo,
                                                className: W.profileUsername,
                                                nickname: j.ZP.useName(null == eu ? void 0 : eu.id, X, t),
                                                nicknameIcons: (0, o.jsx)(E.Z, { userId: t.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == ep ? void 0 : ep.pronouns,
                                                tagClassName: W.profileUsernameTag,
                                                tags: (0, o.jsx)(N.Z, {
                                                    displayProfile: ep,
                                                    themeType: H.lY.MODAL_V2,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsx)('div', {
                                                className: W.profileButtons,
                                                children: (0, o.jsx)(R.Z, {
                                                    user: t,
                                                    currentUser: n,
                                                    guildId: K,
                                                    relationshipType: em,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: W.profileScroller,
                                                children: [
                                                    (null == ep ? void 0 : ep.bio) != null &&
                                                        (null == ep ? void 0 : ep.bio) !== '' &&
                                                        !eb &&
                                                        (0, o.jsx)(w.Z, {
                                                            userBio: ep.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    t.isProvisional &&
                                                        (0, o.jsx)(_.WR, {
                                                            userId: t.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(G.Z, {
                                                        heading: Y.intl.string(Y.t.a6XYDw),
                                                        children: (0, o.jsx)(k.Z, {
                                                            userId: t.id,
                                                            guildId: null == ep ? void 0 : ep.guildId,
                                                            tooltipDelay: H.vB
                                                        })
                                                    }),
                                                    null != eu &&
                                                        (0, o.jsx)(M.Z, {
                                                            user: t,
                                                            currentUser: n,
                                                            guild: eu,
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === H.Tb.ROLES
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(G.Z, {
                                                            heading: Y.intl.string(Y.t['3fe7U1']),
                                                            scrollIntoView: $ === H.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: ej,
                                                                className: W.profileConnections,
                                                                userId: t.id,
                                                                locale: ex
                                                            })
                                                        }),
                                                    eI.length > 0 &&
                                                        (0, o.jsx)(G.Z, {
                                                            heading: Y.intl.string(Y.t.PHjkRE),
                                                            children: eI.map((e) =>
                                                                (0, o.jsx)(
                                                                    S.tH,
                                                                    {
                                                                        className: W.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: K,
                                                                        locale: ex,
                                                                        onApplicationClicked: () => {
                                                                            (0, O.pQ)({ action: 'PRESS_APP_CONNECTION' }), eo();
                                                                        }
                                                                    },
                                                                    e.application.id
                                                                )
                                                            )
                                                        }),
                                                    (0, o.jsx)(G.Z, {
                                                        heading: Y.intl.string(Y.t['mQKv+v']),
                                                        scrollIntoView: $ === H.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: t.id,
                                                            className: W.profileNote,
                                                            autoFocus: $ === H.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, O.pQ)(
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
                                                                    })({ action: 'SET_NOTE' }, ec)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == ep ? void 0 : ep.profileEffectId) != null &&
                                        (0, o.jsx)(b.Z, {
                                            profileEffectId: null == ep ? void 0 : ep.profileEffectId,
                                            isHovering: el
                                        })
                                ]
                            }),
                            (0, o.jsx)(V.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: ep,
                                guildId: K,
                                channelId: X,
                                items: ey,
                                initialSection: Q,
                                initialSubsection: $,
                                onClose: eo
                            })
                        ]
                    })
                })
            })
        })
    });
}
