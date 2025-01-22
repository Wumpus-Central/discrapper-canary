r.d(n, {
    C: function () {
        return f;
    }
});
var i = r(259630),
    a = r(816552),
    o = r(739292),
    s = r(650117);
function l(e, n) {
    return n
        ? (0, i.pi)(
              (0, i.pi)((0, i.pi)({}, e || {}), n || {}),
              Object.keys(e).reduce(function (r, a) {
                  return (r[a] = (0, i.pi)((0, i.pi)({}, e[a]), n[a] || {})), r;
              }, {})
          )
        : e;
}
function u(e, n) {
    return n
        ? Object.keys(e).reduce(
              function (r, i) {
                  return (r[i] = l(e[i], n[i])), r;
              },
              (0, i.pi)({}, e)
          )
        : e;
}
function c(e) {
    return {
        create: function () {
            return {
                get: function (n) {
                    return e[n];
                },
                set: function (n, r) {
                    e[n] = r;
                }
            };
        }
    };
}
function d(e) {
    return (
        void 0 === e &&
            (e = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }),
        {
            getNumberFormat: (0, a.H)(
                function () {
                    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return new ((e = Intl.NumberFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
                },
                {
                    cache: c(e.number),
                    strategy: a.A.variadic
                }
            ),
            getDateTimeFormat: (0, a.H)(
                function () {
                    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
                },
                {
                    cache: c(e.dateTime),
                    strategy: a.A.variadic
                }
            ),
            getPluralRules: (0, a.H)(
                function () {
                    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return new ((e = Intl.PluralRules).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
                },
                {
                    cache: c(e.pluralRules),
                    strategy: a.A.variadic
                }
            )
        }
    );
}
var f = (function () {
    function e(n, r, a, o) {
        void 0 === r && (r = e.defaultLocale);
        var l = this;
        if (
            ((this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }),
            (this.format = function (e) {
                var n = l.formatToParts(e);
                if (1 === n.length) return n[0].value;
                var r = n.reduce(function (e, n) {
                    return e.length && n.type === s.du.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += n.value) : e.push(n.value), e;
                }, []);
                return r.length <= 1 ? r[0] || '' : r;
            }),
            (this.formatToParts = function (e) {
                return (0, s.FK)(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message);
            }),
            (this.resolvedOptions = function () {
                var e;
                return { locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0] };
            }),
            (this.getAst = function () {
                return l.ast;
            }),
            (this.locales = r),
            (this.resolvedLocale = e.resolveLocale(r)),
            'string' == typeof n)
        ) {
            if (((this.message = n), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            var c = o || {},
                f = (c.formatters, (0, i._T)(c, ['formatters']));
            this.ast = e.__parse(n, (0, i.pi)((0, i.pi)({}, f), { locale: this.resolvedLocale }));
        } else this.ast = n;
        if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
        (this.formats = u(e.formats, a)), (this.formatters = (o && o.formatters) || d(this.formatterCache));
    }
    return (
        Object.defineProperty(e, 'defaultLocale', {
            get: function () {
                return !e.memoizedDefaultLocale && (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.memoizedDefaultLocale = null),
        (e.resolveLocale = function (e) {
            if (void 0 !== Intl.Locale) {
                var n = Intl.NumberFormat.supportedLocalesOf(e);
                return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale('string' == typeof e ? e : e[0]);
            }
        }),
        (e.__parse = o.Qc),
        (e.formats = {
            number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: 'currency' },
                percent: { style: 'percent' }
            },
            date: {
                short: {
                    month: 'numeric',
                    day: 'numeric',
                    year: '2-digit'
                },
                medium: {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                },
                long: {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                },
                full: {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            },
            time: {
                short: {
                    hour: 'numeric',
                    minute: 'numeric'
                },
                medium: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                },
                long: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short'
                },
                full: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short'
                }
            }
        }),
        e
    );
})();
