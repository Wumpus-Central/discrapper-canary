n.d(t, { B: () => m });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(704215),
    a = n(481060),
    s = n(243778),
    o = n(970731),
    d = n(19780),
    c = n(921944),
    u = n(388032),
    h = n(63318);
function m(e) {
    let { children: t, canBeShown: m, onCTA: p } = e,
        g = (0, l.e7)([d.Z], () => d.Z.isConnected());
    return (0, i.jsx)(s.ZP, {
        bypassAutoDismiss: !0,
        contentTypes: m ? [g ? r.z.VOICE_FILTER_IN_CALL_COACHMARK : r.z.VOICE_FILTER_LAUNCH_COACHMARK] : [],
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e;
            return l === r.z.VOICE_FILTER_LAUNCH_COACHMARK
                ? (0, i.jsx)(a.yRy, {
                      renderPopout: () =>
                          (0, i.jsxs)('div', {
                              className: h.popup,
                              children: [
                                  (0, i.jsx)(a.P3F, {
                                      className: h.closeIcon,
                                      onClick: () => s(c.L.USER_DISMISS),
                                      children: (0, i.jsx)(a.Dio, {})
                                  }),
                                  (0, i.jsx)('img', {
                                      src: n(414190),
                                      className: h.art,
                                      alt: ''
                                  }),
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              color: 'header-primary',
                                              className: h.heading,
                                              children: u.intl.string(u.t.MLt8Hx)
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'header-secondary',
                                              children: u.intl.string(u.t['l+lSLi'])
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(a.zxk, {
                                      color: a.zxk.Colors.BRAND,
                                      look: a.zxk.Looks.FILLED,
                                      fullWidth: !0,
                                      onClick: () => {
                                          s(c.L.TAKE_ACTION), p();
                                      },
                                      children: u.intl.string(u.t['9WdoBw'])
                                  })
                              ]
                          }),
                      animation: a.yRy.Animation.TRANSLATE,
                      animationPosition: 'bottom',
                      position: 'top',
                      align: 'center',
                      shouldShow: !0,
                      children: (e, n) => {
                          let { isShown: i } = n;
                          return t(i, () => s(c.L.INDIRECT_ACTION));
                      }
                  })
                : l === r.z.VOICE_FILTER_IN_CALL_COACHMARK
                  ? (0, i.jsx)(a.yRy, {
                        renderPopout: () =>
                            (0, i.jsx)(o.ZP, {
                                header: u.intl.string(u.t.bNpaiI),
                                content: u.intl.string(u.t['1n6QXF']),
                                buttonCTA: u.intl.string(u.t['NX+WJC']),
                                buttonProps: { color: a.Ttl.WHITE },
                                onClick: () => {
                                    p();
                                },
                                markAsDismissed: s,
                                caretPosition: o.DF.BOTTOM_CENTER
                            }),
                        animation: a.yRy.Animation.TRANSLATE,
                        animationPosition: 'bottom',
                        position: 'top',
                        align: 'center',
                        shouldShow: !0,
                        children: (e, n) => {
                            let { isShown: i } = n;
                            return t(i, () => s(c.L.INDIRECT_ACTION));
                        }
                    })
                  : t(!1);
        }
    });
}
