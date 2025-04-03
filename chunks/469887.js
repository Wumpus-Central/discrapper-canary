n.d(t, { B: () => u });
var r = n(200651);
n(192379);
var i = n(704215),
    s = n(481060),
    a = n(243778),
    l = n(688465),
    o = n(921944),
    c = n(388032),
    d = n(320790);
function u(e) {
    let { children: t, canBeShown: u, onCTA: m, targetElementRef: g } = e;
    return (0, r.jsx)(a.ZP, {
        bypassAutoDismiss: !0,
        contentTypes: u ? [i.z.VOICE_FILTER_LAUNCH_COACHMARK] : [],
        children: (e) => {
            let { visibleContent: a, markAsDismissed: u } = e;
            return a === i.z.VOICE_FILTER_LAUNCH_COACHMARK
                ? (0, r.jsx)(s.yRy, {
                      targetElementRef: g,
                      renderPopout: () =>
                          (0, r.jsxs)('div', {
                              className: d.popup,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: d.background,
                                      children: [(0, r.jsx)('div', { className: d.blur0 }), (0, r.jsx)('div', { className: d.blur1 }), (0, r.jsx)('div', { className: d.blur2 })]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: d.content,
                                      children: [
                                          (0, r.jsx)(s.P3F, {
                                              className: d.closeIcon,
                                              onClick: () => u(o.L.USER_DISMISS),
                                              children: (0, r.jsx)(s.Dio, {})
                                          }),
                                          (0, r.jsx)('img', {
                                              src: n(414190),
                                              className: d.art,
                                              alt: ''
                                          }),
                                          (0, r.jsxs)('div', {
                                              children: [
                                                  (0, r.jsxs)(s.X6q, {
                                                      variant: 'heading-md/semibold',
                                                      color: 'header-primary',
                                                      className: d.heading,
                                                      children: [c.NW.string(c.t.MLt8Hx), (0, r.jsx)(l.Z, { className: d.betaTag })]
                                                  }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'header-secondary',
                                                      children: c.NW.string(c.t['l+lSLi'])
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(s.zxk, {
                                              color: s.zxk.Colors.BRAND,
                                              look: s.zxk.Looks.FILLED,
                                              fullWidth: !0,
                                              onClick: () => {
                                                  u(o.L.TAKE_ACTION), m();
                                              },
                                              children: c.NW.string(c.t['9WdoBw'])
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
                          return t(r, () => u(o.L.INDIRECT_ACTION));
                      }
                  })
                : t(!1);
        }
    });
}
