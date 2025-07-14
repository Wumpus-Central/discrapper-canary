n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var o = n(481060),
    l = n(493773),
    i = n(367907),
    a = n(524444),
    s = n(297047),
    c = n(592125),
    u = n(944486),
    d = n(626135),
    p = n(981631),
    m = n(388032),
    g = n(400822);
let f = function (e) {
    let { guild: t, message: n, onClose: f } = e,
        b = c.Z.getChannel(u.Z.getChannelId(t.id));
    return ((0, l.ZP)(() => {
        d.default.track(p.rMx.OPEN_POPOUT, {
            type: 'New Member Badge Popout',
            guild_id: t.id,
            channel_id: null == b ? void 0 : b.id
        });
    }),
    null == b)
        ? null
        : (0, r.jsx)(a.W_, {
              className: g.messagePopoutContent,
              children: (0, r.jsxs)('div', {
                  className: g.popoutContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: g.mainContent,
                          children: [
                              (0, r.jsx)('div', {
                                  className: g.iconContainer,
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
                                          className: g.header,
                                          children: m.intl.string(m.t['v/OYd3'])
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/normal',
                                          children: m.intl.string(m.t.Z85MlJ)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)('div', {
                          'data-button-hoisted-classname-wrapper': !0,
                          className: g.ctaButton,
                          children: (0, r.jsx)(o.zxk, {
                              variant: 'primary',
                              size: 'sm',
                              text: m.intl.format(m.t['+xsVS0'], { username: n.author.username }),
                              fullWidth: !0,
                              onClick: () => {
                                  (i.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), f(), (0, s.q)(n.author, b.id));
                              }
                          })
                      })
                  ]
              })
          });
};
