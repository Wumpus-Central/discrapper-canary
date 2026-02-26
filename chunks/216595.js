r.d(t, { A: () => A });
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
    E = r(71393),
    S = r(985018),
    f = r(298573);
let g = { top: 8, bottom: 8, left: -4, right: -4 };
function A(e) {
    let { channel: t, children: r } = e;
    return (0, s.jsx)(i.vN3, {
        offset: g,
        children: (0, s.jsxs)("div", {
            className: f.ZO,
            "data-recents-channel": t.id,
            children: [
                (0, s.jsx)(p, { channel: t }),
                t.isPrivate() ? null : (0, s.jsx)(a.ChevronSmallRightIcon, { size: "xxs" }),
                (0, s.jsx)(R, { channel: t }),
                r,
            ],
        }),
    });
}
function p(e) {
    let { channel: t } = e,
        r = (0, o.bG)([E.A], () => E.A.getGuild(t.guild_id));
    return null != r
        ? (0, s.jsx)(_.Ay, { className: f.Kk, guild: r, size: _.Ay.Sizes.SMALLER, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, s.jsx)(h.A, { channel: t, size: u._3J.SIZE_24 })
          : (0, s.jsx)("div", { className: l()(f.Kk, f.ro), children: (0, s.jsx)(a.ChatIcon, { size: "xxs" }) });
}
function R(e) {
    let { channel: t } = e,
        r = (0, o.bG)([E.A], () => E.A.getGuild(t.guild_id)),
        n = (0, c.Ay)(t, !1),
        l = (0, d.gU)(t, r),
        a = t.isPrivate() || null == l,
        i = t.isDM() ? S.intl.formatToPlainString(S.t.smD7XV, { username: n }) : n;
    return (0, s.jsxs)("div", {
        className: f.yP,
        children: [
            a ? null : (0, s.jsx)(l, { className: f.j1, size: "xxs" }),
            (0, s.jsx)(u.Heading, { variant: "text-md/semibold", color: "text-default", children: i }),
        ],
    });
}
