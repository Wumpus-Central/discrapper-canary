n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(825055),
    a = n(937615),
    s = n(730647),
    o = n(584825),
    c = n(723047),
    d = n(997519),
    u = n(146710),
    m = n(146610),
    h = n(67152),
    g = n(791382),
    x = n(277369),
    p = n(215124),
    f = n(981631),
    C = n(388032),
    v = n(899621);
function _(e) {
    let { payoutsByPeriod: t, team: n } = e,
        l = (0, c.mY)() ? null : C.intl.format(C.t.d1sCiY, { url: null != n ? f.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length
        ? (0, i.jsxs)(r.FormText, {
              type: r.FormText.Types.DESCRIPTION,
              children: [C.intl.string(C.t.RrtXu7), ' ', l]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(r.FormText, {
                      type: r.FormText.Types.DESCRIPTION,
                      children: [C.intl.string(C.t['9Ub4KS']), ' ', l]
                  }),
                  (0, i.jsx)(r.Spacer, { size: 16 }),
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
              className: v.currentMonthEarningsTable
          });
}
let I = (e) => {
    var t, n;
    let { guildId: s, application: o } = e,
        { loading: m, team: h, currentPeriod: I, allPeriods: T, metrics: j } = (0, d.Z)(s, o),
        b = (0, u.u)(s),
        S = (0, c.mY)();
    return m
        ? (0, i.jsx)(r.Spinner, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  b &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(l.Z, { children: C.intl.format(C.t['2raBCQ'], { insightsURL: f.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(s) }) }), (0, i.jsx)(r.Spacer, { size: 32 })]
                      }),
                  (0, i.jsxs)(r.FormSection, {
                      title: C.intl.string(C.t.ofmOzc),
                      className: v.formSection,
                      children: [
                          (0, i.jsx)(r.Spacer, { size: 8 }),
                          (0, i.jsxs)('div', {
                              className: v.metricsContainer,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      label: C.intl.string(C.t.iY1jW1),
                                      value: (0, a.T4)(null !== (t = j.revenue) && void 0 !== t ? t : 0, f.pKx.USD),
                                      additionalContent: (0, i.jsx)(g.H, {
                                          value: j.revenuePctChange,
                                          isPercent: !0
                                      })
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      label: C.intl.string(C.t.cXyw29),
                                      value: (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null !== (n = j.subscribers) && void 0 !== n ? n : '-',
                                              ' ',
                                              (0, i.jsx)(r.UserIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: v.totalMembersIcon,
                                                  'aria-hidden': !0
                                              })
                                          ]
                                      }),
                                      additionalContent: (0, i.jsx)(g.H, { value: j.subscriberChange })
                                  })
                              ]
                          }),
                          (0, i.jsx)(N, {
                              guildId: s,
                              totalPayoutsForPeriod: I
                          })
                      ]
                  }),
                  (0, i.jsx)(r.FormSection, {
                      title: C.intl.string(C.t['+5Rmho']),
                      className: v.formSection,
                      children: (0, i.jsx)(_, {
                          payoutsByPeriod: T,
                          team: h
                      })
                  }),
                  (0, i.jsx)(r.FormSection, {
                      title: C.intl.string(C.t.O8cDAA),
                      disabled: S,
                      className: v.formSection,
                      children: (0, i.jsx)(x.Z, {
                          guildId: s,
                          application: o
                      })
                  }),
                  (0, i.jsx)(r.FormSection, {
                      title: C.intl.string(C.t['0n7R2d']),
                      className: v.formSection,
                      children: (0, i.jsx)(p.Z, {
                          guildId: s,
                          allPeriods: T
                      })
                  })
              ]
          });
};
function T(e) {
    return (0, i.jsx)(s.l, {
        guildId: e.guildId,
        children: (0, i.jsx)(I, { ...e })
    });
}
