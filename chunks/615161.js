n.d(t, {
    E_: () => S,
    Ti: () => b,
    Yw: () => v
}),
    n(411104),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(268146),
    s = n(442837),
    o = n(751571),
    a = n(695346),
    c = n(361291),
    d = n(131951),
    u = n(451467),
    f = n(37113),
    m = n(761274);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let p = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: !1,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: f.tI.PRESET_CUSTOM,
        resolution: f.LY.RESOLUTION_720,
        fps: f.ws.FPS_30,
        sourceType: i.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0
    },
    g = l.createContext(p),
    _ = l.createContext(() => {
        throw Error('Using uninitialized GoLiveModalContextDispatch');
    });
function j(e, t) {
    switch (t.type) {
        case 'set_mute_audio':
            return x(h({}, e), { muteStreamAudio: t.value });
        case 'set_notify_friends':
            return x(h({}, e), { notifyFriends: t.value });
        case 'set_has_permission':
            return x(h({}, e), { hasPermission: t.value });
        case 'set_source_candidates':
            return x(h({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1
            });
        case 'set_preset':
            return x(h({}, e), { preset: t.preset });
        case 'set_source_type':
            let n = {
                sourceType: t.sourceType,
                selectedSource: void 0
            };
            return t.sourceType === i.vA.CAMERA && (e.preset === f.tI.PRESET_DOCUMENTS && (n.preset = f.tI.PRESET_VIDEO), e.resolution === f.LY.RESOLUTION_SOURCE && (n.resolution = f.LY.RESOLUTION_720)), h({}, e, n);
        case 'set_resolution':
            return x(h({}, e), { resolution: t.resolution });
        case 'set_fps':
            return x(h({}, e), { fps: t.fps });
        case 'set_hide_preview':
            return x(h({}, e), { hidePreview: t.hidePreview });
        case 'set_selected_source':
            return x(h({}, e), { selectedSource: t.source });
        case 'set_audio_source':
            return x(h({}, e), { audioSourceId: t.audioSourceId });
        default:
            return e;
    }
}
function v(e) {
    let { dispatch: t, state: n, children: l } = e;
    return (0, r.jsx)(_.Provider, {
        value: t,
        children: (0, r.jsx)(g.Provider, {
            value: n,
            children: l
        })
    });
}
function b(e, t, n) {
    var r, i;
    let { preset: g, resolution: _, fps: v, soundshareEnabled: b } = (0, s.cj)([c.Z], () => c.Z.getState()),
        S = (0, s.e7)([d.Z], () => d.Z.getInputDeviceId()),
        C = null != (r = a.I0.useSetting()) && r,
        N = null != (i = a.eo.useSetting()) && i;
    (0, u.Z)(f.tI.PRESET_CUSTOM, _, v, t, n) || ((_ = f.LY.RESOLUTION_720), (v = f.ws.FPS_30));
    let [y, Z] = l.useReducer(
        j,
        x(h({}, p), {
            muteStreamAudio: !b,
            preset: g,
            resolution: _,
            fps: v,
            hidePreview: C,
            notifyFriends: N,
            selectedSource: e,
            audioSourceId: S
        })
    );
    return (
        l.useEffect(() => {
            o.Z.hasPermission(m.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                Z({
                    type: 'set_has_permission',
                    value: e
                })
            );
        }, []),
        {
            state: y,
            dispatch: Z
        }
    );
}
function S() {
    return [l.useContext(g), l.useContext(_)];
}
