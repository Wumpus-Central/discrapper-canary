d.d(t, { a: () => b, i: () => Z, n: () => n, o: () => c, r: () => s, s: () => a, t: () => o });
let i = null,
    e = null;
function c(l) {
    i = l;
}
function a(l) {
    e = l;
}
function s() {
    return e;
}
function n() {
    if (!i) throw Error('SDK not configured. Call setup({ apiURL: "..." }) first.');
    return i;
}
function Z() {
    return null !== i;
}
function b() {
    (i = null), (e = null);
}
function m(l) {
    return e ? { ...l, headers: { "X-Incode-Hardware-Id": e, ...l?.headers } } : (l ?? {});
}
let o = {
    get: (l, t) => n().get(l, m(t)),
    post: (l, t, d) => n().post(l, t, m(d)),
    put: (l, t, d) => n().put(l, t, m(d)),
    patch: (l, t, d) => n().patch(l, t, m(d)),
    delete: (l, t) => n().delete(l, m(t)),
};
