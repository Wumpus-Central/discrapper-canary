"use strict";
n.d(t, { Y: () => b });
var r = n(842830),
    a = n(469322),
    i = n(518375),
    l = n(97626),
    s = n(243399),
    o = n(29685),
    c = n(641277),
    d = n(439489),
    u = n(369364),
    _ = n(727504),
    p = n(501974),
    f = n(225441),
    m = n(762437);
n(632459);
let h = [
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
        const n = (0, r.N)(e),
            s = Object.create(null),
            o = void 0 === t ? Object.create(null) : (0, a.BT)(t),
            u = (0, i.W)(o, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            _ = (0, i.W)(o, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== _ && 0 > f.P.indexOf(_)) throw RangeError(`Invalid numberingSystems: ${_}`);
        (s.nu = _), (s.localeMatcher = u);
        const { localeData: m, availableLocales: h } = b,
            A = (0, c.B)(h, n, s, ["nu"], m, b.getDefaultLocale),
            E = A.locale,
            v = (0, p.n)(this);
        (v.initializedDurationFormat = !0), (v.locale = E), (v.numberingSystem = A.nu);
        const I = (0, i.W)(o, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (v.style = I), (v.dataLocale = A.dataLocale);
        let y = "";
        g.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: r, values: a, digitalDefault: i } = e,
                l = (0, d.$)(r, o, I, a, i, y);
            (v[t] = l.style),
                (v[n] = l.display),
                ("hours" === r || "minutes" === r || "seconds" === r || "milliseconds" === r || "microseconds" === r) &&
                    (y = l.style);
        }),
            (v.fractionalDigits = (0, l.z)(o, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, a.Wt)(b, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            t = {};
        for (let n of h) {
            let r = e[n];
            "fractionalDigits" === n
                ? void 0 !== r && (r = Number(r))
                : (0, s.V1)(void 0 !== r, `Missing internal slot ${n}`),
                (t[n] = r);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, u.m)(this, t),
            r = [];
        for (let { type: e, unit: t, value: a } of n) {
            let n = { type: e, value: a };
            t && (n.unit = t), r.push(n);
        }
        return r;
    }
    format(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, u.m)(this, t),
            r = "";
        for (let { value: e } of n) r += e;
        return r;
    }
    static supportedLocalesOf(e, t) {
        return (0, o.U)(b.availableLocales, (0, r.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(m.N.localeData).reduce((e, t) => {
        b.availableLocales.add(t);
        let n = m.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: n,
                digitalFormat: m.N.localeData[t].separator || n.reduce((e, t) => ((e[t] = m.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => b.__defaultLocale;
    static polyfilled = !0;
}
