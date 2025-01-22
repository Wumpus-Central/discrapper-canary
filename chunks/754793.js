var r = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Int32Array;
function i(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
}
(n.assign = function (e) {
    for (var n = Array.prototype.slice.call(arguments, 1); n.length; ) {
        var r = n.shift();
        if (!!r) {
            if ('object' != typeof r) throw TypeError(r + 'must be non-object');
            for (var a in r) i(r, a) && (e[a] = r[a]);
        }
    }
    return e;
}),
    (n.shrinkBuf = function (e, n) {
        return e.length === n ? e : e.subarray ? e.subarray(0, n) : ((e.length = n), e);
    });
var a = {
        arraySet: function (e, n, r, i, a) {
            if (n.subarray && e.subarray) {
                e.set(n.subarray(r, r + i), a);
                return;
            }
            for (var o = 0; o < i; o++) e[a + o] = n[r + o];
        },
        flattenChunks: function (e) {
            var n, r, i, a, o, s;
            for (n = 0, i = 0, r = e.length; n < r; n++) i += e[n].length;
            for (n = 0, s = new Uint8Array(i), a = 0, r = e.length; n < r; n++) (o = e[n]), s.set(o, a), (a += o.length);
            return s;
        }
    },
    o = {
        arraySet: function (e, n, r, i, a) {
            for (var o = 0; o < i; o++) e[a + o] = n[r + o];
        },
        flattenChunks: function (e) {
            return [].concat.apply([], e);
        }
    };
(n.setTyped = function (e) {
    e ? ((n.Buf8 = Uint8Array), (n.Buf16 = Uint16Array), (n.Buf32 = Int32Array), n.assign(n, a)) : ((n.Buf8 = Array), (n.Buf16 = Array), (n.Buf32 = Array), n.assign(n, o));
}),
    n.setTyped(r);
