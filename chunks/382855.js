n.d(t, { Z: () => o });
var r = n(451530),
    i = (function () {
        var e = /[^.]+$/.exec((r.Z && r.Z.keys && r.Z.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })();
let o = function (e) {
    return !!i && i in e;
};
