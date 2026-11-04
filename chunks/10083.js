t.d(a, { cQ: () => ed, J3: () => em, Eu: () => eg });
var r = t(980807),
    n = t(755357),
    i = t(805206),
    o = t(652664),
    l = t(582128),
    s = t(736570),
    d = t(599291);
let u = (0, l.createContext)({}),
    c = (0, i.U7)(function (e, a) {
        [e, a] = (0, r.JT)(e, a, u);
        let { hoverProps: t, isHovered: n } = (0, d.M)({ ...e, isDisabled: e.disabled }),
            { isFocused: i, isFocusVisible: c, focusProps: m } = (0, s.o)({ isTextInput: !0, autoFocus: e.autoFocus }),
            h = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            y = (0, r.Sl)({
                ...e,
                values: { isHovered: n, isFocused: i, isFocusVisible: c, isDisabled: e.disabled || !1, isInvalid: h },
                defaultClassName: "react-aria-Input",
            });
        return l.createElement(r.tT.input, {
            ...(0, o.v)(
                ((e) => {
                    let { onHoverStart: a, onHoverChange: t, onHoverEnd: r, ...n } = e;
                    return n;
                })(e),
                m,
                t,
            ),
            ...y,
            ref: a,
            "data-focused": i || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": n || void 0,
            "data-focus-visible": c || void 0,
            "data-invalid": h || void 0,
        });
    });
var m = t(886598),
    h = t(518206),
    y = t(547993),
    g = t(67551),
    p = t(681212),
    f = t(702658),
    D = t(879452),
    v = t(677654),
    b = t(95638);
class $ {
    constructor(e, a) {
        ((this.locale = e), (this.dictionary = a));
    }
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
}
var R = t(512597),
    P = t(168538),
    w = t(802649),
    x = t(376541),
    k = t(853830),
    S = t(811390),
    V = t(29474),
    C = {};
C = {
    "ar-AE": { Empty: "\u0641\u0627\u0631\u063A" },
    "bg-BG": { Empty: "\u0418\u0437\u043F\u0440\u0430\u0437\u043D\u0438" },
    "cs-CZ": { Empty: "Pr\xe1zdn\xe9" },
    "da-DK": { Empty: "Tom" },
    "de-DE": { Empty: "Leer" },
    "el-GR": { Empty: "\u0386\u03B4\u03B5\u03B9\u03BF" },
    "en-US": { Empty: "Empty" },
    "es-ES": { Empty: "Vac\xedo" },
    "et-EE": { Empty: "T\xfchjenda" },
    "fi-FI": { Empty: "Tyhj\xe4" },
    "fr-FR": { Empty: "Vide" },
    "he-IL": { Empty: "\u05E8\u05D9\u05E7" },
    "hr-HR": { Empty: "Prazno" },
    "hu-HU": { Empty: "\xdcres" },
    "it-IT": { Empty: "Vuoto" },
    "ja-JP": { Empty: "\u7A7A" },
    "ko-KR": { Empty: "\uBE44\uC5B4 \uC788\uC74C" },
    "lt-LT": { Empty: "Tu\u0161\u010Dias" },
    "lv-LV": { Empty: "Tuk\u0161s" },
    "nb-NO": { Empty: "Tom" },
    "nl-NL": { Empty: "Leeg" },
    "pl-PL": { Empty: "Pusty" },
    "pt-BR": { Empty: "Vazio" },
    "pt-PT": { Empty: "Vazio" },
    "ro-RO": { Empty: "Gol" },
    "ru-RU": { Empty: "\u041D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E" },
    "sk-SK": { Empty: "Pr\xe1zdne" },
    "sl-SI": { Empty: "Prazen" },
    "sr-SP": { Empty: "Prazno" },
    "sv-SE": { Empty: "Tomt" },
    "tr-TR": { Empty: "Bo\u015F" },
    "uk-UA": { Empty: "\u041F\u0443\u0441\u0442\u043E" },
    "zh-CN": { Empty: "\u7A7A" },
    "zh-TW": { Empty: "\u7A7A\u767D" },
};
var M = t(829904),
    I = t(867085);
let E = () => {};
var F = t(594247),
    T = t(569737),
    O = t(123680);
