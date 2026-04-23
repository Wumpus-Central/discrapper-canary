n.d(t, { Y: () => g });
var i = n(842830),
    r = n(469322),
    o = n(518375),
    a = n(97626),
    s = n(243399),
    u = n(29685),
    l = n(641277),
    c = n(439489),
    f = n(369364),
    d = n(727504),
    p = n(501974),
    h = n(225441),
    y = n(762437);
n(632459);
let v = [
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
    m = [
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
        const n = (0, i.N)(e),
            s = Object.create(null),
            u = void 0 === t ? Object.create(null) : (0, r.BT)(t),
            f = (0, o.W)(u, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            d = (0, o.W)(u, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== d && 0 > h.P.indexOf(d)) throw RangeError(`Invalid numberingSystems: ${d}`);
        (s.nu = d), (s.localeMatcher = f);
        const { localeData: y, availableLocales: v } = g,
            w = (0, l.B)(v, n, s, ["nu"], y, g.getDefaultLocale),
            x = w.locale,
            b = (0, p.n)(this);
        (b.initializedDurationFormat = !0), (b.locale = x), (b.numberingSystem = w.nu);
        const C = (0, o.W)(u, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (b.style = C), (b.dataLocale = w.dataLocale);
        let R = "";
        m.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: i, values: r, digitalDefault: o } = e,
                a = (0, c.$)(i, u, C, r, o, R);
            (b[t] = a.style),
                (b[n] = a.display),
                ("hours" === i || "minutes" === i || "seconds" === i || "milliseconds" === i || "microseconds" === i) &&
                    (R = a.style);
        }),
            (b.fractionalDigits = (0, a.z)(u, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, r.Wt)(g, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            t = {};
        for (let n of v) {
            let i = e[n];
            "fractionalDigits" === n
                ? void 0 !== i && (i = Number(i))
                : (0, s.V1)(void 0 !== i, `Missing internal slot ${n}`),
                (t[n] = i);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, d.H)(e),
            n = (0, f.m)(this, t),
            i = [];
        for (let { type: e, unit: t, value: r } of n) {
            let n = { type: e, value: r };
            t && (n.unit = t), i.push(n);
        }
        return i;
    }
    format(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, d.H)(e),
            n = (0, f.m)(this, t),
            i = "";
        for (let { value: e } of n) i += e;
        return i;
    }
    static supportedLocalesOf(e, t) {
        return (0, u.U)(g.availableLocales, (0, i.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(y.N.localeData).reduce((e, t) => {
        g.availableLocales.add(t);
        let n = y.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: n,
                digitalFormat: y.N.localeData[t].separator || n.reduce((e, t) => ((e[t] = y.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => g.__defaultLocale;
    static polyfilled = !0;
}
