n.d(t, { SE: () => u });
var r = n(68133),
    i = n(431462),
    a = n(51466),
    o = n(754396),
    s = n(961742);
async function l(e, t = {}) {
    let { width: n, height: c } = (0, s.Ad)(e, t),
        u = await (0, r.s)(e, t, !0);
    return await (0, o.Y)(u, t), await (0, i.A)(u, t), (0, a.b)(u, t), await (0, s.P9)(u, n, c);
}
async function c(e, t = {}) {
    let { width: n, height: r } = (0, s.Ad)(e, t),
        i = await l(e, t),
        a = await (0, s.Bi)(i),
        o = document.createElement('canvas'),
        u = o.getContext('2d'),
        d = t.pixelRatio || (0, s.mX)(),
        f = t.canvasWidth || n,
        _ = t.canvasHeight || r;
    return (o.width = f * d), (o.height = _ * d), t.skipAutoScale || (0, s.Nv)(o), (o.style.width = `${f}`), (o.style.height = `${_}`), t.backgroundColor && ((u.fillStyle = t.backgroundColor), u.fillRect(0, 0, o.width, o.height)), u.drawImage(a, 0, 0, o.width, o.height), o;
}
async function u(e, t = {}) {
    let n = await c(e, t);
    return await (0, s._c)(n);
}
