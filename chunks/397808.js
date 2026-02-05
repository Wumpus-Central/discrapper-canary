n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(23339),
    r = n(417597),
    a = n(397927),
    l = n(260509),
    o = n(695515),
    c = n(254847),
    d = n(432882);
let u = (e) => {
    let { guildId: t } = e,
        n = (0, r.bG)([o.A], () => o.A.getGuild(t));
    if (void 0 === n) return null;
    let { name: u } = n,
        _ = (0, l.Iv)(n, 40, !0),
        m = null,
        A = 10;
    return (
        null == n.icon && null != u && ((m = (0, s.oN)(u)), (A = (0, c.Y)(m))),
        (0, i.jsx)("div", {
            className: d.k,
            children: (0, i.jsxs)("div", {
                style: { fontSize: A },
                children: [
                    null != m ? (0, i.jsx)("div", { className: d.X, "aria-hidden": !0, children: m }) : null,
                    null != _ ? (0, i.jsx)(a.euF, { src: _, size: a._3J.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
