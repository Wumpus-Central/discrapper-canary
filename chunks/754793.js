var n = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Int32Array;
function i(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var n = t.shift();
        if (n) {
            if ('object' != typeof n) throw TypeError(n + 'must be non-object');
            for (var r in n) i(n, r) && (e[r] = n[r]);
        }
    }
    return e;
}),
    (t.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
    });
var r = {
        arraySet: function (e, t, n, i, r) {
            if (t.subarray && e.subarray) {
                e.set(t.subarray(n, n + i), r);
                return;
            }
            for (var a = 0; a < i; a++) e[r + a] = t[n + a];
        },
        flattenChunks: function (e) {
            var t, n, i, r, a, s;
            for (t = 0, i = 0, n = e.length; t < n; t++) i += e[t].length;
            for (t = 0, s = new Uint8Array(i), r = 0, n = e.length; t < n; t++) (a = e[t]), s.set(a, r), (r += a.length);
            return s;
        }
    },
    a = {
        arraySet: function (e, t, n, i, r) {
            for (var a = 0; a < i; a++) e[r + a] = t[n + a];
        },
        flattenChunks: function (e) {
            return [].concat.apply([], e);
        }
    };
(t.setTyped = function (e) {
    e ? ((t.Buf8 = Uint8Array), (t.Buf16 = Uint16Array), (t.Buf32 = Int32Array), t.assign(t, r)) : ((t.Buf8 = Array), (t.Buf16 = Array), (t.Buf32 = Array), t.assign(t, a));
}),
    t.setTyped(n);
