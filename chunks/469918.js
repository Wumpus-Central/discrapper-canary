var i =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (!r || ('get' in r ? !t.__esModule : r.writable || r.configurable)) &&
                      (r = {
                          enumerable: !0,
                          get: function () {
                              return t[n];
                          }
                      }),
                      Object.defineProperty(e, i, r);
              }
            : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
              }),
    r =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.makeMessagesProxy = t.chainMessagesObjects = t.MessageLoader = t.waitForAllDefaultIntlMessagesLoaded = t.loadAllMessagesInLocale = t.createLoader = t.DEFAULT_LOCALE = t.IntlManager = t.runtimeHashMessageKey = t.bindFormatValues = t.FormatBuilder = t.dataFormatterCache = t.makeDataFormatters = void 0);
var a = n(718219);
Object.defineProperty(t, 'makeDataFormatters', {
    enumerable: !0,
    get: function () {
        return a.makeDataFormatters;
    }
});
var s = n(12473);
Object.defineProperty(t, 'dataFormatterCache', {
    enumerable: !0,
    get: function () {
        return s.dataFormatterCache;
    }
});
var o = n(388389);
Object.defineProperty(t, 'FormatBuilder', {
    enumerable: !0,
    get: function () {
        return o.FormatBuilder;
    }
}),
    Object.defineProperty(t, 'bindFormatValues', {
        enumerable: !0,
        get: function () {
            return o.bindFormatValues;
        }
    }),
    r(n(275180), t);
var l = n(380753);
Object.defineProperty(t, 'runtimeHashMessageKey', {
    enumerable: !0,
    get: function () {
        return l.runtimeHashMessageKey;
    }
});
var u = n(387411);
Object.defineProperty(t, 'IntlManager', {
    enumerable: !0,
    get: function () {
        return u.IntlManager;
    }
}),
    Object.defineProperty(t, 'DEFAULT_LOCALE', {
        enumerable: !0,
        get: function () {
            return u.DEFAULT_LOCALE;
        }
    });
var c = n(890650);
Object.defineProperty(t, 'createLoader', {
    enumerable: !0,
    get: function () {
        return c.createLoader;
    }
}),
    Object.defineProperty(t, 'loadAllMessagesInLocale', {
        enumerable: !0,
        get: function () {
            return c.loadAllMessagesInLocale;
        }
    }),
    Object.defineProperty(t, 'waitForAllDefaultIntlMessagesLoaded', {
        enumerable: !0,
        get: function () {
            return c.waitForAllDefaultIntlMessagesLoaded;
        }
    }),
    Object.defineProperty(t, 'MessageLoader', {
        enumerable: !0,
        get: function () {
            return c.MessageLoader;
        }
    });
var d = n(870110);
Object.defineProperty(t, 'chainMessagesObjects', {
    enumerable: !0,
    get: function () {
        return d.chainMessagesObjects;
    }
}),
    Object.defineProperty(t, 'makeMessagesProxy', {
        enumerable: !0,
        get: function () {
            return d.makeMessagesProxy;
        }
    });
