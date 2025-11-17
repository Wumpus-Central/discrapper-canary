n.d(t, { Z: () => C });
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
    m = n(67152),
    p = n(791382),
    f = n(277369),
    h = n(215124),
    b = n(981631),
    x = n(388032),
    j = n(150043);
function _(e) {
    let { payoutsByPeriod: t, team: n } = e,
        l = (0, c.mY)()
            ? null
            : x.intl.format(x.t.d1sCiW, { url: null != n ? b.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
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
                  (0, r.jsx)(m.ZP, { payoutsByPeriod: t }),
              ],
          });
}
function v(e) {
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
let O = (e) => {
    var t, n;
    let { guildId: s, application: o } = e,
        { loading: g, team: m, currentPeriod: O, allPeriods: C, metrics: y } = (0, d.Z)(s, o),
        N = (0, u.u)(s),
        E = (0, c.mY)();
    return g
        ? (0, r.jsx)(i.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  N &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.Z, {
                                  children: x.intl.format(x.t["2raBCT"], {
                                      insightsURL: b.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(s),
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
                                  (0, r.jsx)(p.Z, {
                                      label: x.intl.string(x.t.iY1jW3),
                                      value: (0, a.T4)(null != (t = y.revenue) ? t : 0, b.pKx.USD),
                                      additionalContent: (0, r.jsx)(p.H, {
                                          value: y.revenuePctChange,
                                          isPercent: !0,
                                      }),
                                  }),
                                  (0, r.jsx)(p.Z, {
                                      label: x.intl.string(x.t["cXyw2/"]),
                                      value: (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              null != (n = y.subscribers) ? n : "-",
                                              " ",
                                              (0, r.jsx)(i.tBG, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: j.totalMembersIcon,
                                                  "aria-hidden": !0,
                                              }),
                                          ],
                                      }),
                                      additionalContent: (0, r.jsx)(p.H, { value: y.subscriberChange }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(v, {
                              guildId: s,
                              totalPayoutsForPeriod: O,
                          }),
                      ],
                  }),
                  (0, r.jsx)(i.C3N, {
                      label: x.intl.string(x.t["+5Rmhl"]),
                      className: j.formSection,
                      children: (0, r.jsx)(_, {
                          payoutsByPeriod: C,
                          team: m,
                      }),
                  }),
                  (0, r.jsx)(i.C3N, {
                      label: x.intl.string(x.t.O8cDAJ),
                      className: j.formSection,
                      disabled: E,
                      children: (0, r.jsx)(f.Z, {
                          guildId: s,
                          application: o,
                      }),
                  }),
                  (0, r.jsx)(i.C3N, {
                      label: x.intl.string(x.t["0n7R2X"]),
                      className: j.formSection,
                      children: (0, r.jsx)(h.Z, {
                          guildId: s,
                          allPeriods: C,
                      }),
                  }),
              ],
          });
};
function C(e) {
    return (0, r.jsx)(s.l, {
        guildId: e.guildId,
        children: (0, r.jsx)(
            O,
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
