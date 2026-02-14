"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    a = n(522160),
    s = n(311907),
    o = n(397927),
    l = n(80682),
    u = n(793574),
    c = n(688810),
    d = n(915089),
    _ = n(713517),
    f = n(576241),
    h = n(645507),
    p = n(267102),
    g = n(182592),
    E = n(71393),
    A = n(562153),
    I = n(183555),
    T = n(672385),
    y = n(950191),
    S = n(679492),
    v = n(657331),
    C = n(718019),
    b = n(915614),
    N = n(439053),
    R = n(312381),
    O = n(946356),
    D = n(587168),
    L = n(193738),
    w = n(613457),
    x = n(853397),
    P = n(159218),
    M = n(320819),
    k = n(848674),
    U = n(652215),
    G = n(996988),
    F = n(985018),
    V = n(183959);
function B(e) {
    let {
            user: t,
            currentUser: n,
            guildId: B,
            channelId: j,
            messageId: H,
            roleId: Y,
            openedAt: W,
            closePopout: K,
            setPopoutRef: $,
            disableUserProfileLink: z = __OVERLAY__,
            newAnalyticsLocations: q = [],
            appContext: X,
            disableAutoFocus: Z = !1,
            onClickContainer: Q,
        } = e,
        { analyticsLocations: J } = (0, c.Ay)([...q, u.A.USER_PROFILE_POPOUT]),
        ee = (0, p.aL)(),
        et = (0, I.pb)({ layout: "POPOUT", userId: t.id, guildId: B, channelId: j, messageId: H, roleId: Y }),
        en = (0, s.bG)([E.A], () => (null != B ? E.A.getGuild(B) : null)),
        er = i.useMemo(() => (null != B ? { [B]: [t.id] } : {}), [B, t.id]);
    (0, l.E)(er, "UserProfilePopout");
    let ei = i.useRef(null),
        ea = (0, y.Ay)(t.id, B),
        { isHoveringOrFocusing: es, isHovering: eo } = (0, _.A)(ei),
        el = (0, S.fC)(),
        eu = (0, o.zhh)({ opacity: +(null != el.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        $?.(ei?.current);
    }, [ei, $]);
    let ec = i.useRef(null),
        ed = t.id === n.id,
        e_ = (0, f.h)({ location: "UserProfilePopout" }),
        ef = i.useMemo(() => (0, h.A)(), []),
        eh = (e) => {
            K?.(),
                ee.dispatch(U.jej.POPOUT_CLOSE),
                (0, v.openUserProfileModal)({
                    sourceAnalyticsLocations: J,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ef,
                    ...et,
                    ...e,
                    appContext: X,
                });
        },
        ep = () =>
            z
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: F.intl.string(F.t["+Xp3hq"]),
                      action: () => {
                          eh(), (0, T.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: J, ...et });
                      },
                  }),
        em = Z ? "div" : o.lGe,
        eg = (0, d.GV)(),
        eE = A.Ay.useName(en?.id, j, t);
    return (0, r.jsx)(c.f5, {
        value: J,
        children: (0, r.jsx)(I.of, {
            value: et,
            openedAt: W,
            fetchStartedAt: ea?.fetchStartedAt,
            fetchEndedAt: ea?.fetchEndedAt,
            isLoaded: ea?.isLoaded,
            children: (0, r.jsx)(S.Hl, {
                value: el,
                children: (0, r.jsxs)(em, {
                    ref: ei,
                    "aria-labelledby": eg,
                    onClick: Q,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, { id: eg, children: F.intl.format(F.t.KRe1Fk, { name: eE }) }),
                        }),
                        (0, r.jsxs)(O.A, {
                            user: t,
                            displayProfile: ea,
                            themeType: G.d.POPOUT,
                            privateBanner:
                                ea?.private === !0 ? (0, r.jsx)(R.A, { primaryColor: ea?.primaryColor }) : void 0,
                            children: [
                                null != el.interactionType &&
                                    (0, r.jsx)(a.animated.div, { style: eu, className: V.tB }),
                                (0, r.jsxs)(D.A, {
                                    children: [
                                        (0, r.jsx)(w.A, {
                                            shouldShowTooltip: null === el.interactionType,
                                            user: t,
                                            guildId: B,
                                            channelId: j,
                                            onClose: K,
                                            appContext: X,
                                        }),
                                        (0, r.jsx)(L.A, { themeType: G.d.POPOUT, user: t }),
                                        !ed &&
                                            (0, r.jsx)(x.yo, {
                                                user: t,
                                                guildId: B,
                                                viewProfileItem: ep(),
                                                appContext: X,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: V.wx,
                                    children: [
                                        (0, r.jsx)(b.A, {
                                            user: t,
                                            displayProfile: ea,
                                            guildId: B,
                                            themeType: G.d.POPOUT,
                                        }),
                                        (0, r.jsx)(N.A, { userId: t.id, className: V.oR, onClose: K }),
                                        (0, r.jsx)(C.A, {
                                            user: t,
                                            displayProfile: ea,
                                            guildId: B,
                                            channelId: j,
                                            themeType: G.d.POPOUT,
                                            onOpenProfile: z ? void 0 : eh,
                                        }),
                                        (0, r.jsx)(P.A, {
                                            ref: ec,
                                            user: t,
                                            guildId: B,
                                            channelId: j,
                                            themeType: G.d.POPOUT,
                                            onCloseProfile: K,
                                            prompt: e_ ? ef : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: ea,
                                    guild: en,
                                    isHoveringOrFocusing: null == el.interactionType && es,
                                    onOpenProfile: z ? void 0 : eh,
                                    channelId: j,
                                    onClose: K,
                                }),
                                (0, r.jsx)(k.A, {
                                    user: t,
                                    guildId: B,
                                    channelId: j,
                                    onClose: K,
                                    appContext: X,
                                    disableAutoFocus: Z,
                                }),
                                ea?.profileEffect != null &&
                                    (0, r.jsx)(g.A, { skuId: ea?.profileEffect?.skuId, isHovering: eo }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
