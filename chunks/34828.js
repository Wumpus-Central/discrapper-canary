(n.d(t, {
    X: () => C,
    Z: () => T
}),
    n(35282));
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(570140),
    s = n(846027),
    c = n(581883),
    u = n(131951),
    d = n(358085),
    p = n(533583),
    h = n(65154);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = { ignoredDevices: {} },
    m = g,
    b = !1,
    _ = {},
    O = {},
    E = {},
    y = {
        id: null,
        justChanged: !1
    },
    v = {
        id: null,
        justChanged: !1
    },
    I = /\(([^)]+)\)/;
function C(e) {
    if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
        let t = e.name.match(I);
        if (null != t) return t[1];
    }
    return e.name;
}
function S(e, t, n) {
    return null == e || e.displayName !== t
        ? {
              displayName: t,
              type: n
          }
        : (e.type === p.Q.INPUT && n === p.Q.OUTPUT) || (e.type === p.Q.OUTPUT && n === p.Q.INPUT)
          ? {
                displayName: t,
                type: p.Q.INPUT_AND_OUTPUT
            }
          : e;
}
class N extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        (this.waitFor(u.Z, c.Z), (m = null != e ? e : g));
    }
    getUserAgnosticState() {
        return m;
    }
    get initialized() {
        return b;
    }
    get lastDeviceConnected() {
        return E;
    }
    get inputDevices() {
        return _;
    }
    get lastInputSystemDevice() {
        return y;
    }
    get outputDevices() {
        return O;
    }
    get lastOutputSystemDevice() {
        return v;
    }
}
(f(N, 'displayName', 'ConnectedDeviceStore'),
    f(N, 'persistKey', 'ConnectedDeviceStore'),
    f(N, 'migrations', [
        (e) => {
            if (null == e.ignoredDevices) {
                var t, n;
                return (
                    (t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    f(e, t, n[t]);
                                }));
                        }
                        return e;
                    })({}, e)),
                    (n = n = { ignoredDevices: {} }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t
                );
            }
            return e;
        }
    ]));
let T = new N(o.Z, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            r = {};
        ((y.justChanged = !1),
            t.forEach((e) => {
                if (((r[C(e)] = e.id), e.id === h.w5)) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    (n !== y.id && (y.justChanged = !0), (y.id = n));
                }
            }));
        let i = {};
        if (
            ((v.justChanged = !1),
            n.forEach((e) => {
                if (((i[C(e)] = e.id), e.id === h.w5)) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    (n !== v.id && (v.justChanged = !0), (v.id = n));
                }
            }),
            !b)
        ) {
            ((_ = r), (O = i), (b = !0));
            return;
        }
        let a = Object.keys(_),
            o = Object.keys(r),
            s = Object.keys(O),
            c = Object.keys(i),
            u = l().difference(a, o),
            d = l().difference(s, c);
        return (
            u.length > 0 || d.length > 0
                ? (E = {})
                : (l()
                      .difference(o, a)
                      .forEach((e) => {
                          E[e] = S(E[e], e, p.Q.INPUT);
                      }),
                  l()
                      .difference(c, s)
                      .forEach((e) => {
                          E[e] = S(E[e], e, p.Q.OUTPUT);
                      })),
            !(l().isEqual(a, o) && l().isEqual(s, c)) && ((_ = r), (O = i), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: r } = e;
        if (n === p.a.INPUT || n === p.a.INPUT_AND_OUTPUT) {
            let e = _[t];
            null != e && o.Z.wait(() => s.Z.setInputDevice(e, { location: r }));
        }
        if (n === p.a.OUTPUT || n === p.a.INPUT_AND_OUTPUT) {
            let e = O[t];
            o.Z.wait(() => s.Z.setOutputDevice(e, { location: r }));
        }
        delete E[t];
    },
    CONNECTED_DEVICE_DONT_SWITCH: function (e) {
        let { displayName: t } = e;
        delete E[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        ((m.ignoredDevices[t] = !0), delete E[t]);
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        ((E = {}), (m.neverShowModal = !0));
    }
});
