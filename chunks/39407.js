"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(523436),
    a = n(311907),
    o = n(397927),
    l = n(80682),
    u = n(793574),
    c = n(688810),
    d = n(915089),
    _ = n(713517),
    f = n(645507),
    p = n(267102),
    h = n(182592),
    m = n(71393),
    E = n(562153),
    g = n(183555),
    A = n(672385),
    I = n(950191),
    T = n(679492),
    S = n(657331),
    y = n(718019),
    v = n(915614),
    N = n(439053),
    C = n(312381),
    R = n(946356),
    O = n(587168),
    b = n(193738),
    D = n(613457),
    L = n(853397),
    w = n(159218),
    M = n(320819),
    x = n(848674),
    P = n(652215),
    k = n(996988),
    U = n(985018),
    G = n(183959);
function F(e) {
    let {
            user: t,
            currentUser: n,
            guildId: F,
            channelId: V,
            messageId: B,
            roleId: H,
            openedAt: j,
            closePopout: Y,
            setPopoutRef: W,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: $ = [],
            appContext: z,
            disableAutoFocus: q = !1,
            onClickContainer: Z,
        } = e,
        { analyticsLocations: X } = (0, c.Ay)([...$, u.A.USER_PROFILE_POPOUT]),
        Q = (0, p.aL)(),
        J = (0, g.pb)({ layout: "POPOUT", userId: t.id, guildId: F, channelId: V, messageId: B, roleId: H }),
        ee = (0, a.bG)([m.A], () => (null != F ? m.A.getGuild(F) : null)),
        et = i.useMemo(() => (null != F ? { [F]: [t.id] } : {}), [F, t.id]);
    (0, l.Eq)(et, "UserProfilePopout");
    let en = i.useRef(null),
        er = (0, I.Ay)(t.id, F),
        { isHoveringOrFocusing: ei, isHovering: es } = (0, _.A)(en),
        ea = (0, T.fC)(),
        eo = (0, o.zhh)({ opacity: +(null != ea.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        W?.(en?.current);
    }, [en, W]);
    let el = i.useRef(null),
        eu = t.id === n.id,
        ec = i.useMemo(() => (0, f.A)(), []),
        ed = (e) => {
            Y?.(),
                Q.dispatch(P.jej.POPOUT_CLOSE),
                (0, S.openUserProfileModal)({
                    sourceAnalyticsLocations: X,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ec,
                    ...J,
                    ...e,
                    appContext: z,
                });
        },
        e_ = () =>
            K
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: U.intl.string(U.t["+Xp3hq"]),
                      action: () => {
                          ed(), (0, A.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: X, ...J });
                      },
                  }),
        ef = q ? "div" : o.lGe,
        ep = (0, d.GV)(),
        eh = E.Ay.useName(ee?.id, V, t);
    return (0, r.jsx)(c.f5, {
        value: X,
        children: (0, r.jsx)(g.of, {
            value: J,
            openedAt: j,
            fetchStartedAt: er?.fetchStartedAt,
            fetchEndedAt: er?.fetchEndedAt,
            isLoaded: er?.isLoaded,
            children: (0, r.jsx)(T.Hl, {
                value: ea,
                children: (0, r.jsxs)(ef, {
                    ref: en,
                    "aria-labelledby": ep,
                    onClick: Z,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, { id: ep, children: U.intl.format(U.t.KRe1Fk, { name: eh }) }),
                        }),
                        (0, r.jsxs)(R.A, {
                            user: t,
                            displayProfile: er,
                            themeType: k.d.POPOUT,
                            privateBanner: er?.private === !0 ? (0, r.jsx)(C.A, {}) : void 0,
                            children: [
                                null != ea.interactionType &&
                                    (0, r.jsx)(s.animated.div, { style: eo, className: G.tB }),
                                (0, r.jsxs)(O.A, {
                                    children: [
                                        (0, r.jsx)(D.A, {
                                            shouldShowTooltip: null === ea.interactionType,
                                            user: t,
                                            guildId: F,
                                            channelId: V,
                                            onClose: Y,
                                            appContext: z,
                                        }),
                                        (0, r.jsx)(b.A, { themeType: k.d.POPOUT, user: t }),
                                        !eu &&
                                            (0, r.jsx)(L.yo, {
                                                user: t,
                                                guildId: F,
                                                viewProfileItem: e_(),
                                                appContext: z,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: G.wx,
                                    children: [
                                        (0, r.jsx)(v.A, {
                                            user: t,
                                            displayProfile: er,
                                            guildId: F,
                                            themeType: k.d.POPOUT,
                                        }),
                                        (0, r.jsx)(N.A, { userId: t.id, className: G.oR, onClose: Y }),
                                        (0, r.jsx)(y.A, {
                                            user: t,
                                            displayProfile: er,
                                            guildId: F,
                                            channelId: V,
                                            themeType: k.d.POPOUT,
                                            onOpenProfile: K ? void 0 : ed,
                                        }),
                                        (0, r.jsx)(w.A, {
                                            ref: el,
                                            user: t,
                                            guildId: F,
                                            channelId: V,
                                            themeType: k.d.POPOUT,
                                            onCloseProfile: Y,
                                            prompt: ec,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: er,
                                    guild: ee,
                                    isHoveringOrFocusing: null == ea.interactionType && ei,
                                    onOpenProfile: K ? void 0 : ed,
                                    channelId: V,
                                    onClose: Y,
                                }),
                                (0, r.jsx)(x.A, {
                                    user: t,
                                    guildId: F,
                                    channelId: V,
                                    onClose: Y,
                                    appContext: z,
                                    disableAutoFocus: q,
                                }),
                                er?.profileEffect != null &&
                                    (0, r.jsx)(h.A, { skuId: er?.profileEffect?.skuId, isHovering: es }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
