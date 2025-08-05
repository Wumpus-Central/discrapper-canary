(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(66546),
    l = n(442837),
    a = n(481060),
    c = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(313201),
    m = n(368326),
    g = n(429467),
    b = n(320582),
    y = n(246016),
    O = n(680295),
    h = n(189156),
    j = n(699516),
    x = n(246946),
    _ = n(5192),
    v = n(111361),
    I = n(785717),
    P = n(221292),
    N = n(687158),
    w = n(771362),
    T = n(510659),
    E = n(113557),
    Z = n(648052),
    A = n(867176),
    C = n(280885),
    S = n(537006),
    L = n(681837),
    k = n(78806),
    R = n(91433),
    D = n(451834),
    G = n(900927),
    B = n(944043),
    F = n(502762),
    U = n(530),
    M = n(4517),
    V = n(179828),
    W = n(993160),
    Y = n(574887),
    H = n(693408),
    J = n(661462),
    z = n(768111),
    K = n(228168),
    X = n(981631),
    q = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: er, sessionId: eo, initialSection: ei, initialSubsection: el, transitionState: ea, customStatusPrompt: ec, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: ep = !1 } = e,
        { analyticsLocations: em } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eg = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: eo,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            showGuildProfile: eu
        }),
        eb = o.useRef(null),
        ey = (0, s.Z)(eb),
        eO = (0, T.$m)(),
        eh = (0, a.q_F)({
            opacity: +(null != eO.interactionType),
            config: { duration: 150 }
        }),
        ej = o.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(ej);
    let ex = (0, N.ZP)(n.id, eu ? ee : void 0),
        e_ = _.ZP.useName(null == ex ? void 0 : ex.guildId, et, n),
        { relationshipType: ev, originApplicationId: eI } = (0, l.cj)([j.Z], () => ({
            relationshipType: j.Z.getRelationshipType(n.id),
            originApplicationId: j.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, l.e7)([x.Z], () => x.Z.hidePersonalInformation),
        eN =
            null == ex
                ? void 0
                : ex.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        ew = (0, m.p)({ location: 'UserProfileModalV2' }),
        eT = o.useMemo(() => (null != ec ? ec : (0, g.Z)()), [ec]),
        eE = (0, z.Z)({
            user: n,
            currentUser: $
        }),
        eZ = (0, y.Y)({ userId: n.id }),
        eA = (0, b.vh)(n.id),
        eC = (0, w.Z)(n.id),
        eS = (0, p.Dt)(),
        eL = q.intl.format(q.t.KRe1Fh, { name: e_ });
    return (0, r.jsx)(f.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eg,
            openedAt: es,
            fetchStartedAt: null == ex ? void 0 : ex.fetchStartedAt,
            fetchEndedAt: null == ex ? void 0 : ex.fetchEndedAt,
            isLoaded: null == ex ? void 0 : ex.isLoaded,
            children: (0, r.jsx)(T.NJ, {
                value: eO,
                children: (0, r.jsxs)(a.Y0X, {
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: ea,
                    'aria-labelledby': eS,
                    parentComponent: 'UserProfileModalV2',
                    children: [
                        ep
                            ? (0, r.jsxs)('div', {
                                  className: Q.previewBar,
                                  children: [
                                      (0, r.jsxs)(a.X6q, {
                                          id: eS,
                                          variant: 'heading-sm/normal',
                                          color: 'text-primary',
                                          children: [
                                              (0, r.jsx)(a.nn4, { children: ''.concat(q.intl.string(q.t.apViam), ': ').concat(eL) }),
                                              (0, r.jsx)('span', {
                                                  'aria-hidden': !0,
                                                  children: q.intl.string(q.t.apViam)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(a.zxk, {
                                          size: 'sm',
                                          variant: 'secondary',
                                          text: q.intl.string(q.t.ojM1xM),
                                          onClick: ed,
                                          'aria-label': q.intl.string(q.t.cpT0Cg)
                                      })
                                  ]
                              })
                            : (0, r.jsx)(a.nn4, {
                                  children: (0, r.jsx)(a.H, {
                                      id: eS,
                                      children: eL
                                  })
                              }),
                        (0, r.jsx)(a.y5t, {
                            children: (0, r.jsxs)(F.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ex,
                                themeType: K.lY.MODAL_V2,
                                children: [
                                    null != eN &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eN, ')') }
                                        }),
                                    null != eO.interactionType &&
                                        (0, r.jsx)(i.animated.div, {
                                            style: eh,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == ex ? void 0 : ex.profileEffectId) != null ? eb : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(A.Z, {
                                                        user: n,
                                                        displayProfile: ex,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(D.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(E.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: ex,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(M.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: K.lY.MODAL_V2,
                                                        hasEntered: ea === a.Dvm.ENTERED,
                                                        prompt: ew && n.id === $.id ? eT : null,
                                                        disableToolbar: ep
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(U.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: _.ZP.useName(null == ex ? void 0 : ex.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(L.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                                        tags: (0, r.jsx)(Z.Z, {
                                                            displayProfile: ex,
                                                            themeType: K.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    ev === X.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(F.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(R.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId: null != (t = null == ex ? void 0 : ex.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    eA.map((e) => {
                                                        var t;
                                                        let { applicationId: o } = e;
                                                        return (0, r.jsx)(
                                                            F.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(R.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == ex ? void 0 : ex.guildId) ? t : void 0,
                                                                    channelId: et,
                                                                    isGameRelationship: !0,
                                                                    applicationId: o,
                                                                    className: Q.profileBanner
                                                                })
                                                            },
                                                            o
                                                        );
                                                    }),
                                                    n.isProvisional &&
                                                        (0, r.jsx)(F.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(H.Z, {
                                                                heading: q.intl.string(q.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, r.jsx)(a.Mgn, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, r.jsx)(h.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, r.jsx)(S.Z, {
                                                            isPremiumUser: (0, v.I5)($),
                                                            onInteraction: ed
                                                        }),
                                                    (0, r.jsx)(B.Z, {
                                                        user: n,
                                                        className: Q.profileBanner
                                                    }),
                                                    (0, r.jsx)('div', {
                                                        className: Q.profileButtons,
                                                        children: (0, r.jsx)(W.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ee,
                                                            channelId: et,
                                                            displayProfile: ex,
                                                            relationshipType: ev,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == ex ? void 0 : ex.bio) != null &&
                                                        (null == ex ? void 0 : ex.bio) !== '' &&
                                                        !eP &&
                                                        (0, r.jsx)(C.Z, {
                                                            userBio: ex.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eZ.length > 0 &&
                                                        (0, r.jsx)(H.Z, {
                                                            heading: q.intl.string(q.t['Uv/eT0']),
                                                            children: (0, r.jsx)(k.Z, { applicationIds: eZ })
                                                        }),
                                                    (0, r.jsx)(H.Z, {
                                                        heading: q.intl.string(q.t.a6XYDw),
                                                        children: (0, r.jsx)(G.Z, {
                                                            userId: n.id,
                                                            guildId: null == ex ? void 0 : ex.guildId,
                                                            tooltipDelay: K.vB
                                                        })
                                                    }),
                                                    (null == ex ? void 0 : ex.guildId) != null &&
                                                        (0, r.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ex.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: el === K.Tb.ROLES
                                                        }),
                                                    eC.length > 0 &&
                                                        (0, r.jsx)(H.Z, {
                                                            heading: q.intl.string(q.t['3fe7U1']),
                                                            scrollIntoView: el === K.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(Y.Z, {
                                                                connections: eC,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(H.Z, {
                                                        heading: q.intl.string(q.t['mQKv+v']),
                                                        scrollIntoView: el === K.Tb.NOTE,
                                                        children: (0, r.jsx)(c.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: el === K.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, P.pQ)(
                                                                    (function (e) {
                                                                        for (var t = 1; t < arguments.length; t++) {
                                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                                r = Object.keys(n);
                                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                                (r = r.concat(
                                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                    })
                                                                                )),
                                                                                r.forEach(function (t) {
                                                                                    var r;
                                                                                    ((r = n[t]),
                                                                                        t in e
                                                                                            ? Object.defineProperty(e, t, {
                                                                                                  value: r,
                                                                                                  enumerable: !0,
                                                                                                  configurable: !0,
                                                                                                  writable: !0
                                                                                              })
                                                                                            : (e[t] = r));
                                                                                }));
                                                                        }
                                                                        return e;
                                                                    })({ action: 'SET_NOTE' }, eg)
                                                                )
                                                        })
                                                    })
                                                ]
                                            }),
                                            (null == ex ? void 0 : ex.profileEffectId) != null &&
                                                (0, r.jsx)(O.Z, {
                                                    profileEffectId: null == ex ? void 0 : ex.profileEffectId,
                                                    isHovering: ey
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(J.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ex,
                                        guildId: ee,
                                        channelId: et,
                                        items: eE,
                                        initialSection: ei,
                                        initialSubsection: el,
                                        onClose: ed
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
