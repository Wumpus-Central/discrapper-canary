r.d(n, {
    J: function () {
        return l;
    },
    V: function () {
        return u;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(476326),
    s = r(861990);
function l(e, n) {
    var r;
    a()(e.item.platform === o.ow.WEB, 'Upload must be in the Web format');
    let i = (0, s.B)(e, n);
    return Promise.resolve({
        file: e.item.file,
        name: null !== (r = i.filename) && void 0 !== r ? r : ''
    });
}
async function u(e) {}
