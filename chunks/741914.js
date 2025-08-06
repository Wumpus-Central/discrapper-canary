n.d(t, { Z: () => h });
var r = n(392711),
    i = n.n(r),
    o = n(723454),
    a = n(428595),
    s = n(454585);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = i().omit(a.Z.RULES, ['codeBlock', 'heading']),
    _ = d(c({}, o.Z), {
        parse: function (e, t, n) {
            var r;
            let i = o.Z.parse(e, t, n),
                a = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
            return d(c({}, i), { level: a });
        }
    }),
    p = s.Z.combineAndInjectMentionRule(f, [s.Z.createReactRules(s.Z.defaultReactRuleOptions), { header: _ }]),
    h = s.Z.reactParserFor(p);
