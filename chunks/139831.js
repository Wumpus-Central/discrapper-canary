n.d(t, { A: () => a }), n(321073);
var i = n(666717),
    l = n(202894);
function a(e) {
    let {
        line: t,
        context: n,
        canvasWidth: a,
        canvasHeight: s,
        fallbackColor: r,
        outlineColorDark: o,
        outlineColorLight: c,
        linesDrawnAt: d,
        deadDrawables: u,
    } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = "round"), (n.lineJoin = "round");
    let h = t.points.map((e) => (0, i.RT)(e, a, s)),
        m = d.current[t.id],
        A = (e) => m + e.deltaTime + 1500 >= Date.now(),
        p = (e) => m + e.deltaTime <= Date.now() && A(e),
        g = h.find(p);
    if (null == g) {
        A(t.points[t.points.length - 1]) || u.push(t);
        return;
    }
    let f = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(g.x, g.y);
            for (let e = 1; e < h.length; e++) {
                let t = h[e];
                p(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
        },
        { fillColor: _, outlineColor: E } = (0, i.yO)(t.userId, o, c, r),
        C = f(E, 9),
        x = null != C && p(C);
    x && (0, l.y)(n, C.x, C.y, E, 3), f(_, 6), x && (0, l.k)(n, C.x, C.y, t.userId);
}
n(824217);
