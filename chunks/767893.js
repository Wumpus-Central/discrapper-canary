r.d(t, { Z: () => _ });
var n = r(255367),
    s = r(120356),
    l = r.n(s),
    a = r(708816),
    i = r(657707),
    o = r(442837),
    c = r(481060),
    u = r(933557),
    h = r(471445),
    d = r(266076),
    p = r(565138),
    f = r(430824),
    g = r(388032),
    m = r(432513);
let S = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function _(e) {
    let { channel: t, children: r } = e;
    return (0, n.jsx)(a.tE, {
        offset: S,
        children: (0, n.jsxs)('div', {
            className: m.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, n.jsx)(y, { channel: t }), t.isPrivate() ? null : (0, n.jsx)(i.Fbu, { size: 'xxs' }), (0, n.jsx)(x, { channel: t }), r]
        })
    });
}
function y(e) {
    let { channel: t } = e,
        r = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null != r
        ? (0, n.jsx)(p.Z, {
              className: m.icon,
              guild: r,
              size: p.Z.Sizes.SMALLER,
              'aria-hidden': !0
          })
        : t.isGroupDM()
          ? (0, n.jsx)(d.Z, {
                channel: t,
                size: c.EFr.SIZE_24,
                experimentLocation: 'ForLaterChannelHeader'
            })
          : (0, n.jsx)('div', {
                className: l()(m.icon, m.dmIcon),
                children: (0, n.jsx)(i.kBi, { size: 'xxs' })
            });
}
function x(e) {
    let { channel: t } = e,
        r = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id)),
        s = (0, u.ZP)(t, !1),
        l = (0, h.KS)(t, r),
        a = t.isPrivate() || null == l,
        i = t.isDM() ? g.intl.formatToPlainString(g.t.smD7XV, { username: s }) : s;
    return (0, n.jsxs)('div', {
        className: m.channelNameSection,
        children: [
            a
                ? null
                : (0, n.jsx)(l, {
                      className: m.channelTypeIcon,
                      size: 'xxs'
                  }),
            (0, n.jsx)(c.X6q, {
                variant: 'text-md/semibold',
                color: 'header-secondary',
                children: i
            })
        ]
    });
}
