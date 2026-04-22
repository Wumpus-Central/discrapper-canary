n.r(t), n.d(t, { default: () => R });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(477782),
    s = n(305866),
    o = n(140735),
    u = n(707554),
    d = n(793574),
    c = n(688810),
    A = n(915089),
    _ = n(713517),
    h = n(267102),
    E = n(71393),
    f = n(562153),
    N = n(183555),
    T = n(672385),
    S = n(950191),
    I = n(657331),
    p = n(718019),
    m = n(915614),
    g = n(946356),
    C = n(490752),
    v = n(587168),
    y = n(159218),
    O = n(666388),
    j = n(848674),
    L = n(652215),
    P = n(996988),
    b = n(985018),
    x = n(656884);
function R(e) {
    let {
            user: t,
            currentUser: n,
            guildId: R,
            channelId: U,
            messageId: G,
            roleId: H,
            openedAt: M,
            closePopout: D,
            setPopoutRef: w,
            disableUserProfileLink: V = __OVERLAY__,
            newAnalyticsLocations: k = [],
            disableAutoFocus: B = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: W } = (0, c.Ay)([...k, d.A.USER_PROFILE_POPOUT]),
        X = (0, h.aL)(),
        K = (0, N.pb)({ layout: "POPOUT", userId: t.id, guildId: R, channelId: U, messageId: G, roleId: H }),
        z = (0, S.Ay)(t.id, R),
        J = (0, r.bG)([E.A], () => (null != R ? E.A.getGuild(R) : null)),
        Y = i.useRef(null),
        { isHoveringOrFocusing: q } = (0, _.A)(Y);
    i.useEffect(() => {
        w?.(Y?.current);
    }, [Y, w]);
    let $ = (e) => {
            D?.(),
                X.dispatch(L.jej.POPOUT_CLOSE),
                (0, I.openUserProfileModal)({ sourceAnalyticsLocations: W, hideRestrictedProfile: !0, ...K, ...e });
        },
        Q = B ? "div" : s.l,
        Z = (0, A.GV)(),
        ee = f.Ay.useName(R, U, t);
    return (0, l.jsx)(c.f5, {
        value: W,
        children: (0, l.jsx)(N.of, {
            value: K,
            openedAt: M,
            fetchStartedAt: z?.fetchStartedAt,
            fetchEndedAt: z?.fetchEndedAt,
            isLoaded: z?.isLoaded,
            children: (0, l.jsxs)(Q, {
                ref: Y,
                "aria-labelledby": Z,
                onClick: F,
                children: [
                    (0, l.jsx)(o.A, {
                        children: (0, l.jsx)(u.H, { id: Z, children: b.intl.format(b.t.KRe1Fk, { name: ee }) }),
                    }),
                    (0, l.jsxs)(g.A, {
                        user: t,
                        displayProfile: z,
                        themeType: P.d.POPOUT,
                        children: [
                            (0, l.jsx)(v.A, {
                                children: (0, l.jsx)(C.A, {
                                    user: t,
                                    guildId: R,
                                    viewProfileItem: V
                                        ? null
                                        : (0, l.jsx)(a.Dr, {
                                              id: "view-profile",
                                              label: b.intl.string(b.t["+Xp3hq"]),
                                              action: () => {
                                                  $(),
                                                      (0, T.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: W,
                                                          ...K,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: x.wx,
                                children: [
                                    (0, l.jsx)(m.A, { user: t, displayProfile: z, guildId: R, themeType: P.d.POPOUT }),
                                    (0, l.jsx)(p.A, {
                                        user: t,
                                        displayProfile: z,
                                        guildId: R,
                                        channelId: U,
                                        themeType: P.d.POPOUT,
                                        onOpenProfile: V ? void 0 : $,
                                    }),
                                    (0, l.jsx)(y.A, {
                                        user: t,
                                        themeType: P.d.POPOUT,
                                        onCloseProfile: D,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(O.A, {
                                user: t,
                                currentUser: n,
                                displayProfile: z,
                                guild: J,
                                isHoveringOrFocusing: q,
                                onOpenProfile: V ? void 0 : $,
                                channelId: U,
                                onClose: D,
                            }),
                            (0, l.jsx)(j.A, { user: t, guildId: R, channelId: U, onClose: D, disableAutoFocus: B }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
