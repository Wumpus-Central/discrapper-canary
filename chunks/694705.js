n.d(t, {
    f: () => v,
    v: () => x,
}),
    n(65821);
var r = n(627968),
    l = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(681154),
    o = n(61259),
    c = n(380349),
    u = n(420009),
    d = n(315093),
    m = n(438414),
    f = n(873498),
    p = n(653826);

function h(e) {
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

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
let g = l.createContext(void 0);

function x() {
    let e = l.useContext(g);
    return i()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e;
}

function y(e) {
    let { entry: t } = e,
        n = b(e, ["entry"]),
        l = h(
            {
                baseEntryData: (0, u.A)({
                    entry: t,
                    channel: n.channel,
                }),
            },
            n,
        );
    switch (t.content_type) {
        case s.ContentInventoryEntryType.TOP_ARTIST:
            return (0, r.jsx)(
                C,
                h(
                    {
                        entry: t,
                    },
                    l,
                ),
            );
        case s.ContentInventoryEntryType.TOP_GAME:
            return (0, r.jsx)(
                _,
                h(
                    {
                        entry: t,
                    },
                    l,
                ),
            );
        case s.ContentInventoryEntryType.PLAYED_GAME:
            return (0, r.jsx)(
                A,
                h(
                    {
                        entry: t,
                    },
                    l,
                ),
            );
        case s.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, r.jsx)(
                O,
                h(
                    {
                        entry: t,
                    },
                    l,
                ),
            );
        case s.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, r.jsx)(
                E,
                h(
                    {
                        entry: t,
                    },
                    l,
                ),
            );
        case s.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, r.jsx)(
                j,
                h(
                    {
                        entry: t,
                    },
                    l,
                ),
            );
        default:
            throw Error("Unsupported content type: ".concat(t.content_type));
    }
}

function v(e) {
    let { errorFallback: t } = e,
        n = b(e, ["errorFallback"]);
    return (0, r.jsx)(o.t, {
        fallback: t,
        children: (0, r.jsx)(y, h({}, n)),
    });
}

function j(e) {
    let { entry: t, children: n } = e,
        l = b(e, ["entry", "children"]),
        a = (0, c.A)(
            h(
                {
                    entry: t,
                },
                l,
            ),
        );
    return (0, r.jsx)(g.Provider, {
        value: h(
            {
                parsedEntry: a,
            },
            l,
        ),
        children: n,
    });
}

function C(e) {
    let { entry: t, children: n } = e,
        l = b(e, ["entry", "children"]),
        a = (0, f.A)(
            h(
                {
                    entry: t,
                },
                l,
            ),
        );
    return (0, r.jsx)(g.Provider, {
        value: h(
            {
                parsedEntry: a,
            },
            l,
        ),
        children: n,
    });
}

function _(e) {
    let { entry: t, children: n } = e,
        l = b(e, ["entry", "children"]),
        a = (0, d.A)(
            h(
                {
                    entry: t,
                },
                l,
            ),
        );
    return (0, r.jsx)(g.Provider, {
        value: h(
            {
                parsedEntry: a,
            },
            l,
        ),
        children: n,
    });
}

function A(e) {
    let { entry: t, children: n } = e,
        l = b(e, ["entry", "children"]),
        a = (0, d.A)(
            h(
                {
                    entry: t,
                },
                l,
            ),
        );
    return (0, r.jsx)(g.Provider, {
        value: h(
            {
                parsedEntry: a,
            },
            l,
        ),
        children: n,
    });
}

function O(e) {
    let { entry: t, children: n } = e,
        l = b(e, ["entry", "children"]),
        a = (0, p.A)(
            h(
                {
                    entry: t,
                },
                l,
            ),
        );
    return (0, r.jsx)(g.Provider, {
        value: h(
            {
                parsedEntry: a,
            },
            l,
        ),
        children: n,
    });
}

function E(e) {
    let { entry: t, children: n } = e,
        l = b(e, ["entry", "children"]),
        a = (0, m.A)(
            h(
                {
                    entry: t,
                },
                l,
            ),
        );
    return (0, r.jsx)(g.Provider, {
        value: h(
            {
                parsedEntry: a,
            },
            l,
        ),
        children: n,
    });
}
