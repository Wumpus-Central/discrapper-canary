(n(321073), n(205816));
var i = n(621466),
    r = n(611599),
    a = n(350723);
let s = new r.Vy("NativeFrameView"),
    l = new Map(),
    o = null,
    d = [250, 1e3, 2e3],
    c = null,
    u = null,
    _ = 0,
    E = 0,
    A = !1,
    f = !1,
    h = 0,
    I = !1,
    p = null,
    m = null,
    g = null,
    T = new WeakSet(),
    S = new Set();
function N() {
    let e = !1;
    for (let t of S) {
        if (!t.isConnected) {
            S.delete(t);
            continue;
        }
        if ("function" != typeof t.getAnimations) return !0;
        let n = t.getAnimations();
        0 === n.length
            ? S.delete(t)
            : n.some((e) => {
                  let { playState: t } = e;
                  return "running" === t;
              }) && (e = !0);
    }
    return e;
}
let C = new Set(),
    O = new Set(),
    R = null,
    L = !1,
    y = !1,
    D = !1,
    b = new Set(),
    v = new WeakMap(),
    P = 1,
    M = null,
    U = new Set(),
    w = new Set(),
    G = "",
    x = !1,
    k = null,
    F = "",
    B = /^(?:theme-|custom-theme-background$|custom-client-theme$)/;
function V() {
    let e = [...document.documentElement.classList].filter((e) => B.test(e)).sort(),
        t = document.querySelector("style[data-client-themes]")?.textContent ?? "";
    return `${e.join(" ")}
${t}`;
}
function H() {
    let e = V();
    e !== F && ((F = e), (x = !0), eW(!0));
}
let j = null,
    W = "data-native-frame-view-hole",
    Y = "data-native-frame-view-covered",
    K = "data-native-frame-view-mask",
    $ = "data-native-frame-view-floating",
    X = "data-native-frame-view-pointer-scope",
    z = `[${X}]`.repeat(4),
    q = ["color", "image", "size", "position", "repeat", "x", "y", "width", "height"],
    Q = `
${q.map((e) => `@property --native-frame-view-hole-${e} { syntax: '*'; inherits: false; }`).join("\n")}
[${W}] {
  background: transparent !important;
}
[${W}]::before {
  ${q.map((e) => `--native-frame-view-hole-${e}: inherit;`).join("\n  ")}
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  border-radius: inherit;
  background-color: var(--native-frame-view-hole-color);
  background-image: var(--native-frame-view-hole-image);
  background-size: var(--native-frame-view-hole-size);
  background-position: var(--native-frame-view-hole-position);
  background-repeat: var(--native-frame-view-hole-repeat);
  mask-image: linear-gradient(#000, #000), linear-gradient(#000, #000);
  mask-size: 100% 100%, var(--native-frame-view-hole-width) var(--native-frame-view-hole-height);
  mask-position: 0 0, var(--native-frame-view-hole-x) var(--native-frame-view-hole-y);
  mask-repeat: no-repeat;
  mask-composite: subtract;
}
[${Y}] {
  background: transparent !important;
}
[${K}] {
  mask-image: linear-gradient(#000, #000), linear-gradient(#000, #000);
  mask-size: 100% 100%, var(--native-frame-view-hole-width) var(--native-frame-view-hole-height);
  mask-position: 0 0, var(--native-frame-view-hole-x) var(--native-frame-view-hole-y);
  mask-repeat: repeat, no-repeat;
  mask-origin: padding-box;
  mask-clip: no-clip;
  mask-composite: subtract;
}
/* Specific enough to win over the important rules that turn pointer events off, like Discord's animating layers. */
html body ${z}, html body ${z} * {
  pointer-events: auto !important;
}`,
    J = [
        ["--native-frame-view-hole-color", "backgroundColor"],
        ["--native-frame-view-hole-image", "backgroundImage"],
        ["--native-frame-view-hole-size", "backgroundSize"],
        ["--native-frame-view-hole-position", "backgroundPosition"],
        ["--native-frame-view-hole-repeat", "backgroundRepeat"],
    ],
    Z = new Map(),
    ee = new Map(),
    et = new Set(),
    en = null,
    ei = [
        "(prefers-color-scheme: dark)",
        "(prefers-reduced-motion: reduce)",
        "(prefers-contrast: more)",
        "(forced-colors: active)",
        "(resolution: 2dppx)",
    ];
