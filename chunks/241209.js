r.d(t, { Z: () => N }), r(474991), r(398202), r(301563);
var n,
    l,
    a = r(200651),
    o = r(192379),
    c = r(120356),
    i = r.n(c),
    s = r(477660),
    u = r.n(s),
    d = r(663993),
    p = r(770146),
    f = r(772096),
    h = r(428595),
    g = r(532901),
    b = r(663908),
    m = r(28149);
function j(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                j(e, t, r[t]);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let O = new RegExp('https?://'.concat(null !== (n = window.GLOBAL_ENV.CDN_HOST) && void 0 !== n ? n : ''));
function x(e) {
    return 'string' == typeof e.content ? e.content : E(e.content);
}
let w = k(y({}, u().defaultRules), {
        heading: k(y({}, u().defaultRules.heading), {
            react(e, t, r) {
                let n = 'h'.concat(e.level);
                return (0, a.jsx)(
                    p.Z,
                    {
                        tag: n,
                        children: t(e.content, r)
                    },
                    r.key
                );
            }
        }),
        paragraph: k(y({}, u().defaultRules.paragraph), {
            react: (e, t, r) =>
                (0, a.jsx)(
                    'div',
                    {
                        className: b.paragraph,
                        children: t(e.content, r)
                    },
                    r.key
                )
        }),
        strong: k(y({}, u().defaultRules.strong), { order: 6 }),
        em: k(y({}, u().defaultRules.em), { order: 6 }),
        u: k(y({}, u().defaultRules.u), { order: 5 }),
        del: k(y({}, u().defaultRules.del), { order: 6 }),
        link: k(y({}, f.ZP, (0, g.Z)({ enableBuildOverrides: !1 })), { order: 6 }),
        blockQuote: k(y({}, u().defaultRules.blockQuote), {
            react: (e, t, r) =>
                (0, a.jsx)(
                    'blockquote',
                    {
                        className: b.blockquote,
                        children: x(e)
                    },
                    r.key
                )
        }),
        image: k(y({}, u().defaultRules.image), {
            order: 6,
            match(e, t, r) {
                let n = u().defaultRules.image;
                if (null == n || null == n.match) return !1;
                let l = n.match(e, t, r);
                if (null != l && Array.isArray(l) && l.length >= 3) {
                    let e = l[2];
                    if ('string' == typeof e) return null != e.match(O) ? l : null;
                }
                return !1;
            }
        }),
        inlineCode: k(y({}, h.Z.RULES.inlineCode), {
            order: 6,
            react: (e, t, r) =>
                (0, a.jsx)(
                    'code',
                    {
                        className: b.codeInline,
                        children: x(e)
                    },
                    r.key
                )
        }),
        codeBlock: k(y({}, u().defaultRules.codeBlock), {
            react(e, t, n) {
                let l = () =>
                    (0, a.jsx)(
                        'pre',
                        {
                            children: (0, a.jsx)('code', {
                                className: i()(m.scrollbarGhostHairline, 'hljs'),
                                children: x(e)
                            })
                        },
                        n.key
                    );
                return (0, a.jsx)(
                    d.GI,
                    {
                        createPromise: () => Promise.resolve().then(r.bind(r, 364964)),
                        webpackId: 364964,
                        renderFallback: l,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return l();
                            {
                                let r = t.highlight(e.lang, e.content, !0);
                                return null == r
                                    ? l()
                                    : (0, a.jsx)(
                                          'pre',
                                          {
                                              children: (0, a.jsx)('code', {
                                                  className: i()(m.scrollbarGhostHairline, 'hljs', r.language),
                                                  dangerouslySetInnerHTML: { __html: r.value }
                                              })
                                          },
                                          n.key
                                      );
                            }
                        }
                    },
                    n.key
                );
            }
        })
    }),
    v = u().parserFor(w),
    E = u().reactFor(u().ruleOutput(w, 'react'));
class _ extends (l = o.PureComponent) {
    render() {
        let { className: e, children: t, state: r, parser: n, output: l } = this.props,
            o = l(n(''.concat(t, '\n\n'), y({ inline: !1 }, r)));
        return (0, a.jsx)('div', {
            className: i()(b.markdown, e),
            children: o
        });
    }
}
j(_, 'rules', w),
    j(_, 'defaultProps', {
        parser: v,
        output: E
    });
let N = _;
