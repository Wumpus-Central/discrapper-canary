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
        _ = d.current[t.id],
        m = (e) => _ + e.deltaTime + 1500 >= Date.now(),
        b = (e) => _ + e.deltaTime <= Date.now() && m(e),
        E = p.find(b);
    if (null == E) {
        m(t.points[t.points.length - 1]) || f.push(t);
        return;
    }
    let g = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(E.x, E.y);
            for (let e = 1; e < p.length; e++) {
                let t = p[e];
                b(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: v, outlineColor: h } = (0, r.bg)(t.userId, s, u, c),
        S = g(h, 6 + l.q2),
        y = null != S && b(S);
    y && (0, i.I)(n, S.x, S.y, h, l.q2), g(v, 6), y && (0, i.T)(n, S.x, S.y, t.userId);
}
