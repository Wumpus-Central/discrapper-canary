"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    s = n(522160),
    a = n(311907),
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
    E = n(71393),
    g = n(562153),
    A = n(183555),
    I = n(672385),
    T = n(950191),
    S = n(679492),
    y = n(657331),
    v = n(718019),
    N = n(915614),
    C = n(439053),
    b = n(312381),
    R = n(946356),
    O = n(587168),
    D = n(193738),
    L = n(613457),
    w = n(853397),
    x = n(159218),
    M = n(320819),
    P = n(848674),
    k = n(652215),
    U = n(996988),
    G = n(985018),
    F = n(183959);
function V(e) {
    let {
            user: t,
            currentUser: n,
            guildId: V,
            channelId: B,
            messageId: H,
            roleId: j,
            openedAt: Y,
            closePopout: W,
            setPopoutRef: K,
            disableUserProfileLink: z = __OVERLAY__,
            newAnalyticsLocations: $ = [],
            appContext: q,
            disableAutoFocus: Z = !1,
            onClickContainer: X,
        } = e,
        { analyticsLocations: Q } = (0, c.Ay)([...$, u.A.USER_PROFILE_POPOUT]),
        J = (0, h.aL)(),
        ee = (0, A.pb)({ layout: "POPOUT", userId: t.id, guildId: V, channelId: B, messageId: H, roleId: j }),
        et = (0, a.bG)([E.A], () => (null != V ? E.A.getGuild(V) : null)),
        en = i.useMemo(() => (null != V ? { [V]: [t.id] } : {}), [V, t.id]);
    (0, l.E)(en, "UserProfilePopout");
    let er = i.useRef(null),
        ei = (0, T.Ay)(t.id, V),
        { isHoveringOrFocusing: es, isHovering: ea } = (0, _.A)(er),
        eo = (0, S.fC)(),
        el = (0, o.zhh)({ opacity: +(null != eo.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        K?.(er?.current);
    }, [er, K]);
    let eu = i.useRef(null),
        ec = t.id === n.id,
        ed = (0, f.h)({ location: "UserProfilePopout" }),
        e_ = i.useMemo(() => (0, p.A)(), []),
        ef = (e) => {
            W?.(),
                J.dispatch(k.jej.POPOUT_CLOSE),
                (0, y.openUserProfileModal)({
                    sourceAnalyticsLocations: Q,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: e_,
                    ...ee,
                    ...e,
                    appContext: q,
                });
        },
        ep = () =>
            z
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: G.intl.string(G.t["+Xp3hq"]),
                      action: () => {
                          ef(), (0, I.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: Q, ...ee });
                      },
                  }),
        eh = Z ? "div" : o.lGe,
        em = (0, d.GV)(),
        eE = g.Ay.useName(et?.id, B, t);
    return (0, r.jsx)(c.f5, {
        value: Q,
        children: (0, r.jsx)(A.of, {
            value: ee,
            openedAt: Y,
            fetchStartedAt: ei?.fetchStartedAt,
            fetchEndedAt: ei?.fetchEndedAt,
            isLoaded: ei?.isLoaded,
            children: (0, r.jsx)(S.Hl, {
                value: eo,
                children: (0, r.jsxs)(eh, {
                    ref: er,
                    "aria-labelledby": em,
                    onClick: X,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, { id: em, children: G.intl.format(G.t.KRe1Fk, { name: eE }) }),
                        }),
                        (0, r.jsxs)(R.A, {
                            user: t,
                            displayProfile: ei,
                            themeType: U.d.POPOUT,
                            privateBanner: ei?.private === !0 ? (0, r.jsx)(b.A, {}) : void 0,
                            children: [
                                null != eo.interactionType &&
                                    (0, r.jsx)(s.animated.div, { style: el, className: F.tB }),
                                (0, r.jsxs)(O.A, {
                                    children: [
                                        (0, r.jsx)(L.A, {
                                            shouldShowTooltip: null === eo.interactionType,
                                            user: t,
                                            guildId: V,
                                            channelId: B,
                                            onClose: W,
                                            appContext: q,
                                        }),
                                        (0, r.jsx)(D.A, { themeType: U.d.POPOUT, user: t }),
                                        !ec &&
                                            (0, r.jsx)(w.yo, {
                                                user: t,
                                                guildId: V,
                                                viewProfileItem: ep(),
                                                appContext: q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: F.wx,
                                    children: [
                                        (0, r.jsx)(N.A, {
                                            user: t,
                                            displayProfile: ei,
                                            guildId: V,
                                            themeType: U.d.POPOUT,
                                        }),
                                        (0, r.jsx)(C.A, { userId: t.id, className: F.oR, onClose: W }),
                                        (0, r.jsx)(v.A, {
                                            user: t,
                                            displayProfile: ei,
                                            guildId: V,
                                            channelId: B,
                                            themeType: U.d.POPOUT,
                                            onOpenProfile: z ? void 0 : ef,
                                        }),
                                        (0, r.jsx)(x.A, {
                                            ref: eu,
                                            user: t,
                                            guildId: V,
                                            channelId: B,
                                            themeType: U.d.POPOUT,
                                            onCloseProfile: W,
                                            prompt: ed ? e_ : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: ei,
                                    guild: et,
                                    isHoveringOrFocusing: null == eo.interactionType && es,
                                    onOpenProfile: z ? void 0 : ef,
                                    channelId: B,
                                    onClose: W,
                                }),
                                (0, r.jsx)(P.A, {
                                    user: t,
                                    guildId: V,
                                    channelId: B,
                                    onClose: W,
                                    appContext: q,
                                    disableAutoFocus: Z,
                                }),
                                ei?.profileEffect != null &&
                                    (0, r.jsx)(m.A, { skuId: ei?.profileEffect?.skuId, isHovering: ea }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
