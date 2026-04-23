n.r(t), n.d(t, { default: () => z });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(419354),
    s = n(311907),
    d = n(73939),
    c = n(717421),
    u = n(477782),
    _ = n(305866),
    p = n(871682),
    f = n(140735),
    A = n(707554),
    g = n(80682),
    h = n(793574),
    x = n(688810),
    m = n(351966),
    I = n(361628),
    b = n(744808),
    v = n(282389),
    C = n(915089),
    y = n(713517),
    P = n(645507),
    S = n(267102),
    E = n(71393),
    T = n(562153),
    N = n(183555),
    j = n(672385),
    O = n(570287),
    w = n(950191),
    R = n(935520),
    M = n(679492),
    L = n(657331),
    k = n(718019),
    G = n(915614),
    U = n(439053),
    D = n(312381),
    F = n(946356),
    V = n(587168),
    H = n(193738),
    B = n(613457),
    W = n(853397),
    q = n(159218),
    Y = n(850092),
    X = n(320819),
    K = n(848674),
    Q = n(652215),
    J = n(996988),
    $ = n(985018),
    Z = n(656884);
function z(e) {
    let {
            user: t,
            currentUser: n,
            guildId: l,
            channelId: z,
            messageId: ee,
            roleId: et,
            openedAt: en,
            closePopout: ea,
            setPopoutRef: ei,
            disableUserProfileLink: el = __OVERLAY__,
            newAnalyticsLocations: er = [],
            appContext: eo,
            disableAutoFocus: es = !1,
            onClickContainer: ed,
        } = e,
        { analyticsLocations: ec } = (0, x.Ay)([...er, h.A.USER_PROFILE_POPOUT]),
        eu = (0, S.aL)(),
        e_ = (0, N.pb)({ layout: "POPOUT", userId: t.id, guildId: l, channelId: z, messageId: ee, roleId: et }),
        ep = (0, s.bG)([E.A], () => (null != l ? E.A.getGuild(l) : null)),
        ef = i.useMemo(() => (null != l ? { [l]: [t.id] } : {}), [l, t.id]);
    (0, g.Eq)(ef, "UserProfilePopout");
    let eA = i.useRef(null),
        eg = (0, w.Ay)(t.id, l),
        eh = (0, I.A)(eg?.profileFrame?.skuId, "UserProfilePopout"),
        ex = (0, v.A)(eg?.profileFrame?.skuId),
        [em, eI] = i.useState(!1),
        eb = (0, O.A)(t.id, l),
        { enabled: ev } = R.A.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: eC, isHovering: ey } = (0, y.A)(eA),
        eP = (0, M.fC)(),
        eS = (0, c.z)({ opacity: +(null != eP.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        ei?.(eA?.current);
    }, [eA, ei, eh?.skuId]);
    let eE = i.useRef(null),
        eT = t.id === n.id,
        eN = i.useMemo(() => (0, P.A)(), []),
        ej = (e) => {
            ea?.(),
                eu.dispatch(Q.jej.POPOUT_CLOSE),
                (0, L.openUserProfileModal)({
                    sourceAnalyticsLocations: ec,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eN,
                    ...e_,
                    ...e,
                    appContext: eo,
                });
        },
        eO = es ? "div" : _.l,
        ew = (0, C.GV)(),
        eR = T.Ay.useName(ep?.id, z, t);
    return (0, a.jsx)(x.f5, {
        value: ec,
        children: (0, a.jsx)(N.of, {
            value: e_,
            openedAt: en,
            fetchStartedAt: eg?.fetchStartedAt,
            fetchEndedAt: eg?.fetchEndedAt,
            isLoaded: eg?.isLoaded,
            children: (0, a.jsx)(M.Hl, {
                value: eP,
                children: (0, a.jsxs)(eO, {
                    ref: eA,
                    "aria-labelledby": ew,
                    onClick: ed,
                    children: [
                        eb &&
                            em &&
                            (0, a.jsx)(d.F, {
                                component: "div",
                                className: Z.g$,
                                children: (0, a.jsx)(p.F, {
                                    children: (0, a.jsx)(Y.A, { userId: t.id, onSendWave: ea }),
                                }),
                            }),
                        (0, a.jsx)(f.A, {
                            children: (0, a.jsx)(A.H, { id: ew, children: $.intl.format($.t.KRe1Fk, { name: eR }) }),
                        }),
                        (0, a.jsx)(A.F, {
                            children: (0, a.jsxs)(F.A, {
                                user: t,
                                displayProfile: eg,
                                themeType: J.d.POPOUT,
                                className: r()(Z.BK, ex),
                                privateBanner: eg?.private === !0 ? (0, a.jsx)(D.A, {}) : void 0,
                                children: [
                                    null != eP.interactionType &&
                                        (0, a.jsx)(o.animated.div, { style: eS, className: Z.tB }),
                                    (0, a.jsxs)(V.A, {
                                        children: [
                                            (0, a.jsx)(B.A, {
                                                shouldShowTooltip: null === eP.interactionType,
                                                user: t,
                                                guildId: l,
                                                channelId: z,
                                                onClose: ea,
                                                appContext: eo,
                                            }),
                                            (0, a.jsx)(H.A, {
                                                themeType: J.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: eI,
                                                toastShowing: eb && em && ev,
                                            }),
                                            !eT &&
                                                (0, a.jsx)(W.yo, {
                                                    user: t,
                                                    guildId: l,
                                                    viewProfileItem: el
                                                        ? null
                                                        : (0, a.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: $.intl.string($.t["+Xp3hq"]),
                                                              action: () => {
                                                                  ej(),
                                                                      (0, j.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: ec,
                                                                          ...e_,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: eo,
                                                }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: Z.wx,
                                        children: [
                                            (0, a.jsx)(G.A, {
                                                user: t,
                                                displayProfile: eg,
                                                guildId: l,
                                                themeType: J.d.POPOUT,
                                            }),
                                            (0, a.jsx)(U.A, { userId: t.id, className: Z.oR, onClose: ea }),
                                            (0, a.jsx)(k.A, {
                                                user: t,
                                                displayProfile: eg,
                                                guildId: l,
                                                channelId: z,
                                                themeType: J.d.POPOUT,
                                                onOpenProfile: el ? void 0 : ej,
                                            }),
                                            (0, a.jsx)(q.A, {
                                                ref: eE,
                                                user: t,
                                                guildId: l,
                                                channelId: z,
                                                themeType: J.d.POPOUT,
                                                onCloseProfile: ea,
                                                prompt: eN,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(X.A, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: eg,
                                        guild: ep,
                                        isHoveringOrFocusing: null == eP.interactionType && eC,
                                        onOpenProfile: el ? void 0 : ej,
                                        channelId: z,
                                        onClose: ea,
                                    }),
                                    (0, a.jsx)(K.A, {
                                        user: t,
                                        guildId: l,
                                        channelId: z,
                                        onClose: ea,
                                        appContext: eo,
                                        disableAutoFocus: es,
                                    }),
                                    eg?.profileEffect != null &&
                                        (0, a.jsx)(m.A, { skuId: eg?.profileEffect?.skuId, isHovering: ey }),
                                    null != eh && (0, a.jsx)(b.A, { frame: eh, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
