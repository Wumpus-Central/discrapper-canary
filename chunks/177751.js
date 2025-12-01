n.d(t, {
    Ir: () => _,
    RT: () => m,
    ZP: () => v,
});
var r,
    i = n(31775),
    a = n.n(i),
    o = n(442837),
    s = n(570140);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var _ = (function (e) {
    return (e.VOICE_MESSAGE = "voice_message"), e;
})({});
let m = (e, t) => "".concat(e, "-").concat(t),
    h = 25,
    g = {
        rates: { voice_message: 1 },
        positions: new (a())({ max: h }),
    },
    E = c({}, g);
function b(e) {
    let { rate: t, playbackType: n } = e;
    E = d(c({}, E), { rates: d(c({}, E.rates), { [n]: t }) });
}
function y(e) {
    let { cacheKey: t, position: n, duration: r } = e;
    n > 0.5 && n < 0.95 * r ? E.positions.set(t, n) : E.positions.del(t);
}
class O extends (r = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        let t = null != e ? e : {},
            { positions: n } = t;
        (E = c({}, g, f(t, ["positions"]))), null != n && E.positions.load(n);
    }
    getUserAgnosticState() {
        return {
            rates: E.rates,
            positions: E.positions.dump(),
        };
    }
    getPlaybackRate(e) {
        var t;
        return null != (t = E.rates[e]) ? t : 1;
    }
    getPlaybackPosition(e) {
        var t;
        return null != (t = E.positions.get(e)) ? t : 0;
    }
}
l(O, "displayName", "MediaPlaybackStore"), l(O, "persistKey", "MediaPlaybackStore");
let v = new O(s.Z, {
    MEDIA_PLAYBACK_RATE_UPDATE: b,
    MEDIA_PLAYBACK_POSITION_UPDATE: y,
});
