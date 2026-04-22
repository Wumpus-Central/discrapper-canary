"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.IntlManager = t.DEFAULT_LOCALE = void 0);
let r = n(296604),
    i = n(621608),
    s = n(975656);
(t.DEFAULT_LOCALE = "en-US"),
    (t.IntlManager = class {
        constructor({
            initialLocale: e = t.DEFAULT_LOCALE,
            defaultLocale: n = t.DEFAULT_LOCALE,
            formatConfig: i = r.DEFAULT_FORMAT_CONFIG,
            forceLookupMatcher: a = !1,
        }) {
            (this.onLocaleChange = (e) => (
                this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e)
            )),
                (this.currentLocale = e),
                (this.defaultLocale = n),
                (this.formatConfig = i),
                (this._forceLookupMatcher = a),
                (this.data = (0, s.makeDataFormatters)(
                    [this.currentLocale, this.defaultLocale],
                    this.formatConfig,
                    this._forceLookupMatcher,
                )),
                (this._localeSubscriptions = new Set());
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
            (this.currentLocale = e),
                (this.data = (0, s.makeDataFormatters)(
                    [this.currentLocale, this.defaultLocale],
                    this.formatConfig,
                    this._forceLookupMatcher,
                )),
                this.emitLocaleChange(e);
        }
        emitLocaleChange(e) {
            for (let t of this._localeSubscriptions) t(e);
        }
        string(e) {
            return null == e ? "" : e(this.currentLocale).reserialize();
        }
        reserialize(e) {
            if (null == e) return "";
            let t = e(this.currentLocale);
            return "string" == typeof t ? t : t.reserialize();
        }
        bindFormatValues(e, t, n) {
            return (0, i.bindFormatValues)({
                Builder: e,
                nodes: t.ast,
                locales: [this.currentLocale, this.defaultLocale],
                dataFormatters: this.data,
                formatConfig: this.formatConfig,
                values: n,
                keyPrefix: "",
            });
        }
    });
