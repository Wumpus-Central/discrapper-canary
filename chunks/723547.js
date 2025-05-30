n.d(t, { v: () => d }), n(953529);
var i = n(255367);
n(73800);
var r = n(704215),
    s = n(481060),
    l = n(243778),
    a = n(921944),
    o = n(388032),
    c = n(443257);
function d(e) {
    let { children: t, canBeShown: n, onCTA: d, targetElementRef: u } = e;
    return (0, i.jsx)(l.ZP, {
        bypassAutoDismiss: !0,
        contentTypes: n ? [r.z.VOICE_FILTER_FIRST_USE_COACHMARK] : [],
        children: (e) => {
            let { visibleContent: n, markAsDismissed: l } = e;
            return n === r.z.VOICE_FILTER_FIRST_USE_COACHMARK
                ? (0, i.jsx)(s.yRy, {
                      targetElementRef: u,
                      renderPopout: () =>
                          (0, i.jsx)('div', {
                              className: c.popup,
                              children: (0, i.jsxs)('div', {
                                  className: c.content,
                                  children: [
                                      (0, i.jsx)(s.P3F, {
                                          className: c.closeIcon,
                                          onClick: () => l(a.L.USER_DISMISS),
                                          children: (0, i.jsx)(s.Dio, { size: 'xs' })
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          className: c.description,
                                          variant: 'text-md/normal',
                                          children: o.intl.string(o.t['Ny/0ur'])
                                      }),
                                      (0, i.jsx)(s.zxk, {
                                          color: s.zxk.Colors.BRAND,
                                          look: s.zxk.Looks.FILLED,
                                          size: s.zxk.Sizes.SMALL,
                                          fullWidth: !0,
                                          onClick: () => {
                                              l(a.L.TAKE_ACTION), d();
                                          },
                                          children: o.intl.string(o.t.TYo739)
                                      })
                                  ]
                              })
                          }),
                      animation: s.yRy.Animation.TRANSLATE,
                      animationPosition: 'bottom',
                      position: 'top',
                      align: 'center',
                      shouldShow: !0,
                      children: (e, n) => {
                          let { isShown: i } = n;
                          return t(i, () => l(a.L.INDIRECT_ACTION));
                      }
                  })
                : t(!1);
        }
    });
}
