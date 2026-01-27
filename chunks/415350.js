n.d(t, {
    A: () => m,
});
var r = n(735438),
    i = n.n(r),
    l = n(223637),
    a = n(542664),
    s = n(46054);

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
let u = i().omit(a.A.RULES, ["codeBlock", "heading"]),
    d = c(o({}, l.A), {
        parse: function (e, t, n) {
            var r;
            let i = l.A.parse(e, t, n),
                a = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
            return c(o({}, i), {
                level: a,
            });
        },
    }),
    p = s.A.combineAndInjectMentionRule(u, [
        s.A.createReactRules(s.A.defaultReactRuleOptions),
        {
            header: d,
        },
    ]),
    m = s.A.reactParserFor(p);
