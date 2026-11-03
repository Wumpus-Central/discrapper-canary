a.d(l, { Ay: () => u, XP: () => p, aL: () => b, dR: () => h, nh: () => c, s2: () => x });
var t = a(582128),
    o = a(17928),
    n = a(506774),
    i = a(73153);
let s = "GlobalBannerAppPreview.v5";
class r extends o.Ay.Store {
    static displayName = "GlobalBannerPreviewStore";
    config;
    getConfig() {
        return (void 0 === this.config && (this.config = n.w.get(s) ?? null), this.config);
    }
    setConfig(e) {
        ((this.config = e), null == e ? n.w.remove(s) : n.w.set(s, e), this.emitChange());
    }
}
let d = new r(i.h),
    u = 221552 == a.j ? d : null;
function c(e) {
    d.setConfig(e);
}
function b() {
    (d.setConfig(null), x(!1));
}
function p() {
    return (0, o.bG)([d], () => d.getConfig());
}
let m = new Set(),
    y = !1;
function v(e) {
    return (
        m.add(e),
        () => {
            m.delete(e);
        }
    );
}
function x(e) {
    if (e !== y) for (let l of ((y = e), m)) l();
}
function h() {
    return t.useSyncExternalStore(v, () => y);
}
