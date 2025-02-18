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
let r = n(151804);
class a {
    constructor(t, n) {
        if (((this.messages = {}), (this.localeImportMap = t), (this.supportedLocales = Object.keys(t)), (this.defaultLocale = n), (this._localeLoadingPromises = {}), (this._parseCache = {}), (this._subscribers = new Set()), (this.fallbackMessage = new r.InternalIntlMessage([], this.defaultLocale)), e.hot))
            for (let [n, r] of Object.entries(t))
                e.hot.accept(r, () =>
                    i(this, void 0, void 0, function* () {
                        yield this._loadLocale(n), (this._parseCache = {});
                    })
                );
    }
    withDebugValues(e, t) {
        (this._debugKeyMap = e), (this._localeFileMap = t);
    }
    fallbackWith(e) {
        let t = this;
        for (; null != t; ) if ((t = t._parentLoader) === this) throw Error('Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve');
        (this.fallbackLoader = e), (e._parentLoader = this);
    }
    get(e, t) {
        var n;
        let i = this.getMessageValue(e, t);
        if (null != i) return i;
        if (this.isLocaleLoading(t) && !this.isLocaleLoaded(this.defaultLocale)) return this.fallbackMessage;
        let r = this.getMessageValue(e, this.defaultLocale);
        if (null != r) return r;
        let a = null === (n = this.fallbackLoader) || void 0 === n ? void 0 : n.get(e, t);
        if (null != a) return a;
        let s = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : void 0,
            o = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
            l = null != this._localeFileMap ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})` : this.defaultLocale;
        return console.warn(`Requested message ${s} does not have a value in the requested locale ${o} nor the default locale ${l}`), this.fallbackMessage;
    }
    getMessageValue(e, t) {
        var n, i, a;
        let s = null === (n = this._parseCache[t]) || void 0 === n ? void 0 : n[e];
        if (s) return s;
        if (null == this.messages[t]) {
            this.supportedLocales.includes(t) && this._loadLocale(t);
            return;
        }
        let o = this.messages[t][e];
        if (null != o) {
            let n = new r.InternalIntlMessage(o, t);
            return ((null !== (i = (a = this._parseCache)[t]) && void 0 !== i ? i : (a[t] = {}))[e] = n), n;
        }
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
function u(e, t) {
    let n = new a(e, t);
    return s.push(n), n;
}
