n.d(t, { Z: () => O }), n(413496), n(433524), n(35282);
var a,
    r,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    c = n(159635),
    d = n.n(c),
    u = n(663993),
    m = n(770146),
    h = n(772096),
    p = n(428595),
    x = n(532901),
    f = n(963071),
    b = n(154257);
function g(e, t, n) {
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
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new RegExp("https?://".concat(null != (a = window.GLOBAL_ENV.CDN_HOST) ? a : ""));
function y(e) {
    return "string" == typeof e.content ? e.content : N(e.content);
}
let C = v(j({}, d().defaultRules), {
        heading: v(j({}, d().defaultRules.heading), {
            react(e, t, n) {
                let a = "h".concat(e.level);
                return (0, i.jsx)(
                    m.Z,
                    {
                        tag: a,
                        children: t(e.content, n),
                    },
                    n.key,
                );
            },
        }),
        paragraph: v(j({}, d().defaultRules.paragraph), {
            react: (e, t, n) =>
                (0, i.jsx)(
                    "div",
                    {
                        className: f.paragraph,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        }),
        strong: v(j({}, d().defaultRules.strong), { order: 6 }),
        em: v(j({}, d().defaultRules.em), { order: 6 }),
        u: v(j({}, d().defaultRules.u), { order: 5 }),
        del: v(j({}, d().defaultRules.del), { order: 6 }),
        link: v(j({}, h.ZP, (0, x.Z)({ enableBuildOverrides: !1 })), { order: 6 }),
        blockQuote: v(j({}, d().defaultRules.blockQuote), {
            react: (e, t, n) =>
                (0, i.jsx)(
                    "blockquote",
                    {
                        className: f.blockquote,
                        children: y(e),
                    },
                    n.key,
                ),
        }),
        image: v(j({}, d().defaultRules.image), {
            order: 6,
            match(e, t, n) {
                let a = d().defaultRules.image;
                if (null == a || null == a.match) return !1;
                let r = a.match(e, t, n);
                if (null != r && Array.isArray(r) && r.length >= 3) {
                    let e = r[2];
                    if ("string" == typeof e) return null != e.match(_) ? r : null;
                }
                return !1;
            },
        }),
        inlineCode: v(j({}, p.Z.RULES.inlineCode), {
            order: 6,
            react: (e, t, n) =>
                (0, i.jsx)(
                    "code",
                    {
                        className: f.codeInline,
                        children: y(e),
                    },
                    n.key,
                ),
        }),
        codeBlock: v(j({}, d().defaultRules.codeBlock), {
            react(e, t, a) {
                let r = () =>
                    (0, i.jsx)(
                        "pre",
                        {
                            children: (0, i.jsx)("code", {
                                className: o()(b.scrollbarGhostHairline, "hljs"),
                                children: y(e),
                            }),
                        },
                        a.key,
                    );
                return (0, i.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: r,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return r();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? r()
                                    : (0, i.jsx)(
                                          "pre",
                                          {
                                              children: (0, i.jsx)("code", {
                                                  className: o()(b.scrollbarGhostHairline, "hljs", n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value },
                                              }),
                                          },
                                          a.key,
                                      );
                            }
                        },
                    },
                    a.key,
                );
            },
        }),
    }),
    E = d().parserFor(C),
    N = d().reactFor(d().ruleOutput(C, "react"));
class S extends (r = l.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: a, output: r } = this.props,
            l = r(a("".concat(t, "\n\n"), j({ inline: !1 }, n)));
        return (0, i.jsx)("div", {
            className: o()(f.markdown, e),
            children: l,
        });
    }
}
g(S, "rules", C),
    g(S, "defaultProps", {
        parser: E,
        output: N,
    });
let O = S;
