n.d(t, { Z: () => et }), n(388685);
var o = n(255367),
    r = n(73800),
    i = n(120356),
    c = n.n(i),
    l = n(386230),
    a = n(442837),
    s = n(481060),
    d = n(666520),
    u = n(727637),
    f = n(616780),
    p = n(100527),
    m = n(906732),
    b = n(368326),
    y = n(429467),
    _ = n(320582),
    x = n(246016),
    h = n(680295),
    g = n(189156),
    j = n(706454),
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
    L = n(681837),
    U = n(78806),
    k = n(91433),
    M = n(451834),
    R = n(900927),
    G = n(944043),
    V = n(502762),
    F = n(530),
    Y = n(4517),
    H = n(179828),
    K = n(993160),
    W = n(574887),
    z = n(693408),
    X = n(661462),
    q = n(768111),
    J = n(228168),
    Q = n(981631),
    $ = n(388032),
    ee = n(517603);
function et(e) {
    var t;
    let { user: n, currentUser: i, guildId: et, channelId: en, messageId: eo, roleId: er, sessionId: ei, initialSection: ec, initialSubsection: el, transitionState: ea, customStatusPrompt: es, openedAt: ed, onClose: eu, showGuildProfile: ef = !0, sourceAnalyticsLocations: ep = [] } = e,
        { analyticsLocations: em } = (0, m.ZP)([...ep, p.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, N.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: ei,
            guildId: et,
            channelId: en,
            messageId: eo,
            roleId: er,
            showGuildProfile: ef
        }),
        ey = r.useRef(null),
        e_ = (0, u.Z)(ey),
        ex = (0, C.$m)(),
        eh = (0, s.q_F)({
            opacity: +(null != ex.interactionType),
            config: { duration: 150 }
        }),
        eg = r.useMemo(() => (null != et ? { [et]: [n.id] } : {}), [et, n.id]);
    (0, f.$)(eg);
    let ej = (0, T.ZP)(n.id, ef ? et : void 0),
        eI = O.ZP.useName(null == ej ? void 0 : ej.guildId, en, n),
        { relationshipType: ev, originApplicationId: eO } = (0, a.cj)([I.Z], () => ({
            relationshipType: I.Z.getRelationshipType(n.id),
            originApplicationId: I.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, a.e7)([v.Z], () => v.Z.hidePersonalInformation),
        eN =
            null == ej
                ? void 0
                : ej.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eA = (0, b.p)({ location: 'UserProfileModalV2' }),
        eT = r.useMemo(() => (null != es ? es : (0, y.Z)()), [es]),
        eZ = (0, q.Z)({
            user: n,
            currentUser: i
        }),
        eC = (0, x.Y)({ userId: n.id }),
        ew = (0, _.vh)(n.id),
        eS = (0, Z.Z)(n.id),
        eE = (0, a.e7)([j.default], () => ['en-US', 'en-GB'].includes(j.default.locale)) ? $.intl.formatToPlainString($.t.KRe1Fh, { name: eI }) : $.intl.string($.t['3N/J2t']);
    return (0, o.jsx)(m.Gt, {
        value: em,
        children: (0, o.jsx)(N.Mt, {
            value: eb,
            openedAt: ed,
            fetchStartedAt: null == ej ? void 0 : ej.fetchStartedAt,
            fetchEndedAt: null == ej ? void 0 : ej.fetchEndedAt,
            isLoaded: null == ej ? void 0 : ej.isLoaded,
            children: (0, o.jsx)(C.NJ, {
                value: ex,
                children: (0, o.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: ee.root,
                    transitionState: ea,
                    'aria-label': eE,
                    parentComponent: 'UserProfileModalV2',
                    children: (0, o.jsxs)(V.Z, {
                        ref: (null == ej ? void 0 : ej.profileEffectId) != null ? ey : void 0,
                        user: n,
                        displayProfile: ej,
                        themeType: J.lY.MODAL_V2,
                        children: [
                            null != eN &&
                                (0, o.jsx)('div', {
                                    className: ee.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eN, ')') }
                                }),
                            null != ex.interactionType &&
                                (0, o.jsx)(l.animated.div, {
                                    style: eh,
                                    className: ee.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: ee.profile,
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: ee.profileHeader,
                                        children: [
                                            (0, o.jsx)(E.Z, {
                                                user: n,
                                                displayProfile: ej,
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
                                                displayProfile: ej,
                                                guildId: et,
                                                channelId: en,
                                                themeType: J.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(Y.Z, {
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
                                    (0, o.jsxs)('div', {
                                        className: ee.profileBody,
                                        children: [
                                            (0, o.jsx)(F.Z, {
                                                user: n,
                                                onClose: eu,
                                                className: ee.profileSection,
                                                nickname: O.ZP.useName(null == ej ? void 0 : ej.guildId, en, n),
                                                nicknameIcons: (0, o.jsx)(L.Z, {
                                                    size: 'sm',
                                                    userId: n.id
                                                }),
                                                nicknameVariant: 'heading-xl/semibold',
                                                pronouns: null == ej ? void 0 : ej.pronouns,
                                                tags: (0, o.jsx)(S.Z, {
                                                    displayProfile: ej,
                                                    themeType: J.lY.MODAL_V2,
                                                    onClose: eu
                                                })
                                            }),
                                            (0, o.jsxs)(s.y5t, {
                                                children: [
                                                    ev === Q.OGo.PENDING_INCOMING &&
                                                        (0, o.jsx)(V.Z.Overlay, {
                                                            className: ee.profileOverlay,
                                                            children: (0, o.jsx)(k.Z, {
                                                                user: n,
                                                                applicationId: eO,
                                                                guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
                                                                channelId: en,
                                                                className: ee.profileBanner
                                                            })
                                                        }),
                                                    ew.map((e) => {
                                                        var t;
                                                        let { applicationId: r } = e;
                                                        return (0, o.jsx)(
                                                            V.Z.Overlay,
                                                            {
                                                                className: ee.profileOverlay,
                                                                children: (0, o.jsx)(k.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
                                                                    channelId: en,
                                                                    isGameRelationship: !0,
                                                                    applicationId: r,
                                                                    className: ee.profileBanner
                                                                })
                                                            },
                                                            r
                                                        );
                                                    }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(V.Z.Overlay, {
                                                            className: ee.profileOverlay,
                                                            children: (0, o.jsx)(z.Z, {
                                                                heading: $.intl.string($.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, o.jsx)(s.P4T, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: ee.profileBanner,
                                                                children: (0, o.jsx)(g.n, {
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
                                                        children: (0, o.jsx)(K.Z, {
                                                            user: n,
                                                            currentUser: i,
                                                            guildId: et,
                                                            channelId: en,
                                                            displayProfile: ej,
                                                            relationshipType: ev,
                                                            onClose: eu
                                                        })
                                                    }),
                                                    (0, o.jsxs)(s.Ttm, {
                                                        fade: !0,
                                                        className: c()(ee.profileSection, ee.profileScroller),
                                                        children: [
                                                            (null == ej ? void 0 : ej.bio) != null &&
                                                                (null == ej ? void 0 : ej.bio) !== '' &&
                                                                !eP &&
                                                                (0, o.jsx)(B.Z, {
                                                                    userBio: ej.bio,
                                                                    setLineClamp: !1
                                                                }),
                                                            eC.length > 0 &&
                                                                (0, o.jsx)(z.Z, {
                                                                    heading: $.intl.string($.t['Uv/eT0']),
                                                                    children: (0, o.jsx)(U.Z, { applicationIds: eC })
                                                                }),
                                                            (0, o.jsx)(z.Z, {
                                                                heading: $.intl.string($.t.a6XYDw),
                                                                children: (0, o.jsx)(R.Z, {
                                                                    userId: n.id,
                                                                    guildId: null == ej ? void 0 : ej.guildId,
                                                                    tooltipDelay: J.vB
                                                                })
                                                            }),
                                                            (null == ej ? void 0 : ej.guildId) != null &&
                                                                (0, o.jsx)(H.Z, {
                                                                    user: n,
                                                                    currentUser: i,
                                                                    guildId: ej.guildId,
                                                                    className: ee.profileRolesSection,
                                                                    headingVariant: 'text-xs/medium',
                                                                    headingColor: 'currentColor',
                                                                    scrollIntoView: el === J.Tb.ROLES
                                                                }),
                                                            eS.length > 0 &&
                                                                (0, o.jsx)(z.Z, {
                                                                    heading: $.intl.string($.t['3fe7U1']),
                                                                    scrollIntoView: el === J.Tb.CONNECTIONS,
                                                                    children: (0, o.jsx)(W.Z, {
                                                                        connections: eS,
                                                                        userId: n.id
                                                                    })
                                                                }),
                                                            (0, o.jsx)(z.Z, {
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
                                                                            })({ action: 'SET_NOTE' }, eb)
                                                                        )
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == ej ? void 0 : ej.profileEffectId) != null &&
                                        (0, o.jsx)(h.Z, {
                                            profileEffectId: null == ej ? void 0 : ej.profileEffectId,
                                            isHovering: e_
                                        })
                                ]
                            }),
                            (0, o.jsx)(s.y5t, {
                                children: (0, o.jsx)(X.Z, {
                                    user: n,
                                    currentUser: i,
                                    displayProfile: ej,
                                    guildId: et,
                                    channelId: en,
                                    items: eZ,
                                    initialSection: ec,
                                    initialSubsection: el,
                                    onClose: eu
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
