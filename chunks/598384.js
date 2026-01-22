n.d(t, {
    A: () => u,
});
var r,
    i,
    l = n(311907),
    a = n(73153);
let s = "UPDATE_NOT_AVAILABLE";

function o(e) {
    s = e.type;
}
class c extends (i = l.Ay.Store) {
    getState() {
        return s;
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "AutoUpdateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "AutoUpdateStore");
let u = new c(a.h, {
    CHECKING_FOR_UPDATES: o,
    UPDATE_NOT_AVAILABLE: o,
    UPDATE_AVAILABLE: o,
    UPDATE_MANUALLY: o,
    UPDATE_ERROR: o,
    UPDATE_DOWNLOADED: o,
});
