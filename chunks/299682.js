Object.defineProperty(t, '__esModule', { value: !0 }), (t.IntlManager = t.DEFAULT_LOCALE = void 0);
let r = n(223794),
    i = n(481078),
    o = n(707073);
t.DEFAULT_LOCALE = 'en-US';
class a {
    constructor({ initialLocale: e = t.DEFAULT_LOCALE, defaultLocale: n = t.DEFAULT_LOCALE, formatConfig: i = r.DEFAULT_FORMAT_CONFIG, forceLookupMatcher: a = !1 }) {
        (this.onLocaleChange = (e) => (this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e))), (this.currentLocale = e), (this.defaultLocale = n), (this.formatConfig = i), (this._forceLookupMatcher = a), (this.data = (0, o.makeDataFormatters)([this.currentLocale, this.defaultLocale], this.formatConfig, this._forceLookupMatcher)), (this._localeSubscriptions = new Set());
    }
    withFormatters(e) {
        for (let [t, n] of Object.entries(e)) this[t] = this.makeFormatFunction(n);
        return this;
    }
    makeFormatFunction({ format: e, builder: t }) {
        let n = e.bind(this);
        return (e, r) => (null == e ? null : n(e(this.currentLocale), r, t));
    }
    setLocale(e) {
        (this.currentLocale = e), (this.data = (0, o.makeDataFormatters)([this.currentLocale, this.defaultLocale], this.formatConfig, this._forceLookupMatcher)), this.emitLocaleChange(e);
    }
    emitLocaleChange(e) {
        for (let t of this._localeSubscriptions) t(e);
    }
    string(e) {
        return null == e ? '' : e(this.currentLocale).reserialize();
    }
    reserialize(e) {
        if (null == e) return '';
        let t = e(this.currentLocale);
        return 'string' == typeof t ? t : t.reserialize();
    }
    bindFormatValues(e, t, n) {
        return (0, i.bindFormatValues)(e, t.ast, [this.currentLocale, this.defaultLocale], this.data, this.formatConfig, n);
    }
}
t.IntlManager = a;
