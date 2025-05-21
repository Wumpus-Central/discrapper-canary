n.d(t, { Z: () => q }), n(388685);
var o = n(255367),
    r = n(73800),
    c = n(120356),
    i = n.n(c),
    a = n(366594),
    l = n(442837),
    s = n(481060),
    d = n(666520),
    u = n(727637),
    f = n(616780),
    p = n(100527),
    m = n(906732),
    b = n(368326),
    _ = n(429467),
    y = n(680295),
    h = n(189156),
    x = n(430824),
    g = n(699516),
    j = n(246946),
    O = n(5192),
    I = n(111361),
    v = n(785717),
    P = n(221292),
    A = n(687158),
    T = n(771362),
    N = n(510659),
    C = n(113557),
    Z = n(648052),
    w = n(867176),
    S = n(280885),
    E = n(537006),
    B = n(681837),
    D = n(451834),
    U = n(900927),
    k = n(502762),
    L = n(530),
    M = n(4517),
    R = n(179828),
    G = n(993160),
    V = n(574887),
    F = n(693408),
    H = n(661462),
    Y = n(768111),
    W = n(228168),
    K = n(388032),
    X = n(517603);
function q(e) {
    let { user: t, currentUser: n, guildId: c, channelId: q, messageId: z, roleId: J, sessionId: Q, initialSection: $, initialSubsection: ee, transitionState: et, customStatusPrompt: en, openedAt: eo, onClose: er, sourceAnalyticsLocations: ec = [] } = e,
        { analyticsLocations: ei } = (0, m.ZP)([...ec, p.Z.USER_PROFILE_MODAL_V2]),
        ea = (0, v.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            sourceSessionId: Q,
            showGuildProfile: !0,
            guildId: c,
            channelId: q,
            messageId: z,
            roleId: J
        }),
        el = r.useRef(null),
        es = (0, u.Z)(el),
        ed = (0, N.$m)(),
        eu = (0, s.q_F)({
            opacity: +(null != ed.interactionType),
            config: { duration: 150 }
        }),
        ef = (0, l.e7)([x.Z], () => (null != c ? x.Z.getGuild(c) : null)),
        ep = r.useMemo(() => (null != c ? { [c]: [t.id] } : {}), [c, t.id]);
    (0, f.$)(ep);
    let em = (0, A.ZP)(t.id, c),
        eb = (0, l.e7)([g.Z], () => g.Z.getRelationshipType(t.id)),
        e_ = (0, l.e7)([j.Z], () => j.Z.hidePersonalInformation),
        ey =
            null == em
                ? void 0
                : em.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eh = (0, b.p)({ location: 'UserProfileModalV2' }),
        ex = r.useMemo(() => (null != en ? en : (0, _.Z)()), [en]),
        eg = (0, Y.Z)({
            user: t,
            currentUser: n
        }),
        ej = (0, T.Z)(t.id);
    return (0, o.jsx)(m.Gt, {
        value: ei,
        children: (0, o.jsx)(v.Mt, {
            value: ea,
            openedAt: eo,
            fetchStartedAt: null == em ? void 0 : em.fetchStartedAt,
            fetchEndedAt: null == em ? void 0 : em.fetchEndedAt,
            isLoaded: null == em ? void 0 : em.isLoaded,
            children: (0, o.jsx)(N.NJ, {
                value: ed,
                children: (0, o.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: X.root,
                    transitionState: et,
                    'aria-label': K.intl.string(K.t['3N/J2t']),
                    children: (0, o.jsxs)(k.Z, {
                        ref: el,
                        user: t,
                        displayProfile: em,
                        themeType: W.lY.MODAL_V2,
                        children: [
                            null != ey &&
                                (0, o.jsx)('div', {
                                    className: X.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(ey, ')') }
                                }),
                            null != ed.interactionType &&
                                (0, o.jsx)(a.animated.div, {
                                    style: eu,
                                    className: X.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: X.profile,
                                children: [
                                    (0, o.jsxs)('header', {
                                        className: X.profileHeader,
                                        children: [
                                            (0, o.jsx)(w.Z, {
                                                user: t,
                                                displayProfile: em,
                                                themeType: W.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(D.Z, {
                                                userId: t.id,
                                                onClose: er,
                                                className: X.toast
                                            }),
                                            (0, o.jsx)(C.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                displayProfile: em,
                                                guildId: c,
                                                channelId: q,
                                                themeType: W.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                guildId: c,
                                                channelId: q,
                                                themeType: W.lY.MODAL_V2,
                                                hasEntered: et === s.Dvm.ENTERED,
                                                prompt: eh && t.id === n.id ? ex : null,
                                                onCloseProfile: er
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: X.profileBody,
                                        children: [
                                            (0, o.jsx)(L.Z, {
                                                user: t,
                                                onClose: er,
                                                className: X.profileSection,
                                                nickname: O.ZP.useName(null == ef ? void 0 : ef.id, q, t),
                                                nicknameIcons: (0, o.jsx)(B.Z, { userId: t.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == em ? void 0 : em.pronouns,
                                                tagClassName: X.profileUsernameTag,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: em,
                                                    themeType: W.lY.MODAL_V2,
                                                    onClose: er
                                                })
                                            }),
                                            t.id === n.id &&
                                                (0, o.jsx)(E.Z, {
                                                    className: X.profileSection,
                                                    isPremiumUser: (0, I.I5)(n),
                                                    onInteraction: er
                                                }),
                                            (0, o.jsx)('div', {
                                                className: i()(X.profileSection, X.profileButtons),
                                                children: (0, o.jsx)(G.Z, {
                                                    user: t,
                                                    currentUser: n,
                                                    guildId: c,
                                                    relationshipType: eb,
                                                    onClose: er
                                                })
                                            }),
                                            (0, o.jsxs)(s.Ttm, {
                                                fade: !0,
                                                className: i()(X.profileSection, X.profileScroller),
                                                children: [
                                                    (null == em ? void 0 : em.bio) != null &&
                                                        (null == em ? void 0 : em.bio) !== '' &&
                                                        !e_ &&
                                                        (0, o.jsx)(S.Z, {
                                                            userBio: em.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    t.isProvisional &&
                                                        (0, o.jsx)(h.WR, {
                                                            userId: t.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(F.Z, {
                                                        heading: K.intl.string(K.t.a6XYDw),
                                                        children: (0, o.jsx)(U.Z, {
                                                            userId: t.id,
                                                            guildId: null == em ? void 0 : em.guildId,
                                                            tooltipDelay: W.vB
                                                        })
                                                    }),
                                                    null != ef &&
                                                        (0, o.jsx)(R.Z, {
                                                            user: t,
                                                            currentUser: n,
                                                            guild: ef,
                                                            headingClassName: X.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === W.Tb.ROLES
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(F.Z, {
                                                            heading: K.intl.string(K.t.ZZ5jS0),
                                                            scrollIntoView: ee === W.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(V.Z, {
                                                                connections: ej,
                                                                userId: t.id
                                                            })
                                                        }),
                                                    (0, o.jsx)(F.Z, {
                                                        heading: K.intl.string(K.t['mQKv+v']),
                                                        scrollIntoView: ee === W.Tb.NOTE,
                                                        children: (0, o.jsx)(d.Z, {
                                                            userId: t.id,
                                                            className: X.profileNote,
                                                            autoFocus: ee === W.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, P.pQ)(
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
                                        (0, o.jsx)(y.Z, {
                                            profileEffectId: null == em ? void 0 : em.profileEffectId,
                                            isHovering: es
                                        })
                                ]
                            }),
                            (0, o.jsx)(H.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: em,
                                guildId: c,
                                channelId: q,
                                items: eg,
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
