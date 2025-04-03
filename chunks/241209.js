n.d(t, { Z: () => T }), n(474991), n(398202), n(301563);
var r,
    i,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(477660),
    d = n.n(c),
    u = n(663993),
    m = n(770146),
    g = n(772096),
    p = n(428595),
    h = n(532901),
    f = n(204227),
    b = n(283574);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new RegExp('https?://'.concat(null != (r = window.GLOBAL_ENV.CDN_HOST) ? r : ''));
function j(e) {
    return 'string' == typeof e.content ? e.content : S(e.content);
}
let O = _(x({}, d().defaultRules), {
        heading: _(x({}, d().defaultRules.heading), {
            react(e, t, n) {
                let r = 'h'.concat(e.level);
                return (0, s.jsx)(
                    m.Z,
                    {
                        tag: r,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        }),
        paragraph: _(x({}, d().defaultRules.paragraph), {
            react: (e, t, n) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: f.paragraph,
                        children: t(e.content, n)
                    },
                    n.key
                )
        }),
        strong: _(x({}, d().defaultRules.strong), { order: 6 }),
        em: _(x({}, d().defaultRules.em), { order: 6 }),
        u: _(x({}, d().defaultRules.u), { order: 5 }),
        del: _(x({}, d().defaultRules.del), { order: 6 }),
        link: _(x({}, g.ZP, (0, h.Z)({ enableBuildOverrides: !1 })), { order: 6 }),
        blockQuote: _(x({}, d().defaultRules.blockQuote), {
            react: (e, t, n) =>
                (0, s.jsx)(
                    'blockquote',
                    {
                        className: f.blockquote,
                        children: j(e)
                    },
                    n.key
                )
        }),
        image: _(x({}, d().defaultRules.image), {
            order: 6,
            match(e, t, n) {
                let r = d().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let i = r.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ('string' == typeof e) return null != e.match(E) ? i : null;
                }
                return !1;
            }
        }),
        inlineCode: _(x({}, p.Z.RULES.inlineCode), {
            order: 6,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'code',
                    {
                        className: f.codeInline,
                        children: j(e)
                    },
                    n.key
                )
        }),
        codeBlock: _(x({}, d().defaultRules.codeBlock), {
            react(e, t, r) {
                let i = () =>
                    (0, s.jsx)(
                        'pre',
                        {
                            children: (0, s.jsx)('code', {
                                className: o()(b.scrollbarGhostHairline, 'hljs'),
                                children: j(e)
                            })
                        },
                        r.key
                    );
                return (0, s.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: i,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return i();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? i()
                                    : (0, s.jsx)(
                                          'pre',
                                          {
                                              children: (0, s.jsx)('code', {
                                                  className: o()(b.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              })
                                          },
                                          r.key
                                      );
                            }
                        }
                    },
                    r.key
                );
            }
        })
    }),
    C = d().parserFor(O),
    S = d().reactFor(d().ruleOutput(O, 'react'));
class v extends (i = a.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: r, output: i } = this.props,
            a = i(r(''.concat(t, '\n\n'), x({ inline: !1 }, n)));
        return (0, s.jsx)('div', {
            className: o()(f.markdown, e),
            children: a
        });
    }
}
N(v, 'rules', O),
    N(v, 'defaultProps', {
        parser: C,
        output: S
    });
let T = v;
