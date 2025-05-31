n.d(t, { Z: () => et }), n(388685);
var r = n(255367),
    o = n(73800),
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
    g = n(189156),
    j = n(430824),
    I = n(699516),
    v = n(246946),
    O = n(5192),
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
    L = n(78806),
    U = n(91433),
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
    z = n(661462),
    q = n(768111),
    J = n(228168),
    Q = n(981631),
    $ = n(388032),
    ee = n(517603);
function et(e) {
    var t;
    let { user: n, currentUser: i, guildId: et, channelId: en, messageId: er, roleId: eo, sessionId: ei, initialSection: ec, initialSubsection: el, transitionState: ea, customStatusPrompt: es, openedAt: ed, onClose: eu, showGuildProfile: ef = !0, sourceAnalyticsLocations: ep = [] } = e,
        { analyticsLocations: em } = (0, m.ZP)([...ep, p.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, N.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: ei,
            guildId: et,
            channelId: en,
            messageId: er,
            roleId: eo,
            showGuildProfile: ef
        }),
        e_ = o.useRef(null),
        ey = (0, u.Z)(e_),
        ex = (0, C.$m)(),
        eh = (0, s.q_F)({
            opacity: +(null != ex.interactionType),
            config: { duration: 150 }
        }),
        eg = (0, a.e7)([j.Z], () => (null != et ? j.Z.getGuild(et) : null)),
        ej = o.useMemo(() => (null != et ? { [et]: [n.id] } : {}), [et, n.id]);
    (0, f.$)(ej);
    let eI = (0, T.ZP)(n.id, ef ? et : void 0),
        { relationshipType: ev, originApplicationId: eO } = (0, a.cj)([I.Z], () => ({
            relationshipType: I.Z.getRelationshipType(n.id),
            originApplicationId: I.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, a.e7)([v.Z], () => v.Z.hidePersonalInformation),
        eN =
            null == eI
                ? void 0
                : eI.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eA = (0, b.p)({ location: 'UserProfileModalV2' }),
        eT = o.useMemo(() => (null != es ? es : (0, _.Z)()), [es]),
        eZ = (0, q.Z)({
            user: n,
            currentUser: i
        }),
        eC = (0, x.Y)({ userId: n.id }),
        ew = (0, y.vh)(n.id),
        eS = (0, Z.Z)(n.id);
    return (0, r.jsx)(m.Gt, {
        value: em,
        children: (0, r.jsx)(N.Mt, {
            value: eb,
            openedAt: ed,
            fetchStartedAt: null == eI ? void 0 : eI.fetchStartedAt,
            fetchEndedAt: null == eI ? void 0 : eI.fetchEndedAt,
            isLoaded: null == eI ? void 0 : eI.isLoaded,
            children: (0, r.jsx)(C.NJ, {
                value: ex,
                children: (0, r.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: ee.root,
                    transitionState: ea,
                    'aria-label': $.intl.string($.t['3N/J2t']),
                    children: (0, r.jsxs)(V.Z, {
                        ref: e_,
                        user: n,
                        displayProfile: eI,
                        themeType: J.lY.MODAL_V2,
                        children: [
                            null != eN &&
                                (0, r.jsx)('div', {
                                    className: ee.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eN, ')') }
                                }),
                            null != ex.interactionType &&
                                (0, r.jsx)(l.animated.div, {
                                    style: eh,
                                    className: ee.backdrop
                                }),
                            (0, r.jsxs)('div', {
                                className: ee.profile,
                                children: [
                                    (0, r.jsxs)('header', {
                                        className: ee.profileHeader,
                                        children: [
                                            (0, r.jsx)(E.Z, {
                                                user: n,
                                                displayProfile: eI,
                                                themeType: J.lY.MODAL_V2
                                            }),
                                            (0, r.jsx)(M.Z, {
                                                userId: n.id,
                                                onClose: eu,
                                                className: ee.toast
                                            }),
                                            (0, r.jsx)(w.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: eI,
                                                guildId: et,
                                                channelId: en,
                                                themeType: J.lY.MODAL_V2
                                            }),
                                            (0, r.jsx)(H.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: et,
                                                channelId: en,
                                                themeType: J.lY.MODAL_V2,
                                                hasEntered: ea === s.Dvm.ENTERED,
                                                prompt: eA && n.id === i.id ? eT : null
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: ee.profileBody,
                                        children: [
                                            (0, r.jsx)(F.Z, {
                                                user: n,
                                                onClose: eu,
                                                className: ee.profileSection,
                                                nickname: O.ZP.useName(null == eI ? void 0 : eI.guildId, en, n),
                                                nicknameIcons: (0, r.jsx)(k.Z, {
                                                    size: 'sm',
                                                    userId: n.id
                                                }),
                                                nicknameVariant: 'heading-xl/semibold',
                                                pronouns: null == eI ? void 0 : eI.pronouns,
                                                tags: (0, r.jsx)(S.Z, {
                                                    displayProfile: eI,
                                                    themeType: J.lY.MODAL_V2,
                                                    onClose: eu
                                                })
                                            }),
                                            ev === Q.OGo.PENDING_INCOMING &&
                                                (0, r.jsx)(V.Z.Overlay, {
                                                    className: ee.profileOverlay,
                                                    children: (0, r.jsx)(U.Z, {
                                                        user: n,
                                                        applicationId: eO,
                                                        guildId: null != (t = null == eI ? void 0 : eI.guildId) ? t : void 0,
                                                        channelId: en,
                                                        className: ee.profileBanner
                                                    })
                                                }),
                                            ew.map((e) => {
                                                var t;
                                                let { applicationId: o } = e;
                                                return (0, r.jsx)(
                                                    V.Z.Overlay,
                                                    {
                                                        className: ee.profileOverlay,
                                                        children: (0, r.jsx)(U.Z, {
                                                            user: n,
                                                            guildId: null != (t = null == eI ? void 0 : eI.guildId) ? t : void 0,
                                                            channelId: en,
                                                            isGameRelationship: !0,
                                                            applicationId: o,
                                                            className: ee.profileBanner
                                                        })
                                                    },
                                                    o
                                                );
                                            }),
                                            n.isProvisional &&
                                                (0, r.jsx)(V.Z.Overlay, {
                                                    className: ee.profileOverlay,
                                                    children: (0, r.jsx)(X.Z, {
                                                        heading: $.intl.string($.t.Iyka0d),
                                                        headingVariant: 'text-md/semibold',
                                                        headingIcon: (0, r.jsx)(s.P4T, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        className: ee.profileBanner,
                                                        children: (0, r.jsx)(g.n, {
                                                            userId: n.id,
                                                            variant: 'text-sm/normal'
                                                        })
                                                    })
                                                }),
                                            n.id === i.id &&
                                                (0, r.jsx)(D.Z, {
                                                    className: ee.profileSection,
                                                    isPremiumUser: (0, P.I5)(i),
                                                    onInteraction: eu
                                                }),
                                            (0, r.jsx)(G.Z, {
                                                user: n,
                                                className: ee.profileBanner
                                            }),
                                            (0, r.jsx)('div', {
                                                className: c()(ee.profileSection, ee.profileButtons),
                                                children: (0, r.jsx)(W.Z, {
                                                    user: n,
                                                    currentUser: i,
                                                    guildId: et,
                                                    channelId: en,
                                                    displayProfile: eI,
                                                    relationshipType: ev,
                                                    onClose: eu
                                                })
                                            }),
                                            (0, r.jsxs)(s.Ttm, {
                                                fade: !0,
                                                className: c()(ee.profileSection, ee.profileScroller),
                                                children: [
                                                    (null == eI ? void 0 : eI.bio) != null &&
                                                        (null == eI ? void 0 : eI.bio) !== '' &&
                                                        !eP &&
                                                        (0, r.jsx)(B.Z, {
                                                            userBio: eI.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eC.length > 0 &&
                                                        (0, r.jsx)(X.Z, {
                                                            heading: $.intl.string($.t['Uv/eT0']),
                                                            children: (0, r.jsx)(L.Z, { applicationIds: eC })
                                                        }),
                                                    (0, r.jsx)(X.Z, {
                                                        heading: $.intl.string($.t.a6XYDw),
                                                        children: (0, r.jsx)(R.Z, {
                                                            userId: n.id,
                                                            guildId: null == eI ? void 0 : eI.guildId,
                                                            tooltipDelay: J.vB
                                                        })
                                                    }),
                                                    null != eg &&
                                                        (0, r.jsx)(Y.Z, {
                                                            user: n,
                                                            currentUser: i,
                                                            guild: eg,
                                                            className: ee.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: el === J.Tb.ROLES
                                                        }),
                                                    eS.length > 0 &&
                                                        (0, r.jsx)(X.Z, {
                                                            heading: $.intl.string($.t.ZZ5jS0),
                                                            scrollIntoView: el === J.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(K.Z, {
                                                                connections: eS,
                                                                userId: n.id
                                                            })
                                                        }),
                                                    (0, r.jsx)(X.Z, {
                                                        heading: $.intl.string($.t['mQKv+v']),
                                                        scrollIntoView: el === J.Tb.NOTE,
                                                        children: (0, r.jsx)(d.Z, {
                                                            userId: n.id,
                                                            className: ee.profileNote,
                                                            autoFocus: el === J.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, A.pQ)(
                                                                    (function (e) {
                                                                        for (var t = 1; t < arguments.length; t++) {
                                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                                r = Object.keys(n);
                                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                                (r = r.concat(
                                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                    })
                                                                                )),
                                                                                r.forEach(function (t) {
                                                                                    var r;
                                                                                    (r = n[t]),
                                                                                        t in e
                                                                                            ? Object.defineProperty(e, t, {
                                                                                                  value: r,
                                                                                                  enumerable: !0,
                                                                                                  configurable: !0,
                                                                                                  writable: !0
                                                                                              })
                                                                                            : (e[t] = r);
                                                                                });
                                                                        }
                                                                        return e;
                                                                    })({ action: 'SET_NOTE' }, eb)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == eI ? void 0 : eI.profileEffectId) != null &&
                                        (0, r.jsx)(h.Z, {
                                            profileEffectId: null == eI ? void 0 : eI.profileEffectId,
                                            isHovering: ey
                                        })
                                ]
                            }),
                            (0, r.jsx)(z.Z, {
                                user: n,
                                currentUser: i,
                                displayProfile: eI,
                                guildId: et,
                                channelId: en,
                                items: eZ,
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
