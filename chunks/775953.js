r.d(n, {
    SE: function () {
        return d;
    }
});
var i = r(68133),
    a = r(431462),
    o = r(51466),
    s = r(754396),
    l = r(961742);
async function u(e, n = {}) {
    let { width: r, height: u } = (0, l.Ad)(e, n),
        c = await (0, i.s)(e, n, !0);
    return await (0, s.Y)(c, n), await (0, a.A)(c, n), (0, o.b)(c, n), await (0, l.P9)(c, r, u);
}
async function c(e, n = {}) {
    let { width: r, height: i } = (0, l.Ad)(e, n),
        a = await u(e, n),
        o = await (0, l.Bi)(a),
        s = document.createElement('canvas'),
        c = s.getContext('2d'),
        d = n.pixelRatio || (0, l.mX)(),
        f = n.canvasWidth || r,
        p = n.canvasHeight || i;
    return (s.width = f * d), (s.height = p * d), !n.skipAutoScale && (0, l.Nv)(s), (s.style.width = `${f}`), (s.style.height = `${p}`), n.backgroundColor && ((c.fillStyle = n.backgroundColor), c.fillRect(0, 0, s.width, s.height)), c.drawImage(o, 0, 0, s.width, s.height), s;
}
async function d(e, n = {}) {
    let r = await c(e, n);
    return await (0, l._c)(r);
}
