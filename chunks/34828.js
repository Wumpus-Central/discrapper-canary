n.d(t, {
    X: () => C,
    Z: () => N,
}),
    n(35282);
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    s = n(570140),
    o = n(846027),
    c = n(581883),
    u = n(131951),
    d = n(358085),
    p = n(533583),
    f = n(65154);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = { ignoredDevices: {} },
    m = h,
    _ = !1,
    b = {},
    E = {},
    O = {},
    v = {
        id: null,
        justChanged: !1,
    },
    y = {
        id: null,
        justChanged: !1,
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
              type: n,
          }
        : (e.type === p.Q.INPUT && n === p.Q.OUTPUT) || (e.type === p.Q.OUTPUT && n === p.Q.INPUT)
          ? {
                displayName: t,
                type: p.Q.INPUT_AND_OUTPUT,
            }
          : e;
}
class T extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z, c.Z), (m = null != e ? e : h);
    }
    getUserAgnosticState() {
        return m;
    }
    get initialized() {
        return _;
    }
    get lastDeviceConnected() {
        return O;
    }
    get inputDevices() {
        return b;
    }
    get lastInputSystemDevice() {
        return v;
    }
    get outputDevices() {
        return E;
    }
    get lastOutputSystemDevice() {
        return y;
    }
}
g(T, "displayName", "ConnectedDeviceStore"),
    g(T, "persistKey", "ConnectedDeviceStore"),
    g(T, "migrations", [
        (e) => {
            if (null == e.ignoredDevices) {
                var t, n;
                return (
                    (t = (function (e) {
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
                                    g(e, t, n[t]);
                                });
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
        },
    ]);
let N = new T(s.Z, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            r = {};
        (v.justChanged = !1),
            t.forEach((e) => {
                if (((r[C(e)] = e.id), e.id === f.w5)) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    n !== v.id && (v.justChanged = !0), (v.id = n);
                }
            });
        let i = {};
        if (
            ((y.justChanged = !1),
            n.forEach((e) => {
                if (((i[C(e)] = e.id), e.id === f.w5)) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    n !== y.id && (y.justChanged = !0), (y.id = n);
                }
            }),
            !_)
        ) {
            (b = r), (E = i), (_ = !0);
            return;
        }
        let a = Object.keys(b),
            s = Object.keys(r),
            o = Object.keys(E),
            c = Object.keys(i),
            u = l().difference(a, s),
            d = l().difference(o, c);
        return (
            u.length > 0 || d.length > 0
                ? (O = {})
                : (l()
                      .difference(s, a)
                      .forEach((e) => {
                          O[e] = S(O[e], e, p.Q.INPUT);
                      }),
                  l()
                      .difference(c, o)
                      .forEach((e) => {
                          O[e] = S(O[e], e, p.Q.OUTPUT);
                      })),
            !(l().isEqual(a, s) && l().isEqual(o, c)) && ((b = r), (E = i), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: r } = e;
        if (n === p.a.INPUT || n === p.a.INPUT_AND_OUTPUT) {
            let e = b[t];
            null != e && s.Z.wait(() => o.Z.setInputDevice(e, { location: r }));
        }
        if (n === p.a.OUTPUT || n === p.a.INPUT_AND_OUTPUT) {
            let e = E[t];
            s.Z.wait(() => o.Z.setOutputDevice(e, { location: r }));
        }
        delete O[t];
    },
    CONNECTED_DEVICE_DONT_SWITCH: function (e) {
        let { displayName: t } = e;
        delete O[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        (m.ignoredDevices[t] = !0), delete O[t];
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        (O = {}), (m.neverShowModal = !0);
    },
});
