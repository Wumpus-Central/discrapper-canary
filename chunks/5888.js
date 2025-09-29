var r,
    i,
    l = n(442837),
    a = n(570140);
let o = {},
    s = 0;
function c() {
    (o = {}), (s = 0);
}
class u extends (i = l.ZP.Store) {
    initialize() {
        c();
    }
    getCheckpointData() {
        return o;
    }
    getFetchState() {
        return s;
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "CheckpointStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "CheckpointStore"),
    new u(a.Z, {
        CONNECTION_OPEN: c,
        CHECKPOINT_FETCH_START: function () {
            s = 1;
        },
        CHECKPOINT_FETCH_SUCCESS: function (e) {
            (o = e.data), (s = 2);
        },
        CHECKPOINT_FETCH_FAILED: function () {
            s = 3;
        },
    });
