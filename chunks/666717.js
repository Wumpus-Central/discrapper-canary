n.d(t, { PA: () => m, RT: () => h, _t: () => u, av: () => d, iV: () => c, yO: () => A });
var i = n(440745),
    l = n.n(i),
    a = n(317097),
    s = n(654107),
    r = n(287809),
    o = n(134753);
function c(e) {
    let t = e.current,
        n = t?.getContext("2d");
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: i, left: l, top: a } = e.getBoundingClientRect();
    return { x: (t.clientX - l) / n, y: (t.clientY - a) / i };
}
function u(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function h(e, t, n) {
    return { x: u(e.x, t), y: u(e.y, n), deltaTime: e.deltaTime };
}
function m(e) {
    return e.type === o.Z.LINE;
}
function A(e, t, n, i) {
    let o = r.default.getUser(e),
        c = o?.getAvatarURL(null, 80),
        d = null != c ? s.Ip.getState().palette[c]?.[0] : null,
        u = null != d ? `#${l()({ r: d[0], g: d[1], b: d[2] }).toHex()}` : i,
        h = (0, a.OK)((0, a.LX)(u)) > 0.5 ? n : t;
    return { fillColor: u, outlineColor: h };
}
n(824217);
