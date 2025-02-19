n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(825055),
    a = n(937615),
    l = n(730647),
    o = n(584825),
    c = n(723047),
    d = n(997519),
    u = n(146710),
    m = n(146610),
    p = n(67152),
    g = n(791382),
    h = n(277369),
    f = n(215124),
    b = n(981631),
    x = n(388032),
    j = n(360536);
function N(e) {
    let { payoutsByPeriod: t, team: n } = e,
        s = (0, c.mY)() ? null : x.NW.format(x.t.d1sCiY, { url: null != n ? b.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, r.jsxs)(i.R94, {
              type: i.R94.Types.DESCRIPTION,
              children: [x.NW.string(x.t.RrtXu7), ' ', s]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(i.R94, {
                      type: i.R94.Types.DESCRIPTION,
                      children: [x.NW.string(x.t['9Ub4KS']), ' ', s]
                  }),
                  (0, r.jsx)(i.LZC, { size: 16 }),
                  (0, r.jsx)(p.ZP, { payoutsByPeriod: t })
              ]
          });
}
function v(e) {
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
let _ = (e) => {
    var t, n;
    let { guildId: l, application: o } = e,
        { loading: m, team: p, currentPeriod: _, allPeriods: O, metrics: y } = (0, d.Z)(l, o),
        C = (0, u.u)(l),
        I = (0, c.mY)();
    return m
        ? (0, r.jsx)(i.$jN, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  C &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(s.Z, { children: x.NW.format(x.t['2raBCQ'], { insightsURL: b.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(l) }) }), (0, r.jsx)(i.LZC, { size: 32 })]
                      }),
                  (0, r.jsxs)(i.hjN, {
                      title: x.NW.string(x.t.ofmOzc),
                      className: j.formSection,
                      children: [
                          (0, r.jsx)(i.LZC, { size: 8 }),
                          (0, r.jsxs)('div', {
                              className: j.metricsContainer,
                              children: [
                                  (0, r.jsx)(g.Z, {
                                      label: x.NW.string(x.t.iY1jW1),
                                      value: (0, a.T4)(null !== (t = y.revenue) && void 0 !== t ? t : 0, b.pKx.USD),
                                      additionalContent: (0, r.jsx)(g.H, {
                                          value: y.revenuePctChange,
                                          isPercent: !0
                                      })
                                  }),
                                  (0, r.jsx)(g.Z, {
                                      label: x.NW.string(x.t.cXyw29),
                                      value: (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              null !== (n = y.subscribers) && void 0 !== n ? n : '-',
                                              ' ',
                                              (0, r.jsx)(i.tBG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: j.totalMembersIcon,
                                                  'aria-hidden': !0
                                              })
                                          ]
                                      }),
                                      additionalContent: (0, r.jsx)(g.H, { value: y.subscriberChange })
                                  })
                              ]
                          }),
                          (0, r.jsx)(v, {
                              guildId: l,
                              totalPayoutsForPeriod: _
                          })
                      ]
                  }),
                  (0, r.jsx)(i.hjN, {
                      title: x.NW.string(x.t['+5Rmho']),
                      className: j.formSection,
                      children: (0, r.jsx)(N, {
                          payoutsByPeriod: O,
                          team: p
                      })
                  }),
                  (0, r.jsx)(i.hjN, {
                      title: x.NW.string(x.t.O8cDAA),
                      disabled: I,
                      className: j.formSection,
                      children: (0, r.jsx)(h.Z, {
                          guildId: l,
                          application: o
                      })
                  }),
                  (0, r.jsx)(i.hjN, {
                      title: x.NW.string(x.t['0n7R2d']),
                      className: j.formSection,
                      children: (0, r.jsx)(f.Z, {
                          guildId: l,
                          allPeriods: O
                      })
                  })
              ]
          });
};
function O(e) {
    return (0, r.jsx)(l.l, {
        guildId: e.guildId,
        children: (0, r.jsx)(
            _,
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
