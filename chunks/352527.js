n.d(t, { Z: () => u });
var i,
    r,
    o,
    a = n(442837),
    s = n(570140);
let c = !1,
    d = !1;
class l extends (o = a.ZP.Store) {
    get keepOpen() {
        return d;
    }
    get enabled() {
        return c;
    }
}
(r = 'SoundboardOverlayStore'),
    (i = 'displayName') in l
        ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = r);
let u = new l(s.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((c = e.enabled), e.enabled)) {
            var t;
            d = null !== (t = e.keepOpen) && void 0 !== t && t;
        }
    }
});
