r.d(e, { RedirectToMobile: () => ti });
var n = r(129050),
    o = r(31144),
    i = r(248702),
    a = r(899656),
    s = r(458741),
    l = r(517e3),
    u = r(136847),
    c = r(573133),
    d = r(321724),
    h = r(242003);
r(288552);
var g = r(886567),
    f = r(368697),
    p = r(868282),
    v = r(282511),
    m = r(374390),
    C = r(294524),
    E = r(749113),
    y = ({ logoSrc: t }) => {
        let { t: e } = (0, o.n)();
        return (0, i.v)("header", {
            class: "IncodeRedirectHeader",
            children: [
                (0, i.v)("div", {
                    class: "IncodeRedirectLogoWrapper",
                    children: (0, i.v)("img", { src: t, alt: "", "aria-hidden": "true", class: "IncodeRedirectLogo" }),
                }),
                (0, i.v)(l.r, { size: 24 }),
                (0, i.v)(v.t, { className: "IncodeRedirectTitle", children: e("v2.redirectToMobile.title") }),
                (0, i.v)(l.r, { size: 12 }),
                (0, i.v)("p", { class: "IncodeRedirectSubtitle", children: e("v2.redirectToMobile.subtitle") }),
            ],
        });
    },
    w = ({ addContinueToDesktop: t, onContinueOnDesktop: e }) => {
        let { t: r } = (0, o.n)();
        return (0, i.v)("footer", {
            class: "IncodeRedirectBottomNav",
            children: [
                t ? (0, i.v)(h.t, { variant: "link", onClick: e, children: r("redirect.continueOnDesktop") }) : null,
                (0, i.v)(c.t, {}),
            ],
        });
    },
    I = ({ visible: t }) => {
        let { t: e } = (0, o.n)();
        return t
            ? (0, i.v)("div", {
                  class: "IncodeRedirectToast",
                  children: (0, i.v)(m.t, { variant: "positive", children: e("redirect.linkResent") }),
              })
            : null;
    },
    T = (0, n.t)((t, e) => {
        e.exports = function () {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then;
        };
    }),
    R = (0, n.t)((t) => {
        var e,
            r = [
                0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
                1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
                3362, 3532, 3706,
            ];
        (t.getSymbolSize = function (t) {
            if (!t) throw Error('"version" cannot be null or undefined');
            if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
            return 4 * t + 17;
        }),
            (t.getSymbolTotalCodewords = function (t) {
                return r[t];
            }),
            (t.getBCHDigit = function (t) {
                let e = 0;
                for (; 0 !== t; ) e++, (t >>>= 1);
                return e;
            }),
            (t.setToSJISFunction = function (t) {
                if ("function" != typeof t) throw Error('"toSJISFunc" is not a valid function.');
                e = t;
            }),
            (t.isKanjiModeEnabled = function () {
                return void 0 !== e;
            }),
            (t.toSJIS = function (t) {
                return e(t);
            });
    }),
    b = (0, n.t)((t) => {
        (t.L = { bit: 1 }),
            (t.M = { bit: 0 }),
            (t.Q = { bit: 3 }),
            (t.H = { bit: 2 }),
            (t.isValid = function (t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
            }),
            (t.from = function (e, r) {
                if (t.isValid(e)) return e;
                try {
                    if ("string" != typeof e) throw Error("Param is not a string");
                    switch (e.toLowerCase()) {
                        case "l":
                        case "low":
                            return t.L;
                        case "m":
                        case "medium":
                            return t.M;
                        case "q":
                        case "quartile":
                            return t.Q;
                        case "h":
                        case "high":
                            return t.H;
                        default:
                            throw Error("Unknown EC Level: " + e);
                    }
                } catch {
                    return r;
                }
            });
    }),
    A = (0, n.t)((t, e) => {
        function r() {
            (this.buffer = []), (this.length = 0);
        }
        (r.prototype = {
            get: function (t) {
                let e = Math.floor(t / 8);
                return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1;
            },
            put: function (t, e) {
                for (let r = 0; r < e; r++) this.putBit(((t >>> (e - r - 1)) & 1) == 1);
            },
            getLengthInBits: function () {
                return this.length;
            },
            putBit: function (t) {
                let e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                    t && (this.buffer[e] |= 128 >>> (this.length % 8)),
                    this.length++;
            },
        }),
            (e.exports = r);
    }),
    P = (0, n.t)((t, e) => {
        function r(t) {
            if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
            (this.size = t), (this.data = new Uint8Array(t * t)), (this.reservedBit = new Uint8Array(t * t));
        }
        (r.prototype.set = function (t, e, r, n) {
            let o = t * this.size + e;
            (this.data[o] = r), n && (this.reservedBit[o] = !0);
        }),
            (r.prototype.get = function (t, e) {
                return this.data[t * this.size + e];
            }),
            (r.prototype.xor = function (t, e, r) {
                this.data[t * this.size + e] ^= r;
            }),
            (r.prototype.isReserved = function (t, e) {
                return this.reservedBit[t * this.size + e];
            }),
            (e.exports = r);
    }),
    B = (0, n.t)((t) => {
        var e = R().getSymbolSize;
        (t.getRowColCoords = function (t) {
            if (1 === t) return [];
            let r = Math.floor(t / 7) + 2,
                n = e(t),
                o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * r - 2)),
                i = [n - 7];
            for (let t = 1; t < r - 1; t++) i[t] = i[t - 1] - o;
            return i.push(6), i.reverse();
        }),
            (t.getPositions = function (e) {
                let r = [],
                    n = t.getRowColCoords(e),
                    o = n.length;
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < o; e++)
                        (0 === t && 0 === e) ||
                            (0 === t && e === o - 1) ||
                            (t === o - 1 && 0 === e) ||
                            r.push([n[t], n[e]]);
                return r;
            });
    }),
    M = (0, n.t)((t) => {
        var e = R().getSymbolSize;
        t.getPositions = function (t) {
            let r = e(t);
            return [
                [0, 0],
                [r - 7, 0],
                [0, r - 7],
            ];
        };
    }),
    S = (0, n.t)((t) => {
        t.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
        };
        (t.isValid = function (t) {
            return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
        }),
            (t.from = function (e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0;
            }),
            (t.getPenaltyN1 = function (t) {
                let e = t.size,
                    r = 0,
                    n = 0,
                    o = 0,
                    i = null,
                    a = null;
                for (let s = 0; s < e; s++) {
                    (n = o = 0), (i = a = null);
                    for (let l = 0; l < e; l++) {
                        let e = t.get(s, l);
                        e === i ? n++ : (n >= 5 && (r += 3 + (n - 5)), (i = e), (n = 1)),
                            (e = t.get(l, s)) === a ? o++ : (o >= 5 && (r += 3 + (o - 5)), (a = e), (o = 1));
                    }
                    n >= 5 && (r += 3 + (n - 5)), o >= 5 && (r += 3 + (o - 5));
                }
                return r;
            }),
            (t.getPenaltyN2 = function (t) {
                let e = t.size,
                    r = 0;
                for (let n = 0; n < e - 1; n++)
                    for (let o = 0; o < e - 1; o++) {
                        let e = t.get(n, o) + t.get(n, o + 1) + t.get(n + 1, o) + t.get(n + 1, o + 1);
                        (4 === e || 0 === e) && r++;
                    }
                return 3 * r;
            }),
            (t.getPenaltyN3 = function (t) {
                let e = t.size,
                    r = 0,
                    n = 0,
                    o = 0;
                for (let i = 0; i < e; i++) {
                    n = o = 0;
                    for (let a = 0; a < e; a++)
                        (n = ((n << 1) & 2047) | t.get(i, a)),
                            a >= 10 && (1488 === n || 93 === n) && r++,
                            (o = ((o << 1) & 2047) | t.get(a, i)),
                            a >= 10 && (1488 === o || 93 === o) && r++;
                }
                return 40 * r;
            }),
            (t.getPenaltyN4 = function (t) {
                let e = 0,
                    r = t.data.length;
                for (let n = 0; n < r; n++) e += t.data[n];
                return 10 * Math.abs(Math.ceil((100 * e) / r / 5) - 10);
            }),
            (t.applyMask = function (e, r) {
                let n = r.size;
                for (let o = 0; o < n; o++)
                    for (let i = 0; i < n; i++)
                        r.isReserved(i, o) ||
                            r.xor(
                                i,
                                o,
                                (function (e, r, n) {
                                    switch (e) {
                                        case t.Patterns.PATTERN000:
                                            return (r + n) % 2 == 0;
                                        case t.Patterns.PATTERN001:
                                            return r % 2 == 0;
                                        case t.Patterns.PATTERN010:
                                            return n % 3 == 0;
                                        case t.Patterns.PATTERN011:
                                            return (r + n) % 3 == 0;
                                        case t.Patterns.PATTERN100:
                                            return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
                                        case t.Patterns.PATTERN101:
                                            return ((r * n) % 2) + ((r * n) % 3) == 0;
                                        case t.Patterns.PATTERN110:
                                            return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
                                        case t.Patterns.PATTERN111:
                                            return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
                                        default:
                                            throw Error("bad maskPattern:" + e);
                                    }
                                })(e, i, o),
                            );
            }),
            (t.getBestMask = function (e, r) {
                let n = Object.keys(t.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let a = 0; a < n; a++) {
                    r(a), t.applyMask(a, e);
                    let n = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(a, e), n < i && ((i = n), (o = a));
                }
                return o;
            });
    }),
    N = (0, n.t)((t) => {
        var e = b(),
            r = [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8,
                8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
                11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30,
                10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
                40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66,
                21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
            ],
            n = [
                7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72,
                108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
                104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180,
                338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
                750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728,
                1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540,
                980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770,
                2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
            ];
        (t.getBlocksCount = function (t, n) {
            switch (n) {
                case e.L:
                    return r[(t - 1) * 4 + 0];
                case e.M:
                    return r[(t - 1) * 4 + 1];
                case e.Q:
                    return r[(t - 1) * 4 + 2];
                case e.H:
                    return r[(t - 1) * 4 + 3];
                default:
                    return;
            }
        }),
            (t.getTotalCodewordsCount = function (t, r) {
                switch (r) {
                    case e.L:
                        return n[(t - 1) * 4 + 0];
                    case e.M:
                        return n[(t - 1) * 4 + 1];
                    case e.Q:
                        return n[(t - 1) * 4 + 2];
                    case e.H:
                        return n[(t - 1) * 4 + 3];
                    default:
                        return;
                }
            });
    }),
    L = (0, n.t)((t) => {
        var e = new Uint8Array(512),
            r = new Uint8Array(256);
        (function () {
            let t = 1;
            for (let n = 0; n < 255; n++) (e[n] = t), (r[t] = n), 256 & (t <<= 1) && (t ^= 285);
            for (let t = 255; t < 512; t++) e[t] = e[t - 255];
        })(),
            (t.log = function (t) {
                if (t < 1) throw Error("log(" + t + ")");
                return r[t];
            }),
            (t.exp = function (t) {
                return e[t];
            }),
            (t.mul = function (t, n) {
                return 0 === t || 0 === n ? 0 : e[r[t] + r[n]];
            });
    }),
    k = (0, n.t)((t) => {
        var e = L();
        (t.mul = function (t, r) {
            let n = new Uint8Array(t.length + r.length - 1);
            for (let o = 0; o < t.length; o++) for (let i = 0; i < r.length; i++) n[o + i] ^= e.mul(t[o], r[i]);
            return n;
        }),
            (t.mod = function (t, r) {
                let n = new Uint8Array(t);
                for (; n.length - r.length >= 0; ) {
                    let t = n[0];
                    for (let o = 0; o < r.length; o++) n[o] ^= e.mul(r[o], t);
                    let o = 0;
                    for (; o < n.length && 0 === n[o]; ) o++;
                    n = n.slice(o);
                }
                return n;
            }),
            (t.generateECPolynomial = function (r) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < r; o++) n = t.mul(n, new Uint8Array([1, e.exp(o)]));
                return n;
            });
    }),
    x = (0, n.t)((t, e) => {
        var r = k();
        function n(t) {
            (this.genPoly = void 0), (this.degree = t), this.degree && this.initialize(this.degree);
        }
        (n.prototype.initialize = function (t) {
            (this.degree = t), (this.genPoly = r.generateECPolynomial(this.degree));
        }),
            (n.prototype.encode = function (t) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let e = new Uint8Array(t.length + this.degree);
                e.set(t);
                let n = r.mod(e, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let t = new Uint8Array(this.degree);
                    return t.set(n, o), t;
                }
                return n;
            }),
            (e.exports = n);
    }),
    U = (0, n.t)((t) => {
        t.isValid = function (t) {
            return !isNaN(t) && t >= 1 && t <= 40;
        };
    }),
    D = (0, n.t)((t) => {
        var e = "[0-9]+",
            r =
                "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        (t.KANJI = RegExp(r, "g")),
            (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
            (t.BYTE = RegExp(n, "g")),
            (t.NUMERIC = RegExp(e, "g")),
            (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
        var o = RegExp("^" + r + "$"),
            i = RegExp("^" + e + "$"),
            a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        (t.testKanji = function (t) {
            return o.test(t);
        }),
            (t.testNumeric = function (t) {
                return i.test(t);
            }),
            (t.testAlphanumeric = function (t) {
                return a.test(t);
            });
    }),
    F = (0, n.t)((t) => {
        var e = U(),
            r = D();
        (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
            (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
            (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
            (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
            (t.MIXED = { bit: -1 }),
            (t.getCharCountIndicator = function (t, r) {
                if (!t.ccBits) throw Error("Invalid mode: " + t);
                if (!e.isValid(r)) throw Error("Invalid version: " + r);
                return r >= 1 && r < 10 ? t.ccBits[0] : r < 27 ? t.ccBits[1] : t.ccBits[2];
            }),
            (t.getBestModeForData = function (e) {
                return r.testNumeric(e)
                    ? t.NUMERIC
                    : r.testAlphanumeric(e)
                      ? t.ALPHANUMERIC
                      : r.testKanji(e)
                        ? t.KANJI
                        : t.BYTE;
            }),
            (t.toString = function (t) {
                if (t && t.id) return t.id;
                throw Error("Invalid mode");
            }),
            (t.isValid = function (t) {
                return t && t.bit && t.ccBits;
            }),
            (t.from = function (e, r) {
                if (t.isValid(e)) return e;
                try {
                    if ("string" != typeof e) throw Error("Param is not a string");
                    switch (e.toLowerCase()) {
                        case "numeric":
                            return t.NUMERIC;
                        case "alphanumeric":
                            return t.ALPHANUMERIC;
                        case "kanji":
                            return t.KANJI;
                        case "byte":
                            return t.BYTE;
                        default:
                            throw Error("Unknown mode: " + e);
                    }
                } catch {
                    return r;
                }
            });
    }),
    z = (0, n.t)((t) => {
        var e = R(),
            r = N(),
            n = b(),
            o = F(),
            i = U(),
            a = e.getBCHDigit(7973);
        function s(t, e) {
            return o.getCharCountIndicator(t, e) + 4;
        }
        (t.from = function (t, e) {
            return i.isValid(t) ? parseInt(t, 10) : e;
        }),
            (t.getCapacity = function (t, n, a) {
                if (!i.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === a && (a = o.BYTE);
                let l = (e.getSymbolTotalCodewords(t) - r.getTotalCodewordsCount(t, n)) * 8;
                if (a === o.MIXED) return l;
                let u = l - s(a, t);
                switch (a) {
                    case o.NUMERIC:
                        return Math.floor((u / 10) * 3);
                    case o.ALPHANUMERIC:
                        return Math.floor((u / 11) * 2);
                    case o.KANJI:
                        return Math.floor(u / 13);
                    case o.BYTE:
                    default:
                        return Math.floor(u / 8);
                }
            }),
            (t.getBestVersionForData = function (e, r) {
                let i,
                    a = n.from(r, n.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) {
                        for (let r = 1; r <= 40; r++)
                            if (
                                (function (t, e) {
                                    let r = 0;
                                    return (
                                        t.forEach(function (t) {
                                            let n = s(t.mode, e);
                                            r += n + t.getBitsLength();
                                        }),
                                        r
                                    );
                                })(e, r) <= t.getCapacity(r, a, o.MIXED)
                            )
                                return r;
                        return;
                    }
                    if (0 === e.length) return 1;
                    i = e[0];
                } else i = e;
                return (function (e, r, n) {
                    for (let o = 1; o <= 40; o++) if (r <= t.getCapacity(o, n, e)) return o;
                })(i.mode, i.getLength(), a);
            }),
            (t.getEncodedBits = function (t) {
                if (!i.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                let r = t << 12;
                for (; e.getBCHDigit(r) - a >= 0; ) r ^= 7973 << (e.getBCHDigit(r) - a);
                return (t << 12) | r;
            });
    }),
    _ = (0, n.t)((t) => {
        var e = R(),
            r = e.getBCHDigit(1335);
        t.getEncodedBits = function (t, n) {
            let o = (t.bit << 3) | n,
                i = o << 10;
            for (; e.getBCHDigit(i) - r >= 0; ) i ^= 1335 << (e.getBCHDigit(i) - r);
            return ((o << 10) | i) ^ 21522;
        };
    }),
    H = (0, n.t)((t, e) => {
        var r = F();
        function n(t) {
            (this.mode = r.NUMERIC), (this.data = t.toString());
        }
        (n.getBitsLength = function (t) {
            return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
        }),
            (n.prototype.getLength = function () {
                return this.data.length;
            }),
            (n.prototype.getBitsLength = function () {
                return n.getBitsLength(this.data.length);
            }),
            (n.prototype.write = function (t) {
                let e, r;
                for (e = 0; e + 3 <= this.data.length; e += 3) (r = parseInt(this.data.substr(e, 3), 10)), t.put(r, 10);
                let n = this.data.length - e;
                n > 0 && ((r = parseInt(this.data.substr(e), 10)), t.put(r, 3 * n + 1));
            }),
            (e.exports = n);
    }),
    K = (0, n.t)((t, e) => {
        var r = F(),
            n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
        function o(t) {
            (this.mode = r.ALPHANUMERIC), (this.data = t);
        }
        (o.getBitsLength = function (t) {
            return 11 * Math.floor(t / 2) + (t % 2) * 6;
        }),
            (o.prototype.getLength = function () {
                return this.data.length;
            }),
            (o.prototype.getBitsLength = function () {
                return o.getBitsLength(this.data.length);
            }),
            (o.prototype.write = function (t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let r = 45 * n.indexOf(this.data[e]);
                    (r += n.indexOf(this.data[e + 1])), t.put(r, 11);
                }
                this.data.length % 2 && t.put(n.indexOf(this.data[e]), 6);
            }),
            (e.exports = o);
    }),
    J = (0, n.t)((t, e) => {
        var r = F();
        function n(t) {
            (this.mode = r.BYTE),
                "string" == typeof t ? (this.data = new TextEncoder().encode(t)) : (this.data = new Uint8Array(t));
        }
        (n.getBitsLength = function (t) {
            return 8 * t;
        }),
            (n.prototype.getLength = function () {
                return this.data.length;
            }),
            (n.prototype.getBitsLength = function () {
                return n.getBitsLength(this.data.length);
            }),
            (n.prototype.write = function (t) {
                for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8);
            }),
            (e.exports = n);
    }),
    Y = (0, n.t)((t, e) => {
        var r = F(),
            n = R();
        function o(t) {
            (this.mode = r.KANJI), (this.data = t);
        }
        (o.getBitsLength = function (t) {
            return 13 * t;
        }),
            (o.prototype.getLength = function () {
                return this.data.length;
            }),
            (o.prototype.getBitsLength = function () {
                return o.getBitsLength(this.data.length);
            }),
            (o.prototype.write = function (t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let r = n.toSJIS(this.data[e]);
                    if (r >= 33088 && r <= 40956) r -= 33088;
                    else if (r >= 57408 && r <= 60351) r -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    (r = ((r >>> 8) & 255) * 192 + (255 & r)), t.put(r, 13);
                }
            }),
            (e.exports = o);
    }),
    O = (0, n.t)((t, e) => {
        var r = {
            single_source_shortest_paths: function (t, e, n) {
                var o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = {},
                    h = {};
                h[e] = 0;
                var g = r.PriorityQueue.make();
                for (g.push(e, 0); !g.empty(); )
                    for (a in ((i = (o = g.pop()).value), (s = o.cost), (l = t[i] || {})))
                        l.hasOwnProperty(a) &&
                            ((u = s + l[a]),
                            (c = h[a]),
                            (void 0 === h[a] || c > u) && ((h[a] = u), g.push(a, u), (d[a] = i)));
                if (void 0 !== n && void 0 === h[n])
                    throw Error(["Could not find a path from ", e, " to ", n, "."].join(""));
                return d;
            },
            extract_shortest_path_from_predecessor_list: function (t, e) {
                for (var r = [], n = e; n; ) r.push(n), t[n], (n = t[n]);
                return r.reverse(), r;
            },
            find_path: function (t, e, n) {
                var o = r.single_source_shortest_paths(t, e, n);
                return r.extract_shortest_path_from_predecessor_list(o, n);
            },
            PriorityQueue: {
                make: function (t) {
                    var e,
                        n = r.PriorityQueue,
                        o = {};
                    for (e in ((t ||= {}), n)) n.hasOwnProperty(e) && (o[e] = n[e]);
                    return (o.queue = []), (o.sorter = t.sorter || n.default_sorter), o;
                },
                default_sorter: function (t, e) {
                    return t.cost - e.cost;
                },
                push: function (t, e) {
                    this.queue.push({ value: t, cost: e }), this.queue.sort(this.sorter);
                },
                pop: function () {
                    return this.queue.shift();
                },
                empty: function () {
                    return 0 === this.queue.length;
                },
            },
        };
        void 0 !== e && (e.exports = r);
    }),
    V = (0, n.t)((t) => {
        var e = F(),
            r = H(),
            n = K(),
            o = J(),
            i = Y(),
            a = D(),
            s = R(),
            l = O();
        function u(t) {
            return unescape(encodeURIComponent(t)).length;
        }
        function c(t, e, r) {
            let n = [],
                o;
            for (; null !== (o = t.exec(r)); ) n.push({ data: o[0], index: o.index, mode: e, length: o[0].length });
            return n;
        }
        function d(t) {
            let r = c(a.NUMERIC, e.NUMERIC, t),
                n = c(a.ALPHANUMERIC, e.ALPHANUMERIC, t),
                o,
                i;
            return (
                s.isKanjiModeEnabled()
                    ? ((o = c(a.BYTE, e.BYTE, t)), (i = c(a.KANJI, e.KANJI, t)))
                    : ((o = c(a.BYTE_KANJI, e.BYTE, t)), (i = [])),
                r
                    .concat(n, o, i)
                    .sort(function (t, e) {
                        return t.index - e.index;
                    })
                    .map(function (t) {
                        return { data: t.data, mode: t.mode, length: t.length };
                    })
            );
        }
        function h(t, a) {
            switch (a) {
                case e.NUMERIC:
                    return r.getBitsLength(t);
                case e.ALPHANUMERIC:
                    return n.getBitsLength(t);
                case e.KANJI:
                    return i.getBitsLength(t);
                case e.BYTE:
                    return o.getBitsLength(t);
            }
        }
        function g(t, a) {
            let l,
                u = e.getBestModeForData(t);
            if ((l = e.from(a, u)) !== e.BYTE && l.bit < u.bit)
                throw Error(
                    '"' +
                        t +
                        '" cannot be encoded with mode ' +
                        e.toString(l) +
                        ".\n Suggested mode is: " +
                        e.toString(u),
                );
            switch ((l === e.KANJI && !s.isKanjiModeEnabled() && (l = e.BYTE), l)) {
                case e.NUMERIC:
                    return new r(t);
                case e.ALPHANUMERIC:
                    return new n(t);
                case e.KANJI:
                    return new i(t);
                case e.BYTE:
                    return new o(t);
            }
        }
        (t.fromArray = function (t) {
            return t.reduce(function (t, e) {
                return "string" == typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t;
            }, []);
        }),
            (t.fromString = function (r, n) {
                let o = (function (t, r) {
                        let n = {},
                            o = { start: {} },
                            i = ["start"];
                        for (let a = 0; a < t.length; a++) {
                            let s = t[a],
                                l = [];
                            for (let t = 0; t < s.length; t++) {
                                let u = s[t],
                                    c = "" + a + t;
                                l.push(c), (n[c] = { node: u, lastCount: 0 }), (o[c] = {});
                                for (let t = 0; t < i.length; t++) {
                                    let a = i[t];
                                    n[a] && n[a].node.mode === u.mode
                                        ? ((o[a][c] = h(n[a].lastCount + u.length, u.mode) - h(n[a].lastCount, u.mode)),
                                          (n[a].lastCount += u.length))
                                        : (n[a] && (n[a].lastCount = u.length),
                                          (o[a][c] = h(u.length, u.mode) + 4 + e.getCharCountIndicator(u.mode, r)));
                                }
                            }
                            i = l;
                        }
                        for (let t = 0; t < i.length; t++) o[i[t]].end = 0;
                        return { map: o, table: n };
                    })(
                        (function (t) {
                            let r = [];
                            for (let n = 0; n < t.length; n++) {
                                let o = t[n];
                                switch (o.mode) {
                                    case e.NUMERIC:
                                        r.push([
                                            o,
                                            { data: o.data, mode: e.ALPHANUMERIC, length: o.length },
                                            { data: o.data, mode: e.BYTE, length: o.length },
                                        ]);
                                        break;
                                    case e.ALPHANUMERIC:
                                        r.push([o, { data: o.data, mode: e.BYTE, length: o.length }]);
                                        break;
                                    case e.KANJI:
                                        r.push([o, { data: o.data, mode: e.BYTE, length: u(o.data) }]);
                                        break;
                                    case e.BYTE:
                                        r.push([{ data: o.data, mode: e.BYTE, length: u(o.data) }]);
                                }
                            }
                            return r;
                        })(d(r, s.isKanjiModeEnabled())),
                        n,
                    ),
                    i = l.find_path(o.map, "start", "end"),
                    a = [];
                for (let t = 1; t < i.length - 1; t++) a.push(o.table[i[t]].node);
                return t.fromArray(
                    a.reduce(function (t, e) {
                        let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
                        return r && r.mode === e.mode ? (t[t.length - 1].data += e.data) : t.push(e), t;
                    }, []),
                );
            }),
            (t.rawSplit = function (e) {
                return t.fromArray(d(e, s.isKanjiModeEnabled()));
            });
    }),
    q = (0, n.t)((t) => {
        var e = R(),
            r = b(),
            n = A(),
            o = P(),
            i = B(),
            a = M(),
            s = S(),
            l = N(),
            u = x(),
            c = z(),
            d = _(),
            h = F(),
            g = V();
        function f(t, e, r) {
            let n = t.size,
                o = d.getEncodedBits(e, r),
                i,
                a;
            for (i = 0; i < 15; i++)
                (a = ((o >> i) & 1) == 1),
                    i < 6 ? t.set(i, 8, a, !0) : i < 8 ? t.set(i + 1, 8, a, !0) : t.set(n - 15 + i, 8, a, !0),
                    i < 8
                        ? t.set(8, n - i - 1, a, !0)
                        : i < 9
                          ? t.set(8, 15 - i - 1 + 1, a, !0)
                          : t.set(8, 15 - i - 1, a, !0);
            t.set(n - 8, 8, 1, !0);
        }
        t.create = function (t, d) {
            if (void 0 === t || "" === t) throw Error("No input text");
            let p = r.M,
                v,
                m;
            return (
                void 0 !== d &&
                    ((p = r.from(d.errorCorrectionLevel, r.M)),
                    (v = c.from(d.version)),
                    (m = s.from(d.maskPattern)),
                    d.toSJISFunc && e.setToSJISFunction(d.toSJISFunc)),
                (function (t, r, d, p) {
                    let v;
                    if (Array.isArray(t)) v = g.fromArray(t);
                    else if ("string" == typeof t) {
                        let e = r;
                        if (!e) {
                            let r = g.rawSplit(t);
                            e = c.getBestVersionForData(r, d);
                        }
                        v = g.fromString(t, e || 40);
                    } else throw Error("Invalid data");
                    let m = c.getBestVersionForData(v, d);
                    if (!m) throw Error("The amount of data is too big to be stored in a QR Code");
                    if (r) {
                        if (r < m)
                            throw Error(
                                "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                                    m +
                                    ".\n",
                            );
                    } else r = m;
                    let C = (function (t, r, o) {
                            let i = new n();
                            o.forEach(function (e) {
                                i.put(e.mode.bit, 4),
                                    i.put(e.getLength(), h.getCharCountIndicator(e.mode, t)),
                                    e.write(i);
                            });
                            let a = (e.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, r)) * 8;
                            for (i.getLengthInBits() + 4 <= a && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
                                i.putBit(0);
                            let s = (a - i.getLengthInBits()) / 8;
                            for (let t = 0; t < s; t++) i.put(t % 2 ? 17 : 236, 8);
                            return (function (t, r, n) {
                                let o = e.getSymbolTotalCodewords(r),
                                    i = o - l.getTotalCodewordsCount(r, n),
                                    a = l.getBlocksCount(r, n),
                                    s = a - (o % a),
                                    c = Math.floor(o / a),
                                    d = Math.floor(i / a),
                                    h = d + 1,
                                    g = c - d,
                                    f = new u(g),
                                    p = 0,
                                    v = Array(a),
                                    m = Array(a),
                                    C = 0,
                                    E = new Uint8Array(t.buffer);
                                for (let t = 0; t < a; t++) {
                                    let e = t < s ? d : h;
                                    (v[t] = E.slice(p, p + e)), (m[t] = f.encode(v[t])), (p += e), (C = Math.max(C, e));
                                }
                                let y = new Uint8Array(o),
                                    w = 0,
                                    I,
                                    T;
                                for (I = 0; I < C; I++) for (T = 0; T < a; T++) I < v[T].length && (y[w++] = v[T][I]);
                                for (I = 0; I < g; I++) for (T = 0; T < a; T++) y[w++] = m[T][I];
                                return y;
                            })(i, t, r);
                        })(r, d, v),
                        E = new o(e.getSymbolSize(r));
                    return (
                        (function (t, e) {
                            let r = t.size,
                                n = a.getPositions(e);
                            for (let e = 0; e < n.length; e++) {
                                let o = n[e][0],
                                    i = n[e][1];
                                for (let e = -1; e <= 7; e++)
                                    if (!(o + e <= -1 || r <= o + e))
                                        for (let n = -1; n <= 7; n++)
                                            i + n <= -1 ||
                                                r <= i + n ||
                                                ((e >= 0 && e <= 6 && (0 === n || 6 === n)) ||
                                                (n >= 0 && n <= 6 && (0 === e || 6 === e)) ||
                                                (e >= 2 && e <= 4 && n >= 2 && n <= 4)
                                                    ? t.set(o + e, i + n, !0, !0)
                                                    : t.set(o + e, i + n, !1, !0));
                            }
                        })(E, r),
                        (function (t) {
                            let e = t.size;
                            for (let r = 8; r < e - 8; r++) {
                                let e = r % 2 == 0;
                                t.set(r, 6, e, !0), t.set(6, r, e, !0);
                            }
                        })(E),
                        (function (t, e) {
                            let r = i.getPositions(e);
                            for (let e = 0; e < r.length; e++) {
                                let n = r[e][0],
                                    o = r[e][1];
                                for (let e = -2; e <= 2; e++)
                                    for (let r = -2; r <= 2; r++)
                                        -2 === e || 2 === e || -2 === r || 2 === r || (0 === e && 0 === r)
                                            ? t.set(n + e, o + r, !0, !0)
                                            : t.set(n + e, o + r, !1, !0);
                            }
                        })(E, r),
                        f(E, d, 0),
                        r >= 7 &&
                            (function (t, e) {
                                let r = t.size,
                                    n = c.getEncodedBits(e),
                                    o,
                                    i,
                                    a;
                                for (let e = 0; e < 18; e++)
                                    (o = Math.floor(e / 3)),
                                        (i = (e % 3) + r - 8 - 3),
                                        (a = ((n >> e) & 1) == 1),
                                        t.set(o, i, a, !0),
                                        t.set(i, o, a, !0);
                            })(E, r),
                        (function (t, e) {
                            let r = t.size,
                                n = -1,
                                o = r - 1,
                                i = 7,
                                a = 0;
                            for (let s = r - 1; s > 0; s -= 2)
                                for (6 === s && s--; ; ) {
                                    for (let r = 0; r < 2; r++)
                                        if (!t.isReserved(o, s - r)) {
                                            let n = !1;
                                            a < e.length && (n = ((e[a] >>> i) & 1) == 1),
                                                t.set(o, s - r, n),
                                                -1 == --i && (a++, (i = 7));
                                        }
                                    if ((o += n) < 0 || r <= o) {
                                        (o -= n), (n = -n);
                                        break;
                                    }
                                }
                        })(E, C),
                        isNaN(p) && (p = s.getBestMask(E, f.bind(null, E, d))),
                        s.applyMask(p, E),
                        f(E, d, p),
                        { modules: E, version: r, errorCorrectionLevel: d, maskPattern: p, segments: v }
                    );
                })(t, v, p, m)
            );
        };
    }),
    Q = (0, n.t)((t) => {
        function e(t) {
            if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
                throw Error("Color should be defined as hex string");
            let e = t.slice().replace("#", "").split("");
            if (e.length < 3 || 5 === e.length || e.length > 8) throw Error("Invalid hex color: " + t);
            (3 === e.length || 4 === e.length) &&
                (e = Array.prototype.concat.apply(
                    [],
                    e.map(function (t) {
                        return [t, t];
                    }),
                )),
                6 === e.length && e.push("F", "F");
            let r = parseInt(e.join(""), 16);
            return {
                r: (r >> 24) & 255,
                g: (r >> 16) & 255,
                b: (r >> 8) & 255,
                a: 255 & r,
                hex: "#" + e.slice(0, 6).join(""),
            };
        }
        (t.getOptions = function (t) {
            (t ||= {}), (t.color ||= {});
            let r = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                n = t.width && t.width >= 21 ? t.width : void 0,
                o = t.scale || 4;
            return {
                width: n,
                scale: n ? 4 : o,
                margin: r,
                color: { dark: e(t.color.dark || "#000000ff"), light: e(t.color.light || "#ffffffff") },
                type: t.type,
                rendererOpts: t.rendererOpts || {},
            };
        }),
            (t.getScale = function (t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale;
            }),
            (t.getImageWidth = function (e, r) {
                let n = t.getScale(e, r);
                return Math.floor((e + 2 * r.margin) * n);
            }),
            (t.qrToImageData = function (e, r, n) {
                let o = r.modules.size,
                    i = r.modules.data,
                    a = t.getScale(o, n),
                    s = Math.floor((o + 2 * n.margin) * a),
                    l = n.margin * a,
                    u = [n.color.light, n.color.dark];
                for (let t = 0; t < s; t++)
                    for (let r = 0; r < s; r++) {
                        let c = (t * s + r) * 4,
                            d = n.color.light;
                        t >= l &&
                            r >= l &&
                            t < s - l &&
                            r < s - l &&
                            (d = u[+!!i[Math.floor((t - l) / a) * o + Math.floor((r - l) / a)]]),
                            (e[c++] = d.r),
                            (e[c++] = d.g),
                            (e[c++] = d.b),
                            (e[c] = d.a);
                    }
            });
    }),
    j = (0, n.t)((t) => {
        var e = Q();
        (t.render = function (t, r, n) {
            var o;
            let i = n,
                a = r;
            void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)),
                r ||
                    (a = (function () {
                        try {
                            return document.createElement("canvas");
                        } catch {
                            throw Error("You need to specify a canvas element");
                        }
                    })()),
                (i = e.getOptions(i));
            let s = e.getImageWidth(t.modules.size, i),
                l = a.getContext("2d"),
                u = l.createImageData(s, s);
            return (
                e.qrToImageData(u.data, t, i),
                (o = a),
                l.clearRect(0, 0, o.width, o.height),
                (o.style ||= {}),
                (o.height = s),
                (o.width = s),
                (o.style.height = s + "px"),
                (o.style.width = s + "px"),
                l.putImageData(u, 0, 0),
                a
            );
        }),
            (t.renderToDataURL = function (e, r, n) {
                let o = n;
                void 0 !== o || (r && r.getContext) || ((o = r), (r = void 0)), (o ||= {});
                let i = t.render(e, r, o),
                    a = o.type || "image/png",
                    s = o.rendererOpts || {};
                return i.toDataURL(a, s.quality);
            });
    }),
    $ = (0, n.t)((t) => {
        var e = Q();
        function r(t, e) {
            let r = t.a / 255,
                n = e + '="' + t.hex + '"';
            return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
        }
        function n(t, e, r) {
            let n = t + e;
            return void 0 !== r && (n += " " + r), n;
        }
        t.render = function (t, o, i) {
            let a = e.getOptions(o),
                s = t.modules.size,
                l = t.modules.data,
                u = s + 2 * a.margin,
                c = a.color.light.a ? "<path " + r(a.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                d =
                    "<path " +
                    r(a.color.dark, "stroke") +
                    ' d="' +
                    (function (t, e, r) {
                        let o = "",
                            i = 0,
                            a = !1,
                            s = 0;
                        for (let l = 0; l < t.length; l++) {
                            let u = Math.floor(l % e),
                                c = Math.floor(l / e);
                            u || a || (a = !0),
                                t[l]
                                    ? (s++,
                                      (l > 0 && u > 0 && t[l - 1]) ||
                                          ((o += a ? n("M", u + r, 0.5 + c + r) : n("m", i, 0)), (i = 0), (a = !1)),
                                      (u + 1 < e && t[l + 1]) || ((o += n("h", s)), (s = 0)))
                                    : i++;
                        }
                        return o;
                    })(l, s, a.margin) +
                    '"/>',
                h =
                    '<svg xmlns="http://www.w3.org/2000/svg" ' +
                    (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") +
                    ('viewBox="0 0 ' + u + " ") +
                    u +
                    '" shape-rendering="crispEdges">' +
                    c +
                    d +
                    "</svg>\n";
            return "function" == typeof i && i(null, h), h;
        };
    }),
    W = (0, n.t)((t) => {
        var e = T(),
            r = q(),
            n = j(),
            o = $();
        function i(t, n, o, i, a) {
            let s = [].slice.call(arguments, 1),
                l = s.length,
                u = "function" == typeof s[l - 1];
            if (!u && !e()) throw Error("Callback required as last argument");
            if (u) {
                if (l < 2) throw Error("Too few arguments provided");
                2 === l
                    ? ((a = o), (o = n), (n = i = void 0))
                    : 3 === l &&
                      (n.getContext && void 0 === a
                          ? ((a = i), (i = void 0))
                          : ((a = i), (i = o), (o = n), (n = void 0)));
            } else {
                if (l < 1) throw Error("Too few arguments provided");
                return (
                    1 === l ? ((o = n), (n = i = void 0)) : 2 !== l || n.getContext || ((i = o), (o = n), (n = void 0)),
                    new Promise(function (e, a) {
                        try {
                            e(t(r.create(o, i), n, i));
                        } catch (t) {
                            a(t);
                        }
                    })
                );
            }
            try {
                let e = r.create(o, i);
                a(null, t(e, n, i));
            } catch (t) {
                a(t);
            }
        }
        (t.create = r.create),
            (t.toCanvas = i.bind(null, n.render)),
            (t.toDataURL = i.bind(null, n.renderToDataURL)),
            (t.toString = i.bind(null, function (t, e, r) {
                return o.render(t, r);
            }));
    })(),
    X = ({ value: t, size: e = 150, bgColor: r = "#ffffff", fgColor: n = "#000000" }) => {
        let { t: a } = (0, o.n)(),
            [s, l] = (0, i.p)("");
        return (
            (0, i._)(() => {
                t &&
                    (0, W.toString)(t, { type: "svg", width: e, margin: 0, color: { dark: n, light: r } })
                        .then(l)
                        .catch(() => l(""));
            }, [t, e, r, n]),
            s
                ? (0, i.v)("div", {
                      class: "IncodeRedirectQrCode",
                      role: "img",
                      "aria-label": a("v2.redirectToMobile.qr.description"),
                      dangerouslySetInnerHTML: { __html: s },
                  })
                : null
        );
    },
    Z = ({ redirectUrl: t }) => {
        let { t: e } = (0, o.n)();
        return (0, i.v)(i.S, {
            children: [
                (0, i.v)("p", {
                    class: "IncodeRedirectTabDescription",
                    children: e("v2.redirectToMobile.qr.description"),
                }),
                (0, i.v)("div", { class: "IncodeRedirectQrWrapper", children: (0, i.v)(X, { value: t, size: 186 }) }),
            ],
        });
    },
    G = ({ formattedPhone: t, onResend: e, onChangePhone: r }) => {
        let { t: n } = (0, o.n)();
        return (0, i.v)("div", {
            class: "IncodeRedirectLinkSent",
            children: [
                (0, i.v)(g.t, { size: 32 }),
                (0, i.v)(l.r, { size: 16 }),
                (0, i.v)(v.t, { className: "IncodeRedirectLinkSentTitle", children: n("redirect.linkSent") }),
                (0, i.v)(l.r, { size: 12 }),
                (0, i.v)("p", {
                    class: "IncodeRedirectLinkSentPhone",
                    children: n("redirect.linkSentTo", { phone: t }),
                }),
                (0, i.v)(l.r, { size: 32 }),
                (0, i.v)("div", {
                    class: "IncodeRedirectLinkSentActions",
                    children: (0, i.v)(o.t, {
                        i18nKey: "redirect.didntReceiveLinkActions",
                        defaultValue:
                            "Didn't receive the link? <resend>Resend</resend> or <changePhone>Change phone number</changePhone>",
                        components: {
                            resend: (0, i.v)(h.t, { variant: "link", onClick: e }),
                            changePhone: (0, i.v)(h.t, { variant: "link", onClick: r }),
                        },
                    }),
                }),
            ],
        });
    },
    tt = ({ countryCode: t, error: e, isSending: r, isPhoneValid: n, onPhoneChange: a, onSendSms: s }) => {
        let { t: l } = (0, o.n)();
        return (0, i.v)(i.S, {
            children: [
                (0, i.v)(f.t, { id: "sms-phone", countryCode: t, error: e, disabled: r, autoFocus: !0, onChange: a }),
                (0, i.v)(h.t, {
                    onClick: s,
                    disabled: !n || r,
                    isLoading: r,
                    class: "IncodeRedirectSmsSendButton",
                    children: l("redirect.sendLinkViaSms"),
                }),
            ],
        });
    },
    te = ({ phonePrefix: t, smsSent: e, error: r, manager: n, onResend: a }) => {
        let { t: s } = (0, o.n)(),
            [l, u] = (0, i.p)(t),
            [c, d] = (0, i.p)(!1),
            [h, g] = (0, i.p)(!1),
            p = (0, f.r)(t)?.code ?? "",
            v = l.startsWith(t) ? `${t} ${l.slice(t.length).replace(/(\d{3})(?=\d)/g, "$1 ")}` : l,
            m = (0, i.h)((t, e) => {
                u(t), d(e);
            }, []),
            C = (0, i.h)(() => {
                g(!0), n.sendSms(l), g(!1);
            }, [n, l]),
            E = (0, i.h)(() => {
                C(), a();
            }, [C, a]),
            y = (0, i.h)(() => {
                u(t), d(!1), n.resetSms();
            }, [n, t]);
        return (0, i.v)(i.S, {
            children: [
                (0, i.v)("p", {
                    class: "IncodeRedirectTabDescription",
                    children: s("v2.redirectToMobile.sms.description"),
                }),
                e
                    ? (0, i.v)(G, { formattedPhone: v, onResend: E, onChangePhone: y })
                    : (0, i.v)(tt, {
                          countryCode: p,
                          phonePrefix: t,
                          error: r,
                          isSending: h,
                          isPhoneValid: c,
                          onPhoneChange: m,
                          onSendSms: C,
                      }),
            ],
        });
    },
    tr = ({
        redirectUrl: t,
        phonePrefix: e,
        smsSent: r,
        disableSmsOption: n,
        addContinueToDesktop: a,
        error: s,
        manager: l,
        logoSrc: u,
    }) => {
        let { t: c } = (0, o.n)(),
            [d, h] = (0, i.p)(!1),
            g = (0, i.h)(() => {
                h(!0), setTimeout(() => h(!1), 3e3);
            }, []),
            f = (0, i.h)(() => {
                l.continueOnDesktop();
            }, [l]);
        return (0, i.v)("div", {
            class: "IncodeRedirectContainer",
            children: [
                (0, i.v)(I, { visible: d }),
                (0, i.v)("div", {
                    class: "IncodeRedirectCard",
                    children: [
                        n
                            ? (0, i.v)(i.S, {
                                  children: [
                                      (0, i.v)(y, { logoSrc: u }),
                                      (0, i.v)("div", {
                                          class: "IncodeRedirectOptions",
                                          children: (0, i.v)(Z, { redirectUrl: t }),
                                      }),
                                  ],
                              })
                            : (0, i.v)(C.t, {
                                  defaultValue: "qr",
                                  listClassName: "IncodeRedirectTabs",
                                  triggerClassName: "IncodeRedirectTab",
                                  activeTriggerClassName: "IncodeRedirectTabActive",
                                  children: [
                                      (0, i.v)("div", {
                                          class: "IncodeRedirectTopGroup",
                                          children: [
                                              (0, i.v)(y, { logoSrc: u }),
                                              (0, i.v)(C.t.List, {
                                                  label: c("v2.redirectToMobile.tabs.label"),
                                                  children: [
                                                      (0, i.v)(C.t.Trigger, {
                                                          value: "qr",
                                                          children: c("v2.redirectToMobile.tabs.0"),
                                                      }),
                                                      (0, i.v)(C.t.Trigger, {
                                                          value: "sms",
                                                          children: c("v2.redirectToMobile.tabs.1"),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, i.v)("div", {
                                          class: "IncodeRedirectOptions",
                                          children: [
                                              (0, i.v)(C.t.Content, {
                                                  value: "qr",
                                                  children: (0, i.v)(Z, { redirectUrl: t }),
                                              }),
                                              (0, i.v)(C.t.Content, {
                                                  value: "sms",
                                                  children: (0, i.v)(te, {
                                                      phonePrefix: e,
                                                      smsSent: r,
                                                      error: s,
                                                      manager: l,
                                                      onResend: g,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                        (0, i.v)(w, { addContinueToDesktop: a, onContinueOnDesktop: f }),
                    ],
                }),
            ],
        });
    },
    tn = ({ title: t, subtitle: e, logoSrc: r }) => {
        let { t: n } = (0, o.n)(),
            a = t ?? n("verificationComplete.title"),
            s = e ?? n("verificationComplete.message");
        return (0, i.v)("div", {
            class: "IncodeRedirectFinishedContainer",
            children: [
                (0, i.v)("img", { src: r, alt: "", "aria-hidden": "true", class: "IncodeRedirectLogo" }),
                a ? (0, i.v)(v.t, { className: "IncodeRedirectFinishedTitle", children: a }) : null,
                s ? (0, i.v)("p", { class: "IncodeRedirectFinishedSubtitle", children: s }) : null,
            ],
        });
    },
    to = ({ config: t, onFinish: e, onContinue: r, onError: n }) => {
        let [o, s] = (0, a.o)(() => (0, E.X)({ config: t })),
            { logoSrc: l, logoHeightPx: h } = (0, c.n)({
                hideHeader: void 0,
                hideFooterBranding: void 0,
                logo: void 0,
                defaultLogoSrc: u.t,
            });
        (0, i._)(() => {
            "finished" === o.status && e?.();
        }, [o.status, e]),
            (0, i._)(() => {
                "closed" === o.status && r?.();
            }, [o.status, r]),
            (0, i._)(() => {
                "error" === o.status && n?.(o.error);
            }, [o.status, n, o]);
        let g =
            "idle" === o.status || "loading" === o.status
                ? (0, i.v)(d.t, { hideText: !0 })
                : "redirecting" === o.status
                  ? (0, i.v)(tr, {
                        redirectUrl: o.redirectUrl,
                        phonePrefix: o.phonePrefix,
                        smsSent: o.smsSent,
                        disableSmsOption: t.disableSmsOption ?? !1,
                        addContinueToDesktop: t.addContinueToDesktop ?? !1,
                        error: o.error,
                        manager: s,
                        logoSrc: l,
                    })
                  : "finished" === o.status
                    ? (0, i.v)(tn, { logoSrc: l })
                    : null;
        return (0, i.v)("main", { class: "IncodeRedirectRoot", style: { "--logo-height": `${h}px` }, children: g });
    },
    ti = ({ config: t, onFinish: e, onContinue: r, onError: n }) =>
        (0, i.v)(s.t, { children: t ? (0, i.v)(to, { config: t, onFinish: e, onContinue: r, onError: n }) : null });
(0, p.t)(ti, "incode-redirect-to-mobile");
