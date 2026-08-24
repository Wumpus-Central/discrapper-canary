"use strict";
var n =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
            function a(e) {
                try {
                    l(n.next(e));
                } catch (e) {
                    o(e);
                }
            }
            function s(e) {
                try {
                    l(n.throw(e));
                } catch (e) {
                    o(e);
                }
            }
            function l(e) {
                var t;
                e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                          ? t
                          : new r(function (e) {
                                e(t);
                            })
                      ).then(a, s);
            }
            l((n = n.apply(e, t || [])).next());
        });
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MessageLoader = void 0),
    (t.loadAllMessagesInLocale = function (e) {
        return n(this, void 0, void 0, function* () {
            yield Promise.all(a.map((t) => t._loadLocale(e)));
        });
    }),
    (t.waitForAllDefaultIntlMessagesLoaded = function () {
        return n(this, void 0, void 0, function* () {
            yield Promise.all(a.map((e) => e.waitForDefaultLocale()));
        });
    }),
    (t.createLoader = function (e, t) {
        let r = new o(e, t);
        return a.push(r), r;
    });
let i = r(520092);
class o {
    constructor(e, t) {
        (this.messages = {}),
            (this.localeImportMap = e),
            (this.supportedLocales = Object.keys(e)),
            (this.defaultLocale = t),
            (this._localeLoadingPromises = {}),
            (this._parseCache = {}),
            (this._subscribers = new Set()),
            (this.fallbackMessage = new i.InternalIntlMessage([], this.defaultLocale));
    }
    withDebugValues(e, t) {
        (this._debugKeyMap = e), (this._localeFileMap = t);
    }
    fallbackWith(e) {
        let t = this;
        for (; null != t; )
            if ((t = t._parentLoader) === this)
                throw Error(
                    "Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve",
                );
        (this.fallbackLoader = e), (e._parentLoader = this);
    }
    get(e, t) {
        var r;
        let n = this.getMessageValue(e, t);
        if (null != n) return n;
        if (this.isLocaleLoading(t) && !this.isLocaleLoaded(this.defaultLocale)) return this.fallbackMessage;
        let i = this.getMessageValue(e, this.defaultLocale);
        if (null != i) return i;
        let o = null == (r = this.fallbackLoader) ? void 0 : r.get(e, t);
        if (null != o) return o;
        let a = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : e,
            s = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
            l =
                null != this._localeFileMap
                    ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})`
                    : this.defaultLocale;
        return (
            console.warn(
                `Requested message ${a} does not have a value in the requested locale ${s} nor the default locale ${l}`,
            ),
            this.fallbackMessage
        );
    }
    getMessageValue(e, t) {
        var r, n, o;
        let a = null == (r = this._parseCache[t]) ? void 0 : r[e];
        if (a) return a;
        if (null == this.messages[t]) {
            this.supportedLocales.includes(t) && this._loadLocale(t);
            return;
        }
        let s = this.messages[t][e];
        if (null != s) {
            let r = new i.InternalIntlMessage(s, t);
            return ((null != (n = (o = this._parseCache)[t]) ? n : (o[t] = {}))[e] = r), r;
        }
    }
    _loadLocale(e) {
        return n(this, void 0, void 0, function* () {
            var t, r, n, i;
            if (null != this.messages[e]) return;
            if ((null == (t = this._localeLoadingPromises[e]) ? void 0 : t.current) != null)
                return void (yield null == (r = this._localeLoadingPromises[e]) ? void 0 : r.current);
            if (null == this.localeImportMap[e])
                if (!this.supportedLocales.includes(e)) return;
                else
                    throw Error(
                        `Requested to load locale ${e}, which should be supported, but no source for translation data was provided.`,
                    );
            let o = this.localeImportMap[e](),
                a = null != (i = null == (n = this._localeLoadingPromises[e]) ? void 0 : n.initialized) && i;
            (this._localeLoadingPromises[e] = { initialized: a, current: o }),
                (this.messages[e] = (yield o).default),
                (this._localeLoadingPromises[e] = { initialized: !0, current: void 0 }),
                this.emitChange();
        });
    }
    emitChange() {
        for (let e of this._subscribers.values()) e();
    }
    onChange(e) {
        return this._subscribers.add(e), () => this._subscribers.delete(e);
    }
    isLocaleLoading(e) {
        var t;
        return (null == (t = this._localeLoadingPromises[e]) ? void 0 : t.current) != null;
    }
    isLocaleLoaded(e, t = !1) {
        let r = this._localeLoadingPromises[e];
        return null != r && !1 != r.initialized && (!t || null == r.current);
    }
    waitForLocaleLoaded(e) {
        return n(this, arguments, void 0, function* (e, t = !1) {
            let r = this._localeLoadingPromises[e];
            if (null == r) return this._loadLocale(e);
            (!r.initialized || t) && (yield r.current);
        });
    }
    waitForDefaultLocale() {
        return n(this, arguments, void 0, function* (e = !1) {
            return this.waitForLocaleLoaded(this.defaultLocale, e);
        });
    }
}
t.MessageLoader = o;
let a = [];
