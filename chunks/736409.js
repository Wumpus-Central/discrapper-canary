n.d(t, { j: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    s = n(481060),
    a = n(605236),
    c = n(243778),
    u = n(667105),
    d = n(695346),
    h = n(819640),
    p = n(885110),
    f = n(626135),
    g = n(316496),
    m = n(55185),
    b = n(981631),
    y = n(921944),
    _ = n(46140);
let O = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: O } = e,
        [v, C] = (0, i.useState)(!1),
        j = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { rtcPopoutEnabled: n } = (0, g.SN)('SharingPrivacyPopout'),
                { rtcPopoutEnabled: r } = (0, g.m_)('SharingPrivacyPopout'),
                i = (0, u.Ws)({ location: _.dr.CONFLICT_CHECKS }),
                o = d.G6.useSetting(),
                s = (0, l.e7)([h.Z], () => h.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
                a = (0, l.e7)([p.Z], () => p.Z.getStatus()),
                c = (i || (!i && t)) && !s;
            if (c && r) {
                if (!o && a === b.Skl.INVISIBLE) return t ? m.N.ActivityAndStatus : m.N.ActivityAndStatusNux;
                if (!o) return t ? m.N.NewActivity : m.N.NewActivityNux;
                if (a === b.Skl.INVISIBLE) return t ? m.N.Status : null;
            }
            return c && n && !o ? (t ? m.N.Activity : m.N.ActivityNux) : null;
        })({ isForceShowSharingPopout: n }),
        x = (0, i.useRef)(null);
    return ((0, i.useEffect)(() => {
        n && f.default.track(b.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
    }, [n]),
    null != j || v)
        ? (0, r.jsx)(c.ZP, {
              contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i } = e;
                  if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          (0, a.EW)(o.z.SHARE_ACTIVITY_COACHMARK_V2, { dismissAction: y.L.USER_DISMISS }), O(!1), C(!1);
                      };
                      return (0, r.jsx)(s.yRy, {
                          targetElementRef: x,
                          shouldShow: !0,
                          spacing: -2,
                          position: 'top',
                          align: 'center',
                          onRequestClose: e,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(m.I, {
                                  closePopout: t,
                                  onOpen: () => C(!0),
                                  popoutState: j
                              });
                          },
                          children: () =>
                              (0, r.jsx)(s.P3F, {
                                  innerRef: x,
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
