n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(738018),
    o = n(607802),
    s = n(208450),
    c = n(921667);
let u = i.memo(function (e) {
    let { searchContext: t, focusSectionProps: n } = e,
        i = (0, l.e7)([a.Z], () => {
            let { mode: e } = a.Z.getState(t);
            return (0, o.Fz)(e.filter);
        });
    return (0, r.jsx)(
        s.o,
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
                className: c.appTitleSearch,
                searchBarContainerClassName: c.appTitleSearchBarContainer,
                searchBarClassName: c.appTitleSearchBar,
                searchPopoutClassName: i ? c.appTitleSearchPopoutDatePicker : c.appTitleSearchPopout,
                popoutAlignment: "center",
            },
            n,
        ),
    );
});
