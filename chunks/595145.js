(n.d(t, { Z: () => $ }), n(388685));
var o = n(255367),
    r = n(73800),
    i = n(652141),
    c = n(442837),
    l = n(481060),
    a = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(313201),
    m = n(368326),
    b = n(429467),
    x = n(320582),
    _ = n(246016),
    h = n(680295),
    y = n(189156),
    g = n(699516),
    j = n(246946),
    I = n(5192),
    v = n(111361),
    O = n(785717),
    P = n(221292),
    N = n(687158),
    A = n(771362),
    T = n(510659),
    C = n(113557),
    Z = n(648052),
    w = n(867176),
    E = n(280885),
    S = n(537006),
    B = n(681837),
    D = n(78806),
    L = n(91433),
    U = n(451834),
    k = n(900927),
    M = n(944043),
    R = n(502762),
    V = n(530),
    G = n(4517),
    F = n(179828),
    H = n(993160),
    Y = n(574887),
    W = n(693408),
    K = n(661462),
    z = n(768111),
    X = n(228168),
    q = n(981631),
    J = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: eo, sessionId: er, initialSection: ei, initialSubsection: ec, transitionState: el, customStatusPrompt: ea, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: ep = !1 } = e,
        { analyticsLocations: em } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, O.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: er,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: eo,
            showGuildProfile: eu
        }),
        ex = r.useRef(null),
        e_ = (0, s.Z)(ex),
        eh = (0, T.$m)(),
        ey = (0, l.q_F)({
            opacity: +(null != eh.interactionType),
            config: { duration: 150 }
        }),
        eg = r.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(eg);
    let ej = (0, N.ZP)(n.id, eu ? ee : void 0),
        eI = I.ZP.useName(null == ej ? void 0 : ej.guildId, et, n),
        { relationshipType: ev, originApplicationId: eO } = (0, c.cj)([g.Z], () => ({
            relationshipType: g.Z.getRelationshipType(n.id),
            originApplicationId: g.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        eN =
            null == ej
                ? void 0
                : ej.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eA = (0, m.p)({ location: 'UserProfileModalV2' }),
        eT = r.useMemo(() => (null != ea ? ea : (0, b.Z)()), [ea]),
        eC = (0, z.Z)({
            user: n,
            currentUser: $
        }),
        eZ = (0, _.Y)({ userId: n.id }),
        ew = (0, x.vh)(n.id),
        eE = (0, A.Z)(n.id),
        eS = (0, p.Dt)(),
        eB = J.intl.format(J.t.KRe1Fh, { name: eI });
    return (0, o.jsx)(f.Gt, {
        value: em,
        children: (0, o.jsx)(O.Mt, {
            value: eb,
            openedAt: es,
            fetchStartedAt: null == ej ? void 0 : ej.fetchStartedAt,
            fetchEndedAt: null == ej ? void 0 : ej.fetchEndedAt,
            isLoaded: null == ej ? void 0 : ej.isLoaded,
            children: (0, o.jsx)(T.NJ, {
                value: eh,
                children: (0, o.jsxs)(l.Y0X, {
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: el,
                    'aria-labelledby': eS,
                    parentComponent: 'UserProfileModalV2',
                    children: [
                        ep
                            ? (0, o.jsxs)('div', {
                                  className: Q.previewBar,
                                  children: [
                                      (0, o.jsxs)(l.X6q, {
                                          id: eS,
                                          variant: 'heading-sm/normal',
                                          color: 'text-primary',
                                          children: [
                                              (0, o.jsx)(l.nn4, { children: ''.concat(J.intl.string(J.t.apViam), ': ').concat(eB) }),
                                              (0, o.jsx)('span', {
                                                  'aria-hidden': !0,
                                                  children: J.intl.string(J.t.apViam)
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(l.zxk, {
                                          size: 'sm',
                                          variant: 'secondary',
                                          text: J.intl.string(J.t.ojM1xM),
                                          onClick: ed,
                                          'aria-label': J.intl.string(J.t.cpT0Cg)
                                      })
                                  ]
                              })
                            : (0, o.jsx)(l.nn4, {
                                  children: (0, o.jsx)(l.H, {
                                      id: eS,
                                      children: eB
                                  })
                              }),
                        (0, o.jsx)(l.y5t, {
                            children: (0, o.jsxs)(R.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ej,
                                themeType: X.lY.MODAL_V2,
                                children: [
                                    null != eN &&
                                        (0, o.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eN, ')') }
                                        }),
                                    null != eh.interactionType &&
                                        (0, o.jsx)(i.animated.div, {
                                            style: ey,
                                            className: Q.backdrop
                                        }),
                                    (0, o.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == ej ? void 0 : ej.profileEffectId) != null ? ex : void 0,
                                        children: [
                                            (0, o.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, o.jsx)(w.Z, {
                                                        user: n,
                                                        displayProfile: ej,
                                                        themeType: X.lY.MODAL_V2
                                                    }),
                                                    (0, o.jsx)(U.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, o.jsx)(C.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: ej,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: X.lY.MODAL_V2
                                                    }),
                                                    (0, o.jsx)(G.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: X.lY.MODAL_V2,
                                                        hasEntered: el === l.Dvm.ENTERED,
                                                        prompt: eA && n.id === $.id ? eT : null,
                                                        disableToolbar: ep
                                                    })
                                                ]
                                            }),
                                            (0, o.jsxs)(l.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, o.jsx)(V.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: I.ZP.useName(null == ej ? void 0 : ej.guildId, et, n),
                                                        nicknameIcons: (0, o.jsx)(B.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == ej ? void 0 : ej.pronouns,
                                                        tags: (0, o.jsx)(Z.Z, {
                                                            displayProfile: ej,
                                                            themeType: X.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    ev === q.OGo.PENDING_INCOMING &&
                                                        (0, o.jsx)(R.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, o.jsx)(L.Z, {
                                                                user: n,
                                                                applicationId: eO,
                                                                guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    ew.map((e) => {
                                                        var t;
                                                        let { applicationId: r } = e;
                                                        return (0, o.jsx)(
                                                            R.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, o.jsx)(L.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
                                                                    channelId: et,
                                                                    isGameRelationship: !0,
                                                                    applicationId: r,
                                                                    className: Q.profileBanner
                                                                })
                                                            },
                                                            r
                                                        );
                                                    }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(R.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, o.jsx)(W.Z, {
                                                                heading: J.intl.string(J.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, o.jsx)(l.P4T, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, o.jsx)(y.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, o.jsx)(S.Z, {
                                                            isPremiumUser: (0, v.I5)($),
                                                            onInteraction: ed
                                                        }),
                                                    (0, o.jsx)(M.Z, {
                                                        user: n,
                                                        className: Q.profileBanner
                                                    }),
                                                    (0, o.jsx)('div', {
                                                        className: Q.profileButtons,
                                                        children: (0, o.jsx)(H.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ee,
                                                            channelId: et,
                                                            displayProfile: ej,
                                                            relationshipType: ev,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == ej ? void 0 : ej.bio) != null &&
                                                        (null == ej ? void 0 : ej.bio) !== '' &&
                                                        !eP &&
                                                        (0, o.jsx)(E.Z, {
                                                            userBio: ej.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eZ.length > 0 &&
                                                        (0, o.jsx)(W.Z, {
                                                            heading: J.intl.string(J.t['Uv/eT0']),
                                                            children: (0, o.jsx)(D.Z, { applicationIds: eZ })
                                                        }),
                                                    (0, o.jsx)(W.Z, {
                                                        heading: J.intl.string(J.t.a6XYDw),
                                                        children: (0, o.jsx)(k.Z, {
                                                            userId: n.id,
                                                            guildId: null == ej ? void 0 : ej.guildId,
                                                            tooltipDelay: X.vB
                                                        })
                                                    }),
                                                    (null == ej ? void 0 : ej.guildId) != null &&
                                                        (0, o.jsx)(F.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ej.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ec === X.Tb.ROLES
                                                        }),
                                                    eE.length > 0 &&
                                                        (0, o.jsx)(W.Z, {
                                                            heading: J.intl.string(J.t['3fe7U1']),
                                                            scrollIntoView: ec === X.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(Y.Z, {
                                                                connections: eE,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, o.jsx)(W.Z, {
                                                        heading: J.intl.string(J.t['mQKv+v']),
                                                        scrollIntoView: ec === X.Tb.NOTE,
                                                        children: (0, o.jsx)(a.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: ec === X.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, P.pQ)(
                                                                    (function (e) {
                                                                        for (var t = 1; t < arguments.length; t++) {
                                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                                o = Object.keys(n);
                                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                                (o = o.concat(
                                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                    })
                                                                                )),
                                                                                o.forEach(function (t) {
                                                                                    var o;
                                                                                    ((o = n[t]),
                                                                                        t in e
                                                                                            ? Object.defineProperty(e, t, {
                                                                                                  value: o,
                                                                                                  enumerable: !0,
                                                                                                  configurable: !0,
                                                                                                  writable: !0
                                                                                              })
                                                                                            : (e[t] = o));
                                                                                }));
                                                                        }
                                                                        return e;
                                                                    })({ action: 'SET_NOTE' }, eb)
                                                                )
                                                        })
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
                                    (0, o.jsx)(K.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ej,
                                        guildId: ee,
                                        channelId: et,
                                        items: eC,
                                        initialSection: ei,
                                        initialSubsection: ec,
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
