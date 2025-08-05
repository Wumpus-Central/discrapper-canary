(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(66546),
    i = n(442837),
    a = n(481060),
    c = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(313201),
    m = n(368326),
    b = n(429467),
    g = n(320582),
    y = n(246016),
    O = n(680295),
    j = n(189156),
    _ = n(699516),
    x = n(246946),
    h = n(5192),
    v = n(111361),
    I = n(785717),
    P = n(221292),
    N = n(687158),
    E = n(771362),
    A = n(510659),
    w = n(113557),
    T = n(648052),
    S = n(867176),
    Z = n(280885),
    C = n(537006),
    G = n(681837),
    L = n(78806),
    k = n(91433),
    R = n(451834),
    D = n(900927),
    M = n(944043),
    B = n(502762),
    U = n(530),
    F = n(4517),
    V = n(179828),
    Y = n(993160),
    W = n(574887),
    J = n(693408),
    H = n(661462),
    K = n(768111),
    z = n(228168),
    q = n(981631),
    X = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: er, sessionId: eo, initialSection: el, initialSubsection: ei, transitionState: ea, customStatusPrompt: ec, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: ep = !1 } = e,
        { analyticsLocations: em } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: eo,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            showGuildProfile: eu
        }),
        eg = o.useRef(null),
        ey = (0, s.Z)(eg),
        eO = (0, A.$m)(),
        ej = (0, a.q_F)({
            opacity: +(null != eO.interactionType),
            config: { duration: 150 }
        }),
        e_ = o.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(e_);
    let ex = (0, N.ZP)(n.id, eu ? ee : void 0),
        eh = h.ZP.useName(null == ex ? void 0 : ex.guildId, et, n),
        { relationshipType: ev, originApplicationId: eI } = (0, i.cj)([_.Z], () => ({
            relationshipType: _.Z.getRelationshipType(n.id),
            originApplicationId: _.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        eN =
            null == ex
                ? void 0
                : ex.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eE = (0, m.p)({ location: 'UserProfileModalV2' }),
        eA = o.useMemo(() => (null != ec ? ec : (0, b.Z)()), [ec]),
        ew = (0, K.Z)({
            user: n,
            currentUser: $
        }),
        eT = (0, y.Y)({ userId: n.id }),
        eS = (0, g.vh)(n.id),
        eZ = (0, E.Z)(n.id),
        eC = (0, p.Dt)(),
        eG = X.intl.format(X.t.KRe1Fh, { name: eh });
    return (0, r.jsx)(f.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eb,
            openedAt: es,
            fetchStartedAt: null == ex ? void 0 : ex.fetchStartedAt,
            fetchEndedAt: null == ex ? void 0 : ex.fetchEndedAt,
            isLoaded: null == ex ? void 0 : ex.isLoaded,
            children: (0, r.jsx)(A.NJ, {
                value: eO,
                children: (0, r.jsxs)(a.Y0X, {
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: ea,
                    'aria-labelledby': eC,
                    parentComponent: 'UserProfileModalV2',
                    children: [
                        ep
                            ? (0, r.jsxs)('div', {
                                  className: Q.previewBar,
                                  children: [
                                      (0, r.jsxs)(a.X6q, {
                                          id: eC,
                                          variant: 'heading-sm/normal',
                                          color: 'text-primary',
                                          children: [
                                              (0, r.jsx)(a.nn4, { children: ''.concat(X.intl.string(X.t.apViam), ': ').concat(eG) }),
                                              (0, r.jsx)('span', {
                                                  'aria-hidden': !0,
                                                  children: X.intl.string(X.t.apViam)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(a.zxk, {
                                          size: 'sm',
                                          variant: 'secondary',
                                          text: X.intl.string(X.t.ojM1xM),
                                          onClick: ed,
                                          'aria-label': X.intl.string(X.t.cpT0Cg)
                                      })
                                  ]
                              })
                            : (0, r.jsx)(a.nn4, {
                                  children: (0, r.jsx)(a.H, {
                                      id: eC,
                                      children: eG
                                  })
                              }),
                        (0, r.jsx)(a.y5t, {
                            children: (0, r.jsxs)(B.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ex,
                                themeType: z.lY.MODAL_V2,
                                children: [
                                    null != eN &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eN, ')') }
                                        }),
                                    null != eO.interactionType &&
                                        (0, r.jsx)(l.animated.div, {
                                            style: ej,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == ex ? void 0 : ex.profileEffectId) != null ? eg : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(S.Z, {
                                                        user: n,
                                                        displayProfile: ex,
                                                        themeType: z.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(R.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(w.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: ex,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: z.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(F.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: z.lY.MODAL_V2,
                                                        hasEntered: ea === a.Dvm.ENTERED,
                                                        prompt: eE && n.id === $.id ? eA : null,
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
                                                        nickname: h.ZP.useName(null == ex ? void 0 : ex.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(G.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                                        tags: (0, r.jsx)(T.Z, {
                                                            displayProfile: ex,
                                                            themeType: z.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    ev === q.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(B.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(k.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId: null != (t = null == ex ? void 0 : ex.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    eS.map((e) => {
                                                        var t;
                                                        let { applicationId: o } = e;
                                                        return (0, r.jsx)(
                                                            B.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(k.Z, {
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
                                                        (0, r.jsx)(B.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(J.Z, {
                                                                heading: X.intl.string(X.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, r.jsx)(a.Mgn, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, r.jsx)(j.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, r.jsx)(C.Z, {
                                                            isPremiumUser: (0, v.I5)($),
                                                            onInteraction: ed
                                                        }),
                                                    (0, r.jsx)(M.Z, {
                                                        user: n,
                                                        className: Q.profileBanner
                                                    }),
                                                    (0, r.jsx)('div', {
                                                        className: Q.profileButtons,
                                                        children: (0, r.jsx)(Y.Z, {
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
                                                        (0, r.jsx)(Z.Z, {
                                                            userBio: ex.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eT.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: X.intl.string(X.t['Uv/eT0']),
                                                            children: (0, r.jsx)(L.Z, { applicationIds: eT })
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: X.intl.string(X.t.a6XYDw),
                                                        children: (0, r.jsx)(D.Z, {
                                                            userId: n.id,
                                                            guildId: null == ex ? void 0 : ex.guildId,
                                                            tooltipDelay: z.vB
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
                                                            scrollIntoView: ei === z.Tb.ROLES
                                                        }),
                                                    eZ.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: X.intl.string(X.t['3fe7U1']),
                                                            scrollIntoView: ei === z.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(W.Z, {
                                                                connections: eZ,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: X.intl.string(X.t['mQKv+v']),
                                                        scrollIntoView: ei === z.Tb.NOTE,
                                                        children: (0, r.jsx)(c.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: ei === z.Tb.NOTE,
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
                                                                    })({ action: 'SET_NOTE' }, eb)
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
                                    (0, r.jsx)(H.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ex,
                                        guildId: ee,
                                        channelId: et,
                                        items: ew,
                                        initialSection: el,
                                        initialSubsection: ei,
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
