n.d(t, { Z: () => u });
var i,
    o,
    r,
    a = n(442837),
    c = n(570140);
let s = !1,
    l = !1;
class d extends (r = a.ZP.Store) {
    get keepOpen() {
        return l;
    }
    get enabled() {
        return s;
    }
}
(o = 'SoundboardOverlayStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = o);
let u = new d(c.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((s = e.enabled), e.enabled)) {
            var t;
            l = null !== (t = e.keepOpen) && void 0 !== t && t;
        }
    }
});
