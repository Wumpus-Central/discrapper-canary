n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getBackground(e) {
        return o.get(e) ?? null;
    }
}
let a = new i(s.h, {
    CONJURE_OVERLAY_BACKGROUND_SET: function (e) {
        let { projectId: t, blur: n, imageEtag: r } = e;
        o.set(t, { blur: n, imageEtag: r });
    },
});
