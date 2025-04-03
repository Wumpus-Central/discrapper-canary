let n;
r.r(t),
    r.d(t, {
        default: () => S,
        renderChangelogMessageMarkup: () => E
    }),
    r(301563),
    r(757143);
var o = r(477660),
    i = r.n(o),
    a = r(800927),
    s = r(945884),
    l = r(594199),
    c = r(454585);
function d(e) {
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
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function u(e, t) {
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
let p = i().defaultRules.lheading,
    m = i().defaultRules.heading,
    b = i().defaultRules.link,
    _ = i().defaultRules.image,
    g = i().defaultRules.list,
    h = i().defaultRules.blockQuote,
    f = i().defaultRules.paragraph,
    y = /\{(.+?)}/,
    x = /^\$(\w+?)\$/;
n = r(235375);
let O = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, r, n) => {
            let o = y.exec(e[1]),
                a = e[1].replace(y, '');
            return (
                t && (a = a.toUpperCase()),
                {
                    className: null != o ? o[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: i().parseInline(r, a, n)
                }
            );
        };
    },
    k = (e) =>
        u(d({}, n.baseRules), {
            image: d({}, _, 'function' == typeof n.customRules.image ? n.customRules.image(e) : n.customRules.image),
            link: d({}, b, 'function' == typeof n.customRules.link ? n.customRules.link(e) : n.customRules.link),
            list: d({}, g, 'function' == typeof n.customRules.list ? n.customRules.list(e) : n.customRules.list),
            interpolation: {
                order: l.ZP.order,
                match: (e) => x.exec(e),
                parse(e, t, r) {
                    let n = r.interpolations[e[1]];
                    return null == n
                        ? {
                              type: 'text',
                              content: e[0]
                          }
                        : {
                              type: 'interpolation',
                              renderer: n
                          };
                },
                react: (e) => e.renderer()
            },
            lheading: d(u(d({}, p), { parse: O({ transformUpperCase: !0 }) }), 'function' == typeof n.customRules.lheading ? n.customRules.lheading(e) : n.customRules.lheading),
            heading: d({}, m, 'function' == typeof n.customRules.heading ? n.customRules.heading(e) : n.customRules.heading),
            blockQuote: d({}, h, 'function' == typeof n.customRules.blockQuote ? n.customRules.blockQuote(e) : n.customRules.blockQuote),
            paragraph: d({}, f, 'function' == typeof n.customRules.paragraph ? n.customRules.paragraph(e) : n.customRules.paragraph)
        }),
    j = (e) => ({ lheading: d(u(d({}, p), { parse: O({ transformUpperCase: !1 }) }), 'function' == typeof n.customRules.lheading ? n.customRules.lheading(e) : n.customRules.lheading) }),
    C = (e) =>
        u(d({}, k(e)), {
            newline: d({}, i().defaultRules.newline),
            text: l.ZP,
            list: a.Z,
            subtext: s.Z
        });
function v(e) {
    return d({}, k(e));
}
let S = {
    getDefaultRules: v,
    getSpecialRules: (e) => d({}, k(e), j(e)),
    getMessageRules: (e) => d({}, C(e))
};
function E(e, t, r) {
    return {
        hasSpoilerEmbeds: !1,
        content: c.Z.reactParserFor(v(t))(e.content, !1, null != r ? { changeLog: r } : {})
    };
}
