s.r(i), s.d(i, { default: () => F });
var d = s(477900),
    l = s(582128),
    t = s(477782),
    r = s(305866),
    a = s(140735),
    n = s(707554),
    o = s(364522),
    c = s(793574),
    u = s(688810),
    f = s(311016),
    P = s(480335),
    p = s(915089),
    h = s(713517),
    A = s(267102),
    x = s(397562),
    O = s(562153),
    j = s(183555),
    y = s(47675),
    m = s(999291),
    v = s(402860),
    E = s(718019),
    I = s(461116),
    T = s(915614),
    _ = s(308244),
    U = s(946356),
    k = s(465829),
    L = s(35241),
    R = s(587168),
    g = s(518477),
    C = s(652215),
    S = s(996988),
    b = s(207634),
    N = s(375708),
    w = s(47453);
function F(e) {
    let {
            user: i,
            guildId: s,
            channelId: F,
            messageId: V,
            roleId: q,
            openedAt: z,
            setPopoutRef: H,
            closePopout: M,
            disableUserProfileLink: W = __OVERLAY__,
            newAnalyticsLocations: B = [],
            disableAutoFocus: D = !1,
            onClickContainer: G,
        } = e,
        K = (0, m.Ay)(i.id, s),
        X = (0, A.aL)(),
        { analyticsLocations: Y } = (0, u.Ay)([...B, c.A.USER_PROFILE_POPOUT]),
        J = (0, j.pb)({ layout: "POPOUT", userId: i.id, guildId: s, channelId: F, messageId: V, roleId: q });
    (0, x.A)(Y, K, g.R7.POPOUT);
    let Q = l.useRef(null),
        Z = (0, h.M)(Q);
    function $() {
        M?.(),
            X.dispatch(C.jej.POPOUT_CLOSE),
            (0, v.openUserProfileModal)({ sourceAnalyticsLocations: Y, hideRestrictedProfile: !0, ...J });
    }
    l.useEffect(() => {
        H?.(Q?.current);
    }, [Q, H]);
    let ee = !W && (0, f.A)(i.id),
        ei = D ? "div" : r.l,
        es = (0, p.GV)(),
        ed = O.Ay.useName(s, F, i);
    return (0, d.jsx)(u.f5, {
        value: Y,
        children: (0, d.jsx)(j.of, {
            value: J,
            openedAt: z,
            fetchStartedAt: K?.fetchStartedAt,
            fetchEndedAt: K?.fetchEndedAt,
            isLoaded: K?.isLoaded,
            children: (0, d.jsxs)(ei, {
                ref: Q,
                "aria-labelledby": es,
                onClick: G,
                children: [
                    (0, d.jsx)(a.A, {
                        children: (0, d.jsx)(n.H, { id: es, children: N.intl.format(N.t.KRe1Fk, { name: ed }) }),
                    }),
                    (0, d.jsxs)(U.A, {
                        user: i,
                        displayProfile: K,
                        themeType: S.d.POPOUT,
                        children: [
                            (0, d.jsx)(R.A, {
                                children: (0, d.jsx)(L.A, {
                                    user: i,
                                    viewProfileItem: ee
                                        ? (0, d.jsx)(t.Dr, {
                                              id: "view-profile",
                                              label: N.intl.string(N.t["+Xp3hq"]),
                                              action: () => {
                                                  $(),
                                                      (0, y.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: Y,
                                                          ...J,
                                                      });
                                              },
                                          })
                                        : null,
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: w.wx,
                                children: [
                                    (0, d.jsx)(T.A, { user: i, displayProfile: K, guildId: s, themeType: S.d.POPOUT }),
                                    (0, d.jsx)(E.A, {
                                        user: i,
                                        displayProfile: K,
                                        guildId: s,
                                        channelId: F,
                                        avatarSize: b.T[S.d.POPOUT].avatarSize,
                                        onOpenProfile: ee ? $ : void 0,
                                    }),
                                ],
                            }),
                            (0, d.jsxs)(o.Ip, {
                                fade: !0,
                                className: w.rf,
                                children: [
                                    (0, d.jsx)(k.Ay, {
                                        user: i,
                                        guildId: s,
                                        displayName: O.Ay.getName(s, F, i),
                                        onClickName: ee ? $ : void 0,
                                        trailing: (0, d.jsx)(I.A, {
                                            displayProfile: K,
                                            themeType: S.d.POPOUT,
                                            onClose: M,
                                        }),
                                    }),
                                    (0, d.jsx)(_.E, {
                                        userId: i.id,
                                        userBio: K?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, d.jsx)("div", { className: w.qr }),
                        ],
                    }),
                    K?.profileEffect != null && (0, d.jsx)(P.A, { skuId: K?.profileEffect?.skuId, isHovering: Z }),
                ],
            }),
        }),
    });
}
