"use strict";
n.r(t),
    n.d(t, { enable: () => C, isNotSupported: () => N, trackToggleSelfDeaf: () => O, trackToggleSelfMute: () => v });
var i = n(627968);
n(64700);
var r = n(862482),
    s = n(192308),
    a = n(640238),
    o = n(834730),
    l = n(228366),
    u = n(626584),
    c = n(734057),
    d = n(235058),
    _ = n(309010),
    f = n(532624),
    h = n(531685),
    p = n(174459),
    E = n(350535),
    m = n(427603),
    g = n(652215),
    A = n(765682),
    I = n(375708);
let T = new u.A("AudioActionCreators");
function S() {
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("81013"), n.e("15799"), n.e("44602"), n.e("25280")]).then(
            n.bind(n, 987482),
        );
        return (t) => (0, i.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function N() {
    return (
        !d.Ay.isSupported() &&
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
function y(e) {
    p.default.track(g.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return N()
        ? Promise.resolve(!1)
        : (p.default.track(g.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
          d.Ay.getMediaEngine()
              .enable()
              .then(
                  () => {
                      l.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                          y(A.hL.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case g.xei.NO_DEVICES_FOUND:
                              y(A.hL.NO_DEVICES);
                              break;
                          case g.xei.PERMISSION_DENIED:
                              y(A.hL.DENIED);
                              break;
                          case g.xei.PERMISSION_DISMISSED:
                              y(A.hL.DISMISSED);
                              break;
                          default:
                              y(A.hL.ERROR), T.warn(`unknown getUserMedia error: ${e}`);
                      }
                  },
              )
              .then(() => !0));
}
function v(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = f.Ay.getKeybindForAction(g.hCu.TOGGLE_MUTE, !1, !0),
        r = _.A.getVoiceChannelId(),
        s = null != r ? c.A.getChannel(r) : null;
    p.default.track(g.HAw.INPUT_MUTE_TOGGLED, {
        enabled: !d.Ay.isSelfMute(),
        custom_keybind_assigned: null != i,
        used_keybind: t,
        app_in_focus: h.A.isAppFocused(),
        overlay_activated: null != (0, m.A)(),
        voice_channel_type: null != s ? s.type : null,
        location: n,
    });
}
function O(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = f.Ay.getKeybindForAction(g.hCu.TOGGLE_DEAFEN, !1, !0),
        r = _.A.getVoiceChannelId(),
        s = null != r ? c.A.getChannel(r) : null;
    p.default.track(g.HAw.SELF_DEAFEN_TOGGLED, {
        enabled: !d.Ay.isSelfDeaf(),
        keybind_assigned: null != i ? (0, E.dI)(i.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: h.A.isAppFocused(),
        overlay_activated: null != (0, m.A)(),
        voice_channel_type: null != s ? s.type : null,
        location: n,
    });
}
