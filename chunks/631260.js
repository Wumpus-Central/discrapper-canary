var r =
    (this && this.__awaiter) ||
    function (e, t, n, r) {
        function i(e) {
            return e instanceof n
                ? e
                : new n(function (t) {
                      t(e);
                  });
        }
        return new (n || (n = Promise))(function (n, a) {
            function s(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    a(e);
                }
            }
            function o(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    a(e);
                }
            }
            function l(e) {
                e.done ? n(e.value) : i(e.value).then(s, o);
            }
            l((r = r.apply(e, t || [])).next());
        });
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MessageLoader = void 0),
    (t.loadAllMessagesInLocale = o),
    (t.waitForAllDefaultIntlMessagesLoaded = l),
    (t.createLoader = c);
let i = n(921034);
class a {
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
        let a = null == (n = this.fallbackLoader) ? void 0 : n.get(e, t);
        if (null != a) return a;
        let s = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : e,
            o = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
            l =
                null != this._localeFileMap
                    ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})`
                    : this.defaultLocale;
        return (
            console.warn(
                `Requested message ${s} does not have a value in the requested locale ${o} nor the default locale ${l}`,
            ),
            this.fallbackMessage
        );
    }
    getMessageValue(e, t) {
        var n, r, a;
        let s = null == (n = this._parseCache[t]) ? void 0 : n[e];
        if (s) return s;
        if (null == this.messages[t]) {
            this.supportedLocales.includes(t) && this._loadLocale(t);
            return;
        }
        let o = this.messages[t][e];
        if (null != o) {
            let n = new i.InternalIntlMessage(o, t);
            return ((null != (r = (a = this._parseCache)[t]) ? r : (a[t] = {}))[e] = n), n;
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
            let a = this.localeImportMap[e](),
                s = null != (i = null == (r = this._localeLoadingPromises[e]) ? void 0 : r.initialized) && i;
            (this._localeLoadingPromises[e] = {
                initialized: s,
                current: a,
            }),
                (this.messages[e] = (yield a).default),
                (this._localeLoadingPromises[e] = {
                    initialized: !0,
                    current: void 0,
                }),
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
t.MessageLoader = a;
let s = [];
function o(e) {
    return r(this, void 0, void 0, function* () {
        yield Promise.all(s.map((t) => t._loadLocale(e)));
    });
}
function l() {
    return r(this, void 0, void 0, function* () {
        yield Promise.all(s.map((e) => e.waitForDefaultLocale()));
    });
}
function c(e, t) {
    let n = new a(e, t);
    return s.push(n), n;
}
