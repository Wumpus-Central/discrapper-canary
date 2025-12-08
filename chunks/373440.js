let n, a, i, o, _, s;
r.d(t, {
    G: () => rY,
    T: () => rF,
});
var c,
    E,
    l,
    u,
    d,
    I,
    p,
    R,
    T = r(857609),
    A = r(990681),
    N = r(481386),
    f = r(771560),
    O = r(509440),
    h = r(918456),
    D = r(392841),
    S = r(82255),
    C = r(8062),
    L = r(380206),
    g = r(606093),
    m = r(98076),
    y = r(463725),
    P = r(847572),
    v = r(886649),
    w = r(309063),
    M = r(343573),
    G = r(431660),
    b = r(1693),
    U = r(690889),
    H = r(959036),
    K = r(896877),
    B = r(655913),
    W = r(67897),
    k = r(687566),
    Y = r(568538),
    x = r(274078),
    V = r(106260);
let F = g.n,
    j = "sentryReplaySession",
    X = "Unable to send Replay";
function $(e, t) {
    return null != e ? e : t();
}
function q(e) {
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
function z(e) {
    let t = q([e, "optionalAccess", (e) => e.host]);
    return q([t, "optionalAccess", (e) => e.shadowRoot]) === e;
}
function J(e) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(e);
}
function Z(e) {
    try {
        var t;
        let r = e.rules || e.cssRules;
        return r
            ? ((t = Array.from(r, Q).join("")).includes(" background-clip: text;") &&
                  !t.includes(" -webkit-background-clip: text;") &&
                  (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
              t)
            : null;
    } catch (e) {
        return null;
    }
}
function Q(e) {
    let t;
    if ("styleSheet" in e)
        try {
            t =
                Z(e.styleSheet) ||
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
class ee {
    constructor() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(e) {
        return e
            ? $(q([this, "access", (e) => e.getMeta, "call", (t) => t(e), "optionalAccess", (e) => e.id]), () => -1)
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
function et({ maskInputOptions: e, tagName: t, type: r }) {
    return (
        "OPTION" === t && (t = "SELECT"),
        !!(e[t.toLowerCase()] || (r && e[r]) || "password" === r || ("INPUT" === t && !r && e.text))
    );
}
function er({ isMasked: e, element: t, value: r, maskInputFn: n }) {
    let a = r || "";
    return e ? (n && (a = n(a, t)), "*".repeat(a.length)) : a;
}
function en(e) {
    return e.toLowerCase();
}
function ea(e) {
    return e.toUpperCase();
}
let ei = "__rrweb_original__";
function eo(e) {
    let t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? en(t) : null;
}
function e_(e, t, r) {
    return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value;
}
function es(e, t) {
    let r;
    try {
        r = new URL(
            e,
            $(t, () => window.location.href),
        );
    } catch (e) {
        return null;
    }
    return $(q([r.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", (e) => e[1]]), () => null);
}
let ec = {};
function eE(e) {
    let t = ec[e];
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
    return (ec[e] = n.bind(window));
}
function el(...e) {
    return eE("setTimeout")(...e);
}
function eu(...e) {
    return eE("clearTimeout")(...e);
}
let ed = 1,
    eI = RegExp("[^a-z0-9-_:]");
function ep() {
    return ed++;
}
let eR = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    eT = /^(?:[a-z+]+:)?\/\//i,
    eA = /^www\..*/i,
    eN = /^(data:)([^,]*),(.*)/i;
function ef(e, t) {
    return (e || "").replace(eR, (e, r, n, a, i, o) => {
        let _ = n || i || o,
            s = r || a || "";
        if (!_) return e;
        if (eT.test(_) || eA.test(_) || eN.test(_)) return `url(${s}${_}${s})`;
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
let eO = /^[^ \t\n\r\u000c]+/,
    eh = /^[, \t\n\r\u000c]+/;
function eD(e, t) {
    if (!t || "" === t.trim()) return t;
    let r = e.createElement("a");
    return (r.href = t), r.href;
}
function eS() {
    let e = document.createElement("a");
    return (e.href = ""), e.href;
}
function eC(e, t, r, n, a, i) {
    if (!n) return n;
    if ("src" === r || ("href" === r && ("use" !== t || "#" !== n[0])) || ("xlink:href" === r && "#" !== n[0]))
        return eD(e, n);
    if ("background" === r && ("table" === t || "td" === t || "th" === t)) return eD(e, n);
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
            for (; n(eh), !(r >= t.length); ) {
                let i = n(eO);
                if ("," === i.slice(-1)) (i = eD(e, i.substring(0, i.length - 1))), a.push(i);
                else {
                    let n = "";
                    i = eD(e, i);
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
    if ("style" === r) return ef(n, eS());
    else if ("object" === t && "data" === r) return eD(e, n);
    return "function" == typeof i ? i(r, n, a) : n;
}
function eL(e, t, r) {
    return ("video" === e || "audio" === e) && "autoplay" === t;
}
function eg(e, t, r = 1 / 0, n = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : eg(e.parentNode, t, r, n + 1);
}
function em(e, t) {
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
function ey(e, t, r, n, a, i) {
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
            if ((s = eg(o, em(n, a))) < 0) return !0;
            _ = eg(o, em(t, r), s >= 0 ? s : 1 / 0);
        } else {
            if ((_ = eg(o, em(t, r))) < 0) return !1;
            s = eg(o, em(n, a), _ >= 0 ? _ : 1 / 0);
        }
        return _ >= 0 ? !(s >= 0) || _ <= s : !(s >= 0) && !!i;
    } catch (e) {}
    return !!i;
}
function eP(e) {
    return null == e ? "" : e.toLowerCase();
}
function ev(e, t) {
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
            recordCanvas: C = !1,
            onSerialize: L,
            onIframeLoad: g,
            iframeLoadTimeout: m = 5000,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: P = 5000,
            keepIframeSrcFn: v = () => !1,
            newlyAddedElement: w = !1,
        } = t,
        { preserveWhiteSpace: M = !0 } = t,
        G = (function (e, t) {
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
                C = (function (e, t) {
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
                        rootId: C,
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
                            C = (function (e, t, r, n) {
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
                            L = (function (e) {
                                if (e instanceof HTMLFormElement) return "form";
                                let t = en(e.tagName);
                                return eI.test(t) ? "div" : t;
                            })(e),
                            g = {},
                            m = e.attributes.length;
                        for (let t = 0; t < m; t++) {
                            let r = e.attributes[t];
                            r.name && !eL(L, r.name, r.value) && (g[r.name] = eC(i, L, en(r.name), r.value, e, l));
                        }
                        if ("link" === L && c) {
                            let t = Array.from(i.styleSheets).find((t) => t.href === e.href),
                                r = null;
                            t && (r = Z(t)), r && (delete g.rel, delete g.href, (g._cssText = ef(r, t.href)));
                        }
                        if ("style" === L && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = Z(e.sheet);
                            t && (g._cssText = ef(t, eS()));
                        }
                        if ("input" === L || "textarea" === L || "select" === L || "option" === L) {
                            let t = eo(e),
                                r = e_(e, ea(L), t),
                                n = e.checked;
                            if ("submit" !== t && "button" !== t && r) {
                                let n = ey(
                                    e,
                                    O,
                                    D,
                                    h,
                                    S,
                                    et({
                                        type: t,
                                        tagName: ea(L),
                                        maskInputOptions: E,
                                    }),
                                );
                                g.value = er({
                                    isMasked: n,
                                    element: e,
                                    value: r,
                                    maskInputFn: u,
                                });
                            }
                            n && (g.checked = n);
                        }
                        if (
                            ("option" === L && (e.selected && !E.select ? (g.selected = !0) : delete g.selected),
                            "canvas" === L && R)
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
                                                    (ei in a ? a[ei] : a).call(
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
                        if ("img" === L && I) {
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
                            (("audio" === L || "video" === L) &&
                                ((g.rr_mediaState = e.paused ? "paused" : "played"),
                                (g.rr_mediaCurrentTime = e.currentTime)),
                            !A &&
                                (e.scrollLeft && (g.rr_scrollLeft = e.scrollLeft),
                                e.scrollTop && (g.rr_scrollTop = e.scrollTop)),
                            C)
                        ) {
                            let { width: t, height: r } = e.getBoundingClientRect();
                            g = {
                                class: g.class,
                                rr_width: `${t}px`,
                                rr_height: `${r}px`,
                            };
                        }
                        "iframe" !== L || T(g.src) || (C || e.contentDocument || (g.rr_src = g.src), delete g.src);
                        try {
                            customElements.get(L) && (r = !0);
                        } catch (e) {}
                        return {
                            type: p.Element,
                            tagName: L,
                            attributes: g,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: C,
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
                        rootId: C,
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
                                    (q([
                                        e,
                                        "access",
                                        (e) => e.parentNode,
                                        "access",
                                        (e) => e.sheet,
                                        "optionalAccess",
                                        (e) => e.cssRules,
                                    ]) &&
                                        (u = Z(e.parentNode.sheet)));
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                            }
                            u = ef(u, eS());
                        }
                        I && (u = "SCRIPT_PLACEHOLDER");
                        let T = ey(e, n, i, a, o, r);
                        return (
                            d || I || R || !u || !T || (u = _ ? _(u, e.parentElement) : u.replace(/[\S]/g, "*")),
                            R && u && (s.textarea || T) && (u = c ? c(u, e.parentNode) : u.replace(/[\S]/g, "*")),
                            "OPTION" === l &&
                                u &&
                                (u = er({
                                    isMasked: ey(
                                        e,
                                        n,
                                        i,
                                        a,
                                        o,
                                        et({
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
                        rootId: C,
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: p.CDATA,
                        textContent: "",
                        rootId: C,
                    };
                case e.COMMENT_NODE:
                    return {
                        type: p.Comment,
                        textContent: e.textContent || "",
                        rootId: C,
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
            recordCanvas: C,
            keepIframeSrcFn: v,
            newlyAddedElement: w,
        });
    if (!G) return console.warn(e, "not serialized"), null;
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
                                "js" === es(e.attributes.href)))
                    )
                        return !0;
                    else if (
                        t.headFavicon &&
                        (("link" === e.tagName && "shortcut icon" === e.attributes.rel) ||
                            ("meta" === e.tagName &&
                                (eP(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                    "application-name" === eP(e.attributes.name) ||
                                    "icon" === eP(e.attributes.rel) ||
                                    "apple-touch-icon" === eP(e.attributes.rel) ||
                                    "shortcut icon" === eP(e.attributes.rel))))
                    )
                        return !0;
                    else if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && eP(e.attributes.name).match(/^description|keywords$/)) return !0;
                        else if (
                            t.headMetaSocial &&
                            (eP(e.attributes.property).match(/^(og|twitter|fb):/) ||
                                eP(e.attributes.name).match(/^(og|twitter):/) ||
                                "pinterest" === eP(e.attributes.name))
                        )
                            return !0;
                        else if (
                            t.headMetaRobots &&
                            ("robots" === eP(e.attributes.name) ||
                                "googlebot" === eP(e.attributes.name) ||
                                "bingbot" === eP(e.attributes.name))
                        )
                            return !0;
                        else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                        else if (
                            t.headMetaAuthorship &&
                            ("author" === eP(e.attributes.name) ||
                                "generator" === eP(e.attributes.name) ||
                                "framework" === eP(e.attributes.name) ||
                                "publisher" === eP(e.attributes.name) ||
                                "progid" === eP(e.attributes.name) ||
                                eP(e.attributes.property).match(/^article:/) ||
                                eP(e.attributes.property).match(/^product:/))
                        )
                            return !0;
                        else if (
                            t.headMetaVerification &&
                            ("google-site-verification" === eP(e.attributes.name) ||
                                "yandex-verification" === eP(e.attributes.name) ||
                                "csrf-token" === eP(e.attributes.name) ||
                                "p:domain_verify" === eP(e.attributes.name) ||
                                "verify-v1" === eP(e.attributes.name) ||
                                "verification" === eP(e.attributes.name) ||
                                "shopify-checkout-api-token" === eP(e.attributes.name))
                        )
                            return !0;
                    }
                }
                return !1;
            })(G, h) &&
            (M || G.type !== p.Text || G.isStyle || G.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? ep()
          : -2;
    let b = Object.assign(G, { id: r });
    if ((o.add(e, b), -2 === r)) return null;
    L && L(e);
    let U = !R;
    if (b.type === p.Element) {
        (U = U && !b.needBlock), delete b.needBlock;
        let t = e.shadowRoot;
        t && J(t) && (b.isShadowHost = !0);
    }
    if ((b.type === p.Document || b.type === p.Element) && U) {
        h.headWhitespace && b.type === p.Element && "head" === b.tagName && (M = !1);
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
            recordCanvas: C,
            preserveWhiteSpace: M,
            onSerialize: L,
            onIframeLoad: g,
            iframeLoadTimeout: m,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: P,
            keepIframeSrcFn: v,
        };
        for (let r of Array.from(e.childNodes)) {
            let e = ev(r, t);
            e && b.childNodes.push(e);
        }
        if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
            for (let r of Array.from(e.shadowRoot.childNodes)) {
                let n = ev(r, t);
                n && (J(e.shadowRoot) && (n.isShadow = !0), b.childNodes.push(n));
            }
    }
    return (
        e.parentNode && z(e.parentNode) && J(e.parentNode) && (b.isShadow = !0),
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
                    let n = el(() => {
                        i || (t(), (i = !0));
                    }, r);
                    e.addEventListener("load", () => {
                        eu(n), (i = !0), t();
                    });
                    return;
                }
                let o = "about:blank";
                if (a.location.href !== o || e.src === o || "" === e.src)
                    return el(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t);
            })(
                e,
                () => {
                    let t = e.contentDocument;
                    if (t && g) {
                        let r = ev(t, {
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
                            recordCanvas: C,
                            preserveWhiteSpace: M,
                            onSerialize: L,
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
                    "css" === es(b.attributes.href))) &&
            (function (e, t, r) {
                let n,
                    a = !1;
                try {
                    n = e.sheet;
                } catch (e) {
                    return;
                }
                if (n) return;
                let i = el(() => {
                    a || (t(), (a = !0));
                }, r);
                e.addEventListener("load", () => {
                    eu(i), (a = !0), t();
                });
            })(
                e,
                () => {
                    if (y) {
                        let t = ev(e, {
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
                            recordCanvas: C,
                            preserveWhiteSpace: M,
                            onSerialize: L,
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
function ew(e) {
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
function eM(e, t, r = document) {
    let n = {
        capture: !0,
        passive: !0,
    };
    return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
}
let eG =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    eb = {
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
function eU(e, t, r = {}) {
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
                      eQ("clearTimeout")(...e);
                  })(n),
                  (n = null)),
              (a = o),
              e.apply(s, i))
            : n ||
              !1 === r.trailing ||
              (n = e0(() => {
                  (a = !1 === r.leading ? 0 : Date.now()), (n = null), e.apply(s, i);
              }, _));
    };
}
function eH(e, t, r) {
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
    (eb = new Proxy(eb, { get: (e, t, r) => ("map" === t && console.error(eG), Reflect.get(e, t, r)) }));
let eK = Date.now;
function eB(e) {
    let t = e.document;
    return {
        left: t.scrollingElement
            ? t.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : ew([t, "optionalAccess", (e) => e.documentElement, "access", (e) => e.scrollLeft]) ||
                ew([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollLeft,
                ]) ||
                ew([t, "optionalAccess", (e) => e.body, "optionalAccess", (e) => e.scrollLeft]) ||
                0,
        top: t.scrollingElement
            ? t.scrollingElement.scrollTop
            : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : ew([t, "optionalAccess", (e) => e.documentElement, "access", (e) => e.scrollTop]) ||
                ew([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollTop,
                ]) ||
                ew([t, "optionalAccess", (e) => e.body, "optionalAccess", (e) => e.scrollTop]) ||
                0,
    };
}
function eW() {
    return (
        window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight)
    );
}
function ek() {
    return (
        window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth)
    );
}
function eY(e) {
    return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function ex(e, t, r, n, a) {
    if (!e) return !1;
    let i = eY(e);
    if (!i) return !1;
    let o = em(t, r);
    if (!a) {
        let e = n && i.matches(n);
        return o(i) && !e;
    }
    let _ = eg(i, o),
        s = -1;
    return !(_ < 0) && (n && (s = eg(i, em(null, n))), (_ > -1 && s < 0) || _ < s);
}
function eV(e, t) {
    return -2 === t.getId(e);
}
function eF(e) {
    return !!e.changedTouches;
}
function ej(e, t) {
    return !!("IFRAME" === e.nodeName && t.getMeta(e));
}
function eX(e, t) {
    return !!(
        "LINK" === e.nodeName &&
        e.nodeType === e.ELEMENT_NODE &&
        e.getAttribute &&
        "stylesheet" === e.getAttribute("rel") &&
        t.getMeta(e)
    );
}
function e$(e) {
    return !!ew([e, "optionalAccess", (e) => e.shadowRoot]);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (eK = () => new Date().getTime());
class eq {
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
function ez(e) {
    let t = null;
    return (
        ew([e, "access", (e) => e.getRootNode, "optionalCall", (e) => e(), "optionalAccess", (e) => e.nodeType]) ===
            Node.DOCUMENT_FRAGMENT_NODE &&
            e.getRootNode().host &&
            (t = e.getRootNode().host),
        t
    );
}
function eJ(e) {
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
                    for (; (t = ez(r)); ) r = t;
                    return r;
                })(e);
                return t.contains(r);
            })(e))
    );
}
let eZ = {};
function eQ(e) {
    let t = eZ[e];
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
    return (eZ[e] = n.bind(window));
}
function e0(...e) {
    return eQ("setTimeout")(...e);
}
var e1 =
        (((E = e1 || {})[(E.DomContentLoaded = 0)] = "DomContentLoaded"),
        (E[(E.Load = 1)] = "Load"),
        (E[(E.FullSnapshot = 2)] = "FullSnapshot"),
        (E[(E.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
        (E[(E.Meta = 4)] = "Meta"),
        (E[(E.Custom = 5)] = "Custom"),
        (E[(E.Plugin = 6)] = "Plugin"),
        E),
    e2 =
        (((l = e2 || {})[(l.Mutation = 0)] = "Mutation"),
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
    e3 =
        (((u = e3 || {})[(u.MouseUp = 0)] = "MouseUp"),
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
    e6 = (((d = e6 || {})[(d.Mouse = 0)] = "Mouse"), (d[(d.Pen = 1)] = "Pen"), (d[(d.Touch = 2)] = "Touch"), d);
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
let e4 = (e, t) => `${e}@${t}`;
class e8 {
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
                        if (!a.parentNode || !eJ(a)) return;
                        let i = z(a.parentNode) ? this.mirror.getId(ez(a)) : this.mirror.getId(a.parentNode),
                            o = n(a);
                        if (-1 === i || -1 === o) return r.addNode(a);
                        let _ = ev(a, {
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
                                ej(e, this.mirror) &&
                                    !ex(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                                    this.iframeManager.addIframe(e),
                                    eX(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                    e$(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
                            },
                            onIframeLoad: (e, t) => {
                                ex(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                    (this.iframeManager.attachIframe(e, t),
                                    e.contentWindow && this.canvasManager.addWindow(e.contentWindow),
                                    this.shadowDomManager.observeAttachShadow(e));
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
                    te(this.droppedSet, e) || e7(this.removes, e, this.mirror)
                        ? te(this.movedSet, e)
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
                if (!eV(e.target, this.mirror))
                    switch (e.type) {
                        case "characterData": {
                            let t = e.target.textContent;
                            ex(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                t === e.oldValue ||
                                this.texts.push({
                                    value:
                                        ey(
                                            e.target,
                                            this.maskTextClass,
                                            this.maskTextSelector,
                                            this.unmaskTextClass,
                                            this.unmaskTextSelector,
                                            this.maskAllText,
                                        ) && t
                                            ? this.maskTextFn
                                                ? this.maskTextFn(t, eY(e.target))
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
                                let r = eo(t),
                                    a = t.tagName;
                                n = e_(t, a, r);
                                let i = et({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: a,
                                    type: r,
                                });
                                n = er({
                                    isMasked: ey(
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
                                ex(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
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
                                    ((a.attributes[r] = eC(this.doc, en(t.tagName), en(r), n, t, this.maskAttributeFn)),
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
                            if (ex(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                                e.removedNodes.forEach((t) => {
                                    let r = this.mirror.getId(t),
                                        n = z(e.target)
                                            ? this.mirror.getId(e.target.host)
                                            : this.mirror.getId(e.target);
                                    ex(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                        eV(t, this.mirror) ||
                                        -1 === this.mirror.getId(t) ||
                                        (this.addedSet.has(t)
                                            ? (e9(this.addedSet, t), this.droppedSet.add(t))
                                            : (this.addedSet.has(e.target) && -1 === r) ||
                                              (function e(t, r) {
                                                  if (z(t)) return !1;
                                                  let n = r.getId(t);
                                                  return (
                                                      !r.has(n) ||
                                                      ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) &&
                                                          (!t.parentNode || e(t.parentNode, r)))
                                                  );
                                              })(e.target, this.mirror) ||
                                              (this.movedSet.has(t) && this.movedMap[e4(r, n)]
                                                  ? e9(this.movedSet, t)
                                                  : this.removes.push({
                                                        parentId: n,
                                                        id: r,
                                                        isShadow: !!(z(e.target) && J(e.target)) || void 0,
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
                        if (eV(e, this.mirror)) return;
                        this.movedSet.add(e);
                        let r = null;
                        t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                            r && -1 !== r && (this.movedMap[e4(this.mirror.getId(e), r)] = !0);
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    !ex(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                        (e.childNodes.forEach((e) => this.genAdds(e)),
                        e$(e) &&
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
function e9(e, t) {
    e.delete(t), t.childNodes.forEach((t) => e9(e, t));
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
function te(e, t) {
    return (
        0 !== e.size &&
        (function e(t, r) {
            let { parentNode: n } = r;
            return !!n && (!!t.has(n) || e(t, n));
        })(e, t)
    );
}
let tt = (e) =>
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
function tr(e) {
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
let tn = [];
function ta(e) {
    try {
        if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
        } else if ("path" in e && e.path.length) return e.path[0];
    } catch (e) {}
    return e && e.target;
}
function ti(e, t) {
    let r = new e8();
    tn.push(r), r.init(e);
    let n = window.MutationObserver || window.__rrMutationObserver,
        a = tr([
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
        tt((t) => {
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
function to({ scrollCb: e, doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: i, sampling: o }) {
    return eM(
        "scroll",
        tt(
            eU(
                tt((o) => {
                    let _ = ta(o);
                    if (!_ || ex(_, n, a, i, !0)) return;
                    let s = r.getId(_);
                    if (_ === t && t.defaultView) {
                        let r = eB(t.defaultView);
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
let t_ = ["INPUT", "TEXTAREA", "SELECT"],
    ts = new WeakMap();
function tc(e) {
    var t = [];
    if (
        (td("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule) ||
        (td("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
        (td("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule) ||
        (td("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
    ) {
        let r = Array.from(e.parentRule.cssRules).indexOf(e);
        t.unshift(r);
    } else if (e.parentStyleSheet) {
        let r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
        t.unshift(r);
    }
    return t;
}
function tE(e, t, r) {
    let n, a;
    return e
        ? (e.ownerNode ? (n = t.getId(e.ownerNode)) : (a = r.getId(e)),
          {
              styleId: a,
              id: n,
          })
        : {};
}
function tl({ mirror: e, stylesheetManager: t }, r) {
    let n = null;
    n = "#document" === r.nodeName ? e.getId(r) : e.getId(r.host);
    let a =
            "#document" === r.nodeName
                ? tr([r, "access", (e) => e.defaultView, "optionalAccess", (e) => e.Document])
                : tr([
                      r,
                      "access",
                      (e) => e.ownerDocument,
                      "optionalAccess",
                      (e) => e.defaultView,
                      "optionalAccess",
                      (e) => e.ShadowRoot,
                  ]),
        i = tr([a, "optionalAccess", (e) => e.prototype])
            ? Object.getOwnPropertyDescriptor(tr([a, "optionalAccess", (e) => e.prototype]), "adoptedStyleSheets")
            : void 0;
    return null !== n && -1 !== n && a && i
        ? (Object.defineProperty(r, "adoptedStyleSheets", {
              configurable: i.configurable,
              enumerable: i.enumerable,
              get() {
                  return tr([i, "access", (e) => e.get, "optionalAccess", (e) => e.call, "call", (e) => e(this)]);
              },
              set(e) {
                  let r = tr([i, "access", (e) => e.set, "optionalAccess", (e) => e.call, "call", (t) => t(this, e)]);
                  if (null !== n && -1 !== n)
                      try {
                          t.adoptStyleSheets(e, n);
                      } catch (e) {}
                  return r;
              },
          }),
          tt(() => {
              Object.defineProperty(r, "adoptedStyleSheets", {
                  configurable: i.configurable,
                  enumerable: i.enumerable,
                  get: i.get,
                  set: i.set,
              });
          }))
        : () => {};
}
function tu(e, t = {}) {
    let r,
        n = e.doc.defaultView;
    if (!n) return () => {};
    e.recordDOM && (r = ti(e, e.doc));
    let a = (function ({ mousemoveCb: e, sampling: t, doc: r, mirror: n }) {
            let a;
            if (!1 === t.mousemove) return () => {};
            let i = "number" == typeof t.mousemove ? t.mousemove : 50,
                o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                _ = [],
                s = eU(
                    tt((t) => {
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
                c = tt(
                    eU(
                        tt((e) => {
                            let t = ta(e),
                                { clientX: r, clientY: i } = eF(e) ? e.changedTouches[0] : e;
                            a || (a = eK()),
                                _.push({
                                    x: r,
                                    y: i,
                                    id: n.getId(t),
                                    timeOffset: eK() - a,
                                }),
                                s(
                                    "undefined" != typeof DragEvent && e instanceof DragEvent
                                        ? e2.Drag
                                        : e instanceof MouseEvent
                                          ? e2.MouseMove
                                          : e2.TouchMove,
                                );
                        }),
                        i,
                        { trailing: !1 },
                    ),
                ),
                E = [eM("mousemove", c, r), eM("touchmove", c, r), eM("drag", c, r)];
            return tt(() => {
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
                Object.keys(e3)
                    .filter((e) => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== _[e])
                    .forEach((o) => {
                        let _ = en(o),
                            E = (t) => {
                                let _ = ta(t);
                                if (ex(_, n, a, i, !0)) return;
                                let s = null,
                                    E = o;
                                if ("pointerType" in t) {
                                    switch (t.pointerType) {
                                        case "mouse":
                                            s = e6.Mouse;
                                            break;
                                        case "touch":
                                            s = e6.Touch;
                                            break;
                                        case "pen":
                                            s = e6.Pen;
                                    }
                                    s === e6.Touch
                                        ? e3[o] === e3.MouseDown
                                            ? (E = "TouchStart")
                                            : e3[o] === e3.MouseUp && (E = "TouchEnd")
                                        : e6.Pen;
                                } else eF(t) && (s = e6.Touch);
                                null !== s
                                    ? ((c = s),
                                      ((E.startsWith("Touch") && s === e6.Touch) ||
                                          (E.startsWith("Mouse") && s === e6.Mouse)) &&
                                          (s = null))
                                    : e3[o] === e3.Click && ((s = c), (c = null));
                                let l = eF(t) ? t.changedTouches[0] : t;
                                if (!l) return;
                                let u = r.getId(_),
                                    { clientX: d, clientY: I } = l;
                                tt(e)({
                                    type: e3[E],
                                    id: u,
                                    x: d,
                                    y: I,
                                    ...(null !== s && { pointerType: s }),
                                });
                            };
                        if (window.PointerEvent)
                            switch (e3[o]) {
                                case e3.MouseDown:
                                case e3.MouseUp:
                                    _ = _.replace("mouse", "pointer");
                                    break;
                                case e3.TouchStart:
                                case e3.TouchEnd:
                                    return;
                            }
                        s.push(eM(_, E, t));
                    }),
                tt(() => {
                    s.forEach((e) => e());
                })
            );
        })(e),
        o = to(e),
        _ = (function ({ viewportResizeCb: e }, { win: t }) {
            let r = -1,
                n = -1;
            return eM(
                "resize",
                tt(
                    eU(
                        tt(() => {
                            let t = eW(),
                                a = ek();
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
                let r = ta(e),
                    E = e.isTrusted,
                    R = r && ea(r.tagName);
                if (("OPTION" === R && (r = r.parentElement), !r || !R || 0 > t_.indexOf(R) || ex(r, n, a, i, !0)))
                    return;
                let A = r;
                if (A.classList.contains(o) || (_ && A.matches(_))) return;
                let N = eo(r),
                    f = e_(A, R, N),
                    O = !1,
                    h = et({
                        maskInputOptions: s,
                        tagName: R,
                        type: N,
                    }),
                    D = ey(r, u, I, d, p, h);
                ("radio" === N || "checkbox" === N) && (O = r.checked),
                    (f = er({
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
                            let t = er({
                                isMasked: D,
                                element: e,
                                value: e_(e, R, N),
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
                let a = ts.get(t);
                if (!a || a.text !== n.text || a.isChecked !== n.isChecked) {
                    ts.set(t, n);
                    let a = r.getId(t);
                    tt(e)({
                        ...n,
                        id: a,
                    });
                }
            }
            let A = ("last" === E.input ? ["change"] : ["input", "change"]).map((e) => eM(e, tt(R), t)),
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
                                                      e0(() => {
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
                                        tt(R)({
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
                tt(() => {
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
            let _ = tt((o) =>
                    eU(
                        tt((i) => {
                            let _ = ta(i);
                            if (!_ || ex(_, t, r, n, !0)) return;
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
                    eM("play", _(0), o),
                    eM("pause", _(1), o),
                    eM("seeked", _(2), o),
                    eM("volumechange", _(3), o),
                    eM("ratechange", _(4), o),
                ];
            return tt(() => {
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
                apply: tt((n, a, i) => {
                    let [o, _] = i,
                        { id: s, styleId: c } = tE(a, t, r.styleMirror);
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
                apply: tt((n, a, i) => {
                    let [o] = i,
                        { id: _, styleId: s } = tE(a, t, r.styleMirror);
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
                        apply: tt((n, a, i) => {
                            let [o] = i,
                                { id: _, styleId: s } = tE(a, t, r.styleMirror);
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
                        apply: tt((n, a, i) => {
                            let [o] = i,
                                { id: _, styleId: s } = tE(a, t, r.styleMirror);
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
            tI("CSSGroupingRule")
                ? (s.CSSGroupingRule = n.CSSGroupingRule)
                : (tI("CSSMediaRule") && (s.CSSMediaRule = n.CSSMediaRule),
                  tI("CSSConditionRule") && (s.CSSConditionRule = n.CSSConditionRule),
                  tI("CSSSupportsRule") && (s.CSSSupportsRule = n.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(s).forEach(([n, a]) => {
                    (c[n] = {
                        insertRule: a.prototype.insertRule,
                        deleteRule: a.prototype.deleteRule,
                    }),
                        (a.prototype.insertRule = new Proxy(c[n].insertRule, {
                            apply: tt((n, a, i) => {
                                let [o, _] = i,
                                    { id: s, styleId: c } = tE(a.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((s && -1 !== s) || (c && -1 !== c)) &&
                                        e({
                                            id: s,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...tc(a), _ || 0],
                                                },
                                            ],
                                        }),
                                    n.apply(a, i)
                                );
                            }),
                        })),
                        (a.prototype.deleteRule = new Proxy(c[n].deleteRule, {
                            apply: tt((n, a, i) => {
                                let [o] = i,
                                    { id: _, styleId: s } = tE(a.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((_ && -1 !== _) || (s && -1 !== s)) &&
                                        e({
                                            id: _,
                                            styleId: s,
                                            removes: [
                                                {
                                                    index: [...tc(a), o],
                                                },
                                            ],
                                        }),
                                    n.apply(a, i)
                                );
                            }),
                        }));
                }),
                tt(() => {
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
        (l = tl(e, e.doc)),
        (u = (function (
            { styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: r, stylesheetManager: n },
            { win: a },
        ) {
            let i = a.CSSStyleDeclaration.prototype.setProperty;
            a.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                apply: tt((a, o, _) => {
                    let [s, c, E] = _;
                    if (r.has(s)) return i.apply(o, [s, c, E]);
                    let { id: l, styleId: u } = tE(
                        tr([o, "access", (e) => e.parentRule, "optionalAccess", (e) => e.parentStyleSheet]),
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
                                index: tc(o.parentRule),
                            }),
                        a.apply(o, _)
                    );
                }),
            });
            let o = a.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: tt((a, i, _) => {
                        let [s] = _;
                        if (r.has(s)) return o.apply(i, [s]);
                        let { id: c, styleId: E } = tE(
                            tr([i, "access", (e) => e.parentRule, "optionalAccess", (e) => e.parentStyleSheet]),
                            t,
                            n.styleMirror,
                        );
                        return (
                            ((c && -1 !== c) || (E && -1 !== E)) &&
                                e({
                                    id: c,
                                    styleId: E,
                                    remove: { property: s },
                                    index: tc(i.parentRule),
                                }),
                            a.apply(i, _)
                        );
                    }),
                })),
                tt(() => {
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
                let o = eH(t.fonts, "add", function (t) {
                    return function (r) {
                        return (
                            e0(
                                tt(() => {
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
                    tt(() => {
                        n.forEach((e) => e());
                    })
                );
            })(e)));
    let I = (function (e) {
            let { doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: i, selectionCb: o } = e,
                _ = !0,
                s = tt(() => {
                    let e = t.getSelection();
                    if (!e || (_ && tr([e, "optionalAccess", (e) => e.isCollapsed]))) return;
                    _ = e.isCollapsed || !1;
                    let s = [],
                        c = e.rangeCount || 0;
                    for (let t = 0; t < c; t++) {
                        let { startContainer: o, startOffset: _, endContainer: c, endOffset: E } = e.getRangeAt(t);
                        ex(o, n, a, i, !0) ||
                            ex(c, n, a, i, !0) ||
                            s.push({
                                start: r.getId(o),
                                startOffset: _,
                                end: r.getId(c),
                                endOffset: E,
                            });
                    }
                    o({ ranges: s });
                });
            return s(), eM("selectionchange", s);
        })(e),
        p = (function ({ doc: e, customElementCb: t }) {
            let r = e.defaultView;
            return r && r.customElements
                ? eH(r.customElements, "define", function (e) {
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
    return tt(() => {
        tn.forEach((e) => e.reset()),
            tr([r, "optionalAccess", (e) => e.disconnect, "call", (e) => e()]),
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
function td(e) {
    return void 0 !== window[e];
}
function tI(e) {
    return !!(
        void 0 !== window[e] &&
        window[e].prototype &&
        "insertRule" in window[e].prototype &&
        "deleteRule" in window[e].prototype
    );
}
class tp {
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
function tR(e) {
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
class tT {
    constructor() {
        (this.crossOriginIframeMirror = new tp(ep)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class tA {
    constructor(e) {
        (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new tp(ep)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = e.mutationCb),
            (this.wrappedEmit = e.wrappedEmit),
            (this.stylesheetManager = e.stylesheetManager),
            (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new tp(
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
            tR([this, "access", (e) => e.loadListener, "optionalCall", (t) => t(e)]),
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
            case e1.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e),
                    this.crossOriginIframeStyleMirror.reset(e),
                    this.replaceIdOnNode(t.data.node, e);
                let r = t.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(e, r),
                    this.patchRootIdOnNode(t.data.node, r),
                    {
                        timestamp: t.timestamp,
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.Mutation,
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
            case e1.Meta:
            case e1.Load:
            case e1.DomContentLoaded:
                break;
            case e1.Plugin:
                return t;
            case e1.Custom:
                return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case e1.IncrementalSnapshot:
                switch (t.data.source) {
                    case e2.Mutation:
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
                    case e2.Drag:
                    case e2.TouchMove:
                    case e2.MouseMove:
                        return (
                            t.data.positions.forEach((t) => {
                                this.replaceIds(t, e, ["id"]);
                            }),
                            t
                        );
                    case e2.ViewportResize:
                        return !1;
                    case e2.MediaInteraction:
                    case e2.MouseInteraction:
                    case e2.Scroll:
                    case e2.CanvasMutation:
                    case e2.Input:
                        return this.replaceIds(t.data, e, ["id"]), t;
                    case e2.StyleSheetRule:
                    case e2.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                    case e2.Font:
                        return t;
                    case e2.Selection:
                        return (
                            t.data.ranges.forEach((t) => {
                                this.replaceIds(t, e, ["start", "end"]);
                            }),
                            t
                        );
                    case e2.AdoptedStyleSheet:
                        return (
                            this.replaceIds(t.data, e, ["id"]),
                            this.replaceStyleIds(t.data, e, ["styleIds"]),
                            tR([
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
class tN {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class tf {
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
        if (!J(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let r = ti(
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
                to({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror,
                }),
            ),
            e0(() => {
                e.adoptedStyleSheets &&
                    e.adoptedStyleSheets.length > 0 &&
                    this.bypassOptions.stylesheetManager.adoptStyleSheets(
                        e.adoptedStyleSheets,
                        this.mirror.getId(e.host),
                    ),
                    this.restoreHandlers.push(
                        tl(
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
            eH(e.prototype, "attachShadow", function (e) {
                return function (n) {
                    let a = e.call(this, n);
                    return this.shadowRoot && eJ(this) && r.addShadowRoot(this.shadowRoot, t), a;
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
class tO {
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
class th {
    constructor(e) {
        (this.trackedLinkElements = new WeakSet()),
            (this.styleMirror = new eq()),
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
                          rule: Q(e),
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
class tD {
    constructor() {
        (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
    }
    periodicallyClear() {
        !(function (...e) {
            eQ("requestAnimationFrame")(...e);
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
let tS = new ee();
function tC(e = {}) {
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
            maskTextFn: C,
            maxCanvasSize: L = null,
            packFn: g,
            sampling: m = {},
            dataURLOptions: y = {},
            mousemoveWait: P,
            recordDOM: v = !0,
            recordCanvas: w = !1,
            recordCrossOriginIframes: M = !1,
            recordAfter: G = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
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
    let V = !M || window.parent === window,
        F = !1;
    if (!V)
        try {
            window.parent.document && (F = !1);
        } catch (e) {
            F = !0;
        }
    if (V && !r) throw Error("emit function is required");
    void 0 !== P && void 0 === m.mousemove && (m.mousemove = P), tS.reset();
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
            ((e.timestamp = eK()),
            (0, A.x)([tn, "access", (e) => e[0], "optionalAccess", (e) => e.isFrozen, "call", (e) => e()]) &&
                e.type !== e1.FullSnapshot &&
                (e.type !== e1.IncrementalSnapshot || e.data.source !== e2.Mutation) &&
                tn.forEach((e) => e.unfreeze()),
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
        if (e.type === e1.FullSnapshot) (t = e), ($ = 0);
        else if (e.type === e1.IncrementalSnapshot) {
            if (e.data.source === e2.Mutation && e.data.isAttachIframe) return;
            $++;
            let r = a && $ >= a,
                i = n && t && e.timestamp - t.timestamp > n;
            (r || i) && ei(!0);
        }
    };
    let z = (e) => {
            o({
                type: e1.IncrementalSnapshot,
                data: {
                    source: e2.Mutation,
                    ...e,
                },
            });
        },
        J = (e) =>
            o({
                type: e1.IncrementalSnapshot,
                data: {
                    source: e2.Scroll,
                    ...e,
                },
            }),
        Z = (e) =>
            o({
                type: e1.IncrementalSnapshot,
                data: {
                    source: e2.CanvasMutation,
                    ...e,
                },
            }),
        Q = new th({
            mutationCb: z,
            adoptedStyleSheetCb: (e) =>
                o({
                    type: e1.IncrementalSnapshot,
                    data: {
                        source: e2.AdoptedStyleSheet,
                        ...e,
                    },
                }),
        }),
        et =
            "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
                ? new tT()
                : new tA({
                      mirror: tS,
                      mutationCb: z,
                      stylesheetManager: Q,
                      recordCrossOriginIframes: M,
                      wrappedEmit: o,
                  });
    for (let e of K || [])
        e.getMirror &&
            e.getMirror({
                nodeMirror: tS,
                crossOriginIframeMirror: et.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror,
            });
    let er = new tD(),
        en = (function (e, t) {
            try {
                return e ? e(t) : new tO();
            } catch (e) {
                return console.warn("Unable to initialize CanvasManager"), new tO();
            }
        })(x, {
            mirror: tS,
            win: window,
            mutationCb: (e) =>
                o({
                    type: e1.IncrementalSnapshot,
                    data: {
                        source: e2.CanvasMutation,
                        ...e,
                    },
                }),
            recordCanvas: w,
            blockClass: s,
            blockSelector: c,
            unblockSelector: E,
            maxCanvasSize: L,
            sampling: m.canvas,
            dataURLOptions: y,
            errorHandler: k,
        }),
        ea =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new tN()
                : new tf({
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
                          maskTextFn: C,
                          maskInputFn: S,
                          recordCanvas: w,
                          inlineImages: H,
                          sampling: m,
                          slimDOMOptions: X,
                          iframeManager: et,
                          stylesheetManager: Q,
                          canvasManager: en,
                          keepIframeSrcFn: B,
                          processedNodeManager: er,
                      },
                      mirror: tS,
                  }),
        ei = (e = !1) => {
            if (!v) return;
            o(
                {
                    type: e1.Meta,
                    data: {
                        href: window.location.href,
                        width: ek(),
                        height: eW(),
                    },
                },
                e,
            ),
                Q.reset(),
                ea.init(),
                tn.forEach((e) => e.lock());
            let t = (function (e, t) {
                let {
                    mirror: r = new ee(),
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
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: L = () => !1,
                } = t || {};
                return ev(e, {
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
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: L,
                    newlyAddedElement: !1,
                });
            })(document, {
                mirror: tS,
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
                maskTextFn: C,
                slimDOM: X,
                dataURLOptions: y,
                recordCanvas: w,
                inlineImages: H,
                onSerialize: (e) => {
                    ej(e, tS) && et.addIframe(e),
                        eX(e, tS) && Q.trackLinkElement(e),
                        e$(e) && ea.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                    et.attachIframe(e, t), e.contentWindow && en.addWindow(e.contentWindow), ea.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                    Q.attachLinkElement(e, t);
                },
                keepIframeSrcFn: B,
            });
            if (!t) return console.warn("Failed to snapshot the document");
            o({
                type: e1.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: eB(window),
                },
            }),
                tn.forEach((e) => e.unlock()),
                document.adoptedStyleSheets &&
                    document.adoptedStyleSheets.length > 0 &&
                    Q.adoptStyleSheets(document.adoptedStyleSheets, tS.getId(document));
        };
    _ = ei;
    try {
        let e = [],
            t = (e) =>
                tt(tu)(
                    {
                        onMutation: Y,
                        mutationCb: z,
                        mousemoveCb: (e, t) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e,
                                },
                            }),
                        mouseInteractionCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.MouseInteraction,
                                    ...e,
                                },
                            }),
                        scrollCb: J,
                        viewportResizeCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.ViewportResize,
                                    ...e,
                                },
                            }),
                        inputCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.Input,
                                    ...e,
                                },
                            }),
                        mediaInteractionCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.MediaInteraction,
                                    ...e,
                                },
                            }),
                        styleSheetRuleCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.StyleSheetRule,
                                    ...e,
                                },
                            }),
                        styleDeclarationCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.StyleDeclaration,
                                    ...e,
                                },
                            }),
                        canvasMutationCb: Z,
                        fontCb: (e) =>
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.Font,
                                    ...e,
                                },
                            }),
                        selectionCb: (e) => {
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.Selection,
                                    ...e,
                                },
                            });
                        },
                        customElementCb: (e) => {
                            o({
                                type: e1.IncrementalSnapshot,
                                data: {
                                    source: e2.CustomElement,
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
                        maskTextFn: C,
                        keepIframeSrcFn: B,
                        blockSelector: c,
                        unblockSelector: E,
                        slimDOMOptions: X,
                        dataURLOptions: y,
                        mirror: tS,
                        iframeManager: et,
                        stylesheetManager: Q,
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
                                                type: e1.Plugin,
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
                      eM("DOMContentLoaded", () => {
                          o({
                              type: e1.DomContentLoaded,
                              data: {},
                          }),
                              "DOMContentLoaded" === G && r();
                      }),
                  ),
                  e.push(
                      eM(
                          "load",
                          () => {
                              o({
                                  type: e1.Load,
                                  data: {},
                              }),
                                  "load" === G && r();
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
(tC.mirror = tS),
    (tC.takeFullSnapshot = function (e) {
        if (!_) throw Error("please take full snapshot after start recording");
        _(e);
    });
let tL = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    tg = ["info", "warn", "error", "log"],
    tm = "[Replay] ";
function ty(e, t = "info") {
    (0, N.n)(
        {
            category: "console",
            data: { logger: "replay" },
            level: t,
            message: `${tm}${e}`,
        },
        { level: t },
    );
}
let tP = (function () {
    let e = !1,
        t = !1,
        r = {
            exception: () => void 0,
            infoTick: () => void 0,
            setConfig: (r) => {
                (e = r.captureExceptions), (t = r.traceInternals);
            },
        };
    return (
        tL
            ? (tg.forEach((e) => {
                  r[e] = (...r) => {
                      m.kg[e](tm, ...r), t && ty(r.join(""), (0, y.V)(e));
                  };
              }),
              (r.exception = (n, ...a) => {
                  a.length && r.error && r.error(...a), m.kg.error(tm, n), e ? (0, f.Tb)(n) : t && ty(n, "error");
              }),
              (r.infoTick = (...e) => {
                  m.kg.info(tm, ...e), t && setTimeout(() => ty(e[0]), 0);
              }))
            : tg.forEach((e) => {
                  r[e] = () => void 0;
              }),
        r
    );
})();
function tv(e) {
    return e > 9999999999 ? e : 1000 * e;
}
function tw(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function tM(e, t) {
    "sentry.transaction" !== t.category &&
        (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
        e.addUpdate(
            () => (
                e.throttledAddEvent({
                    type: e1.Custom,
                    timestamp: 1000 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, P.Fv)(t, 10, 1000),
                    },
                }),
                "console" === t.category
            ),
        ));
}
function tG(e) {
    return e.closest("button,a") || e;
}
function tb(e) {
    let t = tU(e);
    return t && t instanceof Element ? tG(t) : t;
}
function tU(e) {
    var t;
    return "object" == typeof (t = e) && t && "target" in t ? e.target : e;
}
let tH = new Set([
    e2.Mutation,
    e2.StyleSheetRule,
    e2.StyleDeclaration,
    e2.AdoptedStyleSheet,
    e2.CanvasMutation,
    e2.Selection,
    e2.MediaInteraction,
]);
class tK {
    constructor(e, t, r = tM) {
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
                this._lastMutation = tW();
            }),
            s ||
                ((s = []),
                (0, v.hl)(F, "open", function (e) {
                    return function (...t) {
                        if (s)
                            try {
                                s.forEach((e) => e());
                            } catch (e) {}
                        return e.apply(F, t);
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
            !tB.includes(r.tagName) ||
                ("INPUT" === r.tagName && !["submit", "button"].includes(r.getAttribute("type") || "")) ||
                ("A" === r.tagName &&
                    (r.hasAttribute("download") ||
                        (r.hasAttribute("target") && "_self" !== r.getAttribute("target")))) ||
                (n && r.matches(n)) ||
                !((a = e).data && "number" == typeof a.data.nodeId && a.timestamp))
        )
            return;
        let i = {
            timestamp: tw(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t,
        };
        this._clicks.some((e) => e.node === i.node && 1 > Math.abs(e.timestamp - i.timestamp)) ||
            (this._clicks.push(i), 1 === this._clicks.length && this._scheduleCheckClicks());
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = tw(e);
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = tw(e);
    }
    registerClick(e) {
        let t = tG(e);
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
            t = tW();
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
                        url: F.location.href,
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
                    url: F.location.href,
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
            (this._checkClickTimeout = (0, W.iK)(() => this._checkClicks(), 1000));
    }
}
let tB = ["A", "BUTTON", "INPUT"];
function tW() {
    return Date.now() / 1000;
}
function tk(e) {
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
let tY = new Set([
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
function tx(e, t) {
    let r = tC.mirror.getId(e),
        n = r && tC.mirror.getNode(r),
        a = n && tC.mirror.getMeta(n),
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
                              if (tY.has(r)) {
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
let tV = {
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
                  start: tX(i),
                  end: tX(a),
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
            i = tX(a);
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
                  start: tX(d),
                  end: tX(i),
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
function tF(e, t) {
    return ({ metric: r }) => void t.replayPerformanceEntries.push(e(r));
}
function tj(e) {
    let t = tV[e.entryType];
    return t ? t(e) : null;
}
function tX(e) {
    return ((M.Z1 || F.performance.timeOrigin) + e) / 1000;
}
function t$(e) {
    let t = e.entries[e.entries.length - 1];
    return tZ(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0);
}
function tq(e) {
    let t = [],
        r = [];
    for (let n of e.entries)
        if (void 0 !== n.sources) {
            let e = [];
            for (let t of n.sources)
                if (t.node) {
                    r.push(t.node);
                    let n = tC.mirror.getId(t.node);
                    n && e.push(n);
                }
            t.push({
                value: n.value,
                nodeIds: e.length ? e : void 0,
            });
        }
    return tZ(e, "cumulative-layout-shift", r, t);
}
function tz(e) {
    let t = e.entries[e.entries.length - 1];
    return tZ(e, "first-input-delay", t && t.target ? [t.target] : void 0);
}
function tJ(e) {
    let t = e.entries[e.entries.length - 1];
    return tZ(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0);
}
function tZ(e, t, r, n) {
    let a = e.value,
        i = e.rating,
        o = tX(a);
    return {
        type: "web-vital",
        name: t,
        start: o,
        end: o,
        data: {
            value: a,
            size: a,
            rating: i,
            nodeIds: r ? r.map((e) => tC.mirror.getId(e)) : void 0,
            attributions: n,
        },
    };
}
class tQ extends Error {
    constructor() {
        super("Event buffer exceeded maximum size of 20000000.");
    }
}
class t0 {
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
        if (((this._totalSize += t), this._totalSize > 20000000)) throw new tQ();
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
        return e ? tv(e) : null;
    }
}
class t1 {
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
        tL && tP.info("Destroying compression worker"), this._worker.terminate();
    }
    postMessage(e, t) {
        let r = this._getAndIncrementId();
        return new Promise((n, a) => {
            let i = ({ data: t }) => {
                if (t.method === e && t.id === r) {
                    if ((this._worker.removeEventListener("message", i), !t.success)) {
                        tL && tP.error("Error in compression worker: ", t.response),
                            a(Error("Error in compression worker"));
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
class t2 {
    constructor(e) {
        (this._worker = new t1(e)), (this._earliestTimestamp = null), (this._totalSize = 0), (this.hasCheckout = !1);
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
        let t = tv(e.timestamp);
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
        let r = JSON.stringify(e);
        return ((this._totalSize += r.length), this._totalSize > 20000000)
            ? Promise.reject(new tQ())
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
                tL && tP.exception(e, 'Sending "clear" message to worker failed', e);
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
class t3 {
    constructor(e) {
        (this._fallback = new t0()),
            (this._compression = new t2(e)),
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
            tL && tP.exception(e, "Failed to load the compression worker, falling back to simple buffer");
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
            tL && tP.exception(e, "Failed to add events when switching buffers.");
        }
    }
}
function t6() {
    try {
        return "sessionStorage" in F && !!F.sessionStorage;
    } catch (e) {
        return !1;
    }
}
function t5(e) {
    return void 0 !== e && Math.random() < e;
}
function t4(e) {
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
function t8(e) {
    if (t6())
        try {
            F.sessionStorage.setItem(j, JSON.stringify(e));
        } catch (e) {}
}
function t9({ sessionSampleRate: e, allowBuffering: t, stickySession: r = !1 }, { previousSessionId: n } = {}) {
    let a = t4({
        sampled: t5(e) ? "session" : !!t && "buffer",
        previousSessionId: n,
    });
    return r && t8(a), a;
}
function t7(e, t, r = +new Date()) {
    return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= r);
}
function re(e, { maxReplayDuration: t, sessionIdleExpire: r, targetTime: n = Date.now() }) {
    return t7(e.started, t, n) || t7(e.lastActivity, r, n);
}
function rt(e, { sessionIdleExpire: t, maxReplayDuration: r }) {
    return (
        !!re(e, {
            sessionIdleExpire: t,
            maxReplayDuration: r,
        }) &&
        ("buffer" !== e.sampled || 0 !== e.segmentId)
    );
}
function rr({ sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: r }, n) {
    let a =
        n.stickySession &&
        (function () {
            if (!t6()) return null;
            try {
                let e = F.sessionStorage.getItem(j);
                if (!e) return null;
                let t = JSON.parse(e);
                return tL && tP.infoTick("Loading existing session"), t4(t);
            } catch (e) {
                return null;
            }
        })();
    return a
        ? rt(a, {
              sessionIdleExpire: e,
              maxReplayDuration: t,
          })
            ? (tL && tP.infoTick("Session in sessionStorage is expired, creating new one..."),
              t9(n, { previousSessionId: a.id }))
            : a
        : (tL && tP.infoTick("Creating new session"), t9(n, { previousSessionId: r }));
}
function rn(e, t, r) {
    return !!ri(e, t) && (ra(e, t, r), !0);
}
async function ra(e, t, r) {
    if (!e.eventBuffer) return null;
    try {
        r && "buffer" === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
        let n = e.getOptions(),
            a = (function (e, t) {
                try {
                    if ("function" == typeof t && e.type === e1.Custom) return t(e);
                } catch (e) {
                    return (
                        tL &&
                            tP.exception(
                                e,
                                "An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                            ),
                        null
                    );
                }
                return e;
            })(t, n.beforeAddRecordingEvent);
        if (!a) return;
        return await e.eventBuffer.addEvent(a);
    } catch (n) {
        let t = n && n instanceof tQ ? "addEventSizeExceeded" : "addEvent";
        e.handleException(n), await e.stop({ reason: t });
        let r = (0, O.s3)();
        r && r.recordDroppedEvent("internal_sdk_error", "replay");
    }
}
function ri(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let r = tv(t.timestamp);
    return (
        !(r + e.timeouts.sessionIdlePause < Date.now()) &&
        (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) ||
            (tL && tP.infoTick(`Skipping event with timestamp ${r} because it is after maxReplayDuration`), !1))
    );
}
function ro(e) {
    return "transaction" === e.type;
}
function r_(e) {
    return "feedback" === e.type;
}
function rs(e) {
    return !!e.category;
}
function rc(e, t) {
    return t.map(({ type: t, start: r, end: n, name: a, data: i }) => {
        let o = e.throttledAddEvent({
            type: e1.Custom,
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
function rE(e, t) {
    var r;
    e.isEnabled() &&
        null !== t &&
        ((r = t.name),
        ((!tL || !e.getOptions()._experiments.traceInternals) && (0, h.W)(r, (0, O.s3)())) ||
            e.addUpdate(() => (rc(e, [t]), !0)));
}
function rl(e) {
    if (!e) return;
    let t = new TextEncoder();
    try {
        if ("string" == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let r = rN(e);
            return t.encode(r).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
    } catch (e) {}
}
function ru(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t;
}
function rd(e) {
    try {
        if ("string" == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [rN(e)];
        if (!e) return [void 0];
    } catch (t) {
        return tL && tP.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"];
    }
    return tL && tP.info("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function rI(e, t) {
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
function rp(e, t) {
    if (!t) return null;
    let { startTimestamp: r, endTimestamp: n, url: a, method: i, statusCode: o, request: _, response: s } = t;
    return {
        type: e,
        start: r / 1000,
        end: n / 1000,
        name: a,
        data: (0, v.Jr)({
            method: i,
            statusCode: o,
            request: _,
            response: s,
        }),
    };
}
function rR(e) {
    return {
        headers: {},
        size: e,
        _meta: { warnings: ["URL_SKIPPED"] },
    };
}
function rT(e, t, r) {
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
function rA(e, t) {
    return Object.entries(e).reduce((r, [n, a]) => {
        let i = n.toLowerCase();
        return t.includes(i) && e[n] && (r[i] = a), r;
    }, {});
}
function rN(e) {
    return new URLSearchParams(e).toString();
}
function rf(e, t) {
    let r = (function (e, t = F.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(F.location.origin)) return e;
        let r = new URL(e, t);
        if (r.origin !== new URL(t).origin) return e;
        let n = r.href;
        return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n;
    })(e);
    return (0, b.U0)(r, t);
}
async function rO(e, t, r) {
    try {
        let n = await rh(e, t, r),
            a = rp("resource.fetch", n);
        rE(r.replay, a);
    } catch (e) {
        tL && tP.exception(e, "Failed to capture fetch breadcrumb");
    }
}
async function rh(e, t, r) {
    let n = Date.now(),
        { startTimestamp: a = n, endTimestamp: i = n } = t,
        { url: o, method: _, status_code: s = 0, request_body_size: c, response_body_size: E } = e.data,
        l = rf(o, r.networkDetailAllowUrls) && !rf(o, r.networkDetailDenyUrls);
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
                        1 === a.length && "string" != typeof a[0] ? rg(a[0], i) : 2 === a.length ? rg(a[1], i) : {})
                      : {};
                  if (!e) return rT(o, n, void 0);
                  let [_, s] = rd(rC(r)),
                      c = rT(o, n, _);
                  return s ? rI(c, s) : c;
              })(r, t.input, c)
            : rR(c),
        response: await rD(l, r, t.response, E),
    };
}
async function rD(e, { networkCaptureBodies: t, networkResponseHeaders: r }, n, a) {
    if (!e && void 0 !== a) return rR(a);
    let i = n ? rL(n.headers, r) : {};
    if (!n || (!t && void 0 !== a)) return rT(i, a, void 0);
    let [o, _] = await rS(n),
        s = (function (e, { networkCaptureBodies: t, responseBodySize: r, captureDetails: n, headers: a }) {
            try {
                let i = e && e.length && void 0 === r ? rl(e) : r;
                if (!n) return rR(i);
                if (t) return rT(a, i, e);
                return rT(a, i, void 0);
            } catch (e) {
                return tL && tP.exception(e, "Failed to serialize response body"), rT(a, r, void 0);
            }
        })(o, {
            networkCaptureBodies: t,
            responseBodySize: a,
            captureDetails: e,
            headers: i,
        });
    return _ ? rI(s, _) : s;
}
async function rS(e) {
    let t = (function (e) {
        try {
            return e.clone();
        } catch (e) {
            tL && tP.exception(e, "Failed to clone response body");
        }
    })(e);
    if (!t) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var r;
        return [
            await ((r = t),
            new Promise((e, t) => {
                let n = (0, W.iK)(() => t(Error("Timeout while trying to read response body")), 500);
                rm(r)
                    .then(
                        (t) => e(t),
                        (e) => t(e),
                    )
                    .finally(() => clearTimeout(n));
            })),
        ];
    } catch (e) {
        return tL && tP.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"];
    }
}
function rC(e = []) {
    if (2 === e.length && "object" == typeof e[1]) return e[1].body;
}
function rL(e, t) {
    let r = {};
    return (
        t.forEach((t) => {
            e.get(t) && (r[t] = e.get(t));
        }),
        r
    );
}
function rg(e, t) {
    if (!e) return {};
    let r = e.headers;
    return r ? (r instanceof Headers ? rL(r, t) : Array.isArray(r) ? {} : rA(r, t)) : {};
}
async function rm(e) {
    return await e.text();
}
async function ry(e, t, r) {
    try {
        let n = (function (e, t, r) {
                let n = Date.now(),
                    { startTimestamp: a = n, endTimestamp: i = n, input: o, xhr: _ } = t,
                    { url: s, method: c, status_code: E = 0, request_body_size: l, response_body_size: u } = e.data;
                if (!s) return null;
                if (!_ || !rf(s, r.networkDetailAllowUrls) || rf(s, r.networkDetailDenyUrls)) {
                    let e = rR(l);
                    return {
                        startTimestamp: a,
                        endTimestamp: i,
                        url: s,
                        method: c,
                        statusCode: E,
                        request: e,
                        response: rR(u),
                    };
                }
                let d = _[Y.xU],
                    I = d ? rA(d.request_headers, r.networkRequestHeaders) : {},
                    p = rA(
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
                    [R, T] = r.networkCaptureBodies ? rd(o) : [void 0],
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
                                          tL && tP.exception(e, "Failed to serialize body", r),
                                          [void 0, "BODY_PARSE_ERROR"]
                                      );
                                  }
                                  return (
                                      tL && tP.info("Skipping network body because of body type", r),
                                      [void 0, "UNPARSEABLE_BODY_TYPE"]
                                  );
                              } catch (e) {
                                  t.push(e);
                              }
                              return tL && tP.warn("Failed to get xhr response body", ...t), [void 0];
                          })(_)
                        : [void 0],
                    f = rT(I, l, R),
                    O = rT(p, u, A);
                return {
                    startTimestamp: a,
                    endTimestamp: i,
                    url: s,
                    method: c,
                    statusCode: E,
                    request: T ? rI(f, T) : f,
                    response: N ? rI(O, N) : O,
                };
            })(e, t, r),
            a = rp("resource.xhr", n);
        rE(r.replay, a);
    } catch (e) {
        tL && tP.exception(e, "Failed to capture xhr breadcrumb");
    }
}
async function rP(e) {
    try {
        return Promise.all(
            rc(e, [
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
                })(F.performance.memory),
            ]),
        );
    } catch (e) {
        return [];
    }
}
async function rv({ client: e, scope: t, replayId: r, event: n }) {
    let a = {
        event_id: r,
        integrations:
            "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations)
                ? void 0
                : Object.keys(e._integrations),
    };
    e.emit("preprocessEvent", n, a);
    let i = await (0, D.R)(e.getOptions(), n, a, t, e, (0, O.aF)());
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
async function rw({ recordingData: e, replayId: t, segmentId: r, eventContext: n, timestamp: a, session: i }) {
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
        d = (0, O.s3)(),
        I = (0, O.nZ)(),
        p = d && d.getTransport(),
        R = d && d.getDsn();
    if (!d || !p || !R || !i.sampled) return (0, H.WD)({});
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
        A = await rv({
            scope: I,
            client: d,
            replayId: t,
            event: T,
        });
    if (!A)
        return (
            d.recordDroppedEvent("event_processor", "replay", T),
            tL && tP.info("An event processor returned `null`, will not send event."),
            (0, H.WD)({})
        );
    delete A.sdkProcessingMetadata;
    let N =
        ((o = d.getOptions().tunnel),
        (0, U.Jd)((0, U.Cd)(A, (0, U.HY)(A), o, R), [
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
        let e = Error(X);
        try {
            e.cause = t;
        } catch (e) {}
        throw e;
    }
    if ("number" == typeof _.statusCode && (_.statusCode < 200 || _.statusCode >= 300)) throw new rM(_.statusCode);
    let f = (0, K.WG)({}, _);
    if ((0, K.Q)(f, "replay")) throw new rG(f);
    return _;
}
class rM extends Error {
    constructor(e) {
        super(`Transport returned status code ${e}`);
    }
}
class rG extends Error {
    constructor(e) {
        super("Rate limit hit"), (this.rateLimits = e);
    }
}
async function rb(
    e,
    t = {
        count: 0,
        interval: 5000,
    },
) {
    let { recordingData: r, onError: n } = e;
    if (r.length)
        try {
            return await rw(e), !0;
        } catch (r) {
            if (r instanceof rM || r instanceof rG) throw r;
            if (((0, f.v)("Replays", { _retryCount: t.count }), n && n(r), t.count >= 3)) {
                let e = Error(`${X} - max retries exceeded`);
                try {
                    e.cause = r;
                } catch (e) {}
                throw e;
            }
            return (
                (t.interval *= ++t.count),
                new Promise((r, n) => {
                    (0, W.iK)(async () => {
                        try {
                            await rb(e, t), r(!0);
                        } catch (e) {
                            n(e);
                        }
                    }, t.interval);
                })
            );
        }
}
let rU = "__THROTTLED";
class rH {
    constructor({ options: e, recordingOptions: t }) {
        rH.prototype.__init.call(this),
            rH.prototype.__init2.call(this),
            rH.prototype.__init3.call(this),
            rH.prototype.__init4.call(this),
            rH.prototype.__init5.call(this),
            rH.prototype.__init6.call(this),
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
                    return a && clearTimeout(a), (a = (0, W.iK)(_, t)), o && void 0 === i && (i = (0, W.iK)(_, o)), n;
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
                        return (a = !0), e ? "__SKIPPED" : rU;
                    }
                    a = !1;
                    let o = n.get(r) || 0;
                    return n.set(r, o + 1), e(...t);
                };
            })(
                (e, t) =>
                    (function (e, t, r) {
                        return ri(e, t) ? ra(e, t, r) : Promise.resolve(null);
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
        if ((a && (this.clickDetector = new tK(this, a)), tL)) {
            let t = e._experiments;
            tP.setConfig({
                captureExceptions: !!t.captureExceptions,
                traceInternals: !!t.traceInternals,
            });
        }
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
        tL && tP.exception(e), this._options.onError && this._options.onError(e);
    }
    initializeSampling(e) {
        let { errorSampleRate: t, sessionSampleRate: r } = this._options,
            n = t <= 0 && r <= 0;
        if (((this._requiresManualStart = n), !n)) {
            if ((this._initializeSessionForSampling(e), !this.session)) {
                tL && tP.exception(Error("Unable to initialize and create session"));
                return;
            }
            !1 !== this.session.sampled &&
                ((this.recordingMode =
                    "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session"),
                tL && tP.infoTick(`Starting replay in ${this.recordingMode} mode`),
                this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && "session" === this.recordingMode) {
            tL && tP.info("Recording is already in progress");
            return;
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
            tL && tP.info("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        tL && tP.infoTick("Starting replay in session mode"), this._updateUserActivity();
        let e = rr(
            {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
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
            tL && tP.info("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        tL && tP.infoTick("Starting replay in buffer mode");
        let e = rr(
            {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
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
            this._stopRecording = tC({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode
                    ? { checkoutEveryNms: 60000 }
                    : this._options._experiments.continuousCheckout && {
                          checkoutEveryNms: Math.max(360000, this._options._experiments.continuousCheckout),
                      }),
                emit:
                    ((e = this),
                    (t = !1),
                    (r, n) => {
                        if (!e.checkAndHandleExpiredSession()) {
                            tL && tP.warn("Received replay event after session expired.");
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
                                            (tH.has(n) && e.registerMutation(t.timestamp),
                                            n === e2.Scroll && e.registerScroll(t.timestamp),
                                            t.data.source === e2.MouseInteraction)
                                        ) {
                                            let { type: r, id: n } = t.data,
                                                a = tC.mirror.getNode(n);
                                            a instanceof HTMLElement && r === e3.Click && e.registerClick(a);
                                        }
                                    } catch (e) {}
                                })(e.clickDetector, r),
                            e.addUpdate(() => {
                                var t;
                                if (("buffer" === e.recordingMode && a && e.setInitialState(), !rn(e, r, a))) return !0;
                                if (!a) return !1;
                                let n = e.session;
                                if (
                                    ((t = e),
                                    a &&
                                        t.session &&
                                        0 === t.session.segmentId &&
                                        rn(
                                            t,
                                            (function (e) {
                                                let t = e.getOptions();
                                                return {
                                                    type: e1.Custom,
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
                                    n && n.previousSessionId)
                                )
                                    return !0;
                                if ("buffer" === e.recordingMode && n && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t &&
                                        (tL &&
                                            tP.info(
                                                `Updating session start time to earliest event in buffer to ${new Date(t)}`,
                                            ),
                                        (n.started = t),
                                        e.getOptions().stickySession && t8(n));
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
                tL && tP.info(`Stopping Replay${t ? ` triggered by ${t}` : ""}`),
                    this._removeListeners(),
                    this.stopRecording(),
                    this._debouncedFlush.cancel(),
                    e && (await this._flush({ force: !0 })),
                    this.eventBuffer && this.eventBuffer.destroy(),
                    (this.eventBuffer = null),
                    (function () {
                        if (t6())
                            try {
                                F.sessionStorage.removeItem(j);
                            } catch (e) {}
                    })(),
                    (this.session = void 0);
            } catch (e) {
                this.handleException(e);
            }
        }
    }
    pause() {
        !this._isPaused && ((this._isPaused = !0), this.stopRecording(), tL && tP.info("Pausing replay"));
    }
    resume() {
        this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1), this.startRecording(), tL && tP.info("Resuming replay"));
    }
    async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let t = Date.now();
        tL && tP.info("Converting buffer to session"), await this.flushImmediate();
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
            t7(this._lastActivity, this.timeouts.sessionIdlePause) &&
            this.session &&
            "session" === this.session.sampled
            ? void this.pause()
            : !!this._checkSession();
    }
    setInitialState() {
        let e = `${F.location.pathname}${F.location.hash}${F.location.search}`,
            t = `${F.location.origin}${e}`;
        (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            this._clearContext(),
            (this._context.initialUrl = t),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(t);
    }
    throttledAddEvent(e, t) {
        let r = this._throttledAddEvent(e, t);
        if (r === rU) {
            let e = tk({ category: "replay.throttled" });
            this.addUpdate(
                () =>
                    !rn(this, {
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
            r = ((t && (0, S.XU)(t).data) || {})[C.Zj];
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
                            tL && tP.info(`Using compression worker${e ? ` from ${e}` : ""}`);
                            let r = new Worker(t);
                            return new t3(r);
                        } catch (e) {
                            tL && tP.exception(e, "Failed to create compression worker");
                        }
                    })(t);
                    if (e) return e;
                }
                return tL && tP.info("Using simple buffer"), new t0();
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
            r = rr(
                {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
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
            !rt(e, {
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
            F.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                F.addEventListener("blur", this._handleWindowBlur),
                F.addEventListener("focus", this._handleWindowFocus),
                F.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                    (!(function (e) {
                        let t = (0, O.s3)();
                        (0, x.O)((t) => {
                            var r, n;
                            if (!e.isEnabled()) return;
                            let a = (function (e) {
                                let { target: t, message: r } = (function (e) {
                                    let t,
                                        r = "click" === e.name,
                                        n = null;
                                    try {
                                        (n = r ? tb(e.event) : tU(e.event)),
                                            (t = (0, w.Rt)(n, { maxStringLength: 200 }) || "<unknown>");
                                    } catch (e) {
                                        t = "<unknown>";
                                    }
                                    return {
                                        target: n,
                                        message: t,
                                    };
                                })(e);
                                return tk({
                                    category: `ui.${e.name}`,
                                    ...tx(t, r),
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
                                ((r = e.clickDetector), (n = tb(t.event)), r.handleClick(a, n)),
                                tM(e, a);
                        }),
                            (0, V.a)((t) => {
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
                                    e.addUpdate(() => (rc(e, [r]), !1)));
                            });
                        let r = (0, O.s3)();
                        r &&
                            r.on("beforeAddBreadcrumb", (t) =>
                                (function (e, t) {
                                    var r;
                                    if (!e.isEnabled() || !rs(t)) return;
                                    let n =
                                        ((r = t),
                                        !rs(r) ||
                                        ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(r.category) ||
                                        r.category.startsWith("ui.")
                                            ? null
                                            : "console" === r.category
                                              ? (function (e) {
                                                    let t = e.data && e.data.arguments;
                                                    if (!Array.isArray(t) || 0 === t.length) return tk(e);
                                                    let r = !1,
                                                        n = t.map((e) => {
                                                            if (!e) return e;
                                                            if ("string" == typeof e)
                                                                return e.length > 5000
                                                                    ? ((r = !0), `${e.slice(0, 5000)}…`)
                                                                    : e;
                                                            if ("object" == typeof e)
                                                                try {
                                                                    let t = (0, P.Fv)(e, 7);
                                                                    if (JSON.stringify(t).length > 5000)
                                                                        return (
                                                                            (r = !0),
                                                                            `${JSON.stringify(t, null, 2).slice(0, 5000)}…`
                                                                        );
                                                                    return t;
                                                                } catch (e) {}
                                                            return e;
                                                        });
                                                    return tk({
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
                                              : tk(r));
                                    n && tM(e, n);
                                })(e, t),
                            );
                        let n = (0, O.s3)();
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
                                                            let a = rl(n),
                                                                i = r.getResponseHeader("content-length")
                                                                    ? ru(r.getResponseHeader("content-length"))
                                                                    : (function (e, t) {
                                                                          try {
                                                                              let r =
                                                                                  "json" === t &&
                                                                                  e &&
                                                                                  "object" == typeof e
                                                                                      ? JSON.stringify(e)
                                                                                      : e;
                                                                              return rl(r);
                                                                          } catch (e) {
                                                                              return;
                                                                          }
                                                                      })(r.response, r.responseType);
                                                            void 0 !== a && (e.data.request_body_size = a),
                                                                void 0 !== i && (e.data.response_body_size = i);
                                                        })(t, r),
                                                        ry(t, r, e)),
                                                    (i = t),
                                                    "fetch" === i.category && (o = r) && o.response)
                                                ) {
                                                    let { input: n, response: a } = r,
                                                        i = rl(n ? rC(n) : void 0),
                                                        o = a ? ru(a.headers.get("content-length")) : void 0;
                                                    void 0 !== i && (t.data.request_body_size = i),
                                                        void 0 !== o && (t.data.response_body_size = o),
                                                        rO(t, r, e);
                                                }
                                            } catch (e) {
                                                tL && tP.exception(e, "Error when enriching network breadcrumb");
                                            }
                                    })(_, e, t),
                                );
                        } catch (e) {}
                        let a = Object.assign(
                            (t, r) =>
                                e.isEnabled()
                                    ? "replay_event" === t.type
                                        ? (delete t.breadcrumbs, t)
                                        : (!t.type || ro(t) || r_(t)) && e.checkAndHandleExpiredSession()
                                          ? r_(t)
                                              ? (e.flush(),
                                                (t.contexts.feedback.replay_id = e.getSessionId()),
                                                e.triggerUserActivity(),
                                                e.addUpdate(
                                                    () =>
                                                        !t.timestamp ||
                                                        (e.throttledAddEvent({
                                                            type: e1.Custom,
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
                                                ? (tL && tP.log("Ignoring error from rrweb internals", t), null)
                                                : ((("buffer" === e.recordingMode &&
                                                      t.message !== X &&
                                                      t.exception &&
                                                      !t.type &&
                                                      t5(e.getOptions().errorSampleRate)) ||
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
                        (0, f.Qy)(a),
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
                                                tM(
                                                    e,
                                                    tk({
                                                        category: "replay.hydrate-error",
                                                        data: { url: (0, w.l4)() },
                                                    }),
                                                );
                                        })(e, t);
                                }),
                                t.on("afterSendEvent", (t, r) => {
                                    if (!e.isEnabled() || (t.type && !ro(t))) return;
                                    let n = r && r.statusCode;
                                    if (n && !(n < 200) && !(n >= 300)) {
                                        if (ro(t))
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
                                                (0, W.iK)(() => {
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
                    n.push((0, k._j)(e, r));
                }),
                n.push((0, k.$A)(tF(t$, e)), (0, k.PR)(tF(tq, e)), (0, k.to)(tF(tz, e)), (0, k.YF)(tF(tJ, e))),
                () => {
                    n.forEach((e) => e());
                }
            );
        })(this);
    }
    _removeListeners() {
        try {
            F.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                F.removeEventListener("blur", this._handleWindowBlur),
                F.removeEventListener("focus", this._handleWindowFocus),
                F.removeEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.removeListeners(),
                this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (e) {
            this.handleException(e);
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            "visible" === F.document.visibilityState
                ? this._doChangeToForegroundTasks()
                : this._doChangeToBackgroundTasks();
        };
    }
    __init2() {
        this._handleWindowBlur = () => {
            let e = tk({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(e);
        };
    }
    __init3() {
        this._handleWindowFocus = () => {
            let e = tk({ category: "ui.focus" });
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
                    let E = (0, w.Rt)(_, { maxStringLength: 200 }) || "<unknown>",
                        l = tx(_, E);
                    return tk({
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
                r && tM(e, r);
            })(this, e);
        };
    }
    _doChangeToBackgroundTasks(e) {
        this.session &&
            (re(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
            }) ||
                (e && this._createCustomBreadcrumb(e), this.conditionalFlush()));
    }
    _doChangeToForegroundTasks(e) {
        if (this.session) {
            if (!this.checkAndHandleExpiredSession()) {
                tL && tP.info("Document has become active, but session has expired");
                return;
            }
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
                type: e1.Custom,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e,
                },
            });
        });
    }
    _addPerformanceEntries() {
        let e = this.performanceEntries.map(tj).filter(Boolean).concat(this.replayPerformanceEntries);
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(rc(this, e));
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
            tL && tP.error("No session or eventBuffer found to flush.");
            return;
        }
        if ((await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents)) {
            if ((await rP(this), this.eventBuffer) && e === this.getSessionId())
                try {
                    this._updateInitialTimestampFromEventBuffer();
                    let t = Date.now();
                    if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 30000)
                        throw Error("Session is too long, not sending replay");
                    let r = this._popEventContext(),
                        n = this.session.segmentId++;
                    this._maybeSaveSession();
                    let a = await this.eventBuffer.finish();
                    await rb({
                        replayId: e,
                        recordingData: a,
                        segmentId: n,
                        eventContext: r,
                        session: this.session,
                        timestamp: t,
                        onError: (e) => this.handleException(e),
                    });
                } catch (t) {
                    this.handleException(t), this.stop({ reason: "sendReplay" });
                    let e = (0, O.s3)();
                    e && e.recordDroppedEvent(t instanceof rG ? "ratelimit_backoff" : "send_error", "replay");
                }
        }
    }
    __init5() {
        this._flush = async ({ force: e = !1 } = {}) => {
            if (!this._isEnabled && !e) return;
            if (!this.checkAndHandleExpiredSession()) {
                tL && tP.error("Attempting to finish replay event after session expired.");
                return;
            }
            if (!this.session) return;
            let t = this.session.started,
                r = Date.now() - t;
            this._debouncedFlush.cancel();
            let n = r < this._options.minReplayDuration,
                a = r > this._options.maxReplayDuration + 5000;
            if (n || a) {
                tL &&
                    tP.info(
                        `Session duration (${Math.floor(r / 1000)}s) is too ${n ? "short" : "long"}, not sending replay.`,
                    ),
                    n && this._debouncedFlush();
                return;
            }
            let i = this.eventBuffer;
            i &&
                0 === this.session.segmentId &&
                !i.hasCheckout &&
                tL &&
                tP.info("Flushing initial segment without checkout.");
            let o = !!this._flushLock;
            this._flushLock || (this._flushLock = this._runFlush());
            try {
                await this._flushLock;
            } catch (e) {
                this.handleException(e);
            } finally {
                (this._flushLock = void 0), o && this._debouncedFlush();
            }
        };
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && t8(this.session);
    }
    __init6() {
        this._onMutationHandler = (e) => {
            let t = e.length,
                r = this._options.mutationLimit,
                n = this._options.mutationBreadcrumbLimit,
                a = r && t > r;
            if (t > n || a) {
                let e = tk({
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
function rK(e, t) {
    return [...e, ...t].join(",");
}
let rB = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    rW = ["content-length", "content-type", "accept"],
    rk = !1,
    rY = (e) => new rx(e);
class rx {
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
        ignore: C = [],
        maskFn: L,
        beforeAddRecordingEvent: g,
        beforeErrorSampling: m,
    } = {}) {
        this.name = rx.id;
        let y = (function ({ mask: e, unmask: t, block: r, unblock: n, ignore: a }) {
            return {
                maskTextSelector: rK(e, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: rK(t, []),
                blockSelector: rK(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                unblockSelector: rK(n, []),
                ignoreSelector: rK(a, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]']),
            };
        })({
            mask: f,
            unmask: h,
            block: D,
            unblock: S,
            ignore: C,
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: s,
                maskInputOptions: { password: !0 },
                maskTextFn: L,
                maskInputFn: L,
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
                networkRequestHeaders: rV(A),
                networkResponseHeaders: rV(N),
                beforeAddRecordingEvent: g,
                beforeErrorSampling: m,
                _experiments: _,
            }),
            this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
                    ? `${this._recordingOptions.blockSelector},${rB}`
                    : rB),
            this._isInitialized && (0, B.j)())
        )
            throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return rk;
    }
    set _isInitialized(e) {
        rk = e;
    }
    afterAllSetup(e) {
        (0, B.j)() && !this._replay && (this._setup(e), this._initialize(e));
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
                    ...(0, v.Jr)(e),
                },
                a = (0, L.o)(r.replaysSessionSampleRate),
                i = (0, L.o)(r.replaysOnErrorSampleRate);
            return (
                null == a &&
                    null == i &&
                    (0, m.Cf)(() => {
                        console.warn(
                            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                        );
                    }),
                null != a && (n.sessionSampleRate = a),
                null != i && (n.errorSampleRate = i),
                n
            );
        })(this._initialOptions, e);
        this._replay = new rH({
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
function rV(e) {
    return [...rW, ...e.map((e) => e.toLowerCase())];
}
function rF() {
    let e = (0, O.s3)();
    return e && e.getIntegrationByName("Replay");
}
rx.__initStatic();
