n.d(t, {
    Z: () => h,
    p: () => o,
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
var o =
    (((r = {})[(r.INIT = 0)] = "INIT"),
    (r[(r.FETCHING = 1)] = "FETCHING"),
    (r[(r.SUCCESS = 2)] = "SUCCESS"),
    (r[(r.ERROR = 3)] = "ERROR"),
    r);
let c = {},
    u = 0,
    d = {
        volume: 1,
        isMuted: !1,
    };
function p() {
    (c = {}), (u = 0);
}
class f extends (i = l.ZP.PersistedStore) {
    getState() {
        return d;
    }
    initialize(e) {
        p(), null != e && (d = e);
    }
    getCheckpointData() {
        return c;
    }
    getFetchState() {
        return u;
    }
    get volume() {
        return d.volume;
    }
    get isMuted() {
        return d.isMuted;
    }
}
s(f, "displayName", "CheckpointStore"), s(f, "persistKey", "CheckpointStore");
let h = new f(a.Z, {
    CONNECTION_OPEN: p,
    CHECKPOINT_FETCH_START: function () {
        u = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        (c = e.data), (u = 2);
    },
    CHECKPOINT_FETCH_FAILED: function () {
        u = 3;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        d.volume = e.volume;
    },
    CHECKPOINT_TOGGLE_MUTE: function () {
        d.isMuted = !d.isMuted;
    },
});
