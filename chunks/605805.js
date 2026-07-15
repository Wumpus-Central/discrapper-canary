r.d(e, { RedirectToMobile: () => to });
var n = r(327169),
    i = r(529058),
    o = r(287822),
    a = r(748922),
    s = r(898159),
    l = r(898369),
    u = r(727859),
    c = r(188043);
r(48913);
var d = r(486234),
    h = r(787146);
r(748158);
var f = r(430671),
    g = r(34050),
    p = r(906819),
    v = r(396945),
    m = r(682647),
    E = r(188868),
    y = r(886788),
    C = ({ logoSrc: t }) => {
        let { t: e } = (0, i.n)();
        return (0, o.v)("header", {
            class: "IncodeRedirectHeader",
            children: [
                (0, o.v)("div", {
                    class: "IncodeRedirectLogoWrapper",
                    children: (0, o.v)("img", { src: t, alt: "", "aria-hidden": "true", class: "IncodeRedirectLogo" }),
                }),
                (0, o.v)(l.r, { size: 24 }),
                (0, o.v)(g.t, { className: "IncodeRedirectTitle", children: e("v2.redirectToMobile.title") }),
                (0, o.v)(l.r, { size: 12 }),
                (0, o.v)("p", { class: "IncodeRedirectSubtitle", children: e("v2.redirectToMobile.subtitle") }),
            ],
        });
    },
    w = ({ addContinueToDesktop: t, onContinueOnDesktop: e }) => {
        let { t: r } = (0, i.n)();
        return (0, o.v)("footer", {
            class: "IncodeRedirectBottomNav",
            children: [
                (0, o.v)(l.r, {}),
                t
                    ? (0, o.v)("div", {
                          class: "IncodeRedirectFooterContent",
                          children: [
                              (0, o.v)("span", {
                                  class: "IncodeRedirectFooterContentText",
                                  children: r("idv2.permissions.or"),
                              }),
                              (0, o.v)(h.t, {
                                  variant: "secondary",
                                  onClick: e,
                                  children: r("redirect.continueOnDesktop"),
                              }),
                          ],
                      })
                    : null,
                (0, o.v)(c.n, {}),
            ],
        });
    },
    I = ({ visible: t }) => {
        let { t: e } = (0, i.n)();
        return t
            ? (0, o.v)("div", {
                  class: "IncodeRedirectToast",
                  children: (0, o.v)(m.t, { variant: "positive", children: e("redirect.linkResent") }),
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
                } catch (t) {
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
    B = (0, n.t)((t, e) => {
        function r(t) {
            if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
            (this.size = t), (this.data = new Uint8Array(t * t)), (this.reservedBit = new Uint8Array(t * t));
        }
        (r.prototype.set = function (t, e, r, n) {
            let i = t * this.size + e;
            (this.data[i] = r), n && (this.reservedBit[i] = !0);
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
    M = (0, n.t)((t) => {
        var e = R().getSymbolSize;
        (t.getRowColCoords = function (t) {
            if (1 === t) return [];
            let r = Math.floor(t / 7) + 2,
                n = e(t),
                i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * r - 2)),
                o = [n - 7];
            for (let t = 1; t < r - 1; t++) o[t] = o[t - 1] - i;
            return o.push(6), o.reverse();
        }),
            (t.getPositions = function (e) {
                let r = [],
                    n = t.getRowColCoords(e),
                    i = n.length;
                for (let t = 0; t < i; t++)
                    for (let e = 0; e < i; e++)
                        (0 !== t || 0 !== e) &&
                            (0 !== t || e !== i - 1) &&
                            (t !== i - 1 || 0 !== e) &&
                            r.push([n[t], n[e]]);
                return r;
            });
    }),
    N = (0, n.t)((t) => {
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
    P = (0, n.t)((t) => {
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
                    i = 0,
                    o = null,
                    a = null;
                for (let s = 0; s < e; s++) {
                    (n = i = 0), (o = a = null);
                    for (let l = 0; l < e; l++) {
                        let e = t.get(s, l);
                        e === o ? n++ : (n >= 5 && (r += 3 + (n - 5)), (o = e), (n = 1)),
                            (e = t.get(l, s)) === a ? i++ : (i >= 5 && (r += 3 + (i - 5)), (a = e), (i = 1));
                    }
                    n >= 5 && (r += 3 + (n - 5)), i >= 5 && (r += 3 + (i - 5));
                }
                return r;
            }),
            (t.getPenaltyN2 = function (t) {
                let e = t.size,
                    r = 0;
                for (let n = 0; n < e - 1; n++)
                    for (let i = 0; i < e - 1; i++) {
                        let e = t.get(n, i) + t.get(n, i + 1) + t.get(n + 1, i) + t.get(n + 1, i + 1);
                        (4 === e || 0 === e) && r++;
                    }
                return 3 * r;
            }),
            (t.getPenaltyN3 = function (t) {
                let e = t.size,
                    r = 0,
                    n = 0,
                    i = 0;
                for (let o = 0; o < e; o++) {
                    n = i = 0;
                    for (let a = 0; a < e; a++)
                        (n = ((n << 1) & 2047) | t.get(o, a)),
                            a >= 10 && (1488 === n || 93 === n) && r++,
                            (i = ((i << 1) & 2047) | t.get(a, o)),
                            a >= 10 && (1488 === i || 93 === i) && r++;
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
                for (let i = 0; i < n; i++)
                    for (let o = 0; o < n; o++)
                        r.isReserved(o, i) ||
                            r.xor(
                                o,
                                i,
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
                                })(e, o, i),
                            );
            }),
            (t.getBestMask = function (e, r) {
                let n = Object.keys(t.Patterns).length,
                    i = 0,
                    o = 1 / 0;
                for (let a = 0; a < n; a++) {
                    r(a), t.applyMask(a, e);
                    let n = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(a, e), n < o && ((o = n), (i = a));
                }
                return i;
            });
    }),
    L = (0, n.t)((t) => {
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
    S = (0, n.t)((t) => {
        var e = new Uint8Array(512),
            r = new Uint8Array(256);
        let n = 1;
        for (let t = 0; t < 255; t++) (e[t] = n), (r[n] = t), 256 & (n <<= 1) && (n ^= 285);
        for (let t = 255; t < 512; t++) e[t] = e[t - 255];
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
    x = (0, n.t)((t) => {
        var e = S();
        (t.mul = function (t, r) {
            let n = new Uint8Array(t.length + r.length - 1);
            for (let i = 0; i < t.length; i++) for (let o = 0; o < r.length; o++) n[i + o] ^= e.mul(t[i], r[o]);
            return n;
        }),
            (t.mod = function (t, r) {
                let n = new Uint8Array(t);
                for (; n.length - r.length >= 0; ) {
                    let t = n[0];
                    for (let i = 0; i < r.length; i++) n[i] ^= e.mul(r[i], t);
                    let i = 0;
                    for (; i < n.length && 0 === n[i]; ) i++;
                    n = n.slice(i);
                }
                return n;
            }),
            (t.generateECPolynomial = function (r) {
                let n = new Uint8Array([1]);
                for (let i = 0; i < r; i++) n = t.mul(n, new Uint8Array([1, e.exp(i)]));
                return n;
            });
    }),
    k = (0, n.t)((t, e) => {
        var r = x();
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
                    i = this.degree - n.length;
                if (i > 0) {
                    let t = new Uint8Array(this.degree);
                    return t.set(n, i), t;
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
    z = (0, n.t)((t) => {
        var e = "[0-9]+",
            r =
                "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        (t.KANJI = RegExp(r, "g")),
            (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
            (t.BYTE = RegExp(n, "g")),
            (t.NUMERIC = RegExp(e, "g")),
            (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
        var i = RegExp("^" + r + "$"),
            o = RegExp("^" + e + "$"),
            a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        (t.testKanji = function (t) {
            return i.test(t);
        }),
            (t.testNumeric = function (t) {
                return o.test(t);
            }),
            (t.testAlphanumeric = function (t) {
                return a.test(t);
            });
    }),
    F = (0, n.t)((t) => {
        var e = U(),
            r = z();
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
                } catch (t) {
                    return r;
                }
            });
    }),
    D = (0, n.t)((t) => {
        var e = R(),
            r = L(),
            n = b(),
            i = F(),
            o = U(),
            a = e.getBCHDigit(7973);
        function s(t, e) {
            return i.getCharCountIndicator(t, e) + 4;
        }
        (t.from = function (t, e) {
            return o.isValid(t) ? parseInt(t, 10) : e;
        }),
            (t.getCapacity = function (t, n, a) {
                if (!o.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === a && (a = i.BYTE);
                let l = (e.getSymbolTotalCodewords(t) - r.getTotalCodewordsCount(t, n)) * 8;
                if (a === i.MIXED) return l;
                let u = l - s(a, t);
                switch (a) {
                    case i.NUMERIC:
                        return Math.floor((u / 10) * 3);
                    case i.ALPHANUMERIC:
                        return Math.floor((u / 11) * 2);
                    case i.KANJI:
                        return Math.floor(u / 13);
                    case i.BYTE:
                    default:
                        return Math.floor(u / 8);
                }
            }),
            (t.getBestVersionForData = function (e, r) {
                let o,
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
                                })(e, r) <= t.getCapacity(r, a, i.MIXED)
                            )
                                return r;
                        return;
                    }
                    if (0 === e.length) return 1;
                    o = e[0];
                } else o = e;
                return (function (e, r, n) {
                    for (let i = 1; i <= 40; i++) if (r <= t.getCapacity(i, n, e)) return i;
                })(o.mode, o.getLength(), a);
            }),
            (t.getEncodedBits = function (t) {
                if (!o.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                let r = t << 12;
                for (; e.getBCHDigit(r) - a >= 0; ) r ^= 7973 << (e.getBCHDigit(r) - a);
                return (t << 12) | r;
            });
    }),
    H = (0, n.t)((t) => {
        var e = R(),
            r = e.getBCHDigit(1335);
        t.getEncodedBits = function (t, n) {
            let i = (t.bit << 3) | n,
                o = i << 10;
            for (; e.getBCHDigit(o) - r >= 0; ) o ^= 1335 << (e.getBCHDigit(o) - r);
            return ((i << 10) | o) ^ 21522;
        };
    }),
    _ = (0, n.t)((t, e) => {
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
            n = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                " ",
                "$",
                "%",
                "*",
                "+",
                "-",
                ".",
                "/",
                ":",
            ];
        function i(t) {
            (this.mode = r.ALPHANUMERIC), (this.data = t);
        }
        (i.getBitsLength = function (t) {
            return 11 * Math.floor(t / 2) + (t % 2) * 6;
        }),
            (i.prototype.getLength = function () {
                return this.data.length;
            }),
            (i.prototype.getBitsLength = function () {
                return i.getBitsLength(this.data.length);
            }),
            (i.prototype.write = function (t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let r = 45 * n.indexOf(this.data[e]);
                    (r += n.indexOf(this.data[e + 1])), t.put(r, 11);
                }
                this.data.length % 2 && t.put(n.indexOf(this.data[e]), 6);
            }),
            (e.exports = i);
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
        function i(t) {
            (this.mode = r.KANJI), (this.data = t);
        }
        (i.getBitsLength = function (t) {
            return 13 * t;
        }),
            (i.prototype.getLength = function () {
                return this.data.length;
            }),
            (i.prototype.getBitsLength = function () {
                return i.getBitsLength(this.data.length);
            }),
            (i.prototype.write = function (t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let r = n.toSJIS(this.data[e]);
                    if (r >= 33088 && r <= 40956) r -= 33088;
                    else if (r >= 57408 && r <= 60351) r -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    (r = ((r >>> 8) & 255) * 192 + (255 & r)), t.put(r, 13);
                }
            }),
            (e.exports = i);
    }),
    O = (0, n.t)((t, e) => {
        var r = {
            single_source_shortest_paths: function (t, e, n) {
                var i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = {},
                    h = {};
                h[e] = 0;
                var f = r.PriorityQueue.make();
                for (f.push(e, 0); !f.empty(); )
                    for (a in ((o = (i = f.pop()).value), (s = i.cost), (l = t[o] || {})))
                        l.hasOwnProperty(a) &&
                            ((u = s + l[a]),
                            (c = h[a]),
                            (void 0 === h[a] || c > u) && ((h[a] = u), f.push(a, u), (d[a] = o)));
                if (void 0 !== n && void 0 === h[n])
                    throw Error(["Could not find a path from ", e, " to ", n, "."].join(""));
                return d;
            },
            extract_shortest_path_from_predecessor_list: function (t, e) {
                for (var r = [], n = e; n; ) r.push(n), t[n], (n = t[n]);
                return r.reverse(), r;
            },
            find_path: function (t, e, n) {
                var i = r.single_source_shortest_paths(t, e, n);
                return r.extract_shortest_path_from_predecessor_list(i, n);
            },
            PriorityQueue: {
                make: function (t) {
                    var e,
                        n = r.PriorityQueue,
                        i = {};
                    for (e in ((t = t || {}), n)) n.hasOwnProperty(e) && (i[e] = n[e]);
                    return (i.queue = []), (i.sorter = t.sorter || n.default_sorter), i;
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
    q = (0, n.t)((t) => {
        var e = F(),
            r = _(),
            n = K(),
            i = J(),
            o = Y(),
            a = z(),
            s = R(),
            l = O();
        function u(t) {
            return unescape(encodeURIComponent(t)).length;
        }
        function c(t, e, r) {
            let n,
                i = [];
            for (; null !== (n = t.exec(r)); ) i.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
            return i;
        }
        function d(t) {
            let r,
                n,
                i = c(a.NUMERIC, e.NUMERIC, t),
                o = c(a.ALPHANUMERIC, e.ALPHANUMERIC, t);
            return (
                s.isKanjiModeEnabled()
                    ? ((r = c(a.BYTE, e.BYTE, t)), (n = c(a.KANJI, e.KANJI, t)))
                    : ((r = c(a.BYTE_KANJI, e.BYTE, t)), (n = [])),
                i
                    .concat(o, r, n)
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
                    return o.getBitsLength(t);
                case e.BYTE:
                    return i.getBitsLength(t);
            }
        }
        function f(t, a) {
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
                    return new o(t);
                case e.BYTE:
                    return new i(t);
            }
        }
        (t.fromArray = function (t) {
            return t.reduce(function (t, e) {
                return "string" == typeof e ? t.push(f(e, null)) : e.data && t.push(f(e.data, e.mode)), t;
            }, []);
        }),
            (t.fromString = function (r, n) {
                let i = (function (t, r) {
                        let n = {},
                            i = { start: {} },
                            o = ["start"];
                        for (let a = 0; a < t.length; a++) {
                            let s = t[a],
                                l = [];
                            for (let t = 0; t < s.length; t++) {
                                let u = s[t],
                                    c = "" + a + t;
                                l.push(c), (n[c] = { node: u, lastCount: 0 }), (i[c] = {});
                                for (let t = 0; t < o.length; t++) {
                                    let a = o[t];
                                    n[a] && n[a].node.mode === u.mode
                                        ? ((i[a][c] = h(n[a].lastCount + u.length, u.mode) - h(n[a].lastCount, u.mode)),
                                          (n[a].lastCount += u.length))
                                        : (n[a] && (n[a].lastCount = u.length),
                                          (i[a][c] = h(u.length, u.mode) + 4 + e.getCharCountIndicator(u.mode, r)));
                                }
                            }
                            o = l;
                        }
                        for (let t = 0; t < o.length; t++) i[o[t]].end = 0;
                        return { map: i, table: n };
                    })(
                        (function (t) {
                            let r = [];
                            for (let n = 0; n < t.length; n++) {
                                let i = t[n];
                                switch (i.mode) {
                                    case e.NUMERIC:
                                        r.push([
                                            i,
                                            { data: i.data, mode: e.ALPHANUMERIC, length: i.length },
                                            { data: i.data, mode: e.BYTE, length: i.length },
                                        ]);
                                        break;
                                    case e.ALPHANUMERIC:
                                        r.push([i, { data: i.data, mode: e.BYTE, length: i.length }]);
                                        break;
                                    case e.KANJI:
                                        r.push([i, { data: i.data, mode: e.BYTE, length: u(i.data) }]);
                                        break;
                                    case e.BYTE:
                                        r.push([{ data: i.data, mode: e.BYTE, length: u(i.data) }]);
                                }
                            }
                            return r;
                        })(d(r, s.isKanjiModeEnabled())),
                        n,
                    ),
                    o = l.find_path(i.map, "start", "end"),
                    a = [];
                for (let t = 1; t < o.length - 1; t++) a.push(i.table[o[t]].node);
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
    V = (0, n.t)((t) => {
        var e = R(),
            r = b(),
            n = A(),
            i = B(),
            o = M(),
            a = N(),
            s = P(),
            l = L(),
            u = k(),
            c = D(),
            d = H(),
            h = F(),
            f = q();
        function g(t, e, r) {
            let n,
                i,
                o = t.size,
                a = d.getEncodedBits(e, r);
            for (n = 0; n < 15; n++)
                (i = ((a >> n) & 1) == 1),
                    n < 6 ? t.set(n, 8, i, !0) : n < 8 ? t.set(n + 1, 8, i, !0) : t.set(o - 15 + n, 8, i, !0),
                    n < 8
                        ? t.set(8, o - n - 1, i, !0)
                        : n < 9
                          ? t.set(8, 15 - n - 1 + 1, i, !0)
                          : t.set(8, 15 - n - 1, i, !0);
            t.set(o - 8, 8, 1, !0);
        }
        t.create = function (t, d) {
            let p, v;
            if (void 0 === t || "" === t) throw Error("No input text");
            let m = r.M;
            return (
                void 0 !== d &&
                    ((m = r.from(d.errorCorrectionLevel, r.M)),
                    (p = c.from(d.version)),
                    (v = s.from(d.maskPattern)),
                    d.toSJISFunc && e.setToSJISFunction(d.toSJISFunc)),
                (function (t, r, d, p) {
                    let v;
                    if (Array.isArray(t)) v = f.fromArray(t);
                    else if ("string" == typeof t) {
                        let e = r;
                        if (!e) {
                            let r = f.rawSplit(t);
                            e = c.getBestVersionForData(r, d);
                        }
                        v = f.fromString(t, e || 40);
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
                    let E = (function (t, r, i) {
                            let o = new n();
                            i.forEach(function (e) {
                                o.put(e.mode.bit, 4),
                                    o.put(e.getLength(), h.getCharCountIndicator(e.mode, t)),
                                    e.write(o);
                            });
                            let a = (e.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, r)) * 8;
                            for (o.getLengthInBits() + 4 <= a && o.put(0, 4); o.getLengthInBits() % 8 != 0; )
                                o.putBit(0);
                            let s = (a - o.getLengthInBits()) / 8;
                            for (let t = 0; t < s; t++) o.put(t % 2 ? 17 : 236, 8);
                            return (function (t, r, n) {
                                let i,
                                    o,
                                    a = e.getSymbolTotalCodewords(r),
                                    s = a - l.getTotalCodewordsCount(r, n),
                                    c = l.getBlocksCount(r, n),
                                    d = c - (a % c),
                                    h = Math.floor(a / c),
                                    f = Math.floor(s / c),
                                    g = f + 1,
                                    p = h - f,
                                    v = new u(p),
                                    m = 0,
                                    E = Array(c),
                                    y = Array(c),
                                    C = 0,
                                    w = new Uint8Array(t.buffer);
                                for (let t = 0; t < c; t++) {
                                    let e = t < d ? f : g;
                                    (E[t] = w.slice(m, m + e)), (y[t] = v.encode(E[t])), (m += e), (C = Math.max(C, e));
                                }
                                let I = new Uint8Array(a),
                                    T = 0;
                                for (i = 0; i < C; i++) for (o = 0; o < c; o++) i < E[o].length && (I[T++] = E[o][i]);
                                for (i = 0; i < p; i++) for (o = 0; o < c; o++) I[T++] = y[o][i];
                                return I;
                            })(o, t, r);
                        })(r, d, v),
                        y = new i(e.getSymbolSize(r));
                    !(function (t, e) {
                        let r = t.size,
                            n = a.getPositions(e);
                        for (let e = 0; e < n.length; e++) {
                            let i = n[e][0],
                                o = n[e][1];
                            for (let e = -1; e <= 7; e++)
                                if (!(i + e <= -1) && !(r <= i + e))
                                    for (let n = -1; n <= 7; n++)
                                        o + n <= -1 ||
                                            r <= o + n ||
                                            ((e >= 0 && e <= 6 && (0 === n || 6 === n)) ||
                                            (n >= 0 && n <= 6 && (0 === e || 6 === e)) ||
                                            (e >= 2 && e <= 4 && n >= 2 && n <= 4)
                                                ? t.set(i + e, o + n, !0, !0)
                                                : t.set(i + e, o + n, !1, !0));
                        }
                    })(y, r);
                    let C = y.size;
                    for (let t = 8; t < C - 8; t++) {
                        let e = t % 2 == 0;
                        y.set(t, 6, e, !0), y.set(6, t, e, !0);
                    }
                    return (
                        !(function (t, e) {
                            let r = o.getPositions(e);
                            for (let e = 0; e < r.length; e++) {
                                let n = r[e][0],
                                    i = r[e][1];
                                for (let e = -2; e <= 2; e++)
                                    for (let r = -2; r <= 2; r++)
                                        -2 === e || 2 === e || -2 === r || 2 === r || (0 === e && 0 === r)
                                            ? t.set(n + e, i + r, !0, !0)
                                            : t.set(n + e, i + r, !1, !0);
                            }
                        })(y, r),
                        g(y, d, 0),
                        r >= 7 &&
                            (function (t, e) {
                                let r,
                                    n,
                                    i,
                                    o = t.size,
                                    a = c.getEncodedBits(e);
                                for (let e = 0; e < 18; e++)
                                    (r = Math.floor(e / 3)),
                                        (n = (e % 3) + o - 8 - 3),
                                        (i = ((a >> e) & 1) == 1),
                                        t.set(r, n, i, !0),
                                        t.set(n, r, i, !0);
                            })(y, r),
                        !(function (t, e) {
                            let r = t.size,
                                n = -1,
                                i = r - 1,
                                o = 7,
                                a = 0;
                            for (let s = r - 1; s > 0; s -= 2)
                                for (6 === s && s--; ; ) {
                                    for (let r = 0; r < 2; r++)
                                        if (!t.isReserved(i, s - r)) {
                                            let n = !1;
                                            a < e.length && (n = ((e[a] >>> o) & 1) == 1),
                                                t.set(i, s - r, n),
                                                -1 == --o && (a++, (o = 7));
                                        }
                                    if ((i += n) < 0 || r <= i) {
                                        (i -= n), (n = -n);
                                        break;
                                    }
                                }
                        })(y, E),
                        isNaN(p) && (p = s.getBestMask(y, g.bind(null, y, d))),
                        s.applyMask(p, y),
                        g(y, d, p),
                        { modules: y, version: r, errorCorrectionLevel: d, maskPattern: p, segments: v }
                    );
                })(t, p, m, v)
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
            t || (t = {}), t.color || (t.color = {});
            let r = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                n = t.width && t.width >= 21 ? t.width : void 0,
                i = t.scale || 4;
            return {
                width: n,
                scale: n ? 4 : i,
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
                let i = r.modules.size,
                    o = r.modules.data,
                    a = t.getScale(i, n),
                    s = Math.floor((i + 2 * n.margin) * a),
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
                            (d = u[+!!o[Math.floor((t - l) / a) * i + Math.floor((r - l) / a)]]),
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
            var i;
            let o = n,
                a = r;
            void 0 !== o || (r && r.getContext) || ((o = r), (r = void 0)),
                r ||
                    (a = (function () {
                        try {
                            return document.createElement("canvas");
                        } catch (t) {
                            throw Error("You need to specify a canvas element");
                        }
                    })()),
                (o = e.getOptions(o));
            let s = e.getImageWidth(t.modules.size, o),
                l = a.getContext("2d"),
                u = l.createImageData(s, s);
            return (
                e.qrToImageData(u.data, t, o),
                (i = a),
                l.clearRect(0, 0, i.width, i.height),
                i.style || (i.style = {}),
                (i.height = s),
                (i.width = s),
                (i.style.height = s + "px"),
                (i.style.width = s + "px"),
                l.putImageData(u, 0, 0),
                a
            );
        }),
            (t.renderToDataURL = function (e, r, n) {
                let i = n;
                void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)), i || (i = {});
                let o = t.render(e, r, i),
                    a = i.type || "image/png",
                    s = i.rendererOpts || {};
                return o.toDataURL(a, s.quality);
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
        t.render = function (t, i, o) {
            let a = e.getOptions(i),
                s = t.modules.size,
                l = t.modules.data,
                u = s + 2 * a.margin,
                c = a.color.light.a ? "<path " + r(a.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                d =
                    "<path " +
                    r(a.color.dark, "stroke") +
                    ' d="' +
                    (function (t, e, r) {
                        let i = "",
                            o = 0,
                            a = !1,
                            s = 0;
                        for (let l = 0; l < t.length; l++) {
                            let u = Math.floor(l % e),
                                c = Math.floor(l / e);
                            u || a || (a = !0),
                                t[l]
                                    ? (s++,
                                      (l > 0 && u > 0 && t[l - 1]) ||
                                          ((i += a ? n("M", u + r, 0.5 + c + r) : n("m", o, 0)), (o = 0), (a = !1)),
                                      (u + 1 < e && t[l + 1]) || ((i += n("h", s)), (s = 0)))
                                    : o++;
                        }
                        return i;
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
            return "function" == typeof o && o(null, h), h;
        };
    }),
    W = (0, n.t)((t) => {
        var e = T(),
            r = V(),
            n = j(),
            i = $();
        function o(t, n, i, o, a) {
            let s = [].slice.call(arguments, 1),
                l = s.length,
                u = "function" == typeof s[l - 1];
            if (!u && !e()) throw Error("Callback required as last argument");
            if (u) {
                if (l < 2) throw Error("Too few arguments provided");
                2 === l
                    ? ((a = i), (i = n), (n = o = void 0))
                    : 3 === l &&
                      (n.getContext && void 0 === a
                          ? ((a = o), (o = void 0))
                          : ((a = o), (o = i), (i = n), (n = void 0)));
            } else {
                if (l < 1) throw Error("Too few arguments provided");
                return (
                    1 === l ? ((i = n), (n = o = void 0)) : 2 !== l || n.getContext || ((o = i), (i = n), (n = void 0)),
                    new Promise(function (e, a) {
                        try {
                            e(t(r.create(i, o), n, o));
                        } catch (t) {
                            a(t);
                        }
                    })
                );
            }
            try {
                let e = r.create(i, o);
                a(null, t(e, n, o));
            } catch (t) {
                a(t);
            }
        }
        (t.create = r.create),
            (t.toCanvas = o.bind(null, n.render)),
            (t.toDataURL = o.bind(null, n.renderToDataURL)),
            (t.toString = o.bind(null, function (t, e, r) {
                return i.render(t, r);
            }));
    })(),
    X = ({ value: t, size: e = 150, bgColor: r = "#ffffff", fgColor: n = "#000000" }) => {
        let { t: a } = (0, i.n)(),
            [s, l] = (0, o.p)("");
        return ((0, o._)(() => {
            t &&
                (0, W.toString)(t, { type: "svg", width: e, margin: 0, color: { dark: n, light: r } })
                    .then(l)
                    .catch(() => l(""));
        }, [t, e, r, n]),
        s)
            ? (0, o.v)("div", {
                  class: "IncodeRedirectQrCode",
                  role: "img",
                  "aria-label": a("v2.redirectToMobile.qr.description"),
                  dangerouslySetInnerHTML: { __html: s },
              })
            : null;
    },
    Z = ({ redirectUrl: t }) => {
        let { t: e } = (0, i.n)();
        return (0, o.v)(o.x, {
            children: [
                (0, o.v)("p", {
                    class: "IncodeRedirectTabDescription",
                    children: e("v2.redirectToMobile.qr.description"),
                }),
                (0, o.v)("div", { class: "IncodeRedirectQrWrapper", children: (0, o.v)(X, { value: t, size: 186 }) }),
            ],
        });
    },
    G = ({ formattedPhone: t, onResend: e, onChangePhone: r }) => {
        let { t: n } = (0, i.n)();
        return (0, o.v)("div", {
            class: "IncodeRedirectLinkSent",
            children: [
                (0, o.v)(f.t, { size: 40 }),
                (0, o.v)(l.r, { size: 16 }),
                (0, o.v)(g.t, { className: "IncodeRedirectLinkSentTitle", children: n("redirect.linkSent") }),
                (0, o.v)(l.r, { size: 12 }),
                (0, o.v)("p", {
                    class: "IncodeRedirectLinkSentPhone",
                    children: n("redirect.linkSentTo", { phone: t }),
                }),
                (0, o.v)(l.r, { size: 32 }),
                (0, o.v)("div", {
                    class: "IncodeRedirectLinkSentActions",
                    children: (0, o.v)(i.t, {
                        i18nKey: "redirect.didntReceiveLinkActions",
                        defaultValue:
                            "Didn't receive the link? <resend>Resend</resend> or <changePhone>Change phone number</changePhone>",
                        components: {
                            resend: (0, o.v)(h.t, { variant: "link", size: "inline", onClick: e }),
                            changePhone: (0, o.v)(h.t, { variant: "link", size: "inline", onClick: r }),
                        },
                    }),
                }),
            ],
        });
    },
    tt = ({ countryCode: t, error: e, isSending: r, isPhoneValid: n, onPhoneChange: a, onSendSms: s }) => {
        let { t: l } = (0, i.n)();
        return (0, o.v)(o.x, {
            children: [
                (0, o.v)(p.t, { id: "sms-phone", countryCode: t, error: e, disabled: r, autoFocus: !0, onChange: a }),
                (0, o.v)(h.t, {
                    onClick: s,
                    disabled: !n || r,
                    isLoading: r,
                    class: "IncodeRedirectSmsSendButton",
                    children: l("redirect.sendLinkSms"),
                }),
            ],
        });
    },
    te = ({ phonePrefix: t, smsSent: e, error: r, manager: n, onResend: a }) => {
        let { t: s } = (0, i.n)(),
            [l, u] = (0, o.p)(t),
            [c, d] = (0, o.p)(!1),
            [h, f] = (0, o.p)(!1),
            g = (0, p.r)(t)?.code ?? "",
            v = l.startsWith(t) ? `${t} ${l.slice(t.length).replace(/(\d{3})(?=\d)/g, "$1 ")}` : l,
            m = (0, o.h)((t, e) => {
                u(t), d(e);
            }, []),
            E = (0, o.h)(() => {
                f(!0), n.sendSms(l), f(!1);
            }, [n, l]),
            y = (0, o.h)(() => {
                E(), a();
            }, [E, a]),
            C = (0, o.h)(() => {
                u(t), d(!1), n.resetSms();
            }, [n, t]);
        return (0, o.v)(o.x, {
            children: [
                (0, o.v)("p", {
                    class: "IncodeRedirectTabDescription",
                    children: s("v2.redirectToMobile.sms.description"),
                }),
                e
                    ? (0, o.v)(G, { formattedPhone: v, onResend: y, onChangePhone: C })
                    : (0, o.v)(tt, {
                          countryCode: g,
                          phonePrefix: t,
                          error: r,
                          isSending: h,
                          isPhoneValid: c,
                          onPhoneChange: m,
                          onSendSms: E,
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
        let { t: c } = (0, i.n)(),
            [d, h] = (0, o.p)(!1),
            f = (0, o.h)(() => {
                h(!0), setTimeout(() => h(!1), 3e3);
            }, []),
            g = (0, o.h)(() => {
                l.continueOnDesktop();
            }, [l]);
        return (0, o.v)("div", {
            class: "IncodeRedirectContainer",
            children: [
                (0, o.v)(I, { visible: d }),
                (0, o.v)("div", {
                    class: "IncodeRedirectCard",
                    children: [
                        (0, o.v)(E.t, {
                            defaultValue: "qr",
                            listClassName: "IncodeRedirectTabs",
                            triggerClassName: "IncodeRedirectTab",
                            activeTriggerClassName: "IncodeRedirectTabActive",
                            children: [
                                (0, o.v)("div", {
                                    class: "IncodeRedirectTopGroup",
                                    children: [
                                        (0, o.v)(C, { logoSrc: u }),
                                        (0, o.v)(E.t.List, {
                                            label: c("v2.redirectToMobile.tabs.label"),
                                            children: [
                                                (0, o.v)(E.t.Trigger, {
                                                    value: "qr",
                                                    children: c("v2.redirectToMobile.tabs.0"),
                                                }),
                                                !n &&
                                                    (0, o.v)(E.t.Trigger, {
                                                        value: "sms",
                                                        children: c("v2.redirectToMobile.tabs.1"),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.v)("div", {
                                    class: "IncodeRedirectOptions",
                                    children: [
                                        (0, o.v)(E.t.Content, {
                                            value: "qr",
                                            children: (0, o.v)(Z, { redirectUrl: t }),
                                        }),
                                        !n &&
                                            (0, o.v)(E.t.Content, {
                                                value: "sms",
                                                children: (0, o.v)(te, {
                                                    phonePrefix: e,
                                                    smsSent: r,
                                                    error: s,
                                                    manager: l,
                                                    onResend: f,
                                                }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, o.v)(w, { addContinueToDesktop: a, onContinueOnDesktop: g }),
                    ],
                }),
            ],
        });
    },
    tn = ({ title: t, subtitle: e, logoSrc: r }) => {
        let { t: n } = (0, i.n)(),
            a = t ?? n("verificationComplete.title"),
            s = e ?? n("verificationComplete.message");
        return (0, o.v)("div", {
            class: "IncodeRedirectFinishedContainer",
            children: [
                (0, o.v)("img", { src: r, alt: "", "aria-hidden": "true", class: "IncodeRedirectLogo" }),
                a ? (0, o.v)(g.t, { className: "IncodeRedirectFinishedTitle", children: a }) : null,
                s ? (0, o.v)("p", { class: "IncodeRedirectFinishedSubtitle", children: s }) : null,
            ],
        });
    },
    ti = ({ config: t, manager: e, services: r, onFinish: n, onContinue: i, onError: s }) => {
        let [l, h] = (0, a.u)(
                () => {
                    if (e) return e;
                    if (!t) throw Error("RedirectToMobile config is required when no manager is provided");
                    return (0, y.X3)({ config: t, services: r });
                },
                { manageLifecycle: !e },
            ),
            { logoSrc: f, logoHeightPx: g } = (0, c.r)({
                hideHeader: void 0,
                hideFooterBranding: void 0,
                logo: void 0,
                defaultLogoSrc: u.t,
            });
        (0, a.c)({ status: l.status, onFinish: n, onError: s, error: "error" === l.status ? l.error : void 0 });
        let p = (0, o.l)(!1);
        (0, o._)(() => {
            p.current || ("continue" === l.status && ((p.current = !0), i?.()));
        }, [l.status, i]);
        let v =
            "idle" === l.status || "loading" === l.status
                ? (0, o.v)(d.t, { hideText: !0 })
                : "redirecting" === l.status
                  ? (0, o.v)(tr, {
                        redirectUrl: l.redirectUrl,
                        phonePrefix: l.phonePrefix,
                        smsSent: l.smsSent,
                        disableSmsOption: t?.disableSmsOption ?? !1,
                        addContinueToDesktop: t?.addContinueToDesktop ?? !1,
                        error: l.error,
                        manager: h,
                        logoSrc: f,
                    })
                  : "finished" === l.status
                    ? (0, o.v)(tn, { logoSrc: f })
                    : null;
        return (0, o.v)("main", { class: "IncodeRedirectRoot", style: { "--logo-height": `${g}px` }, children: v });
    },
    to = ({ config: t, manager: e, services: r, onFinish: n, onContinue: i, onError: a }) =>
        (0, o.v)(s.t, {
            children:
                t || e
                    ? (0, o.v)(ti, { config: t, manager: e, services: r, onFinish: n, onContinue: i, onError: a })
                    : null,
        });
(0, v.t)(to, "incode-redirect-to-mobile", ["config", "services", "onFinish", "onContinue", "onError"]);
