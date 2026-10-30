(n.d(t, { H3: () => tt, H9: () => e5, KQ: () => $, oe: () => tn, r8: () => te, t8: () => e9, xW: () => ti }),
    n(321073),
    n(205816));
var i = n(621466),
    r = n(941426),
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
    h = !1,
    f = 0,
    I = !1,
    p = null,
    T = null,
    m = null,
    g = new WeakSet(),
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
    v = new Set(),
    b = new WeakMap(),
    M = 1,
    P = null,
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
    z = "data-native-frame-view-pointer-scope",
    X = `[${z}]`.repeat(4),
    q = ["color", "image", "size", "position", "repeat", "x", "y", "width", "height"],
    Z = `
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
html body ${X}, html body ${X} * {
  pointer-events: auto !important;
}`,
    Q = [
        ["--native-frame-view-hole-color", "backgroundColor"],
        ["--native-frame-view-hole-image", "backgroundImage"],
        ["--native-frame-view-hole-size", "backgroundSize"],
        ["--native-frame-view-hole-position", "backgroundPosition"],
        ["--native-frame-view-hole-repeat", "backgroundRepeat"],
    ],
    J = new Map(),
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
    for (let [t] of (e.removeAttribute(W), Q)) e.style.removeProperty(t);
    for (let t of ["x", "y", "width", "height"]) e.style.removeProperty(`--native-frame-view-hole-${t}`);
    (t && (e.style.position = ""), J.delete(e), (h = !0));
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
    let t = b.get(e);
    return (null == t && ((t = M++), b.set(e, t)), t);
}
function eE() {
    if (null != m) return m;
    for (let e of l.values()) return e.iframe;
    return null;
}
function eA(e, t) {
    if (null == T) return !1;
    let { x: n, y: i, width: r, height: a } = T,
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
let eh = new Set(["IMG", "VIDEO", "CANVAS", "IFRAME", "OBJECT", "EMBED", "INPUT", "TEXTAREA", "SELECT"]);
function ef(e) {
    return null != e && "" !== e && "none" !== e;
}
function eI(e) {
    let t = getComputedStyle(e);
    if (er(t) || ef(t.boxShadow) || ef(t.backdropFilter) || (ef(t.outlineStyle) && parseFloat(t.outlineWidth) > 0))
        return !0;
    for (let e of ["top", "right", "bottom", "left"])
        if (parseFloat(t.getPropertyValue(`border-${e}-width`)) > 0 && ef(t.getPropertyValue(`border-${e}-style`)))
            return !0;
    if (eh.has(e.tagName) || e instanceof SVGElement) return !0;
    for (let t of ["::before", "::after"]) if (ef(getComputedStyle(e, t).content)) return !0;
    return [...e.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && "" !== (e.textContent ?? "").trim());
}
function ep(e) {
    if (!e.isConnected) return !1;
    let t = [e];
    for (let n = 0; n < t.length; n++) {
        if (n >= 200)
            return (function (e) {
                let t = eE();
                if (null == T || null == t) return !0;
                let n = T;
                return eN(() => {
                    for (let [i, r] of eu(n))
                        for (let n of document.elementsFromPoint(i, r)) {
                            if (n.contains(t) || J.has(n) || ee.has(n)) break;
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
                    (ef(t.transform) || ef(t.filter))
                );
            })(i)) ||
            t.push(...i.children);
    }
    return !1;
}
function eT(e) {
    if (null == T || !(0, i.vq)(e, Element)) return !1;
    let { x: t, y: n, width: r, height: a } = T,
        s = e.getBoundingClientRect();
    return s.right > t && s.left < t + r && s.bottom > n && s.top < n + a;
}
function em(e) {
    if (null == e || e === document || e === window) return !0;
    if (!(0, i.vq)(e, Element)) return !1;
    for (let t of l.values()) if (e.contains(t.iframe)) return !0;
    return !1;
}
function eg(e) {
    let t = eS(e);
    if (null == t) return !1;
    for (let n of [...J.keys(), ...ee.keys(), ...et]) if (t.contains(n) && !n.contains(e)) return !0;
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
    for (let e of r) e.setAttribute(z, "");
    try {
        return e();
    } finally {
        for (let e of r) e.removeAttribute(z);
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
                if (J.has(t) || ee.has(t)) {
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
    let e = m;
    if (null != e && eg(e)) return ((D = !0), !0);
    if (D || null == R || null == e) return !1;
    for (let t of l.values()) if (t.iframe !== e && e6(t.iframe)?.clip != null) return !1;
    let t = e6(e);
    return t?.clip != null && JSON.stringify(t) === R.layout && eC({ iframe: e, clip: t.clip }) === R.value;
}
function eR(e) {
    if (((I = !1), (T = e[0]?.clip ?? null), (m = 1 === e.length ? e[0].iframe : null), (f = performance.now()), x)) {
        for (let e of ((x = !1), ee.keys())) e.removeAttribute(Y);
        for (let [e, t] of (ee.clear(), [...J])) ea(e, t);
    }
    null == en &&
        e.length > 0 &&
        (((en = document.createElement("style")).textContent = Z), document.head.appendChild(en));
    let t = new Map(),
        n = new Set(),
        r = new Set(),
        a = new Set(),
        s = new Map();
    function l(e, n) {
        !(!(0, i.vq)(e, HTMLElement) || t.has(e)) && (J.has(e) || ee.has(e) || er(getComputedStyle(e))) && t.set(e, n);
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
                : eT(d) && (n.add(d), l(d, i));
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
                        if (J.has(e))
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
    [...J]))
        t.has(e) || ea(e, n);
    for (let e of [...et])
        o.has(e) ||
            (function (e) {
                for (let t of (e.removeAttribute(K), ["x", "y", "width", "height"]))
                    e.style.removeProperty(`--native-frame-view-hole-${t}`);
                (et.delete(e), (h = !0));
            })(e);
    for (let e of t.keys())
        !(function (e) {
            if (J.has(e)) return;
            let t = getComputedStyle(e);
            for (let [n, i] of Q) e.style.setProperty(n, t[i]);
            let n = "static" === t.position;
            (n && (e.style.position = "relative"), e.setAttribute(W, ""), J.set(e, n), (h = !0));
        })(e);
    for (let e of o.keys()) (e.setAttribute(K, ""), et.has(e) || (h = !0), et.add(e));
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
    ((g = A),
        (function (e, t) {
            if (null == P) return;
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
            for (let e of w) i.has(e) || P.containers?.unobserve(e);
            for (let e of i) w.has(e) || P.containers?.observe(e);
            for (let e of (w.clear(), i)) w.add(e);
        })(e, n),
        P?.mutations.takeRecords(),
        (R = null),
        (L = !0));
}
function eL(e) {
    for (let [t, n] of ((T = e), [...J.keys(), ...et].map((e) => [e, ed(e)]))) ec(t, e, n);
    (P?.mutations.takeRecords(), (I = !0));
}
let ey = null,
    eD = null,
    ev = null,
    eb = null,
    eM = 0,
    eP = !1,
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
                (!e.contains(l) && !l.contains(e) && !J.has(l) && !ee.has(l))
            )
                return !1;
        }
    return !0;
}
function ek(e, t) {
    if (t) {
        if (ev === e) return;
        ((ev = e), (eD = e), eB());
        return;
    }
    ev === e && ((ev = null), (eD = null), eb === e && (eb = null), ey === e && eV(!1));
}
function eF(e) {
    ey === e && (ev === e && ((ev = null), (eD = null), eb === e && (eb = null)), eV(!1, !1));
}
function eB() {
    let e = eD,
        t = e3();
    if (null == e || eb === e || null != ey || null != c || t?.setOnTop == null || (null != m && eg(m))) return;
    let n = l.get(e),
        i = n?.inputTarget,
        r = n?.input;
    if (null == n || n.iframe !== m || null == i || null == r || n.inputSuspended || !r.idle() || null == T || N())
        return;
    for (let e of C) e.isConnected || C.delete(e);
    for (let e of eG) ep(e) || eG.delete(e);
    if (eG.size > 0 || [...C].some((e) => !e.contains(n.iframe) && ep(e)) || [...O].some(ep) || !ex(i, T)) return;
    ((ey = e), null != u && (clearTimeout(u), (u = null)));
    let a = ++eM;
    function o(t) {
        ey === e && eM === a && ((ey = null), t && ((eb = e), (eD = null)), eK(), eY());
    }
    r.drained()
        .then(() => (ey === e && eM === a && r.idle() ? t.setOnTop(e, !0) : null))
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
            eM++,
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
        eP ||
            ((eP = !0),
            requestAnimationFrame(() => {
                eP = !1;
                let e = null != ey ? l.get(ey) : null,
                    t = new Map(ew);
                ew.clear();
                let n = eU;
                if (((eU = !1), null != e)) {
                    if (JSON.stringify(e6(e.iframe)) !== e.lastLayout) return void eV();
                    for (let n of t.keys())
                        if (
                            !(!n.isConnected || n === e.iframe || n.contains(e.iframe) || g.has(n)) &&
                            eA(n, t.get(n) ?? 0)
                        ) {
                            (eG.add(n), eV());
                            return;
                        }
                    n && null != e.inputTarget && null != T && !ex(e.inputTarget, T) && eV();
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
                    let r = e6(i.iframe),
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
            (c ??= requestAnimationFrame(ez)));
    }
}
function eY() {
    null != ey
        ? eH(!0)
        : 0 === l.size ||
          null == T ||
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
            (_ = ez() ? 0 : Math.min(_ + 1, d.length - 1)),
            null != u && (clearTimeout(u), (u = null), eK()));
    }
}
function ez() {
    c = null;
    let e = e3();
    if (null == e) return !1;
    let t = [],
        n = !1;
    for (let [i, r] of l) {
        let a = e6(r.iframe);
        a?.clip != null && t.push({ iframe: r.iframe, clip: a.clip });
        let l = JSON.stringify(a);
        l !== r.lastLayout &&
            ((r.lastLayout = l), (n = !0), e.setLayout(i, a).catch((e) => s.warn(`frame view ${i} layout failed`, e)));
    }
    let i = A;
    ((A = !1), (h = !1));
    let r = n || x || i,
        a = 1 === t.length && eg(t[0].iframe);
    if (a) (r && eL(t[0].clip), (r = !1), (D = !0));
    else if (D) {
        for (let e of ((D = !1), (r = !0), v)) {
            if (!e.isConnected || !eT(e)) continue;
            let t = getComputedStyle(e);
            "none" === t.pointerEvents && er(t) && O.add(e);
        }
        v.clear();
    } else if (!x && !i) {
        let e = performance.now() - f >= 250;
        if (n && !e && 1 === t.length && J.size + et.size > 0 && null != p) {
            let { x: e, y: n, width: i, height: a } = t[0].clip;
            e >= p.left - 0.5 &&
                n >= p.top - 0.5 &&
                e + i <= p.right + 0.5 &&
                n + a <= p.bottom + 0.5 &&
                (eL(t[0].clip), (r = !1));
        } else e && (n || E < 10) && (r = !0);
    }
    if ((r && eR(t), 0 === l.size)) return n;
    let o = n || h;
    if ((E = o ? 0 : E + 1) < 10 || N()) c = requestAnimationFrame(ez);
    else {
        if (a) return (eK(), o);
        (I && eR(t),
            L &&
                ((L = !1),
                (function (e) {
                    if (((R = null), 1 !== e.length)) return;
                    let { iframe: t } = e[0],
                        n = e6(t);
                    n?.clip != null && (R = { layout: JSON.stringify(n), value: eC({ iframe: t, clip: n.clip }) });
                })(t)),
            eK(),
            eB());
    }
    return o;
}
function eX(e) {
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
                                for (let t of [e, ...e.querySelectorAll("*")].slice(0, a)) (a--, v.add(t));
                    return !1;
                }
                for (let s of e) {
                    if (a <= 0) break;
                    let { target: e } = s;
                    if ("attributes" === s.type && (0, i.vq)(e, Element)) {
                        if ("class" !== s.attributeName && "style" !== s.attributeName) continue;
                        let i = C.has(e);
                        if (!i && !(null != t && e.contains(t)) && !eT(e)) continue;
                        let r = "none" === getComputedStyle(e).pointerEvents;
                        r && !i ? (C.add(e), (n = !0)) : !r && i && (C.delete(e), (n = !0));
                    } else if ("childList" === s.type) {
                        for (let e of s.addedNodes)
                            if ((0, i.vq)(e, Element))
                                for (let i of [e, ...e.querySelectorAll("*")].slice(0, a)) {
                                    if ((a--, !eT(i))) continue;
                                    let e = getComputedStyle(i);
                                    if ("none" === e.pointerEvents && er(e)) {
                                        if ((r ??= null != t && eg(t))) {
                                            v.add(i);
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
                if (n.some((e) => (0, i.vq)(e, Element) && (null != T || em(e)))) return void eW(!0);
            } else if ((0, i.vq)(e, Element) && (g.has(e) || em(e))) return void eW(!0);
        }
        e.some((e) => "attributes" === e.type) && eY();
    }
}
function eq() {
    if (null == P) return;
    let e = new Set();
    for (let t of l.values()) for (let n = t.iframe; null != n; n = n.parentElement) e.add(n);
    for (let t of U) e.has(t) || P.ancestors?.unobserve(t);
    for (let t of e) U.has(t) || P.ancestors?.observe(t);
    for (let t of (U.clear(), e)) U.add(t);
}
let eZ = ["left", "middle", "right"],
    eQ = {
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
    eJ = "data-native-frame-view-cursor",
    e0 = null,
    e1 = new Map(),
    e2 = 1;
function e3() {
    return window.DiscordNative?.frameView ?? null;
}
function e5() {
    return null != e3();
}
function e4(e, t) {
    let n = Math.max(e.x, t.left),
        i = Math.max(e.y, t.top);
    return {
        x: n,
        y: i,
        width: Math.max(0, Math.min(e.x + e.width, t.right) - n),
        height: Math.max(0, Math.min(e.y + e.height, t.bottom) - i),
    };
}
function e6(e) {
    if (!e.isConnected) return null;
    let t = e.getBoundingClientRect();
    if (t.width <= 0 || t.height <= 0) return null;
    let n = { x: t.left, y: t.top, width: t.width, height: t.height },
        { devicePixelRatio: i } = window;
    if (!e.checkVisibility({ opacityProperty: !0, visibilityProperty: !0 }))
        return { frame: n, clip: null, devicePixelRatio: i };
    let r = e4(n, { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight });
    for (let t = e.parentElement; null != t && r.width > 0; t = t.parentElement) {
        let { overflowX: e, overflowY: n } = getComputedStyle(t);
        ("visible" !== e || "visible" !== n) && (r = e4(r, t.getBoundingClientRect()));
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
function e8(e) {
    for (let [t, n] of l) if (n.iframe === e) return t;
    return null;
}
function e9(e) {
    return null != e8(e);
}
function te(e) {
    let t = e8(e);
    return null != t && j === t;
}
function tt(e) {
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
}
function tn(e, t) {
    let n = e3(),
        i = e8(e);
    return null == n || null == i ? null : n.capture(i, t);
}
function ti(e, t, n, r, d) {
    let c = e3();
    if (null == c || e.ownerDocument !== document) return null;
    (null == k &&
        ((F = V()),
        (k = new MutationObserver(H)).observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }),
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
                            null == e0 && ((e0 = document.createElement("style")), document.head.appendChild(e0));
                            let n = e0.sheet;
                            if (null == n) return;
                            let r = e2++;
                            t.setAttribute(eJ, String(r));
                            let a = n.insertRule(`[${eJ}="${r}"] {}`, n.cssRules.length);
                            ((i = n.cssRules[a]), e1.set(e, i));
                        }
                        i.style.cursor = n;
                    })(e, n, Object.hasOwn(eQ, t) ? eQ[t] : t.includes("-panning") ? "all-scroll" : "default");
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
        h =
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
                      function h(n) {
                          if (d) {
                              c = n;
                              return;
                          }
                          function i() {
                              d = !1;
                              let e = c;
                              ((c = null), null == e || r.aborted || h(e));
                          }
                          ((d = !0),
                              A(
                                  e.sendInput(t, n).then(i, (e) => {
                                      (s.warn(`frame view ${t} input failed`, e), i());
                                  }),
                              ));
                      }
                      function f(n) {
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
                      function T(e) {
                          let i = document.elementFromPoint(e.clientX, e.clientY);
                          (null != i && n.contains(i)) || (f(p("mouseLeave", e)), ek(t, !1));
                      }
                      (I("pointerdown", (e) => {
                          "mouse" === e.pointerType && (n.setPointerCapture(e.pointerId), (l = !0));
                      }),
                          I("lostpointercapture", (e) => {
                              ((l = !1), eD === t && eB(), o && ((o = !1), T(e)));
                          }),
                          I("mousedown", (e) => {
                              (e.preventDefault(), (u = e.buttons), ey === t && eV());
                              let n = eZ[e.button];
                              null != n && f({ ...p("mouseDown", e), button: n, clickCount: e.detail });
                          }),
                          I("mouseup", (e) => {
                              u = e.buttons;
                              let n = eZ[e.button];
                              (null != n && f({ ...p("mouseUp", e), button: n, clickCount: e.detail }),
                                  eD === t && eB());
                          }));
                      let m = !1;
                      for (let e of (n.addEventListener(
                          "pointerrawupdate",
                          (e) => {
                              (m = "mouse" === e.pointerType) &&
                                  !a &&
                                  ((u = e.buttons), h(p("mouseMove", e)), ek(t, !0));
                          },
                          { signal: r },
                      ),
                      I("mousemove", (e) => {
                          m || ((u = e.buttons), h(p("mouseMove", e)), ek(t, !0));
                      }),
                      I("mouseenter", (e) => {
                          (f(p("mouseEnter", e)), ek(t, !0));
                      }),
                      I("mouseleave", (e) => {
                          if (l) {
                              o = !0;
                              return;
                          }
                          T(e);
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
                              f({ ...p("mouseWheel", e), deltaX: e.deltaX * t, deltaY: e.deltaY * t });
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
                                      (e1.delete(e), t.removeAttribute(eJ));
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
                                  (e && !a && f({ type: "mouseLeave", x: 0, y: 0, modifiers: [] }), (a = e));
                              },
                              idle: () => 0 === u && !l,
                              drained: () =>
                                  0 !== _ || d || null != c ? new Promise((e) => E.push(e)) : Promise.resolve(),
                          }
                      );
                  })(c, t, E)
                : null,
        f = n.colorScheme,
        I = {
            iframe: e,
            source: _,
            shell: null,
            onLoad: r,
            inputTarget: E,
            lastLayout: null,
            inputSuspended: !1,
            input: h,
        },
        T = new AbortController();
    function N() {
        l.get(t) === I &&
            (l.delete(t),
            m === e && (m = null),
            ey === t && (ey = null),
            eM++,
            eD === t && (eD = null),
            ev === t && (ev = null),
            eb === t && (eb = null),
            P?.visibility?.unobserve(e),
            eq(),
            h?.abort(),
            T.abort(),
            j === t && ((j = null), document.hasFocus() || (0, a.XC)(window, !1)),
            Reflect.deleteProperty(e, "contentWindow"),
            Reflect.deleteProperty(e, "src"),
            0 === l.size &&
                (null != P &&
                    (P.controller.abort(),
                    P.mutations.disconnect(),
                    P.ancestors?.disconnect(),
                    P.containers?.disconnect(),
                    P.visibility?.disconnect(),
                    (P = null),
                    U.clear(),
                    w.clear(),
                    (G = ""),
                    S.clear(),
                    C.clear(),
                    O.clear(),
                    v.clear(),
                    (D = !1),
                    eG.clear(),
                    (ey = null),
                    (eD = null),
                    (ev = null),
                    (eb = null),
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
            { signal: T.signal },
        ),
        l.set(t, I),
        !(function () {
            if (null != P) return;
            let e = new AbortController(),
                { signal: t } = e,
                n = { capture: !0, signal: t },
                r = { capture: !0, passive: !0, signal: t };
            for (let n of ((P = {
                controller: e,
                mutations: new MutationObserver(eX),
                ancestors: "u" > typeof ResizeObserver ? new ResizeObserver(ej) : null,
                containers: "u" > typeof ResizeObserver ? new ResizeObserver(eY) : null,
                visibility:
                    "u" > typeof IntersectionObserver
                        ? new IntersectionObserver(() => eW(!0), { threshold: [0, 0.01, 0.25, 0.5, 0.75, 0.99, 1] })
                        : null,
            }).mutations.observe(document.documentElement, {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: ["class", "style", "hidden", "open", "data-theme"],
            }),
            P.mutations.observe(document.head, { subtree: !0, childList: !0, characterData: !0 }),
            window.addEventListener("resize", () => eW(!1), { signal: t }),
            document.addEventListener(
                "scroll",
                (e) => {
                    em(e.target) && eW(!1);
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
                                        ((null != t && n.contains(t)) || eT(n))
                                    ) {
                                        (C.add(n), eW(!0));
                                        return;
                                    }
                                }
                            })(n),
                                em(n) ? (S.add(n), eW(!0)) : "transitionrun" === e && g.has(n) && eW(!0));
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
                    if (null == ev) return;
                    let n = l.get(ev)?.inputTarget;
                    (null != n && (0, i.vq)(t, Element) && n.contains(t)) || ek(ev, !1);
                },
                r,
            );
        })(),
        P?.visibility?.observe(e),
        eq(),
        c.create(t, n).then(
            (e) => {
                l.get(t) === I &&
                    ((I.shell = window.open(e.url, e.name)),
                    null == I.shell &&
                        (s.error(`frame view ${t} shell did not open`), N(), c.destroy(t).catch(() => {}), d?.()));
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
                ((I.inputSuspended = e), e && ey === t && eV(), h?.setSuspended(e));
            },
            setColorScheme(e) {
                e !== f &&
                    l.get(t) === I &&
                    ((f = e), c.setColorScheme(t, e).catch((e) => s.warn(`frame view ${t} color scheme failed`, e)));
            },
        }
    );
}
