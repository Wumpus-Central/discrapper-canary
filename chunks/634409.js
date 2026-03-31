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
    b = n(74209);
function D(e) {
    let {
            user: t,
            guildId: n,
            channelId: D,
            messageId: L,
            roleId: w,
            setPopoutRef: M,
            closePopout: P,
            disableUserProfileLink: x = __OVERLAY__,
            newAnalyticsLocations: k = [],
            disableAutoFocus: U = !1,
            onClickContainer: G,
        } = e,
        F = (0, m.Ay)(t.id, n),
        V = (0, _.aL)(),
        { analyticsLocations: B } = (0, o.Ay)([...k, a.A.USER_PROFILE_POPOUT]),
        H = (0, p.pb)({ layout: "POPOUT", userId: t.id, guildId: n, channelId: D, messageId: L, roleId: w }),
        j = i.useRef(null),
        Y = (0, d.M)(j);
    i.useEffect(() => {
        M?.(j?.current);
    }, [j, M]);
    let W = () => {
            P?.(),
                V.dispatch(C.jej.POPOUT_CLOSE),
                (0, E.openUserProfileModal)({ sourceAnalyticsLocations: B, hideRestrictedProfile: !0, ...H });
        },
        K = !x && (0, l.A)(t.id),
        $ = () =>
            K
                ? (0, r.jsx)(s.Drp, {
                      id: "view-profile",
                      label: O.intl.string(O.t["+Xp3hq"]),
                      action: () => {
                          W(), (0, h.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: B, ...H });
                      },
                  })
                : null,
        z = U ? "div" : s.lGe,
        q = (0, c.GV)(),
        Z = f.Ay.useName(n, D, t);
    return (0, r.jsx)(o.f5, {
        value: B,
        children: (0, r.jsx)(p.of, {
            value: H,
            isLoaded: F?.isLoaded,
            children: (0, r.jsxs)(z, {
                ref: j,
                "aria-labelledby": q,
                onClick: G,
                children: [
                    (0, r.jsx)(s.AC4, {
                        children: (0, r.jsx)(s.H, { id: q, children: O.intl.format(O.t.KRe1Fk, { name: Z }) }),
                    }),
                    (0, r.jsxs)(S.A, {
                        user: t,
                        displayProfile: F,
                        themeType: R.d.POPOUT,
                        children: [
                            (0, r.jsx)(N.A, { children: (0, r.jsx)(v.A, { user: t, viewProfileItem: $() }) }),
                            (0, r.jsxs)("div", {
                                className: b.wx,
                                children: [
                                    (0, r.jsx)(I.A, { user: t, displayProfile: F, guildId: n, themeType: R.d.POPOUT }),
                                    (0, r.jsx)(g.A, {
                                        user: t,
                                        displayProfile: F,
                                        guildId: n,
                                        channelId: D,
                                        themeType: R.d.POPOUT,
                                        onOpenProfile: K ? W : void 0,
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
                                        onOpenProfile: K ? W : void 0,
                                        tags: (0, r.jsx)(A.A, { displayProfile: F, themeType: R.d.POPOUT, onClose: P }),
                                    }),
                                    (0, r.jsx)(T.E, {
                                        userId: t.id,
                                        userBio: F?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: b.qr }),
                        ],
                    }),
                    F?.profileEffect != null && (0, r.jsx)(u.A, { skuId: F?.profileEffect?.skuId, isHovering: Y }),
                ],
            }),
        }),
    });
}
