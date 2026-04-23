"use strict";
n.r(t),
    n.d(t, { enable: () => R, isNotSupported: () => N, trackToggleSelfDeaf: () => y, trackToggleSelfMute: () => O });
var i = n(627968);
n(64700);
var r = n(862482),
    s = n(192308),
    a = n(640238),
    o = n(834730),
    l = n(228366),
    d = n(626584),
    _ = n(734057),
    u = n(969341),
    c = n(309010),
    E = n(532624),
    h = n(531685),
    m = n(954571),
    f = n(350535),
    g = n(427603),
    p = n(652215),
    A = n(765682),
    I = n(985018);
let T = new d.A("AudioActionCreators");
function S() {
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
        return (t) => (0, i.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function N() {
    return (
        !u.Ay.isSupported() &&
        ((0, s.openModal)((e) =>
            (0, i.jsx)(a.a, {
                header: I.intl.string(I.t.ilMTy0),
                confirmText: I.intl.string(I.t["BK8LK+"]),
                cancelText: I.intl.string(I.t["ETE/oC"]),
                onConfirm: S,
                confirmButtonColor: r.$n.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(o.E, { variant: "text-md/normal", children: I.intl.string(I.t.h66vlB) }),
            }),
        ),
        !0)
    );
}
function C(e) {
    m.default.track(p.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return N()
        ? Promise.resolve(!1)
        : (m.default.track(p.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
          u.Ay.getMediaEngine()
              .enable()
              .then(
                  () => {
                      l.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                          C(A.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case p.xei.NO_DEVICES_FOUND:
                              C(A.hL.NO_DEVICES);
                              break;
                          case p.xei.PERMISSION_DENIED:
                              C(A.hL.DENIED);
                              break;
                          case p.xei.PERMISSION_DISMISSED:
                              C(A.hL.DISMISSED);
                              break;
                          default:
                              C(A.hL.ERROR), T.warn(`unknown getUserMedia error: ${e}`);
                      }
                  },
              )
              .then(() => !0));
}
function O(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = E.Ay.getKeybindForAction(p.hCu.TOGGLE_MUTE, !1, !0),
        r = c.A.getVoiceChannelId(),
        s = null != r ? _.A.getChannel(r) : null;
    m.default.track(p.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !u.Ay.isSelfMute(),
        custom_keybind_assigned: null != i,
        used_keybind: t,
        app_in_focus: h.A.isAppFocused(),
        overlay_activated: null != (0, g.A)(),
        voice_channel_type: null != s ? s.type : null,
        location: n,
    });
}
function y(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = E.Ay.getKeybindForAction(p.hCu.TOGGLE_DEAFEN, !1, !0),
        r = c.A.getVoiceChannelId(),
        s = null != r ? _.A.getChannel(r) : null;
    m.default.track(p.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !u.Ay.isSelfDeaf(),
        keybind_assigned: null != i ? (0, f.dI)(i.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: h.A.isAppFocused(),
        overlay_activated: null != (0, g.A)(),
        voice_channel_type: null != s ? s.type : null,
        location: n,
    });
}
