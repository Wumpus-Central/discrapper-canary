(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(66546),
    l = n(442837),
    a = n(481060),
    c = n(666520),
    s = n(727637),
    u = n(616780),
    d = n(100527),
    f = n(906732),
    p = n(313201),
    m = n(368326),
    b = n(429467),
    g = n(320582),
    y = n(246016),
    j = n(680295),
    O = n(189156),
    x = n(699516),
    h = n(246946),
    _ = n(5192),
    v = n(111361),
    I = n(785717),
    P = n(221292),
    w = n(687158),
    N = n(771362),
    Z = n(510659),
    T = n(113557),
    E = n(648052),
    A = n(867176),
    S = n(280885),
    C = n(537006),
    L = n(681837),
    k = n(78806),
    D = n(91433),
    B = n(451834),
    G = n(900927),
    R = n(944043),
    U = n(502762),
    M = n(530),
    F = n(4517),
    V = n(179828),
    W = n(993160),
    Y = n(574887),
    H = n(693408),
    z = n(661462),
    J = n(768111),
    K = n(228168),
    q = n(981631),
    X = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: er, sessionId: eo, initialSection: ei, initialSubsection: el, transitionState: ea, customStatusPrompt: ec, openedAt: es, onClose: eu, showGuildProfile: ed = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: ep = !1 } = e,
        { analyticsLocations: em } = (0, f.ZP)([...ef, d.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: eo,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            showGuildProfile: ed
        }),
        eg = o.useRef(null),
        ey = (0, s.Z)(eg),
        ej = (0, Z.$m)(),
        eO = (0, a.q_F)({
            opacity: +(null != ej.interactionType),
            config: { duration: 150 }
        }),
        ex = o.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, u.$)(ex);
    let eh = (0, w.ZP)(n.id, ed ? ee : void 0),
        e_ = _.ZP.useName(null == eh ? void 0 : eh.guildId, et, n),
        { relationshipType: ev, originApplicationId: eI } = (0, l.cj)([x.Z], () => ({
            relationshipType: x.Z.getRelationshipType(n.id),
            originApplicationId: x.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, l.e7)([h.Z], () => h.Z.hidePersonalInformation),
        ew =
            null == eh
                ? void 0
                : eh.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eN = (0, m.p)({ location: 'UserProfileModalV2' }),
        eZ = o.useMemo(() => (null != ec ? ec : (0, b.Z)()), [ec]),
        eT = (0, J.Z)({
            user: n,
            currentUser: $
        }),
        eE = (0, y.Y)({ userId: n.id }),
        eA = (0, g.vh)(n.id),
        eS = (0, N.Z)(n.id),
        eC = (0, p.Dt)(),
        eL = X.intl.format(X.t.KRe1Fh, { name: e_ });
    return (0, r.jsx)(f.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eb,
            openedAt: es,
            fetchStartedAt: null == eh ? void 0 : eh.fetchStartedAt,
            fetchEndedAt: null == eh ? void 0 : eh.fetchEndedAt,
            isLoaded: null == eh ? void 0 : eh.isLoaded,
            children: (0, r.jsx)(Z.NJ, {
                value: ej,
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
                                              (0, r.jsx)(a.nn4, { children: ''.concat(X.intl.string(X.t.apViam), ': ').concat(eL) }),
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
                                          onClick: eu,
                                          'aria-label': X.intl.string(X.t.cpT0Cg)
                                      })
                                  ]
                              })
                            : (0, r.jsx)(a.nn4, {
                                  children: (0, r.jsx)(a.H, {
                                      id: eC,
                                      children: eL
                                  })
                              }),
                        (0, r.jsx)(a.y5t, {
                            children: (0, r.jsxs)(U.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: eh,
                                themeType: K.lY.MODAL_V2,
                                children: [
                                    null != ew &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(ew, ')') }
                                        }),
                                    null != ej.interactionType &&
                                        (0, r.jsx)(i.animated.div, {
                                            style: eO,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == eh ? void 0 : eh.profileEffectId) != null ? eg : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(A.Z, {
                                                        user: n,
                                                        displayProfile: eh,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(B.Z, {
                                                        userId: n.id,
                                                        onClose: eu,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(T.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: eh,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(F.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: K.lY.MODAL_V2,
                                                        hasEntered: ea === a.Dvm.ENTERED,
                                                        prompt: eN && n.id === $.id ? eZ : null,
                                                        disableToolbar: ep
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(M.Z, {
                                                        user: n,
                                                        onClose: eu,
                                                        nickname: _.ZP.useName(null == eh ? void 0 : eh.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(L.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == eh ? void 0 : eh.pronouns,
                                                        tags: (0, r.jsx)(E.Z, {
                                                            displayProfile: eh,
                                                            themeType: K.lY.MODAL_V2,
                                                            onClose: eu
                                                        })
                                                    }),
                                                    ev === q.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(U.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(D.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId: null != (t = null == eh ? void 0 : eh.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    eA.map((e) => {
                                                        var t;
                                                        let { applicationId: o } = e;
                                                        return (0, r.jsx)(
                                                            U.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(D.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == eh ? void 0 : eh.guildId) ? t : void 0,
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
                                                        (0, r.jsx)(U.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(H.Z, {
                                                                heading: X.intl.string(X.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, r.jsx)(a.Mgn, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, r.jsx)(O.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, r.jsx)(C.Z, {
                                                            isPremiumUser: (0, v.I5)($),
                                                            onInteraction: eu
                                                        }),
                                                    (0, r.jsx)(R.Z, {
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
                                                            displayProfile: eh,
                                                            relationshipType: ev,
                                                            onClose: eu
                                                        })
                                                    }),
                                                    (null == eh ? void 0 : eh.bio) != null &&
                                                        (null == eh ? void 0 : eh.bio) !== '' &&
                                                        !eP &&
                                                        (0, r.jsx)(S.Z, {
                                                            userBio: eh.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eE.length > 0 &&
                                                        (0, r.jsx)(H.Z, {
                                                            heading: X.intl.string(X.t['Uv/eT0']),
                                                            children: (0, r.jsx)(k.Z, { applicationIds: eE })
                                                        }),
                                                    (0, r.jsx)(H.Z, {
                                                        heading: X.intl.string(X.t.a6XYDw),
                                                        children: (0, r.jsx)(G.Z, {
                                                            userId: n.id,
                                                            guildId: null == eh ? void 0 : eh.guildId,
                                                            tooltipDelay: K.vB
                                                        })
                                                    }),
                                                    (null == eh ? void 0 : eh.guildId) != null &&
                                                        (0, r.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: eh.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: el === K.Tb.ROLES
                                                        }),
                                                    eS.length > 0 &&
                                                        (0, r.jsx)(H.Z, {
                                                            heading: X.intl.string(X.t['3fe7U1']),
                                                            scrollIntoView: el === K.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(Y.Z, {
                                                                connections: eS,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(H.Z, {
                                                        heading: X.intl.string(X.t['mQKv+v']),
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
                                                                    })({ action: 'SET_NOTE' }, eb)
                                                                )
                                                        })
                                                    })
                                                ]
                                            }),
                                            (null == eh ? void 0 : eh.profileEffectId) != null &&
                                                (0, r.jsx)(j.Z, {
                                                    profileEffectId: null == eh ? void 0 : eh.profileEffectId,
                                                    isHovering: ey
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(z.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: eh,
                                        guildId: ee,
                                        channelId: et,
                                        items: eT,
                                        initialSection: ei,
                                        initialSubsection: el,
                                        onClose: eu
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
