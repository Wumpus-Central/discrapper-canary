n.d(t, { j: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(605236),
    c = n(243778),
    u = n(667105),
    d = n(695346),
    p = n(819640),
    h = n(626135),
    f = n(316496),
    g = n(55185),
    m = n(981631),
    b = n(921944),
    y = n(46140);
let v = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: v } = e,
        { rtcPopoutEnabled: O } = (0, f.S)('SharingPrivacyPopout'),
        j = (0, u.Ws)({ location: y.dr.CONFLICT_CHECKS }),
        _ = d.G6.useSetting(),
        [C, x] = (0, i.useState)(!1),
        P = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(m.S9g.USER_SETTINGS));
    return ((0, i.useEffect)(() => {
        n && h.default.track(m.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
    }, [n]),
    O && (j || n) && (!_ || C) && !P)
        ? (0, r.jsx)(c.ZP, {
              contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i } = e;
                  if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          (0, s.EW)(o.z.SHARE_ACTIVITY_COACHMARK_V2, { dismissAction: b.L.USER_DISMISS }), v(!1), x(!1);
                      };
                      return (0, r.jsx)(a.yRy, {
                          shouldShow: !0,
                          position: 'bottom',
                          align: 'center',
                          onRequestClose: e,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return n
                                  ? (0, r.jsx)(g.z, {
                                        closePopout: t,
                                        setToggleDefaultState: x
                                    })
                                  : (0, r.jsx)(g.r, {
                                        closePopout: t,
                                        setToggleDefaultState: x
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
