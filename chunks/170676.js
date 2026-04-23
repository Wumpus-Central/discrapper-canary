t.d(a, { cQ: () => eu, J3: () => ec, Eu: () => eD });
var n = t(825913),
    r = t(521767),
    i = t(564004),
    l = t(967158),
    o = t(498430),
    u = t(318473),
    s = t(64700);
let d = (0, s.createContext)({}),
    c = (0, i.U7)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, d);
        let { hoverProps: t, isHovered: r } = (0, l.M)(e),
            { isFocused: i, isFocusVisible: c, focusProps: m } = (0, o.o)({ isTextInput: !0, autoFocus: e.autoFocus }),
            h = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            D = (0, n.Sl)({
                ...e,
                values: { isHovered: r, isFocused: i, isFocusVisible: c, isDisabled: e.disabled || !1, isInvalid: h },
                defaultClassName: "react-aria-Input",
            });
        return s.createElement("input", {
            ...(0, u.v)(
                ((e) => {
                    let { onHoverStart: a, onHoverChange: t, onHoverEnd: n, ...r } = e;
                    return r;
                })(e),
                m,
                t,
            ),
            ...D,
            ref: a,
            "data-focused": i || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": r || void 0,
            "data-focus-visible": c || void 0,
            "data-invalid": h || void 0,
        });
    });
var m = t(402112),
    h = t(974111),
    D = t(938291),
    y = t(47276);
class p {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, a) {
        (this.locale = e), (this.dictionary = a);
    }
}
var g = t(376472),
    f = t(99478),
    v = t(408713),
    b = t(518665),
    R = t(150047),
    $ = t(248215),
    w = t(3388),
    P = t(985620),
    C = t(48284);
let k = new Map(),
    x = !1;
