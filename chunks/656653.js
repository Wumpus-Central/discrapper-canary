function a(e) {
    return ((e % 360) + 360) % 360;
}
function n(e, t) {
    if ('raw' === e) return t;
    let [r, n] = t.map(a),
        o = n - r;
    return 'increasing' === e ? o < 0 && (n += 360) : 'decreasing' === e ? o > 0 && (r += 360) : 'longer' === e ? -180 < o && o < 180 && (o > 0 ? (r += 360) : (n += 360)) : 'shorter' === e && (o > 180 ? (r += 360) : o < -180 && (n += 360)), [r, n];
}
r.d(t, {
    j: function () {
        return a;
    },
    z: function () {
        return n;
    }
});
