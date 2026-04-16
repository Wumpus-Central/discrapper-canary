"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(915089),
    c = n(713517),
    d = n(267102),
    _ = n(71393),
    f = n(562153),
    p = n(183555),
    h = n(672385),
    m = n(950191),
    E = n(657331),
    g = n(718019),
    A = n(915614),
    I = n(946356),
    T = n(490752),
    S = n(587168),
    y = n(159218),
    v = n(666388),
    N = n(848674),
    C = n(652215),
    R = n(996988),
    O = n(985018),
    b = n(886308);
function D(e) {
    let {
            user: t,
            currentUser: n,
            guildId: D,
            channelId: L,
            messageId: w,
            roleId: M,
            openedAt: P,
            closePopout: x,
            setPopoutRef: k,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: F = !1,
            onClickContainer: V,
        } = e,
        { analyticsLocations: B } = (0, l.Ay)([...G, o.A.USER_PROFILE_POPOUT]),
        H = (0, d.aL)(),
        j = (0, p.pb)({ layout: "POPOUT", userId: t.id, guildId: D, channelId: L, messageId: w, roleId: M }),
        Y = (0, m.Ay)(t.id, D),
        W = (0, s.bG)([_.A], () => (null != D ? _.A.getGuild(D) : null)),
        K = i.useRef(null),
        { isHoveringOrFocusing: $ } = (0, c.A)(K);
    i.useEffect(() => {
        k?.(K?.current);
    }, [K, k]);
    let z = (e) => {
            x?.(),
                H.dispatch(C.jej.POPOUT_CLOSE),
                (0, E.openUserProfileModal)({ sourceAnalyticsLocations: B, hideRestrictedProfile: !0, ...j, ...e });
        },
        q = () =>
            U
                ? null
                : (0, r.jsx)(a.Drp, {
                      id: "view-profile",
                      label: O.intl.string(O.t["+Xp3hq"]),
                      action: () => {
                          z(), (0, h.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: B, ...j });
                      },
                  }),
        Z = F ? "div" : a.lGe,
        X = (0, u.GV)(),
        Q = f.Ay.useName(D, L, t);
    return (0, r.jsx)(l.f5, {
        value: B,
        children: (0, r.jsx)(p.of, {
            value: j,
            openedAt: P,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, r.jsxs)(Z, {
                ref: K,
                "aria-labelledby": X,
                onClick: V,
                children: [
                    (0, r.jsx)(a.AC4, {
                        children: (0, r.jsx)(a.H, { id: X, children: O.intl.format(O.t.KRe1Fk, { name: Q }) }),
                    }),
                    (0, r.jsxs)(I.A, {
                        user: t,
                        displayProfile: Y,
                        themeType: R.d.POPOUT,
                        children: [
                            (0, r.jsx)(S.A, {
                                children: (0, r.jsx)(T.A, { user: t, guildId: D, viewProfileItem: q() }),
                            }),
                            (0, r.jsxs)("div", {
                                className: b.wx,
                                children: [
                                    (0, r.jsx)(A.A, { user: t, displayProfile: Y, guildId: D, themeType: R.d.POPOUT }),
                                    (0, r.jsx)(g.A, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: D,
                                        channelId: L,
                                        themeType: R.d.POPOUT,
                                        onOpenProfile: U ? void 0 : z,
                                    }),
                                    (0, r.jsx)(y.A, {
                                        user: t,
                                        themeType: R.d.POPOUT,
                                        onCloseProfile: x,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(v.A, {
                                user: t,
                                currentUser: n,
                                displayProfile: Y,
                                guild: W,
                                isHoveringOrFocusing: $,
                                onOpenProfile: U ? void 0 : z,
                                channelId: L,
                                onClose: x,
                            }),
                            (0, r.jsx)(N.A, { user: t, guildId: D, channelId: L, onClose: x, disableAutoFocus: F }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
