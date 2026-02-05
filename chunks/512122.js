"use strict";
n.d(t, { p: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(56595),
    o = n(576705),
    d = n(997509),
    c = n(652215),
    u = n(985018),
    m = n(641131),
    g = n(841541);
async function x(e, t) {
    return await d.A.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function h(e) {
    let { guild: t } = e,
        n = (0, l.bG)([o.A], () => null != t && o.A.can(c.xBc.MANAGE_GUILD, t), [t]),
        d = t.features.has(c.GuildFeatures.REPORT_TO_MOD_PILOT),
        [h, _] = s.useState((0, a.A)(t) && d),
        A = s.useCallback(
            async (e) => {
                _(e), await x(t, e);
            },
            [t],
        );
    return d && n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: g.hu,
                      children: (0, i.jsx)(r.dOG, {
                          label: u.intl.string(m.default["/xIz7G"]),
                          description: u.intl.string(m.default.uUMXyu),
                          badge: "beta",
                          checked: h,
                          onChange: A,
                          disabled: !n,
                      }),
                  }),
                  (0, i.jsx)(r.cGx, { className: g.yF }),
              ],
          })
        : null;
}
