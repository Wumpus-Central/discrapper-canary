s.d(t, { KL: () => S, tS: () => b, yB: () => y });
var i = s(627968),
    r = s(64700),
    n = s(735438),
    l = s.n(n),
    a = s(72978),
    o = s(141931),
    c = s(311907),
    d = s(77729),
    u = s(674966),
    f = s(253932),
    h = s(929921),
    x = s(430452),
    p = s(258585),
    _ = s(874124),
    m = s(753070),
    g = s(765682);
let j = {
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
        sourceType: o.fS.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    v = r.createContext(j),
    A = r.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function C(e, t) {
    switch (t.type) {
        case "set_mute_audio":
            return { ...e, muteStreamAudio: t.value };
        case "set_notify_friends":
            return { ...e, notifyFriends: t.value };
        case "set_has_permission":
            return { ...e, hasPermission: t.value };
        case "set_source_candidates":
            return {
                ...e,
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            };
        case "set_preset":
            return { ...e, preset: t.preset };
        case "set_source_type":
            let s = { sourceType: t.sourceType, selectedSource: void 0 };
            return (
                t.sourceType === o.fS.CAMERA
                    ? ((e.preset === m.jQ.PRESET_DOCUMENTS || e.preset === m.jQ.PRESET_AUTO) &&
                          (s.preset = m.jQ.PRESET_VIDEO),
                      e.resolution === m.on.RESOLUTION_SOURCE && (s.resolution = m.on.RESOLUTION_720))
                    : (s.selectedSource = null),
                { ...e, ...s }
            );
        case "set_native_source_type":
            return { ...e, nativeSourceType: t.sourceType };
        case "set_resolution":
            return { ...e, resolution: t.resolution };
        case "set_fps":
            return { ...e, fps: t.fps };
        case "set_hide_preview":
            return { ...e, hidePreview: t.hidePreview };
        case "set_selected_source": {
            let s = t.source,
                i = { ...e, selectedSource: s },
                r = s?.name;
            if (null != s && s.id?.startsWith(o.fS.CAMERA) && null != r) {
                let e = l().maxBy(Object.values(x.Ay.getInputDevices()), (e) => (0, a.default)(r, e.name));
                i.audioSourceId = e?.id ?? x.Ay.getInputDeviceId();
            }
            return i;
        }
        case "set_audio_source":
            return { ...e, audioSourceId: t.audioSourceId ?? x.Ay.getInputDeviceId() };
        case "set_selected_channel":
            return { ...e, selectedChannel: t.channelId };
        case "set_discord_source_id":
            return { ...e, discordSourceId: t.sourceId };
        default:
            return e;
    }
}
function S(e) {
    let { dispatch: t, state: s, children: r } = e;
    return (0, i.jsx)(A.Provider, { value: t, children: (0, i.jsx)(v.Provider, { value: s, children: r }) });
}
function y(e, t, s) {
    let { defaultAutoQuality: i, allowAutoQuality: n } = (0, p.X5)({ location: "useCreateGoLiveModalState" }),
        { preset: l, resolution: a, fps: o, soundshareEnabled: v } = (0, c.cf)([h.A], () => h.A.getState());
    i && (l = m.jQ.PRESET_AUTO);
    let A = (0, c.bG)([x.Ay], () => x.Ay.getInputDeviceId()),
        S = f.uh.useSetting() ?? !1,
        y = f.wv.useSetting() ?? !1;
    (l in m.jQ && (l !== m.jQ.PRESET_AUTO || n)) || (l = m.jQ.PRESET_VIDEO),
        (0, _.A)(m.jQ.PRESET_CUSTOM, a, o, t, s) || ((a = m.on.RESOLUTION_720), (o = m.kn.FPS_30));
    let [b, w] = r.useReducer(C, {
        ...j,
        muteStreamAudio: !v,
        preset: l,
        resolution: a,
        fps: o,
        hidePreview: S,
        notifyFriends: y,
        selectedSource: e,
        nativeSourceType: x.Ay.getUseGamescopeCapture() ? "gamescope" : "",
        audioSourceId: A,
    });
    return (
        r.useEffect(() => {
            u.A.hasPermission(g.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                w({ type: "set_has_permission", value: e }),
            ),
                d.A.window.getMediaSourceId?.().then((e) => {
                    w({ type: "set_discord_source_id", sourceId: e ?? "" });
                });
        }, []),
        { state: b, dispatch: w }
    );
}
function b() {
    return [r.useContext(v), r.useContext(A)];
}
