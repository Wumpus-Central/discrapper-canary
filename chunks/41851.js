let i = null,
    e = null;
function c() {
    if (!i) throw Error('SDK not configured. Call setup({ apiURL: "..." }) first.');
    return i;
}
function a(l) {
    return e ? { ...l, headers: { "X-Incode-Hardware-Id": e, ...l?.headers } } : (l ?? {});
}
d.d(
    t,
    {},
    {
        a: function () {
            ((i = null), (e = null));
        },
        i: function () {
            return null !== i;
        },
        n: c,
        o: function (l) {
            i = l;
        },
        r: function () {
            return e;
        },
        s: function (l) {
            e = l;
        },
        t: {
            get: (l, t) => c().get(l, a(t)),
            post: (l, t, d) => c().post(l, t, a(d)),
            put: (l, t, d) => c().put(l, t, a(d)),
            patch: (l, t, d) => c().patch(l, t, a(d)),
            delete: (l, t) => c().delete(l, a(t)),
        },
    },
);
