n.d(t, {
    A: () => h,
});
var r = n(735438),
    i = n.n(r),
    a = n(223637),
    s = n(542664),
    o = n(46054);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
let f = i().omit(s.A.RULES, ["codeBlock", "heading"]),
    p = d(c({}, a.A), {
        parse: function (e, t, n) {
            var r;
            let i = a.A.parse(e, t, n),
                s = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
            return d(c({}, i), {
                level: s,
            });
        },
    }),
    _ = o.A.combineAndInjectMentionRule(f, [
        o.A.createReactRules(o.A.defaultReactRuleOptions),
        {
            header: p,
        },
    ]),
    h = o.A.reactParserFor(_);
