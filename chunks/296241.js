n.d(t, { Z: () => o }), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(208450),
    a = n(921667);
let o = i.memo(function (e) {
    let { searchContext: t, focusSectionProps: n } = e;
    return (0, r.jsx)(
        l.o,
        (function (e) {
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
        })(
            {
                searchContext: t,
                className: a.search,
                searchBarContainerClassName: a.searchBarContainer,
                searchBarClassName: a.searchBar,
                searchPopoutClassName: a.searchPopout,
            },
            n,
        ),
    );
});
