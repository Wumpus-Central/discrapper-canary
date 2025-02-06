n.d(t, { Z: () => a }), n(653041);
var l = n(88315),
    i = n(199766),
    r = n(813900);
function a(e) {
    let { line: t, context: n, canvasWidth: a, canvasHeight: s, fallbackColor: o, outlineColorDark: u, outlineColorLight: c, linesDrawnAt: d, deadDrawables: m } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let f = t.points.map((e) => (0, l.RR)(e, a, s)),
        h = d.current[t.id],
        p = (e) => h + e.deltaTime,
        v = (e) => p(e) + 1500 >= Date.now(),
        g = (e) => p(e) <= Date.now() && v(e),
        E = f.find(g);
    if (null == E) {
        v(t.points[t.points.length - 1]) || m.push(t);
        return;
    }
    let x = (e, t) => {
            let l = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(E.x, E.y);
            for (let e = 1; e < f.length; e++) {
                let t = f[e];
                g(t) && (n.lineTo(t.x, t.y), (l = t));
            }
            return n.stroke(), l;
        },
        { fillColor: Z, outlineColor: S } = (0, l.bg)(t.userId, u, c, o),
        C = x(S, 6 + r.q2),
        b = null != C && g(C);
    b && (0, i.I)(n, C.x, C.y, S, r.q2), x(Z, 6), b && (0, i.T)(n, C.x, C.y, t.userId);
}
