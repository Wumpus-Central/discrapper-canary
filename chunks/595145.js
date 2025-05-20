t.d(n, { Z: () => K }), t(388685);
var o = t(255367),
    r = t(73800),
    c = t(950035),
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
    g = t(430824),
    h = t(699516),
    x = t(246946),
    j = t(5192),
    I = t(785717),
    O = t(221292),
    v = t(687158),
    C = t(250822),
    P = t(771362),
    A = t(510659),
    T = t(113557),
    N = t(648052),
    Z = t(867176),
    w = t(280885),
    S = t(819602),
    E = t(681837),
    B = t(451834),
    U = t(900927),
    k = t(502762),
    L = t(530),
    M = t(4517),
    D = t(179828),
    G = t(993160),
    R = t(693408),
    V = t(661462),
    F = t(768111),
    H = t(228168),
    Y = t(388032),
    W = t(517603);
function K(e) {
    let { user: n, currentUser: t, guildId: K, channelId: X, messageId: q, roleId: z, sessionId: J, initialSection: Q, initialSubsection: $, transitionState: ee, customStatusPrompt: en, openedAt: et, onClose: eo, sourceAnalyticsLocations: er = [] } = e,
        { analyticsLocations: ec } = (0, f.ZP)([...er, u.Z.USER_PROFILE_MODAL_V2]),
        ei = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
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
        eu = (0, i.e7)([g.Z], () => (null != K ? g.Z.getGuild(K) : null)),
        ef = r.useMemo(() => (null != K ? { [K]: [n.id] } : {}), [K, n.id]);
    (0, d.$)(ef);
    let ep = (0, v.ZP)(n.id, K),
        em = (0, i.e7)([h.Z], () => h.Z.getRelationshipType(n.id)),
        eb = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        e_ =
            null == ep
                ? void 0
                : ep.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        ey = (0, p.p)({ location: 'UserProfileModalV2' }),
        eg = r.useMemo(() => (null != en ? en : (0, m.Z)()), [en]),
        eh = (0, F.Z)({
            user: n,
            currentUser: t
        }),
        ex = (0, i.e7)([y.default], () => y.default.locale),
        ej = (0, P.Z)(n.id),
        eI = (0, C.Z)(n.id);
    return (0, o.jsx)(f.Gt, {
        value: ec,
        children: (0, o.jsx)(I.Mt, {
            value: ei,
            openedAt: et,
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
                    children: (0, o.jsxs)(k.Z, {
                        ref: ea,
                        user: n,
                        displayProfile: ep,
                        themeType: H.lY.MODAL_V2,
                        children: [
                            null != e_ &&
                                (0, o.jsx)('div', {
                                    className: W.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(e_, ')') }
                                }),
                            null != es.interactionType &&
                                (0, o.jsx)(c.animated.div, {
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
                                                user: n,
                                                displayProfile: ep,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(B.Z, {
                                                userId: n.id,
                                                onClose: eo,
                                                className: W.toast
                                            }),
                                            (0, o.jsx)(T.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: ep,
                                                guildId: K,
                                                channelId: X,
                                                themeType: H.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: K,
                                                channelId: X,
                                                themeType: H.lY.MODAL_V2,
                                                hasEntered: ee === a.Dvm.ENTERED,
                                                prompt: ey && n.id === t.id ? eg : null,
                                                onCloseProfile: eo
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: W.profileBody,
                                        children: [
                                            (0, o.jsx)(L.Z, {
                                                user: n,
                                                onClose: eo,
                                                className: W.profileUsername,
                                                nickname: j.ZP.useName(null == eu ? void 0 : eu.id, X, n),
                                                nicknameIcons: (0, o.jsx)(E.Z, { userId: n.id }),
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
                                                children: (0, o.jsx)(G.Z, {
                                                    user: n,
                                                    currentUser: t,
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
                                                    n.isProvisional &&
                                                        (0, o.jsx)(_.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(R.Z, {
                                                        heading: Y.intl.string(Y.t.a6XYDw),
                                                        children: (0, o.jsx)(U.Z, {
                                                            userId: n.id,
                                                            guildId: null == ep ? void 0 : ep.guildId,
                                                            tooltipDelay: H.vB
                                                        })
                                                    }),
                                                    null != eu &&
                                                        (0, o.jsx)(D.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guild: eu,
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === H.Tb.ROLES
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(R.Z, {
                                                            heading: Y.intl.string(Y.t['3fe7U1']),
                                                            scrollIntoView: $ === H.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: ej,
                                                                className: W.profileConnections,
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
                                                    (0, o.jsx)(R.Z, {
                                                        heading: Y.intl.string(Y.t['mQKv+v']),
                                                        scrollIntoView: $ === H.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: n.id,
                                                            className: W.profileNote,
                                                            autoFocus: $ === H.Tb.NOTE,
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
                                                                    })({ action: 'SET_NOTE' }, ei)
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
                                user: n,
                                currentUser: t,
                                displayProfile: ep,
                                guildId: K,
                                channelId: X,
                                items: eh,
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
