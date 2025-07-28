(n.d(t, { j: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(266454),
    c = n(243778),
    u = n(7093),
    d = n(667105),
    h = n(695346),
    p = n(819640),
    f = n(885110),
    g = n(626135),
    m = n(316496),
    b = n(55185),
    _ = n(981631),
    O = n(921944),
    y = n(46140);
let C = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: C } = e,
        [v, j] = (0, i.useState)(!1),
        E = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isEnabled: n, showActivitySharingIndicatorWhenSharing: r } = (0, m.D)('SharingPrivacyPopout'),
                i = (0, d.Ws)({ location: y.dr.CONFLICT_CHECKS }),
                o = h.G6.useSetting(),
                a = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(_.S9g.USER_SETTINGS)),
                s = (0, l.e7)([f.Z], () => f.Z.getStatus()),
                { isOpen: c } = (0, u.Z)();
            if ((i || (!i && t)) && !a && !c && !__OVERLAY__ && n) {
                if (r && o && s !== _.Skl.INVISIBLE) return t ? b.N.Activity : null;
                if (!o && s === _.Skl.INVISIBLE) return t ? b.N.ActivityAndStatus : b.N.ActivityAndStatusNux;
                if (!o) return t ? b.N.Activity : b.N.ActivityNux;
                if (s === _.Skl.INVISIBLE) return t ? b.N.Status : b.N.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n }),
        S = (0, i.useRef)(null);
    return ((0, i.useEffect)(() => {
        n && g.default.track(_.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
    }, [n]),
    null != E || v)
        ? (0, r.jsx)(c.ZP, {
              contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i } = e;
                  if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          ((0, s.Q3)(o.z.SHARE_ACTIVITY_COACHMARK_V2, { dismissAction: O.L.USER_DISMISS }), C(!1), j(!1));
                      };
                      return (0, r.jsx)(a.yRy, {
                          targetElementRef: S,
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
                                  popoutState: E
                              });
                          },
                          children: () =>
                              (0, r.jsx)(a.P3F, {
                                  innerRef: S,
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
