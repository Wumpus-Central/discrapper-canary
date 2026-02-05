"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
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
    g = n(657331),
    E = n(718019),
    A = n(915614),
    I = n(946356),
    T = n(490752),
    y = n(587168),
    S = n(159218),
    v = n(666388),
    C = n(848674),
    b = n(652215),
    N = n(996988),
    R = n(985018),
    O = n(183959);
function D(e) {
    let {
            user: t,
            currentUser: n,
            guildId: D,
            channelId: L,
            messageId: w,
            roleId: x,
            openedAt: P,
            closePopout: M,
            setPopoutRef: k,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: V = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: B } = (0, l.Ay)([...G, o.A.USER_PROFILE_POPOUT]),
        j = (0, d.aL)(),
        H = (0, p.pb)({ layout: "POPOUT", userId: t.id, guildId: D, channelId: L, messageId: w, roleId: x }),
        Y = (0, m.Ay)(t.id, D),
        W = (0, a.bG)([_.A], () => (null != D ? _.A.getGuild(D) : null)),
        K = i.useRef(null),
        { isHoveringOrFocusing: z } = (0, c.A)(K);
    i.useEffect(() => {
        k?.(K?.current);
    }, [K, k]);
    let $ = (e) => {
            M?.(),
                j.dispatch(b.jej.POPOUT_CLOSE),
                (0, g.openUserProfileModal)({ sourceAnalyticsLocations: B, hideRestrictedProfile: !0, ...H, ...e });
        },
        q = () =>
            U
                ? null
                : (0, r.jsx)(s.Drp, {
                      id: "view-profile",
                      label: R.intl.string(R.t["+Xp3hq"]),
                      action: () => {
                          $(), (0, h.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: B, ...H });
                      },
                  }),
        Z = V ? "div" : s.lGe,
        Q = (0, u.GV)(),
        X = f.Ay.useName(D, L, t);
    return (0, r.jsx)(l.f5, {
        value: B,
        children: (0, r.jsx)(p.of, {
            value: H,
            openedAt: P,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, r.jsxs)(Z, {
                ref: K,
                "aria-labelledby": Q,
                onClick: F,
                children: [
                    (0, r.jsx)(s.AC4, {
                        children: (0, r.jsx)(s.H, { id: Q, children: R.intl.format(R.t.KRe1Fk, { name: X }) }),
                    }),
                    (0, r.jsxs)(I.A, {
                        user: t,
                        displayProfile: Y,
                        themeType: N.d.POPOUT,
                        children: [
                            (0, r.jsx)(y.A, {
                                children: (0, r.jsx)(T.A, { user: t, guildId: D, viewProfileItem: q() }),
                            }),
                            (0, r.jsxs)("div", {
                                className: O.wx,
                                children: [
                                    (0, r.jsx)(A.A, { user: t, displayProfile: Y, guildId: D, themeType: N.d.POPOUT }),
                                    (0, r.jsx)(E.A, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: D,
                                        channelId: L,
                                        themeType: N.d.POPOUT,
                                        onOpenProfile: U ? void 0 : $,
                                    }),
                                    (0, r.jsx)(S.A, {
                                        user: t,
                                        themeType: N.d.POPOUT,
                                        onCloseProfile: M,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(v.A, {
                                user: t,
                                currentUser: n,
                                displayProfile: Y,
                                guild: W,
                                isHoveringOrFocusing: z,
                                onOpenProfile: U ? void 0 : $,
                                channelId: L,
                                onClose: M,
                            }),
                            (0, r.jsx)(C.A, { user: t, guildId: D, channelId: L, onClose: M, disableAutoFocus: V }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
