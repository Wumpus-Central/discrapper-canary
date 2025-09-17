n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(399606),
    a = n(755721),
    s = n(481060),
    o = n(279542),
    c = n(496675),
    d = n(140031),
    u = n(981631),
    m = n(388032),
    g = n(49465);
function p(e) {
    let { guild: t } = e,
        n = i.useId(),
        p = (0, l.e7)([c.Z], () => null != t && c.Z.can(u.Plq.MANAGE_GUILD, t), [t]),
        h = t.features.has(u.oNc.COMMUNITY),
        [f, b] = i.useState(t.features.has(u.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        x = i.useCallback(
            async (e) => {
                b(e), await (0, o.fp)(t, e);
            },
            [t],
        );
    return h
        ? null
        : (0, r.jsxs)("div", {
              className: g.bannerContainer,
              children: [
                  (0, r.jsx)(d.Z, {
                      width: 64,
                      height: 64,
                  }),
                  (0, r.jsxs)("div", {
                      className: g.headingContainer,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: "heading-lg/semibold",
                              color: "always-white",
                              children: m.intl.string(m.t.jDarm5),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              color: "always-white",
                              children: m.intl.string(m.t["/ee7yM"]),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: g.buttonContainer,
                      children: (0, r.jsx)(a.T2, {
                          id: n,
                          checked: f,
                          onChange: x,
                          disabled: !p,
                      }),
                  }),
              ],
          });
}
