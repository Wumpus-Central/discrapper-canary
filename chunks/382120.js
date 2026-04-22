a.d(t, { A: () => b });
var n = a(627968);
a(64700);
var i = a(573613),
    l = a(311907),
    r = a(534514),
    d = a(834730),
    o = a(534890),
    s = a(687966),
    c = a(177953),
    _ = a(973925),
    u = a(622543),
    m = a(985018),
    p = a(935059);
function g(e) {
    let { icon: t, title: a, description: i } = e;
    return (0, n.jsxs)("div", {
        className: p.nM,
        children: [
            (0, n.jsx)("div", {
                className: p.aL,
                children: (0, n.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, n.jsxs)("div", {
                className: p.qg,
                children: [
                    (0, n.jsx)(r.D, { variant: "text-xs/semibold", children: a }),
                    (0, n.jsx)(d.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { user: t } = e,
        a = (0, l.bG)([u.A], () => u.A.getUserProfile(t.id)?.application),
        { hasMessageContent: r, hasGuildPresences: b, hasGuildMembers: f } = (0, _.Z)(a);
    return (0, n.jsxs)(i.Ip, {
        fade: !0,
        className: p.XG,
        children: [
            r &&
                (0, n.jsx)(g, {
                    icon: o.o,
                    title: m.intl.string(m.t["7Tmhfu"]),
                    description: m.intl.string(m.t.eu5x7z),
                }),
            b && (0, n.jsx)(g, { icon: s._, title: m.intl.string(m.t.awYSsM), description: m.intl.string(m.t.TpsXoC) }),
            f && (0, n.jsx)(g, { icon: c.n, title: m.intl.string(m.t.WuKeSJ), description: m.intl.string(m.t.wOBmtV) }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                children: m.intl.format(m.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
