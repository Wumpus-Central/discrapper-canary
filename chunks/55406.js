let r;
(n.r(t),
    n.d(t, {
        default: () => S,
        renderChangelogMessageMarkup: () => E
    }),
    n(35282),
    n(704826));
var o = n(159635),
    l = n.n(o),
    i = n(800927),
    a = n(945884),
    s = n(594199),
    c = n(454585);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function d(e, t) {
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
let p = l().defaultRules.lheading,
    m = l().defaultRules.heading,
    g = l().defaultRules.link,
    f = l().defaultRules.image,
    b = l().defaultRules.list,
    h = l().defaultRules.blockQuote,
    O = l().defaultRules.paragraph,
    y = /\{(.+?)}/,
    v = /^\$(\w+?)\$/;
r = n(235375);
let j = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, r) => {
            let o = y.exec(e[1]),
                i = e[1].replace(y, '');
            return (
                t && (i = i.toUpperCase()),
                {
                    className: null != o ? o[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: l().parseInline(n, i, r)
                }
            );
        };
    },
    P = (e) =>
        d(u({}, r.baseRules), {
            image: u({}, f, 'function' == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
            link: u({}, g, 'function' == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
            list: u({}, b, 'function' == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
            interpolation: {
                order: s.ZP.order,
                match: (e) => v.exec(e),
                parse(e, t, n) {
                    let r = n.interpolations[e[1]];
                    return null == r
                        ? {
                              type: 'text',
                              content: e[0]
                          }
                        : {
                              type: 'interpolation',
                              renderer: r
                          };
                },
                react: (e) => e.renderer()
            },
            lheading: u(d(u({}, p), { parse: j({ transformUpperCase: !0 }) }), 'function' == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
            heading: u({}, m, 'function' == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
            blockQuote: u({}, h, 'function' == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
            paragraph: u({}, O, 'function' == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
        }),
    x = (e) => ({ lheading: u(d(u({}, p), { parse: j({ transformUpperCase: !1 }) }), 'function' == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading) }),
    C = (e) =>
        d(u({}, P(e)), {
            newline: u({}, l().defaultRules.newline),
            text: s.ZP,
            list: i.Z,
            subtext: a.Z
        });
function w(e) {
    return u({}, P(e));
}
let S = {
    getDefaultRules: w,
    getSpecialRules: (e) => u({}, P(e), x(e)),
    getMessageRules: (e) => u({}, C(e))
};
function E(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        content: c.Z.reactParserFor(w(t))(e.content, !1, null != n ? { changeLog: n } : {})
    };
}
