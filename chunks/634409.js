t.r(i), t.d(i, { default: () => L });
var l = t(627968),
    n = t(64700),
    s = t(477782),
    r = t(305866),
    a = t(140735),
    d = t(707554),
    o = t(364522),
    u = t(793574),
    c = t(688810),
    A = t(311016),
    p = t(480335),
    f = t(915089),
    m = t(713517),
    h = t(267102),
    v = t(562153),
    P = t(183555),
    x = t(47675),
    _ = t(999291),
    O = t(975732),
    j = t(718019),
    g = t(694720),
    y = t(915614),
    R = t(308244),
    E = t(946356),
    T = t(878555),
    I = t(35241),
    S = t(587168),
    b = t(652215),
    N = t(996988),
    U = t(985018),
    C = t(656884);
function L(e) {
    let {
            user: i,
            guildId: t,
            channelId: L,
            messageId: k,
            roleId: w,
            openedAt: M,
            setPopoutRef: V,
            closePopout: W,
            disableUserProfileLink: q = __OVERLAY__,
            newAnalyticsLocations: D = [],
            disableAutoFocus: F = !1,
            onClickContainer: H,
        } = e,
        z = (0, _.Ay)(i.id, t),
        G = (0, h.aL)(),
        { analyticsLocations: X } = (0, c.Ay)([...D, u.A.USER_PROFILE_POPOUT]),
        Y = (0, P.pb)({ layout: "POPOUT", userId: i.id, guildId: t, channelId: L, messageId: k, roleId: w }),
        $ = n.useRef(null),
        B = (0, m.M)($);
    n.useEffect(() => {
        V?.($?.current);
    }, [$, V]);
    let J = () => {
            W?.(),
                G.dispatch(b.jej.POPOUT_CLOSE),
                (0, O.openUserProfileModal)({ sourceAnalyticsLocations: X, hideRestrictedProfile: !0, ...Y });
        },
        K = !q && (0, A.A)(i.id),
        Q = F ? "div" : r.l,
        Z = (0, f.GV)(),
        ee = v.Ay.useName(t, L, i);
    return (0, l.jsx)(c.f5, {
        value: X,
        children: (0, l.jsx)(P.of, {
            value: Y,
            openedAt: M,
            fetchStartedAt: z?.fetchStartedAt,
            fetchEndedAt: z?.fetchEndedAt,
            isLoaded: z?.isLoaded,
            children: (0, l.jsxs)(Q, {
                ref: $,
                "aria-labelledby": Z,
                onClick: H,
                children: [
                    (0, l.jsx)(a.A, {
                        children: (0, l.jsx)(d.H, { id: Z, children: U.intl.format(U.t.KRe1Fk, { name: ee }) }),
                    }),
                    (0, l.jsxs)(E.A, {
                        user: i,
                        displayProfile: z,
                        themeType: N.d.POPOUT,
                        children: [
                            (0, l.jsx)(S.A, {
                                children: (0, l.jsx)(I.A, {
                                    user: i,
                                    viewProfileItem: K
                                        ? (0, l.jsx)(s.Dr, {
                                              id: "view-profile",
                                              label: U.intl.string(U.t["+Xp3hq"]),
                                              action: () => {
                                                  J(),
                                                      (0, x.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: X,
                                                          ...Y,
                                                      });
                                              },
                                          })
                                        : null,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: C.wx,
                                children: [
                                    (0, l.jsx)(y.A, { user: i, displayProfile: z, guildId: t, themeType: N.d.POPOUT }),
                                    (0, l.jsx)(j.A, {
                                        user: i,
                                        displayProfile: z,
                                        guildId: t,
                                        channelId: L,
                                        themeType: N.d.POPOUT,
                                        onOpenProfile: K ? J : void 0,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(o.Ip, {
                                fade: !0,
                                className: C.rf,
                                children: [
                                    (0, l.jsx)(T.Ay, {
                                        user: i,
                                        guildId: t,
                                        displayName: v.Ay.getName(t, L, i),
                                        onClickName: K ? J : void 0,
                                        trailing: (0, l.jsx)(g.A, {
                                            displayProfile: z,
                                            themeType: N.d.POPOUT,
                                            onClose: W,
                                        }),
                                    }),
                                    (0, l.jsx)(R.E, {
                                        userId: i.id,
                                        userBio: z?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: C.qr }),
                        ],
                    }),
                    z?.profileEffect != null && (0, l.jsx)(p.A, { skuId: z?.profileEffect?.skuId, isHovering: B }),
                ],
            }),
        }),
    });
}
