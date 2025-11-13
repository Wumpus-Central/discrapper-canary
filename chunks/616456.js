let r, _, n, o, i, E;
a.d(e, {
    G: () => aY,
    T: () => ak,
});
var c,
    s,
    l,
    I,
    R,
    u,
    A,
    N,
    T = a(505676),
    d = a(507690),
    f = a(572299),
    L = a(263449),
    p = a(946471),
    O = a(233517),
    h = a(822578),
    P = a(696486),
    C = a(988097),
    D = a(820754),
    g = a(899517),
    S = a(202811),
    m = a(370336),
    v = a(467510),
    y = a(101284),
    U = a(622916),
    G = a(394798),
    W = a(886115),
    b = a(617726),
    M = a(928541),
    w = a(14588),
    B = a(26506),
    Y = a(650093),
    H = a(501684),
    K = a(157079),
    k = a(469359),
    x = a(393523);
let F = g.n,
    V = "sentryReplaySession",
    j = "Unable to send Replay";
function X(t, e) {
    return null != t ? t : e();
}
function $(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let _ = t[r],
            n = t[r + 1];
        if (((r += 2), ("optionalAccess" === _ || "optionalCall" === _) && null == a)) return;
        "access" === _ || "optionalAccess" === _
            ? ((e = a), (a = n(a)))
            : ("call" === _ || "optionalCall" === _) && ((a = n((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
function q(t) {
    let e = $([t, "optionalAccess", (t) => t.host]);
    return $([e, "optionalAccess", (t) => t.shadowRoot]) === t;
}
function z(t) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(t);
}
function J(t) {
    try {
        var e;
        let a = t.rules || t.cssRules;
        return a
            ? ((e = Array.from(a, Q).join("")).includes(" background-clip: text;") &&
                  !e.includes(" -webkit-background-clip: text;") &&
                  (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
              e)
            : null;
    } catch (t) {
        return null;
    }
}
function Q(t) {
    let e;
    if ("styleSheet" in t)
        try {
            e =
                J(t.styleSheet) ||
                (function (t) {
                    let { cssText: e } = t;
                    if (e.split('"').length < 3) return e;
                    let a = ["@import", `url(${JSON.stringify(t.href)})`];
                    return (
                        "" === t.layerName ? a.push("layer") : t.layerName && a.push(`layer(${t.layerName})`),
                        t.supportsText && a.push(`supports(${t.supportsText})`),
                        t.media.length && a.push(t.media.mediaText),
                        a.join(" ") + ";"
                    );
                })(t);
        } catch (t) {}
    else if ("selectorText" in t && t.selectorText.includes(":"))
        return t.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
    return e || t.cssText;
}
((c = A || (A = {}))[(c.Document = 0)] = "Document"),
    (c[(c.DocumentType = 1)] = "DocumentType"),
    (c[(c.Element = 2)] = "Element"),
    (c[(c.Text = 3)] = "Text"),
    (c[(c.CDATA = 4)] = "CDATA"),
    (c[(c.Comment = 5)] = "Comment");
class Z {
    constructor() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(t) {
        return t
            ? X($([this, "access", (t) => t.getMeta, "call", (e) => e(t), "optionalAccess", (t) => t.id]), () => -1)
            : -1;
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null;
    }
    removeNodeFromMap(t) {
        let e = this.getId(t);
        this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach((t) => this.removeNodeFromMap(t));
    }
    has(t) {
        return this.idNodeMap.has(t);
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t);
    }
    add(t, e) {
        let a = e.id;
        this.idNodeMap.set(a, t), this.nodeMetaMap.set(t, e);
    }
    replace(t, e) {
        let a = this.getNode(t);
        if (a) {
            let t = this.nodeMetaMap.get(a);
            t && this.nodeMetaMap.set(e, t);
        }
        this.idNodeMap.set(t, e);
    }
    reset() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
}
function tt({ maskInputOptions: t, tagName: e, type: a }) {
    return (
        "OPTION" === e && (e = "SELECT"),
        !!(t[e.toLowerCase()] || (a && t[a]) || "password" === a || ("INPUT" === e && !a && t.text))
    );
}
function te({ isMasked: t, element: e, value: a, maskInputFn: r }) {
    let _ = a || "";
    return t ? (r && (_ = r(_, e)), "*".repeat(_.length)) : _;
}
function ta(t) {
    return t.toLowerCase();
}
function tr(t) {
    return t.toUpperCase();
}
let t_ = "__rrweb_original__";
function tn(t) {
    let e = t.type;
    return t.hasAttribute("data-rr-is-password") ? "password" : e ? ta(e) : null;
}
function to(t, e, a) {
    return "INPUT" === e && ("radio" === a || "checkbox" === a) ? t.getAttribute("value") || "" : t.value;
}
function ti(t, e) {
    let a;
    try {
        a = new URL(
            t,
            X(e, () => window.location.href),
        );
    } catch (t) {
        return null;
    }
    return X($([a.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", (t) => t[1]]), () => null);
}
let tE = {};
function tc(t) {
    let e = tE[t];
    if (e) return e;
    let a = window.document,
        r = window[t];
    if (a && "function" == typeof a.createElement)
        try {
            let e = a.createElement("iframe");
            (e.hidden = !0), a.head.appendChild(e);
            let _ = e.contentWindow;
            _ && _[t] && (r = _[t]), a.head.removeChild(e);
        } catch (t) {}
    return (tE[t] = r.bind(window));
}
function ts(...t) {
    return tc("setTimeout")(...t);
}
function tl(...t) {
    return tc("clearTimeout")(...t);
}
let tI = 1,
    tR = RegExp("[^a-z0-9-_:]");
function tu() {
    return tI++;
}
let tA = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    tN = /^(?:[a-z+]+:)?\/\//i,
    tT = /^www\..*/i,
    td = /^(data:)([^,]*),(.*)/i;
function tf(t, e) {
    return (t || "").replace(tA, (t, a, r, _, n, o) => {
        let i = r || n || o,
            E = a || _ || "";
        if (!i) return t;
        if (tN.test(i) || tT.test(i) || td.test(i)) return `url(${E}${i}${E})`;
        if ("/" === i[0])
            return `url(${E}${(e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0]).split("?")[0] + i}${E})`;
        let c = e.split("/"),
            s = i.split("/");
        for (let t of (c.pop(), s))
            if ("." === t) continue;
            else ".." === t ? c.pop() : c.push(t);
        return `url(${E}${c.join("/")}${E})`;
    });
}
let tL = /^[^ \t\n\r\u000c]+/,
    tp = /^[, \t\n\r\u000c]+/;
function tO(t, e) {
    if (!e || "" === e.trim()) return e;
    let a = t.createElement("a");
    return (a.href = e), a.href;
}
function th() {
    let t = document.createElement("a");
    return (t.href = ""), t.href;
}
function tP(t, e, a, r, _, n) {
    if (!r) return r;
    if ("src" === a || ("href" === a && ("use" !== e || "#" !== r[0])) || ("xlink:href" === a && "#" !== r[0]))
        return tO(t, r);
    if ("background" === a && ("table" === e || "td" === e || "th" === e)) return tO(t, r);
    if ("srcset" === a)
        return (function (t, e) {
            if ("" === e.trim()) return e;
            let a = 0;
            function r(t) {
                let r,
                    _ = t.exec(e.substring(a));
                return _ ? ((r = _[0]), (a += r.length), r) : "";
            }
            let _ = [];
            for (; r(tp), !(a >= e.length); ) {
                let n = r(tL);
                if ("," === n.slice(-1)) (n = tO(t, n.substring(0, n.length - 1))), _.push(n);
                else {
                    let r = "";
                    n = tO(t, n);
                    let o = !1;
                    for (;;) {
                        let t = e.charAt(a);
                        if ("" === t) {
                            _.push((n + r).trim());
                            break;
                        }
                        if (o) ")" === t && (o = !1);
                        else if ("," === t) {
                            (a += 1), _.push((n + r).trim());
                            break;
                        } else "(" === t && (o = !0);
                        (r += t), (a += 1);
                    }
                }
            }
            return _.join(", ");
        })(t, r);
    if ("style" === a) return tf(r, th());
    else if ("object" === e && "data" === a) return tO(t, r);
    return "function" == typeof n ? n(a, r, _) : r;
}
function tC(t, e, a) {
    return ("video" === t || "audio" === t) && "autoplay" === e;
}
function tD(t, e, a = 1 / 0, r = 0) {
    return !t || t.nodeType !== t.ELEMENT_NODE || r > a ? -1 : e(t) ? r : tD(t.parentNode, e, a, r + 1);
}
function tg(t, e) {
    return (a) => {
        if (null === a) return !1;
        try {
            if (t) {
                if ("string" == typeof t) {
                    if (a.matches(`.${t}`)) return !0;
                } else if (
                    (function (t, e) {
                        for (let a = t.classList.length; a--; ) {
                            let r = t.classList[a];
                            if (e.test(r)) return !0;
                        }
                        return !1;
                    })(a, t)
                )
                    return !0;
            }
            if (e && a.matches(e)) return !0;
            return !1;
        } catch (t) {
            return !1;
        }
    };
}
function tS(t, e, a, r, _, n) {
    try {
        let o = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
        if (null === o) return !1;
        if ("INPUT" === o.tagName) {
            let t = o.getAttribute("autocomplete");
            if (
                [
                    "current-password",
                    "new-password",
                    "cc-number",
                    "cc-exp",
                    "cc-exp-month",
                    "cc-exp-year",
                    "cc-csc",
                ].includes(t)
            )
                return !0;
        }
        let i = -1,
            E = -1;
        if (n) {
            if ((E = tD(o, tg(r, _))) < 0) return !0;
            i = tD(o, tg(e, a), E >= 0 ? E : 1 / 0);
        } else {
            if ((i = tD(o, tg(e, a))) < 0) return !1;
            E = tD(o, tg(r, _), i >= 0 ? i : 1 / 0);
        }
        return i >= 0 ? !(E >= 0) || i <= E : !(E >= 0) && !!n;
    } catch (t) {}
    return !!n;
}
function tm(t) {
    return null == t ? "" : t.toLowerCase();
}
function tv(t, e) {
    let a,
        {
            doc: n,
            mirror: o,
            blockClass: i,
            blockSelector: E,
            unblockSelector: c,
            maskAllText: s,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: R,
            unmaskTextSelector: u,
            skipChild: N = !1,
            inlineStylesheet: T = !0,
            maskInputOptions: d = {},
            maskAttributeFn: f,
            maskTextFn: L,
            maskInputFn: p,
            slimDOMOptions: O,
            dataURLOptions: h = {},
            inlineImages: P = !1,
            recordCanvas: C = !1,
            onSerialize: D,
            onIframeLoad: g,
            iframeLoadTimeout: S = 5000,
            onStylesheetLoad: m,
            stylesheetLoadTimeout: v = 5000,
            keepIframeSrcFn: y = () => !1,
            newlyAddedElement: U = !1,
        } = e,
        { preserveWhiteSpace: G = !0 } = e,
        W = (function (t, e) {
            let {
                    doc: a,
                    mirror: n,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: E,
                    maskAllText: c,
                    maskAttributeFn: s,
                    maskTextClass: l,
                    unmaskTextClass: I,
                    maskTextSelector: R,
                    unmaskTextSelector: u,
                    inlineStylesheet: N,
                    maskInputOptions: T = {},
                    maskTextFn: d,
                    maskInputFn: f,
                    dataURLOptions: L = {},
                    inlineImages: p,
                    recordCanvas: O,
                    keepIframeSrcFn: h,
                    newlyAddedElement: P = !1,
                } = e,
                C = (function (t, e) {
                    if (!e.hasNode(t)) return;
                    let a = e.getId(t);
                    return 1 === a ? void 0 : a;
                })(a, n);
            switch (t.nodeType) {
                case t.DOCUMENT_NODE:
                    if ("CSS1Compat" !== t.compatMode)
                        return {
                            type: A.Document,
                            childNodes: [],
                            compatMode: t.compatMode,
                        };
                    return {
                        type: A.Document,
                        childNodes: [],
                    };
                case t.DOCUMENT_TYPE_NODE:
                    return {
                        type: A.DocumentType,
                        name: t.name,
                        publicId: t.publicId,
                        systemId: t.systemId,
                        rootId: C,
                    };
                case t.ELEMENT_NODE:
                    return (function (t, e) {
                        let a,
                            {
                                doc: n,
                                blockClass: o,
                                blockSelector: i,
                                unblockSelector: E,
                                inlineStylesheet: c,
                                maskInputOptions: s = {},
                                maskAttributeFn: l,
                                maskInputFn: I,
                                dataURLOptions: R = {},
                                inlineImages: u,
                                recordCanvas: N,
                                keepIframeSrcFn: T,
                                newlyAddedElement: d = !1,
                                rootId: f,
                                maskAllText: L,
                                maskTextClass: p,
                                unmaskTextClass: O,
                                maskTextSelector: h,
                                unmaskTextSelector: P,
                            } = e,
                            C = (function (t, e, a, r) {
                                try {
                                    if (r && t.matches(r)) return !1;
                                    if ("string" == typeof e) {
                                        if (t.classList.contains(e)) return !0;
                                    } else
                                        for (let a = t.classList.length; a--; ) {
                                            let r = t.classList[a];
                                            if (e.test(r)) return !0;
                                        }
                                    if (a) return t.matches(a);
                                } catch (t) {}
                                return !1;
                            })(t, o, i, E),
                            D = (function (t) {
                                if (t instanceof HTMLFormElement) return "form";
                                let e = ta(t.tagName);
                                return tR.test(e) ? "div" : e;
                            })(t),
                            g = {},
                            S = t.attributes.length;
                        for (let e = 0; e < S; e++) {
                            let a = t.attributes[e];
                            a.name && !tC(D, a.name, a.value) && (g[a.name] = tP(n, D, ta(a.name), a.value, t, l));
                        }
                        if ("link" === D && c) {
                            let e = Array.from(n.styleSheets).find((e) => e.href === t.href),
                                a = null;
                            e && (a = J(e)), a && (delete g.rel, delete g.href, (g._cssText = tf(a, e.href)));
                        }
                        if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                            let e = J(t.sheet);
                            e && (g._cssText = tf(e, th()));
                        }
                        if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
                            let e = tn(t),
                                a = to(t, tr(D), e),
                                r = t.checked;
                            if ("submit" !== e && "button" !== e && a) {
                                let r = tS(
                                    t,
                                    p,
                                    h,
                                    O,
                                    P,
                                    tt({
                                        type: e,
                                        tagName: tr(D),
                                        maskInputOptions: s,
                                    }),
                                );
                                g.value = te({
                                    isMasked: r,
                                    element: t,
                                    value: a,
                                    maskInputFn: I,
                                });
                            }
                            r && (g.checked = r);
                        }
                        if (
                            ("option" === D && (t.selected && !s.select ? (g.selected = !0) : delete g.selected),
                            "canvas" === D && N)
                        ) {
                            if ("2d" === t.__context)
                                !(function (t) {
                                    let e = t.getContext("2d");
                                    if (!e) return !0;
                                    for (let a = 0; a < t.width; a += 50)
                                        for (let r = 0; r < t.height; r += 50) {
                                            let _ = e.getImageData;
                                            if (
                                                new Uint32Array(
                                                    (t_ in _ ? _[t_] : _).call(
                                                        e,
                                                        a,
                                                        r,
                                                        Math.min(50, t.width - a),
                                                        Math.min(50, t.height - r),
                                                    ).data.buffer,
                                                ).some((t) => 0 !== t)
                                            )
                                                return !1;
                                        }
                                    return !0;
                                })(t) && (g.rr_dataURL = t.toDataURL(R.type, R.quality));
                            else if (!("__context" in t)) {
                                let e = t.toDataURL(R.type, R.quality),
                                    a = document.createElement("canvas");
                                (a.width = t.width),
                                    (a.height = t.height),
                                    e !== a.toDataURL(R.type, R.quality) && (g.rr_dataURL = e);
                            }
                        }
                        if ("img" === D && u) {
                            r || (_ = (r = n.createElement("canvas")).getContext("2d"));
                            let e = t.crossOrigin;
                            t.crossOrigin = "anonymous";
                            let a = () => {
                                t.removeEventListener("load", a);
                                try {
                                    (r.width = t.naturalWidth),
                                        (r.height = t.naturalHeight),
                                        _.drawImage(t, 0, 0),
                                        (g.rr_dataURL = r.toDataURL(R.type, R.quality));
                                } catch (e) {
                                    console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`);
                                }
                                e ? (g.crossOrigin = e) : t.removeAttribute("crossorigin");
                            };
                            t.complete && 0 !== t.naturalWidth ? a() : t.addEventListener("load", a);
                        }
                        if (
                            (("audio" === D || "video" === D) &&
                                ((g.rr_mediaState = t.paused ? "paused" : "played"),
                                (g.rr_mediaCurrentTime = t.currentTime)),
                            !d &&
                                (t.scrollLeft && (g.rr_scrollLeft = t.scrollLeft),
                                t.scrollTop && (g.rr_scrollTop = t.scrollTop)),
                            C)
                        ) {
                            let { width: e, height: a } = t.getBoundingClientRect();
                            g = {
                                class: g.class,
                                rr_width: `${e}px`,
                                rr_height: `${a}px`,
                            };
                        }
                        "iframe" !== D || T(g.src) || (C || t.contentDocument || (g.rr_src = g.src), delete g.src);
                        try {
                            customElements.get(D) && (a = !0);
                        } catch (t) {}
                        return {
                            type: A.Element,
                            tagName: D,
                            attributes: g,
                            childNodes: [],
                            isSVG: !!("svg" === t.tagName || t.ownerSVGElement) || void 0,
                            needBlock: C,
                            rootId: f,
                            isCustom: a,
                        };
                    })(t, {
                        doc: a,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: E,
                        inlineStylesheet: N,
                        maskAttributeFn: s,
                        maskInputOptions: T,
                        maskInputFn: f,
                        dataURLOptions: L,
                        inlineImages: p,
                        recordCanvas: O,
                        keepIframeSrcFn: h,
                        newlyAddedElement: P,
                        rootId: C,
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: I,
                        maskTextSelector: R,
                        unmaskTextSelector: u,
                    });
                case t.TEXT_NODE:
                    return (function (t, e) {
                        let {
                                maskAllText: a,
                                maskTextClass: r,
                                unmaskTextClass: _,
                                maskTextSelector: n,
                                unmaskTextSelector: o,
                                maskTextFn: i,
                                maskInputOptions: E,
                                maskInputFn: c,
                                rootId: s,
                            } = e,
                            l = t.parentNode && t.parentNode.tagName,
                            I = t.textContent,
                            R = "STYLE" === l || void 0,
                            u = "SCRIPT" === l || void 0,
                            N = "TEXTAREA" === l || void 0;
                        if (R && I) {
                            try {
                                t.nextSibling ||
                                    t.previousSibling ||
                                    ($([
                                        t,
                                        "access",
                                        (t) => t.parentNode,
                                        "access",
                                        (t) => t.sheet,
                                        "optionalAccess",
                                        (t) => t.cssRules,
                                    ]) &&
                                        (I = J(t.parentNode.sheet)));
                            } catch (e) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t);
                            }
                            I = tf(I, th());
                        }
                        u && (I = "SCRIPT_PLACEHOLDER");
                        let T = tS(t, r, n, _, o, a);
                        return (
                            R || u || N || !I || !T || (I = i ? i(I, t.parentElement) : I.replace(/[\S]/g, "*")),
                            N && I && (E.textarea || T) && (I = c ? c(I, t.parentNode) : I.replace(/[\S]/g, "*")),
                            "OPTION" === l &&
                                I &&
                                (I = te({
                                    isMasked: tS(
                                        t,
                                        r,
                                        n,
                                        _,
                                        o,
                                        tt({
                                            type: null,
                                            tagName: l,
                                            maskInputOptions: E,
                                        }),
                                    ),
                                    element: t,
                                    value: I,
                                    maskInputFn: c,
                                })),
                            {
                                type: A.Text,
                                textContent: I || "",
                                isStyle: R,
                                rootId: s,
                            }
                        );
                    })(t, {
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: I,
                        maskTextSelector: R,
                        unmaskTextSelector: u,
                        maskTextFn: d,
                        maskInputOptions: T,
                        maskInputFn: f,
                        rootId: C,
                    });
                case t.CDATA_SECTION_NODE:
                    return {
                        type: A.CDATA,
                        textContent: "",
                        rootId: C,
                    };
                case t.COMMENT_NODE:
                    return {
                        type: A.Comment,
                        textContent: t.textContent || "",
                        rootId: C,
                    };
                default:
                    return !1;
            }
        })(t, {
            doc: n,
            mirror: o,
            blockClass: i,
            blockSelector: E,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: R,
            unmaskTextSelector: u,
            inlineStylesheet: T,
            maskInputOptions: d,
            maskAttributeFn: f,
            maskTextFn: L,
            maskInputFn: p,
            dataURLOptions: h,
            inlineImages: P,
            recordCanvas: C,
            keepIframeSrcFn: y,
            newlyAddedElement: U,
        });
    if (!W) return console.warn(t, "not serialized"), null;
    a = o.hasNode(t)
        ? o.getId(t)
        : !(function (t, e) {
                if (e.comment && t.type === A.Comment) return !0;
                if (t.type === A.Element) {
                    if (
                        e.script &&
                        ("script" === t.tagName ||
                            ("link" === t.tagName &&
                                ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) &&
                                "script" === t.attributes.as) ||
                            ("link" === t.tagName &&
                                "prefetch" === t.attributes.rel &&
                                "string" == typeof t.attributes.href &&
                                "js" === ti(t.attributes.href)))
                    )
                        return !0;
                    else if (
                        e.headFavicon &&
                        (("link" === t.tagName && "shortcut icon" === t.attributes.rel) ||
                            ("meta" === t.tagName &&
                                (tm(t.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                    "application-name" === tm(t.attributes.name) ||
                                    "icon" === tm(t.attributes.rel) ||
                                    "apple-touch-icon" === tm(t.attributes.rel) ||
                                    "shortcut icon" === tm(t.attributes.rel))))
                    )
                        return !0;
                    else if ("meta" === t.tagName) {
                        if (e.headMetaDescKeywords && tm(t.attributes.name).match(/^description|keywords$/)) return !0;
                        else if (
                            e.headMetaSocial &&
                            (tm(t.attributes.property).match(/^(og|twitter|fb):/) ||
                                tm(t.attributes.name).match(/^(og|twitter):/) ||
                                "pinterest" === tm(t.attributes.name))
                        )
                            return !0;
                        else if (
                            e.headMetaRobots &&
                            ("robots" === tm(t.attributes.name) ||
                                "googlebot" === tm(t.attributes.name) ||
                                "bingbot" === tm(t.attributes.name))
                        )
                            return !0;
                        else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                        else if (
                            e.headMetaAuthorship &&
                            ("author" === tm(t.attributes.name) ||
                                "generator" === tm(t.attributes.name) ||
                                "framework" === tm(t.attributes.name) ||
                                "publisher" === tm(t.attributes.name) ||
                                "progid" === tm(t.attributes.name) ||
                                tm(t.attributes.property).match(/^article:/) ||
                                tm(t.attributes.property).match(/^product:/))
                        )
                            return !0;
                        else if (
                            e.headMetaVerification &&
                            ("google-site-verification" === tm(t.attributes.name) ||
                                "yandex-verification" === tm(t.attributes.name) ||
                                "csrf-token" === tm(t.attributes.name) ||
                                "p:domain_verify" === tm(t.attributes.name) ||
                                "verify-v1" === tm(t.attributes.name) ||
                                "verification" === tm(t.attributes.name) ||
                                "shopify-checkout-api-token" === tm(t.attributes.name))
                        )
                            return !0;
                    }
                }
                return !1;
            })(W, O) &&
            (G || W.type !== A.Text || W.isStyle || W.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? tu()
          : -2;
    let b = Object.assign(W, { id: a });
    if ((o.add(t, b), -2 === a)) return null;
    D && D(t);
    let M = !N;
    if (b.type === A.Element) {
        (M = M && !b.needBlock), delete b.needBlock;
        let e = t.shadowRoot;
        e && z(e) && (b.isShadowHost = !0);
    }
    if ((b.type === A.Document || b.type === A.Element) && M) {
        O.headWhitespace && b.type === A.Element && "head" === b.tagName && (G = !1);
        let e = {
            doc: n,
            mirror: o,
            blockClass: i,
            blockSelector: E,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: R,
            unmaskTextSelector: u,
            skipChild: N,
            inlineStylesheet: T,
            maskInputOptions: d,
            maskAttributeFn: f,
            maskTextFn: L,
            maskInputFn: p,
            slimDOMOptions: O,
            dataURLOptions: h,
            inlineImages: P,
            recordCanvas: C,
            preserveWhiteSpace: G,
            onSerialize: D,
            onIframeLoad: g,
            iframeLoadTimeout: S,
            onStylesheetLoad: m,
            stylesheetLoadTimeout: v,
            keepIframeSrcFn: y,
        };
        for (let a of Array.from(t.childNodes)) {
            let t = tv(a, e);
            t && b.childNodes.push(t);
        }
        if (t.nodeType === t.ELEMENT_NODE && t.shadowRoot)
            for (let a of Array.from(t.shadowRoot.childNodes)) {
                let r = tv(a, e);
                r && (z(t.shadowRoot) && (r.isShadow = !0), b.childNodes.push(r));
            }
    }
    return (
        t.parentNode && q(t.parentNode) && z(t.parentNode) && (b.isShadow = !0),
        b.type === A.Element &&
            "iframe" === b.tagName &&
            (function (t, e, a) {
                let r,
                    _ = t.contentWindow;
                if (!_) return;
                let n = !1;
                try {
                    r = _.document.readyState;
                } catch (t) {
                    return;
                }
                if ("complete" !== r) {
                    let r = ts(() => {
                        n || (e(), (n = !0));
                    }, a);
                    t.addEventListener("load", () => {
                        tl(r), (n = !0), e();
                    });
                    return;
                }
                let o = "about:blank";
                if (_.location.href !== o || t.src === o || "" === t.src)
                    return ts(e, 0), t.addEventListener("load", e);
                t.addEventListener("load", e);
            })(
                t,
                () => {
                    let e = t.contentDocument;
                    if (e && g) {
                        let a = tv(e, {
                            doc: e,
                            mirror: o,
                            blockClass: i,
                            blockSelector: E,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: I,
                            maskTextSelector: R,
                            unmaskTextSelector: u,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: d,
                            maskAttributeFn: f,
                            maskTextFn: L,
                            maskInputFn: p,
                            slimDOMOptions: O,
                            dataURLOptions: h,
                            inlineImages: P,
                            recordCanvas: C,
                            preserveWhiteSpace: G,
                            onSerialize: D,
                            onIframeLoad: g,
                            iframeLoadTimeout: S,
                            onStylesheetLoad: m,
                            stylesheetLoadTimeout: v,
                            keepIframeSrcFn: y,
                        });
                        a && g(t, a);
                    }
                },
                S,
            ),
        b.type === A.Element &&
            "link" === b.tagName &&
            "string" == typeof b.attributes.rel &&
            ("stylesheet" === b.attributes.rel ||
                ("preload" === b.attributes.rel &&
                    "string" == typeof b.attributes.href &&
                    "css" === ti(b.attributes.href))) &&
            (function (t, e, a) {
                let r,
                    _ = !1;
                try {
                    r = t.sheet;
                } catch (t) {
                    return;
                }
                if (r) return;
                let n = ts(() => {
                    _ || (e(), (_ = !0));
                }, a);
                t.addEventListener("load", () => {
                    tl(n), (_ = !0), e();
                });
            })(
                t,
                () => {
                    if (m) {
                        let e = tv(t, {
                            doc: n,
                            mirror: o,
                            blockClass: i,
                            blockSelector: E,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: I,
                            maskTextSelector: R,
                            unmaskTextSelector: u,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: d,
                            maskAttributeFn: f,
                            maskTextFn: L,
                            maskInputFn: p,
                            slimDOMOptions: O,
                            dataURLOptions: h,
                            inlineImages: P,
                            recordCanvas: C,
                            preserveWhiteSpace: G,
                            onSerialize: D,
                            onIframeLoad: g,
                            iframeLoadTimeout: S,
                            onStylesheetLoad: m,
                            stylesheetLoadTimeout: v,
                            keepIframeSrcFn: y,
                        });
                        e && m(t, e);
                    }
                },
                v,
            ),
        b
    );
}
function ty(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let _ = t[r],
            n = t[r + 1];
        if (((r += 2), ("optionalAccess" === _ || "optionalCall" === _) && null == a)) return;
        "access" === _ || "optionalAccess" === _
            ? ((e = a), (a = n(a)))
            : ("call" === _ || "optionalCall" === _) && ((a = n((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
function tU(t, e, a = document) {
    let r = {
        capture: !0,
        passive: !0,
    };
    return a.addEventListener(t, e, r), () => a.removeEventListener(t, e, r);
}
let tG =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    tW = {
        map: {},
        getId: () => (console.error(tG), -1),
        getNode: () => (console.error(tG), null),
        removeNodeFromMap() {
            console.error(tG);
        },
        has: () => (console.error(tG), !1),
        reset() {
            console.error(tG);
        },
    };
function tb(t, e, a = {}) {
    let r = null,
        _ = 0;
    return function (...n) {
        let o = Date.now();
        _ || !1 !== a.leading || (_ = o);
        let i = e - (o - _),
            E = this;
        i <= 0 || i > e
            ? (r &&
                  ((function (...t) {
                      tQ("clearTimeout")(...t);
                  })(r),
                  (r = null)),
              (_ = o),
              t.apply(E, n))
            : r ||
              !1 === a.trailing ||
              (r = tZ(() => {
                  (_ = !1 === a.leading ? 0 : Date.now()), (r = null), t.apply(E, n);
              }, i));
    };
}
function tM(t, e, a) {
    try {
        if (!(e in t)) return () => {};
        let r = t[e],
            _ = a(r);
        return (
            "function" == typeof _ &&
                ((_.prototype = _.prototype || {}),
                Object.defineProperties(_, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r,
                    },
                })),
            (t[e] = _),
            () => {
                t[e] = r;
            }
        );
    } catch (t) {
        return () => {};
    }
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (tW = new Proxy(tW, { get: (t, e, a) => ("map" === e && console.error(tG), Reflect.get(t, e, a)) }));
let tw = Date.now;
function tB(t) {
    let e = t.document;
    return {
        left: e.scrollingElement
            ? e.scrollingElement.scrollLeft
            : void 0 !== t.pageXOffset
              ? t.pageXOffset
              : ty([e, "optionalAccess", (t) => t.documentElement, "access", (t) => t.scrollLeft]) ||
                ty([
                    e,
                    "optionalAccess",
                    (t) => t.body,
                    "optionalAccess",
                    (t) => t.parentElement,
                    "optionalAccess",
                    (t) => t.scrollLeft,
                ]) ||
                ty([e, "optionalAccess", (t) => t.body, "optionalAccess", (t) => t.scrollLeft]) ||
                0,
        top: e.scrollingElement
            ? e.scrollingElement.scrollTop
            : void 0 !== t.pageYOffset
              ? t.pageYOffset
              : ty([e, "optionalAccess", (t) => t.documentElement, "access", (t) => t.scrollTop]) ||
                ty([
                    e,
                    "optionalAccess",
                    (t) => t.body,
                    "optionalAccess",
                    (t) => t.parentElement,
                    "optionalAccess",
                    (t) => t.scrollTop,
                ]) ||
                ty([e, "optionalAccess", (t) => t.body, "optionalAccess", (t) => t.scrollTop]) ||
                0,
    };
}
function tY() {
    return (
        window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight)
    );
}
function tH() {
    return (
        window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth)
    );
}
function tK(t) {
    return t ? (t.nodeType === t.ELEMENT_NODE ? t : t.parentElement) : null;
}
function tk(t, e, a, r, _) {
    if (!t) return !1;
    let n = tK(t);
    if (!n) return !1;
    let o = tg(e, a);
    if (!_) {
        let t = r && n.matches(r);
        return o(n) && !t;
    }
    let i = tD(n, o),
        E = -1;
    return !(i < 0) && (r && (E = tD(n, tg(null, r))), (i > -1 && E < 0) || i < E);
}
function tx(t, e) {
    return -2 === e.getId(t);
}
function tF(t) {
    return !!t.changedTouches;
}
function tV(t, e) {
    return !!("IFRAME" === t.nodeName && e.getMeta(t));
}
function tj(t, e) {
    return !!(
        "LINK" === t.nodeName &&
        t.nodeType === t.ELEMENT_NODE &&
        t.getAttribute &&
        "stylesheet" === t.getAttribute("rel") &&
        e.getMeta(t)
    );
}
function tX(t) {
    return !!ty([t, "optionalAccess", (t) => t.shadowRoot]);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (tw = () => new Date().getTime());
class t$ {
    constructor() {
        (this.id = 1), (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map());
    }
    getId(t) {
        return (0, T.h)(this.styleIDMap.get(t), () => -1);
    }
    has(t) {
        return this.styleIDMap.has(t);
    }
    add(t, e) {
        let a;
        return this.has(t)
            ? this.getId(t)
            : ((a = void 0 === e ? this.id++ : e), this.styleIDMap.set(t, a), this.idStyleMap.set(a, t), a);
    }
    getStyle(t) {
        return this.idStyleMap.get(t) || null;
    }
    reset() {
        (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1);
    }
    generateId() {
        return this.id++;
    }
}
function tq(t) {
    let e = null;
    return (
        ty([t, "access", (t) => t.getRootNode, "optionalCall", (t) => t(), "optionalAccess", (t) => t.nodeType]) ===
            Node.DOCUMENT_FRAGMENT_NODE &&
            t.getRootNode().host &&
            (e = t.getRootNode().host),
        e
    );
}
function tz(t) {
    let e = t.ownerDocument;
    return (
        !!e &&
        (e.contains(t) ||
            (function (t) {
                let e = t.ownerDocument;
                if (!e) return !1;
                let a = (function (t) {
                    let e,
                        a = t;
                    for (; (e = tq(a)); ) a = e;
                    return a;
                })(t);
                return e.contains(a);
            })(t))
    );
}
let tJ = {};
function tQ(t) {
    let e = tJ[t];
    if (e) return e;
    let a = window.document,
        r = window[t];
    if (a && "function" == typeof a.createElement)
        try {
            let e = a.createElement("iframe");
            (e.hidden = !0), a.head.appendChild(e);
            let _ = e.contentWindow;
            _ && _[t] && (r = _[t]), a.head.removeChild(e);
        } catch (t) {}
    return (tJ[t] = r.bind(window));
}
function tZ(...t) {
    return tQ("setTimeout")(...t);
}
var t0 =
        (((s = t0 || {})[(s.DomContentLoaded = 0)] = "DomContentLoaded"),
        (s[(s.Load = 1)] = "Load"),
        (s[(s.FullSnapshot = 2)] = "FullSnapshot"),
        (s[(s.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
        (s[(s.Meta = 4)] = "Meta"),
        (s[(s.Custom = 5)] = "Custom"),
        (s[(s.Plugin = 6)] = "Plugin"),
        s),
    t1 =
        (((l = t1 || {})[(l.Mutation = 0)] = "Mutation"),
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
    t2 =
        (((I = t2 || {})[(I.MouseUp = 0)] = "MouseUp"),
        (I[(I.MouseDown = 1)] = "MouseDown"),
        (I[(I.Click = 2)] = "Click"),
        (I[(I.ContextMenu = 3)] = "ContextMenu"),
        (I[(I.DblClick = 4)] = "DblClick"),
        (I[(I.Focus = 5)] = "Focus"),
        (I[(I.Blur = 6)] = "Blur"),
        (I[(I.TouchStart = 7)] = "TouchStart"),
        (I[(I.TouchMove_Departed = 8)] = "TouchMove_Departed"),
        (I[(I.TouchEnd = 9)] = "TouchEnd"),
        (I[(I.TouchCancel = 10)] = "TouchCancel"),
        I),
    t3 = (((R = t3 || {})[(R.Mouse = 0)] = "Mouse"), (R[(R.Pen = 1)] = "Pen"), (R[(R.Touch = 2)] = "Touch"), R);
class t6 {
    constructor() {
        (this.length = 0), (this.head = null), (this.tail = null);
    }
    get(t) {
        if (t >= this.length) throw Error("Position outside of list range");
        let e = this.head;
        for (let a = 0; a < t; a++)
            e =
                (function (t) {
                    let e,
                        a = t[0],
                        r = 1;
                    for (; r < t.length; ) {
                        let _ = t[r],
                            n = t[r + 1];
                        if (((r += 2), ("optionalAccess" === _ || "optionalCall" === _) && null == a)) return;
                        "access" === _ || "optionalAccess" === _
                            ? ((e = a), (a = n(a)))
                            : ("call" === _ || "optionalCall" === _) &&
                              ((a = n((...t) => a.call(e, ...t))), (e = void 0));
                    }
                    return a;
                })([e, "optionalAccess", (t) => t.next]) || null;
        return e;
    }
    addNode(t) {
        let e = {
            value: t,
            previous: null,
            next: null,
        };
        if (((t.__ln = e), t.previousSibling && "__ln" in t.previousSibling)) {
            let a = t.previousSibling.__ln.next;
            (e.next = a),
                (e.previous = t.previousSibling.__ln),
                (t.previousSibling.__ln.next = e),
                a && (a.previous = e);
        } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
            let a = t.nextSibling.__ln.previous;
            (e.previous = a), (e.next = t.nextSibling.__ln), (t.nextSibling.__ln.previous = e), a && (a.next = e);
        } else this.head && (this.head.previous = e), (e.next = this.head), (this.head = e);
        null === e.next && (this.tail = e), this.length++;
    }
    removeNode(t) {
        let e = t.__ln;
        this.head &&
            (e.previous
                ? ((e.previous.next = e.next), e.next ? (e.next.previous = e.previous) : (this.tail = e.previous))
                : ((this.head = e.next), this.head ? (this.head.previous = null) : (this.tail = null)),
            t.__ln && delete t.__ln,
            this.length--);
    }
}
let t4 = (t, e) => `${t}@${e}`;
class t5 {
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
            (this.processMutations = (t) => {
                t.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
                if (this.frozen || this.locked) return;
                let t = [],
                    e = new Set(),
                    a = new t6(),
                    r = (t) => {
                        let e = t,
                            a = -2;
                        for (; -2 === a; ) a = (e = e && e.nextSibling) && this.mirror.getId(e);
                        return a;
                    },
                    _ = (_) => {
                        if (!_.parentNode || !tz(_)) return;
                        let n = q(_.parentNode) ? this.mirror.getId(tq(_)) : this.mirror.getId(_.parentNode),
                            o = r(_);
                        if (-1 === n || -1 === o) return a.addNode(_);
                        let i = tv(_, {
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
                            onSerialize: (t) => {
                                tV(t, this.mirror) && this.iframeManager.addIframe(t),
                                    tj(t, this.mirror) && this.stylesheetManager.trackLinkElement(t),
                                    tX(_) && this.shadowDomManager.addShadowRoot(_.shadowRoot, this.doc);
                            },
                            onIframeLoad: (t, e) => {
                                this.iframeManager.attachIframe(t, e),
                                    t.contentWindow && this.canvasManager.addWindow(t.contentWindow),
                                    this.shadowDomManager.observeAttachShadow(t);
                            },
                            onStylesheetLoad: (t, e) => {
                                this.stylesheetManager.attachLinkElement(t, e);
                            },
                        });
                        i &&
                            (t.push({
                                parentId: n,
                                nextId: o,
                                node: i,
                            }),
                            e.add(i.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let t of this.movedSet)
                    (!t7(this.removes, t, this.mirror) || this.movedSet.has(t.parentNode)) && _(t);
                for (let t of this.addedSet)
                    t9(this.droppedSet, t) || t7(this.removes, t, this.mirror)
                        ? t9(this.movedSet, t)
                            ? _(t)
                            : this.droppedSet.add(t)
                        : _(t);
                let n = null;
                for (; a.length; ) {
                    let t = null;
                    if (n) {
                        let e = this.mirror.getId(n.value.parentNode),
                            a = r(n.value);
                        -1 !== e && -1 !== a && (t = n);
                    }
                    if (!t) {
                        let e = a.tail;
                        for (; e; ) {
                            let a = e;
                            if (((e = e.previous), a)) {
                                let e = this.mirror.getId(a.value.parentNode);
                                if (-1 === r(a.value)) continue;
                                if (-1 !== e) {
                                    t = a;
                                    break;
                                }
                                {
                                    let e = a.value;
                                    if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let r = e.parentNode.host;
                                        if (-1 !== this.mirror.getId(r)) {
                                            t = a;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!t) {
                        for (; a.head; ) a.removeNode(a.head.value);
                        break;
                    }
                    (n = t.previous), a.removeNode(t.value), _(t.value);
                }
                let o = {
                    texts: this.texts
                        .map((t) => ({
                            id: this.mirror.getId(t.node),
                            value: t.value,
                        }))
                        .filter((t) => !e.has(t.id))
                        .filter((t) => this.mirror.has(t.id)),
                    attributes: this.attributes
                        .map((t) => {
                            let { attributes: e } = t;
                            if ("string" == typeof e.style) {
                                let a = JSON.stringify(t.styleDiff),
                                    r = JSON.stringify(t._unchangedStyles);
                                a.length < e.style.length &&
                                    (a + r).split("var(").length === e.style.split("var(").length &&
                                    (e.style = t.styleDiff);
                            }
                            return {
                                id: this.mirror.getId(t.node),
                                attributes: e,
                            };
                        })
                        .filter((t) => !e.has(t.id))
                        .filter((t) => this.mirror.has(t.id)),
                    removes: this.removes,
                    adds: t,
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
            (this.processMutation = (t) => {
                if (!tx(t.target, this.mirror))
                    switch (t.type) {
                        case "characterData": {
                            let e = t.target.textContent;
                            tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                e === t.oldValue ||
                                this.texts.push({
                                    value:
                                        tS(
                                            t.target,
                                            this.maskTextClass,
                                            this.maskTextSelector,
                                            this.unmaskTextClass,
                                            this.unmaskTextSelector,
                                            this.maskAllText,
                                        ) && e
                                            ? this.maskTextFn
                                                ? this.maskTextFn(e, tK(t.target))
                                                : e.replace(/[\S]/g, "*")
                                            : e,
                                    node: t.target,
                                });
                            break;
                        }
                        case "attributes": {
                            let e = t.target,
                                a = t.attributeName,
                                r = t.target.getAttribute(a);
                            if ("value" === a) {
                                let a = tn(e),
                                    _ = e.tagName;
                                r = to(e, _, a);
                                let n = tt({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: _,
                                    type: a,
                                });
                                r = te({
                                    isMasked: tS(
                                        t.target,
                                        this.maskTextClass,
                                        this.maskTextSelector,
                                        this.unmaskTextClass,
                                        this.unmaskTextSelector,
                                        n,
                                    ),
                                    element: e,
                                    value: r,
                                    maskInputFn: this.maskInputFn,
                                });
                            }
                            if (
                                tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                r === t.oldValue
                            )
                                return;
                            let _ = this.attributeMap.get(t.target);
                            if ("IFRAME" === e.tagName && "src" === a && !this.keepIframeSrcFn(r))
                                if (e.contentDocument) return;
                                else a = "rr_src";
                            if (
                                (_ ||
                                    ((_ = {
                                        node: t.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {},
                                    }),
                                    this.attributes.push(_),
                                    this.attributeMap.set(t.target, _)),
                                "type" === a &&
                                    "INPUT" === e.tagName &&
                                    "password" === (t.oldValue || "").toLowerCase() &&
                                    e.setAttribute("data-rr-is-password", "true"),
                                !tC(e.tagName, a) &&
                                    ((_.attributes[a] = tP(this.doc, ta(e.tagName), ta(a), r, e, this.maskAttributeFn)),
                                    "style" === a))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (t) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let a = this.unattachedDoc.createElement("span");
                                for (let r of (t.oldValue && a.setAttribute("style", t.oldValue),
                                Array.from(e.style))) {
                                    let t = e.style.getPropertyValue(r),
                                        n = e.style.getPropertyPriority(r);
                                    t !== a.style.getPropertyValue(r) || n !== a.style.getPropertyPriority(r)
                                        ? "" === n
                                            ? (_.styleDiff[r] = t)
                                            : (_.styleDiff[r] = [t, n])
                                        : (_._unchangedStyles[r] = [t, n]);
                                }
                                for (let t of Array.from(a.style))
                                    "" === e.style.getPropertyValue(t) && (_.styleDiff[t] = !1);
                            }
                            break;
                        }
                        case "childList":
                            if (tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            t.addedNodes.forEach((e) => this.genAdds(e, t.target)),
                                t.removedNodes.forEach((e) => {
                                    let a = this.mirror.getId(e),
                                        r = q(t.target)
                                            ? this.mirror.getId(t.target.host)
                                            : this.mirror.getId(t.target);
                                    tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                        tx(e, this.mirror) ||
                                        -1 === this.mirror.getId(e) ||
                                        (this.addedSet.has(e)
                                            ? (t8(this.addedSet, e), this.droppedSet.add(e))
                                            : (this.addedSet.has(t.target) && -1 === a) ||
                                              (function t(e, a) {
                                                  if (q(e)) return !1;
                                                  let r = a.getId(e);
                                                  return (
                                                      !a.has(r) ||
                                                      ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
                                                          (!e.parentNode || t(e.parentNode, a)))
                                                  );
                                              })(t.target, this.mirror) ||
                                              (this.movedSet.has(e) && this.movedMap[t4(a, r)]
                                                  ? t8(this.movedSet, e)
                                                  : this.removes.push({
                                                        parentId: r,
                                                        id: a,
                                                        isShadow: !!(q(t.target) && z(t.target)) || void 0,
                                                    })),
                                        this.mapRemoves.push(e));
                                });
                    }
            }),
            (this.genAdds = (t, e) => {
                if (
                    !this.processedNodeManager.inOtherBuffer(t, this) &&
                    !(this.addedSet.has(t) || this.movedSet.has(t))
                ) {
                    if (this.mirror.hasNode(t)) {
                        if (tx(t, this.mirror)) return;
                        this.movedSet.add(t);
                        let a = null;
                        e && this.mirror.hasNode(e) && (a = this.mirror.getId(e)),
                            a && -1 !== a && (this.movedMap[t4(this.mirror.getId(t), a)] = !0);
                    } else this.addedSet.add(t), this.droppedSet.delete(t);
                    !tk(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                        (t.childNodes.forEach((t) => this.genAdds(t)),
                        tX(t) &&
                            t.shadowRoot.childNodes.forEach((e) => {
                                this.processedNodeManager.add(e, this), this.genAdds(e, t);
                            }));
                }
            });
    }
    init(t) {
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
        ].forEach((e) => {
            this[e] = t[e];
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
function t8(t, e) {
    t.delete(e), e.childNodes.forEach((e) => t8(t, e));
}
function t7(t, e, a) {
    return (
        0 !== t.length &&
        (function t(e, a, r) {
            let { parentNode: _ } = a;
            if (!_) return !1;
            let n = r.getId(_);
            return !!e.some((t) => t.id === n) || t(e, _, r);
        })(t, e, a)
    );
}
function t9(t, e) {
    return (
        0 !== t.size &&
        (function t(e, a) {
            let { parentNode: r } = a;
            return !!r && (!!e.has(r) || t(e, r));
        })(t, e)
    );
}
let et = (t) =>
    n
        ? (...e) => {
              try {
                  return t(...e);
              } catch (t) {
                  if (n && !0 === n(t)) return () => {};
                  throw t;
              }
          }
        : t;
function ee(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let _ = t[r],
            n = t[r + 1];
        if (((r += 2), ("optionalAccess" === _ || "optionalCall" === _) && null == a)) return;
        "access" === _ || "optionalAccess" === _
            ? ((e = a), (a = n(a)))
            : ("call" === _ || "optionalCall" === _) && ((a = n((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
let ea = [];
function er(t) {
    try {
        if ("composedPath" in t) {
            let e = t.composedPath();
            if (e.length) return e[0];
        } else if ("path" in t && t.path.length) return t.path[0];
    } catch (t) {}
    return t && t.target;
}
function e_(t, e) {
    let a = new t5();
    ea.push(a), a.init(t);
    let r = window.MutationObserver || window.__rrMutationObserver,
        _ = ee([
            window,
            "optionalAccess",
            (t) => t.Zone,
            "optionalAccess",
            (t) => t.__symbol__,
            "optionalCall",
            (t) => t("MutationObserver"),
        ]);
    _ && window[_] && (r = window[_]);
    let n = new r(
        et((e) => {
            (t.onMutation && !1 === t.onMutation(e)) || a.processMutations.bind(a)(e);
        }),
    );
    return (
        n.observe(e, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
        }),
        n
    );
}
function en({ scrollCb: t, doc: e, mirror: a, blockClass: r, blockSelector: _, unblockSelector: n, sampling: o }) {
    return tU(
        "scroll",
        et(
            tb(
                et((o) => {
                    let i = er(o);
                    if (!i || tk(i, r, _, n, !0)) return;
                    let E = a.getId(i);
                    if (i === e && e.defaultView) {
                        let a = tB(e.defaultView);
                        t({
                            id: E,
                            x: a.left,
                            y: a.top,
                        });
                    } else
                        t({
                            id: E,
                            x: i.scrollLeft,
                            y: i.scrollTop,
                        });
                }),
                o.scroll || 100,
            ),
        ),
        e,
    );
}
let eo = ["INPUT", "TEXTAREA", "SELECT"],
    ei = new WeakMap();
function eE(t) {
    var e = [];
    if (
        (eI("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule) ||
        (eI("CSSMediaRule") && t.parentRule instanceof CSSMediaRule) ||
        (eI("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule) ||
        (eI("CSSConditionRule") && t.parentRule instanceof CSSConditionRule)
    ) {
        let a = Array.from(t.parentRule.cssRules).indexOf(t);
        e.unshift(a);
    } else if (t.parentStyleSheet) {
        let a = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
        e.unshift(a);
    }
    return e;
}
function ec(t, e, a) {
    let r, _;
    return t
        ? (t.ownerNode ? (r = e.getId(t.ownerNode)) : (_ = a.getId(t)),
          {
              styleId: _,
              id: r,
          })
        : {};
}
function es({ mirror: t, stylesheetManager: e }, a) {
    let r = null;
    r = "#document" === a.nodeName ? t.getId(a) : t.getId(a.host);
    let _ =
            "#document" === a.nodeName
                ? ee([a, "access", (t) => t.defaultView, "optionalAccess", (t) => t.Document])
                : ee([
                      a,
                      "access",
                      (t) => t.ownerDocument,
                      "optionalAccess",
                      (t) => t.defaultView,
                      "optionalAccess",
                      (t) => t.ShadowRoot,
                  ]),
        n = ee([_, "optionalAccess", (t) => t.prototype])
            ? Object.getOwnPropertyDescriptor(ee([_, "optionalAccess", (t) => t.prototype]), "adoptedStyleSheets")
            : void 0;
    return null !== r && -1 !== r && _ && n
        ? (Object.defineProperty(a, "adoptedStyleSheets", {
              configurable: n.configurable,
              enumerable: n.enumerable,
              get() {
                  return ee([n, "access", (t) => t.get, "optionalAccess", (t) => t.call, "call", (t) => t(this)]);
              },
              set(t) {
                  let a = ee([n, "access", (t) => t.set, "optionalAccess", (t) => t.call, "call", (e) => e(this, t)]);
                  if (null !== r && -1 !== r)
                      try {
                          e.adoptStyleSheets(t, r);
                      } catch (t) {}
                  return a;
              },
          }),
          et(() => {
              Object.defineProperty(a, "adoptedStyleSheets", {
                  configurable: n.configurable,
                  enumerable: n.enumerable,
                  get: n.get,
                  set: n.set,
              });
          }))
        : () => {};
}
function el(t, e = {}) {
    let a,
        r = t.doc.defaultView;
    if (!r) return () => {};
    t.recordDOM && (a = e_(t, t.doc));
    let _ = (function ({ mousemoveCb: t, sampling: e, doc: a, mirror: r }) {
            let _;
            if (!1 === e.mousemove) return () => {};
            let n = "number" == typeof e.mousemove ? e.mousemove : 50,
                o = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                i = [],
                E = tb(
                    et((e) => {
                        let a = Date.now() - _;
                        t(
                            i.map((t) => ((t.timeOffset -= a), t)),
                            e,
                        ),
                            (i = []),
                            (_ = null);
                    }),
                    o,
                ),
                c = et(
                    tb(
                        et((t) => {
                            let e = er(t),
                                { clientX: a, clientY: n } = tF(t) ? t.changedTouches[0] : t;
                            _ || (_ = tw()),
                                i.push({
                                    x: a,
                                    y: n,
                                    id: r.getId(e),
                                    timeOffset: tw() - _,
                                }),
                                E(
                                    "undefined" != typeof DragEvent && t instanceof DragEvent
                                        ? t1.Drag
                                        : t instanceof MouseEvent
                                          ? t1.MouseMove
                                          : t1.TouchMove,
                                );
                        }),
                        n,
                        { trailing: !1 },
                    ),
                ),
                s = [tU("mousemove", c, a), tU("touchmove", c, a), tU("drag", c, a)];
            return et(() => {
                s.forEach((t) => t());
            });
        })(t),
        n = (function ({
            mouseInteractionCb: t,
            doc: e,
            mirror: a,
            blockClass: r,
            blockSelector: _,
            unblockSelector: n,
            sampling: o,
        }) {
            if (!1 === o.mouseInteraction) return () => {};
            let i = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                E = [],
                c = null;
            return (
                Object.keys(t2)
                    .filter((t) => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== i[t])
                    .forEach((o) => {
                        let i = ta(o),
                            s = (e) => {
                                let i = er(e);
                                if (tk(i, r, _, n, !0)) return;
                                let E = null,
                                    s = o;
                                if ("pointerType" in e) {
                                    switch (e.pointerType) {
                                        case "mouse":
                                            E = t3.Mouse;
                                            break;
                                        case "touch":
                                            E = t3.Touch;
                                            break;
                                        case "pen":
                                            E = t3.Pen;
                                    }
                                    E === t3.Touch
                                        ? t2[o] === t2.MouseDown
                                            ? (s = "TouchStart")
                                            : t2[o] === t2.MouseUp && (s = "TouchEnd")
                                        : t3.Pen;
                                } else tF(e) && (E = t3.Touch);
                                null !== E
                                    ? ((c = E),
                                      ((s.startsWith("Touch") && E === t3.Touch) ||
                                          (s.startsWith("Mouse") && E === t3.Mouse)) &&
                                          (E = null))
                                    : t2[o] === t2.Click && ((E = c), (c = null));
                                let l = tF(e) ? e.changedTouches[0] : e;
                                if (!l) return;
                                let I = a.getId(i),
                                    { clientX: R, clientY: u } = l;
                                et(t)({
                                    type: t2[s],
                                    id: I,
                                    x: R,
                                    y: u,
                                    ...(null !== E && { pointerType: E }),
                                });
                            };
                        if (window.PointerEvent)
                            switch (t2[o]) {
                                case t2.MouseDown:
                                case t2.MouseUp:
                                    i = i.replace("mouse", "pointer");
                                    break;
                                case t2.TouchStart:
                                case t2.TouchEnd:
                                    return;
                            }
                        E.push(tU(i, s, e));
                    }),
                et(() => {
                    E.forEach((t) => t());
                })
            );
        })(t),
        o = en(t),
        i = (function ({ viewportResizeCb: t }, { win: e }) {
            let a = -1,
                r = -1;
            return tU(
                "resize",
                et(
                    tb(
                        et(() => {
                            let e = tY(),
                                _ = tH();
                            (a !== e || r !== _) &&
                                (t({
                                    width: Number(_),
                                    height: Number(e),
                                }),
                                (a = e),
                                (r = _));
                        }),
                        200,
                    ),
                ),
                e,
            );
        })(t, { win: r }),
        E = (function ({
            inputCb: t,
            doc: e,
            mirror: a,
            blockClass: r,
            blockSelector: _,
            unblockSelector: n,
            ignoreClass: o,
            ignoreSelector: i,
            maskInputOptions: E,
            maskInputFn: c,
            sampling: s,
            userTriggeredOnInput: l,
            maskTextClass: I,
            unmaskTextClass: R,
            maskTextSelector: u,
            unmaskTextSelector: A,
        }) {
            function N(t) {
                let a = er(t),
                    s = t.isTrusted,
                    N = a && tr(a.tagName);
                if (("OPTION" === N && (a = a.parentElement), !a || !N || 0 > eo.indexOf(N) || tk(a, r, _, n, !0)))
                    return;
                let d = a;
                if (d.classList.contains(o) || (i && d.matches(i))) return;
                let f = tn(a),
                    L = to(d, N, f),
                    p = !1,
                    O = tt({
                        maskInputOptions: E,
                        tagName: N,
                        type: f,
                    }),
                    h = tS(a, I, u, R, A, O);
                ("radio" === f || "checkbox" === f) && (p = a.checked),
                    (L = te({
                        isMasked: h,
                        element: a,
                        value: L,
                        maskInputFn: c,
                    })),
                    T(
                        a,
                        l
                            ? {
                                  text: L,
                                  isChecked: p,
                                  userTriggered: s,
                              }
                            : {
                                  text: L,
                                  isChecked: p,
                              },
                    );
                let P = a.name;
                "radio" === f &&
                    P &&
                    p &&
                    e.querySelectorAll(`input[type="radio"][name="${P}"]`).forEach((t) => {
                        if (t !== a) {
                            let e = te({
                                isMasked: h,
                                element: t,
                                value: to(t, N, f),
                                maskInputFn: c,
                            });
                            T(
                                t,
                                l
                                    ? {
                                          text: e,
                                          isChecked: !p,
                                          userTriggered: !1,
                                      }
                                    : {
                                          text: e,
                                          isChecked: !p,
                                      },
                            );
                        }
                    });
            }
            function T(e, r) {
                let _ = ei.get(e);
                if (!_ || _.text !== r.text || _.isChecked !== r.isChecked) {
                    ei.set(e, r);
                    let _ = a.getId(e);
                    et(t)({
                        ...r,
                        id: _,
                    });
                }
            }
            let d = ("last" === s.input ? ["change"] : ["input", "change"]).map((t) => tU(t, et(N), e)),
                f = e.defaultView;
            if (!f)
                return () => {
                    d.forEach((t) => t());
                };
            let L = f.Object.getOwnPropertyDescriptor(f.HTMLInputElement.prototype, "value"),
                p = [
                    [f.HTMLInputElement.prototype, "value"],
                    [f.HTMLInputElement.prototype, "checked"],
                    [f.HTMLSelectElement.prototype, "value"],
                    [f.HTMLTextAreaElement.prototype, "value"],
                    [f.HTMLSelectElement.prototype, "selectedIndex"],
                    [f.HTMLOptionElement.prototype, "selected"],
                ];
            return (
                L &&
                    L.set &&
                    d.push(
                        ...p.map((t) =>
                            (function t(e, a, r, _, n = window) {
                                let o = n.Object.getOwnPropertyDescriptor(e, a);
                                return (
                                    n.Object.defineProperty(
                                        e,
                                        a,
                                        _
                                            ? r
                                            : {
                                                  set(t) {
                                                      tZ(() => {
                                                          r.set.call(this, t);
                                                      }, 0),
                                                          o && o.set && o.set.call(this, t);
                                                  },
                                              },
                                    ),
                                    () => t(e, a, o || {}, !0)
                                );
                            })(
                                t[0],
                                t[1],
                                {
                                    set() {
                                        et(N)({
                                            target: this,
                                            isTrusted: !1,
                                        });
                                    },
                                },
                                !1,
                                f,
                            ),
                        ),
                    ),
                et(() => {
                    d.forEach((t) => t());
                })
            );
        })(t),
        c = (function ({
            mediaInteractionCb: t,
            blockClass: e,
            blockSelector: a,
            unblockSelector: r,
            mirror: _,
            sampling: n,
            doc: o,
        }) {
            let i = et((o) =>
                    tb(
                        et((n) => {
                            let i = er(n);
                            if (!i || tk(i, e, a, r, !0)) return;
                            let { currentTime: E, volume: c, muted: s, playbackRate: l } = i;
                            t({
                                type: o,
                                id: _.getId(i),
                                currentTime: E,
                                volume: c,
                                muted: s,
                                playbackRate: l,
                            });
                        }),
                        n.media || 500,
                    ),
                ),
                E = [
                    tU("play", i(0), o),
                    tU("pause", i(1), o),
                    tU("seeked", i(2), o),
                    tU("volumechange", i(3), o),
                    tU("ratechange", i(4), o),
                ];
            return et(() => {
                E.forEach((t) => t());
            });
        })(t),
        s = () => {},
        l = () => {},
        I = () => {},
        R = () => {};
    t.recordDOM &&
        ((s = (function ({ styleSheetRuleCb: t, mirror: e, stylesheetManager: a }, { win: r }) {
            let _, n;
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let o = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: et((r, _, n) => {
                    let [o, i] = n,
                        { id: E, styleId: c } = ec(_, e, a.styleMirror);
                    return (
                        ((E && -1 !== E) || (c && -1 !== c)) &&
                            t({
                                id: E,
                                styleId: c,
                                adds: [
                                    {
                                        rule: o,
                                        index: i,
                                    },
                                ],
                            }),
                        r.apply(_, n)
                    );
                }),
            });
            let i = r.CSSStyleSheet.prototype.deleteRule;
            (r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                apply: et((r, _, n) => {
                    let [o] = n,
                        { id: i, styleId: E } = ec(_, e, a.styleMirror);
                    return (
                        ((i && -1 !== i) || (E && -1 !== E)) &&
                            t({
                                id: i,
                                styleId: E,
                                removes: [{ index: o }],
                            }),
                        r.apply(_, n)
                    );
                }),
            })),
                r.CSSStyleSheet.prototype.replace &&
                    ((_ = r.CSSStyleSheet.prototype.replace),
                    (r.CSSStyleSheet.prototype.replace = new Proxy(_, {
                        apply: et((r, _, n) => {
                            let [o] = n,
                                { id: i, styleId: E } = ec(_, e, a.styleMirror);
                            return (
                                ((i && -1 !== i) || (E && -1 !== E)) &&
                                    t({
                                        id: i,
                                        styleId: E,
                                        replace: o,
                                    }),
                                r.apply(_, n)
                            );
                        }),
                    }))),
                r.CSSStyleSheet.prototype.replaceSync &&
                    ((n = r.CSSStyleSheet.prototype.replaceSync),
                    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(n, {
                        apply: et((r, _, n) => {
                            let [o] = n,
                                { id: i, styleId: E } = ec(_, e, a.styleMirror);
                            return (
                                ((i && -1 !== i) || (E && -1 !== E)) &&
                                    t({
                                        id: i,
                                        styleId: E,
                                        replaceSync: o,
                                    }),
                                r.apply(_, n)
                            );
                        }),
                    })));
            let E = {};
            eR("CSSGroupingRule")
                ? (E.CSSGroupingRule = r.CSSGroupingRule)
                : (eR("CSSMediaRule") && (E.CSSMediaRule = r.CSSMediaRule),
                  eR("CSSConditionRule") && (E.CSSConditionRule = r.CSSConditionRule),
                  eR("CSSSupportsRule") && (E.CSSSupportsRule = r.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(E).forEach(([r, _]) => {
                    (c[r] = {
                        insertRule: _.prototype.insertRule,
                        deleteRule: _.prototype.deleteRule,
                    }),
                        (_.prototype.insertRule = new Proxy(c[r].insertRule, {
                            apply: et((r, _, n) => {
                                let [o, i] = n,
                                    { id: E, styleId: c } = ec(_.parentStyleSheet, e, a.styleMirror);
                                return (
                                    ((E && -1 !== E) || (c && -1 !== c)) &&
                                        t({
                                            id: E,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...eE(_), i || 0],
                                                },
                                            ],
                                        }),
                                    r.apply(_, n)
                                );
                            }),
                        })),
                        (_.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                            apply: et((r, _, n) => {
                                let [o] = n,
                                    { id: i, styleId: E } = ec(_.parentStyleSheet, e, a.styleMirror);
                                return (
                                    ((i && -1 !== i) || (E && -1 !== E)) &&
                                        t({
                                            id: i,
                                            styleId: E,
                                            removes: [
                                                {
                                                    index: [...eE(_), o],
                                                },
                                            ],
                                        }),
                                    r.apply(_, n)
                                );
                            }),
                        }));
                }),
                et(() => {
                    (r.CSSStyleSheet.prototype.insertRule = o),
                        (r.CSSStyleSheet.prototype.deleteRule = i),
                        _ && (r.CSSStyleSheet.prototype.replace = _),
                        n && (r.CSSStyleSheet.prototype.replaceSync = n),
                        Object.entries(E).forEach(([t, e]) => {
                            (e.prototype.insertRule = c[t].insertRule), (e.prototype.deleteRule = c[t].deleteRule);
                        });
                })
            );
        })(t, { win: r })),
        (l = es(t, t.doc)),
        (I = (function (
            { styleDeclarationCb: t, mirror: e, ignoreCSSAttributes: a, stylesheetManager: r },
            { win: _ },
        ) {
            let n = _.CSSStyleDeclaration.prototype.setProperty;
            _.CSSStyleDeclaration.prototype.setProperty = new Proxy(n, {
                apply: et((_, o, i) => {
                    let [E, c, s] = i;
                    if (a.has(E)) return n.apply(o, [E, c, s]);
                    let { id: l, styleId: I } = ec(
                        ee([o, "access", (t) => t.parentRule, "optionalAccess", (t) => t.parentStyleSheet]),
                        e,
                        r.styleMirror,
                    );
                    return (
                        ((l && -1 !== l) || (I && -1 !== I)) &&
                            t({
                                id: l,
                                styleId: I,
                                set: {
                                    property: E,
                                    value: c,
                                    priority: s,
                                },
                                index: eE(o.parentRule),
                            }),
                        _.apply(o, i)
                    );
                }),
            });
            let o = _.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (_.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: et((_, n, i) => {
                        let [E] = i;
                        if (a.has(E)) return o.apply(n, [E]);
                        let { id: c, styleId: s } = ec(
                            ee([n, "access", (t) => t.parentRule, "optionalAccess", (t) => t.parentStyleSheet]),
                            e,
                            r.styleMirror,
                        );
                        return (
                            ((c && -1 !== c) || (s && -1 !== s)) &&
                                t({
                                    id: c,
                                    styleId: s,
                                    remove: { property: E },
                                    index: eE(n.parentRule),
                                }),
                            _.apply(n, i)
                        );
                    }),
                })),
                et(() => {
                    (_.CSSStyleDeclaration.prototype.setProperty = n),
                        (_.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(t, { win: r })),
        t.collectFonts &&
            (R = (function ({ fontCb: t, doc: e }) {
                let a = e.defaultView;
                if (!a) return () => {};
                let r = [],
                    _ = new WeakMap(),
                    n = a.FontFace;
                a.FontFace = function (t, e, a) {
                    let r = new n(t, e, a);
                    return (
                        _.set(r, {
                            family: t,
                            buffer: "string" != typeof e,
                            descriptors: a,
                            fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e))),
                        }),
                        r
                    );
                };
                let o = tM(e.fonts, "add", function (e) {
                    return function (a) {
                        return (
                            tZ(
                                et(() => {
                                    let e = _.get(a);
                                    e && (t(e), _.delete(a));
                                }),
                                0,
                            ),
                            e.apply(this, [a])
                        );
                    };
                });
                return (
                    r.push(() => {
                        a.FontFace = n;
                    }),
                    r.push(o),
                    et(() => {
                        r.forEach((t) => t());
                    })
                );
            })(t)));
    let u = (function (t) {
            let { doc: e, mirror: a, blockClass: r, blockSelector: _, unblockSelector: n, selectionCb: o } = t,
                i = !0,
                E = et(() => {
                    let t = e.getSelection();
                    if (!t || (i && ee([t, "optionalAccess", (t) => t.isCollapsed]))) return;
                    i = t.isCollapsed || !1;
                    let E = [],
                        c = t.rangeCount || 0;
                    for (let e = 0; e < c; e++) {
                        let { startContainer: o, startOffset: i, endContainer: c, endOffset: s } = t.getRangeAt(e);
                        tk(o, r, _, n, !0) ||
                            tk(c, r, _, n, !0) ||
                            E.push({
                                start: a.getId(o),
                                startOffset: i,
                                end: a.getId(c),
                                endOffset: s,
                            });
                    }
                    o({ ranges: E });
                });
            return E(), tU("selectionchange", E);
        })(t),
        A = (function ({ doc: t, customElementCb: e }) {
            let a = t.defaultView;
            return a && a.customElements
                ? tM(a.customElements, "define", function (t) {
                      return function (a, r, _) {
                          try {
                              e({ define: { name: a } });
                          } catch (t) {}
                          return t.apply(this, [a, r, _]);
                      };
                  })
                : () => {};
        })(t),
        N = [];
    for (let e of t.plugins) N.push(e.observer(e.callback, r, e.options));
    return et(() => {
        ea.forEach((t) => t.reset()),
            ee([a, "optionalAccess", (t) => t.disconnect, "call", (t) => t()]),
            _(),
            n(),
            o(),
            i(),
            E(),
            c(),
            s(),
            l(),
            I(),
            R(),
            u(),
            A(),
            N.forEach((t) => t());
    });
}
function eI(t) {
    return void 0 !== window[t];
}
function eR(t) {
    return !!(
        void 0 !== window[t] &&
        window[t].prototype &&
        "insertRule" in window[t].prototype &&
        "deleteRule" in window[t].prototype
    );
}
class eu {
    constructor(t) {
        (this.generateIdFn = t),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(t, e, a, r) {
        let _ = a || this.getIdToRemoteIdMap(t),
            n = r || this.getRemoteIdToIdMap(t),
            o = _.get(e);
        return o || ((o = this.generateIdFn()), _.set(e, o), n.set(o, e)), o;
    }
    getIds(t, e) {
        let a = this.getIdToRemoteIdMap(t),
            r = this.getRemoteIdToIdMap(t);
        return e.map((e) => this.getId(t, e, a, r));
    }
    getRemoteId(t, e, a) {
        let r = a || this.getRemoteIdToIdMap(t);
        if ("number" != typeof e) return e;
        let _ = r.get(e);
        return _ || -1;
    }
    getRemoteIds(t, e) {
        let a = this.getRemoteIdToIdMap(t);
        return e.map((e) => this.getRemoteId(t, e, a));
    }
    reset(t) {
        if (!t) {
            (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
            return;
        }
        this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
    }
    getIdToRemoteIdMap(t) {
        let e = this.iframeIdToRemoteIdMap.get(t);
        return e || ((e = new Map()), this.iframeIdToRemoteIdMap.set(t, e)), e;
    }
    getRemoteIdToIdMap(t) {
        let e = this.iframeRemoteIdToIdMap.get(t);
        return e || ((e = new Map()), this.iframeRemoteIdToIdMap.set(t, e)), e;
    }
}
function eA(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let _ = t[r],
            n = t[r + 1];
        if (((r += 2), ("optionalAccess" === _ || "optionalCall" === _) && null == a)) return;
        "access" === _ || "optionalAccess" === _
            ? ((e = a), (a = n(a)))
            : ("call" === _ || "optionalCall" === _) && ((a = n((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
class eN {
    constructor() {
        (this.crossOriginIframeMirror = new eu(tu)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class eT {
    constructor(t) {
        (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new eu(tu)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = t.mutationCb),
            (this.wrappedEmit = t.wrappedEmit),
            (this.stylesheetManager = t.stylesheetManager),
            (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new eu(
                this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror),
            )),
            (this.mirror = t.mirror),
            this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(t) {
        this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
    }
    addLoadListener(t) {
        this.loadListener = t;
    }
    attachIframe(t, e) {
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(t),
                    nextId: null,
                    node: e,
                },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
        }),
            eA([this, "access", (t) => t.loadListener, "optionalCall", (e) => e(t)]),
            t.contentDocument &&
                t.contentDocument.adoptedStyleSheets &&
                t.contentDocument.adoptedStyleSheets.length > 0 &&
                this.stylesheetManager.adoptStyleSheets(
                    t.contentDocument.adoptedStyleSheets,
                    this.mirror.getId(t.contentDocument),
                );
    }
    handleMessage(t) {
        if ("rrweb" !== t.data.type || t.origin !== t.data.origin || !t.source) return;
        let e = this.crossOriginIframeMap.get(t.source);
        if (!e) return;
        let a = this.transformCrossOriginEvent(e, t.data.event);
        a && this.wrappedEmit(a, t.data.isCheckout);
    }
    transformCrossOriginEvent(t, e) {
        switch (e.type) {
            case t0.FullSnapshot: {
                this.crossOriginIframeMirror.reset(t),
                    this.crossOriginIframeStyleMirror.reset(t),
                    this.replaceIdOnNode(e.data.node, t);
                let a = e.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(t, a),
                    this.patchRootIdOnNode(e.data.node, a),
                    {
                        timestamp: e.timestamp,
                        type: t0.IncrementalSnapshot,
                        data: {
                            source: t1.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(t),
                                    nextId: null,
                                    node: e.data.node,
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
            case t0.Meta:
            case t0.Load:
            case t0.DomContentLoaded:
                break;
            case t0.Plugin:
                return e;
            case t0.Custom:
                return this.replaceIds(e.data.payload, t, ["id", "parentId", "previousId", "nextId"]), e;
            case t0.IncrementalSnapshot:
                switch (e.data.source) {
                    case t1.Mutation:
                        return (
                            e.data.adds.forEach((e) => {
                                this.replaceIds(e, t, ["parentId", "nextId", "previousId"]),
                                    this.replaceIdOnNode(e.node, t);
                                let a = this.crossOriginIframeRootIdMap.get(t);
                                a && this.patchRootIdOnNode(e.node, a);
                            }),
                            e.data.removes.forEach((e) => {
                                this.replaceIds(e, t, ["parentId", "id"]);
                            }),
                            e.data.attributes.forEach((e) => {
                                this.replaceIds(e, t, ["id"]);
                            }),
                            e.data.texts.forEach((e) => {
                                this.replaceIds(e, t, ["id"]);
                            }),
                            e
                        );
                    case t1.Drag:
                    case t1.TouchMove:
                    case t1.MouseMove:
                        return (
                            e.data.positions.forEach((e) => {
                                this.replaceIds(e, t, ["id"]);
                            }),
                            e
                        );
                    case t1.ViewportResize:
                        return !1;
                    case t1.MediaInteraction:
                    case t1.MouseInteraction:
                    case t1.Scroll:
                    case t1.CanvasMutation:
                    case t1.Input:
                        return this.replaceIds(e.data, t, ["id"]), e;
                    case t1.StyleSheetRule:
                    case t1.StyleDeclaration:
                        return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleId"]), e;
                    case t1.Font:
                        return e;
                    case t1.Selection:
                        return (
                            e.data.ranges.forEach((e) => {
                                this.replaceIds(e, t, ["start", "end"]);
                            }),
                            e
                        );
                    case t1.AdoptedStyleSheet:
                        return (
                            this.replaceIds(e.data, t, ["id"]),
                            this.replaceStyleIds(e.data, t, ["styleIds"]),
                            eA([
                                e,
                                "access",
                                (t) => t.data,
                                "access",
                                (t) => t.styles,
                                "optionalAccess",
                                (t) => t.forEach,
                                "call",
                                (e) =>
                                    e((e) => {
                                        this.replaceStyleIds(e, t, ["styleId"]);
                                    }),
                            ]),
                            e
                        );
                }
        }
        return !1;
    }
    replace(t, e, a, r) {
        for (let _ of r)
            (Array.isArray(e[_]) || "number" == typeof e[_]) &&
                (Array.isArray(e[_]) ? (e[_] = t.getIds(a, e[_])) : (e[_] = t.getId(a, e[_])));
        return e;
    }
    replaceIds(t, e, a) {
        return this.replace(this.crossOriginIframeMirror, t, e, a);
    }
    replaceStyleIds(t, e, a) {
        return this.replace(this.crossOriginIframeStyleMirror, t, e, a);
    }
    replaceIdOnNode(t, e) {
        this.replaceIds(t, e, ["id", "rootId"]),
            "childNodes" in t &&
                t.childNodes.forEach((t) => {
                    this.replaceIdOnNode(t, e);
                });
    }
    patchRootIdOnNode(t, e) {
        t.type === A.Document || t.rootId || (t.rootId = e),
            "childNodes" in t &&
                t.childNodes.forEach((t) => {
                    this.patchRootIdOnNode(t, e);
                });
    }
}
class ed {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class ef {
    constructor(t) {
        (this.shadowDoms = new WeakSet()),
            (this.restoreHandlers = []),
            (this.mutationCb = t.mutationCb),
            (this.scrollCb = t.scrollCb),
            (this.bypassOptions = t.bypassOptions),
            (this.mirror = t.mirror),
            this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(t, e) {
        if (!z(t) || this.shadowDoms.has(t)) return;
        this.shadowDoms.add(t), this.bypassOptions.canvasManager.addShadowRoot(t);
        let a = e_(
            {
                ...this.bypassOptions,
                doc: e,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
            },
            t,
        );
        this.restoreHandlers.push(() => a.disconnect()),
            this.restoreHandlers.push(
                en({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: t,
                    mirror: this.mirror,
                }),
            ),
            tZ(() => {
                t.adoptedStyleSheets &&
                    t.adoptedStyleSheets.length > 0 &&
                    this.bypassOptions.stylesheetManager.adoptStyleSheets(
                        t.adoptedStyleSheets,
                        this.mirror.getId(t.host),
                    ),
                    this.restoreHandlers.push(
                        es(
                            {
                                mirror: this.mirror,
                                stylesheetManager: this.bypassOptions.stylesheetManager,
                            },
                            t,
                        ),
                    );
            }, 0);
    }
    observeAttachShadow(t) {
        t.contentWindow && t.contentDocument && this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
    }
    patchAttachShadow(t, e) {
        let a = this;
        this.restoreHandlers.push(
            tM(t.prototype, "attachShadow", function (t) {
                return function (r) {
                    let _ = t.call(this, r);
                    return this.shadowRoot && tz(this) && a.addShadowRoot(this.shadowRoot, e), _;
                };
            }),
        );
    }
    reset() {
        this.restoreHandlers.forEach((t) => {
            try {
                t();
            } catch (t) {}
        }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet()),
            this.bypassOptions.canvasManager.resetShadowRoots();
    }
}
class eL {
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
class ep {
    constructor(t) {
        (this.trackedLinkElements = new WeakSet()),
            (this.styleMirror = new t$()),
            (this.mutationCb = t.mutationCb),
            (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb);
    }
    attachLinkElement(t, e) {
        "_cssText" in e.attributes &&
            this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [
                    {
                        id: e.id,
                        attributes: e.attributes,
                    },
                ],
            }),
            this.trackLinkElement(t);
    }
    trackLinkElement(t) {
        this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
    }
    adoptStyleSheets(t, e) {
        if (0 === t.length) return;
        let a = {
                id: e,
                styleIds: [],
            },
            r = [];
        for (let e of t) {
            let t;
            this.styleMirror.has(e)
                ? (t = this.styleMirror.getId(e))
                : ((t = this.styleMirror.add(e)),
                  r.push({
                      styleId: t,
                      rules: Array.from(e.rules || CSSRule, (t, e) => ({
                          rule: Q(t),
                          index: e,
                      })),
                  })),
                a.styleIds.push(t);
        }
        r.length > 0 && (a.styles = r), this.adoptedStyleSheetCb(a);
    }
    reset() {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(t) {}
}
class eO {
    constructor() {
        (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
    }
    periodicallyClear() {
        !(function (...t) {
            tQ("requestAnimationFrame")(...t);
        })(() => {
            this.clear(), this.loop && this.periodicallyClear();
        });
    }
    inOtherBuffer(t, e) {
        let a = this.nodeMap.get(t);
        return a && Array.from(a).some((t) => t !== e);
    }
    add(t, e) {
        this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(e));
    }
    clear() {
        this.nodeMap = new WeakMap();
    }
    destroy() {
        this.loop = !1;
    }
}
try {
    if (2 !== Array.from([1], (t) => 2 * t)[0]) {
        let t = document.createElement("iframe");
        document.body.appendChild(t),
            (Array.from =
                (0, d.x)([
                    t,
                    "access",
                    (t) => t.contentWindow,
                    "optionalAccess",
                    (t) => t.Array,
                    "access",
                    (t) => t.from,
                ]) || Array.from),
            document.body.removeChild(t);
    }
} catch (t) {
    console.debug("Unable to override Array.from", t);
}
let eh = new Z();
function eP(t = {}) {
    let e,
        {
            emit: a,
            checkoutEveryNms: r,
            checkoutEveryNth: _,
            blockClass: E = "rr-block",
            blockSelector: c = null,
            unblockSelector: s = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: I = null,
            maskAllText: R = !1,
            maskTextClass: u = "rr-mask",
            unmaskTextClass: A = null,
            maskTextSelector: N = null,
            unmaskTextSelector: T = null,
            inlineStylesheet: f = !0,
            maskAllInputs: L,
            maskInputOptions: p,
            slimDOMOptions: O,
            maskAttributeFn: h,
            maskInputFn: P,
            maskTextFn: C,
            maxCanvasSize: D = null,
            packFn: g,
            sampling: S = {},
            dataURLOptions: m = {},
            mousemoveWait: v,
            recordDOM: y = !0,
            recordCanvas: U = !1,
            recordCrossOriginIframes: G = !1,
            recordAfter: W = "DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load",
            userTriggeredOnInput: b = !1,
            collectFonts: M = !1,
            inlineImages: w = !1,
            plugins: B,
            keepIframeSrcFn: Y = () => !1,
            ignoreCSSAttributes: H = new Set([]),
            errorHandler: K,
            onMutation: k,
            getCanvasManager: x,
        } = t;
    n = K;
    let F = !G || window.parent === window,
        V = !1;
    if (!F)
        try {
            window.parent.document && (V = !1);
        } catch (t) {
            V = !0;
        }
    if (F && !a) throw Error("emit function is required");
    void 0 !== v && void 0 === S.mousemove && (S.mousemove = v), eh.reset();
    let j =
            !0 === L
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
                : void 0 !== p
                  ? p
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
    !(function (t = window) {
        "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList" in t &&
                !t.DOMTokenList.prototype.forEach &&
                (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            Node.prototype.contains ||
                (Node.prototype.contains = (...t) => {
                    let e = t[0];
                    if (!(0 in t)) throw TypeError("1 argument is required");
                    do if (this === e) return !0;
                    while ((e = e && e.parentNode));
                    return !1;
                });
    })();
    let $ = 0,
        q = (t) => {
            for (let e of B || []) e.eventProcessor && (t = e.eventProcessor(t));
            return g && !V && (t = g(t)), t;
        };
    o = (t, n) => {
        if (
            ((t.timestamp = tw()),
            (0, d.x)([ea, "access", (t) => t[0], "optionalAccess", (t) => t.isFrozen, "call", (t) => t()]) &&
                t.type !== t0.FullSnapshot &&
                (t.type !== t0.IncrementalSnapshot || t.data.source !== t1.Mutation) &&
                ea.forEach((t) => t.unfreeze()),
            F)
        )
            (0, d.x)([a, "optionalCall", (e) => e(q(t), n)]);
        else if (V) {
            let e = {
                type: "rrweb",
                event: q(t),
                origin: window.location.origin,
                isCheckout: n,
            };
            window.parent.postMessage(e, "*");
        }
        if (t.type === t0.FullSnapshot) (e = t), ($ = 0);
        else if (t.type === t0.IncrementalSnapshot) {
            if (t.data.source === t1.Mutation && t.data.isAttachIframe) return;
            $++;
            let a = _ && $ >= _,
                n = r && e && t.timestamp - e.timestamp > r;
            (a || n) && tn(!0);
        }
    };
    let z = (t) => {
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.Mutation,
                    ...t,
                },
            });
        },
        J = (t) =>
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.Scroll,
                    ...t,
                },
            }),
        Q = (t) =>
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.CanvasMutation,
                    ...t,
                },
            }),
        tt = new ep({
            mutationCb: z,
            adoptedStyleSheetCb: (t) =>
                o({
                    type: t0.IncrementalSnapshot,
                    data: {
                        source: t1.AdoptedStyleSheet,
                        ...t,
                    },
                }),
        }),
        te =
            "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
                ? new eN()
                : new eT({
                      mirror: eh,
                      mutationCb: z,
                      stylesheetManager: tt,
                      recordCrossOriginIframes: G,
                      wrappedEmit: o,
                  });
    for (let t of B || [])
        t.getMirror &&
            t.getMirror({
                nodeMirror: eh,
                crossOriginIframeMirror: te.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: te.crossOriginIframeStyleMirror,
            });
    let ta = new eO(),
        tr = (function (t, e) {
            try {
                return t ? t(e) : new eL();
            } catch (t) {
                return console.warn("Unable to initialize CanvasManager"), new eL();
            }
        })(x, {
            mirror: eh,
            win: window,
            mutationCb: (t) =>
                o({
                    type: t0.IncrementalSnapshot,
                    data: {
                        source: t1.CanvasMutation,
                        ...t,
                    },
                }),
            recordCanvas: U,
            blockClass: E,
            blockSelector: c,
            unblockSelector: s,
            maxCanvasSize: D,
            sampling: S.canvas,
            dataURLOptions: m,
            errorHandler: K,
        }),
        t_ =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new ed()
                : new ef({
                      mutationCb: z,
                      scrollCb: J,
                      bypassOptions: {
                          onMutation: k,
                          blockClass: E,
                          blockSelector: c,
                          unblockSelector: s,
                          maskAllText: R,
                          maskTextClass: u,
                          unmaskTextClass: A,
                          maskTextSelector: N,
                          unmaskTextSelector: T,
                          inlineStylesheet: f,
                          maskInputOptions: j,
                          dataURLOptions: m,
                          maskAttributeFn: h,
                          maskTextFn: C,
                          maskInputFn: P,
                          recordCanvas: U,
                          inlineImages: w,
                          sampling: S,
                          slimDOMOptions: X,
                          iframeManager: te,
                          stylesheetManager: tt,
                          canvasManager: tr,
                          keepIframeSrcFn: Y,
                          processedNodeManager: ta,
                      },
                      mirror: eh,
                  }),
        tn = (t = !1) => {
            if (!y) return;
            o(
                {
                    type: t0.Meta,
                    data: {
                        href: window.location.href,
                        width: tH(),
                        height: tY(),
                    },
                },
                t,
            ),
                tt.reset(),
                t_.init(),
                ea.forEach((t) => t.lock());
            let e = (function (t, e) {
                let {
                    mirror: a = new Z(),
                    blockClass: r = "rr-block",
                    blockSelector: _ = null,
                    unblockSelector: n = null,
                    maskAllText: o = !1,
                    maskTextClass: i = "rr-mask",
                    unmaskTextClass: E = null,
                    maskTextSelector: c = null,
                    unmaskTextSelector: s = null,
                    inlineStylesheet: l = !0,
                    inlineImages: I = !1,
                    recordCanvas: R = !1,
                    maskAllInputs: u = !1,
                    maskAttributeFn: A,
                    maskTextFn: N,
                    maskInputFn: T,
                    slimDOM: d = !1,
                    dataURLOptions: f,
                    preserveWhiteSpace: L,
                    onSerialize: p,
                    onIframeLoad: O,
                    iframeLoadTimeout: h,
                    onStylesheetLoad: P,
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: D = () => !1,
                } = e || {};
                return tv(t, {
                    doc: t,
                    mirror: a,
                    blockClass: r,
                    blockSelector: _,
                    unblockSelector: n,
                    maskAllText: o,
                    maskTextClass: i,
                    unmaskTextClass: E,
                    maskTextSelector: c,
                    unmaskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: l,
                    maskInputOptions:
                        !0 === u
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
                            : !1 === u
                              ? {}
                              : u,
                    maskAttributeFn: A,
                    maskTextFn: N,
                    maskInputFn: T,
                    slimDOMOptions:
                        !0 === d || "all" === d
                            ? {
                                  script: !0,
                                  comment: !0,
                                  headFavicon: !0,
                                  headWhitespace: !0,
                                  headMetaDescKeywords: "all" === d,
                                  headMetaSocial: !0,
                                  headMetaRobots: !0,
                                  headMetaHttpEquiv: !0,
                                  headMetaAuthorship: !0,
                                  headMetaVerification: !0,
                              }
                            : !1 === d
                              ? {}
                              : d,
                    dataURLOptions: f,
                    inlineImages: I,
                    recordCanvas: R,
                    preserveWhiteSpace: L,
                    onSerialize: p,
                    onIframeLoad: O,
                    iframeLoadTimeout: h,
                    onStylesheetLoad: P,
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: D,
                    newlyAddedElement: !1,
                });
            })(document, {
                mirror: eh,
                blockClass: E,
                blockSelector: c,
                unblockSelector: s,
                maskAllText: R,
                maskTextClass: u,
                unmaskTextClass: A,
                maskTextSelector: N,
                unmaskTextSelector: T,
                inlineStylesheet: f,
                maskAllInputs: j,
                maskAttributeFn: h,
                maskInputFn: P,
                maskTextFn: C,
                slimDOM: X,
                dataURLOptions: m,
                recordCanvas: U,
                inlineImages: w,
                onSerialize: (t) => {
                    tV(t, eh) && te.addIframe(t),
                        tj(t, eh) && tt.trackLinkElement(t),
                        tX(t) && t_.addShadowRoot(t.shadowRoot, document);
                },
                onIframeLoad: (t, e) => {
                    te.attachIframe(t, e), t.contentWindow && tr.addWindow(t.contentWindow), t_.observeAttachShadow(t);
                },
                onStylesheetLoad: (t, e) => {
                    tt.attachLinkElement(t, e);
                },
                keepIframeSrcFn: Y,
            });
            if (!e) return console.warn("Failed to snapshot the document");
            o({
                type: t0.FullSnapshot,
                data: {
                    node: e,
                    initialOffset: tB(window),
                },
            }),
                ea.forEach((t) => t.unlock()),
                document.adoptedStyleSheets &&
                    document.adoptedStyleSheets.length > 0 &&
                    tt.adoptStyleSheets(document.adoptedStyleSheets, eh.getId(document));
        };
    i = tn;
    try {
        let t = [],
            e = (t) =>
                et(el)(
                    {
                        onMutation: k,
                        mutationCb: z,
                        mousemoveCb: (t, e) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: e,
                                    positions: t,
                                },
                            }),
                        mouseInteractionCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.MouseInteraction,
                                    ...t,
                                },
                            }),
                        scrollCb: J,
                        viewportResizeCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.ViewportResize,
                                    ...t,
                                },
                            }),
                        inputCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.Input,
                                    ...t,
                                },
                            }),
                        mediaInteractionCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.MediaInteraction,
                                    ...t,
                                },
                            }),
                        styleSheetRuleCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.StyleSheetRule,
                                    ...t,
                                },
                            }),
                        styleDeclarationCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.StyleDeclaration,
                                    ...t,
                                },
                            }),
                        canvasMutationCb: Q,
                        fontCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.Font,
                                    ...t,
                                },
                            }),
                        selectionCb: (t) => {
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.Selection,
                                    ...t,
                                },
                            });
                        },
                        customElementCb: (t) => {
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.CustomElement,
                                    ...t,
                                },
                            });
                        },
                        blockClass: E,
                        ignoreClass: l,
                        ignoreSelector: I,
                        maskAllText: R,
                        maskTextClass: u,
                        unmaskTextClass: A,
                        maskTextSelector: N,
                        unmaskTextSelector: T,
                        maskInputOptions: j,
                        inlineStylesheet: f,
                        sampling: S,
                        recordDOM: y,
                        recordCanvas: U,
                        inlineImages: w,
                        userTriggeredOnInput: b,
                        collectFonts: M,
                        doc: t,
                        maskAttributeFn: h,
                        maskInputFn: P,
                        maskTextFn: C,
                        keepIframeSrcFn: Y,
                        blockSelector: c,
                        unblockSelector: s,
                        slimDOMOptions: X,
                        dataURLOptions: m,
                        mirror: eh,
                        iframeManager: te,
                        stylesheetManager: tt,
                        shadowDomManager: t_,
                        processedNodeManager: ta,
                        canvasManager: tr,
                        ignoreCSSAttributes: H,
                        plugins:
                            (0, d.x)([
                                B,
                                "optionalAccess",
                                (t) => t.filter,
                                "call",
                                (t) => t((t) => t.observer),
                                "optionalAccess",
                                (t) => t.map,
                                "call",
                                (t) =>
                                    t((t) => ({
                                        observer: t.observer,
                                        options: t.options,
                                        callback: (e) =>
                                            o({
                                                type: t0.Plugin,
                                                data: {
                                                    plugin: t.name,
                                                    payload: e,
                                                },
                                            }),
                                    })),
                            ]) || [],
                    },
                    {},
                );
        te.addLoadListener((a) => {
            try {
                t.push(e(a.contentDocument));
            } catch (t) {
                console.warn(t);
            }
        });
        let a = () => {
            tn(), t.push(e(document));
        };
        return (
            "interactive" === document.readyState || "complete" === document.readyState
                ? a()
                : (t.push(
                      tU("DOMContentLoaded", () => {
                          o({
                              type: t0.DomContentLoaded,
                              data: {},
                          }),
                              "DOMContentLoaded" === W && a();
                      }),
                  ),
                  t.push(
                      tU(
                          "load",
                          () => {
                              o({
                                  type: t0.Load,
                                  data: {},
                              }),
                                  "load" === W && a();
                          },
                          window,
                      ),
                  )),
            () => {
                t.forEach((t) => t()), ta.destroy(), (i = void 0), (n = void 0);
            }
        );
    } catch (t) {
        console.warn(t);
    }
}
function eC(t) {
    return t > 9999999999 ? t : 1000 * t;
}
function eD(t) {
    return t > 9999999999 ? t / 1000 : t;
}
function eg(t, e) {
    "sentry.transaction" !== e.category &&
        (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(),
        t.addUpdate(
            () => (
                t.throttledAddEvent({
                    type: t0.Custom,
                    timestamp: 1000 * (e.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, S.Fv)(e, 10, 1000),
                    },
                }),
                "console" === e.category
            ),
        ));
}
function eS(t) {
    return t.closest("button,a") || t;
}
function em(t) {
    let e = ev(t);
    return e && e instanceof Element ? eS(e) : e;
}
function ev(t) {
    var e;
    return "object" == typeof (e = t) && e && "target" in e ? t.target : t;
}
(eP.mirror = eh),
    (eP.takeFullSnapshot = function (t) {
        if (!i) throw Error("please take full snapshot after start recording");
        i(t);
    });
class ey {
    constructor(t, e, a = eg) {
        (this._lastMutation = 0),
            (this._lastScroll = 0),
            (this._clicks = []),
            (this._timeout = e.timeout / 1000),
            (this._threshold = e.threshold / 1000),
            (this._scollTimeout = e.scrollTimeout / 1000),
            (this._replay = t),
            (this._ignoreSelector = e.ignoreSelector),
            (this._addBreadcrumbEvent = a);
    }
    addListeners() {
        var t;
        let e =
            ((t = () => {
                this._lastMutation = eG();
            }),
            E ||
                ((E = []),
                (0, m.hl)(F, "open", function (t) {
                    return function (...e) {
                        if (E)
                            try {
                                E.forEach((t) => t());
                            } catch (t) {}
                        return t.apply(F, e);
                    };
                })),
            E.push(t),
            () => {
                let e = E ? E.indexOf(t) : -1;
                e > -1 && E.splice(e, 1);
            });
        this._teardown = () => {
            e(), (this._clicks = []), (this._lastMutation = 0), (this._lastScroll = 0);
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(t, e) {
        var a, r, _;
        if (
            ((a = e),
            (r = this._ignoreSelector),
            !eU.includes(a.tagName) ||
                ("INPUT" === a.tagName && !["submit", "button"].includes(a.getAttribute("type") || "")) ||
                ("A" === a.tagName &&
                    (a.hasAttribute("download") ||
                        (a.hasAttribute("target") && "_self" !== a.getAttribute("target")))) ||
                (r && a.matches(r)) ||
                !((_ = t).data && "number" == typeof _.data.nodeId && _.timestamp))
        )
            return;
        let n = {
            timestamp: eD(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: e,
        };
        this._clicks.some((t) => t.node === n.node && 1 > Math.abs(t.timestamp - n.timestamp)) ||
            (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks());
    }
    registerMutation(t = Date.now()) {
        this._lastMutation = eD(t);
    }
    registerScroll(t = Date.now()) {
        this._lastScroll = eD(t);
    }
    registerClick(t) {
        let e = eS(t);
        this._handleMultiClick(e);
    }
    _handleMultiClick(t) {
        this._getClicks(t).forEach((t) => {
            t.clickCount++;
        });
    }
    _getClicks(t) {
        return this._clicks.filter((e) => e.node === t);
    }
    _checkClicks() {
        let t = [],
            e = eG();
        for (let a of (this._clicks.forEach((a) => {
            !a.mutationAfter &&
                this._lastMutation &&
                (a.mutationAfter = a.timestamp <= this._lastMutation ? this._lastMutation - a.timestamp : void 0),
                !a.scrollAfter &&
                    this._lastScroll &&
                    (a.scrollAfter = a.timestamp <= this._lastScroll ? this._lastScroll - a.timestamp : void 0),
                a.timestamp + this._timeout <= e && t.push(a);
        }),
        t)) {
            let t = this._clicks.indexOf(a);
            t > -1 && (this._generateBreadcrumbs(a), this._clicks.splice(t, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(t) {
        let e = this._replay,
            a = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
            r = t.mutationAfter && t.mutationAfter <= this._threshold,
            { clickCount: _, clickBreadcrumb: n } = t;
        if (!a && !r) {
            let a = 1000 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                r = a < 1000 * this._timeout ? "mutation" : "timeout",
                o = {
                    type: "default",
                    message: n.message,
                    timestamp: n.timestamp,
                    category: "ui.slowClickDetected",
                    data: {
                        ...n.data,
                        url: F.location.href,
                        route: e.getCurrentRoute(),
                        timeAfterClickMs: a,
                        endReason: r,
                        clickCount: _ || 1,
                    },
                };
            this._addBreadcrumbEvent(e, o);
            return;
        }
        if (_ > 1) {
            let t = {
                type: "default",
                message: n.message,
                timestamp: n.timestamp,
                category: "ui.multiClick",
                data: {
                    ...n.data,
                    url: F.location.href,
                    route: e.getCurrentRoute(),
                    clickCount: _,
                    metric: !0,
                },
            };
            this._addBreadcrumbEvent(e, t);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
            (this._checkClickTimeout = (0, Y.iK)(() => this._checkClicks(), 1000));
    }
}
let eU = ["A", "BUTTON", "INPUT"];
function eG() {
    return Date.now() / 1000;
}
function eW(t) {
    return {
        timestamp: Date.now() / 1000,
        type: "default",
        ...t,
    };
}
((u = N || (N = {}))[(u.Document = 0)] = "Document"),
    (u[(u.DocumentType = 1)] = "DocumentType"),
    (u[(u.Element = 2)] = "Element"),
    (u[(u.Text = 3)] = "Text"),
    (u[(u.CDATA = 4)] = "CDATA"),
    (u[(u.Comment = 5)] = "Comment");
let eb = new Set([
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
function eM(t, e) {
    let a = eP.mirror.getId(t),
        r = a && eP.mirror.getNode(a),
        _ = r && eP.mirror.getMeta(r),
        n = _ && _.type === N.Element ? _ : null;
    return {
        message: e,
        data: n
            ? {
                  nodeId: a,
                  node: {
                      id: a,
                      tagName: n.tagName,
                      textContent: Array.from(n.childNodes)
                          .map((t) => t.type === N.Text && t.textContent)
                          .filter(Boolean)
                          .map((t) => t.trim())
                          .join(""),
                      attributes: (function (t) {
                          let e = {};
                          for (let a in (!t["data-sentry-component"] &&
                              t["data-sentry-element"] &&
                              (t["data-sentry-component"] = t["data-sentry-element"]),
                          t))
                              if (eb.has(a)) {
                                  let r = a;
                                  ("data-testid" === a || "data-test-id" === a) && (r = "testId"), (e[r] = t[a]);
                              }
                          return e;
                      })(n.attributes),
                  },
              }
            : {},
    };
}
let ew = {
    resource: function (t) {
        let {
            entryType: e,
            initiatorType: a,
            name: r,
            responseEnd: _,
            startTime: n,
            decodedBodySize: o,
            encodedBodySize: i,
            responseStatus: E,
            transferSize: c,
        } = t;
        return ["fetch", "xmlhttprequest"].includes(a)
            ? null
            : {
                  type: `${e}.${a}`,
                  start: eH(n),
                  end: eH(_),
                  name: r,
                  data: {
                      size: c,
                      statusCode: E,
                      decodedBodySize: o,
                      encodedBodySize: i,
                  },
              };
    },
    paint: function (t) {
        let { duration: e, entryType: a, name: r, startTime: _ } = t,
            n = eH(_);
        return {
            type: a,
            name: r,
            start: n,
            end: n + e,
            data: void 0,
        };
    },
    navigation: function (t) {
        let {
            entryType: e,
            name: a,
            decodedBodySize: r,
            duration: _,
            domComplete: n,
            encodedBodySize: o,
            domContentLoadedEventStart: i,
            domContentLoadedEventEnd: E,
            domInteractive: c,
            loadEventStart: s,
            loadEventEnd: l,
            redirectCount: I,
            startTime: R,
            transferSize: u,
            type: A,
        } = t;
        return 0 === _
            ? null
            : {
                  type: `${e}.${A}`,
                  start: eH(R),
                  end: eH(n),
                  name: a,
                  data: {
                      size: u,
                      decodedBodySize: r,
                      encodedBodySize: o,
                      duration: _,
                      domInteractive: c,
                      domContentLoadedEventStart: i,
                      domContentLoadedEventEnd: E,
                      loadEventStart: s,
                      loadEventEnd: l,
                      domComplete: n,
                      redirectCount: I,
                  },
              };
    },
};
function eB(t, e) {
    return ({ metric: a }) => void e.replayPerformanceEntries.push(t(a));
}
function eY(t) {
    let e = ew[t.entryType];
    return e ? e(t) : null;
}
function eH(t) {
    return ((y.Z1 || F.performance.timeOrigin) + t) / 1000;
}
function eK(t) {
    let e = t.entries[t.entries.length - 1];
    return eV(t, "largest-contentful-paint", e && e.element ? [e.element] : void 0);
}
function ek(t) {
    let e = t.entries[t.entries.length - 1],
        a = [];
    if (e && e.sources) for (let t of e.sources) t.node && a.push(t.node);
    return eV(t, "cumulative-layout-shift", a);
}
function ex(t) {
    let e = t.entries[t.entries.length - 1];
    return eV(t, "first-input-delay", e && e.target ? [e.target] : void 0);
}
function eF(t) {
    let e = t.entries[t.entries.length - 1];
    return eV(t, "interaction-to-next-paint", e && e.target ? [e.target] : void 0);
}
function eV(t, e, a) {
    let r = t.value,
        _ = t.rating,
        n = eH(r);
    return {
        type: "web-vital",
        name: e,
        start: n,
        end: n,
        data: {
            value: r,
            size: r,
            rating: _,
            nodeIds: a ? a.map((t) => eP.mirror.getId(t)) : void 0,
        },
    };
}
let ej = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function eX(t, e) {
    ej && (U.kg.info(t), e && eq(t));
}
function e$(t, e) {
    ej &&
        (U.kg.info(t),
        e &&
            (0, Y.iK)(() => {
                eq(t);
            }, 0));
}
function eq(t) {
    (0, f.n)(
        {
            category: "console",
            data: { logger: "replay" },
            level: "info",
            message: t,
        },
        { level: "info" },
    );
}
class ez extends Error {
    constructor() {
        super("Event buffer exceeded maximum size of 20000000.");
    }
}
class eJ {
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
    async addEvent(t) {
        let e = JSON.stringify(t).length;
        if (((this._totalSize += e), this._totalSize > 20000000)) throw new ez();
        this.events.push(t);
    }
    finish() {
        return new Promise((t) => {
            let e = this.events;
            this.clear(), t(JSON.stringify(e));
        });
    }
    clear() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    getEarliestTimestamp() {
        let t = this.events.map((t) => t.timestamp).sort()[0];
        return t ? eC(t) : null;
    }
}
class eQ {
    constructor(t) {
        (this._worker = t), (this._id = 0);
    }
    ensureReady() {
        return (
            this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((t, e) => {
                    this._worker.addEventListener(
                        "message",
                        ({ data: a }) => {
                            a.success ? t() : e();
                        },
                        { once: !0 },
                    ),
                        this._worker.addEventListener(
                            "error",
                            (t) => {
                                e(t);
                            },
                            { once: !0 },
                        );
                })),
            this._ensureReadyPromise
        );
    }
    destroy() {
        eX("[Replay] Destroying compression worker"), this._worker.terminate();
    }
    postMessage(t, e) {
        let a = this._getAndIncrementId();
        return new Promise((r, _) => {
            let n = ({ data: e }) => {
                if (e.method === t && e.id === a) {
                    if ((this._worker.removeEventListener("message", n), !e.success)) {
                        ej && U.kg.error("[Replay]", e.response), _(Error("Error in compression worker"));
                        return;
                    }
                    r(e.response);
                }
            };
            this._worker.addEventListener("message", n),
                this._worker.postMessage({
                    id: a,
                    method: t,
                    arg: e,
                });
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}
class eZ {
    constructor(t) {
        (this._worker = new eQ(t)), (this._earliestTimestamp = null), (this._totalSize = 0), (this.hasCheckout = !1);
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
    addEvent(t) {
        let e = eC(t.timestamp);
        (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
        let a = JSON.stringify(t);
        return ((this._totalSize += a.length), this._totalSize > 20000000)
            ? Promise.reject(new ez())
            : this._sendEventToWorker(a);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage("clear").then(null, (t) => {
                ej && U.kg.warn('[Replay] Sending "clear" message to worker failed', t);
            });
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp;
    }
    _sendEventToWorker(t) {
        return this._worker.postMessage("addEvent", t);
    }
    async _finishRequest() {
        let t = await this._worker.postMessage("finish");
        return (this._earliestTimestamp = null), (this._totalSize = 0), t;
    }
}
class e0 {
    constructor(t) {
        (this._fallback = new eJ()),
            (this._compression = new eZ(t)),
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
    set hasCheckout(t) {
        this._used.hasCheckout = t;
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
    addEvent(t) {
        return this._used.addEvent(t);
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
        } catch (t) {
            eX("[Replay] Failed to load the compression worker, falling back to simple buffer");
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        let { events: t, hasCheckout: e } = this._fallback,
            a = [];
        for (let e of t) a.push(this._compression.addEvent(e));
        (this._compression.hasCheckout = e), (this._used = this._compression);
        try {
            await Promise.all(a);
        } catch (t) {
            ej && U.kg.warn("[Replay] Failed to add events when switching buffers.", t);
        }
    }
}
function e1() {
    try {
        return "sessionStorage" in F && !!F.sessionStorage;
    } catch (t) {
        return !1;
    }
}
function e2(t) {
    return void 0 !== t && Math.random() < t;
}
function e3(t) {
    let e = Date.now(),
        a = t.id || (0, G.DM)(),
        r = t.started || e,
        _ = t.lastActivity || e,
        n = t.segmentId || 0;
    return {
        id: a,
        started: r,
        lastActivity: _,
        segmentId: n,
        sampled: t.sampled,
        previousSessionId: t.previousSessionId,
    };
}
function e6(t) {
    if (e1())
        try {
            F.sessionStorage.setItem(V, JSON.stringify(t));
        } catch (t) {}
}
function e4({ sessionSampleRate: t, allowBuffering: e, stickySession: a = !1 }, { previousSessionId: r } = {}) {
    let _ = e3({
        sampled: e2(t) ? "session" : !!e && "buffer",
        previousSessionId: r,
    });
    return a && e6(_), _;
}
function e5(t, e, a = +new Date()) {
    return null === t || void 0 === e || e < 0 || (0 !== e && t + e <= a);
}
function e8(t, { maxReplayDuration: e, sessionIdleExpire: a, targetTime: r = Date.now() }) {
    return e5(t.started, e, r) || e5(t.lastActivity, a, r);
}
function e7(t, { sessionIdleExpire: e, maxReplayDuration: a }) {
    return (
        !!e8(t, {
            sessionIdleExpire: e,
            maxReplayDuration: a,
        }) &&
        ("buffer" !== t.sampled || 0 !== t.segmentId)
    );
}
function e9({ traceInternals: t, sessionIdleExpire: e, maxReplayDuration: a, previousSessionId: r }, _) {
    let n =
        _.stickySession &&
        (function (t) {
            if (!e1()) return null;
            try {
                let e = F.sessionStorage.getItem(V);
                if (!e) return null;
                let a = JSON.parse(e);
                return e$("[Replay] Loading existing session", t), e3(a);
            } catch (t) {
                return null;
            }
        })(t);
    return n
        ? e7(n, {
              sessionIdleExpire: e,
              maxReplayDuration: a,
          })
            ? (e$("[Replay] Session in sessionStorage is expired, creating new one..."),
              e4(_, { previousSessionId: n.id }))
            : n
        : (e$("[Replay] Creating new session", t), e4(_, { previousSessionId: r }));
}
function at(t, e, a) {
    return !!aa(t, e) && (ae(t, e, a), !0);
}
async function ae(t, e, a) {
    if (!t.eventBuffer) return null;
    try {
        a && "buffer" === t.recordingMode && t.eventBuffer.clear(), a && (t.eventBuffer.hasCheckout = !0);
        let r = t.getOptions(),
            _ = (function (t, e) {
                try {
                    if ("function" == typeof e && t.type === t0.Custom) return e(t);
                } catch (t) {
                    return (
                        ej &&
                            U.kg.error(
                                "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                                t,
                            ),
                        null
                    );
                }
                return t;
            })(e, r.beforeAddRecordingEvent);
        if (!_) return;
        return await t.eventBuffer.addEvent(_);
    } catch (r) {
        let e = r && r instanceof ez ? "addEventSizeExceeded" : "addEvent";
        t.handleException(r), await t.stop({ reason: e });
        let a = (0, L.s3)();
        a && a.recordDroppedEvent("internal_sdk_error", "replay");
    }
}
function aa(t, e) {
    if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
    let a = eC(e.timestamp);
    return (
        !(a + t.timeouts.sessionIdlePause < Date.now()) &&
        (!(a > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration) ||
            (e$(
                `[Replay] Skipping event with timestamp ${a} because it is after maxReplayDuration`,
                t.getOptions()._experiments.traceInternals,
            ),
            !1))
    );
}
function ar(t) {
    return "transaction" === t.type;
}
function a_(t) {
    return "feedback" === t.type;
}
function an(t) {
    return !!t.category;
}
function ao(t, e) {
    return e.map(({ type: e, start: a, end: r, name: _, data: n }) => {
        let o = t.throttledAddEvent({
            type: t0.Custom,
            timestamp: a,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: e,
                    description: _,
                    startTimestamp: a,
                    endTimestamp: r,
                    data: n,
                },
            },
        });
        return "string" == typeof o ? Promise.resolve(null) : o;
    });
}
function ai(t, e) {
    var a;
    t.isEnabled() &&
        null !== e &&
        ((a = e.name),
        ((!ej || !t.getOptions()._experiments.traceInternals) && (0, p.W)(a, (0, L.s3)())) ||
            t.addUpdate(() => (ao(t, [e]), !0)));
}
function aE(t) {
    if (!t) return;
    let e = new TextEncoder();
    try {
        if ("string" == typeof t) return e.encode(t).length;
        if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
        if (t instanceof FormData) {
            let a = aN(t);
            return e.encode(a).length;
        }
        if (t instanceof Blob) return t.size;
        if (t instanceof ArrayBuffer) return t.byteLength;
    } catch (t) {}
}
function ac(t) {
    if (!t) return;
    let e = parseInt(t, 10);
    return isNaN(e) ? void 0 : e;
}
function as(t) {
    try {
        if ("string" == typeof t) return [t];
        if (t instanceof URLSearchParams) return [t.toString()];
        if (t instanceof FormData) return [aN(t)];
        if (!t) return [void 0];
    } catch (e) {
        return ej && U.kg.warn("[Replay] Failed to serialize body", t), [void 0, "BODY_PARSE_ERROR"];
    }
    return ej && U.kg.info("[Replay] Skipping network body because of body type", t), [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function al(t, e) {
    if (!t)
        return {
            headers: {},
            size: void 0,
            _meta: { warnings: [e] },
        };
    let a = { ...t._meta },
        r = a.warnings || [];
    return (a.warnings = [...r, e]), (t._meta = a), t;
}
function aI(t, e) {
    if (!e) return null;
    let { startTimestamp: a, endTimestamp: r, url: _, method: n, statusCode: o, request: i, response: E } = e;
    return {
        type: t,
        start: a / 1000,
        end: r / 1000,
        name: _,
        data: (0, m.Jr)({
            method: n,
            statusCode: o,
            request: i,
            response: E,
        }),
    };
}
function aR(t) {
    return {
        headers: {},
        size: t,
        _meta: { warnings: ["URL_SKIPPED"] },
    };
}
function au(t, e, a) {
    if (!e && 0 === Object.keys(t).length) return;
    if (!e) return { headers: t };
    if (!a)
        return {
            headers: t,
            size: e,
        };
    let r = {
            headers: t,
            size: e,
        },
        { body: _, warnings: n } = (function (t) {
            if (!t || "string" != typeof t) return { body: t };
            let e = t.length > 150000,
                a = (function (t) {
                    let e = t[0],
                        a = t[t.length - 1];
                    return ("[" === e && "]" === a) || ("{" === e && "}" === a);
                })(t);
            if (e) {
                let e = t.slice(0, 150000);
                return a
                    ? {
                          body: e,
                          warnings: ["MAYBE_JSON_TRUNCATED"],
                      }
                    : {
                          body: `${e}…`,
                          warnings: ["TEXT_TRUNCATED"],
                      };
            }
            if (a)
                try {
                    return { body: JSON.parse(t) };
                } catch (t) {}
            return { body: t };
        })(a);
    return (r.body = _), n && n.length > 0 && (r._meta = { warnings: n }), r;
}
function aA(t, e) {
    return Object.entries(t).reduce((a, [r, _]) => {
        let n = r.toLowerCase();
        return e.includes(n) && t[r] && (a[n] = _), a;
    }, {});
}
function aN(t) {
    return new URLSearchParams(t).toString();
}
function aT(t, e) {
    let a = (function (t, e = F.document.baseURI) {
        if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(F.location.origin)) return t;
        let a = new URL(t, e);
        if (a.origin !== new URL(e).origin) return t;
        let r = a.href;
        return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
    })(t);
    return (0, W.U0)(a, e);
}
async function ad(t, e, a) {
    try {
        let r = await af(t, e, a),
            _ = aI("resource.fetch", r);
        ai(a.replay, _);
    } catch (t) {
        ej && U.kg.error("[Replay] Failed to capture fetch breadcrumb", t);
    }
}
async function af(t, e, a) {
    let r = Date.now(),
        { startTimestamp: _ = r, endTimestamp: n = r } = e,
        { url: o, method: i, status_code: E = 0, request_body_size: c, response_body_size: s } = t.data,
        l = aT(o, a.networkDetailAllowUrls) && !aT(o, a.networkDetailDenyUrls);
    return {
        startTimestamp: _,
        endTimestamp: n,
        url: o,
        method: i,
        statusCode: E,
        request: l
            ? (function ({ networkCaptureBodies: t, networkRequestHeaders: e }, a, r) {
                  var _, n;
                  let o = a
                      ? ((_ = a),
                        (n = e),
                        1 === _.length && "string" != typeof _[0] ? aP(_[0], n) : 2 === _.length ? aP(_[1], n) : {})
                      : {};
                  if (!t) return au(o, r, void 0);
                  let [i, E] = as(aO(a)),
                      c = au(o, r, i);
                  return E ? al(c, E) : c;
              })(a, e.input, c)
            : aR(c),
        response: await aL(l, a, e.response, s),
    };
}
async function aL(t, { networkCaptureBodies: e, networkResponseHeaders: a }, r, _) {
    if (!t && void 0 !== _) return aR(_);
    let n = r ? ah(r.headers, a) : {};
    if (!r || (!e && void 0 !== _)) return au(n, _, void 0);
    let [o, i] = await ap(r),
        E = (function (t, { networkCaptureBodies: e, responseBodySize: a, captureDetails: r, headers: _ }) {
            try {
                let n = t && t.length && void 0 === a ? aE(t) : a;
                if (!r) return aR(n);
                if (e) return au(_, n, t);
                return au(_, n, void 0);
            } catch (t) {
                return ej && U.kg.warn("[Replay] Failed to serialize response body", t), au(_, a, void 0);
            }
        })(o, {
            networkCaptureBodies: e,
            responseBodySize: _,
            captureDetails: t,
            headers: n,
        });
    return i ? al(E, i) : E;
}
async function ap(t) {
    let e = (function (t) {
        try {
            return t.clone();
        } catch (t) {
            ej && U.kg.warn("[Replay] Failed to clone response body", t);
        }
    })(t);
    if (!e) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var a;
        return [
            await ((a = e),
            new Promise((t, e) => {
                let r = (0, Y.iK)(() => e(Error("Timeout while trying to read response body")), 500);
                aC(a)
                    .then(
                        (e) => t(e),
                        (t) => e(t),
                    )
                    .finally(() => clearTimeout(r));
            })),
        ];
    } catch (t) {
        return ej && U.kg.warn("[Replay] Failed to get text body from response", t), [void 0, "BODY_PARSE_ERROR"];
    }
}
function aO(t = []) {
    if (2 === t.length && "object" == typeof t[1]) return t[1].body;
}
function ah(t, e) {
    let a = {};
    return (
        e.forEach((e) => {
            t.get(e) && (a[e] = t.get(e));
        }),
        a
    );
}
function aP(t, e) {
    if (!t) return {};
    let a = t.headers;
    return a ? (a instanceof Headers ? ah(a, e) : Array.isArray(a) ? {} : aA(a, e)) : {};
}
async function aC(t) {
    return await t.text();
}
async function aD(t, e, a) {
    try {
        let r = (function (t, e, a) {
                let r = Date.now(),
                    { startTimestamp: _ = r, endTimestamp: n = r, input: o, xhr: i } = e,
                    { url: E, method: c, status_code: s = 0, request_body_size: l, response_body_size: I } = t.data;
                if (!E) return null;
                if (!i || !aT(E, a.networkDetailAllowUrls) || aT(E, a.networkDetailDenyUrls)) {
                    let t = aR(l);
                    return {
                        startTimestamp: _,
                        endTimestamp: n,
                        url: E,
                        method: c,
                        statusCode: s,
                        request: t,
                        response: aR(I),
                    };
                }
                let R = i[K.xU],
                    u = R ? aA(R.request_headers, a.networkRequestHeaders) : {},
                    A = aA(
                        (function (t) {
                            let e = t.getAllResponseHeaders();
                            return e
                                ? e.split("\r\n").reduce((t, e) => {
                                      let [a, r] = e.split(": ");
                                      return r && (t[a.toLowerCase()] = r), t;
                                  }, {})
                                : {};
                        })(i),
                        a.networkResponseHeaders,
                    ),
                    [N, T] = a.networkCaptureBodies ? as(o) : [void 0],
                    [d, f] = a.networkCaptureBodies
                        ? (function (t) {
                              let e = [];
                              try {
                                  return [t.responseText];
                              } catch (t) {
                                  e.push(t);
                              }
                              try {
                                  var a = t.response,
                                      r = t.responseType;
                                  try {
                                      if ("string" == typeof a) return [a];
                                      if (a instanceof Document) return [a.body.outerHTML];
                                      if ("json" === r && a && "object" == typeof a) return [JSON.stringify(a)];
                                      if (!a) return [void 0];
                                  } catch (t) {
                                      return (
                                          ej && U.kg.warn("[Replay] Failed to serialize body", a),
                                          [void 0, "BODY_PARSE_ERROR"]
                                      );
                                  }
                                  return (
                                      ej && U.kg.info("[Replay] Skipping network body because of body type", a),
                                      [void 0, "UNPARSEABLE_BODY_TYPE"]
                                  );
                              } catch (t) {
                                  e.push(t);
                              }
                              return ej && U.kg.warn("[Replay] Failed to get xhr response body", ...e), [void 0];
                          })(i)
                        : [void 0],
                    L = au(u, l, N),
                    p = au(A, I, d);
                return {
                    startTimestamp: _,
                    endTimestamp: n,
                    url: E,
                    method: c,
                    statusCode: s,
                    request: T ? al(L, T) : L,
                    response: f ? al(p, f) : p,
                };
            })(t, e, a),
            _ = aI("resource.xhr", r);
        ai(a.replay, _);
    } catch (t) {
        ej && U.kg.error("[Replay] Failed to capture xhr breadcrumb", t);
    }
}
async function ag(t) {
    try {
        return Promise.all(
            ao(t, [
                (function (t) {
                    let { jsHeapSizeLimit: e, totalJSHeapSize: a, usedJSHeapSize: r } = t,
                        _ = Date.now() / 1000;
                    return {
                        type: "memory",
                        name: "memory",
                        start: _,
                        end: _,
                        data: {
                            memory: {
                                jsHeapSizeLimit: e,
                                totalJSHeapSize: a,
                                usedJSHeapSize: r,
                            },
                        },
                    };
                })(F.performance.memory),
            ]),
        );
    } catch (t) {
        return [];
    }
}
async function aS({ client: t, scope: e, replayId: a, event: r }) {
    let _ = {
        event_id: a,
        integrations:
            "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations)
                ? void 0
                : Object.keys(t._integrations),
    };
    t.emit("preprocessEvent", r, _);
    let n = await (0, h.R)(t.getOptions(), r, _, e, t, (0, L.aF)());
    if (!n) return null;
    n.platform = n.platform || "javascript";
    let o = t.getSdkMetadata(),
        { name: i, version: E } = (o && o.sdk) || {};
    return (
        (n.sdk = {
            ...n.sdk,
            name: i || "sentry.javascript.unknown",
            version: E || "0.0.0",
        }),
        n
    );
}
async function am({ recordingData: t, replayId: e, segmentId: a, eventContext: r, timestamp: _, session: n }) {
    var o;
    let i,
        E = (function ({ recordingData: t, headers: e }) {
            let a,
                r = `${JSON.stringify(e)}
`;
            if ("string" == typeof t) a = `${r}${t}`;
            else {
                let e = new TextEncoder().encode(r);
                (a = new Uint8Array(e.length + t.length)).set(e), a.set(t, e.length);
            }
            return a;
        })({
            recordingData: t,
            headers: { segment_id: a },
        }),
        { urls: c, errorIds: s, traceIds: l, initialTimestamp: I } = r,
        R = (0, L.s3)(),
        u = (0, L.nZ)(),
        A = R && R.getTransport(),
        N = R && R.getDsn();
    if (!R || !A || !N || !n.sampled) return (0, M.WD)({});
    let T = {
            type: "replay_event",
            replay_start_timestamp: I / 1000,
            timestamp: _ / 1000,
            error_ids: s,
            trace_ids: l,
            urls: c,
            replay_id: e,
            segment_id: a,
            replay_type: n.sampled,
        },
        d = await aS({
            scope: u,
            client: R,
            replayId: e,
            event: T,
        });
    if (!d)
        return (
            R.recordDroppedEvent("event_processor", "replay", T),
            eX("An event processor returned `null`, will not send event."),
            (0, M.WD)({})
        );
    delete d.sdkProcessingMetadata;
    let f =
        ((o = R.getOptions().tunnel),
        (0, b.Jd)((0, b.Cd)(d, (0, b.HY)(d), o, N), [
            [{ type: "replay_event" }, d],
            [
                {
                    type: "replay_recording",
                    length: "string" == typeof E ? new TextEncoder().encode(E).length : E.length,
                },
                E,
            ],
        ]));
    try {
        i = await A.send(f);
    } catch (e) {
        let t = Error(j);
        try {
            t.cause = e;
        } catch (t) {}
        throw t;
    }
    if ("number" == typeof i.statusCode && (i.statusCode < 200 || i.statusCode >= 300)) throw new av(i.statusCode);
    let p = (0, w.WG)({}, i);
    if ((0, w.Q)(p, "replay")) throw new ay(p);
    return i;
}
class av extends Error {
    constructor(t) {
        super(`Transport returned status code ${t}`);
    }
}
class ay extends Error {
    constructor(t) {
        super("Rate limit hit"), (this.rateLimits = t);
    }
}
async function aU(
    t,
    e = {
        count: 0,
        interval: 5000,
    },
) {
    let { recordingData: a, options: r } = t;
    if (a.length)
        try {
            return await am(t), !0;
        } catch (a) {
            if (a instanceof av || a instanceof ay) throw a;
            if (
                ((0, O.v)("Replays", { _retryCount: e.count }),
                ej && r._experiments && r._experiments.captureExceptions && (0, O.Tb)(a),
                e.count >= 3)
            ) {
                let t = Error(`${j} - max retries exceeded`);
                try {
                    t.cause = a;
                } catch (t) {}
                throw t;
            }
            return (
                (e.interval *= ++e.count),
                new Promise((a, r) => {
                    (0, Y.iK)(async () => {
                        try {
                            await aU(t, e), a(!0);
                        } catch (t) {
                            r(t);
                        }
                    }, e.interval);
                })
            );
        }
}
let aG = "__THROTTLED";
class aW {
    constructor({ options: t, recordingOptions: e }) {
        aW.prototype.__init.call(this),
            aW.prototype.__init2.call(this),
            aW.prototype.__init3.call(this),
            aW.prototype.__init4.call(this),
            aW.prototype.__init5.call(this),
            aW.prototype.__init6.call(this),
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
            (this._recordingOptions = e),
            (this._options = t),
            (this._debouncedFlush = (function (t, e, a) {
                let r,
                    _,
                    n,
                    o = a && a.maxWait ? Math.max(a.maxWait, e) : 0;
                function i() {
                    return E(), (r = t());
                }
                function E() {
                    void 0 !== _ && clearTimeout(_), void 0 !== n && clearTimeout(n), (_ = n = void 0);
                }
                function c() {
                    return _ && clearTimeout(_), (_ = (0, Y.iK)(i, e)), o && void 0 === n && (n = (0, Y.iK)(i, o)), r;
                }
                return (
                    (c.cancel = E),
                    (c.flush = function () {
                        return void 0 !== _ || void 0 !== n ? i() : r;
                    }),
                    c
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (t, e, a) {
                let r = new Map(),
                    _ = !1;
                return (...e) => {
                    let a = Math.floor(Date.now() / 1000),
                        n = a - 5;
                    if (
                        (r.forEach((t, e) => {
                            e < n && r.delete(e);
                        }),
                        [...r.values()].reduce((t, e) => t + e, 0) >= 300)
                    ) {
                        let t = _;
                        return (_ = !0), t ? "__SKIPPED" : aG;
                    }
                    _ = !1;
                    let o = r.get(a) || 0;
                    return r.set(a, o + 1), t(...e);
                };
            })(
                (t, e) =>
                    (function (t, e, a) {
                        return aa(t, e) ? ae(t, e, a) : Promise.resolve(null);
                    })(this, t, e),
                0,
                0,
            ));
        let { slowClickTimeout: a, slowClickIgnoreSelectors: r } = this.getOptions(),
            _ = a
                ? {
                      threshold: Math.min(3000, a),
                      timeout: a,
                      scrollTimeout: 300,
                      ignoreSelector: r ? r.join(",") : "",
                  }
                : void 0;
        _ && (this.clickDetector = new ey(this, _));
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
    handleException(t) {
        ej && U.kg.error("[Replay]", t),
            ej && this._options._experiments && this._options._experiments.captureExceptions && (0, O.Tb)(t);
    }
    initializeSampling(t) {
        let { errorSampleRate: e, sessionSampleRate: a } = this._options,
            r = e <= 0 && a <= 0;
        if (((this._requiresManualStart = r), !r)) {
            if ((this._initializeSessionForSampling(t), !this.session))
                return void this.handleException(Error("Unable to initialize and create session"));
            !1 !== this.session.sampled &&
                ((this.recordingMode =
                    "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session"),
                e$(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals),
                this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && "session" === this.recordingMode) {
            ej && U.kg.info("[Replay] Recording is already in progress");
            return;
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
            ej && U.kg.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        e$("[Replay] Starting replay in session mode", this._options._experiments.traceInternals),
            this._updateUserActivity();
        let t = e9(
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
        (this.session = t), this._initializeRecording();
    }
    startBuffering() {
        if (this._isEnabled) {
            ej && U.kg.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        e$("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
        let t = e9(
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
        (this.session = t), (this.recordingMode = "buffer"), this._initializeRecording();
    }
    startRecording() {
        try {
            var t;
            let e,
                a = this._canvas;
            this._stopRecording = eP({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode && { checkoutEveryNms: 60000 }),
                emit:
                    ((t = this),
                    (e = !1),
                    (a, r) => {
                        if (!t.checkAndHandleExpiredSession()) {
                            ej && U.kg.warn("[Replay] Received replay event after session expired.");
                            return;
                        }
                        let _ = r || !e;
                        (e = !0),
                            t.clickDetector &&
                                (function (t, e) {
                                    try {
                                        var a;
                                        if (((a = e), 3 !== a.type)) return;
                                        let { source: r } = e.data;
                                        if (
                                            (r === t1.Mutation && t.registerMutation(e.timestamp),
                                            r === t1.Scroll && t.registerScroll(e.timestamp),
                                            e.data.source === t1.MouseInteraction)
                                        ) {
                                            let { type: a, id: r } = e.data,
                                                _ = eP.mirror.getNode(r);
                                            _ instanceof HTMLElement && a === t2.Click && t.registerClick(_);
                                        }
                                    } catch (t) {}
                                })(t.clickDetector, a),
                            t.addUpdate(() => {
                                var e;
                                if (("buffer" === t.recordingMode && _ && t.setInitialState(), !at(t, a, _))) return !0;
                                if (!_) return !1;
                                if (
                                    ((e = t),
                                    _ &&
                                        e.session &&
                                        0 === e.session.segmentId &&
                                        at(
                                            e,
                                            (function (t) {
                                                let e = t.getOptions();
                                                return {
                                                    type: t0.Custom,
                                                    timestamp: Date.now(),
                                                    data: {
                                                        tag: "options",
                                                        payload: {
                                                            shouldRecordCanvas: t.isRecordingCanvas(),
                                                            sessionSampleRate: e.sessionSampleRate,
                                                            errorSampleRate: e.errorSampleRate,
                                                            useCompressionOption: e.useCompression,
                                                            blockAllMedia: e.blockAllMedia,
                                                            maskAllText: e.maskAllText,
                                                            maskAllInputs: e.maskAllInputs,
                                                            useCompression:
                                                                !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                                            networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                                            networkCaptureBodies: e.networkCaptureBodies,
                                                            networkRequestHasHeaders:
                                                                e.networkRequestHeaders.length > 0,
                                                            networkResponseHasHeaders:
                                                                e.networkResponseHeaders.length > 0,
                                                        },
                                                    },
                                                };
                                            })(e),
                                            !1,
                                        ),
                                    t.session && t.session.previousSessionId)
                                )
                                    return !0;
                                if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                                    let e = t.eventBuffer.getEarliestTimestamp();
                                    e &&
                                        (eX(
                                            `[Replay] Updating session start time to earliest event in buffer to ${new Date(e)}`,
                                            t.getOptions()._experiments.traceInternals,
                                        ),
                                        (t.session.started = e),
                                        t.getOptions().stickySession && e6(t.session));
                                }
                                return "session" === t.recordingMode && t.flush(), !0;
                            });
                    }),
                onMutation: this._onMutationHandler,
                ...(a
                    ? {
                          recordCanvas: a.recordCanvas,
                          getCanvasManager: a.getCanvasManager,
                          sampling: a.sampling,
                          dataURLOptions: a.dataURLOptions,
                      }
                    : {}),
            });
        } catch (t) {
            this.handleException(t);
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), (this._stopRecording = void 0)), !0;
        } catch (t) {
            return this.handleException(t), !1;
        }
    }
    async stop({ forceFlush: t = !1, reason: e } = {}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                eX(
                    `[Replay] Stopping Replay${e ? ` triggered by ${e}` : ""}`,
                    this._options._experiments.traceInternals,
                ),
                    this._removeListeners(),
                    this.stopRecording(),
                    this._debouncedFlush.cancel(),
                    t && (await this._flush({ force: !0 })),
                    this.eventBuffer && this.eventBuffer.destroy(),
                    (this.eventBuffer = null),
                    (function () {
                        if (e1())
                            try {
                                F.sessionStorage.removeItem(V);
                            } catch (t) {}
                    })(),
                    (this.session = void 0);
            } catch (t) {
                this.handleException(t);
            }
        }
    }
    pause() {
        this._isPaused ||
            ((this._isPaused = !0),
            this.stopRecording(),
            eX("[Replay] Pausing replay", this._options._experiments.traceInternals));
    }
    resume() {
        this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1),
            this.startRecording(),
            eX("[Replay] Resuming replay", this._options._experiments.traceInternals));
    }
    async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let e = Date.now();
        eX("[Replay] Converting buffer to session", this._options._experiments.traceInternals),
            await this.flushImmediate();
        let a = this.stopRecording();
        t &&
            a &&
            "session" !== this.recordingMode &&
            ((this.recordingMode = "session"),
            this.session && (this._updateUserActivity(e), this._updateSessionActivity(e), this._maybeSaveSession()),
            this.startRecording());
    }
    addUpdate(t) {
        let e = t();
        "buffer" !== this.recordingMode && !0 !== e && this._debouncedFlush();
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
            e5(this._lastActivity, this.timeouts.sessionIdlePause) &&
            this.session &&
            "session" === this.session.sampled
            ? void this.pause()
            : !!this._checkSession();
    }
    setInitialState() {
        let t = `${F.location.pathname}${F.location.hash}${F.location.search}`,
            e = `${F.location.origin}${t}`;
        (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            this._clearContext(),
            (this._context.initialUrl = e),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(e);
    }
    throttledAddEvent(t, e) {
        let a = this._throttledAddEvent(t, e);
        if (a === aG) {
            let t = eW({ category: "replay.throttled" });
            this.addUpdate(
                () =>
                    !at(this, {
                        type: 5,
                        timestamp: t.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: t,
                            metric: !0,
                        },
                    }),
            );
        }
        return a;
    }
    getCurrentRoute() {
        let t = this.lastActiveSpan || (0, P.HN)(),
            e = t && (0, P.Gx)(t),
            a = ((e && (0, P.XU)(e).data) || {})[C.Zj];
        if (e && a && ["route", "custom"].includes(a)) return (0, P.XU)(e).description;
    }
    _initializeRecording() {
        this.setInitialState(),
            this._updateSessionActivity(),
            (this.eventBuffer = (function ({ useCompression: t, workerUrl: e }) {
                if (t && window.Worker) {
                    let t = (function (t) {
                        try {
                            let e =
                                t ||
                                (function () {
                                    if (
                                        "undefined" == typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ ||
                                        !__SENTRY_EXCLUDE_REPLAY_WORKER__
                                    ) {
                                        let t = new Blob([
                                            'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                                        ]);
                                        return URL.createObjectURL(t);
                                    }
                                    return "";
                                })();
                            if (!e) return;
                            eX(`[Replay] Using compression worker${t ? ` from ${t}` : ""}`);
                            let a = new Worker(e);
                            return new e0(a);
                        } catch (t) {
                            eX("[Replay] Failed to create compression worker");
                        }
                    })(e);
                    if (t) return t;
                }
                return eX("[Replay] Using simple buffer"), new eJ();
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
    _initializeSessionForSampling(t) {
        let e = this._options.errorSampleRate > 0,
            a = e9(
                {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: t,
                },
                {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: e,
                },
            );
        this.session = a;
    }
    _checkSession() {
        if (!this.session) return !1;
        let t = this.session;
        return (
            !e7(t, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
            }) || (this._refreshSession(t), !1)
        );
    }
    async _refreshSession(t) {
        this._isEnabled && (await this.stop({ reason: "refresh session" }), this.initializeSampling(t.id));
    }
    _addListeners() {
        try {
            F.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                F.addEventListener("blur", this._handleWindowBlur),
                F.addEventListener("focus", this._handleWindowFocus),
                F.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                    (!(function (t) {
                        let e = (0, L.s3)();
                        (0, k.O)((e) => {
                            var a, r;
                            if (!t.isEnabled()) return;
                            let _ = (function (t) {
                                let { target: e, message: a } = (function (t) {
                                    let e,
                                        a = "click" === t.name,
                                        r = null;
                                    try {
                                        (r = a ? em(t.event) : ev(t.event)),
                                            (e = (0, v.Rt)(r, { maxStringLength: 200 }) || "<unknown>");
                                    } catch (t) {
                                        e = "<unknown>";
                                    }
                                    return {
                                        target: r,
                                        message: e,
                                    };
                                })(t);
                                return eW({
                                    category: `ui.${t.name}`,
                                    ...eM(e, a),
                                });
                            })(e);
                            if (!_) return;
                            let n = "click" === e.name,
                                o = n ? e.event : void 0;
                            n &&
                                t.clickDetector &&
                                o &&
                                o.target &&
                                !o.altKey &&
                                !o.metaKey &&
                                !o.ctrlKey &&
                                !o.shiftKey &&
                                ((a = t.clickDetector), (r = em(e.event)), a.handleClick(_, r)),
                                eg(t, _);
                        }),
                            (0, x.a)((e) => {
                                if (!t.isEnabled()) return;
                                let a = (function (t) {
                                    let { from: e, to: a } = t,
                                        r = Date.now() / 1000;
                                    return {
                                        type: "navigation.push",
                                        start: r,
                                        end: r,
                                        name: a,
                                        data: { previous: e },
                                    };
                                })(e);
                                null !== a &&
                                    (t.getContext().urls.push(a.name),
                                    t.triggerUserActivity(),
                                    t.addUpdate(() => (ao(t, [a]), !1)));
                            });
                        let a = (0, L.s3)();
                        a &&
                            a.on("beforeAddBreadcrumb", (e) =>
                                (function (t, e) {
                                    var a;
                                    if (!t.isEnabled() || !an(e)) return;
                                    let r =
                                        ((a = e),
                                        !an(a) ||
                                        ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(a.category) ||
                                        a.category.startsWith("ui.")
                                            ? null
                                            : "console" === a.category
                                              ? (function (t) {
                                                    let e = t.data && t.data.arguments;
                                                    if (!Array.isArray(e) || 0 === e.length) return eW(t);
                                                    let a = !1,
                                                        r = e.map((t) => {
                                                            if (!t) return t;
                                                            if ("string" == typeof t)
                                                                return t.length > 5000
                                                                    ? ((a = !0), `${t.slice(0, 5000)}…`)
                                                                    : t;
                                                            if ("object" == typeof t)
                                                                try {
                                                                    let e = (0, S.Fv)(t, 7);
                                                                    if (JSON.stringify(e).length > 5000)
                                                                        return (
                                                                            (a = !0),
                                                                            `${JSON.stringify(e, null, 2).slice(0, 5000)}…`
                                                                        );
                                                                    return e;
                                                                } catch (t) {}
                                                            return t;
                                                        });
                                                    return eW({
                                                        ...t,
                                                        data: {
                                                            ...t.data,
                                                            arguments: r,
                                                            ...(a
                                                                ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                                                                : {}),
                                                        },
                                                    });
                                                })(a)
                                              : eW(a));
                                    r && eg(t, r);
                                })(t, e),
                            );
                        let r = (0, L.s3)();
                        try {
                            let {
                                    networkDetailAllowUrls: e,
                                    networkDetailDenyUrls: a,
                                    networkCaptureBodies: _,
                                    networkRequestHeaders: n,
                                    networkResponseHeaders: o,
                                } = t.getOptions(),
                                i = {
                                    replay: t,
                                    networkDetailAllowUrls: e,
                                    networkDetailDenyUrls: a,
                                    networkCaptureBodies: _,
                                    networkRequestHeaders: n,
                                    networkResponseHeaders: o,
                                };
                            r &&
                                r.on("beforeAddBreadcrumb", (t, e) =>
                                    (function (t, e, a) {
                                        if (e.data)
                                            try {
                                                var r, _, n, o;
                                                if (
                                                    ((r = e),
                                                    "xhr" === r.category &&
                                                        (_ = a) &&
                                                        _.xhr &&
                                                        (!(function (t, e) {
                                                            let { xhr: a, input: r } = e;
                                                            if (!a) return;
                                                            let _ = aE(r),
                                                                n = a.getResponseHeader("content-length")
                                                                    ? ac(a.getResponseHeader("content-length"))
                                                                    : (function (t, e) {
                                                                          try {
                                                                              let a =
                                                                                  "json" === e &&
                                                                                  t &&
                                                                                  "object" == typeof t
                                                                                      ? JSON.stringify(t)
                                                                                      : t;
                                                                              return aE(a);
                                                                          } catch (t) {
                                                                              return;
                                                                          }
                                                                      })(a.response, a.responseType);
                                                            void 0 !== _ && (t.data.request_body_size = _),
                                                                void 0 !== n && (t.data.response_body_size = n);
                                                        })(e, a),
                                                        aD(e, a, t)),
                                                    (n = e),
                                                    "fetch" === n.category && (o = a) && o.response)
                                                ) {
                                                    let { input: r, response: _ } = a,
                                                        n = aE(r ? aO(r) : void 0),
                                                        o = _ ? ac(_.headers.get("content-length")) : void 0;
                                                    void 0 !== n && (e.data.request_body_size = n),
                                                        void 0 !== o && (e.data.response_body_size = o),
                                                        ad(e, a, t);
                                                }
                                            } catch (t) {
                                                ej && U.kg.warn("Error when enriching network breadcrumb");
                                            }
                                    })(i, t, e),
                                );
                        } catch (t) {}
                        let _ = Object.assign(
                            (e, a) =>
                                t.isEnabled()
                                    ? "replay_event" === e.type
                                        ? (delete e.breadcrumbs, e)
                                        : (!e.type || ar(e) || a_(e)) && t.checkAndHandleExpiredSession()
                                          ? a_(e)
                                              ? (t.flush(),
                                                (e.contexts.feedback.replay_id = t.getSessionId()),
                                                t.triggerUserActivity(),
                                                t.addUpdate(
                                                    () =>
                                                        !e.timestamp ||
                                                        (t.throttledAddEvent({
                                                            type: t0.Custom,
                                                            timestamp: 1000 * e.timestamp,
                                                            data: {
                                                                tag: "breadcrumb",
                                                                payload: {
                                                                    timestamp: e.timestamp,
                                                                    type: "default",
                                                                    category: "sentry.feedback",
                                                                    data: { feedbackId: e.event_id },
                                                                },
                                                            },
                                                        }),
                                                        !1),
                                                ),
                                                e)
                                              : !e.type &&
                                                  e.exception &&
                                                  e.exception.values &&
                                                  e.exception.values.length &&
                                                  a.originalException &&
                                                  a.originalException.__rrweb__ &&
                                                  !t.getOptions()._experiments.captureExceptions
                                                ? (ej && U.kg.log("[Replay] Ignoring error from rrweb internals", e),
                                                  null)
                                                : ((("buffer" === t.recordingMode &&
                                                      e.message !== j &&
                                                      e.exception &&
                                                      !e.type &&
                                                      e2(t.getOptions().errorSampleRate)) ||
                                                      "session" === t.recordingMode) &&
                                                      (e.tags = {
                                                          ...e.tags,
                                                          replayId: t.getSessionId(),
                                                      }),
                                                  e)
                                          : e
                                    : e,
                            { id: "Replay" },
                        );
                        (0, O.Qy)(_),
                            e &&
                                (e.on("beforeSendEvent", (e) => {
                                    t.isEnabled() &&
                                        !e.type &&
                                        (function (t, e) {
                                            let a =
                                                e.exception &&
                                                e.exception.values &&
                                                e.exception.values[0] &&
                                                e.exception.values[0].value;
                                            "string" == typeof a &&
                                                (a.match(
                                                    /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                                                ) ||
                                                    a.match(
                                                        /(does not match server-rendered HTML|Hydration failed because)/i,
                                                    )) &&
                                                eg(
                                                    t,
                                                    eW({
                                                        category: "replay.hydrate-error",
                                                        data: { url: (0, v.l4)() },
                                                    }),
                                                );
                                        })(t, e);
                                }),
                                e.on("afterSendEvent", (e, a) => {
                                    if (!t.isEnabled() || (e.type && !ar(e))) return;
                                    let r = a && a.statusCode;
                                    if (r && !(r < 200) && !(r >= 300)) {
                                        if (ar(e))
                                            return void (function (t, e) {
                                                let a = t.getContext();
                                                e.contexts &&
                                                    e.contexts.trace &&
                                                    e.contexts.trace.trace_id &&
                                                    a.traceIds.size < 100 &&
                                                    a.traceIds.add(e.contexts.trace.trace_id);
                                            })(t, e);
                                        !(function (t, e) {
                                            let a = t.getContext();
                                            if (
                                                (e.event_id && a.errorIds.size < 100 && a.errorIds.add(e.event_id),
                                                "buffer" !== t.recordingMode || !e.tags || !e.tags.replayId)
                                            )
                                                return;
                                            let { beforeErrorSampling: r } = t.getOptions();
                                            ("function" != typeof r || r(e)) &&
                                                (0, Y.iK)(() => {
                                                    t.sendBufferedReplayOrFlush();
                                                });
                                        })(t, e);
                                    }
                                }),
                                e.on("createDsc", (e) => {
                                    let a = t.getSessionId();
                                    a &&
                                        t.isEnabled() &&
                                        "session" === t.recordingMode &&
                                        t.checkAndHandleExpiredSession() &&
                                        (e.replay_id = a);
                                }),
                                e.on("spanStart", (e) => {
                                    t.lastActiveSpan = e;
                                }),
                                e.on("spanEnd", (e) => {
                                    t.lastActiveSpan = e;
                                }),
                                e.on("beforeSendFeedback", (e, a) => {
                                    let r = t.getSessionId();
                                    a &&
                                        a.includeReplay &&
                                        t.isEnabled() &&
                                        r &&
                                        e.contexts &&
                                        e.contexts.feedback &&
                                        (e.contexts.feedback.replay_id = r);
                                }));
                    })(this),
                    (this._hasInitializedCoreListeners = !0));
        } catch (t) {
            this.handleException(t);
        }
        this._performanceCleanupCallback = (function (t) {
            function e(e) {
                t.performanceEntries.includes(e) || t.performanceEntries.push(e);
            }
            function a({ entries: t }) {
                t.forEach(e);
            }
            let r = [];
            return (
                ["navigation", "paint", "resource"].forEach((t) => {
                    r.push((0, H._j)(t, a));
                }),
                r.push((0, H.$A)(eB(eK, t)), (0, H.PR)(eB(ek, t)), (0, H.to)(eB(ex, t)), (0, H.YF)(eB(eF, t))),
                () => {
                    r.forEach((t) => t());
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
        } catch (t) {
            this.handleException(t);
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
            let t = eW({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(t);
        };
    }
    __init3() {
        this._handleWindowFocus = () => {
            let t = eW({ category: "ui.focus" });
            this._doChangeToForegroundTasks(t);
        };
    }
    __init4() {
        this._handleKeyboardEvent = (t) => {
            !(function (t, e) {
                if (!t.isEnabled()) return;
                t.updateUserActivity();
                let a = (function (t) {
                    var e;
                    let { metaKey: a, shiftKey: r, ctrlKey: _, altKey: n, key: o, target: i } = t;
                    if (!i || "INPUT" === (e = i).tagName || "TEXTAREA" === e.tagName || e.isContentEditable || !o)
                        return null;
                    let E = a || _ || n,
                        c = 1 === o.length;
                    if (!E && c) return null;
                    let s = (0, v.Rt)(i, { maxStringLength: 200 }) || "<unknown>",
                        l = eM(i, s);
                    return eW({
                        category: "ui.keyDown",
                        message: s,
                        data: {
                            ...l.data,
                            metaKey: a,
                            shiftKey: r,
                            ctrlKey: _,
                            altKey: n,
                            key: o,
                        },
                    });
                })(e);
                a && eg(t, a);
            })(this, t);
        };
    }
    _doChangeToBackgroundTasks(t) {
        this.session &&
            (e8(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
            }) ||
                (t && this._createCustomBreadcrumb(t), this.conditionalFlush()));
    }
    _doChangeToForegroundTasks(t) {
        if (this.session) {
            if (!this.checkAndHandleExpiredSession())
                return void eX("[Replay] Document has become active, but session has expired");
            t && this._createCustomBreadcrumb(t);
        }
    }
    _updateUserActivity(t = Date.now()) {
        this._lastActivity = t;
    }
    _updateSessionActivity(t = Date.now()) {
        this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
    }
    _createCustomBreadcrumb(t) {
        this.addUpdate(() => {
            this.throttledAddEvent({
                type: t0.Custom,
                timestamp: t.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: t,
                },
            });
        });
    }
    _addPerformanceEntries() {
        let t = this.performanceEntries.map(eY).filter(Boolean).concat(this.replayPerformanceEntries);
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(ao(this, t));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
    }
    _updateInitialTimestampFromEventBuffer() {
        let { session: t, eventBuffer: e } = this;
        if (!t || !e || this._requiresManualStart || t.segmentId) return;
        let a = e.getEarliestTimestamp();
        a && a < this._context.initialTimestamp && (this._context.initialTimestamp = a);
    }
    _popEventContext() {
        let t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls,
        };
        return this._clearContext(), t;
    }
    async _runFlush() {
        let t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            ej && U.kg.error("[Replay] No session or eventBuffer found to flush.");
            return;
        }
        if ((await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents)) {
            if ((await ag(this), this.eventBuffer) && t === this.getSessionId())
                try {
                    this._updateInitialTimestampFromEventBuffer();
                    let e = Date.now();
                    if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 30000)
                        throw Error("Session is too long, not sending replay");
                    let a = this._popEventContext(),
                        r = this.session.segmentId++;
                    this._maybeSaveSession();
                    let _ = await this.eventBuffer.finish();
                    await aU({
                        replayId: t,
                        recordingData: _,
                        segmentId: r,
                        eventContext: a,
                        session: this.session,
                        options: this.getOptions(),
                        timestamp: e,
                    });
                } catch (e) {
                    this.handleException(e), this.stop({ reason: "sendReplay" });
                    let t = (0, L.s3)();
                    t && t.recordDroppedEvent("send_error", "replay");
                }
        }
    }
    __init5() {
        this._flush = async ({ force: t = !1 } = {}) => {
            if (!this._isEnabled && !t) return;
            if (!this.checkAndHandleExpiredSession()) {
                ej && U.kg.error("[Replay] Attempting to finish replay event after session expired.");
                return;
            }
            if (!this.session) return;
            let e = this.session.started,
                a = Date.now() - e;
            this._debouncedFlush.cancel();
            let r = a < this._options.minReplayDuration,
                _ = a > this._options.maxReplayDuration + 5000;
            if (r || _) {
                eX(
                    `[Replay] Session duration (${Math.floor(a / 1000)}s) is too ${r ? "short" : "long"}, not sending replay.`,
                    this._options._experiments.traceInternals,
                ),
                    r && this._debouncedFlush();
                return;
            }
            let n = this.eventBuffer;
            if (
                (n &&
                    0 === this.session.segmentId &&
                    !n.hasCheckout &&
                    eX(
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
            } catch (t) {
                ej && U.kg.error(t);
            } finally {
                this._debouncedFlush();
            }
        };
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && e6(this.session);
    }
    __init6() {
        this._onMutationHandler = (t) => {
            let e = t.length,
                a = this._options.mutationLimit,
                r = this._options.mutationBreadcrumbLimit,
                _ = a && e > a;
            if (e > r || _) {
                let t = eW({
                    category: "replay.mutations",
                    data: {
                        count: e,
                        limit: _,
                    },
                });
                this._createCustomBreadcrumb(t);
            }
            return (
                !_ ||
                (this.stop({
                    reason: "mutationLimit",
                    forceFlush: "session" === this.recordingMode,
                }),
                !1)
            );
        };
    }
}
function ab(t, e) {
    return [...t, ...e].join(",");
}
let aM = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    aw = ["content-length", "content-type", "accept"],
    aB = !1,
    aY = (t) => new aH(t);
class aH {
    static __initStatic() {
        this.id = "Replay";
    }
    constructor({
        flushMinDelay: t = 5000,
        flushMaxDelay: e = 5500,
        minReplayDuration: a = 4999,
        maxReplayDuration: r = 3600000,
        stickySession: _ = !0,
        useCompression: n = !0,
        workerUrl: o,
        _experiments: i = {},
        maskAllText: E = !0,
        maskAllInputs: c = !0,
        blockAllMedia: s = !0,
        mutationBreadcrumbLimit: l = 750,
        mutationLimit: I = 10000,
        slowClickTimeout: R = 7000,
        slowClickIgnoreSelectors: u = [],
        networkDetailAllowUrls: A = [],
        networkDetailDenyUrls: N = [],
        networkCaptureBodies: T = !0,
        networkRequestHeaders: d = [],
        networkResponseHeaders: f = [],
        mask: L = [],
        maskAttributes: p = ["title", "placeholder"],
        unmask: O = [],
        block: h = [],
        unblock: P = [],
        ignore: C = [],
        maskFn: D,
        beforeAddRecordingEvent: g,
        beforeErrorSampling: S,
    } = {}) {
        this.name = aH.id;
        let m = (function ({ mask: t, unmask: e, block: a, unblock: r, ignore: _ }) {
            return {
                maskTextSelector: ab(t, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: ab(e, []),
                blockSelector: ab(a, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                unblockSelector: ab(r, []),
                ignoreSelector: ab(_, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]']),
            };
        })({
            mask: L,
            unmask: O,
            block: h,
            unblock: P,
            ignore: C,
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: E,
                maskInputOptions: { password: !0 },
                maskTextFn: D,
                maskInputFn: D,
                maskAttributeFn: (t, e, a) =>
                    (function ({ el: t, key: e, maskAttributes: a, maskAllText: r, privacyOptions: _, value: n }) {
                        return !r || (_.unmaskTextSelector && t.matches(_.unmaskTextSelector))
                            ? n
                            : a.includes(e) ||
                                ("value" === e &&
                                    "INPUT" === t.tagName &&
                                    ["submit", "button"].includes(t.getAttribute("type") || ""))
                              ? n.replace(/[\S]/g, "*")
                              : n;
                    })({
                        maskAttributes: p,
                        maskAllText: E,
                        privacyOptions: m,
                        key: t,
                        value: e,
                        el: a,
                    }),
                ...m,
                slimDOMOptions: "all",
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: (t) => {
                    try {
                        t.__rrweb__ = !0;
                    } catch (t) {}
                },
            }),
            (this._initialOptions = {
                flushMinDelay: t,
                flushMaxDelay: e,
                minReplayDuration: Math.min(a, 15000),
                maxReplayDuration: Math.min(r, 3600000),
                stickySession: _,
                useCompression: n,
                workerUrl: o,
                blockAllMedia: s,
                maskAllInputs: c,
                maskAllText: E,
                mutationBreadcrumbLimit: l,
                mutationLimit: I,
                slowClickTimeout: R,
                slowClickIgnoreSelectors: u,
                networkDetailAllowUrls: A,
                networkDetailDenyUrls: N,
                networkCaptureBodies: T,
                networkRequestHeaders: aK(d),
                networkResponseHeaders: aK(f),
                beforeAddRecordingEvent: g,
                beforeErrorSampling: S,
                _experiments: i,
            }),
            this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
                    ? `${this._recordingOptions.blockSelector},${aM}`
                    : aM),
            this._isInitialized && (0, B.j)())
        )
            throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return aB;
    }
    set _isInitialized(t) {
        aB = t;
    }
    afterAllSetup(t) {
        (0, B.j)() && !this._replay && (this._setup(t), this._initialize(t));
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
    flush(t) {
        return this._replay
            ? this._replay.isEnabled()
                ? this._replay.sendBufferedReplayOrFlush(t)
                : (this._replay.start(), Promise.resolve())
            : Promise.resolve();
    }
    getReplayId() {
        if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId();
    }
    _initialize(t) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(t), this._replay.initializeSampling());
    }
    _setup(t) {
        let e = (function (t, e) {
            let a = e.getOptions(),
                r = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, m.Jr)(t),
                },
                _ = (0, D.o)(a.replaysSessionSampleRate),
                n = (0, D.o)(a.replaysOnErrorSampleRate);
            return (
                null == _ &&
                    null == n &&
                    (0, U.Cf)(() => {
                        console.warn(
                            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                        );
                    }),
                null != _ && (r.sessionSampleRate = _),
                null != n && (r.errorSampleRate = n),
                r
            );
        })(this._initialOptions, t);
        this._replay = new aW({
            options: e,
            recordingOptions: this._recordingOptions,
        });
    }
    _maybeLoadFromReplayCanvasIntegration(t) {
        try {
            let e = t.getIntegrationByName("ReplayCanvas");
            if (!e) return;
            this._replay._canvas = e.getOptions();
        } catch (t) {}
    }
}
function aK(t) {
    return [...aw, ...t.map((t) => t.toLowerCase())];
}
function ak() {
    let t = (0, L.s3)();
    return t && t.getIntegrationByName("Replay");
}
aH.__initStatic();
