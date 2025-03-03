n.d(t, { B: () => d });
var r = n(200651);
n(192379);
var i = n(704215),
    s = n(481060),
    a = n(243778),
    l = n(921944),
    o = n(388032),
    c = n(726797);
function d(e) {
    let { children: t, canBeShown: d, onCTA: u } = e;
    return (0, r.jsx)(a.ZP, {
        bypassAutoDismiss: !0,
        contentTypes: d ? [i.z.VOICE_FILTER_LAUNCH_COACHMARK] : [],
        children: (e) => {
            let { visibleContent: a, markAsDismissed: d } = e;
            return a === i.z.VOICE_FILTER_LAUNCH_COACHMARK
                ? (0, r.jsx)(s.yRy, {
                      renderPopout: () =>
                          (0, r.jsxs)('div', {
                              className: c.popup,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: c.background,
                                      children: [(0, r.jsx)('div', { className: c.blur0 }), (0, r.jsx)('div', { className: c.blur1 }), (0, r.jsx)('div', { className: c.blur2 })]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: c.content,
                                      children: [
                                          (0, r.jsx)(s.P3F, {
                                              className: c.closeIcon,
                                              onClick: () => d(l.L.USER_DISMISS),
                                              children: (0, r.jsx)(s.Dio, {})
                                          }),
                                          (0, r.jsx)('img', {
                                              src: n(414190),
                                              className: c.art,
                                              alt: ''
                                          }),
                                          (0, r.jsxs)('div', {
                                              children: [
                                                  (0, r.jsx)(s.X6q, {
                                                      variant: 'heading-md/semibold',
                                                      color: 'header-primary',
                                                      className: c.heading,
                                                      children: o.NW.string(o.t.MLt8Hx)
                                                  }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'header-secondary',
                                                      children: o.NW.string(o.t['l+lSLi'])
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(s.zxk, {
                                              color: s.zxk.Colors.BRAND,
                                              look: s.zxk.Looks.FILLED,
                                              fullWidth: !0,
                                              onClick: () => {
                                                  d(l.L.TAKE_ACTION), u();
                                              },
                                              children: o.NW.string(o.t['9WdoBw'])
                                          })
                                      ]
                                  })
                              ]
                          }),
                      animation: s.yRy.Animation.TRANSLATE,
                      animationPosition: 'bottom',
                      position: 'top',
                      align: 'center',
                      shouldShow: !0,
                      children: (e, n) => {
                          let { isShown: r } = n;
                          return t(r, () => d(l.L.INDIRECT_ACTION));
                      }
                  })
                : t(!1);
        }
    });
}
