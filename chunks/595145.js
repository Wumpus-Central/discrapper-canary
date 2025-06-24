n.d(t, { Z: () => $ }), n(388685);
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
    h = n(706454),
    g = n(699516),
    j = n(246946),
    I = n(5192),
    v = n(111361),
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
    L = n(78806),
    D = n(91433),
    U = n(451834),
    k = n(900927),
    M = n(944043),
    R = n(502762),
    G = n(530),
    V = n(4517),
    F = n(179828),
    Y = n(993160),
    H = n(574887),
    K = n(693408),
    W = n(661462),
    z = n(768111),
    X = n(228168),
    q = n(981631),
    J = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let { user: n, currentUser: $, guildId: ee, channelId: et, messageId: en, roleId: eo, sessionId: er, initialSection: ei, initialSubsection: ec, transitionState: el, customStatusPrompt: ea, openedAt: es, onClose: ed, showGuildProfile: eu = !0, sourceAnalyticsLocations: ef = [] } = e,
        { analyticsLocations: ep } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        em = (0, O.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: er,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: eo,
            showGuildProfile: eu
        }),
        eb = r.useRef(null),
        ex = (0, s.Z)(eb),
        ey = (0, T.$m)(),
        e_ = (0, l.q_F)({
            opacity: +(null != ey.interactionType),
            config: { duration: 150 }
        }),
        eh = r.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(eh);
    let eg = (0, N.ZP)(n.id, eu ? ee : void 0),
        ej = I.ZP.useName(null == eg ? void 0 : eg.guildId, et, n),
        { relationshipType: eI, originApplicationId: ev } = (0, c.cj)([g.Z], () => ({
            relationshipType: g.Z.getRelationshipType(n.id),
            originApplicationId: g.Z.getOriginApplicationId(n.id)
        })),
        eO = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        eP =
            null == eg
                ? void 0
                : eg.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eN = (0, p.p)({ location: 'UserProfileModalV2' }),
        eA = r.useMemo(() => (null != ea ? ea : (0, m.Z)()), [ea]),
        eT = (0, z.Z)({
            user: n,
            currentUser: $
        }),
        eZ = (0, x.Y)({ userId: n.id }),
        eC = (0, b.vh)(n.id),
        ew = (0, A.Z)(n.id),
        eS = (0, c.e7)([h.default], () => ['en-US', 'en-GB'].includes(h.default.locale)) ? J.intl.formatToPlainString(J.t.KRe1Fh, { name: ej }) : J.intl.string(J.t['3N/J2t']);
    return (0, o.jsx)(f.Gt, {
        value: ep,
        children: (0, o.jsx)(O.Mt, {
            value: em,
            openedAt: es,
            fetchStartedAt: null == eg ? void 0 : eg.fetchStartedAt,
            fetchEndedAt: null == eg ? void 0 : eg.fetchEndedAt,
            isLoaded: null == eg ? void 0 : eg.isLoaded,
            children: (0, o.jsx)(T.NJ, {
                value: ey,
                children: (0, o.jsx)(l.Y0X, {
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: el,
                    'aria-label': eS,
                    parentComponent: 'UserProfileModalV2',
                    children: (0, o.jsxs)(R.Z, {
                        user: n,
                        displayProfile: eg,
                        themeType: X.lY.MODAL_V2,
                        children: [
                            null != eP &&
                                (0, o.jsx)('div', {
                                    className: Q.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eP, ')') }
                                }),
                            null != ey.interactionType &&
                                (0, o.jsx)(i.animated.div, {
                                    style: e_,
                                    className: Q.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: Q.profile,
                                ref: (null == eg ? void 0 : eg.profileEffectId) != null ? eb : void 0,
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: Q.profileHeader,
                                        children: [
                                            (0, o.jsx)(w.Z, {
                                                user: n,
                                                displayProfile: eg,
                                                themeType: X.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(U.Z, {
                                                userId: n.id,
                                                onClose: ed,
                                                className: Q.toast
                                            }),
                                            (0, o.jsx)(Z.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: eg,
                                                guildId: ee,
                                                channelId: et,
                                                themeType: X.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(V.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: ee,
                                                channelId: et,
                                                themeType: X.lY.MODAL_V2,
                                                hasEntered: el === l.Dvm.ENTERED,
                                                prompt: eN && n.id === $.id ? eA : null
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)(l.Ttm, {
                                        fade: !0,
                                        className: Q.profileBody,
                                        children: [
                                            (0, o.jsx)(G.Z, {
                                                user: n,
                                                onClose: ed,
                                                nickname: I.ZP.useName(null == eg ? void 0 : eg.guildId, et, n),
                                                nicknameIcons: (0, o.jsx)(B.Z, {
                                                    size: 'sm',
                                                    userId: n.id
                                                }),
                                                nicknameVariant: 'heading-xl/semibold',
                                                pronouns: null == eg ? void 0 : eg.pronouns,
                                                tags: (0, o.jsx)(C.Z, {
                                                    displayProfile: eg,
                                                    themeType: X.lY.MODAL_V2,
                                                    onClose: ed
                                                })
                                            }),
                                            (0, o.jsxs)(l.y5t, {
                                                children: [
                                                    eI === q.OGo.PENDING_INCOMING &&
                                                        (0, o.jsx)(R.Z.Overlay, {
                                                            children: (0, o.jsx)(D.Z, {
                                                                user: n,
                                                                applicationId: ev,
                                                                guildId: null != (t = null == eg ? void 0 : eg.guildId) ? t : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner
                                                            })
                                                        }),
                                                    eC.map((e) => {
                                                        var t;
                                                        let { applicationId: r } = e;
                                                        return (0, o.jsx)(
                                                            R.Z.Overlay,
                                                            {
                                                                children: (0, o.jsx)(D.Z, {
                                                                    user: n,
                                                                    guildId: null != (t = null == eg ? void 0 : eg.guildId) ? t : void 0,
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
                                                            children: (0, o.jsx)(K.Z, {
                                                                heading: J.intl.string(J.t.Iyka0d),
                                                                headingVariant: 'text-md/semibold',
                                                                headingIcon: (0, o.jsx)(l.P4T, {
                                                                    size: 'xs',
                                                                    color: 'currentColor'
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, o.jsx)(_.n, {
                                                                    userId: n.id,
                                                                    variant: 'text-sm/normal'
                                                                })
                                                            })
                                                        }),
                                                    n.id === $.id &&
                                                        (0, o.jsx)(E.Z, {
                                                            isPremiumUser: (0, v.I5)($),
                                                            onInteraction: ed
                                                        }),
                                                    (0, o.jsx)(M.Z, {
                                                        user: n,
                                                        className: Q.profileBanner
                                                    }),
                                                    (0, o.jsx)('div', {
                                                        className: Q.profileButtons,
                                                        children: (0, o.jsx)(Y.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ee,
                                                            channelId: et,
                                                            displayProfile: eg,
                                                            relationshipType: eI,
                                                            onClose: ed
                                                        })
                                                    }),
                                                    (null == eg ? void 0 : eg.bio) != null &&
                                                        (null == eg ? void 0 : eg.bio) !== '' &&
                                                        !eO &&
                                                        (0, o.jsx)(S.Z, {
                                                            userBio: eg.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eZ.length > 0 &&
                                                        (0, o.jsx)(K.Z, {
                                                            heading: J.intl.string(J.t['Uv/eT0']),
                                                            children: (0, o.jsx)(L.Z, { applicationIds: eZ })
                                                        }),
                                                    (0, o.jsx)(K.Z, {
                                                        heading: J.intl.string(J.t.a6XYDw),
                                                        children: (0, o.jsx)(k.Z, {
                                                            userId: n.id,
                                                            guildId: null == eg ? void 0 : eg.guildId,
                                                            tooltipDelay: X.vB
                                                        })
                                                    }),
                                                    (null == eg ? void 0 : eg.guildId) != null &&
                                                        (0, o.jsx)(F.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: eg.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ec === X.Tb.ROLES
                                                        }),
                                                    ew.length > 0 &&
                                                        (0, o.jsx)(K.Z, {
                                                            heading: J.intl.string(J.t['3fe7U1']),
                                                            scrollIntoView: ec === X.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(H.Z, {
                                                                connections: ew,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections
                                                            })
                                                        }),
                                                    (0, o.jsx)(K.Z, {
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
                                                                    })({ action: 'SET_NOTE' }, em)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == eg ? void 0 : eg.profileEffectId) != null &&
                                        (0, o.jsx)(y.Z, {
                                            profileEffectId: null == eg ? void 0 : eg.profileEffectId,
                                            isHovering: ex
                                        })
                                ]
                            }),
                            (0, o.jsx)(l.y5t, {
                                children: (0, o.jsx)(W.Z, {
                                    user: n,
                                    currentUser: $,
                                    displayProfile: eg,
                                    guildId: ee,
                                    channelId: et,
                                    items: eT,
                                    initialSection: ei,
                                    initialSubsection: ec,
                                    onClose: ed
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
