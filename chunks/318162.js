"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(736653),
    c = n(793574),
    d = n(688810),
    u = n(994500),
    h = n(562153),
    A = n(183555),
    m = n(672385),
    p = n(950191),
    g = n(249790),
    _ = n(946356),
    f = n(254828),
    x = n(783123),
    C = n(996988),
    E = n(985018),
    I = n(133786),
    N = n(724693);
function b(e) {
    let { user: t, channel: n, onHide: b } = e,
        S = (0, p.Ay)(t.id),
        T = (0, o.Ay)(),
        v = (0, r.bG)([u.A], () => u.A.isBlocked(t.id)),
        { analyticsLocations: y } = (0, d.Ay)(v ? c.A.BLOCKED_PROFILE_PANEL : c.A.IGNORED_PROFILE_PANEL),
        j = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        R = s.useRef(null);
    return (0, i.jsx)(d.f5, {
        value: y,
        children: (0, i.jsx)(A.of, {
            value: j,
            isLoaded: S?.isLoaded,
            children: (0, i.jsx)(_.A, {
                ref: R,
                user: t,
                displayProfile: S,
                themeType: C.d.SIDEBAR,
                themeOverride: T,
                children: (0, i.jsx)(l.d_W, {
                    children: (0, i.jsxs)("div", {
                        className: I.kL,
                        children: [
                            (0, i.jsx)("img", { alt: "", src: N, className: I.VH, "aria-hidden": !0 }),
                            (0, i.jsxs)("div", {
                                className: I.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: I.N1,
                                        children: [
                                            (0, i.jsx)(g.A, { user: t }),
                                            (0, i.jsx)(a.Heading, {
                                                variant: "heading-lg/bold",
                                                children: E.intl.string(E.t.b33pLD),
                                            }),
                                            (0, i.jsx)(a.Text, {
                                                variant: "text-sm/medium",
                                                children: E.intl.format(v ? E.t["8F+WNz"] : E.t["/cZp5s"], {
                                                    username: h.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(a.BJc, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(x.A, {
                                                isBlocked: v,
                                                onClick: () => {
                                                    b(),
                                                        (0, m.Wn)({
                                                            action: v ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: y,
                                                            ...j,
                                                        });
                                                },
                                            }),
                                            (0, i.jsx)(f.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    b(),
                                                        (0, m.Wn)({
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
