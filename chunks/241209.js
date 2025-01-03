var i,
    r,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    l = n.n(s),
    c = n(477660),
    u = n.n(c),
    d = n(663993),
    p = n(770146),
    f = n(772096),
    _ = n(428595),
    m = n(532901),
    h = n(374865),
    I = n(763971);
function S(e, t, n) {
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
let b = new RegExp('https?://'.concat(null !== (i = window.GLOBAL_ENV.CDN_HOST) && void 0 !== i ? i : ''));
function g(e) {
    return 'string' == typeof e.content ? e.content : N(e.content);
}
let C = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, t, n) {
                let i = 'h'.concat(e.level);
                return (0, a.jsx)(
                    p.Z,
                    {
                        tag: i,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'div',
                    {
                        className: h.paragraph,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        strong: {
            ...u().defaultRules.strong,
            order: 6
        },
        em: {
            ...u().defaultRules.em,
            order: 6
        },
        u: {
            ...u().defaultRules.u,
            order: 5
        },
        del: {
            ...u().defaultRules.del,
            order: 6
        },
        link: {
            ...f.ZP,
            ...(0, m.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'blockquote',
                    {
                        className: h.blockquote,
                        children: g(e)
                    },
                    n.key
                )
        },
        image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let i = u().defaultRules.image;
                if (null == i || null == i.match) return !1;
                let r = i.match(e, t, n);
                if (null != r && Array.isArray(r) && r.length >= 3) {
                    let e = r[2];
                    if ('string' == typeof e) return null != e.match(b) ? r : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ..._.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'code',
                    {
                        className: h.codeInline,
                        children: g(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, i) {
                let r = () =>
                    (0, a.jsx)(
                        'pre',
                        {
                            children: (0, a.jsx)('code', {
                                className: l()(I.scrollbarGhostHairline, 'hljs'),
                                children: g(e)
                            })
                        },
                        i.key
                    );
                return (0, a.jsx)(
                    d.GI,
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
                                    : (0, a.jsx)(
                                          'pre',
                                          {
                                              children: (0, a.jsx)('code', {
                                                  className: l()(I.scrollbarGhostHairline, 'hljs', n.language),
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
        }
    },
    T = u().parserFor(C),
    N = u().reactFor(u().ruleOutput(C, 'react'));
class v extends (r = o.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: i, output: r } = this.props,
            o = r(
                i(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, a.jsx)('div', {
            className: l()(h.markdown, e),
            children: o
        });
    }
}
S(v, 'rules', C),
    S(v, 'defaultProps', {
        parser: T,
        output: N
    }),
    (t.Z = v);
