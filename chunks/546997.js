n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(755721),
    a = n(481060),
    l = n(846027),
    o = n(579806),
    c = n(921801),
    d = n(131951),
    u = n(358085),
    m = n(726985),
    p = n(388032),
    g = n(20493);
function h(e) {
    (0, u.isMac)() && e
        ? (0, a.ZDy)(async () => {
              let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 878678));
              return (n) => {
                  var r, c;
                  return (0, i.jsx)(
                      t,
                      ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      ((i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = i));
                                  }));
                          }
                          return e;
                      })({}, n)),
                      (c = c =
                          {
                              onConfirm: () => {
                                  (l.Z.setUseSystemScreensharePicker(e), o.Z.app.relaunch());
                              },
                              confirmButtonColor: s.zx.Colors.BRAND,
                              header: p.intl.string(p.t['9jf31N']),
                              cancelText: p.intl.string(p.t['ETE/oK']),
                              confirmText: p.intl.string(p.t.BddRzc),
                              children: (0, i.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  children: p.intl.string(p.t.uBd6JS)
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(c)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                            }),
                      r)
                  );
              };
          })
        : l.Z.setUseSystemScreensharePicker(e);
}
function f(e) {
    let { refreshStyles: t = !1 } = e,
        {
            videoHook: n,
            experimentalSoundshare: s,
            useSystemScreensharePicker: o
        } = (0, r.cj)([d.Z], () => ({
            videoHook: d.Z.getVideoHook(),
            experimentalSoundshare: d.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: d.Z.getUseSystemScreensharePicker()
        })),
        u = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.F, {
                    setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, i.jsx)(a.j7V, {
                        value: n,
                        onChange: (e) => l.Z.setVideoHook(e),
                        note: p.intl.string(p.t['Fj/xn5']),
                        hideBorder: t,
                        children: p.intl.string(p.t.GmWk2N)
                    })
                }),
                (0, i.jsx)(c.F, {
                    setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, i.jsx)(a.j7V, {
                        value: s,
                        onChange: (e) => l.Z.setExperimentalSoundshare(e),
                        hideBorder: t,
                        children: p.intl.string(p.t['4I0qzc'])
                    })
                }),
                (0, i.jsx)(c.F, {
                    setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, i.jsx)(a.j7V, {
                        value: o,
                        onChange: h,
                        hideBorder: t,
                        children: p.intl.string(p.t.ie1mgY)
                    })
                })
            ]
        });
    return (0, i.jsx)(c.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: t
            ? u
            : (0, i.jsx)(a.hjN, {
                  className: g.marginBottom20,
                  title: p.intl.string(p.t.NMCIf3),
                  children: u
              })
    });
}
