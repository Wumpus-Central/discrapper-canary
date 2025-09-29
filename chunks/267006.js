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
    g = n(10198);
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
function v() {
    let e = (0, s.e7)([d.Z], () => d.Z.getExperimentalEncoders());
    return (0, r.jsx)(u.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, r.jsx)(l.j7V, {
            className: o()(g.marginTop8, g.marginBottom20),
            value: e,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: !0,
            children: m.intl.string(m.t.AxnPm5),
        }),
    });
}
function I() {
    let { openH264: e, hardwareEncoding: t } = (0, s.cj)([d.Z], () => ({
            openH264: d.Z.getOpenH264(),
            hardwareEncoding: d.Z.getHardwareEncodingSetting(),
        })),
        n = i.useRef(null);
    (0, f.Z)(n, p.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let a = i.useCallback((e) => {
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
    }, []);
    return (0, r.jsxs)(u.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: [
            (0, r.jsx)(u.F, {
                setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                children: (0, r.jsx)(l.j7V, {
                    value: e,
                    onChange: c.Z.setOpenH264,
                    hideBorder: !0,
                    children: m.intl.string(m.t["71Ve19"]),
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(l.j7V, {
                            style: { scrollMarginTop: "48px" },
                            containerRef: n,
                            value: t,
                            onChange: a,
                            note: m.intl.string(m.t.P1UKqq),
                            hideBorder: !0,
                            children: m.intl.string(m.t.Sln58f),
                        }),
                        !t &&
                            (0, r.jsx)(_.Z, {
                                look: _.z.WARNING,
                                children: m.intl.string(m.t["Uz6L6+"]),
                            }),
                    ],
                }),
            }),
            (0, r.jsx)(v, {}),
        ],
    });
}
