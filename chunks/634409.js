"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(793574),
    o = n(688810),
    l = n(311016),
    u = n(351966),
    c = n(915089),
    d = n(713517),
    _ = n(267102),
    f = n(562153),
    p = n(183555),
    h = n(672385),
    m = n(950191),
    E = n(657331),
    g = n(718019),
    A = n(31432),
    I = n(915614),
    T = n(389996),
    S = n(946356),
    y = n(810396),
    v = n(35241),
    N = n(587168),
    C = n(652215),
    R = n(996988),
    O = n(985018),
    b = n(886308);
function D(e) {
    let {
            user: t,
            guildId: n,
            channelId: D,
            messageId: L,
            roleId: w,
            openedAt: M,
            setPopoutRef: P,
            closePopout: x,
            disableUserProfileLink: k = __OVERLAY__,
            newAnalyticsLocations: U = [],
            disableAutoFocus: G = !1,
            onClickContainer: F,
        } = e,
        V = (0, m.Ay)(t.id, n),
        B = (0, _.aL)(),
        { analyticsLocations: H } = (0, o.Ay)([...U, a.A.USER_PROFILE_POPOUT]),
        j = (0, p.pb)({ layout: "POPOUT", userId: t.id, guildId: n, channelId: D, messageId: L, roleId: w }),
        Y = i.useRef(null),
        W = (0, d.M)(Y);
    i.useEffect(() => {
        P?.(Y?.current);
    }, [Y, P]);
    let K = () => {
            x?.(),
                B.dispatch(C.jej.POPOUT_CLOSE),
                (0, E.openUserProfileModal)({ sourceAnalyticsLocations: H, hideRestrictedProfile: !0, ...j });
        },
        $ = !k && (0, l.A)(t.id),
        z = () =>
            $
                ? (0, r.jsx)(s.Drp, {
                      id: "view-profile",
                      label: O.intl.string(O.t["+Xp3hq"]),
                      action: () => {
                          K(), (0, h.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: H, ...j });
                      },
                  })
                : null,
        q = G ? "div" : s.lGe,
        Z = (0, c.GV)(),
        X = f.Ay.useName(n, D, t);
    return (0, r.jsx)(o.f5, {
        value: H,
        children: (0, r.jsx)(p.of, {
            value: j,
            openedAt: M,
            fetchStartedAt: V?.fetchStartedAt,
            fetchEndedAt: V?.fetchEndedAt,
            isLoaded: V?.isLoaded,
            children: (0, r.jsxs)(q, {
                ref: Y,
                "aria-labelledby": Z,
                onClick: F,
                children: [
                    (0, r.jsx)(s.AC4, {
                        children: (0, r.jsx)(s.H, { id: Z, children: O.intl.format(O.t.KRe1Fk, { name: X }) }),
                    }),
                    (0, r.jsxs)(S.A, {
                        user: t,
                        displayProfile: V,
                        themeType: R.d.POPOUT,
                        children: [
                            (0, r.jsx)(N.A, { children: (0, r.jsx)(v.A, { user: t, viewProfileItem: z() }) }),
                            (0, r.jsxs)("div", {
                                className: b.wx,
                                children: [
                                    (0, r.jsx)(I.A, { user: t, displayProfile: V, guildId: n, themeType: R.d.POPOUT }),
                                    (0, r.jsx)(g.A, {
                                        user: t,
                                        displayProfile: V,
                                        guildId: n,
                                        channelId: D,
                                        themeType: R.d.POPOUT,
                                        onOpenProfile: $ ? K : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(s.HOs, {
                                fade: !0,
                                className: b.rf,
                                children: [
                                    (0, r.jsx)(y.A, {
                                        user: t,
                                        guildId: n,
                                        nickname: f.Ay.getName(n, D, t),
                                        onOpenProfile: $ ? K : void 0,
                                        tags: (0, r.jsx)(A.A, { displayProfile: V, themeType: R.d.POPOUT, onClose: x }),
                                    }),
                                    (0, r.jsx)(T.E, {
                                        userId: t.id,
                                        userBio: V?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: b.qr }),
                        ],
                    }),
                    V?.profileEffect != null && (0, r.jsx)(u.A, { skuId: V?.profileEffect?.skuId, isHovering: W }),
                ],
            }),
        }),
    });
}
