n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(468194),
    a = n(399606),
    o = n(481060),
    s = n(601964),
    l = n(914788),
    c = n(792258),
    u = n(374766);
let d = (e) => {
    let { guildId: t } = e,
        n = (0, a.e7)([l.Z], () => l.Z.getGuild(t));
    if (void 0 === n) return null;
    let { name: d } = n,
        f = (0, s.EB)(n, 40, !0),
        p = null,
        _ = 10;
    return (
        null == n.icon && null != d && ((p = (0, i.Zg)(d)), (_ = (0, c.o)(p))),
        (0, r.jsx)("div", {
            className: u.container,
            children: (0, r.jsxs)("div", {
                style: { fontSize: _ },
                children: [
                    null != p
                        ? (0, r.jsx)("div", {
                              className: u.guildAvatar,
                              "aria-hidden": !0,
                              children: p,
                          })
                        : null,
                    null != f
                        ? (0, r.jsx)(o.qEK, {
                              src: f,
                              size: o.EFr.SIZE_40,
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
        })
    );
};
