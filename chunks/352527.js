a.d(t, { Z: () => d });
var n,
    r,
    l = a(442837),
    i = a(570140);
let s = !1,
    o = !1;
class c extends (r = l.ZP.Store) {
    get keepOpen() {
        return o;
    }
    get enabled() {
        return s;
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
let d = new c(i.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((s = e.enabled), e.enabled)) {
            var t;
            o = null != (t = e.keepOpen) && t;
        }
    },
});
