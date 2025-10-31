n.d(t, { Z: () => N }), n(413496), n(433524), n(35282);
var r,
    i,
    a = n(951288),
    o = n(647438),
    s = n(120356),
    l = n.n(s),
    c = n(159635),
    u = n.n(c),
    d = n(663993),
    f = n(770146),
    _ = n(772096),
    p = n(428595),
    h = n(532901),
    m = n(963071),
    g = n(154257);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new RegExp("https?://".concat(null != (r = window.GLOBAL_ENV.CDN_HOST) ? r : ""));
function I(e) {
    return "string" == typeof e.content ? e.content : A(e.content);
}
let T = O(b({}, u().defaultRules), {
        heading: O(b({}, u().defaultRules.heading), {
            react(e, t, n) {
                let r = "h".concat(e.level);
                return (0, a.jsx)(
                    f.Z,
                    {
                        tag: r,
                        children: t(e.content, n),
                    },
                    n.key,
                );
            },
        }),
        paragraph: O(b({}, u().defaultRules.paragraph), {
            react: (e, t, n) =>
                (0, a.jsx)(
                    "div",
                    {
                        className: m.paragraph,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        }),
        strong: O(b({}, u().defaultRules.strong), { order: 6 }),
        em: O(b({}, u().defaultRules.em), { order: 6 }),
        u: O(b({}, u().defaultRules.u), { order: 5 }),
        del: O(b({}, u().defaultRules.del), { order: 6 }),
        link: O(b({}, _.ZP, (0, h.Z)({ enableBuildOverrides: !1 })), { order: 6 }),
        blockQuote: O(b({}, u().defaultRules.blockQuote), {
            react: (e, t, n) =>
                (0, a.jsx)(
                    "blockquote",
                    {
                        className: m.blockquote,
                        children: I(e),
                    },
                    n.key,
                ),
        }),
        image: O(b({}, u().defaultRules.image), {
            order: 6,
            match(e, t, n) {
                let r = u().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let i = r.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ("string" == typeof e) return null != e.match(v) ? i : null;
                }
                return !1;
            },
        }),
        inlineCode: O(b({}, p.Z.RULES.inlineCode), {
            order: 6,
            react: (e, t, n) =>
                (0, a.jsx)(
                    "code",
                    {
                        className: m.codeInline,
                        children: I(e),
                    },
                    n.key,
                ),
        }),
        codeBlock: O(b({}, u().defaultRules.codeBlock), {
            react(e, t, r) {
                let i = () =>
                    (0, a.jsx)(
                        "pre",
                        {
                            children: (0, a.jsx)("code", {
                                className: l()(g.scrollbarGhostHairline, "hljs"),
                                children: I(e),
                            }),
                        },
                        r.key,
                    );
                return (0, a.jsx)(
                    d.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: i,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? i()
                                    : (0, a.jsx)(
                                          "pre",
                                          {
                                              children: (0, a.jsx)("code", {
                                                  className: l()(g.scrollbarGhostHairline, "hljs", n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value },
                                              }),
                                          },
                                          r.key,
                                      );
                            }
                        },
                    },
                    r.key,
                );
            },
        }),
    }),
    S = u().parserFor(T),
    A = u().reactFor(u().ruleOutput(T, "react"));
class C extends (i = o.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: r, output: i } = this.props,
            o = i(r("".concat(t, "\n\n"), b({ inline: !1 }, n)));
        return (0, a.jsx)("div", {
            className: l()(m.markdown, e),
            children: o,
        });
    }
}
E(C, "rules", T),
    E(C, "defaultProps", {
        parser: S,
        output: A,
    });
let N = C;
