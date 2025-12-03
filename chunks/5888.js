n.d(t, {
    Z: () => _,
    p: () => u,
});
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(612776);
function o(e, t, n) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
var u =
    (((r = {})[(r.INIT = 0)] = "INIT"),
    (r[(r.FETCHING = 1)] = "FETCHING"),
    (r[(r.SUCCESS = 2)] = "SUCCESS"),
    (r[(r.ERROR = 3)] = "ERROR"),
    r);
let d = {},
    p = 0,
    f = {
        volume: 1,
        isMuted: !1,
        highestSlideSeen: s.yD.WELCOME,
    },
    h = c({}, f);
function g() {
    (d = {}), (p = 0);
}
class m extends (i = l.ZP.PersistedStore) {
    getState() {
        return h;
    }
    initialize(e) {
        g(), null != e && (h = c({}, h, e));
    }
    getCheckpointData() {
        return d;
    }
    getFetchState() {
        return p;
    }
    get volume() {
        return h.volume;
    }
    get isMuted() {
        return h.isMuted;
    }
    get highestSlideSeen() {
        return h.highestSlideSeen;
    }
}
o(m, "displayName", "CheckpointStore"), o(m, "persistKey", "CheckpointStore");
let _ = new m(a.Z, {
    CONNECTION_OPEN: g,
    CHECKPOINT_FETCH_START: function () {
        p = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        (d = e.data), (p = 2);
    },
    CHECKPOINT_FETCH_FAILED: function () {
        p = 3;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        h.volume = e.volume;
    },
    CHECKPOINT_TOGGLE_MUTE: function () {
        h.isMuted = !h.isMuted;
    },
    CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: function (e) {
        h.highestSlideSeen = e.slide;
    },
    LOGOUT: function () {
        g(), (h = c({}, f));
    },
});
