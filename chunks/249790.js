s.d(i, { A: () => d });
var a = s(477900);
s(582128);
var e = s(17928),
    r = s(97808),
    n = s(778712),
    c = s(428678),
    l = s(952270),
    u = s(994500),
    o = s(597761);
function d(t) {
    let { user: i, guildId: s, iconColor: d } = t,
        m = (0, e.bG)([u.A], () => u.A.isBlocked(i.id));
    return (0, a.jsxs)("div", {
        className: o.kL,
        children: [
            (0, a.jsx)(r.eu, {
                className: o.my,
                size: n._3.SIZE_56,
                src: i.getAvatarURL(s, 64),
                "aria-label": i.username,
            }),
            (0, a.jsx)("div", {
                className: o.mI,
                children: m ? (0, a.jsx)(c.K, { color: d }) : (0, a.jsx)(l.EyeSlashIcon, { color: d }),
            }),
        ],
    });
}
