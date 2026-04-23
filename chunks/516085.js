"use strict";
n.d(t, { Fm: () => u, IS: () => c, Ij: () => l });
var r = n(627968);
n(64700);
var i = n(875731),
    s = n(516607),
    a = n(492213);
let o = { [s.SS]: new i.d() };
function l(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = o[t];
    if (null != n && n.shouldShow?.(e) !== !1) return n.createHeader(e);
}
function u(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = o[t];
    if (n?.body != null && n.shouldShow?.(e) !== !1) {
        let i = n.body;
        return (0, r.jsx)("section", { className: a.uW, children: (0, r.jsx)(i, { activity: e }) }, `delegate-${t}`);
    }
}
function c(e) {
    let t = e.application_id;
    if (null == t) return !0;
    let n = o[t];
    return null == n || n.shouldShow?.(e) !== !1;
}
