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
    s = n(442837),
    o = n(579806),
    a = n(751571),
    c = n(695346),
    d = n(361291),
    u = n(131951),
    f = n(580991),
    h = n(451467),
    m = n(37113),
    p = n(761274);
function g(e) {
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
let _ = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
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
    v = i.createContext(_),
    j = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function b(e, t) {
    switch (t.type) {
        case "set_mute_audio":
            return x(g({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return x(g({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return x(g({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return x(g({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return x(g({}, e), { preset: t.preset });
        case "set_step":
            return x(g({}, e), { modalStep: t.step });
        case "set_source_type":
            let n = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === l.vA.CAMERA &&
                    ((e.preset === m.tI.PRESET_DOCUMENTS || e.preset === m.tI.PRESET_AUTO) &&
                        (n.preset = m.tI.PRESET_VIDEO),
                    e.resolution === m.LY.RESOLUTION_SOURCE && (n.resolution = m.LY.RESOLUTION_720)),
                g({}, e, n)
            );
        case "set_native_source_type":
            return x(g({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return x(g({}, e), { resolution: t.resolution });
        case "set_fps":
            return x(g({}, e), { fps: t.fps });
        case "set_hide_preview":
            return x(g({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source":
            return x(g({}, e), { selectedSource: t.source });
        case "set_audio_source":
            var r;
            return x(g({}, e), { audioSourceId: null != (r = t.audioSourceId) ? r : u.Z.getInputDeviceId() });
        case "set_selected_channel":
            return x(g({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return x(g({}, e), { discordSourceId: t.sourceId });
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
    let v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "source_select",
        { defaultAutoQuality: j, allowAutoQuality: S } = (0, f._)({ location: "useCreateGoLiveModalState" }),
        { preset: y, resolution: C, fps: O, soundshareEnabled: w } = (0, s.cj)([d.Z], () => d.Z.getState());
    j && (y = m.tI.PRESET_AUTO);
    let Z = (0, s.e7)([u.Z], () => u.Z.getInputDeviceId()),
        I = null != (r = c.I0.useSetting()) && r,
        P = null != (l = c.eo.useSetting()) && l;
    (y in m.tI && (y !== m.tI.PRESET_AUTO || S)) || (y = m.tI.PRESET_VIDEO),
        (0, h.Z)(m.tI.PRESET_CUSTOM, C, O, t, n) || ((C = m.LY.RESOLUTION_720), (O = m.ws.FPS_30));
    let [N, T] = i.useReducer(
        b,
        x(g({}, _), {
            muteStreamAudio: !w,
            preset: y,
            resolution: C,
            fps: O,
            hidePreview: I,
            notifyFriends: P,
            selectedSource: e,
            audioSourceId: Z,
            modalStep: v,
        }),
    );
    return (
        i.useEffect(() => {
            var e, t;
            a.Z.hasPermission(p.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                T({
                    type: "set_has_permission",
                    value: e,
                }),
            ),
                null == (e = (t = o.Z.window).getMediaSourceId) ||
                    e.call(t).then((e) => {
                        T({
                            type: "set_discord_source_id",
                            sourceId: null != e ? e : "",
                        });
                    });
        }, []),
        {
            state: N,
            dispatch: T,
        }
    );
}
function C() {
    return [i.useContext(v), i.useContext(j)];
}
