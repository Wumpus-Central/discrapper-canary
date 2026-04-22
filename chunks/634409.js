"use strict";
i.r(t), i.d(t, { default: () => j });
var r = i(627968),
    a = i(64700),
    n = i(477782),
    s = i(305866),
    l = i(140735),
    o = i(707554),
    c = i(573613),
    d = i(793574),
    u = i(688810),
    _ = i(311016),
    p = i(351966),
    h = i(915089),
    f = i(713517),
    A = i(267102),
    g = i(562153),
    b = i(183555),
    m = i(672385),
    v = i(950191),
    E = i(657331),
    I = i(718019),
    T = i(31432),
    x = i(915614),
    C = i(389996),
    y = i(946356),
    S = i(810396),
    R = i(35241),
    O = i(587168),
    N = i(652215),
    L = i(996988),
    w = i(985018),
    P = i(656884);
function j(e) {
    let {
            user: t,
            guildId: i,
            channelId: j,
            messageId: M,
            roleId: U,
            openedAt: D,
            setPopoutRef: F,
            closePopout: k,
            disableUserProfileLink: B = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: V = !1,
            onClickContainer: H,
        } = e,
        W = (0, v.Ay)(t.id, i),
        Z = (0, A.aL)(),
        { analyticsLocations: $ } = (0, u.Ay)([...G, d.A.USER_PROFILE_POPOUT]),
        Y = (0, b.pb)({ layout: "POPOUT", userId: t.id, guildId: i, channelId: j, messageId: M, roleId: U }),
        J = a.useRef(null),
        z = (0, f.M)(J);
    a.useEffect(() => {
        F?.(J?.current);
    }, [J, F]);
    let K = () => {
            k?.(),
                Z.dispatch(N.jej.POPOUT_CLOSE),
                (0, E.openUserProfileModal)({ sourceAnalyticsLocations: $, hideRestrictedProfile: !0, ...Y });
        },
        q = !B && (0, _.A)(t.id),
        X = V ? "div" : s.l,
        Q = (0, h.GV)(),
        ee = g.Ay.useName(i, j, t);
    return (0, r.jsx)(u.f5, {
        value: $,
        children: (0, r.jsx)(b.of, {
            value: Y,
            openedAt: D,
            fetchStartedAt: W?.fetchStartedAt,
            fetchEndedAt: W?.fetchEndedAt,
            isLoaded: W?.isLoaded,
            children: (0, r.jsxs)(X, {
                ref: J,
                "aria-labelledby": Q,
                onClick: H,
                children: [
                    (0, r.jsx)(l.A, {
                        children: (0, r.jsx)(o.H, { id: Q, children: w.intl.format(w.t.KRe1Fk, { name: ee }) }),
                    }),
                    (0, r.jsxs)(y.A, {
                        user: t,
                        displayProfile: W,
                        themeType: L.d.POPOUT,
                        children: [
                            (0, r.jsx)(O.A, {
                                children: (0, r.jsx)(R.A, {
                                    user: t,
                                    viewProfileItem: q
                                        ? (0, r.jsx)(n.Dr, {
                                              id: "view-profile",
                                              label: w.intl.string(w.t["+Xp3hq"]),
                                              action: () => {
                                                  K(),
                                                      (0, m.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: $,
                                                          ...Y,
                                                      });
                                              },
                                          })
                                        : null,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.wx,
                                children: [
                                    (0, r.jsx)(x.A, { user: t, displayProfile: W, guildId: i, themeType: L.d.POPOUT }),
                                    (0, r.jsx)(I.A, {
                                        user: t,
                                        displayProfile: W,
                                        guildId: i,
                                        channelId: j,
                                        themeType: L.d.POPOUT,
                                        onOpenProfile: q ? K : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(c.Ip, {
                                fade: !0,
                                className: P.rf,
                                children: [
                                    (0, r.jsx)(S.A, {
                                        user: t,
                                        guildId: i,
                                        nickname: g.Ay.getName(i, j, t),
                                        onOpenProfile: q ? K : void 0,
                                        tags: (0, r.jsx)(T.A, { displayProfile: W, themeType: L.d.POPOUT, onClose: k }),
                                    }),
                                    (0, r.jsx)(C.E, {
                                        userId: t.id,
                                        userBio: W?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: P.qr }),
                        ],
                    }),
                    W?.profileEffect != null && (0, r.jsx)(p.A, { skuId: W?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
