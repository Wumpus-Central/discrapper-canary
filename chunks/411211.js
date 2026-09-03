n.d(t, { Y: () => g });
var r = n(842830),
    i = n(120330),
    a = n(518375),
    o = n(97626),
    u = n(243399),
    s = n(29685),
    l = n(641277),
    d = n(439489),
    c = n(369364),
    f = n(727504),
    h = n(501974),
    p = n(225441),
    m = n(762437);
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
    _ = [
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
            u = Object.create(null),
            s = void 0 === t ? Object.create(null) : (0, i.BT)(t),
            c = (0, a.W)(s, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            f = (0, a.W)(s, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== f && 0 > p.P.indexOf(f)) throw RangeError(`Invalid numberingSystems: ${f}`);
        (u.nu = f), (u.localeMatcher = c);
        const { localeData: m, availableLocales: v } = g,
            y = (0, l.B)(v, n, u, ["nu"], m, g.getDefaultLocale),
            b = y.locale,
            D = (0, h.n)(this);
        (D.initializedDurationFormat = !0), (D.locale = b), (D.numberingSystem = y.nu);
        const w = (0, a.W)(s, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (D.style = w), (D.dataLocale = y.dataLocale);
        let E = "";
        _.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: r, values: i, digitalDefault: a } = e,
                o = (0, d.$)(r, s, w, i, a, E);
            (D[t] = o.style),
                (D[n] = o.display),
                ("hours" === r || "minutes" === r || "seconds" === r || "milliseconds" === r || "microseconds" === r) &&
                    (E = o.style);
        }),
            (D.fractionalDigits = (0, o.z)(s, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, i.Wt)(g, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, h.n)(this),
            t = {};
        for (let n of v) {
            let r = e[n];
            "fractionalDigits" === n
                ? void 0 !== r && (r = Number(r))
                : (0, u.V1)(void 0 !== r, `Missing internal slot ${n}`),
                (t[n] = r);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, h.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, f.H)(e),
            n = (0, c.m)(this, t),
            r = [];
        for (let { type: e, unit: t, value: i } of n) {
            let n = { type: e, value: i };
            t && (n.unit = t), r.push(n);
        }
        return r;
    }
    format(e) {
        if (void 0 === (0, h.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, f.H)(e),
            n = (0, c.m)(this, t),
            r = "";
        for (let { value: e } of n) r += e;
        return r;
    }
    static supportedLocalesOf(e, t) {
        return (0, s.U)(g.availableLocales, (0, r.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(m.N.localeData).reduce((e, t) => {
        g.availableLocales.add(t);
        let n = m.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: n,
                digitalFormat: m.N.localeData[t].separator || n.reduce((e, t) => ((e[t] = m.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => g.__defaultLocale;
    static polyfilled = !0;
}
