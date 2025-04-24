t.d(n, { Z: () => q }), t(388685);
var o = t(200651),
    c = t(192379),
    i = t(272573),
    a = t(442837),
    r = t(481060),
    l = t(666520),
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
    _ = t(699516),
    j = t(246946),
    y = t(5192),
    A = t(785717),
    v = t(221292),
    O = t(687158),
    I = t(250822),
    N = t(771362),
    C = t(510659),
    P = t(113557),
    T = t(648052),
    Z = t(867176),
    w = t(819602),
    S = t(681837),
    E = t(451834),
    V = t(900927),
    M = t(678738),
    B = t(502762),
    D = t(530),
    k = t(705556),
    U = t(4517),
    L = t(412317),
    H = t(179828),
    R = t(420654),
    F = t(228168),
    Y = t(388032),
    G = t(517603);
function W(e) {
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
}
let Q = [
    {
        section: F.oh.FEATURED,
        text: Y.intl.string(Y.t.GHLrQ0)
    },
    {
        section: F.oh.ACTIVITY,
        text: Y.intl.string(Y.t.chq59f)
    },
    {
        section: F.oh.MUTUALS,
        text: Y.intl.string(Y.t.f5KLNj)
    }
];
function q(e) {
    var n, t;
    let { user: q, currentUser: z, guildId: X, channelId: J, messageId: K, roleId: $, sessionId: ee, friendToken: en, initialSection: et, initialSubsection: eo, transitionState: ec, customStatusPrompt: ei, openedAt: ea, onClose: er, sourceAnalyticsLocations: el = [] } = e,
        { analyticsLocations: es } = (0, f.ZP)([...el, u.Z.USER_PROFILE_MODAL_V2]),
        ed = (0, A.ZB)({
            layout: 'MODAL_V2',
            userId: q.id,
            sourceSessionId: ee,
            showGuildProfile: !0,
            guildId: X,
            channelId: J,
            messageId: K,
            roleId: $
        }),
        eu = c.createRef(),
        ef = (0, s.Z)(eu),
        ep = (0, C.$m)(),
        eb = (0, r.q_F)({
            opacity: +(null != ep.interactionType),
            config: { duration: 150 }
        }),
        em = (0, a.e7)([x.Z], () => (null != X ? x.Z.getGuild(X) : null)),
        eh = c.useMemo(() => (null != X ? { [X]: [q.id] } : {}), [X, q.id]);
    (0, d.$)(eh);
    let eg = (0, O.ZP)(q.id, X),
        ex = (0, a.e7)([_.Z], () => _.Z.getRelationshipType(q.id)),
        e_ = (0, a.e7)([j.Z], () => j.Z.hidePersonalInformation),
        ej = (0, p.p)({ location: 'UserProfileModalV2' }),
        ey = c.useMemo(() => (null != ei ? ei : (0, b.Z)()), [ei]),
        eA = (0, a.e7)([g.default], () => g.default.locale),
        ev = (0, N.Z)(q.id),
        eO = (0, I.Z)(q.id),
        [{ section: eI, subsection: eN }, eC] = c.useState({
            section:
                null !=
                (t =
                    null ==
                    (n = Q.find((e) => {
                        let { section: n } = e;
                        return n === et;
                    }))
                        ? void 0
                        : n.section)
                    ? t
                    : F.oh.FEATURED,
            subsection: eo
        });
    return (
        c.useEffect(() => {
            null == Q.find((e) => e.section === eI) &&
                eC({
                    section: Q[0].section,
                    subsection: void 0
                });
        }, [eI]),
        (0, o.jsx)(f.Gt, {
            value: es,
            children: (0, o.jsx)(A.Mt, {
                value: ed,
                openedAt: ea,
                fetchStartedAt: null == eg ? void 0 : eg.fetchStartedAt,
                fetchEndedAt: null == eg ? void 0 : eg.fetchEndedAt,
                isLoaded: null == eg ? void 0 : eg.isLoaded,
                children: (0, o.jsx)(C.NJ, {
                    value: ep,
                    children: (0, o.jsx)(r.Y0X, {
                        hideShadow: !0,
                        className: G.root,
                        transitionState: ec,
                        'aria-label': Y.intl.string(Y.t['3N/J2t']),
                        children: (0, o.jsxs)(B.Z, {
                            ref: eu,
                            user: q,
                            displayProfile: eg,
                            themeType: F.lY.MODAL_V2,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: G.profile,
                                    children: [
                                        null != ep.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: eb,
                                                className: G.backdrop
                                            }),
                                        (0, o.jsxs)('header', {
                                            className: G.profileHeader,
                                            children: [
                                                (0, o.jsx)(Z.Z, {
                                                    user: q,
                                                    displayProfile: eg,
                                                    themeType: F.lY.MODAL_V2
                                                }),
                                                (0, o.jsx)(E.Z, {
                                                    userId: q.id,
                                                    onClose: er,
                                                    className: G.toast
                                                }),
                                                (0, o.jsx)(P.Z, {
                                                    location: 'UserProfileModalV2',
                                                    user: q,
                                                    displayProfile: eg,
                                                    guildId: X,
                                                    channelId: J,
                                                    themeType: F.lY.MODAL_V2
                                                }),
                                                (0, o.jsx)(U.Z, {
                                                    location: 'UserProfileModalV2',
                                                    user: q,
                                                    guildId: X,
                                                    channelId: J,
                                                    themeType: F.lY.MODAL_V2,
                                                    hasEntered: ec === r.Dvm.ENTERED,
                                                    prompt: ej && q.id === z.id ? ey : null,
                                                    onCloseProfile: er
                                                })
                                            ]
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: G.profileBody,
                                            children: [
                                                (0, o.jsx)(D.Z, {
                                                    user: q,
                                                    onClose: er,
                                                    className: G.profileUsername,
                                                    nickname: y.ZP.useName(null == em ? void 0 : em.id, J, q),
                                                    nicknameIcons: (0, o.jsx)(S.Z, { userId: q.id }),
                                                    nicknameVariant: 'heading-xxl/semibold',
                                                    pronouns: null == eg ? void 0 : eg.pronouns,
                                                    tagClassName: G.profileUsernameTag,
                                                    tags: (0, o.jsx)(T.Z, {
                                                        displayProfile: eg,
                                                        themeType: F.lY.MODAL_V2,
                                                        onClose: er
                                                    })
                                                }),
                                                (0, o.jsxs)('div', {
                                                    className: G.profileButtons,
                                                    children: [
                                                        (0, o.jsx)(L.Z, {
                                                            isCurrentUser: q.id === z.id,
                                                            user: q,
                                                            relationshipType: ex,
                                                            friendToken: en,
                                                            onClose: er,
                                                            autoFocus: null == eN
                                                        }),
                                                        (0, o.jsx)(k.Z, {
                                                            user: q,
                                                            guildId: X,
                                                            onClose: er
                                                        })
                                                    ]
                                                }),
                                                (0, o.jsxs)(r.Ttm, {
                                                    fade: !0,
                                                    className: G.profileScroller,
                                                    children: [
                                                        (0, o.jsx)(R.Z, {
                                                            user: q,
                                                            bio: null == eg ? void 0 : eg.bio,
                                                            hidePersonalInformation: e_,
                                                            onClose: er
                                                        }),
                                                        q.isProvisional &&
                                                            (0, o.jsx)(h.WR, {
                                                                userId: q.id,
                                                                headingColor: 'header-secondary'
                                                            }),
                                                        (0, o.jsx)(M.Z, {
                                                            heading: Y.intl.string(Y.t.a6XYDw),
                                                            headingClassName: G.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            children: (0, o.jsx)(V.Z, {
                                                                userId: q.id,
                                                                guildId: null == eg ? void 0 : eg.guildId,
                                                                tooltipDelay: F.vB
                                                            })
                                                        }),
                                                        null != em &&
                                                            (0, o.jsx)(H.Z, {
                                                                user: q,
                                                                currentUser: z,
                                                                guild: em,
                                                                headingClassName: G.profileHeading,
                                                                headingVariant: 'text-xs/semibold',
                                                                headingColor: 'none',
                                                                scrollIntoView: eN === F.Tb.ROLES
                                                            }),
                                                        ev.length > 0 &&
                                                            (0, o.jsx)(M.Z, {
                                                                heading: Y.intl.string(Y.t['3fe7U1']),
                                                                headingClassName: G.profileHeading,
                                                                headingVariant: 'text-xs/semibold',
                                                                headingColor: 'none',
                                                                scrollIntoView: eN === F.Tb.CONNECTIONS,
                                                                children: (0, o.jsx)(w.ZP, {
                                                                    connectedAccounts: ev,
                                                                    className: G.profileConnections,
                                                                    userId: q.id,
                                                                    locale: eA
                                                                })
                                                            }),
                                                        eO.length > 0 &&
                                                            (0, o.jsx)(M.Z, {
                                                                heading: Y.intl.string(Y.t.PHjkRE),
                                                                headingClassName: G.profileHeading,
                                                                headingVariant: 'text-xs/semibold',
                                                                headingColor: 'none',
                                                                children: eO.map((e) =>
                                                                    (0, o.jsx)(
                                                                        w.tH,
                                                                        {
                                                                            className: G.profileAppConnections,
                                                                            applicationRoleConnection: e,
                                                                            selectedGuildId: X,
                                                                            locale: eA,
                                                                            onApplicationClicked: () => {
                                                                                (0, v.pQ)({ action: 'PRESS_APP_CONNECTION' }), er();
                                                                            }
                                                                        },
                                                                        e.application.id
                                                                    )
                                                                )
                                                            }),
                                                        (0, o.jsx)(M.Z, {
                                                            heading: Y.intl.string(Y.t['mQKv+v']),
                                                            headingClassName: G.profileHeading,
                                                            headingVariant: 'text-xs/semibold',
                                                            headingColor: 'none',
                                                            scrollIntoView: eN === F.Tb.NOTE,
                                                            children: (0, o.jsx)(l.Z, {
                                                                userId: q.id,
                                                                className: G.profileNote,
                                                                autoFocus: eN === F.Tb.NOTE,
                                                                onUpdate: () => (0, v.pQ)(W({ action: 'SET_NOTE' }, ed))
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (null == eg ? void 0 : eg.profileEffectId) != null &&
                                            (0, o.jsx)(m.Z, {
                                                profileEffectId: null == eg ? void 0 : eg.profileEffectId,
                                                isHovering: ef
                                            })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    children: (0, o.jsx)(r.njP, {
                                        type: 'top',
                                        className: G.tabBar,
                                        selectedItem: eI,
                                        onItemSelect: (e) => {
                                            (0, v.pQ)(
                                                W(
                                                    {
                                                        action: 'PRESS_SECTION',
                                                        section: e
                                                    },
                                                    ed
                                                )
                                            ),
                                                eC({
                                                    section: e,
                                                    subsection: void 0
                                                });
                                        },
                                        children: Q.map((e) => {
                                            let { section: n, text: t } = e;
                                            return (0, o.jsx)(
                                                r.njP.Item,
                                                {
                                                    className: G.tabBarItem,
                                                    id: n,
                                                    'aria-label': t,
                                                    children: (0, o.jsx)(r.X6q, {
                                                        variant: 'heading-lg/medium',
                                                        children: t
                                                    })
                                                },
                                                n
                                            );
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    );
}
