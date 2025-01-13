n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    a = n(489948),
    o = n(657707),
    s = n(442837),
    c = n(481060),
    d = n(933557),
    u = n(471445),
    m = n(266076),
    h = n(565138),
    f = n(430824),
    p = n(388032),
    _ = n(121361);
let g = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function E(e) {
    let { channel: t, children: n } = e;
    return (0, i.jsx)(a.tE, {
        offset: g,
        children: (0, i.jsxs)('div', {
            className: _.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, i.jsx)(C, { channel: t }), t.isPrivate() ? null : (0, i.jsx)(o.Fbu, { size: 'xxs' }), (0, i.jsx)(I, { channel: t }), n]
        })
    });
}
function C(e) {
    let { channel: t } = e,
        n = (0, s.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(h.Z, {
              className: _.icon,
              guild: n,
              size: h.Z.Sizes.SMALLER,
              'aria-hidden': !0
          })
        : t.isGroupDM()
          ? (0, i.jsx)(m.Z, {
                channel: t,
                size: c.AvatarSizes.SIZE_24,
                experimentLocation: 'ForLaterChannelHeader'
            })
          : (0, i.jsx)('div', {
                className: l()(_.icon, _.dmIcon),
                children: (0, i.jsx)(o.kBi, { size: 'xxs' })
            });
}
function I(e) {
    let { channel: t } = e,
        n = (0, s.e7)([f.Z], () => f.Z.getGuild(t.guild_id)),
        r = (0, d.ZP)(t, !1),
        l = (0, u.KS)(t, n),
        a = t.isPrivate() || null == l,
        o = t.isDM() ? p.intl.formatToPlainString(p.t.smD7XV, { username: r }) : r;
    return (0, i.jsxs)('div', {
        className: _.channelNameSection,
        children: [
            a
                ? null
                : (0, i.jsx)(l, {
                      className: _.channelTypeIcon,
                      size: 'xxs'
                  }),
            (0, i.jsx)(c.Heading, {
                variant: 'text-md/semibold',
                color: 'header-secondary',
                children: o
            })
        ]
    });
}
