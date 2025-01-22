n.d(t, {
    i: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(913527),
    l = n.n(r),
    a = n(692547),
    o = n(481060),
    s = n(800530),
    c = n(388032),
    u = n(88840);
let d = (e) => l()().diff(l().unix(e), 'days');
function m(e) {
    var t, r, l, m, h;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let f = e.message.embeds[0],
        p = null !== (l = null === (t = f.fields) || void 0 === t ? void 0 : t.find((e) => e.rawName === s.Cg.CLASSIFICATION_ID)) && void 0 !== l ? l : void 0,
        _ = null !== (m = null == p ? void 0 : p.rawValue) && void 0 !== m ? m : void 0,
        g = null !== (h = null === (r = f.fields) || void 0 === r ? void 0 : r.find((e) => e.rawName === s.Cg.INCIDENT_TIMESTAMP)) && void 0 !== h ? h : void 0,
        E = null == g || null == g.rawValue ? void 0 : parseFloat(g.rawValue);
    return null == _ || null == E
        ? null
        : (0, i.jsxs)(o.Clickable, {
              onClick: () => {
                  (0, o.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('11414')]).then(n.bind(n, 41164));
                      return (t) =>
                          (0, i.jsx)(e, {
                              classificationId: _,
                              source: s.s.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose
                          });
                  });
              },
              className: u.safetyPolicyNoticeContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: u.noticeContent,
                      children: [
                          (0, i.jsxs)('div', {
                              className: u.headerRow,
                              children: [
                                  (0, i.jsx)(o.WarningIcon, {
                                      className: u.warningIcon,
                                      color: a.Z.colors.STATUS_DANGER
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      children: c.intl.string(c.t['4CxGXl'])
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: u.incidentTiming,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: c.intl.format(c.t.eevFb2, { daysAgo: d(E) })
                              })
                          }),
                          (0, i.jsx)('div', {
                              className: u.noticeBody,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: c.intl.string(c.t['5CLb0N'])
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: u.footerContainer,
                      children: (0, i.jsx)(o.Button, {
                          look: o.Button.Looks.BLANK,
                          className: u.detailsButton,
                          color: o.Button.Colors.WHITE,
                          children: c.intl.string(c.t.zKnzws)
                      })
                  })
              ]
          });
}
