"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(397927),
    l = n(501592),
    r = n(580630),
    a = n(300233),
    o = n(599941),
    d = n(11351),
    c = n(456058),
    u = n(520057),
    m = n(27591),
    g = n(317547),
    x = n(196827),
    h = n(595303),
    _ = n(781289),
    A = n(652215),
    p = n(985018),
    f = n(367571);
function j(e) {
    let { payoutsByPeriod: t, team: n } = e,
        l = (0, d.gN)()
            ? null
            : p.intl.format(p.t.d1sCiW, { url: null != n ? A.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, i.jsxs)(s.Text, { variant: "text-sm/medium", children: [p.intl.string(p.t.RrtXuy), " ", l] })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(s.Text, { variant: "text-sm/medium", children: [p.intl.string(p.t["9Ub4KY"]), " ", l] }),
                  (0, i.jsx)(s.hKd, { size: 16 }),
                  (0, i.jsx)(g.Ay, { payoutsByPeriod: t }),
              ],
          });
}
function N(e) {
    let { guildId: t, totalPayoutsForPeriod: n } = e,
        s = (0, o.uP)(t, { includeSoftDeleted: !0 });
    return null == n && 0 === s.length
        ? null
        : (0, i.jsx)(m.A, { totalPayoutsForPeriod: n, guildId: t, className: f.fV });
}
let E = (e) => {
    let { guildId: t, application: n } = e,
        { loading: a, team: o, currentPeriod: m, allPeriods: g, metrics: E } = (0, c.A)(t, n),
        b = (0, u.w)(t),
        T = (0, d.gN)();
    return a
        ? (0, i.jsx)(s.y$y, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  b &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(l.A, {
                                  children: p.intl.format(p.t["2raBCT"], {
                                      insightsURL: A.X7G.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(t),
                                  }),
                              }),
                              (0, i.jsx)(s.hKd, { size: 32 }),
                          ],
                      }),
                  (0, i.jsxs)(s.nVY, {
                      label: p.intl.string(p.t.ofmOzb),
                      className: f.gy,
                      children: [
                          (0, i.jsx)(s.hKd, { size: 8 }),
                          (0, i.jsxs)("div", {
                              className: f.Zs,
                              children: [
                                  (0, i.jsx)(x.A, {
                                      label: p.intl.string(p.t.iY1jW3),
                                      value: (0, r.$g)(E.revenue ?? 0, A.Yri.USD),
                                      additionalContent: (0, i.jsx)(x.u, { value: E.revenuePctChange, isPercent: !0 }),
                                  }),
                                  (0, i.jsx)(x.A, {
                                      label: p.intl.string(p.t["cXyw2/"]),
                                      value: (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              E.subscribers ?? "-",
                                              " ",
                                              (0, i.jsx)(s.nys, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: f.D9,
                                                  "aria-hidden": !0,
                                              }),
                                          ],
                                      }),
                                      additionalContent: (0, i.jsx)(x.u, { value: E.subscriberChange }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(N, { guildId: t, totalPayoutsForPeriod: m }),
                      ],
                  }),
                  (0, i.jsx)(s.nVY, {
                      label: p.intl.string(p.t["+5Rmhl"]),
                      className: f.gy,
                      children: (0, i.jsx)(j, { payoutsByPeriod: g, team: o }),
                  }),
                  (0, i.jsx)(s.nVY, {
                      label: p.intl.string(p.t.O8cDAJ),
                      className: f.gy,
                      disabled: T,
                      children: (0, i.jsx)(h.A, { guildId: t, application: n }),
                  }),
                  (0, i.jsx)(s.nVY, {
                      label: p.intl.string(p.t["0n7R2X"]),
                      className: f.gy,
                      children: (0, i.jsx)(_.A, { guildId: t, allPeriods: g }),
                  }),
              ],
          });
};
function b(e) {
    return (0, i.jsx)(a.H, { guildId: e.guildId, children: (0, i.jsx)(E, { ...e }) });
}