try {
    x = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
} catch {}
let E = !1;
try {
    E = "unit" === new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style;
} catch {}
let S = { degree: { narrow: { default: "\xb0", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " \xb0" } } };
class V {
    format(e) {
        let a = "";
        if (
            ((a =
                x || null == this.options.signDisplay
                    ? this.numberFormatter.format(e)
                    : (function (e, a, t) {
                          if ("auto" === a) return e.format(t);
                          {
                              if ("never" === a) return e.format(Math.abs(t));
                              let n = !1;
                              if (
                                  ("always" === a
                                      ? (n = t > 0 || Object.is(t, 0))
                                      : "exceptZero" === a &&
                                        (Object.is(t, -0) || Object.is(t, 0) ? (t = Math.abs(t)) : (n = t > 0)),
                                  !n)
                              )
                                  return e.format(t);
                              {
                                  let a = e.format(-t),
                                      n = e.format(t),
                                      r = a.replace(n, "").replace(/\u200e|\u061C/, "");
                                  return (
                                      1 != [...r].length &&
                                          console.warn(
                                              "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
                                          ),
                                      a.replace(n, "!!!").replace(r, "+").replace("!!!", n)
                                  );
                              }
                          }
                      })(this.numberFormatter, this.options.signDisplay, e)),
            "unit" === this.options.style && !E)
        ) {
            var t;
            let { unit: e, unitDisplay: n = "short", locale: r } = this.resolvedOptions();
            if (!e) return a;
            let i = null == (t = S[e]) ? void 0 : t[n];
            a += i[r] || i.default;
        }
        return a;
    }
    formatToParts(e) {
        return this.numberFormatter.formatToParts(e);
    }
    formatRange(e, a) {
        if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, a);
        if (a < e) throw RangeError("End date must be >= start date");
        return `${this.format(e)} \u{2013} ${this.format(a)}`;
    }
    formatRangeToParts(e, a) {
        if ("function" == typeof this.numberFormatter.formatRangeToParts)
            return this.numberFormatter.formatRangeToParts(e, a);
        if (a < e) throw RangeError("End date must be >= start date");
        let t = this.numberFormatter.formatToParts(e),
            n = this.numberFormatter.formatToParts(a);
        return [
            ...t.map((e) => ({ ...e, source: "startRange" })),
            { type: "literal", value: " – ", source: "shared" },
            ...n.map((e) => ({ ...e, source: "endRange" })),
        ];
    }
    resolvedOptions() {
        let e = this.numberFormatter.resolvedOptions();
        return (
            x || null == this.options.signDisplay || (e = { ...e, signDisplay: this.options.signDisplay }),
            E ||
                "unit" !== this.options.style ||
                (e = { ...e, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }),
            e
        );
    }
    constructor(e, a = {}) {
        (this.numberFormatter = (function (e, a = {}) {
            let { numberingSystem: t } = a;
            if (
                (t && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${t}`)),
                "unit" === a.style && !E)
            ) {
                var n;
                let { unit: e, unitDisplay: t = "short" } = a;
                if (!e) throw Error('unit option must be provided with style: "unit"');
                if (!(null == (n = S[e]) ? void 0 : n[t])) throw Error(`Unsupported unit ${e} with unitDisplay = ${t}`);
                a = { ...a, style: "decimal" };
            }
            let r =
                e +
                (a
                    ? Object.entries(a)
                          .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                          .join()
                    : "");
            if (k.has(r)) return k.get(r);
            let i = new Intl.NumberFormat(e, a);
            return k.set(r, i), i;
        })(e, a)),
            (this.options = a);
    }
}
let F = RegExp("^.*\\(.*\\).*$"),
    B = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class M {
    parse(e) {
        return A(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, a, t) {
        return A(this.locale, this.options, e).isValidPartialNumber(e, a, t);
    }
    getNumberingSystem(e) {
        return A(this.locale, this.options, e).options.numberingSystem;
    }
    constructor(e, a = {}) {
        (this.locale = e), (this.options = a);
    }
}
let I = new Map();
function A(e, a, t) {
    let n = T(e, a);
    if (!e.includes("-nu-") && !n.isValidPartialNumber(t)) {
        for (let r of B)
            if (r !== n.options.numberingSystem) {
                let n = T(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + r, a);
                if (n.isValidPartialNumber(t)) return n;
            }
    }
    return n;
}
function T(e, a) {
    let t =
            e +
            (a
                ? Object.entries(a)
                      .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                      .join()
                : ""),
        n = I.get(t);
    return n || ((n = new O(e, a)), I.set(t, n)), n;
}
class O {
    parse(e) {
        let a = this.sanitize(e);
        if (
            (this.symbols.group && (a = z(a, this.symbols.group, "")),
            this.symbols.decimal && (a = a.replace(this.symbols.decimal, ".")),
            this.symbols.minusSign && (a = a.replace(this.symbols.minusSign, "-")),
            (a = a.replace(this.symbols.numeral, this.symbols.index)),
            "percent" === this.options.style)
        ) {
            let e = a.indexOf("-"),
                t = (a = (a = a.replace("-", "")).replace("+", "")).indexOf(".");
            -1 === t && (t = a.length),
                (a = a.replace(".", "")),
                (a =
                    t - 2 == 0
                        ? `0.${a}`
                        : t - 2 == -1
                          ? `0.0${a}`
                          : t - 2 == -2
                            ? "0.00"
                            : `${a.slice(0, t - 2)}.${a.slice(t - 2)}`),
                e > -1 && (a = `-${a}`);
        }
        let t = a ? +a : NaN;
        if (isNaN(t)) return NaN;
        if ("percent" === this.options.style) {
            var n, r;
            let e = {
                ...this.options,
                style: "decimal",
                minimumFractionDigits: Math.min((null != (n = this.options.minimumFractionDigits) ? n : 0) + 2, 20),
                maximumFractionDigits: Math.min((null != (r = this.options.maximumFractionDigits) ? r : 0) + 2, 20),
            };
            return new M(this.locale, e).parse(new V(this.locale, e).format(t));
        }
        return "accounting" === this.options.currencySign && F.test(e) && (t *= -1), t;
    }
    sanitize(e) {
        return (
            (e = e.replace(this.symbols.literals, "")),
            this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)),
            "arab" === this.options.numberingSystem &&
                (this.symbols.decimal &&
                    (e = (e = e.replace(",", this.symbols.decimal)).replace(
                        String.fromCharCode(1548),
                        this.symbols.decimal,
                    )),
                this.symbols.group && (e = z(e, ".", this.symbols.group))),
            "’" === this.symbols.group && e.includes("'") && (e = z(e, "'", this.symbols.group)),
            "fr-FR" === this.options.locale &&
                this.symbols.group &&
                ((e = z(e, " ", this.symbols.group)), (e = z(e, /\u00A0/g, this.symbols.group))),
            e
        );
    }
    isValidPartialNumber(e, a = -1 / 0, t = 1 / 0) {
        return (
            (e = this.sanitize(e)),
            this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && a < 0
                ? (e = e.slice(this.symbols.minusSign.length))
                : this.symbols.plusSign &&
                  e.startsWith(this.symbols.plusSign) &&
                  t > 0 &&
                  (e = e.slice(this.symbols.plusSign.length)),
            !(
                (this.symbols.group && e.startsWith(this.symbols.group)) ||
                (this.symbols.decimal &&
                    e.indexOf(this.symbols.decimal) > -1 &&
                    0 === this.options.maximumFractionDigits)
            ) &&
                (this.symbols.group && (e = z(e, this.symbols.group, "")),
                (e = e.replace(this.symbols.numeral, "")),
                this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")),
                0 === e.length)
        );
    }
    constructor(e, a = {}) {
        var t, n;
        (this.locale = e),
            1 !== a.roundingIncrement &&
                null != a.roundingIncrement &&
                (null == a.maximumFractionDigits && null == a.minimumFractionDigits
                    ? ((a.maximumFractionDigits = 0), (a.minimumFractionDigits = 0))
                    : null == a.maximumFractionDigits
                      ? (a.maximumFractionDigits = a.minimumFractionDigits)
                      : null == a.minimumFractionDigits && (a.minimumFractionDigits = a.maximumFractionDigits)),
            (this.formatter = new Intl.NumberFormat(e, a)),
            (this.options = this.formatter.resolvedOptions()),
            (this.symbols = (function (e, a, t, n) {
                var r, i, l, o, u;
                let s = new Intl.NumberFormat(e, {
                        ...t,
                        minimumSignificantDigits: 1,
                        maximumSignificantDigits: 21,
                        roundingIncrement: 1,
                        roundingPriority: "auto",
                        roundingMode: "halfExpand",
                    }),
                    d = s.formatToParts(-10000.111),
                    c = s.formatToParts(10000.111),
                    m = Z.map((e) => s.formatToParts(e)),
                    h = null != (u = null == (r = d.find((e) => "minusSign" === e.type)) ? void 0 : r.value) ? u : "-",
                    D = null == (i = c.find((e) => "plusSign" === e.type)) ? void 0 : i.value;
                D ||
                    ((null == n ? void 0 : n.signDisplay) !== "exceptZero" &&
                        (null == n ? void 0 : n.signDisplay) !== "always") ||
                    (D = "+");
                let y =
                        null ==
                        (l = new Intl.NumberFormat(e, { ...t, minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            .formatToParts(0.001)
                            .find((e) => "decimal" === e.type))
                            ? void 0
                            : l.value,
                    p = null == (o = d.find((e) => "group" === e.type)) ? void 0 : o.value,
                    g = [
                        ...new Set([
                            ...d.filter((e) => !N.has(e.type)).map((e) => U(e.value)),
                            ...m.flatMap((e) => e.filter((e) => !N.has(e.type)).map((e) => U(e.value))),
                        ]),
                    ].sort((e, a) => a.length - e.length),
                    f =
                        0 === g.length
                            ? RegExp("[\\p{White_Space}]", "gu")
                            : RegExp(`${g.join("|")}|[\\p{White_Space}]`, "gu"),
                    v = [...new Intl.NumberFormat(t.locale, { useGrouping: !1 }).format(0x24cb016ea)].reverse(),
                    b = new Map(v.map((e, a) => [e, a]));
                return {
                    minusSign: h,
                    plusSign: D,
                    decimal: y,
                    group: p,
                    literals: f,
                    numeral: RegExp(`[${v.join("")}]`, "g"),
                    index: (e) => String(b.get(e)),
                };
            })(e, this.formatter, this.options, a)),
            "percent" === this.options.style &&
                ((null != (t = this.options.minimumFractionDigits) ? t : 0) > 18 ||
                    (null != (n = this.options.maximumFractionDigits) ? n : 0) > 18) &&
                console.warn(
                    "NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
                );
    }
}
let N = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    Z = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function z(e, a, t) {
    return e.replaceAll ? e.replaceAll(a, t) : e.split(a).join(t);
}
function U(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var j = t(849352),
    K = t(74172),
    L = {};
L = {
    "ar-AE": { Empty: "فارغ" },
    "bg-BG": { Empty: "Изпразни" },
    "cs-CZ": { Empty: "Pr\xe1zdn\xe9" },
    "da-DK": { Empty: "Tom" },
    "de-DE": { Empty: "Leer" },
    "el-GR": { Empty: "Άδειο" },
    "en-US": { Empty: "Empty" },
    "es-ES": { Empty: "Vac\xedo" },
    "et-EE": { Empty: "T\xfchjenda" },
    "fi-FI": { Empty: "Tyhj\xe4" },
    "fr-FR": { Empty: "Vide" },
    "he-IL": { Empty: "ריק" },
    "hr-HR": { Empty: "Prazno" },
    "hu-HU": { Empty: "\xdcres" },
    "it-IT": { Empty: "Vuoto" },
    "ja-JP": { Empty: "空" },
    "ko-KR": { Empty: "비어 있음" },
    "lt-LT": { Empty: "Tuščias" },
    "lv-LV": { Empty: "Tukšs" },
    "nb-NO": { Empty: "Tom" },
    "nl-NL": { Empty: "Leeg" },
    "pl-PL": { Empty: "Pusty" },
    "pt-BR": { Empty: "Vazio" },
    "pt-PT": { Empty: "Vazio" },
    "ro-RO": { Empty: "Gol" },
    "ru-RU": { Empty: "Не заполнено" },
    "sk-SK": { Empty: "Pr\xe1zdne" },
    "sl-SI": { Empty: "Prazen" },
    "sr-SP": { Empty: "Prazno" },
    "sv-SE": { Empty: "Tomt" },
    "tr-TR": { Empty: "Boş" },
    "uk-UA": { Empty: "Пусто" },
    "zh-CN": { Empty: "空" },
    "zh-TW": { Empty: "空白" },
};
var J = t(217512),
    W = t(959462),
    Y = t(114099),
    G = t(485720),
    H = t(300511);
let _ = new (0, t(731692).B)(
    {
        ach: { year: "mwaka", month: "dwe", day: "nino" },
        af: { year: "jjjj", month: "mm", day: "dd" },
        am: { year: "ዓዓዓዓ", month: "ሚሜ", day: "ቀቀ" },
        an: { year: "aaaa", month: "mm", day: "dd" },
        ar: { year: "سنة", month: "شهر", day: "يوم" },
        ast: { year: "aaaa", month: "mm", day: "dd" },
        az: { year: "iiii", month: "aa", day: "gg" },
        be: { year: "гггг", month: "мм", day: "дд" },
        bg: { year: "гггг", month: "мм", day: "дд" },
        bn: { year: "yyyy", month: "মিমি", day: "dd" },
        br: { year: "bbbb", month: "mm", day: "dd" },
        bs: { year: "gggg", month: "mm", day: "dd" },
        ca: { year: "aaaa", month: "mm", day: "dd" },
        cak: { year: "jjjj", month: "ii", day: "q'q'" },
        ckb: { year: "ساڵ", month: "مانگ", day: "ڕۆژ" },
        cs: { year: "rrrr", month: "mm", day: "dd" },
        cy: { year: "bbbb", month: "mm", day: "dd" },
        da: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        de: { year: "jjjj", month: "mm", day: "tt" },
        dsb: { year: "llll", month: "mm", day: "źź" },
        el: { year: "εεεε", month: "μμ", day: "ηη" },
        en: { year: "yyyy", month: "mm", day: "dd" },
        eo: { year: "jjjj", month: "mm", day: "tt" },
        es: { year: "aaaa", month: "mm", day: "dd" },
        et: { year: "aaaa", month: "kk", day: "pp" },
        eu: { year: "uuuu", month: "hh", day: "ee" },
        fa: { year: "سال", month: "ماه", day: "روز" },
        ff: { year: "hhhh", month: "ll", day: "\xf1\xf1" },
        fi: { year: "vvvv", month: "kk", day: "pp" },
        fr: { year: "aaaa", month: "mm", day: "jj" },
        fy: { year: "jjjj", month: "mm", day: "dd" },
        ga: { year: "bbbb", month: "mm", day: "ll" },
        gd: { year: "bbbb", month: "mm", day: "ll" },
        gl: { year: "aaaa", month: "mm", day: "dd" },
        he: { year: "שנה", month: "חודש", day: "יום" },
        hr: { year: "gggg", month: "mm", day: "dd" },
        hsb: { year: "llll", month: "mm", day: "dd" },
        hu: { year: "\xe9\xe9\xe9\xe9", month: "hh", day: "nn" },
        ia: { year: "aaaa", month: "mm", day: "dd" },
        id: { year: "tttt", month: "bb", day: "hh" },
        it: { year: "aaaa", month: "mm", day: "gg" },
        ja: { year: "年", month: "月", day: "日" },
        ka: { year: "წწწწ", month: "თთ", day: "რრ" },
        kk: { year: "жжжж", month: "аа", day: "кк" },
        kn: { year: "ವವವವ", month: "ಮಿಮೀ", day: "ದಿದಿ" },
        ko: { year: "연도", month: "월", day: "일" },
        lb: { year: "jjjj", month: "mm", day: "dd" },
        lo: { year: "ປປປປ", month: "ດດ", day: "ວວ" },
        lt: { year: "mmmm", month: "mm", day: "dd" },
        lv: { year: "gggg", month: "mm", day: "dd" },
        meh: { year: "aaaa", month: "mm", day: "dd" },
        ml: { year: "വർഷം", month: "മാസം", day: "തീയതി" },
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
        ru: { year: "гггг", month: "мм", day: "дд" },
        sc: { year: "aaaa", month: "mm", day: "dd" },
        scn: { year: "aaaa", month: "mm", day: "jj" },
        sk: { year: "rrrr", month: "mm", day: "dd" },
        sl: { year: "llll", month: "mm", day: "dd" },
        sr: { year: "гггг", month: "мм", day: "дд" },
        sv: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        szl: { year: "rrrr", month: "mm", day: "dd" },
        tg: { year: "сссс", month: "мм", day: "рр" },
        th: { year: "ปปปป", month: "ดด", day: "วว" },
        tr: { year: "yyyy", month: "aa", day: "gg" },
        uk: { year: "рррр", month: "мм", day: "дд" },
        "zh-CN": { year: "年", month: "月", day: "日" },
        "zh-TW": { year: "年", month: "月", day: "日" },
    },
    "en",
);
var q = t(515702),
    Q = t(939546),
    X = t(142922),
    ee = t(339241),
    ea = t(492313);
let et = { year: !0, month: !0, day: !0, hour: !0, minute: !0, second: !0, dayPeriod: !0, era: !0 },
    en = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
    er = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
function ei(e, a, t) {
    switch (a) {
        case "era": {
            let a = e.calendar.getEras();
            return { value: a.indexOf(e.era), minValue: 0, maxValue: a.length - 1 };
        }
        case "year":
            return { value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e) };
        case "month":
            return { value: e.month, minValue: (0, Q.xz)(e), maxValue: e.calendar.getMonthsInYear(e) };
        case "day":
            return { value: e.day, minValue: (0, Q.oT)(e), maxValue: e.calendar.getDaysInMonth(e) };
    }
    if ("hour" in e)
        switch (a) {
            case "dayPeriod":
                return { value: 12 * (e.hour >= 12), minValue: 0, maxValue: 12 };
            case "hour":
                if (t.hour12) {
                    let a = e.hour >= 12;
                    return { value: e.hour, minValue: 12 * !!a, maxValue: a ? 23 : 11 };
                }
                return { value: e.hour, minValue: 0, maxValue: 23 };
            case "minute":
                return { value: e.minute, minValue: 0, maxValue: 59 };
            case "second":
                return { value: e.second, minValue: 0, maxValue: 59 };
        }
    return {};
}
var el = t(533715),
    eo = t(290424);
let eu = (0, s.createContext)(null),
    es = (0, s.createContext)(null),
    ed = (0, s.createContext)(null),
    ec = (0, s.forwardRef)(function (e, a) {
        let t = (0, s.useContext)(es),
            n = (0, s.useContext)(ed);
        return t || n ? s.createElement(eh, { ...e, ref: a }) : s.createElement(em, { ...e, ref: a });
    }),
    em = (0, s.forwardRef)((e, a) => {
        let [t, i] = (0, n.JT)({ slot: e.slot }, a, eu),
            { locale: l } = (0, m.Y)(),
            o = (function (e) {
                var a, t, n;
                let {
                        locale: r,
                        createCalendar: i,
                        hideTimeZone: l,
                        isDisabled: o = !1,
                        isReadOnly: u = !1,
                        isRequired: d = !1,
                        minValue: c,
                        maxValue: m,
                        isDateUnavailable: h,
                    } = e,
                    D = e.value || e.defaultValue || e.placeholderValue || null,
                    [y, p] = (0, H.bf)(D, e.granularity),
                    f = p || "UTC";
                if (D && !(y in D)) throw Error("Invalid granularity " + y + " for value " + D.toString());
                let v = (0, s.useMemo)(() => new (0, q.p)(r), [r]),
                    b = (0, s.useMemo)(() => i(v.resolvedOptions().calendar), [i, v]),
                    [R, $] = (0, ea.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
                    [w] = (0, s.useState)(R),
                    P = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = (0, H.nf)(R, b)) ? e : null;
                    }, [R, b]),
                    [C, k] = (0, s.useState)(() => (0, H.o_)(e.placeholderValue, y, b, p)),
                    x = "gregory" === b.identifier && "BC" === (P || C).era,
                    E = (0, s.useMemo)(() => {
                        var a;
                        return {
                            granularity: y,
                            maxGranularity: null != (a = e.maxGranularity) ? a : "year",
                            timeZone: p,
                            hideTimeZone: l,
                            hourCycle: e.hourCycle,
                            showEra: x,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                        };
                    }, [e.maxGranularity, y, e.hourCycle, e.shouldForceLeadingZeros, p, l, x]),
                    S = (0, s.useMemo)(() => (0, H.id)({}, E), [E]),
                    V = (0, s.useMemo)(() => new (0, q.p)(r, S), [r, S]),
                    F = (0, s.useMemo)(() => V.resolvedOptions(), [V]),
                    B = (0, s.useMemo)(
                        () =>
                            V.formatToParts(new Date())
                                .filter((e) => et[e.type])
                                .reduce((e, a) => ((e[er[a.type] || a.type] = !0), e), {}),
                        [V],
                    ),
                    [M, I] = (0, s.useState)(() => (e.value || e.defaultValue ? { ...B } : {})),
                    A = (0, s.useRef)(null),
                    T = (0, s.useRef)(b);
                (0, s.useEffect)(() => {
                    (0, Q.Jg)(b, T.current) ||
                        ((T.current = b),
                        k((a) =>
                            Object.keys(M).length > 0 ? (0, g.yP)(a, b) : (0, H.o_)(e.placeholderValue, y, b, p),
                        ));
                }, [b, y, M, p, e.placeholderValue]),
                    R && Object.keys(M).length < Object.keys(B).length && I((M = { ...B })),
                    null == R &&
                        Object.keys(M).length === Object.keys(B).length &&
                        (I((M = {})), k((0, H.o_)(e.placeholderValue, y, b, p)));
                let O = P && Object.keys(M).length >= Object.keys(B).length ? P : C,
                    N = (a) => {
                        if (e.isDisabled || e.isReadOnly) return;
                        let t = Object.keys(M),
                            n = Object.keys(B);
                        null == a
                            ? ($(null), k((0, H.o_)(e.placeholderValue, y, b, p)), I({}))
                            : (0 === t.length && null == A.current) ||
                                t.length >= n.length ||
                                (t.length === n.length - 1 && B.dayPeriod && !M.dayPeriod && "dayPeriod" !== A.current)
                              ? (0 === t.length && I((M = { ...B })),
                                $((a = (0, g.yP)(a, (null == D ? void 0 : D.calendar) || new (0, X.FG)()))))
                              : k(a),
                            (A.current = null);
                    },
                    Z = (0, s.useMemo)(() => O.toDate(f), [O, f]),
                    z = (0, s.useMemo)(
                        () =>
                            (function (e, a, t, n, r, i, l, o) {
                                let u = ["hour", "minute", "second"],
                                    s = t.formatToParts(e),
                                    d = [];
                                for (let e of s) {
                                    var c;
                                    let t = er[e.type] || e.type,
                                        s = et[t];
                                    "era" === t && 1 === i.getEras().length && (s = !1);
                                    let m = et[t] && !a[t],
                                        h = et[t]
                                            ? ((c = e.value),
                                              "era" === t || "dayPeriod" === t
                                                  ? c
                                                  : "year" === t || "month" === t || "day" === t
                                                    ? _.getStringForLocale(t, l)
                                                    : "––")
                                            : null,
                                        D = {
                                            type: t,
                                            text: m ? h : e.value,
                                            ...ei(r, t, n),
                                            isPlaceholder: m,
                                            placeholder: h,
                                            isEditable: s,
                                        };
                                    "hour" === t
                                        ? (d.push({
                                              type: "literal",
                                              text: "⁦",
                                              ...ei(r, "literal", n),
                                              isPlaceholder: !1,
                                              placeholder: "",
                                              isEditable: !1,
                                          }),
                                          d.push(D),
                                          t === o &&
                                              d.push({
                                                  type: "literal",
                                                  text: "⁩",
                                                  ...ei(r, "literal", n),
                                                  isPlaceholder: !1,
                                                  placeholder: "",
                                                  isEditable: !1,
                                              }))
                                        : u.includes(t) && t === o
                                          ? (d.push(D),
                                            d.push({
                                                type: "literal",
                                                text: "⁩",
                                                ...ei(r, "literal", n),
                                                isPlaceholder: !1,
                                                placeholder: "",
                                                isEditable: !1,
                                            }))
                                          : d.push(D);
                                }
                                return d;
                            })(Z, M, V, F, O, b, r, y),
                        [Z, M, V, F, O, b, r, y],
                    );
                B.era && M.year && !M.era
                    ? ((M.era = !0), I({ ...M }))
                    : !B.era && M.era && (delete M.era, I({ ...M }));
                let U = (e) => {
                        (M[e] = !0), "year" === e && B.era && (M.era = !0), I({ ...M });
                    },
                    j = (e, a) => {
                        if (M[e])
                            N(
                                (function (e, a, t, n) {
                                    switch (a) {
                                        case "era":
                                        case "year":
                                        case "month":
                                        case "day":
                                            return e.cycle(a, t, { round: "year" === a });
                                    }
                                    if ("hour" in e)
                                        switch (a) {
                                            case "dayPeriod": {
                                                let a = e.hour;
                                                return e.set({ hour: a >= 12 ? a - 12 : a + 12 });
                                            }
                                            case "hour":
                                            case "minute":
                                            case "second":
                                                return e.cycle(a, t, {
                                                    round: "hour" !== a,
                                                    hourCycle: n.hour12 ? 12 : 24,
                                                });
                                        }
                                    throw Error("Unknown segment: " + a);
                                })(O, e, a, F),
                            );
                        else {
                            U(e);
                            let a = Object.keys(M),
                                t = Object.keys(B);
                            (a.length >= t.length || (a.length === t.length - 1 && B.dayPeriod && !M.dayPeriod)) &&
                                N(O);
                        }
                    },
                    K = (0, s.useMemo)(() => (0, H.nz)(R, c, m, h, E), [R, c, m, h, E]),
                    L = (0, ee.KZ)({ ...e, value: R, builtinValidation: K }),
                    J = L.displayValidation.isInvalid,
                    W = e.validationState || (J ? "invalid" : null);
                return {
                    ...L,
                    value: P,
                    defaultValue: null != (t = e.defaultValue) ? t : w,
                    dateValue: Z,
                    calendar: b,
                    setValue: N,
                    segments: z,
                    dateFormatter: V,
                    validationState: W,
                    isInvalid: J,
                    granularity: y,
                    maxGranularity: null != (n = e.maxGranularity) ? n : "year",
                    isDisabled: o,
                    isReadOnly: u,
                    isRequired: d,
                    increment(e) {
                        j(e, 1);
                    },
                    decrement(e) {
                        j(e, -1);
                    },
                    incrementPage(e) {
                        j(e, en[e] || 1);
                    },
                    decrementPage(e) {
                        j(e, -(en[e] || 1));
                    },
                    setSegment(e, a) {
                        U(e),
                            N(
                                (function (e, a, t, n) {
                                    switch (a) {
                                        case "day":
                                        case "month":
                                        case "year":
                                        case "era":
                                            return e.set({ [a]: t });
                                    }
                                    if ("hour" in e && "number" == typeof t)
                                        switch (a) {
                                            case "dayPeriod": {
                                                let a = e.hour,
                                                    n = a >= 12;
                                                if (t >= 12 === n) return e;
                                                return e.set({ hour: n ? a - 12 : a + 12 });
                                            }
                                            case "hour":
                                                if (n.hour12) {
                                                    let a = e.hour >= 12;
                                                    a || 12 !== t || (t = 0), a && t < 12 && (t += 12);
                                                }
                                            case "minute":
                                            case "second":
                                                return e.set({ [a]: t });
                                        }
                                    throw Error("Unknown segment: " + a);
                                })(O, e, a, F),
                            );
                    },
                    confirmPlaceholder() {
                        if (e.isDisabled || e.isReadOnly) return;
                        let a = Object.keys(M),
                            t = Object.keys(B);
                        a.length === t.length - 1 && B.dayPeriod && !M.dayPeriod && (I((M = { ...B })), N(O.copy()));
                    },
                    clearSegment(a) {
                        delete M[a], (A.current = a), I({ ...M });
                        let t = (0, H.o_)(e.placeholderValue, y, b, p),
                            n = O;
                        if ("dayPeriod" === a && "hour" in O && "hour" in t) {
                            let e = O.hour >= 12,
                                a = t.hour >= 12;
                            e && !a
                                ? (n = O.set({ hour: O.hour - 12 }))
                                : !e && a && (n = O.set({ hour: O.hour + 12 }));
                        } else
                            "hour" === a && "hour" in O && O.hour >= 12 && M.dayPeriod
                                ? (n = O.set({ hour: t.hour + 12 }))
                                : a in O && (n = O.set({ [a]: t[a] }));
                        $(null), N(n);
                    },
                    formatValue(e) {
                        if (!P) return "";
                        let a = (0, H.id)(e, E);
                        return new (0, q.p)(r, a).format(Z);
                    },
                    getDateFormatter(e, a) {
                        let t = { ...E, ...a },
                            n = (0, H.id)({}, t);
                        return new (0, q.p)(e, n);
                    },
                };
            })({ ...t, locale: l, createCalendar: G.d }),
            u = (0, s.useRef)(null),
            { fieldProps: c, inputProps: D } = (0, h.cJ)({ ...t, inputRef: u }, o, i);
        return s.createElement(
            n.Kq,
            {
                values: [
                    [es, o],
                    [d, { ...D, ref: u }],
                    [r.t, { ...c, ref: i, isInvalid: o.isInvalid, isDisabled: o.isDisabled }],
                ],
            },
            s.createElement(eh, e),
        );
    }),
    eh = (0, s.forwardRef)((e, a) => {
        let { className: t, children: n } = e,
            i = (0, s.useContext)(es),
            l = (0, s.useContext)(ed),
            o = null != i ? i : l;
        return s.createElement(
            s.Fragment,
            null,
            s.createElement(
                r.Y,
                {
                    ...e,
                    ref: a,
                    slot: e.slot || void 0,
                    className: null != t ? t : "react-aria-DateInput",
                    isReadOnly: o.isReadOnly,
                    isInvalid: o.isInvalid,
                    isDisabled: o.isDisabled,
                },
                o.segments.map((e, a) => (0, s.cloneElement)(n(e), { key: a })),
            ),
            s.createElement(c, null),
        );
    }),
    eD = (0, s.forwardRef)(function ({ segment: e, ...a }, t) {
        let r = (0, s.useContext)(es),
            i = (0, s.useContext)(ed),
            d = null != r ? r : i,
            c = (0, el.U)(t),
            { segmentProps: k } = (function (e, a, t) {
                var n;
                let r,
                    i,
                    l,
                    o,
                    d = (0, s.useRef)(""),
                    { locale: c, direction: k } = (0, m.Y)(),
                    x = (function () {
                        var e;
                        let { locale: a } = (0, m.Y)(),
                            t = (0, y.e)((e = D.A) && e.__esModule ? e.default : e, "@react-aria/datepicker");
                        return (0, s.useMemo)(() => {
                            try {
                                return new Intl.DisplayNames(a, { type: "dateTimeField" });
                            } catch {
                                return new p(a, t);
                            }
                        }, [a, t]);
                    })(),
                    { ariaLabel: E, ariaLabelledBy: S, ariaDescribedBy: V, focusManager: F } = h.OX.get(a),
                    B = e.isPlaceholder ? "" : e.text,
                    I = (0, s.useMemo)(() => a.dateFormatter.resolvedOptions(), [a.dateFormatter]),
                    A = (0, j.i)({ month: "long", timeZone: I.timeZone }),
                    T = (0, j.i)({ hour: "numeric", hour12: I.hour12, timeZone: I.timeZone });
                if ("month" !== e.type || e.isPlaceholder)
                    "hour" !== e.type || e.isPlaceholder || (B = T.format(a.dateValue));
                else {
                    let e = A.format(a.dateValue);
                    B = e !== B ? `${B} \u{2013} ${e}` : e;
                }
                let { spinButtonProps: O } = (function (e) {
                        var a;
                        let t = (0, s.useRef)(void 0),
                            {
                                value: n,
                                textValue: r,
                                minValue: i,
                                maxValue: l,
                                isDisabled: o,
                                isReadOnly: u,
                                isRequired: d,
                                onIncrement: c,
                                onIncrementPage: m,
                                onDecrement: h,
                                onDecrementPage: D,
                                onDecrementToMin: p,
                                onIncrementToMax: g,
                            } = e,
                            f = (0, y.o)((a = L) && a.__esModule ? a.default : a, "@react-aria/spinbutton");
                        (0, s.useEffect)(() => () => clearTimeout(t.current), []);
                        let v = (0, s.useRef)(!1),
                            b = () => {
                                v.current = !0;
                            },
                            R = () => {
                                v.current = !1;
                            },
                            $ = "" === r ? f.format("Empty") : (r || `${n}`).replace("-", "−");
                        (0, s.useEffect)(() => {
                            v.current && ((0, J.pA)("assertive"), (0, J.iP)($, "assertive"));
                        }, [$]);
                        let w = (0, W.J)((e) => {
                                clearTimeout(t.current),
                                    null == c || c(),
                                    (t.current = window.setTimeout(() => {
                                        (void 0 === l || isNaN(l) || void 0 === n || isNaN(n) || n < l) && w(60);
                                    }, e));
                            }),
                            P = (0, W.J)((e) => {
                                clearTimeout(t.current),
                                    null == h || h(),
                                    (t.current = window.setTimeout(() => {
                                        (void 0 === i || isNaN(i) || void 0 === n || isNaN(n) || n > i) && P(60);
                                    }, e));
                            }),
                            C = (e) => {
                                e.preventDefault();
                            },
                            { addGlobalListener: k, removeAllGlobalListeners: x } = (0, Y.A)();
                        return {
                            spinButtonProps: {
                                role: "spinbutton",
                                "aria-valuenow": void 0 === n || isNaN(n) ? void 0 : n,
                                "aria-valuetext": $,
                                "aria-valuemin": i,
                                "aria-valuemax": l,
                                "aria-disabled": o || void 0,
                                "aria-readonly": u || void 0,
                                "aria-required": d || void 0,
                                onKeyDown: (e) => {
                                    if (
                                        !e.ctrlKey &&
                                        !e.metaKey &&
                                        !e.shiftKey &&
                                        !e.altKey &&
                                        !u &&
                                        !e.nativeEvent.isComposing
                                    )
                                        switch (e.key) {
                                            case "PageUp":
                                                if (m) {
                                                    e.preventDefault(), null == m || m();
                                                    break;
                                                }
                                            case "ArrowUp":
                                            case "Up":
                                                c && (e.preventDefault(), null == c || c());
                                                break;
                                            case "PageDown":
                                                if (D) {
                                                    e.preventDefault(), null == D || D();
                                                    break;
                                                }
                                            case "ArrowDown":
                                            case "Down":
                                                h && (e.preventDefault(), null == h || h());
                                                break;
                                            case "Home":
                                                p && (e.preventDefault(), null == p || p());
                                                break;
                                            case "End":
                                                g && (e.preventDefault(), null == g || g());
                                        }
                                },
                                onFocus: b,
                                onBlur: R,
                            },
                            incrementButtonProps: {
                                onPressStart: () => {
                                    w(400), k(window, "contextmenu", C);
                                },
                                onPressEnd: () => {
                                    clearTimeout(t.current), x();
                                },
                                onFocus: b,
                                onBlur: R,
                            },
                            decrementButtonProps: {
                                onPressStart: () => {
                                    P(400), k(window, "contextmenu", C);
                                },
                                onPressEnd: () => {
                                    clearTimeout(t.current), x();
                                },
                                onFocus: b,
                                onBlur: R,
                            },
                        };
                    })({
                        value: e.value,
                        textValue: B,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        isDisabled: a.isDisabled,
                        isReadOnly: a.isReadOnly || !e.isEditable,
                        isRequired: a.isRequired,
                        onIncrement: () => {
                            (d.current = ""), a.increment(e.type);
                        },
                        onDecrement: () => {
                            (d.current = ""), a.decrement(e.type);
                        },
                        onIncrementPage: () => {
                            (d.current = ""), a.incrementPage(e.type);
                        },
                        onDecrementPage: () => {
                            (d.current = ""), a.decrementPage(e.type);
                        },
                        onIncrementToMax: () => {
                            (d.current = ""), void 0 !== e.maxValue && a.setSegment(e.type, e.maxValue);
                        },
                        onDecrementToMin: () => {
                            (d.current = ""), void 0 !== e.minValue && a.setSegment(e.type, e.minValue);
                        },
                    }),
                    N = (0, s.useMemo)(() => new M(c, { maximumFractionDigits: 0 }), [c]),
                    Z = () => {
                        if (
                            (e.text === e.placeholder && F.focusPrevious(),
                            !N.isValidPartialNumber(e.text) || a.isReadOnly || e.isPlaceholder)
                        )
                            "dayPeriod" === e.type && a.clearSegment(e.type);
                        else {
                            let t = e.text.slice(0, -1),
                                n = N.parse(t);
                            0 === (t = 0 === n ? "" : t).length || 0 === n
                                ? a.clearSegment(e.type)
                                : a.setSegment(e.type, n),
                                (d.current = t);
                        }
                    },
                    { startsWith: z } =
                        ((n = { sensitivity: "base" }),
                        (r = (0, K.Q)({ usage: "search", ...n })),
                        (i = (0, s.useCallback)(
                            (e, a) =>
                                0 === a.length ||
                                ((e = e.normalize("NFC")),
                                (a = a.normalize("NFC")),
                                0 === r.compare(e.slice(0, a.length), a)),
                            [r],
                        )),
                        (l = (0, s.useCallback)(
                            (e, a) =>
                                0 === a.length ||
                                ((e = e.normalize("NFC")),
                                (a = a.normalize("NFC")),
                                0 === r.compare(e.slice(-a.length), a)),
                            [r],
                        )),
                        (o = (0, s.useCallback)(
                            (e, a) => {
                                if (0 === a.length) return !0;
                                e = e.normalize("NFC");
                                let t = 0,
                                    n = (a = a.normalize("NFC")).length;
                                for (; t + n <= e.length; t++) {
                                    let i = e.slice(t, t + n);
                                    if (0 === r.compare(a, i)) return !0;
                                }
                                return !1;
                            },
                            [r],
                        )),
                        (0, s.useMemo)(() => ({ startsWith: i, endsWith: l, contains: o }), [i, l, o])),
                    U = (0, j.i)({ hour: "numeric", hour12: !0 }),
                    G = (0, s.useMemo)(() => {
                        let e = new Date();
                        return e.setHours(0), U.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
                    }, [U]),
                    H = (0, s.useMemo)(() => {
                        let e = new Date();
                        return e.setHours(12), U.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
                    }, [U]),
                    _ = (0, j.i)({ year: "numeric", era: "narrow", timeZone: "UTC" }),
                    q = (0, s.useMemo)(() => {
                        if ("era" !== e.type) return [];
                        let t = (0, g.yP)(new (0, f.ng)(1, 1, 1), a.calendar),
                            n = a.calendar.getEras().map((e) => {
                                let a = t.set({ year: 1, month: 1, day: 1, era: e }).toDate("UTC");
                                return { era: e, formatted: _.formatToParts(a).find((e) => "era" === e.type).value };
                            }),
                            r = (function (e) {
                                e.sort();
                                let a = e[0],
                                    t = e[e.length - 1];
                                for (let e = 0; e < a.length; e++) if (a[e] !== t[e]) return e;
                                return 0;
                            })(n.map((e) => e.formatted));
                        if (r) for (let e of n) e.formatted = e.formatted.slice(r);
                        return n;
                    }, [_, a.calendar, e.type]),
                    Q = (t) => {
                        if (a.isDisabled || a.isReadOnly) return;
                        let n = d.current + t;
                        switch (e.type) {
                            case "dayPeriod":
                                if (z(G, t)) a.setSegment("dayPeriod", 0);
                                else if (z(H, t)) a.setSegment("dayPeriod", 12);
                                else break;
                                F.focusNext();
                                break;
                            case "era": {
                                let e = q.find((e) => z(e.formatted, t));
                                e && (a.setSegment("era", e.era), F.focusNext());
                                break;
                            }
                            case "day":
                            case "hour":
                            case "minute":
                            case "second":
                            case "month":
                            case "year": {
                                if (!N.isValidPartialNumber(n)) return;
                                let r = N.parse(n),
                                    i = r,
                                    l = 0 === e.minValue;
                                if ("hour" === e.type && a.dateFormatter.resolvedOptions().hour12) {
                                    switch (a.dateFormatter.resolvedOptions().hourCycle) {
                                        case "h11":
                                            r > 11 && (i = N.parse(t));
                                            break;
                                        case "h12":
                                            (l = !1), r > 12 && (i = N.parse(t));
                                    }
                                    void 0 !== e.value && e.value >= 12 && r > 1 && (r += 12);
                                } else void 0 !== e.maxValue && r > e.maxValue && (i = N.parse(t));
                                if (isNaN(r)) return;
                                let o = 0 !== i || l;
                                o && a.setSegment(e.type, i),
                                    void 0 !== e.maxValue &&
                                    (Number(r + "0") > e.maxValue || n.length >= String(e.maxValue).length)
                                        ? ((d.current = ""), o && F.focusNext())
                                        : (d.current = n);
                            }
                        }
                    },
                    X = (0, s.useRef)("u" > typeof document ? document : null);
                (0, $._)(X, "selectionchange", () => {
                    var e;
                    let a = window.getSelection();
                    (null == a ? void 0 : a.anchorNode) &&
                        (null == (e = t.current) ? void 0 : e.contains(null == a ? void 0 : a.anchorNode)) &&
                        a.collapse(t.current);
                });
                let ee = (0, s.useRef)("");
                (0, $._)(t, "beforeinput", (n) => {
                    if (t.current)
                        switch ((n.preventDefault(), n.inputType)) {
                            case "deleteContentBackward":
                            case "deleteContentForward":
                                N.isValidPartialNumber(e.text) && !a.isReadOnly && Z();
                                break;
                            case "insertCompositionText":
                                (ee.current = t.current.textContent), (t.current.textContent = t.current.textContent);
                                break;
                            default:
                                null != n.data && Q(n.data);
                        }
                }),
                    (0, $._)(t, "input", (e) => {
                        let { inputType: a, data: n } = e;
                        "insertCompositionText" === a &&
                            (t.current && (t.current.textContent = ee.current),
                            null != n && (z(G, n) || z(H, n)) && Q(n));
                    }),
                    (0, w.N)(() => {
                        let e = t.current;
                        return () => {
                            document.activeElement === e && (F.focusPrevious() || F.focusNext());
                        };
                    }, [t, F]);
                let ea =
                    (0, v.un)() || "timeZoneName" === e.type
                        ? {
                              role: "textbox",
                              "aria-valuemax": null,
                              "aria-valuemin": null,
                              "aria-valuetext": null,
                              "aria-valuenow": null,
                          }
                        : {};
                e === (0, s.useMemo)(() => a.segments.find((e) => e.isEditable), [a.segments]) ||
                    a.isInvalid ||
                    (V = void 0);
                let et = (0, P.Bi)(),
                    en = !a.isDisabled && !a.isReadOnly && e.isEditable,
                    er = "literal" === e.type ? "" : x.of(e.type),
                    ei = (0, C.b)({ "aria-label": `${er}${E ? `, ${E}` : ""}${S ? ", " : ""}`, "aria-labelledby": S });
                if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
                let el = { caretColor: "transparent" };
                if ("rtl" === k) {
                    el.unicodeBidi = "embed";
                    let a = I[e.type];
                    ("numeric" === a || "2-digit" === a) && (el.direction = "ltr");
                }
                return {
                    segmentProps: (0, u.v)(O, ei, {
                        id: et,
                        ...ea,
                        "aria-invalid": a.isInvalid ? "true" : void 0,
                        "aria-describedby": V,
                        "aria-readonly": a.isReadOnly || !e.isEditable ? "true" : void 0,
                        "data-placeholder": e.isPlaceholder || void 0,
                        contentEditable: en,
                        suppressContentEditableWarning: en,
                        spellCheck: en ? "false" : void 0,
                        autoCorrect: en ? "off" : void 0,
                        [parseInt(s.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: en ? "next" : void 0,
                        inputMode:
                            a.isDisabled || "dayPeriod" === e.type || "era" === e.type || !en ? void 0 : "numeric",
                        tabIndex: a.isDisabled ? void 0 : 0,
                        onKeyDown: (e) => {
                            if (
                                ("a" === e.key && ((0, v.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                                !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
                            )
                                switch (e.key) {
                                    case "Backspace":
                                    case "Delete":
                                        e.preventDefault(), e.stopPropagation(), Z();
                                }
                        },
                        onFocus: () => {
                            (d.current = ""),
                                t.current && (0, b.o)(t.current, { containingElement: (0, R.m)(t.current) });
                            let e = window.getSelection();
                            null == e || e.collapse(t.current);
                        },
                        style: el,
                        onPointerDown(e) {
                            e.stopPropagation();
                        },
                        onMouseDown(e) {
                            e.stopPropagation();
                        },
                    }),
                };
            })(e, d, c),
            { focusProps: x, isFocused: E, isFocusVisible: S } = (0, o.o)(),
            { hoverProps: V, isHovered: F } = (0, l.M)({ ...a, isDisabled: d.isDisabled || "literal" === e.type }),
            B = (0, n.Sl)({
                ...a,
                values: {
                    ...e,
                    isReadOnly: d.isReadOnly,
                    isInvalid: d.isInvalid,
                    isDisabled: d.isDisabled,
                    isHovered: F,
                    isFocused: E,
                    isFocusVisible: S,
                },
                defaultChildren: e.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return s.createElement("span", {
            ...(0, u.v)((0, eo.$)(a, { global: !0 }), k, x, V),
            ...B,
            style: k.style,
            ref: c,
            "data-placeholder": e.isPlaceholder || void 0,
            "data-invalid": d.isInvalid || void 0,
            "data-readonly": d.isReadOnly || void 0,
            "data-disabled": d.isDisabled || void 0,
            "data-type": e.type,
            "data-hovered": F || void 0,
            "data-focused": E || void 0,
            "data-focus-visible": S || void 0,
        });
    });
