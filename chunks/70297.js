t.d(n, {
    Z: function () {
        return g;
    },
    q: function () {
        return C;
    }
});
var l = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(704215),
    o = t(481060),
    s = t(605236),
    c = t(434404),
    d = t(707076),
    u = t(398758),
    h = t(981631),
    m = t(921944),
    f = t(388032),
    p = t(549522),
    x = t(697611);
function C(e) {
    return (0, u.te)(e) ? 250 : 152;
}
function g(e) {
    let { guild: n } = e,
        t = (0, u.te)(n.id),
        a = (0, s.wE)(r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        C = t && !a ? r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : r.z.CHANNEL_BROWSER_NUX;
    (0, s.kk)(C);
    let g = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.Heading, {
                              className: p.heading,
                              color: 'always-white',
                              variant: 'heading-lg/semibold',
                              children: f.intl.string(f.t.AalzkJ)
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: f.intl.string(f.t.CXh95e)
                          }),
                          (0, l.jsx)(o.Button, {
                              className: p.checkItOut,
                              onClick: () => {
                                  c.Z.open(n.id, h.pNK.ONBOARDING), (0, s.EW)(C, { dismissAction: m.L.PRIMARY });
                              },
                              color: o.Button.Colors.BRAND_INVERTED,
                              children: (0, l.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'none',
                                  children: f.intl.string(f.t['+OtO4e'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(d.j, { isTooltip: !0 })
              ]
          })
        : (0, l.jsxs)('div', {
              className: p.nuxContent,
              children: [
                  (0, l.jsx)('img', {
                      width: 180,
                      className: p.image,
                      src: x,
                      alt: '',
                      'aria-hidden': !0
                  }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(o.Heading, {
                              className: p.heading,
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
                              className: p.tip,
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: f.intl.format(f.t.Z0axjo, {})
                          })
                      ]
                  })
              ]
          });
    return (0, l.jsxs)('div', {
        className: i()(p.container, { [p.adminUpsell]: t }),
        children: [
            (0, l.jsx)(o.Clickable, {
                className: p.closeButton,
                onClick: () => {
                    (0, s.EW)(C, { dismissAction: m.L.DISMISS });
                },
                children: (0, l.jsx)(o.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            g
        ]
    });
}
