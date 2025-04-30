t.d(n, { Z: () => z }), t(388685);
var o = t(200651),
    r = t(192379),
    c = t(272573),
    a = t(442837),
    i = t(481060),
    l = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    p = t(368326),
    m = t(429467),
    _ = t(680295),
    b = t(189156),
    y = t(706454),
    h = t(430824),
    x = t(699516),
    j = t(246946),
    g = t(5192),
    I = t(785717),
    O = t(221292),
    v = t(687158),
    P = t(250822),
    N = t(771362),
    C = t(510659),
    Z = t(113557),
    A = t(648052),
    T = t(867176),
    w = t(280885),
    S = t(819602),
    M = t(681837),
    E = t(451834),
    U = t(900927),
    B = t(502762),
    k = t(530),
    D = t(4517),
    V = t(179828),
    L = t(993160),
    F = t(693408),
    G = t(661462),
    R = t(228168),
    H = t(388032),
    Y = t(517603);
function z(e) {
    let { user: n, currentUser: t, guildId: z, channelId: K, messageId: q, roleId: W, sessionId: X, friendToken: J, initialSection: Q, initialSubsection: $, transitionState: ee, customStatusPrompt: en, openedAt: et, onClose: eo, sourceAnalyticsLocations: er = [] } = e,
        { analyticsLocations: ec } = (0, f.ZP)([...er, u.Z.USER_PROFILE_MODAL_V2]),
        ea = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: X,
            showGuildProfile: !0,
            guildId: z,
            channelId: K,
            messageId: q,
            roleId: W
        }),
        ei = r.createRef(),
        el = (0, s.Z)(ei),
        es = (0, C.$m)(),
        ed = (0, i.q_F)({
            opacity: +(null != es.interactionType),
            config: { duration: 150 }
        }),
        eu = (0, a.e7)([h.Z], () => (null != z ? h.Z.getGuild(z) : null)),
        ef = r.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, d.$)(ef);
    let ep = (0, v.ZP)(n.id, z),
        em = (0, a.e7)([x.Z], () => x.Z.getRelationshipType(n.id)),
        e_ = (0, a.e7)([j.Z], () => j.Z.hidePersonalInformation),
        eb = (0, p.p)({ location: 'UserProfileModalV2' }),
        ey = r.useMemo(() => (null != en ? en : (0, m.Z)()), [en]),
        eh = (0, a.e7)([y.default], () => y.default.locale),
        ex = (0, N.Z)(n.id),
        ej = (0, P.Z)(n.id);
    return (0, o.jsx)(f.Gt, {
        value: ec,
        children: (0, o.jsx)(I.Mt, {
            value: ea,
            openedAt: et,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, o.jsx)(C.NJ, {
                value: es,
                children: (0, o.jsx)(i.Y0X, {
                    hideShadow: !0,
                    className: Y.root,
                    transitionState: ee,
                    'aria-label': H.intl.string(H.t['3N/J2t']),
                    children: (0, o.jsxs)(B.Z, {
                        ref: ei,
                        user: n,
                        displayProfile: ep,
                        themeType: R.lY.MODAL_V2,
                        children: [
                            (0, o.jsxs)('div', {
                                className: Y.profile,
                                children: [
                                    null != es.interactionType &&
                                        (0, o.jsx)(c.animated.div, {
                                            style: ed,
                                            className: Y.backdrop
                                        }),
                                    (0, o.jsxs)('header', {
                                        className: Y.profileHeader,
                                        children: [
                                            (0, o.jsx)(T.Z, {
                                                user: n,
                                                displayProfile: ep,
                                                themeType: R.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(E.Z, {
                                                userId: n.id,
                                                onClose: eo,
                                                className: Y.toast
                                            }),
                                            (0, o.jsx)(Z.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: ep,
                                                guildId: z,
                                                channelId: K,
                                                themeType: R.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(D.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: z,
                                                channelId: K,
                                                themeType: R.lY.MODAL_V2,
                                                hasEntered: ee === i.Dvm.ENTERED,
                                                prompt: eb && n.id === t.id ? ey : null,
                                                onCloseProfile: eo
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: Y.profileBody,
                                        children: [
                                            (0, o.jsx)(k.Z, {
                                                user: n,
                                                onClose: eo,
                                                className: Y.profileUsername,
                                                nickname: g.ZP.useName(null == eu ? void 0 : eu.id, K, n),
                                                nicknameIcons: (0, o.jsx)(M.Z, { userId: n.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == ep ? void 0 : ep.pronouns,
                                                tagClassName: Y.profileUsernameTag,
                                                tags: (0, o.jsx)(A.Z, {
                                                    displayProfile: ep,
                                                    themeType: R.lY.MODAL_V2,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsx)('div', {
                                                className: Y.profileButtons,
                                                children: (0, o.jsx)(L.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    guildId: z,
                                                    relationshipType: em,
                                                    friendToken: J,
                                                    onClose: eo
                                                })
                                            }),
                                            (0, o.jsxs)(i.Ttm, {
                                                fade: !0,
                                                className: Y.profileScroller,
                                                children: [
                                                    (null == ep ? void 0 : ep.bio) != null &&
                                                        (null == ep ? void 0 : ep.bio) !== '' &&
                                                        !e_ &&
                                                        (0, o.jsx)(w.Z, {
                                                            userBio: ep.bio,
                                                            setLineClamp: !1
                                                        }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(b.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(F.Z, {
                                                        heading: H.intl.string(H.t.a6XYDw),
                                                        children: (0, o.jsx)(U.Z, {
                                                            userId: n.id,
                                                            guildId: null == ep ? void 0 : ep.guildId,
                                                            tooltipDelay: R.vB
                                                        })
                                                    }),
                                                    null != eu &&
                                                        (0, o.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guild: eu,
                                                            headingClassName: Y.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: $ === R.Tb.ROLES
                                                        }),
                                                    ex.length > 0 &&
                                                        (0, o.jsx)(F.Z, {
                                                            heading: H.intl.string(H.t['3fe7U1']),
                                                            scrollIntoView: $ === R.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: ex,
                                                                className: Y.profileConnections,
                                                                userId: n.id,
                                                                locale: eh
                                                            })
                                                        }),
                                                    ej.length > 0 &&
                                                        (0, o.jsx)(F.Z, {
                                                            heading: H.intl.string(H.t.PHjkRE),
                                                            children: ej.map((e) =>
                                                                (0, o.jsx)(
                                                                    S.tH,
                                                                    {
                                                                        className: Y.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: z,
                                                                        locale: eh,
                                                                        onApplicationClicked: () => {
                                                                            (0, O.pQ)({ action: 'PRESS_APP_CONNECTION' }), eo();
                                                                        }
                                                                    },
                                                                    e.application.id
                                                                )
                                                            )
                                                        }),
                                                    (0, o.jsx)(F.Z, {
                                                        heading: H.intl.string(H.t['mQKv+v']),
                                                        scrollIntoView: $ === R.Tb.NOTE,
                                                        children: (0, o.jsx)(l.Z, {
                                                            userId: n.id,
                                                            className: Y.profileNote,
                                                            autoFocus: $ === R.Tb.NOTE,
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
                                                                    })({ action: 'SET_NOTE' }, ea)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == ep ? void 0 : ep.profileEffectId) != null &&
                                        (0, o.jsx)(_.Z, {
                                            profileEffectId: null == ep ? void 0 : ep.profileEffectId,
                                            isHovering: el
                                        })
                                ]
                            }),
                            (0, o.jsx)(G.Z, {
                                user: n,
                                currentUser: t,
                                displayProfile: ep,
                                guildId: z,
                                channelId: K,
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
