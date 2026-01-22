n.d(t, {
    A: () => p,
}),
    n(747238),
    n(896048),
    n(591487),
    n(727858);
var r = n(280230),
    i = n.n(r),
    a = n(508675),
    s = n(7584),
    o = n(690521),
    l = n(704726);

function c(e, t, n) {
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

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {
    s: {
        requiredFirstCharacters: ["~"],
        match: i().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
    },
    highlight: {
        order: l.Ay.order,
        match: () => null,
    },
    emoji: {
        order: l.Ay.order,
        requiredFirstCharacters: [":"],
        match(e) {
            let t = s.Ay.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
            return null != t && "" !== s.Ay.convertNameToSurrogate(t[1]) ? t : null;
        },
        parse(e) {
            let [t, n] = e,
                r = s.Ay.convertNameToSurrogate(n);
            return null == r || "" === r
                ? {
                      type: "text",
                      content: t,
                  }
                : {
                      name: ":".concat(n, ":"),
                      surrogate: r,
                      src: o.Ay.getURL(r),
                  };
        },
    },
    customEmoji: {
        order: i().defaultRules.codeBlock.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, t, n) {
            let [r, i, s, o] = e,
                { guildId: l } = n,
                c = a.Ay.getDisambiguatedEmojiContext(l).getById(o),
                u = null == c || c.require_colons;
            return (
                null != c && (s = c.name),
                {
                    emojiId: o,
                    name: u ? ":".concat(s, ":") : s,
                    animated: "a" === i,
                }
            );
        },
    },
    text: {
        parse(e) {
            let t = s.Ay.findInlineEmojisFromSurrogates(e[0]),
                n = 0;
            return t.map((e) => {
                if ("text" === e.type) {
                    let t = {
                        index: n,
                        0: e.text,
                    };
                    return (
                        (n += e.text.length),
                        {
                            type: "text",
                            content: e.text,
                            originalMatch: t,
                        }
                    );
                }
                {
                    let t = {
                        index: n,
                        0: e.surrogate,
                    };
                    return (
                        (n += e.surrogate.length),
                        {
                            type: "emoji",
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: o.Ay.getURL(e.surrogate),
                            originalMatch: t,
                        }
                    );
                }
            });
        },
    },
    looseEm: f(u({}, i().defaultRules.em), {
        match: i().inlineRegex(
            RegExp(
                "^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)",
            ),
        ),
        parse: (e, t, n) => ({
            type: "em",
            content: t(e[1], n),
            originalMatch: e,
        }),
    }),
};
