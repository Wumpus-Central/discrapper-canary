t.exports = function (t, a) {
    a = a || {};
    var r,
        e,
        i,
        s,
        u,
        h,
        o,
        f,
        l,
        c = t.numberOfChannels,
        v = t.sampleRate,
        p = a.float32 ? 3 : 1;
    return (
        (r =
            2 === c
                ? (function (t, n) {
                      for (var a = t.length + n.length, r = new Float32Array(a), e = 0, i = 0; e < a;)
                          ((r[e++] = t[i]), (r[e++] = n[i]), i++);
                      return r;
                  })(t.getChannelData(0), t.getChannelData(1))
                : t.getChannelData(0)),
        (e = p),
        (i = v),
        (o = (s = c) * (h = (u = 3 === p ? 32 : 16) / 8)),
        n((l = new DataView((f = new ArrayBuffer(44 + r.length * h)))), 0, "RIFF"),
        l.setUint32(4, 36 + r.length * h, !0),
        n(l, 8, "WAVE"),
        n(l, 12, "fmt "),
        l.setUint32(16, 16, !0),
        l.setUint16(20, e, !0),
        l.setUint16(22, s, !0),
        l.setUint32(24, i, !0),
        l.setUint32(28, i * o, !0),
        l.setUint16(32, o, !0),
        l.setUint16(34, u, !0),
        n(l, 36, "data"),
        l.setUint32(40, r.length * h, !0),
        1 === e
            ? (function (t, n, a) {
                  for (var r = 0; r < a.length; r++, n += 2) {
                      var e = Math.max(-1, Math.min(1, a[r]));
                      t.setInt16(n, e < 0 ? 32768 * e : 32767 * e, !0);
                  }
              })(l, 44, r)
            : (function (t, n, a) {
                  for (var r = 0; r < a.length; r++, n += 4) t.setFloat32(n, a[r], !0);
              })(l, 44, r),
        f
    );
};
function n(t, n, a) {
    for (var r = 0; r < a.length; r++) t.setUint8(n + r, a.charCodeAt(r));
}
