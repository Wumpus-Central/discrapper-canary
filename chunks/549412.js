"use strict";
var n = "u" > typeof Uint8Array && "u" > typeof Uint16Array && "u" > typeof Int32Array;
(t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var n = t.shift();
        if (n) {
            if ("object" != typeof n) throw TypeError(n + "must be non-object");
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
    }
    return e;
}),
    (t.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
    });
var i = {
        arraySet: function (e, t, n, i, r) {
            if (t.subarray && e.subarray) return void e.set(t.subarray(n, n + i), r);
            for (var s = 0; s < i; s++) e[r + s] = t[n + s];
        },
        flattenChunks: function (e) {
            var t, n, i, r, s, a;
            for (t = 0, i = 0, n = e.length; t < n; t++) i += e[t].length;
            for (t = 0, a = new Uint8Array(i), r = 0, n = e.length; t < n; t++)
                (s = e[t]), a.set(s, r), (r += s.length);
            return a;
        },
    },
    r = {
        arraySet: function (e, t, n, i, r) {
            for (var s = 0; s < i; s++) e[r + s] = t[n + s];
        },
        flattenChunks: function (e) {
            return [].concat.apply([], e);
        },
    };
(t.setTyped = function (e) {
    e
        ? ((t.Buf8 = Uint8Array), (t.Buf16 = Uint16Array), (t.Buf32 = Int32Array), t.assign(t, i))
        : ((t.Buf8 = Array), (t.Buf16 = Array), (t.Buf32 = Array), t.assign(t, r));
}),
    t.setTyped(n);
