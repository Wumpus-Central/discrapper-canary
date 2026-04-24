n.d(t, { Y: () => b });
var a = n(842830),
    i = n(469322),
    l = n(518375),
    r = n(97626),
    o = n(243399),
    s = n(29685),
    c = n(641277),
    d = n(439489),
    u = n(369364),
    _ = n(727504),
    p = n(501974),
    f = n(225441),
    h = n(762437);
n(632459);
let m = [
        "locale",
        "style",
        "years",
        "yearsDisplay",
        "months",
        "monthsDisplay",
        "weeks",
        "weeksDisplay",
        "days",
        "daysDisplay",
        "hours",
        "hoursDisplay",
        "minutes",
        "minutesDisplay",
        "seconds",
        "secondsDisplay",
        "milliseconds",
        "millisecondsDisplay",
        "microseconds",
        "microsecondsDisplay",
        "nanoseconds",
        "nanosecondsDisplay",
        "numberingSystem",
        "fractionalDigits",
    ],
    g = [
        {
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
        },
    ];
class b {
    constructor(e, t) {
        if (!(this && this instanceof b ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const n = (0, a.N)(e),
            o = Object.create(null),
            s = void 0 === t ? Object.create(null) : (0, i.BT)(t),
            u = (0, l.W)(s, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            _ = (0, l.W)(s, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== _ && 0 > f.P.indexOf(_)) throw RangeError(`Invalid numberingSystems: ${_}`);
        (o.nu = _), (o.localeMatcher = u);
        const { localeData: h, availableLocales: m } = b,
            A = (0, c.B)(m, n, o, ["nu"], h, b.getDefaultLocale),
            E = A.locale,
            v = (0, p.n)(this);
        (v.initializedDurationFormat = !0), (v.locale = E), (v.numberingSystem = A.nu);
        const I = (0, l.W)(s, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (v.style = I), (v.dataLocale = A.dataLocale);
        let y = "";
        g.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: a, values: i, digitalDefault: l } = e,
                r = (0, d.$)(a, s, I, i, l, y);
            (v[t] = r.style),
                (v[n] = r.display),
                ("hours" === a || "minutes" === a || "seconds" === a || "milliseconds" === a || "microseconds" === a) &&
                    (y = r.style);
        }),
            (v.fractionalDigits = (0, r.z)(s, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, i.Wt)(b, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            t = {};
        for (let n of m) {
            let a = e[n];
            "fractionalDigits" === n
                ? void 0 !== a && (a = Number(a))
                : (0, o.V1)(void 0 !== a, `Missing internal slot ${n}`),
                (t[n] = a);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, u.m)(this, t),
            a = [];
        for (let { type: e, unit: t, value: i } of n) {
            let n = { type: e, value: i };
            t && (n.unit = t), a.push(n);
        }
        return a;
    }
    format(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, u.m)(this, t),
            a = "";
        for (let { value: e } of n) a += e;
        return a;
    }
    static supportedLocalesOf(e, t) {
        return (0, s.U)(b.availableLocales, (0, a.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(h.N.localeData).reduce((e, t) => {
        b.availableLocales.add(t);
        let n = h.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: n,
                digitalFormat: h.N.localeData[t].separator || n.reduce((e, t) => ((e[t] = h.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => b.__defaultLocale;
    static polyfilled = !0;
}
