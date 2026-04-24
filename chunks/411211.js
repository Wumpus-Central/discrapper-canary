"use strict";
n.d(t, { Y: () => b });
var a = n(842830),
    r = n(469322),
    i = n(518375),
    l = n(97626),
    s = n(243399),
    o = n(29685),
    c = n(641277),
    d = n(439489),
    u = n(369364),
    _ = n(727504),
    p = n(501974),
    m = n(225441),
    h = n(762437);
n(632459);
let f = [
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
            s = Object.create(null),
            o = void 0 === t ? Object.create(null) : (0, r.BT)(t),
            u = (0, i.W)(o, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            _ = (0, i.W)(o, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== _ && 0 > m.P.indexOf(_)) throw RangeError(`Invalid numberingSystems: ${_}`);
        (s.nu = _), (s.localeMatcher = u);
        const { localeData: h, availableLocales: f } = b,
            v = (0, c.B)(f, n, s, ["nu"], h, b.getDefaultLocale),
            A = v.locale,
            x = (0, p.n)(this);
        (x.initializedDurationFormat = !0), (x.locale = A), (x.numberingSystem = v.nu);
        const E = (0, i.W)(o, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (x.style = E), (x.dataLocale = v.dataLocale);
        let T = "";
        g.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: a, values: r, digitalDefault: i } = e,
                l = (0, d.$)(a, o, E, r, i, T);
            (x[t] = l.style),
                (x[n] = l.display),
                ("hours" === a || "minutes" === a || "seconds" === a || "milliseconds" === a || "microseconds" === a) &&
                    (T = l.style);
        }),
            (x.fractionalDigits = (0, l.z)(o, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, r.Wt)(b, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            t = {};
        for (let n of f) {
            let a = e[n];
            "fractionalDigits" === n
                ? void 0 !== a && (a = Number(a))
                : (0, s.V1)(void 0 !== a, `Missing internal slot ${n}`),
                (t[n] = a);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, u.m)(this, t),
            a = [];
        for (let { type: e, unit: t, value: r } of n) {
            let n = { type: e, value: r };
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
        return (0, o.U)(b.availableLocales, (0, a.N)(e), t);
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
