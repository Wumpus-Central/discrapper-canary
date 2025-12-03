n.d(t, { Z: () => E });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(657707),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(933557),
    d = n(471445),
    f = n(266076),
    p = n(565138),
    _ = n(430824),
    m = n(388032),
    h = n(478942);
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
            className: h.channelHeader,
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
        n = (0, l.e7)([_.Z], () => _.Z.getGuild(t.guild_id));
    return null != n
        ? (0, r.jsx)(p.Z, {
              className: h.icon,
              guild: n,
              size: p.Z.Sizes.SMALLER,
              "aria-hidden": !0,
          })
        : t.isGroupDM()
          ? (0, r.jsx)(f.Z, {
                channel: t,
                size: c.EFr.SIZE_24,
            })
          : (0, r.jsx)("div", {
                className: a()(h.icon, h.dmIcon),
                children: (0, r.jsx)(o.kBi, { size: "xxs" }),
            });
}
function y(e) {
    let { channel: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getGuild(t.guild_id)),
        i = (0, u.ZP)(t, !1),
        a = (0, d.KS)(t, n),
        o = t.isPrivate() || null == a,
        s = t.isDM() ? m.intl.formatToPlainString(m.t.smD7XV, { username: i }) : i;
    return (0, r.jsxs)("div", {
        className: h.channelNameSection,
        children: [
            o
                ? null
                : (0, r.jsx)(a, {
                      className: h.channelTypeIcon,
                      size: "xxs",
                  }),
            (0, r.jsx)(c.Heading, {
                variant: "text-md/semibold",
                color: "text-default",
                children: s,
            }),
        ],
    });
}
