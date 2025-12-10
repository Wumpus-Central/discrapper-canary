n.d(t, { Z: () => G }), n(853839), n(570086), n(479048), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(393238),
    u = n(206678),
    d = n(302221),
    f = n(328187),
    p = n(607889),
    _ = n(94432),
    m = n(784506);
let h = 40,
    g = _.e3 / 1000,
    E = 294,
    b = 45,
    y = 1,
    O = 4,
    v = 6,
    S = 24,
    I = 2,
    T = 4,
    C = [0, 0, 0, 0, 0],
    A = 200;
function N(e) {
    let t;
    if (null == e) return;
    try {
        t = window.atob(e);
    } catch (e) {
        return;
    }
    let n = [];
    for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / _.Xi;
    return n;
}
function P(e, t) {
    if (null != e && null != t) {
        if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0));
        }
        return (0, f.Z)(e, t);
    }
}
function R(e) {
    let t;
    return Math.floor(((t = e <= g ? h : e >= b ? E : ((Math.min(e, b) - g) / (b - g)) * (E - h) + h) + O) / v) * v - O;
}
function D(e) {
    if (null == e) return;
    let t = 2 * y + O;
    return Math.floor((e + O) / t);
}
function w(e, t, n, r, i) {
    e.moveTo(t, n + i),
        e.lineTo(t, n + r - i),
        e.arc(t + i, n + r - i, i, Math.PI, 0, !0),
        e.lineTo(t + 2 * i, n + i),
        e.arc(t + i, n + i, i, 0, Math.PI, !0),
        e.closePath();
}
function x(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function L(e) {
    let { context: t, devicePixelRatio: n, canvasHeight: r, segmentValue: i, segmentIndex: a, constrainMin: o } = e,
        s = o ? (S - I) * i + I : S * i;
    0 !== s && w(t, a * (2 * y + O) * n, (r / 2 - s / 2) * n, s * n, y * n);
}
function j(e, t) {
    let n = i.useMemo(() => N(e), [e]),
        r = i.useMemo(() => D(t), [t]);
    return i.useMemo(() => {
        var e;
        return null != (e = P(null != n ? n : [], r)) ? e : C;
    }, [n, r]);
}
function M(e, t, n) {
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
function k(e, t) {
    let n = (0, l.dQu)(s.Z.colors.INTERACTIVE_MUTED).hex(),
        r = (0, l.dQu)(s.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        i = (0, l.dQu)(s.Z.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        a = (0, l.dQu)(s.Z.unsafe_rawColors.BRAND_430).hex(),
        o = (0, l.dQu)(s.Z.unsafe_rawColors.WHITE_500).hex(),
        c = t ? a : n,
        [u, d] = M(c, t, e),
        [f, p] = M(t ? o : e ? i : r, t, e),
        [_, m] = M(e ? c : r, t, e);
    return {
        lastBackgroundFillColor: u,
        backgroundFillColor: d,
        lastActiveFillColor: f,
        activeFillColor: p,
        lastInactiveFillColor: _,
        inactiveFillColor: m,
    };
}
function U(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / A, 1);
    return 1 === i ? [t, !1] : [(0, d.BM)(e, t, i), !0];
}
function G(e) {
    let {
            className: t,
            waveform: n,
            currentTime: a,
            duration: s,
            played: l,
            playing: d,
            onDrag: f,
            onDragStart: _,
            onDragEnd: h,
        } = e,
        { ref: g, width: E } = (0, c.ZP)(),
        b = i.useMemo(() => R(s), [s]),
        y = i.useRef(void 0),
        O = j(n, E),
        v = i.useRef(l),
        I = i.useRef(d),
        C = i.useRef(null),
        N = window.devicePixelRatio,
        {
            lastBackgroundFillColor: P,
            backgroundFillColor: D,
            lastActiveFillColor: w,
            activeFillColor: M,
            lastInactiveFillColor: G,
            inactiveFillColor: Z,
        } = k(l, d),
        B = {
            currentTime: a,
            duration: s,
            played: l,
        },
        F = i.useRef(B);
    i.useEffect(() => {
        F.current = B;
    }),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = F.current,
                r = x({
                    showAll: !n,
                    currentTime: e,
                    duration: t,
                    numSegments: O.length,
                });
            y.current = O.map((e, t) => new p.Z(t < r ? e : 0));
        }, [O]),
        i.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = x({
                showAll: !l,
                currentTime: a,
                duration: s,
                numSegments: O.length,
            });
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (n < t) {
                    r.animateTo(O[n]);
                    continue;
                }
                r.reset();
            }
        }, [O, a, s, l]),
        i.useEffect(() => {
            let e = null;
            function t(n) {
                let r = g.current,
                    i = null == r ? void 0 : r.getContext("2d"),
                    a = y.current;
                if (null == r || null == i || null == a) return;
                let o = !1;
                (v.current !== l || I.current !== d) && ((v.current = l), (I.current = d), (C.current = n)),
                    null != C.current && n > C.current + A && (C.current = null);
                let s = r.height / N;
                i.clearRect(0, 0, r.width, r.height), i.beginPath();
                let [c, u] = U(P, D, n, C.current);
                (o = o || u), (i.fillStyle = c);
                for (let e = 0; e < O.length; e++)
                    L({
                        context: i,
                        devicePixelRatio: N,
                        canvasHeight: s,
                        segmentValue: O[e],
                        segmentIndex: e,
                        constrainMin: !0,
                    });
                i.fill();
                let [f, p] = U(G, Z, n, C.current);
                o = o || p;
                let [_, m] = U(w, M, n, C.current);
                o = o || m;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), O[e] - 0.1);
                    i.beginPath(),
                        (i.fillStyle = t.isReset ? f : _),
                        L({
                            context: i,
                            devicePixelRatio: N,
                            canvasHeight: s,
                            segmentValue: n,
                            segmentIndex: e,
                            constrainMin: !t.isReset,
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
        }, [g, N, O, E, a, s, l, d, P, D, w, M, G, Z]);
    let [, V] = (0, u.Z)({
        ref: g,
        onDrag: f,
        onDragStart: _,
        onDragEnd: h,
    });
    return (0, r.jsx)("canvas", {
        onMouseDown: V,
        className: o()(m.canvas, t),
        style: { width: b },
        ref: g,
        height: (S + 2 * T) * window.devicePixelRatio,
        width: (null != E ? E : 0) * window.devicePixelRatio,
    });
}
