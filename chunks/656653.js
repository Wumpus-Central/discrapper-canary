function a(e) {
    return ((e % 360) + 360) % 360;
}
function n(e, t) {
    if ('raw' === e) return t;
    let [r, n] = t.map(a),
        s = n - r;
    return 'increasing' === e ? s < 0 && (n += 360) : 'decreasing' === e ? s > 0 && (r += 360) : 'longer' === e ? -180 < s && s < 180 && (s > 0 ? (r += 360) : (n += 360)) : 'shorter' === e && (s > 180 ? (r += 360) : s < -180 && (n += 360)), [r, n];
}
r.d(t, {
    j: () => a,
    z: () => n
});
