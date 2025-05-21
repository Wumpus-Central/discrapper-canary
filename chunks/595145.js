n.d(t, { Z: () => J }), n(388685);
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
    g = n(430824),
    x = n(699516),
    j = n(246946),
    I = n(5192),
    O = n(111361),
    v = n(785717),
    P = n(221292),
    A = n(687158),
    N = n(771362),
    T = n(510659),
    C = n(113557),
    Z = n(648052),
    w = n(867176),
    S = n(280885),
    E = n(537006),
    B = n(681837),
    D = n(91433),
    U = n(451834),
    k = n(900927),
    L = n(502762),
    M = n(530),
    R = n(4517),
    G = n(179828),
    V = n(993160),
    F = n(574887),
    H = n(693408),
    Y = n(661462),
    W = n(768111),
    K = n(228168),
    q = n(981631),
    X = n(388032),
    z = n(517603);
function J(e) {
    var t;
    let { user: n, currentUser: c, guildId: J, channelId: Q, messageId: $, roleId: ee, sessionId: et, initialSection: en, initialSubsection: eo, transitionState: er, customStatusPrompt: ec, openedAt: ei, onClose: ea, sourceAnalyticsLocations: el = [] } = e,
        { analyticsLocations: es } = (0, m.ZP)([...el, p.Z.USER_PROFILE_MODAL_V2]),
        ed = (0, v.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: et,
            showGuildProfile: !0,
            guildId: J,
            channelId: Q,
            messageId: $,
            roleId: ee
        }),
        eu = r.useRef(null),
        ef = (0, u.Z)(eu),
        ep = (0, T.$m)(),
        em = (0, s.q_F)({
            opacity: +(null != ep.interactionType),
            config: { duration: 150 }
        }),
        eb = (0, l.e7)([g.Z], () => (null != J ? g.Z.getGuild(J) : null)),
        e_ = r.useMemo(() => (null != J ? { [J]: [n.id] } : {}), [J, n.id]);
    (0, f.$)(e_);
    let ey = (0, A.ZP)(n.id, J),
        { relationshipType: eh, originApplicationId: eg } = (0, l.cj)([x.Z], () => ({
            relationshipType: x.Z.getRelationshipType(n.id),
            originApplicationId: x.Z.getOriginApplicationId(n.id)
        })),
        ex = (0, l.e7)([j.Z], () => j.Z.hidePersonalInformation),
        ej =
            null == ey
                ? void 0
                : ey.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eI = (0, b.p)({ location: 'UserProfileModalV2' }),
        eO = r.useMemo(() => (null != ec ? ec : (0, _.Z)()), [ec]),
        ev = (0, W.Z)({
            user: n,
            currentUser: c
        }),
        eP = (0, N.Z)(n.id);
    return (0, o.jsx)(m.Gt, {
        value: es,
        children: (0, o.jsx)(v.Mt, {
            value: ed,
            openedAt: ei,
            fetchStartedAt: null == ey ? void 0 : ey.fetchStartedAt,
            fetchEndedAt: null == ey ? void 0 : ey.fetchEndedAt,
            isLoaded: null == ey ? void 0 : ey.isLoaded,
            children: (0, o.jsx)(T.NJ, {
                value: ep,
                children: (0, o.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: z.root,
                    transitionState: er,
                    'aria-label': X.intl.string(X.t['3N/J2t']),
                    children: (0, o.jsxs)(L.Z, {
                        ref: eu,
                        user: n,
                        displayProfile: ey,
                        themeType: K.lY.MODAL_V2,
                        children: [
                            null != ej &&
                                (0, o.jsx)('div', {
                                    className: z.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(ej, ')') }
                                }),
                            null != ep.interactionType &&
                                (0, o.jsx)(a.animated.div, {
                                    style: em,
                                    className: z.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: z.profile,
                                children: [
                                    (0, o.jsxs)('header', {
                                        className: z.profileHeader,
                                        children: [
                                            (0, o.jsx)(w.Z, {
                                                user: n,
                                                displayProfile: ey,
                                                themeType: K.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(U.Z, {
                                                userId: n.id,
                                                onClose: ea,
                                                className: z.toast
                                            }),
                                            (0, o.jsx)(C.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: ey,
                                                guildId: J,
                                                channelId: Q,
                                                themeType: K.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(R.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: J,
                                                channelId: Q,
                                                themeType: K.lY.MODAL_V2,
                                                hasEntered: er === s.Dvm.ENTERED,
                                                prompt: eI && n.id === c.id ? eO : null
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: z.profileBody,
                                        children: [
                                            (0, o.jsx)(M.Z, {
                                                user: n,
                                                onClose: ea,
                                                className: z.profileSection,
                                                nickname: I.ZP.useName(null == eb ? void 0 : eb.id, Q, n),
                                                nicknameIcons: (0, o.jsx)(B.Z, { userId: n.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == ey ? void 0 : ey.pronouns,
                                                tagClassName: z.profileUsernameTag,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: ey,
                                                    themeType: K.lY.MODAL_V2,
                                                    onClose: ea
                                                })
                                            }),
                                            eh === q.OGo.PENDING_INCOMING &&
                                                (0, o.jsx)(L.Z.Overlay, {
                                                    className: z.profileBanner,
                                                    children: (0, o.jsx)(D.Z, {
                                                        user: n,
                                                        applicationId: eg,
                                                        guildId: null != (t = null == ey ? void 0 : ey.guildId) ? t : void 0,
                                                        channelId: Q,
                                                        className: z.friendRequestBanner
                                                    })
                                                }),
                                            n.id === c.id &&
                                                (0, o.jsx)(E.Z, {
                                                    className: z.profileSection,
                                                    isPremiumUser: (0, O.I5)(c),
                                                    onInteraction: ea
                                                }),
                                            (0, o.jsx)('div', {
                                                className: i()(z.profileSection, z.profileButtons),
                                                children: (0, o.jsx)(V.Z, {
                                                    user: n,
                                                    currentUser: c,
                                                    guildId: J,
                                                    relationshipType: eh,
                                                    onClose: ea
                                                })
                                            }),
                                            (0, o.jsxs)(s.Ttm, {
                                                fade: !0,
                                                className: i()(z.profileSection, z.profileScroller),
                                                children: [
                                                    (null == ey ? void 0 : ey.bio) != null &&
                                                        (null == ey ? void 0 : ey.bio) !== '' &&
                                                        !ex &&
                                                        (0, o.jsx)(S.Z, {
                                                            userBio: ey.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(h.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(H.Z, {
                                                        heading: X.intl.string(X.t.a6XYDw),
                                                        children: (0, o.jsx)(k.Z, {
                                                            userId: n.id,
                                                            guildId: null == ey ? void 0 : ey.guildId,
                                                            tooltipDelay: K.vB
                                                        })
                                                    }),
                                                    null != eb &&
                                                        (0, o.jsx)(G.Z, {
                                                            user: n,
                                                            currentUser: c,
                                                            guild: eb,
                                                            headingClassName: z.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: eo === K.Tb.ROLES
                                                        }),
                                                    eP.length > 0 &&
                                                        (0, o.jsx)(H.Z, {
                                                            heading: X.intl.string(X.t.ZZ5jS0),
                                                            scrollIntoView: eo === K.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(F.Z, {
                                                                connections: eP,
                                                                userId: n.id
                                                            })
                                                        }),
                                                    (0, o.jsx)(H.Z, {
                                                        heading: X.intl.string(X.t['mQKv+v']),
                                                        scrollIntoView: eo === K.Tb.NOTE,
                                                        children: (0, o.jsx)(d.Z, {
                                                            userId: n.id,
                                                            className: z.profileNote,
                                                            autoFocus: eo === K.Tb.NOTE,
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
                                                                    })({ action: 'SET_NOTE' }, ed)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == ey ? void 0 : ey.profileEffectId) != null &&
                                        (0, o.jsx)(y.Z, {
                                            profileEffectId: null == ey ? void 0 : ey.profileEffectId,
                                            isHovering: ef
                                        })
                                ]
                            }),
                            (0, o.jsx)(Y.Z, {
                                user: n,
                                currentUser: c,
                                displayProfile: ey,
                                guildId: J,
                                channelId: Q,
                                items: ev,
                                initialSection: en,
                                initialSubsection: eo,
                                onClose: ea
                            })
                        ]
                    })
                })
            })
        })
    });
}
