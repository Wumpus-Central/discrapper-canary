n.d(t, {
    E_: () => C,
    Ti: () => y,
    Yw: () => S,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(268146),
    o = n(442837),
    s = n(579806),
    a = n(751571),
    c = n(695346),
    d = n(361291),
    u = n(131951),
    f = n(580991),
    p = n(451467),
    h = n(37113),
    m = n(761274);
function _(e) {
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
function g(e, t) {
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
let x = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: h.ApplicationStreamPresets.PRESET_CUSTOM,
        resolution: h.ApplicationStreamResolutions.RESOLUTION_720,
        fps: h.ApplicationStreamFPS.FPS_30,
        sourceType: l.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    v = i.createContext(x),
    j = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function b(e, t) {
    switch (t.type) {
        case "set_mute_audio":
            return g(_({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return g(_({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return g(_({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return g(_({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return g(_({}, e), { preset: t.preset });
        case "set_source_type":
            let n = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === l.vA.CAMERA &&
                    ((e.preset === h.ApplicationStreamPresets.PRESET_DOCUMENTS ||
                        e.preset === h.ApplicationStreamPresets.PRESET_AUTO) &&
                        (n.preset = h.ApplicationStreamPresets.PRESET_VIDEO),
                    e.resolution === h.ApplicationStreamResolutions.RESOLUTION_SOURCE &&
                        (n.resolution = h.ApplicationStreamResolutions.RESOLUTION_720)),
                _({}, e, n)
            );
        case "set_native_source_type":
            return g(_({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return g(_({}, e), { resolution: t.resolution });
        case "set_fps":
            return g(_({}, e), { fps: t.fps });
        case "set_hide_preview":
            return g(_({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source":
            return g(_({}, e), { selectedSource: t.source });
        case "set_audio_source":
            var r;
            return g(_({}, e), { audioSourceId: null != (r = t.audioSourceId) ? r : u.Z.getInputDeviceId() });
        case "set_selected_channel":
            return g(_({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return g(_({}, e), { discordSourceId: t.sourceId });
        default:
            return e;
    }
}
function S(e) {
    let { dispatch: t, state: n, children: i } = e;
    return (0, r.jsx)(j.Provider, {
        value: t,
        children: (0, r.jsx)(v.Provider, {
            value: n,
            children: i,
        }),
    });
}
function y(e, t, n) {
    var r, l;
    let { defaultAutoQuality: v, allowAutoQuality: j } = (0, f._I)({ location: "useCreateGoLiveModalState" }),
        { preset: S, resolution: y, fps: C, soundshareEnabled: O } = (0, o.cj)([d.Z], () => d.Z.getState());
    v && (S = h.ApplicationStreamPresets.PRESET_AUTO);
    let w = (0, o.e7)([u.Z], () => u.Z.getInputDeviceId()),
        P = null != (r = c.I0.useSetting()) && r,
        T = null != (l = c.eo.useSetting()) && l;
    (S in h.ApplicationStreamPresets && (S !== h.ApplicationStreamPresets.PRESET_AUTO || j)) ||
        (S = h.ApplicationStreamPresets.PRESET_VIDEO),
        (0, p.Z)(h.ApplicationStreamPresets.PRESET_CUSTOM, y, C, t, n) ||
            ((y = h.ApplicationStreamResolutions.RESOLUTION_720), (C = h.ApplicationStreamFPS.FPS_30));
    let [Z, I] = i.useReducer(
        b,
        g(_({}, x), {
            muteStreamAudio: !O,
            preset: S,
            resolution: y,
            fps: C,
            hidePreview: P,
            notifyFriends: T,
            selectedSource: e,
            audioSourceId: w,
        }),
    );
    return (
        i.useEffect(() => {
            var e, t;
            a.Z.hasPermission(m.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                I({
                    type: "set_has_permission",
                    value: e,
                }),
            ),
                null == (e = (t = s.Z.window).getMediaSourceId) ||
                    e.call(t).then((e) => {
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
function C() {
    return [i.useContext(v), i.useContext(j)];
}
