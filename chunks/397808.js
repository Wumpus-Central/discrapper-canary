n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(23339),
    a = n(417597),
    s = n(397927),
    o = n(260509),
    l = n(695515),
    c = n(254847),
    u = n(432882);
let d = (e) => {
    let { guildId: t } = e,
        n = (0, a.bG)([l.A], () => l.A.getGuild(t));
    if (void 0 === n) return null;
    let { name: d } = n,
        f = (0, o.Iv)(n, 40, !0),
        p = null,
        _ = 10;
    return (
        null == n.icon && null != d && ((p = (0, i.oN)(d)), (_ = (0, c.Y)(p))),
        (0, r.jsx)("div", {
            className: u.k,
            children: (0, r.jsxs)("div", {
                style: {
                    fontSize: _,
                },
                children: [
                    null != p
                        ? (0, r.jsx)("div", {
                              className: u.X,
                              "aria-hidden": !0,
                              children: p,
                          })
                        : null,
                    null != f
                        ? (0, r.jsx)(s.euF, {
                              src: f,
                              size: s._3J.SIZE_40,
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
        })
    );
};
