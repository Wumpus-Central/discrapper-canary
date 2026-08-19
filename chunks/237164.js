"use strict";
var n = r(691262),
    o = r(264048),
    i = r(698982),
    a = r(415922);
function s(e, t, r) {
    var n = "string" == typeof e ? s.__parse(e) : e;
    if (!(n && "messageFormatPattern" === n.type)) throw TypeError("A message must be provided as a String or AST.");
    (r = this._mergeFormats(s.formats, r)), o.defineProperty(this, "_locale", { value: this._resolveLocale(t) });
    var i = this._findPluralRuleFunction(this._locale),
        a = this._compilePattern(n, t, r, i),
        l = this;
    this.format = function (e) {
        return l._format(a, e);
    };
}
(t.default = s),
    o.defineProperty(s, "formats", {
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
    o.defineProperty(s, "__localeData__", { value: o.objCreate(null) }),
    o.defineProperty(s, "__addLocaleData", {
        value: function (e) {
            if (!(e && e.locale))
                throw Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            s.__localeData__[e.locale.toLowerCase()] = e;
        },
    }),
    o.defineProperty(s, "__parse", { value: a.default.parse }),
    o.defineProperty(s, "defaultLocale", { enumerable: !0, writable: !0, value: void 0 }),
    (s.prototype.resolvedOptions = function () {
        return { locale: this._locale };
    }),
    (s.prototype._compilePattern = function (e, t, r, n) {
        return new i.default(t, r, n).compile(e);
    }),
    (s.prototype._findPluralRuleFunction = function (e) {
        for (var t = s.__localeData__, r = t[e.toLowerCase()]; r; ) {
            if (r.pluralRuleFunction) return r.pluralRuleFunction;
            r = r.parentLocale && t[r.parentLocale.toLowerCase()];
        }
        throw Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e);
    }),
    (s.prototype._format = function (e, t) {
        var r,
            o,
            i,
            a,
            s,
            l = "";
        for (r = 0, o = e.length; r < o; r += 1) {
            if ("string" == typeof (i = e[r])) {
                l += i;
                continue;
            }
            if (((a = i.id), !(t && n.hop.call(t, a)))) throw Error("A value must be provided for: " + a);
            (s = t[a]), i.options ? (l += this._format(i.getOption(s), t)) : (l += i.format(s));
        }
        return l;
    }),
    (s.prototype._mergeFormats = function (e, t) {
        var r,
            i,
            a = {};
        for (r in e) n.hop.call(e, r) && ((a[r] = i = o.objCreate(e[r])), t && n.hop.call(t, r) && n.extend(i, t[r]));
        return a;
    }),
    (s.prototype._resolveLocale = function (e) {
        "string" == typeof e && (e = [e]), (e = (e || []).concat(s.defaultLocale));
        var t,
            r,
            n,
            o,
            i = s.__localeData__;
        for (t = 0, r = e.length; t < r; t += 1)
            for (n = e[t].toLowerCase().split("-"); n.length; ) {
                if ((o = i[n.join("-")])) return o.locale;
                n.pop();
            }
        var a = e.pop();
        throw Error(
            "No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + a,
        );
    });
