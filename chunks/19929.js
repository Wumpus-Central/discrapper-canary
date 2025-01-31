n.d(t, { C: () => d });
var i = n(259630),
    r = n(816552),
    a = n(739292),
    s = n(650117);
function o(e, t) {
    return t
        ? (0, i.pi)(
              (0, i.pi)((0, i.pi)({}, e || {}), t || {}),
              Object.keys(e).reduce(function (n, r) {
                  return (n[r] = (0, i.pi)((0, i.pi)({}, e[r]), t[r] || {})), n;
              }, {})
          )
        : e;
}
function l(e, t) {
    return t
        ? Object.keys(e).reduce(
              function (n, i) {
                  return (n[i] = o(e[i], t[i])), n;
              },
              (0, i.pi)({}, e)
          )
        : e;
}
function u(e) {
    return {
        create: function () {
            return {
                get: function (t) {
                    return e[t];
                },
                set: function (t, n) {
                    e[t] = n;
                }
            };
        }
    };
}
function c(e) {
    return (
        void 0 === e &&
            (e = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }),
        {
            getNumberFormat: (0, r.H)(
                function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return new ((e = Intl.NumberFormat).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
                },
                {
                    cache: u(e.number),
                    strategy: r.A.variadic
                }
            ),
            getDateTimeFormat: (0, r.H)(
                function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
                },
                {
                    cache: u(e.dateTime),
                    strategy: r.A.variadic
                }
            ),
            getPluralRules: (0, r.H)(
                function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return new ((e = Intl.PluralRules).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
                },
                {
                    cache: u(e.pluralRules),
                    strategy: r.A.variadic
                }
            )
        }
    );
}
var d = (function () {
    function e(t, n, r, a) {
        void 0 === n && (n = e.defaultLocale);
        var o = this;
        if (
            ((this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }),
            (this.format = function (e) {
                var t = o.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var n = t.reduce(function (e, t) {
                    return e.length && t.type === s.du.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e;
                }, []);
                return n.length <= 1 ? n[0] || '' : n;
            }),
            (this.formatToParts = function (e) {
                return (0, s.FK)(o.ast, o.locales, o.formatters, o.formats, e, void 0, o.message);
            }),
            (this.resolvedOptions = function () {
                var e;
                return { locale: (null === (e = o.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0] };
            }),
            (this.getAst = function () {
                return o.ast;
            }),
            (this.locales = n),
            (this.resolvedLocale = e.resolveLocale(n)),
            'string' == typeof t)
        ) {
            if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            var u = a || {},
                d = (u.formatters, (0, i._T)(u, ['formatters']));
            this.ast = e.__parse(t, (0, i.pi)((0, i.pi)({}, d), { locale: this.resolvedLocale }));
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
        (this.formats = l(e.formats, r)), (this.formatters = (a && a.formatters) || c(this.formatterCache));
    }
    return (
        Object.defineProperty(e, 'defaultLocale', {
            get: function () {
                return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.memoizedDefaultLocale = null),
        (e.resolveLocale = function (e) {
            if (void 0 !== Intl.Locale) {
                var t = Intl.NumberFormat.supportedLocalesOf(e);
                return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
            }
        }),
        (e.__parse = a.Qc),
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
