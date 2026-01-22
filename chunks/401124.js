n.r(t),
    n.d(t, {
        enable: () => C,
        isNotSupported: () => I,
        trackToggleSelfDeaf: () => R,
        trackToggleSelfMute: () => N,
    });
var r = n(627968);
n(64700);
var i = n(421380),
    a = n(397927),
    s = n(73153),
    o = n(626584),
    l = n(734057),
    c = n(430452),
    u = n(309010),
    d = n(532624),
    f = n(531685),
    p = n(954571),
    _ = n(350535),
    h = n(427603),
    m = n(652215),
    g = n(765682),
    E = n(985018);

function b(e, t, n) {
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

function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
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

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new o.A("AudioActionCreators");

function S() {
    (0, a.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
        return (t) =>
            (0, r.jsx)(
                e,
                y(
                    {
                        source: "Unsupported Browser",
                    },
                    t,
                ),
            );
    });
}

function I() {
    return (
        !c.A.isSupported() &&
        ((0, a.qfG)((e) =>
            (0, r.jsx)(
                a.VoidConfirmModal,
                A(
                    y(
                        {
                            header: E.intl.string(E.t.ilMTy0),
                            confirmText: E.intl.string(E.t["BK8LK+"]),
                            cancelText: E.intl.string(E.t["ETE/oC"]),
                            onConfirm: S,
                            confirmButtonColor: i.$n.Colors.BRAND,
                        },
                        e,
                    ),
                    {
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E.intl.string(E.t.h66vlB),
                        }),
                    },
                ),
            ),
        ),
        !0)
    );
}

function T(e) {
    p.default.track(m.HAw.PERMISSIONS_ACKED, {
        type: "audio",
        action: e,
    });
}

function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return I()
        ? Promise.resolve(!1)
        : (p.default.track(m.HAw.PERMISSIONS_REQUESTED, {
              type: "audio",
          }),
          c.A.getMediaEngine()
              .enable()
              .then(
                  () => {
                      s.h.dispatch({
                          type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                          enabled: !0,
                          unmute: e,
                      }),
                          T(g.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case m.xei.NO_DEVICES_FOUND:
                              T(g.hL.NO_DEVICES);
                              break;
                          case m.xei.PERMISSION_DENIED:
                              T(g.hL.DENIED);
                              break;
                          case m.xei.PERMISSION_DISMISSED:
                              T(g.hL.DISMISSED);
                              break;
                          default:
                              T(g.hL.ERROR), v.warn("unknown getUserMedia error: ".concat(e));
                      }
                  },
              )
              .then(() => !0));
}

function N(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.Ay.getKeybindForAction(m.hCu.TOGGLE_MUTE, !1, !0),
        i = u.A.getVoiceChannelId(),
        a = null != i ? l.A.getChannel(i) : null;
    p.default.track(m.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !c.A.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== d.xC.id,
        used_keybind: t,
        app_in_focus: f.A.isAppFocused(),
        overlay_activated: null != (0, h.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}

function R(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.Ay.getKeybindForAction(m.hCu.TOGGLE_DEAFEN, !1, !0),
        i = u.A.getVoiceChannelId(),
        a = null != i ? l.A.getChannel(i) : null;
    p.default.track(m.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !c.A.isSelfDeaf(),
        keybind_assigned: null != r ? (0, _.dI)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: f.A.isAppFocused(),
        overlay_activated: null != (0, h.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
