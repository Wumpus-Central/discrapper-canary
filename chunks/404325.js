"use strict";
n.d(t, { A: () => C }), n(508300);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(827734),
    o = n(602853),
    c = n(765671),
    u = n(240147),
    d = n(998304),
    h = n(934581),
    m = n(539451);
n(518950);
var p = n(614108);
let f = [0, 0, 0, 0, 0];
function g(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: l } = e;
    return t ? l : Math.max(0, Math.round((n / i) * l));
}
function _(e) {
    var t, n, i, l;
    let { context: s, devicePixelRatio: r, canvasHeight: a, segmentValue: o, segmentIndex: c, constrainMin: u } = e,
        d = u ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * c * r),
        (n = (a / 2 - d / 2) * r),
        (i = d * r),
        (l = +r),
        s.moveTo(t, n + l),
        s.lineTo(t, n + i - l),
        s.arc(t + l, n + i - l, l, Math.PI, 0, !0),
        s.lineTo(t + 2 * l, n + l),
        s.arc(t + l, n + l, l, 0, Math.PI, !0),
        s.closePath());
}
function x(e, t, n) {
    let [i, s] = l.useState(e),
        [r, a] = l.useState(e),
        o = l.useRef(r);
    return (
        l.useLayoutEffect(() => {
            o.current = r;
        }),
        l.useLayoutEffect(() => {
            s(o.current), a(e);
        }, [e, t, n]),
        [i, r]
    );
}
function A(e, t, n, i) {
    if (null == i) return [t, !1];
    let l = Math.min((n - i) / 200, 1);
    return 1 === l ? [t, !1] : [(0, d.De)(e, t, l), !0];
}
function C(e) {
    let t,
        n,
        {
            className: s,
            waveform: d,
            currentTime: C,
            duration: E,
            played: I,
            playing: v,
            onDrag: y,
            onDragStart: S,
            onDragEnd: b,
        } = e,
        { ref: N, width: T } = (0, c.Ay)(),
        j = l.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((E <= 0.5 ? 40 : E >= 45 ? 294 : ((Math.min(E, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [E],
        ),
        R = l.useRef(void 0),
        w =
            ((t = l.useMemo(
                () =>
                    (function (e) {
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
                    })(d),
                [d],
            )),
            (n = l.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(T),
                [T],
            )),
            l.useMemo(
                () =>
                    (function (e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0));
                            }
                            return (0, h.A)(e, t);
                        }
                    })(t ?? [], n) ?? f,
                [t, n],
            )),
        L = l.useRef(I),
        M = l.useRef(v),
        k = l.useRef(null),
        O = window.devicePixelRatio,
        {
            lastBackgroundFillColor: P,
            backgroundFillColor: D,
            lastActiveFillColor: U,
            activeFillColor: V,
            lastInactiveFillColor: G,
            inactiveFillColor: F,
        } = (function (e, t) {
            let n = (0, o.r)(a.A.colors.BACKGROUND_MOD_MUTED).hex(),
                i = (0, o.r)(a.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                l = (0, o.r)(a.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, o.r)(a.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, o.r)(a.A.unsafe_rawColors.WHITE).hex(),
                c = t ? s : n,
                [u, d] = x(c, t, e),
                [h, m] = x(t ? r : e ? l : i, t, e),
                [p, f] = x(e ? c : i, t, e);
            return {
                lastBackgroundFillColor: u,
                backgroundFillColor: d,
                lastActiveFillColor: h,
                activeFillColor: m,
                lastInactiveFillColor: p,
                inactiveFillColor: f,
            };
        })(I, v),
        B = { currentTime: C, duration: E, played: I },
        H = l.useRef(B);
    l.useEffect(() => {
        H.current = B;
    }),
        l.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = H.current,
                i = g({ showAll: !n, currentTime: e, duration: t, numSegments: w.length });
            R.current = w.map((e, t) => new m.A(t < i ? e : 0));
        }, [w]),
        l.useEffect(() => {
            let e = R.current;
            if (null == e) return;
            let t = g({ showAll: !I, currentTime: C, duration: E, numSegments: w.length });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(w[n]);
                    continue;
                }
                i.reset();
            }
        }, [w, C, E, I]),
        l.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let i = N.current,
                        l = i?.getContext("2d"),
                        s = R.current;
                    if (null == i || null == l || null == s) return;
                    let r = !1;
                    (L.current !== I || M.current !== v) && ((L.current = I), (M.current = v), (k.current = n)),
                        null != k.current && n > k.current + 200 && (k.current = null);
                    let a = i.height / O;
                    l.clearRect(0, 0, i.width, i.height), l.beginPath();
                    let [o, c] = A(P, D, n, k.current);
                    (r = r || c), (l.fillStyle = o);
                    for (let e = 0; e < w.length; e++)
                        _({
                            context: l,
                            devicePixelRatio: O,
                            canvasHeight: a,
                            segmentValue: w[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    l.fill();
                    let [u, d] = A(G, F, n, k.current);
                    r = r || d;
                    let [h, m] = A(U, V, n, k.current);
                    r = r || m;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), w[e] - 0.1);
                        l.beginPath(),
                            (l.fillStyle = t.isReset ? u : h),
                            _({
                                context: l,
                                devicePixelRatio: O,
                                canvasHeight: a,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (r = r || t.isAnimating()),
                            l.fill();
                    }
                    r && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [N, O, w, T, C, E, I, v, P, D, U, V, G, F]);
    let [, W] = (0, u.A)({ ref: N, onDrag: y, onDragStart: S, onDragEnd: b });
    return (0, i.jsx)("canvas", {
        onMouseDown: W,
        className: r()(p.J, s),
        style: { width: j },
        ref: N,
        height: 32 * window.devicePixelRatio,
        width: (T ?? 0) * window.devicePixelRatio,
    });
}
