n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(736653),
    d = n(793574),
    c = n(688810),
    u = n(994500),
    h = n(562153),
    A = n(183555),
    g = n(672385),
    m = n(950191),
    p = n(249790),
    _ = n(946356),
    x = n(254828),
    f = n(783123),
    E = n(996988),
    C = n(985018),
    I = n(226632),
    S = n(724693);
function b(e) {
    let { user: t, channel: n, onHide: b } = e,
        N = (0, m.Ay)(t.id),
        T = (0, o.Ay)(),
        j = (0, a.bG)([u.A], () => u.A.isBlocked(t.id)),
        { analyticsLocations: v } = (0, c.Ay)(j ? d.A.BLOCKED_PROFILE_PANEL : d.A.IGNORED_PROFILE_PANEL),
        y = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        R = l.useRef(null);
    return (0, i.jsx)(c.f5, {
        value: v,
        children: (0, i.jsx)(A.of, {
            value: y,
            fetchStartedAt: N?.fetchStartedAt,
            fetchEndedAt: N?.fetchEndedAt,
            isLoaded: N?.isLoaded,
            children: (0, i.jsx)(_.A, {
                ref: R,
                user: t,
                displayProfile: N,
                themeType: E.d.SIDEBAR,
                themeOverride: T,
                children: (0, i.jsx)(s.d_W, {
                    children: (0, i.jsxs)("div", {
                        className: I.kL,
                        children: [
                            (0, i.jsx)("img", { alt: "", src: S, className: I.VH, "aria-hidden": !0 }),
                            (0, i.jsxs)("div", {
                                className: I.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: I.N1,
                                        children: [
                                            (0, i.jsx)(p.A, { user: t }),
                                            (0, i.jsx)(r.Heading, {
                                                variant: "heading-lg/bold",
                                                children: C.intl.string(C.t.b33pLD),
                                            }),
                                            (0, i.jsx)(r.Text, {
                                                variant: "text-sm/medium",
                                                children: C.intl.format(j ? C.t["8F+WNz"] : C.t["/cZp5s"], {
                                                    username: h.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(r.BJc, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(f.A, {
                                                isBlocked: j,
                                                onClick: () => {
                                                    b(),
                                                        (0, g.Wn)({
                                                            action: j ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: v,
                                                            ...y,
                                                        });
                                                },
                                            }),
                                            (0, i.jsx)(x.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    b(),
                                                        (0, g.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: v,
                                                            ...y,
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
