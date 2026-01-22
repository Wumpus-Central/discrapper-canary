n.d(t, { A: () => b });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(158954),
    s = n(273423),
    c = n(973172),
    o = n(854788),
    d = n(379581),
    u = n(379574),
    p = n(559607),
    h = n(985018),
    m = n(534114);
function b(e) {
    let { className: t, view: n, application: a } = e,
        b = "embedded" === n,
        f = (0, c.A)({ application: a });
    return (0, l.jsxs)("div", {
        className: r()(t, {
            [m.PD]: !b,
            [m.UT]: b,
        }),
        children: [
            (0, l.jsxs)("div", {
                className: r()(m.hd, { [m.d5]: b }),
                children: [
                    (0, l.jsx)("div", {
                        className: m.iY,
                        children: (0, l.jsx)(s.A, {
                            application: a,
                            mutualGuilds: f,
                            mutualGuildShownMax: 3,
                            className: m.wu,
                            guildIconSize: s.I.SMALL,
                            guildsClassName: m.HG,
                            compact: !0,
                            children: (0, l.jsx)(i.DZT, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: h.intl.string(h.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, l.jsx)(o.A, {
                        application: a,
                        className: m.iY,
                    }),
                    (0, l.jsx)(p.A, {
                        application: a,
                        className: m.iY,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: r()(m.hd, { [m.d5]: b }),
                children: [
                    (0, l.jsx)(d.A, {
                        application: a,
                        className: m.iY,
                        innerClassName: b ? m.RU : void 0,
                    }),
                    (0, l.jsx)(u.A, {
                        application: a,
                        className: m.iY,
                    }),
                ],
            }),
        ],
    });
}
