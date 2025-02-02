n.d(t, { Z: () => u });
var i,
    r,
    a,
    o = n(442837),
    s = n(570140);
let d = !1,
    c = !1;
class l extends (a = o.ZP.Store) {
    get keepOpen() {
        return c;
    }
    get enabled() {
        return d;
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
        if (((d = e.enabled), e.enabled)) {
            var t;
            c = null !== (t = e.keepOpen) && void 0 !== t && t;
        }
    }
});
