r.d(t, { qg: () => z });
var n,
    i,
    o,
    a,
    s,
    l,
    u,
    c,
    f = r(56636);
(((n = a || (a = {}))[(n.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = "EXPECT_ARGUMENT_CLOSING_BRACE"),
    (n[(n.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
    (n[(n.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
    (n[(n.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
    (n[(n.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
    (n[(n.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
    (n[(n.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
    (n[(n.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
    (n[(n.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
    (n[(n.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
    (n[(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
    (n[(n.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = "EXPECT_SELECT_ARGUMENT_OPTIONS"),
    (n[(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
    (n[(n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
    (n[(n.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = "EXPECT_SELECT_ARGUMENT_SELECTOR"),
    (n[(n.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
    (n[(n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
    (n[(n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
    (n[(n.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = "INVALID_PLURAL_ARGUMENT_SELECTOR"),
    (n[(n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
    (n[(n.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
    (n[(n.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
    (n[(n.INVALID_TAG = 23)] = "INVALID_TAG"),
    (n[(n.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
    (n[(n.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
    (n[(n.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
    ((i = s || (s = {}))[(i.literal = 0)] = "literal"),
    (i[(i.argument = 1)] = "argument"),
    (i[(i.number = 2)] = "number"),
    (i[(i.date = 3)] = "date"),
    (i[(i.time = 4)] = "time"),
    (i[(i.select = 5)] = "select"),
    (i[(i.plural = 6)] = "plural"),
    (i[(i.pound = 7)] = "pound"),
    (i[(i.tag = 8)] = "tag"),
    ((o = l || (l = {}))[(o.number = 0)] = "number"),
    (o[(o.dateTime = 1)] = "dateTime"));
var p = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    d =
        /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
    h = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
    m = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    v = /^(@+)?(\+|#+)?[rs]?$/g,
    y = /(\*)(0+)|(#+)(0+)|(0+)/g,
    g = /^(0+)$/;
function b(e) {
    var t = {};
    return (
        "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
        e.replace(v, function (e, r, n) {
            return (
                "string" != typeof n
                    ? ((t.minimumSignificantDigits = r.length), (t.maximumSignificantDigits = r.length))
                    : "+" === n
                      ? (t.minimumSignificantDigits = r.length)
                      : "#" === r[0]
                        ? (t.maximumSignificantDigits = r.length)
                        : ((t.minimumSignificantDigits = r.length),
                          (t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0))),
                ""
            );
        }),
        t
    );
}
function w(e) {
    switch (e) {
        case "sign-auto":
            return { signDisplay: "auto" };
        case "sign-accounting":
        case "()":
            return { currencySign: "accounting" };
        case "sign-always":
        case "+!":
            return { signDisplay: "always" };
        case "sign-accounting-always":
        case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
        case "sign-except-zero":
        case "+?":
            return { signDisplay: "exceptZero" };
        case "sign-accounting-except-zero":
        case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
        case "sign-never":
        case "+_":
            return { signDisplay: "never" };
    }
}
function _(e) {
    var t = w(e);
    return t || {};
}
var S = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["h", "H", "hB", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["h", "H", "hB", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["h", "H", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["h", "H", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["h", "H", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"],
    },
    E = new RegExp("^".concat(p.source, "*")),
    x = new RegExp("".concat(p.source, "*$"));
function C(e, t) {
    return { start: e, end: t };
}
var k = !!String.prototype.startsWith && "_a".startsWith("a", 1),
    T = !!String.fromCodePoint,
    M = !!Object.fromEntries,
    P = !!String.prototype.codePointAt,
    A = !!String.prototype.trimStart,
    I = !!String.prototype.trimEnd,
    O = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
              return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 0x1fffffffffffff >= Math.abs(e);
          },
    R = !0;
try {
    R = (null == (u = K("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) ? void 0 : u[0]) === "a";
} catch (e) {
    R = !1;
}
var L = k
        ? function (e, t, r) {
              return e.startsWith(t, r);
          }
        : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
          },
    D = T
        ? String.fromCodePoint
        : function () {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              for (var n = "", i = t.length, o = 0; i > o;) {
                  if ((e = t[o++]) > 1114111) throw RangeError(e + " is not a valid code point");
                  n +=
                      e < 65536
                          ? String.fromCharCode(e)
                          : String.fromCharCode(((e -= 65536) >> 10) + 55296, (e % 1024) + 56320);
              }
              return n;
          },
    F = M
        ? Object.fromEntries
        : function (e) {
              for (var t = {}, r = 0; r < e.length; r++) {
                  var n = e[r],
                      i = n[0],
                      o = n[1];
                  t[i] = o;
              }
              return t;
          },
    N = P
        ? function (e, t) {
              return e.codePointAt(t);
          }
        : function (e, t) {
              var r,
                  n = e.length;
              if (!(t < 0) && !(t >= n)) {
                  var i = e.charCodeAt(t);
                  return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343
                      ? i
                      : ((i - 55296) << 10) + (r - 56320) + 65536;
              }
          },
    j = A
        ? function (e) {
              return e.trimStart();
          }
        : function (e) {
              return e.replace(E, "");
          },
    B = I
        ? function (e) {
              return e.trimEnd();
          }
        : function (e) {
              return e.replace(x, "");
          };
function K(e, t) {
    return new RegExp(e, t);
}
if (R) {
    var U = K("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    c = function (e, t) {
        var r;
        return ((U.lastIndex = t), null != (r = U.exec(e)[1]) ? r : "");
    };
} else
    c = function (e, t) {
        for (var r = []; ;) {
            var n,
                i = N(e, t);
            if (
                void 0 === i ||
                H(i) ||
                ((n = i) >= 33 && n <= 35) ||
                36 === n ||
                (n >= 37 && n <= 39) ||
                40 === n ||
                41 === n ||
                42 === n ||
                43 === n ||
                44 === n ||
                45 === n ||
                (n >= 46 && n <= 47) ||
                (n >= 58 && n <= 59) ||
                (n >= 60 && n <= 62) ||
                (n >= 63 && n <= 64) ||
                91 === n ||
                92 === n ||
                93 === n ||
                94 === n ||
                96 === n ||
                123 === n ||
                124 === n ||
                125 === n ||
                126 === n ||
                161 === n ||
                (n >= 162 && n <= 165) ||
                166 === n ||
                167 === n ||
                169 === n ||
                171 === n ||
                172 === n ||
                174 === n ||
                176 === n ||
                177 === n ||
                182 === n ||
                187 === n ||
                191 === n ||
                215 === n ||
                247 === n ||
                (n >= 8208 && n <= 8213) ||
                (n >= 8214 && n <= 8215) ||
                8216 === n ||
                8217 === n ||
                8218 === n ||
                (n >= 8219 && n <= 8220) ||
                8221 === n ||
                8222 === n ||
                8223 === n ||
                (n >= 8224 && n <= 8231) ||
                (n >= 8240 && n <= 8248) ||
                8249 === n ||
                8250 === n ||
                (n >= 8251 && n <= 8254) ||
                (n >= 8257 && n <= 8259) ||
                8260 === n ||
                8261 === n ||
                8262 === n ||
                (n >= 8263 && n <= 8273) ||
                8274 === n ||
                8275 === n ||
                (n >= 8277 && n <= 8286) ||
                (n >= 8592 && n <= 8596) ||
                (n >= 8597 && n <= 8601) ||
                (n >= 8602 && n <= 8603) ||
                (n >= 8604 && n <= 8607) ||
                8608 === n ||
                (n >= 8609 && n <= 8610) ||
                8611 === n ||
                (n >= 8612 && n <= 8613) ||
                8614 === n ||
                (n >= 8615 && n <= 8621) ||
                8622 === n ||
                (n >= 8623 && n <= 8653) ||
                (n >= 8654 && n <= 8655) ||
                (n >= 8656 && n <= 8657) ||
                8658 === n ||
                8659 === n ||
                8660 === n ||
                (n >= 8661 && n <= 8691) ||
                (n >= 8692 && n <= 8959) ||
                (n >= 8960 && n <= 8967) ||
                8968 === n ||
                8969 === n ||
                8970 === n ||
                8971 === n ||
                (n >= 8972 && n <= 8991) ||
                (n >= 8992 && n <= 8993) ||
                (n >= 8994 && n <= 9e3) ||
                9001 === n ||
                9002 === n ||
                (n >= 9003 && n <= 9083) ||
                9084 === n ||
                (n >= 9085 && n <= 9114) ||
                (n >= 9115 && n <= 9139) ||
                (n >= 9140 && n <= 9179) ||
                (n >= 9180 && n <= 9185) ||
                (n >= 9186 && n <= 9254) ||
                (n >= 9255 && n <= 9279) ||
                (n >= 9280 && n <= 9290) ||
                (n >= 9291 && n <= 9311) ||
                (n >= 9472 && n <= 9654) ||
                9655 === n ||
                (n >= 9656 && n <= 9664) ||
                9665 === n ||
                (n >= 9666 && n <= 9719) ||
                (n >= 9720 && n <= 9727) ||
                (n >= 9728 && n <= 9838) ||
                9839 === n ||
                (n >= 9840 && n <= 10087) ||
                10088 === n ||
                10089 === n ||
                10090 === n ||
                10091 === n ||
                10092 === n ||
                10093 === n ||
                10094 === n ||
                10095 === n ||
                10096 === n ||
                10097 === n ||
                10098 === n ||
                10099 === n ||
                10100 === n ||
                10101 === n ||
                (n >= 10132 && n <= 10175) ||
                (n >= 10176 && n <= 10180) ||
                10181 === n ||
                10182 === n ||
                (n >= 10183 && n <= 10213) ||
                10214 === n ||
                10215 === n ||
                10216 === n ||
                10217 === n ||
                10218 === n ||
                10219 === n ||
                10220 === n ||
                10221 === n ||
                10222 === n ||
                10223 === n ||
                (n >= 10224 && n <= 10239) ||
                (n >= 10240 && n <= 10495) ||
                (n >= 10496 && n <= 10626) ||
                10627 === n ||
                10628 === n ||
                10629 === n ||
                10630 === n ||
                10631 === n ||
                10632 === n ||
                10633 === n ||
                10634 === n ||
                10635 === n ||
                10636 === n ||
                10637 === n ||
                10638 === n ||
                10639 === n ||
                10640 === n ||
                10641 === n ||
                10642 === n ||
                10643 === n ||
                10644 === n ||
                10645 === n ||
                10646 === n ||
                10647 === n ||
                10648 === n ||
                (n >= 10649 && n <= 10711) ||
                10712 === n ||
                10713 === n ||
                10714 === n ||
                10715 === n ||
                (n >= 10716 && n <= 10747) ||
                10748 === n ||
                10749 === n ||
                (n >= 10750 && n <= 11007) ||
                (n >= 11008 && n <= 11055) ||
                (n >= 11056 && n <= 11076) ||
                (n >= 11077 && n <= 11078) ||
                (n >= 11079 && n <= 11084) ||
                (n >= 11085 && n <= 11123) ||
                (n >= 11124 && n <= 11125) ||
                (n >= 11126 && n <= 11157) ||
                11158 === n ||
                (n >= 11159 && n <= 11263) ||
                (n >= 11776 && n <= 11777) ||
                11778 === n ||
                11779 === n ||
                11780 === n ||
                11781 === n ||
                (n >= 11782 && n <= 11784) ||
                11785 === n ||
                11786 === n ||
                11787 === n ||
                11788 === n ||
                11789 === n ||
                (n >= 11790 && n <= 11798) ||
                11799 === n ||
                (n >= 11800 && n <= 11801) ||
                11802 === n ||
                11803 === n ||
                11804 === n ||
                11805 === n ||
                (n >= 11806 && n <= 11807) ||
                11808 === n ||
                11809 === n ||
                11810 === n ||
                11811 === n ||
                11812 === n ||
                11813 === n ||
                11814 === n ||
                11815 === n ||
                11816 === n ||
                11817 === n ||
                (n >= 11818 && n <= 11822) ||
                11823 === n ||
                (n >= 11824 && n <= 11833) ||
                (n >= 11834 && n <= 11835) ||
                (n >= 11836 && n <= 11839) ||
                11840 === n ||
                11841 === n ||
                11842 === n ||
                (n >= 11843 && n <= 11855) ||
                (n >= 11856 && n <= 11857) ||
                11858 === n ||
                (n >= 11859 && n <= 11903) ||
                (n >= 12289 && n <= 12291) ||
                12296 === n ||
                12297 === n ||
                12298 === n ||
                12299 === n ||
                12300 === n ||
                12301 === n ||
                12302 === n ||
                12303 === n ||
                12304 === n ||
                12305 === n ||
                (n >= 12306 && n <= 12307) ||
                12308 === n ||
                12309 === n ||
                12310 === n ||
                12311 === n ||
                12312 === n ||
                12313 === n ||
                12314 === n ||
                12315 === n ||
                12316 === n ||
                12317 === n ||
                (n >= 12318 && n <= 12319) ||
                12320 === n ||
                12336 === n ||
                64830 === n ||
                64831 === n ||
                (n >= 65093 && n <= 65094)
            )
                break;
            (r.push(i), (t += i >= 65536 ? 2 : 1));
        }
        return D.apply(void 0, r);
    };
var V = (function () {
    function e(e, t) {
        (void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons));
    }
    return (
        (e.prototype.parse = function () {
            if (0 !== this.offset()) throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
        }),
        (e.prototype.parseMessage = function (e, t, r) {
            for (var n = []; !this.isEOF();) {
                var i = this.char();
                if (123 === i) {
                    var o = this.parseArgument(e, r);
                    if (o.err) return o;
                    n.push(o.val);
                } else if (125 === i && e > 0) break;
                else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                    var l = this.clonePosition();
                    (this.bump(), n.push({ type: s.pound, location: C(l, this.clonePosition()) }));
                } else if (60 !== i || this.ignoreTag || 47 !== this.peek())
                    if (60 === i && !this.ignoreTag && $(this.peek() || 0)) {
                        var o = this.parseTag(e, t);
                        if (o.err) return o;
                        n.push(o.val);
                    } else {
                        var o = this.parseLiteral(e, t);
                        if (o.err) return o;
                        n.push(o.val);
                    }
                else if (!r) return this.error(a.UNMATCHED_CLOSING_TAG, C(this.clonePosition(), this.clonePosition()));
                else break;
            }
            return { val: n, err: null };
        }),
        (e.prototype.parseTag = function (e, t) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
                return {
                    val: { type: s.literal, value: "<".concat(n, "/>"), location: C(r, this.clonePosition()) },
                    err: null,
                };
            if (!this.bumpIf(">")) return this.error(a.INVALID_TAG, C(r, this.clonePosition()));
            var i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            var o = i.val,
                l = this.clonePosition();
            if (!this.bumpIf("</")) return this.error(a.UNCLOSED_TAG, C(r, this.clonePosition()));
            if (this.isEOF() || !$(this.char())) return this.error(a.INVALID_TAG, C(l, this.clonePosition()));
            var u = this.clonePosition();
            return n !== this.parseTagName()
                ? this.error(a.UNMATCHED_CLOSING_TAG, C(u, this.clonePosition()))
                : (this.bumpSpace(), this.bumpIf(">"))
                  ? { val: { type: s.tag, value: n, children: o, location: C(r, this.clonePosition()) }, err: null }
                  : this.error(a.INVALID_TAG, C(l, this.clonePosition()));
        }),
        (e.prototype.parseTagName = function () {
            var e,
                t = this.offset();
            for (
                this.bump();
                !this.isEOF() &&
                (45 === (e = this.char()) ||
                    46 === e ||
                    (e >= 48 && e <= 57) ||
                    95 === e ||
                    (e >= 97 && e <= 122) ||
                    (e >= 65 && e <= 90) ||
                    183 == e ||
                    (e >= 192 && e <= 214) ||
                    (e >= 216 && e <= 246) ||
                    (e >= 248 && e <= 893) ||
                    (e >= 895 && e <= 8191) ||
                    (e >= 8204 && e <= 8205) ||
                    (e >= 8255 && e <= 8256) ||
                    (e >= 8304 && e <= 8591) ||
                    (e >= 11264 && e <= 12271) ||
                    (e >= 12289 && e <= 55295) ||
                    (e >= 63744 && e <= 64975) ||
                    (e >= 65008 && e <= 65533) ||
                    (e >= 65536 && e <= 983039));
            )
                this.bump();
            return this.message.slice(t, this.offset());
        }),
        (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ;) {
                var i = this.tryParseQuote(t);
                if (i) {
                    n += i;
                    continue;
                }
                var o = this.tryParseUnquoted(e, t);
                if (o) {
                    n += o;
                    continue;
                }
                var a = this.tryParseLeftAngleBracket();
                if (a) {
                    n += a;
                    continue;
                }
                break;
            }
            var l = C(r, this.clonePosition());
            return { val: { type: s.literal, value: n, location: l }, err: null };
        }),
        (e.prototype.tryParseLeftAngleBracket = function () {
            var e;
            return this.isEOF() || 60 !== this.char() || (!this.ignoreTag && ($((e = this.peek() || 0)) || 47 === e))
                ? null
                : (this.bump(), "<");
        }),
        (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
                case 39:
                    return (this.bump(), this.bump(), "'");
                case 123:
                case 60:
                case 62:
                case 125:
                    break;
                case 35:
                    if ("plural" === e || "selectordinal" === e) break;
                    return null;
                default:
                    return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF();) {
                var r = this.char();
                if (39 === r)
                    if (39 === this.peek()) (t.push(39), this.bump());
                    else {
                        this.bump();
                        break;
                    }
                else t.push(r);
                this.bump();
            }
            return D.apply(void 0, t);
        }),
        (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
                123 === r ||
                (35 === r && ("plural" === t || "selectordinal" === t)) ||
                (125 === r && e > 0)
                ? null
                : (this.bump(), D(r));
        }),
        (e.prototype.parseArgument = function (e, t) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
                return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
            if (125 === this.char()) return (this.bump(), this.error(a.EMPTY_ARGUMENT, C(r, this.clonePosition())));
            var n = this.parseIdentifierIfPossible().value;
            if (!n) return this.error(a.MALFORMED_ARGUMENT, C(r, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
                return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
            switch (this.char()) {
                case 125:
                    return (
                        this.bump(),
                        { val: { type: s.argument, value: n, location: C(r, this.clonePosition()) }, err: null }
                    );
                case 44:
                    if ((this.bump(), this.bumpSpace(), this.isEOF()))
                        return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
                    return this.parseArgumentOptions(e, t, n, r);
                default:
                    return this.error(a.MALFORMED_ARGUMENT, C(r, this.clonePosition()));
            }
        }),
        (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
                t = this.offset(),
                r = c(this.message, t),
                n = t + r.length;
            return (this.bumpTo(n), { value: r, location: C(e, this.clonePosition()) });
        }),
        (e.prototype.parseArgumentOptions = function (e, t, r, n) {
            var i,
                o = this.clonePosition(),
                u = this.parseIdentifierIfPossible().value,
                c = this.clonePosition();
            switch (u) {
                case "":
                    return this.error(a.EXPECT_ARGUMENT_TYPE, C(o, c));
                case "number":
                case "date":
                case "time":
                    this.bumpSpace();
                    var p = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        var h = this.clonePosition(),
                            m = this.parseSimpleArgStyleIfPossible();
                        if (m.err) return m;
                        var v = B(m.val);
                        if (0 === v.length)
                            return this.error(a.EXPECT_ARGUMENT_STYLE, C(this.clonePosition(), this.clonePosition()));
                        p = { style: v, styleLocation: C(h, this.clonePosition()) };
                    }
                    var y = this.tryParseArgumentClose(n);
                    if (y.err) return y;
                    var g = C(n, this.clonePosition());
                    if (p && L(null == p ? void 0 : p.style, "::", 0)) {
                        var b = j(p.style.slice(2));
                        if ("number" === u) {
                            var m = this.parseNumberSkeletonFromString(b, p.styleLocation);
                            if (m.err) return m;
                            return { val: { type: s.number, value: r, location: g, style: m.val }, err: null };
                        }
                        if (0 === b.length) return this.error(a.EXPECT_DATE_TIME_SKELETON, g);
                        var w,
                            _ = b;
                        this.locale &&
                            (_ = (function (e, t) {
                                for (var r = "", n = 0; n < e.length; n++) {
                                    var i = e.charAt(n);
                                    if ("j" === i) {
                                        for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) (o++, n++);
                                        var a = 1 + (1 & o),
                                            s = o < 2 ? 1 : 3 + (o >> 1),
                                            l = (function (e) {
                                                var t,
                                                    r = e.hourCycle;
                                                if (
                                                    (void 0 === r &&
                                                        e.hourCycles &&
                                                        e.hourCycles.length &&
                                                        (r = e.hourCycles[0]),
                                                    r)
                                                )
                                                    switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle");
                                                    }
                                                var n = e.language;
                                                return (
                                                    "root" !== n && (t = e.maximize().region),
                                                    (S[t || ""] || S[n || ""] || S["".concat(n, "-001")] || S["001"])[0]
                                                );
                                            })(t);
                                        for (("H" == l || "k" == l) && (s = 0); s-- > 0;) r += "a";
                                        for (; a-- > 0;) r = l + r;
                                    } else "J" === i ? (r += "H") : (r += i);
                                }
                                return r;
                            })(b, this.locale));
                        var v = {
                            type: l.dateTime,
                            pattern: _,
                            location: p.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? ((w = {}),
                                  _.replace(d, function (e) {
                                      var t = e.length;
                                      switch (e[0]) {
                                          case "G":
                                              w.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                              break;
                                          case "y":
                                              w.year = 2 === t ? "2-digit" : "numeric";
                                              break;
                                          case "Y":
                                          case "u":
                                          case "U":
                                          case "r":
                                              throw RangeError(
                                                  "`Y/u/U/r` (year) patterns are not supported, use `y` instead",
                                              );
                                          case "q":
                                          case "Q":
                                              throw RangeError("`q/Q` (quarter) patterns are not supported");
                                          case "M":
                                          case "L":
                                              w.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                              break;
                                          case "w":
                                          case "W":
                                              throw RangeError("`w/W` (week) patterns are not supported");
                                          case "d":
                                              w.day = ["numeric", "2-digit"][t - 1];
                                              break;
                                          case "D":
                                          case "F":
                                          case "g":
                                              throw RangeError(
                                                  "`D/F/g` (day) patterns are not supported, use `d` instead",
                                              );
                                          case "E":
                                              w.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                              break;
                                          case "e":
                                              if (t < 4)
                                                  throw RangeError("`e..eee` (weekday) patterns are not supported");
                                              w.weekday = ["short", "long", "narrow", "short"][t - 4];
                                              break;
                                          case "c":
                                              if (t < 4)
                                                  throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                              w.weekday = ["short", "long", "narrow", "short"][t - 4];
                                              break;
                                          case "a":
                                              w.hour12 = !0;
                                              break;
                                          case "b":
                                          case "B":
                                              throw RangeError(
                                                  "`b/B` (period) patterns are not supported, use `a` instead",
                                              );
                                          case "h":
                                              ((w.hourCycle = "h12"), (w.hour = ["numeric", "2-digit"][t - 1]));
                                              break;
                                          case "H":
                                              ((w.hourCycle = "h23"), (w.hour = ["numeric", "2-digit"][t - 1]));
                                              break;
                                          case "K":
                                              ((w.hourCycle = "h11"), (w.hour = ["numeric", "2-digit"][t - 1]));
                                              break;
                                          case "k":
                                              ((w.hourCycle = "h24"), (w.hour = ["numeric", "2-digit"][t - 1]));
                                              break;
                                          case "j":
                                          case "J":
                                          case "C":
                                              throw RangeError(
                                                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
                                              );
                                          case "m":
                                              w.minute = ["numeric", "2-digit"][t - 1];
                                              break;
                                          case "s":
                                              w.second = ["numeric", "2-digit"][t - 1];
                                              break;
                                          case "S":
                                          case "A":
                                              throw RangeError(
                                                  "`S/A` (second) patterns are not supported, use `s` instead",
                                              );
                                          case "z":
                                              w.timeZoneName = t < 4 ? "short" : "long";
                                              break;
                                          case "Z":
                                          case "O":
                                          case "v":
                                          case "V":
                                          case "X":
                                          case "x":
                                              throw RangeError(
                                                  "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead",
                                              );
                                      }
                                      return "";
                                  }),
                                  w)
                                : {},
                        };
                        return {
                            val: { type: "date" === u ? s.date : s.time, value: r, location: g, style: v },
                            err: null,
                        };
                    }
                    return {
                        val: {
                            type: "number" === u ? s.number : "date" === u ? s.date : s.time,
                            value: r,
                            location: g,
                            style: null != (i = null == p ? void 0 : p.style) ? i : null,
                        },
                        err: null,
                    };
                case "plural":
                case "selectordinal":
                case "select":
                    var E = this.clonePosition();
                    if ((this.bumpSpace(), !this.bumpIf(",")))
                        return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS, C(E, (0, f.Cl)({}, E)));
                    this.bumpSpace();
                    var x = this.parseIdentifierIfPossible(),
                        k = 0;
                    if ("select" !== u && "offset" === x.value) {
                        if (!this.bumpIf(":"))
                            return this.error(
                                a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                                C(this.clonePosition(), this.clonePosition()),
                            );
                        this.bumpSpace();
                        var m = this.tryParseDecimalInteger(
                            a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                            a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                        );
                        if (m.err) return m;
                        (this.bumpSpace(), (x = this.parseIdentifierIfPossible()), (k = m.val));
                    }
                    var T = this.tryParsePluralOrSelectOptions(e, u, t, x);
                    if (T.err) return T;
                    var y = this.tryParseArgumentClose(n);
                    if (y.err) return y;
                    var M = C(n, this.clonePosition());
                    if ("select" === u)
                        return { val: { type: s.select, value: r, options: F(T.val), location: M }, err: null };
                    return {
                        val: {
                            type: s.plural,
                            value: r,
                            options: F(T.val),
                            offset: k,
                            pluralType: "plural" === u ? "cardinal" : "ordinal",
                            location: M,
                        },
                        err: null,
                    };
                default:
                    return this.error(a.INVALID_ARGUMENT_TYPE, C(o, c));
            }
        }),
        (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
                ? this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, C(e, this.clonePosition()))
                : (this.bump(), { val: !0, err: null });
        }),
        (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF();)
                switch (this.char()) {
                    case 39:
                        this.bump();
                        var r = this.clonePosition();
                        if (!this.bumpUntil("'"))
                            return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, C(r, this.clonePosition()));
                        this.bump();
                        break;
                    case 123:
                        ((e += 1), this.bump());
                        break;
                    case 125:
                        if (!(e > 0)) return { val: this.message.slice(t.offset, this.offset()), err: null };
                        e -= 1;
                        break;
                    default:
                        this.bump();
                }
            return { val: this.message.slice(t.offset, this.offset()), err: null };
        }),
        (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
                r = (function (e) {
                    if (0 === e.length) throw Error("Number skeleton cannot be empty");
                    for (
                        var t = e.split(h).filter(function (e) {
                                return e.length > 0;
                            }),
                            r = [],
                            n = 0;
                        n < t.length;
                        n++
                    ) {
                        var i = t[n].split("/");
                        if (0 === i.length) throw Error("Invalid number skeleton");
                        for (var o = i[0], a = i.slice(1), s = 0; s < a.length; s++)
                            if (0 === a[s].length) throw Error("Invalid number skeleton");
                        r.push({ stem: o, options: a });
                    }
                    return r;
                })(e);
            } catch (e) {
                return this.error(a.INVALID_NUMBER_SKELETON, t);
            }
            return {
                val: {
                    type: l.number,
                    tokens: r,
                    location: t,
                    parsedOptions: this.shouldParseSkeletons
                        ? (function (e) {
                              for (var t = {}, r = 0; r < e.length; r++) {
                                  var n = e[r];
                                  switch (n.stem) {
                                      case "percent":
                                      case "%":
                                          t.style = "percent";
                                          continue;
                                      case "%x100":
                                          ((t.style = "percent"), (t.scale = 100));
                                          continue;
                                      case "currency":
                                          ((t.style = "currency"), (t.currency = n.options[0]));
                                          continue;
                                      case "group-off":
                                      case ",_":
                                          t.useGrouping = !1;
                                          continue;
                                      case "precision-integer":
                                      case ".":
                                          t.maximumFractionDigits = 0;
                                          continue;
                                      case "measure-unit":
                                      case "unit":
                                          ((t.style = "unit"), (t.unit = n.options[0].replace(/^(.*?)-/, "")));
                                          continue;
                                      case "compact-short":
                                      case "K":
                                          ((t.notation = "compact"), (t.compactDisplay = "short"));
                                          continue;
                                      case "compact-long":
                                      case "KK":
                                          ((t.notation = "compact"), (t.compactDisplay = "long"));
                                          continue;
                                      case "scientific":
                                          t = (0, f.Cl)(
                                              (0, f.Cl)((0, f.Cl)({}, t), { notation: "scientific" }),
                                              n.options.reduce(function (e, t) {
                                                  return (0, f.Cl)((0, f.Cl)({}, e), _(t));
                                              }, {}),
                                          );
                                          continue;
                                      case "engineering":
                                          t = (0, f.Cl)(
                                              (0, f.Cl)((0, f.Cl)({}, t), { notation: "engineering" }),
                                              n.options.reduce(function (e, t) {
                                                  return (0, f.Cl)((0, f.Cl)({}, e), _(t));
                                              }, {}),
                                          );
                                          continue;
                                      case "notation-simple":
                                          t.notation = "standard";
                                          continue;
                                      case "unit-width-narrow":
                                          ((t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow"));
                                          continue;
                                      case "unit-width-short":
                                          ((t.currencyDisplay = "code"), (t.unitDisplay = "short"));
                                          continue;
                                      case "unit-width-full-name":
                                          ((t.currencyDisplay = "name"), (t.unitDisplay = "long"));
                                          continue;
                                      case "unit-width-iso-code":
                                          t.currencyDisplay = "symbol";
                                          continue;
                                      case "scale":
                                          t.scale = parseFloat(n.options[0]);
                                          continue;
                                      case "rounding-mode-floor":
                                          t.roundingMode = "floor";
                                          continue;
                                      case "rounding-mode-ceiling":
                                          t.roundingMode = "ceil";
                                          continue;
                                      case "rounding-mode-down":
                                          t.roundingMode = "trunc";
                                          continue;
                                      case "rounding-mode-up":
                                          t.roundingMode = "expand";
                                          continue;
                                      case "rounding-mode-half-even":
                                          t.roundingMode = "halfEven";
                                          continue;
                                      case "rounding-mode-half-down":
                                          t.roundingMode = "halfTrunc";
                                          continue;
                                      case "rounding-mode-half-up":
                                          t.roundingMode = "halfExpand";
                                          continue;
                                      case "integer-width":
                                          if (n.options.length > 1)
                                              throw RangeError(
                                                  "integer-width stems only accept a single optional option",
                                              );
                                          n.options[0].replace(y, function (e, r, n, i, o, a) {
                                              if (r) t.minimumIntegerDigits = n.length;
                                              else if (i && o)
                                                  throw Error("We currently do not support maximum integer digits");
                                              else if (a)
                                                  throw Error("We currently do not support exact integer digits");
                                              return "";
                                          });
                                          continue;
                                  }
                                  if (g.test(n.stem)) {
                                      t.minimumIntegerDigits = n.stem.length;
                                      continue;
                                  }
                                  if (m.test(n.stem)) {
                                      if (n.options.length > 1)
                                          throw RangeError(
                                              "Fraction-precision stems only accept a single optional option",
                                          );
                                      n.stem.replace(m, function (e, r, n, i, o, a) {
                                          return (
                                              "*" === n
                                                  ? (t.minimumFractionDigits = r.length)
                                                  : i && "#" === i[0]
                                                    ? (t.maximumFractionDigits = i.length)
                                                    : o && a
                                                      ? ((t.minimumFractionDigits = o.length),
                                                        (t.maximumFractionDigits = o.length + a.length))
                                                      : ((t.minimumFractionDigits = r.length),
                                                        (t.maximumFractionDigits = r.length)),
                                              ""
                                          );
                                      });
                                      var i = n.options[0];
                                      "w" === i
                                          ? (t = (0, f.Cl)((0, f.Cl)({}, t), { trailingZeroDisplay: "stripIfInteger" }))
                                          : i && (t = (0, f.Cl)((0, f.Cl)({}, t), b(i)));
                                      continue;
                                  }
                                  if (v.test(n.stem)) {
                                      t = (0, f.Cl)((0, f.Cl)({}, t), b(n.stem));
                                      continue;
                                  }
                                  var o = w(n.stem);
                                  o && (t = (0, f.Cl)((0, f.Cl)({}, t), o));
                                  var a = (function (e) {
                                      var t;
                                      if (
                                          ("E" === e[0] && "E" === e[1]
                                              ? ((t = { notation: "engineering" }), (e = e.slice(2)))
                                              : "E" === e[0] && ((t = { notation: "scientific" }), (e = e.slice(1))),
                                          t)
                                      ) {
                                          var r = e.slice(0, 2);
                                          if (
                                              ("+!" === r
                                                  ? ((t.signDisplay = "always"), (e = e.slice(2)))
                                                  : "+?" === r && ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
                                              !g.test(e))
                                          )
                                              throw Error("Malformed concise eng/scientific notation");
                                          t.minimumIntegerDigits = e.length;
                                      }
                                      return t;
                                  })(n.stem);
                                  a && (t = (0, f.Cl)((0, f.Cl)({}, t), a));
                              }
                              return t;
                          })(r)
                        : {},
                },
                err: null,
            };
        }),
        (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
            for (var i, o = !1, s = [], l = new Set(), u = n.value, c = n.location; ;) {
                if (0 === u.length) {
                    var f = this.clonePosition();
                    if ("select" !== t && this.bumpIf("=")) {
                        var p = this.tryParseDecimalInteger(
                            a.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                            a.INVALID_PLURAL_ARGUMENT_SELECTOR,
                        );
                        if (p.err) return p;
                        ((c = C(f, this.clonePosition())), (u = this.message.slice(f.offset, this.offset())));
                    } else break;
                }
                if (l.has(u))
                    return this.error(
                        "select" === t ? a.DUPLICATE_SELECT_ARGUMENT_SELECTOR : a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                        c,
                    );
                ("other" === u && (o = !0), this.bumpSpace());
                var d = this.clonePosition();
                if (!this.bumpIf("{"))
                    return this.error(
                        "select" === t
                            ? a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                            : a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                        C(this.clonePosition(), this.clonePosition()),
                    );
                var h = this.parseMessage(e + 1, t, r);
                if (h.err) return h;
                var m = this.tryParseArgumentClose(d);
                if (m.err) return m;
                (s.push([u, { value: h.val, location: C(d, this.clonePosition()) }]),
                    l.add(u),
                    this.bumpSpace(),
                    (u = (i = this.parseIdentifierIfPossible()).value),
                    (c = i.location));
            }
            return 0 === s.length
                ? this.error(
                      "select" === t ? a.EXPECT_SELECT_ARGUMENT_SELECTOR : a.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                      C(this.clonePosition(), this.clonePosition()),
                  )
                : this.requiresOtherClause && !o
                  ? this.error(a.MISSING_OTHER_CLAUSE, C(this.clonePosition(), this.clonePosition()))
                  : { val: s, err: null };
        }),
        (e.prototype.tryParseDecimalInteger = function (e, t) {
            var r = 1,
                n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var i = !1, o = 0; !this.isEOF();) {
                var a = this.char();
                if (a >= 48 && a <= 57) ((i = !0), (o = 10 * o + (a - 48)), this.bump());
                else break;
            }
            var s = C(n, this.clonePosition());
            return i ? (O((o *= r)) ? { val: o, err: null } : this.error(t, s)) : this.error(e, s);
        }),
        (e.prototype.offset = function () {
            return this.position.offset;
        }),
        (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
        }),
        (e.prototype.clonePosition = function () {
            return { offset: this.position.offset, line: this.position.line, column: this.position.column };
        }),
        (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = N(this.message, e);
            if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            return t;
        }),
        (e.prototype.error = function (e, t) {
            return { val: null, err: { kind: e, message: this.message, location: t } };
        }),
        (e.prototype.bump = function () {
            if (!this.isEOF()) {
                var e = this.char();
                10 === e
                    ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1))
                    : ((this.position.column += 1), (this.position.offset += e < 65536 ? 1 : 2));
            }
        }),
        (e.prototype.bumpIf = function (e) {
            if (L(this.message, e, this.offset())) {
                for (var t = 0; t < e.length; t++) this.bump();
                return !0;
            }
            return !1;
        }),
        (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
                r = this.message.indexOf(e, t);
            return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
        }),
        (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
                throw Error(
                    "targetOffset "
                        .concat(e, " must be greater than or equal to the current offset ")
                        .concat(this.offset()),
                );
            for (e = Math.min(e, this.message.length); ;) {
                var t = this.offset();
                if (t === e) break;
                if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                if ((this.bump(), this.isEOF())) break;
            }
        }),
        (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && H(this.char());) this.bump();
        }),
        (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
                t = this.offset(),
                r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
        }),
        e
    );
})();
function $(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function H(e) {
    return (e >= 9 && e <= 13) || 32 === e || 133 === e || (e >= 8206 && e <= 8207) || 8232 === e || 8233 === e;
}
function z(e, t) {
    void 0 === t && (t = {});
    var r = new V(e, (t = (0, f.Cl)({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t))).parse();
    if (r.err) {
        var n = SyntaxError(a[r.err.kind]);
        throw ((n.location = r.err.location), (n.originalMessage = r.err.message), n);
    }
    return (
        (null == t ? void 0 : t.captureLocation) ||
            (function e(t) {
                t.forEach(function (t) {
                    if ((delete t.location, t.type === s.select || t.type === s.plural))
                        for (var r in t.options) (delete t.options[r].location, e(t.options[r].value));
                    else {
                        var n, i;
                        (t.type === s.number && (n = t.style) && "object" == typeof n && n.type === l.number) ||
                        ((t.type === s.date || t.type === s.time) &&
                            (i = t.style) &&
                            "object" == typeof i &&
                            i.type === l.dateTime)
                            ? delete t.style.location
                            : t.type === s.tag && e(t.children);
                    }
                });
            })(r.val),
        r.val
    );
}
