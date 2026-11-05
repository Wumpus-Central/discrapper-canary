(s.d(t, { A: () => b }), s(508300));
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(722872),
    o = s(646514),
    h = s(602853),
    u = s(765671);
function d(e, t) {
    let s = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - s.left) / s.width));
}
var c = s(998304),
    m = s(934581),
    p = s(539451);
s(518950);
var g = s(587159);
let f = [0, 0, 0, 0, 0];
function v(e) {
    let { showAll: t, currentTime: s, duration: a, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((s / a) * i));
}
function y(e) {
    var t, s, a, i;
    let { context: n, devicePixelRatio: l, canvasHeight: r, segmentValue: o, segmentIndex: h, constrainMin: u } = e,
        d = u ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * h * l),
        (s = (r / 2 - d / 2) * l),
        (a = d * l),
        (i = +l),
        n.moveTo(t, s + i),
        n.lineTo(t, s + a - i),
        n.arc(t + i, s + a - i, i, Math.PI, 0, !0),
        n.lineTo(t + 2 * i, s + i),
        n.arc(t + i, s + i, i, 0, Math.PI, !0),
        n.closePath());
}
function S(e, t, s) {
    let [a, n] = i.useState(e),
        [l, r] = i.useState(e),
        o = i.useRef(l);
    return (
        i.useLayoutEffect(() => {
            o.current = l;
        }),
        i.useLayoutEffect(() => {
            (n(o.current), r(e));
        }, [e, t, s]),
        [a, l]
    );
}
function C(e, t, s, a) {
    if (null == a) return [t, !1];
    let i = Math.min((s - a) / 200, 1);
    return 1 === i ? [t, !1] : [(0, c.De)(e, t, i), !0];
}
function T(e, t, s) {
    if (null == e) return 1;
    let a = Math.max(0, Math.min(e - (s > 1 ? (t / (s - 1)) * 60 : 0), 100));
    return Math.max(0, r.easeOutBack(a, 0, 1, 100, 2));
}
function b(e) {
    let t,
        s,
        {
            className: n,
            fluid: r = !1,
            neutralPlaybackColors: c = !1,
            animateOnMount: b = !1,
            waveform: x,
            currentTime: w,
            duration: M,
            played: A,
            playing: _,
            onDrag: D,
            onDragStart: k,
            onDragEnd: E,
        } = e,
        { ref: R, width: P } = (0, u.Ay)(),
        I = i.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((M <= 0.5 ? 40 : M >= 45 ? 294 : ((Math.min(M, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [M],
        ),
        V = i.useRef(void 0),
        N =
            ((t = i.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (null == e) return;
                        try {
                            t = window.atob(e);
                        } catch (e) {
                            return;
                        }
                        let s = [];
                        for (let e = 0; e < t.length; e++) s[e] = t.charCodeAt(e) / 255;
                        return s;
                    })(x),
                [x],
            )),
            (s = i.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(P),
                [P],
            )),
            i.useMemo(
                () =>
                    (function (e, t, s) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                if (s)
                                    return 0 === e.length
                                        ? Array(t).fill(0)
                                        : 1 === e.length
                                          ? Array(t).fill(e[0])
                                          : Array.from({ length: t }, (s, a) => {
                                                let i = (a * (e.length - 1)) / (t - 1),
                                                    n = Math.floor(i),
                                                    l = Math.min(e.length - 1, n + 1),
                                                    r = i - n;
                                                return e[n] * (1 - r) + e[l] * r;
                                            });
                                let a = t - e.length;
                                return e.concat(Array(a).fill(0));
                            }
                            return (0, m.A)(e, t);
                        }
                    })(t ?? [], s, r) ?? f,
                [t, s, r],
            )),
        j = _ && !c,
        L = i.useRef(A),
        U = i.useRef(j),
        O = i.useRef(null),
        W = i.useRef(null),
        F = i.useRef(b),
        B = window.devicePixelRatio,
        {
            lastBackgroundFillColor: H,
            backgroundFillColor: z,
            lastActiveFillColor: K,
            activeFillColor: q,
            lastInactiveFillColor: Y,
            inactiveFillColor: X,
        } = (function (e, t) {
            let s = (0, h.r)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
                a = (0, h.r)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, h.r)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                n = (0, h.r)(o.A.unsafe_rawColors.BRAND_430).hex(),
                l = (0, h.r)(o.A.unsafe_rawColors.WHITE).hex(),
                r = t ? n : s,
                [u, d] = S(r, t, e),
                [c, m] = S(t ? l : e ? i : a, t, e),
                [p, g] = S(e ? r : a, t, e);
            return {
                lastBackgroundFillColor: u,
                backgroundFillColor: d,
                lastActiveFillColor: c,
                activeFillColor: m,
                lastInactiveFillColor: p,
                inactiveFillColor: g,
            };
        })(A, j),
        $ = { currentTime: w, duration: M, played: A },
        G = i.useRef($);
    (i.useEffect(() => {
        G.current = $;
    }),
        i.useEffect(() => {
            ((W.current = null), (F.current = b));
        }, [b, N]),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: s } = G.current,
                a = v({ showAll: !s, currentTime: e, duration: t, numSegments: N.length });
            V.current = N.map((e, t) => new p.A(t < a ? e : 0));
        }, [N]),
        i.useEffect(() => {
            let e = V.current;
            if (null == e) return;
            let t = v({ showAll: !A, currentTime: w, duration: M, numSegments: N.length });
            for (let s = 0; s < e.length; s++) {
                let a = e[s];
                if (s < t) {
                    a.animateTo(N[s]);
                    continue;
                }
                a.reset();
            }
        }, [N, w, M, A]),
        i.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(s) {
                    let a = R.current,
                        i = a?.getContext("2d"),
                        n = V.current;
                    if (null == a || null == i || null == n) return;
                    let l = !1;
                    F.current && ((F.current = !1), (W.current = s));
                    let r = null;
                    if (null != W.current) {
                        let e = s - W.current;
                        e < 160 ? ((r = e), (l = !0)) : (W.current = null);
                    }
                    ((L.current !== A || U.current !== j) && ((L.current = A), (U.current = j), (O.current = s)),
                        null != O.current && s > O.current + 200 && (O.current = null));
                    let o = a.height / B;
                    (i.clearRect(0, 0, a.width, a.height), i.beginPath());
                    let [h, u] = C(H, z, s, O.current);
                    ((l = l || u), (i.fillStyle = h));
                    for (let e = 0; e < N.length; e++) {
                        let t = T(r, e, N.length);
                        y({
                            context: i,
                            devicePixelRatio: B,
                            canvasHeight: o,
                            segmentValue: N[e] * t,
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    }
                    i.fill();
                    let [d, c] = C(Y, X, s, O.current);
                    l = l || c;
                    let [m, p] = C(K, q, s, O.current);
                    l = l || p;
                    for (let e = 0; e < n.length; e++) {
                        let t = n[e],
                            s = T(r, e, n.length),
                            a = Math.max(t.getCurrentValue(), N[e] - 0.1) * s;
                        (i.beginPath(),
                            (i.fillStyle = t.isReset ? d : m),
                            y({
                                context: i,
                                devicePixelRatio: B,
                                canvasHeight: o,
                                segmentValue: a,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (l = l || t.isAnimating()),
                            i.fill());
                    }
                    l && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [R, B, N, P, b, w, M, A, j, H, z, K, q, Y, X]));
    let [, Z] = (function (e) {
        let { ref: t, onDrag: s, onDragStart: a, onDragEnd: n } = e,
            [l, r] = i.useState(!1);
        return (
            i.useEffect(() => {
                if (l)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", a),
                        () => {
                            (window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", a));
                        }
                    );
                function e() {
                    (n?.(), r(!1));
                }
                function a(e) {
                    let a = t.current;
                    null != a && s?.(d(a, e));
                }
            }, [t, l, n, s]),
            [
                l,
                i.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (r(!0), a?.(), s?.(d(i, e)));
                    },
                    [t, a, s],
                ),
            ]
        );
    })({ ref: R, onDrag: D, onDragStart: k, onDragEnd: E });
    return (0, a.jsx)("canvas", {
        onMouseDown: Z,
        className: l()(g.J, n),
        style: r ? void 0 : { width: I },
        ref: R,
        height: 32 * window.devicePixelRatio,
        width: (P ?? 0) * window.devicePixelRatio,
    });
}
