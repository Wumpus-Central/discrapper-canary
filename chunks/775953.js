n.d(t, { SE: () => c });
var i = n(68133),
    r = n(431462),
    a = n(51466),
    s = n(754396),
    o = n(961742);
async function l(e, t = {}) {
    let { width: n, height: u } = (0, o.Ad)(e, t),
        c = await (0, i.s)(e, t, !0);
    return await (0, s.Y)(c, t), await (0, r.A)(c, t), (0, a.b)(c, t), await (0, o.P9)(c, n, u);
}
async function u(e, t = {}) {
    let { width: n, height: i } = (0, o.Ad)(e, t),
        r = await l(e, t),
        a = await (0, o.Bi)(r),
        s = document.createElement('canvas'),
        c = s.getContext('2d'),
        d = t.pixelRatio || (0, o.mX)(),
        f = t.canvasWidth || n,
        _ = t.canvasHeight || i;
    return (s.width = f * d), (s.height = _ * d), t.skipAutoScale || (0, o.Nv)(s), (s.style.width = `${f}`), (s.style.height = `${_}`), t.backgroundColor && ((c.fillStyle = t.backgroundColor), c.fillRect(0, 0, s.width, s.height)), c.drawImage(a, 0, 0, s.width, s.height), s;
}
async function c(e, t = {}) {
    let n = await u(e, t);
    return await (0, o._c)(n);
}
