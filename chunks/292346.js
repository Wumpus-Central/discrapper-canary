Object.defineProperty(n, '__esModule', { value: !0 });
var r = {},
    i = (n.render = function (e, n, r, i) {
        if ('undefined' == typeof document && !i) return null;
        var a = i ? new i() : document.createElement('canvas');
        (a.width = 2 * r), (a.height = 2 * r);
        var o = a.getContext('2d');
        return o ? ((o.fillStyle = e), o.fillRect(0, 0, a.width, a.height), (o.fillStyle = n), o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), a.toDataURL()) : null;
    });
n.get = function (e, n, a, o) {
    var s = e + '-' + n + '-' + a + (o ? '-server' : '');
    if (r[s]) return r[s];
    var l = i(e, n, a, o);
    return (r[s] = l), l;
};
