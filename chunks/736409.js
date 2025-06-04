n.d(t, { j: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    s = n(481060),
    a = n(605236),
    c = n(243778),
    u = n(7093),
    d = n(667105),
    h = n(695346),
    p = n(819640),
    f = n(885110),
    g = n(626135),
    m = n(316496),
    b = n(55185),
    y = n(981631),
    O = n(921944),
    v = n(46140);
let _ = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: _ } = e,
        [C, j] = (0, i.useState)(!1),
        S = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isEnabled: n, showActivitySharingIndicatorWhenSharing: r } = (0, m.D)('SharingPrivacyPopout'),
                i = (0, d.Ws)({ location: v.dr.CONFLICT_CHECKS }),
                o = h.G6.useSetting(),
                s = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(y.S9g.USER_SETTINGS)),
                a = (0, l.e7)([f.Z], () => f.Z.getStatus()),
                { isOpen: c } = (0, u.Z)();
            if ((i || (!i && t)) && !s && !c && n) {
                if (r && o && a !== y.Skl.INVISIBLE) return t ? b.N.Activity : null;
                if (!o && a === y.Skl.INVISIBLE) return t ? b.N.ActivityAndStatus : b.N.ActivityAndStatusNux;
                if (!o) return t ? b.N.Activity : b.N.ActivityNux;
                if (a === y.Skl.INVISIBLE) return t ? b.N.Status : b.N.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n }),
        x = (0, i.useRef)(null);
    return ((0, i.useEffect)(() => {
        n && g.default.track(y.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
    }, [n]),
    null != S || C)
        ? (0, r.jsx)(c.ZP, {
              contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i } = e;
                  if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          (0, a.EW)(o.z.SHARE_ACTIVITY_COACHMARK_V2, { dismissAction: O.L.USER_DISMISS }), _(!1), j(!1);
                      };
                      return (0, r.jsx)(s.yRy, {
                          targetElementRef: x,
                          shouldShow: !0,
                          spacing: 10,
                          position: 'top',
                          align: 'left',
                          onRequestClose: e,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(b.I, {
                                  closePopout: t,
                                  onOpen: () => j(!0),
                                  popoutState: S
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
