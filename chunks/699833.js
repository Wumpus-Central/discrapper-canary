n.d(t, { i: () => m });
var i = n(200651);
n(192379);
var l = n(913527),
    a = n.n(l),
    r = n(692547),
    s = n(481060),
    o = n(800530),
    c = n(388032),
    d = n(402491);
let u = (e) => a()().diff(a().unix(e), 'days');
function m(e) {
    var t, l, a, m, _;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let h = e.message.embeds[0],
        p = null !== (a = null === (t = h.fields) || void 0 === t ? void 0 : t.find((e) => e.rawName === o.Cg.CLASSIFICATION_ID)) && void 0 !== a ? a : void 0,
        g = null !== (m = null == p ? void 0 : p.rawValue) && void 0 !== m ? m : void 0,
        f = null !== (_ = null === (l = h.fields) || void 0 === l ? void 0 : l.find((e) => e.rawName === o.Cg.INCIDENT_TIMESTAMP)) && void 0 !== _ ? _ : void 0,
        x = null == f || null == f.rawValue ? void 0 : parseFloat(f.rawValue);
    return null == g || null == x
        ? null
        : (0, i.jsxs)(s.P3F, {
              onClick: () => {
                  (0, s.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('52731')]).then(n.bind(n, 41164));
                      return (t) =>
                          (0, i.jsx)(e, {
                              classificationId: g,
                              source: o.s.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose
                          });
                  });
              },
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: d.noticeContent,
                      children: [
                          (0, i.jsxs)('div', {
                              className: d.headerRow,
                              children: [
                                  (0, i.jsx)(s.aNP, {
                                      className: d.warningIcon,
                                      color: r.Z.colors.STATUS_DANGER
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/semibold',
                                      children: c.intl.string(c.t['4CxGXl'])
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: d.incidentTiming,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: c.intl.format(c.t.eevFb2, { daysAgo: u(x) })
                              })
                          }),
                          (0, i.jsx)('div', {
                              className: d.noticeBody,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: c.intl.string(c.t['5CLb0N'])
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: d.footerContainer,
                      children: (0, i.jsx)(s.zxk, {
                          look: s.zxk.Looks.BLANK,
                          className: d.detailsButton,
                          color: s.zxk.Colors.WHITE,
                          children: c.intl.string(c.t.zKnzws)
                      })
                  })
              ]
          });
}
