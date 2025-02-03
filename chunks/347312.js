n.d(t, { Z: () => B }), n(642549), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(692547),
    l = n(481060),
    u = n(393238),
    c = n(206678),
    d = n(302221),
    f = n(328187),
    _ = n(607889),
    p = n(94432),
    h = n(273746);
let m = 40,
    g = p.e3 / 1000,
    E = 294,
    v = 45,
    y = 1,
    I = 4,
    b = 6,
    T = 24,
    S = 2,
    A = 4,
    N = [0, 0, 0, 0, 0],
    C = 200;
function R(e) {
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
function O(e, t) {
    if (null != e && null != t) {
        if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0));
        }
        return (0, f.Z)(e, t);
    }
}
function D(e) {
    let t;
    return Math.floor(((t = e <= g ? m : e >= v ? E : ((Math.min(e, v) - g) / (v - g)) * (E - m) + m) + I) / b) * b - I;
}
function x(e) {
    if (null == e) return;
    let t = 2 * y + I;
    return Math.floor((e + I) / t);
}
function L(e, t, n, i, r) {
    e.moveTo(t, n + r), e.lineTo(t, n + i - r), e.arc(t + r, n + i - r, r, Math.PI, 0, !0), e.lineTo(t + 2 * r, n + r), e.arc(t + r, n + r, r, 0, Math.PI, !0), e.closePath();
}
function P(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: r } = e;
    return t ? r : Math.max(0, Math.round((n / i) * r));
}
function w(e) {
    let { context: t, devicePixelRatio: n, canvasHeight: i, segmentValue: r, segmentIndex: a, constrainMin: s } = e,
        o = s ? (T - S) * r + S : T * r;
    0 !== o && L(t, a * (2 * y + I) * n, (i / 2 - o / 2) * n, o * n, y * n);
}
function M(e, t) {
    let n = r.useMemo(() => R(e), [e]),
        i = r.useMemo(() => x(t), [t]);
    return r.useMemo(() => {
        var e;
        return null !== (e = O(null != n ? n : [], i)) && void 0 !== e ? e : N;
    }, [n, i]);
}
function k(e, t, n) {
    let [i, a] = r.useState(e),
        [s, o] = r.useState(e),
        l = r.useRef(s);
    return (
        r.useLayoutEffect(() => {
            l.current = s;
        }),
        r.useLayoutEffect(() => {
            a(l.current), o(e);
        }, [e, t, n]),
        [i, s]
    );
}
function U(e, t) {
    let n = (0, l.dQu)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        i = (0, l.dQu)(o.Z.colors.INTERACTIVE_NORMAL).hex(),
        r = (0, l.dQu)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        a = (0, l.dQu)(o.Z.unsafe_rawColors.BRAND_430).hex(),
        s = (0, l.dQu)(o.Z.unsafe_rawColors.WHITE_500).hex(),
        u = t ? a : n,
        [c, d] = k(u, t, e),
        [f, _] = k(t ? s : e ? r : i, t, e),
        [p, h] = k(e ? u : i, t, e);
    return {
        lastBackgroundFillColor: c,
        backgroundFillColor: d,
        lastActiveFillColor: f,
        activeFillColor: _,
        lastInactiveFillColor: p,
        inactiveFillColor: h
    };
}
function G(e, t, n, i) {
    if (null == i) return [t, !1];
    let r = Math.min((n - i) / C, 1);
    return 1 === r ? [t, !1] : [(0, d.BM)(e, t, r), !0];
}
function B(e) {
    let { className: t, waveform: n, currentTime: a, duration: o, played: l, playing: d, onDrag: f, onDragStart: p, onDragEnd: m } = e,
        { ref: g, width: E } = (0, u.Z)(),
        v = r.useMemo(() => D(o), [o]),
        y = r.useRef(),
        I = M(n, E),
        b = r.useRef(l),
        S = r.useRef(d),
        N = r.useRef(null),
        R = window.devicePixelRatio,
        { lastBackgroundFillColor: O, backgroundFillColor: x, lastActiveFillColor: L, activeFillColor: k, lastInactiveFillColor: B, inactiveFillColor: Z } = U(l, d),
        F = {
            currentTime: a,
            duration: o,
            played: l
        },
        V = r.useRef(F);
    r.useEffect(() => {
        V.current = F;
    }),
        r.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = V.current,
                i = P({
                    showAll: !n,
                    currentTime: e,
                    duration: t,
                    numSegments: I.length
                });
            y.current = I.map((e, t) => new _.Z(t < i ? e : 0));
        }, [I]),
        r.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = P({
                showAll: !l,
                currentTime: a,
                duration: o,
                numSegments: I.length
            });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(I[n]);
                    continue;
                }
                i.reset();
            }
        }, [I, a, o, l]),
        r.useEffect(() => {
            let e = null;
            function t(n) {
                let i = g.current,
                    r = null == i ? void 0 : i.getContext('2d'),
                    a = y.current;
                if (null == i || null == r || null == a) return;
                let s = !1;
                (b.current !== l || S.current !== d) && ((b.current = l), (S.current = d), (N.current = n)), null != N.current && n > N.current + C && (N.current = null);
                let o = i.height / R;
                r.clearRect(0, 0, i.width, i.height), r.beginPath();
                let [u, c] = G(O, x, n, N.current);
                (s = s || c), (r.fillStyle = u);
                for (let e = 0; e < I.length; e++)
                    w({
                        context: r,
                        devicePixelRatio: R,
                        canvasHeight: o,
                        segmentValue: I[e],
                        segmentIndex: e,
                        constrainMin: !0
                    });
                r.fill();
                let [f, _] = G(B, Z, n, N.current);
                s = s || _;
                let [p, h] = G(L, k, n, N.current);
                s = s || h;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), I[e] - 0.1);
                    r.beginPath(),
                        (r.fillStyle = t.isReset ? f : p),
                        w({
                            context: r,
                            devicePixelRatio: R,
                            canvasHeight: o,
                            segmentValue: n,
                            segmentIndex: e,
                            constrainMin: !t.isReset
                        }),
                        (s = s || t.isAnimating()),
                        r.fill();
                }
                s && (e = requestAnimationFrame(t));
            }
            return (
                (e = requestAnimationFrame(t)),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [g, R, I, E, a, o, l, d, O, x, L, k, B, Z]);
    let [, j] = (0, c.Z)({
        ref: g,
        onDrag: f,
        onDragStart: p,
        onDragEnd: m
    });
    return (0, i.jsx)('canvas', {
        onMouseDown: j,
        className: s()(h.canvas, t),
        style: { width: v },
        ref: g,
        height: (T + 2 * A) * window.devicePixelRatio,
        width: (null != E ? E : 0) * window.devicePixelRatio
    });
}
