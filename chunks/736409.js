n.d(t, { j: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(243778),
    c = n(667105),
    u = n(695346),
    d = n(819640),
    p = n(626135),
    h = n(316496),
    f = n(55185),
    g = n(981631),
    m = n(921944),
    b = n(46140);
let y = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: y } = e,
        { rtcPopoutEnabled: v } = (0, h.S)('SharingPrivacyPopout'),
        O = (0, c.Ws)({ location: b.dr.CONFLICT_CHECKS }),
        j = u.G6.useSetting(),
        [_, C] = (0, i.useState)(!1),
        x = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(g.S9g.USER_SETTINGS));
    return ((0, i.useEffect)(() => {
        n && p.default.track(g.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
    }, [n]),
    v && (O || n) && (!j || _) && !x)
        ? (0, r.jsx)(s.ZP, {
              contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i, markAsDismissed: l } = e;
                  if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          l(m.L.USER_DISMISS), y(!1), C(!1);
                      };
                      return (0, r.jsx)(a.yRy, {
                          shouldShow: !0,
                          position: 'bottom',
                          align: 'center',
                          onRequestClose: e,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return n
                                  ? (0, r.jsx)(f.z, {
                                        closePopout: t,
                                        setToggleDefaultState: C
                                    })
                                  : (0, r.jsx)(f.r, {
                                        closePopout: t,
                                        setToggleDefaultState: C
                                    });
                          },
                          children: () =>
                              (0, r.jsx)(a.P3F, {
                                  onClick: e,
                                  children: t
                              })
                      });
                  }
                  return t;
              }
          })
        : t;
};
