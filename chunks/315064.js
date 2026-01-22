n.d(t, {
    T: () => p,
}),
    n(896048),
    n(638769),
    n(747238),
    n(65821);
var r = n(143236),
    i = n(424899),
    a = n.n(i),
    s = n(175259),
    o = n(463303);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
(n.g.IntlMessageFormat = a()),
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
let c = "en-US";
class u {
    getMessages() {
        return this._parsedMessages;
    }
    constructor(e) {
        l(this, "_context", {
            messages: {},
            defaultMessages: {},
            locale: c,
        }),
            l(this, "_parsedMessages", {}),
            l(this, "_getParsedMessages", void 0),
            (this._getParsedMessages = e);
    }
}
class d extends u {
    refresh(e) {
        (this._context = e), this._refresh(e, this._parsedMessages);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            l(this, "_refresh", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (
                    Object.keys(e.defaultMessages).forEach((r) => {
                        Object.defineProperty(n, r, {
                            configurable: !0,
                            get: () => (delete n[r], (n[r] = t._getParsedMessages(e, r, t._refresh))),
                        });
                    }),
                    n
                );
            });
    }
}
class f extends u {
    refresh(e) {
        Object.assign(this._context, e),
            Object.keys(this._parsedMessages).forEach((e) => {
                delete this._parsedMessages[e];
            });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            l(this, "_createProxy", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t._context;
                return new Proxy(
                    {},
                    {
                        get: (n, r) => n[r] || (n[r] = t._getParsedMessages(e, r, t._createProxy)),
                    },
                );
            }),
            (this._parsedMessages = this._createProxy(this._context));
    }
}
class p extends r.EventEmitter {
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
                var t;
                let { code: n, name: r } = e;
                return {
                    value: n,
                    name: r,
                    localizedName: null != (t = this.Messages[n]) ? t : r,
                };
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
        var e, t, n;
        let r = null != (e = (0, s.c)()) ? e : c,
            i = this._languages
                .filter((e) => {
                    let { enabled: t } = e;
                    return t;
                })
                .map((e) => {
                    let { code: t } = e;
                    return t;
                });
        if (i.includes(r)) return r;
        let a = r.split("-");
        return i.includes(a[0])
            ? a[0]
            : "zh" === a[0] && a.length > 1 && "Hant" === a[1]
              ? null != (n = i.find((e) => "zh-TW" === e))
                  ? n
                  : c
              : null != (t = i.find((e) => e.split("-")[0] === a[0]))
                ? t
                : c;
    }
    _loadMessagesForLocale(e) {
        let t = this._fetchMessages(e);
        return t instanceof Promise
            ? t.then((t) => this._applyMessagesForLocale(t, e))
            : (this._applyMessagesForLocale(t, e), Promise.resolve());
    }
    _applyMessagesForLocale(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(c);
        this._requestedLocale === t &&
            (this._provider.refresh({
                messages: e,
                defaultMessages: n,
                locale: t,
            }),
            this.resolveLanguageLoaded());
    }
    _findMessages(e) {
        let t = this._fetchMessages(e);
        if (t instanceof Promise) throw Error("Messages are still loading.");
        return t;
    }
    _fetchMessages(e) {
        let t =
            e === c
                ? () => {
                      throw Error("Error Loading ".concat(c));
                  }
                : () =>
                      (console.warn("Unsupported Locale", e), -1 === e.indexOf("-"))
                          ? this._fetchMessages(c)
                          : this._fetchMessages(e.split("-")[0]);
        try {
            let n = this._getMessages(e);
            return n instanceof Promise ? n.catch(t) : n;
        } catch (e) {
            return t();
        }
    }
    constructor({ initialLocale: e, getMessages: t, getLanguages: r }) {
        super(),
            l(this, "Messages", void 0),
            l(this, "loadPromise", Promise.resolve()),
            l(this, "initialLanguageLoad", void 0),
            l(this, "resolveLanguageLoaded", () => {}),
            l(this, "_languages", []),
            l(this, "_provider", void 0),
            l(this, "_chosenLocale", ""),
            l(this, "_requestedLocale", void 0),
            l(this, "_getMessages", void 0),
            l(this, "_getParsedMessages", (e, t, n) => {
                let { messages: r, defaultMessages: i, locale: a } = e,
                    s = r[t] || i[t];
                if ("object" == typeof s)
                    return n({
                        messages: s,
                        defaultMessages: i[t],
                        locale: a,
                    });
                try {
                    return (0, o.I4)(s, a);
                } catch (e) {
                    if (
                        (console.warn(
                            "Failed parsing intl key '"
                                .concat(String(t), "' in locale '")
                                .concat(a, "' defaulting to English"),
                            e,
                        ),
                        "string" == typeof (s = i[t]))
                    )
                        return (0, o.I4)(s, a);
                }
                return "";
            }),
            l(this, "_handleNewListener", (e) => {
                "locale" === e && this.emit(e, this._chosenLocale);
            }),
            (this.initialLanguageLoad = new Promise((e, t) => {
                this.resolveLanguageLoaded = e;
            })),
            Intl.__addLocaleData && Intl.__addLocaleData(n(217671)),
            (this._languages = r()),
            (this._provider = null != window.Proxy ? new f(this._getParsedMessages) : new d(this._getParsedMessages)),
            (this.Messages = this._provider.getMessages()),
            (this._getMessages = t);
        try {
            new Intl.NumberFormat(e, {}), this.setLocale(e || this.getDefaultLocale());
        } catch (e) {
            this.setLocale(this.getDefaultLocale());
        }
        this.on("newListener", this._handleNewListener);
    }
}
