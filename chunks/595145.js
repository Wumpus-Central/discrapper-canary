(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(855659),
    a = n(442837),
    l = n(481060),
    c = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    m = n(313201),
    p = n(368326),
    g = n(429467),
    x = n(320582),
    b = n(246016),
    _ = n(680295),
    h = n(189156),
    j = n(699516),
    y = n(246946),
    I = n(5192),
    v = n(111361),
    O = n(785717),
    N = n(221292),
    P = n(687158),
    T = n(771362),
    Z = n(510659),
    A = n(113557),
    C = n(648052),
    w = n(867176),
    E = n(280885),
    S = n(537006),
    L = n(681837),
    B = n(78806),
    R = n(91433),
    G = n(451834),
    k = n(900927),
    D = n(944043),
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
    X = n(981631),
    q = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: er, sessionId: eo, initialSection: ei, initialSubsection: ea, transitionState: el, customStatusPrompt: ec, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [], disableActionsForPreview: em = !1 } = e,
        { analyticsLocations: ep } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eg = (0, O.ZB)({
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
        eb = (0, s.Z)(ex),
        e_ = (0, Z.$m)(),
        eh = (0, l.q_F)({
            opacity: +(null != e_.interactionType),
            config: { duration: 150 }
        }),
        ej = o.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(ej);
    let ey = (0, P.ZP)(n.id, eu ? ee : void 0),
        eI = I.ZP.useName(null == ey ? void 0 : ey.guildId, et, n),
        { relationshipType: ev, originApplicationId: eO } = (0, a.cj)([j.Z], () => ({
            relationshipType: j.Z.getRelationshipType(n.id),
            originApplicationId: j.Z.getOriginApplicationId(n.id)
        })),
        eN = (0, a.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eP =
            null == ey
                ? void 0
                : ey.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eT = (0, p.p)({ location: 'UserProfileModalV2' }),
        eZ = o.useMemo(() => (null != ec ? ec : (0, g.Z)()), [ec]),
        eA = (0, J.Z)({
            user: n,
            currentUser: $
        }),
        eC = (0, b.Y)({ userId: n.id }),
        ew = (0, x.vh)(n.id),
        eE = (0, T.Z)(n.id),
        eS = (0, m.Dt)(),
        eL = q.intl.format(q.t.KRe1Fh, { name: eI });
    return (0, r.jsx)(f.Gt, {
        value: ep,
        children: (0, r.jsx)(O.Mt, {
            value: eg,
            openedAt: es,
            fetchStartedAt: null == ey ? void 0 : ey.fetchStartedAt,
            fetchEndedAt: null == ey ? void 0 : ey.fetchEndedAt,
            isLoaded: null == ey ? void 0 : ey.isLoaded,
            children: (0, r.jsx)(Z.NJ, {
                value: e_,
                children: (0, r.jsxs)(l.Y0X, {
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: el,
                    'aria-labelledby': eS,
                    parentComponent: 'UserProfileModalV2',
                    children: [
                        em
                            ? (0, r.jsxs)('div', {
                                  className: Q.previewBar,
                                  children: [
                                      (0, r.jsxs)(l.X6q, {
                                          id: eS,
                                          variant: 'heading-sm/normal',
                                          color: 'text-primary',
                                          children: [
                                              (0, r.jsx)(l.nn4, { children: ''.concat(q.intl.string(q.t.apViam), ': ').concat(eL) }),
                                              (0, r.jsx)('span', {
                                                  'aria-hidden': !0,
                                                  children: q.intl.string(q.t.apViam)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(l.zxk, {
                                          size: 'sm',
                                          variant: 'secondary',
                                          text: q.intl.string(q.t.ojM1xM),
                                          onClick: ed,
                                          'aria-label': q.intl.string(q.t.cpT0Cg)
                                      })
                                  ]
                              })
                            : (0, r.jsx)(l.nn4, {
                                  children: (0, r.jsx)(l.H, {
                                      id: eS,
                                      children: eL
                                  })
                              }),
                        (0, r.jsx)(l.y5t, {
                            children: (0, r.jsxs)(U.Z, {
                                className: em ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ey,
                                themeType: K.lY.MODAL_V2,
                                children: [
                                    null != eP &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eP, ')') }
                                        }),
                                    null != e_.interactionType &&
                                        (0, r.jsx)(i.animated.div, {
                                            style: eh,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == ey ? void 0 : ey.profileEffectId) != null ? ex : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(w.Z, {
                                                        user: n,
                                                        displayProfile: ey,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(G.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(A.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: ey,
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
                                                        hasEntered: el === l.Dvm.ENTERED,
                                                        prompt: eT && n.id === $.id ? eZ : null,
                                                        disableToolbar: em
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)(l.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(M.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: I.ZP.useName(null == ey ? void 0 : ey.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(L.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == ey ? void 0 : ey.pronouns,
                                                        tags: (0, r.jsx)(C.Z, {
                                                            displayProfile: ey,
                                                            themeType: K.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    ev === X.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(U.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(R.Z, {
                                                                user: n,
                                                                applicationId: eO,
                                                                guildId: null != (t = null == ey ? void 0 : ey.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    ew.map((e) => {
                                                        var t;
                                                        let { applicationId: o } = e;
                                                        return (0, r.jsx)(
                                                            U.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(R.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == ey ? void 0 : ey.guildId) ? t : void 0,
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
                                                                heading: q.intl.string(q.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, r.jsx)(l.Mgn, {
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
                                                    (0, r.jsx)(D.Z, {
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
                                                            displayProfile: ey,
                                                            relationshipType: ev,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == ey ? void 0 : ey.bio) != null &&
                                                        (null == ey ? void 0 : ey.bio) !== '' &&
                                                        !eN &&
                                                        (0, r.jsx)(E.Z, {
                                                            userBio: ey.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eC.length > 0 &&
                                                        (0, r.jsx)(H.Z, {
                                                            heading: q.intl.string(q.t['Uv/eT0']),
                                                            children: (0, r.jsx)(B.Z, { applicationIds: eC })
                                                        }),
                                                    (0, r.jsx)(H.Z, {
                                                        heading: q.intl.string(q.t.a6XYDw),
                                                        children: (0, r.jsx)(k.Z, {
                                                            userId: n.id,
                                                            guildId: null == ey ? void 0 : ey.guildId,
                                                            tooltipDelay: K.vB
                                                        })
                                                    }),
                                                    (null == ey ? void 0 : ey.guildId) != null &&
                                                        (0, r.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ey.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ea === K.Tb.ROLES
                                                        }),
                                                    eE.length > 0 &&
                                                        (0, r.jsx)(H.Z, {
                                                            heading: q.intl.string(q.t['3fe7U1']),
                                                            scrollIntoView: ea === K.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(Y.Z, {
                                                                connections: eE,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(H.Z, {
                                                        heading: q.intl.string(q.t['mQKv+v']),
                                                        scrollIntoView: ea === K.Tb.NOTE,
                                                        children: (0, r.jsx)(c.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: ea === K.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, N.pQ)(
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
                                            (null == ey ? void 0 : ey.profileEffectId) != null &&
                                                (0, r.jsx)(_.Z, {
                                                    profileEffectId: null == ey ? void 0 : ey.profileEffectId,
                                                    isHovering: eb
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(z.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ey,
                                        guildId: ee,
                                        channelId: et,
                                        items: eA,
                                        initialSection: ei,
                                        initialSubsection: ea,
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
