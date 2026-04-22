"use strict";
var n = "u" > typeof Uint8Array && "u" > typeof Uint16Array && "u" > typeof Int32Array;
(t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var n = t.shift();
        if (n) {
            if ("object" != typeof n) throw TypeError(n + "must be non-object");
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
    }
    return e;
}),
    (t.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
    });
var r = {
        arraySet: function (e, t, n, r, i) {
            if (t.subarray && e.subarray) return void e.set(t.subarray(n, n + r), i);
            for (var s = 0; s < r; s++) e[i + s] = t[n + s];
        },
        flattenChunks: function (e) {
            var t, n, r, i, s, a;
            for (t = 0, r = 0, n = e.length; t < n; t++) r += e[t].length;
            for (t = 0, a = new Uint8Array(r), i = 0, n = e.length; t < n; t++)
                (s = e[t]), a.set(s, i), (i += s.length);
            return a;
        },
    },
    i = {
        arraySet: function (e, t, n, r, i) {
            for (var s = 0; s < r; s++) e[i + s] = t[n + s];
        },
        flattenChunks: function (e) {
            return [].concat.apply([], e);
        },
    };
(t.setTyped = function (e) {
    e
        ? ((t.Buf8 = Uint8Array), (t.Buf16 = Uint16Array), (t.Buf32 = Int32Array), t.assign(t, r))
        : ((t.Buf8 = Array), (t.Buf16 = Array), (t.Buf32 = Array), t.assign(t, i));
}),
    t.setTyped(n);
