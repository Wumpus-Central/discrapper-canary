n.d(t, { Z: () => et }), n(388685);
var o = n(255367),
    r = n(73800),
    i = n(120356),
    c = n.n(i),
    l = n(240894),
    a = n(442837),
    s = n(481060),
    d = n(666520),
    u = n(727637),
    f = n(616780),
    p = n(100527),
    m = n(906732),
    b = n(368326),
    _ = n(429467),
    y = n(320582),
    x = n(246016),
    h = n(680295),
    j = n(189156),
    g = n(430824),
    O = n(699516),
    I = n(246946),
    v = n(5192),
    P = n(111361),
    N = n(785717),
    A = n(221292),
    T = n(687158),
    Z = n(771362),
    C = n(510659),
    w = n(113557),
    S = n(648052),
    E = n(867176),
    B = n(280885),
    D = n(537006),
    k = n(681837),
    U = n(78806),
    L = n(91433),
    M = n(451834),
    R = n(900927),
    G = n(944043),
    V = n(502762),
    F = n(530),
    H = n(4517),
    Y = n(179828),
    W = n(993160),
    K = n(574887),
    X = n(693408),
    q = n(661462),
    z = n(768111),
    J = n(228168),
    Q = n(981631),
    $ = n(388032),
    ee = n(517603);
