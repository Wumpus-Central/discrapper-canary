n.d(t, { A: () => o });
var l = n(311907),
    s = n(73153);
let a = !1,
    r = !1;
class i extends l.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return r;
    }
    get enabled() {
        return a;
    }
}
let o = new i(s.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        (a = e.enabled), e.enabled && (r = e.keepOpen ?? !1);
    },
});
