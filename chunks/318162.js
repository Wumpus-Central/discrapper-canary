n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(573613),
    a = n(311907),
    r = n(534514),
    o = n(834730),
    d = n(331322),
    c = n(736653),
    u = n(793574),
    h = n(688810),
    A = n(994500),
    _ = n(562153),
    m = n(183555),
    g = n(672385),
    p = n(950191),
    f = n(249790),
    E = n(946356),
    x = n(254828),
    I = n(783123),
    C = n(996988),
    b = n(985018),
    N = n(735103),
    S = n(724693);
function v(e) {
    let { user: t, channel: n, onHide: v } = e,
        T = (0, p.Ay)(t.id),
        y = (0, c.Ay)(),
        R = (0, a.bG)([A.A], () => A.A.isBlocked(t.id)),
        { analyticsLocations: j } = (0, h.Ay)(R ? u.A.BLOCKED_PROFILE_PANEL : u.A.IGNORED_PROFILE_PANEL),
        L = (0, m.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        O = l.useRef(null);
    return (0, i.jsx)(h.f5, {
        value: j,
        children: (0, i.jsx)(m.of, {
            value: L,
            fetchStartedAt: T?.fetchStartedAt,
            fetchEndedAt: T?.fetchEndedAt,
            isLoaded: T?.isLoaded,
            children: (0, i.jsx)(E.A, {
                ref: O,
                user: t,
                displayProfile: T,
                themeType: C.d.SIDEBAR,
                themeOverride: y,
                children: (0, i.jsx)(s.d_, {
                    children: (0, i.jsxs)("div", {
                        className: N.kL,
                        children: [
                            (0, i.jsx)("img", { alt: "", src: S, className: N.VH, "aria-hidden": !0 }),
                            (0, i.jsxs)("div", {
                                className: N.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: N.N1,
                                        children: [
                                            (0, i.jsx)(f.A, { user: t }),
                                            (0, i.jsx)(r.D, {
                                                variant: "heading-lg/bold",
                                                children: b.intl.string(b.t.b33pLD),
                                            }),
                                            (0, i.jsx)(o.E, {
                                                variant: "text-sm/medium",
                                                children: b.intl.format(R ? b.t["8F+WNz"] : b.t["/cZp5s"], {
                                                    username: _.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(I.A, {
                                                isBlocked: R,
                                                onClick: () => {
                                                    v(),
                                                        (0, g.Wn)({
                                                            action: R ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: j,
                                                            ...L,
                                                        });
                                                },
                                            }),
                                            (0, i.jsx)(x.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    v(),
                                                        (0, g.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: j,
                                                            ...L,
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
