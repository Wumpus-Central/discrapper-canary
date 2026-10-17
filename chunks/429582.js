(n.d(t, { H3: () => eR, H9: () => eg, oe: () => eL, t8: () => eO, xW: () => ey }), n(321073));
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
    m = new WeakSet(),
    g = new Set(),
    S = new Set(),
    N = new Set(),
    C = null,
    O = !1,
    R = !1,
    L = new WeakMap(),
    y = 1,
    D = null,
    v = new Set(),
    b = new Set(),
    P = "",
    M = !1,
    U = null,
    w = "",
    G = /^(?:theme-|custom-theme-background$|custom-client-theme$)/;
function x() {
    let e = [...document.documentElement.classList].filter((e) => G.test(e)).sort(),
        t = document.querySelector("style[data-client-themes]")?.textContent ?? "";
    return `${e.join(" ")}
${t}`;
}
function k() {
    let e = x();
    e !== w && ((w = e), (M = !0), eu(!0));
}
let F = null,
    B = "data-native-frame-view-hole",
    V = "data-native-frame-view-covered",
    H = "data-native-frame-view-pointer-scope",
    j = `[${H}]`.repeat(4),
    W = ["color", "image", "size", "position", "repeat", "x", "y", "width", "height"],
    Y = `
${W.map((e) => `@property --native-frame-view-hole-${e} { syntax: '*'; inherits: false; }`).join("\n")}
[${B}] {
  background: transparent !important;
}
[${B}]::before {
  ${W.map((e) => `--native-frame-view-hole-${e}: inherit;`).join("\n  ")}
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
  mask-composite: exclude;
}
[${V}] {
  background: transparent !important;
}
/* Specific enough to win over the important rules that turn pointer events off, like Discord's animating layers. */
html body ${j}, html body ${j} * {
  pointer-events: auto !important;
}`,
    K = [
        ["--native-frame-view-hole-color", "backgroundColor"],
        ["--native-frame-view-hole-image", "backgroundImage"],
        ["--native-frame-view-hole-size", "backgroundSize"],
        ["--native-frame-view-hole-position", "backgroundPosition"],
        ["--native-frame-view-hole-repeat", "backgroundRepeat"],
    ],
    $ = new Map(),
    z = new Map(),
    X = null,
    q = [
        "(prefers-color-scheme: dark)",
        "(prefers-reduced-motion: reduce)",
        "(prefers-contrast: more)",
        "(forced-colors: active)",
        "(resolution: 2dppx)",
    ];
