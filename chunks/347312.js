n.d(t, { Z: () => G }), n(853839), n(570086), n(479048), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(393238),
    u = n(206678),
    d = n(302221),
    f = n(328187),
    _ = n(607889),
    p = n(94432),
    h = n(864595);
let m = 40,
    g = p.e3 / 1000,
    E = 294,
    b = 45,
    y = 1,
    v = 4,
    O = 6,
    I = 24,
    S = 2,
    T = 4,
    N = [0, 0, 0, 0, 0],
    A = 200;
function C(e) {
    let t;
    if (null == e) return;
    try {
        t = window.atob(e);
    } catch (e) {
        return;
    }
    let n = [];
    for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / p.Xi;
    return n;
}
function R(e, t) {
    if (null != e && null != t) {
        if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0));
        }
        return (0, f.Z)(e, t);
    }
}
function P(e) {
    let t;
    return Math.floor(((t = e <= g ? m : e >= b ? E : ((Math.min(e, b) - g) / (b - g)) * (E - m) + m) + v) / O) * O - v;
}
function w(e) {
    if (null == e) return;
    let t = 2 * y + v;
    return Math.floor((e + v) / t);
}
function D(e, t, n, r, i) {
    e.moveTo(t, n + i), e.lineTo(t, n + r - i), e.arc(t + i, n + r - i, i, Math.PI, 0, !0), e.lineTo(t + 2 * i, n + i), e.arc(t + i, n + i, i, 0, Math.PI, !0), e.closePath();
}
function L(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function x(e) {
    let { context: t, devicePixelRatio: n, canvasHeight: r, segmentValue: i, segmentIndex: a, constrainMin: o } = e,
        s = o ? (I - S) * i + S : I * i;
    0 !== s && D(t, a * (2 * y + v) * n, (r / 2 - s / 2) * n, s * n, y * n);
}
function M(e, t) {
    let n = i.useMemo(() => C(e), [e]),
        r = i.useMemo(() => w(t), [t]);
    return i.useMemo(() => {
        var e;
        return null != (e = R(null != n ? n : [], r)) ? e : N;
    }, [n, r]);
}
function k(e, t, n) {
    let [r, a] = i.useState(e),
        [o, s] = i.useState(e),
        l = i.useRef(o);
    return (
        i.useLayoutEffect(() => {
            l.current = o;
        }),
        i.useLayoutEffect(() => {
            a(l.current), s(e);
        }, [e, t, n]),
        [r, o]
    );
}
function j(e, t) {
    let n = (0, l.dQu)(s.Z.colors.INTERACTIVE_MUTED).hex(),
        r = (0, l.dQu)(s.Z.colors.INTERACTIVE_NORMAL).hex(),
        i = (0, l.dQu)(s.Z.colors.INTERACTIVE_ACTIVE).hex(),
        a = (0, l.dQu)(s.Z.unsafe_rawColors.BRAND_430).hex(),
        o = (0, l.dQu)(s.Z.unsafe_rawColors.WHITE_500).hex(),
        c = t ? a : n,
        [u, d] = k(c, t, e),
        [f, _] = k(t ? o : e ? i : r, t, e),
        [p, h] = k(e ? c : r, t, e);
    return {
        lastBackgroundFillColor: u,
        backgroundFillColor: d,
        lastActiveFillColor: f,
        activeFillColor: _,
        lastInactiveFillColor: p,
        inactiveFillColor: h
    };
}
function U(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / A, 1);
    return 1 === i ? [t, !1] : [(0, d.BM)(e, t, i), !0];
}
function G(e) {
    let { className: t, waveform: n, currentTime: a, duration: s, played: l, playing: d, onDrag: f, onDragStart: p, onDragEnd: m } = e,
        { ref: g, width: E } = (0, c.ZP)(),
        b = i.useMemo(() => P(s), [s]),
        y = i.useRef(void 0),
        v = M(n, E),
        O = i.useRef(l),
        S = i.useRef(d),
        N = i.useRef(null),
        C = window.devicePixelRatio,
        { lastBackgroundFillColor: R, backgroundFillColor: w, lastActiveFillColor: D, activeFillColor: k, lastInactiveFillColor: G, inactiveFillColor: B } = j(l, d),
        F = {
            currentTime: a,
            duration: s,
            played: l
        },
        V = i.useRef(F);
    i.useEffect(() => {
        V.current = F;
    }),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = V.current,
                r = L({
                    showAll: !n,
                    currentTime: e,
                    duration: t,
                    numSegments: v.length
                });
            y.current = v.map((e, t) => new _.Z(t < r ? e : 0));
        }, [v]),
        i.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = L({
                showAll: !l,
                currentTime: a,
                duration: s,
                numSegments: v.length
            });
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (n < t) {
                    r.animateTo(v[n]);
                    continue;
                }
                r.reset();
            }
        }, [v, a, s, l]),
        i.useEffect(() => {
            let e = null;
            function t(n) {
                let r = g.current,
                    i = null == r ? void 0 : r.getContext('2d'),
                    a = y.current;
                if (null == r || null == i || null == a) return;
                let o = !1;
                (O.current !== l || S.current !== d) && ((O.current = l), (S.current = d), (N.current = n)), null != N.current && n > N.current + A && (N.current = null);
                let s = r.height / C;
                i.clearRect(0, 0, r.width, r.height), i.beginPath();
                let [c, u] = U(R, w, n, N.current);
                (o = o || u), (i.fillStyle = c);
                for (let e = 0; e < v.length; e++)
                    x({
                        context: i,
                        devicePixelRatio: C,
                        canvasHeight: s,
                        segmentValue: v[e],
                        segmentIndex: e,
                        constrainMin: !0
                    });
                i.fill();
                let [f, _] = U(G, B, n, N.current);
                o = o || _;
                let [p, h] = U(D, k, n, N.current);
                o = o || h;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), v[e] - 0.1);
                    i.beginPath(),
                        (i.fillStyle = t.isReset ? f : p),
                        x({
                            context: i,
                            devicePixelRatio: C,
                            canvasHeight: s,
                            segmentValue: n,
                            segmentIndex: e,
                            constrainMin: !t.isReset
                        }),
                        (o = o || t.isAnimating()),
                        i.fill();
                }
                o && (e = requestAnimationFrame(t));
            }
            return (
                (e = requestAnimationFrame(t)),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [g, C, v, E, a, s, l, d, R, w, D, k, G, B]);
    let [, Z] = (0, u.Z)({
        ref: g,
        onDrag: f,
        onDragStart: p,
        onDragEnd: m
    });
    return (0, r.jsx)('canvas', {
        onMouseDown: Z,
        className: o()(h.canvas, t),
        style: { width: b },
        ref: g,
        height: (I + 2 * T) * window.devicePixelRatio,
        width: (null != E ? E : 0) * window.devicePixelRatio
    });
}
