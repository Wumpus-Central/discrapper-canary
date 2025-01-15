n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(653041);
var i = n(88315),
    l = n(199766),
    a = n(813900);
function r(e) {
    let { line: t, context: n, canvasWidth: r, canvasHeight: s, fallbackColor: o, outlineColorDark: c, outlineColorLight: u, linesDrawnAt: d, deadDrawables: m } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let f = t.points.map((e) => (0, i.RR)(e, r, s)),
        p = d.current[t.id],
        h = (e) => p + e.deltaTime,
        g = (e) => h(e) + 1500 >= Date.now(),
        v = (e) => h(e) <= Date.now() && g(e),
        S = f.find(v);
    if (null == S) {
        !g(t.points[t.points.length - 1]) && m.push(t);
        return;
    }
    let I = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(S.x, S.y);
            for (let e = 1; e < f.length; e++) {
                let t = f[e];
                v(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
        },
        { fillColor: _, outlineColor: x } = (0, i.bg)(t.userId, c, u, o),
        E = I(x, 6 + a.q2),
        C = null != E && v(E);
    C && (0, l.I)(n, E.x, E.y, x, a.q2), I(_, 6), C && (0, l.T)(n, E.x, E.y, t.userId);
}
