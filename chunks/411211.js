"use strict";
n.d(t, { Y: () => g });
var r = n(842830),
    i = n(676040),
    s = n(518375),
    a = n(96798),
    o = n(243399),
    l = n(688357),
    u = n(356481),
    c = n(439489),
    d = n(369364),
    _ = n(765657),
    f = n(501974),
    p = n(225441),
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
    E = [
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
class g {
    constructor(e, t) {
        if (!(this && this instanceof g ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const n = (0, r.N)(e),
            o = Object.create(null),
            l = void 0 === t ? Object.create(null) : (0, i.BT)(t),
            d = (0, s.W)(l, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            _ = (0, s.W)(l, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== _ && 0 > p.P.indexOf(_)) throw RangeError(`Invalid numberingSystems: ${_}`);
        (o.nu = _), (o.localeMatcher = d);
        const { localeData: h, availableLocales: m } = g,
            A = (0, u.B)(m, n, o, ["nu"], h, g.getDefaultLocale),
            I = A.locale,
            T = (0, f.n)(this);
        (T.initializedDurationFormat = !0), (T.locale = I), (T.numberingSystem = A.nu);
        const S = (0, s.W)(l, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (T.style = S), (T.dataLocale = A.dataLocale);
        let y = "";
        E.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: r, values: i, digitalDefault: s } = e,
                a = (0, c.$)(r, l, S, i, s, y);
            (T[t] = a.style),
                (T[n] = a.display),
                ("hours" === r || "minutes" === r || "seconds" === r || "milliseconds" === r || "microseconds" === r) &&
                    (y = a.style);
        }),
            (T.fractionalDigits = (0, a.z)(l, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, i.Wt)(g, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, f.n)(this),
            t = {};
        for (let n of m) {
            let r = e[n];
            "fractionalDigits" === n
                ? void 0 !== r && (r = Number(r))
                : (0, o.V1)(void 0 !== r, `Missing internal slot ${n}`),
                (t[n] = r);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, f.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, d.m)(this, t),
            r = [];
        for (let { type: e, unit: t, value: i } of n) {
            let n = { type: e, value: i };
            t && (n.unit = t), r.push(n);
        }
        return r;
    }
    format(e) {
        if (void 0 === (0, f.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, _.H)(e),
            n = (0, d.m)(this, t),
            r = "";
        for (let { value: e } of n) r += e;
        return r;
    }
    static supportedLocalesOf(e, t) {
        return (0, l.U)(g.availableLocales, (0, r.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(h.N.localeData).reduce((e, t) => {
        g.availableLocales.add(t);
        let n = h.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: n,
                digitalFormat: h.N.localeData[t].separator || n.reduce((e, t) => ((e[t] = h.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => g.__defaultLocale;
    static polyfilled = !0;
}
