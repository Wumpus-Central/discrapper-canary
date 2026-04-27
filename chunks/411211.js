"use strict";
r.d(t, { Y: () => b });
var n = r(842830),
    i = r(469322),
    a = r(518375),
    s = r(97626),
    l = r(243399),
    o = r(29685),
    c = r(641277),
    d = r(439489),
    u = r(369364),
    _ = r(727504),
    p = r(501974),
    f = r(225441),
    m = r(762437);
r(632459);
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
        const r = (0, n.N)(e),
            l = Object.create(null),
            o = void 0 === t ? Object.create(null) : (0, i.BT)(t),
            u = (0, a.W)(o, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            _ = (0, a.W)(o, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== _ && 0 > f.P.indexOf(_)) throw RangeError(`Invalid numberingSystems: ${_}`);
        (l.nu = _), (l.localeMatcher = u);
        const { localeData: m, availableLocales: h } = b,
            A = (0, c.B)(h, r, l, ["nu"], m, b.getDefaultLocale),
            E = A.locale,
            v = (0, p.n)(this);
        (v.initializedDurationFormat = !0), (v.locale = E), (v.numberingSystem = A.nu);
        const y = (0, a.W)(o, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (v.style = y), (v.dataLocale = A.dataLocale);
        let I = "";
        g.forEach((e) => {
            let { styleSlot: t, displaySlot: r, unit: n, values: i, digitalDefault: a } = e,
                s = (0, d.$)(n, o, y, i, a, I);
            (v[t] = s.style),
                (v[r] = s.display),
                ("hours" === n || "minutes" === n || "seconds" === n || "milliseconds" === n || "microseconds" === n) &&
                    (I = s.style);
        }),
            (v.fractionalDigits = (0, s.z)(o, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, i.Wt)(b, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            t = {};
        for (let r of h) {
            let n = e[r];
            "fractionalDigits" === r
                ? void 0 !== n && (n = Number(n))
                : (0, l.V1)(void 0 !== n, `Missing internal slot ${r}`),
                (t[r] = n);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            r = (0, u.m)(this, t),
            n = [];
        for (let { type: e, unit: t, value: i } of r) {
            let r = { type: e, value: i };
            t && (r.unit = t), n.push(r);
        }
        return n;
    }
    format(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            r = (0, u.m)(this, t),
            n = "";
        for (let { value: e } of r) n += e;
        return n;
    }
    static supportedLocalesOf(e, t) {
        return (0, o.U)(b.availableLocales, (0, n.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(m.N.localeData).reduce((e, t) => {
        b.availableLocales.add(t);
        let r = m.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: r,
                digitalFormat: m.N.localeData[t].separator || r.reduce((e, t) => ((e[t] = m.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => b.__defaultLocale;
    static polyfilled = !0;
}
