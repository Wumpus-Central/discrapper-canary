r.d(e, {
    default: () => o,
});
var n = r(627968),
    i = r(158954),
    c = r(985018);

function o(t) {
    return (0, n.jsx)(
        i.Modal,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                actions: [],
                title: c.intl.string(c.t.ULvRFd),
                subtitle: c.intl.string(c.t["HJJDr+"]),
            },
            t,
        ),
    );
}
