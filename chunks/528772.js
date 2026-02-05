n.d(t, { A: () => s });
var r = n(311907),
    a = n(73153);
let l = !1,
    i = !1;
class u extends r.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return i;
    }
    get enabled() {
        return l;
    }
}
let s = new u(a.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        (l = e.enabled), e.enabled && (i = e.keepOpen ?? !1);
    },
});
