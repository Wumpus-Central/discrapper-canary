n.d(t, { A: () => S });
var i = n(627968),
    l = n(834730),
    s = n(696986),
    r = n(289873),
    a = n(270003),
    o = n(950305),
    d = n(501592),
    c = n(580630),
    u = n(300233),
    m = n(599941),
    g = n(11351),
    h = n(456058),
    x = n(520057),
    _ = n(249972),
    p = n(317547),
    A = n(196827),
    E = n(595303),
    f = n(781289),
    j = n(652215),
    N = n(985018),
    I = n(813716);
function C(e) {
    let { payoutsByPeriod: t, team: n } = e,
        r = (0, g.gN)()
            ? null
            : N.intl.format(N.t.d1sCiW, { url: null != n ? j.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, i.jsxs)(l.E, { variant: "text-sm/medium", children: [N.intl.string(N.t.RrtXuy), " ", r] })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(l.E, { variant: "text-sm/medium", children: [N.intl.string(N.t["9Ub4KY"]), " ", r] }),
                  (0, i.jsx)(s.h, { size: 16 }),
                  (0, i.jsx)(p.Ay, { payoutsByPeriod: t }),
              ],
          });
}
function b(e) {
    let { guildId: t, totalPayoutsForPeriod: n } = e,
        l = (0, m.uP)(t, { includeSoftDeleted: !0 });
    return null == n && 0 === l.length
        ? null
        : (0, i.jsx)(_.A, { totalPayoutsForPeriod: n, guildId: t, className: I.fV });
}
let v = (e) => {
    let { guildId: t, application: n } = e,
        { loading: l, team: u, currentPeriod: m, allPeriods: _, metrics: p } = (0, h.A)(t, n),
        v = (0, x.w)(t),
        S = (0, g.gN)();
    return l
        ? (0, i.jsx)(r.y, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  v &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.A, {
                                  children: N.intl.format(N.t["2raBCT"], {
                                      insightsURL: j.X7G.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(t),
                                  }),
                              }),
                              (0, i.jsx)(s.h, { size: 32 }),
                          ],
                      }),
                  (0, i.jsxs)(a.n, {
                      label: N.intl.string(N.t.ofmOzb),
                      className: I.gy,
                      children: [
                          (0, i.jsx)(s.h, { size: 8 }),
                          (0, i.jsxs)("div", {
                              className: I.Zs,
                              children: [
                                  (0, i.jsx)(A.A, {
                                      label: N.intl.string(N.t.iY1jW3),
                                      value: (0, c.$g)(p.revenue ?? 0, j.Yri.USD),
                                      additionalContent: (0, i.jsx)(A.u, { value: p.revenuePctChange, isPercent: !0 }),
                                  }),
                                  (0, i.jsx)(A.A, {
                                      label: N.intl.string(N.t["cXyw2/"]),
                                      value: (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              p.subscribers ?? "-",
                                              " ",
                                              (0, i.jsx)(o.n, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: I.D9,
                                                  "aria-hidden": !0,
                                              }),
                                          ],
                                      }),
                                      additionalContent: (0, i.jsx)(A.u, { value: p.subscriberChange }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(b, { guildId: t, totalPayoutsForPeriod: m }),
                      ],
                  }),
                  (0, i.jsx)(a.n, {
                      label: N.intl.string(N.t["+5Rmhl"]),
                      className: I.gy,
                      children: (0, i.jsx)(C, { payoutsByPeriod: _, team: u }),
                  }),
                  (0, i.jsx)(a.n, {
                      label: N.intl.string(N.t.O8cDAJ),
                      className: I.gy,
                      disabled: S,
                      children: (0, i.jsx)(E.A, { guildId: t, application: n }),
                  }),
                  (0, i.jsx)(a.n, {
                      label: N.intl.string(N.t["0n7R2X"]),
                      className: I.gy,
                      children: (0, i.jsx)(f.A, { guildId: t, allPeriods: _ }),
                  }),
              ],
          });
};
function S(e) {
    return (0, i.jsx)(u.H, { guildId: e.guildId, children: (0, i.jsx)(v, { ...e }) });
}
