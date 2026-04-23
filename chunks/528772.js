n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = !1,
    l = !1;
class o extends r.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return l;
    }
    get enabled() {
        return a;
    }
}
let d = new o(i.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        (a = e.enabled), e.enabled && (l = e.keepOpen ?? !1);
    },
});
