n.r(t), n.d(t, { default: () => J });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(517738),
    o = n(311907),
    d = n(73939),
    u = n(717421),
    c = n(477782),
    A = n(305866),
    f = n(871682),
    _ = n(140735),
    p = n(707554),
    h = n(80682),
    g = n(793574),
    I = n(688810),
    m = n(351966),
    x = n(361628),
    E = n(744808),
    v = n(282389),
    b = n(915089),
    N = n(713517),
    P = n(645507),
    y = n(267102),
    C = n(71393),
    S = n(562153),
    j = n(183555),
    R = n(672385),
    O = n(570287),
    M = n(950191),
    T = n(935520),
    L = n(679492),
    w = n(657331),
    G = n(718019),
    U = n(915614),
    D = n(439053),
    F = n(312381),
    k = n(946356),
    V = n(587168),
    W = n(193738),
    H = n(613457),
    X = n(853397),
    q = n(159218),
    B = n(850092),
    Y = n(320819),
    z = n(848674),
    Z = n(652215),
    $ = n(996988),
    K = n(985018),
    Q = n(282868);
function J(e) {
    let {
            user: t,
            currentUser: n,
            guildId: r,
            channelId: J,
            messageId: ee,
            roleId: et,
            openedAt: en,
            closePopout: el,
            setPopoutRef: ea,
            disableUserProfileLink: er = __OVERLAY__,
            newAnalyticsLocations: ei = [],
            appContext: es,
            disableAutoFocus: eo = !1,
            onClickContainer: ed,
        } = e,
        { analyticsLocations: eu } = (0, I.Ay)([...ei, g.A.USER_PROFILE_POPOUT]),
        ec = (0, y.aL)(),
        eA = (0, j.pb)({ layout: "POPOUT", userId: t.id, guildId: r, channelId: J, messageId: ee, roleId: et }),
        ef = (0, o.bG)([C.A], () => (null != r ? C.A.getGuild(r) : null)),
        e_ = a.useMemo(() => (null != r ? { [r]: [t.id] } : {}), [r, t.id]);
    (0, h.Eq)(e_, "UserProfilePopout");
    let ep = a.useRef(null),
        eh = (0, M.Ay)(t.id, r),
        eg = (0, x.A)(eh?.profileFrame?.skuId, "UserProfilePopout"),
        eI = (0, v.A)(eh?.profileFrame?.skuId),
        [em, ex] = a.useState(!1),
        eE = (0, O.A)(t.id, r),
        { enabled: ev } = T.A.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: eb, isHovering: eN } = (0, N.A)(ep),
        eP = (0, L.fC)(),
        ey = (0, u.z)({ opacity: +(null != eP.interactionType), config: { duration: 150 } });
    a.useEffect(() => {
        ea?.(ep?.current);
    }, [ep, ea, eg?.skuId]);
    let eC = a.useRef(null),
        eS = t.id === n.id,
        ej = a.useMemo(() => (0, P.A)(), []),
        eR = (e) => {
            el?.(),
                ec.dispatch(Z.jej.POPOUT_CLOSE),
                (0, w.openUserProfileModal)({
                    sourceAnalyticsLocations: eu,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ej,
                    ...eA,
                    ...e,
                    appContext: es,
                });
        },
        eO = eo ? "div" : A.l,
        eM = (0, b.GV)(),
        eT = S.Ay.useName(ef?.id, J, t);
    return (0, l.jsx)(I.f5, {
        value: eu,
        children: (0, l.jsx)(j.of, {
            value: eA,
            openedAt: en,
            fetchStartedAt: eh?.fetchStartedAt,
            fetchEndedAt: eh?.fetchEndedAt,
            isLoaded: eh?.isLoaded,
            children: (0, l.jsx)(L.Hl, {
                value: eP,
                children: (0, l.jsxs)(eO, {
                    ref: ep,
                    "aria-labelledby": eM,
                    onClick: ed,
                    children: [
                        eE &&
                            em &&
                            (0, l.jsx)(d.F, {
                                component: "div",
                                className: Q.g$,
                                children: (0, l.jsx)(f.F, {
                                    children: (0, l.jsx)(B.A, { userId: t.id, onSendWave: el }),
                                }),
                            }),
                        (0, l.jsx)(_.A, {
                            children: (0, l.jsx)(p.H, { id: eM, children: K.intl.format(K.t.KRe1Fk, { name: eT }) }),
                        }),
                        (0, l.jsx)(p.F, {
                            children: (0, l.jsxs)(k.A, {
                                user: t,
                                displayProfile: eh,
                                themeType: $.d.POPOUT,
                                className: i()(Q.BK, eI),
                                privateBanner: eh?.private === !0 ? (0, l.jsx)(F.A, {}) : void 0,
                                children: [
                                    null != eP.interactionType &&
                                        (0, l.jsx)(s.animated.div, { style: ey, className: Q.tB }),
                                    (0, l.jsxs)(V.A, {
                                        children: [
                                            (0, l.jsx)(H.A, {
                                                shouldShowTooltip: null === eP.interactionType,
                                                user: t,
                                                guildId: r,
                                                channelId: J,
                                                onClose: el,
                                                appContext: es,
                                            }),
                                            (0, l.jsx)(W.A, {
                                                themeType: $.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: ex,
                                                toastShowing: eE && em && ev,
                                            }),
                                            !eS &&
                                                (0, l.jsx)(X.yo, {
                                                    user: t,
                                                    guildId: r,
                                                    viewProfileItem: er
                                                        ? null
                                                        : (0, l.jsx)(c.Dr, {
                                                              id: "view-profile",
                                                              label: K.intl.string(K.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eR(),
                                                                      (0, R.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: eu,
                                                                          ...eA,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: es,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: Q.wx,
                                        children: [
                                            (0, l.jsx)(U.A, {
                                                user: t,
                                                displayProfile: eh,
                                                guildId: r,
                                                themeType: $.d.POPOUT,
                                            }),
                                            (0, l.jsx)(D.A, { userId: t.id, className: Q.oR, onClose: el }),
                                            (0, l.jsx)(G.A, {
                                                user: t,
                                                displayProfile: eh,
                                                guildId: r,
                                                channelId: J,
                                                themeType: $.d.POPOUT,
                                                onOpenProfile: er ? void 0 : eR,
                                            }),
                                            (0, l.jsx)(q.A, {
                                                ref: eC,
                                                user: t,
                                                guildId: r,
                                                channelId: J,
                                                themeType: $.d.POPOUT,
                                                onCloseProfile: el,
                                                prompt: ej,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(Y.A, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: eh,
                                        guild: ef,
                                        isHoveringOrFocusing: null == eP.interactionType && eb,
                                        onOpenProfile: er ? void 0 : eR,
                                        channelId: J,
                                        onClose: el,
                                    }),
                                    (0, l.jsx)(z.A, {
                                        user: t,
                                        guildId: r,
                                        channelId: J,
                                        onClose: el,
                                        appContext: es,
                                        disableAutoFocus: eo,
                                    }),
                                    eh?.profileEffect != null &&
                                        (0, l.jsx)(m.A, { skuId: eh?.profileEffect?.skuId, isHovering: eN }),
                                    null != eg && (0, l.jsx)(E.A, { frame: eg, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
