var i,
    o,
    r,
    a,
    l = n(442837),
    s = n(570140);
let d = !1,
    c = !1;
class u extends (a = l.ZP.Store) {
    get keepOpen() {
        return c;
    }
    get enabled() {
        return d;
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
    (t.Z = new u(s.Z, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((d = e.enabled), e.enabled)) {
                var t;
                c = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
        }
    }));
