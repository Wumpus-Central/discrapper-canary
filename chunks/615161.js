n.d(t, {
    E_: () => S,
    Ti: () => C,
    Yw: () => b,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(268146),
    s = n(442837),
    o = n(579806),
    a = n(751571),
    c = n(695346),
    d = n(361291),
    u = n(131951),
    f = n(451467),
    m = n(37113),
    h = n(761274);
function p(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: !1,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: m.tI.PRESET_CUSTOM,
        resolution: m.LY.RESOLUTION_720,
        fps: m.ws.FPS_30,
        sourceType: l.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        modalStep: "source_select",
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    _ = i.createContext(g),
    v = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function j(e, t) {
    switch (t.type) {
        case "set_mute_audio":
            return x(p({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return x(p({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return x(p({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return x(p({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return x(p({}, e), { preset: t.preset });
        case "set_step":
            return x(p({}, e), { modalStep: t.step });
        case "set_source_type":
            let n = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === l.vA.CAMERA &&
                    (e.preset === m.tI.PRESET_DOCUMENTS && (n.preset = m.tI.PRESET_VIDEO),
                    e.resolution === m.LY.RESOLUTION_SOURCE && (n.resolution = m.LY.RESOLUTION_720)),
                p({}, e, n)
            );
        case "set_native_source_type":
            return x(p({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return x(p({}, e), { resolution: t.resolution });
        case "set_fps":
            return x(p({}, e), { fps: t.fps });
        case "set_hide_preview":
            return x(p({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source":
            return x(p({}, e), { selectedSource: t.source });
        case "set_audio_source":
            var r;
            return x(p({}, e), { audioSourceId: null != (r = t.audioSourceId) ? r : u.Z.getInputDeviceId() });
        case "set_selected_channel":
            return x(p({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return x(p({}, e), { discordSourceId: t.sourceId });
        default:
            return e;
    }
}
function b(e) {
    let { dispatch: t, state: n, children: i } = e;
    return (0, r.jsx)(v.Provider, {
        value: t,
        children: (0, r.jsx)(_.Provider, {
            value: n,
            children: i,
        }),
    });
}
function C(e, t, n) {
    var r, l;
    let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "source_select",
        { preset: v, resolution: b, fps: C, soundshareEnabled: S } = (0, s.cj)([d.Z], () => d.Z.getState()),
        y = (0, s.e7)([u.Z], () => u.Z.getInputDeviceId()),
        O = null != (r = c.I0.useSetting()) && r,
        w = null != (l = c.eo.useSetting()) && l;
    (0, f.Z)(m.tI.PRESET_CUSTOM, b, C, t, n) || ((b = m.LY.RESOLUTION_720), (C = m.ws.FPS_30));
    let [Z, I] = i.useReducer(
        j,
        x(p({}, g), {
            muteStreamAudio: !S,
            preset: v,
            resolution: b,
            fps: C,
            hidePreview: O,
            notifyFriends: w,
            selectedSource: e,
            audioSourceId: y,
            modalStep: _,
        }),
    );
    return (
        i.useEffect(() => {
            a.Z.hasPermission(h.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                I({
                    type: "set_has_permission",
                    value: e,
                }),
            ),
                o.Z.window.getMediaSourceId().then((e) => {
                    I({
                        type: "set_discord_source_id",
                        sourceId: null != e ? e : "",
                    });
                });
        }, []),
        {
            state: Z,
            dispatch: I,
        }
    );
}
function S() {
    return [i.useContext(_), i.useContext(v)];
}
