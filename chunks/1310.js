d.d(t, { t: () => tm });
var i,
    e,
    c = d(287822),
    a = d(425128),
    { entries: s, setPrototypeOf: n, isFrozen: Z, getPrototypeOf: b, getOwnPropertyDescriptor: m } = Object,
    { freeze: o, seal: u, create: h } = Object,
    { apply: W, construct: G } = "u" > typeof Reflect && Reflect;
o ||
    (o = function (l) {
        return l;
    }),
    u ||
        (u = function (l) {
            return l;
        }),
    W ||
        (W = function (l, t) {
            for (var d = arguments.length, i = Array(d > 2 ? d - 2 : 0), e = 2; e < d; e++) i[e - 2] = arguments[e];
            return l.apply(t, i);
        }),
    G ||
        (G = function (l) {
            for (var t = arguments.length, d = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) d[i - 1] = arguments[i];
            return new l(...d);
        });
var p = S(Array.prototype.forEach),
    N = S(Array.prototype.lastIndexOf),
    M = S(Array.prototype.pop),
    X = S(Array.prototype.push),
    r = S(Array.prototype.splice),
    y = S(String.prototype.toLowerCase),
    Y = S(String.prototype.toString),
    T = S(String.prototype.match),
    V = S(String.prototype.replace),
    L = S(String.prototype.indexOf),
    I = S(String.prototype.trim),
    z = S(Object.prototype.hasOwnProperty),
    w = S(RegExp.prototype.test),
    R =
        ((i = TypeError),
        function () {
            for (var l = arguments.length, t = Array(l), d = 0; d < l; d++) t[d] = arguments[d];
            return G(i, t);
        });
