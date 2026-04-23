n.r(t), n.d(t, { default: () => R });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(477782),
    o = n(305866),
    s = n(140735),
    d = n(707554),
    u = n(793574),
    _ = n(688810),
    c = n(915089),
    f = n(713517),
    A = n(267102),
    h = n(71393),
    p = n(562153),
    E = n(183555),
    T = n(672385),
    N = n(950191),
    S = n(657331),
    I = n(718019),
    m = n(915614),
    C = n(946356),
    g = n(490752),
    v = n(587168),
    x = n(159218),
    y = n(666388),
    b = n(848674),
    L = n(652215),
    O = n(996988),
    j = n(985018),
    P = n(656884);
function R(e) {
    let {
            user: t,
            currentUser: n,
            guildId: R,
            channelId: U,
            messageId: G,
            roleId: H,
            openedAt: k,
            closePopout: w,
            setPopoutRef: M,
            disableUserProfileLink: D = __OVERLAY__,
            newAnalyticsLocations: B = [],
            disableAutoFocus: V = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: W } = (0, _.Ay)([...B, u.A.USER_PROFILE_POPOUT]),
        K = (0, A.aL)(),
        X = (0, E.pb)({ layout: "POPOUT", userId: t.id, guildId: R, channelId: U, messageId: G, roleId: H }),
        J = (0, N.Ay)(t.id, R),
        z = (0, r.bG)([h.A], () => (null != R ? h.A.getGuild(R) : null)),
        q = i.useRef(null),
        { isHoveringOrFocusing: Q } = (0, f.A)(q);
    i.useEffect(() => {
        M?.(q?.current);
    }, [q, M]);
    let Y = (e) => {
            w?.(),
                K.dispatch(L.jej.POPOUT_CLOSE),
                (0, S.openUserProfileModal)({ sourceAnalyticsLocations: W, hideRestrictedProfile: !0, ...X, ...e });
        },
        $ = V ? "div" : o.l,
        Z = (0, c.GV)(),
        ee = p.Ay.useName(R, U, t);
    return (0, l.jsx)(_.f5, {
        value: W,
        children: (0, l.jsx)(E.of, {
            value: X,
            openedAt: k,
            fetchStartedAt: J?.fetchStartedAt,
            fetchEndedAt: J?.fetchEndedAt,
            isLoaded: J?.isLoaded,
            children: (0, l.jsxs)($, {
                ref: q,
                "aria-labelledby": Z,
                onClick: F,
                children: [
                    (0, l.jsx)(s.A, {
                        children: (0, l.jsx)(d.H, { id: Z, children: j.intl.format(j.t.KRe1Fk, { name: ee }) }),
                    }),
                    (0, l.jsxs)(C.A, {
                        user: t,
                        displayProfile: J,
                        themeType: O.d.POPOUT,
                        children: [
                            (0, l.jsx)(v.A, {
                                children: (0, l.jsx)(g.A, {
                                    user: t,
                                    guildId: R,
                                    viewProfileItem: D
                                        ? null
                                        : (0, l.jsx)(a.Dr, {
                                              id: "view-profile",
                                              label: j.intl.string(j.t["+Xp3hq"]),
                                              action: () => {
                                                  Y(),
                                                      (0, T.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: W,
                                                          ...X,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: P.wx,
                                children: [
                                    (0, l.jsx)(m.A, { user: t, displayProfile: J, guildId: R, themeType: O.d.POPOUT }),
                                    (0, l.jsx)(I.A, {
                                        user: t,
                                        displayProfile: J,
                                        guildId: R,
                                        channelId: U,
                                        themeType: O.d.POPOUT,
                                        onOpenProfile: D ? void 0 : Y,
                                    }),
                                    (0, l.jsx)(x.A, {
                                        user: t,
                                        themeType: O.d.POPOUT,
                                        onCloseProfile: w,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(y.A, {
                                user: t,
                                currentUser: n,
                                displayProfile: J,
                                guild: z,
                                isHoveringOrFocusing: Q,
                                onOpenProfile: D ? void 0 : Y,
                                channelId: U,
                                onClose: w,
                            }),
                            (0, l.jsx)(b.A, { user: t, guildId: R, channelId: U, onClose: w, disableAutoFocus: V }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
