(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(126663),
    i = n(442837),
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
    j = n(246016),
    h = n(680295),
    y = n(189156),
    v = n(699516),
    O = n(246946),
    x = n(5192),
    _ = n(111361),
    I = n(785717),
    P = n(221292),
    Z = n(687158),
    E = n(771362),
    N = n(510659),
    T = n(113557),
    A = n(648052),
    S = n(867176),
    w = n(280885),
    C = n(537006),
    G = n(681837),
    L = n(78806),
    M = n(91433),
    R = n(451834),
    D = n(900927),
    k = n(944043),
    U = n(502762),
    B = n(530),
    F = n(4517),
    V = n(179828),
    Y = n(993160),
    W = n(574887),
    J = n(693408),
    H = n(661462),
    K = n(768111),
    z = n(228168),
    X = n(981631),
    q = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: er, sessionId: el, initialSection: eo, initialSubsection: ei, transitionState: ea, customStatusPrompt: ec, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: ep = !1 } = e,
        { analyticsLocations: em } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eg = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: el,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            showGuildProfile: eu
        }),
        eb = l.useRef(null),
        ej = (0, s.Z)(eb),
        eh = (0, N.$m)(),
        ey = (0, a.q_F)({
            opacity: +(null != eh.interactionType),
            config: { duration: 150 }
        }),
        ev = l.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(ev);
    let eO = (0, Z.ZP)(n.id, eu ? ee : void 0),
        ex = x.ZP.useName(null == eO ? void 0 : eO.guildId, et, n),
        { relationshipType: e_, originApplicationId: eI } = (0, i.cj)([v.Z], () => ({
            relationshipType: v.Z.getRelationshipType(n.id),
            originApplicationId: v.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, i.e7)([O.Z], () => O.Z.hidePersonalInformation),
        eZ =
            null == eO
                ? void 0
                : eO.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eE = (0, m.p)({ location: 'UserProfileModalV2' }),
        eN = l.useMemo(() => (null != ec ? ec : (0, g.Z)()), [ec]),
        eT = (0, K.Z)({
            user: n,
            currentUser: $
        }),
        eA = (0, j.Y)({ userId: n.id }),
        eS = (0, b.vh)(n.id),
        ew = (0, E.Z)(n.id),
        eC = (0, p.Dt)(),
        eG = q.intl.format(q.t.KRe1Fh, { name: ex });
    return (0, r.jsx)(f.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eg,
            openedAt: es,
            fetchStartedAt: null == eO ? void 0 : eO.fetchStartedAt,
            fetchEndedAt: null == eO ? void 0 : eO.fetchEndedAt,
            isLoaded: null == eO ? void 0 : eO.isLoaded,
            children: (0, r.jsx)(N.NJ, {
                value: eh,
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
                                              (0, r.jsx)(a.nn4, { children: ''.concat(q.intl.string(q.t.apViam), ': ').concat(eG) }),
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
                                      id: eC,
                                      children: eG
                                  })
                              }),
                        (0, r.jsx)(a.y5t, {
                            children: (0, r.jsxs)(U.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: eO,
                                themeType: z.lY.MODAL_V2,
                                children: [
                                    null != eZ &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eZ, ')') }
                                        }),
                                    null != eh.interactionType &&
                                        (0, r.jsx)(o.animated.div, {
                                            style: ey,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == eO ? void 0 : eO.profileEffectId) != null ? eb : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(S.Z, {
                                                        user: n,
                                                        displayProfile: eO,
                                                        themeType: z.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(R.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(T.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: eO,
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
                                                        prompt: eE && n.id === $.id ? eN : null,
                                                        disableToolbar: ep
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(B.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: x.ZP.useName(null == eO ? void 0 : eO.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(G.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == eO ? void 0 : eO.pronouns,
                                                        tags: (0, r.jsx)(A.Z, {
                                                            displayProfile: eO,
                                                            themeType: z.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    e_ === X.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(U.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(M.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId: null != (t = null == eO ? void 0 : eO.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    eS.map((e) => {
                                                        var t;
                                                        let { applicationId: l } = e;
                                                        return (0, r.jsx)(
                                                            U.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(M.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == eO ? void 0 : eO.guildId) ? t : void 0,
                                                                    channelId: et,
                                                                    isGameRelationship: !0,
                                                                    applicationId: l,
                                                                    className: Q.profileBanner
                                                                })
                                                            },
                                                            l
                                                        );
                                                    }),
                                                    n.isProvisional &&
                                                        (0, r.jsx)(U.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(J.Z, {
                                                                heading: q.intl.string(q.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, r.jsx)(a.Mgn, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, r.jsx)(y.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, r.jsx)(C.Z, {
                                                            isPremiumUser: (0, _.I5)($),
                                                            onInteraction: ed
                                                        }),
                                                    (0, r.jsx)(k.Z, {
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
                                                            displayProfile: eO,
                                                            relationshipType: e_,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == eO ? void 0 : eO.bio) != null &&
                                                        (null == eO ? void 0 : eO.bio) !== '' &&
                                                        !eP &&
                                                        (0, r.jsx)(w.Z, {
                                                            userBio: eO.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eA.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: q.intl.string(q.t['Uv/eT0']),
                                                            children: (0, r.jsx)(L.Z, { applicationIds: eA })
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: q.intl.string(q.t.a6XYDw),
                                                        children: (0, r.jsx)(D.Z, {
                                                            userId: n.id,
                                                            guildId: null == eO ? void 0 : eO.guildId,
                                                            tooltipDelay: z.vB
                                                        })
                                                    }),
                                                    (null == eO ? void 0 : eO.guildId) != null &&
                                                        (0, r.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: eO.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ei === z.Tb.ROLES
                                                        }),
                                                    ew.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: q.intl.string(q.t['3fe7U1']),
                                                            scrollIntoView: ei === z.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(W.Z, {
                                                                connections: ew,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: q.intl.string(q.t['mQKv+v']),
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
                                                                    })({ action: 'SET_NOTE' }, eg)
                                                                )
                                                        })
                                                    })
                                                ]
                                            }),
                                            (null == eO ? void 0 : eO.profileEffectId) != null &&
                                                (0, r.jsx)(h.Z, {
                                                    profileEffectId: null == eO ? void 0 : eO.profileEffectId,
                                                    isHovering: ej
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(H.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: eO,
                                        guildId: ee,
                                        channelId: et,
                                        items: eT,
                                        initialSection: eo,
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
