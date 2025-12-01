n.d(t, { U: () => l }), n(388685);
var r = n(473749);
function i(e, t, n) {
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
function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e) {
    let { active: t, options: n, renderOption: i } = e,
        o = "function" == typeof n,
        [l, c] = r.useState({
            options: o ? [] : n,
            query: "",
            debouncedQuery: "",
            loading: !1,
        }),
        { options: u, loading: d, query: f, debouncedQuery: p } = l,
        _ = r.useCallback(
            (e) =>
                c((t) =>
                    s(a({}, t), {
                        loading: o,
                        query: e,
                        debouncedQuery: e,
                    }),
                ),
            [o],
        );
    return (
        r.useEffect(() => {
            t && _("");
        }, [t, _]),
        r.useEffect(() => {
            let e;
            return (
                o
                    ? (c((e) =>
                          s(a({}, e), {
                              loading: !0,
                              debouncedQuery: null,
                          }),
                      ),
                      (e = setTimeout(() => {
                          _(f);
                      }, 500)))
                    : _(f),
                () => {
                    clearTimeout(e);
                }
            );
        }, [o, f, _]),
        r.useEffect(() => {
            let e = !1;
            function r() {
                return "function" == typeof n ? n(p) : Promise.resolve(n);
            }
            return (
                ((t && null !== p && o) || !o) &&
                    r().then((t) => {
                        e ||
                            (null != i && (t = t.map(i)),
                            c((e) =>
                                s(a({}, e), {
                                    options: t,
                                    loading: !1,
                                }),
                            ));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, p, i, o]),
        {
            options: u,
            loading: d,
            onQueryChange: r.useCallback((e) => {
                c((t) => s(a({}, t), { query: e }));
            }, []),
        }
    );
}
