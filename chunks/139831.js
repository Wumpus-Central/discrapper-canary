n.d(t, {
    A: () => i,
}),
    n(321073);
var l = n(666717),
    r = n(202894);

function i(e) {
    let {
        line: t,
        context: n,
        canvasWidth: i,
        canvasHeight: a,
        fallbackColor: s,
        outlineColorDark: o,
        outlineColorLight: c,
        linesDrawnAt: u,
        deadDrawables: d,
    } = e;
    null == u.current[t.id] && (u.current[t.id] = Date.now()), (n.lineCap = "round"), (n.lineJoin = "round");
    let f = t.points.map((e) => (0, l.RT)(e, i, a)),
        p = u.current[t.id],
        b = (e) => p + e.deltaTime + 1500 >= Date.now(),
        g = (e) => p + e.deltaTime <= Date.now() && b(e),
        m = f.find(g);
    if (null == m) {
        b(t.points[t.points.length - 1]) || d.push(t);
        return;
    }
    let h = (e, t) => {
            let l = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(m.x, m.y);
            for (let e = 1; e < f.length; e++) {
                let t = f[e];
                g(t) && (n.lineTo(t.x, t.y), (l = t));
            }
            return n.stroke(), l;
        },
        { fillColor: A, outlineColor: y } = (0, l.yO)(t.userId, o, c, s),
        _ = h(y, 9),
        E = null != _ && g(_);
    E && (0, r.y)(n, _.x, _.y, y, 3), h(A, 6), E && (0, r.k)(n, _.x, _.y, t.userId);
}
n(824217);
