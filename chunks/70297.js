(t.d(n, {
    Z: () => C,
    q: () => _
}),
    t(953529));
var l = t(255367);
t(73800);
var r = t(120356),
    i = t.n(r),
    a = t(704215),
    o = t(481060),
    s = t(266454),
    c = t(605236),
    d = t(434404),
    u = t(707076),
    m = t(398758),
    h = t(981631),
    p = t(921944),
    f = t(388032),
    g = t(402895),
    x = t(697611);
function _(e) {
    return (0, m.te)(e) ? 250 : 152;
}
function C(e) {
    let { guild: n } = e,
        t = (0, m.te)(n.id),
        r = (0, s.Nj)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        _ = t && !r ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
    (0, c.kk)(_);
    let C = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.X6q, {
                              className: g.heading,
                              color: 'always-white',
                              variant: 'heading-lg/semibold',
                              children: f.intl.string(f.t.AalzkJ)
                          }),
                          (0, l.jsx)(o.Text, {
                              className: g.description,
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: f.intl.string(f.t.CXh95e)
                          }),
                          (0, l.jsx)(o.zxk, {
                              variant: 'overlay-primary',
                              onClick: () => {
                                  (d.Z.open(n.id, h.pNK.ONBOARDING), (0, s.Q3)(_, { dismissAction: p.L.PRIMARY }));
                              },
                              text: f.intl.string(f.t['+OtO4e'])
                          })
                      ]
                  }),
                  (0, l.jsx)(u.j, { isTooltip: !0 })
              ]
          })
        : (0, l.jsxs)('div', {
              className: g.nuxContent,
              children: [
                  (0, l.jsx)('img', {
                      width: 180,
                      className: g.image,
                      src: x,
                      alt: '',
                      'aria-hidden': !0
                  }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.X6q, {
                              className: g.heading,
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              children: f.intl.string(f.t.utqWEB)
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: f.intl.string(f.t['+9etcH'])
                          }),
                          (0, l.jsx)(o.Text, {
                              className: g.tip,
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: f.intl.format(f.t.Z0axjo, {})
                          })
                      ]
                  })
              ]
          });
    return (0, l.jsxs)('div', {
        className: i()(g.container, { [g.adminUpsell]: t }),
        children: [
            (0, l.jsx)(o.P3F, {
                className: g.closeButton,
                onClick: () => {
                    (0, s.Q3)(_, { dismissAction: p.L.DISMISS });
                },
                children: (0, l.jsx)(o.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            C
        ]
    });
}
