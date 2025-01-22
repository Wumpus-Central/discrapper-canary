var i,
    o,
    r,
    a,
    l = n(442837),
    c = n(570140);
let s = !1,
    d = !1;
class u extends (a = l.ZP.Store) {
    get keepOpen() {
        return d;
    }
    get enabled() {
        return s;
    }
}
(r = 'SoundboardOverlayStore'),
    (o = 'displayName') in (i = u)
        ? Object.defineProperty(i, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = r),
    (t.Z = new u(c.Z, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((s = e.enabled), e.enabled)) {
                var t;
                d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
        }
    }));
