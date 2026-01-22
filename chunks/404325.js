n.d(t, { A: () => U }), n(801460), n(508300), n(650828), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(765671),
    u = n(240147),
    d = n(998304),
    f = n(934581),
    p = n(539451);
n(518950);
var _ = n(783821);
let h = 40,
    m = 0.5,
    g = 294,
    E = 45,
    b = 1,
    y = 4,
    O = 6,
    A = 24,
    v = 2,
    S = 4,
    I = [0, 0, 0, 0, 0],
    T = 200;
function C(e) {
    let t;
    if (null == e) return;
    try {
        t = window.atob(e);
    } catch (e) {
        return;
    }
    let n = [];
    for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / 255;
    return n;
}
function N(e, t) {
    if (null != e && null != t) {
        if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0));
        }
        return (0, f.A)(e, t);
    }
}
function R(e) {
    let t;
    return Math.floor(((t = e <= m ? h : e >= E ? g : ((Math.min(e, E) - m) / (E - m)) * (g - h) + h) + y) / O) * O - y;
}
function w(e) {
    if (null == e) return;
    let t = 2 * b + y;
    return Math.floor((e + y) / t);
}
function P(e, t, n, r, i) {
    e.moveTo(t, n + i),
        e.lineTo(t, n + r - i),
        e.arc(t + i, n + r - i, i, Math.PI, 0, !0),
        e.lineTo(t + 2 * i, n + i),
        e.arc(t + i, n + i, i, 0, Math.PI, !0),
        e.closePath();
}
function D(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function x(e) {
    let { context: t, devicePixelRatio: n, canvasHeight: r, segmentValue: i, segmentIndex: a, constrainMin: s } = e,
        o = s ? (A - v) * i + v : A * i;
    0 === o || P(t, a * (2 * b + y) * n, (r / 2 - o / 2) * n, o * n, b * n);
}
function L(e, t) {
    let n = i.useMemo(() => C(e), [e]),
        r = i.useMemo(() => w(t), [t]);
    return i.useMemo(() => {
        var e;
        return null != (e = N(null != n ? n : [], r)) ? e : I;
    }, [n, r]);
}
function j(e, t, n) {
    let [r, a] = i.useState(e),
        [s, o] = i.useState(e),
        l = i.useRef(s);
    return (
        i.useLayoutEffect(() => {
            l.current = s;
        }),
        i.useLayoutEffect(() => {
            a(l.current), o(e);
        }, [e, t, n]),
        [r, s]
    );
}
function M(e, t) {
    let n = (0, l.rdh)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
        r = (0, l.rdh)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        i = (0, l.rdh)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        a = (0, l.rdh)(o.A.unsafe_rawColors.BRAND_430).hex(),
        s = (0, l.rdh)(o.A.unsafe_rawColors.WHITE).hex(),
        c = t ? a : n,
        [u, d] = j(c, t, e),
        [f, p] = j(t ? s : e ? i : r, t, e),
        [_, h] = j(e ? c : r, t, e);
    return {
        lastBackgroundFillColor: u,
        backgroundFillColor: d,
        lastActiveFillColor: f,
        activeFillColor: p,
        lastInactiveFillColor: _,
        inactiveFillColor: h,
    };
}
function k(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / T, 1);
    return 1 === i ? [t, !1] : [(0, d.De)(e, t, i), !0];
}
function U(e) {
    let {
            className: t,
            waveform: n,
            currentTime: a,
            duration: o,
            played: l,
            playing: d,
            onDrag: f,
            onDragStart: h,
            onDragEnd: m,
        } = e,
        { ref: g, width: E } = (0, c.Ay)(),
        b = i.useMemo(() => R(o), [o]),
        y = i.useRef(void 0),
        O = L(n, E),
        v = i.useRef(l),
        I = i.useRef(d),
        C = i.useRef(null),
        N = window.devicePixelRatio,
        {
            lastBackgroundFillColor: w,
            backgroundFillColor: P,
            lastActiveFillColor: j,
            activeFillColor: U,
            lastInactiveFillColor: G,
            inactiveFillColor: V,
        } = M(l, d),
        F = {
            currentTime: a,
            duration: o,
            played: l,
        },
        B = i.useRef(F);
    i.useEffect(() => {
        B.current = F;
    }),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = B.current,
                r = D({
                    showAll: !n,
                    currentTime: e,
                    duration: t,
                    numSegments: O.length,
                });
            y.current = O.map((e, t) => new p.A(t < r ? e : 0));
        }, [O]),
        i.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = D({
                showAll: !l,
                currentTime: a,
                duration: o,
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
        }, [O, a, o, l]),
        i.useEffect(() => {
            let e = null;
            function t(n) {
                let r = g.current,
                    i = null == r ? void 0 : r.getContext("2d"),
                    a = y.current;
                if (null == r || null == i || null == a) return;
                let s = !1;
                (v.current !== l || I.current !== d) && ((v.current = l), (I.current = d), (C.current = n)),
                    null != C.current && n > C.current + T && (C.current = null);
                let o = r.height / N;
                i.clearRect(0, 0, r.width, r.height), i.beginPath();
                let [c, u] = k(w, P, n, C.current);
                (s = s || u), (i.fillStyle = c);
                for (let e = 0; e < O.length; e++)
                    x({
                        context: i,
                        devicePixelRatio: N,
                        canvasHeight: o,
                        segmentValue: O[e],
                        segmentIndex: e,
                        constrainMin: !0,
                    });
                i.fill();
                let [f, p] = k(G, V, n, C.current);
                s = s || p;
                let [_, h] = k(j, U, n, C.current);
                s = s || h;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), O[e] - 0.1);
                    i.beginPath(),
                        (i.fillStyle = t.isReset ? f : _),
                        x({
                            context: i,
                            devicePixelRatio: N,
                            canvasHeight: o,
                            segmentValue: n,
                            segmentIndex: e,
                            constrainMin: !t.isReset,
                        }),
                        (s = s || t.isAnimating()),
                        i.fill();
                }
                s && (e = requestAnimationFrame(t));
            }
            return (
                (e = requestAnimationFrame(t)),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [g, N, O, E, a, o, l, d, w, P, j, U, G, V]);
    let [, H] = (0, u.A)({
        ref: g,
        onDrag: f,
        onDragStart: h,
        onDragEnd: m,
    });
    return (0, r.jsx)("canvas", {
        onMouseDown: H,
        className: s()(_.J, t),
        style: { width: b },
        ref: g,
        height: (A + 2 * S) * window.devicePixelRatio,
        width: (null != E ? E : 0) * window.devicePixelRatio,
    });
}
