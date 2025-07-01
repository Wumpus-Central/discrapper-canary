e.exports = function (e, r) {
    r = r || {};
    var a,
        n,
        s,
        o,
        i,
        c,
        l,
        u,
        f,
        b,
        d = e.numberOfChannels,
        h = e.sampleRate,
        p = r.float32 ? 3 : 1;
    return (
        (a =
            2 === d
                ? (function (e, t) {
                      for (var r = e.length + t.length, a = new Float32Array(r), n = 0, s = 0; n < r; ) ((a[n++] = e[s]), (a[n++] = t[s]), s++);
                      return a;
                  })(e.getChannelData(0), e.getChannelData(1))
                : e.getChannelData(0)),
        (n = p),
        (s = h),
        (l = (o = d) * (c = (i = 3 === p ? 32 : 16) / 8)),
        t((f = new DataView((u = new ArrayBuffer(44 + a.length * c)))), 0, 'RIFF'),
        f.setUint32(4, 36 + a.length * c, !0),
        t(f, 8, 'WAVE'),
        t(f, 12, 'fmt '),
        f.setUint32(16, 16, !0),
        f.setUint16(20, n, !0),
        f.setUint16(22, o, !0),
        f.setUint32(24, s, !0),
        f.setUint32(28, s * l, !0),
        f.setUint16(32, l, !0),
        f.setUint16(34, i, !0),
        t(f, 36, 'data'),
        f.setUint32(40, a.length * c, !0),
        1 === n
            ? (function (e, t, r) {
                  for (var a = 0; a < r.length; a++, t += 2) {
                      var n = Math.max(-1, Math.min(1, r[a]));
                      e.setInt16(t, n < 0 ? 32768 * n : 32767 * n, !0);
                  }
              })(f, 44, a)
            : (function (e, t, r) {
                  for (var a = 0; a < r.length; a++, t += 4) e.setFloat32(t, r[a], !0);
              })(f, 44, a),
        u
    );
};
function t(e, t, r) {
    for (var a = 0; a < r.length; a++) e.setUint8(t + a, r.charCodeAt(a));
}
