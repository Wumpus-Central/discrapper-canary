var n = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Int32Array;
function r(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var n = t.shift();
        if (n) {
            if ('object' != typeof n) throw TypeError(n + 'must be non-object');
            for (var i in n) r(n, i) && (e[i] = n[i]);
        }
    }
    return e;
}),
    (t.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
    });
var i = {
        arraySet: function (e, t, n, r, i) {
            if (t.subarray && e.subarray) return void e.set(t.subarray(n, n + r), i);
            for (var o = 0; o < r; o++) e[i + o] = t[n + o];
        },
        flattenChunks: function (e) {
            var t, n, r, i, o, a;
            for (t = 0, r = 0, n = e.length; t < n; t++) r += e[t].length;
            for (t = 0, a = new Uint8Array(r), i = 0, n = e.length; t < n; t++) (o = e[t]), a.set(o, i), (i += o.length);
            return a;
        }
    },
    o = {
        arraySet: function (e, t, n, r, i) {
            for (var o = 0; o < r; o++) e[i + o] = t[n + o];
        },
        flattenChunks: function (e) {
            return [].concat.apply([], e);
        }
    };
(t.setTyped = function (e) {
    e ? ((t.Buf8 = Uint8Array), (t.Buf16 = Uint16Array), (t.Buf32 = Int32Array), t.assign(t, i)) : ((t.Buf8 = Array), (t.Buf16 = Array), (t.Buf32 = Array), t.assign(t, o));
}),
    t.setTyped(n);
