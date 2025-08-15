n.d(t, { Z: () => m });
var r = n(951288),
    s = n(120356),
    l = n.n(s),
    a = n(67136),
    i = n(657707),
    o = n(442837),
    c = n(481060),
    u = n(933557),
    d = n(471445),
    h = n(266076),
    p = n(565138),
    f = n(430824),
    _ = n(388032),
    g = n(478942);
let S = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};
function m(e) {
    let { channel: t, children: n } = e;
    return (0, r.jsx)(a.tE, {
        offset: S,
        children: (0, r.jsxs)("div", {
            className: g.channelHeader,
            "data-recents-channel": t.id,
            children: [
                (0, r.jsx)(y, { channel: t }),
                t.isPrivate() ? null : (0, r.jsx)(i.Fbu, { size: "xxs" }),
                (0, r.jsx)(b, { channel: t }),
                n,
            ],
        }),
    });
}
function y(e) {
    let { channel: t } = e,
        n = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null != n
        ? (0, r.jsx)(p.Z, {
              className: g.icon,
              guild: n,
              size: p.Z.Sizes.SMALLER,
              "aria-hidden": !0,
          })
        : t.isGroupDM()
          ? (0, r.jsx)(h.Z, {
                channel: t,
                size: c.EFr.SIZE_24,
                experimentLocation: "ForLaterChannelHeader",
            })
          : (0, r.jsx)("div", {
                className: l()(g.icon, g.dmIcon),
                children: (0, r.jsx)(i.kBi, { size: "xxs" }),
            });
}
function b(e) {
    let { channel: t } = e,
        n = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id)),
        s = (0, u.ZP)(t, !1),
        l = (0, d.KS)(t, n),
        a = t.isPrivate() || null == l,
        i = t.isDM() ? _.intl.formatToPlainString(_.t.smD7XV, { username: s }) : s;
    return (0, r.jsxs)("div", {
        className: g.channelNameSection,
        children: [
            a
                ? null
                : (0, r.jsx)(l, {
                      className: g.channelTypeIcon,
                      size: "xxs",
                  }),
            (0, r.jsx)(c.X6q, {
                variant: "text-md/semibold",
                color: "header-secondary",
                children: i,
            }),
        ],
    });
}
