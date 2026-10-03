let n;
r.d(t, { ZR: () => Z });
let l = ((n = 0), () => ((n += 1), `u${`0000${((1679616 * Math.random()) | 0).toString(36)}`.slice(-4)}${n}`));
function i(e) {
    let t = [];
    for (let r = 0, n = e.length; r < n; r++) t.push(e[r]);
    return t;
}
function a(e, t) {
    let r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return r ? parseFloat(r.replace("px", "")) : 0;
}
function o(e, t = {}) {
    let r, n, l, i;
    return {
        width: t.width || ((r = a(e, "border-left-width")), (n = a(e, "border-right-width")), e.clientWidth + r + n),
        height: t.height || ((l = a(e, "border-top-width")), (i = a(e, "border-bottom-width")), e.clientHeight + l + i),
    };
}
function c(e) {
    return new Promise((t, r) => {
        let n = new Image();
        ((n.decode = () => t(n)),
            (n.onload = () => t(n)),
            (n.onerror = r),
            (n.crossOrigin = "anonymous"),
            (n.decoding = "async"),
            (n.src = e));
    });
}
async function s(e) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function u(e, t, r) {
    let n = "http://www.w3.org/2000/svg",
        l = document.createElementNS(n, "svg"),
        i = document.createElementNS(n, "foreignObject");
    return (
        l.setAttribute("width", `${t}`),
        l.setAttribute("height", `${r}`),
        l.setAttribute("viewBox", `0 0 ${t} ${r}`),
        i.setAttribute("width", "100%"),
        i.setAttribute("height", "100%"),
        i.setAttribute("x", "0"),
        i.setAttribute("y", "0"),
        i.setAttribute("externalResourcesRequired", "true"),
        l.appendChild(i),
        i.appendChild(e),
        s(l)
    );
}
let h = (e, t) => {
    if (e instanceof t) return !0;
    let r = Object.getPrototypeOf(e);
    return null !== r && (r.constructor.name === t.name || h(r, t));
};
function d(e, t, r) {
    let n,
        a,
        o,
        c = window.getComputedStyle(e, r),
        s = c.getPropertyValue("content");
    if ("" === s || "none" === s) return;
    let u = l();
    try {
        t.className = `${t.className} ${u}`;
    } catch (e) {
        return;
    }
    let h = document.createElement("style");
    (h.appendChild(
        ((n = `.${u}:${r}`),
        (o = c.cssText
            ? ((a = c.getPropertyValue("content")), `${c.cssText} content: '${a.replace(/'|"/g, "")}';`)
            : i(c)
                  .map((e) => {
                      let t = c.getPropertyValue(e),
                          r = c.getPropertyPriority(e);
                      return `${e}: ${t}${r ? " !important" : ""};`;
                  })
                  .join(" ")),
        document.createTextNode(`${n}{${o}}`)),
    ),
        t.appendChild(h));
}
let f = "application/font-woff",
    g = "image/jpeg",
    p =
        221552 == r.j
            ? {
                  woff: f,
                  woff2: f,
                  ttf: "application/font-truetype",
                  eot: "application/vnd.ms-fontobject",
                  png: "image/png",
                  jpg: g,
                  jpeg: g,
                  gif: "image/gif",
                  tiff: "image/tiff",
                  svg: "image/svg+xml",
                  webp: "image/webp",
              }
            : null;
