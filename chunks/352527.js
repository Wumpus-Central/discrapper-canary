n.d(t, { Z: () => u });
var a,
    r,
    l,
    i = n(442837),
    o = n(570140);
let s = !1,
    c = !1;
class d extends (l = i.ZP.Store) {
    get keepOpen() {
        return c;
    }
    get enabled() {
        return s;
    }
}
(r = 'SoundboardOverlayStore'),
    (a = 'displayName') in d
        ? Object.defineProperty(d, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[a] = r);
let u = new d(o.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((s = e.enabled), e.enabled)) {
            var t;
            c = null != (t = e.keepOpen) && t;
        }
    }
});
