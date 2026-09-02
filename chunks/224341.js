n.d(e, { QI: () => l, bw: () => m, t: () => c, vd: () => i }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
let a = [
        { offset: 0, span: 0.66, ease: 1.6 },
        { offset: 0.08, span: 0.78, ease: 1.6 },
        { offset: 0.08, span: 0.9, ease: 7.5 },
        { offset: 0.08, span: 0.92, ease: 9 },
    ],
    o = [0.5, 0.5, 0.45, 0.9];
function r(t, e, n) {
    let a = 1 - t;
    return 3 * a * a * t * e + 3 * a * t * t * n + t * t * t;
}
let l = "123456",
    i = "789ABC",
    c = 440;
function s(t, e) {
    let n = t.charCodeAt(0);
    return n >= 65 && n <= 90
        ? String.fromCharCode(65 + ((n - 65 + e) % 26))
        : n >= 97 && n <= 122
          ? String.fromCharCode(97 + ((n - 97 + e) % 26))
          : n >= 48 && n <= 57
            ? String.fromCharCode(48 + ((n - 48 + e) % 10))
            : t;
}
function u(t, e) {
    let { offset: n, span: o, ease: r } = a[t],
        l = (e - n) / o;
    return l <= 0 ? 0 : l >= 1 ? 1 : l ** r;
}
function m(t, e) {
    let n = {
            from: e.from ?? e.to,
            to: e.to,
            classNames: e.classNames,
            duration: e.duration ?? 880,
            rng: e.rng ?? Math.random,
            reducedMotion: e.reducedMotion,
            respectReducedMotion: e.respectReducedMotion ?? !0,
            onStart: e.onStart,
            onComplete: e.onComplete,
        },
        c =
            "u" > typeof window && "function" == typeof window.matchMedia
                ? window.matchMedia("(prefers-reduced-motion: reduce)")
                : null,
        m = null,
        d = null,
        f = [],
        h = [],
        p = [],
        y = [],
        C = new Uint8Array(0),
        M = !1,
        g = -1,
        w = [],
        x = [],
        A = [],
        N = [],
        S = !1,
        F = 0,
        $ = 0,
        R = 0,
        v = 0,
        B = 0,
        b = 0,
        k = 0,
        E = 0,
        L = !1;
    function T() {
        (f = Array.from(n.from)),
            (h = Array.from(n.to)),
            (F = Math.max(f.length, h.length)),
            ((m = document.createElement("span")).className = n.classNames.textLayer),
            (S = !1),
            (p = Array(F)),
            (C = new Uint8Array(F));
        for (let t = 0; t < F; t++) {
            let e = document.createElement("span");
            (e.className = n.classNames.char), (e.textContent = f[t] ?? ""), m.appendChild(e), (p[t] = e);
        }
        ((d = document.createElement("span")).className = n.classNames.glyphLayer),
            (d.style.opacity = "0"),
            (g = 0),
            (t.textContent = ""),
            t.appendChild(m),
            t.appendChild(d),
            (function () {
                if (
                    ((w = Array(F).fill(0)),
                    (x = Array(F).fill(0)),
                    null == m || null == d || "function" != typeof getComputedStyle)
                ) {
                    $ = Math.max(1, F);
                    return;
                }
                let t = m.getBoundingClientRect().width;
                for (let t = 0; t < F; t++) w[t] = p[t].getBoundingClientRect().width;
                for (let t = 0; t < F; t++) p[t].textContent = h[t] ?? "";
                let e = m.getBoundingClientRect().width;
                for (let t = 0; t < F; t++) x[t] = p[t].getBoundingClientRect().width;
                for (let t = 0; t < F; t++) (p[t].textContent = f[t] ?? ""), (p[t].style.width = `${w[t]}px`);
                let n = parseFloat(getComputedStyle(d).fontSize),
                    a = Math.max(t, e);
                $ = 0 === a ? Math.max(1, F) : Math.max(1, Math.round(a / (0 !== n ? n : 16)));
            })(),
            (y = Array($)),
            (A = Array($).fill(-1)),
            (N = Array($));
        for (let t = 0; t < $; t++) {
            let e = document.createElement("span");
            (e.className = n.classNames.glyphCell),
                d.appendChild(e),
                (y[t] = e),
                (N[t] = i.charAt((n.rng() * i.length) | 0));
        }
        (k = 0),
            (E = 0),
            M ||
                "u" < typeof document ||
                null == document.fonts ||
                ("loaded" !== document.fonts.status &&
                    ((M = !0),
                    document.fonts.ready.then(() => {
                        if (((M = !1), null == m || 0 === F || L)) return;
                        let t = 4 === C[F - 1];
                        T(), t && O();
                    })));
    }
    function q(t, e) {
        let a = C[t];
        if (a === e) return;
        let o = p[t];
        (o.textContent = (function (t, e) {
            switch (e) {
                case 0:
                    return f[t] ?? "";
                case 1:
                case 2:
                    return s(f[t] ?? "", 6);
                case 3:
                    return s(h[t] ?? "", 6);
                default:
                    return h[t] ?? "";
            }
        })(t, e)),
            (o.className =
                2 === e
                    ? `${n.classNames.char} ${n.classNames.scrambled}`
                    : 1 === e || 3 === e
                      ? `${n.classNames.char} ${n.classNames.shifted}`
                      : n.classNames.char);
        let r = e >= 3;
        r !== a >= 3 && (o.style.width = `${(r ? x : w)[t] ?? 0}px`), (C[t] = e);
    }
    function U(t) {
        let e = (function (t) {
                if (t <= 0) return 0;
                if (t >= 1) return 1;
                let [e, n, a, l] = o,
                    i = 0,
                    c = 1;
                for (let n = 0; n < 20; n++) {
                    let n = (i + c) / 2;
                    r(n, e, a) < t ? (i = n) : (c = n);
                }
                return r((i + c) / 2, n, l);
            })(Math.min(1, Math.max(0, (t - v) / n.duration))),
            i = Math.max(0, Math.floor(u(3, e) * F)),
            c = Math.min(F, Math.ceil(u(0, e) * F));
        for (let t = Math.min(i, k); t < Math.max(c, E); t++)
            q(
                t,
                (function (t, e, n) {
                    let o = 0;
                    for (let r = 0; r < a.length; r++) u(r, e) * n > t + 0.5 && (o = r + 1);
                    return o;
                })(t, e, F),
            );
        (k = i),
            (E = c),
            (function (t) {
                let e = Math.round(
                    100 *
                        (function (t) {
                            let e = u(1, t),
                                n = e - u(2, t);
                            if (n <= 0) return 0;
                            let a = Math.min(1, n / (e < 1 ? 0.15 : 0.5));
                            return a * a * (3 - 2 * a);
                        })(t),
                );
                e !== g && null != d && ((d.style.opacity = String(e / 100)), (g = e));
                for (let e = 0; e < $; e++) {
                    let a = (function (t, e, n) {
                        let a = u(1, e) * n,
                            o = u(2, e) * n,
                            r = t + 0.5;
                        return r >= a || r < o
                            ? -1
                            : Math.max(0, Math.min(Math.floor((Math.min(r - o, a - r) / 4) * l.length), l.length));
                    })(e, t, $);
                    if (a !== A[e]) {
                        var n;
                        (y[e].textContent = a < 0 ? "" : ((n = e), a < l.length ? l.charAt(a) : N[n])), (A[e] = a);
                    }
                }
            })(e),
            e < 1 ? (R = requestAnimationFrame(U)) : (O(), (L = !1), n.onComplete?.());
    }
    function _() {
        null != d && (d.style.opacity = "0"), (g = 0);
        for (let t = 0; t < $; t++) -1 !== A[t] && ((y[t].textContent = ""), (A[t] = -1));
    }
    function z(t) {
        S !== t &&
            null != m &&
            ((m.className = t ? `${n.classNames.textLayer} ${n.classNames.hidden}` : n.classNames.textLayer), (S = t));
    }
    function I(t) {
        null != m && (m.style.transition = t ? "opacity 220ms linear" : "");
    }
    function O() {
        for (let t = 0; t < F; t++) q(t, 4);
        I(!1), z(!1), _(), (k = 0), (E = 0);
    }
    function Q() {
        0 !== b && clearTimeout(b), (b = 0);
    }
    function j() {
        0 !== R && cancelAnimationFrame(R), (R = 0), Q(), (B = 0), (L = !1), O();
    }
    return (
        T(),
        {
            play: function () {
                if ((0 !== R && cancelAnimationFrame(R), (R = 0), Q(), 0 === F)) return void n.onComplete?.();
                let t = n.reducedMotion ?? c?.matches === !0;
                if (n.respectReducedMotion && t) {
                    _(),
                        I(!0),
                        z(!0),
                        (L = !0),
                        n.onStart?.(),
                        (b = window.setTimeout(() => {
                            b = 0;
                            for (let t = 0; t < F; t++) q(t, 4);
                            (k = 0),
                                (E = 0),
                                z(!1),
                                (b = window.setTimeout(() => {
                                    (b = 0), I(!1), (L = !1), n.onComplete?.();
                                }, 220));
                        }, 220));
                    return;
                }
                I(!1), (L = !0), (B = 0), (v = performance.now()), n.onStart?.(), (R = requestAnimationFrame(U));
            },
            pause: function () {
                L && 0 === B && 0 !== R && (cancelAnimationFrame(R), (R = 0), (B = performance.now()));
            },
            resume: function () {
                L && 0 !== B && ((v += performance.now() - B), (B = 0), (R = requestAnimationFrame(U)));
            },
            stop: j,
            setTransition: function (t, e) {
                j(), (n.from = t), (n.to = e), T();
            },
            setOptions: function (t) {
                void 0 !== t.duration && (n.duration = t.duration),
                    void 0 !== t.reducedMotion && (n.reducedMotion = t.reducedMotion);
            },
            destroy: function () {
                0 !== R && cancelAnimationFrame(R),
                    (R = 0),
                    Q(),
                    (B = 0),
                    (L = !1),
                    (t.textContent = n.to),
                    (S = !1),
                    (m = null),
                    (d = null),
                    (p = []),
                    (y = []),
                    (f = []),
                    (h = []),
                    (C = new Uint8Array(0)),
                    (w = []),
                    (x = []),
                    (A = []),
                    (N = []),
                    (F = 0),
                    ($ = 0);
            },
            get running() {
                return L;
            },
        }
    );
}
