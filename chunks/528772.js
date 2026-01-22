r.d(t, {
    A: () => s,
});
var n,
    o,
    u = r(311907),
    i = r(73153);
let l = !1,
    a = !1;
class c extends (o = u.Ay.Store) {
    get keepOpen() {
        return a;
    }
    get enabled() {
        return l;
    }
}
(n = "displayName") in c
    ? Object.defineProperty(c, n, {
          value: "SoundboardOverlayStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[n] = "SoundboardOverlayStore");
let s = new c(i.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((l = e.enabled), e.enabled)) {
            var t;
            a = null != (t = e.keepOpen) && t;
        }
    },
});
