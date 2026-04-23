l.d(t, { A: () => x });
var n = l(627968);
l(64700);
var i = l(23339),
    s = l(417597),
    a = l(97808),
    r = l(778712),
    d = l(260509),
    c = l(695515),
    u = l(254847),
    o = l(904425);
let x = (e) => {
    let { guildId: t } = e,
        l = (0, s.bG)([c.A], () => c.A.getGuild(t));
    if (void 0 === l) return null;
    let { name: x } = l,
        h = (0, d.Iv)(l, 40, !0),
        m = null,
        g = 10;
    return (
        null == l.icon && null != x && ((m = (0, i.oN)(x)), (g = (0, u.Y)(m))),
        (0, n.jsx)("div", {
            className: o.k,
            children: (0, n.jsxs)("div", {
                style: { fontSize: g },
                children: [
                    null != m ? (0, n.jsx)("div", { className: o.X, "aria-hidden": !0, children: m }) : null,
                    null != h ? (0, n.jsx)(a.eu, { src: h, size: r._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
