t.d(n, {
    Z: () => _,
    q: () => x
});
var l = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    a = t(704215),
    o = t(481060),
    s = t(605236),
    c = t(434404),
    d = t(707076),
    u = t(398758),
    m = t(981631),
    h = t(921944),
    p = t(388032),
    f = t(402895),
    g = t(697611);
function x(e) {
    return (0, u.te)(e) ? 250 : 152;
}
function _(e) {
    let { guild: n } = e,
        t = (0, u.te)(n.id),
        r = (0, s.wE)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        x = t && !r ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
    (0, s.kk)(x);
    let _ = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.X6q, {
                              className: f.heading,
                              color: 'always-white',
                              variant: 'heading-lg/semibold',
                              children: p.intl.string(p.t.AalzkJ)
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: p.intl.string(p.t.CXh95e)
                          }),
                          (0, l.jsx)(o.zxk, {
                              className: f.checkItOut,
                              onClick: () => {
                                  c.Z.open(n.id, m.pNK.ONBOARDING), (0, s.EW)(x, { dismissAction: h.L.PRIMARY });
                              },
                              color: o.zxk.Colors.BRAND_INVERTED,
                              children: (0, l.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'none',
                                  children: p.intl.string(p.t['+OtO4e'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(d.j, { isTooltip: !0 })
              ]
          })
        : (0, l.jsxs)('div', {
              className: f.nuxContent,
              children: [
                  (0, l.jsx)('img', {
                      width: 180,
                      className: f.image,
                      src: g,
                      alt: '',
                      'aria-hidden': !0
                  }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.X6q, {
                              className: f.heading,
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              children: p.intl.string(p.t.utqWEB)
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: p.intl.string(p.t['+9etcH'])
                          }),
                          (0, l.jsx)(o.Text, {
                              className: f.tip,
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: p.intl.format(p.t.Z0axjo, {})
                          })
                      ]
                  })
              ]
          });
    return (0, l.jsxs)('div', {
        className: i()(f.container, { [f.adminUpsell]: t }),
        children: [
            (0, l.jsx)(o.P3F, {
                className: f.closeButton,
                onClick: () => {
                    (0, s.EW)(x, { dismissAction: h.L.DISMISS });
                },
                children: (0, l.jsx)(o.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            _
        ]
    });
}
