n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(738018),
    c = n(607802),
    u = n(208450),
    d = n(781835);
let p = i.memo(function (e) {
    let { searchContext: t, focusSectionProps: n } = e,
        i = (0, o.e7)([s.Z], () => {
            let { mode: e } = s.Z.getState(t);
            return (0, c.Fz)(e.filter);
        });
    return (0, r.jsx)(
        u.ol,
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
                className: d.appTitleSearch,
                searchBarContainerClassName: d.appTitleSearchBarContainer,
                searchBarClassName: d.appTitleSearchBar,
                searchPopoutClassName: a()(d.appTitleSearchPopout, { [d.appTitleSearchPopoutDatePicker]: i }),
                popoutAlignment: "center",
            },
            n,
        ),
    );
});
