n.d(t, { H: () => p });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(311907),
    r = n(793574),
    a = n(688810),
    o = n(576705),
    d = n(555337),
    c = n(988921),
    u = n(365044),
    m = n(423418),
    g = n(989860),
    h = n(652215),
    x = n(985018),
    _ = n(908504);
function p() {
    let { analyticsLocations: e } = (0, a.Ay)(r.A.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, s.bG)([d.A], () => d.A.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: p } = (0, s.cf)([o.A], () => ({
            isGuildAdmin: null != t && o.A.can(h.xBc.ADMINISTRATOR, t),
            canManageGuild: null != t && o.A.can(h.xBc.MANAGE_GUILD, t),
        }));
    return null == t
        ? null
        : (0, i.jsx)(a.f5, {
              value: e,
              children: (0, i.jsxs)("main", {
                  className: _.k,
                  children: [
                      (0, i.jsx)(l.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: x.intl.string(x.t.UKgg5N),
                      }),
                      (0, i.jsx)(g.I, { canManageGuild: p, premiumProgressBarEnabled: t.premiumProgressBarEnabled }),
                      (0, i.jsx)("div", { className: _.y }),
                      (0, i.jsx)(c.l, { guild: t, canManageGuild: p }),
                      (0, i.jsx)("div", { className: _.y }),
                      (0, i.jsx)(u.I, { guild: t, canManageGuild: p }),
                      n &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)("div", { className: _.y }), (0, i.jsx)(m.u, { guild: t })],
                          }),
                  ],
              }),
          });
}
