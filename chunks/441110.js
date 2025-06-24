n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(481060),
    o = n(493773),
    i = n(367907),
    s = n(524444),
    a = n(297047),
    c = n(592125),
    u = n(944486),
    d = n(626135),
    p = n(981631),
    m = n(388032),
    g = n(400822);
let f = function (e) {
    let { guild: t, message: n, onClose: f } = e,
        b = c.Z.getChannel(u.Z.getChannelId(t.id));
    return ((0, o.ZP)(() => {
        d.default.track(p.rMx.OPEN_POPOUT, {
            type: 'New Member Badge Popout',
            guild_id: t.id,
            channel_id: null == b ? void 0 : b.id
        });
    }),
    null == b)
        ? null
        : (0, r.jsx)(s.W_, {
              className: g.messagePopoutContent,
              children: (0, r.jsxs)('div', {
                  className: g.popoutContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: g.mainContent,
                          children: [
                              (0, r.jsx)('div', {
                                  className: g.iconContainer,
                                  children: (0, r.jsx)(l.hg2, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40
                                  })
                              }),
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(l.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: g.header,
                                          children: m.intl.string(m.t['v/OYd3'])
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-sm/normal',
                                          children: m.intl.string(m.t.Z85MlJ)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(l.zxk, {
                          size: l.zxk.Sizes.SMALL,
                          color: l.zxk.Colors.BRAND,
                          className: g.ctaButton,
                          fullWidth: !0,
                          onClick: () => {
                              i.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), f(), (0, a.q)(n.author, b.id);
                          },
                          children: m.intl.format(m.t['+xsVS0'], { username: n.author.username })
                      })
                  ]
              })
          });
};
