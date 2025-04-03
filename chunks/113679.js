n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(399606),
    a = n(481060),
    l = n(279542),
    o = n(496675),
    c = n(140031),
    d = n(981631),
    u = n(388032),
    m = n(177024);
function g(e) {
    let { guild: t } = e,
        n = i.useId(),
        g = (0, s.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        p = t.hasFeature(d.oNc.COMMUNITY),
        [h, f] = i.useState(t.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        b = i.useCallback(
            async (e) => {
                f(e), await (0, l.fp)(t, e);
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
                          (0, r.jsx)(a.X6q, {
                              variant: 'heading-lg/semibold',
                              color: 'always-white',
                              children: u.NW.string(u.t.jDarm5)
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'always-white',
                              children: u.NW.string(u.t['/ee7yM'])
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: m.buttonContainer,
                      children: (0, r.jsx)(a.rsf, {
                          id: n,
                          checked: h,
                          onChange: b,
                          disabled: !g
                      })
                  })
              ]
          });
}
