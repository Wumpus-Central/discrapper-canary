n.d(t, { Fm: () => o, IS: () => E, Ij: () => l });
var i = n(627968);
n(64700);
var r = n(875731),
    a = n(516607),
    s = n(492213);
let _ = { [a.SS]: new r.d() };
function l(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = _[t];
    if (null != n && n.shouldShow?.(e) !== !1) return n.createHeader(e);
}
function o(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = _[t];
    if (n?.body != null && n.shouldShow?.(e) !== !1) {
        let r = n.body;
        return (0, i.jsx)("section", { className: s.uW, children: (0, i.jsx)(r, { activity: e }) }, `delegate-${t}`);
    }
}
function E(e) {
    let t = e.application_id;
    if (null == t) return !0;
    let n = _[t];
    return null == n || n.shouldShow?.(e) !== !1;
}
