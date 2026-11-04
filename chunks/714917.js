var r = n(855986),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getBackground(e) {
        return i.get(e) ?? null;
    }
}
let l = new o(s.h, {
    CONJURE_OVERLAY_BACKGROUND_SET: function (e) {
        let { projectId: t, blur: n, imageEtag: r } = e;
        i.set(t, { blur: n, imageEtag: r });
    },
});
n.d(t, {}, { A: l });
