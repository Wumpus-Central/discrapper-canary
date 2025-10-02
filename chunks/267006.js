n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(921801),
    c = n(131951),
    u = n(996073),
    d = n(494620),
    f = n(526761),
    _ = n(726985),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b() {
    let e = (0, a.e7)([c.Z], () => c.Z.getExperimentalEncoders());
    return (0, r.jsx)(l.F, {
        setting: _.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, r.jsx)(o.rsf, {
            label: p.intl.string(p.t.AxnPm5),
            checked: e,
            onChange: s.Z.setExperimentalEncoders,
        }),
    });
}
function y() {
    let { openH264: e, hardwareEncoding: t } = (0, a.cj)([c.Z], () => ({
            openH264: c.Z.getOpenH264(),
            hardwareEncoding: c.Z.getHardwareEncodingSetting(),
        })),
        n = i.useRef(null);
    (0, u.Z)(n, f.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let h = i.useCallback((e) => {
        e
            ? s.Z.setHardwareEncoding(!0)
            : (0, o.h7j)((e) =>
                  (0, r.jsx)(
                      o.ConfirmModal,
                      E(
                          m(
                              {
                                  header: p.intl.string(p.t.mly1DA),
                                  confirmText: p.intl.string(p.t.BddRzc),
                                  cancelText: p.intl.string(p.t["ETE/oK"]),
                                  onConfirm: () => s.Z.setHardwareEncoding(!1),
                              },
                              e,
                          ),
                          {
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  children: p.intl.format(p.t.aPStAQ, {}),
                              }),
                          },
                      ),
                  ),
              );
    }, []);
    return (0, r.jsx)(l.F, {
        setting: _.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: (0, r.jsxs)(o.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(l.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                    children: (0, r.jsx)(o.rsf, {
                        label: p.intl.string(p.t["71Ve19"]),
                        checked: e,
                        onChange: s.Z.setOpenH264,
                    }),
                }),
                (0, r.jsxs)(l.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                    children: [
                        (0, r.jsx)("div", {
                            ref: n,
                            style: { scrollMarginTop: "48px" },
                            children: (0, r.jsx)(o.rsf, {
                                label: p.intl.string(p.t.Sln58f),
                                description: p.intl.string(p.t.P1UKqq),
                                checked: t,
                                onChange: h,
                            }),
                        }),
                        !t &&
                            (0, r.jsx)(d.Z, {
                                look: d.z.WARNING,
                                children: p.intl.string(p.t["Uz6L6+"]),
                            }),
                    ],
                }),
                (0, r.jsx)(b, {}),
            ],
        }),
    });
}
