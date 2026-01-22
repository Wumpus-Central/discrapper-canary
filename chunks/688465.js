r.d(t, {
    KL: () => O,
    tS: () => w,
    yB: () => C,
}),
    r(65821),
    r(896048);
var n = r(627968),
    l = r(64700),
    s = r(735438),
    i = r.n(s),
    a = r(72978),
    c = r(141931),
    o = r(311907),
    d = r(77729),
    f = r(674966),
    u = r(253932),
    h = r(929921),
    p = r(430452),
    x = r(258585),
    j = r(874124),
    m = r(753070),
    g = r(765682);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let y = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: m.jQ.PRESET_CUSTOM,
        resolution: m.on.RESOLUTION_720,
        fps: m.kn.FPS_30,
        sourceType: c.fS.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    S = l.createContext(y),
    A = l.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function _(e, t) {
    var r, n, l;
    switch (t.type) {
        case "set_mute_audio":
            return v(b({}, e), { muteStreamAudio: t.value });
        case "set_notify_friends":
            return v(b({}, e), { notifyFriends: t.value });
        case "set_has_permission":
            return v(b({}, e), { hasPermission: t.value });
        case "set_source_candidates":
            return v(b({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            });
        case "set_preset":
            return v(b({}, e), { preset: t.preset });
        case "set_source_type":
            let s = {
                sourceType: t.sourceType,
                selectedSource: void 0,
            };
            return (
                t.sourceType === c.fS.CAMERA
                    ? ((e.preset === m.jQ.PRESET_DOCUMENTS || e.preset === m.jQ.PRESET_AUTO) &&
                          (s.preset = m.jQ.PRESET_VIDEO),
                      e.resolution === m.on.RESOLUTION_SOURCE && (s.resolution = m.on.RESOLUTION_720))
                    : (s.selectedSource = null),
                b({}, e, s)
            );
        case "set_native_source_type":
            return v(b({}, e), { nativeSourceType: t.sourceType });
        case "set_resolution":
            return v(b({}, e), { resolution: t.resolution });
        case "set_fps":
            return v(b({}, e), { fps: t.fps });
        case "set_hide_preview":
            return v(b({}, e), { hidePreview: t.hidePreview });
        case "set_selected_source": {
            let l = t.source,
                s = v(b({}, e), { selectedSource: l }),
                o = null == l ? void 0 : l.name;
            if (null != l && (null == (r = l.id) ? void 0 : r.startsWith(c.fS.CAMERA)) && null != o) {
                let e = i().maxBy(Object.values(p.A.getInputDevices()), (e) => (0, a.default)(o, e.name));
                s.audioSourceId = null != (n = null == e ? void 0 : e.id) ? n : p.A.getInputDeviceId();
            }
            return s;
        }
        case "set_audio_source":
            return v(b({}, e), { audioSourceId: null != (l = t.audioSourceId) ? l : p.A.getInputDeviceId() });
        case "set_selected_channel":
            return v(b({}, e), { selectedChannel: t.channelId });
        case "set_discord_source_id":
            return v(b({}, e), { discordSourceId: t.sourceId });
        default:
            return e;
    }
}
function O(e) {
    let { dispatch: t, state: r, children: l } = e;
    return (0, n.jsx)(A.Provider, {
        value: t,
        children: (0, n.jsx)(S.Provider, {
            value: r,
            children: l,
        }),
    });
}
function C(e, t, r) {
    var n, s;
    let { defaultAutoQuality: i, allowAutoQuality: a } = (0, x.X5)({ location: "useCreateGoLiveModalState" }),
        { preset: c, resolution: S, fps: A, soundshareEnabled: O } = (0, o.cf)([h.A], () => h.A.getState());
    i && (c = m.jQ.PRESET_AUTO);
    let C = (0, o.bG)([p.A], () => p.A.getInputDeviceId()),
        w = null != (n = u.uh.useSetting()) && n,
        E = null != (s = u.wv.useSetting()) && s;
    (c in m.jQ && (c !== m.jQ.PRESET_AUTO || a)) || (c = m.jQ.PRESET_VIDEO),
        (0, j.A)(m.jQ.PRESET_CUSTOM, S, A, t, r) || ((S = m.on.RESOLUTION_720), (A = m.kn.FPS_30));
    let [N, I] = l.useReducer(
        _,
        v(b({}, y), {
            muteStreamAudio: !O,
            preset: c,
            resolution: S,
            fps: A,
            hidePreview: w,
            notifyFriends: E,
            selectedSource: e,
            nativeSourceType: p.A.getUseGamescopeCapture() ? "gamescope" : "",
            audioSourceId: C,
        }),
    );
    return (
        l.useEffect(() => {
            var e, t;
            f.A.hasPermission(g.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                I({
                    type: "set_has_permission",
                    value: e,
                }),
            ),
                null == (e = (t = d.A.window).getMediaSourceId) ||
                    e.call(t).then((e) => {
                        I({
                            type: "set_discord_source_id",
                            sourceId: null != e ? e : "",
                        });
                    });
        }, []),
        {
            state: N,
            dispatch: I,
        }
    );
}
function w() {
    return [l.useContext(S), l.useContext(A)];
}
