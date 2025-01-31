n.d(t, {
    R: () => a,
    W: () => r
}),
    n(411104);
var i = n(356659);
function r(e) {
    let t = document.createElement('canvas');
    (t.width = e.width), (t.height = e.height);
    let n = t.getContext('2d');
    if (null == n) throw Error('Could not create canvas context');
    return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL('image/jpeg', 0.9);
}
async function a(e, t) {
    let n = document.createElement('video');
    (n.muted = !0), (n.src = e), (n.currentTime = t), await n.play(), n.pause();
    let r = Math.min(i.f_ / n.videoWidth, i.wD / n.videoHeight),
        a = n.videoWidth * r,
        s = n.videoHeight * r,
        o = document.createElement('canvas');
    (o.width = a), (o.height = s);
    let l = o.getContext('2d');
    if (null == l) throw Error('Could not create canvas context');
    return l.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, a, s), o.toDataURL('image/jpeg', 0.9);
}
