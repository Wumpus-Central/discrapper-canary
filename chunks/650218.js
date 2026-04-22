i.r(t), i.d(t, { default: () => R });
var r = i(627968),
    l = i(64700),
    a = i(311907),
    n = i(305866),
    s = i(534514),
    o = i(834730),
    d = i(331322),
    c = i(793574),
    u = i(688810),
    _ = i(994500),
    m = i(562153),
    f = i(183555),
    p = i(672385),
    A = i(950191),
    h = i(249790),
    v = i(946356),
    E = i(254828),
    I = i(783123),
    x = i(996988),
    y = i(985018),
    b = i(706171),
    g = i(911850);
function R(e) {
    let {
            user: t,
            guildId: i,
            setPopoutRef: R,
            channelId: O,
            messageId: N,
            roleId: C,
            openedAt: T,
            onHide: k,
            newAnalyticsLocations: w = [],
            disableAutoFocus: P = !1,
            onClickContainer: j,
        } = e,
        L = (0, a.bG)([_.A], () => _.A.isBlocked(t.id)),
        { analyticsLocations: D } = (0, u.Ay)([...w, L ? c.A.BLOCKED_PROFILE_POPOUT : c.A.IGNORED_PROFILE_POPOUT]),
        F = (0, f.pb)({ layout: "POPOUT", userId: t.id, guildId: i, channelId: O, messageId: N, roleId: C }),
        S = l.useRef(null),
        U = (0, A.Ay)(t.id, i);
    l.useEffect(() => {
        R?.(S?.current);
    }, [S, R]);
    let M = L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        H = P ? "div" : n.l;
    return (0, r.jsx)(u.f5, {
        value: D,
        children: (0, r.jsx)(f.of, {
            value: F,
            openedAt: T,
            fetchStartedAt: U?.fetchStartedAt,
            fetchEndedAt: U?.fetchEndedAt,
            isLoaded: U?.isLoaded,
            children: (0, r.jsx)(H, {
                ref: S,
                "aria-label": t.username,
                onClick: j,
                children: (0, r.jsx)(v.A, {
                    user: t,
                    displayProfile: U,
                    themeType: x.d.POPOUT,
                    children: (0, r.jsxs)("div", {
                        className: b.kL,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: g, className: b.VH, "aria-hidden": !0 }),
                            (0, r.jsxs)("div", {
                                className: b.rf,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: b.N1,
                                        children: [
                                            (0, r.jsx)(h.A, { user: t, guildId: i }),
                                            (0, r.jsx)(s.D, {
                                                variant: "heading-lg/bold",
                                                children: y.intl.string(y.t.b33pLD),
                                            }),
                                            (0, r.jsx)(o.E, {
                                                variant: "text-sm/medium",
                                                children: y.intl.format(L ? y.t["8F+WNz"] : y.t["/cZp5s"], {
                                                    username: m.Ay.getName(i, O, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(d.B, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(I.A, {
                                                isBlocked: L,
                                                onClick: () => {
                                                    k(), (0, p.Wn)({ action: M, analyticsLocations: D, ...F });
                                                },
                                            }),
                                            (0, r.jsx)(E.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    k(),
                                                        (0, p.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: D,
                                                            ...F,
                                                        });
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
