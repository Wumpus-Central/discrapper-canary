n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(279542),
    o = n(496675),
    c = n(140031),
    d = n(981631),
    u = n(388032),
    m = n(72660);
function h(e) {
    let { guild: t } = e,
        n = r.useId(),
        h = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        g = t.hasFeature(d.oNc.COMMUNITY),
        [x, p] = r.useState(t.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        f = r.useCallback(
            async (e) => {
                p(e), await (0, a.fp)(t, e);
            },
            [t]
        );
    return g
        ? null
        : (0, i.jsxs)('div', {
              className: m.bannerContainer,
              children: [
                  (0, i.jsx)(c.Z, {
                      width: 64,
                      height: 64
                  }),
                  (0, i.jsxs)('div', {
                      className: m.headingContainer,
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'always-white',
                              children: u.intl.string(u.t.jDarm5)
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'always-white',
                              children: u.intl.string(u.t['/ee7yM'])
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: m.buttonContainer,
                      children: (0, i.jsx)(s.Switch, {
                          id: n,
                          checked: x,
                          onChange: f,
                          disabled: !h
                      })
                  })
              ]
          });
}
