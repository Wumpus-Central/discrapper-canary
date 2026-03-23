"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(497766),
    a = n(311907),
    o = n(73939),
    l = n(397927),
    u = n(80682),
    c = n(793574),
    d = n(688810),
    _ = n(915089),
    f = n(713517),
    p = n(645507),
    h = n(267102),
    m = n(182592),
    E = n(71393),
    g = n(562153),
    A = n(183555),
    I = n(672385),
    T = n(570287),
    S = n(950191),
    y = n(935520),
    v = n(679492),
    N = n(657331),
    C = n(718019),
    R = n(915614),
    O = n(439053),
    b = n(312381),
    D = n(946356),
    L = n(587168),
    w = n(193738),
    M = n(613457),
    x = n(853397),
    P = n(159218),
    k = n(850092),
    U = n(320819),
    G = n(848674),
    F = n(652215),
    V = n(996988),
    B = n(985018),
    H = n(183959);
function j(e) {
    let {
            user: t,
            currentUser: n,
            guildId: j,
            channelId: Y,
            messageId: W,
            roleId: K,
            closePopout: $,
            setPopoutRef: z,
            disableUserProfileLink: q = __OVERLAY__,
            newAnalyticsLocations: Z = [],
            appContext: X,
            disableAutoFocus: Q = !1,
            onClickContainer: J,
        } = e,
        { analyticsLocations: ee } = (0, d.Ay)([...Z, c.A.USER_PROFILE_POPOUT]),
        et = (0, h.aL)(),
        en = (0, A.pb)({ layout: "POPOUT", userId: t.id, guildId: j, channelId: Y, messageId: W, roleId: K }),
        er = (0, a.bG)([E.A], () => (null != j ? E.A.getGuild(j) : null)),
        ei = i.useMemo(() => (null != j ? { [j]: [t.id] } : {}), [j, t.id]);
    (0, u.Eq)(ei, "UserProfilePopout");
    let es = i.useRef(null),
        ea = (0, S.Ay)(t.id, j),
        [eo, el] = i.useState(!1),
        eu = (0, T.A)(t.id, j),
        { enabled: ec } = y.A.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: ed, isHovering: e_ } = (0, f.A)(es),
        ef = (0, v.fC)(),
        ep = (0, l.zhh)({ opacity: +(null != ef.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        z?.(es?.current);
    }, [es, z]);
    let eh = i.useRef(null),
        em = t.id === n.id,
        eE = i.useMemo(() => (0, p.A)(), []),
        eg = (e) => {
            $?.(),
                et.dispatch(F.jej.POPOUT_CLOSE),
                (0, N.openUserProfileModal)({
                    sourceAnalyticsLocations: ee,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eE,
                    ...en,
                    ...e,
                    appContext: X,
                });
        },
        eA = () =>
            q
                ? null
                : (0, r.jsx)(l.Drp, {
                      id: "view-profile",
                      label: B.intl.string(B.t["+Xp3hq"]),
                      action: () => {
                          eg(), (0, I.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: ee, ...en });
                      },
                  }),
        eI = Q ? "div" : l.lGe,
        eT = (0, _.GV)(),
        eS = g.Ay.useName(er?.id, Y, t);
    return (0, r.jsx)(d.f5, {
        value: ee,
        children: (0, r.jsx)(A.of, {
            value: en,
            isLoaded: ea?.isLoaded,
            children: (0, r.jsx)(v.Hl, {
                value: ef,
                children: (0, r.jsxs)(eI, {
                    ref: es,
                    "aria-labelledby": eT,
                    onClick: J,
                    children: [
                        eu &&
                            eo &&
                            (0, r.jsx)(o.F, {
                                component: "div",
                                className: H.g$,
                                children: (0, r.jsx)(l.FQk, {
                                    children: (0, r.jsx)(k.A, { userId: t.id, onSendWave: $ }),
                                }),
                            }),
                        (0, r.jsx)(l.AC4, {
                            children: (0, r.jsx)(l.H, { id: eT, children: B.intl.format(B.t.KRe1Fk, { name: eS }) }),
                        }),
                        (0, r.jsx)(l.Fmo, {
                            children: (0, r.jsxs)(D.A, {
                                user: t,
                                displayProfile: ea,
                                themeType: V.d.POPOUT,
                                privateBanner: ea?.private === !0 ? (0, r.jsx)(b.A, {}) : void 0,
                                children: [
                                    null != ef.interactionType &&
                                        (0, r.jsx)(s.animated.div, { style: ep, className: H.tB }),
                                    (0, r.jsxs)(L.A, {
                                        children: [
                                            (0, r.jsx)(M.A, {
                                                shouldShowTooltip: null === ef.interactionType,
                                                user: t,
                                                guildId: j,
                                                channelId: Y,
                                                onClose: $,
                                                appContext: X,
                                            }),
                                            (0, r.jsx)(w.A, {
                                                themeType: V.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: el,
                                                toastShowing: eu && eo && ec,
                                            }),
                                            !em &&
                                                (0, r.jsx)(x.yo, {
                                                    user: t,
                                                    guildId: j,
                                                    viewProfileItem: eA(),
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: H.wx,
                                        children: [
                                            (0, r.jsx)(R.A, {
                                                user: t,
                                                displayProfile: ea,
                                                guildId: j,
                                                themeType: V.d.POPOUT,
                                            }),
                                            (0, r.jsx)(O.A, { userId: t.id, className: H.oR, onClose: $ }),
                                            (0, r.jsx)(C.A, {
                                                user: t,
                                                displayProfile: ea,
                                                guildId: j,
                                                channelId: Y,
                                                themeType: V.d.POPOUT,
                                                onOpenProfile: q ? void 0 : eg,
                                            }),
                                            (0, r.jsx)(P.A, {
                                                ref: eh,
                                                user: t,
                                                guildId: j,
                                                channelId: Y,
                                                themeType: V.d.POPOUT,
                                                onCloseProfile: $,
                                                prompt: eE,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(U.A, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: ea,
                                        guild: er,
                                        isHoveringOrFocusing: null == ef.interactionType && ed,
                                        onOpenProfile: q ? void 0 : eg,
                                        channelId: Y,
                                        onClose: $,
                                    }),
                                    (0, r.jsx)(G.A, {
                                        user: t,
                                        guildId: j,
                                        channelId: Y,
                                        onClose: $,
                                        appContext: X,
                                        disableAutoFocus: Q,
                                    }),
                                    ea?.profileEffect != null &&
                                        (0, r.jsx)(m.A, { skuId: ea?.profileEffect?.skuId, isHovering: e_ }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
