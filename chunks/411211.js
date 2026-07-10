"use strict";
n.d(e, { Y: () => v });
var i = n(842830),
    r = n(120330),
    o = n(518375),
    a = n(97626),
    s = n(243399),
    l = n(29685),
    u = n(641277),
    c = n(439489),
    h = n(369364),
    d = n(727504),
    f = n(501974),
    p = n(225441),
    g = n(762437);
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
    y = [
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
class v {
    constructor(t, e) {
        if (!(this && this instanceof v ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const n = (0, i.N)(t),
            s = Object.create(null),
            l = void 0 === e ? Object.create(null) : (0, r.BT)(e),
            h = (0, o.W)(l, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            d = (0, o.W)(l, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== d && 0 > p.P.indexOf(d)) throw RangeError(`Invalid numberingSystems: ${d}`);
        (s.nu = d), (s.localeMatcher = h);
        const { localeData: g, availableLocales: m } = v,
            b = (0, u.B)(m, n, s, ["nu"], g, v.getDefaultLocale),
            w = b.locale,
            x = (0, f.n)(this);
        (x.initializedDurationFormat = !0), (x.locale = w), (x.numberingSystem = b.nu);
        const _ = (0, o.W)(l, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (x.style = _), (x.dataLocale = b.dataLocale);
        let S = "";
        y.forEach((t) => {
            let { styleSlot: e, displaySlot: n, unit: i, values: r, digitalDefault: o } = t,
                a = (0, c.$)(i, l, _, r, o, S);
            (x[e] = a.style),
                (x[n] = a.display),
                ("hours" === i || "minutes" === i || "seconds" === i || "milliseconds" === i || "microseconds" === i) &&
                    (S = a.style);
        }),
            (x.fractionalDigits = (0, a.z)(l, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, r.Wt)(v, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let t = (0, f.n)(this),
            e = {};
        for (let n of m) {
            let i = t[n];
            "fractionalDigits" === n
                ? void 0 !== i && (i = Number(i))
                : (0, s.V1)(void 0 !== i, `Missing internal slot ${n}`),
                (e[n] = i);
        }
        return e;
    }
    formatToParts(t) {
        if (void 0 === (0, f.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let e = (0, d.H)(t),
            n = (0, h.m)(this, e),
            i = [];
        for (let { type: t, unit: e, value: r } of n) {
            let n = { type: t, value: r };
            e && (n.unit = e), i.push(n);
        }
        return i;
    }
    format(t) {
        if (void 0 === (0, f.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let e = (0, d.H)(t),
            n = (0, h.m)(this, e),
            i = "";
        for (let { value: t } of n) i += t;
        return i;
    }
    static supportedLocalesOf(t, e) {
        return (0, l.U)(v.availableLocales, (0, i.N)(t), e);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(g.N.localeData).reduce((t, e) => {
        v.availableLocales.add(e);
        let n = g.N.localeData[e].nu;
        return (
            (t[e] = {
                nu: n,
                digitalFormat: g.N.localeData[e].separator || n.reduce((t, e) => ((t[e] = g.N.default), t), {}),
            }),
            t
        );
    }, {});
    static getDefaultLocale = () => v.__defaultLocale;
    static polyfilled = !0;
}
