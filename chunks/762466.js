n.d(e, { default: () => o });
var r = n(54381),
    i = n(793030),
    c = n(388032);
function o(t) {
    return (0, r.jsx)(
        i.Modal,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        }),
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = r);
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
