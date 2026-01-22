n.d(t, {
    Si: () => o,
    a$: () => c,
    sm: () => l,
});
var r = n(284009),
    i = n.n(r),
    a = n(565150),
    s = n(292348);

function o(e, t) {
    var n;
    i()(e.item.platform === a.xz.WEB, "Upload must be in the Web format");
    let r = (0, s.OW)(e, t);
    return Promise.resolve({
        file: e.item.file,
        name: null != (n = r.filename) ? n : "",
    });
}
async function l(e) {}

function c(e) {
    return !1;
}
