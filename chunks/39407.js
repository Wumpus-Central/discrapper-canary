"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(490249),
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
    G = n(435953);
function F(e) {
    let {
            user: t,
            currentUser: n,
            guildId: F,
            channelId: V,
            messageId: B,
            roleId: H,
            closePopout: j,
            setPopoutRef: Y,
            disableUserProfileLink: W = __OVERLAY__,
            newAnalyticsLocations: K = [],
            appContext: $,
            disableAutoFocus: z = !1,
            onClickContainer: q,
        } = e,
        { analyticsLocations: Z } = (0, c.Ay)([...K, u.A.USER_PROFILE_POPOUT]),
        X = (0, p.aL)(),
        Q = (0, g.pb)({ layout: "POPOUT", userId: t.id, guildId: F, channelId: V, messageId: B, roleId: H }),
        J = (0, a.bG)([m.A], () => (null != F ? m.A.getGuild(F) : null)),
        ee = i.useMemo(() => (null != F ? { [F]: [t.id] } : {}), [F, t.id]);
    (0, l.Eq)(ee, "UserProfilePopout");
    let et = i.useRef(null),
        en = (0, I.Ay)(t.id, F),
        { isHoveringOrFocusing: er, isHovering: ei } = (0, _.A)(et),
        es = (0, T.fC)(),
        ea = (0, o.zhh)({ opacity: +(null != es.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        Y?.(et?.current);
    }, [et, Y]);
    let eo = i.useRef(null),
        el = t.id === n.id,
        eu = i.useMemo(() => (0, f.A)(), []),
        ec = (e) => {
            j?.(),
                X.dispatch(P.jej.POPOUT_CLOSE),
                (0, S.openUserProfileModal)({
                    sourceAnalyticsLocations: Z,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eu,
                    ...Q,
                    ...e,
                    appContext: $,
                });
        },
        ed = () =>
            W
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: U.intl.string(U.t["+Xp3hq"]),
                      action: () => {
                          ec(), (0, A.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: Z, ...Q });
                      },
                  }),
        e_ = z ? "div" : o.lGe,
        ef = (0, d.GV)(),
        ep = E.Ay.useName(J?.id, V, t);
    return (0, r.jsx)(c.f5, {
        value: Z,
        children: (0, r.jsx)(g.of, {
            value: Q,
            isLoaded: en?.isLoaded,
            children: (0, r.jsx)(T.Hl, {
                value: es,
                children: (0, r.jsxs)(e_, {
                    ref: et,
                    "aria-labelledby": ef,
                    onClick: q,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, { id: ef, children: U.intl.format(U.t.KRe1Fk, { name: ep }) }),
                        }),
                        (0, r.jsxs)(R.A, {
                            user: t,
                            displayProfile: en,
                            themeType: k.d.POPOUT,
                            privateBanner: en?.private === !0 ? (0, r.jsx)(C.A, {}) : void 0,
                            children: [
                                null != es.interactionType &&
                                    (0, r.jsx)(s.animated.div, { style: ea, className: G.tB }),
                                (0, r.jsxs)(O.A, {
                                    children: [
                                        (0, r.jsx)(D.A, {
                                            shouldShowTooltip: null === es.interactionType,
                                            user: t,
                                            guildId: F,
                                            channelId: V,
                                            onClose: j,
                                            appContext: $,
                                        }),
                                        (0, r.jsx)(b.A, { themeType: k.d.POPOUT, user: t }),
                                        !el &&
                                            (0, r.jsx)(L.yo, {
                                                user: t,
                                                guildId: F,
                                                viewProfileItem: ed(),
                                                appContext: $,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: G.wx,
                                    children: [
                                        (0, r.jsx)(v.A, {
                                            user: t,
                                            displayProfile: en,
                                            guildId: F,
                                            themeType: k.d.POPOUT,
                                        }),
                                        (0, r.jsx)(N.A, { userId: t.id, className: G.oR, onClose: j }),
                                        (0, r.jsx)(y.A, {
                                            user: t,
                                            displayProfile: en,
                                            guildId: F,
                                            channelId: V,
                                            themeType: k.d.POPOUT,
                                            onOpenProfile: W ? void 0 : ec,
                                        }),
                                        (0, r.jsx)(w.A, {
                                            ref: eo,
                                            user: t,
                                            guildId: F,
                                            channelId: V,
                                            themeType: k.d.POPOUT,
                                            onCloseProfile: j,
                                            prompt: eu,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: en,
                                    guild: J,
                                    isHoveringOrFocusing: null == es.interactionType && er,
                                    onOpenProfile: W ? void 0 : ec,
                                    channelId: V,
                                    onClose: j,
                                }),
                                (0, r.jsx)(x.A, {
                                    user: t,
                                    guildId: F,
                                    channelId: V,
                                    onClose: j,
                                    appContext: $,
                                    disableAutoFocus: z,
                                }),
                                en?.profileEffect != null &&
                                    (0, r.jsx)(h.A, { skuId: en?.profileEffect?.skuId, isHovering: ei }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
