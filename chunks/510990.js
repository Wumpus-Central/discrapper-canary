n.d(t, {
    J: () => s,
    V: () => l
});
var r = n(512722),
    i = n.n(r),
    o = n(476326),
    a = n(861990);
function s(e, t) {
    var n;
    i()(e.item.platform === o.ow.WEB, 'Upload must be in the Web format');
    let r = (0, a.B)(e, t);
    return Promise.resolve({
        file: e.item.file,
        name: null != (n = r.filename) ? n : ''
    });
}
async function l(e) {}
