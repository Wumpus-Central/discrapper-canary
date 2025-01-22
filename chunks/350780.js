var i = r(608282),
    a = (function () {
        var e = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })();
function o(e) {
    return !!a && a in e;
}
e.exports = o;
