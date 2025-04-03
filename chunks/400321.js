n.d(t, { Z: () => a }), n(653041);
var r = n(88315),
    l = n(199766),
    i = n(813900);
function a(e) {
    let { line: t, context: n, canvasWidth: a, canvasHeight: o, fallbackColor: s, outlineColorDark: u, outlineColorLight: c, linesDrawnAt: d, deadDrawables: f } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let m = t.points.map((e) => (0, r.RR)(e, a, o)),
        p = d.current[t.id],
        g = (e) => p + e.deltaTime,
        E = (e) => g(e) + 1500 >= Date.now(),
        h = (e) => g(e) <= Date.now() && E(e),
        v = m.find(h);
    if (null == v) {
        E(t.points[t.points.length - 1]) || f.push(t);
        return;
    }
    let b = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(v.x, v.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                h(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: S, outlineColor: y } = (0, r.bg)(t.userId, u, c, s),
        O = b(y, 6 + i.q2),
        Z = null != O && h(O);
    Z && (0, l.I)(n, O.x, O.y, y, i.q2), b(S, 6), Z && (0, l.T)(n, O.x, O.y, t.userId);
}
