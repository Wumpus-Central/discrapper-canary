n.d(t, { i: () => p });
var r = n(200651);
n(192379);
var i = n(913527),
    a = n.n(i),
    l = n(692547),
    o = n(481060),
    s = n(800530),
    c = n(388032),
    u = n(524438);
let d = (e) => a()().diff(a().unix(e), 'days');
function p(e) {
    var t, i, a, p, m;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let f = e.message.embeds[0],
        h = null != (a = null == (t = f.fields) ? void 0 : t.find((e) => e.rawName === s.Cg.CLASSIFICATION_ID)) ? a : void 0,
        g = null != (p = null == h ? void 0 : h.rawValue) ? p : void 0,
        _ = null != (m = null == (i = f.fields) ? void 0 : i.find((e) => e.rawName === s.Cg.INCIDENT_TIMESTAMP)) ? m : void 0,
        b = null == _ || null == _.rawValue ? void 0 : parseFloat(_.rawValue);
    return null == g || null == b
        ? null
        : (0, r.jsxs)(o.P3F, {
              onClick: () => {
                  (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('68464')]).then(n.bind(n, 41164));
                      return (t) =>
                          (0, r.jsx)(e, {
                              classificationId: g,
                              source: s.s.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose
                          });
                  });
              },
              className: u.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: u.noticeContent,
                      children: [
                          (0, r.jsxs)('div', {
                              className: u.headerRow,
                              children: [
                                  (0, r.jsx)(o.aNP, {
                                      className: u.warningIcon,
                                      color: l.Z.colors.STATUS_DANGER
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      children: c.NW.string(c.t['4CxGXl'])
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: u.incidentTiming,
                              children: (0, r.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: c.NW.format(c.t.eevFb2, { daysAgo: d(b) })
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: u.noticeBody,
                              children: (0, r.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: c.NW.string(c.t['5CLb0N'])
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: u.footerContainer,
                      children: (0, r.jsx)(o.zxk, {
                          look: o.zxk.Looks.BLANK,
                          className: u.detailsButton,
                          color: o.zxk.Colors.WHITE,
                          children: c.NW.string(c.t.zKnzws)
                      })
                  })
              ]
          });
}
