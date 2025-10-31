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
        fallbackColor: s,
        outlineColorDark: c,
        outlineColorLight: u,
        linesDrawnAt: d,
        deadDrawables: p,
    } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = "round"), (n.lineJoin = "round");
    let f = t.points.map((e) => (0, r.RR)(e, a, o)),
        h = d.current[t.id],
        m = (e) => h + e.deltaTime + 1500 >= Date.now(),
        g = (e) => h + e.deltaTime <= Date.now() && m(e),
        b = f.find(g);
    if (null == b) {
        m(t.points[t.points.length - 1]) || p.push(t);
        return;
    }
    let _ = (e, t) => {
            let r = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(b.x, b.y);
            for (let e = 1; e < f.length; e++) {
                let t = f[e];
                g(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return n.stroke(), r;
        },
        { fillColor: y, outlineColor: C } = (0, r.bg)(t.userId, c, u, s),
        v = _(C, 6 + l.q2),
        O = null != v && g(v);
    O && (0, i.I)(n, v.x, v.y, C, l.q2), _(y, 6), O && (0, i.T)(n, v.x, v.y, t.userId);
}
