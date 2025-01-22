r.d(n, {
    Z: function () {
        return V;
    }
});
var i = r(642549);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(692547),
    d = r(481060),
    f = r(393238),
    p = r(206678),
    h = r(302221),
    _ = r(328187),
    m = r(607889),
    g = r(94432),
    E = r(273746);
let v = 40,
    y = g.e3 / 1000,
    b = 294,
    I = 45,
    T = 1,
    S = 4,
    A = 6,
    C = 24,
    N = 2,
    R = 4,
    O = [0, 0, 0, 0, 0],
    D = 200;
function L(e) {
    let n;
    if (null == e) return;
    try {
        n = window.atob(e);
    } catch (e) {
        return;
    }
    let r = [];
    for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e) / g.Xi;
    return r;
}
function x(e, n) {
    if (null != e && null != n) {
        if (e.length < n) {
            let r = n - e.length;
            return e.concat(Array(r).fill(0));
        }
        return (0, _.Z)(e, n);
    }
}
function w(e) {
    let n;
    return Math.floor(((n = e <= y ? v : e >= I ? b : ((Math.min(e, I) - y) / (I - y)) * (b - v) + v) + S) / A) * A - S;
}
function P(e) {
    if (null == e) return;
    let n = 2 * T + S;
    return Math.floor((e + S) / n);
}
function M(e, n, r, i, a) {
    e.moveTo(n, r + a), e.lineTo(n, r + i - a), e.arc(n + a, r + i - a, a, Math.PI, 0, !0), e.lineTo(n + 2 * a, r + a), e.arc(n + a, r + a, a, 0, Math.PI, !0), e.closePath();
}
function k(e) {
    let { showAll: n, currentTime: r, duration: i, numSegments: a } = e;
    return n ? a : Math.max(0, Math.round((r / i) * a));
}
function U(e) {
    let { context: n, devicePixelRatio: r, canvasHeight: i, segmentValue: a, segmentIndex: o, constrainMin: s } = e,
        l = s ? (C - N) * a + N : C * a;
    if (0 !== l) M(n, o * (2 * T + S) * r, (i / 2 - l / 2) * r, l * r, T * r);
}
function B(e, n) {
    let r = s.useMemo(() => L(e), [e]),
        i = s.useMemo(() => P(n), [n]);
    return s.useMemo(() => {
        var e;
        return null !== (e = x(null != r ? r : [], i)) && void 0 !== e ? e : O;
    }, [r, i]);
}
function G(e, n, r) {
    let [i, a] = s.useState(e),
        [o, l] = s.useState(e),
        u = s.useRef(o);
    return (
        s.useLayoutEffect(() => {
            u.current = o;
        }),
        s.useLayoutEffect(() => {
            a(u.current), l(e);
        }, [e, n, r]),
        [i, o]
    );
}
function Z(e, n) {
    let r = (0, d.useToken)(c.Z.colors.INTERACTIVE_MUTED).hex(),
        i = (0, d.useToken)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        a = (0, d.useToken)(c.Z.colors.INTERACTIVE_ACTIVE).hex(),
        o = (0, d.useToken)(c.Z.unsafe_rawColors.BRAND_430).hex(),
        s = (0, d.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex(),
        l = n ? o : r,
        [u, f] = G(l, n, e),
        [p, h] = G(n ? s : e ? a : i, n, e),
        [_, m] = G(e ? l : i, n, e);
    return {
        lastBackgroundFillColor: u,
        backgroundFillColor: f,
        lastActiveFillColor: p,
        activeFillColor: h,
        lastInactiveFillColor: _,
        inactiveFillColor: m
    };
}
function F(e, n, r, i) {
    if (null == i) return [n, !1];
    let a = Math.min((r - i) / D, 1);
    return 1 === a ? [n, !1] : [(0, h.BM)(e, n, a), !0];
}
function V(e) {
    let { className: n, waveform: r, currentTime: i, duration: a, played: l, playing: c, onDrag: d, onDragStart: h, onDragEnd: _ } = e,
        { ref: g, width: v } = (0, f.Z)(),
        y = s.useMemo(() => w(a), [a]),
        b = s.useRef(),
        I = B(r, v),
        T = s.useRef(l),
        S = s.useRef(c),
        A = s.useRef(null),
        N = window.devicePixelRatio,
        { lastBackgroundFillColor: O, backgroundFillColor: L, lastActiveFillColor: x, activeFillColor: P, lastInactiveFillColor: M, inactiveFillColor: G } = Z(l, c),
        V = {
            currentTime: i,
            duration: a,
            played: l
        },
        j = s.useRef(V);
    s.useEffect(() => {
        j.current = V;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: n, played: r } = j.current,
                i = k({
                    showAll: !r,
                    currentTime: e,
                    duration: n,
                    numSegments: I.length
                });
            b.current = I.map((e, n) => new m.Z(n < i ? e : 0));
        }, [I]),
        s.useEffect(() => {
            let e = b.current;
            if (null == e) return;
            let n = k({
                showAll: !l,
                currentTime: i,
                duration: a,
                numSegments: I.length
            });
            for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if (r < n) {
                    i.animateTo(I[r]);
                    continue;
                }
                i.reset();
            }
        }, [I, i, a, l]),
        s.useEffect(() => {
            let e = null;
            function n(r) {
                let i = g.current,
                    a = null == i ? void 0 : i.getContext('2d'),
                    o = b.current;
                if (null == i || null == a || null == o) return;
                let s = !1;
                (T.current !== l || S.current !== c) && ((T.current = l), (S.current = c), (A.current = r)), null != A.current && r > A.current + D && (A.current = null);
                let u = i.height / N;
                a.clearRect(0, 0, i.width, i.height), a.beginPath();
                let [d, f] = F(O, L, r, A.current);
                (s = s || f), (a.fillStyle = d);
                for (let e = 0; e < I.length; e++)
                    U({
                        context: a,
                        devicePixelRatio: N,
                        canvasHeight: u,
                        segmentValue: I[e],
                        segmentIndex: e,
                        constrainMin: !0
                    });
                a.fill();
                let [p, h] = F(M, G, r, A.current);
                s = s || h;
                let [_, m] = F(x, P, r, A.current);
                s = s || m;
                for (let e = 0; e < o.length; e++) {
                    let n = o[e],
                        r = Math.max(n.getCurrentValue(), I[e] - 0.1);
                    a.beginPath(),
                        (a.fillStyle = n.isReset ? p : _),
                        U({
                            context: a,
                            devicePixelRatio: N,
                            canvasHeight: u,
                            segmentValue: r,
                            segmentIndex: e,
                            constrainMin: !n.isReset
                        }),
                        (s = s || n.isAnimating()),
                        a.fill();
                }
                s && (e = requestAnimationFrame(n));
            }
            return (
                (e = requestAnimationFrame(n)),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [g, N, I, v, i, a, l, c, O, L, x, P, M, G]);
    let [, H] = (0, p.Z)({
        ref: g,
        onDrag: d,
        onDragStart: h,
        onDragEnd: _
    });
    return (0, o.jsx)('canvas', {
        onMouseDown: H,
        className: u()(E.canvas, n),
        style: { width: y },
        ref: g,
        height: (C + 2 * R) * window.devicePixelRatio,
        width: (null != v ? v : 0) * window.devicePixelRatio
    });
}
