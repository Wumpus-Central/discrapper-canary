var r,
    l,
    a = t(200651),
    o = t(192379),
    i = t(120356),
    c = t.n(i),
    s = t(477660),
    u = t.n(s),
    d = t(663993),
    h = t(770146),
    f = t(772096),
    p = t(428595),
    g = t(532901),
    m = t(374865),
    b = t(763971);
function k(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let j = new RegExp('https?://'.concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ''));
function x(e) {
    return 'string' == typeof e.content ? e.content : v(e.content);
}
let y = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, n, t) {
                let r = 'h'.concat(e.level);
                return (0, a.jsx)(
                    h.Z,
                    {
                        tag: r,
                        children: n(e.content, t)
                    },
                    t.key
                );
            }
        },
        paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, n, t) =>
                (0, a.jsx)(
                    'div',
                    {
                        className: m.paragraph,
                        children: n(e.content, t)
                    },
                    t.key
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
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, n, t) =>
                (0, a.jsx)(
                    'blockquote',
                    {
                        className: m.blockquote,
                        children: x(e)
                    },
                    t.key
                )
        },
        image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, n, t) {
                let r = u().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let l = r.match(e, n, t);
                if (null != l && Array.isArray(l) && l.length >= 3) {
                    let e = l[2];
                    if ('string' == typeof e) return null != e.match(j) ? l : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...p.Z.RULES.inlineCode,
            order: 6,
            react: (e, n, t) =>
                (0, a.jsx)(
                    'code',
                    {
                        className: m.codeInline,
                        children: x(e)
                    },
                    t.key
                )
        },
        codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, n, r) {
                let l = () =>
                    (0, a.jsx)(
                        'pre',
                        {
                            children: (0, a.jsx)('code', {
                                className: c()(b.scrollbarGhostHairline, 'hljs'),
                                children: x(e)
                            })
                        },
                        r.key
                    );
                return (0, a.jsx)(
                    d.GI,
                    {
                        createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
                        webpackId: 364964,
                        renderFallback: l,
                        render: (n) => {
                            if (!(e.lang && n.hasLanguage(e.lang)) || 'string' != typeof e.content) return l();
                            {
                                let t = n.highlight(e.lang, e.content, !0);
                                return null == t
                                    ? l()
                                    : (0, a.jsx)(
                                          'pre',
                                          {
                                              children: (0, a.jsx)('code', {
                                                  className: c()(b.scrollbarGhostHairline, 'hljs', t.language),
                                                  dangerouslySetInnerHTML: { __html: t.value }
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
        }
    },
    E = u().parserFor(y),
    v = u().reactFor(u().ruleOutput(y, 'react'));
class _ extends (l = o.PureComponent) {
    render() {
        let { className: e, children: n, state: t, parser: r, output: l } = this.props,
            o = l(
                r(''.concat(n, '\n\n'), {
                    inline: !1,
                    ...t
                })
            );
        return (0, a.jsx)('div', {
            className: c()(m.markdown, e),
            children: o
        });
    }
}
k(_, 'rules', y),
    k(_, 'defaultProps', {
        parser: E,
        output: v
    }),
    (n.Z = _);
