(a(134528), a(947204));
var n = a(519325);
let p = new Map(),
    s = new Map();
function o(e, t) {
    let a = s.get(e);
    null != a && a.source !== t && Date.now() - a.at < 3e4
        ? s.delete(e)
        : (s.set(e, { source: t, at: Date.now() }), n.A.reloadAppFrames(e));
}
a.d(
    t,
    {},
    {
        k: function (e) {
            o(e, "deploy");
        },
        p: function (e, t) {
            return p.get(e) !== t && (p.set(e, t), o(e, "frame"), !0);
        },
    },
);
