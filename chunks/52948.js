r.d(n, {
    L6: function () {
        return l;
    },
    Sn: function () {
        return c;
    },
    TB: function () {
        return p;
    },
    Z0: function () {
        return u;
    },
    ax: function () {
        return f;
    }
});
var i = r(259630),
    a = r(19929),
    o = r(816552),
    s = r(548097);
function l(e, n, r) {
    return (
        void 0 === r && (r = {}),
        n.reduce(function (n, i) {
            return i in e ? (n[i] = e[i]) : i in r && (n[i] = r[i]), n;
        }, {})
    );
}
var u = {
    formats: {},
    messages: {},
    timeZone: void 0,
    defaultLocale: 'en',
    defaultFormats: {},
    fallbackOnEmptyString: !0,
    onError: function (e) {},
    onWarn: function (e) {}
};
function c() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function d(e) {
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
function f(e) {
    void 0 === e && (e = c());
    var n = Intl.RelativeTimeFormat,
        r = Intl.ListFormat,
        s = Intl.DisplayNames,
        l = (0, o.H)(
            function () {
                for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
            },
            {
                cache: d(e.dateTime),
                strategy: o.A.variadic
            }
        ),
        u = (0, o.H)(
            function () {
                for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                return new ((e = Intl.NumberFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
            },
            {
                cache: d(e.number),
                strategy: o.A.variadic
            }
        ),
        f = (0, o.H)(
            function () {
                for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                return new ((e = Intl.PluralRules).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
            },
            {
                cache: d(e.pluralRules),
                strategy: o.A.variadic
            }
        );
    return {
        getDateTimeFormat: l,
        getNumberFormat: u,
        getMessageFormat: (0, o.H)(
            function (e, n, r, o) {
                return new a.C(
                    e,
                    n,
                    r,
                    (0, i.pi)(
                        {
                            formatters: {
                                getNumberFormat: u,
                                getDateTimeFormat: l,
                                getPluralRules: f
                            }
                        },
                        o || {}
                    )
                );
            },
            {
                cache: d(e.message),
                strategy: o.A.variadic
            }
        ),
        getRelativeTimeFormat: (0, o.H)(
            function () {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new (n.bind.apply(n, (0, i.ev)([void 0], e, !1)))();
            },
            {
                cache: d(e.relativeTime),
                strategy: o.A.variadic
            }
        ),
        getPluralRules: f,
        getListFormat: (0, o.H)(
            function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new (r.bind.apply(r, (0, i.ev)([void 0], e, !1)))();
            },
            {
                cache: d(e.list),
                strategy: o.A.variadic
            }
        ),
        getDisplayNames: (0, o.H)(
            function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new (s.bind.apply(s, (0, i.ev)([void 0], e, !1)))();
            },
            {
                cache: d(e.displayNames),
                strategy: o.A.variadic
            }
        )
    };
}
function p(e, n, r, i) {
    var a,
        o = e && e[n];
    if ((o && (a = o[r]), a)) return a;
    i(new s.wI('No '.concat(n, ' format named: ').concat(r)));
}
