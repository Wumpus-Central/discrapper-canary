Object.defineProperty(t, '__esModule', { value: !0 });
var r = {},
    n = (t.render = function (e, t, r, n) {
        if ('undefined' == typeof document && !n) return null;
        var o = n ? new n() : document.createElement('canvas');
        (o.width = 2 * r), (o.height = 2 * r);
        var a = o.getContext('2d');
        return a ? ((a.fillStyle = e), a.fillRect(0, 0, o.width, o.height), (a.fillStyle = t), a.fillRect(0, 0, r, r), a.translate(r, r), a.fillRect(0, 0, r, r), o.toDataURL()) : null;
    });
t.get = function (e, t, o, a) {
    var i = e + '-' + t + '-' + o + (a ? '-server' : '');
    if (r[i]) return r[i];
    var l = n(e, t, o, a);
    return (r[i] = l), l;
};
