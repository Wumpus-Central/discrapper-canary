s.r(i), s.d(i, { default: () => S });
var d = s(627968),
    l = s(64700),
    r = s(477782),
    t = s(305866),
    a = s(140735),
    o = s(707554),
    n = s(364522),
    c = s(793574),
    u = s(688810),
    f = s(311016),
    p = s(480335),
    P = s(915089),
    h = s(713517),
    A = s(267102),
    x = s(562153),
    j = s(183555),
    O = s(47675),
    m = s(628779),
    y = s(999291),
    v = s(975732),
    E = s(718019),
    I = s(803362),
    T = s(915614),
    _ = s(308244),
    g = s(946356),
    U = s(878555),
    k = s(35241),
    L = s(587168),
    N = s(652215),
    b = s(996988),
    C = s(375708),
    R = s(656884);
function S(e) {
    let {
            user: i,
            guildId: s,
            channelId: S,
            messageId: w,
            roleId: F,
            openedAt: V,
            setPopoutRef: q,
            closePopout: B,
            disableUserProfileLink: H = __OVERLAY__,
            newAnalyticsLocations: M = [],
            disableAutoFocus: W = !1,
            onClickContainer: D,
        } = e,
        G = (0, y.Ay)(i.id, s),
        K = (0, m.$)("NonUserBotProfilePopout"),
        X = (0, A.aL)(),
        { analyticsLocations: Y } = (0, u.Ay)([...M, c.A.USER_PROFILE_POPOUT]),
        $ = (0, j.pb)({ layout: "POPOUT", userId: i.id, guildId: s, channelId: S, messageId: w, roleId: F }),
        z = l.useRef(null),
        J = (0, h.M)(z);
    l.useEffect(() => {
        q?.(z?.current);
    }, [z, q]);
    let Q = () => {
            B?.(),
                X.dispatch(N.jej.POPOUT_CLOSE),
                (0, v.openUserProfileModal)({ sourceAnalyticsLocations: Y, hideRestrictedProfile: !0, ...$ });
        },
        Z = !H && (0, f.A)(i.id),
        ee = W ? "div" : t.l,
        ei = (0, P.GV)(),
        es = x.Ay.useName(s, S, i);
    return (0, d.jsx)(u.f5, {
        value: Y,
        children: (0, d.jsx)(j.of, {
            value: $,
            openedAt: V,
            fetchStartedAt: G?.fetchStartedAt,
            fetchEndedAt: G?.fetchEndedAt,
            isLoaded: G?.isLoaded,
            children: (0, d.jsxs)(ee, {
                ref: z,
                "aria-labelledby": ei,
                onClick: D,
                children: [
                    (0, d.jsx)(a.A, {
                        children: (0, d.jsx)(o.H, { id: ei, children: C.intl.format(C.t.KRe1Fk, { name: es }) }),
                    }),
                    (0, d.jsxs)(g.A, {
                        user: i,
                        displayProfile: G,
                        themeType: b.d.POPOUT,
                        className: K ? "user-profile-sidebar-redesign" : void 0,
                        children: [
                            (0, d.jsx)(L.A, {
                                children: (0, d.jsx)(k.A, {
                                    user: i,
                                    viewProfileItem: Z
                                        ? (0, d.jsx)(r.Dr, {
                                              id: "view-profile",
                                              label: C.intl.string(C.t["+Xp3hq"]),
                                              action: () => {
                                                  Q(),
                                                      (0, O.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: Y,
                                                          ...$,
                                                      });
                                              },
                                          })
                                        : null,
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, d.jsx)(T.A, {
                                        user: i,
                                        displayProfile: G,
                                        guildId: s,
                                        themeType: b.d.POPOUT,
                                        specOverrides: K ? { themePadding: 1 } : void 0,
                                    }),
                                    (0, d.jsx)(E.A, {
                                        user: i,
                                        displayProfile: G,
                                        guildId: s,
                                        channelId: S,
                                        themeType: b.d.POPOUT,
                                        onOpenProfile: Z ? Q : void 0,
                                    }),
                                ],
                            }),
                            (0, d.jsxs)(n.Ip, {
                                fade: !0,
                                className: R.rf,
                                children: [
                                    (0, d.jsx)(U.Ay, {
                                        user: i,
                                        guildId: s,
                                        displayName: x.Ay.getName(s, S, i),
                                        onClickName: Z ? Q : void 0,
                                        trailing: (0, d.jsx)(I.A, {
                                            displayProfile: G,
                                            themeType: b.d.POPOUT,
                                            onClose: B,
                                        }),
                                    }),
                                    (0, d.jsx)(_.E, {
                                        userId: i.id,
                                        userBio: G?.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, d.jsx)("div", { className: R.qr }),
                        ],
                    }),
                    G?.profileEffect != null && (0, d.jsx)(p.A, { skuId: G?.profileEffect?.skuId, isHovering: J }),
                ],
            }),
        }),
    });
}
