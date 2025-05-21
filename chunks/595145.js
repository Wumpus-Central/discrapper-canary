t.d(n, { Z: () => Q }), t(388685);
var o = t(255367),
    r = t(73800),
    c = t(120356),
    i = t.n(c),
    a = t(366594),
    l = t(442837),
    s = t(481060),
    d = t(666520),
    u = t(727637),
    f = t(616780),
    p = t(100527),
    m = t(906732),
    b = t(368326),
    _ = t(429467),
    y = t(680295),
    h = t(189156),
    g = t(430824),
    x = t(699516),
    j = t(246946),
    I = t(5192),
    O = t(111361),
    v = t(785717),
    P = t(221292),
    A = t(687158),
    N = t(771362),
    T = t(510659),
    C = t(113557),
    Z = t(648052),
    w = t(867176),
    S = t(280885),
    E = t(537006),
    B = t(681837),
    D = t(91433),
    U = t(451834),
    k = t(900927),
    L = t(944043),
    M = t(502762),
    R = t(530),
    G = t(4517),
    V = t(179828),
    F = t(993160),
    H = t(574887),
    Y = t(693408),
    W = t(661462),
    K = t(768111),
    q = t(228168),
    X = t(981631),
    z = t(388032),
    J = t(517603);
function Q(e) {
    var n;
    let { user: t, currentUser: c, guildId: Q, channelId: $, messageId: ee, roleId: en, sessionId: et, initialSection: eo, initialSubsection: er, transitionState: ec, customStatusPrompt: ei, openedAt: ea, onClose: el, sourceAnalyticsLocations: es = [] } = e,
        { analyticsLocations: ed } = (0, m.ZP)([...es, p.Z.USER_PROFILE_MODAL_V2]),
        eu = (0, v.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            sourceSessionId: et,
            showGuildProfile: !0,
            guildId: Q,
            channelId: $,
            messageId: ee,
            roleId: en
        }),
        ef = r.useRef(null),
        ep = (0, u.Z)(ef),
        em = (0, T.$m)(),
        eb = (0, s.q_F)({
            opacity: +(null != em.interactionType),
            config: { duration: 150 }
        }),
        e_ = (0, l.e7)([g.Z], () => (null != Q ? g.Z.getGuild(Q) : null)),
        ey = r.useMemo(() => (null != Q ? { [Q]: [t.id] } : {}), [Q, t.id]);
    (0, f.$)(ey);
    let eh = (0, A.ZP)(t.id, Q),
        { relationshipType: eg, originApplicationId: ex } = (0, l.cj)([x.Z], () => ({
            relationshipType: x.Z.getRelationshipType(t.id),
            originApplicationId: x.Z.getOriginApplicationId(t.id)
        })),
        ej = (0, l.e7)([j.Z], () => j.Z.hidePersonalInformation),
        eI =
            null == eh
                ? void 0
                : eh.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eO = (0, b.p)({ location: 'UserProfileModalV2' }),
        ev = r.useMemo(() => (null != ei ? ei : (0, _.Z)()), [ei]),
        eP = (0, K.Z)({
            user: t,
            currentUser: c
        }),
        eA = (0, N.Z)(t.id);
    return (0, o.jsx)(m.Gt, {
        value: ed,
        children: (0, o.jsx)(v.Mt, {
            value: eu,
            openedAt: ea,
            fetchStartedAt: null == eh ? void 0 : eh.fetchStartedAt,
            fetchEndedAt: null == eh ? void 0 : eh.fetchEndedAt,
            isLoaded: null == eh ? void 0 : eh.isLoaded,
            children: (0, o.jsx)(T.NJ, {
                value: em,
                children: (0, o.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: J.root,
                    transitionState: ec,
                    'aria-label': z.intl.string(z.t['3N/J2t']),
                    children: (0, o.jsxs)(M.Z, {
                        ref: ef,
                        user: t,
                        displayProfile: eh,
                        themeType: q.lY.MODAL_V2,
                        children: [
                            null != eI &&
                                (0, o.jsx)('div', {
                                    className: J.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eI, ')') }
                                }),
                            null != em.interactionType &&
                                (0, o.jsx)(a.animated.div, {
                                    style: eb,
                                    className: J.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: J.profile,
                                children: [
                                    (0, o.jsxs)('header', {
                                        className: J.profileHeader,
                                        children: [
                                            (0, o.jsx)(w.Z, {
                                                user: t,
                                                displayProfile: eh,
                                                themeType: q.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(U.Z, {
                                                userId: t.id,
                                                onClose: el,
                                                className: J.toast
                                            }),
                                            (0, o.jsx)(C.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                displayProfile: eh,
                                                guildId: Q,
                                                channelId: $,
                                                themeType: q.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(G.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                guildId: Q,
                                                channelId: $,
                                                themeType: q.lY.MODAL_V2,
                                                hasEntered: ec === s.Dvm.ENTERED,
                                                prompt: eO && t.id === c.id ? ev : null
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: J.profileBody,
                                        children: [
                                            (0, o.jsx)(R.Z, {
                                                user: t,
                                                onClose: el,
                                                className: J.profileSection,
                                                nickname: I.ZP.useName(null == e_ ? void 0 : e_.id, $, t),
                                                nicknameIcons: (0, o.jsx)(B.Z, { userId: t.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == eh ? void 0 : eh.pronouns,
                                                tagClassName: J.profileUsernameTag,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: eh,
                                                    themeType: q.lY.MODAL_V2,
                                                    onClose: el
                                                })
                                            }),
                                            eg === X.OGo.PENDING_INCOMING &&
                                                (0, o.jsx)(M.Z.Overlay, {
                                                    className: J.profileBanner,
                                                    children: (0, o.jsx)(D.Z, {
                                                        user: t,
                                                        applicationId: ex,
                                                        guildId: null != (n = null == eh ? void 0 : eh.guildId) ? n : void 0,
                                                        channelId: $,
                                                        className: J.friendRequestBanner
                                                    })
                                                }),
                                            t.id === c.id &&
                                                (0, o.jsx)(E.Z, {
                                                    className: J.profileSection,
                                                    isPremiumUser: (0, O.I5)(c),
                                                    onInteraction: el
                                                }),
                                            (0, o.jsx)(L.Z, {
                                                user: t,
                                                className: J.profileBanner
                                            }),
                                            (0, o.jsx)('div', {
                                                className: i()(J.profileSection, J.profileButtons),
                                                children: (0, o.jsx)(F.Z, {
                                                    user: t,
                                                    currentUser: c,
                                                    guildId: Q,
                                                    relationshipType: eg,
                                                    onClose: el
                                                })
                                            }),
                                            (0, o.jsxs)(s.Ttm, {
                                                fade: !0,
                                                className: i()(J.profileSection, J.profileScroller),
                                                children: [
                                                    (null == eh ? void 0 : eh.bio) != null &&
                                                        (null == eh ? void 0 : eh.bio) !== '' &&
                                                        !ej &&
                                                        (0, o.jsx)(S.Z, {
                                                            userBio: eh.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    t.isProvisional &&
                                                        (0, o.jsx)(h.WR, {
                                                            userId: t.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(Y.Z, {
                                                        heading: z.intl.string(z.t.a6XYDw),
                                                        children: (0, o.jsx)(k.Z, {
                                                            userId: t.id,
                                                            guildId: null == eh ? void 0 : eh.guildId,
                                                            tooltipDelay: q.vB
                                                        })
                                                    }),
                                                    null != e_ &&
                                                        (0, o.jsx)(V.Z, {
                                                            user: t,
                                                            currentUser: c,
                                                            guild: e_,
                                                            headingClassName: J.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: er === q.Tb.ROLES
                                                        }),
                                                    eA.length > 0 &&
                                                        (0, o.jsx)(Y.Z, {
                                                            heading: z.intl.string(z.t.ZZ5jS0),
                                                            scrollIntoView: er === q.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(H.Z, {
                                                                connections: eA,
                                                                userId: t.id
                                                            })
                                                        }),
                                                    (0, o.jsx)(Y.Z, {
                                                        heading: z.intl.string(z.t['mQKv+v']),
                                                        scrollIntoView: er === q.Tb.NOTE,
                                                        children: (0, o.jsx)(d.Z, {
                                                            userId: t.id,
                                                            className: J.profileNote,
                                                            autoFocus: er === q.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, P.pQ)(
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
                                                                    })({ action: 'SET_NOTE' }, eu)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == eh ? void 0 : eh.profileEffectId) != null &&
                                        (0, o.jsx)(y.Z, {
                                            profileEffectId: null == eh ? void 0 : eh.profileEffectId,
                                            isHovering: ep
                                        })
                                ]
                            }),
                            (0, o.jsx)(W.Z, {
                                user: t,
                                currentUser: c,
                                displayProfile: eh,
                                guildId: Q,
                                channelId: $,
                                items: eP,
                                initialSection: eo,
                                initialSubsection: er,
                                onClose: el
                            })
                        ]
                    })
                })
            })
        })
    });
}
