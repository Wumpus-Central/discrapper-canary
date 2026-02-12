"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    a = n(40153),
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
    R = n(946356),
    O = n(587168),
    D = n(193738),
    L = n(613457),
    w = n(853397),
    x = n(159218),
    P = n(320819),
    M = n(848674),
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
            messageId: j,
            roleId: H,
            openedAt: Y,
            closePopout: W,
            setPopoutRef: K,
            disableUserProfileLink: $ = __OVERLAY__,
            newAnalyticsLocations: z = [],
            appContext: q,
            disableAutoFocus: X = !1,
            onClickContainer: Z,
        } = e,
        { analyticsLocations: Q } = (0, c.Ay)([...z, u.A.USER_PROFILE_POPOUT]),
        J = (0, p.aL)(),
        ee = (0, I.pb)({ layout: "POPOUT", userId: t.id, guildId: V, channelId: B, messageId: j, roleId: H }),
        et = (0, s.bG)([E.A], () => (null != V ? E.A.getGuild(V) : null)),
        en = i.useMemo(() => (null != V ? { [V]: [t.id] } : {}), [V, t.id]);
    (0, l.E)(en, "UserProfilePopout");
    let er = i.useRef(null),
        ei = (0, y.Ay)(t.id, V),
        { isHoveringOrFocusing: ea, isHovering: es } = (0, _.A)(er),
        eo = (0, S.fC)(),
        el = (0, o.zhh)({ opacity: +(null != eo.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        K?.(er?.current);
    }, [er, K]);
    let eu = i.useRef(null),
        ec = t.id === n.id,
        ed = (0, f.h)({ location: "UserProfilePopout" }),
        e_ = i.useMemo(() => (0, h.A)(), []),
        ef = (e) => {
            W?.(),
                J.dispatch(k.jej.POPOUT_CLOSE),
                (0, v.openUserProfileModal)({
                    sourceAnalyticsLocations: Q,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: e_,
                    ...ee,
                    ...e,
                    appContext: q,
                });
        },
        eh = () =>
            $
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: G.intl.string(G.t["+Xp3hq"]),
                      action: () => {
                          ef(), (0, T.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: Q, ...ee });
                      },
                  }),
        ep = X ? "div" : o.lGe,
        em = (0, d.GV)(),
        eg = A.Ay.useName(et?.id, B, t);
    return (0, r.jsx)(c.f5, {
        value: Q,
        children: (0, r.jsx)(I.of, {
            value: ee,
            openedAt: Y,
            fetchStartedAt: ei?.fetchStartedAt,
            fetchEndedAt: ei?.fetchEndedAt,
            isLoaded: ei?.isLoaded,
            children: (0, r.jsx)(S.Hl, {
                value: eo,
                children: (0, r.jsxs)(ep, {
                    ref: er,
                    "aria-labelledby": em,
                    onClick: Z,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, { id: em, children: G.intl.format(G.t.KRe1Fk, { name: eg }) }),
                        }),
                        (0, r.jsxs)(R.A, {
                            user: t,
                            displayProfile: ei,
                            themeType: U.d.POPOUT,
                            children: [
                                null != eo.interactionType &&
                                    (0, r.jsx)(a.animated.div, { style: el, className: F.tB }),
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
                                                viewProfileItem: eh(),
                                                appContext: q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: F.wx,
                                    children: [
                                        (0, r.jsx)(b.A, {
                                            user: t,
                                            displayProfile: ei,
                                            guildId: V,
                                            themeType: U.d.POPOUT,
                                        }),
                                        (0, r.jsx)(N.A, { userId: t.id, className: F.oR, onClose: W }),
                                        (0, r.jsx)(C.A, {
                                            user: t,
                                            displayProfile: ei,
                                            guildId: V,
                                            channelId: B,
                                            themeType: U.d.POPOUT,
                                            onOpenProfile: $ ? void 0 : ef,
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
                                (0, r.jsx)(P.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: ei,
                                    guild: et,
                                    isHoveringOrFocusing: null == eo.interactionType && ea,
                                    onOpenProfile: $ ? void 0 : ef,
                                    channelId: B,
                                    onClose: W,
                                }),
                                (0, r.jsx)(M.A, {
                                    user: t,
                                    guildId: V,
                                    channelId: B,
                                    onClose: W,
                                    appContext: q,
                                    disableAutoFocus: X,
                                }),
                                ei?.profileEffect != null &&
                                    (0, r.jsx)(g.A, { skuId: ei?.profileEffect?.skuId, isHovering: es }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
