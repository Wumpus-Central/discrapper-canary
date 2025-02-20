n.d(t, { i: () => p });
var r = n(200651);
n(192379);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    l = n(481060),
    s = n(800530),
    c = n(388032),
    d = n(71428);
let u = (e) => a()().diff(a().unix(e), 'days');
function p(e) {
    var t, i, a, p, m;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let f = e.message.embeds[0],
        h = null !== (a = null === (t = f.fields) || void 0 === t ? void 0 : t.find((e) => e.rawName === s.Cg.CLASSIFICATION_ID)) && void 0 !== a ? a : void 0,
        g = null !== (p = null == h ? void 0 : h.rawValue) && void 0 !== p ? p : void 0,
        _ = null !== (m = null === (i = f.fields) || void 0 === i ? void 0 : i.find((e) => e.rawName === s.Cg.INCIDENT_TIMESTAMP)) && void 0 !== m ? m : void 0,
        b = null == _ || null == _.rawValue ? void 0 : parseFloat(_.rawValue);
    return null == g || null == b
        ? null
        : (0, r.jsxs)(l.P3F, {
              onClick: () => {
                  (0, l.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('65396')]).then(n.bind(n, 41164));
                      return (t) =>
                          (0, r.jsx)(e, {
                              classificationId: g,
                              source: s.s.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose
                          });
                  });
              },
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: d.noticeContent,
                      children: [
                          (0, r.jsxs)('div', {
                              className: d.headerRow,
                              children: [
                                  (0, r.jsx)(l.aNP, {
                                      className: d.warningIcon,
                                      color: o.Z.colors.STATUS_DANGER
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-md/semibold',
                                      children: c.NW.string(c.t['4CxGXl'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: d.incidentTiming,
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-xs/medium',
                                  children: c.NW.format(c.t.eevFb2, { daysAgo: u(b) })
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: d.noticeBody,
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: c.NW.string(c.t['5CLb0N'])
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: d.footerContainer,
                      children: (0, r.jsx)(l.zxk, {
                          look: l.zxk.Looks.BLANK,
                          className: d.detailsButton,
                          color: l.zxk.Colors.WHITE,
                          children: c.NW.string(c.t.zKnzws)
                      })
                  })
              ]
          });
}
