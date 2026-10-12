r.d(t, { snapdom: () => lt });
var n,
    o,
    i = Object.defineProperty,
    l = (e, t, r) => () => {
        if (r) throw r[0];
        try {
            return (e && (t = e((e = 0))), t);
        } catch (e) {
            throw ((r = [e]), e);
        }
    },
    a = (e, t) => {
        for (var r in t) i(e, r, { get: t[r], enumerable: !0 });
    },
    s = l(() => {
        o = {
            image: new (n = class extends Map {
                constructor(e = 100, ...t) {
                    (super(...t), (this._maxSize = e));
                }
                set(e, t) {
                    if (this.size >= this._maxSize && !this.has(e)) {
                        let e = this.keys().next().value;
                        void 0 !== e && this.delete(e);
                    }
                    return super.set(e, t);
                }
            })(100),
            background: new n(100),
            resource: new n(150),
            defaultStyle: new n(64),
            baseStyle: new n(50),
            compress: new n(50),
            computedStyle: new WeakMap(),
            measureHints: new WeakMap(),
            warnedReconcile: !1,
        };
    });
function c(e) {
    let t = e.match(/url\((['"]?)(.*?)(\1)\)/);
    if (!t) return null;
    let r = t[2].trim();
    return r.startsWith("#") ? null : r;
}
function u(e, t = 1) {
    let r = e.match(/^\s*-?(?:webkit-)?image-set\(([\s\S]*)\)\s*$/i);
    if (!r) return null;
    let n = [];
    for (let e of (function (e) {
        let t = [],
            r = 0,
            n = 0,
            o = "";
        for (let i = 0; i < e.length; i++) {
            let l = e[i];
            if ("\\" === l) {
                i++;
                continue;
            }
            o
                ? l === o && (o = "")
                : '"' === l || "'" === l
                  ? (o = l)
                  : "(" === l
                    ? n++
                    : ")" === l
                      ? n--
                      : "," === l && 0 === n && (t.push(e.slice(r, i)), (r = i + 1));
        }
        return (t.push(e.slice(r)), t);
    })(r[1])) {
        let t = e.match(/url\((['"]?)(.*?)(\1)\)/);
        if (!t) continue;
        let r = e.match(/type\(\s*["']([^"']+)["']\s*\)/i);
        if (r && !b.test(r[1].trim())) continue;
        let o = e.replace(/url\((['"]?)[\s\S]*?\1\)/, " ").match(/(\d+(?:\.\d+)?)\s*(x|dpi|dppx)\b/i),
            i = 1;
        if (o) {
            let e = parseFloat(o[1]);
            i = /dpi/i.test(o[2]) ? e / 96 : e;
        }
        n.push({ url: t[2].trim(), dppx: i });
    }
    return n.length ? (n.sort((e, t) => e.dppx - t.dppx), (n.find((e) => e.dppx >= t) || n[n.length - 1]).url) : null;
}
function d(e) {
    if (/%[0-9A-Fa-f]{2}/.test(e)) return e;
    try {
        return encodeURI(e);
    } catch {
        return e;
    }
}
function f(e) {
    return !!e && "INPUT" === e.tagName && "password" === (e.getAttribute("type") || "").toLowerCase();
}
function h(e, t) {
    return e?.nodeType === 1 && e.localName === t;
}
function p(e) {
    return e?.nodeType === 1 && e.namespaceURI === w;
}
function m(e) {
    return e?.nodeType === 1 && e.namespaceURI === x;
}
function g(e) {
    return e?.nodeType === 11 && !!e.host;
}
var y,
    b,
    w,
    x,
    v = l(() => {
        ((b = y = /^image\/(jpeg|jpg|png|gif|webp|avif|apng|svg\+xml|bmp|x-icon|vnd\.microsoft\.icon)\s*(;|$)/i),
            (w = "http://www.w3.org/1999/xhtml"),
            (x = "http://www.w3.org/2000/svg"));
    });
function S(e, t, r) {
    if (F.size >= E) {
        let e = Date.now();
        for (let [t, r] of F) r.until <= e && F.delete(t);
        for (; F.size >= E;) F.delete(F.keys().next().value);
    }
    F.set(e, { until: Date.now() + r, result: t });
}
function M(e) {
    return new Promise((t, r) => {
        let n = new FileReader();
        ((n.onload = () => t(String(n.result || ""))), (n.onerror = () => r(Error("read_failed"))), n.readAsDataURL(e));
    });
}
function k(e) {
    try {
        return new URL(e, globalThis.location?.href || "http://localhost/").origin;
    } catch {
        return "invalid-url";
    }
}
function C(e, t) {
    try {
        e.onError?.(t);
    } catch {}
}
async function $(e, t = {}) {
    let r,
        n = t.as ?? "blob",
        o = t.timeout ?? 3e3,
        i = t.useProxy || "",
        l = t.errorTTL ?? 8e3,
        a = t.headers || {},
        s = !!t.silent;
    if (/^data:/i.test(e))
        try {
            if ("text" === n) return { ok: !0, data: String(e), status: 200, url: e, fromCache: !1 };
            if ("dataURL" === n)
                return {
                    ok: !0,
                    data: String(e),
                    status: 200,
                    url: e,
                    fromCache: !1,
                    mime: String(e).slice(5).split(";")[0] || "",
                };
            let [, t = "", r = ""] = String(e).match(/^data:([^,]*),(.*)$/) || [],
                o = /;base64/i.test(t) ? atob(r) : decodeURIComponent(r),
                i = new Uint8Array([...o].map((e) => e.charCodeAt(0))),
                l = new Blob([i], { type: (t || "").split(";")[0] || "" });
            return { ok: !0, data: l, status: 200, url: e, fromCache: !1, mime: l.type || "" };
        } catch {
            return { ok: !1, data: null, status: 0, url: e, fromCache: !1, reason: "special_url_error" };
        }
    if (/^blob:/i.test(e))
        try {
            let t = await fetch(e);
            if (!t.ok) return { ok: !1, data: null, status: t.status, url: e, fromCache: !1, reason: "http_error" };
            let r = await t.blob(),
                o = r.type || t.headers.get("content-type") || "";
            return "dataURL" === n
                ? { ok: !0, data: await M(r), blob: r, status: t.status, url: e, fromCache: !1, mime: o }
                : "text" === n
                  ? { ok: !0, data: await r.text(), status: t.status, url: e, fromCache: !1, mime: o }
                  : { ok: !0, data: r, status: t.status, url: e, fromCache: !1, mime: o };
        } catch {
            return { ok: !1, data: null, status: 0, url: e, fromCache: !1, reason: "network" };
        }
    if (/^about:blank$/i.test(e))
        return "dataURL" === n
            ? {
                  ok: !0,
                  data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==",
                  status: 200,
                  url: e,
                  fromCache: !1,
                  mime: "image/png",
              }
            : { ok: !0, data: "text" === n ? "" : new Blob([]), status: 200, url: e, fromCache: !1 };
    try {
        var c;
        ((c = { as: n, timeout: o, useProxy: i, errorTTL: l, credentials: t.credentials, headers: a }),
            (r = new Headers(c.headers || {}).keys().next().done
                ? JSON.stringify([
                      c.as || "blob",
                      c.timeout ?? 3e3,
                      c.useProxy || "",
                      c.errorTTL ?? 8e3,
                      c.credentials || "",
                      e,
                  ])
                : null));
    } catch {
        let r = { ok: !1, data: null, status: 0, url: e, fromCache: !1, reason: "network" };
        return (C(t, r), r);
    }
    let u = F.get(r);
    if (u && u.until > Date.now()) return { ...u.result, fromCache: !0 };
    u && F.delete(r);
    let f = R.get(r);
    if (f) return f;
    let h = !(function (e, t) {
            if (
                !t ||
                /^data:|^blob:|^about:blank$/i.test(e) ||
                (function (e, t) {
                    try {
                        let r = "u" > typeof location && location.href ? location.href : "http://localhost/",
                            n = t.split(/\{url(?:Raw)?\}/)[0],
                            o = new URL(n || ".", r);
                        if (new URL(e, r).origin === o.origin) return !0;
                    } catch {}
                    return !1;
                })(e, t)
            )
                return !1;
            try {
                let t = "u" > typeof location && location.href ? location.href : "http://localhost/",
                    r = new URL(e, t);
                return !("u" > typeof location) || r.origin !== location.origin;
            } catch {
                return !!t;
            }
        })(e, i)
            ? e
            : (function (e, t) {
                  if (!t) return e;
                  if (/\{url(?:Raw)?\}/.test(t))
                      return t.replace("{urlRaw}", () => d(e)).replace("{url}", () => encodeURIComponent(e));
                  if (/[?&]url=?$/.test(t)) return `${t}${encodeURIComponent(e)}`;
                  if (t.endsWith("?")) return `${t}url=${encodeURIComponent(e)}`;
                  if (t.endsWith("/")) return `${t}${d(e)}`;
                  let r = t.includes("?") ? "&" : "?";
                  return `${t}${r}url=${encodeURIComponent(e)}`;
              })(e, i),
        p = t.credentials;
    if (!p)
        try {
            let t = "u" > typeof location && location.href ? location.href : "http://localhost/",
                r = new URL(e, t);
            p = "u" > typeof location && r.origin === location.origin ? "include" : "omit";
        } catch {
            p = "omit";
        }
    let m = new AbortController(),
        g = setTimeout(() => m.abort("timeout"), o),
        y = (async () => {
            try {
                let o = await fetch(h, { signal: m.signal, credentials: p, headers: a });
                if (!o.ok) {
                    let i = { ok: !1, data: null, status: o.status, url: h, fromCache: !1, reason: "http_error" };
                    if ((null !== r && l > 0 && S(r, i, l), !s)) {
                        let t = `${o.status} ${o.statusText || ""}`.trim();
                        A.warnOnce(`http:${o.status}:${n}:${k(e)}`, `Couldn't load ${e} (HTTP ${t}).`);
                    }
                    return (C(t, i), i);
                }
                if ("text" === n) return { ok: !0, data: await o.text(), status: o.status, url: h, fromCache: !1 };
                let i = await o.blob(),
                    c = i.type || o.headers.get("content-type") || "";
                return "dataURL" === n
                    ? { ok: !0, data: await M(i), blob: i, status: o.status, url: h, fromCache: !1, mime: c }
                    : { ok: !0, data: i, status: o.status, url: h, fromCache: !1, mime: c };
            } catch (c) {
                let i = m.signal.aborted
                        ? "timeout" === m.signal.reason
                            ? "timeout"
                            : "abort"
                        : c && "object" == typeof c && "AbortError" === c.name
                          ? "abort"
                          : "network",
                    a = { ok: !1, data: null, status: 0, url: h, fromCache: !1, reason: i };
                if ((null !== r && !/^blob:/i.test(e) && l > 0 && S(r, a, l), !s)) {
                    let t = `${i}:${n}:${k(e)}`,
                        r =
                            "timeout" === i
                                ? `Timed out loading ${e} after ${o}ms. Raise the timeout option or set useProxy.`
                                : "abort" === i
                                  ? `Loading ${e} was cancelled.`
                                  : `Couldn't load ${e} (network or CORS). Try the useProxy option.`;
                    A.errorOnce(t, r);
                }
                return (C(t, a), a);
            } finally {
                (clearTimeout(g), R.delete(r));
            }
        })();
    return (null !== r && R.set(r, y), y);
}
var A,
    R,
    E,
    F,
    N = l(() => {
        (v(),
            (A = (function (e = "[SnapDOM]", { ttlMs: t = 5 * 6e4, maxEntries: r = 12 } = {}) {
                let n = new Map(),
                    o = 0;
                function i(i, l, a) {
                    if (o >= r) return;
                    let s = Date.now();
                    (n.get(l) || 0) > s ||
                        (n.set(l, s + t),
                        o++,
                        "warn" === i && console && console.warn
                            ? console.warn(`${e} ${a}`)
                            : console && console.error && console.error(`${e} ${a}`));
                }
                return {
                    warnOnce(e, t) {
                        i("warn", e, t);
                    },
                    errorOnce(e, t) {
                        i("error", e, t);
                    },
                    reset() {
                        (n.clear(), (o = 0));
                    },
                };
            })("[SnapDOM]", { ttlMs: 3 * 6e4, maxEntries: 10 })),
            (R = new Map()),
            (E = 50),
            (F = new Map()));
    });
async function _(e, t = {}) {
    if (
        /^\s*url\(\s*['"]?data:/i.test(e) ||
        /^((repeating-)?(linear|radial|conic)-gradient)\(/i.test(e) ||
        "none" === e.trim()
    )
        return e;
    let r = u(e, ("u" > typeof devicePixelRatio && devicePixelRatio) || 1) ?? c(e);
    if (!r) return e;
    let n = d(
            (function (e) {
                if (!e || /^(data|blob|about|#)/i.test(e.trim())) return e;
                try {
                    let t =
                        ("u" > typeof document && (document.baseURI || document.location?.href)) || "http://localhost/";
                    return new URL(e, t).href;
                } catch {
                    return e;
                }
            })(r),
        ),
        i = (t.useProxy || "") + "|" + n;
    if (o.background.has(i)) {
        let e = o.background.get(i);
        return e ? `url("${e}")` : "none";
    }
    try {
        let e = await $(n, { as: "dataURL", useProxy: t.useProxy });
        return e.ok ? (o.background.set(i, e.data), `url("${e.data}")`) : (o.background.set(i, null), "none");
    } catch {
        return (o.background.set(i, null), "none");
    }
}
var P = l(() => {
    (s(), v(), N());
});
function T(e, t, r, n) {
    let o;
    try {
        o = e.cssRules;
    } catch {
        return !1;
    }
    return (
        !!o &&
        (function e(t, r, n, o) {
            for (let i = 0; i < t.length; i++) {
                if (--o.budget < 0) return !1;
                let l = t[i],
                    a = l.style;
                if (a) {
                    let e = !!l.selectorText && z.test(l.selectorText);
                    for (let t = 0; t < a.length; t++) {
                        let n = a[t];
                        if (
                            (r.add(n),
                            e && o.pseudoProps.add(n),
                            a.getPropertyPriority(n) && o.importantProps.add(n),
                            n.length > 5 && ("m" === n[0] || "p" === n[0]))
                        ) {
                            let e = n.startsWith("margin")
                                ? "marginUnstable"
                                : n.startsWith("padding")
                                  ? "paddingUnstable"
                                  : null;
                            e && !o[e] && U.test(a.getPropertyValue(n)) && (o[e] = !0);
                        }
                    }
                }
                let s = l.selectorText;
                if ((s && s.includes(":has(") && (o.usesHas = !0), s && s.includes("&")))
                    for (let e = l.parentRule; e && s.includes("&"); e = e.parentRule)
                        e.selectorText && (s = s.replace(/&/g, `:is(${e.selectorText})`));
                if (s && (o.inContainer || H.test(s) || s.includes("+") || s.includes("~")))
                    for (let e of W(s, ",")) {
                        let t = e.trim();
                        t &&
                            (o.inContainer || H.test(t) || t.includes("+") || t.includes("~")) &&
                            o.shareUnsafeSels.add(t);
                    }
                if (s && s.includes(":"))
                    for (let e in B)
                        B[e].test(s) &&
                            n[e].push(
                                (function (e) {
                                    let t = e.replace(V, "").trim();
                                    return t ? t.replace(/(^|,)(\s*)(?=,|$)/g, "$1$2*") : "*";
                                })(s),
                            );
                if (l.styleSheet) {
                    if (!T(l.styleSheet, r, n, o)) return !1;
                } else if (l.cssRules && l.cssRules.length) {
                    let t = l.constructor?.name === "CSSContainerRule";
                    t && o.inContainer++;
                    let i = e(l.cssRules, r, n, o);
                    if ((t && o.inContainer--, !i)) return !1;
                }
            }
            return !0;
        })(o, t, r, n)
    );
}
function L(e, t) {
    for (let r of e)
        for (let e of r.effect?.getKeyframes?.() || [])
            for (let r of Object.keys(e))
                "offset" === r ||
                    "easing" === r ||
                    "composite" === r ||
                    "computedOffset" === r ||
                    t.add(r.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()));
}
function W(e, t) {
    if (!e.includes(t)) return [e];
    let r = [],
        n = 0,
        o = null,
        i = 0;
    for (let l = 0; l < e.length; l++) {
        let a = e[l];
        if ("\\" === a) {
            l++;
            continue;
        }
        if (o) {
            a === o && (o = null);
            continue;
        }
        '"' === a || "'" === a
            ? (o = a)
            : "(" === a || "[" === a
              ? n++
              : ")" === a || "]" === a
                ? n--
                : 0 === n && a === t && (r.push(e.slice(i, l)), (i = l + 1));
    }
    return (r.push(e.slice(i)), r);
}
function D(e, t) {
    if (!t.length) return "";
    if (t.some((e) => e.includes("&"))) return null;
    let r = t.join(",");
    try {
        return (e.matches(r), r);
    } catch {
        return null;
    }
}
var O,
    I,
    j,
    z,
    U,
    B,
    V,
    H,
    q = l(() => {
        ((O = [
            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "float",
            "clear",
            "z-index",
            "box-sizing",
            "width",
            "height",
            "min-width",
            "min-height",
            "max-width",
            "max-height",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "overflow-x",
            "overflow-y",
            "visibility",
            "opacity",
            "content-visibility",
            "vertical-align",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "flex-direction",
            "flex-wrap",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "order",
            "align-items",
            "align-self",
            "align-content",
            "justify-content",
            "justify-items",
            "justify-self",
            "row-gap",
            "column-gap",
            "grid-template-columns",
            "grid-template-rows",
            "grid-auto-flow",
            "grid-auto-columns",
            "grid-auto-rows",
            "grid-column-start",
            "grid-column-end",
            "grid-row-start",
            "grid-row-end",
            "color",
            "font-family",
            "font-size",
            "font-weight",
            "font-style",
            "font-stretch",
            "line-height",
            "letter-spacing",
            "word-spacing",
            "white-space",
            "text-align",
            "text-transform",
            "text-indent",
            "text-overflow",
            "text-shadow",
            "direction",
            "unicode-bidi",
            "writing-mode",
            "text-orientation",
            "word-break",
            "overflow-wrap",
            "tab-size",
            "list-style-type",
            "list-style-position",
            "list-style-image",
            "counter-reset",
            "counter-increment",
            "counter-set",
            "background-color",
            "background-image",
            "background-size",
            "background-position",
            "background-repeat",
            "background-clip",
            "background-origin",
            "background-attachment",
            "box-shadow",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "transform",
            "transform-origin",
            "rotate",
            "scale",
            "translate",
            "filter",
            "mix-blend-mode",
            "clip-path",
            "object-fit",
            "object-position",
            "border-collapse",
            "border-spacing",
            "table-layout",
            "caption-side",
            "empty-cells",
        ]),
            (I = [
                "color",
                "font-family",
                "font-size",
                "font-weight",
                "font-style",
                "font-stretch",
                "font-variant",
                "font-kerning",
                "font-feature-settings",
                "font-variation-settings",
                "line-height",
                "letter-spacing",
                "word-spacing",
                "white-space",
                "text-align",
                "text-align-last",
                "text-indent",
                "text-transform",
                "text-shadow",
                "text-rendering",
                "direction",
                "unicode-bidi",
                "word-break",
                "overflow-wrap",
                "writing-mode",
                "text-orientation",
                "hyphens",
                "tab-size",
                "visibility",
                "list-style-type",
                "list-style-position",
                "list-style-image",
                "border-collapse",
                "border-spacing",
                "caption-side",
                "empty-cells",
                "quotes",
                "color-scheme",
                "-webkit-text-fill-color",
                "-webkit-font-smoothing",
                "image-rendering",
            ]),
            (j = ["display", "width", "height", "min-width", "min-height"]),
            (z = /::?(?:before|after|first-letter|first-line|marker)/),
            (U = /%|\bauto\b|calc\(|var\(/i),
            (B = {
                before: /::?before\b/,
                after: /::?after\b/,
                firstLetter: /::?first-letter\b/,
                marker: /::marker\b/,
                firstLine: /::?first-line\b/,
            }),
            (V = /::?(?:before|after|first-letter|first-line|marker)\b/g),
            (H =
                /:(nth-|first-child|last-child|only-|first-of-type|last-of-type|empty|hover|focus|active|target|checked|indeterminate|disabled|enabled|read-only|read-write|placeholder-shown|autofill|valid|invalid|user-valid|user-invalid|in-range|out-of-range|required|optional|default|link|any-link|scope|defined|modal|fullscreen|picture-in-picture|playing|paused|dir\(|lang\(|has\()/));
    });
function G(e) {
    return (Y.add(e), e.setAttribute("data-snapdom-internal", ""), e);
}
function X(e) {
    return Y.has(e);
}
var Y,
    J = l(() => {
        Y = new WeakSet();
    });
function Q(e) {
    if (((e = String(e).toLowerCase()), ea.has(e))) {
        let t = {};
        return (o.defaultStyle.set(e, t), t);
    }
    if (o.defaultStyle.has(e)) return o.defaultStyle.get(e);
    let t = [...document.querySelectorAll("#snapdom-sandbox")].find(X);
    t ||
        (G((t = document.createElement("div"))),
        (t.id = "snapdom-sandbox"),
        t.setAttribute("data-snapdom-sandbox", "true"),
        t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.left = "-9999px"),
        (t.style.top = "-9999px"),
        (t.style.width = "0px"),
        (t.style.height = "0px"),
        (t.style.overflow = "hidden"),
        document.body.appendChild(t));
    let r = document.createElement(e.includes("-") ? "span" : e);
    ((r.style.all = "initial"), t.appendChild(r));
    let n = getComputedStyle(r),
        i = {};
    for (let e of n) {
        if (K(e)) continue;
        let t = n.getPropertyValue(e);
        i[e] = t;
    }
    for (let e of O) e in i || K(e) || (i[e] = n.getPropertyValue(e));
    return (t.removeChild(r), o.defaultStyle.set(e, i), i);
}
function K(e) {
    let t = ed.get(e);
    if (void 0 === t) {
        let r = String(e).toLowerCase();
        ((t = eu.has(r) || ec.test(r) || es.test(r)), ed.set(e, t));
    }
    return t;
}
function Z(e, t) {
    let r = ey.get(e);
    if (void 0 === r || t[r] !== t[e]) return !1;
    let n = t["writing-mode"];
    if (n && "horizontal-tb" !== n) return !1;
    let o = t.direction;
    return !(o && "ltr" !== o);
}
function ee(e, t) {
    return !ep.has(e) && ("inline" === t || ef.has(e) || eh.has(e));
}
function et(e, t, r = !0, n = !1) {
    if (((t = String(t || "").toLowerCase()), ea.has(t))) return "";
    let o = [],
        i = Q(t),
        l = (e.display || "").toLowerCase(),
        a = "inline" === l,
        s = ee(t, l),
        c = e["text-wrap-mode"] || e["white-space"] || "",
        u = "nowrap" === c || "pre" === c,
        d = s && r && !(s && r && !a && u),
        f = !1;
    for (let t in e) {
        if (K(t) || Z(t, e)) continue;
        let r = e[t];
        if (d) {
            if (em.has(t)) continue;
            if (eg.has(t)) {
                r && r !== i[t] && (o.push(`${t}:${r}`), "auto" !== r && (f = !0));
                continue;
            }
        }
        if (r && r !== i[t]) {
            if (!u && ("width" === t || "inline-size" === t) && r.endsWith("px") && r.includes(".")) {
                let e = parseFloat(r);
                if (Number.isFinite(e)) {
                    o.push(`${t}:${(e + eb).toFixed(3)}px`);
                    continue;
                }
            }
            o.push(`${t}:${r}`);
        }
    }
    if (d && !a && !n && !f) {
        let t = e.width;
        t && "auto" !== t && t !== i.width && o.push(`min-width:${t}`);
    }
    return (o.sort(), o.join(";"));
}
function er(e) {
    let t = Array.from(new Set(e.values())).filter(Boolean).sort(),
        r = new Map(),
        n = 1;
    for (let e of t) r.set(e, `c${n++}`);
    return r;
}
function en(e, t = null) {
    let r = () => {
        let e = { length: 0, getPropertyValue: () => "", item: () => "" };
        return ((e[Symbol.iterator] = function* () {}), e);
    };
    if (e?.nodeType !== 1) {
        let n = "u" > typeof window ? window : null;
        if (n && "function" == typeof n.getComputedStyle)
            try {
                return n.getComputedStyle(e, t) || r();
            } catch {}
        return r();
    }
    let n = o.computedStyle.get(e);
    n || ((n = new Map()), o.computedStyle.set(e, n));
    let i = n.get(t);
    if (!i) {
        let o = (function (e) {
                try {
                    let t = e?.ownerDocument;
                    if (!t) return "u" > typeof window ? window : null;
                    let r = t.defaultView;
                    if (r && "function" == typeof r.getComputedStyle) return r;
                    if ("u" > typeof window && window.frames)
                        for (let e = 0; e < window.frames.length; e++)
                            try {
                                if (window.frames[e]?.document === t) return window.frames[e];
                            } catch {}
                } catch {}
                return "u" > typeof window ? window : null;
            })(e),
            l = null;
        try {
            l = o && "function" == typeof o.getComputedStyle ? o.getComputedStyle(e, t) : null;
        } catch {}
        if (!l && "u" > typeof window && "function" == typeof window.getComputedStyle)
            try {
                e.ownerDocument === document && (l = window.getComputedStyle(e, t));
            } catch {}
        ((i = l || r()), n.set(t, i));
    }
    return i;
}
function eo(e, t = null) {
    let r = {};
    for (let n of t || e) {
        let t = e.getPropertyValue(n);
        t && (r[n] = t);
    }
    for (let e of ex) {
        let t = r[`border-${e}-style`],
            n = r[`border-${e}-width`];
        ("none" === t || "hidden" === t || "0px" === n) &&
            (delete r[`border-${e}-style`], delete r[`border-${e}-width`], delete r[`border-${e}-color`]);
    }
    return r;
}
function ei(e) {
    let t = [],
        r = 0,
        n = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        ("(" === i && r++, ")" === i && r--, "," === i && 0 === r && (t.push(e.slice(n, o).trim()), (n = o + 1)));
    }
    return (t.push(e.slice(n).trim()), t);
}
var el,
    ea,
    es,
    ec,
    eu,
    ed,
    ef,
    eh,
    ep,
    em,
    eg,
    ey,
    eb,
    ew,
    ex,
    ev = l(() => {
        (s(),
            q(),
            J(),
            (el = new Set(["meta", "script", "noscript", "title", "link", "template"])),
            (ea = new Set([
                "meta",
                "link",
                "style",
                "title",
                "noscript",
                "script",
                "template",
                "g",
                "defs",
                "use",
                "marker",
                "mask",
                "clipPath",
                "pattern",
                "symbol",
                "path",
                "polygon",
                "polyline",
                "line",
                "circle",
                "ellipse",
                "rect",
                "filter",
                "lineargradient",
                "radialgradient",
                "stop",
            ])),
            (es = /(?:^|-)(animation|transition)(?:-|$)/i),
            (ec =
                /^(--.+|view-timeline|scroll-timeline|animation-trigger|offset-|position-try|app-region|interactivity|overlay|view-transition|-webkit-locale|-webkit-user-(?:drag|modify)|-webkit-tap-highlight-color|-webkit-text-security)$/i),
            (eu = new Set([
                "cursor",
                "pointer-events",
                "touch-action",
                "user-select",
                "print-color-adjust",
                "speak",
                "reading-flow",
                "reading-order",
                "anchor-name",
                "anchor-scope",
                "container-name",
                "container-type",
                "timeline-scope",
                "zoom",
                "stroke-color",
            ])),
            (ed = new Map()),
            (ef = new Set(["span", "small", "em", "strong", "b", "i", "u", "s", "code", "cite", "mark", "sub", "sup"])),
            (eh = new Set(["table", "thead", "tbody", "tfoot", "tr", "td", "th"])),
            (ep = new Set([
                "img",
                "video",
                "canvas",
                "svg",
                "iframe",
                "embed",
                "object",
                "input",
                "textarea",
                "select",
            ])),
            (em = new Set(["width", "max-width", "inline-size", "max-inline-size"])),
            (eg = new Set(["min-width", "min-inline-size"])),
            (ey = new Map(
                Object.entries({
                    "block-size": "height",
                    "inline-size": "width",
                    "min-block-size": "min-height",
                    "min-inline-size": "min-width",
                    "max-block-size": "max-height",
                    "max-inline-size": "max-width",
                    "margin-block-start": "margin-top",
                    "margin-block-end": "margin-bottom",
                    "margin-inline-start": "margin-left",
                    "margin-inline-end": "margin-right",
                    "padding-block-start": "padding-top",
                    "padding-block-end": "padding-bottom",
                    "padding-inline-start": "padding-left",
                    "padding-inline-end": "padding-right",
                    "inset-block-start": "top",
                    "inset-block-end": "bottom",
                    "inset-inline-start": "left",
                    "inset-inline-end": "right",
                    "border-block-start-width": "border-top-width",
                    "border-block-start-style": "border-top-style",
                    "border-block-start-color": "border-top-color",
                    "border-block-end-width": "border-bottom-width",
                    "border-block-end-style": "border-bottom-style",
                    "border-block-end-color": "border-bottom-color",
                    "border-inline-start-width": "border-left-width",
                    "border-inline-start-style": "border-left-style",
                    "border-inline-start-color": "border-left-color",
                    "border-inline-end-width": "border-right-width",
                    "border-inline-end-style": "border-right-style",
                    "border-inline-end-color": "border-right-color",
                    "border-start-start-radius": "border-top-left-radius",
                    "border-start-end-radius": "border-top-right-radius",
                    "border-end-start-radius": "border-bottom-left-radius",
                    "border-end-end-radius": "border-bottom-right-radius",
                    "overflow-block": "overflow-y",
                    "overflow-inline": "overflow-x",
                    "overscroll-behavior-block": "overscroll-behavior-y",
                    "overscroll-behavior-inline": "overscroll-behavior-x",
                    "contain-intrinsic-block-size": "contain-intrinsic-height",
                    "contain-intrinsic-inline-size": "contain-intrinsic-width",
                }),
            )),
            (eb = 0.001),
            (ew = new Set(["inline-block", "inline-flex", "inline-grid", "inline-table", "inline-flow-root", "table"])),
            (ex = ["top", "right", "bottom", "left"]));
    });
function eS(e = 1e3) {
    return "function" != typeof requestAnimationFrame ||
        ("u" > typeof document && "hidden" === document.visibilityState)
        ? Promise.resolve()
        : new Promise((t) => {
              let r = !1,
                  n = () => {
                      r || ((r = !0), t());
                  };
              try {
                  requestAnimationFrame(n);
              } catch {
                  n();
                  return;
              }
              setTimeout(n, e);
          });
}
function eM() {
    if (typeof navigator > "u") return !1;
    if (navigator.userAgentData) return "iOS" === navigator.userAgentData.platform;
    let e = navigator.userAgent || "",
        t = /iPhone|iPad|iPod/.test(e),
        r = navigator.maxTouchPoints > 2 && /Macintosh/.test(e);
    return t || r;
}
function ek() {
    if (typeof navigator > "u") return !1;
    let e = navigator.userAgent || "",
        t = e.toLowerCase(),
        r =
            t.includes("safari") &&
            !t.includes("chrome") &&
            !t.includes("crios") &&
            !t.includes("fxios") &&
            !t.includes("android"),
        n = /applewebkit/i.test(e),
        o = /mobile/i.test(e),
        i = !/safari/i.test(e),
        l = /(micromessenger|wxwork|wecom|windowswechat|macwechat)/i.test(e),
        a = /(baiduboxapp|baidubrowser|baidusearch|baiduboxlite)/i.test(t),
        s = /ipad|iphone|ipod/.test(t) && n;
    return r || (n && o && i) || l || a || s;
}
function eC() {
    return !(typeof navigator > "u") && (navigator.userAgent || "").toLowerCase().includes("firefox");
}
var e$,
    eA,
    eR = l(() => {
        ((e$ = 16), (eA = 40));
    });
function eE(e, t, r) {
    let n = e && "object" == typeof e && (e.options || e);
    n && n.debug && (void 0 !== r ? console.warn("[SnapDOM]", t, r) : console.warn("[SnapDOM]", t));
}
function eF(e, t, r, n) {
    let o = e && e.warnings;
    o && o.length < eN && o.push(void 0 === n ? { code: t, message: r } : { code: t, message: r, detail: n });
}
var eN,
    e_ = l(() => {
        eN = 50;
    }),
    eP = l(() => {
        (P(), ev(), eR(), v(), e_());
    }),
    eT = {};
function eL(e, t) {
    let r = ["x", "y", "width", "height"].map((e) => Number(t?.[e]));
    if (!r.every(Number.isFinite) || r[2] <= 0 || r[3] <= 0)
        throw RangeError("[SnapDOM] crop needs finite x/y and a positive width/height.");
    let n = e.match(/<svg\b[^>]*>/i);
    if (!n) throw Error("[SnapDOM] Only SVG captures can be cropped.");
    let o = n[0],
        i = String((o.match(/\bviewBox="([^"]+)"/i) || [])[1] || "")
            .trim()
            .split(/[\s,]+/)
            .map(Number);
    if (4 !== i.length || !i.every(Number.isFinite) || i[2] <= 0 || i[3] <= 0)
        throw Error("[SnapDOM] Can't crop: the SVG has no valid viewBox.");
    let [l, a, s, c] = i,
        u = Math.max(l, r[0]),
        d = Math.max(a, r[1]),
        f = Math.min(l + s, r[0] + r[2]),
        h = Math.min(a + c, r[1] + r[3]);
    if (!(f > u) || !(h > d)) throw RangeError("[SnapDOM] The crop area does not intersect the capture.");
    let p = parseFloat((o.match(/\bwidth="([\d.]+)/i) || [])[1]),
        m = parseFloat((o.match(/\bheight="([\d.]+)/i) || [])[1]),
        g = Number.isFinite(p) && p > 0 ? p / s : 1,
        y = Number.isFinite(m) && m > 0 ? m / c : 1,
        b = Math.max(1, (f - u) * g),
        w = Math.max(1, (h - d) * y),
        x = o
            .replace(/(\bwidth=")[^"]*/i, `$1${b}`)
            .replace(/(\bheight=")[^"]*/i, `$1${w}`)
            .replace(/(\bviewBox=")[^"]*/i, `$1${u} ${d} ${f - u} ${h - d}`);
    return e.replace(o, x);
}
function eW(e) {
    return "string" == typeof e && /^data:image\/svg\+xml/i.test(e);
}
function eD(e) {
    let t = e.indexOf(",");
    return t >= 0 ? decodeURIComponent(e.slice(t + 1)) : "";
}
function eO(e) {
    let t = e.indexOf(",");
    if (t < 0) return "";
    let r = e.slice(t + 1, t + 1201).replace(/%[0-9A-Fa-f]?$/, "");
    try {
        return decodeURIComponent(r);
    } catch {
        return "";
    }
}
function eI(e) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
}
function ej(e) {
    let t = [],
        r = "",
        n = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        ("(" === i && n++,
            ")" === i && (n = Math.max(0, n - 1)),
            ";" === i && 0 === n ? (t.push(r), (r = "")) : (r += i));
    }
    return (r.trim() && t.push(r), t.map((e) => e.trim()).filter(Boolean));
}
function ez(e) {
    let t = ej(e),
        r = null,
        n = null,
        o = null,
        i = [];
    for (let e of t) {
        let t = e.indexOf(":");
        if (t < 0) continue;
        let l = e.slice(0, t).trim().toLowerCase(),
            a = e.slice(t + 1).trim();
        "box-shadow" === l ? (o = a) : "filter" === l ? (r = a) : "-webkit-filter" === l ? (n = a) : i.push([l, a]);
    }
    if (o) {
        let e = (function (e) {
            let t = [],
                r = "",
                n = 0;
            for (let o = 0; o < e.length; o++) {
                let i = e[o];
                ("(" === i && n++,
                    ")" === i && (n = Math.max(0, n - 1)),
                    "," === i && 0 === n ? (t.push(r.trim()), (r = "")) : (r += i));
            }
            r.trim() && t.push(r.trim());
            let o = [];
            for (let e of t) {
                if (/\binset\b/i.test(e)) continue;
                let [t = "0px", r = "0px", n = "0px"] = e.match(/-?\d+(?:\.\d+)?px/gi) || [];
                n = `${parseFloat(n) / 2}px`;
                let i = e
                        .replace(/-?\d+(?:\.\d+)?px/gi, "")
                        .replace(/\binset\b/gi, "")
                        .trim()
                        .replace(/\s{2,}/g, " "),
                    l = !!i && "," !== i;
                o.push(`drop-shadow(${t} ${r} ${n}${l ? ` ${i}` : ""})`);
            }
            return o.join(" ");
        })(o);
        e && ((r = r ? `${r} ${e}` : e), (n = n ? `${n} ${e}` : e));
    }
    let l = [...i];
    return (r && l.push(["filter", r]), n && l.push(["-webkit-filter", n]), l.map(([e, t]) => `${e}:${t}`).join(";"));
}
async function eU(e) {
    if (!/(?:box-shadow|text-shadow)\s*:[^;"}]*px/i.test(e)) return { svg: e, naturalOnly: !1 };
    let { native: t, flippedY: r } = await (eQ ||
        (eQ = (async () => {
            try {
                let e = new Image();
                ((e.decoding = "sync"),
                    (e.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="20"><foreignObject width="8" height="20"><div xmlns="http://www.w3.org/1999/xhtml" style="width:4px;height:4px;margin-top:8px;background:#000;box-shadow:0 8px 0 0 #000"></div></foreignObject></svg>')}`),
                    await e.decode());
                let t = document.createElement("canvas");
                ((t.width = 8), (t.height = 20));
                let r = t.getContext("2d", { willReadFrequently: !0 });
                r.drawImage(e, 0, 0);
                let n = r.getImageData(2, 18, 1, 1).data[3] > 128,
                    o = r.getImageData(2, 2, 1, 1).data[3] > 128;
                return { native: n || o, flippedY: o && !n };
            } catch {
                return { native: !1, flippedY: !1 };
            }
        })()));
    try {
        var n;
        let o,
            i = e;
        return (
            t ||
                (i = i
                    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (e, t) =>
                        e.replace(
                            t,
                            t.replace(/([^{}]+)\{([^}]*)\}/g, (e, t, r) => `${t}{${ez(r)}}`),
                        ),
                    )
                    .replace(/style=(['"])([\s\S]*?)\1/gi, (e, t, r) => `style=${t}${ez(r)}${t}`)),
            r &&
                ((n = i),
                (o = (e) =>
                    ej(e)
                        .map((e) => {
                            let r = e.indexOf(":");
                            if (r < 0) return e;
                            let n = e.slice(0, r).trim().toLowerCase();
                            return "text-shadow" === n || (t && "box-shadow" === n)
                                ? `${n}:${(function (e) {
                                      let t = [],
                                          r = 0,
                                          n = 0;
                                      for (let o = 0; o < e.length; o++) {
                                          let i = e[o];
                                          "(" === i
                                              ? r++
                                              : ")" === i
                                                ? (r = Math.max(0, r - 1))
                                                : "," === i && 0 === r && (t.push(e.slice(n, o)), (n = o + 1));
                                      }
                                      return (
                                          t.push(e.slice(n)),
                                          t
                                              .map((e) => {
                                                  let t = 0,
                                                      r = 0,
                                                      n = "",
                                                      o = 0;
                                                  for (; o < e.length;) {
                                                      let i = e[o];
                                                      if (
                                                          ("(" === i ? t++ : ")" === i && (t = Math.max(0, t - 1)),
                                                          0 === t && (0 === o || " " === e[o - 1]))
                                                      ) {
                                                          let t = /^-?\d*\.?\d+px/.exec(e.slice(o));
                                                          if (t) {
                                                              ((n += 2 == ++r ? `${-parseFloat(t[0])}px` : t[0]),
                                                                  (o += t[0].length));
                                                              continue;
                                                          }
                                                      }
                                                      ((n += i), o++);
                                                  }
                                                  return n;
                                              })
                                              .join(",")
                                      );
                                  })(e.slice(r + 1))}`
                                : e;
                        })
                        .join(";")),
                (i = (n = n.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (e, t) =>
                    e.replace(
                        t,
                        t.replace(/([^{}]+)\{([^}]*)\}/g, (e, t, r) => `${t}{${o(r)}}`),
                    ),
                )).replace(/style=(['"])([\s\S]*?)\1/gi, (e, t, r) => `style=${t}${o(r)}${t}`))),
            { svg: i, naturalOnly: !0 }
        );
    } catch {
        return { svg: e, naturalOnly: !0 };
    }
}
async function eB(e, t, r) {
    (G(e),
        (e.style.cssText = "position:fixed;left:-99999px;top:-99999px;pointer-events:none"),
        document.body.appendChild(e));
    try {
        if (!r) return (await eK(), await eK(), !1);
        let n = performance.now() + (t ? 600 : 150);
        for (;;) {
            let t;
            try {
                t = r(e);
            } catch {
                return !1;
            }
            if (t) return !0;
            if (performance.now() > n) return !1;
            await eK();
        }
    } finally {
        try {
            e.remove();
        } catch {}
    }
}
function eV(e) {
    if (typeof document > "u" || !document.body) return new Image();
    if (e0 && !e0.contentDocument) {
        try {
            e0.remove();
        } catch {}
        e0 = null;
    }
    if (e0 && e1 > eZ && 0 === e2) {
        try {
            e0.remove();
        } catch {}
        e0 = null;
    }
    if (!e0) {
        let e = document.createElement("iframe");
        (G(e),
            e.setAttribute("aria-hidden", "true"),
            (e.style.cssText =
                "position:absolute;left:-9999px;top:0;width:0;height:0;border:0;visibility:hidden;pointer-events:none"));
        try {
            document.body.appendChild(e);
        } catch {}
        if (e.contentDocument) ((e0 = e), (e1 = 0));
        else {
            try {
                e.remove();
            } catch {}
            return new Image();
        }
    }
    ((e1 += e.length), (e2 += 1));
    let t = e0.contentDocument.createElement("img");
    return ((t.__snapdomDecodeFrame = !0), t);
}
function eH(e, t = !1) {
    e &&
        e.__snapdomDecodeFrame &&
        ((e.__snapdomDecodeFrame = !1),
        (e2 = Math.max(0, e2 - 1)),
        t && (e3 = !0),
        e3 && 0 === e2 && (e0?.remove(), (e0 = null), (e1 = 0), (e3 = !1)));
}
function eq(e, t) {
    return ((e.loading = "eager"), (e.decoding = "sync"), (e.crossOrigin = "anonymous"), (e.src = t), e.decode());
}
function eG(e, t, r, n, o) {
    if (!t.naturalWidth) return void e.drawImage(t, 0, 0, r, n);
    let i = r * n,
        l =
            i > e9 &&
            !(function (e) {
                if ("string" != typeof e) return !1;
                let t = e.indexOf(",") + 1,
                    r = Math.max(48, Math.floor((e.length - t) / 200)),
                    n = 0,
                    o = 0;
                for (let i = t; i + 48 <= e.length; i += r) {
                    let t = e.slice(i, i + 48);
                    (n++, e5.some((e) => t.includes(e)) || o++);
                }
                return 2 * o > n;
            })(o)
                ? Math.min(e4, Math.ceil(i / e6))
                : 1;
    if (1 === l) return void e.drawImage(t, 0, 0, r, n);
    let a = t.naturalWidth,
        s = t.naturalHeight / n;
    for (let o = 0; o < l; o++) {
        let i = Math.round((o * n) / l),
            c = o === l - 1 ? n : Math.round(((o + 1) * n) / l);
        e.drawImage(t, 0, i * s, a, (c - i) * s, 0, i, r, c - i);
    }
}
async function eX(e, t) {
    let { width: r, height: n, scale: o = 1, dpr: i = 1, meta: l = {}, backgroundColor: a, crop: s = null } = t,
        c = "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement ? e : null,
        u = e,
        d = !1,
        f = !1;
    if (s && !eW(e)) throw RangeError("[SnapDOM] Only SVG captures can be cropped.");
    if (eW(e)) {
        let r = (eO(e).match(/<svg\b[^>]*>/i) || [])[0] || "",
            n = parseFloat((r.match(/\bwidth="([\d.]+)/i) || [])[1]),
            o = parseFloat((r.match(/\bheight="([\d.]+)/i) || [])[1]),
            i =
                Number.isFinite(n) &&
                Number.isFinite(o) &&
                n > 0 &&
                o > 0 &&
                1 > Math.min(1, eY / n, eY / o, Math.sqrt(eJ / (n * o)));
        if (s || i || ek())
            try {
                let r = eD(e);
                if ((s && (r = eL(r, s)), ek())) {
                    let e = await eU(r);
                    ((r = e.svg), (d = e.naturalOnly), (f = /@font-face|data:image\//i.test(r)));
                }
                ((i || s) &&
                    (r = (function (e, t) {
                        try {
                            let r = e.match(/<svg\b[^>]*>/i);
                            if (!r) return e;
                            let n = r[0],
                                o = parseFloat((n.match(/\bwidth="([\d.]+)/i) || [])[1]),
                                i = parseFloat((n.match(/\bheight="([\d.]+)/i) || [])[1]);
                            if (!Number.isFinite(o) || !Number.isFinite(i) || o <= 0 || i <= 0) return e;
                            let l = Math.min(1, eY / o, eY / i, Math.sqrt(eJ / (o * i)));
                            if (l >= 1) return e;
                            let a = Math.max(1, Math.floor(o * l)),
                                s = Math.max(1, Math.floor(i * l));
                            return (
                                eF(
                                    t,
                                    "raster-clamp",
                                    `capture ${Math.round(o)}x${Math.round(i)}px exceeds decode limits; downscaled to ${a}x${s}px`,
                                ),
                                console.warn(
                                    `[SnapDOM] ${Math.round(o)}\xd7${Math.round(i)}px is too large for the browser to draw; scaled down to ${a}\xd7${s}px. For full size, export ${"function" == typeof CompressionStream ? "a PNG blob, " : ""}an SVG, or crop.`,
                                ),
                                e.replace(
                                    n,
                                    n.replace(/(\bwidth=")[\d.]+/i, `$1${a}`).replace(/(\bheight=")[\d.]+/i, `$1${s}`),
                                )
                            );
                        } catch {
                            return e;
                        }
                    })(r, t.__session)),
                    (u = eI(r)));
            } catch (t) {
                if (s) throw t;
                u = e;
            }
    }
    let m = c || eV(u);
    try {
        c || (await eq(m, u));
    } catch (r) {
        if (!m.__snapdomDecodeFrame) throw r;
        let e = m;
        ((m = eV(u)), eH(e));
        try {
            await eq(m, u);
        } catch (e) {
            throw (eH(m, t.__releaseDecodeFrame), e);
        }
    }
    try {
        let e, g;
        !c &&
            !ek() &&
            !eC() &&
            eW(u) &&
            /(?:%40|@)font-face/i.test(u) &&
            (await new Promise((e) => {
                let t = new MessageChannel();
                ((t.port1.onmessage = () => {
                    (t.port1.close(), t.port2.close(), e());
                }),
                    t.port2.postMessage(0));
            }));
        let y =
                ek() && !c
                    ? (((e = document.createElement("canvas")).width = 16),
                      (e.height = 16),
                      (g = e.getContext("2d", { willReadFrequently: !0 }))
                          ? (e) => {
                                (g.clearRect(0, 0, 16, 16), g.drawImage(e, 0, 0, 16, 16));
                                let t = g.getImageData(0, 0, 16, 16).data;
                                for (let e = 3; e < t.length; e += 4) if (t[e] > 0) return !0;
                                return !1;
                            }
                          : null)
                    : null,
            b = !1;
        y && (b = await eB(m, f, y));
        let w = c ? c.width : m.naturalWidth,
            x = c ? c.height : m.naturalHeight,
            v = s ? w : Number.isFinite(l.vbW) ? l.vbW : Number.isFinite(l.w0) ? l.w0 : w,
            S = s ? x : Number.isFinite(l.vbH) ? l.vbH : Number.isFinite(l.h0) ? l.h0 : x,
            M,
            k,
            C = Number.isFinite(r),
            $ = Number.isFinite(n);
        if (C && $) ((M = Math.max(1, r)), (k = Math.max(1, n)));
        else if (C) {
            let e = r / Math.max(1, v);
            ((M = r), (k = S * e));
        } else if ($) {
            let e = n / Math.max(1, S);
            ((k = n), (M = v * e));
        } else {
            let e = c && Number.isFinite(l.vbW) && Number.isFinite(l.vbH);
            ((M = e ? l.vbW : w), (k = e ? l.vbH : x));
        }
        C || $ || ((M *= o), (k *= o));
        let A = M * i,
            R = k * i,
            E = Math.max(A / eY, R / eY, Math.sqrt((A * R) / eJ));
        E > 1 &&
            (eF(
                t.__session,
                "canvas-clamp",
                `output ${Math.round(A)}x${Math.round(R)}px exceeds canvas limits; downscaled`,
            ),
            console.warn(
                `[SnapDOM] ${Math.round(A)}\xd7${Math.round(R)}px is larger than a canvas allows; scaled down. For full size, export ${"function" == typeof CompressionStream ? "a PNG blob, " : ""}an SVG, or crop.`,
            ),
            (M /= E),
            (k /= E));
        let F = p(t.canvas) && h(t.canvas, "canvas") ? t.canvas : document.createElement("canvas");
        ((F.width = Math.max(1, M * i)),
            (F.height = Math.max(1, k * i)),
            (F.style.width = `${M}px`),
            (F.style.height = `${k}px`));
        let N = F.getContext("2d");
        if (!N) throw Error("[SnapDOM] The canvas you passed has no 2D context (is it already used for WebGL?).");
        let _ = null,
            P = t.__layoutZoom || 1;
        if (!c && P > 1 && eC()) {
            let e = (P * v) / (M * i),
                t = Math.round(M * i * e),
                r = Math.round(k * i * e);
            e > 1.01 && t <= eY && r <= eY && t * r <= eJ && (_ = { w: t, h: r });
        }
        let T = () => {
            if (
                (1 !== i && N.scale(i, i),
                a && (N.save(), (N.fillStyle = a), N.fillRect(0, 0, M, k), N.restore()),
                d && (Math.round(M * i) !== w || Math.round(k * i) !== x))
            ) {
                let e = document.createElement("canvas");
                ((e.width = w), (e.height = x), eG(e.getContext("2d"), m, w, x, u), N.drawImage(e, 0, 0, M, k));
            } else {
                if ((N.save(), N.setTransform(1, 0, 0, 1, 0, 0), _)) {
                    let e = document.createElement("canvas");
                    for (e.width = _.w, e.height = _.h, eG(e.getContext("2d"), m, _.w, _.h, u); e.width > M * i * 2;) {
                        let t = document.createElement("canvas");
                        ((t.width = Math.ceil(e.width / 2)),
                            (t.height = Math.ceil(e.height / 2)),
                            t.getContext("2d").drawImage(e, 0, 0, t.width, t.height),
                            (e = t));
                    }
                    ((N.imageSmoothingQuality = "high"), N.drawImage(e, 0, 0, M * i, k * i));
                } else eG(N, m, M * i, k * i, u);
                N.restore();
            }
        };
        if ((T(), y && b && f)) {
            let e = !0;
            try {
                e = y(m);
            } catch {}
            if (!e) {
                let t = performance.now() + 600;
                do {
                    await eK();
                    try {
                        e = y(m);
                    } catch {
                        break;
                    }
                } while (!e && performance.now() < t);
                ((F.width = F.width), T());
            }
        }
        return F;
    } finally {
        eH(m, t.__releaseDecodeFrame);
    }
}
a(eT, {
    MAX_RASTER_AREA: () => eJ,
    MAX_RASTER_SIDE: () => eY,
    cropSvgText: () => eL,
    decodeSvgFromDataURL: () => eD,
    encodeSvgToDataURL: () => eI,
    fixSafariShadows: () => eU,
    peekSvgHeader: () => eO,
    toCanvas: () => eX,
});
var eY,
    eJ,
    eQ,
    eK,
    eZ,
    e0,
    e1,
    e2,
    e3,
    e9,
    e6,
    e4,
    e5,
    e8 = l(() => {
        (eR(),
            e_(),
            v(),
            J(),
            (eY = ek() ? 16384 : 32767),
            (eJ = 0x10000000),
            (eQ = null),
            (eK = () =>
                new Promise((e) => {
                    (requestAnimationFrame(e), setTimeout(e, 50));
                })),
            (eZ = 0x1800000),
            (e0 = null),
            (e1 = 0),
            (e2 = 0),
            (e3 = !1),
            (e9 = 4e6),
            (e6 = 2e6),
            (e4 = 8),
            (e5 = ["%3C", "%3E", "%20", "%7B", "%7D", "%3B"]));
    }),
    e7 = {};
async function te(e, t) {
    let r = await eX(e, t),
        n =
            r.width * r.height <= 2e6
                ? r.toDataURL(`image/${t.format}`, t.quality)
                : await new Promise((e) => {
                      let n = () => e(r.toDataURL(`image/${t.format}`, t.quality));
                      try {
                          r.toBlob(
                              (t) => {
                                  if (!t) return n();
                                  let r = new FileReader();
                                  ((r.onload = () => e(String(r.result || ""))), (r.onerror = n), r.readAsDataURL(t));
                              },
                              `image/${t.format}`,
                              t.quality,
                          );
                      } catch {
                          n();
                      }
                  }),
        o = new Image();
    return (
        (o.src = n),
        ek()
            ? await o.decode()
            : await new Promise((e, t) => {
                  if (o.complete && o.naturalWidth) return e();
                  ((o.onload = e), (o.onerror = t));
              }),
        (o.style.width = `${r.width / t.dpr}px`),
        (o.style.height = `${r.height / t.dpr}px`),
        o
    );
}
a(e7, { rasterize: () => te });
var tt = l(() => {
        (e8(), eR());
    }),
    tr = {};
async function tn(e, t) {
    let { scale: r = 1, width: n, height: o, meta: i = {} } = t,
        l = Number.isFinite(n),
        a = Number.isFinite(o),
        s = (Number.isFinite(r) && 1 !== r) || l || a;
    if (ek() && s)
        try {
            let { svg: t } = await eU(eD(e)),
                s = (t.match(/<svg\b[^>]*>/i) || [])[0] || "",
                c = parseFloat((s.match(/\bwidth="([\d.]+)/i) || [])[1]),
                u = parseFloat((s.match(/\bheight="([\d.]+)/i) || [])[1]);
            if (!Number.isFinite(c) || !Number.isFinite(u)) throw Error("The SVG has no size.");
            let d = Number.isFinite(i.vbW) ? i.vbW : Number.isFinite(i.w0) ? i.w0 : c,
                f = Number.isFinite(i.vbH) ? i.vbH : Number.isFinite(i.h0) ? i.h0 : u,
                h,
                p;
            l && a
                ? ((h = n), (p = o))
                : l
                  ? ((h = n), (p = Math.max(1, Math.round((n / Math.max(1, d)) * f))))
                  : a
                    ? ((p = o), (h = Math.max(1, Math.round((o / Math.max(1, f)) * d))))
                    : ((h = Math.max(1, Math.round(c * r))), (p = Math.max(1, Math.round(u * r))));
            let m = t.replace(/width="[^"]*"/, `width="${h}"`).replace(/height="[^"]*"/, `height="${p}"`),
                g = new Image();
            return (
                (g.decoding = "sync"),
                (g.loading = "eager"),
                (g.src = eI(m)),
                await g.decode(),
                (g.style.width = `${h}px`),
                (g.style.height = `${p}px`),
                g
            );
        } catch (r) {
            return (
                eF(t.__session, "safari-png-fallback", "Safari vector toImg failed; using PNG", r),
                eE(t, "Safari couldn't show the SVG; used a PNG.", r),
                te(e, { ...t, format: "png", quality: 1, meta: i })
            );
        }
    let c = e,
        u = !1;
    if (!l && !a && 1 !== r && "string" == typeof e && e.startsWith("data:image/svg+xml"))
        try {
            let t = eD(e),
                n = (t.match(/<svg\b[^>]*>/i) || [])[0] || "",
                o = Number((n.match(/\bwidth="([\d.]+)"/i) || [])[1]),
                i = Number((n.match(/\bheight="([\d.]+)"/i) || [])[1]);
            if (o > 0 && i > 0) {
                let e = n
                    .replace(/\bwidth="[^"]*"/i, `width="${Math.max(1, Math.round(o * r))}"`)
                    .replace(/\bheight="[^"]*"/i, `height="${Math.max(1, Math.round(i * r))}"`);
                ((c = eI(t.replace(n, e))), (u = !0));
            }
        } catch {}
    let d = new Image();
    ((d.decoding = "sync"), (d.loading = "eager"), (d.src = c));
    try {
        await d.decode();
    } catch (t) {
        if (!u) throw t;
        ((d.src = e), (u = !1), await d.decode());
    }
    if (l && a) ((d.style.width = `${n}px`), (d.style.height = `${o}px`));
    else if (l) {
        let e = Number.isFinite(i.vbW) ? i.vbW : Number.isFinite(i.w0) ? i.w0 : d.naturalWidth,
            t = Number.isFinite(i.vbH) ? i.vbH : Number.isFinite(i.h0) ? i.h0 : d.naturalHeight,
            r = n / Math.max(1, e);
        ((d.style.width = `${n}px`), (d.style.height = `${Math.max(1, Math.round(t * r))}px`));
    } else if (a) {
        let e = Number.isFinite(i.vbW) ? i.vbW : Number.isFinite(i.w0) ? i.w0 : d.naturalWidth,
            t = o / Math.max(1, Number.isFinite(i.vbH) ? i.vbH : Number.isFinite(i.h0) ? i.h0 : d.naturalHeight);
        ((d.style.height = `${o}px`), (d.style.width = `${Math.max(1, Math.round(e * t))}px`));
    } else {
        let n = Math.max(1, Math.round(d.naturalWidth * (u ? 1 : r))),
            o = Math.max(1, Math.round(d.naturalHeight * (u ? 1 : r)));
        if (
            ((d.style.width = `${n}px`),
            (d.style.height = `${o}px`),
            !u && 1 !== r && "string" == typeof e && e.startsWith("data:image/svg+xml"))
        )
            try {
                let t = decodeURIComponent(e.split(",")[1])
                    .replace(/width="[^"]*"/, `width="${n}"`)
                    .replace(/height="[^"]*"/, `height="${o}"`);
                ((d.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`), await d.decode());
            } catch (r) {
                (eE(t, "Couldn't size the SVG image.", r),
                    d.src !== e && ((d.src = e), await d.decode().catch(() => {})));
            }
    }
    return d;
}
a(tr, { toImg: () => tn, toSvg: () => tn });
var to = l(() => {
        (eP(), e_(), tt(), e8());
    }),
    ti = {};
function tl(e, t = new Uint8Array(0)) {
    let r = new Uint8Array(t.length + 12),
        n = new DataView(r.buffer);
    n.setUint32(0, t.length);
    for (let t = 0; t < 4; t++) r[t + 4] = e.charCodeAt(t);
    r.set(t, 8);
    let o = 0xffffffff;
    for (let e = 4; e < r.length - 4; e++) o = ts[(o ^ r[e]) & 255] ^ (o >>> 8);
    return (n.setUint32(r.length - 4, (0xffffffff ^ o) >>> 0), r);
}
async function ta(e, t, r) {
    if (![e, t].every((e) => Number.isInteger(e) && e > 0 && e <= 0x7fffffff))
        throw RangeError("[SnapDOM] PNG dimensions must be integers from 1 to 2147483647");
    let n = new Uint8Array(13),
        o = new DataView(n.buffer);
    (o.setUint32(0, e), o.setUint32(4, t), (n[8] = 8), (n[9] = 6));
    let i = [new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), tl("IHDR", n), tl("sRGB", new Uint8Array([0]))],
        l = 4 * e,
        a = Math.max(1, Math.floor(65536 / (l + 1))),
        s = new Uint8Array(l),
        c = 0,
        u = new CompressionStream("deflate"),
        d = u.writable.getWriter(),
        f = u.readable.getReader(),
        h,
        p = (async () => {
            try {
                for (;;) {
                    let { done: e, value: t } = await f.read();
                    if (e) return;
                    i.push(tl("IDAT", t));
                }
            } catch (e) {
                ((h = e), await d.abort(e).catch(() => {}));
            }
        })();
    try {
        for await (let e of r) {
            if (!(e instanceof Uint8Array || e instanceof Uint8ClampedArray) || !e.length || e.length % l)
                throw RangeError("[SnapDOM] PNG input must contain complete RGBA rows");
            let r = e.length / l;
            if (c + r > t) throw RangeError("[SnapDOM] PNG input exceeds the declared height");
            for (let t = 0; t < r; t += a) {
                let n = Math.min(r, t + a),
                    o = new Uint8Array((n - t) * (l + 1));
                for (let r = t; r < n; r++) {
                    let n = e.subarray(r * l, (r + 1) * l),
                        i = (r - t) * (l + 1),
                        a = 0,
                        c = 0;
                    for (let e = 0; e < l; e++) {
                        let t = (n[e] - (e < 4 ? 0 : n[e - 4])) & 255,
                            r = (n[e] - s[e]) & 255;
                        ((a += Math.min(t, 256 - t)), (c += Math.min(r, 256 - r)), (o[i + e + 1] = r));
                    }
                    if (((o[i] = c <= a ? 2 : 1), a < c))
                        for (let e = 0; e < l; e++) o[i + e + 1] = n[e] - (e < 4 ? 0 : n[e - 4]);
                    s = n;
                }
                await d.write(o);
            }
            ((s = s.slice()), (c += r));
        }
        if (c !== t) throw RangeError("[SnapDOM] PNG input does not match the declared height");
        if ((await d.close(), await p, h)) throw h;
        return (i.push(tl("IEND")), new Blob(i, { type: "image/png" }));
    } catch (e) {
        throw (await Promise.allSettled([d.abort(e), f.cancel(e)]), await p, e);
    } finally {
        (d.releaseLock(), f.releaseLock());
    }
}
a(ti, { encodePng: () => ta });
var ts,
    tc = l(() => {
        ts = new Uint32Array(256);
        for (let e = 0; e < 256; e++) {
            let t = e;
            for (let e = 0; e < 8; e++) t = 1 & t ? 0xedb88320 ^ (t >>> 1) : t >>> 1;
            ts[e] = t;
        }
    });
function tu(e, t) {
    if ("string" != typeof e || !e.startsWith("data:image/svg+xml")) return null;
    let r = eO(e).match(/<svg\b[^>]*>/i)?.[0];
    if (!r) return null;
    let n = t.crop ? eL(r, t.crop) : r,
        o = parseFloat(n.match(/\bwidth="([^"]+)/i)?.[1]),
        i = parseFloat(n.match(/\bheight="([^"]+)/i)?.[1]),
        l = (n.match(/\bviewBox="([^"]+)/i)?.[1] || "")
            .trim()
            .split(/[\s,]+/)
            .map(Number);
    if (!(o > 0 && i > 0) || 4 !== l.length || !l.every(Number.isFinite) || !(l[2] > 0 && l[3] > 0)) return null;
    let a = Number.isFinite(t.width),
        s = Number.isFinite(t.height),
        c = t.meta || {},
        u = Math.max(1, Math.floor(o)),
        d = Math.max(1, Math.floor(i)),
        f = t.crop ? u : Number.isFinite(c.vbW) ? c.vbW : Number.isFinite(c.w0) ? c.w0 : u,
        h = t.crop ? d : Number.isFinite(c.vbH) ? c.vbH : Number.isFinite(c.h0) ? c.h0 : d,
        p = t.dpr ?? 1,
        m = t.scale ?? 1,
        g = (a && s ? Math.max(1, t.width) : a ? t.width : s ? (t.height * f) / Math.max(1, h) : u * m) * p,
        y = (a && s ? Math.max(1, t.height) : s ? t.height : a ? (t.width * h) / Math.max(1, f) : d * m) * p;
    if ((Math.max(o, i, g, y) <= eY && o * i <= eJ && g * y <= eJ) || "function" != typeof CompressionStream)
        return null;
    return b();
    async function b() {
        let { encodePng: a } = await Promise.resolve().then(() => (tc(), ti)),
            s = Math.max(1, Math.floor(g)),
            c = Math.max(1, Math.floor(y)),
            f = eD(e),
            h = f.slice(f.indexOf(r) + r.length, f.lastIndexOf("</svg>")),
            p = n.match(/\bpreserveAspectRatio="([^"]*)"/i)?.[1] || "xMidYMid meet",
            m = o / l[2],
            b = i / l[3],
            w = 0,
            x = 0;
        (/\bnone\b/.test(p) ||
            ((m = b = /\bslice\b/.test(p) ? Math.max(m, b) : Math.min(m, b)),
            (w = (o - l[2] * m) * (/xMin/.test(p) ? 0 : /xMax/.test(p) ? 1 : 0.5)),
            (x = (i - l[3] * b) * (/YMin/.test(p) ? 0 : /YMax/.test(p) ? 1 : 0.5))),
            (w -= l[0] * m),
            (x -= l[1] * b));
        let v = n.replace(/\s(?:width|height|preserveAspectRatio)="[^"]*"/gi, "").slice(0, -1),
            S = ek() && /(?:box-shadow|text-shadow)\s*:[^;"}]*px/i.test(f),
            M = o / g,
            k = i / y,
            C = Math.max(1, Math.min(8192, Math.floor(4194304 / s), S ? Math.floor(2046 / k) : 8192)),
            $ = Math.max(1, Math.min(8192, s, S ? Math.floor(2046 / M) : 8192));
        async function* A() {
            for (let e = 0; e < c; e += C) {
                let r = Math.min(C, c - e),
                    n = new Uint8Array(s * r * 4);
                for (let o = 0; o < s; o += $) {
                    let i = Math.min($, s - o),
                        a = S ? Math.max(0, Math.floor(o * M) - 1) : o * M,
                        c = S ? Math.max(0, Math.floor(e * k) - 1) : e * k,
                        f = S ? Math.min(u, Math.ceil((o + i) * M) + 1) - a : i,
                        p = S ? Math.min(d, Math.ceil((e + r) * k) + 1) - c : r,
                        g = f / l[2],
                        y = p / l[3],
                        C = S ? 1 : 1 / M,
                        A = S ? 1 : 1 / k,
                        R = `matrix(${(m * C) / g},0,0,${(b * A) / y},${((w - a) * C) / g + l[0]},${((x - c) * A) / y + l[1]})`,
                        E = `${v} width="${f}" height="${p}" preserveAspectRatio="none"><g style="all:unset!important;transform:${R}!important;transform-origin:0 0!important">${h}</g></svg>`,
                        F = await eX(eI(E), {
                            width: f,
                            height: p,
                            dpr: 1,
                            backgroundColor: S ? null : t.backgroundColor,
                            __session: t.__session,
                            __releaseDecodeFrame: !0,
                        }),
                        N = F;
                    try {
                        if (S) {
                            (((N = document.createElement("canvas")).width = i), (N.height = r));
                            let n = N.getContext("2d");
                            (t.backgroundColor && ((n.fillStyle = t.backgroundColor), n.fillRect(0, 0, i, r)),
                                n.drawImage(F, o * M - a, e * k - c, i * M, r * k, 0, 0, i, r));
                        }
                        let l = N.getContext("2d").getImageData(0, 0, i, r).data;
                        for (let e = 0; e < r; e++) n.set(l.subarray(e * i * 4, (e + 1) * i * 4), (e * s + o) * 4);
                    } finally {
                        ((F.width = F.height = 0), N !== F && (N.width = N.height = 0));
                    }
                }
                yield n;
            }
        }
        return a(s, c, A());
    }
}
var td = l(() => {
        (e8(), eR());
    }),
    tf = {};
async function th(e, t) {
    let r = t.format || t.type || "svg";
    if ("svg" === r) {
        if ("u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement)
            throw Error("[SnapDOM] html-in-canvas makes a raster capture, not an SVG; ask for png, jpeg or webp.");
        return new Blob([decodeURIComponent(e.split(",")[1])], { type: "image/svg+xml" });
    }
    let n = "png" === r && tu(e, t);
    if (n) return n;
    let o = await eX(e, t);
    return new Promise((e) => o.toBlob((t) => e(t), `image/${"jpg" === r ? "jpeg" : r}`, t.quality));
}
a(tf, { toBlob: () => th });
var tp = l(() => {
        (e8(), td());
    }),
    tm = {};
async function tg(e, t) {
    let r = new File([e], t, { type: e.type });
    if (!navigator.canShare?.({ files: [r] })) return !1;
    try {
        await navigator.share({ files: [r], title: t });
    } catch (e) {
        if ("AbortError" !== e.name) return !1;
    }
    return !0;
}
async function ty(e, t) {
    let r = new Set(["png", "jpeg", "jpg", "webp", "svg"]),
        n = (t?.type || "").toLowerCase(),
        o = r.has(n) ? n : "",
        i = (t?.format || o || "").toLowerCase(),
        l = "jpg" === i ? "jpeg" : i || "png",
        a = t?.filename || "snapdom",
        s = /\.(png|jpe?g|webp|svg)$/i.test(a) ? a : `${a}.${l}`,
        c = { ...(t || {}), format: l, type: l };
    c.dpr = 1;
    let u = eM(),
        d = "png" === l && tu(e, c);
    if ("svg" === l || d) {
        let t = d ? await d : await th(e, { ...c, type: "svg" });
        if (u && (await tg(t, s))) return;
        let r = URL.createObjectURL(t),
            n = document.createElement("a");
        ((n.href = r),
            (n.download = s),
            document.body.appendChild(n),
            n.click(),
            setTimeout(() => URL.revokeObjectURL(r), 1e3),
            n.remove());
        return;
    }
    let f = await eX(e, c);
    if (u) {
        let e = `image/${l}`,
            r = await new Promise((r) => f.toBlob(r, e, t?.quality));
        if (r && (await tg(r, s))) return;
    }
    let h = document.createElement("a");
    ((h.href = f.toDataURL(`image/${l}`, t?.quality)),
        (h.download = s),
        document.body.appendChild(h),
        h.click(),
        h.remove());
}
a(tm, { download: () => ty });
var tb = l(() => {
    (tp(), e8(), td(), eR());
});
(eP(), eP(), eR(), s(), q(), J());
var tw = new WeakMap(),
    tx = [
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "margin-block-start",
        "margin-block-end",
        "margin-inline-start",
        "margin-inline-end",
    ],
    tv = new Map(),
    tS = 0;
function tM(e) {
    let t = e && (1 === e.nodeType ? e : e.parentElement);
    for (; t;) {
        if (X(t)) return !0;
        if (t.parentElement) t = t.parentElement;
        else {
            let e = t.getRootNode?.();
            t = e && e.host ? e.host : null;
        }
    }
    return !1;
}
function tk(e) {
    for (let t of e) if (tC(t)) return !0;
    return !1;
}
function tC(e) {
    if (tM(e.target)) return !1;
    if ("childList" === e.type) {
        let t = !0;
        for (let r of e.addedNodes)
            if (!tM(r)) {
                t = !1;
                break;
            }
        if (t) {
            for (let r of e.removedNodes)
                if (!tM(r)) {
                    t = !1;
                    break;
                }
        }
        if (t) return !1;
    }
    return !0;
}
var t$ = new WeakMap();
function tA(e) {
    for (let t of e) {
        if (!tC(t)) continue;
        let e = t.target.ownerDocument || document;
        t$.set(e, (t$.get(e) || 0) + 1);
        let r = 1 === t.target.nodeType ? t.target : t.target.parentElement || t.target.host;
        for (; r; r = r.parentElement || r.getRootNode?.()?.host) t$.set(r, (t$.get(r) || 0) + 1);
    }
}
function tR(e) {
    let t = e.ownerDocument || document;
    return (tQ(t), (t$.get(t) || 0) - (t$.get(e) || 0));
}
var tE = 0;
function tF(e = document) {
    return (tQ(e), tE);
}
function tN() {
    return (tQ(), tS);
}
function t_(e) {
    return e ? (tQ(e.ownerDocument || document), tI(e, tj(e))) : 0;
}
function tP() {
    (tS++, tE++);
}
var tT = new WeakMap(),
    tL = 0,
    tW = 0;
function tD(e) {
    if (!e || 1 !== e.nodeType) return;
    (tL++, tT.set(e, tL));
    let t = e.querySelectorAll("*");
    for (let e = 0; e < t.length; e++) tT.set(t[e], tL);
}
function tO(e) {
    tD(e.parentElement || e);
    for (let r = e.parentElement; r; r = r.parentElement) {
        var t;
        ((t = r), tT.set(t, ++tL));
    }
}
function tI(e, t = null) {
    let r = tT.get(e) || 0;
    if (t) for (let e of t) r = Math.max(r, tT.get(e) || 0);
    return 1e9 * tW + r;
}
function tj(e) {
    let t = e.getRootNode?.();
    if (!t?.host) return null;
    let r = [];
    for (; t?.host;) ("open" === t.mode && tq(t), r.push(t.host), (t = t.host.getRootNode?.()));
    return r;
}
var tz = new WeakMap();
function tU(e) {
    e = e || document;
    let t = tz.get(e);
    if (!t || t.env !== tE) {
        let r = !0;
        try {
            r = t4(e).usesHas;
        } catch {}
        ((t = { env: tE, usesHas: r }), tz.set(e, t));
    }
    return !t.usesHas;
}
var tB = new WeakSet(),
    tV = [];
function tH(e) {
    if (!tk(e)) return;
    (tA(e), tS++);
    let t = new Set();
    for (let r of e) {
        if (!tC(r)) continue;
        let e = r.target.getRootNode && r.target.getRootNode();
        if (!e || 11 !== e.nodeType || t.has(e)) continue;
        (t.add(e), e.host ? tD(e.host) : tL++);
        let n = e.querySelectorAll("*");
        for (let e = 0; e < n.length; e++) tT.set(n[e], tL);
    }
}
function tq(e) {
    if (!(!e || tB.has(e))) {
        tB.add(e);
        try {
            let t = new MutationObserver(tH);
            (t.observe(e, { subtree: !0, childList: !0, characterData: !0, attributes: !0 }),
                tV.push({ o: t, root: e }));
        } catch {}
    }
}
function tG(e) {
    if (!tk(e)) return;
    (tA(e), tS++);
    let t = (function (e) {
        let t = (e) => e?.nodeType === 1 && (e.matches?.("style,link") || e.querySelector?.("style,link"));
        for (let r of e) {
            let e = r.target,
                n = e && (1 === e.nodeType ? e : e.parentElement);
            if (n && ("STYLE" === n.tagName || "LINK" === n.tagName)) return n.ownerDocument || document;
            for (let e of r.addedNodes) if (t(e)) return e.ownerDocument || document;
            for (let n of r.removedNodes) if (t(n)) return n.ownerDocument || (e && e.ownerDocument) || document;
        }
        return null;
    })(e);
    if (t) {
        (tz.delete(t), tE++, tW++);
        return;
    }
    let r = new Set();
    for (let t of e) {
        if (!tC(t)) continue;
        let e = 1 === t.target.nodeType ? t.target : t.target.parentElement;
        if (!e) continue;
        let n = e.ownerDocument || document;
        if (!tU(n) || e === n.documentElement || e === n.body) return void tW++;
        let o = e.parentElement || e;
        r.has(o) || (r.add(o), tO(e));
    }
}
var tX = new WeakSet(),
    tY = null,
    tJ = [];
function tQ(e = document) {
    if (e === tY || !e || 9 !== e.nodeType) return;
    if (tX.has(e)) {
        tY = e;
        return;
    }
    (tX.add(e), (tY = e));
    let t = e.defaultView,
        r = () => {
            (tS++, tE++);
        };
    try {
        let t = new MutationObserver(tG);
        (t.observe(e.documentElement, { subtree: !0, childList: !0, characterData: !0, attributes: !0 }),
            tJ.push({ o: t, env: !1, doc: e }));
    } catch {}
    try {
        let t = new MutationObserver((e) => {
            tk(e) && (tS++, tE++);
        });
        (t.observe(e.head, { subtree: !0, childList: !0, characterData: !0, attributes: !0 }),
            tJ.push({ o: t, env: !0, doc: e }));
    } catch {}
    try {
        t?.addEventListener("resize", r, { passive: !0 });
    } catch {}
    try {
        let r = (t) => {
            tS++;
            let r = t.composedPath?.()[0] || t.target;
            r && 1 === r.nodeType && !tM(r) && tU(r.ownerDocument || e) ? tO(r) : tW++;
        };
        (e.addEventListener("focusin", r, { capture: !0, passive: !0 }),
            e.addEventListener("focusout", r, { capture: !0, passive: !0 }),
            e.addEventListener("change", r, { capture: !0, passive: !0 }),
            e.addEventListener("pointerdown", r, { capture: !0, passive: !0 }),
            e.addEventListener("pointerup", r, { capture: !0, passive: !0 }),
            e.addEventListener("pointercancel", r, { capture: !0, passive: !0 }),
            e.addEventListener("keydown", r, { capture: !0, passive: !0 }),
            e.addEventListener("keyup", r, { capture: !0, passive: !0 }),
            e.addEventListener("beforetoggle", r, { capture: !0, passive: !0 }),
            e.addEventListener("toggle", r, { capture: !0, passive: !0 }),
            t?.addEventListener(
                "hashchange",
                () => {
                    (tS++, tW++);
                },
                { passive: !0 },
            ));
    } catch {}
    try {
        let t = e.fonts;
        t && (t.addEventListener?.("loadingdone", r), "loading" === t.status && t.ready?.then(r).catch(() => {}));
    } catch {}
}
var tK = new WeakMap();
function tZ(e, t) {
    let r;
    if (!e?.querySelectorAll) return;
    try {
        r = Array.from(e.querySelectorAll(":hover"));
    } catch {
        return;
    }
    let n = tK.get(e) || [];
    if (!(n.length === r.length && n.every((e, t) => e === r[t]))) {
        if ((tK.set(e, r), tS++, 11 === e.nodeType)) {
            for (let t of (e.host ? tD(e.host) : tL++, e.querySelectorAll("*"))) tT.set(t, tL);
            return;
        }
        for (let e of n.filter((e) => !r.includes(e)).concat(r.filter((e) => !n.includes(e))))
            if (e.isConnected)
                if (!tU(t)) return void tW++;
                else tO(e);
    }
}
function t0(e, t = null) {
    if (e)
        for (let r of (tZ(e, e), t || tV.filter(({ root: e }) => e.host?.isConnected).map(({ root: e }) => e)))
            tZ(r, e);
}
function t1() {
    tQ();
    try {
        for (let e = tJ.length - 1; e >= 0; e--) {
            let { o: t, env: r, doc: n } = tJ[e];
            if (n !== document && !n.defaultView) {
                try {
                    t.disconnect();
                } catch {}
                (tX.delete(n), tY === n && (tY = null), tJ.splice(e, 1));
                continue;
            }
            let o = t.takeRecords();
            o.length && (r ? tk(o) && (tS++, tE++) : tG(o));
        }
        for (let e = tV.length - 1; e >= 0; e--) {
            let { o: t, root: r } = tV[e];
            if (!r.host || !r.host.isConnected) {
                try {
                    t.disconnect();
                } catch {}
                (tB.delete(r), tV.splice(e, 1));
                continue;
            }
            let n = t.takeRecords();
            n.length && tH(n);
        }
    } catch {}
}
function t2(e) {
    if (!(!e || 1 !== e.nodeType)) {
        tw.delete(e);
        try {
            let t = (e.ownerDocument || document).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
            for (; t.nextNode();) tw.delete(t.currentNode);
        } catch {}
    }
}
var t3 = [
    "mask",
    "mask-image",
    "-webkit-mask",
    "-webkit-mask-image",
    "mask-source",
    "mask-box-image-source",
    "mask-border-source",
    "-webkit-mask-box-image-source",
    "border-image",
    "border-image-source",
];
function t9(e) {
    let t = tw.get(e);
    if (t && rl(t, e)) {
        let e = t.snapshot && t.snapshot.__needsBgInline;
        if (void 0 !== e) return e;
    }
    return !0;
}
var t6 = new WeakMap();
function t4(e) {
    let t = t6.get(e);
    if (!t || t.epoch !== tS) {
        let r = t && t.universe,
            n = (t = {
                epoch: tS,
                ...(function (e) {
                    let t = {
                        universe: null,
                        pseudoUniverse: null,
                        usesHas: !0,
                        shareGate: null,
                        marginUnstable: !0,
                        paddingUnstable: !0,
                        importantProps: null,
                        pseudoGates: { before: null, after: null, firstLetter: null, marker: null, firstLine: null },
                    };
                    try {
                        let r = new Set(O),
                            n = { before: [], after: [], firstLetter: [], marker: [], firstLine: [] },
                            o = {
                                budget: 2e4,
                                usesHas: !1,
                                shareUnsafeSels: new Set(),
                                inContainer: 0,
                                marginUnstable: !1,
                                paddingUnstable: !1,
                                importantProps: new Set(),
                                pseudoProps: new Set(),
                            };
                        for (let i of e.styleSheets) if (!T(i, r, n, o)) return t;
                        let i = e.adoptedStyleSheets;
                        if (Array.isArray(i)) {
                            for (let e of i) if (!T(e, r, n, o)) return t;
                        }
                        "function" == typeof e.getAnimations && L(e.getAnimations(), r);
                        let l = Array.from(o.shareUnsafeSels),
                            a =
                                null === D(e.createElement("div"), l)
                                    ? null
                                    : l.map((e) => ({
                                          sel: e,
                                          key: (function (e) {
                                              let t = 0,
                                                  r = null,
                                                  n = 0;
                                              for (let o = 0; o < e.length; o++) {
                                                  let i = e[o];
                                                  if (r) {
                                                      i === r && "\\" !== e[o - 1] && (r = null);
                                                      continue;
                                                  }
                                                  '"' === i || "'" === i
                                                      ? (r = i)
                                                      : "(" === i || "[" === i
                                                        ? t++
                                                        : ")" === i || "]" === i
                                                          ? t--
                                                          : 0 === t &&
                                                            (" " === i || ">" === i || "+" === i || "~" === i) &&
                                                            (n = o + 1);
                                              }
                                              let o = "",
                                                  i = 0;
                                              for (let t of e.slice(n))
                                                  "(" === t || "[" === t
                                                      ? i++
                                                      : ")" === t || "]" === t
                                                        ? i--
                                                        : 0 === i && (o += t);
                                              let l = (e) =>
                                                      !e || /\\[0-9a-fA-F]/.test(e) ? null : e.replace(/\\(.)/g, "$1"),
                                                  a = l((o.match(/\.((?:\\.|[\w-])+)/) || [])[1]);
                                              if (a) return "c" + a;
                                              let s = l((o.match(/#((?:\\.|[\w-])+)/) || [])[1]);
                                              if (s) return "i" + s;
                                              let c = (o.match(/^([a-zA-Z][\w-]*)/) || [])[1];
                                              return c ? "t" + c.toLowerCase() : null;
                                          })(e),
                                      })),
                            s = new Set(j);
                        for (let e of I) r.has(e) && s.add(e);
                        for (let e of o.pseudoProps) s.add(e);
                        return (
                            (o.pseudoProps.has("transform") ||
                                o.pseudoProps.has("rotate") ||
                                o.pseudoProps.has("scale")) &&
                                s.add("transform-origin"),
                            o.pseudoProps.has("perspective") && s.add("perspective-origin"),
                            {
                                universe: r,
                                pseudoUniverse: s,
                                pseudoGates: (function (e, t) {
                                    let r = e.createElement("div"),
                                        n = {};
                                    for (let e in t) {
                                        let o = t[e];
                                        (("before" === e || "after" === e) && o.push("q"), (n[e] = D(r, o)));
                                    }
                                    return n;
                                })(e, n),
                                usesHas: o.usesHas,
                                shareGate: a,
                                marginUnstable: o.marginUnstable,
                                paddingUnstable: o.paddingUnstable,
                                importantProps: o.importantProps,
                            }
                        );
                    } catch {
                        return t;
                    }
                })(e),
            }).universe;
        if (r && n && r.size === n.size) {
            let e = !0;
            for (let t of n)
                if (!r.has(t)) {
                    e = !1;
                    break;
                }
            e && (t.universe = r);
        }
        t6.set(e, t);
    }
    return t;
}
function t5(e, t) {
    let r = e.ownerDocument || document,
        n = e.getRootNode ? e.getRootNode() : r;
    return n === r
        ? t4(r).universe
        : t && g(n)
          ? (function (e, t, r, n) {
                let o = n.__shadowUniverse;
                if (null === o) return null;
                if (!o) {
                    let e = t4(r).universe;
                    if (!e) return (n.__shadowUniverse = null);
                    o = n.__shadowUniverse = { universe: new Set(e), roots: new Set() };
                }
                let i = (e) => {
                        for (; g(e) && !o.roots.has(e); e = e.host.getRootNode()) {
                            for (let t of (o.roots.add(e), [...e.styleSheets, ...(e.adoptedStyleSheets || [])])) {
                                let e = t8.get(t);
                                if (
                                    ((e && e.epoch === tS) ||
                                        t8.set(
                                            t,
                                            (e = {
                                                epoch: tS,
                                                props: (function (e) {
                                                    let t = new Set();
                                                    return T(
                                                        e,
                                                        t,
                                                        {
                                                            before: [],
                                                            after: [],
                                                            firstLetter: [],
                                                            marker: [],
                                                            firstLine: [],
                                                        },
                                                        {
                                                            budget: 2e4,
                                                            usesHas: !1,
                                                            shareUnsafeSels: new Set(),
                                                            inContainer: 0,
                                                            marginUnstable: !1,
                                                            paddingUnstable: !1,
                                                            importantProps: new Set(),
                                                            pseudoProps: new Set(),
                                                        },
                                                    )
                                                        ? t
                                                        : null;
                                                })(t),
                                            }),
                                        ),
                                    !e.props)
                                )
                                    return !1;
                                for (let t of e.props) o.universe.add(t);
                            }
                            L(e.getAnimations(), o.universe);
                        }
                        return !0;
                    },
                    l = i(t) && (!e.shadowRoot || i(e.shadowRoot));
                for (let t = e.assignedSlot; l && t; t = t.assignedSlot) l = i(t.getRootNode());
                return l ? o.universe : (n.__shadowUniverse = null);
            })(e, n, r, t)
          : null;
}
var t8 = new WeakMap();
function t7(e) {
    let t = e.ownerDocument || document;
    return e.getRootNode && e.getRootNode() !== t ? null : t4(t).pseudoUniverse;
}
var re = { before: null, after: null, firstLetter: null, marker: null, firstLine: null };
function rt(e) {
    let t = e.ownerDocument || document;
    return e.getRootNode && e.getRootNode() !== t ? re : t4(t).pseudoGates;
}
function rr(e) {
    let t = e.getPropertyValue("background-image");
    if (t && "none" !== t) return !0;
    let r = e.getPropertyValue("background-color");
    if (r && "rgba(0, 0, 0, 0)" !== r && "transparent" !== r) return !0;
    for (let t of t3) {
        let r = e.getPropertyValue(t);
        if (r && "none" !== r) return !0;
    }
    let n = e.getPropertyValue("background");
    return !!(n && /url\s*\(/i.test(n));
}
var rn = new Set(["auto", "min-content", "max-content", "stretch", "fill-available", "-webkit-fill-available"]);
function ro(e) {
    return rn.has(e) || e.startsWith("fit-content");
}
var ri = new WeakMap();
function rl(e, t) {
    return e.env === tE && e.stamp === tI(t, e.hosts);
}
var ra = /^(width|height|inline-size|block-size|top|right|bottom|left|transform-origin|perspective-origin)$|^inset-/,
    rs = /(margin|padding)[a-z-]*\s*:[^;]*(%|\bauto\b|calc\(|var\()/i,
    rc = new Set(["INPUT", "TEXTAREA", "SELECT", "OPTION", "OPTGROUP", "PROGRESS", "METER", "BUTTON", "DATALIST"]);
function ru(e, t) {
    let r = e.snap,
        n = (e.snap = { ...r });
    (Object.defineProperty(n, "__needsBgInline", { value: r.__needsBgInline, enumerable: !1 }),
        void 0 !== r.__bgClipTextFix &&
            Object.defineProperty(n, "__bgClipTextFix", { value: r.__bgClipTextFix, enumerable: !1 }));
    let o = t4(t.ownerDocument || document),
        i = (t.getAttribute && t.getAttribute("style")) || "",
        l = i && rs.test(i),
        a = !!o.marginUnstable || (l && /margin/i.test(i)),
        s = !!o.paddingUnstable || (l && /padding/i.test(i)),
        c = void 0 !== n.display && n.display.includes("grid"),
        u = void 0 !== n.transform && "none" !== n.transform,
        d = [];
    for (let e in n)
        (ra.test(e) ||
            (c && ("grid-template-columns" === e || "grid-template-rows" === e)) ||
            (u && "transform" === e) ||
            (a && 109 === e.charCodeAt(0) && e.startsWith("margin-")) ||
            (s && 112 === e.charCodeAt(0) && e.startsWith("padding-"))) &&
            d.push(e);
    (!e.h || "height" in n || d.push("height"), !e.b || "block-size" in n || d.push("block-size"));
    let f = new Set(d),
        h = [t.tagName.toLowerCase()];
    for (let e in n) f.has(e) || h.push(e, n[e]);
    return ((e.rr = d), (e.sig = h.join("\x01") + "\x02" + d.join("\x01")), d);
}
var rd =
        /%|[\d.](?:em|rem|ex|ch|cap|ic|lh|rlh|v[whib]|vmin|vmax|cq[whbi]|cqmin|cqmax)\b|\b(?:calc|var|min|max|clamp|env|attr)\(|\b(?:auto|inherit|initial|unset|revert|currentcolor|-webkit-fill-available|fit-content|min-content|max-content)\b/i,
    rf = (e) => "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
function rh(e, t, r, n) {
    if ("STYLE" === e.tagName) return;
    let i = (function (e, t) {
            if (e && e.session && e.persist) return e;
            if (e && (e.styleMap || e.styleCache || e.nodeMap)) {
                let r = e.__ctx;
                return (
                    (r && e.__ctxOpts === t) ||
                        ((r = {
                            session: e,
                            persist: {
                                snapshotKeyCache: tv,
                                defaultStyle: o.defaultStyle,
                                baseStyle: o.baseStyle,
                                image: o.image,
                                resource: o.resource,
                                background: o.background,
                            },
                            options: t || {},
                        }),
                        (e.__ctx = r),
                        (e.__ctxOpts = t)),
                    r
                );
            }
            return {
                session: { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() },
                persist: {
                    snapshotKeyCache: tv,
                    defaultStyle: o.defaultStyle,
                    baseStyle: o.baseStyle,
                    image: o.image,
                    resource: o.resource,
                    background: o.background,
                },
                options: e || t || {},
            };
        })(r, n),
        l = (i.options && i.options.cache) || "soft";
    ("disabled" !== l && tQ(e.ownerDocument),
        "disabled" !== l || i.session.__bumpedForDisabled || (tS++, tv.clear(), (i.session.__bumpedForDisabled = !0)));
    let { session: a, persist: s } = i;
    if (!a.styleCache.has(e)) {
        let t = null;
        try {
            t = getComputedStyle(e);
        } catch {}
        a.styleCache.set(e, t || getComputedStyle((e.ownerDocument || document).documentElement));
    }
    let c = a.styleCache.get(e);
    e.getAttribute?.("style") &&
        (function (e, t, r) {
            let n;
            if (!e.style || 0 === e.style.length) return;
            let o =
                    ((n = e.ownerDocument || document),
                    e.getRootNode && e.getRootNode() !== n ? null : t4(n).importantProps),
                i = null != o && !rd.test(e.getAttribute("style") || "");
            for (let n = 0; n < e.style.length; n++) {
                let l = e.style[n];
                if (i && !o.has(l) && !(l.startsWith("background") && rf(e))) continue;
                let a = r.getPropertyValue(l);
                a && t.style.setProperty(l, a, e.style.getPropertyPriority(l));
            }
        })(e, t, c);
    let u = c.getPropertyValue("animation-name");
    t && t.style && u && "none" !== u && t.style.setProperty("animation", "none", "important");
    let d = e.tagName?.toLowerCase() || "div";
    if (ea.has(d)) {
        let r = {};
        Object.defineProperty(r, "__needsBgInline", { value: rr(c), enumerable: !1 });
        let n = tj(e);
        (tw.set(e, {
            env: tE,
            stamp: tI(e, n),
            hosts: n,
            snapshot: r,
            embedFonts: !!(i.options && i.options.embedFonts),
            excludeStyleProps: (i.options && i.options.excludeStyleProps) || null,
        }),
            a.styleMap.set(t, ""));
        return;
    }
    let f = null;
    if (i.options && i.options.__styleShare && a.styleMap) {
        let t,
            r =
                ((t = a.__styleShare) ||
                    (t = a.__styleShare = { ids: new WeakMap(), intern: new Map(), snaps: new Map(), rootSeen: !1 }),
                t),
            n = (function (e, t) {
                let r = t.ids.get(e);
                if (void 0 !== r) return r;
                let n = e.parentElement,
                    o;
                if (n) {
                    if (void 0 === (o = t.ids.get(n))) {
                        if (t.rootSeen) return (t.ids.set(e, -1), -1);
                        o = "R";
                    }
                } else o = "R";
                if (((t.rootSeen = !0), -1 === o)) return (t.ids.set(e, -1), -1);
                let i = "",
                    l = e.attributes;
                if (l && l.length)
                    if (1 === l.length) i = l[0].name + "=" + l[0].value;
                    else {
                        let e = [];
                        for (let t = 0; t < l.length; t++) e.push(l[t].name + "=" + l[t].value);
                        (e.sort(), (i = e.join("\x01")));
                    }
                let a = o + "|" + e.tagName + "|" + i;
                return (
                    void 0 === (r = t.intern.get(a)) && ((r = t.intern.size), t.intern.set(a, r)), t.ids.set(e, r), r
                );
            })(e, r),
            o = e.ownerDocument || document,
            i = o.activeElement;
        -1 === n ||
            rc.has(e.tagName) ||
            (i && i !== o.body && i !== o.documentElement && i === e) ||
            (e.getRootNode && e.getRootNode() !== o) ||
            e.shadowRoot ||
            e.assignedSlot ||
            (f = { st: r, id: n });
    }
    let h = (function (e, t = null, r = {}, n = null, o = null) {
        let i = tw.get(e),
            l = !!(r && r.embedFonts),
            a = (r && r.excludeStyleProps) || null;
        if ("function" != typeof a && i && rl(i, e) && i.embedFonts === l && i.excludeStyleProps === a)
            return i.snapshot;
        let s = t || getComputedStyle(e),
            c,
            u = null,
            d = n && n.st.snaps.get(n.id);
        if (d) {
            c = { ...d.snap };
            let t = d.rr || ru(d, e);
            u = [];
            for (let e = 0; e < t.length; e++) {
                let r = t[e],
                    n = s.getPropertyValue(r);
                (n ? (c[r] = n) : delete c[r], u.push(n));
            }
            (Object.defineProperty(c, "__needsBgInline", { value: d.snap.__needsBgInline, enumerable: !1 }),
                void 0 !== d.snap.__bgClipTextFix &&
                    Object.defineProperty(c, "__bgClipTextFix", { value: d.snap.__bgClipTextFix, enumerable: !1 }));
        } else
            ((c = (function (e, t = {}, r = null, n = null) {
                let o = {},
                    i = t.excludeStyleProps,
                    l = (t) => {
                        if (
                            void 0 !== o[t] ||
                            K(t) ||
                            (i && ((i instanceof RegExp && i.test(t)) || ("function" == typeof i && i(t))))
                        )
                            return;
                        let r = e.getPropertyValue(t);
                        r &&
                            (("background-image" === t || "content" === t) &&
                                r.includes("url(") &&
                                !r.includes("data:") &&
                                (r = "none"),
                            (o[t] = r));
                    };
                if (n) {
                    for (let e of n) l(e);
                    let e = r && r.style;
                    if (e && e.length) for (let t = 0; t < e.length; t++) l(e[t]);
                } else for (let t = 0; t < e.length; t++) l(e[t]);
                for (let t of [
                    "text-decoration-line",
                    "text-decoration-color",
                    "text-decoration-style",
                    "text-decoration-thickness",
                    "text-underline-offset",
                    "text-decoration-skip-ink",
                ])
                    if (!o[t])
                        try {
                            let r = e.getPropertyValue(t);
                            r && (o[t] = r);
                        } catch {}
                for (let t of [
                    "-webkit-text-stroke",
                    "-webkit-text-stroke-width",
                    "-webkit-text-stroke-color",
                    "paint-order",
                ])
                    if (!o[t])
                        try {
                            let r = e.getPropertyValue(t);
                            r && (o[t] = r);
                        } catch {}
                if (t.embedFonts) {
                    for (let t of [
                        "font-feature-settings",
                        "font-variation-settings",
                        "font-kerning",
                        "font-variant",
                        "font-variant-ligatures",
                        "font-optical-sizing",
                    ])
                        if (!o[t])
                            try {
                                let r = e.getPropertyValue(t);
                                r && (o[t] = r);
                            } catch {}
                }
                try {
                    "hidden" === (o["content-visibility"] || e.getPropertyValue("content-visibility")) &&
                        (o["content-visibility"] = "hidden");
                } catch {}
                Object.defineProperty(o, "__needsBgInline", { value: rr(e), enumerable: !1 });
                let a = parseFloat(e.getPropertyValue("border-top-width") || 0) || 0,
                    s = parseFloat(e.getPropertyValue("border-right-width") || 0) || 0,
                    c = parseFloat(e.getPropertyValue("border-bottom-width") || 0) || 0,
                    u = parseFloat(e.getPropertyValue("border-left-width") || 0) || 0;
                if (0 === a && 0 === s && 0 === c && 0 === u) {
                    let t = (e.getPropertyValue("border-image-source") || "").trim();
                    for (let e of [
                        "border",
                        "border-top",
                        "border-right",
                        "border-bottom",
                        "border-left",
                        "border-width",
                        "border-style",
                        "border-color",
                        "border-top-width",
                        "border-top-style",
                        "border-top-color",
                        "border-right-width",
                        "border-right-style",
                        "border-right-color",
                        "border-bottom-width",
                        "border-bottom-style",
                        "border-bottom-color",
                        "border-left-width",
                        "border-left-style",
                        "border-left-color",
                        "border-block",
                        "border-block-width",
                        "border-block-style",
                        "border-block-color",
                        "border-inline",
                        "border-inline-width",
                        "border-inline-style",
                        "border-inline-color",
                        "border-block-start",
                        "border-block-start-width",
                        "border-block-start-style",
                        "border-block-start-color",
                        "border-block-end",
                        "border-block-end-width",
                        "border-block-end-style",
                        "border-block-end-color",
                        "border-inline-start",
                        "border-inline-start-width",
                        "border-inline-start-style",
                        "border-inline-start-color",
                        "border-inline-end",
                        "border-inline-end-width",
                        "border-inline-end-style",
                        "border-inline-end-color",
                    ])
                        delete o[e];
                    (t && "none" !== t) || (o.border = "none");
                }
                return (
                    (function (e) {
                        if (!eC()) return;
                        let t = e["background-clip"] || e["-webkit-background-clip"];
                        if (!t || !t.includes("text")) return;
                        let r = (e) => "transparent" === e || "rgba(0, 0, 0, 0)" === e,
                            n = e["-webkit-text-fill-color"];
                        if (!r(void 0 !== n ? n : e.color)) return;
                        let o = (function (e, t) {
                            let r = (e) => {
                                    let t = [],
                                        r = /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+%?))?\s*\)/g,
                                        n;
                                    for (; (n = r.exec(e || ""));) {
                                        let e = n[4];
                                        (void 0 === e ? 1 : parseFloat(e) / (e.endsWith("%") ? 100 : 1)) > 0.05 &&
                                            t.push([+n[1], +n[2], +n[3]]);
                                    }
                                    return t;
                                },
                                n = r(e);
                            if ((n.length || (n = r(t)), !n.length)) return null;
                            let o = [0, 0, 0];
                            for (let [e, t, r] of n) ((o[0] += e), (o[1] += t), (o[2] += r));
                            return `rgb(${o.map((e) => Math.round(e / n.length)).join(", ")})`;
                        })(e["background-image"], e["background-color"]);
                        o &&
                            (r(e.color) && (e.color = o),
                            void 0 !== n && (e["-webkit-text-fill-color"] = o),
                            (e["background-image"] = "none"),
                            (e["background-color"] = "transparent"),
                            delete e["background-clip"],
                            delete e["-webkit-background-clip"],
                            Object.defineProperty(e, "__bgClipTextFix", { value: o, enumerable: !1 }));
                    })(o),
                    o
                );
            })(s, r, e, t5(e, o))),
                n && n.st.snaps.set(n.id, { snap: c, rr: null, sig: null, h: "height" in c, b: "block-size" in c }));
        let f = !1;
        if ("function" == typeof e.computedStyleMap) {
            let t;
            for (let r of tx)
                if ("0px" === c[r])
                    try {
                        ((t ||= e.computedStyleMap()), t.get(r)?.toString() === "auto" && ((c[r] = "auto"), (f = !0)));
                    } catch {}
        }
        !(function (e, t, r) {
            var n;
            if (p(e) && e.style && e.style.height) return;
            let o = e.tagName && e.tagName.toLowerCase();
            if (
                !o ||
                !["div", "section", "article", "main", "aside", "header", "footer", "nav"].includes(o) ||
                (t.aspectRatio && "none" !== t.aspectRatio && "auto" !== t.aspectRatio)
            )
                return;
            let i = t.display || "";
            if (i.includes("flex") || i.includes("grid")) return;
            let l = t.position;
            if (
                "absolute" === l ||
                "fixed" === l ||
                "sticky" === l ||
                "none" !== t.transform ||
                ((n = t).backgroundImage && "none" !== n.backgroundImage) ||
                (n.backgroundColor &&
                    "rgba(0, 0, 0, 0)" !== n.backgroundColor &&
                    "transparent" !== n.backgroundColor) ||
                (parseFloat(n.borderTopWidth) || 0) > 0 ||
                (parseFloat(n.borderBottomWidth) || 0) > 0 ||
                (parseFloat(n.paddingTop) || 0) > 0 ||
                (parseFloat(n.paddingBottom) || 0) > 0 ||
                "visible" !== (n.overflowBlock || n.overflowY || "visible") ||
                rx(e)
            )
                return;
            let a = t.overflowX || t.overflow || "visible",
                s = t.overflowY || t.overflow || "visible";
            if ("visible" !== a || "visible" !== s) return;
            let c = t.clip;
            if (
                (c && "auto" !== c && "rect(auto, auto, auto, auto)" !== c) ||
                "hidden" === t.visibility ||
                "0" === t.opacity ||
                !(function (e) {
                    for (let t = e.firstChild; t; t = t.nextSibling)
                        if (3 === t.nodeType && /\S/.test(t.nodeValue)) return !0;
                    let t = e.firstElementChild,
                        r = e.lastElementChild;
                    if ((t && "BR" === t.tagName) || (r && "BR" === r.tagName)) return !0;
                    for (let t = e.firstElementChild; t; t = t.nextElementSibling) {
                        let e = en(t);
                        if ("none" === e.display) continue;
                        let r = e.position;
                        if ("absolute" !== r && "fixed" !== r) return !0;
                    }
                    return !1;
                })(e)
            )
                return;
            let u = parseFloat(t.height),
                d = (function (e) {
                    let t = e.getBoundingClientRect().top,
                        r = -1 / 0,
                        n = null;
                    for (let t = e.firstChild; t; t = t.nextSibling) {
                        if (3 === t.nodeType) {
                            if (!/\S/.test(t.nodeValue || "")) continue;
                            (n = n || document.createRange()).selectNode(t);
                            let e = n.getBoundingClientRect();
                            (e.width || e.height) && (r = Math.max(r, e.bottom));
                            continue;
                        }
                        if (1 !== t.nodeType) continue;
                        let e = en(t);
                        if ("none" === e.display) continue;
                        let o = e.position;
                        "absolute" === o ||
                            "fixed" === o ||
                            (e.float && "none" !== e.float) ||
                            (r = Math.max(r, t.getBoundingClientRect().bottom));
                    }
                    return r === -1 / 0 ? NaN : r - t;
                })(e);
            (Number.isFinite(u) && Number.isFinite(d) && Math.abs(u - d) > 2) ||
                (delete r.height, delete r["block-size"]);
        })(e, s, c);
        let h = (function (e, t, r) {
            if (
                !rp.some((e) => r[e]?.includes(".")) ||
                "border-box" === t.getPropertyValue("box-sizing") ||
                "inline" === r.display
            )
                return "";
            for (let e of ["width", "height"]) {
                let t = r[`min-${e}`],
                    n = r[`max-${e}`];
                if ((t && "0px" !== t && "auto" !== t) || (n && "none" !== n)) return "";
            }
            let n = (e) => parseFloat(r[e]) || 0,
                o = n("padding-left") + n("padding-right") + n("border-left-width") + n("border-right-width"),
                i = n("padding-top") + n("padding-bottom") + n("border-top-width") + n("border-bottom-width"),
                l = "horizontal-tb" !== (r["writing-mode"] || "horizontal-tb");
            for (let e of rm) {
                let t = r[e];
                if (!t || !t.endsWith("px")) continue;
                let n = "width" === e || ("inline-size" === e && !l) || ("block-size" === e && l) ? o : i;
                r[e] = `${Math.round((parseFloat(t) + n) * 1e3) / 1e3}px`;
            }
            r["box-sizing"] = "border-box";
            let a = "";
            if ("auto" === t.getPropertyValue("overflow-x")) {
                let t = e.scrollWidth <= e.clientWidth;
                ((r["overflow-x"] = t ? "hidden" : "auto"), t && (a += "x"));
            }
            if ("auto" === t.getPropertyValue("overflow-y")) {
                let t = e.scrollHeight <= e.clientHeight;
                ((r["overflow-y"] = t ? "hidden" : "auto"), t && (a += "y"));
            }
            return a;
        })(e, s, c);
        null !== u &&
            (f && u.push("\x05", ...tx.map((e) => c[e])),
            h && u.push("\x06" + h),
            ri.set(
                c,
                d.sig + "\x02" + u.join("\x01") + ("height" in c ? "" : "\x03") + ("block-size" in c ? "" : "\x04"),
            ));
        let m = tj(e);
        return (tw.set(e, { env: tE, stamp: tI(e, m), hosts: m, snapshot: c, embedFonts: l, excludeStyleProps: a }), c);
    })(e, c, i.options, f, a);
    if (e.getAttribute?.("style"))
        for (let e of ["top", "right", "bottom", "left"]) {
            let r = `margin-${e}`;
            "auto" === h[r] && t.style.setProperty(r, "auto", "important");
        }
    (h.__bgClipTextFix &&
        t &&
        t.style &&
        (t.style.setProperty("background-image", "none", "important"),
        t.style.setProperty("background-color", "transparent", "important"),
        t.style.setProperty("color", h.__bgClipTextFix, "important"),
        t.style.setProperty("-webkit-text-fill-color", h.__bgClipTextFix, "important")),
        (function (e, t, r) {
            let n = t.getPropertyValue("overflow-x"),
                o = t.getPropertyValue("overflow-y");
            if (
                (("visible" === n || !n) && ("visible" === o || !o)) ||
                "border-box" === t.getPropertyValue("box-sizing") ||
                "number" != typeof e.clientWidth ||
                !e.offsetWidth
            )
                return;
            let i =
                    e.offsetWidth -
                    e.clientWidth -
                    (parseFloat(t.getPropertyValue("border-left-width")) || 0) -
                    (parseFloat(t.getPropertyValue("border-right-width")) || 0),
                l =
                    e.offsetHeight -
                    e.clientHeight -
                    (parseFloat(t.getPropertyValue("border-top-width")) || 0) -
                    (parseFloat(t.getPropertyValue("border-bottom-width")) || 0),
                a = (e, t) => {
                    let n = r[e];
                    if (!n || !n.endsWith("px")) return;
                    let o = parseFloat(n);
                    Number.isFinite(o) && (r[e] = `${Math.round((o + t) * 1e3) / 1e3}px`);
                };
            (i >= 2 && (a("width", i), a("inline-size", i)), l >= 2 && (a("height", l), a("block-size", l)));
        })(e, c, h),
        t.style?.length &&
            "border-box" === h["box-sizing"] &&
            "border-box" !== c.getPropertyValue("box-sizing") &&
            (function (e, t, r) {
                if (ry.test(e.getAttribute("style")))
                    for (let e of rg)
                        t.style.getPropertyValue(e) &&
                            r[e] &&
                            t.style.setProperty(e, r[e], t.style.getPropertyPriority(e));
            })(e, t, h));
    let m = rx(e);
    if (
        ((function (e, t, r, n, o) {
            let i = r.display || "";
            if (
                !n &&
                !i.startsWith("inline-") &&
                "none" === (r.float || "none") &&
                "absolute" !== r.position &&
                "fixed" !== r.position
            )
                return;
            let l = r["text-wrap-mode"] || r["white-space"] || "";
            if (
                "nowrap" === l ||
                "pre" === l ||
                ("white-space" === rb && "normal" !== l) ||
                "horizontal-tb" !== (r["writing-mode"] || "horizontal-tb") ||
                !t.style
            )
                return;
            let a = (o.__oneLine ||= new WeakSet());
            for (let t = e.parentElement; t; t = t.parentElement) if (a.has(t)) return;
            (function (e, t, r) {
                let n = e.clientHeight - (parseFloat(t["padding-top"]) || 0) - (parseFloat(t["padding-bottom"]) || 0);
                if (
                    n > 3 * (parseFloat(t["font-size"]) || 16) ||
                    ("normal" === t["word-break"] &&
                        "normal" === t["overflow-wrap"] &&
                        /^[\w\u00C0-\u024F.,:;!?'"()%]*$/.test(e.textContent.trim()))
                )
                    return !1;
                let o = e.ownerDocument || document,
                    i = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT),
                    l = o.createRange(),
                    a = null,
                    s = 0,
                    c = 0;
                for (let e = i.nextNode(); e; e = i.nextNode()) {
                    if (1 === e.nodeType) {
                        if (e.shadowRoot || "br" === e.localName || "textarea" === e.localName) return !1;
                        continue;
                    }
                    if (/\S/.test(e.data)) {
                        if (++c > 64) return !1;
                        for (let t of (l.selectNodeContents(e), l.getClientRects()))
                            if (t.height) {
                                if (
                                    Math.min((a ||= t).bottom, t.bottom) - Math.max(a.top, t.top) <
                                    Math.min(a.height, t.height) / 2
                                )
                                    return !1;
                                s = Math.max(s, t.height);
                            }
                    }
                }
                if (!a) return !1;
                let u = (function e(t, r) {
                    let n = r.get(t);
                    if (void 0 !== n) return n;
                    let o = en(t),
                        i = o.transform,
                        l =
                            i && "none" !== i
                                ? i
                                      .slice(i.indexOf("(") + 1, -1)
                                      .split(",")
                                      .map(parseFloat)
                                : null;
                    if (
                        (o.rotate && "none" !== o.rotate) ||
                        (l && (i.startsWith("matrix3d") ? l[1] || l[4] : l[1] || l[2]))
                    )
                        n = 0;
                    else {
                        let a = t.parentElement || t.getRootNode?.().host;
                        1 === (n = a ? e(a, r) : 1) &&
                            ((o.scale && "none" !== o.scale) ||
                                (o.zoom && "1" !== o.zoom) ||
                                (l &&
                                    (i.startsWith("matrix3d")
                                        ? 1 !== l[0] || 1 !== l[5]
                                        : 1 !== l[0] || 1 !== l[3]))) &&
                            (n = rw);
                    }
                    return (r.set(t, n), n);
                })(e, (r.__axes ||= new WeakMap()));
                return (
                    !!u &&
                    n * (u === rw && e.offsetHeight ? e.getBoundingClientRect().height / e.offsetHeight : 1) <= 2 * s
                );
            })(e, r, o) && (a.add(e), t.style.setProperty(rb, "nowrap"));
        })(e, t, h, m, a),
        m)
    ) {
        let e = c.getPropertyValue("min-width");
        (e && "auto" !== e && "0px" !== e) || (h["min-width"] = "0px");
    }
    let g = (function (e, t) {
            let r = ri.get(e);
            if (r) return r;
            let n = [t];
            for (let t in e) n.push(t, e[t]);
            return ((r = n.join("\x01")), ri.set(e, r), r);
        })(h, d),
        y = !0;
    if (ee(d, (h.display || "").toLowerCase())) {
        ((y = (function (e) {
            for (let t = e.firstChild; t; t = t.nextSibling) {
                if (3 === t.nodeType && /\S/.test(t.nodeValue || "")) return !0;
                if (1 === t.nodeType) {
                    let e = en(t).position;
                    if ("absolute" !== e && "fixed" !== e) return !0;
                }
            }
            return !1;
        })(e)) &&
            (function (e, t, r) {
                let n = (t.display || "").toLowerCase();
                if ("inline" === n || eh.has(e)) return !1;
                if (r) return !0;
                if ("none" !== (t.float || "none").toLowerCase()) return !1;
                let o = (t.position || "static").toLowerCase();
                return "absolute" !== o && "fixed" !== o && !ew.has(n);
            })(d, h, m) &&
            (function (e, t, r) {
                try {
                    if ("function" == typeof e.computedStyleMap) {
                        let t = e.computedStyleMap().get("width");
                        if (null != t) return !ro(String(t).trim().toLowerCase());
                    }
                } catch {}
                let n = e.style && (e.style.width || e.style.inlineSize);
                return (
                    !(!n || ro(String(n).trim().toLowerCase())) ||
                    (!!(function (e, t) {
                        let r =
                            e.getBoundingClientRect().width -
                            (parseFloat(t.paddingLeft) || 0) -
                            (parseFloat(t.paddingRight) || 0) -
                            (parseFloat(t.borderLeftWidth) || 0) -
                            (parseFloat(t.borderRightWidth) || 0);
                        if (!(r > 0)) return !1;
                        let n = 1 / 0,
                            o = -1 / 0,
                            i = null;
                        for (let t = e.firstChild; t; t = t.nextSibling) {
                            let e;
                            if (3 === t.nodeType) {
                                if (
                                    !/\S/.test(t.nodeValue || "") ||
                                    ((i = i || document.createRange()).selectNode(t),
                                    !(e = i.getBoundingClientRect()).width && !e.height)
                                )
                                    continue;
                            } else {
                                if (1 !== t.nodeType) continue;
                                let r = en(t);
                                if ("none" === r.display || "absolute" === r.position || "fixed" === r.position)
                                    continue;
                                e = t.getBoundingClientRect();
                            }
                            (e.left < n && (n = e.left), e.right > o && (o = e.right));
                        }
                        return o !== -1 / 0 && o - n < r - 0.5;
                    })(e, t) &&
                        (r ||
                            (function (e, t) {
                                let r = e.parentElement;
                                if (!r) return !1;
                                let n = en(r),
                                    o =
                                        r.getBoundingClientRect().width -
                                        (parseFloat(n.paddingLeft) || 0) -
                                        (parseFloat(n.paddingRight) || 0) -
                                        (parseFloat(n.borderLeftWidth) || 0) -
                                        (parseFloat(n.borderRightWidth) || 0) -
                                        (parseFloat(t.marginLeft) || 0) -
                                        (parseFloat(t.marginRight) || 0);
                                return o > 0 && Math.abs(e.getBoundingClientRect().width - o) > 0.5;
                            })(e, t)))
                );
            })(e, c, m) &&
            (y = !1),
            (g = `${g}${y ? "|c" : ""}${m ? "|f" : ""}`));
        let t = h["text-wrap-mode"] || h["white-space"] || "";
        y && "nowrap" !== t && "pre" !== t && (a.reconcileRisk = (a.reconcileRisk || 0) + 1);
    }
    let b = s.snapshotKeyCache.get(g);
    (void 0 === b &&
        ((b = et(h, d, y, m)),
        s.snapshotKeyCache.size >= 2e3 && s.snapshotKeyCache.delete(s.snapshotKeyCache.keys().next().value),
        s.snapshotKeyCache.set(g, b)),
        a.styleMap.set(t, b));
}
var rp = ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"],
    rm = ["width", "inline-size", "height", "block-size"],
    rg = ["box-sizing", ...rm, "overflow-x", "overflow-y"],
    ry = /(?:box-sizing|width|height|inline-size|block-size|overflow(?:-[xy])?)\s*:/i,
    rb = "u" > typeof CSS && CSS.supports?.("text-wrap-mode", "nowrap") ? "text-wrap-mode" : "white-space",
    rw = 2;
function rx(e) {
    let t = e.parentElement;
    if (!t) return !1;
    let r = en(t).display || "";
    return r.includes("flex") || r.includes("grid");
}
ev();
var rv = new Set(["symbol", "defs"]),
    rS = new Set(["mask", "clipPath", "linearGradient", "radialGradient", "pattern", "marker", "filter"]),
    rM = new WeakMap(),
    rk = -1;
function rC(e) {
    let t = tN();
    return (
        t !== rk && ((rM = new WeakMap()), (rk = t)),
        (function e(t) {
            let r,
                n = rM.get(t);
            if (void 0 !== n) return n;
            if (
                ("http://www.w3.org/2000/svg" === t.namespaceURI &&
                    (rS.has(t.localName) ? (r = !1) : rv.has(t.localName) && (r = !0)),
                void 0 === r)
            ) {
                let n = t.parentNode;
                r = !!(n && 1 === n.nodeType) && e(n);
            }
            return (rM.set(t, r), r);
        })(e)
    );
}
function r$(e) {
    return !!(!e || e.startsWith("data:") || e.startsWith("blob:"));
}
function rA(e, t) {
    if (!e) return null;
    let r = 0;
    try {
        r = t ? t.getBoundingClientRect().width || t.width : 0;
    } catch {}
    r || (r = window.innerWidth || 1e3);
    let n = [];
    for (let t of e.split(",")) {
        let e = t.trim().split(/\s+/);
        if (!e[0]) continue;
        let o = e[1] || "",
            i = 1;
        (/^\d*\.?\d+x$/i.test(o) ? (i = parseFloat(o)) : /^\d+w$/i.test(o) && (i = parseInt(o, 10) / r),
            n.push({ url: e[0], d: i }));
    }
    if (!n.length) return null;
    n.sort((e, t) => e.d - t.d);
    let o = window.devicePixelRatio || 1;
    return (n.find((e) => e.d >= o) || n[n.length - 1]).url;
}
(eP(), eP(), s(), N(), q(), v(), J(), eR());
var rR = /::[a-zA-Z-]+(?:\([^)]*\))?$|:(?:before|after|first-letter|first-line)$/,
    rE = /^::?(?:before|after|first-letter)$/;
function rF(e) {
    let t = "";
    for (let r of e)
        if (r.media && r.cssRules) {
            let e = !1;
            try {
                e = window.matchMedia(r.conditionText || r.media.mediaText).matches;
            } catch {}
            e && (t += rF(r.cssRules));
        } else
            r.constructor?.name === "CSSSupportsRule"
                ? (t += `@supports ${r.conditionText}{${rF(r.cssRules)}}`)
                : r.cssRules && r.cssRules.length && /@media/i.test(r.cssText)
                  ? (t +=
                        r.cssText.slice(0, r.cssText.indexOf("{") + 1) +
                        (r.style ? r.style.cssText : "") +
                        rF(r.cssRules) +
                        "}")
                  : (t +=
                        r.cssText +
                        `
`);
    return t;
}
async function rN(e, t = 3) {
    let r = () => {
            try {
                return e.contentDocument || e.contentWindow?.document || null;
            } catch {
                return null;
            }
        },
        n = r(),
        o = 0;
    for (; o < t && (!n || (!n.body && !n.documentElement));)
        (await new Promise((e) => setTimeout(e, 0)), (n = r()), o++);
    return n && (n.body || n.documentElement) ? n : null;
}
function r_(e) {
    let t = 0,
        r = 0;
    if ((e.offsetWidth > 0 && (t = e.offsetWidth), e.offsetHeight > 0 && (r = e.offsetHeight), 0 === t || 0 === r))
        try {
            let n = getComputedStyle(e);
            if (0 === t) {
                let e = parseFloat(n.width);
                !isNaN(e) && e > 0 && (t = e);
            }
            if (0 === r) {
                let e = parseFloat(n.height);
                !isNaN(e) && e > 0 && (r = e);
            }
        } catch {}
    if (0 === t || 0 === r)
        try {
            if (0 === t) {
                let r = parseFloat(e.getAttribute("width"));
                !isNaN(r) && r > 0 && (t = r);
            }
            if (0 === r) {
                let t = parseFloat(e.getAttribute("height"));
                !isNaN(t) && t > 0 && (r = t);
            }
        } catch {}
    if ((0 === t || 0 === r) && (e.naturalWidth || e.naturalHeight))
        try {
            (0 === t && e.naturalWidth > 0 && (t = e.naturalWidth),
                0 === r && e.naturalHeight > 0 && (r = e.naturalHeight));
        } catch {}
    return { width: t, height: r };
}
async function rP(e, t, r) {
    let n = await rN(e, 3);
    if (!n) throw Error("The iframe document isn't ready.");
    let {
            contentWidth: o,
            contentHeight: i,
            rect: l,
        } = (function (e) {
            let t = e.getBoundingClientRect(),
                r = 0,
                n = 0,
                o = 0,
                i = 0;
            try {
                let t = getComputedStyle(e);
                ((r = parseFloat(t.borderLeftWidth) || 0),
                    (n = parseFloat(t.borderRightWidth) || 0),
                    (o = parseFloat(t.borderTopWidth) || 0),
                    (i = parseFloat(t.borderBottomWidth) || 0));
            } catch {}
            return {
                contentWidth: Math.max(0, Math.round(t.width - (r + n))),
                contentHeight: Math.max(0, Math.round(t.height - (o + i))),
                rect: t,
            };
        })(e),
        a = r?.snap;
    if (!a || "function" != typeof a.toPng) throw Error("Iframes are only captured through snapdom(el).");
    let s = { ...r, scale: 1, clip: null, __pinned: !0 },
        c = (function (e, t, r) {
            let n = e.defaultView,
                o = n ? n.scrollX : 0,
                i = n ? n.scrollY : 0,
                l = e.body ? e.body.scrollLeft : 0,
                a = e.body ? e.body.scrollTop : 0,
                s = e.documentElement ? e.documentElement.scrollLeft : 0,
                c = e.documentElement ? e.documentElement.scrollTop : 0,
                u = 0,
                d = 0,
                f = 0,
                h = 0;
            try {
                let t = n && e.body ? n.getComputedStyle(e.body) : null;
                t &&
                    ((u = (parseFloat(t.marginTop) || 0) + (parseFloat(t.paddingTop) || 0)),
                    (d = (parseFloat(t.marginRight) || 0) + (parseFloat(t.paddingRight) || 0)),
                    (f = (parseFloat(t.marginBottom) || 0) + (parseFloat(t.paddingBottom) || 0)),
                    (h = (parseFloat(t.marginLeft) || 0) + (parseFloat(t.paddingLeft) || 0)));
            } catch {}
            let p = e.createElement("style");
            if (
                (p.setAttribute("data-sd-iframe-pin", ""),
                G(p),
                (p.textContent = `html {margin: 0 !important;padding: 0 !important;width: ${t}px !important;height: ${r}px !important;min-width: ${t}px !important;min-height: ${r}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}body {margin: 0 !important;padding: ${u}px ${d}px ${f}px ${h}px !important;width: ${t}px !important;height: ${r}px !important;min-width: ${t}px !important;min-height: ${r}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}`),
                (e.head || e.documentElement).appendChild(p),
                t2(e.documentElement),
                o || i)
            )
                try {
                    (e.body && ((e.body.scrollLeft = o), (e.body.scrollTop = i)),
                        e.documentElement &&
                            (e.documentElement.scrollLeft || (e.documentElement.scrollLeft = o),
                            e.documentElement.scrollTop || (e.documentElement.scrollTop = i)));
                } catch {}
            return () => {
                try {
                    p.remove();
                } catch {}
                try {
                    (n && "function" == typeof n.scrollTo && n.scrollTo(o, i),
                        e.body && ((e.body.scrollLeft = l), (e.body.scrollTop = a)),
                        e.documentElement && ((e.documentElement.scrollLeft = s), (e.documentElement.scrollTop = c)));
                } catch {}
                t2(e.documentElement);
            };
        })(n, o, i),
        u;
    try {
        u = await a.toPng(n.documentElement, s);
    } finally {
        c();
    }
    ((u.style.display = "block"), (u.style.width = `${o}px`), (u.style.height = `${i}px`));
    let d = document.createElement("div");
    return (
        t.nodeMap.set(d, e),
        rh(e, d, t, r),
        (d.style.overflow = "hidden"),
        (d.style.display = "block"),
        d.style.width || (d.style.width = `${Math.round(l.width)}px`),
        d.style.height || (d.style.height = `${Math.round(l.height)}px`),
        d.appendChild(u),
        d
    );
}
function rT(e) {
    try {
        let t = e && e.accentColor;
        if (t && "auto" !== t && "none" !== t) return t;
        let r = e && e.color;
        if (r) return r;
    } catch {}
    return "#0a6ed1";
}
var rL = new n(80);
async function rW(e) {
    if (o.resource?.has(e)) return o.resource.get(e);
    if (rL.has(e)) return rL.get(e);
    let t = (async () => {
        let t = await $(e, { as: "dataURL", silent: !0 });
        if (!t.ok || "string" != typeof t.data) throw Error(`Couldn't read ${e}`);
        return (o.resource?.set(e, t.data), t.data);
    })();
    rL.set(e, t);
    try {
        let r = await t;
        return (rL.set(e, r), r);
    } catch (t) {
        throw (rL.delete(e), t);
    }
}
var rD = /\bblob:[^)"'\s]+/g;
function rO(e) {
    return "string" == typeof e && e.startsWith("blob:");
}
function rI(e, t) {
    let r = e.querySelectorAll ? Array.from(e.querySelectorAll(t)) : [];
    return (e.matches?.(t) && r.unshift(e), r);
}
async function rj(e, t = null) {
    if (!e) return;
    let r = new Set(),
        n = [],
        o = new Map(),
        i = (e, t, i, l) => {
            (r.add(i),
                n.push(() => {
                    o.has(i) && (e.setAttribute(t, o.get(i)), l?.());
                }));
        },
        l = (e, t) => {
            if (!e || !e.includes("blob:")) return;
            let i = e.match(rD) || [];
            if (i.length) {
                for (let e of i) r.add(e);
                n.push(() => {
                    let r = e.replace(rD, (e) => o.get(e) || e);
                    r !== e && t(r);
                });
            }
        };
    for (let l of rI(e, "img"))
        try {
            let e = l.getAttribute("src") || l.currentSrc || "";
            rO(e) && i(l, "src", e);
            let t = l.getAttribute("srcset");
            if (t && t.includes("blob:")) {
                let e = (t || "")
                    .split(",")
                    .map((e) => e.trim())
                    .filter(Boolean)
                    .map((e) => {
                        let t = e.match(/^(\S+)(\s+.+)?$/);
                        return t ? { url: t[1], desc: t[2] || "" } : null;
                    })
                    .filter(Boolean);
                for (let t of e) rO(t.url) && r.add(t.url);
                n.push(() => {
                    let t = !1;
                    for (let r of e) o.has(r.url) && ((r.url = o.get(r.url)), (t = !0));
                    t &&
                        l.setAttribute(
                            "srcset",
                            e.map((e) => (e.desc ? `${e.url} ${e.desc.trim()}` : e.url)).join(", "),
                        );
                });
            }
        } catch (e) {
            eE(t, "Couldn't inline a blob: image.", e);
        }
    for (let r of rI(e, "image"))
        try {
            let e = "http://www.w3.org/1999/xlink",
                t = r.getAttribute("href") || r.getAttributeNS?.(e, "href");
            rO(t) && i(r, "href", t, () => r.removeAttributeNS?.(e, "href"));
        } catch (e) {
            eE(t, "Couldn't inline a blob: SVG image.", e);
        }
    for (let r of rI(e, "[style*='blob:']"))
        try {
            let e = r.getAttribute("style");
            l(e, (e) => r.setAttribute("style", e));
        } catch (e) {
            eE(t, "Couldn't inline blob: URLs in a style attribute.", e);
        }
    for (let r of rI(e, "style"))
        try {
            let e = r.textContent || "";
            l(e, (e) => {
                r.textContent = e;
            });
        } catch (e) {
            eE(t, "Couldn't inline blob: URLs in a <style>.", e);
        }
    for (let r of ["poster"])
        for (let n of rI(e, `[${r}^='blob:']`))
            try {
                let e = n.getAttribute(r);
                rO(e) && i(n, r, e);
            } catch (e) {
                eE(t, `Couldn't inline the blob: URL in ${r}.`, e);
            }
    if (!r.size) return;
    let a = [...r],
        s = 0;
    for (let e of (await Promise.all(
        Array.from({ length: Math.min(4, a.length) }, async () => {
            for (; s < a.length;) {
                let e = a[s++];
                try {
                    o.set(e, await rW(e));
                } catch (e) {
                    eE(t, "Couldn't read a blob: URL; kept it as is.", e);
                }
            }
        }),
    ),
    n))
        try {
            e();
        } catch (e) {
            eE(t, "Couldn't write an inlined blob: URL.", e);
        }
}
var rz = [
        "font-family",
        "font-size",
        "font-style",
        "font-weight",
        "font-stretch",
        "font-variant",
        "font-feature-settings",
        "font-variation-settings",
        "font-kerning",
        "letter-spacing",
        "text-transform",
    ],
    rU = new Set(["text", "search", "email", "url", "tel", "number", "submit", "reset", "button"]),
    rB = /[^\s\uD800-\uDFFF]{2,}/;
function rV(e, t) {
    let r = e.ownerDocument.createRange();
    (r.setStart(e, t), r.setEnd(e, t + 1));
    let n = r.getBoundingClientRect();
    return n.left + n.width / 2;
}
eR();
var rH = new Set(["rgba(0, 0, 0, 0)", "transparent"]),
    rq = "Highlight",
    rG = (e) => Number.parseFloat(e) || 0,
    rX = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-stretch",
        "letter-spacing",
        "word-spacing",
        "text-transform",
        "text-indent",
        "text-align",
        "line-height",
        "tab-size",
        "direction",
    ];
J();
var rY = new Map(),
    rJ = new Set(["IFRAME"]);
function rQ(e, t) {
    rY.set(String(e).toUpperCase(), t);
}
function rK(e) {
    let t = en(e),
        r = t.display;
    if ("none" === r) return null;
    let n = /^(block|inline-block|flow-root|flex|inline-flex|grid|inline-grid|list-item)$/.test(r),
        o = (e, r, o, i, l) => {
            if (!n || !e?.endsWith("px")) return null;
            let a = parseFloat(e);
            if (!Number.isFinite(a) || a < 0) return null;
            if ("border-box" === t.boxSizing) return a;
            let s = i - l - o;
            return a + r + o + (s > 0 && a + r < l + s / 2 ? s : 0);
        },
        [i, l, a, s] = /scroll|auto/.test(t.overflow)
            ? [e.offsetWidth, e.clientWidth, e.offsetHeight, e.clientHeight]
            : [0, 0, 0, 0],
        c = o(
            t.width,
            (parseFloat(t.paddingLeft) || 0) + (parseFloat(t.paddingRight) || 0),
            (parseFloat(t.borderLeftWidth) || 0) + (parseFloat(t.borderRightWidth) || 0),
            i,
            l,
        ),
        u = o(
            t.height,
            (parseFloat(t.paddingTop) || 0) + (parseFloat(t.paddingBottom) || 0),
            (parseFloat(t.borderTopWidth) || 0) + (parseFloat(t.borderBottomWidth) || 0),
            a,
            s,
        );
    if (null === c || null === u) {
        let { width: t, height: r } = r_(e),
            n = t,
            o = r;
        if ((null === c && !n) || (null === u && !o)) {
            let t = e.getBoundingClientRect();
            ((n ||= t.width || 0), (o ||= t.height || 0));
        }
        ((c ??= n), (u ??= o));
    }
    let d = document.createElement("div");
    return (
        (d.style.cssText = `display:${"inline" === r ? "inline-block" : r};box-sizing:border-box;width:${c}px;height:${u}px;visibility:hidden;`),
        d
    );
}
var rZ = new Set(["style", "option", "optgroup"]),
    r0 = new Set(["img", "canvas", "video", "iframe", "object", "embed"]);
function r1(e, t) {
    return e.right >= t.left - 200 && e.left <= t.right + 200 && e.bottom >= t.top - 200 && e.top <= t.bottom + 200;
}
async function r2(e, t, r) {
    var n, o;
    let i;
    if (!e) throw Error("[SnapDOM] The element cannot be null or undefined.");
    t.slicer?.due() && (await t.slicer.pause());
    let l = new Set(),
        a = null,
        s = null;
    if (e.nodeType === Node.ELEMENT_NODE) {
        let n = (e.localName || e.tagName || "").toLowerCase(),
            o = X(e);
        if (
            (o && ("snapdom-sandbox" === e.id || e.hasAttribute("data-snapdom-sandbox"))) ||
            (e !== r.element && o) ||
            el.has(n)
        )
            return null;
        if ("foreignobject" === n && e.parentElement?.closest?.("foreignObject"))
            return (eE(t, "Skipped a nested <foreignObject>; it can't be captured."), null);
        if ("source" === n && e.parentElement?.localName === "picture") return null;
    }
    if (e.nodeType === Node.TEXT_NODE) {
        if (t.selection) {
            let r = (function (e, t) {
                let r = e.data;
                if (!r) return null;
                let n = e.parentElement;
                if (!n) return null;
                let o = [];
                for (let n of t.ranges) {
                    let t = !1;
                    try {
                        t = n.intersectsNode(e);
                    } catch {}
                    if (!t) continue;
                    let i = n.startContainer === e ? n.startOffset : 0,
                        l = n.endContainer === e ? n.endOffset : r.length;
                    l > i && o.push([i, l]);
                }
                if (0 === o.length) return null;
                let i = (function (e, t) {
                    let r;
                    if (t.styles.has(e)) return t.styles.get(e);
                    try {
                        let n = getComputedStyle(e);
                        if (
                            "none" === n.userSelect ||
                            "none" === n.webkitUserSelect ||
                            "none" === n.getPropertyValue("-webkit-user-select")
                        )
                            return (t.styles.set(e, null), null);
                        let o = getComputedStyle(e, "::selection"),
                            i = [],
                            l = o.backgroundColor,
                            a = l && !rH.has(l) && l !== n.backgroundColor;
                        (i.push(`background-color:${a ? l : rq}`),
                            o.color &&
                                o.color !== n.color &&
                                i.push(`color:${o.color}`, `-webkit-text-fill-color:${o.color}`),
                            o.textShadow && o.textShadow !== n.textShadow && i.push(`text-shadow:${o.textShadow}`),
                            o.textDecorationLine &&
                                "none" !== o.textDecorationLine &&
                                o.textDecorationLine !== n.textDecorationLine &&
                                i.push(
                                    `text-decoration:${o.textDecorationLine} ${o.textDecorationStyle || "solid"} ${o.textDecorationColor || "currentcolor"}`,
                                ),
                            (r = i.join(";")));
                    } catch {
                        r = `background-color:${rq}`;
                    }
                    return (t.styles.set(e, r), r);
                })(n, t);
                if (!i) return null;
                o.sort((e, t) => e[0] - t[0]);
                let l = e.ownerDocument || document,
                    a = l.createDocumentFragment(),
                    s = 0;
                for (let [e, t] of o) {
                    e > s && a.append(l.createTextNode(r.slice(s, e)));
                    let n = l.createElement("span");
                    (n.setAttribute("data-snapdom-selection", ""),
                        n.setAttribute("style", `all:unset;${i}`),
                        (n.textContent = r.slice(e, t)),
                        a.append(n),
                        (s = t));
                }
                return (s < r.length && a.append(l.createTextNode(r.slice(s))), a);
            })(e, t.selection);
            if (r) return r;
        }
        return e.cloneNode(!0);
    }
    if (e.nodeType !== Node.ELEMENT_NODE) return e.cloneNode(!0);
    if ("exclude" === e.getAttribute("data-capture")) {
        if ("hide" === r.excludeMode) return rK(e);
        if ("remove" === r.excludeMode) return null;
    }
    if (r.exclude && Array.isArray(r.exclude))
        for (let t of r.exclude)
            try {
                if (e.matches?.(t)) {
                    if ("hide" === r.excludeMode) return rK(e);
                    if ("remove" === r.excludeMode) return null;
                }
            } catch {
                console.warn(`[SnapDOM] Invalid exclude selector "${t}"; ignored.`);
            }
    if (r.excludePredicates)
        for (let t of r.excludePredicates)
            try {
                if (t(e)) return "remove" === r.excludeMode ? null : rK(e);
            } catch (e) {
                console.warn("[SnapDOM] Your exclude function threw; the element was kept.", e);
            }
    if ("function" == typeof r.filter)
        try {
            if (!r.filter(e)) {
                if ("hide" === r.filterMode) return rK(e);
                if ("remove" === r.filterMode) return null;
            }
        } catch (e) {
            console.warn("[SnapDOM] Your filter function threw; the element was kept.", e);
        }
    if (e !== r.element && !rZ.has(e.localName) && !m(e) && "none" === en(e).display) {
        let n = e.cloneNode(!1);
        for (let o of ("IMG" === e.tagName && (n.removeAttribute("src"), n.removeAttribute("srcset")),
        n.style.setProperty("display", "none", "important"),
        e.querySelectorAll("style"))) {
            let e = await r2(o, t, r);
            e && n.appendChild(e);
        }
        return n;
    }
    if (
        t.clip &&
        (function (e, t) {
            let r;
            if (e === t.root) return !1;
            try {
                r = e.getBoundingClientRect();
            } catch {
                return !1;
            }
            if (0 === r.width && 0 === r.height) return !1;
            let n = en(e);
            if ("inline" === n.display && !r0.has((e.localName || "").toLowerCase())) return !1;
            let o = t.rect,
                i = e.scrollWidth || 0,
                l = e.scrollHeight || 0,
                a = {
                    left: "rtl" === n.direction ? Math.min(r.left, r.right - i) : r.left,
                    top: r.top,
                    right: Math.max(r.right, r.left + i),
                    bottom: Math.max(r.bottom, r.top + l),
                },
                s = n.writingMode || "";
            if (
                ((s.startsWith("vertical") || s.startsWith("sideways")) &&
                    ((a.top = Math.min(r.top, r.bottom - l)), (a.left = Math.min(a.left, r.right - i))),
                r1(a, o))
            )
                return !1;
            let c = (e.ownerDocument || document).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
            for (; c.nextNode();) {
                let e = c.currentNode.getBoundingClientRect();
                if ((e.width > 0 || e.height > 0) && r1(e, o)) return !1;
            }
            return !0;
        })(e, t.clip)
    )
        return (function (e, t, r) {
            let n = e.cloneNode(!1);
            ("IMG" === e.tagName && (n.removeAttribute("src"), n.removeAttribute("srcset"), n.removeAttribute("sizes")),
                rh(e, n, t, r));
            let { width: o, height: i } = r_(e);
            (o > 0 && ((n.style.width = `${o}px`), (n.style.minWidth = `${o}px`), (n.style.maxWidth = `${o}px`)),
                i > 0 && ((n.style.height = `${i}px`), (n.style.minHeight = `${i}px`), (n.style.maxHeight = `${i}px`)),
                (n.style.visibility = "hidden"));
            let l = e.parentElement ? en(e.parentElement).display : "",
                a = en(e).position;
            if (!/flex|grid|table/.test(l) && ("static" === a || "relative" === a)) {
                let t = (e) => {
                        let t = en(e);
                        return "none" !== t.display && "absolute" !== t.position && "fixed" !== t.position;
                    },
                    r = e.getBoundingClientRect(),
                    o = e.previousElementSibling;
                for (; o && !t(o);) o = o.previousElementSibling;
                if (o) {
                    let e = r.top - o.getBoundingClientRect().bottom;
                    e >= 0 && (n.style.marginTop = `${e}px`);
                }
                let i = e.nextElementSibling;
                for (; i && !t(i);) i = i.nextElementSibling;
                if (i) {
                    let e = i.getBoundingClientRect().top - r.bottom;
                    e >= 0 && (n.style.marginBottom = `${e}px`);
                }
            }
            return ((n.style.boxSizing = "border-box"), n);
        })(e, t, r);
    if (r.__resolveNodeHooks)
        for (let n of r.__resolveNodeHooks) {
            let o;
            try {
                o = await n(e, r);
            } catch (e) {
                eE(t, "A plugin's resolveNode hook threw; ignored it.", e);
            }
            if (null === o) return null;
            if (o?.nodeType) return (o.nodeType === Node.ELEMENT_NODE && (t.nodeMap.set(o, e), rh(e, o, t, r)), o);
        }
    {
        let n = rJ.has(e.tagName) && rY.get(e.tagName);
        if (n) {
            let o = await n(e, t, r);
            if (void 0 !== o) return o;
        }
    }
    if ("placeholder" === e.getAttribute("data-capture")) {
        let n = e.cloneNode(!1);
        (t.nodeMap.set(n, e), rh(e, n, t, r));
        let o = document.createElement("div");
        return (
            (o.textContent = e.getAttribute("data-placeholder-text") || ""),
            (o.style.cssText =
                "color:#666;font-size:12px;text-align:center;line-height:1.4;padding:0.5em;box-sizing:border-box;"),
            n.appendChild(o),
            n
        );
    }
    {
        let n = !rJ.has(e.tagName) && rY.get(e.tagName);
        if (n) {
            let o = await n(e, t, r);
            if (void 0 !== o) return o;
        }
    }
    try {
        if (
            ((i = e.cloneNode(!1)),
            (function (e, t) {
                if (e?.nodeType !== 1 || t?.nodeType !== 1 || rC(e)) return;
                let r = e.getAttribute?.("style"),
                    n = !!(r && r.includes("var("));
                if (!n && e.attributes?.length) {
                    let t = e.attributes;
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e];
                        if (
                            r &&
                            "string" == typeof r.value &&
                            !r.value.startsWith("data:") &&
                            r.value.includes("var(")
                        ) {
                            n = !0;
                            break;
                        }
                    }
                }
                let o = null;
                if (n)
                    try {
                        o = getComputedStyle(e);
                    } catch {}
                if (n) {
                    let r = e.style;
                    if (r && r.length) {
                        let e = new Set();
                        for (let n = 0; n < r.length; n++) {
                            let i = r[n];
                            if (e.has(i)) continue;
                            e.add(i);
                            let l = r.getPropertyValue(i);
                            if (!l || !l.includes("var(")) continue;
                            let a = o && o.getPropertyValue(i);
                            if (a)
                                try {
                                    t.style.setProperty(i, a.trim(), r.getPropertyPriority(i));
                                } catch {}
                        }
                    }
                }
                if (n && e.attributes?.length) {
                    let r = e.attributes;
                    for (let e = 0; e < r.length; e++) {
                        let n = r[e];
                        if (
                            !n ||
                            "string" != typeof n.value ||
                            n.value.startsWith("data:") ||
                            !n.value.includes("var(")
                        )
                            continue;
                        let i = n.name,
                            l = o && o.getPropertyValue(i);
                        if (l)
                            try {
                                t.style.setProperty(i, l.trim());
                            } catch {}
                    }
                }
            })(e, i),
            t.nodeMap.set(i, e),
            "IMG" === e.tagName)
        ) {
            !(function (e, t, r = {}) {
                try {
                    let n = null,
                        o = en(e).content;
                    if (o && o.includes("url(")) {
                        let e = o.match(/url\(["']?([^"')]+)["']?\)/);
                        e && (n = e[1]);
                    }
                    let i = e.closest?.("picture"),
                        l = e.getAttribute("src") || "",
                        a = e.getAttribute("srcset") || "",
                        s =
                            n ||
                            (i
                                ? (function (e, t) {
                                      let r = e.currentSrc || "";
                                      if (r && !r$(r)) return r;
                                      let n = t.querySelectorAll("source[srcset]"),
                                          o = null;
                                      for (let t of n) {
                                          let r = t.getAttribute("srcset");
                                          if (!r || r$(r)) continue;
                                          let n = t.getAttribute("type");
                                          if (n && !y.test(n.trim())) continue;
                                          let i = t.getAttribute("media");
                                          if (i)
                                              try {
                                                  if (window.matchMedia(i).matches) return rA(r, e);
                                              } catch {}
                                          o || (o = rA(r, e));
                                      }
                                      return o;
                                  })(e, i)
                                : !a.trim() && l.startsWith("data:")
                                  ? l
                                  : e.currentSrc) ||
                            rA(a, e) ||
                            e.src ||
                            "";
                    if ((!s || r$(s)) && !1 !== r.resolvePicturePlaceholders) {
                        let t = (function (e) {
                            for (let t of [
                                e.getAttribute("data-src"),
                                e.getAttribute("data-lazy-src"),
                                e.getAttribute("data-original"),
                                e.getAttribute("data-hi-res-src"),
                            ])
                                if (t && !r$(t)) return t;
                            let t = e.getAttribute("data-srcset") || e.getAttribute("data-lazy-srcset");
                            if (t) {
                                let e = t.split(",")[0].trim().split(/\s+/)[0];
                                if (e && !r$(e)) return e;
                            }
                            return null;
                        })(e);
                        t && (s = t);
                    }
                    if (!s) return;
                    (t.getAttribute("src") !== s && t.setAttribute("src", s),
                        t.removeAttribute("srcset"),
                        t.removeAttribute("sizes"),
                        (t.loading = "eager"),
                        (t.decoding = "sync"));
                } catch {}
            })(e, i, r);
            try {
                let t = window.getComputedStyle(e),
                    r = parseFloat(t.width),
                    n = parseFloat(t.height);
                if (!(r > 0) || !(n > 0)) {
                    let o = r_(e),
                        i = (e) => parseFloat(t.getPropertyValue(e)) || 0,
                        l = "border-box" === t.getPropertyValue("box-sizing");
                    (r > 0 ||
                        (r =
                            o.width -
                            (l
                                ? 0
                                : i("padding-left") +
                                  i("padding-right") +
                                  i("border-left-width") +
                                  i("border-right-width"))),
                        n > 0 ||
                            (n =
                                o.height -
                                (l
                                    ? 0
                                    : i("padding-top") +
                                      i("padding-bottom") +
                                      i("border-top-width") +
                                      i("border-bottom-width"))));
                }
                let o = Math.round(1e3 * (r || 0)) / 1e3,
                    l = Math.round(1e3 * (n || 0)) / 1e3;
                (o && (i.dataset.snapdomWidth = String(o)), l && (i.dataset.snapdomHeight = String(l)));
            } catch (e) {
                eE(t, "Couldn't measure an image; kept its own size.", e);
            }
            try {
                let t = e.getAttribute("style") || "",
                    r = window.getComputedStyle(e),
                    n = (e) => {
                        let n = t.match(RegExp(`${e}\\s*:\\s*([^;]+)`, "i")),
                            o = n ? n[1].trim() : r.getPropertyValue(e);
                        return /%|auto/i.test(String(o || ""));
                    },
                    o = parseFloat(i.dataset.snapdomWidth || "0") || 0,
                    l = parseFloat(i.dataset.snapdomHeight || "0") || 0,
                    a = n("width") || !(o > 0),
                    s = n("height") || !(l > 0);
                (a && o > 0 && (i.style.width = `${o}px`), s && l > 0 && (i.style.height = `${l}px`));
                let c = r.getPropertyValue("object-fit"),
                    u = r.getPropertyValue("object-position");
                c && "fill" !== c
                    ? ((i.style.objectFit = c), u && (i.style.objectPosition = u))
                    : (o > 0 && (i.style.minWidth = `${o}px`), l > 0 && (i.style.minHeight = `${l}px`));
            } catch (e) {
                eE(t, "Couldn't fix the size of an image.", e);
            }
        }
    } catch (t) {
        throw (console.error("[SnapDOM] Couldn't copy this element:", e, t), t);
    }
    let c = null;
    if (h(e, "textarea")) {
        let { width: t, height: r } = r_(e),
            n = t || e.getBoundingClientRect().width || 0,
            o = r || e.getBoundingClientRect().height || 0;
        (n && (i.style.width = `${n}px`), o && (i.style.height = `${o}px`));
    }
    if (h(e, "input")) {
        let r = (e.type || "text").toLowerCase();
        if (("checkbox" === r || "radio" === r) && (eC() || e.indeterminate)) {
            let { el: r, applyVisual: n } = (function (e) {
                let { width: t, height: r } = r_(e),
                    n = e.getBoundingClientRect(),
                    o;
                try {
                    o = window.getComputedStyle(e);
                } catch {}
                let i = o ? parseFloat(o.width) : NaN,
                    l = o ? parseFloat(o.height) : NaN,
                    a = Math.round(t || n.width || 0),
                    s = Math.round(r || n.height || 0),
                    c = Number.isFinite(i) && i > 0 ? Math.round(i) : Math.max(12, a || 16),
                    u = Number.isFinite(l) && l > 0 ? Math.round(l) : Math.max(12, s || 16),
                    d = "checkbox" === (e.type || "text").toLowerCase(),
                    f = !!e.checked,
                    h = !!e.indeterminate,
                    p = Math.max(Math.min(c, u), 12),
                    m = Math.max(c, p),
                    g = Math.max(u, p),
                    y = "middle";
                try {
                    o && o.verticalAlign && (y = o.verticalAlign);
                } catch {}
                let b = document.createElement("div");
                (b.setAttribute("data-snapdom-input-replacement", e.type || "checkbox"),
                    (b.style.cssText = `display:inline-block;width:${m}px;height:${g}px;vertical-align:${y};flex-shrink:0;line-height:0;`));
                let w = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                function x() {
                    let e = rT(o),
                        t = p - 2;
                    if (((w.innerHTML = ""), d)) {
                        let r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        if (
                            (r.setAttribute("x", String(1)),
                            r.setAttribute("y", String(1)),
                            r.setAttribute("width", String(t)),
                            r.setAttribute("height", String(t)),
                            r.setAttribute("rx", "2"),
                            r.setAttribute("ry", "2"),
                            r.setAttribute("fill", f ? e : "none"),
                            r.setAttribute("stroke", e),
                            r.setAttribute("stroke-width", String(2)),
                            w.appendChild(r),
                            f)
                        ) {
                            let e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            (e.setAttribute("d", `M ${3} ${p / 2} L ${p / 2 - 1} ${p - 1 - 2} L ${p - 1 - 2} ${3}`),
                                e.setAttribute("stroke", "white"),
                                e.setAttribute("stroke-width", String(2)),
                                e.setAttribute("fill", "none"),
                                e.setAttribute("stroke-linecap", "round"),
                                e.setAttribute("stroke-linejoin", "round"),
                                w.appendChild(e));
                        } else if (h) {
                            let r = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
                                n = Math.max(6, t - 4);
                            (r.setAttribute("x", String((p - n) / 2)),
                                r.setAttribute("y", String((p - 2) / 2)),
                                r.setAttribute("width", String(n)),
                                r.setAttribute("height", String(2)),
                                r.setAttribute("fill", e),
                                r.setAttribute("rx", "1"),
                                w.appendChild(r));
                        }
                    } else {
                        let t = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                        if (
                            (t.setAttribute("cx", String(p / 2)),
                            t.setAttribute("cy", String(p / 2)),
                            t.setAttribute("r", String((p - 2) / 2)),
                            t.setAttribute("fill", f ? e : "none"),
                            t.setAttribute("stroke", e),
                            t.setAttribute("stroke-width", String(2)),
                            w.appendChild(t),
                            f)
                        ) {
                            let e = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
                                t = Math.max(2, (p - 4) * 0.35);
                            (e.setAttribute("cx", String(p / 2)),
                                e.setAttribute("cy", String(p / 2)),
                                e.setAttribute("r", String(t)),
                                e.setAttribute("fill", "white"),
                                w.appendChild(e));
                        }
                    }
                    (b.style.setProperty("width", `${m}px`, "important"),
                        b.style.setProperty("height", `${g}px`, "important"),
                        b.style.setProperty("min-width", `${m}px`, "important"),
                        b.style.setProperty("min-height", `${g}px`, "important"));
                }
                return (
                    w.setAttribute("width", String(m)),
                    w.setAttribute("height", String(g)),
                    w.setAttribute("viewBox", `0 0 ${p} ${p}`),
                    (w.style.cssText = `width:${m}px;height:${g}px`),
                    b.appendChild(w),
                    x(),
                    { el: b, applyVisual: x }
                );
            })(e);
            (t.nodeMap.set(r, e), (c = n), (i = r));
        } else if ("range" === r && (eC() || ek())) {
            let { el: r, applyVisual: n } = (function (e) {
                let { width: t, height: r } = r_(e),
                    n = e.getBoundingClientRect(),
                    o;
                try {
                    o = window.getComputedStyle(e);
                } catch {}
                let i = o ? parseFloat(o.width) : NaN,
                    l = o ? parseFloat(o.height) : NaN,
                    a = Number.isFinite(i) && i > 0 ? i : t || n.width || 128,
                    s = Number.isFinite(l) && l > 0 ? l : r || n.height || 16,
                    c = Number.parseFloat(e.min) || 0,
                    u = Number.isFinite(Number.parseFloat(e.max)) ? Number.parseFloat(e.max) : 100,
                    d = Number.parseFloat(e.value),
                    f = u - c,
                    h = f > 0 && Number.isFinite(d) ? Math.min(1, Math.max(0, (d - c) / f)) : 0.5,
                    p = "middle";
                try {
                    o && o.verticalAlign && (p = o.verticalAlign);
                } catch {}
                let m = document.createElement("div");
                (m.setAttribute("data-snapdom-input-replacement", "range"),
                    (m.style.cssText = `display:inline-block;width:${a}px;height:${s}px;vertical-align:${p};flex-shrink:0;line-height:0;`));
                let g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                function y() {
                    let t = rT(o),
                        r = !!e.disabled,
                        n = Math.max(2, Math.min(4, s)),
                        i = (s - n) / 2,
                        l = Math.max(10, Math.min(14, Math.max(s, 10))),
                        c = l / 2,
                        u = c + h * Math.max(0, a - l);
                    g.innerHTML = "";
                    let d = (e, t, r, o) => {
                        let l = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        (l.setAttribute("x", String(e)),
                            l.setAttribute("y", String(i)),
                            l.setAttribute("width", String(Math.max(0, t))),
                            l.setAttribute("height", String(n)),
                            l.setAttribute("rx", String(n / 2)),
                            l.setAttribute("fill", r),
                            o && l.setAttribute("fill-opacity", o),
                            g.appendChild(l));
                    };
                    (d(0, a, "#808080", "0.4"), d(0, u, t));
                    let f = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    (f.setAttribute("cx", String(u)),
                        f.setAttribute("cy", String(s / 2)),
                        f.setAttribute("r", String(c)),
                        f.setAttribute("fill", t),
                        g.appendChild(f),
                        r && g.setAttribute("opacity", "0.5"),
                        m.style.setProperty("width", `${a}px`, "important"),
                        m.style.setProperty("height", `${s}px`, "important"),
                        m.style.setProperty("min-width", `${a}px`, "important"),
                        m.style.setProperty("min-height", `${s}px`, "important"));
                }
                return (
                    g.setAttribute("width", String(a)),
                    g.setAttribute("height", String(s)),
                    g.setAttribute("viewBox", `0 0 ${a} ${s}`),
                    (g.style.cssText = `width:${a}px;height:${s}px;overflow:visible`),
                    m.appendChild(g),
                    y(),
                    { el: m, applyVisual: y }
                );
            })(e);
            (t.nodeMap.set(r, e), (c = n), (i = r));
        } else if ("color" === r && ek()) {
            let t = i,
                r = e.value || "#000000";
            ((c = () => {
                (t.style.setProperty("background-color", r, "important"),
                    t.style.setProperty("color", "transparent", "important"),
                    t.style.setProperty("-webkit-text-fill-color", "transparent", "important"),
                    t.style.setProperty("appearance", "none", "important"),
                    t.style.setProperty("-webkit-appearance", "none", "important"));
            }),
                t.removeAttribute("value"));
        } else if (("date" === r || "time" === r || "datetime-local" === r) && (eC() || ek())) {
            i.setAttribute("type", "text");
            let t = e.value;
            ("date" === r && e.valueAsDate && (t = e.valueAsDate.toLocaleDateString(void 0, { timeZone: "UTC" })),
                (i.value = t),
                i.setAttribute("value", t));
        } else {
            let t = f(e) ? ((n = e.value), "\u2022".repeat(String(n ?? "").length)) : e.value;
            ((i.value = t),
                i.setAttribute("value", t),
                void 0 !== e.checked &&
                    ((i.checked = e.checked),
                    e.checked ? i.setAttribute("checked", "") : i.removeAttribute("checked"),
                    e.indeterminate && (i.indeterminate = e.indeterminate)));
        }
    }
    if ((h(e, "input") || h(e, "textarea")) && !e.value && e.placeholder)
        try {
            let r = window.getComputedStyle(e, "::placeholder"),
                n = r && r.color;
            n &&
                "rgba(0, 0, 0, 0)" !== n &&
                ((t.__usesPlaceholder = !0),
                i.setAttribute("data-sd-ph", ""),
                i.style.setProperty("--sd-ph", n),
                i.style.setProperty("--sd-ph-o", r.opacity || "1"));
        } catch {}
    if (
        (h(e, "select") && (a = new Set(Array.from(e.options).filter((e) => e.selected))),
        h(e, "textarea") && (s = e.value),
        h(e, "input") || h(e, "textarea") || h(e, "select"))
    ) {
        (e.disabled && i.setAttribute("disabled", ""),
            e.required && i.setAttribute("required", ""),
            e.readOnly && i.setAttribute("readonly", ""),
            void 0 !== e.min && "" !== e.min && i.setAttribute("min", e.min),
            void 0 !== e.max && "" !== e.max && i.setAttribute("max", e.max),
            void 0 !== e.pattern && "" !== e.pattern && i.setAttribute("pattern", e.pattern));
        let t = e.getAttribute("aria-invalid");
        null !== t && i.setAttribute("aria-invalid", t);
    }
    if ((rC(e) || rh(e, i, t, r), c && c(), r.captureSelection && (h(e, "input") || h(e, "textarea"))))
        try {
            !(function (e, t) {
                let r = e.ownerDocument || document;
                if (r.activeElement !== e) return;
                let n = null,
                    o = null;
                try {
                    ((n = e.selectionStart), (o = e.selectionEnd));
                } catch {
                    return;
                }
                if (null == n || null == o || n === o) return;
                let i = e.value || "";
                if (("input" === e.localName && "password" === e.type && (i = "\u2022".repeat(i.length)), !i)) return;
                let l = getComputedStyle(e),
                    a = "textarea" === e.localName,
                    s = rG(l.paddingLeft),
                    c = rG(l.paddingTop),
                    u = e.clientWidth - s - rG(l.paddingRight),
                    d = e.clientHeight - c - rG(l.paddingBottom),
                    f = r.createElement("div");
                for (let e of ((f.style.cssText =
                    "position:absolute;top:0;left:-99999px;visibility:hidden;margin:0;border:0;padding:0;box-sizing:content-box;"),
                rX))
                    f.style.setProperty(e, l.getPropertyValue(e));
                a
                    ? ((f.style.whiteSpace = "pre-wrap"),
                      (f.style.overflowWrap = "break-word"),
                      (f.style.width = `${Math.max(0, u)}px`))
                    : (f.style.whiteSpace = "pre");
                let h = r.createElement("span");
                ((h.textContent = i.slice(n, o)),
                    f.append(r.createTextNode(i.slice(0, n)), h, r.createTextNode(i.slice(o))),
                    r.body.appendChild(f));
                let p = [];
                try {
                    let t = f.getBoundingClientRect(),
                        r = -e.scrollLeft,
                        n = -e.scrollTop;
                    if (!a) {
                        n += Math.max(0, (d - t.height) / 2);
                        let e = "rtl" === l.direction,
                            o = l.textAlign;
                        "start" === o ? (o = e ? "right" : "left") : "end" === o && (o = e ? "left" : "right");
                        let i = u - t.width;
                        i > 0 && ("right" === o ? (r += i) : "center" === o && (r += i / 2));
                    }
                    for (let e of h.getClientRects())
                        e.width <= 0 ||
                            e.height <= 0 ||
                            p.push({
                                x: s + (e.left - t.left) + r,
                                y: c + (e.top - t.top) + n,
                                width: e.width,
                                height: e.height,
                            });
                } finally {
                    f.remove();
                }
                if (0 === p.length) return;
                let m = (function (e, t) {
                    try {
                        let r = getComputedStyle(e, "::selection").backgroundColor;
                        if (r && !rH.has(r) && r !== t.backgroundColor) return r;
                    } catch {}
                    return rq;
                })(e, l);
                t.__snapdomFieldSelection = {
                    images: p.map(() => `linear-gradient(${m},${m})`),
                    positions: p.map((e) => `${e.x}px ${e.y}px`),
                    sizes: p.map((e) => `${e.width}px ${e.height}px`),
                    repeats: p.map(() => "no-repeat"),
                    origins: p.map(() => "padding-box"),
                    clips: p.map(() => "padding-box"),
                    base: {
                        image: l.backgroundImage,
                        position: l.backgroundPosition,
                        size: l.backgroundSize,
                        repeat: l.backgroundRepeat,
                        origin: l.backgroundOrigin,
                        clip: l.backgroundClip,
                    },
                };
            })(e, i);
        } catch (e) {
            eE(t, "Couldn't copy the selection of a text field.", e);
        }
    if (m(e) && !rC(e))
        try {
            let t = window.getComputedStyle(e);
            for (let e of [
                "fill",
                "stroke",
                "stroke-width",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "opacity",
                "fill-opacity",
                "stroke-opacity",
                "fill-rule",
                "clip-rule",
                "marker",
                "marker-start",
                "marker-mid",
                "marker-end",
                "visibility",
                "display",
                "color",
            ]) {
                let r = t.getPropertyValue(e);
                r && i.style.setProperty(e, r);
            }
            "stop" === e.localName &&
                (i.style.setProperty("stop-color", t.getPropertyValue("stop-color")),
                i.style.setProperty("stop-opacity", t.getPropertyValue("stop-opacity")));
        } catch {}
    if (e.shadowRoot) {
        tq(e.shadowRoot);
        try {
            for (let t of e.shadowRoot.querySelectorAll("slot")) for (let e of t.assignedNodes?.() || []) l.add(e);
        } catch {}
        let n = ((t.shadowScopeSeq = (t.shadowScopeSeq || 0) + 1), `s${t.shadowScopeSeq}`),
            a = `[data-sd="${n}"]`;
        ((t.shadowScopes ||= new WeakMap()), t.shadowScopes.set(e.shadowRoot, n));
        try {
            i.setAttribute("data-sd", n);
        } catch {}
        let s = (function (e) {
            let t = "";
            try {
                for (let r of (e.querySelectorAll("style").forEach((e) => {
                    let r = null;
                    try {
                        r = e.sheet && e.sheet.cssRules;
                    } catch {}
                    t +=
                        (r ? rF(r) : e.textContent || "") +
                        `
`;
                }),
                e.adoptedStyleSheets || []))
                    try {
                        r && r.cssRules && (t += rF(r.cssRules));
                    } catch {}
            } catch {}
            return t;
        })(e.shadowRoot);
        !t.__shadowPseudo && /::?(?:before|after|first-l|marker)|counter/.test(s) && (t.__shadowPseudo = !0);
        let c = (o = s)
            ? (o = (o = (o = (o = (o = o.replace(
                  /:host-context\(([^)]+)\)/g,
                  (e, t) => `:where(:where(${t.trim()}) ${a})`,
              )).replace(/:host\(([^)]+)\)/g, (e, t) => `:where(${a}:is(${t.trim()}))`)).replace(
                  /:host\b/g,
                  `:where(${a})`,
              )).replace(/::slotted\(([^)]+)\)/g, (e, t) => `:where(${a} ${t.trim()})`)).replace(
                  /(^|})(\s*)([^@}{]+){/g,
                  (e, t, r, o) => {
                      let i = (function (e, t, r = !0, n) {
                          return W(e, ",")
                              .map((e) => e.trim())
                              .filter(Boolean)
                              .map((e) => {
                                  if ((e.startsWith(":where(") && e.includes("data-sd")) || e.startsWith("@")) return e;
                                  let o = e.match(rR);
                                  if (o && rE.test(o[0])) return ":not(*)";
                                  let i = o ? e.slice(0, o.index).trim() : e,
                                      l = r
                                          ? (function (e, t) {
                                                if (!(e = e.trim())) return e;
                                                let r = t ? `[data-sd-slotted~="${t}"]` : "[data-sd-slotted]";
                                                return e.endsWith(":not([data-sd-slotted])") || e.endsWith(`:not(${r})`)
                                                    ? e
                                                    : `${e}:not(${r})`;
                                            })(i, n)
                                          : i;
                                  return `:where(${t} ${l})${o ? o[0] : ""}`;
                              })
                              .join(", ");
                      })(o, a, !0, n);
                      return `${t}${r}${i}{`;
                  },
              ))
            : "";
        !(function (e, t, r) {
            if (!t) return;
            let n = document.createElement("style");
            (n.setAttribute("data-sd", r), (n.textContent = t), e.insertBefore(n, e.firstChild || null));
        })(
            i,
            (function (e, t, r) {
                let n = [];
                for (let r of t) {
                    let t = (function (e, t) {
                        try {
                            let r = getComputedStyle(e).getPropertyValue(t).trim();
                            if (r) return r;
                        } catch {}
                        try {
                            let e = getComputedStyle(document.documentElement).getPropertyValue(t).trim();
                            if (e) return e;
                        } catch {}
                        return "";
                    })(e, r);
                    t && n.push(`${r}: ${t};`);
                }
                return n.length
                    ? `${r}{${n.join("")}}
`
                    : "";
            })(
                e,
                (function (e) {
                    let t = new Set();
                    if (!e) return t;
                    let r = /var\(\s*(--[A-Za-z0-9_-]+)\b/g,
                        n;
                    for (; (n = r.exec(e));) t.add(n[1]);
                    return t;
                })(s),
                a,
            ) + c,
            n,
        );
        let u = document.createDocumentFragment(),
            d = await Promise.all(
                Array.from(e.shadowRoot.childNodes).map((e) =>
                    e.nodeType === Node.ELEMENT_NODE && "STYLE" === e.tagName ? null : r2(e, t, r).catch(() => null),
                ),
            );
        (u.append(...d.filter((e) => !!e)), i.appendChild(u));
    }
    if ("SLOT" === e.tagName) {
        let n = t.shadowScopes?.get(e.getRootNode()),
            o = e.assignedNodes?.() || [],
            i = o.length ? e.assignedNodes?.({ flatten: !0 }) || o : [],
            l = i.length ? i : Array.from(e.childNodes),
            a = document.createDocumentFragment(),
            s = await Promise.all(
                l.map((e) =>
                    r2(e, t, r)
                        .then(
                            (e) => (
                                e &&
                                    o.length &&
                                    (function (e, t) {
                                        if (!e) return;
                                        let r = (e) => {
                                            let r = e.getAttribute("data-sd-slotted") || "";
                                            t
                                                ? ` ${r} `.includes(` ${t} `) ||
                                                  e.setAttribute("data-sd-slotted", r ? `${r} ${t}` : t)
                                                : e.setAttribute("data-sd-slotted", r);
                                        };
                                        (e.nodeType === Node.ELEMENT_NODE && r(e),
                                            e.querySelectorAll?.("*").forEach(r));
                                    })(e, n),
                                e || null
                            ),
                        )
                        .catch(() => null),
                ),
            );
        return (a.append(...s.filter((e) => !!e)), a);
    }
    let u = await Promise.all(
        Array.from(e.childNodes).map((n) =>
            l.has(n) || (e.shadowRoot && !n.assignedSlot) ? null : r2(n, t, r).catch(() => null),
        ),
    );
    if ((i.append(...u.filter((e) => !!e)), a && h(i, "select"))) {
        let e = !1;
        for (let r of i.options) {
            let n = a.has(t.nodeMap.get(r));
            ((r.selected = n), n ? r.setAttribute("selected", "") : r.removeAttribute("selected"), (e ||= n));
        }
        if (!e && !i.multiple) {
            let e = i.ownerDocument.createElement("option");
            ((e.hidden = !0),
                e.style.setProperty("display", "none", "important"),
                e.setAttribute("selected", ""),
                (e.value = ""),
                i.appendChild(e));
        }
    }
    return (null !== s && h(i, "textarea") && (i.textContent = s), i);
}
function r3(e) {
    try {
        let t = Math.max(1, Math.min(32, e.width)),
            r = Math.max(1, Math.min(32, e.height)),
            n = document.createElement("canvas");
        ((n.width = t), (n.height = r));
        let o = n.getContext("2d", { willReadFrequently: !0 });
        if (!o) return !1;
        o.drawImage(e, 0, 0, t, r);
        let i = o.getImageData(0, 0, t, r).data;
        for (let e = 3; e < i.length; e += 4) if (0 !== i[e]) return !1;
        return !0;
    } catch {
        return !1;
    }
}
async function r9(e, t, r) {
    let n = "";
    try {
        let t = r3(e);
        t && (await eS(), (t = r3(e)));
        let r = null;
        if (!t) {
            r = e.getContext("2d", { willReadFrequently: !0 });
            try {
                r && r.getImageData(0, 0, 1, 1);
            } catch {}
            ek() && (await eS());
        }
        if (!(n = e.toDataURL("image/png")) || "data:," === n) {
            try {
                r && r.getImageData(0, 0, 1, 1);
            } catch {}
            if ((await eS(), !(n = e.toDataURL("image/png")) || "data:," === n)) {
                let t = document.createElement("canvas");
                ((t.width = e.width), (t.height = e.height));
                let r = t.getContext("2d");
                r && (r.drawImage(e, 0, 0), (n = t.toDataURL("image/png")));
            }
        }
    } catch (e) {
        eE(t, "Couldn't read the pixels of a canvas; used its fallback content.", e);
    }
    r && r.debug && n && r3(e) && eE(t, "Empty canvas; capture after its first frame", e);
    let o = document.createElement("img");
    try {
        ((o.decoding = "sync"), (o.loading = "eager"));
    } catch (e) {
        eE(t, "Couldn't set image loading hints.", e);
    }
    (n && (o.src = n), (o.width = e.width), (o.height = e.height));
    let { width: i, height: l } = r_(e);
    return (
        i > 0 && (o.style.width = `${i}px`),
        l > 0 && (o.style.height = `${l}px`),
        t.nodeMap.set(o, e),
        rh(e, o, t, r),
        o
    );
}
async function r6(e, t, r) {
    let n = "",
        o = e.poster && e.paused && !e.currentTime && !e.played.length,
        i = document.createElement("img");
    try {
        ((i.decoding = "sync"), (i.loading = "eager"));
    } catch {}
    if (!o)
        try {
            let t = document.createElement("canvas");
            ((t.width = e.videoWidth || e.offsetWidth || 320), (t.height = e.videoHeight || e.offsetHeight || 240));
            let r = t.getContext("2d");
            r &&
                (r.drawImage(e, 0, 0, t.width, t.height),
                ((n = t.toDataURL(
                    !(function (e, t, r) {
                        try {
                            let n = e.getImageData(0, 0, t, r).data;
                            for (let e = 3; e < n.length; e += 4) if (255 !== n[e]) return !1;
                            return !0;
                        } catch {
                            return !1;
                        }
                    })(r, t.width, t.height)
                        ? "image/png"
                        : "image/jpeg",
                    0.95,
                )) &&
                    "data:," !== n) ||
                    (n = ""));
        } catch (e) {
            eE(t, "Couldn't capture a video frame; used its poster.", e);
        }
    (n ? (i.src = n) : e.poster && (i.src = e.poster),
        (i.width = e.videoWidth || e.offsetWidth || 0),
        (i.height = e.videoHeight || e.offsetHeight || 0));
    let { width: l, height: a } = r_(e);
    return (
        l > 0 && (i.style.width = `${l}px`),
        a > 0 && (i.style.height = `${a}px`),
        (i.style.objectFit = "contain"),
        t.nodeMap.set(i, e),
        rh(e, i, t, r),
        i
    );
}
async function r4(e, t, r) {
    if (!e.controls) return;
    let { width: n, height: o } = r_(e),
        i = Math.round(n || e.offsetWidth || 300),
        l = Math.round(o || e.offsetHeight || 54),
        a = l / 2,
        s = Math.max(4, 0.16 * l),
        c = 0.34 * l,
        u = i - 0.34 * l,
        d = c + s + 0.55 * l,
        f = Math.max(0, u - 0.7 * l - d),
        h = Math.max(9, Math.round(0.24 * l)),
        p = `<svg xmlns="http://www.w3.org/2000/svg" width="${i}" height="${l}" viewBox="0 0 ${i} ${l}"><rect width="${i}" height="${l}" rx="${Math.min(l / 2, 10)}" fill="#f1f3f4"/><path d="M ${c} ${a - s} L ${c + s} ${a} L ${c} ${a + s} Z" fill="#5f6368"/><rect x="${d}" y="${a - 1.5}" width="${f}" height="3" rx="1.5" fill="#bdc1c6"/><circle cx="${d}" cy="${a}" r="${Math.max(3, 0.09 * l)}" fill="#5f6368"/><text x="${u}" y="${a}" fill="#5f6368" font-family="sans-serif" font-size="${h}" text-anchor="end" dominant-baseline="central">0:00</text></svg>`,
        m = document.createElement("img");
    try {
        ((m.decoding = "sync"), (m.loading = "eager"));
    } catch {}
    return (
        (m.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(p)}`),
        (m.width = i),
        (m.height = l),
        (m.style.width = `${i}px`),
        (m.style.height = `${l}px`),
        t.nodeMap.set(m, e),
        rh(e, m, t, r),
        m
    );
}
async function r5(e, t, r) {
    let n = e.getAttribute("data") || e.getAttribute("src") || "",
        o = (e.getAttribute("type") || "").toLowerCase(),
        i = /^image\//.test(o) || /\.(png|jpe?g|gif|webp|avif|bmp|ico|svg)(\?|#|$)/i.test(n);
    if (n && i) {
        let o = document.createElement("img");
        try {
            ((o.decoding = "sync"), (o.loading = "eager"));
        } catch {}
        o.src = n;
        let { width: i, height: l } = r_(e);
        return (
            i > 0 && (o.style.width = `${i}px`),
            l > 0 && (o.style.height = `${l}px`),
            t.nodeMap.set(o, e),
            rh(e, o, t, r),
            o
        );
    }
    let l = null;
    try {
        l = e.contentDocument;
    } catch {}
    if (l)
        try {
            let n = await rP(e, t, r);
            if (n) return n;
        } catch {}
    n &&
        console.warn(`[SnapDOM] Couldn't capture <${e.localName}>${o ? ` (${o})` : ""}; showing its fallback content.`);
}
(rQ("IFRAME", async function e(e, t, r) {
    let n = !1;
    try {
        n = !!(e.contentDocument || e.contentWindow?.document);
    } catch (e) {
        eE(t, "Couldn't tell if an iframe is same-origin; treated it as cross-origin.", e);
    }
    if (n)
        try {
            return await rP(e, t, r);
        } catch (e) {
            console.warn("[SnapDOM] Couldn't capture an iframe, so it was left out.", e);
        }
    if (
        (n ||
            console.warn(
                r.placeholders
                    ? "[SnapDOM] Can't capture a cross-origin iframe; showing a placeholder. Set placeholders: false to hide it."
                    : "[SnapDOM] Can't capture a cross-origin iframe; left it out.",
                e,
            ),
        r.placeholders)
    ) {
        let { width: n, height: o } = r_(e),
            i = document.createElement("div");
        return (
            (i.style.cssText = `width:${n}px;height:${o}px;background-image:repeating-linear-gradient(45deg,#ddd,#ddd 5px,#f9f9f9 5px,#f9f9f9 10px);display:flex;align-items:center;justify-content:center;font-size:12px;color:#555;border:1px solid #aaa;`),
            rh(e, i, t, r),
            i
        );
    }
    {
        let { width: n, height: o } = r_(e),
            i = document.createElement("div");
        return (
            (i.style.cssText = `display:inline-block;width:${n}px;height:${o}px;visibility:hidden;`), rh(e, i, t, r), i
        );
    }
}),
    rQ("CANVAS", r9),
    rQ("VIDEO", r6),
    rQ("AUDIO", r4),
    rQ("OBJECT", r5),
    rQ("EMBED", r5),
    eP(),
    v(),
    ev(),
    s(),
    J());
var r8 = [
        /font\s*awesome/i,
        /material\s*icons/i,
        /ionicons/i,
        /glyphicons/i,
        /feather/i,
        /bootstrap\s*icons/i,
        /remix\s*icons/i,
        /heroicons/i,
        /layui/i,
        /lucide/i,
    ],
    r7 = Object.assign(
        {
            materialIconsFilled:
                "https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
            materialIconsOutlined:
                "https://fonts.gstatic.com/s/materialiconsoutlined/v110/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.woff2",
            materialIconsRound:
                "https://fonts.gstatic.com/s/materialiconsround/v109/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2",
            materialIconsSharp:
                "https://fonts.gstatic.com/s/materialiconssharp/v110/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvRImcycg.woff2",
        },
        ("u" > typeof window && window.__SNAPDOM_ICON_FONTS__) || {},
    );
function ne(e, t) {
    let r = "string" == typeof e ? e : "";
    for (let e of r8) if (e.test(r)) return !0;
    if (t) {
        for (let e of t) if (e instanceof RegExp && e.test(r)) return !0;
    }
    return !!(
        /icon/i.test(r) ||
        /glyph/i.test(r) ||
        /symbols/i.test(r) ||
        /feather/i.test(r) ||
        /fontawesome/i.test(r)
    );
}
function nt(e, t) {
    let r;
    if ("string" != typeof e || !e) return !1;
    try {
        r = new URL(e, "u" > typeof location ? location.href : void 0);
    } catch {
        return ne(e, t);
    }
    let n = r.searchParams
        .getAll("family")
        .flatMap((e) => e.split("|"))
        .map((e) => e.split(":")[0].trim())
        .filter(Boolean);
    return n.length ? n.every((e) => ne(e, t)) : ne(e, t);
}
var nr = new Map();
async function nn(e, t, r) {
    let n = String(e || ""),
        o = n.toLowerCase(),
        i = String(t || "").toLowerCase();
    if ((/\bmaterial\s*icons\b/.test(o) && !/\bsymbols\b/.test(o)) || !/\bmaterial\s*symbols\b/.test(o))
        return { familyForMeasure: n, familyForCanvas: n };
    let l = r && (r.FILL ?? r.fill),
        a = "outlined";
    /\brounded\b/.test(i) || /\bround\b/.test(i)
        ? (a = "rounded")
        : /\bsharp\b/.test(i)
          ? (a = "sharp")
          : /\boutlined\b/.test(i) && (a = "outlined");
    let s = null;
    if (
        (1 === l &&
            ("outlined" === a && r7.materialIconsFilled
                ? (s = { url: r7.materialIconsFilled, alias: "snapdom-mi-filled" })
                : "rounded" === a && r7.materialIconsRound
                  ? (s = { url: r7.materialIconsRound, alias: "snapdom-mi-round" })
                  : "sharp" === a &&
                    r7.materialIconsSharp &&
                    (s = { url: r7.materialIconsSharp, alias: "snapdom-mi-sharp" })),
        !s)
    )
        return { familyForMeasure: n, familyForCanvas: n };
    if (!nr.has(s.alias))
        try {
            let e = new FontFace(s.alias, `url(${s.url})`, { style: "normal", weight: "400" });
            (await e.load(), document.fonts.add(e), nr.set(s.alias, !0));
        } catch {
            return (nr.set(s.alias, !1), { familyForMeasure: n, familyForCanvas: n });
        }
    if (!1 === nr.get(s.alias)) return { familyForMeasure: n, familyForCanvas: n };
    let c = `"${s.alias}"`;
    return { familyForMeasure: c, familyForCanvas: c };
}
async function no(e = "Material Icons", t = 24) {
    try {
        await Promise.all([
            document.fonts.load(`400 ${t}px "${String(e).replace(/["']/g, "")}"`),
            document.fonts.ready,
        ]);
    } catch {}
}
async function ni(
    e,
    {
        family: t = "Material Icons",
        weight: r = "normal",
        fontSize: n = 32,
        color: o = "#000",
        variation: i = "",
        className: l = "",
    } = {},
) {
    let a = String(t || "").replace(/^['"]+|['"]+$/g, ""),
        s = window.devicePixelRatio || 1,
        c = (function (e = "") {
            let t = Object.create(null),
                r = String(e || ""),
                n = /['"]?\s*([A-Za-z]{3,4})\s*['"]?\s*([+-]?\d+(?:\.\d+)?)\s*/g,
                o;
            for (; (o = n.exec(r));) t[o[1].toUpperCase()] = Number(o[2]);
            return t;
        })(i),
        { familyForMeasure: u, familyForCanvas: d } = await nn(a, l, c);
    await no(d.replace(/^["']+|["']+$/g, ""), n);
    let f = document.createElement("span");
    (G(f),
        (f.textContent = e),
        (f.style.position = "absolute"),
        (f.style.visibility = "hidden"),
        (f.style.left = "-99999px"),
        (f.style.whiteSpace = "nowrap"),
        (f.style.fontFamily = u),
        (f.style.fontWeight = String(r || "normal")),
        (f.style.fontSize = `${n}px`),
        (f.style.lineHeight = "1"),
        (f.style.margin = "0"),
        (f.style.padding = "0"),
        (f.style.fontFeatureSettings = "'liga' 1"),
        (f.style.fontVariantLigatures = "normal"),
        (f.style.color = o),
        document.body.appendChild(f));
    let h = f.getBoundingClientRect(),
        p = Math.max(1, Math.ceil(h.width)),
        m = Math.max(1, Math.ceil(h.height));
    document.body.removeChild(f);
    let g = document.createElement("canvas");
    ((g.width = p * s), (g.height = m * s));
    let y = g.getContext("2d");
    (y.scale(s, s),
        (y.font = `${r ? `${r} ` : ""}${n}px ${d}`),
        (y.textAlign = "left"),
        (y.textBaseline = "top"),
        (y.fillStyle = o));
    try {
        y.fontKerning = "normal";
    } catch {}
    return (y.fillText(e, 0, 0), { dataUrl: g.toDataURL(), width: p, height: m });
}
async function nl(e, t, r = new Map()) {
    if (e?.nodeType !== 1) return 0;
    let n = '.material-icons, [class*="material-symbols"]',
        o = Array.from(e.querySelectorAll(n)).filter((e) => e && e.textContent && e.textContent.trim());
    if ((e.matches?.(n) && e.textContent && e.textContent.trim() && o.unshift(e), 0 === o.length)) return 0;
    let i =
        t?.nodeType === 1
            ? Array.from(t.querySelectorAll(n)).filter((e) => e && e.textContent && e.textContent.trim())
            : [];
    t?.nodeType === 1 && t.matches?.(n) && t.textContent && t.textContent.trim() && i.unshift(t);
    let l = 0;
    for (let e = 0; e < o.length; e++) {
        let t = o[e],
            n = (r && r.get(t)) || i[e] || null;
        try {
            let e = getComputedStyle(n || t),
                r = e.fontFamily || "Material Icons";
            if (
                !(function (e = "") {
                    let t = String(e).toLowerCase();
                    return /\bmaterial\s*icons\b/.test(t) || /\bmaterial\s*symbols\b/.test(t);
                })(r)
            )
                continue;
            let o = (n || t).textContent.trim();
            if (!o) continue;
            let i = parseInt(e.fontSize, 10) || 24,
                a = e.fontWeight && "normal" !== e.fontWeight ? e.fontWeight : "normal",
                s = (function (e) {
                    let t = e.getPropertyValue("-webkit-text-fill-color")?.trim() || "",
                        r = /^transparent$/i.test(t) || /rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/i.test(t);
                    if (t && !r && "currentcolor" !== t.toLowerCase()) return t;
                    let n = e.color?.trim();
                    return n && "inherit" !== n ? n : "#000";
                })(e),
                c = e.fontVariationSettings && "normal" !== e.fontVariationSettings ? e.fontVariationSettings : "",
                u = (n || t).className || "",
                {
                    dataUrl: d,
                    width: f,
                    height: h,
                } = await ni(o, { family: r, weight: a, fontSize: i, color: s, variation: c, className: u });
            t.textContent = "";
            let p = t.ownerDocument.createElement("img");
            ((p.src = d),
                (p.alt = o),
                (p.style.height = `${i}px`),
                (p.style.width = `${Math.max(1, Math.round((f / h) * i))}px`),
                (p.style.objectFit = "contain"),
                (p.style.verticalAlign = getComputedStyle(t).verticalAlign || "baseline"),
                t.appendChild(p),
                l++);
        } catch {}
    }
    return l;
}
async function na(e, t, r, n = 32, o = "#000", i = "normal") {
    t = t.replace(/^['"]+|['"]+$/g, "");
    let l = window.devicePixelRatio || 1;
    try {
        await document.fonts.ready;
    } catch {}
    let a = document.createElement("span");
    (G(a),
        (a.textContent = e),
        (a.style.position = "absolute"),
        (a.style.visibility = "hidden"),
        (a.style.fontFamily = `"${t}"`),
        (a.style.fontWeight = r || "normal"),
        (a.style.fontStyle = i || "normal"),
        (a.style.fontSize = `${n}px`),
        (a.style.lineHeight = "1"),
        (a.style.whiteSpace = "nowrap"),
        (a.style.padding = "0"),
        (a.style.margin = "0"),
        document.body.appendChild(a));
    let s = a.getBoundingClientRect(),
        c = Math.ceil(s.width),
        u = Math.ceil(s.height);
    document.body.removeChild(a);
    let d = document.createElement("canvas");
    ((d.width = Math.max(1, c * l)), (d.height = Math.max(1, u * l)));
    let f = d.getContext("2d");
    return (
        f.scale(l, l),
        (f.font = `${i || "normal"} ${r || "normal"} ${n}px "${t}"`),
        (f.textAlign = "left"),
        (f.textBaseline = "top"),
        (f.fillStyle = o),
        f.fillText(e, 0, 0),
        { dataUrl: d.toDataURL(), width: c, height: u }
    );
}
(N(), eR(), J());
var ns = new Set([
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
        "emoji",
        "math",
        "fangsong",
        "ui-serif",
        "ui-sans-serif",
        "ui-monospace",
        "ui-rounded",
    ]),
    nc = ["katex", "mathjax", "mathml"];
function nu(e) {
    if (!e) return "";
    for (let t of e.split(",")) {
        let e = t.trim().replace(/^['"]+|['"]+$/g, "");
        if (e && !ns.has(e.toLowerCase())) return e;
    }
    return "";
}
function nd(e) {
    let t = String(e ?? "400")
        .trim()
        .toLowerCase();
    if ("normal" === t) return 400;
    if ("bold" === t) return 700;
    let r = parseInt(t, 10);
    return Number.isFinite(r) ? Math.min(900, Math.max(100, r)) : 400;
}
function nf(e) {
    let t = String(e ?? "normal")
        .trim()
        .toLowerCase();
    return t.startsWith("italic") ? "italic" : t.startsWith("oblique") ? "oblique" : "normal";
}
function nh(e, t) {
    return (
        e &&
        e.replace(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g, (e, r, n) => {
            let o = (n || "").trim();
            if (!o || /^data:|^blob:|^https?:|^file:|^about:/i.test(o)) return e;
            let i = o;
            try {
                i = new URL(o, t || location.href).href;
            } catch {}
            return `url("${i}")`;
        })
    );
}
var np = /@import\s+(?:url\(\s*(['"]?)([^)"']+)\1\s*\)|(['"])([^"']+)\3)([^;]*);/g;
async function nm(e, t, r) {
    if (!e) return e;
    let n = new Set();
    async function o(e, t, i = 0) {
        if (i > 4) return (console.warn(`[SnapDOM] Too many nested @import rules in ${t}; stopped at 4 levels.`), e);
        let l = "",
            a = 0,
            s,
            c = RegExp(np.source, "g");
        for (; (s = c.exec(e));) {
            ((l += e.slice(a, s.index)), (a = c.lastIndex));
            let u = (function (e, t) {
                try {
                    return new URL(e, t || location.href).href;
                } catch {
                    return e;
                }
            })((s[2] || s[4] || "").trim(), t);
            if (n.has(u)) {
                console.warn(`[SnapDOM] Skipped an @import that loops back: ${u}`);
                continue;
            }
            n.add(u);
            let d = "";
            try {
                let e = await $(u, { as: "text", useProxy: r, silent: !0 });
                e.ok && "string" == typeof e.data && (d = e.data);
            } catch {}
            d
                ? ((d = nh(d, u)),
                  (d = await o(d, u, i + 1)),
                  (l += `
/* inlined: ${u} */
${d}
`))
                : (l += s[0]);
        }
        return l + e.slice(a);
    }
    let i = nh(e, t || location.href);
    return await o(i, t || location.href, 0);
}
var ng = /url\((["']?)([^"')]+)\1\)/g,
    ny = /@font-face[^{}]*\{[^}]*\}/g;
function nb(e, t, r = "") {
    return (e.match(RegExp(`${t}\\s*:\\s*([^;}]+)[;}]`, "i"))?.[1] || r).trim();
}
function nw(e) {
    if (!e) return [];
    let t = [];
    for (let r of e
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean)) {
        let e = r.match(/^U\+([0-9A-Fa-f?]+)(?:-([0-9A-Fa-f?]+))?$/);
        if (!e) continue;
        let n = e[1],
            o = e[2],
            i = (e) =>
                e.includes("?")
                    ? [parseInt(e.replace(/\?/g, "0"), 16), parseInt(e.replace(/\?/g, "F"), 16)]
                    : parseInt(e, 16);
        if (o) {
            let e = i(n),
                r = i(o),
                l = Array.isArray(e) ? e[0] : e,
                a = Array.isArray(r) ? r[1] : r;
            t.push([Math.min(l, a), Math.max(l, a)]);
        } else {
            let e = i(n);
            Array.isArray(e) ? t.push([e[0], e[1]]) : t.push([e, e]);
        }
    }
    return t;
}
function nx(e, t) {
    if (!t.length || !e || 0 === e.size) return !0;
    for (let r of e) for (let [e, n] of t) if (r >= e && r <= n) return !0;
    return !1;
}
function nv(e, t) {
    let r = [];
    if (!e) return r;
    for (let n of e.matchAll(ng)) {
        let e = (n[2] || "").trim();
        if (!(!e || e.startsWith("data:"))) {
            if (!/^https?:/i.test(e))
                try {
                    e = new URL(e, t || location.href).href;
                } catch {}
            r.push(e);
        }
    }
    return r;
}
async function nS(e, t, r = "") {
    let n = e;
    for (let i of e.matchAll(ng)) {
        let e = c(i[0]);
        if (!e) continue;
        let l = e;
        if (!l.startsWith("http") && !l.startsWith("data:"))
            try {
                l = new URL(l, t || location.href).href;
            } catch {}
        if (o.resource?.has(l)) {
            n = n.replace(i[0], `url(${o.resource.get(l)})`);
            continue;
        }
        try {
            let e = await $(l, { as: "dataURL", useProxy: r, silent: !0 });
            if (e.ok && "string" == typeof e.data) {
                let t = e.data;
                (o.resource?.set(l, t), (n = n.replace(i[0], `url(${t})`)));
            }
        } catch {
            console.warn("[SnapDOM] Couldn't load font file:", l);
        }
    }
    return n;
}
function nM(e = {}) {
    let t = new Set((e.families || []).map((e) => String(e).toLowerCase())),
        r = new Set((e.domains || []).map((e) => String(e).toLowerCase())),
        n = new Set((e.subsets || []).map((e) => String(e).toLowerCase()));
    return (e, o) => {
        if (t.size && t.has(e.family.toLowerCase())) return !0;
        if (r.size)
            for (let t of e.srcUrls)
                try {
                    if (r.has(new URL(t).host.toLowerCase())) return !0;
                } catch {}
        if (n.size) {
            let e = (function (e) {
                if (!e.length) return null;
                let t = (t, r) => e.some(([e, n]) => !(n < t || e > r)),
                    r = t(0, 255) || t(305, 305),
                    n = t(256, 591) || t(7680, 7935),
                    o = t(880, 1023),
                    i = t(1024, 1279);
                return t(7840, 7929) || t(258, 259) || t(416, 417) || t(431, 432)
                    ? "vietnamese"
                    : i
                      ? "cyrillic"
                      : o
                        ? "greek"
                        : n
                          ? "latin-ext"
                          : r
                            ? "latin"
                            : null;
            })(o);
            if (e && n.has(e)) return !0;
        }
        return !1;
    };
}
var nk = new WeakMap(),
    nC = 0;
async function n$(e, t, r, n) {
    let o,
        i = n.doc?.defaultView || window;
    if (e.disabled || (e.media?.mediaText && !i.matchMedia(e.media.mediaText).matches)) return;
    try {
        o = e.cssRules || [];
    } catch {
        return;
    }
    let l = (e, t) => {
        try {
            return new URL(e, t || location.href).href;
        } catch {
            return e;
        }
    };
    for (let e of o) {
        if (e.type === CSSRule.IMPORT_RULE && e.styleSheet) {
            let o = e.href ? l(e.href, t) : t;
            if (n.depth >= 4) {
                console.warn(`[SnapDOM] Too many nested @import rules in ${o}; stopped at 4 levels.`);
                continue;
            }
            if (o && n.visitedSheets.has(o)) {
                console.warn(`[SnapDOM] Skipped an @import that loops back: ${o}`);
                continue;
            }
            o && n.visitedSheets.add(o);
            let i = { ...n, depth: (n.depth || 0) + 1 };
            await n$(e.styleSheet, o, r, i);
            continue;
        }
        if (e.cssRules?.length) {
            if (
                (e.type === CSSRule.MEDIA_RULE && !i.matchMedia(e.conditionText).matches) ||
                (e.type === CSSRule.SUPPORTS_RULE && !i.CSS.supports(e.conditionText))
            )
                continue;
            await n$(e, t, r, n);
            continue;
        }
        if (e.type === CSSRule.FONT_FACE_RULE) {
            let o = nu((e.style.getPropertyValue("font-family") || "").trim());
            if (!o || ne(o, n.iconMatchers)) continue;
            let i = (e.style.getPropertyValue("font-weight") || "").trim(),
                l = (e.style.getPropertyValue("font-style") || "").trim(),
                a = (e.style.getPropertyValue("font-stretch") || "").trim(),
                s = (e.style.getPropertyValue("font-variation-settings") || "").trim(),
                c = (e.style.getPropertyValue("src") || "").trim(),
                u = (e.style.getPropertyValue("unicode-range") || "").trim(),
                d = i || "400",
                f = l || "normal",
                h = a || "100%",
                p =
                    (l ? `font-style:${l};` : "") +
                    (i ? `font-weight:${i};` : "") +
                    (a ? `font-stretch:${a};` : "") +
                    (s ? `font-variation-settings:${s};` : "") +
                    (u ? `unicode-range:${u};` : ""),
                m = n.faceMatchesRequired(o, f, d, h);
            if (!m && !n.requiredIndex.has(o.toLowerCase())) continue;
            let g = nw(u);
            if (!nx(n.usedCodepoints, g)) continue;
            let y = {
                family: o,
                weightSpec: d,
                styleSpec: f,
                stretchSpec: h,
                unicodeRange: u,
                srcRaw: c,
                srcUrls: nv(c, t || location.href),
                href: t || location.href,
            };
            if (n.simpleExcluder && n.simpleExcluder(y, g)) continue;
            if (!m) {
                n.provisionalFaces.push({
                    family: o.toLowerCase(),
                    block: `@font-face{font-family:${o};src:${c};${p}}`,
                    srcRaw: c,
                    baseHref: t || location.href,
                });
                continue;
            }
            n.coveredFamilies.add(o.toLowerCase());
            let b = `"${String(o)
                .replace(/^\s*["']|["']\s*$/g, "")
                .replace(/(["\\])/g, "\\$1")}"`;
            if (/url\(/i.test(c)) {
                let e = await nS(c, t || location.href, n.useProxy);
                await r(`@font-face{font-family:${b};src:${e};${p}}`);
            } else await r(`@font-face{font-family:${b};src:${c};${p}}`);
        }
    }
}
async function nA({
    required: e,
    usedCodepoints: t,
    exclude: r,
    localFonts: n = [],
    useProxy: i = "",
    fontStylesheetDomains: l = [],
    iconMatchers: a = [],
    doc: s = document,
} = {}) {
    (e instanceof Set || (e = new Set()), t instanceof Set || (t = new Set()));
    let c = new Map();
    for (let t of e) {
        let [e, r, n, o] = String(t).split("__");
        if (!e) continue;
        let i = e.toLowerCase(),
            l = c.get(i) || [];
        (l.push({ w: parseInt(r, 10), s: n, st: parseInt(o, 10) }), c.set(i, l));
    }
    function u(e, t, r, n) {
        let o,
            i = String(e).toLowerCase();
        if (!c.has(i)) return !1;
        let l = c.get(i),
            a = (function (e) {
                let t = String(e || "400").trim(),
                    r = t.match(/^(\d{2,3})\s+(\d{2,3})$/);
                if (r) {
                    let e = nd(r[1]),
                        t = nd(r[2]);
                    return { min: Math.min(e, t), max: Math.max(e, t) };
                }
                let n = nd(t);
                return { min: n, max: n };
            })(r),
            s =
                "italic" ===
                (o = String(t || "normal")
                    .trim()
                    .toLowerCase())
                    ? { kind: "italic" }
                    : o.startsWith("oblique")
                      ? { kind: "oblique" }
                      : { kind: "normal" },
            u = (function (e) {
                let t = String(e || "100%").trim(),
                    r = t.match(/(\d+(?:\.\d+)?)\s*%\s+(\d+(?:\.\d+)?)\s*%/);
                if (r) {
                    let e = parseFloat(r[1]),
                        t = parseFloat(r[2]);
                    return { min: Math.min(e, t), max: Math.max(e, t) };
                }
                let n = t.match(/(\d+(?:\.\d+)?)\s*%/),
                    o = n ? parseFloat(n[1]) : 100;
                return { min: o, max: o };
            })(n),
            d = a.min !== a.max,
            f = a.min,
            h = (e) =>
                ("normal" === s.kind && "normal" === e) || ("normal" !== s.kind && ("italic" === e || "oblique" === e)),
            p = !1;
        for (let e of l) {
            let t = d ? e.w >= a.min && e.w <= a.max : e.w === f,
                r = h(nf(e.s)),
                n = e.st >= u.min && e.st <= u.max;
            if (t && r && n) {
                p = !0;
                break;
            }
        }
        if (p) return !0;
        if (!d)
            for (let e of l) {
                let t = h(nf(e.s)),
                    r = e.st >= u.min && e.st <= u.max;
                if (300 >= Math.abs(f - e.w) && t && r) return !0;
            }
        if (!d && "normal" === s.kind && l.some((e) => "normal" !== nf(e.s)))
            for (let e of l) {
                let t = 300 >= Math.abs(f - e.w),
                    r = e.st >= u.min && e.st <= u.max;
                if (t && r) return !0;
            }
        return !1;
    }
    let d = nM(r);
    (tF(s), t1());
    let f = (function (e, t, r, n, o, i, l, a, s) {
        var c;
        let u,
            d = Array.from(e || [])
                .sort()
                .join("|"),
            f = 0,
            h = 0;
        for (let e of l || []) {
            let t = Math.imul(e, 0x9e3779b1);
            ((t ^= t >>> 15), (t = Math.imul(t, 0x85ebca6b)), (t ^= t >>> 13), (f = (f + t) | 0), h++);
        }
        let p = t
                ? JSON.stringify({
                      families: (t.families || []).map((e) => String(e).toLowerCase()).sort(),
                      domains: (t.domains || []).map((e) => String(e).toLowerCase()).sort(),
                      subsets: (t.subsets || []).map((e) => String(e).toLowerCase()).sort(),
                  })
                : "",
            m = (r || [])
                .map(
                    (e) =>
                        `${(e.family || "").toLowerCase()}::${e.weight || "normal"}::${e.style || "normal"}::${e.stretchPct ?? 100}::${e.src || ""}`,
                )
                .sort()
                .join("|"),
            g = (o || [])
                .map((e) => String(e).toLowerCase())
                .sort()
                .join("|"),
            y = ((c = i || document), void 0 === (u = nk.get(c)) && ((u = nC++), nk.set(c, u)), u),
            b = (a || [])
                .map((e) => String(e))
                .sort()
                .join("|");
        return `fonts-embed-css::req=${d}::ex=${p}::lf=${m}::px=${n || ""}::fd=${g}::doc=${y}::cp=${f}::n=${h}::ic=${b}::env=${s}`;
    })(e, r, n, i, l, s, t, a, tF(s));
    if (o.resource?.has(f)) return o.resource.get(f);
    let h = (function (e) {
            let t = new Set();
            for (let r of e || []) {
                let e = String(r).split("__")[0]?.trim();
                e && t.add(e);
            }
            return t;
        })(e),
        p = [];
    for (let e of s.querySelectorAll("style"))
        for (let t of (e.textContent || "").matchAll(np)) {
            let e = (t[2] || t[4] || "").trim();
            !(!e || nt(e, a)) && (s.querySelector(`link[rel="stylesheet"][href="${e}"]`) || p.push(e));
        }
    let m = [];
    p.length &&
        (await Promise.all(
            p.map(
                (e) =>
                    new Promise((t) => {
                        if (s.querySelector(`link[rel="stylesheet"][href="${e}"]`)) return t(null);
                        let r = s.createElement("link");
                        ((r.rel = "stylesheet"), (r.href = e), G(r), r.setAttribute("data-snapdom", "injected-import"));
                        let n = setTimeout(() => t(null), 3e3),
                            o = (e) => {
                                (clearTimeout(n), t(e));
                            };
                        ((r.onload = () => o(r)), (r.onerror = () => o(null)), s.head.appendChild(r), m.push(r));
                    }),
            ),
        ));
    let g = "",
        y = new Set(),
        b = [],
        w = Array.from(s.querySelectorAll('link[rel="stylesheet"]')).filter((e) => !!e.href);
    for (let e of m)
        try {
            e.remove();
        } catch {}
    for (let e of w)
        try {
            if (nt(e.href, a)) continue;
            let n = "",
                o = !1;
            try {
                o = new URL(e.href, location.href).origin === location.origin;
            } catch {}
            if (!o) {
                let t = Array.isArray(l) ? l : [];
                if (
                    !(function (e, t, r = []) {
                        if (!e) return !1;
                        try {
                            let n = new URL(e, location.href);
                            if (n.origin === location.origin) return !0;
                            let o = n.host.toLowerCase();
                            if (
                                [
                                    "fonts.googleapis.com",
                                    "fonts.gstatic.com",
                                    "use.typekit.net",
                                    "p.typekit.net",
                                    "kit.fontawesome.com",
                                    "use.fontawesome.com",
                                    "cdn.jsdelivr.net",
                                    "unpkg.com",
                                    "cdnjs.cloudflare.com",
                                    "esm.sh",
                                ].some((e) => o.endsWith(e)) ||
                                r.some((e) => o === e.toLowerCase() || o.endsWith("." + e.toLowerCase()))
                            )
                                return !0;
                            let i = (n.pathname + n.search).toLowerCase();
                            if (/\bfont(s)?\b/.test(i) || /\.woff2?(\b|$)/.test(i) || nc.some((e) => i.includes(e)))
                                return !0;
                            for (let e of t) {
                                let t = e.toLowerCase().replace(/\s+/g, "+"),
                                    r = e.toLowerCase().replace(/\s+/g, "-"),
                                    n =
                                        e && "string" == typeof e
                                            ? e
                                                  .replace(/\s+(variable|vf|v[0-9]+)$/i, "")
                                                  .trim()
                                                  .toLowerCase()
                                                  .replace(/\s+/g, "-")
                                            : "";
                                if (i.includes(t) || i.includes(r) || (n && i.includes(n))) return !0;
                            }
                            return !1;
                        } catch {
                            return !1;
                        }
                    })(e.href, h, t)
                )
                    continue;
            }
            if (o) {
                let t = Array.from(s.styleSheets).find((t) => t.href === e.href);
                if (t)
                    try {
                        let e = t.cssRules || [];
                        n = Array.from(e)
                            .map((e) => e.cssText)
                            .join("");
                    } catch {}
            }
            if (!n) {
                let t = await $(e.href, { as: "text", useProxy: i });
                t?.ok && "string" == typeof t.data && (n = t.data);
            }
            n = await nm(n, e.href, i);
            let f = "";
            for (let o of n.match(ny) || []) {
                let n = nb(o, "font-family"),
                    l = nu(n);
                if (!l || ne(l, a)) continue;
                let s = nb(o, "font-weight", "400"),
                    h = nb(o, "font-style", "normal"),
                    p = nb(o, "font-stretch", "100%"),
                    m = nb(o, "unicode-range"),
                    g = nb(o, "src"),
                    w = nv(g, e.href),
                    x = u(l, h, s, p);
                if (!x && !c.has(l.toLowerCase())) continue;
                let v = nw(m);
                if (!nx(t, v)) continue;
                let S = {
                    family: l,
                    weightSpec: s,
                    styleSpec: h,
                    stretchSpec: p,
                    unicodeRange: m,
                    srcRaw: g,
                    srcUrls: w,
                    href: e.href,
                };
                if (r && d(S, v)) continue;
                if (!x) {
                    b.push({ family: l.toLowerCase(), block: o, srcRaw: g, baseHref: e.href });
                    continue;
                }
                y.add(l.toLowerCase());
                let M = /url\(/i.test(g) ? await nS(o, e.href, i) : o;
                f += M;
            }
            f.trim() && (g += f);
        } catch {
            console.warn("[SnapDOM] Couldn't read stylesheet:", e.href);
        }
    let x = {
        doc: s,
        requiredIndex: c,
        usedCodepoints: t,
        faceMatchesRequired: u,
        coveredFamilies: y,
        provisionalFaces: b,
        simpleExcluder: r ? nM(r) : null,
        useProxy: i,
        iconMatchers: a,
        visitedSheets: new Set(),
        depth: 0,
    };
    for (let e of new Set([...s.styleSheets, ...(s.adoptedStyleSheets || [])]))
        if (!(e.href && w.some((t) => t.href === e.href)))
            try {
                let t = e.href || s.baseURI || location.origin + "/";
                (t && x.visitedSheets.add(t),
                    await n$(
                        e,
                        t,
                        async (e) => {
                            g += e;
                        },
                        x,
                    ));
            } catch {}
    for (let e of b) y.has(e.family) || (g += /url\(/i.test(e.srcRaw) ? await nS(e.block, e.baseHref, i) : e.block);
    try {
        for (let e of s.fonts || []) {
            if (!e || !e.family || "loaded" !== e.status || !e._snapdomSrc) continue;
            let t = String(e.family).replace(/^['"]+|['"]+$/g, "");
            if (
                ne(t, a) ||
                !c.has(t.toLowerCase()) ||
                (r?.families && r.families.some((e) => String(e).toLowerCase() === t.toLowerCase()))
            )
                continue;
            let n = e._snapdomSrc;
            if (!String(n).startsWith("data:"))
                if (o.resource?.has(e._snapdomSrc)) n = o.resource.get(e._snapdomSrc);
                else
                    try {
                        let t = await $(e._snapdomSrc, { as: "dataURL", useProxy: i, silent: !0 });
                        if (!t.ok || "string" != typeof t.data) continue;
                        ((n = t.data), o.resource?.set(e._snapdomSrc, n));
                    } catch {
                        console.warn("[SnapDOM] Couldn't load font file:", e._snapdomSrc);
                        continue;
                    }
            g += `@font-face{font-family:'${t}';src:url(${n});font-style:${e.style || "normal"};font-weight:${e.weight || "normal"};}`;
        }
    } catch {}
    for (let e of n) {
        if (!e || "object" != typeof e) continue;
        let t = String(e.family || "").replace(/^['"]+|['"]+$/g, "");
        if (
            !t ||
            ne(t, a) ||
            !c.has(t.toLowerCase()) ||
            (r?.families && r.families.some((e) => String(e).toLowerCase() === t.toLowerCase()))
        )
            continue;
        let n = null != e.weight ? String(e.weight) : "normal",
            l = null != e.style ? String(e.style) : "normal",
            s = null != e.stretchPct ? `${e.stretchPct}%` : "100%",
            u = String(e.src || ""),
            d = u;
        if (!d.startsWith("data:"))
            if (o.resource?.has(u)) d = o.resource.get(u);
            else
                try {
                    let e = await $(u, { as: "dataURL", useProxy: i, silent: !0 });
                    if (!e.ok || "string" != typeof e.data) continue;
                    ((d = e.data), o.resource?.set(u, d));
                } catch {
                    console.warn("[SnapDOM] Couldn't load font file from localFonts:", u);
                    continue;
                }
        g += `@font-face{font-family:'${t}';src:url(${d});font-style:${l};font-weight:${n};font-stretch:${s};}`;
    }
    return (
        g &&
            ((g = (function (e) {
                if (!e) return e;
                let t = /@font-face[^{}]*\{[^}]*\}/gi,
                    r = new Set(),
                    n = [];
                for (let o of e.match(t) || []) {
                    let e = nu(nb(o, "font-family")),
                        t = nb(o, "font-weight", "400"),
                        i = nb(o, "font-style", "normal"),
                        l = nb(o, "font-stretch", "100%"),
                        a = nb(o, "unicode-range"),
                        s = nb(o, "src"),
                        c = nv(s, location.href),
                        u = c.length
                            ? c
                                  .map((e) => String(e).toLowerCase())
                                  .sort()
                                  .join("|")
                            : s.toLowerCase(),
                        d = [String(e || "").toLowerCase(), t, i, l, a.toLowerCase(), u].join("|");
                    r.has(d) || (r.add(d), n.push(o));
                }
                if (0 === n.length) return e;
                let o = 0;
                return e.replace(t, () => n[o++] || "");
            })(g)),
            o.resource?.set(f, g)),
        g
    );
}
function nR(e, t) {
    let r = new Set(),
        n = new Set();
    if (!e) return { required: r, usedCodepoints: n };
    let o = (e) => {
            if (e) for (let t of e) n.add(t.codePointAt(0));
        },
        i = (e) => {
            let t = (function (e) {
                if (!e) return [];
                let t = [];
                for (let r of e.split(",")) {
                    let e = r.trim().replace(/^['"]+|['"]+$/g, "");
                    e && (ns.has(e.toLowerCase()) || t.push(e));
                }
                return t;
            })(e.fontFamily);
            if (t.length)
                for (let n of t)
                    r.add(
                        `${n}__${nd(e.fontWeight)}__${nf(e.fontStyle)}__${(function (e) {
                            let t = String(e ?? "100%").match(/(\d+(?:\.\d+)?)\s*%/);
                            return t ? Math.max(50, Math.min(200, parseFloat(t[1]))) : 100;
                        })(e.fontStretch)}`,
                    );
        },
        l = rt(e),
        a = e.getRootNode(),
        s = (e) => {
            i(en(e));
            let t = e.getRootNode() === a ? l : rt(e);
            for (let r of ["::before", "::after"]) {
                let l = "::before" === r ? t.before : t.after;
                if (null !== l) {
                    if ("" === l) continue;
                    try {
                        if (!e.matches(l)) continue;
                    } catch {}
                }
                let a = en(e, r),
                    s = a && a.content;
                if (!(!s || "none" === s || "normal" === s))
                    if ((i(a), /^["']/.test(s))) o(s.slice(1, -1));
                    else {
                        let e = s.match(/\\[0-9A-Fa-f]{1,6}/g);
                        if (e)
                            for (let t of e)
                                try {
                                    n.add(parseInt(t.slice(1), 16));
                                } catch {}
                    }
            }
        },
        c = [e];
    for (let r = 0; r < c.length; r++) {
        let n = c[r];
        (n.nodeType === Node.ELEMENT_NODE && s(n), n.shadowRoot && c.push(n.shadowRoot));
        let i = (e.ownerDocument || document).createTreeWalker(n, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
        for (; i.nextNode();) {
            let e = i.currentNode;
            if (e.nodeType === Node.TEXT_NODE) {
                if (t && e.parentElement && !t(e.parentElement)) continue;
                o(e.nodeValue || "");
            } else {
                if (t && !t(e)) continue;
                (s(e), e.shadowRoot && c.push(e.shadowRoot));
            }
        }
    }
    return { required: r, usedCodepoints: n };
}
async function nE(e, t = 2, r = document) {
    try {
        await r.fonts.ready;
    } catch {}
    let n = Array.from(e || []).filter(Boolean);
    if (0 === n.length) return;
    let o = () => {
        let e = r.createElement("div");
        for (let t of (G(e),
        (e.style.cssText =
            "position:absolute!important;left:-9999px!important;top:0!important;opacity:0!important;pointer-events:none!important;contain:layout size style;"),
        n)) {
            let n = r.createElement("span");
            ((n.textContent = "AaBbGg1234\xc1\xc9\xcd\xd3\xda\xe7\xf1\u2014\u221E"),
                (n.style.fontFamily = `"${t}"`),
                (n.style.fontWeight = "700"),
                (n.style.fontStyle = "italic"),
                (n.style.fontSize = "32px"),
                (n.style.lineHeight = "1"),
                (n.style.whiteSpace = "nowrap"),
                (n.style.margin = "0"),
                (n.style.padding = "0"),
                e.appendChild(n));
        }
        (r.body.appendChild(e), e.offsetWidth, r.body.removeChild(e));
    };
    for (let e = 0; e < Math.max(1, t); e++) (o(), await eS(), await eS());
}
function nF(e, t = !1) {
    let r = "",
        n = Math.max(1, e);
    for (; n > 0;) ((r = String.fromCharCode(97 + (--n % 26)) + r), (n = Math.floor(n / 26)));
    return t ? r.toUpperCase() : r;
}
function nN(e, t = !0) {
    let r = Math.max(1, Math.min(3999, e)),
        n = "";
    for (let [e, t] of [
        [1e3, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ])
        for (; r >= e;) ((n += t), (r -= e));
    return t ? n : n.toLowerCase();
}
function n_(e, t) {
    switch ((t || "decimal").toLowerCase()) {
        case "decimal":
        default:
            return String(e);
        case "decimal-leading-zero": {
            let t = Math.abs(e);
            return (e < 0 ? "-" : "") + (t < 10 ? "0" : "") + String(t);
        }
        case "lower-alpha":
        case "lower-latin":
            return nF(e, !1);
        case "upper-alpha":
        case "upper-latin":
            return nF(e, !0);
        case "lower-roman":
            return nN(e, !1);
        case "upper-roman":
            return nN(e, !0);
    }
}
function nP(e, t) {
    let r = (e || "")
            .trim()
            .split(/[\s,]+/)
            .filter(Boolean),
        n = [];
    for (let e = 0; e < r.length; e++) {
        let o = r[e];
        if ("none" === o) continue;
        let i = r[e + 1],
            l = void 0 !== i && Number.isFinite(Number(i));
        (n.push([o, l ? Number(i) : t]), l && e++);
    }
    return n;
}
(v(), N());
var nT = new WeakMap();
function nL(e) {
    try {
        return e && e.cssRules ? e.cssRules : null;
    } catch {
        return null;
    }
}
function nW(e) {
    let t = e.querySelectorAll('style,link[rel~="stylesheet"]'),
        r = `n:${t.length}|`,
        n = 0;
    for (let e = 0; e < t.length; e++) {
        let o = t[e];
        if ("STYLE" === o.tagName) {
            let e = o.textContent ? o.textContent.length : 0;
            r += `S${e}|`;
            let t = o.sheet,
                i = t ? nL(t) : null;
            i && (n += i.length);
        } else {
            let e = o.getAttribute("href") || "",
                t = o.getAttribute("media") || "all";
            r += `L${e}|m:${t}|`;
            let i = o.sheet,
                l = i ? nL(i) : null;
            l && (n += l.length);
        }
    }
    let o = e.adoptedStyleSheets,
        i = 0;
    if (Array.isArray(o))
        for (let e of o) {
            let t = nL(e);
            t && (i += t.length);
        }
    return r + `ass:${Array.isArray(o) ? o.length : 0}/${i}|tr:${n}`;
}
function nD(e, t, r) {
    let n = nL(e);
    if (!n) return !1;
    for (let e = 0; e < n.length && !(r.budget <= 0); e++) {
        let o = n[e],
            i = o && o.cssText ? o.cssText : "";
        for (let e of (r.budget--, t)) if (i.includes(e)) return !0;
        if (o && o.styleSheet && nD(o.styleSheet, t, r)) return !0;
        if (o && o.cssRules && o.cssRules.length)
            for (let e = 0; e < o.cssRules.length && r.budget > 0; e++) {
                let n = o.cssRules[e],
                    i = n && n.cssText ? n.cssText : "";
                for (let e of (r.budget--, t)) if (i.includes(e)) return !0;
            }
        if (r.budget <= 0) break;
    }
    return !1;
}
function nO(e = document, t = nW(e)) {
    let r = nT.get(e);
    if (r && r.fingerprint === t) return r.result;
    let n = (e) => (e.match(/\|ass:[^|]*/) || [""])[0];
    r && n(t) !== n(r.fingerprint) && tP();
    let o = [
            "::before",
            "::after",
            "::first-letter",
            "::marker",
            "::first-line",
            ":before",
            ":after",
            ":first-letter",
            ":first-line",
            "counter(",
            "counters(",
            "counter-increment",
            "counter-reset",
        ],
        i = e.querySelectorAll("style");
    for (let r = 0; r < i.length; r++) {
        let n = i[r].textContent || "";
        for (let r of o) if (n.includes(r)) return (nT.set(e, { fingerprint: t, result: !0 }), !0);
    }
    let l = e.adoptedStyleSheets;
    if (Array.isArray(l) && l.length) {
        let r = { budget: 1e3 };
        try {
            for (let n of l) if (nD(n, o, r)) return (nT.set(e, { fingerprint: t, result: !0 }), !0);
        } catch {}
    }
    {
        let r = e.querySelectorAll('style,link[rel~="stylesheet"]'),
            n = { budget: 1e3 };
        for (let i = 0; i < r.length && n.budget > 0; i++) {
            let l = r[i],
                a = null;
            if ((l.tagName, (a = l.sheet || null) && nD(a, o, n)))
                return (nT.set(e, { fingerprint: t, result: !0 }), !0);
        }
    }
    return e.querySelector('[style*="counter("], [style*="counters("]')
        ? (nT.set(e, { fingerprint: t, result: !0 }), !0)
        : (nT.set(e, { fingerprint: t, result: !1 }), !1);
}
function nI(e) {
    for (let t of ["Top", "Right", "Bottom", "Left"]) {
        let r = parseFloat(e[`border${t}Width`]) || 0,
            n = e[`border${t}Style`];
        if (r > 0 && n && "none" !== n && "hidden" !== n) return !0;
    }
    return !1;
}
function nj(e, t, r) {
    let n = e.parentElement,
        o = n && r ? r.get(n) : null;
    return o
        ? {
              get(e, r) {
                  let n = t.get(e, r),
                      i = o.get(r);
                  return "number" == typeof i ? Math.max(n, i) : n;
              },
              getStack(e, r) {
                  let n = t.getStack(e, r);
                  if (!n.length) return n;
                  let i = o.get(r);
                  if ("number" == typeof i) {
                      let e = n.slice();
                      return ((e[e.length - 1] = Math.max(e[e.length - 1], i)), e);
                  }
                  return n;
              },
          }
        : t;
}
function nz(e, t, r) {
    let n = new Map(),
        o = (e, t) => nP(e, t).map(([e, t]) => ({ name: e, num: t })),
        i = o(t?.counterReset, 0),
        l = o(t?.counterSet, 0),
        a = o(t?.counterIncrement, 1);
    function s(t) {
        if (n.has(t)) return n.get(t).slice();
        let o = r.getStack(e, t);
        o = o.length ? o.slice() : [];
        let s = i.find((e) => e.name === t);
        if (s) {
            let e = Number.isFinite(s.num) ? s.num : 0;
            o = o.length ? [...o, e] : [e];
        }
        let c = l.find((e) => e.name === t);
        if (c) {
            let e = Number.isFinite(c.num) ? c.num : 0;
            (0 === o.length && (o = [0]), (o[o.length - 1] = e));
        }
        let u = a.find((e) => e.name === t);
        if (u) {
            let e = Number.isFinite(u.num) ? u.num : 1;
            (0 === o.length && (o = [0]), (o[o.length - 1] += e));
        }
        return (n.set(t, o.slice()), o);
    }
    return {
        get(e, t) {
            let r = s(t);
            return r.length ? r[r.length - 1] : 0;
        },
        getStack: (e, t) => s(t),
        __incs: a,
    };
}
var nU = [
        "color",
        "-webkit-text-fill-color",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "letter-spacing",
        "line-height",
    ],
    nB = [
        "color",
        "-webkit-text-fill-color",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "text-transform",
        "text-decoration-line",
        "text-decoration-color",
        "text-decoration-style",
        "line-height",
        "background-color",
        "vertical-align",
    ];
function nV(e, t, r, n, o, i) {
    try {
        if (null === n) {
            if (e.getRootNode() !== (e.ownerDocument || document)) return;
            let t = en(e).display || "";
            if (
                "::marker" === o
                    ? !t.includes("list-item")
                    : "block" !== t &&
                      "flow-root" !== t &&
                      "list-item" !== t &&
                      "inline-block" !== t &&
                      "table-cell" !== t &&
                      "table-caption" !== t
            )
                return;
        } else if (!e.matches(n)) return;
        if ("::marker" === o && !(en(e).display || "").includes("list-item")) return;
        let l = en(e, o),
            a = en(e);
        if (!l) return;
        let s = "";
        for (let e of i) {
            let t = l.getPropertyValue(e);
            t &&
                t !== a.getPropertyValue(e) &&
                ("background-color" !== e || "rgba(0, 0, 0, 0)" !== t) &&
                ("vertical-align" !== e || "baseline" !== t) &&
                (s += `${e}:${t};`);
        }
        if ("::marker" === o) {
            let e = l.getPropertyValue("content");
            e && "normal" !== e && "none" !== e && (s += `content:${e};`);
        }
        if (!s) return;
        let c = `data-sd-p${(r.__pseudoRuleSeq = (r.__pseudoRuleSeq || 0) + 1)}`;
        (t.setAttribute(c, ""), (r.__pseudoCSS = (r.__pseudoCSS || "") + `[${c}]${o}{${s}}`));
    } catch {}
}
async function nH(e, t, r, n, o = !1) {
    var i;
    let l, a, s;
    if (
        e?.nodeType !== 1 ||
        t?.nodeType !== 1 ||
        (r.slicer?.due() && (await r.slicer.pause()), "TEXTAREA" === e.tagName)
    )
        return;
    let f = e.ownerDocument || document;
    if (
        (!o &&
            ((l = nW(f)),
            r
                ? (r.__pseudoPreflightFp !== l && (t1(), (r.__pseudoPreflight = nO(f, l)), (r.__pseudoPreflightFp = l)),
                  !r.__pseudoPreflight)
                : (t1(), !nO(f, l))) &&
            !r.__shadowPseudo) ||
        (!o &&
            (function (e, t) {
                if (t.__shadowPseudo) return !1;
                let r = rt(e),
                    n = [];
                for (let e of ["before", "after", "firstLetter", "marker", "firstLine"]) {
                    let t = r[e];
                    if (null === t) return !1;
                    t && n.push(t);
                }
                if (!n.length) return !0;
                let o = n.join(",");
                try {
                    return !e.matches(o) && null === e.querySelector(o);
                } catch {
                    return !1;
                }
            })(e, r))
    )
        return;
    (r.__siblingCounters || (r.__siblingCounters = new WeakMap()),
        r.__counterCtx ||
            ((i = e.ownerDocument || document),
            (a = null),
            (s = () => {
                if (!a)
                    try {
                        let e, t, r, n, o;
                        ((e = new WeakMap()),
                            (t = i?.nodeType === 9 ? i.documentElement : i),
                            (r = new WeakMap()),
                            (n = (t, o, i) => {
                                let l = ((e, t, n) => {
                                    let o,
                                        i,
                                        l,
                                        a = ((e) => {
                                            let t = new Map();
                                            for (let [r, n] of e) t.set(r, n.slice());
                                            return t;
                                        })(e),
                                        s;
                                    try {
                                        s = getComputedStyle(n);
                                    } catch {
                                        s = n.style;
                                    }
                                    try {
                                        o = s?.counterReset;
                                    } catch {}
                                    if (o && "none" !== o)
                                        for (let [e, r] of nP(o, 0)) {
                                            let n = t.get(e);
                                            if (n && n.length) {
                                                let t = n.slice();
                                                (t.push(r), a.set(e, t));
                                            } else a.set(e, [r]);
                                        }
                                    try {
                                        i = s?.counterSet;
                                    } catch {}
                                    if (i && "none" !== i)
                                        for (let [e, t] of nP(i, 0)) {
                                            let r = a.get(e) || [];
                                            (0 === r.length && r.push(0), (r[r.length - 1] = t), a.set(e, r));
                                        }
                                    try {
                                        l = s?.counterIncrement;
                                    } catch {}
                                    if (l && "none" !== l)
                                        for (let [e, t] of nP(l, 1)) {
                                            let r = a.get(e) || [];
                                            (0 === r.length && r.push(0), (r[r.length - 1] += t), a.set(e, r));
                                        }
                                    try {
                                        if (s?.display === "list-item" && n && "LI" === n.tagName) {
                                            let e = n.parentElement,
                                                t = e && r.get(e),
                                                o = e?.tagName === "OL" ? parseInt(e.getAttribute("start"), 10) : NaN,
                                                i = void 0 === t ? (Number.isFinite(o) ? o : 1) : t + 1,
                                                l = e?.tagName === "OL" ? parseInt(n.getAttribute("value"), 10) : NaN;
                                            (Number.isFinite(l) && (i = l), e && r.set(e, i));
                                            let s = a.get("list-item") || [];
                                            (0 === s.length && s.push(0), (s[s.length - 1] = i), a.set("list-item", s));
                                        }
                                    } catch {}
                                    return a;
                                })(i, o, t);
                                e.set(t, l);
                                let a = l;
                                for (let e of t.children) a = n(e, l, a);
                                let s = new Map();
                                for (let [e, t] of i) {
                                    let r = t.length,
                                        n = a.get(e);
                                    s.set(e, n && n.length ? n.slice(0, r) : t.slice());
                                }
                                for (let [e, t] of a) s.has(e) || !t.length || o.has(e) || s.set(e, t.slice(0, 1));
                                return s;
                            }),
                            (o = new Map()),
                            n(t, o, o),
                            (a = {
                                get(t, r) {
                                    let n = e.get(t)?.get(r);
                                    return n && n.length ? n[n.length - 1] : 0;
                                },
                                getStack(t, r) {
                                    let n = e.get(t)?.get(r);
                                    return n ? n.slice() : [];
                                },
                            }));
                    } catch (e) {
                        (eE(r, "Couldn't compute CSS counters; list numbers may be off.", e),
                            (a = { get: () => 0, getStack: () => [] }));
                    }
                return a;
            }),
            (r.__counterCtx = { get: (e, t) => s().get(e, t), getStack: (e, t) => s().getStack(e, t) })));
    let h = r.__counterCtx,
        p = rt(e);
    for (let o of ("" !== p.marker && nV(e, t, r, p.marker, "::marker", nU),
    "" !== p.firstLine && nV(e, t, r, p.firstLine, "::first-line", nB),
    ["::before", "::after", "::first-letter"])) {
        let i = p["::before" === o ? "before" : "::after" === o ? "after" : "firstLetter"];
        if (null !== i) {
            if ("" === i) continue;
            try {
                if (!e.matches(i)) continue;
            } catch {}
        }
        try {
            let i = en(e, o);
            if (
                !i ||
                ("none" === i.content &&
                    "none" === i.backgroundImage &&
                    ("transparent" === i.backgroundColor || "rgba(0, 0, 0, 0)" === i.backgroundColor) &&
                    !nI(i) &&
                    (!i.transform || "none" === i.transform) &&
                    "inline" === i.display)
            )
                continue;
            if ("none" === i.display || ("::first-letter" !== o && ("none" === i.content || "normal" === i.content))) {
                ("::before" === o && (t.dataset.snapdomHasBefore = "1"),
                    "::after" === o && (t.dataset.snapdomHasAfter = "1"));
                continue;
            }
            if ("::first-letter" === o) {
                let n = en(e),
                    o = (n?.display || "").toLowerCase();
                if (o.includes("flex") || o.includes("grid")) continue;
                let l = (e) => i[e] !== n[e] && 0 !== (parseFloat(i[e]) || 0);
                if (
                    !(
                        i.color !== n.color ||
                        i.fontSize !== n.fontSize ||
                        i.fontWeight !== n.fontWeight ||
                        i.fontFamily !== n.fontFamily ||
                        i.fontStyle !== n.fontStyle ||
                        i.textTransform !== n.textTransform ||
                        (i.float !== n.float && "none" !== i.float) ||
                        l("paddingTop") ||
                        l("paddingRight") ||
                        l("paddingBottom") ||
                        l("paddingLeft") ||
                        l("marginTop") ||
                        l("marginRight") ||
                        l("marginBottom") ||
                        l("marginLeft")
                    )
                )
                    continue;
                let a = Array.from(t.childNodes).find(
                    (e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim().length > 0,
                );
                if (!a) continue;
                let s = a.textContent,
                    c = /^\s*/.exec(s)[0],
                    u = s.slice(c.length),
                    d = u.match(/^([^\p{L}\p{N}\s]*[\p{L}\p{N}](?:['\u2019])?)/u)?.[0],
                    f = u.slice(d?.length || 0);
                if (!d || /[\uD800-\uDFFF]/.test(d)) continue;
                let h = document.createElement("span");
                ((h.textContent = d), (h.dataset.snapdomPseudo = "::first-letter"));
                let p = eo(i, t7(e)),
                    m = et(p, "span");
                r.styleMap.set(h, m);
                let g = document.createTextNode(f);
                (t.replaceChild(g, a), t.insertBefore(h, g), c && t.insertBefore(document.createTextNode(c), h));
                continue;
            }
            let l = i.content ?? "",
                a = "" === l || "none" === l || "normal" === l,
                { text: s, incs: f } = (function (e, t, r, n) {
                    var o;
                    let i;
                    try {
                        i = en(e, t);
                    } catch {}
                    let l = i?.content;
                    if (!l || "none" === l || "normal" === l) return { text: "", incs: [] };
                    l = (function (e, t) {
                        if (!/\b(?:no-)?(?:open|close)-quote\b/.test(e)) return e;
                        let r = "\u201C",
                            n = "\u201D";
                        try {
                            let e = en(t).quotes;
                            if ("none" === e) ((r = ""), (n = ""));
                            else if (e && "auto" !== e) {
                                let t = e.match(/"[^"]*"|'[^']*'/g);
                                t && t.length >= 2 && ((r = t[0].slice(1, -1)), (n = t[1].slice(1, -1)));
                            }
                        } catch {}
                        return (
                            (r = r.replace(/"/g, "")),
                            (n = n.replace(/"/g, "")),
                            e.replace(/"[^"]*"|\b(no-open-quote|no-close-quote|open-quote|close-quote)\b/g, (e, t) =>
                                t ? ("open-quote" === t ? `"${r}"` : "close-quote" === t ? `"${n}"` : '""') : e,
                            )
                        );
                    })(
                        (l = (function (e) {
                            let t = !1;
                            for (let r = 0; r < e.length; r++) {
                                let n = e[r];
                                if ('"' === n) t = !t;
                                else if ("/" === n && !t) return e.slice(0, r).trim();
                            }
                            return e;
                        })(l)),
                        e,
                    );
                    let a = nj(e, r, n),
                        s = nz(e, i, a);
                    return {
                        text: (function (e) {
                            if (!e) return "";
                            let t = [],
                                r = /"((?:\\[\s\S]|[^"\\])*)"|'((?:\\[\s\S]|[^'\\])*)'/g,
                                n = 0,
                                o;
                            for (; (o = r.exec(e));) {
                                let i = e.slice(n, o.index).trim();
                                (i && t.push(i),
                                    t.push(
                                        (void 0 !== o[1] ? o[1] : o[2]).replace(
                                            /\\(?:([0-9a-fA-F]{1,6})[ \t\n]?|([\s\S]))/g,
                                            (e, t, r) => {
                                                if (t) {
                                                    let e = parseInt(t, 16);
                                                    return 0 === e || e > 1114111 ? "\uFFFD" : String.fromCodePoint(e);
                                                }
                                                return r ===
                                                    `
`
                                                    ? ""
                                                    : r;
                                            },
                                        ),
                                    ),
                                    (n = r.lastIndex));
                            }
                            let i = e.slice(n).trim();
                            return (i && t.push(i), t.join(""));
                        })(
                            ((o = l), /\bcounter\s*\(|\bcounters\s*\(/.test(o || ""))
                                ? (function (e, t, r) {
                                      if (!e || "none" === e) return e;
                                      try {
                                          return e.replace(/\b(counter|counters)\s*\(([^)]+)\)/g, (e, n, o) => {
                                              let i = String(o)
                                                  .split(",")
                                                  .map((e) => e.trim());
                                              if ("counter" === n) {
                                                  let e = i[0]?.replace(/^["']|["']$/g, ""),
                                                      n = (i[1] || "decimal").toLowerCase(),
                                                      o = r.get(t, e);
                                                  return n_(o, n);
                                              }
                                              {
                                                  let e = i[0]?.replace(/^["']|["']$/g, ""),
                                                      n = i[1]?.replace(/^["']|["']$/g, "") ?? "",
                                                      o = (i[2] || "decimal").toLowerCase(),
                                                      l = r.getStack(t, e);
                                                  return l.length ? l.map((e) => n_(e, o)).join(n) : "";
                                              }
                                          });
                                      } catch {
                                          return "- ";
                                      }
                                  })(l, e, s)
                                : l,
                        ),
                        incs: s.__incs || [],
                    };
                })(e, o, h, r.__siblingCounters),
                p = i.backgroundImage,
                m = i.backgroundColor,
                g = i.fontFamily,
                y = parseInt(i.fontSize) || 32,
                b = parseInt(i.fontWeight) || !1,
                w = i.fontStyle || "normal",
                x = i.color || "#000",
                v = i.transform,
                S = ne(g, n?.__iconMatchers),
                M = !a && "" !== s,
                k = p && "none" !== p,
                C = m && "transparent" !== m && "rgba(0, 0, 0, 0)" !== m,
                A = nI(i),
                R = v && "none" !== v,
                E = "none" !== l && "normal" !== l,
                F = /^inline-/.test(i.display || ""),
                N = E && ((parseFloat(i.width) || 0) > 0 || (parseFloat(i.height) || 0) > 0 || F),
                P = E && i.boxShadow && "none" !== i.boxShadow,
                T = E && i.outlineStyle && "none" !== i.outlineStyle && (parseFloat(i.outlineWidth) || 0) > 0;
            if (!(M || k || C || A || R || N || P || T)) {
                if (f && f.length && e.parentElement) {
                    let t = r.__siblingCounters.get(e.parentElement) || new Map();
                    for (let { name: n } of f) {
                        if (!n) continue;
                        let i = nj(e, h, r.__siblingCounters),
                            l = nz(e, en(e, o), i).get(e, n);
                        t.set(n, l);
                    }
                    r.__siblingCounters.set(e.parentElement, t);
                }
                continue;
            }
            let L = s.startsWith("url(") || /^-?(?:webkit-)?image-set\(/i.test(s),
                W =
                    "inline" === i.display &&
                    "none" === i.cssFloat &&
                    "absolute" !== i.position &&
                    "fixed" !== i.position,
                D = !1;
            if (M && !S && s.length > 1 && !L && W) {
                let r = en(e),
                    n = parseFloat(r.fontSize) || 16,
                    o = parseFloat(r.lineHeight);
                (Number.isFinite(o) || (o = 1.5 * n),
                    e.getBoundingClientRect().height < 1.6 * o && ((t.style.whiteSpace = "nowrap"), (D = !0)));
            }
            let O = document.createElement("span");
            ((O.dataset.snapdomPseudo = o), (O.style.pointerEvents = "none"), D && (O.style.whiteSpace = "nowrap"));
            let I = (function (e, t, r, n, o) {
                    let i = o && o.__styleShare ? n && n.__styleShare : null,
                        l = i ? i.ids.get(e) : void 0;
                    if (void 0 === l || -1 === l || e.shadowRoot || e.assignedSlot) return eo(r, t7(e));
                    let a = l + t,
                        s = i.pseudo || (i.pseudo = new Map()),
                        c = s.get(a);
                    if (c) {
                        let t = { ...c.snap },
                            n = c.rr || ru(c, e);
                        for (let e = 0; e < n.length; e++) {
                            let o = r.getPropertyValue(n[e]);
                            o ? (t[n[e]] = o) : delete t[n[e]];
                        }
                        return t;
                    }
                    let u = eo(r, t7(e));
                    return (s.set(a, { snap: u, rr: null, sig: null, h: "height" in u, b: "block-size" in u }), u);
                })(e, o, i, r, n),
                j = (en(e).display || "").toLowerCase(),
                z = j.includes("flex") || j.includes("grid");
            if (z) {
                let e = I["min-width"];
                (e && "auto" !== e && "0px" !== e) || (I["min-width"] = "0px");
            }
            let U = M;
            U &&
                !W &&
                parseFloat(i.height) >= 1.5 * (parseFloat(i.lineHeight) || 1.2 * (parseFloat(i.fontSize) || 16)) &&
                ((U = !1), (O.style.whiteSpace = i.whiteSpace));
            let B = et(I, "span", U, z);
            if ((r.styleMap.set(O, B), S && s && 1 === s.length)) {
                let { dataUrl: e, width: r, height: n } = await na(s, g, b, y, x, w),
                    o = document.createElement("img");
                ((o.src = e),
                    (o.style = `height:${y}px;width:${(r / n) * y}px;object-fit:contain;`),
                    O.appendChild(o),
                    (t.dataset.snapdomHasIcon = "true"));
            } else if (s && L) {
                let t = u(s, ("u" > typeof devicePixelRatio && devicePixelRatio) || 1) ?? c(s);
                if (t?.trim())
                    try {
                        let e = await $(d(t), { as: "dataURL", useProxy: n.useProxy });
                        if (e?.ok && "string" == typeof e.data) {
                            let t = document.createElement("img");
                            ((t.src = e.data),
                                (t.style = `width:${y}px;height:auto;object-fit:contain;`),
                                O.appendChild(t));
                        }
                    } catch (t) {
                        console.warn(`[SnapDOM] Couldn't draw the ${o} icon of`, e, t);
                    }
            } else !S && M && (O.textContent = s);
            ((O.style.backgroundImage = "none"),
                "maskImage" in O.style && (O.style.maskImage = "none"),
                "webkitMaskImage" in O.style && (O.style.webkitMaskImage = "none"));
            try {
                ((O.style.backgroundRepeat = i.backgroundRepeat),
                    (O.style.backgroundSize = i.backgroundSize),
                    i.backgroundPositionX && i.backgroundPositionY
                        ? ((O.style.backgroundPositionX = i.backgroundPositionX),
                          (O.style.backgroundPositionY = i.backgroundPositionY))
                        : (O.style.backgroundPosition = i.backgroundPosition),
                    (O.style.backgroundOrigin = i.backgroundOrigin),
                    (O.style.backgroundClip = i.backgroundClip),
                    (O.style.backgroundAttachment = i.backgroundAttachment),
                    (O.style.backgroundBlendMode = i.backgroundBlendMode));
            } catch {}
            if (k)
                try {
                    let e = ei(p),
                        t = await Promise.all(e.map((e) => _(e, n)));
                    O.style.backgroundImage = t.join(", ");
                } catch (e) {
                    console.warn(`[SnapDOM] Couldn't load the ${o} background image.`, e);
                }
            C && (O.style.backgroundColor = m);
            let V = i.maskImage || i.webkitMaskImage;
            if (V && "none" !== V)
                try {
                    let e = (await Promise.all(ei(V).map((e) => _(e, n)))).join(", ");
                    for (let t of ((O.style.maskImage = e),
                    (O.style.webkitMaskImage = e),
                    ["maskSize", "maskRepeat", "maskPosition", "maskMode", "maskComposite", "maskOrigin", "maskClip"]))
                        i[t] && (O.style[t] = i[t]);
                } catch (e) {
                    console.warn(`[SnapDOM] Couldn't load the ${o} mask image.`, e);
                }
            let H = O.childNodes.length > 0 || O.textContent?.trim() !== "" || k || C || A || R || N || P || T;
            if (f && f.length && e.parentElement) {
                let t = r.__siblingCounters.get(e.parentElement) || new Map(),
                    n = nj(e, h, r.__siblingCounters),
                    i = nz(e, en(e, o), n);
                for (let { name: r } of f) {
                    if (!r) continue;
                    let n = i.get(e, r);
                    t.set(r, n);
                }
                r.__siblingCounters.set(e.parentElement, t);
            }
            if (!H) continue;
            "::before" === o
                ? ((t.dataset.snapdomHasBefore = "1"), t.insertBefore(O, t.firstChild))
                : ((t.dataset.snapdomHasAfter = "1"), t.appendChild(O));
        } catch (t) {
            console.warn(`[SnapDOM] Couldn't copy the ${o} of`, e, t);
        }
    }
    let m = Array.from(t.children).filter((e) => !e.dataset.snapdomPseudo);
    if (r.nodeMap)
        for (let e of m) {
            let t = r.nodeMap.get(e);
            t?.nodeType === 1 && (await nH(t, e, r, n, !0));
        }
    else {
        let t = Array.from(e.children);
        for (let e = 0; e < Math.min(t.length, m.length); e++) await nH(t[e], m[e], r, n, !0);
    }
}
(v(), v());
var nq = new WeakMap(),
    nG = new WeakMap();
function nX(e, t, r) {
    let n = r.get(e),
        o = e.style;
    if (!n) {
        let i = o.cssText,
            l = e.hasAttribute("style");
        ((n = {
            users: 0,
            saved: t.map(([e, t]) => {
                let r = { property: e, value: o.getPropertyValue(e), priority: o.getPropertyPriority(e) };
                return (o.setProperty(e, t, "important"), (r.forcedValue = o.getPropertyValue(e)), r);
            }),
            originalCSS: i,
            forcedCSS: o.cssText,
            hadStyle: l,
        }),
            r.set(e, n));
    }
    n.users++;
    let i = !1;
    return () => {
        if (!i && ((i = !0), !--n.users)) {
            if ((r.delete(e), o.cssText === n.forcedCSS)) o.cssText = n.originalCSS;
            else
                for (let e of n.saved)
                    o.getPropertyValue(e.property) !== e.forcedValue ||
                        "important" !== o.getPropertyPriority(e.property) ||
                        (e.value ? o.setProperty(e.property, e.value, e.priority) : o.removeProperty(e.property));
            n.hadStyle || o.length || (e.getAttribute("style"), e.removeAttribute("style"));
        }
    };
}
function nY(e, t = null) {
    let r = [],
        n = (e) => {
            if (!p(e)) return;
            if (nG.has(e)) return void r.push(nX(e, [], nG));
            let t = getComputedStyle(e);
            "auto" === (t.contentVisibility || t.getPropertyValue("content-visibility") || "") &&
                r.push(nX(e, [["content-visibility", "visible"]], nG));
        };
    try {
        if (t) {
            let r = (e) => {
                let o;
                try {
                    o = e.getBoundingClientRect();
                } catch {
                    return;
                }
                if (
                    !(
                        (o.width > 0 || o.height > 0) &&
                        (o.right < t.left - 200 ||
                            o.left > t.right + 200 ||
                            o.bottom < t.top - 200 ||
                            o.top > t.bottom + 200)
                    )
                ) {
                    n(e);
                    for (let t = e.firstElementChild; t; t = t.nextElementSibling) r(t);
                }
            };
            r(e);
        } else {
            for (let t of e.querySelectorAll("*")) n(t);
            n(e);
        }
    } catch {}
    return () => {
        for (let e of r)
            try {
                e();
            } catch {}
    };
}
function nJ(e) {
    return nK(e.boxShadow);
}
function nQ(e) {
    return nK(e.textShadow);
}
function nK(e) {
    if (!e || "none" === e) return { top: 0, right: 0, bottom: 0, left: 0 };
    let t = [],
        r = "",
        n = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        ("(" === i ? n++ : ")" === i && (n = Math.max(0, n - 1)),
            "," === i && 0 === n ? (t.push(r), (r = "")) : (r += i));
    }
    r.trim() && t.push(r);
    let o = 0,
        i = 0,
        l = 0,
        a = 0;
    for (let e of t) {
        if (/\binset\b/i.test(e)) continue;
        let t = e.match(/-?\d+(\.\d+)?px/g)?.map((e) => parseFloat(e)) || [];
        if (t.length < 2) continue;
        let [r, n, s = 0, c = 0] = t,
            u = Math.abs(r) + s + c,
            d = Math.abs(n) + s + c;
        ((i = Math.max(i, u + Math.max(r, 0))),
            (a = Math.max(a, u + Math.max(-r, 0))),
            (l = Math.max(l, d + Math.max(n, 0))),
            (o = Math.max(o, d + Math.max(-n, 0))));
    }
    return { top: Math.ceil(o), right: Math.ceil(i), bottom: Math.ceil(l), left: Math.ceil(a) };
}
function nZ(e) {
    let t = e.filter && "none" !== e.filter ? e.filter : e.webkitFilter || "",
        r = /blur\(\s*([0-9.]+)px\s*\)/gi,
        n = 0,
        o;
    for (; (o = r.exec(t));) n += parseFloat(o[1]) || 0;
    let i = Math.ceil(2 * n);
    return { top: i, right: i, bottom: i, left: i };
}
function n0(e) {
    if ("none" === (e.outlineStyle || "none")) return { top: 0, right: 0, bottom: 0, left: 0 };
    let t =
        Math.ceil(parseFloat(e.outlineWidth || "0") || 0) +
        Math.max(0, Math.ceil(parseFloat(e.outlineOffset || "0") || 0));
    return { top: t, right: t, bottom: t, left: t };
}
function n1(e) {
    let t = `${e.filter || ""} ${e.webkitFilter || ""}`.trim();
    if (!t || "none" === t) return { bleed: { top: 0, right: 0, bottom: 0, left: 0 }, has: !1 };
    let r = t.match(/drop-shadow\((?:[^()]|\([^()]*\))*\)/gi) || [],
        n = 0,
        o = 0,
        i = 0,
        l = 0,
        a = !1;
    for (let e of r) {
        a = !0;
        let [t = 0, r = 0, s = 0] = e.match(/-?\d+(?:\.\d+)?px/gi)?.map((e) => parseFloat(e)) || [],
            c = Math.abs(t) + s,
            u = Math.abs(r) + s;
        ((o = Math.max(o, c + Math.max(t, 0))),
            (l = Math.max(l, c + Math.max(-t, 0))),
            (i = Math.max(i, u + Math.max(r, 0))),
            (n = Math.max(n, u + Math.max(-r, 0))));
    }
    return { bleed: { top: ou(n), right: ou(o), bottom: ou(i), left: ou(l) }, has: a };
}
function n2(e) {
    let t = e.overflowX || e.overflow || "visible",
        r = e.overflowY || e.overflow || "visible",
        n = (!!e.contain && /\b(paint|content|strict)\b/.test(e.contain)) || (!!e.clipPath && "none" !== e.clipPath);
    return { x: n || "visible" !== t, y: n || "visible" !== r };
}
function n3(e, t, r, n, o) {
    let i = r.a,
        l = r.b,
        a = r.c,
        s = r.d,
        c = r.e || 0,
        u = r.f || 0;
    function d(e, t) {
        let r = e - n,
            d = t - o,
            f = i * r + a * d,
            h = l * r + s * d;
        return [(f += n + c), (h += o + u)];
    }
    let f = [d(0, 0), d(e, 0), d(0, t), d(e, t)],
        h = 1 / 0,
        p = 1 / 0,
        m = -1 / 0,
        g = -1 / 0;
    for (let [e, t] of f) (e < h && (h = e), t < p && (p = t), e > m && (m = e), t > g && (g = t));
    return { minX: h, minY: p, maxX: m, maxY: g, width: m - h, height: g - p };
}
function n9(e, t, r) {
    let n = (e.transformOrigin || "0 0").trim().split(/\s+/),
        [o, i] = [n[0] || "0", n[1] || "0"],
        l = (e, t) => {
            let r = e.toLowerCase();
            return "left" === r || "top" === r
                ? 0
                : "center" === r
                  ? t / 2
                  : "right" === r || "bottom" === r
                    ? t
                    : r.endsWith("px")
                      ? parseFloat(r) || 0
                      : r.endsWith("%")
                        ? ((parseFloat(r) || 0) * t) / 100
                        : (/^-?\d+(\.\d+)?$/.test(r) && parseFloat(r)) || 0;
        };
    return { ox: l(o, t), oy: l(i, r) };
}
function n6(e) {
    let t = { rotate: "0deg", scale: null, translate: null },
        r = null;
    try {
        r = "function" == typeof e.computedStyleMap ? e.computedStyleMap() : null;
    } catch {}
    if (r) {
        let n = (e) => {
                try {
                    return ("function" != typeof r.has || r.has(e)) && "function" == typeof r.get ? r.get(e) : null;
                } catch {
                    return null;
                }
            },
            o = n("rotate");
        if (o)
            if (o.angle) {
                let e = o.angle;
                ((t.rotate = "rad" === e.unit ? (180 * e.value) / Math.PI + "deg" : e.value + e.unit),
                    !1 === o.is2D &&
                        o.x &&
                        o.y &&
                        o.z &&
                        (t.rotate = `${o.x.value} ${o.y.value} ${o.z.value} ${t.rotate}`));
            } else
                o.unit
                    ? (t.rotate = "rad" === o.unit ? (180 * o.value) / Math.PI + "deg" : o.value + o.unit)
                    : (t.rotate = String(o));
        else {
            let r = getComputedStyle(e);
            t.rotate = r.rotate && "none" !== r.rotate ? r.rotate : "0deg";
        }
        let i = n("scale");
        if (i) {
            let e = (e) => (e && null != e.value ? `${e.value}${"percent" === e.unit ? "%" : ""}` : null);
            "x" in i && i.x?.value != null
                ? (t.scale = [e(i.x), e(i.y) ?? e(i.x), ...(!1 === i.is2D ? [e(i.z) ?? "1"] : [])].join(" "))
                : Array.isArray(i)
                  ? (t.scale = i.map(e).join(" "))
                  : (t.scale = String(i));
        } else {
            let r = getComputedStyle(e);
            t.scale = r.scale && "none" !== r.scale ? r.scale : null;
        }
        let l = n("translate");
        if (l) {
            let e = (e) => (e && null != e.value ? `${e.value}${"percent" === e.unit ? "%" : e.unit || "px"}` : null);
            "x" in l && l.x?.value != null
                ? (t.translate = [e(l.x), e(l.y) ?? "0px", ...(!1 === l.is2D ? [e(l.z) ?? "0px"] : [])].join(" "))
                : Array.isArray(l)
                  ? (t.translate = l.map(e).join(" "))
                  : (t.translate = String(l));
        } else {
            let r = getComputedStyle(e);
            t.translate = r.translate && "none" !== r.translate ? r.translate : null;
        }
        return (
            (t.rotate && "none" !== t.rotate) || (t.rotate = "0deg"),
            (t.scale && "none" !== t.scale) || (t.scale = null),
            (t.translate && "none" !== t.translate) || (t.translate = null),
            t
        );
    }
    let n = getComputedStyle(e);
    return (
        (t.rotate = n.rotate && "none" !== n.rotate ? n.rotate : "0deg"),
        (t.scale = n.scale && "none" !== n.scale ? n.scale : null),
        (t.translate = n.translate && "none" !== n.translate ? n.translate : null),
        t
    );
}
(eP(), s(), J(), ev(), J());
var n4 = null;
function n5(e) {
    let t,
        r,
        n,
        o,
        i = (e) => {
            let t = [],
                r = 0,
                n = 0,
                o = String(e).trim();
            for (let e = 0; e < o.length; e++)
                "(" === o[e]
                    ? r++
                    : ")" === o[e]
                      ? r--
                      : /\s/.test(o[e]) && !r && (e > n && t.push(o.slice(n, e)), (n = e + 1));
            return (n < o.length && t.push(o.slice(n)), t);
        },
        l = [];
    if ((t = e.translate) && "none" !== t) {
        let t = i(e.translate);
        for (let r = 0; r < 2 && r < t.length; r++) {
            let n = 0 === r ? e.width : e.height;
            /^[+-]?(?:\d*\.)?\d+%$/.test(t[r]) && Number.isFinite(n) && (t[r] = `${(parseFloat(t[r]) * n) / 100}px`);
        }
        l.push(t.length > 2 ? `translate3d(${t.join(",")})` : `translate(${t.join(",")})`);
    }
    if ((r = e.rotate) && "none" !== r && "0deg" !== e.rotate) {
        let t = i(e.rotate);
        4 === t.length
            ? l.push(`rotate3d(${t.join(",")})`)
            : 2 === t.length && /^[xyz]$/i.test(t[0])
              ? l.push(`rotate${t[0].toUpperCase()}(${t[1]})`)
              : l.push(`rotate(${t.join(" ")})`);
    }
    if ((n = e.scale) && "none" !== n) {
        let t = i(e.scale).map((e) => (/%$/.test(e) ? String(parseFloat(e) / 100) : e));
        l.push(t.length > 2 ? `scale3d(${t.join(",")})` : `scale(${t.join(",")})`);
    }
    if (((o = e.baseTransform) && "none" !== o && l.push(e.baseTransform), !l.length)) return new DOMMatrix();
    let a = l.join(" ");
    try {
        if (a.includes("%")) throw Error("Transform needs a reference box");
        return new DOMMatrix(a);
    } catch {
        let t = (function () {
                if (n4?.isConnected) return n4;
                let e = document.createElement("div");
                return (
                    (e.id = "snapdom-measure-slot"),
                    e.setAttribute("aria-hidden", "true"),
                    G(e),
                    Object.assign(e.style, {
                        position: "absolute",
                        left: "-99999px",
                        top: "0px",
                        width: "0px",
                        height: "0px",
                        overflow: "hidden",
                        opacity: "0",
                        pointerEvents: "none",
                        contain: "size layout style",
                    }),
                    document.documentElement.appendChild(e),
                    (n4 = e),
                    e
                );
            })(),
            r = document.createElement("div");
        if (
            ((r.style.cssText = "all:initial!important;display:block!important;transform-origin:0 0!important"),
            r.style.setProperty("width", `${Number.isFinite(e.width) ? e.width : 0}px`, "important"),
            r.style.setProperty("height", `${Number.isFinite(e.height) ? e.height : 0}px`, "important"),
            r.style.setProperty("transform", a, "important"),
            !r.style.transform)
        )
            throw Error("[SnapDOM] Couldn't read the transform of an element.");
        t.appendChild(r);
        try {
            var s = r;
            let e = getComputedStyle(s).transform;
            if (!e || "none" === e) return new DOMMatrix();
            try {
                return new DOMMatrix(e);
            } catch {
                return new WebKitCSSMatrix(e);
            }
        } finally {
            r.remove();
        }
    }
}
var n8 = new WeakSet();
function n7(e, t) {
    if (!t) return null;
    let r = e.ownerDocument || document,
        n = r.defaultView || window,
        o,
        i,
        l,
        a;
    if ("viewport" === t)
        ((o = 0),
            (i = 0),
            (l = r.documentElement?.clientWidth || n.innerWidth),
            (a = r.documentElement?.clientHeight || n.innerHeight));
    else {
        if ("object" != typeof t) return null;
        ((o = (Number(t.x) || 0) - (n.scrollX || 0)),
            (i = (Number(t.y) || 0) - (n.scrollY || 0)),
            (l = Number(t.width)),
            (a = Number(t.height)));
    }
    return l > 0 && a > 0 ? { left: o, top: i, width: l, height: a, right: o + l, bottom: i + a } : null;
}
function oe(e) {
    if (e.parentElement) return e.parentElement;
    let t = e.getRootNode && e.getRootNode();
    return g(t) ? t.host : null;
}
function ot(e, t) {
    try {
        return n5({ baseTransform: e, rotate: t?.rotate, scale: t?.scale });
    } catch {
        return null;
    }
}
function or(e) {
    let t = e.display || "";
    if (
        t.includes("flex") ||
        t.includes("grid") ||
        t.startsWith("table") ||
        "inline-block" === t ||
        "flow-root" === t ||
        "absolute" === e.position ||
        "fixed" === e.position ||
        (e.float && "none" !== e.float)
    )
        return !0;
    let r = e.overflowX || e.overflow || "visible",
        n = e.overflowY || e.overflow || "visible";
    return !!("visible" !== r || "visible" !== n || (e.contain && /\b(layout|content|paint|strict)\b/.test(e.contain)));
}
var on = new Set(["xml", "xlink"]),
    oo = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\x00-\x08\x0B\x0C\x0E-\x1F\uD800-\uDFFF\uFFFE\uFFFF]/g,
    oi = (e) => e.replace(oo, (e) => (2 === e.length ? e : "")),
    ol = /^data:[^,]{0,120};base64,/;
function oa(e, t = {}) {
    if (!e) return;
    let { stripFrameworkDirectives: r = !0 } = t,
        n = (e) => {
            for (let t of Array.from(e.attributes)) {
                if (
                    (function (e, t) {
                        if (e.startsWith("*") || "xmlns" === e || e.includes("@")) return !0;
                        if (e.includes(":")) {
                            let t = e.split(":", 1)[0];
                            if (!on.has(t)) return !0;
                        }
                        return (
                            !!t &&
                            (e.startsWith("x-") ||
                                e.startsWith("v-") ||
                                e.startsWith(":") ||
                                e.startsWith("on:") ||
                                e.startsWith("bind:") ||
                                e.startsWith("let:") ||
                                e.startsWith("class:"))
                        );
                    })(t.name, r)
                ) {
                    e.removeAttribute(t.name);
                    continue;
                }
                if (ol.test(t.value)) continue;
                let n = oi(t.value);
                if (n !== t.value)
                    try {
                        e.setAttribute(t.name, n);
                    } catch {}
            }
        };
    e.nodeType === Node.ELEMENT_NODE && n(e);
    let o = [],
        i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT),
        l;
    for (; (l = i.nextNode());)
        if (l.nodeType === Node.ELEMENT_NODE) n(l);
        else if (l.nodeType === Node.COMMENT_NODE) o.push(l);
        else {
            let e = oi(l.data);
            e !== l.data && (l.data = e);
        }
    for (let e of o) e.remove();
}
var os = new Set(["img", "canvas", "video", "iframe", "object", "embed"]);
function oc(e, t) {
    let r = getComputedStyle(e),
        n = e.getBoundingClientRect(),
        o = 1 / 0,
        i = -1 / 0,
        l = !1;
    for (let r of Array.from(e.children)) {
        if (
            (function (e, t) {
                if (e?.nodeType !== 1) return !1;
                if ("exclude" === e.getAttribute("data-capture")) return t?.excludeMode === "remove";
                if (Array.isArray(t?.exclude))
                    for (let r of t.exclude)
                        try {
                            if (e.matches(r)) return "remove" === t.excludeMode;
                        } catch (e) {
                            eE(t, "Invalid exclude selector; ignored.", e);
                        }
                if (Array.isArray(t?.excludePredicates))
                    for (let r of t.excludePredicates)
                        try {
                            if (r(e)) return "remove" === t.excludeMode;
                        } catch (e) {
                            eE(t, "Your exclude function threw; ignored.", e);
                        }
                if ("function" == typeof t?.filter && "remove" === t.filterMode)
                    try {
                        if (!t.filter(e)) return !0;
                    } catch (e) {
                        eE(t, "Your filter function threw; ignored.", e);
                    }
                return !1;
            })(r, t) ||
            !(function (e) {
                let t = getComputedStyle(e);
                return "none" !== t.display && "absolute" !== t.position && "fixed" !== t.position;
            })(r)
        )
            continue;
        let e = r.getBoundingClientRect(),
            a = e.top - n.top,
            s = e.bottom - n.top;
        s <= a || (a < o && (o = a), s > i && (i = s), (l = !0));
    }
    let a = l ? Math.max(0, i - o) : 0;
    return (
        (parseFloat(r.borderTopWidth) || 0) +
        (parseFloat(r.borderBottomWidth) || 0) +
        (parseFloat(r.paddingTop) || 0) +
        (parseFloat(r.paddingBottom) || 0) +
        a
    );
}
var ou = (e, t = 3) => (Number.isFinite(e) ? Math.round(e * 10 ** t) / 10 ** t : e),
    od = /::-(?:webkit-(?:scrollbar|meter|progress|slider)|moz-(?:meter|progress))/i,
    of = new WeakMap();
eR();
var oh = new Set();
async function op(e, t = {}) {
    (t1(), t0(e.ownerDocument || document));
    let r = t.__session || { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() },
        n = {
            styleMap: r.styleMap,
            styleCache: r.styleCache,
            nodeMap: r.nodeMap,
            options: t,
            slicer: t.__slicer || null,
        },
        o = null,
        i = null;
    if ((t.clip && (i = n7(e, t.clip)) && (n.clip = { rect: i, root: e }), t.captureSelection))
        try {
            n.selection = (function (e) {
                let t = (e.ownerDocument || document).getSelection?.();
                if (!t || t.isCollapsed || 0 === t.rangeCount) return null;
                let r = [];
                for (let n = 0; n < t.rangeCount; n += 1) {
                    let o = t.getRangeAt(n);
                    if (!o.collapsed)
                        try {
                            o.intersectsNode(e) && r.push(o);
                        } catch {}
                }
                return r.length ? { ranges: r, styles: new Map() } : null;
            })(e);
        } catch (e) {
            eE(n, "Couldn't read the text selection.", e);
        }
    let l,
        a = "",
        s = "";
    if (oh.size) {
        let t = (e, t) => {
            for (let r = t; r; r = r.assignedSlot || r.parentElement || r.getRootNode()?.host) if (r === e) return !0;
            return !1;
        };
        for (;;) {
            let r = [...oh].filter(({ root: r }) => t(r, e) || t(e, r)).map(({ promise: e }) => e.catch(() => {}));
            if (!r.length) break;
            await Promise.all(r);
        }
    }
    if (!n.clip && e.isConnected && e.ownerDocument?.visibilityState !== "hidden")
        try {
            let t = e.getBoundingClientRect(),
                r = e.ownerDocument?.defaultView || window,
                n = t.right <= 0 || t.bottom <= 0 || t.left >= r.innerWidth || t.top >= r.innerHeight,
                o = [];
            if (
                (n &&
                    (() => {
                        let t = [];
                        for (let r of (e.shadowRoot && t.push(e.shadowRoot), e.querySelectorAll("*")))
                            r.shadowRoot && t.push(r.shadowRoot);
                        for (; t.length;) {
                            let e = t.pop(),
                                r = e.host?.localName === "calcite-icon";
                            for (let n of e.querySelectorAll("*")) {
                                if ((n.shadowRoot && t.push(n.shadowRoot), !r || "svg" !== n.localName)) continue;
                                let e = n.querySelectorAll("path");
                                if (!e.length || [...e].some((e) => e.getAttribute("d")?.trim())) continue;
                                let i = n.getBoundingClientRect();
                                i.width && i.height && o.push(n);
                            }
                        }
                    })(),
                o.length)
            ) {
                let t = (async () => {
                        let t = e.style,
                            n = e.hasAttribute("style"),
                            i = new Map(),
                            l = (e, r) => {
                                (i.has(e) ||
                                    i.set(e, { value: t.getPropertyValue(e), priority: t.getPropertyPriority(e) }),
                                    t.setProperty(e, r, "important"));
                                let n = i.get(e);
                                ((n.forcedValue = t.getPropertyValue(e)),
                                    (n.forcedPriority = t.getPropertyPriority(e)));
                            };
                        try {
                            (l("left", "0"),
                                l("top", "0"),
                                l("right", "auto"),
                                l("bottom", "auto"),
                                l("margin-top", "0"),
                                l("margin-right", "0"),
                                l("margin-bottom", "0"),
                                l("margin-left", "0"),
                                l("transform", "none"),
                                l("translate", "none"),
                                l("opacity", "0"),
                                l("pointer-events", "none"));
                            let t = e.getBoundingClientRect();
                            if (t.right <= 0 || t.bottom <= 0 || t.left >= r.innerWidth || t.top >= r.innerHeight) {
                                let t = e.parentElement?.getBoundingClientRect(),
                                    n = t && t.right > 0 && t.left < r.innerWidth ? Math.max(0, t.left) : 0,
                                    o = t && t.bottom > 0 && t.top < r.innerHeight ? Math.max(0, t.top) : 0;
                                (l("position", "fixed"), l("left", `${n}px`), l("top", `${o}px`));
                            }
                            await eS(100);
                            let n = Date.now() + 1500,
                                i = () =>
                                    o.some((e) => {
                                        if ([...e.querySelectorAll("path")].some((e) => e.getAttribute("d")?.trim()))
                                            return !1;
                                        let t = e.getBoundingClientRect();
                                        return (
                                            t.width &&
                                            t.height &&
                                            t.right > 0 &&
                                            t.bottom > 0 &&
                                            t.left < r.innerWidth &&
                                            t.top < r.innerHeight
                                        );
                                    });
                            for (; Date.now() < n && i();) await new Promise((e) => setTimeout(e, 25));
                            await eS(100);
                        } finally {
                            for (let [e, r] of i)
                                t.getPropertyValue(e) !== r.forcedValue ||
                                    t.getPropertyPriority(e) !== r.forcedPriority ||
                                    (r.value ? t.setProperty(e, r.value, r.priority) : t.removeProperty(e));
                            (n || t.length || e.removeAttribute("style"), await eS(100));
                        }
                    })(),
                    n = { root: e, promise: t };
                oh.add(n);
                try {
                    await t;
                } finally {
                    oh.delete(n);
                }
            }
        } catch {}
    let c = (function (e) {
            if (nq.has(e)) return nX(e, [], nq);
            let t = getComputedStyle(e),
                r = t.outlineStyle,
                n = t.outlineWidth,
                o = "none" !== r && parseFloat(n) > 0,
                i =
                    0 === parseFloat(t.borderTopWidth) &&
                    0 === parseFloat(t.borderRightWidth) &&
                    0 === parseFloat(t.borderBottomWidth) &&
                    0 === parseFloat(t.borderLeftWidth);
            if (o && i) {
                let t = [];
                for (let e of ["top", "right", "bottom", "left"])
                    t.push(
                        [`border-${e}-width`, n],
                        [`border-${e}-style`, "solid"],
                        [`border-${e}-color`, "transparent"],
                    );
                return nX(e, t, nq);
            }
            return () => {};
        })(e),
        u = nY(e, i);
    if (i) {
        let t = e.getBoundingClientRect(),
            r = e.offsetWidth || t.width,
            n = e.offsetHeight || t.height,
            l = t.width && Math.abs(r - t.width) >= 1 ? r / t.width : 1,
            a = t.height && Math.abs(n - t.height) >= 1 ? n / t.height : 1;
        o = { x: (i.left - t.left) * l, y: (i.top - t.top) * a, width: i.width * l, height: i.height * a };
    }
    try {
        l = await r2(e, n, t);
    } catch (e) {
        throw (console.warn("[SnapDOM] Capture failed while copying the element.", e), e);
    } finally {
        (u(), c());
    }
    ((function (e, t = document) {
        let r = t.defaultView || window;
        if (!eC() || !t.body || !(r.visualViewport?.scale < 1 || r.screen.width < t.documentElement.clientWidth))
            return;
        let n = G(t.createElement("div"));
        n.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;overflow:hidden;visibility:hidden";
        let o = [];
        for (let [i, l] of e) {
            if (1 !== i.nodeType || 1 !== l.nodeType) continue;
            let e = r.getComputedStyle(l),
                a =
                    "textarea" === l.localName || ("input" === l.localName && rU.has(l.type))
                        ? (function (e, t, r) {
                              let n = rB.exec(
                                  e.value.split(`
`)[0],
                              );
                              if (!n || e.scrollLeft || e.scrollTop || !r.caretPositionFromPoint) return null;
                              let o = e.getBoundingClientRect(),
                                  i =
                                      "textarea" === e.localName
                                          ? o.top +
                                            (parseFloat(t.borderTopWidth) || 0) +
                                            (parseFloat(t.paddingTop) || 0) +
                                            3
                                          : o.top + o.height / 2,
                                  l = (t) => {
                                      let n = r.caretPositionFromPoint(t, i);
                                      return n && n.offsetNode === e ? n.offset : -1;
                                  },
                                  a = o.width / 16,
                                  s = (e) => {
                                      let t = o.left;
                                      for (; t <= o.right && l(t) < e;) t += a;
                                      if (t > o.right) return NaN;
                                      let r = t - a;
                                      for (let n = 0; n < 16; n++) {
                                          let n = (r + t) / 2;
                                          l(n) >= e ? (t = n) : (r = n);
                                      }
                                      return t;
                                  },
                                  c = Math.abs(s(n.index + n[0].length) - s(n.index + 1));
                              return Number.isFinite(c) ? { word: n[0], distance: c, centers: !0 } : null;
                          })(l, e, t)
                        : (function (e) {
                              for (let t = e.firstChild; t; t = t.nextSibling) {
                                  if (3 !== t.nodeType) continue;
                                  let r = /\S+/.exec(t.data);
                                  if (!r) continue;
                                  let n = e.ownerDocument.createRange();
                                  (n.setStart(t, r.index), n.setEnd(t, r.index + r[0].length));
                                  let o = n.getClientRects();
                                  return 1 === o.length ? { word: r[0], distance: o[0].width, centers: !1 } : null;
                              }
                              return null;
                          })(l);
            if (!a) continue;
            let s = l.getBoundingClientRect(),
                c = l.offsetWidth && s.width ? s.width / l.offsetWidth : 1,
                u = t.createElement("span");
            for (let t of ((u.style.whiteSpace = "pre"), rz)) u.style.setProperty(t, e.getPropertyValue(t));
            ((u.textContent = a.word),
                n.appendChild(u),
                o.push({ clone: i, cs: e, span: u, live: a.distance / c, centers: a.centers }));
        }
        if (o.length) {
            t.body.appendChild(n);
            try {
                for (let { clone: e, cs: t, span: r, live: n, centers: i } of o) {
                    let o = r.firstChild,
                        l = (parseFloat(t.letterSpacing) || 0) * (i ? o.length - 1 : o.length),
                        a = i ? Math.abs(rV(o, o.length - 1) - rV(o, 0)) : r.getBoundingClientRect().width,
                        s = (n - l) / (a - l);
                    s > 1.005 &&
                        Number.isFinite(s) &&
                        (e.style.setProperty("font-size", `${parseFloat(t.fontSize) * s}px`),
                        "normal" !== t.lineHeight &&
                            e.style.setProperty("line-height", `${parseFloat(t.lineHeight) * s}px`));
                }
            } finally {
                n.remove();
            }
        }
    })(n.nodeMap, e.ownerDocument || document),
        n.slicer?.due() && (await n.slicer.pause()));
    try {
        !(function (e, t, r) {
            if (!e || e?.nodeType !== 1) return;
            let n = e.ownerDocument || document,
                o = t || n,
                i = m(e) && "svg" === e.localName ? [e] : Array.from(e.querySelectorAll("svg")),
                l = /url\(\s*["']?\s*#([^)"']+)/g,
                a = [
                    "fill",
                    "stroke",
                    "filter",
                    "clip-path",
                    "mask",
                    "marker",
                    "marker-start",
                    "marker-mid",
                    "marker-end",
                ],
                s = (e) => {
                    if (!e || !e.getAttribute) return null;
                    let t =
                        e.getAttribute("href") ||
                        e.getAttribute("xlink:href") ||
                        ("function" == typeof e.getAttributeNS
                            ? e.getAttributeNS("http://www.w3.org/1999/xlink", "href")
                            : null);
                    if (t) return t;
                    let r = e.attributes;
                    if (!r) return null;
                    for (let e = 0; e < r.length; e++) {
                        let t = r[e];
                        if (!t || !t.name) continue;
                        if ("href" === t.name) return t.value;
                        let n = t.name.indexOf(":");
                        if (-1 !== n && "href" === t.name.slice(n + 1)) return t.value;
                    }
                    return null;
                },
                c = new Set(Array.from(e.querySelectorAll("[id]")).map((e) => e.id)),
                u = new Set(),
                d = !1,
                f = (e, t = null) => {
                    let r;
                    if (e)
                        for (l.lastIndex = 0; (r = l.exec(e));) {
                            d = !0;
                            let e = (r[1] || "").trim();
                            e && (c.has(e) || (u.add(e), t && !t.has(e) && t.add(e)));
                        }
                },
                h = (e) => {
                    for (let t of e.querySelectorAll("use")) {
                        let e = s(t);
                        if (!e || !e.startsWith("#")) continue;
                        d = !0;
                        let r = e.slice(1).trim();
                        r && !c.has(r) && u.add(r);
                    }
                    for (let t of (f(e.getAttribute("style") || ""), a)) f(e.getAttribute(t));
                    for (let t of e.querySelectorAll(
                        '*[style*="url("],*[fill^="url("], *[stroke^="url("],*[filter^="url("],*[clip-path^="url("],*[mask^="url("],*[marker^="url("],*[marker-start^="url("],*[marker-mid^="url("],*[marker-end^="url("]',
                    ))
                        for (let e of (f(t.getAttribute("style") || ""), a)) f(t.getAttribute(e));
                };
            for (let e of i) h(e);
            if (
                (((e) => {
                    if (!e || 1 !== e.nodeType || !e.querySelectorAll) return;
                    let t = !1;
                    try {
                        t = !!(
                            o.querySelector &&
                            o.querySelector(
                                "filter[id],clipPath[id],mask[id],linearGradient[id],radialGradient[id],pattern[id]",
                            )
                        );
                    } catch {
                        return;
                    }
                    if (!t) return;
                    let r = ["filter", "clipPath", "mask", "maskImage", "webkitMaskImage"],
                        n = (e) => {
                            let t;
                            if (!m(e)) {
                                try {
                                    t = getComputedStyle(e);
                                } catch {
                                    return;
                                }
                                for (let e of r) {
                                    let r = t[e];
                                    r && r.includes("url(") && f(r);
                                }
                            }
                        };
                    for (let t of (n(e), e.querySelectorAll("*"))) n(t);
                })(r),
                !d)
            )
                return;
            let p = e.querySelector("svg.inline-defs-container");
            p ||
                ((p = n.createElementNS("http://www.w3.org/2000/svg", "svg")).classList.add("inline-defs-container"),
                p.setAttribute("aria-hidden", "true"),
                p.setAttribute("style", "position:absolute;width:0;height:0;overflow:hidden"),
                e.insertBefore(p, e.firstChild || null));
            let g = p.querySelector("defs") || null,
                y = (t) => {
                    if (!t || c.has(t)) return null;
                    let r = window.CSS && CSS.escape ? CSS.escape(t) : t.replace(/[^a-zA-Z0-9_-]/g, "\\$&"),
                        n = (t) => {
                            let r = o.querySelector(t);
                            return r && !e.contains(r) ? r : null;
                        };
                    return n(`svg defs > *#${r}`) || n(`svg > symbol#${r}`) || n(`*#${r}`);
                };
            if (!u.size) return;
            let b = new Set(u),
                w = new Set();
            for (; b.size;) {
                let e = b.values().next().value;
                if ((b.delete(e), !e || c.has(e) || w.has(e))) continue;
                let t = y(e);
                if (!t) {
                    w.add(e);
                    continue;
                }
                g || ((g = n.createElementNS("http://www.w3.org/2000/svg", "defs")), p.appendChild(g));
                let r = t.cloneNode(!0);
                for (let t of (r.id || r.setAttribute("id", e),
                g.appendChild(r),
                w.add(e),
                c.add(e),
                [r, ...r.querySelectorAll("*")])) {
                    let e = s(t);
                    if (e && e.startsWith("#")) {
                        let t = e.slice(1).trim();
                        !t || c.has(t) || w.has(t) || b.add(t);
                    }
                    let r = t.getAttribute?.("style") || "";
                    for (let e of (r && f(r, b), a)) {
                        let r = t.getAttribute?.(e);
                        r && f(r, b);
                    }
                }
            }
        })(l, void 0, e);
    } catch (e) {
        console.warn("[SnapDOM] Couldn't copy external SVG icons; some may be missing.", e);
    }
    try {
        await nH(e, l, n, t);
    } catch (e) {
        console.warn("[SnapDOM] Couldn't copy ::before/::after content; some decorations may be missing.", e);
    }
    for (let [e, t] of (await rj(l, n), n.nodeMap.entries()))
        if (t?.tagName === "STYLE" && e?.tagName === "STYLE" && !e.hasAttribute("data-sd"))
            try {
                let r = t.sheet && t.sheet.cssRules;
                r && /@media/i.test(e.textContent || "") && (e.textContent = rF(r));
            } catch {}
    try {
        for (let e of l.querySelectorAll("style[data-sd]")) ((s += e.textContent || ""), e.remove());
    } catch (e) {
        eE(n, "Couldn't copy shadow DOM styles.", e);
    }
    n.slicer?.due() && (await n.slicer.pause());
    let d = er(n.styleMap);
    a = Array.from(d.entries())
        .map(([e, t]) => `.${t}{${e}}`)
        .join("");
    let f =
        s +
        "[data-snapdom-has-after]::after,[data-snapdom-has-before]::before{content:none!important;display:none!important}" +
        (n.__usesPlaceholder
            ? "[data-sd-ph]::placeholder{color:var(--sd-ph)!important;opacity:var(--sd-ph-o)!important;-webkit-text-fill-color:var(--sd-ph)!important}"
            : "") +
        (n.__pseudoCSS || "");
    for (let [e, t] of ((a = f + a), n.styleMap.entries())) om(e, t, d);
    try {
        !(function (e, t, r) {
            let n = [];
            for (let t of [":modal", ":popover-open"])
                try {
                    n.push(...e.querySelectorAll(t));
                } catch {}
            if (!n.length) return;
            let o = new Map();
            for (let [e, t] of r.entries()) o.set(t, e);
            let i = 214748e4;
            for (let e of n) {
                let r = o.get(e);
                if (!(!r || r === t || null == r.parentNode)) {
                    try {
                        let r = getComputedStyle(e, "::backdrop"),
                            n = r.backgroundColor,
                            o = r.backgroundImage;
                        if ((n && "rgba(0, 0, 0, 0)" !== n && "transparent" !== n) || (o && "none" !== o)) {
                            let e = document.createElement("div");
                            (e.setAttribute("data-sd-backdrop", ""),
                                (e.style.cssText =
                                    `position:fixed;inset:0;z-index:${i};background-color:${n};` +
                                    (o && "none" !== o && o.includes("data:") ? `background-image:${o};` : "")),
                                t.appendChild(e));
                        }
                    } catch {}
                    ((i += 1), (r.style.zIndex = String(i)), t.appendChild(r), (i += 1));
                }
            }
        })(e, l, n.nodeMap);
    } catch (e) {
        eE(n, "Couldn't bring an open dialog or popover into the capture.", e);
    }
    if ((n.clip || e.scrollTop || e.scrollLeft) && l?.nodeType === 1)
        try {
            let t = n.clip && o ? { x: o.x, y: o.y } : { x: 0, y: 0 };
            !(function (e, t, r, n, o) {
                let i = e.getBoundingClientRect();
                p(t) && "static" === en(e).position && (t.style.position = "relative");
                let l = [];
                for (let [t, a] of r) {
                    if (
                        !p(t) ||
                        a?.nodeType !== 1 ||
                        a === e ||
                        !(function (e, t) {
                            for (let r = t; r; r = oe(r)) if (r === e) return !0;
                            return !1;
                        })(e, a)
                    )
                        continue;
                    let r = n.get(a) || en(a),
                        s = r.position;
                    if (("fixed" !== s && "sticky" !== s && "-webkit-sticky" !== s) || "absolute" === t.style.position)
                        continue;
                    let c = a.getBoundingClientRect();
                    if (!(c.width > 0 && c.height > 0)) continue;
                    n8.add(t);
                    let u = r.transform && "none" !== r.transform ? r.transform : "",
                        d = n6(a),
                        f = !!(u || "0deg" !== d.rotate || d.scale || d.translate),
                        h = f ? ot(u, d) : null,
                        m = !h || !h.is2D || (1 === h.a && 0 === h.b && 0 === h.c && 1 === h.d),
                        y = c.width,
                        b = c.height;
                    m || ((y = a.offsetWidth || c.width), (b = a.offsetHeight || c.height));
                    let w = a.getRootNode && g(a.getRootNode()),
                        x = i,
                        v = e.clientLeft || 0,
                        S = e.clientTop || 0;
                    if (w) {
                        let t = (function (e, t) {
                            for (let r = oe(e); r && r !== t && r?.nodeType === 1; r = oe(r)) {
                                let e = en(r);
                                if (
                                    "static" !== e.position ||
                                    (e.transform && "none" !== e.transform) ||
                                    (e.filter && "none" !== e.filter) ||
                                    (e.backdropFilter && "none" !== e.backdropFilter) ||
                                    (e.perspective && "none" !== e.perspective) ||
                                    /transform|perspective|filter/.test(e.willChange || "") ||
                                    /layout|paint|strict|content/.test(e.contain || "")
                                )
                                    return r;
                            }
                            return null;
                        })(a, e);
                        t && ((x = t.getBoundingClientRect()), (v = t.clientLeft || 0), (S = t.clientTop || 0));
                    }
                    let M = c.left - x.left - v,
                        k = c.top - x.top - S;
                    if (f)
                        if (((t.style.translate = "none"), (t.style.rotate = "none"), (t.style.scale = "none"), m))
                            t.style.transform = "none";
                        else {
                            t.style.transform = `matrix(${h.a},${h.b},${h.c},${h.d},0,0)`;
                            let { ox: e, oy: n } = n9(r, y, b),
                                o = n3(y, b, { a: h.a, b: h.b, c: h.c, d: h.d, e: 0, f: 0 }, e, n);
                            ((M -= o.minX), (k -= o.minY));
                        }
                    if ("fixed" !== s) {
                        let e = t.cloneNode(!1);
                        (e.setAttribute("data-snap-ph", "1"),
                            (e.style.position = "static"),
                            (e.style.visibility = "hidden"),
                            (e.style.width = `${y}px`),
                            (e.style.height = `${b}px`),
                            (e.style.boxSizing = "border-box"),
                            t.parentElement?.insertBefore(e, t));
                    }
                    let C = y + 2,
                        $ = b;
                    (o &&
                        (0.5 > Math.abs(k - o.y) && ((k -= 1), ($ += 1)),
                        0.5 > Math.abs(M - o.x) && ((M -= 1), (C += 1))),
                        (t.style.position = "absolute"),
                        (t.style.left = `${M}px`),
                        (t.style.top = `${k}px`),
                        (t.style.right = "auto"),
                        (t.style.bottom = "auto"),
                        (t.style.margin = "0"),
                        (t.style.width = `${C}px`),
                        (t.style.height = `${$}px`),
                        (t.style.boxSizing = "border-box"),
                        w || l.push(t));
                }
                for (let e of l) t.appendChild(e);
            })(e, l, n.nodeMap, n.styleCache, t);
        } catch (e) {
            eE(n, "Couldn't keep fixed-position elements in place.", e);
        }
    for (let [t, r] of n.nodeMap.entries())
        (n.clip && r === e && e === e.ownerDocument.scrollingElement) || og(t, r, n.nodeMap, n.styleCache);
    let h = e.ownerDocument;
    if ((e === h.body || e === h.documentElement) && "html" === h.documentElement.localName) {
        let t = n.styleCache.get(h.documentElement) || en(h.documentElement);
        e === h.documentElement && (l.style.overflow = "visible");
        let r = e === h.body ? l : l.querySelector("body");
        if (
            r &&
            "visible" === t.overflowX &&
            "visible" === t.overflowY &&
            "none" === t.contain &&
            !t.containerType?.includes("size") &&
            "auto" !== t.contentVisibility &&
            "hidden" !== t.contentVisibility
        ) {
            let e = n.styleCache.get(h.body) || en(h.body);
            "none" !== e.contain ||
                e.containerType?.includes("size") ||
                "auto" === e.contentVisibility ||
                "hidden" === e.contentVisibility ||
                "none" === e.display ||
                (r.style.overflow = "visible");
        }
    }
    if (e === n.nodeMap.get(l)) {
        let t = n.styleCache.get(e) || en(e);
        n.styleCache.set(e, t);
        let r = (function (e) {
            if (!e || "none" === e) return "";
            let t = e.replace(/translate[XY]?\([^)]*\)/g, "");
            return (t = (t = t.replace(/matrix\(([^)]+)\)/g, (e, t) => {
                let r = t.split(",").map((e) => e.trim());
                return 6 !== r.length ? `matrix(${t})` : ((r[4] = "0"), (r[5] = "0"), `matrix(${r.join(", ")})`);
            })).replace(/matrix3d\(([^)]+)\)/g, (e, t) => {
                let r = t.split(",").map((e) => e.trim());
                return 16 !== r.length ? `matrix3d(${t})` : ((r[12] = "0"), (r[13] = "0"), `matrix3d(${r.join(", ")})`);
            }))
                .trim()
                .replace(/\s{2,}/g, " ");
        })(t.transform);
        ((l.style.margin = "0"),
            (l.style.top = "auto"),
            (l.style.left = "auto"),
            (l.style.right = "auto"),
            (l.style.bottom = "auto"),
            (l.style.animation = "none"),
            (l.style.transition = "none"),
            (l.style.willChange = "auto"),
            (l.style.float = "none"),
            (l.style.clear = "none"),
            (l.style.transform = r || ""),
            (l.style.translate = "none"));
    }
    for (let [e, t] of n.nodeMap.entries())
        "PRE" === t.tagName && ((e.style.marginTop = "0"), (e.style.marginBlockStart = "0"));
    return {
        clone: l,
        classCSS: a,
        classPrefixCSS: f,
        styleCache: n.styleCache,
        nodeMap: n.nodeMap,
        reconcileRisk: n.reconcileRisk || 0,
        clipWindow: o,
    };
}
function om(e, t, r) {
    if ("STYLE" === e.tagName) return;
    if (e.getRootNode && g(e.getRootNode())) return void e.setAttribute("style", t.replace(/;/g, "; "));
    let n = r.get(t);
    n && e.classList.add(n);
    let o = e.style?.backgroundImage,
        i = e.dataset?.snapdomHasIcon;
    (o && "none" !== o && (e.style.backgroundImage = o),
        i && ((e.style.verticalAlign = "middle"), (e.style.display = "inline")));
}
function og(e, t, r, n) {
    let o = t.scrollLeft,
        i = t.scrollTop;
    if (!(o || i) || e?.nodeType !== 1 || "http://www.w3.org/1999/xhtml" !== e.namespaceURI) return;
    ((e.style.overflow = "hidden"), (e.style.scrollbarWidth = "none"), (e.style.msOverflowStyle = "none"));
    try {
        for (let l of e.querySelectorAll("*")) {
            if (1 !== l.nodeType || "http://www.w3.org/1999/xhtml" !== l.namespaceURI) continue;
            let e = r?.get(l),
                a = e && (n?.get(e) || en(e)),
                s = l.style.position || a?.position;
            if ("fixed" !== s && "absolute" !== s) continue;
            let c = a && "absolute" !== a.position && "absolute" === s,
                u = null;
            if (e && !c)
                for (
                    let r = e.parentElement || e.getRootNode()?.host;
                    r;
                    r = r.parentElement || r.getRootNode()?.host
                ) {
                    let e = n?.get(r) || en(r);
                    if (
                        ("absolute" === s && "static" !== e.position) ||
                        (e.transform && "none" !== e.transform) ||
                        (e.translate && "none" !== e.translate) ||
                        (e.rotate && "none" !== e.rotate) ||
                        (e.scale && "none" !== e.scale) ||
                        (e.filter && "none" !== e.filter) ||
                        (e.backdropFilter && "none" !== e.backdropFilter) ||
                        (e.perspective && "none" !== e.perspective) ||
                        /transform|perspective|filter/.test(e.willChange || "") ||
                        /layout|paint|strict|content/.test(e.contain || "")
                    ) {
                        u = r;
                        break;
                    }
                    if (r === t) break;
                }
            if (u) {
                u === t &&
                    ((l.style.top = a.top),
                    (l.style.left = a.left),
                    (l.style.right = a.right),
                    (l.style.bottom = a.bottom));
                continue;
            }
            let d = parseFloat(l.style.top || a?.top) || 0,
                f = parseFloat(l.style.left || a?.left) || 0;
            ((l.style.top = `${d + i}px`),
                (l.style.left = `${f + o}px`),
                "fixed" === s && (l.style.position = "absolute"));
        }
    } catch {}
    let l = document.createElement("div");
    for (
        l.style.all = "unset",
            l.style.transform = `translate(${-o}px, ${-i}px)`,
            l.style.willChange = "transform",
            l.style.display = "inline-block",
            l.style.width = "100%";
        e.firstChild;
    )
        l.appendChild(e.firstChild);
    e.appendChild(l);
}
(N(), e_(), s());
var oy = "http://www.w3.org/1999/xlink";
async function ob(e, t = {}) {
    let r = Array.from(e.querySelectorAll("img"));
    "IMG" === e.tagName && r.unshift(e);
    let n = async (e) => {
        let r, n, i, l, a, s;
        if (!e.getAttribute("src")) {
            let t = e.currentSrc || e.src || rA(e.getAttribute("srcset"), e) || "";
            t && e.setAttribute("src", t);
        }
        if (
            (e.removeAttribute("srcset"), e.removeAttribute("sizes"), (e.getAttribute("src") || "").startsWith("data:"))
        ) {
            (e.width || (e.width = e.naturalWidth || 100), e.height || (e.height = e.naturalHeight || 100));
            return;
        }
        let c = e.src || "";
        if (!c) return;
        let u = o.image?.get(c);
        if (u) {
            ((e.src = u),
                e.width || (e.width = e.naturalWidth || 100),
                e.height || (e.height = e.naturalHeight || 100));
            return;
        }
        let d = await $(c, { as: "dataURL", useProxy: t.useProxy });
        if (d.ok && "string" == typeof d.data && d.data.startsWith("data:")) {
            (o.image?.set(c, d.data),
                (e.src = d.data),
                d.blob && (e.__snapdomBlob = d.blob),
                e.width || (e.width = e.naturalWidth || 100),
                e.height || (e.height = e.naturalHeight || 100));
            return;
        }
        let { width: f, height: h } =
                ((r = parseFloat(e.dataset?.snapdomWidth || "") || 0),
                (n = parseFloat(e.dataset?.snapdomHeight || "") || 0),
                (i = parseInt(e.getAttribute("width") || "", 10) || 0),
                (l = parseInt(e.getAttribute("height") || "", 10) || 0),
                (a = parseFloat(e.style?.width || "") || 0),
                (s = parseFloat(e.style?.height || "") || 0),
                {
                    width: r || a || i || e.width || e.naturalWidth || 100,
                    height: n || s || l || e.height || e.naturalHeight || 100,
                }),
            { fallbackURL: p } = t || {};
        if (p)
            try {
                let r = "function" == typeof p ? await p({ width: f, height: h, src: c, element: e }) : p;
                if (r) {
                    let n = await $(r, { as: "dataURL", useProxy: t.useProxy });
                    if (n?.ok && "string" == typeof n.data) {
                        ((e.src = n.data), e.width || (e.width = f), e.height || (e.height = h));
                        return;
                    }
                }
            } catch {}
        if (!1 !== t.placeholders) {
            eF(t.__session, "image-fallback", `image failed to inline, using placeholder: ${c}`);
            let r = document.createElement("div");
            ((r.style.cssText = `width:${f}px;height:${h}px;background:#ccc;display:inline-block;text-align:center;line-height:${h}px;color:#666;font-size:12px;overflow:hidden`),
                (r.textContent = "img"),
                e.replaceWith(r));
        } else {
            let t = document.createElement("div");
            ((t.style.cssText = `display:inline-block;width:${f}px;height:${h}px;visibility:hidden;`),
                e.replaceWith(t));
        }
    };
    for (let e = 0; e < r.length; e += 6) {
        let t = r.slice(e, e + 6).map(n);
        await Promise.allSettled(t);
    }
    let i = Array.from(e.querySelectorAll("image"));
    "image" === e.localName && i.unshift(e);
    let l = async (e) => {
        let r =
            e.getAttribute("href") ||
            e.getAttribute("xlink:href") ||
            ("function" == typeof e.getAttributeNS ? e.getAttributeNS(oy, "href") : null);
        if (!r || r.startsWith("data:") || r.startsWith("blob:")) return;
        let n = await $(r, { as: "dataURL", useProxy: t.useProxy });
        n.ok &&
            "string" == typeof n.data &&
            n.data.startsWith("data:") &&
            (e.setAttribute("href", n.data),
            e.removeAttribute("xlink:href"),
            "function" == typeof e.removeAttributeNS && e.removeAttributeNS(oy, "href"));
    };
    for (let e = 0; e < i.length; e += 6) {
        let t = i.slice(e, e + 6).map(l);
        await Promise.allSettled(t);
    }
}
(eR(), eP());
var ow = [
        "background-image",
        "mask",
        "mask-image",
        "-webkit-mask",
        "-webkit-mask-image",
        "mask-source",
        "mask-box-image-source",
        "mask-border-source",
        "-webkit-mask-box-image-source",
        "border-image",
        "border-image-source",
    ],
    ox = [
        "mask-position",
        "mask-size",
        "mask-repeat",
        "mask-mode",
        "mask-composite",
        "-webkit-mask-position",
        "-webkit-mask-size",
        "-webkit-mask-repeat",
        "-webkit-mask-composite",
        "mask-origin",
        "mask-clip",
        "-webkit-mask-origin",
        "-webkit-mask-clip",
        "-webkit-mask-position-x",
        "-webkit-mask-position-y",
    ],
    ov = [
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-size",
        "background-repeat",
        "background-origin",
        "background-clip",
        "background-attachment",
        "background-blend-mode",
    ],
    oS = ["border-image-slice", "border-image-width", "border-image-outset", "border-image-repeat"];
async function oM(e, t, r, n) {
    let o = r.get(e) || en(e);
    r.has(e) || r.set(e, o);
    let i = (function (e) {
            let t = tw.get(e);
            if (!t || !rl(t, e)) return null;
            let r = t.snapshot;
            return !r || r.__bgClipTextFix ? null : r;
        })(e),
        l = i ? (e) => (e in i ? i[e] : "") : (e) => o.getPropertyValue(e),
        a = l("border-image"),
        s = l("border-image-source"),
        c = o.getPropertyValue("background-image"),
        u = l("background-color"),
        d =
            (c && "none" !== c) ||
            (u && "rgba(0, 0, 0, 0)" !== u && "transparent" !== u) ||
            /url\s*\(|gradient\s*\(/i.test(o.getPropertyValue("background") || ""),
        f = eC() && (l("background-clip") || l("-webkit-background-clip") || "").includes("text");
    if (d && !f)
        for (let e of ov) {
            let r = l(e);
            r && t.style.setProperty(e, r);
        }
    for (let e of ow) {
        if (f && "background-image" === e) continue;
        let r = o.getPropertyValue(e);
        if ("background-image" === e && (!r || "none" === r)) {
            let e = o.getPropertyValue("background");
            e &&
                /url\s*\(/.test(e) &&
                (r =
                    ei(e)
                        .filter((e) => /url\s*\(/.test(e))
                        .join(", ") || r);
        }
        if (!r || "none" === r) continue;
        let i = ei(r),
            l = await Promise.all(i.map((e) => _(e, n)));
        l.some((e) => e && "none" !== e && !/^url\(undefined/.test(e)) && t.style.setProperty(e, l.join(", "));
    }
    for (let e of ox) {
        let r = l(e);
        r && "initial" !== r && t.style.setProperty(e, r);
    }
    if ((a && "none" !== a) || (s && "none" !== s))
        for (let e of oS) {
            let r = l(e);
            r && "initial" !== r && t.style.setProperty(e, r);
        }
    if (d && /fixed/.test(l("background-attachment") || ""))
        try {
            await ok(e, t, o);
        } catch {}
}
async function ok(e, t, r) {
    let n = (r.getPropertyValue("background-attachment") || "").split(",").map((e) => e.trim()),
        o = eM();
    if (!o)
        for (let t = e.parentElement; t && !o; t = t.parentElement) {
            let e = en(t);
            ((e.transform && "none" !== e.transform) || (e.filter && "none" !== e.filter)) && (o = !0);
        }
    if (o) return void t.style.setProperty("background-attachment", n.map(() => "scroll").join(", "));
    let i = e.getBoundingClientRect(),
        l = e.ownerDocument?.defaultView || window,
        a = l.innerWidth,
        s = l.innerHeight,
        c = ei(t.style.backgroundImage || r.getPropertyValue("background-image") || ""),
        u = (t.style.backgroundSize || r.getPropertyValue("background-size") || "auto").split(",").map((e) => e.trim()),
        d = (t.style.backgroundPosition || r.getPropertyValue("background-position") || "0% 0%")
            .split(",")
            .map((e) => e.trim()),
        f = [],
        h = [];
    for (let e = 0; e < c.length; e++) {
        let t = n[e % n.length] || "scroll",
            r = u[e % u.length],
            o = d[e % d.length];
        if ("fixed" !== t) {
            (f.push(r), h.push(o));
            continue;
        }
        let l = 0,
            p = 0,
            m = c[e] && c[e].match(/url\(["']?([^"')]+)["']?\)/);
        if (m)
            try {
                let e = new Image();
                ((e.src = m[1]), await e.decode(), (l = e.naturalWidth), (p = e.naturalHeight));
            } catch {
                (f.push(r), h.push(o));
                continue;
            }
        let g = (function (e, t, r, n, o) {
            let i = (e || "auto").trim();
            if ("cover" === i || "contain" === i) {
                if (!t || !r) return { w: n, h: o };
                let e = "cover" === i ? Math.max(n / t, o / r) : Math.min(n / t, o / r);
                return { w: t * e, h: r * e };
            }
            let l = i.split(/\s+/),
                a = (e, t) =>
                    "auto" === e || void 0 === e
                        ? null
                        : e.endsWith("px")
                          ? parseFloat(e)
                          : e.endsWith("%")
                            ? (t * parseFloat(e)) / 100
                            : void 0,
                s = a(l[0], n),
                c = a(l[1], o);
            if (void 0 === s || void 0 === c) return null;
            let u = s,
                d = c;
            return (
                null == u && null == d
                    ? ((u = t || n), (d = r || o))
                    : null == u
                      ? (u = t && r ? (t / r) * d : n)
                      : null == d && (d = t && r ? (r / t) * u : o),
                u && d ? { w: u, h: d } : null
            );
        })(r, l, p, a, s);
        if (!g) {
            (f.push(r), h.push(o));
            continue;
        }
        let y = o.split(/\s+/),
            b = (e, t, r) =>
                e ? (e.endsWith("px") ? parseFloat(e) : e.endsWith("%") ? ((t - r) * parseFloat(e)) / 100 : void 0) : 0,
            w = b(y[0] || "0%", a, g.w),
            x = b(y[1] || y[0] || "0%", s, g.h);
        if (void 0 === w || void 0 === x) {
            (f.push(r), h.push(o));
            continue;
        }
        (f.push(`${oC(g.w)}px ${oC(g.h)}px`), h.push(`${oC(w - i.left)}px ${oC(x - i.top)}px`));
    }
    (t.style.setProperty("background-size", f.join(", ")),
        t.style.setProperty("background-position", h.join(", ")),
        t.style.setProperty("background-attachment", n.map(() => "scroll").join(", ")));
}
var oC = (e) => Math.round(100 * e) / 100;
async function o$(e, t, r, n = {}, o = new Map()) {
    if (!t) return;
    let i = [];
    e && t9(e) && i.push([e, t]);
    let l = [t];
    for (; l.length;) {
        let e = l.pop();
        if (e.children)
            for (let t of e.children) {
                if ("STYLE" === t.tagName) continue;
                let e = o.get(t);
                (e && t9(e) && i.push([e, t]), l.push(t));
            }
    }
    for (let e = 0; e < i.length; e += 6) await Promise.allSettled(i.slice(e, e + 6).map(([e, t]) => oM(e, t, r, n)));
}
eP();
var oA = new Set([
    "IMG",
    "INPUT",
    "TEXTAREA",
    "SELECT",
    "CANVAS",
    "VIDEO",
    "AUDIO",
    "IFRAME",
    "EMBED",
    "OBJECT",
    "PROGRESS",
    "METER",
    "HR",
    "BR",
]);
function oR(e, t) {
    if (!t) return null;
    let r = e;
    for (let e of t) if (!(r = r.children[e])) return null;
    return r;
}
function oE(e) {
    return (
        (function (e = "soft") {
            "disabled" === e &&
                ((o.computedStyle = new WeakMap()),
                (o.measureHints = new WeakMap()),
                (o.baseStyle = new n(50)),
                (o.defaultStyle = new n(64)),
                (o.image = new n(100)),
                (o.background = new n(100)),
                (o.resource = new n(150)),
                (o.compress = new n(50)));
        })(e),
        { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map(), warnings: [] }
    );
}
function oF(e, t) {
    if (!e) return () => {};
    let r = [];
    return (
        (function e(n) {
            if (t) {
                let e = n.getBoundingClientRect();
                if (e.width > 0 || e.height > 0) {
                    let r = Math.max(e.right, e.left + (n.scrollWidth || 0)),
                        o = Math.max(e.bottom, e.top + (n.scrollHeight || 0));
                    if (r < t.left - 200 || e.left > t.right + 200 || o < t.top - 200 || e.top > t.bottom + 200) return;
                }
            }
            let o = getComputedStyle(n),
                i = (function (e, t) {
                    var r, n, o;
                    let i, l, a, s;
                    if (!e) return () => {};
                    let c =
                        Number.isFinite(
                            (l = parseInt(
                                (i = (
                                    (i =
                                        (r = t = t || getComputedStyle(e)).getPropertyValue("-webkit-line-clamp") ||
                                        r.getPropertyValue("line-clamp")) || ""
                                ).trim()),
                                10,
                            )),
                        ) && l > 0
                            ? l
                            : 0;
                    if (c <= 0 || !oT(e)) return () => {};
                    let u = o_(e),
                        d = u.text,
                        f = (parseFloat((n = t).paddingTop) || 0) + (parseFloat(n.paddingBottom) || 0);
                    u.write("X");
                    let h = e.scrollHeight - f;
                    u.restore();
                    let p = Math.round(
                        (h > 0
                            ? h
                            : ((a = ((o = t).lineHeight || "").trim()),
                              (s = parseFloat(o.fontSize) || 16),
                              a && "normal" !== a
                                  ? a.endsWith("px")
                                      ? parseFloat(a)
                                      : /^\d+(\.\d+)?$/.test(a)
                                        ? Math.round(parseFloat(a) * s)
                                        : a.endsWith("%")
                                          ? Math.round((parseFloat(a) / 100) * s)
                                          : Math.round(1.2 * s)
                                  : Math.round(1.2 * s))) *
                            c +
                            f,
                    );
                    if (e.scrollHeight <= p + 0.5) return () => {};
                    let m = 0,
                        g = d.length,
                        y = -1;
                    for (; m <= g;) {
                        let t = (m + g) >> 1;
                        (u.write(d.slice(0, oP(d, t)) + "\u2026"),
                            e.scrollHeight <= p + 0.5 ? ((y = t), (m = t + 1)) : (g = t - 1));
                    }
                    let b = (y >= 0 ? d.slice(0, oP(d, y)) : "") + "\u2026";
                    return (u.write(b), oN(e, b, u));
                })(n, o);
            i && r.push(i);
            let l = (function (e, t) {
                if (
                    !e ||
                    "ellipsis" !== (t = t || getComputedStyle(e)).textOverflow ||
                    ("nowrap" !== t.whiteSpace && "pre" !== t.whiteSpace) ||
                    ("hidden" !== t.overflowX && "clip" !== t.overflowX) ||
                    !oT(e) ||
                    e.scrollWidth <= e.clientWidth + 0.5
                )
                    return () => {};
                let r = o_(e),
                    n = r.text,
                    o = 0,
                    i = n.length,
                    l = -1;
                for (; o <= i;) {
                    let t = (o + i) >> 1;
                    (r.write(n.slice(0, oP(n, t)) + "\u2026"),
                        e.scrollWidth <= e.clientWidth + 0.5 ? ((l = t), (o = t + 1)) : (i = t - 1));
                }
                let a = (l >= 0 ? n.slice(0, oP(n, l)) : "") + "\u2026";
                return (r.write(a), oN(e, a, r));
            })(n, o);
            for (let t of (l && r.push(l), n.children || [])) e(t);
        })(e),
        () => r.forEach((e) => e())
    );
}
function oN(e, t, r) {
    return () => {
        e.textContent === t && r.restore();
    };
}
function o_(e) {
    let t = [];
    for (let r = e.firstChild; r; r = r.nextSibling) r.nodeType === Node.TEXT_NODE && t.push(r);
    let r = t.map((e) => e.data);
    return {
        text: r.join(""),
        write(e) {
            t[0].data = e;
            for (let e = 1; e < t.length; e++) t[e].data = "";
        },
        restore() {
            for (let e = 0; e < t.length; e++) t[e].data = r[e];
        },
    };
}
function oP(e, t) {
    if (t <= 0 || t >= e.length) return t;
    let r = e.charCodeAt(t - 1);
    return r >= 55296 && r <= 56319 ? t - 1 : t;
}
function oT(e) {
    return !(e.childElementCount > 0) && Array.from(e.childNodes).some((e) => e.nodeType === Node.TEXT_NODE);
}
(eP(), eR(), s(), s(), e_());
var oL = ["clone", "render"],
    oW = { clone: 0, render: 1 },
    oD = "render";
function oO(e, t) {
    return oW[e] >= oW[t];
}
var oI = [];
function oj(e) {
    if (!e) return null;
    if (Array.isArray(e)) {
        let [t, r] = e;
        return "function" == typeof t ? t(r) : t;
    }
    if ("object" == typeof e && "plugin" in e) {
        let { plugin: t, options: r } = e;
        return "function" == typeof t ? t(r) : t;
    }
    return "function" == typeof e ? e() : e;
}
function oz(e) {
    return e && Array.isArray(e.plugins) ? e.plugins : oI;
}
async function oU(e, t, r) {
    let n = r;
    for (let r of oz(t)) {
        let o = r && "function" == typeof r[e] ? r[e] : null;
        if (!o) continue;
        let i = await o(t, n);
        "u" > typeof i && (n = i);
    }
    return n;
}
async function oB(e, t, r) {
    let n = [];
    for (let o of oz(t)) {
        let i = o && "function" == typeof o[e] ? o[e] : null;
        if (!i) continue;
        let l = await i(t, r);
        "u" > typeof l && n.push(l);
    }
    return n;
}
var oV = 0,
    oH = ["resolveNode", "beforeSnap", "beforeClone", "afterClone", "beforeRender", "afterRender"];
function oq(e) {
    for (let t of Array.isArray(e && e.plugins) ? e.plugins : []) {
        let e = oj(t);
        if (!(!e || !0 === e.pure)) {
            for (let t of oH) if ("function" == typeof e[t]) return !0;
        }
    }
    return !1;
}
(s(), ev());
var oG = "data-snapdom-asset",
    oX = "http://www.w3.org/1999/xlink",
    oY = 0;
function oJ(e, t, r, n, o, i) {
    let l = (i.__compressedAssets ||= new WeakMap()),
        a = l.get(e);
    a || ((a = { token: String(++oY), properties: [] }), l.set(e, a), e.setAttribute(oG, a.token));
    let s = a.properties.find((e) => e.kind === t && e.name === r);
    s
        ? (s.compressed !== n && (s.original = n), (s.compressed = o))
        : a.properties.push({ kind: t, name: r, original: n, compressed: o });
}
var oQ = (e, t) => ("style" === t.kind ? e.style?.getPropertyValue(t.name) : e.getAttribute(t.name));
function oK(e, t) {
    let r = new Map();
    if (!e || !t) return r;
    for (let n of [e, ...e.querySelectorAll(`[${oG}]`)]) {
        let e = t.get(n);
        if (!e || n.getAttribute(oG) !== e.token) continue;
        let o = e.properties.filter((e) => oQ(n, e) === e.compressed).map((e) => Object.freeze({ ...e }));
        o.length && r.set(e.token, Object.freeze(o));
    }
    return r;
}
function oZ(e, t) {
    if (!e || !t) return;
    let r = 0;
    for (let n of [e, ...e.querySelectorAll(`[${oG}]`)]) {
        let e = t.get(n);
        e && ((e.token = String(++r)), n.setAttribute(oG, e.token));
    }
}
function o0(e) {
    if (!1 === e.is2D) return 1 / 0;
    let t = e.a * e.a + e.b * e.b + e.c * e.c + e.d * e.d,
        r = e.a * e.d - e.b * e.c;
    return Math.sqrt((t + Math.sqrt(Math.max(0, t * t - 4 * r * r))) / 2);
}
function o1(e, t) {
    let r = t.element || e,
        n = r.isConnected ? en(r) : r.style,
        o = t.__compressionClip,
        i = (e, t) => {
            try {
                return e[t]?.baseVal?.value || 0;
            } catch {
                return 0;
            }
        },
        l = o?.width || r.offsetWidth || parseFloat(n?.width) || i(r, "width"),
        a = o?.height || r.offsetHeight || parseFloat(n?.height) || i(r, "height"),
        s = Number.isFinite(t.width),
        c = Number.isFinite(t.height);
    if (!o && (s || c) && l && a)
        try {
            let e =
                !1 === t.outerTransforms && t.__compressionRootTransform
                    ? t.__compressionRootTransform
                    : n5({ baseTransform: n?.transform, rotate: n?.rotate, scale: n?.scale, width: l, height: a });
            if (!1 === e.is2D) ((l = 0), (a = 0));
            else {
                let t = Math.abs(e.a) * l + Math.abs(e.c) * a,
                    r = Math.abs(e.b) * l + Math.abs(e.d) * a;
                ((l = Math.min(l, t)), (a = Math.min(a, r)));
            }
        } catch {
            ((l = 0), (a = 0));
        }
    let u =
        (s || c ? Math.max(s ? (l ? t.width / l : 1 / 0) : 0, c ? (a ? t.height / a : 1 / 0) : 0) : t.scale || 1) *
        (t.dpr || 1);
    t.__compressionDensity = u;
    let d = new WeakMap(),
        f = (e) => {
            if (!e || 1 !== e.nodeType) return 1;
            if (d.has(e)) return d.get(e);
            let t = e.isConnected ? en(e) : e.style,
                n = 1;
            try {
                t?.perspective && "none" !== t.perspective && (n = 1 / 0);
                let o = t?.transform;
                if (o && "none" !== o) n *= o0(new DOMMatrix(o));
                else if (e.transform?.baseVal?.numberOfItems) {
                    let t = new DOMMatrix();
                    for (let r = 0; r < e.transform.baseVal.numberOfItems; r++) {
                        let n = e.transform.baseVal.getItem(r).matrix;
                        t = t.multiply(new DOMMatrix([n.a, n.b, n.c, n.d, n.e, n.f]));
                    }
                    n *= o0(t);
                }
                if (t?.scale && "none" !== t.scale) {
                    let e = t.scale
                        .trim()
                        .split(/\s+/)
                        .map((e) => parseFloat(e) / (e.endsWith("%") ? 100 : 1));
                    n *= Math.max(...e.map(Math.abs));
                }
                if (
                    (e !== r && t?.zoom && "normal" !== t.zoom && (n *= parseFloat(t.zoom) || 1),
                    "svg" === e.localName && e.viewBox?.baseVal?.width > 0 && e.viewBox.baseVal.height > 0)
                ) {
                    let r = e.viewBox.baseVal,
                        o = (r) => (/^\d+(?:\.\d+)?px$/.test(t?.[r] || "") ? parseFloat(t[r]) : i(e, r)),
                        l = o("width"),
                        a = o("height");
                    n *= l > 0 && a > 0 ? Math.max(l / r.width, a / r.height) : 1 / 0;
                }
            } catch {
                n = 1 / 0;
            }
            return (
                Number.isFinite(n) || (n = 1 / 0),
                e !== r && (n *= f(e.parentElement || e.getRootNode?.().host)),
                d.set(e, n),
                n
            );
        };
    return { density: u, stretch: f };
}
async function o2(e) {
    let t = new Image();
    return (
        (t.decoding = "sync"),
        (t.src = e),
        "function" == typeof t.decode
            ? await t.decode()
            : await new Promise((e, r) => {
                  ((t.onload = () => e()), (t.onerror = r));
              }),
        t
    );
}
var o3 = new Map();
function o9(e, t, r, n) {
    let o = Math.min(1, Math.max(r / e, n / t));
    return !(o > 0) || o >= 0.95 ? 0 : o;
}
var o6 = `self.onmessage = async (e) => {
  const { id, dataURL, blob: given, srcLength, targetW, targetH, resFactor, quality, mime } = e.data
  try {
    const blob = given || await (await fetch(dataURL)).blob()
    const bmp = await createImageBitmap(blob)
    const nw = bmp.width, nh = bmp.height
    if (!nw || !nh) { bmp.close(); self.postMessage({ id, url: null }); return }
    const raw = Math.min(1, Math.max(targetW / nw, targetH / nh))
    if (!(raw > 0) || raw >= 0.95) { bmp.close(); self.postMessage({ id, url: null }); return }
    const factor = raw * resFactor
    const ow = Math.max(1, Math.round(nw * factor))
    const oh = Math.max(1, Math.round(nh * factor))
    const canvas = new OffscreenCanvas(ow, oh)
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(bmp, 0, 0, ow, oh)
    bmp.close()
    const out = await canvas.convertToBlob({ type: mime, quality })
    const url = new FileReaderSync().readAsDataURL(out)
    self.postMessage({ id, url: (url && url.length < srcLength) ? url : null })
  } catch (err) {
    self.postMessage({ id, error: String(err) })
  }
}`,
    o4 = Math.max(1, Math.min(4, (("u" > typeof navigator && navigator.hardwareConcurrency) || 2) - 1)),
    o5 = null,
    o8 = 0,
    o7 = 0,
    ie = new Map();
function it() {
    for (let e of ie.values()) e(void 0);
    if ((ie.clear(), Array.isArray(o5)))
        for (let e of o5)
            try {
                e?.terminate();
            } catch {}
    o5 = !1;
}
async function ir(e, t, r, n) {
    if ("string" != typeof e || !e.startsWith("data:image") || e.startsWith("data:image/svg")) return null;
    ((t = Math.ceil(t)), (r = Math.ceil(r)));
    let i = e.length + ":" + e.slice(0, 64) + e.slice(-64) + ":" + t + "x" + r,
        l = o.compress,
        a = l.get(i);
    if (a?.source === e) return a.result;
    let s = o3.get(i);
    if (s?.source === e && s.cache === l) return s.promise;
    let c = (async () => {
            var o, i;
            let l,
                a,
                s = (l = /^data:([^;,]+)/.exec(e)) ? l[1] : "",
                c = "image/jpeg" === s ? "image/jpeg" : "image/webp" === s ? "image/webp" : "image/png",
                u = (function (e) {
                    let t = (function (e) {
                        let t = e.indexOf(",");
                        if (t < 0 || !/;base64/i.test(e.slice(0, t))) return null;
                        let r = 4 * Math.ceil(1365.3333333333333),
                            n = Math.min(e.length - t - 1, r);
                        try {
                            let r = atob(e.slice(t + 1, t + 1 + n - (n % 4))),
                                o = new Uint8Array(r.length);
                            for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
                            return o;
                        } catch {
                            return null;
                        }
                    })(e);
                    if (!t || t.length < 16) return null;
                    let r = (e) => (t[e] << 8) | t[e + 1];
                    if (137 === t[0] && 80 === t[1] && t.length >= 24)
                        return {
                            w: ((t[16] << 24) | (t[17] << 16) | (t[18] << 8) | t[19]) >>> 0,
                            h: ((t[20] << 24) | (t[21] << 16) | (t[22] << 8) | t[23]) >>> 0,
                        };
                    if (71 === t[0] && 73 === t[1] && 70 === t[2])
                        return { w: t[6] | (t[7] << 8), h: t[8] | (t[9] << 8) };
                    if (82 === t[0] && 73 === t[1] && 87 === t[8] && t.length >= 30) {
                        let e = t[15];
                        if (32 === e && 157 === t[23])
                            return { w: (t[26] | (t[27] << 8)) & 16383, h: (t[28] | (t[29] << 8)) & 16383 };
                        if (76 === e)
                            return {
                                w: (t[21] | ((63 & t[22]) << 8)) + 1,
                                h: (((t[22] >> 6) | (t[23] << 2) | ((15 & t[24]) << 10)) & 16383) + 1,
                            };
                        if (88 === e)
                            return {
                                w: (t[24] | (t[25] << 8) | (t[26] << 16)) + 1,
                                h: (t[27] | (t[28] << 8) | (t[29] << 16)) + 1,
                            };
                    }
                    if (255 === t[0] && 216 === t[1]) {
                        let e = 2;
                        for (; e + 9 < t.length;) {
                            if (255 !== t[e]) {
                                e++;
                                continue;
                            }
                            let n = t[e + 1];
                            if (216 === n || 1 === n || (n >= 208 && n <= 215)) {
                                e += 2;
                                continue;
                            }
                            if (n >= 192 && n <= 207 && 196 !== n && 200 !== n && 204 !== n)
                                return { h: r(e + 5), w: r(e + 7) };
                            let o = r(e + 2);
                            if (o < 2) break;
                            e += 2 + o;
                        }
                    }
                    return null;
                })(e);
            if (u && u.w > 0 && u.h > 0 && !o9(u.w, u.h, t, r)) return null;
            if (e.length >= 65536) {
                let l,
                    a = await ((o = t),
                    (i = r),
                    (l = (function () {
                        if (!1 === o5) return !1;
                        if (null === o5) {
                            if (typeof Worker > "u" || typeof OffscreenCanvas > "u") return (o5 = !1);
                            o5 = [];
                        }
                        let e = o8++ % o4;
                        if (!o5[e]) {
                            let t = (function () {
                                let e,
                                    t = null;
                                try {
                                    ((e = URL.createObjectURL(new Blob([o6], { type: "text/javascript" }))),
                                        ((t = new Worker(e)).onmessage = (e) => {
                                            let t = ie.get(e.data.id);
                                            t &&
                                                (ie.delete(e.data.id), t(e.data.error ? void 0 : (e.data.url ?? null)));
                                        }),
                                        (t.onerror = it));
                                } catch {
                                    t = null;
                                }
                                return (e && URL.revokeObjectURL(e), t);
                            })();
                            if (!t) return (it(), !1);
                            o5[e] = t;
                        }
                        return o5[e];
                    })())
                        ? new Promise((t) => {
                              let r = ++o7,
                                  a = setTimeout(() => {
                                      (ie.delete(r), t(void 0));
                                  }, 5e3);
                              ie.set(r, (e) => {
                                  (clearTimeout(a), t(e));
                              });
                              try {
                                  l.postMessage({
                                      id: r,
                                      dataURL: n ? "" : e,
                                      blob: n,
                                      srcLength: e.length,
                                      targetW: o,
                                      targetH: i,
                                      resFactor: 1,
                                      quality: 0.92,
                                      mime: c,
                                  });
                              } catch {
                                  (clearTimeout(a), ie.delete(r), t(void 0));
                              }
                          })
                        : Promise.resolve(void 0));
                if (void 0 !== a) return a;
            }
            try {
                a = await o2(e);
            } catch {
                return null;
            }
            let d = a.naturalWidth || a.width,
                f = a.naturalHeight || a.height;
            if (!d || !f) return null;
            let h = o9(d, f, t, r);
            if (!h) return null;
            let p = +h,
                m = Math.max(1, Math.round(d * p)),
                g = Math.max(1, Math.round(f * p)),
                y = document.createElement("canvas");
            ((y.width = m), (y.height = g));
            let b = y.getContext("2d");
            if (!b) return null;
            ((b.imageSmoothingEnabled = !0), (b.imageSmoothingQuality = "high"), b.drawImage(a, 0, 0, m, g));
            try {
                let t = y.toDataURL(c, 0.92);
                if ("string" == typeof t && t.startsWith("data:image") && t.length < e.length) return t;
            } catch {}
            return null;
        })(),
        u = { source: e, promise: c, cache: l };
    o3.set(i, u);
    try {
        let t = await c;
        return (
            (function (e, t, r, n) {
                if (r.length + (n?.length || 0) > 0x2000000) return;
                e.set(t, { source: r, result: n });
                let o = 0;
                for (let t of e.values()) o += t.source.length + (t.result?.length || 0);
                for (; o > 0x2000000;) {
                    let t = e.keys().next().value,
                        r = e.get(t);
                    ((o -= r.source.length + (r.result?.length || 0)), e.delete(t));
                }
            })(l, i, e, t),
            t
        );
    } finally {
        o3.get(i) === u && o3.delete(i);
    }
}
async function io(e, t, r = new Map(), n = {}) {
    if (!t.compress) return { count: 0, before: 0, after: 0 };
    let o = Array.from(e.querySelectorAll("img"));
    "IMG" === e.tagName && o.unshift(e);
    let i = 0,
        l = 0,
        a = 0,
        s = async (o) => {
            let s = o.getAttribute("src") || "";
            if (!s.startsWith("data:image") || s.startsWith("data:image/svg")) return;
            let c = parseFloat(o.dataset.snapdomWidth) || parseFloat(o.style.width) || o.width || 0,
                u = parseFloat(o.dataset.snapdomHeight) || parseFloat(o.style.height) || o.height || 0;
            if (!c || !u) return;
            let d = (n.value ||= o1(e, t)),
                f = d.density * d.stretch(r.get(o) || o),
                h = await ir(s, c * f, u * f, o.__snapdomBlob);
            h && (i++, (l += s.length), (a += h.length), o.setAttribute("src", h), oJ(o, "attribute", "src", s, h, t));
        };
    for (let e = 0; e < o.length; e += 6) await Promise.allSettled(o.slice(e, e + 6).map(s));
    return { count: i, before: l, after: a };
}
var ii = /^(cover|contain|(\d+(\.\d+)?%(\s+\d+(\.\d+)?%)?))$/;
async function il(e, t, r = new Map(), n = {}) {
    if (!t.compress) return { count: 0 };
    let o = [];
    for (let t of [e, ...e.querySelectorAll("*")]) {
        let e = t.style && t.style.backgroundImage;
        e && e.includes("data:image") && o.push(t);
    }
    let i = 0,
        l = async (o) => {
            let l,
                a = r.get(o);
            if (!a || !a.isConnected) return;
            try {
                l = getComputedStyle(a);
            } catch {
                return;
            }
            if (
                (l.backgroundRepeat || "repeat")
                    .toLowerCase()
                    .split(",")
                    .some((e) => "no-repeat" !== e.trim())
            )
                return;
            let s = (o.style.backgroundSize || l.backgroundSize || "auto").toLowerCase();
            if (s.split(",").some((e) => !ii.test(e.trim()))) return;
            let { w: c, h: u } = {
                w: a.offsetWidth || a.getBoundingClientRect().width || 0,
                h: a.offsetHeight || a.getBoundingClientRect().height || 0,
            };
            if (!c || !u) return;
            let d = Math.max(1, ...(s.match(/\d+(?:\.\d+)?%/g) || []).map((e) => parseFloat(e) / 100)),
                f = (n.value ||= o1(e, t)),
                h = f.density * f.stretch(a) * d,
                p = c * h,
                m = u * h,
                g = o.style.backgroundImage,
                y = [...g.matchAll(/url\((['"]?)(data:image\/[^)'"]+)\1\)/gi)],
                b = g;
            for (let e of y) {
                let t = e[2];
                if (t.startsWith("data:image/svg")) continue;
                let r = await ir(t, p, m);
                r && ((b = b.split(t).join(r)), i++);
            }
            b !== g &&
                (o.style.setProperty("background-image", b, o.style.getPropertyPriority("background-image")),
                oJ(o, "style", "background-image", g, o.style.backgroundImage, t));
        };
    for (let e = 0; e < o.length; e += 6) await Promise.allSettled(o.slice(e, e + 6).map(l));
    return { count: i };
}
async function ia(e, t, r = new Map(), n = {}) {
    if (!t.compress) return { count: 0 };
    let o = Array.from(e.querySelectorAll("image"));
    "image" === e.localName && o.unshift(e);
    let i = 0,
        l = async (o) => {
            let l =
                o.getAttribute("href") ||
                ("function" == typeof o.getAttributeNS
                    ? o.getAttributeNS("http://www.w3.org/1999/xlink", "href")
                    : null);
            if (!l || !l.startsWith("data:image") || l.startsWith("data:image/svg")) return;
            let a = o.getAttribute("width") || "",
                s = o.getAttribute("height") || "";
            if (a.includes("%") || s.includes("%")) return;
            let c = r.get(o),
                u = c ? en(c) : o.style,
                d = (e, t) => {
                    if (/^\d+(?:\.\d+)?px$/.test(u?.[e] || "")) return parseFloat(u[e]);
                    if (/^\d+(?:\.\d+)?(?:px)?$/.test(t.trim())) return parseFloat(t);
                    try {
                        return c?.[e]?.baseVal?.value || 0;
                    } catch {
                        return 0;
                    }
                },
                f = d("width", a),
                h = d("height", s);
            if (!f || !h) return;
            let p = (n.value ||= o1(e, t)),
                m = p.density * p.stretch(c || o),
                g = await ir(l, f * m, h * m);
            g &&
                (o.setAttribute("href", g),
                oJ(o, "attribute", "href", l, g, t),
                o.hasAttribute("xlink:href") &&
                    (o.setAttributeNS(oX, "xlink:href", g), oJ(o, "attribute", "xlink:href", l, g, t)),
                i++);
        };
    for (let e = 0; e < o.length; e += 6) await Promise.allSettled(o.slice(e, e + 6).map(l));
    return { count: i };
}
async function is(e, t, r) {
    if (!t.compress) return;
    let n = {};
    (await io(e, t, r, n), await il(e, t, r, n), await ia(e, t, r, n));
}
async function ic(e, t) {
    var r, n;
    let i,
        l,
        a,
        s,
        c,
        u,
        d,
        f,
        h,
        { clipWindow: m, outerTransforms: g, outerShadows: y, rootTransform2D: b, fontsCSS: w } = t,
        x = e.options;
    if (e !== x) {
        let { options: t, ...r } = e;
        Object.defineProperty((e = Object.assign(x, r)), "options", { value: e, configurable: !0 });
    }
    ((a = (l = ((n = (r = e).clone),
    (i = new Set()),
    n.nodeType !== Node.ELEMENT_NODE && n.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        ? []
        : (n.tagName && i.add(n.tagName.toLowerCase()),
          "function" == typeof n.querySelectorAll &&
              n.querySelectorAll("*").forEach((e) => i.add(e.tagName.toLowerCase())),
          Array.from(i))).sort()).join(",")),
        (s = t5(r.element)),
        (c = o.baseStyle.get(a)) && c.universe === s
            ? (u = c.css)
            : ((u = (function (e, t = null) {
                  let r = new Map();
                  for (let n of e) {
                      let e = Q(n);
                      if (!e) continue;
                      let o = (t ? Object.entries(e).filter(([e]) => t.has(e)) : Object.entries(e))
                              .filter(([t]) => !Z(t, e))
                              .map(([e, t]) => `${e}:${t};`)
                              .sort(),
                          i = o.join("");
                      i && (r.has(i) || r.set(i, { tagList: [], declarations: o }), r.get(i).tagList.push(n));
                  }
                  let n = [...r.values()],
                      o = null;
                  for (let { declarations: e } of n) {
                      let t = new Set(e);
                      if (!o) {
                          o = t;
                          continue;
                      }
                      for (let e of o) t.has(e) || o.delete(e);
                  }
                  o ??= new Set();
                  let i = "";
                  if (o.size && n.length > 1) {
                      let e = n.flatMap((e) => e.tagList);
                      i += `${e.join(",")} { ${[...o].join("")} }
`;
                  }
                  for (let { tagList: e, declarations: t } of n) {
                      let r = n.length > 1 ? t.filter((e) => !o.has(e)) : t;
                      if (!r.length) continue;
                      let l = r.join("");
                      i += `${e.join(",")} { ${l} }
`;
                  }
                  return i;
              })(l, s)),
              o.baseStyle.set(a, { universe: s, css: u })),
        (d = (function (e) {
            if (!e || !e.styleSheets) return "";
            let t = (function (e) {
                    let t = "";
                    for (let r of e.styleSheets) {
                        let e = -1;
                        try {
                            e = r.cssRules ? r.cssRules.length : -1;
                        } catch {}
                        t += (r.href || "inline") + ":" + e + "|";
                    }
                    return t;
                })(e),
                r = of.get(e);
            if (r && r.fp === t) return r.css;
            let n = new Set(),
                o = "";
            for (let t of Array.from(e.styleSheets))
                try {
                    let e = t.cssRules;
                    e &&
                        (o += (function e(t, r = new Set()) {
                            let n = "";
                            if (!t) return n;
                            for (let o = 0; o < t.length; o++) {
                                let i = t[o];
                                try {
                                    if (i.type === CSSRule.IMPORT_RULE && i.styleSheet) {
                                        n += e(i.styleSheet.cssRules, r);
                                        continue;
                                    }
                                    if (i.type === CSSRule.MEDIA_RULE && i.cssRules) {
                                        let t = e(i.cssRules, r);
                                        t && (n += `@media ${i.conditionText}{${t}}`);
                                        continue;
                                    }
                                    if (i.type === CSSRule.STYLE_RULE) {
                                        let e = i.selectorText || "";
                                        if (od.test(e)) {
                                            let e = i.cssText;
                                            e && !r.has(e) && (r.add(e), (n += e));
                                        }
                                    }
                                } catch {}
                            }
                            return n;
                        })(e, n));
                } catch {}
            return (of.set(e, { fp: t, css: o }), o);
        })(r.element?.ownerDocument || document)),
        (r.fontsCSS = w),
        (r.baseCSS = u),
        (r.scrollbarCSS = d),
        await oU("beforeRender", e));
    let v = en(e.element),
        S = e.element.getBoundingClientRect(),
        M = Math.max(1, ou(e.element.offsetWidth || parseFloat(v.width) || S.width || 1)),
        k = Math.max(1, ou(e.element.offsetHeight || parseFloat(v.height) || S.height || 1)),
        C = e.element.ownerDocument || document;
    if (!m && (e.element === C.body || e.element === C.documentElement) && !e.__pinned) {
        let t = Math.max(e.element.scrollHeight || 0, C.documentElement?.scrollHeight || 0, C.body?.scrollHeight || 0),
            r = Math.max(e.element.scrollWidth || 0, C.documentElement?.scrollWidth || 0, C.body?.scrollWidth || 0);
        (t > 0 && (k = Math.max(k, ou(t))), r > 0 && (M = Math.max(M, ou(r))));
        try {
            let n =
                    (e.scrollbarCSS || "").length +
                    (e.baseCSS || "").length +
                    (e.fontsCSS || "").length +
                    (e.classCSS || "").length,
                i = o.measureHints.get(e.element);
            if (i && i.cssLen === n && i.w0 === M && i.docH === t && i.docW === r)
                (i.csh > 0 && (k = Math.max(k, ou(i.csh))), i.csw > 0 && (M = Math.max(M, ou(i.csw))));
            else {
                let i = C.createElement("div");
                (G(i),
                    (i.style.cssText =
                        "position:absolute!important;left:-9999px!important;top:0!important;width:" +
                        M +
                        "px!important;overflow:visible!important;visibility:hidden!important;"));
                let l = i.attachShadow({ mode: "open" }),
                    a = C.createElement("style");
                ((a.textContent =
                    (e.scrollbarCSS || "") +
                    e.baseCSS +
                    "svg{overflow:visible;} foreignObject{overflow:visible;}" +
                    e.classCSS),
                    l.appendChild(a),
                    l.appendChild(e.clone.cloneNode(!0)),
                    C.body.appendChild(i));
                let s = i.scrollHeight,
                    c = i.scrollWidth;
                (C.body.removeChild(i),
                    o.measureHints.set(e.element, { cssLen: n, w0: M, docH: t, docW: r, csh: s, csw: c }),
                    s > 0 && (k = Math.max(k, ou(s))),
                    c > 0 && (M = Math.max(M, ou(c))));
            }
        } catch {}
    }
    if (
        e.options?.excludeMode === "remove" ||
        ("function" == typeof e.options?.filter && "remove" === e.options.filterMode)
    ) {
        let t = oc(e.element, e.options),
            r = oc(e.element, {}),
            n = Math.max(2, 0.15 * k);
        Number.isFinite(r) && r >= k - n && Number.isFinite(t) && t > 0 && (k = Math.max(1, Math.min(k, ou(t + 1))));
    }
    if (e.options?.reconcile)
        try {
            let t =
                (e.scrollbarCSS || "") +
                e.baseCSS +
                "svg{overflow:visible;} foreignObject{overflow:visible;}" +
                e.classCSS;
            !(function (e, t, r, n, o, i) {
                let l = e.ownerDocument || document,
                    a = e.getBoundingClientRect(),
                    s = o > 0 && a.width > 0 ? a.width / o : 1,
                    c = i > 0 && a.height > 0 ? a.height / i : 1;
                if (Math.abs(s - c) > 0.02) return;
                let u = l.createElement("div");
                (G(u),
                    (u.style.cssText =
                        "position:absolute!important;left:-9999px!important;top:0!important;width:" +
                        o +
                        "px!important;overflow:visible!important;visibility:hidden!important;"));
                let d = u.attachShadow({ mode: "open" }),
                    f = l.createElement("style");
                ((f.textContent = r), d.appendChild(f));
                let h = t.cloneNode(!0);
                (d.appendChild(h), l.body.appendChild(u));
                let m = 0,
                    g = (e, t, r) => {
                        let n = en(e),
                            o = "border-box" === n.boxSizing,
                            i = (e, t, ...r) => {
                                let n = parseFloat(e);
                                if (!Number.isFinite(n)) return t;
                                let i = n + (o ? 0 : r.reduce((e, t) => e + (parseFloat(t) || 0), 0));
                                return 0.51 >= Math.abs(i - t) ? i : t;
                            };
                        return {
                            width: i(n.width, t, n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth),
                            height: i(
                                n.height,
                                r,
                                n.paddingTop,
                                n.paddingBottom,
                                n.borderTopWidth,
                                n.borderBottomWidth,
                            ),
                        };
                    };
                try {
                    let e = h.getBoundingClientRect(),
                        r = h.offsetWidth || o,
                        l = h.offsetHeight || i,
                        a = r > 0 && e.width > 0 ? e.width / r : 1,
                        u = l > 0 && e.height > 0 ? e.height / l : 1,
                        d = (e, t, r = !1) => {
                            let o = e.children,
                                i = t.children,
                                l = Math.min(o.length, i.length);
                            for (let e = 0; e < l; e++) {
                                let t = o[e],
                                    l = i[e],
                                    f = n.get(t),
                                    h = r || n8.has(t);
                                if (f?.nodeType === 1 && p(t) && t.style && f.isConnected) {
                                    let e = f.getBoundingClientRect();
                                    if (e.width > 0 && e.height > 0) {
                                        let r = l.getBoundingClientRect(),
                                            n = e.width / s,
                                            o = e.height / c,
                                            i = r.width,
                                            d = r.height,
                                            p = f.offsetWidth || n,
                                            y = f.offsetHeight || o,
                                            b = l.offsetWidth || i,
                                            w = l.offsetHeight || d,
                                            x =
                                                Math.abs(n - p) > 0.75 ||
                                                Math.abs(o - y) > 0.75 ||
                                                Math.abs(i - b) > 0.75 ||
                                                Math.abs(d - w) > 0.75;
                                        if (h) {
                                            let e = g(l, b, w);
                                            ((n = i > 0 ? (n * a * e.width) / i : n),
                                                (o = d > 0 ? (o * u * e.height) / d : o),
                                                (i = e.width),
                                                (d = e.height));
                                        } else if (x) {
                                            let e = g(f, p, y),
                                                t = g(l, b, w);
                                            ((n = e.width), (o = e.height), (i = t.width), (d = t.height));
                                        }
                                        let v = i - n,
                                            S = d - o;
                                        (Math.abs(v) > 0.75 || Math.abs(S) > 0.75) &&
                                            ((t.style.boxSizing = "border-box"),
                                            (t.style.width = `${ou(n)}px`),
                                            (t.style.height = `${ou(o)}px`),
                                            m++);
                                    }
                                }
                                d(t, l, h);
                            }
                        };
                    d(t, h);
                } finally {
                    u.remove();
                }
            })(e.element, e.clone, t, e.nodeMap, M, k);
        } catch (e) {
            console.warn("[SnapDOM] reconcile couldn't run; captured without it.", e);
        }
    let $ = (e, t = NaN) => {
            let r = "string" == typeof e ? parseFloat(e) : e;
            return Number.isFinite(r) ? r : t;
        },
        A = $(e.options.width),
        R = $(e.options.height),
        E = m ? ou(m.width) : M,
        F = m ? ou(m.height) : k,
        N = E,
        _ = F,
        P = Number.isFinite(A),
        T = Number.isFinite(R),
        L = F > 0 ? E / F : 1;
    P && T
        ? ((N = Math.max(1, ou(A))), (_ = Math.max(1, ou(R))))
        : P
          ? ((N = Math.max(1, ou(A))), (_ = Math.max(1, ou(N / (L || 1)))))
          : T && ((_ = Math.max(1, ou(R))), (N = Math.max(1, ou(_ * (L || 1)))));
    let W = 0,
        D = 0,
        O = M,
        I = k;
    if (m) {
        let t = 0,
            r = 0;
        if (iu(e.element)) {
            let n = null;
            if (!g && b && Number.isFinite(b.a)) n = { a: b.a, b: b.b || 0, c: b.c || 0, d: b.d || 1, e: 0, f: 0 };
            else {
                let t = n6(e.element),
                    r = ot(v.transform && "none" !== v.transform ? v.transform : "", t);
                r && r.is2D && (n = { a: r.a, b: r.b, c: r.c, d: r.d, e: 0, f: 0 });
            }
            if (n && (1 !== n.a || 0 !== n.b || 0 !== n.c || 1 !== n.d)) {
                let { ox: e, oy: o } = n9(v, M, k),
                    i = n3(M, k, n, e, o);
                ((t = i.minX), (r = i.minY));
            }
        }
        ((W = ou(m.x + t)), (D = ou(m.y + r)), (O = ou(W + m.width)), (I = ou(D + m.height)));
    } else if (!g && b && Number.isFinite(b.a)) {
        let e = n3(M, k, { a: b.a, b: b.b || 0, c: b.c || 0, d: b.d || 1, e: 0, f: 0 }, 0, 0);
        ((W = ou(e.minX)), (D = ou(e.minY)), (O = ou(e.maxX)), (I = ou(e.maxY)));
    } else if (g && iu(e.element)) {
        let t = v.transform && "none" !== v.transform ? v.transform : "",
            r = n6(e.element),
            n = n5({
                baseTransform: t,
                rotate: r.rotate || "0deg",
                scale: r.scale,
                translate: r.translate,
                width: M,
                height: k,
            }),
            { ox: o, oy: i } = n9(v, M, k),
            l = n.is2D ? n : new DOMMatrix(n.toString()),
            a = n3(M, k, { a: l.a, b: l.b, c: l.c, d: l.d, e: 0, f: 0 }, o, i);
        ((W = ou(a.minX)), (D = ou(a.minY)), (O = ou(a.maxX)), (I = ou(a.maxY)));
    }
    let j = nJ(v),
        z = nQ(v),
        U = nZ(v),
        B = n0(v),
        V = n1(v),
        H = S.width > 0 ? (O - W) / S.width : 1,
        q = S.height > 0 ? (I - D) / S.height : 1,
        Y =
            "subtree" !== y || m
                ? { top: 0, right: 0, bottom: 0, left: 0 }
                : (function (e, t, r, n = 1, o = 1) {
                      let i = 0,
                          l = 0,
                          a = 0,
                          s = 0,
                          c = n2(r.get(e) || en(e));
                      if (c.x && c.y) return { top: 0, right: 0, bottom: 0, left: 0 };
                      let u = e.getBoundingClientRect();
                      for (let d of t.values()) {
                          if (d === e || 1 !== d.nodeType || d.ownerDocument !== e.ownerDocument) continue;
                          let t = r.get(d);
                          if (
                              !t ||
                              !(
                                  (t.boxShadow && "none" !== t.boxShadow) ||
                                  (t.textShadow && "none" !== t.textShadow) ||
                                  "none" !== (t.outlineStyle || "none") ||
                                  (t.filter && "none" !== t.filter) ||
                                  (t.webkitFilter && "none" !== t.webkitFilter)
                              )
                          )
                              continue;
                          let f = (function (e) {
                              let t = nJ(e),
                                  r = nQ(e),
                                  n = nZ(e),
                                  o = n0(e),
                                  i = n1(e);
                              return {
                                  top: Math.max(t.top, r.top) + n.top + o.top + i.bleed.top,
                                  right: Math.max(t.right, r.right) + n.right + o.right + i.bleed.right,
                                  bottom: Math.max(t.bottom, r.bottom) + n.bottom + o.bottom + i.bleed.bottom,
                                  left: Math.max(t.left, r.left) + n.left + o.left + i.bleed.left,
                              };
                          })(t);
                          if (!(f.top || f.right || f.bottom || f.left)) continue;
                          let h = d.getBoundingClientRect(),
                              p = {
                                  left: h.left - f.left / n,
                                  top: h.top - f.top / o,
                                  right: h.right + f.right / n,
                                  bottom: h.bottom + f.bottom / o,
                              };
                          for (let t = d.parentElement; t; t = t.parentElement) {
                              let n = n2(r.get(t) || en(t));
                              if (n.x || n.y) {
                                  let e = t.getBoundingClientRect();
                                  (n.x && ((p.left = Math.max(p.left, e.left)), (p.right = Math.min(p.right, e.right))),
                                      n.y &&
                                          ((p.top = Math.max(p.top, e.top)),
                                          (p.bottom = Math.min(p.bottom, e.bottom))));
                              }
                              if (t === e) break;
                          }
                          (c.x ||
                              ((s = Math.max(s, (u.left - p.left) * n)), (l = Math.max(l, (p.right - u.right) * n))),
                              c.y ||
                                  ((i = Math.max(i, (u.top - p.top) * o)),
                                  (a = Math.max(a, (p.bottom - u.bottom) * o))));
                      }
                      return {
                          top: Math.max(0, Math.ceil(i)),
                          right: Math.max(0, Math.ceil(l)),
                          bottom: Math.max(0, Math.ceil(a)),
                          left: Math.max(0, Math.ceil(s)),
                      };
                  })(e.element, e.nodeMap, e.styleCache, H, q),
        J = m
            ? { top: 0, right: 0, bottom: 0, left: 0 }
            : y
              ? {
                    top: ou(Math.max(j.top, z.top, Y.top) + U.top + B.top + V.bleed.top),
                    right: ou(Math.max(j.right, z.right, Y.right) + U.right + B.right + V.bleed.right),
                    bottom: ou(Math.max(j.bottom, z.bottom, Y.bottom) + U.bottom + B.bottom + V.bleed.bottom),
                    left: ou(Math.max(j.left, z.left, Y.left) + U.left + B.left + V.bleed.left),
                }
              : { top: U.top, right: U.right, bottom: U.bottom, left: U.left };
    ((W = ou(W - J.left)), (D = ou(D - J.top)), (O = ou(O + J.right)), (I = ou(I + J.bottom)));
    let K = Math.max(1, ou(O - W)),
        ee = Math.max(1, ou(I - D)),
        et = "http://www.w3.org/2000/svg",
        er = ou(2 * !!iu(e.element) + +!g),
        eo = Math.ceil(K + 2 * er),
        ei = Math.ceil(ee + 2 * er),
        el = ou(-(ou(W) - er)),
        ea = ou(-(ou(D) - er)),
        es = Math.max(0, el),
        ec = Math.max(0, ea),
        eu = ou(eo - Math.min(0, el)),
        ed = ou(ei - Math.min(0, ea)),
        ef = C.defaultView || window,
        eh = (!ek() && CSS.supports("zoom", "2") && ef.devicePixelRatio) || 1;
    x.__layoutZoom = eh;
    let ep = document.createElementNS(et, "foreignObject");
    (ep.setAttribute("x", String(Math.min(0, el) * eh)),
        ep.setAttribute("y", String(Math.min(0, ea) * eh)),
        ep.setAttribute("width", String(eu * eh)),
        ep.setAttribute("height", String(ed * eh)),
        (ep.style.overflow = "visible"));
    let em = document.createElement("style");
    ((em.textContent =
        (e.scrollbarCSS || "") +
        e.baseCSS +
        e.fontsCSS +
        "svg{overflow:visible;} foreignObject{overflow:visible;} foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;}" +
        e.classCSS),
        ep.appendChild(em));
    let eg = document.createElement("div");
    (eg.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
        (eg.style.cssText =
            `all:initial;box-sizing:border-box;display:block;overflow:visible;width:${eu}px;height:${ed}px` +
            (0 !== es || 0 !== ec ? `;padding:${ec}px 0 0 ${es}px !important` : "") +
            (1 !== eh ? `;zoom:${eh} !important` : "")),
        eg.appendChild(e.clone),
        ep.appendChild(eg));
    let ey = new XMLSerializer().serializeToString(ep),
        eb = P || T;
    Object.defineProperty(x, "meta", {
        value: Object.freeze({
            w0: E,
            h0: F,
            vbW: eo,
            vbH: ei,
            targetW: N,
            targetH: _,
            contentX: ou(el + (m ? W : 0)),
            contentY: ou(ea + (m ? D : 0)),
            clip: m ? Object.freeze({ x: ou(W), y: ou(D), width: E, height: F }) : null,
        }),
        enumerable: !0,
        writable: !1,
        configurable: !0,
    });
    let ew = !eb || ek() ? eo : P ? N : ou((_ / ei) * eo),
        ex = !eb || ek() ? ei : T ? _ : ou((N / eo) * ei),
        ev = parseFloat(en(C.documentElement)?.fontSize) || 16,
        eS = 1 !== eh;
    ((h =
        `<svg xmlns="${et}" width="${ew}" height="${ex}" viewBox="0 0 ${eo} ${ei}" font-size="${ev}px">${eS ? `<g transform="scale(${1 / eh})">` : ""}` +
        (function (e, t) {
            if (ek()) return e;
            let r = e.indexOf("</style>");
            if (-1 === r) return e;
            let n = /<style\b[^>]*>[\s\S]*?<\/style>/g,
                o = [],
                i = r,
                l;
            for (n.lastIndex = r; (l = n.exec(e));)
                (o.push({ text: e.slice(i, l.index), intern: !0 }),
                    o.push({ text: l[0], intern: !1 }),
                    (i = n.lastIndex));
            o.push({ text: e.slice(i), intern: !0 });
            let a = new Map(),
                s = / style="([^"]*)"/g,
                c;
            for (let e of o)
                if (e.intern) for (s.lastIndex = 0; (c = s.exec(e.text));) a.set(c[1], (a.get(c[1]) || 0) + 1);
            let u = 0;
            for (let [e, t] of a) t > 1 && (u += (t - 1) * e.length);
            if (u < 2048 || e.includes(" data-sdi=")) return e;
            let d = (function (e, t, r) {
                let n = new Set();
                if (!t && !r) return n;
                if (!e || e.querySelector("[data-sdi]")) return null;
                let o = (e) => {
                    let t = e.getAttribute("style");
                    t && n.add(t);
                };
                if ((r && e.querySelectorAll("[data-snapdom-asset][style]").forEach(o), t))
                    try {
                        let t = (r) => {
                            for (let n of r) {
                                if (n.type === CSSRule.IMPORT_RULE || n.type === CSSRule.NAMESPACE_RULE)
                                    throw Error("External or namespaced CSS");
                                if (n.selectorText) {
                                    if (/\[\s*style\b|data-sdi|\[[^\]]*\\|&/i.test(n.selectorText))
                                        throw Error("Attribute-dependent or nested CSS");
                                    e.querySelectorAll(n.selectorText).forEach(o);
                                }
                                n.cssRules && t(n.cssRules);
                            }
                        };
                        for (let r of [...e.querySelectorAll("style")].slice(1)) {
                            let e = r.textContent || "";
                            if (/@import\b/i.test(e)) return null;
                            let n = new CSSStyleSheet();
                            (n.replaceSync(e), t(n.cssRules));
                        }
                    } catch {
                        return null;
                    }
                let i = new Set(),
                    l = document.createElement("div"),
                    a = new XMLSerializer();
                for (let e of n) {
                    l.setAttribute("style", e);
                    let t = a.serializeToString(l).match(/ style="([^"]*)"/);
                    t && i.add(t[1]);
                }
                return i;
            })(
                t,
                o.some((e) => !e.intern),
                e.includes("data-snapdom-asset"),
            );
            if (null === d) return e;
            let f = new Map(),
                h = 0,
                p = [],
                m = (e, t) => {
                    if (2 > (a.get(t) || 0) || d.has(t)) return e;
                    let r = f.get(t);
                    return (
                        void 0 === r &&
                            ((r = "i" + (h++).toString(36)), f.set(t, r), p.push(`[data-sdi="${r}"]{${t}}`)),
                        ` data-sdi="${r}"`
                    );
                },
                g = "";
            for (let e of o) g += e.intern ? e.text.replace(s, m) : e.text;
            return e.slice(0, r) + p.join("") + g;
        })(ey, ep) +
        (eS ? "</g></svg>" : "</svg>")),
        (f = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(h)}`),
        (e.svgString = h),
        (e.dataURL = f),
        (x.__artifacts = {
            classCSS: e.classCSS || "",
            fontsCSS: e.fontsCSS || "",
            baseCSS: e.baseCSS || "",
            scrollbarCSS: e.scrollbarCSS || "",
        }),
        await oU("afterRender", e),
        (e.clone = e.nodeMap = e.styleCache = e.svgString = null));
    let eM = [...document.querySelectorAll("#snapdom-sandbox")].find(X);
    return (eM && "absolute" === eM.style.position && eM.remove(), e.dataURL);
}
function iu(e) {
    return (function (e) {
        let t = en(e),
            r = t.transform || "none";
        if ("none" !== r && !/^matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*,\s*0\s*,\s*0\s*\)$/i.test(r)) return !0;
        let n = t.rotate && "none" !== t.rotate && "0deg" !== t.rotate,
            o = t.scale && "none" !== t.scale && "1" !== t.scale,
            i = t.translate && "none" !== t.translate && "0px 0px" !== t.translate;
        return !!(n || o || i);
    })(e);
}
async function id(e, t) {
    if (!e) throw Error("[SnapDOM] The element cannot be null or undefined.");
    ((t.__session = oE(t.cache)),
        delete t.__compressedAssets,
        delete t.__compressedSnapshot,
        delete t.__compressionDensity,
        (t.__resolveNodeHooks = (function (e) {
            let t = Array.isArray(e.plugins) ? e.plugins : oI.slice(),
                r = [];
            for (let e of t) {
                let t = oj(e);
                t && "function" == typeof t.resolveNode && r.push(t.resolveNode.bind(t));
            }
            return r.length ? r : null;
        })(t)),
        (t.element = e),
        Object.defineProperty(t, "options", { value: t, configurable: !0 }));
    let r,
        n,
        i,
        l,
        a,
        s,
        c,
        u = "",
        d = null,
        f = t.needs || oD,
        h = t.format,
        p = t.type;
    await oU("beforeSnap", t);
    let g = t.format !== h && /^(?:png|jpe?g|webp|svg)$/i.test(t.format),
        y = t.type !== p && /^(?:png|jpe?g|webp|svg)$/i.test(t.type);
    if (g || y) {
        let e = String(g ? t.format : t.type).toLowerCase();
        ((t.format = "jpg" === e ? "jpeg" : e),
            (t.type = t.format),
            (t.__explicitFormat = t.format),
            /^(?:jpeg|webp)$/.test(t.format) &&
                (null == t.backgroundColor || "transparent" === t.backgroundColor) &&
                (t.backgroundColor = "#ffffff"));
    }
    await oU("beforeClone", t);
    let b = !1 !== t.outerTransforms,
        w = "subtree" === t.outerShadows ? "subtree" : !!t.outerShadows,
        x = t.clip ? n7(t.element, t.clip) : null;
    if (void 0 === t.__styleShare)
        try {
            t.__styleShare =
                (function (e) {
                    try {
                        let t = t4(e.ownerDocument || document).shareGate;
                        if (null === t) return !1;
                        if (!t.length) return !0;
                        let r = new Set(),
                            n = (e) => {
                                (r.add("t" + e.localName), e.id && r.add("i" + e.id));
                                let t = e.classList;
                                for (let e = 0; e < t.length; e++) r.add("c" + t[e]);
                            };
                        for (let t of (n(e), e.querySelectorAll("*"))) n(t);
                        let o = [];
                        for (let { sel: e, key: n } of t) (null === n || r.has(n)) && o.push(e);
                        if (!o.length) return !0;
                        let i = o.join(",");
                        return !e.matches(i) && null === e.querySelector(i);
                    } catch {
                        return !1;
                    }
                })(t.element) &&
                ("function" != typeof t.element.getAnimations || 0 === t.element.getAnimations({ subtree: !0 }).length);
        } catch {
            t.__styleShare = !1;
        }
    let v = (function (e) {
        if (!1 !== e && "auto" !== e) return null;
        let t = performance.now() + ("auto" === e ? eA : e$),
            r = null,
            n = {
                yielded: !1,
                due: () => performance.now() >= t,
                pause: () =>
                    r ||
                    (r = new Promise((e) => {
                        let o = new MessageChannel();
                        ((o.port1.onmessage = () => {
                            ((r = null), (n.yielded = !0), (t = performance.now() + e$), e());
                        }),
                            o.port2.postMessage(0));
                    })),
            };
        return n;
    })(t.fast);
    for (;;) {
        t.__slicer = v;
        let e = oF(t.element, x);
        try {
            (({
                clone: r,
                classCSS: n,
                classPrefixCSS: i,
                styleCache: l,
                nodeMap: a,
                reconcileRisk: s,
                clipWindow: c,
            } = await op(t.element, t.options)),
                s > 0 &&
                    !t.reconcile &&
                    (eF(
                        t.__session,
                        "reconcile-risk",
                        "text in inline/table-cell elements kept natural width and may re-wrap; pass { reconcile: true } for pixel-exact layout",
                    ),
                    o.warnedReconcile ||
                        ((o.warnedReconcile = !0),
                        console.warn(
                            "[SnapDOM] Some text may wrap differently in the capture. Pass { reconcile: true } to fix it (about 2x slower).",
                        ))),
                !b &&
                    r &&
                    (d = (function (e, t) {
                        if (!e || !t || !t.style) return null;
                        let r = getComputedStyle(e);
                        try {
                            t.style.transformOrigin = "0 0";
                        } catch {}
                        try {
                            ("translate" in t.style && (t.style.translate = "none"),
                                "rotate" in t.style && (t.style.rotate = "none"));
                        } catch {}
                        let n = r.transform || "none";
                        if (!n || "none" === n) {
                            let r = null;
                            try {
                                r = n6(e).scale;
                            } catch {}
                            try {
                                t.style.transform = "none";
                            } catch {}
                            if (!r) return { a: 1, b: 0, c: 0, d: 1 };
                            let n = n5({ scale: r });
                            return { a: n.a, b: n.b, c: n.c, d: n.d };
                        }
                        function o(e, t, r, n) {
                            let o = Math.sqrt(e * e + t * t) || 0,
                                i = 0,
                                l = 0;
                            if (o > 0) {
                                let a = e / o,
                                    s = t / o;
                                i = a * r + s * n;
                                let c = r - a * i,
                                    u = n - s * i;
                                (l = Math.sqrt(c * c + u * u) || 0) > 0 ? (i /= l) : (i = 0);
                            }
                            return { a: o, b: 0, c: i * l, d: l };
                        }
                        let i = (t) => {
                                let r = n6(e).scale;
                                if (!r) return t;
                                let n = n5({ scale: r, baseTransform: `matrix(${t.a},${t.b},${t.c},${t.d},0,0)` });
                                return { a: n.a, b: n.b, c: n.c, d: n.d };
                            },
                            l = n.match(/^matrix\(\s*([^)]+)\)$/i);
                        if (l) {
                            let e = l[1].split(",").map((e) => parseFloat(e.trim()));
                            if (6 === e.length && e.every(Number.isFinite)) {
                                let [r, n, l, a] = e,
                                    s = o(r, n, l, a);
                                try {
                                    t.style.transform = `matrix(${s.a}, ${s.b}, ${s.c}, ${s.d}, 0, 0)`;
                                } catch {}
                                return i(s);
                            }
                        }
                        let a = n.match(/^matrix3d\(\s*([^)]+)\)$/i);
                        if (a) {
                            let e = a[1].split(",").map((e) => parseFloat(e.trim()));
                            if (16 === e.length && e.every(Number.isFinite)) {
                                let r = o(e[0], e[1], e[4], e[5]);
                                try {
                                    t.style.transform = `matrix(${r.a}, ${r.b}, ${r.c}, ${r.d}, 0, 0)`;
                                } catch {}
                                return i(r);
                            }
                        }
                        try {
                            let e = new DOMMatrix(n),
                                r = o(e.a, e.b, e.c, e.d);
                            try {
                                t.style.transform = `matrix(${r.a}, ${r.b}, ${r.c}, ${r.d}, 0, 0)`;
                            } catch {}
                            return i(r);
                        } catch {
                            return null;
                        }
                    })(t.element, r)),
                !w &&
                    r &&
                    (function (e, t, r = {}) {
                        if (!e || !t || !t.style) return;
                        let n = getComputedStyle(e);
                        try {
                            t.style.boxShadow = "none";
                        } catch (e) {
                            eE(r, "Couldn't remove the root box-shadow.", e);
                        }
                        try {
                            t.style.textShadow = "none";
                        } catch (e) {
                            eE(r, "Couldn't remove the root text-shadow.", e);
                        }
                        try {
                            t.style.outline = "none";
                        } catch (e) {
                            eE(r, "Couldn't remove the root outline.", e);
                        }
                        let o = (n.filter || "")
                            .replace(/\bdrop-shadow\((?:[^()]|\([^()]*\))*\)\s*/gi, "")
                            .trim()
                            .replace(/\s+/g, " ");
                        try {
                            t.style.filter = o.length ? o : "none";
                        } catch (e) {
                            eE(r, "Couldn't remove the root drop-shadow filter.", e);
                        }
                    })(t.element, r, t.options),
                r &&
                    ((function (e, t, r) {
                        if (!e || !t || !t.style) return;
                        let n = getComputedStyle(e);
                        if (!or(n))
                            for (let o of ["top", "bottom"]) {
                                let i = "top" === o ? "Top" : "Bottom";
                                if (
                                    (parseFloat(n[`border${i}Width`]) || 0) > 0 ||
                                    (parseFloat(n[`padding${i}`]) || 0) > 0
                                )
                                    continue;
                                let l = e,
                                    a = t;
                                for (; l && a;) {
                                    let e = (function (e, t) {
                                        let r = Array.from(e.childNodes);
                                        for (let e of "top" === t ? r : r.reverse()) {
                                            if (e.nodeType === Node.TEXT_NODE) {
                                                if (/\S/.test(e.textContent || "")) return null;
                                                continue;
                                            }
                                            if (e.nodeType !== Node.ELEMENT_NODE) continue;
                                            let t = getComputedStyle(e),
                                                r = String(t.display || "");
                                            if (
                                                "none" !== r &&
                                                "contents" !== r &&
                                                "absolute" !== t.position &&
                                                "fixed" !== t.position
                                            )
                                                return (t.float && "none" !== t.float) || r.startsWith("inline")
                                                    ? null
                                                    : e;
                                        }
                                        return null;
                                    })(l, o);
                                    if (!e) break;
                                    let t = r
                                            ? Array.from(a.children).find((t) => r.get(t) === e) || null
                                            : a.children[Array.from(l.children).indexOf(e)] || null,
                                        n = getComputedStyle(e),
                                        s = parseFloat(n[`margin${i}`]) || 0;
                                    if (
                                        (t && t.style && s > 0 && (t.style[`margin${i}`] = "0px"),
                                        or(n) ||
                                            (parseFloat(n[`border${i}Width`]) || 0) > 0 ||
                                            (parseFloat(n[`padding${i}`]) || 0) > 0)
                                    )
                                        break;
                                    ((l = e), (a = t));
                                }
                            }
                    })(t.element, r, a),
                    (function (e, t) {
                        if (!e || !t || !t.style) return;
                        let r = 1;
                        try {
                            r = parseFloat(getComputedStyle(e).zoom);
                        } catch {
                            return;
                        }
                        if (!(!t.style.getPropertyValue("zoom") && (!Number.isFinite(r) || 1 === r)))
                            try {
                                t.style.setProperty("zoom", "1", "important");
                            } catch {}
                    })(t.element, r)));
        } finally {
            e();
        }
        if (!v?.yielded || !t.__tornSinceStart?.()) break;
        ((v = null), (t.__session = oE(t.cache)));
    }
    if (
        ((t.__slicer = null),
        (t.clone = r),
        (t.classCSS = n),
        (t.styleCache = l),
        (t.nodeMap = a),
        await oU("afterClone", t),
        !oO(f, "render"))
    )
        return null;
    if (
        (v?.due() && (await v.pause()),
        oa(t.clone),
        t.options?.excludeMode === "remove" ||
            ("function" == typeof t.options?.filter && "remove" === t.options.filterMode))
    )
        try {
            !(function (e, t, r = new Map(), n = null) {
                !(function e(t, o) {
                    if (t?.nodeType !== 1 || o?.nodeType !== 1) return;
                    let i = t.childElementCount > o.childElementCount,
                        l = r.get(t) || getComputedStyle(t);
                    if (
                        (r.has(t) || r.set(t, l),
                        i &&
                            (function (e, t) {
                                var r;
                                if (
                                    e?.nodeType !== 1 ||
                                    (function (e) {
                                        try {
                                            let t = e.getAttribute?.("style") || "";
                                            return /\b(height|width|block-size|inline-size)\s*:/.test(t);
                                        } catch {
                                            return !1;
                                        }
                                    })(e) ||
                                    m((r = e)) ||
                                    os.has(r?.localName)
                                )
                                    return !1;
                                let n = t.position;
                                if ("absolute" === n || "fixed" === n || "sticky" === n) return !1;
                                let o = t.display || "";
                                return !(
                                    o.includes("flex") ||
                                    o.includes("grid") ||
                                    o.startsWith("table") ||
                                    (t.transform && "none" !== t.transform)
                                );
                            })(t, l))
                    ) {
                        (o.style.height || (o.style.height = "auto"),
                            o.style.width || (o.style.width = "auto"),
                            o.style.removeProperty("block-size"),
                            o.style.removeProperty("inline-size"),
                            o.style.minHeight || (o.style.minHeight = "0"),
                            o.style.minWidth || (o.style.minWidth = "0"),
                            o.style.maxHeight || (o.style.maxHeight = "none"),
                            o.style.maxWidth || (o.style.maxWidth = "none"));
                        let e = l.overflowY || l.overflowBlock || "visible",
                            t = l.overflowX || l.overflowInline || "visible";
                        ("visible" !== e || "visible" !== t) && (o.style.overflow = "visible");
                    }
                    let a = Array.from(o.children);
                    if (n)
                        for (let t of a) {
                            let r = n.get(t);
                            r && 1 === r.nodeType && e(r, t);
                        }
                    else {
                        let r = Array.from(t.children);
                        for (let t = 0; t < Math.min(r.length, a.length); t++) e(r[t], a[t]);
                    }
                })(e, t);
            })(t.element, t.clone, t.styleCache, t.nodeMap);
        } catch (e) {
            (eF(t.__session, "shrink-failed", "shrink pass failed", e),
                console.warn("[SnapDOM] Couldn't close the gaps left by removed elements.", e));
        }
    try {
        await nl(t.clone, t.element, t.nodeMap);
    } catch {}
    let S = (e) => Promise.resolve().then(e),
        M = (async () => {
            await Promise.all([
                S(() => ob(t.clone, t.options)),
                S(() => o$(t.element, t.clone, t.styleCache, t.options, t.nodeMap)),
            ]);
            try {
                !(function (e, t, r = new Map()) {
                    let n = [],
                        o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
                    for (let e = o.currentNode; e; e = o.nextNode()) {
                        let o = r.get(e);
                        if (o?.nodeType !== 1) continue;
                        let i = en(o),
                            l = i.getPropertyValue("backdrop-filter") || i.getPropertyValue("-webkit-backdrop-filter");
                        l &&
                            "none" !== l &&
                            e !== t &&
                            n.push({
                                cloneEl: e,
                                orig: o,
                                bf: l,
                                path: (function (e, t) {
                                    let r = [];
                                    for (let n = t; n !== e; n = n.parentElement) {
                                        if (!n?.parentElement) return null;
                                        r.push([...n.parentElement.children].indexOf(n));
                                    }
                                    return r.reverse();
                                })(t, e),
                            });
                    }
                    if (!n.length) return;
                    let i = e.getBoundingClientRect();
                    for (let { cloneEl: e, orig: o, bf: l, copy: a } of n.map((e, o) => {
                        let i = t.cloneNode(!0);
                        ((function (e, t, r, n) {
                            let o = [[e, t]];
                            for (; o.length;) {
                                let [e, t] = o.pop(),
                                    i = n.get(t);
                                if (i?.nodeType === 1) {
                                    let t = i.getBoundingClientRect();
                                    (t.left > r.right + 128 ||
                                        t.right < r.left - 128 ||
                                        t.top > r.bottom + 128 ||
                                        t.bottom < r.top - 128) &&
                                        ("IMG" === e.tagName &&
                                            e.setAttribute(
                                                "src",
                                                "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=",
                                            ),
                                        e.style && (e.style.backgroundImage = "none"));
                                }
                                let l = e.children,
                                    a = t.children;
                                for (let e = 0; e < l.length; e++) o.push([l[e], a[e]]);
                            }
                        })(i, t, e.orig.getBoundingClientRect(), r),
                            (function (e) {
                                if (e)
                                    for (let t = e; t && t.parentNode;) {
                                        let r = t.parentNode;
                                        for (; t.nextSibling;) t.nextSibling.remove();
                                        (t === e && t.remove(), (t = r));
                                    }
                            })(oR(i, e.path)));
                        for (let e = 0; e < o; e++) {
                            let t = oR(i, n[e].path);
                            t &&
                                (t.style.setProperty("backdrop-filter", "none", "important"),
                                t.style.setProperty("-webkit-backdrop-filter", "none", "important"));
                        }
                        return { ...e, copy: i };
                    }))
                        oA.has(e.tagName) ||
                            (function (e, t, r, n, o) {
                                let i = t.getBoundingClientRect();
                                if (!i.width || !i.height) return;
                                let l = en(t),
                                    a = t.offsetWidth ? i.width / t.offsetWidth : 1,
                                    s = Math.abs(a - 1) > 0.001 ? 1 / a : 1;
                                ((n.style.position = "absolute"),
                                    (n.style.left = `${(o.left - i.left) * s}px`),
                                    (n.style.top = `${(o.top - i.top) * s}px`),
                                    (n.style.width = `${o.width}px`),
                                    (n.style.height = `${o.height}px`),
                                    (n.style.margin = "0"),
                                    (n.style.filter = r),
                                    1 !== s &&
                                        ((n.style.transform = `scale(${s})`), (n.style.transformOrigin = "top left")));
                                let c = document.createElement("div");
                                ((c.style.cssText =
                                    "position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:-2"),
                                    c.appendChild(n));
                                let u = document.createElement("div");
                                for (let t of ((u.style.cssText =
                                    "position:absolute;inset:0;border-radius:inherit;z-index:-1"),
                                (u.style.backgroundColor = l.backgroundColor),
                                (u.style.backgroundImage = e.style.backgroundImage || l.backgroundImage),
                                [
                                    "background-size",
                                    "background-position",
                                    "background-repeat",
                                    "background-origin",
                                    "background-clip",
                                ]))
                                    u.style.setProperty(t, l.getPropertyValue(t));
                                (e.style.setProperty("background-color", "transparent", "important"),
                                    e.style.setProperty("background-image", "none", "important"),
                                    e.style.setProperty("backdrop-filter", "none", "important"),
                                    e.style.setProperty("-webkit-backdrop-filter", "none", "important"),
                                    "static" === l.position && (e.style.position = "relative"),
                                    (e.style.isolation = "isolate"),
                                    e.prepend(u),
                                    e.prepend(c));
                            })(e, o, l, a, i);
                })(t.element, t.clone, t.nodeMap);
            } catch (e) {
                (eF(t.__session, "backdrop-filter-failed", "backdrop-filter emulation failed", e),
                    console.warn("[SnapDOM] Couldn't reproduce a backdrop-filter; captured without it.", e));
            }
            if (
                (t.compress &&
                    ((t.__compressionClip = c),
                    (t.__compressionRootTransform = d),
                    await S(() => is(t.clone, t.options, t.nodeMap))),
                t.captureSelection)
            )
                try {
                    !(function (e) {
                        for (let t of e.keys()) {
                            let e = t.__snapdomFieldSelection;
                            if (!e) continue;
                            delete t.__snapdomFieldSelection;
                            let { images: r, positions: n, sizes: o, repeats: i, origins: l, clips: a, base: s } = e,
                                c = t.style.backgroundImage || s.image;
                            (c && "none" !== c
                                ? (r.push(c),
                                  n.push(t.style.backgroundPosition || s.position),
                                  o.push(t.style.backgroundSize || s.size),
                                  i.push(t.style.backgroundRepeat || s.repeat),
                                  l.push(t.style.backgroundOrigin || s.origin),
                                  a.push(t.style.backgroundClip || s.clip))
                                : (r.push("linear-gradient(transparent,transparent)"),
                                  n.push("0% 0%"),
                                  o.push("auto"),
                                  i.push("repeat"),
                                  l.push(s.origin || "padding-box"),
                                  a.push(s.clip || "border-box")),
                                (t.style.backgroundImage = r.join(",")),
                                (t.style.backgroundPosition = n.join(",")),
                                (t.style.backgroundSize = o.join(",")),
                                (t.style.backgroundRepeat = i.join(",")),
                                (t.style.backgroundOrigin = l.join(",")),
                                (t.style.backgroundClip = a.join(",")));
                        }
                    })(t.nodeMap);
                } catch (e) {
                    eF(t.__session, "selection-compose-failed", "field selection compose failed", e);
                }
        })(),
        k = Promise.resolve();
    (("auto" === t.embedFonts ? ((t.element.ownerDocument || document).fonts?.size || 0) > 0 : t.embedFonts) &&
        (k = S(async () => {
            let e = t.element.ownerDocument || document,
                r = x
                    ? (e) => {
                          try {
                              let t = e.getBoundingClientRect();
                              return (
                                  t.right >= x.left - 200 &&
                                  t.left <= x.right + 200 &&
                                  t.bottom >= x.top - 200 &&
                                  t.top <= x.bottom + 200
                              );
                          } catch {
                              return !0;
                          }
                      }
                    : null,
                { required: n, usedCodepoints: o } = (!x && t.__fontUsage) || nR(t.element, r);
            if ("auto" === t.embedFonts) {
                let t = new Set();
                try {
                    for (let r of e.fonts) t.add(String(r.family).replace(/["']/g, "").toLowerCase());
                } catch {}
                if (!(t.size > 0 && Array.from(n).some((e) => t.has(String(e).split("__")[0].toLowerCase())))) return;
            }
            if (ek()) {
                let t = new Set(
                    Array.from(n)
                        .map((e) => String(e).split("__")[0])
                        .filter(Boolean),
                );
                await nE(t, 1, e);
            }
            u = await nA({
                required: n,
                usedCodepoints: o,
                exclude: t.options.excludeFonts,
                localFonts: t.options.localFonts,
                useProxy: t.options.useProxy,
                fontStylesheetDomains: t.options.fontStylesheetDomains,
                iconMatchers: t.options.__iconMatchers,
                doc: e,
            });
        })),
        await Promise.all([M, k]),
        (t.options.plugins || []).some(
            (e) => e && ("function" == typeof e.beforeRender || "function" == typeof e.afterRender),
        ),
        t.options.engine,
        v?.due() && (await v.pause()));
    let C = t.clone;
    oZ(C, t.__compressedAssets);
    let $ = await ic(t, { clipWindow: c, outerTransforms: b, outerShadows: w, rootTransform2D: d, fontsCSS: u });
    if (((t.__compressedSnapshot = oK(C, t.__compressedAssets)), "function" == typeof t.__retain))
        try {
            t.__retain({
                clone: r,
                nodeMap: a,
                styleCache: l,
                styleMap: t.__session.styleMap,
                classPrefixCSS: i,
                fontsCSS: u,
                clipWindow: c,
                outerTransforms: b,
                outerShadows: w,
                rootTransform2D: d,
                __compressedAssets: t.__compressedAssets,
                __compressionDensity: t.__compressionDensity,
            });
        } catch {}
    return $;
}
(eP(), s(), J(), s(), v());
var ih = new Set(["png", "jpeg", "jpg", "webp", "svg"]);
(eR(), e_(), eP());
var ip = "svg,iframe,canvas,video,audio,object,embed,slot,template,picture,style,pre",
    im = /(?:^|;)\s*(?:-webkit-)?backdrop-filter:\s*(?!none(?:\s*!important)?(?:;|$))[^;]+/i,
    ig = new WeakMap(),
    iy = 1 / 16,
    ib = new Map(),
    iw = ["width", "height", "min-width", "min-height"],
    ix = { attempts: 0, served: 0, reconciled: 0 };
async function iv(e, t, r) {
    ix.attempts++;
    try {
        let n = await iS(e, t, r);
        return (n && ix.served++, n);
    } catch {
        return null;
    }
}
async function iS(e, t, r) {
    let n = t.retained;
    if (
        !n ||
        !n.clone ||
        !n.styleMap ||
        !n.srcToClone ||
        r.reconcile ||
        r.clip ||
        r.captureSelection ||
        n.clipWindow ||
        e.scrollTop ||
        e.scrollLeft ||
        (function (e) {
            try {
                return e.matches?.("dialog,[popover]") || !!e.querySelector?.("dialog,[popover]");
            } catch {
                return !0;
            }
        })(e) ||
        (function (e) {
            if (void 0 !== e.__usesBackdropFilter) return e.__usesBackdropFilter;
            let t = !1;
            for (let r of e.styleMap.values())
                if (im.test(r)) {
                    t = !0;
                    break;
                }
            return ((e.__usesBackdropFilter = t), t);
        })(n) ||
        n.fontsCSS ||
        oq(r)
    )
        return null;
    for (let e of r.plugins || [])
        if (
            e &&
            ("function" == typeof e.beforeSnap ||
                "function" == typeof e.beforeClone ||
                "function" == typeof e.resolveNode ||
                "function" == typeof e.afterClone)
        )
            return null;
    if (
        (n.classPrefixCSS && (n.classPrefixCSS.includes("::marker") || n.classPrefixCSS.includes("::first-line"))) ||
        "remove" === r.excludeMode
    )
        return null;
    let o = e.ownerDocument || document,
        i = t5(e);
    if (
        !i ||
        (function (e) {
            let t = tN(),
                r = ig.get(e);
            if (r && r.epoch === t) return r.leaky;
            let n = !1,
                o = { budget: 2e4 },
                i = (e) => {
                    for (let t = 0; t < e.length && !n; t++) {
                        if (--o.budget < 0) {
                            n = !0;
                            return;
                        }
                        let r = e[t],
                            l = r.selectorText;
                        if (l && /[+~]|:has\(/.test(l)) {
                            n = !0;
                            return;
                        }
                        let a = r.style;
                        if (
                            a &&
                            (a.counterReset ||
                                a.counterIncrement ||
                                a.counterSet ||
                                (a.content && a.content.includes("counter")))
                        ) {
                            n = !0;
                            return;
                        }
                        r.cssRules && r.cssRules.length && i(r.cssRules);
                    }
                };
            try {
                for (let t of e.styleSheets) {
                    let e = null;
                    try {
                        e = t.cssRules;
                    } catch {
                        n = !0;
                    }
                    if (n) break;
                    e && i(e);
                }
                if (!n) {
                    let t = e.adoptedStyleSheets;
                    if (Array.isArray(t))
                        for (let e of t) {
                            if (n) break;
                            try {
                                i(e.cssRules);
                            } catch {
                                n = !0;
                            }
                        }
                }
            } catch {
                n = !0;
            }
            return (ig.set(e, { epoch: t, leaky: n }), n);
        })(o)
    )
        return null;
    let l = [];
    e: for (let r of t.dirtyRoots) {
        if (!r.isConnected || r === e || !e.contains(r)) return null;
        for (let n of t.dirtyRoots) if (n !== r && n !== e && n.contains(r)) continue e;
        l.push(r);
    }
    if (!l.length) return null;
    for (let t of ((r.__compressedAssets = n.__compressedAssets),
    (r.__compressionDensity = n.__compressionDensity),
    (r.__compressionRootTransform = n.rootTransform2D),
    l)) {
        if (
            t.parentElement === e ||
            t.matches?.(ip) ||
            t.querySelector?.(ip) ||
            (function (e, t) {
                let r = t.has("backdrop-filter") || t.has("-webkit-backdrop-filter");
                if (!r && !(r = /(?:^|;)\s*(?:-webkit-)?backdrop-filter\s*:/i.test(e.getAttribute?.("style") || "")))
                    try {
                        r = !!e.querySelector?.('[style*="backdrop-filter" i]');
                    } catch {
                        r = !0;
                    }
                if (!r) return !1;
                let n = [e];
                for (let t of (e.querySelectorAll && n.push(...e.querySelectorAll("*")), n)) {
                    let e = getComputedStyle(t),
                        r = e.getPropertyValue("backdrop-filter") || e.getPropertyValue("-webkit-backdrop-filter");
                    if (r && "none" !== r) return !0;
                }
                return !1;
            })(t, i)
        )
            return null;
        let o = n.srcToClone.get(t);
        if (!o || !o.parentNode) return null;
        let l = new Map(),
            a = { styleMap: n.styleMap, styleCache: n.styleCache, nodeMap: l, options: r },
            s = oF(t, null),
            c = nY(t),
            u;
        try {
            u = await r2(t, a, r);
        } finally {
            (c(), s());
        }
        if (
            !u ||
            1 !== u.nodeType ||
            u.querySelector?.("style[data-sd]") ||
            (await nH(t, u, a, r), a.__pseudoCSS) ||
            (a.__usesPlaceholder && !n.classPrefixCSS?.includes("[data-sd-ph]"))
        )
            return null;
        (await rj(u, a), oa(u));
        try {
            await nl(u, t, l);
        } catch {}
        if ((await Promise.all([ob(u, r), o$(t, u, n.styleCache, r, l)]), r.compress))
            try {
                await is(u, r, l);
            } catch {}
        for (let [e, t] of l.entries()) og(e, t, l, n.styleCache);
        for (let [e, t] of (o.replaceWith(u),
        (function (e, t) {
            let r = [e];
            for (; r.length;) {
                let e = r.pop();
                if (1 === e.nodeType) {
                    let r = t.nodeMap.get(e);
                    (void 0 !== r && (t.nodeMap.delete(e), t.srcToClone.get(r) === e && t.srcToClone.delete(r)),
                        t.styleMap.delete(e));
                }
                for (let t = e.firstChild; t; t = t.nextSibling) r.push(t);
            }
        })(o, n),
        l.entries()))
            (n.nodeMap.set(e, t), n.srcToClone.set(t, e));
    }
    let a = { styleMap: n.styleMap, styleCache: n.styleCache, nodeMap: n.nodeMap, options: r };
    for (let [e, t] of n.nodeMap.entries()) {
        if (!t || 1 !== t.nodeType || !t.isConnected) continue;
        let o = n.styleMap.get(e);
        if (!o) continue;
        let i = (function (e) {
            let t = ib.get(e);
            if (void 0 === t) {
                for (let r of ((t = null), iw)) {
                    let n = e.match(RegExp("(?:^|;)" + r + ":([^;]+)"));
                    n && n[1].endsWith("px") && ((t ||= {})[r] = n[1]);
                }
                (ib.size > 5e3 && ib.clear(), ib.set(e, t));
            }
            return t;
        })(o);
        if (!i) continue;
        let l = null,
            s = !1;
        for (let e in i)
            if (
                !(function (e, t) {
                    if (e === t) return !0;
                    if (!e.endsWith("px") || !t.endsWith("px")) return !1;
                    let r = parseFloat(e),
                        n = parseFloat(t);
                    return Number.isFinite(r) && Number.isFinite(n) && Math.abs(r - n) <= iy;
                })((l ||= getComputedStyle(t)).getPropertyValue(e), i[e])
            ) {
                s = !0;
                break;
            }
        if (s) {
            if (r.__compressedAssets?.has(e)) return null;
            (ix.reconciled++, await rh(t, e, a, r));
        }
    }
    let s = er(n.styleMap);
    for (let [e, t] of n.styleMap.entries())
        ((function (e) {
            if (!(!e.classList || !e.classList.length))
                for (let t of Array.from(e.classList)) /^c\d+$/.test(t) && e.classList.remove(t);
        })(e),
            om(e, t, s));
    let c =
        (n.classPrefixCSS || "") +
        Array.from(s.entries())
            .map(([e, t]) => `.${t}{${e}}`)
            .join("");
    oZ(n.clone, r.__compressedAssets);
    let u = await ic(
        {
            element: e,
            options: r,
            plugins: r.plugins,
            clone: n.clone,
            classCSS: c,
            styleCache: n.styleCache,
            nodeMap: n.nodeMap,
        },
        {
            clipWindow: null,
            outerTransforms: n.outerTransforms,
            outerShadows: n.outerShadows,
            rootTransform2D: n.rootTransform2D,
            fontsCSS: n.fontsCSS || "",
        },
    );
    return (
        (r.__compressedSnapshot = oK(n.clone, r.__compressedAssets)),
        (n.__compressedAssets = r.__compressedAssets),
        (n.__compressionDensity = r.__compressionDensity),
        u
    );
}
v();
var iM = new WeakMap(),
    ik = new WeakMap(),
    iC = new WeakSet(),
    i$ = new WeakMap(),
    iA = new Map(),
    iR = [
        "scroll",
        "input",
        "change",
        "focusin",
        "focusout",
        "pointerdown",
        "pointerup",
        "pointercancel",
        "keydown",
        "keyup",
        "beforetoggle",
        "toggle",
    ],
    iE = [
        "(prefers-color-scheme: dark)",
        "(prefers-reduced-motion: reduce)",
        "(prefers-contrast: more)",
        "(forced-colors: active)",
        "(inverted-colors: inverted)",
        "(prefers-reduced-transparency: reduce)",
        "(hover: hover)",
        "(any-hover: hover)",
        "(pointer: coarse)",
        "(any-pointer: coarse)",
        "(color-gamut: p3)",
        "(dynamic-range: high)",
    ];
function iF(e) {
    let t = [];
    for (let r = e; r;) {
        try {
            let e = r.getBoundingClientRect();
            t.push(e.x, e.y, e.width, e.height);
        } catch {
            t.push("?");
        }
        r = r.parentElement ? r.parentElement : r.getRootNode?.()?.host || null;
    }
    return t.join("|");
}
function iN(e, t) {
    if (t.disposed || (iA.delete(e), iA.set(e, t), iA.size <= 64)) return;
    let [r, n] = iA.entries().next().value;
    i_(r, n);
}
function i_(e, t) {
    for (let r of ((t.disposed = !0), iA.delete(e), iM.delete(e), t.observers))
        try {
            r.disconnect();
        } catch {}
    for (let r of iR) e.removeEventListener(r, t.onMediaDirty, !0);
    for (let e of t.trackedShadowRoots.keys()) for (let r of iT) e.removeEventListener(r, t.onMediaDirty, !0);
    for (let [e, r] of t.trackedImages) (e.removeEventListener("load", r), e.removeEventListener("error", r));
    (t.trackedImages.clear(),
        t.trackedShadowRoots.clear(),
        (t.images.length = 0),
        (t.controls.length = 0),
        (t.scrollNodes.length = 0),
        (t.observers.length = 0),
        (t.last = null),
        (t.retained = null),
        (t.retainedFrameDriven = !1));
}
function iP(e, t) {
    if (!e.querySelectorAll) return !1;
    let r = ik.get(e);
    ik.delete(e);
    let n = new Set(r?.roots || []);
    if ((r && ((t.controls = r.controls), (t.scannedImages = r.images)), !r)) {
        let t = [e];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            for (let e of (r.shadowRoot && !n.has(r.shadowRoot) && (n.add(r.shadowRoot), t.push(r.shadowRoot)),
            r.querySelectorAll("*")))
                e.shadowRoot && !n.has(e.shadowRoot) && (n.add(e.shadowRoot), t.push(e.shadowRoot));
        }
    }
    for (let [e, r] of t.trackedShadowRoots)
        if (!n.has(e)) {
            try {
                r.disconnect();
            } catch {}
            for (let r of iT) e.removeEventListener(r, t.onMediaDirty, !0);
            t.trackedShadowRoots.delete(e);
            let n = t.observers.indexOf(r);
            n >= 0 && t.observers.splice(n, 1);
        }
    for (let e of n)
        if (!t.trackedShadowRoots.has(e))
            try {
                let r = new MutationObserver(t.markDirty);
                for (let n of (r.observe(e, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    attributeOldValue: !0,
                    characterDataOldValue: !0,
                }),
                (r.__flush = t.markDirty),
                t.observers.push(r),
                t.trackedShadowRoots.set(e, r),
                iT))
                    e.addEventListener(n, t.onMediaDirty, { capture: !0, passive: !0 });
                t.retained && t.dirtyAll();
            } catch {}
    return !!r;
}
var iT = ["scroll", "change", "beforetoggle", "toggle"];
function iL(e, t) {
    return [e, ...t.trackedShadowRoots.keys()];
}
function iW(e, t) {
    let r = t.scannedImages;
    if (((t.scannedImages = null), !r))
        for (let n of ((r = []), "IMG" === e.tagName && r.push(e), iL(e, t)))
            n.querySelectorAll && r.push(...n.querySelectorAll("img"));
    if (((t.images = r), t.trackedImages.size)) {
        let e = new Set(r);
        for (let [r, n] of t.trackedImages)
            e.has(r) ||
                (r.removeEventListener("load", n), r.removeEventListener("error", n), t.trackedImages.delete(r));
    }
    for (let e of r) {
        if (e.complete || t.trackedImages.has(e)) continue;
        let r = () => {
            (t.capturing && (t.torn = !0),
                (t.dirty = !0),
                (t.dirtyRoots = null),
                e.removeEventListener("load", r),
                e.removeEventListener("error", r),
                t.trackedImages.delete(e));
        };
        (t.trackedImages.set(e, r), e.addEventListener("load", r), e.addEventListener("error", r));
    }
}
function iD(e) {
    let t = new Map(),
        r = new Map(),
        n = new Map();
    for (let o of e)
        if (tC(o))
            if ("attributes" === o.type) {
                let e = t.get(o.target);
                (e || t.set(o.target, (e = new Map())), e.has(o.attributeName) || e.set(o.attributeName, o.oldValue));
            } else if ("characterData" === o.type) r.has(o.target) || r.set(o.target, o.oldValue);
            else {
                if ("childList" !== o.type) return !0;
                let e = n.get(o.target);
                for (let t of (e || n.set(o.target, (e = new Map())), o.addedNodes)) {
                    if (3 !== t.nodeType) return !0;
                    e.set(t.data, (e.get(t.data) || 0) + 1);
                }
                for (let t of o.removedNodes) {
                    if (3 !== t.nodeType) return !0;
                    e.set(t.data, (e.get(t.data) || 0) - 1);
                }
            }
    for (let [e, r] of t) for (let [t, n] of r) if (e.getAttribute(t) !== n) return !0;
    for (let [e, t] of r) if (e.data !== t) return !0;
    for (let e of n.values()) for (let t of e.values()) if (0 !== t) return !0;
    return !1;
}
var iO = /(?:^data:image\/(?:gif|apng)|\.(?:gif|apng)(?=[?#)'"\s;]|$))/i,
    iI = (e) => (e && ("object" == typeof e || "function" == typeof e) ? iK(e) : "-");
function ij(e) {
    let t = String(e || "").trim();
    return (
        !!t &&
        (!!iO.test(t) ||
            (!!/^data:/i.test(t) &&
                (function (e) {
                    let t = (e.match(/^data:([^;,]+)/i)?.[1] || "").toLowerCase();
                    if ("image/gif" === t || "image/apng" === t) return !0;
                    if (!/image\/(?:png|webp|avif|svg\+xml)/.test(t)) return !1;
                    let r = (function (e, t = 131072) {
                        if (((e = String(e || "").trim()), !/^data:/i.test(e))) return "";
                        let r = e.indexOf(",");
                        if (r < 0) return "";
                        let n = e.slice(0, r),
                            o = e.slice(r + 1);
                        try {
                            if (/;base64/i.test(n)) {
                                let e = 4 * Math.ceil(t / 3);
                                return atob(o.slice(0, e - (e % 4)));
                            }
                            return o
                                .slice(0, 3 * t)
                                .replace(/%([0-9a-f]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)))
                                .slice(0, t);
                        } catch {
                            return "";
                        }
                    })(e);
                    return "image/png" === t
                        ? r.includes("acTL")
                        : "image/webp" === t
                          ? r.includes("ANIM") ||
                            r.includes("ANMF") ||
                            (r.includes("VP8X") && !!(2 & r.charCodeAt(r.indexOf("VP8X") + 8)))
                          : "image/avif" === t
                            ? r.includes("avis")
                            : /<(?:animate|animateTransform|animateMotion|set)\b|@keyframes\b|animation(?:-name)?\s*:/i.test(
                                  r,
                              );
                })(t)))
    );
}
function iz(e) {
    let t = String(e || "");
    if (ij(t)) return !0;
    for (let e of t.matchAll(/url\(\s*(?:"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|([^)]*))\s*\)/gi))
        if (ij(e[1] ?? e[2] ?? e[3])) return !0;
    return !1;
}
function iU(e, t = null) {
    let r = e && e.clone;
    if (!r) return !1;
    for (let n of t ? t.map((t) => e.srcToClone?.get(t)).filter(Boolean) : [r])
        for (let t of iB(n))
            if (
                iz(t.getAttribute?.("src")) ||
                iz(t.getAttribute?.("href")) ||
                iz(t.getAttribute?.("style")) ||
                iz(e.styleMap?.get(t))
            )
                return !0;
    return !1;
}
function iB(e) {
    let t = [];
    e && 1 === e.nodeType && t.push(e);
    try {
        t.push(...e.querySelectorAll("*"));
    } catch {}
    return t;
}
function iV(e, t) {
    let r = [],
        n = new Set(),
        o = (e) => {
            e && !n.has(e) && (n.add(e), r.push(e));
        };
    for (let r of (e.matches?.("input,textarea,select,option") && o(e), iL(e, t)))
        try {
            for (let e of r.querySelectorAll("input,textarea,select,option")) o(e);
        } catch {}
    t.controls = r;
}
function iH(e, t) {
    let r = [],
        n = new Set(),
        o = (e, t = !1) => {
            if (!(!e || n.has(e))) {
                n.add(e);
                try {
                    (t ||
                        e.scrollLeft ||
                        e.scrollTop ||
                        e.scrollWidth > e.clientWidth ||
                        e.scrollHeight > e.clientHeight) &&
                        r.push(e);
                } catch {}
            }
        };
    for (let t = e; t; t = t.parentElement) o(t, !0);
    for (let r of iL(e, t)) for (let e of iB(r)) o(e);
    t.scrollNodes = r;
}
function iq(e, t) {
    let r,
        n = e.ownerDocument || document,
        o = n.defaultView,
        i = [
            o?.location?.hash || "",
            ((r = n?.defaultView),
            "function" != typeof r?.matchMedia
                ? ""
                : iE
                      .map((e) => {
                          try {
                              return r.matchMedia(e).matches ? "1" : "0";
                          } catch {
                              return "?";
                          }
                      })
                      .join("")),
            o?.innerWidth || 0,
            o?.innerHeight || 0,
            o?.devicePixelRatio || 1,
            o?.screen?.orientation?.type || "",
        ];
    try {
        i.push(...[...(n.adoptedStyleSheets || [])].map(iI));
    } catch {}
    for (let e of t.trackedShadowRoots.keys())
        try {
            i.push("#shadow", ...[...(e.adoptedStyleSheets || [])].map(iI));
        } catch {}
    let l = n.activeElement,
        a = n.fullscreenElement;
    ((l?.contains(e) || e.contains(l)) && i.push(iI(l)), (a?.contains(e) || e.contains(a)) && i.push(iI(a)));
    let s = [o?.scrollX || 0, o?.scrollY || 0];
    for (let e of t.scrollNodes) s.push(e.scrollLeft || 0, e.scrollTop || 0);
    let c = [];
    for (let e of t.controls) {
        let t = String(e.localName || "").toLowerCase();
        "input" === t
            ? c.push(e.type, f(e) ? e.value.length : e.value, +!!e.checked, +!!e.indeterminate)
            : "textarea" === t
              ? c.push(e.value)
              : "select" === t
                ? c.push(e.selectedIndex, e.value)
                : c.push(+!!e.selected);
    }
    let u = [];
    for (let e of t.images) {
        let t = "";
        try {
            t = e.currentSrc || e.src || "";
        } catch {}
        u.push(t, +!!e.complete, e.naturalWidth || 0, e.naturalHeight || 0);
    }
    return { style: i.join("|"), scroll: s.join("|"), controls: c, images: u, frameDriven: t.retainedFrameDriven };
}
function iG(e, t, r) {
    if (!e) return !1;
    let n = e[r],
        o = t[r];
    if (n === o) return !0;
    if (!Array.isArray(n) || n.length !== o.length) return !1;
    for (let e = 0; e < n.length; e++) if (n[e] !== o[e]) return !1;
    return !0;
}
function iX(e, t) {
    let r = new Set();
    for (let n of iL(e, t))
        try {
            for (let e of n.getAnimations?.(1 === n.nodeType ? { subtree: !0 } : void 0) || []) r.add(e);
        } catch {}
    return [...r];
}
function iY(e) {
    return e
        .map((e) => [iI(e), e.playState, Math.round(10 * (Number(e.currentTime) || 0)), e.playbackRate].join(":"))
        .join("|");
}
var iJ = 0,
    iQ = new WeakMap();
function iK(e) {
    let t = iQ.get(e);
    return (t || ((t = "@" + ++iJ), iQ.set(e, t)), t);
}
function iZ(e, t) {
    let { burst: r, invalidate: n, ...o } = e || {};
    try {
        let e = (function e(t, r) {
            let n = typeof t;
            if ("undefined" === n) return null;
            if (null === t || "boolean" === n || "number" === n || "string" === n) return JSON.stringify(t);
            if ("function" === n || "symbol" === n) return "symbol" === n ? null : JSON.stringify(iK(t));
            if ("object" !== n) return null;
            if ("number" == typeof t.nodeType) return JSON.stringify(iK(t));
            if (r.has(t)) return null;
            r.add(t);
            try {
                if (Array.isArray(t)) {
                    let n = [];
                    for (let o of t) {
                        let t = e(o, r);
                        if (null === t) return null;
                        n.push(t);
                    }
                    return "[" + n.join(",") + "]";
                }
                let n = Object.getPrototypeOf(t);
                if (n !== Object.prototype && null !== n) return JSON.stringify(iK(t));
                let o = [];
                for (let n of Object.keys(t).sort()) {
                    let i = t[n];
                    if (void 0 === i) continue;
                    let l = e(i, r);
                    if (null === l) return null;
                    o.push(JSON.stringify(n) + ":" + l);
                }
                return "{" + o.join(",") + "}";
            } finally {
                r.delete(t);
            }
        })(o, new Set());
        return null === e ? null : `${(t || []).map(iI).join(",")}:${e}`;
    } catch {
        return null;
    }
}
var i0 = null,
    i1 = !1,
    i2 = null,
    i3 = new WeakMap(),
    i9 = !1;
function i6(e) {
    let t = { control: e };
    ((i2 = t),
        setTimeout(() => {
            i2 === t && (i2 = null);
        }, 0));
}
function i4(e) {
    let t = e.target,
        r = t && (1 === t.nodeType ? t : t.parentElement);
    return r && r.closest
        ? r.closest('button, a[href], [role="button"], input, select, summary, label, [tabindex]')
        : null;
}
function i5(e) {
    if ("keydown" === e.type && "Enter" !== e.key && " " !== e.key) return;
    let t = i4(e);
    t && (i6(t), i7(e, !1));
}
function i8(e) {
    let t = i4(e);
    t && i6(t);
}
function i7(e, t = !0) {
    if (!i0 || "hidden" === document.visibilityState) return;
    let r = i4(e);
    if (!r || ("pointerenter" === e.type && e.target !== r)) return;
    let n = i3.get(r);
    n
        ? n.element.isConnected
            ? i0(n.element, n.options).catch(() => {})
            : i3.delete(r)
        : t && !i9 && ((i9 = !0), i0(document.body, { clip: "viewport", burst: !1 }).catch(() => {}));
}
async function le(e, t) {
    if ("string" != typeof e || !e.trim()) throw Error("[SnapDOM] fromString() needs an HTML string.");
    let r = document.createElement("div");
    (G(r),
        (r.style.cssText = "position:fixed;left:-99999px;top:0;pointer-events:none;"),
        (r.innerHTML = e),
        document.body.appendChild(r));
    try {
        await eS();
        let e = Array.from(r.childNodes).some((e) => 3 === e.nodeType && e.textContent.trim()),
            n = 1 !== r.children.length || e ? r : r.firstElementChild;
        return await li(n, { ...(t || {}), burst: !1 });
    } finally {
        r.remove();
    }
}
J();
var lt = Object.assign(li, {
    plugins: function (...e) {
        return (
            (function (...e) {
                for (let t of e.flat()) {
                    let e = oj(t);
                    if (e) {
                        if (void 0 !== e.needs && e.needs !== oD)
                            throw Error(
                                `[SnapDOM] '${e.name || "(unnamed)"}' declares needs: ${JSON.stringify(e.needs)}, so it can't be a global plugin (it would stop every capture before '${oD}'). Pass it per capture: snapdom(el, { plugins: [...] }).`,
                            );
                        oI.some((t) => t && t.name && e.name && t.name === e.name) || oI.push(e);
                    }
                }
            })(...e),
            lt
        );
    },
    fromString: le,
    version: "3.3.3",
    preCapture: function () {
        if (i1 || typeof document > "u" || "function" != typeof document.addEventListener) return;
        i1 = !0;
        let e = { capture: !0, passive: !0 };
        (document.addEventListener("pointerdown", i5, e),
            document.addEventListener("keydown", i5, e),
            document.addEventListener("click", i8, e),
            document.addEventListener("pointerenter", i7, e),
            document.addEventListener("focusin", i7, e));
    },
});
i0 = li;
var lr = Symbol("snapdom.internal"),
    ln = Symbol("snapdom.internal.silent"),
    lo = new Set(["png", "jpeg", "jpg", "webp", "svg"]);
async function li(e, t) {
    if (!e) throw Error("[SnapDOM] The element cannot be null or undefined.");
    let r = (function (e = {}) {
        var t;
        let r = "string" == typeof e.type && ih.has(e.type.toLowerCase()) ? e.type.toLowerCase() : null,
            n = e.format ?? r ?? "png";
        "jpg" === n && (n = "jpeg");
        let o = null != e.format ? n : "jpg" === r ? "jpeg" : r,
            i =
                !1 === (t = e.cache) || ("string" == typeof t && "disabled" === t.toLowerCase().trim())
                    ? "disabled"
                    : "soft",
            l = null == e.exclude ? [] : Array.isArray(e.exclude) ? e.exclude : [e.exclude],
            a = [],
            s = [];
        for (let e of l)
            if ("string" == typeof e)
                try {
                    (document.createDocumentFragment().querySelector(e), a.push(e));
                } catch {
                    console.warn(`[SnapDOM] Invalid exclude selector "${e}"; ignored.`);
                }
            else
                "function" == typeof e
                    ? s.push(e)
                    : null != e &&
                      console.warn("[SnapDOM] Ignored an exclude entry: use a CSS selector or a function.", e);
        let c = e.excludeMode ?? "hide",
            u = {
                debug: e.debug ?? !1,
                scale: e.scale ?? 1,
                exclude: a,
                excludePredicates: s.length ? s : null,
                excludeMode: c,
                filter: e.filter ?? null,
                filterMode: e.filterMode ?? "hide",
                shouldExclude: (e) => {
                    if (!e || 1 !== e.nodeType) return !1;
                    if ("exclude" === e.getAttribute("data-capture")) return !0;
                    for (let t of Array.isArray(u.exclude) ? u.exclude : [])
                        try {
                            if (e.matches(t)) return !0;
                        } catch {}
                    for (let t of Array.isArray(u.excludePredicates) ? u.excludePredicates : [])
                        try {
                            if (t(e)) return !0;
                        } catch {}
                    if ("function" == typeof u.filter)
                        try {
                            if (!u.filter(e)) return !0;
                        } catch {}
                    return !1;
                },
                placeholders: !1 !== e.placeholders,
                captureSelection: e.captureSelection ?? !1,
                canvas: h(e.canvas, "canvas") ? e.canvas : null,
                embedFonts: e.embedFonts ?? "auto",
                iconFonts: Array.isArray(e.iconFonts) ? e.iconFonts : e.iconFonts ? [e.iconFonts] : [],
                __iconMatchers: (function (e) {
                    let t = Array.isArray(e) ? e : e ? [e] : [],
                        r = [];
                    for (let e of t)
                        e instanceof RegExp
                            ? r.push(e)
                            : "string" == typeof e
                              ? r.push(RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"))
                              : console.warn("[SnapDOM] Ignored an iconFonts entry: use a string or a RegExp.", e);
                    return r;
                })(e.iconFonts),
                localFonts: Array.isArray(e.localFonts) ? e.localFonts : [],
                excludeFonts: e.excludeFonts ?? void 0,
                fontStylesheetDomains: Array.isArray(e.fontStylesheetDomains) ? e.fontStylesheetDomains : [],
                fallbackURL: e.fallbackURL ?? void 0,
                cache: i,
                __styleShare: e.__styleShare,
                useProxy: "string" == typeof e.useProxy ? e.useProxy : "",
                width: e.width ?? null,
                height: e.height ?? null,
                format: n,
                __explicitFormat: o,
                type: n,
                quality: e.quality ?? 0.92,
                dpr: e.dpr ?? (window.devicePixelRatio || 1),
                backgroundColor: e.backgroundColor ?? (["jpeg", "webp"].includes(n) ? "#ffffff" : null),
                filename: e.filename ?? "snapDOM",
                outerTransforms: e.outerTransforms ?? !0,
                outerShadows: e.outerShadows ?? !1,
                reconcile: e.reconcile ?? !1,
                burst: e.burst,
                fast: (!1 !== e.fast && "auto" !== e.fast) || e.fast,
                engine: e.engine,
                invalidate: e.invalidate ?? !1,
                __pinned: !0 === e.__pinned,
                clip: e.clip ?? null,
                compress: !1 !== e.compress,
                excludeStyleProps: e.excludeStyleProps ?? null,
                resolvePicturePlaceholders: !1 !== e.resolvePicturePlaceholders,
            };
        return u;
    })(t);
    ((r.element = e),
        r.invalidate && tP(),
        (function (e, t, r = !1) {
            e &&
                (!e.plugins || r) &&
                (e.plugins = (function (e) {
                    let t = [];
                    if (Array.isArray(e))
                        for (let r of e) {
                            let e = oj(r);
                            if (!e) continue;
                            e.name || (e.name = `anonymous-${++oV}`);
                            let n = t.findIndex((t) => t && t.name === e.name);
                            (n >= 0 && t.splice(n, 1), t.push(e));
                        }
                    for (let e of oI) e && e.name && !t.some((t) => t.name === e.name) && t.push(e);
                    return Object.freeze(t);
                })(t));
        })(r, t && t.plugins));
    let { stage: n, loweredBy: o } = (function (e) {
        let t = Array.isArray(e && e.plugins) ? e.plugins : [];
        if (!t.length) return { stage: oD, loweredBy: [] };
        let r = -1,
            n = [];
        for (let e of t) {
            if (!e || "object" != typeof e) continue;
            let t = void 0 === e.needs ? oD : e.needs;
            if (!Object.prototype.hasOwnProperty.call(oW, t))
                throw Error(
                    `[SnapDOM] Plugin '${e.name || "(unnamed)"}' declares needs: ${JSON.stringify(t)}, expected one of ${oL.join(", ")}.`,
                );
            (n.push({ name: e.name || "(unnamed)", needs: t }), (r = Math.max(r, oW[t])));
        }
        if (r < 0) return { stage: oD, loweredBy: [] };
        let o = oL[r];
        return { loweredBy: o === oD ? [] : n.filter((e) => e.needs === o).map((e) => e.name), stage: o };
    })(r);
    ((r.needs = n), (r.__needsLoweredBy = o));
    let i = oO(n, "render"),
        l = !0 === r.burst || !oq(r),
        a =
            "function" == typeof r.filter ||
            !!r.excludePredicates ||
            "function" == typeof r.excludeStyleProps ||
            "function" == typeof r.fallbackURL,
        s =
            i &&
            !r.captureSelection &&
            !1 !== r.burst &&
            l &&
            !a &&
            (function (e) {
                if (iC.has(e)) return !1;
                ik.delete(e);
                let t = [e],
                    r = [],
                    n = [];
                for (let e = 0; e < t.length; e++) {
                    let o = t[e],
                        i = [];
                    o?.nodeType === 1 && i.push(o);
                    try {
                        i.push(...o.querySelectorAll("*"));
                    } catch {
                        return !1;
                    }
                    for (let e of i) {
                        e.shadowRoot && t.push(e.shadowRoot);
                        let o = String(e.localName || e.tagName || "").toLowerCase();
                        if (
                            /^(?:iframe|canvas|video|audio|object|embed|marquee|blink)$/.test(o) ||
                            ("progress" === o && !e.hasAttribute("value")) ||
                            /^(?:animate|animatetransform|animatemotion|set)$/.test(o)
                        )
                            return !1;
                        let i = "";
                        if ("img" === o) {
                            n.push(e);
                            try {
                                i = e.currentSrc || e.src || "";
                            } catch {}
                        }
                        /^(?:input|textarea|select|option)$/.test(o) && r.push(e);
                        let l = e.getAttribute?.("style") || "",
                            a = i$.get(e);
                        if (i || l) {
                            if (
                                ((a && a.src === i && a.style === l) ||
                                    ((a = { src: i, style: l, animated: iz(i) || iz(l) }), i$.set(e, a)),
                                a.animated)
                            )
                                return !1;
                        } else a && i$.delete(e);
                    }
                }
                return (ik.set(e, { roots: t.slice(1), controls: r, images: n }), !0);
            })(e);
    return (
        s &&
            i1 &&
            i2 &&
            (!t || !1 !== t.burst) &&
            i3.set(i2.control, { element: e, options: t && "object" == typeof t ? { ...t } : t }),
        r.snap || (r.snap = { toPng: (e, t) => lt.toPng(e, t), toSvg: (e, t) => lt.toSvg(e, t) }),
        s
            ? (function (e, t, r, n, o = null) {
                  let i = iM.get(e);
                  i ||
                      (((i = (function (e) {
                          let t = {
                                  dirty: !0,
                                  pending: [],
                                  torn: !1,
                                  dirtyRoots: new Set(),
                                  retained: null,
                                  retainedFrameDriven: !1,
                                  disposed: !1,
                                  capturing: !1,
                                  last: null,
                                  inflight: Promise.resolve(),
                                  observers: [],
                                  trackedShadowRoots: new Map(),
                                  trackedImages: new Map(),
                                  images: [],
                                  scannedImages: null,
                                  scrollNodes: [],
                                  controls: [],
                                  envEpoch: tF(),
                                  styleEpoch: tN(),
                                  styleStamp: t_(e),
                                  outsideMutations: tR(e),
                                  geometry: null,
                                  renderState: null,
                              },
                              r = () => {
                                  ((t.dirty = !0), (t.dirtyRoots = null));
                              },
                              n = (r) => {
                                  if (!t.dirtyRoots) return;
                                  let n = r && (1 === r.nodeType ? r : r.parentElement);
                                  if (!n || n === e || !e.contains(n) || t.dirtyRoots.size >= 12) {
                                      t.dirtyRoots = null;
                                      return;
                                  }
                                  t.dirtyRoots.add(n);
                              },
                              o = (e) => {
                                  if (t.capturing) {
                                      for (let r of e) t.pending.push(r);
                                      return;
                                  }
                                  for (let r of e) tC(r) && ((t.dirty = !0), n(r.target));
                              },
                              i = () => {
                                  if (t.capturing) {
                                      t.torn = !0;
                                      return;
                                  }
                                  r();
                              };
                          t.dirtyAll = r;
                          try {
                              let r = new MutationObserver(o);
                              (r.observe(e, {
                                  subtree: !0,
                                  childList: !0,
                                  attributes: !0,
                                  characterData: !0,
                                  attributeOldValue: !0,
                                  characterDataOldValue: !0,
                              }),
                                  (r.__flush = o),
                                  t.observers.push(r));
                          } catch {}
                          ((t.markDirty = o), (t.onMediaDirty = i));
                          try {
                              for (let t of iR) e.addEventListener(t, i, { capture: !0, passive: !0 });
                          } catch {}
                          return (iP(e, t) || iV(e, t), iH(e, t), iW(e, t), t);
                      })(e)).baselineSignature = iZ(t, r.plugins)),
                      iM.set(e, i));
                  let l = iZ(t, r.plugins),
                      a = async () => {
                          if (i.disposed) return n();
                          let t = null === l || l !== i.baselineSignature;
                          for (let r of (t && null !== l
                              ? i.pendingSig === l
                                  ? ((i.baselineSignature = l),
                                    (i.last = null),
                                    (i.dirty = !0),
                                    (i.dirtyRoots = null),
                                    (i.pendingSig = null),
                                    (t = !1))
                                  : (i.pendingSig = l)
                              : (i.pendingSig = null),
                          iP(e, i),
                          iW(e, i),
                          i.observers))
                              r.__flush(r.takeRecords());
                          t1();
                          let a = tR(e);
                          (i.dirty && i.outsideMutations !== a && i.dirtyAll(), (i.outsideMutations = a));
                          let s = e.getRootNode?.(),
                              c = [...i.trackedShadowRoots.keys()];
                          (s?.nodeType !== 11 || c.includes(s) || c.push(s), t0(e.ownerDocument || document, c));
                          let u = t_(e);
                          i.styleStamp !== u && ((i.styleStamp = u), i.dirty || i.dirtyAll());
                          let d = iq(e, i),
                              f = iX(e, i);
                          ((d.animation = iY(f)),
                              i.renderState &&
                                  (iG(i.renderState, d, "style") || (tP(), i.dirtyAll()),
                                  iG(i.renderState, d, "scroll") || i.dirtyAll(),
                                  iG(i.renderState, d, "controls") || (t2(e), i.dirtyAll()),
                                  iG(i.renderState, d, "images") || i.dirty || i.dirtyAll()));
                          let h = tF();
                          i.envEpoch !== h && (i.dirtyAll(), (i.envEpoch = h));
                          let p = tN();
                          if (i.styleEpoch !== p && ((i.styleEpoch = p), !i.dirty)) {
                              let t = iF(e);
                              (null !== i.geometry && t !== i.geometry && (t2(e), i.dirtyAll()), (i.geometry = t));
                          }
                          r.invalidate && i.dirtyAll();
                          let m = !1,
                              g = !!i.renderState && !iG(i.renderState, d, "animation");
                          try {
                              let t = new Set();
                              for (let r of (g && 0 === f.length && (t = null), f)) {
                                  let n = "running" === r.playState;
                                  if (!n && !g) continue;
                                  (n && (m = !0), (g = !0));
                                  let o = r.effect?.target;
                                  if (
                                      (function (e, t, r) {
                                          if (!r || 1 !== r.nodeType) return null;
                                          if (r === e || e.contains(r)) return e;
                                          for (let e of t.trackedShadowRoots.keys()) if (e.contains(r)) return e;
                                          return null;
                                      })(e, i, o) === e
                                  )
                                      t.add(o);
                                  else {
                                      t = null;
                                      break;
                                  }
                              }
                              if (g && t && t.size && i.retained)
                                  for (let e of ((i.dirty = !0), t)) (i.dirtyRoots && i.dirtyRoots.add(e), t2(e));
                              else g && !t && i.dirtyAll();
                          } catch {}
                          let y = d.frameDriven,
                              b = m || y;
                          if ((b && (i.last = null), y && i.dirtyAll(), !t && !b && !i.dirty && i.last))
                              return (iN(e, i), i.last);
                          i.capturing = !0;
                          let w = null;
                          try {
                              let l = null,
                                  s = !1,
                                  c = null;
                              if (!t && i.dirty && i.retained && i.dirtyRoots && i.dirtyRoots.size && o) {
                                  c = [...i.dirtyRoots];
                                  let t = await iv(e, i, r);
                                  t && ((l = await o(t)), (s = !0));
                              }
                              if (
                                  (l ||
                                      (t ||
                                          (r.__retain = (e) => {
                                              let t = new Map();
                                              for (let [r, n] of e.nodeMap.entries()) t.set(n, r);
                                              w = { ...e, srcToClone: t };
                                          }),
                                      (r.__tornSinceStart = () => {
                                          for (let e of i.observers) for (let t of e.takeRecords()) i.pending.push(t);
                                          return (t1(), i.torn || iD(i.pending) || tR(e) !== a);
                                      }),
                                      (l = await n())),
                                  !t && !i.disposed)
                              ) {
                                  ((i.dirty = !1),
                                      (i.dirtyRoots = new Set()),
                                      w
                                          ? ((i.retained = w), (i.retainedFrameDriven = iU(w)), iV(e, i), iH(e, i))
                                          : s && ((i.retainedFrameDriven ||= iU(i.retained, c)), iV(e, i), iH(e, i)));
                                  let t = iq(e, i);
                                  t.animation = iY(iX(e, i));
                                  let r = ["style", "scroll", "controls", "images"];
                                  m || r.push("animation");
                                  let n = r.every((e) => iG(d, t, e));
                                  ((i.renderState = t),
                                      (i.styleEpoch = tN()),
                                      (i.styleStamp = t_(e)),
                                      (i.geometry = iF(e)),
                                      i.renderState.frameDriven
                                          ? (iC.add(e), i_(e, i))
                                          : n
                                            ? b || i.renderState.frameDriven || ((i.last = l), iN(e, i))
                                            : (i.dirtyAll(), (i.last = null)));
                              }
                              return l;
                          } finally {
                              for (let e of ((r.__retain = void 0), (r.__tornSinceStart = void 0), i.observers))
                                  for (let t of e.takeRecords()) i.pending.push(t);
                              t1();
                              let t = tR(e);
                              ((i.torn || iD(i.pending) || t !== a) && (i.dirtyAll(), (i.last = null)),
                                  (i.outsideMutations = t),
                                  (i.styleEpoch = tN()),
                                  (i.styleStamp = t_(e)),
                                  (i.pending.length = 0),
                                  (i.torn = !1),
                                  (i.capturing = !1),
                                  i.disposed || (iP(e, i), iW(e, i)));
                          }
                      },
                      s = i.inflight.then(a, a);
                  return ((i.inflight = s.catch(() => {})), s);
              })(
                  e,
                  t,
                  r,
                  () => lt.capture(e, r, lr),
                  (e) => ll(e, r),
              )
            : lt.capture(e, r, lr)
    );
}
async function ll(e, t) {
    let r = t.needs || oD,
        n = oO(r, "render"),
        o = (e) => {
            var n;
            let o;
            return (
                (n = t.__needsLoweredBy || []),
                (o = n.length ? n.map((e) => `'${e}'`).join(", ") : "the attached plugins"),
                Error(
                    `[SnapDOM] No ${e}: this capture stopped at '${r}' because ${o} asked for needs: '${r}'. It is not re-captured, since that would be a different instant. Ask the plugin for needs: 'render', or capture without it.`,
                )
            );
        },
        i = "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement ? e : null,
        l = i ? null : e,
        a = () => (l ??= i.toDataURL()),
        s = i || e;
    i && (e = "");
    let c = t.__compressedSnapshot,
        u = t.__compressionDensity;
    (delete t.__compressedSnapshot, delete t.__compressedAssets);
    let d,
        f = t.meta || {},
        h = (Number.isFinite(t.width) || Number.isFinite(t.height)) && !ek(),
        p = h ? (Number.isFinite(t.width) ? f.targetW / f.vbW : f.targetH / f.vbH) : 1,
        m = h ? (Number.isFinite(t.height) ? f.targetH / f.vbH : f.targetW / f.vbW) : 1,
        g = (e) => {
            if (i || !c?.size) return s;
            let t = f.vbW,
                r = f.vbH,
                n = e.crop;
            n &&
                ((t = Math.max(1, Math.min(t, n.x + n.width) - Math.max(0, n.x))),
                (r = Math.max(1, Math.min(r, n.y + n.height) - Math.max(0, n.y))));
            let o = Number.isFinite(e.width),
                l = Number.isFinite(e.height);
            return (o && l
                ? Math.max(e.width / t, e.height / r)
                : o
                  ? (e.width / t) * (n ? Math.max(1, m / p) : 1)
                  : l
                    ? (e.height / r) * (n ? Math.max(1, p / m) : 1)
                    : (e.scale || 1) * Math.max(p, m)) *
                (e.dpr || 1) <=
                u
                ? s
                : (d ??= (function (e, t) {
                      if (!t?.size || "string" != typeof e || !e.startsWith("data:image/svg+xml")) return e;
                      let r = e.indexOf(","),
                          n = new DOMParser().parseFromString(decodeURIComponent(e.slice(r + 1)), "image/svg+xml");
                      if (n.querySelector("parsererror")) return e;
                      let o = !1;
                      for (let e of n.querySelectorAll(`[${oG}]`))
                          for (let r of t.get(e.getAttribute(oG)) || [])
                              oQ(e, r) === r.compressed &&
                                  ("style" === r.kind
                                      ? e.style.setProperty(r.name, r.original, e.style.getPropertyPriority(r.name))
                                      : "xlink:href" === r.name
                                        ? e.setAttributeNS(oX, r.name, r.original)
                                        : e.setAttribute(r.name, r.original),
                                  (o = !0));
                      return o
                          ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(n))}`
                          : e;
                  })(a(), c));
        },
        y = async (e, t) => {
            let { rasterize: r } = await Promise.resolve().then(() => (tt(), e7));
            return r(s, { ...e, ...(t || {}), format: "png" });
        },
        b = () => {
            if (!n) throw o("svgString");
            if (i) throw Error("[SnapDOM] html-in-canvas makes a raster capture; there is no SVG string.");
            let t = e.indexOf(",");
            return t >= 0 ? decodeURIComponent(e.slice(t + 1)) : "";
        },
        w = (e) =>
            Object.defineProperty(
                { ...(e || {}), svgString: b },
                "url",
                n
                    ? { get: a, enumerable: !0 }
                    : {
                          get() {
                              throw o("export.url");
                          },
                          enumerable: !1,
                          configurable: !0,
                      },
            ),
        x = {
            img: async (e, t) => {
                if (i) return y(e, t);
                let { toImg: r } = await Promise.resolve().then(() => (to(), tr)),
                    n = { ...e, ...(t || {}) };
                return r(g(n), n);
            },
            svg: async (e, t) => {
                if (i) return y(e, t);
                let { toSvg: r } = await Promise.resolve().then(() => (to(), tr)),
                    n = { ...e, ...(t || {}) };
                return r(g(n), n);
            },
            canvas: async (e, t) => {
                let { toCanvas: r } = await Promise.resolve().then(() => (e8(), eT)),
                    n = { ...e, ...(t || {}) };
                return r(g(n), n);
            },
            blob: async (e, t) => {
                let { toBlob: r } = await Promise.resolve().then(() => (tp(), tf)),
                    n = { ...e, ...(t || {}) };
                return r(g(n), n);
            },
            png: async (e, t) => {
                let { rasterize: r } = await Promise.resolve().then(() => (tt(), e7)),
                    n = { ...e, ...(t || {}), format: "png" };
                return r(g(n), n);
            },
            jpeg: async (e, t) => {
                let { rasterize: r } = await Promise.resolve().then(() => (tt(), e7)),
                    n = { ...e, ...(t || {}), format: "jpeg" };
                return r(g(n), n);
            },
            webp: async (e, t) => {
                let { rasterize: r } = await Promise.resolve().then(() => (tt(), e7)),
                    n = { ...e, ...(t || {}), format: "webp" };
                return r(g(n), n);
            },
            download: async (e, t) => {
                let { download: r } = await Promise.resolve().then(() => (tb(), tm)),
                    n = { ...e, ...(t || {}) };
                return r(g(n), n);
            },
        };
    if (!n)
        for (let e of Object.keys(x)) {
            let t = "download" === e ? "download()" : `to${e.charAt(0).toUpperCase()}${e.slice(1)}()`;
            x[e] = async () => {
                throw o(t);
            };
        }
    let v = {};
    for (let e of ["img", "svg", "canvas", "blob", "png", "jpeg", "webp"])
        v[e] = async (r) => x[e](t, { ...$(e, r || {}), [ln]: !0 });
    v.jpg = v.jpeg;
    let S = (e) => Object.defineProperty({ ...t, ...e }, "options", { value: t, configurable: !0 }),
        M = S({ artifacts: t.__artifacts || null, export: w(), exports: v }),
        k = Object.assign({}, ...(await oB("defineExports", M)).filter((e) => e && "object" == typeof e).reverse()),
        C = { ...x, ...k };
    function $(e, r) {
        let n = r || {},
            o = { ...t, ...n },
            l = "string" == typeof n.type ? n.type.toLowerCase() : "",
            a = "string" == typeof n.format ? n.format.toLowerCase() : lo.has(l) ? l : "";
        return (
            a && (o.format = "jpg" === a ? "jpeg" : a),
            (o.__explicitFormat = a ? o.format : (t.__explicitFormat ?? null)),
            "blob" !== e || o.__explicitFormat || (o.format = i ? "png" : "svg"),
            (o.type = o.format),
            [e, o.format, l]
                .map((e) => ("string" == typeof e ? e.toLowerCase() : ""))
                .find((e) => "jpeg" === e || "jpg" === e || "webp" === e) &&
                (null == o.backgroundColor || "transparent" === o.backgroundColor) &&
                (o.backgroundColor = "#ffffff"),
            1 !== o.scale &&
                (Number.isFinite(o.width) || Number.isFinite(o.height)) &&
                eE(o, "scale ignored: width/height already set the size."),
            o
        );
    }
    C.jpeg && !C.jpg && (C.jpg = (e, t) => C.jpeg(e, t));
    let A = !1,
        R = Promise.resolve();
    async function E(e, r) {
        let n = Object.freeze(r && "object" == typeof r ? { ...r } : {}),
            o = async () => {
                let r = C[e];
                if (!r) throw Error(`[SnapDOM] Unknown export type: ${e}`);
                let o = $(e, n),
                    i = S({
                        artifacts: t.__artifacts || null,
                        export: w({ type: e, options: o, requestedOptions: n }),
                    }),
                    l = o.format,
                    a = o.type;
                await oB("beforeExport", i, { format: e, options: o });
                let s = o.format !== l ? o.format : o.type !== a ? o.type : "",
                    c = "string" == typeof s ? s.toLowerCase() : "";
                lo.has(c) &&
                    ((o.format = "jpg" === c ? "jpeg" : c),
                    (o.type = o.format),
                    (o.__explicitFormat = o.format),
                    /^(?:jpeg|webp)$/.test(o.format) &&
                        (null == o.backgroundColor || "transparent" === o.backgroundColor) &&
                        (o.backgroundColor = "#ffffff"));
                let u = await r(i, o);
                return (
                    await oB("afterExport", i, { format: e, options: o, result: u }),
                    A || ((A = !0), await oU("afterSnap", t)),
                    u
                );
            },
            i = R.then(o);
        return ((R = i.catch(() => {})), i);
    }
    let F = {
        url: e,
        needs: r,
        warnings: (t.__session && t.__session.warnings) || [],
        toRaw: () => {
            if (!n) throw o("toRaw()");
            return a();
        },
        to: (e, t) => E(e, t),
        toImg: (e) => E("img", e),
        toSvg: (e) => E("svg", e),
        toCanvas: (e) => E("canvas", e),
        toBlob: (e) => E("blob", e),
        toPng: (e) => E("png", e),
        toJpg: (e) => E("jpg", e),
        toWebp: (e) => E("webp", e),
        download: (e) => E("download", e),
    };
    for (let e of (n
        ? i && Object.defineProperty(F, "url", { get: a, enumerable: !0, configurable: !0 })
        : Object.defineProperty(F, "url", {
              get() {
                  throw o("url");
              },
              enumerable: !1,
              configurable: !0,
          }),
    Object.defineProperty(
        F,
        "meta",
        n
            ? { value: t.meta, enumerable: !0 }
            : {
                  get() {
                      throw o("meta");
                  },
                  enumerable: !1,
                  configurable: !0,
              },
    ),
    Object.keys(C))) {
        let t = "to" + e.charAt(0).toUpperCase() + e.slice(1);
        F[t] || (F[t] = (t) => E(e, t));
    }
    return F;
}
((lt.capture = async (e, t, r) => {
    if (r !== lr) throw Error("[SnapDOM] snapdom.capture() is internal; use snapdom(el).");
    if (oO(t.needs || oD, "render") && ek()) {
        if (t.embedFonts)
            try {
                let r = e.ownerDocument || document,
                    n = new Set();
                if ("auto" === t.embedFonts) {
                    try {
                        for (let e of r.fonts) n.add(String(e.family).replace(/["']/g, "").toLowerCase());
                    } catch {}
                    if (0 === n.size) throw null;
                }
                let o = nR(e);
                t.clip || (t.__fontUsage = o);
                let i = o.required,
                    l = new Set([...i].map((e) => String(e).split("__")[0]).filter(Boolean));
                if (
                    "auto" === t.embedFonts &&
                    ((l = new Set([...l].filter((e) => n.has(e.toLowerCase())))), 0 === l.size)
                )
                    throw null;
                await nE(l, 1, r);
            } catch {}
        let r = Array.from(e.querySelectorAll("canvas"));
        for (let n of ("CANVAS" === e.tagName && r.unshift(e), r))
            try {
                if (r3(n)) continue;
                let e = n.getContext("2d", { willReadFrequently: !0 });
                e && e.getImageData(0, 0, 1, 1);
            } catch (e) {
                eE(t, "Couldn't prepare canvases for Safari.", e);
            }
    }
    return ll(await id(e, t), t);
}),
    (lt.toRaw = (e, t) => lt(e, t).then((e) => e.toRaw())),
    (lt.toImg = (e, t) => lt(e, t).then((e) => e.toImg())),
    (lt.toSvg = (e, t) => lt(e, t).then((e) => e.toSvg())),
    (lt.toCanvas = (e, t) => lt(e, t).then((e) => e.toCanvas())),
    (lt.toBlob = (e, t) => lt(e, t).then((e) => e.toBlob())),
    (lt.toPng = (e, t) => lt(e, { ...t, format: "png" }).then((e) => e.toPng())),
    (lt.toJpg = (e, t) => lt(e, { ...t, format: "jpeg" }).then((e) => e.toJpg())),
    (lt.toWebp = (e, t) => lt(e, { ...t, format: "webp" }).then((e) => e.toWebp())),
    (lt.download = (e, t) => lt(e, t).then((e) => e.download())));
