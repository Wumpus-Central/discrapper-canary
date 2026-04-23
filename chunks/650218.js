s.r(t), s.d(t, { default: () => N });
var i = s(627968),
    r = s(64700),
    a = s(311907),
    d = s(305866),
    n = s(534514),
    l = s(834730),
    c = s(331322),
    o = s(793574),
    u = s(688810),
    _ = s(994500),
    h = s(562153),
    x = s(183555),
    m = s(672385),
    A = s(950191),
    v = s(249790),
    I = s(946356),
    E = s(254828),
    f = s(783123),
    O = s(996988),
    j = s(985018),
    p = s(706171),
    L = s(911850);
function N(e) {
    let {
            user: t,
            guildId: s,
            setPopoutRef: N,
            channelId: g,
            messageId: b,
            roleId: R,
            openedAt: k,
            onHide: P,
            newAnalyticsLocations: C = [],
            disableAutoFocus: y = !1,
            onClickContainer: D,
        } = e,
        F = (0, a.bG)([_.A], () => _.A.isBlocked(t.id)),
        { analyticsLocations: w } = (0, u.Ay)([...C, F ? o.A.BLOCKED_PROFILE_POPOUT : o.A.IGNORED_PROFILE_POPOUT]),
        G = (0, x.pb)({ layout: "POPOUT", userId: t.id, guildId: s, channelId: g, messageId: b, roleId: R }),
        T = r.useRef(null),
        W = (0, A.Ay)(t.id, s);
    r.useEffect(() => {
        N?.(T?.current);
    }, [T, N]);
    let B = F ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        V = y ? "div" : d.l;
    return (0, i.jsx)(u.f5, {
        value: w,
        children: (0, i.jsx)(x.of, {
            value: G,
            openedAt: k,
            fetchStartedAt: W?.fetchStartedAt,
            fetchEndedAt: W?.fetchEndedAt,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(V, {
                ref: T,
                "aria-label": t.username,
                onClick: D,
                children: (0, i.jsx)(I.A, {
                    user: t,
                    displayProfile: W,
                    themeType: O.d.POPOUT,
                    children: (0, i.jsxs)("div", {
                        className: p.kL,
                        children: [
                            (0, i.jsx)("img", { alt: "", src: L, className: p.VH, "aria-hidden": !0 }),
                            (0, i.jsxs)("div", {
                                className: p.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: p.N1,
                                        children: [
                                            (0, i.jsx)(v.A, { user: t, guildId: s }),
                                            (0, i.jsx)(n.D, {
                                                variant: "heading-lg/bold",
                                                children: j.intl.string(j.t.b33pLD),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                variant: "text-sm/medium",
                                                children: j.intl.format(F ? j.t["8F+WNz"] : j.t["/cZp5s"], {
                                                    username: h.Ay.getName(s, g, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(f.A, {
                                                isBlocked: F,
                                                onClick: () => {
                                                    P(), (0, m.Wn)({ action: B, analyticsLocations: w, ...G });
                                                },
                                            }),
                                            (0, i.jsx)(E.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    P(),
                                                        (0, m.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: w,
                                                            ...G,
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
