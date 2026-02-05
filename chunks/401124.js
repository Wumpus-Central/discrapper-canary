"use strict";
n.r(t),
    n.d(t, { enable: () => S, isNotSupported: () => T, trackToggleSelfDeaf: () => C, trackToggleSelfMute: () => v });
var r = n(627968);
n(64700);
var i = n(421380),
    a = n(397927),
    s = n(73153),
    o = n(626584),
    l = n(734057),
    u = n(430452),
    c = n(309010),
    d = n(532624),
    _ = n(531685),
    f = n(954571),
    p = n(350535),
    h = n(427603),
    m = n(652215),
    g = n(765682),
    E = n(985018);
let A = new o.A("AudioActionCreators");
function I() {
    (0, a.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
        return (t) => (0, r.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function T() {
    return (
        !u.A.isSupported() &&
        ((0, a.qfG)((e) =>
            (0, r.jsx)(a.VoidConfirmModal, {
                header: E.intl.string(E.t.ilMTy0),
                confirmText: E.intl.string(E.t["BK8LK+"]),
                cancelText: E.intl.string(E.t["ETE/oC"]),
                onConfirm: I,
                confirmButtonColor: i.$n.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(a.Text, { variant: "text-md/normal", children: E.intl.string(E.t.h66vlB) }),
            }),
        ),
        !0)
    );
}
function y(e) {
    f.default.track(m.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
function S() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return T()
        ? Promise.resolve(!1)
        : (f.default.track(m.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
          u.A.getMediaEngine()
              .enable()
              .then(
                  () => {
                      s.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                          y(g.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case m.xei.NO_DEVICES_FOUND:
                              y(g.hL.NO_DEVICES);
                              break;
                          case m.xei.PERMISSION_DENIED:
                              y(g.hL.DENIED);
                              break;
                          case m.xei.PERMISSION_DISMISSED:
                              y(g.hL.DISMISSED);
                              break;
                          default:
                              y(g.hL.ERROR), A.warn(`unknown getUserMedia error: ${e}`);
                      }
                  },
              )
              .then(() => !0));
}
function v(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.Ay.getKeybindForAction(m.hCu.TOGGLE_MUTE, !1, !0),
        i = c.A.getVoiceChannelId(),
        a = null != i ? l.A.getChannel(i) : null;
    f.default.track(m.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !u.A.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== d.xC.id,
        used_keybind: t,
        app_in_focus: _.A.isAppFocused(),
        overlay_activated: null != (0, h.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
function C(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.Ay.getKeybindForAction(m.hCu.TOGGLE_DEAFEN, !1, !0),
        i = c.A.getVoiceChannelId(),
        a = null != i ? l.A.getChannel(i) : null;
    f.default.track(m.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !u.A.isSelfDeaf(),
        keybind_assigned: null != r ? (0, p.dI)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: _.A.isAppFocused(),
        overlay_activated: null != (0, h.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
