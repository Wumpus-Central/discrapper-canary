var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(477660),
    d = n.n(c),
    u = n(663993),
    m = n(770146),
    g = n(772096),
    h = n(428595),
    p = n(532901),
    x = n(374865),
    f = n(763971);
function _(e, t, n) {
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
let E = new RegExp('https?://'.concat(null !== (i = window.GLOBAL_ENV.CDN_HOST) && void 0 !== i ? i : ''));
function C(e) {
    return 'string' == typeof e.content ? e.content : b(e.content);
}
let T = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
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
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: x.paragraph,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        strong: {
            ...d().defaultRules.strong,
            order: 6
        },
        em: {
            ...d().defaultRules.em,
            order: 6
        },
        u: {
            ...d().defaultRules.u,
            order: 5
        },
        del: {
            ...d().defaultRules.del,
            order: 6
        },
        link: {
            ...g.ZP,
            ...(0, p.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'blockquote',
                    {
                        className: x.blockquote,
                        children: C(e)
                    },
                    n.key
                )
        },
        image: {
            ...d().defaultRules.image,
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
        },
        inlineCode: {
            ...h.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'code',
                    {
                        className: x.codeInline,
                        children: C(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, i) {
                let r = () =>
                    (0, s.jsx)(
                        'pre',
                        {
                            children: (0, s.jsx)('code', {
                                className: o()(f.scrollbarGhostHairline, 'hljs'),
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
                                                  className: o()(f.scrollbarGhostHairline, 'hljs', n.language),
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
    S = d().parserFor(T),
    b = d().reactFor(d().ruleOutput(T, 'react'));
class I extends (r = a.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: i, output: r } = this.props,
            a = r(
                i(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, s.jsx)('div', {
            className: o()(x.markdown, e),
            children: a
        });
    }
}
_(I, 'rules', T),
    _(I, 'defaultProps', {
        parser: S,
        output: b
    }),
    (t.Z = I);
