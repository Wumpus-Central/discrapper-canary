t.d(n, {
    Z: () => _,
    q: () => x
});
var r = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    i = t(704215),
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
        l = (0, s.wE)(i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        x = t && !l ? i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.z.CHANNEL_BROWSER_NUX;
    (0, s.kk)(x);
    let _ = t
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: f.heading,
                              color: 'always-white',
                              variant: 'heading-lg/semibold',
                              children: p.NW.string(p.t.AalzkJ)
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: p.NW.string(p.t.CXh95e)
                          }),
                          (0, r.jsx)(o.zxk, {
                              className: f.checkItOut,
                              onClick: () => {
                                  c.Z.open(n.id, m.pNK.ONBOARDING), (0, s.EW)(x, { dismissAction: h.L.PRIMARY });
                              },
                              color: o.zxk.Colors.BRAND_INVERTED,
                              children: (0, r.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'none',
                                  children: p.NW.string(p.t['+OtO4e'])
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(d.j, { isTooltip: !0 })
              ]
          })
        : (0, r.jsxs)('div', {
              className: f.nuxContent,
              children: [
                  (0, r.jsx)('img', {
                      width: 180,
                      className: f.image,
                      src: g,
                      alt: '',
                      'aria-hidden': !0
                  }),
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: f.heading,
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              children: p.NW.string(p.t.utqWEB)
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: p.NW.string(p.t['+9etcH'])
                          }),
                          (0, r.jsx)(o.Text, {
                              className: f.tip,
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: p.NW.format(p.t.Z0axjo, {})
                          })
                      ]
                  })
              ]
          });
    return (0, r.jsxs)('div', {
        className: a()(f.container, { [f.adminUpsell]: t }),
        children: [
            (0, r.jsx)(o.P3F, {
                className: f.closeButton,
                onClick: () => {
                    (0, s.EW)(x, { dismissAction: h.L.DISMISS });
                },
                children: (0, r.jsx)(o.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            _
        ]
    });
}
