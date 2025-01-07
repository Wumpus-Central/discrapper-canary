r.d(n, {
    Z: function () {
        return V;
    }
});
var i = r(642549);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(692547),
    d = r(481060),
    f = r(393238),
    _ = r(206678),
    h = r(302221),
    p = r(328187),
    m = r(607889),
    g = r(94432),
    E = r(273746);
let v = 40,
    I = g.e3 / 1000,
    T = 294,
    b = 45,
    y = 1,
    S = 4,
    A = 6,
    N = 24,
    C = 2,
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
        return (0, p.Z)(e, n);
    }
}
function w(e) {
    let n;
    return Math.floor(((n = e <= I ? v : e >= b ? T : ((Math.min(e, b) - I) / (b - I)) * (T - v) + v) + S) / A) * A - S;
}
function P(e) {
    if (null == e) return;
    let n = 2 * y + S;
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
    let { context: n, devicePixelRatio: r, canvasHeight: i, segmentValue: a, segmentIndex: s, constrainMin: o } = e,
        l = o ? (N - C) * a + C : N * a;
    if (0 !== l) M(n, s * (2 * y + S) * r, (i / 2 - l / 2) * r, l * r, y * r);
}
function B(e, n) {
    let r = o.useMemo(() => L(e), [e]),
        i = o.useMemo(() => P(n), [n]);
    return o.useMemo(() => {
        var e;
        return null !== (e = x(null != r ? r : [], i)) && void 0 !== e ? e : O;
    }, [r, i]);
}
function G(e, n, r) {
    let [i, a] = o.useState(e),
        [s, l] = o.useState(e),
        u = o.useRef(s);
    return (
        o.useLayoutEffect(() => {
            u.current = s;
        }),
        o.useLayoutEffect(() => {
            a(u.current), l(e);
        }, [e, n, r]),
        [i, s]
    );
}
function Z(e, n) {
    let r = (0, d.useToken)(c.Z.colors.INTERACTIVE_MUTED).hex(),
        i = (0, d.useToken)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        a = (0, d.useToken)(c.Z.colors.INTERACTIVE_ACTIVE).hex(),
        s = (0, d.useToken)(c.Z.unsafe_rawColors.BRAND_430).hex(),
        o = (0, d.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex(),
        l = n ? s : r,
        [u, f] = G(l, n, e),
        [_, h] = G(n ? o : e ? a : i, n, e),
        [p, m] = G(e ? l : i, n, e);
    return {
        lastBackgroundFillColor: u,
        backgroundFillColor: f,
        lastActiveFillColor: _,
        activeFillColor: h,
        lastInactiveFillColor: p,
        inactiveFillColor: m
    };
}
function F(e, n, r, i) {
    if (null == i) return [n, !1];
    let a = Math.min((r - i) / D, 1);
    return 1 === a ? [n, !1] : [(0, h.BM)(e, n, a), !0];
}
function V(e) {
    let { className: n, waveform: r, currentTime: i, duration: a, played: l, playing: c, onDrag: d, onDragStart: h, onDragEnd: p } = e,
        { ref: g, width: v } = (0, f.Z)(),
        I = o.useMemo(() => w(a), [a]),
        T = o.useRef(),
        b = B(r, v),
        y = o.useRef(l),
        S = o.useRef(c),
        A = o.useRef(null),
        C = window.devicePixelRatio,
        { lastBackgroundFillColor: O, backgroundFillColor: L, lastActiveFillColor: x, activeFillColor: P, lastInactiveFillColor: M, inactiveFillColor: G } = Z(l, c),
        V = {
            currentTime: i,
            duration: a,
            played: l
        },
        j = o.useRef(V);
    o.useEffect(() => {
        j.current = V;
    }),
        o.useEffect(() => {
            let { currentTime: e, duration: n, played: r } = j.current,
                i = k({
                    showAll: !r,
                    currentTime: e,
                    duration: n,
                    numSegments: b.length
                });
            T.current = b.map((e, n) => new m.Z(n < i ? e : 0));
        }, [b]),
        o.useEffect(() => {
            let e = T.current;
            if (null == e) return;
            let n = k({
                showAll: !l,
                currentTime: i,
                duration: a,
                numSegments: b.length
            });
            for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if (r < n) {
                    i.animateTo(b[r]);
                    continue;
                }
                i.reset();
            }
        }, [b, i, a, l]),
        o.useEffect(() => {
            let e = null;
            function n(r) {
                let i = g.current,
                    a = null == i ? void 0 : i.getContext('2d'),
                    s = T.current;
                if (null == i || null == a || null == s) return;
                let o = !1;
                (y.current !== l || S.current !== c) && ((y.current = l), (S.current = c), (A.current = r)), null != A.current && r > A.current + D && (A.current = null);
                let u = i.height / C;
                a.clearRect(0, 0, i.width, i.height), a.beginPath();
                let [d, f] = F(O, L, r, A.current);
                (o = o || f), (a.fillStyle = d);
                for (let e = 0; e < b.length; e++)
                    U({
                        context: a,
                        devicePixelRatio: C,
                        canvasHeight: u,
                        segmentValue: b[e],
                        segmentIndex: e,
                        constrainMin: !0
                    });
                a.fill();
                let [_, h] = F(M, G, r, A.current);
                o = o || h;
                let [p, m] = F(x, P, r, A.current);
                o = o || m;
                for (let e = 0; e < s.length; e++) {
                    let n = s[e],
                        r = Math.max(n.getCurrentValue(), b[e] - 0.1);
                    a.beginPath(),
                        (a.fillStyle = n.isReset ? _ : p),
                        U({
                            context: a,
                            devicePixelRatio: C,
                            canvasHeight: u,
                            segmentValue: r,
                            segmentIndex: e,
                            constrainMin: !n.isReset
                        }),
                        (o = o || n.isAnimating()),
                        a.fill();
                }
                o && (e = requestAnimationFrame(n));
            }
            return (
                (e = requestAnimationFrame(n)),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [g, C, b, v, i, a, l, c, O, L, x, P, M, G]);
    let [, H] = (0, _.Z)({
        ref: g,
        onDrag: d,
        onDragStart: h,
        onDragEnd: p
    });
    return (0, s.jsx)('canvas', {
        onMouseDown: H,
        className: u()(E.canvas, n),
        style: { width: I },
        ref: g,
        height: (N + 2 * R) * window.devicePixelRatio,
        width: (null != v ? v : 0) * window.devicePixelRatio
    });
}
