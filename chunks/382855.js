n.d(t, { Z: () => a });
var i = n(451530),
    r = (function () {
        var e = /[^.]+$/.exec((i.Z && i.Z.keys && i.Z.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })();
let a = function (e) {
    return !!r && r in e;
};
