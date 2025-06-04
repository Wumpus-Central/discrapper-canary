n.d(t, { SE: () => u });
var r = n(68133),
    i = n(431462),
    o = n(51466),
    a = n(754396),
    s = n(961742);
async function l(e, t = {}) {
    let { width: n, height: c } = (0, s.Ad)(e, t),
        u = await (0, r.s)(e, t, !0);
    return await (0, a.Y)(u, t), await (0, i.A)(u, t), (0, o.b)(u, t), await (0, s.P9)(u, n, c);
}
async function c(e, t = {}) {
    let { width: n, height: r } = (0, s.Ad)(e, t),
        i = await l(e, t),
        o = await (0, s.Bi)(i),
        a = document.createElement('canvas'),
        u = a.getContext('2d'),
        d = t.pixelRatio || (0, s.mX)(),
        f = t.canvasWidth || n,
        _ = t.canvasHeight || r;
    return (a.width = f * d), (a.height = _ * d), t.skipAutoScale || (0, s.Nv)(a), (a.style.width = `${f}`), (a.style.height = `${_}`), t.backgroundColor && ((u.fillStyle = t.backgroundColor), u.fillRect(0, 0, a.width, a.height)), u.drawImage(o, 0, 0, a.width, a.height), a;
}
async function u(e, t = {}) {
    let n = await c(e, t);
    return await (0, s._c)(n);
}
