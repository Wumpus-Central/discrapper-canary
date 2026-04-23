"use strict";
n.d(t, { T: () => _ });
var r = n(143236),
    i = n(424899),
    s = n.n(i),
    a = n(175259),
    o = n(463303);
(n.g.IntlMessageFormat = s()),
    n(718931),
    n(653802),
    n(361715),
    n(377815),
    n(144645),
    n(396547),
    n(329096),
    n(96149),
    n(161700),
    n(920890),
    n(117635),
    n(222425),
    n(342881),
    n(298566),
    n(801272),
    n(274306),
    n(320207),
    n(427980),
    n(425636),
    n(925835),
    n(744661),
    n(570309),
    n(15300),
    n(914614),
    n(162752),
    n(570885),
    n(29274),
    n(525919),
    delete n.g.IntlMessageFormat,
    "u" < typeof Intl && n(426586);
let l = "en-US";
class u {
    _context = { messages: {}, defaultMessages: {}, locale: l };
    _parsedMessages = {};
    _getParsedMessages;
    constructor(e) {
        this._getParsedMessages = e;
    }
    getMessages() {
        return this._parsedMessages;
    }
}
class c extends u {
    refresh(e) {
        (this._context = e), this._refresh(e, this._parsedMessages);
    }
    _refresh = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                Object.keys(t.defaultMessages).forEach((r) => {
                    Object.defineProperty(n, r, {
                        configurable: !0,
                        get: () => (delete n[r], (n[r] = e._getParsedMessages(t, r, e._refresh))),
                    });
                }),
                n
            );
        };
    })();
}
class d extends u {
    constructor(e) {
        super(e), (this._parsedMessages = this._createProxy(this._context));
    }
    refresh(e) {
        Object.assign(this._context, e),
            Object.keys(this._parsedMessages).forEach((e) => {
                delete this._parsedMessages[e];
            });
    }
    _createProxy = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e._context;
            return new Proxy({}, { get: (n, r) => n[r] || (n[r] = e._getParsedMessages(t, r, e._createProxy)) });
        };
    })();
}
class _ extends r.EventEmitter {
    Messages;
    loadPromise = Promise.resolve();
    initialLanguageLoad;
    resolveLanguageLoaded = () => {};
    _languages = [];
    _provider;
    _chosenLocale = "";
    _requestedLocale;
    _getMessages;
    constructor({ initialLocale: e, getMessages: t, getLanguages: r }) {
        super(),
            (this.initialLanguageLoad = new Promise((e, t) => {
                this.resolveLanguageLoaded = e;
            })),
            Intl.__addLocaleData && Intl.__addLocaleData(n(217671)),
            (this._languages = r()),
            (this._provider = null != window.Proxy ? new d(this._getParsedMessages) : new c(this._getParsedMessages)),
            (this.Messages = this._provider.getMessages()),
            (this._getMessages = t);
        try {
            new Intl.NumberFormat(e, {}), this.setLocale(e || this.getDefaultLocale());
        } catch (e) {
            this.setLocale(this.getDefaultLocale());
        }
        this.on("newListener", this._handleNewListener);
    }
    updateMessagesForExperiment(e, t) {
        let n = this._fetchMessages(e);
        n instanceof Promise
            ? n.then((n) => {
                  this._applyMessagesForLocale(t(n), e);
              })
            : this._applyMessagesForLocale(t(n), e);
    }
    setLocale(e) {
        if (this._chosenLocale === e) return;
        this._requestedLocale = e;
        let t = this._chosenLocale;
        (this._chosenLocale = e),
            (this.loadPromise = this._loadMessagesForLocale(e)),
            this.emit("locale", this._chosenLocale, t);
    }
    setUpdateRules(e) {
        (0, o.Zs)(e);
    }
    getLanguages() {
        return this._languages;
    }
    getAvailableLocales() {
        return this._languages
            .filter((e) => {
                let { enabled: t } = e;
                return t;
            })
            .map((e) => {
                let { code: t, name: n } = e;
                return { value: t, name: n, localizedName: this.Messages[t] ?? n };
            })
            .sort((e, t) => {
                let { name: n } = e,
                    { name: r } = t;
                return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? -1 : +(n > r);
            });
    }
    getLocale() {
        return this._chosenLocale;
    }
    getLocaleInfo() {
        return this._languages.find((e) => e.code === this._chosenLocale);
    }
    getDefaultLocale() {
        let e = (0, a.c)() ?? l,
            t = this._languages
                .filter((e) => {
                    let { enabled: t } = e;
                    return t;
                })
                .map((e) => {
                    let { code: t } = e;
                    return t;
                });
        if (t.includes(e)) return e;
        let n = e.split("-");
        return t.includes(n[0])
            ? n[0]
            : "zh" === n[0] && n.length > 1 && "Hant" === n[1]
              ? (t.find((e) => "zh-TW" === e) ?? l)
              : (t.find((e) => e.split("-")[0] === n[0]) ?? l);
    }
    _loadMessagesForLocale(e) {
        let t = this._fetchMessages(e);
        return t instanceof Promise
            ? t.then((t) => this._applyMessagesForLocale(t, e))
            : (this._applyMessagesForLocale(t, e), Promise.resolve());
    }
    _applyMessagesForLocale(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(l);
        this._requestedLocale === t &&
            (this._provider.refresh({ messages: e, defaultMessages: n, locale: t }), this.resolveLanguageLoaded());
    }
    _getParsedMessages = (e, t, n) => {
        let { messages: r, defaultMessages: i, locale: s } = e,
            a = r[t] || i[t];
        if ("object" == typeof a) return n({ messages: a, defaultMessages: i[t], locale: s });
        try {
            return (0, o.I4)(a, s);
        } catch (e) {
            if (
                (console.warn(`Failed parsing intl key '${String(t)}' in locale '${s}' defaulting to English`, e),
                "string" == typeof (a = i[t]))
            )
                return (0, o.I4)(a, s);
        }
        return "";
    };
    _findMessages(e) {
        let t = this._fetchMessages(e);
        if (t instanceof Promise) throw Error("Messages are still loading.");
        return t;
    }
    _fetchMessages(e) {
        let t =
            e === l
                ? () => {
                      throw Error(`Error Loading ${l}`);
                  }
                : () =>
                      (console.warn("Unsupported Locale", e), -1 === e.indexOf("-"))
                          ? this._fetchMessages(l)
                          : this._fetchMessages(e.split("-")[0]);
        try {
            let n = this._getMessages(e);
            return n instanceof Promise ? n.catch(t) : n;
        } catch (e) {
            return t();
        }
    }
    _handleNewListener = (e) => {
        "locale" === e && this.emit(e, this._chosenLocale);
    };
}
