"use strict";
n.d(t, { A: () => G }), n(508300);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    u = n(765671),
    c = n(240147),
    d = n(998304),
    _ = n(156962),
    f = n(539451);
n(518950);
var p = n(783821);
let h = 40,
    m = 0.5,
    g = 294,
    E = 45,
    A = 1,
    I = 4,
    T = 6,
    y = 24,
    S = 2,
    v = 4,
    C = [0, 0, 0, 0, 0],
    b = 200;
function N(e) {
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
function R(e, t) {
    if (null != e && null != t) {
        if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0));
        }
        return (0, _.A)(e, t);
    }
}
function O(e) {
    let t;
    return Math.floor(((t = e <= m ? h : e >= E ? g : ((Math.min(e, E) - m) / (E - m)) * (g - h) + h) + I) / T) * T - I;
}
function D(e) {
    if (null == e) return;
    let t = 2 * A + I;
    return Math.floor((e + I) / t);
}
function L(e, t, n, r, i) {
    e.moveTo(t, n + i),
        e.lineTo(t, n + r - i),
        e.arc(t + i, n + r - i, i, Math.PI, 0, !0),
        e.lineTo(t + 2 * i, n + i),
        e.arc(t + i, n + i, i, 0, Math.PI, !0),
        e.closePath();
}
function w(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function x(e) {
    let { context: t, devicePixelRatio: n, canvasHeight: r, segmentValue: i, segmentIndex: a, constrainMin: s } = e,
        o = s ? (y - S) * i + S : y * i;
    0 === o || L(t, a * (2 * A + I) * n, (r / 2 - o / 2) * n, o * n, A * n);
}
function P(e, t) {
    let n = i.useMemo(() => N(e), [e]),
        r = i.useMemo(() => D(t), [t]);
    return i.useMemo(() => R(n ?? [], r) ?? C, [n, r]);
}
function M(e, t, n) {
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
function k(e, t) {
    let n = (0, l.rdh)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
        r = (0, l.rdh)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        i = (0, l.rdh)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        a = (0, l.rdh)(o.A.unsafe_rawColors.BRAND_430).hex(),
        s = (0, l.rdh)(o.A.unsafe_rawColors.WHITE).hex(),
        u = t ? a : n,
        [c, d] = M(u, t, e),
        [_, f] = M(t ? s : e ? i : r, t, e),
        [p, h] = M(e ? u : r, t, e);
    return {
        lastBackgroundFillColor: c,
        backgroundFillColor: d,
        lastActiveFillColor: _,
        activeFillColor: f,
        lastInactiveFillColor: p,
        inactiveFillColor: h,
    };
}
function U(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / b, 1);
    return 1 === i ? [t, !1] : [(0, d.De)(e, t, i), !0];
}
function G(e) {
    let {
            className: t,
            waveform: n,
            currentTime: a,
            duration: o,
            played: l,
            playing: d,
            onDrag: _,
            onDragStart: h,
            onDragEnd: m,
        } = e,
        { ref: g, width: E } = (0, u.Ay)(),
        A = i.useMemo(() => O(o), [o]),
        I = i.useRef(void 0),
        T = P(n, E),
        S = i.useRef(l),
        C = i.useRef(d),
        N = i.useRef(null),
        R = window.devicePixelRatio,
        {
            lastBackgroundFillColor: D,
            backgroundFillColor: L,
            lastActiveFillColor: M,
            activeFillColor: G,
            lastInactiveFillColor: V,
            inactiveFillColor: F,
        } = k(l, d),
        B = { currentTime: a, duration: o, played: l },
        j = i.useRef(B);
    i.useEffect(() => {
        j.current = B;
    }),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = j.current,
                r = w({ showAll: !n, currentTime: e, duration: t, numSegments: T.length });
            I.current = T.map((e, t) => new f.A(t < r ? e : 0));
        }, [T]),
        i.useEffect(() => {
            let e = I.current;
            if (null == e) return;
            let t = w({ showAll: !l, currentTime: a, duration: o, numSegments: T.length });
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (n < t) {
                    r.animateTo(T[n]);
                    continue;
                }
                r.reset();
            }
        }, [T, a, o, l]),
        i.useEffect(() => {
            let e = null;
            function t(n) {
                let r = g.current,
                    i = r?.getContext("2d"),
                    a = I.current;
                if (null == r || null == i || null == a) return;
                let s = !1;
                (S.current !== l || C.current !== d) && ((S.current = l), (C.current = d), (N.current = n)),
                    null != N.current && n > N.current + b && (N.current = null);
                let o = r.height / R;
                i.clearRect(0, 0, r.width, r.height), i.beginPath();
                let [u, c] = U(D, L, n, N.current);
                (s = s || c), (i.fillStyle = u);
                for (let e = 0; e < T.length; e++)
                    x({
                        context: i,
                        devicePixelRatio: R,
                        canvasHeight: o,
                        segmentValue: T[e],
                        segmentIndex: e,
                        constrainMin: !0,
                    });
                i.fill();
                let [_, f] = U(V, F, n, N.current);
                s = s || f;
                let [p, h] = U(M, G, n, N.current);
                s = s || h;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), T[e] - 0.1);
                    i.beginPath(),
                        (i.fillStyle = t.isReset ? _ : p),
                        x({
                            context: i,
                            devicePixelRatio: R,
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
        }, [g, R, T, E, a, o, l, d, D, L, M, G, V, F]);
    let [, H] = (0, c.A)({ ref: g, onDrag: _, onDragStart: h, onDragEnd: m });
    return (0, r.jsx)("canvas", {
        onMouseDown: H,
        className: s()(p.J, t),
        style: { width: A },
        ref: g,
        height: (y + 2 * v) * window.devicePixelRatio,
        width: (E ?? 0) * window.devicePixelRatio,
    });
}
