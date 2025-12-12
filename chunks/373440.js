let r, i, a, o, _, s;
n.d(t, {
    G: () => nx,
    T: () => nV,
});
var c,
    E,
    l,
    u,
    d,
    p,
    f,
    I,
    T = n(857609),
    R = n(990681),
    A = n(481386),
    N = n(771560),
    h = n(509440),
    O = n(918456),
    S = n(392841),
    L = n(82255),
    g = n(8062),
    m = n(380206),
    D = n(606093),
    C = n(98076),
    y = n(463725),
    P = n(847572),
    v = n(886649),
    b = n(309063),
    M = n(343573),
    w = n(431660),
    U = n(1693),
    G = n(690889),
    H = n(959036),
    B = n(896877),
    k = n(655913),
    K = n(67897),
    W = n(687566),
    x = n(568538),
    Y = n(274078),
    F = n(106260);
let V = D.n,
    j = "sentryReplaySession",
    X = "Unable to send Replay";
function $(e, t) {
    return null != e ? e : t();
}
function q(e) {
    let t,
        n = e[0],
        r = 1;
    for (; r < e.length; ) {
        let i = e[r],
            a = e[r + 1];
        if (((r += 2), ("optionalAccess" === i || "optionalCall" === i) && null == n)) return;
        "access" === i || "optionalAccess" === i
            ? ((t = n), (n = a(n)))
            : ("call" === i || "optionalCall" === i) && ((n = a((...e) => n.call(t, ...e))), (t = void 0));
    }
    return n;
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
        let n = e.rules || e.cssRules;
        return n
            ? ((t = Array.from(n, Q).join("")).includes(" background-clip: text;") &&
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
                    let n = ["@import", `url(${JSON.stringify(e.href)})`];
                    return (
                        "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
                        e.supportsText && n.push(`supports(${e.supportsText})`),
                        e.media.length && n.push(e.media.mediaText),
                        n.join(" ") + ";"
                    );
                })(e);
        } catch (e) {}
    else if ("selectorText" in e && e.selectorText.includes(":"))
        return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
    return t || e.cssText;
}
((c = f || (f = {}))[(c.Document = 0)] = "Document"),
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
        let n = t.id;
        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
    }
    replace(e, t) {
        let n = this.getNode(e);
        if (n) {
            let e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e);
        }
        this.idNodeMap.set(e, t);
    }
    reset() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
}
function et({ maskInputOptions: e, tagName: t, type: n }) {
    return (
        "OPTION" === t && (t = "SELECT"),
        !!(e[t.toLowerCase()] || (n && e[n]) || "password" === n || ("INPUT" === t && !n && e.text))
    );
}
function en({ isMasked: e, element: t, value: n, maskInputFn: r }) {
    let i = n || "";
    return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i;
}
function er(e) {
    return e.toLowerCase();
}
function ei(e) {
    return e.toUpperCase();
}
let ea = "__rrweb_original__";
function eo(e) {
    let t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? er(t) : null;
}
function e_(e, t, n) {
    return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value;
}
function es(e, t) {
    let n;
    try {
        n = new URL(
            e,
            $(t, () => window.location.href),
        );
    } catch (e) {
        return null;
    }
    return $(q([n.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", (e) => e[1]]), () => null);
}
let ec = {};
function eE(e) {
    let t = ec[e];
    if (t) return t;
    let n = window.document,
        r = window[e];
    if (n && "function" == typeof n.createElement)
        try {
            let t = n.createElement("iframe");
            (t.hidden = !0), n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t);
        } catch (e) {}
    return (ec[e] = r.bind(window));
}
function el(...e) {
    return eE("setTimeout")(...e);
}
function eu(...e) {
    return eE("clearTimeout")(...e);
}
let ed = 1,
    ep = RegExp("[^a-z0-9-_:]");
function ef() {
    return ed++;
}
let eI = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    eT = /^(?:[a-z+]+:)?\/\//i,
    eR = /^www\..*/i,
    eA = /^(data:)([^,]*),(.*)/i;
function eN(e, t) {
    return (e || "").replace(eI, (e, n, r, i, a, o) => {
        let _ = r || a || o,
            s = n || i || "";
        if (!_) return e;
        if (eT.test(_) || eR.test(_) || eA.test(_)) return `url(${s}${_}${s})`;
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
let eh = /^[^ \t\n\r\u000c]+/,
    eO = /^[, \t\n\r\u000c]+/;
function eS(e, t) {
    if (!t || "" === t.trim()) return t;
    let n = e.createElement("a");
    return (n.href = t), n.href;
}
function eL() {
    let e = document.createElement("a");
    return (e.href = ""), e.href;
}
function eg(e, t, n, r, i, a) {
    if (!r) return r;
    if ("src" === n || ("href" === n && ("use" !== t || "#" !== r[0])) || ("xlink:href" === n && "#" !== r[0]))
        return eS(e, r);
    if ("background" === n && ("table" === t || "td" === t || "th" === t)) return eS(e, r);
    if ("srcset" === n)
        return (function (e, t) {
            if ("" === t.trim()) return t;
            let n = 0;
            function r(e) {
                let r,
                    i = e.exec(t.substring(n));
                return i ? ((r = i[0]), (n += r.length), r) : "";
            }
            let i = [];
            for (; r(eO), !(n >= t.length); ) {
                let a = r(eh);
                if ("," === a.slice(-1)) (a = eS(e, a.substring(0, a.length - 1))), i.push(a);
                else {
                    let r = "";
                    a = eS(e, a);
                    let o = !1;
                    for (;;) {
                        let e = t.charAt(n);
                        if ("" === e) {
                            i.push((a + r).trim());
                            break;
                        }
                        if (o) ")" === e && (o = !1);
                        else if ("," === e) {
                            (n += 1), i.push((a + r).trim());
                            break;
                        } else "(" === e && (o = !0);
                        (r += e), (n += 1);
                    }
                }
            }
            return i.join(", ");
        })(e, r);
    if ("style" === n) return eN(r, eL());
    else if ("object" === t && "data" === n) return eS(e, r);
    return "function" == typeof a ? a(n, r, i) : r;
}
function em(e, t, n) {
    return ("video" === e || "audio" === e) && "autoplay" === t;
}
function eD(e, t, n = 1 / 0, r = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : eD(e.parentNode, t, n, r + 1);
}
function eC(e, t) {
    return (n) => {
        if (null === n) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (n.matches(`.${e}`)) return !0;
                } else if (
                    (function (e, t) {
                        for (let n = e.classList.length; n--; ) {
                            let r = e.classList[n];
                            if (t.test(r)) return !0;
                        }
                        return !1;
                    })(n, e)
                )
                    return !0;
            }
            if (t && n.matches(t)) return !0;
            return !1;
        } catch (e) {
            return !1;
        }
    };
}
function ey(e, t, n, r, i, a) {
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
        if (a) {
            if ((s = eD(o, eC(r, i))) < 0) return !0;
            _ = eD(o, eC(t, n), s >= 0 ? s : 1 / 0);
        } else {
            if ((_ = eD(o, eC(t, n))) < 0) return !1;
            s = eD(o, eC(r, i), _ >= 0 ? _ : 1 / 0);
        }
        return _ >= 0 ? !(s >= 0) || _ <= s : !(s >= 0) && !!a;
    } catch (e) {}
    return !!a;
}
function eP(e) {
    return null == e ? "" : e.toLowerCase();
}
function ev(e, t) {
    let n,
        {
            doc: a,
            mirror: o,
            blockClass: _,
            blockSelector: s,
            unblockSelector: c,
            maskAllText: E,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: p,
            skipChild: I = !1,
            inlineStylesheet: T = !0,
            maskInputOptions: R = {},
            maskAttributeFn: A,
            maskTextFn: N,
            maskInputFn: h,
            slimDOMOptions: O,
            dataURLOptions: S = {},
            inlineImages: L = !1,
            recordCanvas: g = !1,
            onSerialize: m,
            onIframeLoad: D,
            iframeLoadTimeout: C = 5000,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: P = 5000,
            keepIframeSrcFn: v = () => !1,
            newlyAddedElement: b = !1,
        } = t,
        { preserveWhiteSpace: M = !0 } = t,
        w = (function (e, t) {
            let {
                    doc: n,
                    mirror: a,
                    blockClass: o,
                    blockSelector: _,
                    unblockSelector: s,
                    maskAllText: c,
                    maskAttributeFn: E,
                    maskTextClass: l,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    inlineStylesheet: I,
                    maskInputOptions: T = {},
                    maskTextFn: R,
                    maskInputFn: A,
                    dataURLOptions: N = {},
                    inlineImages: h,
                    recordCanvas: O,
                    keepIframeSrcFn: S,
                    newlyAddedElement: L = !1,
                } = t,
                g = (function (e, t) {
                    if (!t.hasNode(e)) return;
                    let n = t.getId(e);
                    return 1 === n ? void 0 : n;
                })(n, a);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode)
                        return {
                            type: f.Document,
                            childNodes: [],
                            compatMode: e.compatMode,
                        };
                    return {
                        type: f.Document,
                        childNodes: [],
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: f.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: g,
                    };
                case e.ELEMENT_NODE:
                    return (function (e, t) {
                        let n,
                            {
                                doc: a,
                                blockClass: o,
                                blockSelector: _,
                                unblockSelector: s,
                                inlineStylesheet: c,
                                maskInputOptions: E = {},
                                maskAttributeFn: l,
                                maskInputFn: u,
                                dataURLOptions: d = {},
                                inlineImages: p,
                                recordCanvas: I,
                                keepIframeSrcFn: T,
                                newlyAddedElement: R = !1,
                                rootId: A,
                                maskAllText: N,
                                maskTextClass: h,
                                unmaskTextClass: O,
                                maskTextSelector: S,
                                unmaskTextSelector: L,
                            } = t,
                            g = (function (e, t, n, r) {
                                try {
                                    if (r && e.matches(r)) return !1;
                                    if ("string" == typeof t) {
                                        if (e.classList.contains(t)) return !0;
                                    } else
                                        for (let n = e.classList.length; n--; ) {
                                            let r = e.classList[n];
                                            if (t.test(r)) return !0;
                                        }
                                    if (n) return e.matches(n);
                                } catch (e) {}
                                return !1;
                            })(e, o, _, s),
                            m = (function (e) {
                                if (e instanceof HTMLFormElement) return "form";
                                let t = er(e.tagName);
                                return ep.test(t) ? "div" : t;
                            })(e),
                            D = {},
                            C = e.attributes.length;
                        for (let t = 0; t < C; t++) {
                            let n = e.attributes[t];
                            n.name && !em(m, n.name, n.value) && (D[n.name] = eg(a, m, er(n.name), n.value, e, l));
                        }
                        if ("link" === m && c) {
                            let t = Array.from(a.styleSheets).find((t) => t.href === e.href),
                                n = null;
                            t && (n = Z(t)), n && (delete D.rel, delete D.href, (D._cssText = eN(n, t.href)));
                        }
                        if ("style" === m && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = Z(e.sheet);
                            t && (D._cssText = eN(t, eL()));
                        }
                        if ("input" === m || "textarea" === m || "select" === m || "option" === m) {
                            let t = eo(e),
                                n = e_(e, ei(m), t),
                                r = e.checked;
                            if ("submit" !== t && "button" !== t && n) {
                                let r = ey(
                                    e,
                                    h,
                                    S,
                                    O,
                                    L,
                                    et({
                                        type: t,
                                        tagName: ei(m),
                                        maskInputOptions: E,
                                    }),
                                );
                                D.value = en({
                                    isMasked: r,
                                    element: e,
                                    value: n,
                                    maskInputFn: u,
                                });
                            }
                            r && (D.checked = r);
                        }
                        if (
                            ("option" === m && (e.selected && !E.select ? (D.selected = !0) : delete D.selected),
                            "canvas" === m && I)
                        ) {
                            if ("2d" === e.__context)
                                !(function (e) {
                                    let t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            let i = t.getImageData;
                                            if (
                                                new Uint32Array(
                                                    (ea in i ? i[ea] : i).call(
                                                        t,
                                                        n,
                                                        r,
                                                        Math.min(50, e.width - n),
                                                        Math.min(50, e.height - r),
                                                    ).data.buffer,
                                                ).some((e) => 0 !== e)
                                            )
                                                return !1;
                                        }
                                    return !0;
                                })(e) && (D.rr_dataURL = e.toDataURL(d.type, d.quality));
                            else if (!("__context" in e)) {
                                let t = e.toDataURL(d.type, d.quality),
                                    n = document.createElement("canvas");
                                (n.width = e.width),
                                    (n.height = e.height),
                                    t !== n.toDataURL(d.type, d.quality) && (D.rr_dataURL = t);
                            }
                        }
                        if ("img" === m && p) {
                            r || (i = (r = a.createElement("canvas")).getContext("2d"));
                            let t = e.crossOrigin;
                            e.crossOrigin = "anonymous";
                            let n = () => {
                                e.removeEventListener("load", n);
                                try {
                                    (r.width = e.naturalWidth),
                                        (r.height = e.naturalHeight),
                                        i.drawImage(e, 0, 0),
                                        (D.rr_dataURL = r.toDataURL(d.type, d.quality));
                                } catch (t) {
                                    console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`);
                                }
                                t ? (D.crossOrigin = t) : e.removeAttribute("crossorigin");
                            };
                            e.complete && 0 !== e.naturalWidth ? n() : e.addEventListener("load", n);
                        }
                        if (
                            (("audio" === m || "video" === m) &&
                                ((D.rr_mediaState = e.paused ? "paused" : "played"),
                                (D.rr_mediaCurrentTime = e.currentTime)),
                            !R &&
                                (e.scrollLeft && (D.rr_scrollLeft = e.scrollLeft),
                                e.scrollTop && (D.rr_scrollTop = e.scrollTop)),
                            g)
                        ) {
                            let { width: t, height: n } = e.getBoundingClientRect();
                            D = {
                                class: D.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`,
                            };
                        }
                        "iframe" !== m || T(D.src) || (g || e.contentDocument || (D.rr_src = D.src), delete D.src);
                        try {
                            customElements.get(m) && (n = !0);
                        } catch (e) {}
                        return {
                            type: f.Element,
                            tagName: m,
                            attributes: D,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: g,
                            rootId: A,
                            isCustom: n,
                        };
                    })(e, {
                        doc: n,
                        blockClass: o,
                        blockSelector: _,
                        unblockSelector: s,
                        inlineStylesheet: I,
                        maskAttributeFn: E,
                        maskInputOptions: T,
                        maskInputFn: A,
                        dataURLOptions: N,
                        inlineImages: h,
                        recordCanvas: O,
                        keepIframeSrcFn: S,
                        newlyAddedElement: L,
                        rootId: g,
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                    });
                case e.TEXT_NODE:
                    return (function (e, t) {
                        let {
                                maskAllText: n,
                                maskTextClass: r,
                                unmaskTextClass: i,
                                maskTextSelector: a,
                                unmaskTextSelector: o,
                                maskTextFn: _,
                                maskInputOptions: s,
                                maskInputFn: c,
                                rootId: E,
                            } = t,
                            l = e.parentNode && e.parentNode.tagName,
                            u = e.textContent,
                            d = "STYLE" === l || void 0,
                            p = "SCRIPT" === l || void 0,
                            I = "TEXTAREA" === l || void 0;
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
                            u = eN(u, eL());
                        }
                        p && (u = "SCRIPT_PLACEHOLDER");
                        let T = ey(e, r, a, i, o, n);
                        return (
                            d || p || I || !u || !T || (u = _ ? _(u, e.parentElement) : u.replace(/[\S]/g, "*")),
                            I && u && (s.textarea || T) && (u = c ? c(u, e.parentNode) : u.replace(/[\S]/g, "*")),
                            "OPTION" === l &&
                                u &&
                                (u = en({
                                    isMasked: ey(
                                        e,
                                        r,
                                        a,
                                        i,
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
                                type: f.Text,
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
                        unmaskTextSelector: p,
                        maskTextFn: R,
                        maskInputOptions: T,
                        maskInputFn: A,
                        rootId: g,
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: f.CDATA,
                        textContent: "",
                        rootId: g,
                    };
                case e.COMMENT_NODE:
                    return {
                        type: f.Comment,
                        textContent: e.textContent || "",
                        rootId: g,
                    };
                default:
                    return !1;
            }
        })(e, {
            doc: a,
            mirror: o,
            blockClass: _,
            blockSelector: s,
            maskAllText: E,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: T,
            maskInputOptions: R,
            maskAttributeFn: A,
            maskTextFn: N,
            maskInputFn: h,
            dataURLOptions: S,
            inlineImages: L,
            recordCanvas: g,
            keepIframeSrcFn: v,
            newlyAddedElement: b,
        });
    if (!w) return console.warn(e, "not serialized"), null;
    n = o.hasNode(e)
        ? o.getId(e)
        : !(function (e, t) {
                if (t.comment && e.type === f.Comment) return !0;
                if (e.type === f.Element) {
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
            })(w, O) &&
            (M || w.type !== f.Text || w.isStyle || w.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? ef()
          : -2;
    let U = Object.assign(w, { id: n });
    if ((o.add(e, U), -2 === n)) return null;
    m && m(e);
    let G = !I;
    if (U.type === f.Element) {
        (G = G && !U.needBlock), delete U.needBlock;
        let t = e.shadowRoot;
        t && J(t) && (U.isShadowHost = !0);
    }
    if ((U.type === f.Document || U.type === f.Element) && G) {
        O.headWhitespace && U.type === f.Element && "head" === U.tagName && (M = !1);
        let t = {
            doc: a,
            mirror: o,
            blockClass: _,
            blockSelector: s,
            maskAllText: E,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: p,
            skipChild: I,
            inlineStylesheet: T,
            maskInputOptions: R,
            maskAttributeFn: A,
            maskTextFn: N,
            maskInputFn: h,
            slimDOMOptions: O,
            dataURLOptions: S,
            inlineImages: L,
            recordCanvas: g,
            preserveWhiteSpace: M,
            onSerialize: m,
            onIframeLoad: D,
            iframeLoadTimeout: C,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: P,
            keepIframeSrcFn: v,
        };
        for (let n of Array.from(e.childNodes)) {
            let e = ev(n, t);
            e && U.childNodes.push(e);
        }
        if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
            for (let n of Array.from(e.shadowRoot.childNodes)) {
                let r = ev(n, t);
                r && (J(e.shadowRoot) && (r.isShadow = !0), U.childNodes.push(r));
            }
    }
    return (
        e.parentNode && z(e.parentNode) && J(e.parentNode) && (U.isShadow = !0),
        U.type === f.Element &&
            "iframe" === U.tagName &&
            (function (e, t, n) {
                let r,
                    i = e.contentWindow;
                if (!i) return;
                let a = !1;
                try {
                    r = i.document.readyState;
                } catch (e) {
                    return;
                }
                if ("complete" !== r) {
                    let r = el(() => {
                        a || (t(), (a = !0));
                    }, n);
                    e.addEventListener("load", () => {
                        eu(r), (a = !0), t();
                    });
                    return;
                }
                let o = "about:blank";
                if (i.location.href !== o || e.src === o || "" === e.src)
                    return el(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t);
            })(
                e,
                () => {
                    let t = e.contentDocument;
                    if (t && D) {
                        let n = ev(t, {
                            doc: t,
                            mirror: o,
                            blockClass: _,
                            blockSelector: s,
                            unblockSelector: c,
                            maskAllText: E,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: R,
                            maskAttributeFn: A,
                            maskTextFn: N,
                            maskInputFn: h,
                            slimDOMOptions: O,
                            dataURLOptions: S,
                            inlineImages: L,
                            recordCanvas: g,
                            preserveWhiteSpace: M,
                            onSerialize: m,
                            onIframeLoad: D,
                            iframeLoadTimeout: C,
                            onStylesheetLoad: y,
                            stylesheetLoadTimeout: P,
                            keepIframeSrcFn: v,
                        });
                        n && D(e, n);
                    }
                },
                C,
            ),
        U.type === f.Element &&
            "link" === U.tagName &&
            "string" == typeof U.attributes.rel &&
            ("stylesheet" === U.attributes.rel ||
                ("preload" === U.attributes.rel &&
                    "string" == typeof U.attributes.href &&
                    "css" === es(U.attributes.href))) &&
            (function (e, t, n) {
                let r,
                    i = !1;
                try {
                    r = e.sheet;
                } catch (e) {
                    return;
                }
                if (r) return;
                let a = el(() => {
                    i || (t(), (i = !0));
                }, n);
                e.addEventListener("load", () => {
                    eu(a), (i = !0), t();
                });
            })(
                e,
                () => {
                    if (y) {
                        let t = ev(e, {
                            doc: a,
                            mirror: o,
                            blockClass: _,
                            blockSelector: s,
                            unblockSelector: c,
                            maskAllText: E,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: R,
                            maskAttributeFn: A,
                            maskTextFn: N,
                            maskInputFn: h,
                            slimDOMOptions: O,
                            dataURLOptions: S,
                            inlineImages: L,
                            recordCanvas: g,
                            preserveWhiteSpace: M,
                            onSerialize: m,
                            onIframeLoad: D,
                            iframeLoadTimeout: C,
                            onStylesheetLoad: y,
                            stylesheetLoadTimeout: P,
                            keepIframeSrcFn: v,
                        });
                        t && y(e, t);
                    }
                },
                P,
            ),
        U
    );
}
function eb(e) {
    let t,
        n = e[0],
        r = 1;
    for (; r < e.length; ) {
        let i = e[r],
            a = e[r + 1];
        if (((r += 2), ("optionalAccess" === i || "optionalCall" === i) && null == n)) return;
        "access" === i || "optionalAccess" === i
            ? ((t = n), (n = a(n)))
            : ("call" === i || "optionalCall" === i) && ((n = a((...e) => n.call(t, ...e))), (t = void 0));
    }
    return n;
}
function eM(e, t, n = document) {
    let r = {
        capture: !0,
        passive: !0,
    };
    return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
let ew =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    eU = {
        map: {},
        getId: () => (console.error(ew), -1),
        getNode: () => (console.error(ew), null),
        removeNodeFromMap() {
            console.error(ew);
        },
        has: () => (console.error(ew), !1),
        reset() {
            console.error(ew);
        },
    };
function eG(e, t, n = {}) {
    let r = null,
        i = 0;
    return function (...a) {
        let o = Date.now();
        i || !1 !== n.leading || (i = o);
        let _ = t - (o - i),
            s = this;
        _ <= 0 || _ > t
            ? (r &&
                  ((function (...e) {
                      eQ("clearTimeout")(...e);
                  })(r),
                  (r = null)),
              (i = o),
              e.apply(s, a))
            : r ||
              !1 === n.trailing ||
              (r = e0(() => {
                  (i = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(s, a);
              }, _));
    };
}
function eH(e, t, n) {
    try {
        if (!(t in e)) return () => {};
        let r = e[t],
            i = n(r);
        return (
            "function" == typeof i &&
                ((i.prototype = i.prototype || {}),
                Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r,
                    },
                })),
            (e[t] = i),
            () => {
                e[t] = r;
            }
        );
    } catch (e) {
        return () => {};
    }
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (eU = new Proxy(eU, { get: (e, t, n) => ("map" === t && console.error(ew), Reflect.get(e, t, n)) }));
let eB = Date.now;
function ek(e) {
    let t = e.document;
    return {
        left: t.scrollingElement
            ? t.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : eb([t, "optionalAccess", (e) => e.documentElement, "access", (e) => e.scrollLeft]) ||
                eb([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollLeft,
                ]) ||
                eb([t, "optionalAccess", (e) => e.body, "optionalAccess", (e) => e.scrollLeft]) ||
                0,
        top: t.scrollingElement
            ? t.scrollingElement.scrollTop
            : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : eb([t, "optionalAccess", (e) => e.documentElement, "access", (e) => e.scrollTop]) ||
                eb([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollTop,
                ]) ||
                eb([t, "optionalAccess", (e) => e.body, "optionalAccess", (e) => e.scrollTop]) ||
                0,
    };
}
function eK() {
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
function ex(e) {
    return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function eY(e, t, n, r, i) {
    if (!e) return !1;
    let a = ex(e);
    if (!a) return !1;
    let o = eC(t, n);
    if (!i) {
        let e = r && a.matches(r);
        return o(a) && !e;
    }
    let _ = eD(a, o),
        s = -1;
    return !(_ < 0) && (r && (s = eD(a, eC(null, r))), (_ > -1 && s < 0) || _ < s);
}
function eF(e, t) {
    return -2 === t.getId(e);
}
function eV(e) {
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
    return !!eb([e, "optionalAccess", (e) => e.shadowRoot]);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (eB = () => new Date().getTime());
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
        let n;
        return this.has(e)
            ? this.getId(e)
            : ((n = void 0 === t ? this.id++ : t), this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n);
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
        eb([e, "access", (e) => e.getRootNode, "optionalCall", (e) => e(), "optionalAccess", (e) => e.nodeType]) ===
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
                let n = (function (e) {
                    let t,
                        n = e;
                    for (; (t = ez(n)); ) n = t;
                    return n;
                })(e);
                return t.contains(n);
            })(e))
    );
}
let eZ = {};
function eQ(e) {
    let t = eZ[e];
    if (t) return t;
    let n = window.document,
        r = window[e];
    if (n && "function" == typeof n.createElement)
        try {
            let t = n.createElement("iframe");
            (t.hidden = !0), n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t);
        } catch (e) {}
    return (eZ[e] = r.bind(window));
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
        for (let n = 0; n < e; n++)
            t =
                (function (e) {
                    let t,
                        n = e[0],
                        r = 1;
                    for (; r < e.length; ) {
                        let i = e[r],
                            a = e[r + 1];
                        if (((r += 2), ("optionalAccess" === i || "optionalCall" === i) && null == n)) return;
                        "access" === i || "optionalAccess" === i
                            ? ((t = n), (n = a(n)))
                            : ("call" === i || "optionalCall" === i) &&
                              ((n = a((...e) => n.call(t, ...e))), (t = void 0));
                    }
                    return n;
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
            let n = e.previousSibling.__ln.next;
            (t.next = n),
                (t.previous = e.previousSibling.__ln),
                (e.previousSibling.__ln.next = t),
                n && (n.previous = t);
        } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
            let n = e.nextSibling.__ln.previous;
            (t.previous = n), (t.next = e.nextSibling.__ln), (e.nextSibling.__ln.previous = t), n && (n.next = t);
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
                    n = new e5(),
                    r = (e) => {
                        let t = e,
                            n = -2;
                        for (; -2 === n; ) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return n;
                    },
                    i = (i) => {
                        if (!i.parentNode || !eJ(i)) return;
                        let a = z(i.parentNode) ? this.mirror.getId(ez(i)) : this.mirror.getId(i.parentNode),
                            o = r(i);
                        if (-1 === a || -1 === o) return n.addNode(i);
                        let _ = ev(i, {
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
                                    !eY(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                                    this.iframeManager.addIframe(e),
                                    eX(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                    e$(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc);
                            },
                            onIframeLoad: (e, t) => {
                                eY(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
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
                                parentId: a,
                                nextId: o,
                                node: _,
                            }),
                            t.add(_.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet)
                    (!e7(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                for (let e of this.addedSet)
                    te(this.droppedSet, e) || e7(this.removes, e, this.mirror)
                        ? te(this.movedSet, e)
                            ? i(e)
                            : this.droppedSet.add(e)
                        : i(e);
                let a = null;
                for (; n.length; ) {
                    let e = null;
                    if (a) {
                        let t = this.mirror.getId(a.value.parentNode),
                            n = r(a.value);
                        -1 !== t && -1 !== n && (e = a);
                    }
                    if (!e) {
                        let t = n.tail;
                        for (; t; ) {
                            let n = t;
                            if (((t = t.previous), n)) {
                                let t = this.mirror.getId(n.value.parentNode);
                                if (-1 === r(n.value)) continue;
                                if (-1 !== t) {
                                    e = n;
                                    break;
                                }
                                {
                                    let t = n.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let r = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(r)) {
                                            e = n;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!e) {
                        for (; n.head; ) n.removeNode(n.head.value);
                        break;
                    }
                    (a = e.previous), n.removeNode(e.value), i(e.value);
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
                                let n = JSON.stringify(e.styleDiff),
                                    r = JSON.stringify(e._unchangedStyles);
                                n.length < t.style.length &&
                                    (n + r).split("var(").length === t.style.split("var(").length &&
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
                if (!eF(e.target, this.mirror))
                    switch (e.type) {
                        case "characterData": {
                            let t = e.target.textContent;
                            eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
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
                                                ? this.maskTextFn(t, ex(e.target))
                                                : t.replace(/[\S]/g, "*")
                                            : t,
                                    node: e.target,
                                });
                            break;
                        }
                        case "attributes": {
                            let t = e.target,
                                n = e.attributeName,
                                r = e.target.getAttribute(n);
                            if ("value" === n) {
                                let n = eo(t),
                                    i = t.tagName;
                                r = e_(t, i, n);
                                let a = et({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: i,
                                    type: n,
                                });
                                r = en({
                                    isMasked: ey(
                                        e.target,
                                        this.maskTextClass,
                                        this.maskTextSelector,
                                        this.unmaskTextClass,
                                        this.unmaskTextSelector,
                                        a,
                                    ),
                                    element: t,
                                    value: r,
                                    maskInputFn: this.maskInputFn,
                                });
                            }
                            if (
                                eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                r === e.oldValue
                            )
                                return;
                            let i = this.attributeMap.get(e.target);
                            if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r))
                                if (t.contentDocument) return;
                                else n = "rr_src";
                            if (
                                (i ||
                                    ((i = {
                                        node: e.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {},
                                    }),
                                    this.attributes.push(i),
                                    this.attributeMap.set(e.target, i)),
                                "type" === n &&
                                    "INPUT" === t.tagName &&
                                    "password" === (e.oldValue || "").toLowerCase() &&
                                    t.setAttribute("data-rr-is-password", "true"),
                                !em(t.tagName, n) &&
                                    ((i.attributes[n] = eg(this.doc, er(t.tagName), er(n), r, t, this.maskAttributeFn)),
                                    "style" === n))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (e) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let n = this.unattachedDoc.createElement("span");
                                for (let r of (e.oldValue && n.setAttribute("style", e.oldValue),
                                Array.from(t.style))) {
                                    let e = t.style.getPropertyValue(r),
                                        a = t.style.getPropertyPriority(r);
                                    e !== n.style.getPropertyValue(r) || a !== n.style.getPropertyPriority(r)
                                        ? "" === a
                                            ? (i.styleDiff[r] = e)
                                            : (i.styleDiff[r] = [e, a])
                                        : (i._unchangedStyles[r] = [e, a]);
                                }
                                for (let e of Array.from(n.style))
                                    "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1);
                            }
                            break;
                        }
                        case "childList":
                            if (eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                                e.removedNodes.forEach((t) => {
                                    let n = this.mirror.getId(t),
                                        r = z(e.target)
                                            ? this.mirror.getId(e.target.host)
                                            : this.mirror.getId(e.target);
                                    eY(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                        eF(t, this.mirror) ||
                                        -1 === this.mirror.getId(t) ||
                                        (this.addedSet.has(t)
                                            ? (e9(this.addedSet, t), this.droppedSet.add(t))
                                            : (this.addedSet.has(e.target) && -1 === n) ||
                                              (function e(t, n) {
                                                  if (z(t)) return !1;
                                                  let r = n.getId(t);
                                                  return (
                                                      !n.has(r) ||
                                                      ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) &&
                                                          (!t.parentNode || e(t.parentNode, n)))
                                                  );
                                              })(e.target, this.mirror) ||
                                              (this.movedSet.has(t) && this.movedMap[e4(n, r)]
                                                  ? e9(this.movedSet, t)
                                                  : this.removes.push({
                                                        parentId: r,
                                                        id: n,
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
                        if (eF(e, this.mirror)) return;
                        this.movedSet.add(e);
                        let n = null;
                        t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                            n && -1 !== n && (this.movedMap[e4(this.mirror.getId(e), n)] = !0);
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    !eY(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
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
function e7(e, t, n) {
    return (
        0 !== e.length &&
        (function e(t, n, r) {
            let { parentNode: i } = n;
            if (!i) return !1;
            let a = r.getId(i);
            return !!t.some((e) => e.id === a) || e(t, i, r);
        })(e, t, n)
    );
}
function te(e, t) {
    return (
        0 !== e.size &&
        (function e(t, n) {
            let { parentNode: r } = n;
            return !!r && (!!t.has(r) || e(t, r));
        })(e, t)
    );
}
let tt = (e) =>
    a
        ? (...t) => {
              try {
                  return e(...t);
              } catch (e) {
                  if (a && !0 === a(e)) return () => {};
                  throw e;
              }
          }
        : e;
function tn(e) {
    let t,
        n = e[0],
        r = 1;
    for (; r < e.length; ) {
        let i = e[r],
            a = e[r + 1];
        if (((r += 2), ("optionalAccess" === i || "optionalCall" === i) && null == n)) return;
        "access" === i || "optionalAccess" === i
            ? ((t = n), (n = a(n)))
            : ("call" === i || "optionalCall" === i) && ((n = a((...e) => n.call(t, ...e))), (t = void 0));
    }
    return n;
}
let tr = [];
function ti(e) {
    try {
        if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
        } else if ("path" in e && e.path.length) return e.path[0];
    } catch (e) {}
    return e && e.target;
}
function ta(e, t) {
    let n = new e8();
    tr.push(n), n.init(e);
    let r = window.MutationObserver || window.__rrMutationObserver,
        i = tn([
            window,
            "optionalAccess",
            (e) => e.Zone,
            "optionalAccess",
            (e) => e.__symbol__,
            "optionalCall",
            (e) => e("MutationObserver"),
        ]);
    i && window[i] && (r = window[i]);
    let a = new r(
        tt((t) => {
            (e.onMutation && !1 === e.onMutation(t)) || n.processMutations.bind(n)(t);
        }),
    );
    return (
        a.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
        }),
        a
    );
}
function to({ scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: a, sampling: o }) {
    return eM(
        "scroll",
        tt(
            eG(
                tt((o) => {
                    let _ = ti(o);
                    if (!_ || eY(_, r, i, a, !0)) return;
                    let s = n.getId(_);
                    if (_ === t && t.defaultView) {
                        let n = ek(t.defaultView);
                        e({
                            id: s,
                            x: n.left,
                            y: n.top,
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
        let n = Array.from(e.parentRule.cssRules).indexOf(e);
        t.unshift(n);
    } else if (e.parentStyleSheet) {
        let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
        t.unshift(n);
    }
    return t;
}
function tE(e, t, n) {
    let r, i;
    return e
        ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
          {
              styleId: i,
              id: r,
          })
        : {};
}
function tl({ mirror: e, stylesheetManager: t }, n) {
    let r = null;
    r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
    let i =
            "#document" === n.nodeName
                ? tn([n, "access", (e) => e.defaultView, "optionalAccess", (e) => e.Document])
                : tn([
                      n,
                      "access",
                      (e) => e.ownerDocument,
                      "optionalAccess",
                      (e) => e.defaultView,
                      "optionalAccess",
                      (e) => e.ShadowRoot,
                  ]),
        a = tn([i, "optionalAccess", (e) => e.prototype])
            ? Object.getOwnPropertyDescriptor(tn([i, "optionalAccess", (e) => e.prototype]), "adoptedStyleSheets")
            : void 0;
    return null !== r && -1 !== r && i && a
        ? (Object.defineProperty(n, "adoptedStyleSheets", {
              configurable: a.configurable,
              enumerable: a.enumerable,
              get() {
                  return tn([a, "access", (e) => e.get, "optionalAccess", (e) => e.call, "call", (e) => e(this)]);
              },
              set(e) {
                  let n = tn([a, "access", (e) => e.set, "optionalAccess", (e) => e.call, "call", (t) => t(this, e)]);
                  if (null !== r && -1 !== r)
                      try {
                          t.adoptStyleSheets(e, r);
                      } catch (e) {}
                  return n;
              },
          }),
          tt(() => {
              Object.defineProperty(n, "adoptedStyleSheets", {
                  configurable: a.configurable,
                  enumerable: a.enumerable,
                  get: a.get,
                  set: a.set,
              });
          }))
        : () => {};
}
function tu(e, t = {}) {
    let n,
        r = e.doc.defaultView;
    if (!r) return () => {};
    e.recordDOM && (n = ta(e, e.doc));
    let i = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
            let i;
            if (!1 === t.mousemove) return () => {};
            let a = "number" == typeof t.mousemove ? t.mousemove : 50,
                o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                _ = [],
                s = eG(
                    tt((t) => {
                        let n = Date.now() - i;
                        e(
                            _.map((e) => ((e.timeOffset -= n), e)),
                            t,
                        ),
                            (_ = []),
                            (i = null);
                    }),
                    o,
                ),
                c = tt(
                    eG(
                        tt((e) => {
                            let t = ti(e),
                                { clientX: n, clientY: a } = eV(e) ? e.changedTouches[0] : e;
                            i || (i = eB()),
                                _.push({
                                    x: n,
                                    y: a,
                                    id: r.getId(t),
                                    timeOffset: eB() - i,
                                }),
                                s(
                                    "undefined" != typeof DragEvent && e instanceof DragEvent
                                        ? e2.Drag
                                        : e instanceof MouseEvent
                                          ? e2.MouseMove
                                          : e2.TouchMove,
                                );
                        }),
                        a,
                        { trailing: !1 },
                    ),
                ),
                E = [eM("mousemove", c, n), eM("touchmove", c, n), eM("drag", c, n)];
            return tt(() => {
                E.forEach((e) => e());
            });
        })(e),
        a = (function ({
            mouseInteractionCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: i,
            unblockSelector: a,
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
                        let _ = er(o),
                            E = (t) => {
                                let _ = ti(t);
                                if (eY(_, r, i, a, !0)) return;
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
                                } else eV(t) && (s = e6.Touch);
                                null !== s
                                    ? ((c = s),
                                      ((E.startsWith("Touch") && s === e6.Touch) ||
                                          (E.startsWith("Mouse") && s === e6.Mouse)) &&
                                          (s = null))
                                    : e3[o] === e3.Click && ((s = c), (c = null));
                                let l = eV(t) ? t.changedTouches[0] : t;
                                if (!l) return;
                                let u = n.getId(_),
                                    { clientX: d, clientY: p } = l;
                                tt(e)({
                                    type: e3[E],
                                    id: u,
                                    x: d,
                                    y: p,
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
            let n = -1,
                r = -1;
            return eM(
                "resize",
                tt(
                    eG(
                        tt(() => {
                            let t = eK(),
                                i = eW();
                            (n !== t || r !== i) &&
                                (e({
                                    width: Number(i),
                                    height: Number(t),
                                }),
                                (n = t),
                                (r = i));
                        }),
                        200,
                    ),
                ),
                t,
            );
        })(e, { win: r }),
        s = (function ({
            inputCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: i,
            unblockSelector: a,
            ignoreClass: o,
            ignoreSelector: _,
            maskInputOptions: s,
            maskInputFn: c,
            sampling: E,
            userTriggeredOnInput: l,
            maskTextClass: u,
            unmaskTextClass: d,
            maskTextSelector: p,
            unmaskTextSelector: f,
        }) {
            function I(e) {
                let n = ti(e),
                    E = e.isTrusted,
                    I = n && ei(n.tagName);
                if (("OPTION" === I && (n = n.parentElement), !n || !I || 0 > t_.indexOf(I) || eY(n, r, i, a, !0)))
                    return;
                let R = n;
                if (R.classList.contains(o) || (_ && R.matches(_))) return;
                let A = eo(n),
                    N = e_(R, I, A),
                    h = !1,
                    O = et({
                        maskInputOptions: s,
                        tagName: I,
                        type: A,
                    }),
                    S = ey(n, u, p, d, f, O);
                ("radio" === A || "checkbox" === A) && (h = n.checked),
                    (N = en({
                        isMasked: S,
                        element: n,
                        value: N,
                        maskInputFn: c,
                    })),
                    T(
                        n,
                        l
                            ? {
                                  text: N,
                                  isChecked: h,
                                  userTriggered: E,
                              }
                            : {
                                  text: N,
                                  isChecked: h,
                              },
                    );
                let L = n.name;
                "radio" === A &&
                    L &&
                    h &&
                    t.querySelectorAll(`input[type="radio"][name="${L}"]`).forEach((e) => {
                        if (e !== n) {
                            let t = en({
                                isMasked: S,
                                element: e,
                                value: e_(e, I, A),
                                maskInputFn: c,
                            });
                            T(
                                e,
                                l
                                    ? {
                                          text: t,
                                          isChecked: !h,
                                          userTriggered: !1,
                                      }
                                    : {
                                          text: t,
                                          isChecked: !h,
                                      },
                            );
                        }
                    });
            }
            function T(t, r) {
                let i = ts.get(t);
                if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                    ts.set(t, r);
                    let i = n.getId(t);
                    tt(e)({
                        ...r,
                        id: i,
                    });
                }
            }
            let R = ("last" === E.input ? ["change"] : ["input", "change"]).map((e) => eM(e, tt(I), t)),
                A = t.defaultView;
            if (!A)
                return () => {
                    R.forEach((e) => e());
                };
            let N = A.Object.getOwnPropertyDescriptor(A.HTMLInputElement.prototype, "value"),
                h = [
                    [A.HTMLInputElement.prototype, "value"],
                    [A.HTMLInputElement.prototype, "checked"],
                    [A.HTMLSelectElement.prototype, "value"],
                    [A.HTMLTextAreaElement.prototype, "value"],
                    [A.HTMLSelectElement.prototype, "selectedIndex"],
                    [A.HTMLOptionElement.prototype, "selected"],
                ];
            return (
                N &&
                    N.set &&
                    R.push(
                        ...h.map((e) =>
                            (function e(t, n, r, i, a = window) {
                                let o = a.Object.getOwnPropertyDescriptor(t, n);
                                return (
                                    a.Object.defineProperty(
                                        t,
                                        n,
                                        i
                                            ? r
                                            : {
                                                  set(e) {
                                                      e0(() => {
                                                          r.set.call(this, e);
                                                      }, 0),
                                                          o && o.set && o.set.call(this, e);
                                                  },
                                              },
                                    ),
                                    () => e(t, n, o || {}, !0)
                                );
                            })(
                                e[0],
                                e[1],
                                {
                                    set() {
                                        tt(I)({
                                            target: this,
                                            isTrusted: !1,
                                        });
                                    },
                                },
                                !1,
                                A,
                            ),
                        ),
                    ),
                tt(() => {
                    R.forEach((e) => e());
                })
            );
        })(e),
        c = (function ({
            mediaInteractionCb: e,
            blockClass: t,
            blockSelector: n,
            unblockSelector: r,
            mirror: i,
            sampling: a,
            doc: o,
        }) {
            let _ = tt((o) =>
                    eG(
                        tt((a) => {
                            let _ = ti(a);
                            if (!_ || eY(_, t, n, r, !0)) return;
                            let { currentTime: s, volume: c, muted: E, playbackRate: l } = _;
                            e({
                                type: o,
                                id: i.getId(_),
                                currentTime: s,
                                volume: c,
                                muted: E,
                                playbackRate: l,
                            });
                        }),
                        a.media || 500,
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
        ((E = (function ({ styleSheetRuleCb: e, mirror: t, stylesheetManager: n }, { win: r }) {
            let i, a;
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let o = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: tt((r, i, a) => {
                    let [o, _] = a,
                        { id: s, styleId: c } = tE(i, t, n.styleMirror);
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
                        r.apply(i, a)
                    );
                }),
            });
            let _ = r.CSSStyleSheet.prototype.deleteRule;
            (r.CSSStyleSheet.prototype.deleteRule = new Proxy(_, {
                apply: tt((r, i, a) => {
                    let [o] = a,
                        { id: _, styleId: s } = tE(i, t, n.styleMirror);
                    return (
                        ((_ && -1 !== _) || (s && -1 !== s)) &&
                            e({
                                id: _,
                                styleId: s,
                                removes: [{ index: o }],
                            }),
                        r.apply(i, a)
                    );
                }),
            })),
                r.CSSStyleSheet.prototype.replace &&
                    ((i = r.CSSStyleSheet.prototype.replace),
                    (r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                        apply: tt((r, i, a) => {
                            let [o] = a,
                                { id: _, styleId: s } = tE(i, t, n.styleMirror);
                            return (
                                ((_ && -1 !== _) || (s && -1 !== s)) &&
                                    e({
                                        id: _,
                                        styleId: s,
                                        replace: o,
                                    }),
                                r.apply(i, a)
                            );
                        }),
                    }))),
                r.CSSStyleSheet.prototype.replaceSync &&
                    ((a = r.CSSStyleSheet.prototype.replaceSync),
                    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                        apply: tt((r, i, a) => {
                            let [o] = a,
                                { id: _, styleId: s } = tE(i, t, n.styleMirror);
                            return (
                                ((_ && -1 !== _) || (s && -1 !== s)) &&
                                    e({
                                        id: _,
                                        styleId: s,
                                        replaceSync: o,
                                    }),
                                r.apply(i, a)
                            );
                        }),
                    })));
            let s = {};
            tp("CSSGroupingRule")
                ? (s.CSSGroupingRule = r.CSSGroupingRule)
                : (tp("CSSMediaRule") && (s.CSSMediaRule = r.CSSMediaRule),
                  tp("CSSConditionRule") && (s.CSSConditionRule = r.CSSConditionRule),
                  tp("CSSSupportsRule") && (s.CSSSupportsRule = r.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(s).forEach(([r, i]) => {
                    (c[r] = {
                        insertRule: i.prototype.insertRule,
                        deleteRule: i.prototype.deleteRule,
                    }),
                        (i.prototype.insertRule = new Proxy(c[r].insertRule, {
                            apply: tt((r, i, a) => {
                                let [o, _] = a,
                                    { id: s, styleId: c } = tE(i.parentStyleSheet, t, n.styleMirror);
                                return (
                                    ((s && -1 !== s) || (c && -1 !== c)) &&
                                        e({
                                            id: s,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...tc(i), _ || 0],
                                                },
                                            ],
                                        }),
                                    r.apply(i, a)
                                );
                            }),
                        })),
                        (i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                            apply: tt((r, i, a) => {
                                let [o] = a,
                                    { id: _, styleId: s } = tE(i.parentStyleSheet, t, n.styleMirror);
                                return (
                                    ((_ && -1 !== _) || (s && -1 !== s)) &&
                                        e({
                                            id: _,
                                            styleId: s,
                                            removes: [
                                                {
                                                    index: [...tc(i), o],
                                                },
                                            ],
                                        }),
                                    r.apply(i, a)
                                );
                            }),
                        }));
                }),
                tt(() => {
                    (r.CSSStyleSheet.prototype.insertRule = o),
                        (r.CSSStyleSheet.prototype.deleteRule = _),
                        i && (r.CSSStyleSheet.prototype.replace = i),
                        a && (r.CSSStyleSheet.prototype.replaceSync = a),
                        Object.entries(s).forEach(([e, t]) => {
                            (t.prototype.insertRule = c[e].insertRule), (t.prototype.deleteRule = c[e].deleteRule);
                        });
                })
            );
        })(e, { win: r })),
        (l = tl(e, e.doc)),
        (u = (function (
            { styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r },
            { win: i },
        ) {
            let a = i.CSSStyleDeclaration.prototype.setProperty;
            i.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
                apply: tt((i, o, _) => {
                    let [s, c, E] = _;
                    if (n.has(s)) return a.apply(o, [s, c, E]);
                    let { id: l, styleId: u } = tE(
                        tn([o, "access", (e) => e.parentRule, "optionalAccess", (e) => e.parentStyleSheet]),
                        t,
                        r.styleMirror,
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
                        i.apply(o, _)
                    );
                }),
            });
            let o = i.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: tt((i, a, _) => {
                        let [s] = _;
                        if (n.has(s)) return o.apply(a, [s]);
                        let { id: c, styleId: E } = tE(
                            tn([a, "access", (e) => e.parentRule, "optionalAccess", (e) => e.parentStyleSheet]),
                            t,
                            r.styleMirror,
                        );
                        return (
                            ((c && -1 !== c) || (E && -1 !== E)) &&
                                e({
                                    id: c,
                                    styleId: E,
                                    remove: { property: s },
                                    index: tc(a.parentRule),
                                }),
                            i.apply(a, _)
                        );
                    }),
                })),
                tt(() => {
                    (i.CSSStyleDeclaration.prototype.setProperty = a),
                        (i.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(e, { win: r })),
        e.collectFonts &&
            (d = (function ({ fontCb: e, doc: t }) {
                let n = t.defaultView;
                if (!n) return () => {};
                let r = [],
                    i = new WeakMap(),
                    a = n.FontFace;
                n.FontFace = function (e, t, n) {
                    let r = new a(e, t, n);
                    return (
                        i.set(r, {
                            family: e,
                            buffer: "string" != typeof t,
                            descriptors: n,
                            fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))),
                        }),
                        r
                    );
                };
                let o = eH(t.fonts, "add", function (t) {
                    return function (n) {
                        return (
                            e0(
                                tt(() => {
                                    let t = i.get(n);
                                    t && (e(t), i.delete(n));
                                }),
                                0,
                            ),
                            t.apply(this, [n])
                        );
                    };
                });
                return (
                    r.push(() => {
                        n.FontFace = a;
                    }),
                    r.push(o),
                    tt(() => {
                        r.forEach((e) => e());
                    })
                );
            })(e)));
    let p = (function (e) {
            let { doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: a, selectionCb: o } = e,
                _ = !0,
                s = tt(() => {
                    let e = t.getSelection();
                    if (!e || (_ && tn([e, "optionalAccess", (e) => e.isCollapsed]))) return;
                    _ = e.isCollapsed || !1;
                    let s = [],
                        c = e.rangeCount || 0;
                    for (let t = 0; t < c; t++) {
                        let { startContainer: o, startOffset: _, endContainer: c, endOffset: E } = e.getRangeAt(t);
                        eY(o, r, i, a, !0) ||
                            eY(c, r, i, a, !0) ||
                            s.push({
                                start: n.getId(o),
                                startOffset: _,
                                end: n.getId(c),
                                endOffset: E,
                            });
                    }
                    o({ ranges: s });
                });
            return s(), eM("selectionchange", s);
        })(e),
        f = (function ({ doc: e, customElementCb: t }) {
            let n = e.defaultView;
            return n && n.customElements
                ? eH(n.customElements, "define", function (e) {
                      return function (n, r, i) {
                          try {
                              t({ define: { name: n } });
                          } catch (e) {}
                          return e.apply(this, [n, r, i]);
                      };
                  })
                : () => {};
        })(e),
        I = [];
    for (let t of e.plugins) I.push(t.observer(t.callback, r, t.options));
    return tt(() => {
        tr.forEach((e) => e.reset()),
            tn([n, "optionalAccess", (e) => e.disconnect, "call", (e) => e()]),
            i(),
            a(),
            o(),
            _(),
            s(),
            c(),
            E(),
            l(),
            u(),
            d(),
            p(),
            f(),
            I.forEach((e) => e());
    });
}
function td(e) {
    return void 0 !== window[e];
}
function tp(e) {
    return !!(
        void 0 !== window[e] &&
        window[e].prototype &&
        "insertRule" in window[e].prototype &&
        "deleteRule" in window[e].prototype
    );
}
class tf {
    constructor(e) {
        (this.generateIdFn = e),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(e, t, n, r) {
        let i = n || this.getIdToRemoteIdMap(e),
            a = r || this.getRemoteIdToIdMap(e),
            o = i.get(t);
        return o || ((o = this.generateIdFn()), i.set(t, o), a.set(o, t)), o;
    }
    getIds(e, t) {
        let n = this.getIdToRemoteIdMap(e),
            r = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getId(e, t, n, r));
    }
    getRemoteId(e, t, n) {
        let r = n || this.getRemoteIdToIdMap(e);
        if ("number" != typeof t) return t;
        let i = r.get(t);
        return i || -1;
    }
    getRemoteIds(e, t) {
        let n = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getRemoteId(e, t, n));
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
function tI(e) {
    let t,
        n = e[0],
        r = 1;
    for (; r < e.length; ) {
        let i = e[r],
            a = e[r + 1];
        if (((r += 2), ("optionalAccess" === i || "optionalCall" === i) && null == n)) return;
        "access" === i || "optionalAccess" === i
            ? ((t = n), (n = a(n)))
            : ("call" === i || "optionalCall" === i) && ((n = a((...e) => n.call(t, ...e))), (t = void 0));
    }
    return n;
}
class tT {
    constructor() {
        (this.crossOriginIframeMirror = new tf(ef)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class tR {
    constructor(e) {
        (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new tf(ef)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = e.mutationCb),
            (this.wrappedEmit = e.wrappedEmit),
            (this.stylesheetManager = e.stylesheetManager),
            (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new tf(
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
            tI([this, "access", (e) => e.loadListener, "optionalCall", (t) => t(e)]),
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
        let n = this.transformCrossOriginEvent(t, e.data.event);
        n && this.wrappedEmit(n, e.data.isCheckout);
    }
    transformCrossOriginEvent(e, t) {
        switch (t.type) {
            case e1.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e),
                    this.crossOriginIframeStyleMirror.reset(e),
                    this.replaceIdOnNode(t.data.node, e);
                let n = t.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(e, n),
                    this.patchRootIdOnNode(t.data.node, n),
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
                                let n = this.crossOriginIframeRootIdMap.get(e);
                                n && this.patchRootIdOnNode(t.node, n);
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
                            tI([
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
    replace(e, t, n, r) {
        for (let i of r)
            (Array.isArray(t[i]) || "number" == typeof t[i]) &&
                (Array.isArray(t[i]) ? (t[i] = e.getIds(n, t[i])) : (t[i] = e.getId(n, t[i])));
        return t;
    }
    replaceIds(e, t, n) {
        return this.replace(this.crossOriginIframeMirror, e, t, n);
    }
    replaceStyleIds(e, t, n) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ["id", "rootId"]),
            "childNodes" in e &&
                e.childNodes.forEach((e) => {
                    this.replaceIdOnNode(e, t);
                });
    }
    patchRootIdOnNode(e, t) {
        e.type === f.Document || e.rootId || (e.rootId = t),
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
        if (!J(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let n = ta(
            {
                ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
            },
            e,
        );
        this.restoreHandlers.push(() => n.disconnect()),
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
        let n = this;
        this.restoreHandlers.push(
            eH(e.prototype, "attachShadow", function (e) {
                return function (r) {
                    let i = e.call(this, r);
                    return this.shadowRoot && eJ(this) && n.addShadowRoot(this.shadowRoot, t), i;
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
class th {
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
        let n = {
                id: t,
                styleIds: [],
            },
            r = [];
        for (let t of e) {
            let e;
            this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  r.push({
                      styleId: e,
                      rules: Array.from(t.rules || CSSRule, (e, t) => ({
                          rule: Q(e),
                          index: t,
                      })),
                  })),
                n.styleIds.push(e);
        }
        r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
    }
    reset() {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(e) {}
}
class tS {
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
        let n = this.nodeMap.get(e);
        return n && Array.from(n).some((e) => e !== t);
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
                (0, R.x)([
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
let tL = new ee();
function tg(e = {}) {
    let t,
        {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: s = "rr-block",
            blockSelector: c = null,
            unblockSelector: E = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: u = null,
            maskAllText: d = !1,
            maskTextClass: p = "rr-mask",
            unmaskTextClass: f = null,
            maskTextSelector: I = null,
            unmaskTextSelector: T = null,
            inlineStylesheet: A = !0,
            maskAllInputs: N,
            maskInputOptions: h,
            slimDOMOptions: O,
            maskAttributeFn: S,
            maskInputFn: L,
            maskTextFn: g,
            maxCanvasSize: m = null,
            packFn: D,
            sampling: C = {},
            dataURLOptions: y = {},
            mousemoveWait: P,
            recordDOM: v = !0,
            recordCanvas: b = !1,
            recordCrossOriginIframes: M = !1,
            recordAfter: w = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
            userTriggeredOnInput: U = !1,
            collectFonts: G = !1,
            inlineImages: H = !1,
            plugins: B,
            keepIframeSrcFn: k = () => !1,
            ignoreCSSAttributes: K = new Set([]),
            errorHandler: W,
            onMutation: x,
            getCanvasManager: Y,
        } = e;
    a = W;
    let F = !M || window.parent === window,
        V = !1;
    if (!F)
        try {
            window.parent.document && (V = !1);
        } catch (e) {
            V = !0;
        }
    if (F && !n) throw Error("emit function is required");
    void 0 !== P && void 0 === C.mousemove && (C.mousemove = P), tL.reset();
    let j =
            !0 === N
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
                : void 0 !== h
                  ? h
                  : {},
        X =
            !0 === O || "all" === O
                ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaVerification: !0,
                      headMetaAuthorship: "all" === O,
                      headMetaDescKeywords: "all" === O,
                  }
                : O || {};
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
            for (let t of B || []) t.eventProcessor && (e = t.eventProcessor(e));
            return D && !V && (e = D(e)), e;
        };
    o = (e, a) => {
        if (
            ((e.timestamp = eB()),
            (0, R.x)([tr, "access", (e) => e[0], "optionalAccess", (e) => e.isFrozen, "call", (e) => e()]) &&
                e.type !== e1.FullSnapshot &&
                (e.type !== e1.IncrementalSnapshot || e.data.source !== e2.Mutation) &&
                tr.forEach((e) => e.unfreeze()),
            F)
        )
            (0, R.x)([n, "optionalCall", (t) => t(q(e), a)]);
        else if (V) {
            let t = {
                type: "rrweb",
                event: q(e),
                origin: window.location.origin,
                isCheckout: a,
            };
            window.parent.postMessage(t, "*");
        }
        if (e.type === e1.FullSnapshot) (t = e), ($ = 0);
        else if (e.type === e1.IncrementalSnapshot) {
            if (e.data.source === e2.Mutation && e.data.isAttachIframe) return;
            $++;
            let n = i && $ >= i,
                a = r && t && e.timestamp - t.timestamp > r;
            (n || a) && ea(!0);
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
        Q = new tO({
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
                : new tR({
                      mirror: tL,
                      mutationCb: z,
                      stylesheetManager: Q,
                      recordCrossOriginIframes: M,
                      wrappedEmit: o,
                  });
    for (let e of B || [])
        e.getMirror &&
            e.getMirror({
                nodeMirror: tL,
                crossOriginIframeMirror: et.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror,
            });
    let en = new tS(),
        er = (function (e, t) {
            try {
                return e ? e(t) : new th();
            } catch (e) {
                return console.warn("Unable to initialize CanvasManager"), new th();
            }
        })(Y, {
            mirror: tL,
            win: window,
            mutationCb: (e) =>
                o({
                    type: e1.IncrementalSnapshot,
                    data: {
                        source: e2.CanvasMutation,
                        ...e,
                    },
                }),
            recordCanvas: b,
            blockClass: s,
            blockSelector: c,
            unblockSelector: E,
            maxCanvasSize: m,
            sampling: C.canvas,
            dataURLOptions: y,
            errorHandler: W,
        }),
        ei =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new tA()
                : new tN({
                      mutationCb: z,
                      scrollCb: J,
                      bypassOptions: {
                          onMutation: x,
                          blockClass: s,
                          blockSelector: c,
                          unblockSelector: E,
                          maskAllText: d,
                          maskTextClass: p,
                          unmaskTextClass: f,
                          maskTextSelector: I,
                          unmaskTextSelector: T,
                          inlineStylesheet: A,
                          maskInputOptions: j,
                          dataURLOptions: y,
                          maskAttributeFn: S,
                          maskTextFn: g,
                          maskInputFn: L,
                          recordCanvas: b,
                          inlineImages: H,
                          sampling: C,
                          slimDOMOptions: X,
                          iframeManager: et,
                          stylesheetManager: Q,
                          canvasManager: er,
                          keepIframeSrcFn: k,
                          processedNodeManager: en,
                      },
                      mirror: tL,
                  }),
        ea = (e = !1) => {
            if (!v) return;
            o(
                {
                    type: e1.Meta,
                    data: {
                        href: window.location.href,
                        width: eW(),
                        height: eK(),
                    },
                },
                e,
            ),
                Q.reset(),
                ei.init(),
                tr.forEach((e) => e.lock());
            let t = (function (e, t) {
                let {
                    mirror: n = new ee(),
                    blockClass: r = "rr-block",
                    blockSelector: i = null,
                    unblockSelector: a = null,
                    maskAllText: o = !1,
                    maskTextClass: _ = "rr-mask",
                    unmaskTextClass: s = null,
                    maskTextSelector: c = null,
                    unmaskTextSelector: E = null,
                    inlineStylesheet: l = !0,
                    inlineImages: u = !1,
                    recordCanvas: d = !1,
                    maskAllInputs: p = !1,
                    maskAttributeFn: f,
                    maskTextFn: I,
                    maskInputFn: T,
                    slimDOM: R = !1,
                    dataURLOptions: A,
                    preserveWhiteSpace: N,
                    onSerialize: h,
                    onIframeLoad: O,
                    iframeLoadTimeout: S,
                    onStylesheetLoad: L,
                    stylesheetLoadTimeout: g,
                    keepIframeSrcFn: m = () => !1,
                } = t || {};
                return ev(e, {
                    doc: e,
                    mirror: n,
                    blockClass: r,
                    blockSelector: i,
                    unblockSelector: a,
                    maskAllText: o,
                    maskTextClass: _,
                    unmaskTextClass: s,
                    maskTextSelector: c,
                    unmaskTextSelector: E,
                    skipChild: !1,
                    inlineStylesheet: l,
                    maskInputOptions:
                        !0 === p
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
                            : !1 === p
                              ? {}
                              : p,
                    maskAttributeFn: f,
                    maskTextFn: I,
                    maskInputFn: T,
                    slimDOMOptions:
                        !0 === R || "all" === R
                            ? {
                                  script: !0,
                                  comment: !0,
                                  headFavicon: !0,
                                  headWhitespace: !0,
                                  headMetaDescKeywords: "all" === R,
                                  headMetaSocial: !0,
                                  headMetaRobots: !0,
                                  headMetaHttpEquiv: !0,
                                  headMetaAuthorship: !0,
                                  headMetaVerification: !0,
                              }
                            : !1 === R
                              ? {}
                              : R,
                    dataURLOptions: A,
                    inlineImages: u,
                    recordCanvas: d,
                    preserveWhiteSpace: N,
                    onSerialize: h,
                    onIframeLoad: O,
                    iframeLoadTimeout: S,
                    onStylesheetLoad: L,
                    stylesheetLoadTimeout: g,
                    keepIframeSrcFn: m,
                    newlyAddedElement: !1,
                });
            })(document, {
                mirror: tL,
                blockClass: s,
                blockSelector: c,
                unblockSelector: E,
                maskAllText: d,
                maskTextClass: p,
                unmaskTextClass: f,
                maskTextSelector: I,
                unmaskTextSelector: T,
                inlineStylesheet: A,
                maskAllInputs: j,
                maskAttributeFn: S,
                maskInputFn: L,
                maskTextFn: g,
                slimDOM: X,
                dataURLOptions: y,
                recordCanvas: b,
                inlineImages: H,
                onSerialize: (e) => {
                    ej(e, tL) && et.addIframe(e),
                        eX(e, tL) && Q.trackLinkElement(e),
                        e$(e) && ei.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                    et.attachIframe(e, t), e.contentWindow && er.addWindow(e.contentWindow), ei.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                    Q.attachLinkElement(e, t);
                },
                keepIframeSrcFn: k,
            });
            if (!t) return console.warn("Failed to snapshot the document");
            o({
                type: e1.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: ek(window),
                },
            }),
                tr.forEach((e) => e.unlock()),
                document.adoptedStyleSheets &&
                    document.adoptedStyleSheets.length > 0 &&
                    Q.adoptStyleSheets(document.adoptedStyleSheets, tL.getId(document));
        };
    _ = ea;
    try {
        let e = [],
            t = (e) =>
                tt(tu)(
                    {
                        onMutation: x,
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
                        maskTextClass: p,
                        unmaskTextClass: f,
                        maskTextSelector: I,
                        unmaskTextSelector: T,
                        maskInputOptions: j,
                        inlineStylesheet: A,
                        sampling: C,
                        recordDOM: v,
                        recordCanvas: b,
                        inlineImages: H,
                        userTriggeredOnInput: U,
                        collectFonts: G,
                        doc: e,
                        maskAttributeFn: S,
                        maskInputFn: L,
                        maskTextFn: g,
                        keepIframeSrcFn: k,
                        blockSelector: c,
                        unblockSelector: E,
                        slimDOMOptions: X,
                        dataURLOptions: y,
                        mirror: tL,
                        iframeManager: et,
                        stylesheetManager: Q,
                        shadowDomManager: ei,
                        processedNodeManager: en,
                        canvasManager: er,
                        ignoreCSSAttributes: K,
                        plugins:
                            (0, R.x)([
                                B,
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
        et.addLoadListener((n) => {
            try {
                e.push(t(n.contentDocument));
            } catch (e) {
                console.warn(e);
            }
        });
        let n = () => {
            ea(), e.push(t(document));
        };
        return (
            "interactive" === document.readyState || "complete" === document.readyState
                ? n()
                : (e.push(
                      eM("DOMContentLoaded", () => {
                          o({
                              type: e1.DomContentLoaded,
                              data: {},
                          }),
                              "DOMContentLoaded" === w && n();
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
                                  "load" === w && n();
                          },
                          window,
                      ),
                  )),
            () => {
                e.forEach((e) => e()), en.destroy(), (_ = void 0), (a = void 0);
            }
        );
    } catch (e) {
        console.warn(e);
    }
}
(tg.mirror = tL),
    (tg.takeFullSnapshot = function (e) {
        if (!_) throw Error("please take full snapshot after start recording");
        _(e);
    });
let tm = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    tD = ["info", "warn", "error", "log"],
    tC = "[Replay] ";
function ty(e, t = "info") {
    (0, A.n)(
        {
            category: "console",
            data: { logger: "replay" },
            level: t,
            message: `${tC}${e}`,
        },
        { level: t },
    );
}
let tP = (function () {
    let e = !1,
        t = !1,
        n = {
            exception: () => void 0,
            infoTick: () => void 0,
            setConfig: (n) => {
                (e = n.captureExceptions), (t = n.traceInternals);
            },
        };
    return (
        tm
            ? (tD.forEach((e) => {
                  n[e] = (...n) => {
                      C.kg[e](tC, ...n), t && ty(n.join(""), (0, y.V)(e));
                  };
              }),
              (n.exception = (r, ...i) => {
                  i.length && n.error && n.error(...i), C.kg.error(tC, r), e ? (0, N.Tb)(r) : t && ty(r, "error");
              }),
              (n.infoTick = (...e) => {
                  C.kg.info(tC, ...e), t && setTimeout(() => ty(e[0]), 0);
              }))
            : tD.forEach((e) => {
                  n[e] = () => void 0;
              }),
        n
    );
})();
function tv(e) {
    return e > 9999999999 ? e : 1000 * e;
}
function tb(e) {
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
function tw(e) {
    return e.closest("button,a") || e;
}
function tU(e) {
    let t = tG(e);
    return t && t instanceof Element ? tw(t) : t;
}
function tG(e) {
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
class tB {
    constructor(e, t, n = tM) {
        (this._lastMutation = 0),
            (this._lastScroll = 0),
            (this._clicks = []),
            (this._timeout = t.timeout / 1000),
            (this._threshold = t.threshold / 1000),
            (this._scollTimeout = t.scrollTimeout / 1000),
            (this._replay = e),
            (this._ignoreSelector = t.ignoreSelector),
            (this._addBreadcrumbEvent = n);
    }
    addListeners() {
        var e;
        let t =
            ((e = () => {
                this._lastMutation = tK();
            }),
            s ||
                ((s = []),
                (0, v.hl)(V, "open", function (e) {
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
        var n, r, i;
        if (
            ((n = t),
            (r = this._ignoreSelector),
            !tk.includes(n.tagName) ||
                ("INPUT" === n.tagName && !["submit", "button"].includes(n.getAttribute("type") || "")) ||
                ("A" === n.tagName &&
                    (n.hasAttribute("download") ||
                        (n.hasAttribute("target") && "_self" !== n.getAttribute("target")))) ||
                (r && n.matches(r)) ||
                !((i = e).data && "number" == typeof i.data.nodeId && i.timestamp))
        )
            return;
        let a = {
            timestamp: tb(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t,
        };
        this._clicks.some((e) => e.node === a.node && 1 > Math.abs(e.timestamp - a.timestamp)) ||
            (this._clicks.push(a), 1 === this._clicks.length && this._scheduleCheckClicks());
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = tb(e);
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = tb(e);
    }
    registerClick(e) {
        let t = tw(e);
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
            t = tK();
        for (let n of (this._clicks.forEach((n) => {
            !n.mutationAfter &&
                this._lastMutation &&
                (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0),
                !n.scrollAfter &&
                    this._lastScroll &&
                    (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0),
                n.timestamp + this._timeout <= t && e.push(n);
        }),
        e)) {
            let e = this._clicks.indexOf(n);
            e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(e) {
        let t = this._replay,
            n = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
            r = e.mutationAfter && e.mutationAfter <= this._threshold,
            { clickCount: i, clickBreadcrumb: a } = e;
        if (!n && !r) {
            let n = 1000 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                r = n < 1000 * this._timeout ? "mutation" : "timeout",
                o = {
                    type: "default",
                    message: a.message,
                    timestamp: a.timestamp,
                    category: "ui.slowClickDetected",
                    data: {
                        ...a.data,
                        url: V.location.href,
                        route: t.getCurrentRoute(),
                        timeAfterClickMs: n,
                        endReason: r,
                        clickCount: i || 1,
                    },
                };
            this._addBreadcrumbEvent(t, o);
            return;
        }
        if (i > 1) {
            let e = {
                type: "default",
                message: a.message,
                timestamp: a.timestamp,
                category: "ui.multiClick",
                data: {
                    ...a.data,
                    url: V.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: i,
                    metric: !0,
                },
            };
            this._addBreadcrumbEvent(t, e);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
            (this._checkClickTimeout = (0, K.iK)(() => this._checkClicks(), 1000));
    }
}
let tk = ["A", "BUTTON", "INPUT"];
function tK() {
    return Date.now() / 1000;
}
function tW(e) {
    return {
        timestamp: Date.now() / 1000,
        type: "default",
        ...e,
    };
}
((p = I || (I = {}))[(p.Document = 0)] = "Document"),
    (p[(p.DocumentType = 1)] = "DocumentType"),
    (p[(p.Element = 2)] = "Element"),
    (p[(p.Text = 3)] = "Text"),
    (p[(p.CDATA = 4)] = "CDATA"),
    (p[(p.Comment = 5)] = "Comment");
let tx = new Set([
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
function tY(e, t) {
    let n = tg.mirror.getId(e),
        r = n && tg.mirror.getNode(n),
        i = r && tg.mirror.getMeta(r),
        a = i && i.type === I.Element ? i : null;
    return {
        message: t,
        data: a
            ? {
                  nodeId: n,
                  node: {
                      id: n,
                      tagName: a.tagName,
                      textContent: Array.from(a.childNodes)
                          .map((e) => e.type === I.Text && e.textContent)
                          .filter(Boolean)
                          .map((e) => e.trim())
                          .join(""),
                      attributes: (function (e) {
                          let t = {};
                          for (let n in (!e["data-sentry-component"] &&
                              e["data-sentry-element"] &&
                              (e["data-sentry-component"] = e["data-sentry-element"]),
                          e))
                              if (tx.has(n)) {
                                  let r = n;
                                  ("data-testid" === n || "data-test-id" === n) && (r = "testId"), (t[r] = e[n]);
                              }
                          return t;
                      })(a.attributes),
                  },
              }
            : {},
    };
}
let tF = {
    resource: function (e) {
        let {
            entryType: t,
            initiatorType: n,
            name: r,
            responseEnd: i,
            startTime: a,
            decodedBodySize: o,
            encodedBodySize: _,
            responseStatus: s,
            transferSize: c,
        } = e;
        return ["fetch", "xmlhttprequest"].includes(n)
            ? null
            : {
                  type: `${t}.${n}`,
                  start: tX(a),
                  end: tX(i),
                  name: r,
                  data: {
                      size: c,
                      statusCode: s,
                      decodedBodySize: o,
                      encodedBodySize: _,
                  },
              };
    },
    paint: function (e) {
        let { duration: t, entryType: n, name: r, startTime: i } = e,
            a = tX(i);
        return {
            type: n,
            name: r,
            start: a,
            end: a + t,
            data: void 0,
        };
    },
    navigation: function (e) {
        let {
            entryType: t,
            name: n,
            decodedBodySize: r,
            duration: i,
            domComplete: a,
            encodedBodySize: o,
            domContentLoadedEventStart: _,
            domContentLoadedEventEnd: s,
            domInteractive: c,
            loadEventStart: E,
            loadEventEnd: l,
            redirectCount: u,
            startTime: d,
            transferSize: p,
            type: f,
        } = e;
        return 0 === i
            ? null
            : {
                  type: `${t}.${f}`,
                  start: tX(d),
                  end: tX(a),
                  name: n,
                  data: {
                      size: p,
                      decodedBodySize: r,
                      encodedBodySize: o,
                      duration: i,
                      domInteractive: c,
                      domContentLoadedEventStart: _,
                      domContentLoadedEventEnd: s,
                      loadEventStart: E,
                      loadEventEnd: l,
                      domComplete: a,
                      redirectCount: u,
                  },
              };
    },
};
function tV(e, t) {
    return ({ metric: n }) => void t.replayPerformanceEntries.push(e(n));
}
function tj(e) {
    let t = tF[e.entryType];
    return t ? t(e) : null;
}
function tX(e) {
    return ((M.Z1 || V.performance.timeOrigin) + e) / 1000;
}
function t$(e) {
    let t = e.entries[e.entries.length - 1];
    return tZ(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0);
}
function tq(e) {
    let t = [],
        n = [];
    for (let r of e.entries)
        if (void 0 !== r.sources) {
            let e = [];
            for (let t of r.sources)
                if (t.node) {
                    n.push(t.node);
                    let r = tg.mirror.getId(t.node);
                    r && e.push(r);
                }
            t.push({
                value: r.value,
                nodeIds: e.length ? e : void 0,
            });
        }
    return tZ(e, "cumulative-layout-shift", n, t);
}
function tz(e) {
    let t = e.entries[e.entries.length - 1];
    return tZ(e, "first-input-delay", t && t.target ? [t.target] : void 0);
}
function tJ(e) {
    let t = e.entries[e.entries.length - 1];
    return tZ(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0);
}
function tZ(e, t, n, r) {
    let i = e.value,
        a = e.rating,
        o = tX(i);
    return {
        type: "web-vital",
        name: t,
        start: o,
        end: o,
        data: {
            value: i,
            size: i,
            rating: a,
            nodeIds: n ? n.map((e) => tg.mirror.getId(e)) : void 0,
            attributions: r,
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
                        ({ data: n }) => {
                            n.success ? e() : t();
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
        tm && tP.info("Destroying compression worker"), this._worker.terminate();
    }
    postMessage(e, t) {
        let n = this._getAndIncrementId();
        return new Promise((r, i) => {
            let a = ({ data: t }) => {
                if (t.method === e && t.id === n) {
                    if ((this._worker.removeEventListener("message", a), !t.success)) {
                        tm && tP.error("Error in compression worker: ", t.response),
                            i(Error("Error in compression worker"));
                        return;
                    }
                    r(t.response);
                }
            };
            this._worker.addEventListener("message", a),
                this._worker.postMessage({
                    id: n,
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
        let n = JSON.stringify(e);
        return ((this._totalSize += n.length), this._totalSize > 20000000)
            ? Promise.reject(new tQ())
            : this._sendEventToWorker(n);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage("clear").then(null, (e) => {
                tm && tP.exception(e, 'Sending "clear" message to worker failed', e);
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
            tm && tP.exception(e, "Failed to load the compression worker, falling back to simple buffer");
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        let { events: e, hasCheckout: t } = this._fallback,
            n = [];
        for (let t of e) n.push(this._compression.addEvent(t));
        (this._compression.hasCheckout = t), (this._used = this._compression);
        try {
            await Promise.all(n);
        } catch (e) {
            tm && tP.exception(e, "Failed to add events when switching buffers.");
        }
    }
}
function t6() {
    try {
        return "sessionStorage" in V && !!V.sessionStorage;
    } catch (e) {
        return !1;
    }
}
function t5(e) {
    return void 0 !== e && Math.random() < e;
}
function t4(e) {
    let t = Date.now(),
        n = e.id || (0, w.DM)(),
        r = e.started || t,
        i = e.lastActivity || t,
        a = e.segmentId || 0;
    return {
        id: n,
        started: r,
        lastActivity: i,
        segmentId: a,
        sampled: e.sampled,
        previousSessionId: e.previousSessionId,
    };
}
function t8(e) {
    if (t6())
        try {
            V.sessionStorage.setItem(j, JSON.stringify(e));
        } catch (e) {}
}
function t9({ sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 }, { previousSessionId: r } = {}) {
    let i = t4({
        sampled: t5(e) ? "session" : !!t && "buffer",
        previousSessionId: r,
    });
    return n && t8(i), i;
}
function t7(e, t, n = +new Date()) {
    return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= n);
}
function ne(e, { maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now() }) {
    return t7(e.started, t, r) || t7(e.lastActivity, n, r);
}
function nt(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
    return (
        !!ne(e, {
            sessionIdleExpire: t,
            maxReplayDuration: n,
        }) &&
        ("buffer" !== e.sampled || 0 !== e.segmentId)
    );
}
function nn({ sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n }, r) {
    let i =
        r.stickySession &&
        (function () {
            if (!t6()) return null;
            try {
                let e = V.sessionStorage.getItem(j);
                if (!e) return null;
                let t = JSON.parse(e);
                return tm && tP.infoTick("Loading existing session"), t4(t);
            } catch (e) {
                return null;
            }
        })();
    return i
        ? nt(i, {
              sessionIdleExpire: e,
              maxReplayDuration: t,
          })
            ? (tm && tP.infoTick("Session in sessionStorage is expired, creating new one..."),
              t9(r, { previousSessionId: i.id }))
            : i
        : (tm && tP.infoTick("Creating new session"), t9(r, { previousSessionId: n }));
}
function nr(e, t, n) {
    return !!na(e, t) && (ni(e, t, n), !0);
}
async function ni(e, t, n) {
    if (!e.eventBuffer) return null;
    try {
        n && "buffer" === e.recordingMode && e.eventBuffer.clear(), n && (e.eventBuffer.hasCheckout = !0);
        let r = e.getOptions(),
            i = (function (e, t) {
                try {
                    if ("function" == typeof t && e.type === e1.Custom) return t(e);
                } catch (e) {
                    return (
                        tm &&
                            tP.exception(
                                e,
                                "An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                            ),
                        null
                    );
                }
                return e;
            })(t, r.beforeAddRecordingEvent);
        if (!i) return;
        return await e.eventBuffer.addEvent(i);
    } catch (r) {
        let t = r && r instanceof tQ ? "addEventSizeExceeded" : "addEvent";
        e.handleException(r), await e.stop({ reason: t });
        let n = (0, h.s3)();
        n && n.recordDroppedEvent("internal_sdk_error", "replay");
    }
}
function na(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let n = tv(t.timestamp);
    return (
        !(n + e.timeouts.sessionIdlePause < Date.now()) &&
        (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) ||
            (tm && tP.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), !1))
    );
}
function no(e) {
    return "transaction" === e.type;
}
function n_(e) {
    return "feedback" === e.type;
}
function ns(e) {
    return !!e.category;
}
function nc(e, t) {
    return t.map(({ type: t, start: n, end: r, name: i, data: a }) => {
        let o = e.throttledAddEvent({
            type: e1.Custom,
            timestamp: n,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: t,
                    description: i,
                    startTimestamp: n,
                    endTimestamp: r,
                    data: a,
                },
            },
        });
        return "string" == typeof o ? Promise.resolve(null) : o;
    });
}
function nE(e, t) {
    var n;
    e.isEnabled() &&
        null !== t &&
        ((n = t.name),
        ((!tm || !e.getOptions()._experiments.traceInternals) && (0, O.W)(n, (0, h.s3)())) ||
            e.addUpdate(() => (nc(e, [t]), !0)));
}
function nl(e) {
    if (!e) return;
    let t = new TextEncoder();
    try {
        if ("string" == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let n = nA(e);
            return t.encode(n).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
    } catch (e) {}
}
function nu(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t;
}
function nd(e) {
    try {
        if ("string" == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [nA(e)];
        if (!e) return [void 0];
    } catch (t) {
        return tm && tP.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"];
    }
    return tm && tP.info("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function np(e, t) {
    if (!e)
        return {
            headers: {},
            size: void 0,
            _meta: { warnings: [t] },
        };
    let n = { ...e._meta },
        r = n.warnings || [];
    return (n.warnings = [...r, t]), (e._meta = n), e;
}
function nf(e, t) {
    if (!t) return null;
    let { startTimestamp: n, endTimestamp: r, url: i, method: a, statusCode: o, request: _, response: s } = t;
    return {
        type: e,
        start: n / 1000,
        end: r / 1000,
        name: i,
        data: (0, v.Jr)({
            method: a,
            statusCode: o,
            request: _,
            response: s,
        }),
    };
}
function nI(e) {
    return {
        headers: {},
        size: e,
        _meta: { warnings: ["URL_SKIPPED"] },
    };
}
function nT(e, t, n) {
    if (!t && 0 === Object.keys(e).length) return;
    if (!t) return { headers: e };
    if (!n)
        return {
            headers: e,
            size: t,
        };
    let r = {
            headers: e,
            size: t,
        },
        { body: i, warnings: a } = (function (e) {
            if (!e || "string" != typeof e) return { body: e };
            let t = e.length > 150000,
                n = (function (e) {
                    let t = e[0],
                        n = e[e.length - 1];
                    return ("[" === t && "]" === n) || ("{" === t && "}" === n);
                })(e);
            if (t) {
                let t = e.slice(0, 150000);
                return n
                    ? {
                          body: t,
                          warnings: ["MAYBE_JSON_TRUNCATED"],
                      }
                    : {
                          body: `${t}…`,
                          warnings: ["TEXT_TRUNCATED"],
                      };
            }
            if (n)
                try {
                    return { body: JSON.parse(e) };
                } catch (e) {}
            return { body: e };
        })(n);
    return (r.body = i), a && a.length > 0 && (r._meta = { warnings: a }), r;
}
function nR(e, t) {
    return Object.entries(e).reduce((n, [r, i]) => {
        let a = r.toLowerCase();
        return t.includes(a) && e[r] && (n[a] = i), n;
    }, {});
}
function nA(e) {
    return new URLSearchParams(e).toString();
}
function nN(e, t) {
    let n = (function (e, t = V.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(V.location.origin)) return e;
        let n = new URL(e, t);
        if (n.origin !== new URL(t).origin) return e;
        let r = n.href;
        return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
    })(e);
    return (0, U.U0)(n, t);
}
async function nh(e, t, n) {
    try {
        let r = await nO(e, t, n),
            i = nf("resource.fetch", r);
        nE(n.replay, i);
    } catch (e) {
        tm && tP.exception(e, "Failed to capture fetch breadcrumb");
    }
}
async function nO(e, t, n) {
    let r = Date.now(),
        { startTimestamp: i = r, endTimestamp: a = r } = t,
        { url: o, method: _, status_code: s = 0, request_body_size: c, response_body_size: E } = e.data,
        l = nN(o, n.networkDetailAllowUrls) && !nN(o, n.networkDetailDenyUrls);
    return {
        startTimestamp: i,
        endTimestamp: a,
        url: o,
        method: _,
        statusCode: s,
        request: l
            ? (function ({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
                  var i, a;
                  let o = n
                      ? ((i = n),
                        (a = t),
                        1 === i.length && "string" != typeof i[0] ? nD(i[0], a) : 2 === i.length ? nD(i[1], a) : {})
                      : {};
                  if (!e) return nT(o, r, void 0);
                  let [_, s] = nd(ng(n)),
                      c = nT(o, r, _);
                  return s ? np(c, s) : c;
              })(n, t.input, c)
            : nI(c),
        response: await nS(l, n, t.response, E),
    };
}
async function nS(e, { networkCaptureBodies: t, networkResponseHeaders: n }, r, i) {
    if (!e && void 0 !== i) return nI(i);
    let a = r ? nm(r.headers, n) : {};
    if (!r || (!t && void 0 !== i)) return nT(a, i, void 0);
    let [o, _] = await nL(r),
        s = (function (e, { networkCaptureBodies: t, responseBodySize: n, captureDetails: r, headers: i }) {
            try {
                let a = e && e.length && void 0 === n ? nl(e) : n;
                if (!r) return nI(a);
                if (t) return nT(i, a, e);
                return nT(i, a, void 0);
            } catch (e) {
                return tm && tP.exception(e, "Failed to serialize response body"), nT(i, n, void 0);
            }
        })(o, {
            networkCaptureBodies: t,
            responseBodySize: i,
            captureDetails: e,
            headers: a,
        });
    return _ ? np(s, _) : s;
}
async function nL(e) {
    let t = (function (e) {
        try {
            return e.clone();
        } catch (e) {
            tm && tP.exception(e, "Failed to clone response body");
        }
    })(e);
    if (!t) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var n;
        return [
            await ((n = t),
            new Promise((e, t) => {
                let r = (0, K.iK)(() => t(Error("Timeout while trying to read response body")), 500);
                nC(n)
                    .then(
                        (t) => e(t),
                        (e) => t(e),
                    )
                    .finally(() => clearTimeout(r));
            })),
        ];
    } catch (e) {
        return tm && tP.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"];
    }
}
function ng(e = []) {
    if (2 === e.length && "object" == typeof e[1]) return e[1].body;
}
function nm(e, t) {
    let n = {};
    return (
        t.forEach((t) => {
            e.get(t) && (n[t] = e.get(t));
        }),
        n
    );
}
function nD(e, t) {
    if (!e) return {};
    let n = e.headers;
    return n ? (n instanceof Headers ? nm(n, t) : Array.isArray(n) ? {} : nR(n, t)) : {};
}
async function nC(e) {
    return await e.text();
}
async function ny(e, t, n) {
    try {
        let r = (function (e, t, n) {
                let r = Date.now(),
                    { startTimestamp: i = r, endTimestamp: a = r, input: o, xhr: _ } = t,
                    { url: s, method: c, status_code: E = 0, request_body_size: l, response_body_size: u } = e.data;
                if (!s) return null;
                if (!_ || !nN(s, n.networkDetailAllowUrls) || nN(s, n.networkDetailDenyUrls)) {
                    let e = nI(l);
                    return {
                        startTimestamp: i,
                        endTimestamp: a,
                        url: s,
                        method: c,
                        statusCode: E,
                        request: e,
                        response: nI(u),
                    };
                }
                let d = _[x.xU],
                    p = d ? nR(d.request_headers, n.networkRequestHeaders) : {},
                    f = nR(
                        (function (e) {
                            let t = e.getAllResponseHeaders();
                            return t
                                ? t.split("\r\n").reduce((e, t) => {
                                      let [n, r] = t.split(": ");
                                      return r && (e[n.toLowerCase()] = r), e;
                                  }, {})
                                : {};
                        })(_),
                        n.networkResponseHeaders,
                    ),
                    [I, T] = n.networkCaptureBodies ? nd(o) : [void 0],
                    [R, A] = n.networkCaptureBodies
                        ? (function (e) {
                              let t = [];
                              try {
                                  return [e.responseText];
                              } catch (e) {
                                  t.push(e);
                              }
                              try {
                                  var n = e.response,
                                      r = e.responseType;
                                  try {
                                      if ("string" == typeof n) return [n];
                                      if (n instanceof Document) return [n.body.outerHTML];
                                      if ("json" === r && n && "object" == typeof n) return [JSON.stringify(n)];
                                      if (!n) return [void 0];
                                  } catch (e) {
                                      return (
                                          tm && tP.exception(e, "Failed to serialize body", n),
                                          [void 0, "BODY_PARSE_ERROR"]
                                      );
                                  }
                                  return (
                                      tm && tP.info("Skipping network body because of body type", n),
                                      [void 0, "UNPARSEABLE_BODY_TYPE"]
                                  );
                              } catch (e) {
                                  t.push(e);
                              }
                              return tm && tP.warn("Failed to get xhr response body", ...t), [void 0];
                          })(_)
                        : [void 0],
                    N = nT(p, l, I),
                    h = nT(f, u, R);
                return {
                    startTimestamp: i,
                    endTimestamp: a,
                    url: s,
                    method: c,
                    statusCode: E,
                    request: T ? np(N, T) : N,
                    response: A ? np(h, A) : h,
                };
            })(e, t, n),
            i = nf("resource.xhr", r);
        nE(n.replay, i);
    } catch (e) {
        tm && tP.exception(e, "Failed to capture xhr breadcrumb");
    }
}
async function nP(e) {
    try {
        return Promise.all(
            nc(e, [
                (function (e) {
                    let { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
                        i = Date.now() / 1000;
                    return {
                        type: "memory",
                        name: "memory",
                        start: i,
                        end: i,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: n,
                                usedJSHeapSize: r,
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
async function nv({ client: e, scope: t, replayId: n, event: r }) {
    let i = {
        event_id: n,
        integrations:
            "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations)
                ? void 0
                : Object.keys(e._integrations),
    };
    e.emit("preprocessEvent", r, i);
    let a = await (0, S.R)(e.getOptions(), r, i, t, e, (0, h.aF)());
    if (!a) return null;
    a.platform = a.platform || "javascript";
    let o = e.getSdkMetadata(),
        { name: _, version: s } = (o && o.sdk) || {};
    return (
        (a.sdk = {
            ...a.sdk,
            name: _ || "sentry.javascript.unknown",
            version: s || "0.0.0",
        }),
        a
    );
}
async function nb({ recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: i, session: a }) {
    var o;
    let _,
        s = (function ({ recordingData: e, headers: t }) {
            let n,
                r = `${JSON.stringify(t)}
`;
            if ("string" == typeof e) n = `${r}${e}`;
            else {
                let t = new TextEncoder().encode(r);
                (n = new Uint8Array(t.length + e.length)).set(t), n.set(e, t.length);
            }
            return n;
        })({
            recordingData: e,
            headers: { segment_id: n },
        }),
        { urls: c, errorIds: E, traceIds: l, initialTimestamp: u } = r,
        d = (0, h.s3)(),
        p = (0, h.nZ)(),
        f = d && d.getTransport(),
        I = d && d.getDsn();
    if (!d || !f || !I || !a.sampled) return (0, H.WD)({});
    let T = {
            type: "replay_event",
            replay_start_timestamp: u / 1000,
            timestamp: i / 1000,
            error_ids: E,
            trace_ids: l,
            urls: c,
            replay_id: t,
            segment_id: n,
            replay_type: a.sampled,
        },
        R = await nv({
            scope: p,
            client: d,
            replayId: t,
            event: T,
        });
    if (!R)
        return (
            d.recordDroppedEvent("event_processor", "replay", T),
            tm && tP.info("An event processor returned `null`, will not send event."),
            (0, H.WD)({})
        );
    delete R.sdkProcessingMetadata;
    let A =
        ((o = d.getOptions().tunnel),
        (0, G.Jd)((0, G.Cd)(R, (0, G.HY)(R), o, I), [
            [{ type: "replay_event" }, R],
            [
                {
                    type: "replay_recording",
                    length: "string" == typeof s ? new TextEncoder().encode(s).length : s.length,
                },
                s,
            ],
        ]));
    try {
        _ = await f.send(A);
    } catch (t) {
        let e = Error(X);
        try {
            e.cause = t;
        } catch (e) {}
        throw e;
    }
    if ("number" == typeof _.statusCode && (_.statusCode < 200 || _.statusCode >= 300)) throw new nM(_.statusCode);
    let N = (0, B.WG)({}, _);
    if ((0, B.Q)(N, "replay")) throw new nw(N);
    return _;
}
class nM extends Error {
    constructor(e) {
        super(`Transport returned status code ${e}`);
    }
}
class nw extends Error {
    constructor(e) {
        super("Rate limit hit"), (this.rateLimits = e);
    }
}
async function nU(
    e,
    t = {
        count: 0,
        interval: 5000,
    },
) {
    let { recordingData: n, onError: r } = e;
    if (n.length)
        try {
            return await nb(e), !0;
        } catch (n) {
            if (n instanceof nM || n instanceof nw) throw n;
            if (((0, N.v)("Replays", { _retryCount: t.count }), r && r(n), t.count >= 3)) {
                let e = Error(`${X} - max retries exceeded`);
                try {
                    e.cause = n;
                } catch (e) {}
                throw e;
            }
            return (
                (t.interval *= ++t.count),
                new Promise((n, r) => {
                    (0, K.iK)(async () => {
                        try {
                            await nU(e, t), n(!0);
                        } catch (e) {
                            r(e);
                        }
                    }, t.interval);
                })
            );
        }
}
let nG = "__THROTTLED";
class nH {
    constructor({ options: e, recordingOptions: t }) {
        nH.prototype.__init.call(this),
            nH.prototype.__init2.call(this),
            nH.prototype.__init3.call(this),
            nH.prototype.__init4.call(this),
            nH.prototype.__init5.call(this),
            nH.prototype.__init6.call(this),
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
            (this._debouncedFlush = (function (e, t, n) {
                let r,
                    i,
                    a,
                    o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                function _() {
                    return s(), (r = e());
                }
                function s() {
                    void 0 !== i && clearTimeout(i), void 0 !== a && clearTimeout(a), (i = a = void 0);
                }
                function c() {
                    return i && clearTimeout(i), (i = (0, K.iK)(_, t)), o && void 0 === a && (a = (0, K.iK)(_, o)), r;
                }
                return (
                    (c.cancel = s),
                    (c.flush = function () {
                        return void 0 !== i || void 0 !== a ? _() : r;
                    }),
                    c
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (e, t, n) {
                let r = new Map(),
                    i = !1;
                return (...t) => {
                    let n = Math.floor(Date.now() / 1000),
                        a = n - 5;
                    if (
                        (r.forEach((e, t) => {
                            t < a && r.delete(t);
                        }),
                        [...r.values()].reduce((e, t) => e + t, 0) >= 300)
                    ) {
                        let e = i;
                        return (i = !0), e ? "__SKIPPED" : nG;
                    }
                    i = !1;
                    let o = r.get(n) || 0;
                    return r.set(n, o + 1), e(...t);
                };
            })(
                (e, t) =>
                    (function (e, t, n) {
                        return na(e, t) ? ni(e, t, n) : Promise.resolve(null);
                    })(this, e, t),
                0,
                0,
            ));
        let { slowClickTimeout: n, slowClickIgnoreSelectors: r } = this.getOptions(),
            i = n
                ? {
                      threshold: Math.min(3000, n),
                      timeout: n,
                      scrollTimeout: 300,
                      ignoreSelector: r ? r.join(",") : "",
                  }
                : void 0;
        if ((i && (this.clickDetector = new tB(this, i)), tm)) {
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
        tm && tP.exception(e), this._options.onError && this._options.onError(e);
    }
    initializeSampling(e) {
        let { errorSampleRate: t, sessionSampleRate: n } = this._options,
            r = t <= 0 && n <= 0;
        if (((this._requiresManualStart = r), !r)) {
            if ((this._initializeSessionForSampling(e), !this.session)) {
                tm && tP.exception(Error("Unable to initialize and create session"));
                return;
            }
            !1 !== this.session.sampled &&
                ((this.recordingMode =
                    "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session"),
                tm && tP.infoTick(`Starting replay in ${this.recordingMode} mode`),
                this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && "session" === this.recordingMode) {
            tm && tP.info("Recording is already in progress");
            return;
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
            tm && tP.info("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        tm && tP.infoTick("Starting replay in session mode"), this._updateUserActivity();
        let e = nn(
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
            tm && tP.info("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        tm && tP.infoTick("Starting replay in buffer mode");
        let e = nn(
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
                n = this._canvas;
            this._stopRecording = tg({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode
                    ? { checkoutEveryNms: 60000 }
                    : this._options._experiments.continuousCheckout && {
                          checkoutEveryNms: Math.max(360000, this._options._experiments.continuousCheckout),
                      }),
                emit:
                    ((e = this),
                    (t = !1),
                    (n, r) => {
                        if (!e.checkAndHandleExpiredSession()) {
                            tm && tP.warn("Received replay event after session expired.");
                            return;
                        }
                        let i = r || !t;
                        (t = !0),
                            e.clickDetector &&
                                (function (e, t) {
                                    try {
                                        var n;
                                        if (((n = t), 3 !== n.type)) return;
                                        let { source: r } = t.data;
                                        if (
                                            (tH.has(r) && e.registerMutation(t.timestamp),
                                            r === e2.Scroll && e.registerScroll(t.timestamp),
                                            t.data.source === e2.MouseInteraction)
                                        ) {
                                            let { type: n, id: r } = t.data,
                                                i = tg.mirror.getNode(r);
                                            i instanceof HTMLElement && n === e3.Click && e.registerClick(i);
                                        }
                                    } catch (e) {}
                                })(e.clickDetector, n),
                            e.addUpdate(() => {
                                var t;
                                if (("buffer" === e.recordingMode && i && e.setInitialState(), !nr(e, n, i))) return !0;
                                if (!i) return !1;
                                let r = e.session;
                                if (
                                    ((t = e),
                                    i &&
                                        t.session &&
                                        0 === t.session.segmentId &&
                                        nr(
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
                                    r && r.previousSessionId)
                                )
                                    return !0;
                                if ("buffer" === e.recordingMode && r && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t &&
                                        (tm &&
                                            tP.info(
                                                `Updating session start time to earliest event in buffer to ${new Date(t)}`,
                                            ),
                                        (r.started = t),
                                        e.getOptions().stickySession && t8(r));
                                }
                                return "session" === e.recordingMode && e.flush(), !0;
                            });
                    }),
                onMutation: this._onMutationHandler,
                ...(n
                    ? {
                          recordCanvas: n.recordCanvas,
                          getCanvasManager: n.getCanvasManager,
                          sampling: n.sampling,
                          dataURLOptions: n.dataURLOptions,
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
                tm && tP.info(`Stopping Replay${t ? ` triggered by ${t}` : ""}`),
                    this._removeListeners(),
                    this.stopRecording(),
                    this._debouncedFlush.cancel(),
                    e && (await this._flush({ force: !0 })),
                    this.eventBuffer && this.eventBuffer.destroy(),
                    (this.eventBuffer = null),
                    (function () {
                        if (t6())
                            try {
                                V.sessionStorage.removeItem(j);
                            } catch (e) {}
                    })(),
                    (this.session = void 0);
            } catch (e) {
                this.handleException(e);
            }
        }
    }
    pause() {
        !this._isPaused && ((this._isPaused = !0), this.stopRecording(), tm && tP.info("Pausing replay"));
    }
    resume() {
        this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1), this.startRecording(), tm && tP.info("Resuming replay"));
    }
    async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let t = Date.now();
        tm && tP.info("Converting buffer to session"), await this.flushImmediate();
        let n = this.stopRecording();
        e &&
            n &&
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
        let n = this._throttledAddEvent(e, t);
        if (n === nG) {
            let e = tW({ category: "replay.throttled" });
            this.addUpdate(
                () =>
                    !nr(this, {
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
        return n;
    }
    getCurrentRoute() {
        let e = this.lastActiveSpan || (0, L.HN)(),
            t = e && (0, L.Gx)(e),
            n = ((t && (0, L.XU)(t).data) || {})[g.Zj];
        if (t && n && ["route", "custom"].includes(n)) return (0, L.XU)(t).description;
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
                            tm && tP.info(`Using compression worker${e ? ` from ${e}` : ""}`);
                            let n = new Worker(t);
                            return new t3(n);
                        } catch (e) {
                            tm && tP.exception(e, "Failed to create compression worker");
                        }
                    })(t);
                    if (e) return e;
                }
                return tm && tP.info("Using simple buffer"), new t0();
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
            n = nn(
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
        this.session = n;
    }
    _checkSession() {
        if (!this.session) return !1;
        let e = this.session;
        return (
            !nt(e, {
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
                        let t = (0, h.s3)();
                        (0, Y.O)((t) => {
                            var n, r;
                            if (!e.isEnabled()) return;
                            let i = (function (e) {
                                let { target: t, message: n } = (function (e) {
                                    let t,
                                        n = "click" === e.name,
                                        r = null;
                                    try {
                                        (r = n ? tU(e.event) : tG(e.event)),
                                            (t = (0, b.Rt)(r, { maxStringLength: 200 }) || "<unknown>");
                                    } catch (e) {
                                        t = "<unknown>";
                                    }
                                    return {
                                        target: r,
                                        message: t,
                                    };
                                })(e);
                                return tW({
                                    category: `ui.${e.name}`,
                                    ...tY(t, n),
                                });
                            })(t);
                            if (!i) return;
                            let a = "click" === t.name,
                                o = a ? t.event : void 0;
                            a &&
                                e.clickDetector &&
                                o &&
                                o.target &&
                                !o.altKey &&
                                !o.metaKey &&
                                !o.ctrlKey &&
                                !o.shiftKey &&
                                ((n = e.clickDetector), (r = tU(t.event)), n.handleClick(i, r)),
                                tM(e, i);
                        }),
                            (0, F.a)((t) => {
                                if (!e.isEnabled()) return;
                                let n = (function (e) {
                                    let { from: t, to: n } = e,
                                        r = Date.now() / 1000;
                                    return {
                                        type: "navigation.push",
                                        start: r,
                                        end: r,
                                        name: n,
                                        data: { previous: t },
                                    };
                                })(t);
                                null !== n &&
                                    (e.getContext().urls.push(n.name),
                                    e.triggerUserActivity(),
                                    e.addUpdate(() => (nc(e, [n]), !1)));
                            });
                        let n = (0, h.s3)();
                        n &&
                            n.on("beforeAddBreadcrumb", (t) =>
                                (function (e, t) {
                                    var n;
                                    if (!e.isEnabled() || !ns(t)) return;
                                    let r =
                                        ((n = t),
                                        !ns(n) ||
                                        ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(n.category) ||
                                        n.category.startsWith("ui.")
                                            ? null
                                            : "console" === n.category
                                              ? (function (e) {
                                                    let t = e.data && e.data.arguments;
                                                    if (!Array.isArray(t) || 0 === t.length) return tW(e);
                                                    let n = !1,
                                                        r = t.map((e) => {
                                                            if (!e) return e;
                                                            if ("string" == typeof e)
                                                                return e.length > 5000
                                                                    ? ((n = !0), `${e.slice(0, 5000)}…`)
                                                                    : e;
                                                            if ("object" == typeof e)
                                                                try {
                                                                    let t = (0, P.Fv)(e, 7);
                                                                    if (JSON.stringify(t).length > 5000)
                                                                        return (
                                                                            (n = !0),
                                                                            `${JSON.stringify(t, null, 2).slice(0, 5000)}…`
                                                                        );
                                                                    return t;
                                                                } catch (e) {}
                                                            return e;
                                                        });
                                                    return tW({
                                                        ...e,
                                                        data: {
                                                            ...e.data,
                                                            arguments: r,
                                                            ...(n
                                                                ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                                                                : {}),
                                                        },
                                                    });
                                                })(n)
                                              : tW(n));
                                    r && tM(e, r);
                                })(e, t),
                            );
                        let r = (0, h.s3)();
                        try {
                            let {
                                    networkDetailAllowUrls: t,
                                    networkDetailDenyUrls: n,
                                    networkCaptureBodies: i,
                                    networkRequestHeaders: a,
                                    networkResponseHeaders: o,
                                } = e.getOptions(),
                                _ = {
                                    replay: e,
                                    networkDetailAllowUrls: t,
                                    networkDetailDenyUrls: n,
                                    networkCaptureBodies: i,
                                    networkRequestHeaders: a,
                                    networkResponseHeaders: o,
                                };
                            r &&
                                r.on("beforeAddBreadcrumb", (e, t) =>
                                    (function (e, t, n) {
                                        if (t.data)
                                            try {
                                                var r, i, a, o;
                                                if (
                                                    ((r = t),
                                                    "xhr" === r.category &&
                                                        (i = n) &&
                                                        i.xhr &&
                                                        (!(function (e, t) {
                                                            let { xhr: n, input: r } = t;
                                                            if (!n) return;
                                                            let i = nl(r),
                                                                a = n.getResponseHeader("content-length")
                                                                    ? nu(n.getResponseHeader("content-length"))
                                                                    : (function (e, t) {
                                                                          try {
                                                                              let n =
                                                                                  "json" === t &&
                                                                                  e &&
                                                                                  "object" == typeof e
                                                                                      ? JSON.stringify(e)
                                                                                      : e;
                                                                              return nl(n);
                                                                          } catch (e) {
                                                                              return;
                                                                          }
                                                                      })(n.response, n.responseType);
                                                            void 0 !== i && (e.data.request_body_size = i),
                                                                void 0 !== a && (e.data.response_body_size = a);
                                                        })(t, n),
                                                        ny(t, n, e)),
                                                    (a = t),
                                                    "fetch" === a.category && (o = n) && o.response)
                                                ) {
                                                    let { input: r, response: i } = n,
                                                        a = nl(r ? ng(r) : void 0),
                                                        o = i ? nu(i.headers.get("content-length")) : void 0;
                                                    void 0 !== a && (t.data.request_body_size = a),
                                                        void 0 !== o && (t.data.response_body_size = o),
                                                        nh(t, n, e);
                                                }
                                            } catch (e) {
                                                tm && tP.exception(e, "Error when enriching network breadcrumb");
                                            }
                                    })(_, e, t),
                                );
                        } catch (e) {}
                        let i = Object.assign(
                            (t, n) =>
                                e.isEnabled()
                                    ? "replay_event" === t.type
                                        ? (delete t.breadcrumbs, t)
                                        : (!t.type || no(t) || n_(t)) && e.checkAndHandleExpiredSession()
                                          ? n_(t)
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
                                                  n.originalException &&
                                                  n.originalException.__rrweb__ &&
                                                  !e.getOptions()._experiments.captureExceptions
                                                ? (tm && tP.log("Ignoring error from rrweb internals", t), null)
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
                        (0, N.Qy)(i),
                            t &&
                                (t.on("beforeSendEvent", (t) => {
                                    e.isEnabled() &&
                                        !t.type &&
                                        (function (e, t) {
                                            let n =
                                                t.exception &&
                                                t.exception.values &&
                                                t.exception.values[0] &&
                                                t.exception.values[0].value;
                                            "string" == typeof n &&
                                                (n.match(
                                                    /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                                                ) ||
                                                    n.match(
                                                        /(does not match server-rendered HTML|Hydration failed because)/i,
                                                    )) &&
                                                tM(
                                                    e,
                                                    tW({
                                                        category: "replay.hydrate-error",
                                                        data: { url: (0, b.l4)() },
                                                    }),
                                                );
                                        })(e, t);
                                }),
                                t.on("afterSendEvent", (t, n) => {
                                    if (!e.isEnabled() || (t.type && !no(t))) return;
                                    let r = n && n.statusCode;
                                    if (r && !(r < 200) && !(r >= 300)) {
                                        if (no(t))
                                            return void (function (e, t) {
                                                let n = e.getContext();
                                                t.contexts &&
                                                    t.contexts.trace &&
                                                    t.contexts.trace.trace_id &&
                                                    n.traceIds.size < 100 &&
                                                    n.traceIds.add(t.contexts.trace.trace_id);
                                            })(e, t);
                                        !(function (e, t) {
                                            let n = e.getContext();
                                            if (
                                                (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
                                                "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
                                            )
                                                return;
                                            let { beforeErrorSampling: r } = e.getOptions();
                                            ("function" != typeof r || r(t)) &&
                                                (0, K.iK)(() => {
                                                    e.sendBufferedReplayOrFlush();
                                                });
                                        })(e, t);
                                    }
                                }),
                                t.on("createDsc", (t) => {
                                    let n = e.getSessionId();
                                    n &&
                                        e.isEnabled() &&
                                        "session" === e.recordingMode &&
                                        e.checkAndHandleExpiredSession() &&
                                        (t.replay_id = n);
                                }),
                                t.on("spanStart", (t) => {
                                    e.lastActiveSpan = t;
                                }),
                                t.on("spanEnd", (t) => {
                                    e.lastActiveSpan = t;
                                }),
                                t.on("beforeSendFeedback", (t, n) => {
                                    let r = e.getSessionId();
                                    n &&
                                        n.includeReplay &&
                                        e.isEnabled() &&
                                        r &&
                                        t.contexts &&
                                        t.contexts.feedback &&
                                        (t.contexts.feedback.replay_id = r);
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
            function n({ entries: e }) {
                e.forEach(t);
            }
            let r = [];
            return (
                ["navigation", "paint", "resource"].forEach((e) => {
                    r.push((0, W._j)(e, n));
                }),
                r.push((0, W.$A)(tV(t$, e)), (0, W.PR)(tV(tq, e)), (0, W.to)(tV(tz, e)), (0, W.YF)(tV(tJ, e))),
                () => {
                    r.forEach((e) => e());
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
            let e = tW({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(e);
        };
    }
    __init3() {
        this._handleWindowFocus = () => {
            let e = tW({ category: "ui.focus" });
            this._doChangeToForegroundTasks(e);
        };
    }
    __init4() {
        this._handleKeyboardEvent = (e) => {
            !(function (e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let n = (function (e) {
                    var t;
                    let { metaKey: n, shiftKey: r, ctrlKey: i, altKey: a, key: o, target: _ } = e;
                    if (!_ || "INPUT" === (t = _).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o)
                        return null;
                    let s = n || i || a,
                        c = 1 === o.length;
                    if (!s && c) return null;
                    let E = (0, b.Rt)(_, { maxStringLength: 200 }) || "<unknown>",
                        l = tY(_, E);
                    return tW({
                        category: "ui.keyDown",
                        message: E,
                        data: {
                            ...l.data,
                            metaKey: n,
                            shiftKey: r,
                            ctrlKey: i,
                            altKey: a,
                            key: o,
                        },
                    });
                })(t);
                n && tM(e, n);
            })(this, e);
        };
    }
    _doChangeToBackgroundTasks(e) {
        this.session &&
            (ne(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
            }) ||
                (e && this._createCustomBreadcrumb(e), this.conditionalFlush()));
    }
    _doChangeToForegroundTasks(e) {
        if (this.session) {
            if (!this.checkAndHandleExpiredSession()) {
                tm && tP.info("Document has become active, but session has expired");
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
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(nc(this, e));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
    }
    _updateInitialTimestampFromEventBuffer() {
        let { session: e, eventBuffer: t } = this;
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        let n = t.getEarliestTimestamp();
        n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n);
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
            tm && tP.error("No session or eventBuffer found to flush.");
            return;
        }
        if ((await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents)) {
            if ((await nP(this), this.eventBuffer) && e === this.getSessionId())
                try {
                    this._updateInitialTimestampFromEventBuffer();
                    let t = Date.now();
                    if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 30000)
                        throw Error("Session is too long, not sending replay");
                    let n = this._popEventContext(),
                        r = this.session.segmentId++;
                    this._maybeSaveSession();
                    let i = await this.eventBuffer.finish();
                    await nU({
                        replayId: e,
                        recordingData: i,
                        segmentId: r,
                        eventContext: n,
                        session: this.session,
                        timestamp: t,
                        onError: (e) => this.handleException(e),
                    });
                } catch (t) {
                    this.handleException(t), this.stop({ reason: "sendReplay" });
                    let e = (0, h.s3)();
                    e && e.recordDroppedEvent(t instanceof nw ? "ratelimit_backoff" : "send_error", "replay");
                }
        }
    }
    __init5() {
        this._flush = async ({ force: e = !1 } = {}) => {
            if (!this._isEnabled && !e) return;
            if (!this.checkAndHandleExpiredSession()) {
                tm && tP.error("Attempting to finish replay event after session expired.");
                return;
            }
            if (!this.session) return;
            let t = this.session.started,
                n = Date.now() - t;
            this._debouncedFlush.cancel();
            let r = n < this._options.minReplayDuration,
                i = n > this._options.maxReplayDuration + 5000;
            if (r || i) {
                tm &&
                    tP.info(
                        `Session duration (${Math.floor(n / 1000)}s) is too ${r ? "short" : "long"}, not sending replay.`,
                    ),
                    r && this._debouncedFlush();
                return;
            }
            let a = this.eventBuffer;
            a &&
                0 === this.session.segmentId &&
                !a.hasCheckout &&
                tm &&
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
                n = this._options.mutationLimit,
                r = this._options.mutationBreadcrumbLimit,
                i = n && t > n;
            if (t > r || i) {
                let e = tW({
                    category: "replay.mutations",
                    data: {
                        count: t,
                        limit: i,
                    },
                });
                this._createCustomBreadcrumb(e);
            }
            return (
                !i ||
                (this.stop({
                    reason: "mutationLimit",
                    forceFlush: "session" === this.recordingMode,
                }),
                !1)
            );
        };
    }
}
function nB(e, t) {
    return [...e, ...t].join(",");
}
let nk = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    nK = ["content-length", "content-type", "accept"],
    nW = !1,
    nx = (e) => new nY(e);
class nY {
    static __initStatic() {
        this.id = "Replay";
    }
    constructor({
        flushMinDelay: e = 5000,
        flushMaxDelay: t = 5500,
        minReplayDuration: n = 4999,
        maxReplayDuration: r = 3600000,
        stickySession: i = !0,
        useCompression: a = !0,
        workerUrl: o,
        _experiments: _ = {},
        maskAllText: s = !0,
        maskAllInputs: c = !0,
        blockAllMedia: E = !0,
        mutationBreadcrumbLimit: l = 750,
        mutationLimit: u = 10000,
        slowClickTimeout: d = 7000,
        slowClickIgnoreSelectors: p = [],
        networkDetailAllowUrls: f = [],
        networkDetailDenyUrls: I = [],
        networkCaptureBodies: T = !0,
        networkRequestHeaders: R = [],
        networkResponseHeaders: A = [],
        mask: N = [],
        maskAttributes: h = ["title", "placeholder"],
        unmask: O = [],
        block: S = [],
        unblock: L = [],
        ignore: g = [],
        maskFn: m,
        beforeAddRecordingEvent: D,
        beforeErrorSampling: C,
    } = {}) {
        this.name = nY.id;
        let y = (function ({ mask: e, unmask: t, block: n, unblock: r, ignore: i }) {
            return {
                maskTextSelector: nB(e, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: nB(t, []),
                blockSelector: nB(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                unblockSelector: nB(r, []),
                ignoreSelector: nB(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]']),
            };
        })({
            mask: N,
            unmask: O,
            block: S,
            unblock: L,
            ignore: g,
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: s,
                maskInputOptions: { password: !0 },
                maskTextFn: m,
                maskInputFn: m,
                maskAttributeFn: (e, t, n) =>
                    (function ({ el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: i, value: a }) {
                        return !r || (i.unmaskTextSelector && e.matches(i.unmaskTextSelector))
                            ? a
                            : n.includes(t) ||
                                ("value" === t &&
                                    "INPUT" === e.tagName &&
                                    ["submit", "button"].includes(e.getAttribute("type") || ""))
                              ? a.replace(/[\S]/g, "*")
                              : a;
                    })({
                        maskAttributes: h,
                        maskAllText: s,
                        privacyOptions: y,
                        key: e,
                        value: t,
                        el: n,
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
                minReplayDuration: Math.min(n, 15000),
                maxReplayDuration: Math.min(r, 3600000),
                stickySession: i,
                useCompression: a,
                workerUrl: o,
                blockAllMedia: E,
                maskAllInputs: c,
                maskAllText: s,
                mutationBreadcrumbLimit: l,
                mutationLimit: u,
                slowClickTimeout: d,
                slowClickIgnoreSelectors: p,
                networkDetailAllowUrls: f,
                networkDetailDenyUrls: I,
                networkCaptureBodies: T,
                networkRequestHeaders: nF(R),
                networkResponseHeaders: nF(A),
                beforeAddRecordingEvent: D,
                beforeErrorSampling: C,
                _experiments: _,
            }),
            this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
                    ? `${this._recordingOptions.blockSelector},${nk}`
                    : nk),
            this._isInitialized && (0, k.j)())
        )
            throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return nW;
    }
    set _isInitialized(e) {
        nW = e;
    }
    afterAllSetup(e) {
        (0, k.j)() && !this._replay && (this._setup(e), this._initialize(e));
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
            let n = t.getOptions(),
                r = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, v.Jr)(e),
                },
                i = (0, m.o)(n.replaysSessionSampleRate),
                a = (0, m.o)(n.replaysOnErrorSampleRate);
            return (
                null == i &&
                    null == a &&
                    (0, C.Cf)(() => {
                        console.warn(
                            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                        );
                    }),
                null != i && (r.sessionSampleRate = i),
                null != a && (r.errorSampleRate = a),
                r
            );
        })(this._initialOptions, e);
        this._replay = new nH({
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
function nF(e) {
    return [...nK, ...e.map((e) => e.toLowerCase())];
}
function nV() {
    let e = (0, h.s3)();
    return e && e.getIntegrationByName("Replay");
}
nY.__initStatic();
