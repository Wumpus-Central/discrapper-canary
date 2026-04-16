"use strict";
n.d(t, { A: () => W });
var r = n(627968),
    i = n(64700),
    s = n(407045),
    a = n(311907),
    o = n(73939),
    l = n(397927),
    u = n(80682),
    c = n(793574),
    d = n(688810),
    _ = n(351966),
    f = n(361628),
    p = n(744808),
    h = n(915089),
    m = n(713517),
    E = n(645507),
    g = n(267102),
    A = n(71393),
    I = n(562153),
    T = n(183555),
    S = n(672385),
    y = n(570287),
    v = n(950191),
    N = n(935520),
    C = n(679492),
    R = n(657331),
    O = n(718019),
    b = n(915614),
    D = n(439053),
    L = n(312381),
    w = n(946356),
    M = n(587168),
    P = n(193738),
    x = n(613457),
    k = n(853397),
    U = n(159218),
    G = n(850092),
    F = n(320819),
    V = n(848674),
    B = n(652215),
    H = n(996988),
    j = n(985018),
    Y = n(886308);
function W(e) {
    let {
            user: t,
            currentUser: n,
            guildId: W,
            channelId: K,
            messageId: $,
            roleId: z,
            openedAt: q,
            closePopout: Z,
            setPopoutRef: X,
            disableUserProfileLink: Q = __OVERLAY__,
            newAnalyticsLocations: J = [],
            appContext: ee,
            disableAutoFocus: et = !1,
            onClickContainer: en,
        } = e,
        { analyticsLocations: er } = (0, d.Ay)([...J, c.A.USER_PROFILE_POPOUT]),
        ei = (0, g.aL)(),
        es = (0, T.pb)({ layout: "POPOUT", userId: t.id, guildId: W, channelId: K, messageId: $, roleId: z }),
        ea = (0, a.bG)([A.A], () => (null != W ? A.A.getGuild(W) : null)),
        eo = i.useMemo(() => (null != W ? { [W]: [t.id] } : {}), [W, t.id]);
    (0, u.Eq)(eo, "UserProfilePopout");
    let el = i.useRef(null),
        eu = (0, v.Ay)(t.id, W),
        ec = (0, f.A)(eu?.profileFrame?.skuId, "UserProfilePopout"),
        [ed, e_] = i.useState(!1),
        ef = (0, y.A)(t.id, W),
        { enabled: ep } = N.A.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: eh, isHovering: em } = (0, m.A)(el),
        eE = (0, C.fC)(),
        eg = (0, l.zhh)({ opacity: +(null != eE.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        X?.(el?.current);
    }, [el, X]);
    let eA = i.useRef(null),
        eI = t.id === n.id,
        eT = i.useMemo(() => (0, E.A)(), []),
        eS = (e) => {
            Z?.(),
                ei.dispatch(B.jej.POPOUT_CLOSE),
                (0, R.openUserProfileModal)({
                    sourceAnalyticsLocations: er,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eT,
                    ...es,
                    ...e,
                    appContext: ee,
                });
        },
        ey = () =>
            Q
                ? null
                : (0, r.jsx)(l.Drp, {
                      id: "view-profile",
                      label: j.intl.string(j.t["+Xp3hq"]),
                      action: () => {
                          eS(), (0, S.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: er, ...es });
                      },
                  }),
        ev = et ? "div" : l.lGe,
        eN = (0, h.GV)(),
        eC = I.Ay.useName(ea?.id, K, t);
    return (0, r.jsx)(d.f5, {
        value: er,
        children: (0, r.jsx)(T.of, {
            value: es,
            openedAt: q,
            fetchStartedAt: eu?.fetchStartedAt,
            fetchEndedAt: eu?.fetchEndedAt,
            isLoaded: eu?.isLoaded,
            children: (0, r.jsx)(C.Hl, {
                value: eE,
                children: (0, r.jsxs)(ev, {
                    ref: el,
                    "aria-labelledby": eN,
                    onClick: en,
                    children: [
                        ef &&
                            ed &&
                            (0, r.jsx)(o.F, {
                                component: "div",
                                className: Y.g$,
                                children: (0, r.jsx)(l.FQk, {
                                    children: (0, r.jsx)(G.A, { userId: t.id, onSendWave: Z }),
                                }),
                            }),
                        (0, r.jsx)(l.AC4, {
                            children: (0, r.jsx)(l.H, { id: eN, children: j.intl.format(j.t.KRe1Fk, { name: eC }) }),
                        }),
                        (0, r.jsx)(l.Fmo, {
                            children: (0, r.jsxs)(w.A, {
                                user: t,
                                displayProfile: eu,
                                themeType: H.d.POPOUT,
                                privateBanner: eu?.private === !0 ? (0, r.jsx)(L.A, {}) : void 0,
                                children: [
                                    null != eE.interactionType &&
                                        (0, r.jsx)(s.animated.div, { style: eg, className: Y.tB }),
                                    (0, r.jsxs)(M.A, {
                                        children: [
                                            (0, r.jsx)(x.A, {
                                                shouldShowTooltip: null === eE.interactionType,
                                                user: t,
                                                guildId: W,
                                                channelId: K,
                                                onClose: Z,
                                                appContext: ee,
                                            }),
                                            (0, r.jsx)(P.A, {
                                                themeType: H.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: e_,
                                                toastShowing: ef && ed && ep,
                                            }),
                                            !eI &&
                                                (0, r.jsx)(k.yo, {
                                                    user: t,
                                                    guildId: W,
                                                    viewProfileItem: ey(),
                                                    appContext: ee,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: Y.wx,
                                        children: [
                                            (0, r.jsx)(b.A, {
                                                user: t,
                                                displayProfile: eu,
                                                guildId: W,
                                                themeType: H.d.POPOUT,
                                            }),
                                            (0, r.jsx)(D.A, { userId: t.id, className: Y.oR, onClose: Z }),
                                            (0, r.jsx)(O.A, {
                                                user: t,
                                                displayProfile: eu,
                                                guildId: W,
                                                channelId: K,
                                                themeType: H.d.POPOUT,
                                                onOpenProfile: Q ? void 0 : eS,
                                            }),
                                            (0, r.jsx)(U.A, {
                                                ref: eA,
                                                user: t,
                                                guildId: W,
                                                channelId: K,
                                                themeType: H.d.POPOUT,
                                                onCloseProfile: Z,
                                                prompt: eT,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(F.A, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: eu,
                                        guild: ea,
                                        isHoveringOrFocusing: null == eE.interactionType && eh,
                                        onOpenProfile: Q ? void 0 : eS,
                                        channelId: K,
                                        onClose: Z,
                                    }),
                                    (0, r.jsx)(V.A, {
                                        user: t,
                                        guildId: W,
                                        channelId: K,
                                        onClose: Z,
                                        appContext: ee,
                                        disableAutoFocus: et,
                                    }),
                                    eu?.profileEffect != null &&
                                        (0, r.jsx)(_.A, { skuId: eu?.profileEffect?.skuId, isHovering: em }),
                                    null != ec && (0, r.jsx)(p.A, { frame: ec, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
