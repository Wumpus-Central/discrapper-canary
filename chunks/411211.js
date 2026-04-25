a.d(t, { Y: () => g });
var r = a(842830),
    n = a(469322),
    l = a(518375),
    i = a(97626),
    s = a(243399),
    o = a(29685),
    c = a(641277),
    d = a(439489),
    u = a(369364),
    h = a(727504),
    p = a(501974),
    m = a(225441),
    f = a(762437);
a(632459);
let b = [
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
        const a = (0, r.N)(e),
            s = Object.create(null),
            o = void 0 === t ? Object.create(null) : (0, n.BT)(t),
            u = (0, l.W)(o, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            h = (0, l.W)(o, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== h && 0 > m.P.indexOf(h)) throw RangeError(`Invalid numberingSystems: ${h}`);
        (s.nu = h), (s.localeMatcher = u);
        const { localeData: f, availableLocales: b } = g,
            x = (0, c.B)(b, a, s, ["nu"], f, g.getDefaultLocale),
            v = x.locale,
            A = (0, p.n)(this);
        (A.initializedDurationFormat = !0), (A.locale = v), (A.numberingSystem = x.nu);
        const y = (0, l.W)(o, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (A.style = y), (A.dataLocale = x.dataLocale);
        let E = "";
        _.forEach((e) => {
            let { styleSlot: t, displaySlot: a, unit: r, values: n, digitalDefault: l } = e,
                i = (0, d.$)(r, o, y, n, l, E);
            (A[t] = i.style),
                (A[a] = i.display),
                ("hours" === r || "minutes" === r || "seconds" === r || "milliseconds" === r || "microseconds" === r) &&
                    (E = i.style);
        }),
            (A.fractionalDigits = (0, i.z)(o, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, n.Wt)(g, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = (0, p.n)(this),
            t = {};
        for (let a of b) {
            let r = e[a];
            "fractionalDigits" === a
                ? void 0 !== r && (r = Number(r))
                : (0, s.V1)(void 0 !== r, `Missing internal slot ${a}`),
                (t[a] = r);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, h.H)(e),
            a = (0, u.m)(this, t),
            r = [];
        for (let { type: e, unit: t, value: n } of a) {
            let a = { type: e, value: n };
            t && (a.unit = t), r.push(a);
        }
        return r;
    }
    format(e) {
        if (void 0 === (0, p.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = (0, h.H)(e),
            a = (0, u.m)(this, t),
            r = "";
        for (let { value: e } of a) r += e;
        return r;
    }
    static supportedLocalesOf(e, t) {
        return (0, o.U)(g.availableLocales, (0, r.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(f.N.localeData).reduce((e, t) => {
        g.availableLocales.add(t);
        let a = f.N.localeData[t].nu;
        return (
            (e[t] = {
                nu: a,
                digitalFormat: f.N.localeData[t].separator || a.reduce((e, t) => ((e[t] = f.N.default), e), {}),
            }),
            e
        );
    }, {});
    static getDefaultLocale = () => g.__defaultLocale;
    static polyfilled = !0;
}
