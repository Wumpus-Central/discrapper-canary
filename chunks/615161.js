n.d(t, {
    E_: () => Z,
    Ti: () => N,
    Yw: () => S
}),
    n(411104),
    n(47120);
var r = n(200651),
    l = n(192379),
    s = n(268146),
    i = n(442837),
    a = n(846519),
    o = n(751571),
    c = n(695346),
    u = n(361291),
    d = n(59468),
    m = n(37113),
    p = n(761274);
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
        hasPermission: !1,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: m.tI.PRESET_CUSTOM,
        resolution: m.LY.RESOLUTION_720,
        fps: m.ws.FPS_30,
        sourceType: s.vA.WINDOW,
        fetchingSources: !0,
        sourceApplication: void 0
    },
    v = l.createContext(x),
    f = l.createContext(() => {
        throw Error('Using uninitialized GoLiveModalContextDispatch');
    });
function j(e, t) {
    switch (t.type) {
        case 'set_mute_audio':
            return g(h({}, e), { muteStreamAudio: t.value });
        case 'set_notify_friends':
            return g(h({}, e), { notifyFriends: t.value });
        case 'set_has_permission':
            return g(h({}, e), { hasPermission: t.value });
        case 'set_source_candidates':
            return g(h({}, e), {
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1
            });
        case 'set_preset':
            return g(h({}, e), { preset: t.preset });
        case 'set_source_type':
            if (t.sourceType === s.vA.CAMERA && e.preset === m.tI.PRESET_DOCUMENTS)
                return g(h({}, e), {
                    preset: m.tI.PRESET_VIDEO,
                    sourceType: t.sourceType
                });
            return g(h({}, e), { sourceType: t.sourceType });
        case 'set_resolution':
            return g(h({}, e), { resolution: t.resolution });
        case 'set_fps':
            return g(h({}, e), { fps: t.fps });
        case 'set_hide_preview':
            return g(h({}, e), { hidePreview: t.hidePreview });
        default:
            return e;
    }
}
function S(e) {
    let { dispatch: t, state: n, children: l } = e;
    return (0, r.jsx)(f.Provider, {
        value: t,
        children: (0, r.jsx)(v.Provider, {
            value: n,
            children: l
        })
    });
}
function N(e) {
    var t;
    let { preset: n, resolution: r, fps: s, soundshareEnabled: m } = (0, i.cj)([u.Z], () => u.Z.getState()),
        v = null !== (t = c.I0.useSetting()) && void 0 !== t && t,
        [f, S] = l.useReducer(
            j,
            g(h({}, x), {
                muteStreamAudio: !m,
                preset: n,
                resolution: r,
                fps: s,
                hidePreview: v,
                sourceApplication: e
            })
        ),
        N = l.useRef(new a.Xp());
    return (
        l.useEffect(() => {
            o.Z.hasPermission(p.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                S({
                    type: 'set_has_permission',
                    value: e
                })
            );
        }, []),
        l.useEffect(() => {
            let e = N.current;
            return (
                (0, d.t)({
                    width: 376,
                    height: 212
                }).then((e) => {
                    let { screenSources: t, windowSources: n, cameraSources: r } = e;
                    S({
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
                    } = await (0, d.t)({
                        width: 376,
                        height: 212
                    });
                    S({
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
            state: f,
            dispatch: S
        }
    );
}
function Z() {
    return [l.useContext(v), l.useContext(f)];
}
