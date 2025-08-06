(n.d(t, { Z: () => l }), n(539854));
var r = n(88315),
    i = n(199766),
    o = n(813900);
let a = 6,
    s = 1500;
function l(e) {
    let { line: t, context: n, canvasWidth: l, canvasHeight: c, fallbackColor: u, outlineColorDark: d, outlineColorLight: f, linesDrawnAt: _, deadDrawables: p } = e;
    (null == _.current[t.id] && (_.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round'));
    let h = t.points.map((e) => (0, r.RR)(e, l, c)),
        m = _.current[t.id],
        g = (e) => m + e.deltaTime,
        E = (e) => g(e) + s >= Date.now(),
        b = (e) => g(e) <= Date.now() && E(e),
        y = h.find(b);
    if (null == y) {
        E(t.points[t.points.length - 1]) || p.push(t);
        return;
    }
    let O = (e, t) => {
            let r = null;
            ((n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(y.x, y.y));
            for (let e = 1; e < h.length; e++) {
                let t = h[e];
                b(t) && (n.lineTo(t.x, t.y), (r = t));
            }
            return (n.stroke(), r);
        },
        { fillColor: v, outlineColor: I } = (0, r.bg)(t.userId, d, f, u),
        T = O(I, a + o.q2),
        S = null != T && b(T);
    (S && (0, i.I)(n, T.x, T.y, I, o.q2), O(v, a), S && (0, i.T)(n, T.x, T.y, t.userId));
}
