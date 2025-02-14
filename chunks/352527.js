n.d(t, { Z: () => c });
var i,
    l,
    r,
    o = n(442837),
    a = n(570140);
let s = !1,
    d = !1;
class u extends (r = o.ZP.Store) {
    get keepOpen() {
        return d;
    }
    get enabled() {
        return s;
    }
}
(l = 'SoundboardOverlayStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = l);
let c = new u(a.Z, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        if (((s = e.enabled), e.enabled)) {
            var t;
            d = null !== (t = e.keepOpen) && void 0 !== t && t;
        }
    }
});
