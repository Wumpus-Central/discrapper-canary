n.d(t, {
    I: () => i,
    T: () => l,
});
var r = n(673125);
function i(e, t, n, r, i) {
    e.save(),
        e.beginPath(),
        (e.fillStyle = r),
        e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + i, 0, 2 * Math.PI),
        e.fill(),
        e.restore();
}
function l(e, t, n, i) {
    e.save();
    let l = r.Z.getAvatarImage(i);
    if (null == l) return;
    let a = 20 * window.devicePixelRatio;
    e.beginPath(),
        e.arc(t, n, a / 2, 0, 2 * Math.PI),
        e.clip(),
        e.drawImage(l, t - a / 2, n - a / 2, a, a),
        e.restore();
}
