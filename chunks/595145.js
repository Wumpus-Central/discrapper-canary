n.d(t, { Z: () => en }), n(388685);
var o = n(255367),
    r = n(73800),
    i = n(120356),
    c = n.n(i),
    l = n(386230),
    a = n(442837),
    s = n(481060),
    d = n(666520),
    u = n(727637),
    f = n(616780),
    p = n(100527),
    m = n(906732),
    b = n(368326),
    y = n(429467),
    _ = n(320582),
    x = n(246016),
    h = n(680295),
    g = n(189156),
    j = n(706454),
    I = n(430824),
    v = n(699516),
    O = n(246946),
    P = n(5192),
    N = n(111361),
    A = n(785717),
    Z = n(221292),
    T = n(687158),
    C = n(771362),
    w = n(510659),
    S = n(113557),
    E = n(648052),
    B = n(867176),
    D = n(280885),
    k = n(537006),
    U = n(681837),
    L = n(78806),
    R = n(91433),
    M = n(451834),
    G = n(900927),
    V = n(944043),
    F = n(502762),
    Y = n(530),
    H = n(4517),
    K = n(179828),
    W = n(993160),
    X = n(574887),
    z = n(693408),
    q = n(661462),
    J = n(768111),
    Q = n(228168),
    $ = n(981631),
    ee = n(388032),
    et = n(517603);
