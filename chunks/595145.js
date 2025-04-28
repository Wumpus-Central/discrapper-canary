n.d(t, { Z: () => W }), n(388685);
var o = n(200651),
    r = n(192379),
    i = n(272573),
    c = n(442837),
    a = n(481060),
    l = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(368326),
    m = n(429467),
    b = n(680295),
    h = n(189156),
    y = n(706454),
    g = n(430824),
    j = n(699516),
    _ = n(246946),
    x = n(5192),
    I = n(785717),
    v = n(221292),
    O = n(687158),
    N = n(250822),
    P = n(771362),
    A = n(510659),
    C = n(113557),
    Z = n(648052),
    T = n(867176),
    S = n(819602),
    w = n(681837),
    M = n(451834),
    E = n(900927),
    U = n(678738),
    V = n(502762),
    D = n(530),
    k = n(4517),
    L = n(179828),
    B = n(420654),
    F = n(993160),
    G = n(661462),
    R = n(228168),
    H = n(388032),
    Y = n(517603);
function W(e) {
    let { user: t, currentUser: n, guildId: W, channelId: z, messageId: K, roleId: X, sessionId: q, friendToken: J, initialSection: Q, initialSubsection: $, transitionState: ee, customStatusPrompt: et, openedAt: en, onClose: eo, sourceAnalyticsLocations: er = [] } = e,
        { analyticsLocations: ei } = (0, f.ZP)([...er, u.Z.USER_PROFILE_MODAL_V2]),
        ec = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            sourceSessionId: q,
            showGuildProfile: !0,
            guildId: W,
            channelId: z,
            messageId: K,
            roleId: X
        }),
        ea = r.createRef(),
        el = (0, s.Z)(ea),
        es = (0, A.$m)(),
        ed = (0, a.q_F)({
            opacity: +(null != es.interactionType),
            config: { duration: 150 }
        }),
        eu = (0, c.e7)([g.Z], () => (null != W ? g.Z.getGuild(W) : null)),
        ef = r.useMemo(() => (null != W ? { [W]: [t.id] } : {}), [W, t.id]);
    (0, d.$)(ef);
    let ep = (0, O.ZP)(t.id, W),
        em = (0, c.e7)([j.Z], () => j.Z.getRelationshipType(t.id)),
        eb = (0, c.e7)([_.Z], () => _.Z.hidePersonalInformation),
        eh = (0, p.p)({ location: 'UserProfileModalV2' }),
        ey = r.useMemo(() => (null != et ? et : (0, m.Z)()), [et]),
        eg = (0, c.e7)([y.default], () => y.default.locale),
        ej = (0, P.Z)(t.id),
        e_ = (0, N.Z)(t.id);
    return (0, o.jsx)(f.Gt, {
        value: ei,
        children: (0, o.jsx)(I.Mt, {
            value: ec,
            openedAt: en,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, o.jsx)(A.NJ, {
                value: es,
                children: (0, o.jsx)(a.Y0X, {
                    hideShadow: !0,
                    className: Y.root,
                    transitionState: ee,
                    'aria-label': H.intl.string(H.t['3N/J2t']),
                    children: (0, o.jsxs)(V.Z, {
                        ref: ea,
                        user: t,
                        displayProfile: ep,
                        themeType: R.lY.MODAL_V2,
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
                                                user: t,
                                                displayProfile: ep,
                                                themeType: R.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(M.Z, {
                                                userId: t.id,
                                                onClose: eo,
                                                className: Y.toast
                                            }),
                                            (0, o.jsx)(C.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                displayProfile: ep,
                                                guildId: W,
                                                channelId: z,
                                                themeType: R.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(k.Z, {
                                                location: 'UserProfileModalV2',
                                                user: t,
                                                guildId: W,
                                                channelId: z,
                                                themeType: R.lY.MODAL_V2,
                                                hasEntered: ee === a.Dvm.ENTERED,
                                                prompt: eh && t.id === n.id ? ey : null,
                                                onCloseProfile: eo
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: Y.profileBody,
                                        children: [
                                            (0, o.jsx)(D.Z, {
                                                user: t,
                                                onClose: eo,
                                                className: Y.profileUsername,
                                                nickname: x.ZP.useName(null == eu ? void 0 : eu.id, z, t),
                                                nicknameIcons: (0, o.jsx)(w.Z, { userId: t.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == ep ? void 0 : ep.pronouns,
                                                tagClassName: Y.profileUsernameTag,
                                                tags: (0, o.jsx)(Z.Z, {
                                                    displayProfile: ep,
                                                    themeType: R.lY.MODAL_V2,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsx)('div', {
                                                className: Y.profileButtons,
                                                children: (0, o.jsx)(F.Z, {
                                                    user: t,
                                                    currentUser: n,
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
                                                    (0, o.jsx)(B.Z, {
                                                        user: t,
                                                        bio: null == ep ? void 0 : ep.bio,
                                                        hidePersonalInformation: eb,
                                                        onClose: eo
                                                    }),
                                                    t.isProvisional &&
                                                        (0, o.jsx)(h.WR, {
                                                            userId: t.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(U.Z, {
                                                        heading: H.intl.string(H.t.a6XYDw),
                                                        headingClassName: Y.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        children: (0, o.jsx)(E.Z, {
                                                            userId: t.id,
                                                            guildId: null == ep ? void 0 : ep.guildId,
                                                            tooltipDelay: R.vB
                                                        })
                                                    }),
                                                    null != eu &&
                                                        (0, o.jsx)(L.Z, {
                                                            user: t,
                                                            currentUser: n,
                                                            guild: eu,
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === R.Tb.ROLES
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(U.Z, {
                                                            heading: H.intl.string(H.t['3fe7U1']),
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === R.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: ej,
                                                                className: Y.profileConnections,
                                                                userId: t.id,
                                                                locale: eg
                                                            })
                                                        }),
                                                    e_.length > 0 &&
                                                        (0, o.jsx)(U.Z, {
                                                            heading: H.intl.string(H.t.PHjkRE),
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            children: e_.map((e) =>
                                                                (0, o.jsx)(
                                                                    S.tH,
                                                                    {
                                                                        className: Y.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: W,
                                                                        locale: eg,
                                                                        onApplicationClicked: () => {
                                                                            (0, v.pQ)({ action: 'PRESS_APP_CONNECTION' }), eo();
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
                                                        scrollIntoView: $ === R.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: t.id,
                                                            className: Y.profileNote,
                                                            autoFocus: $ === R.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, v.pQ)(
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
                            (0, o.jsx)(G.Z, {
                                user: t,
                                currentUser: n,
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
