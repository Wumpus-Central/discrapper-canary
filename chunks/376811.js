n.d(t, {
    K: () => l,
}),
    n(896048);
var r = n(64700);

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

function s(e, t) {
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

function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function l(e) {
    let { active: t, options: n, renderOption: i } = e,
        s = "function" == typeof n,
        [l, c] = r.useState({
            options: s ? [] : n,
            query: "",
            debouncedQuery: "",
            loading: !1,
        }),
        { options: u, loading: d, query: f, debouncedQuery: p } = l,
        _ = r.useCallback(
            (e) =>
                c((t) =>
                    o(a({}, t), {
                        loading: s,
                        query: e,
                        debouncedQuery: e,
                    }),
                ),
            [s],
        );
    return (
        r.useEffect(() => {
            t && _("");
        }, [t, _]),
        r.useEffect(() => {
            let e;
            return (
                s
                    ? (c((e) =>
                          o(a({}, e), {
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
        }, [s, f, _]),
        r.useEffect(() => {
            let e = !1;

            function r() {
                return "function" == typeof n ? n(p) : Promise.resolve(n);
            }
            return (
                ((t && null !== p && s) || !s) &&
                    r().then((t) => {
                        e ||
                            (null != i && (t = t.map(i)),
                            c((e) =>
                                o(a({}, e), {
                                    options: t,
                                    loading: !1,
                                }),
                            ));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, p, i, s]),
        {
            options: u,
            loading: d,
            onQueryChange: r.useCallback((e) => {
                c((t) =>
                    o(a({}, t), {
                        query: e,
                    }),
                );
            }, []),
        }
    );
}
