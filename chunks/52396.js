r.d(t, {
    B: () => j,
    r: () => h
}),
    r(411104);
var n = r(200651),
    l = r(192379),
    i = r(512722),
    o = r.n(i),
    a = r(876215),
    c = r(775379),
    s = r(879046),
    u = r(214597),
    p = r(498187),
    d = r(482417),
    f = r(301419),
    b = r(397035);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let m = l.createContext(void 0);
function j() {
    let e = l.useContext(m);
    return o()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function g(e) {
    var { entry: t } = e,
        r = y(e, ['entry']);
    let l = O(
        {
            baseEntryData: (0, u.Z)({
                entry: t,
                channel: r.channel
            })
        },
        r
    );
    switch (t.content_type) {
        case a.s.TOP_ARTIST:
            return (0, n.jsx)(P, O({ entry: t }, l));
        case a.s.TOP_GAME:
            return (0, n.jsx)(x, O({ entry: t }, l));
        case a.s.PLAYED_GAME:
            return (0, n.jsx)(w, O({ entry: t }, l));
        case a.s.WATCHED_MEDIA:
            return (0, n.jsx)(S, O({ entry: t }, l));
        case a.s.LISTENED_SESSION:
            return (0, n.jsx)(C, O({ entry: t }, l));
        case a.s.LAUNCHED_ACTIVITY:
            return (0, n.jsx)(v, O({ entry: t }, l));
        default:
            throw Error('Unsupported content type: '.concat(t.content_type));
    }
}
function h(e) {
    var { errorFallback: t } = e,
        r = y(e, ['errorFallback']);
    return (0, n.jsx)(c.S, {
        fallback: t,
        children: (0, n.jsx)(g, O({}, r))
    });
}
function v(e) {
    var { entry: t, children: r } = e,
        l = y(e, ['entry', 'children']);
    let i = (0, s.Z)(O({ entry: t }, l));
    return (0, n.jsx)(m.Provider, {
        value: O({ parsedEntry: i }, l),
        children: r
    });
}
function P(e) {
    var { entry: t, children: r } = e,
        l = y(e, ['entry', 'children']);
    let i = (0, f.Z)(O({ entry: t }, l));
    return (0, n.jsx)(m.Provider, {
        value: O({ parsedEntry: i }, l),
        children: r
    });
}
function x(e) {
    var { entry: t, children: r } = e,
        l = y(e, ['entry', 'children']);
    let i = (0, p.Z)(O({ entry: t }, l));
    return (0, n.jsx)(m.Provider, {
        value: O({ parsedEntry: i }, l),
        children: r
    });
}
function w(e) {
    var { entry: t, children: r } = e,
        l = y(e, ['entry', 'children']);
    let i = (0, p.Z)(O({ entry: t }, l));
    return (0, n.jsx)(m.Provider, {
        value: O({ parsedEntry: i }, l),
        children: r
    });
}
function S(e) {
    var { entry: t, children: r } = e,
        l = y(e, ['entry', 'children']);
    let i = (0, b.Z)(O({ entry: t }, l));
    return (0, n.jsx)(m.Provider, {
        value: O({ parsedEntry: i }, l),
        children: r
    });
}
function C(e) {
    var { entry: t, children: r } = e,
        l = y(e, ['entry', 'children']);
    let i = (0, d.Z)(O({ entry: t }, l));
    return (0, n.jsx)(m.Provider, {
        value: O({ parsedEntry: i }, l),
        children: r
    });
}
