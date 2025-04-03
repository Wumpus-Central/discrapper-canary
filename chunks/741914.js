r.d(t, { Z: () => g });
var n = r(392711),
    A = r.n(n),
    a = r(723454),
    o = r(428595),
    l = r(454585);
function i(e) {
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
function s(e, t) {
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
let c = A().omit(o.Z.RULES, ['codeBlock', 'heading']),
    d = s(i({}, a.Z), {
        parse: function (e, t, r) {
            var n;
            let A = a.Z.parse(e, t, r),
                o = Math.min(6, (null != (n = r.initialHeaderLevel) ? n : 3) + A.level);
            return s(i({}, A), { level: o });
        }
    }),
    u = l.Z.combineAndInjectMentionRule(c, [l.Z.createReactRules(l.Z.defaultReactRuleOptions), { header: d }]),
    g = l.Z.reactParserFor(u);
