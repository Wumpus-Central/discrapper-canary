n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397244),
    l = n(714114),
    a = n(729551),
    r = n(427262),
    o = n(985018),
    c = n(501859);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: u, user: m, userIgnored: A } = e,
        { voiceChannel: h } = (0, l.A)({ userId: m?.id });
    return A
        ? (0, i.jsx)("div", { className: c.Q, children: o.intl.string(o.t.tFY5Zb) })
        : (0, s.A)({ activities: n, status: u, applicationStream: d, voiceChannel: h })
          ? (0, i.jsx)(a.A, {
                textClassName: c.q,
                activities: n,
                applicationStream: d,
                voiceChannel: h,
                animateEmoji: t,
                user: m,
                textSize: "sm",
            })
          : (0, i.jsx)("div", { className: c.Q, children: (0, r.MU)(u) });
};
