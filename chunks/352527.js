n.d(t, { Z: () => d });
var a,
    r,
    l = n(442837),
    i = n(570140);
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
(a = "displayName") in c
    ? Object.defineProperty(c, a, {
          value: "SoundboardOverlayStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[a] = "SoundboardOverlayStore");
let d = new c(i.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((s = e.enabled), e.enabled)) {
            var t;
            o = null != (t = e.keepOpen) && t;
        }
    },
});
