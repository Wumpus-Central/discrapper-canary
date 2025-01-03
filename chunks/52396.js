t.d(n, {
    B: function () {
        return x;
    },
    r: function () {
        return g;
    }
}),
    t(411104);
var l = t(200651),
    i = t(192379),
    r = t(512722),
    a = t.n(r),
    o = t(876215),
    s = t(775379),
    c = t(879046),
    u = t(214597),
    d = t(498187),
    m = t(482417),
    f = t(301419),
    p = t(397035);
let h = i.createContext(void 0);
function x() {
    let e = i.useContext(h);
    return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function v(e) {
    let { entry: n, ...t } = e,
        i = {
            baseEntryData: (0, u.Z)({
                entry: n,
                channel: t.channel
            }),
            ...t
        };
    switch (n.content_type) {
        case o.s.TOP_ARTIST:
            return (0, l.jsx)(_, {
                entry: n,
                ...i
            });
        case o.s.TOP_GAME:
            return (0, l.jsx)(b, {
                entry: n,
                ...i
            });
        case o.s.PLAYED_GAME:
            return (0, l.jsx)(I, {
                entry: n,
                ...i
            });
        case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(S, {
                entry: n,
                ...i
            });
        case o.s.LISTENED_SESSION:
            return (0, l.jsx)(j, {
                entry: n,
                ...i
            });
        case o.s.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(C, {
                entry: n,
                ...i
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function g(e) {
    let { errorFallback: n, ...t } = e;
    return (0, l.jsx)(s.S, {
        fallback: n,
        children: (0, l.jsx)(v, { ...t })
    });
}
function C(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, c.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(h.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function _(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, f.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(h.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function b(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(h.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function I(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(h.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function S(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, p.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(h.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function j(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, m.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(h.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
