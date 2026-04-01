"use strict";
n.d(t, { H: () => p });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    r = n(793574),
    a = n(688810),
    o = n(576705),
    d = n(555337),
    c = n(988921),
    u = n(365044),
    m = n(423418),
    g = n(989860),
    x = n(652215),
    h = n(985018),
    _ = n(601544);
function p() {
    let { analyticsLocations: e } = (0, a.Ay)(r.A.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.bG)([d.A], () => d.A.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: p } = (0, l.cf)([o.A], () => ({
            isGuildAdmin: null != t && o.A.can(x.xBc.ADMINISTRATOR, t),
            canManageGuild: null != t && o.A.can(x.xBc.MANAGE_GUILD, t),
        }));
    return null == t
        ? null
        : (0, i.jsx)(a.f5, {
              value: e,
              children: (0, i.jsxs)("main", {
                  className: _.k,
                  children: [
                      (0, i.jsx)(s.DZT, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: h.intl.string(h.t.UKgg5N),
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
