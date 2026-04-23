"use strict";
n.r(t),
    n.d(t, { enable: () => v, isNotSupported: () => y, trackToggleSelfDeaf: () => O, trackToggleSelfMute: () => C });
var r = n(627968);
n(64700);
var i = n(862482),
    s = n(192308),
    a = n(640238),
    o = n(834730),
    l = n(73153),
    u = n(626584),
    c = n(734057),
    d = n(430452),
    _ = n(309010),
    f = n(532624),
    p = n(531685),
    h = n(954571),
    E = n(350535),
    m = n(427603),
    g = n(652215),
    A = n(765682),
    I = n(985018);
let T = new u.A("AudioActionCreators");
function S() {
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
        return (t) => (0, r.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function y() {
    return (
        !d.Ay.isSupported() &&
        ((0, s.openModal)((e) =>
            (0, r.jsx)(a.a, {
                header: I.intl.string(I.t.ilMTy0),
                confirmText: I.intl.string(I.t["BK8LK+"]),
                cancelText: I.intl.string(I.t["ETE/oC"]),
                onConfirm: S,
                confirmButtonColor: i.$n.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(o.E, { variant: "text-md/normal", children: I.intl.string(I.t.h66vlB) }),
            }),
        ),
        !0)
    );
}
function N(e) {
    h.default.track(g.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
function v() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return y()
        ? Promise.resolve(!1)
        : (h.default.track(g.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
          d.Ay.getMediaEngine()
              .enable()
              .then(
                  () => {
                      l.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                          N(A.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case g.xei.NO_DEVICES_FOUND:
                              N(A.hL.NO_DEVICES);
                              break;
                          case g.xei.PERMISSION_DENIED:
                              N(A.hL.DENIED);
                              break;
                          case g.xei.PERMISSION_DISMISSED:
                              N(A.hL.DISMISSED);
                              break;
                          default:
                              N(A.hL.ERROR), T.warn(`unknown getUserMedia error: ${e}`);
                      }
                  },
              )
              .then(() => !0));
}
function C(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = f.Ay.getKeybindForAction(g.hCu.TOGGLE_MUTE, !1, !0),
        i = _.A.getVoiceChannelId(),
        s = null != i ? c.A.getChannel(i) : null;
    h.default.track(g.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !d.Ay.isSelfMute(),
        custom_keybind_assigned: null != r,
        used_keybind: t,
        app_in_focus: p.A.isAppFocused(),
        overlay_activated: null != (0, m.A)(),
        voice_channel_type: null != s ? s.type : null,
        location: n,
    });
}
function O(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = f.Ay.getKeybindForAction(g.hCu.TOGGLE_DEAFEN, !1, !0),
        i = _.A.getVoiceChannelId(),
        s = null != i ? c.A.getChannel(i) : null;
    h.default.track(g.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !d.Ay.isSelfDeaf(),
        keybind_assigned: null != r ? (0, E.dI)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: p.A.isAppFocused(),
        overlay_activated: null != (0, m.A)(),
        voice_channel_type: null != s ? s.type : null,
        location: n,
    });
}
