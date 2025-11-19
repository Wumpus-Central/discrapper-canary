let a, r, n, o, E, i;
_.d(e, {
    G: () => _B,
    T: () => _k,
});
var c,
    s,
    l,
    I,
    R,
    N,
    A,
    u,
    T = _(505676),
    d = _(507690),
    f = _(572299),
    O = _(263449),
    L = _(946471),
    p = _(233517),
    C = _(822578),
    P = _(696486),
    h = _(988097),
    D = _(820754),
    S = _(899517),
    g = _(202811),
    y = _(370336),
    m = _(467510),
    G = _(101284),
    v = _(622916),
    U = _(394798),
    W = _(886115),
    b = _(617726),
    w = _(928541),
    M = _(14588),
    Y = _(26506),
    B = _(650093),
    H = _(501684),
    K = _(157079),
    k = _(469359),
    x = _(393523);
let V = S.n,
    F = "sentryReplaySession",
    X = "Unable to send Replay";
function j(t, e) {
    return null != t ? t : e();
}
function $(t) {
    let e,
        _ = t[0],
        a = 1;
    for (; a < t.length; ) {
        let r = t[a],
            n = t[a + 1];
        if (((a += 2), ("optionalAccess" === r || "optionalCall" === r) && null == _)) return;
        "access" === r || "optionalAccess" === r
            ? ((e = _), (_ = n(_)))
            : ("call" === r || "optionalCall" === r) && ((_ = n((...t) => _.call(e, ...t))), (e = void 0));
    }
    return _;
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
        let _ = t.rules || t.cssRules;
        return _
            ? ((e = Array.from(_, Z).join("")).includes(" background-clip: text;") &&
                  !e.includes(" -webkit-background-clip: text;") &&
                  (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
              e)
            : null;
    } catch (t) {
        return null;
    }
}
function Z(t) {
    let e;
    if ("styleSheet" in t)
        try {
            e =
                J(t.styleSheet) ||
                (function (t) {
                    let { cssText: e } = t;
                    if (e.split('"').length < 3) return e;
                    let _ = ["@import", `url(${JSON.stringify(t.href)})`];
                    return (
                        "" === t.layerName ? _.push("layer") : t.layerName && _.push(`layer(${t.layerName})`),
                        t.supportsText && _.push(`supports(${t.supportsText})`),
                        t.media.length && _.push(t.media.mediaText),
                        _.join(" ") + ";"
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
class Q {
    constructor() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(t) {
        return t
            ? j($([this, "access", (t) => t.getMeta, "call", (e) => e(t), "optionalAccess", (t) => t.id]), () => -1)
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
        let _ = e.id;
        this.idNodeMap.set(_, t), this.nodeMetaMap.set(t, e);
    }
    replace(t, e) {
        let _ = this.getNode(t);
        if (_) {
            let t = this.nodeMetaMap.get(_);
            t && this.nodeMetaMap.set(e, t);
        }
        this.idNodeMap.set(t, e);
    }
    reset() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
}
function tt({ maskInputOptions: t, tagName: e, type: _ }) {
    return (
        "OPTION" === e && (e = "SELECT"),
        !!(t[e.toLowerCase()] || (_ && t[_]) || "password" === _ || ("INPUT" === e && !_ && t.text))
    );
}
function te({ isMasked: t, element: e, value: _, maskInputFn: a }) {
    let r = _ || "";
    return t ? (a && (r = a(r, e)), "*".repeat(r.length)) : r;
}
function t_(t) {
    return t.toLowerCase();
}
function ta(t) {
    return t.toUpperCase();
}
let tr = "__rrweb_original__";
function tn(t) {
    let e = t.type;
    return t.hasAttribute("data-rr-is-password") ? "password" : e ? t_(e) : null;
}
function to(t, e, _) {
    return "INPUT" === e && ("radio" === _ || "checkbox" === _) ? t.getAttribute("value") || "" : t.value;
}
function tE(t, e) {
    let _;
    try {
        _ = new URL(
            t,
            j(e, () => window.location.href),
        );
    } catch (t) {
        return null;
    }
    return j($([_.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", (t) => t[1]]), () => null);
}
let ti = {};
function tc(t) {
    let e = ti[t];
    if (e) return e;
    let _ = window.document,
        a = window[t];
    if (_ && "function" == typeof _.createElement)
        try {
            let e = _.createElement("iframe");
            (e.hidden = !0), _.head.appendChild(e);
            let r = e.contentWindow;
            r && r[t] && (a = r[t]), _.head.removeChild(e);
        } catch (t) {}
    return (ti[t] = a.bind(window));
}
function ts(...t) {
    return tc("setTimeout")(...t);
}
function tl(...t) {
    return tc("clearTimeout")(...t);
}
let tI = 1,
    tR = RegExp("[^a-z0-9-_:]");
function tN() {
    return tI++;
}
let tA = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    tu = /^(?:[a-z+]+:)?\/\//i,
    tT = /^www\..*/i,
    td = /^(data:)([^,]*),(.*)/i;
function tf(t, e) {
    return (t || "").replace(tA, (t, _, a, r, n, o) => {
        let E = a || n || o,
            i = _ || r || "";
        if (!E) return t;
        if (tu.test(E) || tT.test(E) || td.test(E)) return `url(${i}${E}${i})`;
        if ("/" === E[0])
            return `url(${i}${(e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0]).split("?")[0] + E}${i})`;
        let c = e.split("/"),
            s = E.split("/");
        for (let t of (c.pop(), s))
            if ("." === t) continue;
            else ".." === t ? c.pop() : c.push(t);
        return `url(${i}${c.join("/")}${i})`;
    });
}
let tO = /^[^ \t\n\r\u000c]+/,
    tL = /^[, \t\n\r\u000c]+/;
function tp(t, e) {
    if (!e || "" === e.trim()) return e;
    let _ = t.createElement("a");
    return (_.href = e), _.href;
}
function tC() {
    let t = document.createElement("a");
    return (t.href = ""), t.href;
}
function tP(t, e, _, a, r, n) {
    if (!a) return a;
    if ("src" === _ || ("href" === _ && ("use" !== e || "#" !== a[0])) || ("xlink:href" === _ && "#" !== a[0]))
        return tp(t, a);
    if ("background" === _ && ("table" === e || "td" === e || "th" === e)) return tp(t, a);
    if ("srcset" === _)
        return (function (t, e) {
            if ("" === e.trim()) return e;
            let _ = 0;
            function a(t) {
                let a,
                    r = t.exec(e.substring(_));
                return r ? ((a = r[0]), (_ += a.length), a) : "";
            }
            let r = [];
            for (; a(tL), !(_ >= e.length); ) {
                let n = a(tO);
                if ("," === n.slice(-1)) (n = tp(t, n.substring(0, n.length - 1))), r.push(n);
                else {
                    let a = "";
                    n = tp(t, n);
                    let o = !1;
                    for (;;) {
                        let t = e.charAt(_);
                        if ("" === t) {
                            r.push((n + a).trim());
                            break;
                        }
                        if (o) ")" === t && (o = !1);
                        else if ("," === t) {
                            (_ += 1), r.push((n + a).trim());
                            break;
                        } else "(" === t && (o = !0);
                        (a += t), (_ += 1);
                    }
                }
            }
            return r.join(", ");
        })(t, a);
    if ("style" === _) return tf(a, tC());
    else if ("object" === e && "data" === _) return tp(t, a);
    return "function" == typeof n ? n(_, a, r) : a;
}
function th(t, e, _) {
    return ("video" === t || "audio" === t) && "autoplay" === e;
}
function tD(t, e, _ = 1 / 0, a = 0) {
    return !t || t.nodeType !== t.ELEMENT_NODE || a > _ ? -1 : e(t) ? a : tD(t.parentNode, e, _, a + 1);
}
function tS(t, e) {
    return (_) => {
        if (null === _) return !1;
        try {
            if (t) {
                if ("string" == typeof t) {
                    if (_.matches(`.${t}`)) return !0;
                } else if (
                    (function (t, e) {
                        for (let _ = t.classList.length; _--; ) {
                            let a = t.classList[_];
                            if (e.test(a)) return !0;
                        }
                        return !1;
                    })(_, t)
                )
                    return !0;
            }
            if (e && _.matches(e)) return !0;
            return !1;
        } catch (t) {
            return !1;
        }
    };
}
function tg(t, e, _, a, r, n) {
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
        let E = -1,
            i = -1;
        if (n) {
            if ((i = tD(o, tS(a, r))) < 0) return !0;
            E = tD(o, tS(e, _), i >= 0 ? i : 1 / 0);
        } else {
            if ((E = tD(o, tS(e, _))) < 0) return !1;
            i = tD(o, tS(a, r), E >= 0 ? E : 1 / 0);
        }
        return E >= 0 ? !(i >= 0) || E <= i : !(i >= 0) && !!n;
    } catch (t) {}
    return !!n;
}
function ty(t) {
    return null == t ? "" : t.toLowerCase();
}
function tm(t, e) {
    let _,
        {
            doc: n,
            mirror: o,
            blockClass: E,
            blockSelector: i,
            unblockSelector: c,
            maskAllText: s,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: R,
            unmaskTextSelector: N,
            skipChild: u = !1,
            inlineStylesheet: T = !0,
            maskInputOptions: d = {},
            maskAttributeFn: f,
            maskTextFn: O,
            maskInputFn: L,
            slimDOMOptions: p,
            dataURLOptions: C = {},
            inlineImages: P = !1,
            recordCanvas: h = !1,
            onSerialize: D,
            onIframeLoad: S,
            iframeLoadTimeout: g = 5000,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: m = 5000,
            keepIframeSrcFn: G = () => !1,
            newlyAddedElement: v = !1,
        } = e,
        { preserveWhiteSpace: U = !0 } = e,
        W = (function (t, e) {
            let {
                    doc: _,
                    mirror: n,
                    blockClass: o,
                    blockSelector: E,
                    unblockSelector: i,
                    maskAllText: c,
                    maskAttributeFn: s,
                    maskTextClass: l,
                    unmaskTextClass: I,
                    maskTextSelector: R,
                    unmaskTextSelector: N,
                    inlineStylesheet: u,
                    maskInputOptions: T = {},
                    maskTextFn: d,
                    maskInputFn: f,
                    dataURLOptions: O = {},
                    inlineImages: L,
                    recordCanvas: p,
                    keepIframeSrcFn: C,
                    newlyAddedElement: P = !1,
                } = e,
                h = (function (t, e) {
                    if (!e.hasNode(t)) return;
                    let _ = e.getId(t);
                    return 1 === _ ? void 0 : _;
                })(_, n);
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
                        rootId: h,
                    };
                case t.ELEMENT_NODE:
                    return (function (t, e) {
                        let _,
                            {
                                doc: n,
                                blockClass: o,
                                blockSelector: E,
                                unblockSelector: i,
                                inlineStylesheet: c,
                                maskInputOptions: s = {},
                                maskAttributeFn: l,
                                maskInputFn: I,
                                dataURLOptions: R = {},
                                inlineImages: N,
                                recordCanvas: u,
                                keepIframeSrcFn: T,
                                newlyAddedElement: d = !1,
                                rootId: f,
                                maskAllText: O,
                                maskTextClass: L,
                                unmaskTextClass: p,
                                maskTextSelector: C,
                                unmaskTextSelector: P,
                            } = e,
                            h = (function (t, e, _, a) {
                                try {
                                    if (a && t.matches(a)) return !1;
                                    if ("string" == typeof e) {
                                        if (t.classList.contains(e)) return !0;
                                    } else
                                        for (let _ = t.classList.length; _--; ) {
                                            let a = t.classList[_];
                                            if (e.test(a)) return !0;
                                        }
                                    if (_) return t.matches(_);
                                } catch (t) {}
                                return !1;
                            })(t, o, E, i),
                            D = (function (t) {
                                if (t instanceof HTMLFormElement) return "form";
                                let e = t_(t.tagName);
                                return tR.test(e) ? "div" : e;
                            })(t),
                            S = {},
                            g = t.attributes.length;
                        for (let e = 0; e < g; e++) {
                            let _ = t.attributes[e];
                            _.name && !th(D, _.name, _.value) && (S[_.name] = tP(n, D, t_(_.name), _.value, t, l));
                        }
                        if ("link" === D && c) {
                            let e = Array.from(n.styleSheets).find((e) => e.href === t.href),
                                _ = null;
                            e && (_ = J(e)), _ && (delete S.rel, delete S.href, (S._cssText = tf(_, e.href)));
                        }
                        if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                            let e = J(t.sheet);
                            e && (S._cssText = tf(e, tC()));
                        }
                        if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
                            let e = tn(t),
                                _ = to(t, ta(D), e),
                                a = t.checked;
                            if ("submit" !== e && "button" !== e && _) {
                                let a = tg(
                                    t,
                                    L,
                                    C,
                                    p,
                                    P,
                                    tt({
                                        type: e,
                                        tagName: ta(D),
                                        maskInputOptions: s,
                                    }),
                                );
                                S.value = te({
                                    isMasked: a,
                                    element: t,
                                    value: _,
                                    maskInputFn: I,
                                });
                            }
                            a && (S.checked = a);
                        }
                        if (
                            ("option" === D && (t.selected && !s.select ? (S.selected = !0) : delete S.selected),
                            "canvas" === D && u)
                        ) {
                            if ("2d" === t.__context)
                                !(function (t) {
                                    let e = t.getContext("2d");
                                    if (!e) return !0;
                                    for (let _ = 0; _ < t.width; _ += 50)
                                        for (let a = 0; a < t.height; a += 50) {
                                            let r = e.getImageData;
                                            if (
                                                new Uint32Array(
                                                    (tr in r ? r[tr] : r).call(
                                                        e,
                                                        _,
                                                        a,
                                                        Math.min(50, t.width - _),
                                                        Math.min(50, t.height - a),
                                                    ).data.buffer,
                                                ).some((t) => 0 !== t)
                                            )
                                                return !1;
                                        }
                                    return !0;
                                })(t) && (S.rr_dataURL = t.toDataURL(R.type, R.quality));
                            else if (!("__context" in t)) {
                                let e = t.toDataURL(R.type, R.quality),
                                    _ = document.createElement("canvas");
                                (_.width = t.width),
                                    (_.height = t.height),
                                    e !== _.toDataURL(R.type, R.quality) && (S.rr_dataURL = e);
                            }
                        }
                        if ("img" === D && N) {
                            a || (r = (a = n.createElement("canvas")).getContext("2d"));
                            let e = t.crossOrigin;
                            t.crossOrigin = "anonymous";
                            let _ = () => {
                                t.removeEventListener("load", _);
                                try {
                                    (a.width = t.naturalWidth),
                                        (a.height = t.naturalHeight),
                                        r.drawImage(t, 0, 0),
                                        (S.rr_dataURL = a.toDataURL(R.type, R.quality));
                                } catch (e) {
                                    console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`);
                                }
                                e ? (S.crossOrigin = e) : t.removeAttribute("crossorigin");
                            };
                            t.complete && 0 !== t.naturalWidth ? _() : t.addEventListener("load", _);
                        }
                        if (
                            (("audio" === D || "video" === D) &&
                                ((S.rr_mediaState = t.paused ? "paused" : "played"),
                                (S.rr_mediaCurrentTime = t.currentTime)),
                            !d &&
                                (t.scrollLeft && (S.rr_scrollLeft = t.scrollLeft),
                                t.scrollTop && (S.rr_scrollTop = t.scrollTop)),
                            h)
                        ) {
                            let { width: e, height: _ } = t.getBoundingClientRect();
                            S = {
                                class: S.class,
                                rr_width: `${e}px`,
                                rr_height: `${_}px`,
                            };
                        }
                        "iframe" !== D || T(S.src) || (h || t.contentDocument || (S.rr_src = S.src), delete S.src);
                        try {
                            customElements.get(D) && (_ = !0);
                        } catch (t) {}
                        return {
                            type: A.Element,
                            tagName: D,
                            attributes: S,
                            childNodes: [],
                            isSVG: !!("svg" === t.tagName || t.ownerSVGElement) || void 0,
                            needBlock: h,
                            rootId: f,
                            isCustom: _,
                        };
                    })(t, {
                        doc: _,
                        blockClass: o,
                        blockSelector: E,
                        unblockSelector: i,
                        inlineStylesheet: u,
                        maskAttributeFn: s,
                        maskInputOptions: T,
                        maskInputFn: f,
                        dataURLOptions: O,
                        inlineImages: L,
                        recordCanvas: p,
                        keepIframeSrcFn: C,
                        newlyAddedElement: P,
                        rootId: h,
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: I,
                        maskTextSelector: R,
                        unmaskTextSelector: N,
                    });
                case t.TEXT_NODE:
                    return (function (t, e) {
                        let {
                                maskAllText: _,
                                maskTextClass: a,
                                unmaskTextClass: r,
                                maskTextSelector: n,
                                unmaskTextSelector: o,
                                maskTextFn: E,
                                maskInputOptions: i,
                                maskInputFn: c,
                                rootId: s,
                            } = e,
                            l = t.parentNode && t.parentNode.tagName,
                            I = t.textContent,
                            R = "STYLE" === l || void 0,
                            N = "SCRIPT" === l || void 0,
                            u = "TEXTAREA" === l || void 0;
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
                            I = tf(I, tC());
                        }
                        N && (I = "SCRIPT_PLACEHOLDER");
                        let T = tg(t, a, n, r, o, _);
                        return (
                            R || N || u || !I || !T || (I = E ? E(I, t.parentElement) : I.replace(/[\S]/g, "*")),
                            u && I && (i.textarea || T) && (I = c ? c(I, t.parentNode) : I.replace(/[\S]/g, "*")),
                            "OPTION" === l &&
                                I &&
                                (I = te({
                                    isMasked: tg(
                                        t,
                                        a,
                                        n,
                                        r,
                                        o,
                                        tt({
                                            type: null,
                                            tagName: l,
                                            maskInputOptions: i,
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
                        unmaskTextSelector: N,
                        maskTextFn: d,
                        maskInputOptions: T,
                        maskInputFn: f,
                        rootId: h,
                    });
                case t.CDATA_SECTION_NODE:
                    return {
                        type: A.CDATA,
                        textContent: "",
                        rootId: h,
                    };
                case t.COMMENT_NODE:
                    return {
                        type: A.Comment,
                        textContent: t.textContent || "",
                        rootId: h,
                    };
                default:
                    return !1;
            }
        })(t, {
            doc: n,
            mirror: o,
            blockClass: E,
            blockSelector: i,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: R,
            unmaskTextSelector: N,
            inlineStylesheet: T,
            maskInputOptions: d,
            maskAttributeFn: f,
            maskTextFn: O,
            maskInputFn: L,
            dataURLOptions: C,
            inlineImages: P,
            recordCanvas: h,
            keepIframeSrcFn: G,
            newlyAddedElement: v,
        });
    if (!W) return console.warn(t, "not serialized"), null;
    _ = o.hasNode(t)
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
                                "js" === tE(t.attributes.href)))
                    )
                        return !0;
                    else if (
                        e.headFavicon &&
                        (("link" === t.tagName && "shortcut icon" === t.attributes.rel) ||
                            ("meta" === t.tagName &&
                                (ty(t.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                    "application-name" === ty(t.attributes.name) ||
                                    "icon" === ty(t.attributes.rel) ||
                                    "apple-touch-icon" === ty(t.attributes.rel) ||
                                    "shortcut icon" === ty(t.attributes.rel))))
                    )
                        return !0;
                    else if ("meta" === t.tagName) {
                        if (e.headMetaDescKeywords && ty(t.attributes.name).match(/^description|keywords$/)) return !0;
                        else if (
                            e.headMetaSocial &&
                            (ty(t.attributes.property).match(/^(og|twitter|fb):/) ||
                                ty(t.attributes.name).match(/^(og|twitter):/) ||
                                "pinterest" === ty(t.attributes.name))
                        )
                            return !0;
                        else if (
                            e.headMetaRobots &&
                            ("robots" === ty(t.attributes.name) ||
                                "googlebot" === ty(t.attributes.name) ||
                                "bingbot" === ty(t.attributes.name))
                        )
                            return !0;
                        else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                        else if (
                            e.headMetaAuthorship &&
                            ("author" === ty(t.attributes.name) ||
                                "generator" === ty(t.attributes.name) ||
                                "framework" === ty(t.attributes.name) ||
                                "publisher" === ty(t.attributes.name) ||
                                "progid" === ty(t.attributes.name) ||
                                ty(t.attributes.property).match(/^article:/) ||
                                ty(t.attributes.property).match(/^product:/))
                        )
                            return !0;
                        else if (
                            e.headMetaVerification &&
                            ("google-site-verification" === ty(t.attributes.name) ||
                                "yandex-verification" === ty(t.attributes.name) ||
                                "csrf-token" === ty(t.attributes.name) ||
                                "p:domain_verify" === ty(t.attributes.name) ||
                                "verify-v1" === ty(t.attributes.name) ||
                                "verification" === ty(t.attributes.name) ||
                                "shopify-checkout-api-token" === ty(t.attributes.name))
                        )
                            return !0;
                    }
                }
                return !1;
            })(W, p) &&
            (U || W.type !== A.Text || W.isStyle || W.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? tN()
          : -2;
    let b = Object.assign(W, { id: _ });
    if ((o.add(t, b), -2 === _)) return null;
    D && D(t);
    let w = !u;
    if (b.type === A.Element) {
        (w = w && !b.needBlock), delete b.needBlock;
        let e = t.shadowRoot;
        e && z(e) && (b.isShadowHost = !0);
    }
    if ((b.type === A.Document || b.type === A.Element) && w) {
        p.headWhitespace && b.type === A.Element && "head" === b.tagName && (U = !1);
        let e = {
            doc: n,
            mirror: o,
            blockClass: E,
            blockSelector: i,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: R,
            unmaskTextSelector: N,
            skipChild: u,
            inlineStylesheet: T,
            maskInputOptions: d,
            maskAttributeFn: f,
            maskTextFn: O,
            maskInputFn: L,
            slimDOMOptions: p,
            dataURLOptions: C,
            inlineImages: P,
            recordCanvas: h,
            preserveWhiteSpace: U,
            onSerialize: D,
            onIframeLoad: S,
            iframeLoadTimeout: g,
            onStylesheetLoad: y,
            stylesheetLoadTimeout: m,
            keepIframeSrcFn: G,
        };
        for (let _ of Array.from(t.childNodes)) {
            let t = tm(_, e);
            t && b.childNodes.push(t);
        }
        if (t.nodeType === t.ELEMENT_NODE && t.shadowRoot)
            for (let _ of Array.from(t.shadowRoot.childNodes)) {
                let a = tm(_, e);
                a && (z(t.shadowRoot) && (a.isShadow = !0), b.childNodes.push(a));
            }
    }
    return (
        t.parentNode && q(t.parentNode) && z(t.parentNode) && (b.isShadow = !0),
        b.type === A.Element &&
            "iframe" === b.tagName &&
            (function (t, e, _) {
                let a,
                    r = t.contentWindow;
                if (!r) return;
                let n = !1;
                try {
                    a = r.document.readyState;
                } catch (t) {
                    return;
                }
                if ("complete" !== a) {
                    let a = ts(() => {
                        n || (e(), (n = !0));
                    }, _);
                    t.addEventListener("load", () => {
                        tl(a), (n = !0), e();
                    });
                    return;
                }
                let o = "about:blank";
                if (r.location.href !== o || t.src === o || "" === t.src)
                    return ts(e, 0), t.addEventListener("load", e);
                t.addEventListener("load", e);
            })(
                t,
                () => {
                    let e = t.contentDocument;
                    if (e && S) {
                        let _ = tm(e, {
                            doc: e,
                            mirror: o,
                            blockClass: E,
                            blockSelector: i,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: I,
                            maskTextSelector: R,
                            unmaskTextSelector: N,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: d,
                            maskAttributeFn: f,
                            maskTextFn: O,
                            maskInputFn: L,
                            slimDOMOptions: p,
                            dataURLOptions: C,
                            inlineImages: P,
                            recordCanvas: h,
                            preserveWhiteSpace: U,
                            onSerialize: D,
                            onIframeLoad: S,
                            iframeLoadTimeout: g,
                            onStylesheetLoad: y,
                            stylesheetLoadTimeout: m,
                            keepIframeSrcFn: G,
                        });
                        _ && S(t, _);
                    }
                },
                g,
            ),
        b.type === A.Element &&
            "link" === b.tagName &&
            "string" == typeof b.attributes.rel &&
            ("stylesheet" === b.attributes.rel ||
                ("preload" === b.attributes.rel &&
                    "string" == typeof b.attributes.href &&
                    "css" === tE(b.attributes.href))) &&
            (function (t, e, _) {
                let a,
                    r = !1;
                try {
                    a = t.sheet;
                } catch (t) {
                    return;
                }
                if (a) return;
                let n = ts(() => {
                    r || (e(), (r = !0));
                }, _);
                t.addEventListener("load", () => {
                    tl(n), (r = !0), e();
                });
            })(
                t,
                () => {
                    if (y) {
                        let e = tm(t, {
                            doc: n,
                            mirror: o,
                            blockClass: E,
                            blockSelector: i,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: I,
                            maskTextSelector: R,
                            unmaskTextSelector: N,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: d,
                            maskAttributeFn: f,
                            maskTextFn: O,
                            maskInputFn: L,
                            slimDOMOptions: p,
                            dataURLOptions: C,
                            inlineImages: P,
                            recordCanvas: h,
                            preserveWhiteSpace: U,
                            onSerialize: D,
                            onIframeLoad: S,
                            iframeLoadTimeout: g,
                            onStylesheetLoad: y,
                            stylesheetLoadTimeout: m,
                            keepIframeSrcFn: G,
                        });
                        e && y(t, e);
                    }
                },
                m,
            ),
        b
    );
}
function tG(t) {
    let e,
        _ = t[0],
        a = 1;
    for (; a < t.length; ) {
        let r = t[a],
            n = t[a + 1];
        if (((a += 2), ("optionalAccess" === r || "optionalCall" === r) && null == _)) return;
        "access" === r || "optionalAccess" === r
            ? ((e = _), (_ = n(_)))
            : ("call" === r || "optionalCall" === r) && ((_ = n((...t) => _.call(e, ...t))), (e = void 0));
    }
    return _;
}
function tv(t, e, _ = document) {
    let a = {
        capture: !0,
        passive: !0,
    };
    return _.addEventListener(t, e, a), () => _.removeEventListener(t, e, a);
}
let tU =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    tW = {
        map: {},
        getId: () => (console.error(tU), -1),
        getNode: () => (console.error(tU), null),
        removeNodeFromMap() {
            console.error(tU);
        },
        has: () => (console.error(tU), !1),
        reset() {
            console.error(tU);
        },
    };
function tb(t, e, _ = {}) {
    let a = null,
        r = 0;
    return function (...n) {
        let o = Date.now();
        r || !1 !== _.leading || (r = o);
        let E = e - (o - r),
            i = this;
        E <= 0 || E > e
            ? (a &&
                  ((function (...t) {
                      tZ("clearTimeout")(...t);
                  })(a),
                  (a = null)),
              (r = o),
              t.apply(i, n))
            : a ||
              !1 === _.trailing ||
              (a = tQ(() => {
                  (r = !1 === _.leading ? 0 : Date.now()), (a = null), t.apply(i, n);
              }, E));
    };
}
function tw(t, e, _) {
    try {
        if (!(e in t)) return () => {};
        let a = t[e],
            r = _(a);
        return (
            "function" == typeof r &&
                ((r.prototype = r.prototype || {}),
                Object.defineProperties(r, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: a,
                    },
                })),
            (t[e] = r),
            () => {
                t[e] = a;
            }
        );
    } catch (t) {
        return () => {};
    }
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (tW = new Proxy(tW, { get: (t, e, _) => ("map" === e && console.error(tU), Reflect.get(t, e, _)) }));
let tM = Date.now;
function tY(t) {
    let e = t.document;
    return {
        left: e.scrollingElement
            ? e.scrollingElement.scrollLeft
            : void 0 !== t.pageXOffset
              ? t.pageXOffset
              : tG([e, "optionalAccess", (t) => t.documentElement, "access", (t) => t.scrollLeft]) ||
                tG([
                    e,
                    "optionalAccess",
                    (t) => t.body,
                    "optionalAccess",
                    (t) => t.parentElement,
                    "optionalAccess",
                    (t) => t.scrollLeft,
                ]) ||
                tG([e, "optionalAccess", (t) => t.body, "optionalAccess", (t) => t.scrollLeft]) ||
                0,
        top: e.scrollingElement
            ? e.scrollingElement.scrollTop
            : void 0 !== t.pageYOffset
              ? t.pageYOffset
              : tG([e, "optionalAccess", (t) => t.documentElement, "access", (t) => t.scrollTop]) ||
                tG([
                    e,
                    "optionalAccess",
                    (t) => t.body,
                    "optionalAccess",
                    (t) => t.parentElement,
                    "optionalAccess",
                    (t) => t.scrollTop,
                ]) ||
                tG([e, "optionalAccess", (t) => t.body, "optionalAccess", (t) => t.scrollTop]) ||
                0,
    };
}
function tB() {
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
function tk(t, e, _, a, r) {
    if (!t) return !1;
    let n = tK(t);
    if (!n) return !1;
    let o = tS(e, _);
    if (!r) {
        let t = a && n.matches(a);
        return o(n) && !t;
    }
    let E = tD(n, o),
        i = -1;
    return !(E < 0) && (a && (i = tD(n, tS(null, a))), (E > -1 && i < 0) || E < i);
}
function tx(t, e) {
    return -2 === e.getId(t);
}
function tV(t) {
    return !!t.changedTouches;
}
function tF(t, e) {
    return !!("IFRAME" === t.nodeName && e.getMeta(t));
}
function tX(t, e) {
    return !!(
        "LINK" === t.nodeName &&
        t.nodeType === t.ELEMENT_NODE &&
        t.getAttribute &&
        "stylesheet" === t.getAttribute("rel") &&
        e.getMeta(t)
    );
}
function tj(t) {
    return !!tG([t, "optionalAccess", (t) => t.shadowRoot]);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (tM = () => new Date().getTime());
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
        let _;
        return this.has(t)
            ? this.getId(t)
            : ((_ = void 0 === e ? this.id++ : e), this.styleIDMap.set(t, _), this.idStyleMap.set(_, t), _);
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
        tG([t, "access", (t) => t.getRootNode, "optionalCall", (t) => t(), "optionalAccess", (t) => t.nodeType]) ===
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
                let _ = (function (t) {
                    let e,
                        _ = t;
                    for (; (e = tq(_)); ) _ = e;
                    return _;
                })(t);
                return e.contains(_);
            })(t))
    );
}
let tJ = {};
function tZ(t) {
    let e = tJ[t];
    if (e) return e;
    let _ = window.document,
        a = window[t];
    if (_ && "function" == typeof _.createElement)
        try {
            let e = _.createElement("iframe");
            (e.hidden = !0), _.head.appendChild(e);
            let r = e.contentWindow;
            r && r[t] && (a = r[t]), _.head.removeChild(e);
        } catch (t) {}
    return (tJ[t] = a.bind(window));
}
function tQ(...t) {
    return tZ("setTimeout")(...t);
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
        for (let _ = 0; _ < t; _++)
            e =
                (function (t) {
                    let e,
                        _ = t[0],
                        a = 1;
                    for (; a < t.length; ) {
                        let r = t[a],
                            n = t[a + 1];
                        if (((a += 2), ("optionalAccess" === r || "optionalCall" === r) && null == _)) return;
                        "access" === r || "optionalAccess" === r
                            ? ((e = _), (_ = n(_)))
                            : ("call" === r || "optionalCall" === r) &&
                              ((_ = n((...t) => _.call(e, ...t))), (e = void 0));
                    }
                    return _;
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
            let _ = t.previousSibling.__ln.next;
            (e.next = _),
                (e.previous = t.previousSibling.__ln),
                (t.previousSibling.__ln.next = e),
                _ && (_.previous = e);
        } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
            let _ = t.nextSibling.__ln.previous;
            (e.previous = _), (e.next = t.nextSibling.__ln), (t.nextSibling.__ln.previous = e), _ && (_.next = e);
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
                    _ = new t6(),
                    a = (t) => {
                        let e = t,
                            _ = -2;
                        for (; -2 === _; ) _ = (e = e && e.nextSibling) && this.mirror.getId(e);
                        return _;
                    },
                    r = (r) => {
                        if (!r.parentNode || !tz(r)) return;
                        let n = q(r.parentNode) ? this.mirror.getId(tq(r)) : this.mirror.getId(r.parentNode),
                            o = a(r);
                        if (-1 === n || -1 === o) return _.addNode(r);
                        let E = tm(r, {
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
                                tF(t, this.mirror) && this.iframeManager.addIframe(t),
                                    tX(t, this.mirror) && this.stylesheetManager.trackLinkElement(t),
                                    tj(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, this.doc);
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
                        E &&
                            (t.push({
                                parentId: n,
                                nextId: o,
                                node: E,
                            }),
                            e.add(E.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let t of this.movedSet)
                    (!t7(this.removes, t, this.mirror) || this.movedSet.has(t.parentNode)) && r(t);
                for (let t of this.addedSet)
                    t9(this.droppedSet, t) || t7(this.removes, t, this.mirror)
                        ? t9(this.movedSet, t)
                            ? r(t)
                            : this.droppedSet.add(t)
                        : r(t);
                let n = null;
                for (; _.length; ) {
                    let t = null;
                    if (n) {
                        let e = this.mirror.getId(n.value.parentNode),
                            _ = a(n.value);
                        -1 !== e && -1 !== _ && (t = n);
                    }
                    if (!t) {
                        let e = _.tail;
                        for (; e; ) {
                            let _ = e;
                            if (((e = e.previous), _)) {
                                let e = this.mirror.getId(_.value.parentNode);
                                if (-1 === a(_.value)) continue;
                                if (-1 !== e) {
                                    t = _;
                                    break;
                                }
                                {
                                    let e = _.value;
                                    if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let a = e.parentNode.host;
                                        if (-1 !== this.mirror.getId(a)) {
                                            t = _;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!t) {
                        for (; _.head; ) _.removeNode(_.head.value);
                        break;
                    }
                    (n = t.previous), _.removeNode(t.value), r(t.value);
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
                                let _ = JSON.stringify(t.styleDiff),
                                    a = JSON.stringify(t._unchangedStyles);
                                _.length < e.style.length &&
                                    (_ + a).split("var(").length === e.style.split("var(").length &&
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
                                        tg(
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
                                _ = t.attributeName,
                                a = t.target.getAttribute(_);
                            if ("value" === _) {
                                let _ = tn(e),
                                    r = e.tagName;
                                a = to(e, r, _);
                                let n = tt({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: r,
                                    type: _,
                                });
                                a = te({
                                    isMasked: tg(
                                        t.target,
                                        this.maskTextClass,
                                        this.maskTextSelector,
                                        this.unmaskTextClass,
                                        this.unmaskTextSelector,
                                        n,
                                    ),
                                    element: e,
                                    value: a,
                                    maskInputFn: this.maskInputFn,
                                });
                            }
                            if (
                                tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                a === t.oldValue
                            )
                                return;
                            let r = this.attributeMap.get(t.target);
                            if ("IFRAME" === e.tagName && "src" === _ && !this.keepIframeSrcFn(a))
                                if (e.contentDocument) return;
                                else _ = "rr_src";
                            if (
                                (r ||
                                    ((r = {
                                        node: t.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {},
                                    }),
                                    this.attributes.push(r),
                                    this.attributeMap.set(t.target, r)),
                                "type" === _ &&
                                    "INPUT" === e.tagName &&
                                    "password" === (t.oldValue || "").toLowerCase() &&
                                    e.setAttribute("data-rr-is-password", "true"),
                                !th(e.tagName, _) &&
                                    ((r.attributes[_] = tP(this.doc, t_(e.tagName), t_(_), a, e, this.maskAttributeFn)),
                                    "style" === _))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (t) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let _ = this.unattachedDoc.createElement("span");
                                for (let a of (t.oldValue && _.setAttribute("style", t.oldValue),
                                Array.from(e.style))) {
                                    let t = e.style.getPropertyValue(a),
                                        n = e.style.getPropertyPriority(a);
                                    t !== _.style.getPropertyValue(a) || n !== _.style.getPropertyPriority(a)
                                        ? "" === n
                                            ? (r.styleDiff[a] = t)
                                            : (r.styleDiff[a] = [t, n])
                                        : (r._unchangedStyles[a] = [t, n]);
                                }
                                for (let t of Array.from(_.style))
                                    "" === e.style.getPropertyValue(t) && (r.styleDiff[t] = !1);
                            }
                            break;
                        }
                        case "childList":
                            if (tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            t.addedNodes.forEach((e) => this.genAdds(e, t.target)),
                                t.removedNodes.forEach((e) => {
                                    let _ = this.mirror.getId(e),
                                        a = q(t.target)
                                            ? this.mirror.getId(t.target.host)
                                            : this.mirror.getId(t.target);
                                    tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                        tx(e, this.mirror) ||
                                        -1 === this.mirror.getId(e) ||
                                        (this.addedSet.has(e)
                                            ? (t8(this.addedSet, e), this.droppedSet.add(e))
                                            : (this.addedSet.has(t.target) && -1 === _) ||
                                              (function t(e, _) {
                                                  if (q(e)) return !1;
                                                  let a = _.getId(e);
                                                  return (
                                                      !_.has(a) ||
                                                      ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
                                                          (!e.parentNode || t(e.parentNode, _)))
                                                  );
                                              })(t.target, this.mirror) ||
                                              (this.movedSet.has(e) && this.movedMap[t4(_, a)]
                                                  ? t8(this.movedSet, e)
                                                  : this.removes.push({
                                                        parentId: a,
                                                        id: _,
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
                        let _ = null;
                        e && this.mirror.hasNode(e) && (_ = this.mirror.getId(e)),
                            _ && -1 !== _ && (this.movedMap[t4(this.mirror.getId(t), _)] = !0);
                    } else this.addedSet.add(t), this.droppedSet.delete(t);
                    !tk(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                        (t.childNodes.forEach((t) => this.genAdds(t)),
                        tj(t) &&
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
function t7(t, e, _) {
    return (
        0 !== t.length &&
        (function t(e, _, a) {
            let { parentNode: r } = _;
            if (!r) return !1;
            let n = a.getId(r);
            return !!e.some((t) => t.id === n) || t(e, r, a);
        })(t, e, _)
    );
}
function t9(t, e) {
    return (
        0 !== t.size &&
        (function t(e, _) {
            let { parentNode: a } = _;
            return !!a && (!!e.has(a) || t(e, a));
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
        _ = t[0],
        a = 1;
    for (; a < t.length; ) {
        let r = t[a],
            n = t[a + 1];
        if (((a += 2), ("optionalAccess" === r || "optionalCall" === r) && null == _)) return;
        "access" === r || "optionalAccess" === r
            ? ((e = _), (_ = n(_)))
            : ("call" === r || "optionalCall" === r) && ((_ = n((...t) => _.call(e, ...t))), (e = void 0));
    }
    return _;
}
let e_ = [];
function ea(t) {
    try {
        if ("composedPath" in t) {
            let e = t.composedPath();
            if (e.length) return e[0];
        } else if ("path" in t && t.path.length) return t.path[0];
    } catch (t) {}
    return t && t.target;
}
function er(t, e) {
    let _ = new t5();
    e_.push(_), _.init(t);
    let a = window.MutationObserver || window.__rrMutationObserver,
        r = ee([
            window,
            "optionalAccess",
            (t) => t.Zone,
            "optionalAccess",
            (t) => t.__symbol__,
            "optionalCall",
            (t) => t("MutationObserver"),
        ]);
    r && window[r] && (a = window[r]);
    let n = new a(
        et((e) => {
            (t.onMutation && !1 === t.onMutation(e)) || _.processMutations.bind(_)(e);
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
function en({ scrollCb: t, doc: e, mirror: _, blockClass: a, blockSelector: r, unblockSelector: n, sampling: o }) {
    return tv(
        "scroll",
        et(
            tb(
                et((o) => {
                    let E = ea(o);
                    if (!E || tk(E, a, r, n, !0)) return;
                    let i = _.getId(E);
                    if (E === e && e.defaultView) {
                        let _ = tY(e.defaultView);
                        t({
                            id: i,
                            x: _.left,
                            y: _.top,
                        });
                    } else
                        t({
                            id: i,
                            x: E.scrollLeft,
                            y: E.scrollTop,
                        });
                }),
                o.scroll || 100,
            ),
        ),
        e,
    );
}
let eo = ["INPUT", "TEXTAREA", "SELECT"],
    eE = new WeakMap();
function ei(t) {
    var e = [];
    if (
        (eI("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule) ||
        (eI("CSSMediaRule") && t.parentRule instanceof CSSMediaRule) ||
        (eI("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule) ||
        (eI("CSSConditionRule") && t.parentRule instanceof CSSConditionRule)
    ) {
        let _ = Array.from(t.parentRule.cssRules).indexOf(t);
        e.unshift(_);
    } else if (t.parentStyleSheet) {
        let _ = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
        e.unshift(_);
    }
    return e;
}
function ec(t, e, _) {
    let a, r;
    return t
        ? (t.ownerNode ? (a = e.getId(t.ownerNode)) : (r = _.getId(t)),
          {
              styleId: r,
              id: a,
          })
        : {};
}
function es({ mirror: t, stylesheetManager: e }, _) {
    let a = null;
    a = "#document" === _.nodeName ? t.getId(_) : t.getId(_.host);
    let r =
            "#document" === _.nodeName
                ? ee([_, "access", (t) => t.defaultView, "optionalAccess", (t) => t.Document])
                : ee([
                      _,
                      "access",
                      (t) => t.ownerDocument,
                      "optionalAccess",
                      (t) => t.defaultView,
                      "optionalAccess",
                      (t) => t.ShadowRoot,
                  ]),
        n = ee([r, "optionalAccess", (t) => t.prototype])
            ? Object.getOwnPropertyDescriptor(ee([r, "optionalAccess", (t) => t.prototype]), "adoptedStyleSheets")
            : void 0;
    return null !== a && -1 !== a && r && n
        ? (Object.defineProperty(_, "adoptedStyleSheets", {
              configurable: n.configurable,
              enumerable: n.enumerable,
              get() {
                  return ee([n, "access", (t) => t.get, "optionalAccess", (t) => t.call, "call", (t) => t(this)]);
              },
              set(t) {
                  let _ = ee([n, "access", (t) => t.set, "optionalAccess", (t) => t.call, "call", (e) => e(this, t)]);
                  if (null !== a && -1 !== a)
                      try {
                          e.adoptStyleSheets(t, a);
                      } catch (t) {}
                  return _;
              },
          }),
          et(() => {
              Object.defineProperty(_, "adoptedStyleSheets", {
                  configurable: n.configurable,
                  enumerable: n.enumerable,
                  get: n.get,
                  set: n.set,
              });
          }))
        : () => {};
}
function el(t, e = {}) {
    let _,
        a = t.doc.defaultView;
    if (!a) return () => {};
    t.recordDOM && (_ = er(t, t.doc));
    let r = (function ({ mousemoveCb: t, sampling: e, doc: _, mirror: a }) {
            let r;
            if (!1 === e.mousemove) return () => {};
            let n = "number" == typeof e.mousemove ? e.mousemove : 50,
                o = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                E = [],
                i = tb(
                    et((e) => {
                        let _ = Date.now() - r;
                        t(
                            E.map((t) => ((t.timeOffset -= _), t)),
                            e,
                        ),
                            (E = []),
                            (r = null);
                    }),
                    o,
                ),
                c = et(
                    tb(
                        et((t) => {
                            let e = ea(t),
                                { clientX: _, clientY: n } = tV(t) ? t.changedTouches[0] : t;
                            r || (r = tM()),
                                E.push({
                                    x: _,
                                    y: n,
                                    id: a.getId(e),
                                    timeOffset: tM() - r,
                                }),
                                i(
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
                s = [tv("mousemove", c, _), tv("touchmove", c, _), tv("drag", c, _)];
            return et(() => {
                s.forEach((t) => t());
            });
        })(t),
        n = (function ({
            mouseInteractionCb: t,
            doc: e,
            mirror: _,
            blockClass: a,
            blockSelector: r,
            unblockSelector: n,
            sampling: o,
        }) {
            if (!1 === o.mouseInteraction) return () => {};
            let E = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                i = [],
                c = null;
            return (
                Object.keys(t2)
                    .filter((t) => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== E[t])
                    .forEach((o) => {
                        let E = t_(o),
                            s = (e) => {
                                let E = ea(e);
                                if (tk(E, a, r, n, !0)) return;
                                let i = null,
                                    s = o;
                                if ("pointerType" in e) {
                                    switch (e.pointerType) {
                                        case "mouse":
                                            i = t3.Mouse;
                                            break;
                                        case "touch":
                                            i = t3.Touch;
                                            break;
                                        case "pen":
                                            i = t3.Pen;
                                    }
                                    i === t3.Touch
                                        ? t2[o] === t2.MouseDown
                                            ? (s = "TouchStart")
                                            : t2[o] === t2.MouseUp && (s = "TouchEnd")
                                        : t3.Pen;
                                } else tV(e) && (i = t3.Touch);
                                null !== i
                                    ? ((c = i),
                                      ((s.startsWith("Touch") && i === t3.Touch) ||
                                          (s.startsWith("Mouse") && i === t3.Mouse)) &&
                                          (i = null))
                                    : t2[o] === t2.Click && ((i = c), (c = null));
                                let l = tV(e) ? e.changedTouches[0] : e;
                                if (!l) return;
                                let I = _.getId(E),
                                    { clientX: R, clientY: N } = l;
                                et(t)({
                                    type: t2[s],
                                    id: I,
                                    x: R,
                                    y: N,
                                    ...(null !== i && { pointerType: i }),
                                });
                            };
                        if (window.PointerEvent)
                            switch (t2[o]) {
                                case t2.MouseDown:
                                case t2.MouseUp:
                                    E = E.replace("mouse", "pointer");
                                    break;
                                case t2.TouchStart:
                                case t2.TouchEnd:
                                    return;
                            }
                        i.push(tv(E, s, e));
                    }),
                et(() => {
                    i.forEach((t) => t());
                })
            );
        })(t),
        o = en(t),
        E = (function ({ viewportResizeCb: t }, { win: e }) {
            let _ = -1,
                a = -1;
            return tv(
                "resize",
                et(
                    tb(
                        et(() => {
                            let e = tB(),
                                r = tH();
                            (_ !== e || a !== r) &&
                                (t({
                                    width: Number(r),
                                    height: Number(e),
                                }),
                                (_ = e),
                                (a = r));
                        }),
                        200,
                    ),
                ),
                e,
            );
        })(t, { win: a }),
        i = (function ({
            inputCb: t,
            doc: e,
            mirror: _,
            blockClass: a,
            blockSelector: r,
            unblockSelector: n,
            ignoreClass: o,
            ignoreSelector: E,
            maskInputOptions: i,
            maskInputFn: c,
            sampling: s,
            userTriggeredOnInput: l,
            maskTextClass: I,
            unmaskTextClass: R,
            maskTextSelector: N,
            unmaskTextSelector: A,
        }) {
            function u(t) {
                let _ = ea(t),
                    s = t.isTrusted,
                    u = _ && ta(_.tagName);
                if (("OPTION" === u && (_ = _.parentElement), !_ || !u || 0 > eo.indexOf(u) || tk(_, a, r, n, !0)))
                    return;
                let d = _;
                if (d.classList.contains(o) || (E && d.matches(E))) return;
                let f = tn(_),
                    O = to(d, u, f),
                    L = !1,
                    p = tt({
                        maskInputOptions: i,
                        tagName: u,
                        type: f,
                    }),
                    C = tg(_, I, N, R, A, p);
                ("radio" === f || "checkbox" === f) && (L = _.checked),
                    (O = te({
                        isMasked: C,
                        element: _,
                        value: O,
                        maskInputFn: c,
                    })),
                    T(
                        _,
                        l
                            ? {
                                  text: O,
                                  isChecked: L,
                                  userTriggered: s,
                              }
                            : {
                                  text: O,
                                  isChecked: L,
                              },
                    );
                let P = _.name;
                "radio" === f &&
                    P &&
                    L &&
                    e.querySelectorAll(`input[type="radio"][name="${P}"]`).forEach((t) => {
                        if (t !== _) {
                            let e = te({
                                isMasked: C,
                                element: t,
                                value: to(t, u, f),
                                maskInputFn: c,
                            });
                            T(
                                t,
                                l
                                    ? {
                                          text: e,
                                          isChecked: !L,
                                          userTriggered: !1,
                                      }
                                    : {
                                          text: e,
                                          isChecked: !L,
                                      },
                            );
                        }
                    });
            }
            function T(e, a) {
                let r = eE.get(e);
                if (!r || r.text !== a.text || r.isChecked !== a.isChecked) {
                    eE.set(e, a);
                    let r = _.getId(e);
                    et(t)({
                        ...a,
                        id: r,
                    });
                }
            }
            let d = ("last" === s.input ? ["change"] : ["input", "change"]).map((t) => tv(t, et(u), e)),
                f = e.defaultView;
            if (!f)
                return () => {
                    d.forEach((t) => t());
                };
            let O = f.Object.getOwnPropertyDescriptor(f.HTMLInputElement.prototype, "value"),
                L = [
                    [f.HTMLInputElement.prototype, "value"],
                    [f.HTMLInputElement.prototype, "checked"],
                    [f.HTMLSelectElement.prototype, "value"],
                    [f.HTMLTextAreaElement.prototype, "value"],
                    [f.HTMLSelectElement.prototype, "selectedIndex"],
                    [f.HTMLOptionElement.prototype, "selected"],
                ];
            return (
                O &&
                    O.set &&
                    d.push(
                        ...L.map((t) =>
                            (function t(e, _, a, r, n = window) {
                                let o = n.Object.getOwnPropertyDescriptor(e, _);
                                return (
                                    n.Object.defineProperty(
                                        e,
                                        _,
                                        r
                                            ? a
                                            : {
                                                  set(t) {
                                                      tQ(() => {
                                                          a.set.call(this, t);
                                                      }, 0),
                                                          o && o.set && o.set.call(this, t);
                                                  },
                                              },
                                    ),
                                    () => t(e, _, o || {}, !0)
                                );
                            })(
                                t[0],
                                t[1],
                                {
                                    set() {
                                        et(u)({
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
            blockSelector: _,
            unblockSelector: a,
            mirror: r,
            sampling: n,
            doc: o,
        }) {
            let E = et((o) =>
                    tb(
                        et((n) => {
                            let E = ea(n);
                            if (!E || tk(E, e, _, a, !0)) return;
                            let { currentTime: i, volume: c, muted: s, playbackRate: l } = E;
                            t({
                                type: o,
                                id: r.getId(E),
                                currentTime: i,
                                volume: c,
                                muted: s,
                                playbackRate: l,
                            });
                        }),
                        n.media || 500,
                    ),
                ),
                i = [
                    tv("play", E(0), o),
                    tv("pause", E(1), o),
                    tv("seeked", E(2), o),
                    tv("volumechange", E(3), o),
                    tv("ratechange", E(4), o),
                ];
            return et(() => {
                i.forEach((t) => t());
            });
        })(t),
        s = () => {},
        l = () => {},
        I = () => {},
        R = () => {};
    t.recordDOM &&
        ((s = (function ({ styleSheetRuleCb: t, mirror: e, stylesheetManager: _ }, { win: a }) {
            let r, n;
            if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype) return () => {};
            let o = a.CSSStyleSheet.prototype.insertRule;
            a.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: et((a, r, n) => {
                    let [o, E] = n,
                        { id: i, styleId: c } = ec(r, e, _.styleMirror);
                    return (
                        ((i && -1 !== i) || (c && -1 !== c)) &&
                            t({
                                id: i,
                                styleId: c,
                                adds: [
                                    {
                                        rule: o,
                                        index: E,
                                    },
                                ],
                            }),
                        a.apply(r, n)
                    );
                }),
            });
            let E = a.CSSStyleSheet.prototype.deleteRule;
            (a.CSSStyleSheet.prototype.deleteRule = new Proxy(E, {
                apply: et((a, r, n) => {
                    let [o] = n,
                        { id: E, styleId: i } = ec(r, e, _.styleMirror);
                    return (
                        ((E && -1 !== E) || (i && -1 !== i)) &&
                            t({
                                id: E,
                                styleId: i,
                                removes: [{ index: o }],
                            }),
                        a.apply(r, n)
                    );
                }),
            })),
                a.CSSStyleSheet.prototype.replace &&
                    ((r = a.CSSStyleSheet.prototype.replace),
                    (a.CSSStyleSheet.prototype.replace = new Proxy(r, {
                        apply: et((a, r, n) => {
                            let [o] = n,
                                { id: E, styleId: i } = ec(r, e, _.styleMirror);
                            return (
                                ((E && -1 !== E) || (i && -1 !== i)) &&
                                    t({
                                        id: E,
                                        styleId: i,
                                        replace: o,
                                    }),
                                a.apply(r, n)
                            );
                        }),
                    }))),
                a.CSSStyleSheet.prototype.replaceSync &&
                    ((n = a.CSSStyleSheet.prototype.replaceSync),
                    (a.CSSStyleSheet.prototype.replaceSync = new Proxy(n, {
                        apply: et((a, r, n) => {
                            let [o] = n,
                                { id: E, styleId: i } = ec(r, e, _.styleMirror);
                            return (
                                ((E && -1 !== E) || (i && -1 !== i)) &&
                                    t({
                                        id: E,
                                        styleId: i,
                                        replaceSync: o,
                                    }),
                                a.apply(r, n)
                            );
                        }),
                    })));
            let i = {};
            eR("CSSGroupingRule")
                ? (i.CSSGroupingRule = a.CSSGroupingRule)
                : (eR("CSSMediaRule") && (i.CSSMediaRule = a.CSSMediaRule),
                  eR("CSSConditionRule") && (i.CSSConditionRule = a.CSSConditionRule),
                  eR("CSSSupportsRule") && (i.CSSSupportsRule = a.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(i).forEach(([a, r]) => {
                    (c[a] = {
                        insertRule: r.prototype.insertRule,
                        deleteRule: r.prototype.deleteRule,
                    }),
                        (r.prototype.insertRule = new Proxy(c[a].insertRule, {
                            apply: et((a, r, n) => {
                                let [o, E] = n,
                                    { id: i, styleId: c } = ec(r.parentStyleSheet, e, _.styleMirror);
                                return (
                                    ((i && -1 !== i) || (c && -1 !== c)) &&
                                        t({
                                            id: i,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...ei(r), E || 0],
                                                },
                                            ],
                                        }),
                                    a.apply(r, n)
                                );
                            }),
                        })),
                        (r.prototype.deleteRule = new Proxy(c[a].deleteRule, {
                            apply: et((a, r, n) => {
                                let [o] = n,
                                    { id: E, styleId: i } = ec(r.parentStyleSheet, e, _.styleMirror);
                                return (
                                    ((E && -1 !== E) || (i && -1 !== i)) &&
                                        t({
                                            id: E,
                                            styleId: i,
                                            removes: [
                                                {
                                                    index: [...ei(r), o],
                                                },
                                            ],
                                        }),
                                    a.apply(r, n)
                                );
                            }),
                        }));
                }),
                et(() => {
                    (a.CSSStyleSheet.prototype.insertRule = o),
                        (a.CSSStyleSheet.prototype.deleteRule = E),
                        r && (a.CSSStyleSheet.prototype.replace = r),
                        n && (a.CSSStyleSheet.prototype.replaceSync = n),
                        Object.entries(i).forEach(([t, e]) => {
                            (e.prototype.insertRule = c[t].insertRule), (e.prototype.deleteRule = c[t].deleteRule);
                        });
                })
            );
        })(t, { win: a })),
        (l = es(t, t.doc)),
        (I = (function (
            { styleDeclarationCb: t, mirror: e, ignoreCSSAttributes: _, stylesheetManager: a },
            { win: r },
        ) {
            let n = r.CSSStyleDeclaration.prototype.setProperty;
            r.CSSStyleDeclaration.prototype.setProperty = new Proxy(n, {
                apply: et((r, o, E) => {
                    let [i, c, s] = E;
                    if (_.has(i)) return n.apply(o, [i, c, s]);
                    let { id: l, styleId: I } = ec(
                        ee([o, "access", (t) => t.parentRule, "optionalAccess", (t) => t.parentStyleSheet]),
                        e,
                        a.styleMirror,
                    );
                    return (
                        ((l && -1 !== l) || (I && -1 !== I)) &&
                            t({
                                id: l,
                                styleId: I,
                                set: {
                                    property: i,
                                    value: c,
                                    priority: s,
                                },
                                index: ei(o.parentRule),
                            }),
                        r.apply(o, E)
                    );
                }),
            });
            let o = r.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (r.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: et((r, n, E) => {
                        let [i] = E;
                        if (_.has(i)) return o.apply(n, [i]);
                        let { id: c, styleId: s } = ec(
                            ee([n, "access", (t) => t.parentRule, "optionalAccess", (t) => t.parentStyleSheet]),
                            e,
                            a.styleMirror,
                        );
                        return (
                            ((c && -1 !== c) || (s && -1 !== s)) &&
                                t({
                                    id: c,
                                    styleId: s,
                                    remove: { property: i },
                                    index: ei(n.parentRule),
                                }),
                            r.apply(n, E)
                        );
                    }),
                })),
                et(() => {
                    (r.CSSStyleDeclaration.prototype.setProperty = n),
                        (r.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(t, { win: a })),
        t.collectFonts &&
            (R = (function ({ fontCb: t, doc: e }) {
                let _ = e.defaultView;
                if (!_) return () => {};
                let a = [],
                    r = new WeakMap(),
                    n = _.FontFace;
                _.FontFace = function (t, e, _) {
                    let a = new n(t, e, _);
                    return (
                        r.set(a, {
                            family: t,
                            buffer: "string" != typeof e,
                            descriptors: _,
                            fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e))),
                        }),
                        a
                    );
                };
                let o = tw(e.fonts, "add", function (e) {
                    return function (_) {
                        return (
                            tQ(
                                et(() => {
                                    let e = r.get(_);
                                    e && (t(e), r.delete(_));
                                }),
                                0,
                            ),
                            e.apply(this, [_])
                        );
                    };
                });
                return (
                    a.push(() => {
                        _.FontFace = n;
                    }),
                    a.push(o),
                    et(() => {
                        a.forEach((t) => t());
                    })
                );
            })(t)));
    let N = (function (t) {
            let { doc: e, mirror: _, blockClass: a, blockSelector: r, unblockSelector: n, selectionCb: o } = t,
                E = !0,
                i = et(() => {
                    let t = e.getSelection();
                    if (!t || (E && ee([t, "optionalAccess", (t) => t.isCollapsed]))) return;
                    E = t.isCollapsed || !1;
                    let i = [],
                        c = t.rangeCount || 0;
                    for (let e = 0; e < c; e++) {
                        let { startContainer: o, startOffset: E, endContainer: c, endOffset: s } = t.getRangeAt(e);
                        tk(o, a, r, n, !0) ||
                            tk(c, a, r, n, !0) ||
                            i.push({
                                start: _.getId(o),
                                startOffset: E,
                                end: _.getId(c),
                                endOffset: s,
                            });
                    }
                    o({ ranges: i });
                });
            return i(), tv("selectionchange", i);
        })(t),
        A = (function ({ doc: t, customElementCb: e }) {
            let _ = t.defaultView;
            return _ && _.customElements
                ? tw(_.customElements, "define", function (t) {
                      return function (_, a, r) {
                          try {
                              e({ define: { name: _ } });
                          } catch (t) {}
                          return t.apply(this, [_, a, r]);
                      };
                  })
                : () => {};
        })(t),
        u = [];
    for (let e of t.plugins) u.push(e.observer(e.callback, a, e.options));
    return et(() => {
        e_.forEach((t) => t.reset()),
            ee([_, "optionalAccess", (t) => t.disconnect, "call", (t) => t()]),
            r(),
            n(),
            o(),
            E(),
            i(),
            c(),
            s(),
            l(),
            I(),
            R(),
            N(),
            A(),
            u.forEach((t) => t());
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
class eN {
    constructor(t) {
        (this.generateIdFn = t),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(t, e, _, a) {
        let r = _ || this.getIdToRemoteIdMap(t),
            n = a || this.getRemoteIdToIdMap(t),
            o = r.get(e);
        return o || ((o = this.generateIdFn()), r.set(e, o), n.set(o, e)), o;
    }
    getIds(t, e) {
        let _ = this.getIdToRemoteIdMap(t),
            a = this.getRemoteIdToIdMap(t);
        return e.map((e) => this.getId(t, e, _, a));
    }
    getRemoteId(t, e, _) {
        let a = _ || this.getRemoteIdToIdMap(t);
        if ("number" != typeof e) return e;
        let r = a.get(e);
        return r || -1;
    }
    getRemoteIds(t, e) {
        let _ = this.getRemoteIdToIdMap(t);
        return e.map((e) => this.getRemoteId(t, e, _));
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
        _ = t[0],
        a = 1;
    for (; a < t.length; ) {
        let r = t[a],
            n = t[a + 1];
        if (((a += 2), ("optionalAccess" === r || "optionalCall" === r) && null == _)) return;
        "access" === r || "optionalAccess" === r
            ? ((e = _), (_ = n(_)))
            : ("call" === r || "optionalCall" === r) && ((_ = n((...t) => _.call(e, ...t))), (e = void 0));
    }
    return _;
}
class eu {
    constructor() {
        (this.crossOriginIframeMirror = new eN(tN)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class eT {
    constructor(t) {
        (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new eN(tN)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = t.mutationCb),
            (this.wrappedEmit = t.wrappedEmit),
            (this.stylesheetManager = t.stylesheetManager),
            (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new eN(
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
        let _ = this.transformCrossOriginEvent(e, t.data.event);
        _ && this.wrappedEmit(_, t.data.isCheckout);
    }
    transformCrossOriginEvent(t, e) {
        switch (e.type) {
            case t0.FullSnapshot: {
                this.crossOriginIframeMirror.reset(t),
                    this.crossOriginIframeStyleMirror.reset(t),
                    this.replaceIdOnNode(e.data.node, t);
                let _ = e.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(t, _),
                    this.patchRootIdOnNode(e.data.node, _),
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
                                let _ = this.crossOriginIframeRootIdMap.get(t);
                                _ && this.patchRootIdOnNode(e.node, _);
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
    replace(t, e, _, a) {
        for (let r of a)
            (Array.isArray(e[r]) || "number" == typeof e[r]) &&
                (Array.isArray(e[r]) ? (e[r] = t.getIds(_, e[r])) : (e[r] = t.getId(_, e[r])));
        return e;
    }
    replaceIds(t, e, _) {
        return this.replace(this.crossOriginIframeMirror, t, e, _);
    }
    replaceStyleIds(t, e, _) {
        return this.replace(this.crossOriginIframeStyleMirror, t, e, _);
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
        let _ = er(
            {
                ...this.bypassOptions,
                doc: e,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
            },
            t,
        );
        this.restoreHandlers.push(() => _.disconnect()),
            this.restoreHandlers.push(
                en({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: t,
                    mirror: this.mirror,
                }),
            ),
            tQ(() => {
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
        let _ = this;
        this.restoreHandlers.push(
            tw(t.prototype, "attachShadow", function (t) {
                return function (a) {
                    let r = t.call(this, a);
                    return this.shadowRoot && tz(this) && _.addShadowRoot(this.shadowRoot, e), r;
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
class eO {
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
class eL {
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
        let _ = {
                id: e,
                styleIds: [],
            },
            a = [];
        for (let e of t) {
            let t;
            this.styleMirror.has(e)
                ? (t = this.styleMirror.getId(e))
                : ((t = this.styleMirror.add(e)),
                  a.push({
                      styleId: t,
                      rules: Array.from(e.rules || CSSRule, (t, e) => ({
                          rule: Z(t),
                          index: e,
                      })),
                  })),
                _.styleIds.push(t);
        }
        a.length > 0 && (_.styles = a), this.adoptedStyleSheetCb(_);
    }
    reset() {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(t) {}
}
class ep {
    constructor() {
        (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
    }
    periodicallyClear() {
        !(function (...t) {
            tZ("requestAnimationFrame")(...t);
        })(() => {
            this.clear(), this.loop && this.periodicallyClear();
        });
    }
    inOtherBuffer(t, e) {
        let _ = this.nodeMap.get(t);
        return _ && Array.from(_).some((t) => t !== e);
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
let eC = new Q();
function eP(t = {}) {
    let e,
        {
            emit: _,
            checkoutEveryNms: a,
            checkoutEveryNth: r,
            blockClass: i = "rr-block",
            blockSelector: c = null,
            unblockSelector: s = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: I = null,
            maskAllText: R = !1,
            maskTextClass: N = "rr-mask",
            unmaskTextClass: A = null,
            maskTextSelector: u = null,
            unmaskTextSelector: T = null,
            inlineStylesheet: f = !0,
            maskAllInputs: O,
            maskInputOptions: L,
            slimDOMOptions: p,
            maskAttributeFn: C,
            maskInputFn: P,
            maskTextFn: h,
            maxCanvasSize: D = null,
            packFn: S,
            sampling: g = {},
            dataURLOptions: y = {},
            mousemoveWait: m,
            recordDOM: G = !0,
            recordCanvas: v = !1,
            recordCrossOriginIframes: U = !1,
            recordAfter: W = "DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load",
            userTriggeredOnInput: b = !1,
            collectFonts: w = !1,
            inlineImages: M = !1,
            plugins: Y,
            keepIframeSrcFn: B = () => !1,
            ignoreCSSAttributes: H = new Set([]),
            errorHandler: K,
            onMutation: k,
            getCanvasManager: x,
        } = t;
    n = K;
    let V = !U || window.parent === window,
        F = !1;
    if (!V)
        try {
            window.parent.document && (F = !1);
        } catch (t) {
            F = !0;
        }
    if (V && !_) throw Error("emit function is required");
    void 0 !== m && void 0 === g.mousemove && (g.mousemove = m), eC.reset();
    let X =
            !0 === O
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
                : void 0 !== L
                  ? L
                  : {},
        j =
            !0 === p || "all" === p
                ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaVerification: !0,
                      headMetaAuthorship: "all" === p,
                      headMetaDescKeywords: "all" === p,
                  }
                : p || {};
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
            for (let e of Y || []) e.eventProcessor && (t = e.eventProcessor(t));
            return S && !F && (t = S(t)), t;
        };
    o = (t, n) => {
        if (
            ((t.timestamp = tM()),
            (0, d.x)([e_, "access", (t) => t[0], "optionalAccess", (t) => t.isFrozen, "call", (t) => t()]) &&
                t.type !== t0.FullSnapshot &&
                (t.type !== t0.IncrementalSnapshot || t.data.source !== t1.Mutation) &&
                e_.forEach((t) => t.unfreeze()),
            V)
        )
            (0, d.x)([_, "optionalCall", (e) => e(q(t), n)]);
        else if (F) {
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
            let _ = r && $ >= r,
                n = a && e && t.timestamp - e.timestamp > a;
            (_ || n) && tn(!0);
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
        Z = (t) =>
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.CanvasMutation,
                    ...t,
                },
            }),
        tt = new eL({
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
                ? new eu()
                : new eT({
                      mirror: eC,
                      mutationCb: z,
                      stylesheetManager: tt,
                      recordCrossOriginIframes: U,
                      wrappedEmit: o,
                  });
    for (let t of Y || [])
        t.getMirror &&
            t.getMirror({
                nodeMirror: eC,
                crossOriginIframeMirror: te.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: te.crossOriginIframeStyleMirror,
            });
    let t_ = new ep(),
        ta = (function (t, e) {
            try {
                return t ? t(e) : new eO();
            } catch (t) {
                return console.warn("Unable to initialize CanvasManager"), new eO();
            }
        })(x, {
            mirror: eC,
            win: window,
            mutationCb: (t) =>
                o({
                    type: t0.IncrementalSnapshot,
                    data: {
                        source: t1.CanvasMutation,
                        ...t,
                    },
                }),
            recordCanvas: v,
            blockClass: i,
            blockSelector: c,
            unblockSelector: s,
            maxCanvasSize: D,
            sampling: g.canvas,
            dataURLOptions: y,
            errorHandler: K,
        }),
        tr =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new ed()
                : new ef({
                      mutationCb: z,
                      scrollCb: J,
                      bypassOptions: {
                          onMutation: k,
                          blockClass: i,
                          blockSelector: c,
                          unblockSelector: s,
                          maskAllText: R,
                          maskTextClass: N,
                          unmaskTextClass: A,
                          maskTextSelector: u,
                          unmaskTextSelector: T,
                          inlineStylesheet: f,
                          maskInputOptions: X,
                          dataURLOptions: y,
                          maskAttributeFn: C,
                          maskTextFn: h,
                          maskInputFn: P,
                          recordCanvas: v,
                          inlineImages: M,
                          sampling: g,
                          slimDOMOptions: j,
                          iframeManager: te,
                          stylesheetManager: tt,
                          canvasManager: ta,
                          keepIframeSrcFn: B,
                          processedNodeManager: t_,
                      },
                      mirror: eC,
                  }),
        tn = (t = !1) => {
            if (!G) return;
            o(
                {
                    type: t0.Meta,
                    data: {
                        href: window.location.href,
                        width: tH(),
                        height: tB(),
                    },
                },
                t,
            ),
                tt.reset(),
                tr.init(),
                e_.forEach((t) => t.lock());
            let e = (function (t, e) {
                let {
                    mirror: _ = new Q(),
                    blockClass: a = "rr-block",
                    blockSelector: r = null,
                    unblockSelector: n = null,
                    maskAllText: o = !1,
                    maskTextClass: E = "rr-mask",
                    unmaskTextClass: i = null,
                    maskTextSelector: c = null,
                    unmaskTextSelector: s = null,
                    inlineStylesheet: l = !0,
                    inlineImages: I = !1,
                    recordCanvas: R = !1,
                    maskAllInputs: N = !1,
                    maskAttributeFn: A,
                    maskTextFn: u,
                    maskInputFn: T,
                    slimDOM: d = !1,
                    dataURLOptions: f,
                    preserveWhiteSpace: O,
                    onSerialize: L,
                    onIframeLoad: p,
                    iframeLoadTimeout: C,
                    onStylesheetLoad: P,
                    stylesheetLoadTimeout: h,
                    keepIframeSrcFn: D = () => !1,
                } = e || {};
                return tm(t, {
                    doc: t,
                    mirror: _,
                    blockClass: a,
                    blockSelector: r,
                    unblockSelector: n,
                    maskAllText: o,
                    maskTextClass: E,
                    unmaskTextClass: i,
                    maskTextSelector: c,
                    unmaskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: l,
                    maskInputOptions:
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
                              }
                            : !1 === N
                              ? {}
                              : N,
                    maskAttributeFn: A,
                    maskTextFn: u,
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
                    preserveWhiteSpace: O,
                    onSerialize: L,
                    onIframeLoad: p,
                    iframeLoadTimeout: C,
                    onStylesheetLoad: P,
                    stylesheetLoadTimeout: h,
                    keepIframeSrcFn: D,
                    newlyAddedElement: !1,
                });
            })(document, {
                mirror: eC,
                blockClass: i,
                blockSelector: c,
                unblockSelector: s,
                maskAllText: R,
                maskTextClass: N,
                unmaskTextClass: A,
                maskTextSelector: u,
                unmaskTextSelector: T,
                inlineStylesheet: f,
                maskAllInputs: X,
                maskAttributeFn: C,
                maskInputFn: P,
                maskTextFn: h,
                slimDOM: j,
                dataURLOptions: y,
                recordCanvas: v,
                inlineImages: M,
                onSerialize: (t) => {
                    tF(t, eC) && te.addIframe(t),
                        tX(t, eC) && tt.trackLinkElement(t),
                        tj(t) && tr.addShadowRoot(t.shadowRoot, document);
                },
                onIframeLoad: (t, e) => {
                    te.attachIframe(t, e), t.contentWindow && ta.addWindow(t.contentWindow), tr.observeAttachShadow(t);
                },
                onStylesheetLoad: (t, e) => {
                    tt.attachLinkElement(t, e);
                },
                keepIframeSrcFn: B,
            });
            if (!e) return console.warn("Failed to snapshot the document");
            o({
                type: t0.FullSnapshot,
                data: {
                    node: e,
                    initialOffset: tY(window),
                },
            }),
                e_.forEach((t) => t.unlock()),
                document.adoptedStyleSheets &&
                    document.adoptedStyleSheets.length > 0 &&
                    tt.adoptStyleSheets(document.adoptedStyleSheets, eC.getId(document));
        };
    E = tn;
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
                        canvasMutationCb: Z,
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
                        blockClass: i,
                        ignoreClass: l,
                        ignoreSelector: I,
                        maskAllText: R,
                        maskTextClass: N,
                        unmaskTextClass: A,
                        maskTextSelector: u,
                        unmaskTextSelector: T,
                        maskInputOptions: X,
                        inlineStylesheet: f,
                        sampling: g,
                        recordDOM: G,
                        recordCanvas: v,
                        inlineImages: M,
                        userTriggeredOnInput: b,
                        collectFonts: w,
                        doc: t,
                        maskAttributeFn: C,
                        maskInputFn: P,
                        maskTextFn: h,
                        keepIframeSrcFn: B,
                        blockSelector: c,
                        unblockSelector: s,
                        slimDOMOptions: j,
                        dataURLOptions: y,
                        mirror: eC,
                        iframeManager: te,
                        stylesheetManager: tt,
                        shadowDomManager: tr,
                        processedNodeManager: t_,
                        canvasManager: ta,
                        ignoreCSSAttributes: H,
                        plugins:
                            (0, d.x)([
                                Y,
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
        te.addLoadListener((_) => {
            try {
                t.push(e(_.contentDocument));
            } catch (t) {
                console.warn(t);
            }
        });
        let _ = () => {
            tn(), t.push(e(document));
        };
        return (
            "interactive" === document.readyState || "complete" === document.readyState
                ? _()
                : (t.push(
                      tv("DOMContentLoaded", () => {
                          o({
                              type: t0.DomContentLoaded,
                              data: {},
                          }),
                              "DOMContentLoaded" === W && _();
                      }),
                  ),
                  t.push(
                      tv(
                          "load",
                          () => {
                              o({
                                  type: t0.Load,
                                  data: {},
                              }),
                                  "load" === W && _();
                          },
                          window,
                      ),
                  )),
            () => {
                t.forEach((t) => t()), t_.destroy(), (E = void 0), (n = void 0);
            }
        );
    } catch (t) {
        console.warn(t);
    }
}
function eh(t) {
    return t > 9999999999 ? t : 1000 * t;
}
function eD(t) {
    return t > 9999999999 ? t / 1000 : t;
}
function eS(t, e) {
    "sentry.transaction" !== e.category &&
        (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(),
        t.addUpdate(
            () => (
                t.throttledAddEvent({
                    type: t0.Custom,
                    timestamp: 1000 * (e.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, g.Fv)(e, 10, 1000),
                    },
                }),
                "console" === e.category
            ),
        ));
}
function eg(t) {
    return t.closest("button,a") || t;
}
function ey(t) {
    let e = em(t);
    return e && e instanceof Element ? eg(e) : e;
}
function em(t) {
    var e;
    return "object" == typeof (e = t) && e && "target" in e ? t.target : t;
}
(eP.mirror = eC),
    (eP.takeFullSnapshot = function (t) {
        if (!E) throw Error("please take full snapshot after start recording");
        E(t);
    });
class eG {
    constructor(t, e, _ = eS) {
        (this._lastMutation = 0),
            (this._lastScroll = 0),
            (this._clicks = []),
            (this._timeout = e.timeout / 1000),
            (this._threshold = e.threshold / 1000),
            (this._scollTimeout = e.scrollTimeout / 1000),
            (this._replay = t),
            (this._ignoreSelector = e.ignoreSelector),
            (this._addBreadcrumbEvent = _);
    }
    addListeners() {
        var t;
        let e =
            ((t = () => {
                this._lastMutation = eU();
            }),
            i ||
                ((i = []),
                (0, y.hl)(V, "open", function (t) {
                    return function (...e) {
                        if (i)
                            try {
                                i.forEach((t) => t());
                            } catch (t) {}
                        return t.apply(V, e);
                    };
                })),
            i.push(t),
            () => {
                let e = i ? i.indexOf(t) : -1;
                e > -1 && i.splice(e, 1);
            });
        this._teardown = () => {
            e(), (this._clicks = []), (this._lastMutation = 0), (this._lastScroll = 0);
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(t, e) {
        var _, a, r;
        if (
            ((_ = e),
            (a = this._ignoreSelector),
            !ev.includes(_.tagName) ||
                ("INPUT" === _.tagName && !["submit", "button"].includes(_.getAttribute("type") || "")) ||
                ("A" === _.tagName &&
                    (_.hasAttribute("download") ||
                        (_.hasAttribute("target") && "_self" !== _.getAttribute("target")))) ||
                (a && _.matches(a)) ||
                !((r = t).data && "number" == typeof r.data.nodeId && r.timestamp))
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
        let e = eg(t);
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
            e = eU();
        for (let _ of (this._clicks.forEach((_) => {
            !_.mutationAfter &&
                this._lastMutation &&
                (_.mutationAfter = _.timestamp <= this._lastMutation ? this._lastMutation - _.timestamp : void 0),
                !_.scrollAfter &&
                    this._lastScroll &&
                    (_.scrollAfter = _.timestamp <= this._lastScroll ? this._lastScroll - _.timestamp : void 0),
                _.timestamp + this._timeout <= e && t.push(_);
        }),
        t)) {
            let t = this._clicks.indexOf(_);
            t > -1 && (this._generateBreadcrumbs(_), this._clicks.splice(t, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(t) {
        let e = this._replay,
            _ = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
            a = t.mutationAfter && t.mutationAfter <= this._threshold,
            { clickCount: r, clickBreadcrumb: n } = t;
        if (!_ && !a) {
            let _ = 1000 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                a = _ < 1000 * this._timeout ? "mutation" : "timeout",
                o = {
                    type: "default",
                    message: n.message,
                    timestamp: n.timestamp,
                    category: "ui.slowClickDetected",
                    data: {
                        ...n.data,
                        url: V.location.href,
                        route: e.getCurrentRoute(),
                        timeAfterClickMs: _,
                        endReason: a,
                        clickCount: r || 1,
                    },
                };
            this._addBreadcrumbEvent(e, o);
            return;
        }
        if (r > 1) {
            let t = {
                type: "default",
                message: n.message,
                timestamp: n.timestamp,
                category: "ui.multiClick",
                data: {
                    ...n.data,
                    url: V.location.href,
                    route: e.getCurrentRoute(),
                    clickCount: r,
                    metric: !0,
                },
            };
            this._addBreadcrumbEvent(e, t);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
            (this._checkClickTimeout = (0, B.iK)(() => this._checkClicks(), 1000));
    }
}
let ev = ["A", "BUTTON", "INPUT"];
function eU() {
    return Date.now() / 1000;
}
function eW(t) {
    return {
        timestamp: Date.now() / 1000,
        type: "default",
        ...t,
    };
}
((N = u || (u = {}))[(N.Document = 0)] = "Document"),
    (N[(N.DocumentType = 1)] = "DocumentType"),
    (N[(N.Element = 2)] = "Element"),
    (N[(N.Text = 3)] = "Text"),
    (N[(N.CDATA = 4)] = "CDATA"),
    (N[(N.Comment = 5)] = "Comment");
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
function ew(t, e) {
    let _ = eP.mirror.getId(t),
        a = _ && eP.mirror.getNode(_),
        r = a && eP.mirror.getMeta(a),
        n = r && r.type === u.Element ? r : null;
    return {
        message: e,
        data: n
            ? {
                  nodeId: _,
                  node: {
                      id: _,
                      tagName: n.tagName,
                      textContent: Array.from(n.childNodes)
                          .map((t) => t.type === u.Text && t.textContent)
                          .filter(Boolean)
                          .map((t) => t.trim())
                          .join(""),
                      attributes: (function (t) {
                          let e = {};
                          for (let _ in (!t["data-sentry-component"] &&
                              t["data-sentry-element"] &&
                              (t["data-sentry-component"] = t["data-sentry-element"]),
                          t))
                              if (eb.has(_)) {
                                  let a = _;
                                  ("data-testid" === _ || "data-test-id" === _) && (a = "testId"), (e[a] = t[_]);
                              }
                          return e;
                      })(n.attributes),
                  },
              }
            : {},
    };
}
let eM = {
    resource: function (t) {
        let {
            entryType: e,
            initiatorType: _,
            name: a,
            responseEnd: r,
            startTime: n,
            decodedBodySize: o,
            encodedBodySize: E,
            responseStatus: i,
            transferSize: c,
        } = t;
        return ["fetch", "xmlhttprequest"].includes(_)
            ? null
            : {
                  type: `${e}.${_}`,
                  start: eH(n),
                  end: eH(r),
                  name: a,
                  data: {
                      size: c,
                      statusCode: i,
                      decodedBodySize: o,
                      encodedBodySize: E,
                  },
              };
    },
    paint: function (t) {
        let { duration: e, entryType: _, name: a, startTime: r } = t,
            n = eH(r);
        return {
            type: _,
            name: a,
            start: n,
            end: n + e,
            data: void 0,
        };
    },
    navigation: function (t) {
        let {
            entryType: e,
            name: _,
            decodedBodySize: a,
            duration: r,
            domComplete: n,
            encodedBodySize: o,
            domContentLoadedEventStart: E,
            domContentLoadedEventEnd: i,
            domInteractive: c,
            loadEventStart: s,
            loadEventEnd: l,
            redirectCount: I,
            startTime: R,
            transferSize: N,
            type: A,
        } = t;
        return 0 === r
            ? null
            : {
                  type: `${e}.${A}`,
                  start: eH(R),
                  end: eH(n),
                  name: _,
                  data: {
                      size: N,
                      decodedBodySize: a,
                      encodedBodySize: o,
                      duration: r,
                      domInteractive: c,
                      domContentLoadedEventStart: E,
                      domContentLoadedEventEnd: i,
                      loadEventStart: s,
                      loadEventEnd: l,
                      domComplete: n,
                      redirectCount: I,
                  },
              };
    },
};
function eY(t, e) {
    return ({ metric: _ }) => void e.replayPerformanceEntries.push(t(_));
}
function eB(t) {
    let e = eM[t.entryType];
    return e ? e(t) : null;
}
function eH(t) {
    return ((G.Z1 || V.performance.timeOrigin) + t) / 1000;
}
function eK(t) {
    let e = t.entries[t.entries.length - 1];
    return eF(t, "largest-contentful-paint", e && e.element ? [e.element] : void 0);
}
function ek(t) {
    let e = t.entries[t.entries.length - 1],
        _ = [];
    if (e && e.sources) for (let t of e.sources) t.node && _.push(t.node);
    return eF(t, "cumulative-layout-shift", _);
}
function ex(t) {
    let e = t.entries[t.entries.length - 1];
    return eF(t, "first-input-delay", e && e.target ? [e.target] : void 0);
}
function eV(t) {
    let e = t.entries[t.entries.length - 1];
    return eF(t, "interaction-to-next-paint", e && e.target ? [e.target] : void 0);
}
function eF(t, e, _) {
    let a = t.value,
        r = t.rating,
        n = eH(a);
    return {
        type: "web-vital",
        name: e,
        start: n,
        end: n,
        data: {
            value: a,
            size: a,
            rating: r,
            nodeIds: _ ? _.map((t) => eP.mirror.getId(t)) : void 0,
        },
    };
}
let eX = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function ej(t, e) {
    eX && (v.kg.info(t), e && eq(t));
}
function e$(t, e) {
    eX &&
        (v.kg.info(t),
        e &&
            (0, B.iK)(() => {
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
        return t ? eh(t) : null;
    }
}
class eZ {
    constructor(t) {
        (this._worker = t), (this._id = 0);
    }
    ensureReady() {
        return (
            this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((t, e) => {
                    this._worker.addEventListener(
                        "message",
                        ({ data: _ }) => {
                            _.success ? t() : e();
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
        ej("[Replay] Destroying compression worker"), this._worker.terminate();
    }
    postMessage(t, e) {
        let _ = this._getAndIncrementId();
        return new Promise((a, r) => {
            let n = ({ data: e }) => {
                if (e.method === t && e.id === _) {
                    if ((this._worker.removeEventListener("message", n), !e.success)) {
                        eX && v.kg.error("[Replay]", e.response), r(Error("Error in compression worker"));
                        return;
                    }
                    a(e.response);
                }
            };
            this._worker.addEventListener("message", n),
                this._worker.postMessage({
                    id: _,
                    method: t,
                    arg: e,
                });
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}
class eQ {
    constructor(t) {
        (this._worker = new eZ(t)), (this._earliestTimestamp = null), (this._totalSize = 0), (this.hasCheckout = !1);
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
        let e = eh(t.timestamp);
        (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
        let _ = JSON.stringify(t);
        return ((this._totalSize += _.length), this._totalSize > 20000000)
            ? Promise.reject(new ez())
            : this._sendEventToWorker(_);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage("clear").then(null, (t) => {
                eX && v.kg.warn('[Replay] Sending "clear" message to worker failed', t);
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
            (this._compression = new eQ(t)),
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
            ej("[Replay] Failed to load the compression worker, falling back to simple buffer");
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        let { events: t, hasCheckout: e } = this._fallback,
            _ = [];
        for (let e of t) _.push(this._compression.addEvent(e));
        (this._compression.hasCheckout = e), (this._used = this._compression);
        try {
            await Promise.all(_);
        } catch (t) {
            eX && v.kg.warn("[Replay] Failed to add events when switching buffers.", t);
        }
    }
}
function e1() {
    try {
        return "sessionStorage" in V && !!V.sessionStorage;
    } catch (t) {
        return !1;
    }
}
function e2(t) {
    return void 0 !== t && Math.random() < t;
}
function e3(t) {
    let e = Date.now(),
        _ = t.id || (0, U.DM)(),
        a = t.started || e,
        r = t.lastActivity || e,
        n = t.segmentId || 0;
    return {
        id: _,
        started: a,
        lastActivity: r,
        segmentId: n,
        sampled: t.sampled,
        previousSessionId: t.previousSessionId,
    };
}
function e6(t) {
    if (e1())
        try {
            V.sessionStorage.setItem(F, JSON.stringify(t));
        } catch (t) {}
}
function e4({ sessionSampleRate: t, allowBuffering: e, stickySession: _ = !1 }, { previousSessionId: a } = {}) {
    let r = e3({
        sampled: e2(t) ? "session" : !!e && "buffer",
        previousSessionId: a,
    });
    return _ && e6(r), r;
}
function e5(t, e, _ = +new Date()) {
    return null === t || void 0 === e || e < 0 || (0 !== e && t + e <= _);
}
function e8(t, { maxReplayDuration: e, sessionIdleExpire: _, targetTime: a = Date.now() }) {
    return e5(t.started, e, a) || e5(t.lastActivity, _, a);
}
function e7(t, { sessionIdleExpire: e, maxReplayDuration: _ }) {
    return (
        !!e8(t, {
            sessionIdleExpire: e,
            maxReplayDuration: _,
        }) &&
        ("buffer" !== t.sampled || 0 !== t.segmentId)
    );
}
function e9({ traceInternals: t, sessionIdleExpire: e, maxReplayDuration: _, previousSessionId: a }, r) {
    let n =
        r.stickySession &&
        (function (t) {
            if (!e1()) return null;
            try {
                let e = V.sessionStorage.getItem(F);
                if (!e) return null;
                let _ = JSON.parse(e);
                return e$("[Replay] Loading existing session", t), e3(_);
            } catch (t) {
                return null;
            }
        })(t);
    return n
        ? e7(n, {
              sessionIdleExpire: e,
              maxReplayDuration: _,
          })
            ? (e$("[Replay] Session in sessionStorage is expired, creating new one..."),
              e4(r, { previousSessionId: n.id }))
            : n
        : (e$("[Replay] Creating new session", t), e4(r, { previousSessionId: a }));
}
function _t(t, e, _) {
    return !!__(t, e) && (_e(t, e, _), !0);
}
async function _e(t, e, _) {
    if (!t.eventBuffer) return null;
    try {
        _ && "buffer" === t.recordingMode && t.eventBuffer.clear(), _ && (t.eventBuffer.hasCheckout = !0);
        let a = t.getOptions(),
            r = (function (t, e) {
                try {
                    if ("function" == typeof e && t.type === t0.Custom) return e(t);
                } catch (t) {
                    return (
                        eX &&
                            v.kg.error(
                                "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                                t,
                            ),
                        null
                    );
                }
                return t;
            })(e, a.beforeAddRecordingEvent);
        if (!r) return;
        return await t.eventBuffer.addEvent(r);
    } catch (a) {
        let e = a && a instanceof ez ? "addEventSizeExceeded" : "addEvent";
        t.handleException(a), await t.stop({ reason: e });
        let _ = (0, O.s3)();
        _ && _.recordDroppedEvent("internal_sdk_error", "replay");
    }
}
function __(t, e) {
    if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
    let _ = eh(e.timestamp);
    return (
        !(_ + t.timeouts.sessionIdlePause < Date.now()) &&
        (!(_ > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration) ||
            (e$(
                `[Replay] Skipping event with timestamp ${_} because it is after maxReplayDuration`,
                t.getOptions()._experiments.traceInternals,
            ),
            !1))
    );
}
function _a(t) {
    return "transaction" === t.type;
}
function _r(t) {
    return "feedback" === t.type;
}
function _n(t) {
    return !!t.category;
}
function _o(t, e) {
    return e.map(({ type: e, start: _, end: a, name: r, data: n }) => {
        let o = t.throttledAddEvent({
            type: t0.Custom,
            timestamp: _,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: e,
                    description: r,
                    startTimestamp: _,
                    endTimestamp: a,
                    data: n,
                },
            },
        });
        return "string" == typeof o ? Promise.resolve(null) : o;
    });
}
function _E(t, e) {
    var _;
    t.isEnabled() &&
        null !== e &&
        ((_ = e.name),
        ((!eX || !t.getOptions()._experiments.traceInternals) && (0, L.W)(_, (0, O.s3)())) ||
            t.addUpdate(() => (_o(t, [e]), !0)));
}
function _i(t) {
    if (!t) return;
    let e = new TextEncoder();
    try {
        if ("string" == typeof t) return e.encode(t).length;
        if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
        if (t instanceof FormData) {
            let _ = _u(t);
            return e.encode(_).length;
        }
        if (t instanceof Blob) return t.size;
        if (t instanceof ArrayBuffer) return t.byteLength;
    } catch (t) {}
}
function _c(t) {
    if (!t) return;
    let e = parseInt(t, 10);
    return isNaN(e) ? void 0 : e;
}
function _s(t) {
    try {
        if ("string" == typeof t) return [t];
        if (t instanceof URLSearchParams) return [t.toString()];
        if (t instanceof FormData) return [_u(t)];
        if (!t) return [void 0];
    } catch (e) {
        return eX && v.kg.warn("[Replay] Failed to serialize body", t), [void 0, "BODY_PARSE_ERROR"];
    }
    return eX && v.kg.info("[Replay] Skipping network body because of body type", t), [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function _l(t, e) {
    if (!t)
        return {
            headers: {},
            size: void 0,
            _meta: { warnings: [e] },
        };
    let _ = { ...t._meta },
        a = _.warnings || [];
    return (_.warnings = [...a, e]), (t._meta = _), t;
}
function _I(t, e) {
    if (!e) return null;
    let { startTimestamp: _, endTimestamp: a, url: r, method: n, statusCode: o, request: E, response: i } = e;
    return {
        type: t,
        start: _ / 1000,
        end: a / 1000,
        name: r,
        data: (0, y.Jr)({
            method: n,
            statusCode: o,
            request: E,
            response: i,
        }),
    };
}
function _R(t) {
    return {
        headers: {},
        size: t,
        _meta: { warnings: ["URL_SKIPPED"] },
    };
}
function _N(t, e, _) {
    if (!e && 0 === Object.keys(t).length) return;
    if (!e) return { headers: t };
    if (!_)
        return {
            headers: t,
            size: e,
        };
    let a = {
            headers: t,
            size: e,
        },
        { body: r, warnings: n } = (function (t) {
            if (!t || "string" != typeof t) return { body: t };
            let e = t.length > 150000,
                _ = (function (t) {
                    let e = t[0],
                        _ = t[t.length - 1];
                    return ("[" === e && "]" === _) || ("{" === e && "}" === _);
                })(t);
            if (e) {
                let e = t.slice(0, 150000);
                return _
                    ? {
                          body: e,
                          warnings: ["MAYBE_JSON_TRUNCATED"],
                      }
                    : {
                          body: `${e}…`,
                          warnings: ["TEXT_TRUNCATED"],
                      };
            }
            if (_)
                try {
                    return { body: JSON.parse(t) };
                } catch (t) {}
            return { body: t };
        })(_);
    return (a.body = r), n && n.length > 0 && (a._meta = { warnings: n }), a;
}
function _A(t, e) {
    return Object.entries(t).reduce((_, [a, r]) => {
        let n = a.toLowerCase();
        return e.includes(n) && t[a] && (_[n] = r), _;
    }, {});
}
function _u(t) {
    return new URLSearchParams(t).toString();
}
function _T(t, e) {
    let _ = (function (t, e = V.document.baseURI) {
        if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(V.location.origin)) return t;
        let _ = new URL(t, e);
        if (_.origin !== new URL(e).origin) return t;
        let a = _.href;
        return !t.endsWith("/") && a.endsWith("/") ? a.slice(0, -1) : a;
    })(t);
    return (0, W.U0)(_, e);
}
async function _d(t, e, _) {
    try {
        let a = await _f(t, e, _),
            r = _I("resource.fetch", a);
        _E(_.replay, r);
    } catch (t) {
        eX && v.kg.error("[Replay] Failed to capture fetch breadcrumb", t);
    }
}
async function _f(t, e, _) {
    let a = Date.now(),
        { startTimestamp: r = a, endTimestamp: n = a } = e,
        { url: o, method: E, status_code: i = 0, request_body_size: c, response_body_size: s } = t.data,
        l = _T(o, _.networkDetailAllowUrls) && !_T(o, _.networkDetailDenyUrls);
    return {
        startTimestamp: r,
        endTimestamp: n,
        url: o,
        method: E,
        statusCode: i,
        request: l
            ? (function ({ networkCaptureBodies: t, networkRequestHeaders: e }, _, a) {
                  var r, n;
                  let o = _
                      ? ((r = _),
                        (n = e),
                        1 === r.length && "string" != typeof r[0] ? _P(r[0], n) : 2 === r.length ? _P(r[1], n) : {})
                      : {};
                  if (!t) return _N(o, a, void 0);
                  let [E, i] = _s(_p(_)),
                      c = _N(o, a, E);
                  return i ? _l(c, i) : c;
              })(_, e.input, c)
            : _R(c),
        response: await _O(l, _, e.response, s),
    };
}
async function _O(t, { networkCaptureBodies: e, networkResponseHeaders: _ }, a, r) {
    if (!t && void 0 !== r) return _R(r);
    let n = a ? _C(a.headers, _) : {};
    if (!a || (!e && void 0 !== r)) return _N(n, r, void 0);
    let [o, E] = await _L(a),
        i = (function (t, { networkCaptureBodies: e, responseBodySize: _, captureDetails: a, headers: r }) {
            try {
                let n = t && t.length && void 0 === _ ? _i(t) : _;
                if (!a) return _R(n);
                if (e) return _N(r, n, t);
                return _N(r, n, void 0);
            } catch (t) {
                return eX && v.kg.warn("[Replay] Failed to serialize response body", t), _N(r, _, void 0);
            }
        })(o, {
            networkCaptureBodies: e,
            responseBodySize: r,
            captureDetails: t,
            headers: n,
        });
    return E ? _l(i, E) : i;
}
async function _L(t) {
    let e = (function (t) {
        try {
            return t.clone();
        } catch (t) {
            eX && v.kg.warn("[Replay] Failed to clone response body", t);
        }
    })(t);
    if (!e) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var _;
        return [
            await ((_ = e),
            new Promise((t, e) => {
                let a = (0, B.iK)(() => e(Error("Timeout while trying to read response body")), 500);
                _h(_)
                    .then(
                        (e) => t(e),
                        (t) => e(t),
                    )
                    .finally(() => clearTimeout(a));
            })),
        ];
    } catch (t) {
        return eX && v.kg.warn("[Replay] Failed to get text body from response", t), [void 0, "BODY_PARSE_ERROR"];
    }
}
function _p(t = []) {
    if (2 === t.length && "object" == typeof t[1]) return t[1].body;
}
function _C(t, e) {
    let _ = {};
    return (
        e.forEach((e) => {
            t.get(e) && (_[e] = t.get(e));
        }),
        _
    );
}
function _P(t, e) {
    if (!t) return {};
    let _ = t.headers;
    return _ ? (_ instanceof Headers ? _C(_, e) : Array.isArray(_) ? {} : _A(_, e)) : {};
}
async function _h(t) {
    return await t.text();
}
async function _D(t, e, _) {
    try {
        let a = (function (t, e, _) {
                let a = Date.now(),
                    { startTimestamp: r = a, endTimestamp: n = a, input: o, xhr: E } = e,
                    { url: i, method: c, status_code: s = 0, request_body_size: l, response_body_size: I } = t.data;
                if (!i) return null;
                if (!E || !_T(i, _.networkDetailAllowUrls) || _T(i, _.networkDetailDenyUrls)) {
                    let t = _R(l);
                    return {
                        startTimestamp: r,
                        endTimestamp: n,
                        url: i,
                        method: c,
                        statusCode: s,
                        request: t,
                        response: _R(I),
                    };
                }
                let R = E[K.xU],
                    N = R ? _A(R.request_headers, _.networkRequestHeaders) : {},
                    A = _A(
                        (function (t) {
                            let e = t.getAllResponseHeaders();
                            return e
                                ? e.split("\r\n").reduce((t, e) => {
                                      let [_, a] = e.split(": ");
                                      return a && (t[_.toLowerCase()] = a), t;
                                  }, {})
                                : {};
                        })(E),
                        _.networkResponseHeaders,
                    ),
                    [u, T] = _.networkCaptureBodies ? _s(o) : [void 0],
                    [d, f] = _.networkCaptureBodies
                        ? (function (t) {
                              let e = [];
                              try {
                                  return [t.responseText];
                              } catch (t) {
                                  e.push(t);
                              }
                              try {
                                  var _ = t.response,
                                      a = t.responseType;
                                  try {
                                      if ("string" == typeof _) return [_];
                                      if (_ instanceof Document) return [_.body.outerHTML];
                                      if ("json" === a && _ && "object" == typeof _) return [JSON.stringify(_)];
                                      if (!_) return [void 0];
                                  } catch (t) {
                                      return (
                                          eX && v.kg.warn("[Replay] Failed to serialize body", _),
                                          [void 0, "BODY_PARSE_ERROR"]
                                      );
                                  }
                                  return (
                                      eX && v.kg.info("[Replay] Skipping network body because of body type", _),
                                      [void 0, "UNPARSEABLE_BODY_TYPE"]
                                  );
                              } catch (t) {
                                  e.push(t);
                              }
                              return eX && v.kg.warn("[Replay] Failed to get xhr response body", ...e), [void 0];
                          })(E)
                        : [void 0],
                    O = _N(N, l, u),
                    L = _N(A, I, d);
                return {
                    startTimestamp: r,
                    endTimestamp: n,
                    url: i,
                    method: c,
                    statusCode: s,
                    request: T ? _l(O, T) : O,
                    response: f ? _l(L, f) : L,
                };
            })(t, e, _),
            r = _I("resource.xhr", a);
        _E(_.replay, r);
    } catch (t) {
        eX && v.kg.error("[Replay] Failed to capture xhr breadcrumb", t);
    }
}
async function _S(t) {
    try {
        return Promise.all(
            _o(t, [
                (function (t) {
                    let { jsHeapSizeLimit: e, totalJSHeapSize: _, usedJSHeapSize: a } = t,
                        r = Date.now() / 1000;
                    return {
                        type: "memory",
                        name: "memory",
                        start: r,
                        end: r,
                        data: {
                            memory: {
                                jsHeapSizeLimit: e,
                                totalJSHeapSize: _,
                                usedJSHeapSize: a,
                            },
                        },
                    };
                })(V.performance.memory),
            ]),
        );
    } catch (t) {
        return [];
    }
}
async function _g({ client: t, scope: e, replayId: _, event: a }) {
    let r = {
        event_id: _,
        integrations:
            "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations)
                ? void 0
                : Object.keys(t._integrations),
    };
    t.emit("preprocessEvent", a, r);
    let n = await (0, C.R)(t.getOptions(), a, r, e, t, (0, O.aF)());
    if (!n) return null;
    n.platform = n.platform || "javascript";
    let o = t.getSdkMetadata(),
        { name: E, version: i } = (o && o.sdk) || {};
    return (
        (n.sdk = {
            ...n.sdk,
            name: E || "sentry.javascript.unknown",
            version: i || "0.0.0",
        }),
        n
    );
}
async function _y({ recordingData: t, replayId: e, segmentId: _, eventContext: a, timestamp: r, session: n }) {
    var o;
    let E,
        i = (function ({ recordingData: t, headers: e }) {
            let _,
                a = `${JSON.stringify(e)}
`;
            if ("string" == typeof t) _ = `${a}${t}`;
            else {
                let e = new TextEncoder().encode(a);
                (_ = new Uint8Array(e.length + t.length)).set(e), _.set(t, e.length);
            }
            return _;
        })({
            recordingData: t,
            headers: { segment_id: _ },
        }),
        { urls: c, errorIds: s, traceIds: l, initialTimestamp: I } = a,
        R = (0, O.s3)(),
        N = (0, O.nZ)(),
        A = R && R.getTransport(),
        u = R && R.getDsn();
    if (!R || !A || !u || !n.sampled) return (0, w.WD)({});
    let T = {
            type: "replay_event",
            replay_start_timestamp: I / 1000,
            timestamp: r / 1000,
            error_ids: s,
            trace_ids: l,
            urls: c,
            replay_id: e,
            segment_id: _,
            replay_type: n.sampled,
        },
        d = await _g({
            scope: N,
            client: R,
            replayId: e,
            event: T,
        });
    if (!d)
        return (
            R.recordDroppedEvent("event_processor", "replay", T),
            ej("An event processor returned `null`, will not send event."),
            (0, w.WD)({})
        );
    delete d.sdkProcessingMetadata;
    let f =
        ((o = R.getOptions().tunnel),
        (0, b.Jd)((0, b.Cd)(d, (0, b.HY)(d), o, u), [
            [{ type: "replay_event" }, d],
            [
                {
                    type: "replay_recording",
                    length: "string" == typeof i ? new TextEncoder().encode(i).length : i.length,
                },
                i,
            ],
        ]));
    try {
        E = await A.send(f);
    } catch (e) {
        let t = Error(X);
        try {
            t.cause = e;
        } catch (t) {}
        throw t;
    }
    if ("number" == typeof E.statusCode && (E.statusCode < 200 || E.statusCode >= 300)) throw new _m(E.statusCode);
    let L = (0, M.WG)({}, E);
    if ((0, M.Q)(L, "replay")) throw new _G(L);
    return E;
}
class _m extends Error {
    constructor(t) {
        super(`Transport returned status code ${t}`);
    }
}
class _G extends Error {
    constructor(t) {
        super("Rate limit hit"), (this.rateLimits = t);
    }
}
async function _v(
    t,
    e = {
        count: 0,
        interval: 5000,
    },
) {
    let { recordingData: _, options: a } = t;
    if (_.length)
        try {
            return await _y(t), !0;
        } catch (_) {
            if (_ instanceof _m || _ instanceof _G) throw _;
            if (
                ((0, p.v)("Replays", { _retryCount: e.count }),
                eX && a._experiments && a._experiments.captureExceptions && (0, p.Tb)(_),
                e.count >= 3)
            ) {
                let t = Error(`${X} - max retries exceeded`);
                try {
                    t.cause = _;
                } catch (t) {}
                throw t;
            }
            return (
                (e.interval *= ++e.count),
                new Promise((_, a) => {
                    (0, B.iK)(async () => {
                        try {
                            await _v(t, e), _(!0);
                        } catch (t) {
                            a(t);
                        }
                    }, e.interval);
                })
            );
        }
}
let _U = "__THROTTLED";
class _W {
    constructor({ options: t, recordingOptions: e }) {
        _W.prototype.__init.call(this),
            _W.prototype.__init2.call(this),
            _W.prototype.__init3.call(this),
            _W.prototype.__init4.call(this),
            _W.prototype.__init5.call(this),
            _W.prototype.__init6.call(this),
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
            (this._debouncedFlush = (function (t, e, _) {
                let a,
                    r,
                    n,
                    o = _ && _.maxWait ? Math.max(_.maxWait, e) : 0;
                function E() {
                    return i(), (a = t());
                }
                function i() {
                    void 0 !== r && clearTimeout(r), void 0 !== n && clearTimeout(n), (r = n = void 0);
                }
                function c() {
                    return r && clearTimeout(r), (r = (0, B.iK)(E, e)), o && void 0 === n && (n = (0, B.iK)(E, o)), a;
                }
                return (
                    (c.cancel = i),
                    (c.flush = function () {
                        return void 0 !== r || void 0 !== n ? E() : a;
                    }),
                    c
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (t, e, _) {
                let a = new Map(),
                    r = !1;
                return (...e) => {
                    let _ = Math.floor(Date.now() / 1000),
                        n = _ - 5;
                    if (
                        (a.forEach((t, e) => {
                            e < n && a.delete(e);
                        }),
                        [...a.values()].reduce((t, e) => t + e, 0) >= 300)
                    ) {
                        let t = r;
                        return (r = !0), t ? "__SKIPPED" : _U;
                    }
                    r = !1;
                    let o = a.get(_) || 0;
                    return a.set(_, o + 1), t(...e);
                };
            })(
                (t, e) =>
                    (function (t, e, _) {
                        return __(t, e) ? _e(t, e, _) : Promise.resolve(null);
                    })(this, t, e),
                0,
                0,
            ));
        let { slowClickTimeout: _, slowClickIgnoreSelectors: a } = this.getOptions(),
            r = _
                ? {
                      threshold: Math.min(3000, _),
                      timeout: _,
                      scrollTimeout: 300,
                      ignoreSelector: a ? a.join(",") : "",
                  }
                : void 0;
        r && (this.clickDetector = new eG(this, r));
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
        eX && v.kg.error("[Replay]", t),
            eX && this._options._experiments && this._options._experiments.captureExceptions && (0, p.Tb)(t);
    }
    initializeSampling(t) {
        let { errorSampleRate: e, sessionSampleRate: _ } = this._options,
            a = e <= 0 && _ <= 0;
        if (((this._requiresManualStart = a), !a)) {
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
            eX && v.kg.info("[Replay] Recording is already in progress");
            return;
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
            eX && v.kg.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
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
            eX && v.kg.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
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
                _ = this._canvas;
            this._stopRecording = eP({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode && { checkoutEveryNms: 60000 }),
                emit:
                    ((t = this),
                    (e = !1),
                    (_, a) => {
                        if (!t.checkAndHandleExpiredSession()) {
                            eX && v.kg.warn("[Replay] Received replay event after session expired.");
                            return;
                        }
                        let r = a || !e;
                        (e = !0),
                            t.clickDetector &&
                                (function (t, e) {
                                    try {
                                        var _;
                                        if (((_ = e), 3 !== _.type)) return;
                                        let { source: a } = e.data;
                                        if (
                                            (a === t1.Mutation && t.registerMutation(e.timestamp),
                                            a === t1.Scroll && t.registerScroll(e.timestamp),
                                            e.data.source === t1.MouseInteraction)
                                        ) {
                                            let { type: _, id: a } = e.data,
                                                r = eP.mirror.getNode(a);
                                            r instanceof HTMLElement && _ === t2.Click && t.registerClick(r);
                                        }
                                    } catch (t) {}
                                })(t.clickDetector, _),
                            t.addUpdate(() => {
                                var e;
                                if (("buffer" === t.recordingMode && r && t.setInitialState(), !_t(t, _, r))) return !0;
                                if (!r) return !1;
                                if (
                                    ((e = t),
                                    r &&
                                        e.session &&
                                        0 === e.session.segmentId &&
                                        _t(
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
                                        (ej(
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
                ...(_
                    ? {
                          recordCanvas: _.recordCanvas,
                          getCanvasManager: _.getCanvasManager,
                          sampling: _.sampling,
                          dataURLOptions: _.dataURLOptions,
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
                ej(
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
                                V.sessionStorage.removeItem(F);
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
            ej("[Replay] Pausing replay", this._options._experiments.traceInternals));
    }
    resume() {
        this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1),
            this.startRecording(),
            ej("[Replay] Resuming replay", this._options._experiments.traceInternals));
    }
    async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let e = Date.now();
        ej("[Replay] Converting buffer to session", this._options._experiments.traceInternals),
            await this.flushImmediate();
        let _ = this.stopRecording();
        t &&
            _ &&
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
        let t = `${V.location.pathname}${V.location.hash}${V.location.search}`,
            e = `${V.location.origin}${t}`;
        (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            this._clearContext(),
            (this._context.initialUrl = e),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(e);
    }
    throttledAddEvent(t, e) {
        let _ = this._throttledAddEvent(t, e);
        if (_ === _U) {
            let t = eW({ category: "replay.throttled" });
            this.addUpdate(
                () =>
                    !_t(this, {
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
        return _;
    }
    getCurrentRoute() {
        let t = this.lastActiveSpan || (0, P.HN)(),
            e = t && (0, P.Gx)(t),
            _ = ((e && (0, P.XU)(e).data) || {})[h.Zj];
        if (e && _ && ["route", "custom"].includes(_)) return (0, P.XU)(e).description;
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
                            ej(`[Replay] Using compression worker${t ? ` from ${t}` : ""}`);
                            let _ = new Worker(e);
                            return new e0(_);
                        } catch (t) {
                            ej("[Replay] Failed to create compression worker");
                        }
                    })(e);
                    if (t) return t;
                }
                return ej("[Replay] Using simple buffer"), new eJ();
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
            _ = e9(
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
        this.session = _;
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
            V.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                V.addEventListener("blur", this._handleWindowBlur),
                V.addEventListener("focus", this._handleWindowFocus),
                V.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                    (!(function (t) {
                        let e = (0, O.s3)();
                        (0, k.O)((e) => {
                            var _, a;
                            if (!t.isEnabled()) return;
                            let r = (function (t) {
                                let { target: e, message: _ } = (function (t) {
                                    let e,
                                        _ = "click" === t.name,
                                        a = null;
                                    try {
                                        (a = _ ? ey(t.event) : em(t.event)),
                                            (e = (0, m.Rt)(a, { maxStringLength: 200 }) || "<unknown>");
                                    } catch (t) {
                                        e = "<unknown>";
                                    }
                                    return {
                                        target: a,
                                        message: e,
                                    };
                                })(t);
                                return eW({
                                    category: `ui.${t.name}`,
                                    ...ew(e, _),
                                });
                            })(e);
                            if (!r) return;
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
                                ((_ = t.clickDetector), (a = ey(e.event)), _.handleClick(r, a)),
                                eS(t, r);
                        }),
                            (0, x.a)((e) => {
                                if (!t.isEnabled()) return;
                                let _ = (function (t) {
                                    let { from: e, to: _ } = t,
                                        a = Date.now() / 1000;
                                    return {
                                        type: "navigation.push",
                                        start: a,
                                        end: a,
                                        name: _,
                                        data: { previous: e },
                                    };
                                })(e);
                                null !== _ &&
                                    (t.getContext().urls.push(_.name),
                                    t.triggerUserActivity(),
                                    t.addUpdate(() => (_o(t, [_]), !1)));
                            });
                        let _ = (0, O.s3)();
                        _ &&
                            _.on("beforeAddBreadcrumb", (e) =>
                                (function (t, e) {
                                    var _;
                                    if (!t.isEnabled() || !_n(e)) return;
                                    let a =
                                        ((_ = e),
                                        !_n(_) ||
                                        ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(_.category) ||
                                        _.category.startsWith("ui.")
                                            ? null
                                            : "console" === _.category
                                              ? (function (t) {
                                                    let e = t.data && t.data.arguments;
                                                    if (!Array.isArray(e) || 0 === e.length) return eW(t);
                                                    let _ = !1,
                                                        a = e.map((t) => {
                                                            if (!t) return t;
                                                            if ("string" == typeof t)
                                                                return t.length > 5000
                                                                    ? ((_ = !0), `${t.slice(0, 5000)}…`)
                                                                    : t;
                                                            if ("object" == typeof t)
                                                                try {
                                                                    let e = (0, g.Fv)(t, 7);
                                                                    if (JSON.stringify(e).length > 5000)
                                                                        return (
                                                                            (_ = !0),
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
                                                            arguments: a,
                                                            ...(_
                                                                ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                                                                : {}),
                                                        },
                                                    });
                                                })(_)
                                              : eW(_));
                                    a && eS(t, a);
                                })(t, e),
                            );
                        let a = (0, O.s3)();
                        try {
                            let {
                                    networkDetailAllowUrls: e,
                                    networkDetailDenyUrls: _,
                                    networkCaptureBodies: r,
                                    networkRequestHeaders: n,
                                    networkResponseHeaders: o,
                                } = t.getOptions(),
                                E = {
                                    replay: t,
                                    networkDetailAllowUrls: e,
                                    networkDetailDenyUrls: _,
                                    networkCaptureBodies: r,
                                    networkRequestHeaders: n,
                                    networkResponseHeaders: o,
                                };
                            a &&
                                a.on("beforeAddBreadcrumb", (t, e) =>
                                    (function (t, e, _) {
                                        if (e.data)
                                            try {
                                                var a, r, n, o;
                                                if (
                                                    ((a = e),
                                                    "xhr" === a.category &&
                                                        (r = _) &&
                                                        r.xhr &&
                                                        (!(function (t, e) {
                                                            let { xhr: _, input: a } = e;
                                                            if (!_) return;
                                                            let r = _i(a),
                                                                n = _.getResponseHeader("content-length")
                                                                    ? _c(_.getResponseHeader("content-length"))
                                                                    : (function (t, e) {
                                                                          try {
                                                                              let _ =
                                                                                  "json" === e &&
                                                                                  t &&
                                                                                  "object" == typeof t
                                                                                      ? JSON.stringify(t)
                                                                                      : t;
                                                                              return _i(_);
                                                                          } catch (t) {
                                                                              return;
                                                                          }
                                                                      })(_.response, _.responseType);
                                                            void 0 !== r && (t.data.request_body_size = r),
                                                                void 0 !== n && (t.data.response_body_size = n);
                                                        })(e, _),
                                                        _D(e, _, t)),
                                                    (n = e),
                                                    "fetch" === n.category && (o = _) && o.response)
                                                ) {
                                                    let { input: a, response: r } = _,
                                                        n = _i(a ? _p(a) : void 0),
                                                        o = r ? _c(r.headers.get("content-length")) : void 0;
                                                    void 0 !== n && (e.data.request_body_size = n),
                                                        void 0 !== o && (e.data.response_body_size = o),
                                                        _d(e, _, t);
                                                }
                                            } catch (t) {
                                                eX && v.kg.warn("Error when enriching network breadcrumb");
                                            }
                                    })(E, t, e),
                                );
                        } catch (t) {}
                        let r = Object.assign(
                            (e, _) =>
                                t.isEnabled()
                                    ? "replay_event" === e.type
                                        ? (delete e.breadcrumbs, e)
                                        : (!e.type || _a(e) || _r(e)) && t.checkAndHandleExpiredSession()
                                          ? _r(e)
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
                                                  _.originalException &&
                                                  _.originalException.__rrweb__ &&
                                                  !t.getOptions()._experiments.captureExceptions
                                                ? (eX && v.kg.log("[Replay] Ignoring error from rrweb internals", e),
                                                  null)
                                                : ((("buffer" === t.recordingMode &&
                                                      e.message !== X &&
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
                        (0, p.Qy)(r),
                            e &&
                                (e.on("beforeSendEvent", (e) => {
                                    t.isEnabled() &&
                                        !e.type &&
                                        (function (t, e) {
                                            let _ =
                                                e.exception &&
                                                e.exception.values &&
                                                e.exception.values[0] &&
                                                e.exception.values[0].value;
                                            "string" == typeof _ &&
                                                (_.match(
                                                    /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                                                ) ||
                                                    _.match(
                                                        /(does not match server-rendered HTML|Hydration failed because)/i,
                                                    )) &&
                                                eS(
                                                    t,
                                                    eW({
                                                        category: "replay.hydrate-error",
                                                        data: { url: (0, m.l4)() },
                                                    }),
                                                );
                                        })(t, e);
                                }),
                                e.on("afterSendEvent", (e, _) => {
                                    if (!t.isEnabled() || (e.type && !_a(e))) return;
                                    let a = _ && _.statusCode;
                                    if (a && !(a < 200) && !(a >= 300)) {
                                        if (_a(e))
                                            return void (function (t, e) {
                                                let _ = t.getContext();
                                                e.contexts &&
                                                    e.contexts.trace &&
                                                    e.contexts.trace.trace_id &&
                                                    _.traceIds.size < 100 &&
                                                    _.traceIds.add(e.contexts.trace.trace_id);
                                            })(t, e);
                                        !(function (t, e) {
                                            let _ = t.getContext();
                                            if (
                                                (e.event_id && _.errorIds.size < 100 && _.errorIds.add(e.event_id),
                                                "buffer" !== t.recordingMode || !e.tags || !e.tags.replayId)
                                            )
                                                return;
                                            let { beforeErrorSampling: a } = t.getOptions();
                                            ("function" != typeof a || a(e)) &&
                                                (0, B.iK)(() => {
                                                    t.sendBufferedReplayOrFlush();
                                                });
                                        })(t, e);
                                    }
                                }),
                                e.on("createDsc", (e) => {
                                    let _ = t.getSessionId();
                                    _ &&
                                        t.isEnabled() &&
                                        "session" === t.recordingMode &&
                                        t.checkAndHandleExpiredSession() &&
                                        (e.replay_id = _);
                                }),
                                e.on("spanStart", (e) => {
                                    t.lastActiveSpan = e;
                                }),
                                e.on("spanEnd", (e) => {
                                    t.lastActiveSpan = e;
                                }),
                                e.on("beforeSendFeedback", (e, _) => {
                                    let a = t.getSessionId();
                                    _ &&
                                        _.includeReplay &&
                                        t.isEnabled() &&
                                        a &&
                                        e.contexts &&
                                        e.contexts.feedback &&
                                        (e.contexts.feedback.replay_id = a);
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
            function _({ entries: t }) {
                t.forEach(e);
            }
            let a = [];
            return (
                ["navigation", "paint", "resource"].forEach((t) => {
                    a.push((0, H._j)(t, _));
                }),
                a.push((0, H.$A)(eY(eK, t)), (0, H.PR)(eY(ek, t)), (0, H.to)(eY(ex, t)), (0, H.YF)(eY(eV, t))),
                () => {
                    a.forEach((t) => t());
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
        } catch (t) {
            this.handleException(t);
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
                let _ = (function (t) {
                    var e;
                    let { metaKey: _, shiftKey: a, ctrlKey: r, altKey: n, key: o, target: E } = t;
                    if (!E || "INPUT" === (e = E).tagName || "TEXTAREA" === e.tagName || e.isContentEditable || !o)
                        return null;
                    let i = _ || r || n,
                        c = 1 === o.length;
                    if (!i && c) return null;
                    let s = (0, m.Rt)(E, { maxStringLength: 200 }) || "<unknown>",
                        l = ew(E, s);
                    return eW({
                        category: "ui.keyDown",
                        message: s,
                        data: {
                            ...l.data,
                            metaKey: _,
                            shiftKey: a,
                            ctrlKey: r,
                            altKey: n,
                            key: o,
                        },
                    });
                })(e);
                _ && eS(t, _);
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
                return void ej("[Replay] Document has become active, but session has expired");
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
        let t = this.performanceEntries.map(eB).filter(Boolean).concat(this.replayPerformanceEntries);
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(_o(this, t));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
    }
    _updateInitialTimestampFromEventBuffer() {
        let { session: t, eventBuffer: e } = this;
        if (!t || !e || this._requiresManualStart || t.segmentId) return;
        let _ = e.getEarliestTimestamp();
        _ && _ < this._context.initialTimestamp && (this._context.initialTimestamp = _);
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
            eX && v.kg.error("[Replay] No session or eventBuffer found to flush.");
            return;
        }
        if ((await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents)) {
            if ((await _S(this), this.eventBuffer) && t === this.getSessionId())
                try {
                    this._updateInitialTimestampFromEventBuffer();
                    let e = Date.now();
                    if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 30000)
                        throw Error("Session is too long, not sending replay");
                    let _ = this._popEventContext(),
                        a = this.session.segmentId++;
                    this._maybeSaveSession();
                    let r = await this.eventBuffer.finish();
                    await _v({
                        replayId: t,
                        recordingData: r,
                        segmentId: a,
                        eventContext: _,
                        session: this.session,
                        options: this.getOptions(),
                        timestamp: e,
                    });
                } catch (e) {
                    this.handleException(e), this.stop({ reason: "sendReplay" });
                    let t = (0, O.s3)();
                    t && t.recordDroppedEvent("send_error", "replay");
                }
        }
    }
    __init5() {
        this._flush = async ({ force: t = !1 } = {}) => {
            if (!this._isEnabled && !t) return;
            if (!this.checkAndHandleExpiredSession()) {
                eX && v.kg.error("[Replay] Attempting to finish replay event after session expired.");
                return;
            }
            if (!this.session) return;
            let e = this.session.started,
                _ = Date.now() - e;
            this._debouncedFlush.cancel();
            let a = _ < this._options.minReplayDuration,
                r = _ > this._options.maxReplayDuration + 5000;
            if (a || r) {
                ej(
                    `[Replay] Session duration (${Math.floor(_ / 1000)}s) is too ${a ? "short" : "long"}, not sending replay.`,
                    this._options._experiments.traceInternals,
                ),
                    a && this._debouncedFlush();
                return;
            }
            let n = this.eventBuffer;
            if (
                (n &&
                    0 === this.session.segmentId &&
                    !n.hasCheckout &&
                    ej(
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
                eX && v.kg.error(t);
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
                _ = this._options.mutationLimit,
                a = this._options.mutationBreadcrumbLimit,
                r = _ && e > _;
            if (e > a || r) {
                let t = eW({
                    category: "replay.mutations",
                    data: {
                        count: e,
                        limit: r,
                    },
                });
                this._createCustomBreadcrumb(t);
            }
            return (
                !r ||
                (this.stop({
                    reason: "mutationLimit",
                    forceFlush: "session" === this.recordingMode,
                }),
                !1)
            );
        };
    }
}
function _b(t, e) {
    return [...t, ...e].join(",");
}
let _w = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    _M = ["content-length", "content-type", "accept"],
    _Y = !1,
    _B = (t) => new _H(t);
class _H {
    static __initStatic() {
        this.id = "Replay";
    }
    constructor({
        flushMinDelay: t = 5000,
        flushMaxDelay: e = 5500,
        minReplayDuration: _ = 4999,
        maxReplayDuration: a = 3600000,
        stickySession: r = !0,
        useCompression: n = !0,
        workerUrl: o,
        _experiments: E = {},
        maskAllText: i = !0,
        maskAllInputs: c = !0,
        blockAllMedia: s = !0,
        mutationBreadcrumbLimit: l = 750,
        mutationLimit: I = 10000,
        slowClickTimeout: R = 7000,
        slowClickIgnoreSelectors: N = [],
        networkDetailAllowUrls: A = [],
        networkDetailDenyUrls: u = [],
        networkCaptureBodies: T = !0,
        networkRequestHeaders: d = [],
        networkResponseHeaders: f = [],
        mask: O = [],
        maskAttributes: L = ["title", "placeholder"],
        unmask: p = [],
        block: C = [],
        unblock: P = [],
        ignore: h = [],
        maskFn: D,
        beforeAddRecordingEvent: S,
        beforeErrorSampling: g,
    } = {}) {
        this.name = _H.id;
        let y = (function ({ mask: t, unmask: e, block: _, unblock: a, ignore: r }) {
            return {
                maskTextSelector: _b(t, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: _b(e, []),
                blockSelector: _b(_, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                unblockSelector: _b(a, []),
                ignoreSelector: _b(r, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]']),
            };
        })({
            mask: O,
            unmask: p,
            block: C,
            unblock: P,
            ignore: h,
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: i,
                maskInputOptions: { password: !0 },
                maskTextFn: D,
                maskInputFn: D,
                maskAttributeFn: (t, e, _) =>
                    (function ({ el: t, key: e, maskAttributes: _, maskAllText: a, privacyOptions: r, value: n }) {
                        return !a || (r.unmaskTextSelector && t.matches(r.unmaskTextSelector))
                            ? n
                            : _.includes(e) ||
                                ("value" === e &&
                                    "INPUT" === t.tagName &&
                                    ["submit", "button"].includes(t.getAttribute("type") || ""))
                              ? n.replace(/[\S]/g, "*")
                              : n;
                    })({
                        maskAttributes: L,
                        maskAllText: i,
                        privacyOptions: y,
                        key: t,
                        value: e,
                        el: _,
                    }),
                ...y,
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
                minReplayDuration: Math.min(_, 15000),
                maxReplayDuration: Math.min(a, 3600000),
                stickySession: r,
                useCompression: n,
                workerUrl: o,
                blockAllMedia: s,
                maskAllInputs: c,
                maskAllText: i,
                mutationBreadcrumbLimit: l,
                mutationLimit: I,
                slowClickTimeout: R,
                slowClickIgnoreSelectors: N,
                networkDetailAllowUrls: A,
                networkDetailDenyUrls: u,
                networkCaptureBodies: T,
                networkRequestHeaders: _K(d),
                networkResponseHeaders: _K(f),
                beforeAddRecordingEvent: S,
                beforeErrorSampling: g,
                _experiments: E,
            }),
            this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
                    ? `${this._recordingOptions.blockSelector},${_w}`
                    : _w),
            this._isInitialized && (0, Y.j)())
        )
            throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return _Y;
    }
    set _isInitialized(t) {
        _Y = t;
    }
    afterAllSetup(t) {
        (0, Y.j)() && !this._replay && (this._setup(t), this._initialize(t));
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
            let _ = e.getOptions(),
                a = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, y.Jr)(t),
                },
                r = (0, D.o)(_.replaysSessionSampleRate),
                n = (0, D.o)(_.replaysOnErrorSampleRate);
            return (
                null == r &&
                    null == n &&
                    (0, v.Cf)(() => {
                        console.warn(
                            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                        );
                    }),
                null != r && (a.sessionSampleRate = r),
                null != n && (a.errorSampleRate = n),
                a
            );
        })(this._initialOptions, t);
        this._replay = new _W({
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
function _K(t) {
    return [..._M, ...t.map((t) => t.toLowerCase())];
}
function _k() {
    let t = (0, O.s3)();
    return t && t.getIntegrationByName("Replay");
}
_H.__initStatic();
