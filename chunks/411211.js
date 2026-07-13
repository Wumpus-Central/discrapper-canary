t.d(n, { Y: () => g });
var i = t(842830),
    r = t(120330),
    a = t(518375),
    s = t(97626),
    o = t(243399),
    u = t(29685),
    l = t(641277),
    d = t(439489),
    c = t(369364),
    f = t(727504),
    p = t(501974),
    h = t(225441),
    _ = t(762437);
t(632459);
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
class g {
    constructor(e, n) {
        if (!(this && this instanceof g ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const t = (0, i.N)(e),
            o = Object.create(null),
            u = void 0 === n ? Object.create(null) : (0, r.BT)(n),
            c = (0, a.W)(u, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            f = (0, a.W)(u, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== f && 0 > h.P.indexOf(f)) throw RangeError(`Invalid numberingSystems: ${f}`);
        (o.nu = f), (o.localeMatcher = c);
        const { localeData: _, availableLocales: m } = g,
            w = (0, l.B)(m, t, o, ["nu"], _, g.getDefaultLocale),
            v = w.locale,
            b = (0, p.n)(this);
        (b.initializedDurationFormat = !0), (b.locale = v), (b.numberingSystem = w.nu);
        const z = (0, a.W)(u, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (b.style = z), (b.dataLocale = w.dataLocale);
        let S = "";
        y.forEach((e) => {
            let { styleSlot: n, displaySlot: t, unit: i, values: r, digitalDefault: a } = e,
                s = (0, d.$)(i, u, z, r, a, S);
            (b[n] = s.style),
                (b[t] = s.display),
                ("hours" === i || "minutes" === i || "seconds" === i || "milliseconds" === i || "microseconds" === i) &&
                    (S = s.style);
        }),
            (b.fractionalDigits = (0, s.z)(u, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, r.Wt)(g, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            n = {};
        for (let t of m) {
            let i = e[t];
            "fractionalDigits" === t
                ? void 0 !== i && (i = Number(i))
                : (0, o.V1)(void 0 !== i, `Missing internal slot ${t}`),
                (n[t] = i);
        }
        return n;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let n = (0, f.H)(e),
            t = (0, c.m)(this, n),
            i = [];
        for (let { type: e, unit: n, value: r } of t) {
            let t = { type: e, value: r };
            n && (t.unit = n), i.push(t);
        }
        return i;
    }
    format(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let n = (0, f.H)(e),
            t = (0, c.m)(this, n),
            i = "";
        for (let { value: e } of t) i += e;
        return i;
    }
    static supportedLocalesOf(e, n) {
        return (0, u.U)(g.availableLocales, (0, i.N)(e), n);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(_.N.localeData).reduce((e, n) => {
        g.availableLocales.add(n);
        let t = _.N.localeData[n].nu;
        return (
            (e[n] = {
                nu: t,
                digitalFormat: _.N.localeData[n].separator || t.reduce((e, n) => ((e[n] = _.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => g.__defaultLocale;
    static polyfilled = !0;
}
