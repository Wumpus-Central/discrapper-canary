n.d(t, { Z: () => _ });
var a = n(200651);
n(192379);
var o = n(481060),
    i = n(493773),
    r = n(367907),
    s = n(524444),
    l = n(297047),
    c = n(592125),
    u = n(944486),
    d = n(626135),
    p = n(981631),
    m = n(388032),
    g = n(171460);
let _ = function (e) {
    let { guild: t, message: n, onClose: _ } = e,
        h = c.Z.getChannel(u.Z.getChannelId(t.id));
    return ((0, i.ZP)(() => {
        d.default.track(p.rMx.OPEN_POPOUT, {
            type: 'New Member Badge Popout',
            guild_id: t.id,
            channel_id: null == h ? void 0 : h.id
        });
    }),
    null == h)
        ? null
        : (0, a.jsx)(s.W_, {
              children: (0, a.jsxs)('div', {
                  className: g.popoutContainer,
                  children: [
                      (0, a.jsxs)('div', {
                          className: g.mainContent,
                          children: [
                              (0, a.jsx)('div', {
                                  className: g.iconContainer,
                                  children: (0, a.jsx)(o.hg2, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: g.header,
                                          children: m.intl.string(m.t['v/OYd3'])
                                      }),
                                      (0, a.jsx)(o.Text, {
                                          variant: 'text-sm/normal',
                                          children: m.intl.string(m.t.Z85MlJ)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(o.zxk, {
                          size: o.zxk.Sizes.SMALL,
                          color: o.zxk.Colors.BRAND,
                          className: g.ctaButton,
                          innerClassName: g.ctaButtonContent,
                          fullWidth: !0,
                          onClick: () => {
                              r.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), _(), (0, l.q)(n.author, h.id);
                          },
                          children: m.intl.format(m.t['+xsVS0'], { username: n.author.username })
                      })
                  ]
              })
          });
};
