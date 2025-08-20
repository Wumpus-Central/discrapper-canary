n.d(t, { Z: () => a }), n(539854);
var r = n(88315),
    l = n(199766),
    i = n(813900);
function a(e) {
    let {
        line: t,
        context: n,
        canvasWidth: a,
        canvasHeight: o,
        fallbackColor: u,
        outlineColorDark: s,
        outlineColorLight: c,
        linesDrawnAt: d,
        deadDrawables: f,
    } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = "round"), (n.lineJoin = "round");
    let p = t.points.map((e) => (0, r.RR)(e, a, o)),
        m = d.current[t.id],
        E = (e) => m + e.deltaTime + 1500 >= Date.now(),
        g = (e) => m + e.deltaTime <= Date.now() && E(e),
        v = p.find(g);
    if (null == v) {
        E(t.points[t.points.length - 1]) || f.push(t);
        return;
    }
    let S = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(v.x, v.y);
            for (let e = 1; e < p.length; e++) {
                let t = p[e];
                g(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: h, outlineColor: b } = (0, r.bg)(t.userId, s, c, u),
        O = S(b, 6 + i.q2),
        y = null != O && g(O);
    y && (0, l.I)(n, O.x, O.y, b, i.q2), S(h, 6), y && (0, l.T)(n, O.x, O.y, t.userId);
}
