t.d(n, {
    Z: () => j,
    q: () => C
});
var l = t(255367);
t(73800);
var r = t(120356),
    i = t.n(r),
    a = t(704215),
    o = t(755721),
    s = t(481060),
    c = t(266454),
    d = t(605236),
    u = t(434404),
    m = t(707076),
    h = t(398758),
    p = t(981631),
    f = t(921944),
    g = t(388032),
    x = t(402895),
    _ = t(697611);
function C(e) {
    return (0, h.te)(e) ? 250 : 152;
}
function j(e) {
    let { guild: n } = e,
        t = (0, h.te)(n.id),
        r = (0, c.Nj)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        C = t && !r ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
    (0, d.kk)(C);
    let j = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(s.X6q, {
                              className: x.heading,
                              color: 'always-white',
                              variant: 'heading-lg/semibold',
                              children: g.intl.string(g.t.AalzkJ)
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: g.intl.string(g.t.CXh95e)
                          }),
                          (0, l.jsx)(o.zx, {
                              className: x.checkItOut,
                              onClick: () => {
                                  (u.Z.open(n.id, p.pNK.ONBOARDING), (0, c.Q3)(C, { dismissAction: f.L.PRIMARY }));
                              },
                              color: o.zx.Colors.BRAND_INVERTED,
                              children: (0, l.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  color: 'none',
                                  children: g.intl.string(g.t['+OtO4e'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(m.j, { isTooltip: !0 })
              ]
          })
        : (0, l.jsxs)('div', {
              className: x.nuxContent,
              children: [
                  (0, l.jsx)('img', {
                      width: 180,
                      className: x.image,
                      src: _,
                      alt: '',
                      'aria-hidden': !0
                  }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(s.X6q, {
                              className: x.heading,
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              children: g.intl.string(g.t.utqWEB)
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: g.intl.string(g.t['+9etcH'])
                          }),
                          (0, l.jsx)(s.Text, {
                              className: x.tip,
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: g.intl.format(g.t.Z0axjo, {})
                          })
                      ]
                  })
              ]
          });
    return (0, l.jsxs)('div', {
        className: i()(x.container, { [x.adminUpsell]: t }),
        children: [
            (0, l.jsx)(s.P3F, {
                className: x.closeButton,
                onClick: () => {
                    (0, c.Q3)(C, { dismissAction: f.L.DISMISS });
                },
                children: (0, l.jsx)(s.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            j
        ]
    });
}
