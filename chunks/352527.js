n.d(t, { Z: () => c });
var l,
    i,
    r = n(442837),
    a = n(570140);
let o = !1,
    s = !1;
class u extends (i = r.ZP.Store) {
    get keepOpen() {
        return s;
    }
    get enabled() {
        return o;
    }
}
(l = "displayName") in u
    ? Object.defineProperty(u, l, {
          value: "SoundboardOverlayStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[l] = "SoundboardOverlayStore");
let c = new u(a.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((o = e.enabled), e.enabled)) {
            var t;
            s = null != (t = e.keepOpen) && t;
        }
    },
});
