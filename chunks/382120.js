n.d(t, { A: () => x });
var a = n(627968);
n(64700);
var i = n(573613),
    l = n(311907),
    r = n(534514),
    s = n(834730),
    o = n(534890),
    d = n(687966),
    c = n(177953),
    _ = n(973925),
    u = n(622543),
    p = n(985018),
    m = n(935059);
function f(e) {
    let { icon: t, title: n, description: i } = e;
    return (0, a.jsxs)("div", {
        className: m.nM,
        children: [
            (0, a.jsx)("div", {
                className: m.aL,
                children: (0, a.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                className: m.qg,
                children: [
                    (0, a.jsx)(r.D, { variant: "text-xs/semibold", children: n }),
                    (0, a.jsx)(s.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { user: t } = e,
        n = (0, l.bG)([u.A], () => u.A.getUserProfile(t.id)?.application),
        { hasMessageContent: r, hasGuildPresences: x, hasGuildMembers: g } = (0, _.Z)(n);
    return (0, a.jsxs)(i.Ip, {
        fade: !0,
        className: m.XG,
        children: [
            r &&
                (0, a.jsx)(f, {
                    icon: o.o,
                    title: p.intl.string(p.t["7Tmhfu"]),
                    description: p.intl.string(p.t.eu5x7z),
                }),
            x && (0, a.jsx)(f, { icon: d._, title: p.intl.string(p.t.awYSsM), description: p.intl.string(p.t.TpsXoC) }),
            g && (0, a.jsx)(f, { icon: c.n, title: p.intl.string(p.t.WuKeSJ), description: p.intl.string(p.t.wOBmtV) }),
            (0, a.jsx)(s.E, {
                variant: "text-xs/normal",
                children: p.intl.format(p.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
