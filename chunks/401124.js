n.r(t);
var i = n(477900);
n(582128);
var r = n(862482),
    a = n(192308),
    s = n(640238),
    l = n(834730),
    o = n(73153),
    d = n(626584),
    c = n(734057),
    u = n(754712),
    _ = n(309010),
    E = n(532624),
    A = n(531685),
    f = n(129230),
    h = n(350535),
    I = n(427603),
    p = n(652215),
    m = n(765682),
    g = n(792996);
let T = new d.A("AudioActionCreators");
function S() {
    (0, a.mM)(async () => {
        let { default: e } = await Promise.all([
            n.e(476662),
            n.e(447505),
            n.e(188259),
            n.e(253044),
            n.e(311913),
            n.e(881717),
            n.e(78987),
            n.e(363269),
            n.e(474172),
            n.e(489218),
            n.e(912875),
            n.e(55348),
            n.e(862782),
            n.e(710911),
            n.e(967288),
            n.e(674783),
            n.e(944602),
            n.e(825280),
        ]).then(n.bind(n, 987482));
        return (t) => (0, i.jsx)(e, { source: "Unsupported Browser", ...t });
    });
}
function N() {
    return (
        !u.Ay.isSupported() &&
        ((0, a.qf)((e) =>
            (0, i.jsx)(s.a, {
                header: g.intl.string(g.t.ilMTy0),
                confirmText: g.intl.string(g.t["BK8LK+"]),
                cancelText: g.intl.string(g.t["ETE/oC"]),
                onConfirm: S,
                confirmButtonColor: r.$n.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(l.E, { variant: "body-md/normal", children: g.intl.string(g.t.h66vlB) }),
            }),
        ),
        !0)
    );
}
function C(e) {
    f.default.track(p.HAw.PERMISSIONS_ACKED, { type: "audio", action: e });
}
n.d(
    t,
    {},
    {
        enable: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return N()
                ? Promise.resolve(!1)
                : (f.default.track(p.HAw.PERMISSIONS_REQUESTED, { type: "audio" }),
                  u.Ay.getMediaEngine()
                      .enable()
                      .then(
                          () => {
                              (o.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: e }),
                                  C(m.hL.ACCEPTED));
                          },
                          (e) => {
                              switch (e) {
                                  case p.xei.NO_DEVICES_FOUND:
                                      C(m.hL.NO_DEVICES);
                                      break;
                                  case p.xei.PERMISSION_DENIED:
                                      C(m.hL.DENIED);
                                      break;
                                  case p.xei.PERMISSION_DISMISSED:
                                      C(m.hL.DISMISSED);
                                      break;
                                  default:
                                      (C(m.hL.ERROR), T.warn(`unknown getUserMedia error: ${e}`));
                              }
                          },
                      )
                      .then(() => !0));
        },
        isNotSupported: N,
        trackToggleSelfDeaf: function (e) {
            let { usedKeybind: t = !1, location: n } = e,
                i = E.Ay.getKeybindForAction(p.hCu.TOGGLE_DEAFEN, !1, !0),
                r = _.Ay.getVoiceChannelId(),
                a = null != r ? c.A.getChannel(r) : null;
            f.default.track(p.HAw.SELF_DEAFEN_TOGGLED, {
                enabled: !u.Ay.isSelfDeaf(),
                keybind_assigned: null != i ? (0, h.dI)(i.shortcut) : void 0,
                used_keybind: t,
                app_in_focus: A.A.isAppFocused(),
                overlay_activated: null != (0, I.A)(),
                voice_channel_type: null != a ? a.type : null,
                location: n,
            });
        },
        trackToggleSelfMute: function (e) {
            let { usedKeybind: t = !1, location: n } = e,
                i = E.Ay.getKeybindForAction(p.hCu.TOGGLE_MUTE, !1, !0),
                r = _.Ay.getVoiceChannelId(),
                a = null != r ? c.A.getChannel(r) : null;
            f.default.track(p.HAw.INPUT_MUTE_TOGGLED, {
                enabled: !u.Ay.isSelfMute(),
                custom_keybind_assigned: null != i,
                used_keybind: t,
                app_in_focus: A.A.isAppFocused(),
                overlay_activated: null != (0, I.A)(),
                voice_channel_type: null != a ? a.type : null,
                location: n,
            });
        },
    },
);
