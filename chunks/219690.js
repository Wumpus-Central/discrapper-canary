"use strict";
var r =
    (this && this.__awaiter) ||
    function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, s) {
            function a(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    s(e);
                }
            }
            function o(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    s(e);
                }
            }
            function l(e) {
                var t;
                e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                                e(t);
                            })
                      ).then(a, o);
            }
            l((r = r.apply(e, t || [])).next());
        });
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MessageLoader = void 0),
    (t.loadAllMessagesInLocale = function (e) {
        return r(this, void 0, void 0, function* () {
            yield Promise.all(a.map((t) => t._loadLocale(e)));
        });
    }),
    (t.waitForAllDefaultIntlMessagesLoaded = function () {
        return r(this, void 0, void 0, function* () {
            yield Promise.all(a.map((e) => e.waitForDefaultLocale()));
        });
    }),
    (t.createLoader = function (e, t) {
        let n = new s(e, t);
        return a.push(n), n;
    });
let i = n(880044);
class s {
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
        var n;
        let r = this.getMessageValue(e, t);
        if (null != r) return r;
        if (this.isLocaleLoading(t) && !this.isLocaleLoaded(this.defaultLocale)) return this.fallbackMessage;
        let i = this.getMessageValue(e, this.defaultLocale);
        if (null != i) return i;
        let s = null == (n = this.fallbackLoader) ? void 0 : n.get(e, t);
        if (null != s) return s;
        let a = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : e,
            o = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
            l =
                null != this._localeFileMap
                    ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})`
                    : this.defaultLocale;
        return (
            console.warn(
                `Requested message ${a} does not have a value in the requested locale ${o} nor the default locale ${l}`,
            ),
            this.fallbackMessage
        );
    }
    getMessageValue(e, t) {
        var n, r, s;
        let a = null == (n = this._parseCache[t]) ? void 0 : n[e];
        if (a) return a;
        if (null == this.messages[t]) {
            this.supportedLocales.includes(t) && this._loadLocale(t);
            return;
        }
        let o = this.messages[t][e];
        if (null != o) {
            let n = new i.InternalIntlMessage(o, t);
            return ((null != (r = (s = this._parseCache)[t]) ? r : (s[t] = {}))[e] = n), n;
        }
    }
    _loadLocale(e) {
        return r(this, void 0, void 0, function* () {
            var t, n, r, i;
            if (null != this.messages[e]) return;
            if ((null == (t = this._localeLoadingPromises[e]) ? void 0 : t.current) != null)
                return void (yield null == (n = this._localeLoadingPromises[e]) ? void 0 : n.current);
            if (null == this.localeImportMap[e])
                if (!this.supportedLocales.includes(e)) return;
                else
                    throw Error(
                        `Requested to load locale ${e}, which should be supported, but no source for translation data was provided.`,
                    );
            let s = this.localeImportMap[e](),
                a = null != (i = null == (r = this._localeLoadingPromises[e]) ? void 0 : r.initialized) && i;
            (this._localeLoadingPromises[e] = { initialized: a, current: s }),
                (this.messages[e] = (yield s).default),
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
        let n = this._localeLoadingPromises[e];
        return null != n && !1 != n.initialized && (!t || null == n.current);
    }
    waitForLocaleLoaded(e) {
        return r(this, arguments, void 0, function* (e, t = !1) {
            let n = this._localeLoadingPromises[e];
            if (null == n) return this._loadLocale(e);
            (!n.initialized || t) && (yield n.current);
        });
    }
    waitForDefaultLocale() {
        return r(this, arguments, void 0, function* (e = !1) {
            return this.waitForLocaleLoaded(this.defaultLocale, e);
        });
    }
}
t.MessageLoader = s;
let a = [];
