(s.d(t, { A: () => x }), s(508300));
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(722872),
    o = s(646514),
    u = s(602853),
    h = s(765671);
function d(e, t) {
    let s = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - s.left) / s.width));
}
var c = s(998304),
    m = s(934581),
    p = s(539451);
s(518950);
var f = s(587159);
let g = [0, 0, 0, 0, 0];
function y(e) {
    let { showAll: t, currentTime: s, duration: a, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((s / a) * i));
}
function v(e) {
    var t, s, a, i;
    let { context: n, devicePixelRatio: l, canvasHeight: r, segmentValue: o, segmentIndex: u, constrainMin: h } = e,
        d = h ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * u * l),
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
function x(e) {
    let t,
        s,
        {
            className: n,
            fluid: r = !1,
            neutralPlaybackColors: c = !1,
            animateOnMount: x = !1,
            waveform: b,
            currentTime: A,
            duration: k,
            played: _,
            playing: M,
            onDrag: w,
            onDragStart: D,
            onDragEnd: P,
        } = e,
        { ref: R, width: E } = (0, h.Ay)(),
        I = i.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((k <= 0.5 ? 40 : k >= 45 ? 294 : ((Math.min(k, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [k],
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
                    })(b),
                [b],
            )),
            (s = i.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(E),
                [E],
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
                    })(t ?? [], s, r) ?? g,
                [t, s, r],
            )),
        j = M && !c,
        O = i.useRef(_),
        L = i.useRef(j),
        U = i.useRef(null),
        W = i.useRef(null),
        F = i.useRef(x),
        B = window.devicePixelRatio,
        {
            lastBackgroundFillColor: H,
            backgroundFillColor: z,
            lastActiveFillColor: q,
            activeFillColor: K,
            lastInactiveFillColor: Y,
            inactiveFillColor: X,
        } = (function (e, t) {
            let s = (0, u.r)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
                a = (0, u.r)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, u.r)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                n = (0, u.r)(o.A.unsafe_rawColors.BRAND_430).hex(),
                l = (0, u.r)(o.A.unsafe_rawColors.WHITE).hex(),
                r = t ? n : s,
                [h, d] = S(r, t, e),
                [c, m] = S(t ? l : e ? i : a, t, e),
                [p, f] = S(e ? r : a, t, e);
            return {
                lastBackgroundFillColor: h,
                backgroundFillColor: d,
                lastActiveFillColor: c,
                activeFillColor: m,
                lastInactiveFillColor: p,
                inactiveFillColor: f,
            };
        })(_, j),
        $ = { currentTime: A, duration: k, played: _ },
        Z = i.useRef($);
    (i.useEffect(() => {
        Z.current = $;
    }),
        i.useEffect(() => {
            ((W.current = null), (F.current = x));
        }, [x, N]),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: s } = Z.current,
                a = y({ showAll: !s, currentTime: e, duration: t, numSegments: N.length });
            V.current = N.map((e, t) => new p.A(t < a ? e : 0));
        }, [N]),
        i.useEffect(() => {
            let e = V.current;
            if (null == e) return;
            let t = y({ showAll: !_, currentTime: A, duration: k, numSegments: N.length });
            for (let s = 0; s < e.length; s++) {
                let a = e[s];
                if (s < t) {
                    a.animateTo(N[s]);
                    continue;
                }
                a.reset();
            }
        }, [N, A, k, _]),
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
                    ((O.current !== _ || L.current !== j) && ((O.current = _), (L.current = j), (U.current = s)),
                        null != U.current && s > U.current + 200 && (U.current = null));
                    let o = a.height / B;
                    (i.clearRect(0, 0, a.width, a.height), i.beginPath());
                    let [u, h] = C(H, z, s, U.current);
                    ((l = l || h), (i.fillStyle = u));
                    for (let e = 0; e < N.length; e++) {
                        let t = T(r, e, N.length);
                        v({
                            context: i,
                            devicePixelRatio: B,
                            canvasHeight: o,
                            segmentValue: N[e] * t,
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    }
                    i.fill();
                    let [d, c] = C(Y, X, s, U.current);
                    l = l || c;
                    let [m, p] = C(q, K, s, U.current);
                    l = l || p;
                    for (let e = 0; e < n.length; e++) {
                        let t = n[e],
                            s = T(r, e, n.length),
                            a = Math.max(t.getCurrentValue(), N[e] - 0.1) * s;
                        (i.beginPath(),
                            (i.fillStyle = t.isReset ? d : m),
                            v({
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
        }, [R, B, N, E, x, A, k, _, j, H, z, q, K, Y, X]));
    let [, G] = (function (e) {
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
    })({ ref: R, onDrag: w, onDragStart: D, onDragEnd: P });
    return (0, a.jsx)("canvas", {
        onMouseDown: G,
        className: l()(f.J, n),
        style: r ? void 0 : { width: I },
        ref: R,
        height: 32 * window.devicePixelRatio,
        width: (E ?? 0) * window.devicePixelRatio,
    });
}
