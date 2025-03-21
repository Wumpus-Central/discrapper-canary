n.d(t, { j: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(704215),
    a = n(481060),
    s = n(605236),
    c = n(243778),
    u = n(667105),
    d = n(695346),
    p = n(819640),
    h = n(885110),
    f = n(626135),
    g = n(316496),
    m = n(55185),
    b = n(981631),
    v = n(921944),
    y = n(46140);
let _ = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: _ } = e,
        [O, j] = (0, i.useState)(!1),
        x = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { rtcPopoutEnabled: n } = (0, g.SN)('SharingPrivacyPopout'),
                { rtcPopoutEnabled: r } = (0, g.m_)('SharingPrivacyPopout'),
                i = (0, u.Ws)({ location: y.dr.CONFLICT_CHECKS }),
                l = d.G6.useSetting(),
                a = (0, o.e7)([p.Z], () => p.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
                s = (0, o.e7)([h.Z], () => h.Z.getStatus()),
                c = (i || (!i && t)) && !a;
            if (c && r) {
                if (!l && s === b.Skl.INVISIBLE) return t ? m.N.ActivityAndStatus : m.N.ActivityAndStatusNux;
                if (!l) return t ? m.N.NewActivity : m.N.NewActivityNux;
                if (s === b.Skl.INVISIBLE) return t ? m.N.Status : null;
            }
            return c && n && !l ? (t ? m.N.Activity : m.N.ActivityNux) : null;
        })({ isForceShowSharingPopout: n });
    return ((0, i.useEffect)(() => {
        n && f.default.track(b.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
    }, [n]),
    null != x || O)
        ? (0, r.jsx)(c.ZP, {
              contentTypes: n ? [] : [l.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i } = e;
                  if (i === l.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          (0, s.EW)(l.z.SHARE_ACTIVITY_COACHMARK_V2, { dismissAction: v.L.USER_DISMISS }), _(!1), j(!1);
                      };
                      return (0, r.jsx)(a.yRy, {
                          shouldShow: !0,
                          spacing: -2,
                          position: 'top',
                          align: 'center',
                          onRequestClose: e,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(m.I, {
                                  closePopout: t,
                                  onOpen: () => j(!0),
                                  popoutState: x
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
