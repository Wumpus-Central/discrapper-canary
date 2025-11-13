n.d(t, { Z: () => a }), n(539854);
var r = n(88315),
    i = n(199766),
    l = n(813900);
function a(e) {
    let {
        line: t,
        context: n,
        canvasWidth: a,
        canvasHeight: o,
        fallbackColor: c,
        outlineColorDark: s,
        outlineColorLight: u,
        linesDrawnAt: d,
        deadDrawables: f,
    } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = "round"), (n.lineJoin = "round");
    let p = t.points.map((e) => (0, r.RR)(e, a, o)),
        m = d.current[t.id],
        _ = (e) => m + e.deltaTime + 1500 >= Date.now(),
        g = (e) => m + e.deltaTime <= Date.now() && _(e),
        v = p.find(g);
    if (null == v) {
        _(t.points[t.points.length - 1]) || f.push(t);
        return;
    }
    let b = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(v.x, v.y);
            for (let e = 1; e < p.length; e++) {
                let t = p[e];
                g(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: E, outlineColor: h } = (0, r.bg)(t.userId, s, u, c),
        y = b(h, 6 + l.q2),
        S = null != y && g(y);
    S && (0, i.I)(n, y.x, y.y, h, l.q2), b(E, 6), S && (0, i.T)(n, y.x, y.y, t.userId);
}
