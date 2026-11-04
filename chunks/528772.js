var n = a(855986),
    d = a(73153);
let p = !1,
    r = !1;
class s extends n.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return r;
    }
    get enabled() {
        return p;
    }
}
let c = new s(d.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        ((p = e.enabled), e.enabled && (r = e.keepOpen ?? !1));
    },
});
a.d(t, {}, { A: c });
