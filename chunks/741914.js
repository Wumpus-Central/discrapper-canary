r.d(t, { Z: () => f });
var A = r(392711),
    n = r.n(A),
    o = r(723454),
    a = r(428595),
    l = r(454585);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            A = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (A = A.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            A.forEach(function (t) {
                var A;
                (A = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: A,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = A);
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
                      var A = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, A);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let c = n().omit(a.Z.RULES, ['codeBlock', 'heading']),
    d = s(i({}, o.Z), {
        parse: function (e, t, r) {
            var A;
            let n = o.Z.parse(e, t, r),
                a = Math.min(6, (null !== (A = r.initialHeaderLevel) && void 0 !== A ? A : 3) + n.level);
            return s(i({}, n), { level: a });
        }
    }),
    u = l.Z.combineAndInjectMentionRule(c, [l.Z.createReactRules(l.Z.defaultReactRuleOptions), { header: d }]),
    f = l.Z.reactParserFor(u);
