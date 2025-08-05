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
    _ = n(680295),
    O = n(189156),
    h = n(699516),
    j = n(246946),
    x = n(5192),
    v = n(111361),
    I = n(785717),
    P = n(221292),
    N = n(687158),
    w = n(771362),
    E = n(510659),
    A = n(113557),
    T = n(648052),
    S = n(867176),
    Z = n(280885),
    C = n(537006),
    G = n(681837),
    L = n(78806),
    k = n(91433),
    M = n(451834),
    R = n(900927),
    D = n(944043),
    B = n(502762),
    F = n(530),
    U = n(4517),
    V = n(179828),
    Y = n(993160),
    W = n(574887),
    J = n(693408),
    H = n(661462),
    z = n(768111),
    K = n(228168),
    X = n(981631),
    q = n(388032),
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
        e_ = (0, E.$m)(),
        eO = (0, a.q_F)({
            opacity: +(null != e_.interactionType),
            config: { duration: 150 }
        }),
        eh = o.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(eh);
    let ej = (0, N.ZP)(n.id, eu ? ee : void 0),
        ex = x.ZP.useName(null == ej ? void 0 : ej.guildId, et, n),
        { relationshipType: ev, originApplicationId: eI } = (0, i.cj)([h.Z], () => ({
            relationshipType: h.Z.getRelationshipType(n.id),
            originApplicationId: h.Z.getOriginApplicationId(n.id)
        })),
        eP = (0, i.e7)([j.Z], () => j.Z.hidePersonalInformation),
        eN =
            null == ej
                ? void 0
                : ej.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        ew = (0, m.p)({ location: 'UserProfileModalV2' }),
        eE = o.useMemo(() => (null != ec ? ec : (0, b.Z)()), [ec]),
        eA = (0, z.Z)({
            user: n,
            currentUser: $
        }),
        eT = (0, y.Y)({ userId: n.id }),
        eS = (0, g.vh)(n.id),
        eZ = (0, w.Z)(n.id),
        eC = (0, p.Dt)(),
        eG = q.intl.format(q.t.KRe1Fh, { name: ex });
    return (0, r.jsx)(f.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eb,
            openedAt: es,
            fetchStartedAt: null == ej ? void 0 : ej.fetchStartedAt,
            fetchEndedAt: null == ej ? void 0 : ej.fetchEndedAt,
            isLoaded: null == ej ? void 0 : ej.isLoaded,
            children: (0, r.jsx)(E.NJ, {
                value: e_,
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
                            children: (0, r.jsxs)(B.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ej,
                                themeType: K.lY.MODAL_V2,
                                children: [
                                    null != eN &&
                                        (0, r.jsx)('div', {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: 'url('.concat(eN, ')') }
                                        }),
                                    null != e_.interactionType &&
                                        (0, r.jsx)(l.animated.div, {
                                            style: eO,
                                            className: Q.backdrop
                                        }),
                                    (0, r.jsxs)('div', {
                                        className: Q.profile,
                                        ref: (null == ej ? void 0 : ej.profileEffectId) != null ? eg : void 0,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(S.Z, {
                                                        user: n,
                                                        displayProfile: ej,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(M.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast
                                                    }),
                                                    (0, r.jsx)(A.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        displayProfile: ej,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: K.lY.MODAL_V2
                                                    }),
                                                    (0, r.jsx)(U.Z, {
                                                        location: 'UserProfileModalV2',
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: K.lY.MODAL_V2,
                                                        hasEntered: ea === a.Dvm.ENTERED,
                                                        prompt: ew && n.id === $.id ? eE : null,
                                                        disableToolbar: ep
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(F.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: x.ZP.useName(null == ej ? void 0 : ej.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(G.Z, {
                                                            size: 'sm',
                                                            userId: n.id
                                                        }),
                                                        nicknameVariant: 'heading-xl/semibold',
                                                        pronouns: null == ej ? void 0 : ej.pronouns,
                                                        tags: (0, r.jsx)(T.Z, {
                                                            displayProfile: ej,
                                                            themeType: K.lY.MODAL_V2,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    ev === X.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(B.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(k.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId: null != (t = null == ej ? void 0 : ej.guildId) ? t : void 0,
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
                                                        (0, r.jsx)(B.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(J.Z, {
                                                                heading: q.intl.string(q.t.Iyka0d),
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
                                                            onInteraction: ed
                                                        }),
                                                    (0, r.jsx)(D.Z, {
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
                                                            displayProfile: ej,
                                                            relationshipType: ev,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == ej ? void 0 : ej.bio) != null &&
                                                        (null == ej ? void 0 : ej.bio) !== '' &&
                                                        !eP &&
                                                        (0, r.jsx)(Z.Z, {
                                                            userBio: ej.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eT.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: q.intl.string(q.t['Uv/eT0']),
                                                            children: (0, r.jsx)(L.Z, { applicationIds: eT })
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: q.intl.string(q.t.a6XYDw),
                                                        children: (0, r.jsx)(R.Z, {
                                                            userId: n.id,
                                                            guildId: null == ej ? void 0 : ej.guildId,
                                                            tooltipDelay: K.vB
                                                        })
                                                    }),
                                                    (null == ej ? void 0 : ej.guildId) != null &&
                                                        (0, r.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ej.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ei === K.Tb.ROLES
                                                        }),
                                                    eZ.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: q.intl.string(q.t['3fe7U1']),
                                                            scrollIntoView: ei === K.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(W.Z, {
                                                                connections: eZ,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: q.intl.string(q.t['mQKv+v']),
                                                        scrollIntoView: ei === K.Tb.NOTE,
                                                        children: (0, r.jsx)(c.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: ei === K.Tb.NOTE,
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
                                                    isHovering: ey
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(H.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ej,
                                        guildId: ee,
                                        channelId: et,
                                        items: eA,
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
