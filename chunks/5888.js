n.d(t, {
    Z: () => m,
    p: () => c,
});
var r,
    i,
    l = n(442837),
    a = n(570140);
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
function o(e) {
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
var c =
    (((r = {})[(r.INIT = 0)] = "INIT"),
    (r[(r.FETCHING = 1)] = "FETCHING"),
    (r[(r.SUCCESS = 2)] = "SUCCESS"),
    (r[(r.ERROR = 3)] = "ERROR"),
    r);
let u = {},
    d = 0,
    p = {
        volume: 1,
        isMuted: !1,
    },
    f = o({}, p);
function h() {
    (u = {}), (d = 0);
}
class g extends (i = l.ZP.PersistedStore) {
    getState() {
        return f;
    }
    initialize(e) {
        h(), null != e && (f = e);
    }
    getCheckpointData() {
        return u;
    }
    getFetchState() {
        return d;
    }
    get volume() {
        return f.volume;
    }
    get isMuted() {
        return f.isMuted;
    }
}
s(g, "displayName", "CheckpointStore"), s(g, "persistKey", "CheckpointStore");
let m = new g(a.Z, {
    CONNECTION_OPEN: h,
    CHECKPOINT_FETCH_START: function () {
        d = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        (u = e.data), (d = 2);
    },
    CHECKPOINT_FETCH_FAILED: function () {
        d = 3;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        f.volume = e.volume;
    },
    CHECKPOINT_TOGGLE_MUTE: function () {
        f.isMuted = !f.isMuted;
    },
    LOGOUT: function () {
        h(), (f = o({}, p));
    },
});
