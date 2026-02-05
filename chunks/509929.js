"use strict";
n.d(t, { Si: () => o, a$: () => u, sm: () => l });
var r = n(284009),
    i = n.n(r),
    a = n(565150),
    s = n(292348);
function o(e, t) {
    i()(e.item.platform === a.xz.WEB, "Upload must be in the Web format");
    let n = (0, s.OW)(e, t);
    return Promise.resolve({ file: e.item.file, name: n.filename ?? "" });
}
async function l(e) {}
function u(e) {
    return !1;
}
