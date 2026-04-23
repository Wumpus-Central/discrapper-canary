n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(97808),
    r = n(778712),
    a = n(428678),
    o = n(952270),
    d = n(994500),
    c = n(387881);
function u(e) {
    let { user: t, guildId: n, iconColor: u } = e,
        h = (0, l.bG)([d.A], () => d.A.isBlocked(t.id));
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)(s.eu, {
                className: c.my,
                size: r._3.SIZE_56,
                src: t.getAvatarURL(n, 64),
                "aria-label": t.username,
            }),
            (0, i.jsx)("div", {
                className: c.mI,
                children: h ? (0, i.jsx)(a.K, { color: u }) : (0, i.jsx)(o.G, { color: u }),
            }),
        ],
    });
}
