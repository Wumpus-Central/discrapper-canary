s.r(i), s.d(i, { default: () => N });
var d = s(477900),
    l = s(582128),
    r = s(477782),
    t = s(305866),
    a = s(140735),
    n = s(707554),
    o = s(364522),
    c = s(793574),
    u = s(688810),
    f = s(311016),
    p = s(480335),
    h = s(915089),
    P = s(713517),
    A = s(267102),
    x = s(562153),
    j = s(183555),
    O = s(47675),
    y = s(999291),
    m = s(975732),
    v = s(718019),
    E = s(398062),
    I = s(915614),
    T = s(308244),
    _ = s(946356),
    k = s(465829),
    L = s(35241),
    U = s(587168),
    g = s(652215),
    C = s(996988),
    R = s(985253),
    S = s(375708),
    b = s(47453);
function N(e) {
    let {
            user: i,
            guildId: s,
            channelId: N,
            messageId: w,
            roleId: F,
            openedAt: V,
            setPopoutRef: q,
            closePopout: z,
            disableUserProfileLink: H = __OVERLAY__,
            newAnalyticsLocations: M = [],
            disableAutoFocus: W = !1,
            onClickContainer: B,
        } = e,
        D = (0, y.Ay)(i.id, s),
        G = (0, A.aL)(),
        { analyticsLocations: K } = (0, u.Ay)([...M, c.A.USER_PROFILE_POPOUT]),
        X = (0, j.pb)({ layout: "POPOUT", userId: i.id, guildId: s, channelId: N, messageId: w, roleId: F }),
        Y = l.useRef(null),
        J = (0, P.M)(Y);
    function Q() {
        z?.(),
            G.dispatch(g.jej.POPOUT_CLOSE),
            (0, m.openUserProfileModal)({ sourceAnalyticsLocations: K, hideRestrictedProfile: !0, ...X });
    }
    l.useEffect(() => {
        q?.(Y?.current);
    }, [Y, q]);
    let Z = !H && (0, f.A)(i.id),
        $ = W ? "div" : t.l,
        ee = (0, h.GV)(),
        ei = x.Ay.useName(s, N, i);
    return (0, d.jsx)(u.f5, {
        value: K,
        children: (0, d.jsx)(j.of, {
            value: X,
            openedAt: V,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, d.jsxs)($, {
                ref: Y,
                "aria-labelledby": ee,
                onClick: B,
                children: [
                    (0, d.jsx)(a.A, {
                        children: (0, d.jsx)(n.H, { id: ee, children: S.intl.format(S.t.KRe1Fk, { name: ei }) }),
                    }),
                    (0, d.jsxs)(_.A, {
                        user: i,
                        displayProfile: D,
                        themeType: C.d.POPOUT,
                        children: [
                            (0, d.jsx)(U.A, {
                                children: (0, d.jsx)(L.A, {
                                    user: i,
                                    viewProfileItem: Z
                                        ? (0, d.jsx)(r.Dr, {
                                              id: "view-profile",
                                              label: S.intl.string(S.t["+Xp3hq"]),
                                              action: () => {
                                                  Q(),
                                                      (0, O.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: K,
                                                          ...X,
                                                      });
                                              },
                                          })
                                        : null,
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: b.wx,
                                children: [
                                    (0, d.jsx)(I.A, { user: i, displayProfile: D, guildId: s, themeType: C.d.POPOUT }),
                                    (0, d.jsx)(v.A, {
                                        user: i,
                                        displayProfile: D,
                                        guildId: s,
                                        channelId: N,
                                        avatarSize: R.T[C.d.POPOUT].avatarSize,
                                        onOpenProfile: Z ? Q : void 0,
                                    }),
                                ],
                            }),
                            (0, d.jsxs)(o.Ip, {
                                fade: !0,
                                className: b.rf,
                                children: [
                                    (0, d.jsx)(k.Ay, {
                                        user: i,
                                        guildId: s,
                                        displayName: x.Ay.getName(s, N, i),
                                        onClickName: Z ? Q : void 0,
                                        trailing: (0, d.jsx)(E.A, {
                                            displayProfile: D,
                                            themeType: C.d.POPOUT,
                                            onClose: z,
                                        }),
                                    }),
                                    (0, d.jsx)(T.E, {
                                        userId: i.id,
                                        userBio: D?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, d.jsx)("div", { className: b.qr }),
                        ],
                    }),
                    D?.profileEffect != null && (0, d.jsx)(p.A, { skuId: D?.profileEffect?.skuId, isHovering: J }),
                ],
            }),
        }),
    });
}