function er(e) {
    return "rgba(0, 0, 0, 0)" !== e.backgroundColor || "none" !== e.backgroundImage;
}
function ea(e, t) {
    for (let [t] of (e.removeAttribute(W), J)) e.style.removeProperty(t);
    for (let t of ["x", "y", "width", "height"]) e.style.removeProperty(`--native-frame-view-hole-${t}`);
    (t && (e.style.position = ""), Z.delete(e), (f = !0));
}
let es = 2 / 64;
function el(e) {
    return Math.round(e * window.devicePixelRatio) / window.devicePixelRatio;
}
function eo(e) {
    let t = parseFloat(e);
    return Number.isFinite(t) ? t : 0;
}
function ed(e) {
    let { left: t, top: n, right: i, bottom: r } = e.getBoundingClientRect(),
        { borderLeftWidth: a, borderTopWidth: s } = getComputedStyle(e);
    return { left: t, top: n, right: i, bottom: r, borderLeft: eo(a), borderTop: eo(s) };
}
function ec(e, t, n) {
    let i = n.left + n.borderLeft,
        r = n.top + n.borderTop,
        a = el(t.x),
        s = el(t.y),
        l = el(t.x + t.width) - a + es,
        o = el(t.y + t.height) - s + es;
    (e.style.setProperty("--native-frame-view-hole-x", `${a - i}px`),
        e.style.setProperty("--native-frame-view-hole-y", `${s - r}px`),
        e.style.setProperty("--native-frame-view-hole-width", `${l}px`),
        e.style.setProperty("--native-frame-view-hole-height", `${o}px`));
}
function eu(e) {
    let { x: t, y: n, width: i, height: r } = e,
        a = t + i - 1,
        s = n + r - 1;
    return [
        [t + i / 2, n + r / 2],
        [t + 1, n + 1],
        [a, n + 1],
        [t + 1, s],
        [a, s],
    ];
}
function e_(e) {
    let t = v.get(e);
    return (null == t && ((t = P++), v.set(e, t)), t);
}
function eE() {
    if (null != g) return g;
    for (let e of l.values()) return e.iframe;
    return null;
}
function eA(e, t) {
    if (null == m) return !1;
    let { x: n, y: i, width: r, height: a } = m,
        s = e.getBoundingClientRect();
    return (
        !(s.width <= 0) &&
        !(s.height <= 0) &&
        s.right > n - t &&
        s.left < n + r + t &&
        s.bottom > i - t &&
        s.top < i + a + t
    );
}
let ef = new Set(["IMG", "VIDEO", "CANVAS", "IFRAME", "OBJECT", "EMBED", "INPUT", "TEXTAREA", "SELECT"]);
function eh(e) {
    return null != e && "" !== e && "none" !== e;
}
function eI(e) {
    let t = getComputedStyle(e);
    if (er(t) || eh(t.boxShadow) || eh(t.backdropFilter) || (eh(t.outlineStyle) && parseFloat(t.outlineWidth) > 0))
        return !0;
    for (let e of ["top", "right", "bottom", "left"])
        if (parseFloat(t.getPropertyValue(`border-${e}-width`)) > 0 && eh(t.getPropertyValue(`border-${e}-style`)))
            return !0;
    if (ef.has(e.tagName) || e instanceof SVGElement) return !0;
    for (let t of ["::before", "::after"]) {
        let { content: n } = getComputedStyle(e, t);
        if (eh(n) && "normal" !== n) return !0;
    }
    return [...e.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && "" !== (e.textContent ?? "").trim());
}
function ep(e) {
    if (!e.isConnected) return !1;
    let t = [e];
    for (let n = 0; n < t.length; n++) {
        if (n >= 200)
            return (function (e) {
                let t = eE();
                if (null == m || null == t) return !0;
                let n = m;
                return eN(() => {
                    for (let [i, r] of eu(n))
                        for (let n of document.elementsFromPoint(i, r)) {
                            if (n.contains(t) || Z.has(n) || ee.has(n)) break;
                            if (e.contains(n) && (n.checkVisibility?.({ opacityProperty: !0 }) ?? !0) && eI(n))
                                return !0;
                        }
                    return !1;
                }, e);
            })(e);
        let i = t[n];
        if (i.checkVisibility?.({ opacityProperty: !0 }) === !1) continue;
        let r = eA(i, 0);
        if ((i.checkVisibility?.({ visibilityProperty: !0 }) ?? !0) && r && eI(i)) return !0;
        (!r &&
            (function (e) {
                let t = getComputedStyle(e);
                if (/\b(paint|strict|content)\b/.test(t.contain ?? "")) return !0;
                function n(e) {
                    return null != e && "" !== e && "visible" !== e;
                }
                return (
                    n(t.overflowX) &&
                    n(t.overflowY) &&
                    "static" !== t.position &&
                    "" !== t.position &&
                    (eh(t.transform) || eh(t.filter))
                );
            })(i)) ||
            t.push(...i.children);
    }
    return !1;
}
function em(e) {
    if (null == m || !(0, i.vq)(e, Element)) return !1;
    let { x: t, y: n, width: r, height: a } = m,
        s = e.getBoundingClientRect();
    return s.right > t && s.left < t + r && s.bottom > n && s.top < n + a;
}
function eg(e) {
    if (null == e || e === document || e === window) return !0;
    if (!(0, i.vq)(e, Element)) return !1;
    for (let t of l.values()) if (e.contains(t.iframe)) return !0;
    return !1;
}
function eT(e) {
    let t = eS(e);
    if (null == t) return !1;
    for (let n of [...Z.keys(), ...ee.keys(), ...et]) if (t.contains(n) && !n.contains(e)) return !0;
    return !1;
}
function eS(e) {
    let t = null;
    for (let n = e.parentElement; null != n && n !== document.body; n = n.parentElement)
        "none" === getComputedStyle(n).pointerEvents && (t = n);
    return t;
}
function eN(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    let r = [...C, ...n].filter((e) => e?.isConnected === !0);
    for (let e of r) e.setAttribute(X, "");
    try {
        return e();
    } finally {
        for (let e of r) e.removeAttribute(X);
    }
}
function eC(e) {
    let { iframe: t, clip: n } = e;
    return eN(() => {
        let e = [];
        for (let [i, r] of eu(n)) {
            let n = document.elementsFromPoint(i, r),
                a = n.findIndex((e) => e.contains(t));
            if (a < 0) {
                e.push("-");
                continue;
            }
            for (let t of n.slice(a)) {
                let n = e_(t);
                if (Z.has(t) || ee.has(t)) {
                    e.push(`${n}p`);
                    continue;
                }
                let { backgroundColor: i, backgroundImage: r } = getComputedStyle(t);
                e.push(`${n}:${i}:${"none" === r ? "" : r.length}`);
            }
            e.push("/");
        }
        for (let t of O) e.push(`pin${e_(t)}`);
        return e.join(" ");
    }, eS(t));
}
function eO() {
    let e = g;
    if (null != e && eT(e)) return ((D = !0), !0);
    if (D || null == R || null == e) return !1;
    for (let t of l.values()) if (t.iframe !== e && e5(t.iframe)?.clip != null) return !1;
    let t = e5(e);
    return t?.clip != null && JSON.stringify(t) === R.layout && eC({ iframe: e, clip: t.clip }) === R.value;
}
function eR(e) {
    if (((I = !1), (m = e[0]?.clip ?? null), (g = 1 === e.length ? e[0].iframe : null), (h = performance.now()), x)) {
        for (let e of ((x = !1), ee.keys())) e.removeAttribute(Y);
        for (let [e, t] of (ee.clear(), [...Z])) ea(e, t);
    }
    null == en &&
        e.length > 0 &&
        (((en = document.createElement("style")).textContent = Q), document.head.appendChild(en));
    let t = new Map(),
        n = new Set(),
        r = new Set(),
        a = new Set(),
        s = new Map();
    function l(e, n) {
        !(!(0, i.vq)(e, HTMLElement) || t.has(e)) && (Z.has(e) || ee.has(e) || er(getComputedStyle(e))) && t.set(e, n);
    }
    for (let { iframe: t, clip: i } of e) {
        let e = t.closest(`[${$}]`),
            o = new Set();
        for (let t = e; null != t; t = t.parentElement) o.add(t);
        for (let e = t.parentElement; null != e; e = e.parentElement) l(e, i);
        for (let d of (eN(() => {
            for (let [d, c] of eu(i)) {
                let u = document.elementsFromPoint(d, c),
                    _ = u.findIndex((e) => e.contains(t));
                if (!(_ < 0)) {
                    for (let e of u.slice(0, _)) r.add(e);
                    if (e?.contains(u[_]) === !0) for (let e of u.slice(0, _)) a.add(e);
                    for (let t of u.slice(_ + 1))
                        (n.add(t),
                            l(t, i),
                            null == e ||
                                o.has(t) ||
                                s.set(
                                    (function (e, t) {
                                        let n = e;
                                        for (; null != n.parentElement && !t.has(n.parentElement);) n = n.parentElement;
                                        return n;
                                    })(t, o),
                                    i,
                                ));
                }
            }
        }, eS(t)),
        [...O]))
            !d.isConnected || r.has(d) || "none" !== getComputedStyle(d).pointerEvents
                ? O.delete(d)
                : em(d) && (n.add(d), l(d, i));
    }
    let o = new Map(),
        d = [...a];
    for (let [t, n] of s)
        !(0, i.vq)(t, HTMLElement) ||
            d.some((e) => t.contains(e)) ||
            e.some((e) => {
                let { iframe: n } = e;
                return t.contains(n);
            }) ||
            o.set(t, n);
    let c = [...o.keys()];
    for (let e of [...t.keys()]) c.some((t) => t.contains(e)) && t.delete(e);
    for (let [e, n] of ((function (e) {
        let t = [...e.keys()],
            n = new Map(t.map((e) => [e, e.getBoundingClientRect()])),
            i = new Map(
                t.map((e) => [
                    e,
                    (function (e) {
                        if (Z.has(e))
                            return [
                                e.style.getPropertyValue("--native-frame-view-hole-color"),
                                e.style.getPropertyValue("--native-frame-view-hole-image"),
                            ];
                        let t = ee.get(e);
                        if (null != t) return t;
                        let { backgroundColor: n, backgroundImage: i } = getComputedStyle(e);
                        return [n, i];
                    })(e),
                ]),
            ),
            r = new Set(
                t.filter((e) => {
                    let [t, n] = i.get(e);
                    return (
                        "none" === n &&
                        /^(rgb\(|oklab\((?!.*\/)|#)/.test(t) &&
                        "0px" === getComputedStyle(e).borderRadius
                    );
                }),
            ),
            a = new Map();
        for (let e of t) {
            let s = n.get(e);
            t.some((t) => {
                var i;
                return (
                    t !== e &&
                    r.has(t) &&
                    e.contains(t) &&
                    ((i = n.get(t)),
                    1 > Math.abs(i.left - s.left) &&
                        1 > Math.abs(i.top - s.top) &&
                        1 > Math.abs(i.width - s.width) &&
                        1 > Math.abs(i.height - s.height))
                );
            }) && a.set(e, i.get(e));
        }
        for (let e of ee.keys()) a.has(e) || e.removeAttribute(Y);
        for (let t of a.keys()) (e.delete(t), ee.has(t) || t.setAttribute(Y, ""));
        for (let [e, t] of (ee.clear(), a)) ee.set(e, t);
    })(t),
    [...Z]))
        t.has(e) || ea(e, n);
    for (let e of [...et])
        o.has(e) ||
            (function (e) {
                for (let t of (e.removeAttribute(K), ["x", "y", "width", "height"]))
                    e.style.removeProperty(`--native-frame-view-hole-${t}`);
                (et.delete(e), (f = !0));
            })(e);
    for (let e of t.keys())
        !(function (e) {
            if (Z.has(e)) return;
            let t = getComputedStyle(e);
            for (let [n, i] of J) e.style.setProperty(n, t[i]);
            let n = "static" === t.position;
            (n && (e.style.position = "relative"), e.setAttribute(W, ""), Z.set(e, n), (f = !0));
        })(e);
    for (let e of o.keys()) (e.setAttribute(K, ""), et.has(e) || (f = !0), et.add(e));
    let u = new Map([...t, ...o]),
        _ = new Map([...u.keys()].map((e) => [e, ed(e)]));
    for (let [e, t] of u) ec(e, t, _.get(e));
    let E = { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight };
    for (let e of _.values())
        E = {
            left: Math.max(E.left, e.left),
            top: Math.max(E.top, e.top),
            right: Math.min(E.right, e.right),
            bottom: Math.min(E.bottom, e.bottom),
        };
    p = u.size > 0 && 1 === e.length ? E : null;
    let A = new WeakSet([...t.keys(), ...n]);
    for (let { iframe: t } of e) for (let e = t; null != e; e = e.parentElement) A.add(e);
    ((T = A),
        (function (e, t) {
            if (null == M) return;
            let n = "";
            for (let e of t) n += `${e_(e)},`;
            for (let { iframe: t } of e) n += `|${e_(t)}`;
            if (n === G) return;
            G = n;
            let i = new Set();
            function r(e) {
                for (let t = e; null != t; t = t.parentElement)
                    i.has(t) || "normal" === getComputedStyle(t).containerType || i.add(t);
            }
            for (let { iframe: t } of e) r(t);
            for (let e of t) r(e);
            for (let e of w) i.has(e) || M.containers?.unobserve(e);
            for (let e of i) w.has(e) || M.containers?.observe(e);
            for (let e of (w.clear(), i)) w.add(e);
        })(e, n),
        M?.mutations.takeRecords(),
        (R = null),
        (L = !0));
}
function eL(e) {
    for (let [t, n] of ((m = e), [...Z.keys(), ...et].map((e) => [e, ed(e)]))) ec(t, e, n);
    (M?.mutations.takeRecords(), (I = !0));
}
let ey = null,
    eD = null,
    eb = null,
    ev = null,
    eP = 0,
    eM = !1,
    eU = !1,
    ew = new Map(),
    eG = new Set();
function ex(e, t) {
    let { x: n, y: i, width: r, height: a } = t;
    for (let t = 0; t < 5; t++)
        for (let s = 0; s < 5; s++) {
            let l = document.elementFromPoint(n + 2 + ((r - 4) * s) / 4, i + 2 + ((a - 4) * t) / 4);
            if (
                null == l ||
                l === document.body ||
                l === document.documentElement ||
                (!e.contains(l) && !l.contains(e) && !Z.has(l) && !ee.has(l) && ![...et].some((e) => e.contains(l)))
            )
                return !1;
        }
    return !0;
}
function ek(e, t) {
    if (t) {
        if (eb === e) return;
        ((eb = e), (eD = e), eB());
        return;
    }
    eb === e && ((eb = null), (eD = null), ev === e && (ev = null), ey === e && eV(!1));
}
function eF(e) {
    ey === e && (eb === e && ((eb = null), (eD = null), ev === e && (ev = null)), eV(!1, !1));
}
function eB() {
    let e = eD,
        t = e3();
    if (null == e || ev === e || null != ey || null != c || t?.setOnTop == null || (null != g && eT(g))) return;
    let n = l.get(e),
        i = n?.inputTarget,
        r = n?.input;
    if (null == n || n.iframe !== g || null == i || null == r || n.inputSuspended || !r.idle() || null == m || N())
        return;
    for (let e of C) e.isConnected || C.delete(e);
    for (let e of eG) ep(e) || eG.delete(e);
    if (eG.size > 0 || [...C].some((e) => !e.contains(n.iframe) && ep(e)) || [...O].some(ep) || !ex(i, m)) return;
    ((ey = e), null != u && (clearTimeout(u), (u = null)));
    let a = ++eP;
    function o(t) {
        ey === e && eP === a && ((ey = null), t && ((ev = e), (eD = null)), eK(), eY());
    }
    r.drained()
        .then(() => (ey === e && eP === a && r.idle() ? t.setOnTop(e, !0) : null))
        .then(
            (e) => {
                !0 !== e && o(!1 === e);
            },
            (t) => {
                (s.warn(`frame view ${e} could not go on top`, t), o(!0));
            },
        );
}
function eV() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = ey;
    if (null != n) {
        if (
            ((ey = null),
            eP++,
            ew.clear(),
            t &&
                e3()
                    ?.setOnTop?.(n, !1)
                    .catch((e) => s.warn(`frame view ${n} could not go back under`, e)),
            e)
        )
            return void eW(!0);
        (eK(), eY());
    }
}
function eH(e) {
    null == ey ||
        (e && (eU = !0),
        eM ||
            ((eM = !0),
            requestAnimationFrame(() => {
                eM = !1;
                let e = null != ey ? l.get(ey) : null,
                    t = new Map(ew);
                ew.clear();
                let n = eU;
                if (((eU = !1), null != e)) {
                    if (JSON.stringify(e5(e.iframe)) !== e.lastLayout) return void eV();
                    for (let n of t.keys())
                        if (
                            !(!n.isConnected || n === e.iframe || n.contains(e.iframe) || T.has(n)) &&
                            eA(n, t.get(n) ?? 0)
                        ) {
                            (eG.add(n), eV());
                            return;
                        }
                    n && null != e.inputTarget && null != m && !ex(e.inputTarget, m) && eV();
                }
            })));
}
function ej() {
    eW(
        null == ey &&
            (function () {
                let e = e3();
                if (null == e) return !1;
                let t = !1;
                for (let [n, i] of l) {
                    let r = e5(i.iframe),
                        a = JSON.stringify(r);
                    a !== i.lastLayout &&
                        ((i.lastLayout = a),
                        (t = !0),
                        e.setLayout(n, r).catch((e) => s.warn(`frame view ${n} layout failed`, e)));
                }
                return t;
            })(),
    );
}
function eW(e) {
    if (0 !== l.size) {
        if (null != ey) return void eV();
        (e && (A = !0),
            (_ = 0),
            null != u && (clearTimeout(u), (u = null)),
            (E = 0),
            (c ??= requestAnimationFrame(eX)));
    }
}
function eY() {
    null != ey
        ? eH(!0)
        : 0 === l.size ||
          null == m ||
          y ||
          ((y = !0),
          requestAnimationFrame(() => {
              ((y = !1), eO() || eW(!0));
          }));
}
function eK() {
    null == ey && null == u && l.size > 0 && (u = setTimeout(e$, d[_]));
}
function e$() {
    if (((u = null), null == c && 0 !== l.size)) {
        if (eO()) {
            ((_ = Math.min(_ + 1, d.length - 1)), eK(), eB());
            return;
        }
        ((A = !0),
            (E = 9),
            (_ = eX() ? 0 : Math.min(_ + 1, d.length - 1)),
            null != u && (clearTimeout(u), (u = null), eK()));
    }
}
function eX() {
    c = null;
    let e = e3();
    if (null == e) return !1;
    let t = [],
        n = !1;
    for (let [i, r] of l) {
        let a = e5(r.iframe);
        a?.clip != null && t.push({ iframe: r.iframe, clip: a.clip });
        let l = JSON.stringify(a);
        l !== r.lastLayout &&
            ((r.lastLayout = l), (n = !0), e.setLayout(i, a).catch((e) => s.warn(`frame view ${i} layout failed`, e)));
    }
    let i = A;
    ((A = !1), (f = !1));
    let r = n || x || i,
        a = 1 === t.length && eT(t[0].iframe);
    if (a) (r && eL(t[0].clip), (r = !1), (D = !0));
    else if (D) {
        for (let e of ((D = !1), (r = !0), b)) {
            if (!e.isConnected || !em(e)) continue;
            let t = getComputedStyle(e);
            "none" === t.pointerEvents && er(t) && O.add(e);
        }
        b.clear();
    } else if (!x && !i) {
        let e = performance.now() - h >= 250;
        if (n && !e && 1 === t.length && Z.size + et.size > 0 && null != p) {
            let { x: e, y: n, width: i, height: a } = t[0].clip;
            e >= p.left - 0.5 &&
                n >= p.top - 0.5 &&
                e + i <= p.right + 0.5 &&
                n + a <= p.bottom + 0.5 &&
                (eL(t[0].clip), (r = !1));
        } else e && (n || E < 10) && (r = !0);
    }
    if ((r && eR(t), 0 === l.size)) return n;
    let o = n || f;
    if ((E = o ? 0 : E + 1) < 10 || N()) c = requestAnimationFrame(eX);
    else {
        if (a) return (eK(), o);
        (I && eR(t),
            L &&
                ((L = !1),
                (function (e) {
                    if (((R = null), 1 !== e.length)) return;
                    let { iframe: t } = e[0],
                        n = e5(t);
                    n?.clip != null && (R = { layout: JSON.stringify(n), value: eC({ iframe: t, clip: n.clip }) });
                })(t)),
            eK(),
            eB());
    }
    return o;
}
function ez(e) {
    if (null != ey) {
        let t = 200,
            n = !1;
        for (let r of e)
            if ("childList" === r.type) {
                for (let e of r.addedNodes)
                    if ((0, i.vq)(e, Element) && !(t <= 0)) {
                        for (let n of [e, ...e.querySelectorAll("*")].slice(0, t)) (t--, ew.set(n, 0));
                        ("STYLE" === e.nodeName || "LINK" === e.nodeName) && (n = !0);
                    }
            } else "attributes" === r.type && (0, i.vq)(r.target, Element) ? ew.set(r.target, 0) : (n = !0);
        eH(n);
        return;
    }
    if (
        !(
            0 === l.size ||
            (function (e) {
                let t = eE(),
                    n = !1,
                    r = null,
                    a = 200;
                if (D) {
                    for (let t of e)
                        for (let e of t.addedNodes)
                            if ((0, i.vq)(e, Element) && !(a <= 0))
                                for (let t of [e, ...e.querySelectorAll("*")].slice(0, a)) (a--, b.add(t));
                    return !1;
                }
                for (let s of e) {
                    if (a <= 0) break;
                    let { target: e } = s;
                    if ("attributes" === s.type && (0, i.vq)(e, Element)) {
                        if ("class" !== s.attributeName && "style" !== s.attributeName) continue;
                        let i = C.has(e);
                        if (!i && !(null != t && e.contains(t)) && !em(e)) continue;
                        let r = "none" === getComputedStyle(e).pointerEvents;
                        r && !i ? (C.add(e), (n = !0)) : !r && i && (C.delete(e), (n = !0));
                    } else if ("childList" === s.type) {
                        for (let e of s.addedNodes)
                            if ((0, i.vq)(e, Element))
                                for (let i of [e, ...e.querySelectorAll("*")].slice(0, a)) {
                                    if ((a--, !em(i))) continue;
                                    let e = getComputedStyle(i);
                                    if ("none" === e.pointerEvents && er(e)) {
                                        if ((r ??= null != t && eT(t))) {
                                            b.add(i);
                                            continue;
                                        }
                                        let e = i.parentElement;
                                        if (null != e && "none" === getComputedStyle(e).pointerEvents) continue;
                                        (O.add(i), (n = !0));
                                    }
                                }
                    }
                }
                return (n && eW(!0), n);
            })(e)
        )
    ) {
        for (let t of e) {
            let { target: e } = t,
                n = [...t.addedNodes, ...t.removedNodes];
            if (
                "STYLE" === e.nodeName ||
                e.parentNode?.nodeName === "STYLE" ||
                n.some((e) => "STYLE" === e.nodeName || "LINK" === e.nodeName)
            )
                return void eW(!0);
            if ("childList" === t.type) {
                if (n.some((e) => (0, i.vq)(e, Element) && (null != m || eg(e)))) return void eW(!0);
            } else if ((0, i.vq)(e, Element) && (T.has(e) || eg(e))) return void eW(!0);
        }
        e.some((e) => "attributes" === e.type) && eY();
    }
}
function eq() {
    if (null == M) return;
    let e = new Set();
    for (let t of l.values()) for (let n = t.iframe; null != n; n = n.parentElement) e.add(n);
    for (let t of U) e.has(t) || M.ancestors?.unobserve(t);
    for (let t of e) U.has(t) || M.ancestors?.observe(t);
    for (let t of (U.clear(), e)) U.add(t);
}
let eQ = ["left", "middle", "right"],
    eJ = {
        pointer: "default",
        hand: "pointer",
        crosshair: "crosshair",
        text: "text",
        "vertical-text": "vertical-text",
        wait: "wait",
        progress: "progress",
        help: "help",
        "context-menu": "context-menu",
        cell: "cell",
        move: "move",
        alias: "alias",
        copy: "copy",
        nodrop: "no-drop",
        "not-allowed": "not-allowed",
        none: "none",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
        grab: "grab",
        grabbing: "grabbing",
        "e-resize": "e-resize",
        "n-resize": "n-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "s-resize": "s-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "w-resize": "w-resize",
        "ns-resize": "ns-resize",
        "ew-resize": "ew-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "ns-no-resize": "ns-resize",
        "ew-no-resize": "ew-resize",
        "nesw-no-resize": "nesw-resize",
        "nwse-no-resize": "nwse-resize",
        "drag-drop-none": "no-drop",
        "drag-drop-move": "move",
        "drag-drop-copy": "copy",
        "drag-drop-link": "alias",
        custom: "default",
        null: "default",
    },
    eZ = "data-native-frame-view-cursor",
    e0 = null,
    e1 = new Map(),
    e2 = 1;
function e3() {
    return window.DiscordNative?.frameView ?? null;
}
function e6(e, t) {
    let n = Math.max(e.x, t.left),
        i = Math.max(e.y, t.top);
    return {
        x: n,
        y: i,
        width: Math.max(0, Math.min(e.x + e.width, t.right) - n),
        height: Math.max(0, Math.min(e.y + e.height, t.bottom) - i),
    };
}
function e5(e) {
    if (!e.isConnected) return null;
    let t = e.getBoundingClientRect();
    if (t.width <= 0 || t.height <= 0) return null;
    let n = { x: t.left, y: t.top, width: t.width, height: t.height },
        { devicePixelRatio: i } = window;
    if (!e.checkVisibility({ opacityProperty: !0, visibilityProperty: !0 }))
        return { frame: n, clip: null, devicePixelRatio: i };
    let r = e6(n, { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight });
    for (let t = e.parentElement; null != t && r.width > 0; t = t.parentElement) {
        let { overflowX: e, overflowY: n } = getComputedStyle(t);
        ("visible" !== e || "visible" !== n) && (r = e6(r, t.getBoundingClientRect()));
    }
    return {
        frame: n,
        clip:
            (r = (function (e, t) {
                let { x: n, y: i, width: r, height: a } = e,
                    s = Math.ceil(n * t - e7) / t,
                    l = Math.ceil(i * t - e7) / t;
                return {
                    x: s,
                    y: l,
                    width: Math.max(0, Math.floor((n + r) * t + e7) / t - s),
                    height: Math.max(0, Math.floor((i + a) * t + e7) / t - l),
                };
            })(r, i)).width > 0 && r.height > 0
                ? r
                : null,
        devicePixelRatio: i,
    };
}
let e7 = 1 / 64;
function e4(e) {
    for (let [t, n] of l) if (n.iframe === e) return t;
    return null;
}
n.d(
    t,
    {},
    {
        H3: function (e) {
            for (let t of l.values())
                if (t.source === e) {
                    if (null == t.shell || t.shell.closed) return null;
                    return {
                        shell: t.shell,
                        guest: (function (e) {
                            try {
                                return e.document.querySelector("iframe")?.contentWindow ?? null;
                            } catch {
                                return null;
                            }
                        })(t.shell),
                    };
                }
            return null;
        },
        H9: function () {
            return null != e3();
        },
        KQ: $,
        oe: function (e, t) {
            let n = e3(),
                i = e4(e);
            return null == n || null == i ? null : n.capture(i, t);
        },
        r8: function (e) {
            let t = e4(e);
            return null != t && j === t;
        },
        t8: function (e) {
            return null != e4(e);
        },
        xW: function (e, t, n, r, d) {
            let c = e3();
            if (null == c || e.ownerDocument !== document) return null;
            (null == k &&
                ((F = V()),
                (k = new MutationObserver(H)).observe(document.documentElement, {
                    attributes: !0,
                    attributeFilter: ["class"],
                }),
                k.observe(document.head, { childList: !0, subtree: !0, characterData: !0 })),
                o !== c &&
                    ((o = c),
                    c.onMessage((e, t, n) => {
                        let i = l.get(e);
                        null != i &&
                            window.dispatchEvent(new MessageEvent("message", { data: t, origin: n, source: i.source }));
                    }),
                    c.onLoad((e) => l.get(e)?.onLoad()),
                    c.onCursor((e, t) => {
                        let n = l.get(e)?.inputTarget;
                        null != n &&
                            (function (e, t, n) {
                                let i = e1.get(e);
                                if (null == i) {
                                    null == e0 &&
                                        ((e0 = document.createElement("style")), document.head.appendChild(e0));
                                    let n = e0.sheet;
                                    if (null == n) return;
                                    let r = e2++;
                                    t.setAttribute(eZ, String(r));
                                    let a = n.insertRule(`[${eZ}="${r}"] {}`, n.cssRules.length);
                                    ((i = n.cssRules[a]), e1.set(e, i));
                                }
                                i.style.cursor = n;
                            })(e, n, Object.hasOwn(eJ, t) ? eJ[t] : t.includes("-panning") ? "all-scroll" : "default");
                    }),
                    c.onUnder?.(eF),
                    c.onExit((e, t) => {
                        var n, i;
                        let r,
                            a,
                            s,
                            o = l.get(e);
                        null != o &&
                            ((n = o.iframe),
                            (i = t),
                            null !=
                            (s =
                                (a = (r = [
                                    ...document.querySelectorAll(
                                        'a[href], area[href], button, input, select, textarea, iframe, summary, [tabindex], [contenteditable="true"]',
                                    ),
                                ].filter(
                                    (e) =>
                                        e === n ||
                                        (e.tabIndex >= 0 && !e.matches(":disabled") && e.getClientRects().length > 0),
                                )).indexOf(n)) < 0
                                    ? null
                                    : r[i ? a - 1 : a + 1])
                                ? s.focus()
                                : n.blur());
                    }),
                    c.onFocus((e, t) => {
                        if (l.has(e)) {
                            if (t) {
                                ((j = e), (0, a.XC)(window, !0));
                                return;
                            }
                            (j === e && (j = null), document.hasFocus() || (0, a.XC)(window, !1));
                        }
                    })));
            let _ = (function (e, t) {
                let { port1: n } = new MessageChannel();
                return (
                    Object.defineProperty(n, "postMessage", {
                        value: (n, i) => {
                            e.postMessage(t, n, "string" == typeof i ? i : "/").catch(() => {});
                        },
                    }),
                    n
                );
            })(c, t);
            (Object.defineProperty(e, "contentWindow", { configurable: !0, get: () => _ }),
                Object.defineProperty(e, "src", { configurable: !0, get: () => n.src }));
            let E = e.parentElement,
                f =
                    null != E
                        ? (function (e, t, n) {
                              let i = new AbortController(),
                                  { signal: r } = i,
                                  a = !1,
                                  l = !1,
                                  o = !1,
                                  d = !1,
                                  c = null,
                                  u = 0,
                                  _ = 0,
                                  E = [];
                              function A(e) {
                                  return (
                                      _++,
                                      e.finally(() => {
                                          if (--_ > 0 || d || null != c) return;
                                          let e = E;
                                          for (let t of ((E = []), e)) t();
                                      })
                                  );
                              }
                              function f(n) {
                                  if (d) {
                                      c = n;
                                      return;
                                  }
                                  function i() {
                                      d = !1;
                                      let e = c;
                                      ((c = null), null == e || r.aborted || f(e));
                                  }
                                  ((d = !0),
                                      A(
                                          e.sendInput(t, n).then(i, (e) => {
                                              (s.warn(`frame view ${t} input failed`, e), i());
                                          }),
                                      ));
                              }
                              function h(n) {
                                  let i = null != c ? [c, n] : [n];
                                  for (let n of ((c = null), i))
                                      A(e.sendInput(t, n).catch((e) => s.warn(`frame view ${t} input failed`, e)));
                              }
                              function I(e, t, i) {
                                  n.addEventListener(
                                      e,
                                      (e) => {
                                          a || t(e);
                                      },
                                      { signal: r, ...i },
                                  );
                              }
                              function p(e, t) {
                                  let n;
                                  return {
                                      type: e,
                                      x: t.clientX,
                                      y: t.clientY,
                                      modifiers:
                                          ((n = []),
                                          t.shiftKey && n.push("shift"),
                                          t.ctrlKey && n.push("control"),
                                          t.altKey && n.push("alt"),
                                          t.metaKey && n.push("meta"),
                                          (1 & t.buttons) != 0 && n.push("leftButtonDown"),
                                          (2 & t.buttons) != 0 && n.push("rightButtonDown"),
                                          (4 & t.buttons) != 0 && n.push("middleButtonDown"),
                                          n),
                                  };
                              }
                              function m(e) {
                                  let i = document.elementFromPoint(e.clientX, e.clientY);
                                  (null != i && n.contains(i)) || (h(p("mouseLeave", e)), ek(t, !1));
                              }
                              (I("pointerdown", (e) => {
                                  "mouse" === e.pointerType && (n.setPointerCapture(e.pointerId), (l = !0));
                              }),
                                  I("lostpointercapture", (e) => {
                                      ((l = !1), eD === t && eB(), o && ((o = !1), m(e)));
                                  }),
                                  I("mousedown", (e) => {
                                      (e.preventDefault(), (u = e.buttons), ey === t && eV());
                                      let n = eQ[e.button];
                                      null != n && h({ ...p("mouseDown", e), button: n, clickCount: e.detail });
                                  }),
                                  I("mouseup", (e) => {
                                      u = e.buttons;
                                      let n = eQ[e.button];
                                      (null != n && h({ ...p("mouseUp", e), button: n, clickCount: e.detail }),
                                          eD === t && eB());
                                  }));
                              let g = !1;
                              for (let e of (n.addEventListener(
                                  "pointerrawupdate",
                                  (e) => {
                                      (g = "mouse" === e.pointerType) &&
                                          !a &&
                                          ((u = e.buttons), f(p("mouseMove", e)), ek(t, !0));
                                  },
                                  { signal: r },
                              ),
                              I("mousemove", (e) => {
                                  g || ((u = e.buttons), f(p("mouseMove", e)), ek(t, !0));
                              }),
                              I("mouseenter", (e) => {
                                  (h(p("mouseEnter", e)), ek(t, !0));
                              }),
                              I("mouseleave", (e) => {
                                  if (l) {
                                      o = !0;
                                      return;
                                  }
                                  m(e);
                              }),
                              I(
                                  "wheel",
                                  (e) => {
                                      e.preventDefault();
                                      let t =
                                          e.deltaMode === WheelEvent.DOM_DELTA_LINE
                                              ? 40
                                              : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                                                ? n.clientHeight
                                                : 1;
                                      h({ ...p("mouseWheel", e), deltaX: e.deltaX * t, deltaY: e.deltaY * t });
                                  },
                                  { passive: !1 },
                              ),
                              I("contextmenu", (e) => e.preventDefault()),
                              ["dragenter", "dragover", "drop"]))
                                  I(e, (e) => e.stopPropagation());
                              return (
                                  r.addEventListener("abort", () => {
                                      ((c = null),
                                          (function (e, t) {
                                              let n = e1.get(e);
                                              if (null == n) return;
                                              (e1.delete(e), t.removeAttribute(eZ));
                                              let i = e0?.sheet;
                                              if (null == i) return;
                                              let r = [...i.cssRules].indexOf(n);
                                              r >= 0 && i.deleteRule(r);
                                          })(t, n),
                                          ek(t, !1));
                                  }),
                                  {
                                      abort: () => i.abort(),
                                      setSuspended(e) {
                                          (e && !a && h({ type: "mouseLeave", x: 0, y: 0, modifiers: [] }), (a = e));
                                      },
                                      idle: () => 0 === u && !l,
                                      drained: () =>
                                          0 !== _ || d || null != c ? new Promise((e) => E.push(e)) : Promise.resolve(),
                                  }
                              );
                          })(c, t, E)
                        : null,
                h = n.colorScheme,
                I = {
                    iframe: e,
                    source: _,
                    shell: null,
                    onLoad: r,
                    inputTarget: E,
                    lastLayout: null,
                    inputSuspended: !1,
                    input: f,
                },
                m = new AbortController();
            function N() {
                l.get(t) === I &&
                    (l.delete(t),
                    g === e && (g = null),
                    ey === t && (ey = null),
                    eP++,
                    eD === t && (eD = null),
                    eb === t && (eb = null),
                    ev === t && (ev = null),
                    M?.visibility?.unobserve(e),
                    eq(),
                    f?.abort(),
                    m.abort(),
                    j === t && ((j = null), document.hasFocus() || (0, a.XC)(window, !1)),
                    Reflect.deleteProperty(e, "contentWindow"),
                    Reflect.deleteProperty(e, "src"),
                    0 === l.size &&
                        (null != M &&
                            (M.controller.abort(),
                            M.mutations.disconnect(),
                            M.ancestors?.disconnect(),
                            M.containers?.disconnect(),
                            M.visibility?.disconnect(),
                            (M = null),
                            U.clear(),
                            w.clear(),
                            (G = ""),
                            S.clear(),
                            C.clear(),
                            O.clear(),
                            b.clear(),
                            (D = !1),
                            eG.clear(),
                            (ey = null),
                            (eD = null),
                            (eb = null),
                            (ev = null),
                            ew.clear(),
                            (R = null),
                            (L = !1),
                            (p = null),
                            (A = !1),
                            null != u && (clearTimeout(u), (u = null))),
                        eR([]),
                        k?.disconnect(),
                        (k = null),
                        (x = !1)));
            }
            return (
                e.addEventListener(
                    "focus",
                    () => {
                        setTimeout(() => {
                            l.get(t) === I &&
                                document.activeElement === e &&
                                c.enter(t).catch((e) => s.warn(`frame view ${t} focus failed`, e));
                        }, 0);
                    },
                    { signal: m.signal },
                ),
                l.set(t, I),
                !(function () {
                    if (null != M) return;
                    let e = new AbortController(),
                        { signal: t } = e,
                        n = { capture: !0, signal: t },
                        r = { capture: !0, passive: !0, signal: t };
                    for (let n of ((M = {
                        controller: e,
                        mutations: new MutationObserver(ez),
                        ancestors: "u" > typeof ResizeObserver ? new ResizeObserver(ej) : null,
                        containers: "u" > typeof ResizeObserver ? new ResizeObserver(eY) : null,
                        visibility:
                            "u" > typeof IntersectionObserver
                                ? new IntersectionObserver(() => eW(!0), {
                                      threshold: [0, 0.01, 0.25, 0.5, 0.75, 0.99, 1],
                                  })
                                : null,
                    }).mutations.observe(document.documentElement, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ["class", "style", "hidden", "open", "data-theme"],
                    }),
                    M.mutations.observe(document.head, { subtree: !0, childList: !0, characterData: !0 }),
                    window.addEventListener("resize", () => eW(!1), { signal: t }),
                    document.addEventListener(
                        "scroll",
                        (e) => {
                            eg(e.target) && eW(!1);
                        },
                        r,
                    ),
                    ["pointerover", "pointerout", "pointerdown", "pointerup", "focusin", "focusout"]))
                        document.addEventListener(n, eY, r);
                    for (let e of ["transitionrun", "animationstart"])
                        document.addEventListener(
                            e,
                            (t) => {
                                let { target: n } = t;
                                if ((0, i.vq)(n, Element)) {
                                    if (null != ey) {
                                        (ew.set(n, 64), eH(!1));
                                        return;
                                    }
                                    (!(function (e) {
                                        let t = eE(),
                                            n = e;
                                        for (let e = 0; null != n && e < 40; e++, n = n.parentElement) {
                                            if (C.has(n)) return;
                                            if (
                                                "none" === getComputedStyle(n).pointerEvents &&
                                                ((null != t && n.contains(t)) || em(n))
                                            ) {
                                                (C.add(n), eW(!0));
                                                return;
                                            }
                                        }
                                    })(n),
                                        eg(n) ? (S.add(n), eW(!0)) : "transitionrun" === e && T.has(n) && eW(!0));
                                }
                            },
                            n,
                        );
                    for (let e of ["transitionend", "transitioncancel", "animationend", "animationcancel"])
                        document.addEventListener(
                            e,
                            (e) => {
                                let { target: t } = e;
                                if ((0, i.vq)(t, Element)) {
                                    null != ey && (ew.set(t, 0), eH(!1));
                                    for (let e of [...C])
                                        e.contains(t) &&
                                            ((e.isConnected && "none" === getComputedStyle(e).pointerEvents) ||
                                                (C.delete(e), eW(!0)));
                                    S.delete(t) && eW(!0);
                                }
                            },
                            n,
                        );
                    for (let e of (document.addEventListener(
                        "load",
                        (e) => {
                            let { target: t } = e;
                            (0, i.vq)(t, HTMLLinkElement) && eW(!0);
                        },
                        n,
                    ),
                    ei))
                        window.matchMedia(e).addEventListener("change", () => eW(!0), { signal: t });
                    for (let e of ["dragstart", "dragenter"]) document.addEventListener(e, () => eV(), r);
                    document.addEventListener(
                        "pointerover",
                        (e) => {
                            let { target: t } = e;
                            if (null == eb) return;
                            let n = l.get(eb)?.inputTarget;
                            (null != n && (0, i.vq)(t, Element) && n.contains(t)) || ek(eb, !1);
                        },
                        r,
                    );
                })(),
                M?.visibility?.observe(e),
                eq(),
                c.create(t, n).then(
                    (e) => {
                        l.get(t) === I &&
                            ((I.shell = window.open(e.url, e.name)),
                            null == I.shell &&
                                (s.error(`frame view ${t} shell did not open`),
                                N(),
                                c.destroy(t).catch(() => {}),
                                d?.()));
                    },
                    (e) => {
                        l.get(t) === I && (s.error(`frame view ${t} was not created`, e), N(), d?.());
                    },
                ),
                eW(!0),
                {
                    destroy() {
                        l.get(t) === I && (N(), c.destroy(t).catch(() => {}));
                    },
                    setInputSuspended(e) {
                        ((I.inputSuspended = e), e && ey === t && eV(), f?.setSuspended(e));
                    },
                    setColorScheme(e) {
                        e !== h &&
                            l.get(t) === I &&
                            ((h = e),
                            c.setColorScheme(t, e).catch((e) => s.warn(`frame view ${t} color scheme failed`, e)));
                    },
                }
            );
        },
    },
);
