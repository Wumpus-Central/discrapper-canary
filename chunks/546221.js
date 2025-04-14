n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(825055),
    l = n(937615),
    a = n(730647),
    o = n(584825),
    c = n(723047),
    d = n(997519),
    u = n(146710),
    m = n(146610),
    g = n(67152),
    p = n(791382),
    h = n(277369),
    f = n(215124),
    x = n(981631),
    b = n(388032),
    j = n(264054);
function N(e) {
    let { payoutsByPeriod: t, team: n } = e,
        s = (0, c.mY)() ? null : b.NW.format(b.t.d1sCiY, { url: null != n ? x.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, r.jsxs)(i.R94, {
              type: i.R94.Types.DESCRIPTION,
              children: [b.NW.string(b.t.RrtXu7), ' ', s]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(i.R94, {
                      type: i.R94.Types.DESCRIPTION,
                      children: [b.NW.string(b.t['9Ub4KS']), ' ', s]
                  }),
                  (0, r.jsx)(i.LZC, { size: 16 }),
                  (0, r.jsx)(g.ZP, { payoutsByPeriod: t })
              ]
          });
}
function _(e) {
    let { guildId: t, totalPayoutsForPeriod: n } = e,
        i = (0, o.qi)(t, { includeSoftDeleted: !0 });
    return null == n && 0 === i.length
        ? null
        : (0, r.jsx)(m.Z, {
              totalPayoutsForPeriod: n,
              guildId: t,
              className: j.currentMonthEarningsTable
          });
}
let v = (e) => {
    var t, n;
    let { guildId: a, application: o } = e,
        { loading: m, team: g, currentPeriod: v, allPeriods: O, metrics: C } = (0, d.Z)(a, o),
        y = (0, u.u)(a),
        I = (0, c.mY)();
    return m
        ? (0, r.jsx)(i.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  y &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(s.Z, { children: b.NW.format(b.t['2raBCQ'], { insightsURL: x.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(a) }) }), (0, r.jsx)(i.LZC, { size: 32 })]
                      }),
                  (0, r.jsxs)(i.hjN, {
                      title: b.NW.string(b.t.ofmOzc),
                      className: j.formSection,
                      children: [
                          (0, r.jsx)(i.LZC, { size: 8 }),
                          (0, r.jsxs)('div', {
                              className: j.metricsContainer,
                              children: [
                                  (0, r.jsx)(p.Z, {
                                      label: b.NW.string(b.t.iY1jW1),
                                      value: (0, l.T4)(null != (t = C.revenue) ? t : 0, x.pKx.USD),
                                      additionalContent: (0, r.jsx)(p.H, {
                                          value: C.revenuePctChange,
                                          isPercent: !0
                                      })
                                  }),
                                  (0, r.jsx)(p.Z, {
                                      label: b.NW.string(b.t.cXyw29),
                                      value: (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              null != (n = C.subscribers) ? n : '-',
                                              ' ',
                                              (0, r.jsx)(i.tBG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: j.totalMembersIcon,
                                                  'aria-hidden': !0
                                              })
                                          ]
                                      }),
                                      additionalContent: (0, r.jsx)(p.H, { value: C.subscriberChange })
                                  })
                              ]
                          }),
                          (0, r.jsx)(_, {
                              guildId: a,
                              totalPayoutsForPeriod: v
                          })
                      ]
                  }),
                  (0, r.jsx)(i.hjN, {
                      title: b.NW.string(b.t['+5Rmho']),
                      className: j.formSection,
                      children: (0, r.jsx)(N, {
                          payoutsByPeriod: O,
                          team: g
                      })
                  }),
                  (0, r.jsx)(i.hjN, {
                      title: b.NW.string(b.t.O8cDAA),
                      disabled: I,
                      className: j.formSection,
                      children: (0, r.jsx)(h.Z, {
                          guildId: a,
                          application: o
                      })
                  }),
                  (0, r.jsx)(i.hjN, {
                      title: b.NW.string(b.t['0n7R2d']),
                      className: j.formSection,
                      children: (0, r.jsx)(f.Z, {
                          guildId: a,
                          allPeriods: O
                      })
                  })
              ]
          });
};
function O(e) {
    return (0, r.jsx)(a.l, {
        guildId: e.guildId,
        children: (0, r.jsx)(
            v,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)
        )
    });
}
