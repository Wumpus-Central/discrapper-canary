"use strict";
var r = n(691262),
    i = n(264048),
    a = n(698982),
    s = n(415922);
function o(e, t, n) {
    var r = "string" == typeof e ? o.__parse(e) : e;
    if (!(r && "messageFormatPattern" === r.type)) throw TypeError("A message must be provided as a String or AST.");
    (n = this._mergeFormats(o.formats, n)), i.defineProperty(this, "_locale", { value: this._resolveLocale(t) });
    var a = this._findPluralRuleFunction(this._locale),
        s = this._compilePattern(r, t, n, a),
        l = this;
    this.format = function (e) {
        return l._format(s, e);
    };
}
(t.default = o),
    i.defineProperty(o, "formats", {
        enumerable: !0,
        value: {
            number: { currency: { style: "currency" }, percent: { style: "percent" } },
            date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
            },
            time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: { hour: "numeric", minute: "numeric", second: "numeric" },
                long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
                full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
            },
        },
    }),
    i.defineProperty(o, "__localeData__", { value: i.objCreate(null) }),
    i.defineProperty(o, "__addLocaleData", {
        value: function (e) {
            if (!(e && e.locale))
                throw Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            o.__localeData__[e.locale.toLowerCase()] = e;
        },
    }),
    i.defineProperty(o, "__parse", { value: s.default.parse }),
    i.defineProperty(o, "defaultLocale", { enumerable: !0, writable: !0, value: void 0 }),
    (o.prototype.resolvedOptions = function () {
        return { locale: this._locale };
    }),
    (o.prototype._compilePattern = function (e, t, n, r) {
        return new a.default(t, n, r).compile(e);
    }),
    (o.prototype._findPluralRuleFunction = function (e) {
        for (var t = o.__localeData__, n = t[e.toLowerCase()]; n; ) {
            if (n.pluralRuleFunction) return n.pluralRuleFunction;
            n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e);
    }),
    (o.prototype._format = function (e, t) {
        var n,
            i,
            a,
            s,
            o,
            l = "";
        for (n = 0, i = e.length; n < i; n += 1) {
            if ("string" == typeof (a = e[n])) {
                l += a;
                continue;
            }
            if (((s = a.id), !(t && r.hop.call(t, s)))) throw Error("A value must be provided for: " + s);
            (o = t[s]), a.options ? (l += this._format(a.getOption(o), t)) : (l += a.format(o));
        }
        return l;
    }),
    (o.prototype._mergeFormats = function (e, t) {
        var n,
            a,
            s = {};
        for (n in e) r.hop.call(e, n) && ((s[n] = a = i.objCreate(e[n])), t && r.hop.call(t, n) && r.extend(a, t[n]));
        return s;
    }),
    (o.prototype._resolveLocale = function (e) {
        "string" == typeof e && (e = [e]), (e = (e || []).concat(o.defaultLocale));
        var t,
            n,
            r,
            i,
            a = o.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1)
            for (r = e[t].toLowerCase().split("-"); r.length; ) {
                if ((i = a[r.join("-")])) return i.locale;
                r.pop();
            }
        var s = e.pop();
        throw Error(
            "No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + s,
        );
    });
