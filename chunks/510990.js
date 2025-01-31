n.d(t, {
    J: () => o,
    V: () => l
});
var i = n(512722),
    r = n.n(i),
    a = n(476326),
    s = n(861990);
function o(e, t) {
    var n;
    r()(e.item.platform === a.ow.WEB, 'Upload must be in the Web format');
    let i = (0, s.B)(e, t);
    return Promise.resolve({
        file: e.item.file,
        name: null !== (n = i.filename) && void 0 !== n ? n : ''
    });
}
async function l(e) {}