function en(e) {
    var t;
    let { user: n, currentUser: i, guildId: en, channelId: eo, messageId: er, roleId: ei, sessionId: ec, initialSection: el, initialSubsection: ea, transitionState: es, customStatusPrompt: ed, openedAt: eu, onClose: ef, showGuildProfile: ep = !0, sourceAnalyticsLocations: em = [] } = e,
        { analyticsLocations: eb } = (0, m.ZP)([...em, p.Z.USER_PROFILE_MODAL_V2]),
        ey = (0, A.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: ec,
            guildId: en,
            channelId: eo,
            messageId: er,
            roleId: ei,
            showGuildProfile: ep
        }),
        e_ = r.useRef(null),
        ex = (0, u.Z)(e_),
        eh = (0, w.$m)(),
        eg = (0, s.q_F)({
            opacity: +(null != eh.interactionType),
            config: { duration: 150 }
        }),
        ej = (0, a.e7)([I.Z], () => (null != en ? I.Z.getGuild(en) : null)),
        eI = r.useMemo(() => (null != en ? { [en]: [n.id] } : {}), [en, n.id]);
    (0, f.$)(eI);
    let ev = (0, T.ZP)(n.id, ep ? en : void 0),
        eO = P.ZP.useName(null == ev ? void 0 : ev.guildId, eo, n),
        { relationshipType: eP, originApplicationId: eN } = (0, a.cj)([v.Z], () => ({
            relationshipType: v.Z.getRelationshipType(n.id),
            originApplicationId: v.Z.getOriginApplicationId(n.id)
        })),
        eA = (0, a.e7)([O.Z], () => O.Z.hidePersonalInformation),
        eZ =
            null == ev
                ? void 0
                : ev.getBannerURL({
                      canAnimate: !1,
                      size: 1024
                  }),
        eT = (0, b.p)({ location: 'UserProfileModalV2' }),
        eC = r.useMemo(() => (null != ed ? ed : (0, y.Z)()), [ed]),
        ew = (0, J.Z)({
            user: n,
            currentUser: i
        }),
        eS = (0, x.Y)({ userId: n.id }),
        eE = (0, _.vh)(n.id),
        eB = (0, C.Z)(n.id),
        eD = (0, a.e7)([j.default], () => ['en-US', 'en-GB'].includes(j.default.locale)) ? ee.intl.formatToPlainString(ee.t.KRe1Fh, { name: eO }) : ee.intl.string(ee.t['3N/J2t']);
    return (0, o.jsx)(m.Gt, {
        value: eb,
        children: (0, o.jsx)(A.Mt, {
            value: ey,
            openedAt: eu,
            fetchStartedAt: null == ev ? void 0 : ev.fetchStartedAt,
            fetchEndedAt: null == ev ? void 0 : ev.fetchEndedAt,
            isLoaded: null == ev ? void 0 : ev.isLoaded,
            children: (0, o.jsx)(w.NJ, {
                value: eh,
                children: (0, o.jsx)(s.Y0X, {
                    hideShadow: !0,
                    className: et.root,
                    transitionState: es,
                    'aria-label': eD,
                    children: (0, o.jsxs)(F.Z, {
                        ref: e_,
                        user: n,
                        displayProfile: ev,
                        themeType: Q.lY.MODAL_V2,
                        children: [
                            null != eZ &&
                                (0, o.jsx)('div', {
                                    className: et.backgroundImage,
                                    style: { backgroundImage: 'url('.concat(eZ, ')') }
                                }),
                            null != eh.interactionType &&
                                (0, o.jsx)(l.animated.div, {
                                    style: eg,
                                    className: et.backdrop
                                }),
                            (0, o.jsxs)('div', {
                                className: et.profile,
                                children: [
                                    (0, o.jsxs)('header', {
                                        className: et.profileHeader,
                                        children: [
                                            (0, o.jsx)(B.Z, {
                                                user: n,
                                                displayProfile: ev,
                                                themeType: Q.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                userId: n.id,
                                                onClose: ef,
                                                className: et.toast
                                            }),
                                            (0, o.jsx)(S.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: ev,
                                                guildId: en,
                                                channelId: eo,
                                                themeType: Q.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(H.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: en,
                                                channelId: eo,
                                                themeType: Q.lY.MODAL_V2,
                                                hasEntered: es === s.Dvm.ENTERED,
                                                prompt: eT && n.id === i.id ? eC : null
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: et.profileBody,
                                        children: [
                                            (0, o.jsx)(Y.Z, {
                                                user: n,
                                                onClose: ef,
                                                className: et.profileSection,
                                                nickname: P.ZP.useName(null == ev ? void 0 : ev.guildId, eo, n),
                                                nicknameIcons: (0, o.jsx)(U.Z, {
                                                    size: 'sm',
                                                    userId: n.id
                                                }),
                                                nicknameVariant: 'heading-xl/semibold',
                                                pronouns: null == ev ? void 0 : ev.pronouns,
                                                tags: (0, o.jsx)(E.Z, {
                                                    displayProfile: ev,
                                                    themeType: Q.lY.MODAL_V2,
                                                    onClose: ef
                                                })
                                            }),
                                            eP === $.OGo.PENDING_INCOMING &&
                                                (0, o.jsx)(F.Z.Overlay, {
                                                    className: et.profileOverlay,
                                                    children: (0, o.jsx)(R.Z, {
                                                        user: n,
                                                        applicationId: eN,
                                                        guildId: null != (t = null == ev ? void 0 : ev.guildId) ? t : void 0,
                                                        channelId: eo,
                                                        className: et.profileBanner
                                                    })
                                                }),
                                            eE.map((e) => {
                                                var t;
                                                let { applicationId: r } = e;
                                                return (0, o.jsx)(
                                                    F.Z.Overlay,
                                                    {
                                                        className: et.profileOverlay,
                                                        children: (0, o.jsx)(R.Z, {
                                                            user: n,
                                                            guildId: null != (t = null == ev ? void 0 : ev.guildId) ? t : void 0,
                                                            channelId: eo,
                                                            isGameRelationship: !0,
                                                            applicationId: r,
                                                            className: et.profileBanner
                                                        })
                                                    },
                                                    r
                                                );
                                            }),
                                            n.isProvisional &&
                                                (0, o.jsx)(F.Z.Overlay, {
                                                    className: et.profileOverlay,
                                                    children: (0, o.jsx)(z.Z, {
                                                        heading: ee.intl.string(ee.t.Iyka0d),
                                                        headingVariant: 'text-md/semibold',
                                                        headingIcon: (0, o.jsx)(s.P4T, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        className: et.profileBanner,
                                                        children: (0, o.jsx)(g.n, {
                                                            userId: n.id,
                                                            variant: 'text-sm/normal'
                                                        })
                                                    })
                                                }),
                                            n.id === i.id &&
                                                (0, o.jsx)(k.Z, {
                                                    className: et.profileSection,
                                                    isPremiumUser: (0, N.I5)(i),
                                                    onInteraction: ef
                                                }),
                                            (0, o.jsx)(V.Z, {
                                                user: n,
                                                className: et.profileBanner
                                            }),
                                            (0, o.jsx)('div', {
                                                className: c()(et.profileSection, et.profileButtons),
                                                children: (0, o.jsx)(W.Z, {
                                                    user: n,
                                                    currentUser: i,
                                                    guildId: en,
                                                    channelId: eo,
                                                    displayProfile: ev,
                                                    relationshipType: eP,
                                                    onClose: ef
                                                })
                                            }),
                                            (0, o.jsxs)(s.Ttm, {
                                                fade: !0,
                                                className: c()(et.profileSection, et.profileScroller),
                                                children: [
                                                    (null == ev ? void 0 : ev.bio) != null &&
                                                        (null == ev ? void 0 : ev.bio) !== '' &&
                                                        !eA &&
                                                        (0, o.jsx)(D.Z, {
                                                            userBio: ev.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    eS.length > 0 &&
                                                        (0, o.jsx)(z.Z, {
                                                            heading: ee.intl.string(ee.t['Uv/eT0']),
                                                            children: (0, o.jsx)(L.Z, { applicationIds: eS })
                                                        }),
                                                    (0, o.jsx)(z.Z, {
                                                        heading: ee.intl.string(ee.t.a6XYDw),
                                                        children: (0, o.jsx)(G.Z, {
                                                            userId: n.id,
                                                            guildId: null == ev ? void 0 : ev.guildId,
                                                            tooltipDelay: Q.vB
                                                        })
                                                    }),
                                                    null != ej &&
                                                        (0, o.jsx)(K.Z, {
                                                            user: n,
                                                            currentUser: i,
                                                            guild: ej,
                                                            className: et.profileRolesSection,
                                                            headingVariant: 'text-xs/medium',
                                                            headingColor: 'currentColor',
                                                            scrollIntoView: ea === Q.Tb.ROLES
                                                        }),
                                                    eB.length > 0 &&
                                                        (0, o.jsx)(z.Z, {
                                                            heading: ee.intl.string(ee.t.ZZ5jS0),
                                                            scrollIntoView: ea === Q.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(X.Z, {
                                                                connections: eB,
                                                                userId: n.id
                                                            })
                                                        }),
                                                    (0, o.jsx)(z.Z, {
                                                        heading: ee.intl.string(ee.t['mQKv+v']),
                                                        scrollIntoView: ea === Q.Tb.NOTE,
                                                        children: (0, o.jsx)(d.Z, {
                                                            userId: n.id,
                                                            className: et.profileNote,
                                                            autoFocus: ea === Q.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, Z.pQ)(
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
                                                                    })({ action: 'SET_NOTE' }, ey)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == ev ? void 0 : ev.profileEffectId) != null &&
                                        (0, o.jsx)(h.Z, {
                                            profileEffectId: null == ev ? void 0 : ev.profileEffectId,
                                            isHovering: ex
                                        })
                                ]
                            }),
                            (0, o.jsx)(q.Z, {
                                user: n,
                                currentUser: i,
                                displayProfile: ev,
                                guildId: en,
                                channelId: eo,
                                items: ew,
                                initialSection: el,
                                initialSubsection: ea,
                                onClose: ef
                            })
                        ]
                    })
                })
            })
        })
    });
}
