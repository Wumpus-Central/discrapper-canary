t.d(e, { Y: () => g });
var a = t(842830),
    r = t(676040),
    i = t(518375),
    s = t(96798),
    u = t(243399),
    o = t(688357),
    d = t(356481),
    l = t(439489),
    c = t(369364),
    _ = t(765657),
    f = t(501974),
    h = t(225441),
    y = t(762437);
t(854840);
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
    w = [
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
    constructor(n, e) {
        if (!(this && this instanceof g ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const t = (0, a.N)(n),
            u = Object.create(null),
            o = void 0 === e ? Object.create(null) : (0, r.BT)(e),
            c = (0, i.W)(o, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            _ = (0, i.W)(o, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== _ && 0 > h.P.indexOf(_)) throw RangeError(`Invalid numberingSystems: ${_}`);
        (u.nu = _), (u.localeMatcher = c);
        const { localeData: y, availableLocales: m } = g,
            p = (0, d.B)(m, t, u, ["nu"], y, g.getDefaultLocale),
            v = p.locale,
            b = (0, f.n)(this);
        (b.initializedDurationFormat = !0), (b.locale = v), (b.numberingSystem = p.nu);
        const S = (0, i.W)(o, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (b.style = S), (b.dataLocale = p.dataLocale);
        let M = "";
        w.forEach((n) => {
            let { styleSlot: e, displaySlot: t, unit: a, values: r, digitalDefault: i } = n,
                s = (0, l.$)(a, o, S, r, i, M);
            (b[e] = s.style),
                (b[t] = s.display),
                ("hours" === a || "minutes" === a || "seconds" === a || "milliseconds" === a || "microseconds" === a) &&
                    (M = s.style);
        }),
            (b.fractionalDigits = (0, s.z)(o, "fractionalDigits", 0, 9, void 0));
    }
    resolvedOptions() {
        if ("object" != typeof this || !(0, r.Wt)(g, this))
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let n = (0, f.n)(this),
            e = {};
        for (let t of m) {
            let a = n[t];
            "fractionalDigits" === t
                ? void 0 !== a && (a = Number(a))
                : (0, u.V1)(void 0 !== a, `Missing internal slot ${t}`),
                (e[t] = a);
        }
        return e;
    }
    formatToParts(n) {
        if (void 0 === (0, f.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let e = (0, _.H)(n),
            t = (0, c.m)(this, e),
            a = [];
        for (let { type: n, unit: e, value: r } of t) {
            let t = { type: n, value: r };
            e && (t.unit = e), a.push(t);
        }
        return a;
    }
    format(n) {
        if (void 0 === (0, f.n)(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let e = (0, _.H)(n),
            t = (0, c.m)(this, e),
            a = "";
        for (let { value: n } of t) a += n;
        return a;
    }
    static supportedLocalesOf(n, e) {
        return (0, o.U)(g.availableLocales, (0, a.N)(n), e);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(y.N.localeData).reduce((n, e) => {
        g.availableLocales.add(e);
        let t = y.N.localeData[e].nu;
        return (
            (n[e] = {
                nu: t,
                digitalFormat: y.N.localeData[e].separator || t.reduce((n, e) => ((n[e] = y.N.default), n), {}),
            }),
            n
        );
    }, {});
    static getDefaultLocale = () => g.__defaultLocale;
    static polyfilled = !0;
}