function S(l) {
    return function (t) {
        t instanceof RegExp && (t.lastIndex = 0);
        for (var d = arguments.length, i = Array(d > 1 ? d - 1 : 0), e = 1; e < d; e++) i[e - 1] = arguments[e];
        return W(l, t, i);
    };
}
function C(l, t) {
    let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
    n && n(l, null);
    let i = t.length;
    for (; i--; ) {
        let e = t[i];
        if ("string" == typeof e) {
            let l = d(e);
            l !== e && (Z(t) || (t[i] = l), (e = l));
        }
        l[e] = !0;
    }
    return l;
}
function x(l) {
    let t = h(null);
    for (let [d, i] of s(l))
        z(l, d) &&
            (Array.isArray(i)
                ? (t[d] = (function (l) {
                      for (let t = 0; t < l.length; t++) z(l, t) || (l[t] = null);
                      return l;
                  })(i))
                : i && "object" == typeof i && i.constructor === Object
                  ? (t[d] = x(i))
                  : (t[d] = i));
    return t;
}
function g(l, t) {
    for (; null !== l; ) {
        let d = m(l, t);
        if (d) {
            if (d.get) return S(d.get);
            if ("function" == typeof d.value) return S(d.value);
        }
        l = b(l);
    }
    return function () {
        return null;
    };
}
var D = o([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "search",
        "section",
        "select",
        "shadow",
        "slot",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
    ]),
    j = o([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "enterkeyhint",
        "exportparts",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "inputmode",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "part",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern",
    ]),
    U = o([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
    ]),
    F = o([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use",
    ]),
    O = o([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover",
        "mprescripts",
    ]),
    J = o([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none",
    ]),
    k = o(["#text"]),
    E = o([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "exportparts",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inert",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "part",
        "pattern",
        "placeholder",
        "playsinline",
        "popover",
        "popovertarget",
        "popovertargetaction",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "slot",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "wrap",
        "xmlns",
        "slot",
    ]),
    v = o([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "amplitude",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "exponent",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "intercept",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "mask-type",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "slope",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "tablevalues",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan",
    ]),
    K = o([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnsalign",
        "columnlines",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lspace",
        "lquote",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns",
    ]),
    H = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    Q = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    P = u(/<%[\w\W]*|[\w\W]*%>/gm),
    f = u(/\$\{[\w\W]*/gm),
    B = u(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    A = u(/^aria-[\-\w]+$/),
    _ = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    $ = u(/^(?:\w+script|data):/i),
    q = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    ll = u(/^html$/i),
    lt = Object.freeze({
        __proto__: null,
        ARIA_ATTR: A,
        ATTR_WHITESPACE: q,
        CUSTOM_ELEMENT: u(/^[a-z][.\w]*(-[.\w]+)+$/i),
        DATA_ATTR: B,
        DOCTYPE_NAME: ll,
        ERB_EXPR: P,
        IS_ALLOWED_URI: _,
        IS_SCRIPT_OR_DATA: $,
        MUSTACHE_EXPR: Q,
        TMPLIT_EXPR: f,
    }),
    ld = function (l, t) {
        if ("object" != typeof l || "function" != typeof l.createPolicy) return null;
        let d = null,
            i = "data-tt-policy-suffix";
        t && t.hasAttribute(i) && (d = t.getAttribute(i));
        let e = "dompurify" + (d ? "#" + d : "");
        try {
            return l.createPolicy(e, { createHTML: (l) => l, createScriptURL: (l) => l });
        } catch (l) {
            return console.warn("TrustedTypes policy " + e + " could not be created."), null;
        }
    },
    li = function () {
        return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
        };
    },
    le = (function l() {
        let t,
            d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "u" < typeof window ? null : window,
            i = (t) => l(t);
        if (((i.version = "3.3.3"), (i.removed = []), !d || !d.document || 9 !== d.document.nodeType || !d.Element))
            return (i.isSupported = !1), i;
        let { document: e } = d,
            c = e,
            a = c.currentScript,
            {
                DocumentFragment: n,
                HTMLTemplateElement: Z,
                Node: b,
                Element: m,
                NodeFilter: u,
                NamedNodeMap: W = d.NamedNodeMap || d.MozNamedAttrMap,
                HTMLFormElement: G,
                DOMParser: S,
                trustedTypes: Q,
            } = d,
            P = m.prototype,
            f = g(P, "cloneNode"),
            B = g(P, "remove"),
            A = g(P, "nextSibling"),
            $ = g(P, "childNodes"),
            q = g(P, "parentNode");
        if ("function" == typeof Z) {
            let l = e.createElement("template");
            l.content && l.content.ownerDocument && (e = l.content.ownerDocument);
        }
        let le = "",
            { implementation: lc, createNodeIterator: la, createDocumentFragment: ls, getElementsByTagName: ln } = e,
            { importNode: lZ } = c,
            lb = li();
        i.isSupported = "function" == typeof s && "function" == typeof q && lc && void 0 !== lc.createHTMLDocument;
        let {
                MUSTACHE_EXPR: lm,
                ERB_EXPR: lo,
                TMPLIT_EXPR: lu,
                DATA_ATTR: lh,
                ARIA_ATTR: lW,
                IS_SCRIPT_OR_DATA: lG,
                ATTR_WHITESPACE: lp,
                CUSTOM_ELEMENT: lN,
            } = lt,
            { IS_ALLOWED_URI: lM } = lt,
            lX = null,
            lr = C({}, [...D, ...j, ...U, ...O, ...k]),
            ly = null,
            lY = C({}, [...E, ...v, ...K, ...H]),
            lT = Object.seal(
                h(null, {
                    tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                }),
            ),
            lV = null,
            lL = null,
            lI = Object.seal(
                h(null, {
                    tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                }),
            ),
            lz = !0,
            lw = !0,
            lR = !1,
            lS = !0,
            lC = !1,
            lx = !0,
            lg = !1,
            lD = !1,
            lj = !1,
            lU = !1,
            lF = !1,
            lO = !1,
            lJ = !0,
            lk = !1,
            lE = !0,
            lv = !1,
            lK = {},
            lH = null,
            lQ = C({}, [
                "annotation-xml",
                "audio",
                "colgroup",
                "desc",
                "foreignobject",
                "head",
                "iframe",
                "math",
                "mi",
                "mn",
                "mo",
                "ms",
                "mtext",
                "noembed",
                "noframes",
                "noscript",
                "plaintext",
                "script",
                "style",
                "svg",
                "template",
                "thead",
                "title",
                "video",
                "xmp",
            ]),
            lP = null,
            lf = C({}, ["audio", "video", "img", "source", "image", "track"]),
            lB = null,
            lA = C({}, [
                "alt",
                "class",
                "for",
                "id",
                "label",
                "name",
                "pattern",
                "placeholder",
                "role",
                "summary",
                "title",
                "value",
                "style",
                "xmlns",
            ]),
            l_ = "http://www.w3.org/1998/Math/MathML",
            l$ = "http://www.w3.org/2000/svg",
            lq = "http://www.w3.org/1999/xhtml",
            l2 = lq,
            l0 = !1,
            l1 = null,
            l5 = C({}, [l_, l$, lq], Y),
            l9 = C({}, ["mi", "mo", "mn", "ms", "mtext"]),
            l3 = C({}, ["annotation-xml"]),
            l4 = C({}, ["title", "style", "font", "a", "script"]),
            l7 = null,
            l6 = ["application/xhtml+xml", "text/html"],
            l8 = null,
            tl = null,
            tt = e.createElement("form"),
            td = function (l) {
                return l instanceof RegExp || l instanceof Function;
            },
            ti = function () {
                let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!tl || tl !== l) {
                    if (
                        ((l && "object" == typeof l) || (l = {}),
                        (l = x(l)),
                        (l8 =
                            "application/xhtml+xml" ===
                            (l7 = -1 === l6.indexOf(l.PARSER_MEDIA_TYPE) ? "text/html" : l.PARSER_MEDIA_TYPE)
                                ? Y
                                : y),
                        (lX = z(l, "ALLOWED_TAGS") ? C({}, l.ALLOWED_TAGS, l8) : lr),
                        (ly = z(l, "ALLOWED_ATTR") ? C({}, l.ALLOWED_ATTR, l8) : lY),
                        (l1 = z(l, "ALLOWED_NAMESPACES") ? C({}, l.ALLOWED_NAMESPACES, Y) : l5),
                        (lB = z(l, "ADD_URI_SAFE_ATTR") ? C(x(lA), l.ADD_URI_SAFE_ATTR, l8) : lA),
                        (lP = z(l, "ADD_DATA_URI_TAGS") ? C(x(lf), l.ADD_DATA_URI_TAGS, l8) : lf),
                        (lH = z(l, "FORBID_CONTENTS") ? C({}, l.FORBID_CONTENTS, l8) : lQ),
                        (lV = z(l, "FORBID_TAGS") ? C({}, l.FORBID_TAGS, l8) : x({})),
                        (lL = z(l, "FORBID_ATTR") ? C({}, l.FORBID_ATTR, l8) : x({})),
                        (lK = !!z(l, "USE_PROFILES") && l.USE_PROFILES),
                        (lz = !1 !== l.ALLOW_ARIA_ATTR),
                        (lw = !1 !== l.ALLOW_DATA_ATTR),
                        (lR = l.ALLOW_UNKNOWN_PROTOCOLS || !1),
                        (lS = !1 !== l.ALLOW_SELF_CLOSE_IN_ATTR),
                        (lC = l.SAFE_FOR_TEMPLATES || !1),
                        (lx = !1 !== l.SAFE_FOR_XML),
                        (lg = l.WHOLE_DOCUMENT || !1),
                        (lU = l.RETURN_DOM || !1),
                        (lF = l.RETURN_DOM_FRAGMENT || !1),
                        (lO = l.RETURN_TRUSTED_TYPE || !1),
                        (lj = l.FORCE_BODY || !1),
                        (lJ = !1 !== l.SANITIZE_DOM),
                        (lk = l.SANITIZE_NAMED_PROPS || !1),
                        (lE = !1 !== l.KEEP_CONTENT),
                        (lv = l.IN_PLACE || !1),
                        (lM = l.ALLOWED_URI_REGEXP || _),
                        (l2 = l.NAMESPACE || lq),
                        (l9 = l.MATHML_TEXT_INTEGRATION_POINTS || l9),
                        (l3 = l.HTML_INTEGRATION_POINTS || l3),
                        (lT = l.CUSTOM_ELEMENT_HANDLING || {}),
                        l.CUSTOM_ELEMENT_HANDLING &&
                            td(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                            (lT.tagNameCheck = l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        l.CUSTOM_ELEMENT_HANDLING &&
                            td(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                            (lT.attributeNameCheck = l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        l.CUSTOM_ELEMENT_HANDLING &&
                            "boolean" == typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                            (lT.allowCustomizedBuiltInElements =
                                l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        lC && (lw = !1),
                        lF && (lU = !0),
                        lK &&
                            ((lX = C({}, k)),
                            (ly = h(null)),
                            !0 === lK.html && (C(lX, D), C(ly, E)),
                            !0 === lK.svg && (C(lX, j), C(ly, v), C(ly, H)),
                            !0 === lK.svgFilters && (C(lX, U), C(ly, v), C(ly, H)),
                            !0 === lK.mathMl && (C(lX, O), C(ly, K), C(ly, H))),
                        z(l, "ADD_TAGS") || (lI.tagCheck = null),
                        z(l, "ADD_ATTR") || (lI.attributeCheck = null),
                        l.ADD_TAGS &&
                            ("function" == typeof l.ADD_TAGS
                                ? (lI.tagCheck = l.ADD_TAGS)
                                : (lX === lr && (lX = x(lX)), C(lX, l.ADD_TAGS, l8))),
                        l.ADD_ATTR &&
                            ("function" == typeof l.ADD_ATTR
                                ? (lI.attributeCheck = l.ADD_ATTR)
                                : (ly === lY && (ly = x(ly)), C(ly, l.ADD_ATTR, l8))),
                        l.ADD_URI_SAFE_ATTR && C(lB, l.ADD_URI_SAFE_ATTR, l8),
                        l.FORBID_CONTENTS && (lH === lQ && (lH = x(lH)), C(lH, l.FORBID_CONTENTS, l8)),
                        l.ADD_FORBID_CONTENTS && (lH === lQ && (lH = x(lH)), C(lH, l.ADD_FORBID_CONTENTS, l8)),
                        lE && (lX["#text"] = !0),
                        lg && C(lX, ["html", "head", "body"]),
                        lX.table && (C(lX, ["tbody"]), delete lV.tbody),
                        l.TRUSTED_TYPES_POLICY)
                    ) {
                        if ("function" != typeof l.TRUSTED_TYPES_POLICY.createHTML)
                            throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                        if ("function" != typeof l.TRUSTED_TYPES_POLICY.createScriptURL)
                            throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                        le = (t = l.TRUSTED_TYPES_POLICY).createHTML("");
                    } else
                        void 0 === t && (t = ld(Q, a)), null !== t && "string" == typeof le && (le = t.createHTML(""));
                    o && o(l), (tl = l);
                }
            },
            te = C({}, [...j, ...U, ...F]),
            tc = C({}, [...O, ...J]),
            ta = function (l) {
                let t = q(l);
                (t && t.tagName) || (t = { namespaceURI: l2, tagName: "template" });
                let d = y(l.tagName),
                    i = y(t.tagName);
                return (
                    !!l1[l.namespaceURI] &&
                    (l.namespaceURI === l$
                        ? t.namespaceURI === lq
                            ? "svg" === d
                            : t.namespaceURI === l_
                              ? "svg" === d && ("annotation-xml" === i || l9[i])
                              : !!te[d]
                        : l.namespaceURI === l_
                          ? t.namespaceURI === lq
                              ? "math" === d
                              : t.namespaceURI === l$
                                ? "math" === d && l3[i]
                                : !!tc[d]
                          : l.namespaceURI === lq
                            ? (t.namespaceURI !== l$ || !!l3[i]) &&
                              (t.namespaceURI !== l_ || !!l9[i]) &&
                              !tc[d] &&
                              (l4[d] || !te[d])
                            : "application/xhtml+xml" === l7 && !!l1[l.namespaceURI])
                );
            },
            ts = function (l) {
                X(i.removed, { element: l });
                try {
                    q(l).removeChild(l);
                } catch (t) {
                    B(l);
                }
            },
            tn = function (l, t) {
                try {
                    X(i.removed, { attribute: t.getAttributeNode(l), from: t });
                } catch (l) {
                    X(i.removed, { attribute: null, from: t });
                }
                if ((t.removeAttribute(l), "is" === l))
                    if (lU || lF)
                        try {
                            ts(t);
                        } catch (l) {}
                    else
                        try {
                            t.setAttribute(l, "");
                        } catch (l) {}
            },
            tZ = function (l) {
                let d = null,
                    i = null;
                if (lj) l = "<remove></remove>" + l;
                else {
                    let t = T(l, /^[\r\n\t ]+/);
                    i = t && t[0];
                }
                "application/xhtml+xml" === l7 &&
                    l2 === lq &&
                    (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
                let c = t ? t.createHTML(l) : l;
                if (l2 === lq)
                    try {
                        d = new S().parseFromString(c, l7);
                    } catch (l) {}
                if (!d || !d.documentElement) {
                    d = lc.createDocument(l2, "template", null);
                    try {
                        d.documentElement.innerHTML = l0 ? le : c;
                    } catch (l) {}
                }
                let a = d.body || d.documentElement;
                return (l && i && a.insertBefore(e.createTextNode(i), a.childNodes[0] || null), l2 === lq)
                    ? ln.call(d, lg ? "html" : "body")[0]
                    : lg
                      ? d.documentElement
                      : a;
            },
            tb = function (l) {
                return la.call(
                    l.ownerDocument || l,
                    l,
                    u.SHOW_ELEMENT |
                        u.SHOW_COMMENT |
                        u.SHOW_TEXT |
                        u.SHOW_PROCESSING_INSTRUCTION |
                        u.SHOW_CDATA_SECTION,
                    null,
                );
            },
            tm = function (l) {
                return (
                    l instanceof G &&
                    ("string" != typeof l.nodeName ||
                        "string" != typeof l.textContent ||
                        "function" != typeof l.removeChild ||
                        !(l.attributes instanceof W) ||
                        "function" != typeof l.removeAttribute ||
                        "function" != typeof l.setAttribute ||
                        "string" != typeof l.namespaceURI ||
                        "function" != typeof l.insertBefore ||
                        "function" != typeof l.hasChildNodes)
                );
            },
            to = function (l) {
                return "function" == typeof b && l instanceof b;
            };
        function tu(l, t, d) {
            p(l, (l) => {
                l.call(i, t, d, tl);
            });
        }
        let th = function (l) {
                let t = null;
                if ((tu(lb.beforeSanitizeElements, l, null), tm(l))) return ts(l), !0;
                let d = l8(l.nodeName);
                if (
                    (tu(lb.uponSanitizeElement, l, { tagName: d, allowedTags: lX }),
                    (lx &&
                        l.hasChildNodes() &&
                        !to(l.firstElementChild) &&
                        w(/<[/\w!]/g, l.innerHTML) &&
                        w(/<[/\w!]/g, l.textContent)) ||
                        7 === l.nodeType ||
                        (lx && 8 === l.nodeType && w(/<[/\w]/g, l.data)))
                )
                    return ts(l), !0;
                if (!(lI.tagCheck instanceof Function && lI.tagCheck(d)) && (!lX[d] || lV[d])) {
                    if (
                        !lV[d] &&
                        tG(d) &&
                        ((lT.tagNameCheck instanceof RegExp && w(lT.tagNameCheck, d)) ||
                            (lT.tagNameCheck instanceof Function && lT.tagNameCheck(d)))
                    )
                        return !1;
                    if (lE && !lH[d]) {
                        let t = q(l) || l.parentNode,
                            d = $(l) || l.childNodes;
                        if (d && t) {
                            let i = d.length;
                            for (let e = i - 1; e >= 0; --e) {
                                let i = f(d[e], !0);
                                (i.__removalCount = (l.__removalCount || 0) + 1), t.insertBefore(i, A(l));
                            }
                        }
                    }
                    return ts(l), !0;
                }
                return (l instanceof m && !ta(l)) ||
                    (("noscript" === d || "noembed" === d || "noframes" === d) &&
                        w(/<\/no(script|embed|frames)/i, l.innerHTML))
                    ? (ts(l), !0)
                    : (lC &&
                          3 === l.nodeType &&
                          ((t = l.textContent),
                          p([lm, lo, lu], (l) => {
                              t = V(t, l, " ");
                          }),
                          l.textContent !== t && (X(i.removed, { element: l.cloneNode() }), (l.textContent = t))),
                      tu(lb.afterSanitizeElements, l, null),
                      !1);
            },
            tW = function (l, t, d) {
                if (lL[t] || (lJ && ("id" === t || "name" === t) && (d in e || d in tt))) return !1;
                if (lw && !lL[t] && w(lh, t));
                else if (lz && w(lW, t));
                else if (lI.attributeCheck instanceof Function && lI.attributeCheck(t, l));
                else if (!ly[t] || lL[t]) {
                    if (
                        !(
                            (tG(l) &&
                                ((lT.tagNameCheck instanceof RegExp && w(lT.tagNameCheck, l)) ||
                                    (lT.tagNameCheck instanceof Function && lT.tagNameCheck(l))) &&
                                ((lT.attributeNameCheck instanceof RegExp && w(lT.attributeNameCheck, t)) ||
                                    (lT.attributeNameCheck instanceof Function && lT.attributeNameCheck(t, l)))) ||
                            ("is" === t &&
                                lT.allowCustomizedBuiltInElements &&
                                ((lT.tagNameCheck instanceof RegExp && w(lT.tagNameCheck, d)) ||
                                    (lT.tagNameCheck instanceof Function && lT.tagNameCheck(d))))
                        )
                    )
                        return !1;
                } else if (lB[t]);
                else if (w(lM, V(d, lp, "")));
                else if (
                    ("src" === t || "xlink:href" === t || "href" === t) &&
                    "script" !== l &&
                    0 === L(d, "data:") &&
                    lP[l]
                );
                else if (lR && !w(lG, V(d, lp, "")));
                else if (d) return !1;
                return !0;
            },
            tG = function (l) {
                return "annotation-xml" !== l && T(l, lN);
            },
            tp = function (l) {
                tu(lb.beforeSanitizeAttributes, l, null);
                let { attributes: d } = l;
                if (!d || tm(l)) return;
                let e = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: ly, forceKeepAttr: void 0 },
                    c = d.length;
                for (; c--; ) {
                    let { name: a, namespaceURI: s, value: n } = d[c],
                        Z = l8(a),
                        b = "value" === a ? n : I(n);
                    if (
                        ((e.attrName = Z),
                        (e.attrValue = b),
                        (e.keepAttr = !0),
                        (e.forceKeepAttr = void 0),
                        tu(lb.uponSanitizeAttribute, l, e),
                        (b = e.attrValue),
                        lk && ("id" === Z || "name" === Z) && (tn(a, l), (b = "user-content-" + b)),
                        (lx &&
                            w(
                                /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
                                b,
                            )) ||
                            ("attributename" === Z && T(b, "href")))
                    ) {
                        tn(a, l);
                        continue;
                    }
                    if (e.forceKeepAttr) continue;
                    if (!e.keepAttr || (!lS && w(/\/>/i, b))) {
                        tn(a, l);
                        continue;
                    }
                    lC &&
                        p([lm, lo, lu], (l) => {
                            b = V(b, l, " ");
                        });
                    let m = l8(l.nodeName);
                    if (!tW(m, Z, b)) {
                        tn(a, l);
                        continue;
                    }
                    if (t && "object" == typeof Q && "function" == typeof Q.getAttributeType)
                        if (s);
                        else
                            switch (Q.getAttributeType(m, Z)) {
                                case "TrustedHTML":
                                    b = t.createHTML(b);
                                    break;
                                case "TrustedScriptURL":
                                    b = t.createScriptURL(b);
                            }
                    if (b !== n)
                        try {
                            s ? l.setAttributeNS(s, a, b) : l.setAttribute(a, b), tm(l) ? ts(l) : M(i.removed);
                        } catch (t) {
                            tn(a, l);
                        }
                }
                tu(lb.afterSanitizeAttributes, l, null);
            },
            tN = function l(t) {
                let d = null,
                    i = tb(t);
                for (tu(lb.beforeSanitizeShadowDOM, t, null); (d = i.nextNode()); )
                    tu(lb.uponSanitizeShadowNode, d, null), th(d), tp(d), d.content instanceof n && l(d.content);
                tu(lb.afterSanitizeShadowDOM, t, null);
            };
        return (
            (i.sanitize = function (l) {
                let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = null,
                    a = null,
                    s = null,
                    Z = null;
                if (((l0 = !l) && (l = "\x3c!--\x3e"), "string" != typeof l && !to(l)))
                    if ("function" == typeof l.toString) {
                        if ("string" != typeof (l = l.toString())) throw R("dirty is not a string, aborting");
                    } else throw R("toString is not a function");
                if (!i.isSupported) return l;
                if ((lD || ti(d), (i.removed = []), "string" == typeof l && (lv = !1), lv)) {
                    if (l.nodeName) {
                        let t = l8(l.nodeName);
                        if (!lX[t] || lV[t]) throw R("root node is forbidden and cannot be sanitized in-place");
                    }
                } else if (l instanceof b)
                    (1 === (a = (e = tZ("\x3c!----\x3e")).ownerDocument.importNode(l, !0)).nodeType &&
                        "BODY" === a.nodeName) ||
                    "HTML" === a.nodeName
                        ? (e = a)
                        : e.appendChild(a);
                else {
                    if (!lU && !lC && !lg && -1 === l.indexOf("<")) return t && lO ? t.createHTML(l) : l;
                    if (!(e = tZ(l))) return lU ? null : lO ? le : "";
                }
                e && lj && ts(e.firstChild);
                let m = tb(lv ? l : e);
                for (; (s = m.nextNode()); ) th(s), tp(s), s.content instanceof n && tN(s.content);
                if (lv) return l;
                if (lU) {
                    if (lF) for (Z = ls.call(e.ownerDocument); e.firstChild; ) Z.appendChild(e.firstChild);
                    else Z = e;
                    return (ly.shadowroot || ly.shadowrootmode) && (Z = lZ.call(c, Z, !0)), Z;
                }
                let o = lg ? e.outerHTML : e.innerHTML;
                return (
                    lg &&
                        lX["!doctype"] &&
                        e.ownerDocument &&
                        e.ownerDocument.doctype &&
                        e.ownerDocument.doctype.name &&
                        w(ll, e.ownerDocument.doctype.name) &&
                        (o = "<!DOCTYPE " + e.ownerDocument.doctype.name + ">\n" + o),
                    lC &&
                        p([lm, lo, lu], (l) => {
                            o = V(o, l, " ");
                        }),
                    t && lO ? t.createHTML(o) : o
                );
            }),
            (i.setConfig = function () {
                ti(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (lD = !0);
            }),
            (i.clearConfig = function () {
                (tl = null), (lD = !1);
            }),
            (i.isValidAttribute = function (l, t, d) {
                return tl || ti({}), tW(l8(l), l8(t), d);
            }),
            (i.addHook = function (l, t) {
                "function" == typeof t && X(lb[l], t);
            }),
            (i.removeHook = function (l, t) {
                if (void 0 !== t) {
                    let d = N(lb[l], t);
                    return -1 === d ? void 0 : r(lb[l], d, 1)[0];
                }
                return M(lb[l]);
            }),
            (i.removeHooks = function (l) {
                lb[l] = [];
            }),
            (i.removeAllHooks = function () {
                lb = li();
            }),
            i
        );
    })();
function lc() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
    };
}
var la = lc(),
    ls = { exec: () => null };
function ln(l, t = "") {
    let d = "string" == typeof l ? l : l.source,
        i = {
            replace: (l, t) => {
                let e = "string" == typeof t ? t : t.source;
                return (e = e.replace(lb.caret, "$1")), (d = d.replace(l, e)), i;
            },
            getRegex: () => new RegExp(d, t),
        };
    return i;
}
var lZ = (() => {
        try {
            return !0;
        } catch {
            return !1;
        }
    })(),
    lb = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] +\S/,
        listReplaceTask: /^\[[ xX]\] +/,
        listTaskCheckbox: /\[[ xX]\]/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: (l) => RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: (l) =>
            RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        hrRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}#`),
        htmlBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}<(?:[a-z].*>|!--)`, "i"),
        blockquoteBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}>`),
    },
    lm = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    lo = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
    lu =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    lh = ln(lu)
        .replace(/bull/g, lo)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, "")
        .getRegex(),
    lW = ln(lu)
        .replace(/bull/g, lo)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex(),
    lG = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    lp = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
    lN = ln(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
        .replace("label", lp)
        .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex(),
    lM = ln(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, lo)
        .getRegex(),
    lX =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    lr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    ly = ln(
        "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
        "i",
    )
        .replace("comment", lr)
        .replace("tag", lX)
        .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex(),
    lY = ln(lG)
        .replace("hr", lm)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", lX)
        .getRegex(),
    lT = {
        blockquote: ln(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
            .replace("paragraph", lY)
            .getRegex(),
        code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
        def: lN,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        hr: lm,
        html: ly,
        lheading: lh,
        list: lM,
        newline: /^(?:[ \t]*(?:\n|$))+/,
        paragraph: lY,
        table: ls,
        text: /^[^\n]+/,
    },
    lV = ln(
        "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
        .replace("hr", lm)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("blockquote", " {0,3}>")
        .replace("code", "(?: {4}| {0,3}	)[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", lX)
        .getRegex(),
    lL = {
        ...lT,
        lheading: lW,
        table: lV,
        paragraph: ln(lG)
            .replace("hr", lm)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("table", lV)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
            .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
            .replace("tag", lX)
            .getRegex(),
    },
    lI = {
        ...lT,
        html: ln(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
        )
            .replace("comment", lr)
            .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
            )
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: ls,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: ln(lG)
            .replace("hr", lm)
            .replace(
                "heading",
                ` *#{1,6} *[^
]`,
            )
            .replace("lheading", lh)
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .replace("|tag", "")
            .getRegex(),
    },
    lz = /^( {2,}|\\)\n(?!\s*$)/,
    lw = /[\p{P}\p{S}]/u,
    lR = /[\s\p{P}\p{S}]/u,
    lS = /[^\s\p{P}\p{S}]/u,
    lC = ln(/^((?![*_])punctSpace)/, "u")
        .replace(/punctSpace/g, lR)
        .getRegex(),
    lx = /(?!~)[\p{P}\p{S}]/u,
    lg = ln(/link|precode-code|html/, "g")
        .replace(
            "link",
            /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
        )
        .replace("precode-", lZ ? "(?<!`)()" : "(^^|[^`])")
        .replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/)
        .replace("html", /<(?! )[^<>]*?>/)
        .getRegex(),
    lD = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
    lj = ln(lD, "u").replace(/punct/g, lw).getRegex(),
    lU = ln(lD, "u").replace(/punct/g, lx).getRegex(),
    lF =
        "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    lO = ln(lF, "gu")
        .replace(/notPunctSpace/g, lS)
        .replace(/punctSpace/g, lR)
        .replace(/punct/g, lw)
        .getRegex(),
    lJ = ln(lF, "gu")
        .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
        .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
        .replace(/punct/g, lx)
        .getRegex(),
    lk = ln(
        "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
        "gu",
    )
        .replace(/notPunctSpace/g, lS)
        .replace(/punctSpace/g, lR)
        .replace(/punct/g, lw)
        .getRegex(),
    lE = ln(/^~~?(?:((?!~)punct)|[^\s~])/, "u")
        .replace(/punct/g, lw)
        .getRegex(),
    lv = ln(
        "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
        "gu",
    )
        .replace(/notPunctSpace/g, lS)
        .replace(/punctSpace/g, lR)
        .replace(/punct/g, lw)
        .getRegex(),
    lK = ln(/\\(punct)/, "gu")
        .replace(/punct/g, lw)
        .getRegex(),
    lH = ln(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
            "email",
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        )
        .getRegex(),
    lQ = ln(lr).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
    lP = ln(
        "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
        .replace("comment", lQ)
        .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
        .getRegex(),
    lf = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
    lB = ln(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/)
        .replace("label", lf)
        .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
        .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex(),
    lA = ln(/^!?\[(label)\]\[(ref)\]/)
        .replace("label", lf)
        .replace("ref", lp)
        .getRegex(),
    l_ = ln(/^!?\[(ref)\](?:\[\])?/)
        .replace("ref", lp)
        .getRegex(),
    l$ = ln("reflink|nolink(?!\\()", "g").replace("reflink", lA).replace("nolink", l_).getRegex(),
    lq = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
    l2 = {
        _backpedal: ls,
        anyPunctuation: lK,
        autolink: lH,
        blockSkip: lg,
        br: lz,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        del: ls,
        delLDelim: ls,
        delRDelim: ls,
        emStrongLDelim: lj,
        emStrongRDelimAst: lO,
        emStrongRDelimUnd: lk,
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        link: lB,
        nolink: l_,
        punctuation: lC,
        reflink: lA,
        reflinkSearch: l$,
        tag: lP,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        url: ls,
    },
    l0 = {
        ...l2,
        link: ln(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", lf)
            .getRegex(),
        reflink: ln(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", lf)
            .getRegex(),
    },
    l1 = {
        ...l2,
        emStrongRDelimAst: lJ,
        emStrongLDelim: lU,
        delLDelim: lE,
        delRDelim: lv,
        url: ln(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
            .replace("protocol", lq)
            .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
            .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: ln(
            /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        )
            .replace("protocol", lq)
            .getRegex(),
    },
    l5 = {
        ...l1,
        br: ln(lz).replace("{2,}", "*").getRegex(),
        text: ln(l1.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
    },
    l9 = { normal: lT, gfm: lL, pedantic: lI },
    l3 = { normal: l2, gfm: l1, breaks: l5, pedantic: l0 },
    l4 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    l7 = (l) => l4[l];
function l6(l, t) {
    if (t) {
        if (lb.escapeTest.test(l)) return l.replace(lb.escapeReplace, l7);
    } else if (lb.escapeTestNoEncode.test(l)) return l.replace(lb.escapeReplaceNoEncode, l7);
    return l;
}
function l8(l) {
    try {
        l = encodeURI(l).replace(lb.percentDecode, "%");
    } catch {
        return null;
    }
    return l;
}
function tl(l, t) {
    let d = l
            .replace(lb.findPipe, (l, t, d) => {
                let i = !1,
                    e = t;
                for (; --e >= 0 && "\\" === d[e]; ) i = !i;
                return i ? "|" : " |";
            })
            .split(lb.splitPipe),
        i = 0;
    if ((d[0].trim() || d.shift(), d.length > 0 && !d.at(-1)?.trim() && d.pop(), t))
        if (d.length > t) d.splice(t);
        else for (; d.length < t; ) d.push("");
    for (; i < d.length; i++) d[i] = d[i].trim().replace(lb.slashPipe, "|");
    return d;
}
function tt(l, t, d) {
    let i = l.length;
    if (0 === i) return "";
    let e = 0;
    for (; e < i; ) {
        let c = l.charAt(i - e - 1);
        if (c !== t || d)
            if (c !== t && d) e++;
            else break;
        else e++;
    }
    return l.slice(0, i - e);
}
function td(l, t, d, i, e) {
    let c = t.href,
        a = t.title || null,
        s = l[1].replace(e.other.outputLinkReplace, "$1");
    i.state.inLink = !0;
    let n = {
        type: "!" === l[0].charAt(0) ? "image" : "link",
        raw: d,
        href: c,
        title: a,
        text: s,
        tokens: i.inlineTokens(s),
    };
    return (i.state.inLink = !1), n;
}
var ti = class {
        constructor(l) {
            (0, a.t)(this, "options", void 0),
                (0, a.t)(this, "rules", void 0),
                (0, a.t)(this, "lexer", void 0),
                (this.options = l || la);
        }
        space(l) {
            let t = this.rules.block.newline.exec(l);
            if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(l) {
            let t = this.rules.block.code.exec(l);
            if (t) {
                let l = t[0].replace(this.rules.other.codeRemoveIndent, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic
                        ? l
                        : tt(
                              l,
                              `
`,
                          ),
                };
            }
        }
        fences(l) {
            let t = this.rules.block.fences.exec(l);
            if (t) {
                let l = t[0],
                    d = (function (l, t, d) {
                        let i = l.match(d.other.indentCodeCompensation);
                        if (null === i) return t;
                        let e = i[1];
                        return t
                            .split(`
`)
                            .map((l) => {
                                let t = l.match(d.other.beginningSpace);
                                if (null === t) return l;
                                let [i] = t;
                                return i.length >= e.length ? l.slice(e.length) : l;
                            })
                            .join(`
`);
                    })(l, t[3] || "", this.rules);
                return {
                    type: "code",
                    raw: l,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                    text: d,
                };
            }
        }
        heading(l) {
            let t = this.rules.block.heading.exec(l);
            if (t) {
                let l = t[2].trim();
                if (this.rules.other.endingHash.test(l)) {
                    let t = tt(l, "#");
                    (this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (l = t.trim());
                }
                return { type: "heading", raw: t[0], depth: t[1].length, text: l, tokens: this.lexer.inline(l) };
            }
        }
        hr(l) {
            let t = this.rules.block.hr.exec(l);
            if (t)
                return {
                    type: "hr",
                    raw: tt(
                        t[0],
                        `
`,
                    ),
                };
        }
        blockquote(l) {
            let t = this.rules.block.blockquote.exec(l);
            if (t) {
                let l = tt(
                        t[0],
                        `
`,
                    ).split(`
`),
                    d = "",
                    i = "",
                    e = [];
                for (; l.length > 0; ) {
                    let t = !1,
                        c = [],
                        a;
                    for (a = 0; a < l.length; a++)
                        if (this.rules.other.blockquoteStart.test(l[a])) c.push(l[a]), (t = !0);
                        else if (t) break;
                        else c.push(l[a]);
                    l = l.slice(a);
                    let s = c.join(`
`),
                        n = s
                            .replace(
                                this.rules.other.blockquoteSetextReplace,
                                `
    $1`,
                            )
                            .replace(this.rules.other.blockquoteSetextReplace2, "");
                    (d = d
                        ? `${d}
${s}`
                        : s),
                        (i = i
                            ? `${i}
${n}`
                            : n);
                    let Z = this.lexer.state.top;
                    if (
                        ((this.lexer.state.top = !0),
                        this.lexer.blockTokens(n, e, !0),
                        (this.lexer.state.top = Z),
                        0 === l.length)
                    )
                        break;
                    let b = e.at(-1);
                    if (b?.type === "code") break;
                    if (b?.type === "blockquote") {
                        let t =
                                b.raw +
                                `
` +
                                l.join(`
`),
                            c = this.blockquote(t);
                        (e[e.length - 1] = c),
                            (d = d.substring(0, d.length - b.raw.length) + c.raw),
                            (i = i.substring(0, i.length - b.text.length) + c.text);
                        break;
                    }
                    if (b?.type === "list") {
                        let t =
                                b.raw +
                                `
` +
                                l.join(`
`),
                            c = this.list(t);
                        (e[e.length - 1] = c),
                            (d = d.substring(0, d.length - b.raw.length) + c.raw),
                            (i = i.substring(0, i.length - b.raw.length) + c.raw),
                            (l = t.substring(e.at(-1).raw.length).split(`
`));
                        continue;
                    }
                }
                return { type: "blockquote", raw: d, tokens: e, text: i };
            }
        }
        list(l) {
            let t = this.rules.block.list.exec(l);
            if (t) {
                let d = t[1].trim(),
                    i = d.length > 1,
                    e = { type: "list", raw: "", ordered: i, start: i ? +d.slice(0, -1) : "", loose: !1, items: [] };
                (d = i ? `\\d{1,9}\\${d.slice(-1)}` : `\\${d}`), this.options.pedantic && (d = i ? d : "[*+-]");
                let c = this.rules.other.listItemRegex(d),
                    a = !1;
                for (; l; ) {
                    let d = !1,
                        i = "",
                        s = "";
                    if (!(t = c.exec(l)) || this.rules.block.hr.test(l)) break;
                    (i = t[0]), (l = l.substring(i.length));
                    let n = (function (l, t = 0) {
                            let d = t,
                                i = "";
                            for (let t of l)
                                if ("	" === t) {
                                    let l = 4 - (d % 4);
                                    (i += " ".repeat(l)), (d += l);
                                } else (i += t), d++;
                            return i;
                        })(
                            t[2].split(
                                `
`,
                                1,
                            )[0],
                            t[1].length,
                        ),
                        Z = l.split(
                            `
`,
                            1,
                        )[0],
                        b = !n.trim(),
                        m = 0;
                    if (
                        (this.options.pedantic
                            ? ((m = 2), (s = n.trimStart()))
                            : b
                              ? (m = t[1].length + 1)
                              : ((m = (m = n.search(this.rules.other.nonSpaceChar)) > 4 ? 1 : m),
                                (s = n.slice(m)),
                                (m += t[1].length)),
                        b &&
                            this.rules.other.blankLine.test(Z) &&
                            ((i +=
                                Z +
                                `
`),
                            (l = l.substring(Z.length + 1)),
                            (d = !0)),
                        !d)
                    ) {
                        let t = this.rules.other.nextBulletRegex(m),
                            d = this.rules.other.hrRegex(m),
                            e = this.rules.other.fencesBeginRegex(m),
                            c = this.rules.other.headingBeginRegex(m),
                            a = this.rules.other.htmlBeginRegex(m),
                            o = this.rules.other.blockquoteBeginRegex(m);
                        for (; l; ) {
                            let u = l.split(
                                    `
`,
                                    1,
                                )[0],
                                h;
                            if (
                                ((Z = u),
                                (h = this.options.pedantic
                                    ? (Z = Z.replace(this.rules.other.listReplaceNesting, "  "))
                                    : Z.replace(this.rules.other.tabCharGlobal, "    ")),
                                e.test(Z) || c.test(Z) || a.test(Z) || o.test(Z) || t.test(Z) || d.test(Z))
                            )
                                break;
                            if (h.search(this.rules.other.nonSpaceChar) >= m || !Z.trim())
                                s +=
                                    `
` + h.slice(m);
                            else {
                                if (
                                    b ||
                                    n
                                        .replace(this.rules.other.tabCharGlobal, "    ")
                                        .search(this.rules.other.nonSpaceChar) >= 4 ||
                                    e.test(n) ||
                                    c.test(n) ||
                                    d.test(n)
                                )
                                    break;
                                s +=
                                    `
` + Z;
                            }
                            (b = !Z.trim()),
                                (i +=
                                    u +
                                    `
`),
                                (l = l.substring(u.length + 1)),
                                (n = h.slice(m));
                        }
                    }
                    e.loose || (a ? (e.loose = !0) : this.rules.other.doubleBlankLine.test(i) && (a = !0)),
                        e.items.push({
                            type: "list_item",
                            raw: i,
                            task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
                            loose: !1,
                            text: s,
                            tokens: [],
                        }),
                        (e.raw += i);
                }
                let s = e.items.at(-1);
                if (!s) return;
                for (let l of ((s.raw = s.raw.trimEnd()),
                (s.text = s.text.trimEnd()),
                (e.raw = e.raw.trimEnd()),
                e.items)) {
                    if (((this.lexer.state.top = !1), (l.tokens = this.lexer.blockTokens(l.text, [])), l.task)) {
                        if (
                            ((l.text = l.text.replace(this.rules.other.listReplaceTask, "")),
                            l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph")
                        ) {
                            (l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, "")),
                                (l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, ""));
                            for (let l = this.lexer.inlineQueue.length - 1; l >= 0; l--)
                                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[l].src)) {
                                    this.lexer.inlineQueue[l].src = this.lexer.inlineQueue[l].src.replace(
                                        this.rules.other.listReplaceTask,
                                        "",
                                    );
                                    break;
                                }
                        }
                        let t = this.rules.other.listTaskCheckbox.exec(l.raw);
                        if (t) {
                            let d = { type: "checkbox", raw: t[0] + " ", checked: "[ ]" !== t[0] };
                            (l.checked = d.checked),
                                e.loose
                                    ? l.tokens[0] &&
                                      ["paragraph", "text"].includes(l.tokens[0].type) &&
                                      "tokens" in l.tokens[0] &&
                                      l.tokens[0].tokens
                                        ? ((l.tokens[0].raw = d.raw + l.tokens[0].raw),
                                          (l.tokens[0].text = d.raw + l.tokens[0].text),
                                          l.tokens[0].tokens.unshift(d))
                                        : l.tokens.unshift({ type: "paragraph", raw: d.raw, text: d.raw, tokens: [d] })
                                    : l.tokens.unshift(d);
                        }
                    }
                    if (!e.loose) {
                        let t = l.tokens.filter((l) => "space" === l.type);
                        e.loose = t.length > 0 && t.some((l) => this.rules.other.anyLine.test(l.raw));
                    }
                }
                if (e.loose)
                    for (let l of e.items)
                        for (let t of ((l.loose = !0), l.tokens)) "text" === t.type && (t.type = "paragraph");
                return e;
            }
        }
        html(l) {
            let t = this.rules.block.html.exec(l);
            if (t)
                return {
                    type: "html",
                    block: !0,
                    raw: t[0],
                    pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                    text: t[0],
                };
        }
        def(l) {
            let t = this.rules.block.def.exec(l);
            if (t) {
                let l = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                    d = t[2]
                        ? t[2]
                              .replace(this.rules.other.hrefBrackets, "$1")
                              .replace(this.rules.inline.anyPunctuation, "$1")
                        : "",
                    i = t[3]
                        ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1")
                        : t[3];
                return { type: "def", tag: l, raw: t[0], href: d, title: i };
            }
        }
        table(l) {
            let t = this.rules.block.table.exec(l);
            if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
            let d = tl(t[1]),
                i = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
                e = t[3]?.trim()
                    ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
                    : [],
                c = { type: "table", raw: t[0], header: [], align: [], rows: [] };
            if (d.length === i.length) {
                for (let l of i)
                    this.rules.other.tableAlignRight.test(l)
                        ? c.align.push("right")
                        : this.rules.other.tableAlignCenter.test(l)
                          ? c.align.push("center")
                          : this.rules.other.tableAlignLeft.test(l)
                            ? c.align.push("left")
                            : c.align.push(null);
                for (let l = 0; l < d.length; l++)
                    c.header.push({ text: d[l], tokens: this.lexer.inline(d[l]), header: !0, align: c.align[l] });
                for (let l of e)
                    c.rows.push(
                        tl(l, c.header.length).map((l, t) => ({
                            text: l,
                            tokens: this.lexer.inline(l),
                            header: !1,
                            align: c.align[t],
                        })),
                    );
                return c;
            }
        }
        lheading(l) {
            let t = this.rules.block.lheading.exec(l);
            if (t) {
                let l = t[1].trim();
                return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: l,
                    tokens: this.lexer.inline(l),
                };
            }
        }
        paragraph(l) {
            let t = this.rules.block.paragraph.exec(l);
            if (t) {
                let l =
                    t[1].charAt(t[1].length - 1) ===
                    `
`
                        ? t[1].slice(0, -1)
                        : t[1];
                return { type: "paragraph", raw: t[0], text: l, tokens: this.lexer.inline(l) };
            }
        }
        text(l) {
            let t = this.rules.block.text.exec(l);
            if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
        }
        escape(l) {
            let t = this.rules.inline.escape.exec(l);
            if (t) return { type: "escape", raw: t[0], text: t[1] };
        }
        tag(l) {
            let t = this.rules.inline.tag.exec(l);
            if (t)
                return (
                    !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
                        ? (this.lexer.state.inLink = !0)
                        : this.lexer.state.inLink &&
                          this.rules.other.endATag.test(t[0]) &&
                          (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])
                        ? (this.lexer.state.inRawBlock = !0)
                        : this.lexer.state.inRawBlock &&
                          this.rules.other.endPreScriptTag.test(t[0]) &&
                          (this.lexer.state.inRawBlock = !1),
                    {
                        type: "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: t[0],
                    }
                );
        }
        link(l) {
            let t = this.rules.inline.link.exec(l);
            if (t) {
                let l = t[2].trim();
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(l)) {
                    if (!this.rules.other.endAngleBracket.test(l)) return;
                    let t = tt(l.slice(0, -1), "\\");
                    if ((l.length - t.length) % 2 == 0) return;
                } else {
                    let l = (function (l) {
                        if (-1 === l.indexOf(")")) return -1;
                        let t = 0;
                        for (let d = 0; d < l.length; d++)
                            if ("\\" === l[d]) d++;
                            else if ("(" === l[d]) t++;
                            else if (")" === l[d] && --t < 0) return d;
                        return t > 0 ? -2 : -1;
                    })(t[2]);
                    if (-2 === l) return;
                    if (l > -1) {
                        let d = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + l;
                        (t[2] = t[2].substring(0, l)), (t[0] = t[0].substring(0, d).trim()), (t[3] = "");
                    }
                }
                let d = t[2],
                    i = "";
                if (this.options.pedantic) {
                    let l = this.rules.other.pedanticHrefTitle.exec(d);
                    l && ((d = l[1]), (i = l[3]));
                } else i = t[3] ? t[3].slice(1, -1) : "";
                return (
                    (d = d.trim()),
                    this.rules.other.startAngleBracket.test(d) &&
                        (d =
                            this.options.pedantic && !this.rules.other.endAngleBracket.test(l)
                                ? d.slice(1)
                                : d.slice(1, -1)),
                    td(
                        t,
                        {
                            href: d && d.replace(this.rules.inline.anyPunctuation, "$1"),
                            title: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
                        },
                        t[0],
                        this.lexer,
                        this.rules,
                    )
                );
            }
        }
        reflink(l, t) {
            let d;
            if ((d = this.rules.inline.reflink.exec(l)) || (d = this.rules.inline.nolink.exec(l))) {
                let l = t[(d[2] || d[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
                if (!l) {
                    let l = d[0].charAt(0);
                    return { type: "text", raw: l, text: l };
                }
                return td(d, l, d[0], this.lexer, this.rules);
            }
        }
        emStrong(l, t, d = "") {
            let i = this.rules.inline.emStrongLDelim.exec(l);
            if (
                !(
                    !i ||
                    (!i[1] && !i[2] && !i[3] && !i[4]) ||
                    (i[4] && d.match(this.rules.other.unicodeAlphaNumeric))
                ) &&
                (!(i[1] || i[3]) || !d || this.rules.inline.punctuation.exec(d))
            ) {
                let d = [...i[0]].length - 1,
                    e,
                    c,
                    a = d,
                    s = 0,
                    n = "*" === i[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (n.lastIndex = 0, t = t.slice(-1 * l.length + d); null != (i = n.exec(t)); ) {
                    if (!(e = i[1] || i[2] || i[3] || i[4] || i[5] || i[6])) continue;
                    if (((c = [...e].length), i[3] || i[4])) {
                        a += c;
                        continue;
                    }
                    if ((i[5] || i[6]) && d % 3 && !((d + c) % 3)) {
                        s += c;
                        continue;
                    }
                    if ((a -= c) > 0) continue;
                    c = Math.min(c, c + a + s);
                    let t = [...i[0]][0].length,
                        n = l.slice(0, d + i.index + t + c);
                    if (Math.min(d, c) % 2) {
                        let l = n.slice(1, -1);
                        return { type: "em", raw: n, text: l, tokens: this.lexer.inlineTokens(l) };
                    }
                    let Z = n.slice(2, -2);
                    return { type: "strong", raw: n, text: Z, tokens: this.lexer.inlineTokens(Z) };
                }
            }
        }
        codespan(l) {
            let t = this.rules.inline.code.exec(l);
            if (t) {
                let l = t[2].replace(this.rules.other.newLineCharGlobal, " "),
                    d = this.rules.other.nonSpaceChar.test(l),
                    i = this.rules.other.startingSpaceChar.test(l) && this.rules.other.endingSpaceChar.test(l);
                return d && i && (l = l.substring(1, l.length - 1)), { type: "codespan", raw: t[0], text: l };
            }
        }
        br(l) {
            let t = this.rules.inline.br.exec(l);
            if (t) return { type: "br", raw: t[0] };
        }
        del(l, t, d = "") {
            let i = this.rules.inline.delLDelim.exec(l);
            if (i && (!i[1] || !d || this.rules.inline.punctuation.exec(d))) {
                let d = [...i[0]].length - 1,
                    e,
                    c,
                    a = d,
                    s = this.rules.inline.delRDelim;
                for (s.lastIndex = 0, t = t.slice(-1 * l.length + d); null != (i = s.exec(t)); ) {
                    if (!(e = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]) || (c = [...e].length) !== d) continue;
                    if (i[3] || i[4]) {
                        a += c;
                        continue;
                    }
                    if ((a -= c) > 0) continue;
                    c = Math.min(c, c + a);
                    let t = [...i[0]][0].length,
                        s = l.slice(0, d + i.index + t + c),
                        n = s.slice(d, -d);
                    return { type: "del", raw: s, text: n, tokens: this.lexer.inlineTokens(n) };
                }
            }
        }
        autolink(l) {
            let t = this.rules.inline.autolink.exec(l);
            if (t) {
                let l, d;
                return (
                    (d = "@" === t[2] ? "mailto:" + (l = t[1]) : (l = t[1])),
                    { type: "link", raw: t[0], text: l, href: d, tokens: [{ type: "text", raw: l, text: l }] }
                );
            }
        }
        url(l) {
            let t;
            if ((t = this.rules.inline.url.exec(l))) {
                let l, d;
                if ("@" === t[2]) d = "mailto:" + (l = t[0]);
                else {
                    let i;
                    do (i = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
                    while (i !== t[0]);
                    (l = t[0]), (d = "www." === t[1] ? "http://" + t[0] : t[0]);
                }
                return { type: "link", raw: t[0], text: l, href: d, tokens: [{ type: "text", raw: l, text: l }] };
            }
        }
        inlineText(l) {
            let t = this.rules.inline.text.exec(l);
            if (t) {
                let l = this.lexer.state.inRawBlock;
                return { type: "text", raw: t[0], text: t[0], escaped: l };
            }
        }
    },
    te = class l {
        constructor(l) {
            (0, a.t)(this, "tokens", void 0),
                (0, a.t)(this, "options", void 0),
                (0, a.t)(this, "state", void 0),
                (0, a.t)(this, "inlineQueue", void 0),
                (0, a.t)(this, "tokenizer", void 0),
                (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = l || la),
                (this.options.tokenizer = this.options.tokenizer || new ti()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
            let t = { other: lb, block: l9.normal, inline: l3.normal };
            this.options.pedantic
                ? ((t.block = l9.pedantic), (t.inline = l3.pedantic))
                : this.options.gfm &&
                  ((t.block = l9.gfm), this.options.breaks ? (t.inline = l3.breaks) : (t.inline = l3.gfm)),
                (this.tokenizer.rules = t);
        }
        static get rules() {
            return { block: l9, inline: l3 };
        }
        static lex(t, d) {
            return new l(d).lex(t);
        }
        static lexInline(t, d) {
            return new l(d).inlineTokens(t);
        }
        lex(l) {
            (l = l.replace(
                lb.carriageReturn,
                `
`,
            )),
                this.blockTokens(l, this.tokens);
            for (let l = 0; l < this.inlineQueue.length; l++) {
                let t = this.inlineQueue[l];
                this.inlineTokens(t.src, t.tokens);
            }
            return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(l, t = [], d = !1) {
            for (
                this.tokenizer.lexer = this,
                    this.options.pedantic && (l = l.replace(lb.tabCharGlobal, "    ").replace(lb.spaceLine, ""));
                l;
            ) {
                let i;
                if (
                    this.options.extensions?.block?.some(
                        (d) =>
                            !!(i = d.call({ lexer: this }, l, t)) && ((l = l.substring(i.raw.length)), t.push(i), !0),
                    )
                )
                    continue;
                if ((i = this.tokenizer.space(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    1 === i.raw.length && void 0 !== d
                        ? (d.raw += `
`)
                        : t.push(i);
                    continue;
                }
                if ((i = this.tokenizer.code(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    d?.type === "paragraph" || d?.type === "text"
                        ? ((d.raw +=
                              (d.raw.endsWith(`
`)
                                  ? ""
                                  : `
`) + i.raw),
                          (d.text +=
                              `
` + i.text),
                          (this.inlineQueue.at(-1).src = d.text))
                        : t.push(i);
                    continue;
                }
                if (
                    (i = this.tokenizer.fences(l)) ||
                    (i = this.tokenizer.heading(l)) ||
                    (i = this.tokenizer.hr(l)) ||
                    (i = this.tokenizer.blockquote(l)) ||
                    (i = this.tokenizer.list(l)) ||
                    (i = this.tokenizer.html(l))
                ) {
                    (l = l.substring(i.raw.length)), t.push(i);
                    continue;
                }
                if ((i = this.tokenizer.def(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    d?.type === "paragraph" || d?.type === "text"
                        ? ((d.raw +=
                              (d.raw.endsWith(`
`)
                                  ? ""
                                  : `
`) + i.raw),
                          (d.text +=
                              `
` + i.raw),
                          (this.inlineQueue.at(-1).src = d.text))
                        : this.tokens.links[i.tag] ||
                          ((this.tokens.links[i.tag] = { href: i.href, title: i.title }), t.push(i));
                    continue;
                }
                if ((i = this.tokenizer.table(l)) || (i = this.tokenizer.lheading(l))) {
                    (l = l.substring(i.raw.length)), t.push(i);
                    continue;
                }
                let e = l;
                if (this.options.extensions?.startBlock) {
                    let t = 1 / 0,
                        d = l.slice(1),
                        i;
                    this.options.extensions.startBlock.forEach((l) => {
                        "number" == typeof (i = l.call({ lexer: this }, d)) && i >= 0 && (t = Math.min(t, i));
                    }),
                        t < 1 / 0 && t >= 0 && (e = l.substring(0, t + 1));
                }
                if (this.state.top && (i = this.tokenizer.paragraph(e))) {
                    let c = t.at(-1);
                    d && c?.type === "paragraph"
                        ? ((c.raw +=
                              (c.raw.endsWith(`
`)
                                  ? ""
                                  : `
`) + i.raw),
                          (c.text +=
                              `
` + i.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = c.text))
                        : t.push(i),
                        (d = e.length !== l.length),
                        (l = l.substring(i.raw.length));
                    continue;
                }
                if ((i = this.tokenizer.text(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    d?.type === "text"
                        ? ((d.raw +=
                              (d.raw.endsWith(`
`)
                                  ? ""
                                  : `
`) + i.raw),
                          (d.text +=
                              `
` + i.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = d.text))
                        : t.push(i);
                    continue;
                }
                if (l) {
                    let t = "Infinite loop on byte: " + l.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw Error(t);
                }
            }
            return (this.state.top = !0), t;
        }
        inline(l, t = []) {
            return this.inlineQueue.push({ src: l, tokens: t }), t;
        }
        inlineTokens(l, t = []) {
            let d;
            this.tokenizer.lexer = this;
            let i = l,
                e = null;
            if (this.tokens.links) {
                let l = Object.keys(this.tokens.links);
                if (l.length > 0)
                    for (; null != (e = this.tokenizer.rules.inline.reflinkSearch.exec(i)); )
                        l.includes(e[0].slice(e[0].lastIndexOf("[") + 1, -1)) &&
                            (i =
                                i.slice(0, e.index) +
                                "[" +
                                "a".repeat(e[0].length - 2) +
                                "]" +
                                i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (e = this.tokenizer.rules.inline.anyPunctuation.exec(i)); )
                i = i.slice(0, e.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (; null != (e = this.tokenizer.rules.inline.blockSkip.exec(i)); )
                (d = e[2] ? e[2].length : 0),
                    (i =
                        i.slice(0, e.index + d) +
                        "[" +
                        "a".repeat(e[0].length - d - 2) +
                        "]" +
                        i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex));
            i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
            let c = !1,
                a = "";
            for (; l; ) {
                let d;
                if (
                    (c || (a = ""),
                    (c = !1),
                    this.options.extensions?.inline?.some(
                        (i) =>
                            !!(d = i.call({ lexer: this }, l, t)) && ((l = l.substring(d.raw.length)), t.push(d), !0),
                    ))
                )
                    continue;
                if ((d = this.tokenizer.escape(l)) || (d = this.tokenizer.tag(l)) || (d = this.tokenizer.link(l))) {
                    (l = l.substring(d.raw.length)), t.push(d);
                    continue;
                }
                if ((d = this.tokenizer.reflink(l, this.tokens.links))) {
                    l = l.substring(d.raw.length);
                    let i = t.at(-1);
                    "text" === d.type && i?.type === "text" ? ((i.raw += d.raw), (i.text += d.text)) : t.push(d);
                    continue;
                }
                if (
                    (d = this.tokenizer.emStrong(l, i, a)) ||
                    (d = this.tokenizer.codespan(l)) ||
                    (d = this.tokenizer.br(l)) ||
                    (d = this.tokenizer.del(l, i, a)) ||
                    (d = this.tokenizer.autolink(l)) ||
                    (!this.state.inLink && (d = this.tokenizer.url(l)))
                ) {
                    (l = l.substring(d.raw.length)), t.push(d);
                    continue;
                }
                let e = l;
                if (this.options.extensions?.startInline) {
                    let t = 1 / 0,
                        d = l.slice(1),
                        i;
                    this.options.extensions.startInline.forEach((l) => {
                        "number" == typeof (i = l.call({ lexer: this }, d)) && i >= 0 && (t = Math.min(t, i));
                    }),
                        t < 1 / 0 && t >= 0 && (e = l.substring(0, t + 1));
                }
                if ((d = this.tokenizer.inlineText(e))) {
                    (l = l.substring(d.raw.length)), "_" !== d.raw.slice(-1) && (a = d.raw.slice(-1)), (c = !0);
                    let i = t.at(-1);
                    i?.type === "text" ? ((i.raw += d.raw), (i.text += d.text)) : t.push(d);
                    continue;
                }
                if (l) {
                    let t = "Infinite loop on byte: " + l.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw Error(t);
                }
            }
            return t;
        }
    },
    tc = class {
        constructor(l) {
            (0, a.t)(this, "options", void 0), (0, a.t)(this, "parser", void 0), (this.options = l || la);
        }
        space(l) {
            return "";
        }
        code({ text: l, lang: t, escaped: d }) {
            let i = (t || "").match(lb.notSpaceStart)?.[0],
                e =
                    l.replace(lb.endingNewline, "") +
                    `
`;
            return i
                ? '<pre><code class="language-' +
                      l6(i) +
                      '">' +
                      (d ? e : l6(e, !0)) +
                      `</code></pre>
`
                : "<pre><code>" +
                      (d ? e : l6(e, !0)) +
                      `</code></pre>
`;
        }
        blockquote({ tokens: l }) {
            return `<blockquote>
${this.parser.parse(l)}</blockquote>
`;
        }
        html({ text: l }) {
            return l;
        }
        def(l) {
            return "";
        }
        heading({ tokens: l, depth: t }) {
            return `<h${t}>${this.parser.parseInline(l)}</h${t}>
`;
        }
        hr(l) {
            return `<hr>
`;
        }
        list(l) {
            let t = l.ordered,
                d = l.start,
                i = "";
            for (let t = 0; t < l.items.length; t++) {
                let d = l.items[t];
                i += this.listitem(d);
            }
            let e = t ? "ol" : "ul";
            return (
                "<" +
                e +
                (t && 1 !== d ? ' start="' + d + '"' : "") +
                `>
` +
                i +
                "</" +
                e +
                `>
`
            );
        }
        listitem(l) {
            return `<li>${this.parser.parse(l.tokens)}</li>
`;
        }
        checkbox({ checked: l }) {
            return "<input " + (l ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
        }
        paragraph({ tokens: l }) {
            return `<p>${this.parser.parseInline(l)}</p>
`;
        }
        table(l) {
            let t = "",
                d = "";
            for (let t = 0; t < l.header.length; t++) d += this.tablecell(l.header[t]);
            t += this.tablerow({ text: d });
            let i = "";
            for (let t = 0; t < l.rows.length; t++) {
                let e = l.rows[t];
                d = "";
                for (let l = 0; l < e.length; l++) d += this.tablecell(e[l]);
                i += this.tablerow({ text: d });
            }
            return (
                i && (i = `<tbody>${i}</tbody>`),
                `<table>
<thead>
` +
                    t +
                    `</thead>
` +
                    i +
                    `</table>
`
            );
        }
        tablerow({ text: l }) {
            return `<tr>
${l}</tr>
`;
        }
        tablecell(l) {
            let t = this.parser.parseInline(l.tokens),
                d = l.header ? "th" : "td";
            return (
                (l.align ? `<${d} align="${l.align}">` : `<${d}>`) +
                t +
                `</${d}>
`
            );
        }
        strong({ tokens: l }) {
            return `<strong>${this.parser.parseInline(l)}</strong>`;
        }
        em({ tokens: l }) {
            return `<em>${this.parser.parseInline(l)}</em>`;
        }
        codespan({ text: l }) {
            return `<code>${l6(l, !0)}</code>`;
        }
        br(l) {
            return "<br>";
        }
        del({ tokens: l }) {
            return `<del>${this.parser.parseInline(l)}</del>`;
        }
        link({ href: l, title: t, tokens: d }) {
            let i = this.parser.parseInline(d),
                e = l8(l);
            if (null === e) return i;
            let c = '<a href="' + (l = e) + '"';
            return t && (c += ' title="' + l6(t) + '"'), (c += ">" + i + "</a>");
        }
        image({ href: l, title: t, text: d, tokens: i }) {
            i && (d = this.parser.parseInline(i, this.parser.textRenderer));
            let e = l8(l);
            if (null === e) return l6(d);
            l = e;
            let c = `<img src="${l}" alt="${l6(d)}"`;
            return t && (c += ` title="${l6(t)}"`), (c += ">");
        }
        text(l) {
            return "tokens" in l && l.tokens
                ? this.parser.parseInline(l.tokens)
                : "escaped" in l && l.escaped
                  ? l.text
                  : l6(l.text);
        }
    },
    ta = class {
        strong({ text: l }) {
            return l;
        }
        em({ text: l }) {
            return l;
        }
        codespan({ text: l }) {
            return l;
        }
        del({ text: l }) {
            return l;
        }
        html({ text: l }) {
            return l;
        }
        text({ text: l }) {
            return l;
        }
        link({ text: l }) {
            return "" + l;
        }
        image({ text: l }) {
            return "" + l;
        }
        br() {
            return "";
        }
        checkbox({ raw: l }) {
            return l;
        }
    },
    ts = class l {
        constructor(l) {
            (0, a.t)(this, "options", void 0),
                (0, a.t)(this, "renderer", void 0),
                (0, a.t)(this, "textRenderer", void 0),
                (this.options = l || la),
                (this.options.renderer = this.options.renderer || new tc()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new ta());
        }
        static parse(t, d) {
            return new l(d).parse(t);
        }
        static parseInline(t, d) {
            return new l(d).parseInline(t);
        }
        parse(l) {
            this.renderer.parser = this;
            let t = "";
            for (let d = 0; d < l.length; d++) {
                let i = l[d];
                if (this.options.extensions?.renderers?.[i.type]) {
                    let l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
                    if (
                        !1 !== l ||
                        ![
                            "space",
                            "hr",
                            "heading",
                            "code",
                            "table",
                            "blockquote",
                            "list",
                            "html",
                            "def",
                            "paragraph",
                            "text",
                        ].includes(i.type)
                    ) {
                        t += l || "";
                        continue;
                    }
                }
                switch (i.type) {
                    case "space":
                        t += this.renderer.space(i);
                        break;
                    case "hr":
                        t += this.renderer.hr(i);
                        break;
                    case "heading":
                        t += this.renderer.heading(i);
                        break;
                    case "code":
                        t += this.renderer.code(i);
                        break;
                    case "table":
                        t += this.renderer.table(i);
                        break;
                    case "blockquote":
                        t += this.renderer.blockquote(i);
                        break;
                    case "list":
                        t += this.renderer.list(i);
                        break;
                    case "checkbox":
                        t += this.renderer.checkbox(i);
                        break;
                    case "html":
                        t += this.renderer.html(i);
                        break;
                    case "def":
                        t += this.renderer.def(i);
                        break;
                    case "paragraph":
                        t += this.renderer.paragraph(i);
                        break;
                    case "text":
                        t += this.renderer.text(i);
                        break;
                    default: {
                        let l = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw Error(l);
                    }
                }
            }
            return t;
        }
        parseInline(l, t = this.renderer) {
            this.renderer.parser = this;
            let d = "";
            for (let i = 0; i < l.length; i++) {
                let e = l[i];
                if (this.options.extensions?.renderers?.[e.type]) {
                    let l = this.options.extensions.renderers[e.type].call({ parser: this }, e);
                    if (
                        !1 !== l ||
                        !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(
                            e.type,
                        )
                    ) {
                        d += l || "";
                        continue;
                    }
                }
                switch (e.type) {
                    case "escape":
                    case "text":
                        d += t.text(e);
                        break;
                    case "html":
                        d += t.html(e);
                        break;
                    case "link":
                        d += t.link(e);
                        break;
                    case "image":
                        d += t.image(e);
                        break;
                    case "checkbox":
                        d += t.checkbox(e);
                        break;
                    case "strong":
                        d += t.strong(e);
                        break;
                    case "em":
                        d += t.em(e);
                        break;
                    case "codespan":
                        d += t.codespan(e);
                        break;
                    case "br":
                        d += t.br(e);
                        break;
                    case "del":
                        d += t.del(e);
                        break;
                    default: {
                        let l = 'Token with "' + e.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw Error(l);
                    }
                }
            }
            return d;
        }
    },
    tn =
        ((e = class {
            constructor(l) {
                (0, a.t)(this, "options", void 0), (0, a.t)(this, "block", void 0), (this.options = l || la);
            }
            preprocess(l) {
                return l;
            }
            postprocess(l) {
                return l;
            }
            processAllTokens(l) {
                return l;
            }
            emStrongMask(l) {
                return l;
            }
            provideLexer() {
                return this.block ? te.lex : te.lexInline;
            }
            provideParser() {
                return this.block ? ts.parse : ts.parseInline;
            }
        }),
        (0, a.t)(e, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])),
        (0, a.t)(e, "passThroughHooksRespectAsync", new Set(["preprocess", "postprocess", "processAllTokens"])),
        e),
    tZ = new (class {
        constructor(...l) {
            (0, a.t)(this, "defaults", lc()),
                (0, a.t)(this, "options", this.setOptions),
                (0, a.t)(this, "parse", this.parseMarkdown(!0)),
                (0, a.t)(this, "parseInline", this.parseMarkdown(!1)),
                (0, a.t)(this, "Parser", ts),
                (0, a.t)(this, "Renderer", tc),
                (0, a.t)(this, "TextRenderer", ta),
                (0, a.t)(this, "Lexer", te),
                (0, a.t)(this, "Tokenizer", ti),
                (0, a.t)(this, "Hooks", tn),
                this.use(...l);
        }
        walkTokens(l, t) {
            let d = [];
            for (let i of l)
                switch (((d = d.concat(t.call(this, i))), i.type)) {
                    case "table":
                        for (let l of i.header) d = d.concat(this.walkTokens(l.tokens, t));
                        for (let l of i.rows) for (let i of l) d = d.concat(this.walkTokens(i.tokens, t));
                        break;
                    case "list":
                        d = d.concat(this.walkTokens(i.items, t));
                        break;
                    default: {
                        let l = i;
                        this.defaults.extensions?.childTokens?.[l.type]
                            ? this.defaults.extensions.childTokens[l.type].forEach((i) => {
                                  let e = l[i].flat(1 / 0);
                                  d = d.concat(this.walkTokens(e, t));
                              })
                            : l.tokens && (d = d.concat(this.walkTokens(l.tokens, t)));
                    }
                }
            return d;
        }
        use(...l) {
            let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
            return (
                l.forEach((l) => {
                    let d = { ...l };
                    if (
                        ((d.async = this.defaults.async || d.async || !1),
                        l.extensions &&
                            (l.extensions.forEach((l) => {
                                if (!l.name) throw Error("extension name required");
                                if ("renderer" in l) {
                                    let d = t.renderers[l.name];
                                    d
                                        ? (t.renderers[l.name] = function (...t) {
                                              let i = l.renderer.apply(this, t);
                                              return !1 === i && (i = d.apply(this, t)), i;
                                          })
                                        : (t.renderers[l.name] = l.renderer);
                                }
                                if ("tokenizer" in l) {
                                    if (!l.level || ("block" !== l.level && "inline" !== l.level))
                                        throw Error("extension level must be 'block' or 'inline'");
                                    let d = t[l.level];
                                    d ? d.unshift(l.tokenizer) : (t[l.level] = [l.tokenizer]),
                                        l.start &&
                                            ("block" === l.level
                                                ? t.startBlock
                                                    ? t.startBlock.push(l.start)
                                                    : (t.startBlock = [l.start])
                                                : "inline" === l.level &&
                                                  (t.startInline
                                                      ? t.startInline.push(l.start)
                                                      : (t.startInline = [l.start])));
                                }
                                "childTokens" in l && l.childTokens && (t.childTokens[l.name] = l.childTokens);
                            }),
                            (d.extensions = t)),
                        l.renderer)
                    ) {
                        let t = this.defaults.renderer || new tc(this.defaults);
                        for (let d in l.renderer) {
                            if (!(d in t)) throw Error(`renderer '${d}' does not exist`);
                            if (["options", "parser"].includes(d)) continue;
                            let i = l.renderer[d],
                                e = t[d];
                            t[d] = (...l) => {
                                let d = i.apply(t, l);
                                return !1 === d && (d = e.apply(t, l)), d || "";
                            };
                        }
                        d.renderer = t;
                    }
                    if (l.tokenizer) {
                        let t = this.defaults.tokenizer || new ti(this.defaults);
                        for (let d in l.tokenizer) {
                            if (!(d in t)) throw Error(`tokenizer '${d}' does not exist`);
                            if (["options", "rules", "lexer"].includes(d)) continue;
                            let i = l.tokenizer[d],
                                e = t[d];
                            t[d] = (...l) => {
                                let d = i.apply(t, l);
                                return !1 === d && (d = e.apply(t, l)), d;
                            };
                        }
                        d.tokenizer = t;
                    }
                    if (l.hooks) {
                        let t = this.defaults.hooks || new tn();
                        for (let d in l.hooks) {
                            if (!(d in t)) throw Error(`hook '${d}' does not exist`);
                            if (["options", "block"].includes(d)) continue;
                            let i = l.hooks[d],
                                e = t[d];
                            tn.passThroughHooks.has(d)
                                ? (t[d] = (l) => {
                                      if (this.defaults.async && tn.passThroughHooksRespectAsync.has(d))
                                          return (async () => {
                                              let d = await i.call(t, l);
                                              return e.call(t, d);
                                          })();
                                      let c = i.call(t, l);
                                      return e.call(t, c);
                                  })
                                : (t[d] = (...l) => {
                                      if (this.defaults.async)
                                          return (async () => {
                                              let d = await i.apply(t, l);
                                              return !1 === d && (d = await e.apply(t, l)), d;
                                          })();
                                      let d = i.apply(t, l);
                                      return !1 === d && (d = e.apply(t, l)), d;
                                  });
                        }
                        d.hooks = t;
                    }
                    if (l.walkTokens) {
                        let t = this.defaults.walkTokens,
                            i = l.walkTokens;
                        d.walkTokens = function (l) {
                            let d = [];
                            return d.push(i.call(this, l)), t && (d = d.concat(t.call(this, l))), d;
                        };
                    }
                    this.defaults = { ...this.defaults, ...d };
                }),
                this
            );
        }
        setOptions(l) {
            return (this.defaults = { ...this.defaults, ...l }), this;
        }
        lexer(l, t) {
            return te.lex(l, t ?? this.defaults);
        }
        parser(l, t) {
            return ts.parse(l, t ?? this.defaults);
        }
        parseMarkdown(l) {
            return (t, d) => {
                let i = { ...d },
                    e = { ...this.defaults, ...i },
                    c = this.onError(!!e.silent, !!e.async);
                if (!0 === this.defaults.async && !1 === i.async)
                    return c(
                        Error(
                            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
                        ),
                    );
                if (typeof t > "u" || null === t) return c(Error("marked(): input parameter is undefined or null"));
                if ("string" != typeof t)
                    return c(
                        Error(
                            "marked(): input parameter is of type " +
                                Object.prototype.toString.call(t) +
                                ", string expected",
                        ),
                    );
                if ((e.hooks && ((e.hooks.options = e), (e.hooks.block = l)), e.async))
                    return (async () => {
                        let d = e.hooks ? await e.hooks.preprocess(t) : t,
                            i = await (e.hooks ? await e.hooks.provideLexer() : l ? te.lex : te.lexInline)(d, e),
                            c = e.hooks ? await e.hooks.processAllTokens(i) : i;
                        e.walkTokens && (await Promise.all(this.walkTokens(c, e.walkTokens)));
                        let a = await (e.hooks ? await e.hooks.provideParser() : l ? ts.parse : ts.parseInline)(c, e);
                        return e.hooks ? await e.hooks.postprocess(a) : a;
                    })().catch(c);
                try {
                    e.hooks && (t = e.hooks.preprocess(t));
                    let d = (e.hooks ? e.hooks.provideLexer() : l ? te.lex : te.lexInline)(t, e);
                    e.hooks && (d = e.hooks.processAllTokens(d)), e.walkTokens && this.walkTokens(d, e.walkTokens);
                    let i = (e.hooks ? e.hooks.provideParser() : l ? ts.parse : ts.parseInline)(d, e);
                    return e.hooks && (i = e.hooks.postprocess(i)), i;
                } catch (l) {
                    return c(l);
                }
            };
        }
        onError(l, t) {
            return (d) => {
                if (
                    ((d.message += `
Please report this to https://github.com/markedjs/marked.`),
                    l)
                ) {
                    let l = "<p>An error occurred:</p><pre>" + l6(d.message + "", !0) + "</pre>";
                    return t ? Promise.resolve(l) : l;
                }
                if (t) return Promise.reject(d);
                throw d;
            };
        }
    })();
function tb(l, t) {
    return tZ.parse(l, t);
}
function tm({ content: l, class: t, disallowedTags: d = [] }) {
    return l
        ? (0, c.v)("div", {
              class: t,
              children: (0, c.v)(c.t, {
                  markup: (function (l, t) {
                      let d = l.replace(/([^\s>])(<a\b)/gu, "$1\xa0$2").replace(/(<\/a>)([\p{L}\p{N}])/gu, "$1\xa0$2"),
                          i = tb.parse(d);
                      var e = le.sanitize(i, { FORBID_TAGS: t });
                      let c = new DOMParser().parseFromString(e, "text/html");
                      for (let l of Array.from(c.querySelectorAll("a")))
                          l.setAttribute("target", "_blank"), l.setAttribute("rel", "noopener noreferrer");
                      return c.body.innerHTML;
                  })(l, d),
                  type: "html",
                  trim: !1,
              }),
          })
        : null;
}
(tb.options = tb.setOptions =
    function (l) {
        return tZ.setOptions(l), (tb.defaults = tZ.defaults), (la = tb.defaults), tb;
    }),
    (tb.getDefaults = lc),
    (tb.defaults = la),
    (tb.use = function (...l) {
        return tZ.use(...l), (tb.defaults = tZ.defaults), (la = tb.defaults), tb;
    }),
    (tb.walkTokens = function (l, t) {
        return tZ.walkTokens(l, t);
    }),
    (tb.parseInline = tZ.parseInline),
    (tb.Parser = ts),
    (tb.parser = ts.parse),
    (tb.Renderer = tc),
    (tb.TextRenderer = ta),
    (tb.Lexer = te),
    (tb.lexer = te.lex),
    (tb.Tokenizer = ti),
    (tb.Hooks = tn),
    (tb.parse = tb),
    tb.options,
    tb.setOptions,
    tb.use,
    tb.walkTokens,
    tb.parseInline,
    ts.parse,
    te.lex;
