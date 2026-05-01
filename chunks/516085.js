n.d(t, { Fm: () => d, IS: () => c, Ij: () => o });
var i = n(627968);
n(64700);
var a = n(875731),
    r = n(516607),
    s = n(492213);
let l = { [r.SS]: new a.d() };
function o(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = l[t];
    if (null != n && n.shouldShow?.(e) !== !1) return n.createHeader(e);
}
function d(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = l[t];
    if (n?.body != null && n.shouldShow?.(e) !== !1) {
        let a = n.body;
        return (0, i.jsx)("section", { className: s.uW, children: (0, i.jsx)(a, { activity: e }) }, `delegate-${t}`);
    }
}
function c(e) {
    let t = e.application_id;
    if (null == t) return !0;
    let n = l[t];
    return null == n || n.shouldShow?.(e) !== !1;
}
