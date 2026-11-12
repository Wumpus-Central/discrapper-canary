(n.d(t, {
    Yn: () => z,
    gl: () => k,
    Dr: () => M,
    QJ: () => U,
    u9: () => w,
    SX: () => x,
    Of: () => v,
    k6: () => P,
    zJ: () => G,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
var i = n(477900),
    r = n(582128),
    a = n(971940),
    s = n(844222),
    l = n(116711),
    o = n(611361),
    d = n(306327);
let c = /^rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\s*\)$/;
function u(e) {
    return Math.round(255 * Math.min(1, Math.max(0, Number.isNaN(e) ? 0 : e)));
}
function _(e, t, n, i) {
    return ((u(i) << 24) | (u(e) << 16) | (u(t) << 8) | u(n)) >>> 0;
}
function E(e) {
    let t = c.exec(e);
    if (null != t)
        return _(Number(t[1]) / 255, Number(t[2]) / 255, Number(t[3]) / 255, null == t[4] ? 1 : Number(t[4]));
    try {
        let t = new d.A(e).to("srgb");
        return _(t.coords[0], t.coords[1], t.coords[2], t.alpha ?? 1);
    } catch {
        return null;
    }
}
var A = n(178709);
let f = new Map(),
    h = new Map();
function I(e, t) {
    let n,
        i = e.canvas.parentElement ?? e.canvas;
    i !== e.source && ((e.source = i), (e.style = (i.ownerDocument.defaultView ?? window).getComputedStyle(i)));
    let r = e.style.color;
    if (r === e.value) return !1;
    e.value = r;
    let a = null == t ? (void 0 === (n = h.get(r)) && ((n = E(r)), h.size >= 32 && h.clear(), h.set(r, n)), n) : E(r);
    if (null != a && a !== e.argb) for (let n of ((e.argb = a), e.listeners)) n(a, t);
    return !0;
}
function p(e) {
    return "running" === e.playState || e.pending;
}
function m(e, t, n) {
    ((t.unchangedFrames = 0),
        null != n && t.animations.add(n),
        I(t),
        e.reading.add(t),
        (function e(t) {
            null == t.frameRequest &&
                (t.frameRequest = t.view.requestAnimationFrame((n) => {
                    for (let e of ((t.frameRequest = null), t.reading)) {
                        let i = I(e, n);
                        for (let t of e.animations) p(t) || e.animations.delete(t);
                        ((e.unchangedFrames = i || e.animations.size > 0 ? 0 : e.unchangedFrames + 1),
                            e.unchangedFrames >= 2 && t.reading.delete(e));
                    }
                    t.reading.size > 0 && e(t);
                }));
        })(e));
}
function T(e, t, n) {
    let i;
    for (let r of e.tracked.values())
        if (t !== r.canvas && t.contains(r.canvas)) {
            if (null == (i ??= n())) return;
            m(e, r, i);
        }
}
function g(e) {
    return e?.nodeType === Node.ELEMENT_NODE;
}
var S = n(781013);
let N = (e, t) => e.number(t),
    C = (e, t) => e.string(t),
    O = (e, t) => e.boolean(t),
    R = (e, t) => e.color(t),
    L = (e, t) => e.enum(t),
    y = (e, t) => e.trigger(t);
function D(e, t, n, i, a) {
    let s = r.useRef(a);
    r.useEffect(() => {
        s.current = a;
    }, [a]);
    let l = r.useRef(i);
    r.useEffect(() => {
        l.current = i;
    }, [i]);
    let o = null != a;
    r.useEffect(() => {
        let i = null != e && o ? n(e, t) : null;
        if (null == i) return;
        let r = () => s.current?.(l.current(i));
        return (r(), i.on(r), () => i.off(r));
    }, [e, t, n, o]);
}
function b(e) {
    return e.value;
}
function v(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : N(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        D(t, e, N, b, i));
}
function P(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : C(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        D(t, e, C, b, i));
}
function M(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : O(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        D(t, e, O, b, i));
}
function U(e, t, n, i, a) {
    let { theme: d, saturation: c } = (0, l.G9)(),
        { highContrastModeEnabled: u } = r.useContext(s.C),
        { rive: _, showColorChange: E } = (0, o.o)(),
        h = E ?? a,
        N = "currentColor" === n;
    (r.useEffect(() => {
        if (null == n || "currentColor" === n) return;
        let i = null == t ? null : R(t, e);
        if (null != i) {
            if ("number" == typeof n) i.value = n;
            else if ("resolve" in n) {
                let [e, t, r, a] = n.resolve({ theme: d, saturation: c, highContrastModeEnabled: u }).rgba();
                i.rgba(e, t, r, 255 * a);
            } else i.rgba(n.r, n.g, n.b, (n.a ?? 1) * 255);
            h?.();
        }
    }, [n, d, c, u, h, e, t]),
        r.useEffect(() => {
            if (!N || null == t || null == _) return;
            let n = (0, S.b)(_),
                i = R(t, e);
            if (null != n && null != i)
                return (function (e, t) {
                    let n,
                        i = e.ownerDocument.defaultView;
                    if (null == i) return () => {};
                    let r =
                            f.get(i) ??
                            ((n = {
                                view: i,
                                tracked: new Map(),
                                reading: new Set(),
                                frameRequest: null,
                                resizeObserver: null,
                                onTransitionRun: (e) => {
                                    if ("color" !== e.propertyName || !g(e.target)) return;
                                    let t = e.target,
                                        i = n.tracked.get(t);
                                    null != i
                                        ? m(n, i, null)
                                        : T(
                                              n,
                                              t,
                                              () =>
                                                  t
                                                      .getAnimations?.()
                                                      .find((e) => "color" === e.transitionProperty && p(e)) ?? null,
                                          );
                                },
                                onAnimationStart: (e) => {
                                    if (!g(e.target)) return;
                                    let t = e.target;
                                    T(
                                        n,
                                        t,
                                        () =>
                                            t.getAnimations?.().find(
                                                (t) =>
                                                    (function (e, t) {
                                                        if (e.animationName !== t) return !1;
                                                        let n = e.effect;
                                                        return n?.getKeyframes().some((e) => "color" in e) ?? !1;
                                                    })(t, e.animationName) && p(t),
                                            ) ?? null,
                                    );
                                },
                            }),
                            i.document.addEventListener("transitionrun", n.onTransitionRun, !0),
                            i.document.addEventListener("animationstart", n.onAnimationStart, !0),
                            null != i.ResizeObserver &&
                                (n.resizeObserver = new i.ResizeObserver((e) => {
                                    for (let { target: t, contentRect: i } of e) {
                                        let e = n.tracked.get(t);
                                        null != e && i.width > 0 && i.height > 0 && I(e);
                                    }
                                })),
                            f.set(i, n),
                            n),
                        a = r.tracked.get(e);
                    if (null == a) {
                        let n = e.parentElement ?? e;
                        ((a = {
                            canvas: e,
                            source: n,
                            style: i.getComputedStyle(n),
                            value: null,
                            argb: null,
                            listeners: new Set([t]),
                            unchangedFrames: 0,
                            animations: new Set(),
                        }),
                            r.tracked.set(e, a),
                            e.classList.add(A.D),
                            r.resizeObserver?.observe(e),
                            I(a));
                    } else (a.listeners.add(t), null != a.argb && t(a.argb, void 0));
                    let s = a,
                        l = !1;
                    return () => {
                        !l &&
                            ((l = !0), s.listeners.delete(t), !(s.listeners.size > 0)) &&
                            (r.tracked.delete(e),
                            r.reading.delete(s),
                            e.classList.remove(A.D),
                            r.resizeObserver?.unobserve(e),
                            0 === r.tracked.size &&
                                (r.view.document.removeEventListener("transitionrun", r.onTransitionRun, !0),
                                r.view.document.removeEventListener("animationstart", r.onAnimationStart, !0),
                                null != r.frameRequest && r.view.cancelAnimationFrame(r.frameRequest),
                                r.resizeObserver?.disconnect(),
                                f.delete(r.view)));
                    };
                })(n, (e, t) => {
                    (i.argb(e >>> 24, (e >>> 16) & 255, (e >>> 8) & 255, 255 & e), h?.(t));
                });
        }, [N, t, _, e, h]),
        D(t, e, R, b, i));
}
function w(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : L(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        D(t, e, L, b, i));
}
function G(e, t, n, i, a) {
    var s, l, o, d;
    let c,
        u,
        _ = r.useRef(null);
    (r.useEffect(() => {
        if (null == t) return;
        let i = _.current;
        (i?.instance === t && i.value === n) ||
            ((_.current = { instance: t, value: n }),
            ("boolean" == typeof n ? n : null != n && 0 !== n) && (y(t, e)?.trigger(), a?.()));
    }, [n, a, e, t]),
        (s = t),
        (l = e),
        (o = y),
        (d = r.useMemo(() => (null == i ? void 0 : () => i()), [i])),
        (c = r.useRef(d)),
        r.useEffect(() => {
            c.current = d;
        }, [d]),
        (u = null != d),
        r.useEffect(() => {
            let e = null != s && u ? o(s, l) : null;
            if (null == e) return;
            let t = () => c.current?.();
            return (e.on(t), () => e.off(t));
        }, [s, l, o, u]));
}
function x(e, t, n, i, s) {
    let l = r.useRef({}),
        o = r.useRef(i);
    r.useEffect(() => {
        o.current = i;
    }, [i]);
    let d = r.useRef(s);
    (r.useEffect(() => {
        d.current = s;
    }, [s]),
        r.useEffect(() => {
            if (null == t || null == n) return;
            let i = new AbortController(),
                { signal: r } = i;
            return (
                !(async function (t, n) {
                    let i = await (async function (e) {
                        let t = l.current[e];
                        if (null != t) return t;
                        try {
                            let t = await fetch(e, { signal: r });
                            if (!t.ok) return null;
                            let n = await (0, a.decodeImage)(new Uint8Array(await t.arrayBuffer()));
                            if (null == n) return null;
                            return ((l.current[e] = n), n);
                        } catch {
                            return null;
                        }
                    })(n);
                    if (r.aborted) return;
                    let s = "failed",
                        c = t.image(e);
                    (null != i && null != c && ((c.value = i), d.current?.(), (s = "loaded")), o.current?.(n, s));
                })(t, n),
                () => i.abort("New image value applied.")
            );
        }, [n, e, t]));
}
function k(e, t, n, i, a) {
    r.useEffect(() => {
        if (null == t || null == n || null == i) return;
        let r = t.artboard(e),
            s = n.getBindableArtboard(i);
        null != r && null != s && ((r.value = s), a?.());
    }, [n, i, a, e, t]);
}
function F(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (v(t, i, n, void 0, r), null);
}
function B(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (P(t, i, n, void 0, r), null);
}
function V(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (M(t, i, n, void 0, r), null);
}
function H(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (U(t, i, n, void 0, r), null);
}
function j(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (w(t, i, n, void 0, r), null);
}
function W(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (G(t, i, n, void 0, r), null);
}
function Y(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (x(t, i, n, void 0, r), null);
}
function K(e) {
    let { path: t, value: n } = e,
        { instance: i, rive: r, playIfNeeded: a } = (0, o.o)();
    return (k(t, i, r, n, a), null);
}
function $(e) {
    let { path: t, binding: n } = e;
    switch (n.type) {
        case "number":
            return (0, i.jsx)(F, { path: t, value: n.value });
        case "string":
            return (0, i.jsx)(B, { path: t, value: n.value });
        case "boolean":
            return (0, i.jsx)(V, { path: t, value: n.value });
        case "color":
            return (0, i.jsx)(H, { path: t, value: n.value });
        case "enum":
            return (0, i.jsx)(j, { path: t, value: n.value });
        case "trigger":
            return (0, i.jsx)(W, { path: t, value: n.value });
        case "image":
            return (0, i.jsx)(Y, { path: t, value: n.value });
        case "artboard":
            return (0, i.jsx)(K, { path: t, value: n.value });
        default:
            return null;
    }
}
function X() {
    let { instance: e, reducedMotionEnabled: t, playIfNeeded: n } = (0, o.o)();
    return (M("reducedMotion", e, t, void 0, n), null);
}
function z(e) {
    let { dynamicDataBinding: t } = e,
        n = Object.entries(t ?? {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t?.reducedMotion == null ? (0, i.jsx)(X, {}) : null,
            n.map((e) => {
                let [t, n] = e;
                return null == n ? null : (0, i.jsx)($, { path: t, binding: n }, `${t}:${n.type}`);
            }),
        ],
    });
}
