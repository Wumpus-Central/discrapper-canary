var i = n(608282),
    r = (function () {
        var e = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })();
function a(e) {
    return !!r && r in e;
}
e.exports = a;
