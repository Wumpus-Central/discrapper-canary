t.d(n, { Z: () => q }), t(388685);
var o = t(200651),
    i = t(192379),
    c = t(272573),
    r = t(442837),
    l = t(481060),
    a = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    p = t(368326),
    b = t(429467),
    m = t(680295),
    h = t(189156),
    g = t(706454),
    x = t(430824),
    j = t(699516),
    _ = t(246946),
    y = t(5192),
    I = t(785717),
    v = t(221292),
    A = t(687158),
    C = t(250822),
    O = t(771362),
    N = t(510659),
    Z = t(113557),
    T = t(648052),
    P = t(867176),
    S = t(819602),
    w = t(681837),
    V = t(451834),
    E = t(900927),
    M = t(678738),
    U = t(502762),
    k = t(530),
    B = t(705556),
    L = t(4517),
    D = t(412317),
    H = t(179828),
    R = t(420654),
    Y = t(661462),
    G = t(228168),
    F = t(388032),
    W = t(517603);
function q(e) {
    let { user: n, currentUser: t, guildId: q, channelId: z, messageId: K, roleId: J, sessionId: Q, friendToken: X, initialSection: $, initialSubsection: ee, transitionState: en, customStatusPrompt: et, openedAt: eo, onClose: ei, sourceAnalyticsLocations: ec = [] } = e,
        { analyticsLocations: er } = (0, f.ZP)([...ec, u.Z.USER_PROFILE_MODAL_V2]),
        el = (0, I.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
            sourceSessionId: Q,
            showGuildProfile: !0,
            guildId: q,
            channelId: z,
            messageId: K,
            roleId: J
        }),
        ea = i.createRef(),
        es = (0, s.Z)(ea),
        ed = (0, N.$m)(),
        eu = (0, l.q_F)({
            opacity: +(null != ed.interactionType),
            config: { duration: 150 }
        }),
        ef = (0, r.e7)([x.Z], () => (null != q ? x.Z.getGuild(q) : null)),
        ep = i.useMemo(() => (null != q ? { [q]: [n.id] } : {}), [q, n.id]);
    (0, d.$)(ep);
    let eb = (0, A.ZP)(n.id, q),
        em = (0, r.e7)([j.Z], () => j.Z.getRelationshipType(n.id)),
        eh = (0, r.e7)([_.Z], () => _.Z.hidePersonalInformation),
        eg = (0, p.p)({ location: 'UserProfileModalV2' }),
        ex = i.useMemo(() => (null != et ? et : (0, b.Z)()), [et]),
        ej = (0, r.e7)([g.default], () => g.default.locale),
        e_ = (0, O.Z)(n.id),
        ey = (0, C.Z)(n.id);
    return (0, o.jsx)(f.Gt, {
        value: er,
        children: (0, o.jsx)(I.Mt, {
            value: el,
            openedAt: eo,
            fetchStartedAt: null == eb ? void 0 : eb.fetchStartedAt,
            fetchEndedAt: null == eb ? void 0 : eb.fetchEndedAt,
            isLoaded: null == eb ? void 0 : eb.isLoaded,
            children: (0, o.jsx)(N.NJ, {
                value: ed,
                children: (0, o.jsx)(l.Y0X, {
                    hideShadow: !0,
                    className: W.root,
                    transitionState: en,
                    'aria-label': F.intl.string(F.t['3N/J2t']),
                    children: (0, o.jsxs)(U.Z, {
                        ref: ea,
                        user: n,
                        displayProfile: eb,
                        themeType: G.lY.MODAL_V2,
                        children: [
                            (0, o.jsxs)('div', {
                                className: W.profile,
                                children: [
                                    null != ed.interactionType &&
                                        (0, o.jsx)(c.animated.div, {
                                            style: eu,
                                            className: W.backdrop
                                        }),
                                    (0, o.jsxs)('header', {
                                        className: W.profileHeader,
                                        children: [
                                            (0, o.jsx)(P.Z, {
                                                user: n,
                                                displayProfile: eb,
                                                themeType: G.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(V.Z, {
                                                userId: n.id,
                                                onClose: ei,
                                                className: W.toast
                                            }),
                                            (0, o.jsx)(Z.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                displayProfile: eb,
                                                guildId: q,
                                                channelId: z,
                                                themeType: G.lY.MODAL_V2
                                            }),
                                            (0, o.jsx)(L.Z, {
                                                location: 'UserProfileModalV2',
                                                user: n,
                                                guildId: q,
                                                channelId: z,
                                                themeType: G.lY.MODAL_V2,
                                                hasEntered: en === l.Dvm.ENTERED,
                                                prompt: eg && n.id === t.id ? ex : null,
                                                onCloseProfile: ei
                                            })
                                        ]
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: W.profileBody,
                                        children: [
                                            (0, o.jsx)(k.Z, {
                                                user: n,
                                                onClose: ei,
                                                className: W.profileUsername,
                                                nickname: y.ZP.useName(null == ef ? void 0 : ef.id, z, n),
                                                nicknameIcons: (0, o.jsx)(w.Z, { userId: n.id }),
                                                nicknameVariant: 'heading-xxl/semibold',
                                                pronouns: null == eb ? void 0 : eb.pronouns,
                                                tagClassName: W.profileUsernameTag,
                                                tags: (0, o.jsx)(T.Z, {
                                                    displayProfile: eb,
                                                    themeType: G.lY.MODAL_V2,
                                                    onClose: ei
                                                })
                                            }),
                                            (0, o.jsxs)('div', {
                                                className: W.profileButtons,
                                                children: [
                                                    (0, o.jsx)(D.Z, {
                                                        isCurrentUser: n.id === t.id,
                                                        user: n,
                                                        relationshipType: em,
                                                        friendToken: X,
                                                        onClose: ei,
                                                        autoFocus: null == ee
                                                    }),
                                                    (0, o.jsx)(B.Z, {
                                                        user: n,
                                                        guildId: q,
                                                        onClose: ei
                                                    })
                                                ]
                                            }),
                                            (0, o.jsxs)(l.Ttm, {
                                                fade: !0,
                                                className: W.profileScroller,
                                                children: [
                                                    (0, o.jsx)(R.Z, {
                                                        user: n,
                                                        bio: null == eb ? void 0 : eb.bio,
                                                        hidePersonalInformation: eh,
                                                        onClose: ei
                                                    }),
                                                    n.isProvisional &&
                                                        (0, o.jsx)(h.WR, {
                                                            userId: n.id,
                                                            headingColor: 'header-secondary'
                                                        }),
                                                    (0, o.jsx)(M.Z, {
                                                        heading: F.intl.string(F.t.a6XYDw),
                                                        headingClassName: W.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        children: (0, o.jsx)(E.Z, {
                                                            userId: n.id,
                                                            guildId: null == eb ? void 0 : eb.guildId,
                                                            tooltipDelay: G.vB
                                                        })
                                                    }),
                                                    null != ef &&
                                                        (0, o.jsx)(H.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guild: ef,
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === G.Tb.ROLES
                                                        }),
                                                    e_.length > 0 &&
                                                        (0, o.jsx)(M.Z, {
                                                            heading: F.intl.string(F.t['3fe7U1']),
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: ee === G.Tb.CONNECTIONS,
                                                            children: (0, o.jsx)(S.ZP, {
                                                                connectedAccounts: e_,
                                                                className: W.profileConnections,
                                                                userId: n.id,
                                                                locale: ej
                                                            })
                                                        }),
                                                    ey.length > 0 &&
                                                        (0, o.jsx)(M.Z, {
                                                            heading: F.intl.string(F.t.PHjkRE),
                                                            headingClassName: W.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            children: ey.map((e) =>
                                                                (0, o.jsx)(
                                                                    S.tH,
                                                                    {
                                                                        className: W.profileAppConnections,
                                                                        applicationRoleConnection: e,
                                                                        selectedGuildId: q,
                                                                        locale: ej,
                                                                        onApplicationClicked: () => {
                                                                            (0, v.pQ)({ action: 'PRESS_APP_CONNECTION' }), ei();
                                                                        }
                                                                    },
                                                                    e.application.id
                                                                )
                                                            )
                                                        }),
                                                    (0, o.jsx)(M.Z, {
                                                        heading: F.intl.string(F.t['mQKv+v']),
                                                        headingClassName: W.profileHeading,
                                                        headingVariant: 'text-xs/semibold',
                                                        headingColor: 'none',
                                                        scrollIntoView: ee === G.Tb.NOTE,
                                                        children: (0, o.jsx)(a.Z, {
                                                            userId: n.id,
                                                            className: W.profileNote,
                                                            autoFocus: ee === G.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, v.pQ)(
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
                                                                    })({ action: 'SET_NOTE' }, el)
                                                                )
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (null == eb ? void 0 : eb.profileEffectId) != null &&
                                        (0, o.jsx)(m.Z, {
                                            profileEffectId: null == eb ? void 0 : eb.profileEffectId,
                                            isHovering: es
                                        })
                                ]
                            }),
                            (0, o.jsx)(Y.Z, {
                                user: n,
                                currentUser: t,
                                displayProfile: eb,
                                guildId: q,
                                initialSection: $,
                                initialSubsection: ee,
                                onClose: ei
                            })
                        ]
                    })
                })
            })
        })
    });
}
