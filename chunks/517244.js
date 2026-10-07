(n.d(t, { k: () => u, p: () => a }), n(134528), n(947204));
var r = n(89505);
let i = new Map(),
    l = new Map();
function o(e, t) {
    let n = l.get(e);
    null != n && n.source !== t && Date.now() - n.at < 3e4
        ? l.delete(e)
        : (l.set(e, { source: t, at: Date.now() }), r.A.reloadAppFrames(e));
}
function a(e, t) {
    return i.get(e) !== t && (i.set(e, t), o(e, "frame"), !0);
}
function u(e) {
    o(e, "deploy");
}
