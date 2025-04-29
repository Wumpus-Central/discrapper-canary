t.d(n, { Z: () => W }), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(272573),
    c = t(442837),
    a = t(481060),
    l = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    p = t(368326),
    m = t(429467),
    b = t(680295),
    _ = t(189156),
    h = t(706454),
    y = t(430824),
    g = t(699516),
    x = t(246946),
    j = t(5192),
    I = t(785717),
    O = t(221292),
    v = t(687158),
    P = t(250822),
    C = t(771362),
    N = t(510659),
    A = t(113557),
    Z = t(648052),
    T = t(867176),
    w = t(819602),
    S = t(681837),
    M = t(451834),
    E = t(900927),
    U = t(678738),
    B = t(502762),
    V = t(530),
    D = t(4517),
    k = t(179828),
    L = t(420654),
    F = t(993160),
    R = t(661462),
    G = t(228168),
    H = t(388032),
    Y = t(517603);
function W(e) {
    let { user: n, currentUser: t, guildId: W, channelId: z, messageId: K, roleId: q, sessionId: X, friendToken: J, initialSection: Q, initialSubsection: $, transitionState: ee, customStatusPrompt: en, openedAt: et, onClose: eo, sourceAnalyticsLocations: er = [] } = e,
        { analyticsLocations: ei } = (0, f.ZP)([...er, u.Z.USER_PROFILE_MODAL_V2]),
        ec = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: X,
            showGuildProfile: !0,
            guildId: W,
            channelId: z,
            messageId: K,
            roleId: q
        }),
        ea = r.createRef(),
        el = (0, s.Z)(ea),
        es = (0, N.$m)(),
        ed = (0, a.q_F)({
            opacity: +(null != es.interactionType),
            config: { duration: 150 }
        }),
        eu = (0, c.e7)([y.Z], () => (null != W ? y.Z.getGuild(W) : null)),
        ef = r.useMemo(() => (null != W ? { [W]: [n.id] } : {}), [W, n.id]);
    (0, d.$)(ef);
    let ep = (0, v.ZP)(n.id, W),
        em = (0, c.e7)([g.Z], () => g.Z.getRelationshipType(n.id)),
        eb = (0, c.e7)([x.Z], () => x.Z.hidePersonalInformation),
        e_ = (0, p.p)({ location: 'UserProfileModalV2' }),
        eh = r.useMemo(() => (null != en ? en : (0, m.Z)()), [en]),
        ey = (0, c.e7)([h.default], () => h.default.locale),
        eg = (0, C.Z)(n.id),
        ex = (0, P.Z)(n.id);
    return (0, o.jsx)(f.Gt, {
        value: ei,
        children: (0, o.jsx)(I.Mt, {
            value: ec,
            openedAt: et,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, o.jsx)(N.NJ, {
                value: es,
                children: (0, o.jsx)(a.Y0X, {
                    hideShadow: !0,
                    className: Y.root,
                    transitionState: ee,
                    'aria-label': H.intl.string(H.t['3N/J2t']),
                    children: (0, o.jsxs)(B.Z, {
                        ref: ea,
                        user: n,
                        displayProfile: ep,
                        themeType: G.lY.MODAL_V2,
                        children: [
                            (0, o.jsxs)('div', {
                                className: Y.profile,
                                children: [
                                    null != es.interactionType &&
                                        (0, o.jsx)(i.animated.div, {
                                            style: ed,
                                            className: Y.backdrop
                                        }),
                                    (0, o.jsxs)('header', {
                                        className: Y.profileHeader,
                                        children: [
                                            (0, o.jsx)(T.Z, {
                                                user: n,
                                                displayProfile: ep,
                                                themeType: G.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                userId: n.id,
                                                onClose: eo,
                                                className: Y.toast
                                            }),
                                            (0, o.jsx)(A.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: ep,
                                                guildId: W,
                                                channelId: z,
                                                themeType: G.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(D.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: W,
                                                channelId: z,
                                                themeType: G.lY.MODAL_V2,
                                                hasEntered: ee === a.Dvm.ENTERED,
                                                prompt: e_ && n.id === t.id ? eh : null,
                                                onCloseProfile: eo
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: Y.profileBody,
                                        children: [
                                            (0, o.jsx)(V.Z, {
                                                user: n,
                                                onClose: eo,
                                                className: Y.profileUsername,
                                                nickname: j.ZP.useName(null == eu ? void 0 : eu.id, z, n),
                                                nicknameIcons: (0, o.jsx)(S.Z, { userId: n.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == ep ? void 0 : ep.pronouns,
                                                tagClassName: Y.profileUsernameTag,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: ep,
                                                    themeType: G.lY.MODAL_V2,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsx)('div', {
                                                className: Y.profileButtons,
                                                children: (0, o.jsx)(F.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    guildId: W,
                                                    relationshipType: em,
                                                    friendToken: J,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: Y.profileScroller,
                                                children: [
                                                    (0, o.jsx)(L.Z, {
                                                        user: n,
                                                        bio: null == ep ? void 0 : ep.bio,
                                                        hidePersonalInformation: eb,
                                                        onClose: eo
                                                    }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(_.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(U.Z, {
                                                        heading: H.intl.string(H.t.a6XYDw),
                                                        headingClassName: Y.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        children: (0, o.jsx)(E.Z, {
                                                            userId: n.id,
                                                            guildId: null == ep ? void 0 : ep.guildId,
                                                            tooltipDelay: G.vB
                                                        })
                                                    }),
                                                    null != eu &&
                                                        (0, o.jsx)(k.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guild: eu,
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === G.Tb.ROLES
                                                        }),
                                                    eg.length > 0 &&
                                                        (0, o.jsx)(U.Z, {
                                                            heading: H.intl.string(H.t['3fe7U1']),
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === G.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(w.ZP, {
                                                                connectedAccounts: eg,
                                                                className: Y.profileConnections,
                                                                userId: n.id,
                                                                locale: ey
                                                            })
                                                        }),
                                                    ex.length > 0 &&
                                                        (0, o.jsx)(U.Z, {
                                                            heading: H.intl.string(H.t.PHjkRE),
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            children: ex.map((e) =>
                                                                (0, o.jsx)(
                                                                    w.tH,
                                                                    {
                                                                        className: Y.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: W,
                                                                        locale: ey,
                                                                        onApplicationClicked: () => {
                                                                            (0, O.pQ)({ action: 'PRESS_APP_CONNECTION' }), eo();
                                                                        }
                                                                    },
                                                                    e.application.id
                                                                )
                                                            )
                                                        }),
                                                    (0, o.jsx)(U.Z, {
                                                        heading: H.intl.string(H.t['mQKv+v']),
                                                        headingClassName: Y.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        scrollIntoView: $ === G.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: n.id,
                                                            className: Y.profileNote,
                                                            autoFocus: $ === G.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, O.pQ)(
                                                                    (function (e) {
                                                                        for (var n = 1; n < arguments.length; n++) {
                                                                            var t = null != arguments[n] ? arguments[n] : {},
                                                                                o = Object.keys(t);
                                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                                (o = o.concat(
                                                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                                    })
                                                                                )),
                                                                                o.forEach(function (n) {
                                                                                    var o;
                                                                                    (o = t[n]),
                                                                                        n in e
                                                                                            ? Object.defineProperty(e, n, {
                                                                                                  value: o,
                                                                                                  enumerable: !0,
                                                                                                  configurable: !0,
                                                                                                  writable: !0
                                                                                              })
                                                                                            : (e[n] = o);
                                                                                });
                                                                        }
                                                                        return e;
                                                                    })({ action: 'SET_NOTE' }, ec)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == ep ? void 0 : ep.profileEffectId) != null &&
                                        (0, o.jsx)(b.Z, {
                                            profileEffectId: null == ep ? void 0 : ep.profileEffectId,
                                            isHovering: el
                                        })
                                ]
                            }),
                            (0, o.jsx)(R.Z, {
                                user: n,
                                currentUser: t,
                                displayProfile: ep,
                                guildId: W,
                                initialSection: Q,
                                initialSubsection: $,
                                onClose: eo
                            })
                        ]
                    })
                })
            })
        })
    });
}
