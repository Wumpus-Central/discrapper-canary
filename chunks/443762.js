n.d(t, {
    E_: () => I,
    Ti: () => S,
    Yw: () => C,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    s = n(392711),
    l = n.n(s),
    o = n(856901),
    c = n(268146),
    a = n(442837),
    d = n(579806),
    u = n(751571),
    f = n(695346),
    h = n(361291),
    p = n(131951),
    x = n(580991),
    m = n(451467),
    g = n(37113),
    v = n(761274);
function j(e) {
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
function _(e, t) {
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
let b = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: g.tI.PRESET_CUSTOM,
        resolution: g.LY.RESOLUTION_720,
        fps: g.ws.FPS_30,
        sourceType: c.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    y = i.createContext(b),
    w = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function O(e, t) {
    var n, r, i;
    switch (t.type) {
        case "set_mute_audio":
            return _(j({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return _(j({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return _(j({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return _(j({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return _(j({}, e), { preset: t.preset });
        case "set_source_type":
            let s = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === c.vA.CAMERA
                    ? ((e.preset === g.tI.PRESET_DOCUMENTS || e.preset === g.tI.PRESET_AUTO) &&
                          (s.preset = g.tI.PRESET_VIDEO),
                      e.resolution === g.LY.RESOLUTION_SOURCE && (s.resolution = g.LY.RESOLUTION_720))
                    : (s.selectedSource = null),
                j({}, e, s)
            );
        case "set_native_source_type":
            return _(j({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return _(j({}, e), { resolution: t.resolution });
        case "set_fps":
            return _(j({}, e), { fps: t.fps });
        case "set_hide_preview":
            return _(j({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source": {
            let i = t.source,
                s = _(j({}, e), { selectedSource: i }),
                a = null == i ? void 0 : i.name;
            if (null != i && (null == (n = i.id) ? void 0 : n.startsWith(c.vA.CAMERA)) && null != a) {
                let e = l().maxBy(Object.values(p.Z.getInputDevices()), (e) => (0, o.default)(a, e.name));
                s.audioSourceId = null != (r = null == e ? void 0 : e.id) ? r : p.Z.getInputDeviceId();
            }
            return s;
        }
        case "set_audio_source":
            return _(j({}, e), { audioSourceId: null != (i = t.audioSourceId) ? i : p.Z.getInputDeviceId() });
        case "set_selected_channel":
            return _(j({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return _(j({}, e), { discordSourceId: t.sourceId });
        default:
            return e;
    }
}
function C(e) {
    let { dispatch: t, state: n, children: i } = e;
    return (0, r.jsx)(w.Provider, {
        value: t,
        children: (0, r.jsx)(y.Provider, {
            value: n,
            children: i,
        }),
    });
}
function S(e, t, n) {
    var r, s;
    let { defaultAutoQuality: l, allowAutoQuality: o } = (0, x._I)({ location: "useCreateGoLiveModalState" }),
        { preset: c, resolution: y, fps: w, soundshareEnabled: C } = (0, a.cj)([h.Z], () => h.Z.getState());
    l && (c = g.tI.PRESET_AUTO);
    let S = (0, a.e7)([p.Z], () => p.Z.getInputDeviceId()),
        I = null != (r = f.I0.useSetting()) && r,
        Z = null != (s = f.eo.useSetting()) && s;
    (c in g.tI && (c !== g.tI.PRESET_AUTO || o)) || (c = g.tI.PRESET_VIDEO),
        (0, m.Z)(g.tI.PRESET_CUSTOM, y, w, t, n) || ((y = g.LY.RESOLUTION_720), (w = g.ws.FPS_30));
    let [E, P] = i.useReducer(
        O,
        _(j({}, b), {
            muteStreamAudio: !C,
            preset: c,
            resolution: y,
            fps: w,
            hidePreview: I,
            notifyFriends: Z,
            selectedSource: e,
            nativeSourceType: p.Z.getUseGamescopeCapture() ? "gamescope" : "",
            audioSourceId: S,
        }),
    );
    return (
        i.useEffect(() => {
            var e, t;
            u.Z.hasPermission(v.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                P({
                    type: "set_has_permission",
                    value: e,
                }),
            ),
                null == (e = (t = d.Z.window).getMediaSourceId) ||
                    e.call(t).then((e) => {
                        P({
                            type: "set_discord_source_id",
                            sourceId: null != e ? e : "",
                        });
                    });
        }, []),
        {
            state: E,
            dispatch: P,
        }
    );
}
function I() {
    return [i.useContext(y), i.useContext(w)];
}
