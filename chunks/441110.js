n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var o = n(481060),
    a = n(493773),
    i = n(367907),
    s = n(524444),
    c = n(297047),
    l = n(592125),
    u = n(944486),
    d = n(626135),
    p = n(981631),
    g = n(388032),
    m = n(400822);
let f = function (e) {
    let { guild: t, message: n, onClose: f } = e,
        _ = l.Z.getChannel(u.Z.getChannelId(t.id));
    return ((0, a.ZP)(() => {
        d.default.track(p.rMx.OPEN_POPOUT, {
            type: 'New Member Badge Popout',
            guild_id: t.id,
            channel_id: null == _ ? void 0 : _.id
        });
    }),
    null == _)
        ? null
        : (0, r.jsx)(s.W_, {
              className: m.messagePopoutContent,
              children: (0, r.jsxs)('div', {
                  className: m.popoutContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: m.mainContent,
                          children: [
                              (0, r.jsx)('div', {
                                  className: m.iconContainer,
                                  children: (0, r.jsx)(o.hg2, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40
                                  })
                              }),
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(o.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: m.header,
                                          children: g.NW.string(g.t['v/OYd3'])
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/normal',
                                          children: g.NW.string(g.t.Z85MlJ)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(o.zxk, {
                          size: o.zxk.Sizes.SMALL,
                          color: o.zxk.Colors.BRAND,
                          className: m.ctaButton,
                          fullWidth: !0,
                          onClick: () => {
                              i.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), f(), (0, c.q)(n.author, _.id);
                          },
                          children: g.NW.format(g.t['+xsVS0'], { username: n.author.username })
                      })
                  ]
              })
          });
};
