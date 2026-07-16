"use strict";
n.r(t),
    n.d(t, { enable: () => R, isNotSupported: () => N, trackToggleSelfDeaf: () => L, trackToggleSelfMute: () => O });
var i = n(627968);
n(64700);
var r = n(862482),
    a = n(192308),
    s = n(640238),
    l = n(834730),
    o = n(228366),
    d = n(626584),
    c = n(734057),
    u = n(186295),
    _ = n(309010),
    E = n(532624),
    A = n(531685),
    h = n(174459),
    I = n(350535),
    f = n(427603),
    p = n(652215),
    T = n(765682),
    m = n(375708);
let g = new d.A("AudioActionCreators");
function S() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("17951"), n.e("15799"), n.e("44602"), n.e("25280")]).then(
            n.bind(n, 987482),
        );
        return (t) => (0, i.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function N() {
    return (
        !u.Ay.isSupported() &&
        ((0, a.openModal)((e) =>
            (0, i.jsx)(s.a, {
                header: m.intl.string(m.t.ilMTy0),
                confirmText: m.intl.string(m.t["BK8LK+"]),
                cancelText: m.intl.string(m.t["ETE/oC"]),
                onConfirm: S,
                confirmButtonColor: r.$n.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(l.E, { variant: "text-md/normal", children: m.intl.string(m.t.h66vlB) }),
            }),
        ),
        !0)
    );
}
function C(e) {
    h.default.track(p.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return N()
        ? Promise.resolve(!1)
        : (h.default.track(p.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
          u.Ay.getMediaEngine()
              .enable()
              .then(
                  () => {
                      o.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                          C(T.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case p.xei.NO_DEVICES_FOUND:
                              C(T.hL.NO_DEVICES);
                              break;
                          case p.xei.PERMISSION_DENIED:
                              C(T.hL.DENIED);
                              break;
                          case p.xei.PERMISSION_DISMISSED:
                              C(T.hL.DISMISSED);
                              break;
                          default:
                              C(T.hL.ERROR), g.warn(`unknown getUserMedia error: ${e}`);
                      }
                  },
              )
              .then(() => !0));
}
function O(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = E.Ay.getKeybindForAction(p.hCu.TOGGLE_MUTE, !1, !0),
        r = _.Ay.getVoiceChannelId(),
        a = null != r ? c.A.getChannel(r) : null;
    h.default.track(p.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !u.Ay.isSelfMute(),
        custom_keybind_assigned: null != i,
        used_keybind: t,
        app_in_focus: A.A.isAppFocused(),
        overlay_activated: null != (0, f.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
function L(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = E.Ay.getKeybindForAction(p.hCu.TOGGLE_DEAFEN, !1, !0),
        r = _.Ay.getVoiceChannelId(),
        a = null != r ? c.A.getChannel(r) : null;
    h.default.track(p.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !u.Ay.isSelfDeaf(),
        keybind_assigned: null != i ? (0, I.dI)(i.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: A.A.isAppFocused(),
        overlay_activated: null != (0, f.A)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