function m(e) {
    let t;
    return p[((t = /\.([^./]*?)$/g.exec(e)) ? t[1] : "").toLowerCase()] || "";
}
function w(e) {
    return -1 !== e.search(/^(data:)/);
}
function y(e, t) {
    return `data:${t};base64,${e}`;
}
async function b(e, t, r) {
    let n = await fetch(e, t);
    if (404 === n.status) throw Error(`Resource "${n.url}" not found`);
    let l = await n.blob();
    return new Promise((e, t) => {
        let i = new FileReader();
        ((i.onerror = t),
            (i.onloadend = () => {
                try {
                    e(r({ res: n, result: i.result }));
                } catch (e) {
                    t(e);
                }
            }),
            i.readAsDataURL(l));
    });
}
let S = 221552 == r.j ? {} : null;
async function E(e, t, r) {
    var n, l, i;
    let a,
        o,
        c =
            ((n = e),
            (l = t),
            (i = r.includeQueryParams),
            (o = n.replace(/\?.*/, "")),
            i && (o = n),
            /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")),
            l ? `[${l}]${o}` : o);
    if (null != S[c]) return S[c];
    r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
    try {
        let n = await b(
            e,
            r.fetchRequestInit,
            ({ res: e, result: r }) => (t || (t = e.headers.get("Content-Type") || ""), r.split(/,/)[1]),
        );
        a = y(n, t);
    } catch (n) {
        a = r.imagePlaceholder || "";
        let t = `Failed to fetch resource: ${e}`;
        (n && (t = "string" == typeof n ? n : n.message), t && console.warn(t));
    }
    return ((S[c] = a), a);
}
async function x(e) {
    let t = e.toDataURL();
    return "data:," === t ? e.cloneNode(!1) : c(t);
}
async function $(e, t) {
    if (e.currentSrc) {
        let t = document.createElement("canvas"),
            r = t.getContext("2d");
        return (
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            null == r || r.drawImage(e, 0, 0, t.width, t.height),
            c(t.toDataURL())
        );
    }
    let r = e.poster,
        n = m(r);
    return c(await E(r, n, t));
}
async function v(e) {
    var t;
    try {
        if (null == (t = null == e ? void 0 : e.contentDocument) ? void 0 : t.body)
            return await T(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
}
async function C(e, t) {
    return h(e, HTMLCanvasElement)
        ? x(e)
        : h(e, HTMLVideoElement)
          ? $(e, t)
          : h(e, HTMLIFrameElement)
            ? v(e)
            : e.cloneNode(!1);
}
async function P(e, t, r) {
    var n, l;
    let a = [];
    return (
        0 ===
            (a =
                null != e.tagName && "SLOT" === e.tagName.toUpperCase() && e.assignedNodes
                    ? i(e.assignedNodes())
                    : h(e, HTMLIFrameElement) && (null == (n = e.contentDocument) ? void 0 : n.body)
                      ? i(e.contentDocument.body.childNodes)
                      : i((null != (l = e.shadowRoot) ? l : e).childNodes)).length ||
            h(e, HTMLVideoElement) ||
            (await a.reduce(
                (e, n) =>
                    e
                        .then(() => T(n, r))
                        .then((e) => {
                            e && t.appendChild(e);
                        }),
                Promise.resolve(),
            )),
        t
    );
}
async function R(e, t) {
    let r = e.querySelectorAll ? e.querySelectorAll("use") : [];
    if (0 === r.length) return e;
    let n = {};
    for (let l = 0; l < r.length; l++) {
        let i = r[l].getAttribute("xlink:href");
        if (i) {
            let r = e.querySelector(i),
                l = document.querySelector(i);
            r || !l || n[i] || (n[i] = await T(l, t, !0));
        }
    }
    let l = Object.values(n);
    if (l.length) {
        let t = "http://www.w3.org/1999/xhtml",
            r = document.createElementNS(t, "svg");
        (r.setAttribute("xmlns", t),
            (r.style.position = "absolute"),
            (r.style.width = "0"),
            (r.style.height = "0"),
            (r.style.overflow = "hidden"),
            (r.style.display = "none"));
        let n = document.createElementNS(t, "defs");
        r.appendChild(n);
        for (let e = 0; e < l.length; e++) n.appendChild(l[e]);
        e.appendChild(r);
    }
    return e;
}
async function T(e, t, r) {
    return r || !t.filter || t.filter(e)
        ? Promise.resolve(e)
              .then((e) => C(e, t))
              .then((r) => P(e, r, t))
              .then((t) =>
                  (function (e, t) {
                      if (
                          h(t, Element) &&
                          (!(function (e, t) {
                              let r = t.style;
                              if (!r) return;
                              let n = window.getComputedStyle(e);
                              n.cssText
                                  ? ((r.cssText = n.cssText), (r.transformOrigin = n.transformOrigin))
                                  : i(n).forEach((l) => {
                                        let i = n.getPropertyValue(l);
                                        if ("font-size" === l && i.endsWith("px")) {
                                            let e = Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1;
                                            i = `${e}px`;
                                        }
                                        (h(e, HTMLIFrameElement) && "display" === l && "inline" === i && (i = "block"),
                                            "d" === l && t.getAttribute("d") && (i = `path(${t.getAttribute("d")})`),
                                            r.setProperty(l, i, n.getPropertyPriority(l)));
                                    });
                          })(e, t),
                          d(e, t, ":before"),
                          d(e, t, ":after"),
                          h(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
                          h(e, HTMLInputElement) && t.setAttribute("value", e.value),
                          h(e, HTMLSelectElement))
                      ) {
                          let r = Array.from(t.children).find((t) => e.value === t.getAttribute("value"));
                          r && r.setAttribute("selected", "");
                      }
                      return t;
                  })(e, t),
              )
              .then((e) => R(e, t))
        : null;
}
let A = /url\((['"]?)([^'"]+?)\1\)/g,
    L = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    N = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
async function k(e, t, r, n, l) {
    try {
        let i,
            a,
            o = r
                ? (function (e, t) {
                      if (e.match(/^[a-z]+:\/\//i)) return e;
                      if (e.match(/^\/\//)) return window.location.protocol + e;
                      if (e.match(/^[a-z]+:/i)) return e;
                      let r = document.implementation.createHTMLDocument(),
                          n = r.createElement("base"),
                          l = r.createElement("a");
                      return (r.head.appendChild(n), r.body.appendChild(l), t && (n.href = t), (l.href = e), l.href);
                  })(t, r)
                : t,
            c = m(t);
        if (l) {
            let e = await l(o);
            i = y(e, c);
        } else i = await E(o, c, n);
        return e.replace(
            ((a = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")), RegExp(`(url\\(['"]?)(${a})(['"]?\\))`, "g")),
            `$1${i}$3`,
        );
    } catch (e) {}
    return e;
}
function I(e) {
    return -1 !== e.search(A);
}
async function M(e, t, r) {
    let n;
    if (!I(e)) return e;
    let l = (function (e, { preferredFontFormat: t }) {
        return t
            ? e.replace(N, (e) => {
                  for (;;) {
                      let [r, , n] = L.exec(e) || [];
                      if (!n) return "";
                      if (n === t) return `src: ${r};`;
                  }
              })
            : e;
    })(e, r);
    return ((n = []), l.replace(A, (e, t, r) => (n.push(r), e)), n.filter((e) => !w(e))).reduce(
        (e, n) => e.then((e) => k(e, n, t, r)),
        Promise.resolve(l),
    );
}
async function H(e, t, r) {
    var n;
    let l = null == (n = t.style) ? void 0 : n.getPropertyValue(e);
    if (l) {
        let n = await M(l, null, r);
        return (t.style.setProperty(e, n, t.style.getPropertyPriority(e)), !0);
    }
    return !1;
}
async function D(e, t) {
    ((await H("background", e, t)) || (await H("background-image", e, t)),
        (await H("mask", e, t)) || (await H("mask-image", e, t)));
}
async function V(e, t) {
    let r = h(e, HTMLImageElement);
    if (!(r && !w(e.src)) && !(h(e, SVGImageElement) && !w(e.href.baseVal))) return;
    let n = r ? e.src : e.href.baseVal,
        l = await E(n, m(n), t);
    await new Promise((t, n) => {
        ((e.onload = t),
            (e.onerror = n),
            e.decode && (e.decode = t),
            "lazy" === e.loading && (e.loading = "eager"),
            r ? ((e.srcset = ""), (e.src = l)) : (e.href.baseVal = l));
    });
}
async function j(e, t) {
    let r = i(e.childNodes).map((e) => q(e, t));
    await Promise.all(r).then(() => e);
}
async function q(e, t) {
    h(e, Element) && (await D(e, t), await V(e, t), await j(e, t));
}
let O = 221552 == r.j ? {} : null;
async function F(e) {
    let t = O[e];
    if (null != t) return t;
    let r = await fetch(e);
    return ((t = { url: e, cssText: await r.text() }), (O[e] = t), t);
}
async function U(e, t) {
    let r = e.cssText,
        n = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (r.match(/url\([^)]+\)/g) || []).map(async (l) => {
            let i = l.replace(n, "$1");
            return (
                i.startsWith("https://") || (i = new URL(i, e.url).href),
                b(i, t.fetchRequestInit, ({ result: e }) => ((r = r.replace(l, `url(${e})`)), [l, e]))
            );
        }),
    ).then(() => r);
}
function z(e) {
    if (null == e) return [];
    let t = [],
        r = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""),
        n = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    for (;;) {
        let e = n.exec(r);
        if (null === e) break;
        t.push(e[0]);
    }
    r = r.replace(n, "");
    let l = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        i = RegExp(
            "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
            "gi",
        );
    for (;;) {
        let e = l.exec(r);
        if (null === e) {
            if (null === (e = i.exec(r))) break;
            l.lastIndex = i.lastIndex;
        } else i.lastIndex = l.lastIndex;
        t.push(e[0]);
    }
    return t;
}
async function B(e, t) {
    let r = [],
        n = [];
    return (
        e.forEach((r) => {
            if ("cssRules" in r)
                try {
                    i(r.cssRules || []).forEach((e, l) => {
                        if (e.type === CSSRule.IMPORT_RULE) {
                            let i = l + 1,
                                a = e.href,
                                o = F(a)
                                    .then((e) => U(e, t))
                                    .then((e) =>
                                        z(e).forEach((e) => {
                                            try {
                                                r.insertRule(e, e.startsWith("@import") ? (i += 1) : r.cssRules.length);
                                            } catch (t) {
                                                console.error("Error inserting rule from remote css", {
                                                    rule: e,
                                                    error: t,
                                                });
                                            }
                                        }),
                                    )
                                    .catch((e) => {
                                        console.error("Error loading remote css", e.toString());
                                    });
                            n.push(o);
                        }
                    });
                } catch (i) {
                    let l = e.find((e) => null == e.href) || document.styleSheets[0];
                    (null != r.href &&
                        n.push(
                            F(r.href)
                                .then((e) => U(e, t))
                                .then((e) =>
                                    z(e).forEach((e) => {
                                        l.insertRule(e, r.cssRules.length);
                                    }),
                                )
                                .catch((e) => {
                                    console.error("Error loading remote stylesheet", e);
                                }),
                        ),
                        console.error("Error inlining remote css file", i));
                }
        }),
        Promise.all(n).then(
            () => (
                e.forEach((e) => {
                    if ("cssRules" in e)
                        try {
                            i(e.cssRules || []).forEach((e) => {
                                r.push(e);
                            });
                        } catch (t) {
                            console.error(`Error while reading CSS rules from ${e.href}`, t);
                        }
                }),
                r
            ),
        )
    );
}
async function W(e, t) {
    if (null == e.ownerDocument) throw Error("Provided element is not within a Document");
    let r = i(e.ownerDocument.styleSheets);
    return (await B(r, t))
        .filter((e) => e.type === CSSRule.FONT_FACE_RULE)
        .filter((e) => I(e.style.getPropertyValue("src")));
}
async function _(e, t) {
    let r = await W(e, t);
    return (
        await Promise.all(
            r.map((e) => {
                let r = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return M(e.cssText, r, t);
            }),
        )
    ).join("\n");
}
async function G(e, t) {
    let r = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await _(e, t);
    if (r) {
        let t = document.createElement("style"),
            n = document.createTextNode(r);
        (t.appendChild(n), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t));
    }
}
async function Q(e, t = {}) {
    let { width: r, height: n } = o(e, t),
        l = await T(e, t, !0);
    return (
        await G(l, t),
        await q(l, t),
        !(function (e, t) {
            let { style: r } = e;
            (t.backgroundColor && (r.backgroundColor = t.backgroundColor),
                t.width && (r.width = `${t.width}px`),
                t.height && (r.height = `${t.height}px`));
            let n = t.style;
            null != n &&
                Object.keys(n).forEach((e) => {
                    r[e] = n[e];
                });
        })(l, t),
        await u(l, r, n)
    );
}
async function X(e, t = {}) {
    let { width: r, height: n } = o(e, t),
        l = await Q(e, t),
        i = await c(l),
        a = document.createElement("canvas"),
        s = a.getContext("2d"),
        u =
            t.pixelRatio ||
            (function () {
                let e, t;
                try {
                    t = process;
                } catch (e) {}
                let r = t && t.env ? t.env.devicePixelRatio : null;
                return (r && Number.isNaN((e = parseInt(r, 10))) && (e = 1), e || window.devicePixelRatio || 1);
            })(),
        h = t.canvasWidth || r,
        d = t.canvasHeight || n;
    return (
        (a.width = h * u),
        (a.height = d * u),
        !t.skipAutoScale &&
            (a.width > 16384 || a.height > 16384) &&
            (a.width > 16384 && a.height > 16384
                ? a.width > a.height
                    ? ((a.height *= 16384 / a.width), (a.width = 16384))
                    : ((a.width *= 16384 / a.height), (a.height = 16384))
                : a.width > 16384
                  ? ((a.height *= 16384 / a.width), (a.width = 16384))
                  : ((a.width *= 16384 / a.height), (a.height = 16384))),
        (a.style.width = `${h}`),
        (a.style.height = `${d}`),
        t.backgroundColor && ((s.fillStyle = t.backgroundColor), s.fillRect(0, 0, a.width, a.height)),
        s.drawImage(i, 0, 0, a.width, a.height),
        a
    );
}
async function Z(e, t = {}) {
    let r = await X(e, t);
    return await (function (e, t = {}) {
        return new Promise(
            e.toBlob
                ? (r) => {
                      e.toBlob(r, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
                  }
                : (r) => {
                      let n = window.atob(
                              e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1],
                          ),
                          l = n.length,
                          i = new Uint8Array(l);
                      for (let e = 0; e < l; e += 1) i[e] = n.charCodeAt(e);
                      r(new Blob([i], { type: t.type ? t.type : "image/png" }));
                  },
        );
    })(r);
}
