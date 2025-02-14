t.d(n, {
    Z: () => g,
    q: () => f
});
var l = t(200651);
t(192379);
var i = t(120356),
    a = t.n(i),
    r = t(704215),
    o = t(481060),
    s = t(605236),
    d = t(434404),
    c = t(707076),
    u = t(398758),
    h = t(981631),
    m = t(921944),
    x = t(388032),
    _ = t(721525),
    p = t(697611);
function f(e) {
    return (0, u.te)(e) ? 250 : 152;
}
function g(e) {
    let { guild: n } = e,
        t = (0, u.te)(n.id),
        i = (0, s.wE)(r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        f = t && !i ? r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : r.z.CHANNEL_BROWSER_NUX;
    (0, s.kk)(f);
    let g = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.X6q, {
                              className: _.heading,
                              color: 'always-white',
                              variant: 'heading-lg/semibold',
                              children: x.intl.string(x.t.AalzkJ)
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: x.intl.string(x.t.CXh95e)
                          }),
                          (0, l.jsx)(o.zxk, {
                              className: _.checkItOut,
                              onClick: () => {
                                  d.Z.open(n.id, h.pNK.ONBOARDING), (0, s.EW)(f, { dismissAction: m.L.PRIMARY });
                              },
                              color: o.zxk.Colors.BRAND_INVERTED,
                              children: (0, l.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'none',
                                  children: x.intl.string(x.t['+OtO4e'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(c.j, { isTooltip: !0 })
              ]
          })
        : (0, l.jsxs)('div', {
              className: _.nuxContent,
              children: [
                  (0, l.jsx)('img', {
                      width: 180,
                      className: _.image,
                      src: p,
                      alt: '',
                      'aria-hidden': !0
                  }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.X6q, {
                              className: _.heading,
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              children: x.intl.string(x.t.utqWEB)
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: x.intl.string(x.t['+9etcH'])
                          }),
                          (0, l.jsx)(o.Text, {
                              className: _.tip,
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: x.intl.format(x.t.Z0axjo, {})
                          })
                      ]
                  })
              ]
          });
    return (0, l.jsxs)('div', {
        className: a()(_.container, { [_.adminUpsell]: t }),
        children: [
            (0, l.jsx)(o.P3F, {
                className: _.closeButton,
                onClick: () => {
                    (0, s.EW)(f, { dismissAction: m.L.DISMISS });
                },
                children: (0, l.jsx)(o.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            g
        ]
    });
}
