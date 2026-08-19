t.exports = function (t, e) {
    e = e || {};
    var a,
        r,
        i,
        h,
        s,
        l,
        o,
        f,
        u,
        g = t.numberOfChannels,
        c = t.sampleRate,
        U = e.float32 ? 3 : 1;
    return (
        (a =
            2 === g
                ? (function (t, n) {
                      for (var e = t.length + n.length, a = new Float32Array(e), r = 0, i = 0; r < e; )
                          (a[r++] = t[i]), (a[r++] = n[i]), i++;
                      return a;
                  })(t.getChannelData(0), t.getChannelData(1))
                : t.getChannelData(0)),
        (r = U),
        (i = c),
        (o = (h = g) * (l = (s = 3 === U ? 32 : 16) / 8)),
        n((u = new DataView((f = new ArrayBuffer(44 + a.length * l)))), 0, "RIFF"),
        u.setUint32(4, 36 + a.length * l, !0),
        n(u, 8, "WAVE"),
        n(u, 12, "fmt "),
        u.setUint32(16, 16, !0),
        u.setUint16(20, r, !0),
        u.setUint16(22, h, !0),
        u.setUint32(24, i, !0),
        u.setUint32(28, i * o, !0),
        u.setUint16(32, o, !0),
        u.setUint16(34, s, !0),
        n(u, 36, "data"),
        u.setUint32(40, a.length * l, !0),
        1 === r
            ? (function (t, n, e) {
                  for (var a = 0; a < e.length; a++, n += 2) {
                      var r = Math.max(-1, Math.min(1, e[a]));
                      t.setInt16(n, r < 0 ? 32768 * r : 32767 * r, !0);
                  }
              })(u, 44, a)
            : (function (t, n, e) {
                  for (var a = 0; a < e.length; a++, n += 4) t.setFloat32(n, e[a], !0);
              })(u, 44, a),
        f
    );
};
function n(t, n, e) {
    for (var a = 0; a < e.length; a++) t.setUint8(n + a, e.charCodeAt(a));
}
