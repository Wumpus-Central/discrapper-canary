n.d(t, {
    f: () => A,
    v: () => y,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(681154),
    l = n(61259),
    c = n(380349),
    u = n(420009),
    d = n(315093),
    f = n(438414),
    p = n(873498),
    _ = n(653826);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let b = i.createContext(void 0);

function y() {
    let e = i.useContext(b);
    return s()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e;
}

function O(e) {
    let { entry: t } = e,
        n = g(e, ["entry"]),
        i = m(
            {
                baseEntryData: (0, u.A)({
                    entry: t,
                    channel: n.channel,
                }),
            },
            n,
        );
    switch (t.content_type) {
        case o.I.TOP_ARTIST:
            return (0, r.jsx)(
                S,
                m(
                    {
                        entry: t,
                    },
                    i,
                ),
            );
        case o.I.TOP_GAME:
            return (0, r.jsx)(
                I,
                m(
                    {
                        entry: t,
                    },
                    i,
                ),
            );
        case o.I.PLAYED_GAME:
            return (0, r.jsx)(
                T,
                m(
                    {
                        entry: t,
                    },
                    i,
                ),
            );
        case o.I.WATCHED_MEDIA:
            return (0, r.jsx)(
                C,
                m(
                    {
                        entry: t,
                    },
                    i,
                ),
            );
        case o.I.LISTENED_SESSION:
            return (0, r.jsx)(
                N,
                m(
                    {
                        entry: t,
                    },
                    i,
                ),
            );
        case o.I.LAUNCHED_ACTIVITY:
            return (0, r.jsx)(
                v,
                m(
                    {
                        entry: t,
                    },
                    i,
                ),
            );
        default:
            throw Error("Unsupported content type: ".concat(t.content_type));
    }
}

function A(e) {
    let { errorFallback: t } = e,
        n = g(e, ["errorFallback"]);
    return (0, r.jsx)(l.t, {
        fallback: t,
        children: (0, r.jsx)(O, m({}, n)),
    });
}

function v(e) {
    let { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]),
        a = (0, c.A)(
            m(
                {
                    entry: t,
                },
                i,
            ),
        );
    return (0, r.jsx)(b.Provider, {
        value: m(
            {
                parsedEntry: a,
            },
            i,
        ),
        children: n,
    });
}

function S(e) {
    let { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]),
        a = (0, p.A)(
            m(
                {
                    entry: t,
                },
                i,
            ),
        );
    return (0, r.jsx)(b.Provider, {
        value: m(
            {
                parsedEntry: a,
            },
            i,
        ),
        children: n,
    });
}

function I(e) {
    let { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]),
        a = (0, d.A)(
            m(
                {
                    entry: t,
                },
                i,
            ),
        );
    return (0, r.jsx)(b.Provider, {
        value: m(
            {
                parsedEntry: a,
            },
            i,
        ),
        children: n,
    });
}

function T(e) {
    let { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]),
        a = (0, d.A)(
            m(
                {
                    entry: t,
                },
                i,
            ),
        );
    return (0, r.jsx)(b.Provider, {
        value: m(
            {
                parsedEntry: a,
            },
            i,
        ),
        children: n,
    });
}

function C(e) {
    let { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]),
        a = (0, _.A)(
            m(
                {
                    entry: t,
                },
                i,
            ),
        );
    return (0, r.jsx)(b.Provider, {
        value: m(
            {
                parsedEntry: a,
            },
            i,
        ),
        children: n,
    });
}

function N(e) {
    let { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]),
        a = (0, f.A)(
            m(
                {
                    entry: t,
                },
                i,
            ),
        );
    return (0, r.jsx)(b.Provider, {
        value: m(
            {
                parsedEntry: a,
            },
            i,
        ),
        children: n,
    });
}
