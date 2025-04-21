n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(921801),
    u = n(131951),
    m = n(996073),
    g = n(494620),
    p = n(526761),
    h = n(726985),
    f = n(388032),
    b = n(20493);
function _(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getExperimentalEncoders());
    return (0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, i.jsx)(o.j7V, {
            className: l()(b.marginTop8, b.marginBottom20),
            value: n,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: t,
            children: f.intl.string(f.t.AxnPm5)
        })
    });
}
function x(e) {
    let { refreshStyles: t = !1 } = e,
        { openH264: n, hardwareEncoding: s } = (0, a.cj)([u.Z], () => ({
            openH264: u.Z.getOpenH264(),
            hardwareEncoding: u.Z.getHardwareEncoding()
        })),
        x = r.useRef(null);
    (0, m.Z)(x, p.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let E = r.useCallback((e) => {
            e
                ? c.Z.setHardwareEncoding(!0)
                : (0, o.h7j)((e) => {
                      var t, n;
                      return (0, i.jsx)(
                          o.ConfirmModal,
                          ((t = (function (e) {
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
                          })(
                              {
                                  header: f.intl.string(f.t.mly1DA),
                                  confirmText: f.intl.string(f.t.BddRzc),
                                  cancelText: f.intl.string(f.t['ETE/oK']),
                                  onConfirm: () => c.Z.setHardwareEncoding(!1)
                              },
                              e
                          )),
                          (n = n =
                              {
                                  children: (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      children: f.intl.format(f.t.aPStAQ, {})
                                  })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t)
                      );
                  });
        }, []),
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.F, {
                    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                    children: (0, i.jsx)(o.j7V, {
                        className: t ? null : l()(b.marginTop8, b.marginBottom20),
                        value: n,
                        onChange: c.Z.setOpenH264,
                        hideBorder: t,
                        children: f.intl.string(f.t['71Ve19'])
                    })
                }),
                (0, i.jsx)(d.F, {
                    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(o.j7V, {
                                style: { scrollMarginTop: '48px' },
                                containerRef: x,
                                className: t ? null : l()(b.marginTop8, b.marginBottom20),
                                value: s,
                                onChange: E,
                                note: f.intl.string(f.t.P1UKqq),
                                hideBorder: t,
                                children: f.intl.string(f.t.Sln58f)
                            }),
                            !s &&
                                (0, i.jsx)(g.Z, {
                                    look: g.z.WARNING,
                                    children: f.intl.string(f.t['Uz6L6+'])
                                })
                        ]
                    })
                }),
                (0, i.jsx)(_, { refreshStyles: t })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: t
            ? j
            : (0, i.jsx)(o.hjN, {
                  className: b.marginBottom20,
                  title: f.intl.string(f.t.Tceiq6),
                  children: j
              })
    });
}
