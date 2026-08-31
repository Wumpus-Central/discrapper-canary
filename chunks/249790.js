s.d(i, { A: () => o });
var e = s(477900);
s(582128);
var a = s(17928),
    r = s(97808),
    n = s(778712),
    c = s(428678),
    l = s(952270),
    d = s(994500),
    u = s(533970);
function o(t) {
    let { user: i, guildId: s, iconColor: o } = t,
        m = (0, a.bG)([d.A], () => d.A.isBlocked(i.id));
    return (0, e.jsxs)("div", {
        className: u.kL,
        children: [
            (0, e.jsx)(r.eu, {
                className: u.my,
                size: n._3.SIZE_56,
                src: i.getAvatarURL(s, 64),
                "aria-label": i.username,
            }),
            (0, e.jsx)("div", {
                className: u.mI,
                children: m ? (0, e.jsx)(c.K, { color: o }) : (0, e.jsx)(l.EyeSlashIcon, { color: o }),
            }),
        ],
    });
}
