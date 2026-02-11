"use strict";
n.r(t),
    n.d(t, { enable: () => v, isNotSupported: () => y, trackToggleSelfDeaf: () => b, trackToggleSelfMute: () => C });
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
    h = n(350535),
    p = n(427603),
    g = n(652215),
    E = n(765682),
    A = n(985018);
let I = new o.A("AudioActionCreators");
function T() {
    (0, a.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
        return (t) => (0, r.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function y() {
    return (
        !u.Ay.isSupported() &&
        ((0, a.qfG)((e) =>
            (0, r.jsx)(a.VoidConfirmModal, {
                header: A.intl.string(A.t.ilMTy0),
                confirmText: A.intl.string(A.t["BK8LK+"]),
                cancelText: A.intl.string(A.t["ETE/oC"]),
                onConfirm: T,
                confirmButtonColor: i.$n.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(a.Text, { variant: "text-md/normal", children: A.intl.string(A.t.h66vlB) }),
            }),
        ),
        !0)
    );
}
function S(e) {
    f.default.track(g.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
function v() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return y()
        ? Promise.resolve(!1)
        : (f.default.track(g.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
          u.Ay.getMediaEngine()
              .enable()
              .then(
                  () => {
                      s.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                          S(E.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case g.xei.NO_DEVICES_FOUND:
                              S(E.hL.NO_DEVICES);
                              break;
                          case g.xei.PERMISSION_DENIED:
                              S(E.hL.DENIED);
                              break;
                          case g.xei.PERMISSION_DISMISSED:
                              S(E.hL.DISMISSED);
                              break;
                          default:
                              S(E.hL.ERROR), I.warn(`unknown getUserMedia error: ${e}`);
                      }
                  },
              )
              .then(() => !0));
}
function C(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.Ay.getKeybindForAction(g.hCu.TOGGLE_MUTE, !1, !0),
        i = c.A.getVoiceChannelId(),
        a = null != i ? l.A.getChannel(i) : null;
    f.default.track(g.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !u.Ay.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== d.xC.id,
        used_keybind: t,
        app_in_focus: _.A.isAppFocused(),
        overlay_activated: null != (0, p.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
function b(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.Ay.getKeybindForAction(g.hCu.TOGGLE_DEAFEN, !1, !0),
        i = c.A.getVoiceChannelId(),
        a = null != i ? l.A.getChannel(i) : null;
    f.default.track(g.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !u.Ay.isSelfDeaf(),
        keybind_assigned: null != r ? (0, h.dI)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: _.A.isAppFocused(),
        overlay_activated: null != (0, p.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
