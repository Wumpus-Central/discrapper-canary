n.d(t, { A: () => T });
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
    _ = n(672385),
    m = n(950191),
    g = n(249790),
    p = n(946356),
    f = n(254828),
    x = n(783123),
    E = n(996988),
    I = n(985018),
    C = n(914538),
    N = n(724693);
function T(e) {
    let { user: t, channel: n, onHide: T } = e,
        S = (0, m.Ay)(t.id),
        b = (0, o.Ay)(),
        v = (0, a.bG)([u.A], () => u.A.isBlocked(t.id)),
        { analyticsLocations: y } = (0, c.Ay)(v ? d.A.BLOCKED_PROFILE_PANEL : d.A.IGNORED_PROFILE_PANEL),
        j = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        R = l.useRef(null);
    return (0, i.jsx)(c.f5, {
        value: y,
        children: (0, i.jsx)(A.of, {
            value: j,
            isLoaded: S?.isLoaded,
            children: (0, i.jsx)(p.A, {
                ref: R,
                user: t,
                displayProfile: S,
                themeType: E.d.SIDEBAR,
                themeOverride: b,
                children: (0, i.jsx)(s.d_W, {
                    children: (0, i.jsxs)("div", {
                        className: C.kL,
                        children: [
                            (0, i.jsx)("img", { alt: "", src: N, className: C.VH, "aria-hidden": !0 }),
                            (0, i.jsxs)("div", {
                                className: C.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: C.N1,
                                        children: [
                                            (0, i.jsx)(g.A, { user: t }),
                                            (0, i.jsx)(r.Heading, {
                                                variant: "heading-lg/bold",
                                                children: I.intl.string(I.t.b33pLD),
                                            }),
                                            (0, i.jsx)(r.Text, {
                                                variant: "text-sm/medium",
                                                children: I.intl.format(v ? I.t["8F+WNz"] : I.t["/cZp5s"], {
                                                    username: h.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(r.BJc, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(x.A, {
                                                isBlocked: v,
                                                onClick: () => {
                                                    T(),
                                                        (0, _.Wn)({
                                                            action: v ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: y,
                                                            ...j,
                                                        });
                                                },
                                            }),
                                            (0, i.jsx)(f.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    T(),
                                                        (0, _.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: y,
                                                            ...j,
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
