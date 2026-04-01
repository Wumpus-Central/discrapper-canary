n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(791282),
    s = n.n(l),
    o = n(311907),
    d = n(876230),
    c = n(342952),
    u = n(397927),
    _ = n(429913),
    m = n(287809),
    h = n(405269),
    p = n(403362),
    g = n(985018),
    A = n(2398);
let x = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: a,
            title: l,
            guildId: x,
            playerState: f = d.Q6.PAUSED,
            isControlBarExpanded: C = !0,
        } = e,
        I = (0, _.h)(a),
        E = (0, o.yK)([m.default], () => n.map((e) => m.default.getUser(e)).filter(p.Vq) ?? []),
        b = null != t ? (0, h.Fe)(new Date(t)) : null,
        v = s()([I?.name, b]);
    return (0, i.jsxs)("div", {
        className: r()(A.oK, { [A.pd]: f === d.Q6.PLAYING && !C }),
        children: [
            (0, i.jsx)("div", { className: A.Lu }),
            (0, i.jsxs)("div", {
                className: A.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: A.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: A.$,
                                children: [
                                    (0, i.jsx)(u.xgA, { className: A.gr, size: "xs", color: "white" }),
                                    (0, i.jsx)(u.Text, {
                                        className: A.DD,
                                        variant: "text-md/semibold",
                                        color: "always-white",
                                        children: null != l && l.length > 0 ? l : g.intl.string(g.t.Cyxddp),
                                    }),
                                ],
                            }),
                            v.length > 0 &&
                                (0, i.jsx)(u.Text, {
                                    className: A.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: v.join(" \xb7 "),
                                }),
                        ],
                    }),
                    E.length > 0 &&
                        (0, i.jsx)("div", {
                            className: A.HD,
                            children: (0, i.jsx)(c.A, {
                                maxUsers: 4,
                                users: E,
                                guildId: x,
                                size: u._3J.SIZE_24,
                                "aria-label": g.intl.string(g.t.WTozwe),
                            }),
                        }),
                ],
            }),
        ],
    });
};
