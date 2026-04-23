"use strict";
n.d(t, { A: () => I }), n(508300);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(602853),
    u = n(765671),
    c = n(240147),
    d = n(998304),
    _ = n(934581),
    f = n(539451);
n(518950);
var p = n(614108);
let h = [0, 0, 0, 0, 0];
function E(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function m(e) {
    var t, n, r, i;
    let { context: s, devicePixelRatio: a, canvasHeight: o, segmentValue: l, segmentIndex: u, constrainMin: c } = e,
        d = c ? 22 * l + 2 : 24 * l;
    0 !== d &&
        ((t = 6 * u * a),
        (n = (o / 2 - d / 2) * a),
        (r = d * a),
        (i = +a),
        s.moveTo(t, n + i),
        s.lineTo(t, n + r - i),
        s.arc(t + i, n + r - i, i, Math.PI, 0, !0),
        s.lineTo(t + 2 * i, n + i),
        s.arc(t + i, n + i, i, 0, Math.PI, !0),
        s.closePath());
}
function g(e, t, n) {
    let [r, s] = i.useState(e),
        [a, o] = i.useState(e),
        l = i.useRef(a);
    return (
        i.useLayoutEffect(() => {
            l.current = a;
        }),
        i.useLayoutEffect(() => {
            s(l.current), o(e);
        }, [e, t, n]),
        [r, a]
    );
}
function A(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / 200, 1);
    return 1 === i ? [t, !1] : [(0, d.De)(e, t, i), !0];
}
function I(e) {
    let t,
        n,
        {
            className: s,
            waveform: d,
            currentTime: I,
            duration: T,
            played: S,
            playing: y,
            onDrag: N,
            onDragStart: v,
            onDragEnd: C,
        } = e,
        { ref: O, width: R } = (0, u.Ay)(),
        b = i.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((T <= 0.5 ? 40 : T >= 45 ? 294 : ((Math.min(T, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [T],
        ),
        D = i.useRef(void 0),
        L =
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
                        let n = [];
                        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / 255;
                        return n;
                    })(d),
                [d],
            )),
            (n = i.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(R),
                [R],
            )),
            i.useMemo(
                () =>
                    (function (e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0));
                            }
                            return (0, _.A)(e, t);
                        }
                    })(t ?? [], n) ?? h,
                [t, n],
            )),
        w = i.useRef(S),
        M = i.useRef(y),
        P = i.useRef(null),
        x = window.devicePixelRatio,
        {
            lastBackgroundFillColor: k,
            backgroundFillColor: U,
            lastActiveFillColor: G,
            activeFillColor: F,
            lastInactiveFillColor: V,
            inactiveFillColor: B,
        } = (function (e, t) {
            let n = (0, l.r)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
                r = (0, l.r)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, l.r)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, l.r)(o.A.unsafe_rawColors.BRAND_430).hex(),
                a = (0, l.r)(o.A.unsafe_rawColors.WHITE).hex(),
                u = t ? s : n,
                [c, d] = g(u, t, e),
                [_, f] = g(t ? a : e ? i : r, t, e),
                [p, h] = g(e ? u : r, t, e);
            return {
                lastBackgroundFillColor: c,
                backgroundFillColor: d,
                lastActiveFillColor: _,
                activeFillColor: f,
                lastInactiveFillColor: p,
                inactiveFillColor: h,
            };
        })(S, y),
        H = { currentTime: I, duration: T, played: S },
        j = i.useRef(H);
    i.useEffect(() => {
        j.current = H;
    }),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = j.current,
                r = E({ showAll: !n, currentTime: e, duration: t, numSegments: L.length });
            D.current = L.map((e, t) => new f.A(t < r ? e : 0));
        }, [L]),
        i.useEffect(() => {
            let e = D.current;
            if (null == e) return;
            let t = E({ showAll: !S, currentTime: I, duration: T, numSegments: L.length });
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (n < t) {
                    r.animateTo(L[n]);
                    continue;
                }
                r.reset();
            }
        }, [L, I, T, S]),
        i.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let r = O.current,
                        i = r?.getContext("2d"),
                        s = D.current;
                    if (null == r || null == i || null == s) return;
                    let a = !1;
                    (w.current !== S || M.current !== y) && ((w.current = S), (M.current = y), (P.current = n)),
                        null != P.current && n > P.current + 200 && (P.current = null);
                    let o = r.height / x;
                    i.clearRect(0, 0, r.width, r.height), i.beginPath();
                    let [l, u] = A(k, U, n, P.current);
                    (a = a || u), (i.fillStyle = l);
                    for (let e = 0; e < L.length; e++)
                        m({
                            context: i,
                            devicePixelRatio: x,
                            canvasHeight: o,
                            segmentValue: L[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [c, d] = A(V, B, n, P.current);
                    a = a || d;
                    let [_, f] = A(G, F, n, P.current);
                    a = a || f;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), L[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? c : _),
                            m({
                                context: i,
                                devicePixelRatio: x,
                                canvasHeight: o,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (a = a || t.isAnimating()),
                            i.fill();
                    }
                    a && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [O, x, L, R, I, T, S, y, k, U, G, F, V, B]);
    let [, Y] = (0, c.A)({ ref: O, onDrag: N, onDragStart: v, onDragEnd: C });
    return (0, r.jsx)("canvas", {
        onMouseDown: Y,
        className: a()(p.J, s),
        style: { width: b },
        ref: O,
        height: 32 * window.devicePixelRatio,
        width: (R ?? 0) * window.devicePixelRatio,
    });
}