let A = RegExp("^.*\\(.*\\).*$"),
    N = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class Z {
    constructor(e, a = {}) {
        ((this.locale = e), (this.options = a));
    }
    parse(e) {
        return z(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, a, t) {
        return z(this.locale, this.options, e).isValidPartialNumber(e, a, t);
    }
    getNumberingSystem(e) {
        return z(this.locale, this.options, e).options.numberingSystem;
    }
}
let U = new Map();
function z(e, a, t) {
    let r = B(e, a);
    if (!e.includes("-nu-") && !r.isValidPartialNumber(t)) {
        for (let n of N)
            if (n !== r.options.numberingSystem) {
                let r = B(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + n, a);
                if (r.isValidPartialNumber(t)) return r;
            }
    }
    return r;
}
function B(e, a) {
    let t =
            e +
            (a
                ? Object.entries(a)
                      .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                      .join()
                : ""),
        r = U.get(t);
    return (r || ((r = new j(e, a)), U.set(t, r)), r);
}
class j {
    constructor(e, a = {}) {
        var t, r, n, i;
        let o, l, s, d, u, c, m, h, y, g, p, f, D, v, b, $;
        ((this.locale = e),
            1 !== a.roundingIncrement &&
                null != a.roundingIncrement &&
                (null == a.maximumFractionDigits && null == a.minimumFractionDigits
                    ? ((a.maximumFractionDigits = 0), (a.minimumFractionDigits = 0))
                    : null == a.maximumFractionDigits
                      ? (a.maximumFractionDigits = a.minimumFractionDigits)
                      : null == a.minimumFractionDigits && (a.minimumFractionDigits = a.maximumFractionDigits)),
            (this.formatter = new Intl.NumberFormat(e, a)),
            (this.options = this.formatter.resolvedOptions()),
            (this.symbols =
                ((t = e),
                (r = this.formatter),
                (n = this.options),
                (i = a),
                (l = (o = new Intl.NumberFormat(t, {
                    ...n,
                    minimumSignificantDigits: 1,
                    maximumSignificantDigits: 21,
                    roundingIncrement: 1,
                    roundingPriority: "auto",
                    roundingMode: "halfExpand",
                    useGrouping: !0,
                })).formatToParts(-10000.111)),
                (s = o.formatToParts(10000.111)),
                (u = (d = L.map((e) => o.formatToParts(e)))
                    .map((e, a) => {
                        let t = e.find((e) => "unit" === e.type);
                        return t && !e.some((e) => "integer" === e.type || "fraction" === e.type)
                            ? { unit: t.value, value: L[a] }
                            : null;
                    })
                    .filter((e) => !!e)),
                (c = l.find((e) => "minusSign" === e.type)?.value ?? "-"),
                (m = s.find((e) => "plusSign" === e.type)?.value) ||
                    (i?.signDisplay !== "exceptZero" && i?.signDisplay !== "always") ||
                    (m = "+"),
                (h = new Intl.NumberFormat(t, {
                    ...n,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).formatToParts(0.001)),
                (y = h.find((e) => "decimal" === e.type)?.value),
                (g = l.find((e) => "group" === e.type)?.value),
                (p = l.filter((e) => !K.has(e.type)).map((e) => Y(e.value))),
                (f = d.flatMap((e) => e.filter((e) => !K.has(e.type)).map((e) => Y(e.value)))),
                (v =
                    0 === (D = [...new Set([...p, ...f])].sort((e, a) => a.length - e.length)).length
                        ? RegExp("\\p{White_Space}|\\p{Cf}", "gu")
                        : RegExp(`${D.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu")),
                ($ = new Map(
                    (b = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(0x24cb016ea)].reverse()).map(
                        (e, a) => [e, a],
                    ),
                )),
                {
                    minusSign: c,
                    plusSign: m,
                    decimal: y,
                    group: g,
                    literals: v,
                    numeral: RegExp(`[${b.join("")}]`, "g"),
                    numerals: b,
                    index: (e) => String($.get(e)),
                    noNumeralUnits: u,
                })),
            "percent" === this.options.style &&
                ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) &&
                console.warn(
                    "NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
                ));
    }
    parse(e) {
        let a = this.formatter.resolvedOptions().useGrouping,
            t = this.sanitize(e);
        if (!a && this.symbols.group && t.includes(this.symbols.group)) return 0 / 0;
        if (
            (this.symbols.group && (t = t.replaceAll(this.symbols.group, "")),
            this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")),
            this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")),
            (t = t.replace(this.symbols.numeral, this.symbols.index)),
            "percent" === this.options.style)
        ) {
            let e = t.indexOf("-"),
                a = (t = (t = t.replace("-", "")).replace("+", "")).indexOf(".");
            (-1 === a && (a = t.length),
                (t = t.replace(".", "")),
                (t =
                    a - 2 == 0
                        ? `0.${t}`
                        : a - 2 == -1
                          ? `0.0${t}`
                          : a - 2 == -2
                            ? "0.00"
                            : `${t.slice(0, a - 2)}.${t.slice(a - 2)}`),
                e > -1 && (t = `-${t}`));
        }
        let r = t ? +t : 0 / 0;
        if (isNaN(r)) return 0 / 0;
        if ("percent" === this.options.style) {
            let e = {
                ...this.options,
                style: "decimal",
                minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
                maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20),
            };
            return new Z(this.locale, e).parse(new (0, O.K)(this.locale, e).format(r));
        }
        return ("accounting" === this.options.currencySign && A.test(e) && (r *= -1), r);
    }
    sanitize(e) {
        let a = this.formatter.resolvedOptions().useGrouping;
        return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((a) => a.unit === e)
            ? this.symbols.noNumeralUnits.find((a) => a.unit === e).value.toString()
            : ((e = e.replace(this.symbols.literals, "")),
              this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)),
              "arab" === this.options.numberingSystem &&
                  (this.symbols.decimal &&
                      ((e = J(e, ",", this.symbols.decimal)),
                      (e = J(e, String.fromCharCode(1548), this.symbols.decimal))),
                  this.symbols.group && a && (e = J(e, ".", this.symbols.group))),
              "\u2019" === this.symbols.group && e.includes("'") && a && (e = J(e, "'", this.symbols.group)),
              "'" === this.symbols.group && e.includes("\u2019") && a && (e = J(e, "\u2019", this.symbols.group)),
              "fr-FR" === this.options.locale &&
                  this.symbols.group &&
                  a &&
                  ((e = J(e, " ", this.symbols.group)), (e = J(e, /\u00A0/g, this.symbols.group))),
              e);
    }
    isValidPartialNumber(e, a = -1 / 0, t = 1 / 0) {
        let r = this.formatter.resolvedOptions().useGrouping;
        return (
            (e = this.sanitize(e)),
            this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && a < 0
                ? (e = e.slice(this.symbols.minusSign.length))
                : this.symbols.plusSign &&
                  e.startsWith(this.symbols.plusSign) &&
                  t > 0 &&
                  (e = e.slice(this.symbols.plusSign.length)),
            (!(this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1) ||
                0 !== this.options.maximumFractionDigits) &&
                (this.symbols.group && r && (e = J(e, this.symbols.group, "")),
                (e = e.replace(this.symbols.numeral, "")),
                this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")),
                0 === e.length)
        );
    }
}
let K = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    L = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function J(e, a, t) {
    return e.replaceAll ? e.replaceAll(a, t) : e.split(a).join(t);
}
function Y(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var G = t(358835),
    W = t(127190),
    q = t(997401);
let H = new (0, t(559550).B)(
    {
        ach: { year: "mwaka", month: "dwe", day: "nino" },
        af: { year: "jjjj", month: "mm", day: "dd" },
        am: { year: "\u12D3\u12D3\u12D3\u12D3", month: "\u121A\u121C", day: "\u1240\u1240" },
        an: { year: "aaaa", month: "mm", day: "dd" },
        ar: { year: "\u0633\u0646\u0629", month: "\u0634\u0647\u0631", day: "\u064A\u0648\u0645" },
        ast: { year: "aaaa", month: "mm", day: "dd" },
        az: { year: "iiii", month: "aa", day: "gg" },
        be: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        bg: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        bn: { year: "yyyy", month: "\u09AE\u09BF\u09AE\u09BF", day: "dd" },
        br: { year: "bbbb", month: "mm", day: "dd" },
        bs: { year: "gggg", month: "mm", day: "dd" },
        ca: { year: "aaaa", month: "mm", day: "dd" },
        cak: { year: "jjjj", month: "ii", day: "q'q'" },
        ckb: { year: "\u0633\u0627\u06B5", month: "\u0645\u0627\u0646\u06AF", day: "\u0695\u06C6\u0698" },
        cs: { year: "rrrr", month: "mm", day: "dd" },
        cy: { year: "bbbb", month: "mm", day: "dd" },
        da: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        de: { year: "jjjj", month: "mm", day: "tt" },
        dsb: { year: "llll", month: "mm", day: "\u017A\u017A" },
        el: { year: "\u03B5\u03B5\u03B5\u03B5", month: "\u03BC\u03BC", day: "\u03B7\u03B7" },
        en: { year: "yyyy", month: "mm", day: "dd" },
        eo: { year: "jjjj", month: "mm", day: "tt" },
        es: { year: "aaaa", month: "mm", day: "dd" },
        et: { year: "aaaa", month: "kk", day: "pp" },
        eu: { year: "uuuu", month: "hh", day: "ee" },
        fa: { year: "\u0633\u0627\u0644", month: "\u0645\u0627\u0647", day: "\u0631\u0648\u0632" },
        ff: { year: "hhhh", month: "ll", day: "\xf1\xf1" },
        fi: { year: "vvvv", month: "kk", day: "pp" },
        fr: { year: "aaaa", month: "mm", day: "jj" },
        fy: { year: "jjjj", month: "mm", day: "dd" },
        ga: { year: "bbbb", month: "mm", day: "ll" },
        gd: { year: "bbbb", month: "mm", day: "ll" },
        gl: { year: "aaaa", month: "mm", day: "dd" },
        he: { year: "\u05E9\u05E0\u05D4", month: "\u05D7\u05D5\u05D3\u05E9", day: "\u05D9\u05D5\u05DD" },
        hr: { year: "gggg", month: "mm", day: "dd" },
        hsb: { year: "llll", month: "mm", day: "dd" },
        hu: { year: "\xe9\xe9\xe9\xe9", month: "hh", day: "nn" },
        ia: { year: "aaaa", month: "mm", day: "dd" },
        id: { year: "tttt", month: "bb", day: "hh" },
        is: { year: "\xe1\xe1\xe1\xe1", month: "mm", day: "dd" },
        it: { year: "aaaa", month: "mm", day: "gg" },
        ja: { year: "\u5E74", month: "\u6708", day: "\u65E5" },
        ka: { year: "\u10EC\u10EC\u10EC\u10EC", month: "\u10D7\u10D7", day: "\u10E0\u10E0" },
        kk: { year: "\u0436\u0436\u0436\u0436", month: "\u0430\u0430", day: "\u043A\u043A" },
        kn: { year: "\u0CB5\u0CB5\u0CB5\u0CB5", month: "\u0CAE\u0CBF\u0CAE\u0CC0", day: "\u0CA6\u0CBF\u0CA6\u0CBF" },
        ko: { year: "\uC5F0\uB3C4", month: "\uC6D4", day: "\uC77C" },
        lb: { year: "jjjj", month: "mm", day: "dd" },
        lo: { year: "\u0E9B\u0E9B\u0E9B\u0E9B", month: "\u0E94\u0E94", day: "\u0EA7\u0EA7" },
        lt: { year: "mmmm", month: "mm", day: "dd" },
        lv: { year: "gggg", month: "mm", day: "dd" },
        meh: { year: "aaaa", month: "mm", day: "dd" },
        ml: {
            year: "\u0D35\u0D7C\u0D37\u0D02",
            month: "\u0D2E\u0D3E\u0D38\u0D02",
            day: "\u0D24\u0D40\u0D2F\u0D24\u0D3F",
        },
        ms: { year: "tttt", month: "mm", day: "hh" },
        nb: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        nl: { year: "jjjj", month: "mm", day: "dd" },
        nn: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        no: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        oc: { year: "aaaa", month: "mm", day: "jj" },
        pl: { year: "rrrr", month: "mm", day: "dd" },
        pt: { year: "aaaa", month: "mm", day: "dd" },
        rm: { year: "oooo", month: "mm", day: "dd" },
        ro: { year: "aaaa", month: "ll", day: "zz" },
        ru: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        sc: { year: "aaaa", month: "mm", day: "dd" },
        scn: { year: "aaaa", month: "mm", day: "jj" },
        sk: { year: "rrrr", month: "mm", day: "dd" },
        sl: { year: "llll", month: "mm", day: "dd" },
        sr: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        "sr-Latn": { year: "gggg", month: "mm", day: "dd" },
        sv: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        szl: { year: "rrrr", month: "mm", day: "dd" },
        tg: { year: "\u0441\u0441\u0441\u0441", month: "\u043C\u043C", day: "\u0440\u0440" },
        th: { year: "\u0E1B\u0E1B\u0E1B\u0E1B", month: "\u0E14\u0E14", day: "\u0E27\u0E27" },
        tr: { year: "yyyy", month: "aa", day: "gg" },
        uk: { year: "\u0440\u0440\u0440\u0440", month: "\u043C\u043C", day: "\u0434\u0434" },
        "zh-CN": { year: "\u5E74", month: "\u6708", day: "\u65E5" },
        "zh-TW": { year: "\u5E74", month: "\u6708", day: "\u65E5" },
    },
    "en",
);
class _ {
    constructor(e, a, t) {
        if (
            ((this.era = t?.era ?? null),
            (this.calendar = e),
            (this.year = t?.year ?? null),
            (this.month = t?.month ?? null),
            (this.day = t?.day ?? null),
            (this.hour = t?.hour ?? null),
            (this.hourCycle = a),
            (this.dayPeriod = null),
            (this.minute = t?.minute ?? null),
            (this.second = t?.second ?? null),
            (this.millisecond = t?.millisecond ?? null),
            (this.offset = "offset" in (t ?? {}) ? t.offset : null),
            null != this.hour)
        ) {
            let [e, t] = X(this.hour, a);
            ((this.dayPeriod = e), (this.hour = t));
        }
    }
    copy() {
        let e = new _(this.calendar, this.hourCycle);
        return (
            (e.era = this.era),
            (e.year = this.year),
            (e.month = this.month),
            (e.day = this.day),
            (e.hour = this.hour),
            (e.dayPeriod = this.dayPeriod),
            (e.minute = this.minute),
            (e.second = this.second),
            (e.millisecond = this.millisecond),
            (e.offset = this.offset),
            e
        );
    }
    isComplete(e) {
        return e.every((e) => null != this[e]);
    }
    validate(e, a) {
        return a.every((a) => {
            if (("hour" === a || "dayPeriod" === a) && "hour" in e) {
                let [a, t] = X(e.hour, this.hourCycle);
                return this.dayPeriod === a && this.hour === t;
            }
            return this[a] === e[a];
        });
    }
    isCleared(e) {
        return e.every((e) => null === this[e]);
    }
    set(e, a, t) {
        let r = this.copy();
        return (
            (r[e] = a),
            "hour" === e && null == r.dayPeriod && "hour" in t && (r.dayPeriod = X(t.hour, this.hourCycle)[0]),
            "year" === e && null == r.era && (r.era = t.era),
            "second" !== e && "literal" !== e && "timeZoneName" !== e && (r.offset = null),
            r
        );
    }
    clear(e) {
        let a = this.copy();
        return ((a[e] = null), "year" === e && (a.era = null), (a.offset = null), a);
    }
    cycle(e, a, t, r) {
        let n = this.copy();
        if (null == n[e] && "dayPeriod" !== e && "era" !== e) {
            if ("hour" === e && "hour" in t) {
                let [e, a] = X(t.hour, this.hourCycle);
                ((n.dayPeriod = e), (n.hour = a));
            } else n[e] = t[e];
            return ("year" === e && null == n.era && (n.era = t.era), n);
        }
        switch (e) {
            case "era": {
                let e = this.calendar.getEras(),
                    t = e.indexOf(n.era);
                ((t = Q(t, a, 0, e.length - 1)), (n.era = e[t]));
                break;
            }
            case "year": {
                let r = new (0, T.ng)(
                    this.calendar,
                    this.era ?? t.era,
                    this.year ?? t.year,
                    this.month ?? 1,
                    this.day ?? 1,
                );
                ((n.era = (r = r.cycle(e, a, { round: "year" === e })).era), (n.year = r.year));
                break;
            }
            case "month":
                n.month = Q(n.month ?? 1, a, 1, this.calendar.getMaximumMonthsInYear());
                break;
            case "day":
                n.day = Q(n.day ?? 1, a, 1, this.calendar.getMaximumDaysInMonth());
                break;
            case "hour": {
                let e = r.some((e) => ["year", "month", "day"].includes(e));
                if ("timeZone" in t && (!e || (null != n.year && null != n.month && null != n.day))) {
                    let e = this.toValue(t),
                        [r, i] = X(
                            (e = e.cycle("hour", a, { hourCycle: "h12" === this.hourCycle ? 12 : 24, round: !1 })).hour,
                            this.hourCycle,
                        );
                    ((n.hour = i), (n.dayPeriod = r), (n.offset = e.offset));
                } else {
                    let e = n.hour ?? 0,
                        r = this.getSegmentLimits("hour");
                    ((n.hour = Q(e, a, r.minValue, r.maxValue)),
                        null == n.dayPeriod && "hour" in t && (n.dayPeriod = X(t.hour, this.hourCycle)[0]));
                }
                break;
            }
            case "dayPeriod":
                n.dayPeriod = Q(n.dayPeriod ?? 0, a, 0, 1);
                break;
            case "minute":
                n.minute = Q(n.minute ?? 0, a, 0, 59, !0);
                break;
            case "second":
                n.second = Q(n.second ?? 0, a, 0, 59, !0);
        }
        return n;
    }
    toValue(e) {
        if (!("hour" in e))
            return e.set({
                era: this.era ?? e.era,
                year: this.year ?? e.year,
                month: this.month ?? e.month,
                day: this.day ?? e.day,
            });
        {
            let a = this.hour;
            null != a
                ? (a = (function (e, a, t) {
                      switch (t) {
                          case "h11":
                              1 === a && (e += 12);
                              break;
                          case "h12":
                              (12 === e && (e = 0), 1 === a && (e += 12));
                              break;
                          case "h24":
                              e -= 1;
                      }
                      return e;
                  })(a, this.dayPeriod ?? 0, this.hourCycle))
                : ("h12" === this.hourCycle || "h11" === this.hourCycle) && (a = 12 * (1 === this.dayPeriod));
            let t = e.set({
                era: this.era ?? e.era,
                year: this.year ?? e.year,
                month: this.month ?? e.month,
                day: this.day ?? e.day,
                hour: a ?? e.hour,
                minute: this.minute ?? e.minute,
                second: this.second ?? e.second,
                millisecond: this.millisecond ?? e.millisecond,
            });
            return (
                "offset" in t &&
                    null != this.offset &&
                    t.offset !== this.offset &&
                    (t = t.add({ milliseconds: t.offset - this.offset })),
                t
            );
        }
    }
    getSegmentLimits(e) {
        switch (e) {
            case "era": {
                let e = this.calendar.getEras();
                return {
                    value: null != this.era ? e.indexOf(this.era) : e.length - 1,
                    minValue: 0,
                    maxValue: e.length - 1,
                };
            }
            case "year":
                return { value: this.year, minValue: 1, maxValue: 9999 };
            case "month":
                return { value: this.month, minValue: 1, maxValue: this.calendar.getMaximumMonthsInYear() };
            case "day":
                return { value: this.day, minValue: 1, maxValue: this.calendar.getMaximumDaysInMonth() };
            case "dayPeriod":
                return { value: this.dayPeriod, minValue: 0, maxValue: 1 };
            case "hour": {
                let e = 0,
                    a = 23;
                return (
                    "h12" === this.hourCycle ? ((e = 1), (a = 12)) : "h11" === this.hourCycle && ((e = 0), (a = 11)),
                    { value: this.hour, minValue: e, maxValue: a }
                );
            }
            case "minute":
                return { value: this.minute, minValue: 0, maxValue: 59 };
            case "second":
                return { value: this.second, minValue: 0, maxValue: 59 };
        }
    }
}
function Q(e, a, t, r) {
    let n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (n) {
        (e += Math.sign(a)) < t && (e = r);
        let n = Math.abs(a);
        (e = a > 0 ? Math.ceil(e / n) * n : Math.floor(e / n) * n) > r && (e = t);
    } else (e += a) < t ? (e = r - (t - e - 1)) : e > r && (e = t + (e - r - 1));
    return e;
}
function X(e, a) {
    let t = +(e >= 12);
    switch (a) {
        case "h11":
            e >= 12 && (e -= 12);
            break;
        case "h12":
            0 === e ? (e = 12) : e > 12 && (e -= 12);
            break;
        case "h23":
            t = null;
            break;
        case "h24":
            ((e += 1), (t = null));
    }
    return [t, e];
}
var ee = t(500243),
    ea = t(825503),
    et = t(70254),
    er = t(576463);
let en = { year: !0, month: !0, day: !0, hour: !0, minute: !0, second: !0, dayPeriod: !0, era: !0 },
    ei = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
    eo = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
var el = t(892730),
    es = t(808529);
let ed = (0, l.createContext)(null),
    eu = (0, l.createContext)(null),
    ec = (0, l.createContext)(null),
    em = (0, l.forwardRef)(function (e, a) {
        let t = (0, l.useContext)(eu),
            r = (0, l.useContext)(ec);
        return t || r ? l.createElement(ey, { ...e, ref: a }) : l.createElement(eh, { ...e, ref: a });
    }),
    eh = (0, l.forwardRef)((e, a) => {
        let [t, i] = (0, r.JT)({ slot: e.slot }, a, ed),
            { locale: o } = (0, v.Y)(),
            s = (function (e) {
                let {
                        locale: a,
                        createCalendar: t,
                        hideTimeZone: r,
                        isDisabled: n = !1,
                        isReadOnly: i = !1,
                        isRequired: o = !1,
                        minValue: s,
                        maxValue: d,
                        isDateUnavailable: u,
                    } = e,
                    c = e.value || e.defaultValue || e.placeholderValue || null,
                    [m, h] = (0, W.bf)(c, e.granularity),
                    y = h || "UTC";
                if (c && !(m in c)) throw Error("Invalid granularity " + m + " for value " + c.toString());
                let [g, p] = (0, l.useMemo)(() => {
                        let r = new (0, ea.p)(a, {
                            dateStyle: "short",
                            timeStyle: "short",
                            hour12: null != e.hourCycle ? 12 === e.hourCycle : void 0,
                        }).resolvedOptions();
                        return [t(r.calendar), r.hourCycle];
                    }, [a, e.hourCycle, t]),
                    [f, D] = (0, ee.P)(e.value, e.defaultValue ?? null, e.onChange),
                    [v] = (0, l.useState)(f),
                    b = (0, l.useMemo)(() => (0, W.nf)(f, g) ?? null, [f, g]),
                    [$, R] = (0, l.useState)(() => new _(g, p, b)),
                    P = "gregory" === g.identifier && "BC" === $.era,
                    w = (0, l.useMemo)(
                        () => ({
                            granularity: m,
                            maxGranularity: e.maxGranularity ?? "year",
                            timeZone: h,
                            hideTimeZone: r,
                            hourCycle: e.hourCycle,
                            showEra: P,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                        }),
                        [e.maxGranularity, m, e.hourCycle, e.shouldForceLeadingZeros, h, r, P],
                    ),
                    x = (0, l.useMemo)(() => (0, W.id)({}, w), [w]),
                    k = (0, l.useMemo)(() => new (0, ea.p)(a, x), [a, x]),
                    S = (0, l.useMemo)(() => k.resolvedOptions(), [k]),
                    V = (0, l.useMemo)(() => (0, W.o_)(e.placeholderValue, m, g, h), [e.placeholderValue, m, g, h]),
                    C = (0, l.useMemo)(() => {
                        let a = "h11" === p || "h12" === p,
                            t = [
                                "era",
                                "year",
                                "month",
                                "day",
                                "hour",
                                ...(a ? ["dayPeriod"] : []),
                                "minute",
                                "second",
                            ],
                            r = t.indexOf(e.maxGranularity || "era"),
                            n = t.indexOf("hour" === m && a ? "dayPeriod" : m);
                        return t.slice(r, n + 1);
                    }, [e.maxGranularity, m, p]),
                    [M, I] = (0, l.useState)(b),
                    [E, T] = (0, l.useState)(g),
                    [A, N] = (0, l.useState)(p);
                (b === M && p === A && (0, et.Jg)(g, E)) || (($ = new _(g, p, b)), I(b), T(g), N(p), R($));
                let Z = (a) => {
                        if (!e.isDisabled && !e.isReadOnly)
                            if (null == a || (a instanceof _ && a.isCleared(C))) (R(new _(g, p, b)), D(null));
                            else if (a instanceof _) {
                                if (a.isComplete(C)) {
                                    let e = a.toValue(b ?? V);
                                    if (a.validate(e, C)) {
                                        let a = (0, F.yP)(e, c?.calendar || new (0, er.FG)());
                                        if (!f || 0 !== a.compare(f)) {
                                            (R(new _(g, p, b)), D(a));
                                            return;
                                        }
                                    }
                                }
                                R(a);
                            } else ((a = (0, F.yP)(a, c?.calendar || new (0, er.FG)())), R(new _(g, p, b)), D(a));
                    },
                    U = (0, l.useMemo)(() => $.toValue(b ?? V).toDate(y), [$, y, b, V]),
                    z = (0, l.useMemo)(
                        () =>
                            (function (e, a, t, r, n, i, o) {
                                let l = ["hour", "minute", "second"],
                                    s = t.formatToParts(e),
                                    d = new (0, O.K)(i, { useGrouping: !1 }),
                                    u = new (0, O.K)(i, { useGrouping: !1, minimumIntegerDigits: 2 });
                                for (let e of s)
                                    if (
                                        "year" === e.type ||
                                        "month" === e.type ||
                                        "day" === e.type ||
                                        "hour" === e.type
                                    ) {
                                        let t = a[e.type] ?? 0;
                                        "2-digit" === r[e.type] ? (e.value = u.format(t)) : (e.value = d.format(t));
                                    }
                                let c = [];
                                for (let e of s) {
                                    var m;
                                    let t = eo[e.type] || e.type,
                                        r = en[t];
                                    "era" === t && 1 === n.getEras().length && (r = !1);
                                    let s = en[t] && null == a[e.type],
                                        d = en[t]
                                            ? ((m = e.value),
                                              "era" === t || "dayPeriod" === t
                                                  ? m
                                                  : "year" === t || "month" === t || "day" === t
                                                    ? H.getStringForLocale(t, i)
                                                    : "\u2013\u2013")
                                            : null,
                                        u = {
                                            type: t,
                                            text: s ? d : e.value,
                                            ...a.getSegmentLimits(t),
                                            isPlaceholder: s,
                                            placeholder: d,
                                            isEditable: r,
                                        };
                                    "hour" === t
                                        ? (c.push({
                                              type: "literal",
                                              text: "\u2066",
                                              isPlaceholder: !1,
                                              placeholder: "",
                                              isEditable: !1,
                                          }),
                                          c.push(u),
                                          t === o &&
                                              c.push({
                                                  type: "literal",
                                                  text: "\u2069",
                                                  isPlaceholder: !1,
                                                  placeholder: "",
                                                  isEditable: !1,
                                              }))
                                        : l.includes(t) && t === o
                                          ? (c.push(u),
                                            c.push({
                                                type: "literal",
                                                text: "\u2069",
                                                isPlaceholder: !1,
                                                placeholder: "",
                                                isEditable: !1,
                                            }))
                                          : c.push(u);
                                }
                                return c;
                            })(U, $, k, S, g, a, m),
                        [U, k, S, $, g, a, m],
                    ),
                    B = (e, a) => {
                        Z($.cycle(e, a, V, C));
                    },
                    j = (0, l.useMemo)(() => (0, W.nz)(f, s, d, u, w), [f, s, d, u, w]),
                    K = (0, q.KZ)({ ...e, value: f, builtinValidation: j }),
                    L = K.displayValidation.isInvalid,
                    J = e.validationState || (L ? "invalid" : null);
                return {
                    ...K,
                    value: b,
                    defaultValue: e.defaultValue ?? v,
                    dateValue: U,
                    calendar: g,
                    setValue: Z,
                    segments: z,
                    dateFormatter: k,
                    validationState: J,
                    isInvalid: L,
                    granularity: m,
                    maxGranularity: e.maxGranularity ?? "year",
                    isDisabled: n,
                    isReadOnly: i,
                    isRequired: o,
                    increment(e) {
                        B(e, 1);
                    },
                    decrement(e) {
                        B(e, -1);
                    },
                    incrementPage(e) {
                        B(e, ei[e] || 1);
                    },
                    decrementPage(e) {
                        B(e, -(ei[e] || 1));
                    },
                    incrementToMax(e) {
                        let a = "hour" === e && "h12" === p ? 11 : $.getSegmentLimits(e).maxValue;
                        Z($.set(e, a, V));
                    },
                    decrementToMin(e) {
                        let a = "hour" === e && "h12" === p ? 12 : $.getSegmentLimits(e).minValue;
                        Z($.set(e, a, V));
                    },
                    setSegment(e, a) {
                        Z($.set(e, a, V));
                    },
                    confirmPlaceholder() {
                        if (!e.isDisabled && !e.isReadOnly && $.isComplete(C)) {
                            let e = $.toValue(b ?? V),
                                a = (0, F.yP)(e, c?.calendar || new (0, er.FG)());
                            ((f && 0 === a.compare(f)) || D(a), R(new _(g, p, b)));
                        }
                    },
                    clearSegment(e) {
                        let a = $;
                        ("timeZoneName" !== e && "literal" !== e && (a = $.clear(e)), Z(a));
                    },
                    formatValue(e) {
                        if (!b) return "";
                        let t = (0, W.id)(e, w);
                        return new (0, ea.p)(a, t).format(U);
                    },
                    getDateFormatter(e, a) {
                        let t = { ...w, ...a },
                            r = (0, W.id)({}, t);
                        return new (0, ea.p)(e, r);
                    },
                };
            })({ ...t, locale: o, createCalendar: G.d }),
            d = (0, l.useRef)(null),
            { fieldProps: c, inputProps: h } = (0, m.cJ)({ ...t, inputRef: d }, s, i);
        return l.createElement(
            r.Kq,
            {
                values: [
                    [eu, s],
                    [u, { ...h, ref: d }],
                    [n.t, { ...c, ref: i, isInvalid: s.isInvalid, isDisabled: s.isDisabled }],
                ],
            },
            l.createElement(ey, e),
        );
    }),
    ey = (0, l.forwardRef)((e, a) => {
        let { className: t, children: r } = e,
            i = (0, l.useContext)(eu),
            o = (0, l.useContext)(ec),
            s = i ?? o;
        return l.createElement(
            l.Fragment,
            null,
            l.createElement(
                n.Y,
                {
                    ...e,
                    ref: a,
                    slot: e.slot || void 0,
                    className: t ?? "react-aria-DateInput",
                    isReadOnly: s.isReadOnly,
                    isInvalid: s.isInvalid,
                    isDisabled: s.isDisabled,
                },
                s.segments.map((e, a) => (0, l.cloneElement)(r(e), { key: a })),
            ),
            l.createElement(c, { className: "" }),
        );
    }),
    eg = (0, l.forwardRef)(function (e, a) {
        let { segment: t, ...n } = e,
            i = (0, l.useContext)(eu),
            u = (0, l.useContext)(ec),
            c = i ?? u,
            O = (0, es.U)(a),
            { segmentProps: A } = (function (e, a, t) {
                var r;
                let n,
                    i,
                    s,
                    d,
                    u = (0, l.useRef)(""),
                    { locale: c, direction: O } = (0, v.Y)(),
                    A = (function () {
                        var e;
                        let { locale: a } = (0, v.Y)(),
                            t = (0, b.e)((e = D.A) && e.__esModule ? e.default : e, "@react-aria/datepicker");
                        return (0, l.useMemo)(() => {
                            try {
                                return new Intl.DisplayNames(a, { type: "dateTimeField" });
                            } catch {
                                return new $(a, t);
                            }
                        }, [a, t]);
                    })(),
                    { ariaLabel: N, ariaLabelledBy: U, ariaDescribedBy: z, focusManager: B } = m.OX.get(a),
                    j = e.isPlaceholder ? "" : e.text,
                    K = (0, l.useMemo)(() => a.dateFormatter.resolvedOptions(), [a.dateFormatter]),
                    L = (0, f.i)({ month: "long", timeZone: K.timeZone }),
                    J = (0, f.i)({ hour: "numeric", hour12: K.hour12, timeZone: K.timeZone });
                if ("month" !== e.type || e.isPlaceholder)
                    "hour" !== e.type || e.isPlaceholder || (j = J.format(a.dateValue));
                else {
                    let e = L.format(a.dateValue);
                    j = e !== j ? `${j} \u{2013} ${e}` : e;
                }
                let { spinButtonProps: Y } = (function (e) {
                        var a;
                        let t = (0, l.useRef)(void 0),
                            {
                                value: r,
                                textValue: n,
                                minValue: i,
                                maxValue: o,
                                isDisabled: s,
                                isReadOnly: d,
                                isRequired: u,
                                onIncrement: c,
                                onIncrementPage: m,
                                onDecrement: h,
                                onDecrementPage: y,
                                onDecrementToMin: g,
                                onIncrementToMax: p,
                            } = e,
                            f = (0, b.o)((a = C) && a.__esModule ? a.default : a, "@react-aria/spinbutton"),
                            D = (0, l.useRef)(!1),
                            v = (0, l.useCallback)(() => {
                                (clearTimeout(t.current), (D.current = !1));
                            }, []),
                            $ = (0, M.J)(() => {
                                v();
                            });
                        (0, l.useEffect)(() => () => $(), []);
                        let { keyboardProps: R } = (0, x.d)({
                                isDisabled: s || d,
                                shortcuts: {
                                    PageUp: () => (m ? void m() : !!c && void c()),
                                    ArrowUp: () => !!c && void c(),
                                    PageDown: () => (y ? void y() : !!h && void h()),
                                    ArrowDown: () => !!h && void h(),
                                    Home: () => !!g && void g(),
                                    End: () => !!p && void p(),
                                },
                                allowRepeats: !0,
                            }),
                            P = (0, l.useRef)(!1),
                            w = () => {
                                P.current = !0;
                            },
                            k = () => {
                                P.current = !1;
                            },
                            S = "" === n ? f.format("Empty") : (n || `${r}`).replace("-", "\u2212");
                        (0, l.useEffect)(() => {
                            P.current && ((0, V.pA)("assertive"), (0, V.iP)(S, "assertive"));
                        }, [S]);
                        let F = (0, l.useCallback)(() => {
                                v();
                            }, [v]),
                            T = (0, M.J)(c ?? E),
                            O = (0, M.J)(h ?? E),
                            A = (0, M.J)(() => {
                                (void 0 === o || isNaN(o) || void 0 === r || isNaN(r) || r < o) && (T(), N(60));
                            }),
                            N = (0, M.J)((e) => {
                                ($(), (D.current = !0), (t.current = window.setTimeout(A, e)));
                            }),
                            Z = (0, M.J)(() => {
                                (void 0 === i || isNaN(i) || void 0 === r || isNaN(r) || r > i) && (O(), U(60));
                            }),
                            U = (0, M.J)((e) => {
                                ($(), (D.current = !0), (t.current = window.setTimeout(Z, e)));
                            }),
                            z = (e) => {
                                e.preventDefault();
                            },
                            { addGlobalListener: B, removeAllGlobalListeners: j } = (0, I.A)(),
                            K = (0, l.useRef)(!1),
                            [L, J] = (0, l.useState)(null);
                        (0, l.useEffect)(() => {
                            "touch" === L ? N(600) : L ? N(400) : L || $();
                        }, [L]);
                        let [Y, G] = (0, l.useState)(null);
                        return (
                            (0, l.useEffect)(() => {
                                "touch" === Y ? U(600) : Y ? U(400) : Y || $();
                            }, [Y]),
                            {
                                spinButtonProps: {
                                    role: "spinbutton",
                                    "aria-valuenow": void 0 === r || isNaN(r) ? void 0 : r,
                                    "aria-valuetext": S,
                                    "aria-valuemin": i,
                                    "aria-valuemax": o,
                                    "aria-disabled": s || void 0,
                                    "aria-readonly": d || void 0,
                                    "aria-required": u || void 0,
                                    ...R,
                                    onFocus: w,
                                    onBlur: k,
                                },
                                incrementButtonProps: {
                                    onPressStart: (e) => {
                                        (v(),
                                            "touch" !== e.pointerType
                                                ? (c?.(), J("mouse"))
                                                : (B(window, "pointercancel", F, { capture: !0 }),
                                                  (K.current = !1),
                                                  J("touch")),
                                            B(window, "contextmenu", z));
                                    },
                                    onPressUp: (e) => {
                                        (v(), "touch" === e.pointerType && (K.current = !0), j(), J(null));
                                    },
                                    onPressEnd: (e) => {
                                        (v(),
                                            "touch" === e.pointerType && !D.current && K.current && c?.(),
                                            (K.current = !1),
                                            J(null));
                                    },
                                    onFocus: w,
                                    onBlur: k,
                                },
                                decrementButtonProps: {
                                    onPressStart: (e) => {
                                        (v(),
                                            "touch" !== e.pointerType
                                                ? (h?.(), G("mouse"))
                                                : (B(window, "pointercancel", F, { capture: !0 }),
                                                  (K.current = !1),
                                                  G("touch")));
                                    },
                                    onPressUp: (e) => {
                                        (v(), "touch" === e.pointerType && (K.current = !0), j(), G(null));
                                    },
                                    onPressEnd: (e) => {
                                        (v(),
                                            "touch" === e.pointerType && !D.current && K.current && h?.(),
                                            (K.current = !1),
                                            G(null));
                                    },
                                    onFocus: w,
                                    onBlur: k,
                                },
                            }
                        );
                    })({
                        value: e.value ?? void 0,
                        textValue: j,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        isDisabled: a.isDisabled,
                        isReadOnly: a.isReadOnly || !e.isEditable,
                        isRequired: a.isRequired,
                        onIncrement: () => {
                            ((u.current = ""), a.increment(e.type));
                        },
                        onDecrement: () => {
                            ((u.current = ""), a.decrement(e.type));
                        },
                        onIncrementPage: () => {
                            ((u.current = ""), a.incrementPage(e.type));
                        },
                        onDecrementPage: () => {
                            ((u.current = ""), a.decrementPage(e.type));
                        },
                        onIncrementToMax: () => {
                            ((u.current = ""), a.incrementToMax(e.type));
                        },
                        onDecrementToMin: () => {
                            ((u.current = ""), a.decrementToMin(e.type));
                        },
                    }),
                    G = (0, l.useMemo)(() => new Z(c, { maximumFractionDigits: 0 }), [c]),
                    W = () => {
                        if (
                            (e.text === e.placeholder && B.focusPrevious(),
                            !G.isValidPartialNumber(e.text) || a.isReadOnly || e.isPlaceholder)
                        )
                            ("dayPeriod" === e.type || "era" === e.type) && a.clearSegment(e.type);
                        else {
                            let t = e.text.slice(0, -1),
                                r = G.parse(t);
                            (0 === (t = 0 === r ? "" : t).length || 0 === r
                                ? a.clearSegment(e.type)
                                : a.setSegment(e.type, r),
                                (u.current = t));
                        }
                    },
                    { keyboardProps: q } = (0, x.d)({
                        shortcuts: {
                            Backspace: () => {
                                W();
                            },
                            Delete: () => {
                                W();
                            },
                            "Mod+a": () => {},
                        },
                        allowRepeats: !0,
                    }),
                    { startsWith: H } =
                        ((r = { sensitivity: "base" }),
                        (n = (0, P.Q)({ usage: "search", ...r })),
                        (i = (0, l.useCallback)(
                            (e, a) =>
                                0 === a.length ||
                                ((e = e.normalize("NFC")),
                                (a = a.normalize("NFC")),
                                0 === n.compare(e.slice(0, a.length), a)),
                            [n],
                        )),
                        (s = (0, l.useCallback)(
                            (e, a) =>
                                0 === a.length ||
                                ((e = e.normalize("NFC")),
                                (a = a.normalize("NFC")),
                                0 === n.compare(e.slice(-a.length), a)),
                            [n],
                        )),
                        (d = (0, l.useCallback)(
                            (e, a) => {
                                if (0 === a.length) return !0;
                                e = e.normalize("NFC");
                                let t = 0,
                                    r = (a = a.normalize("NFC")).length;
                                for (; t + r <= e.length; t++) {
                                    let i = e.slice(t, t + r);
                                    if (0 === n.compare(a, i)) return !0;
                                }
                                return !1;
                            },
                            [n],
                        )),
                        (0, l.useMemo)(() => ({ startsWith: i, endsWith: s, contains: d }), [i, s, d])),
                    _ = (0, f.i)({ hour: "numeric", hour12: !0 }),
                    Q = (0, l.useMemo)(() => {
                        let e = new Date();
                        return (e.setHours(0), _.formatToParts(e).find((e) => "dayPeriod" === e.type).value);
                    }, [_]),
                    X = (0, l.useMemo)(() => {
                        let e = new Date();
                        return (e.setHours(12), _.formatToParts(e).find((e) => "dayPeriod" === e.type).value);
                    }, [_]),
                    ee = (0, f.i)({ year: "numeric", era: "narrow", timeZone: "UTC" }),
                    ea = (0, l.useMemo)(() => {
                        if ("era" !== e.type) return [];
                        let t = (0, F.yP)(new (0, T.ng)(1, 1, 1), a.calendar),
                            r = a.calendar.getEras().map((e) => {
                                let a = t.set({ year: 1, month: 1, day: 1, era: e }).toDate("UTC");
                                return { era: e, formatted: ee.formatToParts(a).find((e) => "era" === e.type).value };
                            }),
                            n = (function (e) {
                                e.sort();
                                let a = e[0],
                                    t = e[e.length - 1];
                                for (let e = 0; e < a.length; e++) if (a[e] !== t[e]) return e;
                                return 0;
                            })(r.map((e) => e.formatted));
                        if (n) for (let e of r) e.formatted = e.formatted.slice(n);
                        return r;
                    }, [ee, a.calendar, e.type]),
                    et = (t) => {
                        if (a.isDisabled || a.isReadOnly) return;
                        let r = u.current + t;
                        switch (e.type) {
                            case "dayPeriod":
                                if (H(Q, t)) a.setSegment("dayPeriod", 0);
                                else if (H(X, t)) a.setSegment("dayPeriod", 1);
                                else break;
                                B.focusNext();
                                break;
                            case "era": {
                                let e = ea.find((e) => H(e.formatted, t));
                                e && (a.setSegment("era", e.era), B.focusNext());
                                break;
                            }
                            case "day":
                            case "hour":
                            case "minute":
                            case "second":
                            case "month":
                            case "year": {
                                if (!G.isValidPartialNumber(r)) return;
                                let n = G.parse(r),
                                    i = n;
                                if ((void 0 !== e.maxValue && n > e.maxValue && (i = G.parse(t)), isNaN(n))) return;
                                (a.setSegment(e.type, i),
                                    void 0 !== e.maxValue &&
                                    (Number(n + "0") > e.maxValue || r.length >= String(e.maxValue).length)
                                        ? ((u.current = ""), B.focusNext())
                                        : (u.current = r));
                            }
                        }
                    },
                    er = (0, l.useRef)("u" > typeof document ? document : null);
                (0, R._)(er, "selectionchange", () => {
                    let e = window.getSelection();
                    e?.anchorNode &&
                        (0, h.sD)(t.current, e?.anchorNode) &&
                        (0, h.bq)() === t.current &&
                        e.collapse(t.current);
                });
                let en = (0, l.useRef)("");
                ((0, R._)(t, "beforeinput", (r) => {
                    if (t.current)
                        switch ((r.preventDefault(), r.inputType)) {
                            case "deleteContentBackward":
                            case "deleteContentForward":
                                G.isValidPartialNumber(e.text) && !a.isReadOnly && W();
                                break;
                            case "insertCompositionText":
                                ((en.current = t.current.textContent), (t.current.textContent = t.current.textContent));
                                break;
                            default:
                                null != r.data && et(r.data);
                        }
                }),
                    (0, R._)(t, "input", (e) => {
                        let { inputType: a, data: r } = e;
                        "insertCompositionText" === a &&
                            (t.current && (t.current.textContent = en.current),
                            null != r && (H(Q, r) || H(X, r)) && et(r));
                    }),
                    (0, S.N)(() => {
                        let e = t.current;
                        return () => {
                            (0, h.bq)() === e && (B.focusPrevious() || B.focusNext());
                        };
                    }, [t, B]));
                let ei =
                    (0, g.un)() || "timeZoneName" === e.type
                        ? {
                              role: "textbox",
                              "aria-valuemax": null,
                              "aria-valuemin": null,
                              "aria-valuetext": null,
                              "aria-valuenow": null,
                          }
                        : {};
                e === (0, l.useMemo)(() => a.segments.find((e) => e.isEditable), [a.segments]) ||
                    a.isInvalid ||
                    (z = void 0);
                let eo = (0, w.Bi)(),
                    el = !a.isDisabled && !a.isReadOnly && e.isEditable,
                    es = "literal" === e.type ? "" : A.of(e.type),
                    ed = (0, k.b)({ "aria-label": `${es}${N ? `, ${N}` : ""}${U ? ", " : ""}`, "aria-labelledby": U });
                if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
                let eu = { caretColor: "transparent" };
                if ("rtl" === O) {
                    eu.unicodeBidi = "embed";
                    let a = K[e.type];
                    ("numeric" === a || "2-digit" === a) && (eu.direction = "ltr");
                }
                return {
                    segmentProps: (0, o.v)(Y, ed, {
                        id: eo,
                        ...ei,
                        ...q,
                        "aria-invalid": a.isInvalid ? "true" : void 0,
                        "aria-describedby": z,
                        "aria-readonly": a.isReadOnly || !e.isEditable ? "true" : void 0,
                        "data-placeholder": e.isPlaceholder || void 0,
                        contentEditable: el,
                        suppressContentEditableWarning: el,
                        spellCheck: el ? "false" : void 0,
                        autoCorrect: el ? "off" : void 0,
                        [parseInt(l.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: el ? "next" : void 0,
                        inputMode:
                            a.isDisabled || "dayPeriod" === e.type || "era" === e.type || !el ? void 0 : "numeric",
                        tabIndex: a.isDisabled ? void 0 : 0,
                        onFocus: () => {
                            ((u.current = ""),
                                t.current && (0, p.o)(t.current, { containingElement: (0, y.m)(t.current) }));
                            let e = window.getSelection();
                            e?.collapse(t.current);
                        },
                        style: eu,
                        onPointerDown(e) {
                            e.stopPropagation();
                        },
                        onMouseDown(e) {
                            e.stopPropagation();
                        },
                    }),
                };
            })(t, c, O),
            { focusProps: N, isFocused: U, isFocusVisible: z } = (0, s.o)(),
            { hoverProps: B, isHovered: j } = (0, d.M)({ ...n, isDisabled: c.isDisabled || "literal" === t.type }),
            K = (0, r.Sl)({
                ...n,
                values: {
                    ...t,
                    isReadOnly: c.isReadOnly,
                    isInvalid: c.isInvalid,
                    isDisabled: c.isDisabled,
                    isHovered: j,
                    isFocused: U,
                    isFocusVisible: z,
                },
                defaultChildren: t.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return l.createElement(r.tT.span, {
            ...(0, o.v)((0, el.$)(n, { global: !0 }), A, N, B),
            ...K,
            style: A.style,
            ref: O,
            "data-placeholder": t.isPlaceholder || void 0,
            "data-invalid": c.isInvalid || void 0,
            "data-readonly": c.isReadOnly || void 0,
            "data-disabled": c.isDisabled || void 0,
            "data-type": t.type,
            "data-hovered": j || void 0,
            "data-focused": U || void 0,
            "data-focus-visible": z || void 0,
        });
    });
