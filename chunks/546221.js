n.d(t, { Z: () => I });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(825055),
    s = n(937615),
    a = n(730647),
    o = n(584825),
    c = n(723047),
    d = n(997519),
    u = n(146710),
    m = n(146610),
    h = n(67152),
    g = n(791382),
    x = n(277369),
    p = n(215124),
    _ = n(981631),
    C = n(388032),
    f = n(828650);
function v(e) {
    let { payoutsByPeriod: t, team: n } = e,
        l = (0, c.mY)() ? null : C.intl.format(C.t.d1sCiY, { url: null != n ? _.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, i.jsxs)(r.R94, {
              type: r.R94.Types.DESCRIPTION,
              children: [C.intl.string(C.t.RrtXu7), ' ', l]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(r.R94, {
                      type: r.R94.Types.DESCRIPTION,
                      children: [C.intl.string(C.t['9Ub4KS']), ' ', l]
                  }),
                  (0, i.jsx)(r.LZC, { size: 16 }),
                  (0, i.jsx)(h.ZP, { payoutsByPeriod: t })
              ]
          });
}
function N(e) {
    let { guildId: t, totalPayoutsForPeriod: n } = e,
        r = (0, o.qi)(t, { includeSoftDeleted: !0 });
    return null == n && 0 === r.length
        ? null
        : (0, i.jsx)(m.Z, {
              totalPayoutsForPeriod: n,
              guildId: t,
              className: f.currentMonthEarningsTable
          });
}
let j = (e) => {
    var t, n;
    let { guildId: a, application: o } = e,
        { loading: m, team: h, currentPeriod: j, allPeriods: I, metrics: E } = (0, d.Z)(a, o),
        b = (0, u.u)(a),
        T = (0, c.mY)();
    return m
        ? (0, i.jsx)(r.$jN, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  b &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(l.Z, { children: C.intl.format(C.t['2raBCQ'], { insightsURL: _.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(a) }) }), (0, i.jsx)(r.LZC, { size: 32 })]
                      }),
                  (0, i.jsxs)(r.hjN, {
                      title: C.intl.string(C.t.ofmOzc),
                      className: f.formSection,
                      children: [
                          (0, i.jsx)(r.LZC, { size: 8 }),
                          (0, i.jsxs)('div', {
                              className: f.metricsContainer,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      label: C.intl.string(C.t.iY1jW1),
                                      value: (0, s.T4)(null !== (t = E.revenue) && void 0 !== t ? t : 0, _.pKx.USD),
                                      additionalContent: (0, i.jsx)(g.H, {
                                          value: E.revenuePctChange,
                                          isPercent: !0
                                      })
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      label: C.intl.string(C.t.cXyw29),
                                      value: (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null !== (n = E.subscribers) && void 0 !== n ? n : '-',
                                              ' ',
                                              (0, i.jsx)(r.tBG, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: f.totalMembersIcon,
                                                  'aria-hidden': !0
                                              })
                                          ]
                                      }),
                                      additionalContent: (0, i.jsx)(g.H, { value: E.subscriberChange })
                                  })
                              ]
                          }),
                          (0, i.jsx)(N, {
                              guildId: a,
                              totalPayoutsForPeriod: j
                          })
                      ]
                  }),
                  (0, i.jsx)(r.hjN, {
                      title: C.intl.string(C.t['+5Rmho']),
                      className: f.formSection,
                      children: (0, i.jsx)(v, {
                          payoutsByPeriod: I,
                          team: h
                      })
                  }),
                  (0, i.jsx)(r.hjN, {
                      title: C.intl.string(C.t.O8cDAA),
                      disabled: T,
                      className: f.formSection,
                      children: (0, i.jsx)(x.Z, {
                          guildId: a,
                          application: o
                      })
                  }),
                  (0, i.jsx)(r.hjN, {
                      title: C.intl.string(C.t['0n7R2d']),
                      className: f.formSection,
                      children: (0, i.jsx)(p.Z, {
                          guildId: a,
                          allPeriods: I
                      })
                  })
              ]
          });
};
function I(e) {
    return (0, i.jsx)(a.l, {
        guildId: e.guildId,
        children: (0, i.jsx)(j, { ...e })
    });
}
