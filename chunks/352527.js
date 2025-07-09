a.d(t, { Z: () => u });
var n,
    r,
    l,
    i = a(442837),
    s = a(570140);
let o = !1,
    c = !1;
class d extends (l = i.ZP.Store) {
    get keepOpen() {
        return c;
    }
    get enabled() {
        return o;
    }
}
((r = 'SoundboardOverlayStore'),
    (n = 'displayName') in d
        ? Object.defineProperty(d, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[n] = r));
let u = new d(s.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((o = e.enabled), e.enabled)) {
            var t;
            c = null != (t = e.keepOpen) && t;
        }
    }
});
