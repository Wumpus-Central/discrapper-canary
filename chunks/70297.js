(n.d(t, {
    Z: () => C,
    q: () => _
}),
    n(953529));
var l = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    a = n(704215),
    o = n(481060),
    s = n(266454),
    c = n(605236),
    d = n(434404),
    u = n(707076),
    m = n(398758),
    h = n(981631),
    p = n(921944),
    f = n(388032),
    g = n(402895),
    x = n(697611);
function _(e) {
    return (0, m.te)(e) ? 250 : 152;
}
function C(e) {
    let { guild: t } = e,
        n = (0, m.te)(t.id),
        r = (0, s.Nj)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        _ = n && !r ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
    (0, c.kk)(_);
    let C = n
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
                                  (d.Z.open(t.id, h.pNK.ONBOARDING), (0, s.Q3)(_, { dismissAction: p.L.PRIMARY }));
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
        className: i()(g.container, { [g.adminUpsell]: n }),
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
