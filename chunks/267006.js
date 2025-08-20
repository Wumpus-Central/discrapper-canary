n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(846027),
    u = n(921801),
    d = n(131951),
    f = n(996073),
    _ = n(494620),
    p = n(526761),
    h = n(726985),
    m = n(388032),
    g = n(197571);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getExperimentalEncoders());
    return (0, r.jsx)(u.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, r.jsx)(l.j7V, {
            className: o()(g.marginTop8, g.marginBottom20),
            value: n,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: t,
            children: m.intl.string(m.t.AxnPm5),
        }),
    });
}
function I(e) {
    let { refreshStyles: t = !1 } = e,
        { openH264: n, hardwareEncoding: a } = (0, s.cj)([d.Z], () => ({
            openH264: d.Z.getOpenH264(),
            hardwareEncoding: d.Z.getHardwareEncodingSetting(),
        })),
        E = i.useRef(null);
    (0, f.Z)(E, p.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let y = i.useCallback((e) => {
            e
                ? c.Z.setHardwareEncoding(!0)
                : (0, l.h7j)((e) =>
                      (0, r.jsx)(
                          l.ConfirmModal,
                          O(
                              b(
                                  {
                                      header: m.intl.string(m.t.mly1DA),
                                      confirmText: m.intl.string(m.t.BddRzc),
                                      cancelText: m.intl.string(m.t["ETE/oK"]),
                                      onConfirm: () => c.Z.setHardwareEncoding(!1),
                                  },
                                  e,
                              ),
                              {
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      children: m.intl.format(m.t.aPStAQ, {}),
                                  }),
                              },
                          ),
                      ),
                  );
        }, []),
        I = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.F, {
                    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                    children: (0, r.jsx)(l.j7V, {
                        className: t ? null : o()(g.marginTop8, g.marginBottom20),
                        value: n,
                        onChange: c.Z.setOpenH264,
                        hideBorder: t,
                        children: m.intl.string(m.t["71Ve19"]),
                    }),
                }),
                (0, r.jsx)(u.F, {
                    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(l.j7V, {
                                style: { scrollMarginTop: "48px" },
                                containerRef: E,
                                className: t ? null : o()(g.marginTop8, g.marginBottom20),
                                value: a,
                                onChange: y,
                                note: m.intl.string(m.t.P1UKqq),
                                hideBorder: t,
                                children: m.intl.string(m.t.Sln58f),
                            }),
                            !a &&
                                (0, r.jsx)(_.Z, {
                                    look: _.z.WARNING,
                                    children: m.intl.string(m.t["Uz6L6+"]),
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)(v, { refreshStyles: t }),
            ],
        });
    return (0, r.jsx)(u.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: t
            ? I
            : (0, r.jsx)(l.hjN, {
                  className: g.marginBottom20,
                  title: m.intl.string(m.t.Tceiq6),
                  children: I,
              }),
    });
}
