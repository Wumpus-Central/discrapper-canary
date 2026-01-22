n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(901517),
    l = n(397244),
    a = n(714114),
    s = n(729551),
    o = n(427262),
    c = n(985018),
    u = n(893750);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: p, user: f, userIgnored: h } = e,
        { voiceActivityStatusEnabled: A } = (0, i.G)({
            location: "StatusText",
        }),
        { voiceChannel: g } = (0, a.A)({
            userId: null == f ? void 0 : f.id,
        }),
        m = A ? g : void 0;
    return h
        ? (0, r.jsx)("div", {
              className: u.Q,
              children: c.intl.string(c.t.tFY5Zb),
          })
        : (0, l.A)({
                activities: n,
                status: p,
                applicationStream: d,
                voiceChannel: m,
            })
          ? (0, r.jsx)(s.A, {
                textClassName: u.q,
                activities: n,
                applicationStream: d,
                voiceChannel: m,
                animateEmoji: t,
                user: f,
                textSize: "sm",
            })
          : (0, r.jsx)("div", {
                className: u.Q,
                children: (0, o.MU)(p),
            });
};
