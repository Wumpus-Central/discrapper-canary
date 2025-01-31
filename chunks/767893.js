n.d(t, { Z: () => x });
var i = n(200651),
    l = n(120356),
    a = n.n(l),
    r = n(489948),
    s = n(657707),
    o = n(442837),
    c = n(481060),
    d = n(933557),
    u = n(471445),
    m = n(266076),
    h = n(565138),
    _ = n(430824),
    p = n(388032),
    g = n(121361);
let f = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function x(e) {
    let { channel: t, children: n } = e;
    return (0, i.jsx)(r.tE, {
        offset: f,
        children: (0, i.jsxs)('div', {
            className: g.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, i.jsx)(E, { channel: t }), t.isPrivate() ? null : (0, i.jsx)(s.Fbu, { size: 'xxs' }), (0, i.jsx)(C, { channel: t }), n]
        })
    });
}
function E(e) {
    let { channel: t } = e,
        n = (0, o.e7)([_.Z], () => _.Z.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(h.Z, {
              className: g.icon,
              guild: n,
              size: h.Z.Sizes.SMALLER,
              'aria-hidden': !0
          })
        : t.isGroupDM()
          ? (0, i.jsx)(m.Z, {
                channel: t,
                size: c.EFr.SIZE_24,
                experimentLocation: 'ForLaterChannelHeader'
            })
          : (0, i.jsx)('div', {
                className: a()(g.icon, g.dmIcon),
                children: (0, i.jsx)(s.kBi, { size: 'xxs' })
            });
}
function C(e) {
    let { channel: t } = e,
        n = (0, o.e7)([_.Z], () => _.Z.getGuild(t.guild_id)),
        l = (0, d.ZP)(t, !1),
        a = (0, u.KS)(t, n),
        r = t.isPrivate() || null == a,
        s = t.isDM() ? p.intl.formatToPlainString(p.t.smD7XV, { username: l }) : l;
    return (0, i.jsxs)('div', {
        className: g.channelNameSection,
        children: [
            r
                ? null
                : (0, i.jsx)(a, {
                      className: g.channelTypeIcon,
                      size: 'xxs'
                  }),
            (0, i.jsx)(c.X6q, {
                variant: 'text-md/semibold',
                color: 'header-secondary',
                children: s
            })
        ]
    });
}
