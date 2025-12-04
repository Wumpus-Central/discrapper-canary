n.d(t, {
    Z: () => S,
    p: () => c,
});
var r,
    i = n(442837),
    a = n(570140),
    o = n(612776);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
var c = (function (e) {
    return (
        (e[(e.INIT = 0)] = "INIT"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.SUCCESS = 2)] = "SUCCESS"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
let u = {},
    d = 0,
    f = {
        volume: 1,
        isMuted: !1,
        highestSlideSeen: o.yD.WELCOME,
    },
    p = l({}, f);
function _() {
    (u = {}), (d = 0);
}
function m() {
    _(), (p = l({}, f));
}
function h() {
    d = 1;
}
function g(e) {
    (u = e.data), (d = 2);
}
function E() {
    d = 3;
}
function b(e) {
    p.volume = e.volume;
}
function y() {
    p.isMuted = !p.isMuted;
}
function O(e) {
    p.highestSlideSeen = e.slide;
}
class v extends (r = i.ZP.PersistedStore) {
    getState() {
        return p;
    }
    initialize(e) {
        _(), null != e && (p = l({}, p, e));
    }
    getCheckpointData() {
        return u;
    }
    getFetchState() {
        return d;
    }
    get volume() {
        return p.volume;
    }
    get isMuted() {
        return p.isMuted;
    }
    get highestSlideSeen() {
        return p.highestSlideSeen;
    }
}
s(v, "displayName", "CheckpointStore"), s(v, "persistKey", "CheckpointStore");
let S = new v(a.Z, {
    CHECKPOINT_FETCH_START: h,
    CHECKPOINT_FETCH_SUCCESS: g,
    CHECKPOINT_FETCH_FAILED: E,
    CHECKPOINT_SET_VOLUME: b,
    CHECKPOINT_TOGGLE_MUTE: y,
    CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: O,
    LOGOUT: m,
});
