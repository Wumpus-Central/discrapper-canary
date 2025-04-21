n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(279542),
    o = n(496675),
    c = n(140031),
    d = n(981631),
    u = n(388032),
    m = n(177024);
function g(e) {
    let { guild: t } = e,
        n = i.useId(),
        g = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        p = t.hasFeature(d.oNc.COMMUNITY),
        [h, f] = i.useState(t.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        x = i.useCallback(
            async (e) => {
                f(e), await (0, a.fp)(t, e);
            },
            [t]
        );
    return p
        ? null
        : (0, r.jsxs)('div', {
              className: m.bannerContainer,
              children: [
                  (0, r.jsx)(c.Z, {
                      width: 64,
                      height: 64
                  }),
                  (0, r.jsxs)('div', {
                      className: m.headingContainer,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: 'heading-lg/semibold',
                              color: 'always-white',
                              children: u.intl.string(u.t.jDarm5)
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'always-white',
                              children: u.intl.string(u.t['/ee7yM'])
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: m.buttonContainer,
                      children: (0, r.jsx)(s.rsf, {
                          id: n,
                          checked: h,
                          onChange: x,
                          disabled: !g
                      })
                  })
              ]
          });
}
