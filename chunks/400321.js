n.d(t, { Z: () => a }), n(539854);
var r = n(88315),
    l = n(199766),
    i = n(813900);
function a(e) {
    let { line: t, context: n, canvasWidth: a, canvasHeight: u, fallbackColor: o, outlineColorDark: s, outlineColorLight: c, linesDrawnAt: d, deadDrawables: f } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let m = t.points.map((e) => (0, r.RR)(e, a, u)),
        p = d.current[t.id],
        E = (e) => p + e.deltaTime,
        g = (e) => E(e) + 1500 >= Date.now(),
        h = (e) => E(e) <= Date.now() && g(e),
        S = m.find(h);
    if (null == S) {
        g(t.points[t.points.length - 1]) || f.push(t);
        return;
    }
    let O = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(S.x, S.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                h(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: v, outlineColor: b } = (0, r.bg)(t.userId, s, c, o),
        I = O(b, 6 + i.q2),
        _ = null != I && h(I);
    _ && (0, l.I)(n, I.x, I.y, b, i.q2), O(v, 6), _ && (0, l.T)(n, I.x, I.y, t.userId);
}
