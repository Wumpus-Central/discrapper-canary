"use strict";
n.d(t, { A: () => W });
var r = n(627968),
    i = n(64700),
    s = n(880013),
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
    x = n(193738),
    P = n(613457),
    k = n(853397),
    U = n(159218),
    G = n(850092),
    F = n(320819),
    V = n(848674),
    B = n(652215),
    H = n(996988),
    j = n(985018),
    Y = n(74209);
function W(e) {
    let {
            user: t,
            currentUser: n,
            guildId: W,
            channelId: K,
            messageId: $,
            roleId: z,
            closePopout: q,
            setPopoutRef: Z,
            disableUserProfileLink: X = __OVERLAY__,
            newAnalyticsLocations: Q = [],
            appContext: J,
            disableAutoFocus: ee = !1,
            onClickContainer: et,
        } = e,
        { analyticsLocations: en } = (0, d.Ay)([...Q, c.A.USER_PROFILE_POPOUT]),
        er = (0, g.aL)(),
        ei = (0, T.pb)({ layout: "POPOUT", userId: t.id, guildId: W, channelId: K, messageId: $, roleId: z }),
        es = (0, a.bG)([A.A], () => (null != W ? A.A.getGuild(W) : null)),
        ea = i.useMemo(() => (null != W ? { [W]: [t.id] } : {}), [W, t.id]);
    (0, u.Eq)(ea, "UserProfilePopout");
    let eo = i.useRef(null),
        el = (0, v.Ay)(t.id, W),
        eu = (0, f.A)(el?.profileFrame?.skuId, "UserProfilePopout"),
        [ec, ed] = i.useState(!1),
        e_ = (0, y.A)(t.id, W),
        { enabled: ef } = N.A.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: ep, isHovering: eh } = (0, m.A)(eo),
        em = (0, C.fC)(),
        eE = (0, l.zhh)({ opacity: +(null != em.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        Z?.(eo?.current);
    }, [eo, Z]);
    let eg = i.useRef(null),
        eA = t.id === n.id,
        eI = i.useMemo(() => (0, E.A)(), []),
        eT = (e) => {
            q?.(),
                er.dispatch(B.jej.POPOUT_CLOSE),
                (0, R.openUserProfileModal)({
                    sourceAnalyticsLocations: en,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eI,
                    ...ei,
                    ...e,
                    appContext: J,
                });
        },
        eS = () =>
            X
                ? null
                : (0, r.jsx)(l.Drp, {
                      id: "view-profile",
                      label: j.intl.string(j.t["+Xp3hq"]),
                      action: () => {
                          eT(), (0, S.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: en, ...ei });
                      },
                  }),
        ey = ee ? "div" : l.lGe,
        ev = (0, h.GV)(),
        eN = I.Ay.useName(es?.id, K, t);
    return (0, r.jsx)(d.f5, {
        value: en,
        children: (0, r.jsx)(T.of, {
            value: ei,
            isLoaded: el?.isLoaded,
            children: (0, r.jsx)(C.Hl, {
                value: em,
                children: (0, r.jsxs)(ey, {
                    ref: eo,
                    "aria-labelledby": ev,
                    onClick: et,
                    children: [
                        e_ &&
                            ec &&
                            (0, r.jsx)(o.F, {
                                component: "div",
                                className: Y.g$,
                                children: (0, r.jsx)(l.FQk, {
                                    children: (0, r.jsx)(G.A, { userId: t.id, onSendWave: q }),
                                }),
                            }),
                        (0, r.jsx)(l.AC4, {
                            children: (0, r.jsx)(l.H, { id: ev, children: j.intl.format(j.t.KRe1Fk, { name: eN }) }),
                        }),
                        (0, r.jsx)(l.Fmo, {
                            children: (0, r.jsxs)(w.A, {
                                user: t,
                                displayProfile: el,
                                themeType: H.d.POPOUT,
                                privateBanner: el?.private === !0 ? (0, r.jsx)(L.A, {}) : void 0,
                                children: [
                                    null != em.interactionType &&
                                        (0, r.jsx)(s.animated.div, { style: eE, className: Y.tB }),
                                    (0, r.jsxs)(M.A, {
                                        children: [
                                            (0, r.jsx)(P.A, {
                                                shouldShowTooltip: null === em.interactionType,
                                                user: t,
                                                guildId: W,
                                                channelId: K,
                                                onClose: q,
                                                appContext: J,
                                            }),
                                            (0, r.jsx)(x.A, {
                                                themeType: H.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: ed,
                                                toastShowing: e_ && ec && ef,
                                            }),
                                            !eA &&
                                                (0, r.jsx)(k.yo, {
                                                    user: t,
                                                    guildId: W,
                                                    viewProfileItem: eS(),
                                                    appContext: J,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: Y.wx,
                                        children: [
                                            (0, r.jsx)(b.A, {
                                                user: t,
                                                displayProfile: el,
                                                guildId: W,
                                                themeType: H.d.POPOUT,
                                            }),
                                            (0, r.jsx)(D.A, { userId: t.id, className: Y.oR, onClose: q }),
                                            (0, r.jsx)(O.A, {
                                                user: t,
                                                displayProfile: el,
                                                guildId: W,
                                                channelId: K,
                                                themeType: H.d.POPOUT,
                                                onOpenProfile: X ? void 0 : eT,
                                            }),
                                            (0, r.jsx)(U.A, {
                                                ref: eg,
                                                user: t,
                                                guildId: W,
                                                channelId: K,
                                                themeType: H.d.POPOUT,
                                                onCloseProfile: q,
                                                prompt: eI,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(F.A, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: el,
                                        guild: es,
                                        isHoveringOrFocusing: null == em.interactionType && ep,
                                        onOpenProfile: X ? void 0 : eT,
                                        channelId: K,
                                        onClose: q,
                                    }),
                                    (0, r.jsx)(V.A, {
                                        user: t,
                                        guildId: W,
                                        channelId: K,
                                        onClose: q,
                                        appContext: J,
                                        disableAutoFocus: ee,
                                    }),
                                    el?.profileEffect != null &&
                                        (0, r.jsx)(_.A, { skuId: el?.profileEffect?.skuId, isHovering: eh }),
                                    null != eu && (0, r.jsx)(p.A, { frame: eu }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
