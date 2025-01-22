var i,
    a,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(477660),
    d = n.n(c),
    u = n(663993),
    p = n(770146),
    m = n(772096),
    _ = n(428595),
    f = n(532901),
    g = n(374865),
    h = n(763971);
function I(e, t, n) {
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
let v = new RegExp('https?://'.concat(null !== (i = window.GLOBAL_ENV.CDN_HOST) && void 0 !== i ? i : ''));
function b(e) {
    return 'string' == typeof e.content ? e.content : S(e.content);
}
let x = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, n) {
                let i = 'h'.concat(e.level);
                return (0, r.jsx)(
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
            ...d().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: g.paragraph,
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
            ...m.ZP,
            ...(0, f.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, r.jsx)(
                    'blockquote',
                    {
                        className: g.blockquote,
                        children: b(e)
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
                let a = i.match(e, t, n);
                if (null != a && Array.isArray(a) && a.length >= 3) {
                    let e = a[2];
                    if ('string' == typeof e) return null != e.match(v) ? a : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ..._.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, r.jsx)(
                    'code',
                    {
                        className: g.codeInline,
                        children: b(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, i) {
                let a = () =>
                    (0, r.jsx)(
                        'pre',
                        {
                            children: (0, r.jsx)('code', {
                                className: s()(h.scrollbarGhostHairline, 'hljs'),
                                children: b(e)
                            })
                        },
                        i.key
                    );
                return (0, r.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: a,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return a();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? a()
                                    : (0, r.jsx)(
                                          'pre',
                                          {
                                              children: (0, r.jsx)('code', {
                                                  className: s()(h.scrollbarGhostHairline, 'hljs', n.language),
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
    C = d().parserFor(x),
    S = d().reactFor(d().ruleOutput(x, 'react'));
class N extends (a = l.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: i, output: a } = this.props,
            l = a(
                i(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, r.jsx)('div', {
            className: s()(g.markdown, e),
            children: l
        });
    }
}
I(N, 'rules', x),
    I(N, 'defaultProps', {
        parser: C,
        output: S
    }),
    (t.Z = N);
