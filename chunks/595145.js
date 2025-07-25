(n.d(t, { Z: () => Q }), n(388685));
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
    p = n(368326),
    m = n(429467),
    b = n(320582),
    _ = n(246016),
    x = n(680295),
    h = n(189156),
    y = n(699516),
    g = n(246946),
    j = n(5192),
    I = n(111361),
    v = n(785717),
    O = n(221292),
    P = n(687158),
    N = n(771362),
    A = n(510659),
    T = n(113557),
    C = n(648052),
    Z = n(867176),
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
    V = n(4517),
    G = n(179828),
    F = n(993160),
    H = n(574887),
    Y = n(693408),
    W = n(661462),
    K = n(768111),
    z = n(228168),
    X = n(981631),
    q = n(388032),
    J = n(517603);
function Q(e) {
    var t;
    let { user: n, currentUser: Q, guildId: $, channelId: ee, messageId: et, roleId: en, sessionId: eo, initialSection: er, initialSubsection: ei, transitionState: ec, customStatusPrompt: el, openedAt: ea, onClose: es, showGuildProfile: ed = !0, sourceAnalyticsLocations: eu = [], disableActionsForPreview: ef = !1 } = e,
        { analyticsLocations: ep } = (0, f.ZP)([...eu, u.Z.USER_PROFILE_MODAL_V2]),
        em = (0, v.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: eo,
            guildId: $,
            channelId: ee,
            messageId: et,
            roleId: en,
            showGuildProfile: ed
        }),
        eb = r.useRef(null),
        e_ = (0, s.Z)(eb),
        ex = (0, A.$m)(),
        eh = (0, l.q_F)({
            opacity: +(null != ex.interactionType),
            config: { duration: 150 }
        }),
        ey = r.useMemo(() => (null != $ ? { [$]: [n.id] } : {}), [$, n.id]);
    (0, d.$)(ey);
    let eg = (0, P.ZP)(n.id, ed ? $ : void 0),
        ej = j.ZP.useName(null == eg ? void 0 : eg.guildId, ee, n),
        { relationshipType: eI, originApplicationId: ev } = (0, c.cj)([y.Z], () => ({
            relationshipType: y.Z.getRelationshipType(n.id),
            originApplicationId: y.Z.getOriginApplicationId(n.id)
        })),
        eO = (0, c.e7)([g.Z], () => g.Z.hidePersonalInformation),
        eP =
            null == eg
                ? void 0
                : eg.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eN = (0, p.p)({ location: 'UserProfileModalV2' }),
        eA = r.useMemo(() => (null != el ? el : (0, m.Z)()), [el]),
        eT = (0, K.Z)({
            user: n,
            currentUser: Q
        }),
        eC = (0, _.Y)({ userId: n.id }),
        eZ = (0, b.vh)(n.id),
        ew = (0, N.Z)(n.id),
        eS = q.intl.formatToPlainString(q.t.KRe1Fh, { name: ej });
    return (0, o.jsx)(f.Gt, {
        value: ep,
        children: (0, o.jsx)(v.Mt, {
            value: em,
            openedAt: ea,
            fetchStartedAt: null == eg ? void 0 : eg.fetchStartedAt,
            fetchEndedAt: null == eg ? void 0 : eg.fetchEndedAt,
            isLoaded: null == eg ? void 0 : eg.isLoaded,
            children: (0, o.jsx)(A.NJ, {
                value: ex,
                children: (0, o.jsxs)(l.Y0X, {
                    hideShadow: !0,
                    className: J.root,
                    transitionState: ec,
                    'aria-label': eS,
                    parentComponent: 'UserProfileModalV2',
                    children: [
                        ef &&
                            (0, o.jsxs)('div', {
                                className: J.previewBar,
                                children: [
                                    (0, o.jsx)(l.X6q, {
                                        variant: 'heading-sm/normal',
                                        color: 'text-primary',
                                        children: q.intl.string(q.t.apViam)
                                    }),
                                    (0, o.jsx)(l.zxk, {
                                        size: 'sm',
                                        variant: 'secondary',
                                        text: q.intl.string(q.t.ojM1xM),
                                        onClick: es,
                                        'aria-label': q.intl.string(q.t.cpT0Cg)
                                    })
                                ]
                            }),
                        (0, o.jsxs)(M.Z, {
                            className: ef ? J.disabled : void 0,
                            user: n,
                            displayProfile: eg,
                            themeType: z.lY.MODAL_V2,
                            children: [
                                null != eP &&
                                    (0, o.jsx)('div', {
                                        className: J.backgroundImage,
                                        style: { backgroundImage: 'url('.concat(eP, ')') }
                                    }),
                                null != ex.interactionType &&
                                    (0, o.jsx)(i.animated.div, {
                                        style: eh,
                                        className: J.backdrop
                                    }),
                                (0, o.jsxs)('div', {
                                    className: J.profile,
                                    ref: (null == eg ? void 0 : eg.profileEffectId) != null ? eb : void 0,
                                    children: [
                                        (0, o.jsxs)('div', {
                                            className: J.profileHeader,
                                            children: [
                                                (0, o.jsx)(Z.Z, {
                                                    user: n,
                                                    displayProfile: eg,
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
                                                    displayProfile: eg,
                                                    guildId: $,
                                                    channelId: ee,
                                                    themeType: z.lY.MODAL_V2
                                                }),
                                                (0, o.jsx)(V.Z, {
                                                    location: 'UserProfileModalV2',
                                                    user: n,
                                                    guildId: $,
                                                    channelId: ee,
                                                    themeType: z.lY.MODAL_V2,
                                                    hasEntered: ec === l.Dvm.ENTERED,
                                                    prompt: eN && n.id === Q.id ? eA : null,
                                                    disableToolbar: ef
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
                                                    nickname: j.ZP.useName(null == eg ? void 0 : eg.guildId, ee, n),
                                                    nicknameIcons: (0, o.jsx)(E.Z, {
                                                        size: 'sm',
                                                        userId: n.id
                                                    }),
                                                    nicknameVariant: 'heading-xl/semibold',
                                                    pronouns: null == eg ? void 0 : eg.pronouns,
                                                    tags: (0, o.jsx)(C.Z, {
                                                        displayProfile: eg,
                                                        themeType: z.lY.MODAL_V2,
                                                        onClose: es
                                                    })
                                                }),
                                                (0, o.jsxs)(l.y5t, {
                                                    children: [
                                                        eI === X.OGo.PENDING_INCOMING &&
                                                            (0, o.jsx)(M.Z.Overlay, {
                                                                className: J.profileOverlay,
                                                                children: (0, o.jsx)(L.Z, {
                                                                    user: n,
                                                                    applicationId: ev,
                                                                    guildId: null != (t = null == eg ? void 0 : eg.guildId) ? t : void 0,
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
                                                                    className: J.profileOverlay,
                                                                    children: (0, o.jsx)(L.Z, {
                                                                        user: n,
                                                                        guildId: null != (t = null == eg ? void 0 : eg.guildId) ? t : void 0,
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
                                                                className: J.profileOverlay,
                                                                children: (0, o.jsx)(Y.Z, {
                                                                    heading: q.intl.string(q.t.Iyka0d),
                                                                    headingVariant: 'text-md/semibold',
                                                                    headingIcon: (0, o.jsx)(l.P4T, {
                                                                        size: 'xs',
                                                                        color: 'currentColor'
                                                                    }),
                                                                    className: J.profileBanner,
                                                                    children: (0, o.jsx)(h.n, {
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
                                                                displayProfile: eg,
                                                                relationshipType: eI,
                                                                onClose: es
                                                            })
                                                        }),
                                                        (null == eg ? void 0 : eg.bio) != null &&
                                                            (null == eg ? void 0 : eg.bio) !== '' &&
                                                            !eO &&
                                                            (0, o.jsx)(w.Z, {
                                                                userBio: eg.bio,
                                                                setLineClamp: !1
                                                            }),
                                                        eC.length > 0 &&
                                                            (0, o.jsx)(Y.Z, {
                                                                heading: q.intl.string(q.t['Uv/eT0']),
                                                                children: (0, o.jsx)(B.Z, { applicationIds: eC })
                                                            }),
                                                        (0, o.jsx)(Y.Z, {
                                                            heading: q.intl.string(q.t.a6XYDw),
                                                            children: (0, o.jsx)(U.Z, {
                                                                userId: n.id,
                                                                guildId: null == eg ? void 0 : eg.guildId,
                                                                tooltipDelay: z.vB
                                                            })
                                                        }),
                                                        (null == eg ? void 0 : eg.guildId) != null &&
                                                            (0, o.jsx)(G.Z, {
                                                                user: n,
                                                                currentUser: Q,
                                                                guildId: eg.guildId,
                                                                className: J.profileRolesSection,
                                                                headingVariant: 'text-xs/medium',
                                                                headingColor: 'currentColor',
                                                                scrollIntoView: ei === z.Tb.ROLES
                                                            }),
                                                        ew.length > 0 &&
                                                            (0, o.jsx)(Y.Z, {
                                                                heading: q.intl.string(q.t['3fe7U1']),
                                                                scrollIntoView: ei === z.Tb.CONNECTIONS,
                                                                children: (0, o.jsx)(H.Z, {
                                                                    connections: ew,
                                                                    userId: n.id,
                                                                    className: J.profileAppConnections
                                                                })
                                                            }),
                                                        (0, o.jsx)(Y.Z, {
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
                                                                        })({ action: 'SET_NOTE' }, em)
                                                                    )
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (null == eg ? void 0 : eg.profileEffectId) != null &&
                                            (0, o.jsx)(x.Z, {
                                                profileEffectId: null == eg ? void 0 : eg.profileEffectId,
                                                isHovering: e_
                                            })
                                    ]
                                }),
                                (0, o.jsx)(l.y5t, {
                                    children: (0, o.jsx)(W.Z, {
                                        user: n,
                                        currentUser: Q,
                                        displayProfile: eg,
                                        guildId: $,
                                        channelId: ee,
                                        items: eT,
                                        initialSection: er,
                                        initialSubsection: ei,
                                        onClose: es
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
