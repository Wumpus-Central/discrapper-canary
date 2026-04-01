n.d(t, { A: () => f });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(934551),
    r = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(47167),
    u = n(713654),
    h = n(598104),
    A = n(263063),
    _ = n(71393),
    m = n(985018),
    g = n(784445);
let p = { top: 8, bottom: 8, left: -4, right: -4 };
function f(e) {
    let { channel: t, children: n } = e;
    return (0, i.jsx)(r.vN3, {
        offset: p,
        children: (0, i.jsxs)("div", {
            className: g.ZO,
            "data-recents-channel": t.id,
            children: [
                (0, i.jsx)(x, { channel: t }),
                t.isPrivate() ? null : (0, i.jsx)(a.ChevronSmallRightIcon, { size: "xxs" }),
                (0, i.jsx)(E, { channel: t }),
                n,
            ],
        }),
    });
}
function x(e) {
    let { channel: t } = e,
        n = (0, o.bG)([_.A], () => _.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(A.Ay, { className: g.Kk, guild: n, size: A.Ay.Sizes.SMALLER, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(h.A, { channel: t, size: d._3J.SIZE_24, "aria-hidden": !0 })
          : (0, i.jsx)("div", { className: s()(g.Kk, g.ro), children: (0, i.jsx)(a.ChatIcon, { size: "xxs" }) });
}
function E(e) {
    let { channel: t } = e,
        n = (0, o.bG)([_.A], () => _.A.getGuild(t.guild_id)),
        l = (0, c.Ay)(t, !1),
        s = (0, u.gU)(t, n),
        a = t.isPrivate() || null == s,
        r = t.isDM() ? m.intl.formatToPlainString(m.t.smD7XV, { username: l }) : l;
    return (0, i.jsxs)("div", {
        className: g.yP,
        children: [
            a ? null : (0, i.jsx)(s, { className: g.j1, size: "xxs" }),
            (0, i.jsx)(d.Heading, { variant: "text-md/semibold", color: "text-default", children: r }),
        ],
    });
}
