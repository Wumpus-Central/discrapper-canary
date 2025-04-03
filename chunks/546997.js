n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(579806),
    o = n(921801),
    c = n(131951),
    d = n(358085),
    u = n(726985),
    m = n(388032),
    g = n(20493);
function p(e) {
    (0, d.isMac)() && e
        ? (0, s.ZDy)(async () => {
              let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 878678));
              return (n) => {
                  var i, o;
                  return (0, r.jsx)(
                      t,
                      ((i = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, n)),
                      (o = o =
                          {
                              onConfirm: () => {
                                  a.Z.setUseSystemScreensharePicker(e), l.Z.app.relaunch();
                              },
                              confirmButtonColor: s.zxk.Colors.BRAND,
                              header: m.NW.string(m.t['9jf31N']),
                              cancelText: m.NW.string(m.t['ETE/oK']),
                              confirmText: m.NW.string(m.t.BddRzc),
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  children: m.NW.string(m.t.uBd6JS)
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      i)
                  );
              };
          })
        : a.Z.setUseSystemScreensharePicker(e);
}
function h(e) {
    let { refreshStyles: t = !1 } = e,
        {
            videoHook: n,
            experimentalSoundshare: l,
            useSystemScreensharePicker: d
        } = (0, i.cj)([c.Z], () => ({
            videoHook: c.Z.getVideoHook(),
            experimentalSoundshare: c.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: c.Z.getUseSystemScreensharePicker()
        })),
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.F, {
                    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, r.jsx)(s.j7V, {
                        value: n,
                        onChange: (e) => a.Z.setVideoHook(e),
                        note: m.NW.string(m.t['Fj/xn5']),
                        hideBorder: t,
                        children: m.NW.string(m.t.GmWk2N)
                    })
                }),
                (0, r.jsx)(o.F, {
                    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, r.jsx)(s.j7V, {
                        value: l,
                        onChange: (e) => a.Z.setExperimentalSoundshare(e),
                        hideBorder: t,
                        children: m.NW.string(m.t['4I0qzc'])
                    })
                }),
                (0, r.jsx)(o.F, {
                    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, r.jsx)(s.j7V, {
                        value: d,
                        onChange: p,
                        hideBorder: t,
                        children: m.NW.string(m.t.ie1mgY)
                    })
                })
            ]
        });
    return (0, r.jsx)(o.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: t
            ? h
            : (0, r.jsx)(s.hjN, {
                  className: g.marginBottom20,
                  title: m.NW.string(m.t.NMCIf3),
                  children: h
              })
    });
}
