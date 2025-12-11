n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(481060),
    s = n(450377),
    o = n(496675),
    c = n(140031),
    d = n(981631),
    u = n(388032),
    g = n(822809);
function m(e) {
    let { guild: t } = e,
        n = i.useId(),
        m = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        f = t.features.has(d.GuildFeatures.COMMUNITY),
        [p, b] = i.useState(t.features.has(d.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        h = i.useCallback(
            async (e) => {
                b(e), await (0, s.fp)(t, e);
            },
            [t],
        );
    return f
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
                          (0, r.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              color: "always-white",
                              children: u.intl.string(u.t.jDarmy),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "always-white",
                              children: u.intl.string(u.t["/ee7yK"]),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: g.buttonContainer,
                      children: (0, r.jsx)(a.rsf, {
                          id: n,
                          checked: p,
                          onChange: h,
                          disabled: !m,
                      }),
                  }),
              ],
          });
}
