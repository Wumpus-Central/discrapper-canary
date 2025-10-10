e.exports = function (e, r) {
    r = r || {};
    var a,
        n,
        o,
        s,
        i,
        c,
        u,
        l,
        f,
        b = e.numberOfChannels,
        d = e.sampleRate,
        h = r.float32 ? 3 : 1;
    return (
        (a =
            2 === b
                ? (function (e, t) {
                      for (var r = e.length + t.length, a = new Float32Array(r), n = 0, o = 0; n < r; )
                          (a[n++] = e[o]), (a[n++] = t[o]), o++;
                      return a;
                  })(e.getChannelData(0), e.getChannelData(1))
                : e.getChannelData(0)),
        (n = h),
        (o = d),
        (u = (s = b) * (c = (i = 3 === h ? 32 : 16) / 8)),
        t((f = new DataView((l = new ArrayBuffer(44 + a.length * c)))), 0, "RIFF"),
        f.setUint32(4, 36 + a.length * c, !0),
        t(f, 8, "WAVE"),
        t(f, 12, "fmt "),
        f.setUint32(16, 16, !0),
        f.setUint16(20, n, !0),
        f.setUint16(22, s, !0),
        f.setUint32(24, o, !0),
        f.setUint32(28, o * u, !0),
        f.setUint16(32, u, !0),
        f.setUint16(34, i, !0),
        t(f, 36, "data"),
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
        l
    );
};
function t(e, t, r) {
    for (var a = 0; a < r.length; a++) e.setUint8(t + a, r.charCodeAt(a));
}
