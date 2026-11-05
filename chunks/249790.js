var e = s(477900);
s(582128);
var n = s(855986),
    a = s(97808),
    r = s(778712),
    c = s(428678),
    l = s(952270),
    d = s(994500),
    o = s(533970);
s.d(
    i,
    {},
    {
        A: function (t) {
            let { user: i, guildId: s, iconColor: u } = t,
                m = (0, n.bG)([d.A], () => d.A.isBlocked(i.id));
            return (0, e.jsxs)("div", {
                className: o.kL,
                children: [
                    (0, e.jsx)(a.eu, {
                        className: o.my,
                        size: r._3.SIZE_56,
                        src: i.getAvatarURL(s, 64),
                        "aria-label": i.username,
                    }),
                    (0, e.jsx)("div", {
                        className: o.mI,
                        children: m ? (0, e.jsx)(c.DenyIcon, { color: u }) : (0, e.jsx)(l.EyeSlashIcon, { color: u }),
                    }),
                ],
            });
        },
    },
);
