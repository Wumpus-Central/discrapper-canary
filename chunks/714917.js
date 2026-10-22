n.d(t, { A: () => l });
var s = n(17928),
    r = n(73153);
let o = new Map();
class i extends s.Ay.Store {
    getBackground(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(r.h, {
    CONJURE_OVERLAY_BACKGROUND_SET: function (e) {
        let { projectId: t, blur: n, imageEtag: s } = e;
        o.set(t, { blur: n, imageEtag: s });
    },
});
