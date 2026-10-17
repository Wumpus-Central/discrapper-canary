(n.d(t, { H3: () => U, H9: () => D, oe: () => w, t8: () => M, xW: () => G }), n(321073));
var i = n(621466),
    r = n(941426),
    a = n(350723);
let s = new r.Vy("NativeFrameView"),
    l = new Map(),
    o = null,
    d = null,
    c = 0,
    u = !1,
    _ = null,
    E = "",
    A = /^(?:theme-|custom-theme-background$|custom-client-theme$)/;
function h() {
    let e = [...document.documentElement.classList].filter((e) => A.test(e)).sort(),
        t = document.querySelector("style[data-client-themes]")?.textContent ?? "";
    return `${e.join(" ")}
${t}`;
}
function f() {
    let e = h();
    e !== E && ((E = e), (u = !0));
}
let I = null,
    p = "data-native-frame-view-hole",
    T = `
[${p}] {
  background: transparent !important;
}
[${p}]::before {
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
}`,
    m = [
        ["--native-frame-view-hole-color", "backgroundColor"],
        ["--native-frame-view-hole-image", "backgroundImage"],
        ["--native-frame-view-hole-size", "backgroundSize"],
        ["--native-frame-view-hole-position", "backgroundPosition"],
        ["--native-frame-view-hole-repeat", "backgroundRepeat"],
    ],
    g = new Map(),
    S = null;
function N(e, t) {
    for (let [t] of (e.removeAttribute(p), m)) e.style.removeProperty(t);
    for (let t of ["x", "y", "width", "height"]) e.style.removeProperty(`--native-frame-view-hole-${t}`);
    (t && (e.style.position = ""), g.delete(e));
}
function C(e) {
    return Math.round(e * window.devicePixelRatio) / window.devicePixelRatio;
}
function O(e) {
    if (((c = performance.now()), u)) for (let [e, t] of ((u = !1), [...g])) N(e, t);
    null == S &&
        e.length > 0 &&
        (((S = document.createElement("style")).textContent = T), document.head.appendChild(S));
    let t = new Map();
    function n(e, n) {
        if (!(!(0, i.vq)(e, HTMLElement) || t.has(e))) {
            var r;
            (g.has(e) ||
                "rgba(0, 0, 0, 0)" !== (r = getComputedStyle(e)).backgroundColor ||
                "none" !== r.backgroundImage) &&
                t.set(e, n);
        }
    }
    for (let { iframe: t, clip: i } of e) {
        for (let e = t.parentElement; null != e; e = e.parentElement) n(e, i);
        for (let [e, r] of (function (e) {
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
        })(i)) {
            let a = document.elementsFromPoint(e, r),
                s = a.findIndex((e) => e.contains(t));
            if (!(s < 0)) for (let e of a.slice(s + 1)) n(e, i);
        }
    }
    for (let [e, n] of [...g]) t.has(e) || N(e, n);
    for (let [e, n] of t)
        (!(function (e) {
            if (g.has(e)) return;
            let t = getComputedStyle(e);
            for (let [n, i] of m) e.style.setProperty(n, t[i]);
            let n = "static" === t.position;
            (n && (e.style.position = "relative"), e.setAttribute(p, ""), g.set(e, n));
        })(e),
            (function (e, t) {
                let n = e.getBoundingClientRect(),
                    i = C(n.left + e.clientLeft),
                    r = C(n.top + e.clientTop),
                    a = C(t.x),
                    s = C(t.y),
                    l = 1 / window.devicePixelRatio,
                    o = C(t.x + t.width) - a + l,
                    d = C(t.y + t.height) - s + l;
                (e.style.setProperty("--native-frame-view-hole-x", `${a - i}px`),
                    e.style.setProperty("--native-frame-view-hole-y", `${s - r}px`),
                    e.style.setProperty("--native-frame-view-hole-width", `${o}px`),
                    e.style.setProperty("--native-frame-view-hole-height", `${d}px`));
            })(e, n));
}
let R = ["left", "middle", "right"],
    L = { nodrop: "no-drop", custom: "default" };
