n.d(t, { B: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(704215),
    a = n(481060),
    l = n(243778),
    o = n(970731),
    c = n(19780),
    d = n(921944),
    u = n(388032),
    m = n(947916);
function g(e) {
    let { children: t, canBeShown: g, onCTA: p } = e,
        h = (0, i.e7)([c.Z], () => c.Z.isConnected());
    return (0, r.jsx)(l.ZP, {
        bypassAutoDismiss: !0,
        contentTypes: g ? [h ? s.z.VOICE_FILTER_IN_CALL_COACHMARK : s.z.VOICE_FILTER_LAUNCH_COACHMARK] : [],
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e;
            return i === s.z.VOICE_FILTER_LAUNCH_COACHMARK
                ? (0, r.jsx)(a.yRy, {
                      renderPopout: () =>
                          (0, r.jsxs)('div', {
                              className: m.popup,
                              children: [
                                  (0, r.jsx)(a.P3F, {
                                      className: m.closeIcon,
                                      onClick: () => l(d.L.USER_DISMISS),
                                      children: (0, r.jsx)(a.Dio, {})
                                  }),
                                  (0, r.jsx)('img', {
                                      src: n(414190),
                                      className: m.art,
                                      alt: ''
                                  }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              color: 'header-primary',
                                              className: m.heading,
                                              children: u.NW.string(u.t.MLt8Hx)
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'header-secondary',
                                              children: u.NW.string(u.t['l+lSLi'])
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(a.zxk, {
                                      color: a.zxk.Colors.BRAND,
                                      look: a.zxk.Looks.FILLED,
                                      fullWidth: !0,
                                      onClick: () => {
                                          l(d.L.TAKE_ACTION), p();
                                      },
                                      children: u.NW.string(u.t['9WdoBw'])
                                  })
                              ]
                          }),
                      animation: a.yRy.Animation.TRANSLATE,
                      animationPosition: 'bottom',
                      position: 'top',
                      align: 'center',
                      shouldShow: !0,
                      children: (e, n) => {
                          let { isShown: r } = n;
                          return t(r, () => l(d.L.INDIRECT_ACTION));
                      }
                  })
                : i === s.z.VOICE_FILTER_IN_CALL_COACHMARK
                  ? (0, r.jsx)(a.yRy, {
                        renderPopout: () =>
                            (0, r.jsx)(o.ZP, {
                                header: u.NW.string(u.t.bNpaiI),
                                content: u.NW.string(u.t['1n6QXF']),
                                buttonCTA: u.NW.string(u.t['NX+WJC']),
                                buttonProps: { color: a.Ttl.WHITE },
                                onClick: () => {
                                    p();
                                },
                                markAsDismissed: l,
                                caretPosition: o.DF.BOTTOM_CENTER
                            }),
                        animation: a.yRy.Animation.TRANSLATE,
                        animationPosition: 'bottom',
                        position: 'top',
                        align: 'center',
                        shouldShow: !0,
                        children: (e, n) => {
                            let { isShown: r } = n;
                            return t(r, () => l(d.L.INDIRECT_ACTION));
                        }
                    })
                  : t(!1);
        }
    });
}
