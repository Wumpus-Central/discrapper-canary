l.d(n, {
    B: () => v,
    r: () => C
}),
    l(411104);
var t = l(200651),
    i = l(192379),
    r = l(512722),
    a = l.n(r),
    s = l(876215),
    o = l(775379),
    u = l(879046),
    c = l(214597),
    d = l(498187),
    m = l(482417),
    h = l(301419),
    p = l(397035);
let x = i.createContext(void 0);
function v() {
    let e = i.useContext(x);
    return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function f(e) {
    let { entry: n, ...l } = e,
        i = {
            baseEntryData: (0, c.Z)({
                entry: n,
                channel: l.channel
            }),
            ...l
        };
    switch (n.content_type) {
        case s.s.TOP_ARTIST:
            return (0, t.jsx)(j, {
                entry: n,
                ...i
            });
        case s.s.TOP_GAME:
            return (0, t.jsx)(N, {
                entry: n,
                ...i
            });
        case s.s.PLAYED_GAME:
            return (0, t.jsx)(S, {
                entry: n,
                ...i
            });
        case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(E, {
                entry: n,
                ...i
            });
        case s.s.LISTENED_SESSION:
            return (0, t.jsx)(I, {
                entry: n,
                ...i
            });
        case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(g, {
                entry: n,
                ...i
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function C(e) {
    let { errorFallback: n, ...l } = e;
    return (0, t.jsx)(o.S, {
        fallback: n,
        children: (0, t.jsx)(f, { ...l })
    });
}
function g(e) {
    let { entry: n, children: l, ...i } = e,
        r = (0, u.Z)({
            entry: n,
            ...i
        });
    return (0, t.jsx)(x.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: l
    });
}
function j(e) {
    let { entry: n, children: l, ...i } = e,
        r = (0, h.Z)({
            entry: n,
            ...i
        });
    return (0, t.jsx)(x.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: l
    });
}
function N(e) {
    let { entry: n, children: l, ...i } = e,
        r = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, t.jsx)(x.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: l
    });
}
function S(e) {
    let { entry: n, children: l, ...i } = e,
        r = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, t.jsx)(x.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: l
    });
}
function E(e) {
    let { entry: n, children: l, ...i } = e,
        r = (0, p.Z)({
            entry: n,
            ...i
        });
    return (0, t.jsx)(x.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: l
    });
}
function I(e) {
    let { entry: n, children: l, ...i } = e,
        r = (0, m.Z)({
            entry: n,
            ...i
        });
    return (0, t.jsx)(x.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: l
    });
}
