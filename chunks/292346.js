Object.defineProperty(t, '__esModule', { value: !0 });
var n = {},
    r = (t.render = function (e, t, n, r) {
        if ('undefined' == typeof document && !r) return null;
        var i = r ? new r() : document.createElement('canvas');
        (i.width = 2 * n), (i.height = 2 * n);
        var o = i.getContext('2d');
        return o ? ((o.fillStyle = e), o.fillRect(0, 0, i.width, i.height), (o.fillStyle = t), o.fillRect(0, 0, n, n), o.translate(n, n), o.fillRect(0, 0, n, n), i.toDataURL()) : null;
    });
t.get = function (e, t, i, o) {
    var a = e + '-' + t + '-' + i + (o ? '-server' : '');
    if (n[a]) return n[a];
    var s = r(e, t, i, o);
    return (n[a] = s), s;
};
