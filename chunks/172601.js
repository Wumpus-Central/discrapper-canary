i.d(e, { GlobalWorkerOptions: () => rV, getDocument: () => lv });
var s,
    n,
    a,
    r,
    o = i(425128),
    l = i(72290),
    h = i(264572).Buffer;
function d(t, e, i) {
    if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : i;
    throw TypeError("Private element is not present on this object");
}
function c(t, e) {
    if (e.has(t)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
function u(t, e) {
    c(t, e), e.add(t);
}
function p(t, e, i) {
    c(t, e), e.set(t, i);
}
function g(t, e, i) {
    return t.set(d(t, e), i), i;
}
function f(t, e) {
    return t.get(d(t, e));
}
function m(t, e, i) {
    e || (e = []);
    var s = e.length++;
    return Object.defineProperty({}, "_", {
        set: function (n) {
            (e[s] = n), t.apply(i, e);
        },
    });
}
var w = {};
(w.d = (t, e) => {
    for (var i in e) w.o(e, i) && !w.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
}),
    (w.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var b =
        "object" == typeof l &&
        l + "" == "[object process]" &&
        !l.versions.nw &&
        !(l.versions.electron && l.type && "browser" !== l.type),
    v = [0.001, 0, 0, 0.001, 0, 0],
    A = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 },
    y = "pdfjs_internal_editor_",
    _ = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        HIGHLIGHT: 9,
        STAMP: 13,
        INK: 15,
        POPUP: 16,
        SIGNATURE: 101,
        COMMENT: 102,
    },
    x = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23,
        HIGHLIGHT_COLOR: 31,
        HIGHLIGHT_THICKNESS: 32,
        HIGHLIGHT_FREE: 33,
        HIGHLIGHT_SHOW_ALL: 34,
        DRAW_STEP: 41,
    },
    k = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 },
    M = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26,
    },
    S = { ERRORS: 0, WARNINGS: 1, INFOS: 5 },
    E = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
        setStrokeTransparent: 92,
        setFillTransparent: 93,
        rawFillPath: 94,
    },
    C = S.WARNINGS;
function T(t) {
    C >= S.INFOS && console.info(`Info: ${t}`);
}
function P(t) {
    C >= S.WARNINGS && console.warn(`Warning: ${t}`);
}
function D(t) {
    throw Error(t);
}
function I(t, e) {
    t || D(e);
}
function L(t, e = null, i = null) {
    if (!t) return null;
    if (
        i &&
        "string" == typeof t &&
        (i.addDefaultProtocol && t.startsWith("www.") && t.match(/\./g)?.length >= 2 && (t = `http://${t}`),
        i.tryConvertEncoding)
    )
        try {
            var s;
            (s = t), (t = decodeURIComponent(escape(s)));
        } catch {}
    let n = e ? URL.parse(t, e) : URL.parse(t);
    return !(function (t) {
        switch (t?.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
                return !0;
            default:
                return !1;
        }
    })(n)
        ? null
        : n;
}
function R(t, e, i = !1) {
    let s = URL.parse(t);
    return s
        ? ((s.hash = e), s.href)
        : i && L(t, "http://example.com")
          ? t.split("#", 1)[0] + `${e ? `#${e}` : ""}`
          : "";
}
function F(t, e, i, s = !1) {
    return Object.defineProperty(t, e, { value: i, enumerable: !s, configurable: !0, writable: !1 }), i;
}
var N = (function () {
        function t(t, e) {
            (this.message = t), (this.name = e);
        }
        return (t.prototype = Error()), (t.constructor = t), t;
    })(),
    B = class extends N {
        constructor(t, e) {
            super(t, "PasswordException"), (this.code = e);
        }
    },
    O = class extends N {
        constructor(t, e) {
            super(t, "UnknownErrorException"), (this.details = e);
        }
    },
    W = class extends N {
        constructor(t) {
            super(t, "InvalidPDFException");
        }
    },
    U = class extends N {
        constructor(t, e, i) {
            super(t, "ResponseException"), (this.status = e), (this.missing = i);
        }
    },
    $ = class extends N {
        constructor(t) {
            super(t, "FormatError");
        }
    },
    H = class extends N {
        constructor(t) {
            super(t, "AbortException");
        }
    };
function j(t) {
    "string" != typeof t && D("Invalid argument for stringToBytes");
    let e = t.length,
        i = new Uint8Array(e);
    for (let s = 0; s < e; ++s) i[s] = 255 & t.charCodeAt(s);
    return i;
}
var z = class {
        static get isLittleEndian() {
            let t;
            return F(
                this,
                "isLittleEndian",
                (((t = new Uint8Array(4))[0] = 1), 1 === new Uint32Array(t.buffer, 0, 1)[0]),
            );
        }
        static get isEvalSupported() {
            return F(
                this,
                "isEvalSupported",
                (function () {
                    try {
                        return Function(""), !0;
                    } catch {
                        return !1;
                    }
                })(),
            );
        }
        static get isOffscreenCanvasSupported() {
            return F(this, "isOffscreenCanvasSupported", "u" > typeof OffscreenCanvas);
        }
        static get isImageDecoderSupported() {
            return F(this, "isImageDecoderSupported", "u" > typeof ImageDecoder);
        }
        static get isFloat16ArraySupported() {
            return F(this, "isFloat16ArraySupported", "u" > typeof Float16Array);
        }
        static get isSanitizerSupported() {
            return F(this, "isSanitizerSupported", "u" > typeof Sanitizer);
        }
        static get platform() {
            let { platform: t, userAgent: e } = navigator;
            return F(this, "platform", {
                isAndroid: e.includes("Android"),
                isLinux: t.includes("Linux"),
                isMac: t.includes("Mac"),
                isWindows: t.includes("Win"),
                isFirefox: e.includes("Firefox"),
            });
        }
        static get isCSSRoundSupported() {
            return F(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
        }
    },
    G = Array.from(Array(256).keys(), (t) => t.toString(16).padStart(2, "0")),
    V = class t {
        static makeHexColor(t, e, i) {
            return `#${G[t]}${G[e]}${G[i]}`;
        }
        static domMatrixToTransform(t) {
            return [t.a, t.b, t.c, t.d, t.e, t.f];
        }
        static scaleMinMax(t, e) {
            let i;
            t[0]
                ? (t[0] < 0 && ((i = e[0]), (e[0] = e[2]), (e[2] = i)),
                  (e[0] *= t[0]),
                  (e[2] *= t[0]),
                  t[3] < 0 && ((i = e[1]), (e[1] = e[3]), (e[3] = i)),
                  (e[1] *= t[3]),
                  (e[3] *= t[3]))
                : ((i = e[0]),
                  (e[0] = e[1]),
                  (e[1] = i),
                  (i = e[2]),
                  (e[2] = e[3]),
                  (e[3] = i),
                  t[1] < 0 && ((i = e[1]), (e[1] = e[3]), (e[3] = i)),
                  (e[1] *= t[1]),
                  (e[3] *= t[1]),
                  t[2] < 0 && ((i = e[0]), (e[0] = e[2]), (e[2] = i)),
                  (e[0] *= t[2]),
                  (e[2] *= t[2])),
                (e[0] += t[4]),
                (e[1] += t[5]),
                (e[2] += t[4]),
                (e[3] += t[5]);
        }
        static transform(t, e) {
            return [
                t[0] * e[0] + t[2] * e[1],
                t[1] * e[0] + t[3] * e[1],
                t[0] * e[2] + t[2] * e[3],
                t[1] * e[2] + t[3] * e[3],
                t[0] * e[4] + t[2] * e[5] + t[4],
                t[1] * e[4] + t[3] * e[5] + t[5],
            ];
        }
        static multiplyByDOMMatrix(t, e) {
            return [
                t[0] * e.a + t[2] * e.b,
                t[1] * e.a + t[3] * e.b,
                t[0] * e.c + t[2] * e.d,
                t[1] * e.c + t[3] * e.d,
                t[0] * e.e + t[2] * e.f + t[4],
                t[1] * e.e + t[3] * e.f + t[5],
            ];
        }
        static applyTransform(t, e, i = 0) {
            let s = t[i],
                n = t[i + 1];
            (t[i] = s * e[0] + n * e[2] + e[4]), (t[i + 1] = s * e[1] + n * e[3] + e[5]);
        }
        static applyTransformToBezier(t, e, i = 0) {
            let s = e[0],
                n = e[1],
                a = e[2],
                r = e[3],
                o = e[4],
                l = e[5];
            for (let e = 0; e < 6; e += 2) {
                let h = t[i + e],
                    d = t[i + e + 1];
                (t[i + e] = h * s + d * a + o), (t[i + e + 1] = h * n + d * r + l);
            }
        }
        static applyInverseTransform(t, e) {
            let i = t[0],
                s = t[1],
                n = e[0] * e[3] - e[1] * e[2];
            (t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / n),
                (t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / n);
        }
        static axialAlignedBoundingBox(t, e, i) {
            let s = e[0],
                n = e[1],
                a = e[2],
                r = e[3],
                o = e[4],
                l = e[5],
                h = t[0],
                d = t[1],
                c = t[2],
                u = t[3],
                p = s * h + o,
                g = p,
                f = s * c + o,
                m = f,
                w = r * d + l,
                b = w,
                v = r * u + l,
                A = v;
            if (0 !== n || 0 !== a) {
                let t = n * h,
                    e = n * c,
                    i = a * d,
                    s = a * u;
                (p += i), (m += i), (f += s), (g += s), (w += t), (A += t), (v += e), (b += e);
            }
            (i[0] = Math.min(i[0], p, f, g, m)),
                (i[1] = Math.min(i[1], w, v, b, A)),
                (i[2] = Math.max(i[2], p, f, g, m)),
                (i[3] = Math.max(i[3], w, v, b, A));
        }
        static inverseTransform(t) {
            let e = t[0] * t[3] - t[1] * t[2];
            return [
                t[3] / e,
                -t[1] / e,
                -t[2] / e,
                t[0] / e,
                (t[2] * t[5] - t[4] * t[3]) / e,
                (t[4] * t[1] - t[5] * t[0]) / e,
            ];
        }
        static singularValueDecompose2dScale(t, e) {
            let i = t[0],
                s = t[1],
                n = t[2],
                a = t[3],
                r = i ** 2 + s ** 2,
                o = n ** 2 + a ** 2,
                l = (r + o) / 2,
                h = Math.sqrt(l ** 2 - (r * o - (i * n + s * a) ** 2));
            (e[0] = Math.sqrt(l + h || 1)), (e[1] = Math.sqrt(l - h || 1));
        }
        static normalizeRect(t) {
            let e = t.slice(0);
            return t[0] > t[2] && ((e[0] = t[2]), (e[2] = t[0])), t[1] > t[3] && ((e[1] = t[3]), (e[3] = t[1])), e;
        }
        static intersect(t, e) {
            let i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
            if (i > s) return null;
            let n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
            return n > a ? null : [i, n, s, a];
        }
        static pointBoundingBox(t, e, i) {
            (i[0] = Math.min(i[0], t)),
                (i[1] = Math.min(i[1], e)),
                (i[2] = Math.max(i[2], t)),
                (i[3] = Math.max(i[3], e));
        }
        static rectBoundingBox(t, e, i, s, n) {
            (n[0] = Math.min(n[0], t, i)),
                (n[1] = Math.min(n[1], e, s)),
                (n[2] = Math.max(n[2], t, i)),
                (n[3] = Math.max(n[3], e, s));
        }
        static bezierBoundingBox(e, i, s, n, a, r, o, l, h) {
            (h[0] = Math.min(h[0], e, o)),
                (h[1] = Math.min(h[1], i, l)),
                (h[2] = Math.max(h[2], e, o)),
                (h[3] = Math.max(h[3], i, l)),
                d(t, this, X).call(
                    this,
                    e,
                    s,
                    a,
                    o,
                    i,
                    n,
                    r,
                    l,
                    3 * (-e + 3 * (s - a) + o),
                    6 * (e - 2 * s + a),
                    3 * (s - e),
                    h,
                ),
                d(t, this, X).call(
                    this,
                    e,
                    s,
                    a,
                    o,
                    i,
                    n,
                    r,
                    l,
                    3 * (-i + 3 * (n - r) + l),
                    6 * (i - 2 * n + r),
                    3 * (n - i),
                    h,
                );
        }
    };
function q(t, e, i, s, n, a, r, o, l, h) {
    if (l <= 0 || l >= 1) return;
    let d = 1 - l,
        c = l * l,
        u = c * l,
        p = d * (d * (d * t + 3 * l * e) + 3 * c * i) + u * s,
        g = d * (d * (d * n + 3 * l * a) + 3 * c * r) + u * o;
    (h[0] = Math.min(h[0], p)), (h[1] = Math.min(h[1], g)), (h[2] = Math.max(h[2], p)), (h[3] = Math.max(h[3], g));
}
function X(t, e, i, s, n, a, r, o, l, h, c, u) {
    if (1e-12 > Math.abs(l)) {
        Math.abs(h) >= 1e-12 && d(V, this, q).call(this, t, e, i, s, n, a, r, o, -c / h, u);
        return;
    }
    let p = h ** 2 - 4 * c * l;
    if (p < 0) return;
    let g = Math.sqrt(p),
        f = 2 * l;
    d(V, this, q).call(this, t, e, i, s, n, a, r, o, (-h + g) / f, u),
        d(V, this, q).call(this, t, e, i, s, n, a, r, o, (-h - g) / f, u);
}
var K = null,
    Y = null;
function Q() {
    if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
    let t = new Uint8Array(32);
    return (
        crypto.getRandomValues(t),
        (function (t) {
            ("object" != typeof t || t?.length === void 0) && D("Invalid argument for bytesToString");
            let e = t.length;
            if (e < 8192) return String.fromCharCode.apply(null, t);
            let i = [];
            for (let s = 0; s < e; s += 8192) {
                let n = Math.min(s + 8192, e),
                    a = t.subarray(s, n);
                i.push(String.fromCharCode.apply(null, a));
            }
            return i.join("");
        })(t)
    );
}
var J = "pdfjs_internal_id_";
function Z(t, e, i) {
    return Math.min(Math.max(t, e), i);
}
"function" != typeof Math.sumPrecise &&
    (Math.sumPrecise = function (t) {
        return t.reduce((t, e) => t + e, 0);
    });
var tt = class t {
        static textContent(e) {
            let i = [],
                s = { items: i, styles: Object.create(null) };
            return (
                !(function e(s) {
                    if (!s) return;
                    let n = null,
                        a = s.name;
                    if ("#text" === a) n = s.value;
                    else {
                        if (!t.shouldBuildText(a)) return;
                        s?.attributes?.textContent ? (n = s.attributes.textContent) : s.value && (n = s.value);
                    }
                    if ((null !== n && i.push({ str: n }), s.children)) for (let t of s.children) e(t);
                })(e),
                s
            );
        }
        static shouldBuildText(t) {
            return "textarea" !== t && "input" !== t && "option" !== t && "select" !== t;
        }
    },
    te = class {
        static setupStorage(t, e, i, s, n) {
            let a = s.getValue(e, { value: null });
            switch (i.name) {
                case "textarea":
                    if ((null !== a.value && (t.textContent = a.value), "print" === n)) break;
                    t.addEventListener("input", (t) => {
                        s.setValue(e, { value: t.target.value });
                    });
                    break;
                case "input":
                    if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                        if (
                            (a.value === i.attributes.xfaOn
                                ? t.setAttribute("checked", !0)
                                : a.value === i.attributes.xfaOff && t.removeAttribute("checked"),
                            "print" === n)
                        )
                            break;
                        t.addEventListener("change", (t) => {
                            s.setValue(e, {
                                value: t.target.checked
                                    ? t.target.getAttribute("xfaOn")
                                    : t.target.getAttribute("xfaOff"),
                            });
                        });
                    } else {
                        if ((null !== a.value && t.setAttribute("value", a.value), "print" === n)) break;
                        t.addEventListener("input", (t) => {
                            s.setValue(e, { value: t.target.value });
                        });
                    }
                    break;
                case "select":
                    if (null !== a.value)
                        for (let e of (t.setAttribute("value", a.value), i.children))
                            e.attributes.value === a.value
                                ? (e.attributes.selected = !0)
                                : e.attributes.hasOwnProperty("selected") && delete e.attributes.selected;
                    t.addEventListener("input", (t) => {
                        let i = t.target.options,
                            n = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
                        s.setValue(e, { value: n });
                    });
            }
        }
        static setAttributes({ html: t, element: e, storage: i = null, intent: s, linkService: n }) {
            let { attributes: a } = e,
                r = t instanceof HTMLAnchorElement;
            for (let [e, i] of ("radio" === a.type && (a.name = `${a.name}-${s}`), Object.entries(a)))
                if (null != i)
                    switch (e) {
                        case "class":
                            i.length && t.setAttribute(e, i.join(" "));
                            break;
                        case "dataId":
                            break;
                        case "id":
                            t.setAttribute("data-element-id", i);
                            break;
                        case "style":
                            Object.assign(t.style, i);
                            break;
                        case "textContent":
                            t.textContent = i;
                            break;
                        default:
                            (r && ("href" === e || "newWindow" === e)) || t.setAttribute(e, i);
                    }
            r && n.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i);
        }
        static render(t) {
            let e = t.annotationStorage,
                i = t.linkService,
                s = t.xfaHtml,
                n = t.intent || "display",
                a = document.createElement(s.name);
            s.attributes && this.setAttributes({ html: a, element: s, intent: n, linkService: i });
            let r = "richText" !== n,
                o = t.div;
            if ((o.append(a), t.viewport)) {
                let e = `matrix(${t.viewport.transform.join(",")})`;
                o.style.transform = e;
            }
            r && o.setAttribute("class", "xfaLayer xfaFont");
            let l = [];
            if (0 === s.children.length) {
                if (s.value) {
                    let t = document.createTextNode(s.value);
                    a.append(t), r && tt.shouldBuildText(s.name) && l.push(t);
                }
                return { textDivs: l };
            }
            let h = [[s, -1, a]];
            for (; h.length > 0; ) {
                let [t, s, a] = h.at(-1);
                if (s + 1 === t.children.length) {
                    h.pop();
                    continue;
                }
                let o = t.children[++h.at(-1)[1]];
                if (null === o) continue;
                let { name: d } = o;
                if ("#text" === d) {
                    let t = document.createTextNode(o.value);
                    l.push(t), a.append(t);
                    continue;
                }
                let c = o?.attributes?.xmlns
                    ? document.createElementNS(o.attributes.xmlns, d)
                    : document.createElement(d);
                if (
                    (a.append(c),
                    o.attributes && this.setAttributes({ html: c, element: o, storage: e, intent: n, linkService: i }),
                    o.children?.length > 0)
                )
                    h.push([o, -1, c]);
                else if (o.value) {
                    let t = document.createTextNode(o.value);
                    r && tt.shouldBuildText(d) && l.push(t), c.append(t);
                }
            }
            for (let t of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                t.setAttribute("readOnly", !0);
            return { textDivs: l };
        }
        static update(t) {
            let e = `matrix(${t.viewport.transform.join(",")})`;
            (t.div.style.transform = e), (t.div.hidden = !1);
        }
    },
    ti = "http://www.w3.org/2000/svg",
    ts = class {};
async function tn(t, e = "text") {
    if (td(t, document.baseURI)) {
        let i = await fetch(t);
        if (!i.ok) throw Error(i.statusText);
        switch (e) {
            case "arraybuffer":
                return i.arrayBuffer();
            case "blob":
                return i.blob();
            case "json":
                return i.json();
        }
        return i.text();
    }
    return new Promise((i, s) => {
        let n = new XMLHttpRequest();
        n.open("GET", t, !0),
            (n.responseType = e),
            (n.onreadystatechange = () => {
                if (n.readyState === XMLHttpRequest.DONE) {
                    if (200 === n.status || 0 === n.status) {
                        switch (e) {
                            case "arraybuffer":
                            case "blob":
                            case "json":
                                i(n.response);
                                return;
                        }
                        i(n.responseText);
                        return;
                    }
                    s(Error(n.statusText));
                }
            }),
            n.send(null);
    });
}
(0, o.t)(ts, "CSS", 96), (0, o.t)(ts, "PDF", 72), (0, o.t)(ts, "PDF_TO_CSS_UNITS", ts.CSS / ts.PDF);
var ta = class t {
        constructor({
            viewBox: t,
            userUnit: e,
            scale: i,
            rotation: s,
            offsetX: n = 0,
            offsetY: a = 0,
            dontFlip: r = !1,
        }) {
            let o, l, h, d, c, u, p, g;
            (this.viewBox = t),
                (this.userUnit = e),
                (this.scale = i),
                (this.rotation = s),
                (this.offsetX = n),
                (this.offsetY = a),
                (i *= e);
            const f = (t[2] + t[0]) / 2,
                m = (t[3] + t[1]) / 2;
            switch (((s %= 360) < 0 && (s += 360), s)) {
                case 180:
                    (o = -1), (l = 0), (h = 0), (d = 1);
                    break;
                case 90:
                    (o = 0), (l = 1), (h = 1), (d = 0);
                    break;
                case 270:
                    (o = 0), (l = -1), (h = -1), (d = 0);
                    break;
                case 0:
                    (o = 1), (l = 0), (h = 0), (d = -1);
                    break;
                default:
                    throw Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            r && ((h = -h), (d = -d)),
                0 === o
                    ? ((c = Math.abs(m - t[1]) * i + n),
                      (u = Math.abs(f - t[0]) * i + a),
                      (p = (t[3] - t[1]) * i),
                      (g = (t[2] - t[0]) * i))
                    : ((c = Math.abs(f - t[0]) * i + n),
                      (u = Math.abs(m - t[1]) * i + a),
                      (p = (t[2] - t[0]) * i),
                      (g = (t[3] - t[1]) * i)),
                (this.transform = [o * i, l * i, h * i, d * i, c - o * i * f - h * i * m, u - l * i * f - d * i * m]),
                (this.width = p),
                (this.height = g);
        }
        get rawDims() {
            let t = this.viewBox;
            return F(this, "rawDims", { pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1] });
        }
        clone({
            scale: e = this.scale,
            rotation: i = this.rotation,
            offsetX: s = this.offsetX,
            offsetY: n = this.offsetY,
            dontFlip: a = !1,
        } = {}) {
            return new t({
                viewBox: this.viewBox.slice(),
                userUnit: this.userUnit,
                scale: e,
                rotation: i,
                offsetX: s,
                offsetY: n,
                dontFlip: a,
            });
        }
        convertToViewportPoint(t, e) {
            let i = [t, e];
            return V.applyTransform(i, this.transform), i;
        }
        convertToViewportRectangle(t) {
            let e = [t[0], t[1]];
            V.applyTransform(e, this.transform);
            let i = [t[2], t[3]];
            return V.applyTransform(i, this.transform), [e[0], e[1], i[0], i[1]];
        }
        convertToPdfPoint(t, e) {
            let i = [t, e];
            return V.applyInverseTransform(i, this.transform), i;
        }
    },
    tr = class extends N {
        constructor(t, e = 0) {
            super(t, "RenderingCancelledException"), (this.extraDelay = e);
        }
    };
function to(t) {
    let e = t.length,
        i = 0;
    for (; i < e && "" === t[i].trim(); ) i++;
    return "data:" === t.substring(i, i + 5).toLowerCase();
}
function tl(t) {
    return "string" == typeof t && /\.pdf$/i.test(t);
}
var th = class {
    constructor() {
        (0, o.t)(this, "started", Object.create(null)), (0, o.t)(this, "times", []);
    }
    time(t) {
        t in this.started && P(`Timer is already running for ${t}`), (this.started[t] = Date.now());
    }
    timeEnd(t) {
        t in this.started || P(`Timer has not been started for ${t}`),
            this.times.push({ name: t, start: this.started[t], end: Date.now() }),
            delete this.started[t];
    }
    toString() {
        let t = [],
            e = 0;
        for (let { name: t } of this.times) e = Math.max(t.length, e);
        for (let { name: i, start: s, end: n } of this.times)
            t.push(`${i.padEnd(e)} ${n - s}ms
`);
        return t.join("");
    }
};
function td(t, e) {
    let i = e ? URL.parse(t, e) : URL.parse(t);
    return i?.protocol === "http:" || i?.protocol === "https:";
}
function tc(t) {
    t.preventDefault();
}
function tu(t) {
    t.preventDefault(), t.stopPropagation();
}
var tp = class t {
        static toDateObject(e) {
            if (e instanceof Date) return e;
            if (!e || "string" != typeof e) return null;
            d(t, this, tg)._ || (tg._ = d(t, this, null));
            let i = d(t, this, tg)._.exec(e);
            if (!i) return null;
            let s = parseInt(i[1], 10),
                n = parseInt(i[2], 10);
            n = n >= 1 && n <= 12 ? n - 1 : 0;
            let a = parseInt(i[3], 10);
            a = a >= 1 && a <= 31 ? a : 1;
            let r = parseInt(i[4], 10);
            r = r >= 0 && r <= 23 ? r : 0;
            let o = parseInt(i[5], 10);
            o = o >= 0 && o <= 59 ? o : 0;
            let l = parseInt(i[6], 10);
            l = l >= 0 && l <= 59 ? l : 0;
            let h = i[7] || "Z",
                c = parseInt(i[8], 10);
            c = c >= 0 && c <= 23 ? c : 0;
            let u = parseInt(i[9], 10) || 0;
            return (
                (u = u >= 0 && u <= 59 ? u : 0),
                "-" === h ? ((r += c), (o += u)) : "+" === h && ((r -= c), (o -= u)),
                new Date(Date.UTC(s, n, a, r, o, l))
            );
        }
    },
    tg = { _: void 0 };
function tf(t) {
    if (t.startsWith("#")) {
        let e = parseInt(t.slice(1), 16);
        return [(0xff0000 & e) >> 16, (65280 & e) >> 8, 255 & e];
    }
    return t.startsWith("rgb(")
        ? t
              .slice(4, -1)
              .split(",")
              .map((t) => parseInt(t))
        : t.startsWith("rgba(")
          ? t
                .slice(5, -1)
                .split(",")
                .map((t) => parseInt(t))
                .slice(0, 3)
          : (P(`Not a valid color format: "${t}"`), [0, 0, 0]);
}
function tm(t) {
    let { a: e, b: i, c: s, d: n, e: a, f: r } = t.getTransform();
    return [e, i, s, n, a, r];
}
function tw(t) {
    let { a: e, b: i, c: s, d: n, e: a, f: r } = t.getTransform().invertSelf();
    return [e, i, s, n, a, r];
}
function tb(t, e, i = !1, s = !0) {
    if (e instanceof ta) {
        let { pageWidth: s, pageHeight: n } = e.rawDims,
            { style: a } = t,
            r = z.isCSSRoundSupported,
            o = `var(--total-scale-factor) * ${s}px`,
            l = `var(--total-scale-factor) * ${n}px`,
            h = r ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`,
            d = r ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
        i && e.rotation % 180 != 0 ? ((a.width = d), (a.height = h)) : ((a.width = h), (a.height = d));
    }
    s && t.setAttribute("data-main-rotation", e.rotation);
}
var tv = class t {
        constructor() {
            const { pixelRatio: e } = t;
            (this.sx = e), (this.sy = e);
        }
        get scaled() {
            return 1 !== this.sx || 1 !== this.sy;
        }
        get symmetric() {
            return this.sx === this.sy;
        }
        limitCanvas(e, i, s, n, a = -1) {
            let r = 1 / 0,
                o = 1 / 0,
                l = 1 / 0;
            (s = t.capPixels(s, a)) > 0 && (r = Math.sqrt(s / (e * i))), -1 !== n && ((o = n / e), (l = n / i));
            let h = Math.min(r, o, l);
            return (this.sx > h || this.sy > h) && ((this.sx = h), (this.sy = h), !0);
        }
        static get pixelRatio() {
            return globalThis.devicePixelRatio || 1;
        }
        static capPixels(t, e) {
            if (e >= 0) {
                let i = Math.ceil(
                    window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100),
                );
                return t > 0 ? Math.min(t, i) : i;
            }
            return t;
        }
    },
    tA = [
        "image/apng",
        "image/avif",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
        "image/x-icon",
    ],
    ty = class {
        static get isDarkMode() {
            return F(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
        }
    },
    t_ = class {
        static get commentForegroundColor() {
            let t = document.createElement("span");
            t.classList.add("comment", "sidebar");
            let { style: e } = t;
            (e.width = e.height = "0"),
                (e.display = "none"),
                (e.color = "var(--comment-fg-color)"),
                document.body.append(t);
            let { color: i } = window.getComputedStyle(t);
            return t.remove(), F(this, "commentForegroundColor", tf(i));
        }
    };
function tx(t, e) {
    let i = t[0] / 255,
        s = t[1] / 255,
        n = t[2] / 255,
        a = Math.max(i, s, n),
        r = Math.min(i, s, n),
        o = (a + r) / 2;
    if (a === r) e[0] = e[1] = 0;
    else {
        let t = a - r;
        switch (((e[1] = o < 0.5 ? t / (a + r) : t / (2 - a - r)), a)) {
            case i:
                e[0] = ((s - n) / t + 6 * (s < n)) * 60;
                break;
            case s:
                e[0] = ((n - i) / t + 2) * 60;
                break;
            case n:
                e[0] = ((i - s) / t + 4) * 60;
        }
    }
    e[2] = o;
}
function tk(t, e) {
    let i = t[0],
        s = t[1],
        n = t[2],
        a = (1 - Math.abs(2 * n - 1)) * s,
        r = a * (1 - Math.abs(((i / 60) % 2) - 1)),
        o = n - a / 2;
    switch (Math.floor(i / 60)) {
        case 0:
            (e[0] = a + o), (e[1] = r + o), (e[2] = o);
            break;
        case 1:
            (e[0] = r + o), (e[1] = a + o), (e[2] = o);
            break;
        case 2:
            (e[0] = o), (e[1] = a + o), (e[2] = r + o);
            break;
        case 3:
            (e[0] = o), (e[1] = r + o), (e[2] = a + o);
            break;
        case 4:
            (e[0] = r + o), (e[1] = o), (e[2] = a + o);
            break;
        case 5:
        case 6:
            (e[0] = a + o), (e[1] = o), (e[2] = r + o);
    }
}
function tM(t) {
    return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function tS(t, e, i) {
    tk(t, i), i.map(tM);
    let s = 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
    tk(e, i), i.map(tM);
    let n = 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
    return s > n ? (s + 0.05) / (n + 0.05) : (n + 0.05) / (s + 0.05);
}
var tE = new Map();
function tC({ html: t, dir: e, className: i }, s) {
    let n = document.createDocumentFragment();
    if ("string" == typeof t) {
        let i = document.createElement("p");
        i.dir = e || "auto";
        let s = t.split(/(?:\r\n?|\n)/);
        for (let t = 0, e = s.length; t < e; ++t) {
            let n = s[t];
            i.append(document.createTextNode(n)), t < e - 1 && i.append(document.createElement("br"));
        }
        n.append(i);
    } else te.render({ xfaHtml: t, div: n, intent: "richText" });
    n.firstElementChild.classList.add("richText", i), s.append(n);
}
function tT(t) {
    let e = new Path2D();
    if (!t) return e;
    for (let i = 0, s = t.length; i < s; )
        switch (t[i++]) {
            case 0:
                e.moveTo(t[i++], t[i++]);
                break;
            case 1:
                e.lineTo(t[i++], t[i++]);
                break;
            case 2:
                e.bezierCurveTo(t[i++], t[i++], t[i++], t[i++], t[i++], t[i++]);
                break;
            case 3:
                e.quadraticCurveTo(t[i++], t[i++], t[i++], t[i++]);
                break;
            case 4:
                e.closePath();
                break;
            default:
                P(`Unrecognized drawing path operator: ${t[i - 1]}`);
        }
    return e;
}
var tP = new WeakSet(),
    tD = class t {
        constructor() {
            u(this, tP);
        }
        get pagesNumber() {
            return tB._;
        }
        set pagesNumber(t) {
            tB._ !== t && ((tB._ = t), 0 === t && ((tF._ = null), (tR._ = null)));
        }
        addListener(t) {
            tO._.push(t);
        }
        removeListener(t) {
            let e = tO._.indexOf(t);
            e >= 0 && tO._.splice(e, 1);
        }
        movePages(t, e, i) {
            d(tP, this, tL).call(this, !0);
            let s = tF._,
                n = tR._;
            tN._.set(n);
            let a = e.length,
                r = new Uint32Array(a),
                o = 0;
            for (let t = 0; t < a; t++) {
                let n = e[t] - 1;
                (r[t] = s[n]), n < i && (o += 1);
            }
            let l = tB._,
                h = i - o,
                c = l - a;
            h = Z(h, 0, c);
            for (let e = 0, i = 0; e < l; e++) t.has(e + 1) || (s[i++] = s[e]);
            s.copyWithin(h + a, h, c), s.set(r, h);
            let u = !1;
            for (let t = 0; t < l; t++) {
                let e = s[t];
                (u ||= e !== t + 1), (n[e - 1] = t + 1);
            }
            d(tP, this, tI).call(this), u || (this.pagesNumber = 0);
        }
        hasBeenAltered() {
            return null !== tF._;
        }
        getPageMappingForSaving() {
            return { pageIndices: tR._ ? tR._.map((t) => t - 1) : null };
        }
        getPrevPageNumber(t) {
            return tN._[tF._[t - 1] - 1];
        }
        getPageNumber(t) {
            return tR._?.[t - 1] ?? t;
        }
        getPageId(t) {
            return tF._?.[t - 1] ?? t;
        }
        static get instance() {
            return F(this, "instance", new t());
        }
        getMapping() {
            return tF._.subarray(0, this.pagesNumber);
        }
    };
function tI() {
    for (let t of tO._) t();
}
function tL(t) {
    if (tF._) return;
    let e = tB._,
        i = new Uint32Array(3 * e),
        s = (tF._ = i.subarray(0, e)),
        n = (tR._ = i.subarray(e, 2 * e));
    if (t) for (let t = 0; t < e; t++) s[t] = n[t] = t + 1;
    tN._ = i.subarray(2 * e);
}
var tR = { _: null },
    tF = { _: null },
    tN = { _: null },
    tB = { _: 0 },
    tO = { _: [] },
    tW = new WeakMap(),
    tU = new WeakMap(),
    t$ = new WeakMap(),
    tH = new WeakMap(),
    tj = new WeakMap(),
    tz = new WeakMap(),
    tG = new WeakMap(),
    tV = new WeakMap(),
    tq = new WeakSet(),
    tX = class {
        constructor(t) {
            u(this, tq),
                p(this, tW, null),
                p(this, tU, null),
                p(this, t$, void 0),
                p(this, tH, null),
                p(this, tj, null),
                p(this, tz, null),
                p(this, tG, null),
                p(this, tV, null),
                g(t$, this, t),
                t0._ ||
                    (t0._ = Object.freeze({
                        freetext: "pdfjs-editor-remove-freetext-button",
                        highlight: "pdfjs-editor-remove-highlight-button",
                        ink: "pdfjs-editor-remove-ink-button",
                        stamp: "pdfjs-editor-remove-stamp-button",
                        signature: "pdfjs-editor-remove-signature-button",
                    }));
        }
        render() {
            let t = g(tW, this, document.createElement("div"));
            t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
            let e = f(t$, this)._uiManager._signal;
            e instanceof AbortSignal &&
                !e.aborted &&
                (t.addEventListener("contextmenu", tc, { signal: e }),
                t.addEventListener("pointerdown", tK, { signal: e }));
            let i = g(tH, this, document.createElement("div"));
            (i.className = "buttons"), t.append(i);
            let s = f(t$, this).toolbarPosition;
            if (s) {
                let { style: e } = t;
                (e.insetInlineEnd = `${100 * ("ltr" === f(t$, this)._uiManager.direction ? 1 - s[0] : s[0])}%`),
                    (e.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`);
            }
            return t;
        }
        get div() {
            return f(tW, this);
        }
        hide() {
            f(tW, this).classList.add("hidden"), f(tU, this)?.hideDropdown();
        }
        show() {
            f(tW, this).classList.remove("hidden"), f(tj, this)?.shown(), f(tz, this)?.shown();
        }
        addDeleteButton() {
            let { editorType: t, _uiManager: e } = f(t$, this),
                i = document.createElement("button");
            i.classList.add("basic", "deleteButton"),
                (i.tabIndex = 0),
                i.setAttribute("data-l10n-id", t0._[t]),
                d(tq, this, tJ).call(this, i) &&
                    i.addEventListener(
                        "click",
                        (t) => {
                            e.delete();
                        },
                        { signal: e._signal },
                    ),
                f(tH, this).append(i);
        }
        async addAltText(t) {
            let e = await t.render();
            d(tq, this, tJ).call(this, e), f(tH, this).append(e, tZ.call(d(tq, this))), g(tj, this, t);
        }
        addComment(t, e = null) {
            if (f(tz, this)) return;
            let i = t.renderForToolbar();
            if (!i) return;
            d(tq, this, tJ).call(this, i);
            let s = g(tG, this, tZ.call(d(tq, this)));
            e ? (f(tH, this).insertBefore(i, e), f(tH, this).insertBefore(s, e)) : f(tH, this).append(i, s),
                g(tz, this, t),
                (t.toolbar = this);
        }
        addColorPicker(t) {
            if (f(tU, this)) return;
            g(tU, this, t);
            let e = t.renderButton();
            d(tq, this, tJ).call(this, e), f(tH, this).append(e, tZ.call(d(tq, this)));
        }
        async addEditSignatureButton(t) {
            let e = g(tV, this, await t.renderEditButton(f(t$, this)));
            d(tq, this, tJ).call(this, e), f(tH, this).append(e, tZ.call(d(tq, this)));
        }
        removeButton(t) {
            "comment" === t &&
                (f(tz, this)?.removeToolbarCommentButton(),
                g(tz, this, null),
                f(tG, this)?.remove(),
                g(tG, this, null));
        }
        async addButton(t, e) {
            switch (t) {
                case "colorPicker":
                    e && this.addColorPicker(e);
                    break;
                case "altText":
                    e && (await this.addAltText(e));
                    break;
                case "editSignature":
                    e && (await this.addEditSignatureButton(e));
                    break;
                case "delete":
                    this.addDeleteButton();
                    break;
                case "comment":
                    e && this.addComment(e);
            }
        }
        async addButtonBefore(t, e, i) {
            if (!e && "comment" === t) return;
            let s = f(tH, this).querySelector(i);
            s && "comment" === t && this.addComment(e, s);
        }
        updateEditSignatureButton(t) {
            f(tV, this) && (f(tV, this).title = t);
        }
        remove() {
            f(tW, this).remove(), f(tU, this)?.destroy(), g(tU, this, null);
        }
    };
function tK(t) {
    t.stopPropagation();
}
function tY(t) {
    (f(t$, this)._focusEventsAllowed = !1), tu(t);
}
function tQ(t) {
    (f(t$, this)._focusEventsAllowed = !0), tu(t);
}
function tJ(t) {
    let e = f(t$, this)._uiManager._signal;
    return (
        e instanceof AbortSignal &&
        !e.aborted &&
        (t.addEventListener("focusin", d(tq, this, tY).bind(this), { capture: !0, signal: e }),
        t.addEventListener("focusout", d(tq, this, tQ).bind(this), { capture: !0, signal: e }),
        t.addEventListener("contextmenu", tc, { signal: e }),
        !0)
    );
}
function tZ() {
    let t = document.createElement("div");
    return (t.className = "divider"), t;
}
var t0 = { _: null },
    t1 = new WeakMap(),
    t2 = new WeakMap(),
    t3 = new WeakMap(),
    t5 = new WeakSet(),
    t4 = class {
        constructor(t) {
            u(this, t5), p(this, t1, null), p(this, t2, null), p(this, t3, void 0), g(t3, this, t);
        }
        show(t, e, i) {
            let [s, n] = d(t5, this, t8).call(this, e, i),
                { style: a } = f(t2, this) || g(t2, this, d(t5, this, t6).call(this));
            t.append(f(t2, this)),
                (a.insetInlineEnd = `${100 * s}%`),
                (a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`);
        }
        hide() {
            f(t2, this).remove();
        }
    };
function t6() {
    let t = g(t2, this, document.createElement("div"));
    (t.className = "editToolbar"), t.setAttribute("role", "toolbar");
    let e = f(t3, this)._signal;
    e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", tc, { signal: e });
    let i = g(t1, this, document.createElement("div"));
    return (
        (i.className = "buttons"),
        t.append(i),
        f(t3, this).hasCommentManager() &&
            d(t5, this, t7).call(
                this,
                "commentButton",
                "pdfjs-comment-floating-button",
                "pdfjs-comment-floating-button-label",
                () => {
                    f(t3, this).commentSelection("floating_button");
                },
            ),
        d(t5, this, t7).call(
            this,
            "highlightButton",
            "pdfjs-highlight-floating-button1",
            "pdfjs-highlight-floating-button-label",
            () => {
                f(t3, this).highlightSelection("floating_button");
            },
        ),
        t
    );
}
function t8(t, e) {
    let i = 0,
        s = 0;
    for (let n of t) {
        let t = n.y + n.height;
        if (t < i) continue;
        let a = n.x + (e ? n.width : 0);
        if (t > i) {
            (s = a), (i = t);
            continue;
        }
        e ? a > s && (s = a) : a < s && (s = a);
    }
    return [e ? 1 - s : s, i];
}
function t7(t, e, i, s) {
    let n = document.createElement("button");
    n.classList.add("basic", t), (n.tabIndex = 0), n.setAttribute("data-l10n-id", e);
    let a = document.createElement("span");
    n.append(a), (a.className = "visuallyHidden"), a.setAttribute("data-l10n-id", i);
    let r = f(t3, this)._signal;
    r instanceof AbortSignal &&
        !r.aborted &&
        (n.addEventListener("contextmenu", tc, { signal: r }), n.addEventListener("click", s, { signal: r })),
        f(t1, this).append(n);
}
function t9(t, e, i) {
    for (let s of i) e.addEventListener(s, t[s].bind(t));
}
var et = class t {
        static initializeAndAddPointerId(t) {
            (ei._ || (ei._ = new Set())).add(t);
        }
        static setPointer(t, e) {
            ee._ || (ee._ = e), en._ ?? (en._ = t);
        }
        static setTimeStamp(t) {
            es._ = t;
        }
        static isSamePointerId(t) {
            return ee._ === t;
        }
        static isSamePointerIdOrRemove(t) {
            return ee._ === t || (ei._?.delete(t), !1);
        }
        static isSamePointerType(t) {
            return en._ === t;
        }
        static isInitializedAndDifferentPointerType(e) {
            return null !== en._ && !t.isSamePointerType(e);
        }
        static isSameTimeStamp(t) {
            return es._ === t;
        }
        static isUsingMultiplePointers() {
            return ei._?.size >= 1;
        }
        static clearPointerType() {
            en._ = null;
        }
        static clearPointerIds() {
            (ee._ = NaN), (ei._ = null);
        }
        static clearTimeStamp() {
            es._ = NaN;
        }
    },
    ee = { _: NaN },
    ei = { _: null },
    es = { _: NaN },
    en = { _: null },
    ea = new WeakMap(),
    er = class {
        constructor() {
            p(this, ea, 0);
        }
        get id() {
            var t, e;
            return `${y}${(g(ea, this, ((t = f(ea, this)), (e = t++), t)), e)}`;
        }
    },
    eo = new WeakMap(),
    el = new WeakMap(),
    eh = new WeakMap(),
    ed = new WeakSet(),
    ec = class {
        constructor() {
            u(this, ed), p(this, eo, Q()), p(this, el, 0), p(this, eh, null);
        }
        static get _isSVGFittingCanvas() {
            let t = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: !0 }),
                e = new Image();
            return (
                (e.src =
                    'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>'),
                F(
                    this,
                    "_isSVGFittingCanvas",
                    e
                        .decode()
                        .then(
                            () => (
                                t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3),
                                0 === new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0]
                            ),
                        ),
                )
            );
        }
        async getFromFile(t) {
            let { lastModified: e, name: i, size: s, type: n } = t;
            return d(ed, this, eu).call(this, `${e}_${i}_${s}_${n}`, t);
        }
        async getFromUrl(t) {
            return d(ed, this, eu).call(this, t, t);
        }
        async getFromBlob(t, e) {
            let i = await e;
            return d(ed, this, eu).call(this, t, i);
        }
        async getFromId(t) {
            f(eh, this) || g(eh, this, new Map());
            let e = f(eh, this).get(t);
            if (!e) return null;
            if (e.bitmap) return (e.refCounter += 1), e;
            if (e.file) return this.getFromFile(e.file);
            if (e.blobPromise) {
                let { blobPromise: t } = e;
                return delete e.blobPromise, this.getFromBlob(e.id, t);
            }
            return this.getFromUrl(e.url);
        }
        getFromCanvas(t, e) {
            var i, s;
            f(eh, this) || g(eh, this, new Map());
            let n = f(eh, this).get(t);
            if (n?.bitmap) return (n.refCounter += 1), n;
            let a = new OffscreenCanvas(e.width, e.height);
            return (
                a.getContext("2d").drawImage(e, 0, 0),
                (n = {
                    bitmap: a.transferToImageBitmap(),
                    id: `image_${f(eo, this)}_${(g(el, this, ((i = f(el, this)), (s = i++), i)), s)}`,
                    refCounter: 1,
                    isSvg: !1,
                }),
                f(eh, this).set(t, n),
                f(eh, this).set(n.id, n),
                n
            );
        }
        getSvgUrl(t) {
            let e = f(eh, this).get(t);
            return e?.isSvg ? e.svgUrl : null;
        }
        deleteId(t) {
            f(eh, this) || g(eh, this, new Map());
            let e = f(eh, this).get(t);
            if (!e || ((e.refCounter -= 1), 0 !== e.refCounter)) return;
            let { bitmap: i } = e;
            if (!e.url && !e.file) {
                let t = new OffscreenCanvas(i.width, i.height);
                t.getContext("bitmaprenderer").transferFromImageBitmap(i), (e.blobPromise = t.convertToBlob());
            }
            i.close?.(), (e.bitmap = null);
        }
        isValidId(t) {
            return t.startsWith(`image_${f(eo, this)}_`);
        }
    };
async function eu(t, e) {
    f(eh, this) || g(eh, this, new Map());
    let i = f(eh, this).get(t);
    if (null === i) return null;
    if (i?.bitmap) return (i.refCounter += 1), i;
    try {
        var s, n;
        let t;
        if (
            ((i ||= {
                bitmap: null,
                id: `image_${f(eo, this)}_${(g(el, this, ((s = f(el, this)), (n = s++), s)), n)}`,
                refCounter: 0,
                isSvg: !1,
            }),
            "string" == typeof e
                ? ((i.url = e), (t = await tn(e, "blob")))
                : e instanceof File
                  ? (t = i.file = e)
                  : e instanceof Blob && (t = e),
            "image/svg+xml" === t.type)
        ) {
            let e = ec._isSVGFittingCanvas,
                s = new FileReader(),
                n = new Image(),
                a = new Promise((t, a) => {
                    (n.onload = () => {
                        (i.bitmap = n), (i.isSvg = !0), t();
                    }),
                        (s.onload = async () => {
                            let t = (i.svgUrl = s.result);
                            n.src = (await e) ? `${t}#svgView(preserveAspectRatio(none))` : t;
                        }),
                        (n.onerror = s.onerror = a);
                });
            s.readAsDataURL(t), await a;
        } else i.bitmap = await createImageBitmap(t);
        i.refCounter = 1;
    } catch (t) {
        P(t), (i = null);
    }
    return f(eh, this).set(t, i), i && f(eh, this).set(i.id, i), i;
}
var ep = new WeakMap(),
    eg = new WeakMap(),
    ef = new WeakMap(),
    em = new WeakMap(),
    ew = class {
        constructor(t = 128) {
            p(this, ep, []), p(this, eg, !1), p(this, ef, void 0), p(this, em, -1), g(ef, this, t);
        }
        add({ cmd: t, undo: e, post: i, mustExec: s, type: n = NaN, overwriteIfSameType: a = !1, keepUndo: r = !1 }) {
            if ((s && t(), f(eg, this))) return;
            let o = { cmd: t, undo: e, post: i, type: n };
            if (-1 === f(em, this)) {
                f(ep, this).length > 0 && (f(ep, this).length = 0), g(em, this, 0), f(ep, this).push(o);
                return;
            }
            if (a && f(ep, this)[f(em, this)].type === n) {
                r && (o.undo = f(ep, this)[f(em, this)].undo), (f(ep, this)[f(em, this)] = o);
                return;
            }
            let l = f(em, this) + 1;
            l === f(ef, this)
                ? f(ep, this).splice(0, 1)
                : (g(em, this, l), l < f(ep, this).length && f(ep, this).splice(l)),
                f(ep, this).push(o);
        }
        undo() {
            if (-1 === f(em, this)) return;
            g(eg, this, !0);
            let { undo: t, post: e } = f(ep, this)[f(em, this)];
            t(), e?.(), g(eg, this, !1), g(em, this, f(em, this) - 1);
        }
        redo() {
            if (f(em, this) < f(ep, this).length - 1) {
                g(em, this, f(em, this) + 1), g(eg, this, !0);
                let { cmd: t, post: e } = f(ep, this)[f(em, this)];
                t(), e?.(), g(eg, this, !1);
            }
        }
        hasSomethingToUndo() {
            return -1 !== f(em, this);
        }
        hasSomethingToRedo() {
            return f(em, this) < f(ep, this).length - 1;
        }
        cleanType(t) {
            if (-1 !== f(em, this)) {
                for (let e = f(em, this); e >= 0; e--)
                    if (f(ep, this)[e].type !== t) {
                        f(ep, this).splice(e + 1, f(em, this) - e), g(em, this, e);
                        return;
                    }
                (f(ep, this).length = 0), g(em, this, -1);
            }
        }
        destroy() {
            g(ep, this, null);
        }
    },
    eb = new WeakSet(),
    ev = class {
        constructor(t) {
            u(this, eb), (this.buffer = []), (this.callbacks = new Map()), (this.allKeys = new Set());
            const { isMac: e } = z.platform;
            for (const [i, s, n = {}] of t)
                for (const t of i) {
                    const i = t.startsWith("mac+");
                    e && i
                        ? (this.callbacks.set(t.slice(4), { callback: s, options: n }),
                          this.allKeys.add(t.split("+").at(-1)))
                        : e ||
                          i ||
                          (this.callbacks.set(t, { callback: s, options: n }), this.allKeys.add(t.split("+").at(-1)));
                }
        }
        exec(t, e) {
            if (!this.allKeys.has(e.key)) return;
            let i = this.callbacks.get(d(eb, this, eA).call(this, e));
            if (!i) return;
            let {
                callback: s,
                options: { bubbles: n = !1, args: a = [], checker: r = null },
            } = i;
            (!r || r(t, e)) && (s.bind(t, ...a, e)(), n || tu(e));
        }
    };
function eA(t) {
    t.altKey && this.buffer.push("alt"),
        t.ctrlKey && this.buffer.push("ctrl"),
        t.metaKey && this.buffer.push("meta"),
        t.shiftKey && this.buffer.push("shift"),
        this.buffer.push(t.key);
    let e = this.buffer.join("+");
    return (this.buffer.length = 0), e;
}
var ey = class t {
    get _colors() {
        let t = new Map([
                ["CanvasText", null],
                ["Canvas", null],
            ]),
            e = document.createElement("span");
        for (let i of ((e.style.visibility = "hidden"),
        (e.style.colorScheme = "only light"),
        document.body.append(e),
        t.keys())) {
            e.style.color = i;
            let s = window.getComputedStyle(e).color;
            t.set(i, tf(s));
        }
        return e.remove(), F(this, "_colors", t);
    }
    convert(e) {
        let i = tf(e);
        if (!window.matchMedia("(forced-colors: active)").matches) return i;
        for (let [e, s] of this._colors) if (s.every((t, e) => t === i[e])) return t._colorsMapping.get(e);
        return i;
    }
    getHexCode(t) {
        let e = this._colors.get(t);
        return e ? V.makeHexColor(...e) : t;
    }
};
(0, o.t)(
    ey,
    "_colorsMapping",
    new Map([
        ["CanvasText", [0, 0, 0]],
        ["Canvas", [255, 255, 255]],
    ]),
);
var e_ = new WeakMap(),
    ex = new WeakMap(),
    ek = new WeakMap(),
    eM = new WeakMap(),
    eS = new WeakMap(),
    eE = new WeakMap(),
    eC = new WeakMap(),
    eT = new WeakMap(),
    eP = new WeakMap(),
    eD = new WeakMap(),
    eI = new WeakMap(),
    eL = new WeakMap(),
    eR = new WeakMap(),
    eF = new WeakMap(),
    eN = new WeakMap(),
    eB = new WeakMap(),
    eO = new WeakMap(),
    eW = new WeakMap(),
    eU = new WeakMap(),
    e$ = new WeakMap(),
    eH = new WeakMap(),
    ej = new WeakMap(),
    ez = new WeakMap(),
    eG = new WeakMap(),
    eV = new WeakMap(),
    eq = new WeakMap(),
    eX = new WeakMap(),
    eK = new WeakMap(),
    eY = new WeakMap(),
    eQ = new WeakMap(),
    eJ = new WeakMap(),
    eZ = new WeakMap(),
    e0 = new WeakMap(),
    e1 = new WeakMap(),
    e2 = new WeakMap(),
    e3 = new WeakMap(),
    e5 = new WeakMap(),
    e4 = new WeakMap(),
    e6 = new WeakMap(),
    e8 = new WeakMap(),
    e7 = new WeakMap(),
    e9 = new WeakMap(),
    it = new WeakMap(),
    ie = new WeakMap(),
    ii = new WeakMap(),
    is = new WeakMap(),
    ia = new WeakMap(),
    ir = new WeakMap(),
    io = new WeakMap(),
    il = new WeakSet(),
    ih = class t {
        static get _keyboardManager() {
            let e = t.prototype,
                i = (t) =>
                    f(is, t).contains(document.activeElement) &&
                    "BUTTON" !== document.activeElement.tagName &&
                    t.hasSomethingToControl(),
                s = (t, { target: e }) => {
                    if (e instanceof HTMLInputElement) {
                        let { type: t } = e;
                        return "text" !== t && "number" !== t;
                    }
                    return !0;
                },
                n = this.TRANSLATE_SMALL,
                a = this.TRANSLATE_BIG;
            return F(
                this,
                "_keyboardManager",
                new ev([
                    [["ctrl+a", "mac+meta+a"], e.selectAll, { checker: s }],
                    [["ctrl+z", "mac+meta+z"], e.undo, { checker: s }],
                    [
                        ["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"],
                        e.redo,
                        { checker: s },
                    ],
                    [
                        [
                            "Backspace",
                            "alt+Backspace",
                            "ctrl+Backspace",
                            "shift+Backspace",
                            "mac+Backspace",
                            "mac+alt+Backspace",
                            "mac+ctrl+Backspace",
                            "Delete",
                            "ctrl+Delete",
                            "shift+Delete",
                            "mac+Delete",
                        ],
                        e.delete,
                        { checker: s },
                    ],
                    [
                        ["Enter", "mac+Enter"],
                        e.addNewEditorFromKeyboard,
                        {
                            checker: (t, { target: e }) =>
                                !(e instanceof HTMLButtonElement) && f(is, t).contains(e) && !t.isEnterHandled,
                        },
                    ],
                    [
                        [" ", "mac+ "],
                        e.addNewEditorFromKeyboard,
                        {
                            checker: (t, { target: e }) =>
                                !(e instanceof HTMLButtonElement) && f(is, t).contains(document.activeElement),
                        },
                    ],
                    [["Escape", "mac+Escape"], e.unselectAll],
                    [["ArrowLeft", "mac+ArrowLeft"], e.translateSelectedEditors, { args: [-n, 0], checker: i }],
                    [
                        ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
                        e.translateSelectedEditors,
                        { args: [-a, 0], checker: i },
                    ],
                    [["ArrowRight", "mac+ArrowRight"], e.translateSelectedEditors, { args: [n, 0], checker: i }],
                    [
                        ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
                        e.translateSelectedEditors,
                        { args: [a, 0], checker: i },
                    ],
                    [["ArrowUp", "mac+ArrowUp"], e.translateSelectedEditors, { args: [0, -n], checker: i }],
                    [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e.translateSelectedEditors, { args: [0, -a], checker: i }],
                    [["ArrowDown", "mac+ArrowDown"], e.translateSelectedEditors, { args: [0, n], checker: i }],
                    [
                        ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
                        e.translateSelectedEditors,
                        { args: [0, a], checker: i },
                    ],
                ]),
            );
        }
        constructor(t, e, i, s, n, a, r, l, h, c, m, w, b, v, A, y) {
            u(this, il),
                p(this, e_, new AbortController()),
                p(this, ex, null),
                p(this, ek, null),
                p(this, eM, new Map()),
                p(this, eS, new Map()),
                p(this, eE, null),
                p(this, eC, null),
                p(this, eT, null),
                p(this, eP, new ew()),
                p(this, eD, null),
                p(this, eI, null),
                p(this, eL, null),
                p(this, eR, 0),
                p(this, eF, new Set()),
                p(this, eN, null),
                p(this, eB, null),
                p(this, eO, new Set()),
                (0, o.t)(this, "_editorUndoBar", null),
                p(this, eW, !1),
                p(this, eU, !1),
                p(this, e$, !1),
                p(this, eH, null),
                p(this, ej, null),
                p(this, ez, null),
                p(this, eG, null),
                p(this, eV, !1),
                p(this, eq, null),
                p(this, eX, new er()),
                p(this, eK, !1),
                p(this, eY, !1),
                p(this, eQ, !1),
                p(this, eJ, null),
                p(this, eZ, null),
                p(this, e0, null),
                p(this, e1, null),
                p(this, e2, null),
                p(this, e3, _.NONE),
                p(this, e5, new Set()),
                p(this, e4, null),
                p(this, e6, null),
                p(this, e8, null),
                p(this, e7, null),
                p(this, e9, null),
                p(this, it, {
                    isEditing: !1,
                    isEmpty: !0,
                    hasSomethingToUndo: !1,
                    hasSomethingToRedo: !1,
                    hasSelectedEditor: !1,
                    hasSelectedText: !1,
                }),
                p(this, ie, [0, 0]),
                p(this, ii, null),
                p(this, is, null),
                p(this, ia, null),
                p(this, ir, null),
                p(this, io, null);
            const x = (this._signal = f(e_, this).signal);
            g(is, this, t),
                g(ia, this, e),
                g(ir, this, i),
                g(eE, this, s),
                g(eD, this, n),
                g(e6, this, a),
                g(e9, this, l),
                (this._eventBus = r),
                r._on("editingaction", this.onEditingAction.bind(this), { signal: x }),
                r._on("pagechanging", this.onPageChanging.bind(this), { signal: x }),
                r._on("scalechanging", this.onScaleChanging.bind(this), { signal: x }),
                r._on("rotationchanging", this.onRotationChanging.bind(this), { signal: x }),
                r._on("setpreference", this.onSetPreference.bind(this), { signal: x }),
                r._on("switchannotationeditorparams", (t) => this.updateParams(t.type, t.value), { signal: x }),
                r._on("pagesedited", this.onPagesEdited.bind(this), { signal: x }),
                window.addEventListener(
                    "pointerdown",
                    () => {
                        g(eY, this, !0);
                    },
                    { capture: !0, signal: x },
                ),
                window.addEventListener(
                    "pointerup",
                    () => {
                        g(eY, this, !1);
                    },
                    { capture: !0, signal: x },
                ),
                d(il, this, im).call(this),
                d(il, this, ix).call(this),
                d(il, this, iv).call(this),
                g(eC, this, l.annotationStorage),
                g(eH, this, l.filterFactory),
                g(e8, this, h),
                g(eG, this, c || null),
                g(eW, this, m),
                g(eU, this, w),
                g(e$, this, b),
                g(e2, this, v || null),
                (this.viewParameters = { realScale: ts.PDF_TO_CSS_UNITS, rotation: 0 }),
                (this.isShiftKeyDown = !1),
                (this._editorUndoBar = A || null),
                (this._supportsPinchToZoom = !1 !== y),
                n?.setSidebarUiManager(this);
        }
        destroy() {
            for (let t of (f(io, this)?.resolve(),
            g(io, this, null),
            f(e_, this)?.abort(),
            g(e_, this, null),
            (this._signal = null),
            f(eS, this).values()))
                t.destroy();
            f(eS, this).clear(),
                f(eM, this).clear(),
                f(eO, this).clear(),
                f(e1, this)?.clear(),
                g(ex, this, null),
                f(e5, this).clear(),
                f(eP, this).destroy(),
                f(eE, this)?.destroy(),
                f(eD, this)?.destroy(),
                f(e6, this)?.destroy(),
                f(eq, this)?.hide(),
                g(eq, this, null),
                f(e0, this)?.destroy(),
                g(e0, this, null),
                g(ek, this, null),
                f(ej, this) && (clearTimeout(f(ej, this)), g(ej, this, null)),
                f(ii, this) && (clearTimeout(f(ii, this)), g(ii, this, null)),
                this._editorUndoBar?.destroy(),
                g(e9, this, null);
        }
        combinedSignal(t) {
            return AbortSignal.any([this._signal, t.signal]);
        }
        get mlManager() {
            return f(e2, this);
        }
        get useNewAltTextFlow() {
            return f(eU, this);
        }
        get useNewAltTextWhenAddingImage() {
            return f(e$, this);
        }
        get hcmFilter() {
            return F(
                this,
                "hcmFilter",
                f(e8, this) ? f(eH, this).addHCMFilter(f(e8, this).foreground, f(e8, this).background) : "none",
            );
        }
        get direction() {
            return F(this, "direction", getComputedStyle(f(is, this)).direction);
        }
        get _highlightColors() {
            return F(
                this,
                "_highlightColors",
                f(eG, this)
                    ? new Map(
                          f(eG, this)
                              .split(",")
                              .map((t) => (((t = t.split("=").map((t) => t.trim()))[1] = t[1].toUpperCase()), t)),
                      )
                    : null,
            );
        }
        get highlightColors() {
            let { _highlightColors: t } = this;
            if (!t) return F(this, "highlightColors", null);
            let e = new Map(),
                i = !!f(e8, this);
            for (let [s, n] of t) {
                let t = s.endsWith("_HCM");
                if (i && t) {
                    e.set(s.replace("_HCM", ""), n);
                    continue;
                }
                i || t || e.set(s, n);
            }
            return F(this, "highlightColors", e);
        }
        get highlightColorNames() {
            return F(
                this,
                "highlightColorNames",
                this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null,
            );
        }
        getNonHCMColor(t) {
            if (!this._highlightColors) return t;
            let e = this.highlightColorNames.get(t);
            return this._highlightColors.get(e) || t;
        }
        getNonHCMColorName(t) {
            return this.highlightColorNames.get(t) || t;
        }
        setCurrentDrawingSession(t) {
            t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), g(eL, this, t);
        }
        setMainHighlightColorPicker(t) {
            g(e0, this, t);
        }
        editAltText(t, e = !1) {
            f(eE, this)?.editAltText(this, t, e);
        }
        hasCommentManager() {
            return !!f(eD, this);
        }
        editComment(t, e, i, s) {
            f(eD, this)?.showDialog(this, t, e, i, s);
        }
        selectComment(t, e) {
            f(eS, this).get(t)?.getEditorByUID(e)?.toggleComment(!0, !0);
        }
        updateComment(t) {
            f(eD, this)?.updateComment(t.getData());
        }
        updatePopupColor(t) {
            f(eD, this)?.updatePopupColor(t);
        }
        removeComment(t) {
            f(eD, this)?.removeComments([t.uid]);
        }
        deleteComment(t, e) {
            let i = () => {
                    t.comment = e;
                },
                s = () => {
                    this._editorUndoBar?.show(i, "comment"), this.toggleComment(null), (t.comment = null);
                };
            this.addCommands({ cmd: s, undo: i, mustExec: !0 });
        }
        toggleComment(t, e, i) {
            f(eD, this)?.toggleCommentPopup(t, e, i);
        }
        makeCommentColor(t, e) {
            return (t && f(eD, this)?.makeCommentColor(t, e)) || null;
        }
        getCommentDialogElement() {
            return f(eD, this)?.dialogElement || null;
        }
        async waitForEditorsRendered(t) {
            if (f(eS, this).has(t - 1)) return;
            let { resolve: e, promise: i } = Promise.withResolvers(),
                s = (i) => {
                    i.pageNumber === t && (this._eventBus._off("editorsrendered", s), e());
                };
            this._eventBus.on("editorsrendered", s), await i;
        }
        getSignature(t) {
            f(e6, this)?.getSignature({ uiManager: this, editor: t });
        }
        get signatureManager() {
            return f(e6, this);
        }
        switchToMode(t, e) {
            this._eventBus.on("annotationeditormodechanged", e, { once: !0, signal: this._signal }),
                this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t });
        }
        setPreference(t, e) {
            this._eventBus.dispatch("setpreference", { source: this, name: t, value: e });
        }
        onSetPreference({ name: t, value: e }) {
            "enableNewAltTextWhenAddingImage" === t && g(e$, this, e);
        }
        onPagesEdited({ pagesMapper: t }) {
            for (let e of f(eM, this).values()) e.updatePageIndex(t.getPrevPageNumber(e.pageIndex + 1) - 1);
            let e = f(eS, this),
                i = g(eS, this, new Map());
            for (let [s, n] of e) {
                let e = t.getPrevPageNumber(s + 1) - 1;
                if (-1 === e) {
                    n.destroy();
                    continue;
                }
                i.set(e, n), n.updatePageIndex(e);
            }
        }
        onPageChanging({ pageNumber: t }) {
            g(eR, this, t - 1);
        }
        focusMainContainer() {
            f(is, this).focus();
        }
        findParent(t, e) {
            for (let i of f(eS, this).values()) {
                let { x: s, y: n, width: a, height: r } = i.div.getBoundingClientRect();
                if (t >= s && t <= s + a && e >= n && e <= n + r) return i;
            }
            return null;
        }
        disableUserSelect(t = !1) {
            f(ia, this).classList.toggle("noUserSelect", t);
        }
        addShouldRescale(t) {
            f(eO, this).add(t);
        }
        removeShouldRescale(t) {
            f(eO, this).delete(t);
        }
        onScaleChanging({ scale: t }) {
            for (let e of (this.commitOrRemove(),
            (this.viewParameters.realScale = t * ts.PDF_TO_CSS_UNITS),
            f(eO, this)))
                e.onScaleChanging();
            f(eL, this)?.onScaleChanging();
        }
        onRotationChanging({ pagesRotation: t }) {
            this.commitOrRemove(), (this.viewParameters.rotation = t);
        }
        highlightSelection(t = "", e = !1) {
            let i = document.getSelection();
            if (!i || i.isCollapsed) return;
            let { anchorNode: s, anchorOffset: n, focusNode: a, focusOffset: r } = i,
                o = i.toString(),
                l = d(il, this, id).call(this, i).closest(".textLayer"),
                h = this.getSelectionBoxes(l);
            if (!h) return;
            i.empty();
            let c = d(il, this, ic).call(this, l),
                u = f(e3, this) === _.NONE,
                p = () => {
                    let i = c?.createAndAddNewEditor({ x: 0, y: 0 }, !1, {
                        methodOfCreation: t,
                        boxes: h,
                        anchorNode: s,
                        anchorOffset: n,
                        focusNode: a,
                        focusOffset: r,
                        text: o,
                    });
                    u && this.showAllEditors("highlight", !0, !0), e && i?.editComment();
                };
            u ? this.switchToMode(_.HIGHLIGHT, p) : p();
        }
        commentSelection(t = "") {
            this.highlightSelection(t, !0);
        }
        getAndRemoveDataFromAnnotationStorage(t) {
            if (!f(eC, this)) return null;
            let e = `${y}${t}`,
                i = f(eC, this).getRawValue(e);
            return i && f(eC, this).remove(e), i;
        }
        addToAnnotationStorage(t) {
            !t.isEmpty() && f(eC, this) && !f(eC, this).has(t.id) && f(eC, this).setValue(t.id, t);
        }
        a11yAlert(t, e = null) {
            let i = f(ir, this);
            i &&
                (i.setAttribute("data-l10n-id", t),
                e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
        }
        blur() {
            if (
                ((this.isShiftKeyDown = !1),
                f(eV, this) && (g(eV, this, !1), d(il, this, ig).call(this, "main_toolbar")),
                !this.hasSelection)
            )
                return;
            let { activeElement: t } = document;
            for (let e of f(e5, this))
                if (e.div.contains(t)) {
                    g(eZ, this, [e, t]), (e._focusEventsAllowed = !1);
                    break;
                }
        }
        focus() {
            if (!f(eZ, this)) return;
            let [t, e] = f(eZ, this);
            g(eZ, this, null),
                e.addEventListener(
                    "focusin",
                    () => {
                        t._focusEventsAllowed = !0;
                    },
                    { once: !0, signal: this._signal },
                ),
                e.focus();
        }
        addEditListeners() {
            d(il, this, iv).call(this), this.setEditingState(!0);
        }
        removeEditListeners() {
            d(il, this, iA).call(this), this.setEditingState(!1);
        }
        dragOver(t) {
            for (let { type: e } of t.dataTransfer.items)
                for (let i of f(eB, this))
                    if (i.isHandlingMimeForPasting(e)) {
                        (t.dataTransfer.dropEffect = "copy"), t.preventDefault();
                        return;
                    }
        }
        drop(t) {
            for (let e of t.dataTransfer.items)
                for (let i of f(eB, this))
                    if (i.isHandlingMimeForPasting(e.type)) {
                        i.paste(e, this.currentLayer), t.preventDefault();
                        return;
                    }
        }
        copy(t) {
            if ((t.preventDefault(), f(ex, this)?.commitOrRemove(), !this.hasSelection)) return;
            let e = [];
            for (let t of f(e5, this)) {
                let i = t.serialize(!0);
                i && e.push(i);
            }
            0 !== e.length && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
        }
        cut(t) {
            this.copy(t), this.delete();
        }
        async paste(t) {
            t.preventDefault();
            let { clipboardData: e } = t;
            for (let t of e.items)
                for (let e of f(eB, this))
                    if (e.isHandlingMimeForPasting(t.type)) return void e.paste(t, this.currentLayer);
            let i = e.getData("application/pdfjs");
            if (!i) return;
            try {
                i = JSON.parse(i);
            } catch (t) {
                P(`paste: "${t.message}".`);
                return;
            }
            if (!Array.isArray(i)) return;
            this.unselectAll();
            let s = this.currentLayer;
            try {
                let t = [];
                for (let e of i) {
                    let i = await s.deserialize(e);
                    if (!i) return;
                    t.push(i);
                }
                let e = () => {
                    for (let e of t) d(il, this, iC).call(this, e);
                    d(il, this, iD).call(this, t);
                };
                this.addCommands({
                    cmd: e,
                    undo: () => {
                        for (let e of t) e.remove();
                    },
                    mustExec: !0,
                });
            } catch (t) {
                P(`paste: "${t.message}".`);
            }
        }
        keydown(e) {
            this.isShiftKeyDown || "Shift" !== e.key || (this.isShiftKeyDown = !0),
                f(e3, this) === _.NONE || this.isEditorHandlingKeyboard || t._keyboardManager.exec(this, e);
        }
        keyup(t) {
            this.isShiftKeyDown &&
                "Shift" === t.key &&
                ((this.isShiftKeyDown = !1),
                f(eV, this) && (g(eV, this, !1), d(il, this, ig).call(this, "main_toolbar")));
        }
        onEditingAction({ name: t }) {
            switch (t) {
                case "undo":
                case "redo":
                case "delete":
                case "selectAll":
                    this[t]();
                    break;
                case "highlightSelection":
                    this.highlightSelection("context_menu");
                    break;
                case "commentSelection":
                    this.commentSelection("context_menu");
            }
        }
        setEditingState(t) {
            t
                ? (d(il, this, iw).call(this),
                  d(il, this, iy).call(this),
                  d(il, this, ik).call(this, {
                      isEditing: f(e3, this) !== _.NONE,
                      isEmpty: d(il, this, iP).call(this),
                      hasSomethingToUndo: f(eP, this).hasSomethingToUndo(),
                      hasSomethingToRedo: f(eP, this).hasSomethingToRedo(),
                      hasSelectedEditor: !1,
                  }))
                : (d(il, this, ib).call(this),
                  d(il, this, i_).call(this),
                  d(il, this, ik).call(this, { isEditing: !1 }),
                  this.disableUserSelect(!1));
        }
        registerEditorTypes(t) {
            if (!f(eB, this))
                for (let e of (g(eB, this, t), f(eB, this))) d(il, this, iM).call(this, e.defaultPropertiesToUpdate);
        }
        getId() {
            return f(eX, this).id;
        }
        get currentLayer() {
            return f(eS, this).get(f(eR, this));
        }
        getLayer(t) {
            return f(eS, this).get(t);
        }
        get currentPageIndex() {
            return f(eR, this);
        }
        addLayer(t) {
            f(eS, this).set(t.pageIndex, t), f(eK, this) ? t.enable() : t.disable();
        }
        removeLayer(t) {
            f(eS, this).delete(t.pageIndex);
        }
        async updateMode(t, e = null, i = !1, s = !1, n = !1, a = !1) {
            if (f(e3, this) !== t && (!f(io, this) || (await f(io, this).promise, f(io, this)))) {
                if (
                    (g(io, this, Promise.withResolvers()),
                    f(eL, this)?.commitOrRemove(),
                    f(e3, this) === _.POPUP && f(eD, this)?.hideSidebar(),
                    f(eD, this)?.destroyPopup(),
                    g(e3, this, t),
                    t === _.NONE)
                ) {
                    for (let t of (this.setEditingState(!1), d(il, this, iE).call(this), f(eM, this).values()))
                        t.hideStandaloneCommentButton();
                    this._editorUndoBar?.hide(), this.toggleComment(null), f(io, this).resolve();
                    return;
                }
                for (let t of f(eM, this).values()) t.addStandaloneCommentButton();
                for (let e of (t === _.SIGNATURE && (await f(e6, this)?.loadSignatures()),
                i && et.clearPointerType(),
                this.setEditingState(!0),
                await d(il, this, iS).call(this),
                this.unselectAll(),
                f(eS, this).values()))
                    e.updateMode(t);
                if (t === _.POPUP) {
                    f(ek, this) ||
                        g(
                            ek,
                            this,
                            await f(e9, this).getAnnotationsByType(new Set(f(eB, this).map((t) => t._editorType))),
                        );
                    let t = new Set(),
                        e = [];
                    for (let i of f(eM, this).values()) {
                        let { annotationElementId: s, hasComment: n, deleted: a } = i;
                        s && t.add(s), n && !a && e.push(i.getData());
                    }
                    for (let i of f(ek, this)) {
                        let { id: s, popupRef: n, contentsObj: a } = i;
                        n && a?.str && !t.has(s) && !f(eF, this).has(s) && e.push(i);
                    }
                    f(eD, this)?.showSidebar(e);
                }
                if (!e) {
                    s && this.addNewEditorFromKeyboard(), f(io, this).resolve();
                    return;
                }
                for (let t of f(eM, this).values())
                    t.uid === e
                        ? (this.setSelected(t), a ? t.editComment() : n ? t.enterInEditMode() : t.focus())
                        : t.unselect();
                f(io, this).resolve();
            }
        }
        addNewEditorFromKeyboard() {
            this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
        }
        updateToolbar(t) {
            t.mode !== f(e3, this) && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t });
        }
        updateParams(t, e) {
            if (f(eB, this)) {
                switch (t) {
                    case x.CREATE:
                        this.currentLayer.addNewEditor(e);
                        return;
                    case x.HIGHLIGHT_SHOW_ALL:
                        this._eventBus.dispatch("reporttelemetry", {
                            source: this,
                            details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } },
                        }),
                            (f(e7, this) || g(e7, this, new Map())).set(t, e),
                            this.showAllEditors("highlight", e);
                }
                if (this.hasSelection) for (let i of f(e5, this)) i.updateParams(t, e);
                else for (let i of f(eB, this)) i.updateDefaultParams(t, e);
            }
        }
        showAllEditors(t, e, i = !1) {
            for (let i of f(eM, this).values()) i.editorType === t && i.show(e);
            (f(e7, this)?.get(x.HIGHLIGHT_SHOW_ALL) ?? !0) !== e &&
                d(il, this, iM).call(this, [[x.HIGHLIGHT_SHOW_ALL, e]]);
        }
        enableWaiting(t = !1) {
            if (f(eQ, this) !== t)
                for (let e of (g(eQ, this, t), f(eS, this).values()))
                    t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
        }
        *getEditors(t) {
            for (let e of f(eM, this).values()) e.pageIndex === t && (yield e);
        }
        getEditor(t) {
            return f(eM, this).get(t);
        }
        addEditor(t) {
            f(eM, this).set(t.id, t);
        }
        removeEditor(t) {
            t.div.contains(document.activeElement) &&
                (f(ej, this) && clearTimeout(f(ej, this)),
                g(
                    ej,
                    this,
                    setTimeout(() => {
                        this.focusMainContainer(), g(ej, this, null);
                    }, 0),
                )),
                f(eM, this).delete(t.id),
                t.annotationElementId && f(e1, this)?.delete(t.annotationElementId),
                this.unselect(t),
                (t.annotationElementId && f(eF, this).has(t.annotationElementId)) || f(eC, this)?.remove(t.id);
        }
        addDeletedAnnotationElement(t) {
            f(eF, this).add(t.annotationElementId), this.addChangedExistingAnnotation(t), (t.deleted = !0);
        }
        isDeletedAnnotationElement(t) {
            return f(eF, this).has(t);
        }
        removeDeletedAnnotationElement(t) {
            f(eF, this).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), (t.deleted = !1);
        }
        setActiveEditor(t) {
            f(ex, this) !== t && (g(ex, this, t), t && d(il, this, iM).call(this, t.propertiesToUpdate));
        }
        updateUI(t) {
            iT.call(d(il, this)) === t && d(il, this, iM).call(this, t.propertiesToUpdate);
        }
        updateUIForDefaultProperties(t) {
            d(il, this, iM).call(this, t.defaultPropertiesToUpdate);
        }
        toggleSelected(t) {
            if (f(e5, this).has(t)) {
                f(e5, this).delete(t),
                    t.unselect(),
                    d(il, this, ik).call(this, { hasSelectedEditor: this.hasSelection });
                return;
            }
            f(e5, this).add(t),
                t.select(),
                d(il, this, iM).call(this, t.propertiesToUpdate),
                d(il, this, ik).call(this, { hasSelectedEditor: !0 });
        }
        setSelected(t) {
            for (let e of (this.updateToolbar({ mode: t.mode, editId: t.uid }),
            f(eL, this)?.commitOrRemove(),
            f(e5, this)))
                e !== t && e.unselect();
            f(e5, this).clear(),
                f(e5, this).add(t),
                t.select(),
                d(il, this, iM).call(this, t.propertiesToUpdate),
                d(il, this, ik).call(this, { hasSelectedEditor: !0 });
        }
        isSelected(t) {
            return f(e5, this).has(t);
        }
        get firstSelectedEditor() {
            return f(e5, this).values().next().value;
        }
        unselect(t) {
            t.unselect(), f(e5, this).delete(t), d(il, this, ik).call(this, { hasSelectedEditor: this.hasSelection });
        }
        get hasSelection() {
            return 0 !== f(e5, this).size;
        }
        get isEnterHandled() {
            return 1 === f(e5, this).size && this.firstSelectedEditor.isEnterHandled;
        }
        undo() {
            f(eP, this).undo(),
                d(il, this, ik).call(this, {
                    hasSomethingToUndo: f(eP, this).hasSomethingToUndo(),
                    hasSomethingToRedo: !0,
                    isEmpty: d(il, this, iP).call(this),
                }),
                this._editorUndoBar?.hide();
        }
        redo() {
            f(eP, this).redo(),
                d(il, this, ik).call(this, {
                    hasSomethingToUndo: !0,
                    hasSomethingToRedo: f(eP, this).hasSomethingToRedo(),
                    isEmpty: d(il, this, iP).call(this),
                });
        }
        addCommands(t) {
            f(eP, this).add(t),
                d(il, this, ik).call(this, {
                    hasSomethingToUndo: !0,
                    hasSomethingToRedo: !1,
                    isEmpty: d(il, this, iP).call(this),
                });
        }
        cleanUndoStack(t) {
            f(eP, this).cleanType(t);
        }
        delete() {
            this.commitOrRemove();
            let t = this.currentLayer?.endDrawingSession(!0);
            if (!this.hasSelection && !t) return;
            let e = t ? [t] : [...f(e5, this)],
                i = () => {
                    for (let t of (this._editorUndoBar?.show(s, 1 === e.length ? e[0].editorType : e.length), e))
                        t.remove();
                },
                s = () => {
                    for (let t of e) d(il, this, iC).call(this, t);
                };
            this.addCommands({ cmd: i, undo: s, mustExec: !0 });
        }
        commitOrRemove() {
            f(ex, this)?.commitOrRemove();
        }
        hasSomethingToControl() {
            return f(ex, this) || this.hasSelection;
        }
        selectAll() {
            for (let t of f(e5, this)) t.commit();
            d(il, this, iD).call(this, f(eM, this).values());
        }
        unselectAll() {
            if (!f(ex, this) || (f(ex, this).commitOrRemove(), f(e3, this) === _.NONE)) {
                if (!f(eL, this)?.commitOrRemove() && this.hasSelection) {
                    for (let t of f(e5, this)) t.unselect();
                    f(e5, this).clear(), d(il, this, ik).call(this, { hasSelectedEditor: !1 });
                }
            }
        }
        translateSelectedEditors(t, e, i = !1) {
            if ((i || this.commitOrRemove(), !this.hasSelection)) return;
            (f(ie, this)[0] += t), (f(ie, this)[1] += e);
            let [s, n] = f(ie, this),
                a = [...f(e5, this)];
            for (let i of (f(ii, this) && clearTimeout(f(ii, this)),
            g(
                ii,
                this,
                setTimeout(() => {
                    g(ii, this, null),
                        (f(ie, this)[0] = f(ie, this)[1] = 0),
                        this.addCommands({
                            cmd: () => {
                                for (let t of a)
                                    f(eM, this).has(t.id) && (t.translateInPage(s, n), t.translationDone());
                            },
                            undo: () => {
                                for (let t of a)
                                    f(eM, this).has(t.id) && (t.translateInPage(-s, -n), t.translationDone());
                            },
                            mustExec: !1,
                        });
                }, 1e3),
            ),
            a))
                i.translateInPage(t, e), i.translationDone();
        }
        setUpDragSession() {
            if (this.hasSelection)
                for (let t of (this.disableUserSelect(!0), g(eN, this, new Map()), f(e5, this)))
                    f(eN, this).set(t, {
                        savedX: t.x,
                        savedY: t.y,
                        savedPageIndex: t.pageIndex,
                        newX: 0,
                        newY: 0,
                        newPageIndex: -1,
                    });
        }
        endDragSession() {
            if (!f(eN, this)) return !1;
            this.disableUserSelect(!1);
            let t = f(eN, this);
            g(eN, this, null);
            let e = !1;
            for (let [{ x: i, y: s, pageIndex: n }, a] of t)
                (a.newX = i),
                    (a.newY = s),
                    (a.newPageIndex = n),
                    (e ||= i !== a.savedX || s !== a.savedY || n !== a.savedPageIndex);
            if (!e) return !1;
            let i = (t, e, i, s) => {
                if (f(eM, this).has(t.id)) {
                    let n = f(eS, this).get(s);
                    n ? t._setParentAndPosition(n, e, i) : ((t.pageIndex = s), (t.x = e), (t.y = i));
                }
            };
            return (
                this.addCommands({
                    cmd: () => {
                        for (let [e, { newX: s, newY: n, newPageIndex: a }] of t) i(e, s, n, a);
                    },
                    undo: () => {
                        for (let [e, { savedX: s, savedY: n, savedPageIndex: a }] of t) i(e, s, n, a);
                    },
                    mustExec: !0,
                }),
                !0
            );
        }
        dragSelectedEditors(t, e) {
            if (f(eN, this)) for (let i of f(eN, this).keys()) i.drag(t, e);
        }
        rebuild(t) {
            if (null === t.parent) {
                let e = this.getLayer(t.pageIndex);
                e
                    ? (e.changeParent(t), e.addOrRebuild(t))
                    : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
            } else t.parent.addOrRebuild(t);
        }
        get isEditorHandlingKeyboard() {
            return (
                this.getActive()?.shouldGetKeyboardEvents() ||
                (1 === f(e5, this).size && this.firstSelectedEditor.shouldGetKeyboardEvents())
            );
        }
        isActive(t) {
            return f(ex, this) === t;
        }
        getActive() {
            return f(ex, this);
        }
        getMode() {
            return f(e3, this);
        }
        isEditingMode() {
            return f(e3, this) !== _.NONE;
        }
        get imageManager() {
            return F(this, "imageManager", new ec());
        }
        getSelectionBoxes(t) {
            let e;
            if (!t) return null;
            let i = document.getSelection();
            for (let e = 0, s = i.rangeCount; e < s; e++)
                if (!t.contains(i.getRangeAt(e).commonAncestorContainer)) return null;
            let { x: s, y: n, width: a, height: r } = t.getBoundingClientRect();
            switch (t.getAttribute("data-main-rotation")) {
                case "90":
                    e = (t, e, i, o) => ({ x: (e - n) / r, y: 1 - (t + i - s) / a, width: o / r, height: i / a });
                    break;
                case "180":
                    e = (t, e, i, o) => ({
                        x: 1 - (t + i - s) / a,
                        y: 1 - (e + o - n) / r,
                        width: i / a,
                        height: o / r,
                    });
                    break;
                case "270":
                    e = (t, e, i, o) => ({ x: 1 - (e + o - n) / r, y: (t - s) / a, width: o / r, height: i / a });
                    break;
                default:
                    e = (t, e, i, o) => ({ x: (t - s) / a, y: (e - n) / r, width: i / a, height: o / r });
            }
            let o = [];
            for (let t = 0, s = i.rangeCount; t < s; t++) {
                let s = i.getRangeAt(t);
                if (!s.collapsed)
                    for (let { x: t, y: i, width: n, height: a } of s.getClientRects())
                        0 !== n && 0 !== a && o.push(e(t, i, n, a));
            }
            return 0 === o.length ? null : o;
        }
        addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
            (f(eT, this) || g(eT, this, new Map())).set(t, e);
        }
        removeChangedExistingAnnotation({ annotationElementId: t }) {
            f(eT, this)?.delete(t);
        }
        renderAnnotationElement(t) {
            let e = f(eT, this)?.get(t.data.id);
            if (!e) return;
            let i = f(eC, this).getRawValue(e);
            !i || ((f(e3, this) !== _.NONE || i.hasBeenModified) && i.renderAnnotationElement(t));
        }
        setMissingCanvas(t, e, i) {
            let s = f(e1, this)?.get(t);
            s && (s.setCanvas(e, i), f(e1, this).delete(t));
        }
        addMissingCanvas(t, e) {
            (f(e1, this) || g(e1, this, new Map())).set(t, e);
        }
    };
function id({ anchorNode: t }) {
    return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}
function ic(t) {
    let { currentLayer: e } = this;
    if (e.hasTextLayer(t)) return e;
    for (let e of f(eS, this).values()) if (e.hasTextLayer(t)) return e;
    return null;
}
function iu() {
    let t = document.getSelection();
    if (!t || t.isCollapsed) return;
    let e = d(il, this, id).call(this, t).closest(".textLayer"),
        i = this.getSelectionBoxes(e);
    i && (f(eq, this) || g(eq, this, new t4(this)), f(eq, this).show(e, i, "ltr" === this.direction));
}
function ip() {
    let t = document.getSelection();
    if (!t || t.isCollapsed) {
        f(e4, this) && (f(eq, this)?.hide(), g(e4, this, null), d(il, this, ik).call(this, { hasSelectedText: !1 }));
        return;
    }
    let { anchorNode: e } = t;
    if (e === f(e4, this)) return;
    let i = d(il, this, id).call(this, t).closest(".textLayer");
    if (!i) {
        f(e4, this) && (f(eq, this)?.hide(), g(e4, this, null), d(il, this, ik).call(this, { hasSelectedText: !1 }));
        return;
    }
    if (
        (f(eq, this)?.hide(),
        g(e4, this, e),
        d(il, this, ik).call(this, { hasSelectedText: !0 }),
        (f(e3, this) === _.HIGHLIGHT || f(e3, this) === _.NONE) &&
            (f(e3, this) === _.HIGHLIGHT && this.showAllEditors("highlight", !0, !0),
            g(eV, this, this.isShiftKeyDown),
            !this.isShiftKeyDown))
    ) {
        let t = f(e3, this) === _.HIGHLIGHT ? d(il, this, ic).call(this, i) : null;
        if ((t?.toggleDrawing(), f(eY, this))) {
            let e = new AbortController(),
                i = this.combinedSignal(e),
                s = (i) => {
                    ("pointerup" !== i.type || 0 === i.button) &&
                        (e.abort(),
                        t?.toggleDrawing(!0),
                        "pointerup" === i.type && d(il, this, ig).call(this, "main_toolbar"));
                };
            window.addEventListener("pointerup", s, { signal: i }), window.addEventListener("blur", s, { signal: i });
        } else t?.toggleDrawing(!0), d(il, this, ig).call(this, "main_toolbar");
    }
}
function ig(t = "") {
    f(e3, this) === _.HIGHLIGHT ? this.highlightSelection(t) : f(eW, this) && d(il, this, iu).call(this);
}
function im() {
    document.addEventListener("selectionchange", d(il, this, ip).bind(this), { signal: this._signal });
}
function iw() {
    if (f(ez, this)) return;
    g(ez, this, new AbortController());
    let t = this.combinedSignal(f(ez, this));
    window.addEventListener("focus", this.focus.bind(this), { signal: t }),
        window.addEventListener("blur", this.blur.bind(this), { signal: t });
}
function ib() {
    f(ez, this)?.abort(), g(ez, this, null);
}
function iv() {
    if (f(eJ, this)) return;
    g(eJ, this, new AbortController());
    let t = this.combinedSignal(f(eJ, this));
    window.addEventListener("keydown", this.keydown.bind(this), { signal: t }),
        window.addEventListener("keyup", this.keyup.bind(this), { signal: t });
}
function iA() {
    f(eJ, this)?.abort(), g(eJ, this, null);
}
function iy() {
    if (f(eI, this)) return;
    g(eI, this, new AbortController());
    let t = this.combinedSignal(f(eI, this));
    document.addEventListener("copy", this.copy.bind(this), { signal: t }),
        document.addEventListener("cut", this.cut.bind(this), { signal: t }),
        document.addEventListener("paste", this.paste.bind(this), { signal: t });
}
function i_() {
    f(eI, this)?.abort(), g(eI, this, null);
}
function ix() {
    let t = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), { signal: t }),
        document.addEventListener("drop", this.drop.bind(this), { signal: t });
}
function ik(t) {
    Object.entries(t).some(([t, e]) => f(it, this)[t] !== e) &&
        (this._eventBus.dispatch("annotationeditorstateschanged", {
            source: this,
            details: Object.assign(f(it, this), t),
        }),
        f(e3, this) === _.HIGHLIGHT &&
            !1 === t.hasSelectedEditor &&
            d(il, this, iM).call(this, [[x.HIGHLIGHT_FREE, !0]]));
}
function iM(t) {
    this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t });
}
async function iS() {
    if (!f(eK, this)) {
        g(eK, this, !0);
        let t = [];
        for (let e of f(eS, this).values()) t.push(e.enable());
        for (let e of (await Promise.all(t), f(eM, this).values())) e.enable();
    }
}
function iE() {
    if ((this.unselectAll(), f(eK, this))) {
        for (let t of (g(eK, this, !1), f(eS, this).values())) t.disable();
        for (let t of f(eM, this).values()) t.disable();
    }
}
function iC(t) {
    let e = f(eS, this).get(t.pageIndex);
    e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}
function iT() {
    let t = null;
    for (t of f(e5, this));
    return t;
}
function iP() {
    if (0 === f(eM, this).size) return !0;
    if (1 === f(eM, this).size) for (let t of f(eM, this).values()) return t.isEmpty();
    return !1;
}
function iD(t) {
    for (let t of f(e5, this)) t.unselect();
    for (let e of (f(e5, this).clear(), t)) e.isEmpty() || (f(e5, this).add(e), e.select());
    d(il, this, ik).call(this, { hasSelectedEditor: this.hasSelection });
}
(0, o.t)(ih, "TRANSLATE_SMALL", 1), (0, o.t)(ih, "TRANSLATE_BIG", 10);
var iI = new WeakMap(),
    iL = new WeakMap(),
    iR = new WeakMap(),
    iF = new WeakMap(),
    iN = new WeakMap(),
    iB = new WeakMap(),
    iO = new WeakMap(),
    iW = new WeakMap(),
    iU = new WeakMap(),
    i$ = new WeakMap(),
    iH = new WeakMap(),
    ij = new WeakMap(),
    iz = new WeakSet(),
    iG = class t {
        constructor(t) {
            u(this, iz),
                p(this, iI, null),
                p(this, iL, !1),
                p(this, iR, null),
                p(this, iF, null),
                p(this, iN, null),
                p(this, iB, null),
                p(this, iO, !1),
                p(this, iW, null),
                p(this, iU, null),
                p(this, i$, null),
                p(this, iH, null),
                p(this, ij, !1),
                g(iU, this, t),
                g(ij, this, t._uiManager.useNewAltTextFlow),
                iX._ ||
                    (iX._ = Object.freeze({
                        added: "pdfjs-editor-new-alt-text-added-button",
                        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
                        missing: "pdfjs-editor-new-alt-text-missing-button",
                        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
                        review: "pdfjs-editor-new-alt-text-to-review-button",
                        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label",
                    }));
        }
        static initialize(e) {
            t._l10n ??= e;
        }
        async render() {
            let t = g(iR, this, document.createElement("button"));
            (t.className = "altText"), (t.tabIndex = "0");
            let e = g(iF, this, document.createElement("span"));
            t.append(e),
                f(ij, this)
                    ? (t.classList.add("new"),
                      t.setAttribute("data-l10n-id", iX._.missing),
                      e.setAttribute("data-l10n-id", iX._["missing-label"]))
                    : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"),
                      e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
            let i = f(iU, this)._uiManager._signal;
            t.addEventListener("contextmenu", tc, { signal: i }),
                t.addEventListener("pointerdown", (t) => t.stopPropagation(), { signal: i });
            let s = (t) => {
                t.preventDefault(),
                    f(iU, this)._uiManager.editAltText(f(iU, this)),
                    f(ij, this) &&
                        f(iU, this)._reportTelemetry({
                            action: "pdfjs.image.alt_text.image_status_label_clicked",
                            data: { label: iV.call(d(iz, this)) },
                        });
            };
            return (
                t.addEventListener("click", s, { capture: !0, signal: i }),
                t.addEventListener(
                    "keydown",
                    (e) => {
                        e.target === t && "Enter" === e.key && (g(iO, this, !0), s(e));
                    },
                    { signal: i },
                ),
                await d(iz, this, iq).call(this),
                t
            );
        }
        finish() {
            f(iR, this) && (f(iR, this).focus({ focusVisible: f(iO, this) }), g(iO, this, !1));
        }
        isEmpty() {
            return f(ij, this) ? null === f(iI, this) : !f(iI, this) && !f(iL, this);
        }
        hasData() {
            return f(ij, this) ? null !== f(iI, this) || !!f(i$, this) : this.isEmpty();
        }
        get guessedText() {
            return f(i$, this);
        }
        async setGuessedText(e) {
            null === f(iI, this) &&
                (g(i$, this, e),
                g(
                    iH,
                    this,
                    await t._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
                        generatedAltText: e,
                    }),
                ),
                d(iz, this, iq).call(this));
        }
        toggleAltTextBadge(t = !1) {
            if (!f(ij, this) || f(iI, this)) {
                f(iW, this)?.remove(), g(iW, this, null);
                return;
            }
            if (!f(iW, this)) {
                let t = g(iW, this, document.createElement("div"));
                (t.className = "noAltTextBadge"), f(iU, this).div.append(t);
            }
            f(iW, this).classList.toggle("hidden", !t);
        }
        serialize(t) {
            let e = f(iI, this);
            return (
                t || f(i$, this) !== e || (e = f(iH, this)),
                { altText: e, decorative: f(iL, this), guessedText: f(i$, this), textWithDisclaimer: f(iH, this) }
            );
        }
        get data() {
            return { altText: f(iI, this), decorative: f(iL, this) };
        }
        set data({ altText: t, decorative: e, guessedText: i, textWithDisclaimer: s, cancel: n = !1 }) {
            i && (g(i$, this, i), g(iH, this, s)),
                (f(iI, this) !== t || f(iL, this) !== e) &&
                    (n || (g(iI, this, t), g(iL, this, e)), d(iz, this, iq).call(this));
        }
        toggle(t = !1) {
            f(iR, this) &&
                (!t && f(iB, this) && (clearTimeout(f(iB, this)), g(iB, this, null)), (f(iR, this).disabled = !t));
        }
        shown() {
            f(iU, this)._reportTelemetry({
                action: "pdfjs.image.alt_text.image_status_label_displayed",
                data: { label: iV.call(d(iz, this)) },
            });
        }
        destroy() {
            f(iR, this)?.remove(),
                g(iR, this, null),
                g(iF, this, null),
                g(iN, this, null),
                f(iW, this)?.remove(),
                g(iW, this, null);
        }
    };
function iV() {
    return (f(iI, this) && "added") || (null === f(iI, this) && this.guessedText && "review") || "missing";
}
async function iq() {
    let t = f(iR, this);
    if (!t) return;
    if (f(ij, this)) {
        if (
            (t.classList.toggle("done", !!f(iI, this)),
            t.setAttribute("data-l10n-id", iX._[iV.call(d(iz, this))]),
            f(iF, this)?.setAttribute("data-l10n-id", iX._[`${iV.call(d(iz, this))}-label`]),
            !f(iI, this))
        )
            return void f(iN, this)?.remove();
    } else {
        if (!f(iI, this) && !f(iL, this)) {
            t.classList.remove("done"), f(iN, this)?.remove();
            return;
        }
        t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e = f(iN, this);
    if (!e) {
        g(iN, this, (e = document.createElement("span"))),
            (e.className = "tooltip"),
            e.setAttribute("role", "tooltip"),
            (e.id = `alt-text-tooltip-${f(iU, this).id}`);
        let i = f(iU, this)._uiManager._signal;
        i.addEventListener(
            "abort",
            () => {
                clearTimeout(f(iB, this)), g(iB, this, null);
            },
            { once: !0 },
        ),
            t.addEventListener(
                "mouseenter",
                () => {
                    g(
                        iB,
                        this,
                        setTimeout(() => {
                            g(iB, this, null),
                                f(iN, this).classList.add("show"),
                                f(iU, this)._reportTelemetry({ action: "alt_text_tooltip" });
                        }, 100),
                    );
                },
                { signal: i },
            ),
            t.addEventListener(
                "mouseleave",
                () => {
                    f(iB, this) && (clearTimeout(f(iB, this)), g(iB, this, null)),
                        f(iN, this)?.classList.remove("show");
                },
                { signal: i },
            );
    }
    f(iL, this)
        ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip")
        : (e.removeAttribute("data-l10n-id"), (e.textContent = f(iI, this))),
        e.parentNode || t.append(e),
        f(iU, this).getElementForAltText()?.setAttribute("aria-describedby", e.id);
}
var iX = { _: null };
(0, o.t)(iG, "_l10n", null);
var iK = new WeakMap(),
    iY = new WeakMap(),
    iQ = new WeakMap(),
    iJ = new WeakMap(),
    iZ = new WeakMap(),
    i0 = new WeakMap(),
    i1 = new WeakMap(),
    i2 = new WeakMap(),
    i3 = new WeakMap(),
    i5 = new WeakMap(),
    i4 = new WeakSet(),
    i6 = class {
        constructor(t) {
            u(this, i4),
                p(this, iK, null),
                p(this, iY, null),
                p(this, iQ, !1),
                p(this, iJ, null),
                p(this, iZ, null),
                p(this, i0, null),
                p(this, i1, null),
                p(this, i2, null),
                p(this, i3, !1),
                p(this, i5, null),
                g(iJ, this, t);
        }
        renderForToolbar() {
            let t = g(iY, this, document.createElement("button"));
            return (t.className = "comment"), d(i4, this, i8).call(this, t, !1);
        }
        renderForStandalone() {
            let t = g(iK, this, document.createElement("button"));
            t.className = "annotationCommentButton";
            let e = f(iJ, this).commentButtonPosition;
            if (e) {
                let { style: i } = t;
                (i.insetInlineEnd = `calc(${100 * ("ltr" === f(iJ, this)._uiManager.direction ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`),
                    (i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`);
                let s = f(iJ, this).commentButtonColor;
                s && (i.backgroundColor = s);
            }
            return d(i4, this, i8).call(this, t, !0);
        }
        focusButton() {
            setTimeout(() => {
                (f(iK, this) ?? f(iY, this))?.focus();
            }, 0);
        }
        onUpdatedColor() {
            if (!f(iK, this)) return;
            let t = f(iJ, this).commentButtonColor;
            t && (f(iK, this).style.backgroundColor = t), f(iJ, this)._uiManager.updatePopupColor(f(iJ, this));
        }
        get commentButtonWidth() {
            return (f(iK, this)?.getBoundingClientRect().width ?? 0) / f(iJ, this).parent.boundingClientRect.width;
        }
        get commentPopupPositionInLayer() {
            if (f(i5, this)) return f(i5, this);
            if (!f(iK, this)) return null;
            let { x: t, y: e, height: i } = f(iK, this).getBoundingClientRect(),
                { x: s, y: n, width: a, height: r } = f(iJ, this).parent.boundingClientRect;
            return [(t - s) / a, (e + i - n) / r];
        }
        set commentPopupPositionInLayer(t) {
            g(i5, this, t);
        }
        hasDefaultPopupPosition() {
            return null === f(i5, this);
        }
        removeStandaloneCommentButton() {
            f(iK, this)?.remove(), g(iK, this, null);
        }
        removeToolbarCommentButton() {
            f(iY, this)?.remove(), g(iY, this, null);
        }
        setCommentButtonStates({ selected: t, hasPopup: e }) {
            f(iK, this) && (f(iK, this).classList.toggle("selected", t), (f(iK, this).ariaExpanded = e));
        }
        edit(t) {
            let e,
                i,
                s = this.commentPopupPositionInLayer;
            if (s) [e, i] = s;
            else {
                [e, i] = f(iJ, this).commentButtonPosition;
                let { width: t, height: s, x: n, y: a } = f(iJ, this);
                (e = n + e * t), (i = a + i * s);
            }
            let n = f(iJ, this).parent.boundingClientRect,
                { x: a, y: r, width: o, height: l } = n;
            f(iJ, this)._uiManager.editComment(f(iJ, this), a + e * o, r + i * l, { ...t, parentDimensions: n });
        }
        finish() {
            f(iY, this) && (f(iY, this).focus({ focusVisible: f(iQ, this) }), g(iQ, this, !1));
        }
        isDeleted() {
            return f(i3, this) || "" === f(i1, this);
        }
        isEmpty() {
            return null === f(i1, this);
        }
        hasBeenEdited() {
            return this.isDeleted() || f(i1, this) !== f(iZ, this);
        }
        serialize() {
            return this.data;
        }
        get data() {
            return { text: f(i1, this), richText: f(i0, this), date: f(i2, this), deleted: this.isDeleted() };
        }
        set data(t) {
            if ((t !== f(i1, this) && g(i0, this, null), null === t)) {
                g(i1, this, ""), g(i3, this, !0);
                return;
            }
            g(i1, this, t), g(i2, this, new Date()), g(i3, this, !1);
        }
        restoreData({ text: t, richText: e, date: i }) {
            g(i1, this, t), g(i0, this, e), g(i2, this, i), g(i3, this, !1);
        }
        setInitialText(t, e = null) {
            g(iZ, this, t), (this.data = t), g(i2, this, null), g(i0, this, e);
        }
        shown() {}
        destroy() {
            f(iY, this)?.remove(),
                g(iY, this, null),
                f(iK, this)?.remove(),
                g(iK, this, null),
                g(i1, this, ""),
                g(i0, this, null),
                g(i2, this, null),
                g(iJ, this, null),
                g(iQ, this, !1),
                g(i3, this, !1);
        }
    };
function i8(t, e) {
    if (!f(iJ, this)._uiManager.hasCommentManager()) return null;
    (t.tabIndex = "0"),
        (t.ariaHasPopup = "dialog"),
        e
            ? ((t.ariaControls = "commentPopup"), t.setAttribute("data-l10n-id", "pdfjs-show-comment-button"))
            : ((t.ariaControlsElements = [f(iJ, this)._uiManager.getCommentDialogElement()]),
              t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
    let i = f(iJ, this)._uiManager._signal;
    if (!(i instanceof AbortSignal) || i.aborted) return t;
    t.addEventListener("contextmenu", tc, { signal: i }),
        e &&
            (t.addEventListener(
                "focusin",
                (t) => {
                    (f(iJ, this)._focusEventsAllowed = !1), tu(t);
                },
                { capture: !0, signal: i },
            ),
            t.addEventListener(
                "focusout",
                (t) => {
                    (f(iJ, this)._focusEventsAllowed = !0), tu(t);
                },
                { capture: !0, signal: i },
            )),
        t.addEventListener("pointerdown", (t) => t.stopPropagation(), { signal: i });
    let s = (e) => {
        e.preventDefault(), t === f(iY, this) ? this.edit() : f(iJ, this).toggleComment(!0);
    };
    return (
        t.addEventListener("click", s, { capture: !0, signal: i }),
        t.addEventListener(
            "keydown",
            (e) => {
                e.target === t && "Enter" === e.key && (g(iQ, this, !0), s(e));
            },
            { signal: i },
        ),
        t.addEventListener(
            "pointerenter",
            () => {
                f(iJ, this).toggleComment(!1, !0);
            },
            { signal: i },
        ),
        t.addEventListener(
            "pointerleave",
            () => {
                f(iJ, this).toggleComment(!1, !1);
            },
            { signal: i },
        ),
        t
    );
}
var i7 = new WeakMap(),
    i9 = new WeakMap(),
    st = new WeakMap(),
    se = new WeakMap(),
    si = new WeakMap(),
    ss = new WeakMap(),
    sn = new WeakMap(),
    sa = new WeakMap(),
    sr = new WeakMap(),
    so = new WeakMap(),
    sl = new WeakMap(),
    sh = new WeakMap(),
    sd = new WeakSet(),
    sc = class {
        constructor({
            container: t,
            isPinchingDisabled: e = null,
            isPinchingStopped: i = null,
            onPinchStart: s = null,
            onPinching: n = null,
            onPinchEnd: a = null,
            signal: r,
        }) {
            u(this, sd),
                p(this, i7, void 0),
                p(this, i9, !1),
                p(this, st, null),
                p(this, se, void 0),
                p(this, si, void 0),
                p(this, ss, void 0),
                p(this, sn, void 0),
                p(this, sa, null),
                p(this, sr, void 0),
                p(this, so, null),
                p(this, sl, void 0),
                p(this, sh, null),
                g(i7, this, t),
                g(st, this, i),
                g(se, this, e),
                g(si, this, s),
                g(ss, this, n),
                g(sn, this, a),
                g(sl, this, new AbortController()),
                g(sr, this, AbortSignal.any([r, f(sl, this).signal])),
                t.addEventListener("touchstart", d(sd, this, su).bind(this), { passive: !1, signal: f(sr, this) });
        }
        get MIN_TOUCH_DISTANCE_TO_PINCH() {
            return 35 / tv.pixelRatio;
        }
        destroy() {
            f(sl, this)?.abort(), g(sl, this, null), f(sa, this)?.abort(), g(sa, this, null);
        }
    };
function su(t) {
    if (f(se, this)?.call(this)) return;
    if (1 === t.touches.length) {
        if (f(sa, this)) return;
        let t = g(sa, this, new AbortController()),
            e = AbortSignal.any([f(sr, this), t.signal]),
            i = f(i7, this),
            s = { capture: !0, signal: e, passive: !1 },
            n = (t) => {
                "touch" === t.pointerType && (f(sa, this)?.abort(), g(sa, this, null));
            };
        i.addEventListener(
            "pointerdown",
            (t) => {
                "touch" === t.pointerType && (tu(t), n(t));
            },
            s,
        ),
            i.addEventListener("pointerup", n, s),
            i.addEventListener("pointercancel", n, s);
        return;
    }
    if (!f(sh, this)) {
        g(sh, this, new AbortController());
        let t = AbortSignal.any([f(sr, this), f(sh, this).signal]),
            e = f(i7, this),
            i = { signal: t, capture: !1, passive: !1 };
        e.addEventListener("touchmove", d(sd, this, sp).bind(this), i);
        let s = d(sd, this, sg).bind(this);
        e.addEventListener("touchend", s, i),
            e.addEventListener("touchcancel", s, i),
            (i.capture = !0),
            e.addEventListener("pointerdown", tu, i),
            e.addEventListener("pointermove", tu, i),
            e.addEventListener("pointercancel", tu, i),
            e.addEventListener("pointerup", tu, i),
            f(si, this)?.call(this);
    }
    if ((tu(t), 2 !== t.touches.length || f(st, this)?.call(this))) return void g(so, this, null);
    let [e, i] = t.touches;
    e.identifier > i.identifier && ([e, i] = [i, e]),
        g(so, this, { touch0X: e.screenX, touch0Y: e.screenY, touch1X: i.screenX, touch1Y: i.screenY });
}
function sp(t) {
    if (!f(so, this) || 2 !== t.touches.length) return;
    tu(t);
    let [e, i] = t.touches;
    e.identifier > i.identifier && ([e, i] = [i, e]);
    let { screenX: s, screenY: n } = e,
        { screenX: a, screenY: r } = i,
        o = f(so, this),
        { touch0X: l, touch0Y: h, touch1X: d, touch1Y: c } = o,
        u = Math.hypot(a - s, r - n) || 1,
        p = Math.hypot(d - l, c - h) || 1;
    if (!f(i9, this) && Math.abs(p - u) <= sc.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    if (((o.touch0X = s), (o.touch0Y = n), (o.touch1X = a), (o.touch1Y = r), !f(i9, this))) return void g(i9, this, !0);
    let m = [(s + a) / 2, (n + r) / 2];
    f(ss, this)?.call(this, m, p, u);
}
function sg(t) {
    t.touches.length >= 2 ||
        (f(sh, this) && (f(sh, this).abort(), g(sh, this, null), f(sn, this)?.call(this)),
        f(so, this) && (tu(t), g(so, this, null), g(i9, this, !1)));
}
var sf = new WeakMap(),
    sm = new WeakMap(),
    sw = new WeakMap(),
    sb = new WeakMap(),
    sv = new WeakMap(),
    sA = new WeakMap(),
    sy = new WeakMap(),
    s_ = new WeakMap(),
    sx = new WeakMap(),
    sk = new WeakMap(),
    sM = new WeakMap(),
    sS = new WeakMap(),
    sE = new WeakMap(),
    sC = new WeakMap(),
    sT = new WeakMap(),
    sP = new WeakMap(),
    sD = new WeakMap(),
    sI = new WeakMap(),
    sL = new WeakMap(),
    sR = new WeakMap(),
    sF = new WeakMap(),
    sN = new WeakMap(),
    sB = new WeakMap(),
    sO = new WeakMap(),
    sW = new WeakMap(),
    sU = new WeakMap(),
    s$ = new WeakSet(),
    sH = class t {
        static get _resizerKeyboardManager() {
            let e = t.prototype._resizeWithKeyboard,
                i = ih.TRANSLATE_SMALL,
                s = ih.TRANSLATE_BIG;
            return F(
                this,
                "_resizerKeyboardManager",
                new ev([
                    [["ArrowLeft", "mac+ArrowLeft"], e, { args: [-i, 0] }],
                    [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e, { args: [-s, 0] }],
                    [["ArrowRight", "mac+ArrowRight"], e, { args: [i, 0] }],
                    [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e, { args: [s, 0] }],
                    [["ArrowUp", "mac+ArrowUp"], e, { args: [0, -i] }],
                    [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e, { args: [0, -s] }],
                    [["ArrowDown", "mac+ArrowDown"], e, { args: [0, i] }],
                    [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e, { args: [0, s] }],
                    [["Escape", "mac+Escape"], t.prototype._stopResizingWithKeyboard],
                ]),
            );
        }
        constructor(e) {
            u(this, s$),
                p(this, sf, null),
                p(this, sm, null),
                p(this, sw, null),
                p(this, sb, null),
                p(this, sv, null),
                p(this, sA, !1),
                p(this, sy, null),
                p(this, s_, ""),
                p(this, sx, null),
                p(this, sk, null),
                p(this, sM, null),
                p(this, sS, null),
                p(this, sE, null),
                p(this, sC, ""),
                p(this, sT, !1),
                p(this, sP, null),
                p(this, sD, !1),
                p(this, sI, !1),
                p(this, sL, !1),
                p(this, sR, null),
                p(this, sF, 0),
                p(this, sN, 0),
                p(this, sB, null),
                p(this, sO, null),
                (0, o.t)(this, "isSelected", !1),
                (0, o.t)(this, "_isCopy", !1),
                (0, o.t)(this, "_editToolbar", null),
                (0, o.t)(this, "_initialOptions", Object.create(null)),
                (0, o.t)(this, "_initialData", null),
                (0, o.t)(this, "_isVisible", !0),
                (0, o.t)(this, "_uiManager", null),
                (0, o.t)(this, "_focusEventsAllowed", !0),
                p(this, sW, !1),
                p(this, sU, t._zIndex++),
                (this.parent = e.parent),
                (this.id = e.id),
                (this.width = this.height = null),
                (this.pageIndex = e.parent.pageIndex),
                (this.name = e.name),
                (this.div = null),
                (this._uiManager = e.uiManager),
                (this.annotationElementId = null),
                (this._willKeepAspectRatio = !1),
                (this._initialOptions.isCentered = e.isCentered),
                (this._structTreeParentId = null),
                (this.annotationElementId = e.annotationElementId || null),
                (this.creationDate = e.creationDate || new Date()),
                (this.modificationDate = e.modificationDate || null),
                (this.canAddComment = !0);
            const {
                rotation: i,
                rawDims: { pageWidth: s, pageHeight: n, pageX: a, pageY: r },
            } = this.parent.viewport;
            (this.rotation = i),
                (this.pageRotation = (360 + i - this._uiManager.viewParameters.rotation) % 360),
                (this.pageDimensions = [s, n]),
                (this.pageTranslation = [a, r]);
            const [l, h] = this.parentDimensions;
            (this.x = e.x / l), (this.y = e.y / h), (this.isAttachedToDOM = !1), (this.deleted = !1);
        }
        updatePageIndex(t) {
            this.pageIndex = t;
        }
        get editorType() {
            return Object.getPrototypeOf(this).constructor._type;
        }
        get mode() {
            return Object.getPrototypeOf(this).constructor._editorType;
        }
        static get isDrawer() {
            return !1;
        }
        static get _defaultLineColor() {
            return F(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        static deleteAnnotationElement(t) {
            let e = new s7({ id: t.parent.getNextId(), parent: t.parent, uiManager: t._uiManager });
            (e.annotationElementId = t.annotationElementId), (e.deleted = !0), e._uiManager.addToAnnotationStorage(e);
        }
        static initialize(e, i) {
            (t._l10n ??= e),
                (t._l10nResizer ||= Object.freeze({
                    topLeft: "pdfjs-editor-resizer-top-left",
                    topMiddle: "pdfjs-editor-resizer-top-middle",
                    topRight: "pdfjs-editor-resizer-top-right",
                    middleRight: "pdfjs-editor-resizer-middle-right",
                    bottomRight: "pdfjs-editor-resizer-bottom-right",
                    bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
                    bottomLeft: "pdfjs-editor-resizer-bottom-left",
                    middleLeft: "pdfjs-editor-resizer-middle-left",
                })),
                -1 !== t._borderLineWidth ||
                    (t._borderLineWidth =
                        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--outline-width")) ||
                        0);
        }
        static updateDefaultParams(t, e) {}
        static get defaultPropertiesToUpdate() {
            return [];
        }
        static isHandlingMimeForPasting(t) {
            return !1;
        }
        static paste(t, e) {
            D("Not implemented");
        }
        get propertiesToUpdate() {
            return [];
        }
        get _isDraggable() {
            return f(sW, this);
        }
        set _isDraggable(t) {
            g(sW, this, t), this.div?.classList.toggle("draggable", t);
        }
        get uid() {
            return this.annotationElementId || this.id;
        }
        get isEnterHandled() {
            return !0;
        }
        center() {
            let [t, e] = this.pageDimensions;
            switch (this.parentRotation) {
                case 90:
                    (this.x -= (this.height * e) / (2 * t)), (this.y += (this.width * t) / (2 * e));
                    break;
                case 180:
                    (this.x += this.width / 2), (this.y += this.height / 2);
                    break;
                case 270:
                    (this.x += (this.height * e) / (2 * t)), (this.y -= (this.width * t) / (2 * e));
                    break;
                default:
                    (this.x -= this.width / 2), (this.y -= this.height / 2);
            }
            this.fixAndSetPosition();
        }
        addCommands(t) {
            this._uiManager.addCommands(t);
        }
        get currentLayer() {
            return this._uiManager.currentLayer;
        }
        setInBackground() {
            this.div.style.zIndex = 0;
        }
        setInForeground() {
            this.div.style.zIndex = f(sU, this);
        }
        setParent(t) {
            null !== t
                ? ((this.pageIndex = t.pageIndex), (this.pageDimensions = t.pageDimensions))
                : (d(s$, this, s8).call(this), f(sS, this)?.remove(), g(sS, this, null)),
                (this.parent = t);
        }
        focusin(t) {
            this._focusEventsAllowed && (f(sT, this) ? g(sT, this, !1) : this.parent.setSelected(this));
        }
        focusout(t) {
            this._focusEventsAllowed &&
                this.isAttachedToDOM &&
                !t.relatedTarget?.closest(`#${this.id}`) &&
                (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
        }
        commitOrRemove() {
            this.isEmpty() ? this.remove() : this.commit();
        }
        commit() {
            this.isInEditMode() && this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
            this._uiManager.addToAnnotationStorage(this);
        }
        setAt(t, e, i, s) {
            let [n, a] = this.parentDimensions;
            ([i, s] = this.screenToPageTranslation(i, s)),
                (this.x = (t + i) / n),
                (this.y = (e + s) / a),
                this.fixAndSetPosition();
        }
        _moveAfterPaste(t, e) {
            let [i, s] = this.parentDimensions;
            this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
        }
        translate(t, e) {
            d(s$, this, sj).call(this, this.parentDimensions, t, e);
        }
        translateInPage(t, e) {
            f(sP, this) || g(sP, this, [this.x, this.y, this.width, this.height]),
                d(s$, this, sj).call(this, this.pageDimensions, t, e),
                this.div.scrollIntoView({ block: "nearest" });
        }
        translationDone() {
            this._onTranslated(this.x, this.y);
        }
        drag(t, e) {
            f(sP, this) || g(sP, this, [this.x, this.y, this.width, this.height]);
            let {
                div: i,
                parentDimensions: [s, n],
            } = this;
            if (
                ((this.x += t / s),
                (this.y += e / n),
                this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1))
            ) {
                let { x: t, y: e } = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, t, e) &&
                    ((this.x -= Math.floor(this.x)), (this.y -= Math.floor(this.y)));
            }
            let { x: a, y: r } = this,
                [o, l] = this.getBaseTranslation();
            (a += o), (r += l);
            let { style: h } = i;
            (h.left = `${(100 * a).toFixed(2)}%`),
                (h.top = `${(100 * r).toFixed(2)}%`),
                this._onTranslating(a, r),
                i.scrollIntoView({ block: "nearest" });
        }
        _onTranslating(t, e) {}
        _onTranslated(t, e) {}
        get _hasBeenMoved() {
            return !!f(sP, this) && (f(sP, this)[0] !== this.x || f(sP, this)[1] !== this.y);
        }
        get _hasBeenResized() {
            return !!f(sP, this) && (f(sP, this)[2] !== this.width || f(sP, this)[3] !== this.height);
        }
        getBaseTranslation() {
            let [e, i] = this.parentDimensions,
                { _borderLineWidth: s } = t,
                n = s / e,
                a = s / i;
            switch (this.rotation) {
                case 90:
                    return [-n, a];
                case 180:
                    return [n, a];
                case 270:
                    return [n, -a];
                default:
                    return [-n, -a];
            }
        }
        get _mustFixPosition() {
            return !0;
        }
        fixAndSetPosition(t = this.rotation) {
            let {
                    div: { style: e },
                    pageDimensions: [i, s],
                } = this,
                { x: n, y: a, width: r, height: o } = this;
            if (((r *= i), (o *= s), (n *= i), (a *= s), this._mustFixPosition))
                switch (t) {
                    case 0:
                        (n = Z(n, 0, i - r)), (a = Z(a, 0, s - o));
                        break;
                    case 90:
                        (n = Z(n, 0, i - o)), (a = Z(a, r, s));
                        break;
                    case 180:
                        (n = Z(n, r, i)), (a = Z(a, o, s));
                        break;
                    case 270:
                        (n = Z(n, o, i)), (a = Z(a, 0, s - r));
                }
            (this.x = n /= i), (this.y = a /= s);
            let [l, h] = this.getBaseTranslation();
            (n += l),
                (a += h),
                (e.left = `${(100 * n).toFixed(2)}%`),
                (e.top = `${(100 * a).toFixed(2)}%`),
                this.moveInDOM();
        }
        screenToPageTranslation(e, i) {
            return sz.call(t, e, i, this.parentRotation);
        }
        pageTranslationToScreen(e, i) {
            return sz.call(t, e, i, 360 - this.parentRotation);
        }
        get parentScale() {
            return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
            return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
            let {
                parentScale: t,
                pageDimensions: [e, i],
            } = this;
            return [e * t, i * t];
        }
        setDims() {
            let {
                div: { style: t },
                width: e,
                height: i,
            } = this;
            (t.width = `${(100 * e).toFixed(2)}%`), (t.height = `${(100 * i).toFixed(2)}%`);
        }
        getInitialTranslation() {
            return [0, 0];
        }
        _onResized() {}
        static _round(t) {
            return Math.round(1e4 * t) / 1e4;
        }
        _onResizing() {}
        altTextFinish() {
            f(sw, this)?.finish();
        }
        get toolbarButtons() {
            return null;
        }
        async addEditToolbar() {
            if (this._editToolbar || f(sI, this)) return this._editToolbar;
            (this._editToolbar = new tX(this)), this.div.append(this._editToolbar.render());
            let { toolbarButtons: t } = this;
            if (t) for (let [e, i] of t) await this._editToolbar.addButton(e, i);
            return (
                this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()),
                this._editToolbar.addButton("delete"),
                this._editToolbar
            );
        }
        addCommentButtonInToolbar() {
            this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
        }
        removeCommentButtonFromToolbar() {
            this._editToolbar?.removeButton("comment");
        }
        removeEditToolbar() {
            this._editToolbar?.remove(), (this._editToolbar = null), f(sw, this)?.destroy();
        }
        addContainer(t) {
            let e = this._editToolbar?.div;
            e ? e.before(t) : this.div.append(t);
        }
        getClientDimensions() {
            return this.div.getBoundingClientRect();
        }
        createAltText() {
            return (
                !f(sw, this) &&
                    (iG.initialize(t._l10n),
                    g(sw, this, new iG(this)),
                    f(sf, this) && ((f(sw, this).data = f(sf, this)), g(sf, this, null))),
                f(sw, this)
            );
        }
        get altTextData() {
            return f(sw, this)?.data;
        }
        set altTextData(t) {
            f(sw, this) && (f(sw, this).data = t);
        }
        get guessedAltText() {
            return f(sw, this)?.guessedText;
        }
        async setGuessedAltText(t) {
            await f(sw, this)?.setGuessedText(t);
        }
        serializeAltText(t) {
            return f(sw, this)?.serialize(t);
        }
        hasAltText() {
            return !!f(sw, this) && !f(sw, this).isEmpty();
        }
        hasAltTextData() {
            return f(sw, this)?.hasData() ?? !1;
        }
        focusCommentButton() {
            f(sb, this)?.focusButton();
        }
        addCommentButton() {
            return this.canAddComment ? f(sb, this) || g(sb, this, new i6(this)) : null;
        }
        addStandaloneCommentButton() {
            if (this._uiManager.hasCommentManager()) {
                if (f(sv, this)) {
                    this._uiManager.isEditingMode() && f(sv, this).classList.remove("hidden");
                    return;
                }
                this.hasComment && (g(sv, this, f(sb, this).renderForStandalone()), this.div.append(f(sv, this)));
            }
        }
        removeStandaloneCommentButton() {
            f(sb, this).removeStandaloneCommentButton(), g(sv, this, null);
        }
        hideStandaloneCommentButton() {
            f(sv, this)?.classList.add("hidden");
        }
        get comment() {
            if (!f(sb, this)) return null;
            let {
                data: { richText: t, text: e, date: i, deleted: s },
            } = f(sb, this);
            return {
                text: e,
                richText: t,
                date: i,
                deleted: s,
                color: this.getNonHCMColor(),
                opacity: this.opacity ?? 1,
            };
        }
        set comment(t) {
            f(sb, this) || g(sb, this, new i6(this)),
                "object" == typeof t && null !== t ? f(sb, this).restoreData(t) : (f(sb, this).data = t),
                this.hasComment
                    ? (this.removeCommentButtonFromToolbar(),
                      this.addStandaloneCommentButton(),
                      this._uiManager.updateComment(this))
                    : (this.addCommentButtonInToolbar(),
                      this.removeStandaloneCommentButton(),
                      this._uiManager.removeComment(this));
        }
        setCommentData({ comment: t, popupRef: e, richText: i }) {
            if (
                !e ||
                (f(sb, this) || g(sb, this, new i6(this)), f(sb, this).setInitialText(t, i), !this.annotationElementId)
            )
                return;
            let s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
            s && this.updateFromAnnotationLayer(s);
        }
        get hasEditedComment() {
            return f(sb, this)?.hasBeenEdited();
        }
        get hasDeletedComment() {
            return f(sb, this)?.isDeleted();
        }
        get hasComment() {
            return !!f(sb, this) && !f(sb, this).isEmpty() && !f(sb, this).isDeleted();
        }
        async editComment(t) {
            f(sb, this) || g(sb, this, new i6(this)), f(sb, this).edit(t);
        }
        toggleComment(t, e) {
            this.hasComment && this._uiManager.toggleComment(this, t, e);
        }
        setSelectedCommentButton(t) {
            f(sb, this).setSelectedButton(t);
        }
        addComment(t) {
            if (this.hasEditedComment) {
                let [, , , e] = t.rect,
                    [i] = this.pageDimensions,
                    [s] = this.pageTranslation,
                    n = s + i + 1;
                t.popup = {
                    contents: this.comment.text,
                    deleted: this.comment.deleted,
                    rect: [n, e - 100, n + 180, e],
                };
            }
        }
        updateFromAnnotationLayer({ popup: { contents: t, deleted: e } }) {
            f(sb, this).data = e ? null : t;
        }
        get parentBoundingClientRect() {
            return this.parent.boundingClientRect;
        }
        render() {
            let t = (this.div = document.createElement("div"));
            t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360),
                (t.className = this.name),
                t.setAttribute("id", this.id),
                (t.tabIndex = f(sA, this) ? -1 : 0),
                t.setAttribute("role", "application"),
                this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId),
                this._isVisible || t.classList.add("hidden"),
                this.setInForeground(),
                d(s$, this, s2).call(this);
            let [e, i] = this.parentDimensions;
            this.parentRotation % 180 != 0 &&
                ((t.style.maxWidth = `${((100 * i) / e).toFixed(2)}%`),
                (t.style.maxHeight = `${((100 * e) / i).toFixed(2)}%`));
            let [s, n] = this.getInitialTranslation();
            return (
                this.translate(s, n),
                t9(this, t, ["keydown", "pointerdown", "dblclick"]),
                this.isResizable &&
                    this._uiManager._supportsPinchToZoom &&
                    (f(sO, this) ||
                        g(
                            sO,
                            this,
                            new sc({
                                container: t,
                                isPinchingDisabled: () => !this.isSelected,
                                onPinchStart: d(s$, this, sQ).bind(this),
                                onPinching: d(s$, this, sJ).bind(this),
                                onPinchEnd: d(s$, this, sZ).bind(this),
                                signal: this._uiManager._signal,
                            }),
                        )),
                this.addStandaloneCommentButton(),
                this._uiManager._editorUndoBar?.hide(),
                t
            );
        }
        pointerdown(t) {
            let { isMac: e } = z.platform;
            0 !== t.button || (t.ctrlKey && e)
                ? t.preventDefault()
                : (g(sT, this, !0), this._isDraggable)
                  ? d(s$, this, s1).call(this, t)
                  : d(s$, this, s0).call(this, t);
        }
        _onStartDragging() {}
        _onStopDragging() {}
        moveInDOM() {
            f(sR, this) && clearTimeout(f(sR, this)),
                g(
                    sR,
                    this,
                    setTimeout(() => {
                        g(sR, this, null), this.parent?.moveEditorInDOM(this);
                    }, 0),
                );
        }
        _setParentAndPosition(t, e, i) {
            t.changeParent(this), (this.x = e), (this.y = i), this.fixAndSetPosition(), this._onTranslated();
        }
        getRect(t, e, i = this.rotation) {
            let s = this.parentScale,
                [n, a] = this.pageDimensions,
                [r, o] = this.pageTranslation,
                l = t / s,
                h = e / s,
                d = this.x * n,
                c = this.y * a,
                u = this.width * n,
                p = this.height * a;
            switch (i) {
                case 0:
                    return [d + l + r, a - c - h - p + o, d + l + u + r, a - c - h + o];
                case 90:
                    return [d + h + r, a - c + l + o, d + h + p + r, a - c + l + u + o];
                case 180:
                    return [d - l - u + r, a - c + h + o, d - l + r, a - c + h + p + o];
                case 270:
                    return [d - h - p + r, a - c - l - u + o, d - h + r, a - c - l + o];
                default:
                    throw Error("Invalid rotation");
            }
        }
        getRectInCurrentCoords(t, e) {
            let [i, s, n, a] = t,
                r = n - i,
                o = a - s;
            switch (this.rotation) {
                case 0:
                    return [i, e - a, r, o];
                case 90:
                    return [i, e - s, o, r];
                case 180:
                    return [n, e - s, r, o];
                case 270:
                    return [n, e - a, o, r];
                default:
                    throw Error("Invalid rotation");
            }
        }
        getPDFRect() {
            return this.getRect(0, 0);
        }
        getNonHCMColor() {
            return this.color && t._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
        }
        onUpdatedColor() {
            f(sb, this)?.onUpdatedColor();
        }
        getData() {
            let {
                comment: { text: t, color: e, date: i, opacity: s, deleted: n, richText: a },
                uid: r,
                pageIndex: o,
                creationDate: l,
                modificationDate: h,
            } = this;
            return {
                id: r,
                pageIndex: o,
                rect: this.getPDFRect(),
                richText: a,
                contentsObj: { str: t },
                creationDate: l,
                modificationDate: i || h,
                popupRef: !n,
                color: e,
                opacity: s,
            };
        }
        onceAdded(t) {}
        isEmpty() {
            return !1;
        }
        enableEditMode() {
            return !this.isInEditMode() && (this.parent.setEditingState(!1), g(sI, this, !0), !0);
        }
        disableEditMode() {
            return !!this.isInEditMode() && (this.parent.setEditingState(!0), g(sI, this, !1), !0);
        }
        isInEditMode() {
            return f(sI, this);
        }
        shouldGetKeyboardEvents() {
            return f(sL, this);
        }
        needsToBeRebuilt() {
            return this.div && !this.isAttachedToDOM;
        }
        get isOnScreen() {
            let { top: t, left: e, bottom: i, right: s } = this.getClientDimensions(),
                { innerHeight: n, innerWidth: a } = window;
            return e < a && s > 0 && t < n && i > 0;
        }
        rebuild() {
            d(s$, this, s2).call(this);
        }
        rotate(t) {}
        resize() {}
        serializeDeleted() {
            return {
                id: this.annotationElementId,
                deleted: !0,
                pageIndex: this.pageIndex,
                popupRef: this._initialData?.popupRef || "",
            };
        }
        serialize(t = !1, e = null) {
            return {
                annotationType: this.mode,
                pageIndex: this.pageIndex,
                rect: this.getPDFRect(),
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId,
                popupRef: this._initialData?.popupRef || "",
            };
        }
        static async deserialize(t, e, i) {
            let s = new this.prototype.constructor({
                parent: e,
                id: e.getNextId(),
                uiManager: i,
                annotationElementId: t.annotationElementId,
                creationDate: t.creationDate,
                modificationDate: t.modificationDate,
            });
            (s.rotation = t.rotation), g(sf, s, t.accessibilityData), (s._isCopy = t.isCopy || !1);
            let [n, a] = s.pageDimensions,
                [r, o, l, h] = s.getRectInCurrentCoords(t.rect, a);
            return (s.x = r / n), (s.y = o / a), (s.width = l / n), (s.height = h / a), s;
        }
        get hasBeenModified() {
            return !!this.annotationElementId && (this.deleted || null !== this.serialize());
        }
        remove() {
            if (
                (f(sE, this)?.abort(),
                g(sE, this, null),
                this.isEmpty() || this.commit(),
                this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this),
                this.hideCommentPopup(),
                f(sR, this) && (clearTimeout(f(sR, this)), g(sR, this, null)),
                d(s$, this, s8).call(this),
                this.removeEditToolbar(),
                f(sB, this))
            ) {
                for (let t of f(sB, this).values()) clearTimeout(t);
                g(sB, this, null);
            }
            (this.parent = null), f(sO, this)?.destroy(), g(sO, this, null), f(sS, this)?.remove(), g(sS, this, null);
        }
        get isResizable() {
            return !1;
        }
        makeResizable() {
            this.isResizable && (d(s$, this, sV).call(this), f(sx, this).classList.remove("hidden"));
        }
        get toolbarPosition() {
            return null;
        }
        get commentButtonPosition() {
            return "ltr" === this._uiManager.direction ? [1, 0] : [0, 0];
        }
        get commentButtonPositionInPage() {
            let {
                    commentButtonPosition: [e, i],
                } = this,
                [s, n, a, r] = this.getPDFRect();
            return [t._round(s + (a - s) * e), t._round(n + (r - n) * (1 - i))];
        }
        get commentButtonColor() {
            return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
        }
        get commentPopupPosition() {
            return f(sb, this).commentPopupPositionInLayer;
        }
        set commentPopupPosition(t) {
            f(sb, this).commentPopupPositionInLayer = t;
        }
        hasDefaultPopupPosition() {
            return f(sb, this).hasDefaultPopupPosition();
        }
        get commentButtonWidth() {
            return f(sb, this).commentButtonWidth;
        }
        get elementBeforePopup() {
            return this.div;
        }
        setCommentButtonStates(t) {
            f(sb, this)?.setCommentButtonStates(t);
        }
        keydown(e) {
            if (!this.isResizable || e.target !== this.div || "Enter" !== e.key) return;
            this._uiManager.setSelected(this),
                g(sM, this, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
            let i = f(sx, this).children;
            if (!f(sm, this)) {
                g(sm, this, Array.from(i));
                let e = d(s$, this, s3).bind(this),
                    s = d(s$, this, s5).bind(this),
                    n = this._uiManager._signal;
                for (let i of f(sm, this)) {
                    let a = i.getAttribute("data-resizer-name");
                    i.setAttribute("role", "spinbutton"),
                        i.addEventListener("keydown", e, { signal: n }),
                        i.addEventListener("blur", s, { signal: n }),
                        i.addEventListener("focus", d(s$, this, s4).bind(this, a), { signal: n }),
                        i.setAttribute("data-l10n-id", t._l10nResizer[a]);
                }
            }
            let s = f(sm, this)[0],
                n = 0;
            for (let t of i) {
                if (t === s) break;
                n++;
            }
            let a = (((360 - this.rotation + this.parentRotation) % 360) / 90) * (f(sm, this).length / 4);
            if (a !== n) {
                if (a < n) for (let t = 0; t < n - a; t++) f(sx, this).append(f(sx, this).firstElementChild);
                else if (a > n)
                    for (let t = 0; t < a - n; t++) f(sx, this).firstElementChild.before(f(sx, this).lastElementChild);
                let e = 0;
                for (let s of i) {
                    let i = f(sm, this)[e++].getAttribute("data-resizer-name");
                    s.setAttribute("data-l10n-id", t._l10nResizer[i]);
                }
            }
            d(s$, this, s6).call(this, 0),
                g(sL, this, !0),
                f(sx, this).firstElementChild.focus({ focusVisible: !0 }),
                e.preventDefault(),
                e.stopImmediatePropagation();
        }
        _resizeWithKeyboard(t, e) {
            f(sL, this) && d(s$, this, sY).call(this, f(sC, this), { deltaX: t, deltaY: e, fromKeyboard: !0 });
        }
        _stopResizingWithKeyboard() {
            d(s$, this, s8).call(this), this.div.focus();
        }
        select() {
            this.isSelected && this._editToolbar
                ? this._editToolbar.show()
                : ((this.isSelected = !0),
                    this.makeResizable(),
                    this.div?.classList.add("selectedEditor"),
                    this._editToolbar)
                  ? (this._editToolbar?.show(), f(sw, this)?.toggleAltTextBadge(!1))
                  : this.addEditToolbar().then(() => {
                        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
                    });
        }
        focus() {
            this.div &&
                !this.div.contains(document.activeElement) &&
                setTimeout(() => this.div?.focus({ preventScroll: !0 }), 0);
        }
        unselect() {
            this.isSelected &&
                ((this.isSelected = !1),
                f(sx, this)?.classList.add("hidden"),
                this.div?.classList.remove("selectedEditor"),
                this.div?.contains(document.activeElement) &&
                    this._uiManager.currentLayer.div.focus({ preventScroll: !0 }),
                this._editToolbar?.hide(),
                f(sw, this)?.toggleAltTextBadge(!0),
                this.hideCommentPopup());
        }
        hideCommentPopup() {
            this.hasComment && this._uiManager.toggleComment(null);
        }
        updateParams(t, e) {}
        disableEditing() {}
        enableEditing() {}
        get canChangeContent() {
            return !1;
        }
        enterInEditMode() {
            this.canChangeContent && (this.enableEditMode(), this.div.focus());
        }
        dblclick(t) {
            "BUTTON" !== t.target.nodeName &&
                (this.enterInEditMode(),
                this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.uid }));
        }
        getElementForAltText() {
            return this.div;
        }
        get contentDiv() {
            return this.div;
        }
        get isEditing() {
            return f(sD, this);
        }
        set isEditing(t) {
            g(sD, this, t),
                this.parent &&
                    (t
                        ? (this.parent.setSelected(this), this.parent.setActiveEditor(this))
                        : this.parent.setActiveEditor(null));
        }
        static get MIN_SIZE() {
            return 16;
        }
        static canCreateNewEmptyEditor() {
            return !0;
        }
        get telemetryInitialData() {
            return { action: "added" };
        }
        get telemetryFinalData() {
            return null;
        }
        _reportTelemetry(e, i = !1) {
            if (i) {
                f(sB, this) || g(sB, this, new Map());
                let { action: i } = e,
                    s = f(sB, this).get(i);
                s && clearTimeout(s),
                    (s = setTimeout(() => {
                        this._reportTelemetry(e), f(sB, this).delete(i), 0 === f(sB, this).size && g(sB, this, null);
                    }, t._telemetryTimeout)),
                    f(sB, this).set(i, s);
                return;
            }
            (e.type ||= this.editorType),
                this._uiManager._eventBus.dispatch("reporttelemetry", {
                    source: this,
                    details: { type: "editing", data: e },
                });
        }
        show(t = this._isVisible) {
            this.div.classList.toggle("hidden", !t), (this._isVisible = t);
        }
        enable() {
            this.div && (this.div.tabIndex = 0), g(sA, this, !1);
        }
        disable() {
            this.div && (this.div.tabIndex = -1), g(sA, this, !0);
        }
        updateFakeAnnotationElement(t) {
            if (!f(sS, this) && !this.deleted) return void g(sS, this, t.addFakeAnnotation(this));
            if (this.deleted) {
                f(sS, this).remove(), g(sS, this, null);
                return;
            }
            (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) &&
                f(sS, this).updateEdited({ rect: this.getPDFRect(), popup: this.comment });
        }
        renderAnnotationElement(t) {
            if (this.deleted) return t.hide(), null;
            let e = t.container.querySelector(".annotationContent");
            if (e) {
                if ("CANVAS" === e.nodeName) {
                    let t = e;
                    (e = document.createElement("div")).classList.add("annotationContent", this.editorType),
                        t.before(e);
                }
            } else
                (e = document.createElement("div")).classList.add("annotationContent", this.editorType),
                    t.container.prepend(e);
            return e;
        }
        resetAnnotationElement(t) {
            let { firstElementChild: e } = t.container;
            e?.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
        }
    };
function sj([t, e], i, s) {
    ([i, s] = this.screenToPageTranslation(i, s)),
        (this.x += i / t),
        (this.y += s / e),
        this._onTranslating(this.x, this.y),
        this.fixAndSetPosition();
}
function sz(t, e, i) {
    switch (i) {
        case 90:
            return [e, -t];
        case 180:
            return [-t, -e];
        case 270:
            return [-e, t];
        default:
            return [t, e];
    }
}
function sG(t) {
    switch (t) {
        case 90: {
            let [t, e] = this.pageDimensions;
            return [0, -t / e, e / t, 0];
        }
        case 180:
            return [-1, 0, 0, -1];
        case 270: {
            let [t, e] = this.pageDimensions;
            return [0, t / e, -e / t, 0];
        }
        default:
            return [1, 0, 0, 1];
    }
}
function sV() {
    if (f(sx, this)) return;
    g(sx, this, document.createElement("div")), f(sx, this).classList.add("resizers");
    let t = this._willKeepAspectRatio
            ? ["topLeft", "topRight", "bottomRight", "bottomLeft"]
            : [
                  "topLeft",
                  "topMiddle",
                  "topRight",
                  "middleRight",
                  "bottomRight",
                  "bottomMiddle",
                  "bottomLeft",
                  "middleLeft",
              ],
        e = this._uiManager._signal;
    for (let i of t) {
        let t = document.createElement("div");
        f(sx, this).append(t),
            t.classList.add("resizer", i),
            t.setAttribute("data-resizer-name", i),
            t.addEventListener("pointerdown", d(s$, this, sq).bind(this, i), { signal: e }),
            t.addEventListener("contextmenu", tc, { signal: e }),
            (t.tabIndex = -1);
    }
    this.div.prepend(f(sx, this));
}
function sq(t, e) {
    e.preventDefault();
    let { isMac: i } = z.platform;
    if (0 !== e.button || (e.ctrlKey && i)) return;
    f(sw, this)?.toggle(!1);
    let s = this._isDraggable;
    (this._isDraggable = !1), g(sk, this, [e.screenX, e.screenY]);
    let n = new AbortController(),
        a = this._uiManager.combinedSignal(n);
    this.parent.togglePointerEvents(!1),
        window.addEventListener("pointermove", d(s$, this, sY).bind(this, t), { passive: !0, capture: !0, signal: a }),
        window.addEventListener("touchmove", tu, { passive: !1, signal: a }),
        window.addEventListener("contextmenu", tc, { signal: a }),
        g(sM, this, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
    let r = this.parent.div.style.cursor,
        o = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
    let l = () => {
        n.abort(),
            this.parent.togglePointerEvents(!0),
            f(sw, this)?.toggle(!0),
            (this._isDraggable = s),
            (this.parent.div.style.cursor = r),
            (this.div.style.cursor = o),
            d(s$, this, sK).call(this);
    };
    window.addEventListener("pointerup", l, { signal: a }), window.addEventListener("blur", l, { signal: a });
}
function sX(t, e, i, s) {
    (this.width = i),
        (this.height = s),
        (this.x = t),
        (this.y = e),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResized();
}
function sK() {
    if (!f(sM, this)) return;
    let { savedX: t, savedY: e, savedWidth: i, savedHeight: s } = f(sM, this);
    g(sM, this, null);
    let n = this.x,
        a = this.y,
        r = this.width,
        o = this.height;
    (n !== t || a !== e || r !== i || o !== s) &&
        this.addCommands({
            cmd: d(s$, this, sX).bind(this, n, a, r, o),
            undo: d(s$, this, sX).bind(this, t, e, i, s),
            mustExec: !0,
        });
}
function sY(t, e) {
    let i,
        s,
        n,
        a,
        r,
        o,
        [l, h] = this.parentDimensions,
        c = this.x,
        u = this.y,
        p = this.width,
        m = this.height,
        w = sH.MIN_SIZE / l,
        b = sH.MIN_SIZE / h,
        v = d(s$, this, sG).call(this, this.rotation),
        A = (t, e) => [v[0] * t + v[2] * e, v[1] * t + v[3] * e],
        y = d(s$, this, sG).call(this, 360 - this.rotation),
        _ = !1,
        x = !1;
    switch (t) {
        case "topLeft":
            (_ = !0), (i = (t, e) => [0, 0]), (s = (t, e) => [t, e]);
            break;
        case "topMiddle":
            (i = (t, e) => [t / 2, 0]), (s = (t, e) => [t / 2, e]);
            break;
        case "topRight":
            (_ = !0), (i = (t, e) => [t, 0]), (s = (t, e) => [0, e]);
            break;
        case "middleRight":
            (x = !0), (i = (t, e) => [t, e / 2]), (s = (t, e) => [0, e / 2]);
            break;
        case "bottomRight":
            (_ = !0), (i = (t, e) => [t, e]), (s = (t, e) => [0, 0]);
            break;
        case "bottomMiddle":
            (i = (t, e) => [t / 2, e]), (s = (t, e) => [t / 2, 0]);
            break;
        case "bottomLeft":
            (_ = !0), (i = (t, e) => [0, e]), (s = (t, e) => [t, 0]);
            break;
        case "middleLeft":
            (x = !0), (i = (t, e) => [0, e / 2]), (s = (t, e) => [t, e / 2]);
    }
    let k = i(p, m),
        M = s(p, m),
        S = A(...M),
        E = sH._round(c + S[0]),
        C = sH._round(u + S[1]),
        T = 1,
        P = 1;
    if (e.fromKeyboard) ({ deltaX: n, deltaY: a } = e);
    else {
        let { screenX: t, screenY: i } = e,
            [s, r] = f(sk, this);
        ([n, a] = this.screenToPageTranslation(t - s, i - r)), (f(sk, this)[0] = t), (f(sk, this)[1] = i);
    }
    if ((([n, a] = ((r = n / l), (o = a / h), [y[0] * r + y[2] * o, y[1] * r + y[3] * o])), _)) {
        let t = Math.hypot(p, m);
        T = P = Math.max(Math.min(Math.hypot(M[0] - k[0] - n, M[1] - k[1] - a) / t, 1 / p, 1 / m), w / p, b / m);
    } else x ? (T = Z(Math.abs(M[0] - k[0] - n), w, 1) / p) : (P = Z(Math.abs(M[1] - k[1] - a), b, 1) / m);
    let D = sH._round(p * T),
        I = sH._round(m * P),
        L = E - (S = A(...s(D, I)))[0],
        R = C - S[1];
    f(sP, this) || g(sP, this, [this.x, this.y, this.width, this.height]),
        (this.width = D),
        (this.height = I),
        (this.x = L),
        (this.y = R),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResizing();
}
function sQ() {
    g(sM, this, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }),
        f(sw, this)?.toggle(!1),
        this.parent.togglePointerEvents(!1);
}
function sJ(t, e, i) {
    let s = (i / e) * 0.7 + 1 - 0.7;
    if (1 === s) return;
    let n = d(s$, this, sG).call(this, this.rotation),
        a = (t, e) => [n[0] * t + n[2] * e, n[1] * t + n[3] * e],
        [r, o] = this.parentDimensions,
        l = this.x,
        h = this.y,
        c = this.width,
        u = this.height;
    s = Math.max(Math.min(s, 1 / c, 1 / u), sH.MIN_SIZE / r / c, sH.MIN_SIZE / o / u);
    let p = sH._round(c * s),
        m = sH._round(u * s);
    if (p === c && m === u) return;
    f(sP, this) || g(sP, this, [l, h, c, u]);
    let w = a(c / 2, u / 2),
        b = sH._round(l + w[0]),
        v = sH._round(h + w[1]),
        A = a(p / 2, m / 2);
    (this.x = b - A[0]),
        (this.y = v - A[1]),
        (this.width = p),
        (this.height = m),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResizing();
}
function sZ() {
    f(sw, this)?.toggle(!0), this.parent.togglePointerEvents(!0), d(s$, this, sK).call(this);
}
function s0(t) {
    let { isMac: e } = z.platform;
    (t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e)
        ? this.parent.toggleSelected(this)
        : this.parent.setSelected(this);
}
function s1(t) {
    let { isSelected: e } = this;
    this._uiManager.setUpDragSession();
    let i = !1,
        s = new AbortController(),
        n = this._uiManager.combinedSignal(s),
        a = { capture: !0, passive: !1, signal: n },
        r = (t) => {
            s.abort(),
                g(sy, this, null),
                g(sT, this, !1),
                this._uiManager.endDragSession() || d(s$, this, s0).call(this, t),
                i && this._onStopDragging();
        };
    e &&
        (g(sF, this, t.clientX),
        g(sN, this, t.clientY),
        g(sy, this, t.pointerId),
        g(s_, this, t.pointerType),
        window.addEventListener(
            "pointermove",
            (t) => {
                i || ((i = !0), this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
                let { clientX: e, clientY: s, pointerId: n } = t;
                if (n !== f(sy, this)) return void tu(t);
                let [a, r] = this.screenToPageTranslation(e - f(sF, this), s - f(sN, this));
                g(sF, this, e), g(sN, this, s), this._uiManager.dragSelectedEditors(a, r);
            },
            a,
        ),
        window.addEventListener("touchmove", tu, a),
        window.addEventListener(
            "pointerdown",
            (t) => {
                t.pointerType === f(s_, this) && (f(sO, this) || t.isPrimary) && r(t), tu(t);
            },
            a,
        ));
    let o = (t) => {
        f(sy, this) && f(sy, this) !== t.pointerId ? tu(t) : r(t);
    };
    window.addEventListener("pointerup", o, { signal: n }), window.addEventListener("blur", o, { signal: n });
}
function s2() {
    if (f(sE, this) || !this.div) return;
    g(sE, this, new AbortController());
    let t = this._uiManager.combinedSignal(f(sE, this));
    this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t }),
        this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t });
}
function s3(t) {
    sH._resizerKeyboardManager.exec(this, t);
}
function s5(t) {
    f(sL, this) && t.relatedTarget?.parentNode !== f(sx, this) && d(s$, this, s8).call(this);
}
function s4(t) {
    g(sC, this, f(sL, this) ? t : "");
}
function s6(t) {
    if (f(sm, this)) for (let e of f(sm, this)) e.tabIndex = t;
}
function s8() {
    g(sL, this, !1), d(s$, this, s6).call(this, -1), d(s$, this, sK).call(this);
}
(0, o.t)(sH, "_l10n", null),
    (0, o.t)(sH, "_l10nResizer", null),
    (0, o.t)(sH, "_borderLineWidth", -1),
    (0, o.t)(sH, "_colorManager", new ey()),
    (0, o.t)(sH, "_zIndex", 1),
    (0, o.t)(sH, "_telemetryTimeout", 1e3);
var s7 = class extends sH {
        constructor(t) {
            super(t), (this.annotationElementId = t.annotationElementId), (this.deleted = !0);
        }
        serialize() {
            return this.serializeDeleted();
        }
    },
    s9 = class {
        constructor(t) {
            (this.h1 = t ? 0 | t : 0xc3d2e1f0), (this.h2 = t ? 0 | t : 0xc3d2e1f0);
        }
        update(t) {
            let e, i;
            if ("string" == typeof t) {
                (e = new Uint8Array(2 * t.length)), (i = 0);
                for (let s = 0, n = t.length; s < n; s++) {
                    let n = t.charCodeAt(s);
                    n <= 255 ? (e[i++] = n) : ((e[i++] = n >>> 8), (e[i++] = 255 & n));
                }
            } else if (ArrayBuffer.isView(t)) i = (e = t.slice()).byteLength;
            else throw Error("Invalid data format, must be a string or TypedArray.");
            let s = i >> 2,
                n = i - 4 * s,
                a = new Uint32Array(e.buffer, 0, s),
                r = 0,
                o = 0,
                l = this.h1,
                h = this.h2;
            for (let t = 0; t < s; t++)
                1 & t
                    ? ((l ^= r =
                          ((0x1b873593 *
                              (r =
                                  ((r = ((0xcc9e2d51 * (r = a[t])) & 0xffff0000) | ((11601 * r) & 65535)) << 15) |
                                  (r >>> 17))) &
                              0xffff0000) |
                          ((13715 * r) & 65535)),
                      (l = 5 * (l = (l << 13) | (l >>> 19)) + 0xe6546b64))
                    : ((h ^= o =
                          ((0x1b873593 *
                              (o =
                                  ((o = ((0xcc9e2d51 * (o = a[t])) & 0xffff0000) | ((11601 * o) & 65535)) << 15) |
                                  (o >>> 17))) &
                              0xffff0000) |
                          ((13715 * o) & 65535)),
                      (h = 5 * (h = (h << 13) | (h >>> 19)) + 0xe6546b64));
            switch (((r = 0), n)) {
                case 3:
                    r ^= e[4 * s + 2] << 16;
                case 2:
                    r ^= e[4 * s + 1] << 8;
                case 1:
                    (r ^= e[4 * s]),
                        (r =
                            ((0x1b873593 *
                                (r =
                                    ((r = ((0xcc9e2d51 * r) & 0xffff0000) | ((11601 * r) & 65535)) << 15) |
                                    (r >>> 17))) &
                                0xffff0000) |
                            ((13715 * r) & 65535)),
                        1 & s ? (l ^= r) : (h ^= r);
            }
            (this.h1 = l), (this.h2 = h);
        }
        hexdigest() {
            let t = this.h1,
                e = this.h2;
            return (
                (t ^= e >>> 1),
                (e =
                    ((0xff51afd7 * e) & 0xffff0000) |
                    (((((e << 16) | ((t = ((0xed558ccd * t) & 0xffff0000) | ((36045 * t) & 65535)) >>> 16)) *
                        0xafd7ed55) &
                        0xffff0000) >>>
                        16)),
                (t ^= e >>> 1),
                (e =
                    ((0xc4ceb9fe * e) & 0xffff0000) |
                    (((((e << 16) | ((t = ((0x1a85ec53 * t) & 0xffff0000) | ((60499 * t) & 65535)) >>> 16)) *
                        0xb9fe1a85) &
                        0xffff0000) >>>
                        16)),
                ((t ^= e >>> 1) >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0")
            );
        }
    },
    nt = Object.freeze({ map: null, hash: "", transfer: void 0 }),
    ne = new WeakMap(),
    ni = new WeakMap(),
    ns = new WeakMap(),
    nn = new WeakMap(),
    na = new WeakSet();
s = Symbol.iterator;
var nr = class {
    constructor() {
        u(this, na),
            p(this, ne, !1),
            p(this, ni, null),
            p(this, ns, null),
            p(this, nn, new Map()),
            (this.onSetModified = null),
            (this.onResetModified = null),
            (this.onAnnotationEditor = null);
    }
    getValue(t, e) {
        let i = f(nn, this).get(t);
        return void 0 === i ? e : Object.assign(e, i);
    }
    getRawValue(t) {
        return f(nn, this).get(t);
    }
    remove(t) {
        let e = f(nn, this).get(t);
        if (
            void 0 !== e &&
            (e instanceof sH && f(ns, this).delete(e.annotationElementId),
            f(nn, this).delete(t),
            0 === f(nn, this).size && this.resetModified(),
            "function" == typeof this.onAnnotationEditor)
        ) {
            for (let t of f(nn, this).values()) if (t instanceof sH) return;
            this.onAnnotationEditor(null);
        }
    }
    setValue(t, e) {
        let i = f(nn, this).get(t),
            s = !1;
        if (void 0 !== i) for (let [t, n] of Object.entries(e)) i[t] !== n && ((s = !0), (i[t] = n));
        else (s = !0), f(nn, this).set(t, e);
        s && d(na, this, no).call(this),
            e instanceof sH &&
                ((f(ns, this) || g(ns, this, new Map())).set(e.annotationElementId, e),
                "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type));
    }
    has(t) {
        return f(nn, this).has(t);
    }
    get size() {
        return f(nn, this).size;
    }
    resetModified() {
        f(ne, this) && (g(ne, this, !1), "function" == typeof this.onResetModified && this.onResetModified());
    }
    get print() {
        return new nh(this);
    }
    get serializable() {
        if (0 === f(nn, this).size) return nt;
        let t = new Map(),
            e = new s9(),
            i = [],
            s = Object.create(null),
            n = !1;
        for (let [i, a] of f(nn, this)) {
            let r = a instanceof sH ? a.serialize(!1, s) : a;
            a.page && ((a.pageIndex = a.page._pageIndex), delete a.page),
                r && (t.set(i, r), e.update(`${i}:${JSON.stringify(r)}`), (n ||= !!r.bitmap));
        }
        if (n) for (let e of t.values()) e.bitmap && i.push(e.bitmap);
        return t.size > 0 ? { map: t, hash: e.hexdigest(), transfer: i } : nt;
    }
    get editorStats() {
        let t = null,
            e = new Map(),
            i = 0,
            s = 0;
        for (let n of f(nn, this).values()) {
            if (!(n instanceof sH)) {
                n.popup && (n.popup.deleted ? (s += 1) : (i += 1));
                continue;
            }
            n.isCommentDeleted ? (s += 1) : n.hasEditedComment && (i += 1);
            let a = n.telemetryFinalData;
            if (!a) continue;
            let { type: r } = a;
            e.has(r) || e.set(r, Object.getPrototypeOf(n).constructor), (t ||= Object.create(null));
            let o = (t[r] ||= new Map());
            for (let [t, e] of Object.entries(a)) {
                if ("type" === t) continue;
                let i = o.get(t);
                i || ((i = new Map()), o.set(t, i));
                let s = i.get(e) ?? 0;
                i.set(e, s + 1);
            }
        }
        if (((s > 0 || i > 0) && ((t ||= Object.create(null)).comments = { deleted: s, edited: i }), !t)) return null;
        for (let [i, s] of e) t[i] = s.computeTelemetryFinalData(t[i]);
        return t;
    }
    resetModifiedIds() {
        g(ni, this, null);
    }
    updateEditor(t, e) {
        let i = f(ns, this)?.get(t);
        return !!i && (i.updateFromAnnotationLayer(e), !0);
    }
    getEditor(t) {
        return f(ns, this)?.get(t) || null;
    }
    get modifiedIds() {
        if (f(ni, this)) return f(ni, this);
        let t = [];
        if (f(ns, this)) for (let e of f(ns, this).values()) e.serialize() && t.push(e.annotationElementId);
        return g(ni, this, { ids: new Set(t), hash: t.join(",") });
    }
    [s]() {
        return f(nn, this).entries();
    }
};
function no() {
    f(ne, this) || (g(ne, this, !0), "function" == typeof this.onSetModified && this.onSetModified());
}
var nl = new WeakMap(),
    nh = class extends nr {
        constructor(t) {
            super(), p(this, nl, void 0);
            const { map: e, hash: i, transfer: s } = t.serializable;
            g(nl, this, { map: structuredClone(e, s ? { transfer: s } : null), hash: i, transfer: s });
        }
        get print() {
            D("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
            return f(nl, this);
        }
        get modifiedIds() {
            return F(this, "modifiedIds", { ids: new Set(), hash: "" });
        }
    },
    nd = new WeakMap(),
    nc = class {
        constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
            p(this, nd, new Set()),
                (this._document = t),
                (this.nativeFontFaces = new Set()),
                (this.styleElement = null),
                (this.loadingRequests = []),
                (this.loadTestFontId = 0);
        }
        addNativeFontFace(t) {
            this.nativeFontFaces.add(t), this._document.fonts.add(t);
        }
        removeNativeFontFace(t) {
            this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
        }
        insertRule(t) {
            this.styleElement ||
                ((this.styleElement = this._document.createElement("style")),
                this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
            let e = this.styleElement.sheet;
            e.insertRule(t, e.cssRules.length);
        }
        clear() {
            for (let t of this.nativeFontFaces) this._document.fonts.delete(t);
            this.nativeFontFaces.clear(),
                f(nd, this).clear(),
                this.styleElement && (this.styleElement.remove(), (this.styleElement = null));
        }
        async loadSystemFont({ systemFontInfo: t, disableFontFace: e, _inspectFont: i }) {
            if (!(!t || f(nd, this).has(t.loadedName))) {
                if (
                    (I(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."),
                    this.isFontLoadingAPISupported)
                ) {
                    let { loadedName: e, src: s, style: n } = t,
                        a = new FontFace(e, s, n);
                    this.addNativeFontFace(a);
                    try {
                        await a.load(), f(nd, this).add(e), i?.(t);
                    } catch {
                        P(
                            `Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`,
                        ),
                            this.removeNativeFontFace(a);
                    }
                    return;
                }
                D("Not implemented: loadSystemFont without the Font Loading API.");
            }
        }
        async bind(t) {
            if (t.attached || (t.missingFile && !t.systemFontInfo)) return;
            if (((t.attached = !0), t.systemFontInfo)) return void (await this.loadSystemFont(t));
            if (this.isFontLoadingAPISupported) {
                let e = t.createNativeFontFace();
                if (e) {
                    this.addNativeFontFace(e);
                    try {
                        await e.loaded;
                    } catch (i) {
                        throw (P(`Failed to load font '${e.family}': '${i}'.`), (t.disableFontFace = !0), i);
                    }
                }
                return;
            }
            let e = t.createFontFaceRule();
            if (e) {
                if ((this.insertRule(e), this.isSyncFontLoadingSupported)) return;
                await new Promise((e) => {
                    let i = this._queueLoadingCallback(e);
                    this._prepareFontLoadEvent(t, i);
                });
            }
        }
        get isFontLoadingAPISupported() {
            return F(this, "isFontLoadingAPISupported", !!this._document?.fonts);
        }
        get isSyncFontLoadingSupported() {
            return F(this, "isSyncFontLoadingSupported", b || z.platform.isFirefox);
        }
        _queueLoadingCallback(t) {
            let { loadingRequests: e } = this,
                i = {
                    done: !1,
                    complete: function () {
                        for (
                            I(!i.done, "completeRequest() cannot be called twice."), i.done = !0;
                            e.length > 0 && e[0].done;
                        )
                            setTimeout(e.shift().callback, 0);
                    },
                    callback: t,
                };
            return e.push(i), i;
        }
        get _loadTestFont() {
            return F(
                this,
                "_loadTestFont",
                atob(
                    "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==",
                ),
            );
        }
        _prepareFontLoadEvent(t, e) {
            var i;
            let s, n;
            function a(t, e) {
                return (
                    (t.charCodeAt(e) << 24) |
                    (t.charCodeAt(e + 1) << 16) |
                    (t.charCodeAt(e + 2) << 8) |
                    (255 & t.charCodeAt(e + 3))
                );
            }
            function r(t, e, i, s) {
                return t.substring(0, e) + s + t.substring(e + i);
            }
            let o = this._document.createElement("canvas");
            (o.width = 1), (o.height = 1);
            let l = o.getContext("2d"),
                h = 0,
                d = `lt${Date.now()}${this.loadTestFontId++}`,
                c = this._loadTestFont,
                u = a((c = r(c, 976, d.length, d)), 16);
            for (s = 0, n = d.length - 3; s < n; s += 4) u = (u - 0x58585858 + a(d, s)) | 0;
            s < d.length && (u = (u - 0x58585858 + a(d + "XXX", s)) | 0),
                (c = r(c, 16, 4, String.fromCharCode(((i = u) >> 24) & 255, (i >> 16) & 255, (i >> 8) & 255, 255 & i)));
            let p = `@font-face {font-family:"${d}";src:url(data:font/opentype;base64,${btoa(c)});}`;
            this.insertRule(p);
            let g = this._document.createElement("div");
            for (let e of ((g.style.visibility = "hidden"),
            (g.style.width = g.style.height = "10px"),
            (g.style.position = "absolute"),
            (g.style.top = g.style.left = "0px"),
            [t.loadedName, d])) {
                let t = this._document.createElement("span");
                (t.textContent = "Hi"), (t.style.fontFamily = e), g.append(t);
            }
            this._document.body.append(g),
                (function t(e, i) {
                    if (++h > 30) {
                        P("Load test font never loaded."), i();
                        return;
                    }
                    ((l.font = "30px " + e), l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0)
                        ? i()
                        : setTimeout(t.bind(null, e, i));
                })(d, () => {
                    g.remove(), e.complete();
                });
        }
    },
    nu = new WeakMap(),
    np = class {
        constructor(t, e = null, i, s) {
            p(this, nu, void 0),
                (this.compiledGlyphs = Object.create(null)),
                g(nu, this, t),
                (this._inspectFont = e),
                i && Object.assign(this, i),
                s && (this.charProcOperatorList = s);
        }
        createNativeFontFace() {
            let t;
            if (!this.data || this.disableFontFace) return null;
            if (this.cssFontInfo) {
                let e = { weight: this.cssFontInfo.fontWeight };
                this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
                    (t = new FontFace(this.cssFontInfo.fontFamily, this.data, e));
            } else t = new FontFace(this.loadedName, this.data, {});
            return this._inspectFont?.(this), t;
        }
        createFontFaceRule() {
            let t;
            if (!this.data || this.disableFontFace) return null;
            let e = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
            if (this.cssFontInfo) {
                let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
                    (t = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${e}}`);
            } else t = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
            return this._inspectFont?.(this, e), t;
        }
        getPathGenerator(t, e) {
            let i;
            if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
            let s = this.loadedName + "_path_" + e;
            try {
                i = t.get(s);
            } catch (t) {
                P(`getPathGenerator - ignoring character: "${t}".`);
            }
            let n = tT(i?.path);
            return this.fontExtraProperties || t.delete(s), (this.compiledGlyphs[e] = n);
        }
        get black() {
            return f(nu, this).black;
        }
        get bold() {
            return f(nu, this).bold;
        }
        get disableFontFace() {
            return f(nu, this).disableFontFace ?? !1;
        }
        set disableFontFace(t) {
            F(this, "disableFontFace", !!t);
        }
        get fontExtraProperties() {
            return f(nu, this).fontExtraProperties ?? !1;
        }
        get isInvalidPDFjsFont() {
            return f(nu, this).isInvalidPDFjsFont;
        }
        get isType3Font() {
            return f(nu, this).isType3Font;
        }
        get italic() {
            return f(nu, this).italic;
        }
        get missingFile() {
            return f(nu, this).missingFile;
        }
        get remeasure() {
            return f(nu, this).remeasure;
        }
        get vertical() {
            return f(nu, this).vertical;
        }
        get ascent() {
            return f(nu, this).ascent;
        }
        get defaultWidth() {
            return f(nu, this).defaultWidth;
        }
        get descent() {
            return f(nu, this).descent;
        }
        get bbox() {
            return f(nu, this).bbox;
        }
        set bbox(t) {
            F(this, "bbox", t);
        }
        get fontMatrix() {
            return f(nu, this).fontMatrix;
        }
        get fallbackName() {
            return f(nu, this).fallbackName;
        }
        get loadedName() {
            return f(nu, this).loadedName;
        }
        get mimetype() {
            return f(nu, this).mimetype;
        }
        get name() {
            return f(nu, this).name;
        }
        get data() {
            return f(nu, this).data;
        }
        clearData() {
            f(nu, this).clearData();
        }
        get cssFontInfo() {
            return f(nu, this).cssFontInfo;
        }
        get systemFontInfo() {
            return f(nu, this).systemFontInfo;
        }
        get defaultVMetrics() {
            return f(nu, this).defaultVMetrics;
        }
    },
    ng = new WeakMap(),
    nf = new WeakMap(),
    nm = new WeakMap(),
    nw = new WeakSet(),
    nb = class t {
        static write(e) {
            let i = new TextEncoder(),
                s = {},
                n = 0;
            for (let a of t.strings) {
                let t = i.encode(e[a]);
                (s[a] = t), (n += 4 + t.length);
            }
            let a = new ArrayBuffer(n),
                r = new Uint8Array(a),
                o = new DataView(a),
                l = 0;
            for (let e of t.strings) {
                let t = s[e],
                    i = t.length;
                o.setUint32(l, i), r.set(t, l + 4), (l += 4 + i);
            }
            return I(l === a.byteLength, "CssFontInfo.write: Buffer overflow"), a;
        }
        constructor(t) {
            u(this, nw),
                p(this, ng, void 0),
                p(this, nf, void 0),
                p(this, nm, void 0),
                g(ng, this, t),
                g(nf, this, new DataView(f(ng, this))),
                g(nm, this, new TextDecoder());
        }
        get fontFamily() {
            return d(nw, this, nv).call(this, 0);
        }
        get fontWeight() {
            return d(nw, this, nv).call(this, 1);
        }
        get italicAngle() {
            return d(nw, this, nv).call(this, 2);
        }
    };
function nv(t) {
    I(t < nb.strings.length, "Invalid string index");
    let e = 0;
    for (let i = 0; i < t; i++) e += f(nf, this).getUint32(e) + 4;
    let i = f(nf, this).getUint32(e);
    return f(nm, this).decode(new Uint8Array(f(ng, this), e + 4, i));
}
(0, o.t)(nb, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
var nA = new WeakMap(),
    ny = new WeakMap(),
    n_ = new WeakMap(),
    nx = new WeakSet(),
    nk = class t {
        static write(e) {
            let i = new TextEncoder(),
                s = {},
                n = 0;
            for (let a of t.strings) {
                let t = i.encode(e[a]);
                (s[a] = t), (n += 4 + t.length);
            }
            let a,
                r,
                o = 1 + (n += 4);
            e.style &&
                ((a = i.encode(e.style.style)), (r = i.encode(e.style.weight)), (o += 4 + a.length + 4 + r.length));
            let l = new ArrayBuffer(o),
                h = new Uint8Array(l),
                d = new DataView(l),
                c = 0;
            for (let i of (d.setUint8(c++, +!!e.guessFallback), d.setUint32(c, 0), (c += 4), (n = 0), t.strings)) {
                let t = s[i],
                    e = t.length;
                (n += 4 + e), d.setUint32(c, e), h.set(t, c + 4), (c += 4 + e);
            }
            return (
                d.setUint32(c - n - 4, n),
                e.style &&
                    (d.setUint32(c, a.length),
                    h.set(a, c + 4),
                    (c += 4 + a.length),
                    d.setUint32(c, r.length),
                    h.set(r, c + 4),
                    (c += 4 + r.length)),
                I(c <= l.byteLength, "SubstitionInfo.write: Buffer overflow"),
                l.transferToFixedLength(c)
            );
        }
        constructor(t) {
            u(this, nx),
                p(this, nA, void 0),
                p(this, ny, void 0),
                p(this, n_, void 0),
                g(nA, this, t),
                g(ny, this, new DataView(f(nA, this))),
                g(n_, this, new TextDecoder());
        }
        get guessFallback() {
            return 0 !== f(ny, this).getUint8(0);
        }
        get css() {
            return d(nx, this, nM).call(this, 0);
        }
        get loadedName() {
            return d(nx, this, nM).call(this, 1);
        }
        get baseFontName() {
            return d(nx, this, nM).call(this, 2);
        }
        get src() {
            return d(nx, this, nM).call(this, 3);
        }
        get style() {
            let t = 1;
            t += 4 + f(ny, this).getUint32(t);
            let e = f(ny, this).getUint32(t),
                i = f(n_, this).decode(new Uint8Array(f(nA, this), t + 4, e));
            t += 4 + e;
            let s = f(ny, this).getUint32(t);
            return { style: i, weight: f(n_, this).decode(new Uint8Array(f(nA, this), t + 4, s)) };
        }
    };
function nM(t) {
    I(t < nk.strings.length, "Invalid string index");
    let e = 5;
    for (let i = 0; i < t; i++) e += f(ny, this).getUint32(e) + 4;
    let i = f(ny, this).getUint32(e);
    return f(n_, this).decode(new Uint8Array(f(nA, this), e + 4, i));
}
(0, o.t)(nk, "strings", ["css", "loadedName", "baseFontName", "src"]);
var nS = new WeakMap(),
    nE = new WeakMap(),
    nC = new WeakMap(),
    nT = new WeakSet(),
    nP = class t {
        constructor({ data: t, extra: e }) {
            u(this, nT),
                p(this, nS, void 0),
                p(this, nE, void 0),
                p(this, nC, void 0),
                g(nS, this, t),
                g(nE, this, new TextDecoder()),
                g(nC, this, new DataView(f(nS, this))),
                e && Object.assign(this, e);
        }
        get black() {
            return d(nT, this, nD).call(this, 0);
        }
        get bold() {
            return d(nT, this, nD).call(this, 1);
        }
        get disableFontFace() {
            return d(nT, this, nD).call(this, 2);
        }
        get fontExtraProperties() {
            return d(nT, this, nD).call(this, 3);
        }
        get isInvalidPDFjsFont() {
            return d(nT, this, nD).call(this, 4);
        }
        get isType3Font() {
            return d(nT, this, nD).call(this, 5);
        }
        get italic() {
            return d(nT, this, nD).call(this, 6);
        }
        get missingFile() {
            return d(nT, this, nD).call(this, 7);
        }
        get remeasure() {
            return d(nT, this, nD).call(this, 8);
        }
        get vertical() {
            return d(nT, this, nD).call(this, 9);
        }
        get ascent() {
            return d(nT, this, nI).call(this, 0);
        }
        get defaultWidth() {
            return d(nT, this, nI).call(this, 1);
        }
        get descent() {
            return d(nT, this, nI).call(this, 2);
        }
        get bbox() {
            let t = nF._;
            if (0 === f(nC, this).getUint8(t)) return;
            t += 1;
            let e = [];
            for (let i = 0; i < 4; i++) e.push(f(nC, this).getInt16(t, !0)), (t += 2);
            return e;
        }
        get fontMatrix() {
            let t = nN._;
            if (0 === f(nC, this).getUint8(t)) return;
            t += 1;
            let e = [];
            for (let i = 0; i < 6; i++) e.push(f(nC, this).getFloat64(t, !0)), (t += 8);
            return e;
        }
        get defaultVMetrics() {
            let t = nB._;
            if (0 === f(nC, this).getUint8(t)) return;
            t += 1;
            let e = [];
            for (let i = 0; i < 3; i++) e.push(f(nC, this).getInt16(t, !0)), (t += 2);
            return e;
        }
        get fallbackName() {
            return d(nT, this, nL).call(this, 0);
        }
        get loadedName() {
            return d(nT, this, nL).call(this, 1);
        }
        get mimetype() {
            return d(nT, this, nL).call(this, 2);
        }
        get name() {
            return d(nT, this, nL).call(this, 3);
        }
        get data() {
            let t = nO._,
                e = f(nC, this).getUint32(t);
            t += 4 + e;
            let i = f(nC, this).getUint32(t);
            t += 4 + i;
            let s = f(nC, this).getUint32(t);
            t += 4 + s;
            let n = f(nC, this).getUint32(t);
            if (0 !== n) return new Uint8Array(f(nS, this), t + 4, n);
        }
        clearData() {
            let t = nO._,
                e = f(nC, this).getUint32(t);
            t += 4 + e;
            let i = f(nC, this).getUint32(t);
            t += 4 + i;
            let s = f(nC, this).getUint32(t);
            t += 4 + s;
            let n = f(nC, this).getUint32(t);
            new Uint8Array(f(nS, this), t + 4, n).fill(0), f(nC, this).setUint32(t, 0);
        }
        get cssFontInfo() {
            let t = nO._,
                e = f(nC, this).getUint32(t);
            t += 4 + e;
            let i = f(nC, this).getUint32(t);
            t += 4 + i;
            let s = f(nC, this).getUint32(t);
            if (0 === s) return null;
            let n = new Uint8Array(s);
            return n.set(new Uint8Array(f(nS, this), t + 4, s)), new nb(n.buffer);
        }
        get systemFontInfo() {
            let t = nO._,
                e = f(nC, this).getUint32(t);
            t += 4 + e;
            let i = f(nC, this).getUint32(t);
            if (0 === i) return null;
            let s = new Uint8Array(i);
            return s.set(new Uint8Array(f(nS, this), t + 4, i)), new nk(s.buffer);
        }
        static write(e) {
            let i = e.systemFontInfo ? nk.write(e.systemFontInfo) : null,
                s = e.cssFontInfo ? nb.write(e.cssFontInfo) : null,
                n = new TextEncoder(),
                a = {},
                r = 0;
            for (let i of t.strings) (a[i] = n.encode(e[i])), (r += 4 + a[i].length);
            let o = new ArrayBuffer(
                    nO._ +
                        4 +
                        r +
                        4 +
                        (i ? i.byteLength : 0) +
                        4 +
                        (s ? s.byteLength : 0) +
                        4 +
                        (e.data ? e.data.length : 0),
                ),
                l = new Uint8Array(o),
                h = new DataView(o),
                d = 0,
                c = t.bools.length,
                u = 0,
                p = 0;
            for (let i = 0; i < c; i++) {
                let s = e[t.bools[i]];
                (u |= (void 0 === s ? 0 : s ? 2 : 1) << p),
                    (8 === (p += 2) || i === c - 1) && (h.setUint8(d++, u), (u = 0), (p = 0));
            }
            for (let i of (I(d === nR._, "FontInfo.write: Boolean properties offset mismatch"), t.numbers))
                h.setFloat64(d, e[i]), (d += 8);
            if ((I(d === nF._, "FontInfo.write: Number properties offset mismatch"), e.bbox))
                for (let t of (h.setUint8(d++, 4), e.bbox)) h.setInt16(d, t, !0), (d += 2);
            else h.setUint8(d++, 0), (d += 8);
            if ((I(d === nN._, "FontInfo.write: BBox properties offset mismatch"), e.fontMatrix))
                for (let t of (h.setUint8(d++, 6), e.fontMatrix)) h.setFloat64(d, t, !0), (d += 8);
            else h.setUint8(d++, 0), (d += 48);
            if ((I(d === nB._, "FontInfo.write: FontMatrix properties offset mismatch"), e.defaultVMetrics))
                for (let t of (h.setUint8(d++, 1), e.defaultVMetrics)) h.setInt16(d, t, !0), (d += 2);
            else h.setUint8(d++, 0), (d += 6);
            for (let e of (I(d === nO._, "FontInfo.write: DefaultVMetrics properties offset mismatch"),
            h.setUint32(nO._, 0),
            (d += 4),
            t.strings)) {
                let t = a[e],
                    i = t.length;
                h.setUint32(d, i), l.set(t, d + 4), (d += 4 + i);
            }
            if ((h.setUint32(nO._, d - nO._ - 4), i)) {
                let t = i.byteLength;
                h.setUint32(d, t),
                    I(d + 4 + t <= o.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"),
                    l.set(new Uint8Array(i), d + 4),
                    (d += 4 + t);
            } else h.setUint32(d, 0), (d += 4);
            if (s) {
                let t = s.byteLength;
                h.setUint32(d, t),
                    I(d + 4 + t <= o.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"),
                    l.set(new Uint8Array(s), d + 4),
                    (d += 4 + t);
            } else h.setUint32(d, 0), (d += 4);
            return (
                void 0 === e.data
                    ? (h.setUint32(d, 0), (d += 4))
                    : (h.setUint32(d, e.data.length), l.set(e.data, d + 4), (d += 4 + e.data.length)),
                I(d <= o.byteLength, "FontInfo.write: Buffer overflow"),
                o.transferToFixedLength(d)
            );
        }
    };
function nD(t) {
    I(t < nP.bools.length, "Invalid boolean index");
    let e = Math.floor(t / 4),
        i = (f(nC, this).getUint8(e) >> ((2 * t) % 8)) & 3;
    return 0 === i ? void 0 : 2 === i;
}
function nI(t) {
    return I(t < nP.numbers.length, "Invalid number index"), f(nC, this).getFloat64(nR._ + 8 * t);
}
function nL(t) {
    I(t < nP.strings.length, "Invalid string index");
    let e = nO._ + 4;
    for (let i = 0; i < t; i++) e += f(nC, this).getUint32(e) + 4;
    let i = f(nC, this).getUint32(e),
        s = new Uint8Array(i);
    return s.set(new Uint8Array(f(nS, this), e + 4, i)), f(nE, this).decode(s);
}
(0, o.t)(nP, "bools", [
    "black",
    "bold",
    "disableFontFace",
    "fontExtraProperties",
    "isInvalidPDFjsFont",
    "isType3Font",
    "italic",
    "missingFile",
    "remeasure",
    "vertical",
]),
    (0, o.t)(nP, "numbers", ["ascent", "defaultWidth", "descent"]),
    (0, o.t)(nP, "strings", ["fallbackName", "loadedName", "mimetype", "name"]);
var nR = { _: Math.ceil((2 * nP.bools.length) / 8) },
    nF = { _: d(nP, nP, nR)._ + 8 * nP.numbers.length },
    nN = { _: d(nP, nP, nF)._ + 1 + 8 },
    nB = { _: d(nP, nP, nN)._ + 1 + 48 },
    nO = { _: d(nP, nP, nB)._ + 1 + 6 },
    nW = class {
        constructor(t) {
            (this.buffer = t), (this.view = new DataView(t)), (this.data = new Uint8Array(t));
        }
        static write(t) {
            let e,
                i = null,
                s = [],
                n = [],
                a = [],
                r = [],
                o = null,
                l = null;
            switch (t[0]) {
                case "RadialAxial":
                    (e = "axial" === t[1] ? 1 : 2),
                        (i = t[2]),
                        (a = t[3]),
                        1 === e ? s.push(...t[4], ...t[5]) : s.push(t[4][0], t[4][1], t[6], t[5][0], t[5][1], t[7]);
                    break;
                case "Mesh":
                    (e = 3), (o = t[1]), (s = t[2]), (n = t[3]), (r = t[4] || []), (i = t[6]), (l = t[7]);
                    break;
                default:
                    throw Error(`Unsupported pattern type: ${t[0]}`);
            }
            let h = Math.floor(s.length / 2),
                d = Math.floor(n.length / 3),
                c = a.length,
                u = r.length,
                p = 0;
            for (let t of r)
                (p += 1),
                    (p = 4 * Math.ceil(p / 4) + (4 + 4 * t.coords.length) + (4 + 4 * t.colors.length)),
                    void 0 !== t.verticesPerRow && (p += 4);
            let g = new ArrayBuffer(20 + 8 * h + 3 * d + 8 * c + 16 * !!i + 3 * !!l + p),
                f = new DataView(g),
                m = new Uint8Array(g);
            f.setUint8(nU._, e),
                f.setUint8(n$._, +!!i),
                f.setUint8(nH._, +!!l),
                f.setUint8(nj._, o),
                f.setUint32(nz._, h, !0),
                f.setUint32(nG._, d, !0),
                f.setUint32(nV._, c, !0),
                f.setUint32(nq._, u, !0);
            let w = 20;
            for (let [t, e] of (new Float32Array(g, 20, 2 * h).set(s), (w += 8 * h), m.set(n, w), (w += 3 * d), a))
                f.setFloat32(w, t, !0), (w += 4), f.setUint32(w, parseInt(e.slice(1), 16), !0), (w += 4);
            if (i) for (let t of i) f.setFloat32(w, t, !0), (w += 4);
            l && (m.set(l, w), (w += 3));
            for (let t = 0; t < r.length; t++) {
                let e = r[t];
                f.setUint8(w, e.type),
                    (w += 1),
                    (w = 4 * Math.ceil(w / 4)),
                    f.setUint32(w, e.coords.length, !0),
                    new Int32Array(g, (w += 4), e.coords.length).set(e.coords),
                    (w += 4 * e.coords.length),
                    f.setUint32(w, e.colors.length, !0),
                    new Int32Array(g, (w += 4), e.colors.length).set(e.colors),
                    (w += 4 * e.colors.length),
                    void 0 !== e.verticesPerRow && (f.setUint32(w, e.verticesPerRow, !0), (w += 4));
            }
            return g;
        }
        getIR() {
            let t = this.view,
                e = this.data[nU._],
                i = !!this.data[n$._],
                s = !!this.data[nH._],
                n = t.getUint32(nz._, !0),
                a = t.getUint32(nG._, !0),
                r = t.getUint32(nV._, !0),
                o = t.getUint32(nq._, !0),
                l = 20,
                h = new Float32Array(this.buffer, l, 2 * n);
            l += 8 * n;
            let d = new Uint8Array(this.buffer, l, 3 * a);
            l += 3 * a;
            let c = [];
            for (let e = 0; e < r; ++e) {
                let e = t.getFloat32(l, !0);
                l += 4;
                let i = t.getUint32(l, !0);
                (l += 4), c.push([e, `#${i.toString(16).padStart(6, "0")}`]);
            }
            let u = null;
            if (i) {
                u = [];
                for (let e = 0; e < 4; ++e) u.push(t.getFloat32(l, !0)), (l += 4);
            }
            let p = null;
            s && ((p = new Uint8Array(this.buffer, l, 3)), (l += 3));
            let g = [];
            for (let e = 0; e < o; ++e) {
                let e = t.getUint8(l);
                (l += 1), (l = 4 * Math.ceil(l / 4));
                let i = t.getUint32(l, !0);
                l += 4;
                let s = new Int32Array(this.buffer, l, i);
                l += 4 * i;
                let n = t.getUint32(l, !0);
                l += 4;
                let a = new Int32Array(this.buffer, l, n);
                l += 4 * n;
                let r = { type: e, coords: s, colors: a };
                2 === e && ((r.verticesPerRow = t.getUint32(l, !0)), (l += 4)), g.push(r);
            }
            if (1 === e)
                return ["RadialAxial", "axial", u, c, Array.from(h.slice(0, 2)), Array.from(h.slice(2, 4)), null, null];
            if (2 === e) return ["RadialAxial", "radial", u, c, [h[0], h[1]], [h[3], h[4]], h[2], h[5]];
            if (3 === e) {
                let t = this.data[nj._],
                    e = null;
                if (h.length > 0) {
                    let t = h[0],
                        i = h[0],
                        s = h[1],
                        n = h[1];
                    for (let e = 0; e < h.length; e += 2) {
                        let a = h[e],
                            r = h[e + 1];
                        (t = t > a ? a : t), (s = s > r ? r : s), (i = i < a ? a : i), (n = n < r ? r : n);
                    }
                    e = [t, s, i, n];
                }
                return ["Mesh", t, h, d, g, e, u, p];
            }
            throw Error(`Unsupported pattern kind: ${e}`);
        }
    },
    nU = { _: 0 },
    n$ = { _: 1 },
    nH = { _: 2 },
    nj = { _: 3 },
    nz = { _: 4 },
    nG = { _: 8 },
    nV = { _: 12 },
    nq = { _: 16 },
    nX = new WeakMap(),
    nK = class {
        static write(t) {
            let e;
            return (
                (z.isFloat16ArraySupported
                    ? new Float16Array((e = new ArrayBuffer(2 * t.length)))
                    : new Float32Array((e = new ArrayBuffer(4 * t.length)))
                ).set(t),
                e
            );
        }
        constructor(t) {
            p(this, nX, void 0), g(nX, this, t);
        }
        get path() {
            return z.isFloat16ArraySupported ? new Float16Array(f(nX, this)) : new Float32Array(f(nX, this));
        }
    };
function nY(t) {
    if ("string" != typeof t) return null;
    if (t.endsWith("/")) return t;
    throw Error(`Invalid factory url: "${t}" must include trailing slash.`);
}
var nQ = (t) =>
        "object" == typeof t && Number.isInteger(t?.num) && t.num >= 0 && Number.isInteger(t?.gen) && t.gen >= 0,
    nJ = function (t, e, i) {
        if (!Array.isArray(i) || i.length < 2) return !1;
        let [s, n, ...a] = i;
        if ((!t(s) && !Number.isInteger(s)) || !e(n)) return !1;
        let r = a.length,
            o = !0;
        switch (n.name) {
            case "XYZ":
                if (r < 2 || r > 3) return !1;
                break;
            case "Fit":
            case "FitB":
                return 0 === r;
            case "FitH":
            case "FitBH":
            case "FitV":
            case "FitBV":
                if (r > 1) return !1;
                break;
            case "FitR":
                if (4 !== r) return !1;
                o = !1;
                break;
            default:
                return !1;
        }
        for (let t of a) if ("number" != typeof t && (!o || null !== t)) return !1;
        return !0;
    }.bind(null, nQ, (t) => "object" == typeof t && "string" == typeof t?.name),
    nZ = new WeakMap(),
    n0 = new WeakMap(),
    n1 = class {
        constructor() {
            p(this, nZ, new Map()), p(this, n0, Promise.resolve());
        }
        postMessage(t, e) {
            let i = { data: structuredClone(t, e ? { transfer: e } : null) };
            f(n0, this).then(() => {
                for (let [t] of f(nZ, this)) t.call(this, i);
            });
        }
        addEventListener(t, e, i = null) {
            let s = null;
            if (i?.signal instanceof AbortSignal) {
                let { signal: n } = i;
                if (n.aborted) return void P("LoopbackPort - cannot use an `aborted` signal.");
                let a = () => this.removeEventListener(t, e);
                (s = () => n.removeEventListener("abort", a)), n.addEventListener("abort", a);
            }
            f(nZ, this).set(e, s);
        }
        removeEventListener(t, e) {
            f(nZ, this).get(e)?.(), f(nZ, this).delete(e);
        }
        terminate() {
            for (let [, t] of f(nZ, this)) t?.();
            f(nZ, this).clear();
        }
    };
function n2() {}
function n3(t) {
    if (t instanceof H || t instanceof W || t instanceof B || t instanceof U || t instanceof O) return t;
    switch (
        (!(t instanceof Error || ("object" == typeof t && null !== t)) &&
            D('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),
        t.name)
    ) {
        case "AbortException":
            return new H(t.message);
        case "InvalidPDFException":
            return new W(t.message);
        case "PasswordException":
            return new B(t.message, t.code);
        case "ResponseException":
            return new U(t.message, t.status, t.missing);
        case "UnknownErrorException":
            return new O(t.message, t.details);
    }
    return new O(t.message, t.toString());
}
var n5 = new WeakMap(),
    n4 = new WeakSet(),
    n6 = class {
        constructor(t, e, i) {
            u(this, n4),
                p(this, n5, new AbortController()),
                (this.sourceName = t),
                (this.targetName = e),
                (this.comObj = i),
                (this.callbackId = 1),
                (this.streamId = 1),
                (this.streamSinks = Object.create(null)),
                (this.streamControllers = Object.create(null)),
                (this.callbackCapabilities = Object.create(null)),
                (this.actionHandler = Object.create(null)),
                i.addEventListener("message", d(n4, this, n8).bind(this), { signal: f(n5, this).signal });
        }
        on(t, e) {
            let i = this.actionHandler;
            if (i[t]) throw Error(`There is already an actionName called "${t}"`);
            i[t] = e;
        }
        send(t, e, i) {
            this.comObj.postMessage(
                { sourceName: this.sourceName, targetName: this.targetName, action: t, data: e },
                i,
            );
        }
        sendWithPromise(t, e, i) {
            let s = this.callbackId++,
                n = Promise.withResolvers();
            this.callbackCapabilities[s] = n;
            try {
                this.comObj.postMessage(
                    { sourceName: this.sourceName, targetName: this.targetName, action: t, callbackId: s, data: e },
                    i,
                );
            } catch (t) {
                n.reject(t);
            }
            return n.promise;
        }
        sendWithStream(t, e, i, s) {
            let n = this.streamId++,
                a = this.sourceName,
                r = this.targetName,
                o = this.comObj;
            return new ReadableStream(
                {
                    start: (i) => {
                        let l = Promise.withResolvers();
                        return (
                            (this.streamControllers[n] = {
                                controller: i,
                                startCall: l,
                                pullCall: null,
                                cancelCall: null,
                                isClosed: !1,
                            }),
                            o.postMessage(
                                {
                                    sourceName: a,
                                    targetName: r,
                                    action: t,
                                    streamId: n,
                                    data: e,
                                    desiredSize: i.desiredSize,
                                },
                                s,
                            ),
                            l.promise
                        );
                    },
                    pull: (t) => {
                        let e = Promise.withResolvers();
                        return (
                            (this.streamControllers[n].pullCall = e),
                            o.postMessage({
                                sourceName: a,
                                targetName: r,
                                stream: 6,
                                streamId: n,
                                desiredSize: t.desiredSize,
                            }),
                            e.promise
                        );
                    },
                    cancel: (t) => {
                        I(t instanceof Error, "cancel must have a valid reason");
                        let e = Promise.withResolvers();
                        return (
                            (this.streamControllers[n].cancelCall = e),
                            (this.streamControllers[n].isClosed = !0),
                            o.postMessage({ sourceName: a, targetName: r, stream: 1, streamId: n, reason: n3(t) }),
                            e.promise
                        );
                    },
                },
                i,
            );
        }
        destroy() {
            f(n5, this)?.abort(), g(n5, this, null);
        }
    };
function n8({ data: t }) {
    if (t.targetName !== this.sourceName) return;
    if (t.stream) return void d(n4, this, n9).call(this, t);
    if (t.callback) {
        let e = t.callbackId,
            i = this.callbackCapabilities[e];
        if (!i) throw Error(`Cannot resolve callback ${e}`);
        if ((delete this.callbackCapabilities[e], 1 === t.callback)) i.resolve(t.data);
        else if (2 === t.callback) i.reject(n3(t.reason));
        else throw Error("Unexpected callback case");
        return;
    }
    let e = this.actionHandler[t.action];
    if (!e) throw Error(`Unknown action from worker: ${t.action}`);
    if (t.callbackId) {
        let i = this.sourceName,
            s = t.sourceName,
            n = this.comObj;
        Promise.try(e, t.data).then(
            function (e) {
                n.postMessage({ sourceName: i, targetName: s, callback: 1, callbackId: t.callbackId, data: e });
            },
            function (e) {
                n.postMessage({ sourceName: i, targetName: s, callback: 2, callbackId: t.callbackId, reason: n3(e) });
            },
        );
        return;
    }
    t.streamId ? d(n4, this, n7).call(this, t) : e(t.data);
}
function n7(t) {
    let e = t.streamId,
        i = this.sourceName,
        s = t.sourceName,
        n = this.comObj,
        a = this,
        r = this.actionHandler[t.action],
        o = {
            enqueue(t, a = 1, r) {
                if (this.isCancelled) return;
                let o = this.desiredSize;
                (this.desiredSize -= a),
                    o > 0 &&
                        this.desiredSize <= 0 &&
                        ((this.sinkCapability = Promise.withResolvers()), (this.ready = this.sinkCapability.promise)),
                    n.postMessage({ sourceName: i, targetName: s, stream: 4, streamId: e, chunk: t }, r);
            },
            close() {
                this.isCancelled ||
                    ((this.isCancelled = !0),
                    n.postMessage({ sourceName: i, targetName: s, stream: 3, streamId: e }),
                    delete a.streamSinks[e]);
            },
            error(t) {
                I(t instanceof Error, "error must have a valid reason"),
                    this.isCancelled ||
                        ((this.isCancelled = !0),
                        n.postMessage({ sourceName: i, targetName: s, stream: 5, streamId: e, reason: n3(t) }));
            },
            sinkCapability: Promise.withResolvers(),
            onPull: null,
            onCancel: null,
            isCancelled: !1,
            desiredSize: t.desiredSize,
            ready: null,
        };
    o.sinkCapability.resolve(),
        (o.ready = o.sinkCapability.promise),
        (this.streamSinks[e] = o),
        Promise.try(r, t.data, o).then(
            function () {
                n.postMessage({ sourceName: i, targetName: s, stream: 8, streamId: e, success: !0 });
            },
            function (t) {
                n.postMessage({ sourceName: i, targetName: s, stream: 8, streamId: e, reason: n3(t) });
            },
        );
}
function n9(t) {
    let e = t.streamId,
        i = this.sourceName,
        s = t.sourceName,
        n = this.comObj,
        a = this.streamControllers[e],
        r = this.streamSinks[e];
    switch (t.stream) {
        case 8:
            t.success ? a.startCall.resolve() : a.startCall.reject(n3(t.reason));
            break;
        case 7:
            t.success ? a.pullCall.resolve() : a.pullCall.reject(n3(t.reason));
            break;
        case 6:
            if (!r) {
                n.postMessage({ sourceName: i, targetName: s, stream: 7, streamId: e, success: !0 });
                break;
            }
            r.desiredSize <= 0 && t.desiredSize > 0 && r.sinkCapability.resolve(),
                (r.desiredSize = t.desiredSize),
                Promise.try(r.onPull || n2).then(
                    function () {
                        n.postMessage({ sourceName: i, targetName: s, stream: 7, streamId: e, success: !0 });
                    },
                    function (t) {
                        n.postMessage({ sourceName: i, targetName: s, stream: 7, streamId: e, reason: n3(t) });
                    },
                );
            break;
        case 4:
            if ((I(a, "enqueue should have stream controller"), a.isClosed)) break;
            a.controller.enqueue(t.chunk);
            break;
        case 3:
            if ((I(a, "close should have stream controller"), a.isClosed)) break;
            (a.isClosed = !0), a.controller.close(), d(n4, this, at).call(this, a, e);
            break;
        case 5:
            I(a, "error should have stream controller"),
                a.controller.error(n3(t.reason)),
                d(n4, this, at).call(this, a, e);
            break;
        case 2:
            t.success ? a.cancelCall.resolve() : a.cancelCall.reject(n3(t.reason)), d(n4, this, at).call(this, a, e);
            break;
        case 1:
            if (!r) break;
            let o = n3(t.reason);
            Promise.try(r.onCancel || n2, o).then(
                function () {
                    n.postMessage({ sourceName: i, targetName: s, stream: 2, streamId: e, success: !0 });
                },
                function (t) {
                    n.postMessage({ sourceName: i, targetName: s, stream: 2, streamId: e, reason: n3(t) });
                },
            ),
                r.sinkCapability.reject(o),
                (r.isCancelled = !0),
                delete this.streamSinks[e];
            break;
        default:
            throw Error("Unexpected stream case");
    }
}
async function at(t, e) {
    await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]),
        delete this.streamControllers[e];
}
var ae = new WeakMap(),
    ai = class {
        constructor({ enableHWA: t = !1 }) {
            p(this, ae, !1), g(ae, this, t);
        }
        create(t, e) {
            if (t <= 0 || e <= 0) throw Error("Invalid canvas size");
            let i = this._createCanvas(t, e);
            return { canvas: i, context: i.getContext("2d", { willReadFrequently: !f(ae, this) }) };
        }
        reset(t, e, i) {
            if (!t.canvas) throw Error("Canvas is not specified");
            if (e <= 0 || i <= 0) throw Error("Invalid canvas size");
            (t.canvas.width = e), (t.canvas.height = i);
        }
        destroy(t) {
            if (!t.canvas) throw Error("Canvas is not specified");
            (t.canvas.width = 0), (t.canvas.height = 0), (t.canvas = null), (t.context = null);
        }
        _createCanvas(t, e) {
            D("Abstract method `_createCanvas` called.");
        }
    },
    as = class extends ai {
        constructor({ ownerDocument: t = globalThis.document, enableHWA: e = !1 }) {
            super({ enableHWA: e }), (this._document = t);
        }
        _createCanvas(t, e) {
            let i = this._document.createElement("canvas");
            return (i.width = t), (i.height = e), i;
        }
    },
    an = class {
        constructor({ baseUrl: t = null, isCompressed: e = !0 }) {
            (this.baseUrl = t), (this.isCompressed = e);
        }
        async fetch({ name: t }) {
            if (!this.baseUrl) throw Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
            if (!t) throw Error("CMap name must be specified.");
            let e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
            return this._fetch(e)
                .then((t) => ({ cMapData: t, isCompressed: this.isCompressed }))
                .catch((t) => {
                    throw Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
                });
        }
        async _fetch(t) {
            D("Abstract method `_fetch` called.");
        }
    },
    aa = class extends an {
        async _fetch(t) {
            let e = await tn(t, this.isCompressed ? "arraybuffer" : "text");
            return e instanceof ArrayBuffer ? new Uint8Array(e) : j(e);
        }
    },
    ar = class {
        addFilter(t) {
            return "none";
        }
        addHCMFilter(t, e) {
            return "none";
        }
        addAlphaFilter(t) {
            return "none";
        }
        addLuminosityFilter(t) {
            return "none";
        }
        addHighlightHCMFilter(t, e, i, s, n) {
            return "none";
        }
        destroy(t = !1) {}
    },
    ao = new WeakMap(),
    al = new WeakMap(),
    ah = new WeakMap(),
    ad = new WeakMap(),
    ac = new WeakMap(),
    au = new WeakMap(),
    ap = new WeakMap(),
    ag = new WeakSet(),
    af = class extends ar {
        constructor({ docId: t, ownerDocument: e = globalThis.document }) {
            super(),
                u(this, ag),
                p(this, ao, void 0),
                p(this, al, void 0),
                p(this, ah, void 0),
                p(this, ad, void 0),
                p(this, ac, void 0),
                p(this, au, void 0),
                p(this, ap, 0),
                g(ad, this, t),
                g(ac, this, e);
        }
        addFilter(t) {
            var e, i;
            if (!t) return "none";
            let s = am.call(d(ag, this)).get(t);
            if (s) return s;
            let [n, a, r] = d(ag, this, av).call(this, t),
                o = 1 === t.length ? n : `${n}${a}${r}`;
            if ((s = am.call(d(ag, this)).get(o))) return am.call(d(ag, this)).set(t, s), s;
            let l = `g_${f(ad, this)}_transfer_map_${(g(ap, this, ((e = f(ap, this)), (i = e++), e)), i)}`,
                h = d(ag, this, aA).call(this, l);
            am.call(d(ag, this)).set(t, h), am.call(d(ag, this)).set(o, h);
            let c = d(ag, this, ax).call(this, l);
            return d(ag, this, aM).call(this, n, a, r, c), h;
        }
        addHCMFilter(t, e) {
            let i = `${t}-${e}`,
                s = "base",
                n = aw.call(d(ag, this)).get(s);
            if (
                n?.key === i ||
                (n
                    ? (n.filter?.remove(), (n.key = i), (n.url = "none"), (n.filter = null))
                    : ((n = { key: i, url: "none", filter: null }), aw.call(d(ag, this)).set(s, n)),
                !t || !e)
            )
                return n.url;
            let a = d(ag, this, aE).call(this, t);
            t = V.makeHexColor(...a);
            let r = d(ag, this, aE).call(this, e);
            if (
                ((e = V.makeHexColor(...r)),
                (ab.call(d(ag, this)).style.color = ""),
                ("#000000" === t && "#ffffff" === e) || t === e)
            )
                return n.url;
            let o = Array(256);
            for (let t = 0; t <= 255; t++) {
                let e = t / 255;
                o[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
            }
            let l = o.join(","),
                h = `g_${f(ad, this)}_hcm_filter`,
                c = (n.filter = d(ag, this, ax).call(this, h));
            d(ag, this, aM).call(this, l, l, l, c), d(ag, this, a_).call(this, c);
            let u = (t, e) => {
                let i = a[t] / 255,
                    s = r[t] / 255,
                    n = Array(e + 1);
                for (let t = 0; t <= e; t++) n[t] = i + (t / e) * (s - i);
                return n.join(",");
            };
            return (
                d(ag, this, aM).call(this, u(0, 5), u(1, 5), u(2, 5), c), (n.url = d(ag, this, aA).call(this, h)), n.url
            );
        }
        addAlphaFilter(t) {
            var e, i;
            let s = am.call(d(ag, this)).get(t);
            if (s) return s;
            let [n] = d(ag, this, av).call(this, [t]),
                a = `alpha_${n}`;
            if ((s = am.call(d(ag, this)).get(a))) return am.call(d(ag, this)).set(t, s), s;
            let r = `g_${f(ad, this)}_alpha_map_${(g(ap, this, ((e = f(ap, this)), (i = e++), e)), i)}`,
                o = d(ag, this, aA).call(this, r);
            am.call(d(ag, this)).set(t, o), am.call(d(ag, this)).set(a, o);
            let l = d(ag, this, ax).call(this, r);
            return d(ag, this, aS).call(this, n, l), o;
        }
        addLuminosityFilter(t) {
            var e, i;
            let s,
                n,
                a = am.call(d(ag, this)).get(t || "luminosity");
            if (a) return a;
            if (
                (t ? (([s] = d(ag, this, av).call(this, [t])), (n = `luminosity_${s}`)) : (n = "luminosity"),
                (a = am.call(d(ag, this)).get(n)))
            )
                return am.call(d(ag, this)).set(t, a), a;
            let r = `g_${f(ad, this)}_luminosity_map_${(g(ap, this, ((e = f(ap, this)), (i = e++), e)), i)}`,
                o = d(ag, this, aA).call(this, r);
            am.call(d(ag, this)).set(t, o), am.call(d(ag, this)).set(n, o);
            let l = d(ag, this, ax).call(this, r);
            return d(ag, this, ay).call(this, l), t && d(ag, this, aS).call(this, s, l), o;
        }
        addHighlightHCMFilter(t, e, i, s, n) {
            let a = `${e}-${i}-${s}-${n}`,
                r = aw.call(d(ag, this)).get(t);
            if (
                r?.key === a ||
                (r
                    ? (r.filter?.remove(), (r.key = a), (r.url = "none"), (r.filter = null))
                    : ((r = { key: a, url: "none", filter: null }), aw.call(d(ag, this)).set(t, r)),
                !e || !i)
            )
                return r.url;
            let [o, l] = [e, i].map(d(ag, this, aE).bind(this)),
                h = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]),
                c = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]),
                [u, p] = [s, n].map(d(ag, this, aE).bind(this));
            c < h && ([h, c, u, p] = [c, h, p, u]), (ab.call(d(ag, this)).style.color = "");
            let g = (t, e, i) => {
                    let s = Array(256),
                        n = (c - h) / i,
                        a = t / 255,
                        r = (e - t) / (255 * i),
                        o = 0;
                    for (let t = 0; t <= i; t++) {
                        let e = Math.round(h + t * n),
                            i = a + t * r;
                        for (let t = o; t <= e; t++) s[t] = i;
                        o = e + 1;
                    }
                    for (let t = o; t < 256; t++) s[t] = s[o - 1];
                    return s.join(",");
                },
                m = `g_${f(ad, this)}_hcm_${t}_filter`,
                w = (r.filter = d(ag, this, ax).call(this, m));
            return (
                d(ag, this, a_).call(this, w),
                d(ag, this, aM).call(this, g(u[0], p[0], 5), g(u[1], p[1], 5), g(u[2], p[2], 5), w),
                (r.url = d(ag, this, aA).call(this, m)),
                r.url
            );
        }
        destroy(t = !1) {
            (t && f(au, this)?.size) ||
                (f(ah, this)?.parentNode.parentNode.remove(),
                g(ah, this, null),
                f(al, this)?.clear(),
                g(al, this, null),
                f(au, this)?.clear(),
                g(au, this, null),
                g(ap, this, 0));
        }
    };
function am() {
    return f(al, this) || g(al, this, new Map());
}
function aw() {
    return f(au, this) || g(au, this, new Map());
}
function ab() {
    if (!f(ah, this)) {
        let t = f(ac, this).createElement("div"),
            { style: e } = t;
        (e.visibility = "hidden"),
            (e.contain = "strict"),
            (e.width = e.height = 0),
            (e.position = "absolute"),
            (e.top = e.left = 0),
            (e.zIndex = -1);
        let i = f(ac, this).createElementNS(ti, "svg");
        i.setAttribute("width", 0),
            i.setAttribute("height", 0),
            g(ah, this, f(ac, this).createElementNS(ti, "defs")),
            t.append(i),
            i.append(f(ah, this)),
            f(ac, this).body.append(t);
    }
    return f(ah, this);
}
function av(t) {
    if (1 === t.length) {
        let e = t[0],
            i = Array(256);
        for (let t = 0; t < 256; t++) i[t] = e[t] / 255;
        let s = i.join(",");
        return [s, s, s];
    }
    let [e, i, s] = t,
        n = Array(256),
        a = Array(256),
        r = Array(256);
    for (let t = 0; t < 256; t++) (n[t] = e[t] / 255), (a[t] = i[t] / 255), (r[t] = s[t] / 255);
    return [n.join(","), a.join(","), r.join(",")];
}
function aA(t) {
    if (void 0 === f(ao, this)) {
        g(ao, this, "");
        let t = f(ac, this).URL;
        t !== f(ac, this).baseURI &&
            (to(t) ? P('#createUrl: ignore "data:"-URL for performance reasons.') : g(ao, this, R(t, "")));
    }
    return `url(${f(ao, this)}#${t})`;
}
function ay(t) {
    let e = f(ac, this).createElementNS(ti, "feColorMatrix");
    e.setAttribute("type", "matrix"),
        e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"),
        t.append(e);
}
function a_(t) {
    let e = f(ac, this).createElementNS(ti, "feColorMatrix");
    e.setAttribute("type", "matrix"),
        e.setAttribute(
            "values",
            "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0",
        ),
        t.append(e);
}
function ax(t) {
    let e = f(ac, this).createElementNS(ti, "filter");
    return (
        e.setAttribute("color-interpolation-filters", "sRGB"),
        e.setAttribute("id", t),
        ab.call(d(ag, this)).append(e),
        e
    );
}
function ak(t, e, i) {
    let s = f(ac, this).createElementNS(ti, e);
    s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t.append(s);
}
function aM(t, e, i, s) {
    let n = f(ac, this).createElementNS(ti, "feComponentTransfer");
    s.append(n),
        d(ag, this, ak).call(this, n, "feFuncR", t),
        d(ag, this, ak).call(this, n, "feFuncG", e),
        d(ag, this, ak).call(this, n, "feFuncB", i);
}
function aS(t, e) {
    let i = f(ac, this).createElementNS(ti, "feComponentTransfer");
    e.append(i), d(ag, this, ak).call(this, i, "feFuncA", t);
}
function aE(t) {
    return (ab.call(d(ag, this)).style.color = t), tf(getComputedStyle(ab.call(d(ag, this))).getPropertyValue("color"));
}
var aC = class {
        constructor({ baseUrl: t = null }) {
            this.baseUrl = t;
        }
        async fetch({ filename: t }) {
            if (!this.baseUrl) throw Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
            if (!t) throw Error("Font filename must be specified.");
            let e = `${this.baseUrl}${t}`;
            return this._fetch(e).catch((t) => {
                throw Error(`Unable to load font data at: ${e}`);
            });
        }
        async _fetch(t) {
            D("Abstract method `_fetch` called.");
        }
    },
    aT = class extends aC {
        async _fetch(t) {
            return new Uint8Array(await tn(t, "arraybuffer"));
        }
    },
    aP = class {
        constructor({ baseUrl: t = null }) {
            this.baseUrl = t;
        }
        async fetch({ filename: t }) {
            if (!this.baseUrl) throw Error("Ensure that the `wasmUrl` API parameter is provided.");
            if (!t) throw Error("Wasm filename must be specified.");
            let e = `${this.baseUrl}${t}`;
            return this._fetch(e).catch((t) => {
                throw Error(`Unable to load wasm data at: ${e}`);
            });
        }
        async _fetch(t) {
            D("Abstract method `_fetch` called.");
        }
    },
    aD = class extends aP {
        async _fetch(t) {
            return new Uint8Array(await tn(t, "arraybuffer"));
        }
    };
async function aI(t) {
    return new Uint8Array(await l.getBuiltinModule("fs").promises.readFile(t));
}
b && P("Please use the `legacy` build in Node.js environments.");
var aL = class extends ar {},
    aR = class extends ai {
        _createCanvas(t, e) {
            return l
                .getBuiltinModule("module")
                .createRequire(
                    "file:///ci/build/discord/discord/node_modules/.pnpm/@incodetech+web@2.1.0_@zxing+library@0.21.3_encoding@0.1.13_preact@10.26.4_typescript@6.0.2_v_bek76oasnwlgogaa7x5jmd75me/node_modules/@incodetech/web/dist/pdf-BqtJTlor.js",
                )("@napi-rs/canvas")
                .createCanvas(t, e);
        }
    },
    aF = class extends an {
        async _fetch(t) {
            return aI(t);
        }
    },
    aN = class extends aC {
        async _fetch(t) {
            return aI(t);
        }
    },
    aB = class extends aP {
        async _fetch(t) {
            return aI(t);
        }
    },
    aO = "__forcedDependency",
    { floor: aW, ceil: aU } = Math;
function a$(t, e, i, s, n, a) {
    (t[4 * e + 0] = Math.min(t[4 * e + 0], i)),
        (t[4 * e + 1] = Math.min(t[4 * e + 1], s)),
        (t[4 * e + 2] = Math.max(t[4 * e + 2], n)),
        (t[4 * e + 3] = Math.max(t[4 * e + 3], a));
}
var aH = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0],
    aj = new WeakMap(),
    az = new WeakMap(),
    aG = class {
        constructor(t, e) {
            p(this, aj, void 0), p(this, az, void 0), g(aj, this, t), g(az, this, e);
        }
        get length() {
            return f(aj, this).length;
        }
        isEmpty(t) {
            return f(aj, this)[t] === aH;
        }
        minX(t) {
            return f(az, this)[4 * t + 0] / 256;
        }
        minY(t) {
            return f(az, this)[4 * t + 1] / 256;
        }
        maxX(t) {
            return (f(az, this)[4 * t + 2] + 1) / 256;
        }
        maxY(t) {
            return (f(az, this)[4 * t + 3] + 1) / 256;
        }
    },
    aV = (t, e) => {
        if (!t) return;
        let i = t.get(e);
        return i || ((i = { dependencies: new Set(), isRenderingOperation: !1 }), t.set(e, i)), i;
    },
    aq = new WeakMap(),
    aX = new WeakMap(),
    aK = new WeakMap(),
    aY = new WeakMap(),
    aQ = new WeakMap(),
    aJ = new WeakMap(),
    aZ = new WeakMap(),
    a0 = new WeakMap(),
    a1 = new WeakMap(),
    a2 = new WeakMap(),
    a3 = new WeakMap(),
    a5 = new WeakMap(),
    a4 = new WeakMap(),
    a6 = new WeakMap(),
    a8 = new WeakMap(),
    a7 = new WeakMap(),
    a9 = new WeakMap(),
    rt = new WeakSet(),
    re = class {
        constructor(t, e, i = !1) {
            u(this, rt),
                p(this, aq, { __proto__: null }),
                p(this, aX, { __proto__: null, transform: [], moveText: [], sameLineText: [], [aO]: [] }),
                p(this, aK, new Map()),
                p(this, aY, []),
                p(this, aQ, []),
                p(this, aJ, [[1, 0, 0, 1, 0, 0]]),
                p(this, aZ, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]),
                p(this, a0, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0])),
                p(this, a1, -1),
                p(this, a2, new Set()),
                p(this, a3, new Map()),
                p(this, a5, new Map()),
                p(this, a4, void 0),
                p(this, a6, void 0),
                p(this, a8, void 0),
                p(this, a7, void 0),
                p(this, a9, void 0),
                g(a4, this, t.width),
                g(a6, this, t.height),
                d(rt, this, ri).call(this, e),
                i && g(a9, this, new Map());
        }
        growOperationsCount(t) {
            t >= f(a7, this).length && d(rt, this, ri).call(this, t, f(a7, this));
        }
        save(t) {
            return (
                g(aq, this, { __proto__: f(aq, this) }),
                g(aX, this, {
                    __proto__: f(aX, this),
                    transform: { __proto__: f(aX, this).transform },
                    moveText: { __proto__: f(aX, this).moveText },
                    sameLineText: { __proto__: f(aX, this).sameLineText },
                    [aO]: { __proto__: f(aX, this)[aO] },
                }),
                g(aZ, this, { __proto__: f(aZ, this) }),
                f(aY, this).push(t),
                this
            );
        }
        restore(t) {
            let e = Object.getPrototypeOf(f(aq, this));
            if (null === e) return this;
            g(aq, this, e),
                g(aX, this, Object.getPrototypeOf(f(aX, this))),
                g(aZ, this, Object.getPrototypeOf(f(aZ, this)));
            let i = f(aY, this).pop();
            return void 0 !== i && (aV(f(a9, this), t)?.dependencies.add(i), (f(a7, this)[t] = f(a7, this)[i])), this;
        }
        recordOpenMarker(t) {
            return f(aY, this).push(t), this;
        }
        getOpenMarker() {
            return 0 === f(aY, this).length ? null : f(aY, this).at(-1);
        }
        recordCloseMarker(t) {
            let e = f(aY, this).pop();
            return void 0 !== e && (aV(f(a9, this), t)?.dependencies.add(e), (f(a7, this)[t] = f(a7, this)[e])), this;
        }
        beginMarkedContent(t) {
            return f(aQ, this).push(t), this;
        }
        endMarkedContent(t) {
            let e = f(aQ, this).pop();
            return void 0 !== e && (aV(f(a9, this), t)?.dependencies.add(e), (f(a7, this)[t] = f(a7, this)[e])), this;
        }
        pushBaseTransform(t) {
            return f(aJ, this).push(V.multiplyByDOMMatrix(f(aJ, this).at(-1), t.getTransform())), this;
        }
        popBaseTransform() {
            return f(aJ, this).length > 1 && f(aJ, this).pop(), this;
        }
        recordSimpleData(t, e) {
            return (f(aq, this)[t] = e), this;
        }
        recordIncrementalData(t, e) {
            return f(aX, this)[t].push(e), this;
        }
        resetIncrementalData(t, e) {
            return (f(aX, this)[t].length = 0), this;
        }
        recordNamedData(t, e) {
            return f(aK, this).set(t, e), this;
        }
        recordSimpleDataFromNamed(t, e, i) {
            f(aq, this)[t] = f(aK, this).get(e) ?? i;
        }
        recordFutureForcedDependency(t, e) {
            return this.recordIncrementalData(aO, e), this;
        }
        inheritSimpleDataAsFutureForcedDependencies(t) {
            for (let e of t) e in f(aq, this) && this.recordFutureForcedDependency(e, f(aq, this)[e]);
            return this;
        }
        inheritPendingDependenciesAsFutureForcedDependencies() {
            for (let t of f(a2, this)) this.recordFutureForcedDependency(aO, t);
            return this;
        }
        resetBBox(t) {
            return (
                f(a1, this) !== t &&
                    (g(a1, this, t),
                    (f(a0, this)[0] = 1 / 0),
                    (f(a0, this)[1] = 1 / 0),
                    (f(a0, this)[2] = -1 / 0),
                    (f(a0, this)[3] = -1 / 0)),
                this
            );
        }
        recordClipBox(t, e, i, s, n, a) {
            let r = V.multiplyByDOMMatrix(f(aJ, this).at(-1), e.getTransform()),
                o = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            V.axialAlignedBoundingBox([i, n, s, a], r, o);
            let l = V.intersect(f(aZ, this), o);
            return (
                l
                    ? ((f(aZ, this)[0] = l[0]),
                      (f(aZ, this)[1] = l[1]),
                      (f(aZ, this)[2] = l[2]),
                      (f(aZ, this)[3] = l[3]))
                    : ((f(aZ, this)[0] = f(aZ, this)[1] = 1 / 0), (f(aZ, this)[2] = f(aZ, this)[3] = -1 / 0)),
                this
            );
        }
        recordBBox(t, e, i, s, n, a) {
            let r = f(aZ, this);
            if (r[0] === 1 / 0) return this;
            let o = V.multiplyByDOMMatrix(f(aJ, this).at(-1), e.getTransform());
            if (r[0] === -1 / 0) return V.axialAlignedBoundingBox([i, n, s, a], o, f(a0, this)), this;
            let l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            return (
                V.axialAlignedBoundingBox([i, n, s, a], o, l),
                (f(a0, this)[0] = Math.min(f(a0, this)[0], Math.max(l[0], r[0]))),
                (f(a0, this)[1] = Math.min(f(a0, this)[1], Math.max(l[1], r[1]))),
                (f(a0, this)[2] = Math.max(f(a0, this)[2], Math.min(l[2], r[2]))),
                (f(a0, this)[3] = Math.max(f(a0, this)[3], Math.min(l[3], r[3]))),
                this
            );
        }
        recordCharacterBBox(t, e, i, s = 1, n = 0, a = 0, r) {
            let o,
                l,
                h = i.bbox;
            if (
                h &&
                !1 !== (o = h[2] !== h[0] && h[3] !== h[1] && f(a5, this).get(i)) &&
                ((l = [0, 0, 0, 0]),
                V.axialAlignedBoundingBox(h, i.fontMatrix, l),
                (1 !== s || 0 !== n || 0 !== a) && V.scaleMinMax([s, 0, 0, -s, n, a], l),
                o)
            )
                return this.recordBBox(t, e, l[0], l[2], l[1], l[3]);
            if (!r) return this.recordFullPageBBox(t);
            let d = r();
            return h &&
                l &&
                void 0 === o &&
                ((o =
                    l[0] <= n - d.actualBoundingBoxLeft &&
                    l[2] >= n + d.actualBoundingBoxRight &&
                    l[1] <= a - d.actualBoundingBoxAscent &&
                    l[3] >= a + d.actualBoundingBoxDescent),
                f(a5, this).set(i, o),
                o)
                ? this.recordBBox(t, e, l[0], l[2], l[1], l[3])
                : this.recordBBox(
                      t,
                      e,
                      n - d.actualBoundingBoxLeft,
                      n + d.actualBoundingBoxRight,
                      a - d.actualBoundingBoxAscent,
                      a + d.actualBoundingBoxDescent,
                  );
        }
        recordFullPageBBox(t) {
            return (
                (f(a0, this)[0] = Math.max(0, f(aZ, this)[0])),
                (f(a0, this)[1] = Math.max(0, f(aZ, this)[1])),
                (f(a0, this)[2] = Math.min(f(a4, this), f(aZ, this)[2])),
                (f(a0, this)[3] = Math.min(f(a6, this), f(aZ, this)[3])),
                this
            );
        }
        getSimpleIndex(t) {
            return f(aq, this)[t];
        }
        recordDependencies(t, e) {
            let i = f(a2, this),
                s = f(aq, this),
                n = f(aX, this);
            for (let t of e) t in f(aq, this) ? i.add(s[t]) : t in n && n[t].forEach(i.add, i);
            return this;
        }
        recordNamedDependency(t, e) {
            return f(aK, this).has(e) && f(a2, this).add(f(aK, this).get(e)), this;
        }
        recordOperation(t, e = !1) {
            if ((this.recordDependencies(t, [aO]), f(a9, this))) {
                let e = aV(f(a9, this), t),
                    { dependencies: i } = e;
                f(a2, this).forEach(i.add, i),
                    f(aY, this).forEach(i.add, i),
                    f(aQ, this).forEach(i.add, i),
                    i.delete(t),
                    (e.isRenderingOperation = !0);
            }
            if (f(a1, this) === t) {
                let i = aW((256 * f(a0, this)[0]) / f(a4, this)),
                    s = aW((256 * f(a0, this)[1]) / f(a6, this)),
                    n = aU((256 * f(a0, this)[2]) / f(a4, this)),
                    a = aU((256 * f(a0, this)[3]) / f(a6, this));
                for (let e of (a$(f(a8, this), t, i, s, n, a), f(a2, this))) e !== t && a$(f(a8, this), e, i, s, n, a);
                for (let e of f(aY, this)) e !== t && a$(f(a8, this), e, i, s, n, a);
                for (let e of f(aQ, this)) e !== t && a$(f(a8, this), e, i, s, n, a);
                e || (f(a2, this).clear(), g(a1, this, -1));
            }
            return this;
        }
        recordShowTextOperation(t, e = !1) {
            let i = Array.from(f(a2, this));
            for (let s of (this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t), i))
                this.recordIncrementalData("sameLineText", s);
            return this;
        }
        bboxToClipBoxDropOperation(t, e = !1) {
            return (
                f(a1, this) === t &&
                    (g(a1, this, -1),
                    (f(aZ, this)[0] = Math.max(f(aZ, this)[0], f(a0, this)[0])),
                    (f(aZ, this)[1] = Math.max(f(aZ, this)[1], f(a0, this)[1])),
                    (f(aZ, this)[2] = Math.min(f(aZ, this)[2], f(a0, this)[2])),
                    (f(aZ, this)[3] = Math.min(f(aZ, this)[3], f(a0, this)[3])),
                    e || f(a2, this).clear()),
                this
            );
        }
        _takePendingDependencies() {
            let t = f(a2, this);
            return g(a2, this, new Set()), t;
        }
        _extractOperation(t) {
            let e = f(a3, this).get(t);
            return f(a3, this).delete(t), e;
        }
        _pushPendingDependencies(t) {
            for (let e of t) f(a2, this).add(e);
        }
        take() {
            return f(a5, this).clear(), new aG(f(a7, this), f(a8, this));
        }
        takeDebugMetadata() {
            return f(a9, this);
        }
    };
function ri(t, e) {
    let i = new ArrayBuffer(4 * t);
    g(a8, this, new Uint8ClampedArray(i)),
        g(a7, this, new Uint32Array(i)),
        e && e.length > 0 ? (f(a7, this).set(e), f(a7, this).fill(aH, e.length)) : f(a7, this).fill(aH);
}
var rs = new WeakMap(),
    rn = new WeakMap(),
    ra = new WeakMap(),
    rr = new WeakMap(),
    ro = new WeakMap(),
    rl = class t {
        constructor(e, i, s) {
            if (
                (p(this, rs, void 0),
                p(this, rn, void 0),
                p(this, ra, void 0),
                p(this, rr, 0),
                p(this, ro, 0),
                e instanceof t && f(ra, e) === !!s)
            )
                return e;
            g(rs, this, e), g(rn, this, i), g(ra, this, !!s);
        }
        growOperationsCount() {
            throw Error("Unreachable");
        }
        save(t) {
            var e;
            return g(ro, this, ((e = f(ro, this)), ++e)), f(rs, this).save(f(rn, this)), this;
        }
        restore(t) {
            if (f(ro, this) > 0) {
                var e;
                f(rs, this).restore(f(rn, this)), g(ro, this, ((e = f(ro, this)), --e));
            }
            return this;
        }
        recordOpenMarker(t) {
            var e;
            return g(rr, this, ((e = f(rr, this)), ++e)), this;
        }
        getOpenMarker() {
            return f(rr, this) > 0 ? f(rn, this) : f(rs, this).getOpenMarker();
        }
        recordCloseMarker(t) {
            var e;
            return g(rr, this, ((e = f(rr, this)), --e)), this;
        }
        beginMarkedContent(t) {
            return this;
        }
        endMarkedContent(t) {
            return this;
        }
        pushBaseTransform(t) {
            return f(rs, this).pushBaseTransform(t), this;
        }
        popBaseTransform() {
            return f(rs, this).popBaseTransform(), this;
        }
        recordSimpleData(t, e) {
            return f(rs, this).recordSimpleData(t, f(rn, this)), this;
        }
        recordIncrementalData(t, e) {
            return f(rs, this).recordIncrementalData(t, f(rn, this)), this;
        }
        resetIncrementalData(t, e) {
            return f(rs, this).resetIncrementalData(t, f(rn, this)), this;
        }
        recordNamedData(t, e) {
            return this;
        }
        recordSimpleDataFromNamed(t, e, i) {
            return f(rs, this).recordSimpleDataFromNamed(t, e, f(rn, this)), this;
        }
        recordFutureForcedDependency(t, e) {
            return f(rs, this).recordFutureForcedDependency(t, f(rn, this)), this;
        }
        inheritSimpleDataAsFutureForcedDependencies(t) {
            return f(rs, this).inheritSimpleDataAsFutureForcedDependencies(t), this;
        }
        inheritPendingDependenciesAsFutureForcedDependencies() {
            return f(rs, this).inheritPendingDependenciesAsFutureForcedDependencies(), this;
        }
        resetBBox(t) {
            return f(ra, this) || f(rs, this).resetBBox(f(rn, this)), this;
        }
        recordClipBox(t, e, i, s, n, a) {
            return f(ra, this) || f(rs, this).recordClipBox(f(rn, this), e, i, s, n, a), this;
        }
        recordBBox(t, e, i, s, n, a) {
            return f(ra, this) || f(rs, this).recordBBox(f(rn, this), e, i, s, n, a), this;
        }
        recordCharacterBBox(t, e, i, s, n, a, r) {
            return f(ra, this) || f(rs, this).recordCharacterBBox(f(rn, this), e, i, s, n, a, r), this;
        }
        recordFullPageBBox(t) {
            return f(ra, this) || f(rs, this).recordFullPageBBox(f(rn, this)), this;
        }
        getSimpleIndex(t) {
            return f(rs, this).getSimpleIndex(t);
        }
        recordDependencies(t, e) {
            return f(rs, this).recordDependencies(f(rn, this), e), this;
        }
        recordNamedDependency(t, e) {
            return f(rs, this).recordNamedDependency(f(rn, this), e), this;
        }
        recordOperation(t) {
            return f(rs, this).recordOperation(f(rn, this), !0), this;
        }
        recordShowTextOperation(t) {
            return f(rs, this).recordShowTextOperation(f(rn, this), !0), this;
        }
        bboxToClipBoxDropOperation(t) {
            return f(ra, this) || f(rs, this).bboxToClipBoxDropOperation(f(rn, this), !0), this;
        }
        take() {
            throw Error("Unreachable");
        }
        takeDebugMetadata() {
            throw Error("Unreachable");
        }
    },
    rh = [
        "path",
        "transform",
        "filter",
        "strokeColor",
        "strokeAlpha",
        "lineWidth",
        "lineCap",
        "lineJoin",
        "miterLimit",
        "dash",
    ],
    rd = ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
    rc = ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
    ru = ["filter", "fillColor", "fillAlpha"],
    rp = [
        "transform",
        "leading",
        "charSpacing",
        "wordSpacing",
        "hScale",
        "textRise",
        "moveText",
        "textMatrix",
        "font",
        "fontObj",
        "filter",
        "fillColor",
        "textRenderingMode",
        "SMask",
        "fillAlpha",
        "strokeAlpha",
        "globalCompositeOperation",
        "sameLineText",
    ],
    rg = ["transform"],
    rf = ["transform", "fillColor"],
    rm = "Fill",
    rw = "Stroke",
    rb = "Shading";
function rv(t, e) {
    if (!e) return;
    let i = e[2] - e[0],
        s = e[3] - e[1],
        n = new Path2D();
    n.rect(e[0], e[1], i, s), t.clip(n);
}
var rA = class {
        isModifyingCurrentTransform() {
            return !1;
        }
        getPattern() {
            D("Abstract method `getPattern` called.");
        }
    },
    ry = class extends rA {
        constructor(t) {
            super(),
                (this._type = t[1]),
                (this._bbox = t[2]),
                (this._colorStops = t[3]),
                (this._p0 = t[4]),
                (this._p1 = t[5]),
                (this._r0 = t[6]),
                (this._r1 = t[7]),
                (this.matrix = null);
        }
        isOriginBased() {
            return (
                0 === this._p0[0] && 0 === this._p0[1] && (!this.isRadial() || (0 === this._p1[0] && 0 === this._p1[1]))
            );
        }
        isRadial() {
            return "radial" === this._type;
        }
        _createGradient(t, e = null) {
            let i,
                s = this._p0,
                n = this._p1;
            if (
                (e && ((s = s.slice()), (n = n.slice()), V.applyTransform(s, e), V.applyTransform(n, e)),
                "axial" === this._type)
            )
                i = t.createLinearGradient(s[0], s[1], n[0], n[1]);
            else if ("radial" === this._type) {
                let a = this._r0,
                    r = this._r1;
                if (e) {
                    let t = new Float32Array(2);
                    V.singularValueDecompose2dScale(e, t), (a *= t[0]), (r *= t[0]);
                }
                i = t.createRadialGradient(s[0], s[1], a, n[0], n[1], r);
            }
            for (let t of this._colorStops) i.addColorStop(t[0], t[1]);
            return i;
        }
        getPattern(t, e, i, s) {
            let n;
            if (s === rw || s === rm) {
                if (this.isOriginBased()) {
                    let s = V.transform(i, e.baseTransform);
                    this.matrix && (s = V.transform(s, this.matrix));
                    let n = Math.hypot(s[0], s[1]),
                        a = Math.hypot(s[2], s[3]);
                    if (0.001 > Math.abs((s[0] * s[2] + s[1] * s[3]) / (n * a))) {
                        if (!this.isRadial()) return this._createGradient(t, s);
                        else if (0.001 > Math.abs(n - a)) return this._createGradient(t, s);
                    }
                }
                let a = e.current.getClippedPathBoundingBox(s, tm(t)) || [0, 0, 0, 0],
                    r = Math.ceil(a[2] - a[0]) || 1,
                    o = Math.ceil(a[3] - a[1]) || 1,
                    l = e.cachedCanvases.getCanvas("pattern", r, o),
                    h = l.context;
                h.clearRect(0, 0, h.canvas.width, h.canvas.height),
                    h.beginPath(),
                    h.rect(0, 0, h.canvas.width, h.canvas.height),
                    h.translate(-a[0], -a[1]),
                    (i = V.transform(i, [1, 0, 0, 1, a[0], a[1]])),
                    h.transform(...e.baseTransform),
                    this.matrix && h.transform(...this.matrix),
                    rv(h, this._bbox),
                    (h.fillStyle = this._createGradient(h)),
                    h.fill(),
                    (n = t.createPattern(l.canvas, "no-repeat"));
                let d = new DOMMatrix(i);
                n.setTransform(d);
            } else rv(t, this._bbox), (n = this._createGradient(t));
            return n;
        }
    };
function r_(t, e, i, s, n, a, r, o) {
    let l,
        h,
        d,
        c,
        u,
        p,
        g,
        f,
        m,
        w = e.coords,
        b = e.colors,
        v = t.data,
        A = 4 * t.width;
    w[i + 1] > w[s + 1] && ((l = i), (i = s), (s = l), (l = a), (a = r), (r = l)),
        w[s + 1] > w[n + 1] && ((l = s), (s = n), (n = l), (l = r), (r = o), (o = l)),
        w[i + 1] > w[s + 1] && ((l = i), (i = s), (s = l), (l = a), (a = r), (r = l));
    let y = (w[i] + e.offsetX) * e.scaleX,
        _ = (w[i + 1] + e.offsetY) * e.scaleY,
        x = (w[s] + e.offsetX) * e.scaleX,
        k = (w[s + 1] + e.offsetY) * e.scaleY,
        M = (w[n] + e.offsetX) * e.scaleX,
        S = (w[n + 1] + e.offsetY) * e.scaleY;
    if (_ >= S) return;
    let E = b[a],
        C = b[a + 1],
        T = b[a + 2],
        P = b[r],
        D = b[r + 1],
        I = b[r + 2],
        L = b[o],
        R = b[o + 1],
        F = b[o + 2],
        N = Math.round(_),
        B = Math.round(S);
    for (let t = N; t <= B; t++) {
        let e;
        if (t < k) {
            let e = t < _ ? 0 : (_ - t) / (_ - k);
            (h = y - (y - x) * e), (d = E - (E - P) * e), (c = C - (C - D) * e), (u = T - (T - I) * e);
        } else {
            let e;
            (h = x - (x - M) * (e = t > S ? 1 : k === S ? 0 : (k - t) / (k - S))),
                (d = P - (P - L) * e),
                (c = D - (D - R) * e),
                (u = I - (I - F) * e);
        }
        (p = y - (y - M) * (e = t < _ ? 0 : t > S ? 1 : (_ - t) / (_ - S))),
            (g = E - (E - L) * e),
            (f = C - (C - R) * e),
            (m = T - (T - F) * e);
        let i = Math.round(Math.min(h, p)),
            s = Math.round(Math.max(h, p)),
            n = A * t + 4 * i;
        for (let t = i; t <= s; t++)
            (e = (h - t) / (h - p)) < 0 ? (e = 0) : e > 1 && (e = 1),
                (v[n++] = (d - (d - g) * e) | 0),
                (v[n++] = (c - (c - f) * e) | 0),
                (v[n++] = (u - (u - m) * e) | 0),
                (v[n++] = 255);
    }
}
var rx = class extends rA {
        constructor(t) {
            super(),
                (this._coords = t[2]),
                (this._colors = t[3]),
                (this._figures = t[4]),
                (this._bounds = t[5]),
                (this._bbox = t[6]),
                (this._background = t[7]),
                (this.matrix = null);
        }
        _createMeshCanvas(t, e, i) {
            let s = Math.floor(this._bounds[0]),
                n = Math.floor(this._bounds[1]),
                a = Math.ceil(this._bounds[2]) - s,
                r = Math.ceil(this._bounds[3]) - n,
                o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3),
                l = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3),
                h = a / o,
                d = r / l,
                c = {
                    coords: this._coords,
                    colors: this._colors,
                    offsetX: -s,
                    offsetY: -n,
                    scaleX: 1 / h,
                    scaleY: 1 / d,
                },
                u = o + 4,
                p = l + 4,
                g = i.getCanvas("mesh", u, p),
                f = g.context,
                m = f.createImageData(o, l);
            if (e) {
                let t = m.data;
                for (let i = 0, s = t.length; i < s; i += 4)
                    (t[i] = e[0]), (t[i + 1] = e[1]), (t[i + 2] = e[2]), (t[i + 3] = 255);
            }
            for (let t of this._figures)
                !(function (t, e, i) {
                    let s,
                        n,
                        a = e.coords,
                        r = e.colors;
                    switch (e.type) {
                        case 2:
                            let o = e.verticesPerRow,
                                l = Math.floor(a.length / o) - 1,
                                h = o - 1;
                            for (s = 0; s < l; s++) {
                                let e = s * o;
                                for (let s = 0; s < h; s++, e++)
                                    r_(t, i, a[e], a[e + 1], a[e + o], r[e], r[e + 1], r[e + o]),
                                        r_(t, i, a[e + o + 1], a[e + 1], a[e + o], r[e + o + 1], r[e + 1], r[e + o]);
                            }
                            break;
                        case 1:
                            for (s = 0, n = a.length; s < n; s += 3)
                                r_(t, i, a[s], a[s + 1], a[s + 2], r[s], r[s + 1], r[s + 2]);
                            break;
                        default:
                            throw Error("illegal figure");
                    }
                })(m, t, c);
            return (
                f.putImageData(m, 2, 2),
                { canvas: g.canvas, offsetX: s - 2 * h, offsetY: n - 2 * d, scaleX: h, scaleY: d }
            );
        }
        isModifyingCurrentTransform() {
            return !0;
        }
        getPattern(t, e, i, s) {
            rv(t, this._bbox);
            let n = new Float32Array(2);
            if (s === rb) V.singularValueDecompose2dScale(tm(t), n);
            else if (this.matrix) {
                V.singularValueDecompose2dScale(this.matrix, n);
                let [t, i] = n;
                V.singularValueDecompose2dScale(e.baseTransform, n), (n[0] *= t), (n[1] *= i);
            } else V.singularValueDecompose2dScale(e.baseTransform, n);
            let a = this._createMeshCanvas(n, s === rb ? null : this._background, e.cachedCanvases);
            return (
                s !== rb && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)),
                t.translate(a.offsetX, a.offsetY),
                t.scale(a.scaleX, a.scaleY),
                t.createPattern(a.canvas, "no-repeat")
            );
        }
    },
    rk = class extends rA {
        getPattern() {
            return "hotpink";
        }
    },
    rM = class t {
        constructor(t, e, i, s) {
            (this.color = t[1]),
                (this.operatorList = t[2]),
                (this.matrix = t[3]),
                (this.bbox = t[4]),
                (this.xstep = t[5]),
                (this.ystep = t[6]),
                (this.paintType = t[7]),
                (this.tilingType = t[8]),
                (this.ctx = e),
                (this.canvasGraphicsFactory = i),
                (this.baseTransform = s);
        }
        createPatternCanvas(t, e) {
            let { bbox: i, operatorList: s, paintType: n, tilingType: a, color: r, canvasGraphicsFactory: o } = this,
                { xstep: l, ystep: h } = this;
            (l = Math.abs(l)), (h = Math.abs(h)), T("TilingType: " + a);
            let d = i[0],
                c = i[1],
                u = i[2],
                p = i[3],
                g = u - d,
                f = p - c,
                m = new Float32Array(2);
            V.singularValueDecompose2dScale(this.matrix, m);
            let [w, b] = m;
            V.singularValueDecompose2dScale(this.baseTransform, m);
            let v = w * m[0],
                A = b * m[1],
                y = g,
                _ = f,
                x = !1,
                k = !1,
                M = Math.ceil(h * A),
                S = Math.ceil(f * A);
            Math.ceil(l * v) >= Math.ceil(g * v) ? (y = l) : (x = !0), M >= S ? (_ = h) : (k = !0);
            let E = this.getSizeAndScale(y, this.ctx.canvas.width, v),
                C = this.getSizeAndScale(_, this.ctx.canvas.height, A),
                P = t.cachedCanvases.getCanvas("pattern", E.size, C.size),
                D = P.context,
                I = o.createCanvasGraphics(D, e);
            if (
                ((I.groupLevel = t.groupLevel),
                this.setFillAndStrokeStyleToContext(I, n, r),
                D.translate(-E.scale * d, -C.scale * c),
                I.transform(0, E.scale, 0, 0, C.scale, 0, 0),
                D.save(),
                I.dependencyTracker?.save(),
                this.clipBbox(I, d, c, u, p),
                (I.baseTransform = tm(I.ctx)),
                I.executeOperatorList(s),
                I.endDrawing(),
                I.dependencyTracker?.restore(),
                D.restore(),
                x || k)
            ) {
                let e = P.canvas;
                x && (y = l), k && (_ = h);
                let i = this.getSizeAndScale(y, this.ctx.canvas.width, v),
                    s = this.getSizeAndScale(_, this.ctx.canvas.height, A),
                    n = i.size,
                    a = s.size,
                    r = t.cachedCanvases.getCanvas("pattern-workaround", n, a),
                    o = r.context,
                    u = x ? Math.floor(g / l) : 0,
                    p = k ? Math.floor(f / h) : 0;
                for (let t = 0; t <= u; t++)
                    for (let i = 0; i <= p; i++) o.drawImage(e, n * t, a * i, n, a, 0, 0, n, a);
                return { canvas: r.canvas, scaleX: i.scale, scaleY: s.scale, offsetX: d, offsetY: c };
            }
            return { canvas: P.canvas, scaleX: E.scale, scaleY: C.scale, offsetX: d, offsetY: c };
        }
        getSizeAndScale(e, i, s) {
            let n = Math.max(t.MAX_PATTERN_SIZE, i),
                a = Math.ceil(e * s);
            return a >= n ? (a = n) : (s = a / e), { scale: s, size: a };
        }
        clipBbox(t, e, i, s, n) {
            let a = s - e,
                r = n - i;
            t.ctx.rect(e, i, a, r),
                V.axialAlignedBoundingBox([e, i, s, n], tm(t.ctx), t.current.minMax),
                t.clip(),
                t.endPath();
        }
        setFillAndStrokeStyleToContext(t, e, i) {
            let s = t.ctx,
                n = t.current;
            switch (e) {
                case 1:
                    let { fillStyle: a, strokeStyle: r } = this.ctx;
                    (s.fillStyle = n.fillColor = a), (s.strokeStyle = n.strokeColor = r);
                    break;
                case 2:
                    (s.fillStyle = s.strokeStyle = i), (n.fillColor = n.strokeColor = i);
                    break;
                default:
                    throw new $(`Unsupported paint type: ${e}`);
            }
        }
        isModifyingCurrentTransform() {
            return !1;
        }
        getPattern(t, e, i, s, n) {
            let a = i;
            s !== rb && ((a = V.transform(a, e.baseTransform)), this.matrix && (a = V.transform(a, this.matrix)));
            let r = this.createPatternCanvas(e, n),
                o = new DOMMatrix(a);
            o = (o = o.translate(r.offsetX, r.offsetY)).scale(1 / r.scaleX, 1 / r.scaleY);
            let l = t.createPattern(r.canvas, "repeat");
            return l.setTransform(o), l;
        }
    };
(0, o.t)(rM, "MAX_PATTERN_SIZE", 3e3);
var rS = new DOMMatrix(),
    rE = new Float32Array(2),
    rC = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]),
    rT = class {
        constructor(t) {
            (this.canvasFactory = t), (this.cache = Object.create(null));
        }
        getCanvas(t, e, i) {
            let s;
            return (
                void 0 !== this.cache[t]
                    ? ((s = this.cache[t]), this.canvasFactory.reset(s, e, i))
                    : ((s = this.canvasFactory.create(e, i)), (this.cache[t] = s)),
                s
            );
        }
        delete(t) {
            delete this.cache[t];
        }
        clear() {
            for (let t in this.cache) {
                let e = this.cache[t];
                this.canvasFactory.destroy(e), delete this.cache[t];
            }
        }
    };
function rP(t, e, i, s, n, a, r, o, l, h) {
    let [d, c, u, p, g, f] = tm(t);
    if (0 === c && 0 === u) {
        let m = Math.round(r * d + g),
            w = Math.round(o * p + f),
            b = Math.abs(Math.round((r + l) * d + g) - m) || 1,
            v = Math.abs(Math.round((o + h) * p + f) - w) || 1;
        return (
            t.setTransform(Math.sign(d), 0, 0, Math.sign(p), m, w),
            t.drawImage(e, i, s, n, a, 0, 0, b, v),
            t.setTransform(d, c, u, p, g, f),
            [b, v]
        );
    }
    if (0 === d && 0 === p) {
        let m = Math.round(o * u + g),
            w = Math.round(r * c + f),
            b = Math.abs(Math.round((o + h) * u + g) - m) || 1,
            v = Math.abs(Math.round((r + l) * c + f) - w) || 1;
        return (
            t.setTransform(0, Math.sign(c), Math.sign(u), 0, m, w),
            t.drawImage(e, i, s, n, a, 0, 0, v, b),
            t.setTransform(d, c, u, p, g, f),
            [v, b]
        );
    }
    return t.drawImage(e, i, s, n, a, r, o, l, h), [Math.hypot(d, c) * l, Math.hypot(u, p) * h];
}
var rD = class {
    constructor(t, e, i) {
        (0, o.t)(this, "alphaIsShape", !1),
            (0, o.t)(this, "fontSize", 0),
            (0, o.t)(this, "fontSizeScale", 1),
            (0, o.t)(this, "textMatrix", null),
            (0, o.t)(this, "textMatrixScale", 1),
            (0, o.t)(this, "fontMatrix", v),
            (0, o.t)(this, "leading", 0),
            (0, o.t)(this, "x", 0),
            (0, o.t)(this, "y", 0),
            (0, o.t)(this, "lineX", 0),
            (0, o.t)(this, "lineY", 0),
            (0, o.t)(this, "charSpacing", 0),
            (0, o.t)(this, "wordSpacing", 0),
            (0, o.t)(this, "textHScale", 1),
            (0, o.t)(this, "textRenderingMode", 0),
            (0, o.t)(this, "textRise", 0),
            (0, o.t)(this, "fillColor", "#000000"),
            (0, o.t)(this, "strokeColor", "#000000"),
            (0, o.t)(this, "patternFill", !1),
            (0, o.t)(this, "patternStroke", !1),
            (0, o.t)(this, "fillAlpha", 1),
            (0, o.t)(this, "strokeAlpha", 1),
            (0, o.t)(this, "lineWidth", 1),
            (0, o.t)(this, "activeSMask", null),
            (0, o.t)(this, "transferMaps", "none"),
            i?.(this),
            (this.clipBox = new Float32Array([0, 0, t, e])),
            (this.minMax = rC.slice());
    }
    clone() {
        let t = Object.create(this);
        return (t.clipBox = this.clipBox.slice()), (t.minMax = this.minMax.slice()), t;
    }
    getPathBoundingBox(t = rm, e = null) {
        let i = this.minMax.slice();
        if (t === rw) {
            e || D("Stroke bounding box must include transform."), V.singularValueDecompose2dScale(e, rE);
            let t = (rE[0] * this.lineWidth) / 2,
                s = (rE[1] * this.lineWidth) / 2;
            (i[0] -= t), (i[1] -= s), (i[2] += t), (i[3] += s);
        }
        return i;
    }
    updateClipFromPath() {
        let t = V.intersect(this.clipBox, this.getPathBoundingBox());
        this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
    }
    isEmptyClip() {
        return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t) {
        this.clipBox.set(t, 0), this.minMax.set(rC, 0);
    }
    getClippedPathBoundingBox(t = rm, e = null) {
        return V.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
};
function rI(t, e) {
    let i, s, n, a;
    if (e instanceof ImageData) return void t.putImageData(e, 0, 0);
    let r = e.height,
        o = e.width,
        l = r % 16,
        h = (r - l) / 16,
        d = 0 === l ? h : h + 1,
        c = t.createImageData(o, 16),
        u = 0,
        p,
        g = e.data,
        f = c.data;
    if (e.kind === k.GRAYSCALE_1BPP) {
        let e = g.byteLength,
            a = new Uint32Array(f.buffer, 0, f.byteLength >> 2),
            r = a.length,
            m = (o + 7) >> 3,
            w = z.isLittleEndian ? 0xff000000 : 255;
        for (i = 0; i < d; i++) {
            for (s = 0, n = i < h ? 16 : l, p = 0; s < n; s++) {
                let t = e - u,
                    i = 0,
                    s = t > m ? o : 8 * t - 7,
                    n = -8 & s,
                    r = 0,
                    l = 0;
                for (; i < n; i += 8)
                    (l = g[u++]),
                        (a[p++] = 128 & l ? 0xffffffff : w),
                        (a[p++] = 64 & l ? 0xffffffff : w),
                        (a[p++] = 32 & l ? 0xffffffff : w),
                        (a[p++] = 16 & l ? 0xffffffff : w),
                        (a[p++] = 8 & l ? 0xffffffff : w),
                        (a[p++] = 4 & l ? 0xffffffff : w),
                        (a[p++] = 2 & l ? 0xffffffff : w),
                        (a[p++] = 1 & l ? 0xffffffff : w);
                for (; i < s; i++) 0 === r && ((l = g[u++]), (r = 128)), (a[p++] = l & r ? 0xffffffff : w), (r >>= 1);
            }
            for (; p < r; ) a[p++] = 0;
            t.putImageData(c, 0, 16 * i);
        }
    } else if (e.kind === k.RGBA_32BPP) {
        for (i = 0, s = 0, a = 16 * o * 4; i < h; i++)
            f.set(g.subarray(u, u + a)), (u += a), t.putImageData(c, 0, s), (s += 16);
        i < d && ((a = o * l * 4), f.set(g.subarray(u, u + a)), t.putImageData(c, 0, s));
    } else if (e.kind === k.RGB_24BPP)
        for (i = 0, a = o * (n = 16); i < d; i++) {
            for (i >= h && (a = o * (n = l)), p = 0, s = a; s--; )
                (f[p++] = g[u++]), (f[p++] = g[u++]), (f[p++] = g[u++]), (f[p++] = 255);
            t.putImageData(c, 0, 16 * i);
        }
    else throw Error(`bad image kind: ${e.kind}`);
}
function rL(t, e) {
    if (e.bitmap) return void t.drawImage(e.bitmap, 0, 0);
    let i = e.height,
        s = e.width,
        n = i % 16,
        a = (i - n) / 16,
        r = 0 === n ? a : a + 1,
        o = t.createImageData(s, 16),
        l = 0,
        h = e.data,
        d = o.data;
    for (let e = 0; e < r; e++) {
        let i = e < a ? 16 : n;
        ({ srcPos: l } = (function ({
            src: t,
            srcPos: e = 0,
            dest: i,
            width: s,
            height: n,
            nonBlackColor: a = 0xffffffff,
            inverseDecode: r = !1,
        }) {
            let o = z.isLittleEndian ? 0xff000000 : 255,
                [l, h] = r ? [a, o] : [o, a],
                d = s >> 3,
                c = 7 & s,
                u = t.length;
            i = new Uint32Array(i.buffer);
            let p = 0;
            for (let s = 0; s < n; s++) {
                for (let s = e + d; e < s; e++) {
                    let s = e < u ? t[e] : 255;
                    (i[p++] = 128 & s ? h : l),
                        (i[p++] = 64 & s ? h : l),
                        (i[p++] = 32 & s ? h : l),
                        (i[p++] = 16 & s ? h : l),
                        (i[p++] = 8 & s ? h : l),
                        (i[p++] = 4 & s ? h : l),
                        (i[p++] = 2 & s ? h : l),
                        (i[p++] = 1 & s ? h : l);
                }
                if (0 === c) continue;
                let s = e < u ? t[e++] : 255;
                for (let t = 0; t < c; t++) i[p++] = s & (1 << (7 - t)) ? h : l;
            }
            return { srcPos: e, destPos: p };
        })({ src: h, srcPos: l, dest: d, width: s, height: i, nonBlackColor: 0 })),
            t.putImageData(o, 0, 16 * e);
    }
}
function rR(t, e) {
    for (let i of [
        "strokeStyle",
        "fillStyle",
        "fillRule",
        "globalAlpha",
        "lineWidth",
        "lineCap",
        "lineJoin",
        "miterLimit",
        "globalCompositeOperation",
        "font",
        "filter",
    ])
        void 0 !== t[i] && (e[i] = t[i]);
    void 0 !== t.setLineDash && (e.setLineDash(t.getLineDash()), (e.lineDashOffset = t.lineDashOffset));
}
function rF(t) {
    (t.strokeStyle = t.fillStyle = "#000000"),
        (t.fillRule = "nonzero"),
        (t.globalAlpha = 1),
        (t.lineWidth = 1),
        (t.lineCap = "butt"),
        (t.lineJoin = "miter"),
        (t.miterLimit = 10),
        (t.globalCompositeOperation = "source-over"),
        (t.font = "10px sans-serif"),
        void 0 !== t.setLineDash && (t.setLineDash([]), (t.lineDashOffset = 0));
    let { filter: e } = t;
    "none" !== e && "" !== e && (t.filter = "none");
}
function rN(t, e) {
    if (e) return !0;
    V.singularValueDecompose2dScale(t, rE);
    let i = Math.fround(tv.pixelRatio * ts.PDF_TO_CSS_UNITS);
    return rE[0] <= i && rE[1] <= i;
}
var rB = ["butt", "round", "square"],
    rO = ["miter", "round", "bevel"],
    rW = {},
    rU = {},
    r$ = new WeakSet(),
    rH = class t {
        constructor(t, e, i, s, n, { optionalContentConfig: a, markedContentStack: r = null }, o, l, h) {
            u(this, r$),
                (this.ctx = t),
                (this.current = new rD(this.ctx.canvas.width, this.ctx.canvas.height)),
                (this.stateStack = []),
                (this.pendingClip = null),
                (this.pendingEOFill = !1),
                (this.res = null),
                (this.xobjs = null),
                (this.commonObjs = e),
                (this.objs = i),
                (this.canvasFactory = s),
                (this.filterFactory = n),
                (this.groupStack = []),
                (this.baseTransform = null),
                (this.baseTransformStack = []),
                (this.groupLevel = 0),
                (this.smaskStack = []),
                (this.smaskCounter = 0),
                (this.tempSMask = null),
                (this.suspendedCtx = null),
                (this.contentVisible = !0),
                (this.markedContentStack = r || []),
                (this.optionalContentConfig = a),
                (this.cachedCanvases = new rT(this.canvasFactory)),
                (this.cachedPatterns = new Map()),
                (this.annotationCanvasMap = o),
                (this.viewportScale = 1),
                (this.outputScaleX = 1),
                (this.outputScaleY = 1),
                (this.pageColors = l),
                (this._cachedScaleForStroking = [-1, 0]),
                (this._cachedGetSinglePixelWidth = null),
                (this._cachedBitmapsMap = new Map()),
                (this.dependencyTracker = h ?? null);
        }
        getObject(t, e, i = null) {
            return "string" == typeof e
                ? (this.dependencyTracker?.recordNamedDependency(t, e),
                  e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e))
                : i;
        }
        beginDrawing({ transform: t, viewport: e, transparency: i = !1, background: s = null }) {
            let n = this.ctx.canvas.width,
                a = this.ctx.canvas.height,
                r = this.ctx.fillStyle;
            if (((this.ctx.fillStyle = s || "#ffffff"), this.ctx.fillRect(0, 0, n, a), (this.ctx.fillStyle = r), i)) {
                let t = this.cachedCanvases.getCanvas("transparent", n, a);
                (this.compositeCtx = this.ctx),
                    (this.transparentCanvas = t.canvas),
                    (this.ctx = t.context),
                    this.ctx.save(),
                    this.ctx.transform(...tm(this.compositeCtx));
            }
            this.ctx.save(),
                rF(this.ctx),
                t && (this.ctx.transform(...t), (this.outputScaleX = t[0]), (this.outputScaleY = t[0])),
                this.ctx.transform(...e.transform),
                (this.viewportScale = e.scale),
                (this.baseTransform = tm(this.ctx));
        }
        executeOperatorList(t, e, i, s, n) {
            let a,
                r,
                o = t.argsArray,
                l = t.fnArray,
                h = e || 0,
                d = o.length;
            if (d === h) return h;
            let c = d - h > 10 && "function" == typeof i,
                u = c ? Date.now() + 15 : 0,
                p = 0,
                g = this.commonObjs,
                f = this.objs;
            for (;;) {
                if (void 0 !== s && h === s.nextBreakPoint) return s.breakIt(h, i), h;
                if (!n || n(h))
                    if (((a = l[h]), (r = o[h] ?? null), a !== E.dependency))
                        null === r ? this[a](h) : this[a](h, ...r);
                    else
                        for (let t of r) {
                            this.dependencyTracker?.recordNamedData(t, h);
                            let e = t.startsWith("g_") ? g : f;
                            if (!e.has(t)) return e.get(t, i), h;
                        }
                if (++h === d) return h;
                if (c && ++p > 10) {
                    if (Date.now() > u) return i(), h;
                    p = 0;
                }
            }
        }
        endDrawing() {
            for (let t of (d(r$, this, rj).call(this),
            this.cachedCanvases.clear(),
            this.cachedPatterns.clear(),
            this._cachedBitmapsMap.values())) {
                for (let e of t.values())
                    "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
                t.clear();
            }
            this._cachedBitmapsMap.clear(), d(r$, this, rz).call(this);
        }
        _scaleImage(t, e) {
            let i,
                s,
                n = t.width ?? t.displayWidth,
                a = t.height ?? t.displayHeight,
                r = Math.max(Math.hypot(e[0], e[1]), 1),
                o = Math.max(Math.hypot(e[2], e[3]), 1),
                l = n,
                h = a,
                d = "prescale1";
            for (; (r > 2 && l > 1) || (o > 2 && h > 1); ) {
                let e = l,
                    n = h;
                r > 2 && l > 1 && ((e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2)), (r /= l / e)),
                    o > 2 && h > 1 && ((n = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2), (o /= h / n)),
                    (s = (i = this.cachedCanvases.getCanvas(d, e, n)).context).clearRect(0, 0, e, n),
                    s.drawImage(t, 0, 0, l, h, 0, 0, e, n),
                    (t = i.canvas),
                    (l = e),
                    (h = n),
                    (d = "prescale1" === d ? "prescale2" : "prescale1");
            }
            return { img: t, paintWidth: l, paintHeight: h };
        }
        _createMaskCanvas(t, e) {
            let i,
                s,
                n,
                a,
                r = this.ctx,
                { width: o, height: l } = e,
                h = this.current.fillColor,
                d = this.current.patternFill,
                c = tm(r);
            if ((e.bitmap || e.data) && e.count > 1) {
                let a = e.bitmap || e.data.buffer;
                (s = JSON.stringify(d ? c : [c.slice(0, 4), h])),
                    (i = this._cachedBitmapsMap.get(a)) || ((i = new Map()), this._cachedBitmapsMap.set(a, i));
                let r = i.get(s);
                if (r && !d) {
                    let e = Math.round(Math.min(c[0], c[2]) + c[4]),
                        i = Math.round(Math.min(c[1], c[3]) + c[5]);
                    return this.dependencyTracker?.recordDependencies(t, rf), { canvas: r, offsetX: e, offsetY: i };
                }
                n = r;
            }
            n || rL((a = this.cachedCanvases.getCanvas("maskCanvas", o, l)).context, e);
            let u = V.transform(c, [1 / o, 0, 0, -1 / l, 0, 0]);
            u = V.transform(u, [1, 0, 0, 1, 0, -l]);
            let p = rC.slice();
            V.axialAlignedBoundingBox([0, 0, o, l], u, p);
            let [g, f, m, w] = p,
                b = Math.round(m - g) || 1,
                v = Math.round(w - f) || 1,
                A = this.cachedCanvases.getCanvas("fillCanvas", b, v),
                y = A.context;
            y.translate(-g, -f),
                y.transform(...u),
                !n && ((n = (n = this._scaleImage(a.canvas, tw(y))).img), i && d && i.set(s, n)),
                (y.imageSmoothingEnabled = rN(tm(y), e.interpolate)),
                rP(y, n, 0, 0, n.width, n.height, 0, 0, o, l),
                (y.globalCompositeOperation = "source-in");
            let _ = V.transform(tw(y), [1, 0, 0, 1, -g, -f]);
            return (
                (y.fillStyle = d ? h.getPattern(r, this, _, rm, t) : h),
                y.fillRect(0, 0, o, l),
                i && !d && (this.cachedCanvases.delete("fillCanvas"), i.set(s, A.canvas)),
                this.dependencyTracker?.recordDependencies(t, rf),
                { canvas: A.canvas, offsetX: Math.round(g), offsetY: Math.round(f) }
            );
        }
        setLineWidth(t, e) {
            this.dependencyTracker?.recordSimpleData("lineWidth", t),
                e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1),
                (this.current.lineWidth = e),
                (this.ctx.lineWidth = e);
        }
        setLineCap(t, e) {
            this.dependencyTracker?.recordSimpleData("lineCap", t), (this.ctx.lineCap = rB[e]);
        }
        setLineJoin(t, e) {
            this.dependencyTracker?.recordSimpleData("lineJoin", t), (this.ctx.lineJoin = rO[e]);
        }
        setMiterLimit(t, e) {
            this.dependencyTracker?.recordSimpleData("miterLimit", t), (this.ctx.miterLimit = e);
        }
        setDash(t, e, i) {
            this.dependencyTracker?.recordSimpleData("dash", t);
            let s = this.ctx;
            void 0 !== s.setLineDash && (s.setLineDash(e), (s.lineDashOffset = i));
        }
        setRenderingIntent(t, e) {}
        setFlatness(t, e) {}
        setGState(t, e) {
            for (let [i, s] of e)
                switch (i) {
                    case "LW":
                        this.setLineWidth(t, s);
                        break;
                    case "LC":
                        this.setLineCap(t, s);
                        break;
                    case "LJ":
                        this.setLineJoin(t, s);
                        break;
                    case "ML":
                        this.setMiterLimit(t, s);
                        break;
                    case "D":
                        this.setDash(t, s[0], s[1]);
                        break;
                    case "RI":
                        this.setRenderingIntent(t, s);
                        break;
                    case "FL":
                        this.setFlatness(t, s);
                        break;
                    case "Font":
                        this.setFont(t, s[0], s[1]);
                        break;
                    case "CA":
                        this.dependencyTracker?.recordSimpleData("strokeAlpha", t), (this.current.strokeAlpha = s);
                        break;
                    case "ca":
                        this.dependencyTracker?.recordSimpleData("fillAlpha", t),
                            (this.ctx.globalAlpha = this.current.fillAlpha = s);
                        break;
                    case "BM":
                        this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t),
                            (this.ctx.globalCompositeOperation = s);
                        break;
                    case "SMask":
                        this.dependencyTracker?.recordSimpleData("SMask", t),
                            (this.current.activeSMask = s ? this.tempSMask : null),
                            (this.tempSMask = null),
                            this.checkSMaskState();
                        break;
                    case "TR":
                        this.dependencyTracker?.recordSimpleData("filter", t),
                            (this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s));
                }
        }
        get inSMaskMode() {
            return !!this.suspendedCtx;
        }
        checkSMaskState() {
            let t = this.inSMaskMode;
            this.current.activeSMask && !t
                ? this.beginSMaskMode()
                : !this.current.activeSMask && t && this.endSMaskMode();
        }
        beginSMaskMode(t) {
            if (this.inSMaskMode) throw Error("beginSMaskMode called while already in smask mode");
            let e = this.ctx.canvas.width,
                i = this.ctx.canvas.height,
                s = "smaskGroupAt" + this.groupLevel,
                n = this.cachedCanvases.getCanvas(s, e, i);
            this.suspendedCtx = this.ctx;
            let a = (this.ctx = n.context);
            a.setTransform(this.suspendedCtx.getTransform()), rR(this.suspendedCtx, a);
            var r = this.suspendedCtx;
            if (a._removeMirroring) throw Error("Context is already forwarding operations.");
            (a.__originalSave = a.save),
                (a.__originalRestore = a.restore),
                (a.__originalRotate = a.rotate),
                (a.__originalScale = a.scale),
                (a.__originalTranslate = a.translate),
                (a.__originalTransform = a.transform),
                (a.__originalSetTransform = a.setTransform),
                (a.__originalResetTransform = a.resetTransform),
                (a.__originalClip = a.clip),
                (a.__originalMoveTo = a.moveTo),
                (a.__originalLineTo = a.lineTo),
                (a.__originalBezierCurveTo = a.bezierCurveTo),
                (a.__originalRect = a.rect),
                (a.__originalClosePath = a.closePath),
                (a.__originalBeginPath = a.beginPath),
                (a._removeMirroring = () => {
                    (a.save = a.__originalSave),
                        (a.restore = a.__originalRestore),
                        (a.rotate = a.__originalRotate),
                        (a.scale = a.__originalScale),
                        (a.translate = a.__originalTranslate),
                        (a.transform = a.__originalTransform),
                        (a.setTransform = a.__originalSetTransform),
                        (a.resetTransform = a.__originalResetTransform),
                        (a.clip = a.__originalClip),
                        (a.moveTo = a.__originalMoveTo),
                        (a.lineTo = a.__originalLineTo),
                        (a.bezierCurveTo = a.__originalBezierCurveTo),
                        (a.rect = a.__originalRect),
                        (a.closePath = a.__originalClosePath),
                        (a.beginPath = a.__originalBeginPath),
                        delete a._removeMirroring;
                }),
                (a.save = function () {
                    r.save(), this.__originalSave();
                }),
                (a.restore = function () {
                    r.restore(), this.__originalRestore();
                }),
                (a.translate = function (t, e) {
                    r.translate(t, e), this.__originalTranslate(t, e);
                }),
                (a.scale = function (t, e) {
                    r.scale(t, e), this.__originalScale(t, e);
                }),
                (a.transform = function (t, e, i, s, n, a) {
                    r.transform(t, e, i, s, n, a), this.__originalTransform(t, e, i, s, n, a);
                }),
                (a.setTransform = function (t, e, i, s, n, a) {
                    r.setTransform(t, e, i, s, n, a), this.__originalSetTransform(t, e, i, s, n, a);
                }),
                (a.resetTransform = function () {
                    r.resetTransform(), this.__originalResetTransform();
                }),
                (a.rotate = function (t) {
                    r.rotate(t), this.__originalRotate(t);
                }),
                (a.clip = function (t) {
                    r.clip(t), this.__originalClip(t);
                }),
                (a.moveTo = function (t, e) {
                    r.moveTo(t, e), this.__originalMoveTo(t, e);
                }),
                (a.lineTo = function (t, e) {
                    r.lineTo(t, e), this.__originalLineTo(t, e);
                }),
                (a.bezierCurveTo = function (t, e, i, s, n, a) {
                    r.bezierCurveTo(t, e, i, s, n, a), this.__originalBezierCurveTo(t, e, i, s, n, a);
                }),
                (a.rect = function (t, e, i, s) {
                    r.rect(t, e, i, s), this.__originalRect(t, e, i, s);
                }),
                (a.closePath = function () {
                    r.closePath(), this.__originalClosePath();
                }),
                (a.beginPath = function () {
                    r.beginPath(), this.__originalBeginPath();
                }),
                this.setGState(t, [["BM", "source-over"]]);
        }
        endSMaskMode() {
            if (!this.inSMaskMode) throw Error("endSMaskMode called while not in smask mode");
            this.ctx._removeMirroring(),
                rR(this.ctx, this.suspendedCtx),
                (this.ctx = this.suspendedCtx),
                (this.suspendedCtx = null);
        }
        compose(t) {
            if (!this.current.activeSMask) return;
            t
                ? ((t[0] = Math.floor(t[0])),
                  (t[1] = Math.floor(t[1])),
                  (t[2] = Math.ceil(t[2])),
                  (t[3] = Math.ceil(t[3])))
                : (t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]);
            let e = this.current.activeSMask,
                i = this.suspendedCtx;
            this.composeSMask(i, e, this.ctx, t),
                this.ctx.save(),
                this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height),
                this.ctx.restore();
        }
        composeSMask(t, e, i, s) {
            let n = s[0],
                a = s[1],
                r = s[2] - n,
                o = s[3] - a;
            0 !== r &&
                0 !== o &&
                (this.genericComposeSMask(
                    e.context,
                    i,
                    r,
                    o,
                    e.subtype,
                    e.backdrop,
                    e.transferMap,
                    n,
                    a,
                    e.offsetX,
                    e.offsetY,
                ),
                t.save(),
                (t.globalAlpha = 1),
                (t.globalCompositeOperation = "source-over"),
                t.setTransform(1, 0, 0, 1, 0, 0),
                t.drawImage(i.canvas, 0, 0),
                t.restore());
        }
        genericComposeSMask(t, e, i, s, n, a, r, o, l, h, d) {
            let c = t.canvas,
                u = o - h,
                p = l - d;
            if (a)
                if (u < 0 || p < 0 || u + i > c.width || p + s > c.height) {
                    let t = this.cachedCanvases.getCanvas("maskExtension", i, s),
                        e = t.context;
                    e.drawImage(c, -u, -p),
                        (e.globalCompositeOperation = "destination-atop"),
                        (e.fillStyle = a),
                        e.fillRect(0, 0, i, s),
                        (e.globalCompositeOperation = "source-over"),
                        (c = t.canvas),
                        (u = p = 0);
                } else {
                    t.save(), (t.globalAlpha = 1), t.setTransform(1, 0, 0, 1, 0, 0);
                    let e = new Path2D();
                    e.rect(u, p, i, s),
                        t.clip(e),
                        (t.globalCompositeOperation = "destination-atop"),
                        (t.fillStyle = a),
                        t.fillRect(u, p, i, s),
                        t.restore();
                }
            e.save(),
                (e.globalAlpha = 1),
                e.setTransform(1, 0, 0, 1, 0, 0),
                "Alpha" === n && r
                    ? (e.filter = this.filterFactory.addAlphaFilter(r))
                    : "Luminosity" === n && (e.filter = this.filterFactory.addLuminosityFilter(r));
            let g = new Path2D();
            g.rect(o, l, i, s),
                e.clip(g),
                (e.globalCompositeOperation = "destination-in"),
                e.drawImage(c, u, p, i, s, o, l, i, s),
                e.restore();
        }
        save(t) {
            this.inSMaskMode && rR(this.ctx, this.suspendedCtx), this.ctx.save();
            let e = this.current;
            this.stateStack.push(e), (this.current = e.clone()), this.dependencyTracker?.save(t);
        }
        restore(t) {
            if ((this.dependencyTracker?.restore(t), 0 === this.stateStack.length)) {
                this.inSMaskMode && this.endSMaskMode();
                return;
            }
            (this.current = this.stateStack.pop()),
                this.ctx.restore(),
                this.inSMaskMode && rR(this.suspendedCtx, this.ctx),
                this.checkSMaskState(),
                (this.pendingClip = null),
                (this._cachedScaleForStroking[0] = -1),
                (this._cachedGetSinglePixelWidth = null);
        }
        transform(t, e, i, s, n, a, r) {
            this.dependencyTracker?.recordIncrementalData("transform", t),
                this.ctx.transform(e, i, s, n, a, r),
                (this._cachedScaleForStroking[0] = -1),
                (this._cachedGetSinglePixelWidth = null);
        }
        constructPath(t, e, i, s) {
            let [n] = i;
            if (!s) {
                (n ||= i[0] = new Path2D()), this[e](t, n);
                return;
            }
            if (null !== this.dependencyTracker) {
                let i = e === E.stroke ? this.current.lineWidth / 2 : 0;
                this.dependencyTracker
                    .resetBBox(t)
                    .recordBBox(t, this.ctx, s[0] - i, s[2] + i, s[1] - i, s[3] + i)
                    .recordDependencies(t, ["transform"]);
            }
            n instanceof Path2D || (n = i[0] = tT(n)),
                V.axialAlignedBoundingBox(s, tm(this.ctx), this.current.minMax),
                this[e](t, n),
                (this._pathStartIdx = t);
        }
        closePath(t) {
            this.ctx.closePath();
        }
        stroke(t, e, i = !0) {
            let s = this.ctx,
                n = this.current.strokeColor;
            if (((s.globalAlpha = this.current.strokeAlpha), this.contentVisible))
                if ("object" == typeof n && n?.getPattern) {
                    let i = n.isModifyingCurrentTransform() ? s.getTransform() : null;
                    if ((s.save(), (s.strokeStyle = n.getPattern(s, this, tw(s), rw, t)), i)) {
                        let t = new Path2D();
                        t.addPath(e, s.getTransform().invertSelf().multiplySelf(i)), (e = t);
                    }
                    this.rescaleAndStroke(e, !1), s.restore();
                } else this.rescaleAndStroke(e, !0);
            this.dependencyTracker?.recordDependencies(t, rh),
                i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(rw, tm(this.ctx))),
                (s.globalAlpha = this.current.fillAlpha);
        }
        closeStroke(t, e) {
            this.stroke(t, e);
        }
        fill(t, e, i = !0) {
            let s = this.ctx,
                n = this.current.fillColor,
                a = this.current.patternFill,
                r = !1;
            if (a) {
                let i = n.isModifyingCurrentTransform() ? s.getTransform() : null;
                if (
                    (this.dependencyTracker?.save(t), s.save(), (s.fillStyle = n.getPattern(s, this, tw(s), rm, t)), i)
                ) {
                    let t = new Path2D();
                    t.addPath(e, s.getTransform().invertSelf().multiplySelf(i)), (e = t);
                }
                r = !0;
            }
            let o = this.current.getClippedPathBoundingBox();
            this.contentVisible &&
                null !== o &&
                (this.pendingEOFill ? (s.fill(e, "evenodd"), (this.pendingEOFill = !1)) : s.fill(e)),
                this.dependencyTracker?.recordDependencies(t, rd),
                r && (s.restore(), this.dependencyTracker?.restore(t)),
                i && this.consumePath(t, e, o);
        }
        eoFill(t, e) {
            (this.pendingEOFill = !0), this.fill(t, e);
        }
        fillStroke(t, e) {
            this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
        }
        eoFillStroke(t, e) {
            (this.pendingEOFill = !0), this.fillStroke(t, e);
        }
        closeFillStroke(t, e) {
            this.fillStroke(t, e);
        }
        closeEOFillStroke(t, e) {
            (this.pendingEOFill = !0), this.fillStroke(t, e);
        }
        endPath(t, e) {
            this.consumePath(t, e);
        }
        rawFillPath(t, e) {
            this.ctx.fill(e), this.dependencyTracker?.recordDependencies(t, ru).recordOperation(t);
        }
        clip(t) {
            this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), (this.pendingClip = rW);
        }
        eoClip(t) {
            this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), (this.pendingClip = rU);
        }
        beginText(t) {
            (this.current.textMatrix = null),
                (this.current.textMatrixScale = 1),
                (this.current.x = this.current.lineX = 0),
                (this.current.y = this.current.lineY = 0),
                this.dependencyTracker
                    ?.recordOpenMarker(t)
                    .resetIncrementalData("sameLineText")
                    .resetIncrementalData("moveText", t);
        }
        endText(t) {
            let e = this.pendingTextPaths,
                i = this.ctx;
            if (this.dependencyTracker) {
                let { dependencyTracker: i } = this;
                void 0 !== e &&
                    i
                        .recordFutureForcedDependency("textClip", i.getOpenMarker())
                        .recordFutureForcedDependency("textClip", t),
                    i.recordCloseMarker(t);
            }
            if (void 0 !== e) {
                let t = new Path2D(),
                    s = i.getTransform().invertSelf();
                for (let { transform: i, x: n, y: a, fontSize: r, path: o } of e)
                    o && t.addPath(o, new DOMMatrix(i).preMultiplySelf(s).translate(n, a).scale(r, -r));
                i.clip(t);
            }
            delete this.pendingTextPaths;
        }
        setCharSpacing(t, e) {
            this.dependencyTracker?.recordSimpleData("charSpacing", t), (this.current.charSpacing = e);
        }
        setWordSpacing(t, e) {
            this.dependencyTracker?.recordSimpleData("wordSpacing", t), (this.current.wordSpacing = e);
        }
        setHScale(t, e) {
            this.dependencyTracker?.recordSimpleData("hScale", t), (this.current.textHScale = e / 100);
        }
        setLeading(t, e) {
            this.dependencyTracker?.recordSimpleData("leading", t), (this.current.leading = -e);
        }
        setFont(t, e, i) {
            this.dependencyTracker?.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
            let s = this.commonObjs.get(e),
                n = this.current;
            if (!s) throw Error(`Can't find font for ${e}`);
            if (
                ((n.fontMatrix = s.fontMatrix || v),
                (0 === n.fontMatrix[0] || 0 === n.fontMatrix[3]) && P("Invalid font matrix for font " + e),
                i < 0 ? ((i = -i), (n.fontDirection = -1)) : (n.fontDirection = 1),
                (this.current.font = s),
                (this.current.fontSize = i),
                s.isType3Font)
            )
                return;
            let a = s.loadedName || "sans-serif",
                r = s.systemFontInfo?.css || `"${a}", ${s.fallbackName}`,
                o = "normal";
            s.black ? (o = "900") : s.bold && (o = "bold");
            let l = s.italic ? "italic" : "normal",
                h = i;
            i < 16 ? (h = 16) : i > 100 && (h = 100),
                (this.current.fontSizeScale = i / h),
                (this.ctx.font = `${l} ${o} ${h}px ${r}`);
        }
        setTextRenderingMode(t, e) {
            this.dependencyTracker?.recordSimpleData("textRenderingMode", t), (this.current.textRenderingMode = e);
        }
        setTextRise(t, e) {
            this.dependencyTracker?.recordSimpleData("textRise", t), (this.current.textRise = e);
        }
        moveText(t, e, i) {
            this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t),
                (this.current.x = this.current.lineX += e),
                (this.current.y = this.current.lineY += i);
        }
        setLeadingMoveText(t, e, i) {
            this.setLeading(t, -i), this.moveText(t, e, i);
        }
        setTextMatrix(t, e) {
            this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t);
            let { current: i } = this;
            (i.textMatrix = e), (i.textMatrixScale = Math.hypot(e[0], e[1])), (i.x = i.lineX = 0), (i.y = i.lineY = 0);
        }
        nextLine(t) {
            this.moveText(t, 0, this.current.leading),
                this.dependencyTracker?.recordIncrementalData(
                    "moveText",
                    this.dependencyTracker.getSimpleIndex("leading") ?? t,
                );
        }
        paintChar(t, e, i, s, n, a) {
            let r,
                o = this.ctx,
                l = this.current,
                h = l.font,
                c = l.textRenderingMode,
                u = l.fontSize / l.fontSizeScale,
                p = 3 & c,
                g = !!(4 & c),
                f = l.patternFill && !h.missingFile,
                m = l.patternStroke && !h.missingFile;
            if (
                ((h.disableFontFace || g || f || m) && !h.missingFile && (r = h.getPathGenerator(this.commonObjs, e)),
                r && (h.disableFontFace || f || m))
            ) {
                let e;
                if (
                    (o.save(),
                    o.translate(i, s),
                    o.scale(u, -u),
                    this.dependencyTracker?.recordCharacterBBox(t, o, h),
                    0 === p || 2 === p)
                )
                    if (n) {
                        (e = o.getTransform()), o.setTransform(...n);
                        let t = d(r$, this, rG).call(this, r, e, n);
                        o.fill(t);
                    } else o.fill(r);
                if (1 === p || 2 === p)
                    if (a) {
                        (e ||= o.getTransform()), o.setTransform(...a);
                        let { a: t, b: i, c: s, d: n } = e,
                            l = V.inverseTransform(a),
                            h = V.transform([t, i, s, n, 0, 0], l);
                        V.singularValueDecompose2dScale(h, rE),
                            (o.lineWidth *= Math.max(rE[0], rE[1]) / u),
                            o.stroke(d(r$, this, rG).call(this, r, e, a));
                    } else (o.lineWidth /= u), o.stroke(r);
                o.restore();
            } else
                (0 === p || 2 === p) &&
                    (o.fillText(e, i, s),
                    this.dependencyTracker?.recordCharacterBBox(t, o, h, u, i, s, () => o.measureText(e))),
                    (1 === p || 2 === p) &&
                        (this.dependencyTracker &&
                            this.dependencyTracker
                                ?.recordCharacterBBox(t, o, h, u, i, s, () => o.measureText(e))
                                .recordDependencies(t, rh),
                        o.strokeText(e, i, s));
            g &&
                ((this.pendingTextPaths ||= []).push({ transform: tm(o), x: i, y: s, fontSize: u, path: r }),
                this.dependencyTracker?.recordCharacterBBox(t, o, h, u, i, s));
        }
        get isFontSubpixelAAEnabled() {
            let { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
            t.scale(1.5, 1), t.fillText("I", 0, 10);
            let e = t.getImageData(0, 0, 10, 10).data,
                i = !1;
            for (let t = 3; t < e.length; t += 4)
                if (e[t] > 0 && e[t] < 255) {
                    i = !0;
                    break;
                }
            return F(this, "isFontSubpixelAAEnabled", i);
        }
        showText(t, e) {
            let i, s;
            this.dependencyTracker &&
                (this.dependencyTracker.recordDependencies(t, rp).resetBBox(t),
                4 & this.current.textRenderingMode &&
                    this.dependencyTracker
                        .recordFutureForcedDependency("textClip", t)
                        .inheritPendingDependenciesAsFutureForcedDependencies());
            let n = this.current,
                a = n.font;
            if (a.isType3Font) {
                this.showType3Text(t, e), this.dependencyTracker?.recordShowTextOperation(t);
                return;
            }
            let r = n.fontSize;
            if (0 === r) return void this.dependencyTracker?.recordOperation(t);
            let o = this.ctx,
                l = n.fontSizeScale,
                h = n.charSpacing,
                d = n.wordSpacing,
                c = n.fontDirection,
                u = n.textHScale * c,
                p = e.length,
                g = a.vertical,
                f = g ? 1 : -1,
                m = a.defaultVMetrics,
                w = r * n.fontMatrix[0],
                b = 0 === n.textRenderingMode && !a.disableFontFace && !n.patternFill;
            o.save(),
                n.textMatrix && o.transform(...n.textMatrix),
                o.translate(n.x, n.y + n.textRise),
                c > 0 ? o.scale(u, -1) : o.scale(u, 1);
            let v = 3 & n.textRenderingMode,
                A = 1 === v || 2 === v;
            if ((0 === v || 2 === v) && n.patternFill) {
                o.save();
                let e = n.fillColor.getPattern(o, this, tw(o), rm, t);
                (i = tm(o)), o.restore(), (o.fillStyle = e);
            }
            if (A && n.patternStroke) {
                o.save();
                let e = n.strokeColor.getPattern(o, this, tw(o), rw, t);
                (s = tm(o)), o.restore(), (o.strokeStyle = e);
            }
            let y = n.lineWidth,
                _ = n.textMatrixScale;
            if (
                (0 === _ || 0 === y ? A && (y = this.getSinglePixelWidth()) : (y /= _),
                1 !== l && (o.scale(l, l), (y /= l)),
                (o.lineWidth = y),
                a.isInvalidPDFjsFont)
            ) {
                let i = [],
                    s = 0;
                for (let t of e) i.push(t.unicode), (s += t.width);
                let a = i.join("");
                if ((o.fillText(a, 0, 0), null !== this.dependencyTracker)) {
                    let e = o.measureText(a);
                    this.dependencyTracker
                        .recordBBox(
                            t,
                            this.ctx,
                            -e.actualBoundingBoxLeft,
                            e.actualBoundingBoxRight,
                            -e.actualBoundingBoxAscent,
                            e.actualBoundingBoxDescent,
                        )
                        .recordShowTextOperation(t);
                }
                (n.x += s * w * u), o.restore(), this.compose();
                return;
            }
            let x = 0,
                k;
            for (k = 0; k < p; ++k) {
                let n,
                    u,
                    p,
                    v = e[k];
                if ("number" == typeof v) {
                    x += (f * v * r) / 1e3;
                    continue;
                }
                let A = !1,
                    y = (v.isSpace ? d : 0) + h,
                    _ = v.fontChar,
                    M = v.accent,
                    S = v.width;
                if (g) {
                    let t = v.vmetric || m,
                        e = -(v.vmetric ? t[1] : 0.5 * S) * w,
                        i = t[2] * w;
                    (S = t ? -t[0] : S), (n = e / l), (u = (x + i) / l);
                } else (n = x / l), (u = 0);
                if (a.remeasure && S > 0) {
                    let t = ((1e3 * (p = o.measureText(_)).width) / r) * l;
                    if (S < t && this.isFontSubpixelAAEnabled) {
                        let e = S / t;
                        (A = !0), o.save(), o.scale(e, 1), (n /= e);
                    } else S !== t && (n += (((S - t) / 2e3) * r) / l);
                }
                if (this.contentVisible && (v.isInFont || a.missingFile)) {
                    if (b && !M)
                        o.fillText(_, n, u),
                            this.dependencyTracker?.recordCharacterBBox(
                                t,
                                o,
                                p ? { bbox: null } : a,
                                r / l,
                                n,
                                u,
                                () => p ?? o.measureText(_),
                            );
                    else if ((this.paintChar(t, _, n, u, i, s), M)) {
                        let e = n + (r * M.offset.x) / l,
                            a = u - (r * M.offset.y) / l;
                        this.paintChar(t, M.fontChar, e, a, i, s);
                    }
                }
                (x += g ? S * w - y * c : S * w + y * c), A && o.restore();
            }
            g ? (n.y -= x) : (n.x += x * u),
                o.restore(),
                this.compose(),
                this.dependencyTracker?.recordShowTextOperation(t);
        }
        showType3Text(t, e) {
            let i,
                s,
                n,
                a,
                r = this.ctx,
                o = this.current,
                l = o.font,
                h = o.fontSize,
                d = o.fontDirection,
                c = l.vertical ? 1 : -1,
                u = o.charSpacing,
                p = o.wordSpacing,
                g = o.textHScale * d,
                f = o.fontMatrix || v,
                m = e.length;
            if (3 === o.textRenderingMode || 0 === h) return;
            (this._cachedScaleForStroking[0] = -1),
                (this._cachedGetSinglePixelWidth = null),
                r.save(),
                o.textMatrix && r.transform(...o.textMatrix),
                r.translate(o.x, o.y + o.textRise),
                r.scale(g, d);
            let w = this.dependencyTracker;
            for (i = 0, this.dependencyTracker = w ? new rl(w, t) : null; i < m; ++i) {
                if ("number" == typeof (s = e[i])) {
                    (a = (c * s * h) / 1e3), this.ctx.translate(a, 0), (o.x += a * g);
                    continue;
                }
                let t = (s.isSpace ? p : 0) + u,
                    d = l.charProcOperatorList[s.operatorListId];
                d
                    ? this.contentVisible &&
                      (this.save(), r.scale(h, h), r.transform(...f), this.executeOperatorList(d), this.restore())
                    : P(`Type3 character "${s.operatorListId}" is not available.`);
                let m = [s.width, 0];
                V.applyTransform(m, f), (n = m[0] * h + t), r.translate(n, 0), (o.x += n * g);
            }
            r.restore(), w && (this.dependencyTracker = w);
        }
        setCharWidth(t, e, i) {}
        setCharWidthAndBounds(t, e, i, s, n, a, r) {
            let o = new Path2D();
            o.rect(s, n, a - s, r - n),
                this.ctx.clip(o),
                this.dependencyTracker?.recordBBox(t, this.ctx, s, a, n, r).recordClipBox(t, this.ctx, s, a, n, r),
                this.endPath(t);
        }
        getColorN_Pattern(e, i) {
            let s;
            if ("TilingPattern" === i[0]) {
                let e = this.baseTransform || tm(this.ctx);
                s = new rM(
                    i,
                    this.ctx,
                    {
                        createCanvasGraphics: (e, i) =>
                            new t(
                                e,
                                this.commonObjs,
                                this.objs,
                                this.canvasFactory,
                                this.filterFactory,
                                {
                                    optionalContentConfig: this.optionalContentConfig,
                                    markedContentStack: this.markedContentStack,
                                },
                                void 0,
                                void 0,
                                this.dependencyTracker ? new rl(this.dependencyTracker, i, !0) : null,
                            ),
                    },
                    e,
                );
            } else s = this._getPattern(e, i[1], i[2]);
            return s;
        }
        setStrokeColorN(t, ...e) {
            this.dependencyTracker?.recordSimpleData("strokeColor", t),
                (this.current.strokeColor = this.getColorN_Pattern(t, e)),
                (this.current.patternStroke = !0);
        }
        setFillColorN(t, ...e) {
            this.dependencyTracker?.recordSimpleData("fillColor", t),
                (this.current.fillColor = this.getColorN_Pattern(t, e)),
                (this.current.patternFill = !0);
        }
        setStrokeRGBColor(t, e) {
            this.dependencyTracker?.recordSimpleData("strokeColor", t),
                (this.ctx.strokeStyle = this.current.strokeColor = e),
                (this.current.patternStroke = !1);
        }
        setStrokeTransparent(t) {
            this.dependencyTracker?.recordSimpleData("strokeColor", t),
                (this.ctx.strokeStyle = this.current.strokeColor = "transparent"),
                (this.current.patternStroke = !1);
        }
        setFillRGBColor(t, e) {
            this.dependencyTracker?.recordSimpleData("fillColor", t),
                (this.ctx.fillStyle = this.current.fillColor = e),
                (this.current.patternFill = !1);
        }
        setFillTransparent(t) {
            this.dependencyTracker?.recordSimpleData("fillColor", t),
                (this.ctx.fillStyle = this.current.fillColor = "transparent"),
                (this.current.patternFill = !1);
        }
        _getPattern(t, e, i = null) {
            let s;
            return (
                this.cachedPatterns.has(e)
                    ? (s = this.cachedPatterns.get(e))
                    : ((s = (function (t) {
                          switch (t[0]) {
                              case "RadialAxial":
                                  return new ry(t);
                              case "Mesh":
                                  return new rx(t);
                              case "Dummy":
                                  return new rk();
                          }
                          throw Error(`Unknown IR type: ${t[0]}`);
                      })(this.getObject(t, e))),
                      this.cachedPatterns.set(e, s)),
                i && (s.matrix = i),
                s
            );
        }
        shadingFill(t, e) {
            if (!this.contentVisible) return;
            let i = this.ctx;
            this.save(t), (i.fillStyle = this._getPattern(t, e).getPattern(i, this, tw(i), rb, t));
            let s = tw(i);
            if (s) {
                let { width: t, height: e } = i.canvas,
                    n = rC.slice();
                V.axialAlignedBoundingBox([0, 0, t, e], s, n);
                let [a, r, o, l] = n;
                this.ctx.fillRect(a, r, o - a, l - r);
            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            this.dependencyTracker
                ?.resetBBox(t)
                .recordFullPageBBox(t)
                .recordDependencies(t, rg)
                .recordDependencies(t, rd)
                .recordOperation(t),
                this.compose(this.current.getClippedPathBoundingBox()),
                this.restore(t);
        }
        beginInlineImage() {
            D("Should not call beginInlineImage");
        }
        beginImageData() {
            D("Should not call beginImageData");
        }
        paintFormXObjectBegin(t, e, i) {
            if (
                this.contentVisible &&
                (this.save(t),
                this.baseTransformStack.push(this.baseTransform),
                e && this.transform(t, ...e),
                (this.baseTransform = tm(this.ctx)),
                i)
            ) {
                V.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
                let [e, s, n, a] = i,
                    r = new Path2D();
                r.rect(e, s, n - e, a - s),
                    this.ctx.clip(r),
                    this.dependencyTracker?.recordClipBox(t, this.ctx, e, n, s, a),
                    this.endPath(t);
            }
        }
        paintFormXObjectEnd(t) {
            this.contentVisible && (this.restore(t), (this.baseTransform = this.baseTransformStack.pop()));
        }
        beginGroup(t, e) {
            if (!this.contentVisible) return;
            this.save(t), this.inSMaskMode && (this.endSMaskMode(), (this.current.activeSMask = null));
            let i = this.ctx;
            e.isolated || T("TODO: Support non-isolated groups."), e.knockout && P("Knockout groups not supported.");
            let s = tm(i);
            if ((e.matrix && i.transform(...e.matrix), !e.bbox)) throw Error("Bounding box is required.");
            let n = rC.slice();
            V.axialAlignedBoundingBox(e.bbox, tm(i), n);
            let a = [0, 0, i.canvas.width, i.canvas.height],
                r = Math.floor((n = V.intersect(n, a) || [0, 0, 0, 0])[0]),
                o = Math.floor(n[1]),
                l = Math.max(Math.ceil(n[2]) - r, 1),
                h = Math.max(Math.ceil(n[3]) - o, 1);
            this.current.startNewPathAndClipBox([0, 0, l, h]);
            let d = "groupAt" + this.groupLevel;
            e.smask && (d += "_smask_" + (this.smaskCounter++ % 2));
            let c = this.cachedCanvases.getCanvas(d, l, h),
                u = c.context;
            u.translate(-r, -o), u.transform(...s);
            let p = new Path2D(),
                [g, f, m, w] = e.bbox;
            if ((p.rect(g, f, m - g, w - f), e.matrix)) {
                let t = new Path2D();
                t.addPath(p, new DOMMatrix(e.matrix)), (p = t);
            }
            u.clip(p),
                e.smask &&
                    this.smaskStack.push({
                        canvas: c.canvas,
                        context: u,
                        offsetX: r,
                        offsetY: o,
                        subtype: e.smask.subtype,
                        backdrop: e.smask.backdrop,
                        transferMap: e.smask.transferMap || null,
                        startTransformInverse: null,
                    }),
                (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(r, o), i.save()),
                rR(i, u),
                (this.ctx = u),
                this.dependencyTracker
                    ?.inheritSimpleDataAsFutureForcedDependencies([
                        "fillAlpha",
                        "strokeAlpha",
                        "globalCompositeOperation",
                    ])
                    .pushBaseTransform(i),
                this.setGState(t, [
                    ["BM", "source-over"],
                    ["ca", 1],
                    ["CA", 1],
                ]),
                this.groupStack.push(i),
                this.groupLevel++;
        }
        endGroup(t, e) {
            if (!this.contentVisible) return;
            this.groupLevel--;
            let i = this.ctx;
            if (
                ((this.ctx = this.groupStack.pop()),
                (this.ctx.imageSmoothingEnabled = !1),
                this.dependencyTracker?.popBaseTransform(),
                e.smask)
            )
                (this.tempSMask = this.smaskStack.pop()), this.restore(t), this.dependencyTracker && this.ctx.restore();
            else {
                this.ctx.restore();
                let e = tm(this.ctx);
                this.restore(t), this.ctx.save(), this.ctx.setTransform(...e);
                let s = rC.slice();
                V.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], e, s),
                    this.ctx.drawImage(i.canvas, 0, 0),
                    this.ctx.restore(),
                    this.compose(s);
            }
        }
        beginAnnotation(t, e, i, s, n, a) {
            if (
                (d(r$, this, rj).call(this),
                rF(this.ctx),
                this.ctx.save(),
                this.save(t),
                this.baseTransform && this.ctx.setTransform(...this.baseTransform),
                i)
            ) {
                let n = i[2] - i[0],
                    r = i[3] - i[1];
                if (a && this.annotationCanvasMap) {
                    (s = s.slice()),
                        (s[4] -= i[0]),
                        (s[5] -= i[1]),
                        ((i = i.slice())[0] = i[1] = 0),
                        (i[2] = n),
                        (i[3] = r),
                        V.singularValueDecompose2dScale(tm(this.ctx), rE);
                    let { viewportScale: t } = this,
                        a = Math.ceil(n * this.outputScaleX * t),
                        o = Math.ceil(r * this.outputScaleY * t);
                    this.annotationCanvas = this.canvasFactory.create(a, o);
                    let { canvas: l, context: h } = this.annotationCanvas;
                    this.annotationCanvasMap.set(e, l),
                        (this.annotationCanvas.savedCtx = this.ctx),
                        (this.ctx = h),
                        this.ctx.save(),
                        this.ctx.setTransform(rE[0], 0, 0, -rE[1], 0, r * rE[1]),
                        rF(this.ctx);
                } else {
                    rF(this.ctx), this.endPath(t);
                    let e = new Path2D();
                    e.rect(i[0], i[1], n, r), this.ctx.clip(e);
                }
            }
            (this.current = new rD(this.ctx.canvas.width, this.ctx.canvas.height)),
                this.transform(t, ...s),
                this.transform(t, ...n);
        }
        endAnnotation(t) {
            this.annotationCanvas &&
                (this.ctx.restore(),
                d(r$, this, rz).call(this),
                (this.ctx = this.annotationCanvas.savedCtx),
                delete this.annotationCanvas.savedCtx,
                delete this.annotationCanvas);
        }
        paintImageMaskXObject(t, e) {
            if (!this.contentVisible) return;
            let i = e.count;
            (e = this.getObject(t, e.data, e)).count = i;
            let s = this.ctx,
                n = this._createMaskCanvas(t, e),
                a = n.canvas;
            s.save(),
                s.setTransform(1, 0, 0, 1, 0, 0),
                s.drawImage(a, n.offsetX, n.offsetY),
                this.dependencyTracker
                    ?.resetBBox(t)
                    .recordBBox(t, this.ctx, n.offsetX, n.offsetX + a.width, n.offsetY, n.offsetY + a.height)
                    .recordOperation(t),
                s.restore(),
                this.compose();
        }
        paintImageMaskXObjectRepeat(t, e, i, s = 0, n = 0, a, r) {
            if (!this.contentVisible) return;
            e = this.getObject(t, e.data, e);
            let o = this.ctx;
            o.save();
            let l = tm(o);
            o.transform(i, s, n, a, 0, 0);
            let h = this._createMaskCanvas(t, e);
            o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]), this.dependencyTracker?.resetBBox(t);
            for (let e = 0, d = r.length; e < d; e += 2) {
                let d = V.transform(l, [i, s, n, a, r[e], r[e + 1]]);
                o.drawImage(h.canvas, d[4], d[5]),
                    this.dependencyTracker?.recordBBox(
                        t,
                        this.ctx,
                        d[4],
                        d[4] + h.canvas.width,
                        d[5],
                        d[5] + h.canvas.height,
                    );
            }
            o.restore(), this.compose(), this.dependencyTracker?.recordOperation(t);
        }
        paintImageMaskXObjectGroup(t, e) {
            if (!this.contentVisible) return;
            let i = this.ctx,
                s = this.current.fillColor,
                n = this.current.patternFill;
            for (let a of (this.dependencyTracker?.resetBBox(t).recordDependencies(t, rf), e)) {
                let { data: e, width: r, height: o, transform: l } = a,
                    h = this.cachedCanvases.getCanvas("maskCanvas", r, o),
                    d = h.context;
                d.save(),
                    rL(d, this.getObject(t, e, a)),
                    (d.globalCompositeOperation = "source-in"),
                    (d.fillStyle = n ? s.getPattern(d, this, tw(i), rm, t) : s),
                    d.fillRect(0, 0, r, o),
                    d.restore(),
                    i.save(),
                    i.transform(...l),
                    i.scale(1, -1),
                    rP(i, h.canvas, 0, 0, r, o, 0, -1, 1, 1),
                    this.dependencyTracker?.recordBBox(t, i, 0, r, 0, o),
                    i.restore();
            }
            this.compose(), this.dependencyTracker?.recordOperation(t);
        }
        paintImageXObject(t, e) {
            if (!this.contentVisible) return;
            let i = this.getObject(t, e);
            i ? this.paintInlineImageXObject(t, i) : P("Dependent image isn't ready yet");
        }
        paintImageXObjectRepeat(t, e, i, s, n) {
            if (!this.contentVisible) return;
            let a = this.getObject(t, e);
            if (!a) return void P("Dependent image isn't ready yet");
            let r = a.width,
                o = a.height,
                l = [];
            for (let t = 0, e = n.length; t < e; t += 2)
                l.push({ transform: [i, 0, 0, s, n[t], n[t + 1]], x: 0, y: 0, w: r, h: o });
            this.paintInlineImageXObjectGroup(t, a, l);
        }
        applyTransferMapsToCanvas(t) {
            return (
                "none" !== this.current.transferMaps &&
                    ((t.filter = this.current.transferMaps), t.drawImage(t.canvas, 0, 0), (t.filter = "none")),
                t.canvas
            );
        }
        applyTransferMapsToBitmap(t) {
            if ("none" === this.current.transferMaps) return t.bitmap;
            let { bitmap: e, width: i, height: s } = t,
                n = this.cachedCanvases.getCanvas("inlineImage", i, s),
                a = n.context;
            return (a.filter = this.current.transferMaps), a.drawImage(e, 0, 0), (a.filter = "none"), n.canvas;
        }
        paintInlineImageXObject(t, e) {
            let i;
            if (!this.contentVisible) return;
            let s = e.width,
                n = e.height,
                a = this.ctx;
            this.save(t);
            let { filter: r } = a;
            if (("none" !== r && "" !== r && (a.filter = "none"), a.scale(1 / s, -1 / n), e.bitmap))
                i = this.applyTransferMapsToBitmap(e);
            else if (("function" == typeof HTMLElement && e instanceof HTMLElement) || !e.data) i = e;
            else {
                let t = this.cachedCanvases.getCanvas("inlineImage", s, n).context;
                rI(t, e), (i = this.applyTransferMapsToCanvas(t));
            }
            let o = this._scaleImage(i, tw(a));
            (a.imageSmoothingEnabled = rN(tm(a), e.interpolate)),
                this.dependencyTracker
                    ?.resetBBox(t)
                    .recordBBox(t, a, 0, s, -n, 0)
                    .recordDependencies(t, rc)
                    .recordOperation(t),
                rP(a, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -n, s, n),
                this.compose(),
                this.restore(t);
        }
        paintInlineImageXObjectGroup(t, e, i) {
            let s;
            if (!this.contentVisible) return;
            let n = this.ctx;
            if (e.bitmap) s = e.bitmap;
            else {
                let t = e.width,
                    i = e.height,
                    n = this.cachedCanvases.getCanvas("inlineImage", t, i).context;
                rI(n, e), (s = this.applyTransferMapsToCanvas(n));
            }
            for (let e of (this.dependencyTracker?.resetBBox(t), i))
                n.save(),
                    n.transform(...e.transform),
                    n.scale(1, -1),
                    rP(n, s, e.x, e.y, e.w, e.h, 0, -1, 1, 1),
                    this.dependencyTracker?.recordBBox(t, n, 0, 1, -1, 0),
                    n.restore();
            this.dependencyTracker?.recordOperation(t), this.compose();
        }
        paintSolidColorImageMask(t) {
            this.contentVisible &&
                (this.dependencyTracker
                    ?.resetBBox(t)
                    .recordBBox(t, this.ctx, 0, 1, 0, 1)
                    .recordDependencies(t, rd)
                    .recordOperation(t),
                this.ctx.fillRect(0, 0, 1, 1),
                this.compose());
        }
        markPoint(t, e) {}
        markPointProps(t, e, i) {}
        beginMarkedContent(t, e) {
            this.dependencyTracker?.beginMarkedContent(t), this.markedContentStack.push({ visible: !0 });
        }
        beginMarkedContentProps(t, e, i) {
            this.dependencyTracker?.beginMarkedContent(t),
                "OC" === e
                    ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(i) })
                    : this.markedContentStack.push({ visible: !0 }),
                (this.contentVisible = this.isContentVisible());
        }
        endMarkedContent(t) {
            this.dependencyTracker?.endMarkedContent(t),
                this.markedContentStack.pop(),
                (this.contentVisible = this.isContentVisible());
        }
        beginCompat(t) {}
        endCompat(t) {}
        consumePath(t, e, i) {
            let s = this.current.isEmptyClip();
            this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
            let n = this.ctx;
            this.pendingClip
                ? (s || (this.pendingClip === rU ? n.clip(e, "evenodd") : n.clip(e)),
                  (this.pendingClip = null),
                  this.dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t))
                : this.dependencyTracker?.recordOperation(t),
                this.current.startNewPathAndClipBox(this.current.clipBox);
        }
        getSinglePixelWidth() {
            if (!this._cachedGetSinglePixelWidth) {
                let t = tm(this.ctx);
                if (0 === t[1] && 0 === t[2])
                    this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
                else {
                    let e = Math.abs(t[0] * t[3] - t[2] * t[1]),
                        i = Math.hypot(t[0], t[2]),
                        s = Math.hypot(t[1], t[3]);
                    this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
                }
            }
            return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
            if (-1 === this._cachedScaleForStroking[0]) {
                let t,
                    e,
                    { lineWidth: i } = this.current,
                    { a: s, b: n, c: a, d: r } = this.ctx.getTransform();
                if (0 === n && 0 === a) {
                    let n = Math.abs(s),
                        a = Math.abs(r);
                    if (n === a)
                        if (0 === i) t = e = 1 / n;
                        else {
                            let s = n * i;
                            t = e = s < 1 ? 1 / s : 1;
                        }
                    else if (0 === i) (t = 1 / n), (e = 1 / a);
                    else {
                        let s = n * i,
                            r = a * i;
                        (t = s < 1 ? 1 / s : 1), (e = r < 1 ? 1 / r : 1);
                    }
                } else {
                    let o = Math.abs(s * r - n * a),
                        l = Math.hypot(s, n),
                        h = Math.hypot(a, r);
                    if (0 === i) (t = h / o), (e = l / o);
                    else {
                        let s = i * o;
                        (t = h > s ? h / s : 1), (e = l > s ? l / s : 1);
                    }
                }
                (this._cachedScaleForStroking[0] = t), (this._cachedScaleForStroking[1] = e);
            }
            return this._cachedScaleForStroking;
        }
        rescaleAndStroke(t, e) {
            let {
                    ctx: i,
                    current: { lineWidth: s },
                } = this,
                [n, a] = this.getScaleForStroking();
            if (n === a) {
                (i.lineWidth = (s || 1) * n), i.stroke(t);
                return;
            }
            let r = i.getLineDash();
            e && i.save(), i.scale(n, a), (rS.a = 1 / n), (rS.d = 1 / a);
            let o = new Path2D();
            if ((o.addPath(t, rS), r.length > 0)) {
                let t = Math.max(n, a);
                i.setLineDash(r.map((e) => e / t)), (i.lineDashOffset /= t);
            }
            (i.lineWidth = s || 1), i.stroke(o), e && i.restore();
        }
        isContentVisible() {
            for (let t = this.markedContentStack.length - 1; t >= 0; t--)
                if (!this.markedContentStack[t].visible) return !1;
            return !0;
        }
    };
function rj() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    (this.current.activeSMask = null),
        this.ctx.restore(),
        this.transparentCanvas &&
            ((this.ctx = this.compositeCtx),
            this.ctx.save(),
            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
            this.ctx.drawImage(this.transparentCanvas, 0, 0),
            this.ctx.restore(),
            (this.transparentCanvas = null));
}
function rz() {
    if (this.pageColors) {
        let t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
        if ("none" !== t) {
            let e = this.ctx.filter;
            (this.ctx.filter = t), this.ctx.drawImage(this.ctx.canvas, 0, 0), (this.ctx.filter = e);
        }
    }
}
function rG(t, e, i) {
    let s = new Path2D();
    return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
}
for (let t in E) void 0 !== rH.prototype[t] && (rH.prototype[E[t]] = rH.prototype[t]);
var rV = class t {
        static get workerPort() {
            return d(t, this, rq)._;
        }
        static set workerPort(e) {
            if (!("u" > typeof Worker && e instanceof Worker) && null !== e) throw Error("Invalid `workerPort` type.");
            rq._ = d(t, this, e);
        }
        static get workerSrc() {
            return d(t, this, rX)._;
        }
        static set workerSrc(e) {
            if ("string" != typeof e) throw Error("Invalid `workerSrc` type.");
            rX._ = d(t, this, e);
        }
    },
    rq = { _: null },
    rX = { _: "" },
    rK = new WeakMap(),
    rY = new WeakMap();
n = Symbol.iterator;
var rQ = class {
        constructor({ parsedData: t, rawData: e }) {
            p(this, rK, void 0), p(this, rY, void 0), g(rK, this, t), g(rY, this, e);
        }
        getRaw() {
            return f(rY, this);
        }
        get(t) {
            return f(rK, this).get(t) ?? null;
        }
        [n]() {
            return f(rK, this).entries();
        }
    },
    rJ = Symbol("INTERNAL"),
    rZ = new WeakMap(),
    r0 = new WeakMap(),
    r1 = new WeakMap(),
    r2 = new WeakMap(),
    r3 = class {
        constructor(t, { name: e, intent: i, usage: s, rbGroups: n }) {
            p(this, rZ, !1),
                p(this, r0, !1),
                p(this, r1, !1),
                p(this, r2, !0),
                g(rZ, this, !!(2 & t)),
                g(r0, this, !!(4 & t)),
                (this.name = e),
                (this.intent = i),
                (this.usage = s),
                (this.rbGroups = n);
        }
        get visible() {
            if (f(r1, this)) return f(r2, this);
            if (!f(r2, this)) return !1;
            let { print: t, view: e } = this.usage;
            return f(rZ, this) ? e?.viewState !== "OFF" : !f(r0, this) || t?.printState !== "OFF";
        }
        _setVisible(t, e, i = !1) {
            t !== rJ && D("Internal method `_setVisible` called."), g(r1, this, i), g(r2, this, e);
        }
    },
    r5 = new WeakMap(),
    r4 = new WeakMap(),
    r6 = new WeakMap(),
    r8 = new WeakMap(),
    r7 = new WeakSet();
a = Symbol.iterator;
var r9 = class {
    constructor(t, e = 2) {
        if (
            (u(this, r7),
            p(this, r5, null),
            p(this, r4, new Map()),
            p(this, r6, null),
            p(this, r8, null),
            (this.renderingIntent = e),
            (this.name = null),
            (this.creator = null),
            null === t)
        )
            return;
        for (const i of ((this.name = t.name), (this.creator = t.creator), g(r8, this, t.order), t.groups))
            f(r4, this).set(i.id, new r3(e, i));
        if ("OFF" === t.baseState) for (const t of f(r4, this).values()) t._setVisible(rJ, !1);
        for (const e of t.on) f(r4, this).get(e)._setVisible(rJ, !0);
        for (const e of t.off) f(r4, this).get(e)._setVisible(rJ, !1);
        g(r6, this, this.getHash());
    }
    isVisible(t) {
        if (0 === f(r4, this).size) return !0;
        if (!t) return T("Optional content group not defined."), !0;
        if ("OCG" === t.type)
            return f(r4, this).has(t.id)
                ? f(r4, this).get(t.id).visible
                : (P(`Optional content group not found: ${t.id}`), !0);
        if ("OCMD" === t.type) {
            if (t.expression) return d(r7, this, ot).call(this, t.expression);
            if (t.policy && "AnyOn" !== t.policy) {
                if ("AllOn" === t.policy) {
                    for (let e of t.ids) {
                        if (!f(r4, this).has(e)) {
                            P(`Optional content group not found: ${e}`);
                            break;
                        }
                        if (!f(r4, this).get(e).visible) return !1;
                    }
                    return !0;
                } else if ("AnyOff" === t.policy) {
                    for (let e of t.ids) {
                        if (!f(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
                        if (!f(r4, this).get(e).visible) return !0;
                    }
                    return !1;
                } else if ("AllOff" === t.policy) {
                    for (let e of t.ids) {
                        if (!f(r4, this).has(e)) {
                            P(`Optional content group not found: ${e}`);
                            break;
                        }
                        if (f(r4, this).get(e).visible) return !1;
                    }
                    return !0;
                }
            } else {
                for (let e of t.ids) {
                    if (!f(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
                    if (f(r4, this).get(e).visible) return !0;
                }
                return !1;
            }
            return P(`Unknown optional content policy ${t.policy}.`), !0;
        }
        return P(`Unknown group type ${t.type}.`), !0;
    }
    setVisibility(t, e = !0, i = !0) {
        let s = f(r4, this).get(t);
        if (!s) return void P(`Optional content group not found: ${t}`);
        if (i && e && s.rbGroups.length)
            for (let e of s.rbGroups) for (let i of e) i !== t && f(r4, this).get(i)?._setVisible(rJ, !1, !0);
        s._setVisible(rJ, !!e, !0), g(r5, this, null);
    }
    setOCGState({ state: t, preserveRB: e }) {
        let i;
        for (let s of t) {
            switch (s) {
                case "ON":
                case "OFF":
                case "Toggle":
                    i = s;
                    continue;
            }
            let t = f(r4, this).get(s);
            if (t)
                switch (i) {
                    case "ON":
                        this.setVisibility(s, !0, e);
                        break;
                    case "OFF":
                        this.setVisibility(s, !1, e);
                        break;
                    case "Toggle":
                        this.setVisibility(s, !t.visible, e);
                }
        }
        g(r5, this, null);
    }
    get hasInitialVisibility() {
        return null === f(r6, this) || this.getHash() === f(r6, this);
    }
    getOrder() {
        return f(r4, this).size ? (f(r8, this) ? f(r8, this).slice() : [...f(r4, this).keys()]) : null;
    }
    getGroup(t) {
        return f(r4, this).get(t) || null;
    }
    getHash() {
        if (null !== f(r5, this)) return f(r5, this);
        let t = new s9();
        for (let [e, i] of f(r4, this)) t.update(`${e}:${i.visible}`);
        return g(r5, this, t.hexdigest());
    }
    [a]() {
        return f(r4, this).entries();
    }
};
function ot(t) {
    let e = t.length;
    if (e < 2) return !0;
    let i = t[0];
    for (let s = 1; s < e; s++) {
        let e,
            n = t[s];
        if (Array.isArray(n)) e = d(r7, this, ot).call(this, n);
        else {
            if (!f(r4, this).has(n)) return P(`Optional content group not found: ${n}`), !0;
            e = f(r4, this).get(n).visible;
        }
        switch (i) {
            case "And":
                if (!e) return !1;
                break;
            case "Or":
                if (e) return !0;
                break;
            case "Not":
                return !e;
            default:
                return !0;
        }
    }
    return "And" === i;
}
var oe = new WeakMap(),
    oi = new WeakMap(),
    os = class {
        constructor(t, e, i) {
            p(this, oe, null),
                p(this, oi, null),
                (0, o.t)(this, "_fullReader", null),
                (0, o.t)(this, "_rangeReaders", new Set()),
                (0, o.t)(this, "_source", null),
                (this._source = t),
                g(oe, this, e),
                g(oi, this, i);
        }
        get _progressiveDataLength() {
            return this._fullReader?._loaded ?? 0;
        }
        getFullReader() {
            return (
                I(!this._fullReader, "BasePDFStream.getFullReader can only be called once."),
                (this._fullReader = new (f(oe, this))(this))
            );
        }
        getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null;
            let i = new (f(oi, this))(this, t, e);
            return this._rangeReaders.add(i), i;
        }
        cancelAllRequests(t) {
            for (let e of (this._fullReader?.cancel(t), new Set(this._rangeReaders))) e.cancel(t);
        }
    },
    on = class {
        constructor(t) {
            (0, o.t)(this, "onProgress", null),
                (0, o.t)(this, "_contentLength", 0),
                (0, o.t)(this, "_filename", null),
                (0, o.t)(this, "_headersCapability", Promise.withResolvers()),
                (0, o.t)(this, "_isRangeSupported", !1),
                (0, o.t)(this, "_isStreamingSupported", !1),
                (0, o.t)(this, "_loaded", 0),
                (0, o.t)(this, "_stream", null),
                (this._stream = t);
        }
        get headersReady() {
            return this._headersCapability.promise;
        }
        get filename() {
            return this._filename;
        }
        get contentLength() {
            return this._contentLength;
        }
        get isRangeSupported() {
            return this._isRangeSupported;
        }
        get isStreamingSupported() {
            return this._isStreamingSupported;
        }
        async read() {
            D("Abstract method `read` called");
        }
        cancel(t) {
            D("Abstract method `cancel` called");
        }
    },
    oa = class {
        constructor(t, e, i) {
            (0, o.t)(this, "_stream", null), (this._stream = t);
        }
        async read() {
            D("Abstract method `read` called");
        }
        cancel(t) {
            D("Abstract method `cancel` called");
        }
    };
function or(t) {
    return t instanceof Uint8Array && t.byteLength === t.buffer.byteLength ? t.buffer : new Uint8Array(t).buffer;
}
var oo = new WeakSet(),
    ol = class extends os {
        constructor(t) {
            super(t, od, oc), u(this, oo), (0, o.t)(this, "_progressiveDone", !1), (0, o.t)(this, "_queuedChunks", []);
            const { pdfDataRangeTransport: e } = t,
                { initialData: i, progressiveDone: s } = e;
            if (i?.length > 0) {
                const t = or(i);
                this._queuedChunks.push(t);
            }
            (this._progressiveDone = s),
                e.addRangeListener((t, e) => {
                    d(oo, this, oh).call(this, t, e);
                }),
                e.addProgressListener((t, e) => {
                    void 0 !== e && this._fullReader?.onProgress?.({ loaded: t, total: e });
                }),
                e.addProgressiveReadListener((t) => {
                    d(oo, this, oh).call(this, void 0, t);
                }),
                e.addProgressiveDoneListener(() => {
                    this._fullReader?.progressiveDone(), (this._progressiveDone = !0);
                }),
                e.transportReady();
        }
        getFullReader() {
            let t = super.getFullReader();
            return (this._queuedChunks = null), t;
        }
        getRangeReader(t, e) {
            let i = super.getRangeReader(t, e);
            return (
                i &&
                    ((i.onDone = () => this._rangeReaders.delete(i)),
                    this._source.pdfDataRangeTransport.requestDataRange(t, e)),
                i
            );
        }
        cancelAllRequests(t) {
            super.cancelAllRequests(t), this._source.pdfDataRangeTransport.abort();
        }
    };
function oh(t, e) {
    let i = or(e);
    if (void 0 === t) this._fullReader ? this._fullReader._enqueue(i) : this._queuedChunks.push(i);
    else {
        let e = this._rangeReaders.keys().find((e) => e._begin === t);
        I(e, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), e._enqueue(i);
    }
}
var od = class extends on {
        constructor(t) {
            super(t),
                (0, o.t)(this, "_done", !1),
                (0, o.t)(this, "_queuedChunks", null),
                (0, o.t)(this, "_requests", []);
            const { pdfDataRangeTransport: e, disableRange: i, disableStream: s } = t._source,
                { length: n, contentDispositionFilename: a } = e;
            for (const e of ((this._queuedChunks = t._queuedChunks || []), this._queuedChunks))
                this._loaded += e.byteLength;
            (this._done = t._progressiveDone),
                (this._contentLength = n),
                (this._isStreamingSupported = !s),
                (this._isRangeSupported = !i),
                tl(a) && (this._filename = a),
                this._headersCapability.resolve();
        }
        _enqueue(t) {
            this._done ||
                (this._requests.length > 0
                    ? this._requests.shift().resolve({ value: t, done: !1 })
                    : this._queuedChunks.push(t),
                (this._loaded += t.byteLength));
        }
        async read() {
            if (this._queuedChunks.length > 0) return { value: this._queuedChunks.shift(), done: !1 };
            if (this._done) return { value: void 0, done: !0 };
            let t = Promise.withResolvers();
            return this._requests.push(t), t.promise;
        }
        cancel(t) {
            for (let t of ((this._done = !0), this._requests)) t.resolve({ value: void 0, done: !0 });
            this._requests.length = 0;
        }
        progressiveDone() {
            this._done ||= !0;
        }
    },
    oc = class extends oa {
        constructor(t, e, i) {
            super(t, e, i),
                (0, o.t)(this, "onDone", null),
                (0, o.t)(this, "_begin", -1),
                (0, o.t)(this, "_done", !1),
                (0, o.t)(this, "_queuedChunk", null),
                (0, o.t)(this, "_requests", []),
                (this._begin = e);
        }
        _enqueue(t) {
            if (!this._done) {
                if (0 === this._requests.length) this._queuedChunk = t;
                else {
                    for (let e of (this._requests.shift().resolve({ value: t, done: !1 }), this._requests))
                        e.resolve({ value: void 0, done: !0 });
                    this._requests.length = 0;
                }
                (this._done = !0), this.onDone?.();
            }
        }
        async read() {
            if (this._queuedChunk) {
                let t = this._queuedChunk;
                return (this._queuedChunk = null), { value: t, done: !1 };
            }
            if (this._done) return { value: void 0, done: !0 };
            let t = Promise.withResolvers();
            return this._requests.push(t), t.promise;
        }
        cancel(t) {
            for (let t of ((this._done = !0), this._requests)) t.resolve({ value: void 0, done: !0 });
            (this._requests.length = 0), this.onDone?.();
        }
    };
function ou(t, e) {
    let i = new Headers();
    if (!t || !e || "object" != typeof e) return i;
    for (let t in e) {
        let s = e[t];
        void 0 !== s && i.append(t, s);
    }
    return i;
}
function op(t) {
    return URL.parse(t)?.origin ?? null;
}
function og({ responseHeaders: t, isHttp: e, rangeChunkSize: i, disableRange: s }) {
    let n = { allowRangeRequests: !1, suggestedLength: void 0 },
        a = parseInt(t.get("Content-Length"), 10);
    return (
        Number.isInteger(a) &&
            ((n.suggestedLength = a),
            a <= 2 * i ||
                s ||
                !e ||
                "bytes" !== t.get("Accept-Ranges") ||
                "identity" !== (t.get("Content-Encoding") || "identity") ||
                (n.allowRangeRequests = !0)),
        n
    );
}
function of(t) {
    let e = t.get("Content-Disposition");
    if (e) {
        let t = (function (t) {
            let e = !0,
                i = s("filename\\*", "i").exec(t);
            if (i) {
                let t = r((i = i[1]));
                return a((t = l((t = o((t = unescape(t)))))));
            }
            if (
                (i = (function (t) {
                    let e,
                        i = [],
                        n = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                    for (; null !== (e = n.exec(t)); ) {
                        let [, t, s, n] = e;
                        if ((t = parseInt(t, 10)) in i) {
                            if (0 === t) break;
                            continue;
                        }
                        i[t] = [s, n];
                    }
                    let a = [];
                    for (let t = 0; t < i.length && t in i; ++t) {
                        let [e, s] = i[t];
                        (s = r(s)), e && ((s = unescape(s)), 0 === t && (s = o(s))), a.push(s);
                    }
                    return a.join("");
                })(t))
            )
                return a(l(i));
            if ((i = s("filename", "i").exec(t))) {
                let t = r((i = i[1]));
                return a((t = l(t)));
            }
            function s(t, e) {
                return RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e);
            }
            function n(t, i) {
                if (t) {
                    if (!/^[\x00-\xFF]+$/.test(i)) return i;
                    try {
                        let s = new TextDecoder(t, { fatal: !0 }),
                            n = j(i);
                        (i = s.decode(n)), (e = !1);
                    } catch {}
                }
                return i;
            }
            function a(t) {
                return e && /[\x80-\xff]/.test(t) && ((t = n("utf-8", t)), e && (t = n("iso-8859-1", t))), t;
            }
            function r(t) {
                if (t.startsWith('"')) {
                    let e = t.slice(1).split('\\"');
                    for (let t = 0; t < e.length; ++t) {
                        let i = e[t].indexOf('"');
                        -1 !== i && ((e[t] = e[t].slice(0, i)), (e.length = t + 1)),
                            (e[t] = e[t].replaceAll(/\\(.)/g, "$1"));
                    }
                    t = e.join('"');
                }
                return t;
            }
            function o(t) {
                let e = t.indexOf("'");
                return -1 === e ? t : n(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
            }
            function l(t) {
                return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)
                    ? t
                    : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, i, s) {
                          if ("q" === i || "Q" === i)
                              return n(
                                  e,
                                  (s = (s = s.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function (t, e) {
                                      return String.fromCharCode(parseInt(e, 16));
                                  })),
                              );
                          try {
                              s = atob(s);
                          } catch {}
                          return n(e, s);
                      });
            }
            return "";
        })(e);
        if (t.includes("%"))
            try {
                t = decodeURIComponent(t);
            } catch {}
        if (tl(t)) return t;
    }
    return null;
}
function om(t, e) {
    return new U(
        `Unexpected server response (${t}) while retrieving PDF "${e}".`,
        t,
        404 === t || (0 === t && e.startsWith("file:")),
    );
}
function ow(t, e) {
    if (t !== e) throw Error(`Expected range response-origin "${t}" to match "${e}".`);
}
function ob(t, e, i, s) {
    return fetch(t, {
        method: "GET",
        headers: e,
        signal: s.signal,
        mode: "cors",
        credentials: i ? "include" : "same-origin",
        redirect: "follow",
    });
}
function ov(t, e) {
    if (200 !== t && 206 !== t) throw om(t, e);
}
function oA(t) {
    return t instanceof Uint8Array
        ? t.buffer
        : t instanceof ArrayBuffer
          ? t
          : (P(`getArrayBuffer - unexpected data format: ${t}`), new Uint8Array(t).buffer);
}
var oy = class extends os {
        constructor(t) {
            super(t, o_, ox),
                (0, o.t)(this, "_responseOrigin", null),
                (this.isHttp = /^https?:/i.test(t.url)),
                (this.headers = ou(this.isHttp, t.httpHeaders));
        }
    },
    o_ = class extends on {
        constructor(t) {
            super(t), (0, o.t)(this, "_abortController", new AbortController()), (0, o.t)(this, "_reader", null);
            const {
                disableRange: e,
                disableStream: i,
                length: s,
                rangeChunkSize: n,
                url: a,
                withCredentials: r,
            } = t._source;
            (this._contentLength = s),
                (this._isStreamingSupported = !i),
                (this._isRangeSupported = !e),
                ob(a, new Headers(t.headers), r, this._abortController)
                    .then((i) => {
                        (t._responseOrigin = op(i.url)), ov(i.status, a), (this._reader = i.body.getReader());
                        let s = i.headers,
                            { allowRangeRequests: r, suggestedLength: o } = og({
                                responseHeaders: s,
                                isHttp: t.isHttp,
                                rangeChunkSize: n,
                                disableRange: e,
                            });
                        (this._isRangeSupported = r),
                            (this._contentLength = o || this._contentLength),
                            (this._filename = of(s)),
                            !this._isStreamingSupported &&
                                this._isRangeSupported &&
                                this.cancel(new H("Streaming is disabled.")),
                            this._headersCapability.resolve();
                    })
                    .catch(this._headersCapability.reject);
        }
        async read() {
            await this._headersCapability.promise;
            let { value: t, done: e } = await this._reader.read();
            return e
                ? { value: t, done: e }
                : ((this._loaded += t.byteLength),
                  this.onProgress?.({ loaded: this._loaded, total: this._contentLength }),
                  { value: oA(t), done: !1 });
        }
        cancel(t) {
            this._reader?.cancel(t), this._abortController.abort();
        }
    },
    ox = class extends oa {
        constructor(t, e, i) {
            super(t, e, i),
                (0, o.t)(this, "_abortController", new AbortController()),
                (0, o.t)(this, "_readCapability", Promise.withResolvers()),
                (0, o.t)(this, "_reader", null);
            const { url: s, withCredentials: n } = t._source,
                a = new Headers(t.headers);
            a.append("Range", `bytes=${e}-${i - 1}`),
                ob(s, a, n, this._abortController)
                    .then((e) => {
                        ow(op(e.url), t._responseOrigin),
                            ov(e.status, s),
                            (this._reader = e.body.getReader()),
                            this._readCapability.resolve();
                    })
                    .catch(this._readCapability.reject);
        }
        async read() {
            await this._readCapability.promise;
            let { value: t, done: e } = await this._reader.read();
            return e ? { value: t, done: e } : { value: oA(t), done: !1 };
        }
        cancel(t) {
            this._reader?.cancel(t), this._abortController.abort();
        }
    },
    ok = new WeakMap(),
    oM = new WeakSet(),
    oS = class extends os {
        constructor(t) {
            super(t, oP, oN),
                u(this, oM),
                p(this, ok, new WeakMap()),
                (0, o.t)(this, "_responseOrigin", null),
                (this.url = t.url),
                (this.isHttp = /^https?:/i.test(this.url)),
                (this.headers = ou(this.isHttp, t.httpHeaders));
        }
        _request(t) {
            let e = new XMLHttpRequest(),
                i = {
                    validateStatus: null,
                    onHeadersReceived: t.onHeadersReceived,
                    onDone: t.onDone,
                    onError: t.onError,
                    onProgress: t.onProgress,
                };
            for (let [t, s] of (f(ok, this).set(e, i),
            e.open("GET", this.url),
            (e.withCredentials = this._source.withCredentials),
            this.headers))
                e.setRequestHeader(t, s);
            return (
                this.isHttp && "begin" in t && "end" in t
                    ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`),
                      (i.validateStatus = (t) => 206 === t || 200 === t))
                    : (i.validateStatus = (t) => 200 === t),
                (e.responseType = "arraybuffer"),
                I(t.onError, "Expected `onError` callback to be provided."),
                (e.onerror = () => t.onError(e.status)),
                (e.onreadystatechange = d(oM, this, oC).bind(this, e)),
                (e.onprogress = d(oM, this, oE).bind(this, e)),
                e.send(null),
                e
            );
        }
        _abortRequest(t) {
            f(ok, this).has(t) && (f(ok, this).delete(t), t.abort());
        }
        getRangeReader(t, e) {
            let i = super.getRangeReader(t, e);
            return i && (i.onClosed = () => this._rangeReaders.delete(i)), i;
        }
    };
function oE(t, e) {
    f(ok, this).get(t)?.onProgress?.(e);
}
function oC(t, e) {
    var i;
    let s = f(ok, this).get(t);
    if (
        !s ||
        (t.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived),
        4 !== t.readyState || !f(ok, this).has(t))
    )
        return;
    if ((f(ok, this).delete(t), 0 === t.status && this.isHttp)) return void s.onError(t.status);
    let n = t.status || 200;
    if (!s.validateStatus(n)) return void s.onError(t.status);
    let a = "string" != typeof (i = t.response) ? i : j(i).buffer;
    if (206 === n) {
        let e = t.getResponseHeader("Content-Range");
        /bytes (\d+)-(\d+)\/(\d+)/.test(e)
            ? s.onDone(a)
            : (P('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else a ? s.onDone(a) : s.onError(t.status);
}
var oT = new WeakSet(),
    oP = class extends on {
        constructor(t) {
            super(t),
                u(this, oT),
                (0, o.t)(this, "_cachedChunks", []),
                (0, o.t)(this, "_done", !1),
                (0, o.t)(this, "_requests", []),
                (0, o.t)(this, "_storedError", null);
            const { length: e } = t._source;
            (this._contentLength = e),
                (this._fullRequestXhr = t._request({
                    onHeadersReceived: d(oT, this, oD).bind(this),
                    onDone: d(oT, this, oI).bind(this),
                    onError: d(oT, this, oL).bind(this),
                    onProgress: d(oT, this, oR).bind(this),
                }));
        }
        async read() {
            if ((await this._headersCapability.promise, this._storedError)) throw this._storedError;
            if (this._cachedChunks.length > 0) return { value: this._cachedChunks.shift(), done: !1 };
            if (this._done) return { value: void 0, done: !0 };
            let t = Promise.withResolvers();
            return this._requests.push(t), t.promise;
        }
        cancel(t) {
            for (let e of ((this._done = !0), this._headersCapability.reject(t), this._requests))
                e.resolve({ value: void 0, done: !0 });
            (this._requests.length = 0),
                this._stream._abortRequest(this._fullRequestXhr),
                (this._fullRequestXhr = null);
        }
    };
function oD() {
    let t = this._stream,
        { disableRange: e, rangeChunkSize: i } = t._source,
        s = this._fullRequestXhr;
    t._responseOrigin = op(s.responseURL);
    let n = s.getAllResponseHeaders(),
        a = new Headers(
            n
                ? n
                      .trimStart()
                      .replace(/[^\S ]+$/, "")
                      .split(/[\r\n]+/)
                      .map((t) => {
                          let [e, ...i] = t.split(": ");
                          return [e, i.join(": ")];
                      })
                : [],
        ),
        { allowRangeRequests: r, suggestedLength: o } = og({
            responseHeaders: a,
            isHttp: t.isHttp,
            rangeChunkSize: i,
            disableRange: e,
        });
    r && (this._isRangeSupported = !0),
        (this._contentLength = o || this._contentLength),
        (this._filename = of(a)),
        this._isRangeSupported && t._abortRequest(s),
        this._headersCapability.resolve();
}
function oI(t) {
    if (
        (this._requests.length > 0
            ? this._requests.shift().resolve({ value: t, done: !1 })
            : this._cachedChunks.push(t),
        (this._done = !0),
        !(this._cachedChunks.length > 0))
    ) {
        for (let t of this._requests) t.resolve({ value: void 0, done: !0 });
        this._requests.length = 0;
    }
}
function oL(t) {
    for (let e of ((this._storedError = om(t, this._stream.url)),
    this._headersCapability.reject(this._storedError),
    this._requests))
        e.reject(this._storedError);
    (this._requests.length = 0), (this._cachedChunks.length = 0);
}
function oR(t) {
    this.onProgress?.({ loaded: t.loaded, total: t.lengthComputable ? t.total : this._contentLength });
}
var oF = new WeakSet(),
    oN = class extends oa {
        constructor(t, e, i) {
            super(t, e, i),
                u(this, oF),
                (0, o.t)(this, "onClosed", null),
                (0, o.t)(this, "_done", !1),
                (0, o.t)(this, "_queuedChunk", null),
                (0, o.t)(this, "_requests", []),
                (0, o.t)(this, "_storedError", null),
                (this._requestXhr = t._request({
                    begin: e,
                    end: i,
                    onHeadersReceived: d(oF, this, oB).bind(this),
                    onDone: d(oF, this, oO).bind(this),
                    onError: d(oF, this, oW).bind(this),
                    onProgress: null,
                }));
        }
        async read() {
            if (this._storedError) throw this._storedError;
            if (null !== this._queuedChunk) {
                let t = this._queuedChunk;
                return (this._queuedChunk = null), { value: t, done: !1 };
            }
            if (this._done) return { value: void 0, done: !0 };
            let t = Promise.withResolvers();
            return this._requests.push(t), t.promise;
        }
        cancel(t) {
            for (let t of ((this._done = !0), this._requests)) t.resolve({ value: void 0, done: !0 });
            (this._requests.length = 0), this._stream._abortRequest(this._requestXhr), this.onClosed?.();
        }
    };
function oB() {
    let t = op(this._requestXhr?.responseURL);
    try {
        ow(t, this._stream._responseOrigin);
    } catch (t) {
        (this._storedError = t), d(oF, this, oW).call(this, 0);
    }
}
function oO(t) {
    for (let e of (this._requests.length > 0
        ? this._requests.shift().resolve({ value: t, done: !1 })
        : (this._queuedChunk = t),
    (this._done = !0),
    this._requests))
        e.resolve({ value: void 0, done: !0 });
    (this._requests.length = 0), this.onClosed?.();
}
function oW(t) {
    for (let e of ((this._storedError ??= om(t, this._stream.url)), this._requests)) e.reject(this._storedError);
    (this._requests.length = 0), (this._queuedChunk = null);
}
var oU = /^[a-z][a-z0-9\-+.]+:/i;
function o$(t) {
    let { Readable: e } = l.getBuiltinModule("stream");
    return "function" == typeof e.toWeb
        ? e.toWeb(t)
        : l
              .getBuiltinModule("module")
              .createRequire(
                  "file:///ci/build/discord/discord/node_modules/.pnpm/@incodetech+web@2.1.0_@zxing+library@0.21.3_encoding@0.1.13_preact@10.26.4_typescript@6.0.2_v_bek76oasnwlgogaa7x5jmd75me/node_modules/@incodetech/web/dist/pdf-BqtJTlor.js",
              )("node-readable-to-web-readable-stream")
              .makeDefaultReadableStreamFromNodeReadable(t);
}
function oH(t) {
    return t instanceof Uint8Array
        ? t.buffer
        : t instanceof ArrayBuffer
          ? t
          : (P(`getArrayBuffer - unexpected data format: ${t}`), new Uint8Array(t).buffer);
}
var oj = class extends os {
        constructor(t) {
            super(t, oz, oG),
                (this.url = (function (t) {
                    return new URL(oU.test(t) ? t : l.getBuiltinModule("url").pathToFileURL(t));
                })(t.url)),
                I("file:" === this.url.protocol, "PDFNodeStream only supports file:// URLs.");
        }
    },
    oz = class extends on {
        constructor(t) {
            super(t), (0, o.t)(this, "_reader", null);
            const { disableRange: e, disableStream: i, length: s, rangeChunkSize: n } = t._source;
            (this._contentLength = s), (this._isStreamingSupported = !i), (this._isRangeSupported = !e);
            const a = t.url,
                r = l.getBuiltinModule("fs");
            r.promises
                .lstat(a)
                .then((t) => {
                    this._reader = o$(r.createReadStream(a)).getReader();
                    let { size: e } = t;
                    e <= 2 * n && (this._isRangeSupported = !1),
                        (this._contentLength = e),
                        !this._isStreamingSupported &&
                            this._isRangeSupported &&
                            this.cancel(new H("Streaming is disabled.")),
                        this._headersCapability.resolve();
                })
                .catch((t) => {
                    "ENOENT" === t.code && (t = om(0, a.href)), this._headersCapability.reject(t);
                });
        }
        async read() {
            await this._headersCapability.promise;
            let { value: t, done: e } = await this._reader.read();
            return e
                ? { value: t, done: e }
                : ((this._loaded += t.length),
                  this.onProgress?.({ loaded: this._loaded, total: this._contentLength }),
                  { value: oH(t), done: !1 });
        }
        cancel(t) {
            this._reader?.cancel(t);
        }
    },
    oG = class extends oa {
        constructor(t, e, i) {
            super(t, e, i), (0, o.t)(this, "_readCapability", Promise.withResolvers()), (0, o.t)(this, "_reader", null);
            const s = t.url,
                n = l.getBuiltinModule("fs");
            try {
                (this._reader = o$(n.createReadStream(s, { start: e, end: i - 1 })).getReader()),
                    this._readCapability.resolve();
            } catch (t) {
                this._readCapability.reject(t);
            }
        }
        async read() {
            await this._readCapability.promise;
            let { value: t, done: e } = await this._reader.read();
            return e ? { value: t, done: e } : { value: oH(t), done: !1 };
        }
        cancel(t) {
            this._reader?.cancel(t);
        }
    },
    oV = Symbol("INITIAL_DATA"),
    oq = new WeakMap(),
    oX = new WeakSet();
r = Symbol.iterator;
var oK = class {
    constructor() {
        u(this, oX), p(this, oq, Object.create(null));
    }
    get(t, e = null) {
        if (e) {
            let i = d(oX, this, oY).call(this, t);
            return i.promise.then(() => e(i.data)), null;
        }
        let i = f(oq, this)[t];
        if (!i || i.data === oV) throw Error(`Requesting object that isn't resolved yet ${t}.`);
        return i.data;
    }
    has(t) {
        let e = f(oq, this)[t];
        return !!e && e.data !== oV;
    }
    delete(t) {
        let e = f(oq, this)[t];
        return !!e && e.data !== oV && (delete f(oq, this)[t], !0);
    }
    resolve(t, e = null) {
        let i = d(oX, this, oY).call(this, t);
        (i.data = e), i.resolve();
    }
    clear() {
        for (let t in f(oq, this)) {
            let { data: e } = f(oq, this)[t];
            e?.bitmap?.close();
        }
        g(oq, this, Object.create(null));
    }
    *[r]() {
        for (let t in f(oq, this)) {
            let { data: e } = f(oq, this)[t];
            e !== oV && (yield [t, e]);
        }
    }
};
function oY(t) {
    return (f(oq, this)[t] ||= { ...Promise.withResolvers(), data: oV });
}
var oQ = new WeakMap(),
    oJ = new WeakMap(),
    oZ = new WeakMap(),
    o0 = new WeakMap(),
    o1 = new WeakMap(),
    o2 = new WeakMap(),
    o3 = new WeakMap(),
    o5 = new WeakMap(),
    o4 = new WeakMap(),
    o6 = new WeakMap(),
    o8 = new WeakMap(),
    o7 = new WeakMap(),
    o9 = new WeakMap(),
    lt = new WeakMap(),
    le = new WeakMap(),
    li = new WeakMap(),
    ls = new WeakMap(),
    ln = new WeakMap(),
    la = new WeakSet(),
    lr = class t {
        constructor({ textContentSource: e, container: i, viewport: s }) {
            if (
                (u(this, la),
                p(this, oQ, Promise.withResolvers()),
                p(this, oJ, null),
                p(this, oZ, !1),
                p(this, o0, !!globalThis.FontInspector?.enabled),
                p(this, o1, null),
                p(this, o2, null),
                p(this, o3, 0),
                p(this, o5, 0),
                p(this, o4, null),
                p(this, o6, null),
                p(this, o8, 0),
                p(this, o7, 0),
                p(this, o9, Object.create(null)),
                p(this, lt, []),
                p(this, le, null),
                p(this, li, []),
                p(this, ls, new WeakMap()),
                p(this, ln, null),
                e instanceof ReadableStream)
            )
                g(le, this, e);
            else if ("object" == typeof e)
                g(
                    le,
                    this,
                    new ReadableStream({
                        start(t) {
                            t.enqueue(e), t.close();
                        },
                    }),
                );
            else throw Error('No "textContentSource" parameter specified.');
            g(oJ, this, g(o6, this, i)),
                g(o7, this, s.scale * tv.pixelRatio),
                g(o8, this, s.rotation),
                g(o2, this, { div: null, properties: null, ctx: null });
            const { pageWidth: n, pageHeight: a, pageX: r, pageY: o } = s.rawDims;
            g(ln, this, [1, 0, 0, -1, -r, o + a]),
                g(o5, this, n),
                g(o3, this, a),
                lu.call(t),
                i.style.setProperty("--min-font-size", lw._),
                tb(i, s),
                f(oQ, this)
                    .promise.finally(() => {
                        lb._.delete(this), g(o2, this, null), g(o9, this, null);
                    })
                    .catch(() => {});
        }
        static get fontFamilyMap() {
            let { isWindows: t, isFirefox: e } = z.platform;
            return F(
                this,
                "fontFamilyMap",
                new Map([
                    ["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`],
                    ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`],
                ]),
            );
        }
        render() {
            let t = () => {
                f(o4, this)
                    .read()
                    .then(({ value: e, done: i }) => {
                        i
                            ? f(oQ, this).resolve()
                            : (f(o1, this) ?? g(o1, this, e.lang),
                              Object.assign(f(o9, this), e.styles),
                              d(la, this, lo).call(this, e.items),
                              t());
                    }, f(oQ, this).reject);
            };
            return g(o4, this, f(le, this).getReader()), lb._.add(this), t(), f(oQ, this).promise;
        }
        update({ viewport: e, onBefore: i = null }) {
            let s = e.scale * tv.pixelRatio,
                n = e.rotation;
            if ((n !== f(o8, this) && (i?.(), g(o8, this, n), tb(f(o6, this), { rotation: n })), s !== f(o7, this))) {
                i?.(), g(o7, this, s);
                let e = { div: null, properties: null, ctx: ld.call(t, f(o1, this)) };
                for (let t of f(li, this))
                    (e.properties = f(ls, this).get(t)), (e.div = t), d(la, this, lh).call(this, e);
            }
        }
        cancel() {
            let t = new H("TextLayer task cancelled.");
            f(o4, this)
                ?.cancel(t)
                .catch(() => {}),
                g(o4, this, null),
                f(oQ, this).reject(t);
        }
        get textDivs() {
            return f(li, this);
        }
        get textContentItemsStr() {
            return f(lt, this);
        }
        static cleanup() {
            if (!(d(t, this, lb)._.size > 0)) {
                for (let { canvas: e } of (d(t, this, lg)._.clear(), d(t, this, lf)._.values())) e.remove();
                d(t, this, lf)._.clear();
            }
        }
    };
function lo(t) {
    if (f(oZ, this)) return;
    f(o2, this).ctx ??= ld.call(lr, f(o1, this));
    let e = f(li, this),
        i = f(lt, this);
    for (let s of t) {
        if (e.length > 1e5) {
            P("Ignoring additional textDivs for performance reasons."), g(oZ, this, !0);
            return;
        }
        if (void 0 === s.str) {
            if ("beginMarkedContentProps" === s.type || "beginMarkedContent" === s.type) {
                let t = f(oJ, this);
                g(oJ, this, document.createElement("span")),
                    f(oJ, this).classList.add("markedContent"),
                    s.id && f(oJ, this).setAttribute("id", `${s.id}`),
                    "Artifact" === s.tag && (f(oJ, this).ariaHidden = !0),
                    t.append(f(oJ, this));
            } else "endMarkedContent" === s.type && g(oJ, this, f(oJ, this).parentNode);
            continue;
        }
        i.push(s.str), d(la, this, ll).call(this, s);
    }
}
function ll(t) {
    let e,
        i,
        s = document.createElement("span"),
        n = { angle: 0, canvasWidth: 0, hasText: "" !== t.str, hasEOL: t.hasEOL, fontSize: 0 };
    f(li, this).push(s);
    let a = V.transform(f(ln, this), t.transform),
        r = Math.atan2(a[1], a[0]),
        o = f(o9, this)[t.fontName];
    o.vertical && (r += Math.PI / 2);
    let l = (f(o0, this) && o.fontSubstitution) || o.fontFamily;
    l = lr.fontFamilyMap.get(l) || l;
    let h = Math.hypot(a[2], a[3]),
        c = h * lp.call(lr, l, o, f(o1, this));
    0 === r ? ((e = a[4]), (i = a[5] - c)) : ((e = a[4] + c * Math.sin(r)), (i = a[5] - c * Math.cos(r)));
    let u = s.style;
    (u.left = `${((100 * e) / f(o5, this)).toFixed(2)}%`),
        (u.top = `${((100 * i) / f(o3, this)).toFixed(2)}%`),
        u.setProperty("--font-height", `${h.toFixed(2)}px`),
        (u.fontFamily = l),
        (n.fontSize = h),
        s.setAttribute("role", "presentation"),
        (s.textContent = t.str),
        (s.dir = t.dir),
        f(o0, this) && (s.dataset.fontName = o.fontSubstitutionLoadedName || t.fontName),
        0 !== r && (n.angle = (180 / Math.PI) * r);
    let p = !1;
    if (t.str.length > 1) p = !0;
    else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
        let e = Math.abs(t.transform[0]),
            i = Math.abs(t.transform[3]);
        e !== i && Math.max(e, i) / Math.min(e, i) > 1.5 && (p = !0);
    }
    if (
        (p && (n.canvasWidth = o.vertical ? t.height : t.width),
        f(ls, this).set(s, n),
        (f(o2, this).div = s),
        (f(o2, this).properties = n),
        d(la, this, lh).call(this, f(o2, this)),
        n.hasText && f(oJ, this).append(s),
        n.hasEOL)
    ) {
        let t = document.createElement("br");
        t.setAttribute("role", "presentation"), f(oJ, this).append(t);
    }
}
function lh(t) {
    let { div: e, properties: i, ctx: s } = t,
        { style: n } = e;
    if (0 !== i.canvasWidth && i.hasText) {
        let { fontFamily: t } = n,
            { canvasWidth: a, fontSize: r } = i;
        lc.call(lr, s, r * f(o7, this), t);
        let { width: o } = s.measureText(e.textContent);
        o > 0 && n.setProperty("--scale-x", (a * f(o7, this)) / o);
    }
    0 !== i.angle && n.setProperty("--rotate", `${i.angle}deg`);
}
function ld(t = null) {
    let e = d(lr, this, lf)._.get((t ||= ""));
    if (!e) {
        let i = document.createElement("canvas");
        (i.className = "hiddenCanvasElement"),
            (i.lang = t),
            document.body.append(i),
            (e = i.getContext("2d", { alpha: !1, willReadFrequently: !0 })),
            d(lr, this, lf)._.set(t, e),
            d(lr, this, lm)._.set(e, { size: 0, family: "" });
    }
    return e;
}
function lc(t, e, i) {
    let s = d(lr, this, lm)._.get(t);
    (e !== s.size || i !== s.family) && ((t.font = `${e}px ${i}`), (s.size = e), (s.family = i));
}
function lu() {
    if (null !== d(lr, this, lw)._) return;
    let t = document.createElement("div");
    (t.style.opacity = 0),
        (t.style.lineHeight = 1),
        (t.style.fontSize = "1px"),
        (t.style.position = "absolute"),
        (t.textContent = "X"),
        document.body.append(t),
        (lw._ = d(lr, this, t.getBoundingClientRect().height)),
        t.remove();
}
function lp(t, e, i) {
    let s = d(lr, this, lg)._.get(t);
    if (s) return s;
    let n = d(lr, this, ld).call(this, i);
    (n.canvas.width = n.canvas.height = 30), d(lr, this, lc).call(this, n, 30, t);
    let a = n.measureText(""),
        r = a.fontBoundingBoxAscent,
        o = Math.abs(a.fontBoundingBoxDescent);
    n.canvas.width = n.canvas.height = 0;
    let l = 0.8;
    return (
        r
            ? (l = r / (r + o))
            : (z.platform.isFirefox &&
                  P(
                      "Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.",
                  ),
              e.ascent ? (l = e.ascent) : e.descent && (l = 1 + e.descent)),
        d(lr, this, lg)._.set(t, l),
        l
    );
}
var lg = { _: new Map() },
    lf = { _: new Map() },
    lm = { _: new WeakMap() },
    lw = { _: null },
    lb = { _: new Set() };
function lv(t = {}) {
    "string" == typeof t || t instanceof URL
        ? (t = { url: t })
        : (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (t = { data: t });
    let e = new lA(),
        { docId: i } = e,
        s = t.url
            ? (function (t) {
                  if (t instanceof URL) return t.href;
                  if ("string" == typeof t) {
                      if (b) return t;
                      let e = URL.parse(t, window.location);
                      if (e) return e.href;
                  }
                  throw Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
              })(t.url)
            : null,
        n = t.data
            ? (function (t) {
                  if (b && void 0 !== h && t instanceof h)
                      throw Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
                  if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) return t;
                  if ("string" == typeof t) return j(t);
                  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t) || ("object" == typeof t && !isNaN(t?.length)))
                      return new Uint8Array(t);
                  throw Error(
                      "Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.",
                  );
              })(t.data)
            : null,
        a = t.httpHeaders || null,
        r = !0 === t.withCredentials,
        o = t.password ?? null,
        l = t.range instanceof lE ? t.range : null,
        d = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : 65536,
        c = t.worker instanceof lW ? t.worker : null,
        u = t.verbosity,
        p = "string" != typeof t.docBaseUrl || to(t.docBaseUrl) ? null : t.docBaseUrl,
        g = nY(t.cMapUrl),
        f = !1 !== t.cMapPacked,
        m = t.CMapReaderFactory || (b ? aF : aa),
        w = nY(t.iccUrl),
        v = nY(t.standardFontDataUrl),
        A = t.StandardFontDataFactory || (b ? aN : aT),
        y = nY(t.wasmUrl),
        _ = t.WasmFactory || (b ? aB : aD),
        x = !0 !== t.stopAtErrors,
        k = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1,
        M = !1 !== t.isEvalSupported,
        S = "boolean" == typeof t.isOffscreenCanvasSupported ? t.isOffscreenCanvasSupported : !b,
        E =
            "boolean" == typeof t.isImageDecoderSupported
                ? t.isImageDecoderSupported
                : !b && (z.platform.isFirefox || !globalThis.chrome),
        T = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1,
        P = "boolean" == typeof t.disableFontFace ? t.disableFontFace : b,
        D = !0 === t.fontExtraProperties,
        I = !0 === t.enableXfa,
        L = t.ownerDocument || globalThis.document,
        R = !0 === t.disableRange,
        F = !0 === t.disableStream,
        N = !0 === t.disableAutoFetch,
        B = !0 === t.pdfBug,
        O = t.CanvasFactory || (b ? aR : as),
        W = t.FilterFactory || (b ? aL : af),
        U = !0 === t.enableHWA,
        $ = !1 !== t.useWasm,
        H = l ? l.length : (t.length ?? NaN),
        G = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !b && !P,
        V =
            "boolean" == typeof t.useWorkerFetch
                ? t.useWorkerFetch
                : !!(
                      m === aa &&
                      A === aT &&
                      _ === aD &&
                      g &&
                      v &&
                      y &&
                      td(g, document.baseURI) &&
                      td(v, document.baseURI) &&
                      td(y, document.baseURI)
                  );
    Number.isInteger(u) && (C = u);
    let q = {
        canvasFactory: new O({ ownerDocument: L, enableHWA: U }),
        filterFactory: new W({ docId: i, ownerDocument: L }),
        cMapReaderFactory: V ? null : new m({ baseUrl: g, isCompressed: f }),
        standardFontDataFactory: V ? null : new A({ baseUrl: v }),
        wasmFactory: V ? null : new _({ baseUrl: y }),
    };
    c || (e._worker = c = lW.create({ verbosity: u, port: rV.workerPort }));
    let X = {
            docId: i,
            apiVersion: "5.4.624",
            data: n,
            password: o,
            disableAutoFetch: N,
            rangeChunkSize: d,
            length: H,
            docBaseUrl: p,
            enableXfa: I,
            evaluatorOptions: {
                maxImageSize: k,
                disableFontFace: P,
                ignoreErrors: x,
                isEvalSupported: M,
                isOffscreenCanvasSupported: S,
                isImageDecoderSupported: E,
                canvasMaxAreaInBytes: T,
                fontExtraProperties: D,
                useSystemFonts: G,
                useWasm: $,
                useWorkerFetch: V,
                cMapUrl: g,
                iccUrl: w,
                standardFontDataUrl: v,
                wasmUrl: y,
            },
        },
        K = {
            ownerDocument: L,
            pdfBug: B,
            styleElement: null,
            enableHWA: U,
            loadingParams: { disableAutoFetch: N, enableXfa: I },
        };
    return (
        c.promise
            .then(function () {
                let t;
                if (e.destroyed) throw Error("Loading aborted");
                if (c.destroyed) throw Error("Worker was destroyed");
                let o = c.messageHandler.sendWithPromise("GetDocRequest", X, n ? [n.buffer] : null);
                if (l) t = new ol({ pdfDataRangeTransport: l, disableRange: R, disableStream: F });
                else if (!n) {
                    if (!s) throw Error("getDocument - no `url` parameter provided.");
                    t = new (td(s) ? oy : b ? oj : oS)({
                        url: s,
                        length: H,
                        httpHeaders: a,
                        withCredentials: r,
                        rangeChunkSize: d,
                        disableRange: R,
                        disableStream: F,
                    });
                }
                return o.then((s) => {
                    if (e.destroyed) throw Error("Loading aborted");
                    if (c.destroyed) throw Error("Worker was destroyed");
                    let n = new n6(i, s, c.port);
                    (e._transport = new l3(n, e, t, K, q)), n.send("Ready", null);
                });
            })
            .catch(e._capability.reject),
        e
    );
}
var lA = class {
        constructor() {
            var t, e;
            (0, o.t)(this, "_capability", Promise.withResolvers()),
                (0, o.t)(this, "_transport", null),
                (0, o.t)(this, "_worker", null),
                (0, o.t)(this, "docId", `d${((t = ly._), (e = t++), (ly._ = t), e)}`),
                (0, o.t)(this, "destroyed", !1),
                (0, o.t)(this, "onPassword", null),
                (0, o.t)(this, "onProgress", null);
        }
        get promise() {
            return this._capability.promise;
        }
        async destroy() {
            this.destroyed = !0;
            try {
                this._worker?.port && (this._worker._pendingDestroy = !0), await this._transport?.destroy();
            } catch (t) {
                throw (this._worker?.port && delete this._worker._pendingDestroy, t);
            }
            (this._transport = null), this._worker?.destroy(), (this._worker = null);
        }
        async getData() {
            return this._transport.getData();
        }
    },
    ly = { _: 0 },
    l_ = new WeakMap(),
    lx = new WeakMap(),
    lk = new WeakMap(),
    lM = new WeakMap(),
    lS = new WeakMap(),
    lE = class {
        constructor(t, e, i = !1, s = null) {
            p(this, l_, Promise.withResolvers()),
                p(this, lx, []),
                p(this, lk, []),
                p(this, lM, []),
                p(this, lS, []),
                (this.length = t),
                (this.initialData = e),
                (this.progressiveDone = i),
                (this.contentDispositionFilename = s);
        }
        addRangeListener(t) {
            f(lS, this).push(t);
        }
        addProgressListener(t) {
            f(lM, this).push(t);
        }
        addProgressiveReadListener(t) {
            f(lk, this).push(t);
        }
        addProgressiveDoneListener(t) {
            f(lx, this).push(t);
        }
        onDataRange(t, e) {
            for (let i of f(lS, this)) i(t, e);
        }
        onDataProgress(t, e) {
            f(l_, this).promise.then(() => {
                for (let i of f(lM, this)) i(t, e);
            });
        }
        onDataProgressiveRead(t) {
            f(l_, this).promise.then(() => {
                for (let e of f(lk, this)) e(t);
            });
        }
        onDataProgressiveDone() {
            f(l_, this).promise.then(() => {
                for (let t of f(lx, this)) t();
            });
        }
        transportReady() {
            f(l_, this).resolve();
        }
        requestDataRange(t, e) {
            D("Abstract method PDFDataRangeTransport.requestDataRange");
        }
        abort() {}
    },
    lC = class {
        constructor(t, e) {
            (this._pdfInfo = t), (this._transport = e);
        }
        get annotationStorage() {
            return this._transport.annotationStorage;
        }
        get canvasFactory() {
            return this._transport.canvasFactory;
        }
        get filterFactory() {
            return this._transport.filterFactory;
        }
        get numPages() {
            return this._pdfInfo.numPages;
        }
        get fingerprints() {
            return this._pdfInfo.fingerprints;
        }
        get isPureXfa() {
            return F(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        get allXfaHtml() {
            return this._transport._htmlForXfa;
        }
        getPage(t) {
            return this._transport.getPage(t);
        }
        getPageIndex(t) {
            return this._transport.getPageIndex(t);
        }
        getDestinations() {
            return this._transport.getDestinations();
        }
        getDestination(t) {
            return this._transport.getDestination(t);
        }
        getPageLabels() {
            return this._transport.getPageLabels();
        }
        getPageLayout() {
            return this._transport.getPageLayout();
        }
        getPageMode() {
            return this._transport.getPageMode();
        }
        getViewerPreferences() {
            return this._transport.getViewerPreferences();
        }
        getOpenAction() {
            return this._transport.getOpenAction();
        }
        getAttachments() {
            return this._transport.getAttachments();
        }
        getAnnotationsByType(t, e) {
            return this._transport.getAnnotationsByType(t, e);
        }
        getJSActions() {
            return this._transport.getDocJSActions();
        }
        getOutline() {
            return this._transport.getOutline();
        }
        getOptionalContentConfig({ intent: t = "display" } = {}) {
            let { renderingIntent: e } = this._transport.getRenderingIntent(t);
            return this._transport.getOptionalContentConfig(e);
        }
        getPermissions() {
            return this._transport.getPermissions();
        }
        getMetadata() {
            return this._transport.getMetadata();
        }
        getMarkInfo() {
            return this._transport.getMarkInfo();
        }
        getData() {
            return this._transport.getData();
        }
        saveDocument() {
            return this._transport.saveDocument();
        }
        extractPages(t) {
            return this._transport.extractPages(t);
        }
        getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise;
        }
        cleanup(t = !1) {
            return this._transport.startCleanup(t || this.isPureXfa);
        }
        destroy() {
            return this.loadingTask.destroy();
        }
        cachedPageNumber(t) {
            return this._transport.cachedPageNumber(t);
        }
        get loadingParams() {
            return this._transport.loadingParams;
        }
        get loadingTask() {
            return this._transport.loadingTask;
        }
        getFieldObjects() {
            return this._transport.getFieldObjects();
        }
        hasJSActions() {
            return this._transport.hasJSActions();
        }
        getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds();
        }
    },
    lT = new WeakMap(),
    lP = new WeakMap(),
    lD = new WeakSet(),
    lI = class {
        constructor(t, e, i, s = !1) {
            u(this, lD),
                p(this, lT, !1),
                p(this, lP, tD.instance),
                (this._pageIndex = t),
                (this._pageInfo = e),
                (this._transport = i),
                (this._stats = s ? new th() : null),
                (this._pdfBug = s),
                (this.commonObjs = i.commonObjs),
                (this.objs = new oK()),
                (this._intentStates = new Map()),
                (this.destroyed = !1),
                (this.recordedBBoxes = null);
        }
        get pageNumber() {
            return this._pageIndex + 1;
        }
        set pageNumber(t) {
            this._pageIndex = t - 1;
        }
        get rotate() {
            return this._pageInfo.rotate;
        }
        get ref() {
            return this._pageInfo.ref;
        }
        get userUnit() {
            return this._pageInfo.userUnit;
        }
        get view() {
            return this._pageInfo.view;
        }
        getViewport({ scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: n = !1 } = {}) {
            return new ta({
                viewBox: this.view,
                userUnit: this.userUnit,
                scale: t,
                rotation: e,
                offsetX: i,
                offsetY: s,
                dontFlip: n,
            });
        }
        getAnnotations({ intent: t = "display" } = {}) {
            let { renderingIntent: e } = this._transport.getRenderingIntent(t);
            return this._transport.getAnnotations(this._pageIndex, e);
        }
        getJSActions() {
            return this._transport.getPageJSActions(this._pageIndex);
        }
        get filterFactory() {
            return this._transport.filterFactory;
        }
        get isPureXfa() {
            return F(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        async getXfa() {
            return this._transport._htmlForXfa?.children[this._pageIndex] || null;
        }
        render({
            canvasContext: t,
            canvas: e = t.canvas,
            viewport: i,
            intent: s = "display",
            annotationMode: n = A.ENABLE,
            transform: a = null,
            background: r = null,
            optionalContentConfigPromise: o = null,
            annotationCanvasMap: l = null,
            pageColors: h = null,
            printAnnotationStorage: c = null,
            isEditing: u = !1,
            recordOperations: p = !1,
            operationsFilter: f = null,
        }) {
            this._stats?.time("Overall");
            let m = this._transport.getRenderingIntent(s, n, c, u),
                { renderingIntent: w, cacheKey: b } = m;
            g(lT, this, !1), (o ||= this._transport.getOptionalContentConfig(w));
            let v = this._intentStates.get(b);
            v || ((v = Object.create(null)), this._intentStates.set(b, v)),
                v.streamReaderCancelTimeout &&
                    (clearTimeout(v.streamReaderCancelTimeout), (v.streamReaderCancelTimeout = null));
            let y = !!(4 & w);
            v.displayReadyCapability ||
                ((v.displayReadyCapability = Promise.withResolvers()),
                (v.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }),
                this._stats?.time("Page Request"),
                this._pumpOperatorList(m));
            let _ = !!(this._pdfBug && globalThis.StepperManager?.enabled),
                x = !this.recordedBBoxes && (p || _),
                k = (t) => {
                    if ((v.renderTasks.delete(M), x)) {
                        let t = M.gfx?.dependencyTracker.take();
                        t &&
                            (M.stepper && M.stepper.setOperatorBBoxes(t, M.gfx.dependencyTracker.takeDebugMetadata()),
                            p && (this.recordedBBoxes = t));
                    }
                    y && g(lT, this, !0),
                        d(lD, this, lL).call(this),
                        t
                            ? (M.capability.reject(t),
                              this._abortOperatorList({ intentState: v, reason: t instanceof Error ? t : Error(t) }))
                            : M.capability.resolve(),
                        this._stats &&
                            (this._stats.timeEnd("Rendering"),
                            this._stats.timeEnd("Overall"),
                            globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
                },
                M = new l9({
                    callback: k,
                    params: {
                        canvas: e,
                        canvasContext: t,
                        dependencyTracker: x ? new re(e, v.operatorList.length, _) : null,
                        viewport: i,
                        transform: a,
                        background: r,
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    annotationCanvasMap: l,
                    operatorList: v.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: this._transport.canvasFactory,
                    filterFactory: this._transport.filterFactory,
                    useRequestAnimationFrame: !y,
                    pdfBug: this._pdfBug,
                    pageColors: h,
                    enableHWA: this._transport.enableHWA,
                    operationsFilter: f,
                });
            (v.renderTasks ||= new Set()).add(M);
            let S = M.task;
            return (
                Promise.all([v.displayReadyCapability.promise, o])
                    .then(([t, e]) => {
                        if (this.destroyed) return void k();
                        if ((this._stats?.time("Rendering"), !(e.renderingIntent & w)))
                            throw Error(
                                "Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.",
                            );
                        M.initializeGraphics({ transparency: t, optionalContentConfig: e }), M.operatorListChanged();
                    })
                    .catch(k),
                S
            );
        }
        getOperatorList({
            intent: t = "display",
            annotationMode: e = A.ENABLE,
            printAnnotationStorage: i = null,
            isEditing: s = !1,
        } = {}) {
            let n,
                a = this._transport.getRenderingIntent(t, e, i, s, !0),
                r = this._intentStates.get(a.cacheKey);
            return (
                r || ((r = Object.create(null)), this._intentStates.set(a.cacheKey, r)),
                r.opListReadCapability ||
                    (((n = Object.create(null)).operatorListChanged = function () {
                        r.operatorList.lastChunk &&
                            (r.opListReadCapability.resolve(r.operatorList), r.renderTasks.delete(n));
                    }),
                    (r.opListReadCapability = Promise.withResolvers()),
                    (r.renderTasks ||= new Set()).add(n),
                    (r.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }),
                    this._stats?.time("Page Request"),
                    this._pumpOperatorList(a)),
                r.opListReadCapability.promise
            );
        }
        streamTextContent({ includeMarkedContent: t = !1, disableNormalization: e = !1 } = {}) {
            return this._transport.messageHandler.sendWithStream(
                "GetTextContent",
                {
                    pageId: f(lP, this).getPageId(this._pageIndex + 1) - 1,
                    pageIndex: this._pageIndex,
                    includeMarkedContent: !0 === t,
                    disableNormalization: !0 === e,
                },
                { highWaterMark: 100, size: (t) => t.items.length },
            );
        }
        getTextContent(t = {}) {
            if (this._transport._htmlForXfa) return this.getXfa().then((t) => tt.textContent(t));
            let e = this.streamTextContent(t);
            return new Promise(function (t, i) {
                let s = e.getReader(),
                    n = { items: [], styles: Object.create(null), lang: null };
                !(function e() {
                    s.read().then(function ({ value: i, done: s }) {
                        s
                            ? t(n)
                            : ((n.lang ??= i.lang), Object.assign(n.styles, i.styles), n.items.push(...i.items), e());
                    }, i);
                })();
            });
        }
        getStructTree() {
            return this._transport.getStructTree(this._pageIndex);
        }
        _destroy() {
            this.destroyed = !0;
            let t = [];
            for (let e of this._intentStates.values())
                if (
                    (this._abortOperatorList({ intentState: e, reason: Error("Page was destroyed."), force: !0 }),
                    !e.opListReadCapability)
                )
                    for (let i of e.renderTasks) t.push(i.completed), i.cancel();
            return this.objs.clear(), g(lT, this, !1), Promise.all(t);
        }
        cleanup(t = !1) {
            g(lT, this, !0);
            let e = d(lD, this, lL).call(this);
            return t && e && (this._stats &&= new th()), e;
        }
        _startRenderPage(t, e) {
            let i = this._intentStates.get(e);
            i && (this._stats?.timeEnd("Page Request"), i.displayReadyCapability?.resolve(t));
        }
        _renderPageChunk(t, e) {
            for (let i = 0, s = t.length; i < s; i++)
                e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
            for (let i of ((e.operatorList.lastChunk = t.lastChunk),
            (e.operatorList.separateAnnots = t.separateAnnots),
            e.renderTasks))
                i.operatorListChanged();
            t.lastChunk && d(lD, this, lL).call(this);
        }
        _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: i, modifiedIds: s }) {
            let { map: n, transfer: a } = i,
                r = this._transport.messageHandler
                    .sendWithStream(
                        "GetOperatorList",
                        {
                            pageId: f(lP, this).getPageId(this._pageIndex + 1) - 1,
                            pageIndex: this._pageIndex,
                            intent: t,
                            cacheKey: e,
                            annotationStorage: n,
                            modifiedIds: s,
                        },
                        a,
                    )
                    .getReader(),
                o = this._intentStates.get(e);
            o.streamReader = r;
            let l = () => {
                r.read().then(
                    ({ value: t, done: e }) => {
                        if (e) {
                            o.streamReader = null;
                            return;
                        }
                        this._transport.destroyed || (this._renderPageChunk(t, o), l());
                    },
                    (t) => {
                        if (((o.streamReader = null), !this._transport.destroyed)) {
                            if (o.operatorList) {
                                for (let t of ((o.operatorList.lastChunk = !0), o.renderTasks)) t.operatorListChanged();
                                d(lD, this, lL).call(this);
                            }
                            if (o.displayReadyCapability) o.displayReadyCapability.reject(t);
                            else if (o.opListReadCapability) o.opListReadCapability.reject(t);
                            else throw t;
                        }
                    },
                );
            };
            l();
        }
        _abortOperatorList({ intentState: t, reason: e, force: i = !1 }) {
            if (t.streamReader) {
                if (
                    (t.streamReaderCancelTimeout &&
                        (clearTimeout(t.streamReaderCancelTimeout), (t.streamReaderCancelTimeout = null)),
                    !i)
                ) {
                    if (t.renderTasks.size > 0) return;
                    if (e instanceof tr) {
                        let i = 100;
                        e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay),
                            (t.streamReaderCancelTimeout = setTimeout(() => {
                                (t.streamReaderCancelTimeout = null),
                                    this._abortOperatorList({ intentState: t, reason: e, force: !0 });
                            }, i));
                        return;
                    }
                }
                if (
                    (t.streamReader.cancel(new H(e.message)).catch(() => {}),
                    (t.streamReader = null),
                    !this._transport.destroyed)
                ) {
                    for (let [e, i] of this._intentStates)
                        if (i === t) {
                            this._intentStates.delete(e);
                            break;
                        }
                    this.cleanup();
                }
            }
        }
        get stats() {
            return this._stats;
        }
    };
function lL() {
    if (!f(lT, this) || this.destroyed) return !1;
    for (let { renderTasks: t, operatorList: e } of this._intentStates.values())
        if (t.size > 0 || !e.lastChunk) return !1;
    return this._intentStates.clear(), this.objs.clear(), g(lT, this, !1), !0;
}
var lR = new WeakMap(),
    lF = new WeakMap(),
    lN = new WeakMap(),
    lB = new WeakMap(),
    lO = new WeakSet(),
    lW = class t {
        constructor({ name: t = null, port: e = null, verbosity: i = C } = {}) {
            if (
                (u(this, lO),
                p(this, lR, Promise.withResolvers()),
                p(this, lF, null),
                p(this, lN, null),
                p(this, lB, null),
                (this.name = t),
                (this.destroyed = !1),
                (this.verbosity = i),
                e)
            ) {
                if (lq._.has(e)) throw Error("Cannot use more than one PDFWorker per port.");
                lq._.set(e, this), d(lO, this, l$).call(this, e);
            } else d(lO, this, lH).call(this);
        }
        get promise() {
            return f(lR, this).promise;
        }
        get port() {
            return f(lN, this);
        }
        get messageHandler() {
            return f(lF, this);
        }
        destroy() {
            (this.destroyed = !0),
                f(lB, this)?.terminate(),
                g(lB, this, null),
                lq._.delete(f(lN, this)),
                g(lN, this, null),
                f(lF, this)?.destroy(),
                g(lF, this, null);
        }
        static create(e) {
            let i = d(t, this, lq)._.get(e?.port);
            if (i) {
                if (i._pendingDestroy)
                    throw Error(
                        "PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.",
                    );
                return i;
            }
            return new t(e);
        }
        static get workerSrc() {
            if (rV.workerSrc) return rV.workerSrc;
            throw Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        static get _setupFakeWorkerGlobal() {
            return F(
                this,
                "_setupFakeWorkerGlobal",
                (async () =>
                    lz.call(d(t, this)) ? lz.call(d(t, this)) : (await import(this.workerSrc)).WorkerMessageHandler)(),
            );
        }
    };
function lU() {
    f(lR, this).resolve(), f(lF, this).send("configure", { verbosity: this.verbosity });
}
function l$(t) {
    g(lN, this, t),
        g(lF, this, new n6("main", "worker", t)),
        f(lF, this).on("ready", () => {}),
        d(lO, this, lU).call(this);
}
function lH() {
    if (lV._ || lz.call(lW)) return void d(lO, this, lj).call(this);
    let { workerSrc: t } = lW;
    try {
        lW._isSameOrigin(window.location, t) || (t = lW._createCDNWrapper(new URL(t, window.location).href));
        let e = new Worker(t, { type: "module" }),
            i = new n6("main", "worker", e),
            s = () => {
                n.abort(),
                    i.destroy(),
                    e.terminate(),
                    this.destroyed ? f(lR, this).reject(Error("Worker was destroyed")) : d(lO, this, lj).call(this);
            },
            n = new AbortController();
        e.addEventListener(
            "error",
            () => {
                f(lB, this) || s();
            },
            { signal: n.signal },
        ),
            i.on("test", (t) => {
                (n.abort(), this.destroyed || !t)
                    ? s()
                    : (g(lF, this, i), g(lN, this, e), g(lB, this, e), d(lO, this, lU).call(this));
            }),
            i.on("ready", (t) => {
                if ((n.abort(), this.destroyed)) return void s();
                try {
                    a();
                } catch {
                    d(lO, this, lj).call(this);
                }
            });
        let a = () => {
            let t = new Uint8Array();
            i.send("test", t, [t.buffer]);
        };
        a();
        return;
    } catch {
        T("The worker has been disabled.");
    }
    d(lO, this, lj).call(this);
}
function lj() {
    lV._ || (P("Setting up fake worker."), (lV._ = !0)),
        lW._setupFakeWorkerGlobal
            .then((t) => {
                var e, i;
                if (this.destroyed) return void f(lR, this).reject(Error("Worker was destroyed"));
                let s = new n1();
                g(lN, this, s);
                let n = `fake${((e = lG._), (i = e++), (lG._ = e), i)}`,
                    a = new n6(n + "_worker", n, s);
                t.setup(a, s), g(lF, this, new n6(n, n + "_worker", s)), d(lO, this, lU).call(this);
            })
            .catch((t) => {
                f(lR, this).reject(Error(`Setting up fake worker failed: "${t.message}".`));
            });
}
function lz() {
    try {
        return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
        return null;
    }
}
var lG = { _: 0 },
    lV = { _: !1 },
    lq = { _: new WeakMap() };
b && ((lV._ = d(lW, lW, !0)), (rV.workerSrc ||= "./pdf.worker.mjs")),
    (lW._isSameOrigin = (t, e) => {
        let i = URL.parse(t);
        if (!i?.origin || "null" === i.origin) return !1;
        let s = new URL(e, i);
        return i.origin === s.origin;
    }),
    (lW._createCDNWrapper = (t) => {
        let e = `await import("${t}");`;
        return URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
    }),
    (lW.fromPort = (t) => {
        if (
            (console.log("Deprecated API usage: `PDFWorker.fromPort` - please use `PDFWorker.create` instead."),
            !t?.port)
        )
            throw Error("PDFWorker.fromPort - invalid method signature.");
        return lW.create(t);
    });
var lX = new WeakMap(),
    lK = new WeakMap(),
    lY = new WeakMap(),
    lQ = new WeakMap(),
    lJ = new WeakMap(),
    lZ = new WeakMap(),
    l0 = new WeakMap(),
    l1 = new WeakMap(),
    l2 = new WeakSet(),
    l3 = class {
        constructor(t, e, i, s, n) {
            u(this, l2),
                (0, o.t)(this, "downloadInfoCapability", Promise.withResolvers()),
                p(this, lX, null),
                p(this, lK, new Map()),
                p(this, lY, null),
                p(this, lQ, new Map()),
                p(this, lJ, new Map()),
                p(this, lZ, new Map()),
                p(this, l0, null),
                p(this, l1, tD.instance),
                (this.messageHandler = t),
                (this.loadingTask = e),
                g(lY, this, i),
                (this.commonObjs = new oK()),
                (this.fontLoader = new nc({ ownerDocument: s.ownerDocument, styleElement: s.styleElement })),
                (this.enableHWA = s.enableHWA),
                (this.loadingParams = s.loadingParams),
                (this._params = s),
                (this.canvasFactory = n.canvasFactory),
                (this.filterFactory = n.filterFactory),
                (this.cMapReaderFactory = n.cMapReaderFactory),
                (this.standardFontDataFactory = n.standardFontDataFactory),
                (this.wasmFactory = n.wasmFactory),
                (this.destroyed = !1),
                (this.destroyCapability = null),
                this.setupMessageHandler(),
                f(l1, this).addListener(d(l2, this, l5).bind(this));
        }
        get annotationStorage() {
            return F(this, "annotationStorage", new nr());
        }
        getRenderingIntent(t, e = A.ENABLE, i = null, s = !1, n = !1) {
            let a = 2,
                r = nt;
            switch (t) {
                case "any":
                    a = 1;
                    break;
                case "display":
                    break;
                case "print":
                    a = 4;
                    break;
                default:
                    P(`getRenderingIntent - invalid intent: ${t}`);
            }
            let o = 4 & a && i instanceof nh ? i : this.annotationStorage;
            switch (e) {
                case A.DISABLE:
                    a += 64;
                    break;
                case A.ENABLE:
                    break;
                case A.ENABLE_FORMS:
                    a += 16;
                    break;
                case A.ENABLE_STORAGE:
                    (a += 32), (r = o.serializable);
                    break;
                default:
                    P(`getRenderingIntent - invalid annotationMode: ${e}`);
            }
            s && (a += 128), n && (a += 256);
            let { ids: l, hash: h } = o.modifiedIds,
                d = [a, r.hash, h];
            return { renderingIntent: a, cacheKey: d.join("_"), annotationStorageSerializable: r, modifiedIds: l };
        }
        destroy() {
            if (this.destroyCapability) return this.destroyCapability.promise;
            (this.destroyed = !0),
                (this.destroyCapability = Promise.withResolvers()),
                f(l0, this)?.reject(Error("Worker was destroyed during onPassword callback"));
            let t = [];
            for (let e of f(lQ, this).values()) t.push(e._destroy());
            f(lQ, this).clear(),
                f(lJ, this).clear(),
                f(lZ, this).clear(),
                this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
            let e = this.messageHandler.sendWithPromise("Terminate", null);
            return (
                t.push(e),
                Promise.all(t).then(() => {
                    this.commonObjs.clear(),
                        this.fontLoader.clear(),
                        f(lK, this).clear(),
                        this.filterFactory.destroy(),
                        lr.cleanup(),
                        f(lY, this)?.cancelAllRequests(new H("Worker was terminated.")),
                        this.messageHandler?.destroy(),
                        (this.messageHandler = null),
                        this.destroyCapability.resolve();
                }, this.destroyCapability.reject),
                this.destroyCapability.promise
            );
        }
        setupMessageHandler() {
            let { messageHandler: t, loadingTask: e } = this;
            t.on("GetReader", (t, e) => {
                I(f(lY, this), "GetReader - no `BasePDFStream` instance available."),
                    g(lX, this, f(lY, this).getFullReader()),
                    (f(lX, this).onProgress = (t) => d(l2, this, l6).call(this, t)),
                    (e.onPull = () => {
                        f(lX, this)
                            .read()
                            .then(function ({ value: t, done: i }) {
                                i
                                    ? e.close()
                                    : (I(t instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."),
                                      e.enqueue(new Uint8Array(t), 1, [t]));
                            })
                            .catch((t) => {
                                e.error(t);
                            });
                    }),
                    (e.onCancel = (t) => {
                        f(lX, this).cancel(t),
                            e.ready.catch((t) => {
                                if (!this.destroyed) throw t;
                            });
                    });
            }),
                t.on("ReaderHeadersReady", async (t) => {
                    await f(lX, this).headersReady;
                    let { isStreamingSupported: e, isRangeSupported: i, contentLength: s } = f(lX, this);
                    return (
                        e && i && (f(lX, this).onProgress = null),
                        { isStreamingSupported: e, isRangeSupported: i, contentLength: s }
                    );
                }),
                t.on("GetRangeReader", (t, e) => {
                    I(f(lY, this), "GetRangeReader - no `BasePDFStream` instance available.");
                    let i = f(lY, this).getRangeReader(t.begin, t.end);
                    i
                        ? ((e.onPull = () => {
                              i.read()
                                  .then(function ({ value: t, done: i }) {
                                      i
                                          ? e.close()
                                          : (I(t instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."),
                                            e.enqueue(new Uint8Array(t), 1, [t]));
                                  })
                                  .catch((t) => {
                                      e.error(t);
                                  });
                          }),
                          (e.onCancel = (t) => {
                              i.cancel(t),
                                  e.ready.catch((t) => {
                                      if (!this.destroyed) throw t;
                                  });
                          }))
                        : e.close();
                }),
                t.on("GetDoc", ({ pdfInfo: t }) => {
                    (f(l1, this).pagesNumber = t.numPages),
                        (this._numPages = t.numPages),
                        (this._htmlForXfa = t.htmlForXfa),
                        delete t.htmlForXfa,
                        e._capability.resolve(new lC(t, this));
                }),
                t.on("DocException", (t) => {
                    e._capability.reject(n3(t));
                }),
                t.on("PasswordRequest", (t) => {
                    g(l0, this, Promise.withResolvers());
                    try {
                        if (!e.onPassword) throw n3(t);
                        let i = (t) => {
                            t instanceof Error ? f(l0, this).reject(t) : f(l0, this).resolve({ password: t });
                        };
                        e.onPassword(i, t.code);
                    } catch (t) {
                        f(l0, this).reject(t);
                    }
                    return f(l0, this).promise;
                }),
                t.on("DataLoaded", (t) => {
                    d(l2, this, l6).call(this, { loaded: t.length, total: t.length }),
                        this.downloadInfoCapability.resolve(t);
                }),
                t.on("StartRenderPage", (t) => {
                    this.destroyed || f(lQ, this).get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
                }),
                t.on("commonobj", ([e, i, s]) => {
                    if (this.destroyed || this.commonObjs.has(e)) return null;
                    switch (i) {
                        case "Font":
                            if ("error" in s) {
                                let t = s.error;
                                P(`Error during font loading: ${t}`), this.commonObjs.resolve(e, t);
                                break;
                            }
                            let n = new np(
                                new nP(s),
                                this._params.pdfBug && globalThis.FontInspector?.enabled
                                    ? (t, e) => globalThis.FontInspector.fontAdded(t, e)
                                    : null,
                                s.extra,
                                s.charProcOperatorList,
                            );
                            this.fontLoader
                                .bind(n)
                                .catch(() => t.sendWithPromise("FontFallback", { id: e }))
                                .finally(() => {
                                    !n.fontExtraProperties && n.data && n.clearData(), this.commonObjs.resolve(e, n);
                                });
                            break;
                        case "CopyLocalImage":
                            let { imageRef: a } = s;
                            for (let t of (I(a, "The imageRef must be defined."), f(lQ, this).values()))
                                for (let [, i] of t.objs)
                                    if (i?.ref === a) {
                                        if (!i.dataLen) return null;
                                        return this.commonObjs.resolve(e, structuredClone(i)), i.dataLen;
                                    }
                            break;
                        case "FontPath":
                            this.commonObjs.resolve(e, new nK(s));
                            break;
                        case "Image":
                            this.commonObjs.resolve(e, s);
                            break;
                        case "Pattern":
                            let r = new nW(s);
                            this.commonObjs.resolve(e, r.getIR());
                            break;
                        default:
                            throw Error(`Got unknown common object type ${i}`);
                    }
                    return null;
                }),
                t.on("obj", ([t, e, i, s]) => {
                    if (this.destroyed) return;
                    let n = f(lQ, this).get(e);
                    if (!n.objs.has(t)) {
                        if (0 === n._intentStates.size) return void s?.bitmap?.close();
                        switch (i) {
                            case "Image":
                            case "Pattern":
                                n.objs.resolve(t, s);
                                break;
                            default:
                                throw Error(`Got unknown object type ${i}`);
                        }
                    }
                }),
                t.on("DocProgress", (t) => {
                    this.destroyed || d(l2, this, l6).call(this, t);
                }),
                t.on("FetchBinaryData", async (t) => {
                    if (this.destroyed) throw Error("Worker was destroyed.");
                    let e = this[t.type];
                    if (!e) throw Error(`${t.type} not initialized, see the \`useWorkerFetch\` parameter.`);
                    return e.fetch(t);
                });
        }
        getData() {
            return this.messageHandler.sendWithPromise("GetData", null);
        }
        saveDocument() {
            this.annotationStorage.size <= 0 &&
                P("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
            let { map: t, transfer: e } = this.annotationStorage.serializable;
            return this.messageHandler
                .sendWithPromise(
                    "SaveDocument",
                    {
                        isPureXfa: !!this._htmlForXfa,
                        numPages: this._numPages,
                        annotationStorage: t,
                        filename: f(lX, this)?.filename ?? null,
                    },
                    e,
                )
                .finally(() => {
                    this.annotationStorage.resetModified();
                });
        }
        extractPages(t) {
            return this.messageHandler.sendWithPromise("ExtractPages", { pageInfos: t });
        }
        getPage(t) {
            if (!Number.isInteger(t) || t <= 0 || t > f(l1, this).pagesNumber)
                return Promise.reject(Error("Invalid page request."));
            let e = t - 1,
                i = f(l1, this).getPageId(t) - 1,
                s = f(lJ, this).get(e);
            if (s) return s;
            let n = this.messageHandler.sendWithPromise("GetPage", { pageIndex: i }).then((t) => {
                if (this.destroyed) throw Error("Transport destroyed");
                t.refStr && f(lZ, this).set(t.refStr, i);
                let s = new lI(e, t, this, this._params.pdfBug);
                return f(lQ, this).set(e, s), s;
            });
            return f(lJ, this).set(e, n), n;
        }
        async getPageIndex(t) {
            if (!nQ(t)) throw Error("Invalid pageIndex request.");
            let e = await this.messageHandler.sendWithPromise("GetPageIndex", { num: t.num, gen: t.gen });
            return f(l1, this).getPageNumber(e + 1) - 1;
        }
        getAnnotations(t, e) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: f(l1, this).getPageId(t + 1) - 1,
                intent: e,
            });
        }
        getFieldObjects() {
            return d(l2, this, l4).call(this, "GetFieldObjects");
        }
        hasJSActions() {
            return d(l2, this, l4).call(this, "HasJSActions");
        }
        getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }
        getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(t) {
            return "string" != typeof t
                ? Promise.reject(Error("Invalid destination request."))
                : this.messageHandler.sendWithPromise("GetDestination", { id: t });
        }
        getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }
        getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }
        getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
        }
        getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        }
        getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }
        getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
        }
        getAnnotationsByType(t, e) {
            return this.messageHandler.sendWithPromise("GetAnnotationsByType", { types: t, pageIndexesToSkip: e });
        }
        getDocJSActions() {
            return d(l2, this, l4).call(this, "GetDocJSActions");
        }
        getPageJSActions(t) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: f(l1, this).getPageId(t + 1) - 1,
            });
        }
        getStructTree(t) {
            return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: f(l1, this).getPageId(t + 1) - 1,
            });
        }
        getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig(t) {
            return d(l2, this, l4)
                .call(this, "GetOptionalContentConfig")
                .then((e) => new r9(e, t));
        }
        getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
            let t = "GetMetadata",
                e = f(lK, this).get(t);
            if (e) return e;
            let i = this.messageHandler
                .sendWithPromise(t, null)
                .then((t) => ({
                    info: t[0],
                    metadata: t[1] ? new rQ(t[1]) : null,
                    contentDispositionFilename: f(lX, this)?.filename ?? null,
                    contentLength: f(lX, this)?.contentLength ?? null,
                    hasStructTree: t[2],
                }));
            return f(lK, this).set(t, i), i;
        }
        getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }
        async startCleanup(t = !1) {
            if (!this.destroyed) {
                for (let t of (await this.messageHandler.sendWithPromise("Cleanup", null), f(lQ, this).values()))
                    if (!t.cleanup()) throw Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
                this.commonObjs.clear(),
                    t || this.fontLoader.clear(),
                    f(lK, this).clear(),
                    this.filterFactory.destroy(!0),
                    lr.cleanup();
            }
        }
        cachedPageNumber(t) {
            if (!nQ(t)) return null;
            let e = 0 === t.gen ? `${t.num}R` : `${t.num}R${t.gen}`,
                i = f(lZ, this).get(e);
            return i >= 0 ? f(l1, this).getPageNumber(i + 1) : null;
        }
    };
function l5() {
    let t = new Map(),
        e = new Map();
    for (let i = 0, s = f(l1, this).pagesNumber; i < s; i++) {
        let s = f(l1, this).getPrevPageNumber(i + 1) - 1,
            n = f(lQ, this).get(s);
        n && t.set(i, n);
        let a = f(lJ, this).get(s);
        a && e.set(i, a);
    }
    g(lQ, this, t), g(lJ, this, e);
}
function l4(t, e = null) {
    let i = f(lK, this).get(t);
    if (i) return i;
    let s = this.messageHandler.sendWithPromise(t, e);
    return f(lK, this).set(t, s), s;
}
function l6({ loaded: t, total: e }) {
    this.loadingTask.onProgress?.({ loaded: t, total: e, percent: Z(Math.round((t / e) * 100), 0, 100) });
}
var l8 = class {
        constructor(t) {
            (0, o.t)(this, "_internalRenderTask", null),
                (0, o.t)(this, "onContinue", null),
                (0, o.t)(this, "onError", null),
                (this._internalRenderTask = t);
        }
        get promise() {
            return this._internalRenderTask.capability.promise;
        }
        cancel(t = 0) {
            this._internalRenderTask.cancel(null, t);
        }
        get separateAnnots() {
            let { separateAnnots: t } = this._internalRenderTask.operatorList;
            if (!t) return !1;
            let { annotationCanvasMap: e } = this._internalRenderTask;
            return t.form || (t.canvas && e?.size > 0);
        }
    },
    l7 = new WeakMap(),
    l9 = class {
        constructor({
            callback: t,
            params: e,
            objs: i,
            commonObjs: s,
            annotationCanvasMap: n,
            operatorList: a,
            pageIndex: r,
            canvasFactory: o,
            filterFactory: l,
            useRequestAnimationFrame: h = !1,
            pdfBug: d = !1,
            pageColors: c = null,
            enableHWA: u = !1,
            operationsFilter: g = null,
        }) {
            p(this, l7, null),
                (this.callback = t),
                (this.params = e),
                (this.objs = i),
                (this.commonObjs = s),
                (this.annotationCanvasMap = n),
                (this.operatorListIdx = null),
                (this.operatorList = a),
                (this._pageIndex = r),
                (this.canvasFactory = o),
                (this.filterFactory = l),
                (this._pdfBug = d),
                (this.pageColors = c),
                (this.running = !1),
                (this.graphicsReadyCallback = null),
                (this.graphicsReady = !1),
                (this._useRequestAnimationFrame = !0 === h && "u" > typeof window),
                (this.cancelled = !1),
                (this.capability = Promise.withResolvers()),
                (this.task = new l8(this)),
                (this._cancelBound = this.cancel.bind(this)),
                (this._continueBound = this._continue.bind(this)),
                (this._scheduleNextBound = this._scheduleNext.bind(this)),
                (this._nextBound = this._next.bind(this)),
                (this._canvas = e.canvas),
                (this._canvasContext = e.canvas ? null : e.canvasContext),
                (this._enableHWA = u),
                (this._dependencyTracker = e.dependencyTracker),
                (this._operationsFilter = g);
        }
        get completed() {
            return this.capability.promise.catch(function () {});
        }
        initializeGraphics({ transparency: t = !1, optionalContentConfig: e }) {
            if (this.cancelled) return;
            if (this._canvas) {
                if (ht._.has(this._canvas))
                    throw Error(
                        "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.",
                    );
                ht._.add(this._canvas);
            }
            this._pdfBug &&
                globalThis.StepperManager?.enabled &&
                ((this.stepper = globalThis.StepperManager.create(this._pageIndex)),
                this.stepper.init(this.operatorList),
                (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
            let { viewport: i, transform: s, background: n, dependencyTracker: a } = this.params;
            (this.gfx = new rH(
                this._canvasContext ||
                    this._canvas.getContext("2d", { alpha: !1, willReadFrequently: !this._enableHWA }),
                this.commonObjs,
                this.objs,
                this.canvasFactory,
                this.filterFactory,
                { optionalContentConfig: e },
                this.annotationCanvasMap,
                this.pageColors,
                a,
            )),
                this.gfx.beginDrawing({ transform: s, viewport: i, transparency: t, background: n }),
                (this.operatorListIdx = 0),
                (this.graphicsReady = !0),
                this.graphicsReadyCallback?.();
        }
        cancel(t = null, e = 0) {
            (this.running = !1),
                (this.cancelled = !0),
                this.gfx?.endDrawing(),
                f(l7, this) && (window.cancelAnimationFrame(f(l7, this)), g(l7, this, null)),
                ht._.delete(this._canvas),
                (t ||= new tr(`Rendering cancelled, page ${this._pageIndex + 1}`, e)),
                this.callback(t),
                this.task.onError?.(t);
        }
        operatorListChanged() {
            if (!this.graphicsReady) {
                this.graphicsReadyCallback ||= this._continueBound;
                return;
            }
            this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length),
                this.stepper?.updateOperatorList(this.operatorList),
                this.running || this._continue();
        }
        _continue() {
            (this.running = !0),
                this.cancelled ||
                    (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
        }
        _scheduleNext() {
            this._useRequestAnimationFrame
                ? g(
                      l7,
                      this,
                      window.requestAnimationFrame(() => {
                          g(l7, this, null), this._nextBound().catch(this._cancelBound);
                      }),
                  )
                : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
        }
        async _next() {
            !this.cancelled &&
                ((this.operatorListIdx = this.gfx.executeOperatorList(
                    this.operatorList,
                    this.operatorListIdx,
                    this._continueBound,
                    this.stepper,
                    this._operationsFilter,
                )),
                this.operatorListIdx === this.operatorList.argsArray.length &&
                    ((this.running = !1),
                    this.operatorList.lastChunk &&
                        (this.gfx.endDrawing(), ht._.delete(this._canvas), this.callback())));
        }
    },
    ht = { _: new WeakSet() },
    he = new WeakMap(),
    hi = new WeakMap(),
    hs = new WeakMap(),
    hn = new WeakMap(),
    ha = new WeakMap(),
    hr = new WeakMap(),
    ho = new WeakMap(),
    hl = new WeakMap(),
    hh = new WeakMap(),
    hd = new WeakMap(),
    hc = new WeakSet(),
    hu = class t {
        static get _keyboardManager() {
            return F(
                this,
                "_keyboardManager",
                new ev([
                    [["Escape", "mac+Escape"], t.prototype._hideDropdownFromKeyboard],
                    [[" ", "mac+ "], t.prototype._colorSelectFromKeyboard],
                    [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], t.prototype._moveToNext],
                    [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], t.prototype._moveToPrevious],
                    [["Home", "mac+Home"], t.prototype._moveToBeginning],
                    [["End", "mac+End"], t.prototype._moveToEnd],
                ]),
            );
        }
        constructor({ editor: t = null, uiManager: e = null }) {
            u(this, hc),
                p(this, he, null),
                p(this, hi, null),
                p(this, hs, void 0),
                p(this, hn, null),
                p(this, ha, !1),
                p(this, hr, !1),
                p(this, ho, null),
                p(this, hl, void 0),
                p(this, hh, null),
                p(this, hd, null),
                t ? (g(hr, this, !1), g(ho, this, t)) : g(hr, this, !0),
                g(hd, this, t?._uiManager || e),
                g(hl, this, f(hd, this)._eventBus),
                g(hs, this, t?.color?.toUpperCase() || f(hd, this)?.highlightColors.values().next().value || "#FFFF98"),
                hv._ ||
                    (hv._ = Object.freeze({
                        blue: "pdfjs-editor-colorpicker-blue",
                        green: "pdfjs-editor-colorpicker-green",
                        pink: "pdfjs-editor-colorpicker-pink",
                        red: "pdfjs-editor-colorpicker-red",
                        yellow: "pdfjs-editor-colorpicker-yellow",
                    }));
        }
        renderButton() {
            let t = g(he, this, document.createElement("button"));
            (t.className = "colorPicker"),
                (t.tabIndex = "0"),
                t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"),
                (t.ariaHasPopup = "true"),
                f(ho, this) && (t.ariaControls = `${f(ho, this).id}_colorpicker_dropdown`);
            let e = f(hd, this)._signal;
            t.addEventListener("click", d(hc, this, hm).bind(this), { signal: e }),
                t.addEventListener("keydown", d(hc, this, hf).bind(this), { signal: e });
            let i = g(hi, this, document.createElement("span"));
            return (
                (i.className = "swatch"),
                (i.ariaHidden = "true"),
                (i.style.backgroundColor = f(hs, this)),
                t.append(i),
                t
            );
        }
        renderMainDropdown() {
            let t = g(hn, this, d(hc, this, hp).call(this));
            return (t.ariaOrientation = "horizontal"), (t.ariaLabelledBy = "highlightColorPickerLabel"), t;
        }
        _colorSelectFromKeyboard(t) {
            if (t.target === f(he, this)) return void d(hc, this, hm).call(this, t);
            let e = t.target.getAttribute("data-color");
            e && d(hc, this, hg).call(this, e, t);
        }
        _moveToNext(t) {
            hb.call(d(hc, this))
                ? t.target === f(he, this)
                    ? f(hn, this).firstElementChild?.focus()
                    : t.target.nextSibling?.focus()
                : d(hc, this, hm).call(this, t);
        }
        _moveToPrevious(t) {
            if (t.target === f(hn, this)?.firstElementChild || t.target === f(he, this)) {
                hb.call(d(hc, this)) && this._hideDropdownFromKeyboard();
                return;
            }
            hb.call(d(hc, this)) || d(hc, this, hm).call(this, t), t.target.previousSibling?.focus();
        }
        _moveToBeginning(t) {
            hb.call(d(hc, this)) ? f(hn, this).firstElementChild?.focus() : d(hc, this, hm).call(this, t);
        }
        _moveToEnd(t) {
            hb.call(d(hc, this)) ? f(hn, this).lastElementChild?.focus() : d(hc, this, hm).call(this, t);
        }
        hideDropdown() {
            f(hn, this)?.classList.add("hidden"),
                (f(he, this).ariaExpanded = "false"),
                f(hh, this)?.abort(),
                g(hh, this, null);
        }
        _hideDropdownFromKeyboard() {
            if (!f(hr, this)) {
                if (!hb.call(d(hc, this))) return void f(ho, this)?.unselect();
                this.hideDropdown(), f(he, this).focus({ preventScroll: !0, focusVisible: f(ha, this) });
            }
        }
        updateColor(t) {
            if ((f(hi, this) && (f(hi, this).style.backgroundColor = t), !f(hn, this))) return;
            let e = f(hd, this).highlightColors.values();
            for (let i of f(hn, this).children) i.ariaSelected = e.next().value === t.toUpperCase();
        }
        destroy() {
            f(he, this)?.remove(), g(he, this, null), g(hi, this, null), f(hn, this)?.remove(), g(hn, this, null);
        }
    };
function hp() {
    let t = document.createElement("div"),
        e = f(hd, this)._signal;
    for (let [i, s] of (t.addEventListener("contextmenu", tc, { signal: e }),
    (t.className = "dropdown"),
    (t.role = "listbox"),
    (t.ariaMultiSelectable = "false"),
    (t.ariaOrientation = "vertical"),
    t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"),
    f(ho, this) && (t.id = `${f(ho, this).id}_colorpicker_dropdown`),
    f(hd, this).highlightColors)) {
        let n = document.createElement("button");
        (n.tabIndex = "0"),
            (n.role = "option"),
            n.setAttribute("data-color", s),
            (n.title = i),
            n.setAttribute("data-l10n-id", hv._[i]);
        let a = document.createElement("span");
        n.append(a),
            (a.className = "swatch"),
            (a.style.backgroundColor = s),
            (n.ariaSelected = s === f(hs, this)),
            n.addEventListener("click", d(hc, this, hg).bind(this, s), { signal: e }),
            t.append(n);
    }
    return t.addEventListener("keydown", d(hc, this, hf).bind(this), { signal: e }), t;
}
function hg(t, e) {
    e.stopPropagation(),
        f(hl, this).dispatch("switchannotationeditorparams", { source: this, type: x.HIGHLIGHT_COLOR, value: t }),
        this.updateColor(t);
}
function hf(t) {
    hu._keyboardManager.exec(this, t);
}
function hm(t) {
    if (hb.call(d(hc, this))) return void this.hideDropdown();
    if (
        (g(ha, this, 0 === t.detail),
        f(hh, this) ||
            (g(hh, this, new AbortController()),
            window.addEventListener("pointerdown", d(hc, this, hw).bind(this), {
                signal: f(hd, this).combinedSignal(f(hh, this)),
            })),
        (f(he, this).ariaExpanded = "true"),
        f(hn, this))
    )
        return void f(hn, this).classList.remove("hidden");
    let e = g(hn, this, d(hc, this, hp).call(this));
    f(he, this).append(e);
}
function hw(t) {
    f(hn, this)?.contains(t.target) || this.hideDropdown();
}
function hb() {
    return f(hn, this) && !f(hn, this).classList.contains("hidden");
}
var hv = { _: null },
    hA = new WeakMap(),
    hy = new WeakMap(),
    h_ = new WeakMap(),
    hx = class {
        constructor(t) {
            p(this, hA, null),
                p(this, hy, null),
                p(this, h_, null),
                g(hy, this, t),
                g(h_, this, t._uiManager),
                hk._ ||
                    (hk._ = Object.freeze({
                        freetext: "pdfjs-editor-color-picker-free-text-input",
                        ink: "pdfjs-editor-color-picker-ink-input",
                    }));
        }
        renderButton() {
            if (f(hA, this)) return f(hA, this);
            let { editorType: t, colorType: e, color: i } = f(hy, this),
                s = g(hA, this, document.createElement("input"));
            return (
                (s.type = "color"),
                (s.value = i || "#000000"),
                (s.className = "basicColorPicker"),
                (s.tabIndex = 0),
                s.setAttribute("data-l10n-id", hk._[t]),
                s.addEventListener(
                    "input",
                    () => {
                        f(h_, this).updateParams(e, s.value);
                    },
                    { signal: f(h_, this)._signal },
                ),
                s
            );
        }
        update(t) {
            f(hA, this) && (f(hA, this).value = t);
        }
        destroy() {
            f(hA, this)?.remove(), g(hA, this, null);
        }
        hideDropdown() {}
    },
    hk = { _: null };
function hM(t) {
    return Math.floor(255 * Math.max(0, Math.min(1, t)))
        .toString(16)
        .padStart(2, "0");
}
function hS(t) {
    return Math.max(0, Math.min(255, 255 * t));
}
var hE = class {
        static CMYK_G([t, e, i, s]) {
            return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
        }
        static G_CMYK([t]) {
            return ["CMYK", 0, 0, 0, 1 - t];
        }
        static G_RGB([t]) {
            return ["RGB", t, t, t];
        }
        static G_rgb([t]) {
            return [(t = hS(t)), t, t];
        }
        static G_HTML([t]) {
            let e = hM(t);
            return `#${e}${e}${e}`;
        }
        static RGB_G([t, e, i]) {
            return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
        }
        static RGB_rgb(t) {
            return t.map(hS);
        }
        static RGB_HTML(t) {
            return `#${t.map(hM).join("")}`;
        }
        static T_HTML() {
            return "#00000000";
        }
        static T_rgb() {
            return [null];
        }
        static CMYK_RGB([t, e, i, s]) {
            return ["RGB", 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)];
        }
        static CMYK_rgb([t, e, i, s]) {
            return [hS(1 - Math.min(1, t + s)), hS(1 - Math.min(1, i + s)), hS(1 - Math.min(1, e + s))];
        }
        static CMYK_HTML(t) {
            let e = this.CMYK_RGB(t).slice(1);
            return this.RGB_HTML(e);
        }
        static RGB_CMYK([t, e, i]) {
            let s = 1 - t,
                n = 1 - e,
                a = 1 - i;
            return ["CMYK", s, n, a, Math.min(s, n, a)];
        }
    },
    hC = class {
        create(t, e, i = !1) {
            if (t <= 0 || e <= 0) throw Error("Invalid SVG dimensions");
            let s = this._createSVG("svg:svg");
            return (
                s.setAttribute("version", "1.1"),
                i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)),
                s.setAttribute("preserveAspectRatio", "none"),
                s.setAttribute("viewBox", `0 0 ${t} ${e}`),
                s
            );
        }
        createElement(t) {
            if ("string" != typeof t) throw Error("Invalid SVG element type");
            return this._createSVG(t);
        }
        _createSVG(t) {
            D("Abstract method `_createSVG` called.");
        }
    },
    hT = class extends hC {
        _createSVG(t) {
            return document.createElementNS(ti, t);
        }
    },
    hP = new WeakSet(),
    hD = 60 * new Date().getTimezoneOffset() * 1e3,
    hI = class {
        static create(t) {
            switch (t.data.annotationType) {
                case M.LINK:
                    return new h$(t);
                case M.TEXT:
                    return new hG(t);
                case M.WIDGET:
                    switch (t.data.fieldType) {
                        case "Tx":
                            return new hq(t);
                        case "Btn":
                            if (t.data.radioButton) return new hY(t);
                            if (t.data.checkBox) return new hK(t);
                            return new hQ(t);
                        case "Ch":
                            return new hJ(t);
                        case "Sig":
                            return new hX(t);
                    }
                    return new hV(t);
                case M.POPUP:
                    return new h0(t);
                case M.FREETEXT:
                    return new dR(t);
                case M.LINE:
                    return new dN(t);
                case M.SQUARE:
                    return new dO(t);
                case M.CIRCLE:
                    return new dU(t);
                case M.POLYLINE:
                    return new dH(t);
                case M.CARET:
                    return new dz(t);
                case M.INK:
                    return new dX(t);
                case M.POLYGON:
                    return new dj(t);
                case M.HIGHLIGHT:
                    return new dY(t);
                case M.UNDERLINE:
                    return new dQ(t);
                case M.SQUIGGLY:
                    return new dJ(t);
                case M.STRIKEOUT:
                    return new dZ(t);
                case M.STAMP:
                    return new d0(t);
                case M.FILEATTACHMENT:
                    return new d3(t);
                default:
                    return new hB(t);
            }
        }
    },
    hL = new WeakMap(),
    hR = new WeakMap(),
    hF = new WeakMap(),
    hN = new WeakSet(),
    hB = class t {
        constructor(t, { isRenderable: e = !1, ignoreBorder: i = !1, createQuadrilaterals: s = !1 } = {}) {
            u(this, hN),
                p(this, hL, null),
                p(this, hR, !1),
                p(this, hF, null),
                (this.isRenderable = e),
                (this.data = t.data),
                (this.layer = t.layer),
                (this.linkService = t.linkService),
                (this.downloadManager = t.downloadManager),
                (this.imageResourcesPath = t.imageResourcesPath),
                (this.renderForms = t.renderForms),
                (this.svgFactory = t.svgFactory),
                (this.annotationStorage = t.annotationStorage),
                (this.enableComment = t.enableComment),
                (this.enableScripting = t.enableScripting),
                (this.hasJSActions = t.hasJSActions),
                (this._fieldObjects = t.fieldObjects),
                (this.parent = t.parent),
                (this.hasOwnCommentButton = !1),
                e && (this.contentElement = this.container = this._createContainer(i)),
                s && this._createQuadrilaterals();
        }
        static _hasPopupData({ contentsObj: t, richText: e }) {
            return !!(t?.str || e?.str);
        }
        get _isEditable() {
            return this.data.isEditable;
        }
        get hasPopupData() {
            return t._hasPopupData(this.data) || (this.enableComment && !!this.commentText);
        }
        get commentData() {
            let { data: t } = this,
                e = this.annotationStorage?.getEditor(t.id);
            return e ? e.getData() : t;
        }
        get hasCommentButton() {
            return this.enableComment && this.hasPopupElement;
        }
        get commentButtonPosition() {
            let t = this.annotationStorage?.getEditor(this.data.id);
            if (t) return t.commentButtonPositionInPage;
            let { quadPoints: e, inkLists: i, rect: s } = this.data,
                n = -1 / 0,
                a = -1 / 0;
            if (e?.length >= 8) {
                for (let t = 0; t < e.length; t += 8)
                    e[t + 1] > a ? ((a = e[t + 1]), (n = e[t + 2])) : e[t + 1] === a && (n = Math.max(n, e[t + 2]));
                return [n, a];
            }
            if (i?.length >= 1) {
                for (let t of i)
                    for (let e = 0, i = t.length; e < i; e += 2)
                        t[e + 1] > a ? ((a = t[e + 1]), (n = t[e])) : t[e + 1] === a && (n = Math.max(n, t[e]));
                if (n !== 1 / 0) return [n, a];
            }
            return s ? [s[2], s[3]] : null;
        }
        _normalizePoint(t) {
            let {
                page: { view: e },
                viewport: {
                    rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: a },
                },
            } = this.parent;
            return (t[1] = e[3] - t[1] + e[1]), (t[0] = (100 * (t[0] - n)) / i), (t[1] = (100 * (t[1] - a)) / s), t;
        }
        get commentText() {
            let { data: t } = this;
            return this.annotationStorage.getRawValue(`${y}${t.id}`)?.popup?.contents || t.contentsObj?.str || "";
        }
        set commentText(t) {
            let { data: e } = this,
                i = { deleted: !t, contents: t || "" };
            this.annotationStorage.updateEditor(e.id, { popup: i }) ||
                this.annotationStorage.setValue(`${y}${e.id}`, {
                    id: e.id,
                    annotationType: e.annotationType,
                    page: this.parent.page,
                    popup: i,
                    popupRef: e.popupRef,
                    modificationDate: new Date(),
                }),
                t || this.removePopup();
        }
        removePopup() {
            (f(hF, this)?.popup || this.popup)?.remove(), g(hF, this, (this.popup = null));
        }
        updateEdited(t) {
            if (!this.container) return;
            t.rect && (f(hL, this) || g(hL, this, { rect: this.data.rect.slice(0) }));
            let { rect: e, popup: i } = t;
            e && d(hN, this, hO).call(this, e);
            let s = f(hF, this)?.popup || this.popup;
            !s && i?.text && (this._createPopup(i), (s = f(hF, this).popup)),
                s && (s.updateEdited(t), i?.deleted && (s.remove(), g(hF, this, null), (this.popup = null)));
        }
        resetEdited() {
            f(hL, this) &&
                (d(hN, this, hO).call(this, f(hL, this).rect), f(hF, this)?.popup.resetEdited(), g(hL, this, null));
        }
        _createContainer(t) {
            let {
                    data: e,
                    parent: { page: i, viewport: s },
                } = this,
                n = document.createElement("section");
            n.setAttribute("data-annotation-id", e.id), this instanceof hV || this instanceof h$ || (n.tabIndex = 0);
            let { style: a } = n;
            if (
                ((a.zIndex = this.parent.zIndex),
                (this.parent.zIndex += 2),
                e.alternativeText && (n.title = e.alternativeText),
                e.noRotate && n.classList.add("norotate"),
                !e.rect || this instanceof h0)
            ) {
                let { rotation: t } = e;
                return e.hasOwnCanvas || 0 === t || this.setRotation(t, n), n;
            }
            let { width: r, height: o } = this;
            if (!t && e.borderStyle.width > 0) {
                a.borderWidth = `${e.borderStyle.width}px`;
                let t = e.borderStyle.horizontalCornerRadius,
                    i = e.borderStyle.verticalCornerRadius;
                switch (
                    (t > 0 || i > 0
                        ? (a.borderRadius = `calc(${t}px * var(--total-scale-factor)) / calc(${i}px * var(--total-scale-factor))`)
                        : this instanceof hY &&
                          (a.borderRadius = `calc(${r}px * var(--total-scale-factor)) / calc(${o}px * var(--total-scale-factor))`),
                    e.borderStyle.style)
                ) {
                    case 1:
                        a.borderStyle = "solid";
                        break;
                    case 2:
                        a.borderStyle = "dashed";
                        break;
                    case 3:
                        P("Unimplemented border style: beveled");
                        break;
                    case 4:
                        P("Unimplemented border style: inset");
                        break;
                    case 5:
                        a.borderBottomStyle = "solid";
                }
                let s = e.borderColor || null;
                s
                    ? (g(hR, this, !0), (a.borderColor = V.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2])))
                    : (a.borderWidth = 0);
            }
            let l = V.normalizeRect([
                    e.rect[0],
                    i.view[3] - e.rect[1] + i.view[1],
                    e.rect[2],
                    i.view[3] - e.rect[3] + i.view[1],
                ]),
                { pageWidth: h, pageHeight: d, pageX: c, pageY: u } = s.rawDims;
            (a.left = `${(100 * (l[0] - c)) / h}%`), (a.top = `${(100 * (l[1] - u)) / d}%`);
            let { rotation: p } = e;
            return (
                e.hasOwnCanvas || 0 === p
                    ? ((a.width = `${(100 * r) / h}%`), (a.height = `${(100 * o) / d}%`))
                    : this.setRotation(p, n),
                n
            );
        }
        setRotation(t, e = this.container) {
            if (!this.data.rect) return;
            let { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims,
                { width: n, height: a } = this;
            t % 180 != 0 && ([n, a] = [a, n]),
                (e.style.width = `${(100 * n) / i}%`),
                (e.style.height = `${(100 * a) / s}%`),
                e.setAttribute("data-main-rotation", (360 - t) % 360);
        }
        get _commonActions() {
            let t = (t, e, i) => {
                let s = i.detail[t],
                    n = s[0],
                    a = s.slice(1);
                (i.target.style[e] = hE[`${n}_HTML`](a)),
                    this.annotationStorage.setValue(this.data.id, { [e]: hE[`${n}_rgb`](a) });
            };
            return F(this, "_commonActions", {
                display: (t) => {
                    let { display: e } = t.detail,
                        i = e % 2 == 1;
                    (this.container.style.visibility = i ? "hidden" : "visible"),
                        this.annotationStorage.setValue(this.data.id, { noView: i, noPrint: 1 === e || 2 === e });
                },
                print: (t) => {
                    this.annotationStorage.setValue(this.data.id, { noPrint: !t.detail.print });
                },
                hidden: (t) => {
                    let { hidden: e } = t.detail;
                    (this.container.style.visibility = e ? "hidden" : "visible"),
                        this.annotationStorage.setValue(this.data.id, { noPrint: e, noView: e });
                },
                focus: (t) => {
                    setTimeout(() => t.target.focus({ preventScroll: !1 }), 0);
                },
                userName: (t) => {
                    t.target.title = t.detail.userName;
                },
                readonly: (t) => {
                    t.target.disabled = t.detail.readonly;
                },
                required: (t) => {
                    this._setRequired(t.target, t.detail.required);
                },
                bgColor: (e) => {
                    t("bgColor", "backgroundColor", e);
                },
                fillColor: (e) => {
                    t("fillColor", "backgroundColor", e);
                },
                fgColor: (e) => {
                    t("fgColor", "color", e);
                },
                textColor: (e) => {
                    t("textColor", "color", e);
                },
                borderColor: (e) => {
                    t("borderColor", "borderColor", e);
                },
                strokeColor: (e) => {
                    t("strokeColor", "borderColor", e);
                },
                rotation: (t) => {
                    let e = t.detail.rotation;
                    this.setRotation(e), this.annotationStorage.setValue(this.data.id, { rotation: e });
                },
            });
        }
        _dispatchEventFromSandbox(t, e) {
            let i = this._commonActions;
            for (let s of Object.keys(e.detail)) (t[s] || i[s])?.(e);
        }
        _setDefaultPropertiesFromJS(t) {
            if (!this.enableScripting) return;
            let e = this.annotationStorage.getRawValue(this.data.id);
            if (!e) return;
            let i = this._commonActions;
            for (let [s, n] of Object.entries(e)) {
                let a = i[s];
                a && (a({ detail: { [s]: n }, target: t }), delete e[s]);
            }
        }
        _createQuadrilaterals() {
            let t;
            if (!this.container) return;
            let { quadPoints: e } = this.data;
            if (!e) return;
            let [i, s, n, a] = this.data.rect.map((t) => Math.fround(t));
            if (8 === e.length) {
                let [t, r, o, l] = e.subarray(2, 6);
                if (n === t && a === r && i === o && s === l) return;
            }
            let { style: r } = this.container;
            if (f(hR, this)) {
                let { borderColor: e, borderWidth: i } = r;
                (r.borderWidth = 0),
                    (t = [
                        "url('data:image/svg+xml;utf8,",
                        '<svg xmlns="http://www.w3.org/2000/svg"',
                        ' preserveAspectRatio="none" viewBox="0 0 1 1">',
                        `<g fill="transparent" stroke="${e}" stroke-width="${i}">`,
                    ]),
                    this.container.classList.add("hasBorder");
            }
            let o = n - i,
                l = a - s,
                { svgFactory: h } = this,
                d = h.createElement("svg");
            d.classList.add("quadrilateralsContainer"),
                d.setAttribute("width", 0),
                d.setAttribute("height", 0),
                (d.role = "none");
            let c = h.createElement("defs");
            d.append(c);
            let u = h.createElement("clipPath"),
                p = `clippath_${this.data.id}`;
            u.setAttribute("id", p), u.setAttribute("clipPathUnits", "objectBoundingBox"), c.append(u);
            for (let s = 2, n = e.length; s < n; s += 8) {
                let n = e[s],
                    r = e[s + 1],
                    d = e[s + 2],
                    c = e[s + 3],
                    p = h.createElement("rect"),
                    g = (d - i) / o,
                    f = (a - r) / l,
                    m = (n - d) / o,
                    w = (r - c) / l;
                p.setAttribute("x", g),
                    p.setAttribute("y", f),
                    p.setAttribute("width", m),
                    p.setAttribute("height", w),
                    u.append(p),
                    t?.push(`<rect vector-effect="non-scaling-stroke" x="${g}" y="${f}" width="${m}" height="${w}"/>`);
            }
            f(hR, this) && (t.push("</g></svg>')"), (r.backgroundImage = t.join(""))),
                this.container.append(d),
                (this.container.style.clipPath = `url(#${p})`);
        }
        _createPopup(t = null) {
            let e,
                i,
                { data: s } = this;
            t ? ((e = { str: t.text }), (i = t.date)) : ((e = s.contentsObj), (i = s.modificationDate)),
                g(
                    hF,
                    this,
                    new h0({
                        data: {
                            color: s.color,
                            titleObj: s.titleObj,
                            modificationDate: i,
                            contentsObj: e,
                            richText: s.richText,
                            parentRect: s.rect,
                            borderStyle: 0,
                            id: `popup_${s.id}`,
                            rotation: s.rotation,
                            noRotate: !0,
                        },
                        linkService: this.linkService,
                        parent: this.parent,
                        elements: [this],
                    }),
                );
        }
        get hasPopupElement() {
            return !!(f(hF, this) || this.popup || this.data.popupRef);
        }
        get extraPopupElement() {
            return f(hF, this);
        }
        render() {
            D("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(t, e = null) {
            let i = [];
            if (this._fieldObjects) {
                let s = this._fieldObjects[t];
                if (s)
                    for (let { page: t, id: n, exportValues: a } of s) {
                        if (-1 === t || n === e) continue;
                        let s = "string" == typeof a ? a : null,
                            r = document.querySelector(`[data-element-id="${n}"]`);
                        if (r && !hP.has(r)) {
                            P(`_getElementsByName - element not allowed: ${n}`);
                            continue;
                        }
                        i.push({ id: n, exportValue: s, domElement: r });
                    }
                return i;
            }
            for (let s of document.getElementsByName(t)) {
                let { exportValue: t } = s,
                    n = s.getAttribute("data-element-id");
                n !== e && hP.has(s) && i.push({ id: n, exportValue: t, domElement: s });
            }
            return i;
        }
        show() {
            this.container && (this.container.hidden = !1), this.popup?.maybeShow();
        }
        hide() {
            this.container && (this.container.hidden = !0), this.popup?.forceHide();
        }
        getElementsToTriggerPopup() {
            return this.container;
        }
        addHighlightArea() {
            let t = this.getElementsToTriggerPopup();
            if (Array.isArray(t)) for (let e of t) e.classList.add("highlightArea");
            else t.classList.add("highlightArea");
        }
        _editOnDoubleClick() {
            if (!this._isEditable) return;
            let {
                annotationEditorType: t,
                data: { id: e },
            } = this;
            this.container.addEventListener("dblclick", () => {
                this.linkService.eventBus?.dispatch("switchannotationeditormode", {
                    source: this,
                    mode: t,
                    editId: e,
                    mustEnterInEditMode: !0,
                });
            });
        }
        get width() {
            return this.data.rect[2] - this.data.rect[0];
        }
        get height() {
            return this.data.rect[3] - this.data.rect[1];
        }
    };
function hO(t) {
    let {
        container: { style: e },
        data: { rect: i, rotation: s },
        parent: {
            viewport: {
                rawDims: { pageWidth: n, pageHeight: a, pageX: r, pageY: o },
            },
        },
    } = this;
    i?.splice(0, 4, ...t),
        (e.left = `${(100 * (t[0] - r)) / n}%`),
        (e.top = `${(100 * (a - t[3] + o)) / a}%`),
        0 === s
            ? ((e.width = `${(100 * (t[2] - t[0])) / n}%`), (e.height = `${(100 * (t[3] - t[1])) / a}%`))
            : this.setRotation(s);
}
var hW = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), (this.editor = t.editor);
        }
        render() {
            return (this.container.className = "editorAnnotation"), this.container;
        }
        createOrUpdatePopup() {
            let { editor: t } = this;
            t.hasComment && this._createPopup(t.comment);
        }
        get hasCommentButton() {
            return this.enableComment && this.editor.hasComment;
        }
        get commentButtonPosition() {
            return this.editor.commentButtonPositionInPage;
        }
        get commentText() {
            return this.editor.comment.text;
        }
        set commentText(t) {
            (this.editor.comment = t), t || this.removePopup();
        }
        get commentData() {
            return this.editor.getData();
        }
        remove() {
            this.parent.removeAnnotation(this.data.id),
                this.container.remove(),
                (this.container = null),
                this.removePopup();
        }
    },
    hU = new WeakSet(),
    h$ = class extends hB {
        constructor(t, e = null) {
            super(t, { isRenderable: !0, ignoreBorder: !!e?.ignoreBorder, createQuadrilaterals: !0 }),
                u(this, hU),
                (this.isTooltipOnly = t.data.isTooltipOnly);
        }
        render() {
            let { data: t, linkService: e } = this,
                i = document.createElement("a");
            i.setAttribute("data-element-id", t.id);
            let s = !1;
            return (
                t.url
                    ? (e.addLinkAttributes(i, t.url, t.newWindow), (s = !0))
                    : t.action
                      ? (this._bindNamedAction(i, t.action, t.overlaidText), (s = !0))
                      : t.attachment
                        ? (d(hU, this, hj).call(this, i, t.attachment, t.overlaidText, t.attachmentDest), (s = !0))
                        : t.setOCGState
                          ? (d(hU, this, hz).call(this, i, t.setOCGState, t.overlaidText), (s = !0))
                          : t.dest
                            ? (this._bindLink(i, t.dest, t.overlaidText), (s = !0))
                            : (t.actions &&
                                  (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) &&
                                  this.enableScripting &&
                                  this.hasJSActions &&
                                  (this._bindJSAction(i, t), (s = !0)),
                              t.resetForm
                                  ? (this._bindResetFormAction(i, t.resetForm), (s = !0))
                                  : this.isTooltipOnly && !s && (this._bindLink(i, ""), (s = !0))),
                this.container.classList.add("linkAnnotation"),
                s && ((this.contentElement = i), this.container.append(i)),
                this.container
            );
        }
        _bindLink(t, e, i = "") {
            (t.href = this.linkService.getDestinationHash(e)),
                (t.onclick = () => (e && this.linkService.goToDestination(e), !1)),
                (e || "" === e) && d(hU, this, hH).call(this),
                i && (t.title = i);
        }
        _bindNamedAction(t, e, i = "") {
            (t.href = this.linkService.getAnchorUrl("")),
                (t.onclick = () => (this.linkService.executeNamedAction(e), !1)),
                i && (t.title = i),
                d(hU, this, hH).call(this);
        }
        _bindJSAction(t, e) {
            t.href = this.linkService.getAnchorUrl("");
            let i = new Map([
                ["Action", "onclick"],
                ["Mouse Up", "onmouseup"],
                ["Mouse Down", "onmousedown"],
            ]);
            for (let s of Object.keys(e.actions)) {
                let n = i.get(s);
                n &&
                    (t[n] = () => (
                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: { id: e.id, name: s },
                        }),
                        !1
                    ));
            }
            e.overlaidText && (t.title = e.overlaidText),
                t.onclick || (t.onclick = () => !1),
                d(hU, this, hH).call(this);
        }
        _bindResetFormAction(t, e) {
            let i = t.onclick;
            if ((i || (t.href = this.linkService.getAnchorUrl("")), d(hU, this, hH).call(this), !this._fieldObjects)) {
                P(
                    '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.',
                ),
                    i || (t.onclick = () => !1);
                return;
            }
            t.onclick = () => {
                i?.();
                let { fields: t, refs: s, include: n } = e,
                    a = [];
                if (0 !== t.length || 0 !== s.length) {
                    let e = new Set(s);
                    for (let i of t) for (let { id: t } of this._fieldObjects[i] || []) e.add(t);
                    for (let t of Object.values(this._fieldObjects)) for (let i of t) e.has(i.id) === n && a.push(i);
                } else for (let t of Object.values(this._fieldObjects)) a.push(...t);
                let r = this.annotationStorage,
                    o = [];
                for (let t of a) {
                    let { id: e } = t;
                    switch ((o.push(e), t.type)) {
                        case "text": {
                            let i = t.defaultValue || "";
                            r.setValue(e, { value: i });
                            break;
                        }
                        case "checkbox":
                        case "radiobutton": {
                            let i = t.defaultValue === t.exportValues;
                            r.setValue(e, { value: i });
                            break;
                        }
                        case "combobox":
                        case "listbox": {
                            let i = t.defaultValue || "";
                            r.setValue(e, { value: i });
                            break;
                        }
                        default:
                            continue;
                    }
                    let i = document.querySelector(`[data-element-id="${e}"]`);
                    if (i) {
                        if (!hP.has(i)) {
                            P(`_bindResetFormAction - element not allowed: ${e}`);
                            continue;
                        }
                        i.dispatchEvent(new Event("resetform"));
                    }
                }
                return (
                    this.enableScripting &&
                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: { id: "app", ids: o, name: "ResetForm" },
                        }),
                    !1
                );
            };
        }
    };
function hH() {
    this.container.setAttribute("data-internal-link", "");
}
function hj(t, e, i = "", s = null) {
    (t.href = this.linkService.getAnchorUrl("")),
        e.description ? (t.title = e.description) : i && (t.title = i),
        (t.onclick = () => (this.downloadManager?.openOrDownloadData(e.content, e.filename, s), !1)),
        d(hU, this, hH).call(this);
}
function hz(t, e, i = "") {
    (t.href = this.linkService.getAnchorUrl("")),
        (t.onclick = () => (this.linkService.executeSetOCGState(e), !1)),
        i && (t.title = i),
        d(hU, this, hH).call(this);
}
var hG = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0 });
        }
        render() {
            this.container.classList.add("textAnnotation");
            let t = document.createElement("img");
            return (
                (t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg"),
                t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"),
                t.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name })),
                !this.data.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.append(t),
                this.container
            );
        }
    },
    hV = class extends hB {
        render() {
            return this.container;
        }
        showElementAndHideCanvas(t) {
            this.data.hasOwnCanvas &&
                (t.previousSibling?.nodeName === "CANVAS" && (t.previousSibling.hidden = !0), (t.hidden = !1));
        }
        _getKeyModifier(t) {
            return z.platform.isMac ? t.metaKey : t.ctrlKey;
        }
        _setEventListener(t, e, i, s, n) {
            i.includes("mouse")
                ? t.addEventListener(i, (t) => {
                      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                              id: this.data.id,
                              name: s,
                              value: n(t),
                              shift: t.shiftKey,
                              modifier: this._getKeyModifier(t),
                          },
                      });
                  })
                : t.addEventListener(i, (t) => {
                      if ("blur" === i) {
                          if (!e.focused || !t.relatedTarget) return;
                          e.focused = !1;
                      } else if ("focus" === i) {
                          if (e.focused) return;
                          e.focused = !0;
                      }
                      n &&
                          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                              source: this,
                              detail: { id: this.data.id, name: s, value: n(t) },
                          });
                  });
        }
        _setEventListeners(t, e, i, s) {
            for (let [n, a] of i)
                ("Action" === a || this.data.actions?.[a]) &&
                    (("Focus" === a || "Blur" === a) && (e ||= { focused: !1 }),
                    this._setEventListener(t, e, n, a, s),
                    "Focus" !== a || this.data.actions?.Blur
                        ? "Blur" !== a ||
                          this.data.actions?.Focus ||
                          this._setEventListener(t, e, "focus", "Focus", null)
                        : this._setEventListener(t, e, "blur", "Blur", null));
        }
        _setBackgroundColor(t) {
            let e = this.data.backgroundColor || null;
            t.style.backgroundColor = null === e ? "transparent" : V.makeHexColor(e[0], e[1], e[2]);
        }
        _setTextStyle(t) {
            let e,
                { fontColor: i } = this.data.defaultAppearanceData,
                s = this.data.defaultAppearanceData.fontSize || 9,
                n = t.style,
                a = (t) => Math.round(10 * t) / 10;
            if (this.data.multiLine) {
                let t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2),
                    i = t / (Math.round(t / (1.35 * s)) || 1);
                e = Math.min(s, a(i / 1.35));
            } else e = Math.min(s, a(Math.abs(this.data.rect[3] - this.data.rect[1] - 2) / 1.35));
            (n.fontSize = `calc(${e}px * var(--total-scale-factor))`),
                (n.color = V.makeHexColor(i[0], i[1], i[2])),
                null !== this.data.textAlignment &&
                    (n.textAlign = ["left", "center", "right"][this.data.textAlignment]);
        }
        _setRequired(t, e) {
            e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
        }
    },
    hq = class extends hV {
        constructor(t) {
            const e = t.renderForms || t.data.hasOwnCanvas || (!t.data.hasAppearance && !!t.data.fieldValue);
            super(t, { isRenderable: e });
        }
        setPropertyOnSiblings(t, e, i, s) {
            let n = this.annotationStorage;
            for (let a of this._getElementsByName(t.name, t.id))
                a.domElement && (a.domElement[e] = i), n.setValue(a.id, { [s]: i });
        }
        render() {
            let t = this.annotationStorage,
                e = this.data.id;
            this.container.classList.add("textWidgetAnnotation");
            let i = null;
            if (this.renderForms) {
                let s = t.getValue(e, { value: this.data.fieldValue }),
                    n = s.value || "",
                    a = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
                a && n.length > a && (n = n.slice(0, a));
                let r = s.formattedValue || this.data.textContent?.join("\n") || null;
                r && this.data.comb && (r = r.replaceAll(/\s+/g, ""));
                let o = { userValue: n, formattedValue: r, lastCommittedValue: null, commitKey: 1, focused: !1 };
                this.data.multiLine
                    ? (((i = document.createElement("textarea")).textContent = r ?? n),
                      this.data.doNotScroll && (i.style.overflowY = "hidden"))
                    : (((i = document.createElement("input")).type = this.data.password ? "password" : "text"),
                      i.setAttribute("value", r ?? n),
                      this.data.doNotScroll && (i.style.overflowX = "hidden")),
                    this.data.hasOwnCanvas && (i.hidden = !0),
                    hP.add(i),
                    (this.contentElement = i),
                    i.setAttribute("data-element-id", e),
                    (i.disabled = this.data.readOnly),
                    (i.name = this.data.fieldName),
                    (i.tabIndex = 0);
                let { datetimeFormat: l, datetimeType: h, timeStep: d } = this.data,
                    c = !!h && this.enableScripting;
                l && (i.title = l),
                    this._setRequired(i, this.data.required),
                    a && (i.maxLength = a),
                    i.addEventListener("input", (s) => {
                        t.setValue(e, { value: s.target.value }),
                            this.setPropertyOnSiblings(i, "value", s.target.value, "value"),
                            (o.formattedValue = null);
                    }),
                    i.addEventListener("resetform", (t) => {
                        let e = this.data.defaultFieldValue ?? "";
                        (i.value = o.userValue = e), (o.formattedValue = null);
                    });
                let u = (t) => {
                    let { formattedValue: e } = o;
                    null != e && (t.target.value = e), (t.target.scrollLeft = 0);
                };
                if (this.enableScripting && this.hasJSActions) {
                    i.addEventListener("focus", (t) => {
                        if (o.focused) return;
                        let { target: e } = t;
                        if ((c && ((e.type = h), d && (e.step = d)), o.userValue)) {
                            let t = o.userValue;
                            if (c)
                                if ("time" === h) {
                                    let i = new Date(t);
                                    e.value = [i.getHours(), i.getMinutes(), i.getSeconds()]
                                        .map((t) => t.toString().padStart(2, "0"))
                                        .join(":");
                                } else e.value = new Date(t - hD).toISOString().split("date" === h ? "T" : ".", 1)[0];
                            else e.value = t;
                        }
                        (o.lastCommittedValue = e.value),
                            (o.commitKey = 1),
                            this.data.actions?.Focus || (o.focused = !0);
                    }),
                        i.addEventListener("updatefromsandbox", (i) => {
                            this.showElementAndHideCanvas(i.target),
                                this._dispatchEventFromSandbox(
                                    {
                                        value(i) {
                                            (o.userValue = i.detail.value ?? ""),
                                                c || t.setValue(e, { value: o.userValue.toString() }),
                                                (i.target.value = o.userValue);
                                        },
                                        formattedValue(i) {
                                            let { formattedValue: s } = i.detail;
                                            (o.formattedValue = s),
                                                null != s &&
                                                    i.target !== document.activeElement &&
                                                    (i.target.value = s);
                                            let n = { formattedValue: s };
                                            c && (n.value = s), t.setValue(e, n);
                                        },
                                        selRange(t) {
                                            t.target.setSelectionRange(...t.detail.selRange);
                                        },
                                        charLimit: (i) => {
                                            let { charLimit: s } = i.detail,
                                                { target: n } = i;
                                            if (0 === s) return void n.removeAttribute("maxLength");
                                            n.setAttribute("maxLength", s);
                                            let a = o.userValue;
                                            a &&
                                                !(a.length <= s) &&
                                                ((n.value = o.userValue = a = a.slice(0, s)),
                                                t.setValue(e, { value: a }),
                                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                    source: this,
                                                    detail: {
                                                        id: e,
                                                        name: "Keystroke",
                                                        value: a,
                                                        willCommit: !0,
                                                        commitKey: 1,
                                                        selStart: n.selectionStart,
                                                        selEnd: n.selectionEnd,
                                                    },
                                                }));
                                        },
                                    },
                                    i,
                                );
                        }),
                        i.addEventListener("keydown", (t) => {
                            o.commitKey = 1;
                            let i = -1;
                            if (
                                ("Escape" === t.key
                                    ? (i = 0)
                                    : "Enter" !== t.key || this.data.multiLine
                                      ? "Tab" === t.key && (o.commitKey = 3)
                                      : (i = 2),
                                -1 === i)
                            )
                                return;
                            let { value: s } = t.target;
                            o.lastCommittedValue !== s &&
                                ((o.lastCommittedValue = s),
                                (o.userValue = s),
                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: e,
                                        name: "Keystroke",
                                        value: s,
                                        willCommit: !0,
                                        commitKey: i,
                                        selStart: t.target.selectionStart,
                                        selEnd: t.target.selectionEnd,
                                    },
                                }));
                        });
                    let s = u;
                    (u = null),
                        i.addEventListener("blur", (t) => {
                            if (!o.focused || !t.relatedTarget) return;
                            this.data.actions?.Blur || (o.focused = !1);
                            let { target: i } = t,
                                { value: n } = i;
                            if (c) {
                                if (n && "time" === h) {
                                    let t = n.split(":").map((t) => parseInt(t, 10));
                                    (n = new Date(2e3, 0, 1, t[0], t[1], t[2] || 0).valueOf()), (i.step = "");
                                } else n.includes("T") || (n = `${n}T00:00`), (n = new Date(n).valueOf());
                                i.type = "text";
                            }
                            (o.userValue = n),
                                o.lastCommittedValue !== n &&
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e,
                                            name: "Keystroke",
                                            value: n,
                                            willCommit: !0,
                                            commitKey: o.commitKey,
                                            selStart: t.target.selectionStart,
                                            selEnd: t.target.selectionEnd,
                                        },
                                    }),
                                s(t);
                        }),
                        this.data.actions?.Keystroke &&
                            i.addEventListener("beforeinput", (t) => {
                                o.lastCommittedValue = null;
                                let { data: i, target: s } = t,
                                    { value: n, selectionStart: a, selectionEnd: r } = s,
                                    l = a,
                                    h = r;
                                switch (t.inputType) {
                                    case "deleteWordBackward": {
                                        let t = n.substring(0, a).match(/\w*[^\w]*$/);
                                        t && (l -= t[0].length);
                                        break;
                                    }
                                    case "deleteWordForward": {
                                        let t = n.substring(a).match(/^[^\w]*\w*/);
                                        t && (h += t[0].length);
                                        break;
                                    }
                                    case "deleteContentBackward":
                                        a === r && (l -= 1);
                                        break;
                                    case "deleteContentForward":
                                        a === r && (h += 1);
                                }
                                t.preventDefault(),
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e,
                                            name: "Keystroke",
                                            value: n,
                                            change: i || "",
                                            willCommit: !1,
                                            selStart: l,
                                            selEnd: h,
                                        },
                                    });
                            }),
                        this._setEventListeners(
                            i,
                            o,
                            [
                                ["focus", "Focus"],
                                ["blur", "Blur"],
                                ["mousedown", "Mouse Down"],
                                ["mouseenter", "Mouse Enter"],
                                ["mouseleave", "Mouse Exit"],
                                ["mouseup", "Mouse Up"],
                            ],
                            (t) => t.target.value,
                        );
                }
                if ((u && i.addEventListener("blur", u), this.data.comb)) {
                    let t = (this.data.rect[2] - this.data.rect[0]) / a;
                    i.classList.add("comb"), (i.style.letterSpacing = `calc(${t}px * var(--total-scale-factor) - 1ch)`);
                }
            } else
                ((i = document.createElement("div")).textContent = this.data.fieldValue),
                    (i.style.verticalAlign = "middle"),
                    (i.style.display = "table-cell"),
                    this.data.hasOwnCanvas && (i.hidden = !0);
            return (
                this._setTextStyle(i),
                this._setBackgroundColor(i),
                this._setDefaultPropertiesFromJS(i),
                this.container.append(i),
                this.container
            );
        }
    },
    hX = class extends hV {
        constructor(t) {
            super(t, { isRenderable: !!t.data.hasOwnCanvas });
        }
    },
    hK = class extends hV {
        constructor(t) {
            super(t, { isRenderable: t.renderForms });
        }
        render() {
            let t = this.annotationStorage,
                e = this.data,
                i = e.id,
                s = t.getValue(i, { value: e.exportValue === e.fieldValue }).value;
            "string" == typeof s && ((s = "Off" !== s), t.setValue(i, { value: s })),
                this.container.classList.add("buttonWidgetAnnotation", "checkBox");
            let n = document.createElement("input");
            return (
                hP.add(n),
                n.setAttribute("data-element-id", i),
                (n.disabled = e.readOnly),
                this._setRequired(n, this.data.required),
                (n.type = "checkbox"),
                (n.name = e.fieldName),
                s && n.setAttribute("checked", !0),
                n.setAttribute("exportValue", e.exportValue),
                (n.tabIndex = 0),
                n.addEventListener("change", (s) => {
                    let { name: n, checked: a } = s.target;
                    for (let s of this._getElementsByName(n, i)) {
                        let i = a && s.exportValue === e.exportValue;
                        s.domElement && (s.domElement.checked = i), t.setValue(s.id, { value: i });
                    }
                    t.setValue(i, { value: a });
                }),
                n.addEventListener("resetform", (t) => {
                    let i = e.defaultFieldValue || "Off";
                    t.target.checked = i === e.exportValue;
                }),
                this.enableScripting &&
                    this.hasJSActions &&
                    (n.addEventListener("updatefromsandbox", (e) => {
                        this._dispatchEventFromSandbox(
                            {
                                value(e) {
                                    (e.target.checked = "Off" !== e.detail.value),
                                        t.setValue(i, { value: e.target.checked });
                                },
                            },
                            e,
                        );
                    }),
                    this._setEventListeners(
                        n,
                        null,
                        [
                            ["change", "Validate"],
                            ["change", "Action"],
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                        ],
                        (t) => t.target.checked,
                    )),
                this._setBackgroundColor(n),
                this._setDefaultPropertiesFromJS(n),
                this.container.append(n),
                this.container
            );
        }
    },
    hY = class extends hV {
        constructor(t) {
            super(t, { isRenderable: t.renderForms });
        }
        render() {
            this.container.classList.add("buttonWidgetAnnotation", "radioButton");
            let t = this.annotationStorage,
                e = this.data,
                i = e.id,
                s = t.getValue(i, { value: e.fieldValue === e.buttonValue }).value;
            if (("string" == typeof s && ((s = s !== e.buttonValue), t.setValue(i, { value: s })), s))
                for (let s of this._getElementsByName(e.fieldName, i)) t.setValue(s.id, { value: !1 });
            let n = document.createElement("input");
            if (
                (hP.add(n),
                n.setAttribute("data-element-id", i),
                (n.disabled = e.readOnly),
                this._setRequired(n, this.data.required),
                (n.type = "radio"),
                (n.name = e.fieldName),
                s && n.setAttribute("checked", !0),
                (n.tabIndex = 0),
                n.addEventListener("change", (e) => {
                    let { name: s, checked: n } = e.target;
                    for (let e of this._getElementsByName(s, i)) t.setValue(e.id, { value: !1 });
                    t.setValue(i, { value: n });
                }),
                n.addEventListener("resetform", (t) => {
                    let i = e.defaultFieldValue;
                    t.target.checked = null != i && i === e.buttonValue;
                }),
                this.enableScripting && this.hasJSActions)
            ) {
                let s = e.buttonValue;
                n.addEventListener("updatefromsandbox", (e) => {
                    this._dispatchEventFromSandbox(
                        {
                            value: (e) => {
                                let n = s === e.detail.value;
                                for (let s of this._getElementsByName(e.target.name)) {
                                    let e = n && s.id === i;
                                    s.domElement && (s.domElement.checked = e), t.setValue(s.id, { value: e });
                                }
                            },
                        },
                        e,
                    );
                }),
                    this._setEventListeners(
                        n,
                        null,
                        [
                            ["change", "Validate"],
                            ["change", "Action"],
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                        ],
                        (t) => t.target.checked,
                    );
            }
            return (
                this._setBackgroundColor(n),
                this._setDefaultPropertiesFromJS(n),
                this.container.append(n),
                this.container
            );
        }
    },
    hQ = class extends h$ {
        constructor(t) {
            super(t, { ignoreBorder: t.data.hasAppearance });
        }
        render() {
            let t = super.render();
            t.classList.add("buttonWidgetAnnotation", "pushButton");
            let e = t.lastChild;
            return (
                this.enableScripting &&
                    this.hasJSActions &&
                    e &&
                    (this._setDefaultPropertiesFromJS(e),
                    e.addEventListener("updatefromsandbox", (t) => {
                        this._dispatchEventFromSandbox({}, t);
                    })),
                t
            );
        }
    },
    hJ = class extends hV {
        constructor(t) {
            super(t, { isRenderable: t.renderForms });
        }
        render() {
            this.container.classList.add("choiceWidgetAnnotation");
            let t = this.annotationStorage,
                e = this.data.id,
                i = t.getValue(e, { value: this.data.fieldValue }),
                s = document.createElement("select");
            hP.add(s),
                s.setAttribute("data-element-id", e),
                (s.disabled = this.data.readOnly),
                this._setRequired(s, this.data.required),
                (s.name = this.data.fieldName),
                (s.tabIndex = 0);
            let n = this.data.combo && this.data.options.length > 0;
            for (let t of (!this.data.combo &&
                ((s.size = this.data.options.length), this.data.multiSelect && (s.multiple = !0)),
            s.addEventListener("resetform", (t) => {
                let e = this.data.defaultFieldValue;
                for (let t of s.options) t.selected = t.value === e;
            }),
            this.data.options)) {
                let e = document.createElement("option");
                (e.textContent = t.displayValue),
                    (e.value = t.exportValue),
                    i.value.includes(t.exportValue) && (e.setAttribute("selected", !0), (n = !1)),
                    s.append(e);
            }
            let a = null;
            if (n) {
                let t = document.createElement("option");
                (t.value = " "),
                    t.setAttribute("hidden", !0),
                    t.setAttribute("selected", !0),
                    s.prepend(t),
                    (a = () => {
                        t.remove(), s.removeEventListener("input", a), (a = null);
                    }),
                    s.addEventListener("input", a);
            }
            let r = (t) => {
                    let e = t ? "value" : "textContent",
                        { options: i, multiple: n } = s;
                    return n
                        ? Array.prototype.filter.call(i, (t) => t.selected).map((t) => t[e])
                        : -1 === i.selectedIndex
                          ? null
                          : i[i.selectedIndex][e];
                },
                o = r(!1),
                l = (t) => {
                    let e = t.target.options;
                    return Array.prototype.map.call(e, (t) => ({ displayValue: t.textContent, exportValue: t.value }));
                };
            return (
                this.enableScripting && this.hasJSActions
                    ? (s.addEventListener("updatefromsandbox", (i) => {
                          this._dispatchEventFromSandbox(
                              {
                                  value(i) {
                                      a?.();
                                      let n = i.detail.value,
                                          l = new Set(Array.isArray(n) ? n : [n]);
                                      for (let t of s.options) t.selected = l.has(t.value);
                                      t.setValue(e, { value: r(!0) }), (o = r(!1));
                                  },
                                  multipleSelection(t) {
                                      s.multiple = !0;
                                  },
                                  remove(i) {
                                      let n = s.options,
                                          a = i.detail.remove;
                                      (n[a].selected = !1),
                                          s.remove(a),
                                          n.length > 0 &&
                                              -1 === Array.prototype.findIndex.call(n, (t) => t.selected) &&
                                              (n[0].selected = !0),
                                          t.setValue(e, { value: r(!0), items: l(i) }),
                                          (o = r(!1));
                                  },
                                  clear(i) {
                                      for (; 0 !== s.length; ) s.remove(0);
                                      t.setValue(e, { value: null, items: [] }), (o = r(!1));
                                  },
                                  insert(i) {
                                      let { index: n, displayValue: a, exportValue: h } = i.detail.insert,
                                          d = s.children[n],
                                          c = document.createElement("option");
                                      (c.textContent = a),
                                          (c.value = h),
                                          d ? d.before(c) : s.append(c),
                                          t.setValue(e, { value: r(!0), items: l(i) }),
                                          (o = r(!1));
                                  },
                                  items(i) {
                                      let { items: n } = i.detail;
                                      for (; 0 !== s.length; ) s.remove(0);
                                      for (let t of n) {
                                          let { displayValue: e, exportValue: i } = t,
                                              n = document.createElement("option");
                                          (n.textContent = e), (n.value = i), s.append(n);
                                      }
                                      s.options.length > 0 && (s.options[0].selected = !0),
                                          t.setValue(e, { value: r(!0), items: l(i) }),
                                          (o = r(!1));
                                  },
                                  indices(i) {
                                      let s = new Set(i.detail.indices);
                                      for (let t of i.target.options) t.selected = s.has(t.index);
                                      t.setValue(e, { value: r(!0) }), (o = r(!1));
                                  },
                                  editable(t) {
                                      t.target.disabled = !t.detail.editable;
                                  },
                              },
                              i,
                          );
                      }),
                      s.addEventListener("input", (i) => {
                          let s = r(!0),
                              n = r(!1);
                          t.setValue(e, { value: s }),
                              i.preventDefault(),
                              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                  source: this,
                                  detail: {
                                      id: e,
                                      name: "Keystroke",
                                      value: o,
                                      change: n,
                                      changeEx: s,
                                      willCommit: !1,
                                      commitKey: 1,
                                      keyDown: !1,
                                  },
                              });
                      }),
                      this._setEventListeners(
                          s,
                          null,
                          [
                              ["focus", "Focus"],
                              ["blur", "Blur"],
                              ["mousedown", "Mouse Down"],
                              ["mouseenter", "Mouse Enter"],
                              ["mouseleave", "Mouse Exit"],
                              ["mouseup", "Mouse Up"],
                              ["input", "Action"],
                              ["input", "Validate"],
                          ],
                          (t) => t.target.value,
                      ))
                    : s.addEventListener("input", function (i) {
                          t.setValue(e, { value: r(!0) });
                      }),
                this.data.combo && this._setTextStyle(s),
                this._setBackgroundColor(s),
                this._setDefaultPropertiesFromJS(s),
                this.container.append(s),
                this.container
            );
        }
    },
    hZ = new WeakSet(),
    h0 = class extends hB {
        constructor(t) {
            const { data: e, elements: i, parent: s } = t,
                n = !!s._commentManager;
            if (
                (super(t, { isRenderable: !n && hB._hasPopupData(e) }),
                u(this, hZ),
                (this.elements = i),
                n && hB._hasPopupData(e))
            ) {
                const t = (this.popup = d(hZ, this, h1).call(this));
                for (const e of i) e.popup = t;
            } else this.popup = null;
        }
        render() {
            let { container: t } = this;
            t.classList.add("popupAnnotation"), (t.role = "comment");
            let e = (this.popup = d(hZ, this, h1).call(this)),
                i = [];
            for (let t of this.elements)
                (t.popup = e), (t.container.ariaHasPopup = "dialog"), i.push(t.data.id), t.addHighlightArea();
            return this.container.setAttribute("aria-controls", i.map((t) => `${J}${t}`).join(",")), this.container;
        }
    };
function h1() {
    return new dA({
        container: this.container,
        color: this.data.color,
        titleObj: this.data.titleObj,
        modificationDate: this.data.modificationDate || this.data.creationDate,
        contentsObj: this.data.contentsObj,
        richText: this.data.richText,
        rect: this.data.rect,
        parentRect: this.data.parentRect || null,
        parent: this.parent,
        elements: this.elements,
        open: this.data.open,
        commentManager: this.parent._commentManager,
    });
}
var h2 = new WeakMap(),
    h3 = new WeakMap(),
    h5 = new WeakMap(),
    h4 = new WeakMap(),
    h6 = new WeakMap(),
    h8 = new WeakMap(),
    h7 = new WeakMap(),
    h9 = new WeakMap(),
    dt = new WeakMap(),
    de = new WeakMap(),
    di = new WeakMap(),
    ds = new WeakMap(),
    dn = new WeakMap(),
    da = new WeakMap(),
    dr = new WeakMap(),
    dl = new WeakMap(),
    dh = new WeakMap(),
    dd = new WeakMap(),
    dc = new WeakMap(),
    du = new WeakMap(),
    dp = new WeakMap(),
    dg = new WeakMap(),
    df = new WeakMap(),
    dm = new WeakMap(),
    dw = new WeakMap(),
    db = new WeakMap(),
    dv = new WeakSet(),
    dA = class {
        constructor({
            container: t,
            color: e,
            elements: i,
            titleObj: s,
            modificationDate: n,
            contentsObj: a,
            richText: r,
            parent: o,
            rect: l,
            parentRect: h,
            open: c,
            commentManager: m = null,
        }) {
            u(this, dv),
                p(this, h2, null),
                p(this, h3, d(dv, this, dT).bind(this)),
                p(this, h5, d(dv, this, dL).bind(this)),
                p(this, h4, d(dv, this, dI).bind(this)),
                p(this, h6, d(dv, this, dD).bind(this)),
                p(this, h8, null),
                p(this, h7, null),
                p(this, h9, null),
                p(this, dt, null),
                p(this, de, null),
                p(this, di, null),
                p(this, ds, null),
                p(this, dn, !1),
                p(this, da, null),
                p(this, dr, null),
                p(this, dl, null),
                p(this, dh, null),
                p(this, dd, null),
                p(this, dc, null),
                p(this, du, null),
                p(this, dp, null),
                p(this, dg, null),
                p(this, df, null),
                p(this, dm, !1),
                p(this, dw, null),
                p(this, db, null),
                g(h7, this, t),
                g(dg, this, s),
                g(h9, this, a),
                g(dp, this, r),
                g(di, this, o),
                g(h8, this, e),
                g(du, this, l),
                g(ds, this, h),
                g(de, this, i),
                g(h2, this, m),
                g(dw, this, i[0]),
                g(dt, this, tp.toDateObject(n)),
                (this.trigger = i.flatMap((t) => t.getElementsToTriggerPopup())),
                !m && (d(dv, this, dy).call(this), (f(h7, this).hidden = !0), c && d(dv, this, dD).call(this));
        }
        renderCommentButton() {
            if (f(dh, this)) {
                f(dh, this).parentNode || f(dw, this).container.after(f(dh, this));
                return;
            }
            if ((f(dd, this) || d(dv, this, d_).call(this), !f(dd, this))) return;
            let { signal: t } = g(dr, this, new AbortController()),
                e = f(dw, this).hasOwnCommentButton,
                i = () => {
                    f(h2, this).toggleCommentPopup(this, !0, void 0, !e);
                },
                s = () => {
                    f(h2, this).toggleCommentPopup(this, !1, !0, !e);
                },
                n = () => {
                    f(h2, this).toggleCommentPopup(this, !1, !1);
                };
            if (e)
                for (let e of (g(dh, this, f(dw, this).container), this.trigger))
                    (e.ariaHasPopup = "dialog"),
                        (e.ariaControls = "commentPopup"),
                        e.addEventListener("keydown", f(h3, this), { signal: t }),
                        e.addEventListener("click", i, { signal: t }),
                        e.addEventListener("pointerenter", s, { signal: t }),
                        e.addEventListener("pointerleave", n, { signal: t }),
                        e.classList.add("popupTriggerArea");
            else {
                let e = g(dh, this, document.createElement("button"));
                e.className = "annotationCommentButton";
                let a = f(dw, this).container;
                (e.style.zIndex = a.style.zIndex + 1),
                    (e.tabIndex = 0),
                    (e.ariaHasPopup = "dialog"),
                    (e.ariaControls = "commentPopup"),
                    e.setAttribute("data-l10n-id", "pdfjs-show-comment-button"),
                    d(dv, this, dk).call(this),
                    d(dv, this, dx).call(this),
                    e.addEventListener("keydown", f(h3, this), { signal: t }),
                    e.addEventListener("click", i, { signal: t }),
                    e.addEventListener("pointerenter", s, { signal: t }),
                    e.addEventListener("pointerleave", n, { signal: t }),
                    a.after(e);
            }
        }
        get commentButtonColor() {
            let { color: t, opacity: e } = f(dw, this).commentData;
            return t ? f(di, this)._commentManager.makeCommentColor(t, e) : null;
        }
        focusCommentButton() {
            setTimeout(() => {
                f(dh, this)?.focus();
            }, 0);
        }
        getData() {
            let { richText: t, color: e, opacity: i, creationDate: s, modificationDate: n } = f(dw, this).commentData;
            return {
                contentsObj: { str: this.comment },
                richText: t,
                color: e,
                opacity: i,
                creationDate: s,
                modificationDate: n,
            };
        }
        get elementBeforePopup() {
            return f(dh, this);
        }
        get comment() {
            return f(db, this) || g(db, this, f(dw, this).commentText), f(db, this);
        }
        set comment(t) {
            t !== this.comment && (f(dw, this).commentText = g(db, this, t));
        }
        focus() {
            f(dw, this).container?.focus();
        }
        get parentBoundingClientRect() {
            return f(dw, this).layer.getBoundingClientRect();
        }
        setCommentButtonStates({ selected: t, hasPopup: e }) {
            f(dh, this) && (f(dh, this).classList.toggle("selected", t), (f(dh, this).ariaExpanded = e));
        }
        setSelectedCommentButton(t) {
            f(dh, this).classList.toggle("selected", t);
        }
        get commentPopupPosition() {
            if (f(dc, this)) return f(dc, this);
            let { x: t, y: e, height: i } = f(dh, this).getBoundingClientRect(),
                { x: s, y: n, width: a, height: r } = f(dw, this).layer.getBoundingClientRect();
            return [(t - s) / a, (e + i - n) / r];
        }
        set commentPopupPosition(t) {
            g(dc, this, t);
        }
        hasDefaultPopupPosition() {
            return null === f(dc, this);
        }
        get commentButtonPosition() {
            return f(dd, this);
        }
        get commentButtonWidth() {
            return f(dh, this).getBoundingClientRect().width / this.parentBoundingClientRect.width;
        }
        editComment(t) {
            let [e, i] = f(dc, this) || this.commentButtonPosition.map((t) => t / 100),
                s = this.parentBoundingClientRect,
                { x: n, y: a, width: r, height: o } = s;
            f(h2, this).showDialog(null, this, n + e * r, a + i * o, { ...t, parentDimensions: s });
        }
        render() {
            if (f(da, this)) return;
            let t = g(da, this, document.createElement("div"));
            if (((t.className = "popup"), f(h8, this))) {
                let e = (t.style.outlineColor = V.makeHexColor(...f(h8, this)));
                t.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)`;
            }
            let e = document.createElement("span");
            if (((e.className = "header"), f(dg, this)?.str)) {
                let t = document.createElement("span");
                (t.className = "title"), e.append(t), ({ dir: t.dir, str: t.textContent } = f(dg, this));
            }
            if ((t.append(e), f(dt, this))) {
                let t = document.createElement("time");
                (t.className = "popupDate"),
                    t.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"),
                    t.setAttribute("data-l10n-args", JSON.stringify({ dateObj: f(dt, this).valueOf() })),
                    (t.dateTime = f(dt, this).toISOString()),
                    e.append(t);
            }
            tC({ html: dM.call(d(dv, this)) || f(h9, this).str, dir: f(h9, this)?.dir, className: "popupContent" }, t),
                f(h7, this).append(t);
        }
        updateEdited({ rect: t, popup: e, deleted: i }) {
            if (f(h2, this)) {
                i
                    ? (this.remove(), g(db, this, null))
                    : e && (e.deleted ? this.remove() : (d(dv, this, dk).call(this), g(db, this, e.text))),
                    t && (g(dd, this, null), d(dv, this, d_).call(this), d(dv, this, dx).call(this));
                return;
            }
            i || e?.deleted
                ? this.remove()
                : (d(dv, this, dy).call(this),
                  f(df, this) || g(df, this, { contentsObj: f(h9, this), richText: f(dp, this) }),
                  t && g(dl, this, null),
                  e &&
                      e.text &&
                      (g(dp, this, d(dv, this, dC).call(this, e.text)),
                      g(dt, this, tp.toDateObject(e.date)),
                      g(h9, this, null)),
                  f(da, this)?.remove(),
                  g(da, this, null));
        }
        resetEdited() {
            f(df, this) &&
                (({ contentsObj: m(g, [h9, this])._, richText: m(g, [dp, this])._ } = f(df, this)),
                g(df, this, null),
                f(da, this)?.remove(),
                g(da, this, null),
                g(dl, this, null));
        }
        remove() {
            if (
                (f(dr, this)?.abort(),
                g(dr, this, null),
                f(da, this)?.remove(),
                g(da, this, null),
                g(dm, this, !1),
                g(dn, this, !1),
                f(dh, this)?.remove(),
                g(dh, this, null),
                this.trigger)
            )
                for (let t of this.trigger) t.classList.remove("popupTriggerArea");
        }
        forceHide() {
            g(dm, this, this.isVisible), f(dm, this) && (f(h7, this).hidden = !0);
        }
        maybeShow() {
            f(h2, this) ||
                (d(dv, this, dy).call(this),
                f(dm, this) && (f(da, this) || d(dv, this, dI).call(this), g(dm, this, !1), (f(h7, this).hidden = !1)));
        }
        get isVisible() {
            return !f(h2, this) && !1 === f(h7, this).hidden;
        }
    };
function dy() {
    if (f(dr, this)) return;
    g(dr, this, new AbortController());
    let { signal: t } = f(dr, this);
    for (let e of this.trigger)
        e.addEventListener("click", f(h6, this), { signal: t }),
            e.addEventListener("pointerenter", f(h4, this), { signal: t }),
            e.addEventListener("pointerleave", f(h5, this), { signal: t }),
            e.classList.add("popupTriggerArea");
    for (let e of f(de, this)) e.container?.addEventListener("keydown", f(h3, this), { signal: t });
}
function d_() {
    let t = f(de, this).find((t) => t.hasCommentButton);
    t && g(dd, this, t._normalizePoint(t.commentButtonPosition));
}
function dx() {
    if (f(dw, this).extraPopupElement && !f(dw, this).editor) return;
    f(dh, this) || this.renderCommentButton();
    let [t, e] = f(dd, this),
        { style: i } = f(dh, this);
    (i.left = `calc(${t}%)`), (i.top = `calc(${e}% - var(--comment-button-dim))`);
}
function dk() {
    f(dw, this).extraPopupElement ||
        (f(dh, this) || this.renderCommentButton(),
        (f(dh, this).style.backgroundColor = this.commentButtonColor || ""));
}
function dM() {
    let t = f(dp, this),
        e = f(h9, this);
    return (t?.str && (!e?.str || e.str === t.str) && f(dp, this).html) || null;
}
function dS() {
    return dM.call(d(dv, this))?.attributes?.style?.fontSize || 0;
}
function dE() {
    return dM.call(d(dv, this))?.attributes?.style?.color || null;
}
function dC(t) {
    let e = [],
        i = {
            style: {
                color: dE.call(d(dv, this)),
                fontSize: dS.call(d(dv, this)) ? `calc(${dS.call(d(dv, this))}px * var(--total-scale-factor))` : "",
            },
        };
    for (let s of t.split("\n")) e.push({ name: "span", value: s, attributes: i });
    return { str: t, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e }] } };
}
function dT(t) {
    t.altKey ||
        t.shiftKey ||
        t.ctrlKey ||
        t.metaKey ||
        (("Enter" === t.key || ("Escape" === t.key && f(dn, this))) && d(dv, this, dD).call(this));
}
function dP() {
    if (null !== f(dl, this)) return;
    let {
            page: { view: t },
            viewport: {
                rawDims: { pageWidth: e, pageHeight: i, pageX: s, pageY: n },
            },
        } = f(di, this),
        a = !!f(ds, this),
        r = a ? f(ds, this) : f(du, this);
    for (let t of f(de, this))
        if (!r || null !== V.intersect(t.data.rect, r)) {
            (r = t.data.rect), (a = !0);
            break;
        }
    let o = V.normalizeRect([r[0], t[3] - r[1] + t[1], r[2], t[3] - r[3] + t[1]]),
        l = a ? r[2] - r[0] + 5 : 0;
    g(dl, this, [(100 * (o[0] + l - s)) / e, (100 * (o[1] - n)) / i]);
    let { style: h } = f(h7, this);
    (h.left = `${f(dl, this)[0]}%`), (h.top = `${f(dl, this)[1]}%`);
}
function dD() {
    f(h2, this)
        ? f(h2, this).toggleCommentPopup(this, !1)
        : (g(dn, this, !f(dn, this)),
          f(dn, this)
              ? (d(dv, this, dI).call(this),
                f(h7, this).addEventListener("click", f(h6, this)),
                f(h7, this).addEventListener("keydown", f(h3, this)))
              : (d(dv, this, dL).call(this),
                f(h7, this).removeEventListener("click", f(h6, this)),
                f(h7, this).removeEventListener("keydown", f(h3, this))));
}
function dI() {
    f(da, this) || this.render(),
        this.isVisible
            ? f(dn, this) && f(h7, this).classList.add("focused")
            : (d(dv, this, dP).call(this),
              (f(h7, this).hidden = !1),
              (f(h7, this).style.zIndex = parseInt(f(h7, this).style.zIndex) + 1e3));
}
function dL() {
    f(h7, this).classList.remove("focused"),
        !f(dn, this) &&
            this.isVisible &&
            ((f(h7, this).hidden = !0), (f(h7, this).style.zIndex = parseInt(f(h7, this).style.zIndex) - 1e3));
}
var dR = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }),
                (this.textContent = t.data.textContent),
                (this.textPosition = t.data.textPosition),
                (this.annotationEditorType = _.FREETEXT);
        }
        render() {
            if ((this.container.classList.add("freeTextAnnotation"), this.textContent)) {
                let t = (this.contentElement = document.createElement("div"));
                for (let e of (t.classList.add("annotationTextContent"),
                t.setAttribute("role", "comment"),
                this.textContent)) {
                    let i = document.createElement("span");
                    (i.textContent = e), t.append(i);
                }
                this.container.append(t);
            }
            return (
                !this.data.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this._editOnDoubleClick(),
                this.container
            );
        }
    },
    dF = new WeakMap(),
    dN = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), p(this, dF, null);
        }
        render() {
            this.container.classList.add("lineAnnotation");
            let { data: t, width: e, height: i } = this,
                s = this.svgFactory.create(e, i, !0),
                n = g(dF, this, this.svgFactory.createElement("svg:line"));
            return (
                n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]),
                n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]),
                n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]),
                n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]),
                n.setAttribute("stroke-width", t.borderStyle.width || 1),
                n.setAttribute("stroke", "transparent"),
                n.setAttribute("fill", "transparent"),
                s.append(n),
                this.container.append(s),
                !t.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return f(dF, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    dB = new WeakMap(),
    dO = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), p(this, dB, null);
        }
        render() {
            this.container.classList.add("squareAnnotation");
            let { data: t, width: e, height: i } = this,
                s = this.svgFactory.create(e, i, !0),
                n = t.borderStyle.width,
                a = g(dB, this, this.svgFactory.createElement("svg:rect"));
            return (
                a.setAttribute("x", n / 2),
                a.setAttribute("y", n / 2),
                a.setAttribute("width", e - n),
                a.setAttribute("height", i - n),
                a.setAttribute("stroke-width", n || 1),
                a.setAttribute("stroke", "transparent"),
                a.setAttribute("fill", "transparent"),
                s.append(a),
                this.container.append(s),
                !t.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return f(dB, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    dW = new WeakMap(),
    dU = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), p(this, dW, null);
        }
        render() {
            this.container.classList.add("circleAnnotation");
            let { data: t, width: e, height: i } = this,
                s = this.svgFactory.create(e, i, !0),
                n = t.borderStyle.width,
                a = g(dW, this, this.svgFactory.createElement("svg:ellipse"));
            return (
                a.setAttribute("cx", e / 2),
                a.setAttribute("cy", i / 2),
                a.setAttribute("rx", e / 2 - n / 2),
                a.setAttribute("ry", i / 2 - n / 2),
                a.setAttribute("stroke-width", n || 1),
                a.setAttribute("stroke", "transparent"),
                a.setAttribute("fill", "transparent"),
                s.append(a),
                this.container.append(s),
                !t.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return f(dW, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    d$ = new WeakMap(),
    dH = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }),
                p(this, d$, null),
                (this.containerClassName = "polylineAnnotation"),
                (this.svgElementName = "svg:polyline");
        }
        render() {
            this.container.classList.add(this.containerClassName);
            let {
                data: { rect: t, vertices: e, borderStyle: i, popupRef: s },
                width: n,
                height: a,
            } = this;
            if (!e) return this.container;
            let r = this.svgFactory.create(n, a, !0),
                o = [];
            for (let i = 0, s = e.length; i < s; i += 2) {
                let s = e[i] - t[0],
                    n = t[3] - e[i + 1];
                o.push(`${s},${n}`);
            }
            o = o.join(" ");
            let l = g(d$, this, this.svgFactory.createElement(this.svgElementName));
            return (
                l.setAttribute("points", o),
                l.setAttribute("stroke-width", i.width || 1),
                l.setAttribute("stroke", "transparent"),
                l.setAttribute("fill", "transparent"),
                r.append(l),
                this.container.append(r),
                !s && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return f(d$, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    dj = class extends dH {
        constructor(t) {
            super(t), (this.containerClassName = "polygonAnnotation"), (this.svgElementName = "svg:polygon");
        }
    },
    dz = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 });
        }
        render() {
            return (
                this.container.classList.add("caretAnnotation"),
                !this.data.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
    },
    dG = new WeakMap(),
    dV = new WeakMap(),
    dq = new WeakSet(),
    dX = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }),
                u(this, dq),
                p(this, dG, null),
                p(this, dV, []),
                (this.containerClassName = "inkAnnotation"),
                (this.svgElementName = "svg:polyline"),
                (this.annotationEditorType = "InkHighlight" === this.data.it ? _.HIGHLIGHT : _.INK);
        }
        render() {
            this.container.classList.add(this.containerClassName);
            let {
                    data: { rect: t, rotation: e, inkLists: i, borderStyle: s, popupRef: n },
                } = this,
                { transform: a, width: r, height: o } = d(dq, this, dK).call(this, e, t),
                l = this.svgFactory.create(r, o, !0),
                h = g(dG, this, this.svgFactory.createElement("svg:g"));
            l.append(h),
                h.setAttribute("stroke-width", s.width || 1),
                h.setAttribute("stroke-linecap", "round"),
                h.setAttribute("stroke-linejoin", "round"),
                h.setAttribute("stroke-miterlimit", 10),
                h.setAttribute("stroke", "transparent"),
                h.setAttribute("fill", "transparent"),
                h.setAttribute("transform", a);
            for (let t = 0, e = i.length; t < e; t++) {
                let e = this.svgFactory.createElement(this.svgElementName);
                f(dV, this).push(e), e.setAttribute("points", i[t].join(",")), h.append(e);
            }
            return (
                !n && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.append(l),
                this._editOnDoubleClick(),
                this.container
            );
        }
        updateEdited(t) {
            super.updateEdited(t);
            let { thickness: e, points: i, rect: s } = t,
                n = f(dG, this);
            if ((e >= 0 && n.setAttribute("stroke-width", e || 1), i))
                for (let t = 0, e = f(dV, this).length; t < e; t++)
                    f(dV, this)[t].setAttribute("points", i[t].join(","));
            if (s) {
                let { transform: t, width: e, height: i } = d(dq, this, dK).call(this, this.data.rotation, s);
                n.parentElement.setAttribute("viewBox", `0 0 ${e} ${i}`), n.setAttribute("transform", t);
            }
        }
        getElementsToTriggerPopup() {
            return f(dV, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    };
function dK(t, e) {
    switch (t) {
        case 90:
            return {
                transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`,
                width: e[3] - e[1],
                height: e[2] - e[0],
            };
        case 180:
            return {
                transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`,
                width: e[2] - e[0],
                height: e[3] - e[1],
            };
        case 270:
            return {
                transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`,
                width: e[3] - e[1],
                height: e[2] - e[0],
            };
        default:
            return { transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`, width: e[2] - e[0], height: e[3] - e[1] };
    }
}
var dY = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }),
                (this.annotationEditorType = _.HIGHLIGHT);
        }
        render() {
            let {
                data: { overlaidText: t, popupRef: e },
            } = this;
            if (
                (!e && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.classList.add("highlightAnnotation"),
                this._editOnDoubleClick(),
                t)
            ) {
                let e = document.createElement("mark");
                e.classList.add("overlaidText"), (e.textContent = t), this.container.append(e);
            }
            return this.container;
        }
    },
    dQ = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
            let {
                data: { overlaidText: t, popupRef: e },
            } = this;
            if (
                (!e && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.classList.add("underlineAnnotation"),
                t)
            ) {
                let e = document.createElement("u");
                e.classList.add("overlaidText"), (e.textContent = t), this.container.append(e);
            }
            return this.container;
        }
    },
    dJ = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
            let {
                data: { overlaidText: t, popupRef: e },
            } = this;
            if (
                (!e && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.classList.add("squigglyAnnotation"),
                t)
            ) {
                let e = document.createElement("u");
                e.classList.add("overlaidText"), (e.textContent = t), this.container.append(e);
            }
            return this.container;
        }
    },
    dZ = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
            let {
                data: { overlaidText: t, popupRef: e },
            } = this;
            if (
                (!e && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.classList.add("strikeoutAnnotation"),
                t)
            ) {
                let e = document.createElement("s");
                e.classList.add("overlaidText"), (e.textContent = t), this.container.append(e);
            }
            return this.container;
        }
    },
    d0 = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), (this.annotationEditorType = _.STAMP);
        }
        render() {
            return (
                this.container.classList.add("stampAnnotation"),
                this.container.setAttribute("role", "img"),
                !this.data.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this._editOnDoubleClick(),
                this.container
            );
        }
    },
    d1 = new WeakMap(),
    d2 = new WeakSet(),
    d3 = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0 }), u(this, d2), p(this, d1, null);
            const { file: e } = this.data;
            (this.filename = e.filename),
                (this.content = e.content),
                this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, ...e });
        }
        render() {
            let t;
            this.container.classList.add("fileAttachmentAnnotation");
            let { container: e, data: i } = this;
            i.hasAppearance || 0 === i.fillAlpha
                ? (t = document.createElement("div"))
                : (((t = document.createElement("img")).src =
                      `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? "paperclip" : "pushpin"}.svg`),
                  i.fillAlpha && i.fillAlpha < 1 && (t.style = `filter: opacity(${Math.round(100 * i.fillAlpha)}%);`)),
                t.addEventListener("dblclick", d(d2, this, d5).bind(this)),
                g(d1, this, t);
            let { isMac: s } = z.platform;
            return (
                e.addEventListener("keydown", (t) => {
                    "Enter" === t.key && (s ? t.metaKey : t.ctrlKey) && d(d2, this, d5).call(this);
                }),
                !i.popupRef && this.hasPopupData
                    ? ((this.hasOwnCommentButton = !0), this._createPopup())
                    : t.classList.add("popupTriggerArea"),
                e.append(t),
                e
            );
        }
        getElementsToTriggerPopup() {
            return f(d1, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    };
function d5() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
}
var d4 = new WeakMap(),
    d6 = new WeakMap(),
    d8 = new WeakMap(),
    d7 = new WeakMap(),
    d9 = new WeakMap(),
    ct = new WeakMap(),
    ce = new WeakMap(),
    ci = new WeakMap(),
    cs = new WeakSet(),
    cn = class t {
        constructor({
            div: t,
            accessibilityManager: e,
            annotationCanvasMap: i,
            annotationEditorUIManager: s,
            page: n,
            viewport: a,
            structTreeLayer: r,
            commentManager: o,
            linkService: l,
            annotationStorage: h,
        }) {
            u(this, cs),
                p(this, d4, null),
                p(this, d6, null),
                p(this, d8, null),
                p(this, d7, new Map()),
                p(this, d9, null),
                p(this, ct, null),
                p(this, ce, []),
                p(this, ci, !1),
                (this.div = t),
                g(d4, this, e),
                g(d6, this, i),
                g(d9, this, r || null),
                g(ct, this, l || null),
                g(d8, this, h || new nr()),
                (this.page = n),
                (this.viewport = a),
                (this.zIndex = 0),
                (this._annotationEditorUIManager = s),
                (this._commentManager = o || null);
        }
        hasEditableAnnotations() {
            return f(d7, this).size > 0;
        }
        async render(t) {
            let { annotations: e } = t,
                i = this.div;
            tb(i, this.viewport);
            let s = new Map(),
                n = [],
                a = {
                    data: null,
                    layer: i,
                    linkService: f(ct, this),
                    downloadManager: t.downloadManager,
                    imageResourcesPath: t.imageResourcesPath || "",
                    renderForms: !1 !== t.renderForms,
                    svgFactory: new hT(),
                    annotationStorage: f(d8, this),
                    enableComment: !0 === t.enableComment,
                    enableScripting: !0 === t.enableScripting,
                    hasJSActions: t.hasJSActions,
                    fieldObjects: t.fieldObjects,
                    parent: this,
                    elements: null,
                };
            for (let t of e) {
                if (t.noHTML) continue;
                let e = t.annotationType === M.POPUP;
                if (e) {
                    let e = s.get(t.id);
                    if (!e) continue;
                    if (!this._commentManager) {
                        n.push(t);
                        continue;
                    }
                    a.elements = e;
                } else if (t.rect[2] === t.rect[0] || t.rect[3] === t.rect[1]) continue;
                a.data = t;
                let i = hI.create(a);
                if (!i.isRenderable) continue;
                if (!e && (f(ce, this).push(i), t.popupRef)) {
                    let e = s.get(t.popupRef);
                    e ? e.push(i) : s.set(t.popupRef, [i]);
                }
                let r = i.render();
                t.hidden && (r.style.visibility = "hidden"),
                    i._isEditable &&
                        (f(d7, this).set(i.data.id, i), this._annotationEditorUIManager?.renderAnnotationElement(i));
            }
            for (let t of (await d(cs, this, ca).call(this), n)) {
                let e = (a.elements = s.get(t.id));
                a.data = t;
                let i = hI.create(a);
                if (!i.isRenderable) continue;
                let n = i.render();
                (i.contentElement.id = `${J}${t.id}`),
                    t.hidden && (n.style.visibility = "hidden"),
                    e.at(-1).container.after(n);
            }
            d(cs, this, cr).call(this);
        }
        async addLinkAnnotations(e) {
            let i = { data: null, layer: this.div, linkService: f(ct, this), svgFactory: new hT(), parent: this };
            for (let s of e) {
                (s.borderStyle ||= t._defaultBorderStyle), (i.data = s);
                let e = hI.create(i);
                e.isRenderable && (e.render(), (e.contentElement.id = `${J}${s.id}`), f(ce, this).push(e));
            }
            await d(cs, this, ca).call(this);
        }
        update({ viewport: t }) {
            let e = this.div;
            (this.viewport = t), tb(e, { rotation: t.rotation }), d(cs, this, cr).call(this), (e.hidden = !1);
        }
        getEditableAnnotations() {
            return Array.from(f(d7, this).values());
        }
        getEditableAnnotation(t) {
            return f(d7, this).get(t);
        }
        addFakeAnnotation(t) {
            let { div: e } = this,
                { id: i, rotation: s } = t,
                n = new hW({
                    data: { id: i, rect: t.getPDFRect(), rotation: s },
                    editor: t,
                    layer: e,
                    parent: this,
                    enableComment: !!this._commentManager,
                    linkService: f(ct, this),
                    annotationStorage: f(d8, this),
                });
            return n.render(), (n.contentElement.id = `${J}${i}`), n.createOrUpdatePopup(), f(ce, this).push(n), n;
        }
        removeAnnotation(t) {
            let e = f(ce, this).findIndex((e) => e.data.id === t);
            if (e < 0) return;
            let [i] = f(ce, this).splice(e, 1);
            f(d4, this)?.removePointerInTextLayer(i.contentElement);
        }
        updateFakeAnnotations(t) {
            if (0 !== t.length) {
                for (let e of t) e.updateFakeAnnotationElement(this);
                d(cs, this, ca).call(this);
            }
        }
        togglePointerEvents(t = !1) {
            this.div.classList.toggle("disabled", !t);
        }
        static get _defaultBorderStyle() {
            return F(
                this,
                "_defaultBorderStyle",
                Object.freeze({
                    width: 1,
                    rawWidth: 1,
                    style: 1,
                    dashArray: [3],
                    horizontalCornerRadius: 0,
                    verticalCornerRadius: 0,
                }),
            );
        }
    };
async function ca() {
    if (0 === f(ce, this).length) return;
    this.div.replaceChildren();
    let t = [];
    if (!f(ci, this))
        for (let {
            contentElement: e,
            data: { id: i },
        } of (g(ci, this, !0), f(ce, this))) {
            let s = (e.id = `${J}${i}`);
            t.push(
                f(d9, this)
                    ?.getAriaAttributes(s)
                    .then((t) => {
                        if (t) for (let [i, s] of t) e.setAttribute(i, s);
                    }),
            );
        }
    f(ce, this).sort(
        (
            {
                data: {
                    rect: [t, e, i, s],
                },
            },
            {
                data: {
                    rect: [n, a, r, o],
                },
            },
        ) => {
            if (t === i && e === s) return 1;
            if (n === r && a === o) return -1;
            let l = (e + s) / 2,
                h = (a + o) / 2;
            return l >= o && h <= e ? -1 : h >= s && l <= a ? 1 : (t + i) / 2 - (n + r) / 2;
        },
    );
    let e = document.createDocumentFragment();
    for (let t of f(ce, this))
        e.append(t.container),
            this._commentManager
                ? (t.extraPopupElement?.popup || t.popup)?.renderCommentButton()
                : t.extraPopupElement && e.append(t.extraPopupElement.render());
    if ((this.div.append(e), await Promise.all(t), f(d4, this)))
        for (let t of f(ce, this)) f(d4, this).addPointerInTextLayer(t.contentElement, !1);
}
function cr() {
    if (!f(d6, this)) return;
    let t = this.div;
    for (let [e, i] of f(d6, this)) {
        let s = t.querySelector(`[data-annotation-id="${e}"]`);
        if (!s) continue;
        i.className = "annotationContent";
        let { firstChild: n } = s;
        n
            ? "CANVAS" === n.nodeName
                ? n.replaceWith(i)
                : n.classList.contains("annotationContent")
                  ? n.after(i)
                  : n.before(i)
            : s.append(i);
        let a = f(d7, this).get(e);
        a &&
            (a._hasNoCanvas
                ? (this._annotationEditorUIManager?.setMissingCanvas(e, s.id, i), (a._hasNoCanvas = !1))
                : (a.canvas = i));
    }
    f(d6, this).clear();
}
var co = /\r\n?|\n/g,
    cl = new WeakMap(),
    ch = new WeakMap(),
    cd = new WeakMap(),
    cc = new WeakMap(),
    cu = new WeakSet(),
    cp = class t extends sH {
        static get _keyboardManager() {
            let e = t.prototype,
                i = (t) => t.isEmpty(),
                s = ih.TRANSLATE_SMALL,
                n = ih.TRANSLATE_BIG;
            return F(
                this,
                "_keyboardManager",
                new ev([
                    [["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, { bubbles: !0 }],
                    [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove],
                    [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, { args: [-s, 0], checker: i }],
                    [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, { args: [-n, 0], checker: i }],
                    [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, { args: [s, 0], checker: i }],
                    [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, { args: [n, 0], checker: i }],
                    [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, { args: [0, -s], checker: i }],
                    [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, { args: [0, -n], checker: i }],
                    [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, { args: [0, s], checker: i }],
                    [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, { args: [0, n], checker: i }],
                ]),
            );
        }
        constructor(e) {
            super({ ...e, name: "freeTextEditor" }),
                u(this, cu),
                p(this, cl, ""),
                p(this, ch, `${this.id}-editor`),
                p(this, cd, null),
                p(this, cc, void 0),
                (0, o.t)(this, "_colorPicker", null),
                (this.color = e.color || t._defaultColor || sH._defaultLineColor),
                g(cc, this, e.fontSize || t._defaultFontSize),
                this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert"),
                (this.canAddComment = !1);
        }
        static initialize(t, e) {
            sH.initialize(t, e);
            let i = getComputedStyle(document.documentElement);
            this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(e, i) {
            switch (e) {
                case x.FREETEXT_SIZE:
                    t._defaultFontSize = i;
                    break;
                case x.FREETEXT_COLOR:
                    t._defaultColor = i;
            }
        }
        updateParams(t, e) {
            switch (t) {
                case x.FREETEXT_SIZE:
                    d(cu, this, cg).call(this, e);
                    break;
                case x.FREETEXT_COLOR:
                    d(cu, this, cf).call(this, e);
            }
        }
        static get defaultPropertiesToUpdate() {
            return [
                [x.FREETEXT_SIZE, t._defaultFontSize],
                [x.FREETEXT_COLOR, t._defaultColor || sH._defaultLineColor],
            ];
        }
        get propertiesToUpdate() {
            return [
                [x.FREETEXT_SIZE, f(cc, this)],
                [x.FREETEXT_COLOR, this.color],
            ];
        }
        get toolbarButtons() {
            return (this._colorPicker ||= new hx(this)), [["colorPicker", this._colorPicker]];
        }
        get colorType() {
            return x.FREETEXT_COLOR;
        }
        onUpdatedColor() {
            (this.editorDiv.style.color = this.color), this._colorPicker?.update(this.color), super.onUpdatedColor();
        }
        _translateEmpty(t, e) {
            this._uiManager.translateSelectedEditors(t, e, !0);
        }
        getInitialTranslation() {
            let e = this.parentScale;
            return [-t._internalPadding * e, -(t._internalPadding + f(cc, this)) * e];
        }
        rebuild() {
            !this.parent || (super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this)));
        }
        enableEditMode() {
            if (!super.enableEditMode()) return !1;
            this.overlayDiv.classList.remove("enabled"),
                (this.editorDiv.contentEditable = !0),
                (this._isDraggable = !1),
                this.div.removeAttribute("aria-activedescendant"),
                g(cd, this, new AbortController());
            let t = this._uiManager.combinedSignal(f(cd, this));
            return (
                this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t }),
                this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t }),
                this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t }),
                this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t }),
                this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t }),
                !0
            );
        }
        disableEditMode() {
            return (
                !!super.disableEditMode() &&
                (this.overlayDiv.classList.add("enabled"),
                (this.editorDiv.contentEditable = !1),
                this.div.setAttribute("aria-activedescendant", f(ch, this)),
                (this._isDraggable = !0),
                f(cd, this)?.abort(),
                g(cd, this, null),
                this.div.focus({ preventScroll: !0 }),
                (this.isEditing = !1),
                this.parent.div.classList.add("freetextEditing"),
                !0)
            );
        }
        focusin(t) {
            this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
        }
        onceAdded(t) {
            this.width ||
                (this.enableEditMode(),
                t && this.editorDiv.focus(),
                this._initialOptions?.isCentered && this.center(),
                (this._initialOptions = null));
        }
        isEmpty() {
            return !this.editorDiv || "" === this.editorDiv.innerText.trim();
        }
        remove() {
            (this.isEditing = !1),
                this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")),
                super.remove();
        }
        commit() {
            if (!this.isInEditMode()) return;
            super.commit(), this.disableEditMode();
            let t = f(cl, this),
                e = g(cl, this, d(cu, this, cm).call(this).trimEnd());
            if (t === e) return;
            let i = (t) => {
                (g(cl, this, t), t)
                    ? (d(cu, this, cv).call(this), this._uiManager.rebuild(this), d(cu, this, cw).call(this))
                    : this.remove();
            };
            this.addCommands({
                cmd: () => {
                    i(e);
                },
                undo: () => {
                    i(t);
                },
                mustExec: !1,
            }),
                d(cu, this, cw).call(this);
        }
        shouldGetKeyboardEvents() {
            return this.isInEditMode();
        }
        enterInEditMode() {
            this.enableEditMode(), this.editorDiv.focus();
        }
        keydown(t) {
            t.target === this.div && "Enter" === t.key && (this.enterInEditMode(), t.preventDefault());
        }
        editorDivKeydown(e) {
            t._keyboardManager.exec(this, e);
        }
        editorDivFocus(t) {
            this.isEditing = !0;
        }
        editorDivBlur(t) {
            this.isEditing = !1;
        }
        editorDivInput(t) {
            this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
        }
        disableEditing() {
            this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
            this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
        }
        get canChangeContent() {
            return !0;
        }
        render() {
            let t, e;
            if (this.div) return this.div;
            (this._isCopy || this.annotationElementId) && ((t = this.x), (e = this.y)),
                super.render(),
                (this.editorDiv = document.createElement("div")),
                (this.editorDiv.className = "internal"),
                this.editorDiv.setAttribute("id", f(ch, this)),
                this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"),
                this.editorDiv.setAttribute("data-l10n-attrs", "default-content"),
                this.enableEditing(),
                (this.editorDiv.contentEditable = !0);
            let { style: i } = this.editorDiv;
            if (
                ((i.fontSize = `calc(${f(cc, this)}px * var(--total-scale-factor))`),
                (i.color = this.color),
                this.div.append(this.editorDiv),
                (this.overlayDiv = document.createElement("div")),
                this.overlayDiv.classList.add("overlay", "enabled"),
                this.div.append(this.overlayDiv),
                this._isCopy || this.annotationElementId)
            ) {
                let [i, s] = this.parentDimensions;
                if (this.annotationElementId) {
                    let n,
                        a,
                        { position: r } = this._initialData,
                        [o, l] = this.getInitialTranslation();
                    [o, l] = this.pageTranslationToScreen(o, l);
                    let [h, d] = this.pageDimensions,
                        [c, u] = this.pageTranslation;
                    switch (this.rotation) {
                        case 0:
                            (n = t + (r[0] - c) / h), (a = e + this.height - (r[1] - u) / d);
                            break;
                        case 90:
                            (n = t + (r[0] - c) / h), (a = e - (r[1] - u) / d), ([o, l] = [l, -o]);
                            break;
                        case 180:
                            (n = t - this.width + (r[0] - c) / h), (a = e - (r[1] - u) / d), ([o, l] = [-o, -l]);
                            break;
                        case 270:
                            (n = t + (r[0] - c - this.height * d) / h),
                                (a = e + (r[1] - u - this.width * h) / d),
                                ([o, l] = [-l, o]);
                    }
                    this.setAt(n * i, a * s, o, l);
                } else this._moveAfterPaste(t, e);
                d(cu, this, cv).call(this), (this._isDraggable = !0), (this.editorDiv.contentEditable = !1);
            } else (this._isDraggable = !1), (this.editorDiv.contentEditable = !0);
            return this.div;
        }
        editorDivPaste(e) {
            let i = e.clipboardData || window.clipboardData,
                { types: s } = i;
            if (1 === s.length && "text/plain" === s[0]) return;
            e.preventDefault();
            let n = cy.call(t, i.getData("text") || "").replaceAll(co, "\n");
            if (!n) return;
            let a = window.getSelection();
            if (!a.rangeCount) return;
            this.editorDiv.normalize(), a.deleteFromDocument();
            let r = a.getRangeAt(0);
            if (!n.includes("\n")) {
                r.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), a.collapseToStart();
                return;
            }
            let { startContainer: o, startOffset: l } = r,
                h = [],
                c = [];
            if (o.nodeType === Node.TEXT_NODE) {
                let e = o.parentElement;
                if ((c.push(o.nodeValue.slice(l).replaceAll(co, "")), e !== this.editorDiv)) {
                    let i = h;
                    for (let s of this.editorDiv.childNodes) {
                        if (s === e) {
                            i = c;
                            continue;
                        }
                        i.push(cb.call(t, s));
                    }
                }
                h.push(o.nodeValue.slice(0, l).replaceAll(co, ""));
            } else if (o === this.editorDiv) {
                let e = h,
                    i = 0;
                for (let s of this.editorDiv.childNodes) i++ === l && (e = c), e.push(cb.call(t, s));
            }
            g(cl, this, `${h.join("\n")}${n}${c.join("\n")}`), d(cu, this, cv).call(this);
            let u = new Range(),
                p = Math.sumPrecise(h.map((t) => t.length));
            for (let { firstChild: t } of this.editorDiv.childNodes)
                if (t.nodeType === Node.TEXT_NODE) {
                    let e = t.nodeValue.length;
                    if (p <= e) {
                        u.setStart(t, p), u.setEnd(t, p);
                        break;
                    }
                    p -= e;
                }
            a.removeAllRanges(), a.addRange(u);
        }
        get contentDiv() {
            return this.editorDiv;
        }
        getPDFRect() {
            let e = t._internalPadding * this.parentScale;
            return this.getRect(e, e);
        }
        static async deserialize(e, i, s) {
            let n = null;
            if (e instanceof dR) {
                let {
                    data: {
                        defaultAppearanceData: { fontSize: t, fontColor: i },
                        rect: s,
                        rotation: a,
                        id: r,
                        popupRef: o,
                        richText: l,
                        contentsObj: h,
                        creationDate: d,
                        modificationDate: c,
                    },
                    textContent: u,
                    textPosition: p,
                    parent: {
                        page: { pageNumber: g },
                    },
                } = e;
                if (!u || 0 === u.length) return null;
                n = e = {
                    annotationType: _.FREETEXT,
                    color: Array.from(i),
                    fontSize: t,
                    value: u.join("\n"),
                    position: p,
                    pageIndex: g - 1,
                    rect: s.slice(0),
                    rotation: a,
                    annotationElementId: r,
                    id: r,
                    deleted: !1,
                    popupRef: o,
                    comment: h?.str || null,
                    richText: l,
                    creationDate: d,
                    modificationDate: c,
                };
            }
            let a = await super.deserialize(e, i, s);
            return (
                g(cc, a, e.fontSize),
                (a.color = V.makeHexColor(...e.color)),
                g(cl, a, cy.call(t, e.value)),
                (a._initialData = n),
                e.comment && a.setCommentData(e),
                a
            );
        }
        serialize(t = !1) {
            if (this.isEmpty()) return null;
            if (this.deleted) return this.serializeDeleted();
            let e = sH._colorManager.convert(
                    this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color,
                ),
                i = Object.assign(super.serialize(t), {
                    color: e,
                    fontSize: f(cc, this),
                    value: d(cu, this, cA).call(this),
                });
            return (this.addComment(i), t)
                ? ((i.isCopy = !0), i)
                : this.annotationElementId && !d(cu, this, c_).call(this, i)
                  ? null
                  : ((i.id = this.annotationElementId), i);
        }
        renderAnnotationElement(t) {
            let e = super.renderAnnotationElement(t);
            if (!e) return null;
            let { style: i } = e;
            for (let t of ((i.fontSize = `calc(${f(cc, this)}px * var(--total-scale-factor))`),
            (i.color = this.color),
            e.replaceChildren(),
            f(cl, this).split("\n"))) {
                let i = document.createElement("div");
                i.append(t ? document.createTextNode(t) : document.createElement("br")), e.append(i);
            }
            return (
                t.updateEdited({
                    rect: this.getPDFRect(),
                    popup:
                        this._uiManager.hasCommentManager() || this.hasEditedComment
                            ? this.comment
                            : { text: f(cl, this) },
                }),
                e
            );
        }
        resetAnnotationElement(t) {
            super.resetAnnotationElement(t), t.resetEdited();
        }
    };
function cg(t) {
    let e = (t) => {
            (this.editorDiv.style.fontSize = `calc(${t}px * var(--total-scale-factor))`),
                this.translate(0, -(t - f(cc, this)) * this.parentScale),
                g(cc, this, t),
                d(cu, this, cw).call(this);
        },
        i = f(cc, this);
    this.addCommands({
        cmd: e.bind(this, t),
        undo: e.bind(this, i),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: x.FREETEXT_SIZE,
        overwriteIfSameType: !0,
        keepUndo: !0,
    });
}
function cf(t) {
    let e = (t) => {
            (this.color = t), this.onUpdatedColor();
        },
        i = this.color;
    this.addCommands({
        cmd: e.bind(this, t),
        undo: e.bind(this, i),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: x.FREETEXT_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
    });
}
function cm() {
    let t = [];
    this.editorDiv.normalize();
    let e = null;
    for (let i of this.editorDiv.childNodes)
        (e?.nodeType !== Node.TEXT_NODE || "BR" !== i.nodeName) && (t.push(cb.call(cp, i)), (e = i));
    return t.join("\n");
}
function cw() {
    let t,
        [e, i] = this.parentDimensions;
    if (this.isAttachedToDOM) t = this.div.getBoundingClientRect();
    else {
        let { currentLayer: e, div: i } = this,
            s = i.style.display,
            n = i.classList.contains("hidden");
        i.classList.remove("hidden"),
            (i.style.display = "hidden"),
            e.div.append(this.div),
            (t = i.getBoundingClientRect()),
            i.remove(),
            (i.style.display = s),
            i.classList.toggle("hidden", n);
    }
    this.rotation % 180 == this.parentRotation % 180
        ? ((this.width = t.width / e), (this.height = t.height / i))
        : ((this.width = t.height / e), (this.height = t.width / i)),
        this.fixAndSetPosition();
}
function cb(t) {
    return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(co, "");
}
function cv() {
    if ((this.editorDiv.replaceChildren(), f(cl, this)))
        for (let t of f(cl, this).split("\n")) {
            let e = document.createElement("div");
            e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e);
        }
}
function cA() {
    return f(cl, this).replaceAll("\xa0", " ");
}
function cy(t) {
    return t.replaceAll(" ", "\xa0");
}
function c_(t) {
    let { value: e, fontSize: i, color: s, pageIndex: n } = this._initialData;
    return (
        this.hasEditedComment ||
        this._hasBeenMoved ||
        t.value !== e ||
        t.fontSize !== i ||
        t.color.some((t, e) => t !== s[e]) ||
        t.pageIndex !== n
    );
}
(0, o.t)(cp, "_freeTextDefaultContent", ""),
    (0, o.t)(cp, "_internalPadding", 0),
    (0, o.t)(cp, "_defaultColor", null),
    (0, o.t)(cp, "_defaultFontSize", 10),
    (0, o.t)(cp, "_type", "freetext"),
    (0, o.t)(cp, "_editorType", _.FREETEXT);
var cx = class {
    toSVGPath() {
        D("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
        D("Abstract getter `box` must be implemented.");
    }
    serialize(t, e) {
        D("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t, e, i, s, n, a) {
        a ||= new Float32Array(t.length);
        for (let r = 0, o = t.length; r < o; r += 2) (a[r] = e + t[r] * s), (a[r + 1] = i + t[r + 1] * n);
        return a;
    }
    static _rescaleAndSwap(t, e, i, s, n, a) {
        a ||= new Float32Array(t.length);
        for (let r = 0, o = t.length; r < o; r += 2) (a[r] = e + t[r + 1] * s), (a[r + 1] = i + t[r] * n);
        return a;
    }
    static _translate(t, e, i, s) {
        s ||= new Float32Array(t.length);
        for (let n = 0, a = t.length; n < a; n += 2) (s[n] = e + t[n]), (s[n + 1] = i + t[n + 1]);
        return s;
    }
    static svgRound(t) {
        return Math.round(1e4 * t);
    }
    static _normalizePoint(t, e, i, s, n) {
        switch (n) {
            case 90:
                return [1 - e / i, t / s];
            case 180:
                return [1 - t / i, 1 - e / s];
            case 270:
                return [e / i, 1 - t / s];
            default:
                return [t / i, e / s];
        }
    }
    static _normalizePagePoint(t, e, i) {
        switch (i) {
            case 90:
                return [1 - e, t];
            case 180:
                return [1 - t, 1 - e];
            case 270:
                return [e, 1 - t];
            default:
                return [t, e];
        }
    }
    static createBezierPoints(t, e, i, s, n, a) {
        return [(t + 5 * i) / 6, (e + 5 * s) / 6, (5 * i + n) / 6, (5 * s + a) / 6, (i + n) / 2, (s + a) / 2];
    }
};
(0, o.t)(cx, "PRECISION", 1e-4);
var ck = new WeakMap(),
    cM = new WeakMap(),
    cS = new WeakMap(),
    cE = new WeakMap(),
    cC = new WeakMap(),
    cT = new WeakMap(),
    cP = new WeakMap(),
    cD = new WeakMap(),
    cI = new WeakMap(),
    cL = new WeakMap(),
    cR = new WeakMap(),
    cF = new WeakMap(),
    cN = new WeakMap(),
    cB = new WeakSet(),
    cO = class {
        constructor({ x: t, y: e }, i, s, n, a, r = 0) {
            u(this, cB),
                p(this, ck, void 0),
                p(this, cM, []),
                p(this, cS, void 0),
                p(this, cE, void 0),
                p(this, cC, []),
                p(this, cT, new Float32Array(18)),
                p(this, cP, void 0),
                p(this, cD, void 0),
                p(this, cI, void 0),
                p(this, cL, void 0),
                p(this, cR, void 0),
                p(this, cF, void 0),
                p(this, cN, []),
                g(ck, this, i),
                g(cF, this, n * s),
                g(cE, this, a),
                f(cT, this).set([NaN, NaN, NaN, NaN, t, e], 6),
                g(cS, this, r),
                g(cL, this, cV._ * s),
                g(cI, this, cq._ * s),
                g(cR, this, s),
                f(cN, this).push(t, e);
        }
        isEmpty() {
            return isNaN(f(cT, this)[8]);
        }
        add({ x: t, y: e }) {
            g(cP, this, t), g(cD, this, e);
            let [i, s, n, a] = f(ck, this),
                [r, o, l, h] = f(cT, this).subarray(8, 12),
                d = t - l,
                c = e - h,
                u = Math.hypot(d, c);
            if (u < f(cI, this)) return !1;
            let p = u - f(cL, this),
                m = p / u,
                w = m * d,
                b = m * c,
                v = r,
                A = o;
            (r = l), (o = h), (l += w), (h += b), f(cN, this)?.push(t, e);
            let y = (-b / p) * f(cF, this),
                _ = (w / p) * f(cF, this);
            return (f(cT, this).set(f(cT, this).subarray(2, 8), 0),
            f(cT, this).set([l + y, h + _], 4),
            f(cT, this).set(f(cT, this).subarray(14, 18), 12),
            f(cT, this).set([l - y, h - _], 16),
            isNaN(f(cT, this)[6]))
                ? (0 === f(cC, this).length &&
                      (f(cT, this).set([r + y, o + _], 2),
                      f(cC, this).push(NaN, NaN, NaN, NaN, (r + y - i) / n, (o + _ - s) / a),
                      f(cT, this).set([r - y, o - _], 14),
                      f(cM, this).push(NaN, NaN, NaN, NaN, (r - y - i) / n, (o - _ - s) / a)),
                  f(cT, this).set([v, A, r, o, l, h], 6),
                  !this.isEmpty())
                : ((f(cT, this).set([v, A, r, o, l, h], 6),
                  Math.abs(Math.atan2(A - o, v - r) - Math.atan2(b, w)) < Math.PI / 2)
                      ? (([r, o, l, h] = f(cT, this).subarray(2, 6)),
                        f(cC, this).push(NaN, NaN, NaN, NaN, ((r + l) / 2 - i) / n, ((o + h) / 2 - s) / a),
                        ([r, o, v, A] = f(cT, this).subarray(14, 18)),
                        f(cM, this).push(NaN, NaN, NaN, NaN, ((v + r) / 2 - i) / n, ((A + o) / 2 - s) / a))
                      : (([v, A, r, o, l, h] = f(cT, this).subarray(0, 6)),
                        f(cC, this).push(
                            ((v + 5 * r) / 6 - i) / n,
                            ((A + 5 * o) / 6 - s) / a,
                            ((5 * r + l) / 6 - i) / n,
                            ((5 * o + h) / 6 - s) / a,
                            ((r + l) / 2 - i) / n,
                            ((o + h) / 2 - s) / a,
                        ),
                        ([l, h, r, o, v, A] = f(cT, this).subarray(12, 18)),
                        f(cM, this).push(
                            ((v + 5 * r) / 6 - i) / n,
                            ((A + 5 * o) / 6 - s) / a,
                            ((5 * r + l) / 6 - i) / n,
                            ((5 * o + h) / 6 - s) / a,
                            ((r + l) / 2 - i) / n,
                            ((o + h) / 2 - s) / a,
                        )),
                  !0);
        }
        toSVGPath() {
            if (this.isEmpty()) return "";
            let t = f(cC, this),
                e = f(cM, this);
            if (isNaN(f(cT, this)[6]) && !this.isEmpty()) return d(cB, this, cU).call(this);
            let i = [];
            i.push(`M${t[4]} ${t[5]}`);
            for (let e = 6; e < t.length; e += 6)
                isNaN(t[e])
                    ? i.push(`L${t[e + 4]} ${t[e + 5]}`)
                    : i.push(`C${t[e]} ${t[e + 1]} ${t[e + 2]} ${t[e + 3]} ${t[e + 4]} ${t[e + 5]}`);
            d(cB, this, cH).call(this, i);
            for (let t = e.length - 6; t >= 6; t -= 6)
                isNaN(e[t])
                    ? i.push(`L${e[t + 4]} ${e[t + 5]}`)
                    : i.push(`C${e[t]} ${e[t + 1]} ${e[t + 2]} ${e[t + 3]} ${e[t + 4]} ${e[t + 5]}`);
            return d(cB, this, c$).call(this, i), i.join(" ");
        }
        newFreeDrawOutline(t, e, i, s, n, a) {
            return new c2(t, e, i, s, n, a);
        }
        getOutlines() {
            let t = f(cC, this),
                e = f(cM, this),
                i = f(cT, this),
                [s, n, a, r] = f(ck, this),
                o = new Float32Array((f(cN, this)?.length ?? 0) + 2);
            for (let t = 0, e = o.length - 2; t < e; t += 2)
                (o[t] = (f(cN, this)[t] - s) / a), (o[t + 1] = (f(cN, this)[t + 1] - n) / r);
            if (
                ((o[o.length - 2] = (f(cP, this) - s) / a),
                (o[o.length - 1] = (f(cD, this) - n) / r),
                isNaN(i[6]) && !this.isEmpty())
            )
                return d(cB, this, cj).call(this, o);
            let l = new Float32Array(f(cC, this).length + 24 + f(cM, this).length),
                h = t.length;
            for (let e = 0; e < h; e += 2) {
                if (isNaN(t[e])) {
                    l[e] = l[e + 1] = NaN;
                    continue;
                }
                (l[e] = t[e]), (l[e + 1] = t[e + 1]);
            }
            h = d(cB, this, cG).call(this, l, h);
            for (let t = e.length - 6; t >= 6; t -= 6)
                for (let i = 0; i < 6; i += 2) {
                    if (isNaN(e[t + i])) {
                        (l[h] = l[h + 1] = NaN), (h += 2);
                        continue;
                    }
                    (l[h] = e[t + i]), (l[h + 1] = e[t + i + 1]), (h += 2);
                }
            return (
                d(cB, this, cz).call(this, l, h),
                this.newFreeDrawOutline(l, o, f(ck, this), f(cR, this), f(cS, this), f(cE, this))
            );
        }
    };
function cW() {
    let t = f(cT, this).subarray(4, 6),
        e = f(cT, this).subarray(16, 18),
        [i, s, n, a] = f(ck, this);
    return [
        (f(cP, this) + (t[0] - e[0]) / 2 - i) / n,
        (f(cD, this) + (t[1] - e[1]) / 2 - s) / a,
        (f(cP, this) + (e[0] - t[0]) / 2 - i) / n,
        (f(cD, this) + (e[1] - t[1]) / 2 - s) / a,
    ];
}
function cU() {
    let [t, e, i, s] = f(ck, this),
        [n, a, r, o] = d(cB, this, cW).call(this);
    return `M${(f(cT, this)[2] - t) / i} ${(f(cT, this)[3] - e) / s} L${(f(cT, this)[4] - t) / i} ${(f(cT, this)[5] - e) / s} L${n} ${a} L${r} ${o} L${(f(cT, this)[16] - t) / i} ${(f(cT, this)[17] - e) / s} L${(f(cT, this)[14] - t) / i} ${(f(cT, this)[15] - e) / s} Z`;
}
function c$(t) {
    let e = f(cM, this);
    t.push(`L${e[4]} ${e[5]} Z`);
}
function cH(t) {
    let [e, i, s, n] = f(ck, this),
        a = f(cT, this).subarray(4, 6),
        r = f(cT, this).subarray(16, 18),
        [o, l, h, c] = d(cB, this, cW).call(this);
    t.push(`L${(a[0] - e) / s} ${(a[1] - i) / n} L${o} ${l} L${h} ${c} L${(r[0] - e) / s} ${(r[1] - i) / n}`);
}
function cj(t) {
    let e = f(cT, this),
        [i, s, n, a] = f(ck, this),
        [r, o, l, h] = d(cB, this, cW).call(this),
        c = new Float32Array(36);
    return (
        c.set(
            [
                NaN,
                NaN,
                NaN,
                NaN,
                (e[2] - i) / n,
                (e[3] - s) / a,
                NaN,
                NaN,
                NaN,
                NaN,
                (e[4] - i) / n,
                (e[5] - s) / a,
                NaN,
                NaN,
                NaN,
                NaN,
                r,
                o,
                NaN,
                NaN,
                NaN,
                NaN,
                l,
                h,
                NaN,
                NaN,
                NaN,
                NaN,
                (e[16] - i) / n,
                (e[17] - s) / a,
                NaN,
                NaN,
                NaN,
                NaN,
                (e[14] - i) / n,
                (e[15] - s) / a,
            ],
            0,
        ),
        this.newFreeDrawOutline(c, t, f(ck, this), f(cR, this), f(cS, this), f(cE, this))
    );
}
function cz(t, e) {
    let i = f(cM, this);
    return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e + 6;
}
function cG(t, e) {
    let i = f(cT, this).subarray(4, 6),
        s = f(cT, this).subarray(16, 18),
        [n, a, r, o] = f(ck, this),
        [l, h, c, u] = d(cB, this, cW).call(this);
    return (
        t.set(
            [
                NaN,
                NaN,
                NaN,
                NaN,
                (i[0] - n) / r,
                (i[1] - a) / o,
                NaN,
                NaN,
                NaN,
                NaN,
                l,
                h,
                NaN,
                NaN,
                NaN,
                NaN,
                c,
                u,
                NaN,
                NaN,
                NaN,
                NaN,
                (s[0] - n) / r,
                (s[1] - a) / o,
            ],
            e,
        ),
        e + 24
    );
}
var cV = { _: 8 },
    cq = { _: cV._ + 2 },
    cX = new WeakMap(),
    cK = new WeakMap(),
    cY = new WeakMap(),
    cQ = new WeakMap(),
    cJ = new WeakMap(),
    cZ = new WeakMap(),
    c0 = new WeakMap(),
    c1 = new WeakSet(),
    c2 = class extends cx {
        constructor(t, e, i, s, n, a) {
            super(),
                u(this, c1),
                p(this, cX, void 0),
                p(this, cK, new Float32Array(4)),
                p(this, cY, void 0),
                p(this, cQ, void 0),
                p(this, cJ, void 0),
                p(this, cZ, void 0),
                p(this, c0, void 0),
                g(c0, this, t),
                g(cJ, this, e),
                g(cX, this, i),
                g(cZ, this, s),
                g(cY, this, n),
                g(cQ, this, a),
                (this.firstPoint = [NaN, NaN]),
                (this.lastPoint = [NaN, NaN]),
                d(c1, this, c3).call(this, a);
            const [r, o, l, h] = f(cK, this);
            for (let e = 0, i = t.length; e < i; e += 2) (t[e] = (t[e] - r) / l), (t[e + 1] = (t[e + 1] - o) / h);
            for (let t = 0, i = e.length; t < i; t += 2) (e[t] = (e[t] - r) / l), (e[t + 1] = (e[t + 1] - o) / h);
        }
        toSVGPath() {
            let t = [`M${f(c0, this)[4]} ${f(c0, this)[5]}`];
            for (let e = 6, i = f(c0, this).length; e < i; e += 6) {
                if (isNaN(f(c0, this)[e])) {
                    t.push(`L${f(c0, this)[e + 4]} ${f(c0, this)[e + 5]}`);
                    continue;
                }
                t.push(
                    `C${f(c0, this)[e]} ${f(c0, this)[e + 1]} ${f(c0, this)[e + 2]} ${f(c0, this)[e + 3]} ${f(c0, this)[e + 4]} ${f(c0, this)[e + 5]}`,
                );
            }
            return t.push("Z"), t.join(" ");
        }
        serialize([t, e, i, s], n) {
            let a,
                r,
                o = i - t,
                l = s - e;
            switch (n) {
                case 0:
                    (a = cx._rescale(f(c0, this), t, s, o, -l)), (r = cx._rescale(f(cJ, this), t, s, o, -l));
                    break;
                case 90:
                    (a = cx._rescaleAndSwap(f(c0, this), t, e, o, l)),
                        (r = cx._rescaleAndSwap(f(cJ, this), t, e, o, l));
                    break;
                case 180:
                    (a = cx._rescale(f(c0, this), i, e, -o, l)), (r = cx._rescale(f(cJ, this), i, e, -o, l));
                    break;
                case 270:
                    (a = cx._rescaleAndSwap(f(c0, this), i, s, -o, -l)),
                        (r = cx._rescaleAndSwap(f(cJ, this), i, s, -o, -l));
            }
            return { outline: Array.from(a), points: [Array.from(r)] };
        }
        get box() {
            return f(cK, this);
        }
        newOutliner(t, e, i, s, n, a = 0) {
            return new cO(t, e, i, s, n, a);
        }
        getNewOutline(t, e) {
            let [i, s, n, a] = f(cK, this),
                [r, o, l, h] = f(cX, this),
                d = n * l,
                c = a * h,
                u = i * l + r,
                p = s * h + o,
                g = this.newOutliner(
                    { x: f(cJ, this)[0] * d + u, y: f(cJ, this)[1] * c + p },
                    f(cX, this),
                    f(cZ, this),
                    t,
                    f(cQ, this),
                    e ?? f(cY, this),
                );
            for (let t = 2; t < f(cJ, this).length; t += 2)
                g.add({ x: f(cJ, this)[t] * d + u, y: f(cJ, this)[t + 1] * c + p });
            return g.getOutlines();
        }
    };
function c3(t) {
    let e = f(c0, this),
        i = e[4],
        s = e[5],
        n = [i, s, i, s],
        a = i,
        r = s,
        o = i,
        l = s,
        h = t ? Math.max : Math.min,
        d = new Float32Array(4);
    for (let t = 6, c = e.length; t < c; t += 6) {
        let c = e[t + 4],
            u = e[t + 5];
        isNaN(e[t])
            ? (V.pointBoundingBox(c, u, n),
              r > u ? ((a = c), (r = u)) : r === u && (a = h(a, c)),
              l < u ? ((o = c), (l = u)) : l === u && (o = h(o, c)))
            : ((d[0] = d[1] = 1 / 0),
              (d[2] = d[3] = -1 / 0),
              V.bezierBoundingBox(i, s, ...e.slice(t, t + 6), d),
              V.rectBoundingBox(d[0], d[1], d[2], d[3], n),
              r > d[1] ? ((a = d[0]), (r = d[1])) : r === d[1] && (a = h(a, d[0])),
              l < d[3] ? ((o = d[2]), (l = d[3])) : l === d[3] && (o = h(o, d[2]))),
            (i = c),
            (s = u);
    }
    let c = f(cK, this);
    (c[0] = n[0] - f(cY, this)),
        (c[1] = n[1] - f(cY, this)),
        (c[2] = n[2] - n[0] + 2 * f(cY, this)),
        (c[3] = n[3] - n[1] + 2 * f(cY, this)),
        (this.firstPoint = [a, r]),
        (this.lastPoint = [o, l]);
}
var c5 = new WeakMap(),
    c4 = new WeakMap(),
    c6 = new WeakMap(),
    c8 = new WeakMap(),
    c7 = new WeakMap(),
    c9 = new WeakSet(),
    ut = class {
        constructor(t, e = 0, i = 0, s = !0) {
            u(this, c9),
                p(this, c5, void 0),
                p(this, c4, void 0),
                p(this, c6, void 0),
                p(this, c8, []),
                p(this, c7, []);
            const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            for (const { x: i, y: s, width: a, height: r } of t) {
                const t = 1e-4 * Math.floor((i - e) / 1e-4),
                    o = 1e-4 * Math.ceil((i + a + e) / 1e-4),
                    l = 1e-4 * Math.floor((s - e) / 1e-4),
                    h = 1e-4 * Math.ceil((s + r + e) / 1e-4),
                    d = [t, l, h, !0],
                    c = [o, l, h, !1];
                f(c8, this).push(d, c), V.rectBoundingBox(t, l, o, h, n);
            }
            const a = n[2] - n[0] + 2 * i,
                r = n[3] - n[1] + 2 * i,
                o = n[0] - i,
                l = n[1] - i;
            let h = s ? -1 / 0 : 1 / 0,
                d = 1 / 0;
            const c = f(c8, this).at(s ? -1 : -2),
                m = [c[0], c[2]];
            for (const t of f(c8, this)) {
                const [e, i, n, c] = t;
                !c && s
                    ? i < d
                        ? ((d = i), (h = e))
                        : i === d && (h = Math.max(h, e))
                    : c && !s && (i < d ? ((d = i), (h = e)) : i === d && (h = Math.min(h, e))),
                    (t[0] = (e - o) / a),
                    (t[1] = (i - l) / r),
                    (t[2] = (n - l) / r);
            }
            g(c5, this, new Float32Array([o, l, a, r])), g(c4, this, [h, d]), g(c6, this, m);
        }
        getOutlines() {
            f(c8, this).sort((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]);
            let t = [];
            for (let e of f(c8, this))
                e[3]
                    ? (t.push(...d(c9, this, ua).call(this, e)), d(c9, this, us).call(this, e))
                    : (d(c9, this, un).call(this, e), t.push(...d(c9, this, ua).call(this, e)));
            return d(c9, this, ue).call(this, t);
        }
    };
function ue(t) {
    let e,
        i = [],
        s = new Set();
    for (let e of t) {
        let [t, s, n] = e;
        i.push([t, s, e], [t, n, e]);
    }
    i.sort((t, e) => t[1] - e[1] || t[0] - e[0]);
    for (let t = 0, e = i.length; t < e; t += 2) {
        let e = i[t][2],
            n = i[t + 1][2];
        e.push(n), n.push(e), s.add(e), s.add(n);
    }
    let n = [];
    for (; s.size > 0; ) {
        let t = s.values().next().value,
            [i, a, r, o, l] = t;
        s.delete(t);
        let h = i,
            d = a;
        for (e = [i, r], n.push(e); ; ) {
            let t;
            if (s.has(o)) t = o;
            else if (s.has(l)) t = l;
            else break;
            s.delete(t),
                ([i, a, r, o, l] = t),
                h !== i && (e.push(h, d, i, d === a ? a : r), (h = i)),
                (d = d === a ? r : a);
        }
        e.push(h, d);
    }
    return new ul(n, f(c5, this), f(c4, this), f(c6, this));
}
function ui(t) {
    let e = f(c7, this),
        i = 0,
        s = e.length - 1;
    for (; i <= s; ) {
        let n = (i + s) >> 1,
            a = e[n][0];
        if (a === t) return n;
        a < t ? (i = n + 1) : (s = n - 1);
    }
    return s + 1;
}
function us([, t, e]) {
    let i = d(c9, this, ui).call(this, t);
    f(c7, this).splice(i, 0, [t, e]);
}
function un([, t, e]) {
    let i = d(c9, this, ui).call(this, t);
    for (let s = i; s < f(c7, this).length; s++) {
        let [i, n] = f(c7, this)[s];
        if (i !== t) break;
        if (i === t && n === e) return void f(c7, this).splice(s, 1);
    }
    for (let s = i - 1; s >= 0; s--) {
        let [i, n] = f(c7, this)[s];
        if (i !== t) break;
        if (i === t && n === e) return void f(c7, this).splice(s, 1);
    }
}
function ua(t) {
    let [e, i, s] = t,
        n = [[e, i, s]],
        a = d(c9, this, ui).call(this, s);
    for (let t = 0; t < a; t++) {
        let [i, s] = f(c7, this)[t];
        for (let t = 0, a = n.length; t < a; t++) {
            let [, r, o] = n[t];
            if (!(s <= r) && !(o <= i)) {
                if (r >= i) {
                    if (o > s) n[t][1] = s;
                    else {
                        if (1 === a) return [];
                        n.splice(t, 1), t--, a--;
                    }
                    continue;
                }
                (n[t][2] = i), o > s && n.push([e, s, o]);
            }
        }
    }
    return n;
}
var ur = new WeakMap(),
    uo = new WeakMap(),
    ul = class extends cx {
        constructor(t, e, i, s) {
            super(),
                p(this, ur, void 0),
                p(this, uo, void 0),
                g(uo, this, t),
                g(ur, this, e),
                (this.firstPoint = i),
                (this.lastPoint = s);
        }
        toSVGPath() {
            let t = [];
            for (let e of f(uo, this)) {
                let [i, s] = e;
                t.push(`M${i} ${s}`);
                for (let n = 2; n < e.length; n += 2) {
                    let a = e[n],
                        r = e[n + 1];
                    a === i ? (t.push(`V${r}`), (s = r)) : r === s && (t.push(`H${a}`), (i = a));
                }
                t.push("Z");
            }
            return t.join(" ");
        }
        serialize([t, e, i, s], n) {
            let a = [],
                r = i - t,
                o = s - e;
            for (let e of f(uo, this)) {
                let i = Array(e.length);
                for (let n = 0; n < e.length; n += 2) (i[n] = t + e[n] * r), (i[n + 1] = s - e[n + 1] * o);
                a.push(i);
            }
            return a;
        }
        get box() {
            return f(ur, this);
        }
        get classNamesForOutlining() {
            return ["highlightOutline"];
        }
    },
    uh = class extends cO {
        newFreeDrawOutline(t, e, i, s, n, a) {
            return new ud(t, e, i, s, n, a);
        }
    },
    ud = class extends c2 {
        newOutliner(t, e, i, s, n, a = 0) {
            return new uh(t, e, i, s, n, a);
        }
    },
    uc = new WeakMap(),
    uu = new WeakMap(),
    up = new WeakMap(),
    ug = new WeakMap(),
    uf = new WeakMap(),
    um = new WeakMap(),
    uw = new WeakMap(),
    ub = new WeakMap(),
    uv = new WeakMap(),
    uA = new WeakMap(),
    uy = new WeakMap(),
    u_ = new WeakMap(),
    ux = new WeakMap(),
    uk = new WeakMap(),
    uM = new WeakMap(),
    uS = new WeakMap(),
    uE = new WeakMap(),
    uC = new WeakMap(),
    uT = new WeakSet(),
    uP = class t extends sH {
        static get _keyboardManager() {
            let e = t.prototype;
            return F(
                this,
                "_keyboardManager",
                new ev([
                    [["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, { args: [0] }],
                    [["ArrowRight", "mac+ArrowRight"], e._moveCaret, { args: [1] }],
                    [["ArrowUp", "mac+ArrowUp"], e._moveCaret, { args: [2] }],
                    [["ArrowDown", "mac+ArrowDown"], e._moveCaret, { args: [3] }],
                ]),
            );
        }
        constructor(e) {
            super({ ...e, name: "highlightEditor" }),
                u(this, uT),
                p(this, uc, null),
                p(this, uu, 0),
                p(this, up, void 0),
                p(this, ug, null),
                p(this, uf, null),
                p(this, um, null),
                p(this, uw, null),
                p(this, ub, 0),
                p(this, uv, null),
                p(this, uA, null),
                p(this, uy, null),
                p(this, u_, !1),
                p(this, ux, null),
                p(this, uk, null),
                p(this, uM, null),
                p(this, uS, ""),
                p(this, uE, void 0),
                p(this, uC, ""),
                (this.color = e.color || t._defaultColor),
                g(uE, this, e.thickness || t._defaultThickness),
                (this.opacity = e.opacity || t._defaultOpacity),
                g(up, this, e.boxes || null),
                g(uC, this, e.methodOfCreation || ""),
                g(uS, this, e.text || ""),
                (this._isDraggable = !1),
                (this.defaultL10nId = "pdfjs-editor-highlight-editor"),
                e.highlightId > -1
                    ? (g(u_, this, !0), d(uT, this, uI).call(this, e), d(uT, this, uB).call(this))
                    : f(up, this) &&
                      (g(uc, this, e.anchorNode),
                      g(uu, this, e.anchorOffset),
                      g(uw, this, e.focusNode),
                      g(ub, this, e.focusOffset),
                      d(uT, this, uD).call(this),
                      d(uT, this, uB).call(this),
                      this.rotate(this.rotation)),
                this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
        }
        get telemetryInitialData() {
            return {
                action: "added",
                type: f(u_, this) ? "free_highlight" : "highlight",
                color: this._uiManager.getNonHCMColorName(this.color),
                thickness: f(uE, this),
                methodOfCreation: f(uC, this),
            };
        }
        get telemetryFinalData() {
            return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) };
        }
        static computeTelemetryFinalData(t) {
            return { numberOfColors: t.get("color").size };
        }
        static initialize(e, i) {
            sH.initialize(e, i), (t._defaultColor ||= i.highlightColors?.values().next().value || "#fff066");
        }
        static updateDefaultParams(e, i) {
            switch (e) {
                case x.HIGHLIGHT_COLOR:
                    t._defaultColor = i;
                    break;
                case x.HIGHLIGHT_THICKNESS:
                    t._defaultThickness = i;
            }
        }
        translateInPage(t, e) {}
        get toolbarPosition() {
            return f(uk, this);
        }
        get commentButtonPosition() {
            return f(ux, this);
        }
        updateParams(t, e) {
            switch (t) {
                case x.HIGHLIGHT_COLOR:
                    d(uT, this, uL).call(this, e);
                    break;
                case x.HIGHLIGHT_THICKNESS:
                    d(uT, this, uR).call(this, e);
            }
        }
        static get defaultPropertiesToUpdate() {
            return [
                [x.HIGHLIGHT_COLOR, t._defaultColor],
                [x.HIGHLIGHT_THICKNESS, t._defaultThickness],
            ];
        }
        get propertiesToUpdate() {
            return [
                [x.HIGHLIGHT_COLOR, this.color || t._defaultColor],
                [x.HIGHLIGHT_THICKNESS, f(uE, this) || t._defaultThickness],
                [x.HIGHLIGHT_FREE, f(u_, this)],
            ];
        }
        onUpdatedColor() {
            this.parent?.drawLayer.updateProperties(f(uy, this), {
                root: { fill: this.color, "fill-opacity": this.opacity },
            }),
                f(uf, this)?.updateColor(this.color),
                super.onUpdatedColor();
        }
        get toolbarButtons() {
            return this._uiManager.highlightColors
                ? [["colorPicker", g(uf, this, new hu({ editor: this }))]]
                : super.toolbarButtons;
        }
        disableEditing() {
            super.disableEditing(), this.div.classList.toggle("disabled", !0);
        }
        enableEditing() {
            super.enableEditing(), this.div.classList.toggle("disabled", !1);
        }
        fixAndSetPosition() {
            return super.fixAndSetPosition(d(uT, this, u$).call(this));
        }
        getBaseTranslation() {
            return [0, 0];
        }
        getRect(t, e) {
            return super.getRect(t, e, d(uT, this, u$).call(this));
        }
        onceAdded(t) {
            this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
        }
        remove() {
            d(uT, this, uN).call(this), this._reportTelemetry({ action: "deleted" }), super.remove();
        }
        rebuild() {
            !this.parent ||
                (super.rebuild(),
                null !== this.div && (d(uT, this, uB).call(this), this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(t) {
            let e = !1;
            this.parent && !t
                ? d(uT, this, uN).call(this)
                : t &&
                  (d(uT, this, uB).call(this, t), (e = !this.parent && this.div?.classList.contains("selectedEditor"))),
                super.setParent(t),
                this.show(this._isVisible),
                e && this.select();
        }
        rotate(e) {
            let i,
                { drawLayer: s } = this.parent;
            f(u_, this)
                ? ((e = (e - this.rotation + 360) % 360), (i = uO.call(t, f(uA, this).box, e)))
                : (i = uO.call(t, [this.x, this.y, this.width, this.height], e)),
                s.updateProperties(f(uy, this), { bbox: i, root: { "data-main-rotation": e } }),
                s.updateProperties(f(uM, this), {
                    bbox: uO.call(t, f(um, this).box, e),
                    root: { "data-main-rotation": e },
                });
        }
        render() {
            if (this.div) return this.div;
            let t = super.render();
            f(uS, this) && (t.setAttribute("aria-label", f(uS, this)), t.setAttribute("role", "mark")),
                f(u_, this)
                    ? t.classList.add("free")
                    : this.div.addEventListener("keydown", d(uT, this, uW).bind(this), {
                          signal: this._uiManager._signal,
                      });
            let e = g(uv, this, document.createElement("div"));
            return (
                t.append(e),
                e.setAttribute("aria-hidden", "true"),
                (e.className = "internal"),
                (e.style.clipPath = f(ug, this)),
                this.setDims(),
                t9(this, f(uv, this), ["pointerover", "pointerleave"]),
                this.enableEditing(),
                t
            );
        }
        pointerover() {
            this.isSelected || this.parent?.drawLayer.updateProperties(f(uM, this), { rootClass: { hovered: !0 } });
        }
        pointerleave() {
            this.isSelected || this.parent?.drawLayer.updateProperties(f(uM, this), { rootClass: { hovered: !1 } });
        }
        _moveCaret(t) {
            switch ((this.parent.unselect(this), t)) {
                case 0:
                case 2:
                    d(uT, this, uU).call(this, !0);
                    break;
                case 1:
                case 3:
                    d(uT, this, uU).call(this, !1);
            }
        }
        select() {
            super.select(),
                f(uM, this) &&
                    this.parent?.drawLayer.updateProperties(f(uM, this), { rootClass: { hovered: !1, selected: !0 } });
        }
        unselect() {
            super.unselect(),
                f(uM, this) &&
                    (this.parent?.drawLayer.updateProperties(f(uM, this), { rootClass: { selected: !1 } }),
                    f(u_, this) || d(uT, this, uU).call(this, !1));
        }
        get _mustFixPosition() {
            return !f(u_, this);
        }
        show(t = this._isVisible) {
            super.show(t),
                this.parent &&
                    (this.parent.drawLayer.updateProperties(f(uy, this), { rootClass: { hidden: !t } }),
                    this.parent.drawLayer.updateProperties(f(uM, this), { rootClass: { hidden: !t } }));
        }
        static startHighlighting(e, i, { target: s, x: n, y: a }) {
            let { x: r, y: o, width: l, height: h } = s.getBoundingClientRect(),
                c = new AbortController(),
                u = e.combinedSignal(c),
                p = (i) => {
                    c.abort(), d(t, this, uG).call(this, e, i);
                };
            window.addEventListener("blur", p, { signal: u }),
                window.addEventListener("pointerup", p, { signal: u }),
                window.addEventListener("pointerdown", tu, { capture: !0, passive: !1, signal: u }),
                window.addEventListener("contextmenu", tc, { signal: u }),
                s.addEventListener("pointermove", d(t, this, uz).bind(this, e), { signal: u }),
                (this._freeHighlight = new uh(
                    { x: n, y: a },
                    [r, o, l, h],
                    e.scale,
                    this._defaultThickness / 2,
                    i,
                    0.001,
                )),
                ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = e.drawLayer.draw(
                    {
                        bbox: [0, 0, 1, 1],
                        root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity },
                        rootClass: { highlight: !0, free: !0 },
                        path: { d: this._freeHighlight.toSVGPath() },
                    },
                    !0,
                    !0,
                ));
        }
        static async deserialize(t, e, i) {
            let s = null;
            if (t instanceof dY) {
                let {
                    data: {
                        quadPoints: e,
                        rect: i,
                        rotation: n,
                        id: a,
                        color: r,
                        opacity: o,
                        popupRef: l,
                        richText: h,
                        contentsObj: d,
                        creationDate: c,
                        modificationDate: u,
                    },
                    parent: {
                        page: { pageNumber: p },
                    },
                } = t;
                s = t = {
                    annotationType: _.HIGHLIGHT,
                    color: Array.from(r),
                    opacity: o,
                    quadPoints: e,
                    boxes: null,
                    pageIndex: p - 1,
                    rect: i.slice(0),
                    rotation: n,
                    annotationElementId: a,
                    id: a,
                    deleted: !1,
                    popupRef: l,
                    richText: h,
                    comment: d?.str || null,
                    creationDate: c,
                    modificationDate: u,
                };
            } else if (t instanceof dX) {
                let {
                    data: {
                        inkLists: e,
                        rect: i,
                        rotation: n,
                        id: a,
                        color: r,
                        borderStyle: { rawWidth: o },
                        popupRef: l,
                        richText: h,
                        contentsObj: d,
                        creationDate: c,
                        modificationDate: u,
                    },
                    parent: {
                        page: { pageNumber: p },
                    },
                } = t;
                s = t = {
                    annotationType: _.HIGHLIGHT,
                    color: Array.from(r),
                    thickness: o,
                    inkLists: e,
                    boxes: null,
                    pageIndex: p - 1,
                    rect: i.slice(0),
                    rotation: n,
                    annotationElementId: a,
                    id: a,
                    deleted: !1,
                    popupRef: l,
                    richText: h,
                    comment: d?.str || null,
                    creationDate: c,
                    modificationDate: u,
                };
            }
            let { color: n, quadPoints: a, inkLists: r, opacity: o } = t,
                l = await super.deserialize(t, e, i);
            (l.color = V.makeHexColor(...n)),
                (l.opacity = o || 1),
                r && g(uE, l, t.thickness),
                (l._initialData = s),
                t.comment && l.setCommentData(t);
            let [h, c] = l.pageDimensions,
                [u, p] = l.pageTranslation;
            if (a) {
                let t = g(up, l, []);
                for (let e = 0; e < a.length; e += 8)
                    t.push({
                        x: (a[e] - u) / h,
                        y: 1 - (a[e + 1] - p) / c,
                        width: (a[e + 2] - a[e]) / h,
                        height: (a[e + 1] - a[e + 5]) / c,
                    });
                d(uT, l, uD).call(l), d(uT, l, uB).call(l), l.rotate(l.rotation);
            } else if (r) {
                g(u_, l, !0);
                let t = r[0],
                    i = { x: t[0] - u, y: c - (t[1] - p) },
                    s = new uh(i, [0, 0, h, c], 1, f(uE, l) / 2, !0, 0.001);
                for (let e = 0, n = t.length; e < n; e += 2) (i.x = t[e] - u), (i.y = c - (t[e + 1] - p)), s.add(i);
                let { id: n, clipPathId: a } = e.drawLayer.draw(
                    {
                        bbox: [0, 0, 1, 1],
                        root: { viewBox: "0 0 1 1", fill: l.color, "fill-opacity": l._defaultOpacity },
                        rootClass: { highlight: !0, free: !0 },
                        path: { d: s.toSVGPath() },
                    },
                    !0,
                    !0,
                );
                d(uT, l, uI).call(l, { highlightOutlines: s.getOutlines(), highlightId: n, clipPathId: a }),
                    d(uT, l, uB).call(l),
                    l.rotate(l.parentRotation);
            }
            return l;
        }
        serialize(t = !1) {
            if (this.isEmpty() || t) return null;
            if (this.deleted) return this.serializeDeleted();
            let e = sH._colorManager.convert(this._uiManager.getNonHCMColor(this.color)),
                i = super.serialize(t);
            return (Object.assign(i, {
                color: e,
                opacity: this.opacity,
                thickness: f(uE, this),
                quadPoints: d(uT, this, uH).call(this),
                outlines: d(uT, this, uj).call(this, i.rect),
            }),
            this.addComment(i),
            this.annotationElementId && !d(uT, this, uV).call(this, i))
                ? null
                : ((i.id = this.annotationElementId), i);
        }
        renderAnnotationElement(t) {
            return this.deleted ? t.hide() : t.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null;
        }
        static canCreateNewEmptyEditor() {
            return !1;
        }
    };
function uD() {
    g(uA, this, new ut(f(up, this), 0.001).getOutlines()),
        ([this.x, this.y, this.width, this.height] = f(uA, this).box),
        g(um, this, new ut(f(up, this), 0.0025, 0.001, "ltr" === this._uiManager.direction).getOutlines());
    let { firstPoint: t } = f(uA, this);
    g(ux, this, [(t[0] - this.x) / this.width, (t[1] - this.y) / this.height]);
    let { lastPoint: e } = f(um, this);
    g(uk, this, [(e[0] - this.x) / this.width, (e[1] - this.y) / this.height]);
}
function uI({ highlightOutlines: t, highlightId: e, clipPathId: i }) {
    if ((g(uA, this, t), g(um, this, t.getNewOutline(f(uE, this) / 2 + 1.5, 0.0025)), e >= 0))
        g(uy, this, e),
            g(ug, this, i),
            this.parent.drawLayer.finalizeDraw(e, { bbox: t.box, path: { d: t.toSVGPath() } }),
            g(
                uM,
                this,
                this.parent.drawLayer.drawOutline(
                    {
                        rootClass: { highlightOutline: !0, free: !0 },
                        bbox: f(um, this).box,
                        path: { d: f(um, this).toSVGPath() },
                    },
                    !0,
                ),
            );
    else if (this.parent) {
        let e = this.parent.viewport.rotation;
        this.parent.drawLayer.updateProperties(f(uy, this), {
            bbox: uO.call(uP, f(uA, this).box, (e - this.rotation + 360) % 360),
            path: { d: t.toSVGPath() },
        }),
            this.parent.drawLayer.updateProperties(f(uM, this), {
                bbox: uO.call(uP, f(um, this).box, e),
                path: { d: f(um, this).toSVGPath() },
            });
    }
    let [s, n, a, r] = t.box;
    switch (this.rotation) {
        case 0:
            (this.x = s), (this.y = n), (this.width = a), (this.height = r);
            break;
        case 90: {
            let [t, e] = this.parentDimensions;
            (this.x = n), (this.y = 1 - s), (this.width = (a * e) / t), (this.height = (r * t) / e);
            break;
        }
        case 180:
            (this.x = 1 - s), (this.y = 1 - n), (this.width = a), (this.height = r);
            break;
        case 270: {
            let [t, e] = this.parentDimensions;
            (this.x = 1 - n), (this.y = s), (this.width = (a * e) / t), (this.height = (r * t) / e);
        }
    }
    let { firstPoint: o } = t;
    g(ux, this, [(o[0] - s) / a, (o[1] - n) / r]);
    let { lastPoint: l } = f(um, this);
    g(uk, this, [(l[0] - s) / a, (l[1] - n) / r]);
}
function uL(t) {
    let e = (t, e) => {
            (this.color = t), (this.opacity = e), this.onUpdatedColor();
        },
        i = this.color,
        s = this.opacity;
    this.addCommands({
        cmd: e.bind(this, t, uP._defaultOpacity),
        undo: e.bind(this, i, s),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: x.HIGHLIGHT_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
    }),
        this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(t) }, !0);
}
function uR(t) {
    let e = f(uE, this),
        i = (t) => {
            g(uE, this, t), d(uT, this, uF).call(this, t);
        };
    this.addCommands({
        cmd: i.bind(this, t),
        undo: i.bind(this, e),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: x.INK_THICKNESS,
        overwriteIfSameType: !0,
        keepUndo: !0,
    }),
        this._reportTelemetry({ action: "thickness_changed", thickness: t }, !0);
}
function uF(t) {
    f(u_, this) &&
        (d(uT, this, uI).call(this, { highlightOutlines: f(uA, this).getNewOutline(t / 2) }),
        this.fixAndSetPosition(),
        this.setDims());
}
function uN() {
    null !== f(uy, this) &&
        this.parent &&
        (this.parent.drawLayer.remove(f(uy, this)),
        g(uy, this, null),
        this.parent.drawLayer.remove(f(uM, this)),
        g(uM, this, null));
}
function uB(t = this.parent) {
    null === f(uy, this) &&
        (({ id: m(g, [uy, this])._, clipPathId: m(g, [ug, this])._ } = t.drawLayer.draw(
            {
                bbox: f(uA, this).box,
                root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity },
                rootClass: { highlight: !0, free: f(u_, this) },
                path: { d: f(uA, this).toSVGPath() },
            },
            !1,
            !0,
        )),
        g(
            uM,
            this,
            t.drawLayer.drawOutline(
                {
                    rootClass: { highlightOutline: !0, free: f(u_, this) },
                    bbox: f(um, this).box,
                    path: { d: f(um, this).toSVGPath() },
                },
                f(u_, this),
            ),
        ),
        f(uv, this) && (f(uv, this).style.clipPath = f(ug, this)));
}
function uO([t, e, i, s], n) {
    switch (n) {
        case 90:
            return [1 - e - s, t, s, i];
        case 180:
            return [1 - t - i, 1 - e - s, i, s];
        case 270:
            return [e, 1 - t - i, s, i];
    }
    return [t, e, i, s];
}
function uW(t) {
    uP._keyboardManager.exec(this, t);
}
function uU(t) {
    if (!f(uc, this)) return;
    let e = window.getSelection();
    t ? e.setPosition(f(uc, this), f(uu, this)) : e.setPosition(f(uw, this), f(ub, this));
}
function u$() {
    return f(u_, this) ? this.rotation : 0;
}
function uH() {
    if (f(u_, this)) return null;
    let [t, e] = this.pageDimensions,
        [i, s] = this.pageTranslation,
        n = f(up, this),
        a = new Float32Array(8 * n.length),
        r = 0;
    for (let { x: o, y: l, width: h, height: d } of n) {
        let n = o * t + i,
            c = (1 - l) * e + s;
        (a[r] = a[r + 4] = n),
            (a[r + 1] = a[r + 3] = c),
            (a[r + 2] = a[r + 6] = n + h * t),
            (a[r + 5] = a[r + 7] = c - d * e),
            (r += 8);
    }
    return a;
}
function uj(t) {
    return f(uA, this).serialize(t, d(uT, this, u$).call(this));
}
function uz(t, e) {
    this._freeHighlight.add(e) &&
        t.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
}
function uG(t, e) {
    this._freeHighlight.isEmpty()
        ? t.drawLayer.remove(this._freeHighlightId)
        : t.createAndAddNewEditor(e, !1, {
              highlightId: this._freeHighlightId,
              highlightOutlines: this._freeHighlight.getOutlines(),
              clipPathId: this._freeHighlightClipId,
              methodOfCreation: "main_toolbar",
          }),
        (this._freeHighlightId = -1),
        (this._freeHighlight = null),
        (this._freeHighlightClipId = "");
}
function uV(t) {
    let { color: e } = this._initialData;
    return this.hasEditedComment || t.color.some((t, i) => t !== e[i]);
}
(0, o.t)(uP, "_defaultColor", null),
    (0, o.t)(uP, "_defaultOpacity", 1),
    (0, o.t)(uP, "_defaultThickness", 12),
    (0, o.t)(uP, "_type", "highlight"),
    (0, o.t)(uP, "_editorType", _.HIGHLIGHT),
    (0, o.t)(uP, "_freeHighlightId", -1),
    (0, o.t)(uP, "_freeHighlight", null),
    (0, o.t)(uP, "_freeHighlightClipId", "");
var uq = new WeakMap(),
    uX = class {
        constructor() {
            p(this, uq, Object.create(null));
        }
        updateProperty(t, e) {
            (this[t] = e), this.updateSVGProperty(t, e);
        }
        updateProperties(t) {
            if (t) for (let [e, i] of Object.entries(t)) e.startsWith("_") || this.updateProperty(e, i);
        }
        updateSVGProperty(t, e) {
            f(uq, this)[t] = e;
        }
        toSVGProperties() {
            let t = f(uq, this);
            return g(uq, this, Object.create(null)), { root: t };
        }
        reset() {
            g(uq, this, Object.create(null));
        }
        updateAll(t = this) {
            this.updateProperties(t);
        }
        clone() {
            D("Not implemented");
        }
    },
    uK = new WeakMap(),
    uY = new WeakMap(),
    uQ = new WeakSet(),
    uJ = class t extends sH {
        constructor(t) {
            super(t),
                u(this, uQ),
                p(this, uK, null),
                p(this, uY, void 0),
                (0, o.t)(this, "_colorPicker", null),
                (0, o.t)(this, "_drawId", null),
                g(uY, this, t.mustBeCommitted || !1),
                this._addOutlines(t);
        }
        onUpdatedColor() {
            this._colorPicker?.update(this.color), super.onUpdatedColor();
        }
        _addOutlines(t) {
            t.drawOutlines && (d(uQ, this, uZ).call(this, t), d(uQ, this, u2).call(this));
        }
        static _mergeSVGProperties(t, e) {
            let i = new Set(Object.keys(t));
            for (let [s, n] of Object.entries(e)) i.has(s) ? Object.assign(t[s], n) : (t[s] = n);
            return t;
        }
        static getDefaultDrawingOptions(t) {
            D("Not implemented");
        }
        static get typesMap() {
            D("Not implemented");
        }
        static get isDrawer() {
            return !0;
        }
        static get supportMultipleDrawings() {
            return !1;
        }
        static updateDefaultParams(t, e) {
            let i = this.typesMap.get(t);
            i && this._defaultDrawingOptions.updateProperty(i, e),
                this._currentParent &&
                    (u8._.updateProperty(i, e),
                    this._currentParent.drawLayer.updateProperties(
                        this._currentDrawId,
                        this._defaultDrawingOptions.toSVGProperties(),
                    ));
        }
        updateParams(t, e) {
            let i = this.constructor.typesMap.get(t);
            i && this._updateProperty(t, i, e);
        }
        static get defaultPropertiesToUpdate() {
            let t = [],
                e = this._defaultDrawingOptions;
            for (let [i, s] of this.typesMap) t.push([i, e[s]]);
            return t;
        }
        get propertiesToUpdate() {
            let t = [],
                { _drawingOptions: e } = this;
            for (let [i, s] of this.constructor.typesMap) t.push([i, e[s]]);
            return t;
        }
        _updateProperty(t, e, i) {
            let s = this._drawingOptions,
                n = s[e],
                a = (i) => {
                    s.updateProperty(e, i);
                    let n = f(uK, this).updateProperty(e, i);
                    n && d(uQ, this, u4).call(this, n),
                        this.parent?.drawLayer.updateProperties(this._drawId, s.toSVGProperties()),
                        t === this.colorType && this.onUpdatedColor();
                };
            this.addCommands({
                cmd: a.bind(this, i),
                undo: a.bind(this, n),
                post: this._uiManager.updateUI.bind(this._uiManager, this),
                mustExec: !0,
                type: t,
                overwriteIfSameType: !0,
                keepUndo: !0,
            });
        }
        _onResizing() {
            this.parent?.drawLayer.updateProperties(
                this._drawId,
                t._mergeSVGProperties(f(uK, this).getPathResizingSVGProperties(d(uQ, this, u5).call(this)), {
                    bbox: d(uQ, this, u6).call(this),
                }),
            );
        }
        _onResized() {
            this.parent?.drawLayer.updateProperties(
                this._drawId,
                t._mergeSVGProperties(f(uK, this).getPathResizedSVGProperties(d(uQ, this, u5).call(this)), {
                    bbox: d(uQ, this, u6).call(this),
                }),
            );
        }
        _onTranslating(t, e) {
            this.parent?.drawLayer.updateProperties(this._drawId, { bbox: d(uQ, this, u6).call(this) });
        }
        _onTranslated() {
            this.parent?.drawLayer.updateProperties(
                this._drawId,
                t._mergeSVGProperties(
                    f(uK, this).getPathTranslatedSVGProperties(d(uQ, this, u5).call(this), this.parentDimensions),
                    { bbox: d(uQ, this, u6).call(this) },
                ),
            );
        }
        _onStartDragging() {
            this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: !0 } });
        }
        _onStopDragging() {
            this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: !1 } });
        }
        commit() {
            super.commit(), this.disableEditMode(), this.disableEditing();
        }
        disableEditing() {
            super.disableEditing(), this.div.classList.toggle("disabled", !0);
        }
        enableEditing() {
            super.enableEditing(), this.div.classList.toggle("disabled", !1);
        }
        getBaseTranslation() {
            return [0, 0];
        }
        get isResizable() {
            return !0;
        }
        onceAdded(t) {
            this.annotationElementId || this.parent.addUndoableEditor(this),
                (this._isDraggable = !0),
                f(uY, this) &&
                    (g(uY, this, !1),
                    this.commit(),
                    this.parent.setSelected(this),
                    t && this.isOnScreen && this.div.focus());
        }
        remove() {
            d(uQ, this, u1).call(this), super.remove();
        }
        rebuild() {
            !this.parent ||
                (super.rebuild(),
                null !== this.div &&
                    (d(uQ, this, u2).call(this),
                    d(uQ, this, u4).call(this, f(uK, this).box),
                    this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(t) {
            let e = !1;
            this.parent && !t
                ? (this._uiManager.removeShouldRescale(this), d(uQ, this, u1).call(this))
                : t &&
                  (this._uiManager.addShouldRescale(this),
                  d(uQ, this, u2).call(this, t),
                  (e = !this.parent && this.div?.classList.contains("selectedEditor"))),
                super.setParent(t),
                e && this.select();
        }
        rotate() {
            this.parent &&
                this.parent.drawLayer.updateProperties(
                    this._drawId,
                    t._mergeSVGProperties(
                        { bbox: d(uQ, this, u6).call(this) },
                        f(uK, this).updateRotation((this.parentRotation - this.rotation + 360) % 360),
                    ),
                );
        }
        onScaleChanging() {
            this.parent &&
                d(uQ, this, u4).call(
                    this,
                    f(uK, this).updateParentDimensions(this.parentDimensions, this.parent.scale),
                );
        }
        static onScaleChangingWhenDrawing() {}
        render() {
            let t, e;
            if (this.div) return this.div;
            this._isCopy && ((t = this.x), (e = this.y));
            let i = super.render();
            i.classList.add("draw");
            let s = document.createElement("div");
            return (
                i.append(s),
                s.setAttribute("aria-hidden", "true"),
                (s.className = "internal"),
                this.setDims(),
                this._uiManager.addShouldRescale(this),
                this.disableEditing(),
                this._isCopy && this._moveAfterPaste(t, e),
                i
            );
        }
        static createDrawerInstance(t, e, i, s, n) {
            D("Not implemented");
        }
        static startDrawing(t, e, i, s) {
            let { target: n, offsetX: a, offsetY: r, pointerId: o, pointerType: l } = s;
            if (et.isInitializedAndDifferentPointerType(l)) return;
            let {
                    viewport: { rotation: h },
                } = t,
                { width: d, height: c } = n.getBoundingClientRect(),
                u = (u7._ = new AbortController()),
                p = t.combinedSignal(u);
            (et.setPointer(l, o),
            window.addEventListener(
                "pointerup",
                (t) => {
                    et.isSamePointerIdOrRemove(t.pointerId) && this._endDraw(t);
                },
                { signal: p },
            ),
            window.addEventListener(
                "pointercancel",
                (t) => {
                    et.isSamePointerIdOrRemove(t.pointerId) && this._currentParent.endDrawingSession();
                },
                { signal: p },
            ),
            window.addEventListener(
                "pointerdown",
                (t) => {
                    et.isSamePointerType(t.pointerType) &&
                        (et.initializeAndAddPointerId(t.pointerId),
                        u8._.isCancellable() &&
                            (u8._.removeLastElement(),
                            u8._.isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
                },
                { capture: !0, passive: !1, signal: p },
            ),
            window.addEventListener("contextmenu", tc, { signal: p }),
            n.addEventListener("pointermove", this._drawMove.bind(this), { signal: p }),
            n.addEventListener(
                "touchmove",
                (t) => {
                    et.isSameTimeStamp(t.timeStamp) && tu(t);
                },
                { signal: p },
            ),
            t.toggleDrawing(),
            e._editorUndoBar?.hide(),
            u8._)
                ? t.drawLayer.updateProperties(this._currentDrawId, u8._.startNew(a, r, d, c, h))
                : (e.updateUIForDefaultProperties(this),
                  (u8._ = this.createDrawerInstance(a, r, d, c, h)),
                  (u9._ = this.getDefaultDrawingOptions()),
                  (this._currentParent = t),
                  ({ id: this._currentDrawId } = t.drawLayer.draw(
                      this._mergeSVGProperties(u9._.toSVGProperties(), u8._.defaultSVGProperties),
                      !0,
                      !1,
                  )));
        }
        static _drawMove(t) {
            if ((et.isSameTimeStamp(t.timeStamp), !u8._)) return;
            let { offsetX: e, offsetY: i, pointerId: s } = t;
            if (et.isSamePointerId(s)) {
                if (et.isUsingMultiplePointers()) return void this._endDraw(t);
                this._currentParent.drawLayer.updateProperties(this._currentDrawId, u8._.add(e, i)),
                    et.setTimeStamp(t.timeStamp),
                    tu(t);
            }
        }
        static _cleanup(t) {
            t &&
                ((this._currentDrawId = -1),
                (this._currentParent = null),
                (u8._ = null),
                (u9._ = null),
                et.clearTimeStamp()),
                u7._ && (u7._.abort(), (u7._ = null), et.clearPointerIds());
        }
        static _endDraw(t) {
            let e = this._currentParent;
            if (e) {
                if (
                    (e.toggleDrawing(!0),
                    this._cleanup(!1),
                    t?.target === e.div &&
                        e.drawLayer.updateProperties(this._currentDrawId, u8._.end(t.offsetX, t.offsetY)),
                    this.supportMultipleDrawings)
                ) {
                    let t = u8._,
                        i = this._currentDrawId,
                        s = t.getLastElement();
                    e.addCommands({
                        cmd: () => {
                            e.drawLayer.updateProperties(i, t.setLastElement(s));
                        },
                        undo: () => {
                            e.drawLayer.updateProperties(i, t.removeLastElement());
                        },
                        mustExec: !1,
                        type: x.DRAW_STEP,
                    });
                    return;
                }
                this.endDrawing(!1);
            }
        }
        static endDrawing(t) {
            let e = this._currentParent;
            if (!e) return null;
            if ((e.toggleDrawing(!0), e.cleanUndoStack(x.DRAW_STEP), !u8._.isEmpty())) {
                let {
                        pageDimensions: [i, s],
                        scale: n,
                    } = e,
                    a = e.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, !1, {
                        drawId: this._currentDrawId,
                        drawOutlines: u8._.getOutlines(i * n, s * n, n, this._INNER_MARGIN),
                        drawingOptions: u9._,
                        mustBeCommitted: !t,
                    });
                return this._cleanup(!0), a;
            }
            return e.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
        }
        createDrawingOptions(t) {}
        static deserializeDraw(t, e, i, s, n, a) {
            D("Not implemented");
        }
        static async deserialize(t, e, i) {
            let {
                    rawDims: { pageWidth: s, pageHeight: n, pageX: a, pageY: r },
                } = e.viewport,
                o = this.deserializeDraw(a, r, s, n, this._INNER_MARGIN, t),
                l = await super.deserialize(t, e, i);
            return (
                l.createDrawingOptions(t),
                d(uQ, l, uZ).call(l, { drawOutlines: o }),
                d(uQ, l, u2).call(l),
                l.onScaleChanging(),
                l.rotate(),
                l
            );
        }
        serializeDraw(t) {
            let [e, i] = this.pageTranslation,
                [s, n] = this.pageDimensions;
            return f(uK, this).serialize([e, i, s, n], t);
        }
        renderAnnotationElement(t) {
            return t.updateEdited({ rect: this.getPDFRect() }), null;
        }
        static canCreateNewEmptyEditor() {
            return !1;
        }
    };
function uZ({ drawOutlines: t, drawId: e, drawingOptions: i }) {
    g(uK, this, t),
        (this._drawingOptions ||= i),
        this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`),
        e >= 0
            ? ((this._drawId = e), this.parent.drawLayer.finalizeDraw(e, t.defaultProperties))
            : (this._drawId = d(uQ, this, u0).call(this, t, this.parent)),
        d(uQ, this, u4).call(this, t.box);
}
function u0(t, e) {
    let { id: i } = e.drawLayer.draw(
        uJ._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties),
        !1,
        !1,
    );
    return i;
}
function u1() {
    null !== this._drawId &&
        this.parent &&
        (this.parent.drawLayer.remove(this._drawId), (this._drawId = null), this._drawingOptions.reset());
}
function u2(t = this.parent) {
    if (null === this._drawId || this.parent !== t) {
        if (null !== this._drawId) return void this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
        this._drawingOptions.updateAll(), (this._drawId = d(uQ, this, u0).call(this, f(uK, this), t));
    }
}
function u3([t, e, i, s]) {
    let {
        parentDimensions: [n, a],
        rotation: r,
    } = this;
    switch (r) {
        case 90:
            return [e, 1 - t, (a / n) * i, (n / a) * s];
        case 180:
            return [1 - t, 1 - e, i, s];
        case 270:
            return [1 - e, t, (a / n) * i, (n / a) * s];
        default:
            return [t, e, i, s];
    }
}
function u5() {
    let {
        x: t,
        y: e,
        width: i,
        height: s,
        parentDimensions: [n, a],
        rotation: r,
    } = this;
    switch (r) {
        case 90:
            return [1 - e, t, (n / a) * i, (a / n) * s];
        case 180:
            return [1 - t, 1 - e, i, s];
        case 270:
            return [e, 1 - t, (n / a) * i, (a / n) * s];
        default:
            return [t, e, i, s];
    }
}
function u4(t) {
    ([this.x, this.y, this.width, this.height] = d(uQ, this, u3).call(this, t)),
        this.div && (this.fixAndSetPosition(), this.setDims()),
        this._onResized();
}
function u6() {
    let {
        x: t,
        y: e,
        width: i,
        height: s,
        rotation: n,
        parentRotation: a,
        parentDimensions: [r, o],
    } = this;
    switch ((4 * n + a) / 90) {
        case 1:
            return [1 - e - s, t, s, i];
        case 2:
            return [1 - t - i, 1 - e - s, i, s];
        case 3:
            return [e, 1 - t - i, s, i];
        case 4:
            return [t, e - (r / o) * i, (o / r) * s, (r / o) * i];
        case 5:
            return [1 - e, t, (r / o) * i, (o / r) * s];
        case 6:
            return [1 - t - (o / r) * s, 1 - e, (o / r) * s, (r / o) * i];
        case 7:
            return [e - (r / o) * i, 1 - t - (o / r) * s, (r / o) * i, (o / r) * s];
        case 8:
            return [t - i, e - s, i, s];
        case 9:
            return [1 - e, t - i, s, i];
        case 10:
            return [1 - t, 1 - e, i, s];
        case 11:
            return [e - s, 1 - t, s, i];
        case 12:
            return [t - (o / r) * s, e, (o / r) * s, (r / o) * i];
        case 13:
            return [1 - e - (r / o) * i, t - (o / r) * s, (r / o) * i, (o / r) * s];
        case 14:
            return [1 - t, 1 - e - (r / o) * i, (o / r) * s, (r / o) * i];
        case 15:
            return [e, 1 - t, (r / o) * i, (o / r) * s];
        default:
            return [t, e, i, s];
    }
}
(0, o.t)(uJ, "_currentDrawId", -1), (0, o.t)(uJ, "_currentParent", null);
var u8 = { _: null },
    u7 = { _: null },
    u9 = { _: null };
(0, o.t)(uJ, "_INNER_MARGIN", 3);
var pt = new WeakMap(),
    pe = new WeakMap(),
    pi = new WeakMap(),
    ps = new WeakMap(),
    pn = new WeakMap(),
    pa = new WeakMap(),
    pr = new WeakMap(),
    po = new WeakMap(),
    pl = new WeakMap(),
    ph = new WeakMap(),
    pd = new WeakMap(),
    pc = new WeakSet(),
    pu = class {
        constructor(t, e, i, s, n, a) {
            u(this, pc),
                p(this, pt, new Float64Array(6)),
                p(this, pe, void 0),
                p(this, pi, void 0),
                p(this, ps, void 0),
                p(this, pn, void 0),
                p(this, pa, void 0),
                p(this, pr, ""),
                p(this, po, 0),
                p(this, pl, new pk()),
                p(this, ph, void 0),
                p(this, pd, void 0),
                g(ph, this, i),
                g(pd, this, s),
                g(ps, this, n),
                g(pn, this, a),
                ([t, e] = d(pc, this, pp).call(this, t, e));
            const r = g(pe, this, [NaN, NaN, NaN, NaN, t, e]);
            g(pa, this, [t, e]), g(pi, this, [{ line: r, points: f(pa, this) }]), f(pt, this).set(r, 0);
        }
        updateProperty(t, e) {
            "stroke-width" === t && g(pn, this, e);
        }
        isEmpty() {
            return !f(pi, this) || 0 === f(pi, this).length;
        }
        isCancellable() {
            return f(pa, this).length <= 10;
        }
        add(t, e) {
            [t, e] = d(pc, this, pp).call(this, t, e);
            let [i, s, n, a] = f(pt, this).subarray(2, 6),
                r = t - n,
                o = e - a;
            return 2 >= Math.hypot(f(ph, this) * r, f(pd, this) * o)
                ? null
                : ((f(pa, this).push(t, e), isNaN(i))
                      ? (f(pt, this).set([n, a, t, e], 2), f(pe, this).push(NaN, NaN, NaN, NaN, t, e))
                      : (isNaN(f(pt, this)[0]) && f(pe, this).splice(6, 6),
                        f(pt, this).set([i, s, n, a, t, e], 0),
                        f(pe, this).push(...cx.createBezierPoints(i, s, n, a, t, e))),
                  { path: { d: this.toSVGPath() } });
        }
        end(t, e) {
            let i = this.add(t, e);
            return i || (2 === f(pa, this).length ? { path: { d: this.toSVGPath() } } : null);
        }
        startNew(t, e, i, s, n) {
            g(ph, this, i), g(pd, this, s), g(ps, this, n), ([t, e] = d(pc, this, pp).call(this, t, e));
            let a = g(pe, this, [NaN, NaN, NaN, NaN, t, e]);
            g(pa, this, [t, e]);
            let r = f(pi, this).at(-1);
            return (
                r && ((r.line = new Float32Array(r.line)), (r.points = new Float32Array(r.points))),
                f(pi, this).push({ line: a, points: f(pa, this) }),
                f(pt, this).set(a, 0),
                g(po, this, 0),
                this.toSVGPath(),
                null
            );
        }
        getLastElement() {
            return f(pi, this).at(-1);
        }
        setLastElement(t) {
            return f(pi, this)
                ? (f(pi, this).push(t),
                  g(pe, this, t.line),
                  g(pa, this, t.points),
                  g(po, this, 0),
                  { path: { d: this.toSVGPath() } })
                : f(pl, this).setLastElement(t);
        }
        removeLastElement() {
            if (!f(pi, this)) return f(pl, this).removeLastElement();
            f(pi, this).pop(), g(pr, this, "");
            for (let t = 0, e = f(pi, this).length; t < e; t++) {
                let { line: e, points: i } = f(pi, this)[t];
                g(pe, this, e), g(pa, this, i), g(po, this, 0), this.toSVGPath();
            }
            return { path: { d: f(pr, this) } };
        }
        toSVGPath() {
            let t = cx.svgRound(f(pe, this)[4]),
                e = cx.svgRound(f(pe, this)[5]);
            if (2 === f(pa, this).length) return g(pr, this, `${f(pr, this)} M ${t} ${e} Z`), f(pr, this);
            if (f(pa, this).length <= 6) {
                let i = f(pr, this).lastIndexOf("M");
                g(pr, this, `${f(pr, this).slice(0, i)} M ${t} ${e}`), g(po, this, 6);
            }
            if (4 === f(pa, this).length) {
                let t = cx.svgRound(f(pe, this)[10]),
                    e = cx.svgRound(f(pe, this)[11]);
                return g(pr, this, `${f(pr, this)} L ${t} ${e}`), g(po, this, 12), f(pr, this);
            }
            let i = [];
            0 === f(po, this) && (i.push(`M ${t} ${e}`), g(po, this, 6));
            for (let t = f(po, this), e = f(pe, this).length; t < e; t += 6) {
                let [e, s, n, a, r, o] = f(pe, this)
                    .slice(t, t + 6)
                    .map(cx.svgRound);
                i.push(`C${e} ${s} ${n} ${a} ${r} ${o}`);
            }
            return g(pr, this, f(pr, this) + i.join(" ")), g(po, this, f(pe, this).length), f(pr, this);
        }
        getOutlines(t, e, i, s) {
            let n = f(pi, this).at(-1);
            return (
                (n.line = new Float32Array(n.line)),
                (n.points = new Float32Array(n.points)),
                f(pl, this).build(f(pi, this), t, e, i, f(ps, this), f(pn, this), s),
                g(pt, this, null),
                g(pe, this, null),
                g(pi, this, null),
                g(pr, this, null),
                f(pl, this)
            );
        }
        get defaultSVGProperties() {
            return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: !0 }, bbox: [0, 0, 1, 1] };
        }
    };
function pp(t, e) {
    return cx._normalizePoint(t, e, f(ph, this), f(pd, this), f(ps, this));
}
var pg = new WeakMap(),
    pf = new WeakMap(),
    pm = new WeakMap(),
    pw = new WeakMap(),
    pb = new WeakMap(),
    pv = new WeakMap(),
    pA = new WeakMap(),
    py = new WeakMap(),
    p_ = new WeakMap(),
    px = new WeakSet(),
    pk = class extends cx {
        constructor(...t) {
            super(...t),
                u(this, px),
                p(this, pg, void 0),
                p(this, pf, 0),
                p(this, pm, void 0),
                p(this, pw, void 0),
                p(this, pb, void 0),
                p(this, pv, void 0),
                p(this, pA, void 0),
                p(this, py, void 0),
                p(this, p_, void 0);
        }
        build(t, e, i, s, n, a, r) {
            g(pb, this, e),
                g(pv, this, i),
                g(pA, this, s),
                g(py, this, n),
                g(p_, this, a),
                g(pm, this, r ?? 0),
                g(pw, this, t),
                d(px, this, pE).call(this);
        }
        get thickness() {
            return f(p_, this);
        }
        setLastElement(t) {
            return f(pw, this).push(t), { path: { d: this.toSVGPath() } };
        }
        removeLastElement() {
            return f(pw, this).pop(), { path: { d: this.toSVGPath() } };
        }
        toSVGPath() {
            let t = [];
            for (let { line: e } of f(pw, this)) {
                if ((t.push(`M${cx.svgRound(e[4])} ${cx.svgRound(e[5])}`), 6 === e.length)) {
                    t.push("Z");
                    continue;
                }
                if (12 === e.length && isNaN(e[6])) {
                    t.push(`L${cx.svgRound(e[10])} ${cx.svgRound(e[11])}`);
                    continue;
                }
                for (let i = 6, s = e.length; i < s; i += 6) {
                    let [s, n, a, r, o, l] = e.subarray(i, i + 6).map(cx.svgRound);
                    t.push(`C${s} ${n} ${a} ${r} ${o} ${l}`);
                }
            }
            return t.join("");
        }
        serialize([t, e, i, s], n) {
            let a,
                r,
                o,
                l,
                h,
                c,
                u,
                p,
                g,
                m = [],
                w = [],
                [b, v, A, y] = d(px, this, pS).call(this);
            switch (f(py, this)) {
                case 0:
                    (g = cx._rescale),
                        (a = t),
                        (r = e + s),
                        (o = i),
                        (l = -s),
                        (h = t + b * i),
                        (c = e + (1 - v - y) * s),
                        (u = t + (b + A) * i),
                        (p = e + (1 - v) * s);
                    break;
                case 90:
                    (g = cx._rescaleAndSwap),
                        (a = t),
                        (r = e),
                        (o = i),
                        (l = s),
                        (h = t + v * i),
                        (c = e + b * s),
                        (u = t + (v + y) * i),
                        (p = e + (b + A) * s);
                    break;
                case 180:
                    (g = cx._rescale),
                        (a = t + i),
                        (r = e),
                        (o = -i),
                        (l = s),
                        (h = t + (1 - b - A) * i),
                        (c = e + v * s),
                        (u = t + (1 - b) * i),
                        (p = e + (v + y) * s);
                    break;
                case 270:
                    (g = cx._rescaleAndSwap),
                        (a = t + i),
                        (r = e + s),
                        (o = -i),
                        (l = -s),
                        (h = t + (1 - v - y) * i),
                        (c = e + (1 - b - A) * s),
                        (u = t + (1 - v) * i),
                        (p = e + (1 - b) * s);
            }
            for (let { line: t, points: e } of f(pw, this))
                m.push(g(t, a, r, o, l, n ? Array(t.length) : null)),
                    w.push(g(e, a, r, o, l, n ? Array(e.length) : null));
            return { lines: m, points: w, rect: [h, c, u, p] };
        }
        static deserialize(t, e, i, s, n, { paths: { lines: a, points: r }, rotation: o, thickness: l }) {
            let h,
                d,
                c,
                u,
                p,
                g = [];
            switch (o) {
                case 0:
                    (p = cx._rescale), (h = -t / i), (d = e / s + 1), (c = 1 / i), (u = -1 / s);
                    break;
                case 90:
                    (p = cx._rescaleAndSwap), (h = -e / s), (d = -t / i), (c = 1 / s), (u = 1 / i);
                    break;
                case 180:
                    (p = cx._rescale), (h = t / i + 1), (d = -e / s), (c = -1 / i), (u = 1 / s);
                    break;
                case 270:
                    (p = cx._rescaleAndSwap), (h = e / s + 1), (d = t / i + 1), (c = -1 / s), (u = -1 / i);
            }
            if (!a)
                for (let t of ((a = []), r)) {
                    let e = t.length;
                    if (2 === e) {
                        a.push(new Float32Array([NaN, NaN, NaN, NaN, t[0], t[1]]));
                        continue;
                    }
                    if (4 === e) {
                        a.push(new Float32Array([NaN, NaN, NaN, NaN, t[0], t[1], NaN, NaN, NaN, NaN, t[2], t[3]]));
                        continue;
                    }
                    let i = new Float32Array(3 * (e - 2));
                    a.push(i);
                    let [s, n, r, o] = t.subarray(0, 4);
                    i.set([NaN, NaN, NaN, NaN, s, n], 0);
                    for (let a = 4; a < e; a += 2) {
                        let e = t[a],
                            l = t[a + 1];
                        i.set(cx.createBezierPoints(s, n, r, o, e, l), (a - 2) * 3), ([s, n, r, o] = [r, o, e, l]);
                    }
                }
            for (let t = 0, e = a.length; t < e; t++)
                g.push({
                    line: p(
                        a[t].map((t) => t ?? NaN),
                        h,
                        d,
                        c,
                        u,
                    ),
                    points: p(
                        r[t].map((t) => t ?? NaN),
                        h,
                        d,
                        c,
                        u,
                    ),
                });
            let f = new this.prototype.constructor();
            return f.build(g, i, s, 1, o, l, n), f;
        }
        get box() {
            return f(pg, this);
        }
        updateProperty(t, e) {
            return "stroke-width" === t ? d(px, this, pC).call(this, e) : null;
        }
        updateParentDimensions([t, e], i) {
            let [s, n] = d(px, this, pM).call(this);
            g(pb, this, t), g(pv, this, e), g(pA, this, i);
            let [a, r] = d(px, this, pM).call(this),
                o = a - s,
                l = r - n,
                h = f(pg, this);
            return (h[0] -= o), (h[1] -= l), (h[2] += 2 * o), (h[3] += 2 * l), h;
        }
        updateRotation(t) {
            return g(pf, this, t), { path: { transform: this.rotationTransform } };
        }
        get viewBox() {
            return f(pg, this).map(cx.svgRound).join(" ");
        }
        get defaultProperties() {
            let [t, e] = f(pg, this);
            return {
                root: { viewBox: this.viewBox },
                path: { "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}` },
            };
        }
        get rotationTransform() {
            let [, , t, e] = f(pg, this),
                i = 0,
                s = 0,
                n = 0,
                a = 0,
                r = 0,
                o = 0;
            switch (f(pf, this)) {
                case 90:
                    (s = e / t), (n = -t / e), (r = t);
                    break;
                case 180:
                    (i = -1), (a = -1), (r = t), (o = e);
                    break;
                case 270:
                    (s = -e / t), (n = t / e), (o = e);
                    break;
                default:
                    return "";
            }
            return `matrix(${i} ${s} ${n} ${a} ${cx.svgRound(r)} ${cx.svgRound(o)})`;
        }
        getPathResizingSVGProperties([t, e, i, s]) {
            let [n, a] = d(px, this, pM).call(this),
                [r, o, l, h] = f(pg, this);
            if (Math.abs(l - n) <= cx.PRECISION || Math.abs(h - a) <= cx.PRECISION) {
                let n = t + i / 2 - (r + l / 2),
                    a = e + s / 2 - (o + h / 2);
                return {
                    path: {
                        "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}`,
                        transform: `${this.rotationTransform} translate(${n} ${a})`,
                    },
                };
            }
            let c = (i - 2 * n) / (l - 2 * n),
                u = (s - 2 * a) / (h - 2 * a);
            return {
                path: {
                    "transform-origin": `${cx.svgRound(r)} ${cx.svgRound(o)}`,
                    transform: `${this.rotationTransform} scale(${l / i} ${h / s}) translate(${cx.svgRound(n)} ${cx.svgRound(a)}) scale(${c} ${u}) translate(${cx.svgRound(-n)} ${cx.svgRound(-a)})`,
                },
            };
        }
        getPathResizedSVGProperties([t, e, i, s]) {
            let [n, a] = d(px, this, pM).call(this),
                r = f(pg, this),
                [o, l, h, c] = r;
            if (
                ((r[0] = t),
                (r[1] = e),
                (r[2] = i),
                (r[3] = s),
                Math.abs(h - n) <= cx.PRECISION || Math.abs(c - a) <= cx.PRECISION)
            ) {
                let n = t + i / 2 - (o + h / 2),
                    a = e + s / 2 - (l + c / 2);
                for (let { line: t, points: e } of f(pw, this)) cx._translate(t, n, a, t), cx._translate(e, n, a, e);
                return {
                    root: { viewBox: this.viewBox },
                    path: {
                        "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}`,
                        transform: this.rotationTransform || null,
                        d: this.toSVGPath(),
                    },
                };
            }
            let u = (i - 2 * n) / (h - 2 * n),
                p = (s - 2 * a) / (c - 2 * a),
                g = -u * (o + n) + t + n,
                m = -p * (l + a) + e + a;
            if (1 !== u || 1 !== p || 0 !== g || 0 !== m)
                for (let { line: t, points: e } of f(pw, this))
                    cx._rescale(t, g, m, u, p, t), cx._rescale(e, g, m, u, p, e);
            return {
                root: { viewBox: this.viewBox },
                path: {
                    "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}`,
                    transform: this.rotationTransform || null,
                    d: this.toSVGPath(),
                },
            };
        }
        getPathTranslatedSVGProperties([t, e], i) {
            let [s, n] = i,
                a = f(pg, this),
                r = t - a[0],
                o = e - a[1];
            if (f(pb, this) === s && f(pv, this) === n)
                for (let { line: t, points: e } of f(pw, this)) cx._translate(t, r, o, t), cx._translate(e, r, o, e);
            else {
                let t = f(pb, this) / s,
                    e = f(pv, this) / n;
                for (let { line: i, points: a } of (g(pb, this, s), g(pv, this, n), f(pw, this)))
                    cx._rescale(i, r, o, t, e, i), cx._rescale(a, r, o, t, e, a);
                (a[2] *= t), (a[3] *= e);
            }
            return (
                (a[0] = t),
                (a[1] = e),
                {
                    root: { viewBox: this.viewBox },
                    path: { d: this.toSVGPath(), "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}` },
                }
            );
        }
        get defaultSVGProperties() {
            let t = f(pg, this);
            return {
                root: { viewBox: this.viewBox },
                rootClass: { draw: !0 },
                path: {
                    d: this.toSVGPath(),
                    "transform-origin": `${cx.svgRound(t[0])} ${cx.svgRound(t[1])}`,
                    transform: this.rotationTransform || null,
                },
                bbox: t,
            };
        }
    };
function pM(t = f(p_, this)) {
    let e = f(pm, this) + (t / 2) * f(pA, this);
    return f(py, this) % 180 == 0 ? [e / f(pb, this), e / f(pv, this)] : [e / f(pv, this), e / f(pb, this)];
}
function pS() {
    let [t, e, i, s] = f(pg, this),
        [n, a] = d(px, this, pM).call(this, 0);
    return [t + n, e + a, i - 2 * n, s - 2 * a];
}
function pE() {
    let t = g(pg, this, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    for (let { line: e } of f(pw, this)) {
        if (e.length <= 12) {
            for (let i = 4, s = e.length; i < s; i += 6) V.pointBoundingBox(e[i], e[i + 1], t);
            continue;
        }
        let i = e[4],
            s = e[5];
        for (let n = 6, a = e.length; n < a; n += 6) {
            let [a, r, o, l, h, d] = e.subarray(n, n + 6);
            V.bezierBoundingBox(i, s, a, r, o, l, h, d, t), (i = h), (s = d);
        }
    }
    let [e, i] = d(px, this, pM).call(this);
    (t[0] = Z(t[0] - e, 0, 1)),
        (t[1] = Z(t[1] - i, 0, 1)),
        (t[2] = Z(t[2] + e, 0, 1)),
        (t[3] = Z(t[3] + i, 0, 1)),
        (t[2] -= t[0]),
        (t[3] -= t[1]);
}
function pC(t) {
    let [e, i] = d(px, this, pM).call(this);
    g(p_, this, t);
    let [s, n] = d(px, this, pM).call(this),
        [a, r] = [s - e, n - i],
        o = f(pg, this);
    return (o[0] -= a), (o[1] -= r), (o[2] += 2 * a), (o[3] += 2 * r), o;
}
var pT = class t extends uX {
        constructor(t) {
            super(),
                (this._viewParameters = t),
                super.updateProperties({
                    fill: "none",
                    stroke: sH._defaultLineColor,
                    "stroke-opacity": 1,
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 10,
                });
        }
        updateSVGProperty(t, e) {
            "stroke-width" === t && ((e ??= this["stroke-width"]), (e *= this._viewParameters.realScale)),
                super.updateSVGProperty(t, e);
        }
        clone() {
            let e = new t(this._viewParameters);
            return e.updateAll(this), e;
        }
    },
    pP = new WeakSet(),
    pD = class t extends uJ {
        constructor(t) {
            super({ ...t, name: "inkEditor" }),
                u(this, pP),
                (this._willKeepAspectRatio = !0),
                (this.defaultL10nId = "pdfjs-editor-ink-editor");
        }
        static initialize(t, e) {
            sH.initialize(t, e), (this._defaultDrawingOptions = new pT(e.viewParameters));
        }
        static getDefaultDrawingOptions(t) {
            let e = this._defaultDrawingOptions.clone();
            return e.updateProperties(t), e;
        }
        static get supportMultipleDrawings() {
            return !0;
        }
        static get typesMap() {
            return F(
                this,
                "typesMap",
                new Map([
                    [x.INK_THICKNESS, "stroke-width"],
                    [x.INK_COLOR, "stroke"],
                    [x.INK_OPACITY, "stroke-opacity"],
                ]),
            );
        }
        static createDrawerInstance(t, e, i, s, n) {
            return new pu(t, e, i, s, n, this._defaultDrawingOptions["stroke-width"]);
        }
        static deserializeDraw(t, e, i, s, n, a) {
            return pk.deserialize(t, e, i, s, n, a);
        }
        static async deserialize(t, e, i) {
            let s = null;
            if (t instanceof dX) {
                let {
                    data: {
                        inkLists: e,
                        rect: i,
                        rotation: n,
                        id: a,
                        color: r,
                        opacity: o,
                        borderStyle: { rawWidth: l },
                        popupRef: h,
                        richText: d,
                        contentsObj: c,
                        creationDate: u,
                        modificationDate: p,
                    },
                    parent: {
                        page: { pageNumber: g },
                    },
                } = t;
                s = t = {
                    annotationType: _.INK,
                    color: Array.from(r),
                    thickness: l,
                    opacity: o,
                    paths: { points: e },
                    boxes: null,
                    pageIndex: g - 1,
                    rect: i.slice(0),
                    rotation: n,
                    annotationElementId: a,
                    id: a,
                    deleted: !1,
                    popupRef: h,
                    richText: d,
                    comment: c?.str || null,
                    creationDate: u,
                    modificationDate: p,
                };
            }
            let n = await super.deserialize(t, e, i);
            return (n._initialData = s), t.comment && n.setCommentData(t), n;
        }
        get toolbarButtons() {
            return (this._colorPicker ||= new hx(this)), [["colorPicker", this._colorPicker]];
        }
        get colorType() {
            return x.INK_COLOR;
        }
        get color() {
            return this._drawingOptions.stroke;
        }
        get opacity() {
            return this._drawingOptions["stroke-opacity"];
        }
        onScaleChanging() {
            if (!this.parent) return;
            super.onScaleChanging();
            let { _drawId: t, _drawingOptions: e, parent: i } = this;
            e.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(t, e.toSVGProperties());
        }
        static onScaleChangingWhenDrawing() {
            let t = this._currentParent;
            t &&
                (super.onScaleChangingWhenDrawing(),
                this._defaultDrawingOptions.updateSVGProperty("stroke-width"),
                t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
        }
        createDrawingOptions({ color: e, thickness: i, opacity: s }) {
            this._drawingOptions = t.getDefaultDrawingOptions({
                stroke: V.makeHexColor(...e),
                "stroke-width": i,
                "stroke-opacity": s,
            });
        }
        serialize(t = !1) {
            if (this.isEmpty()) return null;
            if (this.deleted) return this.serializeDeleted();
            let { lines: e, points: i } = this.serializeDraw(t),
                {
                    _drawingOptions: { stroke: s, "stroke-opacity": n, "stroke-width": a },
                } = this,
                r = Object.assign(super.serialize(t), {
                    color: sH._colorManager.convert(s),
                    opacity: n,
                    thickness: a,
                    paths: { lines: e, points: i },
                });
            return (this.addComment(r), t)
                ? ((r.isCopy = !0), r)
                : this.annotationElementId && !d(pP, this, pI).call(this, r)
                  ? null
                  : ((r.id = this.annotationElementId), r);
        }
        renderAnnotationElement(t) {
            if (this.deleted) return t.hide(), null;
            let { points: e, rect: i } = this.serializeDraw(!1);
            return (
                t.updateEdited({
                    rect: i,
                    thickness: this._drawingOptions["stroke-width"],
                    points: e,
                    popup: this.comment,
                }),
                null
            );
        }
    };
function pI(t) {
    let { color: e, thickness: i, opacity: s, pageIndex: n } = this._initialData;
    return (
        this.hasEditedComment ||
        this._hasBeenMoved ||
        this._hasBeenResized ||
        t.color.some((t, i) => t !== e[i]) ||
        t.thickness !== i ||
        t.opacity !== s ||
        t.pageIndex !== n
    );
}
(0, o.t)(pD, "_type", "ink"), (0, o.t)(pD, "_editorType", _.INK), (0, o.t)(pD, "_defaultDrawingOptions", null);
var pL = class extends pk {
        toSVGPath() {
            let t = super.toSVGPath();
            return t.endsWith("Z") || (t += "Z"), t;
        }
    },
    pR = class t {
        static extractContoursFromText(e, { fontFamily: i, fontStyle: s, fontWeight: n }, a, r, o, l) {
            let h = new OffscreenCanvas(1, 1),
                c = h.getContext("2d", { alpha: !1 }),
                u = (c.font = `${s} ${n} 200px ${i}`),
                {
                    actualBoundingBoxLeft: p,
                    actualBoundingBoxRight: g,
                    actualBoundingBoxAscent: f,
                    actualBoundingBoxDescent: m,
                    fontBoundingBoxAscent: w,
                    fontBoundingBoxDescent: b,
                    width: v,
                } = c.measureText(e),
                A = Math.ceil(1.5 * Math.max(Math.abs(p) + Math.abs(g) || 0, v)),
                y = Math.ceil(1.5 * Math.max(Math.abs(f) + Math.abs(m) || 200, Math.abs(w) + Math.abs(b) || 200));
            ((c = (h = new OffscreenCanvas(A, y)).getContext("2d", { alpha: !0, willReadFrequently: !0 })).font = u),
                (c.filter = "grayscale(1)"),
                (c.fillStyle = "white"),
                c.fillRect(0, 0, A, y),
                (c.fillStyle = "black"),
                c.fillText(e, (0.5 * A) / 2, (1.5 * y) / 2);
            let _ = d(t, this, pj).call(this, c.getImageData(0, 0, A, y).data),
                x = d(t, this, pH).call(this, _),
                k = d(t, this, pz).call(this, x),
                M = d(t, this, pO).call(this, _, A, y, k);
            return this.processDrawnLines({
                lines: { curves: M, width: A, height: y },
                pageWidth: a,
                pageHeight: r,
                rotation: o,
                innerMargin: l,
                mustSmooth: !0,
                areContours: !0,
            });
        }
        static process(e, i, s, n, a) {
            let [r, o, l] = d(t, this, pG).call(this, e),
                [h, c] = d(t, this, p$).call(
                    this,
                    r,
                    o,
                    l,
                    Math.hypot(o, l) * d(t, this, pV)._.sigmaSFactor,
                    d(t, this, pV)._.sigmaR,
                    d(t, this, pV)._.kernelSize,
                ),
                u = d(t, this, pz).call(this, c),
                p = d(t, this, pO).call(this, h, o, l, u);
            return this.processDrawnLines({
                lines: { curves: p, width: o, height: l },
                pageWidth: i,
                pageHeight: s,
                rotation: n,
                innerMargin: a,
                mustSmooth: !0,
                areContours: !0,
            });
        }
        static processDrawnLines({
            lines: e,
            pageWidth: i,
            pageHeight: s,
            rotation: n,
            innerMargin: a,
            mustSmooth: r,
            areContours: o,
        }) {
            n % 180 != 0 && ([i, s] = [s, i]);
            let { curves: l, width: h, height: c } = e,
                u = e.thickness ?? 0,
                p = [],
                g = Math.min(i / h, s / c),
                f = g / i,
                m = g / s,
                w = [];
            for (let { points: e } of l) {
                let i = r ? d(t, this, pU).call(this, e) : e;
                if (!i) continue;
                w.push(i);
                let s = i.length,
                    n = new Float32Array(s),
                    a = new Float32Array(3 * (2 === s ? 2 : s - 2));
                if ((p.push({ line: a, points: n }), 2 === s)) {
                    (n[0] = i[0] * f), (n[1] = i[1] * m), a.set([NaN, NaN, NaN, NaN, n[0], n[1]], 0);
                    continue;
                }
                let [o, l, h, c] = i;
                (o *= f), (l *= m), (h *= f), (c *= m), n.set([o, l, h, c], 0), a.set([NaN, NaN, NaN, NaN, o, l], 0);
                for (let t = 4; t < s; t += 2) {
                    let e = (n[t] = i[t] * f),
                        s = (n[t + 1] = i[t + 1] * m);
                    a.set(cx.createBezierPoints(o, l, h, c, e, s), (t - 2) * 3), ([o, l, h, c] = [h, c, e, s]);
                }
            }
            if (0 === p.length) return null;
            let b = o ? new pL() : new pk();
            return (
                b.build(p, i, s, 1, n, o ? 0 : u, a),
                { outline: b, newCurves: w, areContours: o, thickness: u, width: h, height: c }
            );
        }
        static async compressSignature({ outlines: t, areContours: e, thickness: i, width: s, height: n }) {
            let a,
                r = 1 / 0,
                o = -1 / 0,
                l = 0;
            for (let e of t) {
                l += e.length;
                for (let t = 2, i = e.length; t < i; t++) {
                    let i = e[t] - e[t - 2];
                    (r = Math.min(r, i)), (o = Math.max(o, i));
                }
            }
            a = r >= -128 && o <= 127 ? Int8Array : r >= -32768 && o <= 32767 ? Int16Array : Int32Array;
            let h = t.length,
                d = 8 + 3 * h,
                c = new Uint32Array(d),
                u = 0;
            for (let r of ((c[u++] = d * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * h) * a.BYTES_PER_ELEMENT),
            (c[u++] = 0),
            (c[u++] = s),
            (c[u++] = n),
            (c[u++] = +!e),
            (c[u++] = Math.max(0, Math.floor(i ?? 0))),
            (c[u++] = h),
            (c[u++] = a.BYTES_PER_ELEMENT),
            t))
                (c[u++] = r.length - 2), (c[u++] = r[0]), (c[u++] = r[1]);
            let p = new CompressionStream("deflate-raw"),
                g = p.writable.getWriter();
            await g.ready, g.write(c);
            let f = a.prototype.constructor;
            for (let e of t) {
                let t = new f(e.length - 2);
                for (let i = 2, s = e.length; i < s; i++) t[i - 2] = e[i] - e[i - 2];
                g.write(t);
            }
            return g.close(), new Uint8Array(await new Response(p.readable).arrayBuffer()).toBase64();
        }
        static async decompressSignature(t) {
            try {
                let e,
                    i = Uint8Array.fromBase64(t),
                    { readable: s, writable: n } = new DecompressionStream("deflate-raw"),
                    a = n.getWriter();
                await a.ready,
                    a
                        .write(i)
                        .then(async () => {
                            await a.ready, await a.close();
                        })
                        .catch(() => {});
                let r = null,
                    o = 0;
                for await (let t of s)
                    (r ||= new Uint8Array(new Uint32Array(t.buffer, 0, 4)[0])).set(t, o), (o += t.length);
                let l = new Uint32Array(r.buffer, 0, r.length >> 2),
                    h = l[1];
                if (0 !== h) throw Error(`Invalid version: ${h}`);
                let d = l[2],
                    c = l[3],
                    u = 0 === l[4],
                    p = l[5],
                    g = l[6],
                    f = l[7],
                    m = [],
                    w = (8 + 3 * g) * Uint32Array.BYTES_PER_ELEMENT;
                switch (f) {
                    case Int8Array.BYTES_PER_ELEMENT:
                        e = new Int8Array(r.buffer, w);
                        break;
                    case Int16Array.BYTES_PER_ELEMENT:
                        e = new Int16Array(r.buffer, w);
                        break;
                    case Int32Array.BYTES_PER_ELEMENT:
                        e = new Int32Array(r.buffer, w);
                }
                o = 0;
                for (let t = 0; t < g; t++) {
                    let i = l[3 * t + 8],
                        s = new Float32Array(i + 2);
                    m.push(s);
                    for (let e = 0; e < 2; e++) s[e] = l[3 * t + 8 + e + 1];
                    for (let t = 0; t < i; t++) s[t + 2] = s[t] + e[o++];
                }
                return { areContours: u, thickness: p, outlines: m, width: d, height: c };
            } catch (t) {
                return P(`decompressSignature: ${t}`), null;
            }
        }
    };
function pF(t, e, i, s) {
    return ((i -= t), (s -= e), 0 === i) ? (s > 0 ? 0 : 4) : 1 === i ? s + 6 : 2 - s;
}
function pN(t, e, i, s, n, a, r) {
    let o = d(pR, this, pF).call(this, i, s, n, a);
    for (let n = 0; n < 8; n++) {
        let a = (-n + o - r + 16) % 8;
        if (0 !== t[(i + d(pR, this, pq)._[2 * a]) * e + (s + d(pR, this, pq)._[2 * a + 1])]) return a;
    }
    return -1;
}
function pB(t, e, i, s, n, a, r) {
    let o = d(pR, this, pF).call(this, i, s, n, a);
    for (let n = 0; n < 8; n++) {
        let a = (n + o + r + 16) % 8;
        if (0 !== t[(i + d(pR, this, pq)._[2 * a]) * e + (s + d(pR, this, pq)._[2 * a + 1])]) return a;
    }
    return -1;
}
function pO(t, e, i, s) {
    let n,
        a = t.length,
        r = new Int32Array(a);
    for (let e = 0; e < a; e++) r[e] = +(t[e] <= s);
    for (let t = 1; t < i - 1; t++) r[t * e] = r[t * e + e - 1] = 0;
    for (let t = 0; t < e; t++) r[t] = r[e * i - 1 - t] = 0;
    let o = 1,
        l = [];
    for (let t = 1; t < i - 1; t++) {
        n = 1;
        for (let i = 1; i < e - 1; i++) {
            let s,
                a = t * e + i,
                h = r[a];
            if (0 === h) continue;
            let c = t,
                u = i;
            if (1 === h && 0 === r[a - 1]) (o += 1), (u -= 1);
            else if (h >= 1 && 0 === r[a + 1]) (o += 1), (u += 1), h > 1 && (n = h);
            else {
                1 !== h && (n = Math.abs(h));
                continue;
            }
            let p = [i, t],
                g = u === i + 1,
                f = { isHole: g, points: p, id: o, parent: 0 };
            for (let t of (l.push(f), l))
                if (t.id === n) {
                    s = t;
                    break;
                }
            s ? (s.isHole ? (f.parent = g ? s.parent : n) : (f.parent = g ? n : s.parent)) : (f.parent = g ? n : 0);
            let m = d(pR, this, pN).call(this, r, e, t, i, c, u, 0);
            if (-1 === m) {
                (r[a] = -o), 1 !== r[a] && (n = Math.abs(r[a]));
                continue;
            }
            let w = d(pR, this, pq)._[2 * m],
                b = d(pR, this, pq)._[2 * m + 1],
                v = t + w,
                A = i + b;
            (c = v), (u = A);
            let y = t,
                _ = i;
            for (;;) {
                let s = d(pR, this, pB).call(this, r, e, y, _, c, u, 1);
                (w = d(pR, this, pq)._[2 * s]), (b = d(pR, this, pq)._[2 * s + 1]);
                let l = y + w,
                    h = _ + b;
                p.push(h, l);
                let g = y * e + _;
                if (
                    (0 === r[g + 1] ? (r[g] = -o) : 1 === r[g] && (r[g] = o), l === t && h === i && y === v && _ === A)
                ) {
                    1 !== r[a] && (n = Math.abs(r[a]));
                    break;
                }
                (c = y), (u = _), (y = l), (_ = h);
            }
        }
    }
    return l;
}
function pW(t, e, i, s) {
    if (i - e <= 4) {
        for (let n = e; n < i - 2; n += 2) s.push(t[n], t[n + 1]);
        return;
    }
    let n = t[e],
        a = t[e + 1],
        r = t[i - 4] - n,
        o = t[i - 3] - a,
        l = Math.hypot(r, o),
        h = r / l,
        c = o / l,
        u = h * a - c * n,
        p = 1 / l,
        g = Math.atan(o / r),
        f = Math.cos(g),
        m = Math.sin(g),
        w = p * (Math.abs(f) + Math.abs(m)),
        b = p * (1 - w + w ** 2),
        v = Math.max(Math.atan(Math.abs(m + f) * b), Math.atan(Math.abs(m - f) * b)),
        A = 0,
        y = e;
    for (let s = e + 2; s < i - 2; s += 2) {
        let e = Math.abs(u - h * t[s + 1] + c * t[s]);
        e > A && ((y = s), (A = e));
    }
    A > (l * v) ** 2
        ? (d(pR, this, pW).call(this, t, e, y + 2, s), d(pR, this, pW).call(this, t, y, i, s))
        : s.push(n, a);
}
function pU(t) {
    let e = [],
        i = t.length;
    return d(pR, this, pW).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}
function p$(t, e, i, s, n, a) {
    let r = new Float32Array(a ** 2),
        o = -2 * s ** 2,
        l = a >> 1;
    for (let t = 0; t < a; t++) {
        let e = (t - l) ** 2;
        for (let i = 0; i < a; i++) r[t * a + i] = Math.exp((e + (i - l) ** 2) / o);
    }
    let h = new Float32Array(256),
        d = -2 * n ** 2;
    for (let t = 0; t < 256; t++) h[t] = Math.exp(t ** 2 / d);
    let c = new Uint8Array(t.length),
        u = new Uint32Array(256);
    for (let s = 0; s < i; s++)
        for (let n = 0; n < e; n++) {
            let o = s * e + n,
                d = t[o],
                p = 0,
                g = 0;
            for (let o = 0; o < a; o++) {
                let c = s + o - l;
                if (!(c < 0) && !(c >= i))
                    for (let i = 0; i < a; i++) {
                        let s = n + i - l;
                        if (s < 0 || s >= e) continue;
                        let u = t[c * e + s],
                            f = r[o * a + i] * h[Math.abs(u - d)];
                        (p += u * f), (g += f);
                    }
            }
            let f = (c[o] = Math.round(p / g));
            u[f]++;
        }
    return [c, u];
}
function pH(t) {
    let e = new Uint32Array(256);
    for (let i of t) e[i]++;
    return e;
}
function pj(t) {
    let e = new Uint8ClampedArray(t.length >> 2),
        i = -1 / 0,
        s = 1 / 0;
    for (let n = 0, a = e.length; n < a; n++) {
        let a = (e[n] = t[n << 2]);
        (i = Math.max(i, a)), (s = Math.min(s, a));
    }
    let n = 255 / (i - s);
    for (let t = 0, i = e.length; t < i; t++) e[t] = (e[t] - s) * n;
    return e;
}
function pz(t) {
    let e,
        i = -1 / 0,
        s = -1 / 0,
        n = t.findIndex((t) => 0 !== t),
        a = n,
        r = n;
    for (e = n; e < 256; e++) {
        let n = t[e];
        n > i && (e - a > s && ((s = e - a), (r = e - 1)), (i = n), (a = e));
    }
    for (e = r - 1; e >= 0 && !(t[e] > t[e + 1]); e--);
    return e;
}
function pG(t) {
    let e = t,
        { width: i, height: s } = t,
        { maxDim: n } = d(pR, this, pV)._,
        a = i,
        r = s;
    if (i > n || s > n) {
        let o = i,
            l = s,
            h = Math.log2(Math.max(i, s) / n),
            d = Math.floor(h);
        h = h === d ? d - 1 : d;
        for (let i = 0; i < h; i++) {
            let i = new OffscreenCanvas((a = Math.ceil(o / 2)), (r = Math.ceil(l / 2)));
            i.getContext("2d").drawImage(t, 0, 0, o, l, 0, 0, a, r),
                (o = a),
                (l = r),
                t !== e && t.close(),
                (t = i.transferToImageBitmap());
        }
        let c = Math.min(n / a, n / r);
        (a = Math.round(a * c)), (r = Math.round(r * c));
    }
    let o = new OffscreenCanvas(a, r).getContext("2d", { willReadFrequently: !0 });
    (o.fillStyle = "white"),
        o.fillRect(0, 0, a, r),
        (o.filter = "grayscale(1)"),
        o.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, r);
    let l = o.getImageData(0, 0, a, r).data;
    return [d(pR, this, pj).call(this, l), a, r];
}
var pV = { _: { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 } },
    pq = { _: new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]) },
    pX = class t extends uX {
        constructor() {
            super(), super.updateProperties({ fill: sH._defaultLineColor, "stroke-width": 0 });
        }
        clone() {
            let e = new t();
            return e.updateAll(this), e;
        }
    },
    pK = class t extends pT {
        constructor(t) {
            super(t), super.updateProperties({ stroke: sH._defaultLineColor, "stroke-width": 1 });
        }
        clone() {
            let e = new t(this._viewParameters);
            return e.updateAll(this), e;
        }
    },
    pY = new WeakMap(),
    pQ = new WeakMap(),
    pJ = new WeakMap(),
    pZ = new WeakMap(),
    p0 = class t extends uJ {
        constructor(t) {
            super({ ...t, mustBeCommitted: !0, name: "signatureEditor" }),
                p(this, pY, !1),
                p(this, pQ, null),
                p(this, pJ, null),
                p(this, pZ, null),
                (this._willKeepAspectRatio = !0),
                g(pJ, this, t.signatureData || null),
                g(pQ, this, null),
                (this.defaultL10nId = "pdfjs-editor-signature-editor1");
        }
        static initialize(t, e) {
            sH.initialize(t, e),
                (this._defaultDrawingOptions = new pX()),
                (this._defaultDrawnSignatureOptions = new pK(e.viewParameters));
        }
        static getDefaultDrawingOptions(t) {
            let e = this._defaultDrawingOptions.clone();
            return e.updateProperties(t), e;
        }
        static get supportMultipleDrawings() {
            return !1;
        }
        static get typesMap() {
            return F(this, "typesMap", new Map());
        }
        static get isDrawer() {
            return !1;
        }
        get telemetryFinalData() {
            return { type: "signature", hasDescription: !!f(pQ, this) };
        }
        static computeTelemetryFinalData(t) {
            let e = t.get("hasDescription");
            return { hasAltText: e.get(!0) ?? 0, hasNoAltText: e.get(!1) ?? 0 };
        }
        get isResizable() {
            return !0;
        }
        onScaleChanging() {
            null !== this._drawId && super.onScaleChanging();
        }
        render() {
            let e, i;
            if (this.div) return this.div;
            let { _isCopy: s } = this;
            if ((s && ((this._isCopy = !1), (e = this.x), (i = this.y)), super.render(), null === this._drawId))
                if (f(pJ, this)) {
                    let {
                            lines: e,
                            mustSmooth: i,
                            areContours: s,
                            description: n,
                            uuid: a,
                            heightInPage: r,
                        } = f(pJ, this),
                        {
                            rawDims: { pageWidth: o, pageHeight: l },
                            rotation: h,
                        } = this.parent.viewport,
                        d = pR.processDrawnLines({
                            lines: e,
                            pageWidth: o,
                            pageHeight: l,
                            rotation: h,
                            innerMargin: t._INNER_MARGIN,
                            mustSmooth: i,
                            areContours: s,
                        });
                    this.addSignature(d, r, n, a);
                } else
                    this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" })),
                        (this.div.hidden = !0),
                        this._uiManager.getSignature(this);
            else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: f(pQ, this) || "" }));
            return s && ((this._isCopy = !0), this._moveAfterPaste(e, i)), this.div;
        }
        setUuid(t) {
            g(pZ, this, t), this.addEditToolbar();
        }
        getUuid() {
            return f(pZ, this);
        }
        get description() {
            return f(pQ, this);
        }
        set description(t) {
            g(pQ, this, t),
                this.div &&
                    (this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t })),
                    super.addEditToolbar().then((e) => {
                        e?.updateEditSignatureButton(t);
                    }));
        }
        getSignaturePreview() {
            let { newCurves: t, areContours: e, thickness: i, width: s, height: n } = f(pJ, this),
                a = Math.max(s, n);
            return {
                areContours: e,
                outline: pR.processDrawnLines({
                    lines: { curves: t.map((t) => ({ points: t })), thickness: i, width: s, height: n },
                    pageWidth: a,
                    pageHeight: a,
                    rotation: 0,
                    innerMargin: 0,
                    mustSmooth: !1,
                    areContours: e,
                }).outline,
            };
        }
        get toolbarButtons() {
            return this._uiManager.signatureManager
                ? [["editSignature", this._uiManager.signatureManager]]
                : super.toolbarButtons;
        }
        addSignature(e, i, s, n) {
            let a,
                { x: r, y: o } = this,
                { outline: l } = g(pJ, this, e);
            g(pY, this, l instanceof pL),
                (this.description = s),
                f(pY, this)
                    ? (a = t.getDefaultDrawingOptions())
                    : (a = t._defaultDrawnSignatureOptions.clone()).updateProperties({ "stroke-width": l.thickness }),
                this._addOutlines({ drawOutlines: l, drawingOptions: a });
            let [, h] = this.pageDimensions,
                d = i / h;
            (d = d >= 1 ? 0.5 : d),
                (this.width *= d / this.height),
                this.width >= 1 && ((d *= 0.9 / this.width), (this.width = 0.9)),
                (this.height = d),
                this.setDims(),
                (this.x = r),
                (this.y = o),
                this.center(),
                this._onResized(),
                this.onScaleChanging(),
                this.rotate(),
                this._uiManager.addToAnnotationStorage(this),
                this.setUuid(n),
                this._reportTelemetry({
                    action: "pdfjs.signature.inserted",
                    data: { hasBeenSaved: !!n, hasDescription: !!s },
                }),
                (this.div.hidden = !1);
        }
        getFromImage(e) {
            let {
                rawDims: { pageWidth: i, pageHeight: s },
                rotation: n,
            } = this.parent.viewport;
            return pR.process(e, i, s, n, t._INNER_MARGIN);
        }
        getFromText(e, i) {
            let {
                rawDims: { pageWidth: s, pageHeight: n },
                rotation: a,
            } = this.parent.viewport;
            return pR.extractContoursFromText(e, i, s, n, a, t._INNER_MARGIN);
        }
        getDrawnSignature(e) {
            let {
                rawDims: { pageWidth: i, pageHeight: s },
                rotation: n,
            } = this.parent.viewport;
            return pR.processDrawnLines({
                lines: e,
                pageWidth: i,
                pageHeight: s,
                rotation: n,
                innerMargin: t._INNER_MARGIN,
                mustSmooth: !1,
                areContours: !1,
            });
        }
        createDrawingOptions({ areContours: e, thickness: i }) {
            e
                ? (this._drawingOptions = t.getDefaultDrawingOptions())
                : ((this._drawingOptions = t._defaultDrawnSignatureOptions.clone()),
                  this._drawingOptions.updateProperties({ "stroke-width": i }));
        }
        serialize(t = !1) {
            if (this.isEmpty()) return null;
            let { lines: e, points: i } = this.serializeDraw(t),
                {
                    _drawingOptions: { "stroke-width": s },
                } = this,
                n = Object.assign(super.serialize(t), {
                    isSignature: !0,
                    areContours: f(pY, this),
                    color: [0, 0, 0],
                    thickness: f(pY, this) ? 0 : s,
                });
            return (
                this.addComment(n),
                t ? ((n.paths = { lines: e, points: i }), (n.uuid = f(pZ, this)), (n.isCopy = !0)) : (n.lines = e),
                f(pQ, this) && (n.accessibilityData = { type: "Figure", alt: f(pQ, this) }),
                n
            );
        }
        static deserializeDraw(t, e, i, s, n, a) {
            return a.areContours ? pL.deserialize(t, e, i, s, n, a) : pk.deserialize(t, e, i, s, n, a);
        }
        static async deserialize(t, e, i) {
            let s = await super.deserialize(t, e, i);
            return g(pY, s, t.areContours), (s.description = t.accessibilityData?.alt || ""), g(pZ, s, t.uuid), s;
        }
    };
(0, o.t)(p0, "_type", "signature"),
    (0, o.t)(p0, "_editorType", _.SIGNATURE),
    (0, o.t)(p0, "_defaultDrawingOptions", null);
var p1 = new WeakMap(),
    p2 = new WeakMap(),
    p3 = new WeakMap(),
    p5 = new WeakMap(),
    p4 = new WeakMap(),
    p6 = new WeakMap(),
    p8 = new WeakMap(),
    p7 = new WeakMap(),
    p9 = new WeakMap(),
    gt = new WeakMap(),
    ge = new WeakMap(),
    gi = new WeakSet(),
    gs = class extends sH {
        constructor(t) {
            super({ ...t, name: "stampEditor" }),
                u(this, gi),
                p(this, p1, null),
                p(this, p2, null),
                p(this, p3, null),
                p(this, p5, null),
                p(this, p4, null),
                p(this, p6, ""),
                p(this, p8, null),
                p(this, p7, !1),
                p(this, p9, null),
                p(this, gt, !1),
                p(this, ge, !1),
                g(p5, this, t.bitmapUrl),
                g(p4, this, t.bitmapFile),
                (this.defaultL10nId = "pdfjs-editor-stamp-editor");
        }
        static initialize(t, e) {
            sH.initialize(t, e);
        }
        static isHandlingMimeForPasting(t) {
            return tA.includes(t);
        }
        static paste(t, e) {
            e.pasteEditor({ mode: _.STAMP }, { bitmapFile: t.getAsFile() });
        }
        altTextFinish() {
            this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
        }
        get telemetryFinalData() {
            return { type: "stamp", hasAltText: !!this.altTextData?.altText };
        }
        static computeTelemetryFinalData(t) {
            let e = t.get("hasAltText");
            return { hasAltText: e.get(!0) ?? 0, hasNoAltText: e.get(!1) ?? 0 };
        }
        async mlGuessAltText(t = null, e = !0) {
            if (this.hasAltTextData()) return null;
            let { mlManager: i } = this._uiManager;
            if (!i) throw Error("No ML.");
            if (!(await i.isEnabledFor("altText"))) throw Error("ML isn't enabled for alt text.");
            let { data: s, width: n, height: a } = t || this.copyCanvas(null, null, !0).imageData,
                r = await i.guess({
                    name: "altText",
                    request: { data: s, width: n, height: a, channels: s.length / (n * a) },
                });
            if (!r) throw Error("No response from the AI service.");
            if (r.error) throw Error("Error from the AI service.");
            if (r.cancel) return null;
            if (!r.output) throw Error("No valid response from the AI service.");
            let o = r.output;
            return (
                await this.setGuessedAltText(o),
                e && !this.hasAltTextData() && (this.altTextData = { alt: o, decorative: !1 }),
                o
            );
        }
        remove() {
            f(p2, this) &&
                (g(p1, this, null),
                this._uiManager.imageManager.deleteId(f(p2, this)),
                f(p8, this)?.remove(),
                g(p8, this, null),
                f(p9, this) && (clearTimeout(f(p9, this)), g(p9, this, null))),
                super.remove();
        }
        rebuild() {
            if (!this.parent) {
                f(p2, this) && d(gi, this, gr).call(this);
                return;
            }
            super.rebuild(),
                null !== this.div &&
                    (f(p2, this) && null === f(p8, this) && d(gi, this, gr).call(this),
                    this.isAttachedToDOM || this.parent.add(this));
        }
        onceAdded(t) {
            (this._isDraggable = !0), t && this.div.focus();
        }
        isEmpty() {
            return !(f(p3, this) || f(p1, this) || f(p5, this) || f(p4, this) || f(p2, this) || f(p7, this));
        }
        get toolbarButtons() {
            return [["altText", this.createAltText()]];
        }
        get isResizable() {
            return !0;
        }
        render() {
            let t, e;
            return (
                this.div ||
                    (this._isCopy && ((t = this.x), (e = this.y)),
                    super.render(),
                    (this.div.hidden = !0),
                    this.createAltText(),
                    f(p7, this) || (f(p1, this) ? d(gi, this, go).call(this) : d(gi, this, gr).call(this)),
                    this._isCopy && this._moveAfterPaste(t, e),
                    this._uiManager.addShouldRescale(this)),
                this.div
            );
        }
        setCanvas(t, e) {
            let { id: i, bitmap: s } = this._uiManager.imageManager.getFromCanvas(t, e);
            e.remove(),
                i &&
                    this._uiManager.imageManager.isValidId(i) &&
                    (g(p2, this, i), s && g(p1, this, s), g(p7, this, !1), d(gi, this, go).call(this));
        }
        _onResized() {
            this.onScaleChanging();
        }
        onScaleChanging() {
            this.parent &&
                (null !== f(p9, this) && clearTimeout(f(p9, this)),
                g(
                    p9,
                    this,
                    setTimeout(() => {
                        g(p9, this, null), d(gi, this, gh).call(this);
                    }, 200),
                ));
        }
        copyCanvas(t, e, i = !1) {
            t || (t = 224);
            let { width: s, height: n } = f(p1, this),
                a = new tv(),
                r = f(p1, this),
                o = s,
                l = n,
                h = null;
            if (e) {
                if (s > e || n > e) {
                    let t = Math.min(e / s, e / n);
                    (o = Math.floor(s * t)), (l = Math.floor(n * t));
                }
                let t = ((h = document.createElement("canvas")).width = Math.ceil(o * a.sx)),
                    i = (h.height = Math.ceil(l * a.sy));
                f(gt, this) || (r = d(gi, this, gl).call(this, t, i));
                let c = h.getContext("2d");
                c.filter = this._uiManager.hcmFilter;
                let u = "white",
                    p = "#cfcfd8";
                "none" !== this._uiManager.hcmFilter
                    ? (p = "black")
                    : ty.isDarkMode && ((u = "#8f8f9d"), (p = "#42414d"));
                let g = 15 * a.sx,
                    m = 15 * a.sy,
                    w = new OffscreenCanvas(2 * g, 2 * m),
                    b = w.getContext("2d");
                (b.fillStyle = u),
                    b.fillRect(0, 0, 2 * g, 2 * m),
                    (b.fillStyle = p),
                    b.fillRect(0, 0, g, m),
                    b.fillRect(g, m, g, m),
                    (c.fillStyle = c.createPattern(w, "repeat")),
                    c.fillRect(0, 0, t, i),
                    c.drawImage(r, 0, 0, r.width, r.height, 0, 0, t, i);
            }
            let c = null;
            if (i) {
                let e, i;
                if (a.symmetric && r.width < t && r.height < t) (e = r.width), (i = r.height);
                else if (((r = f(p1, this)), s > t || n > t)) {
                    let a = Math.min(t / s, t / n);
                    (e = Math.floor(s * a)),
                        (i = Math.floor(n * a)),
                        f(gt, this) || (r = d(gi, this, gl).call(this, e, i));
                }
                let o = new OffscreenCanvas(e, i).getContext("2d", { willReadFrequently: !0 });
                o.drawImage(r, 0, 0, r.width, r.height, 0, 0, e, i),
                    (c = { width: e, height: i, data: o.getImageData(0, 0, e, i).data });
            }
            return { canvas: h, width: o, height: l, imageData: c };
        }
        static async deserialize(t, e, i) {
            let s = null,
                n = !1;
            if (t instanceof d0) {
                let a,
                    r,
                    {
                        data: {
                            rect: o,
                            rotation: l,
                            id: h,
                            structParent: d,
                            popupRef: c,
                            richText: u,
                            contentsObj: p,
                            creationDate: g,
                            modificationDate: f,
                        },
                        container: m,
                        parent: {
                            page: { pageNumber: w },
                        },
                        canvas: b,
                    } = t;
                b
                    ? (delete t.canvas, ({ id: a, bitmap: r } = i.imageManager.getFromCanvas(m.id, b)), b.remove())
                    : ((n = !0), (t._hasNoCanvas = !0));
                let v = (await e._structTree.getAriaAttributes(`${J}${h}`))?.get("aria-label") || "";
                s = t = {
                    annotationType: _.STAMP,
                    bitmapId: a,
                    bitmap: r,
                    pageIndex: w - 1,
                    rect: o.slice(0),
                    rotation: l,
                    annotationElementId: h,
                    id: h,
                    deleted: !1,
                    accessibilityData: { decorative: !1, altText: v },
                    isSvg: !1,
                    structParent: d,
                    popupRef: c,
                    richText: u,
                    comment: p?.str || null,
                    creationDate: g,
                    modificationDate: f,
                };
            }
            let a = await super.deserialize(t, e, i),
                { rect: r, bitmap: o, bitmapUrl: l, bitmapId: h, isSvg: d, accessibilityData: c } = t;
            n
                ? (i.addMissingCanvas(t.id, a), g(p7, a, !0))
                : h && i.imageManager.isValidId(h)
                  ? (g(p2, a, h), o && g(p1, a, o))
                  : g(p5, a, l),
                g(gt, a, d);
            let [u, p] = a.pageDimensions;
            return (
                (a.width = (r[2] - r[0]) / u),
                (a.height = (r[3] - r[1]) / p),
                c && (a.altTextData = c),
                (a._initialData = s),
                t.comment && a.setCommentData(t),
                g(ge, a, !!s),
                a
            );
        }
        serialize(t = !1, e = null) {
            if (this.isEmpty()) return null;
            if (this.deleted) return this.serializeDeleted();
            let i = Object.assign(super.serialize(t), { bitmapId: f(p2, this), isSvg: f(gt, this) });
            if ((this.addComment(i), t))
                return (
                    (i.bitmapUrl = d(gi, this, gd).call(this, !0)),
                    (i.accessibilityData = this.serializeAltText(!0)),
                    (i.isCopy = !0),
                    i
                );
            let { decorative: s, altText: n } = this.serializeAltText(!1);
            if ((!s && n && (i.accessibilityData = { type: "Figure", alt: n }), this.annotationElementId)) {
                let t = d(gi, this, gc).call(this, i);
                return t.isSame
                    ? null
                    : (t.isSameAltText
                          ? delete i.accessibilityData
                          : (i.accessibilityData.structParent = this._initialData.structParent ?? -1),
                      (i.id = this.annotationElementId),
                      delete i.bitmapId,
                      i);
            }
            if (null === e) return i;
            e.stamps ||= new Map();
            let a = f(gt, this) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
            if (e.stamps.has(f(p2, this))) {
                if (f(gt, this)) {
                    let t = e.stamps.get(f(p2, this));
                    a > t.area &&
                        ((t.area = a),
                        t.serialized.bitmap.close(),
                        (t.serialized.bitmap = d(gi, this, gd).call(this, !1)));
                }
            } else e.stamps.set(f(p2, this), { area: a, serialized: i }), (i.bitmap = d(gi, this, gd).call(this, !1));
            return i;
        }
        renderAnnotationElement(t) {
            return this.deleted ? t.hide() : t.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null;
        }
    };
function gn(t, e = !1) {
    t
        ? (g(p1, this, t.bitmap),
          e || (g(p2, this, t.id), g(gt, this, t.isSvg)),
          t.file && g(p6, this, t.file.name),
          d(gi, this, go).call(this))
        : this.remove();
}
function ga() {
    if ((g(p3, this, null), this._uiManager.enableWaiting(!1), f(p8, this))) {
        if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && f(p1, this))
            return void this.addEditToolbar().then(() => {
                this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
            });
        if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && f(p1, this)) {
            this._reportTelemetry({
                action: "pdfjs.image.image_added",
                data: { alt_text_modal: !1, alt_text_type: "empty" },
            });
            try {
                this.mlGuessAltText();
            } catch {}
        }
        this.div.focus();
    }
}
function gr() {
    if (f(p2, this)) {
        this._uiManager.enableWaiting(!0),
            this._uiManager.imageManager
                .getFromId(f(p2, this))
                .then((t) => d(gi, this, gn).call(this, t, !0))
                .finally(() => d(gi, this, ga).call(this));
        return;
    }
    if (f(p5, this)) {
        let t = f(p5, this);
        g(p5, this, null),
            this._uiManager.enableWaiting(!0),
            g(
                p3,
                this,
                this._uiManager.imageManager
                    .getFromUrl(t)
                    .then((t) => d(gi, this, gn).call(this, t))
                    .finally(() => d(gi, this, ga).call(this)),
            );
        return;
    }
    if (f(p4, this)) {
        let t = f(p4, this);
        g(p4, this, null),
            this._uiManager.enableWaiting(!0),
            g(
                p3,
                this,
                this._uiManager.imageManager
                    .getFromFile(t)
                    .then((t) => d(gi, this, gn).call(this, t))
                    .finally(() => d(gi, this, ga).call(this)),
            );
        return;
    }
    let t = document.createElement("input");
    (t.type = "file"), (t.accept = tA.join(","));
    let e = this._uiManager._signal;
    g(
        p3,
        this,
        new Promise((i) => {
            t.addEventListener(
                "change",
                async () => {
                    if (t.files && 0 !== t.files.length) {
                        this._uiManager.enableWaiting(!0);
                        let e = await this._uiManager.imageManager.getFromFile(t.files[0]);
                        this._reportTelemetry({
                            action: "pdfjs.image.image_selected",
                            data: { alt_text_modal: this._uiManager.useNewAltTextFlow },
                        }),
                            d(gi, this, gn).call(this, e);
                    } else this.remove();
                    i();
                },
                { signal: e },
            ),
                t.addEventListener(
                    "cancel",
                    () => {
                        this.remove(), i();
                    },
                    { signal: e },
                );
        }).finally(() => d(gi, this, ga).call(this)),
    ),
        t.click();
}
function go() {
    let { div: t } = this,
        { width: e, height: i } = f(p1, this),
        [s, n] = this.pageDimensions;
    if (this.width) (e = this.width * s), (i = this.height * n);
    else if (e > 0.75 * s || i > 0.75 * n) {
        let t = Math.min((0.75 * s) / e, (0.75 * n) / i);
        (e *= t), (i *= t);
    }
    this._uiManager.enableWaiting(!1);
    let a = g(p8, this, document.createElement("canvas"));
    a.setAttribute("role", "img"),
        this.addContainer(a),
        (this.width = e / s),
        (this.height = i / n),
        this.setDims(),
        this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(),
        (this._initialOptions = null),
        (this._uiManager.useNewAltTextWhenAddingImage &&
            this._uiManager.useNewAltTextFlow &&
            !this.annotationElementId) ||
            (t.hidden = !1),
        d(gi, this, gh).call(this),
        f(ge, this) || (this.parent.addUndoableEditor(this), g(ge, this, !0)),
        this._reportTelemetry({ action: "inserted_image" }),
        f(p6, this) && this.div.setAttribute("aria-description", f(p6, this)),
        this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}
function gl(t, e) {
    let { width: i, height: s } = f(p1, this),
        n = i,
        a = s,
        r = f(p1, this);
    for (; n > 2 * t || a > 2 * e; ) {
        let i = n,
            s = a;
        n > 2 * t && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2)),
            a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2));
        let o = new OffscreenCanvas(n, a);
        o.getContext("2d").drawImage(r, 0, 0, i, s, 0, 0, n, a), (r = o.transferToImageBitmap());
    }
    return r;
}
function gh() {
    let [t, e] = this.parentDimensions,
        { width: i, height: s } = this,
        n = new tv(),
        a = Math.ceil(i * t * n.sx),
        r = Math.ceil(s * e * n.sy),
        o = f(p8, this);
    if (!o || (o.width === a && o.height === r)) return;
    (o.width = a), (o.height = r);
    let l = f(gt, this) ? f(p1, this) : d(gi, this, gl).call(this, a, r),
        h = o.getContext("2d");
    (h.filter = this._uiManager.hcmFilter), h.drawImage(l, 0, 0, l.width, l.height, 0, 0, a, r);
}
function gd(t) {
    if (t) {
        if (f(gt, this)) {
            let t = this._uiManager.imageManager.getSvgUrl(f(p2, this));
            if (t) return t;
        }
        let t = document.createElement("canvas");
        return (
            ({ width: t.width, height: t.height } = f(p1, this)),
            t.getContext("2d").drawImage(f(p1, this), 0, 0),
            t.toDataURL()
        );
    }
    if (f(gt, this)) {
        let [t, e] = this.pageDimensions,
            i = Math.round(this.width * t * ts.PDF_TO_CSS_UNITS),
            s = Math.round(this.height * e * ts.PDF_TO_CSS_UNITS),
            n = new OffscreenCanvas(i, s);
        return (
            n.getContext("2d").drawImage(f(p1, this), 0, 0, f(p1, this).width, f(p1, this).height, 0, 0, i, s),
            n.transferToImageBitmap()
        );
    }
    return structuredClone(f(p1, this));
}
function gc(t) {
    let {
            pageIndex: e,
            accessibilityData: { altText: i },
        } = this._initialData,
        s = t.pageIndex === e,
        n = (t.accessibilityData?.alt || "") === i;
    return {
        isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s && n,
        isSameAltText: n,
    };
}
(0, o.t)(gs, "_type", "stamp"), (0, o.t)(gs, "_editorType", _.STAMP);
var gu = new WeakMap(),
    gp = new WeakMap(),
    gg = new WeakMap(),
    gf = new WeakMap(),
    gm = new WeakMap(),
    gw = new WeakMap(),
    gb = new WeakMap(),
    gv = new WeakMap(),
    gA = new WeakMap(),
    gy = new WeakMap(),
    g_ = new WeakMap(),
    gx = new WeakMap(),
    gk = new WeakMap(),
    gM = new WeakMap(),
    gS = new WeakMap(),
    gE = new WeakMap(),
    gC = new WeakSet(),
    gT = class t {
        constructor({
            uiManager: e,
            pageIndex: i,
            div: s,
            structTreeLayer: n,
            accessibilityManager: a,
            annotationLayer: r,
            drawLayer: o,
            textLayer: l,
            viewport: h,
            l10n: d,
        }) {
            u(this, gC),
                p(this, gu, void 0),
                p(this, gp, !1),
                p(this, gg, null),
                p(this, gf, null),
                p(this, gm, null),
                p(this, gw, new Map()),
                p(this, gb, !1),
                p(this, gv, !1),
                p(this, gA, !1),
                p(this, gy, null),
                p(this, g_, null),
                p(this, gx, null),
                p(this, gk, null),
                p(this, gM, null),
                p(this, gS, -1),
                p(this, gE, void 0);
            const c = [...gN._.values()];
            if (!t._initialized) for (const i of ((t._initialized = !0), c)) i.initialize(d, e);
            e.registerEditorTypes(c),
                g(gE, this, e),
                (this.pageIndex = i),
                (this.div = s),
                g(gu, this, a),
                g(gg, this, r),
                (this.viewport = h),
                g(gx, this, l),
                (this.drawLayer = o),
                (this._structTree = n),
                f(gE, this).addLayer(this);
        }
        updatePageIndex(t) {
            this.pageIndex = t;
        }
        get isEmpty() {
            return 0 === f(gw, this).size;
        }
        get isInvisible() {
            return this.isEmpty && f(gE, this).getMode() === _.NONE;
        }
        updateToolbar(t) {
            f(gE, this).updateToolbar(t);
        }
        updateMode(t = f(gE, this).getMode()) {
            switch ((d(gC, this, gF).call(this), t)) {
                case _.NONE:
                    this.div.classList.toggle("nonEditing", !0),
                        this.disableTextSelection(),
                        this.togglePointerEvents(!1),
                        this.toggleAnnotationLayerPointerEvents(!0),
                        this.disableClick();
                    return;
                case _.INK:
                    this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
                    break;
                case _.HIGHLIGHT:
                    this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
                    break;
                default:
                    this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
            }
            this.toggleAnnotationLayerPointerEvents(!1);
            let { classList: e } = this.div;
            if ((e.toggle("nonEditing", !1), t === _.POPUP)) e.toggle("commentEditing", !0);
            else
                for (let i of (e.toggle("commentEditing", !1), gN._.values()))
                    e.toggle(`${i._type}Editing`, t === i._editorType);
            this.div.hidden = !1;
        }
        hasTextLayer(t) {
            return t === f(gx, this)?.div;
        }
        setEditingState(t) {
            f(gE, this).setEditingState(t);
        }
        addCommands(t) {
            f(gE, this).addCommands(t);
        }
        cleanUndoStack(t) {
            f(gE, this).cleanUndoStack(t);
        }
        toggleDrawing(t = !1) {
            this.div.classList.toggle("drawing", !t);
        }
        togglePointerEvents(t = !1) {
            this.div.classList.toggle("disabled", !t);
        }
        toggleAnnotationLayerPointerEvents(t = !1) {
            f(gg, this)?.togglePointerEvents(t);
        }
        async enable() {
            g(gA, this, !0),
                (this.div.tabIndex = 0),
                this.togglePointerEvents(!0),
                this.div.classList.toggle("nonEditing", !1),
                f(gM, this)?.abort(),
                g(gM, this, null);
            let t = new Set();
            for (let e of gP.call(d(gC, this)))
                e.enableEditing(),
                    e.show(!0),
                    e.annotationElementId &&
                        (f(gE, this).removeChangedExistingAnnotation(e), t.add(e.annotationElementId));
            let e = f(gg, this);
            if (e)
                for (let i of e.getEditableAnnotations()) {
                    if ((i.hide(), f(gE, this).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))) continue;
                    let e = await this.deserialize(i);
                    e && (this.addOrRebuild(e), e.enableEditing());
                }
            g(gA, this, !1),
                f(gE, this)._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
        }
        disable() {
            if (
                (g(gv, this, !0),
                (this.div.tabIndex = -1),
                this.togglePointerEvents(!1),
                this.div.classList.toggle("nonEditing", !0),
                f(gx, this) && !f(gM, this))
            ) {
                g(gM, this, new AbortController());
                let t = f(gE, this).combinedSignal(f(gM, this));
                f(gx, this).div.addEventListener(
                    "pointerdown",
                    (t) => {
                        let e,
                            { clientX: i, clientY: s, timeStamp: n } = t;
                        if (n - f(gS, this) > 500) return void g(gS, this, n);
                        g(gS, this, -1);
                        let { classList: a } = this.div;
                        a.toggle("getElements", !0);
                        let r = document.elementsFromPoint(i, s);
                        if ((a.toggle("getElements", !1), !this.div.contains(r[0]))) return;
                        let o = RegExp(`^${y}[0-9]+$`);
                        for (let t of r)
                            if (o.test(t.id)) {
                                e = t.id;
                                break;
                            }
                        if (!e) return;
                        let l = f(gw, this).get(e);
                        l?.annotationElementId === null && (t.stopPropagation(), t.preventDefault(), l.dblclick(t));
                    },
                    { signal: t, capture: !0 },
                );
            }
            let t = f(gg, this),
                e = [];
            if (t) {
                let i = new Map(),
                    s = new Map();
                for (let t of gP.call(d(gC, this))) {
                    if ((t.disableEditing(), !t.annotationElementId)) {
                        e.push(t);
                        continue;
                    }
                    if (null !== t.serialize()) {
                        i.set(t.annotationElementId, t);
                        continue;
                    }
                    s.set(t.annotationElementId, t),
                        this.getEditableAnnotation(t.annotationElementId)?.show(),
                        t.remove();
                }
                for (let e of t.getEditableAnnotations()) {
                    let { id: t } = e.data;
                    if (f(gE, this).isDeletedAnnotationElement(t)) {
                        e.updateEdited({ deleted: !0 });
                        continue;
                    }
                    let n = s.get(t);
                    if (n) {
                        n.resetAnnotationElement(e), n.show(!1), e.show();
                        continue;
                    }
                    (n = i.get(t)) &&
                        (f(gE, this).addChangedExistingAnnotation(n), n.renderAnnotationElement(e) && n.show(!1)),
                        e.show();
                }
            }
            d(gC, this, gF).call(this), this.isEmpty && (this.div.hidden = !0);
            let { classList: i } = this.div;
            for (let t of gN._.values()) i.remove(`${t._type}Editing`);
            this.disableTextSelection(),
                this.toggleAnnotationLayerPointerEvents(!0),
                t?.updateFakeAnnotations(e),
                g(gv, this, !1);
        }
        getEditableAnnotation(t) {
            return f(gg, this)?.getEditableAnnotation(t) || null;
        }
        setActiveEditor(t) {
            f(gE, this).getActive() !== t && f(gE, this).setActiveEditor(t);
        }
        enableTextSelection() {
            if (((this.div.tabIndex = -1), f(gx, this)?.div && !f(gk, this))) {
                g(gk, this, new AbortController());
                let t = f(gE, this).combinedSignal(f(gk, this));
                f(gx, this).div.addEventListener("pointerdown", d(gC, this, gD).bind(this), { signal: t }),
                    f(gx, this).div.classList.add("highlighting");
            }
        }
        disableTextSelection() {
            (this.div.tabIndex = 0),
                f(gx, this)?.div &&
                    f(gk, this) &&
                    (f(gk, this).abort(), g(gk, this, null), f(gx, this).div.classList.remove("highlighting"));
        }
        enableClick() {
            if (f(gf, this)) return;
            g(gf, this, new AbortController());
            let t = f(gE, this).combinedSignal(f(gf, this));
            this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t });
            let e = this.pointerup.bind(this);
            this.div.addEventListener("pointerup", e, { signal: t }),
                this.div.addEventListener("pointercancel", e, { signal: t });
        }
        disableClick() {
            f(gf, this)?.abort(), g(gf, this, null);
        }
        attach(t) {
            f(gw, this).set(t.id, t);
            let { annotationElementId: e } = t;
            e && f(gE, this).isDeletedAnnotationElement(e) && f(gE, this).removeDeletedAnnotationElement(t);
        }
        detach(t) {
            f(gw, this).delete(t.id),
                f(gu, this)?.removePointerInTextLayer(t.contentDiv),
                !f(gv, this) && t.annotationElementId && f(gE, this).addDeletedAnnotationElement(t);
        }
        remove(t) {
            this.detach(t), f(gE, this).removeEditor(t), t.div.remove(), (t.isAttachedToDOM = !1);
        }
        changeParent(t) {
            t.parent !== this &&
                (t.parent &&
                    t.annotationElementId &&
                    (f(gE, this).addDeletedAnnotationElement(t),
                    sH.deleteAnnotationElement(t),
                    (t.annotationElementId = null)),
                this.attach(t),
                t.parent?.detach(t),
                t.setParent(this),
                t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
        }
        add(t) {
            if (t.parent !== this || !t.isAttachedToDOM) {
                if ((this.changeParent(t), f(gE, this).addEditor(t), this.attach(t), !t.isAttachedToDOM)) {
                    let e = t.render();
                    this.div.append(e), (t.isAttachedToDOM = !0);
                }
                t.fixAndSetPosition(),
                    t.onceAdded(!f(gA, this)),
                    f(gE, this).addToAnnotationStorage(t),
                    t._reportTelemetry(t.telemetryInitialData);
            }
        }
        moveEditorInDOM(t) {
            if (!t.isAttachedToDOM) return;
            let { activeElement: e } = document;
            t.div.contains(e) &&
                !f(gm, this) &&
                ((t._focusEventsAllowed = !1),
                g(
                    gm,
                    this,
                    setTimeout(() => {
                        g(gm, this, null),
                            t.div.contains(document.activeElement)
                                ? (t._focusEventsAllowed = !0)
                                : (t.div.addEventListener(
                                      "focusin",
                                      () => {
                                          t._focusEventsAllowed = !0;
                                      },
                                      { once: !0, signal: f(gE, this)._signal },
                                  ),
                                  e.focus());
                    }, 0),
                )),
                (t._structTreeParentId = f(gu, this)?.moveElementInDOM(this.div, t.div, t.contentDiv, !0));
        }
        addOrRebuild(t) {
            t.needsToBeRebuilt() ? ((t.parent ||= this), t.rebuild(), t.show()) : this.add(t);
        }
        addUndoableEditor(t) {
            this.addCommands({
                cmd: () => t._uiManager.rebuild(t),
                undo: () => {
                    t.remove();
                },
                mustExec: !1,
            });
        }
        getEditorByUID(t) {
            for (let e of f(gw, this).values()) if (e.uid === t) return e;
            return null;
        }
        getNextId() {
            return f(gE, this).getId();
        }
        combinedSignal(t) {
            return f(gE, this).combinedSignal(t);
        }
        canCreateNewEmptyEditor() {
            return gI.call(d(gC, this))?.canCreateNewEmptyEditor();
        }
        async pasteEditor(t, e) {
            this.updateToolbar(t), await f(gE, this).updateMode(t.mode);
            let { offsetX: i, offsetY: s } = d(gC, this, gR).call(this),
                n = this.getNextId(),
                a = d(gC, this, gL).call(this, {
                    parent: this,
                    id: n,
                    x: i,
                    y: s,
                    uiManager: f(gE, this),
                    isCentered: !0,
                    ...e,
                });
            a && this.add(a);
        }
        async deserialize(t) {
            return (
                (await gN._.get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, f(gE, this))) || null
            );
        }
        createAndAddNewEditor(t, e, i = {}) {
            let s = this.getNextId(),
                n = d(gC, this, gL).call(this, {
                    parent: this,
                    id: s,
                    x: t.offsetX,
                    y: t.offsetY,
                    uiManager: f(gE, this),
                    isCentered: e,
                    ...i,
                });
            return n && this.add(n), n;
        }
        get boundingClientRect() {
            return this.div.getBoundingClientRect();
        }
        addNewEditor(t = {}) {
            this.createAndAddNewEditor(d(gC, this, gR).call(this), !0, t);
        }
        setSelected(t) {
            f(gE, this).setSelected(t);
        }
        toggleSelected(t) {
            f(gE, this).toggleSelected(t);
        }
        unselect(t) {
            f(gE, this).unselect(t);
        }
        pointerup(t) {
            let { isMac: e } = z.platform;
            if (
                0 !== t.button ||
                (t.ctrlKey && e) ||
                t.target !== this.div ||
                !f(gb, this) ||
                (g(gb, this, !1), gI.call(d(gC, this))?.isDrawer && gI.call(d(gC, this)).supportMultipleDrawings)
            )
                return;
            if (!f(gp, this)) return void g(gp, this, !0);
            let i = f(gE, this).getMode();
            i === _.STAMP || i === _.SIGNATURE ? f(gE, this).unselectAll() : this.createAndAddNewEditor(t, !1);
        }
        pointerdown(t) {
            if ((f(gE, this).getMode() === _.HIGHLIGHT && this.enableTextSelection(), f(gb, this)))
                return void g(gb, this, !1);
            let { isMac: e } = z.platform;
            if (0 !== t.button || (t.ctrlKey && e) || t.target !== this.div) return;
            if ((g(gb, this, !0), gI.call(d(gC, this))?.isDrawer)) return void this.startDrawingSession(t);
            let i = f(gE, this).getActive();
            g(gp, this, !i || i.isEmpty());
        }
        startDrawingSession(t) {
            if ((this.div.focus({ preventScroll: !0 }), f(gy, this)))
                return void gI.call(d(gC, this)).startDrawing(this, f(gE, this), !1, t);
            f(gE, this).setCurrentDrawingSession(this), g(gy, this, new AbortController());
            let e = f(gE, this).combinedSignal(f(gy, this));
            this.div.addEventListener(
                "blur",
                ({ relatedTarget: t }) => {
                    t && !this.div.contains(t) && (g(g_, this, null), this.commitOrRemove());
                },
                { signal: e },
            ),
                gI.call(d(gC, this)).startDrawing(this, f(gE, this), !1, t);
        }
        pause(t) {
            if (t) {
                let { activeElement: t } = document;
                this.div.contains(t) && g(g_, this, t);
                return;
            }
            f(g_, this) &&
                setTimeout(() => {
                    f(g_, this)?.focus(), g(g_, this, null);
                }, 0);
        }
        endDrawingSession(t = !1) {
            return f(gy, this)
                ? (f(gE, this).setCurrentDrawingSession(null),
                  f(gy, this).abort(),
                  g(gy, this, null),
                  g(g_, this, null),
                  gI.call(d(gC, this)).endDrawing(t))
                : null;
        }
        findNewParent(t, e, i) {
            let s = f(gE, this).findParent(e, i);
            return null !== s && s !== this && (s.changeParent(t), !0);
        }
        commitOrRemove() {
            return !!f(gy, this) && (this.endDrawingSession(), !0);
        }
        onScaleChanging() {
            f(gy, this) && gI.call(d(gC, this)).onScaleChangingWhenDrawing(this);
        }
        destroy() {
            for (let t of (this.commitOrRemove(),
            f(gE, this).getActive()?.parent === this &&
                (f(gE, this).commitOrRemove(), f(gE, this).setActiveEditor(null)),
            f(gm, this) && (clearTimeout(f(gm, this)), g(gm, this, null)),
            f(gw, this).values()))
                f(gu, this)?.removePointerInTextLayer(t.contentDiv),
                    t.setParent(null),
                    (t.isAttachedToDOM = !1),
                    t.div.remove();
            (this.div = null), f(gw, this).clear(), f(gE, this).removeLayer(this);
        }
        render({ viewport: t }) {
            for (let e of ((this.viewport = t), tb(this.div, t), f(gE, this).getEditors(this.pageIndex)))
                this.add(e), e.rebuild();
            this.updateMode();
        }
        update({ viewport: t }) {
            f(gE, this).commitOrRemove(), d(gC, this, gF).call(this);
            let e = this.viewport.rotation,
                i = t.rotation;
            if (((this.viewport = t), tb(this.div, { rotation: i }), e !== i))
                for (let t of f(gw, this).values()) t.rotate(i);
        }
        get pageDimensions() {
            let { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
            return [t, e];
        }
        get scale() {
            return f(gE, this).viewParameters.realScale;
        }
    };
function gP() {
    return 0 !== f(gw, this).size ? f(gw, this).values() : f(gE, this).getEditors(this.pageIndex);
}
function gD(t) {
    f(gE, this).unselectAll();
    let { target: e } = t;
    if (
        e === f(gx, this).div ||
        (("img" === e.getAttribute("role") || e.classList.contains("endOfContent")) && f(gx, this).div.contains(e))
    ) {
        let { isMac: e } = z.platform;
        if (0 !== t.button || (t.ctrlKey && e)) return;
        f(gE, this).showAllEditors("highlight", !0, !0),
            f(gx, this).div.classList.add("free"),
            this.toggleDrawing(),
            uP.startHighlighting(this, "ltr" === f(gE, this).direction, { target: f(gx, this).div, x: t.x, y: t.y }),
            f(gx, this).div.addEventListener(
                "pointerup",
                () => {
                    f(gx, this).div.classList.remove("free"), this.toggleDrawing(!0);
                },
                { once: !0, signal: f(gE, this)._signal },
            ),
            t.preventDefault();
    }
}
function gI() {
    return gN._.get(f(gE, this).getMode());
}
function gL(t) {
    let e = gI.call(d(gC, this));
    return e ? new e.prototype.constructor(t) : null;
}
function gR() {
    let { x: t, y: e, width: i, height: s } = this.boundingClientRect,
        n = Math.max(0, t),
        a = Math.max(0, e),
        r = Math.min(window.innerWidth, t + i),
        o = Math.min(window.innerHeight, e + s),
        l = (n + r) / 2 - t,
        h = (a + o) / 2 - e,
        [d, c] = this.viewport.rotation % 180 == 0 ? [l, h] : [h, l];
    return { offsetX: d, offsetY: c };
}
function gF() {
    for (let t of f(gw, this).values()) t.isEmpty() && t.remove();
}
(0, o.t)(gT, "_initialized", !1);
var gN = { _: new Map([cp, pD, gs, uP, p0].map((t) => [t._editorType, t])) },
    gB = new WeakMap(),
    gO = new WeakMap(),
    gW = new WeakMap(),
    gU = new WeakSet(),
    g$ = class t {
        constructor() {
            u(this, gU), p(this, gB, null), p(this, gO, new Map()), p(this, gW, new Map());
        }
        setParent(t) {
            if (!f(gB, this)) return void g(gB, this, t);
            if (f(gB, this) !== t) {
                if (f(gO, this).size > 0) for (let e of f(gO, this).values()) e.remove(), t.append(e);
                g(gB, this, t);
            }
        }
        static get _svgFactory() {
            return F(this, "_svgFactory", new hT());
        }
        draw(e, i = !1, s = !1) {
            var n, a;
            let r = ((n = gV._), (a = n++), (gV._ = n), a),
                o = d(gU, this, gj).call(this),
                l = t._svgFactory.createElement("defs");
            o.append(l);
            let h = t._svgFactory.createElement("path");
            l.append(h);
            let c = `path_${r}`;
            h.setAttribute("id", c), h.setAttribute("vector-effect", "non-scaling-stroke"), i && f(gW, this).set(r, h);
            let u = s ? d(gU, this, gz).call(this, l, c) : null,
                p = t._svgFactory.createElement("use");
            return (
                o.append(p),
                p.setAttribute("href", `#${c}`),
                this.updateProperties(o, e),
                f(gO, this).set(r, o),
                { id: r, clipPathId: `url(#${u})` }
            );
        }
        drawOutline(e, i) {
            var s, n;
            let a,
                r = ((s = gV._), (n = s++), (gV._ = s), n),
                o = d(gU, this, gj).call(this),
                l = t._svgFactory.createElement("defs");
            o.append(l);
            let h = t._svgFactory.createElement("path");
            l.append(h);
            let c = `path_${r}`;
            if ((h.setAttribute("id", c), h.setAttribute("vector-effect", "non-scaling-stroke"), i)) {
                let e = t._svgFactory.createElement("mask");
                l.append(e),
                    (a = `mask_${r}`),
                    e.setAttribute("id", a),
                    e.setAttribute("maskUnits", "objectBoundingBox");
                let i = t._svgFactory.createElement("rect");
                e.append(i),
                    i.setAttribute("width", "1"),
                    i.setAttribute("height", "1"),
                    i.setAttribute("fill", "white");
                let s = t._svgFactory.createElement("use");
                e.append(s),
                    s.setAttribute("href", `#${c}`),
                    s.setAttribute("stroke", "none"),
                    s.setAttribute("fill", "black"),
                    s.setAttribute("fill-rule", "nonzero"),
                    s.classList.add("mask");
            }
            let u = t._svgFactory.createElement("use");
            o.append(u), u.setAttribute("href", `#${c}`), a && u.setAttribute("mask", `url(#${a})`);
            let p = u.cloneNode();
            return (
                o.append(p),
                u.classList.add("mainOutline"),
                p.classList.add("secondaryOutline"),
                this.updateProperties(o, e),
                f(gO, this).set(r, o),
                r
            );
        }
        finalizeDraw(t, e) {
            f(gW, this).delete(t), this.updateProperties(t, e);
        }
        updateProperties(e, i) {
            if (!i) return;
            let { root: s, bbox: n, rootClass: a, path: r } = i,
                o = "number" == typeof e ? f(gO, this).get(e) : e;
            if (o) {
                if ((s && d(gU, this, gG).call(this, o, s), n && gH.call(t, o, n), a)) {
                    let { classList: t } = o;
                    for (let [e, i] of Object.entries(a)) t.toggle(e, i);
                }
                if (r) {
                    let t = o.firstElementChild.firstElementChild;
                    d(gU, this, gG).call(this, t, r);
                }
            }
        }
        updateParent(t, e) {
            if (e === this) return;
            let i = f(gO, this).get(t);
            i && (f(gB, e).append(i), f(gO, this).delete(t), f(gO, e).set(t, i));
        }
        remove(t) {
            f(gW, this).delete(t), null !== f(gB, this) && (f(gO, this).get(t).remove(), f(gO, this).delete(t));
        }
        destroy() {
            for (let t of (g(gB, this, null), f(gO, this).values())) t.remove();
            f(gO, this).clear(), f(gW, this).clear();
        }
    };
function gH(t, [e, i, s, n]) {
    let { style: a } = t;
    (a.top = `${100 * i}%`), (a.left = `${100 * e}%`), (a.width = `${100 * s}%`), (a.height = `${100 * n}%`);
}
function gj() {
    let t = g$._svgFactory.create(1, 1, !0);
    return f(gB, this).append(t), t.setAttribute("aria-hidden", !0), t;
}
function gz(t, e) {
    let i = g$._svgFactory.createElement("clipPath");
    t.append(i);
    let s = `clip_${e}`;
    i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
    let n = g$._svgFactory.createElement("use");
    return i.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), s;
}
function gG(t, e) {
    for (let [i, s] of Object.entries(e)) null === s ? t.removeAttribute(i) : t.setAttribute(i, s);
}
var gV = { _: 0 };
(globalThis._pdfjsTestingUtils = { HighlightOutliner: ut }),
    (globalThis.pdfjsLib = {
        AbortException: H,
        AnnotationEditorLayer: gT,
        AnnotationEditorParamsType: x,
        AnnotationEditorType: _,
        AnnotationEditorUIManager: ih,
        AnnotationLayer: cn,
        AnnotationMode: A,
        AnnotationType: M,
        applyOpacity: function (t, e, i, s) {
            let n = 255 * (1 - (s = Math.min(Math.max(s ?? 1, 0), 1)));
            return [(t = Math.round(t * s + n)), (e = Math.round(e * s + n)), (i = Math.round(i * s + n))];
        },
        build: "384c6208b",
        ColorPicker: hu,
        createValidAbsoluteUrl: L,
        CSSConstants: t_,
        DOMSVGFactory: hT,
        DrawLayer: g$,
        FeatureTest: z,
        fetchData: tn,
        findContrastColor: function (t, e) {
            let i = t[0] + 256 * t[1] + 65536 * t[2] + 0x1000000 * e[0] + 0x100000000 * e[1] + 0x10000000000 * e[2],
                s = tE.get(i);
            if (s) return s;
            let n = new Float32Array(9),
                a = n.subarray(0, 3),
                r = n.subarray(3, 6);
            tx(t, r);
            let o = n.subarray(6, 9);
            tx(e, o);
            let l = o[2] < 0.5,
                h = l ? 12 : 4.5;
            if (((r[2] = l ? Math.sqrt(r[2]) : 1 - Math.sqrt(1 - r[2])), tS(r, o, a) < h)) {
                let t, e;
                for (l ? ((t = r[2]), (e = 1)) : ((t = 0), (e = r[2])); e - t > 0.005; ) {
                    let i = (r[2] = (t + e) / 2);
                    l === tS(r, o, a) < h ? (t = i) : (e = i);
                }
                r[2] = l ? e : t;
            }
            return (
                tk(r, a),
                (s = V.makeHexColor(Math.round(255 * a[0]), Math.round(255 * a[1]), Math.round(255 * a[2]))),
                tE.set(i, s),
                s
            );
        },
        getDocument: lv,
        getFilenameFromUrl: function (t) {
            return ([t] = t.split(/[#?]/, 1)), t.substring(t.lastIndexOf("/") + 1);
        },
        getPdfFilenameFromUrl: function (t, e = "document.pdf") {
            if ("string" != typeof t) return e;
            if (to(t)) return P('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
            let i = ((t) => {
                try {
                    return new URL(t);
                } catch {
                    try {
                        return new URL(decodeURIComponent(t));
                    } catch {
                        try {
                            return new URL(t, "https://foo.bar");
                        } catch {
                            try {
                                return new URL(decodeURIComponent(t), "https://foo.bar");
                            } catch {
                                return null;
                            }
                        }
                    }
                }
            })(t);
            if (!i) return e;
            let s = (t) => {
                    try {
                        let e = decodeURIComponent(t);
                        if (e.includes("/")) {
                            if ((e = e.split("/").at(-1)).test(/^\.pdf$/i)) return e;
                            return t;
                        }
                        return e;
                    } catch {
                        return t;
                    }
                },
                n = /\.pdf$/i,
                a = i.pathname.split("/").at(-1);
            if (n.test(a)) return s(a);
            if (i.searchParams.size > 0) {
                for (let t of Array.from(i.searchParams.values()).reverse()) if (n.test(t)) return s(t);
                for (let t of Array.from(i.searchParams.keys()).reverse()) if (n.test(t)) return s(t);
            }
            if (i.hash) {
                let t = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
                if (t) return s(t[0]);
            }
            return e;
        },
        getRGB: tf,
        getUuid: Q,
        getXfaPageViewport: function (t, { scale: e = 1, rotation: i = 0 }) {
            let { width: s, height: n } = t.attributes.style;
            return new ta({ viewBox: [0, 0, parseInt(s), parseInt(n)], userUnit: 1, scale: e, rotation: i });
        },
        GlobalWorkerOptions: rV,
        ImageKind: k,
        InvalidPDFException: W,
        isDataScheme: to,
        isPdfFile: tl,
        isValidExplicitDest: nJ,
        MathClamp: Z,
        noContextMenu: tc,
        normalizeUnicode: function (t) {
            return (
                K ||
                    ((K =
                        /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
                    (Y = new Map([["\uFB05", "\u017Ft"]]))),
                t.replaceAll(K, (t, e, i) => (e ? e.normalize("NFKC") : Y.get(i)))
            );
        },
        OPS: E,
        OutputScale: tv,
        PagesMapper: tD,
        PasswordResponses: { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 },
        PDFDataRangeTransport: lE,
        PDFDateString: tp,
        PDFWorker: lW,
        PermissionFlag: {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048,
        },
        PixelsPerInch: ts,
        RenderingCancelledException: tr,
        renderRichText: tC,
        ResponseException: U,
        setLayerDimensions: tb,
        shadow: F,
        SignatureExtractor: pR,
        stopEvent: tu,
        SupportedImageMimeTypes: tA,
        TextLayer: lr,
        TouchManager: sc,
        updateUrlHash: R,
        Util: V,
        VerbosityLevel: S,
        version: "5.4.624",
        XfaLayer: te,
    });
