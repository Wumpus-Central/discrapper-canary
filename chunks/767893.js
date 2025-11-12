n.d(t, { Z: () => E });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(657707),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(933557),
    d = n(471445),
    f = n(266076),
    _ = n(565138),
    p = n(430824),
    h = n(388032),
    m = n(478942);
let g = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};
function E(e) {
    let { channel: t, children: n } = e;
    return (0, r.jsx)(s.tEY, {
        offset: g,
        children: (0, r.jsxs)("div", {
            className: m.channelHeader,
            "data-recents-channel": t.id,
            children: [
                (0, r.jsx)(b, { channel: t }),
                t.isPrivate() ? null : (0, r.jsx)(o.Fbu, { size: "xxs" }),
                (0, r.jsx)(y, { channel: t }),
                n,
            ],
        }),
    });
}
function b(e) {
    let { channel: t } = e,
        n = (0, l.e7)([p.Z], () => p.Z.getGuild(t.guild_id));
    return null != n
        ? (0, r.jsx)(_.Z, {
              className: m.icon,
              guild: n,
              size: _.Z.Sizes.SMALLER,
              "aria-hidden": !0,
          })
        : t.isGroupDM()
          ? (0, r.jsx)(f.Z, {
                channel: t,
                size: c.EFr.SIZE_24,
            })
          : (0, r.jsx)("div", {
                className: a()(m.icon, m.dmIcon),
                children: (0, r.jsx)(o.kBi, { size: "xxs" }),
            });
}
function y(e) {
    let { channel: t } = e,
        n = (0, l.e7)([p.Z], () => p.Z.getGuild(t.guild_id)),
        i = (0, u.ZP)(t, !1),
        a = (0, d.KS)(t, n),
        o = t.isPrivate() || null == a,
        s = t.isDM() ? h.intl.formatToPlainString(h.t.smD7XV, { username: i }) : i;
    return (0, r.jsxs)("div", {
        className: m.channelNameSection,
        children: [
            o
                ? null
                : (0, r.jsx)(a, {
                      className: m.channelTypeIcon,
                      size: "xxs",
                  }),
            (0, r.jsx)(c.Heading, {
                variant: "text-md/semibold",
                color: "header-secondary",
                children: s,
            }),
        ],
    });
}
