n.d(t, { Z: () => Q }), n(388685);
var o = n(255367),
    r = n(73800),
    i = n(524979),
    c = n(442837),
    l = n(481060),
    a = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(368326),
    m = n(429467),
    b = n(320582),
    x = n(246016),
    y = n(680295),
    _ = n(189156),
    h = n(699516),
    g = n(246946),
    j = n(5192),
    I = n(111361),
    v = n(785717),
    O = n(221292),
    P = n(687158),
    A = n(771362),
    N = n(510659),
    T = n(113557),
    Z = n(648052),
    C = n(867176),
    w = n(280885),
    S = n(537006),
    E = n(681837),
    B = n(78806),
    L = n(91433),
    D = n(451834),
    U = n(900927),
    k = n(944043),
    M = n(502762),
    R = n(530),
    G = n(4517),
    V = n(179828),
    F = n(993160),
    Y = n(574887),
    H = n(693408),
    K = n(661462),
    W = n(768111),
    z = n(228168),
    X = n(981631),
    q = n(388032),
    J = n(517603);
function Q(e) {
    var t;
    let { user: n, currentUser: Q, guildId: $, channelId: ee, messageId: et, roleId: en, sessionId: eo, initialSection: er, initialSubsection: ei, transitionState: ec, customStatusPrompt: el, openedAt: ea, onClose: es, showGuildProfile: ed = !0, sourceAnalyticsLocations: eu = [] } = e,
        { analyticsLocations: ef } = (0, f.ZP)([...eu, u.Z.USER_PROFILE_MODAL_V2]),
        ep = (0, v.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: eo,
            guildId: $,
            channelId: ee,
            messageId: et,
            roleId: en,
            showGuildProfile: ed
        }),
        em = r.useRef(null),
        eb = (0, s.Z)(em),
        ex = (0, N.$m)(),
        ey = (0, l.q_F)({
            opacity: +(null != ex.interactionType),
            config: { duration: 150 }
        }),
        e_ = r.useMemo(() => (null != $ ? { [$]: [n.id] } : {}), [$, n.id]);
    (0, d.$)(e_);
    let eh = (0, P.ZP)(n.id, ed ? $ : void 0),
        eg = j.ZP.useName(null == eh ? void 0 : eh.guildId, ee, n),
        { relationshipType: ej, originApplicationId: eI } = (0, c.cj)([h.Z], () => ({
            relationshipType: h.Z.getRelationshipType(n.id),
            originApplicationId: h.Z.getOriginApplicationId(n.id)
        })),
        ev = (0, c.e7)([g.Z], () => g.Z.hidePersonalInformation),
        eO =
            null == eh
                ? void 0
                : eh.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eP = (0, p.p)({ location: 'UserProfileModalV2' }),
        eA = r.useMemo(() => (null != el ? el : (0, m.Z)()), [el]),
        eN = (0, W.Z)({
            user: n,
            currentUser: Q
        }),
        eT = (0, x.Y)({ userId: n.id }),
        eZ = (0, b.vh)(n.id),
        eC = (0, A.Z)(n.id),
        ew = q.intl.formatToPlainString(q.t.KRe1Fh, { name: eg });
    return (0, o.jsx)(f.Gt, {
        value: ef,
        children: (0, o.jsx)(v.Mt, {
            value: ep,
            openedAt: ea,
            fetchStartedAt: null == eh ? void 0 : eh.fetchStartedAt,
            fetchEndedAt: null == eh ? void 0 : eh.fetchEndedAt,
            isLoaded: null == eh ? void 0 : eh.isLoaded,
            children: (0, o.jsx)(N.NJ, {
                value: ex,
                children: (0, o.jsx)(l.Y0X, {
                    hideShadow: !0,
                    className: J.root,
                    transitionState: ec,
                    'aria-label': ew,
                    parentComponent: 'UserProfileModalV2',
                    children: (0, o.jsxs)(M.Z, {
                        user: n,
                        displayProfile: eh,
                        themeType: z.lY.MODAL_V2,
                        children: [
                            null != eO &&
                                (0, o.jsx)('div', {
                                    className: J.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eO, ')') }
                                }),
                            null != ex.interactionType &&
                                (0, o.jsx)(i.animated.div, {
                                    style: ey,
                                    className: J.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: J.profile,
                                ref: (null == eh ? void 0 : eh.profileEffectId) != null ? em : void 0,
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: J.profileHeader,
                                        children: [
                                            (0, o.jsx)(C.Z, {
                                                user: n,
                                                displayProfile: eh,
                                                themeType: z.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(D.Z, {
                                                userId: n.id,
                                                onClose: es,
                                                className: J.toast
                                            }),
                                            (0, o.jsx)(T.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: eh,
                                                guildId: $,
                                                channelId: ee,
                                                themeType: z.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(G.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: $,
                                                channelId: ee,
                                                themeType: z.lY.MODAL_V2,
                                                hasEntered: ec === l.Dvm.ENTERED,
                                                prompt: eP && n.id === Q.id ? eA : null
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)(l.Ttm, {
                                        fade: !0,
                                        className: J.profileBody,
                                        children: [
                                            (0, o.jsx)(R.Z, {
                                                user: n,
                                                onClose: es,
                                                nickname: j.ZP.useName(null == eh ? void 0 : eh.guildId, ee, n),
                                                nicknameIcons: (0, o.jsx)(E.Z, {
                                                    size: 'sm',
                                                    userId: n.id
                                                }),
                                                nicknameVariant: 'heading-xl/semibold',
                                                pronouns: null == eh ? void 0 : eh.pronouns,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: eh,
                                                    themeType: z.lY.MODAL_V2,
                                                    onClose: es
                                                })
                                            }),
                                            (0, o.jsxs)(l.y5t, {
                                                children: [
                                                    ej === X.OGo.PENDING_INCOMING &&
                                                        (0, o.jsx)(M.Z.Overlay, {
                                                            children: (0, o.jsx)(L.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId: null != (t = null == eh ? void 0 : eh.guildId) ? t : void 0,
                                                                channelId: ee,
                                                                className: J.profileBanner
                                                            })
                                                        }),
                                                    eZ.map((e) => {
                                                        var t;
                                                        let { applicationId: r } = e;
                                                        return (0, o.jsx)(
                                                            M.Z.Overlay,
                                                            {
                                                                children: (0, o.jsx)(L.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == eh ? void 0 : eh.guildId) ? t : void 0,
                                                                    channelId: ee,
                                                                    isGameRelationship: !0,
                                                                    applicationId: r,
                                                                    className: J.profileBanner
                                                                })
                                                            },
                                                            r
                                                        );
                                                    }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(M.Z.Overlay, {
                                                            children: (0, o.jsx)(H.Z, {
                                                                heading: q.intl.string(q.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, o.jsx)(l.P4T, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: J.profileBanner,
                                                                children: (0, o.jsx)(_.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === Q.id &&
                                                        (0, o.jsx)(S.Z, {
                                                            isPremiumUser: (0, I.I5)(Q),
                                                            onInteraction: es
                                                        }),
                                                    (0, o.jsx)(k.Z, {
                                                        user: n,
                                                        className: J.profileBanner
                                                    }),
                                                    (0, o.jsx)('div', {
                                                        className: J.profileButtons,
                                                        children: (0, o.jsx)(F.Z, {
                                                            user: n,
                                                            currentUser: Q,
                                                            guildId: $,
                                                            channelId: ee,
                                                            displayProfile: eh,
                                                            relationshipType: ej,
                                                            onClose: es
                                                        })
                                                    }),
                                                    (null == eh ? void 0 : eh.bio) != null &&
                                                        (null == eh ? void 0 : eh.bio) !== '' &&
                                                        !ev &&
                                                        (0, o.jsx)(w.Z, {
                                                            userBio: eh.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eT.length > 0 &&
                                                        (0, o.jsx)(H.Z, {
                                                            heading: q.intl.string(q.t['Uv/eT0']),
                                                            children: (0, o.jsx)(B.Z, { applicationIds: eT })
                                                        }),
                                                    (0, o.jsx)(H.Z, {
                                                        heading: q.intl.string(q.t.a6XYDw),
                                                        children: (0, o.jsx)(U.Z, {
                                                            userId: n.id,
                                                            guildId: null == eh ? void 0 : eh.guildId,
                                                            tooltipDelay: z.vB
                                                        })
                                                    }),
                                                    (null == eh ? void 0 : eh.guildId) != null &&
                                                        (0, o.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: Q,
                                                            guildId: eh.guildId,
                                                            className: J.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ei === z.Tb.ROLES
                                                        }),
                                                    eC.length > 0 &&
                                                        (0, o.jsx)(H.Z, {
                                                            heading: q.intl.string(q.t['3fe7U1']),
                                                            scrollIntoView: ei === z.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(Y.Z, {
                                                                connections: eC,
                                                                userId: n.id,
                                                                className: J.profileAppConnections
                                                            })
                                                        }),
                                                    (0, o.jsx)(H.Z, {
                                                        heading: q.intl.string(q.t['mQKv+v']),
                                                        scrollIntoView: ei === z.Tb.NOTE,
                                                        children: (0, o.jsx)(a.Z, {
                                                            userId: n.id,
                                                            className: J.profileNote,
                                                            autoFocus: ei === z.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, O.pQ)(
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
                                                                    })({ action: 'SET_NOTE' }, ep)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == eh ? void 0 : eh.profileEffectId) != null &&
                                        (0, o.jsx)(y.Z, {
                                            profileEffectId: null == eh ? void 0 : eh.profileEffectId,
                                            isHovering: eb
                                        })
                                ]
                            }),
                            (0, o.jsx)(l.y5t, {
                                children: (0, o.jsx)(K.Z, {
                                    user: n,
                                    currentUser: Q,
                                    displayProfile: eh,
                                    guildId: $,
                                    channelId: ee,
                                    items: eN,
                                    initialSection: er,
                                    initialSubsection: ei,
                                    onClose: es
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