function Z(e) {
    return "rgba(0, 0, 0, 0)" !== e.backgroundColor || "none" !== e.backgroundImage;
}
function Q(e, t) {
    for (let [t] of (e.removeAttribute(B), K)) e.style.removeProperty(t);
    for (let t of ["x", "y", "width", "height"]) e.style.removeProperty(`--native-frame-view-hole-${t}`);
    (t && (e.style.position = ""), $.delete(e), (h = !0));
}
function J(e) {
    return Math.round(e * window.devicePixelRatio) / window.devicePixelRatio;
}
function ee(e) {
    let { left: t, top: n, right: i, bottom: r } = e.getBoundingClientRect();
    return { left: t, top: n, right: i, bottom: r, clientLeft: e.clientLeft, clientTop: e.clientTop };
}
function et(e, t, n) {
    let i = J(n.left + n.clientLeft),
        r = J(n.top + n.clientTop),
        a = J(t.x),
        s = J(t.y),
        l = 1 / window.devicePixelRatio,
        o = J(t.x + t.width) - a + l,
        d = J(t.y + t.height) - s + l;
    (e.style.setProperty("--native-frame-view-hole-x", `${a - i}px`),
        e.style.setProperty("--native-frame-view-hole-y", `${s - r}px`),
        e.style.setProperty("--native-frame-view-hole-width", `${o}px`),
        e.style.setProperty("--native-frame-view-hole-height", `${d}px`));
}
function en(e) {
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
function ei(e) {
    let t = L.get(e);
    return (null == t && ((t = y++), L.set(e, t)), t);
}
function er() {
    for (let e of l.values()) return e.iframe;
    return null;
}
function ea(e) {
    if (null == T || !(0, i.vq)(e, Element)) return !1;
    let { x: t, y: n, width: r, height: a } = T,
        s = e.getBoundingClientRect();
    return s.right > t && s.left < t + r && s.bottom > n && s.top < n + a;
}
function es(e) {
    if (null == e || e === document || e === window) return !0;
    if (!(0, i.vq)(e, Element)) return !1;
    for (let t of l.values()) if (e.contains(t.iframe)) return !0;
    return !1;
}
function el(e) {
    let t = [...S].filter((e) => e.isConnected);
    for (let e of t) e.setAttribute(H, "");
    try {
        return e();
    } finally {
        for (let e of t) e.removeAttribute(H);
    }
}
function eo(e) {
    let { iframe: t, clip: n } = e;
    return el(() => {
        let e = [];
        for (let [i, r] of en(n)) {
            let n = document.elementsFromPoint(i, r),
                a = n.findIndex((e) => e.contains(t));
            if (a < 0) {
                e.push("-");
                continue;
            }
            for (let t of n.slice(a)) {
                let n = ei(t);
                if ($.has(t) || z.has(t)) {
                    e.push(`${n}p`);
                    continue;
                }
                let { backgroundColor: i, backgroundImage: r } = getComputedStyle(t);
                e.push(`${n}:${i}:${"none" === r ? "" : r.length}`);
            }
            e.push("/");
        }
        for (let t of N) e.push(`pin${ei(t)}`);
        return e.join(" ");
    });
}
function ed() {
    let e = er();
    if (null == C || null == e || 1 !== l.size) return !1;
    let t = eN(e);
    return t?.clip != null && JSON.stringify(t) === C.layout && eo({ iframe: e, clip: t.clip }) === C.value;
}
function ec(e) {
    if (((I = !1), (T = e[0]?.clip ?? null), (f = performance.now()), M)) {
        for (let e of ((M = !1), z.keys())) e.removeAttribute(V);
        for (let [e, t] of (z.clear(), [...$])) Q(e, t);
    }
    null == X &&
        e.length > 0 &&
        (((X = document.createElement("style")).textContent = Y), document.head.appendChild(X));
    let t = new Map(),
        n = new Set();
    function r(e, n) {
        !(!(0, i.vq)(e, HTMLElement) || t.has(e)) && ($.has(e) || z.has(e) || Z(getComputedStyle(e))) && t.set(e, n);
    }
    for (let { iframe: t, clip: i } of e) {
        for (let e = t.parentElement; null != e; e = e.parentElement) r(e, i);
        for (let e of (el(() => {
            for (let [e, a] of en(i)) {
                let s = document.elementsFromPoint(e, a),
                    l = s.findIndex((e) => e.contains(t));
                if (!(l < 0)) for (let e of s.slice(l + 1)) (n.add(e), r(e, i));
            }
        }),
        [...N]))
            e.isConnected ? ea(e) && (n.add(e), r(e, i)) : N.delete(e);
    }
    for (let [e, n] of ((function (e) {
        let t = [...e.keys()],
            n = new Map(t.map((e) => [e, e.getBoundingClientRect()])),
            i = new Map(
                t.map((e) => [
                    e,
                    (function (e) {
                        if ($.has(e))
                            return [
                                e.style.getPropertyValue("--native-frame-view-hole-color"),
                                e.style.getPropertyValue("--native-frame-view-hole-image"),
                            ];
                        let t = z.get(e);
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
        for (let e of z.keys()) a.has(e) || e.removeAttribute(V);
        for (let t of a.keys()) (e.delete(t), z.has(t) || t.setAttribute(V, ""));
        for (let [e, t] of (z.clear(), a)) z.set(e, t);
    })(t),
    [...$]))
        t.has(e) || Q(e, n);
    for (let e of t.keys())
        !(function (e) {
            if ($.has(e)) return;
            let t = getComputedStyle(e);
            for (let [n, i] of K) e.style.setProperty(n, t[i]);
            let n = "static" === t.position;
            (n && (e.style.position = "relative"), e.setAttribute(B, ""), $.set(e, n), (h = !0));
        })(e);
    let a = new Map([...t.keys()].map((e) => [e, ee(e)]));
    for (let [e, n] of t) et(e, n, a.get(e));
    let s = { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight };
    for (let e of a.values())
        s = {
            left: Math.max(s.left, e.left),
            top: Math.max(s.top, e.top),
            right: Math.min(s.right, e.right),
            bottom: Math.min(s.bottom, e.bottom),
        };
    p = t.size > 0 && 1 === e.length ? s : null;
    let l = new WeakSet([...t.keys(), ...n]);
    for (let { iframe: t } of e) for (let e = t; null != e; e = e.parentElement) l.add(e);
    ((m = l),
        (function (e, t) {
            if (null == D) return;
            let n = "";
            for (let e of t) n += `${ei(e)},`;
            for (let { iframe: t } of e) n += `|${ei(t)}`;
            if (n === P) return;
            P = n;
            let i = new Set();
            function r(e) {
                for (let t = e; null != t; t = t.parentElement)
                    i.has(t) || "normal" === getComputedStyle(t).containerType || i.add(t);
            }
            for (let { iframe: t } of e) r(t);
            for (let e of t) r(e);
            for (let e of b) i.has(e) || D.containers?.unobserve(e);
            for (let e of i) b.has(e) || D.containers?.observe(e);
            for (let e of (b.clear(), i)) b.add(e);
        })(e, n),
        D?.mutations.takeRecords(),
        (C = null),
        (O = !0));
}
function eu(e) {
    0 !== l.size &&
        (e && (A = !0),
        (_ = 0),
        null != u && (clearTimeout(u), (u = null)),
        (E = 0),
        (c ??= requestAnimationFrame(eh)));
}
function e_() {
    0 === l.size ||
        R ||
        ((R = !0),
        requestAnimationFrame(() => {
            ((R = !1), ed() || eu(!0));
        }));
}
function eE() {
    null == u && l.size > 0 && (u = setTimeout(eA, d[_]));
}
function eA() {
    if (((u = null), null == c && 0 !== l.size)) {
        if (ed()) {
            ((_ = Math.min(_ + 1, d.length - 1)), eE());
            return;
        }
        ((A = !0),
            (E = 9),
            (_ = eh() ? 0 : Math.min(_ + 1, d.length - 1)),
            null != u && (clearTimeout(u), (u = null), eE()));
    }
}
function eh() {
    c = null;
    let e = em();
    if (null == e) return !1;
    let t = [],
        n = !1;
    for (let [i, r] of l) {
        let a = eN(r.iframe);
        a?.clip != null && t.push({ iframe: r.iframe, clip: a.clip });
        let l = JSON.stringify(a);
        l !== r.lastLayout &&
            ((r.lastLayout = l), (n = !0), e.setLayout(i, a).catch((e) => s.warn(`frame view ${i} layout failed`, e)));
    }
    let i = A;
    ((A = !1), (h = !1));
    let r = n || M || i;
    if (!M && !i) {
        let e = performance.now() - f >= 250;
        if (n && !e && 1 === t.length && $.size > 0 && null != p) {
            let { x: e, y: n, width: i, height: s } = t[0].clip;
            if (e >= p.left - 0.5 && n >= p.top - 0.5 && e + i <= p.right + 0.5 && n + s <= p.bottom + 0.5) {
                var a = t[0].clip;
                for (let [e, t] of ((T = a), [...$.keys()].map((e) => [e, ee(e)]))) et(e, a, t);
                (D?.mutations.takeRecords(), (I = !0), (r = !1));
            }
        } else e && (n || E < 10) && (r = !0);
    }
    if ((r && ec(t), 0 === l.size)) return n;
    let o = n || h;
    return (
        (E = o ? 0 : E + 1) < 10 || g.size > 0
            ? (c = requestAnimationFrame(eh))
            : (I && ec(t),
              O &&
                  ((O = !1),
                  !(function (e) {
                      if (((C = null), 1 !== e.length)) return;
                      let { iframe: t } = e[0],
                          n = eN(t);
                      n?.clip != null && (C = { layout: JSON.stringify(n), value: eo({ iframe: t, clip: n.clip }) });
                  })(t)),
              eE()),
        o
    );
}
function ef(e) {
    if (
        !(
            0 === l.size ||
            (function (e) {
                let t = er(),
                    n = !1,
                    r = 200;
                for (let a of e) {
                    if (r <= 0) break;
                    let { target: e } = a;
                    if ("attributes" === a.type && (0, i.vq)(e, Element)) {
                        if ("class" !== a.attributeName && "style" !== a.attributeName) continue;
                        let i = S.has(e);
                        if (!i && !(null != t && e.contains(t)) && !ea(e)) continue;
                        let r = "none" === getComputedStyle(e).pointerEvents;
                        r && !i ? (S.add(e), (n = !0)) : !r && i && (S.delete(e), (n = !0));
                    } else if ("childList" === a.type) {
                        for (let e of a.addedNodes)
                            if ((0, i.vq)(e, Element))
                                for (let t of [e, ...e.querySelectorAll("*")].slice(0, r)) {
                                    if ((r--, !ea(t))) continue;
                                    let e = getComputedStyle(t);
                                    "none" === e.pointerEvents && Z(e) && (N.add(t), (n = !0));
                                }
                    }
                }
                return (n && eu(!0), n);
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
                return void eu(!0);
            if ("childList" === t.type) {
                if (n.some((e) => (0, i.vq)(e, Element))) return void eu(!0);
            } else if ((0, i.vq)(e, Element) && (m.has(e) || es(e))) return void eu(!0);
        }
        e.some((e) => "attributes" === e.type) && e_();
    }
}
function eI() {
    if (null == D) return;
    let e = new Set();
    for (let t of l.values()) for (let n = t.iframe; null != n; n = n.parentElement) e.add(n);
    for (let t of v) e.has(t) || D.ancestors?.unobserve(t);
    for (let t of e) v.has(t) || D.ancestors?.observe(t);
    for (let t of (v.clear(), e)) v.add(t);
}
let ep = ["left", "middle", "right"],
    eT = { nodrop: "no-drop", custom: "default" };
function em() {
    return window.DiscordNative?.frameView ?? null;
}
function eg() {
    return null != em();
}
function eS(e, t) {
    let n = Math.max(e.x, t.left),
        i = Math.max(e.y, t.top);
    return {
        x: n,
        y: i,
        width: Math.max(0, Math.min(e.x + e.width, t.right) - n),
        height: Math.max(0, Math.min(e.y + e.height, t.bottom) - i),
    };
}
function eN(e) {
    if (!e.isConnected) return null;
    let t = e.getBoundingClientRect();
    if (t.width <= 0 || t.height <= 0) return null;
    let n = { x: t.left, y: t.top, width: t.width, height: t.height },
        { devicePixelRatio: i } = window;
    if (!e.checkVisibility({ opacityProperty: !0, visibilityProperty: !0 }))
        return { frame: n, clip: null, devicePixelRatio: i };
    let r = eS(n, { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight });
    for (let t = e.parentElement; null != t && r.width > 0; t = t.parentElement) {
        let { overflowX: e, overflowY: n } = getComputedStyle(t);
        ("visible" !== e || "visible" !== n) && (r = eS(r, t.getBoundingClientRect()));
    }
    return { frame: n, clip: r.width > 0 && r.height > 0 ? r : null, devicePixelRatio: i };
}
function eC(e) {
    for (let [t, n] of l) if (n.iframe === e) return t;
    return null;
}
function eO(e) {
    return null != eC(e);
}
function eR(e) {
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
function eL(e, t) {
    let n = em(),
        i = eC(e);
    return null == n || null == i ? null : n.capture(i, t);
}
function ey(e, t, n, r, d) {
    let c = em();
    if (null == c || e.ownerDocument !== document) return null;
    (null == U &&
        ((w = x()),
        (U = new MutationObserver(k)).observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }),
        U.observe(document.head, { childList: !0, subtree: !0, characterData: !0 })),
        o !== c &&
            ((o = c),
            c.onMessage((e, t, n) => {
                let i = l.get(e);
                null != i &&
                    window.dispatchEvent(new MessageEvent("message", { data: t, origin: n, source: i.source }));
            }),
            c.onLoad((e) => l.get(e)?.onLoad()),
            c.onCursor((e, t) => {
                let n,
                    i = l.get(e)?.inputTarget;
                null != i &&
                    (i.style.cursor =
                        ((n = eT[t] ?? (t.endsWith("-panning") ? "all-scroll" : t)),
                        CSS.supports("cursor", n) ? n : "default"));
            }),
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
                        ((F = e), (0, a.XC)(window, !0));
                        return;
                    }
                    (F === e && (F = null), document.hasFocus() || (0, a.XC)(window, !1));
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
                          c = null;
                      function u(n) {
                          if (d) {
                              c = n;
                              return;
                          }
                          function i() {
                              d = !1;
                              let e = c;
                              ((c = null), null == e || r.aborted || u(e));
                          }
                          ((d = !0),
                              e.sendInput(t, n).then(i, (e) => {
                                  (s.warn(`frame view ${t} input failed`, e), i());
                              }));
                      }
                      function _(n) {
                          let i = null != c ? [c, n] : [n];
                          for (let n of ((c = null), i))
                              e.sendInput(t, n).catch((e) => s.warn(`frame view ${t} input failed`, e));
                      }
                      function E(e, t, i) {
                          n.addEventListener(
                              e,
                              (e) => {
                                  a || t(e);
                              },
                              { signal: r, ...i },
                          );
                      }
                      function A(e, t) {
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
                      function h(e) {
                          let t = document.elementFromPoint(e.clientX, e.clientY);
                          (null != t && n.contains(t)) || _(A("mouseLeave", e));
                      }
                      (E("pointerdown", (e) => {
                          "mouse" === e.pointerType && (n.setPointerCapture(e.pointerId), (l = !0));
                      }),
                          E("lostpointercapture", (e) => {
                              ((l = !1), o && ((o = !1), h(e)));
                          }),
                          E("mousedown", (e) => {
                              e.preventDefault();
                              let t = ep[e.button];
                              null != t && _({ ...A("mouseDown", e), button: t, clickCount: e.detail });
                          }),
                          E("mouseup", (e) => {
                              let t = ep[e.button];
                              null != t && _({ ...A("mouseUp", e), button: t, clickCount: e.detail });
                          }));
                      let f = !1;
                      for (let e of (n.addEventListener(
                          "pointerrawupdate",
                          (e) => {
                              (f = "mouse" === e.pointerType) && !a && u(A("mouseMove", e));
                          },
                          { signal: r },
                      ),
                      E("mousemove", (e) => {
                          f || u(A("mouseMove", e));
                      }),
                      E("mouseenter", (e) => _(A("mouseEnter", e))),
                      E("mouseleave", (e) => {
                          if (l) {
                              o = !0;
                              return;
                          }
                          h(e);
                      }),
                      E(
                          "wheel",
                          (e) => {
                              e.preventDefault();
                              let t =
                                  e.deltaMode === WheelEvent.DOM_DELTA_LINE
                                      ? 40
                                      : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                                        ? n.clientHeight
                                        : 1;
                              _({ ...A("mouseWheel", e), deltaX: e.deltaX * t, deltaY: e.deltaY * t });
                          },
                          { passive: !1 },
                      ),
                      E("contextmenu", (e) => e.preventDefault()),
                      ["dragenter", "dragover", "drop"]))
                          E(e, (e) => e.stopPropagation());
                      return (
                          r.addEventListener("abort", () => {
                              ((c = null), (n.style.cursor = ""));
                          }),
                          {
                              abort: () => i.abort(),
                              setSuspended(e) {
                                  (e && !a && _({ type: "mouseLeave", x: 0, y: 0, modifiers: [] }), (a = e));
                              },
                          }
                      );
                  })(c, t, E)
                : null,
        f = n.colorScheme,
        I = { iframe: e, source: _, shell: null, onLoad: r, inputTarget: E, lastLayout: null },
        T = new AbortController();
    function R() {
        l.get(t) === I &&
            (l.delete(t),
            D?.visibility?.unobserve(e),
            eI(),
            h?.abort(),
            T.abort(),
            F === t && ((F = null), document.hasFocus() || (0, a.XC)(window, !1)),
            Reflect.deleteProperty(e, "contentWindow"),
            Reflect.deleteProperty(e, "src"),
            0 === l.size &&
                (null != D &&
                    (D.controller.abort(),
                    D.mutations.disconnect(),
                    D.ancestors?.disconnect(),
                    D.containers?.disconnect(),
                    D.visibility?.disconnect(),
                    (D = null),
                    v.clear(),
                    b.clear(),
                    (P = ""),
                    g.clear(),
                    S.clear(),
                    N.clear(),
                    (C = null),
                    (O = !1),
                    (p = null),
                    (A = !1),
                    null != u && (clearTimeout(u), (u = null))),
                ec([]),
                U?.disconnect(),
                (U = null),
                (M = !1)));
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
            if (null != D) return;
            let e = new AbortController(),
                { signal: t } = e,
                n = { capture: !0, signal: t },
                r = { capture: !0, passive: !0, signal: t };
            for (let n of ((D = {
                controller: e,
                mutations: new MutationObserver(ef),
                ancestors: "u" > typeof ResizeObserver ? new ResizeObserver(() => eu(!1)) : null,
                containers: "u" > typeof ResizeObserver ? new ResizeObserver(e_) : null,
                visibility:
                    "u" > typeof IntersectionObserver
                        ? new IntersectionObserver(() => eu(!0), { threshold: [0, 0.01, 0.25, 0.5, 0.75, 0.99, 1] })
                        : null,
            }).mutations.observe(document.documentElement, {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: ["class", "style", "hidden", "open", "data-theme"],
            }),
            D.mutations.observe(document.head, { subtree: !0, childList: !0, characterData: !0 }),
            window.addEventListener("resize", () => eu(!1), { signal: t }),
            document.addEventListener(
                "scroll",
                (e) => {
                    es(e.target) && eu(!1);
                },
                r,
            ),
            ["pointerover", "pointerout", "pointerdown", "pointerup", "focusin", "focusout"]))
                document.addEventListener(n, e_, r);
            for (let e of ["transitionrun", "animationstart"])
                document.addEventListener(
                    e,
                    (t) => {
                        let { target: n } = t;
                        (0, i.vq)(n, Element) &&
                            (!(function (e) {
                                let t = er(),
                                    n = e;
                                for (let e = 0; null != n && e < 40; e++, n = n.parentElement) {
                                    if (S.has(n)) return;
                                    if (
                                        "none" === getComputedStyle(n).pointerEvents &&
                                        ((null != t && n.contains(t)) || ea(n))
                                    ) {
                                        (S.add(n), eu(!0));
                                        return;
                                    }
                                }
                            })(n),
                            es(n) ? (g.add(n), eu(!0)) : "transitionrun" === e && m.has(n) && eu(!0));
                    },
                    n,
                );
            for (let e of ["transitionend", "transitioncancel", "animationend", "animationcancel"])
                document.addEventListener(
                    e,
                    (e) => {
                        let { target: t } = e;
                        if ((0, i.vq)(t, Element)) {
                            for (let e of [...S])
                                e.contains(t) &&
                                    ((e.isConnected && "none" === getComputedStyle(e).pointerEvents) ||
                                        (S.delete(e), eu(!0)));
                            g.delete(t) && eu(!0);
                        }
                    },
                    n,
                );
            for (let e of (document.addEventListener(
                "load",
                (e) => {
                    let { target: t } = e;
                    (0, i.vq)(t, HTMLLinkElement) && eu(!0);
                },
                n,
            ),
            q))
                window.matchMedia(e).addEventListener("change", () => eu(!0), { signal: t });
        })(),
        D?.visibility?.observe(e),
        eI(),
        c.create(t, n).then(
            (e) => {
                l.get(t) === I &&
                    ((I.shell = window.open(e.url, e.name)),
                    null == I.shell &&
                        (s.error(`frame view ${t} shell did not open`), R(), c.destroy(t).catch(() => {}), d?.()));
            },
            (e) => {
                l.get(t) === I && (s.error(`frame view ${t} was not created`, e), R(), d?.());
            },
        ),
        eu(!0),
        {
            destroy() {
                l.get(t) === I && (R(), c.destroy(t).catch(() => {}));
            },
            setInputSuspended(e) {
                h?.setSuspended(e);
            },
            setColorScheme(e) {
                e !== f &&
                    l.get(t) === I &&
                    ((f = e), c.setColorScheme(t, e).catch((e) => s.warn(`frame view ${t} color scheme failed`, e)));
            },
        }
    );
}
