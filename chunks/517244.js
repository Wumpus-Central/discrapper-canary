(a.d(t, { k: () => u, p: () => r }), a(134528), a(947204));
var n = a(1371);
let p = new Map(),
    s = new Map();
function o(e, t) {
    let a = s.get(e);
    null != a && a.source !== t && Date.now() - a.at < 3e4
        ? s.delete(e)
        : (s.set(e, { source: t, at: Date.now() }), n.A.reloadAppFrames(e));
}
function r(e, t) {
    return p.get(e) !== t && (p.set(e, t), o(e, "frame"), !0);
}
function u(e) {
    o(e, "deploy");
}