function et(e) {
    var t;
    let { user: n, currentUser: i, guildId: et, channelId: en, messageId: eo, roleId: er, sessionId: ei, initialSection: ec, initialSubsection: el, transitionState: ea, customStatusPrompt: es, openedAt: ed, onClose: eu, sourceAnalyticsLocations: ef = [] } = e,
        { analyticsLocations: ep } = (0, m.ZP)([...ef, p.Z.USER_PROFILE_MODAL_V2]),
        em = (0, N.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: ei,
            showGuildProfile: !0,
            guildId: et,
            channelId: en,
            messageId: eo,
            roleId: er
        }),
        eb = r.useRef(null),
        e_ = (0, u.Z)(eb),
        ey = (0, C.$m)(),
        ex = (0, s.q_F)({
            opacity: +(null != ey.interactionType),
            config: { duration: 150 }
        }),
        eh = (0, a.e7)([g.Z], () => (null != et ? g.Z.getGuild(et) : null)),
        ej = r.useMemo(() => (null != et ? { [et]: [n.id] } : {}), [et, n.id]);
    (0, f.$)(ej);
    let eg = (0, T.ZP)(n.id, et),
        { relationshipType: eO, originApplicationId: eI } = (0, a.cj)([O.Z], () => ({
            relationshipType: O.Z.getRelationshipType(n.id),
            originApplicationId: O.Z.getOriginApplicationId(n.id)
        })),
        ev = (0, a.e7)([I.Z], () => I.Z.hidePersonalInformation),
        eP =
            null == eg
                ? void 0
                : eg.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eN = (0, b.p)({ location: 'UserProfileModalV2' }),
        eA = r.useMemo(() => (null != es ? es : (0, _.Z)()), [es]),
        eT = (0, z.Z)({
            user: n,
            currentUser: i
        }),
        eZ = (0, x.Y)({ userId: n.id }),
        eC = (0, y.vh)(n.id),
        ew = (0, Z.Z)(n.id);
    return (0, o.jsx)(m.Gt, {
        value: ep,
        children: (0, o.jsx)(N.Mt, {
            value: em,
            openedAt: ed,
            fetchStartedAt: null == eg ? void 0 : eg.fetchStartedAt,
            fetchEndedAt: null == eg ? void 0 : eg.fetchEndedAt,
            isLoaded: null == eg ? void 0 : eg.isLoaded,
            children: (0, o.jsx)(C.NJ, {
                value: ey,
                children: (0, o.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: ee.root,
                    transitionState: ea,
                    'aria-label': $.intl.string($.t['3N/J2t']),
                    children: (0, o.jsxs)(V.Z, {
                        ref: eb,
                        user: n,
                        displayProfile: eg,
                        themeType: J.lY.MODAL_V2,
                        children: [
                            null != eP &&
                                (0, o.jsx)('div', {
                                    className: ee.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eP, ')') }
                                }),
                            null != ey.interactionType &&
                                (0, o.jsx)(l.animated.div, {
                                    style: ex,
                                    className: ee.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: ee.profile,
                                children: [
                                    (0, o.jsxs)('header', {
                                        className: ee.profileHeader,
                                        children: [
                                            (0, o.jsx)(E.Z, {
                                                user: n,
                                                displayProfile: eg,
                                                themeType: J.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                userId: n.id,
                                                onClose: eu,
                                                className: ee.toast
                                            }),
                                            (0, o.jsx)(w.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: eg,
                                                guildId: et,
                                                channelId: en,
                                                themeType: J.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(H.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: et,
                                                channelId: en,
                                                themeType: J.lY.MODAL_V2,
                                                hasEntered: ea === s.Dvm.ENTERED,
                                                prompt: eN && n.id === i.id ? eA : null
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: ee.profileBody,
                                        children: [
                                            (0, o.jsx)(F.Z, {
                                                user: n,
                                                onClose: eu,
                                                className: ee.profileSection,
                                                nickname: v.ZP.useName(null == eh ? void 0 : eh.id, en, n),
                                                nicknameIcons: (0, o.jsx)(k.Z, {
                                                    size: 'sm',
                                                    userId: n.id
                                                }),
                                                nicknameVariant: 'heading-xl/semibold',
                                                pronouns: null == eg ? void 0 : eg.pronouns,
                                                tags: (0, o.jsx)(S.Z, {
                                                    displayProfile: eg,
                                                    themeType: J.lY.MODAL_V2,
                                                    onClose: eu
                                                })
                                            }),
                                            eO === Q.OGo.PENDING_INCOMING &&
                                                (0, o.jsx)(V.Z.Overlay, {
                                                    className: ee.profileOverlay,
                                                    children: (0, o.jsx)(L.Z, {
                                                        user: n,
                                                        applicationId: eI,
                                                        guildId: null != (t = null == eg ? void 0 : eg.guildId) ? t : void 0,
                                                        channelId: en,
                                                        className: ee.profileBanner
                                                    })
                                                }),
                                            eC.map((e) => {
                                                let { applicationId: t } = e;
                                                return (0, o.jsx)(
                                                    V.Z.Overlay,
                                                    {
                                                        className: ee.profileOverlay,
                                                        children: (0, o.jsx)(L.Z, {
                                                            user: n,
                                                            channelId: en,
                                                            isGameRelationship: !0,
                                                            applicationId: t,
                                                            className: ee.profileBanner
                                                        })
                                                    },
                                                    t
                                                );
                                            }),
                                            n.isProvisional &&
                                                (0, o.jsx)(V.Z.Overlay, {
                                                    className: ee.profileOverlay,
                                                    children: (0, o.jsx)(X.Z, {
                                                        heading: $.intl.string($.t.Iyka0d),
                                                        headingVariant: 'text-md/semibold',
                                                        headingIcon: (0, o.jsx)(s.P4T, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        className: ee.profileBanner,
                                                        children: (0, o.jsx)(j.n, {
                                                            userId: n.id,
                                                            variant: 'text-sm/normal'
                                                        })
                                                    })
                                                }),
                                            n.id === i.id &&
                                                (0, o.jsx)(D.Z, {
                                                    className: ee.profileSection,
                                                    isPremiumUser: (0, P.I5)(i),
                                                    onInteraction: eu
                                                }),
                                            (0, o.jsx)(G.Z, {
                                                user: n,
                                                className: ee.profileBanner
                                            }),
                                            (0, o.jsx)('div', {
                                                className: c()(ee.profileSection, ee.profileButtons),
                                                children: (0, o.jsx)(W.Z, {
                                                    user: n,
                                                    currentUser: i,
                                                    guildId: et,
                                                    relationshipType: eO,
                                                    onClose: eu
                                                })
                                            }),
                                            (0, o.jsxs)(s.Ttm, {
                                                fade: !0,
                                                className: c()(ee.profileSection, ee.profileScroller),
                                                children: [
                                                    (null == eg ? void 0 : eg.bio) != null &&
                                                        (null == eg ? void 0 : eg.bio) !== '' &&
                                                        !ev &&
                                                        (0, o.jsx)(B.Z, {
                                                            userBio: eg.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eZ.length > 0 &&
                                                        (0, o.jsx)(X.Z, {
                                                            heading: $.intl.string($.t['Uv/eT0']),
                                                            children: (0, o.jsx)(U.Z, { applicationIds: eZ })
                                                        }),
                                                    (0, o.jsx)(X.Z, {
                                                        heading: $.intl.string($.t.a6XYDw),
                                                        children: (0, o.jsx)(R.Z, {
                                                            userId: n.id,
                                                            guildId: null == eg ? void 0 : eg.guildId,
                                                            tooltipDelay: J.vB
                                                        })
                                                    }),
                                                    null != eh &&
                                                        (0, o.jsx)(Y.Z, {
                                                            user: n,
                                                            currentUser: i,
                                                            guild: eh,
                                                            className: ee.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: el === J.Tb.ROLES
                                                        }),
                                                    ew.length > 0 &&
                                                        (0, o.jsx)(X.Z, {
                                                            heading: $.intl.string($.t.ZZ5jS0),
                                                            scrollIntoView: el === J.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(K.Z, {
                                                                connections: ew,
                                                                userId: n.id
                                                            })
                                                        }),
                                                    (0, o.jsx)(X.Z, {
                                                        heading: $.intl.string($.t['mQKv+v']),
                                                        scrollIntoView: el === J.Tb.NOTE,
                                                        children: (0, o.jsx)(d.Z, {
                                                            userId: n.id,
                                                            className: ee.profileNote,
                                                            autoFocus: el === J.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, A.pQ)(
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
                                                                    })({ action: 'SET_NOTE' }, em)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == eg ? void 0 : eg.profileEffectId) != null &&
                                        (0, o.jsx)(h.Z, {
                                            profileEffectId: null == eg ? void 0 : eg.profileEffectId,
                                            isHovering: e_
                                        })
                                ]
                            }),
                            (0, o.jsx)(q.Z, {
                                user: n,
                                currentUser: i,
                                displayProfile: eg,
                                guildId: et,
                                channelId: en,
                                items: eT,
                                initialSection: ec,
                                initialSubsection: el,
                                onClose: eu
                            })
                        ]
                    })
                })
            })
        })
    });
}
