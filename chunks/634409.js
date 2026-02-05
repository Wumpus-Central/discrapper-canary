"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(311016),
    u = n(915089),
    c = n(713517),
    d = n(267102),
    _ = n(182592),
    f = n(562153),
    p = n(183555),
    h = n(672385),
    m = n(950191),
    g = n(657331),
    E = n(718019),
    A = n(31432),
    I = n(915614),
    T = n(389996),
    y = n(946356),
    S = n(810396),
    v = n(35241),
    C = n(587168),
    b = n(652215),
    N = n(996988),
    R = n(985018),
    O = n(183959);
function D(e) {
    let {
            user: t,
            guildId: n,
            channelId: D,
            messageId: L,
            roleId: w,
            openedAt: x,
            setPopoutRef: P,
            closePopout: M,
            disableUserProfileLink: k = __OVERLAY__,
            newAnalyticsLocations: U = [],
            disableAutoFocus: G = !1,
            onClickContainer: V,
        } = e,
        F = (0, m.Ay)(t.id, n),
        B = (0, d.aL)(),
        { analyticsLocations: j } = (0, o.Ay)([...U, s.A.USER_PROFILE_POPOUT]),
        H = (0, p.pb)({ layout: "POPOUT", userId: t.id, guildId: n, channelId: D, messageId: L, roleId: w }),
        Y = i.useRef(null),
        W = (0, c.M)(Y);
    i.useEffect(() => {
        P?.(Y?.current);
    }, [Y, P]);
    let K = () => {
            M?.(),
                B.dispatch(b.jej.POPOUT_CLOSE),
                (0, g.openUserProfileModal)({ sourceAnalyticsLocations: j, hideRestrictedProfile: !0, ...H });
        },
        z = !k && (0, l.A)(t.id),
        $ = () =>
            z
                ? (0, r.jsx)(a.Drp, {
                      id: "view-profile",
                      label: R.intl.string(R.t["+Xp3hq"]),
                      action: () => {
                          K(), (0, h.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: j, ...H });
                      },
                  })
                : null,
        q = G ? "div" : a.lGe,
        Z = (0, u.GV)(),
        Q = f.Ay.useName(n, D, t);
    return (0, r.jsx)(o.f5, {
        value: j,
        children: (0, r.jsx)(p.of, {
            value: H,
            openedAt: x,
            fetchStartedAt: F?.fetchStartedAt,
            fetchEndedAt: F?.fetchEndedAt,
            isLoaded: F?.isLoaded,
            children: (0, r.jsxs)(q, {
                ref: Y,
                "aria-labelledby": Z,
                onClick: V,
                children: [
                    (0, r.jsx)(a.AC4, {
                        children: (0, r.jsx)(a.H, { id: Z, children: R.intl.format(R.t.KRe1Fk, { name: Q }) }),
                    }),
                    (0, r.jsxs)(y.A, {
                        user: t,
                        displayProfile: F,
                        themeType: N.d.POPOUT,
                        children: [
                            (0, r.jsx)(C.A, { children: (0, r.jsx)(v.A, { user: t, viewProfileItem: $() }) }),
                            (0, r.jsxs)("div", {
                                className: O.wx,
                                children: [
                                    (0, r.jsx)(I.A, { user: t, displayProfile: F, guildId: n, themeType: N.d.POPOUT }),
                                    (0, r.jsx)(E.A, {
                                        user: t,
                                        displayProfile: F,
                                        guildId: n,
                                        channelId: D,
                                        themeType: N.d.POPOUT,
                                        onOpenProfile: z ? K : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.HOs, {
                                fade: !0,
                                className: O.rf,
                                children: [
                                    (0, r.jsx)(S.A, {
                                        user: t,
                                        guildId: n,
                                        nickname: f.Ay.getName(n, D, t),
                                        onOpenProfile: z ? K : void 0,
                                        tags: (0, r.jsx)(A.A, { displayProfile: F, themeType: N.d.POPOUT, onClose: M }),
                                    }),
                                    (0, r.jsx)(T.A, {
                                        userId: t.id,
                                        userBio: F?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: O.qr }),
                        ],
                    }),
                    F?.profileEffect != null && (0, r.jsx)(_.A, { skuId: F?.profileEffect?.skuId, isHovering: W }),
                ],
            }),
        }),
    });
}
