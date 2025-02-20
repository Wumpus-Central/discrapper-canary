n.d(t, { Z: () => a }), n(653041);
var r = n(88315),
    l = n(199766),
    i = n(813900);
function a(e) {
    let { line: t, context: n, canvasWidth: a, canvasHeight: o, fallbackColor: s, outlineColorDark: c, outlineColorLight: u, linesDrawnAt: d, deadDrawables: f } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let m = t.points.map((e) => (0, r.RR)(e, a, o)),
        p = d.current[t.id],
        h = (e) => p + e.deltaTime,
        v = (e) => h(e) + 1500 >= Date.now(),
        g = (e) => h(e) <= Date.now() && v(e),
        b = m.find(g);
    if (null == b) {
        v(t.points[t.points.length - 1]) || f.push(t);
        return;
    }
    let y = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(b.x, b.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                g(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: E, outlineColor: O } = (0, r.bg)(t.userId, c, u, s),
        S = y(O, 6 + i.q2),
        j = null != S && g(S);
    j && (0, l.I)(n, S.x, S.y, O, i.q2), y(E, 6), j && (0, l.T)(n, S.x, S.y, t.userId);
}
