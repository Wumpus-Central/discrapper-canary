(n.d(t, { Z: () => I }), n(413496), n(433524), n(35282));
var i,
    r,
    s = n(255367),
    a = n(73800),
    l = n(120356),
    o = n.n(l),
    c = n(159635),
    d = n.n(c),
    u = n(663993),
    m = n(770146),
    p = n(772096),
    g = n(428595),
    h = n(532901),
    f = n(204227),
    b = n(283574);
function x(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                x(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new RegExp('https?://'.concat(null != (i = window.GLOBAL_ENV.CDN_HOST) ? i : ''));
function C(e) {
    return 'string' == typeof e.content ? e.content : S(e.content);
}
let O = j(_({}, d().defaultRules), {
        heading: j(_({}, d().defaultRules.heading), {
            react(e, t, n) {
                let i = 'h'.concat(e.level);
                return (0, s.jsx)(
                    m.Z,
                    {
                        tag: i,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        }),
        paragraph: j(_({}, d().defaultRules.paragraph), {
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
        strong: j(_({}, d().defaultRules.strong), { order: 6 }),
        em: j(_({}, d().defaultRules.em), { order: 6 }),
        u: j(_({}, d().defaultRules.u), { order: 5 }),
        del: j(_({}, d().defaultRules.del), { order: 6 }),
        link: j(_({}, p.ZP, (0, h.Z)({ enableBuildOverrides: !1 })), { order: 6 }),
        blockQuote: j(_({}, d().defaultRules.blockQuote), {
            react: (e, t, n) =>
                (0, s.jsx)(
                    'blockquote',
                    {
                        className: f.blockquote,
                        children: C(e)
                    },
                    n.key
                )
        }),
        image: j(_({}, d().defaultRules.image), {
            order: 6,
            match(e, t, n) {
                let i = d().defaultRules.image;
                if (null == i || null == i.match) return !1;
                let r = i.match(e, t, n);
                if (null != r && Array.isArray(r) && r.length >= 3) {
                    let e = r[2];
                    if ('string' == typeof e) return null != e.match(E) ? r : null;
                }
                return !1;
            }
        }),
        inlineCode: j(_({}, g.Z.RULES.inlineCode), {
            order: 6,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'code',
                    {
                        className: f.codeInline,
                        children: C(e)
                    },
                    n.key
                )
        }),
        codeBlock: j(_({}, d().defaultRules.codeBlock), {
            react(e, t, i) {
                let r = () =>
                    (0, s.jsx)(
                        'pre',
                        {
                            children: (0, s.jsx)('code', {
                                className: o()(b.scrollbarGhostHairline, 'hljs'),
                                children: C(e)
                            })
                        },
                        i.key
                    );
                return (0, s.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: r,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return r();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? r()
                                    : (0, s.jsx)(
                                          'pre',
                                          {
                                              children: (0, s.jsx)('code', {
                                                  className: o()(b.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              })
                                          },
                                          i.key
                                      );
                            }
                        }
                    },
                    i.key
                );
            }
        })
    }),
    v = d().parserFor(O),
    S = d().reactFor(d().ruleOutput(O, 'react'));
class T extends (r = a.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: i, output: r } = this.props,
            a = r(i(''.concat(t, '\n\n'), _({ inline: !1 }, n)));
        return (0, s.jsx)('div', {
            className: o()(f.markdown, e),
            children: a
        });
    }
}
(x(T, 'rules', O),
    x(T, 'defaultProps', {
        parser: v,
        output: S
    }));
let I = T;
