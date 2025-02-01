Object.defineProperty(t, '__esModule', { value: !0 });
var n = {},
    i = (t.render = function (e, t, n, i) {
        if ('undefined' == typeof document && !i) return null;
        var r = i ? new i() : document.createElement('canvas');
        (r.width = 2 * n), (r.height = 2 * n);
        var a = r.getContext('2d');
        return a ? ((a.fillStyle = e), a.fillRect(0, 0, r.width, r.height), (a.fillStyle = t), a.fillRect(0, 0, n, n), a.translate(n, n), a.fillRect(0, 0, n, n), r.toDataURL()) : null;
    });
t.get = function (e, t, r, a) {
    var s = e + '-' + t + '-' + r + (a ? '-server' : '');
    if (n[s]) return n[s];
    var o = i(e, t, r, a);
    return (n[s] = o), o;
};
