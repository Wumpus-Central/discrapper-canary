n.d(t, {
    E_: () => N,
    Ti: () => S,
    Yw: () => j
}),
    n(411104),
    n(47120);
var r = n(200651),
    l = n(192379),
    s = n(268146),
    i = n(442837),
    a = n(846519),
    o = n(751571),
    c = n(361291),
    u = n(59468),
    d = n(37113),
    m = n(761274);
function p(e) {
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
let g = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: !1,
        muteStreamAudio: !1,
        notifyFriends: !1,
        preset: d.tI.PRESET_CUSTOM,
        resolution: d.LY.RESOLUTION_720,
        fps: d.ws.FPS_30,
        sourceType: s.vA.WINDOW,
        fetchingSources: !0,
        sourceApplication: void 0
    },
    x = l.createContext(g),
    f = l.createContext(() => {
        throw Error('Using uninitialized GoLiveModalContextDispatch');
    });
function v(e, t) {
    switch (t.type) {
        case 'set_mute_audio':
            return h(p({}, e), { muteStreamAudio: t.value });
        case 'set_notify_friends':
            return h(p({}, e), { notifyFriends: t.value });
        case 'set_has_permission':
            return h(p({}, e), { hasPermission: t.value });
        case 'set_source_candidates':
            return h(p({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1
            });
        case 'set_preset':
            return h(p({}, e), { preset: t.preset });
        case 'set_source_type':
            if (t.sourceType === s.vA.CAMERA && e.preset === d.tI.PRESET_DOCUMENTS)
                return h(p({}, e), {
                    preset: d.tI.PRESET_VIDEO,
                    sourceType: t.sourceType
                });
            return h(p({}, e), { sourceType: t.sourceType });
        case 'set_resolution':
            return h(p({}, e), { resolution: t.resolution });
        case 'set_fps':
            return h(p({}, e), { fps: t.fps });
        default:
            return e;
    }
}
function j(e) {
    let { dispatch: t, state: n, children: l } = e;
    return (0, r.jsx)(f.Provider, {
        value: t,
        children: (0, r.jsx)(x.Provider, {
            value: n,
            children: l
        })
    });
}
function S(e) {
    let { preset: t, resolution: n, fps: r, soundshareEnabled: s } = (0, i.cj)([c.Z], () => c.Z.getState()),
        [d, x] = l.useReducer(
            v,
            h(p({}, g), {
                muteStreamAudio: !s,
                preset: t,
                resolution: n,
                fps: r,
                sourceApplication: e
            })
        ),
        f = l.useRef(new a.Xp());
    return (
        l.useEffect(() => {
            o.Z.hasPermission(m.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                x({
                    type: 'set_has_permission',
                    value: e
                })
            );
        }, []),
        l.useEffect(() => {
            let e = f.current;
            return (
                (0, u.t)({
                    width: 376,
                    height: 212
                }).then((e) => {
                    let { screenSources: t, windowSources: n, cameraSources: r } = e;
                    x({
                        type: 'set_source_candidates',
                        screenSources: t,
                        windowSources: n,
                        deviceSources: r
                    });
                }),
                e.start(1000, async () => {
                    let {
                        screenSources: e,
                        windowSources: t,
                        cameraSources: n
                    } = await (0, u.t)({
                        width: 376,
                        height: 212
                    });
                    x({
                        type: 'set_source_candidates',
                        screenSources: e,
                        windowSources: t,
                        deviceSources: n
                    });
                }),
                () => {
                    e.stop();
                }
            );
        }, []),
        {
            state: d,
            dispatch: x
        }
    );
}
function N() {
    return [l.useContext(x), l.useContext(f)];
}
