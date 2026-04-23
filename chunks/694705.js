n.d(t, { f: () => x, v: () => A });
var a = n(627968),
    l = n(64700),
    r = n(284009),
    i = n.n(r),
    s = n(681154),
    o = n(61259),
    d = n(380349),
    c = n(420009),
    u = n(315093),
    m = n(438414),
    _ = n(873498),
    p = n(653826);
let h = l.createContext(void 0);
function A() {
    let e = l.useContext(h);
    return i()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e;
}
function C(e) {
    let { entry: t, ...n } = e,
        l = { baseEntryData: (0, c.A)({ entry: t, channel: n.channel }), ...n };
    switch (t.content_type) {
        case s.ContentInventoryEntryType.TOP_ARTIST:
            return (0, a.jsx)(E, { entry: t, ...l });
        case s.ContentInventoryEntryType.TOP_GAME:
            return (0, a.jsx)(I, { entry: t, ...l });
        case s.ContentInventoryEntryType.PLAYED_GAME:
            return (0, a.jsx)(N, { entry: t, ...l });
        case s.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, a.jsx)(g, { entry: t, ...l });
        case s.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, a.jsx)(v, { entry: t, ...l });
        case s.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, a.jsx)(f, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function x(e) {
    let { errorFallback: t, ...n } = e;
    return (0, a.jsx)(o.t, { fallback: t, children: (0, a.jsx)(C, { ...n }) });
}
function f(e) {
    let { entry: t, children: n, ...l } = e,
        r = (0, d.A)({ entry: t, ...l });
    return (0, a.jsx)(h.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function E(e) {
    let { entry: t, children: n, ...l } = e,
        r = (0, _.A)({ entry: t, ...l });
    return (0, a.jsx)(h.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function I(e) {
    let { entry: t, children: n, ...l } = e,
        r = (0, u.A)({ entry: t, ...l });
    return (0, a.jsx)(h.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function N(e) {
    let { entry: t, children: n, ...l } = e,
        r = (0, u.A)({ entry: t, ...l });
    return (0, a.jsx)(h.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function g(e) {
    let { entry: t, children: n, ...l } = e,
        r = (0, p.A)({ entry: t, ...l });
    return (0, a.jsx)(h.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function v(e) {
    let { entry: t, children: n, ...l } = e,
        r = (0, m.A)({ entry: t, ...l });
    return (0, a.jsx)(h.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
