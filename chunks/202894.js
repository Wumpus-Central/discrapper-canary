n.d(t, {
    k: () => i,
    y: () => r,
});
var l = n(533117);

function r(e, t, n, l, r) {
    e.save(),
        e.beginPath(),
        (e.fillStyle = l),
        e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + r, 0, 2 * Math.PI),
        e.fill(),
        e.restore();
}

function i(e, t, n, r) {
    e.save();
    let i = l.A.getAvatarImage(r);
    if (null == i) return;
    let a = 20 * window.devicePixelRatio;
    e.beginPath(),
        e.arc(t, n, a / 2, 0, 2 * Math.PI),
        e.clip(),
        e.drawImage(i, t - a / 2, n - a / 2, a, a),
        e.restore();
}
