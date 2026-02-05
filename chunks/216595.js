r.d(t, { A: () => f });
var s = r(627968),
    n = r(503698),
    l = r.n(n),
    a = r(934551),
    i = r(158954),
    o = r(311907),
    u = r(397927),
    c = r(47167),
    d = r(713654),
    h = r(598104),
    _ = r(263063),
    S = r(71393),
    E = r(985018),
    g = r(348635);
let p = { top: 8, bottom: 8, left: -4, right: -4 };
function f(e) {
    let { channel: t, children: r } = e;
    return (0, s.jsx)(i.vN3, {
        offset: p,
        children: (0, s.jsxs)("div", {
            className: g.ZO,
            "data-recents-channel": t.id,
            children: [
                (0, s.jsx)(A, { channel: t }),
                t.isPrivate() ? null : (0, s.jsx)(a.ChevronSmallRightIcon, { size: "xxs" }),
                (0, s.jsx)(m, { channel: t }),
                r,
            ],
        }),
    });
}
function A(e) {
    let { channel: t } = e,
        r = (0, o.bG)([S.A], () => S.A.getGuild(t.guild_id));
    return null != r
        ? (0, s.jsx)(_.A, { className: g.Kk, guild: r, size: _.A.Sizes.SMALLER, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, s.jsx)(h.A, { channel: t, size: u._3J.SIZE_24 })
          : (0, s.jsx)("div", { className: l()(g.Kk, g.ro), children: (0, s.jsx)(a.ChatIcon, { size: "xxs" }) });
}
function m(e) {
    let { channel: t } = e,
        r = (0, o.bG)([S.A], () => S.A.getGuild(t.guild_id)),
        n = (0, c.Ay)(t, !1),
        l = (0, d.gU)(t, r),
        a = t.isPrivate() || null == l,
        i = t.isDM() ? E.intl.formatToPlainString(E.t.smD7XV, { username: n }) : n;
    return (0, s.jsxs)("div", {
        className: g.yP,
        children: [
            a ? null : (0, s.jsx)(l, { className: g.j1, size: "xxs" }),
            (0, s.jsx)(u.Heading, { variant: "text-md/semibold", color: "text-default", children: i }),
        ],
    });
}
