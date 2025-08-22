n.d(t, { j: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(266454),
    c = n(243778),
    u = n(7093),
    d = n(667105),
    p = n(695346),
    h = n(819640),
    f = n(885110),
    g = n(626135),
    m = n(316496),
    b = n(55185),
    O = n(981631),
    y = n(921944),
    _ = n(46140);
let j = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: j } = e,
        [v, x] = (0, i.useState)(!1),
        C = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isEnabled: n, showActivitySharingIndicatorWhenSharing: r } = (0, m.D)("SharingPrivacyPopout"),
                i = (0, d.Ws)({ location: _.dr.CONFLICT_CHECKS }),
                o = p.G6.useSetting(),
                a = (0, l.e7)([h.Z], () => h.Z.getLayers().includes(O.S9g.USER_SETTINGS)),
                s = (0, l.e7)([f.Z], () => f.Z.getStatus()),
                { isOpen: c } = (0, u.Z)();
            if ((i || (!i && t)) && !a && !c && !__OVERLAY__ && n) {
                if (r && o && s !== O.Skl.INVISIBLE) return t ? b.N.Activity : null;
                if (!o && s === O.Skl.INVISIBLE) return t ? b.N.ActivityAndStatus : b.N.ActivityAndStatusNux;
                if (!o) return t ? b.N.Activity : b.N.ActivityNux;
                if (s === O.Skl.INVISIBLE) return t ? b.N.Status : b.N.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n }),
        E = (0, i.useRef)(null);
    return ((0, i.useEffect)(() => {
        n && g.default.track(O.rMx.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]),
    null != C || v)
        ? (0, r.jsx)(c.ZP, {
              contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
              children: (e) => {
                  let { visibleContent: i } = e;
                  if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
                      let e = () => {
                          (0, s.Q3)(o.z.SHARE_ACTIVITY_COACHMARK_V2, { dismissAction: y.L.USER_DISMISS }), j(!1), x(!1);
                      };
                      return (0, r.jsx)(a.yRy, {
                          targetElementRef: E,
                          shouldShow: !0,
                          spacing: 10,
                          position: "top",
                          align: "left",
                          onRequestClose: e,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(b.I, {
                                  closePopout: t,
                                  onOpen: () => x(!0),
                                  popoutState: C,
                              });
                          },
                          children: () =>
                              (0, r.jsx)(a.P3F, {
                                  innerRef: E,
                                  onClick: e,
                                  children: t,
                              }),
                      });
                  }
                  return t;
              },
          })
        : t;
};
