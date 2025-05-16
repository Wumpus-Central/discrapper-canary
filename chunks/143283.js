var r = n(54640),
    i = (function () {
        var e = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })();
e.exports = function (e) {
    return !!i && i in e;
};
