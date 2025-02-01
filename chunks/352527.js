n.d(t, { Z: () => _ });
var i,
    a,
    o,
    r = n(442837),
    s = n(570140);
let l = !1,
    d = !1;
class c extends (o = r.ZP.Store) {
    get keepOpen() {
        return d;
    }
    get enabled() {
        return l;
    }
}
(a = 'SoundboardOverlayStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = a);
let _ = new c(s.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((l = e.enabled), e.enabled)) {
            var t;
            d = null !== (t = e.keepOpen) && void 0 !== t && t;
        }
    }
});
