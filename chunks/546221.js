n.d(t, { Z: () => y });
var r = n(54381),
    i = n(481060),
    l = n(825055),
    a = n(937615),
    s = n(730647),
    o = n(584825),
    c = n(723047),
    d = n(997519),
    u = n(146710),
    g = n(146610),
    f = n(67152),
    m = n(791382),
    b = n(277369),
    p = n(215124),
    h = n(981631),
    x = n(388032),
    j = n(245402);
function v(e) {
    let { payoutsByPeriod: t, team: n } = e,
        l = (0, c.mY)()
            ? null
            : x.intl.format(x.t.d1sCiW, { url: null != n ? h.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, r.jsxs)(i.Text, {
              variant: "text-sm/medium",
              children: [x.intl.string(x.t.RrtXuy), " ", l],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(i.Text, {
                      variant: "text-sm/medium",
                      children: [x.intl.string(x.t["9Ub4KY"]), " ", l],
                  }),
                  (0, r.jsx)(i.LZC, { size: 16 }),
                  (0, r.jsx)(f.ZP, { payoutsByPeriod: t }),
              ],
          });
}
function O(e) {
    let { guildId: t, totalPayoutsForPeriod: n } = e,
        i = (0, o.qi)(t, { includeSoftDeleted: !0 });
    return null == n && 0 === i.length
        ? null
        : (0, r.jsx)(g.Z, {
              totalPayoutsForPeriod: n,
              guildId: t,
              className: j.currentMonthEarningsTable,
          });
}
let C = (e) => {
    var t, n;
    let { guildId: s, application: o } = e,
        { loading: g, team: f, currentPeriod: C, allPeriods: y, metrics: N } = (0, d.Z)(s, o),
        E = (0, u.u)(s),
        I = (0, c.mY)();
    return g
        ? (0, r.jsx)(i.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  E &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.Z, {
                                  children: x.intl.format(x.t["2raBCT"], {
                                      insightsURL: h.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(s),
                                  }),
                              }),
                              (0, r.jsx)(i.LZC, { size: 32 }),
                          ],
                      }),
                  (0, r.jsxs)(i.C3N, {
                      label: x.intl.string(x.t.ofmOzb),
                      className: j.formSection,
                      children: [
                          (0, r.jsx)(i.LZC, { size: 8 }),
                          (0, r.jsxs)("div", {
                              className: j.metricsContainer,
                              children: [
                                  (0, r.jsx)(m.Z, {
                                      label: x.intl.string(x.t.iY1jW3),
                                      value: (0, a.T4)(null != (t = N.revenue) ? t : 0, h.pKx.USD),
                                      additionalContent: (0, r.jsx)(m.H, {
                                          value: N.revenuePctChange,
                                          isPercent: !0,
                                      }),
                                  }),
                                  (0, r.jsx)(m.Z, {
                                      label: x.intl.string(x.t["cXyw2/"]),
                                      value: (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              null != (n = N.subscribers) ? n : "-",
                                              " ",
                                              (0, r.jsx)(i.tBG, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: j.totalMembersIcon,
                                                  "aria-hidden": !0,
                                              }),
                                          ],
                                      }),
                                      additionalContent: (0, r.jsx)(m.H, { value: N.subscriberChange }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(O, {
                              guildId: s,
                              totalPayoutsForPeriod: C,
                          }),
                      ],
                  }),
                  (0, r.jsx)(i.C3N, {
                      label: x.intl.string(x.t["+5Rmhl"]),
                      className: j.formSection,
                      children: (0, r.jsx)(v, {
                          payoutsByPeriod: y,
                          team: f,
                      }),
                  }),
                  (0, r.jsx)(i.C3N, {
                      label: x.intl.string(x.t.O8cDAJ),
                      className: j.formSection,
                      disabled: I,
                      children: (0, r.jsx)(b.Z, {
                          guildId: s,
                          application: o,
                      }),
                  }),
                  (0, r.jsx)(i.C3N, {
                      label: x.intl.string(x.t["0n7R2X"]),
                      className: j.formSection,
                      children: (0, r.jsx)(p.Z, {
                          guildId: s,
                          allPeriods: y,
                      }),
                  }),
              ],
          });
};
function y(e) {
    return (0, r.jsx)(s.l, {
        guildId: e.guildId,
        children: (0, r.jsx)(
            C,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
