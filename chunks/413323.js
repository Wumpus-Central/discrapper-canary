"use strict";
let i, r;
n.d(t, { Ay: () => k, Zs: () => y });
var s = n(143236),
    a = n(424899),
    o = n.n(a),
    l = n(175259),
    d = n(791332),
    _ = n.n(d);
let { newline: u, paragraph: c, url: E, link: h, strong: m, u: f, br: g, em: p, image: A, text: I } = d.defaultRules,
    T = {
        newline: u,
        paragraph: c,
        url: E,
        link: {
            ...h,
            parse(e, t, n) {
                let i = h.parse(e, t, n);
                return (i.context = n.context), i;
            },
        },
        strong: m,
        u: f,
        br: g,
        em: p,
        image: A,
        hook: {
            order: I.order,
            match: (0, d.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, t, n) {
                let { context: i } = n;
                return { render: i[e[2]], content: t(e[1], n) };
            },
            react: (e, t, n) => e.render(t(e.content, n), n.key),
        },
        noparse: {
            order: I.order,
            match: (0, d.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, t, n) {
                let { unsafeContext: i } = n,
                    r = i[e[1]];
                return "string" != typeof r && (r = null != r ? r.toString() : ""), { type: "text", content: r };
            },
            react: (e) => e.content,
        },
        text: I,
    },
    S = /\{.+?\}/,
    N = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/,
    C = /!!/,
    R = /!!/g;
class O {
    message;
    hasMarkdown;
    intlMessage;
    constructor(e, t, n) {
        (this.message = n ? e : e.replace(R, "")),
            (this.hasMarkdown = n),
            (this.intlMessage = new (o())(this.message, t));
    }
    format(e) {
        if (!this.hasMarkdown) return this.intlMessage.format(e);
        let [t, n] = this.getContext(e);
        return i(this.intlMessage.format(t), t, n);
    }
    astFormat(e) {
        let [t, n] = this.getContext(e);
        return r(this.intlMessage.format(t), t, n);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let t = C.test(this.message),
            n = {};
        if (t) {
            let t = 0;
            for (let [i, r] of Object.entries(e)) this.message.includes(`!!{${i}}!!`) && ((n[++t] = r), (e[i] = t));
        }
        return [e, n];
    }
}
function y(e) {
    let t, n, s;
    (t = _().parserFor(e(T))),
        (n = _().reactFor(_().ruleOutput(T, "react"))),
        (i = (e, i, r) => {
            let s = !e.includes("\n\n");
            return s || (e += "\n\n"), n(t(e, { inline: s, context: i, unsafeContext: r }));
        }),
        (s = _().parserFor(T)),
        (r = (e, t, n) => s(e + "\n\n", { inline: !1, context: t, unsafeContext: n }));
}
function v(e, t) {
    if (null == e) return "";
    null == i && y(n(759794).A), (e = e.replace(/^\n+|\n+$/g, ""));
    let r = S.test(e),
        s = N.test(e);
    return r || s ? new O(e, t, s) : e;
}
(n.g.IntlMessageFormat = o()),
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
let D = "en-US";
class L {
    _context = { messages: {}, defaultMessages: {}, locale: D };
    _parsedMessages = {};
    _getParsedMessages;
    constructor(e) {
        this._getParsedMessages = e;
    }
    getMessages() {
        return this._parsedMessages;
    }
}
class b extends L {
    refresh(e) {
        (this._context = e), this._refresh(e, this._parsedMessages);
    }
    _refresh = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                Object.keys(t.defaultMessages).forEach((i) => {
                    Object.defineProperty(n, i, {
                        configurable: !0,
                        get: () => (delete n[i], (n[i] = e._getParsedMessages(t, i, e._refresh))),
                    });
                }),
                n
            );
        };
    })();
}
class w extends L {
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
            return new Proxy({}, { get: (n, i) => n[i] || (n[i] = e._getParsedMessages(t, i, e._createProxy)) });
        };
    })();
}
class P extends s.EventEmitter {
    Messages;
    loadPromise = Promise.resolve();
    initialLanguageLoad;
    resolveLanguageLoaded = () => {};
    _languages = [];
    _provider;
    _chosenLocale = "";
    _requestedLocale;
    _getMessages;
    constructor({ initialLocale: e, getMessages: t, getLanguages: i }) {
        super(),
            (this.initialLanguageLoad = new Promise((e, t) => {
                this.resolveLanguageLoaded = e;
            })),
            Intl.__addLocaleData && Intl.__addLocaleData(n(217671)),
            (this._languages = i()),
            (this._provider = null != window.Proxy ? new w(this._getParsedMessages) : new b(this._getParsedMessages)),
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
        y(e);
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
                    { name: i } = t;
                return (n = n.toLowerCase()) < (i = i.toLowerCase()) ? -1 : +(n > i);
            });
    }
    getLocale() {
        return this._chosenLocale;
    }
    getLocaleInfo() {
        return this._languages.find((e) => e.code === this._chosenLocale);
    }
    getDefaultLocale() {
        let e = (0, l.c)() ?? D,
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
              ? (t.find((e) => "zh-TW" === e) ?? D)
              : (t.find((e) => e.split("-")[0] === n[0]) ?? D);
    }
    _loadMessagesForLocale(e) {
        let t = this._fetchMessages(e);
        return t instanceof Promise
            ? t.then((t) => this._applyMessagesForLocale(t, e))
            : (this._applyMessagesForLocale(t, e), Promise.resolve());
    }
    _applyMessagesForLocale(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(D);
        this._requestedLocale === t &&
            (this._provider.refresh({ messages: e, defaultMessages: n, locale: t }), this.resolveLanguageLoaded());
    }
    _getParsedMessages = (e, t, n) => {
        let { messages: i, defaultMessages: r, locale: s } = e,
            a = i[t] || r[t];
        if ("object" == typeof a) return n({ messages: a, defaultMessages: r[t], locale: s });
        try {
            return v(a, s);
        } catch (e) {
            if (
                (console.warn(`Failed parsing intl key '${String(t)}' in locale '${s}' defaulting to English`, e),
                "string" == typeof (a = r[t]))
            )
                return v(a, s);
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
            e === D
                ? () => {
                      throw Error(`Error Loading ${D}`);
                  }
                : () =>
                      (console.warn("Unsupported Locale", e), -1 === e.indexOf("-"))
                          ? this._fetchMessages(D)
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
let k = P;
