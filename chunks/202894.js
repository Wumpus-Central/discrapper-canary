n.d(t, { k: () => a, y: () => l });
var i = n(533117);
function l(e, t, n, i, l) {
    e.save(),
        e.beginPath(),
        (e.fillStyle = i),
        e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + l, 0, 2 * Math.PI),
        e.fill(),
        e.restore();
}
function a(e, t, n, l) {
    e.save();
    let a = i.A.getAvatarImage(l);
    if (null == a) return;
    let s = 20 * window.devicePixelRatio;
    e.beginPath(),
        e.arc(t, n, s / 2, 0, 2 * Math.PI),
        e.clip(),
        e.drawImage(a, t - s / 2, n - s / 2, s, s),
        e.restore();
}
