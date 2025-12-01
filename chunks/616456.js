let n, a, i, o, _, s;
r.d(t, {
    G: () => rB,
    T: () => rY,
});
var c,
    E,
    l,
    u,
    d,
    I,
    p,
    R,
    T = r(505676),
    A = r(507690),
    N = r(572299),
    f = r(263449),
    O = r(946471),
    h = r(233517),
    D = r(822578),
    S = r(696486),
    L = r(988097),
    C = r(820754),
    g = r(899517),
    m = r(202811),
    y = r(370336),
    P = r(467510),
    v = r(101284),
    w = r(622916),
    G = r(394798),
    M = r(886115),
    b = r(617726),
    U = r(928541),
    H = r(14588),
    K = r(26506),
    B = r(650093),
    W = r(501684),
    k = r(157079),
    Y = r(469359),
    x = r(393523);
let V = g.n,
    F = "sentryReplaySession",
    j = "Unable to send Replay";
function X(e, t) {
    return null != e ? e : t();
}
function $(e) {
    let t,
        r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            i = e[n + 1];
        if (((n += 2), ("optionalAccess" === a || "optionalCall" === a) && null == r)) return;
        "access" === a || "optionalAccess" === a
            ? ((t = r), (r = i(r)))
            : ("call" === a || "optionalCall" === a) && ((r = i((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
function q(e) {
    let t = $([e, "optionalAccess", (e) => e.host]);
    return $([t, "optionalAccess", (e) => e.shadowRoot]) === e;
}
function z(e) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(e);
}
function J(e) {
    try {
        var t;
        let r = e.rules || e.cssRules;
        return r
            ? ((t = Array.from(r, Z).join("")).includes(" background-clip: text;") &&
                  !t.includes(" -webkit-background-clip: text;") &&
                  (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
              t)
            : null;
    } catch (e) {
        return null;
    }
}
function Z(e) {
    let t;
    if ("styleSheet" in e)
        try {
            t =
                J(e.styleSheet) ||
                (function (e) {
                    let { cssText: t } = e;
                    if (t.split('"').length < 3) return t;
                    let r = ["@import", `url(${JSON.stringify(e.href)})`];
                    return (
                        "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`),
                        e.supportsText && r.push(`supports(${e.supportsText})`),
                        e.media.length && r.push(e.media.mediaText),
                        r.join(" ") + ";"
                    );
                })(e);
        } catch (e) {}
    else if ("selectorText" in e && e.selectorText.includes(":"))
        return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
    return t || e.cssText;
}
((c = p || (p = {}))[(c.Document = 0)] = "Document"),
    (c[(c.DocumentType = 1)] = "DocumentType"),
    (c[(c.Element = 2)] = "Element"),
    (c[(c.Text = 3)] = "Text"),
    (c[(c.CDATA = 4)] = "CDATA"),
    (c[(c.Comment = 5)] = "Comment");
class Q {
    constructor() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(e) {
        return e
            ? X($([this, "access", (e) => e.getMeta, "call", (t) => t(e), "optionalAccess", (e) => e.id]), () => -1)
            : -1;
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null;
    }
    removeNodeFromMap(e) {
        let t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
    }
    has(e) {
        return this.idNodeMap.has(e);
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e);
    }
    add(e, t) {
        let r = t.id;
        this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t);
    }
    replace(e, t) {
        let r = this.getNode(e);
        if (r) {
            let e = this.nodeMetaMap.get(r);
            e && this.nodeMetaMap.set(t, e);
        }
        this.idNodeMap.set(e, t);
    }
    reset() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
}
function ee({ maskInputOptions: e, tagName: t, type: r }) {
    return (
        "OPTION" === t && (t = "SELECT"),
        !!(e[t.toLowerCase()] || (r && e[r]) || "password" === r || ("INPUT" === t && !r && e.text))
    );
}
function et({ isMasked: e, element: t, value: r, maskInputFn: n }) {
    let a = r || "";
    return e ? (n && (a = n(a, t)), "*".repeat(a.length)) : a;
}
function er(e) {
    return e.toLowerCase();
}
function en(e) {
    return e.toUpperCase();
}
let ea = "__rrweb_original__";
function ei(e) {
    let t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? er(t) : null;
}
function eo(e, t, r) {
    return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value;
}
function e_(e, t) {
    let r;
    try {
        r = new URL(
            e,
            X(t, () => window.location.href),
        );
    } catch (e) {
        return null;
    }
    return X($([r.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", (e) => e[1]]), () => null);
}
let es = {};
function ec(e) {
    let t = es[e];
    if (t) return t;
    let r = window.document,
        n = window[e];
    if (r && "function" == typeof r.createElement)
        try {
            let t = r.createElement("iframe");
            (t.hidden = !0), r.head.appendChild(t);
            let a = t.contentWindow;
            a && a[e] && (n = a[e]), r.head.removeChild(t);
        } catch (e) {}
    return (es[e] = n.bind(window));
}
function eE(...e) {
    return ec("setTimeout")(...e);
}
function el(...e) {
    return ec("clearTimeout")(...e);
}
let eu = 1,
    ed = RegExp("[^a-z0-9-_:]");
function eI() {
    return eu++;
}
let ep = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    eR = /^(?:[a-z+]+:)?\/\//i,
    eT = /^www\..*/i,
    eA = /^(data:)([^,]*),(.*)/i;
function eN(e, t) {
    return (e || "").replace(ep, (e, r, n, a, i, o) => {
        let _ = n || i || o,
            s = r || a || "";
        if (!_) return e;
        if (eR.test(_) || eT.test(_) || eA.test(_)) return `url(${s}${_}${s})`;
        if ("/" === _[0])
            return `url(${s}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + _}${s})`;
        let c = t.split("/"),
            E = _.split("/");
        for (let e of (c.pop(), E))
            if ("." === e) continue;
            else ".." === e ? c.pop() : c.push(e);
        return `url(${s}${c.join("/")}${s})`;
    });
}
let ef = /^[^ \t\n\r\u000c]+/,
    eO = /^[, \t\n\r\u000c]+/;
function eh(e, t) {
    if (!t || "" === t.trim()) return t;
    let r = e.createElement("a");
    return (r.href = t), r.href;
}
function eD() {
    let e = document.createElement("a");
    return (e.href = ""), e.href;
}
function eS(e, t, r, n, a, i) {
    if (!n) return n;
    if ("src" === r || ("href" === r && ("use" !== t || "#" !== n[0])) || ("xlink:href" === r && "#" !== n[0]))
        return eh(e, n);
    if ("background" === r && ("table" === t || "td" === t || "th" === t)) return eh(e, n);
    if ("srcset" === r)
        return (function (e, t) {
            if ("" === t.trim()) return t;
            let r = 0;
            function n(e) {
                let n,
                    a = e.exec(t.substring(r));
                return a ? ((n = a[0]), (r += n.length), n) : "";
            }
            let a = [];
            for (; n(eO), !(r >= t.length); ) {
                let i = n(ef);
                if ("," === i.slice(-1)) (i = eh(e, i.substring(0, i.length - 1))), a.push(i);
                else {
                    let n = "";
                    i = eh(e, i);
                    let o = !1;
                    for (;;) {
                        let e = t.charAt(r);
                        if ("" === e) {
                            a.push((i + n).trim());
                            break;
                        }
                        if (o) ")" === e && (o = !1);
                        else if ("," === e) {
                            (r += 1), a.push((i + n).trim());
                            break;
                        } else "(" === e && (o = !0);
                        (n += e), (r += 1);
                    }
                }
            }
            return a.join(", ");
        })(e, n);
    if ("style" === r) return eN(n, eD());
    else if ("object" === t && "data" === r) return eh(e, n);
    return "function" == typeof i ? i(r, n, a) : n;
}
function eL(e, t, r) {
    return ("video" === e || "audio" === e) && "autoplay" === t;
}
function eC(e, t, r = 1 / 0, n = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : eC(e.parentNode, t, r, n + 1);
}
function eg(e, t) {
    return (r) => {
        if (null === r) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (r.matches(`.${e}`)) return !0;
                } else if (
                    (function (e, t) {
                        for (let r = e.classList.length; r--; ) {
                            let n = e.classList[r];
                            if (t.test(n)) return !0;
                        }
                        return !1;
                    })(r, e)
                )
                    return !0;
            }
            if (t && r.matches(t)) return !0;
            return !1;
        } catch (e) {
            return !1;
        }
    };
}
function em(e, t, r, n, a, i) {
    try {
        let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (null === o) return !1;
        if ("INPUT" === o.tagName) {
            let e = o.getAttribute("autocomplete");
            if (
                [
                    "current-password",
                    "new-password",
                    "cc-number",
                    "cc-exp",
                    "cc-exp-month",
                    "cc-exp-year",
                    "cc-csc",
                ].includes(e)
            )
                return !0;
        }
        let _ = -1,
            s = -1;
        if (i) {
            if ((s = eC(o, eg(n, a))) < 0) return !0;
            _ = eC(o, eg(t, r), s >= 0 ? s : 1 / 0);
        } else {
            if ((_ = eC(o, eg(t, r))) < 0) return !1;
            s = eC(o, eg(n, a), _ >= 0 ? _ : 1 / 0);
        }
        return _ >= 0 ? !(s >= 0) || _ <= s : !(s >= 0) && !!i;
    } catch (e) {}
    return !!i;
}
function ey(e) {
    return null == e ? "" : e.toLowerCase();
}
function eP(e, t) {
    let r,
        {
            doc: i,
            mirror: o,
            blockClass: _,
            blockSelector: s,
            unblockSelector: c,
            maskAllText: E,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: I,
            skipChild: R = !1,
            inlineStylesheet: T = !0,
            maskInputOptions: A = {},
            maskAttributeFn: N,
            maskTextFn: f,
            maskInputFn: O,
            slimDOMOptions: h,
            dataURLOptions: D = {},
            inlineImages: S = !1,
            recordCanvas: L = !1,
            onSerialize: C,
            onIframeLoad: g,
            iframeLoadTimeout: m = 5000,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: P = 5000,
            keepIframeSrcFn: v = () => !1,
            newlyAddedElement: w = !1,
        } = t,
        { preserveWhiteSpace: G = !0 } = t,
        M = (function (e, t) {
            let {
                    doc: r,
                    mirror: i,
                    blockClass: o,
                    blockSelector: _,
                    unblockSelector: s,
                    maskAllText: c,
                    maskAttributeFn: E,
                    maskTextClass: l,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: I,
                    inlineStylesheet: R,
                    maskInputOptions: T = {},
                    maskTextFn: A,
                    maskInputFn: N,
                    dataURLOptions: f = {},
                    inlineImages: O,
                    recordCanvas: h,
                    keepIframeSrcFn: D,
                    newlyAddedElement: S = !1,
                } = t,
                L = (function (e, t) {
                    if (!t.hasNode(e)) return;
                    let r = t.getId(e);
                    return 1 === r ? void 0 : r;
                })(r, i);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode)
                        return {
                            type: p.Document,
                            childNodes: [],
                            compatMode: e.compatMode,
                        };
                    return {
                        type: p.Document,
                        childNodes: [],
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: p.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: L,
                    };
                case e.ELEMENT_NODE:
                    return (function (e, t) {
                        let r,
                            {
                                doc: i,
                                blockClass: o,
                                blockSelector: _,
                                unblockSelector: s,
                                inlineStylesheet: c,
                                maskInputOptions: E = {},
                                maskAttributeFn: l,
                                maskInputFn: u,
                                dataURLOptions: d = {},
                                inlineImages: I,
                                recordCanvas: R,
                                keepIframeSrcFn: T,
                                newlyAddedElement: A = !1,
                                rootId: N,
                                maskAllText: f,
                                maskTextClass: O,
                                unmaskTextClass: h,
                                maskTextSelector: D,
                                unmaskTextSelector: S,
                            } = t,
                            L = (function (e, t, r, n) {
                                try {
                                    if (n && e.matches(n)) return !1;
                                    if ("string" == typeof t) {
                                        if (e.classList.contains(t)) return !0;
                                    } else
                                        for (let r = e.classList.length; r--; ) {
                                            let n = e.classList[r];
                                            if (t.test(n)) return !0;
                                        }
                                    if (r) return e.matches(r);
                                } catch (e) {}
                                return !1;
                            })(e, o, _, s),
                            C = (function (e) {
                                if (e instanceof HTMLFormElement) return "form";
                                let t = er(e.tagName);
                                return ed.test(t) ? "div" : t;
                            })(e),
                            g = {},
                            m = e.attributes.length;
                        for (let t = 0; t < m; t++) {
                            let r = e.attributes[t];
                            r.name && !eL(C, r.name, r.value) && (g[r.name] = eS(i, C, er(r.name), r.value, e, l));
                        }
                        if ("link" === C && c) {
                            let t = Array.from(i.styleSheets).find((t) => t.href === e.href),
                                r = null;
                            t && (r = J(t)), r && (delete g.rel, delete g.href, (g._cssText = eN(r, t.href)));
                        }
                        if ("style" === C && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = J(e.sheet);
                            t && (g._cssText = eN(t, eD()));
                        }
                        if ("input" === C || "textarea" === C || "select" === C || "option" === C) {
                            let t = ei(e),
                                r = eo(e, en(C), t),
                                n = e.checked;
                            if ("submit" !== t && "button" !== t && r) {
                                let n = em(
                                    e,
                                    O,
                                    D,
                                    h,
                                    S,
                                    ee({
                                        type: t,
                                        tagName: en(C),
                                        maskInputOptions: E,
                                    }),
                                );
                                g.value = et({
                                    isMasked: n,
                                    element: e,
                                    value: r,
                                    maskInputFn: u,
                                });
                            }
                            n && (g.checked = n);
                        }
                        if (
                            ("option" === C && (e.selected && !E.select ? (g.selected = !0) : delete g.selected),
                            "canvas" === C && R)
                        ) {
                            if ("2d" === e.__context)
                                !(function (e) {
                                    let t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let r = 0; r < e.width; r += 50)
                                        for (let n = 0; n < e.height; n += 50) {
                                            let a = t.getImageData;
                                            if (
                                                new Uint32Array(
                                                    (ea in a ? a[ea] : a).call(
                                                        t,
                                                        r,
                                                        n,
                                                        Math.min(50, e.width - r),
                                                        Math.min(50, e.height - n),
                                                    ).data.buffer,
                                                ).some((e) => 0 !== e)
                                            )
                                                return !1;
                                        }
                                    return !0;
                                })(e) && (g.rr_dataURL = e.toDataURL(d.type, d.quality));
                            else if (!("__context" in e)) {
                                let t = e.toDataURL(d.type, d.quality),
                                    r = document.createElement("canvas");
                                (r.width = e.width),
                                    (r.height = e.height),
                                    t !== r.toDataURL(d.type, d.quality) && (g.rr_dataURL = t);
                            }
                        }
                        if ("img" === C && I) {
                            n || (a = (n = i.createElement("canvas")).getContext("2d"));
                            let t = e.crossOrigin;
                            e.crossOrigin = "anonymous";
                            let r = () => {
                                e.removeEventListener("load", r);
                                try {
                                    (n.width = e.naturalWidth),
                                        (n.height = e.naturalHeight),
                                        a.drawImage(e, 0, 0),
                                        (g.rr_dataURL = n.toDataURL(d.type, d.quality));
                                } catch (t) {
                                    console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`);
                                }
                                t ? (g.crossOrigin = t) : e.removeAttribute("crossorigin");
                            };
                            e.complete && 0 !== e.naturalWidth ? r() : e.addEventListener("load", r);
                        }
                        if (
                            (("audio" === C || "video" === C) &&
                                ((g.rr_mediaState = e.paused ? "paused" : "played"),
                                (g.rr_mediaCurrentTime = e.currentTime)),
                            !A &&
                                (e.scrollLeft && (g.rr_scrollLeft = e.scrollLeft),
                                e.scrollTop && (g.rr_scrollTop = e.scrollTop)),
                            L)
                        ) {
                            let { width: t, height: r } = e.getBoundingClientRect();
                            g = {
                                class: g.class,
                                rr_width: `${t}px`,
                                rr_height: `${r}px`,
                            };
                        }
                        "iframe" !== C || T(g.src) || (L || e.contentDocument || (g.rr_src = g.src), delete g.src);
                        try {
                            customElements.get(C) && (r = !0);
                        } catch (e) {}
                        return {
                            type: p.Element,
                            tagName: C,
                            attributes: g,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: L,
                            rootId: N,
                            isCustom: r,
                        };
                    })(e, {
                        doc: r,
                        blockClass: o,
                        blockSelector: _,
                        unblockSelector: s,
                        inlineStylesheet: R,
                        maskAttributeFn: E,
                        maskInputOptions: T,
                        maskInputFn: N,
                        dataURLOptions: f,
                        inlineImages: O,
                        recordCanvas: h,
                        keepIframeSrcFn: D,
                        newlyAddedElement: S,
                        rootId: L,
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: d,
                        unmaskTextSelector: I,
                    });
                case e.TEXT_NODE:
                    return (function (e, t) {
                        let {
                                maskAllText: r,
                                maskTextClass: n,
                                unmaskTextClass: a,
                                maskTextSelector: i,
                                unmaskTextSelector: o,
                                maskTextFn: _,
                                maskInputOptions: s,
                                maskInputFn: c,
                                rootId: E,
                            } = t,
                            l = e.parentNode && e.parentNode.tagName,
                            u = e.textContent,
                            d = "STYLE" === l || void 0,
                            I = "SCRIPT" === l || void 0,
                            R = "TEXTAREA" === l || void 0;
                        if (d && u) {
                            try {
                                e.nextSibling ||
                                    e.previousSibling ||
                                    ($([
                                        e,
                                        "access",
                                        (e) => e.parentNode,
                                        "access",
                                        (e) => e.sheet,
                                        "optionalAccess",
                                        (e) => e.cssRules,
                                    ]) &&
                                        (u = J(e.parentNode.sheet)));
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                            }
                            u = eN(u, eD());
                        }
                        I && (u = "SCRIPT_PLACEHOLDER");
                        let T = em(e, n, i, a, o, r);
                        return (
                            d || I || R || !u || !T || (u = _ ? _(u, e.parentElement) : u.replace(/[\S]/g, "*")),
                            R && u && (s.textarea || T) && (u = c ? c(u, e.parentNode) : u.replace(/[\S]/g, "*")),
                            "OPTION" === l &&
                                u &&
                                (u = et({
                                    isMasked: em(
                                        e,
                                        n,
                                        i,
                                        a,
                                        o,
                                        ee({
                                            type: null,
                                            tagName: l,
                                            maskInputOptions: s,
                                        }),
                                    ),
                                    element: e,
                                    value: u,
                                    maskInputFn: c,
                                })),
                            {
                                type: p.Text,
                                textContent: u || "",
                                isStyle: d,
                                rootId: E,
                            }
                        );
                    })(e, {
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: d,
                        unmaskTextSelector: I,
                        maskTextFn: A,
                        maskInputOptions: T,
                        maskInputFn: N,
                        rootId: L,
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: p.CDATA,
                        textContent: "",
                        rootId: L,
                    };
                case e.COMMENT_NODE:
                    return {
                        type: p.Comment,
                        textContent: e.textContent || "",
                        rootId: L,
                    };
                default:
                    return !1;
            }
        })(e, {
            doc: i,
            mirror: o,
            blockClass: _,
            blockSelector: s,
            maskAllText: E,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: I,
            inlineStylesheet: T,
            maskInputOptions: A,
            maskAttributeFn: N,
            maskTextFn: f,
            maskInputFn: O,
            dataURLOptions: D,
            inlineImages: S,
            recordCanvas: L,
            keepIframeSrcFn: v,
            newlyAddedElement: w,
        });
    if (!M) return console.warn(e, "not serialized"), null;
    r = o.hasNode(e)
        ? o.getId(e)
        : !(function (e, t) {
                if (t.comment && e.type === p.Comment) return !0;
                if (e.type === p.Element) {
                    if (
                        t.script &&
                        ("script" === e.tagName ||
                            ("link" === e.tagName &&
                                ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) &&
                                "script" === e.attributes.as) ||
                            ("link" === e.tagName &&
                                "prefetch" === e.attributes.rel &&
                                "string" == typeof e.attributes.href &&
                                "js" === e_(e.attributes.href)))
                    )
                        return !0;
                    else if (
                        t.headFavicon &&
                        (("link" === e.tagName && "shortcut icon" === e.attributes.rel) ||
                            ("meta" === e.tagName &&
                                (ey(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                    "application-name" === ey(e.attributes.name) ||
                                    "icon" === ey(e.attributes.rel) ||
                                    "apple-touch-icon" === ey(e.attributes.rel) ||
                                    "shortcut icon" === ey(e.attributes.rel))))
                    )
                        return !0;
                    else if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && ey(e.attributes.name).match(/^description|keywords$/)) return !0;
                        else if (
                            t.headMetaSocial &&
                            (ey(e.attributes.property).match(/^(og|twitter|fb):/) ||
                                ey(e.attributes.name).match(/^(og|twitter):/) ||
                                "pinterest" === ey(e.attributes.name))
                        )
                            return !0;
                        else if (
                            t.headMetaRobots &&
                            ("robots" === ey(e.attributes.name) ||
                                "googlebot" === ey(e.attributes.name) ||
                                "bingbot" === ey(e.attributes.name))
                        )
                            return !0;
                        else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                        else if (
                            t.headMetaAuthorship &&
                            ("author" === ey(e.attributes.name) ||
                                "generator" === ey(e.attributes.name) ||
                                "framework" === ey(e.attributes.name) ||
                                "publisher" === ey(e.attributes.name) ||
                                "progid" === ey(e.attributes.name) ||
                                ey(e.attributes.property).match(/^article:/) ||
                                ey(e.attributes.property).match(/^product:/))
                        )
                            return !0;
                        else if (
                            t.headMetaVerification &&
                            ("google-site-verification" === ey(e.attributes.name) ||
                                "yandex-verification" === ey(e.attributes.name) ||
                                "csrf-token" === ey(e.attributes.name) ||
                                "p:domain_verify" === ey(e.attributes.name) ||
                                "verify-v1" === ey(e.attributes.name) ||
                                "verification" === ey(e.attributes.name) ||
                                "shopify-checkout-api-token" === ey(e.attributes.name))
                        )
                            return !0;
                    }
                }
                return !1;
            })(M, h) &&
            (G || M.type !== p.Text || M.isStyle || M.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? eI()
          : -2;
    let b = Object.assign(M, { id: r });
    if ((o.add(e, b), -2 === r)) return null;
    C && C(e);
    let U = !R;
    if (b.type === p.Element) {
        (U = U && !b.needBlock), delete b.needBlock;
        let t = e.shadowRoot;
        t && z(t) && (b.isShadowHost = !0);
    }
    if ((b.type === p.Document || b.type === p.Element) && U) {
        h.headWhitespace && b.type === p.Element && "head" === b.tagName && (G = !1);
        let t = {
            doc: i,
            mirror: o,
            blockClass: _,
            blockSelector: s,
            maskAllText: E,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: I,
            skipChild: R,
            inlineStylesheet: T,
            maskInputOptions: A,
            maskAttributeFn: N,
            maskTextFn: f,
            maskInputFn: O,
            slimDOMOptions: h,
            dataURLOptions: D,
            inlineImages: S,
            recordCanvas: L,
            preserveWhiteSpace: G,
            onSerialize: C,
            onIframeLoad: g,
            iframeLoadTimeout: m,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: P,
            keepIframeSrcFn: v,
        };
        for (let r of Array.from(e.childNodes)) {
            let e = eP(r, t);
            e && b.childNodes.push(e);
        }
        if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
            for (let r of Array.from(e.shadowRoot.childNodes)) {
                let n = eP(r, t);
                n && (z(e.shadowRoot) && (n.isShadow = !0), b.childNodes.push(n));
            }
    }
    return (
        e.parentNode && q(e.parentNode) && z(e.parentNode) && (b.isShadow = !0),
        b.type === p.Element &&
            "iframe" === b.tagName &&
            (function (e, t, r) {
                let n,
                    a = e.contentWindow;
                if (!a) return;
                let i = !1;
                try {
                    n = a.document.readyState;
                } catch (e) {
                    return;
                }
                if ("complete" !== n) {
                    let n = eE(() => {
                        i || (t(), (i = !0));
                    }, r);
                    e.addEventListener("load", () => {
                        el(n), (i = !0), t();
                    });
                    return;
                }
                let o = "about:blank";
                if (a.location.href !== o || e.src === o || "" === e.src)
                    return eE(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t);
            })(
                e,
                () => {
                    let t = e.contentDocument;
                    if (t && g) {
                        let r = eP(t, {
                            doc: t,
                            mirror: o,
                            blockClass: _,
                            blockSelector: s,
                            unblockSelector: c,
                            maskAllText: E,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: d,
                            unmaskTextSelector: I,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: A,
                            maskAttributeFn: N,
                            maskTextFn: f,
                            maskInputFn: O,
                            slimDOMOptions: h,
                            dataURLOptions: D,
                            inlineImages: S,
                            recordCanvas: L,
                            preserveWhiteSpace: G,
                            onSerialize: C,
                            onIframeLoad: g,
                            iframeLoadTimeout: m,
                            onStylesheetLoad: y,
                            stylesheetLoadTimeout: P,
                            keepIframeSrcFn: v,
                        });
                        r && g(e, r);
                    }
                },
                m,
            ),
        b.type === p.Element &&
            "link" === b.tagName &&
            "string" == typeof b.attributes.rel &&
            ("stylesheet" === b.attributes.rel ||
                ("preload" === b.attributes.rel &&
                    "string" == typeof b.attributes.href &&
                    "css" === e_(b.attributes.href))) &&
            (function (e, t, r) {
                let n,
                    a = !1;
                try {
                    n = e.sheet;
                } catch (e) {
                    return;
                }
                if (n) return;
                let i = eE(() => {
                    a || (t(), (a = !0));
                }, r);
                e.addEventListener("load", () => {
                    el(i), (a = !0), t();
                });
            })(
                e,
                () => {
                    if (y) {
                        let t = eP(e, {
                            doc: i,
                            mirror: o,
                            blockClass: _,
                            blockSelector: s,
                            unblockSelector: c,
                            maskAllText: E,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: d,
                            unmaskTextSelector: I,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: A,
                            maskAttributeFn: N,
                            maskTextFn: f,
                            maskInputFn: O,
                            slimDOMOptions: h,
                            dataURLOptions: D,
                            inlineImages: S,
                            recordCanvas: L,
                            preserveWhiteSpace: G,
                            onSerialize: C,
                            onIframeLoad: g,
                            iframeLoadTimeout: m,
                            onStylesheetLoad: y,
                            stylesheetLoadTimeout: P,
                            keepIframeSrcFn: v,
                        });
                        t && y(e, t);
                    }
                },
                P,
            ),
        b
    );
}
function ev(e) {
    let t,
        r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            i = e[n + 1];
        if (((n += 2), ("optionalAccess" === a || "optionalCall" === a) && null == r)) return;
        "access" === a || "optionalAccess" === a
            ? ((t = r), (r = i(r)))
            : ("call" === a || "optionalCall" === a) && ((r = i((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
function ew(e, t, r = document) {
    let n = {
        capture: !0,
        passive: !0,
    };
    return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
}
let eG =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    eM = {
        map: {},
        getId: () => (console.error(eG), -1),
        getNode: () => (console.error(eG), null),
        removeNodeFromMap() {
            console.error(eG);
        },
        has: () => (console.error(eG), !1),
        reset() {
            console.error(eG);
        },
    };
function eb(e, t, r = {}) {
    let n = null,
        a = 0;
    return function (...i) {
        let o = Date.now();
        a || !1 !== r.leading || (a = o);
        let _ = t - (o - a),
            s = this;
        _ <= 0 || _ > t
            ? (n &&
                  ((function (...e) {
                      eZ("clearTimeout")(...e);
                  })(n),
                  (n = null)),
              (a = o),
              e.apply(s, i))
            : n ||
              !1 === r.trailing ||
              (n = eQ(() => {
                  (a = !1 === r.leading ? 0 : Date.now()), (n = null), e.apply(s, i);
              }, _));
    };
}
function eU(e, t, r) {
    try {
        if (!(t in e)) return () => {};
        let n = e[t],
            a = r(n);
        return (
            "function" == typeof a &&
                ((a.prototype = a.prototype || {}),
                Object.defineProperties(a, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: n,
                    },
                })),
            (e[t] = a),
            () => {
                e[t] = n;
            }
        );
    } catch (e) {
        return () => {};
    }
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (eM = new Proxy(eM, { get: (e, t, r) => ("map" === t && console.error(eG), Reflect.get(e, t, r)) }));
let eH = Date.now;
function eK(e) {
    let t = e.document;
    return {
        left: t.scrollingElement
            ? t.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : ev([t, "optionalAccess", (e) => e.documentElement, "access", (e) => e.scrollLeft]) ||
                ev([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollLeft,
                ]) ||
                ev([t, "optionalAccess", (e) => e.body, "optionalAccess", (e) => e.scrollLeft]) ||
                0,
        top: t.scrollingElement
            ? t.scrollingElement.scrollTop
            : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : ev([t, "optionalAccess", (e) => e.documentElement, "access", (e) => e.scrollTop]) ||
                ev([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollTop,
                ]) ||
                ev([t, "optionalAccess", (e) => e.body, "optionalAccess", (e) => e.scrollTop]) ||
                0,
    };
}
function eB() {
    return (
        window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight)
    );
}
function eW() {
    return (
        window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth)
    );
}
function ek(e) {
    return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function eY(e, t, r, n, a) {
    if (!e) return !1;
    let i = ek(e);
    if (!i) return !1;
    let o = eg(t, r);
    if (!a) {
        let e = n && i.matches(n);
        return o(i) && !e;
    }
    let _ = eC(i, o),
        s = -1;
    return !(_ < 0) && (n && (s = eC(i, eg(null, n))), (_ > -1 && s < 0) || _ < s);
}
function ex(e, t) {
    return -2 === t.getId(e);
}
function eV(e) {
    return !!e.changedTouches;
}
function eF(e, t) {
    return !!("IFRAME" === e.nodeName && t.getMeta(e));
}
function ej(e, t) {
    return !!(
        "LINK" === e.nodeName &&
        e.nodeType === e.ELEMENT_NODE &&
        e.getAttribute &&
        "stylesheet" === e.getAttribute("rel") &&
        t.getMeta(e)
    );
}
function eX(e) {
    return !!ev([e, "optionalAccess", (e) => e.shadowRoot]);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (eH = () => new Date().getTime());
class e$ {
    constructor() {
        (this.id = 1), (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map());
    }
    getId(e) {
        return (0, T.h)(this.styleIDMap.get(e), () => -1);
    }
    has(e) {
        return this.styleIDMap.has(e);
    }
    add(e, t) {
        let r;
        return this.has(e)
            ? this.getId(e)
            : ((r = void 0 === t ? this.id++ : t), this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r);
    }
    getStyle(e) {
        return this.idStyleMap.get(e) || null;
    }
    reset() {
        (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1);
    }
    generateId() {
        return this.id++;
    }
}
function eq(e) {
    let t = null;
    return (
        ev([e, "access", (e) => e.getRootNode, "optionalCall", (e) => e(), "optionalAccess", (e) => e.nodeType]) ===
            Node.DOCUMENT_FRAGMENT_NODE &&
            e.getRootNode().host &&
            (t = e.getRootNode().host),
        t
    );
}
function ez(e) {
    let t = e.ownerDocument;
    return (
        !!t &&
        (t.contains(e) ||
            (function (e) {
                let t = e.ownerDocument;
                if (!t) return !1;
                let r = (function (e) {
                    let t,
                        r = e;
                    for (; (t = eq(r)); ) r = t;
                    return r;
                })(e);
                return t.contains(r);
            })(e))
    );
}
let eJ = {};
function eZ(e) {
    let t = eJ[e];
    if (t) return t;
    let r = window.document,
        n = window[e];
    if (r && "function" == typeof r.createElement)
        try {
            let t = r.createElement("iframe");
            (t.hidden = !0), r.head.appendChild(t);
            let a = t.contentWindow;
            a && a[e] && (n = a[e]), r.head.removeChild(t);
        } catch (e) {}
    return (eJ[e] = n.bind(window));
}
function eQ(...e) {
    return eZ("setTimeout")(...e);
}
var e0 =
        (((E = e0 || {})[(E.DomContentLoaded = 0)] = "DomContentLoaded"),
        (E[(E.Load = 1)] = "Load"),
        (E[(E.FullSnapshot = 2)] = "FullSnapshot"),
        (E[(E.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
        (E[(E.Meta = 4)] = "Meta"),
        (E[(E.Custom = 5)] = "Custom"),
        (E[(E.Plugin = 6)] = "Plugin"),
        E),
    e1 =
        (((l = e1 || {})[(l.Mutation = 0)] = "Mutation"),
        (l[(l.MouseMove = 1)] = "MouseMove"),
        (l[(l.MouseInteraction = 2)] = "MouseInteraction"),
        (l[(l.Scroll = 3)] = "Scroll"),
        (l[(l.ViewportResize = 4)] = "ViewportResize"),
        (l[(l.Input = 5)] = "Input"),
        (l[(l.TouchMove = 6)] = "TouchMove"),
        (l[(l.MediaInteraction = 7)] = "MediaInteraction"),
        (l[(l.StyleSheetRule = 8)] = "StyleSheetRule"),
        (l[(l.CanvasMutation = 9)] = "CanvasMutation"),
        (l[(l.Font = 10)] = "Font"),
        (l[(l.Log = 11)] = "Log"),
        (l[(l.Drag = 12)] = "Drag"),
        (l[(l.StyleDeclaration = 13)] = "StyleDeclaration"),
        (l[(l.Selection = 14)] = "Selection"),
        (l[(l.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
        (l[(l.CustomElement = 16)] = "CustomElement"),
        l),
    e2 =
        (((u = e2 || {})[(u.MouseUp = 0)] = "MouseUp"),
        (u[(u.MouseDown = 1)] = "MouseDown"),
        (u[(u.Click = 2)] = "Click"),
        (u[(u.ContextMenu = 3)] = "ContextMenu"),
        (u[(u.DblClick = 4)] = "DblClick"),
        (u[(u.Focus = 5)] = "Focus"),
        (u[(u.Blur = 6)] = "Blur"),
        (u[(u.TouchStart = 7)] = "TouchStart"),
        (u[(u.TouchMove_Departed = 8)] = "TouchMove_Departed"),
        (u[(u.TouchEnd = 9)] = "TouchEnd"),
        (u[(u.TouchCancel = 10)] = "TouchCancel"),
        u),
    e3 = (((d = e3 || {})[(d.Mouse = 0)] = "Mouse"), (d[(d.Pen = 1)] = "Pen"), (d[(d.Touch = 2)] = "Touch"), d);
class e5 {
    constructor() {
        (this.length = 0), (this.head = null), (this.tail = null);
    }
    get(e) {
        if (e >= this.length) throw Error("Position outside of list range");
        let t = this.head;
        for (let r = 0; r < e; r++)
            t =
                (function (e) {
                    let t,
                        r = e[0],
                        n = 1;
                    for (; n < e.length; ) {
                        let a = e[n],
                            i = e[n + 1];
                        if (((n += 2), ("optionalAccess" === a || "optionalCall" === a) && null == r)) return;
                        "access" === a || "optionalAccess" === a
                            ? ((t = r), (r = i(r)))
                            : ("call" === a || "optionalCall" === a) &&
                              ((r = i((...e) => r.call(t, ...e))), (t = void 0));
                    }
                    return r;
                })([t, "optionalAccess", (e) => e.next]) || null;
        return t;
    }
    addNode(e) {
        let t = {
            value: e,
            previous: null,
            next: null,
        };
        if (((e.__ln = t), e.previousSibling && "__ln" in e.previousSibling)) {
            let r = e.previousSibling.__ln.next;
            (t.next = r),
                (t.previous = e.previousSibling.__ln),
                (e.previousSibling.__ln.next = t),
                r && (r.previous = t);
        } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
            let r = e.nextSibling.__ln.previous;
            (t.previous = r), (t.next = e.nextSibling.__ln), (e.nextSibling.__ln.previous = t), r && (r.next = t);
        } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t);
        null === t.next && (this.tail = t), this.length++;
    }
    removeNode(e) {
        let t = e.__ln;
        this.head &&
            (t.previous
                ? ((t.previous.next = t.next), t.next ? (t.next.previous = t.previous) : (this.tail = t.previous))
                : ((this.head = t.next), this.head ? (this.head.previous = null) : (this.tail = null)),
            e.__ln && delete e.__ln,
            this.length--);
    }
}
let e6 = (e, t) => `${e}@${t}`;
class e4 {
    constructor() {
        (this.frozen = !1),
            (this.locked = !1),
            (this.texts = []),
            (this.attributes = []),
            (this.attributeMap = new WeakMap()),
            (this.removes = []),
            (this.mapRemoves = []),
            (this.movedMap = {}),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.processMutations = (e) => {
                e.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
                if (this.frozen || this.locked) return;
                let e = [],
                    t = new Set(),
                    r = new e5(),
                    n = (e) => {
                        let t = e,
                            r = -2;
                        for (; -2 === r; ) r = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return r;
                    },
                    a = (a) => {
                        if (!a.parentNode || !ez(a)) return;
                        let i = q(a.parentNode) ? this.mirror.getId(eq(a)) : this.mirror.getId(a.parentNode),
                            o = n(a);
                        if (-1 === i || -1 === o) return r.addNode(a);
                        let _ = eP(a, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: (e) => {
                                eF(e, this.mirror) && this.iframeManager.addIframe(e),
                                    ej(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                    eX(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
                            },
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t),
                                    e.contentWindow && this.canvasManager.addWindow(e.contentWindow),
                                    this.shadowDomManager.observeAttachShadow(e);
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t);
                            },
                        });
                        _ &&
                            (e.push({
                                parentId: i,
                                nextId: o,
                                node: _,
                            }),
                            t.add(_.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet)
                    (!e7(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && a(e);
                for (let e of this.addedSet)
                    e9(this.droppedSet, e) || e7(this.removes, e, this.mirror)
                        ? e9(this.movedSet, e)
                            ? a(e)
                            : this.droppedSet.add(e)
                        : a(e);
                let i = null;
                for (; r.length; ) {
                    let e = null;
                    if (i) {
                        let t = this.mirror.getId(i.value.parentNode),
                            r = n(i.value);
                        -1 !== t && -1 !== r && (e = i);
                    }
                    if (!e) {
                        let t = r.tail;
                        for (; t; ) {
                            let r = t;
                            if (((t = t.previous), r)) {
                                let t = this.mirror.getId(r.value.parentNode);
                                if (-1 === n(r.value)) continue;
                                if (-1 !== t) {
                                    e = r;
                                    break;
                                }
                                {
                                    let t = r.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let n = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(n)) {
                                            e = r;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!e) {
                        for (; r.head; ) r.removeNode(r.head.value);
                        break;
                    }
                    (i = e.previous), r.removeNode(e.value), a(e.value);
                }
                let o = {
                    texts: this.texts
                        .map((e) => ({
                            id: this.mirror.getId(e.node),
                            value: e.value,
                        }))
                        .filter((e) => !t.has(e.id))
                        .filter((e) => this.mirror.has(e.id)),
                    attributes: this.attributes
                        .map((e) => {
                            let { attributes: t } = e;
                            if ("string" == typeof t.style) {
                                let r = JSON.stringify(e.styleDiff),
                                    n = JSON.stringify(e._unchangedStyles);
                                r.length < t.style.length &&
                                    (r + n).split("var(").length === t.style.split("var(").length &&
                                    (t.style = e.styleDiff);
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t,
                            };
                        })
                        .filter((e) => !t.has(e.id))
                        .filter((e) => this.mirror.has(e.id)),
                    removes: this.removes,
                    adds: e,
                };
                (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) &&
                    ((this.texts = []),
                    (this.attributes = []),
                    (this.attributeMap = new WeakMap()),
                    (this.removes = []),
                    (this.addedSet = new Set()),
                    (this.movedSet = new Set()),
                    (this.droppedSet = new Set()),
                    (this.movedMap = {}),
                    this.mutationCb(o));
            }),
            (this.processMutation = (e) => {
                if (!ex(e.target, this.mirror))
                    switch (e.type) {
                        case "characterData": {
                            let t = e.target.textContent;
                            eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                t === e.oldValue ||
                                this.texts.push({
                                    value:
                                        em(
                                            e.target,
                                            this.maskTextClass,
                                            this.maskTextSelector,
                                            this.unmaskTextClass,
                                            this.unmaskTextSelector,
                                            this.maskAllText,
                                        ) && t
                                            ? this.maskTextFn
                                                ? this.maskTextFn(t, ek(e.target))
                                                : t.replace(/[\S]/g, "*")
                                            : t,
                                    node: e.target,
                                });
                            break;
                        }
                        case "attributes": {
                            let t = e.target,
                                r = e.attributeName,
                                n = e.target.getAttribute(r);
                            if ("value" === r) {
                                let r = ei(t),
                                    a = t.tagName;
                                n = eo(t, a, r);
                                let i = ee({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: a,
                                    type: r,
                                });
                                n = et({
                                    isMasked: em(
                                        e.target,
                                        this.maskTextClass,
                                        this.maskTextSelector,
                                        this.unmaskTextClass,
                                        this.unmaskTextSelector,
                                        i,
                                    ),
                                    element: t,
                                    value: n,
                                    maskInputFn: this.maskInputFn,
                                });
                            }
                            if (
                                eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                n === e.oldValue
                            )
                                return;
                            let a = this.attributeMap.get(e.target);
                            if ("IFRAME" === t.tagName && "src" === r && !this.keepIframeSrcFn(n))
                                if (t.contentDocument) return;
                                else r = "rr_src";
                            if (
                                (a ||
                                    ((a = {
                                        node: e.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {},
                                    }),
                                    this.attributes.push(a),
                                    this.attributeMap.set(e.target, a)),
                                "type" === r &&
                                    "INPUT" === t.tagName &&
                                    "password" === (e.oldValue || "").toLowerCase() &&
                                    t.setAttribute("data-rr-is-password", "true"),
                                !eL(t.tagName, r) &&
                                    ((a.attributes[r] = eS(this.doc, er(t.tagName), er(r), n, t, this.maskAttributeFn)),
                                    "style" === r))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (e) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let r = this.unattachedDoc.createElement("span");
                                for (let n of (e.oldValue && r.setAttribute("style", e.oldValue),
                                Array.from(t.style))) {
                                    let e = t.style.getPropertyValue(n),
                                        i = t.style.getPropertyPriority(n);
                                    e !== r.style.getPropertyValue(n) || i !== r.style.getPropertyPriority(n)
                                        ? "" === i
                                            ? (a.styleDiff[n] = e)
                                            : (a.styleDiff[n] = [e, i])
                                        : (a._unchangedStyles[n] = [e, i]);
                                }
                                for (let e of Array.from(r.style))
                                    "" === t.style.getPropertyValue(e) && (a.styleDiff[e] = !1);
                            }
                            break;
                        }
                        case "childList":
                            if (eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                                e.removedNodes.forEach((t) => {
                                    let r = this.mirror.getId(t),
                                        n = q(e.target)
                                            ? this.mirror.getId(e.target.host)
                                            : this.mirror.getId(e.target);
                                    eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                        ex(t, this.mirror) ||
                                        -1 === this.mirror.getId(t) ||
                                        (this.addedSet.has(t)
                                            ? (e8(this.addedSet, t), this.droppedSet.add(t))
                                            : (this.addedSet.has(e.target) && -1 === r) ||
                                              (function e(t, r) {
                                                  if (q(t)) return !1;
                                                  let n = r.getId(t);
                                                  return (
                                                      !r.has(n) ||
                                                      ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) &&
                                                          (!t.parentNode || e(t.parentNode, r)))
                                                  );
                                              })(e.target, this.mirror) ||
                                              (this.movedSet.has(t) && this.movedMap[e6(r, n)]
                                                  ? e8(this.movedSet, t)
                                                  : this.removes.push({
                                                        parentId: n,
                                                        id: r,
                                                        isShadow: !!(q(e.target) && z(e.target)) || void 0,
                                                    })),
                                        this.mapRemoves.push(t));
                                });
                    }
            }),
            (this.genAdds = (e, t) => {
                if (
                    !this.processedNodeManager.inOtherBuffer(e, this) &&
                    !(this.addedSet.has(e) || this.movedSet.has(e))
                ) {
                    if (this.mirror.hasNode(e)) {
                        if (ex(e, this.mirror)) return;
                        this.movedSet.add(e);
                        let r = null;
                        t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                            r && -1 !== r && (this.movedMap[e6(this.mirror.getId(e), r)] = !0);
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    !eY(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                        (e.childNodes.forEach((e) => this.genAdds(e)),
                        eX(e) &&
                            e.shadowRoot.childNodes.forEach((t) => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e);
                            }));
                }
            });
    }
    init(e) {
        [
            "mutationCb",
            "blockClass",
            "blockSelector",
            "unblockSelector",
            "maskAllText",
            "maskTextClass",
            "unmaskTextClass",
            "maskTextSelector",
            "unmaskTextSelector",
            "inlineStylesheet",
            "maskInputOptions",
            "maskAttributeFn",
            "maskTextFn",
            "maskInputFn",
            "keepIframeSrcFn",
            "recordCanvas",
            "inlineImages",
            "slimDOMOptions",
            "dataURLOptions",
            "doc",
            "mirror",
            "iframeManager",
            "stylesheetManager",
            "shadowDomManager",
            "canvasManager",
            "processedNodeManager",
        ].forEach((t) => {
            this[t] = e[t];
        });
    }
    freeze() {
        (this.frozen = !0), this.canvasManager.freeze();
    }
    unfreeze() {
        (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
        return this.frozen;
    }
    lock() {
        (this.locked = !0), this.canvasManager.lock();
    }
    unlock() {
        (this.locked = !1), this.canvasManager.unlock(), this.emit();
    }
    reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset();
    }
}
function e8(e, t) {
    e.delete(t), t.childNodes.forEach((t) => e8(e, t));
}
function e7(e, t, r) {
    return (
        0 !== e.length &&
        (function e(t, r, n) {
            let { parentNode: a } = r;
            if (!a) return !1;
            let i = n.getId(a);
            return !!t.some((e) => e.id === i) || e(t, a, n);
        })(e, t, r)
    );
}
function e9(e, t) {
    return (
        0 !== e.size &&
        (function e(t, r) {
            let { parentNode: n } = r;
            return !!n && (!!t.has(n) || e(t, n));
        })(e, t)
    );
}
let te = (e) =>
    i
        ? (...t) => {
              try {
                  return e(...t);
              } catch (e) {
                  if (i && !0 === i(e)) return () => {};
                  throw e;
              }
          }
        : e;
function tt(e) {
    let t,
        r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            i = e[n + 1];
        if (((n += 2), ("optionalAccess" === a || "optionalCall" === a) && null == r)) return;
        "access" === a || "optionalAccess" === a
            ? ((t = r), (r = i(r)))
            : ("call" === a || "optionalCall" === a) && ((r = i((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
let tr = [];
function tn(e) {
    try {
        if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
        } else if ("path" in e && e.path.length) return e.path[0];
    } catch (e) {}
    return e && e.target;
}
function ta(e, t) {
    let r = new e4();
    tr.push(r), r.init(e);
    let n = window.MutationObserver || window.__rrMutationObserver,
        a = tt([
            window,
            "optionalAccess",
            (e) => e.Zone,
            "optionalAccess",
            (e) => e.__symbol__,
            "optionalCall",
            (e) => e("MutationObserver"),
        ]);
    a && window[a] && (n = window[a]);
    let i = new n(
        te((t) => {
            (e.onMutation && !1 === e.onMutation(t)) || r.processMutations.bind(r)(t);
        }),
    );
    return (
        i.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
        }),
        i
    );
}
function ti({ scrollCb: e, doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: i, sampling: o }) {
    return ew(
        "scroll",
        te(
            eb(
                te((o) => {
                    let _ = tn(o);
                    if (!_ || eY(_, n, a, i, !0)) return;
                    let s = r.getId(_);
                    if (_ === t && t.defaultView) {
                        let r = eK(t.defaultView);
                        e({
                            id: s,
                            x: r.left,
                            y: r.top,
                        });
                    } else
                        e({
                            id: s,
                            x: _.scrollLeft,
                            y: _.scrollTop,
                        });
                }),
                o.scroll || 100,
            ),
        ),
        t,
    );
}
let to = ["INPUT", "TEXTAREA", "SELECT"],
    t_ = new WeakMap();
function ts(e) {
    var t = [];
    if (
        (tu("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule) ||
        (tu("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
        (tu("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule) ||
        (tu("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
    ) {
        let r = Array.from(e.parentRule.cssRules).indexOf(e);
        t.unshift(r);
    } else if (e.parentStyleSheet) {
        let r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
        t.unshift(r);
    }
    return t;
}
function tc(e, t, r) {
    let n, a;
    return e
        ? (e.ownerNode ? (n = t.getId(e.ownerNode)) : (a = r.getId(e)),
          {
              styleId: a,
              id: n,
          })
        : {};
}
function tE({ mirror: e, stylesheetManager: t }, r) {
    let n = null;
    n = "#document" === r.nodeName ? e.getId(r) : e.getId(r.host);
    let a =
            "#document" === r.nodeName
                ? tt([r, "access", (e) => e.defaultView, "optionalAccess", (e) => e.Document])
                : tt([
                      r,
                      "access",
                      (e) => e.ownerDocument,
                      "optionalAccess",
                      (e) => e.defaultView,
                      "optionalAccess",
                      (e) => e.ShadowRoot,
                  ]),
        i = tt([a, "optionalAccess", (e) => e.prototype])
            ? Object.getOwnPropertyDescriptor(tt([a, "optionalAccess", (e) => e.prototype]), "adoptedStyleSheets")
            : void 0;
    return null !== n && -1 !== n && a && i
        ? (Object.defineProperty(r, "adoptedStyleSheets", {
              configurable: i.configurable,
              enumerable: i.enumerable,
              get() {
                  return tt([i, "access", (e) => e.get, "optionalAccess", (e) => e.call, "call", (e) => e(this)]);
              },
              set(e) {
                  let r = tt([i, "access", (e) => e.set, "optionalAccess", (e) => e.call, "call", (t) => t(this, e)]);
                  if (null !== n && -1 !== n)
                      try {
                          t.adoptStyleSheets(e, n);
                      } catch (e) {}
                  return r;
              },
          }),
          te(() => {
              Object.defineProperty(r, "adoptedStyleSheets", {
                  configurable: i.configurable,
                  enumerable: i.enumerable,
                  get: i.get,
                  set: i.set,
              });
          }))
        : () => {};
}
function tl(e, t = {}) {
    let r,
        n = e.doc.defaultView;
    if (!n) return () => {};
    e.recordDOM && (r = ta(e, e.doc));
    let a = (function ({ mousemoveCb: e, sampling: t, doc: r, mirror: n }) {
            let a;
            if (!1 === t.mousemove) return () => {};
            let i = "number" == typeof t.mousemove ? t.mousemove : 50,
                o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                _ = [],
                s = eb(
                    te((t) => {
                        let r = Date.now() - a;
                        e(
                            _.map((e) => ((e.timeOffset -= r), e)),
                            t,
                        ),
                            (_ = []),
                            (a = null);
                    }),
                    o,
                ),
                c = te(
                    eb(
                        te((e) => {
                            let t = tn(e),
                                { clientX: r, clientY: i } = eV(e) ? e.changedTouches[0] : e;
                            a || (a = eH()),
                                _.push({
                                    x: r,
                                    y: i,
                                    id: n.getId(t),
                                    timeOffset: eH() - a,
                                }),
                                s(
                                    "undefined" != typeof DragEvent && e instanceof DragEvent
                                        ? e1.Drag
                                        : e instanceof MouseEvent
                                          ? e1.MouseMove
                                          : e1.TouchMove,
                                );
                        }),
                        i,
                        { trailing: !1 },
                    ),
                ),
                E = [ew("mousemove", c, r), ew("touchmove", c, r), ew("drag", c, r)];
            return te(() => {
                E.forEach((e) => e());
            });
        })(e),
        i = (function ({
            mouseInteractionCb: e,
            doc: t,
            mirror: r,
            blockClass: n,
            blockSelector: a,
            unblockSelector: i,
            sampling: o,
        }) {
            if (!1 === o.mouseInteraction) return () => {};
            let _ = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                s = [],
                c = null;
            return (
                Object.keys(e2)
                    .filter((e) => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== _[e])
                    .forEach((o) => {
                        let _ = er(o),
                            E = (t) => {
                                let _ = tn(t);
                                if (eY(_, n, a, i, !0)) return;
                                let s = null,
                                    E = o;
                                if ("pointerType" in t) {
                                    switch (t.pointerType) {
                                        case "mouse":
                                            s = e3.Mouse;
                                            break;
                                        case "touch":
                                            s = e3.Touch;
                                            break;
                                        case "pen":
                                            s = e3.Pen;
                                    }
                                    s === e3.Touch
                                        ? e2[o] === e2.MouseDown
                                            ? (E = "TouchStart")
                                            : e2[o] === e2.MouseUp && (E = "TouchEnd")
                                        : e3.Pen;
                                } else eV(t) && (s = e3.Touch);
                                null !== s
                                    ? ((c = s),
                                      ((E.startsWith("Touch") && s === e3.Touch) ||
                                          (E.startsWith("Mouse") && s === e3.Mouse)) &&
                                          (s = null))
                                    : e2[o] === e2.Click && ((s = c), (c = null));
                                let l = eV(t) ? t.changedTouches[0] : t;
                                if (!l) return;
                                let u = r.getId(_),
                                    { clientX: d, clientY: I } = l;
                                te(e)({
                                    type: e2[E],
                                    id: u,
                                    x: d,
                                    y: I,
                                    ...(null !== s && { pointerType: s }),
                                });
                            };
                        if (window.PointerEvent)
                            switch (e2[o]) {
                                case e2.MouseDown:
                                case e2.MouseUp:
                                    _ = _.replace("mouse", "pointer");
                                    break;
                                case e2.TouchStart:
                                case e2.TouchEnd:
                                    return;
                            }
                        s.push(ew(_, E, t));
                    }),
                te(() => {
                    s.forEach((e) => e());
                })
            );
        })(e),
        o = ti(e),
        _ = (function ({ viewportResizeCb: e }, { win: t }) {
            let r = -1,
                n = -1;
            return ew(
                "resize",
                te(
                    eb(
                        te(() => {
                            let t = eB(),
                                a = eW();
                            (r !== t || n !== a) &&
                                (e({
                                    width: Number(a),
                                    height: Number(t),
                                }),
                                (r = t),
                                (n = a));
                        }),
                        200,
                    ),
                ),
                t,
            );
        })(e, { win: n }),
        s = (function ({
            inputCb: e,
            doc: t,
            mirror: r,
            blockClass: n,
            blockSelector: a,
            unblockSelector: i,
            ignoreClass: o,
            ignoreSelector: _,
            maskInputOptions: s,
            maskInputFn: c,
            sampling: E,
            userTriggeredOnInput: l,
            maskTextClass: u,
            unmaskTextClass: d,
            maskTextSelector: I,
            unmaskTextSelector: p,
        }) {
            function R(e) {
                let r = tn(e),
                    E = e.isTrusted,
                    R = r && en(r.tagName);
                if (("OPTION" === R && (r = r.parentElement), !r || !R || 0 > to.indexOf(R) || eY(r, n, a, i, !0)))
                    return;
                let A = r;
                if (A.classList.contains(o) || (_ && A.matches(_))) return;
                let N = ei(r),
                    f = eo(A, R, N),
                    O = !1,
                    h = ee({
                        maskInputOptions: s,
                        tagName: R,
                        type: N,
                    }),
                    D = em(r, u, I, d, p, h);
                ("radio" === N || "checkbox" === N) && (O = r.checked),
                    (f = et({
                        isMasked: D,
                        element: r,
                        value: f,
                        maskInputFn: c,
                    })),
                    T(
                        r,
                        l
                            ? {
                                  text: f,
                                  isChecked: O,
                                  userTriggered: E,
                              }
                            : {
                                  text: f,
                                  isChecked: O,
                              },
                    );
                let S = r.name;
                "radio" === N &&
                    S &&
                    O &&
                    t.querySelectorAll(`input[type="radio"][name="${S}"]`).forEach((e) => {
                        if (e !== r) {
                            let t = et({
                                isMasked: D,
                                element: e,
                                value: eo(e, R, N),
                                maskInputFn: c,
                            });
                            T(
                                e,
                                l
                                    ? {
                                          text: t,
                                          isChecked: !O,
                                          userTriggered: !1,
                                      }
                                    : {
                                          text: t,
                                          isChecked: !O,
                                      },
                            );
                        }
                    });
            }
            function T(t, n) {
                let a = t_.get(t);
                if (!a || a.text !== n.text || a.isChecked !== n.isChecked) {
                    t_.set(t, n);
                    let a = r.getId(t);
                    te(e)({
                        ...n,
                        id: a,
                    });
                }
            }
            let A = ("last" === E.input ? ["change"] : ["input", "change"]).map((e) => ew(e, te(R), t)),
                N = t.defaultView;
            if (!N)
                return () => {
                    A.forEach((e) => e());
                };
            let f = N.Object.getOwnPropertyDescriptor(N.HTMLInputElement.prototype, "value"),
                O = [
                    [N.HTMLInputElement.prototype, "value"],
                    [N.HTMLInputElement.prototype, "checked"],
                    [N.HTMLSelectElement.prototype, "value"],
                    [N.HTMLTextAreaElement.prototype, "value"],
                    [N.HTMLSelectElement.prototype, "selectedIndex"],
                    [N.HTMLOptionElement.prototype, "selected"],
                ];
            return (
                f &&
                    f.set &&
                    A.push(
                        ...O.map((e) =>
                            (function e(t, r, n, a, i = window) {
                                let o = i.Object.getOwnPropertyDescriptor(t, r);
                                return (
                                    i.Object.defineProperty(
                                        t,
                                        r,
                                        a
                                            ? n
                                            : {
                                                  set(e) {
                                                      eQ(() => {
                                                          n.set.call(this, e);
                                                      }, 0),
                                                          o && o.set && o.set.call(this, e);
                                                  },
                                              },
                                    ),
                                    () => e(t, r, o || {}, !0)
                                );
                            })(
                                e[0],
                                e[1],
                                {
                                    set() {
                                        te(R)({
                                            target: this,
                                            isTrusted: !1,
                                        });
                                    },
                                },
                                !1,
                                N,
                            ),
                        ),
                    ),
                te(() => {
                    A.forEach((e) => e());
                })
            );
        })(e),
        c = (function ({
            mediaInteractionCb: e,
            blockClass: t,
            blockSelector: r,
            unblockSelector: n,
            mirror: a,
            sampling: i,
            doc: o,
        }) {
            let _ = te((o) =>
                    eb(
                        te((i) => {
                            let _ = tn(i);
                            if (!_ || eY(_, t, r, n, !0)) return;
                            let { currentTime: s, volume: c, muted: E, playbackRate: l } = _;
                            e({
                                type: o,
                                id: a.getId(_),
                                currentTime: s,
                                volume: c,
                                muted: E,
                                playbackRate: l,
                            });
                        }),
                        i.media || 500,
                    ),
                ),
                s = [
                    ew("play", _(0), o),
                    ew("pause", _(1), o),
                    ew("seeked", _(2), o),
                    ew("volumechange", _(3), o),
                    ew("ratechange", _(4), o),
                ];
            return te(() => {
                s.forEach((e) => e());
            });
        })(e),
        E = () => {},
        l = () => {},
        u = () => {},
        d = () => {};
    e.recordDOM &&
        ((E = (function ({ styleSheetRuleCb: e, mirror: t, stylesheetManager: r }, { win: n }) {
            let a, i;
            if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
            let o = n.CSSStyleSheet.prototype.insertRule;
            n.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: te((n, a, i) => {
                    let [o, _] = i,
                        { id: s, styleId: c } = tc(a, t, r.styleMirror);
                    return (
                        ((s && -1 !== s) || (c && -1 !== c)) &&
                            e({
                                id: s,
                                styleId: c,
                                adds: [
                                    {
                                        rule: o,
                                        index: _,
                                    },
                                ],
                            }),
                        n.apply(a, i)
                    );
                }),
            });
            let _ = n.CSSStyleSheet.prototype.deleteRule;
            (n.CSSStyleSheet.prototype.deleteRule = new Proxy(_, {
                apply: te((n, a, i) => {
                    let [o] = i,
                        { id: _, styleId: s } = tc(a, t, r.styleMirror);
                    return (
                        ((_ && -1 !== _) || (s && -1 !== s)) &&
                            e({
                                id: _,
                                styleId: s,
                                removes: [{ index: o }],
                            }),
                        n.apply(a, i)
                    );
                }),
            })),
                n.CSSStyleSheet.prototype.replace &&
                    ((a = n.CSSStyleSheet.prototype.replace),
                    (n.CSSStyleSheet.prototype.replace = new Proxy(a, {
                        apply: te((n, a, i) => {
                            let [o] = i,
                                { id: _, styleId: s } = tc(a, t, r.styleMirror);
                            return (
                                ((_ && -1 !== _) || (s && -1 !== s)) &&
                                    e({
                                        id: _,
                                        styleId: s,
                                        replace: o,
                                    }),
                                n.apply(a, i)
                            );
                        }),
                    }))),
                n.CSSStyleSheet.prototype.replaceSync &&
                    ((i = n.CSSStyleSheet.prototype.replaceSync),
                    (n.CSSStyleSheet.prototype.replaceSync = new Proxy(i, {
                        apply: te((n, a, i) => {
                            let [o] = i,
                                { id: _, styleId: s } = tc(a, t, r.styleMirror);
                            return (
                                ((_ && -1 !== _) || (s && -1 !== s)) &&
                                    e({
                                        id: _,
                                        styleId: s,
                                        replaceSync: o,
                                    }),
                                n.apply(a, i)
                            );
                        }),
                    })));
            let s = {};
            td("CSSGroupingRule")
                ? (s.CSSGroupingRule = n.CSSGroupingRule)
                : (td("CSSMediaRule") && (s.CSSMediaRule = n.CSSMediaRule),
                  td("CSSConditionRule") && (s.CSSConditionRule = n.CSSConditionRule),
                  td("CSSSupportsRule") && (s.CSSSupportsRule = n.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(s).forEach(([n, a]) => {
                    (c[n] = {
                        insertRule: a.prototype.insertRule,
                        deleteRule: a.prototype.deleteRule,
                    }),
                        (a.prototype.insertRule = new Proxy(c[n].insertRule, {
                            apply: te((n, a, i) => {
                                let [o, _] = i,
                                    { id: s, styleId: c } = tc(a.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((s && -1 !== s) || (c && -1 !== c)) &&
                                        e({
                                            id: s,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...ts(a), _ || 0],
                                                },
                                            ],
                                        }),
                                    n.apply(a, i)
                                );
                            }),
                        })),
                        (a.prototype.deleteRule = new Proxy(c[n].deleteRule, {
                            apply: te((n, a, i) => {
                                let [o] = i,
                                    { id: _, styleId: s } = tc(a.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((_ && -1 !== _) || (s && -1 !== s)) &&
                                        e({
                                            id: _,
                                            styleId: s,
                                            removes: [
                                                {
                                                    index: [...ts(a), o],
                                                },
                                            ],
                                        }),
                                    n.apply(a, i)
                                );
                            }),
                        }));
                }),
                te(() => {
                    (n.CSSStyleSheet.prototype.insertRule = o),
                        (n.CSSStyleSheet.prototype.deleteRule = _),
                        a && (n.CSSStyleSheet.prototype.replace = a),
                        i && (n.CSSStyleSheet.prototype.replaceSync = i),
                        Object.entries(s).forEach(([e, t]) => {
                            (t.prototype.insertRule = c[e].insertRule), (t.prototype.deleteRule = c[e].deleteRule);
                        });
                })
            );
        })(e, { win: n })),
        (l = tE(e, e.doc)),
        (u = (function (
            { styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: r, stylesheetManager: n },
            { win: a },
        ) {
            let i = a.CSSStyleDeclaration.prototype.setProperty;
            a.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                apply: te((a, o, _) => {
                    let [s, c, E] = _;
                    if (r.has(s)) return i.apply(o, [s, c, E]);
                    let { id: l, styleId: u } = tc(
                        tt([o, "access", (e) => e.parentRule, "optionalAccess", (e) => e.parentStyleSheet]),
                        t,
                        n.styleMirror,
                    );
                    return (
                        ((l && -1 !== l) || (u && -1 !== u)) &&
                            e({
                                id: l,
                                styleId: u,
                                set: {
                                    property: s,
                                    value: c,
                                    priority: E,
                                },
                                index: ts(o.parentRule),
                            }),
                        a.apply(o, _)
                    );
                }),
            });
            let o = a.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: te((a, i, _) => {
                        let [s] = _;
                        if (r.has(s)) return o.apply(i, [s]);
                        let { id: c, styleId: E } = tc(
                            tt([i, "access", (e) => e.parentRule, "optionalAccess", (e) => e.parentStyleSheet]),
                            t,
                            n.styleMirror,
                        );
                        return (
                            ((c && -1 !== c) || (E && -1 !== E)) &&
                                e({
                                    id: c,
                                    styleId: E,
                                    remove: { property: s },
                                    index: ts(i.parentRule),
                                }),
                            a.apply(i, _)
                        );
                    }),
                })),
                te(() => {
                    (a.CSSStyleDeclaration.prototype.setProperty = i),
                        (a.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(e, { win: n })),
        e.collectFonts &&
            (d = (function ({ fontCb: e, doc: t }) {
                let r = t.defaultView;
                if (!r) return () => {};
                let n = [],
                    a = new WeakMap(),
                    i = r.FontFace;
                r.FontFace = function (e, t, r) {
                    let n = new i(e, t, r);
                    return (
                        a.set(n, {
                            family: e,
                            buffer: "string" != typeof t,
                            descriptors: r,
                            fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))),
                        }),
                        n
                    );
                };
                let o = eU(t.fonts, "add", function (t) {
                    return function (r) {
                        return (
                            eQ(
                                te(() => {
                                    let t = a.get(r);
                                    t && (e(t), a.delete(r));
                                }),
                                0,
                            ),
                            t.apply(this, [r])
                        );
                    };
                });
                return (
                    n.push(() => {
                        r.FontFace = i;
                    }),
                    n.push(o),
                    te(() => {
                        n.forEach((e) => e());
                    })
                );
            })(e)));
    let I = (function (e) {
            let { doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: i, selectionCb: o } = e,
                _ = !0,
                s = te(() => {
                    let e = t.getSelection();
                    if (!e || (_ && tt([e, "optionalAccess", (e) => e.isCollapsed]))) return;
                    _ = e.isCollapsed || !1;
                    let s = [],
                        c = e.rangeCount || 0;
                    for (let t = 0; t < c; t++) {
                        let { startContainer: o, startOffset: _, endContainer: c, endOffset: E } = e.getRangeAt(t);
                        eY(o, n, a, i, !0) ||
                            eY(c, n, a, i, !0) ||
                            s.push({
                                start: r.getId(o),
                                startOffset: _,
                                end: r.getId(c),
                                endOffset: E,
                            });
                    }
                    o({ ranges: s });
                });
            return s(), ew("selectionchange", s);
        })(e),
        p = (function ({ doc: e, customElementCb: t }) {
            let r = e.defaultView;
            return r && r.customElements
                ? eU(r.customElements, "define", function (e) {
                      return function (r, n, a) {
                          try {
                              t({ define: { name: r } });
                          } catch (e) {}
                          return e.apply(this, [r, n, a]);
                      };
                  })
                : () => {};
        })(e),
        R = [];
    for (let t of e.plugins) R.push(t.observer(t.callback, n, t.options));
    return te(() => {
        tr.forEach((e) => e.reset()),
            tt([r, "optionalAccess", (e) => e.disconnect, "call", (e) => e()]),
            a(),
            i(),
            o(),
            _(),
            s(),
            c(),
            E(),
            l(),
            u(),
            d(),
            I(),
            p(),
            R.forEach((e) => e());
    });
}
function tu(e) {
    return void 0 !== window[e];
}
function td(e) {
    return !!(
        void 0 !== window[e] &&
        window[e].prototype &&
        "insertRule" in window[e].prototype &&
        "deleteRule" in window[e].prototype
    );
}
class tI {
    constructor(e) {
        (this.generateIdFn = e),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(e, t, r, n) {
        let a = r || this.getIdToRemoteIdMap(e),
            i = n || this.getRemoteIdToIdMap(e),
            o = a.get(t);
        return o || ((o = this.generateIdFn()), a.set(t, o), i.set(o, t)), o;
    }
    getIds(e, t) {
        let r = this.getIdToRemoteIdMap(e),
            n = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getId(e, t, r, n));
    }
    getRemoteId(e, t, r) {
        let n = r || this.getRemoteIdToIdMap(e);
        if ("number" != typeof t) return t;
        let a = n.get(t);
        return a || -1;
    }
    getRemoteIds(e, t) {
        let r = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getRemoteId(e, t, r));
    }
    reset(e) {
        if (!e) {
            (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
            return;
        }
        this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
        let t = this.iframeIdToRemoteIdMap.get(e);
        return t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t;
    }
    getRemoteIdToIdMap(e) {
        let t = this.iframeRemoteIdToIdMap.get(e);
        return t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t;
    }
}
function tp(e) {
    let t,
        r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            i = e[n + 1];
        if (((n += 2), ("optionalAccess" === a || "optionalCall" === a) && null == r)) return;
        "access" === a || "optionalAccess" === a
            ? ((t = r), (r = i(r)))
            : ("call" === a || "optionalCall" === a) && ((r = i((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
class tR {
    constructor() {
        (this.crossOriginIframeMirror = new tI(eI)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class tT {
    constructor(e) {
        (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new tI(eI)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = e.mutationCb),
            (this.wrappedEmit = e.wrappedEmit),
            (this.stylesheetManager = e.stylesheetManager),
            (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new tI(
                this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror),
            )),
            (this.mirror = e.mirror),
            this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(e) {
        this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
    }
    addLoadListener(e) {
        this.loadListener = e;
    }
    attachIframe(e, t) {
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t,
                },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
        }),
            tp([this, "access", (e) => e.loadListener, "optionalCall", (t) => t(e)]),
            e.contentDocument &&
                e.contentDocument.adoptedStyleSheets &&
                e.contentDocument.adoptedStyleSheets.length > 0 &&
                this.stylesheetManager.adoptStyleSheets(
                    e.contentDocument.adoptedStyleSheets,
                    this.mirror.getId(e.contentDocument),
                );
    }
    handleMessage(e) {
        if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
        let t = this.crossOriginIframeMap.get(e.source);
        if (!t) return;
        let r = this.transformCrossOriginEvent(t, e.data.event);
        r && this.wrappedEmit(r, e.data.isCheckout);
    }
    transformCrossOriginEvent(e, t) {
        switch (t.type) {
            case e0.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e),
                    this.crossOriginIframeStyleMirror.reset(e),
                    this.replaceIdOnNode(t.data.node, e);
                let r = t.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(e, r),
                    this.patchRootIdOnNode(t.data.node, r),
                    {
                        timestamp: t.timestamp,
                        type: e0.IncrementalSnapshot,
                        data: {
                            source: e1.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node,
                                },
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0,
                        },
                    }
                );
            }
            case e0.Meta:
            case e0.Load:
            case e0.DomContentLoaded:
                break;
            case e0.Plugin:
                return t;
            case e0.Custom:
                return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case e0.IncrementalSnapshot:
                switch (t.data.source) {
                    case e1.Mutation:
                        return (
                            t.data.adds.forEach((t) => {
                                this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                                    this.replaceIdOnNode(t.node, e);
                                let r = this.crossOriginIframeRootIdMap.get(e);
                                r && this.patchRootIdOnNode(t.node, r);
                            }),
                            t.data.removes.forEach((t) => {
                                this.replaceIds(t, e, ["parentId", "id"]);
                            }),
                            t.data.attributes.forEach((t) => {
                                this.replaceIds(t, e, ["id"]);
                            }),
                            t.data.texts.forEach((t) => {
                                this.replaceIds(t, e, ["id"]);
                            }),
                            t
                        );
                    case e1.Drag:
                    case e1.TouchMove:
                    case e1.MouseMove:
                        return (
                            t.data.positions.forEach((t) => {
                                this.replaceIds(t, e, ["id"]);
                            }),
                            t
                        );
                    case e1.ViewportResize:
                        return !1;
                    case e1.MediaInteraction:
                    case e1.MouseInteraction:
                    case e1.Scroll:
                    case e1.CanvasMutation:
                    case e1.Input:
                        return this.replaceIds(t.data, e, ["id"]), t;
                    case e1.StyleSheetRule:
                    case e1.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                    case e1.Font:
                        return t;
                    case e1.Selection:
                        return (
                            t.data.ranges.forEach((t) => {
                                this.replaceIds(t, e, ["start", "end"]);
                            }),
                            t
                        );
                    case e1.AdoptedStyleSheet:
                        return (
                            this.replaceIds(t.data, e, ["id"]),
                            this.replaceStyleIds(t.data, e, ["styleIds"]),
                            tp([
                                t,
                                "access",
                                (e) => e.data,
                                "access",
                                (e) => e.styles,
                                "optionalAccess",
                                (e) => e.forEach,
                                "call",
                                (t) =>
                                    t((t) => {
                                        this.replaceStyleIds(t, e, ["styleId"]);
                                    }),
                            ]),
                            t
                        );
                }
        }
        return !1;
    }
    replace(e, t, r, n) {
        for (let a of n)
            (Array.isArray(t[a]) || "number" == typeof t[a]) &&
                (Array.isArray(t[a]) ? (t[a] = e.getIds(r, t[a])) : (t[a] = e.getId(r, t[a])));
        return t;
    }
    replaceIds(e, t, r) {
        return this.replace(this.crossOriginIframeMirror, e, t, r);
    }
    replaceStyleIds(e, t, r) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, r);
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ["id", "rootId"]),
            "childNodes" in e &&
                e.childNodes.forEach((e) => {
                    this.replaceIdOnNode(e, t);
                });
    }
    patchRootIdOnNode(e, t) {
        e.type === p.Document || e.rootId || (e.rootId = t),
            "childNodes" in e &&
                e.childNodes.forEach((e) => {
                    this.patchRootIdOnNode(e, t);
                });
    }
}
class tA {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class tN {
    constructor(e) {
        (this.shadowDoms = new WeakSet()),
            (this.restoreHandlers = []),
            (this.mutationCb = e.mutationCb),
            (this.scrollCb = e.scrollCb),
            (this.bypassOptions = e.bypassOptions),
            (this.mirror = e.mirror),
            this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(e, t) {
        if (!z(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let r = ta(
            {
                ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
            },
            e,
        );
        this.restoreHandlers.push(() => r.disconnect()),
            this.restoreHandlers.push(
                ti({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror,
                }),
            ),
            eQ(() => {
                e.adoptedStyleSheets &&
                    e.adoptedStyleSheets.length > 0 &&
                    this.bypassOptions.stylesheetManager.adoptStyleSheets(
                        e.adoptedStyleSheets,
                        this.mirror.getId(e.host),
                    ),
                    this.restoreHandlers.push(
                        tE(
                            {
                                mirror: this.mirror,
                                stylesheetManager: this.bypassOptions.stylesheetManager,
                            },
                            e,
                        ),
                    );
            }, 0);
    }
    observeAttachShadow(e) {
        e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
    }
    patchAttachShadow(e, t) {
        let r = this;
        this.restoreHandlers.push(
            eU(e.prototype, "attachShadow", function (e) {
                return function (n) {
                    let a = e.call(this, n);
                    return this.shadowRoot && ez(this) && r.addShadowRoot(this.shadowRoot, t), a;
                };
            }),
        );
    }
    reset() {
        this.restoreHandlers.forEach((e) => {
            try {
                e();
            } catch (e) {}
        }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet()),
            this.bypassOptions.canvasManager.resetShadowRoots();
    }
}
class tf {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class tO {
    constructor(e) {
        (this.trackedLinkElements = new WeakSet()),
            (this.styleMirror = new e$()),
            (this.mutationCb = e.mutationCb),
            (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
    }
    attachLinkElement(e, t) {
        "_cssText" in t.attributes &&
            this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [
                    {
                        id: t.id,
                        attributes: t.attributes,
                    },
                ],
            }),
            this.trackLinkElement(e);
    }
    trackLinkElement(e) {
        this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, t) {
        if (0 === e.length) return;
        let r = {
                id: t,
                styleIds: [],
            },
            n = [];
        for (let t of e) {
            let e;
            this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  n.push({
                      styleId: e,
                      rules: Array.from(t.rules || CSSRule, (e, t) => ({
                          rule: Z(e),
                          index: t,
                      })),
                  })),
                r.styleIds.push(e);
        }
        n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r);
    }
    reset() {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(e) {}
}
class th {
    constructor() {
        (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
    }
    periodicallyClear() {
        !(function (...e) {
            eZ("requestAnimationFrame")(...e);
        })(() => {
            this.clear(), this.loop && this.periodicallyClear();
        });
    }
    inOtherBuffer(e, t) {
        let r = this.nodeMap.get(e);
        return r && Array.from(r).some((e) => e !== t);
    }
    add(e, t) {
        this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
    }
    clear() {
        this.nodeMap = new WeakMap();
    }
    destroy() {
        this.loop = !1;
    }
}
try {
    if (2 !== Array.from([1], (e) => 2 * e)[0]) {
        let e = document.createElement("iframe");
        document.body.appendChild(e),
            (Array.from =
                (0, A.x)([
                    e,
                    "access",
                    (e) => e.contentWindow,
                    "optionalAccess",
                    (e) => e.Array,
                    "access",
                    (e) => e.from,
                ]) || Array.from),
            document.body.removeChild(e);
    }
} catch (e) {
    console.debug("Unable to override Array.from", e);
}
let tD = new Q();
function tS(e = {}) {
    let t,
        {
            emit: r,
            checkoutEveryNms: n,
            checkoutEveryNth: a,
            blockClass: s = "rr-block",
            blockSelector: c = null,
            unblockSelector: E = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: u = null,
            maskAllText: d = !1,
            maskTextClass: I = "rr-mask",
            unmaskTextClass: p = null,
            maskTextSelector: R = null,
            unmaskTextSelector: T = null,
            inlineStylesheet: N = !0,
            maskAllInputs: f,
            maskInputOptions: O,
            slimDOMOptions: h,
            maskAttributeFn: D,
            maskInputFn: S,
            maskTextFn: L,
            maxCanvasSize: C = null,
            packFn: g,
            sampling: m = {},
            dataURLOptions: y = {},
            mousemoveWait: P,
            recordDOM: v = !0,
            recordCanvas: w = !1,
            recordCrossOriginIframes: G = !1,
            recordAfter: M = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
            userTriggeredOnInput: b = !1,
            collectFonts: U = !1,
            inlineImages: H = !1,
            plugins: K,
            keepIframeSrcFn: B = () => !1,
            ignoreCSSAttributes: W = new Set([]),
            errorHandler: k,
            onMutation: Y,
            getCanvasManager: x,
        } = e;
    i = k;
    let V = !G || window.parent === window,
        F = !1;
    if (!V)
        try {
            window.parent.document && (F = !1);
        } catch (e) {
            F = !0;
        }
    if (V && !r) throw Error("emit function is required");
    void 0 !== P && void 0 === m.mousemove && (m.mousemove = P), tD.reset();
    let j =
            !0 === f
                ? {
                      color: !0,
                      date: !0,
                      "datetime-local": !0,
                      email: !0,
                      month: !0,
                      number: !0,
                      range: !0,
                      search: !0,
                      tel: !0,
                      text: !0,
                      time: !0,
                      url: !0,
                      week: !0,
                      textarea: !0,
                      select: !0,
                      radio: !0,
                      checkbox: !0,
                  }
                : void 0 !== O
                  ? O
                  : {},
        X =
            !0 === h || "all" === h
                ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaVerification: !0,
                      headMetaAuthorship: "all" === h,
                      headMetaDescKeywords: "all" === h,
                  }
                : h || {};
    !(function (e = window) {
        "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList" in e &&
                !e.DOMTokenList.prototype.forEach &&
                (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            Node.prototype.contains ||
                (Node.prototype.contains = (...e) => {
                    let t = e[0];
                    if (!(0 in e)) throw TypeError("1 argument is required");
                    do if (this === t) return !0;
                    while ((t = t && t.parentNode));
                    return !1;
                });
    })();
    let $ = 0,
        q = (e) => {
            for (let t of K || []) t.eventProcessor && (e = t.eventProcessor(e));
            return g && !F && (e = g(e)), e;
        };
    o = (e, i) => {
        if (
            ((e.timestamp = eH()),
            (0, A.x)([tr, "access", (e) => e[0], "optionalAccess", (e) => e.isFrozen, "call", (e) => e()]) &&
                e.type !== e0.FullSnapshot &&
                (e.type !== e0.IncrementalSnapshot || e.data.source !== e1.Mutation) &&
                tr.forEach((e) => e.unfreeze()),
            V)
        )
            (0, A.x)([r, "optionalCall", (t) => t(q(e), i)]);
        else if (F) {
            let t = {
                type: "rrweb",
                event: q(e),
                origin: window.location.origin,
                isCheckout: i,
            };
            window.parent.postMessage(t, "*");
        }
        if (e.type === e0.FullSnapshot) (t = e), ($ = 0);
        else if (e.type === e0.IncrementalSnapshot) {
            if (e.data.source === e1.Mutation && e.data.isAttachIframe) return;
            $++;
            let r = a && $ >= a,
                i = n && t && e.timestamp - t.timestamp > n;
            (r || i) && ei(!0);
        }
    };
    let z = (e) => {
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.Mutation,
                    ...e,
                },
            });
        },
        J = (e) =>
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.Scroll,
                    ...e,
                },
            }),
        Z = (e) =>
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.CanvasMutation,
                    ...e,
                },
            }),
        ee = new tO({
            mutationCb: z,
            adoptedStyleSheetCb: (e) =>
                o({
                    type: e0.IncrementalSnapshot,
                    data: {
                        source: e1.AdoptedStyleSheet,
                        ...e,
                    },
                }),
        }),
        et =
            "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
                ? new tR()
                : new tT({
                      mirror: tD,
                      mutationCb: z,
                      stylesheetManager: ee,
                      recordCrossOriginIframes: G,
                      wrappedEmit: o,
                  });
    for (let e of K || [])
        e.getMirror &&
            e.getMirror({
                nodeMirror: tD,
                crossOriginIframeMirror: et.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror,
            });
    let er = new th(),
        en = (function (e, t) {
            try {
                return e ? e(t) : new tf();
            } catch (e) {
                return console.warn("Unable to initialize CanvasManager"), new tf();
            }
        })(x, {
            mirror: tD,
            win: window,
            mutationCb: (e) =>
                o({
                    type: e0.IncrementalSnapshot,
                    data: {
                        source: e1.CanvasMutation,
                        ...e,
                    },
                }),
            recordCanvas: w,
            blockClass: s,
            blockSelector: c,
            unblockSelector: E,
            maxCanvasSize: C,
            sampling: m.canvas,
            dataURLOptions: y,
            errorHandler: k,
        }),
        ea =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new tA()
                : new tN({
                      mutationCb: z,
                      scrollCb: J,
                      bypassOptions: {
                          onMutation: Y,
                          blockClass: s,
                          blockSelector: c,
                          unblockSelector: E,
                          maskAllText: d,
                          maskTextClass: I,
                          unmaskTextClass: p,
                          maskTextSelector: R,
                          unmaskTextSelector: T,
                          inlineStylesheet: N,
                          maskInputOptions: j,
                          dataURLOptions: y,
                          maskAttributeFn: D,
                          maskTextFn: L,
                          maskInputFn: S,
                          recordCanvas: w,
                          inlineImages: H,
                          sampling: m,
                          slimDOMOptions: X,
                          iframeManager: et,
                          stylesheetManager: ee,
                          canvasManager: en,
                          keepIframeSrcFn: B,
                          processedNodeManager: er,
                      },
                      mirror: tD,
                  }),
        ei = (e = !1) => {
            if (!v) return;
            o(
                {
                    type: e0.Meta,
                    data: {
                        href: window.location.href,
                        width: eW(),
                        height: eB(),
                    },
                },
                e,
            ),
                ee.reset(),
                ea.init(),
                tr.forEach((e) => e.lock());
            let t = (function (e, t) {
                let {
                    mirror: r = new Q(),
                    blockClass: n = "rr-block",
                    blockSelector: a = null,
                    unblockSelector: i = null,
                    maskAllText: o = !1,
                    maskTextClass: _ = "rr-mask",
                    unmaskTextClass: s = null,
                    maskTextSelector: c = null,
                    unmaskTextSelector: E = null,
                    inlineStylesheet: l = !0,
                    inlineImages: u = !1,
                    recordCanvas: d = !1,
                    maskAllInputs: I = !1,
                    maskAttributeFn: p,
                    maskTextFn: R,
                    maskInputFn: T,
                    slimDOM: A = !1,
                    dataURLOptions: N,
                    preserveWhiteSpace: f,
                    onSerialize: O,
                    onIframeLoad: h,
                    iframeLoadTimeout: D,
                    onStylesheetLoad: S,
                    stylesheetLoadTimeout: L,
                    keepIframeSrcFn: C = () => !1,
                } = t || {};
                return eP(e, {
                    doc: e,
                    mirror: r,
                    blockClass: n,
                    blockSelector: a,
                    unblockSelector: i,
                    maskAllText: o,
                    maskTextClass: _,
                    unmaskTextClass: s,
                    maskTextSelector: c,
                    unmaskTextSelector: E,
                    skipChild: !1,
                    inlineStylesheet: l,
                    maskInputOptions:
                        !0 === I
                            ? {
                                  color: !0,
                                  date: !0,
                                  "datetime-local": !0,
                                  email: !0,
                                  month: !0,
                                  number: !0,
                                  range: !0,
                                  search: !0,
                                  tel: !0,
                                  text: !0,
                                  time: !0,
                                  url: !0,
                                  week: !0,
                                  textarea: !0,
                                  select: !0,
                              }
                            : !1 === I
                              ? {}
                              : I,
                    maskAttributeFn: p,
                    maskTextFn: R,
                    maskInputFn: T,
                    slimDOMOptions:
                        !0 === A || "all" === A
                            ? {
                                  script: !0,
                                  comment: !0,
                                  headFavicon: !0,
                                  headWhitespace: !0,
                                  headMetaDescKeywords: "all" === A,
                                  headMetaSocial: !0,
                                  headMetaRobots: !0,
                                  headMetaHttpEquiv: !0,
                                  headMetaAuthorship: !0,
                                  headMetaVerification: !0,
                              }
                            : !1 === A
                              ? {}
                              : A,
                    dataURLOptions: N,
                    inlineImages: u,
                    recordCanvas: d,
                    preserveWhiteSpace: f,
                    onSerialize: O,
                    onIframeLoad: h,
                    iframeLoadTimeout: D,
                    onStylesheetLoad: S,
                    stylesheetLoadTimeout: L,
                    keepIframeSrcFn: C,
                    newlyAddedElement: !1,
                });
            })(document, {
                mirror: tD,
                blockClass: s,
                blockSelector: c,
                unblockSelector: E,
                maskAllText: d,
                maskTextClass: I,
                unmaskTextClass: p,
                maskTextSelector: R,
                unmaskTextSelector: T,
                inlineStylesheet: N,
                maskAllInputs: j,
                maskAttributeFn: D,
                maskInputFn: S,
                maskTextFn: L,
                slimDOM: X,
                dataURLOptions: y,
                recordCanvas: w,
                inlineImages: H,
                onSerialize: (e) => {
                    eF(e, tD) && et.addIframe(e),
                        ej(e, tD) && ee.trackLinkElement(e),
                        eX(e) && ea.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                    et.attachIframe(e, t), e.contentWindow && en.addWindow(e.contentWindow), ea.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                    ee.attachLinkElement(e, t);
                },
                keepIframeSrcFn: B,
            });
            if (!t) return console.warn("Failed to snapshot the document");
            o({
                type: e0.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: eK(window),
                },
            }),
                tr.forEach((e) => e.unlock()),
                document.adoptedStyleSheets &&
                    document.adoptedStyleSheets.length > 0 &&
                    ee.adoptStyleSheets(document.adoptedStyleSheets, tD.getId(document));
        };
    _ = ei;
    try {
        let e = [],
            t = (e) =>
                te(tl)(
                    {
                        onMutation: Y,
                        mutationCb: z,
                        mousemoveCb: (e, t) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e,
                                },
                            }),
                        mouseInteractionCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.MouseInteraction,
                                    ...e,
                                },
                            }),
                        scrollCb: J,
                        viewportResizeCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.ViewportResize,
                                    ...e,
                                },
                            }),
                        inputCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.Input,
                                    ...e,
                                },
                            }),
                        mediaInteractionCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.MediaInteraction,
                                    ...e,
                                },
                            }),
                        styleSheetRuleCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.StyleSheetRule,
                                    ...e,
                                },
                            }),
                        styleDeclarationCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.StyleDeclaration,
                                    ...e,
                                },
                            }),
                        canvasMutationCb: Z,
                        fontCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.Font,
                                    ...e,
                                },
                            }),
                        selectionCb: (e) => {
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.Selection,
                                    ...e,
                                },
                            });
                        },
                        customElementCb: (e) => {
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.CustomElement,
                                    ...e,
                                },
                            });
                        },
                        blockClass: s,
                        ignoreClass: l,
                        ignoreSelector: u,
                        maskAllText: d,
                        maskTextClass: I,
                        unmaskTextClass: p,
                        maskTextSelector: R,
                        unmaskTextSelector: T,
                        maskInputOptions: j,
                        inlineStylesheet: N,
                        sampling: m,
                        recordDOM: v,
                        recordCanvas: w,
                        inlineImages: H,
                        userTriggeredOnInput: b,
                        collectFonts: U,
                        doc: e,
                        maskAttributeFn: D,
                        maskInputFn: S,
                        maskTextFn: L,
                        keepIframeSrcFn: B,
                        blockSelector: c,
                        unblockSelector: E,
                        slimDOMOptions: X,
                        dataURLOptions: y,
                        mirror: tD,
                        iframeManager: et,
                        stylesheetManager: ee,
                        shadowDomManager: ea,
                        processedNodeManager: er,
                        canvasManager: en,
                        ignoreCSSAttributes: W,
                        plugins:
                            (0, A.x)([
                                K,
                                "optionalAccess",
                                (e) => e.filter,
                                "call",
                                (e) => e((e) => e.observer),
                                "optionalAccess",
                                (e) => e.map,
                                "call",
                                (e) =>
                                    e((e) => ({
                                        observer: e.observer,
                                        options: e.options,
                                        callback: (t) =>
                                            o({
                                                type: e0.Plugin,
                                                data: {
                                                    plugin: e.name,
                                                    payload: t,
                                                },
                                            }),
                                    })),
                            ]) || [],
                    },
                    {},
                );
        et.addLoadListener((r) => {
            try {
                e.push(t(r.contentDocument));
            } catch (e) {
                console.warn(e);
            }
        });
        let r = () => {
            ei(), e.push(t(document));
        };
        return (
            "interactive" === document.readyState || "complete" === document.readyState
                ? r()
                : (e.push(
                      ew("DOMContentLoaded", () => {
                          o({
                              type: e0.DomContentLoaded,
                              data: {},
                          }),
                              "DOMContentLoaded" === M && r();
                      }),
                  ),
                  e.push(
                      ew(
                          "load",
                          () => {
                              o({
                                  type: e0.Load,
                                  data: {},
                              }),
                                  "load" === M && r();
                          },
                          window,
                      ),
                  )),
            () => {
                e.forEach((e) => e()), er.destroy(), (_ = void 0), (i = void 0);
            }
        );
    } catch (e) {
        console.warn(e);
    }
}
function tL(e) {
    return e > 9999999999 ? e : 1000 * e;
}
function tC(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function tg(e, t) {
    "sentry.transaction" !== t.category &&
        (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
        e.addUpdate(
            () => (
                e.throttledAddEvent({
                    type: e0.Custom,
                    timestamp: 1000 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, m.Fv)(t, 10, 1000),
                    },
                }),
                "console" === t.category
            ),
        ));
}
function tm(e) {
    return e.closest("button,a") || e;
}
function ty(e) {
    let t = tP(e);
    return t && t instanceof Element ? tm(t) : t;
}
function tP(e) {
    var t;
    return "object" == typeof (t = e) && t && "target" in t ? e.target : e;
}
(tS.mirror = tD),
    (tS.takeFullSnapshot = function (e) {
        if (!_) throw Error("please take full snapshot after start recording");
        _(e);
    });
class tv {
    constructor(e, t, r = tg) {
        (this._lastMutation = 0),
            (this._lastScroll = 0),
            (this._clicks = []),
            (this._timeout = t.timeout / 1000),
            (this._threshold = t.threshold / 1000),
            (this._scollTimeout = t.scrollTimeout / 1000),
            (this._replay = e),
            (this._ignoreSelector = t.ignoreSelector),
            (this._addBreadcrumbEvent = r);
    }
    addListeners() {
        var e;
        let t =
            ((e = () => {
                this._lastMutation = tG();
            }),
            s ||
                ((s = []),
                (0, y.hl)(V, "open", function (e) {
                    return function (...t) {
                        if (s)
                            try {
                                s.forEach((e) => e());
                            } catch (e) {}
                        return e.apply(V, t);
                    };
                })),
            s.push(e),
            () => {
                let t = s ? s.indexOf(e) : -1;
                t > -1 && s.splice(t, 1);
            });
        this._teardown = () => {
            t(), (this._clicks = []), (this._lastMutation = 0), (this._lastScroll = 0);
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(e, t) {
        var r, n, a;
        if (
            ((r = t),
            (n = this._ignoreSelector),
            !tw.includes(r.tagName) ||
                ("INPUT" === r.tagName && !["submit", "button"].includes(r.getAttribute("type") || "")) ||
                ("A" === r.tagName &&
                    (r.hasAttribute("download") ||
                        (r.hasAttribute("target") && "_self" !== r.getAttribute("target")))) ||
                (n && r.matches(n)) ||
                !((a = e).data && "number" == typeof a.data.nodeId && a.timestamp))
        )
            return;
        let i = {
            timestamp: tC(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t,
        };
        this._clicks.some((e) => e.node === i.node && 1 > Math.abs(e.timestamp - i.timestamp)) ||
            (this._clicks.push(i), 1 === this._clicks.length && this._scheduleCheckClicks());
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = tC(e);
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = tC(e);
    }
    registerClick(e) {
        let t = tm(e);
        this._handleMultiClick(t);
    }
    _handleMultiClick(e) {
        this._getClicks(e).forEach((e) => {
            e.clickCount++;
        });
    }
    _getClicks(e) {
        return this._clicks.filter((t) => t.node === e);
    }
    _checkClicks() {
        let e = [],
            t = tG();
        for (let r of (this._clicks.forEach((r) => {
            !r.mutationAfter &&
                this._lastMutation &&
                (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0),
                !r.scrollAfter &&
                    this._lastScroll &&
                    (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0),
                r.timestamp + this._timeout <= t && e.push(r);
        }),
        e)) {
            let e = this._clicks.indexOf(r);
            e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(e) {
        let t = this._replay,
            r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
            n = e.mutationAfter && e.mutationAfter <= this._threshold,
            { clickCount: a, clickBreadcrumb: i } = e;
        if (!r && !n) {
            let r = 1000 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                n = r < 1000 * this._timeout ? "mutation" : "timeout",
                o = {
                    type: "default",
                    message: i.message,
                    timestamp: i.timestamp,
                    category: "ui.slowClickDetected",
                    data: {
                        ...i.data,
                        url: V.location.href,
                        route: t.getCurrentRoute(),
                        timeAfterClickMs: r,
                        endReason: n,
                        clickCount: a || 1,
                    },
                };
            this._addBreadcrumbEvent(t, o);
            return;
        }
        if (a > 1) {
            let e = {
                type: "default",
                message: i.message,
                timestamp: i.timestamp,
                category: "ui.multiClick",
                data: {
                    ...i.data,
                    url: V.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: a,
                    metric: !0,
                },
            };
            this._addBreadcrumbEvent(t, e);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
            (this._checkClickTimeout = (0, B.iK)(() => this._checkClicks(), 1000));
    }
}
let tw = ["A", "BUTTON", "INPUT"];
function tG() {
    return Date.now() / 1000;
}
function tM(e) {
    return {
        timestamp: Date.now() / 1000,
        type: "default",
        ...e,
    };
}
((I = R || (R = {}))[(I.Document = 0)] = "Document"),
    (I[(I.DocumentType = 1)] = "DocumentType"),
    (I[(I.Element = 2)] = "Element"),
    (I[(I.Text = 3)] = "Text"),
    (I[(I.CDATA = 4)] = "CDATA"),
    (I[(I.Comment = 5)] = "Comment");
let tb = new Set([
    "id",
    "class",
    "aria-label",
    "role",
    "name",
    "alt",
    "title",
    "data-test-id",
    "data-testid",
    "disabled",
    "aria-disabled",
    "data-sentry-component",
]);
function tU(e, t) {
    let r = tS.mirror.getId(e),
        n = r && tS.mirror.getNode(r),
        a = n && tS.mirror.getMeta(n),
        i = a && a.type === R.Element ? a : null;
    return {
        message: t,
        data: i
            ? {
                  nodeId: r,
                  node: {
                      id: r,
                      tagName: i.tagName,
                      textContent: Array.from(i.childNodes)
                          .map((e) => e.type === R.Text && e.textContent)
                          .filter(Boolean)
                          .map((e) => e.trim())
                          .join(""),
                      attributes: (function (e) {
                          let t = {};
                          for (let r in (!e["data-sentry-component"] &&
                              e["data-sentry-element"] &&
                              (e["data-sentry-component"] = e["data-sentry-element"]),
                          e))
                              if (tb.has(r)) {
                                  let n = r;
                                  ("data-testid" === r || "data-test-id" === r) && (n = "testId"), (t[n] = e[r]);
                              }
                          return t;
                      })(i.attributes),
                  },
              }
            : {},
    };
}
let tH = {
    resource: function (e) {
        let {
            entryType: t,
            initiatorType: r,
            name: n,
            responseEnd: a,
            startTime: i,
            decodedBodySize: o,
            encodedBodySize: _,
            responseStatus: s,
            transferSize: c,
        } = e;
        return ["fetch", "xmlhttprequest"].includes(r)
            ? null
            : {
                  type: `${t}.${r}`,
                  start: tW(i),
                  end: tW(a),
                  name: n,
                  data: {
                      size: c,
                      statusCode: s,
                      decodedBodySize: o,
                      encodedBodySize: _,
                  },
              };
    },
    paint: function (e) {
        let { duration: t, entryType: r, name: n, startTime: a } = e,
            i = tW(a);
        return {
            type: r,
            name: n,
            start: i,
            end: i + t,
            data: void 0,
        };
    },
    navigation: function (e) {
        let {
            entryType: t,
            name: r,
            decodedBodySize: n,
            duration: a,
            domComplete: i,
            encodedBodySize: o,
            domContentLoadedEventStart: _,
            domContentLoadedEventEnd: s,
            domInteractive: c,
            loadEventStart: E,
            loadEventEnd: l,
            redirectCount: u,
            startTime: d,
            transferSize: I,
            type: p,
        } = e;
        return 0 === a
            ? null
            : {
                  type: `${t}.${p}`,
                  start: tW(d),
                  end: tW(i),
                  name: r,
                  data: {
                      size: I,
                      decodedBodySize: n,
                      encodedBodySize: o,
                      duration: a,
                      domInteractive: c,
                      domContentLoadedEventStart: _,
                      domContentLoadedEventEnd: s,
                      loadEventStart: E,
                      loadEventEnd: l,
                      domComplete: i,
                      redirectCount: u,
                  },
              };
    },
};
function tK(e, t) {
    return ({ metric: r }) => void t.replayPerformanceEntries.push(e(r));
}
function tB(e) {
    let t = tH[e.entryType];
    return t ? t(e) : null;
}
function tW(e) {
    return ((v.Z1 || V.performance.timeOrigin) + e) / 1000;
}
function tk(e) {
    let t = e.entries[e.entries.length - 1];
    return tF(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0);
}
function tY(e) {
    let t = e.entries[e.entries.length - 1],
        r = [];
    if (t && t.sources) for (let e of t.sources) e.node && r.push(e.node);
    return tF(e, "cumulative-layout-shift", r);
}
function tx(e) {
    let t = e.entries[e.entries.length - 1];
    return tF(e, "first-input-delay", t && t.target ? [t.target] : void 0);
}
function tV(e) {
    let t = e.entries[e.entries.length - 1];
    return tF(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0);
}
function tF(e, t, r) {
    let n = e.value,
        a = e.rating,
        i = tW(n);
    return {
        type: "web-vital",
        name: t,
        start: i,
        end: i,
        data: {
            value: n,
            size: n,
            rating: a,
            nodeIds: r ? r.map((e) => tS.mirror.getId(e)) : void 0,
        },
    };
}
let tj = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function tX(e, t) {
    tj && (w.kg.info(e), t && tq(e));
}
function t$(e, t) {
    tj &&
        (w.kg.info(e),
        t &&
            (0, B.iK)(() => {
                tq(e);
            }, 0));
}
function tq(e) {
    (0, N.n)(
        {
            category: "console",
            data: { logger: "replay" },
            level: "info",
            message: e,
        },
        { level: "info" },
    );
}
class tz extends Error {
    constructor() {
        super("Event buffer exceeded maximum size of 20000000.");
    }
}
class tJ {
    constructor() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
        return this.events.length > 0;
    }
    get type() {
        return "sync";
    }
    destroy() {
        this.events = [];
    }
    async addEvent(e) {
        let t = JSON.stringify(e).length;
        if (((this._totalSize += t), this._totalSize > 20000000)) throw new tz();
        this.events.push(e);
    }
    finish() {
        return new Promise((e) => {
            let t = this.events;
            this.clear(), e(JSON.stringify(t));
        });
    }
    clear() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    getEarliestTimestamp() {
        let e = this.events.map((e) => e.timestamp).sort()[0];
        return e ? tL(e) : null;
    }
}
class tZ {
    constructor(e) {
        (this._worker = e), (this._id = 0);
    }
    ensureReady() {
        return (
            this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((e, t) => {
                    this._worker.addEventListener(
                        "message",
                        ({ data: r }) => {
                            r.success ? e() : t();
                        },
                        { once: !0 },
                    ),
                        this._worker.addEventListener(
                            "error",
                            (e) => {
                                t(e);
                            },
                            { once: !0 },
                        );
                })),
            this._ensureReadyPromise
        );
    }
    destroy() {
        tX("[Replay] Destroying compression worker"), this._worker.terminate();
    }
    postMessage(e, t) {
        let r = this._getAndIncrementId();
        return new Promise((n, a) => {
            let i = ({ data: t }) => {
                if (t.method === e && t.id === r) {
                    if ((this._worker.removeEventListener("message", i), !t.success)) {
                        tj && w.kg.error("[Replay]", t.response), a(Error("Error in compression worker"));
                        return;
                    }
                    n(t.response);
                }
            };
            this._worker.addEventListener("message", i),
                this._worker.postMessage({
                    id: r,
                    method: e,
                    arg: t,
                });
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}
class tQ {
    constructor(e) {
        (this._worker = new tZ(e)), (this._earliestTimestamp = null), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
        return !!this._earliestTimestamp;
    }
    get type() {
        return "worker";
    }
    ensureReady() {
        return this._worker.ensureReady();
    }
    destroy() {
        this._worker.destroy();
    }
    addEvent(e) {
        let t = tL(e.timestamp);
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
        let r = JSON.stringify(e);
        return ((this._totalSize += r.length), this._totalSize > 20000000)
            ? Promise.reject(new tz())
            : this._sendEventToWorker(r);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage("clear").then(null, (e) => {
                tj && w.kg.warn('[Replay] Sending "clear" message to worker failed', e);
            });
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp;
    }
    _sendEventToWorker(e) {
        return this._worker.postMessage("addEvent", e);
    }
    async _finishRequest() {
        let e = await this._worker.postMessage("finish");
        return (this._earliestTimestamp = null), (this._totalSize = 0), e;
    }
}
class t0 {
    constructor(e) {
        (this._fallback = new tJ()),
            (this._compression = new tQ(e)),
            (this._used = this._fallback),
            (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
    }
    get type() {
        return this._used.type;
    }
    get hasEvents() {
        return this._used.hasEvents;
    }
    get hasCheckout() {
        return this._used.hasCheckout;
    }
    set hasCheckout(e) {
        this._used.hasCheckout = e;
    }
    destroy() {
        this._fallback.destroy(), this._compression.destroy();
    }
    clear() {
        return this._used.clear();
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp();
    }
    addEvent(e) {
        return this._used.addEvent(e);
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish();
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise;
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady();
        } catch (e) {
            tX("[Replay] Failed to load the compression worker, falling back to simple buffer");
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        let { events: e, hasCheckout: t } = this._fallback,
            r = [];
        for (let t of e) r.push(this._compression.addEvent(t));
        (this._compression.hasCheckout = t), (this._used = this._compression);
        try {
            await Promise.all(r);
        } catch (e) {
            tj && w.kg.warn("[Replay] Failed to add events when switching buffers.", e);
        }
    }
}
function t1() {
    try {
        return "sessionStorage" in V && !!V.sessionStorage;
    } catch (e) {
        return !1;
    }
}
function t2(e) {
    return void 0 !== e && Math.random() < e;
}
function t3(e) {
    let t = Date.now(),
        r = e.id || (0, G.DM)(),
        n = e.started || t,
        a = e.lastActivity || t,
        i = e.segmentId || 0;
    return {
        id: r,
        started: n,
        lastActivity: a,
        segmentId: i,
        sampled: e.sampled,
        previousSessionId: e.previousSessionId,
    };
}
function t5(e) {
    if (t1())
        try {
            V.sessionStorage.setItem(F, JSON.stringify(e));
        } catch (e) {}
}
function t6({ sessionSampleRate: e, allowBuffering: t, stickySession: r = !1 }, { previousSessionId: n } = {}) {
    let a = t3({
        sampled: t2(e) ? "session" : !!t && "buffer",
        previousSessionId: n,
    });
    return r && t5(a), a;
}
function t4(e, t, r = +new Date()) {
    return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= r);
}
function t8(e, { maxReplayDuration: t, sessionIdleExpire: r, targetTime: n = Date.now() }) {
    return t4(e.started, t, n) || t4(e.lastActivity, r, n);
}
function t7(e, { sessionIdleExpire: t, maxReplayDuration: r }) {
    return (
        !!t8(e, {
            sessionIdleExpire: t,
            maxReplayDuration: r,
        }) &&
        ("buffer" !== e.sampled || 0 !== e.segmentId)
    );
}
function t9({ traceInternals: e, sessionIdleExpire: t, maxReplayDuration: r, previousSessionId: n }, a) {
    let i =
        a.stickySession &&
        (function (e) {
            if (!t1()) return null;
            try {
                let t = V.sessionStorage.getItem(F);
                if (!t) return null;
                let r = JSON.parse(t);
                return t$("[Replay] Loading existing session", e), t3(r);
            } catch (e) {
                return null;
            }
        })(e);
    return i
        ? t7(i, {
              sessionIdleExpire: t,
              maxReplayDuration: r,
          })
            ? (t$("[Replay] Session in sessionStorage is expired, creating new one..."),
              t6(a, { previousSessionId: i.id }))
            : i
        : (t$("[Replay] Creating new session", e), t6(a, { previousSessionId: n }));
}
function re(e, t, r) {
    return !!rr(e, t) && (rt(e, t, r), !0);
}
async function rt(e, t, r) {
    if (!e.eventBuffer) return null;
    try {
        r && "buffer" === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
        let n = e.getOptions(),
            a = (function (e, t) {
                try {
                    if ("function" == typeof t && e.type === e0.Custom) return t(e);
                } catch (e) {
                    return (
                        tj &&
                            w.kg.error(
                                "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                                e,
                            ),
                        null
                    );
                }
                return e;
            })(t, n.beforeAddRecordingEvent);
        if (!a) return;
        return await e.eventBuffer.addEvent(a);
    } catch (n) {
        let t = n && n instanceof tz ? "addEventSizeExceeded" : "addEvent";
        e.handleException(n), await e.stop({ reason: t });
        let r = (0, f.s3)();
        r && r.recordDroppedEvent("internal_sdk_error", "replay");
    }
}
function rr(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let r = tL(t.timestamp);
    return (
        !(r + e.timeouts.sessionIdlePause < Date.now()) &&
        (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) ||
            (t$(
                `[Replay] Skipping event with timestamp ${r} because it is after maxReplayDuration`,
                e.getOptions()._experiments.traceInternals,
            ),
            !1))
    );
}
function rn(e) {
    return "transaction" === e.type;
}
function ra(e) {
    return "feedback" === e.type;
}
function ri(e) {
    return !!e.category;
}
function ro(e, t) {
    return t.map(({ type: t, start: r, end: n, name: a, data: i }) => {
        let o = e.throttledAddEvent({
            type: e0.Custom,
            timestamp: r,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: t,
                    description: a,
                    startTimestamp: r,
                    endTimestamp: n,
                    data: i,
                },
            },
        });
        return "string" == typeof o ? Promise.resolve(null) : o;
    });
}
function r_(e, t) {
    var r;
    e.isEnabled() &&
        null !== t &&
        ((r = t.name),
        ((!tj || !e.getOptions()._experiments.traceInternals) && (0, O.W)(r, (0, f.s3)())) ||
            e.addUpdate(() => (ro(e, [t]), !0)));
}
function rs(e) {
    if (!e) return;
    let t = new TextEncoder();
    try {
        if ("string" == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let r = rR(e);
            return t.encode(r).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
    } catch (e) {}
}
function rc(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t;
}
function rE(e) {
    try {
        if ("string" == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [rR(e)];
        if (!e) return [void 0];
    } catch (t) {
        return tj && w.kg.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"];
    }
    return tj && w.kg.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function rl(e, t) {
    if (!e)
        return {
            headers: {},
            size: void 0,
            _meta: { warnings: [t] },
        };
    let r = { ...e._meta },
        n = r.warnings || [];
    return (r.warnings = [...n, t]), (e._meta = r), e;
}
function ru(e, t) {
    if (!t) return null;
    let { startTimestamp: r, endTimestamp: n, url: a, method: i, statusCode: o, request: _, response: s } = t;
    return {
        type: e,
        start: r / 1000,
        end: n / 1000,
        name: a,
        data: (0, y.Jr)({
            method: i,
            statusCode: o,
            request: _,
            response: s,
        }),
    };
}
function rd(e) {
    return {
        headers: {},
        size: e,
        _meta: { warnings: ["URL_SKIPPED"] },
    };
}
function rI(e, t, r) {
    if (!t && 0 === Object.keys(e).length) return;
    if (!t) return { headers: e };
    if (!r)
        return {
            headers: e,
            size: t,
        };
    let n = {
            headers: e,
            size: t,
        },
        { body: a, warnings: i } = (function (e) {
            if (!e || "string" != typeof e) return { body: e };
            let t = e.length > 150000,
                r = (function (e) {
                    let t = e[0],
                        r = e[e.length - 1];
                    return ("[" === t && "]" === r) || ("{" === t && "}" === r);
                })(e);
            if (t) {
                let t = e.slice(0, 150000);
                return r
                    ? {
                          body: t,
                          warnings: ["MAYBE_JSON_TRUNCATED"],
                      }
                    : {
                          body: `${t}…`,
                          warnings: ["TEXT_TRUNCATED"],
                      };
            }
            if (r)
                try {
                    return { body: JSON.parse(e) };
                } catch (e) {}
            return { body: e };
        })(r);
    return (n.body = a), i && i.length > 0 && (n._meta = { warnings: i }), n;
}
function rp(e, t) {
    return Object.entries(e).reduce((r, [n, a]) => {
        let i = n.toLowerCase();
        return t.includes(i) && e[n] && (r[i] = a), r;
    }, {});
}
function rR(e) {
    return new URLSearchParams(e).toString();
}
function rT(e, t) {
    let r = (function (e, t = V.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(V.location.origin)) return e;
        let r = new URL(e, t);
        if (r.origin !== new URL(t).origin) return e;
        let n = r.href;
        return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n;
    })(e);
    return (0, M.U0)(r, t);
}
async function rA(e, t, r) {
    try {
        let n = await rN(e, t, r),
            a = ru("resource.fetch", n);
        r_(r.replay, a);
    } catch (e) {
        tj && w.kg.error("[Replay] Failed to capture fetch breadcrumb", e);
    }
}
async function rN(e, t, r) {
    let n = Date.now(),
        { startTimestamp: a = n, endTimestamp: i = n } = t,
        { url: o, method: _, status_code: s = 0, request_body_size: c, response_body_size: E } = e.data,
        l = rT(o, r.networkDetailAllowUrls) && !rT(o, r.networkDetailDenyUrls);
    return {
        startTimestamp: a,
        endTimestamp: i,
        url: o,
        method: _,
        statusCode: s,
        request: l
            ? (function ({ networkCaptureBodies: e, networkRequestHeaders: t }, r, n) {
                  var a, i;
                  let o = r
                      ? ((a = r),
                        (i = t),
                        1 === a.length && "string" != typeof a[0] ? rS(a[0], i) : 2 === a.length ? rS(a[1], i) : {})
                      : {};
                  if (!e) return rI(o, n, void 0);
                  let [_, s] = rE(rh(r)),
                      c = rI(o, n, _);
                  return s ? rl(c, s) : c;
              })(r, t.input, c)
            : rd(c),
        response: await rf(l, r, t.response, E),
    };
}
async function rf(e, { networkCaptureBodies: t, networkResponseHeaders: r }, n, a) {
    if (!e && void 0 !== a) return rd(a);
    let i = n ? rD(n.headers, r) : {};
    if (!n || (!t && void 0 !== a)) return rI(i, a, void 0);
    let [o, _] = await rO(n),
        s = (function (e, { networkCaptureBodies: t, responseBodySize: r, captureDetails: n, headers: a }) {
            try {
                let i = e && e.length && void 0 === r ? rs(e) : r;
                if (!n) return rd(i);
                if (t) return rI(a, i, e);
                return rI(a, i, void 0);
            } catch (e) {
                return tj && w.kg.warn("[Replay] Failed to serialize response body", e), rI(a, r, void 0);
            }
        })(o, {
            networkCaptureBodies: t,
            responseBodySize: a,
            captureDetails: e,
            headers: i,
        });
    return _ ? rl(s, _) : s;
}
async function rO(e) {
    let t = (function (e) {
        try {
            return e.clone();
        } catch (e) {
            tj && w.kg.warn("[Replay] Failed to clone response body", e);
        }
    })(e);
    if (!t) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var r;
        return [
            await ((r = t),
            new Promise((e, t) => {
                let n = (0, B.iK)(() => t(Error("Timeout while trying to read response body")), 500);
                rL(r)
                    .then(
                        (t) => e(t),
                        (e) => t(e),
                    )
                    .finally(() => clearTimeout(n));
            })),
        ];
    } catch (e) {
        return tj && w.kg.warn("[Replay] Failed to get text body from response", e), [void 0, "BODY_PARSE_ERROR"];
    }
}
function rh(e = []) {
    if (2 === e.length && "object" == typeof e[1]) return e[1].body;
}
function rD(e, t) {
    let r = {};
    return (
        t.forEach((t) => {
            e.get(t) && (r[t] = e.get(t));
        }),
        r
    );
}
function rS(e, t) {
    if (!e) return {};
    let r = e.headers;
    return r ? (r instanceof Headers ? rD(r, t) : Array.isArray(r) ? {} : rp(r, t)) : {};
}
async function rL(e) {
    return await e.text();
}
async function rC(e, t, r) {
    try {
        let n = (function (e, t, r) {
                let n = Date.now(),
                    { startTimestamp: a = n, endTimestamp: i = n, input: o, xhr: _ } = t,
                    { url: s, method: c, status_code: E = 0, request_body_size: l, response_body_size: u } = e.data;
                if (!s) return null;
                if (!_ || !rT(s, r.networkDetailAllowUrls) || rT(s, r.networkDetailDenyUrls)) {
                    let e = rd(l);
                    return {
                        startTimestamp: a,
                        endTimestamp: i,
                        url: s,
                        method: c,
                        statusCode: E,
                        request: e,
                        response: rd(u),
                    };
                }
                let d = _[k.xU],
                    I = d ? rp(d.request_headers, r.networkRequestHeaders) : {},
                    p = rp(
                        (function (e) {
                            let t = e.getAllResponseHeaders();
                            return t
                                ? t.split("\r\n").reduce((e, t) => {
                                      let [r, n] = t.split(": ");
                                      return n && (e[r.toLowerCase()] = n), e;
                                  }, {})
                                : {};
                        })(_),
                        r.networkResponseHeaders,
                    ),
                    [R, T] = r.networkCaptureBodies ? rE(o) : [void 0],
                    [A, N] = r.networkCaptureBodies
                        ? (function (e) {
                              let t = [];
                              try {
                                  return [e.responseText];
                              } catch (e) {
                                  t.push(e);
                              }
                              try {
                                  var r = e.response,
                                      n = e.responseType;
                                  try {
                                      if ("string" == typeof r) return [r];
                                      if (r instanceof Document) return [r.body.outerHTML];
                                      if ("json" === n && r && "object" == typeof r) return [JSON.stringify(r)];
                                      if (!r) return [void 0];
                                  } catch (e) {
                                      return (
                                          tj && w.kg.warn("[Replay] Failed to serialize body", r),
                                          [void 0, "BODY_PARSE_ERROR"]
                                      );
                                  }
                                  return (
                                      tj && w.kg.info("[Replay] Skipping network body because of body type", r),
                                      [void 0, "UNPARSEABLE_BODY_TYPE"]
                                  );
                              } catch (e) {
                                  t.push(e);
                              }
                              return tj && w.kg.warn("[Replay] Failed to get xhr response body", ...t), [void 0];
                          })(_)
                        : [void 0],
                    f = rI(I, l, R),
                    O = rI(p, u, A);
                return {
                    startTimestamp: a,
                    endTimestamp: i,
                    url: s,
                    method: c,
                    statusCode: E,
                    request: T ? rl(f, T) : f,
                    response: N ? rl(O, N) : O,
                };
            })(e, t, r),
            a = ru("resource.xhr", n);
        r_(r.replay, a);
    } catch (e) {
        tj && w.kg.error("[Replay] Failed to capture xhr breadcrumb", e);
    }
}
async function rg(e) {
    try {
        return Promise.all(
            ro(e, [
                (function (e) {
                    let { jsHeapSizeLimit: t, totalJSHeapSize: r, usedJSHeapSize: n } = e,
                        a = Date.now() / 1000;
                    return {
                        type: "memory",
                        name: "memory",
                        start: a,
                        end: a,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: r,
                                usedJSHeapSize: n,
                            },
                        },
                    };
                })(V.performance.memory),
            ]),
        );
    } catch (e) {
        return [];
    }
}
async function rm({ client: e, scope: t, replayId: r, event: n }) {
    let a = {
        event_id: r,
        integrations:
            "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations)
                ? void 0
                : Object.keys(e._integrations),
    };
    e.emit("preprocessEvent", n, a);
    let i = await (0, D.R)(e.getOptions(), n, a, t, e, (0, f.aF)());
    if (!i) return null;
    i.platform = i.platform || "javascript";
    let o = e.getSdkMetadata(),
        { name: _, version: s } = (o && o.sdk) || {};
    return (
        (i.sdk = {
            ...i.sdk,
            name: _ || "sentry.javascript.unknown",
            version: s || "0.0.0",
        }),
        i
    );
}
async function ry({ recordingData: e, replayId: t, segmentId: r, eventContext: n, timestamp: a, session: i }) {
    var o;
    let _,
        s = (function ({ recordingData: e, headers: t }) {
            let r,
                n = `${JSON.stringify(t)}
`;
            if ("string" == typeof e) r = `${n}${e}`;
            else {
                let t = new TextEncoder().encode(n);
                (r = new Uint8Array(t.length + e.length)).set(t), r.set(e, t.length);
            }
            return r;
        })({
            recordingData: e,
            headers: { segment_id: r },
        }),
        { urls: c, errorIds: E, traceIds: l, initialTimestamp: u } = n,
        d = (0, f.s3)(),
        I = (0, f.nZ)(),
        p = d && d.getTransport(),
        R = d && d.getDsn();
    if (!d || !p || !R || !i.sampled) return (0, U.WD)({});
    let T = {
            type: "replay_event",
            replay_start_timestamp: u / 1000,
            timestamp: a / 1000,
            error_ids: E,
            trace_ids: l,
            urls: c,
            replay_id: t,
            segment_id: r,
            replay_type: i.sampled,
        },
        A = await rm({
            scope: I,
            client: d,
            replayId: t,
            event: T,
        });
    if (!A)
        return (
            d.recordDroppedEvent("event_processor", "replay", T),
            tX("An event processor returned `null`, will not send event."),
            (0, U.WD)({})
        );
    delete A.sdkProcessingMetadata;
    let N =
        ((o = d.getOptions().tunnel),
        (0, b.Jd)((0, b.Cd)(A, (0, b.HY)(A), o, R), [
            [{ type: "replay_event" }, A],
            [
                {
                    type: "replay_recording",
                    length: "string" == typeof s ? new TextEncoder().encode(s).length : s.length,
                },
                s,
            ],
        ]));
    try {
        _ = await p.send(N);
    } catch (t) {
        let e = Error(j);
        try {
            e.cause = t;
        } catch (e) {}
        throw e;
    }
    if ("number" == typeof _.statusCode && (_.statusCode < 200 || _.statusCode >= 300)) throw new rP(_.statusCode);
    let O = (0, H.WG)({}, _);
    if ((0, H.Q)(O, "replay")) throw new rv(O);
    return _;
}
class rP extends Error {
    constructor(e) {
        super(`Transport returned status code ${e}`);
    }
}
class rv extends Error {
    constructor(e) {
        super("Rate limit hit"), (this.rateLimits = e);
    }
}
async function rw(
    e,
    t = {
        count: 0,
        interval: 5000,
    },
) {
    let { recordingData: r, options: n } = e;
    if (r.length)
        try {
            return await ry(e), !0;
        } catch (r) {
            if (r instanceof rP || r instanceof rv) throw r;
            if (
                ((0, h.v)("Replays", { _retryCount: t.count }),
                tj && n._experiments && n._experiments.captureExceptions && (0, h.Tb)(r),
                t.count >= 3)
            ) {
                let e = Error(`${j} - max retries exceeded`);
                try {
                    e.cause = r;
                } catch (e) {}
                throw e;
            }
            return (
                (t.interval *= ++t.count),
                new Promise((r, n) => {
                    (0, B.iK)(async () => {
                        try {
                            await rw(e, t), r(!0);
                        } catch (e) {
                            n(e);
                        }
                    }, t.interval);
                })
            );
        }
}
let rG = "__THROTTLED";
class rM {
    constructor({ options: e, recordingOptions: t }) {
        rM.prototype.__init.call(this),
            rM.prototype.__init2.call(this),
            rM.prototype.__init3.call(this),
            rM.prototype.__init4.call(this),
            rM.prototype.__init5.call(this),
            rM.prototype.__init6.call(this),
            (this.eventBuffer = null),
            (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            (this.recordingMode = "session"),
            (this.timeouts = {
                sessionIdlePause: 300000,
                sessionIdleExpire: 900000,
            }),
            (this._lastActivity = Date.now()),
            (this._isEnabled = !1),
            (this._isPaused = !1),
            (this._requiresManualStart = !1),
            (this._hasInitializedCoreListeners = !1),
            (this._context = {
                errorIds: new Set(),
                traceIds: new Set(),
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: "",
            }),
            (this._recordingOptions = t),
            (this._options = e),
            (this._debouncedFlush = (function (e, t, r) {
                let n,
                    a,
                    i,
                    o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;
                function _() {
                    return s(), (n = e());
                }
                function s() {
                    void 0 !== a && clearTimeout(a), void 0 !== i && clearTimeout(i), (a = i = void 0);
                }
                function c() {
                    return a && clearTimeout(a), (a = (0, B.iK)(_, t)), o && void 0 === i && (i = (0, B.iK)(_, o)), n;
                }
                return (
                    (c.cancel = s),
                    (c.flush = function () {
                        return void 0 !== a || void 0 !== i ? _() : n;
                    }),
                    c
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (e, t, r) {
                let n = new Map(),
                    a = !1;
                return (...t) => {
                    let r = Math.floor(Date.now() / 1000),
                        i = r - 5;
                    if (
                        (n.forEach((e, t) => {
                            t < i && n.delete(t);
                        }),
                        [...n.values()].reduce((e, t) => e + t, 0) >= 300)
                    ) {
                        let e = a;
                        return (a = !0), e ? "__SKIPPED" : rG;
                    }
                    a = !1;
                    let o = n.get(r) || 0;
                    return n.set(r, o + 1), e(...t);
                };
            })(
                (e, t) =>
                    (function (e, t, r) {
                        return rr(e, t) ? rt(e, t, r) : Promise.resolve(null);
                    })(this, e, t),
                0,
                0,
            ));
        let { slowClickTimeout: r, slowClickIgnoreSelectors: n } = this.getOptions(),
            a = r
                ? {
                      threshold: Math.min(3000, r),
                      timeout: r,
                      scrollTimeout: 300,
                      ignoreSelector: n ? n.join(",") : "",
                  }
                : void 0;
        a && (this.clickDetector = new tv(this, a));
    }
    getContext() {
        return this._context;
    }
    isEnabled() {
        return this._isEnabled;
    }
    isPaused() {
        return this._isPaused;
    }
    isRecordingCanvas() {
        return !!this._canvas;
    }
    getOptions() {
        return this._options;
    }
    handleException(e) {
        tj && w.kg.error("[Replay]", e),
            tj && this._options._experiments && this._options._experiments.captureExceptions && (0, h.Tb)(e);
    }
    initializeSampling(e) {
        let { errorSampleRate: t, sessionSampleRate: r } = this._options,
            n = t <= 0 && r <= 0;
        if (((this._requiresManualStart = n), !n)) {
            if ((this._initializeSessionForSampling(e), !this.session))
                return void this.handleException(Error("Unable to initialize and create session"));
            !1 !== this.session.sampled &&
                ((this.recordingMode =
                    "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session"),
                t$(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals),
                this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && "session" === this.recordingMode) {
            tj && w.kg.info("[Replay] Recording is already in progress");
            return;
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
            tj && w.kg.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        t$("[Replay] Starting replay in session mode", this._options._experiments.traceInternals),
            this._updateUserActivity();
        let e = t9(
            {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                traceInternals: this._options._experiments.traceInternals,
            },
            {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1,
            },
        );
        (this.session = e), this._initializeRecording();
    }
    startBuffering() {
        if (this._isEnabled) {
            tj && w.kg.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        t$("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
        let e = t9(
            {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                traceInternals: this._options._experiments.traceInternals,
            },
            {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0,
            },
        );
        (this.session = e), (this.recordingMode = "buffer"), this._initializeRecording();
    }
    startRecording() {
        try {
            var e;
            let t,
                r = this._canvas;
            this._stopRecording = tS({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode && { checkoutEveryNms: 60000 }),
                emit:
                    ((e = this),
                    (t = !1),
                    (r, n) => {
                        if (!e.checkAndHandleExpiredSession()) {
                            tj && w.kg.warn("[Replay] Received replay event after session expired.");
                            return;
                        }
                        let a = n || !t;
                        (t = !0),
                            e.clickDetector &&
                                (function (e, t) {
                                    try {
                                        var r;
                                        if (((r = t), 3 !== r.type)) return;
                                        let { source: n } = t.data;
                                        if (
                                            (n === e1.Mutation && e.registerMutation(t.timestamp),
                                            n === e1.Scroll && e.registerScroll(t.timestamp),
                                            t.data.source === e1.MouseInteraction)
                                        ) {
                                            let { type: r, id: n } = t.data,
                                                a = tS.mirror.getNode(n);
                                            a instanceof HTMLElement && r === e2.Click && e.registerClick(a);
                                        }
                                    } catch (e) {}
                                })(e.clickDetector, r),
                            e.addUpdate(() => {
                                var t;
                                if (("buffer" === e.recordingMode && a && e.setInitialState(), !re(e, r, a))) return !0;
                                if (!a) return !1;
                                if (
                                    ((t = e),
                                    a &&
                                        t.session &&
                                        0 === t.session.segmentId &&
                                        re(
                                            t,
                                            (function (e) {
                                                let t = e.getOptions();
                                                return {
                                                    type: e0.Custom,
                                                    timestamp: Date.now(),
                                                    data: {
                                                        tag: "options",
                                                        payload: {
                                                            shouldRecordCanvas: e.isRecordingCanvas(),
                                                            sessionSampleRate: t.sessionSampleRate,
                                                            errorSampleRate: t.errorSampleRate,
                                                            useCompressionOption: t.useCompression,
                                                            blockAllMedia: t.blockAllMedia,
                                                            maskAllText: t.maskAllText,
                                                            maskAllInputs: t.maskAllInputs,
                                                            useCompression:
                                                                !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                            networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                            networkCaptureBodies: t.networkCaptureBodies,
                                                            networkRequestHasHeaders:
                                                                t.networkRequestHeaders.length > 0,
                                                            networkResponseHasHeaders:
                                                                t.networkResponseHeaders.length > 0,
                                                        },
                                                    },
                                                };
                                            })(t),
                                            !1,
                                        ),
                                    e.session && e.session.previousSessionId)
                                )
                                    return !0;
                                if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t &&
                                        (tX(
                                            `[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`,
                                            e.getOptions()._experiments.traceInternals,
                                        ),
                                        (e.session.started = t),
                                        e.getOptions().stickySession && t5(e.session));
                                }
                                return "session" === e.recordingMode && e.flush(), !0;
                            });
                    }),
                onMutation: this._onMutationHandler,
                ...(r
                    ? {
                          recordCanvas: r.recordCanvas,
                          getCanvasManager: r.getCanvasManager,
                          sampling: r.sampling,
                          dataURLOptions: r.dataURLOptions,
                      }
                    : {}),
            });
        } catch (e) {
            this.handleException(e);
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), (this._stopRecording = void 0)), !0;
        } catch (e) {
            return this.handleException(e), !1;
        }
    }
    async stop({ forceFlush: e = !1, reason: t } = {}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                tX(
                    `[Replay] Stopping Replay${t ? ` triggered by ${t}` : ""}`,
                    this._options._experiments.traceInternals,
                ),
                    this._removeListeners(),
                    this.stopRecording(),
                    this._debouncedFlush.cancel(),
                    e && (await this._flush({ force: !0 })),
                    this.eventBuffer && this.eventBuffer.destroy(),
                    (this.eventBuffer = null),
                    (function () {
                        if (t1())
                            try {
                                V.sessionStorage.removeItem(F);
                            } catch (e) {}
                    })(),
                    (this.session = void 0);
            } catch (e) {
                this.handleException(e);
            }
        }
    }
    pause() {
        this._isPaused ||
            ((this._isPaused = !0),
            this.stopRecording(),
            tX("[Replay] Pausing replay", this._options._experiments.traceInternals));
    }
    resume() {
        this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1),
            this.startRecording(),
            tX("[Replay] Resuming replay", this._options._experiments.traceInternals));
    }
    async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let t = Date.now();
        tX("[Replay] Converting buffer to session", this._options._experiments.traceInternals),
            await this.flushImmediate();
        let r = this.stopRecording();
        e &&
            r &&
            "session" !== this.recordingMode &&
            ((this.recordingMode = "session"),
            this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()),
            this.startRecording());
    }
    addUpdate(e) {
        let t = e();
        "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush();
    }
    triggerUserActivity() {
        if ((this._updateUserActivity(), !this._stopRecording)) {
            if (!this._checkSession()) return;
            this.resume();
            return;
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity();
    }
    updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity();
    }
    conditionalFlush() {
        return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate();
    }
    flush() {
        return this._debouncedFlush();
    }
    flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush();
    }
    cancelFlush() {
        this._debouncedFlush.cancel();
    }
    getSessionId() {
        return this.session && this.session.id;
    }
    checkAndHandleExpiredSession() {
        return this._lastActivity &&
            t4(this._lastActivity, this.timeouts.sessionIdlePause) &&
            this.session &&
            "session" === this.session.sampled
            ? void this.pause()
            : !!this._checkSession();
    }
    setInitialState() {
        let e = `${V.location.pathname}${V.location.hash}${V.location.search}`,
            t = `${V.location.origin}${e}`;
        (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            this._clearContext(),
            (this._context.initialUrl = t),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(t);
    }
    throttledAddEvent(e, t) {
        let r = this._throttledAddEvent(e, t);
        if (r === rG) {
            let e = tM({ category: "replay.throttled" });
            this.addUpdate(
                () =>
                    !re(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e,
                            metric: !0,
                        },
                    }),
            );
        }
        return r;
    }
    getCurrentRoute() {
        let e = this.lastActiveSpan || (0, S.HN)(),
            t = e && (0, S.Gx)(e),
            r = ((t && (0, S.XU)(t).data) || {})[L.Zj];
        if (t && r && ["route", "custom"].includes(r)) return (0, S.XU)(t).description;
    }
    _initializeRecording() {
        this.setInitialState(),
            this._updateSessionActivity(),
            (this.eventBuffer = (function ({ useCompression: e, workerUrl: t }) {
                if (e && window.Worker) {
                    let e = (function (e) {
                        try {
                            let t =
                                e ||
                                (function () {
                                    if (
                                        "undefined" == typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ ||
                                        !__SENTRY_EXCLUDE_REPLAY_WORKER__
                                    ) {
                                        let e = new Blob([
                                            'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                                        ]);
                                        return URL.createObjectURL(e);
                                    }
                                    return "";
                                })();
                            if (!t) return;
                            tX(`[Replay] Using compression worker${e ? ` from ${e}` : ""}`);
                            let r = new Worker(t);
                            return new t0(r);
                        } catch (e) {
                            tX("[Replay] Failed to create compression worker");
                        }
                    })(t);
                    if (e) return e;
                }
                return tX("[Replay] Using simple buffer"), new tJ();
            })({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl,
            })),
            this._removeListeners(),
            this._addListeners(),
            (this._isEnabled = !0),
            (this._isPaused = !1),
            this.startRecording();
    }
    _initializeSessionForSampling(e) {
        let t = this._options.errorSampleRate > 0,
            r = t9(
                {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: e,
                },
                {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t,
                },
            );
        this.session = r;
    }
    _checkSession() {
        if (!this.session) return !1;
        let e = this.session;
        return (
            !t7(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
            }) || (this._refreshSession(e), !1)
        );
    }
    async _refreshSession(e) {
        this._isEnabled && (await this.stop({ reason: "refresh session" }), this.initializeSampling(e.id));
    }
    _addListeners() {
        try {
            V.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                V.addEventListener("blur", this._handleWindowBlur),
                V.addEventListener("focus", this._handleWindowFocus),
                V.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                    (!(function (e) {
                        let t = (0, f.s3)();
                        (0, Y.O)((t) => {
                            var r, n;
                            if (!e.isEnabled()) return;
                            let a = (function (e) {
                                let { target: t, message: r } = (function (e) {
                                    let t,
                                        r = "click" === e.name,
                                        n = null;
                                    try {
                                        (n = r ? ty(e.event) : tP(e.event)),
                                            (t = (0, P.Rt)(n, { maxStringLength: 200 }) || "<unknown>");
                                    } catch (e) {
                                        t = "<unknown>";
                                    }
                                    return {
                                        target: n,
                                        message: t,
                                    };
                                })(e);
                                return tM({
                                    category: `ui.${e.name}`,
                                    ...tU(t, r),
                                });
                            })(t);
                            if (!a) return;
                            let i = "click" === t.name,
                                o = i ? t.event : void 0;
                            i &&
                                e.clickDetector &&
                                o &&
                                o.target &&
                                !o.altKey &&
                                !o.metaKey &&
                                !o.ctrlKey &&
                                !o.shiftKey &&
                                ((r = e.clickDetector), (n = ty(t.event)), r.handleClick(a, n)),
                                tg(e, a);
                        }),
                            (0, x.a)((t) => {
                                if (!e.isEnabled()) return;
                                let r = (function (e) {
                                    let { from: t, to: r } = e,
                                        n = Date.now() / 1000;
                                    return {
                                        type: "navigation.push",
                                        start: n,
                                        end: n,
                                        name: r,
                                        data: { previous: t },
                                    };
                                })(t);
                                null !== r &&
                                    (e.getContext().urls.push(r.name),
                                    e.triggerUserActivity(),
                                    e.addUpdate(() => (ro(e, [r]), !1)));
                            });
                        let r = (0, f.s3)();
                        r &&
                            r.on("beforeAddBreadcrumb", (t) =>
                                (function (e, t) {
                                    var r;
                                    if (!e.isEnabled() || !ri(t)) return;
                                    let n =
                                        ((r = t),
                                        !ri(r) ||
                                        ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(r.category) ||
                                        r.category.startsWith("ui.")
                                            ? null
                                            : "console" === r.category
                                              ? (function (e) {
                                                    let t = e.data && e.data.arguments;
                                                    if (!Array.isArray(t) || 0 === t.length) return tM(e);
                                                    let r = !1,
                                                        n = t.map((e) => {
                                                            if (!e) return e;
                                                            if ("string" == typeof e)
                                                                return e.length > 5000
                                                                    ? ((r = !0), `${e.slice(0, 5000)}…`)
                                                                    : e;
                                                            if ("object" == typeof e)
                                                                try {
                                                                    let t = (0, m.Fv)(e, 7);
                                                                    if (JSON.stringify(t).length > 5000)
                                                                        return (
                                                                            (r = !0),
                                                                            `${JSON.stringify(t, null, 2).slice(0, 5000)}…`
                                                                        );
                                                                    return t;
                                                                } catch (e) {}
                                                            return e;
                                                        });
                                                    return tM({
                                                        ...e,
                                                        data: {
                                                            ...e.data,
                                                            arguments: n,
                                                            ...(r
                                                                ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                                                                : {}),
                                                        },
                                                    });
                                                })(r)
                                              : tM(r));
                                    n && tg(e, n);
                                })(e, t),
                            );
                        let n = (0, f.s3)();
                        try {
                            let {
                                    networkDetailAllowUrls: t,
                                    networkDetailDenyUrls: r,
                                    networkCaptureBodies: a,
                                    networkRequestHeaders: i,
                                    networkResponseHeaders: o,
                                } = e.getOptions(),
                                _ = {
                                    replay: e,
                                    networkDetailAllowUrls: t,
                                    networkDetailDenyUrls: r,
                                    networkCaptureBodies: a,
                                    networkRequestHeaders: i,
                                    networkResponseHeaders: o,
                                };
                            n &&
                                n.on("beforeAddBreadcrumb", (e, t) =>
                                    (function (e, t, r) {
                                        if (t.data)
                                            try {
                                                var n, a, i, o;
                                                if (
                                                    ((n = t),
                                                    "xhr" === n.category &&
                                                        (a = r) &&
                                                        a.xhr &&
                                                        (!(function (e, t) {
                                                            let { xhr: r, input: n } = t;
                                                            if (!r) return;
                                                            let a = rs(n),
                                                                i = r.getResponseHeader("content-length")
                                                                    ? rc(r.getResponseHeader("content-length"))
                                                                    : (function (e, t) {
                                                                          try {
                                                                              let r =
                                                                                  "json" === t &&
                                                                                  e &&
                                                                                  "object" == typeof e
                                                                                      ? JSON.stringify(e)
                                                                                      : e;
                                                                              return rs(r);
                                                                          } catch (e) {
                                                                              return;
                                                                          }
                                                                      })(r.response, r.responseType);
                                                            void 0 !== a && (e.data.request_body_size = a),
                                                                void 0 !== i && (e.data.response_body_size = i);
                                                        })(t, r),
                                                        rC(t, r, e)),
                                                    (i = t),
                                                    "fetch" === i.category && (o = r) && o.response)
                                                ) {
                                                    let { input: n, response: a } = r,
                                                        i = rs(n ? rh(n) : void 0),
                                                        o = a ? rc(a.headers.get("content-length")) : void 0;
                                                    void 0 !== i && (t.data.request_body_size = i),
                                                        void 0 !== o && (t.data.response_body_size = o),
                                                        rA(t, r, e);
                                                }
                                            } catch (e) {
                                                tj && w.kg.warn("Error when enriching network breadcrumb");
                                            }
                                    })(_, e, t),
                                );
                        } catch (e) {}
                        let a = Object.assign(
                            (t, r) =>
                                e.isEnabled()
                                    ? "replay_event" === t.type
                                        ? (delete t.breadcrumbs, t)
                                        : (!t.type || rn(t) || ra(t)) && e.checkAndHandleExpiredSession()
                                          ? ra(t)
                                              ? (e.flush(),
                                                (t.contexts.feedback.replay_id = e.getSessionId()),
                                                e.triggerUserActivity(),
                                                e.addUpdate(
                                                    () =>
                                                        !t.timestamp ||
                                                        (e.throttledAddEvent({
                                                            type: e0.Custom,
                                                            timestamp: 1000 * t.timestamp,
                                                            data: {
                                                                tag: "breadcrumb",
                                                                payload: {
                                                                    timestamp: t.timestamp,
                                                                    type: "default",
                                                                    category: "sentry.feedback",
                                                                    data: { feedbackId: t.event_id },
                                                                },
                                                            },
                                                        }),
                                                        !1),
                                                ),
                                                t)
                                              : !t.type &&
                                                  t.exception &&
                                                  t.exception.values &&
                                                  t.exception.values.length &&
                                                  r.originalException &&
                                                  r.originalException.__rrweb__ &&
                                                  !e.getOptions()._experiments.captureExceptions
                                                ? (tj && w.kg.log("[Replay] Ignoring error from rrweb internals", t),
                                                  null)
                                                : ((("buffer" === e.recordingMode &&
                                                      t.message !== j &&
                                                      t.exception &&
                                                      !t.type &&
                                                      t2(e.getOptions().errorSampleRate)) ||
                                                      "session" === e.recordingMode) &&
                                                      (t.tags = {
                                                          ...t.tags,
                                                          replayId: e.getSessionId(),
                                                      }),
                                                  t)
                                          : t
                                    : t,
                            { id: "Replay" },
                        );
                        (0, h.Qy)(a),
                            t &&
                                (t.on("beforeSendEvent", (t) => {
                                    e.isEnabled() &&
                                        !t.type &&
                                        (function (e, t) {
                                            let r =
                                                t.exception &&
                                                t.exception.values &&
                                                t.exception.values[0] &&
                                                t.exception.values[0].value;
                                            "string" == typeof r &&
                                                (r.match(
                                                    /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                                                ) ||
                                                    r.match(
                                                        /(does not match server-rendered HTML|Hydration failed because)/i,
                                                    )) &&
                                                tg(
                                                    e,
                                                    tM({
                                                        category: "replay.hydrate-error",
                                                        data: { url: (0, P.l4)() },
                                                    }),
                                                );
                                        })(e, t);
                                }),
                                t.on("afterSendEvent", (t, r) => {
                                    if (!e.isEnabled() || (t.type && !rn(t))) return;
                                    let n = r && r.statusCode;
                                    if (n && !(n < 200) && !(n >= 300)) {
                                        if (rn(t))
                                            return void (function (e, t) {
                                                let r = e.getContext();
                                                t.contexts &&
                                                    t.contexts.trace &&
                                                    t.contexts.trace.trace_id &&
                                                    r.traceIds.size < 100 &&
                                                    r.traceIds.add(t.contexts.trace.trace_id);
                                            })(e, t);
                                        !(function (e, t) {
                                            let r = e.getContext();
                                            if (
                                                (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id),
                                                "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
                                            )
                                                return;
                                            let { beforeErrorSampling: n } = e.getOptions();
                                            ("function" != typeof n || n(t)) &&
                                                (0, B.iK)(() => {
                                                    e.sendBufferedReplayOrFlush();
                                                });
                                        })(e, t);
                                    }
                                }),
                                t.on("createDsc", (t) => {
                                    let r = e.getSessionId();
                                    r &&
                                        e.isEnabled() &&
                                        "session" === e.recordingMode &&
                                        e.checkAndHandleExpiredSession() &&
                                        (t.replay_id = r);
                                }),
                                t.on("spanStart", (t) => {
                                    e.lastActiveSpan = t;
                                }),
                                t.on("spanEnd", (t) => {
                                    e.lastActiveSpan = t;
                                }),
                                t.on("beforeSendFeedback", (t, r) => {
                                    let n = e.getSessionId();
                                    r &&
                                        r.includeReplay &&
                                        e.isEnabled() &&
                                        n &&
                                        t.contexts &&
                                        t.contexts.feedback &&
                                        (t.contexts.feedback.replay_id = n);
                                }));
                    })(this),
                    (this._hasInitializedCoreListeners = !0));
        } catch (e) {
            this.handleException(e);
        }
        this._performanceCleanupCallback = (function (e) {
            function t(t) {
                e.performanceEntries.includes(t) || e.performanceEntries.push(t);
            }
            function r({ entries: e }) {
                e.forEach(t);
            }
            let n = [];
            return (
                ["navigation", "paint", "resource"].forEach((e) => {
                    n.push((0, W._j)(e, r));
                }),
                n.push((0, W.$A)(tK(tk, e)), (0, W.PR)(tK(tY, e)), (0, W.to)(tK(tx, e)), (0, W.YF)(tK(tV, e))),
                () => {
                    n.forEach((e) => e());
                }
            );
        })(this);
    }
    _removeListeners() {
        try {
            V.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                V.removeEventListener("blur", this._handleWindowBlur),
                V.removeEventListener("focus", this._handleWindowFocus),
                V.removeEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.removeListeners(),
                this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (e) {
            this.handleException(e);
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            "visible" === V.document.visibilityState
                ? this._doChangeToForegroundTasks()
                : this._doChangeToBackgroundTasks();
        };
    }
    __init2() {
        this._handleWindowBlur = () => {
            let e = tM({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(e);
        };
    }
    __init3() {
        this._handleWindowFocus = () => {
            let e = tM({ category: "ui.focus" });
            this._doChangeToForegroundTasks(e);
        };
    }
    __init4() {
        this._handleKeyboardEvent = (e) => {
            !(function (e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let r = (function (e) {
                    var t;
                    let { metaKey: r, shiftKey: n, ctrlKey: a, altKey: i, key: o, target: _ } = e;
                    if (!_ || "INPUT" === (t = _).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o)
                        return null;
                    let s = r || a || i,
                        c = 1 === o.length;
                    if (!s && c) return null;
                    let E = (0, P.Rt)(_, { maxStringLength: 200 }) || "<unknown>",
                        l = tU(_, E);
                    return tM({
                        category: "ui.keyDown",
                        message: E,
                        data: {
                            ...l.data,
                            metaKey: r,
                            shiftKey: n,
                            ctrlKey: a,
                            altKey: i,
                            key: o,
                        },
                    });
                })(t);
                r && tg(e, r);
            })(this, e);
        };
    }
    _doChangeToBackgroundTasks(e) {
        this.session &&
            (t8(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
            }) ||
                (e && this._createCustomBreadcrumb(e), this.conditionalFlush()));
    }
    _doChangeToForegroundTasks(e) {
        if (this.session) {
            if (!this.checkAndHandleExpiredSession())
                return void tX("[Replay] Document has become active, but session has expired");
            e && this._createCustomBreadcrumb(e);
        }
    }
    _updateUserActivity(e = Date.now()) {
        this._lastActivity = e;
    }
    _updateSessionActivity(e = Date.now()) {
        this.session && ((this.session.lastActivity = e), this._maybeSaveSession());
    }
    _createCustomBreadcrumb(e) {
        this.addUpdate(() => {
            this.throttledAddEvent({
                type: e0.Custom,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e,
                },
            });
        });
    }
    _addPerformanceEntries() {
        let e = this.performanceEntries.map(tB).filter(Boolean).concat(this.replayPerformanceEntries);
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(ro(this, e));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
    }
    _updateInitialTimestampFromEventBuffer() {
        let { session: e, eventBuffer: t } = this;
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        let r = t.getEarliestTimestamp();
        r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r);
    }
    _popEventContext() {
        let e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls,
        };
        return this._clearContext(), e;
    }
    async _runFlush() {
        let e = this.getSessionId();
        if (!this.session || !this.eventBuffer || !e) {
            tj && w.kg.error("[Replay] No session or eventBuffer found to flush.");
            return;
        }
        if ((await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents)) {
            if ((await rg(this), this.eventBuffer) && e === this.getSessionId())
                try {
                    this._updateInitialTimestampFromEventBuffer();
                    let t = Date.now();
                    if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 30000)
                        throw Error("Session is too long, not sending replay");
                    let r = this._popEventContext(),
                        n = this.session.segmentId++;
                    this._maybeSaveSession();
                    let a = await this.eventBuffer.finish();
                    await rw({
                        replayId: e,
                        recordingData: a,
                        segmentId: n,
                        eventContext: r,
                        session: this.session,
                        options: this.getOptions(),
                        timestamp: t,
                    });
                } catch (t) {
                    this.handleException(t), this.stop({ reason: "sendReplay" });
                    let e = (0, f.s3)();
                    e && e.recordDroppedEvent("send_error", "replay");
                }
        }
    }
    __init5() {
        this._flush = async ({ force: e = !1 } = {}) => {
            if (!this._isEnabled && !e) return;
            if (!this.checkAndHandleExpiredSession()) {
                tj && w.kg.error("[Replay] Attempting to finish replay event after session expired.");
                return;
            }
            if (!this.session) return;
            let t = this.session.started,
                r = Date.now() - t;
            this._debouncedFlush.cancel();
            let n = r < this._options.minReplayDuration,
                a = r > this._options.maxReplayDuration + 5000;
            if (n || a) {
                tX(
                    `[Replay] Session duration (${Math.floor(r / 1000)}s) is too ${n ? "short" : "long"}, not sending replay.`,
                    this._options._experiments.traceInternals,
                ),
                    n && this._debouncedFlush();
                return;
            }
            let i = this.eventBuffer;
            if (
                (i &&
                    0 === this.session.segmentId &&
                    !i.hasCheckout &&
                    tX(
                        "[Replay] Flushing initial segment without checkout.",
                        this._options._experiments.traceInternals,
                    ),
                !this._flushLock)
            ) {
                (this._flushLock = this._runFlush()), await this._flushLock, (this._flushLock = void 0);
                return;
            }
            try {
                await this._flushLock;
            } catch (e) {
                tj && w.kg.error(e);
            } finally {
                this._debouncedFlush();
            }
        };
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && t5(this.session);
    }
    __init6() {
        this._onMutationHandler = (e) => {
            let t = e.length,
                r = this._options.mutationLimit,
                n = this._options.mutationBreadcrumbLimit,
                a = r && t > r;
            if (t > n || a) {
                let e = tM({
                    category: "replay.mutations",
                    data: {
                        count: t,
                        limit: a,
                    },
                });
                this._createCustomBreadcrumb(e);
            }
            return (
                !a ||
                (this.stop({
                    reason: "mutationLimit",
                    forceFlush: "session" === this.recordingMode,
                }),
                !1)
            );
        };
    }
}
function rb(e, t) {
    return [...e, ...t].join(",");
}
let rU = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    rH = ["content-length", "content-type", "accept"],
    rK = !1,
    rB = (e) => new rW(e);
class rW {
    static __initStatic() {
        this.id = "Replay";
    }
    constructor({
        flushMinDelay: e = 5000,
        flushMaxDelay: t = 5500,
        minReplayDuration: r = 4999,
        maxReplayDuration: n = 3600000,
        stickySession: a = !0,
        useCompression: i = !0,
        workerUrl: o,
        _experiments: _ = {},
        maskAllText: s = !0,
        maskAllInputs: c = !0,
        blockAllMedia: E = !0,
        mutationBreadcrumbLimit: l = 750,
        mutationLimit: u = 10000,
        slowClickTimeout: d = 7000,
        slowClickIgnoreSelectors: I = [],
        networkDetailAllowUrls: p = [],
        networkDetailDenyUrls: R = [],
        networkCaptureBodies: T = !0,
        networkRequestHeaders: A = [],
        networkResponseHeaders: N = [],
        mask: f = [],
        maskAttributes: O = ["title", "placeholder"],
        unmask: h = [],
        block: D = [],
        unblock: S = [],
        ignore: L = [],
        maskFn: C,
        beforeAddRecordingEvent: g,
        beforeErrorSampling: m,
    } = {}) {
        this.name = rW.id;
        let y = (function ({ mask: e, unmask: t, block: r, unblock: n, ignore: a }) {
            return {
                maskTextSelector: rb(e, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: rb(t, []),
                blockSelector: rb(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                unblockSelector: rb(n, []),
                ignoreSelector: rb(a, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]']),
            };
        })({
            mask: f,
            unmask: h,
            block: D,
            unblock: S,
            ignore: L,
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: s,
                maskInputOptions: { password: !0 },
                maskTextFn: C,
                maskInputFn: C,
                maskAttributeFn: (e, t, r) =>
                    (function ({ el: e, key: t, maskAttributes: r, maskAllText: n, privacyOptions: a, value: i }) {
                        return !n || (a.unmaskTextSelector && e.matches(a.unmaskTextSelector))
                            ? i
                            : r.includes(t) ||
                                ("value" === t &&
                                    "INPUT" === e.tagName &&
                                    ["submit", "button"].includes(e.getAttribute("type") || ""))
                              ? i.replace(/[\S]/g, "*")
                              : i;
                    })({
                        maskAttributes: O,
                        maskAllText: s,
                        privacyOptions: y,
                        key: e,
                        value: t,
                        el: r,
                    }),
                ...y,
                slimDOMOptions: "all",
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: (e) => {
                    try {
                        e.__rrweb__ = !0;
                    } catch (e) {}
                },
            }),
            (this._initialOptions = {
                flushMinDelay: e,
                flushMaxDelay: t,
                minReplayDuration: Math.min(r, 15000),
                maxReplayDuration: Math.min(n, 3600000),
                stickySession: a,
                useCompression: i,
                workerUrl: o,
                blockAllMedia: E,
                maskAllInputs: c,
                maskAllText: s,
                mutationBreadcrumbLimit: l,
                mutationLimit: u,
                slowClickTimeout: d,
                slowClickIgnoreSelectors: I,
                networkDetailAllowUrls: p,
                networkDetailDenyUrls: R,
                networkCaptureBodies: T,
                networkRequestHeaders: rk(A),
                networkResponseHeaders: rk(N),
                beforeAddRecordingEvent: g,
                beforeErrorSampling: m,
                _experiments: _,
            }),
            this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
                    ? `${this._recordingOptions.blockSelector},${rU}`
                    : rU),
            this._isInitialized && (0, K.j)())
        )
            throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return rK;
    }
    set _isInitialized(e) {
        rK = e;
    }
    afterAllSetup(e) {
        (0, K.j)() && !this._replay && (this._setup(e), this._initialize(e));
    }
    start() {
        this._replay && this._replay.start();
    }
    startBuffering() {
        this._replay && this._replay.startBuffering();
    }
    stop() {
        return this._replay
            ? this._replay.stop({ forceFlush: "session" === this._replay.recordingMode })
            : Promise.resolve();
    }
    flush(e) {
        return this._replay
            ? this._replay.isEnabled()
                ? this._replay.sendBufferedReplayOrFlush(e)
                : (this._replay.start(), Promise.resolve())
            : Promise.resolve();
    }
    getReplayId() {
        if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId();
    }
    _initialize(e) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling());
    }
    _setup(e) {
        let t = (function (e, t) {
            let r = t.getOptions(),
                n = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, y.Jr)(e),
                },
                a = (0, C.o)(r.replaysSessionSampleRate),
                i = (0, C.o)(r.replaysOnErrorSampleRate);
            return (
                null == a &&
                    null == i &&
                    (0, w.Cf)(() => {
                        console.warn(
                            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                        );
                    }),
                null != a && (n.sessionSampleRate = a),
                null != i && (n.errorSampleRate = i),
                n
            );
        })(this._initialOptions, e);
        this._replay = new rM({
            options: t,
            recordingOptions: this._recordingOptions,
        });
    }
    _maybeLoadFromReplayCanvasIntegration(e) {
        try {
            let t = e.getIntegrationByName("ReplayCanvas");
            if (!t) return;
            this._replay._canvas = t.getOptions();
        } catch (e) {}
    }
}
function rk(e) {
    return [...rH, ...e.map((e) => e.toLowerCase())];
}
function rY() {
    let e = (0, f.s3)();
    return e && e.getIntegrationByName("Replay");
}
rW.__initStatic();
