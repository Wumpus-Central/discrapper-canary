n.d(t, { Si: () => l, a$: () => d, sm: () => o });
var i = n(284009),
    r = n.n(i),
    a = n(274652),
    s = n(292348);
function l(e, t) {
    r()(e.item.platform === a.x.WEB, "Upload must be in the Web format");
    let n = (0, s.OW)(e, t);
    return Promise.resolve({ file: e.item.file, name: n.filename ?? "" });
}
async function o(e) {}
function d(e) {
    return !1;
}
