n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
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
        n = (0, l.e7)([u.Z], () => u.Z.getExperimentalEncoders());
    return (0, r.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, r.jsx)(o.j7V, {
            className: a()(b.marginTop8, b.marginBottom20),
            value: n,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: t,
            children: f.NW.string(f.t.AxnPm5)
        })
    });
}
function N(e) {
    let { refreshStyles: t = !1 } = e,
        { openH264: n, hardwareEncoding: s } = (0, l.cj)([u.Z], () => ({
            openH264: u.Z.getOpenH264(),
            hardwareEncoding: u.Z.getHardwareEncoding()
        })),
        N = i.useRef(null);
    (0, m.Z)(N, p.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let x = i.useCallback((e) => {
            e
                ? c.Z.setHardwareEncoding(!0)
                : (0, o.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          o.ConfirmModal,
                          ((t = (function (e) {
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
                          })(
                              {
                                  header: f.NW.string(f.t.mly1DA),
                                  confirmText: f.NW.string(f.t.BddRzc),
                                  cancelText: f.NW.string(f.t['ETE/oK']),
                                  onConfirm: () => c.Z.setHardwareEncoding(!1)
                              },
                              e
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      children: f.NW.format(f.t.aPStAQ, {})
                                  })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t)
                      );
                  });
        }, []),
        E = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.F, {
                    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                    children: (0, r.jsx)(o.j7V, {
                        className: t ? null : a()(b.marginTop8, b.marginBottom20),
                        value: n,
                        onChange: c.Z.setOpenH264,
                        hideBorder: t,
                        children: f.NW.string(f.t['71Ve19'])
                    })
                }),
                (0, r.jsx)(d.F, {
                    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.j7V, {
                                style: { scrollMarginTop: '48px' },
                                containerRef: N,
                                className: t ? null : a()(b.marginTop8, b.marginBottom20),
                                value: s,
                                onChange: x,
                                note: f.NW.string(f.t.P1UKqq),
                                hideBorder: t,
                                children: f.NW.string(f.t.Sln58f)
                            }),
                            !s &&
                                (0, r.jsx)(g.Z, {
                                    look: g.z.WARNING,
                                    children: f.NW.string(f.t['Uz6L6+'])
                                })
                        ]
                    })
                }),
                (0, r.jsx)(_, { refreshStyles: t })
            ]
        });
    return (0, r.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: t
            ? E
            : (0, r.jsx)(o.hjN, {
                  className: b.marginBottom20,
                  title: f.NW.string(f.t.Tceiq6),
                  children: E
              })
    });
}
