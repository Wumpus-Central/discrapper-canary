(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(652141),
    c = n(442837),
    l = n(481060),
    a = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    m = n(313201),
    p = n(368326),
    b = n(429467),
    x = n(320582),
    h = n(246016),
    _ = n(680295),
    g = n(189156),
    y = n(699516),
    j = n(246946),
    v = n(5192),
    I = n(111361),
    O = n(785717),
    P = n(221292),
    N = n(687158),
    A = n(771362),
    T = n(510659),
    Z = n(113557),
    C = n(648052),
    w = n(867176),
    S = n(280885),
    E = n(537006),
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
    z = n(661462),
    K = n(768111),
    X = n(228168),
    q = n(981631),
    J = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: er, sessionId: eo, initialSection: ei, initialSubsection: ec, transitionState: el, customStatusPrompt: ea, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: em = !1 } = e,
        { analyticsLocations: ep } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, O.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: eo,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            showGuildProfile: eu
        }),
        ex = o.useRef(null),
        eh = (0, s.Z)(ex),
        e_ = (0, T.$m)(),
        eg = (0, l.q_F)({
            opacity: +(null != e_.interactionType),
            config: { duration: 150 }
        }),
        ey = o.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(ey);
    let ej = (0, N.ZP)(n.id, eu ? ee : void 0),
        ev = v.ZP.useName(null == ej ? void 0 : ej.guildId, et, n),
        { relationshipType: eI, originApplicationId: eO } = (0, c.cj)([y.Z], () => ({
            relationshipType: y.Z.getRelationshipType(n.id),
            originApplicationId: y.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        eN =
            null == ej
                ? void 0
                : ej.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eA = (0, p.p)({ location: 'UserProfileModalV2' }),
        eT = o.useMemo(() => (null != ea ? ea : (0, b.Z)()), [ea]),
        eZ = (0, K.Z)({
            user: n,
            currentUser: $
        }),
        eC = (0, h.Y)({ userId: n.id }),
        ew = (0, x.vh)(n.id),
        eS = (0, A.Z)(n.id),
        eE = (0, m.Dt)(),
        eB = J.intl.format(J.t.KRe1Fh, { name: ev });
    return (0, r.jsx)(f.Gt, {
        value: ep,
        children: (0, r.jsx)(O.Mt, {
            value: eb,
            openedAt: es,
            fetchStartedAt: null == ej ? void 0 : ej.fetchStartedAt,
            fetchEndedAt: null == ej ? void 0 : ej.fetchEndedAt,
            isLoaded: null == ej ? void 0 : ej.isLoaded,
            children: (0, r.jsx)(T.NJ, {
                value: e_,
                children: (0, r.jsxs)(l.Y0X, {
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: el,
                    'aria-labelledby': eE,
                    parentComponent: 'UserProfileModalV2',
                    children: [
                        em
                            ? (0, r.jsxs)('div', {
                                  className: Q.previewBar,
                                  children: [
                                      (0, r.jsxs)(l.X6q, {
                                          id: eE,
                                          variant: 'heading-sm/normal',
                                          color: 'text-primary',
                                          children: [
                                              (0, r.jsx)(l.nn4, { children: ''.concat(J.intl.string(J.t.apViam), ': ').concat(eB) }),
                                              (0, r.jsx)('span', {
                                                  'aria-hidden': !0,
                                                  children: J.intl.string(J.t.apViam)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(l.zxk, {
                                          size: 'sm',
                                          variant: 'secondary',
                                          text: J.intl.string(J.t.ojM1xM),
                                          onClick: ed,
                                          'aria-label': J.intl.string(J.t.cpT0Cg)
                                      })
                                  ]
                              })
                            : (0, r.jsx)(l.nn4, {
                                  children: (0, r.jsx)(l.H, {
                                      id: eE,
                                      children: eB
                                  })
                              }),
                        (0, r.jsx)(l.y5t, {
                            children: (0, r.jsxs)(R.Z, {
                                className: em ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ej,
                                themeType: X.lY.MODAL_V2,
                                children: [
                                    null != eN &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eN, ')') }
                                        }),
                                    null != e_.interactionType &&
                                        (0, r.jsx)(i.animated.div, {
                                            style: eg,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == ej ? void 0 : ej.profileEffectId) != null ? ex : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(w.Z, {
                                                        user: n,
                                                        displayProfile: ej,
                                                        themeType: X.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(U.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(Z.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: ej,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: X.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(G.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: X.lY.MODAL_V2,
                                                        hasEntered: el === l.Dvm.ENTERED,
                                                        prompt: eA && n.id === $.id ? eT : null,
                                                        disableToolbar: em
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)(l.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(V.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: v.ZP.useName(null == ej ? void 0 : ej.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(B.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == ej ? void 0 : ej.pronouns,
                                                        tags: (0, r.jsx)(C.Z, {
                                                            displayProfile: ej,
                                                            themeType: X.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    eI === q.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(R.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(L.Z, {
                                                                user: n,
                                                                applicationId: eO,
                                                                guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    ew.map((e) => {
                                                        var t;
                                                        let { applicationId: o } = e;
                                                        return (0, r.jsx)(
                                                            R.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(L.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
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
                                                        (0, r.jsx)(R.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(W.Z, {
                                                                heading: J.intl.string(J.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, r.jsx)(l.Mgn, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, r.jsx)(g.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, r.jsx)(E.Z, {
                                                            isPremiumUser: (0, I.I5)($),
                                                            onInteraction: ed
                                                        }),
                                                    (0, r.jsx)(M.Z, {
                                                        user: n,
                                                        className: Q.profileBanner
                                                    }),
                                                    (0, r.jsx)('div', {
                                                        className: Q.profileButtons,
                                                        children: (0, r.jsx)(H.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ee,
                                                            channelId: et,
                                                            displayProfile: ej,
                                                            relationshipType: eI,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == ej ? void 0 : ej.bio) != null &&
                                                        (null == ej ? void 0 : ej.bio) !== '' &&
                                                        !eP &&
                                                        (0, r.jsx)(S.Z, {
                                                            userBio: ej.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eC.length > 0 &&
                                                        (0, r.jsx)(W.Z, {
                                                            heading: J.intl.string(J.t['Uv/eT0']),
                                                            children: (0, r.jsx)(D.Z, { applicationIds: eC })
                                                        }),
                                                    (0, r.jsx)(W.Z, {
                                                        heading: J.intl.string(J.t.a6XYDw),
                                                        children: (0, r.jsx)(k.Z, {
                                                            userId: n.id,
                                                            guildId: null == ej ? void 0 : ej.guildId,
                                                            tooltipDelay: X.vB
                                                        })
                                                    }),
                                                    (null == ej ? void 0 : ej.guildId) != null &&
                                                        (0, r.jsx)(F.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ej.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ec === X.Tb.ROLES
                                                        }),
                                                    eS.length > 0 &&
                                                        (0, r.jsx)(W.Z, {
                                                            heading: J.intl.string(J.t['3fe7U1']),
                                                            scrollIntoView: ec === X.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(Y.Z, {
                                                                connections: eS,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(W.Z, {
                                                        heading: J.intl.string(J.t['mQKv+v']),
                                                        scrollIntoView: ec === X.Tb.NOTE,
                                                        children: (0, r.jsx)(a.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: ec === X.Tb.NOTE,
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
                                            (null == ej ? void 0 : ej.profileEffectId) != null &&
                                                (0, r.jsx)(_.Z, {
                                                    profileEffectId: null == ej ? void 0 : ej.profileEffectId,
                                                    isHovering: eh
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(z.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ej,
                                        guildId: ee,
                                        channelId: et,
                                        items: eZ,
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
