(n.d(t, { k: () => u, p: () => a }), n(134528), n(947204));
var r = n(28480);
let l = new Map(),
    i = new Map();
function o(e, t) {
    let n = i.get(e);
    null != n && n.source !== t && Date.now() - n.at < 3e4
        ? i.delete(e)
        : (i.set(e, { source: t, at: Date.now() }), r.A.reloadAppFrames(e));
}
function a(e, t) {
    return l.get(e) !== t && (l.set(e, t), o(e, "frame"), !0);
}
function u(e) {
    o(e, "deploy");
}
