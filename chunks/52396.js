n.d(t, {
    B: () => y,
    r: () => v,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(876215),
    l = n(775379),
    c = n(879046),
    u = n(214597),
    d = n(498187),
    f = n(482417),
    p = n(301419),
    _ = n(397035);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = i.createContext(void 0);
function y() {
    let e = i.useContext(b);
    return o()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e;
}
function O(e) {
    var { entry: t } = e,
        n = g(e, ["entry"]);
    let i = h(
        {
            baseEntryData: (0, u.Z)({
                entry: t,
                channel: n.channel,
            }),
        },
        n,
    );
    switch (t.content_type) {
        case s.s.TOP_ARTIST:
            return (0, r.jsx)(I, h({ entry: t }, i));
        case s.s.TOP_GAME:
            return (0, r.jsx)(T, h({ entry: t }, i));
        case s.s.PLAYED_GAME:
            return (0, r.jsx)(C, h({ entry: t }, i));
        case s.s.WATCHED_MEDIA:
            return (0, r.jsx)(A, h({ entry: t }, i));
        case s.s.LISTENED_SESSION:
            return (0, r.jsx)(N, h({ entry: t }, i));
        case s.s.LAUNCHED_ACTIVITY:
            return (0, r.jsx)(S, h({ entry: t }, i));
        default:
            throw Error("Unsupported content type: ".concat(t.content_type));
    }
}
function v(e) {
    var { errorFallback: t } = e,
        n = g(e, ["errorFallback"]);
    return (0, r.jsx)(l.S, {
        fallback: t,
        children: (0, r.jsx)(O, h({}, n)),
    });
}
function S(e) {
    var { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]);
    let a = (0, c.Z)(h({ entry: t }, i));
    return (0, r.jsx)(b.Provider, {
        value: h({ parsedEntry: a }, i),
        children: n,
    });
}
function I(e) {
    var { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]);
    let a = (0, p.Z)(h({ entry: t }, i));
    return (0, r.jsx)(b.Provider, {
        value: h({ parsedEntry: a }, i),
        children: n,
    });
}
function T(e) {
    var { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]);
    let a = (0, d.Z)(h({ entry: t }, i));
    return (0, r.jsx)(b.Provider, {
        value: h({ parsedEntry: a }, i),
        children: n,
    });
}
function C(e) {
    var { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]);
    let a = (0, d.Z)(h({ entry: t }, i));
    return (0, r.jsx)(b.Provider, {
        value: h({ parsedEntry: a }, i),
        children: n,
    });
}
function A(e) {
    var { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]);
    let a = (0, _.Z)(h({ entry: t }, i));
    return (0, r.jsx)(b.Provider, {
        value: h({ parsedEntry: a }, i),
        children: n,
    });
}
function N(e) {
    var { entry: t, children: n } = e,
        i = g(e, ["entry", "children"]);
    let a = (0, f.Z)(h({ entry: t }, i));
    return (0, r.jsx)(b.Provider, {
        value: h({ parsedEntry: a }, i),
        children: n,
    });
}
