t.d(s, { A: () => b });
var a = t(627968),
    n = t(503698),
    l = t.n(n),
    i = t(320448),
    r = t(534890),
    c = t(187322),
    d = t(311907),
    o = t(778712),
    u = t(534514),
    m = t(47167),
    x = t(713654),
    g = t(598104),
    v = t(263063),
    j = t(71393),
    h = t(985018),
    A = t(2224);
let f = { top: 8, bottom: 8, left: -4, right: -4 };
function b(e) {
    let { channel: s, children: t } = e;
    return (0, a.jsx)(c.vN, {
        offset: f,
        children: (0, a.jsxs)("div", {
            className: A.ZO,
            "data-recents-channel": s.id,
            children: [
                (0, a.jsx)(N, { channel: s }),
                s.isPrivate() ? null : (0, a.jsx)(i._, { size: "xxs" }),
                (0, a.jsx)(p, { channel: s }),
                t,
            ],
        }),
    });
}
function N(e) {
    let { channel: s } = e,
        t = (0, d.bG)([j.A], () => j.A.getGuild(s.guild_id));
    return null != t
        ? (0, a.jsx)(v.Ay, { className: A.Kk, guild: t, size: v.Ay.Sizes.SMALLER, "aria-hidden": !0 })
        : s.isGroupDM()
          ? (0, a.jsx)(g.A, { channel: s, size: o._3.SIZE_24, "aria-hidden": !0 })
          : (0, a.jsx)("div", { className: l()(A.Kk, A.ro), children: (0, a.jsx)(r.o, { size: "xxs" }) });
}
function p(e) {
    let { channel: s } = e,
        t = (0, d.bG)([j.A], () => j.A.getGuild(s.guild_id)),
        n = (0, m.Ay)(s, !1),
        l = (0, x.gU)(s, t),
        i = s.isPrivate() || null == l,
        r = s.isDM() ? h.intl.formatToPlainString(h.t.smD7XV, { username: n }) : n;
    return (0, a.jsxs)("div", {
        className: A.yP,
        children: [
            i ? null : (0, a.jsx)(l, { className: A.j1, size: "xxs" }),
            (0, a.jsx)(u.D, { variant: "text-md/semibold", color: "text-default", children: r }),
        ],
    });
}
