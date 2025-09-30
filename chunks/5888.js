n.d(t, {
    Z: () => f,
    p: () => s,
});
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s =
        (((r = {})[(r.INIT = 0)] = "INIT"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let c = {},
    u = 0;
function d() {
    (c = {}), (u = 0);
}
class p extends (l = a.ZP.Store) {
    initialize() {
        d();
    }
    getCheckpointData() {
        return c;
    }
    getFetchState() {
        return u;
    }
}
(i = "displayName") in p
    ? Object.defineProperty(p, i, {
          value: "CheckpointStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[i] = "CheckpointStore");
let f = new p(o.Z, {
    CONNECTION_OPEN: d,
    CHECKPOINT_FETCH_START: function () {
        u = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        (c = e.data), (u = 2);
    },
    CHECKPOINT_FETCH_FAILED: function () {
        u = 3;
    },
});
