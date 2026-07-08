i.d(e, { GlobalWorkerOptions: () => rV, getDocument: () => lv });
var s = i(695742),
    a = i(72290),
    n = i(264572).Buffer;
function r(t, e, i) {
    if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : i;
    throw TypeError("Private element is not present on this object");
}
function o(t, e) {
    if (e.has(t)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
function l(t, e) {
    o(t, e), e.add(t);
}
function h(t, e, i) {
    o(t, e), e.set(t, i);
}
function d(t, e, i) {
    return t.set(r(t, e), i), i;
}
function c(t, e) {
    return t.get(r(t, e));
}
function u(t, e, i) {
    e ||= [];
    var s = e.length++;
    return Object.defineProperty({}, "_", {
        set: function (a) {
            (e[s] = a), t.apply(i, e);
        },
    });
}
var p,
    g,
    f,
    m,
    w = {};
(w.d = (t, e) => {
    for (var i in e) w.o(e, i) && !w.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
}),
    (w.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var b =
        "object" == typeof a &&
        a + "" == "[object process]" &&
        !a.versions.nw &&
        !(a.versions.electron && a.type && "browser" !== a.type),
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
    C = {
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
    E = S.WARNINGS;
function T(t) {
    E >= S.INFOS && console.info(`Info: ${t}`);
}
function P(t) {
    E >= S.WARNINGS && console.warn(`Warning: ${t}`);
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
    let a = e ? URL.parse(t, e) : URL.parse(t);
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
    })(a)
        ? null
        : a;
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
                a = t[i + 1];
            (t[i] = s * e[0] + a * e[2] + e[4]), (t[i + 1] = s * e[1] + a * e[3] + e[5]);
        }
        static applyTransformToBezier(t, e, i = 0) {
            let s = e[0],
                a = e[1],
                n = e[2],
                r = e[3],
                o = e[4],
                l = e[5];
            for (let e = 0; e < 6; e += 2) {
                let h = t[i + e],
                    d = t[i + e + 1];
                (t[i + e] = h * s + d * n + o), (t[i + e + 1] = h * a + d * r + l);
            }
        }
        static applyInverseTransform(t, e) {
            let i = t[0],
                s = t[1],
                a = e[0] * e[3] - e[1] * e[2];
            (t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / a),
                (t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / a);
        }
        static axialAlignedBoundingBox(t, e, i) {
            let s = e[0],
                a = e[1],
                n = e[2],
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
            if (0 !== a || 0 !== n) {
                let t = a * h,
                    e = a * c,
                    i = n * d,
                    s = n * u;
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
                a = t[2],
                n = t[3],
                r = i ** 2 + s ** 2,
                o = a ** 2 + n ** 2,
                l = (r + o) / 2,
                h = Math.sqrt(l ** 2 - (r * o - (i * a + s * n) ** 2));
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
            let a = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                n = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
            return a > n ? null : [i, a, s, n];
        }
        static pointBoundingBox(t, e, i) {
            (i[0] = Math.min(i[0], t)),
                (i[1] = Math.min(i[1], e)),
                (i[2] = Math.max(i[2], t)),
                (i[3] = Math.max(i[3], e));
        }
        static rectBoundingBox(t, e, i, s, a) {
            (a[0] = Math.min(a[0], t, i)),
                (a[1] = Math.min(a[1], e, s)),
                (a[2] = Math.max(a[2], t, i)),
                (a[3] = Math.max(a[3], e, s));
        }
        static bezierBoundingBox(e, i, s, a, n, o, l, h, d) {
            (d[0] = Math.min(d[0], e, l)),
                (d[1] = Math.min(d[1], i, h)),
                (d[2] = Math.max(d[2], e, l)),
                (d[3] = Math.max(d[3], i, h)),
                r(t, this, q).call(
                    this,
                    e,
                    s,
                    n,
                    l,
                    i,
                    a,
                    o,
                    h,
                    3 * (-e + 3 * (s - n) + l),
                    6 * (e - 2 * s + n),
                    3 * (s - e),
                    d,
                ),
                r(t, this, q).call(
                    this,
                    e,
                    s,
                    n,
                    l,
                    i,
                    a,
                    o,
                    h,
                    3 * (-i + 3 * (a - o) + h),
                    6 * (i - 2 * a + o),
                    3 * (a - i),
                    d,
                );
        }
    };
function X(t, e, i, s, a, n, r, o, l, h) {
    if (l <= 0 || l >= 1) return;
    let d = 1 - l,
        c = l * l,
        u = c * l,
        p = d * (d * (d * t + 3 * l * e) + 3 * c * i) + u * s,
        g = d * (d * (d * a + 3 * l * n) + 3 * c * r) + u * o;
    (h[0] = Math.min(h[0], p)), (h[1] = Math.min(h[1], g)), (h[2] = Math.max(h[2], p)), (h[3] = Math.max(h[3], g));
}
function q(t, e, i, s, a, n, o, l, h, d, c, u) {
    if (1e-12 > Math.abs(h)) {
        Math.abs(d) >= 1e-12 && r(V, this, X).call(this, t, e, i, s, a, n, o, l, -c / d, u);
        return;
    }
    let p = d ** 2 - 4 * c * h;
    if (p < 0) return;
    let g = Math.sqrt(p),
        f = 2 * h;
    r(V, this, X).call(this, t, e, i, s, a, n, o, l, (-d + g) / f, u),
        r(V, this, X).call(this, t, e, i, s, a, n, o, l, (-d - g) / f, u);
}
var Y = null,
    K = null;
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
                let a = Math.min(s + 8192, e),
                    n = t.subarray(s, a);
                i.push(String.fromCharCode.apply(null, n));
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
                (function e(s) {
                    if (!s) return;
                    let a = null,
                        n = s.name;
                    if ("#text" === n) a = s.value;
                    else {
                        if (!t.shouldBuildText(n)) return;
                        s?.attributes?.textContent ? (a = s.attributes.textContent) : s.value && (a = s.value);
                    }
                    if ((null !== a && i.push({ str: a }), s.children)) for (let t of s.children) e(t);
                })(e),
                s
            );
        }
        static shouldBuildText(t) {
            return "textarea" !== t && "input" !== t && "option" !== t && "select" !== t;
        }
    },
    te = class {
        static setupStorage(t, e, i, s, a) {
            let n = s.getValue(e, { value: null });
            switch (i.name) {
                case "textarea":
                    if ((null !== n.value && (t.textContent = n.value), "print" === a)) break;
                    t.addEventListener("input", (t) => {
                        s.setValue(e, { value: t.target.value });
                    });
                    break;
                case "input":
                    if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                        if (
                            (n.value === i.attributes.xfaOn
                                ? t.setAttribute("checked", !0)
                                : n.value === i.attributes.xfaOff && t.removeAttribute("checked"),
                            "print" === a)
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
                        if ((null !== n.value && t.setAttribute("value", n.value), "print" === a)) break;
                        t.addEventListener("input", (t) => {
                            s.setValue(e, { value: t.target.value });
                        });
                    }
                    break;
                case "select":
                    if (null !== n.value)
                        for (let e of (t.setAttribute("value", n.value), i.children))
                            e.attributes.value === n.value
                                ? (e.attributes.selected = !0)
                                : e.attributes.hasOwnProperty("selected") && delete e.attributes.selected;
                    t.addEventListener("input", (t) => {
                        let i = t.target.options,
                            a = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
                        s.setValue(e, { value: a });
                    });
            }
        }
        static setAttributes({ html: t, element: e, storage: i = null, intent: s, linkService: a }) {
            let { attributes: n } = e,
                r = t instanceof HTMLAnchorElement;
            for (let [e, i] of ("radio" === n.type && (n.name = `${n.name}-${s}`), Object.entries(n)))
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
            r && a.addLinkAttributes(t, n.href, n.newWindow), i && n.dataId && this.setupStorage(t, n.dataId, e, i);
        }
        static render(t) {
            let e = t.annotationStorage,
                i = t.linkService,
                s = t.xfaHtml,
                a = t.intent || "display",
                n = document.createElement(s.name);
            s.attributes && this.setAttributes({ html: n, element: s, intent: a, linkService: i });
            let r = "richText" !== a,
                o = t.div;
            if ((o.append(n), t.viewport)) {
                let e = `matrix(${t.viewport.transform.join(",")})`;
                o.style.transform = e;
            }
            r && o.setAttribute("class", "xfaLayer xfaFont");
            let l = [];
            if (0 === s.children.length) {
                if (s.value) {
                    let t = document.createTextNode(s.value);
                    n.append(t), r && tt.shouldBuildText(s.name) && l.push(t);
                }
                return { textDivs: l };
            }
            let h = [[s, -1, n]];
            for (; h.length > 0; ) {
                let [t, s, n] = h.at(-1);
                if (s + 1 === t.children.length) {
                    h.pop();
                    continue;
                }
                let o = t.children[++h.at(-1)[1]];
                if (null === o) continue;
                let { name: d } = o;
                if ("#text" === d) {
                    let t = document.createTextNode(o.value);
                    l.push(t), n.append(t);
                    continue;
                }
                let c = o?.attributes?.xmlns
                    ? document.createElementNS(o.attributes.xmlns, d)
                    : document.createElement(d);
                if (
                    (n.append(c),
                    o.attributes && this.setAttributes({ html: c, element: o, storage: e, intent: a, linkService: i }),
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
async function ta(t, e = "text") {
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
        let a = new XMLHttpRequest();
        a.open("GET", t, !0),
            (a.responseType = e),
            (a.onreadystatechange = () => {
                if (a.readyState === XMLHttpRequest.DONE) {
                    if (200 === a.status || 0 === a.status) {
                        switch (e) {
                            case "arraybuffer":
                            case "blob":
                            case "json":
                                i(a.response);
                                return;
                        }
                        i(a.responseText);
                        return;
                    }
                    s(Error(a.statusText));
                }
            }),
            a.send(null);
    });
}
(0, s.t)(ts, "CSS", 96), (0, s.t)(ts, "PDF", 72), (0, s.t)(ts, "PDF_TO_CSS_UNITS", ts.CSS / ts.PDF);
var tn = class t {
        constructor({
            viewBox: t,
            userUnit: e,
            scale: i,
            rotation: s,
            offsetX: a = 0,
            offsetY: n = 0,
            dontFlip: r = !1,
        }) {
            let o, l, h, d;
            (this.viewBox = t),
                (this.userUnit = e),
                (this.scale = i),
                (this.rotation = s),
                (this.offsetX = a),
                (this.offsetY = n),
                (i *= e);
            let c = (t[2] + t[0]) / 2,
                u = (t[3] + t[1]) / 2,
                p,
                g,
                f,
                m;
            switch (((s %= 360) < 0 && (s += 360), s)) {
                case 180:
                    (p = -1), (g = 0), (f = 0), (m = 1);
                    break;
                case 90:
                    (p = 0), (g = 1), (f = 1), (m = 0);
                    break;
                case 270:
                    (p = 0), (g = -1), (f = -1), (m = 0);
                    break;
                case 0:
                    (p = 1), (g = 0), (f = 0), (m = -1);
                    break;
                default:
                    throw Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            r && ((f = -f), (m = -m)),
                0 === p
                    ? ((o = Math.abs(u - t[1]) * i + a),
                      (l = Math.abs(c - t[0]) * i + n),
                      (h = (t[3] - t[1]) * i),
                      (d = (t[2] - t[0]) * i))
                    : ((o = Math.abs(c - t[0]) * i + a),
                      (l = Math.abs(u - t[1]) * i + n),
                      (h = (t[2] - t[0]) * i),
                      (d = (t[3] - t[1]) * i)),
                (this.transform = [p * i, g * i, f * i, m * i, o - p * i * c - f * i * u, l - g * i * c - m * i * u]),
                (this.width = h),
                (this.height = d);
        }
        get rawDims() {
            let t = this.viewBox;
            return F(this, "rawDims", { pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1] });
        }
        clone({
            scale: e = this.scale,
            rotation: i = this.rotation,
            offsetX: s = this.offsetX,
            offsetY: a = this.offsetY,
            dontFlip: n = !1,
        } = {}) {
            return new t({
                viewBox: this.viewBox.slice(),
                userUnit: this.userUnit,
                scale: e,
                rotation: i,
                offsetX: s,
                offsetY: a,
                dontFlip: n,
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
        (0, s.t)(this, "started", Object.create(null)), (0, s.t)(this, "times", []);
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
        for (let { name: i, start: s, end: a } of this.times)
            t.push(`${i.padEnd(e)} ${a - s}ms
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
            r(t, this, tg)._ || (tg._ = r(t, this, null));
            let i = r(t, this, tg)._.exec(e);
            if (!i) return null;
            let s = parseInt(i[1], 10),
                a = parseInt(i[2], 10);
            a = a >= 1 && a <= 12 ? a - 1 : 0;
            let n = parseInt(i[3], 10);
            n = n >= 1 && n <= 31 ? n : 1;
            let o = parseInt(i[4], 10);
            o = o >= 0 && o <= 23 ? o : 0;
            let l = parseInt(i[5], 10);
            l = l >= 0 && l <= 59 ? l : 0;
            let h = parseInt(i[6], 10);
            h = h >= 0 && h <= 59 ? h : 0;
            let d = i[7] || "Z",
                c = parseInt(i[8], 10);
            c = c >= 0 && c <= 23 ? c : 0;
            let u = parseInt(i[9], 10) || 0;
            return (
                (u = u >= 0 && u <= 59 ? u : 0),
                "-" === d ? ((o += c), (l += u)) : "+" === d && ((o -= c), (l -= u)),
                new Date(Date.UTC(s, a, n, o, l, h))
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
    let { a: e, b: i, c: s, d: a, e: n, f: r } = t.getTransform();
    return [e, i, s, a, n, r];
}
function tw(t) {
    let { a: e, b: i, c: s, d: a, e: n, f: r } = t.getTransform().invertSelf();
    return [e, i, s, a, n, r];
}
function tb(t, e, i = !1, s = !0) {
    if (e instanceof tn) {
        let { pageWidth: s, pageHeight: a } = e.rawDims,
            { style: n } = t,
            r = z.isCSSRoundSupported,
            o = `var(--total-scale-factor) * ${s}px`,
            l = `var(--total-scale-factor) * ${a}px`,
            h = r ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`,
            d = r ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
        i && e.rotation % 180 != 0 ? ((n.width = d), (n.height = h)) : ((n.width = h), (n.height = d));
    }
    s && t.setAttribute("data-main-rotation", e.rotation);
}
var tv = class t {
        constructor() {
            let { pixelRatio: e } = t;
            (this.sx = e), (this.sy = e);
        }
        get scaled() {
            return 1 !== this.sx || 1 !== this.sy;
        }
        get symmetric() {
            return this.sx === this.sy;
        }
        limitCanvas(e, i, s, a, n = -1) {
            let r = 1 / 0,
                o = 1 / 0,
                l = 1 / 0;
            (s = t.capPixels(s, n)) > 0 && (r = Math.sqrt(s / (e * i))), -1 !== a && ((o = a / e), (l = a / i));
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
        a = t[2] / 255,
        n = Math.max(i, s, a),
        r = Math.min(i, s, a),
        o = (n + r) / 2;
    if (n === r) e[0] = e[1] = 0;
    else {
        let t = n - r;
        switch (((e[1] = o < 0.5 ? t / (n + r) : t / (2 - n - r)), n)) {
            case i:
                e[0] = ((s - a) / t + 6 * (s < a)) * 60;
                break;
            case s:
                e[0] = ((a - i) / t + 2) * 60;
                break;
            case a:
                e[0] = ((i - s) / t + 4) * 60;
        }
    }
    e[2] = o;
}
function tk(t, e) {
    let i = t[0],
        s = t[1],
        a = t[2],
        n = (1 - Math.abs(2 * a - 1)) * s,
        r = n * (1 - Math.abs(((i / 60) % 2) - 1)),
        o = a - n / 2;
    switch (Math.floor(i / 60)) {
        case 0:
            (e[0] = n + o), (e[1] = r + o), (e[2] = o);
            break;
        case 1:
            (e[0] = r + o), (e[1] = n + o), (e[2] = o);
            break;
        case 2:
            (e[0] = o), (e[1] = n + o), (e[2] = r + o);
            break;
        case 3:
            (e[0] = o), (e[1] = r + o), (e[2] = n + o);
            break;
        case 4:
            (e[0] = r + o), (e[1] = o), (e[2] = n + o);
            break;
        case 5:
        case 6:
            (e[0] = n + o), (e[1] = o), (e[2] = r + o);
    }
}
function tM(t) {
    return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function tS(t, e, i) {
    tk(t, i), i.map(tM);
    let s = 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
    tk(e, i), i.map(tM);
    let a = 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
    return s > a ? (s + 0.05) / (a + 0.05) : (a + 0.05) / (s + 0.05);
}
var tC = new Map();
function tE({ html: t, dir: e, className: i }, s) {
    let a = document.createDocumentFragment();
    if ("string" == typeof t) {
        let i = document.createElement("p");
        i.dir = e || "auto";
        let s = t.split(/(?:\r\n?|\n)/);
        for (let t = 0, e = s.length; t < e; ++t) {
            let a = s[t];
            i.append(document.createTextNode(a)), t < e - 1 && i.append(document.createElement("br"));
        }
        a.append(i);
    } else te.render({ xfaHtml: t, div: a, intent: "richText" });
    a.firstElementChild.classList.add("richText", i), s.append(a);
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
            l(this, tP);
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
            r(tP, this, tL).call(this, !0);
            let s = tF._,
                a = tR._;
            tN._.set(a);
            let n = e.length,
                o = new Uint32Array(n),
                l = 0;
            for (let t = 0; t < n; t++) {
                let a = e[t] - 1;
                (o[t] = s[a]), a < i && (l += 1);
            }
            let h = tB._,
                d = i - l,
                c = h - n;
            d = Z(d, 0, c);
            for (let e = 0, i = 0; e < h; e++) t.has(e + 1) || (s[i++] = s[e]);
            s.copyWithin(d + n, d, c), s.set(o, d);
            let u = !1;
            for (let t = 0; t < h; t++) {
                let e = s[t];
                (u ||= e !== t + 1), (a[e - 1] = t + 1);
            }
            r(tP, this, tI).call(this), u || (this.pagesNumber = 0);
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
        a = (tR._ = i.subarray(e, 2 * e));
    if (t) for (let t = 0; t < e; t++) s[t] = a[t] = t + 1;
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
    tX = new WeakSet(),
    tq = class {
        constructor(t) {
            l(this, tX),
                h(this, tW, null),
                h(this, tU, null),
                h(this, t$, void 0),
                h(this, tH, null),
                h(this, tj, null),
                h(this, tz, null),
                h(this, tG, null),
                h(this, tV, null),
                d(t$, this, t),
                (t0._ ||= Object.freeze({
                    freetext: "pdfjs-editor-remove-freetext-button",
                    highlight: "pdfjs-editor-remove-highlight-button",
                    ink: "pdfjs-editor-remove-ink-button",
                    stamp: "pdfjs-editor-remove-stamp-button",
                    signature: "pdfjs-editor-remove-signature-button",
                }));
        }
        render() {
            let t = d(tW, this, document.createElement("div"));
            t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
            let e = c(t$, this)._uiManager._signal;
            e instanceof AbortSignal &&
                !e.aborted &&
                (t.addEventListener("contextmenu", tc, { signal: e }),
                t.addEventListener("pointerdown", tY, { signal: e }));
            let i = d(tH, this, document.createElement("div"));
            (i.className = "buttons"), t.append(i);
            let s = c(t$, this).toolbarPosition;
            if (s) {
                let { style: e } = t;
                (e.insetInlineEnd = `${100 * ("ltr" === c(t$, this)._uiManager.direction ? 1 - s[0] : s[0])}%`),
                    (e.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`);
            }
            return t;
        }
        get div() {
            return c(tW, this);
        }
        hide() {
            c(tW, this).classList.add("hidden"), c(tU, this)?.hideDropdown();
        }
        show() {
            c(tW, this).classList.remove("hidden"), c(tj, this)?.shown(), c(tz, this)?.shown();
        }
        addDeleteButton() {
            let { editorType: t, _uiManager: e } = c(t$, this),
                i = document.createElement("button");
            i.classList.add("basic", "deleteButton"),
                (i.tabIndex = 0),
                i.setAttribute("data-l10n-id", t0._[t]),
                r(tX, this, tJ).call(this, i) &&
                    i.addEventListener(
                        "click",
                        (t) => {
                            e.delete();
                        },
                        { signal: e._signal },
                    ),
                c(tH, this).append(i);
        }
        async addAltText(t) {
            let e = await t.render();
            r(tX, this, tJ).call(this, e), c(tH, this).append(e, tZ.call(r(tX, this))), d(tj, this, t);
        }
        addComment(t, e = null) {
            if (c(tz, this)) return;
            let i = t.renderForToolbar();
            if (!i) return;
            r(tX, this, tJ).call(this, i);
            let s = d(tG, this, tZ.call(r(tX, this)));
            e ? (c(tH, this).insertBefore(i, e), c(tH, this).insertBefore(s, e)) : c(tH, this).append(i, s),
                d(tz, this, t),
                (t.toolbar = this);
        }
        addColorPicker(t) {
            if (c(tU, this)) return;
            d(tU, this, t);
            let e = t.renderButton();
            r(tX, this, tJ).call(this, e), c(tH, this).append(e, tZ.call(r(tX, this)));
        }
        async addEditSignatureButton(t) {
            let e = d(tV, this, await t.renderEditButton(c(t$, this)));
            r(tX, this, tJ).call(this, e), c(tH, this).append(e, tZ.call(r(tX, this)));
        }
        removeButton(t) {
            "comment" === t &&
                (c(tz, this)?.removeToolbarCommentButton(),
                d(tz, this, null),
                c(tG, this)?.remove(),
                d(tG, this, null));
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
            let s = c(tH, this).querySelector(i);
            s && "comment" === t && this.addComment(e, s);
        }
        updateEditSignatureButton(t) {
            c(tV, this) && (c(tV, this).title = t);
        }
        remove() {
            c(tW, this).remove(), c(tU, this)?.destroy(), d(tU, this, null);
        }
    };
function tY(t) {
    t.stopPropagation();
}
function tK(t) {
    (c(t$, this)._focusEventsAllowed = !1), tu(t);
}
function tQ(t) {
    (c(t$, this)._focusEventsAllowed = !0), tu(t);
}
function tJ(t) {
    let e = c(t$, this)._uiManager._signal;
    return (
        e instanceof AbortSignal &&
        !e.aborted &&
        (t.addEventListener("focusin", r(tX, this, tK).bind(this), { capture: !0, signal: e }),
        t.addEventListener("focusout", r(tX, this, tQ).bind(this), { capture: !0, signal: e }),
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
            l(this, t5), h(this, t1, null), h(this, t2, null), h(this, t3, void 0), d(t3, this, t);
        }
        show(t, e, i) {
            let [s, a] = r(t5, this, t8).call(this, e, i),
                { style: n } = c(t2, this) || d(t2, this, r(t5, this, t6).call(this));
            t.append(c(t2, this)),
                (n.insetInlineEnd = `${100 * s}%`),
                (n.top = `calc(${100 * a}% + var(--editor-toolbar-vert-offset))`);
        }
        hide() {
            c(t2, this).remove();
        }
    };
function t6() {
    let t = d(t2, this, document.createElement("div"));
    (t.className = "editToolbar"), t.setAttribute("role", "toolbar");
    let e = c(t3, this)._signal;
    e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", tc, { signal: e });
    let i = d(t1, this, document.createElement("div"));
    return (
        (i.className = "buttons"),
        t.append(i),
        c(t3, this).hasCommentManager() &&
            r(t5, this, t7).call(
                this,
                "commentButton",
                "pdfjs-comment-floating-button",
                "pdfjs-comment-floating-button-label",
                () => {
                    c(t3, this).commentSelection("floating_button");
                },
            ),
        r(t5, this, t7).call(
            this,
            "highlightButton",
            "pdfjs-highlight-floating-button1",
            "pdfjs-highlight-floating-button-label",
            () => {
                c(t3, this).highlightSelection("floating_button");
            },
        ),
        t
    );
}
function t8(t, e) {
    let i = 0,
        s = 0;
    for (let a of t) {
        let t = a.y + a.height;
        if (t < i) continue;
        let n = a.x + (e ? a.width : 0);
        if (t > i) {
            (s = n), (i = t);
            continue;
        }
        e ? n > s && (s = n) : n < s && (s = n);
    }
    return [e ? 1 - s : s, i];
}
function t7(t, e, i, s) {
    let a = document.createElement("button");
    a.classList.add("basic", t), (a.tabIndex = 0), a.setAttribute("data-l10n-id", e);
    let n = document.createElement("span");
    a.append(n), (n.className = "visuallyHidden"), n.setAttribute("data-l10n-id", i);
    let r = c(t3, this)._signal;
    r instanceof AbortSignal &&
        !r.aborted &&
        (a.addEventListener("contextmenu", tc, { signal: r }), a.addEventListener("click", s, { signal: r })),
        c(t1, this).append(a);
}
function t9(t, e, i) {
    for (let s of i) e.addEventListener(s, t[s].bind(t));
}
var et = class t {
        static initializeAndAddPointerId(t) {
            (ei._ ||= new Set()).add(t);
        }
        static setPointer(t, e) {
            (ee._ ||= e), (ea._ ??= t);
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
            return ea._ === t;
        }
        static isInitializedAndDifferentPointerType(e) {
            return null !== ea._ && !t.isSamePointerType(e);
        }
        static isSameTimeStamp(t) {
            return es._ === t;
        }
        static isUsingMultiplePointers() {
            return ei._?.size >= 1;
        }
        static clearPointerType() {
            ea._ = null;
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
    ea = { _: null },
    en = new WeakMap(),
    er = class {
        constructor() {
            h(this, en, 0);
        }
        get id() {
            var t, e;
            return `${y}${(d(en, this, ((t = c(en, this)), (e = t++), t)), e)}`;
        }
    },
    eo = new WeakMap(),
    el = new WeakMap(),
    eh = new WeakMap(),
    ed = new WeakSet(),
    ec = class {
        constructor() {
            l(this, ed), h(this, eo, Q()), h(this, el, 0), h(this, eh, null);
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
            let { lastModified: e, name: i, size: s, type: a } = t;
            return r(ed, this, eu).call(this, `${e}_${i}_${s}_${a}`, t);
        }
        async getFromUrl(t) {
            return r(ed, this, eu).call(this, t, t);
        }
        async getFromBlob(t, e) {
            let i = await e;
            return r(ed, this, eu).call(this, t, i);
        }
        async getFromId(t) {
            c(eh, this) || d(eh, this, new Map());
            let e = c(eh, this).get(t);
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
            c(eh, this) || d(eh, this, new Map());
            let a = c(eh, this).get(t);
            if (a?.bitmap) return (a.refCounter += 1), a;
            let n = new OffscreenCanvas(e.width, e.height);
            return (
                n.getContext("2d").drawImage(e, 0, 0),
                (a = {
                    bitmap: n.transferToImageBitmap(),
                    id: `image_${c(eo, this)}_${(d(el, this, ((i = c(el, this)), (s = i++), i)), s)}`,
                    refCounter: 1,
                    isSvg: !1,
                }),
                c(eh, this).set(t, a),
                c(eh, this).set(a.id, a),
                a
            );
        }
        getSvgUrl(t) {
            let e = c(eh, this).get(t);
            return e?.isSvg ? e.svgUrl : null;
        }
        deleteId(t) {
            c(eh, this) || d(eh, this, new Map());
            let e = c(eh, this).get(t);
            if (!e || (--e.refCounter, 0 !== e.refCounter)) return;
            let { bitmap: i } = e;
            if (!e.url && !e.file) {
                let t = new OffscreenCanvas(i.width, i.height);
                t.getContext("bitmaprenderer").transferFromImageBitmap(i), (e.blobPromise = t.convertToBlob());
            }
            i.close?.(), (e.bitmap = null);
        }
        isValidId(t) {
            return t.startsWith(`image_${c(eo, this)}_`);
        }
    };
async function eu(t, e) {
    c(eh, this) || d(eh, this, new Map());
    let i = c(eh, this).get(t);
    if (null === i) return null;
    if (i?.bitmap) return (i.refCounter += 1), i;
    try {
        var s, a;
        let t;
        if (
            ((i ||= {
                bitmap: null,
                id: `image_${c(eo, this)}_${(d(el, this, ((s = c(el, this)), (a = s++), s)), a)}`,
                refCounter: 0,
                isSvg: !1,
            }),
            "string" == typeof e
                ? ((i.url = e), (t = await ta(e, "blob")))
                : e instanceof File
                  ? (t = i.file = e)
                  : e instanceof Blob && (t = e),
            "image/svg+xml" === t.type)
        ) {
            let e = ec._isSVGFittingCanvas,
                s = new FileReader(),
                a = new Image(),
                n = new Promise((t, n) => {
                    (a.onload = () => {
                        (i.bitmap = a), (i.isSvg = !0), t();
                    }),
                        (s.onload = async () => {
                            let t = (i.svgUrl = s.result);
                            a.src = (await e) ? `${t}#svgView(preserveAspectRatio(none))` : t;
                        }),
                        (a.onerror = s.onerror = n);
                });
            s.readAsDataURL(t), await n;
        } else i.bitmap = await createImageBitmap(t);
        i.refCounter = 1;
    } catch (t) {
        P(t), (i = null);
    }
    return c(eh, this).set(t, i), i && c(eh, this).set(i.id, i), i;
}
var ep = new WeakMap(),
    eg = new WeakMap(),
    ef = new WeakMap(),
    em = new WeakMap(),
    ew = class {
        constructor(t = 128) {
            h(this, ep, []), h(this, eg, !1), h(this, ef, void 0), h(this, em, -1), d(ef, this, t);
        }
        add({ cmd: t, undo: e, post: i, mustExec: s, type: a = NaN, overwriteIfSameType: n = !1, keepUndo: r = !1 }) {
            if ((s && t(), c(eg, this))) return;
            let o = { cmd: t, undo: e, post: i, type: a };
            if (-1 === c(em, this)) {
                c(ep, this).length > 0 && (c(ep, this).length = 0), d(em, this, 0), c(ep, this).push(o);
                return;
            }
            if (n && c(ep, this)[c(em, this)].type === a) {
                r && (o.undo = c(ep, this)[c(em, this)].undo), (c(ep, this)[c(em, this)] = o);
                return;
            }
            let l = c(em, this) + 1;
            l === c(ef, this)
                ? c(ep, this).splice(0, 1)
                : (d(em, this, l), l < c(ep, this).length && c(ep, this).splice(l)),
                c(ep, this).push(o);
        }
        undo() {
            if (-1 === c(em, this)) return;
            d(eg, this, !0);
            let { undo: t, post: e } = c(ep, this)[c(em, this)];
            t(), e?.(), d(eg, this, !1), d(em, this, c(em, this) - 1);
        }
        redo() {
            if (c(em, this) < c(ep, this).length - 1) {
                d(em, this, c(em, this) + 1), d(eg, this, !0);
                let { cmd: t, post: e } = c(ep, this)[c(em, this)];
                t(), e?.(), d(eg, this, !1);
            }
        }
        hasSomethingToUndo() {
            return -1 !== c(em, this);
        }
        hasSomethingToRedo() {
            return c(em, this) < c(ep, this).length - 1;
        }
        cleanType(t) {
            if (-1 !== c(em, this)) {
                for (let e = c(em, this); e >= 0; e--)
                    if (c(ep, this)[e].type !== t) {
                        c(ep, this).splice(e + 1, c(em, this) - e), d(em, this, e);
                        return;
                    }
                (c(ep, this).length = 0), d(em, this, -1);
            }
        }
        destroy() {
            d(ep, this, null);
        }
    },
    eb = new WeakSet(),
    ev = class {
        constructor(t) {
            l(this, eb), (this.buffer = []), (this.callbacks = new Map()), (this.allKeys = new Set());
            let { isMac: e } = z.platform;
            for (let [i, s, a = {}] of t)
                for (let t of i) {
                    let i = t.startsWith("mac+");
                    e && i
                        ? (this.callbacks.set(t.slice(4), { callback: s, options: a }),
                          this.allKeys.add(t.split("+").at(-1)))
                        : e ||
                          i ||
                          (this.callbacks.set(t, { callback: s, options: a }), this.allKeys.add(t.split("+").at(-1)));
                }
        }
        exec(t, e) {
            if (!this.allKeys.has(e.key)) return;
            let i = this.callbacks.get(r(eb, this, eA).call(this, e));
            if (!i) return;
            let {
                callback: s,
                options: { bubbles: a = !1, args: n = [], checker: o = null },
            } = i;
            (o && !o(t, e)) || (s.bind(t, ...n, e)(), a || tu(e));
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
        ]);
        return (
            (function (t) {
                let e = document.createElement("span");
                for (let i of ((e.style.visibility = "hidden"),
                (e.style.colorScheme = "only light"),
                document.body.append(e),
                t.keys())) {
                    e.style.color = i;
                    let s = window.getComputedStyle(e).color;
                    t.set(i, tf(s));
                }
                e.remove();
            })(t),
            F(this, "_colors", t)
        );
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
(0, s.t)(
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
    eC = new WeakMap(),
    eE = new WeakMap(),
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
    eX = new WeakMap(),
    eq = new WeakMap(),
    eY = new WeakMap(),
    eK = new WeakMap(),
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
                    c(is, t).contains(document.activeElement) &&
                    "BUTTON" !== document.activeElement.tagName &&
                    t.hasSomethingToControl(),
                s = (t, { target: e }) => {
                    if (e instanceof HTMLInputElement) {
                        let { type: t } = e;
                        return "text" !== t && "number" !== t;
                    }
                    return !0;
                },
                a = this.TRANSLATE_SMALL,
                n = this.TRANSLATE_BIG;
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
                                !(e instanceof HTMLButtonElement) && c(is, t).contains(e) && !t.isEnterHandled,
                        },
                    ],
                    [
                        [" ", "mac+ "],
                        e.addNewEditorFromKeyboard,
                        {
                            checker: (t, { target: e }) =>
                                !(e instanceof HTMLButtonElement) && c(is, t).contains(document.activeElement),
                        },
                    ],
                    [["Escape", "mac+Escape"], e.unselectAll],
                    [["ArrowLeft", "mac+ArrowLeft"], e.translateSelectedEditors, { args: [-a, 0], checker: i }],
                    [
                        ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
                        e.translateSelectedEditors,
                        { args: [-n, 0], checker: i },
                    ],
                    [["ArrowRight", "mac+ArrowRight"], e.translateSelectedEditors, { args: [a, 0], checker: i }],
                    [
                        ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
                        e.translateSelectedEditors,
                        { args: [n, 0], checker: i },
                    ],
                    [["ArrowUp", "mac+ArrowUp"], e.translateSelectedEditors, { args: [0, -a], checker: i }],
                    [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e.translateSelectedEditors, { args: [0, -n], checker: i }],
                    [["ArrowDown", "mac+ArrowDown"], e.translateSelectedEditors, { args: [0, a], checker: i }],
                    [
                        ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
                        e.translateSelectedEditors,
                        { args: [0, n], checker: i },
                    ],
                ]),
            );
        }
        constructor(t, e, i, a, n, o, u, p, g, f, m, w, b, v, A, y) {
            l(this, il),
                h(this, e_, new AbortController()),
                h(this, ex, null),
                h(this, ek, null),
                h(this, eM, new Map()),
                h(this, eS, new Map()),
                h(this, eC, null),
                h(this, eE, null),
                h(this, eT, null),
                h(this, eP, new ew()),
                h(this, eD, null),
                h(this, eI, null),
                h(this, eL, null),
                h(this, eR, 0),
                h(this, eF, new Set()),
                h(this, eN, null),
                h(this, eB, null),
                h(this, eO, new Set()),
                (0, s.t)(this, "_editorUndoBar", null),
                h(this, eW, !1),
                h(this, eU, !1),
                h(this, e$, !1),
                h(this, eH, null),
                h(this, ej, null),
                h(this, ez, null),
                h(this, eG, null),
                h(this, eV, !1),
                h(this, eX, null),
                h(this, eq, new er()),
                h(this, eY, !1),
                h(this, eK, !1),
                h(this, eQ, !1),
                h(this, eJ, null),
                h(this, eZ, null),
                h(this, e0, null),
                h(this, e1, null),
                h(this, e2, null),
                h(this, e3, _.NONE),
                h(this, e5, new Set()),
                h(this, e4, null),
                h(this, e6, null),
                h(this, e8, null),
                h(this, e7, null),
                h(this, e9, null),
                h(this, it, {
                    isEditing: !1,
                    isEmpty: !0,
                    hasSomethingToUndo: !1,
                    hasSomethingToRedo: !1,
                    hasSelectedEditor: !1,
                    hasSelectedText: !1,
                }),
                h(this, ie, [0, 0]),
                h(this, ii, null),
                h(this, is, null),
                h(this, ia, null),
                h(this, ir, null),
                h(this, io, null);
            let x = (this._signal = c(e_, this).signal);
            d(is, this, t),
                d(ia, this, e),
                d(ir, this, i),
                d(eC, this, a),
                d(eD, this, n),
                d(e6, this, o),
                d(e9, this, p),
                (this._eventBus = u),
                u._on("editingaction", this.onEditingAction.bind(this), { signal: x }),
                u._on("pagechanging", this.onPageChanging.bind(this), { signal: x }),
                u._on("scalechanging", this.onScaleChanging.bind(this), { signal: x }),
                u._on("rotationchanging", this.onRotationChanging.bind(this), { signal: x }),
                u._on("setpreference", this.onSetPreference.bind(this), { signal: x }),
                u._on("switchannotationeditorparams", (t) => this.updateParams(t.type, t.value), { signal: x }),
                u._on("pagesedited", this.onPagesEdited.bind(this), { signal: x }),
                window.addEventListener(
                    "pointerdown",
                    () => {
                        d(eK, this, !0);
                    },
                    { capture: !0, signal: x },
                ),
                window.addEventListener(
                    "pointerup",
                    () => {
                        d(eK, this, !1);
                    },
                    { capture: !0, signal: x },
                ),
                r(il, this, im).call(this),
                r(il, this, ix).call(this),
                r(il, this, iv).call(this),
                d(eE, this, p.annotationStorage),
                d(eH, this, p.filterFactory),
                d(e8, this, g),
                d(eG, this, f || null),
                d(eW, this, m),
                d(eU, this, w),
                d(e$, this, b),
                d(e2, this, v || null),
                (this.viewParameters = { realScale: ts.PDF_TO_CSS_UNITS, rotation: 0 }),
                (this.isShiftKeyDown = !1),
                (this._editorUndoBar = A || null),
                (this._supportsPinchToZoom = !1 !== y),
                n?.setSidebarUiManager(this);
        }
        destroy() {
            for (let t of (c(io, this)?.resolve(),
            d(io, this, null),
            c(e_, this)?.abort(),
            d(e_, this, null),
            (this._signal = null),
            c(eS, this).values()))
                t.destroy();
            c(eS, this).clear(),
                c(eM, this).clear(),
                c(eO, this).clear(),
                c(e1, this)?.clear(),
                d(ex, this, null),
                c(e5, this).clear(),
                c(eP, this).destroy(),
                c(eC, this)?.destroy(),
                c(eD, this)?.destroy(),
                c(e6, this)?.destroy(),
                c(eX, this)?.hide(),
                d(eX, this, null),
                c(e0, this)?.destroy(),
                d(e0, this, null),
                d(ek, this, null),
                c(ej, this) && (clearTimeout(c(ej, this)), d(ej, this, null)),
                c(ii, this) && (clearTimeout(c(ii, this)), d(ii, this, null)),
                this._editorUndoBar?.destroy(),
                d(e9, this, null);
        }
        combinedSignal(t) {
            return AbortSignal.any([this._signal, t.signal]);
        }
        get mlManager() {
            return c(e2, this);
        }
        get useNewAltTextFlow() {
            return c(eU, this);
        }
        get useNewAltTextWhenAddingImage() {
            return c(e$, this);
        }
        get hcmFilter() {
            return F(
                this,
                "hcmFilter",
                c(e8, this) ? c(eH, this).addHCMFilter(c(e8, this).foreground, c(e8, this).background) : "none",
            );
        }
        get direction() {
            return F(this, "direction", getComputedStyle(c(is, this)).direction);
        }
        get _highlightColors() {
            return F(
                this,
                "_highlightColors",
                c(eG, this)
                    ? new Map(
                          c(eG, this)
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
                i = !!c(e8, this);
            for (let [s, a] of t) {
                let t = s.endsWith("_HCM");
                if (i && t) {
                    e.set(s.replace("_HCM", ""), a);
                    continue;
                }
                i || t || e.set(s, a);
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
            t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), d(eL, this, t);
        }
        setMainHighlightColorPicker(t) {
            d(e0, this, t);
        }
        editAltText(t, e = !1) {
            c(eC, this)?.editAltText(this, t, e);
        }
        hasCommentManager() {
            return !!c(eD, this);
        }
        editComment(t, e, i, s) {
            c(eD, this)?.showDialog(this, t, e, i, s);
        }
        selectComment(t, e) {
            c(eS, this).get(t)?.getEditorByUID(e)?.toggleComment(!0, !0);
        }
        updateComment(t) {
            c(eD, this)?.updateComment(t.getData());
        }
        updatePopupColor(t) {
            c(eD, this)?.updatePopupColor(t);
        }
        removeComment(t) {
            c(eD, this)?.removeComments([t.uid]);
        }
        deleteComment(t, e) {
            let i = () => {
                t.comment = e;
            };
            this.addCommands({
                cmd: () => {
                    this._editorUndoBar?.show(i, "comment"), this.toggleComment(null), (t.comment = null);
                },
                undo: i,
                mustExec: !0,
            });
        }
        toggleComment(t, e, i) {
            c(eD, this)?.toggleCommentPopup(t, e, i);
        }
        makeCommentColor(t, e) {
            return (t && c(eD, this)?.makeCommentColor(t, e)) || null;
        }
        getCommentDialogElement() {
            return c(eD, this)?.dialogElement || null;
        }
        async waitForEditorsRendered(t) {
            if (c(eS, this).has(t - 1)) return;
            let { resolve: e, promise: i } = Promise.withResolvers(),
                s = (i) => {
                    i.pageNumber === t && (this._eventBus._off("editorsrendered", s), e());
                };
            this._eventBus.on("editorsrendered", s), await i;
        }
        getSignature(t) {
            c(e6, this)?.getSignature({ uiManager: this, editor: t });
        }
        get signatureManager() {
            return c(e6, this);
        }
        switchToMode(t, e) {
            this._eventBus.on("annotationeditormodechanged", e, { once: !0, signal: this._signal }),
                this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t });
        }
        setPreference(t, e) {
            this._eventBus.dispatch("setpreference", { source: this, name: t, value: e });
        }
        onSetPreference({ name: t, value: e }) {
            "enableNewAltTextWhenAddingImage" === t && d(e$, this, e);
        }
        onPagesEdited({ pagesMapper: t }) {
            for (let e of c(eM, this).values()) e.updatePageIndex(t.getPrevPageNumber(e.pageIndex + 1) - 1);
            let e = c(eS, this),
                i = d(eS, this, new Map());
            for (let [s, a] of e) {
                let e = t.getPrevPageNumber(s + 1) - 1;
                if (-1 === e) {
                    a.destroy();
                    continue;
                }
                i.set(e, a), a.updatePageIndex(e);
            }
        }
        onPageChanging({ pageNumber: t }) {
            d(eR, this, t - 1);
        }
        focusMainContainer() {
            c(is, this).focus();
        }
        findParent(t, e) {
            for (let i of c(eS, this).values()) {
                let { x: s, y: a, width: n, height: r } = i.div.getBoundingClientRect();
                if (t >= s && t <= s + n && e >= a && e <= a + r) return i;
            }
            return null;
        }
        disableUserSelect(t = !1) {
            c(ia, this).classList.toggle("noUserSelect", t);
        }
        addShouldRescale(t) {
            c(eO, this).add(t);
        }
        removeShouldRescale(t) {
            c(eO, this).delete(t);
        }
        onScaleChanging({ scale: t }) {
            for (let e of (this.commitOrRemove(),
            (this.viewParameters.realScale = t * ts.PDF_TO_CSS_UNITS),
            c(eO, this)))
                e.onScaleChanging();
            c(eL, this)?.onScaleChanging();
        }
        onRotationChanging({ pagesRotation: t }) {
            this.commitOrRemove(), (this.viewParameters.rotation = t);
        }
        highlightSelection(t = "", e = !1) {
            let i = document.getSelection();
            if (!i || i.isCollapsed) return;
            let { anchorNode: s, anchorOffset: a, focusNode: n, focusOffset: o } = i,
                l = i.toString(),
                h = r(il, this, id).call(this, i).closest(".textLayer"),
                d = this.getSelectionBoxes(h);
            if (!d) return;
            i.empty();
            let u = r(il, this, ic).call(this, h),
                p = c(e3, this) === _.NONE,
                g = () => {
                    let i = u?.createAndAddNewEditor({ x: 0, y: 0 }, !1, {
                        methodOfCreation: t,
                        boxes: d,
                        anchorNode: s,
                        anchorOffset: a,
                        focusNode: n,
                        focusOffset: o,
                        text: l,
                    });
                    p && this.showAllEditors("highlight", !0, !0), e && i?.editComment();
                };
            p ? this.switchToMode(_.HIGHLIGHT, g) : g();
        }
        commentSelection(t = "") {
            this.highlightSelection(t, !0);
        }
        getAndRemoveDataFromAnnotationStorage(t) {
            if (!c(eE, this)) return null;
            let e = `${y}${t}`,
                i = c(eE, this).getRawValue(e);
            return i && c(eE, this).remove(e), i;
        }
        addToAnnotationStorage(t) {
            !t.isEmpty() && c(eE, this) && !c(eE, this).has(t.id) && c(eE, this).setValue(t.id, t);
        }
        a11yAlert(t, e = null) {
            let i = c(ir, this);
            i &&
                (i.setAttribute("data-l10n-id", t),
                e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
        }
        blur() {
            if (
                ((this.isShiftKeyDown = !1),
                c(eV, this) && (d(eV, this, !1), r(il, this, ig).call(this, "main_toolbar")),
                !this.hasSelection)
            )
                return;
            let { activeElement: t } = document;
            for (let e of c(e5, this))
                if (e.div.contains(t)) {
                    d(eZ, this, [e, t]), (e._focusEventsAllowed = !1);
                    break;
                }
        }
        focus() {
            if (!c(eZ, this)) return;
            let [t, e] = c(eZ, this);
            d(eZ, this, null),
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
            r(il, this, iv).call(this), this.setEditingState(!0);
        }
        removeEditListeners() {
            r(il, this, iA).call(this), this.setEditingState(!1);
        }
        dragOver(t) {
            for (let { type: e } of t.dataTransfer.items)
                for (let i of c(eB, this))
                    if (i.isHandlingMimeForPasting(e)) {
                        (t.dataTransfer.dropEffect = "copy"), t.preventDefault();
                        return;
                    }
        }
        drop(t) {
            for (let e of t.dataTransfer.items)
                for (let i of c(eB, this))
                    if (i.isHandlingMimeForPasting(e.type)) {
                        i.paste(e, this.currentLayer), t.preventDefault();
                        return;
                    }
        }
        copy(t) {
            if ((t.preventDefault(), c(ex, this)?.commitOrRemove(), !this.hasSelection)) return;
            let e = [];
            for (let t of c(e5, this)) {
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
                for (let e of c(eB, this))
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
                this.addCommands({
                    cmd: () => {
                        for (let e of t) r(il, this, iE).call(this, e);
                        r(il, this, iD).call(this, t);
                    },
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
                c(e3, this) === _.NONE || this.isEditorHandlingKeyboard || t._keyboardManager.exec(this, e);
        }
        keyup(t) {
            this.isShiftKeyDown &&
                "Shift" === t.key &&
                ((this.isShiftKeyDown = !1),
                c(eV, this) && (d(eV, this, !1), r(il, this, ig).call(this, "main_toolbar")));
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
                ? (r(il, this, iw).call(this),
                  r(il, this, iy).call(this),
                  r(il, this, ik).call(this, {
                      isEditing: c(e3, this) !== _.NONE,
                      isEmpty: r(il, this, iP).call(this),
                      hasSomethingToUndo: c(eP, this).hasSomethingToUndo(),
                      hasSomethingToRedo: c(eP, this).hasSomethingToRedo(),
                      hasSelectedEditor: !1,
                  }))
                : (r(il, this, ib).call(this),
                  r(il, this, i_).call(this),
                  r(il, this, ik).call(this, { isEditing: !1 }),
                  this.disableUserSelect(!1));
        }
        registerEditorTypes(t) {
            if (!c(eB, this))
                for (let e of (d(eB, this, t), c(eB, this))) r(il, this, iM).call(this, e.defaultPropertiesToUpdate);
        }
        getId() {
            return c(eq, this).id;
        }
        get currentLayer() {
            return c(eS, this).get(c(eR, this));
        }
        getLayer(t) {
            return c(eS, this).get(t);
        }
        get currentPageIndex() {
            return c(eR, this);
        }
        addLayer(t) {
            c(eS, this).set(t.pageIndex, t), c(eY, this) ? t.enable() : t.disable();
        }
        removeLayer(t) {
            c(eS, this).delete(t.pageIndex);
        }
        async updateMode(t, e = null, i = !1, s = !1, a = !1, n = !1) {
            if (c(e3, this) !== t && !(c(io, this) && (await c(io, this).promise, !c(io, this)))) {
                if (
                    (d(io, this, Promise.withResolvers()),
                    c(eL, this)?.commitOrRemove(),
                    c(e3, this) === _.POPUP && c(eD, this)?.hideSidebar(),
                    c(eD, this)?.destroyPopup(),
                    d(e3, this, t),
                    t === _.NONE)
                ) {
                    for (let t of (this.setEditingState(!1), r(il, this, iC).call(this), c(eM, this).values()))
                        t.hideStandaloneCommentButton();
                    this._editorUndoBar?.hide(), this.toggleComment(null), c(io, this).resolve();
                    return;
                }
                for (let t of c(eM, this).values()) t.addStandaloneCommentButton();
                for (let e of (t === _.SIGNATURE && (await c(e6, this)?.loadSignatures()),
                i && et.clearPointerType(),
                this.setEditingState(!0),
                await r(il, this, iS).call(this),
                this.unselectAll(),
                c(eS, this).values()))
                    e.updateMode(t);
                if (t === _.POPUP) {
                    c(ek, this) ||
                        d(
                            ek,
                            this,
                            await c(e9, this).getAnnotationsByType(new Set(c(eB, this).map((t) => t._editorType))),
                        );
                    let t = new Set(),
                        e = [];
                    for (let i of c(eM, this).values()) {
                        let { annotationElementId: s, hasComment: a, deleted: n } = i;
                        s && t.add(s), a && !n && e.push(i.getData());
                    }
                    for (let i of c(ek, this)) {
                        let { id: s, popupRef: a, contentsObj: n } = i;
                        a && n?.str && !t.has(s) && !c(eF, this).has(s) && e.push(i);
                    }
                    c(eD, this)?.showSidebar(e);
                }
                if (!e) {
                    s && this.addNewEditorFromKeyboard(), c(io, this).resolve();
                    return;
                }
                for (let t of c(eM, this).values())
                    t.uid === e
                        ? (this.setSelected(t), n ? t.editComment() : a ? t.enterInEditMode() : t.focus())
                        : t.unselect();
                c(io, this).resolve();
            }
        }
        addNewEditorFromKeyboard() {
            this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
        }
        updateToolbar(t) {
            t.mode !== c(e3, this) && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t });
        }
        updateParams(t, e) {
            if (c(eB, this)) {
                switch (t) {
                    case x.CREATE:
                        this.currentLayer.addNewEditor(e);
                        return;
                    case x.HIGHLIGHT_SHOW_ALL:
                        this._eventBus.dispatch("reporttelemetry", {
                            source: this,
                            details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } },
                        }),
                            (c(e7, this) || d(e7, this, new Map())).set(t, e),
                            this.showAllEditors("highlight", e);
                }
                if (this.hasSelection) for (let i of c(e5, this)) i.updateParams(t, e);
                else for (let i of c(eB, this)) i.updateDefaultParams(t, e);
            }
        }
        showAllEditors(t, e, i = !1) {
            for (let i of c(eM, this).values()) i.editorType === t && i.show(e);
            (c(e7, this)?.get(x.HIGHLIGHT_SHOW_ALL) ?? !0) !== e &&
                r(il, this, iM).call(this, [[x.HIGHLIGHT_SHOW_ALL, e]]);
        }
        enableWaiting(t = !1) {
            if (c(eQ, this) !== t)
                for (let e of (d(eQ, this, t), c(eS, this).values()))
                    t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
        }
        *getEditors(t) {
            for (let e of c(eM, this).values()) e.pageIndex === t && (yield e);
        }
        getEditor(t) {
            return c(eM, this).get(t);
        }
        addEditor(t) {
            c(eM, this).set(t.id, t);
        }
        removeEditor(t) {
            t.div.contains(document.activeElement) &&
                (c(ej, this) && clearTimeout(c(ej, this)),
                d(
                    ej,
                    this,
                    setTimeout(() => {
                        this.focusMainContainer(), d(ej, this, null);
                    }, 0),
                )),
                c(eM, this).delete(t.id),
                t.annotationElementId && c(e1, this)?.delete(t.annotationElementId),
                this.unselect(t),
                (t.annotationElementId && c(eF, this).has(t.annotationElementId)) || c(eE, this)?.remove(t.id);
        }
        addDeletedAnnotationElement(t) {
            c(eF, this).add(t.annotationElementId), this.addChangedExistingAnnotation(t), (t.deleted = !0);
        }
        isDeletedAnnotationElement(t) {
            return c(eF, this).has(t);
        }
        removeDeletedAnnotationElement(t) {
            c(eF, this).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), (t.deleted = !1);
        }
        setActiveEditor(t) {
            c(ex, this) !== t && (d(ex, this, t), t && r(il, this, iM).call(this, t.propertiesToUpdate));
        }
        updateUI(t) {
            iT.call(r(il, this)) === t && r(il, this, iM).call(this, t.propertiesToUpdate);
        }
        updateUIForDefaultProperties(t) {
            r(il, this, iM).call(this, t.defaultPropertiesToUpdate);
        }
        toggleSelected(t) {
            if (c(e5, this).has(t)) {
                c(e5, this).delete(t),
                    t.unselect(),
                    r(il, this, ik).call(this, { hasSelectedEditor: this.hasSelection });
                return;
            }
            c(e5, this).add(t),
                t.select(),
                r(il, this, iM).call(this, t.propertiesToUpdate),
                r(il, this, ik).call(this, { hasSelectedEditor: !0 });
        }
        setSelected(t) {
            for (let e of (this.updateToolbar({ mode: t.mode, editId: t.uid }),
            c(eL, this)?.commitOrRemove(),
            c(e5, this)))
                e !== t && e.unselect();
            c(e5, this).clear(),
                c(e5, this).add(t),
                t.select(),
                r(il, this, iM).call(this, t.propertiesToUpdate),
                r(il, this, ik).call(this, { hasSelectedEditor: !0 });
        }
        isSelected(t) {
            return c(e5, this).has(t);
        }
        get firstSelectedEditor() {
            return c(e5, this).values().next().value;
        }
        unselect(t) {
            t.unselect(), c(e5, this).delete(t), r(il, this, ik).call(this, { hasSelectedEditor: this.hasSelection });
        }
        get hasSelection() {
            return 0 !== c(e5, this).size;
        }
        get isEnterHandled() {
            return 1 === c(e5, this).size && this.firstSelectedEditor.isEnterHandled;
        }
        undo() {
            c(eP, this).undo(),
                r(il, this, ik).call(this, {
                    hasSomethingToUndo: c(eP, this).hasSomethingToUndo(),
                    hasSomethingToRedo: !0,
                    isEmpty: r(il, this, iP).call(this),
                }),
                this._editorUndoBar?.hide();
        }
        redo() {
            c(eP, this).redo(),
                r(il, this, ik).call(this, {
                    hasSomethingToUndo: !0,
                    hasSomethingToRedo: c(eP, this).hasSomethingToRedo(),
                    isEmpty: r(il, this, iP).call(this),
                });
        }
        addCommands(t) {
            c(eP, this).add(t),
                r(il, this, ik).call(this, {
                    hasSomethingToUndo: !0,
                    hasSomethingToRedo: !1,
                    isEmpty: r(il, this, iP).call(this),
                });
        }
        cleanUndoStack(t) {
            c(eP, this).cleanType(t);
        }
        delete() {
            this.commitOrRemove();
            let t = this.currentLayer?.endDrawingSession(!0);
            if (!this.hasSelection && !t) return;
            let e = t ? [t] : [...c(e5, this)],
                i = () => {
                    for (let t of (this._editorUndoBar?.show(s, 1 === e.length ? e[0].editorType : e.length), e))
                        t.remove();
                },
                s = () => {
                    for (let t of e) r(il, this, iE).call(this, t);
                };
            this.addCommands({ cmd: i, undo: s, mustExec: !0 });
        }
        commitOrRemove() {
            c(ex, this)?.commitOrRemove();
        }
        hasSomethingToControl() {
            return c(ex, this) || this.hasSelection;
        }
        selectAll() {
            for (let t of c(e5, this)) t.commit();
            r(il, this, iD).call(this, c(eM, this).values());
        }
        unselectAll() {
            if (
                !(c(ex, this) && (c(ex, this).commitOrRemove(), c(e3, this) !== _.NONE)) &&
                !c(eL, this)?.commitOrRemove() &&
                this.hasSelection
            ) {
                for (let t of c(e5, this)) t.unselect();
                c(e5, this).clear(), r(il, this, ik).call(this, { hasSelectedEditor: !1 });
            }
        }
        translateSelectedEditors(t, e, i = !1) {
            if ((i || this.commitOrRemove(), !this.hasSelection)) return;
            (c(ie, this)[0] += t), (c(ie, this)[1] += e);
            let [s, a] = c(ie, this),
                n = [...c(e5, this)];
            for (let i of (c(ii, this) && clearTimeout(c(ii, this)),
            d(
                ii,
                this,
                setTimeout(() => {
                    d(ii, this, null),
                        (c(ie, this)[0] = c(ie, this)[1] = 0),
                        this.addCommands({
                            cmd: () => {
                                for (let t of n)
                                    c(eM, this).has(t.id) && (t.translateInPage(s, a), t.translationDone());
                            },
                            undo: () => {
                                for (let t of n)
                                    c(eM, this).has(t.id) && (t.translateInPage(-s, -a), t.translationDone());
                            },
                            mustExec: !1,
                        });
                }, 1e3),
            ),
            n))
                i.translateInPage(t, e), i.translationDone();
        }
        setUpDragSession() {
            if (this.hasSelection)
                for (let t of (this.disableUserSelect(!0), d(eN, this, new Map()), c(e5, this)))
                    c(eN, this).set(t, {
                        savedX: t.x,
                        savedY: t.y,
                        savedPageIndex: t.pageIndex,
                        newX: 0,
                        newY: 0,
                        newPageIndex: -1,
                    });
        }
        endDragSession() {
            if (!c(eN, this)) return !1;
            this.disableUserSelect(!1);
            let t = c(eN, this);
            d(eN, this, null);
            let e = !1;
            for (let [{ x: i, y: s, pageIndex: a }, n] of t)
                (n.newX = i),
                    (n.newY = s),
                    (n.newPageIndex = a),
                    (e ||= i !== n.savedX || s !== n.savedY || a !== n.savedPageIndex);
            if (!e) return !1;
            let i = (t, e, i, s) => {
                if (c(eM, this).has(t.id)) {
                    let a = c(eS, this).get(s);
                    a ? t._setParentAndPosition(a, e, i) : ((t.pageIndex = s), (t.x = e), (t.y = i));
                }
            };
            return (
                this.addCommands({
                    cmd: () => {
                        for (let [e, { newX: s, newY: a, newPageIndex: n }] of t) i(e, s, a, n);
                    },
                    undo: () => {
                        for (let [e, { savedX: s, savedY: a, savedPageIndex: n }] of t) i(e, s, a, n);
                    },
                    mustExec: !0,
                }),
                !0
            );
        }
        dragSelectedEditors(t, e) {
            if (c(eN, this)) for (let i of c(eN, this).keys()) i.drag(t, e);
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
                (1 === c(e5, this).size && this.firstSelectedEditor.shouldGetKeyboardEvents())
            );
        }
        isActive(t) {
            return c(ex, this) === t;
        }
        getActive() {
            return c(ex, this);
        }
        getMode() {
            return c(e3, this);
        }
        isEditingMode() {
            return c(e3, this) !== _.NONE;
        }
        get imageManager() {
            return F(this, "imageManager", new ec());
        }
        getSelectionBoxes(t) {
            if (!t) return null;
            let e = document.getSelection();
            for (let i = 0, s = e.rangeCount; i < s; i++)
                if (!t.contains(e.getRangeAt(i).commonAncestorContainer)) return null;
            let { x: i, y: s, width: a, height: n } = t.getBoundingClientRect(),
                r;
            switch (t.getAttribute("data-main-rotation")) {
                case "90":
                    r = (t, e, r, o) => ({ x: (e - s) / n, y: 1 - (t + r - i) / a, width: o / n, height: r / a });
                    break;
                case "180":
                    r = (t, e, r, o) => ({
                        x: 1 - (t + r - i) / a,
                        y: 1 - (e + o - s) / n,
                        width: r / a,
                        height: o / n,
                    });
                    break;
                case "270":
                    r = (t, e, r, o) => ({ x: 1 - (e + o - s) / n, y: (t - i) / a, width: o / n, height: r / a });
                    break;
                default:
                    r = (t, e, r, o) => ({ x: (t - i) / a, y: (e - s) / n, width: r / a, height: o / n });
            }
            let o = [];
            for (let t = 0, i = e.rangeCount; t < i; t++) {
                let i = e.getRangeAt(t);
                if (!i.collapsed)
                    for (let { x: t, y: e, width: s, height: a } of i.getClientRects())
                        0 === s || 0 === a || o.push(r(t, e, s, a));
            }
            return 0 === o.length ? null : o;
        }
        addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
            (c(eT, this) || d(eT, this, new Map())).set(t, e);
        }
        removeChangedExistingAnnotation({ annotationElementId: t }) {
            c(eT, this)?.delete(t);
        }
        renderAnnotationElement(t) {
            let e = c(eT, this)?.get(t.data.id);
            if (!e) return;
            let i = c(eE, this).getRawValue(e);
            i && (c(e3, this) !== _.NONE || i.hasBeenModified) && i.renderAnnotationElement(t);
        }
        setMissingCanvas(t, e, i) {
            let s = c(e1, this)?.get(t);
            s && (s.setCanvas(e, i), c(e1, this).delete(t));
        }
        addMissingCanvas(t, e) {
            (c(e1, this) || d(e1, this, new Map())).set(t, e);
        }
    };
function id({ anchorNode: t }) {
    return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}
function ic(t) {
    let { currentLayer: e } = this;
    if (e.hasTextLayer(t)) return e;
    for (let e of c(eS, this).values()) if (e.hasTextLayer(t)) return e;
    return null;
}
function iu() {
    let t = document.getSelection();
    if (!t || t.isCollapsed) return;
    let e = r(il, this, id).call(this, t).closest(".textLayer"),
        i = this.getSelectionBoxes(e);
    i && (c(eX, this) || d(eX, this, new t4(this)), c(eX, this).show(e, i, "ltr" === this.direction));
}
function ip() {
    let t = document.getSelection();
    if (!t || t.isCollapsed) {
        c(e4, this) && (c(eX, this)?.hide(), d(e4, this, null), r(il, this, ik).call(this, { hasSelectedText: !1 }));
        return;
    }
    let { anchorNode: e } = t;
    if (e === c(e4, this)) return;
    let i = r(il, this, id).call(this, t).closest(".textLayer");
    if (!i) {
        c(e4, this) && (c(eX, this)?.hide(), d(e4, this, null), r(il, this, ik).call(this, { hasSelectedText: !1 }));
        return;
    }
    if (
        (c(eX, this)?.hide(),
        d(e4, this, e),
        r(il, this, ik).call(this, { hasSelectedText: !0 }),
        (c(e3, this) === _.HIGHLIGHT || c(e3, this) === _.NONE) &&
            (c(e3, this) === _.HIGHLIGHT && this.showAllEditors("highlight", !0, !0),
            d(eV, this, this.isShiftKeyDown),
            !this.isShiftKeyDown))
    ) {
        let t = c(e3, this) === _.HIGHLIGHT ? r(il, this, ic).call(this, i) : null;
        if ((t?.toggleDrawing(), c(eK, this))) {
            let e = new AbortController(),
                i = this.combinedSignal(e),
                s = (i) => {
                    ("pointerup" === i.type && 0 !== i.button) ||
                        (e.abort(),
                        t?.toggleDrawing(!0),
                        "pointerup" === i.type && r(il, this, ig).call(this, "main_toolbar"));
                };
            window.addEventListener("pointerup", s, { signal: i }), window.addEventListener("blur", s, { signal: i });
        } else t?.toggleDrawing(!0), r(il, this, ig).call(this, "main_toolbar");
    }
}
function ig(t = "") {
    c(e3, this) === _.HIGHLIGHT ? this.highlightSelection(t) : c(eW, this) && r(il, this, iu).call(this);
}
function im() {
    document.addEventListener("selectionchange", r(il, this, ip).bind(this), { signal: this._signal });
}
function iw() {
    if (c(ez, this)) return;
    d(ez, this, new AbortController());
    let t = this.combinedSignal(c(ez, this));
    window.addEventListener("focus", this.focus.bind(this), { signal: t }),
        window.addEventListener("blur", this.blur.bind(this), { signal: t });
}
function ib() {
    c(ez, this)?.abort(), d(ez, this, null);
}
function iv() {
    if (c(eJ, this)) return;
    d(eJ, this, new AbortController());
    let t = this.combinedSignal(c(eJ, this));
    window.addEventListener("keydown", this.keydown.bind(this), { signal: t }),
        window.addEventListener("keyup", this.keyup.bind(this), { signal: t });
}
function iA() {
    c(eJ, this)?.abort(), d(eJ, this, null);
}
function iy() {
    if (c(eI, this)) return;
    d(eI, this, new AbortController());
    let t = this.combinedSignal(c(eI, this));
    document.addEventListener("copy", this.copy.bind(this), { signal: t }),
        document.addEventListener("cut", this.cut.bind(this), { signal: t }),
        document.addEventListener("paste", this.paste.bind(this), { signal: t });
}
function i_() {
    c(eI, this)?.abort(), d(eI, this, null);
}
function ix() {
    let t = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), { signal: t }),
        document.addEventListener("drop", this.drop.bind(this), { signal: t });
}
function ik(t) {
    Object.entries(t).some(([t, e]) => c(it, this)[t] !== e) &&
        (this._eventBus.dispatch("annotationeditorstateschanged", {
            source: this,
            details: Object.assign(c(it, this), t),
        }),
        c(e3, this) === _.HIGHLIGHT &&
            !1 === t.hasSelectedEditor &&
            r(il, this, iM).call(this, [[x.HIGHLIGHT_FREE, !0]]));
}
function iM(t) {
    this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t });
}
async function iS() {
    if (!c(eY, this)) {
        d(eY, this, !0);
        let t = [];
        for (let e of c(eS, this).values()) t.push(e.enable());
        for (let e of (await Promise.all(t), c(eM, this).values())) e.enable();
    }
}
function iC() {
    if ((this.unselectAll(), c(eY, this))) {
        for (let t of (d(eY, this, !1), c(eS, this).values())) t.disable();
        for (let t of c(eM, this).values()) t.disable();
    }
}
function iE(t) {
    let e = c(eS, this).get(t.pageIndex);
    e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}
function iT() {
    let t = null;
    for (t of c(e5, this));
    return t;
}
function iP() {
    if (0 === c(eM, this).size) return !0;
    if (1 === c(eM, this).size) for (let t of c(eM, this).values()) return t.isEmpty();
    return !1;
}
function iD(t) {
    for (let t of c(e5, this)) t.unselect();
    for (let e of (c(e5, this).clear(), t)) e.isEmpty() || (c(e5, this).add(e), e.select());
    r(il, this, ik).call(this, { hasSelectedEditor: this.hasSelection });
}
(0, s.t)(ih, "TRANSLATE_SMALL", 1), (0, s.t)(ih, "TRANSLATE_BIG", 10);
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
            l(this, iz),
                h(this, iI, null),
                h(this, iL, !1),
                h(this, iR, null),
                h(this, iF, null),
                h(this, iN, null),
                h(this, iB, null),
                h(this, iO, !1),
                h(this, iW, null),
                h(this, iU, null),
                h(this, i$, null),
                h(this, iH, null),
                h(this, ij, !1),
                d(iU, this, t),
                d(ij, this, t._uiManager.useNewAltTextFlow),
                (iq._ ||= Object.freeze({
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
            let t = d(iR, this, document.createElement("button"));
            (t.className = "altText"), (t.tabIndex = "0");
            let e = d(iF, this, document.createElement("span"));
            t.append(e),
                c(ij, this)
                    ? (t.classList.add("new"),
                      t.setAttribute("data-l10n-id", iq._.missing),
                      e.setAttribute("data-l10n-id", iq._["missing-label"]))
                    : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"),
                      e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
            let i = c(iU, this)._uiManager._signal;
            t.addEventListener("contextmenu", tc, { signal: i }),
                t.addEventListener("pointerdown", (t) => t.stopPropagation(), { signal: i });
            let s = (t) => {
                t.preventDefault(),
                    c(iU, this)._uiManager.editAltText(c(iU, this)),
                    c(ij, this) &&
                        c(iU, this)._reportTelemetry({
                            action: "pdfjs.image.alt_text.image_status_label_clicked",
                            data: { label: iV.call(r(iz, this)) },
                        });
            };
            return (
                t.addEventListener("click", s, { capture: !0, signal: i }),
                t.addEventListener(
                    "keydown",
                    (e) => {
                        e.target === t && "Enter" === e.key && (d(iO, this, !0), s(e));
                    },
                    { signal: i },
                ),
                await r(iz, this, iX).call(this),
                t
            );
        }
        finish() {
            c(iR, this) && (c(iR, this).focus({ focusVisible: c(iO, this) }), d(iO, this, !1));
        }
        isEmpty() {
            return c(ij, this) ? null === c(iI, this) : !c(iI, this) && !c(iL, this);
        }
        hasData() {
            return c(ij, this) ? null !== c(iI, this) || !!c(i$, this) : this.isEmpty();
        }
        get guessedText() {
            return c(i$, this);
        }
        async setGuessedText(e) {
            null === c(iI, this) &&
                (d(i$, this, e),
                d(
                    iH,
                    this,
                    await t._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
                        generatedAltText: e,
                    }),
                ),
                r(iz, this, iX).call(this));
        }
        toggleAltTextBadge(t = !1) {
            if (!c(ij, this) || c(iI, this)) {
                c(iW, this)?.remove(), d(iW, this, null);
                return;
            }
            if (!c(iW, this)) {
                let t = d(iW, this, document.createElement("div"));
                (t.className = "noAltTextBadge"), c(iU, this).div.append(t);
            }
            c(iW, this).classList.toggle("hidden", !t);
        }
        serialize(t) {
            let e = c(iI, this);
            return (
                t || c(i$, this) !== e || (e = c(iH, this)),
                { altText: e, decorative: c(iL, this), guessedText: c(i$, this), textWithDisclaimer: c(iH, this) }
            );
        }
        get data() {
            return { altText: c(iI, this), decorative: c(iL, this) };
        }
        set data({ altText: t, decorative: e, guessedText: i, textWithDisclaimer: s, cancel: a = !1 }) {
            i && (d(i$, this, i), d(iH, this, s)),
                (c(iI, this) !== t || c(iL, this) !== e) &&
                    (a || (d(iI, this, t), d(iL, this, e)), r(iz, this, iX).call(this));
        }
        toggle(t = !1) {
            c(iR, this) &&
                (!t && c(iB, this) && (clearTimeout(c(iB, this)), d(iB, this, null)), (c(iR, this).disabled = !t));
        }
        shown() {
            c(iU, this)._reportTelemetry({
                action: "pdfjs.image.alt_text.image_status_label_displayed",
                data: { label: iV.call(r(iz, this)) },
            });
        }
        destroy() {
            c(iR, this)?.remove(),
                d(iR, this, null),
                d(iF, this, null),
                d(iN, this, null),
                c(iW, this)?.remove(),
                d(iW, this, null);
        }
    };
function iV() {
    return (c(iI, this) && "added") || (null === c(iI, this) && this.guessedText && "review") || "missing";
}
async function iX() {
    let t = c(iR, this);
    if (!t) return;
    if (c(ij, this)) {
        if (
            (t.classList.toggle("done", !!c(iI, this)),
            t.setAttribute("data-l10n-id", iq._[iV.call(r(iz, this))]),
            c(iF, this)?.setAttribute("data-l10n-id", iq._[`${iV.call(r(iz, this))}-label`]),
            !c(iI, this))
        )
            return void c(iN, this)?.remove();
    } else {
        if (!c(iI, this) && !c(iL, this)) {
            t.classList.remove("done"), c(iN, this)?.remove();
            return;
        }
        t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e = c(iN, this);
    if (!e) {
        d(iN, this, (e = document.createElement("span"))),
            (e.className = "tooltip"),
            e.setAttribute("role", "tooltip"),
            (e.id = `alt-text-tooltip-${c(iU, this).id}`);
        let i = c(iU, this)._uiManager._signal;
        i.addEventListener(
            "abort",
            () => {
                clearTimeout(c(iB, this)), d(iB, this, null);
            },
            { once: !0 },
        ),
            t.addEventListener(
                "mouseenter",
                () => {
                    d(
                        iB,
                        this,
                        setTimeout(() => {
                            d(iB, this, null),
                                c(iN, this).classList.add("show"),
                                c(iU, this)._reportTelemetry({ action: "alt_text_tooltip" });
                        }, 100),
                    );
                },
                { signal: i },
            ),
            t.addEventListener(
                "mouseleave",
                () => {
                    c(iB, this) && (clearTimeout(c(iB, this)), d(iB, this, null)),
                        c(iN, this)?.classList.remove("show");
                },
                { signal: i },
            );
    }
    c(iL, this)
        ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip")
        : (e.removeAttribute("data-l10n-id"), (e.textContent = c(iI, this))),
        e.parentNode || t.append(e),
        c(iU, this).getElementForAltText()?.setAttribute("aria-describedby", e.id);
}
var iq = { _: null };
(0, s.t)(iG, "_l10n", null);
var iY = new WeakMap(),
    iK = new WeakMap(),
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
            l(this, i4),
                h(this, iY, null),
                h(this, iK, null),
                h(this, iQ, !1),
                h(this, iJ, null),
                h(this, iZ, null),
                h(this, i0, null),
                h(this, i1, null),
                h(this, i2, null),
                h(this, i3, !1),
                h(this, i5, null),
                d(iJ, this, t);
        }
        renderForToolbar() {
            let t = d(iK, this, document.createElement("button"));
            return (t.className = "comment"), r(i4, this, i8).call(this, t, !1);
        }
        renderForStandalone() {
            let t = d(iY, this, document.createElement("button"));
            t.className = "annotationCommentButton";
            let e = c(iJ, this).commentButtonPosition;
            if (e) {
                let { style: i } = t;
                (i.insetInlineEnd = `calc(${100 * ("ltr" === c(iJ, this)._uiManager.direction ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`),
                    (i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`);
                let s = c(iJ, this).commentButtonColor;
                s && (i.backgroundColor = s);
            }
            return r(i4, this, i8).call(this, t, !0);
        }
        focusButton() {
            setTimeout(() => {
                (c(iY, this) ?? c(iK, this))?.focus();
            }, 0);
        }
        onUpdatedColor() {
            if (!c(iY, this)) return;
            let t = c(iJ, this).commentButtonColor;
            t && (c(iY, this).style.backgroundColor = t), c(iJ, this)._uiManager.updatePopupColor(c(iJ, this));
        }
        get commentButtonWidth() {
            return (c(iY, this)?.getBoundingClientRect().width ?? 0) / c(iJ, this).parent.boundingClientRect.width;
        }
        get commentPopupPositionInLayer() {
            if (c(i5, this)) return c(i5, this);
            if (!c(iY, this)) return null;
            let { x: t, y: e, height: i } = c(iY, this).getBoundingClientRect(),
                { x: s, y: a, width: n, height: r } = c(iJ, this).parent.boundingClientRect;
            return [(t - s) / n, (e + i - a) / r];
        }
        set commentPopupPositionInLayer(t) {
            d(i5, this, t);
        }
        hasDefaultPopupPosition() {
            return null === c(i5, this);
        }
        removeStandaloneCommentButton() {
            c(iY, this)?.remove(), d(iY, this, null);
        }
        removeToolbarCommentButton() {
            c(iK, this)?.remove(), d(iK, this, null);
        }
        setCommentButtonStates({ selected: t, hasPopup: e }) {
            c(iY, this) && (c(iY, this).classList.toggle("selected", t), (c(iY, this).ariaExpanded = e));
        }
        edit(t) {
            let e = this.commentPopupPositionInLayer,
                i,
                s;
            if (e) [i, s] = e;
            else {
                [i, s] = c(iJ, this).commentButtonPosition;
                let { width: t, height: e, x: a, y: n } = c(iJ, this);
                (i = a + i * t), (s = n + s * e);
            }
            let a = c(iJ, this).parent.boundingClientRect,
                { x: n, y: r, width: o, height: l } = a;
            c(iJ, this)._uiManager.editComment(c(iJ, this), n + i * o, r + s * l, { ...t, parentDimensions: a });
        }
        finish() {
            c(iK, this) && (c(iK, this).focus({ focusVisible: c(iQ, this) }), d(iQ, this, !1));
        }
        isDeleted() {
            return c(i3, this) || "" === c(i1, this);
        }
        isEmpty() {
            return null === c(i1, this);
        }
        hasBeenEdited() {
            return this.isDeleted() || c(i1, this) !== c(iZ, this);
        }
        serialize() {
            return this.data;
        }
        get data() {
            return { text: c(i1, this), richText: c(i0, this), date: c(i2, this), deleted: this.isDeleted() };
        }
        set data(t) {
            if ((t !== c(i1, this) && d(i0, this, null), null === t)) {
                d(i1, this, ""), d(i3, this, !0);
                return;
            }
            d(i1, this, t), d(i2, this, new Date()), d(i3, this, !1);
        }
        restoreData({ text: t, richText: e, date: i }) {
            d(i1, this, t), d(i0, this, e), d(i2, this, i), d(i3, this, !1);
        }
        setInitialText(t, e = null) {
            d(iZ, this, t), (this.data = t), d(i2, this, null), d(i0, this, e);
        }
        shown() {}
        destroy() {
            c(iK, this)?.remove(),
                d(iK, this, null),
                c(iY, this)?.remove(),
                d(iY, this, null),
                d(i1, this, ""),
                d(i0, this, null),
                d(i2, this, null),
                d(iJ, this, null),
                d(iQ, this, !1),
                d(i3, this, !1);
        }
    };
function i8(t, e) {
    if (!c(iJ, this)._uiManager.hasCommentManager()) return null;
    (t.tabIndex = "0"),
        (t.ariaHasPopup = "dialog"),
        e
            ? ((t.ariaControls = "commentPopup"), t.setAttribute("data-l10n-id", "pdfjs-show-comment-button"))
            : ((t.ariaControlsElements = [c(iJ, this)._uiManager.getCommentDialogElement()]),
              t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
    let i = c(iJ, this)._uiManager._signal;
    if (!(i instanceof AbortSignal) || i.aborted) return t;
    t.addEventListener("contextmenu", tc, { signal: i }),
        e &&
            (t.addEventListener(
                "focusin",
                (t) => {
                    (c(iJ, this)._focusEventsAllowed = !1), tu(t);
                },
                { capture: !0, signal: i },
            ),
            t.addEventListener(
                "focusout",
                (t) => {
                    (c(iJ, this)._focusEventsAllowed = !0), tu(t);
                },
                { capture: !0, signal: i },
            )),
        t.addEventListener("pointerdown", (t) => t.stopPropagation(), { signal: i });
    let s = (e) => {
        e.preventDefault(), t === c(iK, this) ? this.edit() : c(iJ, this).toggleComment(!0);
    };
    return (
        t.addEventListener("click", s, { capture: !0, signal: i }),
        t.addEventListener(
            "keydown",
            (e) => {
                e.target === t && "Enter" === e.key && (d(iQ, this, !0), s(e));
            },
            { signal: i },
        ),
        t.addEventListener(
            "pointerenter",
            () => {
                c(iJ, this).toggleComment(!1, !0);
            },
            { signal: i },
        ),
        t.addEventListener(
            "pointerleave",
            () => {
                c(iJ, this).toggleComment(!1, !1);
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
    sa = new WeakMap(),
    sn = new WeakMap(),
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
            onPinching: a = null,
            onPinchEnd: n = null,
            signal: o,
        }) {
            l(this, sd),
                h(this, i7, void 0),
                h(this, i9, !1),
                h(this, st, null),
                h(this, se, void 0),
                h(this, si, void 0),
                h(this, ss, void 0),
                h(this, sa, void 0),
                h(this, sn, null),
                h(this, sr, void 0),
                h(this, so, null),
                h(this, sl, void 0),
                h(this, sh, null),
                d(i7, this, t),
                d(st, this, i),
                d(se, this, e),
                d(si, this, s),
                d(ss, this, a),
                d(sa, this, n),
                d(sl, this, new AbortController()),
                d(sr, this, AbortSignal.any([o, c(sl, this).signal])),
                t.addEventListener("touchstart", r(sd, this, su).bind(this), { passive: !1, signal: c(sr, this) });
        }
        get MIN_TOUCH_DISTANCE_TO_PINCH() {
            return 35 / tv.pixelRatio;
        }
        destroy() {
            c(sl, this)?.abort(), d(sl, this, null), c(sn, this)?.abort(), d(sn, this, null);
        }
    };
function su(t) {
    if (c(se, this)?.call(this)) return;
    if (1 === t.touches.length) {
        if (c(sn, this)) return;
        let t = d(sn, this, new AbortController()),
            e = AbortSignal.any([c(sr, this), t.signal]),
            i = c(i7, this),
            s = { capture: !0, signal: e, passive: !1 },
            a = (t) => {
                "touch" === t.pointerType && (c(sn, this)?.abort(), d(sn, this, null));
            };
        i.addEventListener(
            "pointerdown",
            (t) => {
                "touch" === t.pointerType && (tu(t), a(t));
            },
            s,
        ),
            i.addEventListener("pointerup", a, s),
            i.addEventListener("pointercancel", a, s);
        return;
    }
    if (!c(sh, this)) {
        d(sh, this, new AbortController());
        let t = AbortSignal.any([c(sr, this), c(sh, this).signal]),
            e = c(i7, this),
            i = { signal: t, capture: !1, passive: !1 };
        e.addEventListener("touchmove", r(sd, this, sp).bind(this), i);
        let s = r(sd, this, sg).bind(this);
        e.addEventListener("touchend", s, i),
            e.addEventListener("touchcancel", s, i),
            (i.capture = !0),
            e.addEventListener("pointerdown", tu, i),
            e.addEventListener("pointermove", tu, i),
            e.addEventListener("pointercancel", tu, i),
            e.addEventListener("pointerup", tu, i),
            c(si, this)?.call(this);
    }
    if ((tu(t), 2 !== t.touches.length || c(st, this)?.call(this))) return void d(so, this, null);
    let [e, i] = t.touches;
    e.identifier > i.identifier && ([e, i] = [i, e]),
        d(so, this, { touch0X: e.screenX, touch0Y: e.screenY, touch1X: i.screenX, touch1Y: i.screenY });
}
function sp(t) {
    if (!c(so, this) || 2 !== t.touches.length) return;
    tu(t);
    let [e, i] = t.touches;
    e.identifier > i.identifier && ([e, i] = [i, e]);
    let { screenX: s, screenY: a } = e,
        { screenX: n, screenY: r } = i,
        o = c(so, this),
        { touch0X: l, touch0Y: h, touch1X: u, touch1Y: p } = o,
        g = Math.hypot(n - s, r - a) || 1,
        f = Math.hypot(u - l, p - h) || 1;
    if (!c(i9, this) && Math.abs(f - g) <= sc.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    if (((o.touch0X = s), (o.touch0Y = a), (o.touch1X = n), (o.touch1Y = r), !c(i9, this))) return void d(i9, this, !0);
    let m = [(s + n) / 2, (a + r) / 2];
    c(ss, this)?.call(this, m, f, g);
}
function sg(t) {
    t.touches.length >= 2 ||
        (c(sh, this) && (c(sh, this).abort(), d(sh, this, null), c(sa, this)?.call(this)),
        c(so, this) && (tu(t), d(so, this, null), d(i9, this, !1)));
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
    sC = new WeakMap(),
    sE = new WeakMap(),
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
            l(this, s$),
                h(this, sf, null),
                h(this, sm, null),
                h(this, sw, null),
                h(this, sb, null),
                h(this, sv, null),
                h(this, sA, !1),
                h(this, sy, null),
                h(this, s_, ""),
                h(this, sx, null),
                h(this, sk, null),
                h(this, sM, null),
                h(this, sS, null),
                h(this, sC, null),
                h(this, sE, ""),
                h(this, sT, !1),
                h(this, sP, null),
                h(this, sD, !1),
                h(this, sI, !1),
                h(this, sL, !1),
                h(this, sR, null),
                h(this, sF, 0),
                h(this, sN, 0),
                h(this, sB, null),
                h(this, sO, null),
                (0, s.t)(this, "isSelected", !1),
                (0, s.t)(this, "_isCopy", !1),
                (0, s.t)(this, "_editToolbar", null),
                (0, s.t)(this, "_initialOptions", Object.create(null)),
                (0, s.t)(this, "_initialData", null),
                (0, s.t)(this, "_isVisible", !0),
                (0, s.t)(this, "_uiManager", null),
                (0, s.t)(this, "_focusEventsAllowed", !0),
                h(this, sW, !1),
                h(this, sU, t._zIndex++),
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
            let {
                rotation: i,
                rawDims: { pageWidth: a, pageHeight: n, pageX: r, pageY: o },
            } = this.parent.viewport;
            (this.rotation = i),
                (this.pageRotation = (360 + i - this._uiManager.viewParameters.rotation) % 360),
                (this.pageDimensions = [a, n]),
                (this.pageTranslation = [r, o]);
            let [d, c] = this.parentDimensions;
            (this.x = e.x / d), (this.y = e.y / c), (this.isAttachedToDOM = !1), (this.deleted = !1);
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
            return c(sW, this);
        }
        set _isDraggable(t) {
            d(sW, this, t), this.div?.classList.toggle("draggable", t);
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
            this.div.style.zIndex = c(sU, this);
        }
        setParent(t) {
            null === t
                ? (r(s$, this, s8).call(this), c(sS, this)?.remove(), d(sS, this, null))
                : ((this.pageIndex = t.pageIndex), (this.pageDimensions = t.pageDimensions)),
                (this.parent = t);
        }
        focusin(t) {
            this._focusEventsAllowed && (c(sT, this) ? d(sT, this, !1) : this.parent.setSelected(this));
        }
        focusout(t) {
            this._focusEventsAllowed &&
                this.isAttachedToDOM &&
                (t.relatedTarget?.closest(`#${this.id}`) ||
                    (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove()));
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
            let [a, n] = this.parentDimensions;
            ([i, s] = this.screenToPageTranslation(i, s)),
                (this.x = (t + i) / a),
                (this.y = (e + s) / n),
                this.fixAndSetPosition();
        }
        _moveAfterPaste(t, e) {
            let [i, s] = this.parentDimensions;
            this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
        }
        translate(t, e) {
            r(s$, this, sj).call(this, this.parentDimensions, t, e);
        }
        translateInPage(t, e) {
            c(sP, this) || d(sP, this, [this.x, this.y, this.width, this.height]),
                r(s$, this, sj).call(this, this.pageDimensions, t, e),
                this.div.scrollIntoView({ block: "nearest" });
        }
        translationDone() {
            this._onTranslated(this.x, this.y);
        }
        drag(t, e) {
            c(sP, this) || d(sP, this, [this.x, this.y, this.width, this.height]);
            let {
                div: i,
                parentDimensions: [s, a],
            } = this;
            if (
                ((this.x += t / s),
                (this.y += e / a),
                this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1))
            ) {
                let { x: t, y: e } = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, t, e) &&
                    ((this.x -= Math.floor(this.x)), (this.y -= Math.floor(this.y)));
            }
            let { x: n, y: r } = this,
                [o, l] = this.getBaseTranslation();
            (n += o), (r += l);
            let { style: h } = i;
            (h.left = `${(100 * n).toFixed(2)}%`),
                (h.top = `${(100 * r).toFixed(2)}%`),
                this._onTranslating(n, r),
                i.scrollIntoView({ block: "nearest" });
        }
        _onTranslating(t, e) {}
        _onTranslated(t, e) {}
        get _hasBeenMoved() {
            return !!c(sP, this) && (c(sP, this)[0] !== this.x || c(sP, this)[1] !== this.y);
        }
        get _hasBeenResized() {
            return !!c(sP, this) && (c(sP, this)[2] !== this.width || c(sP, this)[3] !== this.height);
        }
        getBaseTranslation() {
            let [e, i] = this.parentDimensions,
                { _borderLineWidth: s } = t,
                a = s / e,
                n = s / i;
            switch (this.rotation) {
                case 90:
                    return [-a, n];
                case 180:
                    return [a, n];
                case 270:
                    return [a, -n];
                default:
                    return [-a, -n];
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
                { x: a, y: n, width: r, height: o } = this;
            if (((r *= i), (o *= s), (a *= i), (n *= s), this._mustFixPosition))
                switch (t) {
                    case 0:
                        (a = Z(a, 0, i - r)), (n = Z(n, 0, s - o));
                        break;
                    case 90:
                        (a = Z(a, 0, i - o)), (n = Z(n, r, s));
                        break;
                    case 180:
                        (a = Z(a, r, i)), (n = Z(n, o, s));
                        break;
                    case 270:
                        (a = Z(a, o, i)), (n = Z(n, 0, s - r));
                }
            (this.x = a /= i), (this.y = n /= s);
            let [l, h] = this.getBaseTranslation();
            (a += l),
                (n += h),
                (e.left = `${(100 * a).toFixed(2)}%`),
                (e.top = `${(100 * n).toFixed(2)}%`),
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
            c(sw, this)?.finish();
        }
        get toolbarButtons() {
            return null;
        }
        async addEditToolbar() {
            if (this._editToolbar || c(sI, this)) return this._editToolbar;
            (this._editToolbar = new tq(this)), this.div.append(this._editToolbar.render());
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
            this._editToolbar?.remove(), (this._editToolbar = null), c(sw, this)?.destroy();
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
                c(sw, this) ||
                    (iG.initialize(t._l10n),
                    d(sw, this, new iG(this)),
                    c(sf, this) && ((c(sw, this).data = c(sf, this)), d(sf, this, null))),
                c(sw, this)
            );
        }
        get altTextData() {
            return c(sw, this)?.data;
        }
        set altTextData(t) {
            c(sw, this) && (c(sw, this).data = t);
        }
        get guessedAltText() {
            return c(sw, this)?.guessedText;
        }
        async setGuessedAltText(t) {
            await c(sw, this)?.setGuessedText(t);
        }
        serializeAltText(t) {
            return c(sw, this)?.serialize(t);
        }
        hasAltText() {
            return !!c(sw, this) && !c(sw, this).isEmpty();
        }
        hasAltTextData() {
            return c(sw, this)?.hasData() ?? !1;
        }
        focusCommentButton() {
            c(sb, this)?.focusButton();
        }
        addCommentButton() {
            return this.canAddComment ? c(sb, this) || d(sb, this, new i6(this)) : null;
        }
        addStandaloneCommentButton() {
            if (this._uiManager.hasCommentManager()) {
                if (c(sv, this)) {
                    this._uiManager.isEditingMode() && c(sv, this).classList.remove("hidden");
                    return;
                }
                this.hasComment && (d(sv, this, c(sb, this).renderForStandalone()), this.div.append(c(sv, this)));
            }
        }
        removeStandaloneCommentButton() {
            c(sb, this).removeStandaloneCommentButton(), d(sv, this, null);
        }
        hideStandaloneCommentButton() {
            c(sv, this)?.classList.add("hidden");
        }
        get comment() {
            if (!c(sb, this)) return null;
            let {
                data: { richText: t, text: e, date: i, deleted: s },
            } = c(sb, this);
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
            c(sb, this) || d(sb, this, new i6(this)),
                "object" == typeof t && t ? c(sb, this).restoreData(t) : (c(sb, this).data = t),
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
                (c(sb, this) || d(sb, this, new i6(this)), c(sb, this).setInitialText(t, i), !this.annotationElementId)
            )
                return;
            let s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
            s && this.updateFromAnnotationLayer(s);
        }
        get hasEditedComment() {
            return c(sb, this)?.hasBeenEdited();
        }
        get hasDeletedComment() {
            return c(sb, this)?.isDeleted();
        }
        get hasComment() {
            return !!c(sb, this) && !c(sb, this).isEmpty() && !c(sb, this).isDeleted();
        }
        async editComment(t) {
            c(sb, this) || d(sb, this, new i6(this)), c(sb, this).edit(t);
        }
        toggleComment(t, e) {
            this.hasComment && this._uiManager.toggleComment(this, t, e);
        }
        setSelectedCommentButton(t) {
            c(sb, this).setSelectedButton(t);
        }
        addComment(t) {
            if (this.hasEditedComment) {
                let [, , , e] = t.rect,
                    [i] = this.pageDimensions,
                    [s] = this.pageTranslation,
                    a = s + i + 1;
                t.popup = {
                    contents: this.comment.text,
                    deleted: this.comment.deleted,
                    rect: [a, e - 100, a + 180, e],
                };
            }
        }
        updateFromAnnotationLayer({ popup: { contents: t, deleted: e } }) {
            c(sb, this).data = e ? null : t;
        }
        get parentBoundingClientRect() {
            return this.parent.boundingClientRect;
        }
        render() {
            let t = (this.div = document.createElement("div"));
            t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360),
                (t.className = this.name),
                t.setAttribute("id", this.id),
                (t.tabIndex = c(sA, this) ? -1 : 0),
                t.setAttribute("role", "application"),
                this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId),
                this._isVisible || t.classList.add("hidden"),
                this.setInForeground(),
                r(s$, this, s2).call(this);
            let [e, i] = this.parentDimensions;
            this.parentRotation % 180 != 0 &&
                ((t.style.maxWidth = `${((100 * i) / e).toFixed(2)}%`),
                (t.style.maxHeight = `${((100 * e) / i).toFixed(2)}%`));
            let [s, a] = this.getInitialTranslation();
            return (
                this.translate(s, a),
                t9(this, t, ["keydown", "pointerdown", "dblclick"]),
                this.isResizable &&
                    this._uiManager._supportsPinchToZoom &&
                    (c(sO, this) ||
                        d(
                            sO,
                            this,
                            new sc({
                                container: t,
                                isPinchingDisabled: () => !this.isSelected,
                                onPinchStart: r(s$, this, sQ).bind(this),
                                onPinching: r(s$, this, sJ).bind(this),
                                onPinchEnd: r(s$, this, sZ).bind(this),
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
                : (d(sT, this, !0), this._isDraggable)
                  ? r(s$, this, s1).call(this, t)
                  : r(s$, this, s0).call(this, t);
        }
        _onStartDragging() {}
        _onStopDragging() {}
        moveInDOM() {
            c(sR, this) && clearTimeout(c(sR, this)),
                d(
                    sR,
                    this,
                    setTimeout(() => {
                        d(sR, this, null), this.parent?.moveEditorInDOM(this);
                    }, 0),
                );
        }
        _setParentAndPosition(t, e, i) {
            t.changeParent(this), (this.x = e), (this.y = i), this.fixAndSetPosition(), this._onTranslated();
        }
        getRect(t, e, i = this.rotation) {
            let s = this.parentScale,
                [a, n] = this.pageDimensions,
                [r, o] = this.pageTranslation,
                l = t / s,
                h = e / s,
                d = this.x * a,
                c = this.y * n,
                u = this.width * a,
                p = this.height * n;
            switch (i) {
                case 0:
                    return [d + l + r, n - c - h - p + o, d + l + u + r, n - c - h + o];
                case 90:
                    return [d + h + r, n - c + l + o, d + h + p + r, n - c + l + u + o];
                case 180:
                    return [d - l - u + r, n - c + h + o, d - l + r, n - c + h + p + o];
                case 270:
                    return [d - h - p + r, n - c - l - u + o, d - h + r, n - c - l + o];
                default:
                    throw Error("Invalid rotation");
            }
        }
        getRectInCurrentCoords(t, e) {
            let [i, s, a, n] = t,
                r = a - i,
                o = n - s;
            switch (this.rotation) {
                case 0:
                    return [i, e - n, r, o];
                case 90:
                    return [i, e - s, o, r];
                case 180:
                    return [a, e - s, r, o];
                case 270:
                    return [a, e - n, o, r];
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
            c(sb, this)?.onUpdatedColor();
        }
        getData() {
            let {
                comment: { text: t, color: e, date: i, opacity: s, deleted: a, richText: n },
                uid: r,
                pageIndex: o,
                creationDate: l,
                modificationDate: h,
            } = this;
            return {
                id: r,
                pageIndex: o,
                rect: this.getPDFRect(),
                richText: n,
                contentsObj: { str: t },
                creationDate: l,
                modificationDate: i || h,
                popupRef: !a,
                color: e,
                opacity: s,
            };
        }
        onceAdded(t) {}
        isEmpty() {
            return !1;
        }
        enableEditMode() {
            return !this.isInEditMode() && (this.parent.setEditingState(!1), d(sI, this, !0), !0);
        }
        disableEditMode() {
            return !!this.isInEditMode() && (this.parent.setEditingState(!0), d(sI, this, !1), !0);
        }
        isInEditMode() {
            return c(sI, this);
        }
        shouldGetKeyboardEvents() {
            return c(sL, this);
        }
        needsToBeRebuilt() {
            return this.div && !this.isAttachedToDOM;
        }
        get isOnScreen() {
            let { top: t, left: e, bottom: i, right: s } = this.getClientDimensions(),
                { innerHeight: a, innerWidth: n } = window;
            return e < n && s > 0 && t < a && i > 0;
        }
        rebuild() {
            r(s$, this, s2).call(this);
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
            (s.rotation = t.rotation), d(sf, s, t.accessibilityData), (s._isCopy = t.isCopy || !1);
            let [a, n] = s.pageDimensions,
                [r, o, l, h] = s.getRectInCurrentCoords(t.rect, n);
            return (s.x = r / a), (s.y = o / n), (s.width = l / a), (s.height = h / n), s;
        }
        get hasBeenModified() {
            return !!this.annotationElementId && (this.deleted || null !== this.serialize());
        }
        remove() {
            if (
                (c(sC, this)?.abort(),
                d(sC, this, null),
                this.isEmpty() || this.commit(),
                this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this),
                this.hideCommentPopup(),
                c(sR, this) && (clearTimeout(c(sR, this)), d(sR, this, null)),
                r(s$, this, s8).call(this),
                this.removeEditToolbar(),
                c(sB, this))
            ) {
                for (let t of c(sB, this).values()) clearTimeout(t);
                d(sB, this, null);
            }
            (this.parent = null), c(sO, this)?.destroy(), d(sO, this, null), c(sS, this)?.remove(), d(sS, this, null);
        }
        get isResizable() {
            return !1;
        }
        makeResizable() {
            this.isResizable && (r(s$, this, sV).call(this), c(sx, this).classList.remove("hidden"));
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
                [s, a, n, r] = this.getPDFRect();
            return [t._round(s + (n - s) * e), t._round(a + (r - a) * (1 - i))];
        }
        get commentButtonColor() {
            return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
        }
        get commentPopupPosition() {
            return c(sb, this).commentPopupPositionInLayer;
        }
        set commentPopupPosition(t) {
            c(sb, this).commentPopupPositionInLayer = t;
        }
        hasDefaultPopupPosition() {
            return c(sb, this).hasDefaultPopupPosition();
        }
        get commentButtonWidth() {
            return c(sb, this).commentButtonWidth;
        }
        get elementBeforePopup() {
            return this.div;
        }
        setCommentButtonStates(t) {
            c(sb, this)?.setCommentButtonStates(t);
        }
        keydown(e) {
            if (!this.isResizable || e.target !== this.div || "Enter" !== e.key) return;
            this._uiManager.setSelected(this),
                d(sM, this, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
            let i = c(sx, this).children;
            if (!c(sm, this)) {
                d(sm, this, Array.from(i));
                let e = r(s$, this, s3).bind(this),
                    s = r(s$, this, s5).bind(this),
                    a = this._uiManager._signal;
                for (let i of c(sm, this)) {
                    let n = i.getAttribute("data-resizer-name");
                    i.setAttribute("role", "spinbutton"),
                        i.addEventListener("keydown", e, { signal: a }),
                        i.addEventListener("blur", s, { signal: a }),
                        i.addEventListener("focus", r(s$, this, s4).bind(this, n), { signal: a }),
                        i.setAttribute("data-l10n-id", t._l10nResizer[n]);
                }
            }
            let s = c(sm, this)[0],
                a = 0;
            for (let t of i) {
                if (t === s) break;
                a++;
            }
            let n = (((360 - this.rotation + this.parentRotation) % 360) / 90) * (c(sm, this).length / 4);
            if (n !== a) {
                if (n < a) for (let t = 0; t < a - n; t++) c(sx, this).append(c(sx, this).firstElementChild);
                else if (n > a)
                    for (let t = 0; t < n - a; t++) c(sx, this).firstElementChild.before(c(sx, this).lastElementChild);
                let e = 0;
                for (let s of i) {
                    let i = c(sm, this)[e++].getAttribute("data-resizer-name");
                    s.setAttribute("data-l10n-id", t._l10nResizer[i]);
                }
            }
            r(s$, this, s6).call(this, 0),
                d(sL, this, !0),
                c(sx, this).firstElementChild.focus({ focusVisible: !0 }),
                e.preventDefault(),
                e.stopImmediatePropagation();
        }
        _resizeWithKeyboard(t, e) {
            c(sL, this) && r(s$, this, sK).call(this, c(sE, this), { deltaX: t, deltaY: e, fromKeyboard: !0 });
        }
        _stopResizingWithKeyboard() {
            r(s$, this, s8).call(this), this.div.focus();
        }
        select() {
            this.isSelected && this._editToolbar
                ? this._editToolbar.show()
                : ((this.isSelected = !0),
                    this.makeResizable(),
                    this.div?.classList.add("selectedEditor"),
                    this._editToolbar)
                  ? (this._editToolbar?.show(), c(sw, this)?.toggleAltTextBadge(!1))
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
                c(sx, this)?.classList.add("hidden"),
                this.div?.classList.remove("selectedEditor"),
                this.div?.contains(document.activeElement) &&
                    this._uiManager.currentLayer.div.focus({ preventScroll: !0 }),
                this._editToolbar?.hide(),
                c(sw, this)?.toggleAltTextBadge(!0),
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
            return c(sD, this);
        }
        set isEditing(t) {
            d(sD, this, t),
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
                c(sB, this) || d(sB, this, new Map());
                let { action: i } = e,
                    s = c(sB, this).get(i);
                s && clearTimeout(s),
                    (s = setTimeout(() => {
                        this._reportTelemetry(e), c(sB, this).delete(i), 0 === c(sB, this).size && d(sB, this, null);
                    }, t._telemetryTimeout)),
                    c(sB, this).set(i, s);
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
            this.div && (this.div.tabIndex = 0), d(sA, this, !1);
        }
        disable() {
            this.div && (this.div.tabIndex = -1), d(sA, this, !0);
        }
        updateFakeAnnotationElement(t) {
            if (!c(sS, this) && !this.deleted) return void d(sS, this, t.addFakeAnnotation(this));
            if (this.deleted) {
                c(sS, this).remove(), d(sS, this, null);
                return;
            }
            (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) &&
                c(sS, this).updateEdited({ rect: this.getPDFRect(), popup: this.comment });
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
    if (c(sx, this)) return;
    d(sx, this, document.createElement("div")), c(sx, this).classList.add("resizers");
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
        c(sx, this).append(t),
            t.classList.add("resizer", i),
            t.setAttribute("data-resizer-name", i),
            t.addEventListener("pointerdown", r(s$, this, sX).bind(this, i), { signal: e }),
            t.addEventListener("contextmenu", tc, { signal: e }),
            (t.tabIndex = -1);
    }
    this.div.prepend(c(sx, this));
}
function sX(t, e) {
    e.preventDefault();
    let { isMac: i } = z.platform;
    if (0 !== e.button || (e.ctrlKey && i)) return;
    c(sw, this)?.toggle(!1);
    let s = this._isDraggable;
    (this._isDraggable = !1), d(sk, this, [e.screenX, e.screenY]);
    let a = new AbortController(),
        n = this._uiManager.combinedSignal(a);
    this.parent.togglePointerEvents(!1),
        window.addEventListener("pointermove", r(s$, this, sK).bind(this, t), { passive: !0, capture: !0, signal: n }),
        window.addEventListener("touchmove", tu, { passive: !1, signal: n }),
        window.addEventListener("contextmenu", tc, { signal: n }),
        d(sM, this, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
    let o = this.parent.div.style.cursor,
        l = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
    let h = () => {
        a.abort(),
            this.parent.togglePointerEvents(!0),
            c(sw, this)?.toggle(!0),
            (this._isDraggable = s),
            (this.parent.div.style.cursor = o),
            (this.div.style.cursor = l),
            r(s$, this, sY).call(this);
    };
    window.addEventListener("pointerup", h, { signal: n }), window.addEventListener("blur", h, { signal: n });
}
function sq(t, e, i, s) {
    (this.width = i),
        (this.height = s),
        (this.x = t),
        (this.y = e),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResized();
}
function sY() {
    if (!c(sM, this)) return;
    let { savedX: t, savedY: e, savedWidth: i, savedHeight: s } = c(sM, this);
    d(sM, this, null);
    let a = this.x,
        n = this.y,
        o = this.width,
        l = this.height;
    (a === t && n === e && o === i && l === s) ||
        this.addCommands({
            cmd: r(s$, this, sq).bind(this, a, n, o, l),
            undo: r(s$, this, sq).bind(this, t, e, i, s),
            mustExec: !0,
        });
}
function sK(t, e) {
    let i,
        s,
        [a, n] = this.parentDimensions,
        o = this.x,
        l = this.y,
        h = this.width,
        u = this.height,
        p = sH.MIN_SIZE / a,
        g = sH.MIN_SIZE / n,
        f = r(s$, this, sG).call(this, this.rotation),
        m = (t, e) => [f[0] * t + f[2] * e, f[1] * t + f[3] * e],
        w = r(s$, this, sG).call(this, 360 - this.rotation),
        b,
        v,
        A = !1,
        y = !1;
    switch (t) {
        case "topLeft":
            (A = !0), (b = (t, e) => [0, 0]), (v = (t, e) => [t, e]);
            break;
        case "topMiddle":
            (b = (t, e) => [t / 2, 0]), (v = (t, e) => [t / 2, e]);
            break;
        case "topRight":
            (A = !0), (b = (t, e) => [t, 0]), (v = (t, e) => [0, e]);
            break;
        case "middleRight":
            (y = !0), (b = (t, e) => [t, e / 2]), (v = (t, e) => [0, e / 2]);
            break;
        case "bottomRight":
            (A = !0), (b = (t, e) => [t, e]), (v = (t, e) => [0, 0]);
            break;
        case "bottomMiddle":
            (b = (t, e) => [t / 2, e]), (v = (t, e) => [t / 2, 0]);
            break;
        case "bottomLeft":
            (A = !0), (b = (t, e) => [0, e]), (v = (t, e) => [t, 0]);
            break;
        case "middleLeft":
            (y = !0), (b = (t, e) => [0, e / 2]), (v = (t, e) => [t, e / 2]);
    }
    let _ = b(h, u),
        x = v(h, u),
        k = m(...x),
        M = sH._round(o + k[0]),
        S = sH._round(l + k[1]),
        C = 1,
        E = 1,
        T,
        P;
    if (e.fromKeyboard) ({ deltaX: T, deltaY: P } = e);
    else {
        let { screenX: t, screenY: i } = e,
            [s, a] = c(sk, this);
        ([T, P] = this.screenToPageTranslation(t - s, i - a)), (c(sk, this)[0] = t), (c(sk, this)[1] = i);
    }
    if ((([T, P] = ((i = T / a), (s = P / n), [w[0] * i + w[2] * s, w[1] * i + w[3] * s])), A)) {
        let t = Math.hypot(h, u);
        C = E = Math.max(Math.min(Math.hypot(x[0] - _[0] - T, x[1] - _[1] - P) / t, 1 / h, 1 / u), p / h, g / u);
    } else y ? (C = Z(Math.abs(x[0] - _[0] - T), p, 1) / h) : (E = Z(Math.abs(x[1] - _[1] - P), g, 1) / u);
    let D = sH._round(h * C),
        I = sH._round(u * E),
        L = M - (k = m(...v(D, I)))[0],
        R = S - k[1];
    c(sP, this) || d(sP, this, [this.x, this.y, this.width, this.height]),
        (this.width = D),
        (this.height = I),
        (this.x = L),
        (this.y = R),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResizing();
}
function sQ() {
    d(sM, this, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }),
        c(sw, this)?.toggle(!1),
        this.parent.togglePointerEvents(!1);
}
function sJ(t, e, i) {
    let s = (i / e) * 0.7 + 1 - 0.7;
    if (1 === s) return;
    let a = r(s$, this, sG).call(this, this.rotation),
        n = (t, e) => [a[0] * t + a[2] * e, a[1] * t + a[3] * e],
        [o, l] = this.parentDimensions,
        h = this.x,
        u = this.y,
        p = this.width,
        g = this.height;
    s = Math.max(Math.min(s, 1 / p, 1 / g), sH.MIN_SIZE / o / p, sH.MIN_SIZE / l / g);
    let f = sH._round(p * s),
        m = sH._round(g * s);
    if (f === p && m === g) return;
    c(sP, this) || d(sP, this, [h, u, p, g]);
    let w = n(p / 2, g / 2),
        b = sH._round(h + w[0]),
        v = sH._round(u + w[1]),
        A = n(f / 2, m / 2);
    (this.x = b - A[0]),
        (this.y = v - A[1]),
        (this.width = f),
        (this.height = m),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResizing();
}
function sZ() {
    c(sw, this)?.toggle(!0), this.parent.togglePointerEvents(!0), r(s$, this, sY).call(this);
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
        a = this._uiManager.combinedSignal(s),
        n = { capture: !0, passive: !1, signal: a },
        o = (t) => {
            s.abort(),
                d(sy, this, null),
                d(sT, this, !1),
                this._uiManager.endDragSession() || r(s$, this, s0).call(this, t),
                i && this._onStopDragging();
        };
    e &&
        (d(sF, this, t.clientX),
        d(sN, this, t.clientY),
        d(sy, this, t.pointerId),
        d(s_, this, t.pointerType),
        window.addEventListener(
            "pointermove",
            (t) => {
                i || ((i = !0), this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
                let { clientX: e, clientY: s, pointerId: a } = t;
                if (a !== c(sy, this)) return void tu(t);
                let [n, r] = this.screenToPageTranslation(e - c(sF, this), s - c(sN, this));
                d(sF, this, e), d(sN, this, s), this._uiManager.dragSelectedEditors(n, r);
            },
            n,
        ),
        window.addEventListener("touchmove", tu, n),
        window.addEventListener(
            "pointerdown",
            (t) => {
                t.pointerType === c(s_, this) && (c(sO, this) || t.isPrimary) && o(t), tu(t);
            },
            n,
        ));
    let l = (t) => {
        c(sy, this) && c(sy, this) !== t.pointerId ? tu(t) : o(t);
    };
    window.addEventListener("pointerup", l, { signal: a }), window.addEventListener("blur", l, { signal: a });
}
function s2() {
    if (c(sC, this) || !this.div) return;
    d(sC, this, new AbortController());
    let t = this._uiManager.combinedSignal(c(sC, this));
    this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t }),
        this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t });
}
function s3(t) {
    sH._resizerKeyboardManager.exec(this, t);
}
function s5(t) {
    c(sL, this) && t.relatedTarget?.parentNode !== c(sx, this) && r(s$, this, s8).call(this);
}
function s4(t) {
    d(sE, this, c(sL, this) ? t : "");
}
function s6(t) {
    if (c(sm, this)) for (let e of c(sm, this)) e.tabIndex = t;
}
function s8() {
    d(sL, this, !1), r(s$, this, s6).call(this, -1), r(s$, this, sY).call(this);
}
(0, s.t)(sH, "_l10n", null),
    (0, s.t)(sH, "_l10nResizer", null),
    (0, s.t)(sH, "_borderLineWidth", -1),
    (0, s.t)(sH, "_colorManager", new ey()),
    (0, s.t)(sH, "_zIndex", 1),
    (0, s.t)(sH, "_telemetryTimeout", 1e3);
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
                for (let s = 0, a = t.length; s < a; s++) {
                    let a = t.charCodeAt(s);
                    a <= 255 ? (e[i++] = a) : ((e[i++] = a >>> 8), (e[i++] = 255 & a));
                }
            } else if (ArrayBuffer.isView(t)) i = (e = t.slice()).byteLength;
            else throw Error("Invalid data format, must be a string or TypedArray.");
            let s = i >> 2,
                a = i - 4 * s,
                n = new Uint32Array(e.buffer, 0, s),
                r = 0,
                o = 0,
                l = this.h1,
                h = this.h2;
            for (let t = 0; t < s; t++)
                1 & t
                    ? ((l ^= r =
                          ((0x1b873593 *
                              (r =
                                  ((r = ((0xcc9e2d51 * (r = n[t])) & 0xffff0000) | ((11601 * r) & 65535)) << 15) |
                                  (r >>> 17))) &
                              0xffff0000) |
                          ((13715 * r) & 65535)),
                      (l = 5 * (l = (l << 13) | (l >>> 19)) + 0xe6546b64))
                    : ((h ^= o =
                          ((0x1b873593 *
                              (o =
                                  ((o = ((0xcc9e2d51 * (o = n[t])) & 0xffff0000) | ((11601 * o) & 65535)) << 15) |
                                  (o >>> 17))) &
                              0xffff0000) |
                          ((13715 * o) & 65535)),
                      (h = 5 * (h = (h << 13) | (h >>> 19)) + 0xe6546b64));
            switch (((r = 0), a)) {
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
    at = Object.freeze({ map: null, hash: "", transfer: void 0 }),
    ae = new WeakMap(),
    ai = new WeakMap(),
    as = new WeakMap(),
    aa = new WeakMap(),
    an = new WeakSet();
p = Symbol.iterator;
var ar = class {
    constructor() {
        l(this, an),
            h(this, ae, !1),
            h(this, ai, null),
            h(this, as, null),
            h(this, aa, new Map()),
            (this.onSetModified = null),
            (this.onResetModified = null),
            (this.onAnnotationEditor = null);
    }
    getValue(t, e) {
        let i = c(aa, this).get(t);
        return void 0 === i ? e : Object.assign(e, i);
    }
    getRawValue(t) {
        return c(aa, this).get(t);
    }
    remove(t) {
        let e = c(aa, this).get(t);
        if (
            void 0 !== e &&
            (e instanceof sH && c(as, this).delete(e.annotationElementId),
            c(aa, this).delete(t),
            0 === c(aa, this).size && this.resetModified(),
            "function" == typeof this.onAnnotationEditor)
        ) {
            for (let t of c(aa, this).values()) if (t instanceof sH) return;
            this.onAnnotationEditor(null);
        }
    }
    setValue(t, e) {
        let i = c(aa, this).get(t),
            s = !1;
        if (void 0 !== i) for (let [t, a] of Object.entries(e)) i[t] !== a && ((s = !0), (i[t] = a));
        else (s = !0), c(aa, this).set(t, e);
        s && r(an, this, ao).call(this),
            e instanceof sH &&
                ((c(as, this) || d(as, this, new Map())).set(e.annotationElementId, e),
                "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type));
    }
    has(t) {
        return c(aa, this).has(t);
    }
    get size() {
        return c(aa, this).size;
    }
    resetModified() {
        c(ae, this) && (d(ae, this, !1), "function" == typeof this.onResetModified && this.onResetModified());
    }
    get print() {
        return new ah(this);
    }
    get serializable() {
        if (0 === c(aa, this).size) return at;
        let t = new Map(),
            e = new s9(),
            i = [],
            s = Object.create(null),
            a = !1;
        for (let [i, n] of c(aa, this)) {
            let r = n instanceof sH ? n.serialize(!1, s) : n;
            n.page && ((n.pageIndex = n.page._pageIndex), delete n.page),
                r && (t.set(i, r), e.update(`${i}:${JSON.stringify(r)}`), (a ||= !!r.bitmap));
        }
        if (a) for (let e of t.values()) e.bitmap && i.push(e.bitmap);
        return t.size > 0 ? { map: t, hash: e.hexdigest(), transfer: i } : at;
    }
    get editorStats() {
        let t = null,
            e = new Map(),
            i = 0,
            s = 0;
        for (let a of c(aa, this).values()) {
            if (!(a instanceof sH)) {
                a.popup && (a.popup.deleted ? (s += 1) : (i += 1));
                continue;
            }
            a.isCommentDeleted ? (s += 1) : a.hasEditedComment && (i += 1);
            let n = a.telemetryFinalData;
            if (!n) continue;
            let { type: r } = n;
            e.has(r) || e.set(r, Object.getPrototypeOf(a).constructor), (t ||= Object.create(null));
            let o = (t[r] ||= new Map());
            for (let [t, e] of Object.entries(n)) {
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
        d(ai, this, null);
    }
    updateEditor(t, e) {
        let i = c(as, this)?.get(t);
        return !!i && (i.updateFromAnnotationLayer(e), !0);
    }
    getEditor(t) {
        return c(as, this)?.get(t) || null;
    }
    get modifiedIds() {
        if (c(ai, this)) return c(ai, this);
        let t = [];
        if (c(as, this)) for (let e of c(as, this).values()) e.serialize() && t.push(e.annotationElementId);
        return d(ai, this, { ids: new Set(t), hash: t.join(",") });
    }
    [p]() {
        return c(aa, this).entries();
    }
};
function ao() {
    c(ae, this) || (d(ae, this, !0), "function" == typeof this.onSetModified && this.onSetModified());
}
var al = new WeakMap(),
    ah = class extends ar {
        constructor(t) {
            super(), h(this, al, void 0);
            let { map: e, hash: i, transfer: s } = t.serializable;
            d(al, this, { map: structuredClone(e, s ? { transfer: s } : null), hash: i, transfer: s });
        }
        get print() {
            D("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
            return c(al, this);
        }
        get modifiedIds() {
            return F(this, "modifiedIds", { ids: new Set(), hash: "" });
        }
    },
    ad = new WeakMap(),
    ac = class {
        constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
            h(this, ad, new Set()),
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
                c(ad, this).clear(),
                (this.styleElement &&= (this.styleElement.remove(), null));
        }
        async loadSystemFont({ systemFontInfo: t, disableFontFace: e, _inspectFont: i }) {
            if (!(!t || c(ad, this).has(t.loadedName))) {
                if (
                    (I(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."),
                    this.isFontLoadingAPISupported)
                ) {
                    let { loadedName: e, src: s, style: a } = t,
                        n = new FontFace(e, s, a);
                    this.addNativeFontFace(n);
                    try {
                        await n.load(), c(ad, this).add(e), i?.(t);
                    } catch {
                        P(
                            `Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`,
                        ),
                            this.removeNativeFontFace(n);
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
            function s(t, e) {
                return (
                    (t.charCodeAt(e) << 24) |
                    (t.charCodeAt(e + 1) << 16) |
                    (t.charCodeAt(e + 2) << 8) |
                    (255 & t.charCodeAt(e + 3))
                );
            }
            function a(t, e, i, s) {
                return t.substring(0, e) + s + t.substring(e + i);
            }
            let n,
                r,
                o = this._document.createElement("canvas");
            (o.width = 1), (o.height = 1);
            let l = o.getContext("2d"),
                h = 0,
                d = `lt${Date.now()}${this.loadTestFontId++}`,
                c = this._loadTestFont,
                u = s((c = a(c, 976, d.length, d)), 16);
            for (n = 0, r = d.length - 3; n < r; n += 4) u = (u - 0x58585858 + s(d, n)) | 0;
            n < d.length && (u = (u - 0x58585858 + s(d + "XXX", n)) | 0),
                (c = a(c, 16, 4, String.fromCharCode(((i = u) >> 24) & 255, (i >> 16) & 255, (i >> 8) & 255, 255 & i)));
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
    au = new WeakMap(),
    ap = class {
        constructor(t, e = null, i, s) {
            h(this, au, void 0),
                (this.compiledGlyphs = Object.create(null)),
                d(au, this, t),
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
            if (!this.data || this.disableFontFace) return null;
            let t = `url(data:${this.mimetype};base64,${this.data.toBase64()});`,
                e;
            if (this.cssFontInfo) {
                let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
                    (e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`);
            } else e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
            return this._inspectFont?.(this, t), e;
        }
        getPathGenerator(t, e) {
            if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
            let i = this.loadedName + "_path_" + e,
                s;
            try {
                s = t.get(i);
            } catch (t) {
                P(`getPathGenerator - ignoring character: "${t}".`);
            }
            let a = tT(s?.path);
            return this.fontExtraProperties || t.delete(i), (this.compiledGlyphs[e] = a);
        }
        get black() {
            return c(au, this).black;
        }
        get bold() {
            return c(au, this).bold;
        }
        get disableFontFace() {
            return c(au, this).disableFontFace ?? !1;
        }
        set disableFontFace(t) {
            F(this, "disableFontFace", !!t);
        }
        get fontExtraProperties() {
            return c(au, this).fontExtraProperties ?? !1;
        }
        get isInvalidPDFjsFont() {
            return c(au, this).isInvalidPDFjsFont;
        }
        get isType3Font() {
            return c(au, this).isType3Font;
        }
        get italic() {
            return c(au, this).italic;
        }
        get missingFile() {
            return c(au, this).missingFile;
        }
        get remeasure() {
            return c(au, this).remeasure;
        }
        get vertical() {
            return c(au, this).vertical;
        }
        get ascent() {
            return c(au, this).ascent;
        }
        get defaultWidth() {
            return c(au, this).defaultWidth;
        }
        get descent() {
            return c(au, this).descent;
        }
        get bbox() {
            return c(au, this).bbox;
        }
        set bbox(t) {
            F(this, "bbox", t);
        }
        get fontMatrix() {
            return c(au, this).fontMatrix;
        }
        get fallbackName() {
            return c(au, this).fallbackName;
        }
        get loadedName() {
            return c(au, this).loadedName;
        }
        get mimetype() {
            return c(au, this).mimetype;
        }
        get name() {
            return c(au, this).name;
        }
        get data() {
            return c(au, this).data;
        }
        clearData() {
            c(au, this).clearData();
        }
        get cssFontInfo() {
            return c(au, this).cssFontInfo;
        }
        get systemFontInfo() {
            return c(au, this).systemFontInfo;
        }
        get defaultVMetrics() {
            return c(au, this).defaultVMetrics;
        }
    },
    ag = new WeakMap(),
    af = new WeakMap(),
    am = new WeakMap(),
    aw = new WeakSet(),
    ab = class t {
        static write(e) {
            let i = new TextEncoder(),
                s = {},
                a = 0;
            for (let n of t.strings) {
                let t = i.encode(e[n]);
                (s[n] = t), (a += 4 + t.length);
            }
            let n = new ArrayBuffer(a),
                r = new Uint8Array(n),
                o = new DataView(n),
                l = 0;
            for (let e of t.strings) {
                let t = s[e],
                    i = t.length;
                o.setUint32(l, i), r.set(t, l + 4), (l += 4 + i);
            }
            return I(l === n.byteLength, "CssFontInfo.write: Buffer overflow"), n;
        }
        constructor(t) {
            l(this, aw),
                h(this, ag, void 0),
                h(this, af, void 0),
                h(this, am, void 0),
                d(ag, this, t),
                d(af, this, new DataView(c(ag, this))),
                d(am, this, new TextDecoder());
        }
        get fontFamily() {
            return r(aw, this, av).call(this, 0);
        }
        get fontWeight() {
            return r(aw, this, av).call(this, 1);
        }
        get italicAngle() {
            return r(aw, this, av).call(this, 2);
        }
    };
function av(t) {
    I(t < ab.strings.length, "Invalid string index");
    let e = 0;
    for (let i = 0; i < t; i++) e += c(af, this).getUint32(e) + 4;
    let i = c(af, this).getUint32(e);
    return c(am, this).decode(new Uint8Array(c(ag, this), e + 4, i));
}
(0, s.t)(ab, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
var aA = new WeakMap(),
    ay = new WeakMap(),
    a_ = new WeakMap(),
    ax = new WeakSet(),
    ak = class t {
        static write(e) {
            let i = new TextEncoder(),
                s = {},
                a = 0;
            for (let n of t.strings) {
                let t = i.encode(e[n]);
                (s[n] = t), (a += 4 + t.length);
            }
            let n,
                r,
                o = 1 + (a += 4);
            e.style &&
                ((n = i.encode(e.style.style)), (r = i.encode(e.style.weight)), (o += 4 + n.length + 4 + r.length));
            let l = new ArrayBuffer(o),
                h = new Uint8Array(l),
                d = new DataView(l),
                c = 0;
            for (let i of (d.setUint8(c++, +!!e.guessFallback), d.setUint32(c, 0), (c += 4), (a = 0), t.strings)) {
                let t = s[i],
                    e = t.length;
                (a += 4 + e), d.setUint32(c, e), h.set(t, c + 4), (c += 4 + e);
            }
            return (
                d.setUint32(c - a - 4, a),
                e.style &&
                    (d.setUint32(c, n.length),
                    h.set(n, c + 4),
                    (c += 4 + n.length),
                    d.setUint32(c, r.length),
                    h.set(r, c + 4),
                    (c += 4 + r.length)),
                I(c <= l.byteLength, "SubstitionInfo.write: Buffer overflow"),
                l.transferToFixedLength(c)
            );
        }
        constructor(t) {
            l(this, ax),
                h(this, aA, void 0),
                h(this, ay, void 0),
                h(this, a_, void 0),
                d(aA, this, t),
                d(ay, this, new DataView(c(aA, this))),
                d(a_, this, new TextDecoder());
        }
        get guessFallback() {
            return 0 !== c(ay, this).getUint8(0);
        }
        get css() {
            return r(ax, this, aM).call(this, 0);
        }
        get loadedName() {
            return r(ax, this, aM).call(this, 1);
        }
        get baseFontName() {
            return r(ax, this, aM).call(this, 2);
        }
        get src() {
            return r(ax, this, aM).call(this, 3);
        }
        get style() {
            let t = 1;
            t += 4 + c(ay, this).getUint32(t);
            let e = c(ay, this).getUint32(t),
                i = c(a_, this).decode(new Uint8Array(c(aA, this), t + 4, e));
            t += 4 + e;
            let s = c(ay, this).getUint32(t);
            return { style: i, weight: c(a_, this).decode(new Uint8Array(c(aA, this), t + 4, s)) };
        }
    };
function aM(t) {
    I(t < ak.strings.length, "Invalid string index");
    let e = 5;
    for (let i = 0; i < t; i++) e += c(ay, this).getUint32(e) + 4;
    let i = c(ay, this).getUint32(e);
    return c(a_, this).decode(new Uint8Array(c(aA, this), e + 4, i));
}
(0, s.t)(ak, "strings", ["css", "loadedName", "baseFontName", "src"]);
var aS = new WeakMap(),
    aC = new WeakMap(),
    aE = new WeakMap(),
    aT = new WeakSet(),
    aP = class t {
        constructor({ data: t, extra: e }) {
            l(this, aT),
                h(this, aS, void 0),
                h(this, aC, void 0),
                h(this, aE, void 0),
                d(aS, this, t),
                d(aC, this, new TextDecoder()),
                d(aE, this, new DataView(c(aS, this))),
                e && Object.assign(this, e);
        }
        get black() {
            return r(aT, this, aD).call(this, 0);
        }
        get bold() {
            return r(aT, this, aD).call(this, 1);
        }
        get disableFontFace() {
            return r(aT, this, aD).call(this, 2);
        }
        get fontExtraProperties() {
            return r(aT, this, aD).call(this, 3);
        }
        get isInvalidPDFjsFont() {
            return r(aT, this, aD).call(this, 4);
        }
        get isType3Font() {
            return r(aT, this, aD).call(this, 5);
        }
        get italic() {
            return r(aT, this, aD).call(this, 6);
        }
        get missingFile() {
            return r(aT, this, aD).call(this, 7);
        }
        get remeasure() {
            return r(aT, this, aD).call(this, 8);
        }
        get vertical() {
            return r(aT, this, aD).call(this, 9);
        }
        get ascent() {
            return r(aT, this, aI).call(this, 0);
        }
        get defaultWidth() {
            return r(aT, this, aI).call(this, 1);
        }
        get descent() {
            return r(aT, this, aI).call(this, 2);
        }
        get bbox() {
            let t = aF._;
            if (0 === c(aE, this).getUint8(t)) return;
            t += 1;
            let e = [];
            for (let i = 0; i < 4; i++) e.push(c(aE, this).getInt16(t, !0)), (t += 2);
            return e;
        }
        get fontMatrix() {
            let t = aN._;
            if (0 === c(aE, this).getUint8(t)) return;
            t += 1;
            let e = [];
            for (let i = 0; i < 6; i++) e.push(c(aE, this).getFloat64(t, !0)), (t += 8);
            return e;
        }
        get defaultVMetrics() {
            let t = aB._;
            if (0 === c(aE, this).getUint8(t)) return;
            t += 1;
            let e = [];
            for (let i = 0; i < 3; i++) e.push(c(aE, this).getInt16(t, !0)), (t += 2);
            return e;
        }
        get fallbackName() {
            return r(aT, this, aL).call(this, 0);
        }
        get loadedName() {
            return r(aT, this, aL).call(this, 1);
        }
        get mimetype() {
            return r(aT, this, aL).call(this, 2);
        }
        get name() {
            return r(aT, this, aL).call(this, 3);
        }
        get data() {
            let t = aO._,
                e = c(aE, this).getUint32(t);
            t += 4 + e;
            let i = c(aE, this).getUint32(t);
            t += 4 + i;
            let s = c(aE, this).getUint32(t);
            t += 4 + s;
            let a = c(aE, this).getUint32(t);
            if (0 !== a) return new Uint8Array(c(aS, this), t + 4, a);
        }
        clearData() {
            let t = aO._,
                e = c(aE, this).getUint32(t);
            t += 4 + e;
            let i = c(aE, this).getUint32(t);
            t += 4 + i;
            let s = c(aE, this).getUint32(t);
            t += 4 + s;
            let a = c(aE, this).getUint32(t);
            new Uint8Array(c(aS, this), t + 4, a).fill(0), c(aE, this).setUint32(t, 0);
        }
        get cssFontInfo() {
            let t = aO._,
                e = c(aE, this).getUint32(t);
            t += 4 + e;
            let i = c(aE, this).getUint32(t);
            t += 4 + i;
            let s = c(aE, this).getUint32(t);
            if (0 === s) return null;
            let a = new Uint8Array(s);
            return a.set(new Uint8Array(c(aS, this), t + 4, s)), new ab(a.buffer);
        }
        get systemFontInfo() {
            let t = aO._,
                e = c(aE, this).getUint32(t);
            t += 4 + e;
            let i = c(aE, this).getUint32(t);
            if (0 === i) return null;
            let s = new Uint8Array(i);
            return s.set(new Uint8Array(c(aS, this), t + 4, i)), new ak(s.buffer);
        }
        static write(e) {
            let i = e.systemFontInfo ? ak.write(e.systemFontInfo) : null,
                s = e.cssFontInfo ? ab.write(e.cssFontInfo) : null,
                a = new TextEncoder(),
                n = {},
                r = 0;
            for (let i of t.strings) (n[i] = a.encode(e[i])), (r += 4 + n[i].length);
            let o = new ArrayBuffer(
                    aO._ +
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
            for (let i of (I(d === aR._, "FontInfo.write: Boolean properties offset mismatch"), t.numbers))
                h.setFloat64(d, e[i]), (d += 8);
            if ((I(d === aF._, "FontInfo.write: Number properties offset mismatch"), e.bbox))
                for (let t of (h.setUint8(d++, 4), e.bbox)) h.setInt16(d, t, !0), (d += 2);
            else h.setUint8(d++, 0), (d += 8);
            if ((I(d === aN._, "FontInfo.write: BBox properties offset mismatch"), e.fontMatrix))
                for (let t of (h.setUint8(d++, 6), e.fontMatrix)) h.setFloat64(d, t, !0), (d += 8);
            else h.setUint8(d++, 0), (d += 48);
            if ((I(d === aB._, "FontInfo.write: FontMatrix properties offset mismatch"), e.defaultVMetrics))
                for (let t of (h.setUint8(d++, 1), e.defaultVMetrics)) h.setInt16(d, t, !0), (d += 2);
            else h.setUint8(d++, 0), (d += 6);
            for (let e of (I(d === aO._, "FontInfo.write: DefaultVMetrics properties offset mismatch"),
            h.setUint32(aO._, 0),
            (d += 4),
            t.strings)) {
                let t = n[e],
                    i = t.length;
                h.setUint32(d, i), l.set(t, d + 4), (d += 4 + i);
            }
            if ((h.setUint32(aO._, d - aO._ - 4), i)) {
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
function aD(t) {
    I(t < aP.bools.length, "Invalid boolean index");
    let e = Math.floor(t / 4),
        i = (c(aE, this).getUint8(e) >> ((2 * t) % 8)) & 3;
    return 0 === i ? void 0 : 2 === i;
}
function aI(t) {
    return I(t < aP.numbers.length, "Invalid number index"), c(aE, this).getFloat64(aR._ + 8 * t);
}
function aL(t) {
    I(t < aP.strings.length, "Invalid string index");
    let e = aO._ + 4;
    for (let i = 0; i < t; i++) e += c(aE, this).getUint32(e) + 4;
    let i = c(aE, this).getUint32(e),
        s = new Uint8Array(i);
    return s.set(new Uint8Array(c(aS, this), e + 4, i)), c(aC, this).decode(s);
}
(0, s.t)(aP, "bools", [
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
    (0, s.t)(aP, "numbers", ["ascent", "defaultWidth", "descent"]),
    (0, s.t)(aP, "strings", ["fallbackName", "loadedName", "mimetype", "name"]);
var aR = { _: Math.ceil((2 * aP.bools.length) / 8) },
    aF = { _: r(aP, aP, aR)._ + 8 * aP.numbers.length },
    aN = { _: r(aP, aP, aF)._ + 1 + 8 },
    aB = { _: r(aP, aP, aN)._ + 1 + 48 },
    aO = { _: r(aP, aP, aB)._ + 1 + 6 },
    aW = class {
        constructor(t) {
            (this.buffer = t), (this.view = new DataView(t)), (this.data = new Uint8Array(t));
        }
        static write(t) {
            let e,
                i = null,
                s = [],
                a = [],
                n = [],
                r = [],
                o = null,
                l = null;
            switch (t[0]) {
                case "RadialAxial":
                    (e = "axial" === t[1] ? 1 : 2),
                        (i = t[2]),
                        (n = t[3]),
                        1 === e ? s.push(...t[4], ...t[5]) : s.push(t[4][0], t[4][1], t[6], t[5][0], t[5][1], t[7]);
                    break;
                case "Mesh":
                    (e = 3), (o = t[1]), (s = t[2]), (a = t[3]), (r = t[4] || []), (i = t[6]), (l = t[7]);
                    break;
                default:
                    throw Error(`Unsupported pattern type: ${t[0]}`);
            }
            let h = Math.floor(s.length / 2),
                d = Math.floor(a.length / 3),
                c = n.length,
                u = r.length,
                p = 0;
            for (let t of r)
                (p += 1),
                    (p = 4 * Math.ceil(p / 4) + (4 + 4 * t.coords.length) + (4 + 4 * t.colors.length)),
                    void 0 !== t.verticesPerRow && (p += 4);
            let g = new ArrayBuffer(20 + 8 * h + 3 * d + 8 * c + 16 * !!i + 3 * !!l + p),
                f = new DataView(g),
                m = new Uint8Array(g);
            f.setUint8(aU._, e),
                f.setUint8(a$._, +!!i),
                f.setUint8(aH._, +!!l),
                f.setUint8(aj._, o),
                f.setUint32(az._, h, !0),
                f.setUint32(aG._, d, !0),
                f.setUint32(aV._, c, !0),
                f.setUint32(aX._, u, !0);
            let w = 20;
            for (let [t, e] of (new Float32Array(g, 20, 2 * h).set(s), (w += 8 * h), m.set(a, w), (w += 3 * d), n))
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
                e = this.data[aU._],
                i = !!this.data[a$._],
                s = !!this.data[aH._],
                a = t.getUint32(az._, !0),
                n = t.getUint32(aG._, !0),
                r = t.getUint32(aV._, !0),
                o = t.getUint32(aX._, !0),
                l = 20,
                h = new Float32Array(this.buffer, l, 2 * a);
            l += 8 * a;
            let d = new Uint8Array(this.buffer, l, 3 * n);
            l += 3 * n;
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
                let a = t.getUint32(l, !0);
                l += 4;
                let n = new Int32Array(this.buffer, l, a);
                l += 4 * a;
                let r = { type: e, coords: s, colors: n };
                2 === e && ((r.verticesPerRow = t.getUint32(l, !0)), (l += 4)), g.push(r);
            }
            if (1 === e)
                return ["RadialAxial", "axial", u, c, Array.from(h.slice(0, 2)), Array.from(h.slice(2, 4)), null, null];
            if (2 === e) return ["RadialAxial", "radial", u, c, [h[0], h[1]], [h[3], h[4]], h[2], h[5]];
            if (3 === e) {
                let t = this.data[aj._],
                    e = null;
                if (h.length > 0) {
                    let t = h[0],
                        i = h[0],
                        s = h[1],
                        a = h[1];
                    for (let e = 0; e < h.length; e += 2) {
                        let n = h[e],
                            r = h[e + 1];
                        (t = t > n ? n : t), (s = s > r ? r : s), (i = i < n ? n : i), (a = a < r ? r : a);
                    }
                    e = [t, s, i, a];
                }
                return ["Mesh", t, h, d, g, e, u, p];
            }
            throw Error(`Unsupported pattern kind: ${e}`);
        }
    },
    aU = { _: 0 },
    a$ = { _: 1 },
    aH = { _: 2 },
    aj = { _: 3 },
    az = { _: 4 },
    aG = { _: 8 },
    aV = { _: 12 },
    aX = { _: 16 },
    aq = new WeakMap(),
    aY = class {
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
            h(this, aq, void 0), d(aq, this, t);
        }
        get path() {
            return z.isFloat16ArraySupported ? new Float16Array(c(aq, this)) : new Float32Array(c(aq, this));
        }
    };
function aK(t) {
    if ("string" != typeof t) return null;
    if (t.endsWith("/")) return t;
    throw Error(`Invalid factory url: "${t}" must include trailing slash.`);
}
var aQ = (t) =>
        "object" == typeof t && Number.isInteger(t?.num) && t.num >= 0 && Number.isInteger(t?.gen) && t.gen >= 0,
    aJ = function (t, e, i) {
        if (!Array.isArray(i) || i.length < 2) return !1;
        let [s, a, ...n] = i;
        if ((!t(s) && !Number.isInteger(s)) || !e(a)) return !1;
        let r = n.length,
            o = !0;
        switch (a.name) {
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
        for (let t of n) if (!("number" == typeof t || (o && null === t))) return !1;
        return !0;
    }.bind(null, aQ, (t) => "object" == typeof t && "string" == typeof t?.name),
    aZ = new WeakMap(),
    a0 = new WeakMap(),
    a1 = class {
        constructor() {
            h(this, aZ, new Map()), h(this, a0, Promise.resolve());
        }
        postMessage(t, e) {
            let i = { data: structuredClone(t, e ? { transfer: e } : null) };
            c(a0, this).then(() => {
                for (let [t] of c(aZ, this)) t.call(this, i);
            });
        }
        addEventListener(t, e, i = null) {
            let s = null;
            if (i?.signal instanceof AbortSignal) {
                let { signal: a } = i;
                if (a.aborted) return void P("LoopbackPort - cannot use an `aborted` signal.");
                let n = () => this.removeEventListener(t, e);
                (s = () => a.removeEventListener("abort", n)), a.addEventListener("abort", n);
            }
            c(aZ, this).set(e, s);
        }
        removeEventListener(t, e) {
            c(aZ, this).get(e)?.(), c(aZ, this).delete(e);
        }
        terminate() {
            for (let [, t] of c(aZ, this)) t?.();
            c(aZ, this).clear();
        }
    };
function a2() {}
function a3(t) {
    if (t instanceof H || t instanceof W || t instanceof B || t instanceof U || t instanceof O) return t;
    switch (
        (t instanceof Error ||
            ("object" == typeof t && t) ||
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
var a5 = new WeakMap(),
    a4 = new WeakSet(),
    a6 = class {
        constructor(t, e, i) {
            l(this, a4),
                h(this, a5, new AbortController()),
                (this.sourceName = t),
                (this.targetName = e),
                (this.comObj = i),
                (this.callbackId = 1),
                (this.streamId = 1),
                (this.streamSinks = Object.create(null)),
                (this.streamControllers = Object.create(null)),
                (this.callbackCapabilities = Object.create(null)),
                (this.actionHandler = Object.create(null)),
                i.addEventListener("message", r(a4, this, a8).bind(this), { signal: c(a5, this).signal });
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
                a = Promise.withResolvers();
            this.callbackCapabilities[s] = a;
            try {
                this.comObj.postMessage(
                    { sourceName: this.sourceName, targetName: this.targetName, action: t, callbackId: s, data: e },
                    i,
                );
            } catch (t) {
                a.reject(t);
            }
            return a.promise;
        }
        sendWithStream(t, e, i, s) {
            let a = this.streamId++,
                n = this.sourceName,
                r = this.targetName,
                o = this.comObj;
            return new ReadableStream(
                {
                    start: (i) => {
                        let l = Promise.withResolvers();
                        return (
                            (this.streamControllers[a] = {
                                controller: i,
                                startCall: l,
                                pullCall: null,
                                cancelCall: null,
                                isClosed: !1,
                            }),
                            o.postMessage(
                                {
                                    sourceName: n,
                                    targetName: r,
                                    action: t,
                                    streamId: a,
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
                            (this.streamControllers[a].pullCall = e),
                            o.postMessage({
                                sourceName: n,
                                targetName: r,
                                stream: 6,
                                streamId: a,
                                desiredSize: t.desiredSize,
                            }),
                            e.promise
                        );
                    },
                    cancel: (t) => {
                        I(t instanceof Error, "cancel must have a valid reason");
                        let e = Promise.withResolvers();
                        return (
                            (this.streamControllers[a].cancelCall = e),
                            (this.streamControllers[a].isClosed = !0),
                            o.postMessage({ sourceName: n, targetName: r, stream: 1, streamId: a, reason: a3(t) }),
                            e.promise
                        );
                    },
                },
                i,
            );
        }
        destroy() {
            c(a5, this)?.abort(), d(a5, this, null);
        }
    };
function a8({ data: t }) {
    if (t.targetName !== this.sourceName) return;
    if (t.stream) return void r(a4, this, a9).call(this, t);
    if (t.callback) {
        let e = t.callbackId,
            i = this.callbackCapabilities[e];
        if (!i) throw Error(`Cannot resolve callback ${e}`);
        if ((delete this.callbackCapabilities[e], 1 === t.callback)) i.resolve(t.data);
        else if (2 === t.callback) i.reject(a3(t.reason));
        else throw Error("Unexpected callback case");
        return;
    }
    let e = this.actionHandler[t.action];
    if (!e) throw Error(`Unknown action from worker: ${t.action}`);
    if (t.callbackId) {
        let i = this.sourceName,
            s = t.sourceName,
            a = this.comObj;
        Promise.try(e, t.data).then(
            function (e) {
                a.postMessage({ sourceName: i, targetName: s, callback: 1, callbackId: t.callbackId, data: e });
            },
            function (e) {
                a.postMessage({ sourceName: i, targetName: s, callback: 2, callbackId: t.callbackId, reason: a3(e) });
            },
        );
        return;
    }
    t.streamId ? r(a4, this, a7).call(this, t) : e(t.data);
}
function a7(t) {
    let e = t.streamId,
        i = this.sourceName,
        s = t.sourceName,
        a = this.comObj,
        n = this,
        r = this.actionHandler[t.action],
        o = {
            enqueue(t, n = 1, r) {
                if (this.isCancelled) return;
                let o = this.desiredSize;
                (this.desiredSize -= n),
                    o > 0 &&
                        this.desiredSize <= 0 &&
                        ((this.sinkCapability = Promise.withResolvers()), (this.ready = this.sinkCapability.promise)),
                    a.postMessage({ sourceName: i, targetName: s, stream: 4, streamId: e, chunk: t }, r);
            },
            close() {
                this.isCancelled ||
                    ((this.isCancelled = !0),
                    a.postMessage({ sourceName: i, targetName: s, stream: 3, streamId: e }),
                    delete n.streamSinks[e]);
            },
            error(t) {
                I(t instanceof Error, "error must have a valid reason"),
                    this.isCancelled ||
                        ((this.isCancelled = !0),
                        a.postMessage({ sourceName: i, targetName: s, stream: 5, streamId: e, reason: a3(t) }));
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
                a.postMessage({ sourceName: i, targetName: s, stream: 8, streamId: e, success: !0 });
            },
            function (t) {
                a.postMessage({ sourceName: i, targetName: s, stream: 8, streamId: e, reason: a3(t) });
            },
        );
}
function a9(t) {
    let e = t.streamId,
        i = this.sourceName,
        s = t.sourceName,
        a = this.comObj,
        n = this.streamControllers[e],
        o = this.streamSinks[e];
    switch (t.stream) {
        case 8:
            t.success ? n.startCall.resolve() : n.startCall.reject(a3(t.reason));
            break;
        case 7:
            t.success ? n.pullCall.resolve() : n.pullCall.reject(a3(t.reason));
            break;
        case 6:
            if (!o) {
                a.postMessage({ sourceName: i, targetName: s, stream: 7, streamId: e, success: !0 });
                break;
            }
            o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(),
                (o.desiredSize = t.desiredSize),
                Promise.try(o.onPull || a2).then(
                    function () {
                        a.postMessage({ sourceName: i, targetName: s, stream: 7, streamId: e, success: !0 });
                    },
                    function (t) {
                        a.postMessage({ sourceName: i, targetName: s, stream: 7, streamId: e, reason: a3(t) });
                    },
                );
            break;
        case 4:
            if ((I(n, "enqueue should have stream controller"), n.isClosed)) break;
            n.controller.enqueue(t.chunk);
            break;
        case 3:
            if ((I(n, "close should have stream controller"), n.isClosed)) break;
            (n.isClosed = !0), n.controller.close(), r(a4, this, nt).call(this, n, e);
            break;
        case 5:
            I(n, "error should have stream controller"),
                n.controller.error(a3(t.reason)),
                r(a4, this, nt).call(this, n, e);
            break;
        case 2:
            t.success ? n.cancelCall.resolve() : n.cancelCall.reject(a3(t.reason)), r(a4, this, nt).call(this, n, e);
            break;
        case 1:
            if (!o) break;
            let l = a3(t.reason);
            Promise.try(o.onCancel || a2, l).then(
                function () {
                    a.postMessage({ sourceName: i, targetName: s, stream: 2, streamId: e, success: !0 });
                },
                function (t) {
                    a.postMessage({ sourceName: i, targetName: s, stream: 2, streamId: e, reason: a3(t) });
                },
            ),
                o.sinkCapability.reject(l),
                (o.isCancelled = !0),
                delete this.streamSinks[e];
            break;
        default:
            throw Error("Unexpected stream case");
    }
}
async function nt(t, e) {
    await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]),
        delete this.streamControllers[e];
}
var ne = new WeakMap(),
    ni = class {
        constructor({ enableHWA: t = !1 }) {
            h(this, ne, !1), d(ne, this, t);
        }
        create(t, e) {
            if (t <= 0 || e <= 0) throw Error("Invalid canvas size");
            let i = this._createCanvas(t, e);
            return { canvas: i, context: i.getContext("2d", { willReadFrequently: !c(ne, this) }) };
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
    ns = class extends ni {
        constructor({ ownerDocument: t = globalThis.document, enableHWA: e = !1 }) {
            super({ enableHWA: e }), (this._document = t);
        }
        _createCanvas(t, e) {
            let i = this._document.createElement("canvas");
            return (i.width = t), (i.height = e), i;
        }
    },
    na = class {
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
    nn = class extends na {
        async _fetch(t) {
            let e = await ta(t, this.isCompressed ? "arraybuffer" : "text");
            return e instanceof ArrayBuffer ? new Uint8Array(e) : j(e);
        }
    },
    nr = class {
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
        addHighlightHCMFilter(t, e, i, s, a) {
            return "none";
        }
        destroy(t = !1) {}
    },
    no = new WeakMap(),
    nl = new WeakMap(),
    nh = new WeakMap(),
    nd = new WeakMap(),
    nc = new WeakMap(),
    nu = new WeakMap(),
    np = new WeakMap(),
    ng = new WeakSet(),
    nf = class extends nr {
        constructor({ docId: t, ownerDocument: e = globalThis.document }) {
            super(),
                l(this, ng),
                h(this, no, void 0),
                h(this, nl, void 0),
                h(this, nh, void 0),
                h(this, nd, void 0),
                h(this, nc, void 0),
                h(this, nu, void 0),
                h(this, np, 0),
                d(nd, this, t),
                d(nc, this, e);
        }
        addFilter(t) {
            var e, i;
            if (!t) return "none";
            let s = nm.call(r(ng, this)).get(t);
            if (s) return s;
            let [a, n, o] = r(ng, this, nv).call(this, t),
                l = 1 === t.length ? a : `${a}${n}${o}`;
            if ((s = nm.call(r(ng, this)).get(l))) return nm.call(r(ng, this)).set(t, s), s;
            let h = `g_${c(nd, this)}_transfer_map_${(d(np, this, ((e = c(np, this)), (i = e++), e)), i)}`,
                u = r(ng, this, nA).call(this, h);
            nm.call(r(ng, this)).set(t, u), nm.call(r(ng, this)).set(l, u);
            let p = r(ng, this, nx).call(this, h);
            return r(ng, this, nM).call(this, a, n, o, p), u;
        }
        addHCMFilter(t, e) {
            let i = `${t}-${e}`,
                s = "base",
                a = nw.call(r(ng, this)).get(s);
            if (
                a?.key === i ||
                (a
                    ? (a.filter?.remove(), (a.key = i), (a.url = "none"), (a.filter = null))
                    : ((a = { key: i, url: "none", filter: null }), nw.call(r(ng, this)).set(s, a)),
                !t || !e)
            )
                return a.url;
            let n = r(ng, this, nC).call(this, t);
            t = V.makeHexColor(...n);
            let o = r(ng, this, nC).call(this, e);
            if (
                ((e = V.makeHexColor(...o)),
                (nb.call(r(ng, this)).style.color = ""),
                ("#000000" === t && "#ffffff" === e) || t === e)
            )
                return a.url;
            let l = Array(256);
            for (let t = 0; t <= 255; t++) {
                let e = t / 255;
                l[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
            }
            let h = l.join(","),
                d = `g_${c(nd, this)}_hcm_filter`,
                u = (a.filter = r(ng, this, nx).call(this, d));
            r(ng, this, nM).call(this, h, h, h, u), r(ng, this, n_).call(this, u);
            let p = (t, e) => {
                let i = n[t] / 255,
                    s = o[t] / 255,
                    a = Array(e + 1);
                for (let t = 0; t <= e; t++) a[t] = i + (t / e) * (s - i);
                return a.join(",");
            };
            return (
                r(ng, this, nM).call(this, p(0, 5), p(1, 5), p(2, 5), u), (a.url = r(ng, this, nA).call(this, d)), a.url
            );
        }
        addAlphaFilter(t) {
            var e, i;
            let s = nm.call(r(ng, this)).get(t);
            if (s) return s;
            let [a] = r(ng, this, nv).call(this, [t]),
                n = `alpha_${a}`;
            if ((s = nm.call(r(ng, this)).get(n))) return nm.call(r(ng, this)).set(t, s), s;
            let o = `g_${c(nd, this)}_alpha_map_${(d(np, this, ((e = c(np, this)), (i = e++), e)), i)}`,
                l = r(ng, this, nA).call(this, o);
            nm.call(r(ng, this)).set(t, l), nm.call(r(ng, this)).set(n, l);
            let h = r(ng, this, nx).call(this, o);
            return r(ng, this, nS).call(this, a, h), l;
        }
        addLuminosityFilter(t) {
            var e, i;
            let s,
                a,
                n = nm.call(r(ng, this)).get(t || "luminosity");
            if (n) return n;
            if (
                (t ? (([s] = r(ng, this, nv).call(this, [t])), (a = `luminosity_${s}`)) : (a = "luminosity"),
                (n = nm.call(r(ng, this)).get(a)))
            )
                return nm.call(r(ng, this)).set(t, n), n;
            let o = `g_${c(nd, this)}_luminosity_map_${(d(np, this, ((e = c(np, this)), (i = e++), e)), i)}`,
                l = r(ng, this, nA).call(this, o);
            nm.call(r(ng, this)).set(t, l), nm.call(r(ng, this)).set(a, l);
            let h = r(ng, this, nx).call(this, o);
            return r(ng, this, ny).call(this, h), t && r(ng, this, nS).call(this, s, h), l;
        }
        addHighlightHCMFilter(t, e, i, s, a) {
            let n = `${e}-${i}-${s}-${a}`,
                o = nw.call(r(ng, this)).get(t);
            if (
                o?.key === n ||
                (o
                    ? (o.filter?.remove(), (o.key = n), (o.url = "none"), (o.filter = null))
                    : ((o = { key: n, url: "none", filter: null }), nw.call(r(ng, this)).set(t, o)),
                !e || !i)
            )
                return o.url;
            let [l, h] = [e, i].map(r(ng, this, nC).bind(this)),
                d = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]),
                u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]),
                [p, g] = [s, a].map(r(ng, this, nC).bind(this));
            u < d && ([d, u, p, g] = [u, d, g, p]), (nb.call(r(ng, this)).style.color = "");
            let f = (t, e, i) => {
                    let s = Array(256),
                        a = (u - d) / i,
                        n = t / 255,
                        r = (e - t) / (255 * i),
                        o = 0;
                    for (let t = 0; t <= i; t++) {
                        let e = Math.round(d + t * a),
                            i = n + t * r;
                        for (let t = o; t <= e; t++) s[t] = i;
                        o = e + 1;
                    }
                    for (let t = o; t < 256; t++) s[t] = s[o - 1];
                    return s.join(",");
                },
                m = `g_${c(nd, this)}_hcm_${t}_filter`,
                w = (o.filter = r(ng, this, nx).call(this, m));
            return (
                r(ng, this, n_).call(this, w),
                r(ng, this, nM).call(this, f(p[0], g[0], 5), f(p[1], g[1], 5), f(p[2], g[2], 5), w),
                (o.url = r(ng, this, nA).call(this, m)),
                o.url
            );
        }
        destroy(t = !1) {
            (t && c(nu, this)?.size) ||
                (c(nh, this)?.parentNode.parentNode.remove(),
                d(nh, this, null),
                c(nl, this)?.clear(),
                d(nl, this, null),
                c(nu, this)?.clear(),
                d(nu, this, null),
                d(np, this, 0));
        }
    };
function nm() {
    return c(nl, this) || d(nl, this, new Map());
}
function nw() {
    return c(nu, this) || d(nu, this, new Map());
}
function nb() {
    if (!c(nh, this)) {
        let t = c(nc, this).createElement("div"),
            { style: e } = t;
        (e.visibility = "hidden"),
            (e.contain = "strict"),
            (e.width = e.height = 0),
            (e.position = "absolute"),
            (e.top = e.left = 0),
            (e.zIndex = -1);
        let i = c(nc, this).createElementNS(ti, "svg");
        i.setAttribute("width", 0),
            i.setAttribute("height", 0),
            d(nh, this, c(nc, this).createElementNS(ti, "defs")),
            t.append(i),
            i.append(c(nh, this)),
            c(nc, this).body.append(t);
    }
    return c(nh, this);
}
function nv(t) {
    if (1 === t.length) {
        let e = t[0],
            i = Array(256);
        for (let t = 0; t < 256; t++) i[t] = e[t] / 255;
        let s = i.join(",");
        return [s, s, s];
    }
    let [e, i, s] = t,
        a = Array(256),
        n = Array(256),
        r = Array(256);
    for (let t = 0; t < 256; t++) (a[t] = e[t] / 255), (n[t] = i[t] / 255), (r[t] = s[t] / 255);
    return [a.join(","), n.join(","), r.join(",")];
}
function nA(t) {
    if (void 0 === c(no, this)) {
        d(no, this, "");
        let t = c(nc, this).URL;
        t !== c(nc, this).baseURI &&
            (to(t) ? P('#createUrl: ignore "data:"-URL for performance reasons.') : d(no, this, R(t, "")));
    }
    return `url(${c(no, this)}#${t})`;
}
function ny(t) {
    let e = c(nc, this).createElementNS(ti, "feColorMatrix");
    e.setAttribute("type", "matrix"),
        e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"),
        t.append(e);
}
function n_(t) {
    let e = c(nc, this).createElementNS(ti, "feColorMatrix");
    e.setAttribute("type", "matrix"),
        e.setAttribute(
            "values",
            "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0",
        ),
        t.append(e);
}
function nx(t) {
    let e = c(nc, this).createElementNS(ti, "filter");
    return (
        e.setAttribute("color-interpolation-filters", "sRGB"),
        e.setAttribute("id", t),
        nb.call(r(ng, this)).append(e),
        e
    );
}
function nk(t, e, i) {
    let s = c(nc, this).createElementNS(ti, e);
    s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t.append(s);
}
function nM(t, e, i, s) {
    let a = c(nc, this).createElementNS(ti, "feComponentTransfer");
    s.append(a),
        r(ng, this, nk).call(this, a, "feFuncR", t),
        r(ng, this, nk).call(this, a, "feFuncG", e),
        r(ng, this, nk).call(this, a, "feFuncB", i);
}
function nS(t, e) {
    let i = c(nc, this).createElementNS(ti, "feComponentTransfer");
    e.append(i), r(ng, this, nk).call(this, i, "feFuncA", t);
}
function nC(t) {
    return (nb.call(r(ng, this)).style.color = t), tf(getComputedStyle(nb.call(r(ng, this))).getPropertyValue("color"));
}
var nE = class {
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
    nT = class extends nE {
        async _fetch(t) {
            return new Uint8Array(await ta(t, "arraybuffer"));
        }
    },
    nP = class {
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
    nD = class extends nP {
        async _fetch(t) {
            return new Uint8Array(await ta(t, "arraybuffer"));
        }
    };
async function nI(t) {
    return new Uint8Array(await a.getBuiltinModule("fs").promises.readFile(t));
}
b && P("Please use the `legacy` build in Node.js environments.");
var nL = class extends nr {},
    nR = class extends ni {
        _createCanvas(t, e) {
            return a
                .getBuiltinModule("module")
                .createRequire(
                    "file:///ci/build/discord/discord/node_modules/.pnpm/@incodetech+web@2.0.1_encoding@0.1.13_preact@10.26.4_typescript@6.0.2_vite@8.0.7_@types+node@_ilizizyegld2n2xkphtpuvhr5q/node_modules/@incodetech/web/dist/pdf-BurGZ08w.js",
                )("@napi-rs/canvas")
                .createCanvas(t, e);
        }
    },
    nF = class extends na {
        async _fetch(t) {
            return nI(t);
        }
    },
    nN = class extends nE {
        async _fetch(t) {
            return nI(t);
        }
    },
    nB = class extends nP {
        async _fetch(t) {
            return nI(t);
        }
    },
    nO = "__forcedDependency",
    { floor: nW, ceil: nU } = Math;
function n$(t, e, i, s, a, n) {
    (t[4 * e + 0] = Math.min(t[4 * e + 0], i)),
        (t[4 * e + 1] = Math.min(t[4 * e + 1], s)),
        (t[4 * e + 2] = Math.max(t[4 * e + 2], a)),
        (t[4 * e + 3] = Math.max(t[4 * e + 3], n));
}
var nH = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0],
    nj = new WeakMap(),
    nz = new WeakMap(),
    nG = class {
        constructor(t, e) {
            h(this, nj, void 0), h(this, nz, void 0), d(nj, this, t), d(nz, this, e);
        }
        get length() {
            return c(nj, this).length;
        }
        isEmpty(t) {
            return c(nj, this)[t] === nH;
        }
        minX(t) {
            return c(nz, this)[4 * t + 0] / 256;
        }
        minY(t) {
            return c(nz, this)[4 * t + 1] / 256;
        }
        maxX(t) {
            return (c(nz, this)[4 * t + 2] + 1) / 256;
        }
        maxY(t) {
            return (c(nz, this)[4 * t + 3] + 1) / 256;
        }
    },
    nV = (t, e) => {
        if (!t) return;
        let i = t.get(e);
        return i || ((i = { dependencies: new Set(), isRenderingOperation: !1 }), t.set(e, i)), i;
    },
    nX = new WeakMap(),
    nq = new WeakMap(),
    nY = new WeakMap(),
    nK = new WeakMap(),
    nQ = new WeakMap(),
    nJ = new WeakMap(),
    nZ = new WeakMap(),
    n0 = new WeakMap(),
    n1 = new WeakMap(),
    n2 = new WeakMap(),
    n3 = new WeakMap(),
    n5 = new WeakMap(),
    n4 = new WeakMap(),
    n6 = new WeakMap(),
    n8 = new WeakMap(),
    n7 = new WeakMap(),
    n9 = new WeakMap(),
    rt = new WeakSet(),
    re = class {
        constructor(t, e, i = !1) {
            l(this, rt),
                h(this, nX, { __proto__: null }),
                h(this, nq, { __proto__: null, transform: [], moveText: [], sameLineText: [], [nO]: [] }),
                h(this, nY, new Map()),
                h(this, nK, []),
                h(this, nQ, []),
                h(this, nJ, [[1, 0, 0, 1, 0, 0]]),
                h(this, nZ, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]),
                h(this, n0, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0])),
                h(this, n1, -1),
                h(this, n2, new Set()),
                h(this, n3, new Map()),
                h(this, n5, new Map()),
                h(this, n4, void 0),
                h(this, n6, void 0),
                h(this, n8, void 0),
                h(this, n7, void 0),
                h(this, n9, void 0),
                d(n4, this, t.width),
                d(n6, this, t.height),
                r(rt, this, ri).call(this, e),
                i && d(n9, this, new Map());
        }
        growOperationsCount(t) {
            t >= c(n7, this).length && r(rt, this, ri).call(this, t, c(n7, this));
        }
        save(t) {
            return (
                d(nX, this, { __proto__: c(nX, this) }),
                d(nq, this, {
                    __proto__: c(nq, this),
                    transform: { __proto__: c(nq, this).transform },
                    moveText: { __proto__: c(nq, this).moveText },
                    sameLineText: { __proto__: c(nq, this).sameLineText },
                    [nO]: { __proto__: c(nq, this)[nO] },
                }),
                d(nZ, this, { __proto__: c(nZ, this) }),
                c(nK, this).push(t),
                this
            );
        }
        restore(t) {
            let e = Object.getPrototypeOf(c(nX, this));
            if (null === e) return this;
            d(nX, this, e),
                d(nq, this, Object.getPrototypeOf(c(nq, this))),
                d(nZ, this, Object.getPrototypeOf(c(nZ, this)));
            let i = c(nK, this).pop();
            return void 0 !== i && (nV(c(n9, this), t)?.dependencies.add(i), (c(n7, this)[t] = c(n7, this)[i])), this;
        }
        recordOpenMarker(t) {
            return c(nK, this).push(t), this;
        }
        getOpenMarker() {
            return 0 === c(nK, this).length ? null : c(nK, this).at(-1);
        }
        recordCloseMarker(t) {
            let e = c(nK, this).pop();
            return void 0 !== e && (nV(c(n9, this), t)?.dependencies.add(e), (c(n7, this)[t] = c(n7, this)[e])), this;
        }
        beginMarkedContent(t) {
            return c(nQ, this).push(t), this;
        }
        endMarkedContent(t) {
            let e = c(nQ, this).pop();
            return void 0 !== e && (nV(c(n9, this), t)?.dependencies.add(e), (c(n7, this)[t] = c(n7, this)[e])), this;
        }
        pushBaseTransform(t) {
            return c(nJ, this).push(V.multiplyByDOMMatrix(c(nJ, this).at(-1), t.getTransform())), this;
        }
        popBaseTransform() {
            return c(nJ, this).length > 1 && c(nJ, this).pop(), this;
        }
        recordSimpleData(t, e) {
            return (c(nX, this)[t] = e), this;
        }
        recordIncrementalData(t, e) {
            return c(nq, this)[t].push(e), this;
        }
        resetIncrementalData(t, e) {
            return (c(nq, this)[t].length = 0), this;
        }
        recordNamedData(t, e) {
            return c(nY, this).set(t, e), this;
        }
        recordSimpleDataFromNamed(t, e, i) {
            c(nX, this)[t] = c(nY, this).get(e) ?? i;
        }
        recordFutureForcedDependency(t, e) {
            return this.recordIncrementalData(nO, e), this;
        }
        inheritSimpleDataAsFutureForcedDependencies(t) {
            for (let e of t) e in c(nX, this) && this.recordFutureForcedDependency(e, c(nX, this)[e]);
            return this;
        }
        inheritPendingDependenciesAsFutureForcedDependencies() {
            for (let t of c(n2, this)) this.recordFutureForcedDependency(nO, t);
            return this;
        }
        resetBBox(t) {
            return (
                c(n1, this) !== t &&
                    (d(n1, this, t),
                    (c(n0, this)[0] = 1 / 0),
                    (c(n0, this)[1] = 1 / 0),
                    (c(n0, this)[2] = -1 / 0),
                    (c(n0, this)[3] = -1 / 0)),
                this
            );
        }
        recordClipBox(t, e, i, s, a, n) {
            let r = V.multiplyByDOMMatrix(c(nJ, this).at(-1), e.getTransform()),
                o = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            V.axialAlignedBoundingBox([i, a, s, n], r, o);
            let l = V.intersect(c(nZ, this), o);
            return (
                l
                    ? ((c(nZ, this)[0] = l[0]),
                      (c(nZ, this)[1] = l[1]),
                      (c(nZ, this)[2] = l[2]),
                      (c(nZ, this)[3] = l[3]))
                    : ((c(nZ, this)[0] = c(nZ, this)[1] = 1 / 0), (c(nZ, this)[2] = c(nZ, this)[3] = -1 / 0)),
                this
            );
        }
        recordBBox(t, e, i, s, a, n) {
            let r = c(nZ, this);
            if (r[0] === 1 / 0) return this;
            let o = V.multiplyByDOMMatrix(c(nJ, this).at(-1), e.getTransform());
            if (r[0] === -1 / 0) return V.axialAlignedBoundingBox([i, a, s, n], o, c(n0, this)), this;
            let l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            return (
                V.axialAlignedBoundingBox([i, a, s, n], o, l),
                (c(n0, this)[0] = Math.min(c(n0, this)[0], Math.max(l[0], r[0]))),
                (c(n0, this)[1] = Math.min(c(n0, this)[1], Math.max(l[1], r[1]))),
                (c(n0, this)[2] = Math.max(c(n0, this)[2], Math.min(l[2], r[2]))),
                (c(n0, this)[3] = Math.max(c(n0, this)[3], Math.min(l[3], r[3]))),
                this
            );
        }
        recordCharacterBBox(t, e, i, s = 1, a = 0, n = 0, r) {
            let o = i.bbox,
                l,
                h;
            if (
                o &&
                !1 !== (l = o[2] !== o[0] && o[3] !== o[1] && c(n5, this).get(i)) &&
                ((h = [0, 0, 0, 0]),
                V.axialAlignedBoundingBox(o, i.fontMatrix, h),
                (1 !== s || 0 !== a || 0 !== n) && V.scaleMinMax([s, 0, 0, -s, a, n], h),
                l)
            )
                return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
            if (!r) return this.recordFullPageBBox(t);
            let d = r();
            return o &&
                h &&
                void 0 === l &&
                ((l =
                    h[0] <= a - d.actualBoundingBoxLeft &&
                    h[2] >= a + d.actualBoundingBoxRight &&
                    h[1] <= n - d.actualBoundingBoxAscent &&
                    h[3] >= n + d.actualBoundingBoxDescent),
                c(n5, this).set(i, l),
                l)
                ? this.recordBBox(t, e, h[0], h[2], h[1], h[3])
                : this.recordBBox(
                      t,
                      e,
                      a - d.actualBoundingBoxLeft,
                      a + d.actualBoundingBoxRight,
                      n - d.actualBoundingBoxAscent,
                      n + d.actualBoundingBoxDescent,
                  );
        }
        recordFullPageBBox(t) {
            return (
                (c(n0, this)[0] = Math.max(0, c(nZ, this)[0])),
                (c(n0, this)[1] = Math.max(0, c(nZ, this)[1])),
                (c(n0, this)[2] = Math.min(c(n4, this), c(nZ, this)[2])),
                (c(n0, this)[3] = Math.min(c(n6, this), c(nZ, this)[3])),
                this
            );
        }
        getSimpleIndex(t) {
            return c(nX, this)[t];
        }
        recordDependencies(t, e) {
            let i = c(n2, this),
                s = c(nX, this),
                a = c(nq, this);
            for (let t of e) t in c(nX, this) ? i.add(s[t]) : t in a && a[t].forEach(i.add, i);
            return this;
        }
        recordNamedDependency(t, e) {
            return c(nY, this).has(e) && c(n2, this).add(c(nY, this).get(e)), this;
        }
        recordOperation(t, e = !1) {
            if ((this.recordDependencies(t, [nO]), c(n9, this))) {
                let e = nV(c(n9, this), t),
                    { dependencies: i } = e;
                c(n2, this).forEach(i.add, i),
                    c(nK, this).forEach(i.add, i),
                    c(nQ, this).forEach(i.add, i),
                    i.delete(t),
                    (e.isRenderingOperation = !0);
            }
            if (c(n1, this) === t) {
                let i = nW((256 * c(n0, this)[0]) / c(n4, this)),
                    s = nW((256 * c(n0, this)[1]) / c(n6, this)),
                    a = nU((256 * c(n0, this)[2]) / c(n4, this)),
                    n = nU((256 * c(n0, this)[3]) / c(n6, this));
                for (let e of (n$(c(n8, this), t, i, s, a, n), c(n2, this))) e !== t && n$(c(n8, this), e, i, s, a, n);
                for (let e of c(nK, this)) e !== t && n$(c(n8, this), e, i, s, a, n);
                for (let e of c(nQ, this)) e !== t && n$(c(n8, this), e, i, s, a, n);
                e || (c(n2, this).clear(), d(n1, this, -1));
            }
            return this;
        }
        recordShowTextOperation(t, e = !1) {
            let i = Array.from(c(n2, this));
            for (let s of (this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t), i))
                this.recordIncrementalData("sameLineText", s);
            return this;
        }
        bboxToClipBoxDropOperation(t, e = !1) {
            return (
                c(n1, this) === t &&
                    (d(n1, this, -1),
                    (c(nZ, this)[0] = Math.max(c(nZ, this)[0], c(n0, this)[0])),
                    (c(nZ, this)[1] = Math.max(c(nZ, this)[1], c(n0, this)[1])),
                    (c(nZ, this)[2] = Math.min(c(nZ, this)[2], c(n0, this)[2])),
                    (c(nZ, this)[3] = Math.min(c(nZ, this)[3], c(n0, this)[3])),
                    e || c(n2, this).clear()),
                this
            );
        }
        _takePendingDependencies() {
            let t = c(n2, this);
            return d(n2, this, new Set()), t;
        }
        _extractOperation(t) {
            let e = c(n3, this).get(t);
            return c(n3, this).delete(t), e;
        }
        _pushPendingDependencies(t) {
            for (let e of t) c(n2, this).add(e);
        }
        take() {
            return c(n5, this).clear(), new nG(c(n7, this), c(n8, this));
        }
        takeDebugMetadata() {
            return c(n9, this);
        }
    };
function ri(t, e) {
    let i = new ArrayBuffer(4 * t);
    d(n8, this, new Uint8ClampedArray(i)),
        d(n7, this, new Uint32Array(i)),
        e && e.length > 0 ? (c(n7, this).set(e), c(n7, this).fill(nH, e.length)) : c(n7, this).fill(nH);
}
var rs = new WeakMap(),
    ra = new WeakMap(),
    rn = new WeakMap(),
    rr = new WeakMap(),
    ro = new WeakMap(),
    rl = class t {
        constructor(e, i, s) {
            if (
                (h(this, rs, void 0),
                h(this, ra, void 0),
                h(this, rn, void 0),
                h(this, rr, 0),
                h(this, ro, 0),
                e instanceof t && c(rn, e) === !!s)
            )
                return e;
            d(rs, this, e), d(ra, this, i), d(rn, this, !!s);
        }
        growOperationsCount() {
            throw Error("Unreachable");
        }
        save(t) {
            var e;
            return d(ro, this, ((e = c(ro, this)), ++e)), c(rs, this).save(c(ra, this)), this;
        }
        restore(t) {
            if (c(ro, this) > 0) {
                var e;
                c(rs, this).restore(c(ra, this)), d(ro, this, ((e = c(ro, this)), --e));
            }
            return this;
        }
        recordOpenMarker(t) {
            var e;
            return d(rr, this, ((e = c(rr, this)), ++e)), this;
        }
        getOpenMarker() {
            return c(rr, this) > 0 ? c(ra, this) : c(rs, this).getOpenMarker();
        }
        recordCloseMarker(t) {
            var e;
            return d(rr, this, ((e = c(rr, this)), --e)), this;
        }
        beginMarkedContent(t) {
            return this;
        }
        endMarkedContent(t) {
            return this;
        }
        pushBaseTransform(t) {
            return c(rs, this).pushBaseTransform(t), this;
        }
        popBaseTransform() {
            return c(rs, this).popBaseTransform(), this;
        }
        recordSimpleData(t, e) {
            return c(rs, this).recordSimpleData(t, c(ra, this)), this;
        }
        recordIncrementalData(t, e) {
            return c(rs, this).recordIncrementalData(t, c(ra, this)), this;
        }
        resetIncrementalData(t, e) {
            return c(rs, this).resetIncrementalData(t, c(ra, this)), this;
        }
        recordNamedData(t, e) {
            return this;
        }
        recordSimpleDataFromNamed(t, e, i) {
            return c(rs, this).recordSimpleDataFromNamed(t, e, c(ra, this)), this;
        }
        recordFutureForcedDependency(t, e) {
            return c(rs, this).recordFutureForcedDependency(t, c(ra, this)), this;
        }
        inheritSimpleDataAsFutureForcedDependencies(t) {
            return c(rs, this).inheritSimpleDataAsFutureForcedDependencies(t), this;
        }
        inheritPendingDependenciesAsFutureForcedDependencies() {
            return c(rs, this).inheritPendingDependenciesAsFutureForcedDependencies(), this;
        }
        resetBBox(t) {
            return c(rn, this) || c(rs, this).resetBBox(c(ra, this)), this;
        }
        recordClipBox(t, e, i, s, a, n) {
            return c(rn, this) || c(rs, this).recordClipBox(c(ra, this), e, i, s, a, n), this;
        }
        recordBBox(t, e, i, s, a, n) {
            return c(rn, this) || c(rs, this).recordBBox(c(ra, this), e, i, s, a, n), this;
        }
        recordCharacterBBox(t, e, i, s, a, n, r) {
            return c(rn, this) || c(rs, this).recordCharacterBBox(c(ra, this), e, i, s, a, n, r), this;
        }
        recordFullPageBBox(t) {
            return c(rn, this) || c(rs, this).recordFullPageBBox(c(ra, this)), this;
        }
        getSimpleIndex(t) {
            return c(rs, this).getSimpleIndex(t);
        }
        recordDependencies(t, e) {
            return c(rs, this).recordDependencies(c(ra, this), e), this;
        }
        recordNamedDependency(t, e) {
            return c(rs, this).recordNamedDependency(c(ra, this), e), this;
        }
        recordOperation(t) {
            return c(rs, this).recordOperation(c(ra, this), !0), this;
        }
        recordShowTextOperation(t) {
            return c(rs, this).recordShowTextOperation(c(ra, this), !0), this;
        }
        bboxToClipBoxDropOperation(t) {
            return c(rn, this) || c(rs, this).bboxToClipBoxDropOperation(c(ra, this), !0), this;
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
        a = new Path2D();
    a.rect(e[0], e[1], i, s), t.clip(a);
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
                a = this._p1;
            if (
                (e && ((s = s.slice()), (a = a.slice()), V.applyTransform(s, e), V.applyTransform(a, e)),
                "axial" === this._type)
            )
                i = t.createLinearGradient(s[0], s[1], a[0], a[1]);
            else if ("radial" === this._type) {
                let n = this._r0,
                    r = this._r1;
                if (e) {
                    let t = new Float32Array(2);
                    V.singularValueDecompose2dScale(e, t), (n *= t[0]), (r *= t[0]);
                }
                i = t.createRadialGradient(s[0], s[1], n, a[0], a[1], r);
            }
            for (let t of this._colorStops) i.addColorStop(t[0], t[1]);
            return i;
        }
        getPattern(t, e, i, s) {
            let a;
            if (s === rw || s === rm) {
                if (this.isOriginBased()) {
                    let s = V.transform(i, e.baseTransform);
                    this.matrix && (s = V.transform(s, this.matrix));
                    let a = Math.hypot(s[0], s[1]),
                        n = Math.hypot(s[2], s[3]);
                    if (0.001 > Math.abs((s[0] * s[2] + s[1] * s[3]) / (a * n))) {
                        if (!this.isRadial()) return this._createGradient(t, s);
                        else if (0.001 > Math.abs(a - n)) return this._createGradient(t, s);
                    }
                }
                let n = e.current.getClippedPathBoundingBox(s, tm(t)) || [0, 0, 0, 0],
                    r = Math.ceil(n[2] - n[0]) || 1,
                    o = Math.ceil(n[3] - n[1]) || 1,
                    l = e.cachedCanvases.getCanvas("pattern", r, o),
                    h = l.context;
                h.clearRect(0, 0, h.canvas.width, h.canvas.height),
                    h.beginPath(),
                    h.rect(0, 0, h.canvas.width, h.canvas.height),
                    h.translate(-n[0], -n[1]),
                    (i = V.transform(i, [1, 0, 0, 1, n[0], n[1]])),
                    h.transform(...e.baseTransform),
                    this.matrix && h.transform(...this.matrix),
                    rv(h, this._bbox),
                    (h.fillStyle = this._createGradient(h)),
                    h.fill(),
                    (a = t.createPattern(l.canvas, "no-repeat"));
                let d = new DOMMatrix(i);
                a.setTransform(d);
            } else rv(t, this._bbox), (a = this._createGradient(t));
            return a;
        }
    };
function r_(t, e, i, s, a, n, r, o) {
    let l = e.coords,
        h = e.colors,
        d = t.data,
        c = 4 * t.width,
        u;
    l[i + 1] > l[s + 1] && ((u = i), (i = s), (s = u), (u = n), (n = r), (r = u)),
        l[s + 1] > l[a + 1] && ((u = s), (s = a), (a = u), (u = r), (r = o), (o = u)),
        l[i + 1] > l[s + 1] && ((u = i), (i = s), (s = u), (u = n), (n = r), (r = u));
    let p = (l[i] + e.offsetX) * e.scaleX,
        g = (l[i + 1] + e.offsetY) * e.scaleY,
        f = (l[s] + e.offsetX) * e.scaleX,
        m = (l[s + 1] + e.offsetY) * e.scaleY,
        w = (l[a] + e.offsetX) * e.scaleX,
        b = (l[a + 1] + e.offsetY) * e.scaleY;
    if (g >= b) return;
    let v = h[n],
        A = h[n + 1],
        y = h[n + 2],
        _ = h[r],
        x = h[r + 1],
        k = h[r + 2],
        M = h[o],
        S = h[o + 1],
        C = h[o + 2],
        E = Math.round(g),
        T = Math.round(b),
        P,
        D,
        I,
        L,
        R,
        F,
        N,
        B;
    for (let t = E; t <= T; t++) {
        let e;
        if (t < m) {
            let e = t < g ? 0 : (g - t) / (g - m);
            (P = p - (p - f) * e), (D = v - (v - _) * e), (I = A - (A - x) * e), (L = y - (y - k) * e);
        } else {
            let e;
            (P = f - (f - w) * (e = t > b ? 1 : m === b ? 0 : (m - t) / (m - b))),
                (D = _ - (_ - M) * e),
                (I = x - (x - S) * e),
                (L = k - (k - C) * e);
        }
        (R = p - (p - w) * (e = t < g ? 0 : t > b ? 1 : (g - t) / (g - b))),
            (F = v - (v - M) * e),
            (N = A - (A - S) * e),
            (B = y - (y - C) * e);
        let i = Math.round(Math.min(P, R)),
            s = Math.round(Math.max(P, R)),
            a = c * t + 4 * i;
        for (let t = i; t <= s; t++)
            (e = (P - t) / (P - R)) < 0 ? (e = 0) : e > 1 && (e = 1),
                (d[a++] = (D - (D - F) * e) | 0),
                (d[a++] = (I - (I - N) * e) | 0),
                (d[a++] = (L - (L - B) * e) | 0),
                (d[a++] = 255);
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
                a = Math.floor(this._bounds[1]),
                n = Math.ceil(this._bounds[2]) - s,
                r = Math.ceil(this._bounds[3]) - a,
                o = Math.min(Math.ceil(Math.abs(n * t[0] * 1.1)), 3e3),
                l = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3),
                h = n / o,
                d = r / l,
                c = {
                    coords: this._coords,
                    colors: this._colors,
                    offsetX: -s,
                    offsetY: -a,
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
                    let s = e.coords,
                        a = e.colors,
                        n,
                        r;
                    switch (e.type) {
                        case 2:
                            let o = e.verticesPerRow,
                                l = Math.floor(s.length / o) - 1,
                                h = o - 1;
                            for (n = 0; n < l; n++) {
                                let e = n * o;
                                for (let n = 0; n < h; n++, e++)
                                    r_(t, i, s[e], s[e + 1], s[e + o], a[e], a[e + 1], a[e + o]),
                                        r_(t, i, s[e + o + 1], s[e + 1], s[e + o], a[e + o + 1], a[e + 1], a[e + o]);
                            }
                            break;
                        case 1:
                            for (n = 0, r = s.length; n < r; n += 3)
                                r_(t, i, s[n], s[n + 1], s[n + 2], a[n], a[n + 1], a[n + 2]);
                            break;
                        default:
                            throw Error("illegal figure");
                    }
                })(m, t, c);
            return (
                f.putImageData(m, 2, 2),
                { canvas: g.canvas, offsetX: s - 2 * h, offsetY: a - 2 * d, scaleX: h, scaleY: d }
            );
        }
        isModifyingCurrentTransform() {
            return !0;
        }
        getPattern(t, e, i, s) {
            rv(t, this._bbox);
            let a = new Float32Array(2);
            if (s === rb) V.singularValueDecompose2dScale(tm(t), a);
            else if (this.matrix) {
                V.singularValueDecompose2dScale(this.matrix, a);
                let [t, i] = a;
                V.singularValueDecompose2dScale(e.baseTransform, a), (a[0] *= t), (a[1] *= i);
            } else V.singularValueDecompose2dScale(e.baseTransform, a);
            let n = this._createMeshCanvas(a, s === rb ? null : this._background, e.cachedCanvases);
            return (
                s !== rb && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)),
                t.translate(n.offsetX, n.offsetY),
                t.scale(n.scaleX, n.scaleY),
                t.createPattern(n.canvas, "no-repeat")
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
            let { bbox: i, operatorList: s, paintType: a, tilingType: n, color: r, canvasGraphicsFactory: o } = this,
                { xstep: l, ystep: h } = this;
            (l = Math.abs(l)), (h = Math.abs(h)), T("TilingType: " + n);
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
            let C = this.getSizeAndScale(y, this.ctx.canvas.width, v),
                E = this.getSizeAndScale(_, this.ctx.canvas.height, A),
                P = t.cachedCanvases.getCanvas("pattern", C.size, E.size),
                D = P.context,
                I = o.createCanvasGraphics(D, e);
            if (
                ((I.groupLevel = t.groupLevel),
                this.setFillAndStrokeStyleToContext(I, a, r),
                D.translate(-C.scale * d, -E.scale * c),
                I.transform(0, C.scale, 0, 0, E.scale, 0, 0),
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
                    a = i.size,
                    n = s.size,
                    r = t.cachedCanvases.getCanvas("pattern-workaround", a, n),
                    o = r.context,
                    u = x ? Math.floor(g / l) : 0,
                    p = k ? Math.floor(f / h) : 0;
                for (let t = 0; t <= u; t++)
                    for (let i = 0; i <= p; i++) o.drawImage(e, a * t, n * i, a, n, 0, 0, a, n);
                return { canvas: r.canvas, scaleX: i.scale, scaleY: s.scale, offsetX: d, offsetY: c };
            }
            return { canvas: P.canvas, scaleX: C.scale, scaleY: E.scale, offsetX: d, offsetY: c };
        }
        getSizeAndScale(e, i, s) {
            let a = Math.max(t.MAX_PATTERN_SIZE, i),
                n = Math.ceil(e * s);
            return n >= a ? (n = a) : (s = n / e), { scale: s, size: n };
        }
        clipBbox(t, e, i, s, a) {
            let n = s - e,
                r = a - i;
            t.ctx.rect(e, i, n, r),
                V.axialAlignedBoundingBox([e, i, s, a], tm(t.ctx), t.current.minMax),
                t.clip(),
                t.endPath();
        }
        setFillAndStrokeStyleToContext(t, e, i) {
            let s = t.ctx,
                a = t.current;
            switch (e) {
                case 1:
                    let { fillStyle: n, strokeStyle: r } = this.ctx;
                    (s.fillStyle = a.fillColor = n), (s.strokeStyle = a.strokeColor = r);
                    break;
                case 2:
                    (s.fillStyle = s.strokeStyle = i), (a.fillColor = a.strokeColor = i);
                    break;
                default:
                    throw new $(`Unsupported paint type: ${e}`);
            }
        }
        isModifyingCurrentTransform() {
            return !1;
        }
        getPattern(t, e, i, s, a) {
            let n = i;
            s !== rb && ((n = V.transform(n, e.baseTransform)), this.matrix && (n = V.transform(n, this.matrix)));
            let r = this.createPatternCanvas(e, a),
                o = new DOMMatrix(n);
            o = (o = o.translate(r.offsetX, r.offsetY)).scale(1 / r.scaleX, 1 / r.scaleY);
            let l = t.createPattern(r.canvas, "repeat");
            return l.setTransform(o), l;
        }
    };
(0, s.t)(rM, "MAX_PATTERN_SIZE", 3e3);
var rS = new DOMMatrix(),
    rC = new Float32Array(2),
    rE = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]),
    rT = class {
        constructor(t) {
            (this.canvasFactory = t), (this.cache = Object.create(null));
        }
        getCanvas(t, e, i) {
            let s;
            return (
                void 0 === this.cache[t]
                    ? ((s = this.canvasFactory.create(e, i)), (this.cache[t] = s))
                    : ((s = this.cache[t]), this.canvasFactory.reset(s, e, i)),
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
function rP(t, e, i, s, a, n, r, o, l, h) {
    let [d, c, u, p, g, f] = tm(t);
    if (0 === c && 0 === u) {
        let m = Math.round(r * d + g),
            w = Math.round(o * p + f),
            b = Math.abs(Math.round((r + l) * d + g) - m) || 1,
            v = Math.abs(Math.round((o + h) * p + f) - w) || 1;
        return (
            t.setTransform(Math.sign(d), 0, 0, Math.sign(p), m, w),
            t.drawImage(e, i, s, a, n, 0, 0, b, v),
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
            t.drawImage(e, i, s, a, n, 0, 0, v, b),
            t.setTransform(d, c, u, p, g, f),
            [v, b]
        );
    }
    return t.drawImage(e, i, s, a, n, r, o, l, h), [Math.hypot(d, c) * l, Math.hypot(u, p) * h];
}
var rD = class {
    constructor(t, e, i) {
        (0, s.t)(this, "alphaIsShape", !1),
            (0, s.t)(this, "fontSize", 0),
            (0, s.t)(this, "fontSizeScale", 1),
            (0, s.t)(this, "textMatrix", null),
            (0, s.t)(this, "textMatrixScale", 1),
            (0, s.t)(this, "fontMatrix", v),
            (0, s.t)(this, "leading", 0),
            (0, s.t)(this, "x", 0),
            (0, s.t)(this, "y", 0),
            (0, s.t)(this, "lineX", 0),
            (0, s.t)(this, "lineY", 0),
            (0, s.t)(this, "charSpacing", 0),
            (0, s.t)(this, "wordSpacing", 0),
            (0, s.t)(this, "textHScale", 1),
            (0, s.t)(this, "textRenderingMode", 0),
            (0, s.t)(this, "textRise", 0),
            (0, s.t)(this, "fillColor", "#000000"),
            (0, s.t)(this, "strokeColor", "#000000"),
            (0, s.t)(this, "patternFill", !1),
            (0, s.t)(this, "patternStroke", !1),
            (0, s.t)(this, "fillAlpha", 1),
            (0, s.t)(this, "strokeAlpha", 1),
            (0, s.t)(this, "lineWidth", 1),
            (0, s.t)(this, "activeSMask", null),
            (0, s.t)(this, "transferMaps", "none"),
            i?.(this),
            (this.clipBox = new Float32Array([0, 0, t, e])),
            (this.minMax = rE.slice());
    }
    clone() {
        let t = Object.create(this);
        return (t.clipBox = this.clipBox.slice()), (t.minMax = this.minMax.slice()), t;
    }
    getPathBoundingBox(t = rm, e = null) {
        let i = this.minMax.slice();
        if (t === rw) {
            e || D("Stroke bounding box must include transform."), V.singularValueDecompose2dScale(e, rC);
            let t = (rC[0] * this.lineWidth) / 2,
                s = (rC[1] * this.lineWidth) / 2;
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
        this.clipBox.set(t, 0), this.minMax.set(rE, 0);
    }
    getClippedPathBoundingBox(t = rm, e = null) {
        return V.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
};
function rI(t, e) {
    if (e instanceof ImageData) return void t.putImageData(e, 0, 0);
    let i = e.height,
        s = e.width,
        a = i % 16,
        n = (i - a) / 16,
        r = 0 === a ? n : n + 1,
        o = t.createImageData(s, 16),
        l = 0,
        h,
        d = e.data,
        c = o.data,
        u,
        p,
        g,
        f;
    if (e.kind === k.GRAYSCALE_1BPP) {
        let e = d.byteLength,
            i = new Uint32Array(c.buffer, 0, c.byteLength >> 2),
            f = i.length,
            m = (s + 7) >> 3,
            w = z.isLittleEndian ? 0xff000000 : 255;
        for (u = 0; u < r; u++) {
            for (g = u < n ? 16 : a, h = 0, p = 0; p < g; p++) {
                let t = e - l,
                    a = 0,
                    n = t > m ? s : 8 * t - 7,
                    r = -8 & n,
                    o = 0,
                    c = 0;
                for (; a < r; a += 8)
                    (c = d[l++]),
                        (i[h++] = 128 & c ? 0xffffffff : w),
                        (i[h++] = 64 & c ? 0xffffffff : w),
                        (i[h++] = 32 & c ? 0xffffffff : w),
                        (i[h++] = 16 & c ? 0xffffffff : w),
                        (i[h++] = 8 & c ? 0xffffffff : w),
                        (i[h++] = 4 & c ? 0xffffffff : w),
                        (i[h++] = 2 & c ? 0xffffffff : w),
                        (i[h++] = 1 & c ? 0xffffffff : w);
                for (; a < n; a++) 0 === o && ((c = d[l++]), (o = 128)), (i[h++] = c & o ? 0xffffffff : w), (o >>= 1);
            }
            for (; h < f; ) i[h++] = 0;
            t.putImageData(o, 0, 16 * u);
        }
    } else if (e.kind === k.RGBA_32BPP) {
        for (p = 0, f = 16 * s * 4, u = 0; u < n; u++)
            c.set(d.subarray(l, l + f)), (l += f), t.putImageData(o, 0, p), (p += 16);
        u < r && ((f = s * a * 4), c.set(d.subarray(l, l + f)), t.putImageData(o, 0, p));
    } else if (e.kind === k.RGB_24BPP)
        for (f = s * (g = 16), u = 0; u < r; u++) {
            for (u >= n && (f = s * (g = a)), h = 0, p = f; p--; )
                (c[h++] = d[l++]), (c[h++] = d[l++]), (c[h++] = d[l++]), (c[h++] = 255);
            t.putImageData(o, 0, 16 * u);
        }
    else throw Error(`bad image kind: ${e.kind}`);
}
function rL(t, e) {
    if (e.bitmap) return void t.drawImage(e.bitmap, 0, 0);
    let i = e.height,
        s = e.width,
        a = i % 16,
        n = (i - a) / 16,
        r = 0 === a ? n : n + 1,
        o = t.createImageData(s, 16),
        l = 0,
        h = e.data,
        d = o.data;
    for (let e = 0; e < r; e++) {
        let i = e < n ? 16 : a;
        ({ srcPos: l } = (function ({
            src: t,
            srcPos: e = 0,
            dest: i,
            width: s,
            height: a,
            nonBlackColor: n = 0xffffffff,
            inverseDecode: r = !1,
        }) {
            let o = z.isLittleEndian ? 0xff000000 : 255,
                [l, h] = r ? [n, o] : [o, n],
                d = s >> 3,
                c = 7 & s,
                u = t.length;
            i = new Uint32Array(i.buffer);
            let p = 0;
            for (let s = 0; s < a; s++) {
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
    V.singularValueDecompose2dScale(t, rC);
    let i = Math.fround(tv.pixelRatio * ts.PDF_TO_CSS_UNITS);
    return rC[0] <= i && rC[1] <= i;
}
var rB = ["butt", "round", "square"],
    rO = ["miter", "round", "bevel"],
    rW = {},
    rU = {},
    r$ = new WeakSet(),
    rH = class t {
        constructor(t, e, i, s, a, { optionalContentConfig: n, markedContentStack: r = null }, o, h, d) {
            l(this, r$),
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
                (this.filterFactory = a),
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
                (this.optionalContentConfig = n),
                (this.cachedCanvases = new rT(this.canvasFactory)),
                (this.cachedPatterns = new Map()),
                (this.annotationCanvasMap = o),
                (this.viewportScale = 1),
                (this.outputScaleX = 1),
                (this.outputScaleY = 1),
                (this.pageColors = h),
                (this._cachedScaleForStroking = [-1, 0]),
                (this._cachedGetSinglePixelWidth = null),
                (this._cachedBitmapsMap = new Map()),
                (this.dependencyTracker = d ?? null);
        }
        getObject(t, e, i = null) {
            return "string" == typeof e
                ? (this.dependencyTracker?.recordNamedDependency(t, e),
                  e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e))
                : i;
        }
        beginDrawing({ transform: t, viewport: e, transparency: i = !1, background: s = null }) {
            let a = this.ctx.canvas.width,
                n = this.ctx.canvas.height,
                r = this.ctx.fillStyle;
            if (((this.ctx.fillStyle = s || "#ffffff"), this.ctx.fillRect(0, 0, a, n), (this.ctx.fillStyle = r), i)) {
                let t = this.cachedCanvases.getCanvas("transparent", a, n);
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
        executeOperatorList(t, e, i, s, a) {
            let n = t.argsArray,
                r = t.fnArray,
                o = e || 0,
                l = n.length;
            if (l === o) return o;
            let h = l - o > 10 && "function" == typeof i,
                d = h ? Date.now() + 15 : 0,
                c = 0,
                u = this.commonObjs,
                p = this.objs,
                g,
                f;
            for (;;) {
                if (void 0 !== s && o === s.nextBreakPoint) return s.breakIt(o, i), o;
                if (!a || a(o))
                    if (((g = r[o]), (f = n[o] ?? null), g !== C.dependency))
                        null === f ? this[g](o) : this[g](o, ...f);
                    else
                        for (let t of f) {
                            this.dependencyTracker?.recordNamedData(t, o);
                            let e = t.startsWith("g_") ? u : p;
                            if (!e.has(t)) return e.get(t, i), o;
                        }
                if (++o === l) return o;
                if (h && ++c > 10) {
                    if (Date.now() > d) return i(), o;
                    c = 0;
                }
            }
        }
        endDrawing() {
            for (let t of (r(r$, this, rj).call(this),
            this.cachedCanvases.clear(),
            this.cachedPatterns.clear(),
            this._cachedBitmapsMap.values())) {
                for (let e of t.values())
                    "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
                t.clear();
            }
            this._cachedBitmapsMap.clear(), r(r$, this, rz).call(this);
        }
        _scaleImage(t, e) {
            let i = t.width ?? t.displayWidth,
                s = t.height ?? t.displayHeight,
                a = Math.max(Math.hypot(e[0], e[1]), 1),
                n = Math.max(Math.hypot(e[2], e[3]), 1),
                r = i,
                o = s,
                l = "prescale1",
                h,
                d;
            for (; (a > 2 && r > 1) || (n > 2 && o > 1); ) {
                let e = r,
                    i = o;
                a > 2 && r > 1 && ((e = r >= 16384 ? Math.floor(r / 2) - 1 || 1 : Math.ceil(r / 2)), (a /= r / e)),
                    n > 2 && o > 1 && ((i = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o) / 2), (n /= o / i)),
                    (d = (h = this.cachedCanvases.getCanvas(l, e, i)).context).clearRect(0, 0, e, i),
                    d.drawImage(t, 0, 0, r, o, 0, 0, e, i),
                    (t = h.canvas),
                    (r = e),
                    (o = i),
                    (l = "prescale1" === l ? "prescale2" : "prescale1");
            }
            return { img: t, paintWidth: r, paintHeight: o };
        }
        _createMaskCanvas(t, e) {
            let i = this.ctx,
                { width: s, height: a } = e,
                n = this.current.fillColor,
                r = this.current.patternFill,
                o = tm(i),
                l,
                h,
                d,
                c;
            if ((e.bitmap || e.data) && e.count > 1) {
                let i = e.bitmap || e.data.buffer;
                (h = JSON.stringify(r ? o : [o.slice(0, 4), n])),
                    (l = this._cachedBitmapsMap.get(i)) || ((l = new Map()), this._cachedBitmapsMap.set(i, l));
                let s = l.get(h);
                if (s && !r) {
                    let e = Math.round(Math.min(o[0], o[2]) + o[4]),
                        i = Math.round(Math.min(o[1], o[3]) + o[5]);
                    return this.dependencyTracker?.recordDependencies(t, rf), { canvas: s, offsetX: e, offsetY: i };
                }
                d = s;
            }
            d || rL((c = this.cachedCanvases.getCanvas("maskCanvas", s, a)).context, e);
            let u = V.transform(o, [1 / s, 0, 0, -1 / a, 0, 0]);
            u = V.transform(u, [1, 0, 0, 1, 0, -a]);
            let p = rE.slice();
            V.axialAlignedBoundingBox([0, 0, s, a], u, p);
            let [g, f, m, w] = p,
                b = Math.round(m - g) || 1,
                v = Math.round(w - f) || 1,
                A = this.cachedCanvases.getCanvas("fillCanvas", b, v),
                y = A.context;
            y.translate(-g, -f),
                y.transform(...u),
                d || ((d = (d = this._scaleImage(c.canvas, tw(y))).img), l && r && l.set(h, d)),
                (y.imageSmoothingEnabled = rN(tm(y), e.interpolate)),
                rP(y, d, 0, 0, d.width, d.height, 0, 0, s, a),
                (y.globalCompositeOperation = "source-in");
            let _ = V.transform(tw(y), [1, 0, 0, 1, -g, -f]);
            return (
                (y.fillStyle = r ? n.getPattern(i, this, _, rm, t) : n),
                y.fillRect(0, 0, s, a),
                l && !r && (this.cachedCanvases.delete("fillCanvas"), l.set(h, A.canvas)),
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
                a = this.cachedCanvases.getCanvas(s, e, i);
            this.suspendedCtx = this.ctx;
            let n = (this.ctx = a.context);
            n.setTransform(this.suspendedCtx.getTransform()),
                rR(this.suspendedCtx, n),
                (function (t, e) {
                    if (t._removeMirroring) throw Error("Context is already forwarding operations.");
                    (t.__originalSave = t.save),
                        (t.__originalRestore = t.restore),
                        (t.__originalRotate = t.rotate),
                        (t.__originalScale = t.scale),
                        (t.__originalTranslate = t.translate),
                        (t.__originalTransform = t.transform),
                        (t.__originalSetTransform = t.setTransform),
                        (t.__originalResetTransform = t.resetTransform),
                        (t.__originalClip = t.clip),
                        (t.__originalMoveTo = t.moveTo),
                        (t.__originalLineTo = t.lineTo),
                        (t.__originalBezierCurveTo = t.bezierCurveTo),
                        (t.__originalRect = t.rect),
                        (t.__originalClosePath = t.closePath),
                        (t.__originalBeginPath = t.beginPath),
                        (t._removeMirroring = () => {
                            (t.save = t.__originalSave),
                                (t.restore = t.__originalRestore),
                                (t.rotate = t.__originalRotate),
                                (t.scale = t.__originalScale),
                                (t.translate = t.__originalTranslate),
                                (t.transform = t.__originalTransform),
                                (t.setTransform = t.__originalSetTransform),
                                (t.resetTransform = t.__originalResetTransform),
                                (t.clip = t.__originalClip),
                                (t.moveTo = t.__originalMoveTo),
                                (t.lineTo = t.__originalLineTo),
                                (t.bezierCurveTo = t.__originalBezierCurveTo),
                                (t.rect = t.__originalRect),
                                (t.closePath = t.__originalClosePath),
                                (t.beginPath = t.__originalBeginPath),
                                delete t._removeMirroring;
                        }),
                        (t.save = function () {
                            e.save(), this.__originalSave();
                        }),
                        (t.restore = function () {
                            e.restore(), this.__originalRestore();
                        }),
                        (t.translate = function (t, i) {
                            e.translate(t, i), this.__originalTranslate(t, i);
                        }),
                        (t.scale = function (t, i) {
                            e.scale(t, i), this.__originalScale(t, i);
                        }),
                        (t.transform = function (t, i, s, a, n, r) {
                            e.transform(t, i, s, a, n, r), this.__originalTransform(t, i, s, a, n, r);
                        }),
                        (t.setTransform = function (t, i, s, a, n, r) {
                            e.setTransform(t, i, s, a, n, r), this.__originalSetTransform(t, i, s, a, n, r);
                        }),
                        (t.resetTransform = function () {
                            e.resetTransform(), this.__originalResetTransform();
                        }),
                        (t.rotate = function (t) {
                            e.rotate(t), this.__originalRotate(t);
                        }),
                        (t.clip = function (t) {
                            e.clip(t), this.__originalClip(t);
                        }),
                        (t.moveTo = function (t, i) {
                            e.moveTo(t, i), this.__originalMoveTo(t, i);
                        }),
                        (t.lineTo = function (t, i) {
                            e.lineTo(t, i), this.__originalLineTo(t, i);
                        }),
                        (t.bezierCurveTo = function (t, i, s, a, n, r) {
                            e.bezierCurveTo(t, i, s, a, n, r), this.__originalBezierCurveTo(t, i, s, a, n, r);
                        }),
                        (t.rect = function (t, i, s, a) {
                            e.rect(t, i, s, a), this.__originalRect(t, i, s, a);
                        }),
                        (t.closePath = function () {
                            e.closePath(), this.__originalClosePath();
                        }),
                        (t.beginPath = function () {
                            e.beginPath(), this.__originalBeginPath();
                        });
                })(n, this.suspendedCtx),
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
            let a = s[0],
                n = s[1],
                r = s[2] - a,
                o = s[3] - n;
            0 === r ||
                0 === o ||
                (this.genericComposeSMask(
                    e.context,
                    i,
                    r,
                    o,
                    e.subtype,
                    e.backdrop,
                    e.transferMap,
                    a,
                    n,
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
        genericComposeSMask(t, e, i, s, a, n, r, o, l, h, d) {
            let c = t.canvas,
                u = o - h,
                p = l - d;
            if (n)
                if (u < 0 || p < 0 || u + i > c.width || p + s > c.height) {
                    let t = this.cachedCanvases.getCanvas("maskExtension", i, s),
                        e = t.context;
                    e.drawImage(c, -u, -p),
                        (e.globalCompositeOperation = "destination-atop"),
                        (e.fillStyle = n),
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
                        (t.fillStyle = n),
                        t.fillRect(u, p, i, s),
                        t.restore();
                }
            e.save(),
                (e.globalAlpha = 1),
                e.setTransform(1, 0, 0, 1, 0, 0),
                "Alpha" === a && r
                    ? (e.filter = this.filterFactory.addAlphaFilter(r))
                    : "Luminosity" === a && (e.filter = this.filterFactory.addLuminosityFilter(r));
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
        transform(t, e, i, s, a, n, r) {
            this.dependencyTracker?.recordIncrementalData("transform", t),
                this.ctx.transform(e, i, s, a, n, r),
                (this._cachedScaleForStroking[0] = -1),
                (this._cachedGetSinglePixelWidth = null);
        }
        constructPath(t, e, i, s) {
            let [a] = i;
            if (!s) {
                (a ||= i[0] = new Path2D()), this[e](t, a);
                return;
            }
            if (null !== this.dependencyTracker) {
                let i = e === C.stroke ? this.current.lineWidth / 2 : 0;
                this.dependencyTracker
                    .resetBBox(t)
                    .recordBBox(t, this.ctx, s[0] - i, s[2] + i, s[1] - i, s[3] + i)
                    .recordDependencies(t, ["transform"]);
            }
            a instanceof Path2D || (a = i[0] = tT(a)),
                V.axialAlignedBoundingBox(s, tm(this.ctx), this.current.minMax),
                this[e](t, a),
                (this._pathStartIdx = t);
        }
        closePath(t) {
            this.ctx.closePath();
        }
        stroke(t, e, i = !0) {
            let s = this.ctx,
                a = this.current.strokeColor;
            if (((s.globalAlpha = this.current.strokeAlpha), this.contentVisible))
                if ("object" == typeof a && a?.getPattern) {
                    let i = a.isModifyingCurrentTransform() ? s.getTransform() : null;
                    if ((s.save(), (s.strokeStyle = a.getPattern(s, this, tw(s), rw, t)), i)) {
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
                a = this.current.fillColor,
                n = this.current.patternFill,
                r = !1;
            if (n) {
                let i = a.isModifyingCurrentTransform() ? s.getTransform() : null;
                if (
                    (this.dependencyTracker?.save(t), s.save(), (s.fillStyle = a.getPattern(s, this, tw(s), rm, t)), i)
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
                for (let { transform: i, x: a, y: n, fontSize: r, path: o } of e)
                    o && t.addPath(o, new DOMMatrix(i).preMultiplySelf(s).translate(a, n).scale(r, -r));
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
                a = this.current;
            if (!s) throw Error(`Can't find font for ${e}`);
            if (
                ((a.fontMatrix = s.fontMatrix || v),
                (0 === a.fontMatrix[0] || 0 === a.fontMatrix[3]) && P("Invalid font matrix for font " + e),
                i < 0 ? ((i = -i), (a.fontDirection = -1)) : (a.fontDirection = 1),
                (this.current.font = s),
                (this.current.fontSize = i),
                s.isType3Font)
            )
                return;
            let n = s.loadedName || "sans-serif",
                r = s.systemFontInfo?.css || `"${n}", ${s.fallbackName}`,
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
        paintChar(t, e, i, s, a, n) {
            let o = this.ctx,
                l = this.current,
                h = l.font,
                d = l.textRenderingMode,
                c = l.fontSize / l.fontSizeScale,
                u = 3 & d,
                p = !!(4 & d),
                g = l.patternFill && !h.missingFile,
                f = l.patternStroke && !h.missingFile,
                m;
            if (
                ((h.disableFontFace || p || g || f) && !h.missingFile && (m = h.getPathGenerator(this.commonObjs, e)),
                m && (h.disableFontFace || g || f))
            ) {
                let e;
                if (
                    (o.save(),
                    o.translate(i, s),
                    o.scale(c, -c),
                    this.dependencyTracker?.recordCharacterBBox(t, o, h),
                    0 === u || 2 === u)
                )
                    if (a) {
                        (e = o.getTransform()), o.setTransform(...a);
                        let t = r(r$, this, rG).call(this, m, e, a);
                        o.fill(t);
                    } else o.fill(m);
                if (1 === u || 2 === u)
                    if (n) {
                        (e ||= o.getTransform()), o.setTransform(...n);
                        let { a: t, b: i, c: s, d: a } = e,
                            l = V.inverseTransform(n),
                            h = V.transform([t, i, s, a, 0, 0], l);
                        V.singularValueDecompose2dScale(h, rC),
                            (o.lineWidth *= Math.max(rC[0], rC[1]) / c),
                            o.stroke(r(r$, this, rG).call(this, m, e, n));
                    } else (o.lineWidth /= c), o.stroke(m);
                o.restore();
            } else
                (0 === u || 2 === u) &&
                    (o.fillText(e, i, s),
                    this.dependencyTracker?.recordCharacterBBox(t, o, h, c, i, s, () => o.measureText(e))),
                    (1 === u || 2 === u) &&
                        (this.dependencyTracker &&
                            this.dependencyTracker
                                ?.recordCharacterBBox(t, o, h, c, i, s, () => o.measureText(e))
                                .recordDependencies(t, rh),
                        o.strokeText(e, i, s));
            p &&
                ((this.pendingTextPaths ||= []).push({ transform: tm(o), x: i, y: s, fontSize: c, path: m }),
                this.dependencyTracker?.recordCharacterBBox(t, o, h, c, i, s));
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
            this.dependencyTracker &&
                (this.dependencyTracker.recordDependencies(t, rp).resetBBox(t),
                4 & this.current.textRenderingMode &&
                    this.dependencyTracker
                        .recordFutureForcedDependency("textClip", t)
                        .inheritPendingDependenciesAsFutureForcedDependencies());
            let i = this.current,
                s = i.font;
            if (s.isType3Font) {
                this.showType3Text(t, e), this.dependencyTracker?.recordShowTextOperation(t);
                return;
            }
            let a = i.fontSize;
            if (0 === a) return void this.dependencyTracker?.recordOperation(t);
            let n = this.ctx,
                r = i.fontSizeScale,
                o = i.charSpacing,
                l = i.wordSpacing,
                h = i.fontDirection,
                d = i.textHScale * h,
                c = e.length,
                u = s.vertical,
                p = u ? 1 : -1,
                g = s.defaultVMetrics,
                f = a * i.fontMatrix[0],
                m = 0 === i.textRenderingMode && !s.disableFontFace && !i.patternFill;
            n.save(),
                i.textMatrix && n.transform(...i.textMatrix),
                n.translate(i.x, i.y + i.textRise),
                h > 0 ? n.scale(d, -1) : n.scale(d, 1);
            let w,
                b,
                v = 3 & i.textRenderingMode,
                A = 1 === v || 2 === v;
            if ((0 === v || 2 === v) && i.patternFill) {
                n.save();
                let e = i.fillColor.getPattern(n, this, tw(n), rm, t);
                (w = tm(n)), n.restore(), (n.fillStyle = e);
            }
            if (A && i.patternStroke) {
                n.save();
                let e = i.strokeColor.getPattern(n, this, tw(n), rw, t);
                (b = tm(n)), n.restore(), (n.strokeStyle = e);
            }
            let y = i.lineWidth,
                _ = i.textMatrixScale;
            if (
                (0 === _ || 0 === y ? A && (y = this.getSinglePixelWidth()) : (y /= _),
                1 !== r && (n.scale(r, r), (y /= r)),
                (n.lineWidth = y),
                s.isInvalidPDFjsFont)
            ) {
                let s = [],
                    a = 0;
                for (let t of e) s.push(t.unicode), (a += t.width);
                let r = s.join("");
                if ((n.fillText(r, 0, 0), null !== this.dependencyTracker)) {
                    let e = n.measureText(r);
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
                (i.x += a * f * d), n.restore(), this.compose();
                return;
            }
            let x = 0,
                k;
            for (k = 0; k < c; ++k) {
                let i,
                    d = e[k];
                if ("number" == typeof d) {
                    x += (p * d * a) / 1e3;
                    continue;
                }
                let c = !1,
                    v = (d.isSpace ? l : 0) + o,
                    A = d.fontChar,
                    y = d.accent,
                    _,
                    M,
                    S = d.width;
                if (u) {
                    let t = d.vmetric || g,
                        e = -(d.vmetric ? t[1] : 0.5 * S) * f,
                        i = t[2] * f;
                    (S = t ? -t[0] : S), (_ = e / r), (M = (x + i) / r);
                } else (_ = x / r), (M = 0);
                if (s.remeasure && S > 0) {
                    let t = ((1e3 * (i = n.measureText(A)).width) / a) * r;
                    if (S < t && this.isFontSubpixelAAEnabled) {
                        let e = S / t;
                        (c = !0), n.save(), n.scale(e, 1), (_ /= e);
                    } else S !== t && (_ += (((S - t) / 2e3) * a) / r);
                }
                if (this.contentVisible && (d.isInFont || s.missingFile)) {
                    if (m && !y)
                        n.fillText(A, _, M),
                            this.dependencyTracker?.recordCharacterBBox(
                                t,
                                n,
                                i ? { bbox: null } : s,
                                a / r,
                                _,
                                M,
                                () => i ?? n.measureText(A),
                            );
                    else if ((this.paintChar(t, A, _, M, w, b), y)) {
                        let e = _ + (a * y.offset.x) / r,
                            i = M - (a * y.offset.y) / r;
                        this.paintChar(t, y.fontChar, e, i, w, b);
                    }
                }
                (x += u ? S * f - v * h : S * f + v * h), c && n.restore();
            }
            u ? (i.y -= x) : (i.x += x * d),
                n.restore(),
                this.compose(),
                this.dependencyTracker?.recordShowTextOperation(t);
        }
        showType3Text(t, e) {
            let i = this.ctx,
                s = this.current,
                a = s.font,
                n = s.fontSize,
                r = s.fontDirection,
                o = a.vertical ? 1 : -1,
                l = s.charSpacing,
                h = s.wordSpacing,
                d = s.textHScale * r,
                c = s.fontMatrix || v,
                u = e.length,
                p,
                g,
                f,
                m;
            if (3 === s.textRenderingMode || 0 === n) return;
            (this._cachedScaleForStroking[0] = -1),
                (this._cachedGetSinglePixelWidth = null),
                i.save(),
                s.textMatrix && i.transform(...s.textMatrix),
                i.translate(s.x, s.y + s.textRise),
                i.scale(d, r);
            let w = this.dependencyTracker;
            for (this.dependencyTracker = w ? new rl(w, t) : null, p = 0; p < u; ++p) {
                if ("number" == typeof (g = e[p])) {
                    (m = (o * g * n) / 1e3), this.ctx.translate(m, 0), (s.x += m * d);
                    continue;
                }
                let t = (g.isSpace ? h : 0) + l,
                    r = a.charProcOperatorList[g.operatorListId];
                r
                    ? this.contentVisible &&
                      (this.save(), i.scale(n, n), i.transform(...c), this.executeOperatorList(r), this.restore())
                    : P(`Type3 character "${g.operatorListId}" is not available.`);
                let u = [g.width, 0];
                V.applyTransform(u, c), (f = u[0] * n + t), i.translate(f, 0), (s.x += f * d);
            }
            i.restore(), w && (this.dependencyTracker = w);
        }
        setCharWidth(t, e, i) {}
        setCharWidthAndBounds(t, e, i, s, a, n, r) {
            let o = new Path2D();
            o.rect(s, a, n - s, r - a),
                this.ctx.clip(o),
                this.dependencyTracker?.recordBBox(t, this.ctx, s, n, a, r).recordClipBox(t, this.ctx, s, n, a, r),
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
                    a = rE.slice();
                V.axialAlignedBoundingBox([0, 0, t, e], s, a);
                let [n, r, o, l] = a;
                this.ctx.fillRect(n, r, o - n, l - r);
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
                let [e, s, a, n] = i,
                    r = new Path2D();
                r.rect(e, s, a - e, n - s),
                    this.ctx.clip(r),
                    this.dependencyTracker?.recordClipBox(t, this.ctx, e, a, s, n),
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
            let a = rE.slice();
            V.axialAlignedBoundingBox(e.bbox, tm(i), a);
            let n = [0, 0, i.canvas.width, i.canvas.height],
                r = Math.floor((a = V.intersect(a, n) || [0, 0, 0, 0])[0]),
                o = Math.floor(a[1]),
                l = Math.max(Math.ceil(a[2]) - r, 1),
                h = Math.max(Math.ceil(a[3]) - o, 1);
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
                let s = rE.slice();
                V.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], e, s),
                    this.ctx.drawImage(i.canvas, 0, 0),
                    this.ctx.restore(),
                    this.compose(s);
            }
        }
        beginAnnotation(t, e, i, s, a, n) {
            if (
                (r(r$, this, rj).call(this),
                rF(this.ctx),
                this.ctx.save(),
                this.save(t),
                this.baseTransform && this.ctx.setTransform(...this.baseTransform),
                i)
            ) {
                let a = i[2] - i[0],
                    r = i[3] - i[1];
                if (n && this.annotationCanvasMap) {
                    (s = s.slice()),
                        (s[4] -= i[0]),
                        (s[5] -= i[1]),
                        ((i = i.slice())[0] = i[1] = 0),
                        (i[2] = a),
                        (i[3] = r),
                        V.singularValueDecompose2dScale(tm(this.ctx), rC);
                    let { viewportScale: t } = this,
                        n = Math.ceil(a * this.outputScaleX * t),
                        o = Math.ceil(r * this.outputScaleY * t);
                    this.annotationCanvas = this.canvasFactory.create(n, o);
                    let { canvas: l, context: h } = this.annotationCanvas;
                    this.annotationCanvasMap.set(e, l),
                        (this.annotationCanvas.savedCtx = this.ctx),
                        (this.ctx = h),
                        this.ctx.save(),
                        this.ctx.setTransform(rC[0], 0, 0, -rC[1], 0, r * rC[1]),
                        rF(this.ctx);
                } else {
                    rF(this.ctx), this.endPath(t);
                    let e = new Path2D();
                    e.rect(i[0], i[1], a, r), this.ctx.clip(e);
                }
            }
            (this.current = new rD(this.ctx.canvas.width, this.ctx.canvas.height)),
                this.transform(t, ...s),
                this.transform(t, ...a);
        }
        endAnnotation(t) {
            this.annotationCanvas &&
                (this.ctx.restore(),
                r(r$, this, rz).call(this),
                (this.ctx = this.annotationCanvas.savedCtx),
                delete this.annotationCanvas.savedCtx,
                delete this.annotationCanvas);
        }
        paintImageMaskXObject(t, e) {
            if (!this.contentVisible) return;
            let i = e.count;
            (e = this.getObject(t, e.data, e)).count = i;
            let s = this.ctx,
                a = this._createMaskCanvas(t, e),
                n = a.canvas;
            s.save(),
                s.setTransform(1, 0, 0, 1, 0, 0),
                s.drawImage(n, a.offsetX, a.offsetY),
                this.dependencyTracker
                    ?.resetBBox(t)
                    .recordBBox(t, this.ctx, a.offsetX, a.offsetX + n.width, a.offsetY, a.offsetY + n.height)
                    .recordOperation(t),
                s.restore(),
                this.compose();
        }
        paintImageMaskXObjectRepeat(t, e, i, s = 0, a = 0, n, r) {
            if (!this.contentVisible) return;
            e = this.getObject(t, e.data, e);
            let o = this.ctx;
            o.save();
            let l = tm(o);
            o.transform(i, s, a, n, 0, 0);
            let h = this._createMaskCanvas(t, e);
            o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]), this.dependencyTracker?.resetBBox(t);
            for (let e = 0, d = r.length; e < d; e += 2) {
                let d = V.transform(l, [i, s, a, n, r[e], r[e + 1]]);
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
                a = this.current.patternFill;
            for (let n of (this.dependencyTracker?.resetBBox(t).recordDependencies(t, rf), e)) {
                let { data: e, width: r, height: o, transform: l } = n,
                    h = this.cachedCanvases.getCanvas("maskCanvas", r, o),
                    d = h.context;
                d.save(),
                    rL(d, this.getObject(t, e, n)),
                    (d.globalCompositeOperation = "source-in"),
                    (d.fillStyle = a ? s.getPattern(d, this, tw(i), rm, t) : s),
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
        paintImageXObjectRepeat(t, e, i, s, a) {
            if (!this.contentVisible) return;
            let n = this.getObject(t, e);
            if (!n) return void P("Dependent image isn't ready yet");
            let r = n.width,
                o = n.height,
                l = [];
            for (let t = 0, e = a.length; t < e; t += 2)
                l.push({ transform: [i, 0, 0, s, a[t], a[t + 1]], x: 0, y: 0, w: r, h: o });
            this.paintInlineImageXObjectGroup(t, n, l);
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
                a = this.cachedCanvases.getCanvas("inlineImage", i, s),
                n = a.context;
            return (n.filter = this.current.transferMaps), n.drawImage(e, 0, 0), (n.filter = "none"), a.canvas;
        }
        paintInlineImageXObject(t, e) {
            let i;
            if (!this.contentVisible) return;
            let s = e.width,
                a = e.height,
                n = this.ctx;
            this.save(t);
            let { filter: r } = n;
            if (("none" !== r && "" !== r && (n.filter = "none"), n.scale(1 / s, -1 / a), e.bitmap))
                i = this.applyTransferMapsToBitmap(e);
            else if (("function" == typeof HTMLElement && e instanceof HTMLElement) || !e.data) i = e;
            else {
                let t = this.cachedCanvases.getCanvas("inlineImage", s, a).context;
                rI(t, e), (i = this.applyTransferMapsToCanvas(t));
            }
            let o = this._scaleImage(i, tw(n));
            (n.imageSmoothingEnabled = rN(tm(n), e.interpolate)),
                this.dependencyTracker
                    ?.resetBBox(t)
                    .recordBBox(t, n, 0, s, -a, 0)
                    .recordDependencies(t, rc)
                    .recordOperation(t),
                rP(n, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -a, s, a),
                this.compose(),
                this.restore(t);
        }
        paintInlineImageXObjectGroup(t, e, i) {
            if (!this.contentVisible) return;
            let s = this.ctx,
                a;
            if (e.bitmap) a = e.bitmap;
            else {
                let t = e.width,
                    i = e.height,
                    s = this.cachedCanvases.getCanvas("inlineImage", t, i).context;
                rI(s, e), (a = this.applyTransferMapsToCanvas(s));
            }
            for (let e of (this.dependencyTracker?.resetBBox(t), i))
                s.save(),
                    s.transform(...e.transform),
                    s.scale(1, -1),
                    rP(s, a, e.x, e.y, e.w, e.h, 0, -1, 1, 1),
                    this.dependencyTracker?.recordBBox(t, s, 0, 1, -1, 0),
                    s.restore();
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
            let a = this.ctx;
            this.pendingClip
                ? (s || (this.pendingClip === rU ? a.clip(e, "evenodd") : a.clip(e)),
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
                let { lineWidth: t } = this.current,
                    { a: e, b: i, c: s, d: a } = this.ctx.getTransform(),
                    n,
                    r;
                if (0 === i && 0 === s) {
                    let i = Math.abs(e),
                        s = Math.abs(a);
                    if (i === s)
                        if (0 === t) n = r = 1 / i;
                        else {
                            let e = i * t;
                            n = r = e < 1 ? 1 / e : 1;
                        }
                    else if (0 === t) (n = 1 / i), (r = 1 / s);
                    else {
                        let e = i * t,
                            a = s * t;
                        (n = e < 1 ? 1 / e : 1), (r = a < 1 ? 1 / a : 1);
                    }
                } else {
                    let o = Math.abs(e * a - i * s),
                        l = Math.hypot(e, i),
                        h = Math.hypot(s, a);
                    if (0 === t) (n = h / o), (r = l / o);
                    else {
                        let e = t * o;
                        (n = h > e ? h / e : 1), (r = l > e ? l / e : 1);
                    }
                }
                (this._cachedScaleForStroking[0] = n), (this._cachedScaleForStroking[1] = r);
            }
            return this._cachedScaleForStroking;
        }
        rescaleAndStroke(t, e) {
            let {
                    ctx: i,
                    current: { lineWidth: s },
                } = this,
                [a, n] = this.getScaleForStroking();
            if (a === n) {
                (i.lineWidth = (s || 1) * a), i.stroke(t);
                return;
            }
            let r = i.getLineDash();
            e && i.save(), i.scale(a, n), (rS.a = 1 / a), (rS.d = 1 / n);
            let o = new Path2D();
            if ((o.addPath(t, rS), r.length > 0)) {
                let t = Math.max(a, n);
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
        (this.transparentCanvas &&=
            ((this.ctx = this.compositeCtx),
            this.ctx.save(),
            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
            this.ctx.drawImage(this.transparentCanvas, 0, 0),
            this.ctx.restore(),
            null));
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
for (let t in C) void 0 !== rH.prototype[t] && (rH.prototype[C[t]] = rH.prototype[t]);
var rV = class t {
        static get workerPort() {
            return r(t, this, rX)._;
        }
        static set workerPort(e) {
            if (!("u" > typeof Worker && e instanceof Worker) && null !== e) throw Error("Invalid `workerPort` type.");
            rX._ = r(t, this, e);
        }
        static get workerSrc() {
            return r(t, this, rq)._;
        }
        static set workerSrc(e) {
            if ("string" != typeof e) throw Error("Invalid `workerSrc` type.");
            rq._ = r(t, this, e);
        }
    },
    rX = { _: null },
    rq = { _: "" },
    rY = new WeakMap(),
    rK = new WeakMap();
g = Symbol.iterator;
var rQ = class {
        constructor({ parsedData: t, rawData: e }) {
            h(this, rY, void 0), h(this, rK, void 0), d(rY, this, t), d(rK, this, e);
        }
        getRaw() {
            return c(rK, this);
        }
        get(t) {
            return c(rY, this).get(t) ?? null;
        }
        [g]() {
            return c(rY, this).entries();
        }
    },
    rJ = Symbol("INTERNAL"),
    rZ = new WeakMap(),
    r0 = new WeakMap(),
    r1 = new WeakMap(),
    r2 = new WeakMap(),
    r3 = class {
        constructor(t, { name: e, intent: i, usage: s, rbGroups: a }) {
            h(this, rZ, !1),
                h(this, r0, !1),
                h(this, r1, !1),
                h(this, r2, !0),
                d(rZ, this, !!(2 & t)),
                d(r0, this, !!(4 & t)),
                (this.name = e),
                (this.intent = i),
                (this.usage = s),
                (this.rbGroups = a);
        }
        get visible() {
            if (c(r1, this)) return c(r2, this);
            if (!c(r2, this)) return !1;
            let { print: t, view: e } = this.usage;
            return c(rZ, this) ? e?.viewState !== "OFF" : !c(r0, this) || t?.printState !== "OFF";
        }
        _setVisible(t, e, i = !1) {
            t !== rJ && D("Internal method `_setVisible` called."), d(r1, this, i), d(r2, this, e);
        }
    },
    r5 = new WeakMap(),
    r4 = new WeakMap(),
    r6 = new WeakMap(),
    r8 = new WeakMap(),
    r7 = new WeakSet();
f = Symbol.iterator;
var r9 = class {
    constructor(t, e = 2) {
        if (
            (l(this, r7),
            h(this, r5, null),
            h(this, r4, new Map()),
            h(this, r6, null),
            h(this, r8, null),
            (this.renderingIntent = e),
            (this.name = null),
            (this.creator = null),
            null !== t)
        ) {
            for (let i of ((this.name = t.name), (this.creator = t.creator), d(r8, this, t.order), t.groups))
                c(r4, this).set(i.id, new r3(e, i));
            if ("OFF" === t.baseState) for (let t of c(r4, this).values()) t._setVisible(rJ, !1);
            for (let e of t.on) c(r4, this).get(e)._setVisible(rJ, !0);
            for (let e of t.off) c(r4, this).get(e)._setVisible(rJ, !1);
            d(r6, this, this.getHash());
        }
    }
    isVisible(t) {
        if (0 === c(r4, this).size) return !0;
        if (!t) return T("Optional content group not defined."), !0;
        if ("OCG" === t.type)
            return c(r4, this).has(t.id)
                ? c(r4, this).get(t.id).visible
                : (P(`Optional content group not found: ${t.id}`), !0);
        if ("OCMD" === t.type) {
            if (t.expression) return r(r7, this, ot).call(this, t.expression);
            if (t.policy && "AnyOn" !== t.policy) {
                if ("AllOn" === t.policy) {
                    for (let e of t.ids) {
                        if (!c(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
                        if (!c(r4, this).get(e).visible) return !1;
                    }
                    return !0;
                } else if ("AnyOff" === t.policy) {
                    for (let e of t.ids) {
                        if (!c(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
                        if (!c(r4, this).get(e).visible) return !0;
                    }
                    return !1;
                } else if ("AllOff" === t.policy) {
                    for (let e of t.ids) {
                        if (!c(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
                        if (c(r4, this).get(e).visible) return !1;
                    }
                    return !0;
                }
            } else {
                for (let e of t.ids) {
                    if (!c(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
                    if (c(r4, this).get(e).visible) return !0;
                }
                return !1;
            }
            return P(`Unknown optional content policy ${t.policy}.`), !0;
        }
        return P(`Unknown group type ${t.type}.`), !0;
    }
    setVisibility(t, e = !0, i = !0) {
        let s = c(r4, this).get(t);
        if (!s) return void P(`Optional content group not found: ${t}`);
        if (i && e && s.rbGroups.length)
            for (let e of s.rbGroups) for (let i of e) i !== t && c(r4, this).get(i)?._setVisible(rJ, !1, !0);
        s._setVisible(rJ, !!e, !0), d(r5, this, null);
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
            let t = c(r4, this).get(s);
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
        d(r5, this, null);
    }
    get hasInitialVisibility() {
        return null === c(r6, this) || this.getHash() === c(r6, this);
    }
    getOrder() {
        return c(r4, this).size ? (c(r8, this) ? c(r8, this).slice() : [...c(r4, this).keys()]) : null;
    }
    getGroup(t) {
        return c(r4, this).get(t) || null;
    }
    getHash() {
        if (null !== c(r5, this)) return c(r5, this);
        let t = new s9();
        for (let [e, i] of c(r4, this)) t.update(`${e}:${i.visible}`);
        return d(r5, this, t.hexdigest());
    }
    [f]() {
        return c(r4, this).entries();
    }
};
function ot(t) {
    let e = t.length;
    if (e < 2) return !0;
    let i = t[0];
    for (let s = 1; s < e; s++) {
        let e = t[s],
            a;
        if (Array.isArray(e)) a = r(r7, this, ot).call(this, e);
        else {
            if (!c(r4, this).has(e)) return P(`Optional content group not found: ${e}`), !0;
            a = c(r4, this).get(e).visible;
        }
        switch (i) {
            case "And":
                if (!a) return !1;
                break;
            case "Or":
                if (a) return !0;
                break;
            case "Not":
                return !a;
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
            h(this, oe, null),
                h(this, oi, null),
                (0, s.t)(this, "_fullReader", null),
                (0, s.t)(this, "_rangeReaders", new Set()),
                (0, s.t)(this, "_source", null),
                (this._source = t),
                d(oe, this, e),
                d(oi, this, i);
        }
        get _progressiveDataLength() {
            return this._fullReader?._loaded ?? 0;
        }
        getFullReader() {
            return (
                I(!this._fullReader, "BasePDFStream.getFullReader can only be called once."),
                (this._fullReader = new (c(oe, this))(this))
            );
        }
        getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null;
            let i = new (c(oi, this))(this, t, e);
            return this._rangeReaders.add(i), i;
        }
        cancelAllRequests(t) {
            for (let e of (this._fullReader?.cancel(t), new Set(this._rangeReaders))) e.cancel(t);
        }
    },
    oa = class {
        constructor(t) {
            (0, s.t)(this, "onProgress", null),
                (0, s.t)(this, "_contentLength", 0),
                (0, s.t)(this, "_filename", null),
                (0, s.t)(this, "_headersCapability", Promise.withResolvers()),
                (0, s.t)(this, "_isRangeSupported", !1),
                (0, s.t)(this, "_isStreamingSupported", !1),
                (0, s.t)(this, "_loaded", 0),
                (0, s.t)(this, "_stream", null),
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
    on = class {
        constructor(t, e, i) {
            (0, s.t)(this, "_stream", null), (this._stream = t);
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
            super(t, od, oc), l(this, oo), (0, s.t)(this, "_progressiveDone", !1), (0, s.t)(this, "_queuedChunks", []);
            let { pdfDataRangeTransport: e } = t,
                { initialData: i, progressiveDone: a } = e;
            if (i?.length > 0) {
                let t = or(i);
                this._queuedChunks.push(t);
            }
            (this._progressiveDone = a),
                e.addRangeListener((t, e) => {
                    r(oo, this, oh).call(this, t, e);
                }),
                e.addProgressListener((t, e) => {
                    void 0 !== e && this._fullReader?.onProgress?.({ loaded: t, total: e });
                }),
                e.addProgressiveReadListener((t) => {
                    r(oo, this, oh).call(this, void 0, t);
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
var od = class extends oa {
        constructor(t) {
            super(t),
                (0, s.t)(this, "_done", !1),
                (0, s.t)(this, "_queuedChunks", null),
                (0, s.t)(this, "_requests", []);
            let { pdfDataRangeTransport: e, disableRange: i, disableStream: a } = t._source,
                { length: n, contentDispositionFilename: r } = e;
            for (let e of ((this._queuedChunks = t._queuedChunks || []), this._queuedChunks))
                this._loaded += e.byteLength;
            (this._done = t._progressiveDone),
                (this._contentLength = n),
                (this._isStreamingSupported = !a),
                (this._isRangeSupported = !i),
                tl(r) && (this._filename = r),
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
    oc = class extends on {
        constructor(t, e, i) {
            super(t, e, i),
                (0, s.t)(this, "onDone", null),
                (0, s.t)(this, "_begin", -1),
                (0, s.t)(this, "_done", !1),
                (0, s.t)(this, "_queuedChunk", null),
                (0, s.t)(this, "_requests", []),
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
    let a = { allowRangeRequests: !1, suggestedLength: void 0 },
        n = parseInt(t.get("Content-Length"), 10);
    return (
        !Number.isInteger(n) ||
            ((a.suggestedLength = n), n <= 2 * i) ||
            s ||
            !e ||
            "bytes" !== t.get("Accept-Ranges") ||
            "identity" !== (t.get("Content-Encoding") || "identity") ||
            (a.allowRangeRequests = !0),
        a
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
                return n((t = l((t = o((t = unescape(t)))))));
            }
            if (
                (i = (function (t) {
                    let e = [],
                        i,
                        a = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                    for (; null !== (i = a.exec(t)); ) {
                        let [, t, s, a] = i;
                        if ((t = parseInt(t, 10)) in e) {
                            if (0 === t) break;
                            continue;
                        }
                        e[t] = [s, a];
                    }
                    let n = [];
                    for (let t = 0; t < e.length && t in e; ++t) {
                        let [i, s] = e[t];
                        (s = r(s)), i && ((s = unescape(s)), 0 === t && (s = o(s))), n.push(s);
                    }
                    return n.join("");
                })(t))
            )
                return n(l(i));
            if ((i = s("filename", "i").exec(t))) {
                let t = r((i = i[1]));
                return n((t = l(t)));
            }
            function s(t, e) {
                return RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e);
            }
            function a(t, i) {
                if (t) {
                    if (!/^[\x00-\xFF]+$/.test(i)) return i;
                    try {
                        let s = new TextDecoder(t, { fatal: !0 }),
                            a = j(i);
                        (i = s.decode(a)), (e = !1);
                    } catch {}
                }
                return i;
            }
            function n(t) {
                return e && /[\x80-\xff]/.test(t) && ((t = a("utf-8", t)), e && (t = a("iso-8859-1", t))), t;
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
                return -1 === e ? t : a(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
            }
            function l(t) {
                return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)
                    ? t
                    : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, i, s) {
                          if ("q" === i || "Q" === i)
                              return a(
                                  e,
                                  (s = (s = s.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function (t, e) {
                                      return String.fromCharCode(parseInt(e, 16));
                                  })),
                              );
                          try {
                              s = atob(s);
                          } catch {}
                          return a(e, s);
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
                (0, s.t)(this, "_responseOrigin", null),
                (this.isHttp = /^https?:/i.test(t.url)),
                (this.headers = ou(this.isHttp, t.httpHeaders));
        }
    },
    o_ = class extends oa {
        constructor(t) {
            super(t), (0, s.t)(this, "_abortController", new AbortController()), (0, s.t)(this, "_reader", null);
            let {
                disableRange: e,
                disableStream: i,
                length: a,
                rangeChunkSize: n,
                url: r,
                withCredentials: o,
            } = t._source;
            (this._contentLength = a),
                (this._isStreamingSupported = !i),
                (this._isRangeSupported = !e),
                ob(r, new Headers(t.headers), o, this._abortController)
                    .then((i) => {
                        (t._responseOrigin = op(i.url)), ov(i.status, r), (this._reader = i.body.getReader());
                        let s = i.headers,
                            { allowRangeRequests: a, suggestedLength: o } = og({
                                responseHeaders: s,
                                isHttp: t.isHttp,
                                rangeChunkSize: n,
                                disableRange: e,
                            });
                        (this._isRangeSupported = a),
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
    ox = class extends on {
        constructor(t, e, i) {
            super(t, e, i),
                (0, s.t)(this, "_abortController", new AbortController()),
                (0, s.t)(this, "_readCapability", Promise.withResolvers()),
                (0, s.t)(this, "_reader", null);
            let { url: a, withCredentials: n } = t._source,
                r = new Headers(t.headers);
            r.append("Range", `bytes=${e}-${i - 1}`),
                ob(a, r, n, this._abortController)
                    .then((e) => {
                        ow(op(e.url), t._responseOrigin),
                            ov(e.status, a),
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
                l(this, oM),
                h(this, ok, new WeakMap()),
                (0, s.t)(this, "_responseOrigin", null),
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
            for (let [t, s] of (c(ok, this).set(e, i),
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
                (e.onreadystatechange = r(oM, this, oE).bind(this, e)),
                (e.onprogress = r(oM, this, oC).bind(this, e)),
                e.send(null),
                e
            );
        }
        _abortRequest(t) {
            c(ok, this).has(t) && (c(ok, this).delete(t), t.abort());
        }
        getRangeReader(t, e) {
            let i = super.getRangeReader(t, e);
            return i && (i.onClosed = () => this._rangeReaders.delete(i)), i;
        }
    };
function oC(t, e) {
    c(ok, this).get(t)?.onProgress?.(e);
}
function oE(t, e) {
    var i;
    let s = c(ok, this).get(t);
    if (
        !s ||
        (t.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived),
        4 !== t.readyState) ||
        !c(ok, this).has(t)
    )
        return;
    if ((c(ok, this).delete(t), 0 === t.status && this.isHttp)) return void s.onError(t.status);
    let a = t.status || 200;
    if (!s.validateStatus(a)) return void s.onError(t.status);
    let n = "string" == typeof (i = t.response) ? j(i).buffer : i;
    if (206 === a) {
        let e = t.getResponseHeader("Content-Range");
        /bytes (\d+)-(\d+)\/(\d+)/.test(e)
            ? s.onDone(n)
            : (P('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else n ? s.onDone(n) : s.onError(t.status);
}
var oT = new WeakSet(),
    oP = class extends oa {
        constructor(t) {
            super(t),
                l(this, oT),
                (0, s.t)(this, "_cachedChunks", []),
                (0, s.t)(this, "_done", !1),
                (0, s.t)(this, "_requests", []),
                (0, s.t)(this, "_storedError", null);
            let { length: e } = t._source;
            (this._contentLength = e),
                (this._fullRequestXhr = t._request({
                    onHeadersReceived: r(oT, this, oD).bind(this),
                    onDone: r(oT, this, oI).bind(this),
                    onError: r(oT, this, oL).bind(this),
                    onProgress: r(oT, this, oR).bind(this),
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
    let a = s.getAllResponseHeaders(),
        n = new Headers(
            a
                ? a
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
            responseHeaders: n,
            isHttp: t.isHttp,
            rangeChunkSize: i,
            disableRange: e,
        });
    r && (this._isRangeSupported = !0),
        (this._contentLength = o || this._contentLength),
        (this._filename = of(n)),
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
    oN = class extends on {
        constructor(t, e, i) {
            super(t, e, i),
                l(this, oF),
                (0, s.t)(this, "onClosed", null),
                (0, s.t)(this, "_done", !1),
                (0, s.t)(this, "_queuedChunk", null),
                (0, s.t)(this, "_requests", []),
                (0, s.t)(this, "_storedError", null),
                (this._requestXhr = t._request({
                    begin: e,
                    end: i,
                    onHeadersReceived: r(oF, this, oB).bind(this),
                    onDone: r(oF, this, oO).bind(this),
                    onError: r(oF, this, oW).bind(this),
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
        (this._storedError = t), r(oF, this, oW).call(this, 0);
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
    let { Readable: e } = a.getBuiltinModule("stream");
    return "function" == typeof e.toWeb
        ? e.toWeb(t)
        : a
              .getBuiltinModule("module")
              .createRequire(
                  "file:///ci/build/discord/discord/node_modules/.pnpm/@incodetech+web@2.0.1_encoding@0.1.13_preact@10.26.4_typescript@6.0.2_vite@8.0.7_@types+node@_ilizizyegld2n2xkphtpuvhr5q/node_modules/@incodetech/web/dist/pdf-BurGZ08w.js",
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
                    return new URL(oU.test(t) ? t : a.getBuiltinModule("url").pathToFileURL(t));
                })(t.url)),
                I("file:" === this.url.protocol, "PDFNodeStream only supports file:// URLs.");
        }
    },
    oz = class extends oa {
        constructor(t) {
            super(t), (0, s.t)(this, "_reader", null);
            let { disableRange: e, disableStream: i, length: n, rangeChunkSize: r } = t._source;
            (this._contentLength = n), (this._isStreamingSupported = !i), (this._isRangeSupported = !e);
            let o = t.url,
                l = a.getBuiltinModule("fs");
            l.promises
                .lstat(o)
                .then((t) => {
                    this._reader = o$(l.createReadStream(o)).getReader();
                    let { size: e } = t;
                    e <= 2 * r && (this._isRangeSupported = !1),
                        (this._contentLength = e),
                        !this._isStreamingSupported &&
                            this._isRangeSupported &&
                            this.cancel(new H("Streaming is disabled.")),
                        this._headersCapability.resolve();
                })
                .catch((t) => {
                    "ENOENT" === t.code && (t = om(0, o.href)), this._headersCapability.reject(t);
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
    oG = class extends on {
        constructor(t, e, i) {
            super(t, e, i), (0, s.t)(this, "_readCapability", Promise.withResolvers()), (0, s.t)(this, "_reader", null);
            let n = t.url,
                r = a.getBuiltinModule("fs");
            try {
                (this._reader = o$(r.createReadStream(n, { start: e, end: i - 1 })).getReader()),
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
    oX = new WeakMap(),
    oq = new WeakSet();
m = Symbol.iterator;
var oY = class {
    constructor() {
        l(this, oq), h(this, oX, Object.create(null));
    }
    get(t, e = null) {
        if (e) {
            let i = r(oq, this, oK).call(this, t);
            return i.promise.then(() => e(i.data)), null;
        }
        let i = c(oX, this)[t];
        if (!i || i.data === oV) throw Error(`Requesting object that isn't resolved yet ${t}.`);
        return i.data;
    }
    has(t) {
        let e = c(oX, this)[t];
        return !!e && e.data !== oV;
    }
    delete(t) {
        let e = c(oX, this)[t];
        return !!e && e.data !== oV && (delete c(oX, this)[t], !0);
    }
    resolve(t, e = null) {
        let i = r(oq, this, oK).call(this, t);
        (i.data = e), i.resolve();
    }
    clear() {
        for (let t in c(oX, this)) {
            let { data: e } = c(oX, this)[t];
            e?.bitmap?.close();
        }
        d(oX, this, Object.create(null));
    }
    *[m]() {
        for (let t in c(oX, this)) {
            let { data: e } = c(oX, this)[t];
            e !== oV && (yield [t, e]);
        }
    }
};
function oK(t) {
    return (c(oX, this)[t] ||= { ...Promise.withResolvers(), data: oV });
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
    la = new WeakMap(),
    ln = new WeakSet(),
    lr = class t {
        constructor({ textContentSource: e, container: i, viewport: s }) {
            if (
                (l(this, ln),
                h(this, oQ, Promise.withResolvers()),
                h(this, oJ, null),
                h(this, oZ, !1),
                h(this, o0, !!globalThis.FontInspector?.enabled),
                h(this, o1, null),
                h(this, o2, null),
                h(this, o3, 0),
                h(this, o5, 0),
                h(this, o4, null),
                h(this, o6, null),
                h(this, o8, 0),
                h(this, o7, 0),
                h(this, o9, Object.create(null)),
                h(this, lt, []),
                h(this, le, null),
                h(this, li, []),
                h(this, ls, new WeakMap()),
                h(this, la, null),
                e instanceof ReadableStream)
            )
                d(le, this, e);
            else if ("object" == typeof e)
                d(
                    le,
                    this,
                    new ReadableStream({
                        start(t) {
                            t.enqueue(e), t.close();
                        },
                    }),
                );
            else throw Error('No "textContentSource" parameter specified.');
            d(oJ, this, d(o6, this, i)),
                d(o7, this, s.scale * tv.pixelRatio),
                d(o8, this, s.rotation),
                d(o2, this, { div: null, properties: null, ctx: null });
            let { pageWidth: a, pageHeight: n, pageX: r, pageY: o } = s.rawDims;
            d(la, this, [1, 0, 0, -1, -r, o + n]),
                d(o5, this, a),
                d(o3, this, n),
                lu.call(t),
                i.style.setProperty("--min-font-size", lw._),
                tb(i, s),
                c(oQ, this)
                    .promise.finally(() => {
                        lb._.delete(this), d(o2, this, null), d(o9, this, null);
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
                c(o4, this)
                    .read()
                    .then(({ value: e, done: i }) => {
                        i
                            ? c(oQ, this).resolve()
                            : (c(o1, this) ?? d(o1, this, e.lang),
                              Object.assign(c(o9, this), e.styles),
                              r(ln, this, lo).call(this, e.items),
                              t());
                    }, c(oQ, this).reject);
            };
            return d(o4, this, c(le, this).getReader()), lb._.add(this), t(), c(oQ, this).promise;
        }
        update({ viewport: e, onBefore: i = null }) {
            let s = e.scale * tv.pixelRatio,
                a = e.rotation;
            if ((a !== c(o8, this) && (i?.(), d(o8, this, a), tb(c(o6, this), { rotation: a })), s !== c(o7, this))) {
                i?.(), d(o7, this, s);
                let e = { div: null, properties: null, ctx: ld.call(t, c(o1, this)) };
                for (let t of c(li, this))
                    (e.properties = c(ls, this).get(t)), (e.div = t), r(ln, this, lh).call(this, e);
            }
        }
        cancel() {
            let t = new H("TextLayer task cancelled.");
            c(o4, this)
                ?.cancel(t)
                .catch(() => {}),
                d(o4, this, null),
                c(oQ, this).reject(t);
        }
        get textDivs() {
            return c(li, this);
        }
        get textContentItemsStr() {
            return c(lt, this);
        }
        static cleanup() {
            if (!(r(t, this, lb)._.size > 0)) {
                for (let { canvas: e } of (r(t, this, lg)._.clear(), r(t, this, lf)._.values())) e.remove();
                r(t, this, lf)._.clear();
            }
        }
    };
function lo(t) {
    if (c(oZ, this)) return;
    c(o2, this).ctx ??= ld.call(lr, c(o1, this));
    let e = c(li, this),
        i = c(lt, this);
    for (let s of t) {
        if (e.length > 1e5) {
            P("Ignoring additional textDivs for performance reasons."), d(oZ, this, !0);
            return;
        }
        if (void 0 === s.str) {
            if ("beginMarkedContentProps" === s.type || "beginMarkedContent" === s.type) {
                let t = c(oJ, this);
                d(oJ, this, document.createElement("span")),
                    c(oJ, this).classList.add("markedContent"),
                    s.id && c(oJ, this).setAttribute("id", `${s.id}`),
                    "Artifact" === s.tag && (c(oJ, this).ariaHidden = !0),
                    t.append(c(oJ, this));
            } else "endMarkedContent" === s.type && d(oJ, this, c(oJ, this).parentNode);
            continue;
        }
        i.push(s.str), r(ln, this, ll).call(this, s);
    }
}
function ll(t) {
    let e = document.createElement("span"),
        i = { angle: 0, canvasWidth: 0, hasText: "" !== t.str, hasEOL: t.hasEOL, fontSize: 0 };
    c(li, this).push(e);
    let s = V.transform(c(la, this), t.transform),
        a = Math.atan2(s[1], s[0]),
        n = c(o9, this)[t.fontName];
    n.vertical && (a += Math.PI / 2);
    let o = (c(o0, this) && n.fontSubstitution) || n.fontFamily;
    o = lr.fontFamilyMap.get(o) || o;
    let l = Math.hypot(s[2], s[3]),
        h = l * lp.call(lr, o, n, c(o1, this)),
        d,
        u;
    0 === a ? ((d = s[4]), (u = s[5] - h)) : ((d = s[4] + h * Math.sin(a)), (u = s[5] - h * Math.cos(a)));
    let p = e.style;
    (p.left = `${((100 * d) / c(o5, this)).toFixed(2)}%`),
        (p.top = `${((100 * u) / c(o3, this)).toFixed(2)}%`),
        p.setProperty("--font-height", `${l.toFixed(2)}px`),
        (p.fontFamily = o),
        (i.fontSize = l),
        e.setAttribute("role", "presentation"),
        (e.textContent = t.str),
        (e.dir = t.dir),
        c(o0, this) && (e.dataset.fontName = n.fontSubstitutionLoadedName || t.fontName),
        0 !== a && (i.angle = (180 / Math.PI) * a);
    let g = !1;
    if (t.str.length > 1) g = !0;
    else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
        let e = Math.abs(t.transform[0]),
            i = Math.abs(t.transform[3]);
        e !== i && Math.max(e, i) / Math.min(e, i) > 1.5 && (g = !0);
    }
    if (
        (g && (i.canvasWidth = n.vertical ? t.height : t.width),
        c(ls, this).set(e, i),
        (c(o2, this).div = e),
        (c(o2, this).properties = i),
        r(ln, this, lh).call(this, c(o2, this)),
        i.hasText && c(oJ, this).append(e),
        i.hasEOL)
    ) {
        let t = document.createElement("br");
        t.setAttribute("role", "presentation"), c(oJ, this).append(t);
    }
}
function lh(t) {
    let { div: e, properties: i, ctx: s } = t,
        { style: a } = e;
    if (0 !== i.canvasWidth && i.hasText) {
        let { fontFamily: t } = a,
            { canvasWidth: n, fontSize: r } = i;
        lc.call(lr, s, r * c(o7, this), t);
        let { width: o } = s.measureText(e.textContent);
        o > 0 && a.setProperty("--scale-x", (n * c(o7, this)) / o);
    }
    0 !== i.angle && a.setProperty("--rotate", `${i.angle}deg`);
}
function ld(t = null) {
    let e = r(lr, this, lf)._.get((t ||= ""));
    if (!e) {
        let i = document.createElement("canvas");
        (i.className = "hiddenCanvasElement"),
            (i.lang = t),
            document.body.append(i),
            (e = i.getContext("2d", { alpha: !1, willReadFrequently: !0 })),
            r(lr, this, lf)._.set(t, e),
            r(lr, this, lm)._.set(e, { size: 0, family: "" });
    }
    return e;
}
function lc(t, e, i) {
    let s = r(lr, this, lm)._.get(t);
    (e === s.size && i === s.family) || ((t.font = `${e}px ${i}`), (s.size = e), (s.family = i));
}
function lu() {
    if (null !== r(lr, this, lw)._) return;
    let t = document.createElement("div");
    (t.style.opacity = 0),
        (t.style.lineHeight = 1),
        (t.style.fontSize = "1px"),
        (t.style.position = "absolute"),
        (t.textContent = "X"),
        document.body.append(t),
        (lw._ = r(lr, this, t.getBoundingClientRect().height)),
        t.remove();
}
function lp(t, e, i) {
    let s = r(lr, this, lg)._.get(t);
    if (s) return s;
    let a = r(lr, this, ld).call(this, i);
    (a.canvas.width = a.canvas.height = 30), r(lr, this, lc).call(this, a, 30, t);
    let n = a.measureText(""),
        o = n.fontBoundingBoxAscent,
        l = Math.abs(n.fontBoundingBoxDescent);
    a.canvas.width = a.canvas.height = 0;
    let h = 0.8;
    return (
        o
            ? (h = o / (o + l))
            : (z.platform.isFirefox &&
                  P(
                      "Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.",
                  ),
              e.ascent ? (h = e.ascent) : e.descent && (h = 1 + e.descent)),
        r(lr, this, lg)._.set(t, h),
        h
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
        a = t.data
            ? (function (t) {
                  if (b && "u" > typeof n && t instanceof n)
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
        r = t.httpHeaders || null,
        o = !0 === t.withCredentials,
        l = t.password ?? null,
        h = t.range instanceof lC ? t.range : null,
        d = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : 65536,
        c = t.worker instanceof lW ? t.worker : null,
        u = t.verbosity,
        p = "string" != typeof t.docBaseUrl || to(t.docBaseUrl) ? null : t.docBaseUrl,
        g = aK(t.cMapUrl),
        f = !1 !== t.cMapPacked,
        m = t.CMapReaderFactory || (b ? nF : nn),
        w = aK(t.iccUrl),
        v = aK(t.standardFontDataUrl),
        A = t.StandardFontDataFactory || (b ? nN : nT),
        y = aK(t.wasmUrl),
        _ = t.WasmFactory || (b ? nB : nD),
        x = !0 !== t.stopAtErrors,
        k = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1,
        M = !1 !== t.isEvalSupported,
        S = "boolean" == typeof t.isOffscreenCanvasSupported ? t.isOffscreenCanvasSupported : !b,
        C =
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
        O = t.CanvasFactory || (b ? nR : ns),
        W = t.FilterFactory || (b ? nL : nf),
        U = !0 === t.enableHWA,
        $ = !1 !== t.useWasm,
        H = h ? h.length : (t.length ?? NaN),
        G = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !b && !P,
        V =
            "boolean" == typeof t.useWorkerFetch
                ? t.useWorkerFetch
                : !!(
                      m === nn &&
                      A === nT &&
                      _ === nD &&
                      g &&
                      v &&
                      y &&
                      td(g, document.baseURI) &&
                      td(v, document.baseURI) &&
                      td(y, document.baseURI)
                  );
    Number.isInteger(u) && (E = u);
    let X = {
        canvasFactory: new O({ ownerDocument: L, enableHWA: U }),
        filterFactory: new W({ docId: i, ownerDocument: L }),
        cMapReaderFactory: V ? null : new m({ baseUrl: g, isCompressed: f }),
        standardFontDataFactory: V ? null : new A({ baseUrl: v }),
        wasmFactory: V ? null : new _({ baseUrl: y }),
    };
    c || (e._worker = c = lW.create({ verbosity: u, port: rV.workerPort }));
    let q = {
            docId: i,
            apiVersion: "5.4.624",
            data: a,
            password: l,
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
                isImageDecoderSupported: C,
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
        Y = {
            ownerDocument: L,
            pdfBug: B,
            styleElement: null,
            enableHWA: U,
            loadingParams: { disableAutoFetch: N, enableXfa: I },
        };
    return (
        c.promise
            .then(function () {
                if (e.destroyed) throw Error("Loading aborted");
                if (c.destroyed) throw Error("Worker was destroyed");
                let t = c.messageHandler.sendWithPromise("GetDocRequest", q, a ? [a.buffer] : null),
                    n;
                if (h) n = new ol({ pdfDataRangeTransport: h, disableRange: R, disableStream: F });
                else if (!a) {
                    if (!s) throw Error("getDocument - no `url` parameter provided.");
                    n = new (td(s) ? oy : b ? oj : oS)({
                        url: s,
                        length: H,
                        httpHeaders: r,
                        withCredentials: o,
                        rangeChunkSize: d,
                        disableRange: R,
                        disableStream: F,
                    });
                }
                return t.then((t) => {
                    if (e.destroyed) throw Error("Loading aborted");
                    if (c.destroyed) throw Error("Worker was destroyed");
                    let s = new a6(i, t, c.port);
                    (e._transport = new l3(s, e, n, Y, X)), s.send("Ready", null);
                });
            })
            .catch(e._capability.reject),
        e
    );
}
var lA = class {
        constructor() {
            var t, e;
            (0, s.t)(this, "_capability", Promise.withResolvers()),
                (0, s.t)(this, "_transport", null),
                (0, s.t)(this, "_worker", null),
                (0, s.t)(this, "docId", `d${((t = ly._), (e = t++), (ly._ = t), e)}`),
                (0, s.t)(this, "destroyed", !1),
                (0, s.t)(this, "onPassword", null),
                (0, s.t)(this, "onProgress", null);
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
    lC = class {
        constructor(t, e, i = !1, s = null) {
            h(this, l_, Promise.withResolvers()),
                h(this, lx, []),
                h(this, lk, []),
                h(this, lM, []),
                h(this, lS, []),
                (this.length = t),
                (this.initialData = e),
                (this.progressiveDone = i),
                (this.contentDispositionFilename = s);
        }
        addRangeListener(t) {
            c(lS, this).push(t);
        }
        addProgressListener(t) {
            c(lM, this).push(t);
        }
        addProgressiveReadListener(t) {
            c(lk, this).push(t);
        }
        addProgressiveDoneListener(t) {
            c(lx, this).push(t);
        }
        onDataRange(t, e) {
            for (let i of c(lS, this)) i(t, e);
        }
        onDataProgress(t, e) {
            c(l_, this).promise.then(() => {
                for (let i of c(lM, this)) i(t, e);
            });
        }
        onDataProgressiveRead(t) {
            c(l_, this).promise.then(() => {
                for (let e of c(lk, this)) e(t);
            });
        }
        onDataProgressiveDone() {
            c(l_, this).promise.then(() => {
                for (let t of c(lx, this)) t();
            });
        }
        transportReady() {
            c(l_, this).resolve();
        }
        requestDataRange(t, e) {
            D("Abstract method PDFDataRangeTransport.requestDataRange");
        }
        abort() {}
    },
    lE = class {
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
            l(this, lD),
                h(this, lT, !1),
                h(this, lP, tD.instance),
                (this._pageIndex = t),
                (this._pageInfo = e),
                (this._transport = i),
                (this._stats = s ? new th() : null),
                (this._pdfBug = s),
                (this.commonObjs = i.commonObjs),
                (this.objs = new oY()),
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
        getViewport({ scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: a = !1 } = {}) {
            return new tn({
                viewBox: this.view,
                userUnit: this.userUnit,
                scale: t,
                rotation: e,
                offsetX: i,
                offsetY: s,
                dontFlip: a,
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
            annotationMode: a = A.ENABLE,
            transform: n = null,
            background: o = null,
            optionalContentConfigPromise: l = null,
            annotationCanvasMap: h = null,
            pageColors: c = null,
            printAnnotationStorage: u = null,
            isEditing: p = !1,
            recordOperations: g = !1,
            operationsFilter: f = null,
        }) {
            this._stats?.time("Overall");
            let m = this._transport.getRenderingIntent(s, a, u, p),
                { renderingIntent: w, cacheKey: b } = m;
            d(lT, this, !1), (l ||= this._transport.getOptionalContentConfig(w));
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
                x = !this.recordedBBoxes && (g || _),
                k = (t) => {
                    if ((v.renderTasks.delete(M), x)) {
                        let t = M.gfx?.dependencyTracker.take();
                        t &&
                            (M.stepper && M.stepper.setOperatorBBoxes(t, M.gfx.dependencyTracker.takeDebugMetadata()),
                            g && (this.recordedBBoxes = t));
                    }
                    y && d(lT, this, !0),
                        r(lD, this, lL).call(this),
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
                        transform: n,
                        background: o,
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    annotationCanvasMap: h,
                    operatorList: v.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: this._transport.canvasFactory,
                    filterFactory: this._transport.filterFactory,
                    useRequestAnimationFrame: !y,
                    pdfBug: this._pdfBug,
                    pageColors: c,
                    enableHWA: this._transport.enableHWA,
                    operationsFilter: f,
                });
            (v.renderTasks ||= new Set()).add(M);
            let S = M.task;
            return (
                Promise.all([v.displayReadyCapability.promise, l])
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
            let a,
                n = this._transport.getRenderingIntent(t, e, i, s, !0),
                r = this._intentStates.get(n.cacheKey);
            return (
                r || ((r = Object.create(null)), this._intentStates.set(n.cacheKey, r)),
                r.opListReadCapability ||
                    (((a = Object.create(null)).operatorListChanged = function () {
                        r.operatorList.lastChunk &&
                            (r.opListReadCapability.resolve(r.operatorList), r.renderTasks.delete(a));
                    }),
                    (r.opListReadCapability = Promise.withResolvers()),
                    (r.renderTasks ||= new Set()).add(a),
                    (r.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }),
                    this._stats?.time("Page Request"),
                    this._pumpOperatorList(n)),
                r.opListReadCapability.promise
            );
        }
        streamTextContent({ includeMarkedContent: t = !1, disableNormalization: e = !1 } = {}) {
            return this._transport.messageHandler.sendWithStream(
                "GetTextContent",
                {
                    pageId: c(lP, this).getPageId(this._pageIndex + 1) - 1,
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
                    a = { items: [], styles: Object.create(null), lang: null };
                !(function e() {
                    s.read().then(function ({ value: i, done: s }) {
                        s
                            ? t(a)
                            : ((a.lang ??= i.lang), Object.assign(a.styles, i.styles), a.items.push(...i.items), e());
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
            return this.objs.clear(), d(lT, this, !1), Promise.all(t);
        }
        cleanup(t = !1) {
            d(lT, this, !0);
            let e = r(lD, this, lL).call(this);
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
            t.lastChunk && r(lD, this, lL).call(this);
        }
        _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: i, modifiedIds: s }) {
            let { map: a, transfer: n } = i,
                o = this._transport.messageHandler
                    .sendWithStream(
                        "GetOperatorList",
                        {
                            pageId: c(lP, this).getPageId(this._pageIndex + 1) - 1,
                            pageIndex: this._pageIndex,
                            intent: t,
                            cacheKey: e,
                            annotationStorage: a,
                            modifiedIds: s,
                        },
                        n,
                    )
                    .getReader(),
                l = this._intentStates.get(e);
            l.streamReader = o;
            let h = () => {
                o.read().then(
                    ({ value: t, done: e }) => {
                        if (e) {
                            l.streamReader = null;
                            return;
                        }
                        this._transport.destroyed || (this._renderPageChunk(t, l), h());
                    },
                    (t) => {
                        if (((l.streamReader = null), !this._transport.destroyed)) {
                            if (l.operatorList) {
                                for (let t of ((l.operatorList.lastChunk = !0), l.renderTasks)) t.operatorListChanged();
                                r(lD, this, lL).call(this);
                            }
                            if (l.displayReadyCapability) l.displayReadyCapability.reject(t);
                            else if (l.opListReadCapability) l.opListReadCapability.reject(t);
                            else throw t;
                        }
                    },
                );
            };
            h();
        }
        _abortOperatorList({ intentState: t, reason: e, force: i = !1 }) {
            if (t.streamReader) {
                if (((t.streamReaderCancelTimeout &&= (clearTimeout(t.streamReaderCancelTimeout), null)), !i)) {
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
    if (!c(lT, this) || this.destroyed) return !1;
    for (let { renderTasks: t, operatorList: e } of this._intentStates.values())
        if (t.size > 0 || !e.lastChunk) return !1;
    return this._intentStates.clear(), this.objs.clear(), d(lT, this, !1), !0;
}
var lR = new WeakMap(),
    lF = new WeakMap(),
    lN = new WeakMap(),
    lB = new WeakMap(),
    lO = new WeakSet(),
    lW = class t {
        constructor({ name: t = null, port: e = null, verbosity: i = E } = {}) {
            if (
                (l(this, lO),
                h(this, lR, Promise.withResolvers()),
                h(this, lF, null),
                h(this, lN, null),
                h(this, lB, null),
                (this.name = t),
                (this.destroyed = !1),
                (this.verbosity = i),
                e)
            ) {
                if (lX._.has(e)) throw Error("Cannot use more than one PDFWorker per port.");
                lX._.set(e, this), r(lO, this, l$).call(this, e);
            } else r(lO, this, lH).call(this);
        }
        get promise() {
            return c(lR, this).promise;
        }
        get port() {
            return c(lN, this);
        }
        get messageHandler() {
            return c(lF, this);
        }
        destroy() {
            (this.destroyed = !0),
                c(lB, this)?.terminate(),
                d(lB, this, null),
                lX._.delete(c(lN, this)),
                d(lN, this, null),
                c(lF, this)?.destroy(),
                d(lF, this, null);
        }
        static create(e) {
            let i = r(t, this, lX)._.get(e?.port);
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
                    lz.call(r(t, this)) ? lz.call(r(t, this)) : (await import(this.workerSrc)).WorkerMessageHandler)(),
            );
        }
    };
function lU() {
    c(lR, this).resolve(), c(lF, this).send("configure", { verbosity: this.verbosity });
}
function l$(t) {
    d(lN, this, t),
        d(lF, this, new a6("main", "worker", t)),
        c(lF, this).on("ready", () => {}),
        r(lO, this, lU).call(this);
}
function lH() {
    if (lV._ || lz.call(lW)) return void r(lO, this, lj).call(this);
    let { workerSrc: t } = lW;
    try {
        lW._isSameOrigin(window.location, t) || (t = lW._createCDNWrapper(new URL(t, window.location).href));
        let e = new Worker(t, { type: "module" }),
            i = new a6("main", "worker", e),
            s = () => {
                a.abort(),
                    i.destroy(),
                    e.terminate(),
                    this.destroyed ? c(lR, this).reject(Error("Worker was destroyed")) : r(lO, this, lj).call(this);
            },
            a = new AbortController();
        e.addEventListener(
            "error",
            () => {
                c(lB, this) || s();
            },
            { signal: a.signal },
        ),
            i.on("test", (t) => {
                (a.abort(), this.destroyed || !t)
                    ? s()
                    : (d(lF, this, i), d(lN, this, e), d(lB, this, e), r(lO, this, lU).call(this));
            }),
            i.on("ready", (t) => {
                if ((a.abort(), this.destroyed)) return void s();
                try {
                    n();
                } catch {
                    r(lO, this, lj).call(this);
                }
            });
        let n = () => {
            let t = new Uint8Array();
            i.send("test", t, [t.buffer]);
        };
        n();
        return;
    } catch {
        T("The worker has been disabled.");
    }
    r(lO, this, lj).call(this);
}
function lj() {
    (lV._ ||= (P("Setting up fake worker."), !0)),
        lW._setupFakeWorkerGlobal
            .then((t) => {
                var e, i;
                if (this.destroyed) return void c(lR, this).reject(Error("Worker was destroyed"));
                let s = new a1();
                d(lN, this, s);
                let a = `fake${((e = lG._), (i = e++), (lG._ = e), i)}`,
                    n = new a6(a + "_worker", a, s);
                t.setup(n, s), d(lF, this, new a6(a, a + "_worker", s)), r(lO, this, lU).call(this);
            })
            .catch((t) => {
                c(lR, this).reject(Error(`Setting up fake worker failed: "${t.message}".`));
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
    lX = { _: new WeakMap() };
b && ((lV._ = r(lW, lW, !0)), (rV.workerSrc ||= "./pdf.worker.mjs")),
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
var lq = new WeakMap(),
    lY = new WeakMap(),
    lK = new WeakMap(),
    lQ = new WeakMap(),
    lJ = new WeakMap(),
    lZ = new WeakMap(),
    l0 = new WeakMap(),
    l1 = new WeakMap(),
    l2 = new WeakSet(),
    l3 = class {
        constructor(t, e, i, a, n) {
            l(this, l2),
                (0, s.t)(this, "downloadInfoCapability", Promise.withResolvers()),
                h(this, lq, null),
                h(this, lY, new Map()),
                h(this, lK, null),
                h(this, lQ, new Map()),
                h(this, lJ, new Map()),
                h(this, lZ, new Map()),
                h(this, l0, null),
                h(this, l1, tD.instance),
                (this.messageHandler = t),
                (this.loadingTask = e),
                d(lK, this, i),
                (this.commonObjs = new oY()),
                (this.fontLoader = new ac({ ownerDocument: a.ownerDocument, styleElement: a.styleElement })),
                (this.enableHWA = a.enableHWA),
                (this.loadingParams = a.loadingParams),
                (this._params = a),
                (this.canvasFactory = n.canvasFactory),
                (this.filterFactory = n.filterFactory),
                (this.cMapReaderFactory = n.cMapReaderFactory),
                (this.standardFontDataFactory = n.standardFontDataFactory),
                (this.wasmFactory = n.wasmFactory),
                (this.destroyed = !1),
                (this.destroyCapability = null),
                this.setupMessageHandler(),
                c(l1, this).addListener(r(l2, this, l5).bind(this));
        }
        get annotationStorage() {
            return F(this, "annotationStorage", new ar());
        }
        getRenderingIntent(t, e = A.ENABLE, i = null, s = !1, a = !1) {
            let n = 2,
                r = at;
            switch (t) {
                case "any":
                    n = 1;
                    break;
                case "display":
                    break;
                case "print":
                    n = 4;
                    break;
                default:
                    P(`getRenderingIntent - invalid intent: ${t}`);
            }
            let o = 4 & n && i instanceof ah ? i : this.annotationStorage;
            switch (e) {
                case A.DISABLE:
                    n += 64;
                    break;
                case A.ENABLE:
                    break;
                case A.ENABLE_FORMS:
                    n += 16;
                    break;
                case A.ENABLE_STORAGE:
                    (n += 32), (r = o.serializable);
                    break;
                default:
                    P(`getRenderingIntent - invalid annotationMode: ${e}`);
            }
            s && (n += 128), a && (n += 256);
            let { ids: l, hash: h } = o.modifiedIds,
                d = [n, r.hash, h];
            return { renderingIntent: n, cacheKey: d.join("_"), annotationStorageSerializable: r, modifiedIds: l };
        }
        destroy() {
            if (this.destroyCapability) return this.destroyCapability.promise;
            (this.destroyed = !0),
                (this.destroyCapability = Promise.withResolvers()),
                c(l0, this)?.reject(Error("Worker was destroyed during onPassword callback"));
            let t = [];
            for (let e of c(lQ, this).values()) t.push(e._destroy());
            c(lQ, this).clear(),
                c(lJ, this).clear(),
                c(lZ, this).clear(),
                this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
            let e = this.messageHandler.sendWithPromise("Terminate", null);
            return (
                t.push(e),
                Promise.all(t).then(() => {
                    this.commonObjs.clear(),
                        this.fontLoader.clear(),
                        c(lY, this).clear(),
                        this.filterFactory.destroy(),
                        lr.cleanup(),
                        c(lK, this)?.cancelAllRequests(new H("Worker was terminated.")),
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
                I(c(lK, this), "GetReader - no `BasePDFStream` instance available."),
                    d(lq, this, c(lK, this).getFullReader()),
                    (c(lq, this).onProgress = (t) => r(l2, this, l6).call(this, t)),
                    (e.onPull = () => {
                        c(lq, this)
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
                        c(lq, this).cancel(t),
                            e.ready.catch((t) => {
                                if (!this.destroyed) throw t;
                            });
                    });
            }),
                t.on("ReaderHeadersReady", async (t) => {
                    await c(lq, this).headersReady;
                    let { isStreamingSupported: e, isRangeSupported: i, contentLength: s } = c(lq, this);
                    return (
                        e && i && (c(lq, this).onProgress = null),
                        { isStreamingSupported: e, isRangeSupported: i, contentLength: s }
                    );
                }),
                t.on("GetRangeReader", (t, e) => {
                    I(c(lK, this), "GetRangeReader - no `BasePDFStream` instance available.");
                    let i = c(lK, this).getRangeReader(t.begin, t.end);
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
                    (c(l1, this).pagesNumber = t.numPages),
                        (this._numPages = t.numPages),
                        (this._htmlForXfa = t.htmlForXfa),
                        delete t.htmlForXfa,
                        e._capability.resolve(new lE(t, this));
                }),
                t.on("DocException", (t) => {
                    e._capability.reject(a3(t));
                }),
                t.on("PasswordRequest", (t) => {
                    d(l0, this, Promise.withResolvers());
                    try {
                        if (!e.onPassword) throw a3(t);
                        e.onPassword((t) => {
                            t instanceof Error ? c(l0, this).reject(t) : c(l0, this).resolve({ password: t });
                        }, t.code);
                    } catch (t) {
                        c(l0, this).reject(t);
                    }
                    return c(l0, this).promise;
                }),
                t.on("DataLoaded", (t) => {
                    r(l2, this, l6).call(this, { loaded: t.length, total: t.length }),
                        this.downloadInfoCapability.resolve(t);
                }),
                t.on("StartRenderPage", (t) => {
                    this.destroyed || c(lQ, this).get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
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
                            let a = new ap(
                                new aP(s),
                                this._params.pdfBug && globalThis.FontInspector?.enabled
                                    ? (t, e) => globalThis.FontInspector.fontAdded(t, e)
                                    : null,
                                s.extra,
                                s.charProcOperatorList,
                            );
                            this.fontLoader
                                .bind(a)
                                .catch(() => t.sendWithPromise("FontFallback", { id: e }))
                                .finally(() => {
                                    !a.fontExtraProperties && a.data && a.clearData(), this.commonObjs.resolve(e, a);
                                });
                            break;
                        case "CopyLocalImage":
                            let { imageRef: n } = s;
                            for (let t of (I(n, "The imageRef must be defined."), c(lQ, this).values()))
                                for (let [, i] of t.objs)
                                    if (i?.ref === n)
                                        return i.dataLen
                                            ? (this.commonObjs.resolve(e, structuredClone(i)), i.dataLen)
                                            : null;
                            break;
                        case "FontPath":
                            this.commonObjs.resolve(e, new aY(s));
                            break;
                        case "Image":
                            this.commonObjs.resolve(e, s);
                            break;
                        case "Pattern":
                            let r = new aW(s);
                            this.commonObjs.resolve(e, r.getIR());
                            break;
                        default:
                            throw Error(`Got unknown common object type ${i}`);
                    }
                    return null;
                }),
                t.on("obj", ([t, e, i, s]) => {
                    if (this.destroyed) return;
                    let a = c(lQ, this).get(e);
                    if (!a.objs.has(t)) {
                        if (0 === a._intentStates.size) return void s?.bitmap?.close();
                        switch (i) {
                            case "Image":
                            case "Pattern":
                                a.objs.resolve(t, s);
                                break;
                            default:
                                throw Error(`Got unknown object type ${i}`);
                        }
                    }
                }),
                t.on("DocProgress", (t) => {
                    this.destroyed || r(l2, this, l6).call(this, t);
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
                        filename: c(lq, this)?.filename ?? null,
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
            if (!Number.isInteger(t) || t <= 0 || t > c(l1, this).pagesNumber)
                return Promise.reject(Error("Invalid page request."));
            let e = t - 1,
                i = c(l1, this).getPageId(t) - 1,
                s = c(lJ, this).get(e);
            if (s) return s;
            let a = this.messageHandler.sendWithPromise("GetPage", { pageIndex: i }).then((t) => {
                if (this.destroyed) throw Error("Transport destroyed");
                t.refStr && c(lZ, this).set(t.refStr, i);
                let s = new lI(e, t, this, this._params.pdfBug);
                return c(lQ, this).set(e, s), s;
            });
            return c(lJ, this).set(e, a), a;
        }
        async getPageIndex(t) {
            if (!aQ(t)) throw Error("Invalid pageIndex request.");
            let e = await this.messageHandler.sendWithPromise("GetPageIndex", { num: t.num, gen: t.gen });
            return c(l1, this).getPageNumber(e + 1) - 1;
        }
        getAnnotations(t, e) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: c(l1, this).getPageId(t + 1) - 1,
                intent: e,
            });
        }
        getFieldObjects() {
            return r(l2, this, l4).call(this, "GetFieldObjects");
        }
        hasJSActions() {
            return r(l2, this, l4).call(this, "HasJSActions");
        }
        getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }
        getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(t) {
            return "string" == typeof t
                ? this.messageHandler.sendWithPromise("GetDestination", { id: t })
                : Promise.reject(Error("Invalid destination request."));
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
            return r(l2, this, l4).call(this, "GetDocJSActions");
        }
        getPageJSActions(t) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: c(l1, this).getPageId(t + 1) - 1,
            });
        }
        getStructTree(t) {
            return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: c(l1, this).getPageId(t + 1) - 1,
            });
        }
        getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig(t) {
            return r(l2, this, l4)
                .call(this, "GetOptionalContentConfig")
                .then((e) => new r9(e, t));
        }
        getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
            let t = "GetMetadata",
                e = c(lY, this).get(t);
            if (e) return e;
            let i = this.messageHandler
                .sendWithPromise(t, null)
                .then((t) => ({
                    info: t[0],
                    metadata: t[1] ? new rQ(t[1]) : null,
                    contentDispositionFilename: c(lq, this)?.filename ?? null,
                    contentLength: c(lq, this)?.contentLength ?? null,
                    hasStructTree: t[2],
                }));
            return c(lY, this).set(t, i), i;
        }
        getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }
        async startCleanup(t = !1) {
            if (!this.destroyed) {
                for (let t of (await this.messageHandler.sendWithPromise("Cleanup", null), c(lQ, this).values()))
                    if (!t.cleanup()) throw Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
                this.commonObjs.clear(),
                    t || this.fontLoader.clear(),
                    c(lY, this).clear(),
                    this.filterFactory.destroy(!0),
                    lr.cleanup();
            }
        }
        cachedPageNumber(t) {
            if (!aQ(t)) return null;
            let e = 0 === t.gen ? `${t.num}R` : `${t.num}R${t.gen}`,
                i = c(lZ, this).get(e);
            return i >= 0 ? c(l1, this).getPageNumber(i + 1) : null;
        }
    };
function l5() {
    let t = new Map(),
        e = new Map();
    for (let i = 0, s = c(l1, this).pagesNumber; i < s; i++) {
        let s = c(l1, this).getPrevPageNumber(i + 1) - 1,
            a = c(lQ, this).get(s);
        a && t.set(i, a);
        let n = c(lJ, this).get(s);
        n && e.set(i, n);
    }
    d(lQ, this, t), d(lJ, this, e);
}
function l4(t, e = null) {
    let i = c(lY, this).get(t);
    if (i) return i;
    let s = this.messageHandler.sendWithPromise(t, e);
    return c(lY, this).set(t, s), s;
}
function l6({ loaded: t, total: e }) {
    this.loadingTask.onProgress?.({ loaded: t, total: e, percent: Z(Math.round((t / e) * 100), 0, 100) });
}
var l8 = class {
        constructor(t) {
            (0, s.t)(this, "_internalRenderTask", null),
                (0, s.t)(this, "onContinue", null),
                (0, s.t)(this, "onError", null),
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
            annotationCanvasMap: a,
            operatorList: n,
            pageIndex: r,
            canvasFactory: o,
            filterFactory: l,
            useRequestAnimationFrame: d = !1,
            pdfBug: c = !1,
            pageColors: u = null,
            enableHWA: p = !1,
            operationsFilter: g = null,
        }) {
            h(this, l7, null),
                (this.callback = t),
                (this.params = e),
                (this.objs = i),
                (this.commonObjs = s),
                (this.annotationCanvasMap = a),
                (this.operatorListIdx = null),
                (this.operatorList = n),
                (this._pageIndex = r),
                (this.canvasFactory = o),
                (this.filterFactory = l),
                (this._pdfBug = c),
                (this.pageColors = u),
                (this.running = !1),
                (this.graphicsReadyCallback = null),
                (this.graphicsReady = !1),
                (this._useRequestAnimationFrame = !0 === d && "u" > typeof window),
                (this.cancelled = !1),
                (this.capability = Promise.withResolvers()),
                (this.task = new l8(this)),
                (this._cancelBound = this.cancel.bind(this)),
                (this._continueBound = this._continue.bind(this)),
                (this._scheduleNextBound = this._scheduleNext.bind(this)),
                (this._nextBound = this._next.bind(this)),
                (this._canvas = e.canvas),
                (this._canvasContext = e.canvas ? null : e.canvasContext),
                (this._enableHWA = p),
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
            let { viewport: i, transform: s, background: a, dependencyTracker: n } = this.params;
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
                n,
            )),
                this.gfx.beginDrawing({ transform: s, viewport: i, transparency: t, background: a }),
                (this.operatorListIdx = 0),
                (this.graphicsReady = !0),
                this.graphicsReadyCallback?.();
        }
        cancel(t = null, e = 0) {
            (this.running = !1),
                (this.cancelled = !0),
                this.gfx?.endDrawing(),
                c(l7, this) && (window.cancelAnimationFrame(c(l7, this)), d(l7, this, null)),
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
                ? d(
                      l7,
                      this,
                      window.requestAnimationFrame(() => {
                          d(l7, this, null), this._nextBound().catch(this._cancelBound);
                      }),
                  )
                : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
        }
        async _next() {
            this.cancelled ||
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
    ha = new WeakMap(),
    hn = new WeakMap(),
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
            l(this, hc),
                h(this, he, null),
                h(this, hi, null),
                h(this, hs, void 0),
                h(this, ha, null),
                h(this, hn, !1),
                h(this, hr, !1),
                h(this, ho, null),
                h(this, hl, void 0),
                h(this, hh, null),
                h(this, hd, null),
                t ? (d(hr, this, !1), d(ho, this, t)) : d(hr, this, !0),
                d(hd, this, t?._uiManager || e),
                d(hl, this, c(hd, this)._eventBus),
                d(hs, this, t?.color?.toUpperCase() || c(hd, this)?.highlightColors.values().next().value || "#FFFF98"),
                (hv._ ||= Object.freeze({
                    blue: "pdfjs-editor-colorpicker-blue",
                    green: "pdfjs-editor-colorpicker-green",
                    pink: "pdfjs-editor-colorpicker-pink",
                    red: "pdfjs-editor-colorpicker-red",
                    yellow: "pdfjs-editor-colorpicker-yellow",
                }));
        }
        renderButton() {
            let t = d(he, this, document.createElement("button"));
            (t.className = "colorPicker"),
                (t.tabIndex = "0"),
                t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"),
                (t.ariaHasPopup = "true"),
                c(ho, this) && (t.ariaControls = `${c(ho, this).id}_colorpicker_dropdown`);
            let e = c(hd, this)._signal;
            t.addEventListener("click", r(hc, this, hm).bind(this), { signal: e }),
                t.addEventListener("keydown", r(hc, this, hf).bind(this), { signal: e });
            let i = d(hi, this, document.createElement("span"));
            return (
                (i.className = "swatch"),
                (i.ariaHidden = "true"),
                (i.style.backgroundColor = c(hs, this)),
                t.append(i),
                t
            );
        }
        renderMainDropdown() {
            let t = d(ha, this, r(hc, this, hp).call(this));
            return (t.ariaOrientation = "horizontal"), (t.ariaLabelledBy = "highlightColorPickerLabel"), t;
        }
        _colorSelectFromKeyboard(t) {
            if (t.target === c(he, this)) return void r(hc, this, hm).call(this, t);
            let e = t.target.getAttribute("data-color");
            e && r(hc, this, hg).call(this, e, t);
        }
        _moveToNext(t) {
            hb.call(r(hc, this))
                ? t.target === c(he, this)
                    ? c(ha, this).firstElementChild?.focus()
                    : t.target.nextSibling?.focus()
                : r(hc, this, hm).call(this, t);
        }
        _moveToPrevious(t) {
            if (t.target === c(ha, this)?.firstElementChild || t.target === c(he, this)) {
                hb.call(r(hc, this)) && this._hideDropdownFromKeyboard();
                return;
            }
            hb.call(r(hc, this)) || r(hc, this, hm).call(this, t), t.target.previousSibling?.focus();
        }
        _moveToBeginning(t) {
            hb.call(r(hc, this)) ? c(ha, this).firstElementChild?.focus() : r(hc, this, hm).call(this, t);
        }
        _moveToEnd(t) {
            hb.call(r(hc, this)) ? c(ha, this).lastElementChild?.focus() : r(hc, this, hm).call(this, t);
        }
        hideDropdown() {
            c(ha, this)?.classList.add("hidden"),
                (c(he, this).ariaExpanded = "false"),
                c(hh, this)?.abort(),
                d(hh, this, null);
        }
        _hideDropdownFromKeyboard() {
            if (!c(hr, this)) {
                if (!hb.call(r(hc, this))) return void c(ho, this)?.unselect();
                this.hideDropdown(), c(he, this).focus({ preventScroll: !0, focusVisible: c(hn, this) });
            }
        }
        updateColor(t) {
            if ((c(hi, this) && (c(hi, this).style.backgroundColor = t), !c(ha, this))) return;
            let e = c(hd, this).highlightColors.values();
            for (let i of c(ha, this).children) i.ariaSelected = e.next().value === t.toUpperCase();
        }
        destroy() {
            c(he, this)?.remove(), d(he, this, null), d(hi, this, null), c(ha, this)?.remove(), d(ha, this, null);
        }
    };
function hp() {
    let t = document.createElement("div"),
        e = c(hd, this)._signal;
    for (let [i, s] of (t.addEventListener("contextmenu", tc, { signal: e }),
    (t.className = "dropdown"),
    (t.role = "listbox"),
    (t.ariaMultiSelectable = "false"),
    (t.ariaOrientation = "vertical"),
    t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"),
    c(ho, this) && (t.id = `${c(ho, this).id}_colorpicker_dropdown`),
    c(hd, this).highlightColors)) {
        let a = document.createElement("button");
        (a.tabIndex = "0"),
            (a.role = "option"),
            a.setAttribute("data-color", s),
            (a.title = i),
            a.setAttribute("data-l10n-id", hv._[i]);
        let n = document.createElement("span");
        a.append(n),
            (n.className = "swatch"),
            (n.style.backgroundColor = s),
            (a.ariaSelected = s === c(hs, this)),
            a.addEventListener("click", r(hc, this, hg).bind(this, s), { signal: e }),
            t.append(a);
    }
    return t.addEventListener("keydown", r(hc, this, hf).bind(this), { signal: e }), t;
}
function hg(t, e) {
    e.stopPropagation(),
        c(hl, this).dispatch("switchannotationeditorparams", { source: this, type: x.HIGHLIGHT_COLOR, value: t }),
        this.updateColor(t);
}
function hf(t) {
    hu._keyboardManager.exec(this, t);
}
function hm(t) {
    if (hb.call(r(hc, this))) return void this.hideDropdown();
    if (
        (d(hn, this, 0 === t.detail),
        c(hh, this) ||
            (d(hh, this, new AbortController()),
            window.addEventListener("pointerdown", r(hc, this, hw).bind(this), {
                signal: c(hd, this).combinedSignal(c(hh, this)),
            })),
        (c(he, this).ariaExpanded = "true"),
        c(ha, this))
    )
        return void c(ha, this).classList.remove("hidden");
    let e = d(ha, this, r(hc, this, hp).call(this));
    c(he, this).append(e);
}
function hw(t) {
    c(ha, this)?.contains(t.target) || this.hideDropdown();
}
function hb() {
    return c(ha, this) && !c(ha, this).classList.contains("hidden");
}
var hv = { _: null },
    hA = new WeakMap(),
    hy = new WeakMap(),
    h_ = new WeakMap(),
    hx = class {
        constructor(t) {
            h(this, hA, null),
                h(this, hy, null),
                h(this, h_, null),
                d(hy, this, t),
                d(h_, this, t._uiManager),
                (hk._ ||= Object.freeze({
                    freetext: "pdfjs-editor-color-picker-free-text-input",
                    ink: "pdfjs-editor-color-picker-ink-input",
                }));
        }
        renderButton() {
            if (c(hA, this)) return c(hA, this);
            let { editorType: t, colorType: e, color: i } = c(hy, this),
                s = d(hA, this, document.createElement("input"));
            return (
                (s.type = "color"),
                (s.value = i || "#000000"),
                (s.className = "basicColorPicker"),
                (s.tabIndex = 0),
                s.setAttribute("data-l10n-id", hk._[t]),
                s.addEventListener(
                    "input",
                    () => {
                        c(h_, this).updateParams(e, s.value);
                    },
                    { signal: c(h_, this)._signal },
                ),
                s
            );
        }
        update(t) {
            c(hA, this) && (c(hA, this).value = t);
        }
        destroy() {
            c(hA, this)?.remove(), d(hA, this, null);
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
var hC = class {
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
                a = 1 - e,
                n = 1 - i;
            return ["CMYK", s, a, n, Math.min(s, a, n)];
        }
    },
    hE = class {
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
    hT = class extends hE {
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
                            return new hX(t);
                        case "Btn":
                            return t.data.radioButton ? new hK(t) : t.data.checkBox ? new hY(t) : new hQ(t);
                        case "Ch":
                            return new hJ(t);
                        case "Sig":
                            return new hq(t);
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
                    return new dq(t);
                case M.POLYGON:
                    return new dj(t);
                case M.HIGHLIGHT:
                    return new dK(t);
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
            l(this, hN),
                h(this, hL, null),
                h(this, hR, !1),
                h(this, hF, null),
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
                a = -1 / 0,
                n = -1 / 0;
            if (e?.length >= 8) {
                for (let t = 0; t < e.length; t += 8)
                    e[t + 1] > n ? ((n = e[t + 1]), (a = e[t + 2])) : e[t + 1] === n && (a = Math.max(a, e[t + 2]));
                return [a, n];
            }
            if (i?.length >= 1) {
                for (let t of i)
                    for (let e = 0, i = t.length; e < i; e += 2)
                        t[e + 1] > n ? ((n = t[e + 1]), (a = t[e])) : t[e + 1] === n && (a = Math.max(a, t[e]));
                if (a !== 1 / 0) return [a, n];
            }
            return s ? [s[2], s[3]] : null;
        }
        _normalizePoint(t) {
            let {
                page: { view: e },
                viewport: {
                    rawDims: { pageWidth: i, pageHeight: s, pageX: a, pageY: n },
                },
            } = this.parent;
            return (t[1] = e[3] - t[1] + e[1]), (t[0] = (100 * (t[0] - a)) / i), (t[1] = (100 * (t[1] - n)) / s), t;
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
            (c(hF, this)?.popup || this.popup)?.remove(), d(hF, this, (this.popup = null));
        }
        updateEdited(t) {
            if (!this.container) return;
            t.rect && (c(hL, this) || d(hL, this, { rect: this.data.rect.slice(0) }));
            let { rect: e, popup: i } = t;
            e && r(hN, this, hO).call(this, e);
            let s = c(hF, this)?.popup || this.popup;
            !s && i?.text && (this._createPopup(i), (s = c(hF, this).popup)),
                s && (s.updateEdited(t), i?.deleted && (s.remove(), d(hF, this, null), (this.popup = null)));
        }
        resetEdited() {
            c(hL, this) &&
                (r(hN, this, hO).call(this, c(hL, this).rect), c(hF, this)?.popup.resetEdited(), d(hL, this, null));
        }
        _createContainer(t) {
            let {
                    data: e,
                    parent: { page: i, viewport: s },
                } = this,
                a = document.createElement("section");
            a.setAttribute("data-annotation-id", e.id), this instanceof hV || this instanceof h$ || (a.tabIndex = 0);
            let { style: n } = a;
            if (
                ((n.zIndex = this.parent.zIndex),
                (this.parent.zIndex += 2),
                e.alternativeText && (a.title = e.alternativeText),
                e.noRotate && a.classList.add("norotate"),
                !e.rect || this instanceof h0)
            ) {
                let { rotation: t } = e;
                return e.hasOwnCanvas || 0 === t || this.setRotation(t, a), a;
            }
            let { width: r, height: o } = this;
            if (!t && e.borderStyle.width > 0) {
                n.borderWidth = `${e.borderStyle.width}px`;
                let t = e.borderStyle.horizontalCornerRadius,
                    i = e.borderStyle.verticalCornerRadius;
                switch (
                    (t > 0 || i > 0
                        ? (n.borderRadius = `calc(${t}px * var(--total-scale-factor)) / calc(${i}px * var(--total-scale-factor))`)
                        : this instanceof hK &&
                          (n.borderRadius = `calc(${r}px * var(--total-scale-factor)) / calc(${o}px * var(--total-scale-factor))`),
                    e.borderStyle.style)
                ) {
                    case 1:
                        n.borderStyle = "solid";
                        break;
                    case 2:
                        n.borderStyle = "dashed";
                        break;
                    case 3:
                        P("Unimplemented border style: beveled");
                        break;
                    case 4:
                        P("Unimplemented border style: inset");
                        break;
                    case 5:
                        n.borderBottomStyle = "solid";
                }
                let s = e.borderColor || null;
                s
                    ? (d(hR, this, !0), (n.borderColor = V.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2])))
                    : (n.borderWidth = 0);
            }
            let l = V.normalizeRect([
                    e.rect[0],
                    i.view[3] - e.rect[1] + i.view[1],
                    e.rect[2],
                    i.view[3] - e.rect[3] + i.view[1],
                ]),
                { pageWidth: h, pageHeight: c, pageX: u, pageY: p } = s.rawDims;
            (n.left = `${(100 * (l[0] - u)) / h}%`), (n.top = `${(100 * (l[1] - p)) / c}%`);
            let { rotation: g } = e;
            return (
                e.hasOwnCanvas || 0 === g
                    ? ((n.width = `${(100 * r) / h}%`), (n.height = `${(100 * o) / c}%`))
                    : this.setRotation(g, a),
                a
            );
        }
        setRotation(t, e = this.container) {
            if (!this.data.rect) return;
            let { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims,
                { width: a, height: n } = this;
            t % 180 != 0 && ([a, n] = [n, a]),
                (e.style.width = `${(100 * a) / i}%`),
                (e.style.height = `${(100 * n) / s}%`),
                e.setAttribute("data-main-rotation", (360 - t) % 360);
        }
        get _commonActions() {
            let t = (t, e, i) => {
                let s = i.detail[t],
                    a = s[0],
                    n = s.slice(1);
                (i.target.style[e] = hC[`${a}_HTML`](n)),
                    this.annotationStorage.setValue(this.data.id, { [e]: hC[`${a}_rgb`](n) });
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
            for (let [s, a] of Object.entries(e)) {
                let n = i[s];
                n && (n({ detail: { [s]: a }, target: t }), delete e[s]);
            }
        }
        _createQuadrilaterals() {
            if (!this.container) return;
            let { quadPoints: t } = this.data;
            if (!t) return;
            let [e, i, s, a] = this.data.rect.map((t) => Math.fround(t));
            if (8 === t.length) {
                let [n, r, o, l] = t.subarray(2, 6);
                if (s === n && a === r && e === o && i === l) return;
            }
            let { style: n } = this.container,
                r;
            if (c(hR, this)) {
                let { borderColor: t, borderWidth: e } = n;
                (n.borderWidth = 0),
                    (r = [
                        "url('data:image/svg+xml;utf8,",
                        '<svg xmlns="http://www.w3.org/2000/svg"',
                        ' preserveAspectRatio="none" viewBox="0 0 1 1">',
                        `<g fill="transparent" stroke="${t}" stroke-width="${e}">`,
                    ]),
                    this.container.classList.add("hasBorder");
            }
            let o = s - e,
                l = a - i,
                { svgFactory: h } = this,
                d = h.createElement("svg");
            d.classList.add("quadrilateralsContainer"),
                d.setAttribute("width", 0),
                d.setAttribute("height", 0),
                (d.role = "none");
            let u = h.createElement("defs");
            d.append(u);
            let p = h.createElement("clipPath"),
                g = `clippath_${this.data.id}`;
            p.setAttribute("id", g), p.setAttribute("clipPathUnits", "objectBoundingBox"), u.append(p);
            for (let i = 2, s = t.length; i < s; i += 8) {
                let s = t[i],
                    n = t[i + 1],
                    d = t[i + 2],
                    c = t[i + 3],
                    u = h.createElement("rect"),
                    g = (d - e) / o,
                    f = (a - n) / l,
                    m = (s - d) / o,
                    w = (n - c) / l;
                u.setAttribute("x", g),
                    u.setAttribute("y", f),
                    u.setAttribute("width", m),
                    u.setAttribute("height", w),
                    p.append(u),
                    r?.push(`<rect vector-effect="non-scaling-stroke" x="${g}" y="${f}" width="${m}" height="${w}"/>`);
            }
            c(hR, this) && (r.push("</g></svg>')"), (n.backgroundImage = r.join(""))),
                this.container.append(d),
                (this.container.style.clipPath = `url(#${g})`);
        }
        _createPopup(t = null) {
            let { data: e } = this,
                i,
                s;
            t ? ((i = { str: t.text }), (s = t.date)) : ((i = e.contentsObj), (s = e.modificationDate)),
                d(
                    hF,
                    this,
                    new h0({
                        data: {
                            color: e.color,
                            titleObj: e.titleObj,
                            modificationDate: s,
                            contentsObj: i,
                            richText: e.richText,
                            parentRect: e.rect,
                            borderStyle: 0,
                            id: `popup_${e.id}`,
                            rotation: e.rotation,
                            noRotate: !0,
                        },
                        linkService: this.linkService,
                        parent: this.parent,
                        elements: [this],
                    }),
                );
        }
        get hasPopupElement() {
            return !!(c(hF, this) || this.popup || this.data.popupRef);
        }
        get extraPopupElement() {
            return c(hF, this);
        }
        render() {
            D("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(t, e = null) {
            let i = [];
            if (this._fieldObjects) {
                let s = this._fieldObjects[t];
                if (s)
                    for (let { page: t, id: a, exportValues: n } of s) {
                        if (-1 === t || a === e) continue;
                        let s = "string" == typeof n ? n : null,
                            r = document.querySelector(`[data-element-id="${a}"]`);
                        if (r && !hP.has(r)) {
                            P(`_getElementsByName - element not allowed: ${a}`);
                            continue;
                        }
                        i.push({ id: a, exportValue: s, domElement: r });
                    }
                return i;
            }
            for (let s of document.getElementsByName(t)) {
                let { exportValue: t } = s,
                    a = s.getAttribute("data-element-id");
                a !== e && hP.has(s) && i.push({ id: a, exportValue: t, domElement: s });
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
                rawDims: { pageWidth: a, pageHeight: n, pageX: r, pageY: o },
            },
        },
    } = this;
    i?.splice(0, 4, ...t),
        (e.left = `${(100 * (t[0] - r)) / a}%`),
        (e.top = `${(100 * (n - t[3] + o)) / n}%`),
        0 === s
            ? ((e.width = `${(100 * (t[2] - t[0])) / a}%`), (e.height = `${(100 * (t[3] - t[1])) / n}%`))
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
                l(this, hU),
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
                        ? (r(hU, this, hj).call(this, i, t.attachment, t.overlaidText, t.attachmentDest), (s = !0))
                        : t.setOCGState
                          ? (r(hU, this, hz).call(this, i, t.setOCGState, t.overlaidText), (s = !0))
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
                (e || "" === e) && r(hU, this, hH).call(this),
                i && (t.title = i);
        }
        _bindNamedAction(t, e, i = "") {
            (t.href = this.linkService.getAnchorUrl("")),
                (t.onclick = () => (this.linkService.executeNamedAction(e), !1)),
                i && (t.title = i),
                r(hU, this, hH).call(this);
        }
        _bindJSAction(t, e) {
            t.href = this.linkService.getAnchorUrl("");
            let i = new Map([
                ["Action", "onclick"],
                ["Mouse Up", "onmouseup"],
                ["Mouse Down", "onmousedown"],
            ]);
            for (let s of Object.keys(e.actions)) {
                let a = i.get(s);
                a &&
                    (t[a] = () => (
                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: { id: e.id, name: s },
                        }),
                        !1
                    ));
            }
            e.overlaidText && (t.title = e.overlaidText), (t.onclick ||= () => !1), r(hU, this, hH).call(this);
        }
        _bindResetFormAction(t, e) {
            let i = t.onclick;
            if ((i || (t.href = this.linkService.getAnchorUrl("")), r(hU, this, hH).call(this), !this._fieldObjects)) {
                P(
                    '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.',
                ),
                    i || (t.onclick = () => !1);
                return;
            }
            t.onclick = () => {
                i?.();
                let { fields: t, refs: s, include: a } = e,
                    n = [];
                if (0 !== t.length || 0 !== s.length) {
                    let e = new Set(s);
                    for (let i of t) for (let { id: t } of this._fieldObjects[i] || []) e.add(t);
                    for (let t of Object.values(this._fieldObjects)) for (let i of t) e.has(i.id) === a && n.push(i);
                } else for (let t of Object.values(this._fieldObjects)) n.push(...t);
                let r = this.annotationStorage,
                    o = [];
                for (let t of n) {
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
        r(hU, this, hH).call(this);
}
function hz(t, e, i = "") {
    (t.href = this.linkService.getAnchorUrl("")),
        (t.onclick = () => (this.linkService.executeSetOCGState(e), !1)),
        i && (t.title = i),
        r(hU, this, hH).call(this);
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
        _setEventListener(t, e, i, s, a) {
            i.includes("mouse")
                ? t.addEventListener(i, (t) => {
                      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                              id: this.data.id,
                              name: s,
                              value: a(t),
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
                      a &&
                          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                              source: this,
                              detail: { id: this.data.id, name: s, value: a(t) },
                          });
                  });
        }
        _setEventListeners(t, e, i, s) {
            for (let [a, n] of i)
                ("Action" === n || this.data.actions?.[n]) &&
                    (("Focus" === n || "Blur" === n) && (e ||= { focused: !1 }),
                    this._setEventListener(t, e, a, n, s),
                    "Focus" !== n || this.data.actions?.Blur
                        ? "Blur" !== n ||
                          this.data.actions?.Focus ||
                          this._setEventListener(t, e, "focus", "Focus", null)
                        : this._setEventListener(t, e, "blur", "Blur", null));
        }
        _setBackgroundColor(t) {
            let e = this.data.backgroundColor || null;
            t.style.backgroundColor = null === e ? "transparent" : V.makeHexColor(e[0], e[1], e[2]);
        }
        _setTextStyle(t) {
            let { fontColor: e } = this.data.defaultAppearanceData,
                i = this.data.defaultAppearanceData.fontSize || 9,
                s = t.style,
                a,
                n = (t) => Math.round(10 * t) / 10;
            if (this.data.multiLine) {
                let t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2),
                    e = t / (Math.round(t / (1.35 * i)) || 1);
                a = Math.min(i, n(e / 1.35));
            } else a = Math.min(i, n(Math.abs(this.data.rect[3] - this.data.rect[1] - 2) / 1.35));
            (s.fontSize = `calc(${a}px * var(--total-scale-factor))`),
                (s.color = V.makeHexColor(e[0], e[1], e[2])),
                null !== this.data.textAlignment &&
                    (s.textAlign = ["left", "center", "right"][this.data.textAlignment]);
        }
        _setRequired(t, e) {
            e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
        }
    },
    hX = class extends hV {
        constructor(t) {
            let e = t.renderForms || t.data.hasOwnCanvas || (!t.data.hasAppearance && !!t.data.fieldValue);
            super(t, { isRenderable: e });
        }
        setPropertyOnSiblings(t, e, i, s) {
            let a = this.annotationStorage;
            for (let n of this._getElementsByName(t.name, t.id))
                n.domElement && (n.domElement[e] = i), a.setValue(n.id, { [s]: i });
        }
        render() {
            let t = this.annotationStorage,
                e = this.data.id;
            this.container.classList.add("textWidgetAnnotation");
            let i = null;
            if (this.renderForms) {
                let s = t.getValue(e, { value: this.data.fieldValue }),
                    a = s.value || "",
                    n = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
                n && a.length > n && (a = a.slice(0, n));
                let r = s.formattedValue || this.data.textContent?.join("\n") || null;
                r && this.data.comb && (r = r.replaceAll(/\s+/g, ""));
                let o = { userValue: a, formattedValue: r, lastCommittedValue: null, commitKey: 1, focused: !1 };
                this.data.multiLine
                    ? (((i = document.createElement("textarea")).textContent = r ?? a),
                      this.data.doNotScroll && (i.style.overflowY = "hidden"))
                    : (((i = document.createElement("input")).type = this.data.password ? "password" : "text"),
                      i.setAttribute("value", r ?? a),
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
                    n && (i.maxLength = n),
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
                                            let a = { formattedValue: s };
                                            c && (a.value = s), t.setValue(e, a);
                                        },
                                        selRange(t) {
                                            t.target.setSelectionRange(...t.detail.selRange);
                                        },
                                        charLimit: (i) => {
                                            let { charLimit: s } = i.detail,
                                                { target: a } = i;
                                            if (0 === s) return void a.removeAttribute("maxLength");
                                            a.setAttribute("maxLength", s);
                                            let n = o.userValue;
                                            !n ||
                                                n.length <= s ||
                                                ((a.value = o.userValue = n = n.slice(0, s)),
                                                t.setValue(e, { value: n }),
                                                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                    source: this,
                                                    detail: {
                                                        id: e,
                                                        name: "Keystroke",
                                                        value: n,
                                                        willCommit: !0,
                                                        commitKey: 1,
                                                        selStart: a.selectionStart,
                                                        selEnd: a.selectionEnd,
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
                                { value: a } = i;
                            if (c) {
                                if (a && "time" === h) {
                                    let t = a.split(":").map((t) => parseInt(t, 10));
                                    (a = new Date(2e3, 0, 1, t[0], t[1], t[2] || 0).valueOf()), (i.step = "");
                                } else a.includes("T") || (a = `${a}T00:00`), (a = new Date(a).valueOf());
                                i.type = "text";
                            }
                            (o.userValue = a),
                                o.lastCommittedValue !== a &&
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e,
                                            name: "Keystroke",
                                            value: a,
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
                                    { value: a, selectionStart: n, selectionEnd: r } = s,
                                    l = n,
                                    h = r;
                                switch (t.inputType) {
                                    case "deleteWordBackward": {
                                        let t = a.substring(0, n).match(/\w*[^\w]*$/);
                                        t && (l -= t[0].length);
                                        break;
                                    }
                                    case "deleteWordForward": {
                                        let t = a.substring(n).match(/^[^\w]*\w*/);
                                        t && (h += t[0].length);
                                        break;
                                    }
                                    case "deleteContentBackward":
                                        n === r && --l;
                                        break;
                                    case "deleteContentForward":
                                        n === r && (h += 1);
                                }
                                t.preventDefault(),
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e,
                                            name: "Keystroke",
                                            value: a,
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
                    let t = (this.data.rect[2] - this.data.rect[0]) / n;
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
    hq = class extends hV {
        constructor(t) {
            super(t, { isRenderable: !!t.data.hasOwnCanvas });
        }
    },
    hY = class extends hV {
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
            let a = document.createElement("input");
            return (
                hP.add(a),
                a.setAttribute("data-element-id", i),
                (a.disabled = e.readOnly),
                this._setRequired(a, this.data.required),
                (a.type = "checkbox"),
                (a.name = e.fieldName),
                s && a.setAttribute("checked", !0),
                a.setAttribute("exportValue", e.exportValue),
                (a.tabIndex = 0),
                a.addEventListener("change", (s) => {
                    let { name: a, checked: n } = s.target;
                    for (let s of this._getElementsByName(a, i)) {
                        let i = n && s.exportValue === e.exportValue;
                        s.domElement && (s.domElement.checked = i), t.setValue(s.id, { value: i });
                    }
                    t.setValue(i, { value: n });
                }),
                a.addEventListener("resetform", (t) => {
                    let i = e.defaultFieldValue || "Off";
                    t.target.checked = i === e.exportValue;
                }),
                this.enableScripting &&
                    this.hasJSActions &&
                    (a.addEventListener("updatefromsandbox", (e) => {
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
                        a,
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
                this._setBackgroundColor(a),
                this._setDefaultPropertiesFromJS(a),
                this.container.append(a),
                this.container
            );
        }
    },
    hK = class extends hV {
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
            let a = document.createElement("input");
            if (
                (hP.add(a),
                a.setAttribute("data-element-id", i),
                (a.disabled = e.readOnly),
                this._setRequired(a, this.data.required),
                (a.type = "radio"),
                (a.name = e.fieldName),
                s && a.setAttribute("checked", !0),
                (a.tabIndex = 0),
                a.addEventListener("change", (e) => {
                    let { name: s, checked: a } = e.target;
                    for (let e of this._getElementsByName(s, i)) t.setValue(e.id, { value: !1 });
                    t.setValue(i, { value: a });
                }),
                a.addEventListener("resetform", (t) => {
                    let i = e.defaultFieldValue;
                    t.target.checked = null != i && i === e.buttonValue;
                }),
                this.enableScripting && this.hasJSActions)
            ) {
                let s = e.buttonValue;
                a.addEventListener("updatefromsandbox", (e) => {
                    this._dispatchEventFromSandbox(
                        {
                            value: (e) => {
                                let a = s === e.detail.value;
                                for (let s of this._getElementsByName(e.target.name)) {
                                    let e = a && s.id === i;
                                    s.domElement && (s.domElement.checked = e), t.setValue(s.id, { value: e });
                                }
                            },
                        },
                        e,
                    );
                }),
                    this._setEventListeners(
                        a,
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
                this._setBackgroundColor(a),
                this._setDefaultPropertiesFromJS(a),
                this.container.append(a),
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
            let a = this.data.combo && this.data.options.length > 0;
            for (let t of (this.data.combo ||
                ((s.size = this.data.options.length), this.data.multiSelect && (s.multiple = !0)),
            s.addEventListener("resetform", (t) => {
                let e = this.data.defaultFieldValue;
                for (let t of s.options) t.selected = t.value === e;
            }),
            this.data.options)) {
                let e = document.createElement("option");
                (e.textContent = t.displayValue),
                    (e.value = t.exportValue),
                    i.value.includes(t.exportValue) && (e.setAttribute("selected", !0), (a = !1)),
                    s.append(e);
            }
            let n = null;
            if (a) {
                let t = document.createElement("option");
                (t.value = " "),
                    t.setAttribute("hidden", !0),
                    t.setAttribute("selected", !0),
                    s.prepend(t),
                    (n = () => {
                        t.remove(), s.removeEventListener("input", n), (n = null);
                    }),
                    s.addEventListener("input", n);
            }
            let r = (t) => {
                    let e = t ? "value" : "textContent",
                        { options: i, multiple: a } = s;
                    return a
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
                                      n?.();
                                      let a = i.detail.value,
                                          l = new Set(Array.isArray(a) ? a : [a]);
                                      for (let t of s.options) t.selected = l.has(t.value);
                                      t.setValue(e, { value: r(!0) }), (o = r(!1));
                                  },
                                  multipleSelection(t) {
                                      s.multiple = !0;
                                  },
                                  remove(i) {
                                      let a = s.options,
                                          n = i.detail.remove;
                                      (a[n].selected = !1),
                                          s.remove(n),
                                          a.length > 0 &&
                                              -1 === Array.prototype.findIndex.call(a, (t) => t.selected) &&
                                              (a[0].selected = !0),
                                          t.setValue(e, { value: r(!0), items: l(i) }),
                                          (o = r(!1));
                                  },
                                  clear(i) {
                                      for (; 0 !== s.length; ) s.remove(0);
                                      t.setValue(e, { value: null, items: [] }), (o = r(!1));
                                  },
                                  insert(i) {
                                      let { index: a, displayValue: n, exportValue: h } = i.detail.insert,
                                          d = s.children[a],
                                          c = document.createElement("option");
                                      (c.textContent = n),
                                          (c.value = h),
                                          d ? d.before(c) : s.append(c),
                                          t.setValue(e, { value: r(!0), items: l(i) }),
                                          (o = r(!1));
                                  },
                                  items(i) {
                                      let { items: a } = i.detail;
                                      for (; 0 !== s.length; ) s.remove(0);
                                      for (let t of a) {
                                          let { displayValue: e, exportValue: i } = t,
                                              a = document.createElement("option");
                                          (a.textContent = e), (a.value = i), s.append(a);
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
                              a = r(!1);
                          t.setValue(e, { value: s }),
                              i.preventDefault(),
                              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                  source: this,
                                  detail: {
                                      id: e,
                                      name: "Keystroke",
                                      value: o,
                                      change: a,
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
            let { data: e, elements: i, parent: s } = t,
                a = !!s._commentManager;
            if (
                (super(t, { isRenderable: !a && hB._hasPopupData(e) }),
                l(this, hZ),
                (this.elements = i),
                a && hB._hasPopupData(e))
            ) {
                let t = (this.popup = r(hZ, this, h1).call(this));
                for (let e of i) e.popup = t;
            } else this.popup = null;
        }
        render() {
            let { container: t } = this;
            t.classList.add("popupAnnotation"), (t.role = "comment");
            let e = (this.popup = r(hZ, this, h1).call(this)),
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
    da = new WeakMap(),
    dn = new WeakMap(),
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
            modificationDate: a,
            contentsObj: n,
            richText: o,
            parent: u,
            rect: p,
            parentRect: g,
            open: f,
            commentManager: m = null,
        }) {
            l(this, dv),
                h(this, h2, null),
                h(this, h3, r(dv, this, dT).bind(this)),
                h(this, h5, r(dv, this, dL).bind(this)),
                h(this, h4, r(dv, this, dI).bind(this)),
                h(this, h6, r(dv, this, dD).bind(this)),
                h(this, h8, null),
                h(this, h7, null),
                h(this, h9, null),
                h(this, dt, null),
                h(this, de, null),
                h(this, di, null),
                h(this, ds, null),
                h(this, da, !1),
                h(this, dn, null),
                h(this, dr, null),
                h(this, dl, null),
                h(this, dh, null),
                h(this, dd, null),
                h(this, dc, null),
                h(this, du, null),
                h(this, dp, null),
                h(this, dg, null),
                h(this, df, null),
                h(this, dm, !1),
                h(this, dw, null),
                h(this, db, null),
                d(h7, this, t),
                d(dg, this, s),
                d(h9, this, n),
                d(dp, this, o),
                d(di, this, u),
                d(h8, this, e),
                d(du, this, p),
                d(ds, this, g),
                d(de, this, i),
                d(h2, this, m),
                d(dw, this, i[0]),
                d(dt, this, tp.toDateObject(a)),
                (this.trigger = i.flatMap((t) => t.getElementsToTriggerPopup())),
                m || (r(dv, this, dy).call(this), (c(h7, this).hidden = !0), f && r(dv, this, dD).call(this));
        }
        renderCommentButton() {
            if (c(dh, this)) {
                c(dh, this).parentNode || c(dw, this).container.after(c(dh, this));
                return;
            }
            if ((c(dd, this) || r(dv, this, d_).call(this), !c(dd, this))) return;
            let { signal: t } = d(dr, this, new AbortController()),
                e = c(dw, this).hasOwnCommentButton,
                i = () => {
                    c(h2, this).toggleCommentPopup(this, !0, void 0, !e);
                },
                s = () => {
                    c(h2, this).toggleCommentPopup(this, !1, !0, !e);
                },
                a = () => {
                    c(h2, this).toggleCommentPopup(this, !1, !1);
                };
            if (e)
                for (let e of (d(dh, this, c(dw, this).container), this.trigger))
                    (e.ariaHasPopup = "dialog"),
                        (e.ariaControls = "commentPopup"),
                        e.addEventListener("keydown", c(h3, this), { signal: t }),
                        e.addEventListener("click", i, { signal: t }),
                        e.addEventListener("pointerenter", s, { signal: t }),
                        e.addEventListener("pointerleave", a, { signal: t }),
                        e.classList.add("popupTriggerArea");
            else {
                let e = d(dh, this, document.createElement("button"));
                e.className = "annotationCommentButton";
                let n = c(dw, this).container;
                (e.style.zIndex = n.style.zIndex + 1),
                    (e.tabIndex = 0),
                    (e.ariaHasPopup = "dialog"),
                    (e.ariaControls = "commentPopup"),
                    e.setAttribute("data-l10n-id", "pdfjs-show-comment-button"),
                    r(dv, this, dk).call(this),
                    r(dv, this, dx).call(this),
                    e.addEventListener("keydown", c(h3, this), { signal: t }),
                    e.addEventListener("click", i, { signal: t }),
                    e.addEventListener("pointerenter", s, { signal: t }),
                    e.addEventListener("pointerleave", a, { signal: t }),
                    n.after(e);
            }
        }
        get commentButtonColor() {
            let { color: t, opacity: e } = c(dw, this).commentData;
            return t ? c(di, this)._commentManager.makeCommentColor(t, e) : null;
        }
        focusCommentButton() {
            setTimeout(() => {
                c(dh, this)?.focus();
            }, 0);
        }
        getData() {
            let { richText: t, color: e, opacity: i, creationDate: s, modificationDate: a } = c(dw, this).commentData;
            return {
                contentsObj: { str: this.comment },
                richText: t,
                color: e,
                opacity: i,
                creationDate: s,
                modificationDate: a,
            };
        }
        get elementBeforePopup() {
            return c(dh, this);
        }
        get comment() {
            return c(db, this) || d(db, this, c(dw, this).commentText), c(db, this);
        }
        set comment(t) {
            t !== this.comment && (c(dw, this).commentText = d(db, this, t));
        }
        focus() {
            c(dw, this).container?.focus();
        }
        get parentBoundingClientRect() {
            return c(dw, this).layer.getBoundingClientRect();
        }
        setCommentButtonStates({ selected: t, hasPopup: e }) {
            c(dh, this) && (c(dh, this).classList.toggle("selected", t), (c(dh, this).ariaExpanded = e));
        }
        setSelectedCommentButton(t) {
            c(dh, this).classList.toggle("selected", t);
        }
        get commentPopupPosition() {
            if (c(dc, this)) return c(dc, this);
            let { x: t, y: e, height: i } = c(dh, this).getBoundingClientRect(),
                { x: s, y: a, width: n, height: r } = c(dw, this).layer.getBoundingClientRect();
            return [(t - s) / n, (e + i - a) / r];
        }
        set commentPopupPosition(t) {
            d(dc, this, t);
        }
        hasDefaultPopupPosition() {
            return null === c(dc, this);
        }
        get commentButtonPosition() {
            return c(dd, this);
        }
        get commentButtonWidth() {
            return c(dh, this).getBoundingClientRect().width / this.parentBoundingClientRect.width;
        }
        editComment(t) {
            let [e, i] = c(dc, this) || this.commentButtonPosition.map((t) => t / 100),
                s = this.parentBoundingClientRect,
                { x: a, y: n, width: r, height: o } = s;
            c(h2, this).showDialog(null, this, a + e * r, n + i * o, { ...t, parentDimensions: s });
        }
        render() {
            if (c(dn, this)) return;
            let t = d(dn, this, document.createElement("div"));
            if (((t.className = "popup"), c(h8, this))) {
                let e = (t.style.outlineColor = V.makeHexColor(...c(h8, this)));
                t.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)`;
            }
            let e = document.createElement("span");
            if (((e.className = "header"), c(dg, this)?.str)) {
                let t = document.createElement("span");
                (t.className = "title"), e.append(t), ({ dir: t.dir, str: t.textContent } = c(dg, this));
            }
            if ((t.append(e), c(dt, this))) {
                let t = document.createElement("time");
                (t.className = "popupDate"),
                    t.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"),
                    t.setAttribute("data-l10n-args", JSON.stringify({ dateObj: c(dt, this).valueOf() })),
                    (t.dateTime = c(dt, this).toISOString()),
                    e.append(t);
            }
            tE({ html: dM.call(r(dv, this)) || c(h9, this).str, dir: c(h9, this)?.dir, className: "popupContent" }, t),
                c(h7, this).append(t);
        }
        updateEdited({ rect: t, popup: e, deleted: i }) {
            if (c(h2, this)) {
                i
                    ? (this.remove(), d(db, this, null))
                    : e && (e.deleted ? this.remove() : (r(dv, this, dk).call(this), d(db, this, e.text))),
                    t && (d(dd, this, null), r(dv, this, d_).call(this), r(dv, this, dx).call(this));
                return;
            }
            i || e?.deleted
                ? this.remove()
                : (r(dv, this, dy).call(this),
                  c(df, this) || d(df, this, { contentsObj: c(h9, this), richText: c(dp, this) }),
                  t && d(dl, this, null),
                  e &&
                      e.text &&
                      (d(dp, this, r(dv, this, dE).call(this, e.text)),
                      d(dt, this, tp.toDateObject(e.date)),
                      d(h9, this, null)),
                  c(dn, this)?.remove(),
                  d(dn, this, null));
        }
        resetEdited() {
            c(df, this) &&
                (({ contentsObj: u(d, [h9, this])._, richText: u(d, [dp, this])._ } = c(df, this)),
                d(df, this, null),
                c(dn, this)?.remove(),
                d(dn, this, null),
                d(dl, this, null));
        }
        remove() {
            if (
                (c(dr, this)?.abort(),
                d(dr, this, null),
                c(dn, this)?.remove(),
                d(dn, this, null),
                d(dm, this, !1),
                d(da, this, !1),
                c(dh, this)?.remove(),
                d(dh, this, null),
                this.trigger)
            )
                for (let t of this.trigger) t.classList.remove("popupTriggerArea");
        }
        forceHide() {
            d(dm, this, this.isVisible), c(dm, this) && (c(h7, this).hidden = !0);
        }
        maybeShow() {
            c(h2, this) ||
                (r(dv, this, dy).call(this),
                c(dm, this) && (c(dn, this) || r(dv, this, dI).call(this), d(dm, this, !1), (c(h7, this).hidden = !1)));
        }
        get isVisible() {
            return !c(h2, this) && !1 === c(h7, this).hidden;
        }
    };
function dy() {
    if (c(dr, this)) return;
    d(dr, this, new AbortController());
    let { signal: t } = c(dr, this);
    for (let e of this.trigger)
        e.addEventListener("click", c(h6, this), { signal: t }),
            e.addEventListener("pointerenter", c(h4, this), { signal: t }),
            e.addEventListener("pointerleave", c(h5, this), { signal: t }),
            e.classList.add("popupTriggerArea");
    for (let e of c(de, this)) e.container?.addEventListener("keydown", c(h3, this), { signal: t });
}
function d_() {
    let t = c(de, this).find((t) => t.hasCommentButton);
    t && d(dd, this, t._normalizePoint(t.commentButtonPosition));
}
function dx() {
    if (c(dw, this).extraPopupElement && !c(dw, this).editor) return;
    c(dh, this) || this.renderCommentButton();
    let [t, e] = c(dd, this),
        { style: i } = c(dh, this);
    (i.left = `calc(${t}%)`), (i.top = `calc(${e}% - var(--comment-button-dim))`);
}
function dk() {
    c(dw, this).extraPopupElement ||
        (c(dh, this) || this.renderCommentButton(),
        (c(dh, this).style.backgroundColor = this.commentButtonColor || ""));
}
function dM() {
    let t = c(dp, this),
        e = c(h9, this);
    return (t?.str && (!e?.str || e.str === t.str) && c(dp, this).html) || null;
}
function dS() {
    return dM.call(r(dv, this))?.attributes?.style?.fontSize || 0;
}
function dC() {
    return dM.call(r(dv, this))?.attributes?.style?.color || null;
}
function dE(t) {
    let e = [],
        i = {
            style: {
                color: dC.call(r(dv, this)),
                fontSize: dS.call(r(dv, this)) ? `calc(${dS.call(r(dv, this))}px * var(--total-scale-factor))` : "",
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
        (("Enter" === t.key || ("Escape" === t.key && c(da, this))) && r(dv, this, dD).call(this));
}
function dP() {
    if (null !== c(dl, this)) return;
    let {
            page: { view: t },
            viewport: {
                rawDims: { pageWidth: e, pageHeight: i, pageX: s, pageY: a },
            },
        } = c(di, this),
        n = !!c(ds, this),
        r = c(n ? ds : du, this);
    for (let t of c(de, this))
        if (!r || null !== V.intersect(t.data.rect, r)) {
            (r = t.data.rect), (n = !0);
            break;
        }
    let o = V.normalizeRect([r[0], t[3] - r[1] + t[1], r[2], t[3] - r[3] + t[1]]),
        l = n ? r[2] - r[0] + 5 : 0;
    d(dl, this, [(100 * (o[0] + l - s)) / e, (100 * (o[1] - a)) / i]);
    let { style: h } = c(h7, this);
    (h.left = `${c(dl, this)[0]}%`), (h.top = `${c(dl, this)[1]}%`);
}
function dD() {
    c(h2, this)
        ? c(h2, this).toggleCommentPopup(this, !1)
        : (d(da, this, !c(da, this)),
          c(da, this)
              ? (r(dv, this, dI).call(this),
                c(h7, this).addEventListener("click", c(h6, this)),
                c(h7, this).addEventListener("keydown", c(h3, this)))
              : (r(dv, this, dL).call(this),
                c(h7, this).removeEventListener("click", c(h6, this)),
                c(h7, this).removeEventListener("keydown", c(h3, this))));
}
function dI() {
    c(dn, this) || this.render(),
        this.isVisible
            ? c(da, this) && c(h7, this).classList.add("focused")
            : (r(dv, this, dP).call(this),
              (c(h7, this).hidden = !1),
              (c(h7, this).style.zIndex = parseInt(c(h7, this).style.zIndex) + 1e3));
}
function dL() {
    c(h7, this).classList.remove("focused"),
        c(da, this) ||
            !this.isVisible ||
            ((c(h7, this).hidden = !0), (c(h7, this).style.zIndex = parseInt(c(h7, this).style.zIndex) - 1e3));
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
            super(t, { isRenderable: !0, ignoreBorder: !0 }), h(this, dF, null);
        }
        render() {
            this.container.classList.add("lineAnnotation");
            let { data: t, width: e, height: i } = this,
                s = this.svgFactory.create(e, i, !0),
                a = d(dF, this, this.svgFactory.createElement("svg:line"));
            return (
                a.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]),
                a.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]),
                a.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]),
                a.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]),
                a.setAttribute("stroke-width", t.borderStyle.width || 1),
                a.setAttribute("stroke", "transparent"),
                a.setAttribute("fill", "transparent"),
                s.append(a),
                this.container.append(s),
                !t.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return c(dF, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    dB = new WeakMap(),
    dO = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), h(this, dB, null);
        }
        render() {
            this.container.classList.add("squareAnnotation");
            let { data: t, width: e, height: i } = this,
                s = this.svgFactory.create(e, i, !0),
                a = t.borderStyle.width,
                n = d(dB, this, this.svgFactory.createElement("svg:rect"));
            return (
                n.setAttribute("x", a / 2),
                n.setAttribute("y", a / 2),
                n.setAttribute("width", e - a),
                n.setAttribute("height", i - a),
                n.setAttribute("stroke-width", a || 1),
                n.setAttribute("stroke", "transparent"),
                n.setAttribute("fill", "transparent"),
                s.append(n),
                this.container.append(s),
                !t.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return c(dB, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    dW = new WeakMap(),
    dU = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }), h(this, dW, null);
        }
        render() {
            this.container.classList.add("circleAnnotation");
            let { data: t, width: e, height: i } = this,
                s = this.svgFactory.create(e, i, !0),
                a = t.borderStyle.width,
                n = d(dW, this, this.svgFactory.createElement("svg:ellipse"));
            return (
                n.setAttribute("cx", e / 2),
                n.setAttribute("cy", i / 2),
                n.setAttribute("rx", e / 2 - a / 2),
                n.setAttribute("ry", i / 2 - a / 2),
                n.setAttribute("stroke-width", a || 1),
                n.setAttribute("stroke", "transparent"),
                n.setAttribute("fill", "transparent"),
                s.append(n),
                this.container.append(s),
                !t.popupRef && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container
            );
        }
        getElementsToTriggerPopup() {
            return c(dW, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    },
    d$ = new WeakMap(),
    dH = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }),
                h(this, d$, null),
                (this.containerClassName = "polylineAnnotation"),
                (this.svgElementName = "svg:polyline");
        }
        render() {
            this.container.classList.add(this.containerClassName);
            let {
                data: { rect: t, vertices: e, borderStyle: i, popupRef: s },
                width: a,
                height: n,
            } = this;
            if (!e) return this.container;
            let r = this.svgFactory.create(a, n, !0),
                o = [];
            for (let i = 0, s = e.length; i < s; i += 2) {
                let s = e[i] - t[0],
                    a = t[3] - e[i + 1];
                o.push(`${s},${a}`);
            }
            o = o.join(" ");
            let l = d(d$, this, this.svgFactory.createElement(this.svgElementName));
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
            return c(d$, this);
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
    dX = new WeakSet(),
    dq = class extends hB {
        constructor(t) {
            super(t, { isRenderable: !0, ignoreBorder: !0 }),
                l(this, dX),
                h(this, dG, null),
                h(this, dV, []),
                (this.containerClassName = "inkAnnotation"),
                (this.svgElementName = "svg:polyline"),
                (this.annotationEditorType = "InkHighlight" === this.data.it ? _.HIGHLIGHT : _.INK);
        }
        render() {
            this.container.classList.add(this.containerClassName);
            let {
                    data: { rect: t, rotation: e, inkLists: i, borderStyle: s, popupRef: a },
                } = this,
                { transform: n, width: o, height: l } = r(dX, this, dY).call(this, e, t),
                h = this.svgFactory.create(o, l, !0),
                u = d(dG, this, this.svgFactory.createElement("svg:g"));
            h.append(u),
                u.setAttribute("stroke-width", s.width || 1),
                u.setAttribute("stroke-linecap", "round"),
                u.setAttribute("stroke-linejoin", "round"),
                u.setAttribute("stroke-miterlimit", 10),
                u.setAttribute("stroke", "transparent"),
                u.setAttribute("fill", "transparent"),
                u.setAttribute("transform", n);
            for (let t = 0, e = i.length; t < e; t++) {
                let e = this.svgFactory.createElement(this.svgElementName);
                c(dV, this).push(e), e.setAttribute("points", i[t].join(",")), u.append(e);
            }
            return (
                !a && this.hasPopupData && ((this.hasOwnCommentButton = !0), this._createPopup()),
                this.container.append(h),
                this._editOnDoubleClick(),
                this.container
            );
        }
        updateEdited(t) {
            super.updateEdited(t);
            let { thickness: e, points: i, rect: s } = t,
                a = c(dG, this);
            if ((e >= 0 && a.setAttribute("stroke-width", e || 1), i))
                for (let t = 0, e = c(dV, this).length; t < e; t++)
                    c(dV, this)[t].setAttribute("points", i[t].join(","));
            if (s) {
                let { transform: t, width: e, height: i } = r(dX, this, dY).call(this, this.data.rotation, s);
                a.parentElement.setAttribute("viewBox", `0 0 ${e} ${i}`), a.setAttribute("transform", t);
            }
        }
        getElementsToTriggerPopup() {
            return c(dV, this);
        }
        addHighlightArea() {
            this.container.classList.add("highlightArea");
        }
    };
function dY(t, e) {
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
var dK = class extends hB {
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
            super(t, { isRenderable: !0 }), l(this, d2), h(this, d1, null);
            let { file: e } = this.data;
            (this.filename = e.filename),
                (this.content = e.content),
                this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, ...e });
        }
        render() {
            this.container.classList.add("fileAttachmentAnnotation");
            let { container: t, data: e } = this,
                i;
            e.hasAppearance || 0 === e.fillAlpha
                ? (i = document.createElement("div"))
                : (((i = document.createElement("img")).src =
                      `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`),
                  e.fillAlpha && e.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(100 * e.fillAlpha)}%);`)),
                i.addEventListener("dblclick", r(d2, this, d5).bind(this)),
                d(d1, this, i);
            let { isMac: s } = z.platform;
            return (
                t.addEventListener("keydown", (t) => {
                    "Enter" === t.key && (s ? t.metaKey : t.ctrlKey) && r(d2, this, d5).call(this);
                }),
                !e.popupRef && this.hasPopupData
                    ? ((this.hasOwnCommentButton = !0), this._createPopup())
                    : i.classList.add("popupTriggerArea"),
                t.append(i),
                t
            );
        }
        getElementsToTriggerPopup() {
            return c(d1, this);
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
    ca = class t {
        constructor({
            div: t,
            accessibilityManager: e,
            annotationCanvasMap: i,
            annotationEditorUIManager: s,
            page: a,
            viewport: n,
            structTreeLayer: r,
            commentManager: o,
            linkService: c,
            annotationStorage: u,
        }) {
            l(this, cs),
                h(this, d4, null),
                h(this, d6, null),
                h(this, d8, null),
                h(this, d7, new Map()),
                h(this, d9, null),
                h(this, ct, null),
                h(this, ce, []),
                h(this, ci, !1),
                (this.div = t),
                d(d4, this, e),
                d(d6, this, i),
                d(d9, this, r || null),
                d(ct, this, c || null),
                d(d8, this, u || new ar()),
                (this.page = a),
                (this.viewport = n),
                (this.zIndex = 0),
                (this._annotationEditorUIManager = s),
                (this._commentManager = o || null);
        }
        hasEditableAnnotations() {
            return c(d7, this).size > 0;
        }
        async render(t) {
            let { annotations: e } = t,
                i = this.div;
            tb(i, this.viewport);
            let s = new Map(),
                a = [],
                n = {
                    data: null,
                    layer: i,
                    linkService: c(ct, this),
                    downloadManager: t.downloadManager,
                    imageResourcesPath: t.imageResourcesPath || "",
                    renderForms: !1 !== t.renderForms,
                    svgFactory: new hT(),
                    annotationStorage: c(d8, this),
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
                        a.push(t);
                        continue;
                    }
                    n.elements = e;
                } else if (t.rect[2] === t.rect[0] || t.rect[3] === t.rect[1]) continue;
                n.data = t;
                let i = hI.create(n);
                if (!i.isRenderable) continue;
                if (!e && (c(ce, this).push(i), t.popupRef)) {
                    let e = s.get(t.popupRef);
                    e ? e.push(i) : s.set(t.popupRef, [i]);
                }
                let r = i.render();
                t.hidden && (r.style.visibility = "hidden"),
                    i._isEditable &&
                        (c(d7, this).set(i.data.id, i), this._annotationEditorUIManager?.renderAnnotationElement(i));
            }
            for (let t of (await r(cs, this, cn).call(this), a)) {
                let e = (n.elements = s.get(t.id));
                n.data = t;
                let i = hI.create(n);
                if (!i.isRenderable) continue;
                let a = i.render();
                (i.contentElement.id = `${J}${t.id}`),
                    t.hidden && (a.style.visibility = "hidden"),
                    e.at(-1).container.after(a);
            }
            r(cs, this, cr).call(this);
        }
        async addLinkAnnotations(e) {
            let i = { data: null, layer: this.div, linkService: c(ct, this), svgFactory: new hT(), parent: this };
            for (let s of e) {
                (s.borderStyle ||= t._defaultBorderStyle), (i.data = s);
                let e = hI.create(i);
                e.isRenderable && (e.render(), (e.contentElement.id = `${J}${s.id}`), c(ce, this).push(e));
            }
            await r(cs, this, cn).call(this);
        }
        update({ viewport: t }) {
            let e = this.div;
            (this.viewport = t), tb(e, { rotation: t.rotation }), r(cs, this, cr).call(this), (e.hidden = !1);
        }
        getEditableAnnotations() {
            return Array.from(c(d7, this).values());
        }
        getEditableAnnotation(t) {
            return c(d7, this).get(t);
        }
        addFakeAnnotation(t) {
            let { div: e } = this,
                { id: i, rotation: s } = t,
                a = new hW({
                    data: { id: i, rect: t.getPDFRect(), rotation: s },
                    editor: t,
                    layer: e,
                    parent: this,
                    enableComment: !!this._commentManager,
                    linkService: c(ct, this),
                    annotationStorage: c(d8, this),
                });
            return a.render(), (a.contentElement.id = `${J}${i}`), a.createOrUpdatePopup(), c(ce, this).push(a), a;
        }
        removeAnnotation(t) {
            let e = c(ce, this).findIndex((e) => e.data.id === t);
            if (e < 0) return;
            let [i] = c(ce, this).splice(e, 1);
            c(d4, this)?.removePointerInTextLayer(i.contentElement);
        }
        updateFakeAnnotations(t) {
            if (0 !== t.length) {
                for (let e of t) e.updateFakeAnnotationElement(this);
                r(cs, this, cn).call(this);
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
async function cn() {
    if (0 === c(ce, this).length) return;
    this.div.replaceChildren();
    let t = [];
    if (!c(ci, this))
        for (let {
            contentElement: e,
            data: { id: i },
        } of (d(ci, this, !0), c(ce, this))) {
            let s = (e.id = `${J}${i}`);
            t.push(
                c(d9, this)
                    ?.getAriaAttributes(s)
                    .then((t) => {
                        if (t) for (let [i, s] of t) e.setAttribute(i, s);
                    }),
            );
        }
    c(ce, this).sort(
        (
            {
                data: {
                    rect: [t, e, i, s],
                },
            },
            {
                data: {
                    rect: [a, n, r, o],
                },
            },
        ) => {
            if (t === i && e === s) return 1;
            if (a === r && n === o) return -1;
            let l = (e + s) / 2,
                h = (n + o) / 2;
            return l >= o && h <= e ? -1 : h >= s && l <= n ? 1 : (t + i) / 2 - (a + r) / 2;
        },
    );
    let e = document.createDocumentFragment();
    for (let t of c(ce, this))
        e.append(t.container),
            this._commentManager
                ? (t.extraPopupElement?.popup || t.popup)?.renderCommentButton()
                : t.extraPopupElement && e.append(t.extraPopupElement.render());
    if ((this.div.append(e), await Promise.all(t), c(d4, this)))
        for (let t of c(ce, this)) c(d4, this).addPointerInTextLayer(t.contentElement, !1);
}
function cr() {
    if (!c(d6, this)) return;
    let t = this.div;
    for (let [e, i] of c(d6, this)) {
        let s = t.querySelector(`[data-annotation-id="${e}"]`);
        if (!s) continue;
        i.className = "annotationContent";
        let { firstChild: a } = s;
        a
            ? "CANVAS" === a.nodeName
                ? a.replaceWith(i)
                : a.classList.contains("annotationContent")
                  ? a.after(i)
                  : a.before(i)
            : s.append(i);
        let n = c(d7, this).get(e);
        n &&
            (n._hasNoCanvas
                ? (this._annotationEditorUIManager?.setMissingCanvas(e, s.id, i), (n._hasNoCanvas = !1))
                : (n.canvas = i));
    }
    c(d6, this).clear();
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
                a = ih.TRANSLATE_BIG;
            return F(
                this,
                "_keyboardManager",
                new ev([
                    [["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, { bubbles: !0 }],
                    [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove],
                    [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, { args: [-s, 0], checker: i }],
                    [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, { args: [-a, 0], checker: i }],
                    [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, { args: [s, 0], checker: i }],
                    [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, { args: [a, 0], checker: i }],
                    [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, { args: [0, -s], checker: i }],
                    [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, { args: [0, -a], checker: i }],
                    [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, { args: [0, s], checker: i }],
                    [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, { args: [0, a], checker: i }],
                ]),
            );
        }
        constructor(e) {
            super({ ...e, name: "freeTextEditor" }),
                l(this, cu),
                h(this, cl, ""),
                h(this, ch, `${this.id}-editor`),
                h(this, cd, null),
                h(this, cc, void 0),
                (0, s.t)(this, "_colorPicker", null),
                (this.color = e.color || t._defaultColor || sH._defaultLineColor),
                d(cc, this, e.fontSize || t._defaultFontSize),
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
                    r(cu, this, cg).call(this, e);
                    break;
                case x.FREETEXT_COLOR:
                    r(cu, this, cf).call(this, e);
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
                [x.FREETEXT_SIZE, c(cc, this)],
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
            return [-t._internalPadding * e, -(t._internalPadding + c(cc, this)) * e];
        }
        rebuild() {
            this.parent && (super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this)));
        }
        enableEditMode() {
            if (!super.enableEditMode()) return !1;
            this.overlayDiv.classList.remove("enabled"),
                (this.editorDiv.contentEditable = !0),
                (this._isDraggable = !1),
                this.div.removeAttribute("aria-activedescendant"),
                d(cd, this, new AbortController());
            let t = this._uiManager.combinedSignal(c(cd, this));
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
                this.div.setAttribute("aria-activedescendant", c(ch, this)),
                (this._isDraggable = !0),
                c(cd, this)?.abort(),
                d(cd, this, null),
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
            let t = c(cl, this),
                e = d(cl, this, r(cu, this, cm).call(this).trimEnd());
            if (t === e) return;
            let i = (t) => {
                (d(cl, this, t), t)
                    ? (r(cu, this, cv).call(this), this._uiManager.rebuild(this), r(cu, this, cw).call(this))
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
                r(cu, this, cw).call(this);
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
                this.editorDiv.setAttribute("id", c(ch, this)),
                this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"),
                this.editorDiv.setAttribute("data-l10n-attrs", "default-content"),
                this.enableEditing(),
                (this.editorDiv.contentEditable = !0);
            let { style: i } = this.editorDiv;
            if (
                ((i.fontSize = `calc(${c(cc, this)}px * var(--total-scale-factor))`),
                (i.color = this.color),
                this.div.append(this.editorDiv),
                (this.overlayDiv = document.createElement("div")),
                this.overlayDiv.classList.add("overlay", "enabled"),
                this.div.append(this.overlayDiv),
                this._isCopy || this.annotationElementId)
            ) {
                let [i, s] = this.parentDimensions;
                if (this.annotationElementId) {
                    let { position: a } = this._initialData,
                        [n, r] = this.getInitialTranslation();
                    [n, r] = this.pageTranslationToScreen(n, r);
                    let [o, l] = this.pageDimensions,
                        [h, d] = this.pageTranslation,
                        c,
                        u;
                    switch (this.rotation) {
                        case 0:
                            (c = t + (a[0] - h) / o), (u = e + this.height - (a[1] - d) / l);
                            break;
                        case 90:
                            (c = t + (a[0] - h) / o), (u = e - (a[1] - d) / l), ([n, r] = [r, -n]);
                            break;
                        case 180:
                            (c = t - this.width + (a[0] - h) / o), (u = e - (a[1] - d) / l), ([n, r] = [-n, -r]);
                            break;
                        case 270:
                            (c = t + (a[0] - h - this.height * l) / o),
                                (u = e + (a[1] - d - this.width * o) / l),
                                ([n, r] = [-r, n]);
                    }
                    this.setAt(c * i, u * s, n, r);
                } else this._moveAfterPaste(t, e);
                r(cu, this, cv).call(this), (this._isDraggable = !0), (this.editorDiv.contentEditable = !1);
            } else (this._isDraggable = !1), (this.editorDiv.contentEditable = !0);
            return this.div;
        }
        editorDivPaste(e) {
            let i = e.clipboardData || window.clipboardData,
                { types: s } = i;
            if (1 === s.length && "text/plain" === s[0]) return;
            e.preventDefault();
            let a = cy.call(t, i.getData("text") || "").replaceAll(co, "\n");
            if (!a) return;
            let n = window.getSelection();
            if (!n.rangeCount) return;
            this.editorDiv.normalize(), n.deleteFromDocument();
            let o = n.getRangeAt(0);
            if (!a.includes("\n")) {
                o.insertNode(document.createTextNode(a)), this.editorDiv.normalize(), n.collapseToStart();
                return;
            }
            let { startContainer: l, startOffset: h } = o,
                c = [],
                u = [];
            if (l.nodeType === Node.TEXT_NODE) {
                let e = l.parentElement;
                if ((u.push(l.nodeValue.slice(h).replaceAll(co, "")), e !== this.editorDiv)) {
                    let i = c;
                    for (let s of this.editorDiv.childNodes) {
                        if (s === e) {
                            i = u;
                            continue;
                        }
                        i.push(cb.call(t, s));
                    }
                }
                c.push(l.nodeValue.slice(0, h).replaceAll(co, ""));
            } else if (l === this.editorDiv) {
                let e = c,
                    i = 0;
                for (let s of this.editorDiv.childNodes) i++ === h && (e = u), e.push(cb.call(t, s));
            }
            d(cl, this, `${c.join("\n")}${a}${u.join("\n")}`), r(cu, this, cv).call(this);
            let p = new Range(),
                g = Math.sumPrecise(c.map((t) => t.length));
            for (let { firstChild: t } of this.editorDiv.childNodes)
                if (t.nodeType === Node.TEXT_NODE) {
                    let e = t.nodeValue.length;
                    if (g <= e) {
                        p.setStart(t, g), p.setEnd(t, g);
                        break;
                    }
                    g -= e;
                }
            n.removeAllRanges(), n.addRange(p);
        }
        get contentDiv() {
            return this.editorDiv;
        }
        getPDFRect() {
            let e = t._internalPadding * this.parentScale;
            return this.getRect(e, e);
        }
        static async deserialize(e, i, s) {
            let a = null;
            if (e instanceof dR) {
                let {
                    data: {
                        defaultAppearanceData: { fontSize: t, fontColor: i },
                        rect: s,
                        rotation: n,
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
                a = e = {
                    annotationType: _.FREETEXT,
                    color: Array.from(i),
                    fontSize: t,
                    value: u.join("\n"),
                    position: p,
                    pageIndex: g - 1,
                    rect: s.slice(0),
                    rotation: n,
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
            let n = await super.deserialize(e, i, s);
            return (
                d(cc, n, e.fontSize),
                (n.color = V.makeHexColor(...e.color)),
                d(cl, n, cy.call(t, e.value)),
                (n._initialData = a),
                e.comment && n.setCommentData(e),
                n
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
                    fontSize: c(cc, this),
                    value: r(cu, this, cA).call(this),
                });
            return (
                this.addComment(i),
                t
                    ? ((i.isCopy = !0), i)
                    : this.annotationElementId && !r(cu, this, c_).call(this, i)
                      ? null
                      : ((i.id = this.annotationElementId), i)
            );
        }
        renderAnnotationElement(t) {
            let e = super.renderAnnotationElement(t);
            if (!e) return null;
            let { style: i } = e;
            for (let t of ((i.fontSize = `calc(${c(cc, this)}px * var(--total-scale-factor))`),
            (i.color = this.color),
            e.replaceChildren(),
            c(cl, this).split("\n"))) {
                let i = document.createElement("div");
                i.append(t ? document.createTextNode(t) : document.createElement("br")), e.append(i);
            }
            return (
                t.updateEdited({
                    rect: this.getPDFRect(),
                    popup:
                        this._uiManager.hasCommentManager() || this.hasEditedComment
                            ? this.comment
                            : { text: c(cl, this) },
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
                this.translate(0, -(t - c(cc, this)) * this.parentScale),
                d(cc, this, t),
                r(cu, this, cw).call(this);
        },
        i = c(cc, this);
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
        (e?.nodeType === Node.TEXT_NODE && "BR" === i.nodeName) || (t.push(cb.call(cp, i)), (e = i));
    return t.join("\n");
}
function cw() {
    let [t, e] = this.parentDimensions,
        i;
    if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
    else {
        let { currentLayer: t, div: e } = this,
            s = e.style.display,
            a = e.classList.contains("hidden");
        e.classList.remove("hidden"),
            (e.style.display = "hidden"),
            t.div.append(this.div),
            (i = e.getBoundingClientRect()),
            e.remove(),
            (e.style.display = s),
            e.classList.toggle("hidden", a);
    }
    this.rotation % 180 == this.parentRotation % 180
        ? ((this.width = i.width / t), (this.height = i.height / e))
        : ((this.width = i.height / t), (this.height = i.width / e)),
        this.fixAndSetPosition();
}
function cb(t) {
    return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(co, "");
}
function cv() {
    if ((this.editorDiv.replaceChildren(), c(cl, this)))
        for (let t of c(cl, this).split("\n")) {
            let e = document.createElement("div");
            e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e);
        }
}
function cA() {
    return c(cl, this).replaceAll("\xa0", " ");
}
function cy(t) {
    return t.replaceAll(" ", "\xa0");
}
function c_(t) {
    let { value: e, fontSize: i, color: s, pageIndex: a } = this._initialData;
    return (
        this.hasEditedComment ||
        this._hasBeenMoved ||
        t.value !== e ||
        t.fontSize !== i ||
        t.color.some((t, e) => t !== s[e]) ||
        t.pageIndex !== a
    );
}
(0, s.t)(cp, "_freeTextDefaultContent", ""),
    (0, s.t)(cp, "_internalPadding", 0),
    (0, s.t)(cp, "_defaultColor", null),
    (0, s.t)(cp, "_defaultFontSize", 10),
    (0, s.t)(cp, "_type", "freetext"),
    (0, s.t)(cp, "_editorType", _.FREETEXT);
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
    static _rescale(t, e, i, s, a, n) {
        n ||= new Float32Array(t.length);
        for (let r = 0, o = t.length; r < o; r += 2) (n[r] = e + t[r] * s), (n[r + 1] = i + t[r + 1] * a);
        return n;
    }
    static _rescaleAndSwap(t, e, i, s, a, n) {
        n ||= new Float32Array(t.length);
        for (let r = 0, o = t.length; r < o; r += 2) (n[r] = e + t[r + 1] * s), (n[r + 1] = i + t[r] * a);
        return n;
    }
    static _translate(t, e, i, s) {
        s ||= new Float32Array(t.length);
        for (let a = 0, n = t.length; a < n; a += 2) (s[a] = e + t[a]), (s[a + 1] = i + t[a + 1]);
        return s;
    }
    static svgRound(t) {
        return Math.round(1e4 * t);
    }
    static _normalizePoint(t, e, i, s, a) {
        switch (a) {
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
    static createBezierPoints(t, e, i, s, a, n) {
        return [(t + 5 * i) / 6, (e + 5 * s) / 6, (5 * i + a) / 6, (5 * s + n) / 6, (i + a) / 2, (s + n) / 2];
    }
};
(0, s.t)(cx, "PRECISION", 1e-4);
var ck = new WeakMap(),
    cM = new WeakMap(),
    cS = new WeakMap(),
    cC = new WeakMap(),
    cE = new WeakMap(),
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
        constructor({ x: t, y: e }, i, s, a, n, r = 0) {
            l(this, cB),
                h(this, ck, void 0),
                h(this, cM, []),
                h(this, cS, void 0),
                h(this, cC, void 0),
                h(this, cE, []),
                h(this, cT, new Float32Array(18)),
                h(this, cP, void 0),
                h(this, cD, void 0),
                h(this, cI, void 0),
                h(this, cL, void 0),
                h(this, cR, void 0),
                h(this, cF, void 0),
                h(this, cN, []),
                d(ck, this, i),
                d(cF, this, a * s),
                d(cC, this, n),
                c(cT, this).set([NaN, NaN, NaN, NaN, t, e], 6),
                d(cS, this, r),
                d(cL, this, cV._ * s),
                d(cI, this, cX._ * s),
                d(cR, this, s),
                c(cN, this).push(t, e);
        }
        isEmpty() {
            return isNaN(c(cT, this)[8]);
        }
        add({ x: t, y: e }) {
            d(cP, this, t), d(cD, this, e);
            let [i, s, a, n] = c(ck, this),
                [r, o, l, h] = c(cT, this).subarray(8, 12),
                u = t - l,
                p = e - h,
                g = Math.hypot(u, p);
            if (g < c(cI, this)) return !1;
            let f = g - c(cL, this),
                m = f / g,
                w = m * u,
                b = m * p,
                v = r,
                A = o;
            (r = l), (o = h), (l += w), (h += b), c(cN, this)?.push(t, e);
            let y = (-b / f) * c(cF, this),
                _ = (w / f) * c(cF, this);
            return (
                c(cT, this).set(c(cT, this).subarray(2, 8), 0),
                c(cT, this).set([l + y, h + _], 4),
                c(cT, this).set(c(cT, this).subarray(14, 18), 12),
                c(cT, this).set([l - y, h - _], 16),
                isNaN(c(cT, this)[6])
                    ? (0 === c(cE, this).length &&
                          (c(cT, this).set([r + y, o + _], 2),
                          c(cE, this).push(NaN, NaN, NaN, NaN, (r + y - i) / a, (o + _ - s) / n),
                          c(cT, this).set([r - y, o - _], 14),
                          c(cM, this).push(NaN, NaN, NaN, NaN, (r - y - i) / a, (o - _ - s) / n)),
                      c(cT, this).set([v, A, r, o, l, h], 6),
                      !this.isEmpty())
                    : (c(cT, this).set([v, A, r, o, l, h], 6),
                      Math.abs(Math.atan2(A - o, v - r) - Math.atan2(b, w)) < Math.PI / 2
                          ? (([r, o, l, h] = c(cT, this).subarray(2, 6)),
                            c(cE, this).push(NaN, NaN, NaN, NaN, ((r + l) / 2 - i) / a, ((o + h) / 2 - s) / n),
                            ([r, o, v, A] = c(cT, this).subarray(14, 18)),
                            c(cM, this).push(NaN, NaN, NaN, NaN, ((v + r) / 2 - i) / a, ((A + o) / 2 - s) / n))
                          : (([v, A, r, o, l, h] = c(cT, this).subarray(0, 6)),
                            c(cE, this).push(
                                ((v + 5 * r) / 6 - i) / a,
                                ((A + 5 * o) / 6 - s) / n,
                                ((5 * r + l) / 6 - i) / a,
                                ((5 * o + h) / 6 - s) / n,
                                ((r + l) / 2 - i) / a,
                                ((o + h) / 2 - s) / n,
                            ),
                            ([l, h, r, o, v, A] = c(cT, this).subarray(12, 18)),
                            c(cM, this).push(
                                ((v + 5 * r) / 6 - i) / a,
                                ((A + 5 * o) / 6 - s) / n,
                                ((5 * r + l) / 6 - i) / a,
                                ((5 * o + h) / 6 - s) / n,
                                ((r + l) / 2 - i) / a,
                                ((o + h) / 2 - s) / n,
                            )),
                      !0)
            );
        }
        toSVGPath() {
            if (this.isEmpty()) return "";
            let t = c(cE, this),
                e = c(cM, this);
            if (isNaN(c(cT, this)[6]) && !this.isEmpty()) return r(cB, this, cU).call(this);
            let i = [];
            i.push(`M${t[4]} ${t[5]}`);
            for (let e = 6; e < t.length; e += 6)
                isNaN(t[e])
                    ? i.push(`L${t[e + 4]} ${t[e + 5]}`)
                    : i.push(`C${t[e]} ${t[e + 1]} ${t[e + 2]} ${t[e + 3]} ${t[e + 4]} ${t[e + 5]}`);
            r(cB, this, cH).call(this, i);
            for (let t = e.length - 6; t >= 6; t -= 6)
                isNaN(e[t])
                    ? i.push(`L${e[t + 4]} ${e[t + 5]}`)
                    : i.push(`C${e[t]} ${e[t + 1]} ${e[t + 2]} ${e[t + 3]} ${e[t + 4]} ${e[t + 5]}`);
            return r(cB, this, c$).call(this, i), i.join(" ");
        }
        newFreeDrawOutline(t, e, i, s, a, n) {
            return new c2(t, e, i, s, a, n);
        }
        getOutlines() {
            let t = c(cE, this),
                e = c(cM, this),
                i = c(cT, this),
                [s, a, n, o] = c(ck, this),
                l = new Float32Array((c(cN, this)?.length ?? 0) + 2);
            for (let t = 0, e = l.length - 2; t < e; t += 2)
                (l[t] = (c(cN, this)[t] - s) / n), (l[t + 1] = (c(cN, this)[t + 1] - a) / o);
            if (
                ((l[l.length - 2] = (c(cP, this) - s) / n),
                (l[l.length - 1] = (c(cD, this) - a) / o),
                isNaN(i[6]) && !this.isEmpty())
            )
                return r(cB, this, cj).call(this, l);
            let h = new Float32Array(c(cE, this).length + 24 + c(cM, this).length),
                d = t.length;
            for (let e = 0; e < d; e += 2) {
                if (isNaN(t[e])) {
                    h[e] = h[e + 1] = NaN;
                    continue;
                }
                (h[e] = t[e]), (h[e + 1] = t[e + 1]);
            }
            d = r(cB, this, cG).call(this, h, d);
            for (let t = e.length - 6; t >= 6; t -= 6)
                for (let i = 0; i < 6; i += 2) {
                    if (isNaN(e[t + i])) {
                        (h[d] = h[d + 1] = NaN), (d += 2);
                        continue;
                    }
                    (h[d] = e[t + i]), (h[d + 1] = e[t + i + 1]), (d += 2);
                }
            return (
                r(cB, this, cz).call(this, h, d),
                this.newFreeDrawOutline(h, l, c(ck, this), c(cR, this), c(cS, this), c(cC, this))
            );
        }
    };
function cW() {
    let t = c(cT, this).subarray(4, 6),
        e = c(cT, this).subarray(16, 18),
        [i, s, a, n] = c(ck, this);
    return [
        (c(cP, this) + (t[0] - e[0]) / 2 - i) / a,
        (c(cD, this) + (t[1] - e[1]) / 2 - s) / n,
        (c(cP, this) + (e[0] - t[0]) / 2 - i) / a,
        (c(cD, this) + (e[1] - t[1]) / 2 - s) / n,
    ];
}
function cU() {
    let [t, e, i, s] = c(ck, this),
        [a, n, o, l] = r(cB, this, cW).call(this);
    return `M${(c(cT, this)[2] - t) / i} ${(c(cT, this)[3] - e) / s} L${(c(cT, this)[4] - t) / i} ${(c(cT, this)[5] - e) / s} L${a} ${n} L${o} ${l} L${(c(cT, this)[16] - t) / i} ${(c(cT, this)[17] - e) / s} L${(c(cT, this)[14] - t) / i} ${(c(cT, this)[15] - e) / s} Z`;
}
function c$(t) {
    let e = c(cM, this);
    t.push(`L${e[4]} ${e[5]} Z`);
}
function cH(t) {
    let [e, i, s, a] = c(ck, this),
        n = c(cT, this).subarray(4, 6),
        o = c(cT, this).subarray(16, 18),
        [l, h, d, u] = r(cB, this, cW).call(this);
    t.push(`L${(n[0] - e) / s} ${(n[1] - i) / a} L${l} ${h} L${d} ${u} L${(o[0] - e) / s} ${(o[1] - i) / a}`);
}
function cj(t) {
    let e = c(cT, this),
        [i, s, a, n] = c(ck, this),
        [o, l, h, d] = r(cB, this, cW).call(this),
        u = new Float32Array(36);
    return (
        u.set(
            [
                NaN,
                NaN,
                NaN,
                NaN,
                (e[2] - i) / a,
                (e[3] - s) / n,
                NaN,
                NaN,
                NaN,
                NaN,
                (e[4] - i) / a,
                (e[5] - s) / n,
                NaN,
                NaN,
                NaN,
                NaN,
                o,
                l,
                NaN,
                NaN,
                NaN,
                NaN,
                h,
                d,
                NaN,
                NaN,
                NaN,
                NaN,
                (e[16] - i) / a,
                (e[17] - s) / n,
                NaN,
                NaN,
                NaN,
                NaN,
                (e[14] - i) / a,
                (e[15] - s) / n,
            ],
            0,
        ),
        this.newFreeDrawOutline(u, t, c(ck, this), c(cR, this), c(cS, this), c(cC, this))
    );
}
function cz(t, e) {
    let i = c(cM, this);
    return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), (e += 6);
}
function cG(t, e) {
    let i = c(cT, this).subarray(4, 6),
        s = c(cT, this).subarray(16, 18),
        [a, n, o, l] = c(ck, this),
        [h, d, u, p] = r(cB, this, cW).call(this);
    return (
        t.set(
            [
                NaN,
                NaN,
                NaN,
                NaN,
                (i[0] - a) / o,
                (i[1] - n) / l,
                NaN,
                NaN,
                NaN,
                NaN,
                h,
                d,
                NaN,
                NaN,
                NaN,
                NaN,
                u,
                p,
                NaN,
                NaN,
                NaN,
                NaN,
                (s[0] - a) / o,
                (s[1] - n) / l,
            ],
            e,
        ),
        (e += 24)
    );
}
var cV = { _: 8 },
    cX = { _: cV._ + 2 },
    cq = new WeakMap(),
    cY = new WeakMap(),
    cK = new WeakMap(),
    cQ = new WeakMap(),
    cJ = new WeakMap(),
    cZ = new WeakMap(),
    c0 = new WeakMap(),
    c1 = new WeakSet(),
    c2 = class extends cx {
        constructor(t, e, i, s, a, n) {
            super(),
                l(this, c1),
                h(this, cq, void 0),
                h(this, cY, new Float32Array(4)),
                h(this, cK, void 0),
                h(this, cQ, void 0),
                h(this, cJ, void 0),
                h(this, cZ, void 0),
                h(this, c0, void 0),
                d(c0, this, t),
                d(cJ, this, e),
                d(cq, this, i),
                d(cZ, this, s),
                d(cK, this, a),
                d(cQ, this, n),
                (this.firstPoint = [NaN, NaN]),
                (this.lastPoint = [NaN, NaN]),
                r(c1, this, c3).call(this, n);
            let [o, u, p, g] = c(cY, this);
            for (let e = 0, i = t.length; e < i; e += 2) (t[e] = (t[e] - o) / p), (t[e + 1] = (t[e + 1] - u) / g);
            for (let t = 0, i = e.length; t < i; t += 2) (e[t] = (e[t] - o) / p), (e[t + 1] = (e[t + 1] - u) / g);
        }
        toSVGPath() {
            let t = [`M${c(c0, this)[4]} ${c(c0, this)[5]}`];
            for (let e = 6, i = c(c0, this).length; e < i; e += 6) {
                if (isNaN(c(c0, this)[e])) {
                    t.push(`L${c(c0, this)[e + 4]} ${c(c0, this)[e + 5]}`);
                    continue;
                }
                t.push(
                    `C${c(c0, this)[e]} ${c(c0, this)[e + 1]} ${c(c0, this)[e + 2]} ${c(c0, this)[e + 3]} ${c(c0, this)[e + 4]} ${c(c0, this)[e + 5]}`,
                );
            }
            return t.push("Z"), t.join(" ");
        }
        serialize([t, e, i, s], a) {
            let n = i - t,
                r = s - e,
                o,
                l;
            switch (a) {
                case 0:
                    (o = cx._rescale(c(c0, this), t, s, n, -r)), (l = cx._rescale(c(cJ, this), t, s, n, -r));
                    break;
                case 90:
                    (o = cx._rescaleAndSwap(c(c0, this), t, e, n, r)),
                        (l = cx._rescaleAndSwap(c(cJ, this), t, e, n, r));
                    break;
                case 180:
                    (o = cx._rescale(c(c0, this), i, e, -n, r)), (l = cx._rescale(c(cJ, this), i, e, -n, r));
                    break;
                case 270:
                    (o = cx._rescaleAndSwap(c(c0, this), i, s, -n, -r)),
                        (l = cx._rescaleAndSwap(c(cJ, this), i, s, -n, -r));
            }
            return { outline: Array.from(o), points: [Array.from(l)] };
        }
        get box() {
            return c(cY, this);
        }
        newOutliner(t, e, i, s, a, n = 0) {
            return new cO(t, e, i, s, a, n);
        }
        getNewOutline(t, e) {
            let [i, s, a, n] = c(cY, this),
                [r, o, l, h] = c(cq, this),
                d = a * l,
                u = n * h,
                p = i * l + r,
                g = s * h + o,
                f = this.newOutliner(
                    { x: c(cJ, this)[0] * d + p, y: c(cJ, this)[1] * u + g },
                    c(cq, this),
                    c(cZ, this),
                    t,
                    c(cQ, this),
                    e ?? c(cK, this),
                );
            for (let t = 2; t < c(cJ, this).length; t += 2)
                f.add({ x: c(cJ, this)[t] * d + p, y: c(cJ, this)[t + 1] * u + g });
            return f.getOutlines();
        }
    };
function c3(t) {
    let e = c(c0, this),
        i = e[4],
        s = e[5],
        a = [i, s, i, s],
        n = i,
        r = s,
        o = i,
        l = s,
        h = t ? Math.max : Math.min,
        d = new Float32Array(4);
    for (let t = 6, c = e.length; t < c; t += 6) {
        let c = e[t + 4],
            u = e[t + 5];
        isNaN(e[t])
            ? (V.pointBoundingBox(c, u, a),
              r > u ? ((n = c), (r = u)) : r === u && (n = h(n, c)),
              l < u ? ((o = c), (l = u)) : l === u && (o = h(o, c)))
            : ((d[0] = d[1] = 1 / 0),
              (d[2] = d[3] = -1 / 0),
              V.bezierBoundingBox(i, s, ...e.slice(t, t + 6), d),
              V.rectBoundingBox(d[0], d[1], d[2], d[3], a),
              r > d[1] ? ((n = d[0]), (r = d[1])) : r === d[1] && (n = h(n, d[0])),
              l < d[3] ? ((o = d[2]), (l = d[3])) : l === d[3] && (o = h(o, d[2]))),
            (i = c),
            (s = u);
    }
    let u = c(cY, this);
    (u[0] = a[0] - c(cK, this)),
        (u[1] = a[1] - c(cK, this)),
        (u[2] = a[2] - a[0] + 2 * c(cK, this)),
        (u[3] = a[3] - a[1] + 2 * c(cK, this)),
        (this.firstPoint = [n, r]),
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
            l(this, c9),
                h(this, c5, void 0),
                h(this, c4, void 0),
                h(this, c6, void 0),
                h(this, c8, []),
                h(this, c7, []);
            let a = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            for (let { x: i, y: s, width: n, height: r } of t) {
                let t = 1e-4 * Math.floor((i - e) / 1e-4),
                    o = 1e-4 * Math.ceil((i + n + e) / 1e-4),
                    l = 1e-4 * Math.floor((s - e) / 1e-4),
                    h = 1e-4 * Math.ceil((s + r + e) / 1e-4),
                    d = [t, l, h, !0],
                    u = [o, l, h, !1];
                c(c8, this).push(d, u), V.rectBoundingBox(t, l, o, h, a);
            }
            let n = a[2] - a[0] + 2 * i,
                r = a[3] - a[1] + 2 * i,
                o = a[0] - i,
                u = a[1] - i,
                p = s ? -1 / 0 : 1 / 0,
                g = 1 / 0,
                f = c(c8, this).at(s ? -1 : -2),
                m = [f[0], f[2]];
            for (let t of c(c8, this)) {
                let [e, i, a, l] = t;
                !l && s
                    ? i < g
                        ? ((g = i), (p = e))
                        : i === g && (p = Math.max(p, e))
                    : l && !s && (i < g ? ((g = i), (p = e)) : i === g && (p = Math.min(p, e))),
                    (t[0] = (e - o) / n),
                    (t[1] = (i - u) / r),
                    (t[2] = (a - u) / r);
            }
            d(c5, this, new Float32Array([o, u, n, r])), d(c4, this, [p, g]), d(c6, this, m);
        }
        getOutlines() {
            c(c8, this).sort((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]);
            let t = [];
            for (let e of c(c8, this))
                e[3]
                    ? (t.push(...r(c9, this, un).call(this, e)), r(c9, this, us).call(this, e))
                    : (r(c9, this, ua).call(this, e), t.push(...r(c9, this, un).call(this, e)));
            return r(c9, this, ue).call(this, t);
        }
    };
function ue(t) {
    let e = [],
        i = new Set();
    for (let i of t) {
        let [t, s, a] = i;
        e.push([t, s, i], [t, a, i]);
    }
    e.sort((t, e) => t[1] - e[1] || t[0] - e[0]);
    for (let t = 0, s = e.length; t < s; t += 2) {
        let s = e[t][2],
            a = e[t + 1][2];
        s.push(a), a.push(s), i.add(s), i.add(a);
    }
    let s = [],
        a;
    for (; i.size > 0; ) {
        let t = i.values().next().value,
            [e, n, r, o, l] = t;
        i.delete(t);
        let h = e,
            d = n;
        for (a = [e, r], s.push(a); ; ) {
            let t;
            if (i.has(o)) t = o;
            else if (i.has(l)) t = l;
            else break;
            i.delete(t),
                ([e, n, r, o, l] = t),
                h !== e && (a.push(h, d, e, d === n ? n : r), (h = e)),
                (d = d === n ? r : n);
        }
        a.push(h, d);
    }
    return new ul(s, c(c5, this), c(c4, this), c(c6, this));
}
function ui(t) {
    let e = c(c7, this),
        i = 0,
        s = e.length - 1;
    for (; i <= s; ) {
        let a = (i + s) >> 1,
            n = e[a][0];
        if (n === t) return a;
        n < t ? (i = a + 1) : (s = a - 1);
    }
    return s + 1;
}
function us([, t, e]) {
    let i = r(c9, this, ui).call(this, t);
    c(c7, this).splice(i, 0, [t, e]);
}
function ua([, t, e]) {
    let i = r(c9, this, ui).call(this, t);
    for (let s = i; s < c(c7, this).length; s++) {
        let [i, a] = c(c7, this)[s];
        if (i !== t) break;
        if (i === t && a === e) return void c(c7, this).splice(s, 1);
    }
    for (let s = i - 1; s >= 0; s--) {
        let [i, a] = c(c7, this)[s];
        if (i !== t) break;
        if (i === t && a === e) return void c(c7, this).splice(s, 1);
    }
}
function un(t) {
    let [e, i, s] = t,
        a = [[e, i, s]],
        n = r(c9, this, ui).call(this, s);
    for (let t = 0; t < n; t++) {
        let [i, s] = c(c7, this)[t];
        for (let t = 0, n = a.length; t < n; t++) {
            let [, r, o] = a[t];
            if (!(s <= r || o <= i)) {
                if (r >= i) {
                    if (o > s) a[t][1] = s;
                    else {
                        if (1 === n) return [];
                        a.splice(t, 1), t--, n--;
                    }
                    continue;
                }
                (a[t][2] = i), o > s && a.push([e, s, o]);
            }
        }
    }
    return a;
}
var ur = new WeakMap(),
    uo = new WeakMap(),
    ul = class extends cx {
        constructor(t, e, i, s) {
            super(),
                h(this, ur, void 0),
                h(this, uo, void 0),
                d(uo, this, t),
                d(ur, this, e),
                (this.firstPoint = i),
                (this.lastPoint = s);
        }
        toSVGPath() {
            let t = [];
            for (let e of c(uo, this)) {
                let [i, s] = e;
                t.push(`M${i} ${s}`);
                for (let a = 2; a < e.length; a += 2) {
                    let n = e[a],
                        r = e[a + 1];
                    n === i ? (t.push(`V${r}`), (s = r)) : r === s && (t.push(`H${n}`), (i = n));
                }
                t.push("Z");
            }
            return t.join(" ");
        }
        serialize([t, e, i, s], a) {
            let n = [],
                r = i - t,
                o = s - e;
            for (let e of c(uo, this)) {
                let i = Array(e.length);
                for (let a = 0; a < e.length; a += 2) (i[a] = t + e[a] * r), (i[a + 1] = s - e[a + 1] * o);
                n.push(i);
            }
            return n;
        }
        get box() {
            return c(ur, this);
        }
        get classNamesForOutlining() {
            return ["highlightOutline"];
        }
    },
    uh = class extends cO {
        newFreeDrawOutline(t, e, i, s, a, n) {
            return new ud(t, e, i, s, a, n);
        }
    },
    ud = class extends c2 {
        newOutliner(t, e, i, s, a, n = 0) {
            return new uh(t, e, i, s, a, n);
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
    uC = new WeakMap(),
    uE = new WeakMap(),
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
                l(this, uT),
                h(this, uc, null),
                h(this, uu, 0),
                h(this, up, void 0),
                h(this, ug, null),
                h(this, uf, null),
                h(this, um, null),
                h(this, uw, null),
                h(this, ub, 0),
                h(this, uv, null),
                h(this, uA, null),
                h(this, uy, null),
                h(this, u_, !1),
                h(this, ux, null),
                h(this, uk, null),
                h(this, uM, null),
                h(this, uS, ""),
                h(this, uC, void 0),
                h(this, uE, ""),
                (this.color = e.color || t._defaultColor),
                d(uC, this, e.thickness || t._defaultThickness),
                (this.opacity = e.opacity || t._defaultOpacity),
                d(up, this, e.boxes || null),
                d(uE, this, e.methodOfCreation || ""),
                d(uS, this, e.text || ""),
                (this._isDraggable = !1),
                (this.defaultL10nId = "pdfjs-editor-highlight-editor"),
                e.highlightId > -1
                    ? (d(u_, this, !0), r(uT, this, uI).call(this, e), r(uT, this, uB).call(this))
                    : c(up, this) &&
                      (d(uc, this, e.anchorNode),
                      d(uu, this, e.anchorOffset),
                      d(uw, this, e.focusNode),
                      d(ub, this, e.focusOffset),
                      r(uT, this, uD).call(this),
                      r(uT, this, uB).call(this),
                      this.rotate(this.rotation)),
                this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
        }
        get telemetryInitialData() {
            return {
                action: "added",
                type: c(u_, this) ? "free_highlight" : "highlight",
                color: this._uiManager.getNonHCMColorName(this.color),
                thickness: c(uC, this),
                methodOfCreation: c(uE, this),
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
            return c(uk, this);
        }
        get commentButtonPosition() {
            return c(ux, this);
        }
        updateParams(t, e) {
            switch (t) {
                case x.HIGHLIGHT_COLOR:
                    r(uT, this, uL).call(this, e);
                    break;
                case x.HIGHLIGHT_THICKNESS:
                    r(uT, this, uR).call(this, e);
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
                [x.HIGHLIGHT_THICKNESS, c(uC, this) || t._defaultThickness],
                [x.HIGHLIGHT_FREE, c(u_, this)],
            ];
        }
        onUpdatedColor() {
            this.parent?.drawLayer.updateProperties(c(uy, this), {
                root: { fill: this.color, "fill-opacity": this.opacity },
            }),
                c(uf, this)?.updateColor(this.color),
                super.onUpdatedColor();
        }
        get toolbarButtons() {
            return this._uiManager.highlightColors
                ? [["colorPicker", d(uf, this, new hu({ editor: this }))]]
                : super.toolbarButtons;
        }
        disableEditing() {
            super.disableEditing(), this.div.classList.toggle("disabled", !0);
        }
        enableEditing() {
            super.enableEditing(), this.div.classList.toggle("disabled", !1);
        }
        fixAndSetPosition() {
            return super.fixAndSetPosition(r(uT, this, u$).call(this));
        }
        getBaseTranslation() {
            return [0, 0];
        }
        getRect(t, e) {
            return super.getRect(t, e, r(uT, this, u$).call(this));
        }
        onceAdded(t) {
            this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
        }
        remove() {
            r(uT, this, uN).call(this), this._reportTelemetry({ action: "deleted" }), super.remove();
        }
        rebuild() {
            this.parent &&
                (super.rebuild(),
                null !== this.div && (r(uT, this, uB).call(this), this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(t) {
            let e = !1;
            this.parent && !t
                ? r(uT, this, uN).call(this)
                : t &&
                  (r(uT, this, uB).call(this, t), (e = !this.parent && this.div?.classList.contains("selectedEditor"))),
                super.setParent(t),
                this.show(this._isVisible),
                e && this.select();
        }
        rotate(e) {
            let { drawLayer: i } = this.parent,
                s;
            c(u_, this)
                ? ((e = (e - this.rotation + 360) % 360), (s = uO.call(t, c(uA, this).box, e)))
                : (s = uO.call(t, [this.x, this.y, this.width, this.height], e)),
                i.updateProperties(c(uy, this), { bbox: s, root: { "data-main-rotation": e } }),
                i.updateProperties(c(uM, this), {
                    bbox: uO.call(t, c(um, this).box, e),
                    root: { "data-main-rotation": e },
                });
        }
        render() {
            if (this.div) return this.div;
            let t = super.render();
            c(uS, this) && (t.setAttribute("aria-label", c(uS, this)), t.setAttribute("role", "mark")),
                c(u_, this)
                    ? t.classList.add("free")
                    : this.div.addEventListener("keydown", r(uT, this, uW).bind(this), {
                          signal: this._uiManager._signal,
                      });
            let e = d(uv, this, document.createElement("div"));
            return (
                t.append(e),
                e.setAttribute("aria-hidden", "true"),
                (e.className = "internal"),
                (e.style.clipPath = c(ug, this)),
                this.setDims(),
                t9(this, c(uv, this), ["pointerover", "pointerleave"]),
                this.enableEditing(),
                t
            );
        }
        pointerover() {
            this.isSelected || this.parent?.drawLayer.updateProperties(c(uM, this), { rootClass: { hovered: !0 } });
        }
        pointerleave() {
            this.isSelected || this.parent?.drawLayer.updateProperties(c(uM, this), { rootClass: { hovered: !1 } });
        }
        _moveCaret(t) {
            switch ((this.parent.unselect(this), t)) {
                case 0:
                case 2:
                    r(uT, this, uU).call(this, !0);
                    break;
                case 1:
                case 3:
                    r(uT, this, uU).call(this, !1);
            }
        }
        select() {
            super.select(),
                c(uM, this) &&
                    this.parent?.drawLayer.updateProperties(c(uM, this), { rootClass: { hovered: !1, selected: !0 } });
        }
        unselect() {
            super.unselect(),
                c(uM, this) &&
                    (this.parent?.drawLayer.updateProperties(c(uM, this), { rootClass: { selected: !1 } }),
                    c(u_, this) || r(uT, this, uU).call(this, !1));
        }
        get _mustFixPosition() {
            return !c(u_, this);
        }
        show(t = this._isVisible) {
            super.show(t),
                this.parent &&
                    (this.parent.drawLayer.updateProperties(c(uy, this), { rootClass: { hidden: !t } }),
                    this.parent.drawLayer.updateProperties(c(uM, this), { rootClass: { hidden: !t } }));
        }
        static startHighlighting(e, i, { target: s, x: a, y: n }) {
            let { x: o, y: l, width: h, height: d } = s.getBoundingClientRect(),
                c = new AbortController(),
                u = e.combinedSignal(c),
                p = (i) => {
                    c.abort(), r(t, this, uG).call(this, e, i);
                };
            window.addEventListener("blur", p, { signal: u }),
                window.addEventListener("pointerup", p, { signal: u }),
                window.addEventListener("pointerdown", tu, { capture: !0, passive: !1, signal: u }),
                window.addEventListener("contextmenu", tc, { signal: u }),
                s.addEventListener("pointermove", r(t, this, uz).bind(this, e), { signal: u }),
                (this._freeHighlight = new uh(
                    { x: a, y: n },
                    [o, l, h, d],
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
            if (t instanceof dK) {
                let {
                    data: {
                        quadPoints: e,
                        rect: i,
                        rotation: a,
                        id: n,
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
                    rotation: a,
                    annotationElementId: n,
                    id: n,
                    deleted: !1,
                    popupRef: l,
                    richText: h,
                    comment: d?.str || null,
                    creationDate: c,
                    modificationDate: u,
                };
            } else if (t instanceof dq) {
                let {
                    data: {
                        inkLists: e,
                        rect: i,
                        rotation: a,
                        id: n,
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
                    rotation: a,
                    annotationElementId: n,
                    id: n,
                    deleted: !1,
                    popupRef: l,
                    richText: h,
                    comment: d?.str || null,
                    creationDate: c,
                    modificationDate: u,
                };
            }
            let { color: a, quadPoints: n, inkLists: o, opacity: l } = t,
                h = await super.deserialize(t, e, i);
            (h.color = V.makeHexColor(...a)),
                (h.opacity = l || 1),
                o && d(uC, h, t.thickness),
                (h._initialData = s),
                t.comment && h.setCommentData(t);
            let [u, p] = h.pageDimensions,
                [g, f] = h.pageTranslation;
            if (n) {
                let t = d(up, h, []);
                for (let e = 0; e < n.length; e += 8)
                    t.push({
                        x: (n[e] - g) / u,
                        y: 1 - (n[e + 1] - f) / p,
                        width: (n[e + 2] - n[e]) / u,
                        height: (n[e + 1] - n[e + 5]) / p,
                    });
                r(uT, h, uD).call(h), r(uT, h, uB).call(h), h.rotate(h.rotation);
            } else if (o) {
                d(u_, h, !0);
                let t = o[0],
                    i = { x: t[0] - g, y: p - (t[1] - f) },
                    s = new uh(i, [0, 0, u, p], 1, c(uC, h) / 2, !0, 0.001);
                for (let e = 0, a = t.length; e < a; e += 2) (i.x = t[e] - g), (i.y = p - (t[e + 1] - f)), s.add(i);
                let { id: a, clipPathId: n } = e.drawLayer.draw(
                    {
                        bbox: [0, 0, 1, 1],
                        root: { viewBox: "0 0 1 1", fill: h.color, "fill-opacity": h._defaultOpacity },
                        rootClass: { highlight: !0, free: !0 },
                        path: { d: s.toSVGPath() },
                    },
                    !0,
                    !0,
                );
                r(uT, h, uI).call(h, { highlightOutlines: s.getOutlines(), highlightId: a, clipPathId: n }),
                    r(uT, h, uB).call(h),
                    h.rotate(h.parentRotation);
            }
            return h;
        }
        serialize(t = !1) {
            if (this.isEmpty() || t) return null;
            if (this.deleted) return this.serializeDeleted();
            let e = sH._colorManager.convert(this._uiManager.getNonHCMColor(this.color)),
                i = super.serialize(t);
            return (
                Object.assign(i, {
                    color: e,
                    opacity: this.opacity,
                    thickness: c(uC, this),
                    quadPoints: r(uT, this, uH).call(this),
                    outlines: r(uT, this, uj).call(this, i.rect),
                }),
                this.addComment(i),
                this.annotationElementId && !r(uT, this, uV).call(this, i)
                    ? null
                    : ((i.id = this.annotationElementId), i)
            );
        }
        renderAnnotationElement(t) {
            return this.deleted ? t.hide() : t.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null;
        }
        static canCreateNewEmptyEditor() {
            return !1;
        }
    };
function uD() {
    d(uA, this, new ut(c(up, this), 0.001).getOutlines()),
        ([this.x, this.y, this.width, this.height] = c(uA, this).box),
        d(um, this, new ut(c(up, this), 0.0025, 0.001, "ltr" === this._uiManager.direction).getOutlines());
    let { firstPoint: t } = c(uA, this);
    d(ux, this, [(t[0] - this.x) / this.width, (t[1] - this.y) / this.height]);
    let { lastPoint: e } = c(um, this);
    d(uk, this, [(e[0] - this.x) / this.width, (e[1] - this.y) / this.height]);
}
function uI({ highlightOutlines: t, highlightId: e, clipPathId: i }) {
    if ((d(uA, this, t), d(um, this, t.getNewOutline(c(uC, this) / 2 + 1.5, 0.0025)), e >= 0))
        d(uy, this, e),
            d(ug, this, i),
            this.parent.drawLayer.finalizeDraw(e, { bbox: t.box, path: { d: t.toSVGPath() } }),
            d(
                uM,
                this,
                this.parent.drawLayer.drawOutline(
                    {
                        rootClass: { highlightOutline: !0, free: !0 },
                        bbox: c(um, this).box,
                        path: { d: c(um, this).toSVGPath() },
                    },
                    !0,
                ),
            );
    else if (this.parent) {
        let e = this.parent.viewport.rotation;
        this.parent.drawLayer.updateProperties(c(uy, this), {
            bbox: uO.call(uP, c(uA, this).box, (e - this.rotation + 360) % 360),
            path: { d: t.toSVGPath() },
        }),
            this.parent.drawLayer.updateProperties(c(uM, this), {
                bbox: uO.call(uP, c(um, this).box, e),
                path: { d: c(um, this).toSVGPath() },
            });
    }
    let [s, a, n, r] = t.box;
    switch (this.rotation) {
        case 0:
            (this.x = s), (this.y = a), (this.width = n), (this.height = r);
            break;
        case 90: {
            let [t, e] = this.parentDimensions;
            (this.x = a), (this.y = 1 - s), (this.width = (n * e) / t), (this.height = (r * t) / e);
            break;
        }
        case 180:
            (this.x = 1 - s), (this.y = 1 - a), (this.width = n), (this.height = r);
            break;
        case 270: {
            let [t, e] = this.parentDimensions;
            (this.x = 1 - a), (this.y = s), (this.width = (n * e) / t), (this.height = (r * t) / e);
        }
    }
    let { firstPoint: o } = t;
    d(ux, this, [(o[0] - s) / n, (o[1] - a) / r]);
    let { lastPoint: l } = c(um, this);
    d(uk, this, [(l[0] - s) / n, (l[1] - a) / r]);
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
    let e = c(uC, this),
        i = (t) => {
            d(uC, this, t), r(uT, this, uF).call(this, t);
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
    c(u_, this) &&
        (r(uT, this, uI).call(this, { highlightOutlines: c(uA, this).getNewOutline(t / 2) }),
        this.fixAndSetPosition(),
        this.setDims());
}
function uN() {
    null !== c(uy, this) &&
        this.parent &&
        (this.parent.drawLayer.remove(c(uy, this)),
        d(uy, this, null),
        this.parent.drawLayer.remove(c(uM, this)),
        d(uM, this, null));
}
function uB(t = this.parent) {
    null === c(uy, this) &&
        (({ id: u(d, [uy, this])._, clipPathId: u(d, [ug, this])._ } = t.drawLayer.draw(
            {
                bbox: c(uA, this).box,
                root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity },
                rootClass: { highlight: !0, free: c(u_, this) },
                path: { d: c(uA, this).toSVGPath() },
            },
            !1,
            !0,
        )),
        d(
            uM,
            this,
            t.drawLayer.drawOutline(
                {
                    rootClass: { highlightOutline: !0, free: c(u_, this) },
                    bbox: c(um, this).box,
                    path: { d: c(um, this).toSVGPath() },
                },
                c(u_, this),
            ),
        ),
        c(uv, this) && (c(uv, this).style.clipPath = c(ug, this)));
}
function uO([t, e, i, s], a) {
    switch (a) {
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
    if (!c(uc, this)) return;
    let e = window.getSelection();
    t ? e.setPosition(c(uc, this), c(uu, this)) : e.setPosition(c(uw, this), c(ub, this));
}
function u$() {
    return c(u_, this) ? this.rotation : 0;
}
function uH() {
    if (c(u_, this)) return null;
    let [t, e] = this.pageDimensions,
        [i, s] = this.pageTranslation,
        a = c(up, this),
        n = new Float32Array(8 * a.length),
        r = 0;
    for (let { x: o, y: l, width: h, height: d } of a) {
        let a = o * t + i,
            c = (1 - l) * e + s;
        (n[r] = n[r + 4] = a),
            (n[r + 1] = n[r + 3] = c),
            (n[r + 2] = n[r + 6] = a + h * t),
            (n[r + 5] = n[r + 7] = c - d * e),
            (r += 8);
    }
    return n;
}
function uj(t) {
    return c(uA, this).serialize(t, r(uT, this, u$).call(this));
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
(0, s.t)(uP, "_defaultColor", null),
    (0, s.t)(uP, "_defaultOpacity", 1),
    (0, s.t)(uP, "_defaultThickness", 12),
    (0, s.t)(uP, "_type", "highlight"),
    (0, s.t)(uP, "_editorType", _.HIGHLIGHT),
    (0, s.t)(uP, "_freeHighlightId", -1),
    (0, s.t)(uP, "_freeHighlight", null),
    (0, s.t)(uP, "_freeHighlightClipId", "");
var uX = new WeakMap(),
    uq = class {
        constructor() {
            h(this, uX, Object.create(null));
        }
        updateProperty(t, e) {
            (this[t] = e), this.updateSVGProperty(t, e);
        }
        updateProperties(t) {
            if (t) for (let [e, i] of Object.entries(t)) e.startsWith("_") || this.updateProperty(e, i);
        }
        updateSVGProperty(t, e) {
            c(uX, this)[t] = e;
        }
        toSVGProperties() {
            let t = c(uX, this);
            return d(uX, this, Object.create(null)), { root: t };
        }
        reset() {
            d(uX, this, Object.create(null));
        }
        updateAll(t = this) {
            this.updateProperties(t);
        }
        clone() {
            D("Not implemented");
        }
    },
    uY = new WeakMap(),
    uK = new WeakMap(),
    uQ = new WeakSet(),
    uJ = class t extends sH {
        constructor(t) {
            super(t),
                l(this, uQ),
                h(this, uY, null),
                h(this, uK, void 0),
                (0, s.t)(this, "_colorPicker", null),
                (0, s.t)(this, "_drawId", null),
                d(uK, this, t.mustBeCommitted || !1),
                this._addOutlines(t);
        }
        onUpdatedColor() {
            this._colorPicker?.update(this.color), super.onUpdatedColor();
        }
        _addOutlines(t) {
            t.drawOutlines && (r(uQ, this, uZ).call(this, t), r(uQ, this, u2).call(this));
        }
        static _mergeSVGProperties(t, e) {
            let i = new Set(Object.keys(t));
            for (let [s, a] of Object.entries(e)) i.has(s) ? Object.assign(t[s], a) : (t[s] = a);
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
                a = s[e],
                n = (i) => {
                    s.updateProperty(e, i);
                    let a = c(uY, this).updateProperty(e, i);
                    a && r(uQ, this, u4).call(this, a),
                        this.parent?.drawLayer.updateProperties(this._drawId, s.toSVGProperties()),
                        t === this.colorType && this.onUpdatedColor();
                };
            this.addCommands({
                cmd: n.bind(this, i),
                undo: n.bind(this, a),
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
                t._mergeSVGProperties(c(uY, this).getPathResizingSVGProperties(r(uQ, this, u5).call(this)), {
                    bbox: r(uQ, this, u6).call(this),
                }),
            );
        }
        _onResized() {
            this.parent?.drawLayer.updateProperties(
                this._drawId,
                t._mergeSVGProperties(c(uY, this).getPathResizedSVGProperties(r(uQ, this, u5).call(this)), {
                    bbox: r(uQ, this, u6).call(this),
                }),
            );
        }
        _onTranslating(t, e) {
            this.parent?.drawLayer.updateProperties(this._drawId, { bbox: r(uQ, this, u6).call(this) });
        }
        _onTranslated() {
            this.parent?.drawLayer.updateProperties(
                this._drawId,
                t._mergeSVGProperties(
                    c(uY, this).getPathTranslatedSVGProperties(r(uQ, this, u5).call(this), this.parentDimensions),
                    { bbox: r(uQ, this, u6).call(this) },
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
                c(uK, this) &&
                    (d(uK, this, !1),
                    this.commit(),
                    this.parent.setSelected(this),
                    t && this.isOnScreen && this.div.focus());
        }
        remove() {
            r(uQ, this, u1).call(this), super.remove();
        }
        rebuild() {
            this.parent &&
                (super.rebuild(),
                null !== this.div &&
                    (r(uQ, this, u2).call(this),
                    r(uQ, this, u4).call(this, c(uY, this).box),
                    this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(t) {
            let e = !1;
            this.parent && !t
                ? (this._uiManager.removeShouldRescale(this), r(uQ, this, u1).call(this))
                : t &&
                  (this._uiManager.addShouldRescale(this),
                  r(uQ, this, u2).call(this, t),
                  (e = !this.parent && this.div?.classList.contains("selectedEditor"))),
                super.setParent(t),
                e && this.select();
        }
        rotate() {
            this.parent &&
                this.parent.drawLayer.updateProperties(
                    this._drawId,
                    t._mergeSVGProperties(
                        { bbox: r(uQ, this, u6).call(this) },
                        c(uY, this).updateRotation((this.parentRotation - this.rotation + 360) % 360),
                    ),
                );
        }
        onScaleChanging() {
            this.parent &&
                r(uQ, this, u4).call(
                    this,
                    c(uY, this).updateParentDimensions(this.parentDimensions, this.parent.scale),
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
        static createDrawerInstance(t, e, i, s, a) {
            D("Not implemented");
        }
        static startDrawing(t, e, i, s) {
            let { target: a, offsetX: n, offsetY: r, pointerId: o, pointerType: l } = s;
            if (et.isInitializedAndDifferentPointerType(l)) return;
            let {
                    viewport: { rotation: h },
                } = t,
                { width: d, height: c } = a.getBoundingClientRect(),
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
            a.addEventListener("pointermove", this._drawMove.bind(this), { signal: p }),
            a.addEventListener(
                "touchmove",
                (t) => {
                    et.isSameTimeStamp(t.timeStamp) && tu(t);
                },
                { signal: p },
            ),
            t.toggleDrawing(),
            e._editorUndoBar?.hide(),
            u8._)
                ? t.drawLayer.updateProperties(this._currentDrawId, u8._.startNew(n, r, d, c, h))
                : (e.updateUIForDefaultProperties(this),
                  (u8._ = this.createDrawerInstance(n, r, d, c, h)),
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
                        scale: a,
                    } = e,
                    n = e.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, !1, {
                        drawId: this._currentDrawId,
                        drawOutlines: u8._.getOutlines(i * a, s * a, a, this._INNER_MARGIN),
                        drawingOptions: u9._,
                        mustBeCommitted: !t,
                    });
                return this._cleanup(!0), n;
            }
            return e.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
        }
        createDrawingOptions(t) {}
        static deserializeDraw(t, e, i, s, a, n) {
            D("Not implemented");
        }
        static async deserialize(t, e, i) {
            let {
                    rawDims: { pageWidth: s, pageHeight: a, pageX: n, pageY: o },
                } = e.viewport,
                l = this.deserializeDraw(n, o, s, a, this._INNER_MARGIN, t),
                h = await super.deserialize(t, e, i);
            return (
                h.createDrawingOptions(t),
                r(uQ, h, uZ).call(h, { drawOutlines: l }),
                r(uQ, h, u2).call(h),
                h.onScaleChanging(),
                h.rotate(),
                h
            );
        }
        serializeDraw(t) {
            let [e, i] = this.pageTranslation,
                [s, a] = this.pageDimensions;
            return c(uY, this).serialize([e, i, s, a], t);
        }
        renderAnnotationElement(t) {
            return t.updateEdited({ rect: this.getPDFRect() }), null;
        }
        static canCreateNewEmptyEditor() {
            return !1;
        }
    };
function uZ({ drawOutlines: t, drawId: e, drawingOptions: i }) {
    d(uY, this, t),
        (this._drawingOptions ||= i),
        this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`),
        e >= 0
            ? ((this._drawId = e), this.parent.drawLayer.finalizeDraw(e, t.defaultProperties))
            : (this._drawId = r(uQ, this, u0).call(this, t, this.parent)),
        r(uQ, this, u4).call(this, t.box);
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
        this._drawingOptions.updateAll(), (this._drawId = r(uQ, this, u0).call(this, c(uY, this), t));
    }
}
function u3([t, e, i, s]) {
    let {
        parentDimensions: [a, n],
        rotation: r,
    } = this;
    switch (r) {
        case 90:
            return [e, 1 - t, (n / a) * i, (a / n) * s];
        case 180:
            return [1 - t, 1 - e, i, s];
        case 270:
            return [1 - e, t, (n / a) * i, (a / n) * s];
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
        parentDimensions: [a, n],
        rotation: r,
    } = this;
    switch (r) {
        case 90:
            return [1 - e, t, (a / n) * i, (n / a) * s];
        case 180:
            return [1 - t, 1 - e, i, s];
        case 270:
            return [e, 1 - t, (a / n) * i, (n / a) * s];
        default:
            return [t, e, i, s];
    }
}
function u4(t) {
    ([this.x, this.y, this.width, this.height] = r(uQ, this, u3).call(this, t)),
        this.div && (this.fixAndSetPosition(), this.setDims()),
        this._onResized();
}
function u6() {
    let {
        x: t,
        y: e,
        width: i,
        height: s,
        rotation: a,
        parentRotation: n,
        parentDimensions: [r, o],
    } = this;
    switch ((4 * a + n) / 90) {
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
(0, s.t)(uJ, "_currentDrawId", -1), (0, s.t)(uJ, "_currentParent", null);
var u8 = { _: null },
    u7 = { _: null },
    u9 = { _: null };
(0, s.t)(uJ, "_INNER_MARGIN", 3);
var pt = new WeakMap(),
    pe = new WeakMap(),
    pi = new WeakMap(),
    ps = new WeakMap(),
    pa = new WeakMap(),
    pn = new WeakMap(),
    pr = new WeakMap(),
    po = new WeakMap(),
    pl = new WeakMap(),
    ph = new WeakMap(),
    pd = new WeakMap(),
    pc = new WeakSet(),
    pu = class {
        constructor(t, e, i, s, a, n) {
            l(this, pc),
                h(this, pt, new Float64Array(6)),
                h(this, pe, void 0),
                h(this, pi, void 0),
                h(this, ps, void 0),
                h(this, pa, void 0),
                h(this, pn, void 0),
                h(this, pr, ""),
                h(this, po, 0),
                h(this, pl, new pk()),
                h(this, ph, void 0),
                h(this, pd, void 0),
                d(ph, this, i),
                d(pd, this, s),
                d(ps, this, a),
                d(pa, this, n),
                ([t, e] = r(pc, this, pp).call(this, t, e));
            let o = d(pe, this, [NaN, NaN, NaN, NaN, t, e]);
            d(pn, this, [t, e]), d(pi, this, [{ line: o, points: c(pn, this) }]), c(pt, this).set(o, 0);
        }
        updateProperty(t, e) {
            "stroke-width" === t && d(pa, this, e);
        }
        isEmpty() {
            return !c(pi, this) || 0 === c(pi, this).length;
        }
        isCancellable() {
            return c(pn, this).length <= 10;
        }
        add(t, e) {
            [t, e] = r(pc, this, pp).call(this, t, e);
            let [i, s, a, n] = c(pt, this).subarray(2, 6),
                o = t - a,
                l = e - n;
            return 2 >= Math.hypot(c(ph, this) * o, c(pd, this) * l)
                ? null
                : (c(pn, this).push(t, e),
                  isNaN(i)
                      ? (c(pt, this).set([a, n, t, e], 2), c(pe, this).push(NaN, NaN, NaN, NaN, t, e))
                      : (isNaN(c(pt, this)[0]) && c(pe, this).splice(6, 6),
                        c(pt, this).set([i, s, a, n, t, e], 0),
                        c(pe, this).push(...cx.createBezierPoints(i, s, a, n, t, e))),
                  { path: { d: this.toSVGPath() } });
        }
        end(t, e) {
            return this.add(t, e) || (2 === c(pn, this).length ? { path: { d: this.toSVGPath() } } : null);
        }
        startNew(t, e, i, s, a) {
            d(ph, this, i), d(pd, this, s), d(ps, this, a), ([t, e] = r(pc, this, pp).call(this, t, e));
            let n = d(pe, this, [NaN, NaN, NaN, NaN, t, e]);
            d(pn, this, [t, e]);
            let o = c(pi, this).at(-1);
            return (
                o && ((o.line = new Float32Array(o.line)), (o.points = new Float32Array(o.points))),
                c(pi, this).push({ line: n, points: c(pn, this) }),
                c(pt, this).set(n, 0),
                d(po, this, 0),
                this.toSVGPath(),
                null
            );
        }
        getLastElement() {
            return c(pi, this).at(-1);
        }
        setLastElement(t) {
            return c(pi, this)
                ? (c(pi, this).push(t),
                  d(pe, this, t.line),
                  d(pn, this, t.points),
                  d(po, this, 0),
                  { path: { d: this.toSVGPath() } })
                : c(pl, this).setLastElement(t);
        }
        removeLastElement() {
            if (!c(pi, this)) return c(pl, this).removeLastElement();
            c(pi, this).pop(), d(pr, this, "");
            for (let t = 0, e = c(pi, this).length; t < e; t++) {
                let { line: e, points: i } = c(pi, this)[t];
                d(pe, this, e), d(pn, this, i), d(po, this, 0), this.toSVGPath();
            }
            return { path: { d: c(pr, this) } };
        }
        toSVGPath() {
            let t = cx.svgRound(c(pe, this)[4]),
                e = cx.svgRound(c(pe, this)[5]);
            if (2 === c(pn, this).length) return d(pr, this, `${c(pr, this)} M ${t} ${e} Z`), c(pr, this);
            if (c(pn, this).length <= 6) {
                let i = c(pr, this).lastIndexOf("M");
                d(pr, this, `${c(pr, this).slice(0, i)} M ${t} ${e}`), d(po, this, 6);
            }
            if (4 === c(pn, this).length) {
                let t = cx.svgRound(c(pe, this)[10]),
                    e = cx.svgRound(c(pe, this)[11]);
                return d(pr, this, `${c(pr, this)} L ${t} ${e}`), d(po, this, 12), c(pr, this);
            }
            let i = [];
            0 === c(po, this) && (i.push(`M ${t} ${e}`), d(po, this, 6));
            for (let t = c(po, this), e = c(pe, this).length; t < e; t += 6) {
                let [e, s, a, n, r, o] = c(pe, this)
                    .slice(t, t + 6)
                    .map(cx.svgRound);
                i.push(`C${e} ${s} ${a} ${n} ${r} ${o}`);
            }
            return d(pr, this, c(pr, this) + i.join(" ")), d(po, this, c(pe, this).length), c(pr, this);
        }
        getOutlines(t, e, i, s) {
            let a = c(pi, this).at(-1);
            return (
                (a.line = new Float32Array(a.line)),
                (a.points = new Float32Array(a.points)),
                c(pl, this).build(c(pi, this), t, e, i, c(ps, this), c(pa, this), s),
                d(pt, this, null),
                d(pe, this, null),
                d(pi, this, null),
                d(pr, this, null),
                c(pl, this)
            );
        }
        get defaultSVGProperties() {
            return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: !0 }, bbox: [0, 0, 1, 1] };
        }
    };
function pp(t, e) {
    return cx._normalizePoint(t, e, c(ph, this), c(pd, this), c(ps, this));
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
                l(this, px),
                h(this, pg, void 0),
                h(this, pf, 0),
                h(this, pm, void 0),
                h(this, pw, void 0),
                h(this, pb, void 0),
                h(this, pv, void 0),
                h(this, pA, void 0),
                h(this, py, void 0),
                h(this, p_, void 0);
        }
        build(t, e, i, s, a, n, o) {
            d(pb, this, e),
                d(pv, this, i),
                d(pA, this, s),
                d(py, this, a),
                d(p_, this, n),
                d(pm, this, o ?? 0),
                d(pw, this, t),
                r(px, this, pC).call(this);
        }
        get thickness() {
            return c(p_, this);
        }
        setLastElement(t) {
            return c(pw, this).push(t), { path: { d: this.toSVGPath() } };
        }
        removeLastElement() {
            return c(pw, this).pop(), { path: { d: this.toSVGPath() } };
        }
        toSVGPath() {
            let t = [];
            for (let { line: e } of c(pw, this)) {
                if ((t.push(`M${cx.svgRound(e[4])} ${cx.svgRound(e[5])}`), 6 === e.length)) {
                    t.push("Z");
                    continue;
                }
                if (12 === e.length && isNaN(e[6])) {
                    t.push(`L${cx.svgRound(e[10])} ${cx.svgRound(e[11])}`);
                    continue;
                }
                for (let i = 6, s = e.length; i < s; i += 6) {
                    let [s, a, n, r, o, l] = e.subarray(i, i + 6).map(cx.svgRound);
                    t.push(`C${s} ${a} ${n} ${r} ${o} ${l}`);
                }
            }
            return t.join("");
        }
        serialize([t, e, i, s], a) {
            let n = [],
                o = [],
                [l, h, d, u] = r(px, this, pS).call(this),
                p,
                g,
                f,
                m,
                w,
                b,
                v,
                A,
                y;
            switch (c(py, this)) {
                case 0:
                    (y = cx._rescale),
                        (p = t),
                        (g = e + s),
                        (f = i),
                        (m = -s),
                        (w = t + l * i),
                        (b = e + (1 - h - u) * s),
                        (v = t + (l + d) * i),
                        (A = e + (1 - h) * s);
                    break;
                case 90:
                    (y = cx._rescaleAndSwap),
                        (p = t),
                        (g = e),
                        (f = i),
                        (m = s),
                        (w = t + h * i),
                        (b = e + l * s),
                        (v = t + (h + u) * i),
                        (A = e + (l + d) * s);
                    break;
                case 180:
                    (y = cx._rescale),
                        (p = t + i),
                        (g = e),
                        (f = -i),
                        (m = s),
                        (w = t + (1 - l - d) * i),
                        (b = e + h * s),
                        (v = t + (1 - l) * i),
                        (A = e + (h + u) * s);
                    break;
                case 270:
                    (y = cx._rescaleAndSwap),
                        (p = t + i),
                        (g = e + s),
                        (f = -i),
                        (m = -s),
                        (w = t + (1 - h - u) * i),
                        (b = e + (1 - l - d) * s),
                        (v = t + (1 - h) * i),
                        (A = e + (1 - l) * s);
            }
            for (let { line: t, points: e } of c(pw, this))
                n.push(y(t, p, g, f, m, a ? Array(t.length) : null)),
                    o.push(y(e, p, g, f, m, a ? Array(e.length) : null));
            return { lines: n, points: o, rect: [w, b, v, A] };
        }
        static deserialize(t, e, i, s, a, { paths: { lines: n, points: r }, rotation: o, thickness: l }) {
            let h = [],
                d,
                c,
                u,
                p,
                g;
            switch (o) {
                case 0:
                    (g = cx._rescale), (d = -t / i), (c = e / s + 1), (u = 1 / i), (p = -1 / s);
                    break;
                case 90:
                    (g = cx._rescaleAndSwap), (d = -e / s), (c = -t / i), (u = 1 / s), (p = 1 / i);
                    break;
                case 180:
                    (g = cx._rescale), (d = t / i + 1), (c = -e / s), (u = -1 / i), (p = 1 / s);
                    break;
                case 270:
                    (g = cx._rescaleAndSwap), (d = e / s + 1), (c = t / i + 1), (u = -1 / s), (p = -1 / i);
            }
            if (!n)
                for (let t of ((n = []), r)) {
                    let e = t.length;
                    if (2 === e) {
                        n.push(new Float32Array([NaN, NaN, NaN, NaN, t[0], t[1]]));
                        continue;
                    }
                    if (4 === e) {
                        n.push(new Float32Array([NaN, NaN, NaN, NaN, t[0], t[1], NaN, NaN, NaN, NaN, t[2], t[3]]));
                        continue;
                    }
                    let i = new Float32Array(3 * (e - 2));
                    n.push(i);
                    let [s, a, r, o] = t.subarray(0, 4);
                    i.set([NaN, NaN, NaN, NaN, s, a], 0);
                    for (let n = 4; n < e; n += 2) {
                        let e = t[n],
                            l = t[n + 1];
                        i.set(cx.createBezierPoints(s, a, r, o, e, l), (n - 2) * 3), ([s, a, r, o] = [r, o, e, l]);
                    }
                }
            for (let t = 0, e = n.length; t < e; t++)
                h.push({
                    line: g(
                        n[t].map((t) => t ?? NaN),
                        d,
                        c,
                        u,
                        p,
                    ),
                    points: g(
                        r[t].map((t) => t ?? NaN),
                        d,
                        c,
                        u,
                        p,
                    ),
                });
            let f = new this.prototype.constructor();
            return f.build(h, i, s, 1, o, l, a), f;
        }
        get box() {
            return c(pg, this);
        }
        updateProperty(t, e) {
            return "stroke-width" === t ? r(px, this, pE).call(this, e) : null;
        }
        updateParentDimensions([t, e], i) {
            let [s, a] = r(px, this, pM).call(this);
            d(pb, this, t), d(pv, this, e), d(pA, this, i);
            let [n, o] = r(px, this, pM).call(this),
                l = n - s,
                h = o - a,
                u = c(pg, this);
            return (u[0] -= l), (u[1] -= h), (u[2] += 2 * l), (u[3] += 2 * h), u;
        }
        updateRotation(t) {
            return d(pf, this, t), { path: { transform: this.rotationTransform } };
        }
        get viewBox() {
            return c(pg, this).map(cx.svgRound).join(" ");
        }
        get defaultProperties() {
            let [t, e] = c(pg, this);
            return {
                root: { viewBox: this.viewBox },
                path: { "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}` },
            };
        }
        get rotationTransform() {
            let [, , t, e] = c(pg, this),
                i = 0,
                s = 0,
                a = 0,
                n = 0,
                r = 0,
                o = 0;
            switch (c(pf, this)) {
                case 90:
                    (s = e / t), (a = -t / e), (r = t);
                    break;
                case 180:
                    (i = -1), (n = -1), (r = t), (o = e);
                    break;
                case 270:
                    (s = -e / t), (a = t / e), (o = e);
                    break;
                default:
                    return "";
            }
            return `matrix(${i} ${s} ${a} ${n} ${cx.svgRound(r)} ${cx.svgRound(o)})`;
        }
        getPathResizingSVGProperties([t, e, i, s]) {
            let [a, n] = r(px, this, pM).call(this),
                [o, l, h, d] = c(pg, this);
            if (Math.abs(h - a) <= cx.PRECISION || Math.abs(d - n) <= cx.PRECISION) {
                let a = t + i / 2 - (o + h / 2),
                    n = e + s / 2 - (l + d / 2);
                return {
                    path: {
                        "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}`,
                        transform: `${this.rotationTransform} translate(${a} ${n})`,
                    },
                };
            }
            let u = (i - 2 * a) / (h - 2 * a),
                p = (s - 2 * n) / (d - 2 * n);
            return {
                path: {
                    "transform-origin": `${cx.svgRound(o)} ${cx.svgRound(l)}`,
                    transform: `${this.rotationTransform} scale(${h / i} ${d / s}) translate(${cx.svgRound(a)} ${cx.svgRound(n)}) scale(${u} ${p}) translate(${cx.svgRound(-a)} ${cx.svgRound(-n)})`,
                },
            };
        }
        getPathResizedSVGProperties([t, e, i, s]) {
            let [a, n] = r(px, this, pM).call(this),
                o = c(pg, this),
                [l, h, d, u] = o;
            if (
                ((o[0] = t),
                (o[1] = e),
                (o[2] = i),
                (o[3] = s),
                Math.abs(d - a) <= cx.PRECISION || Math.abs(u - n) <= cx.PRECISION)
            ) {
                let a = t + i / 2 - (l + d / 2),
                    n = e + s / 2 - (h + u / 2);
                for (let { line: t, points: e } of c(pw, this)) cx._translate(t, a, n, t), cx._translate(e, a, n, e);
                return {
                    root: { viewBox: this.viewBox },
                    path: {
                        "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}`,
                        transform: this.rotationTransform || null,
                        d: this.toSVGPath(),
                    },
                };
            }
            let p = (i - 2 * a) / (d - 2 * a),
                g = (s - 2 * n) / (u - 2 * n),
                f = -p * (l + a) + t + a,
                m = -g * (h + n) + e + n;
            if (1 !== p || 1 !== g || 0 !== f || 0 !== m)
                for (let { line: t, points: e } of c(pw, this))
                    cx._rescale(t, f, m, p, g, t), cx._rescale(e, f, m, p, g, e);
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
            let [s, a] = i,
                n = c(pg, this),
                r = t - n[0],
                o = e - n[1];
            if (c(pb, this) === s && c(pv, this) === a)
                for (let { line: t, points: e } of c(pw, this)) cx._translate(t, r, o, t), cx._translate(e, r, o, e);
            else {
                let t = c(pb, this) / s,
                    e = c(pv, this) / a;
                for (let { line: i, points: n } of (d(pb, this, s), d(pv, this, a), c(pw, this)))
                    cx._rescale(i, r, o, t, e, i), cx._rescale(n, r, o, t, e, n);
                (n[2] *= t), (n[3] *= e);
            }
            return (
                (n[0] = t),
                (n[1] = e),
                {
                    root: { viewBox: this.viewBox },
                    path: { d: this.toSVGPath(), "transform-origin": `${cx.svgRound(t)} ${cx.svgRound(e)}` },
                }
            );
        }
        get defaultSVGProperties() {
            let t = c(pg, this);
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
function pM(t = c(p_, this)) {
    let e = c(pm, this) + (t / 2) * c(pA, this);
    return c(py, this) % 180 == 0 ? [e / c(pb, this), e / c(pv, this)] : [e / c(pv, this), e / c(pb, this)];
}
function pS() {
    let [t, e, i, s] = c(pg, this),
        [a, n] = r(px, this, pM).call(this, 0);
    return [t + a, e + n, i - 2 * a, s - 2 * n];
}
function pC() {
    let t = d(pg, this, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    for (let { line: e } of c(pw, this)) {
        if (e.length <= 12) {
            for (let i = 4, s = e.length; i < s; i += 6) V.pointBoundingBox(e[i], e[i + 1], t);
            continue;
        }
        let i = e[4],
            s = e[5];
        for (let a = 6, n = e.length; a < n; a += 6) {
            let [n, r, o, l, h, d] = e.subarray(a, a + 6);
            V.bezierBoundingBox(i, s, n, r, o, l, h, d, t), (i = h), (s = d);
        }
    }
    let [e, i] = r(px, this, pM).call(this);
    (t[0] = Z(t[0] - e, 0, 1)),
        (t[1] = Z(t[1] - i, 0, 1)),
        (t[2] = Z(t[2] + e, 0, 1)),
        (t[3] = Z(t[3] + i, 0, 1)),
        (t[2] -= t[0]),
        (t[3] -= t[1]);
}
function pE(t) {
    let [e, i] = r(px, this, pM).call(this);
    d(p_, this, t);
    let [s, a] = r(px, this, pM).call(this),
        [n, o] = [s - e, a - i],
        l = c(pg, this);
    return (l[0] -= n), (l[1] -= o), (l[2] += 2 * n), (l[3] += 2 * o), l;
}
var pT = class t extends uq {
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
                l(this, pP),
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
        static createDrawerInstance(t, e, i, s, a) {
            return new pu(t, e, i, s, a, this._defaultDrawingOptions["stroke-width"]);
        }
        static deserializeDraw(t, e, i, s, a, n) {
            return pk.deserialize(t, e, i, s, a, n);
        }
        static async deserialize(t, e, i) {
            let s = null;
            if (t instanceof dq) {
                let {
                    data: {
                        inkLists: e,
                        rect: i,
                        rotation: a,
                        id: n,
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
                    rotation: a,
                    annotationElementId: n,
                    id: n,
                    deleted: !1,
                    popupRef: h,
                    richText: d,
                    comment: c?.str || null,
                    creationDate: u,
                    modificationDate: p,
                };
            }
            let a = await super.deserialize(t, e, i);
            return (a._initialData = s), t.comment && a.setCommentData(t), a;
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
                    _drawingOptions: { stroke: s, "stroke-opacity": a, "stroke-width": n },
                } = this,
                o = Object.assign(super.serialize(t), {
                    color: sH._colorManager.convert(s),
                    opacity: a,
                    thickness: n,
                    paths: { lines: e, points: i },
                });
            return (
                this.addComment(o),
                t
                    ? ((o.isCopy = !0), o)
                    : this.annotationElementId && !r(pP, this, pI).call(this, o)
                      ? null
                      : ((o.id = this.annotationElementId), o)
            );
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
    let { color: e, thickness: i, opacity: s, pageIndex: a } = this._initialData;
    return (
        this.hasEditedComment ||
        this._hasBeenMoved ||
        this._hasBeenResized ||
        t.color.some((t, i) => t !== e[i]) ||
        t.thickness !== i ||
        t.opacity !== s ||
        t.pageIndex !== a
    );
}
(0, s.t)(pD, "_type", "ink"), (0, s.t)(pD, "_editorType", _.INK), (0, s.t)(pD, "_defaultDrawingOptions", null);
var pL = class extends pk {
        toSVGPath() {
            let t = super.toSVGPath();
            return t.endsWith("Z") || (t += "Z"), t;
        }
    },
    pR = class t {
        static extractContoursFromText(e, { fontFamily: i, fontStyle: s, fontWeight: a }, n, o, l, h) {
            let d = new OffscreenCanvas(1, 1),
                c = d.getContext("2d", { alpha: !1 }),
                u = (c.font = `${s} ${a} 200px ${i}`),
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
            ((c = (d = new OffscreenCanvas(A, y)).getContext("2d", { alpha: !0, willReadFrequently: !0 })).font = u),
                (c.filter = "grayscale(1)"),
                (c.fillStyle = "white"),
                c.fillRect(0, 0, A, y),
                (c.fillStyle = "black"),
                c.fillText(e, (0.5 * A) / 2, (1.5 * y) / 2);
            let _ = r(t, this, pj).call(this, c.getImageData(0, 0, A, y).data),
                x = r(t, this, pH).call(this, _),
                k = r(t, this, pz).call(this, x),
                M = r(t, this, pO).call(this, _, A, y, k);
            return this.processDrawnLines({
                lines: { curves: M, width: A, height: y },
                pageWidth: n,
                pageHeight: o,
                rotation: l,
                innerMargin: h,
                mustSmooth: !0,
                areContours: !0,
            });
        }
        static process(e, i, s, a, n) {
            let [o, l, h] = r(t, this, pG).call(this, e),
                [d, c] = r(t, this, p$).call(
                    this,
                    o,
                    l,
                    h,
                    Math.hypot(l, h) * r(t, this, pV)._.sigmaSFactor,
                    r(t, this, pV)._.sigmaR,
                    r(t, this, pV)._.kernelSize,
                ),
                u = r(t, this, pz).call(this, c),
                p = r(t, this, pO).call(this, d, l, h, u);
            return this.processDrawnLines({
                lines: { curves: p, width: l, height: h },
                pageWidth: i,
                pageHeight: s,
                rotation: a,
                innerMargin: n,
                mustSmooth: !0,
                areContours: !0,
            });
        }
        static processDrawnLines({
            lines: e,
            pageWidth: i,
            pageHeight: s,
            rotation: a,
            innerMargin: n,
            mustSmooth: o,
            areContours: l,
        }) {
            a % 180 != 0 && ([i, s] = [s, i]);
            let { curves: h, width: d, height: c } = e,
                u = e.thickness ?? 0,
                p = [],
                g = Math.min(i / d, s / c),
                f = g / i,
                m = g / s,
                w = [];
            for (let { points: e } of h) {
                let i = o ? r(t, this, pU).call(this, e) : e;
                if (!i) continue;
                w.push(i);
                let s = i.length,
                    a = new Float32Array(s),
                    n = new Float32Array(3 * (2 === s ? 2 : s - 2));
                if ((p.push({ line: n, points: a }), 2 === s)) {
                    (a[0] = i[0] * f), (a[1] = i[1] * m), n.set([NaN, NaN, NaN, NaN, a[0], a[1]], 0);
                    continue;
                }
                let [l, h, d, c] = i;
                (l *= f), (h *= m), (d *= f), (c *= m), a.set([l, h, d, c], 0), n.set([NaN, NaN, NaN, NaN, l, h], 0);
                for (let t = 4; t < s; t += 2) {
                    let e = (a[t] = i[t] * f),
                        s = (a[t + 1] = i[t + 1] * m);
                    n.set(cx.createBezierPoints(l, h, d, c, e, s), (t - 2) * 3), ([l, h, d, c] = [d, c, e, s]);
                }
            }
            if (0 === p.length) return null;
            let b = l ? new pL() : new pk();
            return (
                b.build(p, i, s, 1, a, l ? 0 : u, n),
                { outline: b, newCurves: w, areContours: l, thickness: u, width: d, height: c }
            );
        }
        static async compressSignature({ outlines: t, areContours: e, thickness: i, width: s, height: a }) {
            let n,
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
            n = r >= -128 && o <= 127 ? Int8Array : r >= -32768 && o <= 32767 ? Int16Array : Int32Array;
            let h = t.length,
                d = 8 + 3 * h,
                c = new Uint32Array(d),
                u = 0;
            for (let r of ((c[u++] = d * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * h) * n.BYTES_PER_ELEMENT),
            (c[u++] = 0),
            (c[u++] = s),
            (c[u++] = a),
            (c[u++] = +!e),
            (c[u++] = Math.max(0, Math.floor(i ?? 0))),
            (c[u++] = h),
            (c[u++] = n.BYTES_PER_ELEMENT),
            t))
                (c[u++] = r.length - 2), (c[u++] = r[0]), (c[u++] = r[1]);
            let p = new CompressionStream("deflate-raw"),
                g = p.writable.getWriter();
            await g.ready, g.write(c);
            let f = n.prototype.constructor;
            for (let e of t) {
                let t = new f(e.length - 2);
                for (let i = 2, s = e.length; i < s; i++) t[i - 2] = e[i] - e[i - 2];
                g.write(t);
            }
            return g.close(), new Uint8Array(await new Response(p.readable).arrayBuffer()).toBase64();
        }
        static async decompressSignature(t) {
            try {
                let e = Uint8Array.fromBase64(t),
                    { readable: i, writable: s } = new DecompressionStream("deflate-raw"),
                    a = s.getWriter();
                await a.ready,
                    a
                        .write(e)
                        .then(async () => {
                            await a.ready, await a.close();
                        })
                        .catch(() => {});
                let n = null,
                    r = 0;
                for await (let t of i)
                    (n ||= new Uint8Array(new Uint32Array(t.buffer, 0, 4)[0])).set(t, r), (r += t.length);
                let o = new Uint32Array(n.buffer, 0, n.length >> 2),
                    l = o[1];
                if (0 !== l) throw Error(`Invalid version: ${l}`);
                let h = o[2],
                    d = o[3],
                    c = 0 === o[4],
                    u = o[5],
                    p = o[6],
                    g = o[7],
                    f = [],
                    m = (8 + 3 * p) * Uint32Array.BYTES_PER_ELEMENT,
                    w;
                switch (g) {
                    case Int8Array.BYTES_PER_ELEMENT:
                        w = new Int8Array(n.buffer, m);
                        break;
                    case Int16Array.BYTES_PER_ELEMENT:
                        w = new Int16Array(n.buffer, m);
                        break;
                    case Int32Array.BYTES_PER_ELEMENT:
                        w = new Int32Array(n.buffer, m);
                }
                r = 0;
                for (let t = 0; t < p; t++) {
                    let e = o[3 * t + 8],
                        i = new Float32Array(e + 2);
                    f.push(i);
                    for (let e = 0; e < 2; e++) i[e] = o[3 * t + 8 + e + 1];
                    for (let t = 0; t < e; t++) i[t + 2] = i[t] + w[r++];
                }
                return { areContours: c, thickness: u, outlines: f, width: h, height: d };
            } catch (t) {
                return P(`decompressSignature: ${t}`), null;
            }
        }
    };
function pF(t, e, i, s) {
    return (i -= t), (s -= e), 0 === i ? (s > 0 ? 0 : 4) : 1 === i ? s + 6 : 2 - s;
}
function pN(t, e, i, s, a, n, o) {
    let l = r(pR, this, pF).call(this, i, s, a, n);
    for (let a = 0; a < 8; a++) {
        let n = (-a + l - o + 16) % 8;
        if (0 !== t[(i + r(pR, this, pX)._[2 * n]) * e + (s + r(pR, this, pX)._[2 * n + 1])]) return n;
    }
    return -1;
}
function pB(t, e, i, s, a, n, o) {
    let l = r(pR, this, pF).call(this, i, s, a, n);
    for (let a = 0; a < 8; a++) {
        let n = (a + l + o + 16) % 8;
        if (0 !== t[(i + r(pR, this, pX)._[2 * n]) * e + (s + r(pR, this, pX)._[2 * n + 1])]) return n;
    }
    return -1;
}
function pO(t, e, i, s) {
    let a = t.length,
        n = new Int32Array(a);
    for (let e = 0; e < a; e++) n[e] = +(t[e] <= s);
    for (let t = 1; t < i - 1; t++) n[t * e] = n[t * e + e - 1] = 0;
    for (let t = 0; t < e; t++) n[t] = n[e * i - 1 - t] = 0;
    let o = 1,
        l,
        h = [];
    for (let t = 1; t < i - 1; t++) {
        l = 1;
        for (let i = 1; i < e - 1; i++) {
            let s,
                a = t * e + i,
                d = n[a];
            if (0 === d) continue;
            let c = t,
                u = i;
            if (1 === d && 0 === n[a - 1]) (o += 1), --u;
            else if (d >= 1 && 0 === n[a + 1]) (o += 1), (u += 1), d > 1 && (l = d);
            else {
                1 !== d && (l = Math.abs(d));
                continue;
            }
            let p = [i, t],
                g = u === i + 1,
                f = { isHole: g, points: p, id: o, parent: 0 };
            for (let t of (h.push(f), h))
                if (t.id === l) {
                    s = t;
                    break;
                }
            s ? (s.isHole ? (f.parent = g ? s.parent : l) : (f.parent = g ? l : s.parent)) : (f.parent = g ? l : 0);
            let m = r(pR, this, pN).call(this, n, e, t, i, c, u, 0);
            if (-1 === m) {
                (n[a] = -o), 1 !== n[a] && (l = Math.abs(n[a]));
                continue;
            }
            let w = r(pR, this, pX)._[2 * m],
                b = r(pR, this, pX)._[2 * m + 1],
                v = t + w,
                A = i + b;
            (c = v), (u = A);
            let y = t,
                _ = i;
            for (;;) {
                let s = r(pR, this, pB).call(this, n, e, y, _, c, u, 1);
                (w = r(pR, this, pX)._[2 * s]), (b = r(pR, this, pX)._[2 * s + 1]);
                let h = y + w,
                    d = _ + b;
                p.push(d, h);
                let g = y * e + _;
                if (
                    (0 === n[g + 1] ? (n[g] = -o) : 1 === n[g] && (n[g] = o), h === t && d === i && y === v && _ === A)
                ) {
                    1 !== n[a] && (l = Math.abs(n[a]));
                    break;
                }
                (c = y), (u = _), (y = h), (_ = d);
            }
        }
    }
    return h;
}
function pW(t, e, i, s) {
    if (i - e <= 4) {
        for (let a = e; a < i - 2; a += 2) s.push(t[a], t[a + 1]);
        return;
    }
    let a = t[e],
        n = t[e + 1],
        o = t[i - 4] - a,
        l = t[i - 3] - n,
        h = Math.hypot(o, l),
        d = o / h,
        c = l / h,
        u = d * n - c * a,
        p = 1 / h,
        g = Math.atan(l / o),
        f = Math.cos(g),
        m = Math.sin(g),
        w = p * (Math.abs(f) + Math.abs(m)),
        b = p * (1 - w + w ** 2),
        v = Math.max(Math.atan(Math.abs(m + f) * b), Math.atan(Math.abs(m - f) * b)),
        A = 0,
        y = e;
    for (let s = e + 2; s < i - 2; s += 2) {
        let e = Math.abs(u - d * t[s + 1] + c * t[s]);
        e > A && ((y = s), (A = e));
    }
    A > (h * v) ** 2
        ? (r(pR, this, pW).call(this, t, e, y + 2, s), r(pR, this, pW).call(this, t, y, i, s))
        : s.push(a, n);
}
function pU(t) {
    let e = [],
        i = t.length;
    return r(pR, this, pW).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}
function p$(t, e, i, s, a, n) {
    let r = new Float32Array(n ** 2),
        o = -2 * s ** 2,
        l = n >> 1;
    for (let t = 0; t < n; t++) {
        let e = (t - l) ** 2;
        for (let i = 0; i < n; i++) r[t * n + i] = Math.exp((e + (i - l) ** 2) / o);
    }
    let h = new Float32Array(256),
        d = -2 * a ** 2;
    for (let t = 0; t < 256; t++) h[t] = Math.exp(t ** 2 / d);
    let c = new Uint8Array(t.length),
        u = new Uint32Array(256);
    for (let s = 0; s < i; s++)
        for (let a = 0; a < e; a++) {
            let o = s * e + a,
                d = t[o],
                p = 0,
                g = 0;
            for (let o = 0; o < n; o++) {
                let c = s + o - l;
                if (!(c < 0 || c >= i))
                    for (let i = 0; i < n; i++) {
                        let s = a + i - l;
                        if (s < 0 || s >= e) continue;
                        let u = t[c * e + s],
                            f = r[o * n + i] * h[Math.abs(u - d)];
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
    for (let a = 0, n = e.length; a < n; a++) {
        let n = (e[a] = t[a << 2]);
        (i = Math.max(i, n)), (s = Math.min(s, n));
    }
    let a = 255 / (i - s);
    for (let t = 0, i = e.length; t < i; t++) e[t] = (e[t] - s) * a;
    return e;
}
function pz(t) {
    let e,
        i = -1 / 0,
        s = -1 / 0,
        a = t.findIndex((t) => 0 !== t),
        n = a,
        r = a;
    for (e = a; e < 256; e++) {
        let a = t[e];
        a > i && (e - n > s && ((s = e - n), (r = e - 1)), (i = a), (n = e));
    }
    for (e = r - 1; e >= 0 && !(t[e] > t[e + 1]); e--);
    return e;
}
function pG(t) {
    let e = t,
        { width: i, height: s } = t,
        { maxDim: a } = r(pR, this, pV)._,
        n = i,
        o = s;
    if (i > a || s > a) {
        let r = i,
            l = s,
            h = Math.log2(Math.max(i, s) / a),
            d = Math.floor(h);
        h = h === d ? d - 1 : d;
        for (let i = 0; i < h; i++) {
            let i = new OffscreenCanvas((n = Math.ceil(r / 2)), (o = Math.ceil(l / 2)));
            i.getContext("2d").drawImage(t, 0, 0, r, l, 0, 0, n, o),
                (r = n),
                (l = o),
                t !== e && t.close(),
                (t = i.transferToImageBitmap());
        }
        let c = Math.min(a / n, a / o);
        (n = Math.round(n * c)), (o = Math.round(o * c));
    }
    let l = new OffscreenCanvas(n, o).getContext("2d", { willReadFrequently: !0 });
    (l.fillStyle = "white"),
        l.fillRect(0, 0, n, o),
        (l.filter = "grayscale(1)"),
        l.drawImage(t, 0, 0, t.width, t.height, 0, 0, n, o);
    let h = l.getImageData(0, 0, n, o).data;
    return [r(pR, this, pj).call(this, h), n, o];
}
var pV = { _: { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 } },
    pX = { _: new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]) },
    pq = class t extends uq {
        constructor() {
            super(), super.updateProperties({ fill: sH._defaultLineColor, "stroke-width": 0 });
        }
        clone() {
            let e = new t();
            return e.updateAll(this), e;
        }
    },
    pY = class t extends pT {
        constructor(t) {
            super(t), super.updateProperties({ stroke: sH._defaultLineColor, "stroke-width": 1 });
        }
        clone() {
            let e = new t(this._viewParameters);
            return e.updateAll(this), e;
        }
    },
    pK = new WeakMap(),
    pQ = new WeakMap(),
    pJ = new WeakMap(),
    pZ = new WeakMap(),
    p0 = class t extends uJ {
        constructor(t) {
            super({ ...t, mustBeCommitted: !0, name: "signatureEditor" }),
                h(this, pK, !1),
                h(this, pQ, null),
                h(this, pJ, null),
                h(this, pZ, null),
                (this._willKeepAspectRatio = !0),
                d(pJ, this, t.signatureData || null),
                d(pQ, this, null),
                (this.defaultL10nId = "pdfjs-editor-signature-editor1");
        }
        static initialize(t, e) {
            sH.initialize(t, e),
                (this._defaultDrawingOptions = new pq()),
                (this._defaultDrawnSignatureOptions = new pY(e.viewParameters));
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
            return { type: "signature", hasDescription: !!c(pQ, this) };
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
            if (this.div) return this.div;
            let e,
                i,
                { _isCopy: s } = this;
            if ((s && ((this._isCopy = !1), (e = this.x), (i = this.y)), super.render(), null === this._drawId))
                if (c(pJ, this)) {
                    let {
                            lines: e,
                            mustSmooth: i,
                            areContours: s,
                            description: a,
                            uuid: n,
                            heightInPage: r,
                        } = c(pJ, this),
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
                    this.addSignature(d, r, a, n);
                } else
                    this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" })),
                        (this.div.hidden = !0),
                        this._uiManager.getSignature(this);
            else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: c(pQ, this) || "" }));
            return s && ((this._isCopy = !0), this._moveAfterPaste(e, i)), this.div;
        }
        setUuid(t) {
            d(pZ, this, t), this.addEditToolbar();
        }
        getUuid() {
            return c(pZ, this);
        }
        get description() {
            return c(pQ, this);
        }
        set description(t) {
            d(pQ, this, t),
                this.div &&
                    (this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t })),
                    super.addEditToolbar().then((e) => {
                        e?.updateEditSignatureButton(t);
                    }));
        }
        getSignaturePreview() {
            let { newCurves: t, areContours: e, thickness: i, width: s, height: a } = c(pJ, this),
                n = Math.max(s, a);
            return {
                areContours: e,
                outline: pR.processDrawnLines({
                    lines: { curves: t.map((t) => ({ points: t })), thickness: i, width: s, height: a },
                    pageWidth: n,
                    pageHeight: n,
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
        addSignature(e, i, s, a) {
            let n,
                { x: r, y: o } = this,
                { outline: l } = d(pJ, this, e);
            d(pK, this, l instanceof pL),
                (this.description = s),
                c(pK, this)
                    ? (n = t.getDefaultDrawingOptions())
                    : (n = t._defaultDrawnSignatureOptions.clone()).updateProperties({ "stroke-width": l.thickness }),
                this._addOutlines({ drawOutlines: l, drawingOptions: n });
            let [, h] = this.pageDimensions,
                u = i / h;
            (u = u >= 1 ? 0.5 : u),
                (this.width *= u / this.height),
                this.width >= 1 && ((u *= 0.9 / this.width), (this.width = 0.9)),
                (this.height = u),
                this.setDims(),
                (this.x = r),
                (this.y = o),
                this.center(),
                this._onResized(),
                this.onScaleChanging(),
                this.rotate(),
                this._uiManager.addToAnnotationStorage(this),
                this.setUuid(a),
                this._reportTelemetry({
                    action: "pdfjs.signature.inserted",
                    data: { hasBeenSaved: !!a, hasDescription: !!s },
                }),
                (this.div.hidden = !1);
        }
        getFromImage(e) {
            let {
                rawDims: { pageWidth: i, pageHeight: s },
                rotation: a,
            } = this.parent.viewport;
            return pR.process(e, i, s, a, t._INNER_MARGIN);
        }
        getFromText(e, i) {
            let {
                rawDims: { pageWidth: s, pageHeight: a },
                rotation: n,
            } = this.parent.viewport;
            return pR.extractContoursFromText(e, i, s, a, n, t._INNER_MARGIN);
        }
        getDrawnSignature(e) {
            let {
                rawDims: { pageWidth: i, pageHeight: s },
                rotation: a,
            } = this.parent.viewport;
            return pR.processDrawnLines({
                lines: e,
                pageWidth: i,
                pageHeight: s,
                rotation: a,
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
                a = Object.assign(super.serialize(t), {
                    isSignature: !0,
                    areContours: c(pK, this),
                    color: [0, 0, 0],
                    thickness: c(pK, this) ? 0 : s,
                });
            return (
                this.addComment(a),
                t ? ((a.paths = { lines: e, points: i }), (a.uuid = c(pZ, this)), (a.isCopy = !0)) : (a.lines = e),
                c(pQ, this) && (a.accessibilityData = { type: "Figure", alt: c(pQ, this) }),
                a
            );
        }
        static deserializeDraw(t, e, i, s, a, n) {
            return n.areContours ? pL.deserialize(t, e, i, s, a, n) : pk.deserialize(t, e, i, s, a, n);
        }
        static async deserialize(t, e, i) {
            let s = await super.deserialize(t, e, i);
            return d(pK, s, t.areContours), (s.description = t.accessibilityData?.alt || ""), d(pZ, s, t.uuid), s;
        }
    };
(0, s.t)(p0, "_type", "signature"),
    (0, s.t)(p0, "_editorType", _.SIGNATURE),
    (0, s.t)(p0, "_defaultDrawingOptions", null);
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
                l(this, gi),
                h(this, p1, null),
                h(this, p2, null),
                h(this, p3, null),
                h(this, p5, null),
                h(this, p4, null),
                h(this, p6, ""),
                h(this, p8, null),
                h(this, p7, !1),
                h(this, p9, null),
                h(this, gt, !1),
                h(this, ge, !1),
                d(p5, this, t.bitmapUrl),
                d(p4, this, t.bitmapFile),
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
            let { data: s, width: a, height: n } = t || this.copyCanvas(null, null, !0).imageData,
                r = await i.guess({
                    name: "altText",
                    request: { data: s, width: a, height: n, channels: s.length / (a * n) },
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
            c(p2, this) &&
                (d(p1, this, null),
                this._uiManager.imageManager.deleteId(c(p2, this)),
                c(p8, this)?.remove(),
                d(p8, this, null),
                c(p9, this) && (clearTimeout(c(p9, this)), d(p9, this, null))),
                super.remove();
        }
        rebuild() {
            if (!this.parent) {
                c(p2, this) && r(gi, this, gr).call(this);
                return;
            }
            super.rebuild(),
                null !== this.div &&
                    (c(p2, this) && null === c(p8, this) && r(gi, this, gr).call(this),
                    this.isAttachedToDOM || this.parent.add(this));
        }
        onceAdded(t) {
            (this._isDraggable = !0), t && this.div.focus();
        }
        isEmpty() {
            return !(c(p3, this) || c(p1, this) || c(p5, this) || c(p4, this) || c(p2, this) || c(p7, this));
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
                    c(p7, this) || (c(p1, this) ? r(gi, this, go).call(this) : r(gi, this, gr).call(this)),
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
                    (d(p2, this, i), s && d(p1, this, s), d(p7, this, !1), r(gi, this, go).call(this));
        }
        _onResized() {
            this.onScaleChanging();
        }
        onScaleChanging() {
            this.parent &&
                (null !== c(p9, this) && clearTimeout(c(p9, this)),
                d(
                    p9,
                    this,
                    setTimeout(() => {
                        d(p9, this, null), r(gi, this, gh).call(this);
                    }, 200),
                ));
        }
        copyCanvas(t, e, i = !1) {
            t ||= 224;
            let { width: s, height: a } = c(p1, this),
                n = new tv(),
                o = c(p1, this),
                l = s,
                h = a,
                d = null;
            if (e) {
                if (s > e || a > e) {
                    let t = Math.min(e / s, e / a);
                    (l = Math.floor(s * t)), (h = Math.floor(a * t));
                }
                let t = ((d = document.createElement("canvas")).width = Math.ceil(l * n.sx)),
                    i = (d.height = Math.ceil(h * n.sy));
                c(gt, this) || (o = r(gi, this, gl).call(this, t, i));
                let u = d.getContext("2d");
                u.filter = this._uiManager.hcmFilter;
                let p = "white",
                    g = "#cfcfd8";
                "none" === this._uiManager.hcmFilter
                    ? ty.isDarkMode && ((p = "#8f8f9d"), (g = "#42414d"))
                    : (g = "black");
                let f = 15 * n.sx,
                    m = 15 * n.sy,
                    w = new OffscreenCanvas(2 * f, 2 * m),
                    b = w.getContext("2d");
                (b.fillStyle = p),
                    b.fillRect(0, 0, 2 * f, 2 * m),
                    (b.fillStyle = g),
                    b.fillRect(0, 0, f, m),
                    b.fillRect(f, m, f, m),
                    (u.fillStyle = u.createPattern(w, "repeat")),
                    u.fillRect(0, 0, t, i),
                    u.drawImage(o, 0, 0, o.width, o.height, 0, 0, t, i);
            }
            let u = null;
            if (i) {
                let e, i;
                if (n.symmetric && o.width < t && o.height < t) (e = o.width), (i = o.height);
                else if (((o = c(p1, this)), s > t || a > t)) {
                    let n = Math.min(t / s, t / a);
                    (e = Math.floor(s * n)),
                        (i = Math.floor(a * n)),
                        c(gt, this) || (o = r(gi, this, gl).call(this, e, i));
                }
                let l = new OffscreenCanvas(e, i).getContext("2d", { willReadFrequently: !0 });
                l.drawImage(o, 0, 0, o.width, o.height, 0, 0, e, i),
                    (u = { width: e, height: i, data: l.getImageData(0, 0, e, i).data });
            }
            return { canvas: d, width: l, height: h, imageData: u };
        }
        static async deserialize(t, e, i) {
            let s = null,
                a = !1;
            if (t instanceof d0) {
                let {
                        data: {
                            rect: n,
                            rotation: r,
                            id: o,
                            structParent: l,
                            popupRef: h,
                            richText: d,
                            contentsObj: c,
                            creationDate: u,
                            modificationDate: p,
                        },
                        container: g,
                        parent: {
                            page: { pageNumber: f },
                        },
                        canvas: m,
                    } = t,
                    w,
                    b;
                m
                    ? (delete t.canvas, ({ id: w, bitmap: b } = i.imageManager.getFromCanvas(g.id, m)), m.remove())
                    : ((a = !0), (t._hasNoCanvas = !0));
                let v = (await e._structTree.getAriaAttributes(`${J}${o}`))?.get("aria-label") || "";
                s = t = {
                    annotationType: _.STAMP,
                    bitmapId: w,
                    bitmap: b,
                    pageIndex: f - 1,
                    rect: n.slice(0),
                    rotation: r,
                    annotationElementId: o,
                    id: o,
                    deleted: !1,
                    accessibilityData: { decorative: !1, altText: v },
                    isSvg: !1,
                    structParent: l,
                    popupRef: h,
                    richText: d,
                    comment: c?.str || null,
                    creationDate: u,
                    modificationDate: p,
                };
            }
            let n = await super.deserialize(t, e, i),
                { rect: r, bitmap: o, bitmapUrl: l, bitmapId: h, isSvg: c, accessibilityData: u } = t;
            a
                ? (i.addMissingCanvas(t.id, n), d(p7, n, !0))
                : h && i.imageManager.isValidId(h)
                  ? (d(p2, n, h), o && d(p1, n, o))
                  : d(p5, n, l),
                d(gt, n, c);
            let [p, g] = n.pageDimensions;
            return (
                (n.width = (r[2] - r[0]) / p),
                (n.height = (r[3] - r[1]) / g),
                u && (n.altTextData = u),
                (n._initialData = s),
                t.comment && n.setCommentData(t),
                d(ge, n, !!s),
                n
            );
        }
        serialize(t = !1, e = null) {
            if (this.isEmpty()) return null;
            if (this.deleted) return this.serializeDeleted();
            let i = Object.assign(super.serialize(t), { bitmapId: c(p2, this), isSvg: c(gt, this) });
            if ((this.addComment(i), t))
                return (
                    (i.bitmapUrl = r(gi, this, gd).call(this, !0)),
                    (i.accessibilityData = this.serializeAltText(!0)),
                    (i.isCopy = !0),
                    i
                );
            let { decorative: s, altText: a } = this.serializeAltText(!1);
            if ((!s && a && (i.accessibilityData = { type: "Figure", alt: a }), this.annotationElementId)) {
                let t = r(gi, this, gc).call(this, i);
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
            let n = c(gt, this) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
            if (e.stamps.has(c(p2, this))) {
                if (c(gt, this)) {
                    let t = e.stamps.get(c(p2, this));
                    n > t.area &&
                        ((t.area = n),
                        t.serialized.bitmap.close(),
                        (t.serialized.bitmap = r(gi, this, gd).call(this, !1)));
                }
            } else e.stamps.set(c(p2, this), { area: n, serialized: i }), (i.bitmap = r(gi, this, gd).call(this, !1));
            return i;
        }
        renderAnnotationElement(t) {
            return this.deleted ? t.hide() : t.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null;
        }
    };
function ga(t, e = !1) {
    t
        ? (d(p1, this, t.bitmap),
          e || (d(p2, this, t.id), d(gt, this, t.isSvg)),
          t.file && d(p6, this, t.file.name),
          r(gi, this, go).call(this))
        : this.remove();
}
function gn() {
    if ((d(p3, this, null), this._uiManager.enableWaiting(!1), c(p8, this))) {
        if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && c(p1, this))
            return void this.addEditToolbar().then(() => {
                this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
            });
        if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && c(p1, this)) {
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
    if (c(p2, this)) {
        this._uiManager.enableWaiting(!0),
            this._uiManager.imageManager
                .getFromId(c(p2, this))
                .then((t) => r(gi, this, ga).call(this, t, !0))
                .finally(() => r(gi, this, gn).call(this));
        return;
    }
    if (c(p5, this)) {
        let t = c(p5, this);
        d(p5, this, null),
            this._uiManager.enableWaiting(!0),
            d(
                p3,
                this,
                this._uiManager.imageManager
                    .getFromUrl(t)
                    .then((t) => r(gi, this, ga).call(this, t))
                    .finally(() => r(gi, this, gn).call(this)),
            );
        return;
    }
    if (c(p4, this)) {
        let t = c(p4, this);
        d(p4, this, null),
            this._uiManager.enableWaiting(!0),
            d(
                p3,
                this,
                this._uiManager.imageManager
                    .getFromFile(t)
                    .then((t) => r(gi, this, ga).call(this, t))
                    .finally(() => r(gi, this, gn).call(this)),
            );
        return;
    }
    let t = document.createElement("input");
    (t.type = "file"), (t.accept = tA.join(","));
    let e = this._uiManager._signal;
    d(
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
                            r(gi, this, ga).call(this, e);
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
        }).finally(() => r(gi, this, gn).call(this)),
    ),
        t.click();
}
function go() {
    let { div: t } = this,
        { width: e, height: i } = c(p1, this),
        [s, a] = this.pageDimensions;
    if (this.width) (e = this.width * s), (i = this.height * a);
    else if (e > 0.75 * s || i > 0.75 * a) {
        let t = Math.min((0.75 * s) / e, (0.75 * a) / i);
        (e *= t), (i *= t);
    }
    this._uiManager.enableWaiting(!1);
    let n = d(p8, this, document.createElement("canvas"));
    n.setAttribute("role", "img"),
        this.addContainer(n),
        (this.width = e / s),
        (this.height = i / a),
        this.setDims(),
        this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(),
        (this._initialOptions = null),
        (this._uiManager.useNewAltTextWhenAddingImage &&
            this._uiManager.useNewAltTextFlow &&
            !this.annotationElementId) ||
            (t.hidden = !1),
        r(gi, this, gh).call(this),
        c(ge, this) || (this.parent.addUndoableEditor(this), d(ge, this, !0)),
        this._reportTelemetry({ action: "inserted_image" }),
        c(p6, this) && this.div.setAttribute("aria-description", c(p6, this)),
        this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}
function gl(t, e) {
    let { width: i, height: s } = c(p1, this),
        a = i,
        n = s,
        r = c(p1, this);
    for (; a > 2 * t || n > 2 * e; ) {
        let i = a,
            s = n;
        a > 2 * t && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)),
            n > 2 * e && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2));
        let o = new OffscreenCanvas(a, n);
        o.getContext("2d").drawImage(r, 0, 0, i, s, 0, 0, a, n), (r = o.transferToImageBitmap());
    }
    return r;
}
function gh() {
    let [t, e] = this.parentDimensions,
        { width: i, height: s } = this,
        a = new tv(),
        n = Math.ceil(i * t * a.sx),
        o = Math.ceil(s * e * a.sy),
        l = c(p8, this);
    if (!l || (l.width === n && l.height === o)) return;
    (l.width = n), (l.height = o);
    let h = c(gt, this) ? c(p1, this) : r(gi, this, gl).call(this, n, o),
        d = l.getContext("2d");
    (d.filter = this._uiManager.hcmFilter), d.drawImage(h, 0, 0, h.width, h.height, 0, 0, n, o);
}
function gd(t) {
    if (t) {
        if (c(gt, this)) {
            let t = this._uiManager.imageManager.getSvgUrl(c(p2, this));
            if (t) return t;
        }
        let t = document.createElement("canvas");
        return (
            ({ width: t.width, height: t.height } = c(p1, this)),
            t.getContext("2d").drawImage(c(p1, this), 0, 0),
            t.toDataURL()
        );
    }
    if (c(gt, this)) {
        let [t, e] = this.pageDimensions,
            i = Math.round(this.width * t * ts.PDF_TO_CSS_UNITS),
            s = Math.round(this.height * e * ts.PDF_TO_CSS_UNITS),
            a = new OffscreenCanvas(i, s);
        return (
            a.getContext("2d").drawImage(c(p1, this), 0, 0, c(p1, this).width, c(p1, this).height, 0, 0, i, s),
            a.transferToImageBitmap()
        );
    }
    return structuredClone(c(p1, this));
}
function gc(t) {
    let {
            pageIndex: e,
            accessibilityData: { altText: i },
        } = this._initialData,
        s = t.pageIndex === e,
        a = (t.accessibilityData?.alt || "") === i;
    return {
        isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s && a,
        isSameAltText: a,
    };
}
(0, s.t)(gs, "_type", "stamp"), (0, s.t)(gs, "_editorType", _.STAMP);
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
    gC = new WeakMap(),
    gE = new WeakSet(),
    gT = class t {
        constructor({
            uiManager: e,
            pageIndex: i,
            div: s,
            structTreeLayer: a,
            accessibilityManager: n,
            annotationLayer: r,
            drawLayer: o,
            textLayer: u,
            viewport: p,
            l10n: g,
        }) {
            l(this, gE),
                h(this, gu, void 0),
                h(this, gp, !1),
                h(this, gg, null),
                h(this, gf, null),
                h(this, gm, null),
                h(this, gw, new Map()),
                h(this, gb, !1),
                h(this, gv, !1),
                h(this, gA, !1),
                h(this, gy, null),
                h(this, g_, null),
                h(this, gx, null),
                h(this, gk, null),
                h(this, gM, null),
                h(this, gS, -1),
                h(this, gC, void 0);
            let f = [...gN._.values()];
            if (!t._initialized) for (let i of ((t._initialized = !0), f)) i.initialize(g, e);
            e.registerEditorTypes(f),
                d(gC, this, e),
                (this.pageIndex = i),
                (this.div = s),
                d(gu, this, n),
                d(gg, this, r),
                (this.viewport = p),
                d(gx, this, u),
                (this.drawLayer = o),
                (this._structTree = a),
                c(gC, this).addLayer(this);
        }
        updatePageIndex(t) {
            this.pageIndex = t;
        }
        get isEmpty() {
            return 0 === c(gw, this).size;
        }
        get isInvisible() {
            return this.isEmpty && c(gC, this).getMode() === _.NONE;
        }
        updateToolbar(t) {
            c(gC, this).updateToolbar(t);
        }
        updateMode(t = c(gC, this).getMode()) {
            switch ((r(gE, this, gF).call(this), t)) {
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
            return t === c(gx, this)?.div;
        }
        setEditingState(t) {
            c(gC, this).setEditingState(t);
        }
        addCommands(t) {
            c(gC, this).addCommands(t);
        }
        cleanUndoStack(t) {
            c(gC, this).cleanUndoStack(t);
        }
        toggleDrawing(t = !1) {
            this.div.classList.toggle("drawing", !t);
        }
        togglePointerEvents(t = !1) {
            this.div.classList.toggle("disabled", !t);
        }
        toggleAnnotationLayerPointerEvents(t = !1) {
            c(gg, this)?.togglePointerEvents(t);
        }
        async enable() {
            d(gA, this, !0),
                (this.div.tabIndex = 0),
                this.togglePointerEvents(!0),
                this.div.classList.toggle("nonEditing", !1),
                c(gM, this)?.abort(),
                d(gM, this, null);
            let t = new Set();
            for (let e of gP.call(r(gE, this)))
                e.enableEditing(),
                    e.show(!0),
                    e.annotationElementId &&
                        (c(gC, this).removeChangedExistingAnnotation(e), t.add(e.annotationElementId));
            let e = c(gg, this);
            if (e)
                for (let i of e.getEditableAnnotations()) {
                    if ((i.hide(), c(gC, this).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))) continue;
                    let e = await this.deserialize(i);
                    e && (this.addOrRebuild(e), e.enableEditing());
                }
            d(gA, this, !1),
                c(gC, this)._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
        }
        disable() {
            if (
                (d(gv, this, !0),
                (this.div.tabIndex = -1),
                this.togglePointerEvents(!1),
                this.div.classList.toggle("nonEditing", !0),
                c(gx, this) && !c(gM, this))
            ) {
                d(gM, this, new AbortController());
                let t = c(gC, this).combinedSignal(c(gM, this));
                c(gx, this).div.addEventListener(
                    "pointerdown",
                    (t) => {
                        let { clientX: e, clientY: i, timeStamp: s } = t;
                        if (s - c(gS, this) > 500) return void d(gS, this, s);
                        d(gS, this, -1);
                        let { classList: a } = this.div;
                        a.toggle("getElements", !0);
                        let n = document.elementsFromPoint(e, i);
                        if ((a.toggle("getElements", !1), !this.div.contains(n[0]))) return;
                        let r,
                            o = RegExp(`^${y}[0-9]+$`);
                        for (let t of n)
                            if (o.test(t.id)) {
                                r = t.id;
                                break;
                            }
                        if (!r) return;
                        let l = c(gw, this).get(r);
                        l?.annotationElementId === null && (t.stopPropagation(), t.preventDefault(), l.dblclick(t));
                    },
                    { signal: t, capture: !0 },
                );
            }
            let t = c(gg, this),
                e = [];
            if (t) {
                let i = new Map(),
                    s = new Map();
                for (let t of gP.call(r(gE, this))) {
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
                    if (c(gC, this).isDeletedAnnotationElement(t)) {
                        e.updateEdited({ deleted: !0 });
                        continue;
                    }
                    let a = s.get(t);
                    if (a) {
                        a.resetAnnotationElement(e), a.show(!1), e.show();
                        continue;
                    }
                    (a = i.get(t)) &&
                        (c(gC, this).addChangedExistingAnnotation(a), a.renderAnnotationElement(e) && a.show(!1)),
                        e.show();
                }
            }
            r(gE, this, gF).call(this), this.isEmpty && (this.div.hidden = !0);
            let { classList: i } = this.div;
            for (let t of gN._.values()) i.remove(`${t._type}Editing`);
            this.disableTextSelection(),
                this.toggleAnnotationLayerPointerEvents(!0),
                t?.updateFakeAnnotations(e),
                d(gv, this, !1);
        }
        getEditableAnnotation(t) {
            return c(gg, this)?.getEditableAnnotation(t) || null;
        }
        setActiveEditor(t) {
            c(gC, this).getActive() !== t && c(gC, this).setActiveEditor(t);
        }
        enableTextSelection() {
            if (((this.div.tabIndex = -1), c(gx, this)?.div && !c(gk, this))) {
                d(gk, this, new AbortController());
                let t = c(gC, this).combinedSignal(c(gk, this));
                c(gx, this).div.addEventListener("pointerdown", r(gE, this, gD).bind(this), { signal: t }),
                    c(gx, this).div.classList.add("highlighting");
            }
        }
        disableTextSelection() {
            (this.div.tabIndex = 0),
                c(gx, this)?.div &&
                    c(gk, this) &&
                    (c(gk, this).abort(), d(gk, this, null), c(gx, this).div.classList.remove("highlighting"));
        }
        enableClick() {
            if (c(gf, this)) return;
            d(gf, this, new AbortController());
            let t = c(gC, this).combinedSignal(c(gf, this));
            this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t });
            let e = this.pointerup.bind(this);
            this.div.addEventListener("pointerup", e, { signal: t }),
                this.div.addEventListener("pointercancel", e, { signal: t });
        }
        disableClick() {
            c(gf, this)?.abort(), d(gf, this, null);
        }
        attach(t) {
            c(gw, this).set(t.id, t);
            let { annotationElementId: e } = t;
            e && c(gC, this).isDeletedAnnotationElement(e) && c(gC, this).removeDeletedAnnotationElement(t);
        }
        detach(t) {
            c(gw, this).delete(t.id),
                c(gu, this)?.removePointerInTextLayer(t.contentDiv),
                !c(gv, this) && t.annotationElementId && c(gC, this).addDeletedAnnotationElement(t);
        }
        remove(t) {
            this.detach(t), c(gC, this).removeEditor(t), t.div.remove(), (t.isAttachedToDOM = !1);
        }
        changeParent(t) {
            t.parent !== this &&
                (t.parent &&
                    t.annotationElementId &&
                    (c(gC, this).addDeletedAnnotationElement(t),
                    sH.deleteAnnotationElement(t),
                    (t.annotationElementId = null)),
                this.attach(t),
                t.parent?.detach(t),
                t.setParent(this),
                t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
        }
        add(t) {
            if (!(t.parent === this && t.isAttachedToDOM)) {
                if ((this.changeParent(t), c(gC, this).addEditor(t), this.attach(t), !t.isAttachedToDOM)) {
                    let e = t.render();
                    this.div.append(e), (t.isAttachedToDOM = !0);
                }
                t.fixAndSetPosition(),
                    t.onceAdded(!c(gA, this)),
                    c(gC, this).addToAnnotationStorage(t),
                    t._reportTelemetry(t.telemetryInitialData);
            }
        }
        moveEditorInDOM(t) {
            if (!t.isAttachedToDOM) return;
            let { activeElement: e } = document;
            t.div.contains(e) &&
                !c(gm, this) &&
                ((t._focusEventsAllowed = !1),
                d(
                    gm,
                    this,
                    setTimeout(() => {
                        d(gm, this, null),
                            t.div.contains(document.activeElement)
                                ? (t._focusEventsAllowed = !0)
                                : (t.div.addEventListener(
                                      "focusin",
                                      () => {
                                          t._focusEventsAllowed = !0;
                                      },
                                      { once: !0, signal: c(gC, this)._signal },
                                  ),
                                  e.focus());
                    }, 0),
                )),
                (t._structTreeParentId = c(gu, this)?.moveElementInDOM(this.div, t.div, t.contentDiv, !0));
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
            for (let e of c(gw, this).values()) if (e.uid === t) return e;
            return null;
        }
        getNextId() {
            return c(gC, this).getId();
        }
        combinedSignal(t) {
            return c(gC, this).combinedSignal(t);
        }
        canCreateNewEmptyEditor() {
            return gI.call(r(gE, this))?.canCreateNewEmptyEditor();
        }
        async pasteEditor(t, e) {
            this.updateToolbar(t), await c(gC, this).updateMode(t.mode);
            let { offsetX: i, offsetY: s } = r(gE, this, gR).call(this),
                a = this.getNextId(),
                n = r(gE, this, gL).call(this, {
                    parent: this,
                    id: a,
                    x: i,
                    y: s,
                    uiManager: c(gC, this),
                    isCentered: !0,
                    ...e,
                });
            n && this.add(n);
        }
        async deserialize(t) {
            return (
                (await gN._.get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, c(gC, this))) || null
            );
        }
        createAndAddNewEditor(t, e, i = {}) {
            let s = this.getNextId(),
                a = r(gE, this, gL).call(this, {
                    parent: this,
                    id: s,
                    x: t.offsetX,
                    y: t.offsetY,
                    uiManager: c(gC, this),
                    isCentered: e,
                    ...i,
                });
            return a && this.add(a), a;
        }
        get boundingClientRect() {
            return this.div.getBoundingClientRect();
        }
        addNewEditor(t = {}) {
            this.createAndAddNewEditor(r(gE, this, gR).call(this), !0, t);
        }
        setSelected(t) {
            c(gC, this).setSelected(t);
        }
        toggleSelected(t) {
            c(gC, this).toggleSelected(t);
        }
        unselect(t) {
            c(gC, this).unselect(t);
        }
        pointerup(t) {
            let { isMac: e } = z.platform;
            if (
                0 !== t.button ||
                (t.ctrlKey && e) ||
                t.target !== this.div ||
                !c(gb, this) ||
                (d(gb, this, !1), gI.call(r(gE, this))?.isDrawer && gI.call(r(gE, this)).supportMultipleDrawings)
            )
                return;
            if (!c(gp, this)) return void d(gp, this, !0);
            let i = c(gC, this).getMode();
            i === _.STAMP || i === _.SIGNATURE ? c(gC, this).unselectAll() : this.createAndAddNewEditor(t, !1);
        }
        pointerdown(t) {
            if ((c(gC, this).getMode() === _.HIGHLIGHT && this.enableTextSelection(), c(gb, this)))
                return void d(gb, this, !1);
            let { isMac: e } = z.platform;
            if (0 !== t.button || (t.ctrlKey && e) || t.target !== this.div) return;
            if ((d(gb, this, !0), gI.call(r(gE, this))?.isDrawer)) return void this.startDrawingSession(t);
            let i = c(gC, this).getActive();
            d(gp, this, !i || i.isEmpty());
        }
        startDrawingSession(t) {
            if ((this.div.focus({ preventScroll: !0 }), c(gy, this)))
                return void gI.call(r(gE, this)).startDrawing(this, c(gC, this), !1, t);
            c(gC, this).setCurrentDrawingSession(this), d(gy, this, new AbortController());
            let e = c(gC, this).combinedSignal(c(gy, this));
            this.div.addEventListener(
                "blur",
                ({ relatedTarget: t }) => {
                    t && !this.div.contains(t) && (d(g_, this, null), this.commitOrRemove());
                },
                { signal: e },
            ),
                gI.call(r(gE, this)).startDrawing(this, c(gC, this), !1, t);
        }
        pause(t) {
            if (t) {
                let { activeElement: t } = document;
                this.div.contains(t) && d(g_, this, t);
                return;
            }
            c(g_, this) &&
                setTimeout(() => {
                    c(g_, this)?.focus(), d(g_, this, null);
                }, 0);
        }
        endDrawingSession(t = !1) {
            return c(gy, this)
                ? (c(gC, this).setCurrentDrawingSession(null),
                  c(gy, this).abort(),
                  d(gy, this, null),
                  d(g_, this, null),
                  gI.call(r(gE, this)).endDrawing(t))
                : null;
        }
        findNewParent(t, e, i) {
            let s = c(gC, this).findParent(e, i);
            return null !== s && s !== this && (s.changeParent(t), !0);
        }
        commitOrRemove() {
            return !!c(gy, this) && (this.endDrawingSession(), !0);
        }
        onScaleChanging() {
            c(gy, this) && gI.call(r(gE, this)).onScaleChangingWhenDrawing(this);
        }
        destroy() {
            for (let t of (this.commitOrRemove(),
            c(gC, this).getActive()?.parent === this &&
                (c(gC, this).commitOrRemove(), c(gC, this).setActiveEditor(null)),
            c(gm, this) && (clearTimeout(c(gm, this)), d(gm, this, null)),
            c(gw, this).values()))
                c(gu, this)?.removePointerInTextLayer(t.contentDiv),
                    t.setParent(null),
                    (t.isAttachedToDOM = !1),
                    t.div.remove();
            (this.div = null), c(gw, this).clear(), c(gC, this).removeLayer(this);
        }
        render({ viewport: t }) {
            for (let e of ((this.viewport = t), tb(this.div, t), c(gC, this).getEditors(this.pageIndex)))
                this.add(e), e.rebuild();
            this.updateMode();
        }
        update({ viewport: t }) {
            c(gC, this).commitOrRemove(), r(gE, this, gF).call(this);
            let e = this.viewport.rotation,
                i = t.rotation;
            if (((this.viewport = t), tb(this.div, { rotation: i }), e !== i))
                for (let t of c(gw, this).values()) t.rotate(i);
        }
        get pageDimensions() {
            let { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
            return [t, e];
        }
        get scale() {
            return c(gC, this).viewParameters.realScale;
        }
    };
function gP() {
    return 0 === c(gw, this).size ? c(gC, this).getEditors(this.pageIndex) : c(gw, this).values();
}
function gD(t) {
    c(gC, this).unselectAll();
    let { target: e } = t;
    if (
        e === c(gx, this).div ||
        (("img" === e.getAttribute("role") || e.classList.contains("endOfContent")) && c(gx, this).div.contains(e))
    ) {
        let { isMac: e } = z.platform;
        if (0 !== t.button || (t.ctrlKey && e)) return;
        c(gC, this).showAllEditors("highlight", !0, !0),
            c(gx, this).div.classList.add("free"),
            this.toggleDrawing(),
            uP.startHighlighting(this, "ltr" === c(gC, this).direction, { target: c(gx, this).div, x: t.x, y: t.y }),
            c(gx, this).div.addEventListener(
                "pointerup",
                () => {
                    c(gx, this).div.classList.remove("free"), this.toggleDrawing(!0);
                },
                { once: !0, signal: c(gC, this)._signal },
            ),
            t.preventDefault();
    }
}
function gI() {
    return gN._.get(c(gC, this).getMode());
}
function gL(t) {
    let e = gI.call(r(gE, this));
    return e ? new e.prototype.constructor(t) : null;
}
function gR() {
    let { x: t, y: e, width: i, height: s } = this.boundingClientRect,
        a = Math.max(0, t),
        n = Math.max(0, e),
        r = Math.min(window.innerWidth, t + i),
        o = Math.min(window.innerHeight, e + s),
        l = (a + r) / 2 - t,
        h = (n + o) / 2 - e,
        [d, c] = this.viewport.rotation % 180 == 0 ? [l, h] : [h, l];
    return { offsetX: d, offsetY: c };
}
function gF() {
    for (let t of c(gw, this).values()) t.isEmpty() && t.remove();
}
(0, s.t)(gT, "_initialized", !1);
var gN = { _: new Map([cp, pD, gs, uP, p0].map((t) => [t._editorType, t])) },
    gB = new WeakMap(),
    gO = new WeakMap(),
    gW = new WeakMap(),
    gU = new WeakSet(),
    g$ = class t {
        constructor() {
            l(this, gU), h(this, gB, null), h(this, gO, new Map()), h(this, gW, new Map());
        }
        setParent(t) {
            if (!c(gB, this)) return void d(gB, this, t);
            if (c(gB, this) !== t) {
                if (c(gO, this).size > 0) for (let e of c(gO, this).values()) e.remove(), t.append(e);
                d(gB, this, t);
            }
        }
        static get _svgFactory() {
            return F(this, "_svgFactory", new hT());
        }
        draw(e, i = !1, s = !1) {
            var a, n;
            let o = ((a = gV._), (n = a++), (gV._ = a), n),
                l = r(gU, this, gj).call(this),
                h = t._svgFactory.createElement("defs");
            l.append(h);
            let d = t._svgFactory.createElement("path");
            h.append(d);
            let u = `path_${o}`;
            d.setAttribute("id", u), d.setAttribute("vector-effect", "non-scaling-stroke"), i && c(gW, this).set(o, d);
            let p = s ? r(gU, this, gz).call(this, h, u) : null,
                g = t._svgFactory.createElement("use");
            return (
                l.append(g),
                g.setAttribute("href", `#${u}`),
                this.updateProperties(l, e),
                c(gO, this).set(o, l),
                { id: o, clipPathId: `url(#${p})` }
            );
        }
        drawOutline(e, i) {
            var s, a;
            let n,
                o = ((s = gV._), (a = s++), (gV._ = s), a),
                l = r(gU, this, gj).call(this),
                h = t._svgFactory.createElement("defs");
            l.append(h);
            let d = t._svgFactory.createElement("path");
            h.append(d);
            let u = `path_${o}`;
            if ((d.setAttribute("id", u), d.setAttribute("vector-effect", "non-scaling-stroke"), i)) {
                let e = t._svgFactory.createElement("mask");
                h.append(e),
                    (n = `mask_${o}`),
                    e.setAttribute("id", n),
                    e.setAttribute("maskUnits", "objectBoundingBox");
                let i = t._svgFactory.createElement("rect");
                e.append(i),
                    i.setAttribute("width", "1"),
                    i.setAttribute("height", "1"),
                    i.setAttribute("fill", "white");
                let s = t._svgFactory.createElement("use");
                e.append(s),
                    s.setAttribute("href", `#${u}`),
                    s.setAttribute("stroke", "none"),
                    s.setAttribute("fill", "black"),
                    s.setAttribute("fill-rule", "nonzero"),
                    s.classList.add("mask");
            }
            let p = t._svgFactory.createElement("use");
            l.append(p), p.setAttribute("href", `#${u}`), n && p.setAttribute("mask", `url(#${n})`);
            let g = p.cloneNode();
            return (
                l.append(g),
                p.classList.add("mainOutline"),
                g.classList.add("secondaryOutline"),
                this.updateProperties(l, e),
                c(gO, this).set(o, l),
                o
            );
        }
        finalizeDraw(t, e) {
            c(gW, this).delete(t), this.updateProperties(t, e);
        }
        updateProperties(e, i) {
            if (!i) return;
            let { root: s, bbox: a, rootClass: n, path: o } = i,
                l = "number" == typeof e ? c(gO, this).get(e) : e;
            if (l) {
                if ((s && r(gU, this, gG).call(this, l, s), a && gH.call(t, l, a), n)) {
                    let { classList: t } = l;
                    for (let [e, i] of Object.entries(n)) t.toggle(e, i);
                }
                if (o) {
                    let t = l.firstElementChild.firstElementChild;
                    r(gU, this, gG).call(this, t, o);
                }
            }
        }
        updateParent(t, e) {
            if (e === this) return;
            let i = c(gO, this).get(t);
            i && (c(gB, e).append(i), c(gO, this).delete(t), c(gO, e).set(t, i));
        }
        remove(t) {
            c(gW, this).delete(t), null !== c(gB, this) && (c(gO, this).get(t).remove(), c(gO, this).delete(t));
        }
        destroy() {
            for (let t of (d(gB, this, null), c(gO, this).values())) t.remove();
            c(gO, this).clear(), c(gW, this).clear();
        }
    };
function gH(t, [e, i, s, a]) {
    let { style: n } = t;
    (n.top = `${100 * i}%`), (n.left = `${100 * e}%`), (n.width = `${100 * s}%`), (n.height = `${100 * a}%`);
}
function gj() {
    let t = g$._svgFactory.create(1, 1, !0);
    return c(gB, this).append(t), t.setAttribute("aria-hidden", !0), t;
}
function gz(t, e) {
    let i = g$._svgFactory.createElement("clipPath");
    t.append(i);
    let s = `clip_${e}`;
    i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
    let a = g$._svgFactory.createElement("use");
    return i.append(a), a.setAttribute("href", `#${e}`), a.classList.add("clip"), s;
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
        AnnotationLayer: ca,
        AnnotationMode: A,
        AnnotationType: M,
        applyOpacity: function (t, e, i, s) {
            let a = 255 * (1 - (s = Math.min(Math.max(s ?? 1, 0), 1)));
            return [(t = Math.round(t * s + a)), (e = Math.round(e * s + a)), (i = Math.round(i * s + a))];
        },
        build: "384c6208b",
        ColorPicker: hu,
        createValidAbsoluteUrl: L,
        CSSConstants: t_,
        DOMSVGFactory: hT,
        DrawLayer: g$,
        FeatureTest: z,
        fetchData: ta,
        findContrastColor: function (t, e) {
            let i = t[0] + 256 * t[1] + 65536 * t[2] + 0x1000000 * e[0] + 0x100000000 * e[1] + 0x10000000000 * e[2],
                s = tC.get(i);
            if (s) return s;
            let a = new Float32Array(9),
                n = a.subarray(0, 3),
                r = a.subarray(3, 6);
            tx(t, r);
            let o = a.subarray(6, 9);
            tx(e, o);
            let l = o[2] < 0.5,
                h = l ? 12 : 4.5;
            if (((r[2] = l ? Math.sqrt(r[2]) : 1 - Math.sqrt(1 - r[2])), tS(r, o, n) < h)) {
                let t, e;
                for (l ? ((t = r[2]), (e = 1)) : ((t = 0), (e = r[2])); e - t > 0.005; ) {
                    let i = (r[2] = (t + e) / 2);
                    l === tS(r, o, n) < h ? (t = i) : (e = i);
                }
                r[2] = l ? e : t;
            }
            return (
                tk(r, n),
                (s = V.makeHexColor(Math.round(255 * n[0]), Math.round(255 * n[1]), Math.round(255 * n[2]))),
                tC.set(i, s),
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
                        return e.includes("/") ? ((e = e.split("/").at(-1)).test(/^\.pdf$/i) ? e : t) : e;
                    } catch {
                        return t;
                    }
                },
                a = /\.pdf$/i,
                n = i.pathname.split("/").at(-1);
            if (a.test(n)) return s(n);
            if (i.searchParams.size > 0) {
                for (let t of Array.from(i.searchParams.values()).reverse()) if (a.test(t)) return s(t);
                for (let t of Array.from(i.searchParams.keys()).reverse()) if (a.test(t)) return s(t);
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
            let { width: s, height: a } = t.attributes.style;
            return new tn({ viewBox: [0, 0, parseInt(s), parseInt(a)], userUnit: 1, scale: e, rotation: i });
        },
        GlobalWorkerOptions: rV,
        ImageKind: k,
        InvalidPDFException: W,
        isDataScheme: to,
        isPdfFile: tl,
        isValidExplicitDest: aJ,
        MathClamp: Z,
        noContextMenu: tc,
        normalizeUnicode: function (t) {
            return (
                Y ||
                    ((Y =
                        /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
                    (K = new Map([["\uFB05", "\u017Ft"]]))),
                t.replaceAll(Y, (t, e, i) => (e ? e.normalize("NFKC") : K.get(i)))
            );
        },
        OPS: C,
        OutputScale: tv,
        PagesMapper: tD,
        PasswordResponses: { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 },
        PDFDataRangeTransport: lC,
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
        renderRichText: tE,
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
