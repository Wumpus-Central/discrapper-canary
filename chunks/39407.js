n.r(t), n.d(t, { default: () => $ });
var l = n(627968),
    a = n(64700),
    r = n(517738),
    i = n(311907),
    s = n(73939),
    o = n(717421),
    d = n(477782),
    u = n(305866),
    c = n(871682),
    A = n(140735),
    f = n(707554),
    _ = n(80682),
    p = n(793574),
    h = n(688810),
    g = n(351966),
    I = n(361628),
    m = n(744808),
    x = n(915089),
    E = n(713517),
    v = n(645507),
    b = n(267102),
    N = n(71393),
    P = n(562153),
    y = n(183555),
    C = n(672385),
    S = n(570287),
    j = n(950191),
    R = n(935520),
    O = n(679492),
    M = n(657331),
    T = n(718019),
    L = n(915614),
    w = n(439053),
    G = n(312381),
    U = n(946356),
    D = n(587168),
    F = n(193738),
    V = n(613457),
    k = n(853397),
    W = n(159218),
    H = n(850092),
    X = n(320819),
    q = n(848674),
    B = n(652215),
    Y = n(996988),
    z = n(985018),
    Z = n(656884);
function $(e) {
    let {
            user: t,
            currentUser: n,
            guildId: $,
            channelId: K,
            messageId: Q,
            roleId: J,
            openedAt: ee,
            closePopout: et,
            setPopoutRef: en,
            disableUserProfileLink: el = __OVERLAY__,
            newAnalyticsLocations: ea = [],
            appContext: er,
            disableAutoFocus: ei = !1,
            onClickContainer: es,
        } = e,
        { analyticsLocations: eo } = (0, h.Ay)([...ea, p.A.USER_PROFILE_POPOUT]),
        ed = (0, b.aL)(),
        eu = (0, y.pb)({ layout: "POPOUT", userId: t.id, guildId: $, channelId: K, messageId: Q, roleId: J }),
        ec = (0, i.bG)([N.A], () => (null != $ ? N.A.getGuild($) : null)),
        eA = a.useMemo(() => (null != $ ? { [$]: [t.id] } : {}), [$, t.id]);
    (0, _.Eq)(eA, "UserProfilePopout");
    let ef = a.useRef(null),
        e_ = (0, j.Ay)(t.id, $),
        ep = (0, I.A)(e_?.profileFrame?.skuId, "UserProfilePopout"),
        [eh, eg] = a.useState(!1),
        eI = (0, S.A)(t.id, $),
        { enabled: em } = R.A.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: ex, isHovering: eE } = (0, E.A)(ef),
        ev = (0, O.fC)(),
        eb = (0, o.z)({ opacity: +(null != ev.interactionType), config: { duration: 150 } });
    a.useEffect(() => {
        en?.(ef?.current);
    }, [ef, en]);
    let eN = a.useRef(null),
        eP = t.id === n.id,
        ey = a.useMemo(() => (0, v.A)(), []),
        eC = (e) => {
            et?.(),
                ed.dispatch(B.jej.POPOUT_CLOSE),
                (0, M.openUserProfileModal)({
                    sourceAnalyticsLocations: eo,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ey,
                    ...eu,
                    ...e,
                    appContext: er,
                });
        },
        eS = ei ? "div" : u.l,
        ej = (0, x.GV)(),
        eR = P.Ay.useName(ec?.id, K, t);
    return (0, l.jsx)(h.f5, {
        value: eo,
        children: (0, l.jsx)(y.of, {
            value: eu,
            openedAt: ee,
            fetchStartedAt: e_?.fetchStartedAt,
            fetchEndedAt: e_?.fetchEndedAt,
            isLoaded: e_?.isLoaded,
            children: (0, l.jsx)(O.Hl, {
                value: ev,
                children: (0, l.jsxs)(eS, {
                    ref: ef,
                    "aria-labelledby": ej,
                    onClick: es,
                    children: [
                        eI &&
                            eh &&
                            (0, l.jsx)(s.F, {
                                component: "div",
                                className: Z.g$,
                                children: (0, l.jsx)(c.F, {
                                    children: (0, l.jsx)(H.A, { userId: t.id, onSendWave: et }),
                                }),
                            }),
                        (0, l.jsx)(A.A, {
                            children: (0, l.jsx)(f.H, { id: ej, children: z.intl.format(z.t.KRe1Fk, { name: eR }) }),
                        }),
                        (0, l.jsx)(f.F, {
                            children: (0, l.jsxs)(U.A, {
                                user: t,
                                displayProfile: e_,
                                themeType: Y.d.POPOUT,
                                privateBanner: e_?.private === !0 ? (0, l.jsx)(G.A, {}) : void 0,
                                children: [
                                    null != ev.interactionType &&
                                        (0, l.jsx)(r.animated.div, { style: eb, className: Z.tB }),
                                    (0, l.jsxs)(D.A, {
                                        children: [
                                            (0, l.jsx)(V.A, {
                                                shouldShowTooltip: null === ev.interactionType,
                                                user: t,
                                                guildId: $,
                                                channelId: K,
                                                onClose: et,
                                                appContext: er,
                                            }),
                                            (0, l.jsx)(F.A, {
                                                themeType: Y.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: eg,
                                                toastShowing: eI && eh && em,
                                            }),
                                            !eP &&
                                                (0, l.jsx)(k.yo, {
                                                    user: t,
                                                    guildId: $,
                                                    viewProfileItem: el
                                                        ? null
                                                        : (0, l.jsx)(d.Dr, {
                                                              id: "view-profile",
                                                              label: z.intl.string(z.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eC(),
                                                                      (0, C.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: eo,
                                                                          ...eu,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: er,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: Z.wx,
                                        children: [
                                            (0, l.jsx)(L.A, {
                                                user: t,
                                                displayProfile: e_,
                                                guildId: $,
                                                themeType: Y.d.POPOUT,
                                            }),
                                            (0, l.jsx)(w.A, { userId: t.id, className: Z.oR, onClose: et }),
                                            (0, l.jsx)(T.A, {
                                                user: t,
                                                displayProfile: e_,
                                                guildId: $,
                                                channelId: K,
                                                themeType: Y.d.POPOUT,
                                                onOpenProfile: el ? void 0 : eC,
                                            }),
                                            (0, l.jsx)(W.A, {
                                                ref: eN,
                                                user: t,
                                                guildId: $,
                                                channelId: K,
                                                themeType: Y.d.POPOUT,
                                                onCloseProfile: et,
                                                prompt: ey,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(X.A, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: e_,
                                        guild: ec,
                                        isHoveringOrFocusing: null == ev.interactionType && ex,
                                        onOpenProfile: el ? void 0 : eC,
                                        channelId: K,
                                        onClose: et,
                                    }),
                                    (0, l.jsx)(q.A, {
                                        user: t,
                                        guildId: $,
                                        channelId: K,
                                        onClose: et,
                                        appContext: er,
                                        disableAutoFocus: ei,
                                    }),
                                    e_?.profileEffect != null &&
                                        (0, l.jsx)(g.A, { skuId: e_?.profileEffect?.skuId, isHovering: eE }),
                                    null != ep && (0, l.jsx)(m.A, { frame: ep, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
