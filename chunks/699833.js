n.d(t, { i: () => m });
var r = n(255367);
n(73800);
var i = n(913527),
    l = n.n(i),
    a = n(692547),
    o = n(755721),
    s = n(481060),
    c = n(800530),
    u = n(388032),
    d = n(524438);
let p = (e) => l()().diff(l().unix(e), 'days');
function m(e) {
    var t, i, l, m, f;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let g = e.message.embeds[0],
        h = null != (l = null == (t = g.fields) ? void 0 : t.find((e) => e.rawName === c.Cg.CLASSIFICATION_ID)) ? l : void 0,
        _ = null != (m = null == h ? void 0 : h.rawValue) ? m : void 0,
        b = null != (f = null == (i = g.fields) ? void 0 : i.find((e) => e.rawName === c.Cg.INCIDENT_TIMESTAMP)) ? f : void 0,
        E = null == b || null == b.rawValue ? void 0 : parseFloat(b.rawValue);
    return null == _ || null == E
        ? null
        : (0, r.jsxs)(s.P3F, {
              onClick: () => {
                  (0, s.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('25183'), n.e('3940'), n.e('18831'), n.e('68464')]).then(n.bind(n, 41164));
                      return (t) =>
                          (0, r.jsx)(e, {
                              classificationId: _,
                              source: c.s.SystemDM,
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
                                  (0, r.jsx)(s.aNP, {
                                      className: d.warningIcon,
                                      color: a.Z.colors.STATUS_DANGER
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-md/semibold',
                                      children: u.intl.string(u.t['4CxGXl'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: d.incidentTiming,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.eevFb2, { daysAgo: p(E) })
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: d.noticeBody,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: u.intl.string(u.t['5CLb0N'])
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: d.footerContainer,
                      children: (0, r.jsx)(o.zx, {
                          look: o.zx.Looks.BLANK,
                          className: d.detailsButton,
                          color: o.zx.Colors.WHITE,
                          children: u.intl.string(u.t.zKnzws)
                      })
                  })
              ]
          });
}
