e = n.nmd(e);
var i =
    (this && this.__awaiter) ||
    function (e, t, n, i) {
        function r(e) {
            return e instanceof n
                ? e
                : new n(function (t) {
                      t(e);
                  });
        }
        return new (n || (n = Promise))(function (n, a) {
            function s(e) {
                try {
                    l(i.next(e));
                } catch (e) {
                    a(e);
                }
            }
            function o(e) {
                try {
                    l(i.throw(e));
                } catch (e) {
                    a(e);
                }
            }
            function l(e) {
                e.done ? n(e.value) : r(e.value).then(s, o);
            }
            l((i = i.apply(e, t || [])).next());
        });
    };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.MessageLoader = void 0), (t.loadAllMessagesInLocale = o), (t.waitForAllDefaultIntlMessagesLoaded = l), (t.createLoader = u);
let r = n(741271);
class a {
    constructor(t, n, a) {
        if (((this.messageKeys = t), (this.messages = {}), (this.localeImportMap = n), (this.supportedLocales = Object.keys(n)), (this.defaultLocale = a), (this._localeLoadingPromises = {}), (this._parseCache = {}), (this._subscribers = new Set()), (this.fallbackMessage = new r.InternalIntlMessage([], this.defaultLocale)), e.hot))
            for (let [t, r] of Object.entries(n))
                e.hot.accept(r, () =>
                    i(this, void 0, void 0, function* () {
                        yield this._loadLocale(t), (this._parseCache = {});
                    })
                );
    }
    withDebugValues(e, t) {
        (this._debugKeyMap = e), (this._localeFileMap = t);
    }
    get(e, t) {
        let n = this.getMessageValue(e, t);
        if (null != n) return n;
        if (this.isLocaleLoading(t) && !this.isLocaleLoaded(this.defaultLocale)) return this.fallbackMessage;
        let i = this.getMessageValue(e, this.defaultLocale);
        if (null != i) return i;
        let r = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : void 0,
            a = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
            s = null != this._localeFileMap ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})` : this.defaultLocale;
        return console.warn(`Requested message ${r} does not have a value in the requested locale ${a} nor the default locale ${s}`), this.fallbackMessage;
    }
    getMessageValue(e, t) {
        var n, i, a;
        let s = null === (n = this._parseCache[t]) || void 0 === n ? void 0 : n[e];
        if (s) return s;
        if (null == this.messages[t]) {
            this.supportedLocales.includes(t) && this._loadLocale(t);
            return;
        }
        if (e in this.messages[t]) {
            let n = this.messages[t][e],
                s = new r.InternalIntlMessage(n, t);
            return ((null !== (i = (a = this._parseCache)[t]) && void 0 !== i ? i : (a[t] = {}))[e] = s), s;
        }
    }
    getBinds() {
        let e = {};
        for (let t of this.messageKeys) e[t] = this.get.bind(this, t);
        return e;
    }
    _loadLocale(e) {
        return i(this, void 0, void 0, function* () {
            var t, n, i, r;
            if (null != this.messages[e]) return;
            if ((null === (t = this._localeLoadingPromises[e]) || void 0 === t ? void 0 : t.current) != null) {
                yield null === (n = this._localeLoadingPromises[e]) || void 0 === n ? void 0 : n.current;
                return;
            }
            if (null == this.localeImportMap[e]) {
                if (!this.supportedLocales.includes(e)) return;
                throw Error(`Requested to load locale ${e}, which should be supported, but no source for translation data was provided.`);
            }
            let a = this.localeImportMap[e](),
                s = null !== (r = null === (i = this._localeLoadingPromises[e]) || void 0 === i ? void 0 : i.initialized) && void 0 !== r && r;
            (this._localeLoadingPromises[e] = {
                initialized: s,
                current: a
            }),
                (this.messages[e] = (yield a).default),
                (this._localeLoadingPromises[e] = {
                    initialized: !0,
                    current: void 0
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
        return (null === (t = this._localeLoadingPromises[e]) || void 0 === t ? void 0 : t.current) != null;
    }
    isLocaleLoaded(e, t = !1) {
        let n = this._localeLoadingPromises[e];
        return null != n && !1 != n.initialized && (!t || null == n.current);
    }
    waitForLocaleLoaded(e) {
        return i(this, arguments, void 0, function* (e, t = !1) {
            let n = this._localeLoadingPromises[e];
            if (null == n) return this._loadLocale(e);
            (!n.initialized || t) && (yield n.current);
        });
    }
    waitForDefaultLocale() {
        return i(this, arguments, void 0, function* (e = !1) {
            return this.waitForLocaleLoaded(this.defaultLocale, e);
        });
    }
}
t.MessageLoader = a;
let s = [];
function o(e) {
    return i(this, void 0, void 0, function* () {
        yield Promise.all(s.map((t) => t._loadLocale(e)));
    });
}
function l() {
    return i(this, void 0, void 0, function* () {
        yield Promise.all(s.map((e) => e.waitForDefaultLocale()));
    });
}
function u(e, t, n) {
    let i = new a(e, t, n);
    return s.push(i), i;
}
