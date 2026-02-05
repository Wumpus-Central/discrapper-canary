n.d(t, { f: () => x, v: () => C });
var l = n(627968),
    a = n(64700),
    r = n(284009),
    s = n.n(r),
    i = n(681154),
    o = n(61259),
    d = n(380349),
    c = n(420009),
    u = n(315093),
    m = n(438414),
    p = n(873498),
    A = n(653826);
let h = a.createContext(void 0);
function C() {
    let e = a.useContext(h);
    return s()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e;
}
function E(e) {
    let { entry: t, ...n } = e,
        a = { baseEntryData: (0, c.A)({ entry: t, channel: n.channel }), ...n };
    switch (t.content_type) {
        case i.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(I, { entry: t, ...a });
        case i.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(_, { entry: t, ...a });
        case i.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(f, { entry: t, ...a });
        case i.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(g, { entry: t, ...a });
        case i.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(T, { entry: t, ...a });
        case i.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(N, { entry: t, ...a });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function x(e) {
    let { errorFallback: t, ...n } = e;
    return (0, l.jsx)(o.t, { fallback: t, children: (0, l.jsx)(E, { ...n }) });
}
function N(e) {
    let { entry: t, children: n, ...a } = e,
        r = (0, d.A)({ entry: t, ...a });
    return (0, l.jsx)(h.Provider, { value: { parsedEntry: r, ...a }, children: n });
}
function I(e) {
    let { entry: t, children: n, ...a } = e,
        r = (0, p.A)({ entry: t, ...a });
    return (0, l.jsx)(h.Provider, { value: { parsedEntry: r, ...a }, children: n });
}
function _(e) {
    let { entry: t, children: n, ...a } = e,
        r = (0, u.A)({ entry: t, ...a });
    return (0, l.jsx)(h.Provider, { value: { parsedEntry: r, ...a }, children: n });
}
function f(e) {
    let { entry: t, children: n, ...a } = e,
        r = (0, u.A)({ entry: t, ...a });
    return (0, l.jsx)(h.Provider, { value: { parsedEntry: r, ...a }, children: n });
}
function g(e) {
    let { entry: t, children: n, ...a } = e,
        r = (0, A.A)({ entry: t, ...a });
    return (0, l.jsx)(h.Provider, { value: { parsedEntry: r, ...a }, children: n });
}
function T(e) {
    let { entry: t, children: n, ...a } = e,
        r = (0, m.A)({ entry: t, ...a });
    return (0, l.jsx)(h.Provider, { value: { parsedEntry: r, ...a }, children: n });
}