function y() {
    return window.DiscordNative?.frameView ?? null;
}
function D() {
    return null != y();
}
function v(e, t) {
    let n = Math.max(e.x, t.left),
        i = Math.max(e.y, t.top);
    return {
        x: n,
        y: i,
        width: Math.max(0, Math.min(e.x + e.width, t.right) - n),
        height: Math.max(0, Math.min(e.y + e.height, t.bottom) - i),
    };
}
function b() {
    d = null;
    let e = y();
    if (null == e) return;
    let t = [],
        n = !1;
    for (let [i, r] of l) {
        let a = (function (e) {
            if (!e.isConnected) return null;
            let t = e.getBoundingClientRect();
            if (t.width <= 0 || t.height <= 0) return null;
            let n = { x: t.left, y: t.top, width: t.width, height: t.height },
                { devicePixelRatio: i } = window;
            if (!e.checkVisibility({ opacityProperty: !0, visibilityProperty: !0 }))
                return { frame: n, clip: null, devicePixelRatio: i };
            let r = v(n, { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight });
            for (let t = e.parentElement; null != t && r.width > 0; t = t.parentElement) {
                let { overflowX: e, overflowY: n } = getComputedStyle(t);
                ("visible" !== e || "visible" !== n) && (r = v(r, t.getBoundingClientRect()));
            }
            return { frame: n, clip: r.width > 0 && r.height > 0 ? r : null, devicePixelRatio: i };
        })(r.iframe);
        a?.clip != null && t.push({ iframe: r.iframe, clip: a.clip });
        let l = JSON.stringify(a);
        l !== r.lastLayout &&
            ((r.lastLayout = l), (n = !0), e.setLayout(i, a).catch((e) => s.warn(`frame view ${i} layout failed`, e)));
    }
    ((n || u || performance.now() - c >= 250) && O(t), l.size > 0 && (d = requestAnimationFrame(b)));
}
function P(e) {
    for (let [t, n] of l) if (n.iframe === e) return t;
    return null;
}
function M(e) {
    return null != P(e);
}
function U(e) {
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
function w(e, t) {
    let n = y(),
        i = P(e);
    return null == n || null == i ? null : n.capture(i, t);
}
function G(e, t, n, i, r) {
    let c = y();
    if (null == c || e.ownerDocument !== document) return null;
    (null == _ &&
        ((E = h()),
        (_ = new MutationObserver(f)).observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }),
        _.observe(document.head, { childList: !0, subtree: !0, characterData: !0 })),
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
                        ((n = L[t] ?? (t.endsWith("-panning") ? "all-scroll" : t)),
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
                        ((I = e), (0, a.XC)(window, !0));
                        return;
                    }
                    (I === e && (I = null), document.hasFocus() || (0, a.XC)(window, !1));
                }
            })));
    let A = (function (e, t) {
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
    (Object.defineProperty(e, "contentWindow", { configurable: !0, get: () => A }),
        Object.defineProperty(e, "src", { configurable: !0, get: () => n.src }));
    let p = e.parentElement,
        T =
            null != p
                ? (function (e, t, n) {
                      let i = new AbortController(),
                          { signal: r } = i,
                          a = !1,
                          l = !1,
                          o = !1;
                      function d(n) {
                          e.sendInput(t, n).catch((e) => s.warn(`frame view ${t} input failed`, e));
                      }
                      function c(e, t, i) {
                          n.addEventListener(
                              e,
                              (e) => {
                                  a || t(e);
                              },
                              { signal: r, ...i },
                          );
                      }
                      function u(e, t) {
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
                      function _(e) {
                          let t = document.elementFromPoint(e.clientX, e.clientY);
                          (null != t && n.contains(t)) || d(u("mouseLeave", e));
                      }
                      for (let e of (c("pointerdown", (e) => {
                          "mouse" === e.pointerType && (n.setPointerCapture(e.pointerId), (l = !0));
                      }),
                      c("lostpointercapture", (e) => {
                          ((l = !1), o && ((o = !1), _(e)));
                      }),
                      c("mousedown", (e) => {
                          e.preventDefault();
                          let t = R[e.button];
                          null != t && d({ ...u("mouseDown", e), button: t, clickCount: e.detail });
                      }),
                      c("mouseup", (e) => {
                          let t = R[e.button];
                          null != t && d({ ...u("mouseUp", e), button: t, clickCount: e.detail });
                      }),
                      c("mousemove", (e) => d(u("mouseMove", e))),
                      c("mouseenter", (e) => d(u("mouseEnter", e))),
                      c("mouseleave", (e) => {
                          if (l) {
                              o = !0;
                              return;
                          }
                          _(e);
                      }),
                      c(
                          "wheel",
                          (e) => {
                              e.preventDefault();
                              let t =
                                  e.deltaMode === WheelEvent.DOM_DELTA_LINE
                                      ? 40
                                      : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                                        ? n.clientHeight
                                        : 1;
                              d({ ...u("mouseWheel", e), deltaX: e.deltaX * t, deltaY: e.deltaY * t });
                          },
                          { passive: !1 },
                      ),
                      c("contextmenu", (e) => e.preventDefault()),
                      ["dragenter", "dragover", "drop"]))
                          c(e, (e) => e.stopPropagation());
                      return (
                          r.addEventListener("abort", () => {
                              n.style.cursor = "";
                          }),
                          {
                              abort: () => i.abort(),
                              setSuspended(e) {
                                  (e && !a && d({ type: "mouseLeave", x: 0, y: 0, modifiers: [] }), (a = e));
                              },
                          }
                      );
                  })(c, t, p)
                : null,
        m = n.colorScheme,
        g = { iframe: e, source: A, shell: null, onLoad: i, inputTarget: p, lastLayout: null },
        S = new AbortController();
    function N() {
        l.get(t) === g &&
            (l.delete(t),
            T?.abort(),
            S.abort(),
            I === t && ((I = null), document.hasFocus() || (0, a.XC)(window, !1)),
            Reflect.deleteProperty(e, "contentWindow"),
            Reflect.deleteProperty(e, "src"),
            0 === l.size && (O([]), _?.disconnect(), (_ = null), (u = !1)));
    }
    return (
        e.addEventListener(
            "focus",
            () => {
                setTimeout(() => {
                    l.get(t) === g &&
                        document.activeElement === e &&
                        c.enter(t).catch((e) => s.warn(`frame view ${t} focus failed`, e));
                }, 0);
            },
            { signal: S.signal },
        ),
        l.set(t, g),
        c.create(t, n).then(
            (e) => {
                l.get(t) === g &&
                    ((g.shell = window.open(e.url, e.name)),
                    null == g.shell &&
                        (s.error(`frame view ${t} shell did not open`), N(), c.destroy(t).catch(() => {}), r?.()));
            },
            (e) => {
                l.get(t) === g && (s.error(`frame view ${t} was not created`, e), N(), r?.());
            },
        ),
        (d ??= requestAnimationFrame(b)),
        {
            destroy() {
                l.get(t) === g && (N(), c.destroy(t).catch(() => {}));
            },
            setInputSuspended(e) {
                T?.setSuspended(e);
            },
            setColorScheme(e) {
                e !== m &&
                    l.get(t) === g &&
                    ((m = e), c.setColorScheme(t, e).catch((e) => s.warn(`frame view ${t} color scheme failed`, e)));
            },
        }
    );
}
