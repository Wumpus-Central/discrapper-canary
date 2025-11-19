n.d(t, {
    E_: () => P,
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
    _ = n(451467),
    g = n(37113),
    x = n(761274);
function v(e) {
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
let S = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: g.ApplicationStreamPresets.PRESET_CUSTOM,
        resolution: g.ApplicationStreamResolutions.RESOLUTION_720,
        fps: g.ApplicationStreamFPS.FPS_30,
        sourceType: a.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    b = i.createContext(S),
    y = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function C(e, t) {
    var n, r, i;
    switch (t.type) {
        case "set_mute_audio":
            return j(v({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return j(v({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return j(v({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return j(v({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return j(v({}, e), { preset: t.preset });
        case "set_source_type":
            let l = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === a.vA.CAMERA
                    ? ((e.preset === g.ApplicationStreamPresets.PRESET_DOCUMENTS ||
                          e.preset === g.ApplicationStreamPresets.PRESET_AUTO) &&
                          (l.preset = g.ApplicationStreamPresets.PRESET_VIDEO),
                      e.resolution === g.ApplicationStreamResolutions.RESOLUTION_SOURCE &&
                          (l.resolution = g.ApplicationStreamResolutions.RESOLUTION_720))
                    : (l.selectedSource = null),
                v({}, e, l)
            );
        case "set_native_source_type":
            return j(v({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return j(v({}, e), { resolution: t.resolution });
        case "set_fps":
            return j(v({}, e), { fps: t.fps });
        case "set_hide_preview":
            return j(v({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source": {
            let i = t.source,
                l = j(v({}, e), { selectedSource: i }),
                c = null == i ? void 0 : i.name;
            if (null != i && (null == (n = i.id) ? void 0 : n.startsWith(a.vA.CAMERA)) && null != c) {
                let e = s().maxBy(Object.values(h.Z.getInputDevices()), (e) => (0, o.default)(c, e.name));
                l.audioSourceId = null != (r = null == e ? void 0 : e.id) ? r : h.Z.getInputDeviceId();
            }
            return l;
        }
        case "set_audio_source":
            return j(v({}, e), { audioSourceId: null != (i = t.audioSourceId) ? i : h.Z.getInputDeviceId() });
        case "set_selected_channel":
            return j(v({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return j(v({}, e), { discordSourceId: t.sourceId });
        default:
            return e;
    }
}
function O(e) {
    let { dispatch: t, state: n, children: i } = e;
    return (0, r.jsx)(y.Provider, {
        value: t,
        children: (0, r.jsx)(b.Provider, {
            value: n,
            children: i,
        }),
    });
}
function w(e, t, n) {
    var r, l;
    let { defaultAutoQuality: s, allowAutoQuality: o } = (0, m._I)({ location: "useCreateGoLiveModalState" }),
        { preset: a, resolution: b, fps: y, soundshareEnabled: O } = (0, c.cj)([p.Z], () => p.Z.getState());
    s && (a = g.ApplicationStreamPresets.PRESET_AUTO);
    let w = (0, c.e7)([h.Z], () => h.Z.getInputDeviceId()),
        P = null != (r = f.I0.useSetting()) && r,
        Z = null != (l = f.eo.useSetting()) && l;
    (a in g.ApplicationStreamPresets && (a !== g.ApplicationStreamPresets.PRESET_AUTO || o)) ||
        (a = g.ApplicationStreamPresets.PRESET_VIDEO),
        (0, _.Z)(g.ApplicationStreamPresets.PRESET_CUSTOM, b, y, t, n) ||
            ((b = g.ApplicationStreamResolutions.RESOLUTION_720), (y = g.ApplicationStreamFPS.FPS_30));
    let [I, E] = i.useReducer(
        C,
        j(v({}, S), {
            muteStreamAudio: !O,
            preset: a,
            resolution: b,
            fps: y,
            hidePreview: P,
            notifyFriends: Z,
            selectedSource: e,
            audioSourceId: w,
        }),
    );
    return (
        i.useEffect(() => {
            var e, t;
            u.Z.hasPermission(x.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
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
function P() {
    return [i.useContext(b), i.useContext(y)];
}
