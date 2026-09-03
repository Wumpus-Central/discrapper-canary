n.d(t, { QI: () => c, T: () => s, _R: () => u, bw: () => p, t: () => f, vd: () => d }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
let r = [
        { offset: 0, span: 0.66, ease: 1.6 },
        { offset: 0.08, span: 0.78, ease: 1.6 },
        { offset: 0.08, span: 0.9, ease: 7.5 },
        { offset: 0.08, span: 0.92, ease: 9 },
    ],
    a = [0.5, 0.5, 0.45, 0.9];
function l(e, t, n) {
    let r = 1 - e;
    return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e;
}
function o(e) {
    if (e <= 0) return 0;
    if (e >= 1) return 1;
    let [t, n, r, o] = a,
        i = 0,
        u = 1;
    for (let n = 0; n < 20; n++) {
        let n = (i + u) / 2;
        l(n, t, r) < e ? (i = n) : (u = n);
    }
    return l((i + u) / 2, n, o);
}
function i(e, t) {
    if (t <= 0) return 0;
    let n = 0,
        r = 1;
    for (let a = 0; a < 24; a++) {
        let a = (n + r) / 2;
        h(e, o(a)) < t ? (n = a) : (r = a);
    }
    return (n + r) / 2;
}
function u(e) {
    return i(1, e);
}
function s(e) {
    return i(2, e);
}
let c = "123456",
    d = "789ABC",
    f = 440;
function m(e, t) {
    let n = e.charCodeAt(0);
    return n >= 65 && n <= 90
        ? String.fromCharCode(65 + ((n - 65 + t) % 26))
        : n >= 97 && n <= 122
          ? String.fromCharCode(97 + ((n - 97 + t) % 26))
          : n >= 48 && n <= 57
            ? String.fromCharCode(48 + ((n - 48 + t) % 10))
            : e;
}
function h(e, t) {
    let { offset: n, span: a, ease: l } = r[e],
        o = (t - n) / a;
    return o <= 0 ? 0 : o >= 1 ? 1 : o ** l;
}
function p(e, t) {
    let n = {
            from: t.from ?? t.to,
            to: t.to,
            classNames: t.classNames,
            duration: t.duration ?? 880,
            rng: t.rng ?? Math.random,
            reducedMotion: t.reducedMotion,
            respectReducedMotion: t.respectReducedMotion ?? !0,
            onStart: t.onStart,
            onComplete: t.onComplete,
            trailingWidth: t.trailingWidth ?? 0,
        },
        a =
            "u" > typeof window && "function" == typeof window.matchMedia
                ? window.matchMedia("(prefers-reduced-motion: reduce)")
                : null,
        l = null,
        i = null,
        u = [],
        s = [],
        f = [],
        p = [],
        y = new Uint8Array(0),
        g = !1,
        w = -1,
        C = [],
        M = [],
        x = [],
        N = [],
        A = !1,
        v = 0,
        R = 0,
        b = 0,
        E = 0,
        S = 0,
        F = 0,
        L = 0,
        T = 0,
        $ = !1;
    function j() {
        (u = Array.from(n.from)),
            (s = Array.from(n.to)),
            (v = Math.max(u.length, s.length)),
            ((l = document.createElement("span")).className = n.classNames.textLayer),
            (A = !1),
            (f = Array(v)),
            (y = new Uint8Array(v));
        for (let e = 0; e < v; e++) {
            let t = document.createElement("span");
            (t.className = n.classNames.char), (t.textContent = u[e] ?? ""), l.appendChild(t), (f[e] = t);
        }
        ((i = document.createElement("span")).className = n.classNames.glyphLayer),
            (i.style.opacity = "0"),
            (w = 0),
            (e.textContent = ""),
            e.appendChild(l),
            e.appendChild(i),
            (function () {
                if (
                    ((C = Array(v).fill(0)),
                    (M = Array(v).fill(0)),
                    null == l || null == i || "function" != typeof getComputedStyle)
                ) {
                    R = Math.max(1, v);
                    return;
                }
                let e = l.getBoundingClientRect().width;
                for (let e = 0; e < v; e++) C[e] = f[e].getBoundingClientRect().width;
                for (let e = 0; e < v; e++) f[e].textContent = s[e] ?? "";
                let t = l.getBoundingClientRect().width;
                for (let e = 0; e < v; e++) M[e] = f[e].getBoundingClientRect().width;
                for (let e = 0; e < v; e++) (f[e].textContent = u[e] ?? ""), (f[e].style.width = `${C[e]}px`);
                let r = parseFloat(getComputedStyle(i).fontSize),
                    a = Number.isFinite(r) && 0 !== r ? r : 16,
                    o = Math.max(e, t);
                R = 0 === o ? Math.max(1, v) : Math.max(1, Math.ceil((o + n.trailingWidth) / a));
            })(),
            (p = Array(R)),
            (x = Array(R).fill(-1)),
            (N = Array(R));
        for (let e = 0; e < R; e++) {
            let t = document.createElement("span");
            (t.className = n.classNames.glyphCell),
                i.appendChild(t),
                (p[e] = t),
                (N[e] = d.charAt((n.rng() * d.length) | 0));
        }
        (L = 0),
            (T = 0),
            g ||
                "u" < typeof document ||
                null == document.fonts ||
                ("loaded" !== document.fonts.status &&
                    ((g = !0),
                    document.fonts.ready.then(() => {
                        if (((g = !1), null == l || 0 === v || $)) return;
                        let e = 4 === y[v - 1];
                        j(), e && U();
                    })));
    }
    function q(e, t) {
        let r = y[e];
        if (r === t) return;
        let a = f[e];
        (a.textContent = (function (e, t) {
            switch (t) {
                case 0:
                    return u[e] ?? "";
                case 1:
                case 2:
                    return m(u[e] ?? "", 6);
                case 3:
                    return m(s[e] ?? "", 6);
                default:
                    return s[e] ?? "";
            }
        })(e, t)),
            (a.className =
                2 === t
                    ? `${n.classNames.char} ${n.classNames.scrambled}`
                    : 1 === t || 3 === t
                      ? `${n.classNames.char} ${n.classNames.shifted}`
                      : n.classNames.char);
        let l = t >= 3;
        l !== r >= 3 && (a.style.width = `${(l ? M : C)[e] ?? 0}px`), (y[e] = t);
    }
    function W(e) {
        let t = o(Math.min(1, Math.max(0, (e - E) / n.duration))),
            a = Math.max(0, Math.floor(h(3, t) * v)),
            l = Math.min(v, Math.ceil(h(0, t) * v)),
            u = Math.min(f.length, Math.max(l, T));
        for (let e = Math.min(a, L); e < u; e++)
            q(
                e,
                (function (e, t, n) {
                    let a = 0;
                    for (let l = 0; l < r.length; l++) h(l, t) * n > e + 0.5 && (a = l + 1);
                    return a;
                })(e, t, v),
            );
        (L = a),
            (T = l),
            (function (e) {
                let t = Math.round(
                    100 *
                        (function (e) {
                            let t = h(1, e),
                                n = t - h(2, e);
                            if (n <= 0) return 0;
                            let r = Math.min(1, n / (t < 1 ? 0.15 : 0.5));
                            return r * r * (3 - 2 * r);
                        })(e),
                );
                t !== w && null != i && ((i.style.opacity = String(t / 100)), (w = t));
                for (let t = 0; t < R; t++) {
                    let r = (function (e, t, n) {
                        let r = h(1, t) * n,
                            a = h(2, t) * n,
                            l = e + 0.5;
                        return l >= r || l < a
                            ? -1
                            : Math.max(0, Math.min(Math.floor((Math.min(l - a, r - l) / 4) * c.length), c.length));
                    })(t, e, R);
                    if (r !== x[t]) {
                        var n;
                        (p[t].textContent = r < 0 ? "" : ((n = t), r < c.length ? c.charAt(r) : N[n])), (x[t] = r);
                    }
                }
            })(t),
            t < 1 ? (b = requestAnimationFrame(W)) : (U(), ($ = !1), n.onComplete?.());
    }
    function k() {
        null != i && (i.style.opacity = "0"), (w = 0);
        for (let e = 0; e < R; e++) -1 !== x[e] && ((p[e].textContent = ""), (x[e] = -1));
    }
    function B(e) {
        A !== e &&
            null != l &&
            ((l.className = e ? `${n.classNames.textLayer} ${n.classNames.hidden}` : n.classNames.textLayer), (A = e));
    }
    function I(e) {
        null != l && (l.style.transition = e ? "opacity 220ms linear" : "");
    }
    function U() {
        for (let e = 0; e < v; e++) q(e, 4);
        I(!1), B(!1), k(), (L = 0), (T = 0);
    }
    function _() {
        0 !== F && clearTimeout(F), (F = 0);
    }
    function z() {
        0 !== b && cancelAnimationFrame(b), (b = 0), _(), (S = 0), ($ = !1), U();
    }
    return (
        j(),
        {
            play: function () {
                if ((0 !== b && cancelAnimationFrame(b), (b = 0), _(), 0 === v)) return void n.onComplete?.();
                let e = n.reducedMotion ?? a?.matches === !0;
                if (n.respectReducedMotion && e) {
                    k(),
                        I(!0),
                        B(!0),
                        ($ = !0),
                        n.onStart?.(),
                        (F = window.setTimeout(() => {
                            F = 0;
                            for (let e = 0; e < v; e++) q(e, 4);
                            (L = 0),
                                (T = 0),
                                B(!1),
                                (F = window.setTimeout(() => {
                                    (F = 0), I(!1), ($ = !1), n.onComplete?.();
                                }, 220));
                        }, 220));
                    return;
                }
                I(!1), ($ = !0), (S = 0), (E = performance.now()), n.onStart?.(), (b = requestAnimationFrame(W));
            },
            pause: function () {
                $ && 0 === S && 0 !== b && (cancelAnimationFrame(b), (b = 0), (S = performance.now()));
            },
            resume: function () {
                $ && 0 !== S && ((E += performance.now() - S), (S = 0), (b = requestAnimationFrame(W)));
            },
            stop: z,
            setTransition: function (e, t) {
                z(), (n.from = e), (n.to = t), j();
            },
            setOptions: function (e) {
                void 0 !== e.duration && (n.duration = e.duration),
                    void 0 !== e.reducedMotion && (n.reducedMotion = e.reducedMotion),
                    void 0 !== e.trailingWidth && (n.trailingWidth = e.trailingWidth);
            },
            destroy: function () {
                0 !== b && cancelAnimationFrame(b),
                    (b = 0),
                    _(),
                    (S = 0),
                    ($ = !1),
                    (e.textContent = n.to),
                    (A = !1),
                    (l = null),
                    (i = null),
                    (f = []),
                    (p = []),
                    (u = []),
                    (s = []),
                    (y = new Uint8Array(0)),
                    (C = []),
                    (M = []),
                    (x = []),
                    (N = []),
                    (v = 0),
                    (R = 0);
            },
            get running() {
                return $;
            },
        }
    );
}
