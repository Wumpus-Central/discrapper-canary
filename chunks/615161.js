n.d(t, {
    E_: () => Z,
    Ti: () => w,
    Yw: () => O,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    s = n.n(l),
    o = n(856901),
    a = n(268146),
    c = n(442837),
    d = n(579806),
    u = n(751571),
    f = n(695346),
    p = n(361291),
    h = n(131951),
    m = n(580991),
    g = n(451467),
    x = n(37113),
    v = n(761274);
function b(e) {
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
function j(e, t) {
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
        preset: x.ApplicationStreamPresets.PRESET_CUSTOM,
        resolution: x.ApplicationStreamResolutions.RESOLUTION_720,
        fps: x.ApplicationStreamFPS.FPS_30,
        sourceType: a.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    S = i.createContext(_),
    y = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function C(e, t) {
    var n, r, i;
    switch (t.type) {
        case "set_mute_audio":
            return j(b({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return j(b({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return j(b({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return j(b({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return j(b({}, e), { preset: t.preset });
        case "set_source_type":
            let l = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === a.vA.CAMERA
                    ? ((e.preset === x.ApplicationStreamPresets.PRESET_DOCUMENTS ||
                          e.preset === x.ApplicationStreamPresets.PRESET_AUTO) &&
                          (l.preset = x.ApplicationStreamPresets.PRESET_VIDEO),
                      e.resolution === x.ApplicationStreamResolutions.RESOLUTION_SOURCE &&
                          (l.resolution = x.ApplicationStreamResolutions.RESOLUTION_720))
                    : (l.selectedSource = null),
                b({}, e, l)
            );
        case "set_native_source_type":
            return j(b({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return j(b({}, e), { resolution: t.resolution });
        case "set_fps":
            return j(b({}, e), { fps: t.fps });
        case "set_hide_preview":
            return j(b({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source": {
            let i = t.source,
                l = j(b({}, e), { selectedSource: i }),
                c = null == i ? void 0 : i.name;
            if (null != i && (null == (n = i.id) ? void 0 : n.startsWith(a.vA.CAMERA)) && null != c) {
                let e = s().maxBy(Object.values(h.Z.getInputDevices()), (e) => (0, o.default)(c, e.name));
                l.audioSourceId = null != (r = null == e ? void 0 : e.id) ? r : h.Z.getInputDeviceId();
            }
            return l;
        }
        case "set_audio_source":
            return j(b({}, e), { audioSourceId: null != (i = t.audioSourceId) ? i : h.Z.getInputDeviceId() });
        case "set_selected_channel":
            return j(b({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return j(b({}, e), { discordSourceId: t.sourceId });
        default:
            return e;
    }
}
function O(e) {
    let { dispatch: t, state: n, children: i } = e;
    return (0, r.jsx)(y.Provider, {
        value: t,
        children: (0, r.jsx)(S.Provider, {
            value: n,
            children: i,
        }),
    });
}
function w(e, t, n) {
    var r, l;
    let { defaultAutoQuality: s, allowAutoQuality: o } = (0, m._I)({ location: "useCreateGoLiveModalState" }),
        { preset: a, resolution: S, fps: y, soundshareEnabled: O } = (0, c.cj)([p.Z], () => p.Z.getState());
    s && (a = x.ApplicationStreamPresets.PRESET_AUTO);
    let w = (0, c.e7)([h.Z], () => h.Z.getInputDeviceId()),
        Z = null != (r = f.I0.useSetting()) && r,
        P = null != (l = f.eo.useSetting()) && l;
    (a in x.ApplicationStreamPresets && (a !== x.ApplicationStreamPresets.PRESET_AUTO || o)) ||
        (a = x.ApplicationStreamPresets.PRESET_VIDEO),
        (0, g.Z)(x.ApplicationStreamPresets.PRESET_CUSTOM, S, y, t, n) ||
            ((S = x.ApplicationStreamResolutions.RESOLUTION_720), (y = x.ApplicationStreamFPS.FPS_30));
    let [I, E] = i.useReducer(
        C,
        j(b({}, _), {
            muteStreamAudio: !O,
            preset: a,
            resolution: S,
            fps: y,
            hidePreview: Z,
            notifyFriends: P,
            selectedSource: e,
            nativeSourceType: h.Z.getUseGamescopeCapture() ? "gamescope" : "",
            audioSourceId: w,
        }),
    );
    return (
        i.useEffect(() => {
            var e, t;
            u.Z.hasPermission(v.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                E({
                    type: "set_has_permission",
                    value: e,
                }),
            ),
                null == (e = (t = d.Z.window).getMediaSourceId) ||
                    e.call(t).then((e) => {
                        E({
                            type: "set_discord_source_id",
                            sourceId: null != e ? e : "",
                        });
                    });
        }, []),
        {
            state: I,
            dispatch: E,
        }
    );
}
function Z() {
    return [i.useContext(S), i.useContext(y)];
}
