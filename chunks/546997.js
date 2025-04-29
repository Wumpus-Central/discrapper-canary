n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    l = n(846027),
    a = n(579806),
    o = n(921801),
    c = n(131951),
    d = n(358085),
    u = n(726985),
    m = n(388032),
    p = n(20493);
function g(e) {
    (0, d.isMac)() && e
        ? (0, s.ZDy)(async () => {
              let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 878678));
              return (n) => {
                  var r, o;
                  return (0, i.jsx)(
                      t,
                      ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({}, n)),
                      (o = o =
                          {
                              onConfirm: () => {
                                  l.Z.setUseSystemScreensharePicker(e), a.Z.app.relaunch();
                              },
                              confirmButtonColor: s.zxk.Colors.BRAND,
                              header: m.intl.string(m.t['9jf31N']),
                              cancelText: m.intl.string(m.t['ETE/oK']),
                              confirmText: m.intl.string(m.t.BddRzc),
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  children: m.intl.string(m.t.uBd6JS)
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      r)
                  );
              };
          })
        : l.Z.setUseSystemScreensharePicker(e);
}
function h(e) {
    let { refreshStyles: t = !1 } = e,
        {
            videoHook: n,
            experimentalSoundshare: a,
            useSystemScreensharePicker: d
        } = (0, r.cj)([c.Z], () => ({
            videoHook: c.Z.getVideoHook(),
            experimentalSoundshare: c.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: c.Z.getUseSystemScreensharePicker()
        })),
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.F, {
                    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, i.jsx)(s.j7V, {
                        value: n,
                        onChange: (e) => l.Z.setVideoHook(e),
                        note: m.intl.string(m.t['Fj/xn5']),
                        hideBorder: t,
                        children: m.intl.string(m.t.GmWk2N)
                    })
                }),
                (0, i.jsx)(o.F, {
                    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, i.jsx)(s.j7V, {
                        value: a,
                        onChange: (e) => l.Z.setExperimentalSoundshare(e),
                        hideBorder: t,
                        children: m.intl.string(m.t['4I0qzc'])
                    })
                }),
                (0, i.jsx)(o.F, {
                    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, i.jsx)(s.j7V, {
                        value: d,
                        onChange: g,
                        hideBorder: t,
                        children: m.intl.string(m.t.ie1mgY)
                    })
                })
            ]
        });
    return (0, i.jsx)(o.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: t
            ? h
            : (0, i.jsx)(s.hjN, {
                  className: p.marginBottom20,
                  title: m.intl.string(m.t.NMCIf3),
                  children: h
              })
    });
}
