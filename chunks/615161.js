n.d(t, {
    E_: () => j,
    Ti: () => v,
    Yw: () => _
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
    d = n(37113),
    u = n(761274);
function f(e) {
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
function h(e, t) {
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
let m = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: !1,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: d.tI.PRESET_CUSTOM,
        resolution: d.LY.RESOLUTION_720,
        fps: d.ws.FPS_30,
        sourceType: i.vA.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0
    },
    x = l.createContext(m),
    g = l.createContext(() => {
        throw Error('Using uninitialized GoLiveModalContextDispatch');
    });
function p(e, t) {
    switch (t.type) {
        case 'set_mute_audio':
            return h(f({}, e), { muteStreamAudio: t.value });
        case 'set_notify_friends':
            return h(f({}, e), { notifyFriends: t.value });
        case 'set_has_permission':
            return h(f({}, e), { hasPermission: t.value });
        case 'set_source_candidates':
            return h(f({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1
            });
        case 'set_preset':
            return h(f({}, e), { preset: t.preset });
        case 'set_source_type':
            if (t.sourceType === i.vA.CAMERA && e.preset === d.tI.PRESET_DOCUMENTS)
                return h(f({}, e), {
                    preset: d.tI.PRESET_VIDEO,
                    sourceType: t.sourceType
                });
            return h(f({}, e), { sourceType: t.sourceType });
        case 'set_resolution':
            return h(f({}, e), { resolution: t.resolution });
        case 'set_fps':
            return h(f({}, e), { fps: t.fps });
        case 'set_hide_preview':
            return h(f({}, e), { hidePreview: t.hidePreview });
        case 'set_selected_source':
            return h(f({}, e), { selectedSource: t.source });
        default:
            return e;
    }
}
function _(e) {
    let { dispatch: t, state: n, children: l } = e;
    return (0, r.jsx)(g.Provider, {
        value: t,
        children: (0, r.jsx)(x.Provider, {
            value: n,
            children: l
        })
    });
}
function v(e) {
    var t, n;
    let { preset: r, resolution: i, fps: d, soundshareEnabled: x } = (0, s.cj)([c.Z], () => c.Z.getState()),
        g = null !== (t = a.I0.useSetting()) && void 0 !== t && t,
        _ = null !== (n = a.eo.useSetting()) && void 0 !== n && n,
        [v, j] = l.useReducer(
            p,
            h(f({}, m), {
                muteStreamAudio: !x,
                preset: r,
                resolution: i,
                fps: d,
                hidePreview: g,
                notifyFriends: _,
                selectedSource: e
            })
        );
    return (
        l.useEffect(() => {
            o.Z.hasPermission(u.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                j({
                    type: 'set_has_permission',
                    value: e
                })
            );
        }, []),
        {
            state: v,
            dispatch: j
        }
    );
}
function j() {
    return [l.useContext(x), l.useContext(g)];
}
