n.d(t, { Z: () => x });
var r = n(255367),
    s = n(120356),
    l = n.n(s),
    a = n(708816),
    i = n(657707),
    o = n(442837),
    c = n(481060),
    u = n(933557),
    h = n(471445),
    d = n(266076),
    p = n(565138),
    f = n(430824),
    g = n(388032),
    m = n(432513);
let y = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function x(e) {
    let { channel: t, children: n } = e;
    return (0, r.jsx)(a.tE, {
        offset: y,
        children: (0, r.jsxs)('div', {
            className: m.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, r.jsx)(S, { channel: t }), t.isPrivate() ? null : (0, r.jsx)(i.Fbu, { size: 'xxs' }), (0, r.jsx)(b, { channel: t }), n]
        })
    });
}
function S(e) {
    let { channel: t } = e,
        n = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null != n
        ? (0, r.jsx)(p.Z, {
              className: m.icon,
              guild: n,
              size: p.Z.Sizes.SMALLER,
              'aria-hidden': !0
          })
        : t.isGroupDM()
          ? (0, r.jsx)(d.Z, {
                channel: t,
                size: c.EFr.SIZE_24,
                experimentLocation: 'ForLaterChannelHeader'
            })
          : (0, r.jsx)('div', {
                className: l()(m.icon, m.dmIcon),
                children: (0, r.jsx)(i.kBi, { size: 'xxs' })
            });
}
function b(e) {
    let { channel: t } = e,
        n = (0, o.e7)([f.Z], () => f.Z.getGuild(t.guild_id)),
        s = (0, u.ZP)(t, !1),
        l = (0, h.KS)(t, n),
        a = t.isPrivate() || null == l,
        i = t.isDM() ? g.intl.formatToPlainString(g.t.smD7XV, { username: s }) : s;
    return (0, r.jsxs)('div', {
        className: m.channelNameSection,
        children: [
            a
                ? null
                : (0, r.jsx)(l, {
                      className: m.channelTypeIcon,
                      size: 'xxs'
                  }),
            (0, r.jsx)(c.X6q, {
                variant: 'text-md/semibold',
                color: 'header-secondary',
                children: i
            })
        ]
    });
}
