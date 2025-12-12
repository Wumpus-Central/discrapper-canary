n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(399606),
    s = n(481060),
    a = n(450377),
    o = n(496675),
    c = n(140031),
    u = n(981631),
    d = n(388032),
    g = n(49465);
function m(e) {
    let { guild: t } = e,
        n = i.useId(),
        m = (0, l.e7)([o.Z], () => null != t && o.Z.can(u.Plq.MANAGE_GUILD, t), [t]),
        p = t.features.has(u.GuildFeatures.COMMUNITY),
        [f, h] = i.useState(t.features.has(u.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        x = i.useCallback(
            async (e) => {
                h(e), await (0, a.fp)(t, e);
            },
            [t],
        );
    return p
        ? null
        : (0, r.jsxs)("div", {
              className: g.bannerContainer,
              children: [
                  (0, r.jsx)(c.Z, {
                      width: 64,
                      height: 64,
                  }),
                  (0, r.jsxs)("div", {
                      className: g.headingContainer,
                      children: [
                          (0, r.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              color: "always-white",
                              children: d.intl.string(d.t.jDarmy),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              color: "always-white",
                              children: d.intl.string(d.t["/ee7yK"]),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: g.buttonContainer,
                      children: (0, r.jsx)(s.rsf, {
                          id: n,
                          checked: f,
                          onChange: x,
                          disabled: !m,
                      }),
                  }),
              ],
          });
}
