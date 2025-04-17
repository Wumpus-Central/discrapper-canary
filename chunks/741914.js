n.d(t, { Z: () => m });
var r = n(392711),
    i = n.n(r),
    a = n(723454),
    l = n(428595),
    o = n(454585);
function s(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
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
let u = i().omit(l.Z.RULES, ['codeBlock', 'heading']),
    d = c(s({}, a.Z), {
        parse: function (e, t, n) {
            var r;
            let i = a.Z.parse(e, t, n),
                l = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
            return c(s({}, i), { level: l });
        }
    }),
    p = o.Z.combineAndInjectMentionRule(u, [o.Z.createReactRules(o.Z.defaultReactRuleOptions), { header: d }]),
    m = o.Z.reactParserFor(p);
