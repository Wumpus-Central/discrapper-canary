n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(901517),
    a = n(397244),
    l = n(714114),
    s = n(729551),
    o = n(427262),
    d = n(985018),
    c = n(893750);
let u = function (e) {
    let { hovered: t, activities: n, applicationStream: u, status: A, user: h, userIgnored: _ } = e,
        { voiceActivityStatusEnabled: m } = (0, r.G)({ location: "StatusText" }),
        { voiceChannel: p } = (0, l.A)({ userId: h?.id }),
        g = m ? p : void 0;
    return _
        ? (0, i.jsx)("div", { className: c.Q, children: d.intl.string(d.t.tFY5Zb) })
        : (0, a.A)({ activities: n, status: A, applicationStream: u, voiceChannel: g })
          ? (0, i.jsx)(s.A, {
                textClassName: c.q,
                activities: n,
                applicationStream: u,
                voiceChannel: g,
                animateEmoji: t,
                user: h,
                textSize: "sm",
            })
          : (0, i.jsx)("div", { className: c.Q, children: (0, o.MU)(A) });
};
