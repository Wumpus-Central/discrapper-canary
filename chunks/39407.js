"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    a = n(92674),
    s = n(311907),
    o = n(397927),
    l = n(80682),
    u = n(793574),
    c = n(688810),
    d = n(915089),
    _ = n(713517),
    f = n(576241),
    p = n(645507),
    h = n(267102),
    m = n(182592),
    g = n(71393),
    E = n(562153),
    A = n(183555),
    I = n(672385),
    T = n(950191),
    y = n(679492),
    S = n(657331),
    v = n(718019),
    C = n(915614),
    b = n(439053),
    N = n(946356),
    R = n(587168),
    O = n(193738),
    D = n(613457),
    L = n(853397),
    w = n(159218),
    x = n(320819),
    P = n(848674),
    M = n(652215),
    k = n(996988),
    U = n(985018),
    G = n(183959);
function V(e) {
    let {
            user: t,
            currentUser: n,
            guildId: V,
            channelId: F,
            messageId: B,
            roleId: j,
            openedAt: H,
            closePopout: Y,
            setPopoutRef: W,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: z = [],
            appContext: $,
            disableAutoFocus: q = !1,
            onClickContainer: Z,
        } = e,
        { analyticsLocations: Q } = (0, c.Ay)([...z, u.A.USER_PROFILE_POPOUT]),
        X = (0, h.aL)(),
        J = (0, A.pb)({ layout: "POPOUT", userId: t.id, guildId: V, channelId: F, messageId: B, roleId: j }),
        ee = (0, s.bG)([g.A], () => (null != V ? g.A.getGuild(V) : null)),
        et = i.useMemo(() => (null != V ? { [V]: [t.id] } : {}), [V, t.id]);
    (0, l.E)(et, "UserProfilePopout");
    let en = i.useRef(null),
        er = (0, T.Ay)(t.id, V),
        { isHoveringOrFocusing: ei, isHovering: ea } = (0, _.A)(en),
        es = (0, y.fC)(),
        eo = (0, o.zhh)({ opacity: +(null != es.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        W?.(en?.current);
    }, [en, W]);
    let el = i.useRef(null),
        eu = t.id === n.id,
        ec = (0, f.h)({ location: "UserProfilePopout" }),
        ed = i.useMemo(() => (0, p.A)(), []),
        e_ = (e) => {
            Y?.(),
                X.dispatch(M.jej.POPOUT_CLOSE),
                (0, S.openUserProfileModal)({
                    sourceAnalyticsLocations: Q,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ed,
                    ...J,
                    ...e,
                    appContext: $,
                });
        },
        ef = () =>
            K
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: U.intl.string(U.t["+Xp3hq"]),
                      action: () => {
                          e_(), (0, I.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: Q, ...J });
                      },
                  }),
        ep = q ? "div" : o.lGe,
        eh = (0, d.GV)(),
        em = E.Ay.useName(ee?.id, F, t);
    return (0, r.jsx)(c.f5, {
        value: Q,
        children: (0, r.jsx)(A.of, {
            value: J,
            openedAt: H,
            fetchStartedAt: er?.fetchStartedAt,
            fetchEndedAt: er?.fetchEndedAt,
            isLoaded: er?.isLoaded,
            children: (0, r.jsx)(y.Hl, {
                value: es,
                children: (0, r.jsxs)(ep, {
                    ref: en,
                    "aria-labelledby": eh,
                    onClick: Z,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, { id: eh, children: U.intl.format(U.t.KRe1Fk, { name: em }) }),
                        }),
                        (0, r.jsxs)(N.A, {
                            user: t,
                            displayProfile: er,
                            themeType: k.d.POPOUT,
                            children: [
                                null != es.interactionType &&
                                    (0, r.jsx)(a.animated.div, { style: eo, className: G.tB }),
                                (0, r.jsxs)(R.A, {
                                    children: [
                                        (0, r.jsx)(D.A, {
                                            shouldShowTooltip: null === es.interactionType,
                                            user: t,
                                            guildId: V,
                                            channelId: F,
                                            onClose: Y,
                                            appContext: $,
                                        }),
                                        (0, r.jsx)(O.A, { themeType: k.d.POPOUT, user: t }),
                                        !eu &&
                                            (0, r.jsx)(L.yo, {
                                                user: t,
                                                guildId: V,
                                                viewProfileItem: ef(),
                                                appContext: $,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: G.wx,
                                    children: [
                                        (0, r.jsx)(C.A, {
                                            user: t,
                                            displayProfile: er,
                                            guildId: V,
                                            themeType: k.d.POPOUT,
                                        }),
                                        (0, r.jsx)(b.A, { userId: t.id, className: G.oR, onClose: Y }),
                                        (0, r.jsx)(v.A, {
                                            user: t,
                                            displayProfile: er,
                                            guildId: V,
                                            channelId: F,
                                            themeType: k.d.POPOUT,
                                            onOpenProfile: K ? void 0 : e_,
                                        }),
                                        (0, r.jsx)(w.A, {
                                            ref: el,
                                            user: t,
                                            guildId: V,
                                            channelId: F,
                                            themeType: k.d.POPOUT,
                                            onCloseProfile: Y,
                                            prompt: ec ? ed : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(x.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: er,
                                    guild: ee,
                                    isHoveringOrFocusing: null == es.interactionType && ei,
                                    onOpenProfile: K ? void 0 : e_,
                                    channelId: F,
                                    onClose: Y,
                                }),
                                (0, r.jsx)(P.A, {
                                    user: t,
                                    guildId: V,
                                    channelId: F,
                                    onClose: Y,
                                    appContext: $,
                                    disableAutoFocus: q,
                                }),
                                er?.profileEffect != null &&
                                    (0, r.jsx)(m.A, { skuId: er?.profileEffect?.skuId, isHovering: ea }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
