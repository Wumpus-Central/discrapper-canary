Object.defineProperty(t, '__esModule', { value: !0 }), (t.IntlManager = t.DEFAULT_LOCALE = void 0);
let i = n(716377),
    r = n(756880),
    a = n(577044);
t.DEFAULT_LOCALE = 'en-US';
class s {
    constructor({ initialLocale: e = t.DEFAULT_LOCALE, defaultLocale: n = t.DEFAULT_LOCALE, formatConfig: r = i.DEFAULT_FORMAT_CONFIG, forceLookupMatcher: s = !1 }) {
        (this.onLocaleChange = (e) => (this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e))), (this.currentLocale = e), (this.defaultLocale = n), (this.formatConfig = r), (this._forceLookupMatcher = s), (this.data = (0, a.makeDataFormatters)([this.currentLocale, this.defaultLocale], this.formatConfig, this._forceLookupMatcher)), (this._localeSubscriptions = new Set());
    }
    withFormatters(e) {
        for (let [t, n] of Object.entries(e)) this[t] = this.makeFormatFunction(n);
        return this;
    }
    makeFormatFunction({ format: e, builder: t }) {
        let n = e.bind(this);
        return (e, i) => (null == e ? null : n(e(this.currentLocale), i, t));
    }
    setLocale(e) {
        (this.currentLocale = e), (this.data = (0, a.makeDataFormatters)([this.currentLocale, this.defaultLocale], this.formatConfig, this._forceLookupMatcher)), this.emitLocaleChange(e);
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
        return (0, r.bindFormatValues)(e, t.ast, [this.currentLocale, this.defaultLocale], this.data, this.formatConfig, n);
    }
}
t.IntlManager = s;
