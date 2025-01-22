r.d(n, {
    R: function () {
        return s;
    },
    W: function () {
        return o;
    }
});
var i = r(411104);
var a = r(356659);
function o(e) {
    let n = document.createElement('canvas');
    (n.width = e.width), (n.height = e.height);
    let r = n.getContext('2d');
    if (null == r) throw Error('Could not create canvas context');
    return r.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), n.toDataURL('image/jpeg', 0.9);
}
async function s(e, n) {
    let r = document.createElement('video');
    (r.muted = !0), (r.src = e), (r.currentTime = n), await r.play(), r.pause();
    let i = a.f_ / r.videoWidth,
        o = Math.min(i, a.wD / r.videoHeight),
        s = r.videoWidth * o,
        l = r.videoHeight * o,
        u = document.createElement('canvas');
    (u.width = s), (u.height = l);
    let c = u.getContext('2d');
    if (null == c) throw Error('Could not create canvas context');
    return c.drawImage(r, 0, 0, r.videoWidth, r.videoHeight, 0, 0, s, l), u.toDataURL('image/jpeg', 0.9);
}
